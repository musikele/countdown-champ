import React, { Component } from 'react'
import './App.css'
import StopwatchClock from './StopwatchClock'
import { Form, FormControl, Button } from 'react-bootstrap'

class Stopwatch extends Component {
  //add a state to a component
  constructor(props) {
    super(props)
    this.state = {
      deadline: '100'
    }
  }

  changeDeadline() {
    console.log('state', this.state)
    // never mutate or change state directly !
    // pass new object
    this.setState({
      deadline: this.state.newDeadline
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-title">
          Countdown from {this.state.deadline}
        </div>
        <StopwatchClock deadline={this.state.deadline} />
        <div>
          <Form
            inline
            onSubmit={e => {
              e.preventDefault()
              this.changeDeadline()
            }}
          >
            <FormControl
              className="deadline-input"
              placeholder="new date"
              onChange={event =>
                this.setState({
                  newDeadline: event.target.value
                })}
            />
            <Button onClick={() => this.changeDeadline()}>Submit</Button>
          </Form>
        </div>
      </div>
    )
  }
}

export default Stopwatch
