1. What does the `.map()` array method do?

for each element in an object, iterates over the array or array of objects and returns the key value pair.
The map() array method is a higher-order function that takes an array and a function as arguments, and returns a new array by applying the function to each element of the original array.

2. What do we usually use `.map()` for in React?

.map() in react is mainly used to get items in an array of objects and render those elements or items

```javascript
const UserList = ({ users }) => {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};
```

3. Why is using `.map()` better than just creating the components manually by typing them out?

explicitly writing code is handled over by .map() feature.
Also we dont need to write code block again and again if something updates or new file or object is added into the file.
