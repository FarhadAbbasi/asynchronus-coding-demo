console.log("Before prepare food")

function prepfood(callback) {
            setTimeout(() => {
                console.log("preparing food, i'll let you know when it's done.");
                callback("Food is ready");
            },
                30); //timeout
}

function preptoast(callback) {
            setTimeout(() => {
                console.log("preparing toast, i'll let you know when it's done.");
                callback("toast is ready");
            },
                20); //timeout
}

function prepcoffee(callback) {
         setTimeout(() => {
                console.log("preparing coffee, i'll let you know when it's done.");
                callback("coffee is ready");
            },
                20); //timeout
}

prepfood((value) => {
    console.log("callback =", value);
    preptoast((value) => {
        console.log("callback =", value);
        prepcoffee((value) => {
            console.log("callback =", value);

        });
    });
});

console.log("this is the last console statement")
