<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/c7859b4f-a0e9-4f74-8559-62f43bdcabea.jpeg" alt="Author avatar" class="jsx-3841407315" />

Gaurav Singhal

Rendering and Updating Data using Component Lifecycle Methods In React
======================================================================

### Gaurav Singhal

-   Nov 2, 2020
-   13 Min read
-   90,443 Views

-   Nov 2, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">13 Min</span> read
-   90,443 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1=""> React</span>

Introduction

124

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-componentlifecyclehooks" class="menu-link">Component Lifecycle Hooks</a>
-   <a href="#module-renderjavascriptwithinitialrender" class="menu-link">Render JavaScript with Initial Render</a>
-   <a href="#module-renderjavascriptwithupdatingphase" class="menu-link">Render JavaScript with Updating Phase</a>
-   <a href="#module-usingreacthooktofetchthedata" class="menu-link">Using React Hook to Fetch the Data</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

React is the most popular JavaScript-based library for using component-based architecture to create applications that share user interface content.

React allows us to define the function or class-based component that provides a specific feature for an application; hence, each component in React application contains the set of lifecycle hooks.

There are several lifecycle methods, which we can override and run based on a particular timestamp, such as mounting the component, updating the state of a component, orunmounting the component.

In this guide, we will learn several approaches to execute JavaScript after the <span class="jsx-3120878690">`render()`</span> method, including using initial render to fetch the data, using <span class="jsx-3120878690">`componentDidUpdate()`</span>, and so on.

Component Lifecycle Hooks
-------------------------

Each lifecycle hook represents a specific state of an application. The primary stages of the lifecycle of a component are mounting, updating, unmounting, and error handling.

### Mounting

This phase of the component lifecycle is used to call the method when the instance of the component can be created. It is also called while inserting the component into the HTML DOM.

There are a few methods used in the mounting phase:

-   constructor()
-   render()
-   componentDidMount()
-   static getDerivedStateFromProps()

### Updating

This phase of the component lifecycle is triggered as soon as any changes are found in terms of state or props that allow the DOM to be re-rendered again and again to update the DOM elements.

The updating phase includes several lifecycle hooks:

-   render()
-   componentDidUpdate()
-   shouldComponentUpdate()
-   static getDerivedStateFromProps()
-   getSnapshotBeforeUpdate()

### Unmounting

The unmounting phase begins when an existing component is removed from the DOM.

It includes a single and important lifecycle hook, componentWillUnmount().

### Error Handling

One of the crucial phases of the component, error handling is used to trigger an action in case of an error during the component rendering.

Two methods are used to manage the errors in the existing component:

-   componentDidCatch()
-   static getDerivedStateFromError()

This is a complete list of lifecycle phases and component lifecycle hooks, which trigger based on each phase and component behavior. We can choose any of them to trigger actions that are reflected into the DOM.

Let’s look at a use case that shows how to render something when the component is added into the rendering phase. We'll use an HTTP call to render the list using different lifecycle hooks.

Render JavaScript with Initial Render
-------------------------------------

A React component can be created using a function or a class-based component, and the class-based component can use different lifecycle hooks.

But quite often, we need to load data from the server to render the same data into the DOM. To do that, we can use a widely used lifecycle hook called <span class="jsx-3120878690">`componentDidMount`</span>.

The <span class="jsx-3120878690">`componentDidMount()`</span> method will be triggered as soon as the component is mounted or inserted into the DOM.

The basic syntax to use <span class="jsx-3120878690">`componentDidMount()`</span> is looks like this.

    1componentDidMount() {
    2    // your source code to load initial data
    3}

jsx

This method used widely by developers because it loads immediately once the component is mounted. Hence, it’s quite handy when we need to get data from a remote endpoint.

This hook is also used to apply or configure the subscription with the initial render, but we need to unsubscribe it using another hook called <span class="jsx-3120878690">`componentWillUnmount()`</span>.

Let’s look at an example of fetching data from a remote endpoint and using the same data into <span class="jsx-3120878690">`render()`</span> to render it into the DOM.

We call the API using Axios, and the method should look like this.

    1async getTodos() {
    2    let data = await axios
    3      .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
    4      .then(function(response) {
    5        return response;
    6      })
    7      .catch(function(error) {
    8        console.log(error);
    9      });
    10    this.setState({ todos: data.data });
    11  }

jsx

**Note**: We have used the free API endpoint <span class="jsx-3120878690">`json-placeholder`</span>, which provides the dummy data for the demo purpose.

