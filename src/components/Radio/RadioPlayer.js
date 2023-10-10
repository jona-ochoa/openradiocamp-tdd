import { useState } from "react";
import axios from "axios";
import "./radio.css";
import RadioCard from "./RadioCard";

function RadioPlayer() {
  const [busqueda, setBusqueda] = useState("");
  const [listado, setListado] = useState([]);

  const hazBusqueda = () => {
    const url = `https://de1.api.radio-browser.info/json/stations/byname/${busqueda}`;
    axios
      .get(url)
      .then((r) => setListado(r.data))
      .catch((e) => console.error(e));
  };

  return (
    <div className="home-container">
      <header>
        <h1>
          <span> Radio JonaDev </span>
        </h1>
        <div className="search">
          <input
            className="inputs"
            type="search"
            placeholder="Buscar Radio..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />
          <button className="station" onClick={hazBusqueda}>
            Buscar
          </button>
        </div>

        {listado.length < 0 && <div aria-label="length-not-null"></div>}

        <section aria-label="listado-emisoras" className="grid">
          {listado.map((emisora, i) => (
            <RadioCard key={i} emisora={emisora} />
          ))}
        </section>
      </header>
    </div>
  );
}

export default RadioPlayer;
