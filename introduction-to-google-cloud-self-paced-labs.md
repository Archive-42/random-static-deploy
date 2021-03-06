<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/79f4ff43-7694-4d95-8d57-be4696da8f4b.png" alt="Author avatar" class="jsx-3841407315" />

Google Cloud

Introduction to Google Cloud Self Paced Labs
============================================

### Google Cloud

-   Oct 14, 2020
-   12 Min read
-   2,641 Views

-   Oct 14, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">12 Min</span> read
-   2,641 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Cloud</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Cloud Platforms</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Google Cloud Platform</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Cloud Platforms</span>

Introduction

24

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-featuresandcomponents" class="menu-link">Features and Components</a>
-   <a href="#module-accessingthecloudconsole" class="menu-link">Accessing the Cloud Console</a>
-   <a href="#module-signingintogooglecloud" class="menu-link">Signing in to Google Cloud</a>
-   <a href="#module-projectsinthecloudconsole" class="menu-link">Projects in the Cloud Console</a>
-   <a href="#module-navigationofcloudconsole" class="menu-link">Navigation of Cloud Console</a>
-   <a href="#module-accessingselfpacedlabsfromapluralsightaccount" class="menu-link">Accessing Self Paced Labs from a Pluralsight Account</a>
-   <a href="#module-supporteddevicesandbrowsers" class="menu-link">Supported devices and browsers</a>
-   <a href="#module-technicalaccess" class="menu-link">Technical Access</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

Google Cloud Self Paced Labs are hands-on lab in an online learning environment. These labs contain a set of instructions so as to walk through a live, real world, and scenario-based use case. In a lab you have access to Google Cloud, the actual environment you want to learn about, not a simulation or demo environment. You can access the lab environment from anywhere on the Internet using a standard browser.

Features and Components
-----------------------

Regardless of topic or expertise level, all Qwiklabs share a common interface. Labs all look like this:

![Google Cloud Labs](../../pluralsight2.imgix.net/guides/ddfe67b8-100f-433a-afc8-53a08cae4b68_Google_1.html)

### Start Lab (button)

Clicking this will create a temporary Google Cloud environment with all the necessary services and credentials enabled so you can dive in and get hands-on practice with the lab's material. Once clicked, you will start a countdown timer that gives you a set amount of time to complete the lab's steps. Once the timer hits 00:00:00, your lab environment and temporary credentials will be deleted.

### End Lab (button)

It may take a moment for the Google Cloud environment and credentials to spin up???please be patient. Once the timer in the top right corner starts ticking and the Start Lab button turns into a red End Lab button, everything is in place and you're all set to log in to the Cloud Console.

Make sure that you do not click the End Lab button until you have completed all the tasks required of you. Once clicked, your temporary credentials will be invalidated and you will no longer be able to access the work you've done throughout the lab. Only when you reach the end and have made sure that you've completed all the necessary steps, click the End Lab button. You must click this button when you finish???if you do not, you won't be able to take another lab afterwards (Qwiklabs has protections in place that prevent concurrent enrollment.)

Ending a lab will remove your access to the Google Cloud project as well as the services and work you've done in it. If you go back to the Cloud console, you will see that you've been signed out automatically, and you can close that tab.

### Time

The counter on the left specifies the amount of time you have to complete a lab. As mentioned earlier, once you click the Start Lab button the timer will count down until it reaches 00:00:00. When it does, your temporary Google Cloud environment and resources will be deleted. Labs range from 30 minutes to 2 hours, depending on the length and complexity, and the experience of the user. Time given should be enough time to complete the work, but a user can engage with a lab up to five times.

![Google Cloud Labs timer](../../pluralsight2.imgix.net/guides/eb2ab647-9f50-4a80-93c0-c7e78eea097b_Google_2.html)

### Score

Most, but not all labs include a score. This feature is called "activity tracking" and ensures you complete specified steps in a lab. To pass a lab with activity tracking, you need to complete all the steps in order (only then will you receive completion credit).

