import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";

export default function FetchDataContent({ url, fileKey }) {
  const [content, setContent] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const savedContent = localStorage.getItem(fileKey);
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

  const handleChange = (e: any) => {
    setContent(e.target.value);
    localStorage.setItem(fileKey, e.target.value);
  };

  return (
    <div>
      <ReactMarkdown>{content}</ReactMarkdown>

      {isEditing && (
        <div>
          <h2>Editor:</h2>
          <textarea
            value={content}
            onChange={handleChange}
            rows={10}
            style={{ width: "100%", fontFamily: "monospace" }}
          />
          <button
            onClick={() => console.log("salvou")}
            style={{ marginTop: "30px" }}
          >
            Salvar Edição
          </button>
        </div>
      )}
      <button
        onClick={() => setIsEditing(!isEditing)}
        style={{ marginTop: "30px" }}
      >
        {isEditing ? "Finalizar Edição" : "Editar Markdown"}
      </button>
    </div>
  );
}
