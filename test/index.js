const os = require('os');
const test = require('ava');

// broke os.hostname (throwing an error)
// this makes sure test can be executed on machines where patch is not needed
os.hostname = () => {
    throw new Error('hostname should be patched');
};


test('hostname: fails if not patched', t => {
    t.throws(os.hostname);
});

test('hostname: works if patched', t => {
    // patching os.hostname
    require('../lib');

    try {
        os.hostname();
        t.pass();
    } catch (err) {
        t.fail(err);
    }
});
