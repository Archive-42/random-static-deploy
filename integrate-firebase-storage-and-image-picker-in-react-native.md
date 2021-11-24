<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/d87e74d1-8e02-494a-9052-eb43fe48f3ac.jpg" alt="Author avatar" class="jsx-3841407315" />

Pavneet Singh

Integrate Firebase Storage and Image Picker in React Native
===========================================================

### Pavneet Singh

-   Oct 17, 2020
-   12 Min read
-   5,115 Views

-   Oct 17, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">12 Min</span> read
-   5,115 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Front End Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Client-side Frameworks</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">React</span>

Introduction

9

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-settingupfirebasestoragedependencies" class="menu-link">Setting Up Firebase Storage Dependencies</a>
-   <a href="#module-settingupfirebasestorageinconsole" class="menu-link">Setting Up Firebase Storage in Console</a>
-   <a href="#module-settingupimagepicker" class="menu-link">Setting Up Image Picker</a>
-   <a href="#module-implementimagepicker" class="menu-link">Implement Image Picker</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

The Firebase storage service is used to store media content for all the Firebase apps (Android, iOS, and web) under a linked Firebase project. The Firebase storage service is built upon [Google Cloud Storage](https://cloud.google.com/storage), which allows web apps to access the content of storage directly. The data is stored in Google Cloud Storage buckets, which are nothing but a namespace to manage data and access controls. The storage service can be added with a separate NPM dependency. The images can be fetched from the device or camera using the <span class="jsx-3120878690">`react-native-image-picker`</span> NPM module.

This guide covers the implementation of Firebase storage and image picker module to fetch and store an image from the device to a Firebase storage bucket. Follow these other guides to complete the implementation:

1.  [Setting Up a Firebase Project for React Native](https://app.pluralsight.com/guides/setting-up-a-firebase-project-for-react-native)
2.  Integrate Firebase Storage and Image Picker in React Native (current guide)
3.  [Upload Images to Firebase Storage in React Native](https://app.pluralsight.com/guides/upload-images-to-firebase-storage-in-react-native)

The optimized codebase is available on [RNFirebaseStorage](https://github.com/Pavneet-Sing/RNFirebaseStorage) repository.

Setting Up Firebase Storage Dependencies
----------------------------------------

Every Firebase service requires a specific NPM module to communicate with the Firebase server apps. The Firebase storage APIs can be integrated using the <span class="jsx-3120878690">`react-native-firebase/storage`</span> NPM module:

    1# Install the storage module
    2npm install @react-native-firebase/storage
    3
    4# setup iOS project
    5cd ios && pod install --repo-update && cd ..

bash

The commands will install the Firebase storage module. Install the iOS <span class="jsx-3120878690">`pod`</span> dependency for the Firebase storage.

> <span class="jsx-3120878690">`@react-native-firebase/app`</span> NPM modules is required to use most of the Firebase NPM modules.

Setting Up Firebase Storage in Console
--------------------------------------

By default, Firebase creates a storage bucket to store the media content and name the bucket using the Firebase project ID as <span class="jsx-3120878690">`gs://firebase-project-id.appspot.com`</span>.

Create a default storage bucket in the Firebase project:

1.  Select the **Storage** option form the left panel and click on **Get Started**.
2.  Continue with the onboarding flow with the **next** option and select any storage location near to your location. ![Select storage server](../../pluralsight2.imgix.net/guides/16cd3e4e-971f-41ce-84fd-5559e9323093_setup_bucket_server.html)

Firebase protects the storage content from unauthorized access by using the <span class="jsx-3120878690">`allow read, write: if request.auth !=                                       null;`</span> rule.

1.  Choose any cloud storage location near to your current location and click **Done**.
2.  Go to the **Rules** tab and change the rules for the public access:

    1rules_version = '2';
    2service firebase.storage {
    3  match /b/{bucket}/o {
    4    match /{allPaths=**} {
    5      allow read, write;
    6    }
    7  }

This will enable public access to the Firebase storage bucket to every user without integrating the Firebase authentication service.

> Do not use the public access rule <span class="jsx-3120878690">`allow read, write`</span>; in production, it can cause data protection issues.

Setting Up Image Picker
-----------------------

The images on Android or iOS devices are managed via different built-in apps (Gallery or Photos), and these images can be accessed via a specific path (URI for iOS) value. The [react-native-image-picker](https://github.com/react-native-community/react-native-image-picker/tree/fb78e6045046ba4cfa621c36172db43c6f70a44c) module provides React Native-specific APIs to get the path/URI of an image on the underlying native device. Follow the below steps to install and configure the image picker:

### Install Image Picker

Execute the below commands to install the image picker module and iOS <span class="jsx-3120878690">`pod`</span> dependency

    1npm install react-native-image-picker
    2cd ios && pod install && cd ..

sh

### Add Permission

Both Android and iOS follow the permission model to inform the user about the resource used by an app, so these permissions should be added in configurations files in the native projects.

-   **Add Android Permission**: Add the required permissions in the <span class="jsx-3120878690">`RNFirebaseStorage/android/app/src/main/AndroidManifest.xml`</span> file to get the camera and storage access on an android device:

    1<uses-permission android:name="android.permission.CAMERA" />
    2<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE"/>

xml

-   **Add iOS permissions**: The below permissions (key-string pairs) should be added in the <span class="jsx-3120878690">`RNFirebaseStorage/ios/RNFirebaseStorage/info.plist`</span> file to get access to photos, camera, and photo storage. Open the <span class="jsx-3120878690">`info.plist`</span> file with any text editor and then copy and paste all three key-string pairs from the below snippet. In Xcode, right-click on the <span class="jsx-3120878690">`info.plist`</span> file, choose the **Opens As** option, and then <span class="jsx-3120878690">`Source Code`</span> option:

    1<plist version="1.0">
    2  <dict>
    3    <key>NSPhotoLibraryUsageDescription</key>
    4    <string>$(PRODUCT_NAME) would like access to your photo gallery</string>
    5    <key>NSCameraUsageDescription</key>
    6    <string>$(PRODUCT_NAME) would like to use your camera</string>
    7    <key>NSPhotoLibraryAddUsageDescription</key>
    8    <string>$(PRODUCT_NAME) would like to save photos to your photo gallery</string>
    9    </dict>
    10</plist>

xml

Alternately, this can be done in the Xcode UI by using the **+** button to add key and string values: ![Add iOS Camera permissions](../../pluralsight2.imgix.net/guides/41e8dd24-d0d6-4906-9af5-c92c6e5c05c4_14_ios_camera_permission.html)

Optionally, clean the Android and iOS projects:

    1#android
    2cd android && ./gradlew clean && cd ..
    3#iOS
    4cd ios && xcodebuild clean && cd ..

sh

Implement Image Picker
----------------------

The image picker can get the image either from the photo gallery or camera. The UI of the image picker dialog can also be customized using the <span class="jsx-3120878690">`Options`</span> object that can be passed as the first parameter to <span class="jsx-3120878690">`showImagePicker`</span> function call. The second parameter of <span class="jsx-3120878690">`showImagePicker`</span> is a callback function that will be called with a <span class="jsx-3120878690">`response`</span> object which contains the details about the selected image:

    1chooseFile = () => {
    2    this.setState({ status: '' });
    3    var options = {
    4        title: 'Select Image',
    5        storageOptions: {
    6            skipBackup: true, // do not backup to iCloud
    7            path: 'images', // store camera images under Pictures/images for android and Documents/images for iOS
    8        },
    9    };
    10    ImagePicker.showImagePicker(options, response => {
    11        if (response.didCancel) {
    12            console.log('User cancelled image picker', storage());
    13        } else if (response.error) {
    14            console.log('ImagePicker Error: ', response.error);
    15        } else if (response.customButton) {
    16            console.log('User tapped custom button: ', response.customButton);
    17        } else {
    18            let path = this.getPlatformPath(response).value;
    19        }
    20    });
    21};
    22
    23/**
    24 * Get platform specific value from response
    25 */
    26getPlatformPath({ path, uri }) {
    27    return Platform.select({
    28        android: { "value": path },
    29        ios: { "value": uri }
    30    })
    31}

JSX

The <span class="jsx-3120878690">`storageOptions`</span> object defined the <span class="jsx-3120878690">`path`</span> to store clicked images under the <span class="jsx-3120878690">`Document/Images`</span> for iOS and <span class="jsx-3120878690">`Pictures/images`</span> for Android. A <span class="jsx-3120878690">`skipBackup: true`</span> property will instruct iOS to skip the iCloud image backup for camera images.

Here's the complete code to trigger <span class="jsx-3120878690">`chooseFile`</span> function to fetch and display the selected image on screen:

    1// App.js
    2/**
    3 * @author Pavneet Singh
    4 */
    5
    6import React from "react";
    7import {
    8    StyleSheet,
    9    View,
    10    Button,
    11    Image,
    12    ActivityIndicator,
    13    Platform,
    14    SafeAreaView,
    15    Text,
    16} from "react-native";
    17import storage from '@react-native-firebase/storage';
    18import ImagePicker from 'react-native-image-picker';
    19export default class App extends React.Component {
    20
    21    state = {
    22        // placeholder image
    23        imagePath: require("./img/default.jpg")
    24    }
    25
    26    chooseFile = () => {
    27        var options = {
    28            title: 'Select Image',
    29            storageOptions: {
    30                skipBackup: true, // do not backup to iCloud
    31                path: 'images', // store camera images under Pictures/images for android and Documents/images for iOS
    32            },
    33        };
    34        ImagePicker.showImagePicker(options, response => {
    35            if (response.didCancel) {
    36                console.log('User cancelled image picker', storage());
    37            } else if (response.error) {
    38                console.log('ImagePicker Error: ', response.error);
    39            } else if (response.customButton) {
    40                console.log('User tapped custom button: ', response.customButton);
    41            } else {
    42                let path = this.getPlatformPath(response).value;
    43                let fileName = this.getFileName(response.fileName, path);
    44                this.setState({ imagePath: path });
    45            }
    46        });
    47    };
    48
    49    /**
    50     * Get the file name and handle the invalid null case
    51     */
    52    getFileName(name, path) {
    53        if (name != null) { return name; }
    54
    55        if (Platform.OS === "ios") {
    56            path = "~" + path.substring(path.indexOf("/Documents"));
    57        }
    58        return path.split("/").pop();
    59    }
    60
    61    /**
    62     * Get platform specific value from response
    63     */
    64    getPlatformPath({ path, uri }) {
    65        return Platform.select({
    66            android: { "value": path },
    67            ios: { "value": uri }
    68        })
    69    }
    70
    71    /**
    72     * Get platform-specific Uri with the required format
    73     */
    74    getPlatformURI(imagePath) {
    75        let imgSource = imagePath;
    76        if (isNaN(imagePath)) {
    77            imgSource = { uri: this.state.imagePath };
    78            if (Platform.OS == 'android') {
    79                imgSource.uri = "file:///" + imgSource.uri;
    80            }
    81        }
    82        return imgSource
    83    }
    84
    85    render() {
    86        let { imagePath } = this.state;
    87        let imgSource = this.getPlatformURI(imagePath)
    88        return (
    89            <SafeAreaView style={styles.container}>
    90                <View style={styles.imgContainer}>
    91                    <Image style={styles.uploadImage} source={imgSource} />
    92                    <View style={styles.eightyWidthStyle} >
    93                        <Button title={'Upload Image'} onPress={this.chooseFile}></Button>
    94                    </View>
    95                </View>
    96            </SafeAreaView>
    97        )
    98    }
    99}
    100
    101const styles = StyleSheet.create({
    102    container: {
    103        flex: 1,
    104        width: '100%',
    105        height: '100%',
    106        backgroundColor: '#e6e6fa',
    107    },
    108    imgContainer: {
    109        alignItems: 'center',
    110        justifyContent: 'center',
    111        position: 'absolute',
    112        width: '100%',
    113        height: '100%'
    114    },
    115    eightyWidthStyle: {
    116        width: '80%',
    117        margin: 2,
    118    },
    119    uploadImage: {
    120        width: '80%',
    121        height: 300,
    122    },
    123});

jsx

A successful image selection will trigger the <span class="jsx-3120878690">`else`</span> case in <span class="jsx-3120878690">`chooseFile`</span> method and provide the image details via the <span class="jsx-3120878690">`response`</span> object. The <span class="jsx-3120878690">`getPlatformPath`</span> function will return a platform-specific path/URI value that is being stored in the <span class="jsx-3120878690">`state`</span> object to update the image on the screen.

Conclusion
----------

Firebase services like storage, database, and Firestore can use the Firebase rules to validate the data and users. Firebase storage is built upon the Google Cloud Storage service so it can store petabytes of data. The <span class="jsx-3120878690">`image-picker`</span> module offers a quick way to fetch images from the devices. It also supports functions like <span class="jsx-3120878690">`launchCamera`</span> and <span class="jsx-3120878690">`launchImageLibrary`</span> to use a specific image source. Follow [this guide](https://app.pluralsight.com/guides/upload-images-to-firebase-storage-in-react-native) to learn about uploading a selected image to the Firebase storage bucket. Happy coding!

9

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)
