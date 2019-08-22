var fs = require("fs");
let fileURL = "C:/Users/c5267301/Documents/GitHub/JS-Training/src/Nodejs/input.txt";
let fileURLNew = "C:/Users/c5267301/Documents/GitHub/JS-Training/src/Nodejs/output.txt";
var data = "";
var readerStream = fs.createReadStream(fileURL);
readerStream.setEncoding("UTF8");
readerStream.on("data",(chunk)=>{
    data = data + chunk;
    console.log(data);
});

var writeStream = fs.createWriteStream(fileURLNew);
var writedata = "测试";

readerStream.pipe(writeStream);

var zlib = require('zlib');

// 压缩 input.txt 文件为 input.txt.gz
fs.createReadStream(fileURL)
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream("C:/Users/c5267301/Documents/GitHub/JS-Training/src/Nodejs/output.gz"));
