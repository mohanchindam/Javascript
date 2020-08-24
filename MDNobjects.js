var User={
    name:"",
    courseCount:0,
    getUserName:function (){
        console.log(`User Name is: ${this.name}`);

    }
};
var mohan=Object.create(User);
console.log(mohan);
User.name="mohan";
mohan.getUserName();
var pavan = Object.create(User,{
    name:{vale:"pavan"},
    courseCount:{value:1}
});
pavan.getUserName();

