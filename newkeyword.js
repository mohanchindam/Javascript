var lastName;
var firstName="dkfj";

var User=function(firstName, lastName){
    this.firstName = firstName;//another way of defining objects
    this.lastName=lastName;
    this.getLastName=function (){
        console.log(`Course count is: ${this.lastName}`);
    }
}
var mohan=new User("mohan","chindam");
console.log(mohan);
// console.log(mohan)
var pavan=new User("pavan","kalyan")//every time new keyword is used new instance is created
console.log(pavan);
