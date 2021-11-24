<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/c7859b4f-a0e9-4f74-8559-62f43bdcabea.jpeg" alt="Author avatar" class="jsx-3841407315" />

Gaurav Singhal

How to Router Redirect After Login
==================================

### Gaurav Singhal

-   Nov 12, 2020
-   17 Min read
-   200,280 Views

-   Nov 12, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">17 Min</span> read
-   200,280 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1=""> React</span>

Introduction

393

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-loginform" class="menu-link">Login Form</a>
-   <a href="#module-actionsandmiddlewares" class="menu-link">Actions and Middlewares</a>
-   <a href="#module-reducerfunction" class="menu-link">Reducer Function</a>
-   <a href="#module-hocforauthentication" class="menu-link">HOC for Authentication</a>
-   <a href="#module-completesourcecode" class="menu-link">Complete Source Code</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

With the popularity of Redux and React increasing with each passing day, it's a no-brainer to give them the attention they deserve. React uses Redux's state for maintaining state throughout the app. The purpose of the state is to keep your application state synchronized with the Redux store.

In this guide, we are going to learn how to redirect a user after a successful login.. Usually, when we are building web apps, there's a requirement that the user must be logged in to use the app. In that case, we need to take care of the user's identity and manage his authentication token in the application state and redirect the user to protected routes.

For styling this demo, I'll be using <span class="jsx-3120878690">`material-ui`</span>. Please run the following command to add it to your dependencies.

    1npm i @material-ui/core @material-ui/lab

console

Please note that this guide assumes you have a fair understanding of modern ES6 syntax.

Login Form
----------

The login form has two fields: **Email** and **Password**. When the user clicks on the **Submit** button, we will dispatch a <span class="jsx-3120878690">`login`</span> action with the type <span class="jsx-3120878690">`LOGIN`</span> and payload as the form values. To manage the state in the component, I have used React hooks, which is now a default method for managing state in functional components.

    1import React, { useState } from "react";
    2import { TextField, Typography, Button } from "@material-ui/core";
    3import { connect } from "react-redux";
    4import { login } from "../actions/auth";
    5import MuiAlert from "@material-ui/lab/Alert";
    6
    7function Alert(props) {
    8  return <MuiAlert elevation={6} variant="filled" {...props} />;
    9}
    10
    11export default connect(null, { login })(props => {
    12  const [email, setEmail] = useState("");
    13  const [password, setPassword] = useState("");
    14  const [error, setError] = useState("");
    15
    16  const submitForm = () => {
    17    if (email === "" || password === "") {
    18      setError("Fields are required");
    19      return;
    20    }
    21    props.login({ email, password });
    22  };
    23
    24  return (
    25    <form>
    26      <Typography variant="h5" style={{ marginBottom: 8 }}>
    27        Login
    28      </Typography>
    29      <TextField
    30        label="Email"
    31        variant="outlined"
    32        fullWidth
    33        className="form-input"
    34        value={email}
    35        onChange={e => setEmail(e.target.value)}
    36      />
    37      <TextField
    38        label="Password"
    39        variant="outlined"
    40        fullWidth
    41        className="form-input"
    42        type="password"
    43        value={password}
    44        onChange={e => setPassword(e.target.value)}
    45      />
    46      <Button
    47        variant="contained"
    48        color="primary"
    49        fullWidth
    50        className="form-input"
    51        size="large"
    52        onClick={submitForm}
    53      >
    54        Login
    55      </Button>
    56
    57      {error && (
    58        <Alert severity="error" onClick={() => setError(null)}>
    59          {props.error || error}
    60        </Alert>
    61      )}
    62    </form>
    63  );
    64});

jsx

Actions and Middlewares
-----------------------

As in this previous [guide](how-to-abort-request-while-navigating-away-from-the-component-in-react.html), we'll use middleware to handle the network requests to send the login details to our server. Check out the other guide if you are not familiar with middlewares in Redux.

