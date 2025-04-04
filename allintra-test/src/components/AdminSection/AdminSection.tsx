import React from "react";

export default function AdminSection() {
  const handleModificationsFromLocalStorage = JSON.parse(
    localStorage.getItem("modifications")
  );

  return (
    <div>
      <h2>Últimas Modificações</h2>
      {handleModificationsFromLocalStorage.length === 0 ? (
        <p>Nenhuma modificação encontrada.</p>
      ) : (
        handleModificationsFromLocalStorage.map((data, index) => (
          <div key={index} style={{ display: "flex", flexDirection: "column" }}>
            <h3>{data.name}</h3>
            <div style={{ backgroundColor: "gray" }}>
              Modificado em : {data.date}
            </div>
            <div style={{ backgroundColor: "green" }}>
              {data.modifiedContent}
            </div>
            <div style={{ backgroundColor: "red", marginBottom: 10 }}>
              {data.originalContent}
            </div>
          </div>
        ))
      )}
    </div>
  );
}
