import React from 'react';
import './App.css';
import Tartalom from './components/Tartalom';
import { KosarProvider } from './context/KosarContext';

function App() {
  return (
    <KosarProvider>
      <div className="App">
        <header className="App header"><h2>Könyváruház</h2></header>
        <article>
          <Tartalom />
        </article>
        <footer>Minaei Hajnalka</footer>
      </div>
    </KosarProvider>
  );
}

export default App;
