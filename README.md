## React Course Materials
📚 Watch the course here: https://youtu.be/TtPXvEcE11E

1. [Exercise solutions](1-exercise-solutions)
2. [Copy of the code](2-copy-of-code) at the end of each lesson

3. [Links](1-links.md) (all the links used for each lesson)
4. [Troubleshooting](2-troubleshooting.md) (solutions to issues)


React  - is an external library that helps to create websites
We can load js with the help of tag script:
1. just pit in js code directly
2. Connect js file from the project
3. connect external library

Consists of 2 libraries:
1. React = shared features (mobile + websites)
2. ReactDOM = features specific to websites
3. ReactNative = features specific to mobile

If you use React for websites you need to load both libs(React + ReactDOM), for mobile you good to go with React + ReactNative

What is Babel? Its js compiler, basicly it translate js to another langs
When using React we don't use JS we use an enhanced version of JS => JSX(JavaScript XML)
JSX  = same as JS but we can writ HTML directly in our JS code
But our website doesnt understand jsx and babel helps to translate this to normal js.
We need to use script with type "text/babel"

Why React popular?
- Creating React elements is natural
- jsx makes it easier to find errors
- we can insert JS code into  JSX elements

Components - a piece of website
Component name starts with capital letter and PascalCase
JSX all components require closing tag or if no content than we can use self-closing tags
We can use only one value of a function

We can add component with the cirly brackets and also with component sysntax
With the help of React our own html elements = main idea of React if there is nothing inside we can use self-closing tag

To group elements wo unnecessary divs we can use fragments


In React we use div for layout purposes

Components are designed to be reusable, every component accept one parameter called props = object that contains all the parameters we gave to this component

Multi-line comment

Event = onClick (always starts with on, always use camel case) = we should not pass the function directly wo runung it ewith ()
Event Handlers = run function when we interact the website

State - data that is connected to the HTML, when we update this data it will update the HTML

React.useState will return an array, where first value is current data while second value is function that updates the data.
In React we should not update the data directly, we should use the the function from useState to update data otherwise html won't be changed - updaterFunction;

in React we do not update the data directly we would make a copy and use a copy to update


React Best Practice = Do not use DOM manually as React is managing the website

onChange runs a function when there is a change inside input, it got one param event;
Event is an object that contains following properties:
- event.target = elem that we are typing in
- event.target.value = value we are typing in
 in order to save the data we need to use useState


 The technique - Lifting the State UP = share state between multiple comp

We have a component tree, components on the same level can share the state via parent component 

Naming convention = the same name for prop for prop variable


Controlled inputs - used to clear the text from inputs using prop value we could change the text inside this <input>

State doesn't update immediately! State us updated after all of the code os finished, in order to resolve multiple state changes you would have to save the result to variable

************Styling************

in React we need to add class with a prop called className

****HOOKS***
hooks  = insert Rect features into our components
basically useState is a hook
every hook starts with a word use (useState, useEffect, useRef and more)

useEffect = run some code after the component is created or updated

- put hooks at the top of the component
- hooks should not be inside anything

useEffect accept a callback function as a 1st parameter and will run it once the component is created/updated; as a second parameter it would accept [] if array is empty it will run only after  component is created, if you pass to array some data it will run when data is changed
this array called Dependancy Array = control when useEffect runs with the help of this array we  control how often we 


React.useRef();

ref = container with special React features

good practice is to devide css into 2 files App.css and index.css
App contains styles for components
index general css for the whole website

Vite lets us import any types of file

Vite is a modern frontend tooling platform that separates development and production concerns.
In development, it leverages native ES modules and on-demand compilation, avoiding full bundling and enabling near-instant startup and hot updates.
In production, it switches to an optimized bundling pipeline based on Rollup, applying tree-shaking, code-splitting, and asset optimization.
This design significantly improves developer experience without sacrificing production performance.


Best Practice 
Separate each component into its own file
Use separate css file for every component

We need to create a new component for every page and save it in src/pages


****Routing*****

Feature lets us create multiple pages using 1 HTML file, this lets us teuse our html code
This is is called Single Page Application (SPA)


<a> will reload the page always but it doesnt have any sense in case with SPA instead we should use Link from react-router. allow tp go to another page wo reloading = faster

we can use fetch(built in method to make reqs to backend but axios  = cleaner way to make requests to backend)

useEffect is being run twice when we use <StrictMode>, its done for purpose of catching bugs
API - application programming interface
