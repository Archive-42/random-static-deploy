<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/d87e74d1-8e02-494a-9052-eb43fe48f3ac.jpg" alt="Author avatar" class="jsx-3841407315" />

Pavneet Singh

Upload Images to Firebase Storage in React Native
=================================================

### Pavneet Singh

-   Oct 17, 2020
-   10 Min read
-   21,872 Views

-   Oct 17, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">10 Min</span> read
-   21,872 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Front End Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Client-side Frameworks</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">React</span>

Introduction

28

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-uploadingfilestofirebasestorage" class="menu-link">Uploading Files to Firebase Storage</a>
-   <a href="#module-imagepickeroptimizations" class="menu-link">Image Picker Optimizations</a>
-   <a href="#module-displayuploadingstatus" class="menu-link">Display Uploading Status</a>
-   <a href="#module-tips" class="menu-link">Tips</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

The Firebase storage NPM module provides access to the Firebase app instance to create a reference object that is used to upload images to the Firebase storage. The Firebase storage bucket can store the data using a file or folder. A <span class="jsx-3120878690">`reference`</span> instance can also take a string path value to upload an image to Firebase storage.

This guide explains the steps to upload a selected image from a device to Firebase storage using the image picker helper functions. Check out these previous guides for more context and complete details:

1.  [Setting Up a Firebase Project for React Native](https://app.pluralsight.com/guides/setting-up-a-firebase-project-for-react-native)

2.  [Integrate Firebase Storage and Image Picker in React Native](https://app.pluralsight.com/guides/integrate-firebase-storage-and-image-picker-in-react-native)

3.  Upload Images to Firebase Storage in React Native (this guide)

Uploading Files to Firebase Storage
-----------------------------------

The <span class="jsx-3120878690">`@react-native-firebase/storage`</span> module provides access to the <span class="jsx-3120878690">`FirebaseApp`</span> instance that is used to upload media content into the Firebase storage. A <span class="jsx-3120878690">`storage()`</span> instance contains all the necessary details to verify and establish a connection with the Firebase server app to access storage contents.

Follow these steps to upload an image to Firebase storage:

1.  Import the default Firebase app module.
2.  Create an instance of the Firebase storage API and use the <span class="jsx-3120878690">`ref`</span> function to get a reference instance to upload an image.
3.  Invoke the <span class="jsx-3120878690">`putFile`</span> function with a file path/URI to upload the file to Firebase storage.
4.  The <span class="jsx-3120878690">`puFile`</span> function returns a <span class="jsx-3120878690">`task`</span> object that supports <span class="jsx-3120878690">`Promise`</span> based implementation to track the result of the upload process using the <span class="jsx-3120878690">`then`</span> function.

    1import storage from '@react-native-firebase/storage'; // 1
    2
    3uploadImageToStorage(path, imageName) {
    4    let reference = storage().ref(imageName);         // 2
    5    let task = reference.putFile(path);               // 3
    6
    7    task.then(() => {                                 // 4
    8        console.log('Image uploaded to the bucket!');
    9    }).catch((e) => console.log('uploading image error => ', e));
    10}

JSX

The <span class="jsx-3120878690">`reference`</span> instance also supports different file formats, such as <span class="jsx-3120878690">`put(Blob | Uint8Array |                                       ArrayBuffer)`</span>, and provides a <span class="jsx-3120878690">`putString`</span> to upload different types of data.

Image Picker Optimizations
--------------------------

The image picker implementation can be optimized with the <span class="jsx-3120878690">`Platform.select`</span> function. A <span class="jsx-3120878690">`response`</span> object can be used to retrieve platform-specific values and the name of the file:

-   **Getting a Platform-specific Image Path/URI**: Android and iOS use different path/URI schema formats to access the images. iOS uses the <span class="jsx-3120878690">`file:///`</span> schema in path value, whereas Android uses a plain URI to access images. The different file path or URI values can be handled using the <span class="jsx-3120878690">`Platform`</span> API to verify the OS type at run time:

    1/**
    2 * Get platform specific value from response
    3 */
    4getPlatformPath({ path, uri }) {
    5    return Platform.select({
    6        android: { path },
    7        ios: { uri }
    8    })
    9}

JSX

**Note:** It's recommended to use platform APIs as any change in API can break our custom logic. Also, the image path should be formatted to support the <span class="jsx-3120878690">`file:///`</span> protocol.

-   **Getting an Image Name**: The <span class="jsx-3120878690">`response`</span> object provides the name of the file using the <span class="jsx-3120878690">`response.fileName`</span> property, which can be used to store the images with default names instead of custom names.

Display Uploading Status
------------------------

It is important to inform the user about the image loading process. This can be done using the <span class="jsx-3120878690">`ActivityIndicator`</span> component to show a circular progress indicator on the UI. The progress indicator is shown during the image uploading process. Follow these steps to implement it:

1.  Create an <span class="jsx-3120878690">`isLoading`</span> property to track the uploading task status.
2.  Update the value of <span class="jsx-3120878690">`isLoading`</span> to <span class="jsx-3120878690">`true`</span> at the beginning of the uploading task and set it to <span class="jsx-3120878690">`false`</span> inside the <span class="jsx-3120878690">`then`</span> and <span class="jsx-3120878690">`catch`</span>.
3.  Import <span class="jsx-3120878690">`ActivityIndicator`</span> and display it using the <span class="jsx-3120878690">`isLoading`</span> value:

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
    22        imagePath: require("./img/default.jpg"),
    23        isLoading: false,
    24        status: '',
    25    }
    26
    27    chooseFile = () => {
    28        this.setState({ status: '' });
    29        var options = {
    30            title: 'Select Image',
    31            customButtons: [
    32                { name: 'customOptionKey', title: 'Choose Photo from Custom Option' },
    33            ],
    34            storageOptions: {
    35                skipBackup: true, // do not backup to iCloud
    36                path: 'images', // store camera images under Pictures/images for android and Documents/images for iOS
    37            },
    38        };
    39        ImagePicker.showImagePicker(options, response => {
    40            if (response.didCancel) {
    41                console.log('User cancelled image picker', storage());
    42            } else if (response.error) {
    43                console.log('ImagePicker Error: ', response.error);
    44            } else if (response.customButton) {
    45                console.log('User tapped custom button: ', response.customButton);
    46            } else {
    47                let path = this.getPlatformPath(response).value;
    48                let fileName = this.getFileName(response.fileName, path);
    49                this.setState({ imagePath: path });
    50                this.uploadImageToStorage(path, fileName);
    51            }
    52        });
    53    };
    54
    55    getFileName(name, path) {
    56        if (name != null) { return name; }
    57
    58        if (Platform.OS === "ios") {
    59            path = "~" + path.substring(path.indexOf("/Documents"));
    60        }
    61        return path.split("/").pop();
    62    }
    63
    64    uploadImageToStorage(path, name) {
    65        this.setState({ isLoading: true });
    66        let reference = storage().ref(name);
    67        let task = reference.putFile(path);
    68        task.then(() => {
    69            console.log('Image uploaded to the bucket!');
    70            this.setState({ isLoading: false, status: 'Image uploaded successfully' });
    71        }).catch((e) => {
    72            status = 'Something went wrong';
    73            console.log('uploading image error => ', e);
    74            this.setState({ isLoading: false, status: 'Something went wrong' });
    75        });
    76    }
    77
    78    /**
    79     * Get platform specific value from response
    80     */
    81    getPlatformPath({ path, uri }) {
    82        return Platform.select({
    83            android: { "value": path },
    84            ios: { "value": uri }
    85        })
    86    }
    87
    88    getPlatformURI(imagePath) {
    89        let imgSource = imagePath;
    90        if (isNaN(imagePath)) {
    91            imgSource = { uri: this.state.imagePath };
    92            if (Platform.OS == 'android') {
    93                imgSource.uri = "file:///" + imgSource.uri;
    94            }
    95        }
    96        return imgSource
    97    }
    98
    99    render() {
    100        let { imagePath } = this.state;
    101        let imgSource = this.getPlatformURI(imagePath)
    102        return (
    103            <SafeAreaView style={styles.container}>
    104                {this.state.isLoading && <ActivityIndicator size="large" style={styles.loadingIndicator} />}
    105                <View style={styles.imgContainer}>
    106                    <Text style={styles.boldTextStyle}>{this.state.status}</Text>
    107                    <Image style={styles.uploadImage} source={imgSource} />
    108                    <View style={styles.eightyWidthStyle} >
    109                        <Button title={'Upload Image'} onPress={this.chooseFile}></Button>
    110                    </View>
    111                </View>
    112            </SafeAreaView>
    113        )
    114    }
    115}
    116
    117const styles = StyleSheet.create({
    118    container: {
    119        flex: 1,
    120        width: '100%',
    121        height: '100%',
    122        backgroundColor: '#e6e6fa',
    123    },
    124    imgContainer: {
    125        alignItems: 'center',
    126        justifyContent: 'center',
    127        position: 'absolute',
    128        width: '100%',
    129        height: '100%'
    130    },
    131    eightyWidthStyle: {
    132        width: '80%',
    133        margin: 2,
    134    },
    135    uploadImage: {
    136        width: '80%',
    137        height: 300,
    138    },
    139    loadingIndicator: {
    140        zIndex: 5,
    141        width: '100%',
    142        height: '100%',
    143    },
    144    boldTextStyle: {
    145        fontWeight: 'bold',
    146        fontSize: 22,
    147        color: '#5EB0E5',
    148    }
    149
    150});

JSX

Tips
----

-   Validating network availability can help to prompt the user to enable internet connectivity for the image loading task. The [react-native-netinfo](https://github.com/react-native-community/react-native-netinfo) NPM module is the official way to identify the network status.
-   Use the Firebase authentication feature to allow only authenticated users to access data.
-   The <span class="jsx-3120878690">`react-native-image-picker`</span> also supports custom buttons with the <span class="jsx-3120878690">`customButtons`</span> option property to fetch images from other platforms or custom social media APIs.
-   The Firebase rules can also be modified to allow only public read and authenticated writes:

    1alternately
    2  allow read;
    3        allow write: if request.auth != null;

Read more about the [Firebase rules here](https://firebase.googleblog.com/2019/03/firebase-security-rules-admin-sdk-tips.html).

Conclusion
----------

Firebase is specifically optimized to address issues on mobile devices with many other great services. It is important to integrate Firebase configuration and rules (or authentication services) carefully. React Native offers all the required NPM plugins to integrate Firebase services and required features to fetch images, check network status, and much more. The complete optimized codebase is available on the [RNFirebaseStorage](https://github.com/Pavneet-Sing/RNFirebaseStorage) repository. Happy coding!

28

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)
