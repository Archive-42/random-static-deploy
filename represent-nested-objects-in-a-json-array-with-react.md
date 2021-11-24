<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/44cbcce0-5f4f-499e-8ec4-29fc953fc992.jpg" alt="Author avatar" class="jsx-3841407315" />

Raphael Alampay

Represent Nested Objects in a JSON Array with React.js Components
=================================================================

### Raphael Alampay

-   Oct 10, 2020
-   9 Min read
-   10,074 Views

-   Oct 10, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">9 Min</span> read
-   10,074 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Front End Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Client-side Frameworks</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">React</span>

Introduction

4

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-setup" class="menu-link">Setup</a>
-   <a href="#module-logicforitemmanagement" class="menu-link">Logic for Item Management</a>
-   <a href="#module-overallcode" class="menu-link">Overall Code</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

When dealing with an array of items in a React.js component, it is best practice to create an independent component that handles each element of the array. In this guide, we'll take a look at the classic todo app in React.js but give it a twist by creating a separate <span class="jsx-3120878690">`TodoItem`</span> component whose responsibility is to handle the functionality for each element in the array. This means that each element of the array will correspond to a <span class="jsx-3120878690">`TodoItem`</span> component that will be mounted within <span class="jsx-3120878690">`TodoList`</span>.

Setup
-----

Start off by creating the parent component <span class="jsx-3120878690">`TodoList`</span>:

    1import React from 'react';
    2
    3export default class TodoList extends React.Component {
    4  constructor(props) {
    5    super(props);
    6
    7    this.state = {
    8      items: []
    9    }
    10  }
    11
    12  render() {
    13    return (
    14      <div>
    15        <h1>Todo List</h1>
    16        <hr/>
    17        <button>
    18          Add Item
    19        </button>
    20      </div>
    21    );
    22  }
    23}

javascript

Notice that the component maintains an array of <span class="jsx-3120878690">`items`</span> in its state. To simplify things, the <span class="jsx-3120878690">`items`</span> array will just contain string elements.

Next, create the <span class="jsx-3120878690">`TodoItem`</span> component that will serve as a container for each element of <span class="jsx-3120878690">`items`</span>. Initially, it would look like the following:

    1import React from 'react';
    2
    3export defualt class TodoItem extends React.Component {
    4  constructor(props) {
    5    super(props);
    6
    7    this.state = {}
    8  }
    9
    10  updateItem(event) {
    11  }
    12
    13  handleClick() {
    14  }
    15
    16  render() {
    17    return (
    18      <div>
    19        <input
    20          type="text"
    21          value={this.props.item}
    22          onChange={this.updateItem.bind(this)}
    23        />
    24        <button onClick={this.handleClick.bind(this)}>
    25          Delete
    26        </button>
    27      </div>
    28    );
    29  }
    30}

javascript

You don't need to maintain any state here. The component has its own input element whose value is an <span class="jsx-3120878690">`item`</span> passed by its <span class="jsx-3120878690">`props`</span>. Whenever the <span class="jsx-3120878690">`item`</span> is modified, it invokes the <span class="jsx-3120878690">`updateItem`</span> method. It also maintains its own delete button that invokes a <span class="jsx-3120878690">`handleClick`</span> method when clicked.

Logic for Item Management
-------------------------

Next, add the necessary methods within <span class="jsx-3120878690">`TodoList`</span> that deals with adding and deleting an item.

### Adding an Item

    1handleAddClicked() {
    2  var items = this.state.items;
    3
    4  items.push("");
    5
    6  this.setState({
    7    items: items
    8  });
    9}

javascript

This method is pretty straightforward. It extracts the current <span class="jsx-3120878690">`items`</span> array and pushes in a blank string before updating the state of <span class="jsx-3120878690">`items`</span>. Bind the method to the button for adding an item like so:

    1<button
    2  onClick={this.handleAddClicked.bind(this)}
    3>
    4  Add Item
    5</button>

jsx

### Deleting an Item

Next, create a method for deleting an item:

    1deleteItem(index) {
    2  var items = this.state.items;
    3
    4  items.splice(index, 1);
    5
    6  this.setState({
    7    items: items
    8  });
    9}

