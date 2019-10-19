import { describe, it } from 'mocha';
import assert from 'assert';
import countTotalAmountSinceStartOfWeek from '../../../app/utils/transactions-amount-counter';

const date20191013 = '2019-10-13'; // sunday
const date20191014 = '2019-10-14'; // monday
const date20191015 = '2019-10-15'; // tuesday
const date20191020 = '2019-10-20'; // sunday
const createTransaction = (date, amount) => ({ date, operation: { amount } });
const transactions = [
  createTransaction(date20191014, 100),
  createTransaction(date20191015, 200),
  createTransaction(date20191020, 300),
];

describe('Transactions amount counter since start of week', () => {
  it('end date is null', () => {
    const block = () => countTotalAmountSinceStartOfWeek(null, []);
    assert.throws(block, Error('end date is not given'));
  });

  it('end date is not valid', () => {
    const block = () => countTotalAmountSinceStartOfWeek('abc', []);
    assert.throws(block, Error('end date is not valid'));
  });

  it('no transactions given', () => {
    const actual = countTotalAmountSinceStartOfWeek(date20191014, null);
    assert.strictEqual(actual, 0);
  });

  it('empty transactions given', () => {
    const actual = countTotalAmountSinceStartOfWeek(date20191014, []);
    assert.strictEqual(actual, 0);
  });

  it('no transactions since start of week', () => {
    const actual = countTotalAmountSinceStartOfWeek(date20191013, transactions);
    assert.strictEqual(actual, 0);
  });

  it('end date matches start of week ', () => {
    const actual = countTotalAmountSinceStartOfWeek(date20191014, transactions);
    assert.strictEqual(actual, 100, 'included monday transaction');
  });

  it('end date is tuesday', () => {
    const actual = countTotalAmountSinceStartOfWeek(date20191015, transactions);
    assert.strictEqual(actual, 300);
  });

  it('end date is sunday', () => {
    const actual = countTotalAmountSinceStartOfWeek(date20191020, transactions);
    assert.strictEqual(actual, 600, 'included sunday transaction');
  });
});
