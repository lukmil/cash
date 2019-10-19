import { describe, it } from 'mocha';
import assert from 'assert';
import countPercentage from '../../../app/utils/percentage-counter';

describe('Percentage counter', () => {
  function assertThrowsError(sum, percents) {
    const block = () => countPercentage(sum, percents);
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
    const actual = countPercentage(0, 20);
    assert.strictEqual(actual, 0);
  });

  it('percent is zero', () => {
    const actual = countPercentage(2, 0);
    assert.strictEqual(actual, 0);
  });

  it('count percentage', () => {
    const actual = countPercentage(200, 20);
    assert.strictEqual(actual, 40);
  });
});
