<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/c83827e7-f216-4494-a2d3-5c84aa7047e8.png" alt="Author avatar" class="jsx-3841407315" />

Deepika Singh

Visualizing Text Data using Word Cloud in Azure Machine Learning Studio
=======================================================================

### Deepika Singh

-   Oct 12, 2020
-   10 Min read
-   879 Views

-   Oct 12, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">10 Min</span> read
-   879 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Cloud</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Cloud Application Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Machine Learning and AI</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Azure Machine Learning Service</span>

Introduction

4

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-data" class="menu-link">Data</a>
-   <a href="#module-loadingdata" class="menu-link">Loading Data</a>
-   <a href="#module-textpreprocessing" class="menu-link">Text Preprocessing</a>
-   <a href="#module-buildawordcloud" class="menu-link">Build a Word Cloud</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

The amount of text data has grown exponentially in recent years, resulting in an ever-increasing need to analyze the massive amounts of such data. Word clouds provide an excellent option to analyze text data through visualization in the form of tags, or words, where the importance of a word is explained by its frequency. In this guide, you will learn how to visualize text data using the word cloud feature in Azure Machine Learning Studio.

Data
----

In this guide, you will work with Twitter data of the Bollywood movie *Rangoon*. The movie was released on February 24, 2017, and the tweets were extracted on February 25. These tweets have been stored in a file named **movietweets**. The data contains tweets in rows, and the column you will consider is the <span class="jsx-3120878690">`text`</span> variable, which contains the tweet. Start by loading the data into the workspace.

Loading Data
------------

Once you have logged into your Azure Machine Learning Studio account, click the **EXPERIMENTS** option, listed on the left sidebar, followed by the **NEW** button.

![wc0](../../pluralsight2.imgix.net/guides/0118bc28-9689-41bd-a5b7-22d378d3bbc8_k0.html)

Next, click on the blank experiment and a new workspace will open. Give the name **WordCloud** to the workspace.

![wc1](../../pluralsight2.imgix.net/guides/0379a40c-d3be-45e5-b777-6374d8322ab3_wc1.html)

Next, load the data into the workspace. Click **NEW**, and select the **DATASET** option shown below.

![wc2](../../pluralsight2.imgix.net/guides/ac8aa886-8ec1-4d3d-af63-9b69c7ae1685_wc2.html)

The selection above will open a window, shown below, which can be used to upload the dataset from the local system.

![wc3](../../pluralsight2.imgix.net/guides/8c1c5663-ce06-4ec4-b194-b78c35c3af39_wc3.html)

Once the data is loaded, you can see it in the **Saved Datasets** option. The file name is **movietweets.csv**. The next step is to drag it from the **Saved Datasets** list into the workspace. To explore this data, right-click and select the **Visualize** option, as shown below.

![wc4](../../pluralsight2.imgix.net/guides/edffbc49-4550-49df-b6af-d980ec984aaf_wc4.html)

You can see there are 14933 rows and 20 columns.

![wc5](../../pluralsight2.imgix.net/guides/81f3ee94-317c-4661-a0fd-1ab97cdbed5d_wc5.html)

Text Preprocessing
------------------

It is important to pre-process text before you visualize it with a word cloud. Common pre-processing steps include:

1.  Remove punctuation: The rule of thumb is to remove everything that is not in the form x,y,z.

<!-- -->

1.  Remove stop words: These are unhelpful words like "the", "is", or "at". These are not helpful because the frequency of such stop words is high in the corpus, but they don't help in differentiating the target classes. The removal of stop words also reduces the data size.

<!-- -->

1.  Conversion to lowercase: Words like "Clinical" and "clinical" need to be considered as one word. Hence, these are converted to lowercase.

<!-- -->

1.  Stemming: The goal of stemming is to reduce the number of inflectional forms of words appearing in the text. This causes words such as “argue,” "argued," "arguing," and "argues" to be reduced to their common stem, “argu”. This helps in decreasing the size of the vocabulary space.

The **Preprocess Text** module is used to perform these and other text cleaning steps. Search and drag the module into the workspace. Connect it to the data as shown below.

![wc6](../../pluralsight2.imgix.net/guides/801230d6-2d3b-4da5-bd2e-9a763d043ffa_wc6.html)

You must specify the text variable to be pre-processed. Click on the **Launch column selector** option, and select the <span class="jsx-3120878690">`text`</span> variable.

![wc7](../../pluralsight2.imgix.net/guides/44f78a23-d81c-444b-a74f-3235570cc67b_wc7.html)

Run the experiment and click **Visualize** to see the result. The <span class="jsx-3120878690">`Preprocessed text`</span> variable contains the processed text.

![wc8](../../pluralsight2.imgix.net/guides/1121409a-4084-4afb-9858-d5e492c9221f_wc8.html)

Build a Word Cloud
------------------

You have performed the pre-processing step, and the corpus is ready to be used for building a word cloud. You will use the R programming language to generate the word cloud. The **Execute R Script** module is used to execute R codes in the machine learning experiment.

To begin, search and add the **Execute R Script** module to the experiment. Next, connect the data to the first input port (left-most) of the module.

![wc10](../../pluralsight2.imgix.net/guides/d378030b-198e-4795-8664-f030c057d973_wc10.html)

Click on the module and under the **Properties** pane. You will see the option of writing your R script. Enter the code as shown below.

![code](../../pluralsight2.imgix.net/guides/031c8352-12b6-41a8-8089-15e6e281a65e_wcloudscript.html)

