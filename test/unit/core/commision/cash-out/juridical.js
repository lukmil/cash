import { describe, it } from 'mocha';
import assert from 'assert';
import juridical from '../../../../../app/core/commission/cash-out/juridical';

const createTransaction = (amount) => ({
  date: '2019-10-09',
  user_id: 1,
  user_type: 'juridical',
  type: 'cash_out',
  operation: {
    amount,
    currency: 'EUR',
  },
});

describe('Cash out juridical commissions', () => {
  it('commission is less than min amount', () => {
    const actual = juridical.count(createTransaction(10));
    assert.strictEqual(actual, 0.5);
  });

  it('commission is greater than min amount', () => {
    const actual = juridical.count(createTransaction(1000));
    assert.strictEqual(actual, 3);
  });
});
