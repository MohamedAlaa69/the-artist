var ul = document.getElementById("ul");
var open = document.getElementById("open");
var close = document.getElementById("close");

open.onclick=function(){
    ul.style.display="block";
    close.classList.remove("hide");
    open.classList.add("hide");
}



close.onclick=function(){
    ul.style.display="none";
    close.classList.add("hide")
    open.classList.remove("hide")

    
}