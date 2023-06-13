function FirstFactorial(num) { 

    // code goes here  
    var temp=1
    for(var i=num;i>=1;i--){
      temp=temp*i
    }
    return temp; 
  
  }
     
  // keep this function call here 
  console.log(FirstFactorial(8));