var React = require('react');
var PropTypes = require('prop-types');
var api = require('./utils/api');

function CamperTable (props) {
  return (
    <table className='camper-table'>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th className='button'>Points in the Past 30 Days</th>
          <th className='button'>All Time Points</th>
        </tr>
      </thead>
      <tbody>
        {props.campers.map(function (camper, index) {
          return (
            <tr key={camper.username}>
              <td>#{index + 1}</td>
              <td>{camper.username}</td>
              <td>{camper.recent}</td>
              <td>{camper.alltime}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  );
}

class Leaderboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      campers: null
    }
  }

  componentDidMount() {
    api.fetchRecentTopCampers()
      .then(function (response) {
        this.setState(function () {
          return {
            campers: response
          }
        })
      }.bind(this));
  }

  render() {
    return (
      <div>
          {!this.state.campers
            ? <p>Loading</p>
            : <CamperTable campers={this.state.campers} />
          }
      </div>
    )
  }
}

CamperTable.propTypes = {
  campers: PropTypes.array.isRequired,
}

module.exports = Leaderboard;
