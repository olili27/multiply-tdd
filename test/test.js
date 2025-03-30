import { assert } from "chai"
import { multiply } from "../multiply.js";

describe("Multiply Function", function() {
    it("multiply 1 by 1 and return 1", function() {
        assert.equal(multiply(1, 1), 1);
    });
    it ("multiply 2 by 2 and return 4", function(){
        assert.equal(multiply(2, 2), 4)
    })
});