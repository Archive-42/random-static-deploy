<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/6455207a-ea14-4964-af40-b569f06f122e.jpg" alt="Author avatar" class="jsx-3841407315" />

Douglas Starnes

Teaching Apps to Read with Azure Cognitive Services
===================================================

### Douglas Starnes

-   Nov 3, 2020
-   8 Min read
-   371 Views

-   Nov 3, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">8 Min</span> read
-   371 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Cloud</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Cloud Application Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Azure Cognitive Services</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Machine Learning and AI</span>

Introduction

8

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-setup" class="menu-link">Setup</a>
-   <a href="#module-sentimentanalysis" class="menu-link">Sentiment Analysis</a>
-   <a href="#module-namedentityrecognition" class="menu-link">Named Entity Recognition</a>
-   <a href="#module-languagedetection" class="menu-link">Language Detection</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

As users of software applications, we can interact with technology in many ways. We can now talk to a computer and have it understand what we are telling it. We can use computer vision to have a machine recognize facial expressions. But by and large, most of the time we still communicate to computers with plain old text. This is proven by the incredible amount of text data that exists. How can we extract meaningful and actionable insights from that text data?

Azure Cognitive Services includes the Text Analytics service. This gives developers an easy to use a REST API with client libraries in several mainstream languages, including C\#, JavaScript, and Python. The Text Analytics service has several features that are commonly found when working with text in software applications today. In this guide, we will discuss three: sentiment analysis, named entity recognition, and language detection. When using Azure Cognitive Services, you as a developer don't have to know anything about machine learning or natural language processing. If you can call a REST API or use a language and client library, you can integrate text analytics with your next project! This guide will demonstrate how to use the Text Analytics service with the C\# client library.

Setup
-----

The Azure Text Analytics cognitive service has a common setup regardless of the features you need. In the Azure portal, search for the **Text Analytics** service and create a new resource. To experiment, in the pricing tier, select **Free** and avoid incurring charges. When the resource is provisioned, click the **Keys and Endpoints** link on the left. This will show you the API keys and endpoint needed to access the service. Treat the API keys like passwords!

First, you'll need to add the <span class="jsx-3120878690">`Azure.AI.TextAnalytics`</span> NuGet package to the project dependencies. The latest version as of the publication of this guide is 5.0.0.

Add variables for your API key and endpoint.

    1static string API_KEY = "your-api-key";
    2static string ENDPOINT = "your-endpoint"

csharp

The API key is used to create an instance of <span class="jsx-3120878690">`AzureKeyCredential`</span>, which is used to authenticate the account owner. The endpoint is used to create an instance of <span class="jsx-3120878690">`Uri`</span> and is the base location.

    1var azureCredentials = new AzureKeyCredentials(API_KEY);
    2var endpoint = new Uri(ENDPOINT);

csharp

All features of Text Analytics will use methods on the <span class="jsx-3120878690">`TextAnalyticsClient`</span> class, so I'll create an instance:

    1var client = new TextAnalyticsClient(endpoint, azureCredentials);

csharp

Sentiment Analysis
------------------

The first feature of the Text Analytics service this guide will discuss is sentiment analysis. The name is self-explanatory. The service analyzes a piece of text and returns a prediction of whether the sentiment is positive or negative. To analyze the sentiment of a piece of text, call the <span class="jsx-3120878690">`AnalyzeSentiment`</span> method.

    1DocumentSentiment sentimentAnalysisResults = client.AnalyzeSentiment("Azure Cognitive Service is fantastic when you need to add AI to an application quickly");

csharp

Notice that where I have been using type inference to declare instances of the client and other classes, here I explicitly used <span class="jsx-3120878690">`DocumentSentiment`</span>. This is because the actual return type of <span class="jsx-3120878690">`AnalyzeSentiment`</span> is <span class="jsx-3120878690">`Response<DocumentSentiment>`</span>. The <span class="jsx-3120878690">`DocumentSentiment`</span> will have a <span class="jsx-3120878690">`SentenceSentiment`</span> for each sentence in the analyzed text. These are stored in the <span class="jsx-3120878690">`Sentences`</span> property. The <span class="jsx-3120878690">`SentenceSentiment`</span> has three properties of interest.

-   <span class="jsx-3120878690">`Text`</span>- the sentence itself
-   <span class="jsx-3120878690">`Sentiment`</span> - the prediction of 'Positive' or 'Negative'
-   <span class="jsx-3120878690">`ConfidenceScores`</span> - the values of each sentiment

The <span class="jsx-3120878690">`ConfidenceScores`</span> property has three values, each between 0.0 and 1.0 inclusive for each sentiment:

-   <span class="jsx-3120878690">`Positive`</span>
-   <span class="jsx-3120878690">`Negative`</span>
-   <span class="jsx-3120878690">`Neutral`</span>

