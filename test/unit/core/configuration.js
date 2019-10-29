import {
  afterEach, beforeEach, describe, it,
} from 'mocha';
import assert from 'assert';
import sinon from 'sinon';
import configuration from '../../../app/core/configuration';
import configRequest from '../../../app/utils/config-request';

const configLoaded = 'config loaded';

describe('Configuration', () => {
  let configRequestStub;
  beforeEach(() => {
    const getFake = () => new Promise((resolve) => resolve(configLoaded));
    configRequestStub = sinon.stub(configRequest, 'get').callsFake(getFake);
  });
  afterEach(() => {
    configRequestStub.restore();
  });

  it('should load config and finally call callback with config arg', (done) => {
    const expectedConfig = {
      cashIn: configLoaded,
      cashOut: {
        natural: configLoaded,
        juridical: configLoaded,
      },
    };
    function callback(config) {
      assert.deepStrictEqual(config, expectedConfig);
      done();
    }

    configuration.onLoad(callback).done();
  });
});
