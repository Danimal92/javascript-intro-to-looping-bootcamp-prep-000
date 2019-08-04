function forLoop(arr){
  
  for (i = 0; i < 25; i++)
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





function doWhileLoop(integer){
  
  var i = 0;
  
  function incrementVariable() {
  
  i = i + 1;
  return i;
}
  
  do {
    console.log('I run once regardless.')
  }
  
  while(incrementVariable() < integer  );
}
