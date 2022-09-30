import axios from 'axios';
import fs from 'fs';
import https from 'https';
/**
 *  api librabry for the fortigate api
 * it is a work in progress
 * 
 */

class Api {
  conn: apinterface;
  constructor(token: string, endpoint: string) {
    this.conn = { endpoint: endpoint, token: token };
  }

  getUser(): Promise<any> {
    /**
     * this function list all the users on the fortigate
     * @returns the return is a object containing the users in a list this is under the key "results"
     * 
     * @example
     * api.getUser().then((data) => {
     *  console.log(data.results);
     * });
     * 
     */
    return _get('cmdb/user/local/', this.conn);
  }
  getAdmin(): Promise<any> {
    return _get('cmdb/system/admin/', this.conn);
  }
  getVdom(): Promise<any> {
    return _get('cmdb/system/vdom/', this.conn);
  }
  getStaticRoute(): Promise<any> {
    return _get('cmdb/router/static/', this.conn);
  }
  getService(): Promise<any> {
    return _get('cmdb/firewall.service/custom/', this.conn);
  }
  getServiceGroup(): Promise<any> {
    return _get('cmdb/firewall.service/group/', this.conn);
  }
  getShaper(): Promise<any> {
    return _get('cmdb/firewall.shaper/traffic-shaper/', this.conn);
  }
  getVip(): Promise<any> {
    return _get('cmdb/firewall/vip/', this.conn);
  }
  getIpsecP1(): Promise<any> {
    return _get('cmdb/vpn.ipsec/phase1-interface/', this.conn);
  }
  getIpsecP2(): Promise<any> {
    return _get('cmdb/vpn.ipsec/phase2-interface/', this.conn);
  }
  getBackup(filepath: string) {
    return _download(
      'monitor/system/config/backup?scope=global',
      filepath,
      this.conn
    );
  }
  getInterfaces(): Promise<any> {
    return _get('monitor/system/available-interfaces', this.conn);
  }
  getDeviceState(): Promise<any> {
    return _get('monitor/log/device/state', this.conn);
  }
  getDeviceGlobal(): Promise<any> {
    return _get('cmdb/system/global', this.conn);
  }
  getAvProfile(): Promise<any> {
    return _get('cmdb/antivirus/profile', this.conn);
  }
  getSslVpnSettings(): Promise<any> {
    return _get('cmdb/vpn.ssl/settings', this.conn);
  }
  getSystemStatus(): Promise<any> {
    return _get('monitor/system/status', this.conn);
  }
  getRouteTable(): Promise<any> {
    return _get('monitor/router/ipv4', this.conn);
  }
  getWebAppFirewall(): Promise<any> {
    return _get('/cmdb/waf/profile', this.conn);
  }
  getDnsFilter(): Promise<any> {
    return _get('cmdb/dnsfilter/profile', this.conn);
  }
  getWebFilter(): Promise<any> {
    return _get('cmdb/webfilter/profile', this.conn);
  }
  getEmailFilter(): Promise<any> {
    return _get('cmdb/emailfilter/profile', this.conn);
  }
  getLocalInPolicy(): Promise<any> {
    return _get('monitor/firewall/local-in/', this.conn);
  }
  getFirewallDns(): Promise<any> {
    return _get('cmdb/system/dns?datasource=1&with_meta=1', this.conn);
  }
  getSdwanInterfaces(): Promise<any> {
    return _get('/monitor/virtual-wan/members', this.conn);
  }
  getIntrusionPrevention(): Promise<any> {
    return _get('cmdb/ips/sensor', this.conn);
  }
  getApplicationControl(): Promise<any> {
    return _get('cmdb/application/list', this.conn);
  }
  getSslInspection(): Promise<any> {
    return _get('cmdb/firewall/ssl-ssh-profile', this.conn);
  }
  getSniffer(): Promise<any> {
    return _get('cmdb/firewall/sniffer', this.conn);
  }
  getCapture(mkey: string, filename: string): Promise<any> {
    return _download(
      `monitor/system/sniffer/download/${mkey}`,
      filename,
      this.conn
    );
  }
  // createDomainAdderess(adddomain: add_domain_address): Promise<any> {
  //   return _post(
  //     'cmdb/firewall/address',
  //     this.conn
  //   );
  // }
}

