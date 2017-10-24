import sum from '../src/summing'

describe('sum', function(){

    it('should sum', function(){
        expect(sum(2)(4)(5)(6)()).toBe(17)
    });

    it('should sum', function(){
        expect(sum(1)(2)()).toBe(3)
    });
});
