
//slice() 
//copies a portion of an array without changing the original array

//start at 0
//stop before index 2

let name = ["Rohan","Vivek","Ajay","raj","max"];

// console.log(name[1],name[4]);
// console.log(name);

let result = name.slice(1,3);
console.log(result);

console.log("\n");


//splice()
//can add , remove , or replace element 
//remove element
// 1 start from index 1(vivek)
//2 remove 2 elements (vivek and ajay)
name.splice(1,2);
console.log(name);

console.log("\n");


let namee = ["Rohan","Vivek","Ajay","raj","max"];
//Add
//1 start at index 1
//0 dont remove aything
//"Rahul" add rahul
console.log(namee);
namee.splice(1,0,"raj","karan");
console.log(namee);

let data = ["Rohan","Vivek","Ajay","raj","max"];
//3 replace an element
//Go to index 1 remove 1 element -> add "Rahul"
data.splice(0,3,"Rahul","max");
console.log(data);
//replaces the element starting number is for the index and second tell how many elements to remove

//concat()
//Combines two arrays

let namedata = ["Rohan","Vivek","Ajay"];

let otherName = ["Rahul","Amit"];

let result2 = namedata.concat(otherName);
console.log(result2);

//every()
//Check whether all elements satisfy a condition.
let res =name.every((value)=>{
    return value.length >=4;
});
//here its checking the value of every element if one also is false then all false

console.log(res);

//some()
//Check whether atleast one element satisfies a condition
let rest = namedata.some((value)=>{
    return value ==="Vivek";
});

console.log(rest);
