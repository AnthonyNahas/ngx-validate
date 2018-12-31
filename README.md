<p align="center">
  <img height="256px" width="256px" style="text-align: center;" src="https://cdn.rawgit.com/AnthonyNahas/ngx-validate/master/demo/src/assets/logo.svg">
</p>

# ngx-validate - Angular Open Source Validation Library via annotations, services and angular form validation

[![npm version](https://badge.fury.io/js/ngx-validate.svg)](https://badge.fury.io/js/ngx-validate),
[![Build Status](https://travis-ci.org/AnthonyNahas/ngx-validate.svg?branch=master)](https://travis-ci.org/AnthonyNahas/ngx-validate)
[![Coverage Status](https://coveralls.io/repos/github/AnthonyNahas/ngx-validate/badge.svg?branch=master)](https://coveralls.io/github/AnthonyNahas/ngx-validate?branch=master)
[![dependency Status](https://david-dm.org/AnthonyNahas/ngx-validate/status.svg)](https://david-dm.org/AnthonyNahas/ngx-validate)
[![devDependency Status](https://david-dm.org/AnthonyNahas/ngx-validate/dev-status.svg?branch=master)](https://david-dm.org/AnthonyNahas/ngx-validate#info=devDependencies)
[![Greenkeeper Badge](https://badges.greenkeeper.io/AnthonyNahas/ngx-validate.svg)](https://greenkeeper.io/)

## Demo

View all the directives in action at https://AnthonyNahas.github.io/ngx-validate

## Dependencies
* [Angular](https://angular.io) (*requires* Angular 2 or higher, tested with 2.0.0)

## Installation
Install above dependencies via *npm*. 

Now install `ngx-validate` via:
```shell
npm install --save ngx-validate
```

---
##### SystemJS
>**Note**:If you are using `SystemJS`, you should adjust your configuration to point to the UMD bundle.
In your systemjs config file, `map` needs to tell the System loader where to look for `ngx-validate`:
```js
map: {
  'ngx-validate': 'node_modules/ngx-validate/bundles/ngx-validate.umd.js',
}
```
---

Once installed you need to import the main module:
```js
import { LibModule } from 'ngx-validate';
```
The only remaining part is to list the imported module in your application module. The exact method will be slightly
different for the root (top-level) module for which you should end up with the code similar to (notice ` LibModule .forRoot()`):
```js
import { LibModule } from 'ngx-validate';

@NgModule({
  declarations: [AppComponent, ...],
  imports: [LibModule.forRoot(), ...],  
  bootstrap: [AppComponent]
})
export class AppModule {
}
```

Other modules in your application can simply import ` LibModule `:

```js
import { LibModule } from 'ngx-validate';

@NgModule({
  declarations: [OtherComponent, ...],
  imports: [LibModule, ...], 
})
export class OtherModule {
}
```

## Usage



## License

Copyright (c) 2018 Anthony Nahas. Licensed under the MIT License (MIT)

