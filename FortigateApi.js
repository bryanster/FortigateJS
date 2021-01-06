var axios = require('axios');
const https = require("https");
const fs = require("fs");

class Api {
  constructor(token, endpoint,Secure = true ) {
    this.token = token
    this.endpoint = endpoint
    this.Secure = Secure
  }
  getPolicy() { return this._get("cmdb/firewall/policy/") }
  getUser() { return this._get("cmdb/user/local/") }
  getAdmin() { return this._get("cmdb/system/admin/") }
  getVdom() { return this._get("cmdb/system/vdom/") }
  getStaticRoute() { return this._get("cmdb/router/static/") }
  getService() { return this._get("cmdb/firewall.service/custom/") }
  getServiceGroup() { return this._get("cmdb/firewall.service/group/") }
  getShaper() { return this._get("cmdb/firewall.shaper/traffic-shaper/") }
  getVip() { return this._get("cmdb/firewall/vip/") }
  getIpsecP1() { return this._get("cmdb/vpn.ipsec/phase1-interface/") }
  getIpsecP2() { return this._get("cmdb/vpn.ipsec/phase2-interface/") }
  getBackup(file) { return this._download("monitor/system/config/backup?scope=global", file) }
  getInterfaces() { return this._get("monitor/system/available-interfaces") }
  getDeviceState() { return this._get("monitor/log/device/state") }
  getDeviceGlobal() { return this._get("cmdb/system/global") }
  getAvProfile() { return this._get("cmdb/antivirus/profile") }
  getSslVpnSettings() { return this._get("cmdb/vpn.ssl/settings") }
  getSystemStatus() { return this._get("monitor/system/status", false) }
  getRouteTable() { return this._get("monitor/router/ipv4") }
  getWebAppFirewall() { return this._get("/cmdb/waf/profile") }
  getDnsFilter() { return this._get("cmdb/dnsfilter/profile") }
  getWebFilter() { return this._get("cmdb/webfilter/profile") }
  getEmailFilter() { return this._get("cmdb/emailfilter/profile") }
  getLocalInPolicy() { return this._get("monitor/firewall/local-in/") }
  getFirewallDns() {return this._get("cmdb/system/dns?datasource=1&with_meta=1")}
  getSdwanInterfaces() {return this._get("/monitor/virtual-wan/members")}
  getIntrusionPrevention() {return this._get("cmdb/ips/sensor")}
  getApplicationControl() {return this._get("cmdb/application/list")}
  getSslInspection()  {return this._get("cmdb/firewall/ssl-ssh-profile")}
  getSniffer(){return this._get("cmdb/firewall/sniffer")}
  getCapture(mkey, filename){return this._download(`monitor/system/sniffer/download/${mkey}`, filename)}
  createAdmin(payload) {return this._post("cmdb/system/admin", `${payload}`)}
  createAVProfile(payload) {return this._post("cmdb/antivirus/profile", `${payload}`)}
  createAppProfile(payload) {return this._post("cmdb/application/list", `${payload}`)}
  createWFProfile(payload) {return this._post("cmdb/webfilter/profile", `${payload}`)}
  createDFProfile(payload) {return this._post("cmdb/dnsfilter/profile", `${payload}`)}
  createPolicy(payload) {return this._post("cmdb/firewall/policy", `${payload}`)}
  createZone(payload) {return this._post("/cmdb/system/zone/", `${payload}`)}
  createVlan(payload) {return this._post("cmdb/system/interface", `${payload}`)}
  createDHCPserver(payload) {return this._post("cmdb/system.dhcp/server", `${payload}`)}
  createSniffer(payload) {return this._post("cmdb/firewall/sniffer", `${payload}`)}
  createSslVpnPortal(payload) {return this._post("cmdb/vpn.ssl.web/portal", `${payload}`)}
  createAddr(payload) {return this._post("cmdb/firewall/address", `${payload}`)}
  createAddrgrp(payload) {return this._post("cmdb/firewall/addrgrp", `${payload}`)}
  createSdWanRoute(payload) {return this._post("cmdb/router/static", `${payload}`)}
  createStaticRoute(payload) {return this._post("cmdb/router/static", `${payload}`)}
  createSnmpComunityV1(payload) {return this._post("/cmdb/system.snmp/community", `${payload}`)}
  startSniffer(mkey) {return this._post(`/monitor/system/sniffer/start/${mkey}/`, `{}`)}
  pauseSniffer(mkey) {return this._post(`/monitor/system/sniffer/stop/${mkey}/`, `{}`)}
  setSystemDNS(payload){return this._put("cmdb/system/dns", `${payload}`)}
  setSystemSettings(payload){return this._put("mdb/system/global", `${payload}`)}
  setSnmpEnable(payload){return this._put("cmdb/system.snmp/sysinfo", `${payload}`)}
  setSslVpnSettings(payload){return this._put("cmdb/system/dns", `${payload}`)}
  updateAddrgrp(group, payload){return this._put(`cmdb/firewall/addrgrp/${group}`, `${payload}`)}
  setSdWanSettings(payload){return this._put("cmdb/system/virtual-wan-link", `${payload}`)}
  reboot() {return this._post("monitor/system/os/reboot", JSON.stringify({"event_log_message":"Rebooted by Rest api"}))}

  RemoveDHCPserver(mkey){return this._put(`${mkey}`)}
  async _get(url) {
    var options = {
      method: 'get',
      url: `https://${this.endpoint}/api/v2/${url}`,
      headers: {
        'Authorization': `Bearer ${this.token}`
      },
    };
    return axios(options)
  }
  async _post(url, payload){
    var data = payload;
    var options = {
      method: 'post',
      url: `https://${this.endpoint}/api/v2/${url}`,
      headers: { 
        'Content-Type': 'application/json;charset=UTF-8', 
        'Accept': 'application/json, text/plain, */*', 
        'X-Requested-With': 'XMLHttpRequest',  
        'Authorization': `Bearer ${this.token}`
      },
      data : data
    };

    return axios(options)
    
  }
  async _put(url, payload){
    var data = payload;
    var options = {
      method: 'put',
      url: `https://${this.endpoint}/api/v2/${url}`,
      headers: { 
        'Content-Type': 'application/json;charset=UTF-8', 
        'Accept': 'application/json, text/plain, */*', 
        'X-Requested-With': 'XMLHttpRequest',  
        'Authorization': `Bearer ${this.token}`
      },
      data : data
    };

    return axios(options)
    
  }
  async _delete(url){
    var options = {
      method: 'delete',
      url: `https://${this.endpoint}/api/v2/${url}`,
      headers: { 
        'Content-Type': 'application/json;charset=UTF-8', 
        'Accept': 'application/json, text/plain, */*', 
        'X-Requested-With': 'XMLHttpRequest',  
        'Authorization': `Bearer ${this.token}`
      },
      data : data
    };

    return axios(options)
    
  }
  _download(url, filename) {
    const file = fs.createWriteStream(filename);
    return new Promise((resolve, reject) => {
      https.get(`https://${this.endpoint}/api/v2/${url}`, { headers: { 'Authorization': `Bearer ${this.token}` } }, function (response) {
        if (response.statusCode !== 200) {
          reject(new Error(`Something went wrong while downloading https://${this.endpoint}/api/v2/${url}`));
        }

        response.pipe(file);
        resolve(true);
      })
    })

  }
}


module.exports = Api

