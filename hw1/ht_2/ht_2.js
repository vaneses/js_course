// получаем строку
function getString(){
    let str = prompt('Введите строку');

    return str
}

function modifyString(str){
    //create dict of strinf {symbol -> count_of_exist}
    let dict = {};
    for (var i = 0, len = str.length; i < len; i++){
        if (!(str[i] in dict)){
            dict[str[i]] = 0
        }
        dict[str[i]] += 1
    }
    let newStr = ''
    for (var i = 0, len = str.length; i < len; i++){
        if (dict[str[i]] > 1 ){
            newStr = newStr + ')'
        } else {
            newStr = newStr + '('
        }
    }
    return newStr
}

function main(){
    let str = getString()
    alert(modifyString(str))
    
}

main()
