import makeBuffer from '../src/buffer'

describe('makeBuffer', function(){
    var buffer = makeBuffer();

    it('should print buffer', function(){
        buffer('Замыкания');
        buffer(' Использовать');
        buffer(' Нужно!');
        expect(buffer()).toBe("Замыкания Использовать Нужно!")
    });

    it('should clear buffer', function(){
        buffer.clear();
        expect(buffer()).toBe("")
    });
});