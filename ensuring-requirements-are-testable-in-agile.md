<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/d2983462-0d78-4938-873c-ac1e9f6590c7.png" alt="Author avatar" class="jsx-3841407315" />

Victor Dantas

Ensuring Requirements are Testable in Agile
===========================================

### Victor Dantas

-   Nov 20, 2020
-   10 Min read
-   3,439 Views

-   Nov 20, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">10 Min</span> read
-   3,439 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Requirements and Estimation</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Languages, Frameworks, and Tools</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Practices</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Requirements and Estimation</span>

Introduction

92

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-whatmakesarequirementtestable" class="menu-link">What Makes a Requirement Testable</a>
-   <a href="#module-rewritinguserstoriesfortestability" class="menu-link">Rewriting User Stories for Testability</a>
-   <a href="#module-acceptancetestdrivendevelopmentatdd" class="menu-link">Acceptance Test-Driven Development (ATDD)</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

In Agile, requirements are defined as user stories, which are user-centric expressions of the system's functionality. While having the advantage of bringing the user to the center of the conversation and, ultimately, leading to the development of a product that delivers real value to end users, this also creates room for vagueness and lack of clarity in the requirements.

One of the responsibilities of a product owner (with the involvement of the development team) is breaking down and refining user stories to come up with concrete requirements that are stated in language that more closely matches the engineering effort that they entail. During this exercise, a specific set of acceptance criteria should also be defined for user stories (if not already explicitly defined by the user). One crucial aspect to succeed in doing this, however, is ensuring that all requirements are *testable*, i.e. they make it possible to develop tests that clearly determine whether acceptance criteria are met or not.

This guide will demonstrate how to approach requirements in Agile to ensure they are testable.

What Makes a Requirement Testable
---------------------------------

To be testable, a requirement must be clear, measurable, and complete. This guide is going to explore each of these qualities separately.

### Clear

A requirement should not contain ambiguity or vague terms that are open to interpretation. An example of an *unclear* requirement would be:

*The sign up form should be intuitive*

"Intuitive" is up to interpretation and ambiguous. Here's a more clear statement for the same requirement:

*The sign up form should ask for a username, email address, and password with input hints in each field*

This defines much more clearly what exactly the sign up form will contain: not any less, and not any more of what was specified. This certainly goes in the direction of something intuitive (given the extra detail of adding input hints), but it makes it much more obvious when the requirements are indeed met.

### Measurable

A requirement should be measurable in the sense of making every quantifiable feature have an actual quantity, or range, as opposing to containing qualifying terms such as "fast," "many," or "high." An example of a non-measurable requirement would be:

*The API should respond quickly to requests even when a lot of users are accessing it*

Here's a much better version:

*The API's response time should be less than three seconds for the maximum expected number of concurrent users, and less than one second for a single user*

Now there is a clear measure on how *fast* it should be and what a *lot of* users means. The maximum expected number of concurrent users may not be known by the user or product owner, but it's still a clearly defined quantity that can be measured and stipulated.

### Complete

A requirement should contain all relevant information on the core functionality that it captures, and it should not contain more than a single functionality. An example of non-completeness:

*The user profile should contain the user's picture, and clicking on the picture will open the picture editing page where the user can replace the picture or reposition it.*

Firstly, this requirement could use some additional information, for example:

*The user profile should display the user's stored thumbnail picture, and clicking anywhere on the picture will open the picture editing page where the user can replace the picture and/or reposition it.*

Now it looks more complete in terms of information, but it still doesn't meet the completeness property, as it contains more than one function. It would be better to break it down into three separate requirements:

-   *The user profile should display the user's stored thumbnail picture.*
-   *Clicking anywhere on the picture will open the picture editing page.*
-   *The picture editing page should allow the user to replace the picture and/or reposition it.*

Finally, it should be noted that a requirement should *not* include implementation details. It should be about the functionality, not the exact way it must be engineered (unless it strongly relates to the user experience and the overall perception of the functionality).

Rewriting User Stories for Testability
--------------------------------------

