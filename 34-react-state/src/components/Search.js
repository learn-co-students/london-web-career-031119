import React, { Component } from 'react'

const Search = props =>
  <div style={{ position: 'absolute', right: 0, top: 20, width: '200px' }}>
    <input onChange={props.handleChange} placeholder='enter your search here...' />
  </div>


export default Search
