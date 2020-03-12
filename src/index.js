function eval() {
  // Do not use eval!!!
  return;
}

function expressionCalculator(expr) {
  expr = expr.split(' ').join('');
  expr = '(' + expr + ')';
  let re = /\([^()]+\)/,
    rePlus = /[\-|\w]((\d*\.\d*)|\d*)\+[\-|\w]((\d*\.\d*)|\d*)/,
    reMinus = /[\-|\w]((\d*\.\d*)|\d*)\-[\-|\w]((\d*\.\d*)|\d*)/,
    reMultiple = /[\-|\w]((\d*\.\d+)|\d*)\*[\-|\w]((\d*\.\d*)|\d*)/,
    reDivide = /[\-|\w]((\d*\.\d+)|\d*)\/[\-|\w]((\d*\.\d*)|\d*)/,
    arr = [];

  while (re.test(expr)) {
    let result = expr.match(re);
    result2 = result + '';
    result2 = result2.substr(1, result2.length - 2);

    while (reDivide.test(result2)) {
      //  console.log('деление ');
      let a = result2.match(reDivide)[0] + '';
      // console.log('что делим? ', a);
      arr = a.split('/');

      let b = arr[0] / arr[1];
      // console.log('результат деления', b);

      result2 = result2.replace(a, b);
      //  console.log('итого ', result2);
    }

    while (reMultiple.test(result2)) {
      // console.log('умножение ');
      let a = result2.match(reMultiple)[0] + '';
      //  console.log('что умножаем? ', a);
      arr = a.split('*');

      let b = arr[0] * arr[1];
      //  console.log('результат умножения', b);
      result2 = result2.replace(a, b);
      //    console.log('итого ', result2);
    }

    while (reMinus.test(result2)) {
      // console.log('вычитание ');
      let a = result2.match(reMinus)[0] + '';
      // console.log('что вычитаем? ', a);
      let match = a.match(/\d-/);
      //  console.log(match.index);

      arr[0] = a.substr(0, match.index + 1);
      arr[1] = a.substr(match.index + 2, a.length - 1);
      //  console.log(arr[0]);
      //  console.log(arr[1]);
      let b = arr[0] - arr[1];
      // console.log('результат вычитания', b);
      result2 = result2.replace(a, b);
      //  console.log('итого ', result2);
    }

    while (rePlus.test(result2)) {
      //  console.log('сложение ');
      let a = result2.match(rePlus)[0] + '';
      // console.log('что складываем? ', a);
      arr = a.split('+');

      let b = +arr[0] + +arr[1];
      // console.log('результат сложения', b);
      result2 = result2.replace(a, b);
      //  console.log('итого ', result2);
    }

    result = result + '';
    result2 = result2 + '';

    expr = expr.replace(result, result2);
    //  console.log(expr);
  }
  //console.log('результат ', expr);

  return +expr;
}

module.exports = {
  expressionCalculator
};
