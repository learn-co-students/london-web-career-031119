import React from 'react'

const PaintingDetails = props =>
  <div>
    <h1>{props.painting.title} ({props.painting.dimensions.width} x {props.painting.dimensions.height})</h1>
    <img src={props.painting.image} />
    <p>{props.painting.artist.name} from {props.painting.artist.hometown}</p>
    <p>{props.painting.artist.birthday} - {props.painting.artist.deathday}</p>
    <button onClick={props.deselectPainting}>GO BACK</button>
  </div>

export default PaintingDetails

// {
//   id: '59bd5a4c275b247913821d2a',
//   collecting_institution: '',
//   date: 'ca. 1665â€“1667',
//   dimensions: {
//     text: '17 1/2 Ã— 15 3/4 in',
//     height: 17.5,
//     width: 15.75,
//     depth: null,
//     diameter: null
//   },
//   slug: 'johannes-vermeer-study-of-a-young-woman',
//   title: 'Study of a Young Woman',
//   image:
//     'https://d32dm0rphc51dk.cloudfront.net/pLcp7hFbgtfYnmq-b_LXvg/medium.jpg',
//   artist: {
//     name: 'Johannes Vermeer',
//     hometown: 'Delft, Netherlands',
//     birthday: '1632',
//     deathday: '1675'
//   },
//   votes: 21
// }
