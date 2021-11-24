<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/9be54a1d-e543-404c-8736-beb1adf2cc26.jpg" alt="Author avatar" class="jsx-3841407315" />

Kimaru Thagana

TypeError Handling in React.js for Map Function
===============================================

### Kimaru Thagana

-   Oct 8, 2020
-   7 Min read
-   48,156 Views

-   Oct 8, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">7 Min</span> read
-   48,156 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Front End Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Client-side Frameworks</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">React</span>

Introduction

61

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-whythiserroroccurs" class="menu-link">Why This Error Occurs</a>
-   <a href="#module-examplescenario" class="menu-link">Example Scenario</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

During design and development of frontend interfaces in React.js, working with data from different sources is quite normal and frequent. This data needs to be parsed accurately within your React app. If the data isn't parsed correctly, you will run into errors, one of these being <span class="jsx-3120878690">`Uncaught TypeError: this.props.data.map                                       is not a function`</span>.

In this tutorial, you will learn why this error occurs and how to fix it. This guide assumes that you have basic knowledge of React.js.

Why This Error Occurs
---------------------

So you have just fetched data from an API in your parent component, and you have passed the data to your child component via props, but trying to parse this data in your child component with the <span class="jsx-3120878690">`.map()`</span> function gives this error: <span class="jsx-3120878690">`Uncaught TypeError: this.props.data.map                                       is not a function`</span>. You have verified that data is being fetched and passed into your child component correctly.

What's going on?

This error occurs because your data is not an array. The <span class="jsx-3120878690">`.map()`</span> function only works with arrays. First, you'll need to confirm your data type. Second, you'll need to transform your data into an array.

Example Scenario
----------------

