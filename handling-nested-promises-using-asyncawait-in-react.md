<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/b80bbd58-40e1-4db4-a8e5-12bb0fecc089.png" alt="Author avatar" class="jsx-3841407315" />

Zachary Bennett

Handling Nested Promises Using Async/Await in React
===================================================

### Zachary Bennett

-   Sep 25, 2020
-   6 Min read
-   18,584 Views

-   Sep 25, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">6 Min</span> read
-   18,584 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Front End Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Client-side Frameworks</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">React</span>

Introduction

9

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-problemoverviewnestedpromises" class="menu-link">Problem Overview: Nested Promises</a>
-   <a href="#module-interimsolutionpromisechaining" class="menu-link">Interim Solution: Promise Chaining</a>
-   <a href="#module-theoptimalsolutionasyncawait" class="menu-link">The Optimal Solution: Async/Await</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

Asynchronous code always carries cognitive overhead with it. It may be that the human mind is used to thinking synchronously and so trying to make sense of asynchronous code can seem daunting. There have been many constructs throughout the years that try to mitigate this complexity. For a long time, the only way to model asynchronicity in JavaScript code was via callbacks. The problem with callbacks was that they left a trail of "spaghetti" code through your application—you may be familiar with the term "callback hell".

Modern JavaScript introduced a new way of modeling asynchronous code: Promises. Promises gave JavaScript and React developers the ability to write asynchronous code without callbacks—however, it is still easy to nest promises in the old style, and this can lead to hard-to-read code.

The new async/await keywords introduced into modern JavaScript aim to solve this problem by providing "syntactic sugar" on top of promises. In this guide, you will learn how to take advantage of async/await in order to simplify nested promises in your React app. You will see how you can not only cut the amount of asynchronous code you write in half but also remove most of the mental complexity that is involved. You will see how async/await syntax allows you to reason about asynchronous code in a synchronous manner.

Let's get started.

Problem Overview: Nested Promises
---------------------------------

It is not uncommon to see code written in the following fashion. Below, you can see some typical asynchronous code that is using nested promises in order to make successive HTTP requests to get "fish and chips". Most of the time, the reason you will see code written like this is that often it is your first instinct in writing asynchronous code.

    1// my-component.jsx
    2
    3// We have to get chips after we get fish...
    4getFishAndChips = () => {
    5    fetch(this.fishApiUrl) // Request fish
    6        .then(fishRes => {
    7            fishRes.json().then(fish => {
    8                this.fish = fish;
    9
    10                const fishIds = fish.map(fish => fish.id);
    11
    12                fetch( // Request chips using fish ids
    13                        this.chipsApiUrl,
    14                        {
    15                            method: 'POST',
    16                            body: JSON.stringify({ fishIds })
    17                        }
    18                    )
    19                    .then(chipsRes => {
    20                        chipsRes.json().then(chips => {
    21                            this.chips = chips;
    22                        })
    23                    })
    24            })
    25        })
    26}

javascript

The above code nests two <span class="jsx-3120878690">`fetch`</span> calls in order to ensure that you request chips after you request fish. This is because, in order to request chips, you need to send an array of fish IDs with the POST request. This works, however, there is a huge readability problem here. Writing the above code is akin to trading callback hell for ... promise hell! Who wants to do that!? It is possible to dramatically reduce the amount of code needed for this feature. Let's take a look at promise chaining!

Interim Solution: Promise Chaining
----------------------------------

The first way to remove the nesting of these <span class="jsx-3120878690">`fetch`</span> calls is to use what is known as promise chaining. Promise chaining can be achieved by simply returning another promise from within a call to <span class="jsx-3120878690">`Promise.then`</span>. The following example shows how to do this:

    1// We have to get chips after we get fish...
    2getFishAndChips = () => {
    3    fetch(this.fishApiUrl) // Request fish
    4        .then(response => response.json())
    5        .then(fish => {
    6            this.fish = fish;
    7
    8            const fishIds = fish.map(fish => fish.id);
    9
    10            return fetch( // Request chips using fish ids
    11                        this.chipsApiUrl,
    12                        {
    13                            method: 'POST',
    14                            body: JSON.stringify({ fishIds })
    15                        }
    16                    );
    17        })
    18        .then(response => response.json())
    19        .then(chips => {
    20            this.chips = chips;
    21        });
    22}

javascript

This is great! The code is much more maintainable, succinct, and readable. But we can do even better! With the new async/await syntax that has been brought into JavaScript, we can remove the use of multiple calls to <span class="jsx-3120878690">`Promise.then`</span> entirely! You will see how this can be achieved in the next section.

The Optimal Solution: Async/Await
---------------------------------

The async/await keywords are a wonderful mechanism for modeling asynchronous control-flow in computer programs. In JavaScript, these keywords are syntactic sugar on top of Promises—they abstract away the calls to <span class="jsx-3120878690">`Promise.then`</span>. In the following code, we refactor the <span class="jsx-3120878690">`getFishAndChips`</span> function to use async/await.

    1// We have to get chips after we get fish...
    2getFishAndChips = async () => {
    3    const fish = await fetch(this.fishApiUrl).then(response => response.json());
    4
    5    const fishIds = fish.map(fish => fish.id),
    6    chipReqOpts = { method: 'POST', body: JSON.stringify({ fishIds }) };
    7
    8    const chips = await fetch(this.chipsApiUrl, chipReqOpts).then(response => response.json());
    9}

javascript

Wow! Compare the first code snippet from the first section with this code. What a difference! We have dramatically condensed the code used while achieving the same effect. This code is easier to read and maintain. You can easily see how a lot of the mental complexity is reduced by being able to reason about the code in a synchronous fashion—no nesting required! All that is needed is to mark your async function with the <span class="jsx-3120878690">`async`</span> keyword. This enables you to use the <span class="jsx-3120878690">`await`</span> keyword to resolve promises for you! The async/await mechanism for control flow is an extremely powerful way to reason about anything asynchronous within your app.

Conclusion
----------

It can be difficult to compose chained sequences of asynchronous actions within your app. Nesting promises is an unfortunate byproduct of implementing this. But thankfully, as you've seen in this guide, avoiding and/or refactoring nested promises is easily achieved via either promise chaining or async/await syntax. Of these two solutions, the most readable code was written using async/await syntax, so strive to use this in your own app!

You can now be confident in writing modern and readable asynchronous code within your React components! For more information, check out the [documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function) for async/await syntax.

9

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)
