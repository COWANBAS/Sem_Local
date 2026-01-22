// ==UserScript==
// @name           Bloqueador de localização
// @description    Bloqueia o acesso de sites a sua localização automaticamente
// @namespace      CowanLOCALIZAÇÃO 
// @license        GPL-3.0
// @version        1.0
// @author         Cowanbas
// @match          *://*/*
// @run-at         document-start
// ==/UserScript==

(function () {
  'use strict';

  // Sobrescreve a função getCurrentPosition
  navigator.geolocation.getCurrentPosition = function (success, error, options) {
    if (error) {
      error({
        code: 1, // PERMISÃO NEGADA
        message: "localização Negada."
      });
    }
  };

  // Sobrescreve a função watchPosition
  navigator.geolocation.watchPosition = function (success, error, options) {
    if (error) {
      error({
        code: 1, // PERMISÃO NEGADA
        message: "localização Negada."
      });
    }
  };


})();
