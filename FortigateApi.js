const r = require('request-promise');
class Api{
  constructor(token, endpoint){
    this.token = token
    this.endpoint = endpoint
  }
  getPolicy(){return this._hello("cmdb/firewall/policy/")}
  getUser() {return this._hello("cmdb/user/local/")}
  getAdmin(){return this._hello("cmdb/system/admin/")}
  getVdom(){return this._hello("cmdb/system/vdom/")}
  getSRoute(){return this._hello("cmdb/router/static/")}
  getService(){return this._hello("cmdb/firewall.service/custom/")}
  getServiceGroup(){return this._hello("cmdb/firewall.service/group/")}
  getShaper(){return this._hello("cmdb/firewall.shaper/traffic-shaper/")}
  getVip(){return this._hello("cmdb/firewall/vip/")}
  getIpsecP1(){return this._hello("cmdb/vpn.ipsec/phase1-interface/")}
  getIpsecP2(){return this._hello("cmdb/vpn.ipsec/phase2-interface/")}
  getBackup(){return this._hello("monitor/system/config/backup?scope=global", false)}
  getInterfaces(){return this._hello("monitor/system/available-interfaces")}
  getDeviceState(){return this._hello("monitor/log/device/state")}
  getDeviceGlobal(){return this._hello("cmdb/system/global")}
  getAvProfile(){return this._hello("cmdb/antivirus/profile")}
  getSslVpnSettings(){return this._hello("cmdb/vpn.ssl/settings")}
  getSystemStatus(){return this._hello("/monitor/system/status", false)}
   async _hello(url, returnjson){
    var options = {
      uri: `https://${this.endpoint}/api/v2/${url}`,
      headers: {
          'Authorization': `Bearer ${this.token}`
      },
      json: true // Automatically parses the JSON string in the response
    };
    var result = await r(options)

    if (returnjson == false){
      return result
    }
    else{
      return result.results 
    }
  }
}

module.exports = Api

// module.exports = {
//   getPolicy :  () => hello("cmdb/firewall/policy/"),
//   getUser : () => hello("cmdb/user/local/"),
//   createUser : (payload) => add("cmdb/user/local/", payload)


// }