<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/6455207a-ea14-4964-af40-b569f06f122e.jpg" alt="Author avatar" class="jsx-3841407315" />

Douglas Starnes

Teach Azure to Speak with Azure Cognitive Services Text to Speech Services
==========================================================================

### Douglas Starnes

-   Nov 24, 2020
-   11 Min read
-   1,832 Views

-   Nov 24, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">11 Min</span> read
-   1,832 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Cloud</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Cloud Application Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Azure Cognitive Services</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Machine Learning and AI</span>

Introduction

9

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-setup" class="menu-link">Setup</a>
-   <a href="#module-gettingthesdkready" class="menu-link">Getting the SDK Ready</a>
-   <a href="#module-customizingthevoice" class="menu-link">Customizing the Voice</a>
-   <a href="#module-usingssml" class="menu-link">Using SSML</a>
-   <a href="#module-neuralvoices" class="menu-link">Neural Voices</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

Modern user interfaces do not stop at the keyboard and mouse. Today we can interact with apps using vision, gestures, and even speech. It doesn't make much sense to talk to a computer, unless it can talk back. This is referred to as *text to speech*. If this sounds like a hard problem to solve, it is. However, Microsoft Azure offers the Speech service to help teach computers to speak. This guide will discuss getting started with the Microsoft Azure Speech service using the C\# programming language. Keep in mind that Azure Cognitive Services support SDKs for many languages including C\#, Java, Python, and JavaScript, and there is even a REST API that you can call from any language.

Setup
-----

As with all Azure Cognitive Services, before you begin, provision an instance of the Speech service in the Azure Portal. The Speech service does much more than text to speech. It can also invert the concept and transcribe audio files. The same Speech service is used for both.

![speech service in azure](../../pluralsight2.imgix.net/guides/ceda1ef8-01bc-43b2-ada6-44a7462e1461_01.html)

Create a new Speech service instance, choose an Azure subscription and data center location, and choose or create a new resource group. For the pricing tier, the free F0 option will suffice for experimentation.

![creating a speech instance](../../pluralsight2.imgix.net/guides/953e0e68-c822-4ef6-aa79-73d35802ccbb_02.html)

The free tier will allow you to process five million characters per month. There is also the option to generate speech using neural voices that sound more like human voices but are more computationally intensive. The free quota for neural voices is therefore lower, just 500 thousand characters per month. We'll see the difference between standard and neural voices later in the guide. For more details on the quotas and pricing of the free and paid tiers, see the [Azure Speech service documentation](https://azure.microsoft.com/en-us/pricing/details/cognitive-services/speech-services/).

After the instance is provisioned, you'll see the API keys and endpoint you'll use to access the service in the **Keys and Endpoint** menu on the left.

![api keys and endpoint](../../pluralsight2.imgix.net/guides/38804706-170d-4a13-b82f-238f9714f7de_03.html)

Getting the SDK Ready
---------------------

The SDK is distributed as a NuGet package. Add <span class="jsx-3120878690">`Microsoft.CognitiveServices.Speech`</span> to a C\# project to install the SDK using the <span class="jsx-3120878690">`dotnet`</span> tool at the command line:

    1dotnet add package Microsoft.CognitiveServices.Speech --version 1.14.0

The most current version, when this guide was created, was 1.14.0.

To authenticate with the SDK, you'll need to create an instance of <span class="jsx-3120878690">`SpeechConfig`</span> found in the <span class="jsx-3120878690">`Microsoft.CognitiveServices.Speech`</span> namespace.

    1using Microsoft.CognitiveServices.Speech;

csharp

Use the endpoint and one of the API keys from the Azure portal to create a new instance with the static <span class="jsx-3120878690">`FromEndpoint`</span> method:

    1var speechConfig = SpeechConfig.FromEndpoint("{endpoint}", "{apikey}");

csharp

You'll also need an <span class="jsx-3120878690">`AudioConfig`</span> instance from the <span class="jsx-3120878690">`Microsoft.CognitiveServices.Speech.Audio`</span> namespace.

    1using Microsoft.CognitiveServices.Speech.Audio;
    2
    3// ...
    4
    5var audioConfig = AudioConfig.FromWavFileOutput("demo.wav");

csharp

