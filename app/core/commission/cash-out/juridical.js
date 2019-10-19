import countPercentage from '../../../utils/percentage-counter';

const rule = {
  percents: 0.3,
  min: {
    amount: 0.5,
    currency: 'EUR',
  },
};

function count({ operation: { amount: operationAmount } }) {
  const { percents, min: { amount: minAmount } } = rule;
  const commissions = countPercentage(operationAmount, percents);

  return commissions < minAmount ? minAmount : commissions;
}

module.exports = { count };
