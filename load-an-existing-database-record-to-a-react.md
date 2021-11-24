<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/44cbcce0-5f4f-499e-8ec4-29fc953fc992.jpg" alt="Author avatar" class="jsx-3841407315" />

Raphael Alampay

Load an Existing Database Record to a React.js Form
===================================================

### Raphael Alampay

-   Oct 10, 2020
-   8 Min read
-   15,549 Views

-   Oct 10, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">8 Min</span> read
-   15,549 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Front End Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Client-side Frameworks</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">React</span>

Introduction

24

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-creatingtheformcomponent" class="menu-link">Creating the Form Component</a>
-   <a href="#module-interactingwiththeapi" class="menu-link">Interacting with the API</a>
-   <a href="#module-railsservercode" class="menu-link">Rails Server Code</a>
-   <a href="#module-overallcode" class="menu-link">Overall Code</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

The common operations in any information system are the *create*, *read*, *update*, and *delete* (CRUD) operations against a record in the database. In this guide, we'll take a look at how to perform the *create* and *update* parts in the context of a React.js app. The component should be able to provide a form that will deal with saving information as a new record or updating an existing record. In traditional approaches, to distinguish a <span class="jsx-3120878690">`create`</span> from an <span class="jsx-3120878690">`update`</span> coming from a form, the <span class="jsx-3120878690">`id`</span> value has to be present in order to indicate that the form details will perform an update rather than a create. This has been a security risk, however, since the <span class="jsx-3120878690">`id`</span> is sometimes exposed either as a hidden value within HTML or as part of the URL to connect to. We'll see in this guide that we can use React.js' state management approach to maintain the <span class="jsx-3120878690">`id`</span> value only within the React.js logic and not in the interface itself.

Before we begin, let's make three assumptions:

1.  We'll be persisting an object that models a person with an <span class="jsx-3120878690">`id`</span>, <span class="jsx-3120878690">`first_name`</span> and <span class="jsx-3120878690">`last_name`</span>.
2.  React.js interacts with a backend API running in <span class="jsx-3120878690">`http://localhost:3000/api/v1/people/save`</span>.
3.  To fetch data for an existing person, we can access an API via a GET request in the endpoint <span class="jsx-3120878690">`http://localhost:3000/api/v1/people/fetch`</span>.

This guide will provide a simple set of instructions on how to implement the backend using Ruby on Rails in the section **Rails Server Code** at the end. Regardless, you can still use your own favorite framework to implement the backend that meets the assumptions above.

Creating the Form Component
---------------------------

Create an initial component that maintains the <span class="jsx-3120878690">`id`</span>, <span class="jsx-3120878690">`first_name`</span>, and <span class="jsx-3120878690">`last_name`</span> states reflecting the data model of a person.

    1import React from 'react';
    2import $ from 'jquery';
    3
    4export default class PersonForm extends React.Component {
    5  constructor(props) {
    6    super(props);
    7
    8    this.state = {
    9      id: props.id,
    10      firstName: "",
    11      lastName: ""
    12    }
    13  }
    14
    15  updateFirstName(event) {
    16    this.setState({
    17      firstName: event.target.value 
    18    });
    19  }
    20
    21  updateLastName(event) {
    22    this.setState({
    23      lastName: event.target.value 
    24    });
    25  }
    26
    27  render() {
    28    return (
    29      <div>
    30        First Name:
    31        <input type="text" value={this.state.firstName} onChange={this.updateFirstName.bind(this)} />
    32        Last Name:
    33        <input type="text" value={this.state.lastName} onChange={this.updateLastName.bind(this)} />
    34        <hr/>
    35
    36        <button>
    37          Save
    38        </button>
    39      </div>
    40    );
    41  }
    42}

javascript

This is a standard React.js component that has minimal logic in it, namely, the utilization of <span class="jsx-3120878690">`updateFirstName`</span> and <span class="jsx-3120878690">`updateLastName`</span> methods to update the state of <span class="jsx-3120878690">`firstName`</span> and <span class="jsx-3120878690">`lastName`</span> whenever the user changes something. Notice also that in the constructor, you get to pass an <span class="jsx-3120878690">`id`</span> as part of <span class="jsx-3120878690">`props`</span>. This suggests that it is possible to mount this component and pass an <span class="jsx-3120878690">`id`</span> from the parent calling it, which will provide information to perform an update. Optionally, you can also not pass an <span class="jsx-3120878690">`id`</span> suggesting that you're using the component to create a new record.

Interacting with the API
------------------------

Create a method that will perform a POST to the API endpoint <span class="jsx-3120878690">`/api/v1/people/save`</span>. The method looks like the following:

    1save() {
    2  var context = this;
    3
    4  $.ajax({
    5    url: "http://localhost:3000/api/v1/people/save",
    6    method: "POST",
    7    data: {
    8      id: context.state.id,
    9      first_name: context.state.firstName,
    10      last_name: context.state.lastName
    11    },
    12    success: function(response) {
    13      alert("Successfully saved record!");
    14    },
    15    error: function(response) {
    16      alert("Error in saving record!");
    17    }
    18  });
    19}

javascript

