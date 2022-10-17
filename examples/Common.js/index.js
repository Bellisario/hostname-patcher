// require patch first
require('../../lib/index');
// then os
const os = require('os');

// will output your real hostname if patch and if not
console.log(os.hostname());
