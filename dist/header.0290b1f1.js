// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
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
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"components/home/homePage.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HomeContainer = HomeContainer;

function HomeContainer() {
  var $ = function $(selector) {
    return document.querySelector(selector);
  };

  document.querySelector('.container') ? document.querySelector('.container').remove() : null;
  var addContainer = document.createElement('container');
  var addDivAir = document.createElement('div');
  var addPromo = document.createElement('div');
  var sale = document.createElement('div');
  var newAirs = document.createElement('div');
  var comingSon = document.createElement('div');
  addContainer.classList.add('container');
  addDivAir.classList.add('div-air');
  addPromo.classList.add('div-promo');
  sale.classList.add('div-sale');
  newAirs.classList.add('div-new-arrivals');
  comingSon.classList.add('div-coming-son');
  addDivAir.innerHTML = "\n    <h1 class=\"air-max-98\">air max 98</h1>\n    <p class=\"div-air-p\">The Nike Air Max 98 brings back retro Air Max style with contemporary comfort innovations. A full-length Max Air unit gives total cushioning in every step.</p>\n    <img class=\"img-div-air\" src=\"./../../img/divAir.png\">\n    ";
  sale.innerHTML = '<p>Summer</br>Sale</br>Up to 50%</p>';
  newAirs.innerHTML = '<p>New</br>Air</p>';
  comingSon.innerHTML = '<p>Coming</br>Son</p>';
  $('body').appendChild(addContainer);
  addContainer.appendChild(addDivAir);
  addContainer.appendChild(addPromo);
  addPromo.appendChild(sale);
  addPromo.appendChild(newAirs);
  addPromo.appendChild(comingSon);
}
},{}],"components/catalog/catalog.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CatalogContainer = CatalogContainer;
exports.count = void 0;

function setCookie(name, value) {
  var updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(JSON.stringify(value));
  document.cookie = updatedCookie;
}

function getCookie(name) {
  var matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
  return matches ? JSON.parse(decodeURIComponent(matches[1])) : undefined;
}

var count = 0;
exports.count = count;

function CatalogContainer(products) {
  console.log(products);
  document.querySelector('.container') ? document.querySelector('.container').remove() : null;
  var catalog = document.createElement('section');
  catalog.addClass('container');
  catalog.addClass('catalog-container');
  catalog.addTo('body');
  products.map(function (item) {
    var good = document.createElement('div');
    good.listener('click', function () {
      exports.count = count = count + 1;

      if (count !== 0 && count !== undefined) {
        var itemInCart = getCookie('cartItem');

        if (itemInCart !== undefined && itemInCart !== null) {
          var allCount = itemInCart + 1;
          var circle = document.createElement('div');
          circle.addClass('number-of-purchases');
          circle.innerHTML = "".concat(allCount);
          document.querySelector('.number-of-purchases') ? document.querySelector('.number-of-purchases').remove() : null;
          circle.addTo('header');
          setCookie('cartItem', allCount);
        } else {
          var _circle = document.createElement('div');

          _circle.addClass('number-of-purchases');

          _circle.innerHTML = "".concat(count);
          document.querySelector('.number-of-purchases') ? document.querySelector('.number-of-purchases').remove() : null;

          _circle.addTo('header');

          setCookie('cartItem', count);
        }
      }

      var myCookie = getCookie('products');

      if (myCookie !== undefined) {
        myCookie.push({
          id: item.id,
          count: 1
        });
      } else {
        myCookie = [{
          id: item.id,
          count: 1
        }];
      }

      good.setAttribute('style', 'pointer-events: none; opacity: 0.4;');
      setCookie('products', myCookie);
      var iconCart = good.querySelector('.icon-shopping-cart');
      iconCart.setAttribute('style', 'color: green;');
    });
    good.insertAdjacentHTML('beforeend', "\n        <div class=\"product-block\">\n            <h3>".concat(item.title, "</h3>\n            <img src=\"").concat(item.image, "\" alt=\"\">\n            <p>").concat(item.description, "</p>\n            <span>$").concat(item.price, "</span>\n            <span>\n                <i class=\"icon-shopping-cart\"></i>\n            </span>        \n        </div>\n        "));
    good.addTo('.container');
  });
}
},{}],"components/contact/contact.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ContactContainer = ContactContainer;

