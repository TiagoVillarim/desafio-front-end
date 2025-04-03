import React, { useEffect, useState } from "react";
import Alert from "@mui/material/Alert";
import Collapse from "@mui/material/Collapse";
import { Button } from "../Button/button";

type MarkdownEditorProps = {
  content: string;
  setContent: any;
  fileKey: any;
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
    setContent(e.target.value);
  };

  const SaveModificationsOnLocalstorage = () => {
    const ParseContentToString = JSON.stringify(content);
    localStorage.setItem(fileKey, ParseContentToString);
    setMarkdownModificationsSaved(!markdownModificationsSaved);
    setIsEditing(!isEditing);
  };

  useEffect(() => {
    setTimeout(() => {
      setMarkdownModificationsSaved(false);
    }, 4000);
  }, [markdownModificationsSaved]);

  return (
    <div>
      {isEditing && (
        <div>
          <h2>Editor:</h2>
          <textarea
            value={content}
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
      <Button
        onClick={SaveModificationsOnLocalstorage}
        title={"Salvar Edição"}
      />
      <Collapse in={markdownModificationsSaved}>
        <Alert sx={{ mb: 2 }}>Markdown modificado com sucesso!</Alert>
      </Collapse>
    </div>
  );
}
