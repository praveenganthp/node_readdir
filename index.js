console.log("hello world...");
const os = require("os");
const fs = require("fs");
const path = require("path");

// fs.mkdir("myfolder",function(err,path){
//     if(err) throw err;
//     fs.writeFile("./myfolder/message.txt", "folder and message file created successfully", "utf-8",function(err){
// if (err) throw err;
// console.log("file created")
//     })
// })

// fs.readFile("./myfolder/message.txt","utf-8",function(err,data){if (err) throw err;
// console.log(data)})

fs.readdir("./", function (err, files) {
  if (err) throw err;
  files.forEach(function (file) {
    const filePath=path.join("./",file);
    fs.stat(filePath,function(err,stats){
        if (err) throw err;

        const fileType = stats.isDirectory()?"folder" : "file";
        console.log(`${file} - ${fileType}`)
    })
  });
});

// console.log(os.platform())
// console.log(os.release())
// console.log(os.uptime())
// console.log(os.cpus().length)
