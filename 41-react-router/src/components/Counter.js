import React, { Component } from 'react'

class Counter extends Component {
  constructor (props) {
    super(props)
    this.state = {
      count: 0
    }
    this.counterHandle = null
  }
  

  increaseCount = () => {
    this.setState({ count: this.state.count + 1 })
  }

  componentDidMount () {
    this.counterHandle = setInterval(this.increaseCount, 1000)
  }

  componentWillUnmount () {
    console.log('Counter says bye!')
    clearInterval(this.counterHandle)
  }

  render () {
    const { count } = this.state
    return <h1>{count}<button onClick={this.props.hideCounter}>X</button></h1>
  }
}

export default Counter
