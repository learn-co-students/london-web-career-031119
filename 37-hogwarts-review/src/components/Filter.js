import React from 'react'

const Filter = ({ toggleGreased, updateSort }) =>
  <div>
    <div>
      <label>Sort by: </label>
      <select onChange={event => updateSort(event.target.value)} defaultValue='no sorting'>
        <option value='name'>name</option>
        <option value='weight'>weight</option>
      </select>
    </div>
    <div>
      <label>Greased:</label>
      <input onClick={toggleGreased} type="checkbox" />
    </div>
  </div>

export default Filter
