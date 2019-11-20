const fs = require("fs");
let data = "lalal";
fs.appendFileSync('data.txt', `\n${data}`)