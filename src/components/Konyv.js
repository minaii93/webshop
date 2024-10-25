import "./Konyv.css"
const konyvAdat = {
    szerzo: "Daniel Keyes",
    cim: "Virágot Algernonnak",
    ar: 5500
}


function Konyv(){


  return (
    <div className = "konyv">
        <h3>{konyvAdat.szerzo}</h3>
        <p>{konyvAdat.cim}</p>
        <span>ár: {konyvAdat.ar}</span>
        <button>Kosárba</button>

    </div>
  )
}

export default Konyv
