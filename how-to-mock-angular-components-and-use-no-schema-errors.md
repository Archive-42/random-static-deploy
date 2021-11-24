<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/default.jpg" alt="Author avatar" class="jsx-3841407315" />

Chris Parker

How to Mock Angular Components Using the No Errors Schema
=========================================================

### Chris Parker

-   Oct 7, 2020
-   4 Min read
-   3,944 Views

-   Oct 7, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">4 Min</span> read
-   3,944 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Languages Frameworks and Tools</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1=""> Front End Web Developer</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1=""> Client-side Frameworks</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1=""> Angular</span>

Introduction

5

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-integrationtestsvsunittests" class="menu-link">Integration Tests vs. Unit Tests?</a>
-   <a href="#module-mockingcomponents" class="menu-link">Mocking Components</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

Mocking is a great idea for testing Angular apps because it makes maintenance easier and helps reduce future bugs. There are a few complex tools, such as XUnit, for mocking an Angular CLI project.

You can execute the mocking methods described in this guide only if you use vanilla Jasmine + Angular Testbed. However, you may use Spectator (for less boilerplate with test setup) and <span class="jsx-3120878690">`ng-mocks`</span> for mocking components, pipes, and directives.

Integration Tests vs. Unit Tests?
---------------------------------

You can avoid mocking if you decide to create an integration test. But how can you decide whether to create a unit test or an integration test?

Create a unit test when:

• The unit for testing contains the logic required to be tested individually and ensures that a feature is working as expected.

• You are testing integrations with third-party libraries.

Create an integration test when:

• Integration between components is required for creating a meaningful test.

• You're testing a component that comprises simple logic and needs to communicate with other components to create a valid test.

• You need to verify integration with any kind of third party library.

Mocking Components
------------------

You can easily avoid mocking components by shallow testing, which uses <span class="jsx-3120878690">`schemas: [NO_ERRORS_SCHEMA]`</span>, so the component under the test's template is not instantiating component tags. If you have a test that needs to interact with another component, for instance, through a view child, you need to have a mock of the component if you don't want to create an integration test.

You will often find a testing module for easier mocking in unit tests of Angular libraries, such as the Angular Routing library. You should create something similar with components you want to create mocks for by creating a <span class="jsx-3120878690">`*my-component-name*.component.mock.ts`</span> beside the component file. Thus, you will easily get a mock of the component. You can also have the mock implement the component to ensure that the mock and the component are exposing a similar method.

Once you have created a mock file for a component, it will be easy to get a mock of the component when needed.

An example of a component mock is given here:

    1@Component({
    2  selector: 'app-todo-item',
    3  template: ''
    4})
    5export class MyToDoListComponentMock implements OnInit, MyToDoListComponent {
    6
    7  @Input() public myToDoList: MyToDoList;
    8  @Input() public viewOnlyTODO: boolean;
    9  @Output() public todoRemove = new EventEmitter();
    10  @Output() public todoModify = new EventEmitter();
    11
    12  constructor() { }
    13
    14  public ngOnInit() {
    15  }
    16
    17  public itemClick() {
    18  }
    19
    20  public removeClick() {
    21  }
    22
    23  public modifyClick() {
    24  }
    25}

javascript

The mocks are then imported, as shown below:

    1    TestBed.configureTestingModule({
    2
    3      declarations: [
    4     MyToDoListComponentMock,
    5     AddTodoListComponentMock
    6   ],
    7 ...

javascript

You may wish that there were a simpler and less boilerplate way to create mocks for components in Angular, such as creating them with Jasmine spies. But you have to apply the component decorator to the class to make it a component.

Conclusion
----------

You saw how to mock dependencies in Angular tests in this guide. In comparison to other test libraries, such as XUnit, the Angular testing setup is very basic, but certain tricks can reduce the workload for creating mocks in unit tests. Unit tests should be the most crucial aspect of your test coverage, and they are the easiest to maintain.

5

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)
