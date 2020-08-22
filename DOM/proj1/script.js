var counter=document.getElementsByClassName("counter")[0];//gives counter tag array 0 index has innerText
var followers=document.querySelector(".followers");//gives whole tag innerText is direct usable
//counter.innerHTML=1000;
var a=counter.innerText;
let count=0;
setInterval(()=>{//At what internal speed the function(callback here) should execute here it is 1ms i.e 
    if(count<a){
    count++
    counter.innerHTML=count;
    }
},)
setTimeout(()=>{//When should the given statement should execute here it excutes after 4000ms
    followers.innerText="Follower on GitHub"
},4000)