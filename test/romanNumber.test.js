'use strict';

describe('roman number generator', function () {

    let romanNumber;

    beforeEach(function () {
        romanNumber = new RomanNumber(dictionary);
    });

    it('1 is I', function () {
        expect(romanNumber.from(1)).equal("I");
    });

    it('5 is V', function () {
        expect(romanNumber.from(5)).equal("V");
    });

    it('10 is X', function () {
        expect(romanNumber.from(10)).equal("X");
    });

    it('7 is VII', function () {
        expect(romanNumber.from(7)).equal("VII");
    });

    it('8 is VIII', function () {
        expect(romanNumber.from(8)).equal("VIII");
    });

    it('11 is XI', function () {
        expect(romanNumber.from(11)).equal("XI");
    });

    it('12 is XII', function () {
        expect(romanNumber.from(12)).equal("XII");
    });

    it('13 is XIII', function () {
        expect(romanNumber.from(13)).equal("XIII");
    });

    it('14 is XIV', function () {
        expect(romanNumber.from(14)).equal("XIV");
    });

    it('15 is XV', function () {
        expect(romanNumber.from(15)).equal("XV");
    });

    it('16 is XVI', function () {
        expect(romanNumber.from(16)).equal("XVI");
    });

    it('21 is XXI', function () {
        expect(romanNumber.from(21)).equal("XXI");
    });
})
