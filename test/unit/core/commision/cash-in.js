import { describe, it } from 'mocha';
import assert from 'assert';
import countCashInCommission from '../../../../app/core/commission/cash-in';

const createTransfer = (amount) => ({
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
    const result = countCashInCommission(createTransfer(200));
    assert.strictEqual(result, 0.06);
  });

  it('commission is greater than max amount', () => {
    const result = countCashInCommission(createTransfer(1000000));
    assert.strictEqual(result, 5);
  });
});
