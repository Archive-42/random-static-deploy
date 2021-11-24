<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/c7859b4f-a0e9-4f74-8559-62f43bdcabea.jpeg" alt="Author avatar" class="jsx-3841407315" />

Gaurav Singhal

How to Implement Infinite Scrolling with React.js
=================================================

### Gaurav Singhal

-   Nov 12, 2020
-   11 Min read
-   128,702 Views

-   Nov 12, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">11 Min</span> read
-   128,702 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1=""> React</span>

Introduction

291

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-whatisinfinitescroll" class="menu-link">What is Infinite Scroll?</a>
-   <a href="#module-implementcustominfinitescroll" class="menu-link">Implement Custom Infinite Scroll</a>
-   <a href="#module-infinitescrollusingthirdpartylibraries" class="menu-link">Infinite Scroll Using Third-Party Libraries</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

Any application, whether it’s a web, desktop, or mobile app, has tons of records in terms of data. A user may want to access this data in one place for any number of reasons related to the product, items, flights, trains, homes, and so on.

For such functionality, it is difficult to load all records at once due to overall performance issues, so we need an alternative. One alternative is called an *infinite scroll*.

What is Infinite Scroll?
------------------------

Infinite scroll is a mechanism that shows data based on an endless scroll event and loads data only as needed to avoid critical performance issues.

Basically, the infinite scroll method is pretty handy compared to pagination, where a user must click on the page number every time they want to load the next page’s data.

The infinite scrolling mechanism is only advisable when we want to continuously load data that belongs to the same level of the hierarchy. Otherwise, we can opt for other alternatives.

The infinite scrolling feature may seem like an elegant replacement for pagination. However, it is not the answer for all websites. Infinite scrolling is probably not for you if site visitors want to achieve specific types of goal-oriented activities, such as when they need to backtrack or find specific information quickly without struggling too much.

In this guide, we will implement an infinite scroll using custom logic. Let’s jump into an example.

Implement Custom Infinite Scroll
--------------------------------

In React, we have two choices to develop an infinite scroll.

-   Using a third party library
-   Using a custom infinite scroll mechanism

Here in this guide, we will develop a simple custom infinite scrolling mechanism that helps us to load data based on a scroll event.

Before getting started, we need data to load continuously, so for that, we will use a dummy/mock API platform that provides us the fake data using their official API. The URL we are going to use is given below.

<span class="jsx-3120878690">`https://jsonplaceholder.typicode.com/photos`</span>

To call the API, we should have Axios installed in our app, which is used to make an HTTP request to fetch or save the data from our application. It is a third-party library, so we can install it using the below <span class="jsx-3120878690">`npm`</span> command.

    1npm install axios

shell

Let’s create a new child component called <span class="jsx-3120878690">`ScrollComponent.jsx`</span> and create a state object like this.

    1import React, { Component } from "react";
    2import axios from "axios";
    3
    4class ScrollComponent extends Component {
    5  constructor() {
    6    super();
    7    this.state = {
    8      photos: [],
    9      loading: false,
    10      page: 0,
    11      prevY: 0
    12    };
    13  }
    14
    15  render() {
    16    return (
    17      <div className="container">
    18      </div>
    19    );
    20  }
    21}
    22
    23export default ScrollComponent;

jsx

In our scroll component, we have created a few state values to store the photos from the API response and other state values to manage page properties and loading behavior.

Now, we have to create one function that contains the source code used to get the API data from the fake API using the Axios package. Let’s create a reusable function like this.

    1  getPhotos(page) {
    2    this.setState({ loading: true });
    3    axios
    4      .get(
    5        `https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=10`
    6      )
    7      .then(res => {
    8        this.setState({ photos: [...this.state.photos, ...res.data] });
    9        this.setState({ loading: false });
    10      });
    11  }

jsx

In this function, we have set the loading state value to <span class="jsx-3120878690">`true`</span>, which denotes the data is being loaded from the API. We have used Axios along with the API URL, which fetches the data from the server.

After getting the response based on the request, we need to store the data into a separate array called <span class="jsx-3120878690">`photos`</span> that we have created earlier in this component.

If you notice, we have combined the previous and current data, just because we will call this function continuously based on the scroll event, and it will append the response into the photos array.

After creating the function, we have to call it once the component has loaded, hence we can call it from the <span class="jsx-3120878690">`componentDidMount ()`</span> function like this.

    1  componentDidMount() {
    2    this.getPhotos(this.state.page);
    3  }

jsx

We have configured the basic API function from where we will call the API. We have also called the <span class="jsx-3120878690">`getPhotos()`</span> function from the <span class="jsx-3120878690">`componentDidMount()`</span> lifecycle hook, but it will be enough to develop the infinite scroll.

Now, we have to listen to each scroll event behavior, and based on the scroll event, the page number will be updated in order to fetch the new data from the API.

We will use the <span class="jsx-3120878690">`intersection observer`</span>, which does two things:

-   It describes the API used to get the position of the DOM element from the target element .
-   It gets the pre-loading and deferred status of the element from the DOM content .

