<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/d87e74d1-8e02-494a-9052-eb43fe48f3ac.jpg" alt="Author avatar" class="jsx-3841407315" />

Pavneet Singh

Setting Up a Firebase Project for React Native
==============================================

### Pavneet Singh

-   Oct 17, 2020
-   12 Min read
-   9,134 Views

-   Oct 17, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">12 Min</span> read
-   9,134 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Front End Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Client-side Frameworks</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">React</span>

Introduction

20

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-prerequisites" class="menu-link">Prerequisites</a>
-   <a href="#module-createandrunareactnativeproject" class="menu-link">Create and Run a React Native Project</a>
-   <a href="#module-addingfirebasedependencies" class="menu-link">Adding Firebase Dependencies</a>
-   <a href="#module-creatingafirebaseproject" class="menu-link">Creating a Firebase Project</a>
-   <a href="#module-addnativeprojectsinfirebaseproject" class="menu-link">Add Native Projects in Firebase Project</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

Firebase is one of the most prominent cloud computing platforms to develop mobile and web apps. Firebase offers numerous [MBaaS](https://en.wikipedia.org/wiki/Mobile_backend_as_a_service) services for mobile development, including a database (NoSQL and document), file storage, authentication, crash reporting, notifications (FCM), analytics, hosting, dynamic links, remote config, A/B testing, machine learning, and so on.

Uploading images is a common feature in app development to process, store, and share images. Firebase provides a storage API service to store multimedia content. The best feature of the Firebase storage API is its robustness. It will automatically pause or resume the uploading task according to the network strength.

Firebase services can also be integrated with React Native projects, but this requires platform-specific (Android and iOS) setup and configurations. To cover everything, the whole process has been broken down into three guides:

1.  Setting Up a Firebase Project for React Native (this guide)

2.  [Integrate Firebase Storage and Image Picker in React Native](https://app.pluralsight.com/guides/integrate-firebase-storage-and-image-picker-in-react-native)

3.  [Upload Images to Firebase Storage in React Native](https://app.pluralsight.com/guides/upload-images-to-firebase-storage-in-react-native)

This guide explains the implementation details to create a project in Firebase console and configure a React Native project with Firebase. The complete optimized codebase is available on the [RNFirebaseStorage](https://github.com/Pavneet-Sing/RNFirebaseStorage) repository.

Prerequisites
-------------

React Native follows the development structure and tools of React, so this guide assumes that you have basic knowledge of the following technologies and tools.

### Technologies

-   Basics of JavaScript
-   HTML, Objects, and EcmaScript 6 (ES6 classes and arrow functions, etc.)

### Installed Tools

-   [Node.js](https://nodejs.org/en/download/)
-   Command-line interface (CLI)
-   XCode and [CocoaPods](https://cocoapods.org/) (explained in next section)

Follow the [Getting Started with React Native on Android](getting-started-with-reactnative-on-android.html) guide to learn the basics of React Native development.

Create and Run a React Native Project
-------------------------------------

The first step is to create a React Native project and set up the runtime environment:

1.  Create a React Native project:

    1npx react-native init RNFirebaseStorage

bash

1.  Follow the [steps to create an android virtual device (AVD)](https://developer.android.com/studio/run/managing-avds)
2.  Run the projects:

    1cd RNFirebaseStorage
    2npx react-native run-android --verbose
    3# or to run iOS app
    4npx react-native run-iOS --verbose

bash

The above command process may ask to install <span class="jsx-3120878690">`CocoaPods`</span>, which is a dependency manager for iOS projects and is required to run iOS apps.

In the above command, <span class="jsx-3120878690">`--verbose`</span> is optional but useful to view any potential issues, like below.

**Note:** Make sure to follow this guide's [Known Gradle Issues](getting-started-with-reactnative-on-android.html) section to learn about <span class="jsx-3120878690">`InvokerHelper`</span> or build tool issues of <span class="jsx-3120878690">`gradle`</span> in React Native.

Adding Firebase Dependencies
----------------------------

Firebase SDK modules allow the apps to directly communicate with the Firebase server app. The [react-native-firebase](https://github.com/invertase/react-native-firebase/tree/master/packages/app) NPM module provides the basic functionality to integrate Firebase services with the React Native apps using JavaScript and native modules. Execute the below commands in the root folder of the React Native project to install the <span class="jsx-3120878690">`react-native-firebase`</span> module:

    1npm install @react-native-firebase/app
    2# or using yarn
    3# yarn add @react-native-firebase/app

bash

Creating a Firebase Project
---------------------------

To create Firebase projects for Android and iOS, create an account on [Firebase Console](https://firebase.google.com/), then select the **Go to console** option for the next steps: ![Firebase console](../../pluralsight2.imgix.net/guides/66805d33-707b-4508-b07b-fbee8cc9011f_1._go_to_console.html)

1.  **Create/Add a Firebase Project**: The first time, Firebase will show a **Create a project** option to set up a project. If there is already an existing project in the current account, select the **Add Project** option to create a new project: ![Add project](../../pluralsight2.imgix.net/guides/5c93159d-63dd-4b97-9ac2-cdddcb6ec7c9_add_project.html)

2.  **Add Name**: A project name can be anything but should be at least four characters long and should contain numbers, letters, spaces, and <span class="jsx-3120878690">`-!'"`</span> special characters only. Provide a name and click **continue**: ![Add FB project](../../pluralsight2.imgix.net/guides/9a6f3a66-5c69-4397-806f-5c57f25f7376_2._Add_project_name.html)

Project names can be duplicates, but always use a unique name to avoid possible configuration issues.

1.  **Create Project**: As of now, there is no need for any other Firebase service, so disable Google Analytics and select the **Create project** button: ![Enable Analytics](../../pluralsight2.imgix.net/guides/7f7bb0de-3def-4df3-bd20-dfd6512d142c_3._analytics.html)

Select the default account for analytics: ![Configure Analytics account ](../../pluralsight2.imgix.net/guides/e345d0d1-3933-4d11-9493-cc466f76b0d7_3.2_config_google_analytics.html)

It might take a couple of minutes to create a project. Press **continue** to go to the project screen after the successful project creation.

Add Native Projects in Firebase Project
---------------------------------------

Firebase supports mobile and web apps, so the platform-specific apps need to be added under the Firebase project and the native (Android and iOS) project files need to be configured:

### Setting Up an Android Firebase Project

Select the Android app option in the Firebase project console and follow the steps to create and configure an Android project:

![Create an android project](../../pluralsight2.imgix.net/guides/7bf8d55f-7f83-4636-96c9-3f9bab7364a1_4.0_create_android_project.html)

1.  **Add Package**: A package name is required to create an Android project. It's a unique identifier of an Android app. The package name is used to identify an app on the Play Store and device, so it must be a unique value. The package name is defined as a string value of <span class="jsx-3120878690">`applicationId`</span> key in the <span class="jsx-3120878690">`RNFirebaseStorage/android/app/build.gradle`</span> file:

    1applicationId "com.rnfirebasestorage"

groovy

![Add Android package name](../../pluralsight2.imgix.net/guides/d18943d9-5e6e-492b-9aeb-87b3e0da00e8_4.1_register_app.html)

Add the package name in the **Android package name** field and provide a nickname to register the Android app.

1.  **Add Configuration File**: Download the <span class="jsx-3120878690">`google-services.json`</span> file, then copy and paste the file in <span class="jsx-3120878690">`RNFirebaseStorage/android/app`</span> folder.

![Download package.json android](../../pluralsight2.imgix.net/guides/d98275c6-b23d-43a9-8494-9e10863dcad6_5._register_android_app.html)

1.  **Configure Google Services**: Firebase configurations requires <span class="jsx-3120878690">`google-services`</span> plugins to build the project, so add the <span class="jsx-3120878690">`google-services`</span> dependency in the <span class="jsx-3120878690">`RNFirebaseStorage/android/build.gradle`</span> file:

    1buildscript {
    2ext {//...}
    3repositories {//...}
    4dependencies {
    5//...
    6classpath 'com.google.gms:google-services:4.3.3' // add this
    7}
    8}

groovy

Add the <span class="jsx-3120878690">`google-services`</span> plugin in the <span class="jsx-3120878690">`RNFirebaseStorage/android/app/build.gradle`</span> file at the top:

    1// apply plugin: "com.android.application"
    2apply plugin: "com.google.gms.google-services" // add this

groovy

There is no need to add any other Firebase SDK dependency for Android. If you've opted for Google Analytics, it should also be added as an NPM module dependency, not as a <span class="jsx-3120878690">`gradle`</span> dependency. 4. **Verify App**: Run the Android project to confirm the successful integration with Firebase:

    1npx react-native run-android --verbose

bash

![Run to verify success](../../pluralsight2.imgix.net/guides/707a1de5-e578-4f5e-bd42-1bfd7654e4fa_Run_success.html)

**Note**: In case of any issue, make sure that the <span class="jsx-3120878690">`google-services.json`</span> is correct, though there can be a slight delay to receive the update status. Alternately, run

    1cd android && ./gradlew clean && cd ..

bash

to clean the project and rerun the project.

### Setting Up iOS Firebase Project

Select the iOS app option in the Firebase project console and follow the steps to configure the iOS project in the React Native project: ![Add IOS](../../pluralsight2.imgix.net/guides/683bf3c0-9289-4a2e-9087-4c0848488929_9._add_ios.html)

1.  **Add Bundle ID**: A bundle ID (like <span class="jsx-3120878690">`package-name`</span>) is a unique identifier that is required to create an iOS project in the Firebase console. The best way to get the bundle ID is via using <span class="jsx-3120878690">`XCode`</span>, since often it's not available directly. The configurations files often use the value of globally defined variables. Open the <span class="jsx-3120878690">`RNFirebaseStorage.xcodeproj`</span> (<span class="jsx-3120878690">`RNFirebaseStorage.workspace`</span>) file with <span class="jsx-3120878690">`Xcode`</span> and select the root folder of the project to view the value of <span class="jsx-3120878690">`Bundle identifier`</span> in <span class="jsx-3120878690">`General`</span> tab:

![bundle identifier](../../pluralsight2.imgix.net/guides/c26e3eb1-f150-4092-8693-aa6773260870_10_bundle_identifier.html)

Copy the identifier and paste it to the **iOS bundle** field: ![iOS registration app](../../pluralsight2.imgix.net/guides/5bfff3d6-7476-486b-9846-0782f41401d6_11_ios_reg_app.html)

1.  **Add Configuration File**: Download the <span class="jsx-3120878690">`GoogleService-Info.plist`</span> file from the Firebase iOS project screen: ![Download plist](../../pluralsight2.imgix.net/guides/ce054fb8-0220-4adf-9177-c85513820fca_11.1_download_plist.html)

Add the file in the React Native's iOS project using Xcode:

-   Right-click on the project and select the **Add Files to RNFirebaseStorage** option. ![Right click ](../../pluralsight2.imgix.net/guides/bdefe5b5-1edf-47ee-a90a-b2eebd9c1002_12_add_file.html)

-   Locate the <span class="jsx-3120878690">`GoogleService-Info.plist`</span> file, then select **Create groups** and all the target projects: ![Add plist](../../pluralsight2.imgix.net/guides/49df28d0-c3ac-4d2a-9021-6a160ddcea20_12_add_plist.html)

1.  **Configure Firebase**: The entry point of an iOS app execution is the [AppDelegate.m](https://developer.apple.com/documentation/uikit/uiapplicationdelegate) file where the Firebase SDK initialization call needs to be added inside the <span class="jsx-3120878690">`didFinishLaunchingWithOptions`</span> function:

    1@import Firebase; // add the import
    2//...
    3
    4@implementation AppDelegate
    5
    6- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
    7{
    8// initialize Firebase SDK
    9if ([FIRApp defaultApp] == nil) {
    10[FIRApp configure];
    11}
    12// ...
    13return YES;
    14}

objective-c

**Note:** As of Sep 2020, React native is using objective-c for iOS projects. Analytics dependency is required for an iOS project to verify the successful integration.

Now update the <span class="jsx-3120878690">`pod`</span> dependencies:

    1npm install @react-native-firebase/analytics
    2# in the root folder
    3cd ios && pod install --repo-update && cd ..

bash

Firebase analytics dependency is a must to verify successful Firebase integration with iOS.

1.  **Verify App**: Run the iOS project to confirm the successful integration of Firebase with the iOS project:

    1npx react-native run-ios --verbose

bash

![iOS success](../../pluralsight2.imgix.net/guides/93560bc1-3b7d-4fc3-bc8a-bc8dd68d71ab_ios_success.html)

The Firebase console may take time to confirm the successful integration of Firebase SDK with the iOS app.

Conclusion
----------

A React Native project can use Firebase services using the NPM <span class="jsx-3120878690">`react-native-firebase/app`</span> module, but the native (Android & iOS) apps need to be added to the Firebase project. The native projects need to be configured to set up Firebase dependencies and the Firebase SDK initialization (iOS only). Read the [next guide](https://app.pluralsight.com/guides/integrate-firebase-storage-and-image-picker-in-react-native) to learn about adding Firebase storage service and implement the image picker feature in React Native code. Happy coding!

20

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)
