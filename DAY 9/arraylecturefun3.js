let name = ["Rohan","Vivek","Ajay","raj","max"];

//findIndex : return the index of the first matching element
let result = name.findIndex((value)=>{
    return value ==="Ajay";
});

console.log(result);

//join() function
//Converts array element in to a string
let joindata =name.join("");
console.log(joindata);


//sort the element of an array
//1. sorting number - ascending

let nums = [50,10,5,40,20];

nums.sort(function(a,b){
    return a - b;
});
console.log(nums);

console.log("\n");


//sorting numbers descending order
nums.sort(function(a,b){
    return b - a;
});
console.log(nums);


//slice() 
//copies a portion of an array without changing the original array

//start at 0
//stop before index 2





let res = name.slice(0,2);
console.log(res);

