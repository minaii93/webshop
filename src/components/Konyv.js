import React, { useContext } from "react";
import "./Konyv.css";
import { KosarContext } from "../context/KosarContext";

function Konyv({ konyvAdat }) {
  const { megjelenit } = useContext(KosarContext);

  const kosarbaTesz = () => {
    megjelenit(konyvAdat);
  };

  return (
    <div className="konyv">
      <div className="kep">
      <img 
          src={konyvAdat.borito} 
          alt={konyvAdat.cim} 
          className="konyv-kep" 
        />
      </div>
      <div className="adatok">
        <p className="szerző">{konyvAdat.szerzo}</p>
        <p className="cim">{konyvAdat.cim}</p>
        <span>ár: {konyvAdat.ar}</span>
        <button onClick={kosarbaTesz}>Kosárba</button>
      </div>
    </div>
  );
}

export default Konyv;
