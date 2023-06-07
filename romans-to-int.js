// take a romans number and return a integer
// 1 <= num <= 3999

function romanToInt(s) {
  I = 1;
  V = 5;
  X = 10;
  L = 50;
  C = 100;
  D = 500;
  M = 1000;

  let result = 0;
  let i = 0;
  for (i; i < s.length; i++) {
    if (s[i] === "I") {
      if (s[i + 1] === "V") {
        result += 4;
        i++;
      } else if (s[i + 1] === "X") {
        result += 9;
        i++;
      } else {
        result += 1;
      }
    }
    if (s[i] === "V") {
      result += 5;
    }
    if (s[i] === "X") {
      if (s[i + 1] === "L") {
        result += 40;
        i++;
      } else if (s[i + 1] === "C") {
        result += 90;
        i++;
      } else {
        result += 10;
      }
    }
  }
}
