import React from 'react'

import { Link } from 'react-router-dom'

const Painting = (props) =>
  <Link to={`/paintings/${props.painting.id}`}>
    <div className='ui card'>
      <div className='image'>
        <img src={props.painting.image} />
      </div>
      <div className='content'>
        <h2 className='header'>{props.painting.title}</h2>
        <p className='meta'>{props.painting.artist.name}</p>
      </div>
      <div className="extra content">
      <a>
        <i className="like icon" onClick={event => {
          event.stopPropagation()
          props.likePainting(props.painting.id)
        }}></i>
        {props.painting.votes}
      </a>
    </div>
    </div>
  </Link>

export default Painting 
