var axios = require('axios');
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
  getBackup() { return this._get("monitor/system/config/backup?scope=global", false) }
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
  createAdmin(payload) {return this._post("cmdb/system/admin", `${payload}`)}
  createAVProfile(payload) {return this._post("cmdb/antivirus/profile", `${payload}`)}
  createAppProfile(payload) {return this._post("cmdb/application/list", `${payload}`)}
  createWFProfile(payload) {return this._post("cmdb/webfilter/profile", `${payload}`)}
  createDFProfile(payload) {return this._post("cmdb/dnsfilter/profile", `${payload}`)}
  createPolicy(payload) {return this._post("cmdb/firewall/policy", `${payload}`)}
  createZone(payload) {return this._post("/cmdb/system/zone/", `${payload}`)}
  createVlan(payload) {return this._post("cmdb/system/interface", `${payload}`)}
  createSniffer(payload) {return this._post("cmdb/firewall/sniffer", `${payload}`)}
  setSystemDNS(payload){return this._put("cmdb/system/dns", `${payload}`)}
  reboot() {return this._post("monitor/system/os/reboot", JSON.stringify({"event_log_message":"Rebooted by Rest api"}))}
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
}


module.exports = Api

