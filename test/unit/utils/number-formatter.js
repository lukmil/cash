import { describe, it } from 'mocha';
import assert from 'assert';
import numberFormatter from '../../../app/utils/number-formatter';

describe('Number formatter ceil with 2 decimal places', () => {
  it('number is null', () => {
    const block = () => numberFormatter.ceilWith2DecimalPlaces();
    assert.throws(block, Error('Number is not given'));
  });

  it('number is 0', () => {
    const actual = numberFormatter.ceilWith2DecimalPlaces(0);
    assert.strictEqual(actual.toString(), '0.00');
  });

  it('number is 1.1', () => {
    const actual = numberFormatter.ceilWith2DecimalPlaces(1.1);
    assert.strictEqual(actual.toString(), '1.10');
  });

  it('number is 1.45', () => {
    const actual = numberFormatter.ceilWith2DecimalPlaces(1.45);
    assert.strictEqual(actual, '1.45');
  });

  it('number is 0.023', () => {
    const actual = numberFormatter.ceilWith2DecimalPlaces(0.023);
    assert.strictEqual(actual, '0.03');
  });

  it('number is 0.026', () => {
    const actual = numberFormatter.ceilWith2DecimalPlaces(0.026);
    assert.strictEqual(actual, '0.03');
  });
});
