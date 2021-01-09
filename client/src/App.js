import './App.css';
import Header from './components/Header';
import Search from './components/Search';
import Pokedex from './components/Pokedex';
import Pokemon from './components/Pokemon';

const App = () => {
  

  return (
    <>
      <Header/>
      <main>
        <Pokemon id="UG9rZW1vbjowMDM=" name="Venusaur" image="https://img.pokemondb.net/artwork/venusaur.jpg" />
        <Search />
        <Pokedex />
      </main>
      <footer></footer>
    </>
  );
}

export default App;
