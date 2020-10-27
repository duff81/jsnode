let path = require ('path');
let fs = require ('fs');

let dataPath= path.join (__dirname, "..data.json");
fs.readFile(dataPath, {
    encoding: "utf-8"
}, (err, data) =>
{
    console.log
})

