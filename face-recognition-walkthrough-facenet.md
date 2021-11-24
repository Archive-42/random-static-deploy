<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/default.jpg" alt="Author avatar" class="jsx-3841407315" />

Jenisha T

Face Recognition Walkthrough--FaceNet
=====================================

### Jenisha T

-   Nov 3, 2020
-   10 Min read
-   6,548 Views

-   Nov 3, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">10 Min</span> read
-   6,548 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Data</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1=""> Data Analytics</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1=""> Machine Learning</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1=""> Tensorflow</span>

Introduction

17

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-facedetection" class="menu-link">Face Detection</a>
-   <a href="#module-facealignment" class="menu-link">Face Alignment</a>
-   <a href="#module-facerecognitionusingfacenetmodel" class="menu-link">Face Recognition Using FaceNet Model</a>
-   <a href="#module-faceverification" class="menu-link">Face Verification</a>
-   <a href="#module-faceclustering" class="menu-link">Face Clustering</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

Face recognition is the task of identifying and verifying people based on face images. FaceNet is a face recognition system developed in 2015 by Google researchers Florian Schroff, Dmitry Kalenichenko, and James Philbin in a paper titled *FaceNet: A Unified Embedding for Face Recognition and Clustering*.

To develop a face recognition system, the first step is to find the bounding box of the location of faces. Then find the spatial points of facial features such as length of eyes, length of mouth, the distance between eyes and nose, etc. Then transform the face into a frontal face, because an image of a person could be taken in different views. Create embeddings from facial features extracted and calculate the distance between two embeddings. The entire code can be found [here](https://github.com/joyjeni/mlguides/tree/master/FaceNet).

Face Detection
--------------

Face detection is similar to object detection. It is the process of automatically detecting the location of faces and localizing by drawing a bounding box in the image. Top, left, bottom, and right coordinates of the face are returned by the face detection algorithm MTCNN (Multi-Task Cascaded Convolutional Neural Network) ![face\_detection](../../i.imgur.com/8PvUcIp.html)

    1I found 1 face(s) in this photograph.A face is located at pixel location Top: 36, Left: 76, Bottom: 126, Right: 165

html

Facial Landmark Detection
-------------------------

Facial landmarks are the spatial points in a human face. The number of spatial points chosen may vary from five to 78 points depending on annotation. Facial landmarks are also referred to as *fiducial-points, facial key points,* or *face pose*.

![face\_landmarks](../../i.imgur.com/G2RyqCE.html)

The output of the facial landmark detection algorithm for the above image is shown below.

    1I found 1 face(s) in this photograph.The chin in this face has the following points: [(86, 78), (87, 87), (89, 95), (92, 103), (95, 110), (101, 117), (108, 123), (117, 128), (128, 129), (138, 126), (146, 119), (154, 112), (159, 104), (162, 95), (163, 86), (163, 76), (162, 66)]The left_eyebrow in this face has the following points: [(89, 69), (92, 64), (97, 63), (103, 63), (108, 65)]The right_eyebrow in this face has the following points: [(125, 61), (131, 57), (138, 55), (144, 56), (150, 59)]The nose_bridge in this face has the following points: [(118, 72), (118, 78), (119, 84), (119, 90)]The nose_tip in this face has the following points: [(114, 95), (117, 96), (121, 96), (124, 95), (128, 93)]The left_eye in this face has the following points: [(96, 76), (100, 73), (105, 72), (110, 76), (105, 77), (100, 78)]The right_eye in this face has the following points: [(129, 73), (133, 68), (139, 67), (143, 69), (140, 72), (135, 73)]The top_lip in this face has the following points: [(109, 106), (113, 104), (119, 103), (122, 103), (126, 102), (132, 102), (139, 102), (137, 103), (126, 106), (123, 107), (119, 108), (112, 107)]The bottom_lip in this face has the following points: [(139, 102), (134, 109), (128, 112), (124, 113), (120, 114), (114, 111), (109, 106), (112, 107), (119, 107), (123, 107), (127, 106), (137, 103)]

html

![face\_lines](../../i.imgur.com/Ixel7i8.html)

After identifying facial keypoints, the distance between these points is measured. This value is called facial features. These features are used to classify a face. ![measure\_face](../../i.imgur.com/UkldIJ4.html)

Face Alignment
--------------

The faces can be aligned using fiducial points. This is done to make face images clicked from different angle face straight forward. Then the features extracted are matched with a template. The aligned faces can be used for comparison. The aligned face is the output of MTCNN, and is given as input to FaceNet

Face Recognition Using FaceNet Model
------------------------------------

Face recognition is the process of identifying a person from a digital image or a video. This is a 1:K matching problem. A use case for this could be marking employee attendance when an employee enters the building by looking up their face encodings in the database. The FaceNet model expects a 160x160x3 size face image as input, and it outputs a face embedding vector with a length of 128. This face embedding contains information that describes a face's significant characteristics. Then, FaceNet finds the class label of the training face embedding that has the minimum L2 distance with the target face embedding. It is the shortest distance between two points in an N dimensional space also known as Euclidean space

The Convolutional Neural Network model uses the Triplet Loss function. This function returns a smaller value for similar images and larger value for disimilar images. The components of a FaceNet network are described in the following sections.

### Input Images

The training set consists of thumbnails of faces cropped to a 160x160 size from the images. Other than translation and scaling, no other alignments to the face crops are needed.

![facecrop](../../i.imgur.com/Z37y7gf.html)

### Deep CNN

There are two different architectures described in the FaceNet paper:

1.  Deep CNN Based on Zeiler and Fergus Network Architecture
2.  Inception Model Architecture Based on GoogLeNet

The two architectures differ in the number of parameters used and the Floating Point Operations Per Second (FLOPS). FLOPS is a standard measure of computer performance that requires floating-point computations. The model accuracy is higher with larger FLOPS. A network with lower FLOPS runs faster and consumes less memory, but results in lower accuracy.

#### NN1: Deep CNN Based on Zeiler and Fergus Network Architecture

The Zeiler and Fergus CNN architecture consists of 22 layers and trains on 140 million parameters at 1.6 billion FLOPS per image. ![nn1](../../i.imgur.com/yyQEgwc.html)

#### NN2: Inception Model Architecture Based on GoogleNet

This model has 20× fewer parameters (around 6.6 million to 7.5 million) and 5× fewer FLOPS (around 500 million to 1.6 billion). ![nn2](../../i.imgur.com/rD5QyDZ.html)

#### NN3

It's identical to NN2 except takes 160x160 input size.

### NN4

This network has an input size of 96x96 and requires only 285 million FLOPS. It's suitable for mobile devices. ![classifier\_flow](../../i.imgur.com/3i9oznA.html)

### Face Embedding

The face embeddings of sizes 1×1×128 are generated from the L2 normalization layer of the deep CNN. This embedding is used in face verification and face clustering

![face\_embeddings](../../i.imgur.com/O3Spw9G.html)

### The Triplet Loss

The embeddings of the same faces are called positives, and the embeddings of different faces are called negatives. The face being analyzed is called the anchor. To calculate the loss, a triplet consisting of an anchor, a positive, and a negative embedding is formed, and their Euclidean distances are analyzed. The learning objective of FaceNet is to minimize the distance between an anchor and a positive, and maximize the distance between the anchor and a negative. A training triplet contains three samples: anchor, positive, and negative (A, P, N). Any triplet loss embedding network objective is to learn an embedding such that  
![eq1](../../i.imgur.com/P30K1HN.html) ![eq2](../../i.imgur.com/RRKOCal.html)

### Triplet Selection

Choosing the correct image pairs is extremely important as there will be a lot of image pairs that will satisfy this condition. The model won't learn much from them and will also converge slowly because of that. To ensure fast convergence, it is crucial to select triplets that violate the triplet constraint.

![argmax](../../i.imgur.com/gc5MvR5.html)

Eq(1) means that given an anchor image of person A, we want to find a positive image of A such that the distance between those two images is largest. Eq(2) means that given an anchor image A, we want to find a negative image such that the distance between those two images is smallest So, we are just selecting the hard positives and hard negatives here. This approach helps us in speeding convergence as our model learns useful representations.

The inventors of FaceNet used mini-batches consisting of 40 positives and randomly selected negative embeddings. The minimum and maximum distances were calculated for each mini-batch to create triplets.

Face Verification
-----------------

Face verification compares the facial embeddings of all trained images with the given image to find matches. Finding whether two images belong to the same person is 1:1 mapping.

![attendance](../../i.imgur.com/0Jb6NAw.html)

Face Clustering
---------------

Face clustering is the process of grouping images of the same person together for albums. It answers the question, "Are there similar faces?" The embeddings of faces can be extracted, and a clustering algorithm such as K-means can be used to group the faces of the same person together

Conclusion
----------

Face landmarks can be used for face alignment, to track faces in the video, and to measure emotions. They can also be helpful to diagnose medical conditions. MTCNN is used to crop a face and give it as input to FaceNet, which creates a 128-dimension vector for each cropped face image. The distance between these two vectors is used to find the similarity between images. FaceNet can recognize faces even if person is wearing surgical type face mask

References
----------

1.  [Joint Face Detection and Alignment using Multi-task Cascaded Convolutional Networks](https://arxiv.org/abs/1604.02878), Kaipeng Zhang, Zhanpeng Zhang, Zhifeng Li, and Yu Qiao, Aug 2018
2.  Deep Learning for Computer Vision, Rajalingappaa Shanmugamani, Packt Publishing, Jan 2018
3.  [Face recognition using Tensorflow](https://github.com/davidsandberg/facenet), David Sandberg, 2018
4.  [FaceNet: A Unified Embedding for Face Recognition and Clustering](https://arxiv.org/pdf/1503.03832.pdf), Florian Schroff, Dmitry Kalenichenko, and James Philbin, June 2015
5.  [Face Recognition with FaceNet](https://www.kaggle.com/yhuan95/face-recognition-with-facenet), 2019
6.  [Triplet Loss](https://www.youtube.com/watch?v=d2XB5-tuCWU), 2017

17

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)
