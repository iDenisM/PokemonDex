import './App.css';
import Header from './components/Header';
import Search from './components/Search';
import Pokedex from './components/Pokedex';
import PokemonModal from './components/PokemonModal';
import Board from './components/Board';


const App = () => {
  return (
    <>
      <Header/>
      <main>
        <Search />
        <Pokedex />
        <PokemonModal />
        <Board />
        
      </main>
    </>
  );
}

export default App;
