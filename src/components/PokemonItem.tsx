interface IProps {
    name: string
}

function PokemonItem({name}: IProps) {

    return (
        <div>
            <h2>{name}</h2>
        </div>
    )
}

export default PokemonItem