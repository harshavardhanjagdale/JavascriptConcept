
let name1="Harshavardhan jagdale is my name";
let arr1=[];
var rev=""
for(var i=0;i<name1.length;i++){
       if(name1[i]==' '){
          arr1.push(rev);
          rev='';

       }
       else{
        rev =rev + name1[i];
       }
}
arr1.push(rev);
console.log(arr1);
let newstr="";
for(var k=0;k<arr1.length;k++){
    for(l=arr1[k].length-1;l>=0;l--){
         newstr=newstr + arr1[k][l]; 
    }
    newstr=newstr+" ";
}
console.log(newstr);