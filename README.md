# FortigateApi
## install 
Install dependencies
 
    npm i

## getting started
Create a Require for the js file

    var fortigateapi = require("./FortigateApi")

then create a new instance for a device for example:

    var fortigate1 = new fortigateapi("wf8jbbxGcnp9G7jf7Nw4s1QpmNq0fb", "firewall.nexezo.com")

The first value is the bearer token for your rest api admin  

The second value is the Base url of the firewall.

after that you can call on a  function for example:

    console.log(fortigate1.createAdmin(payload)))

you can find an example payload in [/Payloads](https://github.com/bryanster/FortigateJS/tree/master/Payloads)
  
to ignore Certificate errors put 

    process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

on top of your code

## Functions
### Get
___
these functions are used to get information from the fortigate and can be ran without any risk.

    getAdmin()

wil return all admin acounts with there properties in a json format

    getApplicationControl()

wil return all Application controll profiles and settings

    getavprofile()

rerurns all Anti-virus profiles

    getBackup()

wil return the full firewall config this

    getRouteTable()
 to get the routing table


### operations
___

in the Payloads folder there are a few example payloads wich you can use/edit for your needs.  

you can reboot the firewall by calling the reboot function

    reboot()

to create a new vlan for example a Office vlan you can use the vlan office [Payload](https://github.com/bryanster/FortigateJS/blob/master/Payloads/vlan_office.json)
you can call for load the file like:

    off = fs.readfile("vlan_office.json")

then use the variable in te call like this:

    createVlan(off)

the same can be done by using createZone() with the respected payload