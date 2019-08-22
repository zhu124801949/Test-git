function fetch(param) {
    return new Promise((resolve, reject) => {
        if (param > 1) {
            resolve("success");
        } else {
            reject("failed");
        }
    });
}

fetch(0).then(function (data) {
    console.log(data);
}, function(data){
    console.log(data);
})