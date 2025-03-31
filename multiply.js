/* eslint-disable operator-assignment */
// eslint-disable-next-line import/prefer-default-export
export function multiply(num1, num2) {
  const maximumNumberAllowed = Number.MAX_VALUE;
  const minimumNumberAllowed = Number.MIN_VALUE;

  if (num1 > maximumNumberAllowed || num2 > maximumNumberAllowed) {
    throw new Error("The largest number allowed is 1.7976931348623157e+308");
  }

  if (num1 < minimumNumberAllowed || num2 < minimumNumberAllowed) {
    throw new Error("The smallest number allowed is 5e-324");
  }

  if (typeof (num1) !== "number" || typeof (num2) !== "number") {
    throw new Error("Only numbers can be multiplied");
  }

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

  // let sum = 0;
  // for (let i = 1; i <= num2; i = i + 1) {
  //   sum = sum + num1;
  // }

  return num1 * num2;
}
