import transactionsAmountCounter from '../../../utils/transactions-amount-counter';
import percentageCounter from '../../../utils/percentage-counter';

const isSumOverLimit = (sum, limit) => sum >= limit;

function count(transaction, transactions, config) {
  const { date, operation: { amount: operationAmount } } = transaction;
  const { percents, week_limit: { amount: weekLimitAmount } } = config;

  const weekTotalAmount = transactionsAmountCounter.sinceStartOfWeek(date, transactions);
  const totalSum = weekTotalAmount + operationAmount;

  if (isSumOverLimit(weekTotalAmount, weekLimitAmount)) {
    return percentageCounter.count(operationAmount, percents);
  }

  if (isSumOverLimit(totalSum, weekLimitAmount)) {
    return percentageCounter.count(totalSum - weekLimitAmount, percents);
  }

  return 0;
}

module.exports = { count };
