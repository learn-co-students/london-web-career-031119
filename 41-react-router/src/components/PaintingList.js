import React, { Component } from 'react'

import Painting from './Painting'

const style = {
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'flex-start',
  justifyContent: 'space-around'
}
class PaintingList extends Component {


  filterPaintings = () => {
    const paintings = this.props.paintings
    const searchTerm = this.props.searchTerm.toLowerCase()
    return paintings.filter(painting => painting.title.toLowerCase().includes(searchTerm))
  }

  componentDidMount () {
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
              likePainting={this.likePainting}
            />
          )
        }
      </div>
    )
  }
}

export default PaintingList
