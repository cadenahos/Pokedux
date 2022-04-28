import { Grid } from "semantic-ui-react";
import PokemonCard from './PokemonCard';
import './styles.css';


const PokemonList = ({pokemons})=>{
    
    return(
        <Grid className="PokemonList">
            {pokemons.map((pokemon, pokemonIndex)=>(
                <PokemonCard pokemon={pokemon } key={`pokemon_${pokemonIndex}`} />
            ))}
        </Grid>
    );
};
PokemonList.defaultProps = {
    pokemons: [], 
}
export default PokemonList;