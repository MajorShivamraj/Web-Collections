const fs = require("fs").promises;
const path = require("path");

const folderPath = path.join(__dirname,"studentsDetailsFolder");
const filePath = path.join(folderPath,"StudentsDetails.txt");

// async function create the folder...
async function createFolder(folderPath) {
    try {
        await fs.access(folderPath)
    } catch {
        await fs.mkdir(folderPath);
        console.log("Folder Created..");
        
    }
}

createFolder(folderPath)


// create the file...

async function writeFile() {
    try {
        await fs.writeFile(filePath,"List of Student..\n")
        console.log("File Created..");
        
    } catch (error) {
        console.log(error);
        
    }
}

writeFile();

// Append File...
async function appendtoFile() {
    try {
        await fs.appendFile(filePath,"New students added.\n")
        console.log("File appended Successfully");
        
    } catch (error) {
        console.log(error);
    }
}

appendtoFile();

// Read Files..
async function readToFile() {
    try {
        const content = await fs.readFile(filePath,"utf-8");
        console.log(content);
        
    } catch (error) {
        console.log(error);
    }
}

readToFile();

// delete the file...

async function deleteFile() {
    try {
        await fs.unlink(filePath);
        console.log("Files deleted..");
        
    } catch (error) {
        console.log(error);
    }
}

deleteFile();