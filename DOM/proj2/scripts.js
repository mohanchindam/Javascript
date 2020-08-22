const red=document.querySelector(".red"); 
const pink=document.querySelector(".pink"); 
const orange=document.querySelector(".orange"); 
const cyan=document.querySelector(".cyan"); 
const violet=document.querySelector(".violet");
const center=document.querySelector(".center");
console.log(window.getComputedStyle(red).backgroundColor);//It will help us to get properties of elements here it is red using window global object
const getBGcolor=(selectedElement)=>{
    return window.getComputedStyle(selectedElement).backgroundColor;
}
console.log(getBGcolor(pink)); 