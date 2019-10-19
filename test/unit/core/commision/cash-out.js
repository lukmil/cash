import { describe, it } from 'mocha';
import assert from 'assert';
import sinon from 'sinon';
import cashOut from '../../../../app/core/commission/cash-out';
import natural from '../../../../app/core/commission/cash-out/natural';
import juridical from '../../../../app/core/commission/cash-out/juridical';

const naturalUser = 'natural';
const juridicalUser = 'juridical';
const createTransaction = (userType) => ({
  user_type: userType,
  date: '2019-10-20',
  type: 'cash_out',
  operation: { amount: 1 },
});

describe('Cash out commissions', () => {
  it('user type natural should filter transactions before count', () => {
    const transactions = [createTransaction(naturalUser), createTransaction(juridical)];
    const expectedTransactions = [transactions[0]];
    const spy = sinon.spy(natural, 'count');
    const transaction = createTransaction(naturalUser);

    cashOut.count(transaction, transactions);

    assert.ok(spy.calledOnce);
    assert.ok(spy.calledWith(transaction, expectedTransactions));
  });

  it('transaction user type juridical', () => {
    const spy = sinon.spy(juridical, 'count');
    cashOut.count(createTransaction(juridicalUser), []);

    assert.ok(spy.calledOnce);
  });

  it('transaction user type unknown', () => {
    const block = () => cashOut.count(createTransaction('unknown'));
    assert.throws(block, Error('unknown user type'));
  });
});
