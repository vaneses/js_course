export default function sum(a){
  var c = a
  function add(b=undefined){
    if (b !== undefined){
      c += b
      return add
    } else{
      return c
    }
  }
  return add
}
