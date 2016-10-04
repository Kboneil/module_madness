function convert(number) {
  return number.toLocaleString('en-US', {currency:'USD', style:'currency'});
}

module.exports = convert;
