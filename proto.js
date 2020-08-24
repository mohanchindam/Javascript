var User=function(firstName, lastName){
    this.firstNamee = firstName;//another way of defining objects
    this.lastName=lastName;
    this.getLastName=function (){
        console.log(`Last name is ${this.lastName}`);
    }
}
User.prototype.getFirstName= function (){//protype or (__proto__) is used to inject new properties to objects
    console.log(`First Name is ${this.firstName}`)//proto is also called when object called using new keyword
}
var mohan=new User("mohan","chindam");
if(mohan.hasOwnProperty("firstName")){//checks if property exists in object and excutes if exists
    mohan.getFirstName();
}
mohan.getLastName();
var pavan=new User("pavan","kalyan")//every time new keyword is used new instance is created
pavan.getLastName();
pavan.getFirstName();


