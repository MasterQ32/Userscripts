// ==UserScript==
// @name         Expand-All-Button for 4chan
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Adds a small [Expand All] to upper the navigation list
// @author       Felix Queißner
// @match        http*://boards.4chan.org/*/thread/*
// @match        http*://boards.4channel.org/*/thread/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    console.log("hi");
    
    var c = document.createElement("span");
    c.innerHTML = '[<a href="#">Expand All</a>]';
    c.children[0].onclick = function() {
        var a = document.getElementsByClassName("file");
        for(var i = 0; i < a.length; i++) {
            ImageExpansion.toggle(a[i].children[1].children[0]);
        }
    };

    var e = document.getElementsByClassName("navLinks desktop")[0];
    e.appendChild(c);
})();
