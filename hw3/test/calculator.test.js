import * as calc from '../src/calculator'

describe('Calc', function(){
    it('should calculate', function(){
        expect(calc.seven(calc.times(calc.five()))).toBe(35);
    });
    it('should calculate', function(){
        expect(calc.four(calc.plus(calc.nine()))).toBe(13);
    });
    it('should calculate', function(){
        expect(calc.eight(calc.minus(calc.three()))).toBe(5);
    });
    it('should calculate', function(){
        expect(calc.six(calc.dividedBy(calc.two()))).toBe(3);
    });
});