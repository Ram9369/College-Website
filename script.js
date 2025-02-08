// Function to toggle mobile menu visibility
const toggleBtn=document.querySelector(".menu-icon");
const nav=document.querySelector(".navbar-collapse");
toggleBtn.addEventListener("click",()=>{

  if(nav.style.display==="none"){
    nav.style.display="block";
  }else{
   nav.style.display="none";
  }
});