### auth.js

    1export const LOGIN = "LOGIN";
    2export const LOGOUT = "LOGOUT";
    3
    4export const login = user => {
    5  return {
    6    type: LOGIN,
    7    payload: user
    8  };
    9};
    10
    11export const logout = () => {
    12  return {
    13    type: LOGOUT
    14  };
    15};

js

When the <span class="jsx-3120878690">`LOGIN`</span> action is dispatched, we will catch the action in out middleware and dispatch the <span class="jsx-3120878690">`API_REQUEST`</span> action along with the login form values data. If the request is successful, we will dispatch the <span class="jsx-3120878690">`API_SUCCESS`</span> action, and if there is an error, we will dispatch the <span class="jsx-3120878690">`API_ERROR`</span> action.

### app.js

    1import { apiRequest } from "../actions/api";
    2import { LOGIN } from "../actions/auth";
    3
    4const SERVER_URL = `https://61m46.sse.codesandbox.io`;
    5
    6export const appMiddleware = () => next => action => {
    7  next(action);
    8  switch (action.type) {
    9    case LOGIN: {
    10      next(
    11        apiRequest({
    12          url: `${SERVER_URL}/login`,
    13          method: "POST",
    14          data: action.payload
    15        })
    16      );
    17      break;
    18    }
    19    default:
    20      break;
    21  }
    22};

js

Reducer Function
----------------

In the reducer function, we will set the user's <span class="jsx-3120878690">`AUTH`</span> token, which is sent by the server. In a real-world application, the token is saved in the cookie for security reasons, but for simplicity, we are going to store it in local storage. While setting the default state, we check the local storage for whether the user token exists or not.

    1import { SET_LOADER } from "./actions/ui";
    2import { API_SUCCESS, API_ERROR } from "./actions/api";
    3import { LOGOUT } from "./actions/auth";
    4
    5export default (
    6  state = {
    7    isAuthUser: !!localStorage.getItem("user"),
    8    user: JSON.parse(localStorage.getItem("user")) || {},
    9    isLoading: false,
    10    error: null
    11  },
    12  action
    13) => {
    14  switch (action.type) {
    15    case API_SUCCESS:
    16      localStorage.setItem("user", JSON.stringify(action.payload.user));
    17      return { ...state, isAuthUser: true, user: action.payload.user };
    18    case API_ERROR:
    19      return { ...state, error: action.payload };
    20    case SET_LOADER:
    21      return { ...state, isLoading: action.payload };
    22    case LOGOUT:
    23      localStorage.removeItem("user");
    24      return { ...state, isAuthUser: false, user: {} };
    25    default:
    26      return state;
    27  }
    28};

js

HOC for Authentication
----------------------

To authenticate the user across pages, we need to create a higher-order component (HOC) to wrap the <span class="jsx-3120878690">`<Router />`</span> component. You might be thinking, why do we have to authenticate the user for every page? Well, that's because, in a single-page app, we need to maintain the user's session on the client-side.

There are two types of routes when it comes to authentication. One is a guest route, which can only be accessed by guest users, such as the login page or register page. The second is a private route, which can only be accessed by an authenticated user.

If the user is not authenticated, we will redirect to the index page; otherwise, we will redirect to the home page.

    1import React from "react";
    2import { connect } from "react-redux";
    3import { Redirect, Route } from "react-router";
    4
    5const AuthRoute = props => {
    6  const { isAuthUser, type } = props;
    7  if (type === "guest" && isAuthUser) return <Redirect to="/home" />;
    8  else if (type === "private" && !isAuthUser) return <Redirect to="/" />;
    9
    10  return <Route {...props} />;
    11};
    12
    13const mapStateToProps = ({ isAuthUser }) => ({
    14  isAuthUser
    15});
    16
    17export default connect(mapStateToProps)(AuthRoute);

jsx

### Using the  Component

