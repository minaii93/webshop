// KosarContext.js
import React, { createContext, useState } from 'react';


export const KosarContext = createContext();

export const KosarProvider = ({ children }) => {
  const [konyvDb, setKonyvDb] = useState(0);
  const [konyvOsszAr, setKonyvOsszAr] = useState(0);
  const [kosaram, setKosaram] = useState([]);

  const konyvAdat = [
    { szerzo: "Daniel Keyes",
         cim: "Virágot Algernonnak",
          ar: 5500,
           borito: "https://s06.static.libri.hu/cover/sl/0e/d/0ed1ddeaf8e5929280e3c5dec08ec965_big.jpg"
        },

    { szerzo: "Sylvia Plath",
         cim: "Az üvegbúra",
          ar: 5500,
           borito: "https://www.atlantiszkiado.hu/file/a9979e9f0bdd_1.jpg"
         },
    {
        szerzo: "Ken Kesey",
        cim: "Száll a kakukk fészkére",
        ar:6000,
        borito: "https://m.media-amazon.com/images/I/71f-06oSYnL.jpg"
    },

    {
        szerzo: "Fjodor Dosztojevszkij",
        cim: "Bűn és bűnhődés",
        ar: 6500,
        borito: "https://bookowlsbd.com/cdn/shop/files/71Djqom1jRL.jpg?v=1714422676"
    },
    {
        szerzo: "William Styron",
        cim: "Sophie választ",
        ar: 7500,
        borito: "https://moly.hu/system/covers/big/covers_318344.jpg?1410546042"
    },
    {
        szerzo: "Mihail Bulgakov",
        cim: "Mester és Margarita",
        ar: 4500,
        borito: "https://libris.to/media/jacket/18693213_master-and-margarita.jpg"
    },
    {
        szerzo: "Mihail Bulgakov",
        cim: "Mester és Margarita",
        ar: 4500,
        borito: "https://libris.to/media/jacket/18693213_master-and-margarita.jpg"
    },
    {
        szerzo: "Mihail Bulgakov",
        cim: "Mester és Margarita",
        ar: 4500,
        borito: "https://libris.to/media/jacket/18693213_master-and-margarita.jpg"
    },{
        szerzo: "Daniel Keyes",
        cim: "Virágot Algernonnak",
        ar: 5500,
        borito: "https://s06.static.libri.hu/cover/sl/0e/d/0ed1ddeaf8e5929280e3c5dec08ec965_big.jpg"
    },
    {
        szerzo: "Sylvia Plath",
        cim: "Az üvegbúra",
        ar: 5500,
        borito: "https://www.atlantiszkiado.hu/file/a9979e9f0bdd_1.jpg"
    },

    {
        szerzo: "Ken Kesey",
        cim: "Száll a kakukk fészkére",
        ar:6000,
        borito: "https://m.media-amazon.com/images/I/71f-06oSYnL.jpg"
    },

    {
        szerzo: "Fjodor Dosztojevszkij",
        cim: "Bűn és bűnhődés",
        ar: 6500,
        borito: "https://bookowlsbd.com/cdn/shop/files/71Djqom1jRL.jpg?v=1714422676"
    }

  ];

  

  const megjelenit = (adat) => {
    setKosaram([...kosaram, adat]);
    setKonyvDb(konyvDb + 1);
    setKonyvOsszAr(konyvOsszAr + adat.ar);
  };

  return (
    <KosarContext.Provider value={{ konyvDb, konyvOsszAr, kosaram, konyvAdat, megjelenit }}>
      {children}
    </KosarContext.Provider>
  );
};
