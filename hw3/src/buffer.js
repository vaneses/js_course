export default function makeBuffer() {
  var buffer_str = ""
  
  function addToByffer(str){
    if (str !== undefined){
      buffer_str = buffer_str + str
    } else{
      return buffer_str
    }
    
  }
  addToByffer.clear = function(){
    buffer_str = ""
  }
  return addToByffer
}
