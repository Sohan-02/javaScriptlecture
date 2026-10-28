let name = ["Rohan","Vivek","Ajay","max","raj","vivek"];

// for(let i = 0; i <2; i++){  
//       console.log(name[i]);
// }

// for(let i = 0; i <4; i++){  
//       console.log(name[i]);
// }

// for(let i = 5; i >=0; i--){  
//       console.log(name[i]);
// }

//for each() : Executes a function for each elemnt , also we can print other info like name (value +)
name.forEach(function(value){
      console.log(value);
});

//map() functuion : Creates a new array by modifying every element.

let result = name.map(function(value){
      return value.toUpperCase();
      //return value.toLowerCase();
});

console.log(result);

//filter()
//creates a new array containing elements that satidfy a condition
let resu = name.filter((value)=>{
      return value.length>4;
});
console.log(resu);





let nums = [10,15,20,25];
// let data = nums.filter((value)=>{
//       return value>=20;
// });
// console.log(data);


let data = nums.filter(function(x) {
      return x > 15;
});
console.log(data);


//find() element
//Returns the first element that satisfies a condition

let num2 =[10,20,30,40];
console.log(num2.find(x => x > 20));


let ult = name.find((value)=>{
      return value.length > 4;
});
console.log(ult);

