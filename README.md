## Question-1: What is JSX, and why is it used? 
#### Ans: 
JSX (JavaScript XML) is a syntax extension for JavaScript that looks like HTML but works inside React. It is used because -
i. Makes UI code more readable and intuitive.
ii. Lets you write HTML-like code directly inside JavaScript.
iii. Easier to see the structure of components.
iv. React compiles JSX into plain JavaScript (React.createElement) for rendering.

## Question-2: What is the difference between State and Props?
#### Ans: 
The difference between State and Props are-
(a) State is data that a component manages itself. It can change over time, and when it changes, the component re-renders. Whereas props are data passed into a component from its parent. They are read-only and cannot be changed by the receiving component.
(b) State is internal to a component but props are external, controlled by the parent component.
(c) State is used for dynamic, interactive data (like a counter). Props are used for passing information and configuration.

## Question-3: What is the useState hook, and how does it work?
#### Ans: 
The useState hook in React is used to add state to functional components. Before hooks, only class components could have state.
##### How it works:
The useState hook works by giving a functional component a way to store and manage internal state. When useState is called, it returns two things: the current state value and a function to update that value. When the update function is called, React schedules a re-render of the component, so the UI reflects the new state. Internally, React keeps track of state for each component instance, ensuring that state updates are isolated and persistent across renders. In essence, useState lets functional components remember values between renders and reactively update the UI whenever those values change.

## Question-4: How can you share state between components in React?
#### Ans:
I can share state between components in React using these common approaches:
##### (a) Lift State Up
 - Move the state to the closest common parent of the components that need it.
 - Pass the state down as props and update it via callback functions.
##### (b) React Context API
 - Used when state needs to be shared across many components at different levels.
 - Avoids "prop drilling" (passing props through multiple layers).
##### (c) State Management Libraries
 - For complex apps, tools like Redux, Zustand, Jotai, Recoil help manage and share state globally.

## Question-5: How is event handling done in React?
#### Ans:
Event handling in React means responding to user actions (like clicks, typing, or form submissions) inside your components. It works very much like JavaScript, but React has its own way of handling it for consistency.
- Events are written in camelCase (e.g., onClick, onChange, not onclick).
- When a function is pass as the event handler, instead of writing code directly in quotes.
- React uses a system called SyntheticEvent, which makes event handling work the same across all browsers.
- The event handler function automatically gets an event object that tells the details about what happened (like which key was pressed or which element was clicked).
