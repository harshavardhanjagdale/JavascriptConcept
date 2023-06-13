let fs = require("fs/promises");

let a = fs.readFile("file.txt","utf-8");

a.then((data)=>{         //first read and then console this.
    console.log(data);

});
console.log("This is End")