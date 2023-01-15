Async/await is a special syntax used with promises.
Async is geenrally used with fucntions, placed before a function simply means that the function returns a promise.

```javascript
async function getUser() {
  const res = await fetch("/movies");
  console.log(res);
  const parsedData = await res.json();
  console.log(parsedData);
  return parsedData;
}
```

Here, we know that fetch internally uses promises to resolve the res(response).
If we dont use await it will return a promise pending. To resolve this promise we use await to resolve this promise.

```javascript

async function getUser(){
    const res = fetch('/movies');
    console.log(res);

```

Next, if we console log the res that is coming from resolving fetch, We will get a raw data not readable format. To parse this xata we returb res.json() which gives us the data.

```javascript

async function getUser(){
    const res = fetch('/movies');
    console.log(res);
    const parsedData = res.json();
    console.log(parsedData);

```

NOTE : If we console.log(parsedData) we will again get a promsise pending.
This is again a internal working of parsing the raw data using .json()
To resolve this promise again we need to use await.

After that we return the parsed json file which then will return us the data fetched from the api.

A good HTTP response status is (200-299)
Now to handle errors On fetch :

There are two types of errors :
i. Client side error (400-499)
ii. Server side error (500-599)

Fetch doesnot show any error even if it encounters a bad HTTP request status.

```javascript
async function getUser(){
    const res = fetch('/abhaya').then(
        // some code
    ).catch(
        error => {
            throw (error)
        }
    );  // such api doesnt exist
    console.log(res);
    const parsedData = res.json();
    console.log(parsedData);
```

Although it encounters a bad Http status, it doesnt go inside .catch
We have to explicitly define or throw an error to handle.

```javascript
async function getUser(){
    const res = fetch('/abhaya').then((res) => {
  if (res.ok) {
    return res.json();
  }
  throw new Error('Something went wrong');
}).then((resJson) => {
  // Do something with the response
}).catch(
        error => {
            throw (error)
        }
    );  // such api doesnt exist
    console.log(res);
    const parsedData = res.json();
    console.log(parsedData);
```

We have to explicitly throw an error if res.ok == false
this also can be done through :

```javascript
if (!res.ok) {
  throw new Error("something wrong - Error");
}
```
