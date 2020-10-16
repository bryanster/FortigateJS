# FortiRest
## install 
Install dependencies
 
    npm i

## Usage
Create a Require for the js file

    var fortigateapi = require("./FortigateApi")

then create a new instance for a device for example:

    var fortigate1 = new fortigateapi("wf8jbbxGcnp9G7jf7Nw4s1QpmNq0fb", "firewall.nexezo.com")

The first value is the bearer token for your rest api admin  

The second value is the Base url of the firewall.

after that you can call on a  function for example:

    console.log(fortigate1.createAdmin(payload)))

you can find an example payload in [/Payloads](https://github.com/bryanster/FortigateJS/tree/master/Payloads)