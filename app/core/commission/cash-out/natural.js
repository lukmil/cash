import countFromStartOfWeekTillTransaction from '../../../utils/transactions-amount-counter';
import countPercentage from '../../../utils/percentage-counter';

const rule = {
  percents: 0.3,
  week_limit: {
    amount: 1000,
    currency: 'EUR',
  },
};

const isSumOverWeekLimit = (sum, limit) => sum >= limit;

function count(transaction, transactions) {
  const { date, operation: { amount: operationAmount } } = transaction;
  const { percents, week_limit: { amount: weekLimitAmount } } = rule;

  const weekTotalAmount = countFromStartOfWeekTillTransaction(date, transactions);
  const totalSum = weekTotalAmount + operationAmount;

  if (isSumOverWeekLimit(weekTotalAmount, weekLimitAmount)) {
    return countPercentage(operationAmount, percents);
  }

  if (isSumOverWeekLimit(totalSum, weekLimitAmount)) {
    return countPercentage(totalSum - 1000, percents);
  }

  return 0;
}

module.exports = { count };
