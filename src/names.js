import React from 'react';

function NameList(props) {
	
	const names = props.names;
	const listNames = names.map((name) =>
		<li>{name}</li>
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

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
	names.push(this.state.value);
	this.setState({value: ''});
    event.preventDefault();
  }

  render() {
    return (
	  <div>
		  <form onSubmit={this.handleSubmit}>
			<label>
			  Add some names: &nbsp;
			  <input type="text" value={this.state.value} onChange={this.handleChange} />
			</label>
			<input type="submit" value="Submit" />
		  </form>
		  <NameList names={names} />
	  </div>
    );
  }
}
export default NameForm;