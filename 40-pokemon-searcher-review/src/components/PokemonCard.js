import React from "react";
import { Card } from "semantic-ui-react";

class PokemonCard extends React.Component {
  state = {
    front: true
  };

  changeImage = () => {
    this.setState({
      front: !this.state.front
    });
  };

  renderImage = pokemon => {
    return this.state.front ? (
      <img
        src={pokemon.sprites.front}
        alt="oh no!"
        onClick={this.changeImage}
      />
    ) : (
      <img src={pokemon.sprites.back} alt="oh no!" onClick={this.changeImage} />
    );
  };
  renderHp = pokemon => {
    return pokemon.stats.find(stat => {
      return stat.name === "hp";
    }).value;
  };
  render() {
    const { pokemon } = this.props;
    return (
      <Card>
        <div>
          <div className="image">{this.renderImage(pokemon)}</div>
          <div className="content">
            <div className="header">{pokemon.name}E</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.renderHp(pokemon)}
            </span>
          </div>
        </div>
      </Card>
    );
  }
}

export default PokemonCard;
