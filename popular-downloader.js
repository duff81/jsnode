const path = require ("path"),
fs= require("fs"),
rp= require ('request-promise'),
options= {
    encoding: "binary"
}
// writePath=path.join(__dirname, "popular-articles.json");

rp("https://www.reddit.com/r/hearthstone.json")
.then (res=>{JSON.parse(res);
    let data =JSON.parse(res);
data.data.children.forEach (article=>{
    let fileExtension =path.extname(article.data.url);
    if(fileExtension == ".jpg" || fileExtension == ".png" || fileExtension == ".gif"){
        rp (article.data.url, options)
        .then (image=>{
           fs.writeFile(`./downloads/${article.data.id}${path.extname(article.data.url)}`, image, options, (err)=>{
               console.log(`may have been an ${err}`)
           })
        })
        .catch (err=>console.log(err))
    }
});
    
})
.catch (err=>console.log(err))