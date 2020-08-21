// false:
// undefined
// null
// ''
// NaN
// 0
var a='';
if(a){
    console.log("valuable")
}
var b=2;
var a="2";
if(a===b){      //=== for strict check with datatypes 'coersion' takes a and b as same even they are string and integer for ==
    console.log("a equals b")
}else{
    console.log("a not equals b")
}