// createAdmin(payload : any) {
//     return this._post("cmdb/system/admin", `${payload}`)
// }
// createAVProfile(payload : any) {
//     return this._post("cmdb/antivirus/profile", `${payload}`)
// }
// createAppProfile(payload : any) {
//     return this._post("cmdb/application/list", `${payload}`)
// }
// createWFProfile(payload : any) {
//     return this._post("cmdb/webfilter/profile", `${payload}`)
// }
// createDFProfile(payload : any) {
//     return this._post("cmdb/dnsfilter/profile", `${payload}`)
// }
// createPolicy(payload : any) {
//     return this._post("cmdb/firewall/policy", `${payload}`)
// }
// createZone(payload : any) {
//     return this._post("/cmdb/system/zone/", `${payload}`)
// }
// createVlan(payload : any) {
//     return this._post("cmdb/system/interface", `${payload}`)
// }
// createDHCPserver(payload : any) {
//     return this._post("cmdb/system.dhcp/server", `${payload}`)
// }
// createSniffer(payload : any) {
//     return this._post("cmdb/firewall/sniffer", `${payload}`)
// }
// createSslVpnPortal(payload : any) {
//     return this._post("cmdb/vpn.ssl.web/portal", `${payload}`)
// }
// createAddr(payload : add_domain_address) {
//     return this._post("cmdb/firewall/address", `${payload}`)
// }
// createAddrgrp(payload : any) {
//     return this._post("cmdb/firewall/addrgrp", `${payload}`)
// }
// createSdWanRoute(payload : any) {
//     return this._post("cmdb/router/static", `${payload}`)
// }
// createStaticRoute(payload : any) {
//     return this._post("cmdb/router/static", `${payload}`)
// }
// createIpsecP1(payload : any) {
//     return this._post("cmdb/vpn.ipsec/phase1-interface", `${payload}`)
// }
// createIpsecP2(payload : any) {
//     return this._post("cmdb/vpn.ipsec/phase2-interface", `${payload}`)
// }
// createSnmpComunityV1(payload : any) {
//     return this._post("cmdb/system.snmp/community", `${payload}`)
// }
// startSniffer(mkey) {
//     return this._post(`/monitor/system/sniffer/start/${mkey}/`, `{}`)
// }
// pauseSniffer(mkey) {
//     return this._post(`/monitor/system/sniffer/stop/${mkey}/`, `{}`)
// }
// setSystemDNS(payload) {
//     return this._put("cmdb/system/dns", `${payload}`)
// }
// setSystemSettings(payload) {
//     return this._put("mdb/system/global", `${payload}`)
// }
// setSnmpEnable(payload) {
//     return this._put("cmdb/system.snmp/sysinfo", `${payload}`)
// }
// setSslVpnSettings(payload) {
//     return this._put("cmdb/system/dns", `${payload}`)
// }
// updateZone(zone, payload) {
//     return this._put(`cmdb/system/zone/${zone}`, `${payload}`)
// }
// updateAddrgrp(group, payload) {
//     return this._put(`cmdb/firewall/addrgrp/${group}`, `${payload}`)
// }
// setSdWanSettings(payload) {
//     return this._put("cmdb/system/virtual-wan-link", `${payload}`)
// }
// reboot() {
//     return this._post("monitor/system/os/reboot", JSON.stringify({"event_log_message": "Rebooted by Rest conn"}))
// }

async function _get(url: string, conn: apinterface) {
  try {
    const { data, status } = await axios.get(
      `https://${conn.endpoint}/conn/v2/${url}`,
      {
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${conn.token}`,
        },
      }
    );

    console.log(JSON.stringify(data, null, 4));

    console.log('response status is: ', status);

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log('error message: ', error.message);
      return error.message;
    } else {
      console.log('unexpected error: ', error);
      return 'An unexpected error occurred';
    }
  }
}
async function _download(url: string, filename: string, conn: apinterface) {
  const file = fs.createWriteStream(filename);
  return new Promise((resolve, reject) => {
    https.get(
      `https://${conn.endpoint}/api/v2/${url}`,
      { headers: { Authorization: `Bearer ${conn.token}` } },
      function(response) {
        if (response.statusCode !== 200) {
          reject(
            new Error(
              `Something went wrong while downloading https://${conn.endpoint}/api/v2/${url}`
            )
          );
        }

        response.pipe(file);
        resolve(true);
      }
    );
  });
}
module.exports = Api;
// function _post(arg0: string, arg1: { name: any; type: string; fqdn: any; associated_interface: any; }, conn: apinterface): Promise<any> {
//   throw new Error('Function not implemented.');
// }

