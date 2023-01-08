// ==UserScript==
// @name         Step 3
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://player.kaltura.com/kWidget/tests/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

window.addEventListener("load", function () {
    (function() {
        'use strict';
        var downloadUrl = document.evaluate('/html/body/div[2]/a[3]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.href;
        fetch(downloadUrl, {
            method: 'GET',
        }).then(function(resp) {
            return resp.blob();
        }).then(function(blob) {
            const newBlob = new Blob([blob], { type: "application/pdf", charset: "UTF-8" })

            // IE doesn't allow using a blob object directly as link href
            // instead it is necessary to use msSaveOrOpenBlob
            if (window.navigator && window.navigator.msSaveOrOpenBlob) {
                window.navigator.msSaveOrOpenBlob(newBlob);
                return;
            }
            const data = window.URL.createObjectURL(newBlob);
            const link = document.createElement('a');
            link.dataType = "json";
            link.href = data;
            link.download = "prova.mp4";
            link.dispatchEvent(new MouseEvent('click'));
            setTimeout(function () {
                // For Firefox it is necessary to delay revoking the ObjectURL
                window.URL.revokeObjectURL(data), 60
            });
        });
    })();
})