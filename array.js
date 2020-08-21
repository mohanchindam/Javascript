//two ways to declare arrays
var names=["mohan","pavan",3,"gitam"];
var state= new Array("Telangan","AP","tamilnadu");
//console.log(state[2]);
//console.log(names.length);
names[0]="chindam";
//console.log(names);
names.pop();
//console.log(names);
names.unshift("insert at start");
//console.log(names);
names.shift();//remove first element
//names.shift();
//console.log(names);
console.log(names.indexOf(3));//index of element
console.log(Array.from("mohan"));//converts to array
console.log(names.indexOf("1wdwd"));//return -1 if not present