<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/98bf39ab-eb2b-4e8d-abe5-e48d02fba40c.jpg" alt="Author avatar" class="jsx-3841407315" />

Miguel Saavedra

Introduction to Semantic Versioning
===================================

### Miguel Saavedra

-   Oct 7, 2020
-   5 Min read
-   1,437 Views

-   Oct 7, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">5 Min</span> read
-   1,437 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Data</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Business Intelligence</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Data Analytics</span>

Introduction

15

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-semanticversioning200" class="menu-link">Semantic Versioning 2.0.0</a>
-   <a href="#module-semanticversioningannotations" class="menu-link">Semantic Versioning Annotations</a>
-   <a href="#module-versioningyourcode" class="menu-link">Versioning Your Code</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

Developers and software engineers have long faced the problem of "dependency hell." When a specific release of a dependency is installed in one project, that dependency may cause breaking changes to your app. The common solution is to freeze the dependency at a particular version to avoid versioning issues.

However, your dependencies may also have dependencies! Of course, those dependencies may also have dependencies, and so on. Releasing new package changes can easily break multiple dependencies and cause integrity or availability issues to your app.

Semantic versioning (or Semver) is the most common versioning strategy implemented by libraries, apps, and frameworks. It involves one common set of rules followed both by members of the open source community and the industry alike. This guide will provide a high-level overview of semantic versioning, including how developers can tag releases in Git using semantic versioning standards.

Semantic Versioning 2.0.0
-------------------------

Semantic versioning increments three version numbers: major.minor.patch. Each particular patch number is incremented based on a specific set of conditions.

### Major Versions

The major version is incremented when there are functions that are incompatible with a previous major version. For example, when incrementing from 1.5.2 to 2.0.0, some functions in version 1.5.2 may no longer work or may have been deprecated in 2.0.0. This will signal users of your app or library that there may be changes in the app that will cause existing functions depending on your app to break if you decide to upgrade. These changes are often referred to as *breaking changes*.

### Minor Versions

Minor versions are incremented when you add functionality to your app or library. These new functions should not affect the functions in the older version. Users of your app or library should not be required to update their dependencies because minor versions are meant to be additive, not corrective. For example, if you upgrade your app from 2.1.42 to 2.2.0, your existing apps should still work as none of the changes should be breaking. This is often referred to as *backward compatible*.

### Patch Versions

Patch versions are incremented when there is no additional functionality added to the app or library, and the changes are still backward compatible. Usually, patch versions are used to indicate bug fixes, so developers often upgrade to newer minor versions to ensure backward compatibility, yet get the latest functional and security-related updates.

Semantic Versioning Annotations
-------------------------------

You may have other versioning requirements that you need to meet, such as alpha releases or metadata information. If you have unreleased apps and libraries, you may also want to version them differently. Semver supports both of these use cases.

### Metadata and Pre-release Versions

Metadata can be added to semantic versions using the plus (+) symbol. Code versions that differ only in metadata have the same precedence. This means that version 1.4.2+20130313144700 should function identically to version 1.4.2+201309868639. This metadata is normally used for build information and must be written in ASCII compatible characters. Similarly, pre-release versions can be indicated by appending a hyphen (-) and the name of the version (e.g. 1.6.4-beta). Pre-release versions are meant to inform the users of your app or library that this version may not yet be stable.

### Intial Development

If your code is currently in the initial stages of development, you may label your code as version 0.x.x. Version 0 is normally not considered to be stable, and ideally, it should not be used in production without reading the changelog of every increment. This is because every increment in any area may result in any change. Some [open source projects](https://0ver.org/) use this strategy because of large changes in their codebase after every iteration.

Versioning Your Code
--------------------

Now that you understand a proper versioning strategy for your apps and libraries, you can also version the code in your source code management system. Git supports versioning your code via Git Tags. The following snippet tags your code as version 1.0.0.

    1git tag 1.0.0

bash

This will link the current commit to the given tag number. You can easily check out the release by simply running the following snippet.

    1git checkout 1.0.0

bash

You can use tags in combination with semantic versioning to keep track of your releases to ensure that others depending on your app or library can identify the general meaning of each version.

Conclusion
----------

Semver is one of many potential versioning strategies, however, it is the most commonly used today in a variety of industries and open source projects. Internally, it can help ensure that your APIs are still compatible with one another. At the same time, if you are an avid open source contributor, others may rely on this versioning strategy to determine when they want to install a newer version of the dependency for their app.

15

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)
