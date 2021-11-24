<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/44cbcce0-5f4f-499e-8ec4-29fc953fc992.jpg" alt="Author avatar" class="jsx-3841407315" />

Raphael Alampay

Creating Dynamic, Editable Tables with React
============================================

### Raphael Alampay

-   Sep 25, 2020
-   9 Min read
-   38,904 Views

-   Sep 25, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">9 Min</span> read
-   38,904 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Front End Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Client-side Frameworks</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">React</span>

Introduction

82

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-setup" class="menu-link">Setup</a>
-   <a href="#module-addingitems" class="menu-link">Adding Items</a>
-   <a href="#module-modifyingitems" class="menu-link">Modifying Items</a>
-   <a href="#module-deletingitems" class="menu-link">Deleting Items</a>
-   <a href="#module-overallcode" class="menu-link">Overall Code</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

React.js allows you to build complex forms while maintaining the values of the objects bound to the forms. An example of such complexity is maintaining an array of values that can be modified by the user all in a single interface. We can express this by creating a table where each row contains an input element corresponding to the value of an element in the array of an object we want to maintain.

This guide will show you the different approaches to building such a form and how this relates to state management in React.js.

Setup
-----

You'll be creating a single component called <span class="jsx-3120878690">`DynamicTable`</span> that maintains two state attributes: a <span class="jsx-3120878690">`message`</span> and an array of messages called <span class="jsx-3120878690">`items`</span>. Code in the following to get you started:

    1import React from 'react';
    2
    3export default class DynamicTable extends React.Component {
    4  constructor(props) {
    5    super(props);
    6
    7    this.state = {
    8      message: "",
    9      items: []
    10    }
    11  }
    12
    13  render() {
    14    return (
    15      <div>
    16        <table>
    17          <thead>
    18            <tr>
    19              <th>Item</th>
    20              <th>Actions</th>
    21            </tr>
    22          </thead>
    23          <tbody>
    24          </tbody>
    25        </table>
    26      </div>
    27    );
    28  }
    29}

javascript

Notice that the component uses the complete form of an HTML table. React.js complains if you don't have the <span class="jsx-3120878690">`tbody`</span> when you insert rows within <span class="jsx-3120878690">`table`</span>.

Adding Items
------------

Create a simple interface that will allow the user to input a message and a button to submit that message. The idea is that if the user clicks the button, it will take the value of the message and add it to the <span class="jsx-3120878690">`items`</span> array. As the user changes the value in the input, the <span class="jsx-3120878690">`message`</span> state will be updated. The UI will lie just below the table, so your <span class="jsx-3120878690">`render()`</span> method will look like the following:

    1render() {
    2  return (
    3    <div>
    4      <table>
    5        <thead>
    6          <tr>
    7            <th>Item</th>
    8            <th>Actions</th>
    9          </tr>
    10        </thead>
    11        <tbody>
    12        </tbody>
    13      </table>
    14      <hr/>
    15      <input type="text" />
    16      <button>
    17        Add Item
    18      </button>
    19    </div>
    20  );
    21}

javascript

Add in the event handler to update the message:

    1updateMessage(event) {
    2  this.setState({
    3    message: event.target.value
    4  });
    5}

javascript

