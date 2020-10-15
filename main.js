var yeet = require("./FortigateApi")


async function main(){
    // console.log(await yeet.getPolicy())
    // console.log(await yeet.getUser())
    console.log(await yeet.createUser(payload))
}
main()



var payload = {'json':
                    {
                    'name':  "yeetur",
                    'passwd': "Welkom01",
                    'type': "password",
                    'status': "enable",
                    'email-to': '',
                    'ldap-server': '',
                    'radius-server': '',
                    }     
                }