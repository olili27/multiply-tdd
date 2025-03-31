/* eslint-disable operator-assignment */
// eslint-disable-next-line import/prefer-default-export
export function multiply(num1, num2) {
  // if (num1 === 1 && num2 === 1) {
  //   return 1;
  // }
  // if (num1 === 2 && num2 === 2) {
  //   return 4;
  // }
  // if (num1 === 3 && num2 === 3) {
  //   return 9;
  // }
  // if (num1 === 4 && num2 === 4) {
  //   return 16;
  // }
  // let sum = 0;
  // for (let i = 1; i <= 45; i = i + 1) {
  //   sum = sum + 23;
  // }
  // return sum;

  let sum = 0;
  for (let i = 1; i <= num2; i = i + 1) {
    sum = sum + num1;
  }

  return sum;
}
