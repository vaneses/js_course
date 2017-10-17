// получаем строку
function getString(){
    let str = prompt('Введите строку');

    return str
}

function ifStringCorrect(str){
    let strSet = new Set(str); 
    const strSetNeed = new Set(['1', '2', '3', '4', '5', '6','7', '8', '9', '0', '.'])
    let difference = new Set([...strSet].filter(x => !strSetNeed.has(x)));
    let countDot = (str.match(/,/g) || []).length
    if (difference.size == 0 & countDot <= 1){
        alert('Строка корректна');
        return true;
    } else{
        alert('Строка не корректна');
        return false;
    }  
}

function modifyString(str){
    newStr = str.replace(',', '.')
    return newStr
}

function parseAmount(str){
    let amount = parseFloat(str)
    let amountCent = amount * 100
    return amountCent
}

function main(){
    str = getString()
    strMod = modifyString(str)
    if (ifStringCorrect(strMod) == true){
        alert(parseAmount(strMod))
    }
}

main()
