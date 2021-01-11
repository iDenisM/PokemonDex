import './App.css';
import Header from './components/Header';
import Search from './components/Search';
import Pokedex from './components/Pokedex';
import PokemonModal from './components/PokemonModal';
import CardsDeck from './components/CardsDeck/CardsDeck';

const App = () => {
  

  return (
    <>
      <Header/>
      <main>
        <Search />
        <Pokedex />
        <PokemonModal />
        <CardsDeck />
      </main>
    </>
  );
}

export default App;
