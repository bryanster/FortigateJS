var cron = require('node-cron');
var fortigateapi = require("./FortigateApi")
var yeet = new fortigateapi("wf8jbbxGcnp9G7jf7Nw4s1QpmNq0fb", "firewall.nexezo.com")

cron.schedule('*/5 * * * *', () => {
    yeet.reboot();
  });
// cron tab like time entry 
// above is every 5 minutes