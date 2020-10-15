var Yeet = require("./FortigateApi")
async function main(){
    var yeet = new Yeet("wf8jbbxGcnp9G7jf7Nw4s1QpmNq0fb", "firewall.nexezo.com")
    console.log(await yeet.getUser())
}
main()


