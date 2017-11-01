import * as of from '../src/once_func'

describe('once', function(){
    var onceJoinedArgs = of.once(of.joinedArgs);

    it('it should be call only one time', function(){
        expect(onceJoinedArgs(1, 2, 3)).toBe("1, 2, 3")
    });

    it('should clear buffer', function(){
        expect(onceJoinedArgs(1, 2, 3)).toBe(undefined)
    });
});