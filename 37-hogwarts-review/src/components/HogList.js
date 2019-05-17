import React from 'react'

import Hog from './Hog'

const HogList = ({ hogs }) =>
  <div id='hog-list'>
    {
      hogs.map(hog => <Hog hog={hog} />)
    }
  </div>

export default HogList
