# Hostname Patcher [![License][LicenseIMGURL]][LicenseURL] [![NPM version][NPMIMGURL]][NPMURL] [![Build Status][BuildStatusIMGURL]][BuildStatusURL] [![Opened Issues][IssuesIMGURL]][IssuesURL] [![Monthly Downloads][DownloadsIMGURL]][NPMURL]

[NPMURL]: https://npmjs.org/package/hostname-patcher "npm"
[NPMIMGURL]: https://img.shields.io/npm/v/hostname-patcher.svg?style=flat
[BuildStatusURL]: https://github.com/Bellisario/hostname-patcher/actions/workflows/publish.yml "Publish Status"
[BuildStatusIMGURL]: https://github.com/Bellisario/hostname-patcher/workflows/Publish/badge.svg
[LicenseURL]: https://github.com/Bellisario/hostname-patcher/LICENSE "MIT License"
[LicenseIMGURL]: https://img.shields.io/github/license/Bellisario/hostname-patcher
[IssuesURL]: https://github.com/Bellisario/hostname-patcher/issues "Opened Issues"
[IssuesIMGURL]: https://img.shields.io/github/issues/Bellisario/hostname-patcher
[DownloadsIMGURL]: https://img.shields.io/npm/dm/hostname-patcher "Monthly Downloads"

> Patches `os.hostname()` for Windows 7 devices using a not officially Node.js supported version

## Installation

```bash
npm install hostname-patcher
```

## Use cases

For some strange reason, `os.hostname()` is always broken if you're using a version of Node.js not officially supported in Windows 7 (v14.x.x and above), so, this module aims to keep it working.

> __News:__ Now also patched devices will have the real hostname, instead of the default "localhost".

## Don't want to use it? (Worried about adding this?)

You'll not have any problem using this patch, because it checks if it's needed before doing its work (see [here](https://github.com/Bellisario/hostname-patcher/blob/39645b3ba7a99aca39f60f59e7f51e2124522994/lib/index.js#L6)).

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

// will output your real hostname if patch and if not
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

// will output your real hostname if patch and if not
console.log(os.hostname());
```

> All examples available in the [examples folder](https://github.com/Bellisario/hostname-patcher/tree/master/examples).

## Tested modules

- [Nodemailer](https://github.com/nodemailer/nodemailer) (Common.js example [here](https://github.com/Bellisario/hostname-patcher/blob/master/examples/Common.js/nodemailer.js) and ES6 [here](https://github.com/Bellisario/hostname-patcher/blob/master/examples/ES6/nodemailer.mjs))

- __Let us know this patch is useful for other modules__

## For modules builders

Even if single projects can use this patch individually, would be great if modules themselves start using it, because it's a lot better for users experience and more practical.\
I know that this error occurs because these new Node.js versions are not anymore officially supported by Windows 7, but still today is a very usable and light OS for a lot people, so, please, keep supporting it, even if the Node.js community (but not everybody) want anymore.