Let’s update the <span class="jsx-3120878690">`componentDidMount()`</span> hooks like this.

    1componentDidMount() {
    2    this.getPhotos(this.state.page);
    3
    4    var options = {
    5      root: null,
    6      rootMargin: "0px",
    7      threshold: 1.0
    8    };
    9    
    10    this.observer = new IntersectionObserver(
    11      this.handleObserver.bind(this),
    12      options
    13    );
    14    this.observer.observe(this.loadingRef);
    15  }

jsx

In this hook function, we have created a few options:

-   **root** : This is the root to use for the intersection.
-   **rootMargin** : Just like a margin property, which is used to provide the margin value to the root either in pixel or in percent (%) .
-   **threshold** : The number which is used to trigger the callback once the intersection’s area changes to be greater than or equal to the value we have provided in this example .

Apart from these three options, we have an actual intersection observer function, which contains two different parameters:

-   The observer callback function name
-   The additional options, such as root and threshold

By using the intersection observer, we can listen for any changes from the target element, and if there are any changes, then the callback function will be triggered.

Now let’s implement the callback trigger function, which looks like this.

    1handleObserver(entities, observer) {
    2    const y = entities[0].boundingClientRect.y;
    3    if (this.state.prevY > y) {
    4      const lastPhoto = this.state.photos[this.state.photos.length - 1];
    5      const curPage = lastPhoto.albumId;
    6      this.getPhotos(curPage);
    7      this.setState({ page: curPage });
    8    }
    9    this.setState({ prevY: y });
    10  }

jsx

In this function, we will configure the page number based on the target element being scrolled. We will hold the last page being scrolled, and based on the current page, the fetch API comes into the picture and fetches the latest data from the server.

As soon as we scroll the data, the current page will be updated into the state along with the previous page number.

This is what we wanted to develop so far in this guide, but it’s not the end at all. We left out a critical step to show the photos and render them into the DOM.

Replace the <span class="jsx-3120878690">`render()`</span> function with the given source code.

    1render() {
    2
    3    // Additional css
    4    const loadingCSS = {
    5      height: "100px",
    6      margin: "30px"
    7    };
    8
    9    // To change the loading icon behavior
    10    const loadingTextCSS = { display: this.state.loading ? "block" : "none" };
    11
    12    return (
    13      <div className="container">
    14        <div style={{ minHeight: "800px" }}>
    15          {this.state.photos.map(user => (
    16            <img src={user.url} height="100px" width="200px" />
    17          ))}
    18        </div>
    19        <div
    20          ref={loadingRef => (this.loadingRef = loadingRef)}
    21          style={loadingCSS}
    22        >
    23          <span style={loadingTextCSS}>Loading...</span>
    24        </div>
    25      </div>
    26    );
    27  }

jsx

The render function contains a different configuration, which is explained below.

Create some additional styles for the icon that displays while loading the content like this.

    1const loadingCSS = { 
    2    height: "100px", 
    3    margin: "30px" 
    4};

jsx

Another CSS style used to change the class property for the loading icon is called <span class="jsx-3120878690">`loadingTextCSS`</span> and looks like this.

    1const loadingTextCSS = { display: this.state.loading ? "block" : "none" };

jsx

At last, into the return function, we have used our state array, called <span class="jsx-3120878690">`photos`</span>, which contains the list of photos coming from the API response.

    1<div style={{ minHeight: "800px" }}>
    2          {this.state.photos.map(user => (
    3            <img src={user.url} height="100px" width="200px" />
    4          ))}
    5</div>

jsx

Along with the photos list, we have configured the loading icon based on the loading reference so that as soon as we scroll down to the target element, it shows the loading icon. When the loading process is completed, the loading icon will disappear.

    1<div
    2    ref={loadingRef => (this.loadingRef = loadingRef)}
    3    style={loadingCSS}
    4>
    5    <span style={loadingTextCSS}>Loading...</span>
    6</div>

jsx

We are done with our HTML content. Now if we run this example, we will get the initial 10 records per page because we have configured the additional parameters with the API like this.

<span class="jsx-3120878690">`https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=10`</span>

So when the user scrolls down the page, the page number will be updated frequently; but the page limit stays as it is, so 10 records at a time will be added into the array and render into the DOM.

This is the complete process for using an intersection observer to get the position of the target element and return the movement into the DOM.

Infinite Scroll Using Third-Party Libraries
-------------------------------------------

In this guide, we have developed an infinite scroll using custom implementation, but we could also use third-party libraries. A few of them include:

-   react-infinite-scroller
-   react-infinite-scroll-component
-   react-infinite-scroll
-   react-loading-infinite-scroller
-   react-infinite-scroll-hook

Many more packages are available, so choose wisely based on your project requirements.

Conclusion
----------

Infinite scrolling is becoming a popular way to load data based on a scroll event that loads data continuously whenever the user reaches the bottom of the page.

In this guide, we have learned a custom approach for implementing infinite scroll in ReactJS, but we can also use several third-party libraries to achieve the same result. I hope this guide will be helpful to you someday. If you have any queries, feel free to reach out at [Codealphabet](https://codealphabet.com/contact).

291

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)
