import React, { useState, useEffect } from "react";
import { mi_contador_backend } from "../../declarations/mi_contador_backend";

export default function App() {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    async function fetchContador() {
      const valor = await mi_contador_backend.obtener();
      setContador(valor);
    }
    fetchContador();
  }, []);

  const handleIncrementar = async () => {
    const nuevoValor = await mi_contador_backend.incrementar();
    setContador(Number(nuevoValor));
  };

  const handleReiniciar = async () => {
    await mi_contador_backend.reiniciar();
    setContador(0);
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <style>
        {`.browser-warning { display: none; }`}
      </style>
      <h1>Contador ICP</h1>
      <p>Valor actual: {contador}</p>
      <button onClick={handleIncrementar}>Incrementar</button>
      <button onClick={handleReiniciar}>Reiniciar</button>
    </div>
  );
}