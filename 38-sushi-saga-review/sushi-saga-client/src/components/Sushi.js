import React, { Fragment, Component } from "react";

class Sushi extends Component {
  state = {
    eaten: false
  };

  eatSushi = sushi => {
    if (sushi.price <= this.props.budget && !this.state.eaten) {
      this.setState({ eaten: true });
      this.props.storeEatenSushi(sushi);
    }
  };

  displayImage = () => {
    return this.state.eaten ? null : (
      <img src={this.props.sushi.img_url} width="100%" />
    );
  };
  render() {
    return (
      <div className="sushi">
        <div className="plate" onClick={() => this.eatSushi(this.props.sushi)}>
          {/* Tell me if this sushi has been eaten! */}
          {this.displayImage()}
        </div>

        <h4 className="sushi-details">
          {this.props.sushi.name} - ${this.props.sushi.price}
        </h4>
      </div>
    );
  }
}

export default Sushi;
