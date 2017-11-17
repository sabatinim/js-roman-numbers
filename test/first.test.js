'use strict';

describe('roman number generator', function () {

    it('1 is I', function () {
        expect(new RomanNumber().from(1)).equal("I");
    });

    it('5 is V', function () {
        expect(new RomanNumber().from(5)).equal("V");
    });

    it('10 is X', function () {
        expect(new RomanNumber().from(10)).equal("X");
    });

    it('7 is VII', function () {
        expect(new RomanNumber().from(7)).equal("VII");
    });

    it('8 is VIII', function () {
        expect(new RomanNumber().from(8)).equal("VIII");
    });

    it('11 is XI', function () {
        expect(new RomanNumber().from(11)).equal("XI");
    });

    it('12 is XII', function () {
        expect(new RomanNumber().from(12)).equal("XII");
    });

    it('13 is XIII', function () {
        expect(new RomanNumber().from(13)).equal("XIII");
    });

    it('14 is XIV', function () {
        expect(new RomanNumber().from(14)).equal("XIV");
    });

    it('15 is XV', function () {
        expect(new RomanNumber().from(15)).equal("XV");
    });

    it('16 is XVI', function () {
        expect(new RomanNumber().from(16)).equal("XVI");
    });

    it('21 is XXI', function () {
        expect(new RomanNumber().from(21)).equal("XXI");
    });


})
