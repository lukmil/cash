import transactionsAmountCounter from '../../../utils/transactions-amount-counter';
import percentageCounter from '../../../utils/percentage-counter';

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

  const weekTotalAmount = transactionsAmountCounter.sinceStartOfWeek(date, transactions);
  const totalSum = weekTotalAmount + operationAmount;

  if (isSumOverWeekLimit(weekTotalAmount, weekLimitAmount)) {
    return percentageCounter.count(operationAmount, percents);
  }

  if (isSumOverWeekLimit(totalSum, weekLimitAmount)) {
    return percentageCounter.count(totalSum - 1000, percents);
  }

  return 0;
}

module.exports = { count };
