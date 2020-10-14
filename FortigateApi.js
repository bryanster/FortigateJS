const request = require('request');

request({
  url: 'https://firewall.nexezo.com/api/v2/cmdb/firewall/policy/',
  headers: {
     'Authorization': 'Bearer wf8jbbxGcnp9G7jf7Nw4s1QpmNq0fb'
  },
}, function(err, res) {
      if(err) {
        console.error(err);
      } else {
        console.log(res.body);
      }

});