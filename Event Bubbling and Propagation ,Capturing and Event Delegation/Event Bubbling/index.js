document.querySelector("#Grandprent")
.addEventListener('click',(e)=>{
    console.log(" GrandParent hitted");
    // e.stopPropagation()                       // it stops propagation which initiated due to Capturing
                                            //  Event bubbling vs Capturing
},true)

document.querySelector("#parent")
.addEventListener('click',()=>{
    console.log(" Parent hitted")    // bydefault it is Event Bubbling but 3rd parametr is isCapturing 
},true)

// document.querySelector("#child")
// .addEventListener('click',()=>{
//     console.log(" child hitted")
// },true)


document.querySelector("#child")
.addEventListener('click',(e)=>{
    console.log(" child hitted");
    e.stopPropagation()              // it will stop propagation but it stop after console so it printed
},true)

