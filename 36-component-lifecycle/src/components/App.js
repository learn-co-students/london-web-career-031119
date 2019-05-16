import React, { Component } from 'react'

import Navbar from './Navbar'
import PaintingList from './PaintingList'
import PaintingDetails from './PaintingDetails'
import Counter from './Counter'

class App extends Component {

  state = {
    selectedPainting: null,
    searchTerm: '',
    showCounter: true
  }

  hideCounter = () => {
    this.setState({ showCounter: false })
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

  componentDidMount () {
    console.log('App finished rendering!')
  }

  render () {
    console.log('App started rendering!')
    return <div className="App">
      <Navbar updateSearchTerm={this.updateSearchTerm} title='My Paintings App' subtitle='Gotta fetch them all.' colour='pink' icon='blind' />
      { this.state.showCounter && <Counter hideCounter={this.hideCounter} />}
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

