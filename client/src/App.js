import './App.css';
import { useQuery, gql } from '@apollo/client';
import Header from './components/Header';

const ALL_POKEMONS = gql`
  {
    pokemons(first: 10){
      id
      name
      types
      image
    }
  }
`

function App() {
  const { loading, error, data } = useQuery(ALL_POKEMONS);

  if (loading) return <p>Loading...</p>
  if (error) return <h2>Whoops... somthing went wrong!</h2>

  return (
    <>
      <Header/>
      <main>
        {
          data.pokemons.map(p => (
            <div key={p.id}>
              <img src={p.image} alt={p.name}></img>
              <div>{p.name}</div>
            </div>
          ))
        }
      </main>
      <footer></footer>
    </>
  );
}

export default App;
