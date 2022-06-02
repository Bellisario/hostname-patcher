# Hostname Patcher
> Patches `os.hostname()` for Windows 7 devices using a not officially Node.js supported version

## Installation
```bash
npm install hostname-patcher
```
## Use cases
For some strange reason, `os.hostname()` is always broken if you're using a version of Node.js not officially supported in Windows 7 (v14.x.x and above), so, this module aims to keep it working.

## Don't want to use it? (Worried about adding this?)
You'll not have any problem using this patch, because it checks if it's needed before doing its work (see [here](https://github.com/Bellisario/hostname-patcher/blob/a5b63802a7d26481cd46846b1c10f327ceb2034f/lib/index.js#L6)).

## How to use
### Common.js
To use with Common.js, just require it without even any variable assignment:
```js
// require patch first
require('hostname-patcher');
// then os
const os = require('os');
// or module using os module
const { moduleUsingOS } = require('example');

// will output "localhost" if patch, else your real hostname
console.log(os.hostname());
```
### ES6
To use as an ES6 module, just import it:
```js
// import patch first
import 'hostname-patcher';
// then os
import os from 'os';
// or module using os module
import { moduleUsingOS } from 'example';

// will output "localhost" if patch, else your real hostname
console.log(os.hostname());
```
> All examples available in the [test folder](https://github.com/Bellisario/hostname-patcher/tree/master/test).

## Tested modules
- [Nodemailer](https://github.com/nodemailer/nodemailer) (Common.js example [here](https://github.com/Bellisario/hostname-patcher/blob/master/test/Common.js/nodemailer.js) and ES6 [here](https://github.com/Bellisario/hostname-patcher/blob/master/test/ES6/nodemailer.mjs))
- __Let us know this patch is useful for other modules__

## For modules builders
Even if single projects can use this patch singlely, would be great if modules themselves start using it, because it's a lot better for users experience and more practical.\
I know that this error occurs because these new Node.js versions are not anymore ufficially supported by Windows 7, but still today is a very usable and light OS for a lot people, so, please, keep supporting it, even if the Node.js community (but not everybody) want anymore.
