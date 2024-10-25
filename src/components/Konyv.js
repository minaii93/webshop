import "./Konyv.css"
import { useState } from "react";



function Konyv(props){

function kosarbaTesz(){
    props.megjelenit(props.konyvAdat);
}

  return (<>
    
    <div className = "konyv">
        <div className="kep">
            <img src={props.konyvAdat.borito} alt={`${props.konyvAdat.cim} borító`} className="konyv-kep" />
        </div>
        <div className="adatok">
        <p className = "szerz">{props.konyvAdat.szerzo}</p>
            <p className = "cim">{props.konyvAdat.cim}</p>
            <span>ár: {props.konyvAdat.ar}</span>
            <button onClick={kosarbaTesz}>Kosárba</button>
        </div>
       

    </div>
  </>
    
  )
}

export default Konyv;
