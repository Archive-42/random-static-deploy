<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/9be54a1d-e543-404c-8736-beb1adf2cc26.jpg" alt="Author avatar" class="jsx-3841407315" />

Kimaru Thagana

Handling Tabs Using Page URLs and React Router Doms
===================================================

### Kimaru Thagana

-   Sep 29, 2020
-   13 Min read
-   16,090 Views

-   Sep 29, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">13 Min</span> read
-   16,090 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Front End Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Client-side Frameworks</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">React</span>

Introduction

30

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-setup" class="menu-link">Setup</a>
-   <a href="#module-development" class="menu-link">Development</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

Tabs are critical elements for grouping similar data in web apps. However, most implementations of tabs in React use React state to maintain the active tab. This has the limitations of:

-   Inability to maintain the active tab on refreshing the page
-   A lot hassle to redirect to a specific tab

Learn how to maintain your active tab by using URL parameters and leveraging React Router Dom to overcoming these limitations.

This guide assumes that you are familiar with React, React Hooks, React Router Dom, Bootstrap, and Reactstrap.

Setup
-----

Setup is split into two steps:

-   Setting Up the URL-Managed-Tabs React App
-   Installing Reactstrap

### Setting Up the URL-Managed-Tabs React App

Use Create-React-App, a scaffold that lets you create React apps with no build configurations.

Ensure you have <span class="jsx-3120878690">`create-react-app`</span> installed on your machine. If not, you can install it by running the following:

    1npm install -g create-react-app

bash

Once it is installed, to create the app, run the following:

    1npx create-react-app url-managed-tabs

bash

The above command creates a React app with the name <span class="jsx-3120878690">`url-managed-tabs`</span>.

Navigate to your project's root directory.

    1cd url-managed-tabs

bash

Your folder structure should look like this:

    1url-managed-tabs/    
    2    node_modules/
    3    public/
    4    src/   
    5      App.css
    6        App.js
    7        App.test.js
    8        index.css
    9        index.js
    10        logo.svg
    11        serviceWorker.js
    12        setupTests.js
    13    package.json
    14    README.md
    15    yarn.lock

To start your app, run the following:

    1yarn start

bash

### Install Reactstrap

First, install bootstrap, a pre-requisite for the Reactstrap package.

    1npm install --save bootstrap

bash

Then install the Reactstrap package.

    1npm install --save reactstrap

bash

Import Bootstrap CSS in the <span class="jsx-3120878690">`src/index.js`</span> file.

    1import 'bootstrap/dist/css/bootstrap.min.css';

jsx

Development
-----------

Development will be split into the following steps:

-   Create the Tabs
-   Install React-Router-Dom
-   Create a Route with an Optional Parameter using React Router Dom
-   Refactor the Tabs to Use the URL active\_page Parameter

### Create the Tabs

Open the App.js file. Clear everything inside.

Then, create an object called <span class="jsx-3120878690">`tabs`</span>, defining the title and content of all the tabs.

    1import React from 'react';
    2import {Row, Col} from 'reactstrap';
    3
    4function App() {
    5    const tabs = {
    6            "draft": {
    7                title: "Draft",
    8                content: (
    9                    <Row className="p-2">
    10                        <Col sm="12" className="p-2">
    11                            <h4 className="text-info">Draft Tasks</h4>
    12                        </Col>
    13                    </Row>
    14                )
    15            },
    16            "in_progress": {
    17                title: "In Progress",
    18                content: (
    19                    <Row className="p-2">
    20                        <Col sm="12" className="p-2">
    21                            <h4 className="text-primary">In Progress Tasks</h4>
    22                        </Col>
    23                    </Row>
    24                )
    25            },
    26            "completed": {
    27                title: "Completed",
    28                content: (
    29                    <Row className="p-2">
    30                        <Col sm="12" className="p-2">
    31                            <h4 className="text-success">Completed Tasks</h4>
    32                        </Col>
    33                    </Row>
    34                )
    35            }
    36        }
    37
    38
    39    return (
    40        <React.Fragment/>
    41    );
    42}
    43
    44export default App;

jsx

