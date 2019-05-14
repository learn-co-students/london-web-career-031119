import React, { Component } from 'react'

import Painting from './Painting'

import paintings from '../data/painting-data'

class PaintingList extends Component {

  state = {
    paintings: paintings
  }

  render () {
    return (
      <div>
        {
          this.state.paintings.map(painting =>
            <Painting
              key={painting.id}
              painting={painting}
              selectPainting={this.props.selectPainting}
            />
          )
        }
      </div>
    )
  }
}

export default PaintingList