![Google Cloud Labs store](../../pluralsight2.imgix.net/guides/438f9950-fdec-4946-8faa-79fecd769d62_Google_3.html)

Accessing the Cloud Console
---------------------------

Now that your lab instance is up and running, take a look at the left panel. It should be populated with an Open Google Console button and Username, Password, and Project ID fields.

![Open Google Console](../../pluralsight2.imgix.net/guides/9df155c0-975c-41c8-b60c-af9acd80f77e_google_4.html)

### Open Google Console

This is a button that takes you to the Cloud Console???the web console and central development hub for Google Cloud. As you start working in Google Cloud, you will be doing the majority of your work from this interface. All of the Google Cloud Qwiklabs use the Cloud Console in some form or another.

### Project ID

A Google Cloud Project is an organizing entity for your Google Cloud resources. It often contains resources and services???for example, it may hold a pool of virtual machines, a set of databases, and a network that connects them with one another. Projects also contain settings and permissions, which specify security rules and who has access to what resources.

A Project ID is a unique identifier that is used to link Google Cloud resources and APIs to your specific project. Project IDs are unique across Google Cloud, meaning that there can only be one qwiklabs-gcp-xxx...., which makes it globally identifiable.

### Username and Password

These are credentials representing an identity in the Cloud Identity and Access Management (Cloud IAM) service that has access permissions (a role or roles), which allow you to work with Google Cloud resources in the project you've been allocated. These credentials are temporary, and will only work for the access time of the lab. This means that once the timer hits 0, you will no longer be able to access your Google Cloud project with those credentials.

Signing in to Google Cloud
--------------------------

Now that you have a better understanding of the Connection Details panel, let's use the details it contains to sign in to the Cloud Console. Click on the Open Google Console button. This will open the Google Cloud sign in page in a new browser tab.

You should now be on a page that resembles the following:

![Google account sign in](../../pluralsight2.imgix.net/guides/ba96b431-2595-4446-9d8a-f947b0a03769_google_5.html)

If you've ever signed in to a Google application like Gmail, this page should look familiar. To sign in to the Cloud Console, copy the Username from the Connection Details and paste it in to the Email or phone field and hit enter.

Wait! Make sure that you used the <a href="https://www.pluralsight.com/cdn-cgi/l/email-protection" class="__cf_email__">[email??protected]</a> email to sign in, NOT your personal or company email address!

Go back and copy the Password from the provisioned credentials on the Qwiklabs lab page and paste it into the Google Cloud sign in Password field and hit enter.

The username that resembles <a href="https://www.pluralsight.com/cdn-cgi/l/email-protection" class="__cf_email__">[email??protected]</a> is a Google account that has been created for your use as a Qwiklabs student. It has a specific domain name, which is "qwiklabs.net," and has been assigned IAM roles that allow you to access the Google Cloud Project that you have been provisioned.

If you successfully logged in, your page should resemble the following:

![Google terms of service](../../pluralsight2.imgix.net/guides/3e9fb1a5-bb4b-4c6d-84b4-eac46e091375_google_6.html)

Go ahead and click Accept to indicate your acknowledgement of Google's terms of service and privacy policy. You will then be brought to a "Protect your account" page. Since this is a temporary account, don't worry about updating recovery phone numbers or emails. Click Done.

You will now be brought to the "Updates to Terms of Service" page???for email updates regarding future announcements check the No box. Check the Yes box to agree to the Google Cloud's terms of service.

And just like that, you've successfully accessed the Cloud Console with your Qwiklabs credentials! Your page should now resemble the following:

![Google Cloud Console](../../pluralsight2.imgix.net/guides/dfc5d317-2aca-411f-841f-8b18a49edf8e_google_7.html)

Projects in the Cloud Console
-----------------------------

We touched on Google Cloud projects earlier when we examined the components of the "Connection Details" panel. Here's the definition once again:

