function file() {
    var fs = require("fs");
    let fileURL = "C:/Users/c5267301/Documents/GitHub/JS-Training/src/Nodejs/input.txt";

    this.readFile = function () {
        fs.readFile('C:/Users/c5267301/Documents/GitHub/JS-Training/src/Nodejs/input.txt', (err, data) => {
            if (err) {
                console.log("读取异常");
            } else {
                console.log(data.toString());
                console.log("程序执行结束!");
            }
        });
    }
}
module.exports = file;