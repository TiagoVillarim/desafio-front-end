import React, { useState } from "react";
import * as S from "./styles";

interface ModificationEntry {
  id: string;
  fileKey: string;
  date: string;
  modifiedContent: string;
  originalContent: string;
}

export default function AdminSection() {
  const modifications: ModificationEntry[] = (
    JSON.parse(
      localStorage.getItem("modificationsHistory") || "[]"
    ) as ModificationEntry[]
  ).sort(
    (a: ModificationEntry, b: ModificationEntry) => Number(b.id) - Number(a.id)
  );

  const [activeModificationId, setActiveModificationId] = useState<
    string | null
  >(null);

  return (
    <S.Container>
      <h2>Modificações recentes</h2>
      {modifications.length === 0 ? (
        <p>Nenhuma modificação encontrada.</p>
      ) : (
        modifications.map((data: ModificationEntry) => (
          <S.ModificationItem key={data.id}>
            <h3>{data.fileKey}</h3>
            <S.DateLabel>Modificado em: {data.date}</S.DateLabel>
            <S.ModifiedContent>{data.modifiedContent}</S.ModifiedContent>

            <S.ToggleButton
              $isActive={activeModificationId === data.id}
              onClick={() =>
                setActiveModificationId(
                  activeModificationId === data.id ? null : data.id
                )
              }
            >
              {activeModificationId === data.id
                ? "Ocultar Conteúdo Original"
                : "Ver Conteúdo Original"}
            </S.ToggleButton>

            <S.OriginalContent $isVisible={activeModificationId === data.id}>
              {data.originalContent}
            </S.OriginalContent>
          </S.ModificationItem>
        ))
      )}
    </S.Container>
  );
}
