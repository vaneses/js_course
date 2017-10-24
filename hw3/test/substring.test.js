import SubstitutionCipher from '../src/substring'

describe('SubstitutionCipher', function(){
    var abc1 = "abcdefghijklmnopqrstuvwxyz";
    var abc2 = "etaoinshrdlucmfwypvbgkjqxz";
    
    var sub = new SubstitutionCipher(abc1, abc2);
    it('should modify string', function(){
        expect(sub.encode("abc")).toBe("eta")
    });
    it('should modify string', function(){
        expect(sub.encode("xyz")).toBe("qxz")
    });
    it('should modify string', function(){
        expect(sub.encode("aeiou")).toBe("eirfg")
    });
    it('should modify string', function(){
        expect(sub.decode("eta")).toBe("abc")
    });
    it('should modify string', function(){
        expect(sub.decode("qxz")).toBe("xyz")
    });
    it('should modify string', function(){
        expect(sub.decode("eirfg")).toBe("aeiou")
    
    });
});