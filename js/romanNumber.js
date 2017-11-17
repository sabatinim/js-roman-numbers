function reductionIsZero(reduction, dictionaryItemDecimal) {
    return reduction - dictionaryItemDecimal >= 0;
}


class RomanNumber {

    constructor() {
        this.dictionary = [
            {
                decimal: 10,
                roman: 'X'
            },
            {
                decimal: 5,
                roman: 'V'
            },
            {
                decimal: 4,
                roman: 'IV'
            },
            {
                decimal: 3,
                roman: 'III'
            },
            {
                decimal: 2,
                roman: 'II'
            },
            {
                decimal: 1,
                roman: 'I'
            }
        ];
    }

    from(decimal) {

        let romanNumberRepresentation = '';
        let reduction = decimal;

        this.dictionary.forEach(function (dictionaryItem) {

            while (reductionIsZero(reduction, dictionaryItem.decimal)) {
                romanNumberRepresentation += dictionaryItem.roman;
                reduction -= dictionaryItem.decimal;
            }
        })
        return romanNumberRepresentation;
    }
}