In the above method, we have used Axios as the HTTP promise-based client, which uses <span class="jsx-3120878690">`XMLHttpRequests`</span> to request data from the browser.

Now let’s call the method <span class="jsx-3120878690">`getTodos()`</span> from the <span class="jsx-3120878690">`componentDidMount()`</span> hook, like this.

    1  componentDidMount() {
    2    this.getTodos();
    3  }

jsx

By calling this method, we will be able to call the remote endpoint once the current component is mounted and added into the DOM tree.

Finally, we will use the response data coming from the API in the <span class="jsx-3120878690">`render()`</span>, like this.

    1  render() {
    2    const { todos } = this.state;
    3    return (
    4      <div>
    5        <h3>Using componentDidMount for initial data render</h3>
    6        <hr />
    7        {todos &&
    8          todos.map(todo => {
    9            return (
    10              <table>
    11                <tr>
    12                  <td>{todo.id}</td>
    13                  <td>
    14                    <p key={todo.id}>{todo.title}</p>
    15                  </td>
    16                </tr>
    17              </table>
    18            );
    19          })}
    20      </div>
    21    );
    22  }

jsx

Here in the <span class="jsx-3120878690">`render()`</span> method, we have used a <span class="jsx-3120878690">`map()`</span> in order to iterate the items of the <span class="jsx-3120878690">`todos`</span> that are stored in the state object.

The complete component code should look like this.

    1import React, { Component } from "react";
    2import { render } from "react-dom";
    3import axios from "axios";
    4
    5class Usingdidmount extends Component {
    6  constructor() {
    7    super();
    8    this.state = {
    9      name: "React"
    10    };
    11    this.getTodos = this.getTodos.bind(this);
    12  }
    13
    14  componentDidMount() {
    15    this.getTodos();
    16  }
    17
    18  async getTodos() {
    19    let data = await axios
    20      .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
    21      .then(function(response) {
    22        return response;
    23      })
    24      .catch(function(error) {
    25        console.log(error);
    26      });
    27    this.setState({ todos: data.data });
    28  }
    29
    30  render() {
    31    const { todos } = this.state;
    32    return (
    33      <div>
    34        <h3>Using componentDidMount for initial data render</h3>
    35        <hr />
    36        {todos &&
    37          todos.map(todo => {
    38            return (
    39              <table>
    40                <tr>
    41                  <td>{todo.id}</td>
    42                  <td>
    43                    <p key={todo.id}>{todo.title}</p>
    44                  </td>
    45                </tr>
    46              </table>
    47            );
    48          })}
    49      </div>
    50    );
    51  }
    52}
    53
    54export default Usingdidmount;

jsx

In this example, we have implemented:

-   The <span class="jsx-3120878690">`componentDidMount()`</span> hook that calls the <span class="jsx-3120878690">`getTodos()`</span> method in order to fetch data from the API using AXIOS client
-   The <span class="jsx-3120878690">`getTodos()`</span> method, where we have implemented an actual AXIOS snippet to get the response
-   The <span class="jsx-3120878690">`render()`</span> method, where we rendered the data using the <span class="jsx-3120878690">`map()`</span> into the actual DOM tree.

This is one of the basic approaches that developers use in order to work with a remote endpoint to get data after a component is mounted. There are also other ways to do the same thing.

Render JavaScript with Updating Phase
-------------------------------------

Sometimes we have to call the remote endpoint as soon as we have changes in the state or the props; at times like these, we can use another lifecycle hook called <span class="jsx-3120878690">`componentDidUpdate()`</span>.

The <span class="jsx-3120878690">`componentDidUpdate()`</span> hook is used to trigger an action once we find an update in the component, but make sure this hook method does not get called at the time of the initial render of the component.

We can use the <span class="jsx-3120878690">`componentDidUpdate()`</span> hook like this.

    1componentDidUpdate(prevProps, prevState, snapshot) {
    2    // Do something if any updates
    3}

jsx

**Note**: Before using the <span class="jsx-3120878690">`componentDidUpdate()`</span> hook, we have to wrap it with the condition; otherwise, it will create an infinite loop for the component.

We can use the <span class="jsx-3120878690">`componentDidUpdate()`</span> hook along with the condition and the Axios client like this.

    1componentDidUpdate(prevProps) {
    2    if (this.props.id !== prevProps.id) {
    3      let data = await axios
    4      .get("https://jsonplaceholder.typicode.com/todos/" + this.props.id)
    5      .then(function(response) {
    6        return response;
    7      })
    8      .catch(function(error) {
    9        console.log(error);
    10      });
    11      this.setState({ todo: data.data });
    12    }
    13  }

