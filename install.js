process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
var axios = require('axios');
var data = '{"name":"guest","vdom":{"q_origin_key":"root","datasource":"availableVdoms"},"ip":"192.168.123.23/255.255.255.0","interface":{"name":"lan","type":"hard-switch","is_used":true,"is_used_by_vlan":true,"is_hardware_switch":true,"device_id_enabled":true,"valid_in_policy":true,"dns_server_enabled":true,"fabric_heartbeat":true,"is_virtual_wan_link_capable":true,"supports_vlan":true,"supports_pppoe":true,"supports_secondary_ip":true,"supports_dhcp_client":true,"supports_non_manual_addressing":true,"is_ipsecable":true,"is_routable":true,"supports_fortilink":true,"supports_ieee802_1x":true,"supports_stp":true,"supports_dhcp":true,"is_explicit_proxyable":true,"supports_device_id":true,"supports_fortitelemetry":true,"real_interface_name":"lan","vdom":"root","is_system_interface":true,"status":"up","in_bandwidth_limit":0,"out_bandwidth_limit":0,"description":"this is the lan","dhcp4_client_count":2,"dhcp6_client_count":0,"role":"lan","ipv4_addresses":[{"ip":"10.255.255.254","netmask":"255.255.255.0","cidr_netmask":24}],"mac_address":"90:6c:ac:3a:af:49","members":["lan1","lan2","lan3","lan4","lan5"],"link":"up","icon":"ftnt-switch-up","q_origin_key":"lan","interface-name":"lan","datasource":"system.interface","q_path":"system","q_name":"interface","label":"lan","sortValue":0},"vlanid":301,"security-exempt-list":null,"device-identification":"enable","lldp-transmission":"enable","role":"lan","fortilink-split-interface":"disable"}';

var config = {
  method: 'post',
  url: 'https://192.168.2.240/api/v2/cmdb/system/interface',
  headers: { 
    'Content-Type': 'application/json;charset=UTF-8', 
    'Accept': 'application/json, text/plain', 
    'X-Requested-With': 'XMLHttpRequest', 
    'Authorization': 'Bearer wf8jbbxGcnp9G7jf7Nw4s1QpmNq0fb'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
