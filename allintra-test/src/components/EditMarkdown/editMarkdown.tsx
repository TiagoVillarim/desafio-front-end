import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";

export default function MarkdownEditor({ fileKey, defaultContent }) {
  const [content, setContent] = useState("");

  useEffect(() => {
    const savedContent = localStorage.getItem(fileKey);
    setContent(savedContent || defaultContent);
  }, [fileKey, defaultContent]);

  const handleChange = (e: any) => {
    setContent(e.target.value);
    localStorage.setItem(fileKey, e.target.value);
  };

  return (
    <div>
      <textarea
        value={content}
        onChange={handleChange}
        rows={10}
        style={{ width: "100%", fontFamily: "monospace" }}
      />
      <h2>Preview:</h2>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
}
