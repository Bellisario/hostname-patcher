// import patch first
import '../../lib/index';
// then os
import os from 'os';

// will output your real hostname if patch and if not
console.log(os.hostname());