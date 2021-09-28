import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import api from '../../services/api'
import styles from './styles.module.css'

interface IPokemon {
    height: number;
    name: string;
    weight: number;
    types: { type: {name: string} }[]
    abilities: {ability: { name: string}}[]
    sprites: {other: {'official-artwork': {front_default: string}}}
}

interface IParams {
    pokemon: string
}

const Pokemon: React.FC = () => {
    const [pokemon, setPokemon] = useState<IPokemon>()
    const { pokemon: pokemonName } = useParams<IParams>()

    const getPokemonInfo = async () => {
        const {data} = await api.get<IPokemon>(`pokemon/${pokemonName}`)

        setPokemon(data)
    }

    useEffect(() => {
        getPokemonInfo()
    }, [])
    return (
        <div className={styles.container}>
        <h1 className={styles.title}>{pokemon?.name}</h1>
        <img src={pokemon?.sprites.other['official-artwork'].front_default} alt=""></img>
        <h2 className={styles.card}>Altura: {pokemon?.height}</h2>
        <h2 className={styles.card}>Peso: {pokemon?.weight}</h2>
        <h2 className={styles.card}>Tipos: {pokemon?.types.map((type) => type.type.name).join(', ')}</h2>
        <h2 className={styles.card}>Habilidades: {pokemon?.abilities.map((ability) => ability.ability.name).join(', ')}</h2>
        <Link to="/">
            <button className={styles.button}>Voltar</button>
        </Link>
        </div>
    )
}
export default Pokemon