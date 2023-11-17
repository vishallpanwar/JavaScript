for(let index=0;index<10;index++){
    const ele=index;

    if(index==5) 
    console.log("5 aagya bhai");
    
    console.log(index);
}




let myArray=["Vishal", "Aadit", "Asha"];
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);        // Vishal Aadit Asha
}



// Break and continue

for (let index = 0; index < 10; index++) {
    const element = index;
    console.log(index);

    if(element==7){
        console.log("7 aagya aur hmne break execute krdiya");   // 7 aate hi ye msg print krdega
        break;
    }
}