function forLoop(arr){
 
  for (i = 0; i < 25; i++){
    if(i !== 1){
      arr.push()
    }
    
    
}


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
