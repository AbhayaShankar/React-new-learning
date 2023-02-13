import React, { useState, lazy, Suspense } from "react";
import Loading from "./Loading";

const MarkdownPreview = lazy(() => delayLoading(import("./Markdown")));

function App() {
  const [showPreview, setShowPreview] = useState(false);
  const [markdown, setMarkdown] = useState("Hello **Abhaya**");

  return (
    <div className="App">
      <div className="text-area">
        <textarea
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
        />
        <label>
          <input
            type="checkbox"
            checked={showPreview}
            onChange={(e) => setShowPreview(e.target.checked)}
          />
          Show preview
        </label>
      </div>
      <hr />
      {showPreview && (
        <Suspense fallback={<Loading />}>
          <h2>Preview</h2>
          <MarkdownPreview markdown={markdown} />
        </Suspense>
      )}
    </div>
  );
}

function delayLoading(promise) {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000);
  }).then(() => promise);
}

export default App;
