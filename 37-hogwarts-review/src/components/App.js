import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';

import Filter from './Filter'
import HogList from './HogList'

class App extends Component {
  state = {
    sort: '',
    showGreasedOnly: false,
    hogs: []
  }

  updateSort = sort => {
    this.setState({ sort })
  }

  toggleGreased = () => {
    this.setState({ showGreasedOnly: !this.state.showGreasedOnly })
  }

  getHogs = () => {
    this.setState({ hogs })
  }

  get sortedAndFilteredHogs() {
    const { hogs, showGreasedOnly, sort } = this.state
    const weight = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'

    const sortedHogs = [...hogs]

    if (sort === 'name') {
      sortedHogs.sort((a, b) => a.name.localeCompare(b.name))
    }

    if (sort === 'weight') {
      sortedHogs.sort((a, b) => {
        if (a[weight] > b[weight]) return 1
        if (a[weight] < b[weight]) return -1
        return 0
      })
    }

    return showGreasedOnly
      ? sortedHogs.filter(hog => hog.greased)
      : sortedHogs
  }

  componentDidMount() {
    this.getHogs()
  }

  render() {
    const { toggleGreased, updateSort, sortedAndFilteredHogs } = this
    return (
      <div className="App">
          <Nav />
          <Filter updateSort={updateSort} toggleGreased={toggleGreased} />
          <HogList hogs={sortedAndFilteredHogs} />
      </div>
    )
  }
}

export default App;
