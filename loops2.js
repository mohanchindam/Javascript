// var i=0;
// for(;;){
//     if(i>3)break;
//     console.log(i);
//     i++
// }
//for each loop more over a loop than  a method
var ar=[1,2,"mohan","telangan","hyderabad"];
//ar.forEach((k)=>(console.log(k)));
// for (const n of ar ){ //for of loop used for arrays
//     console.log(n);
// }
const acc={ //acc is object
  yt:"youtube", 
  ig:"instagram",
  fb:"facebook",
  tw:"twitter"
};
for (const n in acc){//for in loop used for objects
    console.log(`key is ${n} and its value is ${acc[n]}`);         
}