<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/c7859b4f-a0e9-4f74-8559-62f43bdcabea.jpeg" alt="Author avatar" class="jsx-3841407315" />

Gaurav Singhal

Using this.props.dispatch vs. store.dispatch Directly in Redux
==============================================================

### Gaurav Singhal

-   Oct 27, 2020
-   4 Min read
-   8,256 Views

-   Oct 27, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">4 Min</span> read
-   8,256 Views

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
-   <a href="#module-dispatchingactionsinredux" class="menu-link">Dispatching Actions in Redux</a>
-   <a href="#module-storedispatchvsthispropsdispatch" class="menu-link">store.dispatch() vs this.props.dispatch()</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

Dispatching <span class="jsx-3120878690">`actions`</span> in Redux is the fundamental method of updating a Redux store's <span class="jsx-3120878690">`state`</span>. Actions are used to store relevant information for the <span class="jsx-3120878690">`state`</span>, and they reach the store through the <span class="jsx-3120878690">`dispatch()`</span> method available on the <span class="jsx-3120878690">`store`</span> object. You can use either <span class="jsx-3120878690">`store.dispatch()`</span> directly or <span class="jsx-3120878690">`this.props.dispatch()`</span> for dispatching these actions. This guide walks you through the comparison between the two methods to help you understand which method is better and why.

Dispatching Actions in Redux
----------------------------

Actions hold or store information that needs to be passed to the Redux <span class="jsx-3120878690">`store`</span>, and this information is grabbed from the component where the <span class="jsx-3120878690">`action`</span> is dispatched. This means that while your store may hold information pertaining to a number of components, it can be considered an *independent module* in your system. Your components need not know what <span class="jsx-3120878690">`state`</span> they're updating—their prime concern should be dispatching the necessary <span class="jsx-3120878690">`action`</span>. The remaining computation is handled by the <span class="jsx-3120878690">`reducer`</span> and the <span class="jsx-3120878690">`store`</span> itself.

For instance, if you have a <span class="jsx-3120878690">`Profile`</span> component that displays the details of your profile and a <span class="jsx-3120878690">`Navbar`</span> component that opens a popup where you can edit your profile information, the component definition isn't sufficient to figure out that the <span class="jsx-3120878690">`Navbar`</span> component would interact with your store containing the profile details. Your <span class="jsx-3120878690">`store`</span> sits at the top level of your app's hierarchy with the components sitting at the lower level, making it redundant to import it as a lower-level module inside each component.

store.dispatch() vs this.props.dispatch()
-----------------------------------------

Consider the following code where you have a <span class="jsx-3120878690">`store`</span> and and a <span class="jsx-3120878690">`reducer`</span> that dispatches a default action of type <span class="jsx-3120878690">`ADD_USER`</span>. Here, the <span class="jsx-3120878690">`store`</span> directly uses the <span class="jsx-3120878690">`store.dispatch()`</span> method to dispatch an action.

    1import { createStore } from 'redux'
    2const store = createStore(users, null)
    3
    4const addUser=(user)=> {
    5  return {
    6    type: 'ADD_USER',
    7    user: user
    8  }
    9}
    10
    11store.dispatch(addUser(user))

javascript

Now consider a use case where a component in your app needs to dispatch the same action. In this case, your component is unaware of the store it's interacting with, but its direct parent component connects to the store and dispatches an action for the child component using <span class="jsx-3120878690">`this.props.dispatch()`</span>.

    1@connect(store => ({ myStore: store.myStore }))
    2class UsersContainer extends Component {
    3  AddUser = (newUser) => {
    4    this.props.dispatch(type:'ADD_USER', newUser);
    5  }
    6
    7  render() {
    8    return (
    9      <UsersComponent
    10        onAddUser={this.AddUser}
    11      />
    12  }
    13}

javascript

<span class="jsx-3120878690">`UsersComponent`</span> simply fires a function, and its parent component, <span class="jsx-3120878690">`UsersContainer`</span>, dispatches the <span class="jsx-3120878690">`ADD_USER`</span> action using <span class="jsx-3120878690">`this.props.dispatch()`</span>. <span class="jsx-3120878690">`UsersContainer`</span> connects with the <span class="jsx-3120878690">`store`</span>, hence it knows which store it's interacting with. In a practical app, you would have a component tree where deeply nested components would need to interact with a high-level store. Every time you dispatch an action, it's possible that you might want to interact with a different store.

    1@connect(store => ({ myStore: store.myStore }))

javascript

Thus, using the <span class="jsx-3120878690">`connect()`</span> function as shown, <span class="jsx-3120878690">`dispatch()`</span> is passed as a <span class="jsx-3120878690">`prop`</span> to its child components from where the necessary action is dispatched.

Conclusion
----------

It is evident now that <span class="jsx-3120878690">`this.props.dispatch()`</span> is a more logical and better approach to dispatching actions in Redux than using <span class="jsx-3120878690">`store.dispatch()`</span> directly, as it makes sure that your Redux store does not become a *singleton module*. Most of the time, <span class="jsx-3120878690">`dispatch()`</span> is called from within the *store consuming components* and, similar to <span class="jsx-3120878690">`this.props.dispatch()`</span>, you can also dispatch actions by mapping it with props using the <span class="jsx-3120878690">`mapDispatchToProps()`</span> method and passing it to the <span class="jsx-3120878690">`connect()`</span> function for a cleaner syntax. Alternatively, you can explore libraries like Redux Saga and learn more about dispatching *Async actions* in its official documentation.

13

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)
