let name1="Vishal";
let name2=name1;
name2="Abcd";

console.log(name1);   // Name1 ke anrd Vishal
console.log(name2);   // Name2 ke andr Abcd

// Aisa isiliye hua kyuki this is working under stack memory. Jb hm name1 aur name2 ko 
// initialize krte hai wo stack memory ke andr hi save hoti hai, aur jb un values ko edit krte hai
// to wo actual nhi, blki copied items me changes hote hai, isiliye values me jo bhi print krwao, original hi print hongi





let user1={
    email:"vishal@gmail.com",
    upi:"vishal@ybl"
}

let user2=user1;

console.log(user1);  // same upr wli details ayegi
console.log(user2);  // same upr wli details ayegi

// Aisa isiliye ho rha hai kyuki upr copy nhi bnri hai heap memory
//  me, direct elements ki original values ka access mil raha hai