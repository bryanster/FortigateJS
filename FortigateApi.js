const r = require('request-promise');


function hello(url){
  var options = {
    uri: `https://firewall.nexezo.com/api/v2/${url}`,
    headers: {
        'User-Agent': 'Request-Promise',
        'Authorization': 'Bearer wf8jbbxGcnp9G7jf7Nw4s1QpmNq0fb'
    },
    json: true // Automatically parses the JSON string in the response
  };
  return r(options)
};
function add(url, payload){
  var options = {
    method: 'POST',
    uri: `https://firewall.nexezo.com/api/v2/${url}`,
    headers: {
      'Authorization': 'Bearer wf8jbbxGcnp9G7jf7Nw4s1QpmNq0fb'
  },
    body: payload,
    json: true // Automatically stringifies the body to JSON
};
return r(options)
}

module.exports = {
  getPolicy :  () => hello("cmdb/firewall/policy/"),
  getUser : () => hello("cmdb/user/local/"),
  createUser : (payload) => add("cmdb/user/local/", payload)


}