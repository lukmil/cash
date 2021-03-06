import { describe, it } from 'mocha';
import assert from 'assert';
import sinon from 'sinon';
import cashOut from '../../../../app/core/commission/cash-out';
import natural from '../../../../app/core/commission/cash-out/natural';
import juridical from '../../../../app/core/commission/cash-out/juridical';
import config from '../../../fixtures/config-example';

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
    const transactions = [createTransaction(naturalUser), createTransaction(juridicalUser)];
    const expectedTransactions = [transactions[0]];
    const spy = sinon.spy(natural, 'count');

    cashOut.count(transactions[0], transactions, config.cashOut);

    assert.ok(spy.calledOnce);
    assert.ok(spy.calledWith(transactions[0], expectedTransactions), config.cashOut.natural);
  });

  it('transaction user type juridical', () => {
    const spy = sinon.spy(juridical, 'count');
    const transaction = createTransaction(juridicalUser);
    cashOut.count(transaction, [], config.cashOut);

    assert.ok(spy.calledOnce);
    assert.ok(spy.calledWith(transaction, config.cashOut.juridical));
  });

  it('transaction user type unknown', () => {
    const block = () => cashOut.count(createTransaction('unknown'));
    assert.throws(block, Error('unknown user type'));
  });
});