javascript

Since there is no unique identifier for an <span class="jsx-3120878690">`item`</span> element, you will make use of index information to know which element of the array to delete. This is done by passing it to the <span class="jsx-3120878690">`splice`</span> method of an array and having <span class="jsx-3120878690">`1`</span> as the second argument, making it remove a single item based on the index. The approach is similar to the previous method. Extract the current <span class="jsx-3120878690">`items`</span> state, remove based on index, and update the <span class="jsx-3120878690">`items`</span> state. Notice also that you do not call this method anywhere explicitly within <span class="jsx-3120878690">`TodoList`</span>. Instead, this will be passed as a reference method to each <span class="jsx-3120878690">`TodoItem`</span> later on.

### Updating an Item

Next, create a method for updating an item:

    1updateItem(item, index) {
    2  var items = this.state.items;
    3
    4  items[index] = item;
    5
    6  this.setState({
    7    items: items
    8  });
    9}

javascript

The logic follows the same pattern as delete. The difference is now you have the newly updated <span class="jsx-3120878690">`item`</span> as the first argument to be loaded to the array of <span class="jsx-3120878690">`items`</span> based on <span class="jsx-3120878690">`index`</span>.

### Passing Functionality to TodoItem

Before you attempt to load <span class="jsx-3120878690">`TodoItem`</span>s for each element of <span class="jsx-3120878690">`items`</span> array, make sure to import the component accordingly:

    1import TodoItem from './TodoItem';

javascript

Create a function that returns a mapped set of <span class="jsx-3120878690">`TodoItem`</span>s within <span class="jsx-3120878690">`TodoList`</span> called <span class="jsx-3120878690">`renderItems`</span>:

    1renderItems() {
    2  var context = this;
    3
    4  return (
    5    this.state.items.map(function(o, i) {
    6      return  <TodoItem
    7                key={"item-" + i}
    8                item={o}
    9                index={i}
    10                updateItem={context.updateItem.bind(context)}
    11                deleteItem={context.deleteItem.bind(context)}
    12              />
    13    })
    14  );
    15}

javascript

Notice that the first thing you do is to create a reference to <span class="jsx-3120878690">`this`</span> using a variable <span class="jsx-3120878690">`context`</span>. This is useful when you want to refer to the instance of <span class="jsx-3120878690">`TodoList`</span> within deeply nested JavaScript code, such as the one presented in <span class="jsx-3120878690">`return`</span>. The trick of this method is to iterate through <span class="jsx-3120878690">`items`</span> and map it to an instance of <span class="jsx-3120878690">`TodoItem`</span> by passing in the following:

1.  <span class="jsx-3120878690">`key`</span>: The unique identifier for this component
2.  <span class="jsx-3120878690">`item`</span>: The actual element per loop in the array
3.  <span class="jsx-3120878690">`index`</span>: The index of the element
4.  <span class="jsx-3120878690">`updateItem`</span>: A reference to <span class="jsx-3120878690">`TodoList`</span>'s <span class="jsx-3120878690">`updateItem`</span> method that can be invoked by <span class="jsx-3120878690">`TodoItem`</span>
5.  <span class="jsx-3120878690">`deleteItem`</span>: A reference to <span class="jsx-3120878690">`TodoList`</span>'s <span class="jsx-3120878690">`deleteItem`</span> method that can be invoked by <span class="jsx-3120878690">`TodoItem`</span>

All of these are accessible by each <span class="jsx-3120878690">`TodoItem`</span>'s <span class="jsx-3120878690">`props`</span>.

To render the components, invoke <span class="jsx-3120878690">`renderItems`</span> within the <span class="jsx-3120878690">`render`</span> method of <span class="jsx-3120878690">`TodoList`</span>:

    1{this.renderItems()}

jsx

### Logic Methods for TodoItem

Finally, add some functionality to your <span class="jsx-3120878690">`TodoItem`</span> component for updating and deleting an <span class="jsx-3120878690">`item`</span>:

    1updateItem(event) {
    2  this.props.updateItem(event.target.value, this.props.index);
    3}

