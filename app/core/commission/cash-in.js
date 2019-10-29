import percentageCounter from '../../utils/percentage-counter';

function count(transaction, config) {
  const { operation: { amount: operationAmount } } = transaction;
  const { percents, max: { amount: maxAmount } } = config;
  const commissions = percentageCounter.count(operationAmount, percents);

  return commissions > maxAmount ? maxAmount : commissions;
}

module.exports = { count };
