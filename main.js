var Yeet = require("./FortigateApi")
var fs = require('fs');
const { basename } = require("path");
async function main(){
    
    var yeet = new Yeet("wf8jbbxGcnp9G7jf7Nw4s1QpmNq0fb", "firewall.nexezo.com")
    console.log(await yeet.createAdmin("{\"name\":\"bryan\",\"q_origin_key\":\"\",\"wildcard\":\"disable\",\"remote-auth\":\"disable\",\"remote-group\":\"\",\"peer-auth\":\"disable\",\"peer-group\":\"\",\"trusthost1\":\"0.0.0.0/0\",\"trusthost2\":\"0.0.0.0/0\",\"trusthost3\":\"0.0.0.0/0\",\"trusthost4\":\"0.0.0.0/0\",\"trusthost5\":\"0.0.0.0/0\",\"trusthost6\":\"0.0.0.0/0\",\"trusthost7\":\"0.0.0.0/0\",\"trusthost8\":\"0.0.0.0/0\",\"trusthost9\":\"0.0.0.0/0\",\"trusthost10\":\"0.0.0.0/0\",\"ip6-trusthost1\":\"::/0\",\"ip6-trusthost2\":\"::/0\",\"ip6-trusthost3\":\"::/0\",\"ip6-trusthost4\":\"::/0\",\"ip6-trusthost5\":\"::/0\",\"ip6-trusthost6\":\"::/0\",\"ip6-trusthost7\":\"::/0\",\"ip6-trusthost8\":\"::/0\",\"ip6-trusthost9\":\"::/0\",\"ip6-trusthost10\":\"::/0\",\"accprofile\":{\"name\":\"prof_admin\",\"q_origin_key\":\"prof_admin\",\"comments\":\"\",\"secfabgrp\":\"read-write\",\"ftviewgrp\":\"read-write\",\"authgrp\":\"read-write\",\"sysgrp\":\"read-write\",\"netgrp\":\"read-write\",\"loggrp\":\"read-write\",\"fwgrp\":\"read-write\",\"vpngrp\":\"read-write\",\"utmgrp\":\"read-write\",\"wifi\":\"read-write\",\"admintimeout-override\":\"disable\",\"q_ref\":0,\"q_static\":true,\"q_no_rename\":false,\"q_global_entry\":false,\"q_type\":10,\"q_path\":\"system\",\"q_name\":\"accprofile\",\"q_mkey_type\":\"string\",\"q_no_edit\":false},\"allow-remove-admin-session\":\"enable\",\"comments\":\"\",\"vdom\":[{\"name\":\"root\",\"q_origin_key\":\"root\",\"datasource\":\"system.vdom\"}],\"schedule\":\"\",\"accprofile-override\":\"disable\",\"radius-vdom-override\":\"disable\",\"password-expire\":\"0000-00-00 00:00:00\",\"force-password-change\":\"disable\",\"gui-dashboard\":[],\"two-factor\":\"disable\",\"fortitoken\":\"\",\"email-to\":\"\",\"sms-server\":\"fortiguard\",\"sms-custom-server\":\"\",\"sms-phone\":\"\",\"guest-auth\":\"disable\",\"guest-usergroups\":[],\"guest-lang\":\"\",\"login-time\":[],\"gui-global-menu-favorites\":[],\"gui-vdom-menu-favorites\":[],\"gui-new-feature-acknowledge\":[],\"currentGuestLanguage\":\"Default Language (English)\",\"type\":\"local\",\"restrictTrusted\":false,\"tfaVisible\":true,\"password\":\"Welkom01\",\"confirmPassword\":\"Welkom01\"}"))
    // console.log(await yeet.getDeviceGlobal())
    // await writback(await yeet.getBackup())
}

main()

// function writback(config){
//     fs.writeFile('yeet.conf', config, 'utf8',(error)=>{
//         return
//     });
//     console.log("wrote config to yeet.conf")
// }