const npmPublish = require('@jsdevtools/npm-publish');

// get NPM token from environment
const token = process.env.NPM_TOKEN;

// error if no token is provided
if (!token) {
    console.error('NPM_TOKEN environment variable is not set');
    process.exit(1);
}
// publish the package to NPM
npmPublish({
    package: './package.json',
    token
});
