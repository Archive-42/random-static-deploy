<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/c7859b4f-a0e9-4f74-8559-62f43bdcabea.jpeg" alt="Author avatar" class="jsx-3841407315" />

Gaurav Singhal

Move Items Between Two Components in React
==========================================

### Gaurav Singhal

-   Nov 10, 2020
-   10 Min read
-   5,705 Views

-   Nov 10, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">10 Min</span> read
-   5,705 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Front End Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Client-side Frameworks</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">React</span>

Introduction

13

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-usecase" class="menu-link">Use Case</a>
-   <a href="#module-implementation" class="menu-link">Implementation</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

React allows you to share data between components through props. Your component tree can be structured such that two *sibling components* can share the same data through a parent component’s state. This idea can be extended to many use cases, such as moving data or items between two components to convey different meanings to the user.

In this guide, you'll learn how to move items between two components in React using a practical example.

Use Case
--------

A practical use case where you would need to move items between two or more components would be a task-managing web app where employers update the status of given tasks. In this example, you'll build a simple version of a task manager app and move items from one component to another using props. For brevity and simplicity, assume that each task has only two possible statuses,<span class="jsx-3120878690">`Completed`</span> or <span class="jsx-3120878690">`Pending`</span>. On clicking a button, you can move a particular task from <span class="jsx-3120878690">`Pending`</span> to <span class="jsx-3120878690">`Completed`</span> and vice versa.

Implementation
--------------

Start by creating an empty React project.

    1npx create-react-app react-taskmanager

Head over to <span class="jsx-3120878690">`App.css`</span> and add the following styles.

    1.App{
    2  background: lightgray;
    3  height: 100vh;
    4}
    5
    6
    7.items{
    8  padding: 60px 160px;
    9  display: flex;
    10  /* align-items: center; */
    11  justify-content: space-between;
    12}
    13
    14.pending,.completed{
    15  background: #ffffff;
    16  width: 400px;
    17  padding: 10px 20px;
    18  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    19}
    20
    21.item{
    22  display: flex;
    23  align-items: center;
    24  justify-content: space-between;
    25}
    26
    27button{
    28  cursor: pointer;
    29  padding: 5px 10px;
    30  outline: none;
    31  border-radius: 10px;
    32  border: none;
    33}
    34
    35.mark_complete{
    36  background: greenyellow;
    37}
    38
    39.mark_pending{
    40  background: tomato;
    41  color: #ffffff;
    42}

css

Inside the <span class="jsx-3120878690">`src`</span> folder, create three components: <span class="jsx-3120878690">`Items.js`</span>, <span class="jsx-3120878690">`Pending.js`</span>, and <span class="jsx-3120878690">`Completed.js`</span>. As their names suggest, these components will be used for rendering all items, pending items, and completed items, respectively. Have a look at the following boilerplates for reference.

    1import React from 'react'
    2
    3export const Pending = () => {
    4
    5    return (
    6        <div className="pending">
    7            <h1>Pending</h1> 
    8        </div>
    9    )
    10}

jsx

Similarly, you can create <span class="jsx-3120878690">`Completed.js`</span>.

    1import React from 'react'
    2
    3export const Completed = () => {
    4
    5    return (
    6        <div className="completed">
    7            <h1>Completed</h1> 
    8        </div>
    9    )
    10}

jsx

Render both these components inside <span class="jsx-3120878690">`Items.js`</span>.

    1import React from 'react'
    2import { Completed } from './Completed'
    3import { Pending } from './Pending'
    4
    5export const Items = () => {
    6
    7    return (
    8        <div class="items">
    9            <Pending />
    10               <Completed />
    11        </div>
    12    )
    13}

jsx

### Creating the Items Component