You can also copy the code below.

    1#lines 1 to 4
    2
    3library(tm)
    4library(wordcloud)
    5library(RColorBrewer)
    6dataset <- maml.mapInputPort(1)
    7
    8# lines 5 to 12 – text preprocessing 
    9
    10commatokenizer = function(x) unlist(strsplit(as.character(x),","))
    11corpus <- Corpus(DataframeSource(data.frame(dataset[,1])))
    12corpus = tm_map(corpus, removePunctuation)
    13corpus = tm_map(corpus, content_transformer(tolower))
    14corpus = tm_map(corpus, removeNumbers)
    15corpus = tm_map(corpus, stripWhitespace)
    16corpus = tm_map(corpus, removeWords, stopwords('english'))
    17corpus = tm_map(corpus, stemDocument)
    18
    19# lines 13 and 14 - Create term-document matrix, frequency 
    20
    21tdm = TermDocumentMatrix(corpus,control=list(tokenize=commatokenizer))
    22freq <- rowSums(as.matrix(tdm))
    23
    24# line 15
    25
    26wordcloud(names(freq),freq,min.freq = 10, max.words=150, 
    27random.order=FALSE, random.color=FALSE, rot.per=.25,colors=brewer.pal(8, "Dark2")) 

{r}

### Code Explanation

In the code above, the first three lines of code load the required libraries. The fourth line creates a dataframe, <span class="jsx-3120878690">`dataset1`</span>, which is mapped to the first input port with the function,<span class="jsx-3120878690">`mam1.mapInputPort()`</span>.

Line of codes from five to twelve perform further refining on the earlier preprocessed text data with the <span class="jsx-3120878690">`tm_map`</span> function. The next two lines create the document term matrix and store the frequency of words in the <span class="jsx-3120878690">`freq`</span> object. Finally, the <span class="jsx-3120878690">`wordcloud()`</span> function is used to build the word cloud. The major arguments of this function are given below.

1.  <span class="jsx-3120878690">`min.freq`</span>: An argument which ensures that words with a frequency below <span class="jsx-3120878690">`min.freq`</span> will not be plotted in the word cloud.

<!-- -->

1.  <span class="jsx-3120878690">`max.words`</span>: The maximum number of words to be plotted.

<!-- -->

1.  <span class="jsx-3120878690">`random.order`</span>: An argument that specifies plotting of words in random order. If false, the words are plotted in decreasing frequency.

<!-- -->

1.  <span class="jsx-3120878690">`rot.per`</span>: The proportion of words with 90-degree rotation (vertical text).

<!-- -->

1.  <span class="jsx-3120878690">`colors`</span>: An argument that specifies the color of words from least to most frequent.

The above arguments have been provided in the <span class="jsx-3120878690">`wordcloud()`</span> function. Once you have set up the experiment, the next step is to run it.

![wc12](../../pluralsight2.imgix.net/guides/0ab2d0cb-feaf-40b3-ba8e-cefb43cfffed_wc12.html)

On successful completion, you can see the green tick in the module.

![wc13](../../pluralsight2.imgix.net/guides/1f0870a7-3ac7-447a-a7f4-2e5776046c2f_wc13.html)

Right-click and select **Visualize** to look at the output.

![wc14](../../pluralsight2.imgix.net/guides/4f9c5bb5-e6ad-4635-bbe9-2acf0d818708_wc14.html)

The following output is displayed. The word cloud generated shows that the words are plotted in decreasing frequency, which means that the most frequent words are in the center of the word cloud, and the words with lower frequency are farther away from the center.

![wordcloud](../../pluralsight2.imgix.net/guides/8ca52825-8562-44dd-bfd6-514d9c520b68_wcloudfinalimage.html)

You can see that the word "rangoon" is at the center of the word cloud, which makes sense as it was the name of the movie. Another interesting word is "miss," because the name of the central character in the movie was Miss Julia. This way, you can analyze the important words in a text corpus using a word cloud.

Conclusion
----------

Word clouds are very useful in sentiment analysis as they highlight the key words in text. This has application in Twitter, Facebook, and other social media analytics tasks. Word clouds are also applied to build marketing campaigns or plan promotional advertisements where significant words are used.

In this guide, you learned how to visualize text data using Word Cloud in Azure ML Studio. You can learn more on text visualization with guides on other technologies like [Python](natural-language-processing-visualizing-text-data-using-word-cloud/index.html) and [R](visualization-text-data-using-word-cloud-r/index.html).

To learn more about data science and machine learning using Azure Machine Learning Studio, please refer to the following guides:

1.  [Getting Started with Azure ML Studio](getting-started-with-azure-ml-studio/index.html)

2.  [Cleaning Data with Azure ML Studio](cleaning-data-with-azure-ml-studio/index.html)

3.  [Data Preprocessing with Azure ML Studio](data-preprocessing-with-azure-ml-studio/index.html)

4.  [Classification Modeling with Azure ML Studio](classification-modeling-with-azure-ml-studio/index.html)

5.  [Regression Modeling with Azure Machine Learning Studio](regression-modeling-with-azure-ml-studio/index.html)

6.  [Model Validation in Azure ML Studio](model-validation-in-azure-ml-studio/index.html)

7.  [R and Python Scripts in Azure ML Studio](r-and-python-scripts-in-azure-ml-studio/index.html)

8.  [Advanced Machine Learning Modeling in Azure ML Studio](advanced-machine-learning-modeling-in-azure-ml-studio/index.html)

9.  [Named Entity Recognition with Azure Machine Learning Studio](named-entity-recognition-with-azure-machine-learning-studio/index.html)

10. [Text Analytics with Azure Machine Learning Studio](text-analytics-with-azure-machine-learning-studio/index.html)

4

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)
