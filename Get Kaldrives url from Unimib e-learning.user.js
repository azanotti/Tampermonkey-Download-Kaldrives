// ==UserScript==
// @name         Get Kaldrives url from Unimib e-learning
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Yee!
// @author       You
// @match        https://elearning.unimib.it/mod/kalvidres/view.php?id=*
// @icon         https://static.zanotti.io/index.html
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var iframe = document.getElementById("contentframe");
	window.open(iframe.src,"_self");
})();