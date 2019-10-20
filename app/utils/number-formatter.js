function ceilDecimalAdjust(type, number, exponent) {
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil
  const exp = +exponent;
  let value = +number;

  // Shift
  value = value.toString().split('e');
  value = Math[type](+(`${value[0]}e${value[1] ? (+value[1] - exp) : -exp}`));
  // Shift back
  value = value.toString().split('e');

  return +(`${value[0]}e${value[1] ? (+value[1] + exp) : exp}`);
}

export default function ceilWith2DecimalPlaces(number) {
  if (number == null) throw new Error('Number is not given');
  return ceilDecimalAdjust('ceil', number, -2).toFixed(2);
}
