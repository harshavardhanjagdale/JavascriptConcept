
let data = new Promise((resolve, reject) => {
    resolve(10)
})
data.then((item)=>{
    console.log("1st",item);
    return item*2;
}).then((item2)=>{
    console.log("2nd",item2);      // promise chain
})
.catch((err) => {
    console.log(err)
})

// fetch
let data2=fetch("http://dummy.restapiexample.com/api/v1/employees").then((daa)=>{console.log(daa)})      // we need to use .then

// data2.then((item)=>{
//     console.log(item); // promise chain
// })