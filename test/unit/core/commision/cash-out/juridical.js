import { describe, it } from 'mocha';
import assert from 'assert';
import countJuridicalCommission from '../../../../../app/core/commission/cash-out/juridical';

const createTransfer = (amount) => ({
  date: '2019-10-09',
  user_id: 1,
  user_type: 'juridical',
  type: 'cash_out',
  operation: {
    amount,
    currency: 'EUR',
  },
});

describe('Cash out juridical commission', () => {
  it('commission is less than min amount', () => {
    const result = countJuridicalCommission(createTransfer(10));
    assert.strictEqual(result, 0.5);
  });

  it('commission is greater than min amount', () => {
    const result = countJuridicalCommission(createTransfer(1000));
    assert.strictEqual(result, 3);
  });
});
