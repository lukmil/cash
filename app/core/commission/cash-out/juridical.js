import percentageCounter from '../../../utils/percentage-counter';

function count(transaction, config) {
  const { operation: { amount: operationAmount } } = transaction;
  const { percents, min: { amount: minAmount } } = config;
  const commissions = percentageCounter.count(operationAmount, percents);

  return commissions < minAmount ? minAmount : commissions;
}

module.exports = { count };
