// ==UserScript==
// @name         Link Hygiene
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Removes unnecessary tracking fuckup from your links
// @author       xq
// @match        http://*/*
// @match        https://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var modules = { };

    modules["www.amazon.de"] = function(params) {
        params.delete("ref");
        params.delete("__mk_de_DE");
    };

    modules["www.youtube.com"] = function(params) {
        params.delete("feature");
    };

    modules["www.imdb.com"] = function(params) {
        params.delete("ref");
        params.delete("ref_");
    };

    modules["www.humblebundle.com"] = function(params) {
        params.delete("hmb_source");
        params.delete("hmb_medium");
        params.delete("hmb_campaign");
    };

    modules["store.steampowered.com"] = function(params) {
        params.delete("snr");
    };

    var module = modules[window.location.hostname];
    if(module !== undefined)
    {
        var params = new URLSearchParams(window.location.search);
        module(params);

        var newloc = params.toString();
        if(newloc != "") {
                newloc = "?" + newloc;
        }

        if(newloc != window.location.search) {
            console.log("change", window.location.search, " to ", newloc);
            window.location.search = newloc;
        }
    }
})();
