let aboutUs=document.getElementById("navAbUs");
let services=document.getElementById("navServ");
let works=document.getElementById("navWork");
let blog=document.getElementById("navBlog");
let contacts=document.getElementById("navCon");

aboutUs.addEventListener("click", paspaudimas);
aboutUs.addEventListener("mouseover", uzvedimas);

function uzvedimas(){
    document.getElementById("navAbUs").style.color="#000000"
}