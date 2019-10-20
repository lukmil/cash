import moment from 'moment';

function sinceStartOfWeek(endDate, transactions) {
  if (!endDate) throw new Error('end date is not given');
  if (Number.isNaN(Date.parse(endDate))) throw new Error('end date is not valid');
  if (!transactions || !transactions.length) return 0;

  const startOfWeekDay = moment(endDate).startOf('isoWeek'); // monday is a first day of week

  return transactions
    .filter(({ date }) => moment(date).isBetween(startOfWeekDay, endDate, null, '[]')) // monday 00:00:00.000 is in week range
    .reduce((acc, { operation: { amount } }) => acc + amount, 0);
}

module.exports = { sinceStartOfWeek };
