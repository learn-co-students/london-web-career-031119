import React, { Component } from 'react'

import Navbar from './Navbar'
import PaintingList from './PaintingList'
import PaintingDetails from './PaintingDetails'

class App extends Component {

  state = {
    selectedPainting: null,
    searchTerm: ''
  }

  selectPainting = painting => {
    // this.state.selectedPainting = {} << NO NO NO!
    this.setState({ selectedPainting: painting })
  }

  deselectPainting = () => {
    this.setState({ selectedPainting: null })
  }

  updateSearchTerm = (event) => {
    this.setState({ searchTerm: event.target.value })
  }

  render () {
    return <div className="App">
      <Navbar updateSearchTerm={this.updateSearchTerm} title='My Paintings App To Please Diogo' subtitle='Gotta fetch them all.' colour='pink' icon='blind' />
      { 
        this.state.selectedPainting === null
          ? <PaintingList
              searchTerm={this.state.searchTerm}
              selectPainting={this.selectPainting}
            />
          : <PaintingDetails
              painting={this.state.selectedPainting}
              deselectPainting={this.deselectPainting}
            />
      }
    </div>
  }
}

export default App

