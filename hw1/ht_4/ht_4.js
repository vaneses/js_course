// получаем строку
function getStructureDNK(){
    let str = prompt('Введите последовательность нуклеотидов');

    return str
}

function ifStringCorrect(str){
    let strSet = new Set(str); 
    const strSetNeed = new Set(['A', 'T', 'C', 'G'])
    let difference = new Set([...strSet].filter(x => !strSetNeed.has(x)));
    if (difference.size == 0){
        alert('Строка корректна');
        return true;
    } else{
        alert('Строка не корректна');
        return false;
    }  
}

function modifyString(str){
    //create dict of strinf {symbol -> count_of_exist}
    let dict = {'A': 'T', 'T': 'A', 'C': 'G', 'G': 'C'};
    let newStr = ''
    for (var i = 0, len = str.length; i < len; i++){
        newStr = newStr + dict[str[i]]
    }
    return newStr
}

function main(){
    let str = getStructureDNK().toUpperCase()
    if (ifStringCorrect(str)){
        alert(modifyString(str))
    }
    
}

main()
