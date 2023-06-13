let fs = require("fs");

let a = fs.readFile("file.txt", "utf-8",(err,data)=>{               //utf-8 is encoding
    console.log(err,data);      // 1st give path and then function 
});
// console.log(a);

