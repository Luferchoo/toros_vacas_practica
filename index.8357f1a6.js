var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},t={},n=e.parcelRequirec771;null==n&&((n=function(e){if(e in r)return r[e].exports;if(e in t){var n=t[e];delete t[e];var o={id:e,exports:{}};return r[e]=o,n.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,r){t[e]=r},e.parcelRequirec771=n),n.register("5w1FT",(function(e,r){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=void 0;var t,o=(t=n("gsxMd"))&&t.__esModule?t:{default:t};function a(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var i=function(){function e(){!function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this,e)}var r,t,n;return r=e,(t=[{key:"ingresarCodigo",value:function(e){return new o.default(e,"secretista","").mensaje}},{key:"ocultarCodigo",value:function(e){for(var r="",t=0;t<e.length;t++)r+="@";return r}}])&&a(r.prototype,t),n&&a(r,n),Object.defineProperty(r,"prototype",{writable:!1}),e}();e.exports.default=i})),n.register("gsxMd",(function(e,r){function t(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=void 0;var o=function(){function e(r,t,o){!function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this,e),n(this,"mensaje","OK"),n(this,"error",!1),this.switteVerificador(r,o)}var r,o,a;return r=e,(o=[{key:"switteVerificador",value:function(e,r){this.verificador(e.length>6||e.length<4,r+"cantidad de dígitos errónea, por favor ingrese una cantidad válida"),this.verificador(0===e.length,r+"por favor ingresar un número para empezar a jugar"),this.verificador(isNaN(Number(e)),r+"ingrese tipo de caracteres válido"),this.error||(this.mensaje=e)}},{key:"verificador",value:function(e,r){e&&(this.mensaje=r,this.error=!0)}},{key:"getError",value:function(){return this.error}}])&&t(r.prototype,o),a&&t(r,a),Object.defineProperty(r,"prototype",{writable:!1}),e}();e.exports.default=o})),n.register("8IHOE",(function(e,r){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=void 0;var t,o=(t=n("gsxMd"))&&t.__esModule?t:{default:t};function a(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var i=function(){function e(){!function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this,e)}var r,t,n;return r=e,(t=[{key:"ingresarAdivinado",value:function(e){return new o.default(e,"adivinador","Intento no válido, ").mensaje}}])&&a(r.prototype,t),n&&a(r,n),Object.defineProperty(r,"prototype",{writable:!1}),e}();e.exports.default=i}));var o={};Object.defineProperty(o,"__esModule",{value:!0}),o.mostrarVacunos=f,o.seleccionarGanador=d,o.torosVacas=function(e,r,t){var n=d(e,r),o=new a.default(e).ocultarCodigo(e);"Jugador 1 GANA"===n?t-=1:t=-1;var i="CODIGO SECRETO: "+o+" TOROS Y VACAS: "+f(e,r)+" INTENTOS DISPONIBLES: "+t+" GANADOR: "+n;return[t,i]},o.torosVacasVerificador=l;var a=u(n("5w1FT")),i=(u(n("8IHOE")),u(n("gsxMd")));function u(e){return e&&e.__esModule?e:{default:e}}function l(e,r){var t=new i.default(r,"adivinador","");return t.verificador(e.length!=r.length,"Intento no válido, cantidad de dígitos errónea, por favor ingrese una cantidad válida"),t.mensaje}function d(e,r){var t="Jugador 1 GANA";return l(e,r)===e&&(t="Jugador 2 GANA"),t}function f(e,r){for(var t="",n="",o="",a=0;a<e.length;a++)-1!==e.indexOf(r[a])?e.search(r[a])===a?t+="!":n+="*":-1===e.indexOf(r[a]+1)&&-1===e.indexOf(r[a]-1)||(o+="#");return t+n+o}var c=document.querySelector("#codigo-secreto"),s=document.querySelector("#intento"),v=document.querySelector("#juego"),p=document.querySelector("#resultado-div");v.addEventListener("submit",(function(e){e.preventDefault();var r=10,t=String(c.value),n=String(s.value),a=(0,o.torosVacas)(t,n,r);r-=1,p.innerHTML="<p>"+a[1]+"</p>"}));
//# sourceMappingURL=index.8357f1a6.js.map
