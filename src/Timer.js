import React from 'react';
import { observable, action } from 'mobx';
import { observer } from 'mobx-react';

@observer class TimerView extends React.Component {
	render() {
		return (
			<button onClick={this.props.timerState.reset}>Seconds passed: {this.props.timerState.timer}</button>
		)
	};
}

class Timer extends React.Component {
  @observable timer = 0;

  constructor() {
	super();
    setInterval(() => {
      this.timer += 1;
    }, 1000);
  }

  @action.bound
  reset() {
    this.timer = 0;
  }
  
  render() {
	  return (
		  <div>
			<TimerView timerState={new Timer()} />
		  </div>
	  )
  };

}

export default Timer;

