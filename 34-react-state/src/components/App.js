import React, { Component } from 'react'

import Navbar from './Navbar'
import PaintingList from './PaintingList'

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
          ? <PaintingList searchTerm={this.state.searchTerm} selectPainting={this.selectPainting} />
          : <h1>
              I am {this.state.selectedPainting.title}, trust me.
              <button onClick={this.deselectPainting}>GO BACK</button>
            </h1>
      }
    </div>
  }
}

export default App

