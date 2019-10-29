import fetch from 'node-fetch';
// It is a humble object so I will not try to test it
const configHostname = 'http://private-38e18c-uzduotis.apiary-mock.com/config/';

function makeRequest(hostname, path) {
  return fetch(`${hostname}${path}`);
}

function get(configType) {
  return makeRequest(configHostname, configType)
    .then((response) => response.json())
    .catch(() => {
      throw new Error('Invalid json or url'); // I could check by res status for more details
    });
}

module.exports = { get };