As the <span class="jsx-3120878690">`Items Component`</span> is the parent component for both <span class="jsx-3120878690">`Pending.js`</span> and <span class="jsx-3120878690">`Completed.js`</span>, it will need a state to store all the items and a method that will move items from one component to another. First, create a piece of state to store the items or tasks with dummy data, as shown.

    1import React,{useState,useEffect} from 'react'
    2import { Completed } from './Completed'
    3import { Pending } from './Pending'
    4
    5export const Items = () => {
    6    const [items,setItems]=useState([
    7        {
    8            id: 1,
    9            title:'Manage ORM for client XYZ',
    10            status:'Pending'
    11        },
    12        {
    13            id: 2,
    14            title:'Review Summer Intern project report',
    15            status:'Pending'
    16        },
    17        {
    18            id: 3,
    19            title:'Host Landing Page for Gerry Pizza Shop',
    20            status:'Pending'
    21        },
    22        {
    23            id: 4,
    24            title:'Release Junior Developer payment',
    25            status:'Completed'
    26        },
    27        {
    28            id: 5,
    29            title:'Discuss Digital Marketing requirements ',
    30            status:'Completed'
    31        },
    32        {
    33            id: 6,
    34            title:'Discuss technology budget with CTO',
    35            status:'Pending'
    36        }
    37    ])
    38    return (
    39        <div class="items">
    40           <Pending/>
    41           <Completed/>
    42        </div>
    43    )
    44}

jsx

Every item is an object that consists of several properties, including a <span class="jsx-3120878690">`status`</span> property. The <span class="jsx-3120878690">`status`</span> property is used to indicate the component in which this item lies. For instance, if the status of an item says <span class="jsx-3120878690">`Pending`</span>, it will be rendered inside the <span class="jsx-3120878690">`Pending`</span> component, and you can move it to the <span class="jsx-3120878690">`Completed`</span> component. Thus, moving an item from one component to another simply means changing the <span class="jsx-3120878690">`status`</span> property for that particular item.

Create a method that takes in an <span class="jsx-3120878690">`id`</span> and <span class="jsx-3120878690">`newStatus`</span> for that item. Loop through all the <span class="jsx-3120878690">`items`</span> and find the item to update using the <span class="jsx-3120878690">`id`</span> passed to this method, and change its status to <span class="jsx-3120878690">`newStatus`</span>.

    1const updateStatus=(id,newStatus)=>{
    2        let allItems=items;
    3        allItems=allItems.map(item=>{
    4            if(item.id===id){
    5                console.log('in here')
    6                item.status=newStatus;
    7            }
    8        return item
    9        })
    10        setItems(allItems)
    11  }

javascript

Finally, pass both <span class="jsx-3120878690">`items`</span> and <span class="jsx-3120878690">`updateStatus`</span> to the <span class="jsx-3120878690">`Completed`</span> and <span class="jsx-3120878690">`Pending`</span> components.

    1<Pending items={items} setItems={setItems} updateStatus={updateStatus}/>
    2<Completed items={items} setItems={setItems} updateStatus={updateStatus}/>

jsx

Now both the above components can call the <span class="jsx-3120878690">`updateStatus`</span> method by accessing it through props. You can have a look at the entire <span class="jsx-3120878690">`Items`</span> component below.

    1import React,{useState,useEffect} from 'react'
    2import { Completed } from './Completed'
    3import { Pending } from './Pending'
    4
    5export const Items = () => {
    6    const [items,setItems]=useState([
    7        {
    8            id: 1,
    9            title:'Manage ORM for client XYZ',
    10            status:'Pending'
    11        },
    12        {
    13            id: 2,
    14            title:'Review Summer Intern project report',
    15            status:'Pending'
    16        },
    17        {
    18            id: 3,
    19            title:'Host Landing Page for Gerry Pizza Shop',
    20            status:'Pending'
    21        },
    22        {
    23            id: 4,
    24            title:'Release Junior Developer payment',
    25            status:'Completed'
    26        },
    27        {
    28            id: 5,
    29            title:'Discuss Digital Marketing requirements ',
    30            status:'Completed'
    31        },
    32        {
    33            id: 6,
    34            title:'Discuss technology budget with CTO',
    35            status:'Pending'
    36        }
    37    ])
    38    const updateStatus=(id,newStatus)=>{
    39        let allItems=items;
    40        allItems=allItems.map(item=>{
    41            if(item.id===id){
    42                console.log('in here')
    43                item.status=newStatus;
    44            }
    45        return item
    46        })
    47        setItems(allItems)
    48    }
    49    return (
    50        <div class="items">
    51           <Pending items={items} setItems={setItems} updateStatus={updateStatus}/>
    52           <Completed items={items} setItems={setItems} updateStatus={updateStatus}/>
    53        </div>
    54    )
    55}

