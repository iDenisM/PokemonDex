import './App.css';
import { useEffect } from 'react'
import * as Comlink from 'comlink';
import Header from './components/Header';
import Search from './components/Search';
import Pokedex from './components/Pokedex';
import PokemonModal from './components/PokemonModal';
import CardsDeck from './components/CardsDeck/CardsDeck';
import Board from './components/Board';

const App = () => {
  useEffect(() => {
    const worker = new Worker('./workers/Engine.js', { type: 'module'} );
    const obj = Comlink.wrap(worker);
  });

  return (
    <>
      <Header/>
      <main>
        <Search />
        <Pokedex />
        <PokemonModal />
        <CardsDeck />
        <Board />
      </main>
    </>
  );
}

export default App;
