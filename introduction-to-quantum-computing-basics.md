<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/2fc6e7af-c83f-44b3-a657-76ef40d36783.jpg" alt="Author avatar" class="jsx-3841407315" />

Ara Medina

Introduction to Quantum Computing Basics
========================================

### Ara Medina

-   Nov 17, 2020
-   9 Min read
-   2,407 Views

-   Nov 17, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">9 Min</span> read
-   2,407 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Languages, Frameworks, and Tools</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Application Frameworks</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Quantum Computing</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">General Quantum Computing Principles</span>

Introduction

90

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-history" class="menu-link">History</a>
-   <a href="#module-superposition" class="menu-link">Superposition</a>
-   <a href="#module-entanglement" class="menu-link">Entanglement</a>
-   <a href="#module-potentialfutureusecases" class="menu-link">Potential Future Use Cases</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

Companies like Microsoft, Google, IBM, and Amazon are investing heavily in quantum computing research and even starting to build out public cloud services that offer access to quantum hardware. Given all the hype, you may be wondering what it's all about and whether you should be paying attention.

This guide will cover the basic premise of quantum computing, as well as where it came from and where it is headed. This guide will also point you in the direction of next steps to take if you decide that quantum computing is something you want to explore further.

History
-------

The idea for quantum computers began to take form in the late 1970s and early 1980s. The physicist Richard Feynman is often cited as one of the early conceptualizers, although there were others talking about similar ideas around the same time. At this point, researchers were starting to realize that if you want to accurately model the vast intricacies of nature, especially of very small and complex things like molecules, you would be better off using a quantum simulation to do so. This is because nature itself is not fundamentally classical—it is built on top of quantum mechanics, which behaves in radically different ways.

Soon, scientists began identifying algorithms that could theoretically run faster on a quantum computer than a classical one, and they found several candidates. Then, in the mid to late 1990s, researchers started to make breakthroughs on the other side of quantum computing: the physical hardware. Today, experts in the field are trying to bring these two sides together to build out quantum computers that can actually solve certain problems faster than their classical counterparts.

Now that you have some background context, let's take a look at some foundational concepts of quantum mechanics.

Superposition
-------------

