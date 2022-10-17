const os = require('os');
const test = require('ava')

// broke os.hostname (throwing an error)
// this makes sure test can be executed on machines where patch is not needed
os.hostname = () => {
    throw new Error('hostname should be patched');
};

// patching os.hostname
require('../lib')

test('hostname should be patched', t => {
    // pass if no error (successfully patched)
    os.hostname();
    t.pass();
})
