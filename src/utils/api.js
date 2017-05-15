var axios = require('axios');

function getRecentTopCampers () {
  var uri = 'https://fcctop100.herokuapp.com/api/fccusers/top/recent';
  return axios.get(uri)
    .then(function (response) {
      return response.data;
    });
}

function getTopAllTimeCampers () {
  var uri = 'https://fcctop100.herokuapp.com/api/fccusers/top/alltime';

  return axios.get(uri)
  .then(function (response) {
    return response.data;
  });
}



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
