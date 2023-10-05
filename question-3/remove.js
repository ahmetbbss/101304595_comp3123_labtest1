const fs = require('fs')
const path = require('path')
const dir = "Logs"
fs.readdir (dir, (error, files) => {
  files.map((file) => {
    console.log("delete files..."+file)
    const filePath = path.join(dir, file)
    fs.unlink(filePath, (err)=> {
    })
  })
  fs.rmdir(dir, () => {})
})