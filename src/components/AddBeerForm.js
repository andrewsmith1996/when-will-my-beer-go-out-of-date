
import React from "react";

export class AddBeerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'name': '',
      'brewery': '',
      'date': ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onAdd(this.state);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Essay:
            <input value={this.state.name} name="name" onChange={this.handleChange} />
            <input value={this.state.brewery} name="brewery" onChange={this.handleChange} />
            <input value={this.state.date} name="date" onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}