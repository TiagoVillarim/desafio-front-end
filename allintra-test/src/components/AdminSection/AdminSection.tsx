import React, { useState } from "react";

export default function AdminSection() {
  const modifications = JSON.parse(
    localStorage.getItem("modificationsHistory")
  );
  const [activeModificationId, setActiveModificationId] = useState<
    string | null
  >(null);

  return (
    <div>
      <h2>Modificações recentes</h2>
      {modifications.length === 0 ? (
        <p>Nenhuma modificação encontrada.</p>
      ) : (
        modifications.map((data) => (
          <div
            key={data.id}
            style={{
              display: "flex",
              flexDirection: "column",
              marginBottom: "20px",
            }}
          >
            <h3>{data.fileKey}</h3>
            <div style={{ backgroundColor: "gray", padding: "8px" }}>
              Modificado em: {data.date}
            </div>
            <div style={{ backgroundColor: "green", padding: "8px" }}>
              {data.modifiedContent}
            </div>

            <button
              onClick={() =>
                setActiveModificationId(
                  activeModificationId === data.id ? null : data.id
                )
              }
              style={{
                margin: "10px 0",
                padding: "8px",
                cursor: "pointer",
                backgroundColor:
                  activeModificationId === data.id ? "#b32448" : "#f0f0f0",
              }}
            >
              {activeModificationId === data.id
                ? "Ocultar Conteúdo Original"
                : "Ver Conteúdo Original"}
            </button>

            {activeModificationId === data.id && (
              <div
                style={{
                  backgroundColor: "#b32448",
                  padding: "8px",
                  marginBottom: "10px",
                  whiteSpace: "pre-wrap", // Preserves formatting
                }}
              >
                {data.originalContent}
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
}
