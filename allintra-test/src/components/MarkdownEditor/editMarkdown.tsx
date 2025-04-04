import React, { useEffect, useState } from "react";
import Alert from "@mui/material/Alert";
import Collapse from "@mui/material/Collapse";
import { Button } from "../Button/button";

type MarkdownEditorProps = {
  content: string;
  setContent: any;
  fileKey: string;
};

export default function MarkdownEditor({
  content,
  setContent,
  fileKey,
}: MarkdownEditorProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [markdownModificationsSaved, setMarkdownModificationsSaved] =
    useState(false);
  const [markdownModifications, setMarkdownModifications] = useState("");

  const handleChange = (e: any) => {
    setMarkdownModifications(e.target.value);
  };

  const ParseContentToString = JSON.stringify(markdownModifications);

  const formatter = new Intl.DateTimeFormat("pt-Br", {
    dateStyle: "long",
    timeStyle: "short",
  });
  const formatted = formatter.format(new Date());

  const SaveModificationsInLocalStorage = [
    {
      fileKey: fileKey,
      modifiedContent: markdownModifications,
      date: formatted,
    },
    { fileKey: fileKey, originalContent: content, date: formatted },
  ];

  const SaveModificationsOnLocalstorage = () => {
    setContent(markdownModifications);
    localStorage.setItem(
      "modifications",
      JSON.stringify(SaveModificationsInLocalStorage)
    );
    localStorage.setItem(fileKey, ParseContentToString);
    setMarkdownModificationsSaved(!markdownModificationsSaved);
    setIsEditing(!isEditing);
  };

  useEffect(() => {
    setTimeout(() => {
      setMarkdownModificationsSaved(false);
    }, 4000);
  }, [markdownModificationsSaved]);

  useEffect(() => {
    setMarkdownModifications(content);
  }, [isEditing]);

  return (
    <div>
      {isEditing && (
        <div>
          <h2>Editar markdown:</h2>
          <textarea
            value={markdownModifications}
            onChange={handleChange}
            rows={10}
            style={{
              minHeight: 200,
              minWidth: "100%",
              fontFamily: "monospace",
            }}
          />
        </div>
      )}
      <Button
        onClick={() => setIsEditing(!isEditing)}
        title={isEditing ? "Finalizar Edição" : "Editar Markdown"}
      />
      {isEditing && (
        <Button
          onClick={SaveModificationsOnLocalstorage}
          title={"Salvar Edição"}
        />
      )}
      <Collapse in={markdownModificationsSaved}>
        <Alert sx={{ mb: 2 }}>Markdown modificado com sucesso!</Alert>
      </Collapse>
    </div>
  );
}
