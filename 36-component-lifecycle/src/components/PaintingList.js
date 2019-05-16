import React, { Component } from 'react'

import Painting from './Painting'

const style = {
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'flex-start',
  justifyContent: 'space-around'
}
class PaintingList extends Component {

  state = {
    paintings: []
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

  getPaintings = () => {
    return fetch('http://localhost:3001/paintings')
      .then(resp => resp.json())
  }

  filterPaintings = () => {
    const paintings = this.state.paintings
    const searchTerm = this.props.searchTerm.toLowerCase()
    return paintings.filter(painting => painting.title.toLowerCase().includes(searchTerm))
  }

  componentDidMount () {
    this.getPaintings()
      .then(paintings => this.setState({ paintings }))
    console.log('PaintingList finished rendering!')    
  }

  render () {
    console.log('PaintingList started rendering!')
    console.log('PaintingList state:', this.state)
    const filteredPaintings = this.filterPaintings()

    return (
      <div style={style}>
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
