function task1(callback){
    console.log("Task 1 started");
    callback();
    console.log("Task 1 End");
    
}

function task2(callback){
        console.log("Task 2 started ");
        callback();
        console.log("Task 2 End");
        
    }

function task3(callback){
        console.log("Task 3 started");
        callback();
        console.log("Task 3 End");
    }

    task1(function(){
        task2(function(){
            task3(function(){
                console.log("All tasks completed");
            });
        });
    });