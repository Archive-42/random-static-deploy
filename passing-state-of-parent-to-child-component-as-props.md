<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/8ef6c218-9140-4529-8360-570dcb6f5e7a.png" alt="Author avatar" class="jsx-3841407315" />

Gabriel Cánepa

Passing State of Parent to Child Component as Props
===================================================

### Gabriel Cánepa

-   Nov 24, 2020
-   7 Min read
-   43,249 Views

-   Nov 24, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">7 Min</span> read
-   43,249 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Front End Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Client-side Frameworks</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">React</span>

Introduction

50

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-settingupstateintheparentcomponent" class="menu-link">Setting up State in the Parent Component</a>
-   <a href="#module-creatingthechildcomponent" class="menu-link">Creating the Child Component</a>
-   <a href="#module-changingthestateoftheparentthroughthechildcomponent" class="menu-link">Changing the State of the Parent Through the Child Component</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

React enables developers to write reusable code in the form of components. This modular approach makes it simple to develop robust apps by following a parent-child structure and adding those components in as many times as needed. To configure a component, you can use *props* (data you pass *to* the component) whereas *state* allows you to manage the data that may change *inside* of that specific component. In other words, with state you can control how it behaves and renders. This guide will demonstrate how to make a parent component aware of actions or changes in the child by passing state as props. Although we will use functional components, the same applies to class-based ones.

To illustrate, we will store an array of basketball players as objects in the state of the main app component. Next, we will pass that piece of state to a child (<span class="jsx-3120878690">`Player`</span>) component for visualization purposes. Finally, we will set up a function to remove players one by one and see how that impacts the state of the parent. The final code—including all the files—is available in [Codesandbox](https://codesandbox.io/s/players-8ehqt) and [GitHub](https://github.com/gacanepa/pluralsight/tree/master/05%20-%20React).

Setting up State in the Parent Component
----------------------------------------

To begin, create the following App.js file:

    1import React, { useState } from "react";
    2import Player from "./components/Player/Player";
    3import "./styles.css";
    4
    5export default function App() {
    6  const [players, setPlayers] = useState([
    7    {
    8      name: "LaMarcus Aldridge",
    9      yearsPro: 14,
    10      position: "Center-Forward"
    11    },
    12    {
    13      name: "Marco Belinelli",
    14      yearsPro: 13,
    15      position: "Guard"
    16    },
    17    {
    18      name: "DeMar DeRozan",
    19      yearsPro: 11,
    20      position: "Guard-Forward"
    21    }
    22  ]);
    23
    24  const playersList = players.map(({ name, yearsPro, position }) => (
    25    <li key={name.replace(" ", "").toLowerCase()}>
    26      <Player
    27        allPlayers={players}
    28        removePlayer={setPlayers}
    29        name={name}
    30        yearsPro={yearsPro}
    31        position={position}
    32      />
    33    </li>
    34  ));
    35
    36  return (
    37    <div className="App">
    38      <h1>Team Members ({players.length})</h1>
    39      <ul className="List">{playersList}</ul>
    40    </div>
    41  );
    42}

jsx

Now, examine what you have so far step by step.

1.  Three standard imports:

    1import React, { useState } from "react";
    2import Player from "./components/Player/Player";
    3import "./styles.css";

jsx

-   React (as expected) and the <span class="jsx-3120878690">`useState`</span> hook. The latter will allow you to access and manipulate the state of the current component.

-   A <span class="jsx-3120878690">`Player`</span> component (which you will add later)

-   The CSS file used for styling

2) A list of basketball players. Through <span class="jsx-3120878690">`useState`</span>, you initialize a piece of state in a variable named <span class="jsx-3120878690">`players`</span> and a function (<span class="jsx-3120878690">`setPlayers`</span>) to update it later

    1const [players, setPlayers] = useState([
    2  {
    3    name: "LaMarcus Aldridge",
    4    yearsPro: 14,
    5    position: "Center-Forward"
    6  },
    7  {
    8    name: "Marco Belinelli",
    9    yearsPro: 13,
    10    position: "Guard"
    11  },
    12  {
    13    name: "DeMar DeRozan",
    14    yearsPro: 11,
    15    position: "Guard-Forward"
    16  }
    17]);

jsx

