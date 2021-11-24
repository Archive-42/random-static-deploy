<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/7fc26c97-d391-471d-819e-0695a0c8c46d.jpg" alt="Author avatar" class="jsx-3841407315" />

Desmond Nyamador

Uploading Files with React.js
=============================

### Desmond Nyamador

-   Nov 15, 2020
-   8 Min read
-   108,454 Views

-   Nov 15, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">8 Min</span> read
-   108,454 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Front End Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Client-side Frameworks</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">React</span>

Introduction

222

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-setupanapp" class="menu-link">Set Up an App</a>
-   <a href="#module-addstate" class="menu-link">Add State</a>
-   <a href="#module-uploadafilewithfetch" class="menu-link">Upload a File with Fetch</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

You may not have ever handled file uploads in React or any other technologies, but there is a high possibility you'll encounter the need for it, whether tor update profile photos of users, CSV files, or PDFs, to mention but a few. In this guide, you'll learn how to upload files in your React apps.

Set Up an App
-------------

To get started, run the following command in your terminal or visit [https://react.new](https://react.new/) to get a fully configured React development environment via [https://codesandbox.io](https://codesandbox.io/).

    1npx create-react-app <YOUR_APP_NAME>

jsx

<span class="jsx-3120878690">`<YOUR_APP_NAME>`</span> refers to your preferred app name.

Next, create a simple component that has a file input with an upload button.

    1import React from 'react';
    2
    3function FileUploadPage(){
    4 return(
    5   <div>
    6            <input type="file" name="file" onChange={changeHandler} />
    7            <div>
    8                <button onClick={handleSubmission}>Submit</button>
    9            </div>
    10       </div>
    11    )
    12}

jsx

Add State
---------

Now add some state to your app to contain information about the file selected by the user.

    1import React, {useState} from 'react';
    2
    3function FileUploadPage(){
    4 const [selectedFile, setSelectedFile] = useState();
    5 const [isFilePicked, setIsFilePicked] = useState(false);
    6
    7    return(
    8   <div>
    9            <input type="file" name="file" onChange={changeHandler} />
    10           <div>
    11               <button onClick={handleSubmission}>Submit</button>
    12           </div>
    13       </div>
    14    )
    15}

jsx

<span class="jsx-3120878690">`selectedFile`</span> contains information on the currently picked file.

<span class="jsx-3120878690">`isFilePicked`</span> determines if a file has been picked or not.

Now implement the <span class="jsx-3120878690">`handleSubmission`</span> and <span class="jsx-3120878690">`changeHandler`</span> event handlers, then add a conditional to display details of the currently selected file in state.

    1import React, {useState} from 'react';
    2
    3function FileUploadPage(){
    4 const [selectedFile, setSelectedFile] = useState();
    5 const [isFilePicked, setIsFilePicked] = useState(false);
    6
    7    const changeHandler = (event) => {
    8     setSelectedFile(event.target.files[0]);
    9     setIsSelected(true);
    10    };
    11
    12   const handleSubmission = () => {
    13    };
    14
    15   return(
    16   <div>
    17           <input type="file" name="file" onChange={changeHandler} />
    18           <div>
    19               <button onClick={handleSubmission}>Submit</button>
    20           </div>
    21       </div>
    22    )
    23}

jsx

<span class="jsx-3120878690">`Event.target.files`</span> is an object that contains the details of files selected to be uploaded in a form.

The currently selected file object also looks as follows.

    1{
    2     lastModified: 1588350162449
    3     lastModifiedDate: Fri May 01 2020 17:22:42 GMT+0100 (British Summer Time) {} // Date object
    4     name: "Pluralsight_logo.png"
    5     size: 68317
    6     type: "image/png"
    7     webkitRelativePath: ""
    8     __proto__: File
    9}

jsx

Now add the conditional display logic to give the user details of the file.

    1import React, {useState} from 'react';
    2
    3function FileUploadPage(){
    4 const [selectedFile, setSelectedFile] = useState();
    5 const [isFilePicked, setIsFilePicked] = useState(false);
    6
    7    const changeHandler = (event) => {
    8     setSelectedFile(event.target.files[0]);
    9     setIsSelected(true);
    10    };
    11
    12   const handleSubmission = () => {
    13    };
    14
    15   return(
    16   <div>
    17           <input type="file" name="file" onChange={changeHandler} />
    18           {isSelected ? (
    19                <div>
    20                   <p>Filename: {selectedFile.name}</p>
    21                   <p>Filetype: {selectedFile.type}</p>
    22                   <p>Size in bytes: {selectedFile.size}</p>
    23                   <p>
    24                       lastModifiedDate:{' '}
    25                       {selectedFile.lastModifiedDate.toLocaleDateString()}
    26                   </p>
    27               </div>
    28            ) : (
    29                <p>Select a file to show details</p>
    30            )}
    31           <div>
    32               <button onClick={handleSubmission}>Submit</button>
    33           </div>
    34       </div>
    35    )
    36}

jsx

Upload a File with Fetch
------------------------

The Fetch API can be used to implement file uploads, or you can also use a library such as Axios to implement the upload logic. Implement the <span class="jsx-3120878690">`onClick`</span> handler, as shown below, to handle the file upload.

There's a free service that enables file uploads via their API, so go ahead and signup [here](https://freeimage.host/page/api?lang=en) to obtain an API key.

    1import React, {useState} from 'react';
    2
    3function FileUploadPage(){
    4 const [selectedFile, setSelectedFile] = useState();
    5 const [isFilePicked, setIsFilePicked] = useState(false);
    6
    7    const changeHandler = (event) => {
    8     setSelectedFile(event.target.files[0]);
    9     setIsSelected(true);
    10    };
    11
    12   const handleSubmission = () => {
    13        const formData = new FormData();
    14
    15       formData.append('File', selectedFile);
    16
    17       fetch(
    18            'https://freeimage.host/api/1/upload?key=<YOUR_API_KEY>',
    19            {
    20                method: 'POST',
    21                body: formData,
    22            }
    23        )
    24            .then((response) => response.json())
    25            .then((result) => {
    26                console.log('Success:', result);
    27            })
    28            .catch((error) => {
    29                console.error('Error:', error);
    30            });
    31    };
    32    };
    33
    34   return(
    35   <div>
    36           <input type="file" name="file" onChange={changeHandler} />
    37           {isSelected ? (
    38                <div>
    39                   <p>Filename: {selectedFile.name}</p>
    40                   <p>Filetype: {selectedFile.type}</p>
    41                   <p>Size in bytes: {selectedFile.size}</p>
    42                   <p>
    43                       lastModifiedDate:{' '}
    44                       {selectedFile.lastModifiedDate.toLocaleDateString()}
    45                   </p>
    46               </div>
    47            ) : (
    48                <p>Select a file to show details</p>
    49            )}
    50           <div>
    51               <button onClick={handleSubmission}>Submit</button>
    52           </div>
    53       </div>
    54    )
    55}

