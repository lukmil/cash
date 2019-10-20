import { describe, it } from 'mocha';
import assert from 'assert';
import percentageCounter from '../../../app/utils/percentage-counter';

describe('Percentage counter', () => {
  function assertThrowsError(sum, percents) {
    const block = () => percentageCounter.count(sum, percents);
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

  it('sum is zero', () => {
    const actual = percentageCounter.count(0, 20);
    assert.strictEqual(actual, 0);
  });

  it('percent is zero', () => {
    const actual = percentageCounter.count(2, 0);
    assert.strictEqual(actual, 0);
  });

  it('count percentage', () => {
    const actual = percentageCounter.count(200, 20);
    assert.strictEqual(actual, 40);
  });
});
