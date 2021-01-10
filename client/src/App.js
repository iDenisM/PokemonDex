import './App.css';
import Header from './components/Header';
import Search from './components/Search';
import Pokedex from './components/Pokedex';
import PokemonModal from './components/PokemonModal';

const App = () => {
  

  return (
    <>
      <Header/>
      <main>
        <PokemonModal />
        <Search />
        <Pokedex />
      </main>
      <footer></footer>
    </>
  );
}

export default App;
