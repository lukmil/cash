import natural from './cash-out/natural';
import juridical from './cash-out/juridical';

function count(transaction, transactions) {
  switch (transaction.user_type) {
    case 'natural': {
      const naturalTransactions = transactions
        .filter(({ user_type: userType }) => userType === 'natural');
      return natural.count(transaction, naturalTransactions);
    }
    case 'juridical': {
      return juridical.count(transaction);
    }
    default: {
      throw new Error('unknown user type');
    }
  }
}

module.exports = { count };
