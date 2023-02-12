/** Promises
 * An object that represents eventual completion or failure of an async operation and its resulting value
 * Promises can be fulfilled or rejected 
 * Promise objects have “then” and “catch” methods


 * The three states of a Promise
    • pending: initial state, neither fulfilled nor rejected.
    • fulfilled: meaning that the operation was completed successfully.
    • rejected: meaning that the operation failed

 * Error Handling with Promises 
    There is an implicit “try...catch” clause around the function code
    A .catch() clause handles errors of all kinds, including a reject() call or errors thrown in the handlers.
    The .catch() clauses handles errors synchronously

 * To handle reject at the end of the chain.
    old_promise.then(function(...){...})
    .then(function(...){...})
    .catch(function{...});



 * Fetch
    JavaScript has fetch() for async calls
    Conceptually the same like AJAX but supports promises.
    Therefore, less code, easy error handling, chaining of callbacks.

 * 
    Ajax is a way of accessing the server asynchronously to get new information without reloading the page 
    Ajax is a way of making Web pages *seem* faster 
    Promises may make it easier to structure your code to handle multiple asynchronous calls and testing each for failure or success 
    Promises always either pending, fulfilled or rejected 


 */

promise = new Promise(function (resolve, reject) {
	// Code that takes time
	setTimeout(() => {
		resolve('Done!');
	}, 3000);
});
promise.then(successHandler, failureHandler);
// One of successHandler or failureHandler gets
// called based on whether ”resolve” or “reject” is
// called in promise completion.


// Promise Chaining

// // This code:
// new_promise = old_promise.then(function(...){...});
// new_promise.then(function(...){...});

// // Is the same as:
// ld_promise.then(function(...){...})
// .then(function(...){...});