jsx

### Moving Items by Calling updateStatus()

The final step is to consume the props from the <span class="jsx-3120878690">`Items`</span> component inside the <span class="jsx-3120878690">`Pending`</span> and <span class="jsx-3120878690">`Completed`</span> components to render the list of items and fire the <span class="jsx-3120878690">`updateStatus()`</span> for each item, moving that item from its current component to the next component. You can *destructure* <span class="jsx-3120878690">`items`</span> and <span class="jsx-3120878690">`updateStatus()`</span> directly from props and loop through them, as shown below. Attach an <span class="jsx-3120878690">`onClick()`</span> event to the **Mark Complete** button, and pass in the current item <span class="jsx-3120878690">`id`</span> and new status <span class="jsx-3120878690">`Completed`</span> as parameters. Inside this component, only render the item having the status <span class="jsx-3120878690">`Pending`</span>.

    1import React from 'react'
    2
    3export const Pending = ({items,setItems,updateStatus}) => {
    4
    5    return (
    6        <div className="pending">
    7            <h1>Pending</h1>
    8
    9                {
    10                    items && items.map(item=>{
    11                        if(item && item.status==='Pending')
    12                        return <><p className="item" key={item.id}>{item.title} <button  className="mark_complete" key={item.id} onClick={()=>{updateStatus(item.id,'Completed')}}>Mark Complete</button></p></>
    13                    })
    14                }
    15 
    16        </div>
    17    )
    18}

jsx

Similarly, you can create the <span class="jsx-3120878690">`Completed`</span> component and pass in <span class="jsx-3120878690">`Pending`</span> as the second parameter to the <span class="jsx-3120878690">`updateStatus()`</span> method. Here you only need to render the item having the status <span class="jsx-3120878690">`Completed`</span>.

    1import React from 'react'
    2
    3export const Completed = ({items,setItems,updateStatus}) => {
    4    return (
    5        <div className="completed">
    6            <h1>Completed</h1>
    7            {
    8                    items && items.map(item=>{
    9                        if(item && item.status==='Completed')
    10                        return <><p className="item" key={item.id}>{item.title} <button className="mark_pending" key={item.id} onClick={()=>{updateStatus(item.id,'Pending')}}>Mark Pending</button></p></>
    11                    })
    12                }
    13 
    14        </div>
    15    )
    16}

jsx

When you click the buttons from the list in the card, the corresponding item's status is changed through <span class="jsx-3120878690">`props`</span>, causing the <span class="jsx-3120878690">`Items`</span> component to *re-render*. Since both the <span class="jsx-3120878690">`Completed`</span> and <span class="jsx-3120878690">`Pending`</span> components\` also re-render, the item renders inside the other component on the DOM and it seems that the item has moved from one component to another.

Conclusion
----------

You can use the example demonstrated in this guide for a variety of use cases, such as passing a username from one component to another in a multi-step signup form. Usually, data or items that are shared between two or more components only *seem* to be owned by them, but in reality they are owned by the parent component. You can explore libraries like React-Router to pass items or data via your router or Context API and Redux to build a global state and move items by dispatching actions. This type of pattern is preferred for large and complex apps to avoid hefty prop drilling.

If you have any questions regarding this guide, feel free to ask me at [Codealphabet](https://codealphabet.com/contact).

13

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)
