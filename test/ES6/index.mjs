// import patch first
import '../../lib/index';
// then os
import os from 'os';

// will output "localhost" if patch, else your real hostname
console.log(os.hostname());