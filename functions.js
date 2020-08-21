console.log(fun("mohan")); //Javascript follows global context so we call a fun before we define it
function fun(name) {
    console.log(`my name is ${name}, I am student`); 
    
}
//fun("chindam")
function fu1(){
    return 20;
}
var a=fu1();
console.log(a);

// var ab=function(name,role){ //part of functional programming defining function
//     switch (name) {
//         case 'admin':
//             return `${role} maintainance`;
//             break;
//         case 'user':
//             return `${role} client`;
//         default:
//             break;
//     }
// }
// console.log(ab('user',"admin's"))