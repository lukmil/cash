import { describe, it } from 'mocha';
import assert from 'assert';
import sinon from 'sinon';
import cashOut from '../../../app/core/commission/cash-out';
import cashIn from '../../../app/core/commission/cash-in';
import commission from '../../../app/core/commission';

const cashInType = 'cash_in';
const cashOutType = 'cash_out';
const createTransaction = (type) => ({
  type,
  user_type: 'juridical',
  operation: { amount: 1 },
});

describe('Commission', () => {
  it('transaction type cash in', () => {
    const spy = sinon.spy(cashIn, 'count');
    commission.count(createTransaction(cashInType), []);

    assert.ok(spy.calledOnce);
  });

  it('transaction type cash out should filter transactions before count', () => {
    const transactions = [createTransaction(cashInType), createTransaction(cashOutType)];
    const expectedTransactions = [transactions[1]];
    const spy = sinon.spy(cashOut, 'count');

    commission.count(transactions[1], transactions);

    assert.ok(spy.calledOnce);
    assert.ok(spy.calledWith(transactions[1], expectedTransactions));
  });

  it('transaction type unknown', () => {
    const block = () => commission.count(createTransaction('unknown'));
    assert.throws(block, Error('unknown transaction type'));
  });
});
