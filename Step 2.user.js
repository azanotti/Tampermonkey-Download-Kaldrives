// ==UserScript==
// @name         Step 2
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://kaf.elearning.unimib.it/browseandembed/index/media-redirect/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
	var url = "http://player.kaltura.com/kWidget/tests/kWidget.getSources.html#__2351962," + kMainPlayerEmbedObject.entry_id;
	window.open(url,"_self");
})();