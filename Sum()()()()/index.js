function sum(a)
{
    return  (b)=>{
        return a+b
    }
}


let result=sum(5)(3);

console.log(result);

let sum1=function (a)
{
    return  (b)=>{
        if(b){
        return sum1(a+b)
        }
        return a;
        
    }
}

console.log(sum1(1)(2)(3)(4)());
// console.log(result1)