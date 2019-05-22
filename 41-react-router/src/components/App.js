import React, { Component } from 'react'

import { Route, Switch } from 'react-router-dom'

import Navbar from './Navbar'
import PaintingList from './PaintingList'
import PaintingDetails from './PaintingDetails'

class App extends Component {

  state = {
    searchTerm: '',
    paintings: []
  }

  likePainting = id => {
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

  updateSearchTerm = (event) => {
    this.setState({ searchTerm: event.target.value })
  }

  componentDidMount () {
    this.getPaintings()
      .then(paintings => this.setState({ paintings }))
    console.log('App finished rendering!')
  }

  render () {
    console.log('App started rendering!')
    return <div className="App">
      <Navbar updateSearchTerm={this.updateSearchTerm} title='My Paintings App' subtitle='Gotta fetch them all.' colour='pink' icon='blind' />
        <Switch>
          <Route exact path='/' render={props => <h1>HOME!</h1>} />
          <Route exact path='/paintings' component={props => <PaintingList {...props} searchTerm={this.state.searchTerm} paintings={this.state.paintings} />} />
          <Route path='/paintings/:id' component={props => {
            const id = props.match.params.id
            const painting = this.state.paintings.find(painting => painting.id === id)
            if (this.state.paintings.length === 0) return <h1>Loading...</h1>
            if (this.state.paintings.length > 0 && painting === undefined) return <h1>Painting Not Found</h1>
            return <PaintingDetails painting={painting} {...props} />
          }} />
          <Route component={props => <h1>404 - Not Found</h1>}/>
        </Switch>
    </div>
  }
}

export default App

