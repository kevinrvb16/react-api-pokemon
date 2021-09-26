import { useState } from 'react';
import PokemonItem from '../../components/PokemonItem'
import PokemonLogo from '../../assets/images/pokemon.png'
import api from '../../services/api';
import styles from './styles.module.css'

interface IPokemon {
  name:string
  url:string
}
interface IResponse {
  count: number
  next: string | null
  previous: string | null
  results: IPokemon[]
}

function Home() {
  const [pokemons, setPokemons] = useState<IPokemon[]>()

  const getAllPokemons = async () => {
    const { data } = await api.get<IResponse>('pokemon')

    setPokemons(data.results)
  }
  console.log({ pokemons })

  return (
    <div className={styles.container}>
      <img src={PokemonLogo}
        alt="Pokemon Logo"
        onClick={() => getAllPokemons()}
      />
      <PokemonItem name="pikachu" />
      <PokemonItem name="charmander" />
      <PokemonItem name="bulbasaur" />
      <PokemonItem name="ditto" />
      <PokemonItem name="delibird" />
      <PokemonItem name="mantine" />
    </div>
  );
}

export default Home;