In the <span class="jsx-3120878690">`<App />`</span> component, we will define all the routes in our application. We will use the <span class="jsx-3120878690">`<AuthRoute />`</span> component that we created in the previous section to specify the type of route, whether it is a private or a guest route.

    1export default function App() {
    2  return (
    3    <Provider store={store}>
    4      <Router>
    5        <NavBar />
    6        <div className="container">
    7          <Switch>
    8            <AuthRoute path="/login" type="guest">
    9              <LoginPage />
    10            </AuthRoute>
    11            <AuthRoute path="/home" render={HomePage} type="private" />
    12            <AuthRoute path="/my-account" type="private">
    13              <MyAccount />
    14            </AuthRoute>
    15            <Route path="/" render={IndexPage} />
    16          </Switch>
    17        </div>
    18      </Router>
    19    </Provider>
    20  );
    21}

jsx

Complete Source Code
--------------------

### index.js

<span class="jsx-3120878690">`index.js`</span> will be the entry file of our web application. Here, we will mount the root component to an element, i.e., a <span class="jsx-3120878690">`<div>`</span> with an id of <span class="jsx-3120878690">`root`</span>.

    1import React from "react";
    2import ReactDOM from "react-dom";
    3
    4import App from "./App";
    5
    6const rootElement = document.getElementById("root");
    7ReactDOM.render(<App />, rootElement);

jsx

### App.js

In the <span class="jsx-3120878690">`App.js`</span> file, we have defined the main or the root component, i.e., the <span class="jsx-3120878690">`<App />`</span> component. We will be wrapping all the child components in the <span class="jsx-3120878690">`<Provider />`</span> component from the <span class="jsx-3120878690">`react-redux`</span> library to make the global redux store available throughout the application.

    1import React from "react";
    2import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
    3import "./app.css";
    4import { Provider } from "react-redux";
    5import { applyMiddleware } from "redux";
    6
    7import reducer from "./reducer";
    8import { createStore } from "redux";
    9
    10import NavBar from "./components/Nav";
    11import { Typography, Divider } from "@material-ui/core";
    12
    13import AuthRoute from "./components/AuthRoute";
    14
    15import HomePage from "./pages/HomePage";
    16import LoginPage from "./pages/Login";
    17
    18import { appMiddleware } from "./middlewares/app";
    19import { apiMiddleware } from "./middlewares/core";
    20import MyAccount from "./pages/MyAccount";
    21
    22const createStoreWithMiddleware = applyMiddleware(
    23  appMiddleware,
    24  apiMiddleware
    25)(createStore);
    26
    27const store = createStoreWithMiddleware(reducer);
    28
    29const IndexPage = () => (
    30  <>
    31    <Typography variant="h3">Welcome to the App</Typography>
    32    <Divider style={{ marginTop: 10, marginBottom: 10 }} />
    33    <Typography variant="h6">Feel free to take a look around</Typography>
    34  </>
    35);
    36
    37export default function App() {
    38  return (
    39    <Provider store={store}>
    40      <Router>
    41        <NavBar />
    42        <div className="container">
    43          <Switch>
    44            <AuthRoute path="/home" render={HomePage} type="private" />
    45            <AuthRoute path="/login" type="guest">
    46              <LoginPage />
    47            </AuthRoute>
    48            <AuthRoute path="/my-account" type="private">
    49              <MyAccount />
    50            </AuthRoute>
    51            <Route path="/" render={IndexPage} />
    52          </Switch>
    53        </div>
    54      </Router>
    55    </Provider>
    56  );
    57}

jsx

Notice that we have used the <span class="jsx-3120878690">`<Router />`</span> and <span class="jsx-3120878690">`<Switch />`</span> components from <span class="jsx-3120878690">`react-router-dom`</span> for leveraging client-side routing.

