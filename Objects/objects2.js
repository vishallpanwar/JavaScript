// Another way of creating objects
const user=new Object();

user.id="123abc";
user.name="Vishal";
user.isLoggedIn=false;
console.log((user));    // Upr mention ki gayi saari information print hojyegi


// Nested format bhi likh sakte hai information
const user2={
    email:"vishal@gmail.com",
    fullname:{
        firstname:"Vishal",
        lastname:"Panwar"
    }
}

console.log(user2.fullname);
console.log(user2.fullname.firstname);  // Jitni nesging ke andr ki info chahiye utna aage dot lgake data retirive krte rho
console.log(user2.fullname.lastname);   // Jitni nesging ke andr ki info chahiye utna aage dot lgake data retirive krte rho


const obj1={1:"a", 2:"b"};
const obj2={3:"c", 4:"d"};

const obj3=Object.assign(obj1, obj2);   // Dono objectts ke data ko assign kr deta hai
console.log(obj3);


// Yha pr 1 array ke andr multiple objects hai
const users=[
    {
        id:1,
        email:"vishal@gmail.com",
    },
    {
        id:2,
        email:"panwar@gmail.com",
    },
    {
        id:3,
        email:"ayushi@gmail.com",
    },
]

// Users me 1 object ka email
console.log(users[1].email);     //vishal@gmail.


const course={
    courseName:"Mera course",
    price:"99999",
    instructor:"Vishal"
}

// One way
console.log(course.instructor);

// Another way
const {instructor}=course;   // Vishal
console.log(instructor);     // Vishal