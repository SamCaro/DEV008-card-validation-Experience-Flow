const validator = {
  isValid: function (input) {
    const cardNumber = input.split('').reverse();
    for (let i = 1; i < cardNumber.length; i += 2) {
      if (cardNumber[i] >= 0) {
        cardNumber[i] = (cardNumber[i] * 2).toString().split('').reduce(function (a, b) { return a + parseInt(b) }, 0);
      }
    }
    let suma = 0
    for (let i = 0; i < cardNumber.length; i++) {
      suma = suma + parseInt(cardNumber[i]);
    }
    const division = suma % 2 === 0;
    return division;
  },

  maskify: function (input) {
    return input.slice(0, -4).replace(/./g, "#") + input.slice(-4);
  }
};



export default validator;