function ContactContainer() {
  document.querySelector('.container') ? document.querySelector('.container').remove() : null;
  var contact = document.createElement('section');
  contact.addClass('container');
  contact.addClass('contact-container');
  contact.innerHTML = "\n    <div class=\"contact-block\">\n        <h2>Our contact</h2>\n        <p> \n            +375 25 994-03-37<br>\n            +375 25 994-03-37<br>\n            +375 25 994-03-37<br>\n            +375 25 994-03-37\n        </p>\n        <h2>Our address</h2>\n        <p>414-7533 Nemiga Street</br>\n            Minsk City 220055\n        </p>\n    </div>\n    <div class=\"map-block\">\n        <iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1175.26641263629!2d27.553339162975067!3d53.904507054452715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbcfeba1a658af%3A0x83b25b52609df211!2zTmVtaWdhIDMsINCc0LjQvdGB0Lo!5e0!3m2!1sru!2sby!4v1612800672610!5m2!1sru!2sby\" width=\"560\" height=\"560\" frameborder=\"0\" style=\"border:0;\" allowfullscreen=\"\" aria-hidden=\"false\" tabindex=\"0\"></iframe>\n    </div>\n    ";
  contact.addTo('body');
}
},{}],"components/utilits/utilits.js":[function(require,module,exports) {
var $ = function $(selector) {
  return document.querySelector(selector);
};

Object.prototype.addTo = function (selector) {
  var mySelector = $(selector);
  mySelector.appendChild(this);
};

Object.prototype.addClass = function (className) {
  this.classList.add(className);
  return this;
};

Object.prototype.listener = function (type, func) {
  this.addEventListener(type, func);
  return this;
};
},{}],"components/api/api.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

function _default() {
  var response = fetch('https://fakestoreapi.com/products/').then(function (result) {
    return result.json();
  });
  return response;
}
},{}],"components/useCookie.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setCookie = setCookie;
exports.getCookie = getCookie;

function setCookie(name, value) {
  var updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(JSON.stringify(value));
  document.cookie = updatedCookie;
}

function getCookie(name) {
  var matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
  return matches ? JSON.parse(decodeURIComponent(matches[1])) : undefined;
}
},{}],"components/App.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.products = void 0;

require("./utilits/utilits.js");

require("./../components/header/header.js");

var _header2 = require("./header/header.js");

var _homePage = require("./home/homePage.js");

var _api = _interopRequireDefault(require("./api/api.js"));

var _useCookie = require("./useCookie.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $ = function $(selector) {
  return document.querySelector(selector);
};

var products = [];
exports.products = products;
(0, _api.default)().then(function (result) {
  exports.products = products = result; // debugger
});

var create = function create(tag, html, classes) {
  var attrs = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
  var element = document.createElement(tag);
  element.classList.add(classes);

  for (var i = 0; i < attrs.lenght; i++) {
    element.setAttribute(attrs[i].key, attrs[i].value);
  }

  element.innerHTML = html;
  document.body.appendChild(element);
  return element;
};

var addTo = function addTo(element, toElement) {
  $(toElement).appendChild(element);
};

var createHeader = create('header', '', 'header');

_header2.routes.forEach(function (item) {
  $('header').appendChild(create(item.tag, item.html, item.classes));
});

(0, _homePage.HomeContainer)();
var link = document.querySelectorAll('li');

_header2.routes.map(function (route, index) {
  link[index].addClass('my-link').listener('click', function () {
    location.hash = route.path;
    route.component(products);
  });
});

var cartGood = function cartGood() {
  var count = (0, _useCookie.getCookie)('cartItem');
  console.log(count);

  if (count !== 0 && count !== undefined) {
    var circle = document.createElement('div');
    circle.addClass('number-of-purchases');
    circle.innerHTML = "".concat(count);
    document.querySelector('.number-of-purchases') ? document.querySelector('.number-of-purchases').remove() : null;
    circle.addTo('header');
  }
};

cartGood();
},{"./utilits/utilits.js":"components/utilits/utilits.js","./../components/header/header.js":"components/header/header.js","./header/header.js":"components/header/header.js","./home/homePage.js":"components/home/homePage.js","./api/api.js":"components/api/api.js","./useCookie.js":"components/useCookie.js"}],"components/cart/cart.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CartContainer = CartContainer;

var _App = require("./../App.js");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function getCookie(name) {
  var matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
  return matches ? JSON.parse(decodeURIComponent(matches[1])) : undefined;
}

function setCookie(name, value) {
  var updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(JSON.stringify(value));
  document.cookie = updatedCookie;
}

