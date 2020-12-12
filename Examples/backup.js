var Yeet = require("./FortigateApi")
var fs = require('fs');
const { basename } = require("path");
async function main(){
    
    var yeet = new Yeet("wf8jbbxGcnp9G7jf7Nw4s1QpmNq0fb", "firewall.nexezo.com") // APi key , endpoint
    await writback(await yeet.getBackup())
}

main()

// function writback(config){
//     fs.writeFile('yeet.conf', config, 'utf8',(error)=>{
//         return
//     });
//     console.log("wrote config to yeet.conf")
// }
