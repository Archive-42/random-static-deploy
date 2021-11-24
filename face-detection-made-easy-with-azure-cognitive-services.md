<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/6455207a-ea14-4964-af40-b569f06f122e.jpg" alt="Author avatar" class="jsx-3841407315" />

Douglas Starnes

Face Detection Made Easy with Azure Cognitive Services
======================================================

### Douglas Starnes

-   Oct 29, 2020
-   8 Min read
-   1,478 Views

-   Oct 29, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">8 Min</span> read
-   1,478 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Cloud</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Cloud Application Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Azure Cognitive Services</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Machine Learning and AI</span>

Introduction

4

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-setup" class="menu-link">Setup</a>
-   <a href="#module-usingthefaceservice" class="menu-link">Using the Face Service</a>
-   <a href="#module-otherattributes" class="menu-link">Other Attributes</a>
-   <a href="#module-wheretogofromhere" class="menu-link">Where to Go From Here</a>
-   <a href="#module-summary" class="menu-link">Summary</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

We always want to put a name with a face. The face is one of the easiest ways for humans to recognize someone they know. That's because there are so many features that make a face unique. Can a computer detect and interpret faces the same way that a human does? The field of computer vision has been working on this. In many cases, the answer is yes! But it's a difficult task to implement. That's why Azure Cognitive Services offers the Face service. It exposes a pre-trained facial detection model via a REST API that you can integrate into any application.

There are actually two face services in Azure Cognitive Services. The Azure Computer Vision Service can detect different objects in images, including faces. However, it only returns limited data about the detected faces, such as age, gender, and the bounding rectangle. The Face Service will do much more. It to predicts age and gender, and it also detects facial features such as the location of the eyes and nose. It also attempts to interpret the emotion of the facial expression and score how happy or sad a person is. And it can recognize the identity of a person by the structure of their face. In this guide, we will discuss the Face Service and not the Computer Vision Service.

Setup
-----

To use the Face Service you'll need an Azure account. Next, in the portal, click **Create a Resource** and search for Face. Click the **Create** button to create a new instance of the service. ![creating an instance](../../pluralsight2.imgix.net/guides/c204e770-2b5c-4828-9a1a-dbe43c9154c7_01.html)

Select a subscription and resource group. Select the region closest to you and choose a unique name for the instance. For the pricing tier, the Free F0 will be sufficient for a demo and won't cost anything. Click **Next** to dismiss the rest of the screens and then **Create** after validation passes. ![setting the properties](../../pluralsight2.imgix.net/guides/9a090fa2-56f9-4239-88bb-0ee4cf028c99_02.html)

In a few minutes, you'll have a new instance of the Face service. Click on the **Go to resource** button to see the detail of the instance.

In the sidebar on the left, click on **Keys and Endpoint**. You'll be presented with two masked keys and an endpoint. ![keys and endpoints](../../pluralsight2.imgix.net/guides/80d688d2-7a7d-4ff3-9f6d-c6bf4aa8cbfc_03.html)

The keys are like passwords, thus they are hidden. These will identify the user of the service to Azure. You'll send one of these keys when calling the endpoint of the service. The endpoint is just a URL. Copy one of the keys and the endpoint as you'll need them soon. In your C\# project, add the NuGet package <span class="jsx-3120878690">`Microsoft.Azure.CognitiveServices.Vision.Face.2.6.0-preview.1`</span>, which is the latest release as of this guide. At the top of the <span class="jsx-3120878690">`Main`</span> method, add variables for the <span class="jsx-3120878690">`key`</span> and <span class="jsx-3120878690">`endpoint`</span>.

    1var key = "{YOUR_API_KEY}";
    2var endpoint = "{YOUR_ENDPOINT}";

csharp

Using the Face Service
----------------------

Create a <span class="jsx-3120878690">`FaceClient`</span> from the <span class="jsx-3120878690">`Microsoft.Azure.CognitiveServices.Vison.Face`</span> namespace. The <span class="jsx-3120878690">`FaceClient`</span> accepts an <span class="jsx-3120878690">`ApiKeyServiceClientCredential`</span> that uses the <span class="jsx-3120878690">`key`</span> from the Azure portal to identify your account.

    1var faceClient = new FaceClient(
    2 new ApiKeyServiceClientCredential(key)
    3);

csharp

The endpoint is set with a property on the <span class="jsx-3120878690">`FaceClient`</span> instance.

    1faceClient.Endpoint = endpoint;

csharp

There are a number of methods on the <span class="jsx-3120878690">`FaceClient`</span> to detect faces. You might have a web application that uploads images from the user and sends the image data to the service. A simpler way that will be enough for this demo is to send the Face Service a URL of an image. Here is one from Unsplash: <https://source.unsplash.com/pQV8dGHrOLU>

