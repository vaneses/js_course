// получаем строку
function getString(){
    let str = prompt('Введите строку');

    return str
}

function modifyString(str){
    let newStr = ''
    for (var i = 0, len = str.length; i < len; i++){
        if (str.slice(i, i + 3) === '797'){
            newStr = newStr + '77'
            i = i + 2
        } else {
            newStr = newStr + str[i]
        }
    }
    return newStr
}

function main(){
    let str = getString()
    alert(modifyString(str))
    
}

main()
