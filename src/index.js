module.exports = function longestConsecutiveLength(array) {

  if (array.length==0) {
    return 0
  } else if (array.length==1) {
    return array[0]
  }

  array.sort((a,b)=> a-b)

  var res = [],
    count = 1;

  for(i=0;i<array.length-1;i++){
    if(array[i] == array[i+1]-1){
      count++
    } else if(array[i] == array[i+1]){
      continue;
    } else {
      res.push(count)
      count = 1;
    }
  }

  return res.sort((a,b)=> b-a)[0]

}
