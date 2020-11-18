process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
var Yeet = require("./FortigateApi")
var fs = require('fs');

async function main(){
    var fortigate1 = new Yeet("wf8jbbxGcnp9G7jf7Nw4s1QpmNq0fb", "192.168.2.240") // token  link
    let AV = fs.readFileSync('FWconfig/fourtop_AV.json');
    let df = fs.readFileSync('FWconfig/fourtop_df.json');
    let app = fs.readFileSync('FWconfig/fourtop_app.json');
    let wf = fs.readFileSync('FWconfig/fourtop_wf.json');
    let pol = fs.readFileSync('FWconfig/Internet_out_policy.json');
    let ser = fs.readFileSync('FWconfig/vlan_server.json');
    let gue = fs.readFileSync('FWconfig/vlan_guest.json');
    let tru = fs.readFileSync('FWconfig/zone_trusted.json');
    let off = fs.readFileSync('FWconfig/vlan_office.json');
    let res = fs.readFileSync('FWconfig/zone_restricted.json');

    console.log(await fortigate1.createAVProfile(AV).catch((err) => console.log("done")))
    console.log(await fortigate1.createAppProfile(app).catch((err) => console.log("done")))
    console.log(await fortigate1.createWFProfile(wf).catch((err) => console.log("done")))
    console.log(await fortigate1.createDFProfile(df).catch((err) => console.log("done")))
    console.log(await fortigate1.createPolicy(pol).catch((err) => console.log("done")))
    console.log(await fortigate1.createVlan(gue).catch((err) => console.log("done")))
    console.log(await fortigate1.createVlan(ser).catch((err) => console.log("err")))
    console.log(await fortigate1.createVlan(ser).catch((err) => console.log("err")))
    console.log(await fortigate1.createVlan(off).catch((err) => console.log("err")))
    console.log(await fortigate1.createZone(tru).catch((err) => console.log(err)))
    console.log(await fortigate1.createZone(res).catch((err) => console.log(err)))
}
main()