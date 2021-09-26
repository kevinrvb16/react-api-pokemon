import api from '../../services/api';

import PokemonItem from '../../components/PokemonItem'
import PokemonLogo from '../../assets/images/pokemon.png'
import styles from './styles.module.css'

function Home() {

  const getAllPokemons = async () => {
    const pokemons = await api.get('pokemon')
    return pokemons
  }
  return (
    <div className={styles.container}>
      <img src={PokemonLogo} alt="Pokemon logo" />
      <PokemonItem name = "pikachu" />
      <PokemonItem name = "charmander"/>
      <PokemonItem name = "bulbasaur"/>
      <PokemonItem name = "ditto"/>
      <PokemonItem name = "delibird"/>
      <PokemonItem name = "mantine"/>
    </div>
  );
}

export default Home;
