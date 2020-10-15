const r = require('request-promise');
class Api{
  constructor(token, endpoint){
    this.token = token
    this.endpoint = endpoint
  }
  getPolicy(){return this._hello("cmdb/firewall/policy/")}
  getUser() {return this._hello("cmdb/user/local/")}
  async _hello(url){
    var options = {
      uri: `https://${this.endpoint}/api/v2/${url}`,
      headers: {
          'Authorization': `Bearer ${this.token}`
      },
      json: true // Automatically parses the JSON string in the response
    };
    var result = await r(options)
    return result.results
    
  }
}

module.exports = Api

// module.exports = {
//   getPolicy :  () => hello("cmdb/firewall/policy/"),
//   getUser : () => hello("cmdb/user/local/"),
//   createUser : (payload) => add("cmdb/user/local/", payload)


// }