Create the tabs by iterating through the tabs object. Use <span class="jsx-3120878690">`useState`</span> React hook to add <span class="jsx-3120878690">`activeTab`</span> property to the React State of the <span class="jsx-3120878690">`App`</span> Component. Initialize the <span class="jsx-3120878690">`activeTab`</span> property with your preferred tab property name, in this case, <span class="jsx-3120878690">`in_progress`</span>. Define <span class="jsx-3120878690">`toggle`</span> function to handle the change of activeTab on clicking the NavLinks.

    1import React from 'react';
    2import {Row, Col} from 'reactstrap';
    3
    4function App() {
    5    const tabs = {
    6        "draft": {
    7            title: "Draft",
    8            content: (
    9                <Row className="p-2">
    10                    <Col sm="12" className="p-2">
    11                        <h4 className="text-info">Draft Tasks</h4>
    12                    </Col>
    13                </Row>
    14            )
    15        },
    16        "in_progress": {
    17            title: "In Progress",
    18            content: (
    19                <Row className="p-2">
    20                    <Col sm="12" className="p-2">
    21                        <h4 className="text-primary">In Progress Tasks</h4>
    22                    </Col>
    23                </Row>
    24            )
    25        },
    26        "completed": {
    27            title: "Completed",
    28            content: (
    29                <Row className="p-2">
    30                    <Col sm="12" className="p-2">
    31                        <h4 className="text-success">Completed Tasks</h4>
    32                    </Col>
    33                </Row>
    34            )
    35        }
    36    }
    37
    38    const [activeTab, setActiveTab] = useState('in_progress');
    39    
    40    const toggle = tab => {
    41        if (activeTab !== tab) setActiveTab(tab);
    42    }
    43
    44    return (
    45        <div className="row p-4">
    46            <div className="col-lg-12">
    47                <h2 className="mb-4">Tasks</h2>
    48
    49                <Nav tabs>
    50                    {
    51                        Object.entries(tabs).map((tab) => (
    52                            <NavItem key={tab[0]}>
    53                                <NavLink
    54                                    className={activeTab === tab[0] ? "active" : ""}
    55                                    onClick={() => {
    56                                        toggle(tab[0]);
    57                                    }}
    58                                    role="button"
    59                                >
    60                                    {tab[1].title}
    61                                </NavLink>
    62                            </NavItem>
    63                        ))
    64                    }
    65                </Nav>
    66
    67                <TabContent activeTab={activeTab}>
    68                    {
    69                        Object.entries(tabs).map((tab) => (
    70                            <TabPane key={tab[0]} tabId={tab[0]}>
    71                                {tab[1].content}
    72                            </TabPane>
    73                        ))
    74                    }
    75                </TabContent>
    76            </div>
    77        </div>
    78    );
    79}
    80
    81export default App;

jsx

### Install React Router Dom

    1npm install --save react-router-dom

bash

React Router is a routing library for React. React Router Dom is the dom binding package for React Router.

### Create a Route with an Optional Parameter Using React Router Dom

Instead of just loading the <span class="jsx-3120878690">`App`</span> component directly in the <span class="jsx-3120878690">`index.js`</span>, define a route for the <span class="jsx-3120878690">`App`</span> component.

Change the <span class="jsx-3120878690">`index.js`</span> to this:

    1import React from 'react';
    2import ReactDOM from 'react-dom';
    3import './index.css';
    4import 'bootstrap/dist/css/bootstrap.min.css';
    5import App from './App';
    6import * as serviceWorker from './serviceWorker';
    7import {BrowserRouter, Switch, Route} from "react-router-dom";
    8
    9ReactDOM.render(
    10  <React.StrictMode>
    11      <BrowserRouter>
    12          <Switch>
    13              <Route path="/:active_tab?" component={App}/>
    14          </Switch>
    15      </BrowserRouter>
    16  </React.StrictMode>,
    17  document.getElementById('root')
    18);
    19
    20// If you want your app to work offline and load faster, you can change
    21// unregister() to register() below. Note this comes with some pitfalls.
    22// Learn more about service workers: https://bit.ly/CRA-PWA
    23serviceWorker.unregister();

jsx

<span class="jsx-3120878690">`/:active_tab?`</span> means that whenever the route on the browser is <span class="jsx-3120878690">`/`</span> then the component to be loaded is <span class="jsx-3120878690">`App`</span>. The route can also take a parameter, though this is not mandatory. For example:

-   <span class="jsx-3120878690">`/`</span> - the **active\_tab** parameter will be *undefined*
-   <span class="jsx-3120878690">`/in_progress`</span> - the **active\_tab** parameter will be *in\_progress*

So let's take advantage of this and ensure we can maintain our active tabs even on refreshing the page.

### Refactor the Tabs to Use the URL active\_page parameter

Start by creating a variable to hold the default active tab.

    1```jsx
    2const DEFAULT_ACTIVE_TAB = "in_progress";
    3```

