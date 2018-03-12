import React from 'react';
import { observable } from "mobx";
import { observer } from "mobx-react";

const counterState = observable ({
	count : 0,
	increment : function() {
		this.count++;
	},
	decrement : function() {
		this.count--;
	}
})

@observer class Counter extends React.Component {
  
	  render() {
	   return (
		<div>
			Counter: {counterState.count} <p />
			<button onClick={this.handleInc}> + </button>
			<button onClick={this.handleDec}> - </button>
		</div>
	   )
	  }
	  
	  handleInc = () => {
		  counterState.increment()
	  }
	  handleDec = () => {
		  counterState.decrement()
	  }
}

export default Counter;
