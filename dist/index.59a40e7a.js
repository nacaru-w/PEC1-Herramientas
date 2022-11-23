// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"7ZoMj":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "d7fe96c059a40e7a";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"8lRBv":[function(require,module,exports) {
var _sidebarjs = require("sidebarjs");
var _sidebarjsCss = require("sidebarjs/lib/sidebarjs.css");
// Create sidebarjs instance
const sidebarjs = new (0, _sidebarjs.SidebarElement)({
});
// toggle sidebarjs on click
document.querySelector('class="hamburger_icon"').addEventListener("click", ()=>{
    sidebarjs.toggle();
});

},{"sidebarjs":"jcYvT","sidebarjs/lib/sidebarjs.css":"dszmz"}],"jcYvT":[function(require,module,exports) {
/*
 * SidebarJS
 * Version 9.0.0
 * https://github.com/SidebarJS/sidebarjs#readme
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SidebarElement", ()=>SidebarElement);
parcelHelpers.export(exports, "SidebarService", ()=>SidebarService);
const SIDEBARJS = "sidebarjs";
const SIDEBARJS_FALLBACK_NAME = "";
const SIDEBARJS_CONTENT = "sidebarjs-content";
const SIDEBARJS_TRANSITION_START = "sidebarjs--transition-start";
const SIDEBARJS_TRANSITION_END = "sidebarjs--transition-end";
const IS_VISIBLE = `${SIDEBARJS}--is-visible`;
const IS_MOVING = `${SIDEBARJS}--is-moving`;
const POSITIONS = [
    "left" /* Left */ ,
    "right" /* Right */ 
];
const EVENT_LISTENER_OPTIONS = {
    passive: true
};
const TOUCH_START = "touchstart";
const TOUCH_MOVE = "touchmove";
const TOUCH_END = "touchend";
const ELEMENT_ACTIONS = [
    "toggle",
    "open",
    "close"
];
const DEFAULT_CONFIG = {
    documentMinSwipeX: 10,
    documentSwipeRange: 40,
    responsive: false,
    position: "left" /* Left */ ,
    backdropOpacity: 0.3
};
function isStyleMapSupported() {
    return Boolean(window.CSS && window.CSS.number);
}
function create(element) {
    const el = document.createElement("div");
    el.setAttribute(element, "");
    return el;
}
function elemHasListener(elem, value) {
    return elem && typeof value === "boolean" ? elem.sidebarjsListener = value : !!elem.sidebarjsListener;
}
function shouldDefineMainContent(mainContent) {
    if (mainContent) {
        mainContent.setAttribute(SIDEBARJS_CONTENT, "");
        return mainContent;
    } else return document.querySelector(`[${SIDEBARJS_CONTENT}]`);
}
function forEachActionElement(sidebarName, func) {
    for(let i = 0; i < ELEMENT_ACTIONS.length; i++){
        const action = ELEMENT_ACTIONS[i];
        const elements = document.querySelectorAll(`[${SIDEBARJS}-${action}="${sidebarName}"]`);
        for(let j = 0; j < elements.length; j++)func(elements[j], action);
    }
}
function targetElementIsBackdrop(e) {
    return e.target.hasAttribute(`${SIDEBARJS}-backdrop`);
}
function shouldInvokeFunction(fn) {
    if (fn) fn();
}
class SidebarElement {
    constructor(options = {}){
        this.toggle = ()=>{
            this.isVisible() ? this.close() : this.open();
        };
        this.open = ()=>{
            this.addComponentClass(IS_VISIBLE);
            this.setBackdropOpacity(this.backdropOpacity);
        };
        this.close = ()=>{
            this.removeComponentClass(IS_VISIBLE);
            this.clearStyle(this.backdrop);
        };
        this._onTouchStart = (e)=>{
            this.initialTouch = e.touches[0].pageX;
        };
        this._onTouchMove = (e)=>{
            const swipeDirection = -(this.initialTouch - e.touches[0].clientX);
            const sidebarMovement = this.container.clientWidth + (this.hasLeftPosition() ? swipeDirection : -swipeDirection);
            if (sidebarMovement <= this.container.clientWidth) {
                this.touchMoveSidebar = Math.abs(swipeDirection);
                this.moveSidebar(swipeDirection);
            }
        };
        this._onTouchEnd = ()=>{
            this.removeComponentClass(IS_MOVING);
            this.clearStyle(this.container);
            this.clearStyle(this.backdrop);
            this.touchMoveSidebar > this.container.clientWidth / 3.5 ? this.close() : this.open();
            this.initialTouch = null;
            this.touchMoveSidebar = null;
        };
        this._onSwipeOpenStart = (e)=>{
            if (targetElementIsBackdrop(e)) return;
            const touchPositionX = e.touches[0].clientX;
            const documentTouch = this.hasLeftPosition() ? touchPositionX : document.body.clientWidth - touchPositionX;
            if (documentTouch < this.documentSwipeRange) this._onTouchStart(e);
        };
        this._onSwipeOpenMove = (e)=>{
            if (!targetElementIsBackdrop(e) && this.initialTouch && !this.isVisible()) {
                const documentSwiped = e.touches[0].clientX - this.initialTouch;
                const hasLeftPosition = this.hasLeftPosition();
                const swipeX = hasLeftPosition ? documentSwiped : -documentSwiped;
                const sidebarMovement = this.container.clientWidth - swipeX;
                if (sidebarMovement > 0 && swipeX >= this.documentMinSwipeX) {
                    this.openMovement = hasLeftPosition ? -sidebarMovement : sidebarMovement;
                    this.moveSidebar(this.openMovement);
                }
            }
        };
        this._onSwipeOpenEnd = ()=>{
            if (this.openMovement) {
                this.openMovement = null;
                this._onTouchEnd();
            }
        };
        this._onTransitionStart = ()=>{
            const { open , close  } = this.getTransitionType();
            if (open || close) this.toggleTransitionClass(true);
        };
        this._onTransitionEnd = ()=>{
            const { open , close , isVisible  } = this.getTransitionType();
            if (open || close) this.toggleTransitionClass(false);
            if (open) {
                this._wasVisible = true;
                shouldInvokeFunction(this._emitOnOpen);
            } else if (close) {
                this._wasVisible = false;
                shouldInvokeFunction(this._emitOnClose);
            }
            if (this._emitOnChangeVisibility) this._emitOnChangeVisibility({
                isVisible
            });
        };
        this.nativeGestures = new Map([
            [
                TOUCH_START,
                this._onTouchStart
            ],
            [
                TOUCH_MOVE,
                this._onTouchMove
            ],
            [
                TOUCH_END,
                this._onTouchEnd
            ]
        ]);
        this.nativeOpenGestures = new Map([
            [
                TOUCH_START,
                this._onSwipeOpenStart
            ],
            [
                TOUCH_MOVE,
                this._onSwipeOpenMove
            ],
            [
                TOUCH_END,
                this._onSwipeOpenEnd
            ]
        ]);
        const config = Object.assign(Object.assign({}, DEFAULT_CONFIG), options);
        const hasCustomTransclude = config.container && config.backdrop;
        this.component = config.component || document.querySelector(`[${SIDEBARJS}]`);
        this.container = hasCustomTransclude ? config.container : create(`${SIDEBARJS}-container`);
        this.backdrop = hasCustomTransclude ? config.backdrop : create(`${SIDEBARJS}-backdrop`);
        this.documentMinSwipeX = config.documentMinSwipeX;
        this.documentSwipeRange = config.documentSwipeRange;
        this.nativeSwipe = config.nativeSwipe !== false;
        this.nativeSwipeOpen = config.nativeSwipeOpen !== false;
        this.isStyleMapSupported = isStyleMapSupported();
        this.responsive = Boolean(config.responsive);
        this.mainContent = shouldDefineMainContent(config.mainContent);
        this.backdropOpacity = config.backdropOpacity;
        this.backdropOpacityRatio = 1 / config.backdropOpacity;
        this._emitOnOpen = config.onOpen;
        this._emitOnClose = config.onClose;
        this._emitOnChangeVisibility = config.onChangeVisibility;
        if (!hasCustomTransclude) try {
            this.transcludeContent();
        } catch (e) {
            throw new Error("You must define an element with [sidebarjs] attribute");
        }
        this.setSwipeGestures(true);
        if (this.responsive || this.mainContent) this.setResponsive();
        this.setPosition(config.position);
        this.addAttrsEventsListeners(this.component.getAttribute(SIDEBARJS));
        this.addTransitionListener();
        this.backdrop.addEventListener("click", this.close, EVENT_LISTENER_OPTIONS);
    }
    isVisible() {
        return this.component.classList.contains(IS_VISIBLE);
    }
    destroy() {
        this.removeNativeGestures();
        this.container.removeEventListener("transitionstart", this._onTransitionStart);
        this.container.removeEventListener("transitionend", this._onTransitionEnd);
        this.backdrop.removeEventListener("click", this.close);
        this.removeNativeOpenGestures();
        this.removeAttrsEventsListeners(this.component.getAttribute(SIDEBARJS));
        this.removeComponentClassPosition();
        while(this.container.firstElementChild)this.component.appendChild(this.container.firstElementChild);
        this.component.removeChild(this.container);
        this.component.removeChild(this.backdrop);
        Object.keys(this).forEach((key)=>this[key] = null);
    }
    setPosition(position) {
        this.addComponentClass(IS_MOVING);
        this.position = POSITIONS.indexOf(position) >= 0 ? position : "left" /* Left */ ;
        const resetMainContent = (document.querySelectorAll(`[${SIDEBARJS}]`) || []).length === 1;
        this.removeComponentClassPosition(resetMainContent);
        this.addComponentClass(`${SIDEBARJS}--${this.position}`);
        if (this.responsive && this.mainContent) this.mainContent.classList.add(`${SIDEBARJS_CONTENT}--${this.position}`);
        setTimeout(()=>this.component && this.removeComponentClass(IS_MOVING), 200);
    }
    addAttrsEventsListeners(sidebarName) {
        forEachActionElement(sidebarName, (element, action)=>{
            if (!elemHasListener(element)) {
                element.addEventListener("click", this[action], EVENT_LISTENER_OPTIONS);
                elemHasListener(element, true);
            }
        });
    }
    removeAttrsEventsListeners(sidebarName) {
        forEachActionElement(sidebarName, (element, action)=>{
            if (elemHasListener(element)) {
                element.removeEventListener("click", this[action]);
                elemHasListener(element, false);
            }
        });
    }
    setSwipeGestures(value) {
        if (typeof value !== "boolean") throw new Error(`You provided a ${typeof value} value but setSwipeGestures needs a boolean value.`);
        if (this.nativeSwipe) {
            value ? this.addNativeGestures() : this.removeNativeGestures();
            if (this.nativeSwipeOpen) value ? this.addNativeOpenGestures() : this.removeNativeOpenGestures();
        }
    }
    getTransitionType() {
        const isVisible = this.isVisible();
        const open = isVisible && !this._wasVisible;
        const close = !isVisible && this._wasVisible;
        return {
            open,
            close,
            isVisible
        };
    }
    toggleTransitionClass(isStart) {
        this.toggleComponentClass(SIDEBARJS_TRANSITION_END, !isStart);
        this.toggleComponentClass(SIDEBARJS_TRANSITION_START, isStart);
    }
    addTransitionListener() {
        this._wasVisible = this.isVisible();
        this.container.addEventListener("transitionstart", this._onTransitionStart, EVENT_LISTENER_OPTIONS);
        this.container.addEventListener("transitionend", this._onTransitionEnd, EVENT_LISTENER_OPTIONS);
    }
    removeComponentClassPosition(resetMainContent) {
        for(let i = 0; i < POSITIONS.length; i++){
            this.removeComponentClass(`${SIDEBARJS}--${POSITIONS[i]}`);
            if (resetMainContent && this.mainContent) this.mainContent.classList.remove(`${SIDEBARJS_CONTENT}--${POSITIONS[i]}`);
        }
    }
    hasLeftPosition() {
        return this.position === "left" /* Left */ ;
    }
    hasRightPosition() {
        return this.position === "right" /* Right */ ;
    }
    transcludeContent() {
        while(this.component.firstChild)this.container.appendChild(this.component.firstChild);
        while(this.component.firstChild)this.component.removeChild(this.component.firstChild);
        this.component.appendChild(this.container);
        this.component.appendChild(this.backdrop);
    }
    addNativeGestures() {
        this.nativeGestures.forEach((action, event)=>{
            this.component.addEventListener(event, action, EVENT_LISTENER_OPTIONS);
        });
    }
    removeNativeGestures() {
        this.nativeGestures.forEach((action, event)=>{
            this.component.removeEventListener(event, action);
        });
    }
    addNativeOpenGestures() {
        this.nativeOpenGestures.forEach((action, event)=>{
            document.addEventListener(event, action, EVENT_LISTENER_OPTIONS);
        });
    }
    removeNativeOpenGestures() {
        this.nativeOpenGestures.forEach((action, event)=>{
            document.removeEventListener(event, action);
        });
    }
    moveSidebar(movement) {
        this.addComponentClass(IS_MOVING);
        this.applyStyle(this.container, "transform", `translate(${movement}px, 0)`, true);
        this.updateBackdropOpacity(movement);
    }
    updateBackdropOpacity(movement) {
        const swipeProgress = 1 - Math.abs(movement) / this.container.clientWidth;
        const opacity = swipeProgress / this.backdropOpacityRatio;
        this.setBackdropOpacity(opacity);
    }
    setBackdropOpacity(opacity) {
        this.applyStyle(this.backdrop, "opacity", opacity.toString());
    }
    setResponsive() {
        if (!this.responsive && this.mainContent) throw new Error(`You provide a [${SIDEBARJS_CONTENT}] element without set {responsive: true}`);
        if (this.responsive && !this.mainContent) throw new Error(`You have set {responsive: true} without provide a [${SIDEBARJS_CONTENT}] element`);
        this.addComponentClass("sidebarjs--responsive");
    }
    applyStyle(el, prop, val, vendorify) {
        if (this.isStyleMapSupported) el.attributeStyleMap.set(prop, val);
        else {
            el.style[prop] = val;
            if (vendorify) {
                const vendor = "webkit" + prop.charAt(0).toUpperCase() + prop.slice(1);
                el.style[vendor] = val;
            }
        }
    }
    clearStyle(el) {
        if (this.isStyleMapSupported) el.attributeStyleMap.clear();
        else el.removeAttribute("style");
    }
    addComponentClass(className) {
        this.component.classList.add(className);
    }
    removeComponentClass(className) {
        this.component.classList.remove(className);
    }
    toggleComponentClass(className, force) {
        this.component.classList.toggle(className, force);
    }
}
class SidebarService {
    constructor(){
        this.instances = {};
    }
    fallbackName(sidebarName) {
        return sidebarName || SIDEBARJS_FALLBACK_NAME;
    }
    getInstance(sidebarName) {
        return this.instances[this.fallbackName(sidebarName)];
    }
    create(options) {
        var _a;
        const name = this.fallbackName((_a = options === null || options === void 0 ? void 0 : options.component) === null || _a === void 0 ? void 0 : _a.getAttribute(SIDEBARJS));
        this.instances[name] = new SidebarElement(options);
        return this.instances[name];
    }
    open(sidebarName) {
        var _a;
        (_a = this.getInstance(sidebarName)) === null || _a === void 0 || _a.open();
    }
    close(sidebarName) {
        var _a;
        (_a = this.getInstance(sidebarName)) === null || _a === void 0 || _a.close();
    }
    toggle(sidebarName) {
        var _a;
        (_a = this.getInstance(sidebarName)) === null || _a === void 0 || _a.toggle();
    }
    isVisible(sidebarName) {
        var _a;
        return !!((_a = this.getInstance(sidebarName)) === null || _a === void 0 ? void 0 : _a.isVisible());
    }
    setPosition(position, sidebarName) {
        var _a;
        (_a = this.getInstance(sidebarName)) === null || _a === void 0 || _a.setPosition(position);
    }
    elemHasListener(elem, value) {
        return elemHasListener(elem, value);
    }
    destroy(sidebarName) {
        const name = this.fallbackName(sidebarName);
        if (this.instances[name]) {
            this.instances[name].destroy();
            this.instances[name] = null;
            delete this.instances[name];
        }
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"dszmz":[function() {},{}]},["7ZoMj","8lRBv"], "8lRBv", "parcelRequirecdaa")

//# sourceMappingURL=index.59a40e7a.js.map
