import cashIn from './commission/cash-in';
import cashOut from './commission/cash-out';

function count(transaction, transactions) {
  switch (transaction.type) {
    case 'cash_in': {
      return cashIn.count(transaction);
    }
    case 'cash_out': {
      const cashOutTransactions = transactions.filter(({ type }) => type === 'cash_out');
      return cashOut.count(transaction, cashOutTransactions);
    }
    default: {
      throw new Error('unknown transaction type');
    }
  }
}

module.exports = { count };
