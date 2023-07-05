// Write your code here
import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {count: 0}
  onAccelerate = () => {
    this.setState(prevState => ({
      count: prevState.count + 10,
    }))
  }
  onBrake = () => {
    this.setState(prevState => ({
      count: prevState.count - 10,
    }))
  }
  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          className="img"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png alt should be speedometer"
          alt="speedometer"
        />
        <p className="speed">
          Speed is <span>{accelerate}</span>mph
        </p>
        <p className="text">Min Limit is 0mph, Max Limit is 200mph</p>
        <div class="btn-container">
          <button onClick={this.onAccelerate} className="button-acc">
            Accelerate
          </button>
          <button onClick={this.onBrake} className="brake-button">
            Apply Brakes
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
