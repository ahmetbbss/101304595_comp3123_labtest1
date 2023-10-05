const fs = require ('fs')
const path = require ('path')
const dir = "Logs"
if (!fs.existsSync(dir) ) { // if doesn't exist logs directory
    fs.mkdirSync(dir)       // make new directory
} 
process.chdir(dir)
const fileCount = 10 
for(
    let i = 0 ;
    i < fileCount ;
    i++
) {
    const fileName = "log"+i + ".txt"
    fs.writeFile(fileName, "test", () => {})
    console.log(fileName)
}
