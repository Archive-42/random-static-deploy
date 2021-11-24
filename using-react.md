<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/7fc26c97-d391-471d-819e-0695a0c8c46d.jpg" alt="Author avatar" class="jsx-3841407315" />

Desmond Nyamador

Using React.js with Docker
==========================

### Desmond Nyamador

-   Nov 7, 2020
-   5 Min read
-   32,901 Views

-   Nov 7, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">5 Min</span> read
-   32,901 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Front End Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Client-side Frameworks</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">React</span>

Introduction

80

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-whatisdocker" class="menu-link">What is Docker?</a>
-   <a href="#module-setupdocker" class="menu-link">Set Up Docker</a>
-   <a href="#module-setupareactapp" class="menu-link">Set Up a React App</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

In modern software development, apps are developed with multiple frameworks, languages, and technologies. Managing updates, CI/CD, and deployments with a monolithic app can cause you so much trouble. Enter containers! In this guide, you'll learn about Docker and how to use it with your React app.

What is Docker?
---------------

[Docker](https://docker.com/) was introduced in 2013 by Docker Inc. It enables applications to run in an isolated state using *containers*. Doing this enables your app to be packaged with only the libraries and dependencies it needs. Unlike virtual machines, which provide hardware virtualization, a container provides OS-level virtualization by isolating the software from its environment, ensuring that it works uniformly despite differences, and solving the "it works on my machine" problem. Multiple containers can run on one host machine or over multiple machines using an orchestration tool like Docker-swarm or Kubernetes.

Set Up Docker
-------------

To install Docker, visit this [URL](https://docs.docker.com/get-docker/) and download the setup that suits your machine type. Docker uses a layered filesystem to build your container with the specifications of the container runtime provided by you in a file named **Dockerfile.** After installing Docker, run the following command in your terminal to verify Docker has been installed.

    1$ docker --version
    2Docker version 19.03.8, build afacb8b

bash

Set Up a React App
------------------

Next, pick any React app of your choice or set up another from scratch by running the command below.

    1$ npx create-react-app <your_app_name>
    2
    3#<your_app_name> - preferred name of your app

bash

Now create a file called **Dockerfile** at the root of your project and add the following.

    1# pull the base image
    2FROM node:alpine
    3
    4# set the working direction
    5WORKDIR /app
    6
    7# add `/app/node_modules/.bin` to $PATH
    8ENV PATH /app/node_modules/.bin:$PATH
    9
    10# install app dependencies
    11COPY package.json ./
    12
    13COPY package-lock.json ./
    14
    15RUN npm install
    16
    17# add app
    18COPY . ./
    19
    20# start app
    21CMD ["npm", "start"]

docker

What's happening here 🤔?

You first instructed Docker to pull the official Node image, set a working directory for your app, and install all your dependencies.

To ensure you don't end up with a bloated container, add a **.dockerignore** file to avoid copying unnecessary files into the container. Inside your **.dockerignore** file, add the following.

    1node_modules
    2npm-debug.log
    3build
    4.dockerignore
    5**/.git
    6**/.DS_Store
    7**/node_modules

docker

To get your container up, run the following command in your terminal to build an image upon which your container will be built.

    1$ docker build -t ps-container:dev .

docker

Your output should look similar to the following :

    1Sending build context to Docker daemon  630.3kB
    2Step 1/8 : FROM node:alpine
    3 ---> 89234s7298ds
    4Step 2/8 : WORKDIR /app
    5 ---> Using cache
    6 ---> 8da38hd8a9848
    7Step 3/8 : ENV PATH /app/node_modules/.bin:$PATH
    8 ---> Using cache
    9 ---> e930973d8h383
    10Step 4/8 : COPY package.json ./
    11 ---> Using cache
    12 ---> jnd3898398h8r
    13Step 5/8 : COPY package-lock.json ./
    14 ---> 390jf983h8hf8
    15Step 6/8 : RUN npm install
    16 ---> Running in 23uf2983f98
    17 ...
    18Step 7/8 : COPY . ./
    19 ---> ca58e0ca87b9
    20Step 8/8 : CMD ["npm", "start"]
    21 ---> Running in cdcb3617af0c
    22Removing intermediate container cdcb3617af0c
    23 ---> d89b7bb5b6fa
    24Successfully built d89b7bb5b6fa
    25Successfully tagged ps-container:dev
    26
    27$ docker image ls
    28REPOSITORY              TAG                 IMAGE ID            CREATED              SIZE
    29ps-container             dev                3894y8h893hd        About a minute ago   392MB

bash

Now run the following command to create and run your container.

    1$ docker run -it --rm \
    2-v ${PWD}:/app \
    3-v /app/node_modules \
    4-p 3001:3000 \
    5-e CHOKIDAR_USEPOLLING=true \
    6ps-container:dev

bash

Notice what the code is doing: 1. <span class="jsx-3120878690">`it`</span> starts the container in interactive mode. 2. <span class="jsx-3120878690">`-rm`</span> removes the container and volumes after the container exits. 3. <span class="jsx-3120878690">`v ${PWD}:/app`</span> mounts the code into the container at <span class="jsx-3120878690">`/app`</span>.

Conclusion
----------

In this guide, you learned how to use Docker with React, build an image, and create a Docker container from that image. Visit the official documentation to learn more at [https://docs.docker.com](https://docs.docker.com/). Feel free to ping me on Twitter if you'd like to chat more at [@DesmondNyamador](https://twitter.com/DesmondNyamador).

80

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)
