import React, { Component } from 'react'

import Navbar from './Navbar'
import PaintingList from './PaintingList'

class App extends Component {

  state = {
    selectedPainting: null
  }

  selectPainting = painting => {
    // this.state.selectedPainting = {} << NO NO NO!
    this.setState({ selectedPainting: painting })
  }

  deselectPainting = () => {
    this.setState({ selectedPainting: null })
  }

  render () {
    return <div className="App">
      <Navbar title='My Paintings App To Please Diogo' subtitle='Gotta fetch them all.' colour='pink' icon='blind' />
      { 
        this.state.selectedPainting === null
          ? <PaintingList selectPainting={this.selectPainting} />
          : <h1>
              I am {this.state.selectedPainting.title}, trust me.
              <button onClick={this.deselectPainting}>GO BACK</button>
            </h1>
      }
    </div>
  }
}

export default App

