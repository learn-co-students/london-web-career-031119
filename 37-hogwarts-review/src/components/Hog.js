import React from 'react'

const weight = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'
const medal = 'highest medal achieved'

const Hog = ({ hog }) => {

  const fileName = hog.name.toLowerCase().replace(/ /g, '_')
  const url = require(`../hog-imgs/${fileName}.jpg`)

  console.log('url: ', url)

  return <div className='hog'>
    <h2>{hog.name}</h2>
    <img src={url} />
    <p>Specialty: {hog.specialty} </p>
    <p>Weight: {hog[weight]}</p>
    <p>Greased: {hog.greased ? 'YUP' : 'NOPE'}</p>
    <p>Highest medal achieved: {hog[medal]}</p>
  </div>
}

export default Hog
