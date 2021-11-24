<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/9be54a1d-e543-404c-8736-beb1adf2cc26.jpg" alt="Author avatar" class="jsx-3841407315" />

Kimaru Thagana

Packaging a Django App Using Docker, NGINX, and Gunicorn
========================================================

### Kimaru Thagana

-   Sep 28, 2020
-   7 Min read
-   34,513 Views

-   Sep 28, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">7 Min</span> read
-   34,513 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">IT Infrastructure</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Container Management</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Docker</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Containers</span>

Introduction

126

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-creatingasampledjangoapp" class="menu-link">Creating a Sample Django App</a>
-   <a href="#module-packagingthedjangoappusingdocker" class="menu-link">Packaging the Django App Using Docker</a>
-   <a href="#module-testingthelivedockerizedapp" class="menu-link">Testing the Live Dockerized App</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

In app development, a critical, make-or-break stage is pushing to production or making an app production-ready. Certain configurations need to be done to ensure there are no breakages, such as security breaches or exposing sensitive configurations such as secret keys. Django web development is no different. How the app runs in development is very different from how it runs in production.

To serve in production, the Django application needs to have:

1.  A stable and reliable web server gateway interface[(WSGI)](https://www.fullstackpython.com/wsgi-servers.html) for receiving HTTP requests
2.  A proxy server that can also act as a [load balancer](https://www.nginx.com/resources/glossary/load-balancing/) in the event the Django app receives heavy HTTP traffic

This guide will explore setting up a Django app with [Gunicorn](https://gunicorn.org/) as the WSGI and [NGINX](https://www.nginx.com/) as the proxy server. For ease of setup, the guide will package all these using Docker. It therefore assumes that you have at least *intermediate* level experience with Docker and Docker Compose and at least *beginner* level skills in Django.

Creating a Sample Django App
----------------------------

The app will be a simple Django app that displays a "hello world" message using an [HTTPResponse](https://docs.djangoproject.com/en/3.1/ref/request-response/#httpresponse-subclasses). The starter code for the app can be found at this github [link](https://github.com/KimaruThagna/sampleDjangoApp).

Download and use it for the rest of the guide.

Packaging the Django App Using Docker
-------------------------------------

For a multi-container application, this activity is done in two stages: 1) developing the Docker file for the main application, and 2) stitching everything up with the rest of the containers using Docker Compose.

### App Docker File

The Docker file is simple. It sets up the Django app within its own image.

    1FROM python:3.8.3-alpine
    2
    3ENV MICRO_SERVICE=/home/app/microservice
    4RUN addgroup -S $APP_USER && adduser -S $APP_USER -G $APP_USER
    5# set work directory
    6
    7
    8RUN mkdir -p $MICRO_SERVICE
    9RUN mkdir -p $MICRO_SERVICE/static
    10
    11# where the code lives
    12WORKDIR $MICRO_SERVICE
    13
    14# set environment variables
    15ENV PYTHONDONTWRITEBYTECODE 1
    16ENV PYTHONUNBUFFERED 1
    17
    18# install psycopg2 dependencies
    19RUN apk update \
    20    && apk add --virtual build-deps gcc python3-dev musl-dev \
    21    && apk add postgresql-dev gcc python3-dev musl-dev \
    22    && apk del build-deps \
    23    && apk --no-cache add musl-dev linux-headers g++
    24# install dependencies
    25RUN pip install --upgrade pip
    26# copy project
    27COPY . $MICRO_SERVICE
    28RUN pip install -r requirements.txt
    29COPY ./entrypoint.sh $MICRO_SERVICE
    30
    31CMD ["/bin/bash", "/home/app/microservice/entrypoint.sh"]

dockerfile

### Project Docker Compose File

Docker Compose will achieve the following:

1.  Spin up the three images: Nginx, Postgres, and Django app image

2.  Define the order of running. The Postgres container will run first, followed by Django container and finally the Nginx container.

To fully build the Nginx container, you need special Docker and conf files for it. Within your <span class="jsx-3120878690">`sampleApp`</span> folder, create a folder named <span class="jsx-3120878690">`nginx`</span>. Within the <span class="jsx-3120878690">`nginx`</span> directory, create a dockerfile and copy the codeblock below:

    1FROM nginx:1.19.0-alpine
    2
    3RUN rm /etc/nginx/conf.d/default.conf
    4COPY nginx.conf /etc/nginx/conf.d

dockerfile

In the same folder, create a file named <span class="jsx-3120878690">`nginx.conf`</span> and copy the code block below. This is the code that is responsible for setting up nginx.

    1upstream sampleapp {
    2    server web:8000;
    3}
    4
    5server {
    6
    7    listen 80;
    8
    9    location / {
    10        proxy_pass http://sampleapp;
    11        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    12        proxy_set_header Host $host;
    13        proxy_redirect off;
    14    }
    15    location /static/ {
    16        alias /home/app/microservice/static/;
    17    }
    18
    19}

conf

After this is done, create the main <span class="jsx-3120878690">`docker-compose.yml`</span> file. This will be the file responsible for running the whole project. In the main project folder, <span class="jsx-3120878690">`sampleApp`</span>, create a file named <span class="jsx-3120878690">`docker-compose.yml`</span> and copy the code block below.

    1version: '3.7'
    2
    3services:
    4  nginx:
    5    build: ./nginx
    6    ports:
    7      - 1300:80
    8    volumes:
    9      - static_volume:/home/app/microservice/static
    10    depends_on:
    11      - web
    12    restart: "on-failure"
    13  web:
    14    build: . #build the image for the web service from the dockerfile in parent directory
    15    command: sh -c "python manage.py makemigrations &&
    16                    python manage.py migrate &&
    17                    python manage.py initiate_admin &&
    18                    python manage.py collectstatic &&
    19                    gunicorn sampleApp.wsgi:application --bind 0.0.0.0:${APP_PORT}"
    20    volumes:
    21      - .:/microservice:rw # map data and files from parent directory in host to microservice directory in docker containe
    22      - static_volume:/home/app/microservice/static
    23    env_file:
    24      - .env
    25    image: sampleapp
    26
    27    expose:
    28      - ${APP_PORT}
    29    restart: "on-failure"
    30    depends_on:
    31      - db
    32  db:
    33    image: postgres:11-alpine
    34    volumes:
    35      - ./init.sql:/docker-entrypoint-initdb.d/init.sql
    36      - postgres_data:/var/lib/postgresql/data/
    37    environment:
    38      - POSTGRES_PASSWORD=${POSTGRES_PASSWORD}
    39      - POSTGRES_DB=${DB_NAME}
    40      - PGPORT=${DB_PORT}
    41      - POSTGRES_USER=${POSTGRES_USER}
    42    restart: "on-failure"
    43
    44
    45volumes:
    46  postgres_data:
    47  static_volume:

dockerfile

Testing the Live Dockerized App
-------------------------------

The whole project is set up and all that remains is to run it. Run the below Docker Compose command to spin up the containers.

    1docker-compose up --build

bash

To test if the whole project works, from the database, application, and nginx containers, access the app's home page and admin page. The home page, URL <span class="jsx-3120878690">`0.0.0.0:1300`</span>, should display a simple "hello world" message.

The admin page URL is <span class="jsx-3120878690">`0.0.0.0:1300/admin`</span>. Use the test credentials:

Username: admin

password: mypass123

You should see a screen like the one below. ![App hello world](../../pluralsight2.imgix.net/guides/5a7eb22d-73d3-4dea-a8a7-ef066275c719_Screenshot_from_2020-09-24_09-37-02.html)

This is what the admin page looks like. ![Admin page](../../pluralsight2.imgix.net/guides/6ff52fcf-dc72-4b38-acb9-5f3697a5366a_Screenshot_from_2020-09-24_09-39-26.html)

Conclusion
----------

Making a Django app production-ready just from declarative scripts in Docker is a big advantage for team leads and project managers. It gives them the ability to do configurations beforehand, allowing developers to focus on app development. Not only does this practice create a sense of uniformity in deployment practices, but it also saves vital time by allowing developers to focus on app development and business logic rather than setup and deployment.

Knowing how to package a Django app into an application-ready for deployment in a production environment is vital for developer roles such as DevOps engineers and full-stack with interest in Python for the web.

To further build upon these skills, take up the challenge of deploying the packaged application to a live server. Choose a suitable provider. Options include Linode, GCP, Digital Ocean, and AWS, among other cloud service providers.

126

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)
