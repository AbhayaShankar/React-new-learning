JavaScript can send network requests to the server and load new information whenever it’s needed.

For example, we can use a network request to:

• Submit an order,
• Load user information,
• Receive latest updates from the server,
…etc.
And all that without reloading the page.

There’s an umbrella term “AJAX” (abbreviated Asynchronous JavaScript And XML) for network requests from JavaScript.

The fetch() method is modern and versatile :

```javascript
let promise = fetch(url, [options]);
```

~ url - the URL to access.
~ options - optional parameters: method, headers etc.

Getting response is actually a two stage process :

1. First "Promise", returned by "Fetch", resolves with an object of the built-in Response class as soon as the server responds with headers.

At this stage we can make a check HTTP status to see whether the call iss successful or not.

The promise rejects if the fetch was unable to make HTTP-request.
Abnormal HTTP-statuses, such as 404 or 500 do not cause an error.

We can see HTTP-status in response properties:

• status – HTTP status code, e.g. 200.
• ok – boolean, true if the HTTP status code is 200-299.

---

```javascript
let response = await fetch(url);

if (response.ok) {
  // if HTTP-status is 200-299
  // get the response body (the method explained below)
  let json = await response.json();
} else {
  alert("HTTP-Error: " + response.status);
}
```
