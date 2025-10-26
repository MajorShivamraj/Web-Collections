const fs = require("fs")
const path = require("path")

const folderPath = path.join(__dirname,"studentFolder")
const filePath = path.join(folderPath,"studentList.pdf")


// create the folder here....
if(!fs.existsSync(folderPath)){
    fs.mkdirSync(folderPath)
    console.log("Folder created succesfully");
    
}
else{
    console.log("Folder already exists");
    
}


// create a file...
fs.writeFileSync(filePath,"List of students in Class..\n")
console.log("File created and written");


//append a file...
fs.appendFileSync(filePath,"1) Shivamraj Matkar. \n2) Krishna Vasudev Yadav.")
console.log("File appended successfully..");


// Read the file...
const content = fs.readFileSync(filePath,"utf-8")
console.log(content);


//read the directory..
const files = fs.readdirSync("./")
console.log(files);


//delete the file...
fs.unlinkSync(filePath);
console.log("file deleed successfully");


