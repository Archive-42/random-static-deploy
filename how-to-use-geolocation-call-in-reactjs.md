<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/c7859b4f-a0e9-4f74-8559-62f43bdcabea.jpeg" alt="Author avatar" class="jsx-3841407315" />

Gaurav Singhal

How to Use Geolocation Call in ReactJS
======================================

### Gaurav Singhal

-   Nov 12, 2020
-   7 Min read
-   100,815 Views

-   Nov 12, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">7 Min</span> read
-   100,815 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1=""> Front End Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1=""> Client-side Framework</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1=""> React</span>

Introduction

241

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-accessgeolocation" class="menu-link">Access Geolocation</a>
-   <a href="#module-getcurrentposition" class="menu-link">Get Current Position</a>
-   <a href="#module-watchusermovements" class="menu-link">Watch User Movements</a>
-   <a href="#module-showmapaftergettinglocation" class="menu-link">Show Map after Getting Location</a>
-   <a href="#module-otherinterfaces" class="menu-link">Other Interfaces</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

Sometimes an app may require a user’s current location properties, such as latitude and longitude, in order to enable location-related functionalities.

Location properties allow you to access a current user’s *geolocation*, or location at a given moment, and provide specific services based on their particular area.

With geolocation, you can access user details including:

-   Current position
-   Altitude
-   Velocity speed
-   Direction of movement
-   Speed accuracy
-   Timestamp

In this guide, you'll learn to show and update a user's geolocation on a map.

Access Geolocation
------------------

You can access a user's geolocation using the JavaScript API <span class="jsx-3120878690">`navigator.geolocation`</span>, which allows you to ask for location permission. If the user gives permission, location properties can be accessed.

There are two methods available to get the location of the user.:

-   geolocation.getCurrentPosition()
-   geolocation.watchPosition()

The first step is finding out if a user's geolocation is available or not.

    1componentDidMount() {
    2    if ("geolocation" in navigator) {
    3      console.log("Available");
    4    } else {
    5      console.log("Not Available");
    6    }
    7  }

jsx

If the code above returns <span class="jsx-3120878690">`true`</span>, then you can access various geolocation properties. If not, then the user has disabled the location access.

Get Current Position
--------------------

Get the current position of the user using the <span class="jsx-3120878690">`navigator.getCurrentPosition()`</span> method.

    1import React, { Component } from "react";
    2import { render } from "react-dom";
    3
    4class App extends Component {
    5  constructor(props) {
    6    super(props);
    7    this.state = {
    8    };
    9  }
    10
    11  componentDidMount() {
    12    navigator.geolocation.getCurrentPosition(function(position) {
    13      console.log("Latitude is :", position.coords.latitude);
    14      console.log("Longitude is :", position.coords.longitude);
    15    });
    16  }
    17
    18  render() {
    19    return (
    20      <div>
    21        <h4>Using geolocation JavaScript API in React</h4>
    22      </div>
    23    );
    24  }
    25}
    26
    27render(<App />, document.getElementById("root"));

jsx

Open the console, and the output should look like this.

    1Latitude is : xx.xxxxxx
    2Longitude is : xx.xxxxxx

The xxx can be any number based on the location.

Try the following code to get the complete position of the user.

    1componentDidMount() {
    2    navigator.geolocation.getCurrentPosition(function(position) {
    3      console.log(position)
    4    });
    5  }

jsx

The output in the console will look like this.

    1GeolocationPosition {
    2    coords: GeolocationCoordinates, 
    3    timestamp: 1583849180132
    4    }
    5    coords: { 
    6        GeolocationCoordinateslatitude: 19.xxxxxxx
    7        longitude: 73.xxxxxx
    8        altitude: 
    9            nullaccuracy: 1158
    10            altitudeAccuracy: null
    11            heading: null
    12            speed: null
    13            __proto__: GeolocationCoordinates
    14        timestamp: 1583849180132
    15    }
    16__proto__: GeolocationPosition