Bind the event handler to the <span class="jsx-3120878690">`onChange`</span> attribute of the input:

    1<input type="text" onChange={this.updateMessage.bind(this} />

jsx

Next, create the event handler for the button when it is clicked:

    1handleClick() {
    2  var items = this.state.items;
    3
    4  items.push(this.state.message);
    5
    6  this.setState({
    7    items: items
    8  });
    9}

javascript

All the function is doing is taking the current array of <span class="jsx-3120878690">`items`</span> and the current value of <span class="jsx-3120878690">`message`</span> and pushes them to the array before updating the state.

Bind the event handler to the <span class="jsx-3120878690">`onClick`</span> attribute of the button:

    1<button onClick={this.handleClick.bind(this)}>
    2  Add Item
    3</button>

jsx

To render the <span class="jsx-3120878690">`items`</span> in the table, create a separate function that returns rendered JSX:

    1renderRows() {
    2  var context = this;
    3
    4  return  this.state.items.map(function(o, i) {
    5            return (
    6              <tr key={"item-" + i}>
    7                <td>
    8                  <input
    9                    type="text"
    10                    value={o}
    11                  />
    12                </td>
    13                <td>
    14                  <button>
    15                    Delete
    16                  </button>
    17                </td>
    18              </tr>
    19            );
    20          });
    21}

javascript

There are two important concepts here:

1.  Since <span class="jsx-3120878690">`items`</span> is a dynamic array that's expected to grow or shrink at any time, the function that maps these values to individual <span class="jsx-3120878690">`<tr>`</span> tags should maintain a <span class="jsx-3120878690">`key`</span> attribute for each node it produces. It is a requirement for React.js that the value of its <span class="jsx-3120878690">`key`</span> should be unique within the parent element (in this case, <span class="jsx-3120878690">`<tbody>`</span>). Thus, the value <span class="jsx-3120878690">`"item-" + i`</span> is used where <span class="jsx-3120878690">`i`</span> is the index of an element in the mapped array.
2.  A separate <span class="jsx-3120878690">`context`</span> variable is used to reference <span class="jsx-3120878690">`this`</span> since within the nested returns, you'll need to refer to the instance of the <span class="jsx-3120878690">`DynamicTable`</span> component to bind event handlers to <span class="jsx-3120878690">`input`</span> and <span class="jsx-3120878690">`button`</span> later on.

Invoke <span class="jsx-3120878690">`renderRows()`</span> within the body of the table as follows:

    1<tbody>
    2  {this.renderRows()}
    3</tbody>

jsx

Modifying Items
---------------

To modify each element in <span class="jsx-3120878690">`items`</span> within the <span class="jsx-3120878690">`input`</span> of each table row, you'll have to create an event handler that knows which index in the array should be updated. Create a function that looks like this:

    1handleItemChanged(i, event) {
    2  var items = this.state.items;
    3
    4  items[i] = event.target.value;
    5
    6  this.setState({
    7    items: items
    8  });
    9}

javascript

Notice that the first argument to the function is <span class="jsx-3120878690">`i`</span>, corresponding to the index of the array. The second argument is <span class="jsx-3120878690">`event`</span>, which has a property <span class="jsx-3120878690">`target`</span> referring to the <span class="jsx-3120878690">`input`</span> element at hand. You can then update the element at index <span class="jsx-3120878690">`i`</span> of <span class="jsx-3120878690">`items`</span> by assigning it <span class="jsx-3120878690">`event.target.value`</span>.

Hook it in the table row's <span class="jsx-3120878690">`input`</span> element's <span class="jsx-3120878690">`onChange`</span> attribute:

    1<td>
    2  <input
    3    type="text"
    4    value={o}
    5    onChange={context.handleItemChanged.bind(context, i)}
    6  />
    7</td>

jsx

As seen in the code, <span class="jsx-3120878690">`context`</span> is used to call <span class="jsx-3120878690">`handleItemChanged`</span> since it is a reference to <span class="jsx-3120878690">`this`</span>, which is a reference to the component itself. Next, <span class="jsx-3120878690">`context`</span> is bound to the function from <span class="jsx-3120878690">`bind()`</span> as the first argument. Everything after <span class="jsx-3120878690">`context`</span> becomes an argument to the function. In this case you pass <span class="jsx-3120878690">`i`</span>, which is the index as given by the mapping function.

Deleting Items
--------------

You can use the same technique to delete items by creating a single event handler for each button generated:

    1handleItemDelete(i) {
    2  var items = this.state.items;
    3
    4  items.splice(i, 1);
    5
    6  this.setState({
    7    items: items
    8  });
    9}

javascript

The method takes in the index <span class="jsx-3120878690">`i`</span> and uses it as an argument to <span class="jsx-3120878690">`splice(index, x)`</span>, which removes <span class="jsx-3120878690">`x`</span> items from the array at starting index <span class="jsx-3120878690">`index`</span>. In this case, you just want to remove <span class="jsx-3120878690">`1`</span> item, which is the item itself at index <span class="jsx-3120878690">`i`</span>.

Attach it to the button's <span class="jsx-3120878690">`onClick`</span> attribute binding index <span class="jsx-3120878690">`i`</span> as well:

    1<td>
    2  <button
    3    onClick={context.handleItemDelete.bind(context, i)}
    4  >
    5    Delete
    6  </button>
    7</td>

jsx

Overall Code
------------

The complete code looks like the following:

    1import React from 'react';
    2
    3export default class DynamicTable extends React.Component {
    4  constructor(props) {
    5    super(props);
    6
    7    this.state = {
    8      message: "",
    9      items: []
    10    }
    11  }
    12
    13  updateMessage(event) {
    14    this.setState({
    15      message: event.target.value
    16    });
    17  }
    18
    19  handleClick() {
    20    var items = this.state.items;
    21
    22    items.push(this.state.message);
    23
    24    this.setState({
    25      items: items,
    26      message: ""
    27    });
    28  }
    29
    30  handleItemChanged(i, event) {
    31    var items = this.state.items;
    32    items[i]  = event.target.value;
    33
    34    this.setState({
    35      items: items
    36    });
    37  }
    38
    39  handleItemDeleted(i) {
    40    var items = this.state.items;
    41
    42    items.splice(i, 1);
    43
    44    this.setState({
    45      items: items
    46    });
    47  }
    48
    49  renderRows() {
    50    var context = this;
    51
    52    return  this.state.items.map(function(o, i) {
    53              return (
    54                <tr key={"item-" + i}>
    55                  <td>
    56                    <input
    57                      type="text"
    58                      value={o}
    59                      onChange={context.handleItemChanged.bind(context, i)}
    60                    />
    61                  </td>
    62                  <td>
    63                    <button
    64                      onClick={context.handleItemDeleted.bind(context, i)}
    65                    >
    66                      Delete
    67                    </button>
    68                  </td>
    69                </tr>
    70              );
    71            });
    72  }
    73
    74  render() {
    75    return (
    76      <div>
    77        <table className="">
    78          <thead>
    79            <tr>
    80              <th>
    81                Item
    82              </th>
    83              <th>
    84                Actions
    85              </th>
    86            </tr>
    87          </thead>
    88          <tbody>
    89            {this.renderRows()}
    90          </tbody>
    91        </table>
    92        <hr/>
    93        <input
    94          type="text"
    95          value={this.state.message}
    96          onChange={this.updateMessage.bind(this)}
    97        />
    98        <button
    99          onClick={this.handleClick.bind(this)}
    100        >
    101          Add Item
    102        </button>
    103      </div>
    104    );
    105  }
    106}

javascript

Try it out yourself and see that items can be added, modified, and deleted all within a single component.

Conclusion
----------

In this guide, child elements are created dynamically and are dependent on the state value of an array maintained by the component. Each element of the array can be modified directly with its own corresponding interface, which is automatically bound to the state by passing the index value to the event handler. As a challenge, try to work with an array of objects instead of an array of strings in order to create more complex nested array bound elements!

82

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)
