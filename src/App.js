
import './App.css';
import { useState, useEffect } from "react";

function App() {

  const [datosPersonales, setDatosPersonales] = useState({
    dni: 0,
    nombre: ""
  });

  const [agenda, setAgenda] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    console.log(datosPersonales);
  }, [datosPersonales]);
  useEffect(() => {
    console.log(agenda);
  }, [agenda]);
  const handleChange = (e) => {
    setDatosPersonales({
      ...datosPersonales,
      [e.target.name]: e.target.value
    });
  };

  const handleClick = () => {
    if (datosPersonales.dni === "") {
      setError(true);
      return;
    }

    setError(false);
    setAgenda([...agenda, datosPersonales]);
    setDatosPersonales({ dni: 0, nombre: "" });
  };

  const handleClickDelete = (dni) => {
    const arrayFiltrado = agenda.filter((a) => a.dni !== dni);
    setAgenda([...arrayFiltrado]);
  };

  return (
<div className="App">
      <input
        name="dni"
        placeholder="dni"
        type="number"
        defaultValue={datosPersonales.dni}
        onChange={(e) => handleChange(e)}
      />
      {error && <span style={{ color: "red" }}> Ingresa un valor </span>}
      <br />
      <input
        name="nombre"
        placeholder="nombre"
        defaultValue={datosPersonales.nombre}
        onChange={(e) => handleChange(e)}
      />
      <br />
      <button onClick={() => handleClick()}>Agregar</button>
      <ul>
        {agenda &&
          agenda.map((a) => {
            return (
              <>
                <li key={a.dni} style={{ listStyle: "none" }}>
                  {a.nombre}
                  <button
                    style={{ marginLeft: "20px" }}
                    onClick={() => handleClickDelete(a.dni)}
                  >
                    X
                  </button>
                </li>
              </>
            );
          })}
      </ul>
    </div>
  );
}

export default App;