jsx

As you can see in the above example, we have the condition wrapped before we access the remote endpoint, which we do like this.

    1componentDidUpdate(prevProps) {
    2    if (this.props.id !== prevProps.id) {
    3      
    4    }
    5  }

jsx

The condition makes sure we don’t re-render the component unless we find the updates in the data. By using the condition along with the hook, we can maintain application performance by restricting the re-render of the component.

Using React Hook to Fetch the Data
----------------------------------

We have seen two different examples by which we can make an HTTP call using the HTTP-based client Axios. But sometimes we have to work with the hook function as well.

React provides a different set of hooks that we can use in a functional component. One is called <span class="jsx-3120878690">`useEffect()`</span>, which is pretty similar to <span class="jsx-3120878690">`componentDidMount()`</span> and which that we can use to work with a remote endpoint.

The primary syntax of the <span class="jsx-3120878690">`useEffect()`</span> hook looks like this.

    1useEffect(() => {
    2    // Make HTTP call or other code
    3  });

jsx

The <span class="jsx-3120878690">`useEffect`</span> hook is a combination of three different lifecycle hooks:

-   componentDidMount()
-   componentDidUpdate()
-   componentWillUnmount()

As you can see, the <span class="jsx-3120878690">`useEffect`</span> hook can be used for the three different purposes, including during the mounting state, updating state, and unmounting phase.

Now let’s jump to the function implementation, where we will make an HTTP call to get the data from the remote endpoint.

    1import React, { useState, useEffect } from "react";
    2import axios from "axios";
    3
    4export default function Gettododata(props) {
    5  const [data, setData] = useState({ todos: [] });
    6
    7  return (
    8    <div>
    9     
    10    </div>
    11  );
    12}

jsx

Here, we have created the functional component along with <span class="jsx-3120878690">`useState`</span>, which is also a hook in React.

Now let’s implement the <span class="jsx-3120878690">`useEffect`</span> hook into the existing function.

    1useEffect(async () => {
    2    const data = await axios
    3      .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
    4      .then(function(response) {
    5        return response;
    6      })
    7      .catch(function(error) {
    8        console.log(error);
    9      });
    10    setTodos(data.data);
    11  }, []);

jsx

In this example, the HTTP get request call is implemented using the Axios as client inside the <span class="jsx-3120878690">`useEffect`</span> hook function. Notice that along with the <span class="jsx-3120878690">`useEffect`</span> hook, an additional argument, <span class="jsx-3120878690">`[]`</span>, is provided which means the function will be triggered once as we have not included a count.

If we provide a value within the brackets, then the <span class="jsx-3120878690">`useEffect`</span> hook will be triggered repeatedly. For example, if we give 5 as a value, then the code will look like this.

    1  useEffect(async () => {
    2    const data = await axios
    3      .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
    4      .then(function(response) {
    5        return response;
    6      })
    7      .catch(function(error) {
    8        console.log(error);
    9      });
    10    setTodos(data.data);
    11  }, [5]);

jsx

Now we have given 5 as a value, the <span class="jsx-3120878690">`useEffect`</span> hook will be triggered five times repeatedly and will execute its content.

The complete example of the functional component with a hook should look like this.

    1import React, { useState, useEffect } from "react";
    2import axios from "axios";
    3
    4export default function Gettododata(props) {
    5  const [data, setData] = useState({ todos: [] });
    6
    7  useEffect(async () => {
    8    const data = await axios
    9      .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
    10      .then(function(response) {
    11        return response;
    12      })
    13      .catch(function(error) {
    14        console.log(error);
    15      });
    16    setTodos(data.data);
    17  }, []);
    18
    19  return (
    20    <div>
    21      {data.todos.map(item => (
    22        <div key={item.id}>
    23          <p>{item.title}</p>
    24        </div>
    25      ))}
    26    </div>
    27  );
    28}

jsx

This is how we can use the <span class="jsx-3120878690">`useEffect`</span> hook to make HTTP calls..

Conclusion
----------

In this advanced guide, we learned how to execute JavaScript after a component ia added into the DOM tree, and we have used the lifecycle hook <span class="jsx-3120878690">`componentDidMount()`</span> to make HTTP calls along with the class-based component.

Finally, we have seen how to make HTTP calls using the <span class="jsx-3120878690">`useEffect()`</span> hook. I hope this guide helped you understand when and how to execute JavaScript after rendering the component. Stay tuned for more upcoming guides.

124

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)
