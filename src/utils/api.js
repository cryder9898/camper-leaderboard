var axios = require('axios');

module.exports = {
  fetchTopCampers: function (time) {
    var uri = 'https://fcctop100.herokuapp.com/api/fccusers/top/' + time;
    return axios.get(uri)
      .then(function (response) {
        return response.data;
      });
  },
}