function CartContainer() {
  document.querySelector('.container') ? document.querySelector('.container').remove() : null;
  var cart = document.createElement('section');
  cart.addClass('container');
  cart.addClass('cart-container');
  cart.addTo('body');
  var productInCart = getCookie('products');
  var newArrProducts = [];

  _App.products.map(function (key) {
    var cartBlock = document.createElement('div');
    cartBlock.addClass('cart-block');
    productInCart.reduce(function (distinct, num) {
      return distinct.includes(JSON.stringify(num)) ? distinct : [].concat(_toConsumableArray(distinct), [JSON.stringify(num)]);
    }, []).map(function (item) {
      item = JSON.parse(item);

      if (item.id === key.id) {
        newArrProducts.push(key);
        cartBlock.insertAdjacentHTML('beforeend', "\n                <h3>".concat(key.category, "</h3>\n                "));
        cartBlock.insertAdjacentHTML('beforeend', "\n                <p>$".concat(key.price, "</p>\n                "));
        cartBlock.insertAdjacentHTML('beforeend', "\n                <img src=\"".concat(key.image, "\" alt=\"\">\n                "));
        cartBlock.insertAdjacentHTML('beforeend', "\n                <p class=\"description\">".concat(key.description, "</p>\n                "));
        cartBlock.insertAdjacentHTML('beforeend', "\n                <p>".concat(key.title, "</p>\n                "));
        cartBlock.insertAdjacentHTML('beforeend', "\n                <input class=\"input-for-quantity\" type=\"number\" value=\"".concat(item.count, "\"><button class=\"button-for-quantity\" type=\"button\"><i class=\"icon-plus\"></i></button></br>\n                "));
        var searchButton = cartBlock.querySelector('.button-for-quantity');
        searchButton.addEventListener('click', function () {
          var input = cartBlock.querySelector('.input-for-quantity');
          item.count = +input.value;
          setCookie('products', productInCart);
          console.log(getCookie('products'));
          searchButton.insertAdjacentHTML('afterend', "\n                    <i class=\"icon-ok\"></i>\n                    ");
        });
        var removeButton = document.createElement('button');
        removeButton.addClass('remove-button');
        removeButton.setAttribute('type', 'button');
        removeButton.innerHTML = 'Remove from cart';
        removeButton.addEventListener('click', function () {
          var itemInCart = +getCookie('cartItem');
          itemInCart--;
          var circle = document.createElement('div');
          circle.innerHTML = "".concat(itemInCart);
          circle.addClass('number-of-purchases');
          document.querySelector('.number-of-purchases') ? document.querySelector('.number-of-purchases').remove() : null;
          circle.addTo('header');
          var newProduct = productInCart.filter(function (item) {
            return key.id !== item.id;
          });
          setCookie('products', newProduct);
          setCookie('cartItem', itemInCart);
          CartContainer();
        });
        cartBlock.appendChild(removeButton);
      } else {
        return;
      }

      cartBlock.addTo('section');
    });
  });
}
},{"./../App.js":"components/App.js"}],"components/header/header.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routes = void 0;

var _homePage = require("./../home/homePage.js");

var _catalog = require("../catalog/catalog.js");

var _contact = require("./../contact/contact.js");

var _cart = require("./../cart/cart.js");

// const createBody = document.querySelector('body');
// const createHeader = document.createElement('header');
var routes = [{
  tag: 'li',
  path: '/',
  html: '<img class="img-logo" src="./../../img/logo.png" alt="logo"></img>',
  classes: ['link'],
  component: _homePage.HomeContainer
}, {
  tag: 'li',
  path: 'catalog',
  html: 'Catalog',
  classes: ['link'],
  component: _catalog.CatalogContainer
}, {
  tag: 'li',
  path: 'contact',
  html: 'Contact',
  classes: ['link'],
  component: _contact.ContactContainer
}, {
  tag: 'li',
  path: 'cart',
  html: '<i class="icon-shopping-cart"></i>',
  classes: ['link'],
  component: _cart.CartContainer
}];
exports.routes = routes;
},{"./../home/homePage.js":"components/home/homePage.js","../catalog/catalog.js":"components/catalog/catalog.js","./../contact/contact.js":"components/contact/contact.js","./../cart/cart.js":"components/cart/cart.js"}],"C:/Users/Администратор/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "63733" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["C:/Users/Администратор/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","components/header/header.js"], null)
//# sourceMappingURL=/header.0290b1f1.js.map