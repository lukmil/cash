import cashIn from './commission/cash-in';
import cashOut from './commission/cash-out';
import numberFormatter from '../utils/number-formatter';

function get(transaction, transactions, config) {
  let commission;
  switch (transaction.type) {
    case 'cash_in': {
      commission = cashIn.count(transaction, config.cashIn);
      break;
    }
    case 'cash_out': {
      const cashOutTransactions = transactions.filter(({ type }) => type === 'cash_out');
      commission = cashOut.count(transaction, cashOutTransactions, config.cashOut);
      break;
    }
    default: {
      throw new Error('unknown transaction type');
    }
  }

  // in this case formatted number is for printing, maybe it is better to ceil when
  // counting, but at this point there is only one place to use it and do not need
  // to worry about adding more functionality when extending commission with additional config
  return numberFormatter.ceilWith2DecimalPlaces(commission);
}

module.exports = { get };
