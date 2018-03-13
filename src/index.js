import React from "react";
import { render } from "react-dom";
import DevTools from "mobx-react-devtools";
import Counter from './Counter.js';
import Timer from './Timer.js';
import Names from './names.js';

class AppState extends React.Component {
	
	render() {
		return (
			<div>
				<DevTools /> 
				<h3> some react-mobx experiments </h3>
				<span>_______________________________________________</span> 
				<br />
				<br />
				<Counter />
				<br />
				<span>_______________________________________________</span> 
				<br /> 
				<br />
				<Timer />
				<br />
				<span>_______________________________________________</span> 
				<br /> 
				<br />
				<Names />
				<br />
				<span>_______________________________________________</span> 
				<br /> 
				<br />
			</div>
		);
	
	}		
	
}

render (
	<AppState />,
	document.getElementById("root")
);
	


