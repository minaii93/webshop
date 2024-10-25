import "./Tartalom.css";
import Konyv from "./Konyv"
import { useState } from "react";
import Kosar from "./Kosar";

const konyvAdat = [
    {
        szerzo: "Daniel Keyes",
        cim: "Virágot Algernonnak",
        ar: 5500,
        borito: "./images/borito4.jpg"
    },
    {
        szerzo: "Sylvia Plath",
        cim: "Az üvegbúra",
        ar: 5500,
        borito: "./images/borito2.jpg"
    },

    {
        szerzo: "Ken Kesey",
        cim: "Száll a kakukk fészkére",
        ar:6000,
        borito: "./images/borito5.png"
    },

    {
        szerzo: "Fjodor Dosztojevszkij",
        cim: "Bűn és bűnhődés",
        ar: 6500,
        borito: "./images/borito3.jpg"
    },
    {
        szerzo: "William Styron",
        cim: "Sophie választása",
        ar: 7500,
        borito: "./images/borito1.jpg"
    },
    {
        szerzo: "Mihail Bulgakov",
        cim: "Mester és Margarita",
        ar: 4500,
        borito: "./images/borito6.jpg"
    }
    
    
    
    
] 


function Tartalom () {

    const [konyvDb, setKonyvDb] = useState(0);

    const [konyvOsszAr, setKonyvOsszAr] = useState(0);

    const [kosaram, setKosaram] = useState([]);


function megjelenit(adat, db){
    setKosaram([...kosaram, adat]);
    setKonyvDb(konyvDb + 1);
    setKonyvOsszAr(konyvOsszAr + adat.ar);
}

  return (<>
  <div className = "row ">
    <div className="kosar col-sm 4">
        <p>A kosár tartalma:</p>
        <p>A kosárban {konyvDb} könyv van</p>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Szerző:</th>
                    <th>Cím:</th>
                    <th>Ár:</th>
                </tr>
            </thead>
            <tbody>
                {kosaram.map((elem, index) => (
                    <Kosar
                        kosar={elem}
                        key={index}
                    />
                ))}
            </tbody>
        </table>
    </div>
    <div className="tartalom col-sm 8">
        {
            konyvAdat.map((elem,index) => {
                return (<Konyv 
                    konyvAdat = {elem} 
                    key ={index} 
                    megjelenit = {megjelenit}/>)
            })
        }
    </div>
  </div>
  </>
    
  )
}

export default Tartalom

