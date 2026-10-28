let promise = new Promise(function(resolve, reject){

    console.log("Your order");

    //resolve("Order placed successfully");
    reject("Order rejected");
    
});

promise
    .then(function(resul){
        console.log(resul);
    })
    .catch(function(erro){
        console.log(erro);
        
    });