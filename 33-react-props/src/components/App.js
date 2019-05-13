import React from 'react'

import Navbar from './Navbar'
import PaintingList from './PaintingList'

import paintings from '../data/painting-data'
import { name } from '../data/painting-data'

const App = () =>
  <div className="App">
    <Navbar title='My Paintings App To Please Diogo' subtitle='Gotta fetch them all.' colour='pink' icon='blind' />
    <PaintingList paintings={paintings} />
  </div>

export default App

