const user={
    username:"Vishal",
    message:function(){

        // Current context ko refer krne ke liye this ka use krte hai, current 
        //context yani user, is function ko hm user object kr andr call kr rhe hai
        console.log(`Hello ${this.username}, Welcome to the website`);
        console.log(this);  // Is this me user ko refer krega
    }
}

user.message();  // Hello Vishal, welcome to the website
console.log(this);  // Ye wla this user ko refer nhi krega, kyuki koi global context hai hi nhi uske paas







// Normal function
const fun1=function(){
    console.log("This is a normal function");
}
fun1(); 



// arrow function
const fun2 =  () => {
    console.log("This is an arrow function");
}
fun2(); 