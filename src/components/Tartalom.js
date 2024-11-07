import React, { useContext } from "react";
import "./Tartalom.css";
import Konyv from "../components/Konyv";
import Kosar from "../components/Kosar";
import { KosarContext } from "../context/KosarContext";

function Tartalom() {
  const { konyvDb, konyvOsszAr, kosaram, konyvAdat } = useContext(KosarContext);

  return (
    <div className="row">
      <div className="kosar col-sm-4">
        <p>A kosár tartalma:</p>
        <p>A kosárban {konyvDb} könyv van</p>
        <p>Összes ár: {konyvOsszAr}</p>
        <table className="table">
          <thead>
            <tr>
              <th>Szerző:</th>
              <th>Cím:</th>
              <th>Ár:</th>
            </tr>
          </thead>
          <tbody>
            {kosaram.map((elem, index) => (
              <Kosar kosar={elem} key={index} />
            ))}
          </tbody>
        </table>
      </div>
      <div className="tartalom col-sm-8">
        {konyvAdat.map((elem, index) => (
          <Konyv konyvAdat={elem} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Tartalom;