### reducer.js

    1import { SET_LOADER } from "./actions/ui";
    2import { API_SUCCESS, API_ERROR } from "./actions/api";
    3import { LOGOUT } from "./actions/auth";
    4
    5export default (
    6  state = {
    7    isAuthUser: !!localStorage.getItem("user"),
    8    user: JSON.parse(localStorage.getItem("user")) || {},
    9    isLoading: false,
    10    error: null
    11  },
    12  action
    13) => {
    14  switch (action.type) {
    15    case API_SUCCESS:
    16      localStorage.setItem("user", JSON.stringify(action.payload.user));
    17      return { ...state, isAuthUser: true, user: action.payload.user };
    18    case API_ERROR:
    19      return { ...state, error: action.payload };
    20    case SET_LOADER:
    21      return { ...state, isLoading: action.payload };
    22    case LOGOUT:
    23      localStorage.removeItem("user");
    24      return { ...state, isAuthUser: false, user: {} };
    25    default:
    26      return state;
    27  }
    28};

js

**MIDDLEWARES**

We'll be creating two types of redux middlewares: an <span class="jsx-3120878690">`appMiddleware`</span> and a <span class="jsx-3120878690">`coreMiddleware`</span>. The <span class="jsx-3120878690">`appMiddeware`</span> will be responsible for handling the API requests. In this case, we pass the relevant data for the API request through the <span class="jsx-3120878690">`LOGIN`</span> action, and in the <span class="jsx-3120878690">`coreMiddleware`</span>, we catch the <span class="jsx-3120878690">`API_REQUEST`</span> action and make the network request using the <span class="jsx-3120878690">`axios`</span> HTTP library.

### app.js

    1import { apiRequest } from "../actions/api";
    2import { LOGIN } from "../actions/auth";
    3
    4const SERVER_URL = `https://61m46.sse.codesandbox.io`;
    5
    6export const appMiddleware = () => next => action => {
    7  next(action);
    8  switch (action.type) {
    9    case LOGIN: {
    10      next(
    11        apiRequest({
    12          url: `${SERVER_URL}/login`,
    13          method: "POST",
    14          data: action.payload
    15        })
    16      );
    17      break;
    18    }
    19    default:
    20      break;
    21  }
    22};

js

### core.js

    1import axios from "axios";
    2import { API_REQUEST, apiError, apiSuccess } from "../actions/api";
    3import { setLoader } from "../actions/ui";
    4
    5export const apiMiddleware = ({ dispatch }) => next => action => {
    6  next(action);
    7
    8  if (action.type === API_REQUEST) {
    9    dispatch(setLoader(true));
    10    const { url, method, data } = action.meta;
    11    axios({
    12      method,
    13      url,
    14      data
    15    })
    16      .then(({ data }) => dispatch(apiSuccess({ response: data })))
    17      .catch(error => {
    18        console.log(error);
    19        dispatch(apiError({ error: error.response.data }));
    20      });
    21  }
    22};

js

**COMPONENTS**

### AuthRoute.js

The <span class="jsx-3120878690">`<AuthRoute />`</span> component is a higher-order component that wraps the <span class="jsx-3120878690">`<Route />`</span> component of <span class="jsx-3120878690">`react-router`</span> to keep the routes specific to our application as private or public.

    1import React from "react";
    2import { connect } from "react-redux";
    3import { Redirect, Route } from "react-router";
    4
    5const AuthRoute = props => {
    6  const { isAuthUser, type } = props;
    7  if (type === "guest" && isAuthUser) return <Redirect to="/home" />;
    8  else if (type === "private" && !isAuthUser) return <Redirect to="/" />;
    9
    10  return <Route {...props} />;
    11};
    12
    13const mapStateToProps = ({ isAuthUser }) => ({
    14  isAuthUser
    15});
    16
    17export default connect(mapStateToProps)(AuthRoute);

jsx

### Nav.js

