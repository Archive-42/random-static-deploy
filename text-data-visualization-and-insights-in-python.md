<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/9be54a1d-e543-404c-8736-beb1adf2cc26.jpg" alt="Author avatar" class="jsx-3841407315" />

Kimaru Thagana

Text Data Visualization and Insights in Python
==============================================

### Kimaru Thagana

-   Oct 7, 2020
-   4 Min read
-   9,874 Views

-   Oct 7, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">4 Min</span> read
-   9,874 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Data</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Data Analytics</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Python</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Machine Learning</span>

Introduction

26

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-scattertext" class="menu-link">ScatterText</a>
-   <a href="#module-wordcloud" class="menu-link">Word Cloud</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

Text data insight is derived via text analysis and mining techniques mainly practiced in natural language processing (NLP).

Cleaned and processed text data is rich and contains lots of insights. But for data scientists, text data is a bit more challenging to use to represent insights in charts and graphs because it's not numerical. Text visualization requires different skills, mainly, efficiently using screen real estate to visualize relationships between phenomena and highlight the main message. This may involve leaving some data out to allow the main insight or objective to be achieved.

Several libraries have been developed to overcome this challenge. This guide will explore some text visualization libraries primarily written in Python.

The guide assumes you have an intermediate level skill in Python and general data visualization.

ScatterText
-----------

ScatterText is a powerful Python-based tool for extracting terms in a body of text and visualizing them in an interactive HTML display. The official Github repo can be found [here](https://github.com/JasonKessler/scattertext).

To get started, install the library using <span class="jsx-3120878690">`pip`</span>.

    1pip install scattertext

bash

To develop some code, check out a sample tutorial from the official repo [here](https://github.com/JasonKessler/scattertext#tutorial).

### Sample Visualization

The output of a ScatterText scatterplot looks similar to this. ![scattertext](../../pluralsight2.imgix.net/guides/a10bd30e-f9fa-43d7-904f-0ec6233a65bb_demo_compact.html)

Source: [Official Repository](https://github.com/JasonKessler/scattertext)

Word Cloud
----------

A *word cloud* is a text visualization technique that focuses on the frequency of words and correlates the size and opacity of a word to its frequency within a body of text. The output is usually an image that depicts different words in different sizes and opacities relative to the word frequency.

An application of this form of visualization is document summarization, where you can process a body of text within a document and, based on the most prominent words, get a general summary of what the document is all about. This can also be applied in job applications where if the job description is analyzed, the largest words to appear are most likely the most important skills for the job.

The example below explores how to develop a word cloud in Python.

### Sample Code

To get started, install <span class="jsx-3120878690">`wordcloud`</span> to generate the cloud of text and <span class="jsx-3120878690">`matplotlib`</span> to plot and visualize it. To install, run the command

    1pip install wordcloud matplotlib

bash

The body of text used is a job description from this [link](https://weworkremotely.com/remote-jobs/nadine-west-lead-full-stack-rails-engineer).

    1import matplotlib.pyplot as plt
    2from wordcloud import WordCloud, STOPWORDS 
    3# stopwords is a collection of words that dont convey meaning. mostly pronouns such as he she etc.
    4
    5#generate word cloud
    6text = "copy_text_from_job_description_in_link_provided_above" # the input of the wordcloud generator
    7#generate the wordcloud object, set the height and width, set the random_state parameter to ensure
    8reproducibility of results and set the stopwords parameter so that the irrelevant words such as pronouns are discarded.
    9wordcloud = WordCloud(width = 3000, height = 2000, random_state=1, background_color='blue', collocations=False, stopwords = STOPWORDS).generate(text)
    10# text is the input to the generate() method
    11#draw the figure
    12#Set figure size
    13plt.figure(figsize=(40, 30))
    14# Display image
    15plt.imshow(wordcloud) 
    16# No axis 
    17plt.axis("off")
    18plt.show()

python

### Results

To run the above script, copy the codeblock in a Python file and name it <span class="jsx-3120878690">`wc_generator.py`</span>. To run the app, run

    1python wc_generator.py

bash

The figure below should appear ![wordcloud results](../../pluralsight2.imgix.net/guides/c901142e-3284-4097-9217-755307191754_Figure_1.html)

Conclusion
----------

These alternative visualization skills are vital in roles that involve business intelligence, data visualization, and data science. Visualization allows you to communicate data insights graphically to an audience that may not necessarily be tech savvy.

To further build on this guide, challenge yourself to learn integrated suites such as [Dash](https://plotly.com/dash/) and [Tableau](https://www.tableau.com/) for business intelligence and data visualization.

26

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)
