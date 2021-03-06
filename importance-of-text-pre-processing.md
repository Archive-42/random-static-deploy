<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/c7859b4f-a0e9-4f74-8559-62f43bdcabea.jpeg" alt="Author avatar" class="jsx-3841407315" />

Gaurav Singhal

Importance of Text Pre-processing
=================================

### Gaurav Singhal

-   Oct 5, 2020
-   12 Min read
-   5,093 Views

-   Oct 5, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">12 Min</span> read
-   5,093 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Data</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Data Analytics</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Machine Learning</span>

Introduction

26

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-gettingstarted" class="menu-link">Getting Started</a>
-   <a href="#module-cleaningandremovingnoise" class="menu-link">Cleaning and Removing Noise</a>
-   <a href="#module-nltk" class="menu-link">NLTK</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

If, as they say, "the customer is king," then customer feedback is vital for any organization, and even to the government of any country. Feedback has the power to make or break a government or organization. The insights gained through public review analysis can influence strategy for better performance.

The kind of data you get from customer feedback is usually unstructured. It contains unusual text and symbols that need to be cleaned so that a machine learning model can grasp it. Data cleaning and pre-processing are as important as building any sophisticated machine learning model. The reliability of your model is highly dependent upon the quality of your data.

Getting Started
---------------

Steps in pre-processing depend upon the given task and volume of data. This guide will cover main pre-processing techniques like leaning, normalization, tokenization, and annotation.

Before going further with these techniques, import important libraries.

    1import numpy as np
    2import pandas as pd 
    3import re
    4import string
    5import nltk
    6from nltk.corpus import stopwords
    7from nltk.tokenize import word_tokenize 
    8from nltk.stem.porter import *
    9from nltk.stem.wordnet import WordNetLemmatizer

python

Cleaning and Removing Noise
---------------------------

It helps to get rid of unhelpful parts of the data, or *noise*, by converting all characters to lowercase, removing punctuations marks, and removing stop words and typos.

Removing noise comes in handy when you want to do text analysis on pieces of data like comments or tweets. The code in the following sections will be helpful to get rid of the text that interferes with text analysis.

This example uses simple text for an easy walkthrough. You may also add <span class="jsx-3120878690">`.txt`</span> files with paragraphs, or paste/write them directly. Refer to the alternative code below.

### Lowercase

You might be thinking, "What should be my approach when capitalization is at the beginning of the sentence or in proper nouns?" There is a common approach to lowercasing everything for the sake of simplicity. It helps to maintain the consistency flow during the NLP tasks and text mining. The <span class="jsx-3120878690">`lower()`</span> function makes the whole process quite straightforward.

    1def lowercase(intext):
    2    return intext.lower()    
    3
    4#Alternatively:
    5#orig =data.raw(r'file.text') # read raw text form orignal file
    6#sent = data.sents(r'file.txt') #brake parah into sentance
    7#bwords = data.words(r'file.text')#break parah into words
    8
    9intext = input('Your-Text:')
    10clean_text = lowercase(intext)
    11print('\nlowercased:',lowercase(clean_text))

python

![lowercase removal](../../pluralsight2.imgix.net/guides/9d3757c2-4803-43aa-8d9e-01791fc8d500_1.html)

The punctuation to the sentence adds up *noise* that brings ambiguity while training the model.

### Punctuations

Let's check the types of punctuation the <span class="jsx-3120878690">`string.punctuation()`</span> function filters out. To achieve the punctuation removal, <span class="jsx-3120878690">`maketrans()`</span> is used. It can replace the specific characters' punctuation, in this case with some other character. The code replaces the punctuation with spaces (<span class="jsx-3120878690">`''`</span>). <span class="jsx-3120878690">`translate()`</span> is a function used to make these replacements.

    1output= string.punctuation
    2print('list of punctuations:', output)
    3def punctuation_cleaning(intext):
    4    return text.translate(str.maketrans('', '', output))
    5print('\nNo-punctuation:',punctuation_cleaning(clean_text))

python

![removing punctuations](../../pluralsight2.imgix.net/guides/d93b8c53-1dd8-42f8-8b3f-2c4cf0766d52_2.html)

### HTML Code and URL Links