3) An array that consists of a series of children components. Here you will be passing the state (the <span class="jsx-3120878690">`players`</span> variable and the <span class="jsx-3120878690">`setPlayers`</span> function) as props to each instance of <span class="jsx-3120878690">`Player`</span>. This will allow you to manipulate the parent's state from each child.

    1  const playersList = players.map(({ name, yearsPro, position }) => (
    2    <li key={name.replace(" ", "").toLowerCase()}>
    3      <Player
    4        allPlayers={players}
    5        removePlayer={setPlayers}
    6        name={name}
    7        yearsPro={yearsPro}
    8        position={position}
    9      />
    10    </li>
    11  ));

jsx

4) The <span class="jsx-3120878690">`return`</span> statement that will display the number and list of players (which you will modify via the state):

    1return (
    2  <div className="App">
    3    <h1>Team Members ({players.length})</h1>
    4    <ul className="List">{playersList}</ul>
    5  </div>
    6);

jsx

Once you put the child component in place in the next section, you will observe how the number of players (<span class="jsx-3120878690">`players.length`</span>) and therefore the list itself (<span class="jsx-3120878690">`playersList`</span>) are impacted by actions that occur in it.

Creating the Child Component
----------------------------

The <span class="jsx-3120878690">`Player`</span> component consists of a <span class="jsx-3120878690">`span`</span> element that displays the player's name, position, and years of experience. In addition, the <span class="jsx-3120878690">`handleRemove`</span> function will make it possible to remove each player from the parent's state when you click on the corresponding item in the list. To accomplish this, insert the following lines in a file called <span class="jsx-3120878690">`Player.js`</span>:

    1import React from "react";
    2import "./Player.css";
    3
    4// Destructuring props in the function arguments.
    5const Player = ({ allPlayers, name, yearsPro, position, removePlayer }) => {
    6  const handleRemove = () => {
    7    const filteredPlayers = allPlayers.filter((player) => player.name !== name);
    8    removePlayer(filteredPlayers);
    9  };
    10
    11  return (
    12    <span onClick={handleRemove}>
    13      {name} ({position}) | Years pro: {yearsPro}
    14    </span>
    15  );
    16};
    17
    18export default Player;

jsx

At this point, you should see the following in the browser:

![Displaying the list of players](../../pluralsight2.imgix.net/guides/21355613-1170-4311-ae61-75794683dbd6_state-as-props-1.html)

Next up, see what happens when the <span class="jsx-3120878690">`handleRemove`</span> function is triggered in a given <span class="jsx-3120878690">`Player`</span> component.

Changing the State of the Parent Through the Child Component
------------------------------------------------------------

Now that you have set up the state in the parent and passed it to the child as props, click on any of the players and see how it is removed from the list:

![Making changes in the state of the parent](../../pluralsight2.imgix.net/guides/ea21dd40-b916-4afb-9adc-ab657f38115f_state-as-props-2.html)

As you can see, the number of players is now two. If you click on another player, it will decrease to one:

![Displaying more changes in the parent](../../pluralsight2.imgix.net/guides/fb6a2ca9-c0da-4f84-82be-816c4e1c730e_state-as-props-3.html)

Thus, you can confirm that the actual list of players (which resides in <span class="jsx-3120878690">`App.js`</span>) is modified when you manipulate the props in <span class="jsx-3120878690">`Player`</span>.

Alternatively, you can inspect the components using the React Developer Tools:

![Using the React Developer Tools to inspect components](../../pluralsight2.imgix.net/guides/950851a3-666b-4b85-b51c-99cbd458e5db_state-as-props-4.html)

First, click on **App** and observe its state under the **Hooks** section on the right pane. Second, click on a given player component and examine its props. Finally, click on any of the items in the page and see how the state and props of the parent and child components are updated, respectively.

Conclusion
----------

While the example in this guide is rather simple, you will find this same principle in all kinds of React-based apps. For example, you can think of a shopping cart with the total price as the parent component and each purchased item with its corresponding subtotal and individual quantity as a child.

Passing state as props from parent to child components is a core concept of React. By keeping state in only a few components and passing it to as many children as needed in the form of props, you will be able to write code that is easier to maintain, and you will thank yourself down the road.

50

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)
