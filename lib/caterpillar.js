'use strict'

var ini = module.exports = {
  isEmpty : function(arr){
    if (arr[0])
      return false
    return true
  },
  count : function(arr){
    let sum = 0
    arr.forEach(function(){
      sum +=1
    })
    return sum
  },
  head : function(arr){
    return arr[0]
  },
  tail : function(arr){
    return arr.splice(1)
  },
  flatten : function(arr){
    return arr.reduce(function (flat, toFlatten) {
      return flat.concat(Array.isArray(toFlatten) ? ini.flatten(toFlatten) : toFlatten);
    }, []);
  }
}