Notice that you first have to create a proxy for <span class="jsx-3120878690">`this`</span> so you can still refer to the instance of this component within the <span class="jsx-3120878690">`ajax`</span> call, such as accessing the current state values <span class="jsx-3120878690">`context.state.id`</span>, <span class="jsx-3120878690">`context.state.firstName`</span>, and <span class="jsx-3120878690">`context.state.lastName`</span>. This will perform a POST method against the API. If no <span class="jsx-3120878690">`id`</span> was supplied then it creates a record. But if an <span class="jsx-3120878690">`id`</span> was initially supplied to the component via <span class="jsx-3120878690">`props`</span>, then the backend should perform an update instead.

Finally, connect the <span class="jsx-3120878690">`save`</span> method to the <span class="jsx-3120878690">`onClick`</span> attribute of the component's button:

    1<button onClick={this.save.bind(this)}>
    2  Save
    3</button>

jsx

Rails Server Code
-----------------

Make sure you have an application server running with the specifications mentioned earlier. This section will allow you to implement a backend server written in Ruby on Rails using the sqlite database so you won't have any dependencies besides Rails.

1.  Create a new project.

    1$ rails new sampleapi
    2$ cd sampleapi

bash

1.  Create a model for person and load it to the database.

    1$ rails g model Person first_name:string last_name:string
    2$ rake db:migrate

bash

1.  In the file <span class="jsx-3120878690">`config/routes.rb`</span>, create the API route definition.

    1namepsace :api do
    2  namespace :v1 do
    3    get "/people/fetch", to: "people#fetch"
    4    post "/people/save", to: "people#save"
    5  end
    6end

ruby

1.  Create a controller for the API in <span class="jsx-3120878690">`app/controllers/api/v1/people_controller.rb`</span>.

    1module Api
    2  module V1
    3    class PeopleController < ApplicationController
    4      protect_from_forgery with: :null_session
    5
    6      def fetch
    7        person = Person.find(params[:id])
    8
    9        render json: person
    10      end
    11
    12      def save
    13        person = Person.find_by_id(params[:id])
    14
    15        if person.present?
    16          person.first_name = params[:first_name]
    17          person.last_name  = params[:last_name]
    18        else
    19          person = Person.new(first_name: params[:first_name], last_name: params[:last_name])
    20        end
    21
    22        person.save!
    23
    24        render json: { message: "success", id: person.id }
    25      end
    26    end
    27  end
    28end

ruby

1.  Run the server and bind it to localhost.

    1$ rails server -b 127.0.0.1

bash

Overall Code
------------

The final code should look like the following:

    1import React from 'react';
    2import $ from 'jquery';
    3
    4export default class PersonForm extends React.Component {
    5  constructor(props) {
    6    super(props);
    7
    8    this.state = {
    9      id: props.id,
    10      firstName: "",
    11      lastName: ""
    12    }
    13  }
    14
    15  updateFirstName(event) {
    16    this.setState({
    17      firstName: event.target.value 
    18    });
    19  }
    20
    21  updateLastName(event) {
    22    this.setState({
    23      lastName: event.target.value 
    24    });
    25  }
    26
    27  save() {
    28    var context = this;
    29
    30    $.ajax({
    31      url: "http://localhost:3000/api/v1/people/save",
    32      method: "POST",
    33      data: {
    34        id: context.state.id,
    35        first_name: context.state.firstName,
    36        last_name: context.state.lastName
    37      },
    38      success: function(response) {
    39        alert("Successfully saved record!");
    40      },
    41      error: function(response) {
    42        alert("Error in saving record!");
    43      }
    44    });
    45  }
    46
    47  render() {
    48    return (
    49      <div>
    50        First Name:
    51        <input type="text" value={this.state.firstName} onChange={this.updateFirstName.bind(this)} />
    52        Last Name:
    53        <input type="text" value={this.state.lastName} onChange={this.updateLastName.bind(this)} />
    54        <hr/>
    55
    56        <button onClick={this.save.bind(this)}>
    57          Save
    58        </button>
    59      </div>
    60    );
    61  }
    62}

javascript

Conclusion
----------

With just a few lines of code, you now have a recyclable component that deals with both the creation and updating of a record from a database. Of course, the information that is managed will largely depend on the attributes that were specified, as well as the API endpoints to connect to. However, the point of this approach is that you can take advantage of React.js' state management mechanisms to create a form with an interface that reflects an existing schema in the backend. As opposed to other approaches, this is considered more secure since the <span class="jsx-3120878690">`id`</span> value is never exposed in the user interface.

As a challenge, I purposely left out the logic for fetching a record from the database. Try to see if you can write a method called <span class="jsx-3120878690">`fetch(id)`</span> with logic that makes a call against <span class="jsx-3120878690">`/api/v1/people/fetch`</span> and loads the values into the form by calling <span class="jsx-3120878690">`setState`</span> within <span class="jsx-3120878690">`fetch(id)`</span>. Ideally, this is the only addition you need as everything else in the form will follow the extracted attributes from the API.

For any questions or concerns, or if you simply want to chat about programming in general, hit me up [@happyalampay](https://twitter.com/happyalampay)!

24

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)
