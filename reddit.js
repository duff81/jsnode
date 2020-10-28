const path = require ("path"),
fs= require("fs"),
rp= require ('request-promise'), 
writePath=path.join(__dirname, "popular-articles.json");

rp("https://www.reddit.com/r/hearthstone.json")
.then (res=>{
    let redditData=JSON.parse(res)
    let outputArr =[]
    redditData.data.children.forEach(article =>{
        let obj={
            title: article.data.title,
            author: article.data.author,
            url: article.data.url
        };
        outputArr.push(obj);
        
    });
const jsonData =JSON.stringify(outputArr);
fs.writeFile(writePath, jsonData,(err)=>{
 console.log (err)
});

})  
.catch (err=>console.log(err))