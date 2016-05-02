class Roman {
    /**
     * constructor Set our Roman Numeral identifier object
     */
    constructor() {
        this.romanNumeralMapper = {
            M:  1000,
            CM: 900,
            D:  500,
            CD: 400,
            C:  100,
            XC: 90,
            L:  50,
            XL: 40,
            X:  10,
            IX: 9,
            V:  5,
            IV: 4,
            I:  1,
        }
    }

    /**
     * getRomanToInteger Convert integer to Roman Numeral
     * @param  {Number} input User input
     * @return {String}       Calculated result
     */
    getRomanToInteger(input = 0) {
        var result = '';

        if (input) {
            for (var roman in this.romanNumeralMapper) {
                while (input >= this.romanNumeralMapper[roman]) {
                    result += roman;
                    input -= this.romanNumeralMapper[roman];
                }
            }
        }

        return result;
    }

    /**
     * processRomanToInteger Use recursion to calculate Roman Numeral
     * @param  {String} input User input
     * @return {Number}       Calculated result
     */
    processRomanToInteger(input = '') {
        if (!input)
            return 0;

        if (input.startsWith('M'))  { return 1000 + this.processRomanToInteger(input.slice(1)); }
        if (input.startsWith('CM')) { return 900  + this.processRomanToInteger(input.slice(2)); }
        if (input.startsWith('D'))  { return 500  + this.processRomanToInteger(input.slice(1)); }
        if (input.startsWith('CD')) { return 400  + this.processRomanToInteger(input.slice(2)); }
        if (input.startsWith('C'))  { return 100  + this.processRomanToInteger(input.slice(1)); }
        if (input.startsWith('XC')) { return 90   + this.processRomanToInteger(input.slice(2)); }
        if (input.startsWith('L'))  { return 50   + this.processRomanToInteger(input.slice(1)); }
        if (input.startsWith('XL')) { return 40   + this.processRomanToInteger(input.slice(2)); }
        if (input.startsWith('X'))  { return 10   + this.processRomanToInteger(input.slice(1)); }
        if (input.startsWith('IX')) { return 9    + this.processRomanToInteger(input.slice(2)); }
        if (input.startsWith('V'))  { return 5    + this.processRomanToInteger(input.slice(1)); }
        if (input.startsWith('IV')) { return 4    + this.processRomanToInteger(input.slice(2)); }
        if (input.startsWith('I'))  { return 1    + this.processRomanToInteger(input.slice(1)); }
    }

    /**
     * getIntegerToRoman Abstract process into a getter
     * @param  {String} input User input
     * @return {Number}       Calculated result
     */
    getIntegerToRoman(input = '') {
        return this.processRomanToInteger(input);
    }
}

module.exports = new Roman();