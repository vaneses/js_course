export default function SubstitutionCipher(str1, str2){
    if (str1.lenght == str2.lenght){
        var encodeDict = {}
        var decodeDict = {}
        for(var i=0; i<str1.length; i++){
            encodeDict[str1[i]] = str2[i]
            decodeDict[str2[i]] = str1[i]
        }
    } else {
        console.log('Неверная длина строк')
    }
    var obj = {
        encodeDict: encodeDict,
        decodeDict: decodeDict,
        encode: function(str){
        var newStr = ''
        for(var i=0; i<str.length; i++){
            newStr = newStr + encodeDict[str[i]]
        }
        return newStr
        },
        decode: function(str){
        var newStr = ''
        for(var i=0; i<str.length; i++){
            newStr = newStr + decodeDict[str[i]]
        }
        return newStr
        }

    }
    return obj
}