The URL Parameter can be accessed using React Router Dom's <span class="jsx-3120878690">`useParams`</span> hook:

    1```jsx
    2const {active_tab} = useParams();
    3```

Do away with <span class="jsx-3120878690">`activeTab`</span> state variable. Initialize history variable with React Router Dom's <span class="jsx-3120878690">`useHistory`</span> hook, which is used for navigation.

    1```jsx
    2const history = useHistory();
    3```

Default the <span class="jsx-3120878690">`active_tab`</span> parameter to the set <span class="jsx-3120878690">`DEFAULT_ACTIVE_TAB`</span> if not <span class="jsx-3120878690">`active_tab`</span> is specified on the URL.

    1```jsx
    2useEffect(() => {
    3    if(!active_tab){
    4        history.push(`/${DEFAULT_ACTIVE_TAB}`);
    5    }
    6}, []);
    7```

Refactor the <span class="jsx-3120878690">`toggle`</span> function to the route to the specified tab on click of a NavLink, thereby updating the <span class="jsx-3120878690">`active_tab`</span> URL parameter.

    1```jsx
    2const toggle = tab => {
    3 if (active_tab !== tab) {
    4      history.push(`/${tab}`);
    5 }
    6}
    7```

Refactor all initial instances of <span class="jsx-3120878690">`activeTab`</span> to <span class="jsx-3120878690">`active_tab`</span>. The final code should look like this:

    1```jsx
    2import React, {useEffect} from 'react';
    3import {Col, Nav, NavItem, NavLink, Row, TabContent, TabPane} from 'reactstrap';
    4import {useParams, useHistory} from "react-router-dom"
    5
    6function App() {
    7    const DEFAULT_ACTIVE_TAB = "in_progress";
    8    const tabs = {
    9        "draft": {
    10            title: "Draft",
    11            content: (
    12                <Row className="p-2">
    13                    <Col sm="12" className="p-2">
    14                        <h4 className="text-info">Draft Tasks</h4>
    15                    </Col>
    16                </Row>
    17            )
    18        },
    19        "in_progress": {
    20            title: "In Progress",
    21            content: (
    22                <Row className="p-2">
    23                    <Col sm="12" className="p-2">
    24                        <h4 className="text-primary">In Progress Tasks</h4>
    25                    </Col>
    26                </Row>
    27            )
    28        },
    29        "completed": {
    30            title: "Completed",
    31            content: (
    32                <Row className="p-2">
    33                    <Col sm="12" className="p-2">
    34                        <h4 className="text-success">Completed Tasks</h4>
    35                    </Col>
    36                </Row>
    37            )
    38        }
    39    }
    40
    41    const {active_tab} = useParams();
    42    const history = useHistory();
    43    
    44    useEffect(() => {
    45        if(!active_tab){
    46            history.push(`/${DEFAULT_ACTIVE_TAB}`);
    47        }
    48    }, []);
    49
    50    const toggle = tab => {
    51       if (active_tab !== tab) {
    52            history.push(`/${tab}`);
    53       }
    54    }
    55
    56    return (
    57        <div className="row p-4">
    58            <div className="col-lg-12">
    59                <h2 className="mb-4">Tasks</h2>
    60
    61                <Nav tabs>
    62                    {
    63                        Object.entries(tabs).map((tab) => (
    64                            <NavItem key={tab[0]}>
    65                                <NavLink
    66                                    className={active_tab === tab[0] ? "active" : ""}
    67                                    onClick={() => {
    68                                        toggle(tab[0]);
    69                                    }}
    70                                    role="button"
    71                                >
    72                                    {tab[1].title}
    73                                </NavLink>
    74                            </NavItem>
    75                        ))
    76                    }
    77                </Nav>
    78
    79                <TabContent activeTab={active_tab}>
    80                    {
    81                        Object.entries(tabs).map((tab) => (
    82                            <TabPane key={tab[0]} tabId={tab[0]}>
    83                                {tab[1].content}
    84                            </TabPane>
    85                        ))
    86                    }
    87                </TabContent>
    88            </div>
    89        </div>
    90    );
    91}
    92
    93export default App;
    94```

Conclusion
----------

There you have it. The active tab is now maintained using the <span class="jsx-3120878690">`active_tab`</span> URL Parameter. You can now share a link to access a specific tab, e.g., <span class="jsx-3120878690">`/completed`</span>, to redirect to the page with the completed tab active.

You are now familiar with some of the benefits of optional parameters on routes using React Router Dom and how to implement it. The next challenge is to explore other instances where this could be useful in your React apps.

30

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)
