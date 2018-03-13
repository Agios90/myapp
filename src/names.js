import React from 'react';

function NameList(props) {
	
	const names = props.names;
	const listNames = names.map((name, index) =>
		<li key={index}>{name}</li>
	);
	return (
		<ul>{listNames}</ul>
	)
}

const names = ['mitsos','kitsos'];

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.state = {filtervalue: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handlefilterChange = this.handlefilterChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlefilterSubmit = this.handlefilterSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }
  handlefilterChange(event) {
	this.setState({filtervalue: event.target.value});
  }

  handleSubmit(event) {
	names.push(this.state.value);
	this.setState({value: ''});
    event.preventDefault();
  }
  handlefilterSubmit(event) {
	var patt = new RegExp(this.state.filtervalue, 'i');
	for (var i=0; i<names.length; i++) {
		if (!patt.test(names[i])) {
			names[i]='';
		}
	}
	
	this.setState({filtervalue: ''});
    event.preventDefault();
  }

  render() {
    return (
	  <div>
		  <form onSubmit={this.handleSubmit}>
			<label>
			  Add a name: &nbsp;
			  <input type="text" value={this.state.value} onChange={this.handleChange} />
			</label>
			<input type="submit" value="Submit" />
		  </form>
		  
		  <NameList names={names} />
		  
		  <form onSubmit={this.handlefilterSubmit}>
			<label>
			  Filter names: &nbsp;
			  <input type="text" value={this.state.filtervalue} onChange={this.handlefilterChange} />
			</label>
			<input type="submit" value="Submit" />
		  </form>
	  </div>
    );
  }
}
export default NameForm;