function fun(){

    let date2=document.getElementById('date1').value;
    console.log(date2);

    
    let date3=document.getElementById(date2).style.backgroundColor="green";

    if(date2.style.backgroundColor != "none"){          // tri te id aslyamule ghete,document.getElement chi garaj nahi
        date2.style.backgroundColor="block";
        }
        else{
            date2.style.backgroundColor="none";
        }
    
}