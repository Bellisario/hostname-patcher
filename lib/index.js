//@ts-check
const { needsPatch } = require('./utils');
const os = require('os');


if (needsPatch()) {
    /**
     * thanks to @andris9 for his help with this
     * https://github.com/nodemailer/nodemailer/issues/1410#issuecomment-1144628473
     */
    os.hostname = () => 'localhost';
}