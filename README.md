[js-splitting](http://aureooms.github.io/js-splitting)
==

Splitting code bricks for JavaScript. Parent is [aureooms/js-algo](http://github.com/aureooms/js-algo).

```js
let pivot = splitting.hoare( predicate , array , left , right ) ;

for ( let k of itertools.range(  left , pivot , 1 ) ) predicate( array[k] ) ; // 0
for ( let k of itertools.range( pivot , right , 1 ) ) predicate( array[k] ) ; // 1
```

[![NPM license](https://img.shields.io/npm/l/@aureooms/js-splitting.svg?style=flat)](https://raw.githubusercontent.com/aureooms/js-splitting/master/LICENSE)
[![NPM version](https://img.shields.io/npm/v/@aureooms/js-splitting.svg?style=flat)](https://www.npmjs.org/package/@aureooms/js-splitting)
[![Bower version](https://img.shields.io/bower/v/@aureooms/js-splitting.svg?style=flat)](http://bower.io/search/?q=@aureooms/js-splitting)
[![Build Status](https://img.shields.io/travis/aureooms/js-splitting.svg?style=flat)](https://travis-ci.org/aureooms/js-splitting)
[![Coverage Status](https://img.shields.io/coveralls/aureooms/js-splitting.svg?style=flat)](https://coveralls.io/r/aureooms/js-splitting)
[![Dependencies Status](https://img.shields.io/david/aureooms/js-splitting.svg?style=flat)](https://david-dm.org/aureooms/js-splitting#info=dependencies)
[![devDependencies Status](https://img.shields.io/david/dev/aureooms/js-splitting.svg?style=flat)](https://david-dm.org/aureooms/js-splitting#info=devDependencies)
[![Code Climate](https://img.shields.io/codeclimate/github/aureooms/js-splitting.svg?style=flat)](https://codeclimate.com/github/aureooms/js-splitting)
[![NPM downloads per month](https://img.shields.io/npm/dm/@aureooms/js-splitting.svg?style=flat)](https://www.npmjs.org/package/@aureooms/js-splitting)
[![GitHub issues](https://img.shields.io/github/issues/aureooms/js-splitting.svg?style=flat)](https://github.com/aureooms/js-splitting/issues)
[![Inline docs](http://inch-ci.org/github/aureooms/js-splitting.svg?branch=master&style=shields)](http://inch-ci.org/github/aureooms/js-splitting)


Can be managed through [jspm](https://github.com/jspm/jspm-cli),
[duo](https://github.com/duojs/duo),
[component](https://github.com/componentjs/component),
[bower](https://github.com/bower/bower),
[ender](https://github.com/ender-js/Ender),
[jam](https://github.com/caolan/jam),
[spm](https://github.com/spmjs/spm),
and [npm](https://github.com/npm/npm).

## Install

### jspm
```terminal
jspm install github:aureooms/js-splitting
# or
jspm install npm:@aureooms/js-splitting
```
### duo
No install step needed for duo!

### component
```terminal
component install aureooms/js-splitting
```

### bower
```terminal
bower install @aureooms/js-splitting
```

### ender
```terminal
ender add @aureooms/js-splitting
```

### jam
```terminal
jam install @aureooms/js-splitting
```

### spm
```terminal
spm install @aureooms/js-splitting --save
```

### npm
```terminal
npm install @aureooms/js-splitting --save
```

## Require
### jspm
```js
let splitting = require( "github:aureooms/js-splitting" ) ;
// or
import splitting from '@aureooms/js-splitting' ;
```
### duo
```js
let splitting = require( "aureooms/js-splitting" ) ;
```

### component, ender, spm, npm
```js
let splitting = require( "@aureooms/js-splitting" ) ;
```

### bower
The script tag exposes the global variable `splitting`.
```html
<script src="bower_components/@aureooms/js-splitting/js/dist/splitting.min.js"></script>
```
Alternatively, you can use any tool mentioned [here](http://bower.io/docs/tools/).

### jam
```js
require( [ "@aureooms/js-splitting" ] , function ( splitting ) { ... } ) ;
```
