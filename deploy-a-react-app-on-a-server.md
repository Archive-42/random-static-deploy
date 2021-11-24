<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/c7859b4f-a0e9-4f74-8559-62f43bdcabea.jpeg" alt="Author avatar" class="jsx-3841407315" />

Gaurav Singhal

Deploy a React App on a Server
==============================

### Gaurav Singhal

-   Nov 7, 2020
-   7 Min read
-   77,382 Views

-   Nov 7, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">7 Min</span> read
-   77,382 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Front End Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Client-side Frameworks</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">React</span>

Introduction

89

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-creatingareactapp" class="menu-link">Creating a React App</a>
-   <a href="#module-deployingreactapponnetlify" class="menu-link">Deploying React App on Netlify</a>
-   <a href="#module-deployingreactapponfirebase" class="menu-link">Deploying React App on Firebase</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

Once you've successfully built and tested your React app, the final step is hosting and deploying it on a server. This makes your React app public, allowing other users to see your app using a URL. There are numerous hosting and deployment services available online that can run your React app from a remote server with a few simple steps. This guide walks you through the entire process of deploying your React app on the web and running it from a remote server.

Creating a React App
--------------------

Create a simple <span class="jsx-3120878690">`hello-world-app`</span> using Create-React-App.

    1npx create-react-app hello-world-app

shell

Modify the <span class="jsx-3120878690">`App.js`</span> file as shown below.

    1import './App.css';
    2
    3function App() {
    4  return (
    5    <div className="App">
    6      <header className="App-header">
    7        <h1>Hello world app</h1>
    8      </header>
    9    </div>
    10  );
    11}
    12
    13export default App;

jsx

See how your app runs on your local server by running the following command:

    1npm start

shell

On the local server ([http://localhost:3000](http://localhost:3000/)) you can see a simple React app displaying a "hello world" message. The next step is to make this app production-ready for deployment. Inside the root directory run the following command:

    1npm run build

shell

This creates a <span class="jsx-3120878690">`build`</span> directory inside the root directory, which bundles your React app and minifies it into simple HTML, CSS, and JavaScript files. This <span class="jsx-3120878690">`build`</span> folder serves your app via a simple entry point, <span class="jsx-3120878690">`index.html`</span>, where your entire React app resides. Running your app via a remote server means running this <span class="jsx-3120878690">`index.html`</span> file on the server.

Deploying React App on Netlify
------------------------------

**Netlify** is a cloud service that allows you to host and deploy your React app in minutes. It has a variety of features, the most common being deploying using *continuous integration via Git* or *static deployment*.

### Continuous Integration via Git

You can push your React project on any Git platform, such as **GitLab**, **GitHub**, **Bitbucket**, etc., and connect the repository to Netlify's remote server for continuous integration. This auto-deploys your app whenever any changes are made to your default branch. You also have an option of *auto merging pull requests* from Github, Gitlab, etc.

Create a simple repository on any Git provider of your choice (say, GitHub) and push the <span class="jsx-3120878690">`hello-world-app`</span> on the repository. Ensure that you already have an account on Netlify. Go to the site’s section and click on the **New site from Git** button.

![netlify import project from git](../../pluralsight2.imgix.net/guides/d850b677-5682-49be-9f6d-c46b522c2012_f2FCvCu.html)

Select the Git provider (in this case, Github) and choose the repository.

![create new site on netlify](../../pluralsight2.imgix.net/guides/52a2b445-2aee-496b-83b0-48fe8fd34c75_0q9nlTU.html)

Configure the deploy settings. Select a default branch to deploy (you can choose the master branch or any other branch) and ensure that the build command is <span class="jsx-3120878690">`npm run build`</span> and the publish directory is <span class="jsx-3120878690">`/build`</span>.

![Deploy site on netlify](../../pluralsight2.imgix.net/guides/a1103613-62f9-4462-a482-6b34d2009069_is72UnF.html)

Click **Deploy site**, and your React app will be deployed on Netlify's remote server. After the deployment is successful, you'll get a public URL through which you can run your React app. Whenever you push any changes or merge any changes in the master branch, Netlify will automatically create a new build folder with updated files and deploy the changes on the remote server.

### Using Static Deployment

The second method is to directly deploy the <span class="jsx-3120878690">`build`</span> folder. Visit the Sites section, and below you will see a **file uploader panel**. Select your React app's <span class="jsx-3120878690">`build`</span> folder and drag and drop it on this area.

![Waiting for the live site](../../pluralsight2.imgix.net/guides/5a2a923b-5d7b-44f6-9c8a-800fb70a65a0_Q41YK5g.html)

Click **Deploy** and wait while Netlify deploys your app to their remote server.

Deploying React App on Firebase
-------------------------------

Firebase is Google's cloud service, which offers various backend features as a service to create *server-less* apps. Firebase also allows you to host and deploy your web app on their remote servers. To deploy your app on Firebase remote server, visit [firebase.google.com](firebase.google.html) and create an account. Click **Go to console**.

![Go to console](../../pluralsight2.imgix.net/guides/41c09bbb-9fd3-4dfa-99e8-2fa05cbf691b_LPbrLXo.html)

Create a new Firebase app for the web on the console.

![Firebase screenshot](../../pluralsight2.imgix.net/guides/67323eb6-d1e5-4158-b3b7-df947a06d384_rLKuxH2.html)

Follow the simple steps to create a new Firebase project. Now head back over to your React app and run the following command:

    1npm i -g firebase

shell

This installs firebase CLI to access various Firebase services via its command-line interface. Inside the root directory, run:

    1firebase init

shell

This creates a new Firebase project inside your React project. You may be prompted to log in first. Next, select the hosting feature.

![Firebase configurations](../../pluralsight2.imgix.net/guides/13cf4683-bc22-4874-accc-7b83697077d7_rmsbOD7.html)

Next, you'll be asked whether you want to create a new Firebase project or use an existing one. Since you already created a new Firebase project on the Firebase console, select **use existing project .**

![project setup for firebase](../../pluralsight2.imgix.net/guides/dff1d768-cce1-4718-ad29-728e65e408a9_83iskiu.html)

Next, you'll be asked a few configurational questions.

    1? what do you want to use as your public directory? build

shell

Since the production folder is the <span class="jsx-3120878690">`build`</span> directory, in this step you tell Firebase that the <span class="jsx-3120878690">`build`</span> directory should be served as the public directory for this project.

    1? Configure as a single-page app (rewrite all urls to /index.html)? Yes

shell

Select **Yes** to tell firebase that your entry point is <span class="jsx-3120878690">`index.html`</span>

    1? File public/index.html already exists. Overwrite? No

shell

Finally, you do not want to override your original <span class="jsx-3120878690">`index.html`</span> with any other files, so select **No** here. All configurational steps are complete—now you only need to run the following command inside the root directory:

    1firebase deploy 

shell

Firebase will now deploy your React app on its remote server and generate a URL for you, which you can use to run your React app from a remote server.

Conclusion
----------

Besides Firebase and Netlify, you can also explore other platforms like Heroku or AWS for deploying your React app. These cloud service providers also offer features such as setting up *SSL* for your app, using a custom domain, etc. Another interesting domain you can explore is [ngRok](https://ngrok.com/), which gives you secure tunnels to your localhost that can run your ReactJS from a remote server without actually deploying the app.

89

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)
