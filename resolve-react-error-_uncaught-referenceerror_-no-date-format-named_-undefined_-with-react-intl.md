<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/c7859b4f-a0e9-4f74-8559-62f43bdcabea.jpeg" alt="Author avatar" class="jsx-3841407315" />

Gaurav Singhal

Resolve React Error "Uncaught ReferenceError: No date format named: undefined" with React Intl
==============================================================================================

### Gaurav Singhal

-   Oct 27, 2020
-   5 Min read
-   941 Views

-   Oct 27, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">5 Min</span> read
-   941 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Front End Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Client-side Frameworks</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">React</span>

Introduction

1

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-configurethereactintlpackage" class="menu-link">Configure the React Intl Package</a>
-   <a href="#module-fixingerroruncaughtreferenceerrornodateformatnamedundefined" class="menu-link">Fixing Error Uncaught ReferenceError: No Date Format Named: Undefined</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

React apps come with features such as state, props, lifecycle hooks, hooks functions, and so on. For a worldwide audience, your app should be configured so well that people in every country can access all of your app features.

The term *“internationalization”* refers to providing the app with additional language support. Your internationalized app will not miss any customer from any corner of the world. To achieve this, libraries such as React Intl are used. This guide describes how to implement and use React Intl, which contains various functions to format data, such as date format, and it uses <span class="jsx-3120878690">`formatjs`</span> as a supporting library.

Configure the React Intl Package
--------------------------------

The library <span class="jsx-3120878690">`react-intl`</span> uses <span class="jsx-3120878690">`formatjs`</span>, which contains various functions that support formatting data for internationalization purposes.

Let's install the library using the NPM command below.

    1npm install react-intl

shell

After installing the package, you can initialize it and use various functions to format a message based on the required feature.

Here is an example using the <span class="jsx-3120878690">`react-intl`</span> function <span class="jsx-3120878690">`formatMessage`</span>.

    1function () {
    2    const message = defineMessages({
    3        messageText: {
    4            id: 'app.message',
    5            defaultMessage: 'Hello, {message} !!!',
    6            description: 'This is test description',
    7        },
    8    })
    9
    10    return intl.formatMessage(message.messageText, { message: 'FOO' })
    11}

js

The <span class="jsx-3120878690">`intl`</span> is an initialization object followed by the function name <span class="jsx-3120878690">`formatMessage()`</span>, which accepts the two different arguments.

-   Defined message object
-   Additional message value

The message will get internationalized after providing both arguments based on the desired configuration for the internationalization.

Fixing Error Uncaught ReferenceError: No Date Format Named: Undefined
---------------------------------------------------------------------

While using internationalization libraries such as <span class="jsx-3120878690">`react-intl`</span>, issues may arise, and one of the most common issues is message formatting.

Specifically, you might get the error <span class="jsx-3120878690">`no date format`</span> related to the supported format for the date values. If you do not format the date from the available date formats from <span class="jsx-3120878690">`formatjs`</span>, you may get various format errors.

There are two options available to format the date, which is explained below.

### Using FormattedDate Without Format Specification

The standard approach uses the function <span class="jsx-3120878690">`FormattedDate`</span> with the date value without using the date format specification.

    1import React from "react";
    2import {
    3    IntlProvider,
    4    FormattedDate,
    5} from "react-intl";
    6
    7export default class extends React.Component {
    8    render() {
    9        const message = {
    10            myMessage: "Ceci est une chaîne"
    11        };
    12        return (
    13            <div>
    14                <IntlProvider
    15                    messages={message}
    16                    locale="fr"
    17                    defaultLocale="en"
    18                >
    19                    <p>
    20                        <FormattedDate value={new Date(1457832991843)} />
    21                    </p>
    22                </IntlProvider>
    23            </div>
    24        );
    25    }
    26}

jsx

In this example, the function is imported from the package <span class="jsx-3120878690">`react-intl`</span>.

    1import {
    2    IntlProvider,
    3    FormattedDate,
    4} from "react-intl";

jsx

The <span class="jsx-3120878690">`initProvider`</span> initializes the <span class="jsx-3120878690">`react-intl`</span> instance and uses its feature, and one of the functions used is <span class="jsx-3120878690">`FormattedDate`</span>.

Internationalization is initialized with the provider <span class="jsx-3120878690">`<InitProvider>`</span> along with various props such as <span class="jsx-3120878690">`messages`</span>, <span class="jsx-3120878690">`locale`</span>, and <span class="jsx-3120878690">`defaultLocale`</span>, which specifies the local language. But to format the date, an additional component called <span class="jsx-3120878690">`<FormattedDate>`</span>is used, as demonstrated below.

    1<FormattedDate value={new Date(1457832991843)} />

jsx

The “value” props are used with the component to provide the date value, which gets converted to the default format <span class="jsx-3120878690">`dd/mm/yyyy`</span>.

### Using FormattedDate With Date Formats

The date can also be formatted using various configurations, such as the day, month, and year format.

Available formats for the day:

-   2-digit

Available formats for the month:

-   Long
-   Short

Available formats for the year:

-   Numeric

The date can be formatted using all of the above formats with the respective categories based on the functional requirement. Below is a simple example of formatting a date with date formats.

    1<FormattedDate
    2    value={new Date(1457832991843)}
    3    year="numeric"
    4    month="long"
    5    day="2-digit"
    6/>

jsx

The formats for date values can be <span class="jsx-3120878690">`numeric`</span>, <span class="jsx-3120878690">`long`</span>, and <span class="jsx-3120878690">`2-digit`</span>, so the resulting data can be returned as <span class="jsx-3120878690">`13 March 2016`</span>.

You can try both approaches to formatting dates, i.e., with or without the date format properties.

Conclusion
----------

Because of its ability to help apps reach a wider audience, the internationalization feature is one of the most critical features of any app. It can make sure that desired messages and values are transformed based on the local language where the app is being accessed.

We have created this guide to resolve the formatting issue commonly faced by developers implementing internationalization. I hope it helps you with your project needs.

If you have any questions, feel free to contact me at [CodeAlphabet](https://codealphabet.com/contact).

1

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)
