const fs = require("fs");
const path = require("path");
const filePath = path.resolve(__dirname, "a.txt");

fs.readFile(filePath, "utf-8", (err, content1) => {
  if (err) {
    console.log("File Not Found!");
  } else {
    console.log(content1);
  }
});
