var name;
console.log(name);
function fu() {
    //name="k"
    console.log(name);
    fun();
    function fun(){
      name="j";
        console.log(name)
    }
    
}
fu();
