var randomNumber = require('./randomNum');
var convert = require('./money');

exports.putTogether = function (){
  return convert(randomNumber(100, 1000000)) + '\n';
}

exports.accountBalance = function () {
  return 'Account balance: \n'
}
