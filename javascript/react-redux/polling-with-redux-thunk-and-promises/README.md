# Polling with Redux Thunks and Promises

This recipe builds on the [Redux Thunk](https://github.com/gaearon/redux-thunk) pattern to perform the I/O necessary to 
initiate, and poll the staus of, a server-side tasks, and to encapsulate everything within an `Promise`.

This recipe is split into two parts: `io.js` which handles the I/O logic, and `actions.js` with an example Redux Thunk
action.