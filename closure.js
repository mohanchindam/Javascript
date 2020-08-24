function name(){
    var firstName="mohan";
    function sayHello(){
        console.log(firstName);
    }
    return sayHello;//Here sayHello mounts on name in the memory so unless sayHello is completed name will also not completed
}
var value= name();
value();//sayHello stores in value i.e., the reference of sayHell is stored in value, name excution  is not completed unless all of the references in it is completed
function add(x){
    return function (y){
        return x+y;
    }
};
var val=add(4);
console.log(val(10));
console.log(add(10)(2));//curring: easy way to call the whole function add at a time instead of creating references