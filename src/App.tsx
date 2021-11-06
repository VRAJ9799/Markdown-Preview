import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  return (
    <>
      <div className="container">
        <textarea
          className="markdown-writer"
          name="originalText"
          onChange={(e) => {
            setText(e.target.value);
          }}
          placeholder="Write text..."
        ></textarea>
        <div className="markdown-preview">
          <ReactMarkdown plugins={[gfm]} children={text} />
        </div>
      </div>
    </>
  );
}

export default App;
