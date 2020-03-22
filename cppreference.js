// ==UserScript==
// @name         Fixup CppReference Language
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Enforces english language on cppreference.com. Auto-translated code documentation just sucks.
// @author       Felix Queißner
// @match        https://*.cppreference.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    if(window.location.host != "en.cppreference.com") {
        window.location.host = "en.cppreference.com";
    }
})();
