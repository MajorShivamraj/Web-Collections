const path = require("path")
// returns  the file name ...
console.log(path.basename("/users/files/test.txt"));
// returns the directory name...
console.log(path.dirname("/users/files/test.txt"));
//returns the file extension...
console.log(path.extname("/users/files/test.txt"));
// it joins different functions...
console.log(path.join("/users","folder","files","style.css"));

console.log(path.resolve("app.js"));




