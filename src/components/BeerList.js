import React from "react";

var moment = require('moment');
moment().format();

export class BeerList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {'beers': []}
  }

  componentDidMount() {
    this.setState ({
      'beers': this.props.beers.map((beer, i) =><li key="{i}">{beer.name} - {beer.brewery} - ({this.getDateDiff(beer.date)} days ago)</li>)
    });
  }

  getDateDiff(date) {
    return Math.abs(moment().diff(moment(date).toDate(), 'days'));
  }

  componentWillReceiveProps(nextProps) {
    this.setState(prevState => ({
      beers: [...prevState.beers,  nextProps.beers]
    }))
  }

  render() {
    return (
      <div>
        <ul>{ this.state.beers }</ul>
      </div>
    );
  }
}