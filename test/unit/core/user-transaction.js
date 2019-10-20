import { describe, it } from 'mocha';
import assert from 'assert';
import userTransaction from '../../../app/core/user-transaction';

const createTransaction = (userId) => ({ user_id: userId, date: '2019-10-20' });
const transactions = [
  createTransaction(1),
  createTransaction(1),
  createTransaction(2),
  createTransaction(2),
];

describe('User transaction', () => {
  it('user with id 1 first transaction', () => {
    const actual = userTransaction.getPrevAll(0, transactions[0], transactions);
    assert.strictEqual(actual.length, 0);
  });

  it('user with id 1 second transaction', () => {
    const actual = userTransaction.getPrevAll(1, transactions[1], transactions);
    assert.strictEqual(actual.length, 1);
  });

  it('user with id 2 first transaction', () => {
    const actual = userTransaction.getPrevAll(2, transactions[2], transactions);
    assert.strictEqual(actual.length, 0);
  });

  it('user with id 2 second transaction', () => {
    const actual = userTransaction.getPrevAll(3, transactions[3], transactions);
    assert.strictEqual(actual.length, 1);
  });

  it('user with id 3', () => {
    const actual = userTransaction.getPrevAll(5, createTransaction(3), transactions);
    assert.strictEqual(actual.length, 0);
  });
});
