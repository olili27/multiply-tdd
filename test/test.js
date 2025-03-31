/* eslint-disable import/extensions */
/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable no-undef */
import { assert } from "chai";
import { multiply } from "../multiply.js";

// describe('Multiply Function', function () {
//   it('multiply 1 by 1 and return 1', function () {
//     assert.equal(multiply(1, 1), 1);
//   });

//   it('multiply 2 by 2 and return 4', function () {
//     assert.equal(multiply(2, 2), 4);
//   });

//   it('multiply 3 by 3 and return 9', function () {
//     assert.equal(multiply(3, 3), 9);
//   });

//   it('multiply 4 by 4 and return 16', function () {
//     assert.equal(multiply(4, 4), 16);
//   });

//   it('multiply 23 by 45 and return 1035', function () {
//     assert.equal(multiply(23, 45), 23 * 45);
//   });
// });

describe("Multiply Function", function () {
  describe("Squares of Positive Numbers", function () {
    it("multiply 1 by 1 and return 1", function () {
      assert.equal(multiply(1, 1), 1);
    });

    it("multiply 2 by 2 and return 4", function () {
      assert.equal(multiply(2, 2), 4);
    });

    it("multiply 3 by 3 and return 9", function () {
      assert.equal(multiply(3, 3), 9);
    });

    it("multiply 4 by 4 and return 16", function () {
      assert.equal(multiply(4, 4), 16);
    });

    it("multiply 5 by 5 and return 25", function () {
      assert.equal(multiply(5, 5), 25);
    });

    it("multiply 10 by 10 and return 100", function () {
      assert.equal(multiply(10, 10), 100);
    });

    it("multiply 25 by 25 and return 625", function () {
      assert.equal(multiply(25, 25), 625);
    });
  });

  describe("Squares of Negative Numbers", function () {});

  describe("Non-Squares: Multiplication of Positive Numbers", function () {
    it("multiply 23 by 45 and return 1035", function () {
      assert.equal(multiply(23, 45), 1035);
    });

    it("multiply 2 by 12 and return 24", function () {
      assert.equal(multiply(2, 12), 24);
    });
  });

  describe("Non-Squares: Multiplication of Negative Numbers", function () {});

  describe("Non-Squares: Multiplication of Positive and Negative Numbers", function () {});

  describe("Non-Squares: Multiplication of Positive Numbers with at least a very large number", function () {
    it("multiply 2 by 1.7976931348623157e+309 and throw an error stating that `The largest number allowed is 1.7976931348623157e+308`", function () {
      assert.throws(
        function () {
          multiply(2, 1.7976931348623157e309);
        },
        Error,
        "The largest number allowed is 1.7976931348623157e+308",
      );
    });

    it("multiply 1.7976931348623157e+309 by 1.7976931348623157e+309 and throw an error stating that `The largest number allowed is 1.7976931348623157e+308`", function () {
      assert.throws(
        function () {
          // eslint-disable-next-line no-loss-of-precision
          multiply(1.7976931348623157e+309, 1.7976931348623157e309);
        },
        Error,
        "The largest number allowed is 1.7976931348623157e+308",
      );
    });
  });
});
