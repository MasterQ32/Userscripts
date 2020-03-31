// ==UserScript==
// @name         Fixup MSDN Language
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Enforces english language on docs.microsoft.com. Auto-translated code documentation just sucks.
// @author       Felix Queißner
// @match        https://docs.microsoft.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    if(! window.location.pathname.startsWith("/en-us")) {
        window.location.pathname = "/en-us" + window.location.pathname.substr(6);
    }
})();
