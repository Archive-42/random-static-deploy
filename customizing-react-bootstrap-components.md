<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/7fc26c97-d391-471d-819e-0695a0c8c46d.jpg" alt="Author avatar" class="jsx-3841407315" />

Desmond Nyamador

Customizing React-Bootstrap Components
======================================

### Desmond Nyamador

-   Nov 4, 2020
-   4 Min read
-   2,052 Views

-   Nov 4, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">4 Min</span> read
-   2,052 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Front End Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Client-side Frameworks</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">React</span>

Introduction

3

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-setupreactbootstrap" class="menu-link">Set Up react-bootstrap</a>
-   <a href="#module-customizingacardcomponent" class="menu-link">Customizing a Card Component</a>
-   <a href="#module-custombuttoncomponent" class="menu-link">Custom Button Component</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

Building apps with Bootstrap helps you iterate quickly when building components and the user interface design of your app. This prevents you from reinventing the wheel every time you start a new project. All you need to do is customize the base components available to make them suit the needs of the app. This guide will demonstrate how to customize react-bootstrap components to suit your need.

Set Up react-bootstrap
----------------------

To get started, run the following command in your terminal to set up your React project.

    11. npx create-react-app <YOUR_APP_NAME>
    2
    32. cd <YOUR_APP_NAME>
    4
    53. yarn start or npm start

bash

<span class="jsx-3120878690">`<YOUR_APP_NAME>`</span> refers the name you'd like to give to your React project.

If you really want to get started quickly without the pain of setting up a create-react-app project then open up your browser and visit [https://react.new](https://react.new/) to get a fully configured React development environment via [https://codesandbox.io](https://codesandbox.io/).

### Using Bootstrap

Bootstrap can be used in a few different ways:

1.  Downloading the Bootstrap production files
2.  Adding CDN links to your HTML file.
3.  Downloading via a package manager such as npm or yarn.

In this guide you'll install Bootstrap with a package manager and install the React Bootstrap library, which comes with React components that you can use easily.

Run the following command to install react-bootstrap.

    1npm install react-bootstrap bootstrap
    2
    3                          OR
    4
    5yarn add react-bootstrap bootstrap

bash

React Bootstrap doesn't use a precise version of Bootstrap, but you'll need to add some default styling to use the components. Add the following line of code to your <span class="jsx-3120878690">`src/index.js`</span> or <span class="jsx-3120878690">`src/App.js`</span> file.

    1import 'bootstrap/dist/css/bootstrap.min.css'

jsx

Customizing a Card Component
----------------------------

Assuming you're building an e-commerce app, displaying a list of products would require a card component that contains details of the product. Luckily there's a card component that can be built upon to provide this functionality quickly.

First create the product card component.

    1import React from 'react';
    2import Card from 'react-bootstrap/Card';
    3import Button from 'react-bootstrap/Button';
    4
    5function ProductCard({name, imgSrc, price,currency, ...props}){
    6
    7    return(
    8 <Card style={{ width: '18rem' }}>
    9      <Card.Img variant="top" src={imgSrc} />
    10  <Card.Body>
    11    <Card.Title>{name}</Card.Title>
    12    <Card.Text>
    13      {currency} {price}
    14    </Card.Text>
    15    <Button variant="success">Add to Cart</Button>
    16  </Card.Body>
    17</Card>
    18    )
    19}
    20
    21export default ProductCard;

jsx

In the <span class="jsx-3120878690">`<ProductCard/>`</span> component above, you built upon the default card component in react-bootstrap and created a custom component.

Assuming you created the component in the <span class="jsx-3120878690">`components/ProductCard.js`</span> directory, you can use your custom component as shown below.

    1import React from 'react';
    2import ProductCard from './components/ProductCard';
    3
    4function App(){
    5 return(
    6     <ProductCard name="Red Hoodie" price="90.00" currency="$" imgSrc="https://img.foo.com/logo.png"/>
    7 )
    8}
    9export default App;

jsx

Custom Button Component
-----------------------

Now using the same procedure you used to create the card component, create a custom button that accepts an <span class="jsx-3120878690">`href`</span> attribute as shown in the snippet below.

    1import React from 'react';
    2import Card from 'react-bootstrap/Card';
    3import Button from 'react-bootstrap/Button';
    4
    5function ButtonLink({text, link, ...props}){
    6
    7    return(
    8             <Button href={link}>Link</Button> <Button type="submit">{text}</Button>
    9 )
    10}
    11
    12export default ButtonLink;

jsx

Conclusion
----------

And voila! In this guide, you created a custom button and card component to help you build out your app faster. If you want to read more on react-bootstrap, visit the [official documentation](https://react-bootstrap.github.io/) to learn more. Try as much as possible to try your hands on more examples to get a solid understanding. If you have any questions, feel free to ping me on Twitter [@DesmondNyamador](https://twitter.com/DesmondNyamador)

3

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)
