import { describe, it } from 'mocha';
import assert from 'assert';
import percentageCounter from '../../../app/utils/percentage-counter';

describe('Percentage counter', () => {
  function assertThrowsError(sum, percents) {
    const block = () => percentageCounter(sum, percents);
    assert.throws(block, Error('Invalid sum or percents'));
  }

  it('sum is null', () => {
    assertThrowsError(null, 1);
  });

  it('percent is null', () => {
    assertThrowsError(2, null);
  });

  it('sum is below zero', () => {
    assertThrowsError(-1, 3);
  });

  it('percents are below zero', () => {
    assertThrowsError(4, -3);
  });

  it('count percentage', () => {
    const actual = percentageCounter(200, 20);
    assert.strictEqual(actual, 40);
  });
});
