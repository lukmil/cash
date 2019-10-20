export default function count(sum, percents) {
  if (sum == null || percents == null || sum < 0 || percents < 0) throw new Error('Invalid sum or percents');

  return (sum * percents) / 100;
}

module.exports = { count };
