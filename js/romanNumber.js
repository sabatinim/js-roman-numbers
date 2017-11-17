class RomanNumber {

    constructor() {
        this.dictionary = [
            {
                decimal: 10,
                romans: 'X'
            },
            {
                decimal: 5,
                romans: 'V'
            },
            {
                decimal: 4,
                romans: 'IV'
            },
            {
                decimal: 3,
                romans: 'III'
            },
            {
                decimal: 2,
                romans: 'II'
            },
            {
                decimal: 1,
                romans: 'I'
            }
        ];
    }

    from(decimal) {

        var result = '';

        for (var i = 0; i < this.dictionary.length; i++) {

            while(decimal - this.dictionary[i].decimal>=0)
            {
                result += this.dictionary[i].romans;
                decimal = decimal - this.dictionary[i].decimal;
            }

        }
        return result;
    }
}