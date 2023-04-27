const fs = require("fs"); // file system
const os = require("os"); // operating system

// console.log(os.cpus());
console.log(os.totalmem());
console.log(os.arch());
console.log(os.platform());

const data = fs.readFileSync("./sample.txt").toString("utf-8");
console.log(data);
