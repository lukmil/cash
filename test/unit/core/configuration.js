import { describe, it } from 'mocha';
import assert from 'assert';
import configuration from '../../../app/core/configuration';
import configExample from '../../fixtures/config-example';

describe('Configuration', () => {
  it('should load config and finally call callback with config arg', (done) => {
    let isCallbackCalled = false;

    function callback(config) {
      isCallbackCalled = true;
      assert.deepStrictEqual(config, configExample);
    }

    configuration.onLoad(callback).finally(() => {
      assert.ok(isCallbackCalled);
      done();
    });
  });
});
