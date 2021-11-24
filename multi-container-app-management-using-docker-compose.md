<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/9be54a1d-e543-404c-8736-beb1adf2cc26.jpg" alt="Author avatar" class="jsx-3841407315" />

Kimaru Thagana

Multi-Container App Management Using Docker-Compose
===================================================

### Kimaru Thagana

-   Sep 30, 2020
-   6 Min read
-   6,548 Views

-   Sep 30, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">6 Min</span> read
-   6,548 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">IT Infrastructure</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Container Management</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Docker</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Containers</span>

Introduction

29

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-dockercompose" class="menu-link">Docker Compose</a>
-   <a href="#module-samplescript" class="menu-link">Sample Script</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

Containerization of apps with Docker is a fast-growing practice within the DevOps community. As apps get more complex, it requires more skill and robustness to manage them.

An easy management paradigm is separation of concerns. This is where the designer of a system creates logical layers that are separate but interdependent. With Docker, this is possible with the ability to separate an app into several containers.

This guide will explore multi-container apps and how you can use [Docker Compose](https://docs.docker.com/compose/) to manage the running of these containers.

It is assumed that you have at least beginner knowledge of Django apps and Docker. A guide that introduces Docker can be found [here](getting-started-with-docker.html).

Docker Compose
--------------

Docker Compose is a tool for defining and running multi-container apps of any kind. To get started, Docker Compose needs to be installed. To install, run the command

    1pip install docker-compose

bash

Docker Compose directives are written in YAML format and are hosted in a file commonly named <span class="jsx-3120878690">`docker-compose.yml`</span>. Common Docker Compose commands include:

-   <span class="jsx-3120878690">`docker-compose up --build`</span> builds the images for every service defined in the <span class="jsx-3120878690">`docker-compose.yml`</span> file and run the containers in the predefined order.

-   <span class="jsx-3120878690">`docker-compose down                                               --volumes`</span> removes all the containers built by your compose script as well as any storage volumes.

-   <span class="jsx-3120878690">`docker-compose ps`</span> lists all currently active containers.

-   <span class="jsx-3120878690">`docker-compose stop`</span> halts the running of the currently active containers.

    To further explore more Docker Compose commands, follow [this guide](https://docs.docker.com/compose/reference/).

Sample Script
-------------

For this sample script, suppose you are designing a Docker Compose file for a Django microservice app that is to be deployed to production and managed using Docker.

The setup involves three containers: an app container that runs the Django app, a Postgres container that runs the database, and an [NGINX](https://www.nginx.com/) container that serves the app.

There are also static storage volumes where data and static files are stored. Since there are several containers at play, there should be an order in which they start up. Docker Compose addresses this with the <span class="jsx-3120878690">`depends_on`</span> directive. The directive informs Docker Compose which containers should start running before others can be executed.

In the sample script below, the common Docker Compose directives that have been discussed previously are put into practice.

    1version: '3.7'
    2
    3services:
    4  nginx: # service name
    5    build: ./nginx # location of the dockerfile to build the image for this service
    6    ports: # host:container- Bind the container port(80) to the host port(1339) Any traffic from the host via port 1339 will go to the docker container via port 80 
    7      - 1339:80 
    8    volumes: # define location where static files will live
    9      - static_volume:/home/app/microservice/static
    10    depends_on:
    11      - web # web should be up and running for nginx to start
    12    restart: "on-failure" # restart nginx container if it fails
    13  web:
    14    build: . #build the image for the web service from the dockerfile in parent directory
    15    # issue commands to the application n the container
    16    command: sh -c "python manage.py makemigrations &&
    17                    python manage.py migrate &&
    18                    python manage.py collectstatic &&
    19                    gunicorn django_microservice.wsgi:application --bind 0.0.0.0:${APP_PORT}"
    20    volumes:
    21      - .:/microservice:rw # map data and files from parent directory in host to microservice directory in docker containe
    22      - static_volume:/home/app/microservice/static
    23    env_file: # set the location and name of the env file to use when building the containers
    24      - .env
    25    image: django_microservice # image name
    26
    27    expose:
    28      - ${APP_PORT} # internally expose the given port to other containers within the docker network
    29    restart: "on-failure"
    30    depends_on:
    31      - db # web will only start if db is up and running
    32  db: # service name
    33    image: postgres:11-alpine # base image from dockerhub
    34    volumes:
    35      - ./init.sql:/docker-entrypoint-initdb.d/init.sql
    36      - postgres_data:/var/lib/postgresql/data/ # define where the postgres data will live within the postgres container
    37    environment: # set environment variables from the .env file set using the env_file directive
    38      - POSTGRES_PASSWORD=${POSTGRES_PASSWORD}
    39      - POSTGRES_DB=${DB_NAME}
    40      - PGPORT=${DB_PORT}
    41      - POSTGRES_USER=${POSTGRES_USER}
    42    restart: "on-failure" # restart db service if it fails
    43
    44
    45volumes:
    46  postgres_data: # setup storage volume for data held by the Postgres db
    47  static_volume: # setup storage volume for static files such as css files and images.

dockerfile

Conclusion
----------

The skills covered in this guide are vital for DevOps and full stack developer positions in any organization. The next level above multi-container single app management within the Docker ecosystem is multi-app or microservice management with technologies like [Docker Swarm](https://docs.docker.com/engine/swarm/) and [Kubernetes](https://kubernetes.io/).

These are referred to as *container orchestration* tools. They are used to manage the lifecycle and running of large apps designed as several individual containerized components referred to as [microservices](https://microservices.io/). To learn more about how container orchestration tools are used to manage microservice-based apps, follow [this guide](https://blog.newrelic.com/engineering/container-orchestration-explained/).

29

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)
