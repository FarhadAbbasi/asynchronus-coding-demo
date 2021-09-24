console.log("Before prepare food")

function prepfood(data) {

    let promise = new Promise(  // 
        (resolve, reject) => { // Promise is an object which requires a function with 2 values.

            setTimeout(() => {
                if (data !== 0){
                console.log("preparing food, i'll let you know when it's done.");
                resolve("Food is ready");   }
                else {
                reject("value not acceptable")  }
                },
            30); //timeout
        });

    return promise;
}

function preptoast() {
    let promise = new Promise(
        (resolve, reject) => { // Promise is an object which requires a function with 2 values.

            setTimeout(() => {
                console.log("preparing toast, i'll let you know when it's done.");
                resolve("toast is ready");
            },
                20); //timeout
        });
    return promise;
}

function prepcoffee() {
    let promise = new Promise(
        (resolve, reject) => { // Promise is an object which requires a function with 2 values.

            setTimeout(() => {
                console.log("preparing coffee, i'll let you know when it's done.");
                resolve("coffee is ready");
            },
                20); //timeout
        });
    return promise;
}

let promise = prepfood( 10 );
// console.log("PROMISE =", promise)

promise.then( (response) => { //This "response" is the resolve that we get from the promise (of Function), 
    console.log("callback =", response); // So now it will print the resolve statement
    return preptoast() ;        // then call the next function in queue.
})
.then( (response)=> {
    console.log("callback =", response);
    return prepcoffee() ;
})
.then( (response)=> {
    console.log("callback =", response);
})
.catch( (error) => {
    console.log("error =", error);
});


console.log("this is the last console statement")





