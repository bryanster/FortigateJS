var Yeet = require("./FortigateApi")
async function main(){
    var yeet = new Yeet("wf8jbbxGcnp9G7jf7Nw4s1QpmNq0fb", "10.255.255.254")
    console.log(await yeet.getVip())
}
main()


