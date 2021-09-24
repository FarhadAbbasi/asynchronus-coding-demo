console.log("Before prepare food")

function prepfood(data) {

    let promise = new Promise(  // 
        (resolve, reject) => { // Promise is an object which requires a function with 2 values.

            setTimeout(() => {
                if (data !== 0) {
                    console.log("preparing food, i'll let you know when it's done.");
                    resolve("Food is ready");
                }
                else {
                    reject("value not acceptable")
                }
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

async function startasynch() {               // run all asynch jobs within this func "asynch"
    try {
        let foodresponse = await prepfood(10);       //call prepfood and wait untill the food is ready, 
        console.log("Callback =", foodresponse);   // Food callback
        let toastresponse = await preptoast();     //now call pres toast and wait untill ready.
        console.log("Callback =", toastresponse);  // toast callback.
        // let coffeeresponse = await prepcoffee() ;
        console.log("Callback =", await prepcoffee());
    }

    catch (error) {
        console.log("error =", error);
    }
}

startasynch();

console.log("this is the last console statement")





