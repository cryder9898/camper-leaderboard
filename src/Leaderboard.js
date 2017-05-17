var React = require('react');
var PropTypes = require('prop-types');
var api = require('./utils/api');
var SelectedTime = require('./SelectedTime');

function CamperTable (props) {
  return (
    <table className='camper-table'>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Points in the Past 30 Days</th>
          <th>All Time Points</th>
        </tr>
      </thead>
      <tbody>
        {props.campers.map(function (camper, index) {
          return (
            <tr key={camper.username}>
              <td>#{index + 1}
                <img src={camper.img} alt={camper.username} />
              </td>
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

CamperTable.propTypes = {
  campers: PropTypes.array.isRequired,
}

class Leaderboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      campers: null,
      selectedTime: 'recent'
    }

    this.updateTable = this.updateTable.bind(this);
  }

  componentDidMount() {
    this.updateTable(this.state.selectedTime);
  }

  updateTable(time) {
    // initialize
    this.setState(function () {
      return {
        campers: null,
        selectedTime: time === 'alltime' ? time = 'recent' : time = 'alltime'
      }
    });

    //AJAX setting table
    api.fetchTopCampers(time)
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
            : <div>
                <SelectedTime
                  time={this.state.selectedTime}
                  onSelect={this.updateTable}
                />
                <CamperTable campers={this.state.campers} />
              </div>
          }
      </div>
    )
  }
}

module.exports = Leaderboard;
