import Promise from 'promise';
import configRequest from '../utils/config-request';

const config = {
  cashIn: null,
  cashOut: {
    natural: null,
    juridical: null,
  },
};

const cashInConfig = configRequest.get('cash-in')
  .then((result) => {
    config.cashIn = result;
  });
const cashOutNaturalConfig = configRequest.get('cash-out/natural')
  .then((result) => {
    config.cashOut.natural = result;
  });
const cashOutJuridicalConfig = configRequest.get('cash-out/juridical')
  .then((result) => {
    config.cashOut.juridical = result;
  });

function onLoad(callback) {
  return Promise.all([cashInConfig, cashOutNaturalConfig, cashOutJuridicalConfig])
    .finally(() => {
      callback(config);
    });
}

module.exports = { onLoad };
