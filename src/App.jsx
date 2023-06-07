import { useEffect, useState } from "react";
import Form from "./components/Form";

const App = () => {
  let [contador, setContador] = useState(100);
  const [mensaje, setMensaje] = useState("Prueba");
  const [contadorNuevo, setContadorNuevo] = useState(100);
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setContador(contador + 1);
  };

  const handleClickTest = () => {
    contador = contador + 1;
  };

  useEffect(() => {
    if (contador > 105) {
      setIsVisible(true);
    }
    console.log(isVisible);
  }, [contador]);

  useEffect(() => {
    console.log("Se llamo a la API");
  }, []);

  return (
    <div>
      <h3>Contador: {contador}</h3>
      <h3>Captura: {mensaje}</h3>
      <br />
      <button onClick={handleClick}>Contar</button>
      <button onClick={handleClickTest}>Prueba</button>
      <br />
      <br />
      <Form mensaje={mensaje} setMensaje={setMensaje} />
      <br />
      <br />
      {isVisible && <h3>Mensaje de validacion</h3>}
    </div>
  );
};

export default App;
