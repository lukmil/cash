import Promise from 'promise';
import configRequest from '../utils/config-request';

const config = {
  cashIn: null,
  cashOut: {
    natural: null,
    juridical: null,
  },
};

const CashInConfig = configRequest.GET('cash-in')
  .then((result) => {
    config.cashIn = result;
  });
const cashOutNaturalConfig = configRequest.GET('cash-out/natural')
  .then((result) => {
    config.cashOut.natural = result;
  });
const cashOutJuridicalConfig = configRequest.GET('cash-out/juridical')
  .then((result) => {
    config.cashOut.juridical = result;
  });

function onLoad(callback) {
  return Promise.all([CashInConfig, cashOutNaturalConfig, cashOutJuridicalConfig])
    .finally(() => {
      callback(config);
    });
}

module.exports = { onLoad };
