import React, { useEffect, useState } from "react";

import axios from "axios";
import ReactMarkdown from "react-markdown";

export default function NativeAdaptersComponent() {
  const [content, setContent] = useState("");

  const handleRequest = () => {
    const response = axios
      .get(
        "https://api.bitbucket.org/2.0/repositories/allintra/teste-front-end/src/main/docs/adapters-native.md"
      )
      .then((res) => setContent(res.data))
      .catch((err) => console.log(err));
    return response;
  };

  useEffect(() => {
    handleRequest();
  }, []);

  return (
    <div>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
}
