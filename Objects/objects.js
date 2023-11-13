const user={
    name:"Vishal",
    // [mySym]:"mykey1",
    age:18,
    location:"Dewas",
    "FullName":"Vishal Panwar",
    email:"vishal@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday", "Sunday"]
}

console.log(user.email);

user.greeting=function(){
    console.log("Hello everyone");   // Ye greeting message print hoga
}

console.log(user.greeting());