var React = require('react');
var api = require('./utils/api');

class Leaderboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      campers: null
    }
  }

  componentDidMount() {
    api.fetchTopCampers()
      .then(function (response) {
        console.log(response);
      })
  }

  render() {
    return (
      <div>
        {}
      </div>
    )
  }
}

module.exports = Leaderboard;
