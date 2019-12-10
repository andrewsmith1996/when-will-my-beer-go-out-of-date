import React from 'react';
import { AddBeerForm } from './components/AddBeerForm';
import './App.css';
import { BeerList } from './components/BeerList';
var moment = require('moment');
moment().format();

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      'beers': [],
      beerToAdd: null
    }
    this.handleBeerAdd = this.handleBeerAdd.bind(this);
  }

  handleBeerAdd(val) {
    this.setState(prevState => ({
      beers: [...prevState.beers, val]
    }))
  }

  render() {
    return (
      <div className="App">
        <AddBeerForm onAdd={this.handleBeerAdd}/>
        <BeerList beers={this.state.beers}/>
      </div>
    );
  }
}

export default App;
