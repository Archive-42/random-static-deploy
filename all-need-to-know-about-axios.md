<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/c7859b4f-a0e9-4f74-8559-62f43bdcabea.jpeg" alt="Author avatar" class="jsx-3841407315" />

Gaurav Singhal

All You Need to Know About Axios
================================

### Gaurav Singhal

-   Nov 2, 2020
-   15 Min read
-   93,573 Views

-   Nov 2, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">15 Min</span> read
-   93,573 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1=""> React</span>

Introduction

163

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-makingconcurrenthttprequests" class="menu-link">Making Concurrent HTTP Requests</a>
-   <a href="#module-consumingarraysfromaxiosresponse" class="menu-link">Consuming Arrays from Axios Response</a>
-   <a href="#module-abortingorcancellinganaxiosrequest" class="menu-link">Aborting or Cancelling an Axios Request</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#module-references" class="menu-link">References</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

Like the Fetch API, Axios is a promise-based HTTP client for making requests to external servers from the browser. If you have worked with jQuery, you may already know about its <span class="jsx-3120878690">`$.ajax()`</span> function which has been a popular choice for frontend developers over the native XML HTTP Request (XHR) interface. The Axios library wraps the complex XHR syntax and provides an abstract and declarative way to make requests from the browser as well as in a node environment.