*Superposition* is one of the core characteristics of quantum mechanics. In classical computing, bits exist in discrete states of either 0 or 1, which are considered *deterministic* because they are not subject to probability or randomness. [Qubits](https://sandramedina.me/blog/2020/7/24/characteristics-of-qubits-and-quantum-processing), however, can exist in a combination of the two states simultaneously. An [analogy](https://www.ibm.com/quantum-computing/what-is-quantum-computing) for this would be if you played a high note and a low note on a musical instrument at the same time. The sound emitted is neither one note nor the other, but a superposition of the two.

There is a catch though—in a quantum system, you can't directly observe superposition. If you try to observe or measure a state of superposition, still considered *indeterminate* at this point, it will collapse into a determinate state.

Consider the musical note analogy and for a moment pretend that quantum mechanics are applicable to the sound emitted. In this scenario it would be like if, as soon as you tried to listen in on the sound, you only heard one note playing, even though you are sure the instrument played two notes.

This happens because states of superposition are extraordinarily delicate. Your presence in the environment, which moves air particles around and is generally disruptive, is enough to destroy the state. It is as though your act of listening forces the quantum system to "choose" a note.

### Probabilities

What are the odds that you would hear the high note versus the low note? In some cases, called *uniform superposition*, it would be 50/50. However, it could also be any weighted distribution of probabilities based on the quantum state you've put the system into, as long as the probabilities of all the states add up to 100%.

While qubits are in their delicate state of probabilistic superposition, it's possible to do all kinds of calculations and processing with them that you wouldn't be able to do with deterministic states, and that is part of what makes quantum computers so powerful.

Entanglement
------------

Another fundamental principle of quantum mechanics is *entanglement*. To understand this, consider another [analogy](https://www.youtube.com/watch?v=C-UxlEQj13w), this one adapted from theoretical cosmologist Janna Levin. Imagine a scenario where you are playing the wishbone game with a friend, but the rules of quantum mechanics and entanglement are in effect. You each pull on one side of the wishbone to break it apart, but you don't look at which piece you're left with.

In the quantum world, as soon as you and your friend break the wishbone, *both* of the following are true: you have the big piece while your friend has the little piece, *and* you have the little piece while your friend has the big piece. It is as though the wishbone pieces themselves have not yet "decided" whether they are the big piece or the small piece. Each wishbone piece is in superposition, and their states are indeterminate. It's not just that you and your friend don't know what pieces you have, it's more than that: the states of the pieces have not yet been actualized in reality.

Still without looking at the wishbone in your hand, you put it in your pocket, get in a spaceship and fly to the Moon. You then get out of your spaceship and look at the wishbone. You can think of that moment of seeing whether you have the big piece or the small piece as the moment of measurement, the moment your piece's state becomes determined.

Because the two pieces are entangled, as soon as you see which piece you have, your friend's piece on Earth is automatically compelled into the complementary piece. This means that if you see that you have the big piece in your hand, their piece immediately loses its superposition and "decides" to become the small piece, and vice versa. By changing the state of your piece, you actually also changed the state of your friend's piece and this happens instantaneously, faster than the speed of light.

Qubits are considered [entangled](https://quantum-computing.ibm.com/docs/glossary/#term-entanglement) if you can't describe the state of one qubit without describing the state of another—their states cannot be separated. You need at least two qubits for entanglement, but it is also possible to have more than that.

Potential Future Use Cases
--------------------------

These features of quantum computing and mechanics are certainly interesting, but what are they useful for?

While there is significant disagreement amongst experts about what the timeline is for highly practical quantum computers, the players in the quantum computing field are all racing toward a quantum advantage. This is because the applications that it could have are potentially far-reaching. Let's consider a few.

### Nitrogen Fixation

[The synthesis of ammonia](https://digitalcommons.dartmouth.edu/cgi/viewcontent.cgi?article=1031&context=dujs) in soil happens through a process called nitrogen fixation. We rely heavily on ammonia for fertilizers, but the current method of artificially generating it in large quantities is quite inefficient and requires intense heat and pressure. This process consumes approximately 2% of the world's overall energy production.

Nitrogenase is the enzyme in soil that enables nitrogen fixation to occur naturally, and it does this without having the same heat and pressure requirements. If quantum computers can simulate how this takes places at a molecular scale, we might eventually be able to introduce a similar mechanism into our own production lines. Not only would this mean less energy is expended creating fertilizer, but since fertilizer is used in food production, this could also help drive the global cost of food down significantly.

### Theoretical Chemistry and Material Design

Polymers, which are used in many common materials like some plastics, are composed of molecules that join together in certain patterns. Modeling how the components of polymers break and come together can lead to [the discovery of new types of theoretical materials](https://www.designnews.com/materials-assembly/how-quantum-computing-will-transform-materials-science). Since it takes a great deal of computing power to make these simulations, current classical computers aren't able to do so efficiently. However, since the electrons in polymers are actually quantum objects, it makes sense that to model them effectively, we would potentially be able to use quantum computers which are themselves quantum systems.

Conclusion
----------

An important final note on quantum computing is that under the hood it can really be understood as conducting an experiment with quantum objects and observing the results of how they behave. Since you are working with probabilistic states, you need to run the experiment many times in order to get an accurate distribution of outcomes.

This is quite different from how classical systems compute answers, but it is still considered a computation nonetheless. When the problem you are trying to solve has a quantum facet to it, it is most likely going to be faster to model that with a real quantum experiment than by trying to compute it classically.

If you're ready to move from theory to actually coding quantum circuits, check out my Pluralsight [guide](https://app.pluralsight.com/guides/programming-your-first-quantum-circuit-with-ibm-quantum-experience) on how to get started with IBM Quantum and Qiskit.

90

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)
