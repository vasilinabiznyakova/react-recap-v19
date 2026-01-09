## React Course Materials

📚 Watch the course here: https://youtu.be/TtPXvEcE11E

1. [Exercise solutions](1-exercise-solutions)
2. [Copy of the code](2-copy-of-code) at the end of each lesson

3. [Links](1-links.md) (all the links used for each lesson)
4. [Troubleshooting](2-troubleshooting.md) (solutions to issues)

React - is an external library that helps to create websites
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
JSX = same as JS but we can writ HTML directly in our JS code
But our website doesnt understand jsx and babel helps to translate this to normal js.
We need to use script with type "text/babel"

Why React popular?

- Creating React elements is natural
- jsx makes it easier to find errors
- we can insert JS code into JSX elements

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

****\*\*\*\*****Styling****\*\*\*\*****

in React we need to add class with a prop called className

\***_HOOKS_**
hooks = insert Rect features into our components
basically useState is a hook
every hook starts with a word use (useState, useEffect, useRef and more)

useEffect = run some code after the component is created or updated

- put hooks at the top of the component
- hooks should not be inside anything

useEffect accept a callback function as a 1st parameter and will run it once the component is created/updated; as a second parameter it would accept [] if array is empty it will run only after component is created, if you pass to array some data it will run when data is changed
this array called Dependancy Array = control when useEffect runs with the help of this array we control how often we

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

\***\*Routing\*\*\***

Feature lets us create multiple pages using 1 HTML file, this lets us teuse our html code
This is is called Single Page Application (SPA)

<a> will reload the page always but it doesnt have any sense in case with SPA instead we should use Link from react-router. allow tp go to another page wo reloading = faster

we can use fetch(built in method to make reqs to backend but axios = cleaner way to make requests to backend)

useEffect is being run twice when we use <StrictMode>, its done for purpose of catching bugs
API - application programming interface

Backend = manage the data
Frontend = present the data

Fragment component is used to add keys to iterated items

The inner function in useEffect should not return a Promise!
It should either return nothing otr clean a function
To solve this we usually should create a new function inside useEffect

Data Mutation = update data at backend
post() = create data at backend
get() = get data from backend
put() = update some data
delete() = delete

Based on URL path the nbackend can do different things
Every req also has a Type(get, post)

When backend get a request from frontend it checks both URL path and type of request to decide than what to do

\***\*useNavigate\*\***
Hook to navigate to another page (redirect) useNavigate

********\*\*\*\*********Automated testing**************\*\***************

Automated testing are more efficient than manual testing
NPM packages for automated testing:

- Jest
- Vitest

Vitest can be used for both frontend and backend testing, but it’s primarily popular in frontend projects because of its tight integration with Vite and fast feedback loop.

1. Unit test - when we test 1 piece of code - 1 function
   Testing components is not for unit test

describe = groups tests together 2) Integration test = test multiple units of code working together

When we testing a function we run function and testing results, when we testing a component we render it and check if it is being displayed the component on the page correctly

In our test we should not contact real backend, if we need to run a function we should use mocks
We can mock the entire npm package - fake version, do nothing

Test Hooks

- beforeEach()
- afterEach
- beforeAll
- afterAll

We can create mock that do nothing and also we can mock the implementation = make the mock do whatever we want

In order Link components work they need to be inside router 
MemoryRouter = specifically for testing

Usually we create tests for all the components


Deploying = how to put a React app on the internet

AWS  - collection of services that help us to put stuff on the Internet

EC2 - Amazon Elastic Compute Cloud, it allows rent a computer from AWS
Infrastructure as a Service (IaaS)
We way launch as many instances as we need
EC2 just gives us a computer, we still need to:
1. Install NodeJS
2. Connect it to the Internet
3. Upload our code

In order to resolve the above AWS provided another service Elastic Beanstalk (a layer top EC2)
1. Uses EC2 to rent a computer + also install all the software we need to install at the computer
It does all the software setup for us

We need to upload all the code to Elastic Beanstalk thats it (This is called Platform as a Service - PaaS)
Role = gives Elastic Beanstalk permission to use other services in AWS

Instance types = let us choose the computer we would like to rent 

Vite has an npm run build command that compiles JSX to JavaScript and minifies the code.


Elastic Beanstalk  - Capacity instead of 1 instance add Load Balancer (when the traffic is too high it allows to distribute the request across several computers) this allows our website to handle more users

With AWS we can set up own domain,  also there is a AWS Certificate Manager wich allows to encrypt our website

Changes React 19

1. Support for document metadata (<title>, <link> <meta>), now we can put them directly inside the component
Before we had to use Helmet
2. You can now access ref as a prop for function components, for example if you need to get a ref to an html element inside this component, before we had to use forwardRef, now ref is a normal prop
3. React compiler = optimizes our react code
Before When a component updates it will re-create all the components inside and before we had to use useMemo
Now the Compiler will add these optimizations automatically
Now we dont have to useMemo, useCallback anymore
All we need to do is to set up react compiler


Set Up React Compiler

1. Install the React Compiler npm package:
npm install --save-dev babel-plugin-react-compiler@rc
2. Copy this react config:
react({
  babel: {
    plugins: [['babel-plugin-react-compiler', { target: '19' }]],
  },
})
3. Update the react config in vite.config.js:
export default defineConfig({
  /* Replace the default react config:
  plugins: [react()]
  */

  // With the react config you copied above, like this:
  plugins: [react({
    babel: {
      plugins: [['babel-plugin-react-compiler', { target: '19' }]],
    },
  })],

  ...
})
Check if React Compiler is Working
Start the backend using npm run dev.
Start the frontend using npm run dev.
Install the React DevTools Chrome extension.
In your project (open the URL provided by Vite in the browser), open the Console, and open the "Components" tab.
If there's a badge beside the components called "Memo ✨" the React Compiler is working.


4. Removed propTypes and defaultProps for functions
Before we used propTypes to check the types for our props now we use TypeScript'
But we need set up Typescript 
npx create-vite@6.5.0
it will use tsx files inside



Typescript = js with extra features, we can add types for our variables
It prompt the methods proper for the types, does Types checking, in JS there is no type checking
If types error we wont be able to build 

Type  Inference = TypeScript can figure out the type automatically 