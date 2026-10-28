let promise = new Promise(function(resolve, reject){

    console.log("Your order");

    //resolve("Order placed successfully");
    reject("Order rejected");
    
});

console.log(promise);
