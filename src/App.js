import React, { Component } from 'react';
var Leaderboard = require('./Leaderboard');

function Header (props) {
  return (
    <div>
      Header
    </div>
  )
}

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
