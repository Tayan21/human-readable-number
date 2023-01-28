module.exports = function toReadable (number) {
  let res = ''
  if(number === 0) {
    return 'zero'
  }
  let numbers = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
  let num = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
  let decimals = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
  let hundreds = ['one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred']
  while(number > 0) {
    if((Math.trunc(number/100)) > 0) {
      res += hundreds[(Math.trunc(number/100)) - 1]
      if((number%100) === 0) {
        break
      }
      res += ' '
      number %= 100
    }
    if((Math.trunc(number/10)) > 0 && (Math.trunc(number/10)) < 2) {
      if(number == 10) {
        res += decimals[0]
        break
      }
      res += num[(Math.trunc(number%10)) - 1]
      break
    }
    if((Math.trunc(number/10)) > 0) {
      res += decimals[(Math.trunc(number/10)) - 1]
      if((number%10) === 0) {
        break
      }      
      res += ' '
      number %= 10
    }
    if(number > 0) {
      res += numbers[number - 1]
      number = Math.trunc(number/10)
    }
  }
  return res
}