<span class="jsx-3120878690">`getCurrentPosition`</span> returns the success object as a position property, but along with the success callback, you also have the error callback. It can be implemented with the following code.

    1componentDidMount() {
    2    navigator.geolocation.getCurrentPosition(
    3      function(position) {
    4        console.log(position);
    5      },
    6      function(error) {
    7        console.error("Error Code = " + error.code + " - " + error.message);
    8      }
    9    );
    10  }

jsx

Error callback is used to get the error related to position such as disallow the location and so on. When you open the console and disallow the location,you will get an error that looks like this.

<span class="jsx-3120878690">`Error Code = 1 - Geolocation has been                                       disabled in this document by Feature                                       Policy`</span>

Watch User Movements
--------------------

<span class="jsx-3120878690">`getCurrentPosition`</span>, allows you to access the current position, but what if the user changes their location? <span class="jsx-3120878690">`watchPosition`</span> attaches the handler function and executes itself as soon as the user changes their current location, returning the updated location properties for the user's new position.

The following code will get the basic location properties.

    1import React, { Component } from "react";
    2import { render } from "react-dom";
    3
    4class App extends Component {
    5  constructor(props) {
    6    super(props);
    7    this.state = {};
    8  }
    9
    10  componentDidMount() {
    11    if (navigator.geolocation) {
    12      navigator.geolocation.watchPosition(function(position) {
    13        console.log("Latitude is :", position.coords.latitude);
    14        console.log("Longitude is :", position.coords.longitude);
    15      });
    16    }
    17  }
    18
    19  render() {
    20    return (
    21      <div>
    22        <h4>Using geolocation JavaScript API in React</h4>
    23      </div>
    24    );
    25  }
    26}
    27
    28render(<App />, document.getElementById("root"));

jsx

Open the console, and you will see that the new position properties are updated as soon as user changes their location.

Show Map after Getting Location
-------------------------------

Maps are a primary way to show a user’s current position. You'll need some location parameters, such as latitude and longitude, to render the current location.

**Note**: Before using a map, you should have a Google Map API key. Otherwise, the map will not work and will show an error.

Install this map library, which will allow you to get started with a map quickly.

    1npm install google-maps-react

shell

Using this library, you can pass the location data, and based on that data, the specific location of the user will be highlighted on the map.

Open the new component and write the following code snippet.

    1import React, { Component } from "react";
    2import { Map, GoogleApiWrapper, Marker  } from 'google-maps-react';
    3
    4const mapStyles = {
    5  width: '100%',
    6  height: '100%'
    7};
    8
    9class Demo1 extends Component {
    10  constructor() {
    11    super();
    12    this.state = {
    13      name: "React"
    14    };
    15  }
    16
    17  render() {
    18    return (
    19      <div>
    20        <Map
    21          google={this.props.google}
    22          zoom={14}
    23          style={mapStyles}
    24          initialCenter={{
    25            lat: YOUR_LATITUDE,
    26            lng: YOUR_LONGITUDE
    27          }}
    28        >
    29         <Marker
    30          onClick={this.onMarkerClick}
    31          name={'This is test name'}
    32        />
    33        </Map>
    34      </div>
    35    );
    36  }
    37}
    38
    39export default GoogleApiWrapper({
    40  apiKey: 'API_KEY'
    41})(Demo1);

jsx

**Note**: You'll need to replace your google maps API key with <span class="jsx-3120878690">`API_KEY`</span>. Otherwise, the map won’t be able to render the location-related properties.

Based on the latitude and longitude, a map will be able to load the exact location. The location will be identified as a marker on the map.

Other Interfaces
----------------

JavaScript provides a number of other interfaces that work closely with location properties based on different functional requirements.

-   Geolocation
-   GeolocationCoordinates
-   GeolocationPosition
-   Navigator.geolocation
-   GeolocationPositionError

Conclusion
----------

In this guide, you learned how to use JavaScript’s Geolocation APIs to work with user locations and related properties. You can try out all the inbuilt APIs that allow you to read user locations and process them accordingly. If you have any queries, feel free to reach out at [Codealphabet](https://codealphabet.com/contact).

241

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)