In the <span class="jsx-3120878690">`<Navbar />`</span> component, we are merely creating the navigation menu for our application. Notice that I have used the <span class="jsx-3120878690">`<AppBar />`</span> component from <span class="jsx-3120878690">`material-ui`</span> to give it a native look.

    1import React, { Component } from "react";
    2import { Link } from "react-router-dom";
    3import { AppBar, Toolbar, Button, Typography } from "@material-ui/core";
    4import { connect } from "react-redux";
    5
    6import { logout } from "../actions/auth";
    7
    8class NavBar extends Component {
    9  render() {
    10    return (
    11      <AppBar position="static" style={{ display: "flex" }}>
    12        <Toolbar>
    13          <Typography variant="h6">My App</Typography>
    14          <div style={{ marginLeft: "auto" }}>
    15            {this.props.isAuthUser ? (
    16              <>
    17                <Link to="/home">
    18                  <Button color="inherit">Home</Button>
    19                </Link>
    20                <Link to="/my-account">
    21                  <Button color="inherit">My Account</Button>
    22                </Link>
    23                <Button color="inherit" onClick={this.props.logout}>
    24                  Logout
    25                </Button>
    26              </>
    27            ) : (
    28              <Link to="/login">
    29                <Button color="inherit">Login</Button>
    30              </Link>
    31            )}
    32          </div>
    33        </Toolbar>
    34      </AppBar>
    35    );
    36  }
    37}
    38
    39export default connect(({ isAuthUser }) => ({ isAuthUser }), { logout })(
    40  NavBar
    41);

jsx

**PAGES**

### Login.js

In the <span class="jsx-3120878690">`Login.js`</span> file, we are creating the page component that displays the login form. We have used the modern React hooks to leverage state in a functional component. This allows us to make the code more precise and easier to maintain.

    1import React, { useState } from "react";
    2import { TextField, Typography, Button } from "@material-ui/core";
    3import { connect } from "react-redux";
    4import { login } from "../actions/auth";
    5import MuiAlert from "@material-ui/lab/Alert";
    6
    7function Alert(props) {
    8  return <MuiAlert elevation={6} variant="filled" {...props} />;
    9}
    10
    11export default connect(({ isLoading }) => ({ isLoading }), { login })(props => {
    12  const [email, setEmail] = useState("");
    13  const [password, setPassword] = useState("");
    14  const [error, setError] = useState("");
    15
    16  const submitForm = () => {
    17    if (email === "" || password === "") {
    18      setError("Fields are required");
    19      return;
    20    }
    21    props.login({ email, password });
    22  };
    23
    24  return (
    25    <form>
    26      <Typography variant="h5" style={{ marginBottom: 8 }}>
    27        Login
    28      </Typography>
    29      <TextField
    30        label="Email"
    31        variant="outlined"
    32        fullWidth
    33        className="form-input"
    34        value={email}
    35        onChange={e => setEmail(e.target.value)}
    36      />
    37      <TextField
    38        label="Password"
    39        variant="outlined"
    40        fullWidth
    41        className="form-input"
    42        type="password"
    43        value={password}
    44        onChange={e => setPassword(e.target.value)}
    45      />
    46      <Button
    47        variant="contained"
    48        color="primary"
    49        fullWidth
    50        className="form-input"
    51        size="large"
    52        onClick={submitForm}
    53      >
    54        Login
    55      </Button>
    56
    57      {(props.error || error) && (
    58        <Alert severity="error" onClick={() => setError(null)}>
    59          {props.error || error}
    60        </Alert>
    61      )}
    62    </form>
    63  );
    64});

jsx

Conclusion
----------

In this guide, we took a look at how to create a higher-order component to manage the authentication of a user in a single-page app. Securely storing the <span class="jsx-3120878690">`AUTH`</span> token is an essential factor, and although we have used local storage in this guide, it is recommended that you use cookies. Leveraging Redux middlewares to handle API requests is another skill you need to know, as I have stressed in an earlier article.

That's it from this guide. I believe you can now take your React skills to the next level. If you have any queries, feel free to reach out at [Codealphabet](https://codealphabet.com/contact).

393

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)
