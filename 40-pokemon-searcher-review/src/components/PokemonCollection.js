import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

class PokemonCollection extends React.Component {
  renderPokemon = array => {
    return array.map(pokemon => {
      return <PokemonCard pokemon={pokemon} />;
    });
  };
  render() {
    return (
      <div>
        <h1>Hello From Pokemon Collection</h1>
        <Card.Group itemsPerRow={6}>
          {this.renderPokemon(this.props.finalFilteredPokemon())}
        </Card.Group>
      </div>
    );
  }
}
export default PokemonCollection;
