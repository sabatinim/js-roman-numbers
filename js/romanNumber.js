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
                decimal: 1,
                romans: 'I'
            }
        ];
    }


    from(decimal) {


        for (var i = 0; i < this.romans.length; i++) {
            if (decimal == this.romans[i].decimal) {
                return this.romans[i].romans;
            }
        }

        return '';
    }

}