<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/fc1d1699-dd35-49d9-826b-26b579432689.png" alt="Author avatar" class="jsx-3841407315" />

Ronika Mehta

Schedule Build Frequency Based on Criteria and Scope in Azure DevOps
====================================================================

### Ronika Mehta

-   Nov 18, 2020
-   6 Min read
-   1,858 Views

-   Nov 18, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">6 Min</span> read
-   1,858 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Security</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">General Security Principles</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Security Principles</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">General Security Principles</span>

Introduction

12

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-differenttriggersinazurepipelines" class="menu-link">Different Triggers in Azure Pipelines</a>
-   <a href="#module-configuretriggersinazurepipelines" class="menu-link">Configure Triggers in Azure Pipelines</a>
-   <a href="#module-configurecitriggers" class="menu-link">Configure CI Triggers</a>
-   <a href="#module-configurescheduletriggers" class="menu-link">Configure Schedule Triggers</a>
-   <a href="#module-configurebuildcompletion" class="menu-link">Configure Build Completion</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

Nowadays, quality assurance (QA) teams and developers want to validate ongoing features as they become available in the source branch. Most software companies want to establish an automated process to deploy the latest changes to their environments without doing a manual intervention from a devOps engineer.

This can be done by running Azure pipelines at stipulated intervals or in a scheduled manner. It can be achieved using the *triggers* option provided by Azure evOps in Continuous Integration (CI) or Continuous Deployment (CD) pipelines.

This guide describes steps to set up build frequency or schedules using Triggers in the Azure DevOps pipelines.

Different Triggers in Azure Pipelines
-------------------------------------

Azure pipelines support many types of triggers. Based on the type of your pipeline, select the appropriate trigger and related option. Triggers help to run a pipeline automatically.

Continuous Integration (CI) triggers vary based on the type of repository you build in your pipeline. They include:

-   CI triggers in Azure Repos Git
-   CI triggers in GitHub
-   CI triggers in Bitbucket Cloud
-   CI triggers in Team Foundation Version Control (TFVC)

Let’s learn about the end-to-end process of configuring triggers for pipelines using the Azure Repos Git approach.

Configure Triggers in Azure Pipelines
-------------------------------------

Azure DevOps supports classic builds as well as YAML-based pipelines. Let’s take a classic build pipeline as an example and try to configure triggers with various options.

This guide assumes that you’ve already created a pipeline using classic build. If you’ve not done so, then you can create a classic build pipeline for Azure Repo Git. You can find more information about creating build pipeline documentation [here](https://docs.microsoft.com/en-us/azure/devops/pipelines/get-started/pipelines-sign-up?view=azure-devops).

To configure triggers in your build pipeline, navigate to the **Pipelines &gt; Pipelines** option as shown in the figure below.

![Pipelines](../../pluralsight2.imgix.net/guides/db4626d1-07e7-4c6f-97ac-49a6591e90f6_Pipelines.html)

This fetches all the available pipelines from your project. Select a pipeline for which you want to configure a trigger, then click on the **Edit** button.

![Build Pipeline list](../../pluralsight2.imgix.net/guides/bba77260-9cf2-4129-b7ed-7360b015e1af_Demo_Pipeline.html)

![Edit Pipeline](../../pluralsight2.imgix.net/guides/5e57946a-3f5b-4991-8057-e3c5a01e87e4_Edit_Pipeline.html)

Navigate to the **Triggers** menu.

![CI Triggers](../../pluralsight2.imgix.net/guides/a74c65ee-b526-4da6-9238-7d835932143d_CI_Triggers.html)

Now, it’s time to deep dive into each setting and explore the various build frequency option to configure your build pipelines. The following section will explain each trigger option in detail and give tips for scheduling build frequency in Azure pipelines.

Configure CI Triggers
---------------------

Continuous Integration (CI) triggers cause a pipeline to run whenever you push an update to the specified branches or tags.

If the **Enable continuous integration** option is enabled, then it triggers only when new changes are uploaded to the branch.

If the **Batch changes while a build is in progress** option is enabled, then the system waits until the current run is completed and then queues another run of all changes that have not yet been built so far. This option is useful if a team frequently uploads a change to the branch.

**Branch filters** is another feature provided by Azure pipelines to trigger the build only when specified criteria are matched. Branch filters also support wildcard characters while configuring a branch specification. *Example*: features/pluralsight/\*

**Path filters** is another great option if you want to trigger a build when a specific file is changed. The order of path filters doesn’t matter, and paths are case-sensitive. Be sure that you’re using the same case as a real folder's name.

Configure Schedule Triggers
---------------------------

Azure pipelines provide you the capability to run build on a specified schedule. This is a very useful feature for a software project team to deploy changes using nightly build. So, the next day team will have all changes deployed to their respective environments.

Let’s configure a build that runs every night at 2:00 AM at a specified time zone as shown in the figure below.

![Schedule Triggers](../../pluralsight2.imgix.net/guides/2c4ebb69-79dc-47da-b034-851b12d3d258_Schedule_Triggers.html)

It also provides you **branch filters** feature-capability (same as CI triggers, explained in the previous section) to run only when a specified branch is changed.

If you wish to run scheduled build only when a branch is uploaded with new changes then be sure that you’ve checked the option **Only schedule builds if the source or pipeline has changed**.

Configure Build Completion
--------------------------

This is a practical business use case where software companies have multiple products that are dependent on each other. These products are usually built independently, but if the parent product is changed then the dependent product needs to be rebuilt or re-validated.

To configure the **Build completion** option, click on the **Add** button and select **Triggering build** from the dropdown.

![Build Completion](../../pluralsight2.imgix.net/guides/db9f2af6-6084-476a-bee5-5f9c2aca2269_Build_Completion.html)

This option also supports the branch filters feature explained in the previous section of this guide.

Conclusion
----------

This guide demonstrated how to schedule triggers on various branches and run a build on a specified schedule at different intervals, and how to use path filters and various other options.

It helps software development project teams to get advantages including:

-   Configure an automated way to deploy or build changes as per your project requirements
-   No manual intervention needed
-   Easy to deploy or build multiple products
-   Easy to handle complex deployment

Azure pipeline trigger options can be configured using YAML-based pipelines. You can explore more on that feature to further build on this guide. Thank you for reading.

12

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)
