function forLoop(arr){
  var len = arr.length
  for (i = 0; i < len; i++)
    if (i === 1){
      arr = ['I am 1 strange loop.'];
    }
    else {
      arr = [`I am ${i} strange loops.`];
    }
    
    return arr
}

function whileLoop(number){
  counter = number
  while (counter > 0){
    console.log(counter)
    counter--
  }  
  
  return 'done'
}



function incrementVariable() {
  
  i = i + 1;
  return i;
}

function doWhileLoop(integer){
  
  do {
    console.log('I run once regardless.')
  }
  
  while(incrementVariable() < integer  );
}
