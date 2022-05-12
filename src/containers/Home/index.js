import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons } from '../../api/getPokemons';
import { setPokemon } from '../../actions';
import { setError } from '../../actions';

import PokemonList from '../../components/PokemonList';
import Searcher from '../../components/Searcher';
import './styles.css';
import axios from 'axios';

function Home() {
  const dispatch = useDispatch();
  const list = useSelector(state => state.list);
  useEffect(() =>{
    getPokemons().then((res) => {
      const pokemonList = res.data.results;
      return Promise.all(pokemonList.map(pokemon => axios.get(pokemon.url)));
    }).then((pokemonResponse )=>{
      const pokemonsData = pokemonResponse.map( response => response.data);
      dispatch(setPokemon(pokemonsData));
    }).catch((error) => {
      dispatch(setError({ message: 'Ocurrió un error' , error}));
    });
  },[])
  return (
    <>    
        <div className='Home'> 
          <Searcher /> 
          <PokemonList pokemons={list}/> 
        </div>
    </>
  );
}

export default Home;
