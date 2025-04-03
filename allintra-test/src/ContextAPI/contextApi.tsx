import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const MarkdownContext = createContext(null);

export function useMarkdown() {
  return useContext(MarkdownContext);
}

export function MarkdownProvider({ url, fileKey, children }) {
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
    <MarkdownContext.Provider value={{ content, setContent }}>
      {children}
    </MarkdownContext.Provider>
  );
}