User stories are typically worded as, "As a \[persona\], I want \[feature\] so that \[goal\]," and come most often from end users themselves and not the product team. This almost by definition means user stories are not entirely clear, measurable, or complete. However, the process described in a [previous guide on refining user stories and acceptance criteria](https://app.pluralsight.com/guides/refine-user-stories-and-acceptance-criteria-with-agile), when executed correctly, should lead to refined user stories that are rewritten for clarity, and broken down into more atomic units of work with a list of independently testable acceptance criteria.

Therefore, the refining process should ensure that:

-   User stories are short enough to fit into one sprint or backlog iteration, and to encompass a single functionality (a *complete* requirement).
-   User stories or at least acceptance criteria are clear, i.e. any vague statements are re-captured as more precise ones.
-   User stories or at least acceptance criteria are measurable, i.e. qualifiers such as "a lot," "many," "better," or "easier" should be rewritten through the engineering lens of measuring and quantifying.
-   User stories' acceptance criteria determine the specific and *testable* conditions for acceptance by the user.

The acceptance criteria are what determine the testability of the user story, and it is thus the most important component when it comes to ensuring that requirements are testable. Acceptance criteria can be more easily defined in a way that observes the principles of testable requirements when the user stories themselves do. However, there is some flexibility in how user stories capture requirements; after all, they're *user stories*, even after refinement. That being said, one of the main objectives of the refining process is to elicit each user story's acceptance criteria since it may not be immediately clear from the way it is stated what they are. And the acceptance criteria is really what incorporates testability into the stories. In addition, by enforcing a structure such as "Given \[precondition\], when I \[do some action\] then I expect \[result\],” an acceptance criterion facilitates clarity by imposing contextual information on pre-existing state/situation and the expected resulting state after some action is performed.

Here's one example from that previous guide of a *refined* user story:

*As a registered user, I want to log in with my username and password so that the system can authenticate me and I can trust it.*

With the following acceptance criterion:

*Given that I am a registered user and logged out, if I go to the log in page and enter my username and password and click on Log in, then the data associated to my user should be accessible.*

Note that, in addition to not containing some of the vague terms previously discussed, by establishing a very specific context and action, this acceptance criterion is clear and unambiguous. It's also complete in its function specificity. A user story will typically have not a single but a few acceptance criteria, so there's no need for one acceptance criterion to capture the requirement (user story) in its entirety from a testability perspective, which means there's no completeness in that sense at a criterion level. But, it's important that all acceptance criteria combined cover all the testable components of the user story, and that each criterion relates to one single functionality.

Finally, consider the importance of having acceptance criteria that are *measurable*. Indeed, the above criterion is measurable (the action is well defined and the outcome is binary: either data is accessible, or it isn't).

Acceptance Test-Driven Development (ATDD)
-----------------------------------------

ATDD is a development methodology derived from the Test Driven Development (TDD) to fit the Agile model. The main goal of this methodology is to improve code quality by writing acceptance tests *before the coding activities start*. And, because acceptance criteria are more closely tied to end users' expectations (as opposed to traditional developer-driven software tests), this helps guide the implementation of user stories in the direction of an acceptable end product from the start. In addition, during the effort of writing concrete test cases and scenarios based on the acceptance criteria, there might be questions that surface ambiguities and further need for clarification of the requirements.

When code is written with the primary goal of passing the tests, which in turn are written with the primary goal of delivering the expected value to the end users (since they are *acceptance* criteria), Agile teams are more likely to succeed in delivering quality software.

Conclusion
----------

In Agile, user stories can come with ambiguous, unclear statements about a system's functionality or behavior. Refining user stories and determining acceptance criteria are two key team efforts that will lead to better requirements. However, it is still important to ensure they are testable, and for that we have established a few guiding principles, namely that requirements must be clear, measurable, and complete. By relating that to the Agile framework of user stories and acceptance criteria, we have a mental framework to help us ensure that we are able to test all requirements.

Finally, the ATDD methodology is something to incorporate if you want to set your team up for success, as it brings testability to the beginning of the software development work, which should help you spot unclear requirements from the start and also influence the overall code quality in a positive way.

To dig a little further, check out these related guides:

-   [Refining User Stories and Acceptance Criteria](https://app.pluralsight.com/guides/refine-user-stories-and-acceptance-criteria-with-agile)
-   [Break Down Agile User Stories into Tasks and Estimate Level of Effort](https://app.pluralsight.com/guides/break-down-agile-user-stories-into-tasks-and-estimate-level-of-effort)
-   [Read and Understand Architectural Design Specifications with Agile](https://app.pluralsight.com/guides/read-and-understand-architectural-design-specifications-with-agile)

92

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)