javascript

This method invokes the <span class="jsx-3120878690">`updateItem`</span> of its parent via <span class="jsx-3120878690">`props`</span>. Notice that the value for the first argument (the newly updated <span class="jsx-3120878690">`item`</span>) is taken from the input element of this <span class="jsx-3120878690">`TodoItem`</span>. The second argument will be the <span class="jsx-3120878690">`index`</span> passed to it from <span class="jsx-3120878690">`props`</span> as well.

    1handleClick() {
    2  this.props.deleteItem(this.props.index);
    3}

javascript

Delete works the same way. Invoke the <span class="jsx-3120878690">`deleteItem`</span> of the parent by accessing it from this <span class="jsx-3120878690">`TodoItem`</span>'s <span class="jsx-3120878690">`props`</span>. Pass in the <span class="jsx-3120878690">`index`</span> to be deleted, which is also accessible via <span class="jsx-3120878690">`props`</span>.

Hook up the logic to <span class="jsx-3120878690">`TodoItem`</span>'s interface:

    1<input
    2  type="text"
    3  value={this.props.item}
    4  onChange={this.updateItem.bind(this)}
    5/>
    6<button onClick={this.handleClick.bind(this)}>
    7  Delete
    8</button>

jsx

Overall Code
------------

### TodoItem

    1import React from 'react';
    2
    3export defualt class TodoItem extends React.Component {
    4  constructor(props) {
    5    super(props);
    6
    7    this.state = {
    8      item: props.item
    9    }
    10  }
    11
    12  updateItem(event) {
    13    this.props.updateItem(event.target.value, this.props.index);
    14  }
    15
    16  handleClick() {
    17    this.props.deleteItem(this.props.index);
    18  }
    19
    20  render() {
    21    return (
    22      <div>
    23        <input
    24          type="text"
    25          value={this.props.item}
    26          onChange={this.updateItem.bind(this)}
    27        />
    28        <button onClick={this.handleClick.bind(this)}>
    29          Delete
    30        </button>
    31      </div>
    32    );
    33  }
    34}

javascript

### TodoList

    1import React from 'react';
    2import TodoItem from './TodoItem';
    3
    4export default class TodoList extends React.Component {
    5  constructor(props) {
    6    super(props);
    7
    8    this.state = {
    9      items: []
    10    }
    11  }
    12
    13  handleAddClicked() {
    14    var items = this.state.items;
    15
    16    items.push("");
    17
    18    this.setState({
    19      items: items
    20    });
    21  }
    22
    23  updateItem(item, index) {
    24    var items = this.state.items;
    25
    26    items[index] = item;
    27
    28    this.setState({
    29      items: items
    30    });
    31  }
    32
    33  deleteItem(index) {
    34    var items = this.state.items;
    35
    36    items.splice(index, 1);
    37
    38    this.setState({
    39      items: items
    40    });
    41  }
    42
    43  renderItems() {
    44    var context = this;
    45
    46    return (
    47      this.state.items.map(function(o, i) {
    48        return  <TodoItem
    49                  key={"item-" + i}
    50                  item={o}
    51                  item={i}
    52                  updateItem={context.updateItem.bind(context)}
    53                  deleteItem={context.deleteItem.bind(context)}
    54                />
    55      })
    56    );
    57  }
    58
    59  render() {
    60    return (
    61      <div>
    62        <h1>Todo List</h1>
    63        {this.renderItems()}
    64        <hr/>
    65        <button
    66          onClick={this.handleAddClicked.bind(this)}
    67        >
    68          Add Item
    69        </button>
    70      </div>
    71    );
    72  }
    73}

javascript

Conclusion
----------

This may be a slightly more advanced todo app, but it allows you as a developer to be more modular with the way the app handles and modifies information. In fact, it's considered good practice to create separate components for managing individual pieces of information such as elements of an array. Although we simply modified string elements in this example, this can be extended to have nested components deal with more complex objects.

For any questions or concerns, or if you simply want to chat about programming in general, hit me up [@happyalampay](https://twitter.com/happyalampay)!

4

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)
