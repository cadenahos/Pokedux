import React, {useEffect} from 'react';
import { List } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { getPokemons } from '../../api/getPokemons';
import { setPokemon } from '../../actions';
import PokemonList from '../../components/PokemonList';
import Searcher from '../../components/Searcher';
import './styles.css';

const mapStateToProps = state =>({
  list: state.list
})

const mapDispatchToProps = dispatch => ({
  setPokemons: value => dispatch(setPokemon(value)) 
})
function Home({list, setPokemons}) {
  useEffect(() =>{
    getPokemons().then((res) => setPokemons(res.data.results));
  },[])
  return (
    <div className='Home'>
      <Searcher />
      <PokemonList/>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
