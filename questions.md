1. What is the difference between Component and PureComponent? give an example where it might break my app.

A PureComponent is one that does not trigger a rerender if you pass it the same props,
just like a PureFunction that if you pass it the same arguments it always returns the same value and a component does the opposite and a better function must be elaborated to avoid it.

2. Context + ShouldComponentUpdate might be dangerous. Can think of why is that?

I think it is dangerous if you do a bad implementation of the function because it could reduce the execution speed of the app, you should take into account several factors in order to implement it.

3. Describe 3 ways to pass information from a component to its PARENT.

Props, you can pass a function to the child that updates something in the parent. This is considered an anti-pattern because the information should be passed from top to bottom and not bottom to top, but it is possible.

With context it's another and ref

4. Give 2 ways to prevent components from re-rendering.

You could wrap the component in React.memo, so it doesn't get re-rendered when you invoke it again if you call it with the same props. It could also be with the lifecycle of ShouldComponentUpdate, evaluating the data you need and returning false.

5. What is a fragment and why do we need it? Give an example where it might break my app.

A Fragment is basically a component with which you can group components in your app, similar to a div, with the difference that a Fragment does not create a node in the DOM like a div would.

maybe an example is when we have a problem in the return of the function when you have problem in the code or when the logic for the app is bad

6. Give 3 examples of the HOC pattern.

React.connect(mapStateToProps)(Component) is an example of how Redux passes information from your store to the component using the HOC pattern.

A context provider like <ContextProvider>{children}</ContextProvider>, with that you can pass a component to another parent component as an argument.

In react-native there is a FlatList that receives a component with the prop "renderItem".

7. what's the difference in handling exceptions in promises, callbacks and async...await.

basically you can catch exceptions with .catch when using promises, catch (error) {} when using async await

8. How many arguments does setState take and why is it async.

You can pass only one argument, which is an object (in the case of React before Hooks), the setState calls are async and are grouped before executing for performance reasons basically and for the fact that updating something in your component, however simple it may be, takes N microseconds.

9. List the steps needed to migrate a Class to Function Component.

I can think of changing the state to hook useState, remove the lifecycle methods to use useEffect. Change the declaration of the component, instead of using Class Component, declare it as a function like const Component = ...

Remove the render method and return what you want inside the return of the function.

10. List a few ways styles can be used with components.

There are several, with CSS classes or IDs, with a wrapper like StyledComponents or MUI's styled function that you pass a component as an argument and from there you can declare its styles using CSS-in-JS.

11. How to render an HTML string coming from the server.

if that string comes in a response from an API call, it could be by taking the value of the string type response.data.string and putting that value inside a <p> for example.