The prediction for this text is positive <span class="jsx-3120878690">`Sentiment`</span> with a score of 1.0 for <span class="jsx-3120878690">`Positive`</span> and 0.0 for <span class="jsx-3120878690">`Negative`</span> and <span class="jsx-3120878690">`Neutral`</span>.

If I changed the text to "It's not so great if you have specialized needs," the prediction for the <span class="jsx-3120878690">`Sentiment`</span> is negative and the score for <span class="jsx-3120878690">`Negative`</span> is 1.0.

Named Entity Recognition
------------------------

The Text Analytics service can also parse fourteen different entities out of text. This includes the names of people, geographic locations, email addresses, and phone numbers in the United States and European Union. This is called named entity recognition (NER). Using NER is as simple as using the sentiment analysis. You just call a different method on the <span class="jsx-3120878690">`TextAnalyticsClient`</span> instance. Simply provide the <span class="jsx-3120878690">`RecognizeEntities`</span> method with the text to analyze.

    1var recognizeEntitiesResult = client.RecognizeEntities("Microsoft Azure is used all over the world from the Australia to Zimbabwe.")

csharp

The return value of <span class="jsx-3120878690">`RecognizeEntities`</span> has a <span class="jsx-3120878690">`Value`</span> property that is a collection of <span class="jsx-3120878690">`CategorizedEntity`</span> for each detected entity in the text. The <span class="jsx-3120878690">`CategorizedEntity`</span> has three properties of interest:

-   <span class="jsx-3120878690">`Text`</span> - the entity itself
-   <span class="jsx-3120878690">`Category`</span> - the predicted category of the entity from the list of fourteen
-   <span class="jsx-3120878690">`ConfidenceScore`</span> - a value between 0.0 and 1.0 inclusive, with 1.0 being the most certain in the predicted category

If you look at the list of categories in the [Cognitive Services docs](https://docs.microsoft.com/en-us/azure/cognitive-services/text-analytics/how-tos/text-analytics-how-to-entity-linking?tabs=version-3), some of the categories have subcategories. There is also a <span class="jsx-3120878690">`Subcategory`</span> property as well.

If the Text Analytics service is asked to find entities in the string "Microsoft Azure is used all over the world, from Australia to Zimbabwe," it will find three entities: "Microsoft Azure", "Australia", and "Zimbabwe". It recognizes "Australia" and "Zimbabwe" as geographic locations with high certainty, 0.91 and 0.87 respectively. However, it predicts that "Microsoft Azure" is an "Organization." This seems odd as Azure is a software product. And Azure isn't that certain about the label, either, with just a 0.51 score. If I modify the text to "Microsoft sells software all over the world from Australia to Zimbabwe," it predicts "Microsoft" is an organization with a score of 0.79. The scores for Australia and Zimbabwe are still quite high. And it also predicts "software" to be a skill with a score of 0.8.

Language Detection
------------------

While this guide is written in English, it is only one of many languages that the Text Analytics service recognizes. Calling the <span class="jsx-3120878690">`DetectLanguage`</span> method on a <span class="jsx-3120878690">`TextAnalyticsClient`</span> instance will return a value with a predicted language. I've used [Microsoft Translator](https://www.microsoft.com/en-us/p/translator/9wzdncrfj3pg?activetab=pivot:overviewtab) to translate the string "Microsoft sells software all over the world" into Spanish, Russian, and Japanese.

    1var spanish = "Microsoft vende software en todo el mundo.";
    2var russian = "Microsoft продает программное обеспечение по всему миру.";
    3var japanese = "マイクロソフトは世界中でソフトウェアを販売しています。";

csharp

As with the sentiment analysis, I must explicitly declare the type of the return value.

    1DetectedLanguage detectSpanish = client.DetectLanguage(spanish);
    2DetectedLanguage detectRussian = client.DetectLanguage(russian);
    3DetectedLanguage detectJapanese = client.DetectLanguage(japanese);

csharp

The <span class="jsx-3120878690">`DetectedLanguage`</span> has a <span class="jsx-3120878690">`Name`</span> property, which is the predicted language for the text.

If you check the results of analyzing the three translated sentences, you will find that Azure correctly predicts them to be Spanish, Russian, and Japanese. So Azure can work with languages using the Western alphabet, the Cyrillic alphabet used in Russia, and languages like Japanese in which the differences between characters are subtler.

Conclusion
----------

Applications can use Azure Cognitive Services to add sentiment analysis, entity recognition, and language detection. The Text Analytics service requires no knowledge of machine learning and costs a fraction of a penny per transaction. Using the REST API or client libraries, developers can integrate the service into web and mobile applications in almost any language. The hard part is that natural language processing is handled by Microsoft. It's cheaper and more reliable than trying to train machine learning models yourself. These problems have been solved before, so you get to focus on what makes your applications great! Thanks for reading!

8

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)
