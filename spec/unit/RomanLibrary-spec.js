var Roman = require('../../libraries/Roman');

describe('The `Roman` numeral conversion library', function () {
    describe('when using the `getIntegerToRoman` method', function() {
        it('should return `123` when given `CXXIII`', function() {
            expect(Roman.getIntegerFromRoman('CXXIII')).toBe(123);
        });

        it('should return `3999` when given `MMMCMXCIX`', function() {
            expect(Roman.getIntegerFromRoman('MMMCMXCIX')).toBe(3999);
        });

        it('should return `0` when given an empty string', function() {
            expect(Roman.getIntegerFromRoman('')).toBe(0);
        });
    });

    describe('when using the `getRomanToInteger` method', function() {
        it('should return `CXXIII` when given `123`', function() {
            expect(Roman.getRomanFromInteger(123)).toBe('CXXIII');
        });

        it('should return `MMMCMXCIX` when given `3999`', function() {
            expect(Roman.getRomanFromInteger(3999)).toBe('MMMCMXCIX');
        });

        it('should return an empty string when given `0`', function() {
            expect(Roman.getRomanFromInteger(0)).toBe('');
        });
    });
});
