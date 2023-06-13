var p="me outside class"
class harsh{
    // var x=10 ;              // you cannnot declare variable by "Var" keyword in class
// function harrybhai(){        // you cannot mention "function " keyword inside the class,just write method name     
// }
a:number
p:string="me inside class"
constructor (x:number){
this.a=x                       // if you want to access variable use this.  keyword
}
fun(){
console.log(this.p);          // answer is "me insie class" because this. means inside class che var access 
console.log(p);               // answer is "me outside class" because outside p has global scope
                              // and it can access anywhere
}

static  prop(){
    console.log(p)               // return unefined   //static madhe "this" keyword chalat nahi
}


new(z){
console.log(this.a)}             // if you want to 
}

var obj=new harsh(4)       // create new obj by new class name passed value goes into constructor into "x"
                           //object allocates memory , when obj create automatically constructor called 
                           //    without calling even single method
obj.new(3)                    //this passed value goes into new() method.
                        // constructor name and class name should be same.
harsh.prop
obj.fun()
