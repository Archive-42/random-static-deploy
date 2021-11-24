<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/c7859b4f-a0e9-4f74-8559-62f43bdcabea.jpeg" alt="Author avatar" class="jsx-3841407315" />

Gaurav Singhal

Iterate Through a JSON Response in JSX Render for React
=======================================================

### Gaurav Singhal

-   Sep 25, 2020
-   7 Min read
-   41,094 Views

-   Sep 25, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">7 Min</span> read
-   41,094 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Front End Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Client-side Frameworks</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">React</span>

Introduction

38

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-fetchingdatausingfetch" class="menu-link">Fetching Data Using fetch()</a>
-   <a href="#module-renderingdatawithjsx" class="menu-link">Rendering Data With JSX</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

One of the advantages of React is that you can quickly generate HTML chunks using the JSX template system. Looping and presenting the data is a ubiquitous part of building apps with React. Iterating over an array of objects and rendering the data with JSX is one of the most fundamental and crucial things you need to be able to do before moving on to a real-world project.

When building scalable web apps, you will have to handle JSON responses and display them on a web page. This guide will teach you how to loop over an array of objects and render each item's information in React.

Fetching Data Using fetch()
---------------------------

The first step is to fetch data from an external service. For this example, you can use the [Random Users](https://randomuser.me/) API, which will generate a list of random users.

To fetch data from the service, use the browser's native <span class="jsx-3120878690">`fetch`</span> API. Pass the external URL to the <span class="jsx-3120878690">`fetch`</span> method and it will return a promise, so you need to chain the <span class="jsx-3120878690">`then()`</span> methods.

    1let users = [];
    2fetch(`https://randomuser.me/api/?results=10`)
    3  .then((res) => res.json())
    4  .then((data) => {
    5    console.log(data.results);
    6  });

js

If you do not want to chain the <span class="jsx-3120878690">`then()`</span> methods, you can use the <span class="jsx-3120878690">`async-await`</span> syntax. Wrap the fetch call in a function and place the <span class="jsx-3120878690">`async`</span> keyword before the function definition. Inside the method, use the <span class="jsx-3120878690">`await`</span> keyword to get the results.

    1async function getRandomUsers() {
    2  const res = await fetch(`https://randomuser.me/api/?results=10`);
    3  const data = await res.json();
    4  return data.results;
    5}

js

More details on the <span class="jsx-3120878690">`fetch`</span> API are discussed in [this](get-javascript-objects-from-a-json-file.html) guide.

Now, create a React component that will fetch random users when the component is mounted. Ideally, the fetch call should be placed in the <span class="jsx-3120878690">`componentDidMount`</span> lifecycle method so the results are ready once the component gets mounted on the page. Once you retrieve the results from fetch, store the user list in the component's state.

    1class UserList extends React.Component {
    2  constructor(props) {
    3    super(props);
    4
    5    this.state = {
    6      users: [],
    7    };
    8
    9    this.getRandomUsers = this.getRandomUsers.bind(this);
    10  }
    11
    12  async getRandomUsers() {
    13    const res = await fetch(`https://randomuser.me/api/?results=10`);
    14    const data = await res.json();
    15    return data.results;
    16  }
    17
    18  async componentDidMount() {
    19    const users = await this.getRandomUsers();
    20    this.setState({ users });
    21  }
    22
    23  render() {
    24    // ...
    25  }
    26}

jsx

Rendering Data With JSX
-----------------------

Create a component that will render an individual user item.

    1const User = ({ name, avatar, email }) => (
    2  <div>
    3    <img src={avatar} />
    4    <div>
    5      <p>{name}</p>
    6      <p>{email}</p>
    7    </div>
    8  </div>
    9);

jsx

Next, iterate over the data using the <span class="jsx-3120878690">`map()`</span> or <span class="jsx-3120878690">`forEach()`</span> methods or using loops.

### Using the <span class="jsx-3120878690">`map()`</span> Method

The <span class="jsx-3120878690">`map()`</span> method is the most commonly used function to iterate over an array of data in JSX. You can attach the <span class="jsx-3120878690">`map()`</span> method to the array and pass a callback function that gets called for each iteration. When rendering the <span class="jsx-3120878690">`User`</span> component, pass a unique value to the <span class="jsx-3120878690">`key`</span> prop. The <span class="jsx-3120878690">`key`</span> prop helps React keep track of JSX elements and identify any changes in the array.

    1class UserList extends React.Component {
    2  constructor(props) {
    3    super(props);
    4
    5    this.state = {
    6      users: [],
    7    };
    8
    9    // ...
    10  }
    11
    12  // ...
    13
    14  render() {
    15    return (
    16      <div>
    17        {this.state.users.map((user) => (
    18          <User
    19            name={`${user.name.first} ${user.name.last}`}
    20            avatar={user.picture.thumbnail}
    21            email={user.email}
    22            key={user.id.value}
    23          />
    24        ))}
    25      </div>
    26    );
    27  }
    28}

jsx

### Using the Traditional <span class="jsx-3120878690">`for`</span> Loop

Alternatively, you can also use regular loops like the <span class="jsx-3120878690">`for`</span> loop to render JSX elements.

Create a separate function called <span class="jsx-3120878690">`renderUsers()`</span> in the component. Initialize an empty array to which you push the JSX element for each user.

Run the <span class="jsx-3120878690">`for`</span> loop from index 0 to the length of the user state array.

    1for (let i = 0; i < this.state.users.length; i++) {
    2  // ...
    3}

js

Then, inside the loop body, access the current user as follows:

    1let name = `${this.state.users[i].name.first} ${this.state.users[i].name.last}`;
    2let avatar = this.state.users[i].picture.thumbnail;
    3let email = this.state.users[i].email;

js

Let's put all this together in the component. Inside the <span class="jsx-3120878690">`render()`</span> method, call the <span class="jsx-3120878690">`renderUser()`</span> method to display the list of users.

    1class UserList extends React.Component {
    2  constructor(props) {
    3    super(props);
    4
    5    this.state = {
    6      users: [],
    7    };
    8
    9    this.renderUsers = this.renderUsers.bind(this);
    10
    11    // ...
    12  }
    13
    14  function renderUsers() {
    15      const userList = [];
    16      for(let i = 0; i < this.state.users.length; i++) {
    17          let name = `${this.state.users[i].name.first} ${this.state.users[i].name.last}`;
    18          let avatar = this.state.users[i].picture.thumbnail;
    19          let email = this.state.users[i].email;
    20          let key = this.state.users[i].id.value;
    21          userList.push(<User name={name} avatar={avatar} email={email} key={key}/>);
    22      }
    23
    24      return userList;
    25  }
    26
    27  // ...
    28
    29  render() {
    30    return <div>{this.renderUsers()}</div>;
    31  }
    32}

jsx

As you can see, the <span class="jsx-3120878690">`renderUsers()`</span> method is hard to read; writing such code is generally avoided as it is difficult to debug and maintain.

### Using the <span class="jsx-3120878690">`forEach()`</span> Method

To make the <span class="jsx-3120878690">`renderUsers()`</span> method more readable, use the <span class="jsx-3120878690">`forEach`</span> method, as shown below. Its usage is similar to the <span class="jsx-3120878690">`map()`</span> method, but the <span class="jsx-3120878690">`forEach()`</span> method does not return anything. This makes it unusable directly inside the <span class="jsx-3120878690">`render()`</span> method, as you need an array to store the individual JSX elements.

    1function renderUsers() {
    2  const userList = [];
    3  this.state.users.forEach((user) => {
    4    let name = `${user.name.first} ${user.name.last}`;
    5    let avatar = user.picture.thumbnail;
    6    let email = user.email;
    7    let key = user.id.value;
    8    userList.push(<User name={name} avatar={avatar} email={email} key={key} />);
    9  });
    10
    11  return userList;
    12}

js

Conclusion
----------

As a developer, you must understand your use case and curate solutions according to your requirements. In most cases, the <span class="jsx-3120878690">`map()`</span> method gets the job done, but it is good to know additional ways of looping over an array of JSON. Also, don't forget to add a <span class="jsx-3120878690">`key`</span> prop unique to the JSX element to help with performance.

38

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)
