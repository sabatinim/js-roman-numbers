'use strict';

describe('roman number generator', function () {

    it('1 is I', function () {
        expect(new RomanNumber().from(1)).equal("I");
    });

    it('5 is V', function () {
        expect(new RomanNumber().from(5)).equal("V");
    });

})