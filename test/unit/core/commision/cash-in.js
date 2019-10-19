import { describe, it } from 'mocha';
import assert from 'assert';
import cashIn from '../../../../app/core/commission/cash-in';

const createTransaction = (amount) => ({
  date: '2016-01-05',
  user_id: 1,
  user_type: 'natural',
  type: 'cash_in',
  operation: {
    amount,
    currency: 'EUR',
  },
});

describe('Cash in commissions', () => {
  it('commission is less than max amount', () => {
    const actual = cashIn.count(createTransaction(200));
    assert.strictEqual(actual, 0.06);
  });

  it('commission is greater than max amount', () => {
    const result = cashIn.count(createTransaction(1000000));
    assert.strictEqual(result, 5);
  });
});
