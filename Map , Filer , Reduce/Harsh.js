 let Arr=[1,2,3,4,5,6,7]

 // ForEach

 Arr.forEach((value,index,array)=>{
    console.log(value*value)       // Foreach just console.log,not return any value
 }
 )
 console.log(Arr)

 // Map
 let a=Arr.map((value,index,Array)=>{
    return value*2                      // map return array and it need to store in any value
 })
 console.log(a);

 // filter
 let b=Arr.filter((value,index,array)=>{      // filter return array and store in new array
    return value>3
 } )
 console.log(b);

 //reduce

 let c=Arr.reduce((value1,value2)=>{
    return value1+value2                        // reduce return only value
 })
 console.log(c)

 // Array.from
 let k="harshavardhan";
 console.log(Array.from(k));                    // to return into an array