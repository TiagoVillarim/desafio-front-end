import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import MarkdownEditor from "./MarkdownEditor/editMarkdown";

type FetchDataContentProps = {
  url?: string;
  fileKey?: string;
};

export default function FetchDataContent({
  url,
  fileKey,
}: FetchDataContentProps) {
  const [content, setContent] = useState("");

  useEffect(() => {
    const savedContent = JSON.parse(localStorage.getItem(fileKey));
    if (savedContent) {
      setContent(savedContent);
    } else if (url) {
      axios
        .get(url)
        .then((res) => setContent(res.data))
        .catch(() => setContent("Erro ao carregar o conteúdo."));
    } else {
      setContent("Erro: Nenhuma URL fornecida.");
    }
  }, [url, fileKey]);

  return (
    <div>
      <ReactMarkdown>{content}</ReactMarkdown>

      <MarkdownEditor
        content={content}
        setContent={setContent}
        fileKey={fileKey}
      />
    </div>
  );
}