Assuming you already have a React app set up, the code below simulates a data object fetched from an API. This data will be passed down to your child component. For a refresher on this topic, read [this](https://app.pluralsight.com/guides/an-introduction-to-child-root-data-passing-in-reactjs) guide.

You will be using [The Movie Database API](https://developers.themoviedb.org/4/getting-started/authorization). For a detailed guide to parsing JSON data, refer to this [tutorial](../../app.pluralsight.com/guides/parse-json-data-in-react.html).

Here is sample data from the API.

    1{
    2 "page": 1,
    3 "results": [{
    4         "poster_path": "/e1mjopzAS2KNsvpbpahQ1a6SkSn.jpg",
    5         "adult": false,
    6         "overview": "From DC Comics comes the Suicide Squad, an antihero team of incarcerated supervillains who act as deniable assets for the United States government, undertaking high-risk black ops missions in exchange for commuted prison sentences.",
    7         "release_date": "2016-08-03",
    8         "genre_ids": [
    9             14,
    10                28,
    11                80
    12            ],
    13            "id": 297761,
    14            "original_title": "Suicide Squad",
    15            "original_language": "en",
    16            "title": "Suicide Squad",
    17            "backdrop_path": "/ndlQ2Cuc3cjTL7lTynw6I4boP4S.jpg",
    18            "popularity": 48.261451,
    19            "vote_count": 1466,
    20            "video": false,
    21            "vote_average": 5.91
    22        },
    23        {
    24            "poster_path": "/lFSSLTlFozwpaGlO31OoUeirBgQ.jpg",
    25            "adult": false,
    26            "overview": "The most dangerous former operative of the CIA is drawn out of hiding to uncover hidden truths about his past.",
    27            "release_date": "2016-07-27",
    28            "genre_ids": [
    29                28,
    30                53
    31            ],
    32            "id": 324668,
    33            "original_title": "Jason Bourne",
    34            "original_language": "en",
    35            "title": "Jason Bourne",
    36            "backdrop_path": "/AoT2YrJUJlg5vKE3iMOLvHlTd3m.jpg",
    37            "popularity": 30.690177,
    38            "vote_count": 649,
    39            "video": false,
    40            "vote_average": 5.25
    41        },
    42        {
    43            "poster_path": "/hU0E130tsGdsYa4K9lc3Xrn5Wyt.jpg",
    44            "adult": false,
    45            "overview": "One year after outwitting the FBI and winning the public’s adulation with their mind-bending spectacles, the Four Horsemen resurface only to find themselves face to face with a new enemy who enlists them to pull off their most dangerous heist yet.",
    46            "release_date": "2016-06-02",
    47            "genre_ids": [
    48                28,
    49                12,
    50                35,
    51                80,
    52                9648,
    53                53
    54            ],
    55            "id": 291805,
    56            "original_title": "Now You See Me 2",
    57            "original_language": "en",
    58            "title": "Now You See Me 2",
    59            "backdrop_path": "/zrAO2OOa6s6dQMQ7zsUbDyIBrAP.jpg",
    60            "popularity": 29.737342,
    61            "vote_count": 684,
    62            "video": false,
    63            "vote_average": 6.64
    64        }
    65    ]
    66
    67}

json

Here is a simple React app to simulate fetching data from your API and setting state.

    1import React, {Component} from 'react';
    2import axios from 'axios'
    3import 'bootstrap/dist/css/bootstrap.min.css';
    4import {Button, Card, Col, Row} from "react-bootstrap";
    5
    6
    7class App extends Component{
    8  constructor(props) {
    9    super(props);
    10    this.state =({
    11      movies: ""
    12    })
    13  }
    14  componentDidMount() {
    15    let url = "https://api.themoviedb.org/3/discover/movie?api_key=abc12345";
    16    axios.get(url+"&sort_by=popularity.desc&page=1")
    17        .then(response => {
    18          console.log(response.data.results)
    19            this.setState({
    20                movies: response.data.results
    21            })
    22        })
    23        .catch(error => {
    24          console.log(error)
    25        })
    26  }
    27}

js

In the sample code above, you have fetched your data from an API and set the <span class="jsx-3120878690">`movie`</span> state to use this data. Notice how you have set the movie state as you will come back to this later.

Finish up by creating a child component and passing your data from <span class="jsx-3120878690">`App.js`</span>, which is the parent component to your child component.

Add this code to your parent component.

    1render()
    2 {
    3       return(
    4           <ChildComponent data={this.state.movies}/>
    5       )
    6    }

js

Here's how your child component should look.

    1import React, {Component} from "react";
    2import {Row,Col, Card} from "react-bootstrap";
    3
    4class ChildComponent extends Component{
    5    constructor(props) {
    6        super(props);
    7        
    8    }
    9
    10    render() {
    11      
    12        return (
    13            <Row>
    14                {this.props.data.map((movie, index) => (
    15                        <Col key={index} sm={4} md={4} lg={3}>
    16                            <Card style={{ width: '18rem' }}>
    17                                <Card.Img variant="top" src={"http://image.tmdb.org/t/p/w300//"+movie.poster_path} />
    18                                <Card.Body>
    19                                    <Card.Title>{movie.title}</Card.Title>
    20                                    <Card.Text>
    21                                        {movie.overview}
    22                                    </Card.Text>
    23                                </Card.Body>
    24                            </Card>
    25                        </Col>
    26                    )
    27                )}
    28            </Row>
    29        )
    30    }
    31}
    32export default ChildComponent

js

A quick recap: You have simulated a simple app to fetch data from TMDB API and set your state. You have also passed your fetched data to your child component. To parse the data, you have used a React bootstrap card component. If you try running your app, you should receive the error <span class="jsx-3120878690">`TypeError: this.props.data.map is not a                                       function`</span>.

Refer back to where you set your state and the sample API response. You'll notice that if you set the state as it is with your JSON object, this error occurs. Your <span class="jsx-3120878690">`.map()`</span> function will not work with objects. You will need to enclose your object in an array.

Make a simple change to your state within the parent component: Change <span class="jsx-3120878690">`movies: ""`</span> to <span class="jsx-3120878690">`movies: []`</span>.

Now run your app again. The error disappears, and your data is parsed through correctly.

Conclusion
----------

Being able to understand and debug errors in React is a skill that can be developed by constant practice. React and frontend developer jobs heavily require this skill. To further build on this guide, you can learn more about React contexts on the official [React.js site](https://reactjs.org/docs/context.html.)

61

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)
