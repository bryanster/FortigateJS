# FortigateApi


# warning
This library is not maintained and should not be considered secure.  



## install 
Install library
 
    npm i fortigatejs

## getting started
this library currently works with a Fortigate API user 
  
create an api token under:
System > Administrators > Create New > REST API Admin
  
You should limit this api key to a trusted host's 



Create a Require for the js file

    var fortigateapi = require("fortigatejs")

then create a new instance for a device for example:

    var forti = new fortigateapi("wf8jbbxGcnp9G7jf7Nw4s1QpmNq0fb", "firewall.nexezo.com")

The first value is the bearer token for your rest api admin  

The second value is the Base url of the firewall.

after that you can call on a  function for example:

    console.log(forti.createAdmin(payload)))

you can find an example payload in [/Payloads](https://github.com/bryanster/FortigateJS/tree/master/Payloads)
  
to ignore Certificate errors put 

    process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

on top of your code 
Warning this should only be used for development purposes.  
In production use valid certificates.

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


### Configuration
___

in the Payloads folder there are a few example [Payload](https://github.com/bryanster/FortigateJS/blob/master/Payloads/vlan_office.json) wich you can use/edit for your needs.  
for al the post opperation you need to include all values for the put operations you can Just add the value that you like to change (like normal JSON)

you can reboot the firewall by calling the reboot function

    reboot()

to create a new vlan for example a Office vlan you can use the vlan office 
you can call for load the file like:

    off = fs.readfile("vlan_office.json")

then use the variable in te call like this:

    createVlan(off)

the same can be done by using createZone() with the respected payload  
  
## Note:
please note that this library is created without access to a API documentation.  
if you have any improvements let me know!