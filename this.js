console.log(this);
function fun(){
    console.log(this);//it gives different access in different places like browsers(window) and many others
}
fun();