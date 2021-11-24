<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/c83827e7-f216-4494-a2d3-5c84aa7047e8.png" alt="Author avatar" class="jsx-3841407315" />

Deepika Singh

Publish Machine Learning Models in Azure Machine Learning Studio
================================================================

### Deepika Singh

-   Oct 21, 2020
-   11 Min read
-   1,084 Views

-   Oct 21, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">11 Min</span> read
-   1,084 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Cloud</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Cloud Application Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Machine Learning and AI</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Azure Machine Learning Service</span>

Introduction

6

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-data" class="menu-link">Data</a>
-   <a href="#module-buildthemodel" class="menu-link">Build the Model</a>
-   <a href="#module-createthewebservice" class="menu-link">Create the Web Service</a>
-   <a href="#module-customizewebserviceoutput" class="menu-link">Customize Web Service Output</a>
-   <a href="#module-deploythewebservice" class="menu-link">Deploy the Web Service</a>
-   <a href="#module-testthewebservice" class="menu-link">Test the Web Service</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

One of the most in-demand skills in the analytics workplace today is the ability to deploy machine learning algorithms. In many companies, data scientists are required not just to build predictive models, but also to deploy and publish them. This has become a key requirement in today's era of building data science products. In this guide, you will learn how to publish a machine learning model in Azure Machine Learning Studio.

Data
----

