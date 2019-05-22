import React from 'react'

import { Link } from 'react-router-dom'

import Search from './Search'

const Navbar = props =>
  <div className={`ui inverted ${props.colour} menu`}>
    <a className='item'>
      <h2 className="ui header">
        <i className={`${props.icon} icon`}></i>
        <div className="content">
          {props.title}
        </div>
        <div className="sub header">
          {props.subtitle}
        </div>
      </h2>
    </a>
    <Link to='/'>HOME</Link> | <Link to='/paintings'>PAINTINGS</Link>
    <Search handleChange={props.updateSearchTerm} />
  </div>

export default Navbar
