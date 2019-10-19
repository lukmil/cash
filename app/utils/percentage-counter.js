export default function countPercentage(sum, percents) {
  if (sum == null || percents == null || sum < 0 || percents < 0) throw new Error('Invalid sum or percents');

  return (sum * percents) / 100;
}
