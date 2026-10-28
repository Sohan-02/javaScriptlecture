let name =["Rohan", "vivek", "ajay"]

console.log(name);
console.log(name[1]);

// 1.length
//Returns the length of the array
console.log(name.length);       

//2.push()
//adds an element to the end 
name.push("Rahul");

console.log(name);

//3.pop()
//removes the last element from the array
name.pop();
console.log(name);

//4.unshift()
//adds an element to the beginning of the array
name.unshift("Rahul");
console.log(name);

//5.shift()
//removes the first element from the array
name.shift();
console.log(name);

//6.reverse()
//reverses the order of the array
name.reverse();
console.log(name);

let rollnoum=[2,43,12,43,12,54];
rollnoum.reverse();
console.log(rollnoum);

//7.includes()
//checks if an element is present in the array or not
console.log(name.includes("vivek"));