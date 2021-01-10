import './App.css';
import Header from './components/Header';
import Search from './components/Search';
import Pokedex from './components/Pokedex';
import PokemonLayer from './components/PokemonLayer';

const App = () => {
  

  return (
    <>
      <Header/>
      <main>
        <PokemonLayer />
        <Search />
        <Pokedex />
      </main>
      <footer></footer>
    </>
  );
}

export default App;
