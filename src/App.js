import React from 'react'

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {people: []}
  }

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
    .then(resp => resp.json())
    .then(jsObj => {
      this.setState({
        people: jsObj.people
      })
    })
  }

  render() {
    return (
      <ul>
        { this.state.people.map(person => <li>{person.name}</li>) }
      </ul>
    )
  }

}
