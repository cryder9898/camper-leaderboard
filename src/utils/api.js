var axios = require('axios');

module.exports = {
  fetchTopCampers: function () {
    var uri = 'https://fcctop100.herokuapp.com/api/fccusers/top/recent';

    return axios.get(uri)
      .then(function (response) {
        return response.data;
      });
  }
}