The code below uses regular expressions (<span class="jsx-3120878690">`re)`</span>. To perform matches with a regular expression, use <span class="jsx-3120878690">`re.complie`</span> to convert them into objects so that searching for patterns becomes easier and string substitution can be performed. A <span class="jsx-3120878690">`.sub()`</span> function is used for this.

    1def url_remove(text):
    2    url_pattern = re.compile(r'https?://\S+|www\.\S+')
    3    return url_pattern.sub(r'', text)
    4def html_remove(text):
    5    html_pattern = re.compile('<.*?>')
    6    return html_pattern.sub(r'', text)
    7
    8text1 = input('Your-Text:')
    9print('\nNo-url-links:', url_remove(text1))
    10text2 = input('Your Text:')
    11print('\nNo-html-codes:', html_remove(text2))

python

![removing urls](../../pluralsight2.imgix.net/guides/15d97c78-2d0f-4625-8cf0-b417fb885256_3.html)

### Spell Checks

This guide uses the <span class="jsx-3120878690">`pyspellchecker`</span> package for spelling correction.

    1from spellchecker import SpellChecker
    2
    3spelling = SpellChecker()
    4def spelling_checks(text):
    5    correct_result = []
    6    typo_words = spelling.unknown(text.split())
    7    for word in text.split():
    8        if word in typo_words:
    9            correct_result.append(spelling.correction(word))
    10        else:
    11            correct_result.append(word)
    12    return " ".join(correct_result)
    13        
    14text = input('Your-Text: ')
    15print('Error free text:',spelling_checks(text))

python

![error free text ](../../pluralsight2.imgix.net/guides/2076141f-3c0a-4b2c-a631-27c1f9b53c72_4.html)

Refer to [this code](https://gist.github.com/slowkow/7a7f61f495e3dbb7e3d767f97bd7304b) to learn how to remove emojis from your text.

NLTK
----

NLTK stands for *Natural Language Toolkit*. It is a powerful tool complete with different Python modules and libraries to carry out simple to complex natural language processing (NLP). These NLP libraries act as translators between machines (like Alexa, Siri, or Google Assistant) and humans so that the machines have the appropriate response. NLTK has a large, structured text known as a *corpus* thatt contains machine-readable text files in a directory produced for NLP tasks. WordNet is a famous corpus reader. Read more about corpus readers [here](https://www.nltk.org/api/nltk.corpus.html).

Before using the NLTK library, make sure it is downloaded on your system. Use [these steps](https://www.nltk.org/install.html) to install NLTK.

### Tokenization

*Tokenizing* is like splitting a whole sentence into words. You can consider a simple separator for this purpose. But a separator will fail to split the abbreviations separated by "." or special characters, like U.A.R.T., for example. Challenges increase when more languages are included. How about dealing with compound words in languages such as German or French?

Most of these problems can be solved by using the <span class="jsx-3120878690">`nltk`</span> library. The <span class="jsx-3120878690">`word_tokenize`</span> module breaks the words into tokens and these words act as an input for the normalization and cleaning process. It can further be used to convert a string (text) into numeric data so that machine learning models can digest it.

### Removing Stop Words

English is one of the most common languages, especially in the world of social media. For instance, "a," "our," "for," "in," etc. are in the set of most commonly used words. Removing these words helps the model to consider only key features. These words also don't carry much information. By eliminating them, data scientists can focus on the important words.

Check out the list of the stop words <span class="jsx-3120878690">`nltk`</span> provides.

    1stopwordslist = stopwords.words('english')
    2print(stopwordslist)
    3print('Total:',len(stopwordslist))

python

![stop words list](../../pluralsight2.imgix.net/guides/0de5382f-798b-4eca-95a1-d964aa717288_5.html)

    1text = "A smart kid ran towards the police station when he saw the thieves approaching."
    2stop_words = set(stopwords.words('english')) 
    3tokenwords = word_tokenize(text) 
    4result = [w for w in tokenwords if not w in stop_words] 
    5result = [] 
    6for w in tokenwords: 
    7    if w not in stop_words: 
    8        result.append(w) 
    9  
    10print('Tokenized words: ',tokenwords) 
    11print('No-Stopwords: ',result) 

python

![tokenized words](../../pluralsight2.imgix.net/guides/8af3fca6-5b1e-4d6e-8ee2-b7495733a521_6.html)

The highlighted words are removed from the sequence. Put in some dummy text and notice the changes.

### Normalization

*Normalization* is an advanced step in cleaning to maintain uniformity. It brings all the words under on the roof by adding *stemming* and *lemmatization*. Many people often get stemming and lemmatizing confused. It's true that they are both normalization processes, but they are a lot different. ![stemming vs Lemmatization](../../pluralsight2.imgix.net/guides/c71d705d-445d-4d4c-99d1-38ce48985cba_12.html)

### Stemming

There are many variations of words that do not bring any new information and create redundancy, ultimately bringing ambiguity when training machine learning models for predictions. Take "He likes to walk" and "He likes walking," for example. Both have the same meaning, so the <span class="jsx-3120878690">`stemming`</span> function will remove the suffix and convert "walking" to "walk." The example in this guide uses the <span class="jsx-3120878690">`PorterStemmer`</span> module to conduct the process. You can use the <span class="jsx-3120878690">`snowball`</span> module for different languages.

    1ps = PorterStemmer()
    2stemwords = [ps.stem(w) for w in tokenwords]
    3print ('Stemming-Form:', stemwords)

python

![stemming forms](../../pluralsight2.imgix.net/guides/9719d469-f1d3-44a7-aade-667bac19235a_7.html)

In this example, the words "polic" and "thiev" don't make sense. They have their <span class="jsx-3120878690">`e`</span> and <span class="jsx-3120878690">`es`</span> clipped due to stemming's suffix stripping rule. The Lemmatization technique can address this problem.

### Lemmatization

Unlike stemming, *lemmatization* performs normalization using vocabulary and morphological analysis of words. Lemmatization aims to remove inflectional endings only and to return the base or dictionary form of a word, which is known as the *lemma*. Lemmatization uses a dictionary, which makes it slower than stemming, however the results make much more sense than what you get from stemming. Lemmatization is built on WordNet's built-in morphy function, making it an intelligent operation for text analysis. A [WordNet](https://wordnet.princeton.edu/) module is a large and public lexical database for the English language. Its aim is to maintain the structured relationship between the words. The <span class="jsx-3120878690">`WordNetLemmitizer()`</span> is the earliest and most widely used function.

    1lemmatizer = WordNetLemmatizer()
    2lemmawords = [lemmatizer.lemmatize(w) for w in tokenwords]
    3print ('Lemmtization-form',lemmawords)

python

![lemmatization form](../../pluralsight2.imgix.net/guides/8bc686b5-0ebb-423d-9629-0d4129fab79f_8.html)

### Use Case

The NLTK corpus reader uses a lexical database to find a word's synonyms, antonyms, hypernyms, etc. In this use case, you will find the *synonyms* (words that have the same meaning) and *hypernyms* (words that give a broader meaning) for a word by using the <span class="jsx-3120878690">`synset()`</span>function.

    1from nltk.corpus import wordnet as wn
    2
    3for ssn in wn.synsets('aid'):
    4    print('\nName:',ssn.name(),'\n-Abstract term: ',ssn.hypernyms(),'\n-Specific term:',ssn.hyponyms())#Try:ssn.root_hypernyms()

python

![ssn](../../pluralsight2.imgix.net/guides/c1543285-b4b9-4819-b6e1-57ce718848c9_10.html)

There are three abstract terms for the word "aid". The <span class="jsx-3120878690">`definition()`</span> and <span class="jsx-3120878690">`examples()`</span> functions in WordNet will help clarify the context.

    1print('Meaning:' ,wn.synset('aid.n.01').definition()) #try any term-eg: care.n.01
    2print('Example: ',wn.synset('aid.n.01').examples())

python

![Meaning and example](../../pluralsight2.imgix.net/guides/7f070c9b-aa26-4393-b907-6ed35036c9e5_11.html)

### Part of Speech Tagging (POS)

In the English language, one word can have different grammatical contexts, and in these cases it's not a good practice to consider the two words redundant. POS aims to make them grammatically unique.

    1text_words = word_tokenize(text)
    2nltk.pos_tag(text_words)

python

![POS](../../pluralsight2.imgix.net/guides/c2cad28e-5f79-4222-a0af-dc224093911d_9.html)

Conclusion
----------

These are key techniques that most data scientists follow before going further for analysis. Many of them have claimed that text pre-processing has degraded the performance of their machine learning model. Hence, combining these tools and techniques is a complex task.

It is not necessary to conduct all of the above techniques. You must understand the type of data you are dealing with and accordingly apply the ones that give the best results. Apply moderate pre-processing if you have a lot of noisy data, or if you have good quality text but a scarcity of data. When the data is sparse, heavy text pre-processing is needed.

Because the input text is customizable, you may try creating your sentences or inserting raw text a file and pre-process it. NLTK is a powerful tool. Machines are learning human languages. We are stepping into a whole new world!

Feel free to reach to me [here](http://gauravsinghal.me/).

26

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)
