var expect = chai.expect;

describe("check Function", function() {
    describe("#declareWinner", function() {
       it("passes if function is undefined", function() {
            var x = declareWinner(x);
            expect(x).to.equal(undefined);
        });
    });
});