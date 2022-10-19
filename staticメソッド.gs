function myFunction14() {
  const a = 1;
  const b = 2;
  Logger.log(Calc.plus(a, b));
  Logger.log(Calc.minus(a, b));
  Logger.log(Calc.times(a, b));
  Logger.log(Calc.division(a, b));
}

class Calc {
  static plus(a, b) {
    return a + b;
  }
  static minus(a, b) {
    return a - b;
  }
  static times(a, b) {
    return a * b;
  }
  static division(a, b) {
    return a / b;
  }
}

