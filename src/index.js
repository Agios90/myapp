import React from "react";
import { render } from "react-dom";
import DevTools from "mobx-react-devtools";
import Counter from './Counter.js';
import Timer from './Timer.js';
import Names from './names.js';
import Game from './ttt.js';

class App extends React.Component {
	
	render() {
		return (
			<div>
				<DevTools /> 
				<h3> some react-mobx experiments - <a href="https://github.com/Agios90/myapp">github</a> </h3>
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
				<Game />
				<br />
				<span>_______________________________________________</span> 
			</div>
		);
	
	}		
	
}

render (
	<App />,
	document.getElementById("root")
);
	


