<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/jake-trent-v1.jpg" alt="Author avatar" class="jsx-3841407315" />

Jake Trent

Re-render a React Component on Window Resize
============================================

### Jake Trent

-   Oct 20, 2020
-   6 Min read
-   157,195 Views

-   Oct 20, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">6 Min</span> read
-   157,195 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1=""> React</span>

Introduction

238

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-listenforresize" class="menu-link">Listen for Resize</a>
-   <a href="#module-rerenderonresize" class="menu-link">Re-render on Resize</a>
-   <a href="#module-cleanuplisteners" class="menu-link">Cleanup Listeners</a>
-   <a href="#module-resizinglessoften" class="menu-link">Resizing Less Often</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

Most of the time, we attempt to create [React](https://reactjs.org/) apps that have flexible UIs, responding to the available visual space. Sometimes, however, this is neither possible or practical. In such instances, it can be useful to re-render a React component explicitly when the window or viewport size changes.

Listen for Resize
-----------------

React doesn't have a resize event baked into it, but we can listen to the native browser <span class="jsx-3120878690">`window`</span> [resize](https://developer.mozilla.org/en-US/docs/Web/API/Window/resize_event) event from within our React component:

    1import React from 'react'
    2function MyComponent() {
    3  React.useEffect(() => {
    4    function handleResize() {
    5      console.log('resized to: ', window.innerWidth, 'x', window.innerHeight)
    6    
    7}
    8
    9    window.addEventListener('resize', handleResize)
    10  })
    11  return <div>w00t!</div>
    12}

javascript

This code will simply listen for the window resize event and console log something like "resized to: 1024 x 768".

Re-render on Resize
-------------------

But the above code will not yet re-render anything when the resize event is detected. We still have to tell React itself that something has changed in order to trigger a re-render.

Under normal conditions, React will re-render a component when its props or state changes. To trigger a re-render of <span class="jsx-3120878690">`MyComponent`</span> in the example, we'll set internal state on the component when the event is detected:

    1import React from 'react'
    2function MyComponent() {
    3  const [dimensions, setDimensions] = React.useState({ 
    4    height: window.innerHeight,
    5    width: window.innerWidth
    6  })
    7  React.useEffect(() => {
    8    function handleResize() {
    9      setDimensions({
    10        height: window.innerHeight,
    11        width: window.innerWidth
    12      })
    13    
    14}
    15
    16    window.addEventListener('resize', handleResize)
    17  })
    18  return <div>Rendered at {dimensions.width} x {dimensions.height}</div>
    19}

javascript

Now we have set up some internal state, <span class="jsx-3120878690">`dimensions`</span>, that has height and width properties. Inside <span class="jsx-3120878690">`handleResize`</span>, we no longer simply <span class="jsx-3120878690">`console.log`</span>, but instead set new state when the resize is detected, using <span class="jsx-3120878690">`setDimensions`</span>. If we only cared about height or width resizes exclusively, we could track only what we needed.

Additionally, to show that a re-render is actually occurring, we've changed the output to print something like "Rendered at 1024 x 768".

Cleanup Listeners
-----------------

When adding an event listener, such as we are for the resize event, we should make sure to clean up after ourselves. In the example so far, we haven't, and that could cause our app problems later.

React executes components multiple times, whenever it senses the need. And in each re-render, <span class="jsx-3120878690">`useEffect`</span> is going to be called again. This will create <span class="jsx-3120878690">`n`</span> new event bindings of <span class="jsx-3120878690">`handleResize`</span> to the resize event. If this component is re-rendered often, this could create a serious memory leak in our program. We only ever need or want one event listener. If we always clean up established event listeners before creating new ones, we'll ensure a single listener.

React gives us a way to do this with <span class="jsx-3120878690">`useEffect`</span>. When passing a function to <span class="jsx-3120878690">`useEffect`</span>, if *that* function also returns a function, that returned function will be called to perform any needed cleanup. We can put our <span class="jsx-3120878690">`removeEventListener`</span> code there:

    1import React from 'react'
    2function MyComponent() {
    3  const [dimensions, setDimensions] = React.useState({ 
    4    height: window.innerHeight,
    5    width: window.innerWidth
    6  })
    7  React.useEffect(() => {
    8    function handleResize() {
    9      setDimensions({
    10        height: window.innerHeight,
    11        width: window.innerWidth
    12      })
    13    
    14}
    15
    16    window.addEventListener('resize', handleResize)
    17
    18    return _ => {
    19      window.removeEventListener('resize', handleResize)
    20    
    21}
    22  })
    23  return <div>Rendered at {dimensions.width} x {dimensions.height}</div>
    24}

javascript

Now we're cleaned up nice and responsibly.

Resizing Less Often
-------------------

Currently, our example code is set up to call <span class="jsx-3120878690">`handleResize`</span> as often as the window resizes. We're setting state and re-rendering for every single pixel change as often as the event loop will let us.

But what if there's a good reason to handling the resizing less often than that? We might want to be less aggressive in our re-rendering for performance reasons, such as in the case of a slow or expensive-to-render component.

In such a case, we can *debounce* the resize handling and thus the re-rendering. This will mean to throttle or wait between calls to our <span class="jsx-3120878690">`handleResize`</span> function. There are solid debounce implementations. Let's add a short and simple one to our example:

    1import React from 'react'
    2
    3function debounce(fn, ms) {
    4  let timer
    5  return _ => {
    6    clearTimeout(timer)
    7    timer = setTimeout(_ => {
    8      timer = null
    9      fn.apply(this, arguments)
    10    }, ms)
    11  };
    12}
    13
    14function MyComponent() {
    15  const [dimensions, setDimensions] = React.useState({ 
    16    height: window.innerHeight,
    17    width: window.innerWidth
    18  })
    19  React.useEffect(() => {
    20    const debouncedHandleResize = debounce(function handleResize() {
    21      setDimensions({
    22        height: window.innerHeight,
    23        width: window.innerWidth
    24      })
    25    }, 1000)
    26
    27    window.addEventListener('resize', debouncedHandleResize)
    28
    29    return _ => {
    30      window.removeEventListener('resize', debouncedHandleResize)
    31    
    32}
    33  })
    34  return <div>Rendered at {dimensions.width} x {dimensions.height}</div>
    35}

javascript

Note that we wrap <span class="jsx-3120878690">`handleResize`</span> in a <span class="jsx-3120878690">`debounce()`</span> call and bind the new function that it returns to the <span class="jsx-3120878690">`debouncedHandleResize`</span> variable. Then we use this variable instead in both the event listener setup and cleanup.

The <span class="jsx-3120878690">`debounce()`</span> call has as its second parameter 1000ms, meaning that we are ensuring the <span class="jsx-3120878690">`handleResize`</span> code is called a maximum of once per second.

Conclusion
----------

Bringing together the ability to listen to the native resize event, clean up after those event bindings, and control how often the event handler runs, we can now confidently re-render our React component in response to any viewport resize event.

To see this code in action, check out this [running example](https://codesandbox.io/s/condescending-https-z6fmh).

238

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)
