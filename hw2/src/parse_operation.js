export default function main(){
    let str = getString();
    let object = modifyJSONStrToObj(str)
    let resultObject = modifyJSON(object)

    return resultObject
}

export function modifyJSON(object){
    let resultObject = {};

    object.forEach(function(item, i, arr) {
        if(!(item['date'] in resultObject)){
            resultObject[item['date']] = {
                'operations': [],
                'links':[]
            }
        }
        resultObject[item['date']]['operations'].push(item)

        let flagExist = false
        resultObject[item['date']]['links'].forEach(function(item2, i2, arr2) {
            if(item2['name'] === item['links'][0]['name']){
                flagExist = true
            }
        });
        if(!flagExist){
            resultObject[item['date']]['links'].push(item['links'][0])
        }
        //alert( i + ": " + item + " (массив:" + arr + ")" );
      });
    return resultObject
}


export function getString(){
    let str = prompt('Введите строку');
    return str
}

export function modifyJSONStrToObj(str){
    let object = JSON.parse(str)
    return object
}