import React, { useEffect, useState } from "react";
import Alert from "@mui/material/Alert";
import Collapse from "@mui/material/Collapse";
import { Button } from "../Button/button";

type ModificationEntry = {
  id: string;
  fileKey: string;
  modifiedContent: string;
  originalContent: string;
  date: string;
};

type MarkdownEditorProps = {
  content: string;
  setContent: (content: string) => void;
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
  const [saveAllData, setSaveAllData] = useState<ModificationEntry[]>(() => {
    const savedData = localStorage.getItem("modificationsHistory");
    return savedData ? JSON.parse(savedData) : [];
  });

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMarkdownModifications(e.target.value);
  };

  const formatter = new Intl.DateTimeFormat("pt-BR", {
    dateStyle: "long",
    timeStyle: "short",
  });

  const persistData = (newEntry: ModificationEntry) => {
    const updatedData = [...saveAllData, newEntry];
    setSaveAllData(updatedData);
    localStorage.setItem("modificationsHistory", JSON.stringify(updatedData));
  };

  const SaveModificationsOnLocalstorage = () => {
    const newEntry: ModificationEntry = {
      id: Date.now().toString(),
      fileKey,
      modifiedContent: markdownModifications,
      originalContent: content,
      date: formatter.format(new Date()),
    };

    setContent(markdownModifications);
    persistData(newEntry);

    localStorage.setItem(fileKey, JSON.stringify(markdownModifications));

    setMarkdownModificationsSaved(true);
    setIsEditing(false);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setMarkdownModificationsSaved(false);
    }, 4000);
    return () => clearTimeout(timeout);
  }, [markdownModificationsSaved]);

  useEffect(() => {
    setMarkdownModifications(content);
  }, [content, isEditing]);

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
