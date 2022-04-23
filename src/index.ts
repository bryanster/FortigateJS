var axios = require('axios');
import https from "https";
import fs from "fs";

class Api {
    token : string;
    endpoint : string;
    Secure : boolean;
    constructor(token:string, endpoint:string, Secure:boolean = true) {
        this.token = token,
        this.endpoint = endpoint,
        this.Secure = Secure
}
getPolicy() {
    return this._get("cmdb/firewall/policy/")
}
getUser() {
    return this._get("cmdb/user/local/")
}
getAdmin() {
    return this._get("cmdb/system/admin/")
}
getVdom() {
    return this._get("cmdb/system/vdom/")
}
getStaticRoute() {
    return this._get("cmdb/router/static/")
}
getService() {
    return this._get("cmdb/firewall.service/custom/")
}
getServiceGroup() {
    return this._get("cmdb/firewall.service/group/")
}
getShaper() {
    return this._get("cmdb/firewall.shaper/traffic-shaper/")
}
getVip() {
    return this._get("cmdb/firewall/vip/")
}
getIpsecP1() {
    return this._get("cmdb/vpn.ipsec/phase1-interface/")
}
getIpsecP2() {
    return this._get("cmdb/vpn.ipsec/phase2-interface/")
}
getBackup(filepath:string) {
    return this._download("monitor/system/config/backup?scope=global", filepath)
}
getInterfaces() {
    return this._get("monitor/system/available-interfaces")
}
getDeviceState() {
    return this._get("monitor/log/device/state")
}
getDeviceGlobal() {
    return this._get("cmdb/system/global")
}
getAvProfile() {
    return this._get("cmdb/antivirus/profile")
}
getSslVpnSettings() {
    return this._get("cmdb/vpn.ssl/settings")
}
getSystemStatus() {
    return this._get("monitor/system/status")
}
getRouteTable() {
    return this._get("monitor/router/ipv4")
}
getWebAppFirewall() {
    return this._get("/cmdb/waf/profile")
}
getDnsFilter() {
    return this._get("cmdb/dnsfilter/profile")
}
getWebFilter() {
    return this._get("cmdb/webfilter/profile")
}
getEmailFilter() {
    return this._get("cmdb/emailfilter/profile")
}
getLocalInPolicy() {
    return this._get("monitor/firewall/local-in/")
}
getFirewallDns() {
    return this._get("cmdb/system/dns?datasource=1&with_meta=1")
}
getSdwanInterfaces() {
    return this._get("/monitor/virtual-wan/members")
}
getIntrusionPrevention() {
    return this._get("cmdb/ips/sensor")
}
getApplicationControl() {
    return this._get("cmdb/application/list")
}
getSslInspection() {
    return this._get("cmdb/firewall/ssl-ssh-profile")
}
getSniffer() {
    return this._get("cmdb/firewall/sniffer")
}
getCapture(mkey:string, filename:string) {
    return this._download(`monitor/system/sniffer/download/${mkey}`, filename)
}
createAdmin(payload: any) {
    return this._post("cmdb/system/admin", `${payload}`)
}
createAVProfile(payload: any) {
    return this._post("cmdb/antivirus/profile", `${payload}`)
}
createAppProfile(payload: any) {
    return this._post("cmdb/application/list", `${payload}`)
}
createWFProfile(payload: any) {
    return this._post("cmdb/webfilter/profile", `${payload}`)
}
createDFProfile(payload: any) {
    return this._post("cmdb/dnsfilter/profile", `${payload}`)
}
createPolicy(payload: any) {
    return this._post("cmdb/firewall/policy", `${payload}`)
}
createZone(payload: any) {
    return this._post("/cmdb/system/zone/", `${payload}`)
}
createVlan(payload: any) {
    return this._post("cmdb/system/interface", `${payload}`)
}
createDHCPserver(payload: any) {
    return this._post("cmdb/system.dhcp/server", `${payload}`)
}
createSniffer(payload: any) {
    return this._post("cmdb/firewall/sniffer", `${payload}`)
}
createSslVpnPortal(payload: any) {
    return this._post("cmdb/vpn.ssl.web/portal", `${payload}`)
}
createAddr(payload:add_domain_address) {
    return this._post("cmdb/firewall/address", `${payload}`)
}
createAddrgrp(payload: any) {
    return this._post("cmdb/firewall/addrgrp", `${payload}`)
}
createSdWanRoute(payload: any) {
    return this._post("cmdb/router/static", `${payload}`)
}
createStaticRoute(payload: any) {
    return this._post("cmdb/router/static", `${payload}`)
}
createIpsecP1(payload: any) {
    return this._post("cmdb/vpn.ipsec/phase1-interface", `${payload}`)
}
createIpsecP2(payload: any) {
    return this._post("cmdb/vpn.ipsec/phase2-interface", `${payload}`)
}
createSnmpComunityV1(payload: any) {
    return this._post("cmdb/system.snmp/community", `${payload}`)
}
startSniffer(mkey:string) {
    return this._post(`/monitor/system/sniffer/start/${mkey}/`, `{}`)
}
pauseSniffer(mkey:string) {
    return this._post(`/monitor/system/sniffer/stop/${mkey}/`, `{}`)
}
setSystemDNS(payload: any) {
    return this._put("cmdb/system/dns", `${payload}`)
}
setSystemSettings(payload: any) {
    return this._put("mdb/system/global", `${payload}`)
}
setSnmpEnable(payload: any) {
    return this._put("cmdb/system.snmp/sysinfo", `${payload}`)
}
setSslVpnSettings(payload: any) {
    return this._put("cmdb/system/dns", `${payload}`)
}
updateZone(zone:string, payload: any) {
    return this._put(`cmdb/system/zone/${zone}`, `${payload}`)
}
updateAddrgrp(group:string, payload: any) {
    return this._put(`cmdb/firewall/addrgrp/${group}`, `${payload}`)
}
setSdWanSettings(payload: any) {
    return this._put("cmdb/system/virtual-wan-link", `${payload}`)
}
reboot() {
    return this._post("monitor/system/os/reboot", JSON.stringify({"event_log_message": "Rebooted by Rest api"}))
}


async _get(url:String) {
    var options = {
        method: 'get',
        url: `https://${
            this.endpoint
        }/api/v2/${url}`,
        headers: {
            'Authorization': `Bearer ${
                this.token
            }`
        }
    };
    return axios(options)
}
async _post(url:string, payload: string) {
    var data = payload;
    var options = {
        method: 'post',
        url: `https://${
            this.endpoint
        }/api/v2/${url}`,
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            'Accept': 'application/json, text/plain, */*',
            'X-Requested-With': 'XMLHttpRequest',
            'Authorization': `Bearer ${
                this.token
            }`
        },
        data: data
    };

    return axios(options)

}
async _put(url:string, payload: string) {
    var data = payload;
    var options = {
        method: 'put',
        url: `https://${
            this.endpoint
        }/api/v2/${url}`,
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            'Accept': 'application/json, text/plain, */*',
            'X-Requested-With': 'XMLHttpRequest',
            'Authorization': `Bearer ${
                this.token
            }`
        },
        data: data
    };

    return axios(options)

}
_download(url:string, filename:string) {
    const file = fs.createWriteStream(filename);
    return new Promise((resolve, reject) => {
        https.get(`https://${
            this.endpoint
        }/api/v2/${url}`, {
            headers: {
                'Authorization': `Bearer ${
                    this.token
                }`
            }
        }, (response) => {
            if (response.statusCode !== 200) {
                reject(new Error(`Something went wrong while downloading https://${
                    this.endpoint
                }/api/v2/${url}`));
            }

            response.pipe(file);
            resolve(true);
        })
    })

}}module.exports = Api