jsx

What happened here? You used the fetch API together with the **[FormData](https://developer.mozilla.org/en-US/docs/Web/API/FormData)** native Javascript API to post the file to the fileserver.

A successful post to the server should result in the following response.

    1{
    2                         "status_code": 200,
    3                         "success": {
    4                             "message": "image uploaded",
    5                             "code": 200
    6                         },
    7                         "image": {
    8                             "name": "example",
    9                             "extension": "png",
    10                                "size": 53237,
    11                                "width": 1151,
    12                                "height": 898,
    13                                "date": "2020-11-11 15:32:33",
    14                                "date_gmt": "2020-11-11 19:32:33",
    15                                "storage_id": null,
    16                                "description": null,
    17                                "nsfw": "0",
    18                                "md5": "d973298h0d722c956c3629870299735830",
    19                                "storage": "datefolder",
    20                                "original_filename": "pluralsight_logo.png",
    21                                "original_exifdata": null,
    22                                "views": "0",
    23                                "id_encoded": "L",
    24                                "filename": "pluralsight_logo.png",
    25                                "ratio": 1.2817371937639,
    26                                "size_formatted": "52 KB",
    27                                "mime": "image/png",
    28                                "bits": 8,
    29                                "channels": null,
    30                                "url": "http://freeimage.host/images/2020/11/11/pluralsight_logo.png",
    31                                "url_viewer": "http://freeimage.host/image/L",
    32                                "thumb": {
    33                                    "filename": "example.th.png",
    34                                    "name": "example.th",
    35                                    "width": 160,
    36                                    "height": 160,
    37                                    "ratio": 1,
    38                                    "size": 17848,
    39                                    "size_formatted": "17.4 KB",
    40                                    "mime": "image/png",
    41                                    "extension": "png",
    42                                    "bits": 8,
    43                                    "channels": null,
    44                                    "url": "http://freeimage.host/images/2020/11/11/pluralsight_logo.th.png"
    45                                },
    46                                "medium": {
    47                                    "filename": "pluralsight_logo.md.png",
    48                                    "name": "pluralsight_logo.md",
    49                                    "width": 500,
    50                                    "height": 390,
    51                                    "ratio": 1.2820512820513,
    52                                    "size": 104448,
    53                                    "size_formatted": "102 KB",
    54                                    "mime": "image/png",
    55                                    "extension": "png",
    56                                    "bits": 8,
    57                                    "channels": null,
    58                                    "url": "http://freeimage.host/images/2020/11/11/pluralsight_logo.md.png"
    59                                },
    60                                "views_label": "views",
    61                                "display_url": "http://freeimage.host/images/2020/11/11/pluralsight_logo.md.png",
    62                                "how_long_ago": "moments ago"
    63                            },
    64                            "status_txt": "OK"
    65                        }

json

Conclusion
----------

And that's a wrap. In this guide, you learned how to upload a file with React and how to use the Fetch API to upload files. If you'd like to read more on the Fetch API and the formData API, the following resources will help:

1.  <https://developer.mozilla.org/en-US/docs/Web/API/FormData>

2.  <https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch>

3.  [https://www.pluralsight.com/guides/using-fetch-with-github-api-v3](using-fetch-with-github-api-v3.html)

222

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)
