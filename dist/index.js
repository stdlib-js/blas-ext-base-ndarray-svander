"use strict";var n=function(a,r){return function(){try{return r||a((r={exports:{}}).exports,r),r.exports}catch(e){throw (r=0, e)}};};var q=n(function(h,d){
var o=require('@stdlib/ndarray-base-ndarraylike2scalar/dist'),f=require('@stdlib/ndarray-base-shape/dist'),g=require('@stdlib/ndarray-base-strides/dist'),c=require('@stdlib/ndarray-base-stride/dist'),s=require('@stdlib/ndarray-base-offset/dist'),u=require('@stdlib/ndarray-base-data-buffer/dist'),l=require('@stdlib/blas-ext-base-svander/dist').ndarray;function p(a){var r,e,i,v,t;return t=a[0],e=a[1],r=o(a[2]),i=f(e,!1),v=g(e,!1),l(r,i[0],i[1],u(t),c(t,0),s(t),u(e),v[0],v[1],s(e)),e}d.exports=p
});var x=q();module.exports=x;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
