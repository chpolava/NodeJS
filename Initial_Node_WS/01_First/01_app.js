console.log('My very own Node appln');
console.log("My very own Node appln");

// This module and it's properties
console.log(module);

// load a custom module
// Best Practise is to always use const for require, 
// so that we accidentally don't override it
const _exportedmodule = require('./01_exportmodule');

// Using properties of another module
console.log(_exportedmodule.endPoint);
console.log(_exportedmodule.funcname('Hello world!!!'));

// When only one property is exported,
// Uncomment below line after uncommenting corresponding line in 01_exportmodule.js
//console.log(_exportedmodule('Hello world!!!'));