We have already discussed about how we can make HTTP requests using Axios to get data from the server using <span class="jsx-3120878690">`axios.get()`</span> function and post data to the server using <span class="jsx-3120878690">`axios.post()`</span> function in [an earlier guide](#). In this guide, we will take a deeper route and learn more about other cool features Axios provides.

Making Concurrent HTTP Requests
-------------------------------

More often than not, you will come across a scenario where you'll have to make requests from two endpoints for a particular task. Let’s consider that you are working with a CMS REST API and you have to get the current user's data as well as the permissions for that user. You'll probably do something like what is shown below:

    1class User extends Component {
    2    constructor(props) {
    3        super(props);
    4        this.state = {
    5            user: { 
    6                data: {}, 
    7                permissions: {} 
    8            }
    9        };
    10    }
    11
    12    getUserData = async () => {
    13        try {
    14            const {data} = await axios.get(`${ROOT_URL}/profile/${this.props.activeUserId}`);
    15            return data;
    16        } catch (err) {
    17            console.log(err.message);
    18        }
    19    }
    20
    21    getPermissions = async () => {
    22        try {
    23            const {data} = await axios.get(`${ROOT_URL}/permissions/${this.props.activeUserId}`);
    24            return data;    
    25        } catch (err) {
    26            console.log(err.message);
    27        }   
    28    }
    29
    30    async componentDidMount() {
    31        const userData = await this.getUserData();
    32        const userPermissions = await this.getPermissions();
    33        this.setState(
    34            user: {
    35                data: userData,
    36                permissions: userPermissions
    37            }
    38        );
    39    }
    40
    41    render() {
    42        // render the data
    43    }
    44
    45}

jsx

Instead of making the requests twice, we can call the endpoints simultaneously using the <span class="jsx-3120878690">`axios.all()`</span> function.

    1class User extends Component {
    2    // ...
    3
    4    getUserData = () => axios.get(`${ROOT_URL}/profile/${this.props.activeUserId}`);
    5
    6    getPermissions = () => axios.get(`${ROOT_URL}/permissions/${this.props.activeUserId}`);
    7
    8    async componentDidMount() {
    9        try {
    10            const [userData, userPermissions] = await axios.all([ this.getUserData(), this.getPermissions() ]);
    11            this.setState(
    12                user: {
    13                    data: userData.data,
    14                    permissions: userPermissions.data
    15                }
    16            );
    17        }
    18        catch (err) {
    19            console.log(err.message);
    20        }
    21        
    22    }
    23
    24    // ...
    25}

jsx

Note that I have used <span class="jsx-3120878690">`async-await`</span> syntax to make the code more readable, instead of handling the promises with <span class="jsx-3120878690">`.then()`</span> and <span class="jsx-3120878690">`.catch()`</span>. Having said that, it's really up to you which syntax you prefer, both do the same job of handling promises.

<span class="jsx-3120878690">`axios.all()`</span> accepts an array of Axios requests, and returns an array that contains the responses from each Axios request. The problem here is that even if one of the requests fails, by default, all the other requests fail as well and the error from the first failed request will be logged in the <span class="jsx-3120878690">`catch()`</span> block.

To get around this problem, we can simply return null from the <span class="jsx-3120878690">`catch()`</span> block of each Axios request. So, even if one of the requests fail, it will still consider the <span class="jsx-3120878690">`axios.all()`</span> promise to be resolved. The return value from the failed request will be <span class="jsx-3120878690">`null`</span>, hence we need to have additional checks for if the data in the returned array is <span class="jsx-3120878690">`null`</span> or not.

    1class User extends Component {
    2    // ...
    3
    4    getUserData = () => axios.get(`${ROOT_URL}/profile/${this.props.activeUserId}`).catch(err => null);
    5
    6    getPermissions = () => axios.get(`${ROOT_URL}/permissions/${this.props.activeUserId}`).catch(err => null);
    7
    8    async componentDidMount() {
    9        try {
    10            const [userData, userPermissions] = await axios.all([ this.getUserData(), this.getPermissions() ]);
    11            this.setState(
    12                user: {
    13                    data: userData && userData.data,
    14                    permissions: userPermissions && userPermissions.data
    15                }
    16            );
    17        }
    18        catch (err) {
    19            console.log(err.message);
    20        }
    21    }
    22
    23    // ...
    24}

jsx

We can further refactor the above code, as follows:

    1class User extends Component {
    2    constructor(props) {
    3        super(props);
    4        this.state = {
    5            user: { 
    6                data: {}, 
    7                permissions: {} 
    8            }
    9        };
    10    }
    11
    12    async componentDidMount() {
    13        const URLs = [ `${ROOT_URL}/profile/${this.props.activeUserId}`, `${ROOT_URL}/permissions/${this.props.activeUserId}` ];
    14        
    15        const requests = URLs.map(URL => axios.get(URL).catch(err => null));
    16
    17        try {
    18            const [userData, userPermissions] = await axios.all(requests);
    19            this.setState(
    20                user: {
    21                    data: userData && userData.data,
    22                    permissions: userPermissions && userPermissions.data
    23                }
    24            );
    25        }
    26        catch (err) {
    27            console.log(err.message);
    28        }
    29    }
    30
    31    render() {
    32        // render the data
    33    }
    34
    35}

jsx

Consuming Arrays from Axios Response
------------------------------------

APIs often return an array that contains objects of data. For example, when you want to retrieve all posts from your CMS. To consume the array, we have to loop over the response using the <span class="jsx-3120878690">`Array.map()`</span> function which can be done as follows:

    1class Posts extends Component {
    2    constructor(props) {
    3        super(props);
    4        this.state = { posts: [] }
    5    }
    6
    7    async componentDidMount() {
    8        try {
    9            const {data} = await axios.get(`${ROOT_URL}/posts`);
    10            this.setState({
    11                posts: data
    12            })
    13        } catch (err) {
    14            console.log(err.message)
    15        }
    16    }
    17
    18    render() {
    19        return (
    20            <div className="container">
    21            {  this.state.posts && this.state.posts.length !== 0 ?
    22                this.state.posts.map(post => <Card title={post.title}>{post.content}</Card>) :
    23                <Loading/> }
    24            </div>
    25        );
    26    }
    27}

jsx

The <span class="jsx-3120878690">`Array.map()`</span> function iterates over each element of the array and returns a new array; in our case, the array contains JSX elements, the <span class="jsx-3120878690">`<Card />`</span> component. Note that here, I'm using the shorthand version, a more complete implementation is as follows:

    1// ...
    2render() {
    3    return (
    4        <div className="container">
    5        {  this.state.posts && this.state.posts.length !== 0 ?
    6            this.state.posts.map((post, index) => {
    7                    const { title, content } = post;
    8                    return <Card title={title}>{content}</Card>;
    9                }) :
    10            <Loading/> }
    11        </div>
    12    );
    13}
    14//..

jsx

For each element in the array, the <span class="jsx-3120878690">`map()`</span> function provides us with an anonymous function that accepts two arguments, the item itself and an optional index argument which contains the position value of the current item. We can also do some transformation of data before returning it with JSX. For example we can transform the title to uppercase, as follows:

    1// ...
    2this.state.posts.map((post, index) => {
    3    const { title, content } = post;
    4    const transformedTitle = title.toUpperCase();
    5    return <Card title={transformedTitle}>{content}</Card>;
    6}) 
    7//..

jsx

For conditional rendering in JSX, you cannot use an <span class="jsx-3120878690">`if-else`</span> block. Hence, we have used the ternary operators. Also notice that, when we try to run the above code in the browser, we get a warning message in the console which says: **Each child in an array or iterator should have a unique "key" prop.**

The <span class="jsx-3120878690">`key`</span> prop is used by React to keep track of items in an array. In the above example, <span class="jsx-3120878690">`this.state.posts.map()`</span> will result in an array, hence each JSX element must have a key prop associated with it. Not including a <span class="jsx-3120878690">`key`</span> prop will lead to unexpected results and bugs.

In our case, if we do not specify the <span class="jsx-3120878690">`key`</span> prop in our <span class="jsx-3120878690">`<Card />`</span> component, React wouldn't know how to keep track of the posts and, hence, when the state changes it would re-render the whole array again instead of updating the changes. This is undesirable because it will affect the performance of the application. Therefore, it's important to have at least one unique key value (in our case, post id) for array item.

    1//...
    2    this.state.posts.map((post, index) => {
    3        const { id, title, content } = post;
    4        return <Card key={id} title={title}>{content}</Card>;
    5    })
    6//...

jsx

Aborting or Cancelling an Axios Request
---------------------------------------

You can also cancel or abort a request, if you no longer require the data. To cancel a request, we need to create a cancel token using the <span class="jsx-3120878690">`CancelToken.source()`</span> factory method. Let’s say that we want to cancel the request when the user navigates from the current page to another page, we can write something as follows:

    1const NavBar = props => (
    2    <Nav>
    3        <NavItem onClick={() => props.navigate('/home') }> Home </NavItem>
    4        <NavItem onClick={() => props.navigate('/about') }> About </NavItem>
    5        <NavItem onClick={() => props.navigate('/contact') }> Contact </NavItem>
    6    </Nav>
    7)
    8
    9class Posts extends Component {
    10    constructor(props) {
    11        super(props);
    12        this.state = { posts: [] }
    13    }
    14
    15    navigate = url => {
    16        // cancel the request
    17        this.source.cancel('User navigated to different page');
    18
    19        // assuming we are using React-Router
    20        this.props.history.push(url);
    21    }
    22
    23    async componentDidMount() {
    24        const CancelToken = axios.CancelToken;
    25        // create the source
    26        this.source = CancelToken.source();
    27        try {
    28            const {data} = await axios.get(`${ROOT_URL}/posts`, {
    29                cancelToken: this.source.token
    30            });
    31            this.setState({
    32                posts: data
    33            })
    34        } catch (err) {
    35            // check if the request was cancelled
    36            if(axios.isCancel(err)) {
    37                console.log(err.message);
    38            }
    39            console.log(err.message)
    40        }
    41    }
    42
    43    render() {
    44        return (
    45            <div className="container">
    46            <NavBar navigate={this.navigate}/>
    47            {  this.state.posts && this.state.posts.length !== 0 ?
    48                this.state.posts.map(post => <Card key={post.id} title={post.title}>{post.content}</Card>) :
    49                <Loading/> }
    50            </div>
    51        );
    52    }
    53}

jsx

The <span class="jsx-3120878690">`CancelToken.source`</span> factory provides us with two main requirements for cancelling the Axios request, the cancel token and the <span class="jsx-3120878690">`cancel()`</span> function. We need to pass the cancel token as a config to the <span class="jsx-3120878690">`axios.get()`</span> function and call the <span class="jsx-3120878690">`cancel()`</span> function whenever we need to cancel the previous Axios request. We can use the same cancel token for multiple Axios requests.

We can also create a cancel token by passing an <span class="jsx-3120878690">`executor()`</span> function to the <span class="jsx-3120878690">`CancelToken`</span> constructor.

    1navigate = url => {
    2    this.cancelRequest && this.cancelRequest('User navigated to different page');
    3
    4    // assuming we are using React-Router
    5    this.props.history.push(url);
    6}
    7
    8async componentDidMount() {
    9    const CancelToken = axios.CancelToken;
    10    try {
    11        const {data} = await axios.get(`${ROOT_URL}/posts`, {
    12            cancelToken: new CancelToken(function executor(c) {
    13                this.cancelRequest = c;
    14            })
    15        });
    16        this.setState({
    17            posts: data
    18        })
    19    } catch (err) {
    20        if(axios.isCancel(err)) {
    21            console.log(err.message);
    22        }
    23        console.log(err.message);
    24    }
    25}

jsx

Let’s check out another use case for cancelling the request. Consider the scenario where we have a search component that retrieves the results from the search API. As the user types in the input field, we need to cancel the previous axios request.

    1class Search extends Component {
    2    constructor(props) {
    3        super(props);
    4        this.state = { value: null, results: [] };
    5    }
    6
    7    search = async () => {
    8        const CancelToken = axios.CancelToken;
    9        try {
    10        const {data} = await axios.get(`${ROOT_URL}/search/q=${this.state.value}`, {
    11            cancelToken: new CancelToken(function executor(c) {
    12                this.cancelRequest = c;
    13            });
    14        });
    15        } catch (err) {
    16            if(axios.isCancel(thrown)) {
    17                console.log(thrown.message);
    18            }
    19            console.log(err.message)
    20        }
    21    }
    22
    23    handleChange = e => {
    24        this.cancelRequest && this.cancelRequest();
    25        if(e.target.value !== "") {
    26            this.setState({ value: e.target.value }, async () => await this.search());
    27        }
    28    }
    29
    30    render() {
    31        return <input type="text" onChange={this.handleChange} value={this.state.value}/>
    32    }
    33}

jsx

Here, we are cancelling the request when the value of the input field changes. An important point to note in the above code is that we are passing a callback as a second parameter to the <span class="jsx-3120878690">`setState()`</span> function. This is because the state does not change immediately and, hence, to avoid any unexpected outcomes, we are calling the <span class="jsx-3120878690">`search()`</span> function in the callback instead of calling it directly inside the <span class="jsx-3120878690">`handleChange()`</span> method. In a more real-world use case, the search input would be debounced but, for brevity purposes, I'm not including it here.

Conclusion
----------

In this guide, we looked up various important use cases of Axios and how it's really a great library for making HTTP requests in React (or any other JavaScript Framework like Vue). I hope you had enough of Axios today, and do checkout the Axios documentation that will be linked in the references.

Please follow my other React guides to learn more. If you have any queries, feel free to ask at [Codealphabet](https://www.codealphabet.com/contact)

References
----------

[Axios documentation](https://github.com/axios/axios)

163

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)
