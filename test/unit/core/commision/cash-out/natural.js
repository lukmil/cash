import { describe, it } from 'mocha';
import assert from 'assert';
import countNaturalCommission from '../../../../../app/core/commission/cash-out/natural';

const createTransaction = (date, amount) => ({ date, operation: { amount } });
const transactions = [
  createTransaction('2019-10-14', 1001),
  createTransaction('2019-10-21', 800),
  createTransaction('2019-10-28', 300),
];

describe('Cash out natural commissions', () => {
  it('week total amount is greater than week limit', () => {
    const actual = countNaturalCommission(createTransaction('2019-10-15', 100), transactions);
    assert.strictEqual(actual, 0.3);
  });

  it('week total amount with operation amount is greater than week limit', () => {
    const actual = countNaturalCommission(createTransaction('2019-10-22', 300), transactions);
    assert.strictEqual(actual, 0.3);
  });

  it('week total amount with operation amount is less than week limit', () => {
    const actual = countNaturalCommission(createTransaction('2019-10-29', 300), transactions);
    assert.strictEqual(actual, 0);
  });
});
