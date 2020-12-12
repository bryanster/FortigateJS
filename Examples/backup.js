var fortigateapi = require("./FortigateApi")
var fs = require("fs").promises
var fortigate = new fortigateapi("wf8jbbxGcnp9G7jf7Nw4s1QpmNq0fb", "192.168.2.240")

async function main(){
    
    var download = await fortigate.getBackup("test.conf"); //the parameter is the output file name
    console.log(download)//this will return true on success
    
   
}

main()