> A Google Cloud Project is an organizing entity for your Google Cloud resources. It often contains resources and services???for example, it may hold a pool of virtual machines, a set of databases, and a network that connects them with one another. Projects also contain settings and permissions, which specify security rules and who has access to what resources.

If you look in the top-left side of the console, you will see a panel called Project info which should resemble the following:

![Project info](../../pluralsight2.imgix.net/guides/19d3fd09-4242-4f14-b074-00175cbf0324_google_8.html)

As you see, your project has a name, ID, and number. These identifiers are frequently used when interacting with Google Cloud services. You are working out of one project so you can get practice with a specific service or feature of Google Cloud.

You probably haven't noticed it, but you actually have access to more than one Google Cloud project. In fact, in some labs you may be provisioned more than one project to accomplish the tasks assigned. If you click on the drop-down menu with your project name and select ALL, you will see that there is a Qwiklabs Resources project visible as well:

![Select a project](../../pluralsight2.imgix.net/guides/4ff34c1b-6294-4180-9375-d7270e774ed8_google_9.html)

Do not switch over to the Qwiklabs Resources project at this point! However, you may use it later in other labs.

It's not uncommon for large enterprises or experienced users of Google Cloud to have dozens to thousands of Google Cloud projects. Organizations use Google Cloud in different ways, so projects are a good way to separate cloud-computing services (by team or product for example).

Qwiklabs Resources is a project that contains files, datasets, and machine images for certain labs and can be accessed from every Google Cloud lab environment. It's important to note that Qwiklabs Resources is shared (read only) with all Qwiklabs users, meaning you won't be able to delete or modify it.

The Google Cloud project that you are working out of and whose name resembles qwiklabs-gcp-xxx... is temporary, meaning the project and everything it contains will be deleted once the lab ends. Whenever you start a new lab, you will be given access to one or more new Google Cloud project(s), and there (not Qwiklabs Resources) is where you will run all of the lab steps.

Navigation of Cloud Console
---------------------------

To learn more about the Google Cloud console, the introductory lab A Tour of Qwiklabs and Google Cloud provides an overview of navigation of the console, roles and permissions, APIs and services, and Cloud Shell.

Accessing Self Paced Labs from a Pluralsight Account
----------------------------------------------------

You are able to access Google Cloud Labs directly from your Pluralsight account, if you are an Enterprise user or have been upgraded to the Cloud labs add-on SKU. The Cloud labs landing page lists all labs by cloud provider in alphabetical order. The drop down on the right hand side provides a description of the lab.

![Google Cloud Labs on Pluralsight](../../pluralsight2.imgix.net/guides/cf1d5c2d-7e15-4717-8062-404f62af69a9_google_10.html)

To launch the lab, click Launch Google Cloud Lab, which will open a new tab to populate the lab of choice in Qwiklabs. Proceed through the steps above for your hands on learning.

When you conclude your lab, you can return to Pluralsight which is still open in the original tab.

Supported devices and browsers
------------------------------

### Devices

Run labs from a laptop or desktop computer that has an internet connection and a supported browser.

### Not Supported

Mobile devices such as an iPad or smartphone are not recommended for taking a lab, because of limitations in the display, using multiple windows, and keyboard. Labs involving a Cloud console might not work at all on a mobile device.

### Browsers

All of the latest versions of the popular browsers are supported by Qwiklabs. However, for the best experience, we recommend Firefox or Chrome.

### Incognito/Private Mode Required

You must be able to run your browser in incognito/private mode.

### PDF Viewing

If your lab instructions are in Adobe PDF format, you might need to enable PDF viewing in your browser settings. Sometimes with older browsers or out-of-date Adobe software, PDFs are not visible and you get a message requiring you to install or update your Adobe PDF viewing software (plugin).

Technical Access
----------------

### Google Cloud Channels on Pluralsight

If you have an Enterprise account, you can subscribe to the Google Cloud Channel to access labs grouped by Google Cloud Solutions, like Infrastructure and DevOps, Big Data, Websites, and App Dev.

24

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)
