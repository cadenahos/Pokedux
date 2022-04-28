import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons } from '../../api/getPokemons';
import { setPokemon } from '../../actions';
import PokemonList from '../../components/PokemonList';
import Searcher from '../../components/Searcher';
import MessageError from '../../components/ErrorMessage';
import './styles.css';

function Home() {
  const ErrorMesage = true;
  const dispatch = useDispatch();
  const list = useSelector(state => state.list);
  useEffect(() =>{
    getPokemons().then((res) => {
      dispatch(setPokemon(res.data.results))
    });
  },[])
  return (
    <>

     {
      ErrorMesage 
      ? 
       <MessageError/>
      : 
        <div className='Home'> 
          <Searcher /> 
          <PokemonList pokemons={list}/> 
        </div>
     }
    </>
  );
}

export default Home;
