import {
  describe, it, beforeEach, afterEach,
} from 'mocha';
import assert from 'assert';
import sinon from 'sinon';
import cashOut from '../../../app/core/commission/cash-out';
import cashIn from '../../../app/core/commission/cash-in';
import commission from '../../../app/core/commission';
import numberFormatter from '../../../app/utils/number-formatter';
import config from '../../fixtures/config-example';

const cashInType = 'cash_in';
const cashOutType = 'cash_out';
const createTransaction = (type) => ({
  type,
  user_type: 'juridical',
  operation: { amount: 1 },
});

describe('Commission', () => {
  let numberFormatterSpy;
  beforeEach(() => {
    numberFormatterSpy = sinon.spy(numberFormatter, 'ceilWith2DecimalPlaces');
  });
  afterEach(() => {
    numberFormatterSpy.restore();
  });

  it('transaction type cash in', () => {
    const cashInSpy = sinon.spy(cashIn, 'count');
    const transaction = createTransaction(cashInType);
    commission.get(transaction, [], config);

    assert.ok(cashInSpy.calledOnce);
    assert.ok(cashInSpy.calledWith(transaction, config.cashIn));
    assert.ok(numberFormatterSpy.calledOnce);
  });

  it('transaction type cash out should filter transactions before count', () => {
    const transactions = [createTransaction(cashInType), createTransaction(cashOutType)];
    const expectedTransactions = [transactions[1]];
    const cashOutSpy = sinon.spy(cashOut, 'count');

    commission.get(transactions[1], transactions, config);

    assert.ok(cashOutSpy.calledWith(transactions[1], expectedTransactions, config.cashOut));
    assert.ok(numberFormatterSpy.calledOnce);
  });

  it('transaction type unknown', () => {
    const block = () => commission.get(createTransaction('unknown'));
    assert.throws(block, Error('unknown transaction type'));
  });
});
