# Svelte Internet Connection

[![npm version](https://badge.fury.io/js/svelte-internet-connection.svg)](https://www.npmjs.com/package/svelte-internet-connection) &bull; [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/andrelmlins/svelte-internet-connection/blob/master/LICENSE) &bull; [![Build Status](https://travis-ci.com/andrelmlins/svelte-internet-connection.svg?branch=master)](https://travis-ci.com/andrelmlins/svelte-internet-connection) &bull; [![Netlify Status](https://api.netlify.com/api/v1/badges/364c1465-8483-410d-9ffd-db4a6b09134e/deploy-status)](https://app.netlify.com/sites/svelte-internet-connection/deploys)

Internet connection detector to Svelte

## Installation

```
npm i svelte-internet-connection
// OR
yarn add svelte-internet-connection
```

<em>Note: to use this library in sapper, install as devDependency. See the [link](https://github.com/sveltejs/sapper-template#using-external-components).</em>

## Demo [Link](https://svelte-internet-connection.netlify.com/)

Local demo:

```
git clone https://github.com/andrelmlins/svelte-internet-connection.git
cd svelte-internet-connection
npm install && npm run dev
```

## Examples

An example of how to use the library:

```js
<script>
  import InternetConnection from "svelte-internet-connection";
</script>

<InternetConnection let:status>
  Status: {status}
</InternetConnection>
```

## Events

| Prop   | Type | Description                 |
| ------ | ---- | --------------------------- |
| change | func | Call with change connection |

## Slot Properties

| Prop    | Type   | Description                     |
| ------- | ------ | ------------------------------- |
| status  | string | Connection status               |
| online  | bool   | Tells if there is a connection  |
| offline | bool   | Tells if there is no connection |

## NPM Statistics

Download stats for this NPM package

[![NPM](https://nodei.co/npm/svelte-internet-connection.png)](https://nodei.co/npm/svelte-internet-connection/)

## License

Svelte Internet Connection is open source software [licensed as MIT](https://github.com/andrelmlins/svelte-internet-connection/blob/master/LICENSE).
