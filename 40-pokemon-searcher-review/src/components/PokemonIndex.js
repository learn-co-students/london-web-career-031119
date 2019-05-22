import React from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import { Search } from "semantic-ui-react";
import _ from "lodash";

let API = "http://localhost:3000/pokemon";

class PokemonPage extends React.Component {
  state = {
    pokemon: [],
    searchTerm: "",
    hpFilter: 0
  };

  componentDidMount() {
    this.getPokemon().then(pokemon => this.setState({ pokemon }));
  }

  getPokemon() {
    return fetch(API).then(resp => resp.json());
  }

  setSearch = event => {
    this.setState({
      searchTerm: event.target.value
    });
  };

  searchPokemon = () => {
    return this.state.pokemon.filter(pokemon => {
      return pokemon.name
        .toLowerCase()
        .includes(this.state.searchTerm.toLowerCase());
    });
  };

  addPokemon = pokemon => {
    this.setState({
      pokemon: [...this.state.pokemon, pokemon]
    });
  };

  handleHpChange = event => {
    this.setState({ hpFilter: parseInt(event.target.value) });
  };

  finalFilteredPokemon = () => {
    return this.filterByHp(this.searchPokemon());
  };

  filterByHp = collection => {
    return collection.filter(pokemon => {
      return (
        pokemon.stats.find(stat => stat.name === "hp").value >
        this.state.hpFilter
      );
    });
  };

  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={this.setSearch} showNoResults={false} />
        <input
          type="number"
          onChange={this.handleHpChange}
          value={this.state.hpFilter}
        />
        <br />
        <PokemonCollection
          pokemon={this.state.pokemon}
          finalFilteredPokemon={this.finalFilteredPokemon}
        />
        <br />
        <PokemonForm addPokemon={this.addPokemon} />
      </div>
    );
  }
}

export default PokemonPage;
