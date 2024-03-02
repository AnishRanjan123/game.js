/*let h2=document.querySelector('h2');
console.dir(h2.innerText);
h2.innerText=h2.innerText+' anonymous';

let div=document.querySelectorAll('.box');
console.log(div);

let newbutton=document.createElement("button");
newbutton.innerText="click me";
newbutton.style.color="white";
newbutton.style.backgroundColor="red";
document.querySelector("body").prepend(newbutton);
//q2
let para= document.querySelector("p");
//para.setAttribute("class","newclass");
para.classList.add("class","newclass");

let button=document.querySelector(".btn");

button.onclick=()=>{
    console.log("button was clicked");
   
}
*/
let modebtn=document.querySelector(".btn");
let currmode="light";
modebtn.addEventListener("click",()=>
{
    //console.log("You are trying to change");
    if(currmode==="light")
    {
        currmode="dark";
        document.querySelector("body").style.backgroundColor="black";
    }
    else
    {
        currmode="light";
        document.querySelector("body").style.backgroundColor="white";
    }
    console.log(currmode);
});