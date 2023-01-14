Promisees are a greart way of handling errors.
Syntax for promises is :

```javascript
let promise = new Promise((resolve , reject){
   // code here
})
```

here 'new Promise' is called an executor, As soon as a new Promise is called, the executor is run automatically. Two arguments are passed to it:

i. resolve(value) : If Promise is fulfilled then run resolve with value passed to it.
ii. reject(error) : If Promise is not fulfilled or rejected then run this reject the promsie with an error.

Good practice is to first reject the error if there is any, else resolve.

Promise value when run contains two internal parameters :

a. State : initially pending, if resolved then state changes to "fulfilled" else "rejected".

b. result : initially "undefined", if resolved then result with updated with the "value" inside resolve(value) or else it is updated with "error" inside reject(error).

One Real time based example would be :

```javascript
const login = (username, password) => {
  // create a login request object
  const request = { username, password };

  // send the request to the server
  fetch("/login", {
    method: "POST",
    body: JSON.stringify(request),
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Invalid login");
      }
      // response.json() returns a promise that resolves with the JSON data
      return response.json();
    })
    .then((data) => {
      // if the login is successful, redirect the user to their account page
      window.location.href = "/account";
    })
    .catch((error) => {
      // if there's an error, display an error message
      const errorMessage = document.getElementById("error-message");
      errorMessage.textContent = error.message;
      errorMessage.style.display = "block";
    });
};
```
