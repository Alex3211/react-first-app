import React from 'react';
import {Recovery} from '../../utils/Recovery'
import './Pokemon.css';

export default class Pokemon extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
          current: '',
          data : []
        }
    }

    componentDidMount()
    {
        Recovery().then((results) => {
          const data = results.pokemon.map(result => {
            result.stats = results.pokemon_stats.filter(element => element.pokemon_id === result.id);
            result.types = results.pokemon_types.filter(element => element.pokemon_id === result.id);
            result.types = result.types.map(type => {
              type.advanced = results.types.find(e => e.id === type.type_id);
              return type;
            });
            result.stats = result.stats.map(stat => {
              stat.advanced = results.stats.find(e => e.id === stat.stat_id);
              return stat;
            });
            return result;
          })
          this.setState({data})
        }).catch(error => console.log(error));
    }

    getData() {
      if(!this.state.data) return [];
      const data = this.state.data;
      return data ;
    }

    pokemonClick(pokemonId) {
      this.setState({current: pokemonId})
    }
    render() 
    {
      const { current } = this.state;
        return (
            <div className="container">
                { this.getData().map((pokemon, index) => 
                  ( 
                  <div className="content" key={`container-pokemons${index}`} onClick={() => (current !== '') ? this.pokemonClick('') : this.pokemonClick(pokemon.identifier)}>
                    <p key={`identifier${index}`}> {pokemon.identifier} </p>
                    <img key={`image1${index}`} alt={pokemon.identifier} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}/>
                    
                    { current === pokemon.identifier && 
                      <div className="overlay">
                        <div className="overlay-container">
                          <img key={`image1${index}`} alt={pokemon.identifier} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}/>
                          <img key={`image2${index}`} alt={pokemon.identifier} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${pokemon.id}.png`}/>
                          <img key={`image3${index}`} alt={pokemon.identifier} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/${pokemon.id}.png`}/>
                          <img key={`image4${index}`} alt={pokemon.identifier} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${pokemon.id}.png`}/>
                        </div>
                      </div>
                    }


                  </div>
                  )
                )}
            </div>
        );
    }
} 