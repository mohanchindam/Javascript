var isodd = (n)=>{
    return n%2 !==0;
}
//console.log(isodd(10));

//console.log([1,3,5].every(isodd));
// var n= [1,3,5].every((k)=>{
//     return k%2!==0;
// }); 
//or
var n= [1,3,5].every((k)=> k%2 !==0)

console.log(n);