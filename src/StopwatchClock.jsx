import React, { Component } from 'react'
import './App.css'

export default class StopwatchClock extends Component {
  constructor(props) {
    super(props)
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      deadline: props.deadline
    }
  }

  componentWillReceiveProps(nextProps) {
    this.getTimeUntil(nextProps.deadline)
  }

  componentWillMount() {
    this.getTimeUntil(this.state.deadline)
  }

  componentDidMount() {
    setInterval(() => this.getTimeUntil(this.state.deadline), 1000)
  }

  leading0(num) {
    return num < 10 ? '0' + num : num
  }

  getTimeUntil(deadline) {
    const seconds = Math.floor(deadline % 60)
    const minutes = Math.floor(deadline / 60) % 60
    const hours = Math.floor(deadline / 60 / 60) % 24
    const days = Math.floor(deadline / 60 / 60 / 24)
    const newDeadline = deadline - 1

    this.setState({
      days,
      hours,
      minutes,
      seconds,
      deadline: newDeadline
    })
  }

  render() {
    return (
      <div>
        <div className="clock-days">
          {this.leading0(this.state.days)} giorni
        </div>
        <div className="clock-hours">
          {this.leading0(this.state.hours)} ore
        </div>
        <div className="clock-minutes">
          {this.leading0(this.state.minutes)} minuti
        </div>
        <div className="clock-seconds">
          {this.leading0(this.state.seconds)} secondi
        </div>
      </div>
    )
  }
}
