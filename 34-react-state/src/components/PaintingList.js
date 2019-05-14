import React, { Component } from 'react'

import Painting from './Painting'

import paintings from '../data/painting-data'

class PaintingList extends Component {

  state = {
    paintings: paintings
  }

  likePainting = id => {
    // const foundPainting = this.state.paintings.find(painting => painting.id === id)
    // const foundPaintingCopy = JSON.parse(JSON.stringify(foundPainting))
    // foundPaintingCopy.votes++
    // const index = this.state.paintings.indexOf(foundPainting)
    // const newPaintings = [...this.state.paintings]
    // newPaintings[index] = foundPaintingCopy

    const newPaintings = this.state.paintings.map(painting => painting.id === id
      ? {...painting, votes: painting.votes + 1}
      : painting
    )

    this.setState({ paintings: newPaintings })
  }

  filterPaintings = () => {
    const paintings = this.state.paintings
    const searchTerm = this.props.searchTerm.toLowerCase()
    return paintings.filter(painting => painting.title.toLowerCase().includes(searchTerm))
  }

  render () {

    const filteredPaintings = this.filterPaintings()

    return (
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
        {
          filteredPaintings.map(painting =>
            <Painting
              key={painting.id}
              painting={painting}
              selectPainting={this.props.selectPainting}
              likePainting={this.likePainting}
            />
          )
        }
      </div>
    )
  }
}

export default PaintingList
