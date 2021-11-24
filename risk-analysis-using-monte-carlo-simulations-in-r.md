<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/7aa57bc1-6266-4719-a497-c3ab18a28f5d.png" alt="Author avatar" class="jsx-3841407315" />

Benney Au

Risk Analysis Using Monte Carlo Simulations in R
================================================

### Benney Au

-   Sep 28, 2020
-   6 Min read
-   8,999 Views

-   Sep 28, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">6 Min</span> read
-   8,999 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Data</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Data Analytics</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">R</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Machine Learning</span>

Introduction

23

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-howmontecarloperformsriskanalysis" class="menu-link">How Monte Carlo Performs Risk Analysis</a>
-   <a href="#module-randomsamplingprobabilitydistributionsinr" class="menu-link">Random Sampling Probability Distributions in R</a>
-   <a href="#module-applyingmontecarlotoriskanalysis" class="menu-link">Applying Monte Carlo to Risk Analysis</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

The Monte Carlo method is a type of algorithm that relies on random sampling from various distributions to estimate the probability or distribution of a specific outcome. It is suitable when other approaches are difficult or impossible to use, such as sensitivity analysis, option pricing, financial risk measurement, and risk management applications.

In this guide, you will learn how to use the built-in R functions to run Monte Carlo simulations. You will set up a simulation and plot the simulation run results. Then you will generate summary statistics to make it easier to understand the distribution of outcomes. An intermediate understanding of the R programming language is assumed knowledge for this guide.

How Monte Carlo Performs Risk Analysis
--------------------------------------

The Monte Carlo method is performed by repeatedly running a model on a simulated outcome based on varying inputs; the inputs are uncertain and variable. A common but powerful strategy for modelling uncertainty is to randomly sample values from a probability distribution. This allows you to create thousands of input sets for your model. In this way, you can run thousands of permutations of your model, which has several benefits:

-   Your output is a large set of results. This means that you have a probability of outcomes rather than simply a single point estimate.
-   Monte Carlo generates a distribution of simulated outcomes. This makes it easy to graph and communicate findings.
-   It is easy to change the assumptions of the models by varying the distribution type or properties of the inputs.
-   You can easily model correlation between input variables.

Random Sampling Probability Distributions in R
----------------------------------------------

Monte Carlo simulations are made easy in the R programming language since there are built-in functions to randomly sample from various probability distributions. The stats package prefixes these functions with <span class="jsx-3120878690">`r`</span> to represent random sampling. Some examples of sampling from these distributions are demonstrated in the code snippet below:

    1# sample from an uniform distribution
    2stats::runif(1, min = 0, max = 1)
    3
    4# sample from an exponential distribution
    5stats::rexp(1)
    6
    7# sample from a normal distribution
    8stats::rnorm(1)
    9
    10# sample from a log normal distribution
    11stats::rlnorm(1)

r

Note that the <span class="jsx-3120878690">`stats::`</span> qualified namespace is used to clarify the source of these functions. However, this is not strictly necessary.

Applying Monte Carlo to Risk Analysis
-------------------------------------

One situation where Monte Carlo is appropriate is when you need to represent a sequence of decisions that are influenced by outside stochastic risk factors. In the following concrete example, you will model an asset allocation problem where you decide what portion of wealth should be allocated to risk-free investment or high-risk investment at multiple discrete time periods. In this simulation, the returns from the previous period contribute to the returns of the next period. This means that a single-point model is inappropriate.

In this example, there are two sources of uncertainty:

-   The uncertain return of the risky asset
-   How much to allocate to each type of investment

The below code snippet shows a simple function that calculates returns based on different asset allocations.

    1calculate_return <- function(alpha) {
    2  risk_free_rate <- 1.03
    3  risky_rate <- rnorm(1) * 0.05 + 1
    4  (1 - alpha) * risk_free_rate + alpha * risky_rate
    5}

r

<span class="jsx-3120878690">`alpha`</span> is an interaction variable with a range of 1 and 0 that determines how much wealth should be allocated to each asset class in each discrete time period. <span class="jsx-3120878690">`risky_free_rate`</span> is a fixed yield that doesn't change between periods. <span class="jsx-3120878690">`risky_rate`</span> is a random continuous variable that is centered on <span class="jsx-3120878690">`1.05`</span> to represent uncertainty.

### Running and Plotting Simulations

Now that we have a model set up, we can begin running it.

The code below executes 1,000 runs of the model over twelve discrete time periods.

    1install.packages('tidyverse')
    2library(tidyverse)
    3
    4RUNS <- 1000
    5DECISION.STEPS <- 12
    6
    7simulations <- rerun(RUNS, replicate(DECISION.STEPS, runif(1) %>% calculate_return())) %>%
    8  set_names(paste0("sim", 1:RUNS)) %>%
    9  map(~ accumulate(., ~ .x * .y)) %>%
    10  map_dfr(~ tibble(value = .x, step = 1:DECISION.STEPS), .id = "simulation")
    11
    12simulations %>%
    13  ggplot(aes(x = step, y = value)) +
    14  geom_line(aes(color = simulation)) +
    15  theme(legend.position = "none") +
    16  ggtitle("Simulations of returns from asset allocation")

r

Note that this code uses functional programming features offered by the purrr package, which you can read more about in [Explore R Libraries: Purrr](https://app.pluralsight.com/guides/explore-r-libraries:-purrr).

When you plot the simulation outputs using <span class="jsx-3120878690">`ggplot2`</span>, you will see a distribution of outcomes. In this case, each line represents the predicted return on investment based on different series of inputs.

### Generating Summary Statistics

To make the output data easier to understand, you can summarize the data. For example, you can compute the <span class="jsx-3120878690">`min`</span>, <span class="jsx-3120878690">`max`</span>, and <span class="jsx-3120878690">`mean`</span> of your simulation runs across the time steps. To do this, run the following code:

    1summary_values <- simulations %>%
    2  group_by(step) %>%
    3  summarise(mean_return = mean(value), max_return = max(value), min_return = min(value)) %>%
    4  gather("series", "value", -step)
    5
    6summary_values %>%
    7  ggplot(aes(x = step, y = value)) +
    8  geom_line(aes(color = series)) +
    9  ggtitle("Mean values from simulations")

### Changing Model Assumptions

In the model above, you used <span class="jsx-3120878690">`rnorm`</span> to assume a normal distribution of returns on risky investments. You can change this assumption by changing this function to a different type of distribution as discussed earlier in this guide. You also coded the risk-free rate to be <span class="jsx-3120878690">`1.03`</span> and the risky rate of return to be centered around <span class="jsx-3120878690">`1.05`</span>. Using the Monte Carlo method, you can easily change these variables and see what impact this will have on the distribution of returns.

Conclusion
----------

The guide has demonstrated a simple use of the Monte Carlo Simulation in R. However, remember that this kind of model will not provide useful results if the input model is flawed. For this reason, analysts require a combination of mathematical, financial, and programming knowledge. You can learn more by reading [Handbook in Monte Carlo Simulation: Applications in Financial Engineering, Risk Management, and Economics](https://onlinelibrary.wiley.com/doi/book/10.1002/9781118593264).

23

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)
