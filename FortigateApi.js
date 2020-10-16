const r = require('request-promise');
const rp = require("request")
class Api {
  constructor(token, endpoint, payload, Secure = true ) {
    this.token = token
    this.endpoint = endpoint
    this.Secure = Secure
    this.payload = payload{}
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
  createAdmin(username) {return this._post("cmdb/system/admin", `${username}`)}
  async _get(url, returnjson) {
    if (this.Secure == false) {
      var protocol = ("https://")
    }
    else {
      var protocol = ("http://")
    }
    var options = {
      uri: `${protocol}${this.endpoint}/api/v2/${url}`,
      headers: {
        'Authorization': `Bearer ${this.token}`
      },
      json: true // Automatically parses the JSON string in the response
    };
    var result = await r(options)

    if (returnjson == false) {
      return result
    }
    else {
      return result.results
    }
  }
  async _post(url, username){var request = require('request');
  var options = {
    'method': 'POST',
    'url': `https://${this.endpoint}/api/v2/${url}`,
    'headers': {
      'Content-Type': 'application/json;charset=UTF-8',
      'Accept': 'application/json, text/plain, */*',
      'X-Requested-With': 'XMLHttpRequest',
      'Authorization': 'Bearer wf8jbbxGcnp9G7jf7Nw4s1QpmNq0fb'
    },
    body: `{\"name\":\"${username}\",\"q_origin_key\":\"\",\"wildcard\":\"disable\",\"remote-auth\":\"disable\",\"remote-group\":\"\",\"peer-auth\":\"disable\",\"peer-group\":\"\",\"trusthost1\":\"0.0.0.0/0\",\"trusthost2\":\"0.0.0.0/0\",\"trusthost3\":\"0.0.0.0/0\",\"trusthost4\":\"0.0.0.0/0\",\"trusthost5\":\"0.0.0.0/0\",\"trusthost6\":\"0.0.0.0/0\",\"trusthost7\":\"0.0.0.0/0\",\"trusthost8\":\"0.0.0.0/0\",\"trusthost9\":\"0.0.0.0/0\",\"trusthost10\":\"0.0.0.0/0\",\"ip6-trusthost1\":\"::/0\",\"ip6-trusthost2\":\"::/0\",\"ip6-trusthost3\":\"::/0\",\"ip6-trusthost4\":\"::/0\",\"ip6-trusthost5\":\"::/0\",\"ip6-trusthost6\":\"::/0\",\"ip6-trusthost7\":\"::/0\",\"ip6-trusthost8\":\"::/0\",\"ip6-trusthost9\":\"::/0\",\"ip6-trusthost10\":\"::/0\",\"accprofile\":{\"name\":\"prof_admin\",\"q_origin_key\":\"prof_admin\",\"comments\":\"\",\"secfabgrp\":\"read-write\",\"ftviewgrp\":\"read-write\",\"authgrp\":\"read-write\",\"sysgrp\":\"read-write\",\"netgrp\":\"read-write\",\"loggrp\":\"read-write\",\"fwgrp\":\"read-write\",\"vpngrp\":\"read-write\",\"utmgrp\":\"read-write\",\"wifi\":\"read-write\",\"admintimeout-override\":\"disable\",\"q_ref\":0,\"q_static\":true,\"q_no_rename\":false,\"q_global_entry\":false,\"q_type\":10,\"q_path\":\"system\",\"q_name\":\"accprofile\",\"q_mkey_type\":\"string\",\"q_no_edit\":false},\"allow-remove-admin-session\":\"enable\",\"comments\":\"\",\"vdom\":[{\"name\":\"root\",\"q_origin_key\":\"root\",\"datasource\":\"system.vdom\"}],\"schedule\":\"\",\"accprofile-override\":\"disable\",\"radius-vdom-override\":\"disable\",\"password-expire\":\"0000-00-00 00:00:00\",\"force-password-change\":\"disable\",\"gui-dashboard\":[],\"two-factor\":\"disable\",\"fortitoken\":\"\",\"email-to\":\"\",\"sms-server\":\"fortiguard\",\"sms-custom-server\":\"\",\"sms-phone\":\"\",\"guest-auth\":\"disable\",\"guest-usergroups\":[],\"guest-lang\":\"\",\"login-time\":[],\"gui-global-menu-favorites\":[],\"gui-vdom-menu-favorites\":[],\"gui-new-feature-acknowledge\":[],\"currentGuestLanguage\":\"Default Language (English)\",\"type\":\"local\",\"restrictTrusted\":false,\"tfaVisible\":true,\"password\":\"Welkom01\",\"confirmPassword\":\"Welkom01\"}`
  
  };
  request(options, function (error, response) {
    if (error) throw new Error(error);
    console.log(response.body);
  });
  }
}


module.exports = Api