This is a picture of a young woman, so let's see if Azure agrees. Pass the URL of the image to the <span class="jsx-3120878690">`DetectWithUrlAsync`</span> method. This method is async so it has to be awaited, and the <span class="jsx-3120878690">`Main`</span> method must also be marked as <span class="jsx-3120878690">`async`</span>.

    1static async Task Main(string[] args)
    2{
    3  // ...
    4  var faces = await faceClient.Face.DetectWithUrlAsync(
    5     "https://source.unsplash.com/pQV8dGHrOLU"
    6  );
    7}

csharp

The <span class="jsx-3120878690">`faces`</span> are a <span class="jsx-3120878690">`List`</span> of <span class="jsx-3120878690">`DetectedFace`</span>, each of which has a <span class="jsx-3120878690">`FaceAttributes`</span> property from which we can get the predicted age and gender of the subject of the photo.

    1foreach (var face in faces) 
    2{
    3  Console.WriteLine($"Age: {face.FaceAttributes.Age}, Gender: {face.FaceAttributes.Gender}");
    4}

csharp

There is a problem. If you try to run the application now, it will crash. You must explicitly tell the Face Service the attributes you wish it to return. The attributes you need are stored in a <span class="jsx-3120878690">`List`</span> of <span class="jsx-3120878690">`FaceAttributeType`</span>.

    1var returnedAttributes = new List<FaceAttributeType?>
    2{
    3  FaceAttributeType.Age, FaceAttributeType.Gender
    4};

csharp

The <span class="jsx-3120878690">`DetectWithUrlAsync`</span> method accepts the <span class="jsx-3120878690">`FaceAttributes`</span> in the <span class="jsx-3120878690">`returnFaceAttributes`</span> parameter.

    1var faces = await faceClient.Face.DetectWithUrlAsync(
    2  "https://source.unsplash.com/pQV8dGHrOLU",
    3  returnFaceAttributes: returnedAttributes
    4);

csharp

Running the application, Azure returns an age of 24 and a gender of female.

Other Attributes
----------------

The Face Services supports many more attributes. For example, add <span class="jsx-3120878690">`FaceAttributeType.Hair`</span> to the <span class="jsx-3120878690">`returnFaceAttributes`</span> list, and the <span class="jsx-3120878690">`Hair`</span> property of the <span class="jsx-3120878690">`FaceAttributes`</span> of the <span class="jsx-3120878690">`DetectedFace`</span> will contain data about the hair, if any, associated with the face, such as the color.

    1foreach (var hairColor in face.FaceAttributes.Hair.HairColor)
    2{
    3  Console.WriteLine($"Hair color: {hairColor.Color.ToString()}");
    4}

csharp

Why does the hair color contain more than one color? That's because hair color is subjective, and sometimes people color their hair with multiple shades. So each hair color is accompanied by a <span class="jsx-3120878690">`Confidence`</span> score and stored in descending order.

    1foreach (var hairColor in face.FaceAttributes.Hair.HairColor)
    2{
    3  Console.WriteLine($"Hair color: {hairColor.Color.ToString()}, Confidence: {hairColor.Confidence}");
    4}

csharp

Azure will predict that the young lady's hair is most likely brown followed by red. It is also very confident that her hair is not white, as it has a confidence score of 0.

If the <span class="jsx-3120878690">`HairColor`</span> property has no predictions, it means the subject in the photo does not have any hair.

The service can also detect facial hair and glasses. See the documentation for more about those attributes.

Detecting emotion is also a feature of the Face Service. Add the <span class="jsx-3120878690">`Emotion`</span> <span class="jsx-3120878690">`FaceAttributeType`</span> to the list. The <span class="jsx-3120878690">`Emotion`</span> property of the <span class="jsx-3120878690">`FaceAttributes`</span> has eight properties, each for a different emotion:

-   <span class="jsx-3120878690">`Anger`</span>
-   <span class="jsx-3120878690">`Contempt`</span>
-   <span class="jsx-3120878690">`Disgust`</span>
-   <span class="jsx-3120878690">`Fear`</span>
-   <span class="jsx-3120878690">`Happiness`</span>
-   <span class="jsx-3120878690">`Neutral`</span>
-   <span class="jsx-3120878690">`Sadness`</span>
-   <span class="jsx-3120878690">`Surprise`</span>

Each of these has a score, not unlike the <span class="jsx-3120878690">`Confidence`</span> score for the hair color.

    1Console.WriteLine($"{face.FaceAttributes.Emotion.Anger"});

csharp

Evaluating each one will show that Azure predicts the subject's emotion is most likely neutral.

Where to Go From Here
---------------------

There is a difference between facial detection and facial recognition. This guide has demonstrated facial detection, which will look for any face. If you want to look for a specific face, that is when you use face recognition. You'll need to have multiple pictures from different perspectives of any face you want to recognize. You'll use those to train the service to distinguish between that face and others. The Face Service can also detect faces inside of a video stream in real time.

Summary
-------

The Azure Cognitive Services face service lets you integrate facial recognition or detection into any application, no computer vision knowledge required. This makes a lot of sense for devices like smartphones that have a camera built in. It would be simple to take the code explained in this guide and use it in a Xamarin application to select pictures of people who are smiling. Thanks for reading!

4

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)
