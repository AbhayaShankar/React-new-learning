Async/await is a special syntax used with promises.
Async is geenrally used with fucntions, placed before a function simply means that the function returns a promise.

```javascript

Async function getUser(){
    const res = await fetch('/movies');
    console.log(res);
    const parsedData =  await res.json();
    console.log(parsedData);
    return parsedData;
}

```

Here, we know that fetch internally uses promises to resolve the res(response).
If we dont use await it will return a promise pending. To resolve this promise we use await to resolve this promise.

```javascript

Async function getUser(){
    const res = fetch('/movies');
    console.log(res);

```

Next, if we console log the res that is coming from resolving fetch, We will get a raw data not readable format. To parse this xata we returb res.json() which gives us the data.

```javascript

Async function getUser(){
    const res = fetch('/movies');
    console.log(res);
    const parsedData = res.json();
    console.log(parsedData);

```

NOTE : If we console.log(parsedData) we will again get a promsise pending.
This is again a internal working of parsing the raw data using .json()
To resolve this promise again we need to use await.

After that we return the parsed json file which then will return us the data fetched from the api.
