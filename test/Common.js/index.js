// require patch first
require('../../lib/index');
// then os
const os = require('os');

// will output "localhost" if patch, else your real hostname
console.log(os.hostname());