You will use the Adult Census Income Binary Classification dataset available in Azure Machine Learning Studio. The data is a subset of the 1994 census database, using working adults over the age of 16 with an adjusted income index of greater than 100. The data is used as a classification machine learning problem where the objective is to classify people using demographics to predict whether a person earns over US$50,000 a year. The data comes from the [UCI Machine Learning Repository](https://archive.ics.uci.edu/ml/index.php).

### Steps

There are two main steps to publish machine learning models. The first is to build the machine learning model, and the second is to deploy and publish it.

Build the Model
---------------

Building models is not covered in this guide. You can follow the steps detailed in the guide [Getting Started with Azure ML Studio](getting-started-with-azure-ml-studio/index.html) to build the model you will deploy in this guide.

The only change, although not mandatory, is that you can change the name of the experiment from **Getting Started with Azure ML Studio** to **Publishing Model on Azure**.

The result from the model building step is the following output.

![lc1](../../pluralsight2.imgix.net/guides/e19e2cc2-6e80-44e1-b043-93d3880c108b_lc1.html)

You now have a machine learning algorithm built on Azure Machine Learning Studio, and the next step is to publish and deploy it, which is covered in the subsequent sections.

Create the Web Service
----------------------

At the bottom of the workspace, click on **Set Up Web Service**, and select **Predictive Web Service Recommended**.

![lc2](../../pluralsight2.imgix.net/guides/0211166c-edbe-4120-b876-bc7d1b055f83_lc2.html)

A predictive experiment is created, and several new modules will be added. For example, the **Web service input** and **Web services output** modules get added to the predictive experiment. These are the first and last modules in the experiment.

![lc3](../../pluralsight2.imgix.net/guides/30ec2779-9a39-4ee5-84b1-a79859e01eb8_lc3.html)

The **Publishing model on Azure** and **Apply Transformation** modules also get added. Run the experiment, and once all the modules run successfully, right-click on the **Score model** module, and select **Visualize**.

![lc4](../../pluralsight2.imgix.net/guides/0e7bac9a-b9b7-4b79-8ee4-b7b69665a779_lc4.html)

The following output will be displayed. You can see two new variables being added. These are <span class="jsx-3120878690">`Scored Labels`</span> and <span class="jsx-3120878690">`Scored Probabilities`</span>. The first gives the predicted labels while the latter gives the probability score.

![lc5](../../pluralsight2.imgix.net/guides/4fd42987-efe2-4642-ac11-50afd8b58e75_lc5.html)

Customize Web Service Output
----------------------------

You have created a predictive experiment, and the next step is to customize the output. To begin, delete the connection between the **Score Model** module and **Web service output**. Next, search and drag the **Search Columns in Dataset** module between the **Score Model** module and **Web service output**. Then make the connection as shown below.

![lc7](../../pluralsight2.imgix.net/guides/9bf6dc27-e744-4c9e-8858-4eecced61c6a_lc7.html)

Click on the **Search Columns in Dataset** module, and then click **Launch column selector** to select the following variables.

![lc8](../../pluralsight2.imgix.net/guides/a2b5e7da-33aa-47c4-b161-c6437112ae94_lc8.html)

Run the predictive experiment again, and visualize the output of the **Search Columns in Dataset** module. Only two columns are returned.

![lc9](../../pluralsight2.imgix.net/guides/8e11d316-8be4-4326-9fb0-cb48a13612bc_lc9.html)

Deploy the Web Service
----------------------

After customizing the web service output, you are ready to deploy it. Click the **Deploy Web Service** icon at the bottom of your experiment. After the deployment is finished, you will see the following output with web service properties as shown below.

![lc10](../../pluralsight2.imgix.net/guides/0fc23c12-4786-4a25-bdd2-1a72cb051389_lc10.html)

Copy the API key as shown below and paste it in a notepad or word document, whichever you prefer. This will be a different API key for your Azure account.

![LC11](../../pluralsight2.imgix.net/guides/be3bc21e-b6c2-449d-bbc2-5bc11d34685f_LC11NEW.html)

You can also see the **Request/Response** hyperlink in the output above. Click the hyperlink that will open a new browser tab containing the Request Response API documentation for your web service. It will also have a URL. Copy and save it in your notebook. This will be different URL for your Azure account.

![lc12](../../pluralsight2.imgix.net/guides/c2ff0188-4bb7-4549-be2c-405ae62ac22d_lc12.html)

Test the Web Service
--------------------

You have created a web service and generated the required keys. The next step is to test the web service, which requires a OneDrive account. If you don’t have an account, create an account [here](https://onedrive.live.com/). Use the Microsoft Studio account to create the OneDrive account so you can access both accounts.

Once the account is created, login to it. In the **New** menu, click **Excel workbook**.

![lc13](../../pluralsight2.imgix.net/guides/c99d7f95-02c9-451b-ba55-6f9207d2077d_lc13.html)

This will open a new tab in the Excel workbook, as shown below. Save the workbook as **Web Service ML**.

![lc14](../../pluralsight2.imgix.net/guides/5c3e5e21-0fd8-47f5-bd9f-4dcd89c2b1da_LC14.html)

Next, on the **Insert** tab, click **Office Add-ins**.

![lc15](../../pluralsight2.imgix.net/guides/5d2aabea-3a80-4aa6-b7b5-a72737687417_lc15new.html)

Next, in the **Office Add-ins** dialog box, click **Store**. Then type **Azure Machine Learning** in the search box and you will see the following output.

![pm27](../../pluralsight2.imgix.net/guides/d2abee0e-e43e-4392-9b9c-9ec33fb25771_pm27.html)

The next step is to click and add the **Azure Machine Learning** icon to load it. Once the Azure Machine Learning plugin is loaded, you can see the following output.

![lc16](../../pluralsight2.imgix.net/guides/5285f1f0-f8b1-4e2b-b84b-c3312995bfc4_lc16.html)

Next, click on **Add Web Service**. Paste the Request Response URL you copied earlier into the **URL** box, and the API key into the **API key** box.

![lc17](../../pluralsight2.imgix.net/guides/177657df-3272-46b6-bbc7-48b8aa95c85d_lc17.html)

Click the **Add** button located below the **API key**.

![lc18](../../pluralsight2.imgix.net/guides/d40b88e3-e241-4e99-8727-33ed4172c2d6_lc18.html)

Completing the above steps will create the following output.

![lc19](../../pluralsight2.imgix.net/guides/5f70724a-2c7f-491f-a0c3-d6acef5f9fb9_lc19.html)

To test the web service, you need to provide the inputs. In the above output, leave the **My data has headers** box checked, and click the **Use sample data** button. This will generate the output below. Enter the values as shown below, or values of your choice.

![lc20](../../pluralsight2.imgix.net/guides/a5e95771-6d2e-41cd-83c6-998c880843a1_lc20.html)

Note that there is input provided to the <span class="jsx-3120878690">`income`</span> variable, which is the target variable. You can leave this input blank and still test the web service. Next, select the header and data cells (A1 to O2). This is reflected in the **Input** pane. In the **Output** box, select **P1**. This will create the header for the predictions.

![lc21](../../pluralsight2.imgix.net/guides/64f7a65e-169e-4a3b-827e-0fc1bb921441_lc21.html)

Once the selection is made, click the **Predict** button. This will generate the following output.

![lc22predictionswebserice](../../pluralsight2.imgix.net/guides/e5649330-e12b-44aa-aa83-f3b8e7e6b3e4_lc22finalpredictionserviceoutput.html)

When the web service has finished running, view the data returned in cells P2 (Scored Label) and Q2 (Scored Probabilities). The web service has predicted the income class for this set of inputs to be **&lt;=50K**.

You have successfully created and tested a machine learning web service that predicts income class.

Conclusion
----------

Building data science products has applications across several industries. You can build a forecasting product to predict shipping volumes. Banks are building fraud detection algorithms. Even income tax institutions are using artificial intelligence to identify tax frauds.

Some other application areas where data science models can be built and deployed are healthcare, crime prevention, stock market valuation, natural language processing, self-driving cars, computer vision, and advanced image recognition.

In this guide, you learned how to publish machine learning models in Azure Machine Learning Studio. Building machine learning models is crucial, but adding the knowledge of deploying them to the cloud and testing the web service will add more power to your data science portfolio.

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
11. [Extract Key Phrases from Text in Azure Machine Learning Studio](extract-key-phrases-from-text-in-azure-machine-learning-studio/index.html)
12. [Visualizing Text Data using Word Cloud in Azure Machine Learning Studio](visualizing-text-data-using-word-cloud-in-azure-machine-learning-studio/index.html)
13. [Text Preprocessing in Azure Machine Learning Studio](text-preprocessing-in-azure-machine-learning-studio/index.html)

14. [Estimate Correlation Coefficient in Azure Machine Learning Studio](estimate-correlation-coefficient-in-azure-machine-learning-studio/index.html)

6

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)
