let path = require("path"),
  fs = require("fs");

let chirps = [
  {
    name: "chripr1",
    message: "hi",
  },
  {
    name: "chripr1",
    message: "hi",
  },
  {
    name: "chripr12",
    message: "yo",
  },
  {
    name: "chripr3",
    message: "hello",
  },
  {
    name: "chripr4",
    message: "howdy",
  },
  {
    name: "chripr5",
    message: "hola",
  },
];

const chirpsLog = JSON.parse(chirps);

let writePath =path.join(__dirname, "../chirps.json");
chirps=JSON.stringify(chirps)
fs.writeFile (writePath, JSON.stringify(chirps),()=>{
    fs.readFile(writePath,err,data)=> {
        if(err){
            console.log(err)
        }else {
            console.log(data)
        }
    }
});

// fs.writeFile("./chirps.json", chirpsLog, () => console.log("logged"));
// fs.readFile(".chirps.json", (err, log) => {
//   if (err) console.log(err);
//   console.log(JSON.parse(log));
// });
