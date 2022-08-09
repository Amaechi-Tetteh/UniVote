const routes =  (module.exports = require('next-routes')());

routes
  .add('/tickets/new','/tickets/new')
  .add('/tickets/:address','/tickets/show')
  .add('/tickets/create/:address','/tickets/create')
  .add('/tickets/:address/requests', '/tickets/requests/index')
  .add('/tickets/:address/requests/new','/tickets/requests/new');
  

