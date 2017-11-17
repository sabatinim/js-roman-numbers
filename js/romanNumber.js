class RomanNumber {

    constructor() {
        this.romans = [
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

        for (var i = 0; i < this.romans.length; i++) {

            while(decimal - this.romans[i].decimal>=0)
            {
                result += this.romans[i].romans;
                decimal = decimal - this.romans[i].decimal;
            }

        }
        return result;
    }
}