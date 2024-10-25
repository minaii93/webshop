import "./App.css";
import Tartalom from "./components/Tartalom";




function App(){
  return (
    <>
        <div className="App">
          <header className="App header"><h2>Könyváruház</h2></header>
          <article>
          
          <Tartalom/>
          </article>
          <footer>Minaei Hajnalka</footer>
        </div>
    </>
  )
}

export default App;