There are several ways to create an <span class="jsx-3120878690">`AudioConfig`</span> including a stream or directly to speaker. For this demo, the easiest will be to create a .wav file. The <span class="jsx-3120878690">`FromWavFileOutput`</span> method accepts the path to the generated .wav file.

To generate the speech file, create a <span class="jsx-3120878690">`SpeechSynthesizer`</span> from the <span class="jsx-3120878690">`SpeechConfig`</span> and <span class="jsx-3120878690">`AudioConfig`</span>:

    1var speechSynthesizer = new SpeechSynthesizer(speechConfig, audioConfig);

csharp

Finally, call the <span class="jsx-3120878690">`SpeakTextAsync`</span> method on the <span class="jsx-3120878690">`SpeechSynthesizer`</span> and provide a string that will be used to generate a .wav file. This method needs to be awaited.

    1await speechSynthesizer.SpeakTextAsync("Peter Piper picked a peck of pickled peppers.");

csharp

You can listen to the generated .wav file on [GitHub](https://github.com/douglasstarnes/ps-tts-wavs/blob/main/demo-JessaRUS.wav).

Customizing the Voice
---------------------

By default, the <span class="jsx-3120878690">`SpeechConfig`</span> uses a voice with a name <span class="jsx-3120878690">`en-US-JessaRUS`</span>. This is a female voice. To get a male voice, set the <span class="jsx-3120878690">`SpeechSynthesisVoiceName`</span> property of the <span class="jsx-3120878690">`SpeechConfig`</span> to <span class="jsx-3120878690">`en-US-GuyRUS`</span>.

    1speechConfig.SpeechSynthesisVoiceName = "en-US-GuyRUS";

csharp

You can listen to this voice on [GitHub](https://github.com/douglasstarnes/ps-tts-wavs/blob/main/demo-GuyRUS.wav).

There are more than 75 voice in over 45 languages available. A complete list can be found in the [Azure documentation](https://docs.microsoft.com/en-us/azure/cognitive-services/speech-service/language-support#standard-voices).

Using SSML
----------

You can generate even more realistic voices using SSML, or Speech Synthesis Markup Language. This is an XML grammar that is not specific to the Speech service. It's a standard that is used across Azure, AWS, Google Cloud and more. Here is a sample SSML document:

    1<speak version="1.0" xmlns="https://www.w3.org/2001/10/synthesis" xml:lang="en-US">
    2  <voice name="en-US-GuyRUS">
    3    I live in the zip code 10203.
    4  </voice>
    5</speak>

xml

The <span class="jsx-3120878690">`<speak>`</span> and <span class="jsx-3120878690">`<voice>`</span> elements are boilerplate for all SSML. The <span class="jsx-3120878690">`name`</span> attribute is one of the supported voices from the previous section. The SSML is then parsed by the <span class="jsx-3120878690">`SpeakSsmlAsync`</span> method.

    1SpeechSynthesizer ssmlSynthesizer = new SpeechSynthesizer(speechConfig, null);
    2var ssmlResult = await ssmlSynthesizer.SpeakSsmlAsync(ssml);
    3var audioDataStream = AudioDataStream.FromResult(ssmlResult);
    4await audioDataStream.SaveToWaveFileAsync("ssmldemo.wav");

csharp

Notice that the <span class="jsx-3120878690">`ssmlSynthesizer`</span> does not need an <span class="jsx-3120878690">`AudioConfig`</span>. Also, the results are retrieved from <span class="jsx-3120878690">`AudioDataStream`</span>. You can hear the file on [GitHub](https://github.com/douglasstarnes/ps-tts-wavs/blob/main/guy-zipcode.wav).

It also pronounces the zip correctly as "one zero two zero three" and not "ten thousand two hundred and three." What happens if we use the same number, in a different context?

    1<speak version="1.0" xmlns="https://www.w3.org/2001/10/synthesis" xml:lang="en-US">
    2  <voice name="en-US-GuyRUS">
    3    I won 10203 dollars in the sweepstakes!
    4  </voice>
    5</speak>

xml

Listen to the file on [GitHub](https://github.com/douglasstarnes/ps-tts-wavs/blob/main/guy-wrong.wav). This time, we expect the same value to be pronounced as "ten thousand two hundred and three." But by default, it is not. To get the correct speech, use the <span class="jsx-3120878690">`<say-as>`</span> element and set the <span class="jsx-3120878690">`interpret-as`</span> attribute to <span class="jsx-3120878690">`cardinal`</span>.

    1<speak version="1.0" xmlns="https://www.w3.org/2001/10/synthesis" xml:lang="en-US">
    2  <voice name="en-US-GuyRUS">
    3    I won <say-as interpret-as="cardinal">10203</say-as> dollars in the sweepstakes!
    4  </voice>
    5</speak>

xml

Now the number is pronounced the way we expect. Here is the correct .wav file on [GitHub](https://github.com/douglasstarnes/ps-tts-wavs/blob/main/guy-right.wav).

There are times when you may want to introduce a pause. You might want a lengthy break after the first sentence in this sample before delivering the 'punchline'.

    1<speak version="1.0" xmlns="https://www.w3.org/2001/10/synthesis" xml:lang="en-US">
    2  <voice name="en-US-GuyRUS">
    3    I got the new XBox Series X for 1/2 off! <break time="2500ms" /> Just kidding.
    4  </voice>
    5</speak>

xml

Here is the generated .wav file on [GitHub](https://github.com/douglasstarnes/ps-tts-wavs/blob/main/guy-break.wav). The <span class="jsx-3120878690">`time`</span> attribute of the <span class="jsx-3120878690">`<break>`</span> element includes silence for 2,500 milliseconds. You can also use seconds for example <span class="jsx-3120878690">`4s`</span>. Also, note in the .wav file that "1/2" is correctly pronounced as "one half."

Neural Voices
-------------

It sounds okay, but it doesn't sound realistic. This is where neural voices come in. Neural voices are generated using neural networks and it's very tough to tell they are not actual humans. Since they are generated using neural networks, they are much more computationally intensive and thus cost a little more. But the results are worth it. Currently there are around 65 neural voice, and previews of more are coming soon.

To use a neural voice, simply set the <span class="jsx-3120878690">`name`</span> attribute of the <span class="jsx-3120878690">`<voice>`</span> element in SSML to a neural voice.

    1<speak version="1.0" xmlns="https://www.w3.org/2001/10/synthesis" xml:lang="en-US">
    2  <voice name="en-US-AriaNeural">
    3    Peter Piper picked a peck of pickled peppers.
    4  </voice>
    5</speak>

xml

> Note: If you generate a .wav file that is only a few bytes, check the location where you created the instance of the Speech service. The neural voices are only available in East US, South East Asia, and West Europe.

Here is the .wav file generated on [GitHub](https://github.com/douglasstarnes/ps-tts-wavs/blob/main/arianeural.wav).

There are more options for customizing the speaking style of a neural voice. For example with the <span class="jsx-3120878690">`<mstts:express-as>`</span> element you can set the <span class="jsx-3120878690">`style`</span> attribute to a relaxed tone for chatting, an excited tone, and even styles for newscasts and customer service. You'll need to include the <span class="jsx-3120878690">`mstss`</span> namespace in the markup.

    1<speak version="1.0" 
    2       xmlns="https://www.w3.org/2001/10/synthesis"
    3       xmlns:mstts="https://www.w3.org/2001/mstts"
    4       xml:lang="en-US">
    5  <voice name="en-US-AriaNeural">
    6    <mstts:express-as style="chat">
    7       Peter Piper picked a peck of pickled peppers.
    8    </mstts:express-as>
    9  </voice>
    10</speak>

xml

This is the <span class="jsx-3120878690">`chat`</span> [style](https://github.com/douglasstarnes/ps-tts-wavs/blob/main/arianeural-chat.wav) and the <span class="jsx-3120878690">`customerservice`</span> [style](https://github.com/douglasstarnes/ps-tts-wavs/blob/main/arianeural-customerservice.wav). Styles are dependent upon the neural voice that you are using. Check the [Azure documentation](https://docs.microsoft.com/en-us/azure/cognitive-services/speech-service/speech-synthesis-markup?tabs=csharp#adjust-speaking-styles) for the complete list.

Conclusion
----------

There are other options for working with the Speech service. It provides a special API for long texts such as books. You can submit custom lexicons and add prerecorded audio to the generated ones. Azure Cognitive choices should always be your first choice when generating speech for apps. It works with multiple languages. The cost is more affordable than generating voices yourself. Don't forget the quality of the neural voices, especially the options for tuning them. And the service is accessible on any platform and any device, making it possible for any app to speak its mind.

Thanks for reading!

9

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)
