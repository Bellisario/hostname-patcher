//@ts-check
const os = require('os');
const execSync = require('child_process').execSync;

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

/**
 * Get the current hostname using CMD command (not the OS built-in module)
 * Returns localhost as fallback if the command fails
 * @returns {string}
 */
const getHostname = () => {
    let result;
    try {
        result = execSync('hostname').toString().trim();
    } catch (e) {
        result = 'localhost';
    }
    return result;
}

module.exports = { needsPatch, getHostname };
