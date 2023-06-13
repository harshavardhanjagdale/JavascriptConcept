document.querySelector("#category").addEventListener('click',(e)=>{
    console.log(e);
    console.log(e.target,"target");
    if(e.target.tagName=="Li")
    {
    window.location.href="/" + e.target.id;
    }
})


document.querySelector("#form").addEventListener("keyup",(e)=>{
    console.log(e.target.dataset.uppercase);
    if(e.target.dataset.uppercase != undefined)
    {
        e.target.value=e.target.value.toUpperCase()
    }
})