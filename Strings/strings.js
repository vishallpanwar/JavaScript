const name="Vishal";
const age=21;
console.log(name+age);   // Vishal21 ans ayega



// Ye nya aur behetar tarika hai string ko declae krne ka, 
//isko use krke baki saare functions directly access krskte hai
const surname=new String('Panwar');  


console.log(surname[0]);                 // P ayega
console.log(surname[2]);                 // n ayega 
console.log(surname.length);             // 6 ayega
console.log(surname.toUpperCase());  // PANWAR ayega


const newString=surname.substring(0,3);   // Pan ayega
console.log(newString);


const s1="   Vishal   ";
console.log(s1.trim());  // Vishal ayega, trim se starting aur ending ki extra spaces hat jate hai


const str2="abcdef20gh";
console.log(str2.replace('20', '-'));  // abcdef-gh


const str3="Vishal";
console.log(str3.includes('sh'));  // True- kyuki sh Vishal me present hai
console.log(str3.includes('chanchu')); // False ayega