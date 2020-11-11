import "./App.css";
import React, { useState } from "react";
const Contador = () => {
  const [contador, setContador] = useState(0);
  const handleContador = (sinal) => {
    setContador(contador + sinal);
  };
  return (
    <div>
      <button type="button" onClick={() => handleContador(-1)}>
        -
      </button>
      {contador}
      <button type="button" onClick={() => handleContador(1)}>
        +
      </button>
    </div>
  );
};

function App() {
  const [participantes, setParticipantes] = useState(["Nome1", "Nome2"]);
  const [input, setInput] = useState("");
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ul>
          {participantes.map((participante, idx) => {
            return <li key={idx}>{participante}</li>;
          })}
        </ul>
        <button type="button" onClick={handleAdicionarParticipantes}></button>
        <frag>HELLO </frag>
        <Contador />
        <ComponenteFuncional name={"Rodrigo"}> teste</ComponenteFuncional>
        <ComponeteFuncionalComArrow
          name={"Rodrigo2"}
          idade={10}
        ></ComponeteFuncionalComArrow>
      </header>
    </div>
  );
}

function handleAdicionarParticipantes() {}
function ComponenteFuncional(props) {
  return <h1> Oi {props.name}</h1>;
}

const ComponeteFuncionalComArrow = ({ name, idade }) => {
  return (
    <div>
      <h3>
        Exemplo de componente {name} e tem {idade}
      </h3>
    </div>
  );
};

export default App;
