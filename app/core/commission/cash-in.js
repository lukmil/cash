import countPercentage from '../../utils/percentage-counter';

const rule = {
  percents: 0.03,
  max: {
    amount: 5,
    currency: 'EUR',
  },
};

export default function count({ operation: { amount: operationAmount } }) {
  const { percents, max: { amount: maxAmount } } = rule;
  const commissions = countPercentage(operationAmount, percents);

  return commissions > maxAmount ? maxAmount : commissions;
}

module.exports = { count };
