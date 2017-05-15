import React, { Component } from 'react';
var Leaderboard = require('./Leaderboard');
var Header = require('./Header');

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Leaderboard />
      </div>
    );
  }
}

export default App;
