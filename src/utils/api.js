var axios = require('axios');

module.exports = {
  fetchRecentTopCampers: function () {
    var uri = 'https://fcctop100.herokuapp.com/api/fccusers/top/recent';

    return axios.get(uri)
      .then(function (response) {
        return response.data;
      });
  },
  fetchTopAllTimeCampers: function () {
    var uri = 'https://fcctop100.herokuapp.com/api/fccusers/top/alltime';

    return axios.get(uri)
    .then(function (response) {
      return response.data;
    });
  }
}
