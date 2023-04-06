import logo from "./img/freecodecamp-logo.png";
import "./App.css";
import Boton from "./components/Boton";
import Counter from "./components/Counter";
import { useState } from "react";

function App() {
  const [clicksNum, setClicksNum] = useState(0);

  const handleClick = () => {
    setClicksNum(clicksNum + 1);
  };

  const counterReset = () => {
    setClicksNum(0);
  };

  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img className="freecodecamp-logo" src={logo} alt="logo" />
      </div>
      <div className="contenedor-principal">
        <Counter clicksNum={clicksNum} />
        <Boton texto="Click" esBotonDeclick={true} handleClick={handleClick} />
        <Boton
          texto="Reiniciar"
          esBotonDeclick={false}
          handleClick={counterReset}
        />
      </div>
    </div>
  );
}

export default App;
