//@ts-check
const os = require('os');

/**
 * Detect if patch is needed or not
 * @returns {boolean}
 */
const needsPatch = () => {
    try {
        os.hostname();
        return false;
    } catch (err) {
        return true;
    }
}


module.exports = { needsPatch };