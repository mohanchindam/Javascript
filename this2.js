console.log(this);
var user={
    name: "mohan",
    class:"btech",
    country:"india",
    state:"telangana",
    method:function(k){
        console.log("line 8",k,this);
        function fun(){ //for all regular function calls, 'this' points to window object
            console.log("line 11",this)
        }
        fun();
    }
}
user.method(10);
//console.log(user.class);
