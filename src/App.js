import React, { Component } from 'react';
var Leaderboard = require('./Leaderboard');
var Header = require('./Header');

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Header />
        <Leaderboard />
      </div>
    );
  }
}

export default App;
