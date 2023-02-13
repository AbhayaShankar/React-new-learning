# Lazy Loading

## PREREQUISITES

1. Basics of React and Hooks in React.

2. You should know how React components render etc.

## LET'S START

**Lazy loading** is a design pattern used in computer programming to defer the initialization of an object until the point at which it is needed. The main idea behind lazy loading is to load data or resources only when they are required, rather than loading everything at once. This approach can improve the performance of an application, as it reduces the amount of memory required and helps to reduce load times

Basic Syntax for lazy is :

```javascript
const SomeComponent = lazy(load);
```

Call lazy outside your components to declare a lazy-loaded React component:

```javascript
import { lazy } from "react";

const MarkdownPreview = lazy(() => import("./MarkdownPreview.js"));
```

## PARAMETERS

The Important factor in this is the parameter that is passed down to the lazy loading :

- load : A function that returns a **Promise** or some other thenable (a Promise-like object with a _then_ method). React will not call **load** until the first time you attempt to render the returned component. After React first calls **load**, it will wait for it to _resolve_, and then render the resolved value as a React component. Both the returned Promise and the Promise’s resolved value will be cached, so React will not call load more than once. If the Promise rejects, React will **throw** the rejection reason to let the closest Error Boundary above handle it.

## RETURNS

**lazy** returns a React component that you can render in your tree. While the code for the lazy component is still loading, attempting to render it will suspend. Use `<Suspense>` to display a loading indicator while it’s loading.

## Lazy loading Component with suspense

Usually, we import components with the static import declaration:

```javascript
import MarkdownPreview from "./MarkdownPreview.js";
```

To defer loading this component’s code until it’s rendered for the first time, replace this import with:

```javascript
import { lazy } from "react";

const MarkdownPreview = lazy(() => import("./MarkdownPreview.js"));
```

This code relies on dynamic import(), which might require support from your bundler or framework.

Now that your component’s code loads on demand, you also need to specify what should be displayed while it is loading. You can do this by wrapping the lazy component or any of its parents into a <Suspense> boundary:

```javascript
<Suspense fallback={<Loading />}>
  <h2>Preview</h2>
  <MarkdownPreview />
</Suspense>
```
