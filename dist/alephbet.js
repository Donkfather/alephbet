(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["AlephBet"] = factory();
	else
		root["AlephBet"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/alephbet.coffee");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/basil.js/build/basil.js":
/*!**********************************************!*\
  !*** ./node_modules/basil.js/build/basil.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;(function () {
	// Basil
	var Basil = function (options) {
		return Basil.utils.extend({}, Basil.plugins, new Basil.Storage().init(options));
	};

	// Version
	Basil.version = '0.4.10';

	// Utils
	Basil.utils = {
		extend: function () {
			var destination = typeof arguments[0] === 'object' ? arguments[0] : {};
			for (var i = 1; i < arguments.length; i++) {
				if (arguments[i] && typeof arguments[i] === 'object')
					for (var property in arguments[i])
						destination[property] = arguments[i][property];
			}
			return destination;
		},
		each: function (obj, fnIterator, context) {
			if (this.isArray(obj)) {
				for (var i = 0; i < obj.length; i++)
					if (fnIterator.call(context, obj[i], i) === false) return;
			} else if (obj) {
				for (var key in obj)
					if (fnIterator.call(context, obj[key], key) === false) return;
			}
		},
		tryEach: function (obj, fnIterator, fnError, context) {
			this.each(obj, function (value, key) {
				try {
					return fnIterator.call(context, value, key);
				} catch (error) {
					if (this.isFunction(fnError)) {
						try {
							fnError.call(context, value, key, error);
						} catch (error) {}
					}
				}
			}, this);
		},
		registerPlugin: function (methods) {
			Basil.plugins = this.extend(methods, Basil.plugins);
		},
		getTypeOf: function (obj) {
			if (typeof obj === 'undefined' || obj === null)
				return '' + obj;
			return Object.prototype.toString.call(obj).replace(/^\[object\s(.*)\]$/, function ($0, $1) { return $1.toLowerCase(); });
		}
	};

	// Add some isType methods: isArguments, isBoolean, isFunction, isString, isArray, isNumber, isDate, isRegExp, isUndefined, isNull.
	var types = ['Arguments', 'Boolean', 'Function', 'String', 'Array', 'Number', 'Date', 'RegExp', 'Undefined', 'Null'];
	for (var i = 0; i < types.length; i++) {
		Basil.utils['is' + types[i]] = (function (type) {
			return function (obj) {
				return Basil.utils.getTypeOf(obj) === type.toLowerCase();
			};
		})(types[i]);
	}

	// Plugins
	Basil.plugins = {};

	// Options
	Basil.options = Basil.utils.extend({
		namespace: 'b45i1',
		storages: ['local', 'cookie', 'session', 'memory'],
		expireDays: 365,
		keyDelimiter: '.'
	}, window.Basil ? window.Basil.options : {});

	// Storage
	Basil.Storage = function () {
		var _salt = 'b45i1' + (Math.random() + 1)
				.toString(36)
				.substring(7),
			_storages = {},
			_isValidKey = function (key) {
				var type = Basil.utils.getTypeOf(key);
				return (type === 'string' && key) || type === 'number' || type === 'boolean';
			},
			_toStoragesArray = function (storages) {
				if (Basil.utils.isArray(storages))
					return storages;
				return Basil.utils.isString(storages) ? [storages] : [];
			},
			_toStoredKey = function (namespace, path, delimiter) {
				var key = '';
				if (_isValidKey(path)) {
					key += path;
				} else if (Basil.utils.isArray(path)) {
					path = Basil.utils.isFunction(path.filter) ? path.filter(_isValidKey) : path;
					key = path.join(delimiter);
				}
				return key && _isValidKey(namespace) ? namespace + delimiter + key : key;
 			},
			_toKeyName = function (namespace, key, delimiter) {
				if (!_isValidKey(namespace))
					return key;
				return key.replace(new RegExp('^' + namespace + delimiter), '');
			},
			_toStoredValue = function (value) {
				return JSON.stringify(value);
			},
			_fromStoredValue = function (value) {
				return value ? JSON.parse(value) : null;
			};

		// HTML5 web storage interface
		var webStorageInterface = {
			engine: null,
			check: function () {
				try {
					window[this.engine].setItem(_salt, true);
					window[this.engine].removeItem(_salt);
				} catch (e) {
					return false;
				}
				return true;
			},
			set: function (key, value, options) {
				if (!key)
					throw Error('invalid key');
				window[this.engine].setItem(key, value);
			},
			get: function (key) {
				return window[this.engine].getItem(key);
			},
			remove: function (key) {
				window[this.engine].removeItem(key);
			},
			reset: function (namespace) {
				for (var i = 0, key; i < window[this.engine].length; i++) {
					key = window[this.engine].key(i);
					if (!namespace || key.indexOf(namespace) === 0) {
						this.remove(key);
						i--;
					}
				}
			},
			keys: function (namespace, delimiter) {
				var keys = [];
				for (var i = 0, key; i < window[this.engine].length; i++) {
					key = window[this.engine].key(i);
					if (!namespace || key.indexOf(namespace) === 0)
						keys.push(_toKeyName(namespace, key, delimiter));
				}
				return keys;
			}
		};

		// local storage
		_storages.local = Basil.utils.extend({}, webStorageInterface, {
			engine: 'localStorage'
		});
		// session storage
		_storages.session = Basil.utils.extend({}, webStorageInterface, {
			engine: 'sessionStorage'
		});

		// memory storage
		_storages.memory = {
			_hash: {},
			check: function () {
				return true;
			},
			set: function (key, value, options) {
				if (!key)
					throw Error('invalid key');
				this._hash[key] = value;
			},
			get: function (key) {
				return this._hash[key] || null;
			},
			remove: function (key) {
				delete this._hash[key];
			},
			reset: function (namespace) {
				for (var key in this._hash) {
					if (!namespace || key.indexOf(namespace) === 0)
						this.remove(key);
				}
			},
			keys: function (namespace, delimiter) {
				var keys = [];
				for (var key in this._hash)
					if (!namespace || key.indexOf(namespace) === 0)
						keys.push(_toKeyName(namespace, key, delimiter));
				return keys;
			}
		};

		// cookie storage
		_storages.cookie = {
			check: function (options) {
				if (!navigator.cookieEnabled)
					return false;
				if (window.self !== window.top) {
					// we need to check third-party cookies;
					var cookie = 'thirdparty.check=' + Math.round(Math.random() * 1000);
					document.cookie = cookie + '; path=/';
					return document.cookie.indexOf(cookie) !== -1;
				}
				// if cookie secure activated, ensure it works (not the case if we are in http only)
				if (options && options.secure) {
					try {
						this.set(_salt, _salt, options);
						var hasSecurelyPersited = this.get(_salt) === _salt;
						this.remove(_salt);
						return hasSecurelyPersited;
					} catch (error) {
						return false;
					}
				}
				return true;
			},
			set: function (key, value, options) {
				if (!this.check())
					throw Error('cookies are disabled');
				options = options || {};
				if (!key)
					throw Error('invalid key');
				var cookie = encodeURIComponent(key) + '=' + encodeURIComponent(value);
				// handle expiration days
				if (options.expireDays) {
					var date = new Date();
					date.setTime(date.getTime() + (options.expireDays * 24 * 60 * 60 * 1000));
					cookie += '; expires=' + date.toGMTString();
				}
				// handle domain
				if (options.domain && options.domain !== document.domain) {
					var _domain = options.domain.replace(/^\./, '');
					if (document.domain.indexOf(_domain) === -1 || _domain.split('.').length <= 1)
						throw Error('invalid domain');
					cookie += '; domain=' + options.domain;
				}
				// handle secure
				if (options.secure === true) {
					cookie += '; Secure';
				}
				document.cookie = cookie + '; path=/';
			},
			get: function (key) {
				if (!this.check())
					throw Error('cookies are disabled');
				var encodedKey = encodeURIComponent(key);
				var cookies = document.cookie ? document.cookie.split(';') : [];
				// retrieve last updated cookie first
				for (var i = cookies.length - 1, cookie; i >= 0; i--) {
					cookie = cookies[i].replace(/^\s*/, '');
					if (cookie.indexOf(encodedKey + '=') === 0)
						return decodeURIComponent(cookie.substring(encodedKey.length + 1, cookie.length));
				}
				return null;
			},
			remove: function (key) {
				// remove cookie from main domain
				this.set(key, '', { expireDays: -1 });
				// remove cookie from upper domains
				var domainParts = document.domain.split('.');
				for (var i = domainParts.length; i > 1; i--) {
					this.set(key, '', { expireDays: -1, domain: '.' + domainParts.slice(- i).join('.') });
				}
			},
			reset: function (namespace) {
				var cookies = document.cookie ? document.cookie.split(';') : [];
				for (var i = 0, cookie, key; i < cookies.length; i++) {
					cookie = cookies[i].replace(/^\s*/, '');
					key = cookie.substr(0, cookie.indexOf('='));
					if (!namespace || key.indexOf(namespace) === 0)
						this.remove(key);
				}
			},
			keys: function (namespace, delimiter) {
				if (!this.check())
					throw Error('cookies are disabled');
				var keys = [],
					cookies = document.cookie ? document.cookie.split(';') : [];
				for (var i = 0, cookie, key; i < cookies.length; i++) {
					cookie = cookies[i].replace(/^\s*/, '');
					key = decodeURIComponent(cookie.substr(0, cookie.indexOf('=')));
					if (!namespace || key.indexOf(namespace) === 0)
						keys.push(_toKeyName(namespace, key, delimiter));
				}
				return keys;
			}
		};

		return {
			init: function (options) {
				this.setOptions(options);
				return this;
			},
			setOptions: function (options) {
				this.options = Basil.utils.extend({}, this.options || Basil.options, options);
			},
			support: function (storage) {
				return _storages.hasOwnProperty(storage);
			},
			check: function (storage) {
				if (this.support(storage))
					return _storages[storage].check(this.options);
				return false;
			},
			set: function (key, value, options) {
				options = Basil.utils.extend({}, this.options, options);
				if (!(key = _toStoredKey(options.namespace, key, options.keyDelimiter)))
					return false;
				value = options.raw === true ? value : _toStoredValue(value);
				var where = null;
				// try to set key/value in first available storage
				Basil.utils.tryEach(_toStoragesArray(options.storages), function (storage, index) {
					_storages[storage].set(key, value, options);
					where = storage;
					return false; // break;
				}, null, this);
				if (!where) {
					// key has not been set anywhere
					return false;
				}
				// remove key from all other storages
				Basil.utils.tryEach(_toStoragesArray(options.storages), function (storage, index) {
					if (storage !== where)
						_storages[storage].remove(key);
				}, null, this);
				return true;
			},
			get: function (key, options) {
				options = Basil.utils.extend({}, this.options, options);
				if (!(key = _toStoredKey(options.namespace, key, options.keyDelimiter)))
					return null;
				var value = null;
				Basil.utils.tryEach(_toStoragesArray(options.storages), function (storage, index) {
					if (value !== null)
						return false; // break if a value has already been found.
					value = _storages[storage].get(key, options) || null;
					value = options.raw === true ? value : _fromStoredValue(value);
				}, function (storage, index, error) {
					value = null;
				}, this);
				return value;
			},
			remove: function (key, options) {
				options = Basil.utils.extend({}, this.options, options);
				if (!(key = _toStoredKey(options.namespace, key, options.keyDelimiter)))
					return;
				Basil.utils.tryEach(_toStoragesArray(options.storages), function (storage) {
					_storages[storage].remove(key);
				}, null, this);
			},
			reset: function (options) {
				options = Basil.utils.extend({}, this.options, options);
				Basil.utils.tryEach(_toStoragesArray(options.storages), function (storage) {
					_storages[storage].reset(options.namespace);
				}, null, this);
			},
			keys: function (options) {
				options = options || {};
				var keys = [];
				for (var key in this.keysMap(options))
					keys.push(key);
				return keys;
			},
			keysMap: function (options) {
				options = Basil.utils.extend({}, this.options, options);
				var map = {};
				Basil.utils.tryEach(_toStoragesArray(options.storages), function (storage) {
					Basil.utils.each(_storages[storage].keys(options.namespace, options.keyDelimiter), function (key) {
						map[key] = Basil.utils.isArray(map[key]) ? map[key] : [];
						map[key].push(storage);
					}, this);
				}, null, this);
				return map;
			}
		};
	};

	// Access to native storages, without namespace or basil value decoration
	Basil.memory = new Basil.Storage().init({ storages: 'memory', namespace: null, raw: true });
	Basil.cookie = new Basil.Storage().init({ storages: 'cookie', namespace: null, raw: true });
	Basil.localStorage = new Basil.Storage().init({ storages: 'local', namespace: null, raw: true });
	Basil.sessionStorage = new Basil.Storage().init({ storages: 'session', namespace: null, raw: true });

	// browser export
	window.Basil = Basil;

	// AMD export
	if (true) {
		!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
			return Basil;
		}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	// commonjs export
	} else {}

})();


/***/ }),

/***/ "./node_modules/crypto-js/core.js":
/*!****************************************!*\
  !*** ./node_modules/crypto-js/core.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory) {
	if (true) {
		// CommonJS
		module.exports = exports = factory();
	}
	else {}
}(this, function () {

	/**
	 * CryptoJS core components.
	 */
	var CryptoJS = CryptoJS || (function (Math, undefined) {
	    /*
	     * Local polyfil of Object.create
	     */
	    var create = Object.create || (function () {
	        function F() {};

	        return function (obj) {
	            var subtype;

	            F.prototype = obj;

	            subtype = new F();

	            F.prototype = null;

	            return subtype;
	        };
	    }())

	    /**
	     * CryptoJS namespace.
	     */
	    var C = {};

	    /**
	     * Library namespace.
	     */
	    var C_lib = C.lib = {};

	    /**
	     * Base object for prototypal inheritance.
	     */
	    var Base = C_lib.Base = (function () {


	        return {
	            /**
	             * Creates a new object that inherits from this object.
	             *
	             * @param {Object} overrides Properties to copy into the new object.
	             *
	             * @return {Object} The new object.
	             *
	             * @static
	             *
	             * @example
	             *
	             *     var MyType = CryptoJS.lib.Base.extend({
	             *         field: 'value',
	             *
	             *         method: function () {
	             *         }
	             *     });
	             */
	            extend: function (overrides) {
	                // Spawn
	                var subtype = create(this);

	                // Augment
	                if (overrides) {
	                    subtype.mixIn(overrides);
	                }

	                // Create default initializer
	                if (!subtype.hasOwnProperty('init') || this.init === subtype.init) {
	                    subtype.init = function () {
	                        subtype.$super.init.apply(this, arguments);
	                    };
	                }

	                // Initializer's prototype is the subtype object
	                subtype.init.prototype = subtype;

	                // Reference supertype
	                subtype.$super = this;

	                return subtype;
	            },

	            /**
	             * Extends this object and runs the init method.
	             * Arguments to create() will be passed to init().
	             *
	             * @return {Object} The new object.
	             *
	             * @static
	             *
	             * @example
	             *
	             *     var instance = MyType.create();
	             */
	            create: function () {
	                var instance = this.extend();
	                instance.init.apply(instance, arguments);

	                return instance;
	            },

	            /**
	             * Initializes a newly created object.
	             * Override this method to add some logic when your objects are created.
	             *
	             * @example
	             *
	             *     var MyType = CryptoJS.lib.Base.extend({
	             *         init: function () {
	             *             // ...
	             *         }
	             *     });
	             */
	            init: function () {
	            },

	            /**
	             * Copies properties into this object.
	             *
	             * @param {Object} properties The properties to mix in.
	             *
	             * @example
	             *
	             *     MyType.mixIn({
	             *         field: 'value'
	             *     });
	             */
	            mixIn: function (properties) {
	                for (var propertyName in properties) {
	                    if (properties.hasOwnProperty(propertyName)) {
	                        this[propertyName] = properties[propertyName];
	                    }
	                }

	                // IE won't copy toString using the loop above
	                if (properties.hasOwnProperty('toString')) {
	                    this.toString = properties.toString;
	                }
	            },

	            /**
	             * Creates a copy of this object.
	             *
	             * @return {Object} The clone.
	             *
	             * @example
	             *
	             *     var clone = instance.clone();
	             */
	            clone: function () {
	                return this.init.prototype.extend(this);
	            }
	        };
	    }());

	    /**
	     * An array of 32-bit words.
	     *
	     * @property {Array} words The array of 32-bit words.
	     * @property {number} sigBytes The number of significant bytes in this word array.
	     */
	    var WordArray = C_lib.WordArray = Base.extend({
	        /**
	         * Initializes a newly created word array.
	         *
	         * @param {Array} words (Optional) An array of 32-bit words.
	         * @param {number} sigBytes (Optional) The number of significant bytes in the words.
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.lib.WordArray.create();
	         *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607]);
	         *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607], 6);
	         */
	        init: function (words, sigBytes) {
	            words = this.words = words || [];

	            if (sigBytes != undefined) {
	                this.sigBytes = sigBytes;
	            } else {
	                this.sigBytes = words.length * 4;
	            }
	        },

	        /**
	         * Converts this word array to a string.
	         *
	         * @param {Encoder} encoder (Optional) The encoding strategy to use. Default: CryptoJS.enc.Hex
	         *
	         * @return {string} The stringified word array.
	         *
	         * @example
	         *
	         *     var string = wordArray + '';
	         *     var string = wordArray.toString();
	         *     var string = wordArray.toString(CryptoJS.enc.Utf8);
	         */
	        toString: function (encoder) {
	            return (encoder || Hex).stringify(this);
	        },

	        /**
	         * Concatenates a word array to this word array.
	         *
	         * @param {WordArray} wordArray The word array to append.
	         *
	         * @return {WordArray} This word array.
	         *
	         * @example
	         *
	         *     wordArray1.concat(wordArray2);
	         */
	        concat: function (wordArray) {
	            // Shortcuts
	            var thisWords = this.words;
	            var thatWords = wordArray.words;
	            var thisSigBytes = this.sigBytes;
	            var thatSigBytes = wordArray.sigBytes;

	            // Clamp excess bits
	            this.clamp();

	            // Concat
	            if (thisSigBytes % 4) {
	                // Copy one byte at a time
	                for (var i = 0; i < thatSigBytes; i++) {
	                    var thatByte = (thatWords[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
	                    thisWords[(thisSigBytes + i) >>> 2] |= thatByte << (24 - ((thisSigBytes + i) % 4) * 8);
	                }
	            } else {
	                // Copy one word at a time
	                for (var i = 0; i < thatSigBytes; i += 4) {
	                    thisWords[(thisSigBytes + i) >>> 2] = thatWords[i >>> 2];
	                }
	            }
	            this.sigBytes += thatSigBytes;

	            // Chainable
	            return this;
	        },

	        /**
	         * Removes insignificant bits.
	         *
	         * @example
	         *
	         *     wordArray.clamp();
	         */
	        clamp: function () {
	            // Shortcuts
	            var words = this.words;
	            var sigBytes = this.sigBytes;

	            // Clamp
	            words[sigBytes >>> 2] &= 0xffffffff << (32 - (sigBytes % 4) * 8);
	            words.length = Math.ceil(sigBytes / 4);
	        },

	        /**
	         * Creates a copy of this word array.
	         *
	         * @return {WordArray} The clone.
	         *
	         * @example
	         *
	         *     var clone = wordArray.clone();
	         */
	        clone: function () {
	            var clone = Base.clone.call(this);
	            clone.words = this.words.slice(0);

	            return clone;
	        },

	        /**
	         * Creates a word array filled with random bytes.
	         *
	         * @param {number} nBytes The number of random bytes to generate.
	         *
	         * @return {WordArray} The random word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.lib.WordArray.random(16);
	         */
	        random: function (nBytes) {
	            var words = [];

	            var r = (function (m_w) {
	                var m_w = m_w;
	                var m_z = 0x3ade68b1;
	                var mask = 0xffffffff;

	                return function () {
	                    m_z = (0x9069 * (m_z & 0xFFFF) + (m_z >> 0x10)) & mask;
	                    m_w = (0x4650 * (m_w & 0xFFFF) + (m_w >> 0x10)) & mask;
	                    var result = ((m_z << 0x10) + m_w) & mask;
	                    result /= 0x100000000;
	                    result += 0.5;
	                    return result * (Math.random() > .5 ? 1 : -1);
	                }
	            });

	            for (var i = 0, rcache; i < nBytes; i += 4) {
	                var _r = r((rcache || Math.random()) * 0x100000000);

	                rcache = _r() * 0x3ade67b7;
	                words.push((_r() * 0x100000000) | 0);
	            }

	            return new WordArray.init(words, nBytes);
	        }
	    });

	    /**
	     * Encoder namespace.
	     */
	    var C_enc = C.enc = {};

	    /**
	     * Hex encoding strategy.
	     */
	    var Hex = C_enc.Hex = {
	        /**
	         * Converts a word array to a hex string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The hex string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var hexString = CryptoJS.enc.Hex.stringify(wordArray);
	         */
	        stringify: function (wordArray) {
	            // Shortcuts
	            var words = wordArray.words;
	            var sigBytes = wordArray.sigBytes;

	            // Convert
	            var hexChars = [];
	            for (var i = 0; i < sigBytes; i++) {
	                var bite = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
	                hexChars.push((bite >>> 4).toString(16));
	                hexChars.push((bite & 0x0f).toString(16));
	            }

	            return hexChars.join('');
	        },

	        /**
	         * Converts a hex string to a word array.
	         *
	         * @param {string} hexStr The hex string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Hex.parse(hexString);
	         */
	        parse: function (hexStr) {
	            // Shortcut
	            var hexStrLength = hexStr.length;

	            // Convert
	            var words = [];
	            for (var i = 0; i < hexStrLength; i += 2) {
	                words[i >>> 3] |= parseInt(hexStr.substr(i, 2), 16) << (24 - (i % 8) * 4);
	            }

	            return new WordArray.init(words, hexStrLength / 2);
	        }
	    };

	    /**
	     * Latin1 encoding strategy.
	     */
	    var Latin1 = C_enc.Latin1 = {
	        /**
	         * Converts a word array to a Latin1 string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The Latin1 string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var latin1String = CryptoJS.enc.Latin1.stringify(wordArray);
	         */
	        stringify: function (wordArray) {
	            // Shortcuts
	            var words = wordArray.words;
	            var sigBytes = wordArray.sigBytes;

	            // Convert
	            var latin1Chars = [];
	            for (var i = 0; i < sigBytes; i++) {
	                var bite = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
	                latin1Chars.push(String.fromCharCode(bite));
	            }

	            return latin1Chars.join('');
	        },

	        /**
	         * Converts a Latin1 string to a word array.
	         *
	         * @param {string} latin1Str The Latin1 string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Latin1.parse(latin1String);
	         */
	        parse: function (latin1Str) {
	            // Shortcut
	            var latin1StrLength = latin1Str.length;

	            // Convert
	            var words = [];
	            for (var i = 0; i < latin1StrLength; i++) {
	                words[i >>> 2] |= (latin1Str.charCodeAt(i) & 0xff) << (24 - (i % 4) * 8);
	            }

	            return new WordArray.init(words, latin1StrLength);
	        }
	    };

	    /**
	     * UTF-8 encoding strategy.
	     */
	    var Utf8 = C_enc.Utf8 = {
	        /**
	         * Converts a word array to a UTF-8 string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The UTF-8 string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var utf8String = CryptoJS.enc.Utf8.stringify(wordArray);
	         */
	        stringify: function (wordArray) {
	            try {
	                return decodeURIComponent(escape(Latin1.stringify(wordArray)));
	            } catch (e) {
	                throw new Error('Malformed UTF-8 data');
	            }
	        },

	        /**
	         * Converts a UTF-8 string to a word array.
	         *
	         * @param {string} utf8Str The UTF-8 string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Utf8.parse(utf8String);
	         */
	        parse: function (utf8Str) {
	            return Latin1.parse(unescape(encodeURIComponent(utf8Str)));
	        }
	    };

	    /**
	     * Abstract buffered block algorithm template.
	     *
	     * The property blockSize must be implemented in a concrete subtype.
	     *
	     * @property {number} _minBufferSize The number of blocks that should be kept unprocessed in the buffer. Default: 0
	     */
	    var BufferedBlockAlgorithm = C_lib.BufferedBlockAlgorithm = Base.extend({
	        /**
	         * Resets this block algorithm's data buffer to its initial state.
	         *
	         * @example
	         *
	         *     bufferedBlockAlgorithm.reset();
	         */
	        reset: function () {
	            // Initial values
	            this._data = new WordArray.init();
	            this._nDataBytes = 0;
	        },

	        /**
	         * Adds new data to this block algorithm's buffer.
	         *
	         * @param {WordArray|string} data The data to append. Strings are converted to a WordArray using UTF-8.
	         *
	         * @example
	         *
	         *     bufferedBlockAlgorithm._append('data');
	         *     bufferedBlockAlgorithm._append(wordArray);
	         */
	        _append: function (data) {
	            // Convert string to WordArray, else assume WordArray already
	            if (typeof data == 'string') {
	                data = Utf8.parse(data);
	            }

	            // Append
	            this._data.concat(data);
	            this._nDataBytes += data.sigBytes;
	        },

	        /**
	         * Processes available data blocks.
	         *
	         * This method invokes _doProcessBlock(offset), which must be implemented by a concrete subtype.
	         *
	         * @param {boolean} doFlush Whether all blocks and partial blocks should be processed.
	         *
	         * @return {WordArray} The processed data.
	         *
	         * @example
	         *
	         *     var processedData = bufferedBlockAlgorithm._process();
	         *     var processedData = bufferedBlockAlgorithm._process(!!'flush');
	         */
	        _process: function (doFlush) {
	            // Shortcuts
	            var data = this._data;
	            var dataWords = data.words;
	            var dataSigBytes = data.sigBytes;
	            var blockSize = this.blockSize;
	            var blockSizeBytes = blockSize * 4;

	            // Count blocks ready
	            var nBlocksReady = dataSigBytes / blockSizeBytes;
	            if (doFlush) {
	                // Round up to include partial blocks
	                nBlocksReady = Math.ceil(nBlocksReady);
	            } else {
	                // Round down to include only full blocks,
	                // less the number of blocks that must remain in the buffer
	                nBlocksReady = Math.max((nBlocksReady | 0) - this._minBufferSize, 0);
	            }

	            // Count words ready
	            var nWordsReady = nBlocksReady * blockSize;

	            // Count bytes ready
	            var nBytesReady = Math.min(nWordsReady * 4, dataSigBytes);

	            // Process blocks
	            if (nWordsReady) {
	                for (var offset = 0; offset < nWordsReady; offset += blockSize) {
	                    // Perform concrete-algorithm logic
	                    this._doProcessBlock(dataWords, offset);
	                }

	                // Remove processed words
	                var processedWords = dataWords.splice(0, nWordsReady);
	                data.sigBytes -= nBytesReady;
	            }

	            // Return processed words
	            return new WordArray.init(processedWords, nBytesReady);
	        },

	        /**
	         * Creates a copy of this object.
	         *
	         * @return {Object} The clone.
	         *
	         * @example
	         *
	         *     var clone = bufferedBlockAlgorithm.clone();
	         */
	        clone: function () {
	            var clone = Base.clone.call(this);
	            clone._data = this._data.clone();

	            return clone;
	        },

	        _minBufferSize: 0
	    });

	    /**
	     * Abstract hasher template.
	     *
	     * @property {number} blockSize The number of 32-bit words this hasher operates on. Default: 16 (512 bits)
	     */
	    var Hasher = C_lib.Hasher = BufferedBlockAlgorithm.extend({
	        /**
	         * Configuration options.
	         */
	        cfg: Base.extend(),

	        /**
	         * Initializes a newly created hasher.
	         *
	         * @param {Object} cfg (Optional) The configuration options to use for this hash computation.
	         *
	         * @example
	         *
	         *     var hasher = CryptoJS.algo.SHA256.create();
	         */
	        init: function (cfg) {
	            // Apply config defaults
	            this.cfg = this.cfg.extend(cfg);

	            // Set initial values
	            this.reset();
	        },

	        /**
	         * Resets this hasher to its initial state.
	         *
	         * @example
	         *
	         *     hasher.reset();
	         */
	        reset: function () {
	            // Reset data buffer
	            BufferedBlockAlgorithm.reset.call(this);

	            // Perform concrete-hasher logic
	            this._doReset();
	        },

	        /**
	         * Updates this hasher with a message.
	         *
	         * @param {WordArray|string} messageUpdate The message to append.
	         *
	         * @return {Hasher} This hasher.
	         *
	         * @example
	         *
	         *     hasher.update('message');
	         *     hasher.update(wordArray);
	         */
	        update: function (messageUpdate) {
	            // Append
	            this._append(messageUpdate);

	            // Update the hash
	            this._process();

	            // Chainable
	            return this;
	        },

	        /**
	         * Finalizes the hash computation.
	         * Note that the finalize operation is effectively a destructive, read-once operation.
	         *
	         * @param {WordArray|string} messageUpdate (Optional) A final message update.
	         *
	         * @return {WordArray} The hash.
	         *
	         * @example
	         *
	         *     var hash = hasher.finalize();
	         *     var hash = hasher.finalize('message');
	         *     var hash = hasher.finalize(wordArray);
	         */
	        finalize: function (messageUpdate) {
	            // Final message update
	            if (messageUpdate) {
	                this._append(messageUpdate);
	            }

	            // Perform concrete-hasher logic
	            var hash = this._doFinalize();

	            return hash;
	        },

	        blockSize: 512/32,

	        /**
	         * Creates a shortcut function to a hasher's object interface.
	         *
	         * @param {Hasher} hasher The hasher to create a helper for.
	         *
	         * @return {Function} The shortcut function.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var SHA256 = CryptoJS.lib.Hasher._createHelper(CryptoJS.algo.SHA256);
	         */
	        _createHelper: function (hasher) {
	            return function (message, cfg) {
	                return new hasher.init(cfg).finalize(message);
	            };
	        },

	        /**
	         * Creates a shortcut function to the HMAC's object interface.
	         *
	         * @param {Hasher} hasher The hasher to use in this HMAC helper.
	         *
	         * @return {Function} The shortcut function.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var HmacSHA256 = CryptoJS.lib.Hasher._createHmacHelper(CryptoJS.algo.SHA256);
	         */
	        _createHmacHelper: function (hasher) {
	            return function (message, key) {
	                return new C_algo.HMAC.init(hasher, key).finalize(message);
	            };
	        }
	    });

	    /**
	     * Algorithm namespace.
	     */
	    var C_algo = C.algo = {};

	    return C;
	}(Math));


	return CryptoJS;

}));

/***/ }),

/***/ "./node_modules/crypto-js/sha1.js":
/*!****************************************!*\
  !*** ./node_modules/crypto-js/sha1.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"));
	}
	else {}
}(this, function (CryptoJS) {

	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var WordArray = C_lib.WordArray;
	    var Hasher = C_lib.Hasher;
	    var C_algo = C.algo;

	    // Reusable object
	    var W = [];

	    /**
	     * SHA-1 hash algorithm.
	     */
	    var SHA1 = C_algo.SHA1 = Hasher.extend({
	        _doReset: function () {
	            this._hash = new WordArray.init([
	                0x67452301, 0xefcdab89,
	                0x98badcfe, 0x10325476,
	                0xc3d2e1f0
	            ]);
	        },

	        _doProcessBlock: function (M, offset) {
	            // Shortcut
	            var H = this._hash.words;

	            // Working variables
	            var a = H[0];
	            var b = H[1];
	            var c = H[2];
	            var d = H[3];
	            var e = H[4];

	            // Computation
	            for (var i = 0; i < 80; i++) {
	                if (i < 16) {
	                    W[i] = M[offset + i] | 0;
	                } else {
	                    var n = W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16];
	                    W[i] = (n << 1) | (n >>> 31);
	                }

	                var t = ((a << 5) | (a >>> 27)) + e + W[i];
	                if (i < 20) {
	                    t += ((b & c) | (~b & d)) + 0x5a827999;
	                } else if (i < 40) {
	                    t += (b ^ c ^ d) + 0x6ed9eba1;
	                } else if (i < 60) {
	                    t += ((b & c) | (b & d) | (c & d)) - 0x70e44324;
	                } else /* if (i < 80) */ {
	                    t += (b ^ c ^ d) - 0x359d3e2a;
	                }

	                e = d;
	                d = c;
	                c = (b << 30) | (b >>> 2);
	                b = a;
	                a = t;
	            }

	            // Intermediate hash value
	            H[0] = (H[0] + a) | 0;
	            H[1] = (H[1] + b) | 0;
	            H[2] = (H[2] + c) | 0;
	            H[3] = (H[3] + d) | 0;
	            H[4] = (H[4] + e) | 0;
	        },

	        _doFinalize: function () {
	            // Shortcuts
	            var data = this._data;
	            var dataWords = data.words;

	            var nBitsTotal = this._nDataBytes * 8;
	            var nBitsLeft = data.sigBytes * 8;

	            // Add padding
	            dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);
	            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 14] = Math.floor(nBitsTotal / 0x100000000);
	            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 15] = nBitsTotal;
	            data.sigBytes = dataWords.length * 4;

	            // Hash final blocks
	            this._process();

	            // Return final computed hash
	            return this._hash;
	        },

	        clone: function () {
	            var clone = Hasher.clone.call(this);
	            clone._hash = this._hash.clone();

	            return clone;
	        }
	    });

	    /**
	     * Shortcut function to the hasher's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     *
	     * @return {WordArray} The hash.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hash = CryptoJS.SHA1('message');
	     *     var hash = CryptoJS.SHA1(wordArray);
	     */
	    C.SHA1 = Hasher._createHelper(SHA1);

	    /**
	     * Shortcut function to the HMAC's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     * @param {WordArray|string} key The secret key.
	     *
	     * @return {WordArray} The HMAC.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hmac = CryptoJS.HmacSHA1(message, key);
	     */
	    C.HmacSHA1 = Hasher._createHmacHelper(SHA1);
	}());


	return CryptoJS.SHA1;

}));

/***/ }),

/***/ "./node_modules/node-uuid/uuid.js":
/*!****************************************!*\
  !*** ./node_modules/node-uuid/uuid.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;//     uuid.js
//
//     Copyright (c) 2010-2012 Robert Kieffer
//     MIT License - http://opensource.org/licenses/mit-license.php

(function() {
  var _global = this;

  // Unique ID creation requires a high quality random # generator.  We feature
  // detect to determine the best RNG source, normalizing to a function that
  // returns 128-bits of randomness, since that's what's usually required
  var _rng;

  // Node.js crypto-based RNG - http://nodejs.org/docs/v0.6.2/api/crypto.html
  //
  // Moderately fast, high quality
  if (typeof(_global.require) == 'function') {
    try {
      var _rb = _global.require('crypto').randomBytes;
      _rng = _rb && function() {return _rb(16);};
    } catch(e) {}
  }

  if (!_rng && _global.crypto && crypto.getRandomValues) {
    // WHATWG crypto-based RNG - http://wiki.whatwg.org/wiki/Crypto
    //
    // Moderately fast, high quality
    var _rnds8 = new Uint8Array(16);
    _rng = function whatwgRNG() {
      crypto.getRandomValues(_rnds8);
      return _rnds8;
    };
  }

  if (!_rng) {
    // Math.random()-based (RNG)
    //
    // If all else fails, use Math.random().  It's fast, but is of unspecified
    // quality.
    var  _rnds = new Array(16);
    _rng = function() {
      for (var i = 0, r; i < 16; i++) {
        if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
        _rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
      }

      return _rnds;
    };
  }

  // Buffer class to use
  var BufferClass = typeof(_global.Buffer) == 'function' ? _global.Buffer : Array;

  // Maps for number <-> hex string conversion
  var _byteToHex = [];
  var _hexToByte = {};
  for (var i = 0; i < 256; i++) {
    _byteToHex[i] = (i + 0x100).toString(16).substr(1);
    _hexToByte[_byteToHex[i]] = i;
  }

  // **`parse()` - Parse a UUID into it's component bytes**
  function parse(s, buf, offset) {
    var i = (buf && offset) || 0, ii = 0;

    buf = buf || [];
    s.toLowerCase().replace(/[0-9a-f]{2}/g, function(oct) {
      if (ii < 16) { // Don't overflow!
        buf[i + ii++] = _hexToByte[oct];
      }
    });

    // Zero out remaining bytes if string was short
    while (ii < 16) {
      buf[i + ii++] = 0;
    }

    return buf;
  }

  // **`unparse()` - Convert UUID byte array (ala parse()) into a string**
  function unparse(buf, offset) {
    var i = offset || 0, bth = _byteToHex;
    return  bth[buf[i++]] + bth[buf[i++]] +
            bth[buf[i++]] + bth[buf[i++]] + '-' +
            bth[buf[i++]] + bth[buf[i++]] + '-' +
            bth[buf[i++]] + bth[buf[i++]] + '-' +
            bth[buf[i++]] + bth[buf[i++]] + '-' +
            bth[buf[i++]] + bth[buf[i++]] +
            bth[buf[i++]] + bth[buf[i++]] +
            bth[buf[i++]] + bth[buf[i++]];
  }

  // **`v1()` - Generate time-based UUID**
  //
  // Inspired by https://github.com/LiosK/UUID.js
  // and http://docs.python.org/library/uuid.html

  // random #'s we need to init node and clockseq
  var _seedBytes = _rng();

  // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
  var _nodeId = [
    _seedBytes[0] | 0x01,
    _seedBytes[1], _seedBytes[2], _seedBytes[3], _seedBytes[4], _seedBytes[5]
  ];

  // Per 4.2.2, randomize (14 bit) clockseq
  var _clockseq = (_seedBytes[6] << 8 | _seedBytes[7]) & 0x3fff;

  // Previous uuid creation time
  var _lastMSecs = 0, _lastNSecs = 0;

  // See https://github.com/broofa/node-uuid for API details
  function v1(options, buf, offset) {
    var i = buf && offset || 0;
    var b = buf || [];

    options = options || {};

    var clockseq = options.clockseq != null ? options.clockseq : _clockseq;

    // UUID timestamps are 100 nano-second units since the Gregorian epoch,
    // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
    // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
    // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.
    var msecs = options.msecs != null ? options.msecs : new Date().getTime();

    // Per 4.2.1.2, use count of uuid's generated during the current clock
    // cycle to simulate higher resolution clock
    var nsecs = options.nsecs != null ? options.nsecs : _lastNSecs + 1;

    // Time since last uuid creation (in msecs)
    var dt = (msecs - _lastMSecs) + (nsecs - _lastNSecs)/10000;

    // Per 4.2.1.2, Bump clockseq on clock regression
    if (dt < 0 && options.clockseq == null) {
      clockseq = clockseq + 1 & 0x3fff;
    }

    // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
    // time interval
    if ((dt < 0 || msecs > _lastMSecs) && options.nsecs == null) {
      nsecs = 0;
    }

    // Per 4.2.1.2 Throw error if too many uuids are requested
    if (nsecs >= 10000) {
      throw new Error('uuid.v1(): Can\'t create more than 10M uuids/sec');
    }

    _lastMSecs = msecs;
    _lastNSecs = nsecs;
    _clockseq = clockseq;

    // Per 4.1.4 - Convert from unix epoch to Gregorian epoch
    msecs += 12219292800000;

    // `time_low`
    var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
    b[i++] = tl >>> 24 & 0xff;
    b[i++] = tl >>> 16 & 0xff;
    b[i++] = tl >>> 8 & 0xff;
    b[i++] = tl & 0xff;

    // `time_mid`
    var tmh = (msecs / 0x100000000 * 10000) & 0xfffffff;
    b[i++] = tmh >>> 8 & 0xff;
    b[i++] = tmh & 0xff;

    // `time_high_and_version`
    b[i++] = tmh >>> 24 & 0xf | 0x10; // include version
    b[i++] = tmh >>> 16 & 0xff;

    // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
    b[i++] = clockseq >>> 8 | 0x80;

    // `clock_seq_low`
    b[i++] = clockseq & 0xff;

    // `node`
    var node = options.node || _nodeId;
    for (var n = 0; n < 6; n++) {
      b[i + n] = node[n];
    }

    return buf ? buf : unparse(b);
  }

  // **`v4()` - Generate random UUID**

  // See https://github.com/broofa/node-uuid for API details
  function v4(options, buf, offset) {
    // Deprecated - 'format' argument, as supported in v1.2
    var i = buf && offset || 0;

    if (typeof(options) == 'string') {
      buf = options == 'binary' ? new BufferClass(16) : null;
      options = null;
    }
    options = options || {};

    var rnds = options.random || (options.rng || _rng)();

    // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
    rnds[6] = (rnds[6] & 0x0f) | 0x40;
    rnds[8] = (rnds[8] & 0x3f) | 0x80;

    // Copy bytes to buffer, if provided
    if (buf) {
      for (var ii = 0; ii < 16; ii++) {
        buf[i + ii] = rnds[ii];
      }
    }

    return buf || unparse(rnds);
  }

  // Export public API
  var uuid = v4;
  uuid.v1 = v1;
  uuid.v4 = v4;
  uuid.parse = parse;
  uuid.unparse = unparse;
  uuid.BufferClass = BufferClass;

  if (true) {
    // Publish as AMD module
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {return uuid;}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var _previousRoot; }
}).call(this);


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./src/adapters.coffee":
/*!*****************************!*\
  !*** ./src/adapters.coffee ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Adapters, Storage, utils;
utils = __webpack_require__(/*! ./utils */ "./src/utils.coffee");
Storage = __webpack_require__(/*! ./storage */ "./src/storage.coffee");

Adapters = function () {
  var Adapters = function Adapters() {
    _classCallCheck(this, Adapters);
  };

  ; //# Adapter for using the gimel backend. See https://github.com/Alephbet/gimel
  //# uses jQuery to send data if `$.ajax` is found. Falls back on plain js xhr
  //# params:
  //# - url: Gimel track URL to post events to
  //# - namepsace: namespace for Gimel (allows setting different environments etc)
  //# - storage (optional) - storage adapter for the queue

  Adapters.GimelAdapter = function () {
    var GimelAdapter =
    /*#__PURE__*/
    function () {
      function GimelAdapter(url, namespace) {
        var storage = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Adapters.LocalStorageAdapter;

        _classCallCheck(this, GimelAdapter);

        this._storage = storage;
        this.url = url;
        this.namespace = namespace;
        this._queue = JSON.parse(this._storage.get(this.queue_name) || '[]');

        this._flush();
      }

      _createClass(GimelAdapter, [{
        key: "_remove_quuid",
        value: function _remove_quuid(quuid) {
          var _this = this;

          return function (err, res) {
            if (err) {
              return;
            }

            utils.remove(_this._queue, function (el) {
              return el.properties._quuid === quuid;
            });
            return _this._storage.set(_this.queue_name, JSON.stringify(_this._queue));
          };
        }
      }, {
        key: "_jquery_get",
        value: function _jquery_get(url, data, callback) {
          utils.log('send request using jQuery');
          return window.jQuery.ajax({
            method: 'GET',
            url: url,
            data: data,
            success: callback
          });
        }
      }, {
        key: "_plain_js_get",
        value: function _plain_js_get(url, data, callback) {
          var k, params, v, xhr;
          utils.log('fallback on plain js xhr');
          xhr = new XMLHttpRequest();

          params = function () {
            var results;
            results = [];

            for (k in data) {
              v = data[k];
              results.push("".concat(encodeURIComponent(k), "=").concat(encodeURIComponent(v)));
            }

            return results;
          }();

          params = params.join('&').replace(/%20/g, '+');
          xhr.open('GET', "".concat(url, "?").concat(params));

          xhr.onload = function () {
            if (xhr.status === 200) {
              return callback();
            }
          };

          return xhr.send();
        }
      }, {
        key: "_ajax_get",
        value: function _ajax_get(url, data, callback) {
          var ref;

          if ((ref = window.jQuery) != null ? ref.ajax : void 0) {
            return this._jquery_get(url, data, callback);
          } else {
            return this._plain_js_get(url, data, callback);
          }
        }
      }, {
        key: "_flush",
        value: function _flush() {
          var callback, i, item, len, ref, results;
          ref = this._queue;
          results = [];

          for (i = 0, len = ref.length; i < len; i++) {
            item = ref[i];
            callback = this._remove_quuid(item.properties._quuid);

            this._ajax_get(this.url, utils.omit(item.properties, '_quuid'), callback);

            results.push(null);
          }

          return results;
        }
      }, {
        key: "_user_uuid",
        value: function _user_uuid(experiment, goal) {
          if (!experiment.user_id) {
            return utils.uuid();
          }

          if (!goal.unique) {
            // if goal is not unique, we track it every time. return a new random uuid
            return utils.uuid();
          } // for a given user id, namespace and experiment, the uuid will always be the same
          // this avoids counting goals twice for the same user across different devices


          return utils.sha1("".concat(this.namespace, ".").concat(experiment.name, ".").concat(experiment.user_id));
        }
      }, {
        key: "_track",
        value: function _track(experiment, variant, goal) {
          utils.log("Persistent Queue Gimel track: ".concat(this.namespace, ", ").concat(experiment.name, ", ").concat(variant, ", ").concat(goal.name));

          if (this._queue.length > 100) {
            this._queue.shift();
          }

          this._queue.push({
            properties: {
              experiment: experiment.name,
              _quuid: utils.uuid(),
              // queue uuid (used only internally)
              uuid: this._user_uuid(experiment, goal),
              variant: variant,
              event: goal.name,
              namespace: this.namespace
            }
          });

          this._storage.set(this.queue_name, JSON.stringify(this._queue));

          return this._flush();
        }
      }, {
        key: "experiment_start",
        value: function experiment_start(experiment, variant) {
          return this._track(experiment, variant, {
            name: 'participate',
            unique: true
          });
        }
      }, {
        key: "goal_complete",
        value: function goal_complete(experiment, variant, goal_name, props) {
          return this._track(experiment, variant, utils.defaults({
            name: goal_name
          }, props));
        }
      }]);

      return GimelAdapter;
    }();

    ;
    GimelAdapter.prototype.queue_name = '_gimel_queue';
    return GimelAdapter;
  }.call(this);

  Adapters.PersistentQueueGoogleAnalyticsAdapter = function () {
    var PersistentQueueGoogleAnalyticsAdapter =
    /*#__PURE__*/
    function () {
      function PersistentQueueGoogleAnalyticsAdapter() {
        var storage = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Adapters.LocalStorageAdapter;

        _classCallCheck(this, PersistentQueueGoogleAnalyticsAdapter);

        this._storage = storage;
        this._queue = JSON.parse(this._storage.get(this.queue_name) || '[]');

        this._flush();
      }

      _createClass(PersistentQueueGoogleAnalyticsAdapter, [{
        key: "_remove_uuid",
        value: function _remove_uuid(uuid) {
          var _this2 = this;

          return function () {
            utils.remove(_this2._queue, function (el) {
              return el.uuid === uuid;
            });
            return _this2._storage.set(_this2.queue_name, JSON.stringify(_this2._queue));
          };
        }
      }, {
        key: "_flush",
        value: function _flush() {
          var callback, i, item, len, ref, results;

          if (typeof ga !== 'function') {
            throw new Error('ga not defined. Please make sure your Universal analytics is set up correctly');
          }

          ref = this._queue;
          results = [];

          for (i = 0, len = ref.length; i < len; i++) {
            item = ref[i];
            callback = this._remove_uuid(item.uuid);
            results.push(ga('send', 'event', item.category, item.action, item.label, {
              'hitCallback': callback,
              'nonInteraction': 1
            }));
          }

          return results;
        }
      }, {
        key: "_track",
        value: function _track(category, action, label) {
          utils.log("Persistent Queue Google Universal Analytics track: ".concat(category, ", ").concat(action, ", ").concat(label));

          if (this._queue.length > 100) {
            this._queue.shift();
          }

          this._queue.push({
            uuid: utils.uuid(),
            category: category,
            action: action,
            label: label
          });

          this._storage.set(this.queue_name, JSON.stringify(this._queue));

          return this._flush();
        }
      }, {
        key: "experiment_start",
        value: function experiment_start(experiment, variant) {
          return this._track(this.namespace, "".concat(experiment.name, " | ").concat(variant), 'Visitors');
        }
      }, {
        key: "goal_complete",
        value: function goal_complete(experiment, variant, goal_name, _props) {
          return this._track(this.namespace, "".concat(experiment.name, " | ").concat(variant), goal_name);
        }
      }]);

      return PersistentQueueGoogleAnalyticsAdapter;
    }();

    ;
    PersistentQueueGoogleAnalyticsAdapter.prototype.namespace = 'alephbet';
    PersistentQueueGoogleAnalyticsAdapter.prototype.queue_name = '_ga_queue';
    return PersistentQueueGoogleAnalyticsAdapter;
  }.call(this);

  Adapters.PersistentQueueKeenAdapter = function () {
    var PersistentQueueKeenAdapter =
    /*#__PURE__*/
    function () {
      function PersistentQueueKeenAdapter(keen_client) {
        var storage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Adapters.LocalStorageAdapter;

        _classCallCheck(this, PersistentQueueKeenAdapter);

        this.client = keen_client;
        this._storage = storage;
        this._queue = JSON.parse(this._storage.get(this.queue_name) || '[]');

        this._flush();
      }

      _createClass(PersistentQueueKeenAdapter, [{
        key: "_remove_quuid",
        value: function _remove_quuid(quuid) {
          var _this3 = this;

          return function (err, res) {
            if (err) {
              return;
            }

            utils.remove(_this3._queue, function (el) {
              return el.properties._quuid === quuid;
            });
            return _this3._storage.set(_this3.queue_name, JSON.stringify(_this3._queue));
          };
        }
      }, {
        key: "_flush",
        value: function _flush() {
          var callback, i, item, len, ref, results;
          ref = this._queue;
          results = [];

          for (i = 0, len = ref.length; i < len; i++) {
            item = ref[i];
            callback = this._remove_quuid(item.properties._quuid);
            results.push(this.client.addEvent(item.experiment_name, utils.omit(item.properties, '_quuid'), callback));
          }

          return results;
        }
      }, {
        key: "_user_uuid",
        value: function _user_uuid(experiment, goal) {
          if (!experiment.user_id) {
            return utils.uuid();
          }

          if (!goal.unique) {
            // if goal is not unique, we track it every time. return a new random uuid
            return utils.uuid();
          } // for a given user id, namespace and experiment, the uuid will always be the same
          // this avoids counting goals twice for the same user across different devices


          return utils.sha1("".concat(this.namespace, ".").concat(experiment.name, ".").concat(experiment.user_id));
        }
      }, {
        key: "_track",
        value: function _track(experiment, variant, goal) {
          utils.log("Persistent Queue Keen track: ".concat(experiment.name, ", ").concat(variant, ", ").concat(event));

          if (this._queue.length > 100) {
            this._queue.shift();
          }

          this._queue.push({
            experiment_name: experiment.name,
            properties: {
              _quuid: utils.uuid(),
              // queue uuid (used only internally)
              uuid: this._user_uuid(experiment, goal),
              variant: variant,
              event: goal.name
            }
          });

          this._storage.set(this.queue_name, JSON.stringify(this._queue));

          return this._flush();
        }
      }, {
        key: "experiment_start",
        value: function experiment_start(experiment, variant) {
          return this._track(experiment, variant, {
            name: 'participate',
            unique: true
          });
        }
      }, {
        key: "goal_complete",
        value: function goal_complete(experiment, variant, goal_name, props) {
          return this._track(experiment, variant, utils.defaults({
            name: goal_name
          }, props));
        }
      }]);

      return PersistentQueueKeenAdapter;
    }();

    ;
    PersistentQueueKeenAdapter.prototype.queue_name = '_keen_queue';
    return PersistentQueueKeenAdapter;
  }.call(this);

  Adapters.GoogleUniversalAnalyticsAdapter = function () {
    var GoogleUniversalAnalyticsAdapter =
    /*#__PURE__*/
    function () {
      function GoogleUniversalAnalyticsAdapter() {
        _classCallCheck(this, GoogleUniversalAnalyticsAdapter);
      }

      _createClass(GoogleUniversalAnalyticsAdapter, null, [{
        key: "_track",
        value: function _track(category, action, label) {
          utils.log("Google Universal Analytics track: ".concat(category, ", ").concat(action, ", ").concat(label));

          if (typeof ga !== 'function') {
            throw new Error('ga not defined. Please make sure your Universal analytics is set up correctly');
          }

          return ga('send', 'event', category, action, label, {
            'nonInteraction': 1
          });
        }
      }, {
        key: "experiment_start",
        value: function experiment_start(experiment, variant) {
          return this._track(this.namespace, "".concat(experiment.name, " | ").concat(variant), 'Visitors');
        }
      }, {
        key: "goal_complete",
        value: function goal_complete(experiment, variant, goal_name, _props) {
          return this._track(this.namespace, "".concat(experiment.name, " | ").concat(variant), goal_name);
        }
      }]);

      return GoogleUniversalAnalyticsAdapter;
    }();

    ;
    GoogleUniversalAnalyticsAdapter.namespace = 'alephbet';
    return GoogleUniversalAnalyticsAdapter;
  }.call(this);

  Adapters.LocalStorageAdapter = function () {
    var LocalStorageAdapter =
    /*#__PURE__*/
    function () {
      function LocalStorageAdapter() {
        _classCallCheck(this, LocalStorageAdapter);
      }

      _createClass(LocalStorageAdapter, null, [{
        key: "set",
        value: function set(key, value) {
          return new Storage(this.namespace).set(key, value);
        }
      }, {
        key: "get",
        value: function get(key) {
          return new Storage(this.namespace).get(key);
        }
      }]);

      return LocalStorageAdapter;
    }();

    ;
    LocalStorageAdapter.namespace = 'alephbet';
    return LocalStorageAdapter;
  }.call(this);

  return Adapters;
}.call(void 0);

module.exports = Adapters;

/***/ }),

/***/ "./src/alephbet.coffee":
/*!*****************************!*\
  !*** ./src/alephbet.coffee ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AlephBet, adapters, options, utils;
utils = __webpack_require__(/*! ./utils */ "./src/utils.coffee");
adapters = __webpack_require__(/*! ./adapters */ "./src/adapters.coffee");
options = __webpack_require__(/*! ./options */ "./src/options.coffee");

AlephBet = function () {
  var AlephBet = function AlephBet() {
    _classCallCheck(this, AlephBet);
  };

  ;
  AlephBet.options = options;
  AlephBet.utils = utils;
  AlephBet.GimelAdapter = adapters.GimelAdapter;
  AlephBet.PersistentQueueGoogleAnalyticsAdapter = adapters.PersistentQueueGoogleAnalyticsAdapter;
  AlephBet.PersistentQueueKeenAdapter = adapters.PersistentQueueKeenAdapter;

  AlephBet.Experiment = function () {
    var _run, _validate;

    var Experiment =
    /*#__PURE__*/
    function () {
      function Experiment() {
        var options1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, Experiment);

        this.options = options1;
        utils.defaults(this.options, Experiment._options);

        _validate.call(this);

        this.name = this.options.name;
        this.variants = this.options.variants;
        this.user_id = this.options.user_id;
        this.variant_names = utils.keys(this.variants);

        _run.call(this);
      }

      _createClass(Experiment, [{
        key: "run",
        value: function run() {
          var variant;
          utils.log("running with options: ".concat(JSON.stringify(this.options)));

          if (variant = this.get_stored_variant()) {
            // a variant was already chosen. activate it
            utils.log("".concat(variant, " active"));
            return this.activate_variant(variant);
          } else {
            return this.conditionally_activate_variant();
          }
        }
      }, {
        key: "activate_variant",
        value: function activate_variant(variant) {
          var ref;

          if ((ref = this.variants[variant]) != null) {
            ref.activate(this);
          }

          return this.storage().set("".concat(this.options.name, ":variant"), variant);
        } // if experiment conditions match, pick and activate a variant, track experiment start

      }, {
        key: "conditionally_activate_variant",
        value: function conditionally_activate_variant() {
          var variant;

          if (!this.options.trigger()) {
            return;
          }

          utils.log('trigger set');

          if (!this.in_sample()) {
            return;
          }

          utils.log('in sample');
          variant = this.pick_variant();
          this.tracking().experiment_start(this, variant);
          return this.activate_variant(variant);
        }
      }, {
        key: "goal_complete",
        value: function goal_complete(goal_name) {
          var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          var variant;
          utils.defaults(props, {
            unique: true
          });

          if (props.unique && this.storage().get("".concat(this.options.name, ":").concat(goal_name))) {
            return;
          }

          variant = this.get_stored_variant();

          if (!variant) {
            return;
          }

          if (props.unique) {
            this.storage().set("".concat(this.options.name, ":").concat(goal_name), true);
          }

          utils.log("experiment: ".concat(this.options.name, " variant:").concat(variant, " goal:").concat(goal_name, " complete"));
          return this.tracking().goal_complete(this, variant, goal_name, props);
        }
      }, {
        key: "get_stored_variant",
        value: function get_stored_variant() {
          return this.storage().get("".concat(this.options.name, ":variant"));
        }
      }, {
        key: "pick_variant",
        value: function pick_variant() {
          var all_variants_have_weights;
          all_variants_have_weights = utils.check_weights(this.variants);
          utils.log("all variants have weights: ".concat(all_variants_have_weights));

          if (all_variants_have_weights) {
            return this.pick_weighted_variant();
          } else {
            return this.pick_unweighted_variant();
          }
        }
      }, {
        key: "pick_weighted_variant",
        value: function pick_weighted_variant() {
          var key, ref, value, weighted_index, weights_sum; // Choosing a weighted variant:
          // For A, B, C with weights 1, 3, 6
          // variants = A, B, C
          // weights = 1, 3, 6
          // weights_sum = 10 (sum of weights)
          // weighted_index = 2.1 (random number between 0 and weight sum)
          // ABBBCCCCCC
          // ==^
          // Select B

          weights_sum = utils.sum_weights(this.variants);
          weighted_index = Math.ceil(this._random('variant') * weights_sum);
          ref = this.variants;

          for (key in ref) {
            value = ref[key]; // then we are substracting variant weight from selected number
            // and it it reaches 0 (or below) we are selecting this variant

            weighted_index -= value.weight;

            if (weighted_index <= 0) {
              return key;
            }
          }
        }
      }, {
        key: "pick_unweighted_variant",
        value: function pick_unweighted_variant() {
          var chosen_partition, partitions, variant;
          partitions = 1.0 / this.variant_names.length;
          chosen_partition = Math.floor(this._random('variant') / partitions);
          variant = this.variant_names[chosen_partition];
          utils.log("".concat(variant, " picked"));
          return variant;
        }
      }, {
        key: "in_sample",
        value: function in_sample() {
          var active;
          active = this.storage().get("".concat(this.options.name, ":in_sample"));

          if (typeof active !== 'undefined') {
            return active;
          }

          active = this._random('sample') <= this.options.sample;
          this.storage().set("".concat(this.options.name, ":in_sample"), active);
          return active;
        }
      }, {
        key: "_random",
        value: function _random(salt) {
          var seed;

          if (!this.user_id) {
            return utils.random();
          }

          seed = "".concat(this.name, ".").concat(salt, ".").concat(this.user_id);
          return utils.random(seed);
        }
      }, {
        key: "add_goal",
        value: function add_goal(goal) {
          return goal.add_experiment(this);
        }
      }, {
        key: "add_goals",
        value: function add_goals(goals) {
          var goal, i, len, results;
          results = [];

          for (i = 0, len = goals.length; i < len; i++) {
            goal = goals[i];
            results.push(this.add_goal(goal));
          }

          return results;
        }
      }, {
        key: "storage",
        value: function storage() {
          return this.options.storage_adapter;
        }
      }, {
        key: "tracking",
        value: function tracking() {
          return this.options.tracking_adapter;
        }
      }]);

      return Experiment;
    }();

    ;
    Experiment._options = {
      name: null,
      variants: null,
      user_id: null,
      sample: 1.0,
      trigger: function trigger() {
        return true;
      },
      tracking_adapter: adapters.GoogleUniversalAnalyticsAdapter,
      storage_adapter: adapters.LocalStorageAdapter
    };

    _run = function _run() {
      return this.run();
    };

    _validate = function _validate() {
      var all_variants_have_weights;

      if (this.options.name === null) {
        throw new Error('an experiment name must be specified');
      }

      if (this.options.variants === null) {
        throw new Error('variants must be provided');
      }

      if (typeof this.options.trigger !== 'function') {
        throw new Error('trigger must be a function');
      }

      all_variants_have_weights = utils.validate_weights(this.options.variants);

      if (!all_variants_have_weights) {
        throw new Error('not all variants have weights');
      }
    };

    return Experiment;
  }.call(this);

  AlephBet.Goal =
  /*#__PURE__*/
  function () {
    function Goal(name) {
      var props1 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, Goal);

      this.name = name;
      this.props = props1;
      utils.defaults(this.props, {
        unique: true
      });
      this.experiments = [];
    }

    _createClass(Goal, [{
      key: "add_experiment",
      value: function add_experiment(experiment) {
        return this.experiments.push(experiment);
      }
    }, {
      key: "add_experiments",
      value: function add_experiments(experiments) {
        var experiment, i, len, results;
        results = [];

        for (i = 0, len = experiments.length; i < len; i++) {
          experiment = experiments[i];
          results.push(this.add_experiment(experiment));
        }

        return results;
      }
    }, {
      key: "complete",
      value: function complete() {
        var experiment, i, len, ref, results;
        ref = this.experiments;
        results = [];

        for (i = 0, len = ref.length; i < len; i++) {
          experiment = ref[i];
          results.push(experiment.goal_complete(this.name, this.props));
        }

        return results;
      }
    }]);

    return Goal;
  }();

  return AlephBet;
}.call(void 0);

module.exports = AlephBet;

/***/ }),

/***/ "./src/options.coffee":
/*!****************************!*\
  !*** ./src/options.coffee ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  debug: false
};

/***/ }),

/***/ "./src/storage.coffee":
/*!****************************!*\
  !*** ./src/storage.coffee ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Basil, Storage, store;
Basil = __webpack_require__(/*! basil.js */ "./node_modules/basil.js/build/basil.js");
store = new Basil({
  namespace: null
}); // a thin wrapper around basil.js for easy swapping

Storage =
/*#__PURE__*/
function () {
  function Storage() {
    var namespace = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'alephbet';

    _classCallCheck(this, Storage);

    this.namespace = namespace;
    this.storage = store.get(this.namespace) || {};
  }

  _createClass(Storage, [{
    key: "set",
    value: function set(key, value) {
      this.storage[key] = value;
      store.set(this.namespace, this.storage);
      return value;
    }
  }, {
    key: "get",
    value: function get(key) {
      return this.storage[key];
    }
  }]);

  return Storage;
}(); // store.get("#{@namespace}:#{key}")


module.exports = Storage;

/***/ }),

/***/ "./src/utils.coffee":
/*!**************************!*\
  !*** ./src/utils.coffee ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// NOTE: using a custom build of lodash, to save space
var Utils, _, options, _sha, uuid;

_ = __webpack_require__(/*! ../vendor/lodash.custom.min */ "./vendor/lodash.custom.min.js");
uuid = __webpack_require__(/*! node-uuid */ "./node_modules/node-uuid/uuid.js");
_sha = __webpack_require__(/*! crypto-js/sha1 */ "./node_modules/crypto-js/sha1.js");
options = __webpack_require__(/*! ./options */ "./src/options.coffee");

Utils = function () {
  var Utils =
  /*#__PURE__*/
  function () {
    function Utils() {
      _classCallCheck(this, Utils);
    }

    _createClass(Utils, null, [{
      key: "log",
      value: function log(message) {
        if (options.debug) {
          return console.log(message);
        }
      }
    }, {
      key: "sha1",
      value: function sha1(text) {
        return _sha(text).toString();
      }
    }, {
      key: "random",
      value: function random(seed) {
        if (!seed) {
          return Math.random();
        } // a MUCH simplified version inspired by PlanOut.js


        return parseInt(this.sha1(seed).substr(0, 13), 16) / 0xFFFFFFFFFFFFF;
      }
    }, {
      key: "check_weights",
      value: function check_weights(variants) {
        var contains_weight, key, value;
        contains_weight = [];

        for (key in variants) {
          value = variants[key];
          contains_weight.push(value.weight != null);
        }

        return contains_weight.every(function (has_weight) {
          return has_weight;
        });
      }
    }, {
      key: "sum_weights",
      value: function sum_weights(variants) {
        var key, sum, value;
        sum = 0;

        for (key in variants) {
          value = variants[key];
          sum += value.weight || 0;
        }

        return sum;
      }
    }, {
      key: "validate_weights",
      value: function validate_weights(variants) {
        var contains_weight, key, value;
        contains_weight = [];

        for (key in variants) {
          value = variants[key];
          contains_weight.push(value.weight != null);
        }

        return contains_weight.every(function (has_weight) {
          return has_weight || contains_weight.every(function (has_weight) {
            return !has_weight;
          });
        });
      }
    }]);

    return Utils;
  }();

  ;
  Utils.defaults = _.defaults;
  Utils.keys = _.keys;
  Utils.remove = _.remove;
  Utils.omit = _.omit;
  Utils.uuid = uuid.v4;
  return Utils;
}.call(void 0);

module.exports = Utils;

/***/ }),

/***/ "./vendor/lodash.custom.min.js":
/*!*************************************!*\
  !*** ./vendor/lodash.custom.min.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, module) {/**
 * @license
 * Lodash (Custom Build) lodash.com/license | Underscore.js 1.8.3 underscorejs.org/LICENSE
 * Build: `lodash -p include="keys,defaults,remove,omit" exports="node" -o ./vendor/lodash.custom.min.js`
 */
;(function(){function t(t,e,r){switch(r.length){case 0:return t.call(e);case 1:return t.call(e,r[0]);case 2:return t.call(e,r[0],r[1]);case 3:return t.call(e,r[0],r[1],r[2])}return t.apply(e,r)}function e(t,e){for(var r=-1,n=null==t?0:t.length;++r<n&&false!==e(t[r],r,t););}function r(t,e){for(var r=-1,n=null==t?0:t.length,o=0,c=[];++r<n;){var u=t[r];e(u,r,t)&&(c[o++]=u)}return c}function n(t,e){for(var r=-1,n=null==t?0:t.length,o=Array(n);++r<n;)o[r]=e(t[r],r,t);return o}function o(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];
return t}function c(t,e){for(var r=-1,n=null==t?0:t.length;++r<n;)if(e(t[r],r,t))return true;return false}function u(t){return function(e){return null==e?Bt:e[t]}}function a(t){return function(e){return t(e)}}function i(t){var e=-1,r=Array(t.size);return t.forEach(function(t,n){r[++e]=[n,t]}),r}function f(t){var e=Object;return function(r){return t(e(r))}}function l(t){var e=-1,r=Array(t.size);return t.forEach(function(t){r[++e]=t}),r}function s(){}function b(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){
var n=t[e];this.set(n[0],n[1])}}function h(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function p(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function y(t){var e=-1,r=null==t?0:t.length;for(this.__data__=new p;++e<r;)this.add(t[e])}function j(t){this.size=(this.__data__=new h(t)).size}function _(t,e){var r=Ke(t),n=!r&&Je(t),o=!r&&!n&&Qe(t),c=!r&&!n&&!o&&Ze(t);if(r=r||n||o||c){for(var n=t.length,u=String,a=-1,i=Array(n);++a<n;)i[a]=u(a);
n=i}else n=[];var f,u=n.length;for(f in t)!e&&!ue.call(t,f)||r&&("length"==f||o&&("offset"==f||"parent"==f)||c&&("buffer"==f||"byteLength"==f||"byteOffset"==f)||ct(f,u))||n.push(f);return n}function g(t,e,r){var n=t[e];ue.call(t,e)&&yt(n,r)&&(r!==Bt||e in t)||w(t,e,r)}function v(t,e){for(var r=t.length;r--;)if(yt(t[r][0],e))return r;return-1}function d(t,e){return t&&W(e,zt(e),t)}function A(t,e){return t&&W(e,kt(e),t)}function w(t,e,r){"__proto__"==e&&Ae?Ae(t,e,{configurable:true,enumerable:true,value:r,
writable:true}):t[e]=r}function m(t,r,n,o,c,u){var a,i=1&r,f=2&r,l=4&r;if(n&&(a=c?n(t,o,c,u):n(t)),a!==Bt)return a;if(!vt(t))return t;if(o=Ke(t)){if(a=rt(t),!i)return N(t,a)}else{var s=Ge(t),b="[object Function]"==s||"[object GeneratorFunction]"==s;if(Qe(t))return R(t,i);if("[object Object]"==s||"[object Arguments]"==s||b&&!c){if(a=f||b?{}:typeof t.constructor!="function"||at(t)?{}:Re(ye(t)),!i)return f?q(t,A(a,t)):G(t,d(a,t))}else{if(!Wt[s])return c?t:{};a=nt(t,s,i)}}if(u||(u=new j),c=u.get(t))return c;
if(u.set(t,a),Ye(t))return t.forEach(function(e){a.add(m(e,r,n,e,t,u))}),a;if(Xe(t))return t.forEach(function(e,o){a.set(o,m(e,r,n,o,t,u))}),a;var f=l?f?X:Q:f?kt:zt,h=o?Bt:f(t);return e(h||t,function(e,o){h&&(o=e,e=t[o]),g(a,o,m(e,r,n,o,t,u))}),a}function O(t,e,r,n,c){var u=-1,a=t.length;for(r||(r=ot),c||(c=[]);++u<a;){var i=t[u];0<e&&r(i)?1<e?O(i,e-1,r,n,c):o(c,i):n||(c[c.length]=i)}return c}function S(t,e){e=V(e,t);for(var r=0,n=e.length;null!=t&&r<n;)t=t[lt(e[r++])];return r&&r==n?t:Bt}function z(t,e,r){
return e=e(t),Ke(t)?e:o(e,r(t))}function k(t){if(null==t)t=t===Bt?"[object Undefined]":"[object Null]";else if(de&&de in Object(t)){var e=ue.call(t,de),r=t[de];try{t[de]=Bt;var n=true}catch(t){}var o=ie.call(t);n&&(e?t[de]=r:delete t[de]),t=o}else t=ie.call(t);return t}function x(t){return dt(t)&&"[object Arguments]"==k(t)}function E(t,e,r,n,o){if(t===e)e=true;else if(null==t||null==e||!dt(t)&&!dt(e))e=t!==t&&e!==e;else t:{var c=Ke(t),u=Ke(e),a=c?"[object Array]":Ge(t),i=u?"[object Array]":Ge(e),a="[object Arguments]"==a?"[object Object]":a,i="[object Arguments]"==i?"[object Object]":i,f="[object Object]"==a,u="[object Object]"==i;
if((i=a==i)&&Qe(t)){if(!Qe(e)){e=false;break t}c=true,f=false}if(i&&!f)o||(o=new j),e=c||Ze(t)?J(t,e,r,n,E,o):K(t,e,a,r,n,E,o);else{if(!(1&r)&&(c=f&&ue.call(t,"__wrapped__"),a=u&&ue.call(e,"__wrapped__"),c||a)){t=c?t.value():t,e=a?e.value():e,o||(o=new j),e=E(t,e,r,n,o);break t}if(i)e:if(o||(o=new j),c=1&r,a=Q(t),u=a.length,i=Q(e).length,u==i||c){for(f=u;f--;){var l=a[f];if(!(c?l in e:ue.call(e,l))){e=false;break e}}if((i=o.get(t))&&o.get(e))e=i==e;else{i=true,o.set(t,e),o.set(e,t);for(var s=c;++f<u;){var l=a[f],b=t[l],h=e[l];
if(n)var p=c?n(h,b,l,e,t,o):n(b,h,l,t,e,o);if(p===Bt?b!==h&&!E(b,h,r,n,o):!p){i=false;break}s||(s="constructor"==l)}i&&!s&&(r=t.constructor,n=e.constructor,r!=n&&"constructor"in t&&"constructor"in e&&!(typeof r=="function"&&r instanceof r&&typeof n=="function"&&n instanceof n)&&(i=false)),o.delete(t),o.delete(e),e=i}}else e=false;else e=false}}return e}function F(t){return dt(t)&&"[object Map]"==Ge(t)}function I(t,e){var r=e.length,n=r;if(null==t)return!n;for(t=Object(t);r--;){var o=e[r];if(o[2]?o[1]!==t[o[0]]:!(o[0]in t))return false;
}for(;++r<n;){var o=e[r],c=o[0],u=t[c],a=o[1];if(o[2]){if(u===Bt&&!(c in t))return false}else if(o=new j,void 0===Bt?!E(a,u,3,void 0,o):1)return false}return true}function M(t){return dt(t)&&"[object Set]"==Ge(t)}function U(t){return dt(t)&&gt(t.length)&&!!Nt[k(t)]}function B(t){return typeof t=="function"?t:null==t?Et:typeof t=="object"?Ke(t)?P(t[0],t[1]):D(t):It(t)}function D(t){var e=tt(t);return 1==e.length&&e[0][2]?it(e[0][0],e[0][1]):function(r){return r===t||I(r,e)}}function P(t,e){return ut(t)&&e===e&&!vt(e)?it(lt(t),e):function(r){
var n=Ot(r,t);return n===Bt&&n===e?St(r,t):E(e,n,3)}}function $(t){return function(e){return S(e,t)}}function L(t){if(typeof t=="string")return t;if(Ke(t))return n(t,L)+"";if(wt(t))return Ve?Ve.call(t):"";var e=t+"";return"0"==e&&1/t==-Dt?"-0":e}function C(t,e){e=V(e,t);var r;if(2>e.length)r=t;else{r=e;var n=0,o=-1,c=-1,u=r.length;for(0>n&&(n=-n>u?0:u+n),o=o>u?u:o,0>o&&(o+=u),u=n>o?0:o-n>>>0,n>>>=0,o=Array(u);++c<u;)o[c]=r[c+n];r=S(t,o)}t=r,null==t||delete t[lt(ht(e))]}function V(t,e){return Ke(t)?t:ut(t,e)?[t]:He(mt(t));
}function R(t,e){if(e)return t.slice();var r=t.length,r=pe?pe(r):new t.constructor(r);return t.copy(r),r}function T(t){var e=new t.constructor(t.byteLength);return new he(e).set(new he(t)),e}function N(t,e){var r=-1,n=t.length;for(e||(e=Array(n));++r<n;)e[r]=t[r];return e}function W(t,e,r){var n=!r;r||(r={});for(var o=-1,c=e.length;++o<c;){var u=e[o],a=Bt;a===Bt&&(a=t[u]),n?w(r,u,a):g(r,u,a)}return r}function G(t,e){return W(t,Ne(t),e)}function q(t,e){return W(t,We(t),e)}function H(t){return At(t)?Bt:t;
}function J(t,e,r,n,o,u){var a=1&r,i=t.length,f=e.length;if(i!=f&&!(a&&f>i))return false;if((f=u.get(t))&&u.get(e))return f==e;var f=-1,l=true,s=2&r?new y:Bt;for(u.set(t,e),u.set(e,t);++f<i;){var b=t[f],h=e[f];if(n)var p=a?n(h,b,f,e,t,u):n(b,h,f,t,e,u);if(p!==Bt){if(p)continue;l=false;break}if(s){if(!c(e,function(t,e){if(!s.has(e)&&(b===t||o(b,t,r,n,u)))return s.push(e)})){l=false;break}}else if(b!==h&&!o(b,h,r,n,u)){l=false;break}}return u.delete(t),u.delete(e),l}function K(t,e,r,n,o,c,u){switch(r){case"[object DataView]":
if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)break;t=t.buffer,e=e.buffer;case"[object ArrayBuffer]":if(t.byteLength!=e.byteLength||!c(new he(t),new he(e)))break;return true;case"[object Boolean]":case"[object Date]":case"[object Number]":return yt(+t,+e);case"[object Error]":return t.name==e.name&&t.message==e.message;case"[object RegExp]":case"[object String]":return t==e+"";case"[object Map]":var a=i;case"[object Set]":if(a||(a=l),t.size!=e.size&&!(1&n))break;return(r=u.get(t))?r==e:(n|=2,
u.set(t,e),e=J(a(t),a(e),n,o,c,u),u.delete(t),e);case"[object Symbol]":if(Ce)return Ce.call(t)==Ce.call(e)}return false}function Q(t){return z(t,zt,Ne)}function X(t){return z(t,kt,We)}function Y(){var t=s.iteratee||Ft,t=t===Ft?B:t;return arguments.length?t(arguments[0],arguments[1]):t}function Z(t,e){var r=t.__data__,n=typeof e;return("string"==n||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==e:null===e)?r[typeof e=="string"?"string":"hash"]:r.map}function tt(t){for(var e=zt(t),r=e.length;r--;){
var n=e[r],o=t[n];e[r]=[n,o,o===o&&!vt(o)]}return e}function et(t,e){var r=null==t?Bt:t[e];return(!vt(r)||ae&&ae in r?0:(_t(r)?le:Rt).test(st(r)))?r:Bt}function rt(t){var e=t.length,r=new t.constructor(e);return e&&"string"==typeof t[0]&&ue.call(t,"index")&&(r.index=t.index,r.input=t.input),r}function nt(t,e,r){var n=t.constructor;switch(e){case"[object ArrayBuffer]":return T(t);case"[object Boolean]":case"[object Date]":return new n(+t);case"[object DataView]":return e=r?T(t.buffer):t.buffer,new t.constructor(e,t.byteOffset,t.byteLength);
case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return e=r?T(t.buffer):t.buffer,new t.constructor(e,t.byteOffset,t.length);case"[object Map]":return new n;case"[object Number]":case"[object String]":return new n(t);case"[object RegExp]":return e=new t.constructor(t.source,Vt.exec(t)),e.lastIndex=t.lastIndex,
e;case"[object Set]":return new n;case"[object Symbol]":return Ce?Object(Ce.call(t)):{}}}function ot(t){return Ke(t)||Je(t)||!!(ve&&t&&t[ve])}function ct(t,e){var r=typeof t;return e=null==e?9007199254740991:e,!!e&&("number"==r||"symbol"!=r&&Tt.test(t))&&-1<t&&0==t%1&&t<e}function ut(t,e){if(Ke(t))return false;var r=typeof t;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=t&&!wt(t))||($t.test(t)||!Pt.test(t)||null!=e&&t in Object(e))}function at(t){var e=t&&t.constructor;return t===(typeof e=="function"&&e.prototype||ne);
}function it(t,e){return function(r){return null!=r&&(r[t]===e&&(e!==Bt||t in Object(r)))}}function ft(e,r,n){return r=Se(r===Bt?e.length-1:r,0),function(){for(var o=arguments,c=-1,u=Se(o.length-r,0),a=Array(u);++c<u;)a[c]=o[r+c];for(c=-1,u=Array(r+1);++c<r;)u[c]=o[c];return u[r]=n(a),t(e,this,u)}}function lt(t){if(typeof t=="string"||wt(t))return t;var e=t+"";return"0"==e&&1/t==-Dt?"-0":e}function st(t){if(null!=t){try{return ce.call(t)}catch(t){}return t+""}return""}function bt(t){return(null==t?0:t.length)?O(t,1):[];
}function ht(t){var e=null==t?0:t.length;return e?t[e-1]:Bt}function pt(t,e){function r(){var n=arguments,o=e?e.apply(this,n):n[0],c=r.cache;return c.has(o)?c.get(o):(n=t.apply(this,n),r.cache=c.set(o,n)||c,n)}if(typeof t!="function"||null!=e&&typeof e!="function")throw new TypeError("Expected a function");return r.cache=new(pt.Cache||p),r}function yt(t,e){return t===e||t!==t&&e!==e}function jt(t){return null!=t&&gt(t.length)&&!_t(t)}function _t(t){return!!vt(t)&&(t=k(t),"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t);
}function gt(t){return typeof t=="number"&&-1<t&&0==t%1&&9007199254740991>=t}function vt(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}function dt(t){return null!=t&&typeof t=="object"}function At(t){return!(!dt(t)||"[object Object]"!=k(t))&&(t=ye(t),null===t||(t=ue.call(t,"constructor")&&t.constructor,typeof t=="function"&&t instanceof t&&ce.call(t)==fe))}function wt(t){return typeof t=="symbol"||dt(t)&&"[object Symbol]"==k(t)}function mt(t){return null==t?"":L(t)}function Ot(t,e,r){
return t=null==t?Bt:S(t,e),t===Bt?r:t}function St(t,e){var r;if(r=null!=t){r=t;var n;n=V(e,r);for(var o=-1,c=n.length,u=false;++o<c;){var a=lt(n[o]);if(!(u=null!=r&&null!=r&&a in Object(r)))break;r=r[a]}u||++o!=c?r=u:(c=null==r?0:r.length,r=!!c&&gt(c)&&ct(a,c)&&(Ke(r)||Je(r)))}return r}function zt(t){if(jt(t))t=_(t);else if(at(t)){var e,r=[];for(e in Object(t))ue.call(t,e)&&"constructor"!=e&&r.push(e);t=r}else t=Oe(t);return t}function kt(t){if(jt(t))t=_(t,true);else if(vt(t)){var e,r=at(t),n=[];for(e in t)("constructor"!=e||!r&&ue.call(t,e))&&n.push(e);
t=n}else{if(e=[],null!=t)for(r in Object(t))e.push(r);t=e}return t}function xt(t){return function(){return t}}function Et(t){return t}function Ft(t){return B(typeof t=="function"?t:m(t,1))}function It(t){return ut(t)?u(lt(t)):$(t)}function Mt(){return[]}function Ut(){return false}var Bt,Dt=1/0,Pt=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,$t=/^\w*$/,Lt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Ct=/\\(\\)?/g,Vt=/\w*$/,Rt=/^\[object .+?Constructor\]$/,Tt=/^(?:0|[1-9]\d*)$/,Nt={};
Nt["[object Float32Array]"]=Nt["[object Float64Array]"]=Nt["[object Int8Array]"]=Nt["[object Int16Array]"]=Nt["[object Int32Array]"]=Nt["[object Uint8Array]"]=Nt["[object Uint8ClampedArray]"]=Nt["[object Uint16Array]"]=Nt["[object Uint32Array]"]=true,Nt["[object Arguments]"]=Nt["[object Array]"]=Nt["[object ArrayBuffer]"]=Nt["[object Boolean]"]=Nt["[object DataView]"]=Nt["[object Date]"]=Nt["[object Error]"]=Nt["[object Function]"]=Nt["[object Map]"]=Nt["[object Number]"]=Nt["[object Object]"]=Nt["[object RegExp]"]=Nt["[object Set]"]=Nt["[object String]"]=Nt["[object WeakMap]"]=false;
var Wt={};Wt["[object Arguments]"]=Wt["[object Array]"]=Wt["[object ArrayBuffer]"]=Wt["[object DataView]"]=Wt["[object Boolean]"]=Wt["[object Date]"]=Wt["[object Float32Array]"]=Wt["[object Float64Array]"]=Wt["[object Int8Array]"]=Wt["[object Int16Array]"]=Wt["[object Int32Array]"]=Wt["[object Map]"]=Wt["[object Number]"]=Wt["[object Object]"]=Wt["[object RegExp]"]=Wt["[object Set]"]=Wt["[object String]"]=Wt["[object Symbol]"]=Wt["[object Uint8Array]"]=Wt["[object Uint8ClampedArray]"]=Wt["[object Uint16Array]"]=Wt["[object Uint32Array]"]=true,
Wt["[object Error]"]=Wt["[object Function]"]=Wt["[object WeakMap]"]=false;var Gt,qt=typeof global=="object"&&global&&global.Object===Object&&global,Ht=typeof self=="object"&&self&&self.Object===Object&&self,Jt=qt||Ht||Function("return this")(),Kt= true&&exports&&!exports.nodeType&&exports,Qt=Kt&&typeof module=="object"&&module&&!module.nodeType&&module,Xt=Qt&&Qt.exports===Kt,Yt=Xt&&qt.process;t:{try{Gt=Yt&&Yt.binding&&Yt.binding("util");break t}catch(t){}Gt=void 0}var Zt=Gt&&Gt.isMap,te=Gt&&Gt.isSet,ee=Gt&&Gt.isTypedArray,re=Array.prototype,ne=Object.prototype,oe=Jt["__core-js_shared__"],ce=Function.prototype.toString,ue=ne.hasOwnProperty,ae=function(){
var t=/[^.]+$/.exec(oe&&oe.keys&&oe.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),ie=ne.toString,fe=ce.call(Object),le=RegExp("^"+ce.call(ue).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),se=Xt?Jt.Buffer:Bt,be=Jt.Symbol,he=Jt.Uint8Array,pe=se?se.a:Bt,ye=f(Object.getPrototypeOf),je=Object.create,_e=ne.propertyIsEnumerable,ge=re.splice,ve=be?be.isConcatSpreadable:Bt,de=be?be.toStringTag:Bt,Ae=function(){try{var t=et(Object,"defineProperty");
return t({},"",{}),t}catch(t){}}(),we=Object.getOwnPropertySymbols,me=se?se.isBuffer:Bt,Oe=f(Object.keys),Se=Math.max,ze=Date.now,ke=et(Jt,"DataView"),xe=et(Jt,"Map"),Ee=et(Jt,"Promise"),Fe=et(Jt,"Set"),Ie=et(Jt,"WeakMap"),Me=et(Object,"create"),Ue=st(ke),Be=st(xe),De=st(Ee),Pe=st(Fe),$e=st(Ie),Le=be?be.prototype:Bt,Ce=Le?Le.valueOf:Bt,Ve=Le?Le.toString:Bt,Re=function(){function t(){}return function(e){return vt(e)?je?je(e):(t.prototype=e,e=new t,t.prototype=Bt,e):{}}}();b.prototype.clear=function(){
this.__data__=Me?Me(null):{},this.size=0},b.prototype.delete=function(t){return t=this.has(t)&&delete this.__data__[t],this.size-=t?1:0,t},b.prototype.get=function(t){var e=this.__data__;return Me?(t=e[t],"__lodash_hash_undefined__"===t?Bt:t):ue.call(e,t)?e[t]:Bt},b.prototype.has=function(t){var e=this.__data__;return Me?e[t]!==Bt:ue.call(e,t)},b.prototype.set=function(t,e){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=Me&&e===Bt?"__lodash_hash_undefined__":e,this},h.prototype.clear=function(){
this.__data__=[],this.size=0},h.prototype.delete=function(t){var e=this.__data__;return t=v(e,t),!(0>t)&&(t==e.length-1?e.pop():ge.call(e,t,1),--this.size,true)},h.prototype.get=function(t){var e=this.__data__;return t=v(e,t),0>t?Bt:e[t][1]},h.prototype.has=function(t){return-1<v(this.__data__,t)},h.prototype.set=function(t,e){var r=this.__data__,n=v(r,t);return 0>n?(++this.size,r.push([t,e])):r[n][1]=e,this},p.prototype.clear=function(){this.size=0,this.__data__={hash:new b,map:new(xe||h),string:new b
}},p.prototype.delete=function(t){return t=Z(this,t).delete(t),this.size-=t?1:0,t},p.prototype.get=function(t){return Z(this,t).get(t)},p.prototype.has=function(t){return Z(this,t).has(t)},p.prototype.set=function(t,e){var r=Z(this,t),n=r.size;return r.set(t,e),this.size+=r.size==n?0:1,this},y.prototype.add=y.prototype.push=function(t){return this.__data__.set(t,"__lodash_hash_undefined__"),this},y.prototype.has=function(t){return this.__data__.has(t)},j.prototype.clear=function(){this.__data__=new h,
this.size=0},j.prototype.delete=function(t){var e=this.__data__;return t=e.delete(t),this.size=e.size,t},j.prototype.get=function(t){return this.__data__.get(t)},j.prototype.has=function(t){return this.__data__.has(t)},j.prototype.set=function(t,e){var r=this.__data__;if(r instanceof h){var n=r.__data__;if(!xe||199>n.length)return n.push([t,e]),this.size=++r.size,this;r=this.__data__=new p(n)}return r.set(t,e),this.size=r.size,this};var Te=Ae?function(t,e){return Ae(t,"toString",{configurable:true,
enumerable:false,value:xt(e),writable:true})}:Et,Ne=we?function(t){return null==t?[]:(t=Object(t),r(we(t),function(e){return _e.call(t,e)}))}:Mt,We=we?function(t){for(var e=[];t;)o(e,Ne(t)),t=ye(t);return e}:Mt,Ge=k;(ke&&"[object DataView]"!=Ge(new ke(new ArrayBuffer(1)))||xe&&"[object Map]"!=Ge(new xe)||Ee&&"[object Promise]"!=Ge(Ee.resolve())||Fe&&"[object Set]"!=Ge(new Fe)||Ie&&"[object WeakMap]"!=Ge(new Ie))&&(Ge=function(t){var e=k(t);if(t=(t="[object Object]"==e?t.constructor:Bt)?st(t):"")switch(t){
case Ue:return"[object DataView]";case Be:return"[object Map]";case De:return"[object Promise]";case Pe:return"[object Set]";case $e:return"[object WeakMap]"}return e});var qe=function(t){var e=0,r=0;return function(){var n=ze(),o=16-(n-r);if(r=n,0<o){if(800<=++e)return arguments[0]}else e=0;return t.apply(Bt,arguments)}}(Te),He=function(t){t=pt(t,function(t){return 500===e.size&&e.clear(),t});var e=t.cache;return t}(function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(Lt,function(t,r,n,o){
e.push(n?o.replace(Ct,"$1"):r||t)}),e});pt.Cache=p;var Je=x(function(){return arguments}())?x:function(t){return dt(t)&&ue.call(t,"callee")&&!_e.call(t,"callee")},Ke=Array.isArray,Qe=me||Ut,Xe=Zt?a(Zt):F,Ye=te?a(te):M,Ze=ee?a(ee):U,tr=function(t,e){return qe(ft(t,e,Et),t+"")}(function(t,e){t=Object(t);var r,n=-1,o=e.length,c=2<o?e[2]:Bt;if(r=c){r=e[0];var u=e[1];if(vt(c)){var a=typeof u;r=!!("number"==a?jt(c)&&ct(u,c.length):"string"==a&&u in c)&&yt(c[u],r)}else r=false}for(r&&(o=1);++n<o;)for(c=e[n],
r=kt(c),u=-1,a=r.length;++u<a;){var i=r[u],f=t[i];(f===Bt||yt(f,ne[i])&&!ue.call(t,i))&&(t[i]=c[i])}return t}),er=function(t){return qe(ft(t,Bt,bt),t+"")}(function(t,e){var r={};if(null==t)return r;var o=false;e=n(e,function(e){return e=V(e,t),o||(o=1<e.length),e}),W(t,X(t),r),o&&(r=m(r,7,H));for(var c=e.length;c--;)C(r,e[c]);return r});s.constant=xt,s.defaults=tr,s.flatten=bt,s.iteratee=Ft,s.keys=zt,s.keysIn=kt,s.memoize=pt,s.omit=er,s.property=It,s.remove=function(t,e){var r=[];if(!t||!t.length)return r;
var n=-1,o=[],c=t.length;for(e=Y(e,3);++n<c;){var u=t[n];e(u,n,t)&&(r.push(u),o.push(n))}for(n=t?o.length:0,c=n-1;n--;)if(u=o[n],n==c||u!==a){var a=u;ct(u)?ge.call(t,u,1):C(t,u)}return r},s.eq=yt,s.get=Ot,s.hasIn=St,s.identity=Et,s.isArguments=Je,s.isArray=Ke,s.isArrayLike=jt,s.isBuffer=Qe,s.isFunction=_t,s.isLength=gt,s.isMap=Xe,s.isObject=vt,s.isObjectLike=dt,s.isPlainObject=At,s.isSet=Ye,s.isSymbol=wt,s.isTypedArray=Ze,s.last=ht,s.stubArray=Mt,s.stubFalse=Ut,s.toString=mt,s.VERSION="4.17.5",Qt&&((Qt.exports=s)._=s,
Kt._=s)}).call(this);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9BbGVwaEJldC93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vQWxlcGhCZXQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vQWxlcGhCZXQvLi9ub2RlX21vZHVsZXMvYmFzaWwuanMvYnVpbGQvYmFzaWwuanMiLCJ3ZWJwYWNrOi8vQWxlcGhCZXQvLi9ub2RlX21vZHVsZXMvY3J5cHRvLWpzL2NvcmUuanMiLCJ3ZWJwYWNrOi8vQWxlcGhCZXQvLi9ub2RlX21vZHVsZXMvY3J5cHRvLWpzL3NoYTEuanMiLCJ3ZWJwYWNrOi8vQWxlcGhCZXQvLi9ub2RlX21vZHVsZXMvbm9kZS11dWlkL3V1aWQuanMiLCJ3ZWJwYWNrOi8vQWxlcGhCZXQvKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovL0FsZXBoQmV0Lyh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyIsIndlYnBhY2s6Ly9BbGVwaEJldC8uL3NyYy9hZGFwdGVycy5jb2ZmZWUiLCJ3ZWJwYWNrOi8vQWxlcGhCZXQvLi9zcmMvYWxlcGhiZXQuY29mZmVlIiwid2VicGFjazovL0FsZXBoQmV0Ly4vc3JjL29wdGlvbnMuY29mZmVlIiwid2VicGFjazovL0FsZXBoQmV0Ly4vc3JjL3N0b3JhZ2UuY29mZmVlIiwid2VicGFjazovL0FsZXBoQmV0Ly4vc3JjL3V0aWxzLmNvZmZlZSIsIndlYnBhY2s6Ly9BbGVwaEJldC8uL3ZlbmRvci9sb2Rhc2guY3VzdG9tLm1pbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5Qjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHNCQUFzQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxtQkFBbUIsZ0JBQWdCO0FBQ25DO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLElBQUk7QUFDSixHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSwrRkFBK0YseUJBQXlCLEVBQUU7QUFDMUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0JBQWdCLGtCQUFrQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsMENBQTBDOztBQUU1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0Esd0JBQXdCLGdDQUFnQztBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLHdCQUF3QixnQ0FBZ0M7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQSxHQUFHO0FBQ0g7QUFDQSwyQ0FBMkM7QUFDM0M7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLGlDQUFpQztBQUNqQyxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0REFBNEQ7QUFDNUQ7QUFDQSw0Q0FBNEMsUUFBUTtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSx1QkFBdUIsaUJBQWlCO0FBQ3hDO0FBQ0E7QUFDQSxvQ0FBb0MsT0FBTztBQUMzQyx3QkFBd0IsaUVBQWlFO0FBQ3pGO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsNERBQTREO0FBQzVELGdDQUFnQyxvQkFBb0I7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RCxnQ0FBZ0Msb0JBQW9CO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSx3Q0FBd0M7QUFDeEMsSUFBSTtBQUNKO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLElBQUk7QUFDSjtBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQSxJQUFJO0FBQ0o7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSTtBQUNKO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBDQUEwQyxpREFBaUQ7QUFDM0YsMENBQTBDLGlEQUFpRDtBQUMzRixnREFBZ0QsZ0RBQWdEO0FBQ2hHLGtEQUFrRCxrREFBa0Q7O0FBRXBHO0FBQ0E7O0FBRUE7QUFDQSxLQUFLLElBQTBDO0FBQy9DLEVBQUUsbUNBQU87QUFDVDtBQUNBLEdBQUc7QUFBQSxvR0FBQztBQUNKO0FBQ0EsRUFBRSxNQUFNLEVBRU47O0FBRUYsQ0FBQzs7Ozs7Ozs7Ozs7O0FDOVlELENBQUM7QUFDRCxLQUFLLElBQTJCO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBLE1BQU0sRUFPSjtBQUNGLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLE1BQU07O0FBRU47QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLE9BQU87QUFDL0I7QUFDQSx5QkFBeUIsT0FBTztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsY0FBYzs7QUFFZDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixPQUFPO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsY0FBYzs7QUFFZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsY0FBYzs7QUFFZDtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsT0FBTztBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYzs7QUFFZDtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsT0FBTztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNOztBQUVOO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixNQUFNO0FBQ3pCLG1CQUFtQixPQUFPO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsTUFBTTtBQUMxQixvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0EsVUFBVTs7QUFFVjtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBLHFCQUFxQixPQUFPO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7O0FBRVY7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFVBQVU7QUFDOUI7QUFDQSxxQkFBcUIsVUFBVTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLGtCQUFrQjtBQUNsRDtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQSxnQ0FBZ0Msa0JBQWtCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFVOztBQUVWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTs7QUFFVjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsVUFBVTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsVUFBVTs7QUFFVjtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBLHFCQUFxQixVQUFVO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYzs7QUFFZCxvQ0FBb0MsWUFBWTtBQUNoRDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07O0FBRU47QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsVUFBVTtBQUM5QjtBQUNBLHFCQUFxQixPQUFPO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRCQUE0QixjQUFjO0FBQzFDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsVUFBVTs7QUFFVjtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBLHFCQUFxQixVQUFVO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0QkFBNEIsa0JBQWtCO0FBQzlDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFVBQVU7QUFDOUI7QUFDQSxxQkFBcUIsT0FBTztBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0QkFBNEIsY0FBYztBQUMxQztBQUNBO0FBQ0E7O0FBRUE7QUFDQSxVQUFVOztBQUVWO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0EscUJBQXFCLFVBQVU7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRCQUE0QixxQkFBcUI7QUFDakQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsVUFBVTtBQUM5QjtBQUNBLHFCQUFxQixPQUFPO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQSxVQUFVOztBQUVWO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0EscUJBQXFCLFVBQVU7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLE9BQU87QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVOztBQUVWO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixpQkFBaUI7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVOztBQUVWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBLHFCQUFxQixVQUFVO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxQ0FBcUMsc0JBQXNCO0FBQzNEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVTs7QUFFVjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsT0FBTztBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsVUFBVTs7QUFFVjtBQUNBLE1BQU07O0FBRU47QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLE9BQU87QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVU7O0FBRVY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVU7O0FBRVY7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGlCQUFpQjtBQUNyQztBQUNBLHFCQUFxQixPQUFPO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFVOztBQUVWO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGlCQUFpQjtBQUNyQztBQUNBLHFCQUFxQixVQUFVO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsVUFBVTs7QUFFVjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBLHFCQUFxQixTQUFTO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVOztBQUVWO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0EscUJBQXFCLFNBQVM7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTs7QUFFTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUU7OztBQUdGOztBQUVBLENBQUMsRzs7Ozs7Ozs7Ozs7QUN2dkJELENBQUM7QUFDRCxLQUFLLElBQTJCO0FBQ2hDO0FBQ0EscUNBQXFDLG1CQUFPLENBQUMsZ0RBQVE7QUFDckQ7QUFDQSxNQUFNLEVBT0o7QUFDRixDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVOztBQUVWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0QkFBNEIsUUFBUTtBQUNwQztBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTs7QUFFVjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVTs7QUFFVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07O0FBRU47QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLGlCQUFpQjtBQUNqQztBQUNBLGlCQUFpQixVQUFVO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsaUJBQWlCO0FBQ2pDLGdCQUFnQixpQkFBaUI7QUFDakM7QUFDQSxpQkFBaUIsVUFBVTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7O0FBR0Y7O0FBRUEsQ0FBQyxHOzs7Ozs7Ozs7OztBQ3JKRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQztBQUNoQyxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsUUFBUTtBQUNoQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFNBQVM7QUFDMUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNDQUFzQyxFQUFFO0FBQ3hDLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQ0FBcUM7QUFDckM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUIsT0FBTztBQUMxQjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNCQUFzQixTQUFTO0FBQy9CO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU0sSUFBMEM7QUFDaEQ7QUFDQSxJQUFJLG1DQUFPLFlBQVksYUFBYTtBQUFBLG9HQUFDO0FBQ3JDLEdBQUcsTUFBTSxzQkFjTjtBQUNILENBQUM7Ozs7Ozs7Ozs7OztBQ3BQRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRDQUE0Qzs7QUFFNUM7Ozs7Ozs7Ozs7OztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCQTtBQUFBLFFBQVEsd0RBQVI7QUFDQSxVQUFVLDREQUFWOztBQUVNO0FBQUEsTUFBTixRQUFNO0FBQUE7QUFBQTs7QUFBTixHQUFNLEM7Ozs7Ozs7QUFRRSxVQUFDLGFBQUQsR0FBQztBQUFBLFFBQVAsWUFBTztBQUFBO0FBQUE7QUFHTCw0QkFBYSxHQUFiLEVBQWEsU0FBYixFQUFhO0FBQUEsWUFBaUIsT0FBakIsdUVBQTJCLFFBQVEsQ0FBbkM7O0FBQUE7O0FBQ1gsd0JBQVksT0FBWjtBQUNBLG1CQUFPLEdBQVA7QUFDQSx5QkFBYSxTQUFiO0FBQ0Esc0JBQVUsSUFBSSxDQUFKLE1BQVcsS0FBQyxRQUFELEtBQWMsS0FBZCxlQUFYLEtBQVY7O0FBQ0E7QUFMVzs7QUFIUjtBQUFBO0FBQUEsc0NBVVUsS0FWVixFQVVVO0FBQUE7O2lCQUNiO0FBQ0U7QUFBQTs7O0FBQ0EsaUJBQUssQ0FBTCxPQUFhLEtBQUMsQ0FBZCxRQUFzQjtxQkFBUSxFQUFFLENBQUMsVUFBSCxZQUF3QixLO0FBQXREO21CQUNBLEtBQUMsU0FBRCxLQUFjLEtBQUMsQ0FBZixZQUEyQixJQUFJLENBQUosVUFBZSxLQUFDLENBQTNDLE1BQTJCLENBQTNCLEM7QUFIRixXO0FBRGE7QUFWVjtBQUFBO0FBQUEsb0NBZ0JRLEdBaEJSLEVBZ0JRLElBaEJSLEVBZ0JRLFFBaEJSLEVBZ0JRO0FBQ1gsZUFBSyxDQUFMO2lCQUNBLE1BQU0sQ0FBQyxNQUFQLE1BQ0U7QUFBQTtBQUNBLGlCQURBO0FBRUEsa0JBRkE7QUFHQSxxQkFBUztBQUhULFdBREYsQztBQUZXO0FBaEJSO0FBQUE7QUFBQSxzQ0F3QlUsR0F4QlYsRUF3QlUsSUF4QlYsRUF3QlUsUUF4QlYsRUF3QlU7QUFDYjtBQUFBLGVBQUssQ0FBTDtBQUNBLGdCQUFNLG9CQUFOOztBQUNBOztBQUE4RDs7QUFBQTs7c0JBQXBELEksV0FBRyxtQkFBSCxDQUFHLEMsY0FBeUIsbUJBQTVCLENBQTRCLEM7QUFBd0I7OztXQUE5RDs7QUFDQSxtQkFBUyxNQUFNLENBQU4sOEJBQVQ7QUFDQSxhQUFHLENBQUgsc0JBQWdCLEdBQWhCOztBQUNBLGFBQUcsQ0FBSCxTQUFhO0FBQ1gsZ0JBQUcsR0FBRyxDQUFILFdBQUg7cUJBQ0UsUUFERixFOztBQURXLFdBQWI7O2lCQUdBLEdBQUcsQ0FBSCxNO0FBVGE7QUF4QlY7QUFBQTtBQUFBLGtDQW1DTSxHQW5DTixFQW1DTSxJQW5DTixFQW1DTSxRQW5DTixFQW1DTTtBQUNUOztBQUFBLGlEQUFnQixDQUFFLElBQWxCLEdBQWtCLEtBQWxCO21CQUNFLDRCQURGLFFBQ0UsQztBQURGO21CQUdFLDhCQUhGLFFBR0UsQzs7QUFKTztBQW5DTjtBQUFBO0FBQUEsaUNBeUNHO0FBQ047QUFBQTtBQUFBOztBQUFBOztBQUNFLHVCQUFXLG1CQUFlLElBQUksQ0FBQyxVQUFMLENBQWYsT0FBWDs7QUFDQSwyQkFBVyxLQUFYLEtBQWlCLEtBQUssQ0FBTCxLQUFXLElBQUksQ0FBZixZQUFqQixRQUFpQixDQUFqQjs7eUJBQ0EsSTtBQUhGOzs7QUFETTtBQXpDSDtBQUFBO0FBQUEsbUNBK0NPLFVBL0NQLEVBK0NPLElBL0NQLEVBK0NPO0FBQ1YsZUFBMkIsVUFBVSxDQUFyQztBQUFBLG1CQUFPLEtBQUssQ0FBWixJQUFPLEVBQVA7OztBQUVBLGVBQTJCLElBQUksQ0FBL0I7O0FBQUEsbUJBQU8sS0FBSyxDQUFaLElBQU8sRUFBUDtBQUZBLFdBRFUsQzs7OztpQkFNVixLQUFLLENBQUwsZUFBYyxLQUFILFNBQVgsY0FBNEIsVUFBVSxDQUEzQixJQUFYLGNBQStDLFVBQVUsQ0FBekQsUztBQU5VO0FBL0NQO0FBQUE7QUFBQSwrQkF1REcsVUF2REgsRUF1REcsT0F2REgsRUF1REcsSUF2REgsRUF1REc7QUFDTixlQUFLLENBQUwsNENBQTJDLEtBQWpDLFNBQVYsZUFBMEQsVUFBVSxDQUExRCxJQUFWLGVBQVUsT0FBVixlQUEwRixJQUFJLENBQTlGOztBQUNBLGNBQW1CLEtBQUMsTUFBRCxVQUFuQjtBQUFBLGlCQUFDLE1BQUQ7OztBQUNBLGVBQUMsTUFBRCxNQUNFO0FBQUEsd0JBQ0U7QUFBQSwwQkFBWSxVQUFVLENBQXRCO0FBQ0Esc0JBQVEsS0FBSyxDQURiLElBQ1EsRUFEUjtBQUFBO0FBRUEsb0JBQU0sNEJBRk4sSUFFTSxDQUZOO0FBR0EsdUJBSEE7QUFJQSxxQkFBTyxJQUFJLENBSlg7QUFLQSx5QkFBVyxLQUFDO0FBTFo7QUFERixXQURGOztBQVFBLGVBQUMsUUFBRCxLQUFjLEtBQWQsWUFBMkIsSUFBSSxDQUFKLFVBQWUsS0FBMUMsTUFBMkIsQ0FBM0I7O2lCQUNBLGE7QUFaTTtBQXZESDtBQUFBO0FBQUEseUNBcUVhLFVBckViLEVBcUVhLE9BckViLEVBcUVhO2lCQUNoQixpQ0FBNkI7QUFBQyxrQkFBRDtBQUFzQixvQkFBUTtBQUE5QixXQUE3QixDO0FBRGdCO0FBckViO0FBQUE7QUFBQSxzQ0F3RVUsVUF4RVYsRUF3RVUsT0F4RVYsRUF3RVUsU0F4RVYsRUF3RVUsS0F4RVYsRUF3RVU7aUJBQ2IsaUNBQTZCLEtBQUssQ0FBTCxTQUFlO0FBQUMsa0JBQU07QUFBUCxXQUFmLEVBQTdCLEtBQTZCLENBQTdCLEM7QUFEYTtBQXhFVjs7QUFBQTtBQUFBOztBQUFQOzJCQUNFLFUsR0FBWSxjOztHQURQLEMsSUFBQSxDLElBQUEsQ0FBRDs7QUE0RUEsVUFBQyxzQ0FBRCxHQUFDO0FBQUEsUUFBUCxxQ0FBTztBQUFBO0FBQUE7QUFJTCx1REFBYTtBQUFBLFlBQUMsT0FBRCx1RUFBVyxRQUFRLENBQW5COztBQUFBOztBQUNYLHdCQUFZLE9BQVo7QUFDQSxzQkFBVSxJQUFJLENBQUosTUFBVyxLQUFDLFFBQUQsS0FBYyxLQUFkLGVBQVgsS0FBVjs7QUFDQTtBQUhXOztBQUpSO0FBQUE7QUFBQSxxQ0FTUyxJQVRULEVBU1M7QUFBQTs7aUJBQ1o7QUFDRSxpQkFBSyxDQUFMLE9BQWEsTUFBQyxDQUFkLFFBQXNCO3FCQUFRLEVBQUUsQ0FBRixTQUFXLEk7QUFBekM7bUJBQ0EsTUFBQyxTQUFELEtBQWMsTUFBQyxDQUFmLFlBQTJCLElBQUksQ0FBSixVQUFlLE1BQUMsQ0FBM0MsTUFBMkIsQ0FBM0IsQztBQUZGLFc7QUFEWTtBQVRUO0FBQUE7QUFBQSxpQ0FjRztBQUNOOztBQUFBLGNBQW9HLGNBQXBHO0FBQUEsa0JBQU0sVUFBTiwrRUFBTSxDQUFOOzs7QUFDQTtBQUFBOztBQUFBOztBQUNFLHVCQUFXLGtCQUFjLElBQUksQ0FBbEIsS0FBWDt5QkFDQSxvQkFBb0IsSUFBSSxDQUF4QixVQUFtQyxJQUFJLENBQXZDLFFBQWdELElBQUksQ0FBcEQsT0FBNEQ7QUFBQyw2QkFBRDtBQUEwQixnQ0FBa0I7QUFBNUMsYUFBNUQsQztBQUZGOzs7QUFGTTtBQWRIO0FBQUE7QUFBQSwrQkFvQkcsUUFwQkgsRUFvQkcsTUFwQkgsRUFvQkcsS0FwQkgsRUFvQkc7QUFDTixlQUFLLENBQUwsaUVBQVUsUUFBVixlQUFVLE1BQVY7O0FBQ0EsY0FBbUIsS0FBQyxNQUFELFVBQW5CO0FBQUEsaUJBQUMsTUFBRDs7O0FBQ0EsZUFBQyxNQUFELE1BQWE7QUFBQyxrQkFBTSxLQUFLLENBQVosSUFBTyxFQUFQO0FBQXFCLHNCQUFyQjtBQUF5QyxvQkFBekM7QUFBeUQsbUJBQU87QUFBaEUsV0FBYjs7QUFDQSxlQUFDLFFBQUQsS0FBYyxLQUFkLFlBQTJCLElBQUksQ0FBSixVQUFlLEtBQTFDLE1BQTJCLENBQTNCOztpQkFDQSxhO0FBTE07QUFwQkg7QUFBQTtBQUFBLHlDQTJCYSxVQTNCYixFQTJCYSxPQTNCYixFQTJCYTtpQkFDaEIsWUFBUSxLQUFSLHFCQUF1QixVQUFVLENBQWIsSUFBcEIscUM7QUFEZ0I7QUEzQmI7QUFBQTtBQUFBLHNDQThCVSxVQTlCVixFQThCVSxPQTlCVixFQThCVSxTQTlCVixFQThCVSxNQTlCVixFQThCVTtpQkFDYixZQUFRLEtBQVIscUJBQXVCLFVBQVUsQ0FBYixJQUFwQixvQztBQURhO0FBOUJWOztBQUFBO0FBQUE7O0FBQVA7b0RBQ0UsUyxHQUFXLFU7b0RBQ1gsVSxHQUFZLFc7O0dBRlAsQyxJQUFBLEMsSUFBQSxDQUFEOztBQWtDQSxVQUFDLDJCQUFELEdBQUM7QUFBQSxRQUFQLDBCQUFPO0FBQUE7QUFBQTtBQUdMLDBDQUFhLFdBQWIsRUFBYTtBQUFBLFlBQWMsT0FBZCx1RUFBd0IsUUFBUSxDQUFoQzs7QUFBQTs7QUFDWCxzQkFBVSxXQUFWO0FBQ0Esd0JBQVksT0FBWjtBQUNBLHNCQUFVLElBQUksQ0FBSixNQUFXLEtBQUMsUUFBRCxLQUFjLEtBQWQsZUFBWCxLQUFWOztBQUNBO0FBSlc7O0FBSFI7QUFBQTtBQUFBLHNDQVNVLEtBVFYsRUFTVTtBQUFBOztpQkFDYjtBQUNFO0FBQUE7OztBQUNBLGlCQUFLLENBQUwsT0FBYSxNQUFDLENBQWQsUUFBc0I7cUJBQVEsRUFBRSxDQUFDLFVBQUgsWUFBd0IsSztBQUF0RDttQkFDQSxNQUFDLFNBQUQsS0FBYyxNQUFDLENBQWYsWUFBMkIsSUFBSSxDQUFKLFVBQWUsTUFBQyxDQUEzQyxNQUEyQixDQUEzQixDO0FBSEYsVztBQURhO0FBVFY7QUFBQTtBQUFBLGlDQWVHO0FBQ047QUFBQTtBQUFBOztBQUFBOztBQUNFLHVCQUFXLG1CQUFlLElBQUksQ0FBQyxVQUFMLENBQWYsT0FBWDt5QkFDQSxLQUFDLE1BQUQsVUFBaUIsSUFBSSxDQUFyQixpQkFBdUMsS0FBSyxDQUFMLEtBQVcsSUFBSSxDQUFmLFlBQXZDLFFBQXVDLENBQXZDLFc7QUFGRjs7O0FBRE07QUFmSDtBQUFBO0FBQUEsbUNBb0JPLFVBcEJQLEVBb0JPLElBcEJQLEVBb0JPO0FBQ1YsZUFBMkIsVUFBVSxDQUFyQztBQUFBLG1CQUFPLEtBQUssQ0FBWixJQUFPLEVBQVA7OztBQUVBLGVBQTJCLElBQUksQ0FBL0I7O0FBQUEsbUJBQU8sS0FBSyxDQUFaLElBQU8sRUFBUDtBQUZBLFdBRFUsQzs7OztpQkFNVixLQUFLLENBQUwsZUFBYyxLQUFILFNBQVgsY0FBNEIsVUFBVSxDQUEzQixJQUFYLGNBQStDLFVBQVUsQ0FBekQsUztBQU5VO0FBcEJQO0FBQUE7QUFBQSwrQkE0QkcsVUE1QkgsRUE0QkcsT0E1QkgsRUE0QkcsSUE1QkgsRUE0Qkc7QUFDTixlQUFLLENBQUwsMkNBQTBDLFVBQVUsQ0FBMUMsSUFBVixlQUFVLE9BQVY7O0FBQ0EsY0FBbUIsS0FBQyxNQUFELFVBQW5CO0FBQUEsaUJBQUMsTUFBRDs7O0FBQ0EsZUFBQyxNQUFELE1BQ0U7QUFBQSw2QkFBaUIsVUFBVSxDQUEzQjtBQUNBLHdCQUNFO0FBQUEsc0JBQVEsS0FBSyxDQUFiLElBQVEsRUFBUjtBQUFBO0FBQ0Esb0JBQU0sNEJBRE4sSUFDTSxDQUROO0FBRUEsdUJBRkE7QUFHQSxxQkFBTyxJQUFJLENBQUM7QUFIWjtBQUZGLFdBREY7O0FBT0EsZUFBQyxRQUFELEtBQWMsS0FBZCxZQUEyQixJQUFJLENBQUosVUFBZSxLQUExQyxNQUEyQixDQUEzQjs7aUJBQ0EsYTtBQVhNO0FBNUJIO0FBQUE7QUFBQSx5Q0F5Q2EsVUF6Q2IsRUF5Q2EsT0F6Q2IsRUF5Q2E7aUJBQ2hCLGlDQUE2QjtBQUFDLGtCQUFEO0FBQXNCLG9CQUFRO0FBQTlCLFdBQTdCLEM7QUFEZ0I7QUF6Q2I7QUFBQTtBQUFBLHNDQTRDVSxVQTVDVixFQTRDVSxPQTVDVixFQTRDVSxTQTVDVixFQTRDVSxLQTVDVixFQTRDVTtpQkFDYixpQ0FBNkIsS0FBSyxDQUFMLFNBQWU7QUFBQyxrQkFBTTtBQUFQLFdBQWYsRUFBN0IsS0FBNkIsQ0FBN0IsQztBQURhO0FBNUNWOztBQUFBO0FBQUE7O0FBQVA7eUNBQ0UsVSxHQUFZLGE7O0dBRFAsQyxJQUFBLEMsSUFBQSxDQUFEOztBQWdEQSxVQUFDLGdDQUFELEdBQUM7QUFBQSxRQUFQLCtCQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsK0JBR0ksUUFISixFQUdJLE1BSEosRUFHSSxLQUhKLEVBR0k7QUFDUCxlQUFLLENBQUwsZ0RBQVUsUUFBVixlQUFVLE1BQVY7O0FBQ0EsY0FBb0csY0FBcEc7QUFBQSxrQkFBTSxVQUFOLCtFQUFNLENBQU47OztpQkFDQSw2Q0FBNkM7QUFBQyw4QkFBa0I7QUFBbkIsV0FBN0MsQztBQUhPO0FBSEo7QUFBQTtBQUFBLHlDQVFjLFVBUmQsRUFRYyxPQVJkLEVBUWM7aUJBQ2pCLFlBQVEsS0FBUixxQkFBdUIsVUFBVSxDQUFiLElBQXBCLHFDO0FBRGlCO0FBUmQ7QUFBQTtBQUFBLHNDQVdXLFVBWFgsRUFXVyxPQVhYLEVBV1csU0FYWCxFQVdXLE1BWFgsRUFXVztpQkFDZCxZQUFRLEtBQVIscUJBQXVCLFVBQVUsQ0FBYixJQUFwQixvQztBQURjO0FBWFg7O0FBQUE7QUFBQTs7QUFBUDtBQUNFLG1DQUFDLENBQUQsWUFBWSxVQUFaOztHQURLLEMsSUFBQSxDLElBQUEsQ0FBRDs7QUFlQSxVQUFDLG9CQUFELEdBQUM7QUFBQSxRQUFQLG1CQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsNEJBRUMsR0FGRCxFQUVDLEtBRkQsRUFFQztpQkFDSixZQUFZLEtBQVosMEI7QUFESTtBQUZEO0FBQUE7QUFBQSw0QkFJQyxHQUpELEVBSUM7aUJBQ0osWUFBWSxLQUFaLG1CO0FBREk7QUFKRDs7QUFBQTtBQUFBOztBQUFQO0FBQ0UsdUJBQUMsQ0FBRCxZQUFZLFVBQVo7O0dBREssQyxJQUFBLEMsSUFBQSxDQUFEOzs7Q0FyTEYsQyxJQUFBOztBQTZMTixNQUFNLENBQU4sVUFBaUIsUUFBakIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoTUE7QUFBQSxRQUFRLHdEQUFSO0FBQ0EsV0FBVyw4REFBWDtBQUNBLFVBQVUsNERBQVY7O0FBRU07QUFBQSxNQUFOLFFBQU07QUFBQTtBQUFBOztBQUFOO0FBQ0UsVUFBQyxDQUFELFVBQVcsT0FBWDtBQUNBLFVBQUMsQ0FBRCxRQUFTLEtBQVQ7QUFFQSxVQUFDLENBQUQsZUFBZ0IsUUFBUSxDQUFDLFlBQXpCO0FBQ0EsVUFBQyxDQUFELHdDQUF5QyxRQUFRLENBQUMscUNBQWxEO0FBQ0EsVUFBQyxDQUFELDZCQUE4QixRQUFRLENBQUMsMEJBQXZDOztBQUVNLFVBQUMsV0FBRCxHQUFDOzs7QUFBQSxRQUFQLFVBQU87QUFBQTtBQUFBO0FBVUwsNEJBQWE7QUFBQTs7QUFBQTs7QUFBQyxhQUFDLE9BQUQsR0FBQyxRQUFEO0FBQ1osYUFBSyxDQUFMLFNBQWUsS0FBZixTQUF5QixVQUFVLENBQW5DOztBQUNBLGlCQUFTLENBQVQ7O0FBQ0Esb0JBQVEsS0FBQyxPQUFELENBQVMsSUFBakI7QUFDQSx3QkFBWSxLQUFDLE9BQUQsQ0FBUyxRQUFyQjtBQUNBLHVCQUFXLEtBQUMsT0FBRCxDQUFTLE9BQXBCO0FBQ0EsNkJBQWlCLEtBQUssQ0FBTCxLQUFXLEtBQVgsU0FBakI7O0FBQ0EsWUFBSSxDQUFKO0FBUFc7O0FBVlI7QUFBQTtBQUFBLDhCQW1CQTtBQUNIO0FBQUEsZUFBSyxDQUFMLG9DQUFtQyxJQUFJLENBQUosVUFBZSxLQUFsRCxPQUFtQyxDQUFuQzs7QUFDQSxjQUFHLFVBQVUsS0FBYixrQkFBYSxFQUFiOztBQUVFLGlCQUFLLENBQUw7bUJBQ0Esc0JBSEYsT0FHRSxDO0FBSEY7bUJBS0UsS0FMRiw4QkFLRSxFOztBQVBDO0FBbkJBO0FBQUE7QUFBQSx5Q0E4QmEsT0E5QmIsRUE4QmE7QUFDaEI7OztlQUFrQixDQUFsQixRLENBQUEsSTs7O2lCQUNBLDZCQUFrQixLQUFDLE9BQUQsQ0FBbEIsMkI7QUEvQkYsU0FESyxDOztBQUFBO0FBQUE7QUFBQSx5REFtQzJCO0FBQzlCOztBQUFBLGVBQWMsS0FBQyxPQUFELENBQWQsT0FBYyxFQUFkO0FBQUE7OztBQUNBLGVBQUssQ0FBTDs7QUFDQSxlQUFjLEtBQWQsU0FBYyxFQUFkO0FBQUE7OztBQUNBLGVBQUssQ0FBTDtBQUNBLG9CQUFVLG1CQUFWO0FBQ0E7aUJBQ0EsOEI7QUFQOEI7QUFuQzNCO0FBQUE7QUFBQSxzQ0E0Q1UsU0E1Q1YsRUE0Q1U7QUFBQSxjQUFZLEtBQVo7QUFDYjtBQUFBLGVBQUssQ0FBTCxnQkFBc0I7QUFBQyxvQkFBUTtBQUFULFdBQXRCOztBQUNBLGNBQVUsS0FBSyxDQUFMLFVBQWdCLDZCQUFrQixLQUFDLE9BQUQsQ0FBSCxJQUFmLGNBQTFCLFNBQTBCLEVBQTFCO0FBQUE7OztBQUNBLG9CQUFVLHlCQUFWOztBQUNBO0FBQUE7OztBQUNBLGNBQXlELEtBQUssQ0FBOUQ7QUFBQSx5Q0FBa0IsS0FBQyxPQUFELENBQUgsSUFBZjs7O0FBQ0EsZUFBSyxDQUFMLDBCQUF5QixLQUFDLE9BQUQsQ0FBZixJQUFWLHNCQUFVLE9BQVY7aUJBQ0EsOEQ7QUFQYTtBQTVDVjtBQUFBO0FBQUEsNkNBcURlO2lCQUNsQiw2QkFBa0IsS0FBQyxPQUFELENBQWxCLGtCO0FBRGtCO0FBckRmO0FBQUE7QUFBQSx1Q0F3RFM7QUFDWjtBQUFBLHNDQUE0QixLQUFLLENBQUwsY0FBb0IsS0FBcEIsU0FBNUI7QUFDQSxlQUFLLENBQUw7O0FBQ0E7bUJBQWtDLEtBQWxDLHFCQUFrQyxFO0FBQWxDO21CQUFnRSxLQUFoRSx1QkFBZ0UsRTs7QUFIcEQ7QUF4RFQ7QUFBQTtBQUFBLGdEQTZEa0I7QUFXckIsMkRBWHFCLEM7Ozs7Ozs7Ozs7QUFXckIsd0JBQWMsS0FBSyxDQUFMLFlBQWtCLEtBQWxCLFNBQWQ7QUFDQSwyQkFBaUIsSUFBSSxDQUFKLEtBQVcsMEJBQVgsWUFBakI7QUFDQTs7QUFBQTt3QkFBQSxHLEVBQUEsQzs7O0FBR0UsOEJBQWtCLEtBQUssQ0FBQyxNQUF4Qjs7QUFDQSxnQkFBYyxrQkFBZDtBQUFBOztBQUpGO0FBYnFCO0FBN0RsQjtBQUFBO0FBQUEsa0RBZ0ZvQjtBQUN2QjtBQUFBLHVCQUFhLE1BQU0sS0FBQyxhQUFELENBQWUsTUFBbEM7QUFDQSw2QkFBbUIsSUFBSSxDQUFKLE1BQVcsMEJBQVgsV0FBbkI7QUFDQSxvQkFBVSxLQUFDLGFBQUQsQ0FBZSxnQkFBZixDQUFWO0FBQ0EsZUFBSyxDQUFMO2lCQUNBLE87QUFMdUI7QUFoRnBCO0FBQUE7QUFBQSxvQ0F1Rk07QUFDVDtBQUFBLG1CQUFTLDZCQUFrQixLQUFDLE9BQUQsQ0FBbEIsb0JBQVQ7O0FBQ0EsY0FBcUIsa0JBQXJCO0FBQUE7OztBQUNBLG1CQUFTLDBCQUFzQixLQUFDLE9BQUQsQ0FBUyxNQUF4QztBQUNBLHVDQUFrQixLQUFDLE9BQUQsQ0FBbEI7aUJBQ0EsTTtBQUxTO0FBdkZOO0FBQUE7QUFBQSxnQ0E4RkksSUE5RkosRUE4Rkk7QUFDUDs7QUFBQSxlQUE2QixLQUE3QjtBQUFBLG1CQUFPLEtBQUssQ0FBWixNQUFPLEVBQVA7OztBQUNBLDJCQUFVLEtBQUgsSUFBUCxjQUFPLElBQVAsY0FBMkIsS0FBcEIsT0FBUDtpQkFDQSxLQUFLLENBQUwsWTtBQUhPO0FBOUZKO0FBQUE7QUFBQSxpQ0FtR0ssSUFuR0wsRUFtR0s7aUJBQ1IsSUFBSSxDQUFKLG9CO0FBRFE7QUFuR0w7QUFBQTtBQUFBLGtDQXNHTSxLQXRHTixFQXNHTTtBQUNUO0FBQWdCOztBQUFBOzt5QkFBaEIsbUI7QUFBZ0I7OztBQURQO0FBdEdOO0FBQUE7QUFBQSxrQ0F5R0k7aUJBQUcsS0FBQyxPQUFELENBQVMsZTtBQUFaO0FBekdKO0FBQUE7QUFBQSxtQ0EyR0s7aUJBQUcsS0FBQyxPQUFELENBQVMsZ0I7QUFBWjtBQTNHTDs7QUFBQTtBQUFBOztBQUFQO0FBQ0UsY0FBQyxDQUFELFdBQ0U7QUFBQTtBQUNBLGdCQURBO0FBRUEsZUFGQTtBQUdBLGNBSEE7QUFJQSxlQUFTO2VBQUcsSTtBQUpaO0FBS0Esd0JBQWtCLFFBQVEsQ0FMMUI7QUFNQSx1QkFBaUIsUUFBUSxDQUFDO0FBTjFCLEtBREY7O0FBMkJBLFdBQU87YUFBRyxVO0FBQUgsS0FBUDs7QUFpRkEsZ0JBQVk7QUFDVjs7QUFBQSxVQUEyRCxLQUFDLE9BQUQsVUFBM0Q7QUFBQSxjQUFNLFVBQU4sc0NBQU0sQ0FBTjs7O0FBQ0EsVUFBZ0QsS0FBQyxPQUFELGNBQWhEO0FBQUEsY0FBTSxVQUFOLDJCQUFNLENBQU47OztBQUNBLFVBQWlELE9BQU8sS0FBQyxPQUFELENBQVAsWUFBakQ7QUFBQSxjQUFNLFVBQU4sNEJBQU0sQ0FBTjs7O0FBQ0Esa0NBQTRCLEtBQUssQ0FBTCxpQkFBdUIsS0FBQyxPQUFELENBQXZCLFNBQTVCOztBQUNBLFVBQW9ELENBQXBEO0FBQUEsY0FBTSxVQUFOLCtCQUFNLENBQU47O0FBTFUsS0FBWjs7O0dBN0dLLEMsSUFBQSxDLElBQUEsQ0FBRDs7QUFvSEEsVUFBQyxDQUFQLElBQU07QUFBQTtBQUFBO0FBQ0osa0JBQWEsSUFBYixFQUFhO0FBQUE7O0FBQUE7O0FBQUMsV0FBQyxJQUFELEdBQUMsSUFBRDtBQUFPLFdBQUMsS0FBRCxHQUFDLE1BQUQ7QUFDbkIsV0FBSyxDQUFMLFNBQWUsS0FBZixPQUF1QjtBQUFDLGdCQUFRO0FBQVQsT0FBdkI7QUFDQSx5QkFBZSxFQUFmO0FBRlc7O0FBRFQ7QUFBQTtBQUFBLHFDQUtZLFVBTFosRUFLWTtlQUNkLEtBQUMsV0FBRCxpQjtBQURjO0FBTFo7QUFBQTtBQUFBLHNDQVFhLFdBUmIsRUFRYTtBQUNmO0FBQTRCOztBQUFBOzt1QkFBNUIsK0I7QUFBNEI7OztBQURiO0FBUmI7QUFBQTtBQUFBLGlDQVdNO0FBQ1I7QUFBQTtBQUFBOztBQUFBOzt1QkFDRSxVQUFVLENBQVYsY0FBeUIsS0FBekIsTUFBZ0MsS0FBaEMsTTtBQURGOzs7QUFEUTtBQVhOOztBQUFBO0FBQUE7OztDQTVIRixDLElBQUE7O0FBNElOLE1BQU0sQ0FBTixVQUFpQixRQUFqQixDOzs7Ozs7Ozs7Ozs7OztBQ2hKQSxNQUFNLENBQU4sVUFDRTtBQUFBLFNBQU87QUFBUCxDQURGLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQSxRQUFRLDZFQUFSO0FBQ0EsUUFBUSxVQUFVO0FBQUEsYUFBVztBQUFYLENBQVYsQ0FBUixDOztBQUdNLE9BQU47QUFBQTtBQUFBO0FBQ0UscUJBQWE7QUFBQTs7QUFBQTs7QUFBQyxTQUFDLFNBQUQsR0FBQyxTQUFEO0FBQ1osbUJBQVcsS0FBSyxDQUFMLElBQVUsS0FBVixjQUF5QixFQUFwQztBQURXOztBQURmO0FBQUE7QUFBQSx3QkFHTyxHQUhQLEVBR08sS0FIUCxFQUdPO0FBQ0gsV0FBQyxPQUFELFFBQWdCLEtBQWhCO0FBQ0EsV0FBSyxDQUFMLElBQVUsS0FBVixXQUFzQixLQUF0QjtBQUNBLGFBQU8sS0FBUDtBQUhHO0FBSFA7QUFBQTtBQUFBLHdCQU9PLEdBUFAsRUFPTzthQUNILEtBQUMsT0FBRCxDQUFTLEdBQVQsQztBQURHO0FBUFA7O0FBQUE7QUFBQSxHQUFNLEM7OztBQVdOLE1BQU0sQ0FBTixVQUFpQixPQUFqQixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZBO0FBQUE7O0FBQ0EsSUFBSSx1RkFBSjtBQUNBLE9BQU8sd0VBQVA7QUFDQSxPQUFPLDZFQUFQO0FBQ0EsVUFBVSw0REFBVjs7QUFFTTtBQUFBLE1BQU4sS0FBTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLDBCQUtFLE9BTEYsRUFLRTtBQUNKLFlBQXdCLE9BQU8sQ0FBL0I7aUJBQUEsT0FBTyxDQUFQLFk7O0FBREk7QUFMRjtBQUFBO0FBQUEsMkJBUUcsSUFSSCxFQVFHO2VBQ0wscUI7QUFESztBQVJIO0FBQUE7QUFBQSw2QkFVSyxJQVZMLEVBVUs7QUFDUDtBQUFBLGlCQUFPLElBQUksQ0FBWCxNQUFPLEVBQVA7QUFBQSxTQURPLEM7OztlQUdQLFNBQVMsMEJBQVQsRUFBUyxDQUFULFFBQTBDLGU7QUFIbkM7QUFWTDtBQUFBO0FBQUEsb0NBY1ksUUFkWixFQWNZO0FBQ2Q7QUFBQSwwQkFBa0IsRUFBbEI7O0FBQ29DOztBQUFwQyx5QkFBZSxDQUFmLEtBQXFCLGdCQUFyQjtBQUFvQzs7ZUFDcEMsZUFBZSxDQUFmLE1BQXNCO2lCQUFnQixVO0FBQXRDLFU7QUFIYztBQWRaO0FBQUE7QUFBQSxrQ0FrQlUsUUFsQlYsRUFrQlU7QUFDWjtBQUFBLGNBQU0sQ0FBTjs7QUFDQTs7QUFDRSxpQkFBTyxLQUFLLENBQUwsVUFBZ0IsQ0FBdkI7QUFERjs7ZUFFQSxHO0FBSlk7QUFsQlY7QUFBQTtBQUFBLHVDQXVCZSxRQXZCZixFQXVCZTtBQUNqQjtBQUFBLDBCQUFrQixFQUFsQjs7QUFDb0M7O0FBQXBDLHlCQUFlLENBQWYsS0FBcUIsZ0JBQXJCO0FBQW9DOztlQUNwQyxlQUFlLENBQWYsTUFBc0I7aUJBQWdCLGNBQWMsZUFBZSxDQUFmLE1BQXNCO21CQUFnQixDQUFDLFU7QUFBdkMsWTtBQUFwRCxVO0FBSGlCO0FBdkJmOztBQUFBO0FBQUE7O0FBQU47QUFDRSxPQUFDLENBQUQsV0FBVyxDQUFDLENBQUMsUUFBYjtBQUNBLE9BQUMsQ0FBRCxPQUFPLENBQUMsQ0FBQyxJQUFUO0FBQ0EsT0FBQyxDQUFELFNBQVMsQ0FBQyxDQUFDLE1BQVg7QUFDQSxPQUFDLENBQUQsT0FBTyxDQUFDLENBQUMsSUFBVDtBQUdBLE9BQUMsQ0FBRCxPQUFPLElBQUksQ0FBQyxFQUFaOztDQVBJLEMsSUFBQTs7QUEyQk4sTUFBTSxDQUFOLFVBQWlCLEtBQWpCLEM7Ozs7Ozs7Ozs7O0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLFlBQVksa0JBQWtCLGlCQUFpQix3QkFBd0IsNkJBQTZCLGtDQUFrQyx1Q0FBdUMsb0JBQW9CLGdCQUFnQixrQ0FBa0MsMkJBQTJCLEdBQUcsZ0JBQWdCLDJDQUEyQyxNQUFNLEVBQUUsV0FBVyxxQkFBcUIsU0FBUyxnQkFBZ0IsNkNBQTZDLE1BQU0sa0JBQWtCLFNBQVMsZ0JBQWdCLG1DQUFtQyxNQUFNO0FBQ3JoQixTQUFTLGdCQUFnQixrQ0FBa0MsTUFBTSw0QkFBNEIsYUFBYSxjQUFjLG1CQUFtQix3QkFBd0IsY0FBYyxtQkFBbUIsYUFBYSxjQUFjLHlCQUF5QiwrQkFBK0IsYUFBYSxJQUFJLGNBQWMsYUFBYSxtQkFBbUIsZ0JBQWdCLGNBQWMseUJBQXlCLDZCQUE2QixTQUFTLElBQUksY0FBYyxjQUFjLDhCQUE4QixpQkFBaUIsTUFBTTtBQUN4Z0IsV0FBVyxxQkFBcUIsY0FBYyw4QkFBOEIsaUJBQWlCLE1BQU0sRUFBRSxXQUFXLHFCQUFxQixjQUFjLDhCQUE4QixpQkFBaUIsTUFBTSxFQUFFLFdBQVcscUJBQXFCLGNBQWMsOEJBQThCLHdCQUF3QixNQUFNLGdCQUFnQixjQUFjLHdDQUF3QyxnQkFBZ0IsNERBQTRELGlCQUFpQiw0Q0FBNEMsTUFBTTtBQUN6Z0IsSUFBSSxVQUFVLGlCQUFpQixzSkFBc0osU0FBUyxrQkFBa0IsV0FBVyxrREFBa0QsZ0JBQWdCLG1CQUFtQixJQUFJLDJCQUEyQixTQUFTLGdCQUFnQix1QkFBdUIsZ0JBQWdCLHVCQUF1QixrQkFBa0IsMkJBQTJCO0FBQ25kLGNBQWMsU0FBUyx3QkFBd0Isd0JBQXdCLDRDQUE0QyxtQkFBbUIsWUFBWSw0QkFBNEIsS0FBSyxzRUFBc0UsdUJBQXVCLHlEQUF5RCxZQUFZLDJDQUEyQywrQ0FBK0MsS0FBSyx3QkFBd0IsYUFBYTtBQUN6ZCxpREFBaUQsc0JBQXNCLElBQUksd0NBQXdDLHdCQUF3QixJQUFJLGtDQUFrQyw0QkFBNEIsc0NBQXNDLElBQUksc0JBQXNCLG9CQUFvQix3QkFBd0IsTUFBTSxFQUFFLFdBQVcsdURBQXVELFNBQVMsZ0JBQWdCLFNBQVMsdUJBQXVCLGFBQWEsaUJBQWlCLG9CQUFvQjtBQUM5ZSxnQ0FBZ0MsY0FBYyx5REFBeUQsNkJBQTZCLDRCQUE0QixJQUFJLFNBQVMsV0FBVyxVQUFVLGlCQUFpQixnQ0FBZ0Msa0JBQWtCLFNBQVMsY0FBYyx5Q0FBeUMsc0JBQXNCLGdCQUFnQix3REFBd0QsUUFBUTtBQUMzYSxvQkFBb0IsV0FBVyxRQUFRLFFBQVEsZUFBZSxpRUFBaUUsS0FBSywrRUFBK0UsNERBQTRELFFBQVEsc0VBQXNFLFFBQVEsSUFBSSxFQUFFLFdBQVcsNkJBQTZCLFFBQVEsU0FBUyxpQ0FBaUMsS0FBSyw2QkFBNkIsWUFBWSxNQUFNLEVBQUU7QUFDM2YsMkNBQTJDLG1DQUFtQyxRQUFRLE1BQU0sd0JBQXdCLDJNQUEyTSxhQUFhLGNBQWMsU0FBUyxjQUFjLG9DQUFvQyxnQkFBZ0IsbUJBQW1CLG9CQUFvQixnQkFBZ0IsSUFBSSxFQUFFLFdBQVc7QUFDN2UsQ0FBQyxLQUFLLE1BQU0sRUFBRSxnQ0FBZ0MsU0FBUyxrQ0FBa0MsOERBQThELFlBQVksY0FBYyxvQ0FBb0MsY0FBYyx1Q0FBdUMsY0FBYywwRkFBMEYsY0FBYyxZQUFZLDREQUE0RCxzQkFBc0IsZ0JBQWdCO0FBQzllLGNBQWMsdUNBQXVDLGNBQWMsbUJBQW1CLGVBQWUsY0FBYywrQkFBK0IsMEJBQTBCLGlDQUFpQyxXQUFXLDhCQUE4QixnQkFBZ0IsU0FBUyxNQUFNLGtCQUFrQixLQUFLLElBQUksNkJBQTZCLGdGQUFnRixNQUFNLGFBQWEsU0FBUyxpQ0FBaUMsZ0JBQWdCO0FBQzFlLENBQUMsZ0JBQWdCLHNCQUFzQiwrQ0FBK0MsbUJBQW1CLGNBQWMsc0NBQXNDLGtDQUFrQyxnQkFBZ0Isb0JBQW9CLG9CQUFvQixNQUFNLFdBQVcsU0FBUyxrQkFBa0IsU0FBUyxRQUFRLEVBQUUsd0JBQXdCLE1BQU0sRUFBRSxnQkFBZ0IscUNBQXFDLFNBQVMsZ0JBQWdCLG9CQUFvQixnQkFBZ0Isb0JBQW9CLGNBQWM7QUFDMWUsQ0FBQyx3QkFBd0IsZ0NBQWdDLGdDQUFnQyxzQ0FBc0MsK0JBQStCLDBCQUEwQixNQUFNLEVBQUUsa0JBQWtCLDJDQUEyQyxXQUFXLGNBQWMsUUFBUSxNQUFNLE1BQU0sc0JBQXNCLHFEQUFxRCxHQUFHLFFBQVEsT0FBTyw4QkFBOEIsUUFBUSxPQUFPLGlDQUFpQywwQkFBMEIsVUFBVTtBQUN6ZixnRUFBZ0Usc0JBQXNCLHdGQUF3RixZQUFZLGtGQUFrRixpRUFBaUUsMkRBQTJELDJCQUEyQiw0REFBNEQ7QUFDL2QsaURBQWlELDBEQUEwRCxhQUFhLGNBQWMsa0JBQWtCLGNBQWMsa0JBQWtCLGFBQWEsa0NBQWtDLHVEQUF1RCxnQkFBZ0IsNEJBQTRCLGlJQUFpSSxlQUFlLDJCQUEyQixJQUFJO0FBQ3pmLGtCQUFrQix5QkFBeUIsU0FBUyxpQkFBaUIsc0JBQXNCLDZEQUE2RCxlQUFlLHNDQUFzQyx5RkFBeUYsbUJBQW1CLG9CQUFvQixVQUFVLHVDQUF1Qyw0REFBNEQ7QUFDMWIsaVVBQWlVLGdDQUFnQyw0REFBNEQ7QUFDN1osRUFBRSxnQ0FBZ0MsdURBQXVELGVBQWUsc0NBQXNDLGlCQUFpQixlQUFlLG1HQUFtRyxpQkFBaUIsc0JBQXNCLGVBQWUscUhBQXFILGVBQWUsdUJBQXVCO0FBQ2xlLENBQUMsaUJBQWlCLG1CQUFtQixzREFBc0QsbUJBQW1CLDhDQUE4Qyx1REFBdUQsTUFBTSxhQUFhLHNCQUFzQixNQUFNLFdBQVcsOEJBQThCLGVBQWUsc0NBQXNDLFdBQVcsOEJBQThCLGVBQWUsWUFBWSxJQUFJLGtCQUFrQixVQUFVLFlBQVksU0FBUyxlQUFlO0FBQ3hlLENBQUMsZUFBZSx5QkFBeUIsbUJBQW1CLGlCQUFpQixhQUFhLG1EQUFtRCxxRUFBcUUsa0dBQWtHLGtDQUFrQyxpQkFBaUIsMkJBQTJCLGVBQWUscUNBQXFDLGVBQWU7QUFDcmMsQ0FBQyxlQUFlLDZEQUE2RCxlQUFlLGVBQWUsNkNBQTZDLGVBQWUsbUNBQW1DLGVBQWUsK0pBQStKLGVBQWUsMERBQTBELGVBQWUsdUJBQXVCO0FBQ3ZlLHNDQUFzQyxpQkFBaUIsTUFBTSxjQUFjLElBQUksTUFBTSxTQUFTLGdDQUFnQyxNQUFNLEVBQUUsZUFBZSwrQ0FBK0MsT0FBTywyRUFBMkUsU0FBUyxlQUFlLGdCQUFnQixlQUFlLFdBQVcsNkRBQTZELElBQUksYUFBYSxTQUFTLGVBQWUscUJBQXFCLGVBQWUsbUJBQW1CO0FBQ3JmLElBQUksS0FBSyw2Q0FBNkMsSUFBSSxTQUFTLGVBQWUsa0JBQWtCLFVBQVUsZUFBZSxTQUFTLGVBQWUsd0NBQXdDLGVBQWUsMkJBQTJCLGNBQWMsU0FBUyxjQUFjLGFBQWE7QUFDelI7QUFDQSxVQUFVO0FBQ1YsMEVBQTBFLDZLQUE2SyxLQUF3QixnSkFBZ0osR0FBRyxJQUFJLHNDQUFzQyxRQUFRLFVBQVUsVUFBVTtBQUN4ZSx1REFBdUQsK0JBQStCLHdGQUF3RixxVEFBcVQsSUFBSTtBQUN2ZSxXQUFXLE1BQU0sSUFBSSxXQUFXLHFWQUFxVixjQUFjLG1CQUFtQixtRUFBbUUsR0FBRztBQUM1ZCw0QkFBNEIsYUFBYSxnQ0FBZ0MsaUVBQWlFLDZCQUE2QixvQkFBb0IsNkVBQTZFLDZCQUE2QixvQkFBb0IsaUNBQWlDLCtCQUErQixvQkFBb0IscUZBQXFGO0FBQ2xlLDZCQUE2QixnQ0FBZ0Msb0JBQW9CLGdGQUFnRiw2QkFBNkIsb0JBQW9CLCtCQUErQiw2QkFBNkIsNEJBQTRCLCtCQUErQiw2QkFBNkIsc0RBQXNELDhCQUE4QiwyQkFBMkI7QUFDcmQsRUFBRSxnQ0FBZ0MsZ0RBQWdELDZCQUE2Qix3QkFBd0IsNkJBQTZCLHdCQUF3QiwrQkFBK0IseUJBQXlCLGdEQUFnRCw4Q0FBOEMsNkRBQTZELDZCQUE2Qiw0QkFBNEIsOEJBQThCO0FBQ3RlLFlBQVksZ0NBQWdDLG9CQUFvQix3Q0FBd0MsNkJBQTZCLDRCQUE0Qiw2QkFBNkIsNEJBQTRCLCtCQUErQixvQkFBb0IsbUJBQW1CLGlCQUFpQixrRUFBa0UseUJBQXlCLHlDQUF5Qyx3QkFBd0Isd0JBQXdCO0FBQ3JlLDJDQUEyQyxFQUFFLHNCQUFzQixtREFBbUQsb0JBQW9CLEdBQUcsc0JBQXNCLGFBQWEsRUFBRSxvQkFBb0IsU0FBUyxTQUFTLHlOQUF5TixXQUFXO0FBQzViLGtDQUFrQyw2QkFBNkIsaUNBQWlDLDZCQUE2QixpQ0FBaUMsU0FBUyxFQUFFLG1CQUFtQixZQUFZLGtCQUFrQixzQkFBc0IsWUFBWSxnQ0FBZ0MsU0FBUyw4QkFBOEIsb0JBQW9CLG1CQUFtQixpQ0FBaUMsRUFBRSxjQUFjLFNBQVMsYUFBYSxTQUFTO0FBQzFiLGtDQUFrQyxJQUFJLEVBQUUsV0FBVyxvQkFBb0IsaUJBQWlCLGtCQUFrQix3REFBd0QsdUZBQXVGLDJCQUEyQixlQUFlLFlBQVksb0NBQW9DLFFBQVEsT0FBTyxXQUFXLFVBQVUsZUFBZSx3RUFBd0UsYUFBYSxhQUFhLE1BQU07QUFDOWUsd0JBQXdCLE1BQU0sRUFBRSxrQkFBa0Isa0RBQWtELFNBQVMsaUJBQWlCLDRCQUE0QixlQUFlLFNBQVMsb0JBQW9CLFlBQVksa0JBQWtCLG9DQUFvQyw4QkFBOEIsbUJBQW1CLElBQUksV0FBVyxTQUFTLEVBQUUseUlBQXlJLFNBQVM7QUFDcmUseUJBQXlCLGFBQWEsTUFBTSxFQUFFLFdBQVcsZ0NBQWdDLHlCQUF5QixJQUFJLHdCQUF3QixRQUFRLDRCQUE0QixTQUFTO0FBQzNMLFFBQVEsYSIsImZpbGUiOiJhbGVwaGJldC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkFsZXBoQmV0XCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkFsZXBoQmV0XCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9hbGVwaGJldC5jb2ZmZWVcIik7XG4iLCIoZnVuY3Rpb24gKCkge1xuXHQvLyBCYXNpbFxuXHR2YXIgQmFzaWwgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuXHRcdHJldHVybiBCYXNpbC51dGlscy5leHRlbmQoe30sIEJhc2lsLnBsdWdpbnMsIG5ldyBCYXNpbC5TdG9yYWdlKCkuaW5pdChvcHRpb25zKSk7XG5cdH07XG5cblx0Ly8gVmVyc2lvblxuXHRCYXNpbC52ZXJzaW9uID0gJzAuNC4xMCc7XG5cblx0Ly8gVXRpbHNcblx0QmFzaWwudXRpbHMgPSB7XG5cdFx0ZXh0ZW5kOiBmdW5jdGlvbiAoKSB7XG5cdFx0XHR2YXIgZGVzdGluYXRpb24gPSB0eXBlb2YgYXJndW1lbnRzWzBdID09PSAnb2JqZWN0JyA/IGFyZ3VtZW50c1swXSA6IHt9O1xuXHRcdFx0Zm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0aWYgKGFyZ3VtZW50c1tpXSAmJiB0eXBlb2YgYXJndW1lbnRzW2ldID09PSAnb2JqZWN0Jylcblx0XHRcdFx0XHRmb3IgKHZhciBwcm9wZXJ0eSBpbiBhcmd1bWVudHNbaV0pXG5cdFx0XHRcdFx0XHRkZXN0aW5hdGlvbltwcm9wZXJ0eV0gPSBhcmd1bWVudHNbaV1bcHJvcGVydHldO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGRlc3RpbmF0aW9uO1xuXHRcdH0sXG5cdFx0ZWFjaDogZnVuY3Rpb24gKG9iaiwgZm5JdGVyYXRvciwgY29udGV4dCkge1xuXHRcdFx0aWYgKHRoaXMuaXNBcnJheShvYmopKSB7XG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgb2JqLmxlbmd0aDsgaSsrKVxuXHRcdFx0XHRcdGlmIChmbkl0ZXJhdG9yLmNhbGwoY29udGV4dCwgb2JqW2ldLCBpKSA9PT0gZmFsc2UpIHJldHVybjtcblx0XHRcdH0gZWxzZSBpZiAob2JqKSB7XG5cdFx0XHRcdGZvciAodmFyIGtleSBpbiBvYmopXG5cdFx0XHRcdFx0aWYgKGZuSXRlcmF0b3IuY2FsbChjb250ZXh0LCBvYmpba2V5XSwga2V5KSA9PT0gZmFsc2UpIHJldHVybjtcblx0XHRcdH1cblx0XHR9LFxuXHRcdHRyeUVhY2g6IGZ1bmN0aW9uIChvYmosIGZuSXRlcmF0b3IsIGZuRXJyb3IsIGNvbnRleHQpIHtcblx0XHRcdHRoaXMuZWFjaChvYmosIGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0cmV0dXJuIGZuSXRlcmF0b3IuY2FsbChjb250ZXh0LCB2YWx1ZSwga2V5KTtcblx0XHRcdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdFx0XHRpZiAodGhpcy5pc0Z1bmN0aW9uKGZuRXJyb3IpKSB7XG5cdFx0XHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdFx0XHRmbkVycm9yLmNhbGwoY29udGV4dCwgdmFsdWUsIGtleSwgZXJyb3IpO1xuXHRcdFx0XHRcdFx0fSBjYXRjaCAoZXJyb3IpIHt9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9LCB0aGlzKTtcblx0XHR9LFxuXHRcdHJlZ2lzdGVyUGx1Z2luOiBmdW5jdGlvbiAobWV0aG9kcykge1xuXHRcdFx0QmFzaWwucGx1Z2lucyA9IHRoaXMuZXh0ZW5kKG1ldGhvZHMsIEJhc2lsLnBsdWdpbnMpO1xuXHRcdH0sXG5cdFx0Z2V0VHlwZU9mOiBmdW5jdGlvbiAob2JqKSB7XG5cdFx0XHRpZiAodHlwZW9mIG9iaiA9PT0gJ3VuZGVmaW5lZCcgfHwgb2JqID09PSBudWxsKVxuXHRcdFx0XHRyZXR1cm4gJycgKyBvYmo7XG5cdFx0XHRyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iaikucmVwbGFjZSgvXlxcW29iamVjdFxccyguKilcXF0kLywgZnVuY3Rpb24gKCQwLCAkMSkgeyByZXR1cm4gJDEudG9Mb3dlckNhc2UoKTsgfSk7XG5cdFx0fVxuXHR9O1xuXG5cdC8vIEFkZCBzb21lIGlzVHlwZSBtZXRob2RzOiBpc0FyZ3VtZW50cywgaXNCb29sZWFuLCBpc0Z1bmN0aW9uLCBpc1N0cmluZywgaXNBcnJheSwgaXNOdW1iZXIsIGlzRGF0ZSwgaXNSZWdFeHAsIGlzVW5kZWZpbmVkLCBpc051bGwuXG5cdHZhciB0eXBlcyA9IFsnQXJndW1lbnRzJywgJ0Jvb2xlYW4nLCAnRnVuY3Rpb24nLCAnU3RyaW5nJywgJ0FycmF5JywgJ051bWJlcicsICdEYXRlJywgJ1JlZ0V4cCcsICdVbmRlZmluZWQnLCAnTnVsbCddO1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHR5cGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0QmFzaWwudXRpbHNbJ2lzJyArIHR5cGVzW2ldXSA9IChmdW5jdGlvbiAodHlwZSkge1xuXHRcdFx0cmV0dXJuIGZ1bmN0aW9uIChvYmopIHtcblx0XHRcdFx0cmV0dXJuIEJhc2lsLnV0aWxzLmdldFR5cGVPZihvYmopID09PSB0eXBlLnRvTG93ZXJDYXNlKCk7XG5cdFx0XHR9O1xuXHRcdH0pKHR5cGVzW2ldKTtcblx0fVxuXG5cdC8vIFBsdWdpbnNcblx0QmFzaWwucGx1Z2lucyA9IHt9O1xuXG5cdC8vIE9wdGlvbnNcblx0QmFzaWwub3B0aW9ucyA9IEJhc2lsLnV0aWxzLmV4dGVuZCh7XG5cdFx0bmFtZXNwYWNlOiAnYjQ1aTEnLFxuXHRcdHN0b3JhZ2VzOiBbJ2xvY2FsJywgJ2Nvb2tpZScsICdzZXNzaW9uJywgJ21lbW9yeSddLFxuXHRcdGV4cGlyZURheXM6IDM2NSxcblx0XHRrZXlEZWxpbWl0ZXI6ICcuJ1xuXHR9LCB3aW5kb3cuQmFzaWwgPyB3aW5kb3cuQmFzaWwub3B0aW9ucyA6IHt9KTtcblxuXHQvLyBTdG9yYWdlXG5cdEJhc2lsLlN0b3JhZ2UgPSBmdW5jdGlvbiAoKSB7XG5cdFx0dmFyIF9zYWx0ID0gJ2I0NWkxJyArIChNYXRoLnJhbmRvbSgpICsgMSlcblx0XHRcdFx0LnRvU3RyaW5nKDM2KVxuXHRcdFx0XHQuc3Vic3RyaW5nKDcpLFxuXHRcdFx0X3N0b3JhZ2VzID0ge30sXG5cdFx0XHRfaXNWYWxpZEtleSA9IGZ1bmN0aW9uIChrZXkpIHtcblx0XHRcdFx0dmFyIHR5cGUgPSBCYXNpbC51dGlscy5nZXRUeXBlT2Yoa2V5KTtcblx0XHRcdFx0cmV0dXJuICh0eXBlID09PSAnc3RyaW5nJyAmJiBrZXkpIHx8IHR5cGUgPT09ICdudW1iZXInIHx8IHR5cGUgPT09ICdib29sZWFuJztcblx0XHRcdH0sXG5cdFx0XHRfdG9TdG9yYWdlc0FycmF5ID0gZnVuY3Rpb24gKHN0b3JhZ2VzKSB7XG5cdFx0XHRcdGlmIChCYXNpbC51dGlscy5pc0FycmF5KHN0b3JhZ2VzKSlcblx0XHRcdFx0XHRyZXR1cm4gc3RvcmFnZXM7XG5cdFx0XHRcdHJldHVybiBCYXNpbC51dGlscy5pc1N0cmluZyhzdG9yYWdlcykgPyBbc3RvcmFnZXNdIDogW107XG5cdFx0XHR9LFxuXHRcdFx0X3RvU3RvcmVkS2V5ID0gZnVuY3Rpb24gKG5hbWVzcGFjZSwgcGF0aCwgZGVsaW1pdGVyKSB7XG5cdFx0XHRcdHZhciBrZXkgPSAnJztcblx0XHRcdFx0aWYgKF9pc1ZhbGlkS2V5KHBhdGgpKSB7XG5cdFx0XHRcdFx0a2V5ICs9IHBhdGg7XG5cdFx0XHRcdH0gZWxzZSBpZiAoQmFzaWwudXRpbHMuaXNBcnJheShwYXRoKSkge1xuXHRcdFx0XHRcdHBhdGggPSBCYXNpbC51dGlscy5pc0Z1bmN0aW9uKHBhdGguZmlsdGVyKSA/IHBhdGguZmlsdGVyKF9pc1ZhbGlkS2V5KSA6IHBhdGg7XG5cdFx0XHRcdFx0a2V5ID0gcGF0aC5qb2luKGRlbGltaXRlcik7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIGtleSAmJiBfaXNWYWxpZEtleShuYW1lc3BhY2UpID8gbmFtZXNwYWNlICsgZGVsaW1pdGVyICsga2V5IDoga2V5O1xuIFx0XHRcdH0sXG5cdFx0XHRfdG9LZXlOYW1lID0gZnVuY3Rpb24gKG5hbWVzcGFjZSwga2V5LCBkZWxpbWl0ZXIpIHtcblx0XHRcdFx0aWYgKCFfaXNWYWxpZEtleShuYW1lc3BhY2UpKVxuXHRcdFx0XHRcdHJldHVybiBrZXk7XG5cdFx0XHRcdHJldHVybiBrZXkucmVwbGFjZShuZXcgUmVnRXhwKCdeJyArIG5hbWVzcGFjZSArIGRlbGltaXRlciksICcnKTtcblx0XHRcdH0sXG5cdFx0XHRfdG9TdG9yZWRWYWx1ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRcdFx0XHRyZXR1cm4gSlNPTi5zdHJpbmdpZnkodmFsdWUpO1xuXHRcdFx0fSxcblx0XHRcdF9mcm9tU3RvcmVkVmFsdWUgPSBmdW5jdGlvbiAodmFsdWUpIHtcblx0XHRcdFx0cmV0dXJuIHZhbHVlID8gSlNPTi5wYXJzZSh2YWx1ZSkgOiBudWxsO1xuXHRcdFx0fTtcblxuXHRcdC8vIEhUTUw1IHdlYiBzdG9yYWdlIGludGVyZmFjZVxuXHRcdHZhciB3ZWJTdG9yYWdlSW50ZXJmYWNlID0ge1xuXHRcdFx0ZW5naW5lOiBudWxsLFxuXHRcdFx0Y2hlY2s6IGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHR3aW5kb3dbdGhpcy5lbmdpbmVdLnNldEl0ZW0oX3NhbHQsIHRydWUpO1xuXHRcdFx0XHRcdHdpbmRvd1t0aGlzLmVuZ2luZV0ucmVtb3ZlSXRlbShfc2FsdCk7XG5cdFx0XHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9LFxuXHRcdFx0c2V0OiBmdW5jdGlvbiAoa2V5LCB2YWx1ZSwgb3B0aW9ucykge1xuXHRcdFx0XHRpZiAoIWtleSlcblx0XHRcdFx0XHR0aHJvdyBFcnJvcignaW52YWxpZCBrZXknKTtcblx0XHRcdFx0d2luZG93W3RoaXMuZW5naW5lXS5zZXRJdGVtKGtleSwgdmFsdWUpO1xuXHRcdFx0fSxcblx0XHRcdGdldDogZnVuY3Rpb24gKGtleSkge1xuXHRcdFx0XHRyZXR1cm4gd2luZG93W3RoaXMuZW5naW5lXS5nZXRJdGVtKGtleSk7XG5cdFx0XHR9LFxuXHRcdFx0cmVtb3ZlOiBmdW5jdGlvbiAoa2V5KSB7XG5cdFx0XHRcdHdpbmRvd1t0aGlzLmVuZ2luZV0ucmVtb3ZlSXRlbShrZXkpO1xuXHRcdFx0fSxcblx0XHRcdHJlc2V0OiBmdW5jdGlvbiAobmFtZXNwYWNlKSB7XG5cdFx0XHRcdGZvciAodmFyIGkgPSAwLCBrZXk7IGkgPCB3aW5kb3dbdGhpcy5lbmdpbmVdLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0a2V5ID0gd2luZG93W3RoaXMuZW5naW5lXS5rZXkoaSk7XG5cdFx0XHRcdFx0aWYgKCFuYW1lc3BhY2UgfHwga2V5LmluZGV4T2YobmFtZXNwYWNlKSA9PT0gMCkge1xuXHRcdFx0XHRcdFx0dGhpcy5yZW1vdmUoa2V5KTtcblx0XHRcdFx0XHRcdGktLTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRrZXlzOiBmdW5jdGlvbiAobmFtZXNwYWNlLCBkZWxpbWl0ZXIpIHtcblx0XHRcdFx0dmFyIGtleXMgPSBbXTtcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDAsIGtleTsgaSA8IHdpbmRvd1t0aGlzLmVuZ2luZV0ubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRrZXkgPSB3aW5kb3dbdGhpcy5lbmdpbmVdLmtleShpKTtcblx0XHRcdFx0XHRpZiAoIW5hbWVzcGFjZSB8fCBrZXkuaW5kZXhPZihuYW1lc3BhY2UpID09PSAwKVxuXHRcdFx0XHRcdFx0a2V5cy5wdXNoKF90b0tleU5hbWUobmFtZXNwYWNlLCBrZXksIGRlbGltaXRlcikpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBrZXlzO1xuXHRcdFx0fVxuXHRcdH07XG5cblx0XHQvLyBsb2NhbCBzdG9yYWdlXG5cdFx0X3N0b3JhZ2VzLmxvY2FsID0gQmFzaWwudXRpbHMuZXh0ZW5kKHt9LCB3ZWJTdG9yYWdlSW50ZXJmYWNlLCB7XG5cdFx0XHRlbmdpbmU6ICdsb2NhbFN0b3JhZ2UnXG5cdFx0fSk7XG5cdFx0Ly8gc2Vzc2lvbiBzdG9yYWdlXG5cdFx0X3N0b3JhZ2VzLnNlc3Npb24gPSBCYXNpbC51dGlscy5leHRlbmQoe30sIHdlYlN0b3JhZ2VJbnRlcmZhY2UsIHtcblx0XHRcdGVuZ2luZTogJ3Nlc3Npb25TdG9yYWdlJ1xuXHRcdH0pO1xuXG5cdFx0Ly8gbWVtb3J5IHN0b3JhZ2Vcblx0XHRfc3RvcmFnZXMubWVtb3J5ID0ge1xuXHRcdFx0X2hhc2g6IHt9LFxuXHRcdFx0Y2hlY2s6IGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9LFxuXHRcdFx0c2V0OiBmdW5jdGlvbiAoa2V5LCB2YWx1ZSwgb3B0aW9ucykge1xuXHRcdFx0XHRpZiAoIWtleSlcblx0XHRcdFx0XHR0aHJvdyBFcnJvcignaW52YWxpZCBrZXknKTtcblx0XHRcdFx0dGhpcy5faGFzaFtrZXldID0gdmFsdWU7XG5cdFx0XHR9LFxuXHRcdFx0Z2V0OiBmdW5jdGlvbiAoa2V5KSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLl9oYXNoW2tleV0gfHwgbnVsbDtcblx0XHRcdH0sXG5cdFx0XHRyZW1vdmU6IGZ1bmN0aW9uIChrZXkpIHtcblx0XHRcdFx0ZGVsZXRlIHRoaXMuX2hhc2hba2V5XTtcblx0XHRcdH0sXG5cdFx0XHRyZXNldDogZnVuY3Rpb24gKG5hbWVzcGFjZSkge1xuXHRcdFx0XHRmb3IgKHZhciBrZXkgaW4gdGhpcy5faGFzaCkge1xuXHRcdFx0XHRcdGlmICghbmFtZXNwYWNlIHx8IGtleS5pbmRleE9mKG5hbWVzcGFjZSkgPT09IDApXG5cdFx0XHRcdFx0XHR0aGlzLnJlbW92ZShrZXkpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0a2V5czogZnVuY3Rpb24gKG5hbWVzcGFjZSwgZGVsaW1pdGVyKSB7XG5cdFx0XHRcdHZhciBrZXlzID0gW107XG5cdFx0XHRcdGZvciAodmFyIGtleSBpbiB0aGlzLl9oYXNoKVxuXHRcdFx0XHRcdGlmICghbmFtZXNwYWNlIHx8IGtleS5pbmRleE9mKG5hbWVzcGFjZSkgPT09IDApXG5cdFx0XHRcdFx0XHRrZXlzLnB1c2goX3RvS2V5TmFtZShuYW1lc3BhY2UsIGtleSwgZGVsaW1pdGVyKSk7XG5cdFx0XHRcdHJldHVybiBrZXlzO1xuXHRcdFx0fVxuXHRcdH07XG5cblx0XHQvLyBjb29raWUgc3RvcmFnZVxuXHRcdF9zdG9yYWdlcy5jb29raWUgPSB7XG5cdFx0XHRjaGVjazogZnVuY3Rpb24gKG9wdGlvbnMpIHtcblx0XHRcdFx0aWYgKCFuYXZpZ2F0b3IuY29va2llRW5hYmxlZClcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlmICh3aW5kb3cuc2VsZiAhPT0gd2luZG93LnRvcCkge1xuXHRcdFx0XHRcdC8vIHdlIG5lZWQgdG8gY2hlY2sgdGhpcmQtcGFydHkgY29va2llcztcblx0XHRcdFx0XHR2YXIgY29va2llID0gJ3RoaXJkcGFydHkuY2hlY2s9JyArIE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDEwMDApO1xuXHRcdFx0XHRcdGRvY3VtZW50LmNvb2tpZSA9IGNvb2tpZSArICc7IHBhdGg9Lyc7XG5cdFx0XHRcdFx0cmV0dXJuIGRvY3VtZW50LmNvb2tpZS5pbmRleE9mKGNvb2tpZSkgIT09IC0xO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIGlmIGNvb2tpZSBzZWN1cmUgYWN0aXZhdGVkLCBlbnN1cmUgaXQgd29ya3MgKG5vdCB0aGUgY2FzZSBpZiB3ZSBhcmUgaW4gaHR0cCBvbmx5KVxuXHRcdFx0XHRpZiAob3B0aW9ucyAmJiBvcHRpb25zLnNlY3VyZSkge1xuXHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHR0aGlzLnNldChfc2FsdCwgX3NhbHQsIG9wdGlvbnMpO1xuXHRcdFx0XHRcdFx0dmFyIGhhc1NlY3VyZWx5UGVyc2l0ZWQgPSB0aGlzLmdldChfc2FsdCkgPT09IF9zYWx0O1xuXHRcdFx0XHRcdFx0dGhpcy5yZW1vdmUoX3NhbHQpO1xuXHRcdFx0XHRcdFx0cmV0dXJuIGhhc1NlY3VyZWx5UGVyc2l0ZWQ7XG5cdFx0XHRcdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9LFxuXHRcdFx0c2V0OiBmdW5jdGlvbiAoa2V5LCB2YWx1ZSwgb3B0aW9ucykge1xuXHRcdFx0XHRpZiAoIXRoaXMuY2hlY2soKSlcblx0XHRcdFx0XHR0aHJvdyBFcnJvcignY29va2llcyBhcmUgZGlzYWJsZWQnKTtcblx0XHRcdFx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cdFx0XHRcdGlmICgha2V5KVxuXHRcdFx0XHRcdHRocm93IEVycm9yKCdpbnZhbGlkIGtleScpO1xuXHRcdFx0XHR2YXIgY29va2llID0gZW5jb2RlVVJJQ29tcG9uZW50KGtleSkgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpO1xuXHRcdFx0XHQvLyBoYW5kbGUgZXhwaXJhdGlvbiBkYXlzXG5cdFx0XHRcdGlmIChvcHRpb25zLmV4cGlyZURheXMpIHtcblx0XHRcdFx0XHR2YXIgZGF0ZSA9IG5ldyBEYXRlKCk7XG5cdFx0XHRcdFx0ZGF0ZS5zZXRUaW1lKGRhdGUuZ2V0VGltZSgpICsgKG9wdGlvbnMuZXhwaXJlRGF5cyAqIDI0ICogNjAgKiA2MCAqIDEwMDApKTtcblx0XHRcdFx0XHRjb29raWUgKz0gJzsgZXhwaXJlcz0nICsgZGF0ZS50b0dNVFN0cmluZygpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIGhhbmRsZSBkb21haW5cblx0XHRcdFx0aWYgKG9wdGlvbnMuZG9tYWluICYmIG9wdGlvbnMuZG9tYWluICE9PSBkb2N1bWVudC5kb21haW4pIHtcblx0XHRcdFx0XHR2YXIgX2RvbWFpbiA9IG9wdGlvbnMuZG9tYWluLnJlcGxhY2UoL15cXC4vLCAnJyk7XG5cdFx0XHRcdFx0aWYgKGRvY3VtZW50LmRvbWFpbi5pbmRleE9mKF9kb21haW4pID09PSAtMSB8fCBfZG9tYWluLnNwbGl0KCcuJykubGVuZ3RoIDw9IDEpXG5cdFx0XHRcdFx0XHR0aHJvdyBFcnJvcignaW52YWxpZCBkb21haW4nKTtcblx0XHRcdFx0XHRjb29raWUgKz0gJzsgZG9tYWluPScgKyBvcHRpb25zLmRvbWFpbjtcblx0XHRcdFx0fVxuXHRcdFx0XHQvLyBoYW5kbGUgc2VjdXJlXG5cdFx0XHRcdGlmIChvcHRpb25zLnNlY3VyZSA9PT0gdHJ1ZSkge1xuXHRcdFx0XHRcdGNvb2tpZSArPSAnOyBTZWN1cmUnO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGRvY3VtZW50LmNvb2tpZSA9IGNvb2tpZSArICc7IHBhdGg9Lyc7XG5cdFx0XHR9LFxuXHRcdFx0Z2V0OiBmdW5jdGlvbiAoa2V5KSB7XG5cdFx0XHRcdGlmICghdGhpcy5jaGVjaygpKVxuXHRcdFx0XHRcdHRocm93IEVycm9yKCdjb29raWVzIGFyZSBkaXNhYmxlZCcpO1xuXHRcdFx0XHR2YXIgZW5jb2RlZEtleSA9IGVuY29kZVVSSUNvbXBvbmVudChrZXkpO1xuXHRcdFx0XHR2YXIgY29va2llcyA9IGRvY3VtZW50LmNvb2tpZSA/IGRvY3VtZW50LmNvb2tpZS5zcGxpdCgnOycpIDogW107XG5cdFx0XHRcdC8vIHJldHJpZXZlIGxhc3QgdXBkYXRlZCBjb29raWUgZmlyc3Rcblx0XHRcdFx0Zm9yICh2YXIgaSA9IGNvb2tpZXMubGVuZ3RoIC0gMSwgY29va2llOyBpID49IDA7IGktLSkge1xuXHRcdFx0XHRcdGNvb2tpZSA9IGNvb2tpZXNbaV0ucmVwbGFjZSgvXlxccyovLCAnJyk7XG5cdFx0XHRcdFx0aWYgKGNvb2tpZS5pbmRleE9mKGVuY29kZWRLZXkgKyAnPScpID09PSAwKVxuXHRcdFx0XHRcdFx0cmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChjb29raWUuc3Vic3RyaW5nKGVuY29kZWRLZXkubGVuZ3RoICsgMSwgY29va2llLmxlbmd0aCkpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0fSxcblx0XHRcdHJlbW92ZTogZnVuY3Rpb24gKGtleSkge1xuXHRcdFx0XHQvLyByZW1vdmUgY29va2llIGZyb20gbWFpbiBkb21haW5cblx0XHRcdFx0dGhpcy5zZXQoa2V5LCAnJywgeyBleHBpcmVEYXlzOiAtMSB9KTtcblx0XHRcdFx0Ly8gcmVtb3ZlIGNvb2tpZSBmcm9tIHVwcGVyIGRvbWFpbnNcblx0XHRcdFx0dmFyIGRvbWFpblBhcnRzID0gZG9jdW1lbnQuZG9tYWluLnNwbGl0KCcuJyk7XG5cdFx0XHRcdGZvciAodmFyIGkgPSBkb21haW5QYXJ0cy5sZW5ndGg7IGkgPiAxOyBpLS0pIHtcblx0XHRcdFx0XHR0aGlzLnNldChrZXksICcnLCB7IGV4cGlyZURheXM6IC0xLCBkb21haW46ICcuJyArIGRvbWFpblBhcnRzLnNsaWNlKC0gaSkuam9pbignLicpIH0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0cmVzZXQ6IGZ1bmN0aW9uIChuYW1lc3BhY2UpIHtcblx0XHRcdFx0dmFyIGNvb2tpZXMgPSBkb2N1bWVudC5jb29raWUgPyBkb2N1bWVudC5jb29raWUuc3BsaXQoJzsnKSA6IFtdO1xuXHRcdFx0XHRmb3IgKHZhciBpID0gMCwgY29va2llLCBrZXk7IGkgPCBjb29raWVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0Y29va2llID0gY29va2llc1tpXS5yZXBsYWNlKC9eXFxzKi8sICcnKTtcblx0XHRcdFx0XHRrZXkgPSBjb29raWUuc3Vic3RyKDAsIGNvb2tpZS5pbmRleE9mKCc9JykpO1xuXHRcdFx0XHRcdGlmICghbmFtZXNwYWNlIHx8IGtleS5pbmRleE9mKG5hbWVzcGFjZSkgPT09IDApXG5cdFx0XHRcdFx0XHR0aGlzLnJlbW92ZShrZXkpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0a2V5czogZnVuY3Rpb24gKG5hbWVzcGFjZSwgZGVsaW1pdGVyKSB7XG5cdFx0XHRcdGlmICghdGhpcy5jaGVjaygpKVxuXHRcdFx0XHRcdHRocm93IEVycm9yKCdjb29raWVzIGFyZSBkaXNhYmxlZCcpO1xuXHRcdFx0XHR2YXIga2V5cyA9IFtdLFxuXHRcdFx0XHRcdGNvb2tpZXMgPSBkb2N1bWVudC5jb29raWUgPyBkb2N1bWVudC5jb29raWUuc3BsaXQoJzsnKSA6IFtdO1xuXHRcdFx0XHRmb3IgKHZhciBpID0gMCwgY29va2llLCBrZXk7IGkgPCBjb29raWVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0Y29va2llID0gY29va2llc1tpXS5yZXBsYWNlKC9eXFxzKi8sICcnKTtcblx0XHRcdFx0XHRrZXkgPSBkZWNvZGVVUklDb21wb25lbnQoY29va2llLnN1YnN0cigwLCBjb29raWUuaW5kZXhPZignPScpKSk7XG5cdFx0XHRcdFx0aWYgKCFuYW1lc3BhY2UgfHwga2V5LmluZGV4T2YobmFtZXNwYWNlKSA9PT0gMClcblx0XHRcdFx0XHRcdGtleXMucHVzaChfdG9LZXlOYW1lKG5hbWVzcGFjZSwga2V5LCBkZWxpbWl0ZXIpKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4ga2V5cztcblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0cmV0dXJuIHtcblx0XHRcdGluaXQ6IGZ1bmN0aW9uIChvcHRpb25zKSB7XG5cdFx0XHRcdHRoaXMuc2V0T3B0aW9ucyhvcHRpb25zKTtcblx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHR9LFxuXHRcdFx0c2V0T3B0aW9uczogZnVuY3Rpb24gKG9wdGlvbnMpIHtcblx0XHRcdFx0dGhpcy5vcHRpb25zID0gQmFzaWwudXRpbHMuZXh0ZW5kKHt9LCB0aGlzLm9wdGlvbnMgfHwgQmFzaWwub3B0aW9ucywgb3B0aW9ucyk7XG5cdFx0XHR9LFxuXHRcdFx0c3VwcG9ydDogZnVuY3Rpb24gKHN0b3JhZ2UpIHtcblx0XHRcdFx0cmV0dXJuIF9zdG9yYWdlcy5oYXNPd25Qcm9wZXJ0eShzdG9yYWdlKTtcblx0XHRcdH0sXG5cdFx0XHRjaGVjazogZnVuY3Rpb24gKHN0b3JhZ2UpIHtcblx0XHRcdFx0aWYgKHRoaXMuc3VwcG9ydChzdG9yYWdlKSlcblx0XHRcdFx0XHRyZXR1cm4gX3N0b3JhZ2VzW3N0b3JhZ2VdLmNoZWNrKHRoaXMub3B0aW9ucyk7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH0sXG5cdFx0XHRzZXQ6IGZ1bmN0aW9uIChrZXksIHZhbHVlLCBvcHRpb25zKSB7XG5cdFx0XHRcdG9wdGlvbnMgPSBCYXNpbC51dGlscy5leHRlbmQoe30sIHRoaXMub3B0aW9ucywgb3B0aW9ucyk7XG5cdFx0XHRcdGlmICghKGtleSA9IF90b1N0b3JlZEtleShvcHRpb25zLm5hbWVzcGFjZSwga2V5LCBvcHRpb25zLmtleURlbGltaXRlcikpKVxuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0dmFsdWUgPSBvcHRpb25zLnJhdyA9PT0gdHJ1ZSA/IHZhbHVlIDogX3RvU3RvcmVkVmFsdWUodmFsdWUpO1xuXHRcdFx0XHR2YXIgd2hlcmUgPSBudWxsO1xuXHRcdFx0XHQvLyB0cnkgdG8gc2V0IGtleS92YWx1ZSBpbiBmaXJzdCBhdmFpbGFibGUgc3RvcmFnZVxuXHRcdFx0XHRCYXNpbC51dGlscy50cnlFYWNoKF90b1N0b3JhZ2VzQXJyYXkob3B0aW9ucy5zdG9yYWdlcyksIGZ1bmN0aW9uIChzdG9yYWdlLCBpbmRleCkge1xuXHRcdFx0XHRcdF9zdG9yYWdlc1tzdG9yYWdlXS5zZXQoa2V5LCB2YWx1ZSwgb3B0aW9ucyk7XG5cdFx0XHRcdFx0d2hlcmUgPSBzdG9yYWdlO1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTsgLy8gYnJlYWs7XG5cdFx0XHRcdH0sIG51bGwsIHRoaXMpO1xuXHRcdFx0XHRpZiAoIXdoZXJlKSB7XG5cdFx0XHRcdFx0Ly8ga2V5IGhhcyBub3QgYmVlbiBzZXQgYW55d2hlcmVcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gcmVtb3ZlIGtleSBmcm9tIGFsbCBvdGhlciBzdG9yYWdlc1xuXHRcdFx0XHRCYXNpbC51dGlscy50cnlFYWNoKF90b1N0b3JhZ2VzQXJyYXkob3B0aW9ucy5zdG9yYWdlcyksIGZ1bmN0aW9uIChzdG9yYWdlLCBpbmRleCkge1xuXHRcdFx0XHRcdGlmIChzdG9yYWdlICE9PSB3aGVyZSlcblx0XHRcdFx0XHRcdF9zdG9yYWdlc1tzdG9yYWdlXS5yZW1vdmUoa2V5KTtcblx0XHRcdFx0fSwgbnVsbCwgdGhpcyk7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fSxcblx0XHRcdGdldDogZnVuY3Rpb24gKGtleSwgb3B0aW9ucykge1xuXHRcdFx0XHRvcHRpb25zID0gQmFzaWwudXRpbHMuZXh0ZW5kKHt9LCB0aGlzLm9wdGlvbnMsIG9wdGlvbnMpO1xuXHRcdFx0XHRpZiAoIShrZXkgPSBfdG9TdG9yZWRLZXkob3B0aW9ucy5uYW1lc3BhY2UsIGtleSwgb3B0aW9ucy5rZXlEZWxpbWl0ZXIpKSlcblx0XHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdFx0dmFyIHZhbHVlID0gbnVsbDtcblx0XHRcdFx0QmFzaWwudXRpbHMudHJ5RWFjaChfdG9TdG9yYWdlc0FycmF5KG9wdGlvbnMuc3RvcmFnZXMpLCBmdW5jdGlvbiAoc3RvcmFnZSwgaW5kZXgpIHtcblx0XHRcdFx0XHRpZiAodmFsdWUgIT09IG51bGwpXG5cdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7IC8vIGJyZWFrIGlmIGEgdmFsdWUgaGFzIGFscmVhZHkgYmVlbiBmb3VuZC5cblx0XHRcdFx0XHR2YWx1ZSA9IF9zdG9yYWdlc1tzdG9yYWdlXS5nZXQoa2V5LCBvcHRpb25zKSB8fCBudWxsO1xuXHRcdFx0XHRcdHZhbHVlID0gb3B0aW9ucy5yYXcgPT09IHRydWUgPyB2YWx1ZSA6IF9mcm9tU3RvcmVkVmFsdWUodmFsdWUpO1xuXHRcdFx0XHR9LCBmdW5jdGlvbiAoc3RvcmFnZSwgaW5kZXgsIGVycm9yKSB7XG5cdFx0XHRcdFx0dmFsdWUgPSBudWxsO1xuXHRcdFx0XHR9LCB0aGlzKTtcblx0XHRcdFx0cmV0dXJuIHZhbHVlO1xuXHRcdFx0fSxcblx0XHRcdHJlbW92ZTogZnVuY3Rpb24gKGtleSwgb3B0aW9ucykge1xuXHRcdFx0XHRvcHRpb25zID0gQmFzaWwudXRpbHMuZXh0ZW5kKHt9LCB0aGlzLm9wdGlvbnMsIG9wdGlvbnMpO1xuXHRcdFx0XHRpZiAoIShrZXkgPSBfdG9TdG9yZWRLZXkob3B0aW9ucy5uYW1lc3BhY2UsIGtleSwgb3B0aW9ucy5rZXlEZWxpbWl0ZXIpKSlcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdEJhc2lsLnV0aWxzLnRyeUVhY2goX3RvU3RvcmFnZXNBcnJheShvcHRpb25zLnN0b3JhZ2VzKSwgZnVuY3Rpb24gKHN0b3JhZ2UpIHtcblx0XHRcdFx0XHRfc3RvcmFnZXNbc3RvcmFnZV0ucmVtb3ZlKGtleSk7XG5cdFx0XHRcdH0sIG51bGwsIHRoaXMpO1xuXHRcdFx0fSxcblx0XHRcdHJlc2V0OiBmdW5jdGlvbiAob3B0aW9ucykge1xuXHRcdFx0XHRvcHRpb25zID0gQmFzaWwudXRpbHMuZXh0ZW5kKHt9LCB0aGlzLm9wdGlvbnMsIG9wdGlvbnMpO1xuXHRcdFx0XHRCYXNpbC51dGlscy50cnlFYWNoKF90b1N0b3JhZ2VzQXJyYXkob3B0aW9ucy5zdG9yYWdlcyksIGZ1bmN0aW9uIChzdG9yYWdlKSB7XG5cdFx0XHRcdFx0X3N0b3JhZ2VzW3N0b3JhZ2VdLnJlc2V0KG9wdGlvbnMubmFtZXNwYWNlKTtcblx0XHRcdFx0fSwgbnVsbCwgdGhpcyk7XG5cdFx0XHR9LFxuXHRcdFx0a2V5czogZnVuY3Rpb24gKG9wdGlvbnMpIHtcblx0XHRcdFx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cdFx0XHRcdHZhciBrZXlzID0gW107XG5cdFx0XHRcdGZvciAodmFyIGtleSBpbiB0aGlzLmtleXNNYXAob3B0aW9ucykpXG5cdFx0XHRcdFx0a2V5cy5wdXNoKGtleSk7XG5cdFx0XHRcdHJldHVybiBrZXlzO1xuXHRcdFx0fSxcblx0XHRcdGtleXNNYXA6IGZ1bmN0aW9uIChvcHRpb25zKSB7XG5cdFx0XHRcdG9wdGlvbnMgPSBCYXNpbC51dGlscy5leHRlbmQoe30sIHRoaXMub3B0aW9ucywgb3B0aW9ucyk7XG5cdFx0XHRcdHZhciBtYXAgPSB7fTtcblx0XHRcdFx0QmFzaWwudXRpbHMudHJ5RWFjaChfdG9TdG9yYWdlc0FycmF5KG9wdGlvbnMuc3RvcmFnZXMpLCBmdW5jdGlvbiAoc3RvcmFnZSkge1xuXHRcdFx0XHRcdEJhc2lsLnV0aWxzLmVhY2goX3N0b3JhZ2VzW3N0b3JhZ2VdLmtleXMob3B0aW9ucy5uYW1lc3BhY2UsIG9wdGlvbnMua2V5RGVsaW1pdGVyKSwgZnVuY3Rpb24gKGtleSkge1xuXHRcdFx0XHRcdFx0bWFwW2tleV0gPSBCYXNpbC51dGlscy5pc0FycmF5KG1hcFtrZXldKSA/IG1hcFtrZXldIDogW107XG5cdFx0XHRcdFx0XHRtYXBba2V5XS5wdXNoKHN0b3JhZ2UpO1xuXHRcdFx0XHRcdH0sIHRoaXMpO1xuXHRcdFx0XHR9LCBudWxsLCB0aGlzKTtcblx0XHRcdFx0cmV0dXJuIG1hcDtcblx0XHRcdH1cblx0XHR9O1xuXHR9O1xuXG5cdC8vIEFjY2VzcyB0byBuYXRpdmUgc3RvcmFnZXMsIHdpdGhvdXQgbmFtZXNwYWNlIG9yIGJhc2lsIHZhbHVlIGRlY29yYXRpb25cblx0QmFzaWwubWVtb3J5ID0gbmV3IEJhc2lsLlN0b3JhZ2UoKS5pbml0KHsgc3RvcmFnZXM6ICdtZW1vcnknLCBuYW1lc3BhY2U6IG51bGwsIHJhdzogdHJ1ZSB9KTtcblx0QmFzaWwuY29va2llID0gbmV3IEJhc2lsLlN0b3JhZ2UoKS5pbml0KHsgc3RvcmFnZXM6ICdjb29raWUnLCBuYW1lc3BhY2U6IG51bGwsIHJhdzogdHJ1ZSB9KTtcblx0QmFzaWwubG9jYWxTdG9yYWdlID0gbmV3IEJhc2lsLlN0b3JhZ2UoKS5pbml0KHsgc3RvcmFnZXM6ICdsb2NhbCcsIG5hbWVzcGFjZTogbnVsbCwgcmF3OiB0cnVlIH0pO1xuXHRCYXNpbC5zZXNzaW9uU3RvcmFnZSA9IG5ldyBCYXNpbC5TdG9yYWdlKCkuaW5pdCh7IHN0b3JhZ2VzOiAnc2Vzc2lvbicsIG5hbWVzcGFjZTogbnVsbCwgcmF3OiB0cnVlIH0pO1xuXG5cdC8vIGJyb3dzZXIgZXhwb3J0XG5cdHdpbmRvdy5CYXNpbCA9IEJhc2lsO1xuXG5cdC8vIEFNRCBleHBvcnRcblx0aWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuXHRcdGRlZmluZShmdW5jdGlvbigpIHtcblx0XHRcdHJldHVybiBCYXNpbDtcblx0XHR9KTtcblx0Ly8gY29tbW9uanMgZXhwb3J0XG5cdH0gZWxzZSBpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcblx0XHRtb2R1bGUuZXhwb3J0cyA9IEJhc2lsO1xuXHR9XG5cbn0pKCk7XG4iLCI7KGZ1bmN0aW9uIChyb290LCBmYWN0b3J5KSB7XG5cdGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gXCJvYmplY3RcIikge1xuXHRcdC8vIENvbW1vbkpTXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzID0gZmFjdG9yeSgpO1xuXHR9XG5cdGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0Ly8gQU1EXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0fVxuXHRlbHNlIHtcblx0XHQvLyBHbG9iYWwgKGJyb3dzZXIpXG5cdFx0cm9vdC5DcnlwdG9KUyA9IGZhY3RvcnkoKTtcblx0fVxufSh0aGlzLCBmdW5jdGlvbiAoKSB7XG5cblx0LyoqXG5cdCAqIENyeXB0b0pTIGNvcmUgY29tcG9uZW50cy5cblx0ICovXG5cdHZhciBDcnlwdG9KUyA9IENyeXB0b0pTIHx8IChmdW5jdGlvbiAoTWF0aCwgdW5kZWZpbmVkKSB7XG5cdCAgICAvKlxuXHQgICAgICogTG9jYWwgcG9seWZpbCBvZiBPYmplY3QuY3JlYXRlXG5cdCAgICAgKi9cblx0ICAgIHZhciBjcmVhdGUgPSBPYmplY3QuY3JlYXRlIHx8IChmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgZnVuY3Rpb24gRigpIHt9O1xuXG5cdCAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChvYmopIHtcblx0ICAgICAgICAgICAgdmFyIHN1YnR5cGU7XG5cblx0ICAgICAgICAgICAgRi5wcm90b3R5cGUgPSBvYmo7XG5cblx0ICAgICAgICAgICAgc3VidHlwZSA9IG5ldyBGKCk7XG5cblx0ICAgICAgICAgICAgRi5wcm90b3R5cGUgPSBudWxsO1xuXG5cdCAgICAgICAgICAgIHJldHVybiBzdWJ0eXBlO1xuXHQgICAgICAgIH07XG5cdCAgICB9KCkpXG5cblx0ICAgIC8qKlxuXHQgICAgICogQ3J5cHRvSlMgbmFtZXNwYWNlLlxuXHQgICAgICovXG5cdCAgICB2YXIgQyA9IHt9O1xuXG5cdCAgICAvKipcblx0ICAgICAqIExpYnJhcnkgbmFtZXNwYWNlLlxuXHQgICAgICovXG5cdCAgICB2YXIgQ19saWIgPSBDLmxpYiA9IHt9O1xuXG5cdCAgICAvKipcblx0ICAgICAqIEJhc2Ugb2JqZWN0IGZvciBwcm90b3R5cGFsIGluaGVyaXRhbmNlLlxuXHQgICAgICovXG5cdCAgICB2YXIgQmFzZSA9IENfbGliLkJhc2UgPSAoZnVuY3Rpb24gKCkge1xuXG5cblx0ICAgICAgICByZXR1cm4ge1xuXHQgICAgICAgICAgICAvKipcblx0ICAgICAgICAgICAgICogQ3JlYXRlcyBhIG5ldyBvYmplY3QgdGhhdCBpbmhlcml0cyBmcm9tIHRoaXMgb2JqZWN0LlxuXHQgICAgICAgICAgICAgKlxuXHQgICAgICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gb3ZlcnJpZGVzIFByb3BlcnRpZXMgdG8gY29weSBpbnRvIHRoZSBuZXcgb2JqZWN0LlxuXHQgICAgICAgICAgICAgKlxuXHQgICAgICAgICAgICAgKiBAcmV0dXJuIHtPYmplY3R9IFRoZSBuZXcgb2JqZWN0LlxuXHQgICAgICAgICAgICAgKlxuXHQgICAgICAgICAgICAgKiBAc3RhdGljXG5cdCAgICAgICAgICAgICAqXG5cdCAgICAgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICAgICAqXG5cdCAgICAgICAgICAgICAqICAgICB2YXIgTXlUeXBlID0gQ3J5cHRvSlMubGliLkJhc2UuZXh0ZW5kKHtcblx0ICAgICAgICAgICAgICogICAgICAgICBmaWVsZDogJ3ZhbHVlJyxcblx0ICAgICAgICAgICAgICpcblx0ICAgICAgICAgICAgICogICAgICAgICBtZXRob2Q6IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgICogICAgICAgICB9XG5cdCAgICAgICAgICAgICAqICAgICB9KTtcblx0ICAgICAgICAgICAgICovXG5cdCAgICAgICAgICAgIGV4dGVuZDogZnVuY3Rpb24gKG92ZXJyaWRlcykge1xuXHQgICAgICAgICAgICAgICAgLy8gU3Bhd25cblx0ICAgICAgICAgICAgICAgIHZhciBzdWJ0eXBlID0gY3JlYXRlKHRoaXMpO1xuXG5cdCAgICAgICAgICAgICAgICAvLyBBdWdtZW50XG5cdCAgICAgICAgICAgICAgICBpZiAob3ZlcnJpZGVzKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgc3VidHlwZS5taXhJbihvdmVycmlkZXMpO1xuXHQgICAgICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgICAgICAvLyBDcmVhdGUgZGVmYXVsdCBpbml0aWFsaXplclxuXHQgICAgICAgICAgICAgICAgaWYgKCFzdWJ0eXBlLmhhc093blByb3BlcnR5KCdpbml0JykgfHwgdGhpcy5pbml0ID09PSBzdWJ0eXBlLmluaXQpIHtcblx0ICAgICAgICAgICAgICAgICAgICBzdWJ0eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHN1YnR5cGUuJHN1cGVyLmluaXQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0ICAgICAgICAgICAgICAgICAgICB9O1xuXHQgICAgICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgICAgICAvLyBJbml0aWFsaXplcidzIHByb3RvdHlwZSBpcyB0aGUgc3VidHlwZSBvYmplY3Rcblx0ICAgICAgICAgICAgICAgIHN1YnR5cGUuaW5pdC5wcm90b3R5cGUgPSBzdWJ0eXBlO1xuXG5cdCAgICAgICAgICAgICAgICAvLyBSZWZlcmVuY2Ugc3VwZXJ0eXBlXG5cdCAgICAgICAgICAgICAgICBzdWJ0eXBlLiRzdXBlciA9IHRoaXM7XG5cblx0ICAgICAgICAgICAgICAgIHJldHVybiBzdWJ0eXBlO1xuXHQgICAgICAgICAgICB9LFxuXG5cdCAgICAgICAgICAgIC8qKlxuXHQgICAgICAgICAgICAgKiBFeHRlbmRzIHRoaXMgb2JqZWN0IGFuZCBydW5zIHRoZSBpbml0IG1ldGhvZC5cblx0ICAgICAgICAgICAgICogQXJndW1lbnRzIHRvIGNyZWF0ZSgpIHdpbGwgYmUgcGFzc2VkIHRvIGluaXQoKS5cblx0ICAgICAgICAgICAgICpcblx0ICAgICAgICAgICAgICogQHJldHVybiB7T2JqZWN0fSBUaGUgbmV3IG9iamVjdC5cblx0ICAgICAgICAgICAgICpcblx0ICAgICAgICAgICAgICogQHN0YXRpY1xuXHQgICAgICAgICAgICAgKlxuXHQgICAgICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAgICAgKlxuXHQgICAgICAgICAgICAgKiAgICAgdmFyIGluc3RhbmNlID0gTXlUeXBlLmNyZWF0ZSgpO1xuXHQgICAgICAgICAgICAgKi9cblx0ICAgICAgICAgICAgY3JlYXRlOiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgICAgICB2YXIgaW5zdGFuY2UgPSB0aGlzLmV4dGVuZCgpO1xuXHQgICAgICAgICAgICAgICAgaW5zdGFuY2UuaW5pdC5hcHBseShpbnN0YW5jZSwgYXJndW1lbnRzKTtcblxuXHQgICAgICAgICAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xuXHQgICAgICAgICAgICB9LFxuXG5cdCAgICAgICAgICAgIC8qKlxuXHQgICAgICAgICAgICAgKiBJbml0aWFsaXplcyBhIG5ld2x5IGNyZWF0ZWQgb2JqZWN0LlxuXHQgICAgICAgICAgICAgKiBPdmVycmlkZSB0aGlzIG1ldGhvZCB0byBhZGQgc29tZSBsb2dpYyB3aGVuIHlvdXIgb2JqZWN0cyBhcmUgY3JlYXRlZC5cblx0ICAgICAgICAgICAgICpcblx0ICAgICAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgICAgICpcblx0ICAgICAgICAgICAgICogICAgIHZhciBNeVR5cGUgPSBDcnlwdG9KUy5saWIuQmFzZS5leHRlbmQoe1xuXHQgICAgICAgICAgICAgKiAgICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgICogICAgICAgICAgICAgLy8gLi4uXG5cdCAgICAgICAgICAgICAqICAgICAgICAgfVxuXHQgICAgICAgICAgICAgKiAgICAgfSk7XG5cdCAgICAgICAgICAgICAqL1xuXHQgICAgICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgIH0sXG5cblx0ICAgICAgICAgICAgLyoqXG5cdCAgICAgICAgICAgICAqIENvcGllcyBwcm9wZXJ0aWVzIGludG8gdGhpcyBvYmplY3QuXG5cdCAgICAgICAgICAgICAqXG5cdCAgICAgICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wZXJ0aWVzIFRoZSBwcm9wZXJ0aWVzIHRvIG1peCBpbi5cblx0ICAgICAgICAgICAgICpcblx0ICAgICAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgICAgICpcblx0ICAgICAgICAgICAgICogICAgIE15VHlwZS5taXhJbih7XG5cdCAgICAgICAgICAgICAqICAgICAgICAgZmllbGQ6ICd2YWx1ZSdcblx0ICAgICAgICAgICAgICogICAgIH0pO1xuXHQgICAgICAgICAgICAgKi9cblx0ICAgICAgICAgICAgbWl4SW46IGZ1bmN0aW9uIChwcm9wZXJ0aWVzKSB7XG5cdCAgICAgICAgICAgICAgICBmb3IgKHZhciBwcm9wZXJ0eU5hbWUgaW4gcHJvcGVydGllcykge1xuXHQgICAgICAgICAgICAgICAgICAgIGlmIChwcm9wZXJ0aWVzLmhhc093blByb3BlcnR5KHByb3BlcnR5TmFtZSkpIHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1twcm9wZXJ0eU5hbWVdID0gcHJvcGVydGllc1twcm9wZXJ0eU5hbWVdO1xuXHQgICAgICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICAgICAgLy8gSUUgd29uJ3QgY29weSB0b1N0cmluZyB1c2luZyB0aGUgbG9vcCBhYm92ZVxuXHQgICAgICAgICAgICAgICAgaWYgKHByb3BlcnRpZXMuaGFzT3duUHJvcGVydHkoJ3RvU3RyaW5nJykpIHtcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLnRvU3RyaW5nID0gcHJvcGVydGllcy50b1N0cmluZztcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgfSxcblxuXHQgICAgICAgICAgICAvKipcblx0ICAgICAgICAgICAgICogQ3JlYXRlcyBhIGNvcHkgb2YgdGhpcyBvYmplY3QuXG5cdCAgICAgICAgICAgICAqXG5cdCAgICAgICAgICAgICAqIEByZXR1cm4ge09iamVjdH0gVGhlIGNsb25lLlxuXHQgICAgICAgICAgICAgKlxuXHQgICAgICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAgICAgKlxuXHQgICAgICAgICAgICAgKiAgICAgdmFyIGNsb25lID0gaW5zdGFuY2UuY2xvbmUoKTtcblx0ICAgICAgICAgICAgICovXG5cdCAgICAgICAgICAgIGNsb25lOiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5pbml0LnByb3RvdHlwZS5leHRlbmQodGhpcyk7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICB9O1xuXHQgICAgfSgpKTtcblxuXHQgICAgLyoqXG5cdCAgICAgKiBBbiBhcnJheSBvZiAzMi1iaXQgd29yZHMuXG5cdCAgICAgKlxuXHQgICAgICogQHByb3BlcnR5IHtBcnJheX0gd29yZHMgVGhlIGFycmF5IG9mIDMyLWJpdCB3b3Jkcy5cblx0ICAgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBzaWdCeXRlcyBUaGUgbnVtYmVyIG9mIHNpZ25pZmljYW50IGJ5dGVzIGluIHRoaXMgd29yZCBhcnJheS5cblx0ICAgICAqL1xuXHQgICAgdmFyIFdvcmRBcnJheSA9IENfbGliLldvcmRBcnJheSA9IEJhc2UuZXh0ZW5kKHtcblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBJbml0aWFsaXplcyBhIG5ld2x5IGNyZWF0ZWQgd29yZCBhcnJheS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7QXJyYXl9IHdvcmRzIChPcHRpb25hbCkgQW4gYXJyYXkgb2YgMzItYml0IHdvcmRzLlxuXHQgICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzaWdCeXRlcyAoT3B0aW9uYWwpIFRoZSBudW1iZXIgb2Ygc2lnbmlmaWNhbnQgYnl0ZXMgaW4gdGhlIHdvcmRzLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgd29yZEFycmF5ID0gQ3J5cHRvSlMubGliLldvcmRBcnJheS5jcmVhdGUoKTtcblx0ICAgICAgICAgKiAgICAgdmFyIHdvcmRBcnJheSA9IENyeXB0b0pTLmxpYi5Xb3JkQXJyYXkuY3JlYXRlKFsweDAwMDEwMjAzLCAweDA0MDUwNjA3XSk7XG5cdCAgICAgICAgICogICAgIHZhciB3b3JkQXJyYXkgPSBDcnlwdG9KUy5saWIuV29yZEFycmF5LmNyZWF0ZShbMHgwMDAxMDIwMywgMHgwNDA1MDYwN10sIDYpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIGluaXQ6IGZ1bmN0aW9uICh3b3Jkcywgc2lnQnl0ZXMpIHtcblx0ICAgICAgICAgICAgd29yZHMgPSB0aGlzLndvcmRzID0gd29yZHMgfHwgW107XG5cblx0ICAgICAgICAgICAgaWYgKHNpZ0J5dGVzICE9IHVuZGVmaW5lZCkge1xuXHQgICAgICAgICAgICAgICAgdGhpcy5zaWdCeXRlcyA9IHNpZ0J5dGVzO1xuXHQgICAgICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgICAgICAgdGhpcy5zaWdCeXRlcyA9IHdvcmRzLmxlbmd0aCAqIDQ7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogQ29udmVydHMgdGhpcyB3b3JkIGFycmF5IHRvIGEgc3RyaW5nLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtFbmNvZGVyfSBlbmNvZGVyIChPcHRpb25hbCkgVGhlIGVuY29kaW5nIHN0cmF0ZWd5IHRvIHVzZS4gRGVmYXVsdDogQ3J5cHRvSlMuZW5jLkhleFxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7c3RyaW5nfSBUaGUgc3RyaW5naWZpZWQgd29yZCBhcnJheS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIHN0cmluZyA9IHdvcmRBcnJheSArICcnO1xuXHQgICAgICAgICAqICAgICB2YXIgc3RyaW5nID0gd29yZEFycmF5LnRvU3RyaW5nKCk7XG5cdCAgICAgICAgICogICAgIHZhciBzdHJpbmcgPSB3b3JkQXJyYXkudG9TdHJpbmcoQ3J5cHRvSlMuZW5jLlV0ZjgpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIHRvU3RyaW5nOiBmdW5jdGlvbiAoZW5jb2Rlcikge1xuXHQgICAgICAgICAgICByZXR1cm4gKGVuY29kZXIgfHwgSGV4KS5zdHJpbmdpZnkodGhpcyk7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIENvbmNhdGVuYXRlcyBhIHdvcmQgYXJyYXkgdG8gdGhpcyB3b3JkIGFycmF5LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtXb3JkQXJyYXl9IHdvcmRBcnJheSBUaGUgd29yZCBhcnJheSB0byBhcHBlbmQuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtXb3JkQXJyYXl9IFRoaXMgd29yZCBhcnJheS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgd29yZEFycmF5MS5jb25jYXQod29yZEFycmF5Mik7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgY29uY2F0OiBmdW5jdGlvbiAod29yZEFycmF5KSB7XG5cdCAgICAgICAgICAgIC8vIFNob3J0Y3V0c1xuXHQgICAgICAgICAgICB2YXIgdGhpc1dvcmRzID0gdGhpcy53b3Jkcztcblx0ICAgICAgICAgICAgdmFyIHRoYXRXb3JkcyA9IHdvcmRBcnJheS53b3Jkcztcblx0ICAgICAgICAgICAgdmFyIHRoaXNTaWdCeXRlcyA9IHRoaXMuc2lnQnl0ZXM7XG5cdCAgICAgICAgICAgIHZhciB0aGF0U2lnQnl0ZXMgPSB3b3JkQXJyYXkuc2lnQnl0ZXM7XG5cblx0ICAgICAgICAgICAgLy8gQ2xhbXAgZXhjZXNzIGJpdHNcblx0ICAgICAgICAgICAgdGhpcy5jbGFtcCgpO1xuXG5cdCAgICAgICAgICAgIC8vIENvbmNhdFxuXHQgICAgICAgICAgICBpZiAodGhpc1NpZ0J5dGVzICUgNCkge1xuXHQgICAgICAgICAgICAgICAgLy8gQ29weSBvbmUgYnl0ZSBhdCBhIHRpbWVcblx0ICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhhdFNpZ0J5dGVzOyBpKyspIHtcblx0ICAgICAgICAgICAgICAgICAgICB2YXIgdGhhdEJ5dGUgPSAodGhhdFdvcmRzW2kgPj4+IDJdID4+PiAoMjQgLSAoaSAlIDQpICogOCkpICYgMHhmZjtcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzV29yZHNbKHRoaXNTaWdCeXRlcyArIGkpID4+PiAyXSB8PSB0aGF0Qnl0ZSA8PCAoMjQgLSAoKHRoaXNTaWdCeXRlcyArIGkpICUgNCkgKiA4KTtcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgICAgICAgIC8vIENvcHkgb25lIHdvcmQgYXQgYSB0aW1lXG5cdCAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoYXRTaWdCeXRlczsgaSArPSA0KSB7XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpc1dvcmRzWyh0aGlzU2lnQnl0ZXMgKyBpKSA+Pj4gMl0gPSB0aGF0V29yZHNbaSA+Pj4gMl07XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgdGhpcy5zaWdCeXRlcyArPSB0aGF0U2lnQnl0ZXM7XG5cblx0ICAgICAgICAgICAgLy8gQ2hhaW5hYmxlXG5cdCAgICAgICAgICAgIHJldHVybiB0aGlzO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBSZW1vdmVzIGluc2lnbmlmaWNhbnQgYml0cy5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgd29yZEFycmF5LmNsYW1wKCk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgY2xhbXA6IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgLy8gU2hvcnRjdXRzXG5cdCAgICAgICAgICAgIHZhciB3b3JkcyA9IHRoaXMud29yZHM7XG5cdCAgICAgICAgICAgIHZhciBzaWdCeXRlcyA9IHRoaXMuc2lnQnl0ZXM7XG5cblx0ICAgICAgICAgICAgLy8gQ2xhbXBcblx0ICAgICAgICAgICAgd29yZHNbc2lnQnl0ZXMgPj4+IDJdICY9IDB4ZmZmZmZmZmYgPDwgKDMyIC0gKHNpZ0J5dGVzICUgNCkgKiA4KTtcblx0ICAgICAgICAgICAgd29yZHMubGVuZ3RoID0gTWF0aC5jZWlsKHNpZ0J5dGVzIC8gNCk7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIENyZWF0ZXMgYSBjb3B5IG9mIHRoaXMgd29yZCBhcnJheS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEByZXR1cm4ge1dvcmRBcnJheX0gVGhlIGNsb25lLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgY2xvbmUgPSB3b3JkQXJyYXkuY2xvbmUoKTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBjbG9uZTogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICB2YXIgY2xvbmUgPSBCYXNlLmNsb25lLmNhbGwodGhpcyk7XG5cdCAgICAgICAgICAgIGNsb25lLndvcmRzID0gdGhpcy53b3Jkcy5zbGljZSgwKTtcblxuXHQgICAgICAgICAgICByZXR1cm4gY2xvbmU7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIENyZWF0ZXMgYSB3b3JkIGFycmF5IGZpbGxlZCB3aXRoIHJhbmRvbSBieXRlcy5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBuQnl0ZXMgVGhlIG51bWJlciBvZiByYW5kb20gYnl0ZXMgdG8gZ2VuZXJhdGUuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtXb3JkQXJyYXl9IFRoZSByYW5kb20gd29yZCBhcnJheS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBzdGF0aWNcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIHdvcmRBcnJheSA9IENyeXB0b0pTLmxpYi5Xb3JkQXJyYXkucmFuZG9tKDE2KTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICByYW5kb206IGZ1bmN0aW9uIChuQnl0ZXMpIHtcblx0ICAgICAgICAgICAgdmFyIHdvcmRzID0gW107XG5cblx0ICAgICAgICAgICAgdmFyIHIgPSAoZnVuY3Rpb24gKG1fdykge1xuXHQgICAgICAgICAgICAgICAgdmFyIG1fdyA9IG1fdztcblx0ICAgICAgICAgICAgICAgIHZhciBtX3ogPSAweDNhZGU2OGIxO1xuXHQgICAgICAgICAgICAgICAgdmFyIG1hc2sgPSAweGZmZmZmZmZmO1xuXG5cdCAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICAgICAgICAgIG1feiA9ICgweDkwNjkgKiAobV96ICYgMHhGRkZGKSArIChtX3ogPj4gMHgxMCkpICYgbWFzaztcblx0ICAgICAgICAgICAgICAgICAgICBtX3cgPSAoMHg0NjUwICogKG1fdyAmIDB4RkZGRikgKyAobV93ID4+IDB4MTApKSAmIG1hc2s7XG5cdCAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9ICgobV96IDw8IDB4MTApICsgbV93KSAmIG1hc2s7XG5cdCAgICAgICAgICAgICAgICAgICAgcmVzdWx0IC89IDB4MTAwMDAwMDAwO1xuXHQgICAgICAgICAgICAgICAgICAgIHJlc3VsdCArPSAwLjU7XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdCAqIChNYXRoLnJhbmRvbSgpID4gLjUgPyAxIDogLTEpO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB9KTtcblxuXHQgICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgcmNhY2hlOyBpIDwgbkJ5dGVzOyBpICs9IDQpIHtcblx0ICAgICAgICAgICAgICAgIHZhciBfciA9IHIoKHJjYWNoZSB8fCBNYXRoLnJhbmRvbSgpKSAqIDB4MTAwMDAwMDAwKTtcblxuXHQgICAgICAgICAgICAgICAgcmNhY2hlID0gX3IoKSAqIDB4M2FkZTY3Yjc7XG5cdCAgICAgICAgICAgICAgICB3b3Jkcy5wdXNoKChfcigpICogMHgxMDAwMDAwMDApIHwgMCk7XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICByZXR1cm4gbmV3IFdvcmRBcnJheS5pbml0KHdvcmRzLCBuQnl0ZXMpO1xuXHQgICAgICAgIH1cblx0ICAgIH0pO1xuXG5cdCAgICAvKipcblx0ICAgICAqIEVuY29kZXIgbmFtZXNwYWNlLlxuXHQgICAgICovXG5cdCAgICB2YXIgQ19lbmMgPSBDLmVuYyA9IHt9O1xuXG5cdCAgICAvKipcblx0ICAgICAqIEhleCBlbmNvZGluZyBzdHJhdGVneS5cblx0ICAgICAqL1xuXHQgICAgdmFyIEhleCA9IENfZW5jLkhleCA9IHtcblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDb252ZXJ0cyBhIHdvcmQgYXJyYXkgdG8gYSBoZXggc3RyaW5nLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtXb3JkQXJyYXl9IHdvcmRBcnJheSBUaGUgd29yZCBhcnJheS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEByZXR1cm4ge3N0cmluZ30gVGhlIGhleCBzdHJpbmcuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAc3RhdGljXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciBoZXhTdHJpbmcgPSBDcnlwdG9KUy5lbmMuSGV4LnN0cmluZ2lmeSh3b3JkQXJyYXkpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIHN0cmluZ2lmeTogZnVuY3Rpb24gKHdvcmRBcnJheSkge1xuXHQgICAgICAgICAgICAvLyBTaG9ydGN1dHNcblx0ICAgICAgICAgICAgdmFyIHdvcmRzID0gd29yZEFycmF5LndvcmRzO1xuXHQgICAgICAgICAgICB2YXIgc2lnQnl0ZXMgPSB3b3JkQXJyYXkuc2lnQnl0ZXM7XG5cblx0ICAgICAgICAgICAgLy8gQ29udmVydFxuXHQgICAgICAgICAgICB2YXIgaGV4Q2hhcnMgPSBbXTtcblx0ICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzaWdCeXRlczsgaSsrKSB7XG5cdCAgICAgICAgICAgICAgICB2YXIgYml0ZSA9ICh3b3Jkc1tpID4+PiAyXSA+Pj4gKDI0IC0gKGkgJSA0KSAqIDgpKSAmIDB4ZmY7XG5cdCAgICAgICAgICAgICAgICBoZXhDaGFycy5wdXNoKChiaXRlID4+PiA0KS50b1N0cmluZygxNikpO1xuXHQgICAgICAgICAgICAgICAgaGV4Q2hhcnMucHVzaCgoYml0ZSAmIDB4MGYpLnRvU3RyaW5nKDE2KSk7XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICByZXR1cm4gaGV4Q2hhcnMuam9pbignJyk7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIENvbnZlcnRzIGEgaGV4IHN0cmluZyB0byBhIHdvcmQgYXJyYXkuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaGV4U3RyIFRoZSBoZXggc3RyaW5nLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7V29yZEFycmF5fSBUaGUgd29yZCBhcnJheS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBzdGF0aWNcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIHdvcmRBcnJheSA9IENyeXB0b0pTLmVuYy5IZXgucGFyc2UoaGV4U3RyaW5nKTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBwYXJzZTogZnVuY3Rpb24gKGhleFN0cikge1xuXHQgICAgICAgICAgICAvLyBTaG9ydGN1dFxuXHQgICAgICAgICAgICB2YXIgaGV4U3RyTGVuZ3RoID0gaGV4U3RyLmxlbmd0aDtcblxuXHQgICAgICAgICAgICAvLyBDb252ZXJ0XG5cdCAgICAgICAgICAgIHZhciB3b3JkcyA9IFtdO1xuXHQgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGhleFN0ckxlbmd0aDsgaSArPSAyKSB7XG5cdCAgICAgICAgICAgICAgICB3b3Jkc1tpID4+PiAzXSB8PSBwYXJzZUludChoZXhTdHIuc3Vic3RyKGksIDIpLCAxNikgPDwgKDI0IC0gKGkgJSA4KSAqIDQpO1xuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgcmV0dXJuIG5ldyBXb3JkQXJyYXkuaW5pdCh3b3JkcywgaGV4U3RyTGVuZ3RoIC8gMik7XG5cdCAgICAgICAgfVxuXHQgICAgfTtcblxuXHQgICAgLyoqXG5cdCAgICAgKiBMYXRpbjEgZW5jb2Rpbmcgc3RyYXRlZ3kuXG5cdCAgICAgKi9cblx0ICAgIHZhciBMYXRpbjEgPSBDX2VuYy5MYXRpbjEgPSB7XG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogQ29udmVydHMgYSB3b3JkIGFycmF5IHRvIGEgTGF0aW4xIHN0cmluZy5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7V29yZEFycmF5fSB3b3JkQXJyYXkgVGhlIHdvcmQgYXJyYXkuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtzdHJpbmd9IFRoZSBMYXRpbjEgc3RyaW5nLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHN0YXRpY1xuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgbGF0aW4xU3RyaW5nID0gQ3J5cHRvSlMuZW5jLkxhdGluMS5zdHJpbmdpZnkod29yZEFycmF5KTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBzdHJpbmdpZnk6IGZ1bmN0aW9uICh3b3JkQXJyYXkpIHtcblx0ICAgICAgICAgICAgLy8gU2hvcnRjdXRzXG5cdCAgICAgICAgICAgIHZhciB3b3JkcyA9IHdvcmRBcnJheS53b3Jkcztcblx0ICAgICAgICAgICAgdmFyIHNpZ0J5dGVzID0gd29yZEFycmF5LnNpZ0J5dGVzO1xuXG5cdCAgICAgICAgICAgIC8vIENvbnZlcnRcblx0ICAgICAgICAgICAgdmFyIGxhdGluMUNoYXJzID0gW107XG5cdCAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2lnQnl0ZXM7IGkrKykge1xuXHQgICAgICAgICAgICAgICAgdmFyIGJpdGUgPSAod29yZHNbaSA+Pj4gMl0gPj4+ICgyNCAtIChpICUgNCkgKiA4KSkgJiAweGZmO1xuXHQgICAgICAgICAgICAgICAgbGF0aW4xQ2hhcnMucHVzaChTdHJpbmcuZnJvbUNoYXJDb2RlKGJpdGUpKTtcblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIHJldHVybiBsYXRpbjFDaGFycy5qb2luKCcnKTtcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogQ29udmVydHMgYSBMYXRpbjEgc3RyaW5nIHRvIGEgd29yZCBhcnJheS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBsYXRpbjFTdHIgVGhlIExhdGluMSBzdHJpbmcuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtXb3JkQXJyYXl9IFRoZSB3b3JkIGFycmF5LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHN0YXRpY1xuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgd29yZEFycmF5ID0gQ3J5cHRvSlMuZW5jLkxhdGluMS5wYXJzZShsYXRpbjFTdHJpbmcpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIHBhcnNlOiBmdW5jdGlvbiAobGF0aW4xU3RyKSB7XG5cdCAgICAgICAgICAgIC8vIFNob3J0Y3V0XG5cdCAgICAgICAgICAgIHZhciBsYXRpbjFTdHJMZW5ndGggPSBsYXRpbjFTdHIubGVuZ3RoO1xuXG5cdCAgICAgICAgICAgIC8vIENvbnZlcnRcblx0ICAgICAgICAgICAgdmFyIHdvcmRzID0gW107XG5cdCAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGF0aW4xU3RyTGVuZ3RoOyBpKyspIHtcblx0ICAgICAgICAgICAgICAgIHdvcmRzW2kgPj4+IDJdIHw9IChsYXRpbjFTdHIuY2hhckNvZGVBdChpKSAmIDB4ZmYpIDw8ICgyNCAtIChpICUgNCkgKiA4KTtcblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIHJldHVybiBuZXcgV29yZEFycmF5LmluaXQod29yZHMsIGxhdGluMVN0ckxlbmd0aCk7XG5cdCAgICAgICAgfVxuXHQgICAgfTtcblxuXHQgICAgLyoqXG5cdCAgICAgKiBVVEYtOCBlbmNvZGluZyBzdHJhdGVneS5cblx0ICAgICAqL1xuXHQgICAgdmFyIFV0ZjggPSBDX2VuYy5VdGY4ID0ge1xuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIENvbnZlcnRzIGEgd29yZCBhcnJheSB0byBhIFVURi04IHN0cmluZy5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7V29yZEFycmF5fSB3b3JkQXJyYXkgVGhlIHdvcmQgYXJyYXkuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtzdHJpbmd9IFRoZSBVVEYtOCBzdHJpbmcuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAc3RhdGljXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciB1dGY4U3RyaW5nID0gQ3J5cHRvSlMuZW5jLlV0Zjguc3RyaW5naWZ5KHdvcmRBcnJheSk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgc3RyaW5naWZ5OiBmdW5jdGlvbiAod29yZEFycmF5KSB7XG5cdCAgICAgICAgICAgIHRyeSB7XG5cdCAgICAgICAgICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KGVzY2FwZShMYXRpbjEuc3RyaW5naWZ5KHdvcmRBcnJheSkpKTtcblx0ICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuXHQgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNYWxmb3JtZWQgVVRGLTggZGF0YScpO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIENvbnZlcnRzIGEgVVRGLTggc3RyaW5nIHRvIGEgd29yZCBhcnJheS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSB1dGY4U3RyIFRoZSBVVEYtOCBzdHJpbmcuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtXb3JkQXJyYXl9IFRoZSB3b3JkIGFycmF5LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHN0YXRpY1xuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgd29yZEFycmF5ID0gQ3J5cHRvSlMuZW5jLlV0ZjgucGFyc2UodXRmOFN0cmluZyk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgcGFyc2U6IGZ1bmN0aW9uICh1dGY4U3RyKSB7XG5cdCAgICAgICAgICAgIHJldHVybiBMYXRpbjEucGFyc2UodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KHV0ZjhTdHIpKSk7XG5cdCAgICAgICAgfVxuXHQgICAgfTtcblxuXHQgICAgLyoqXG5cdCAgICAgKiBBYnN0cmFjdCBidWZmZXJlZCBibG9jayBhbGdvcml0aG0gdGVtcGxhdGUuXG5cdCAgICAgKlxuXHQgICAgICogVGhlIHByb3BlcnR5IGJsb2NrU2l6ZSBtdXN0IGJlIGltcGxlbWVudGVkIGluIGEgY29uY3JldGUgc3VidHlwZS5cblx0ICAgICAqXG5cdCAgICAgKiBAcHJvcGVydHkge251bWJlcn0gX21pbkJ1ZmZlclNpemUgVGhlIG51bWJlciBvZiBibG9ja3MgdGhhdCBzaG91bGQgYmUga2VwdCB1bnByb2Nlc3NlZCBpbiB0aGUgYnVmZmVyLiBEZWZhdWx0OiAwXG5cdCAgICAgKi9cblx0ICAgIHZhciBCdWZmZXJlZEJsb2NrQWxnb3JpdGhtID0gQ19saWIuQnVmZmVyZWRCbG9ja0FsZ29yaXRobSA9IEJhc2UuZXh0ZW5kKHtcblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBSZXNldHMgdGhpcyBibG9jayBhbGdvcml0aG0ncyBkYXRhIGJ1ZmZlciB0byBpdHMgaW5pdGlhbCBzdGF0ZS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgYnVmZmVyZWRCbG9ja0FsZ29yaXRobS5yZXNldCgpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIHJlc2V0OiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgIC8vIEluaXRpYWwgdmFsdWVzXG5cdCAgICAgICAgICAgIHRoaXMuX2RhdGEgPSBuZXcgV29yZEFycmF5LmluaXQoKTtcblx0ICAgICAgICAgICAgdGhpcy5fbkRhdGFCeXRlcyA9IDA7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIEFkZHMgbmV3IGRhdGEgdG8gdGhpcyBibG9jayBhbGdvcml0aG0ncyBidWZmZXIuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge1dvcmRBcnJheXxzdHJpbmd9IGRhdGEgVGhlIGRhdGEgdG8gYXBwZW5kLiBTdHJpbmdzIGFyZSBjb252ZXJ0ZWQgdG8gYSBXb3JkQXJyYXkgdXNpbmcgVVRGLTguXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIGJ1ZmZlcmVkQmxvY2tBbGdvcml0aG0uX2FwcGVuZCgnZGF0YScpO1xuXHQgICAgICAgICAqICAgICBidWZmZXJlZEJsb2NrQWxnb3JpdGhtLl9hcHBlbmQod29yZEFycmF5KTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBfYXBwZW5kOiBmdW5jdGlvbiAoZGF0YSkge1xuXHQgICAgICAgICAgICAvLyBDb252ZXJ0IHN0cmluZyB0byBXb3JkQXJyYXksIGVsc2UgYXNzdW1lIFdvcmRBcnJheSBhbHJlYWR5XG5cdCAgICAgICAgICAgIGlmICh0eXBlb2YgZGF0YSA9PSAnc3RyaW5nJykge1xuXHQgICAgICAgICAgICAgICAgZGF0YSA9IFV0ZjgucGFyc2UoZGF0YSk7XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICAvLyBBcHBlbmRcblx0ICAgICAgICAgICAgdGhpcy5fZGF0YS5jb25jYXQoZGF0YSk7XG5cdCAgICAgICAgICAgIHRoaXMuX25EYXRhQnl0ZXMgKz0gZGF0YS5zaWdCeXRlcztcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogUHJvY2Vzc2VzIGF2YWlsYWJsZSBkYXRhIGJsb2Nrcy5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIFRoaXMgbWV0aG9kIGludm9rZXMgX2RvUHJvY2Vzc0Jsb2NrKG9mZnNldCksIHdoaWNoIG11c3QgYmUgaW1wbGVtZW50ZWQgYnkgYSBjb25jcmV0ZSBzdWJ0eXBlLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtib29sZWFufSBkb0ZsdXNoIFdoZXRoZXIgYWxsIGJsb2NrcyBhbmQgcGFydGlhbCBibG9ja3Mgc2hvdWxkIGJlIHByb2Nlc3NlZC5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEByZXR1cm4ge1dvcmRBcnJheX0gVGhlIHByb2Nlc3NlZCBkYXRhLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgcHJvY2Vzc2VkRGF0YSA9IGJ1ZmZlcmVkQmxvY2tBbGdvcml0aG0uX3Byb2Nlc3MoKTtcblx0ICAgICAgICAgKiAgICAgdmFyIHByb2Nlc3NlZERhdGEgPSBidWZmZXJlZEJsb2NrQWxnb3JpdGhtLl9wcm9jZXNzKCEhJ2ZsdXNoJyk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgX3Byb2Nlc3M6IGZ1bmN0aW9uIChkb0ZsdXNoKSB7XG5cdCAgICAgICAgICAgIC8vIFNob3J0Y3V0c1xuXHQgICAgICAgICAgICB2YXIgZGF0YSA9IHRoaXMuX2RhdGE7XG5cdCAgICAgICAgICAgIHZhciBkYXRhV29yZHMgPSBkYXRhLndvcmRzO1xuXHQgICAgICAgICAgICB2YXIgZGF0YVNpZ0J5dGVzID0gZGF0YS5zaWdCeXRlcztcblx0ICAgICAgICAgICAgdmFyIGJsb2NrU2l6ZSA9IHRoaXMuYmxvY2tTaXplO1xuXHQgICAgICAgICAgICB2YXIgYmxvY2tTaXplQnl0ZXMgPSBibG9ja1NpemUgKiA0O1xuXG5cdCAgICAgICAgICAgIC8vIENvdW50IGJsb2NrcyByZWFkeVxuXHQgICAgICAgICAgICB2YXIgbkJsb2Nrc1JlYWR5ID0gZGF0YVNpZ0J5dGVzIC8gYmxvY2tTaXplQnl0ZXM7XG5cdCAgICAgICAgICAgIGlmIChkb0ZsdXNoKSB7XG5cdCAgICAgICAgICAgICAgICAvLyBSb3VuZCB1cCB0byBpbmNsdWRlIHBhcnRpYWwgYmxvY2tzXG5cdCAgICAgICAgICAgICAgICBuQmxvY2tzUmVhZHkgPSBNYXRoLmNlaWwobkJsb2Nrc1JlYWR5KTtcblx0ICAgICAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgICAgICAgIC8vIFJvdW5kIGRvd24gdG8gaW5jbHVkZSBvbmx5IGZ1bGwgYmxvY2tzLFxuXHQgICAgICAgICAgICAgICAgLy8gbGVzcyB0aGUgbnVtYmVyIG9mIGJsb2NrcyB0aGF0IG11c3QgcmVtYWluIGluIHRoZSBidWZmZXJcblx0ICAgICAgICAgICAgICAgIG5CbG9ja3NSZWFkeSA9IE1hdGgubWF4KChuQmxvY2tzUmVhZHkgfCAwKSAtIHRoaXMuX21pbkJ1ZmZlclNpemUsIDApO1xuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgLy8gQ291bnQgd29yZHMgcmVhZHlcblx0ICAgICAgICAgICAgdmFyIG5Xb3Jkc1JlYWR5ID0gbkJsb2Nrc1JlYWR5ICogYmxvY2tTaXplO1xuXG5cdCAgICAgICAgICAgIC8vIENvdW50IGJ5dGVzIHJlYWR5XG5cdCAgICAgICAgICAgIHZhciBuQnl0ZXNSZWFkeSA9IE1hdGgubWluKG5Xb3Jkc1JlYWR5ICogNCwgZGF0YVNpZ0J5dGVzKTtcblxuXHQgICAgICAgICAgICAvLyBQcm9jZXNzIGJsb2Nrc1xuXHQgICAgICAgICAgICBpZiAobldvcmRzUmVhZHkpIHtcblx0ICAgICAgICAgICAgICAgIGZvciAodmFyIG9mZnNldCA9IDA7IG9mZnNldCA8IG5Xb3Jkc1JlYWR5OyBvZmZzZXQgKz0gYmxvY2tTaXplKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgLy8gUGVyZm9ybSBjb25jcmV0ZS1hbGdvcml0aG0gbG9naWNcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLl9kb1Byb2Nlc3NCbG9jayhkYXRhV29yZHMsIG9mZnNldCk7XG5cdCAgICAgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgICAgIC8vIFJlbW92ZSBwcm9jZXNzZWQgd29yZHNcblx0ICAgICAgICAgICAgICAgIHZhciBwcm9jZXNzZWRXb3JkcyA9IGRhdGFXb3Jkcy5zcGxpY2UoMCwgbldvcmRzUmVhZHkpO1xuXHQgICAgICAgICAgICAgICAgZGF0YS5zaWdCeXRlcyAtPSBuQnl0ZXNSZWFkeTtcblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIC8vIFJldHVybiBwcm9jZXNzZWQgd29yZHNcblx0ICAgICAgICAgICAgcmV0dXJuIG5ldyBXb3JkQXJyYXkuaW5pdChwcm9jZXNzZWRXb3JkcywgbkJ5dGVzUmVhZHkpO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDcmVhdGVzIGEgY29weSBvZiB0aGlzIG9iamVjdC5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEByZXR1cm4ge09iamVjdH0gVGhlIGNsb25lLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgY2xvbmUgPSBidWZmZXJlZEJsb2NrQWxnb3JpdGhtLmNsb25lKCk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgY2xvbmU6IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgdmFyIGNsb25lID0gQmFzZS5jbG9uZS5jYWxsKHRoaXMpO1xuXHQgICAgICAgICAgICBjbG9uZS5fZGF0YSA9IHRoaXMuX2RhdGEuY2xvbmUoKTtcblxuXHQgICAgICAgICAgICByZXR1cm4gY2xvbmU7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIF9taW5CdWZmZXJTaXplOiAwXG5cdCAgICB9KTtcblxuXHQgICAgLyoqXG5cdCAgICAgKiBBYnN0cmFjdCBoYXNoZXIgdGVtcGxhdGUuXG5cdCAgICAgKlxuXHQgICAgICogQHByb3BlcnR5IHtudW1iZXJ9IGJsb2NrU2l6ZSBUaGUgbnVtYmVyIG9mIDMyLWJpdCB3b3JkcyB0aGlzIGhhc2hlciBvcGVyYXRlcyBvbi4gRGVmYXVsdDogMTYgKDUxMiBiaXRzKVxuXHQgICAgICovXG5cdCAgICB2YXIgSGFzaGVyID0gQ19saWIuSGFzaGVyID0gQnVmZmVyZWRCbG9ja0FsZ29yaXRobS5leHRlbmQoe1xuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIENvbmZpZ3VyYXRpb24gb3B0aW9ucy5cblx0ICAgICAgICAgKi9cblx0ICAgICAgICBjZmc6IEJhc2UuZXh0ZW5kKCksXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBJbml0aWFsaXplcyBhIG5ld2x5IGNyZWF0ZWQgaGFzaGVyLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGNmZyAoT3B0aW9uYWwpIFRoZSBjb25maWd1cmF0aW9uIG9wdGlvbnMgdG8gdXNlIGZvciB0aGlzIGhhc2ggY29tcHV0YXRpb24uXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciBoYXNoZXIgPSBDcnlwdG9KUy5hbGdvLlNIQTI1Ni5jcmVhdGUoKTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBpbml0OiBmdW5jdGlvbiAoY2ZnKSB7XG5cdCAgICAgICAgICAgIC8vIEFwcGx5IGNvbmZpZyBkZWZhdWx0c1xuXHQgICAgICAgICAgICB0aGlzLmNmZyA9IHRoaXMuY2ZnLmV4dGVuZChjZmcpO1xuXG5cdCAgICAgICAgICAgIC8vIFNldCBpbml0aWFsIHZhbHVlc1xuXHQgICAgICAgICAgICB0aGlzLnJlc2V0KCk7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIFJlc2V0cyB0aGlzIGhhc2hlciB0byBpdHMgaW5pdGlhbCBzdGF0ZS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgaGFzaGVyLnJlc2V0KCk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgcmVzZXQ6IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgLy8gUmVzZXQgZGF0YSBidWZmZXJcblx0ICAgICAgICAgICAgQnVmZmVyZWRCbG9ja0FsZ29yaXRobS5yZXNldC5jYWxsKHRoaXMpO1xuXG5cdCAgICAgICAgICAgIC8vIFBlcmZvcm0gY29uY3JldGUtaGFzaGVyIGxvZ2ljXG5cdCAgICAgICAgICAgIHRoaXMuX2RvUmVzZXQoKTtcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogVXBkYXRlcyB0aGlzIGhhc2hlciB3aXRoIGEgbWVzc2FnZS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7V29yZEFycmF5fHN0cmluZ30gbWVzc2FnZVVwZGF0ZSBUaGUgbWVzc2FnZSB0byBhcHBlbmQuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtIYXNoZXJ9IFRoaXMgaGFzaGVyLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICBoYXNoZXIudXBkYXRlKCdtZXNzYWdlJyk7XG5cdCAgICAgICAgICogICAgIGhhc2hlci51cGRhdGUod29yZEFycmF5KTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICB1cGRhdGU6IGZ1bmN0aW9uIChtZXNzYWdlVXBkYXRlKSB7XG5cdCAgICAgICAgICAgIC8vIEFwcGVuZFxuXHQgICAgICAgICAgICB0aGlzLl9hcHBlbmQobWVzc2FnZVVwZGF0ZSk7XG5cblx0ICAgICAgICAgICAgLy8gVXBkYXRlIHRoZSBoYXNoXG5cdCAgICAgICAgICAgIHRoaXMuX3Byb2Nlc3MoKTtcblxuXHQgICAgICAgICAgICAvLyBDaGFpbmFibGVcblx0ICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIEZpbmFsaXplcyB0aGUgaGFzaCBjb21wdXRhdGlvbi5cblx0ICAgICAgICAgKiBOb3RlIHRoYXQgdGhlIGZpbmFsaXplIG9wZXJhdGlvbiBpcyBlZmZlY3RpdmVseSBhIGRlc3RydWN0aXZlLCByZWFkLW9uY2Ugb3BlcmF0aW9uLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtXb3JkQXJyYXl8c3RyaW5nfSBtZXNzYWdlVXBkYXRlIChPcHRpb25hbCkgQSBmaW5hbCBtZXNzYWdlIHVwZGF0ZS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEByZXR1cm4ge1dvcmRBcnJheX0gVGhlIGhhc2guXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciBoYXNoID0gaGFzaGVyLmZpbmFsaXplKCk7XG5cdCAgICAgICAgICogICAgIHZhciBoYXNoID0gaGFzaGVyLmZpbmFsaXplKCdtZXNzYWdlJyk7XG5cdCAgICAgICAgICogICAgIHZhciBoYXNoID0gaGFzaGVyLmZpbmFsaXplKHdvcmRBcnJheSk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgZmluYWxpemU6IGZ1bmN0aW9uIChtZXNzYWdlVXBkYXRlKSB7XG5cdCAgICAgICAgICAgIC8vIEZpbmFsIG1lc3NhZ2UgdXBkYXRlXG5cdCAgICAgICAgICAgIGlmIChtZXNzYWdlVXBkYXRlKSB7XG5cdCAgICAgICAgICAgICAgICB0aGlzLl9hcHBlbmQobWVzc2FnZVVwZGF0ZSk7XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICAvLyBQZXJmb3JtIGNvbmNyZXRlLWhhc2hlciBsb2dpY1xuXHQgICAgICAgICAgICB2YXIgaGFzaCA9IHRoaXMuX2RvRmluYWxpemUoKTtcblxuXHQgICAgICAgICAgICByZXR1cm4gaGFzaDtcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgYmxvY2tTaXplOiA1MTIvMzIsXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDcmVhdGVzIGEgc2hvcnRjdXQgZnVuY3Rpb24gdG8gYSBoYXNoZXIncyBvYmplY3QgaW50ZXJmYWNlLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtIYXNoZXJ9IGhhc2hlciBUaGUgaGFzaGVyIHRvIGNyZWF0ZSBhIGhlbHBlciBmb3IuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtGdW5jdGlvbn0gVGhlIHNob3J0Y3V0IGZ1bmN0aW9uLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHN0YXRpY1xuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgU0hBMjU2ID0gQ3J5cHRvSlMubGliLkhhc2hlci5fY3JlYXRlSGVscGVyKENyeXB0b0pTLmFsZ28uU0hBMjU2KTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBfY3JlYXRlSGVscGVyOiBmdW5jdGlvbiAoaGFzaGVyKSB7XG5cdCAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAobWVzc2FnZSwgY2ZnKSB7XG5cdCAgICAgICAgICAgICAgICByZXR1cm4gbmV3IGhhc2hlci5pbml0KGNmZykuZmluYWxpemUobWVzc2FnZSk7XG5cdCAgICAgICAgICAgIH07XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIENyZWF0ZXMgYSBzaG9ydGN1dCBmdW5jdGlvbiB0byB0aGUgSE1BQydzIG9iamVjdCBpbnRlcmZhY2UuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge0hhc2hlcn0gaGFzaGVyIFRoZSBoYXNoZXIgdG8gdXNlIGluIHRoaXMgSE1BQyBoZWxwZXIuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtGdW5jdGlvbn0gVGhlIHNob3J0Y3V0IGZ1bmN0aW9uLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHN0YXRpY1xuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgSG1hY1NIQTI1NiA9IENyeXB0b0pTLmxpYi5IYXNoZXIuX2NyZWF0ZUhtYWNIZWxwZXIoQ3J5cHRvSlMuYWxnby5TSEEyNTYpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIF9jcmVhdGVIbWFjSGVscGVyOiBmdW5jdGlvbiAoaGFzaGVyKSB7XG5cdCAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAobWVzc2FnZSwga2V5KSB7XG5cdCAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENfYWxnby5ITUFDLmluaXQoaGFzaGVyLCBrZXkpLmZpbmFsaXplKG1lc3NhZ2UpO1xuXHQgICAgICAgICAgICB9O1xuXHQgICAgICAgIH1cblx0ICAgIH0pO1xuXG5cdCAgICAvKipcblx0ICAgICAqIEFsZ29yaXRobSBuYW1lc3BhY2UuXG5cdCAgICAgKi9cblx0ICAgIHZhciBDX2FsZ28gPSBDLmFsZ28gPSB7fTtcblxuXHQgICAgcmV0dXJuIEM7XG5cdH0oTWF0aCkpO1xuXG5cblx0cmV0dXJuIENyeXB0b0pTO1xuXG59KSk7IiwiOyhmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSkge1xuXHRpZiAodHlwZW9mIGV4cG9ydHMgPT09IFwib2JqZWN0XCIpIHtcblx0XHQvLyBDb21tb25KU1xuXHRcdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcIi4vY29yZVwiKSk7XG5cdH1cblx0ZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQpIHtcblx0XHQvLyBBTURcblx0XHRkZWZpbmUoW1wiLi9jb3JlXCJdLCBmYWN0b3J5KTtcblx0fVxuXHRlbHNlIHtcblx0XHQvLyBHbG9iYWwgKGJyb3dzZXIpXG5cdFx0ZmFjdG9yeShyb290LkNyeXB0b0pTKTtcblx0fVxufSh0aGlzLCBmdW5jdGlvbiAoQ3J5cHRvSlMpIHtcblxuXHQoZnVuY3Rpb24gKCkge1xuXHQgICAgLy8gU2hvcnRjdXRzXG5cdCAgICB2YXIgQyA9IENyeXB0b0pTO1xuXHQgICAgdmFyIENfbGliID0gQy5saWI7XG5cdCAgICB2YXIgV29yZEFycmF5ID0gQ19saWIuV29yZEFycmF5O1xuXHQgICAgdmFyIEhhc2hlciA9IENfbGliLkhhc2hlcjtcblx0ICAgIHZhciBDX2FsZ28gPSBDLmFsZ287XG5cblx0ICAgIC8vIFJldXNhYmxlIG9iamVjdFxuXHQgICAgdmFyIFcgPSBbXTtcblxuXHQgICAgLyoqXG5cdCAgICAgKiBTSEEtMSBoYXNoIGFsZ29yaXRobS5cblx0ICAgICAqL1xuXHQgICAgdmFyIFNIQTEgPSBDX2FsZ28uU0hBMSA9IEhhc2hlci5leHRlbmQoe1xuXHQgICAgICAgIF9kb1Jlc2V0OiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgIHRoaXMuX2hhc2ggPSBuZXcgV29yZEFycmF5LmluaXQoW1xuXHQgICAgICAgICAgICAgICAgMHg2NzQ1MjMwMSwgMHhlZmNkYWI4OSxcblx0ICAgICAgICAgICAgICAgIDB4OThiYWRjZmUsIDB4MTAzMjU0NzYsXG5cdCAgICAgICAgICAgICAgICAweGMzZDJlMWYwXG5cdCAgICAgICAgICAgIF0pO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICBfZG9Qcm9jZXNzQmxvY2s6IGZ1bmN0aW9uIChNLCBvZmZzZXQpIHtcblx0ICAgICAgICAgICAgLy8gU2hvcnRjdXRcblx0ICAgICAgICAgICAgdmFyIEggPSB0aGlzLl9oYXNoLndvcmRzO1xuXG5cdCAgICAgICAgICAgIC8vIFdvcmtpbmcgdmFyaWFibGVzXG5cdCAgICAgICAgICAgIHZhciBhID0gSFswXTtcblx0ICAgICAgICAgICAgdmFyIGIgPSBIWzFdO1xuXHQgICAgICAgICAgICB2YXIgYyA9IEhbMl07XG5cdCAgICAgICAgICAgIHZhciBkID0gSFszXTtcblx0ICAgICAgICAgICAgdmFyIGUgPSBIWzRdO1xuXG5cdCAgICAgICAgICAgIC8vIENvbXB1dGF0aW9uXG5cdCAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgODA7IGkrKykge1xuXHQgICAgICAgICAgICAgICAgaWYgKGkgPCAxNikge1xuXHQgICAgICAgICAgICAgICAgICAgIFdbaV0gPSBNW29mZnNldCArIGldIHwgMDtcblx0ICAgICAgICAgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICAgICAgICAgICAgdmFyIG4gPSBXW2kgLSAzXSBeIFdbaSAtIDhdIF4gV1tpIC0gMTRdIF4gV1tpIC0gMTZdO1xuXHQgICAgICAgICAgICAgICAgICAgIFdbaV0gPSAobiA8PCAxKSB8IChuID4+PiAzMSk7XG5cdCAgICAgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgICAgIHZhciB0ID0gKChhIDw8IDUpIHwgKGEgPj4+IDI3KSkgKyBlICsgV1tpXTtcblx0ICAgICAgICAgICAgICAgIGlmIChpIDwgMjApIHtcblx0ICAgICAgICAgICAgICAgICAgICB0ICs9ICgoYiAmIGMpIHwgKH5iICYgZCkpICsgMHg1YTgyNzk5OTtcblx0ICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaSA8IDQwKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgdCArPSAoYiBeIGMgXiBkKSArIDB4NmVkOWViYTE7XG5cdCAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGkgPCA2MCkge1xuXHQgICAgICAgICAgICAgICAgICAgIHQgKz0gKChiICYgYykgfCAoYiAmIGQpIHwgKGMgJiBkKSkgLSAweDcwZTQ0MzI0O1xuXHQgICAgICAgICAgICAgICAgfSBlbHNlIC8qIGlmIChpIDwgODApICovIHtcblx0ICAgICAgICAgICAgICAgICAgICB0ICs9IChiIF4gYyBeIGQpIC0gMHgzNTlkM2UyYTtcblx0ICAgICAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICAgICAgZSA9IGQ7XG5cdCAgICAgICAgICAgICAgICBkID0gYztcblx0ICAgICAgICAgICAgICAgIGMgPSAoYiA8PCAzMCkgfCAoYiA+Pj4gMik7XG5cdCAgICAgICAgICAgICAgICBiID0gYTtcblx0ICAgICAgICAgICAgICAgIGEgPSB0O1xuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgLy8gSW50ZXJtZWRpYXRlIGhhc2ggdmFsdWVcblx0ICAgICAgICAgICAgSFswXSA9IChIWzBdICsgYSkgfCAwO1xuXHQgICAgICAgICAgICBIWzFdID0gKEhbMV0gKyBiKSB8IDA7XG5cdCAgICAgICAgICAgIEhbMl0gPSAoSFsyXSArIGMpIHwgMDtcblx0ICAgICAgICAgICAgSFszXSA9IChIWzNdICsgZCkgfCAwO1xuXHQgICAgICAgICAgICBIWzRdID0gKEhbNF0gKyBlKSB8IDA7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIF9kb0ZpbmFsaXplOiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgIC8vIFNob3J0Y3V0c1xuXHQgICAgICAgICAgICB2YXIgZGF0YSA9IHRoaXMuX2RhdGE7XG5cdCAgICAgICAgICAgIHZhciBkYXRhV29yZHMgPSBkYXRhLndvcmRzO1xuXG5cdCAgICAgICAgICAgIHZhciBuQml0c1RvdGFsID0gdGhpcy5fbkRhdGFCeXRlcyAqIDg7XG5cdCAgICAgICAgICAgIHZhciBuQml0c0xlZnQgPSBkYXRhLnNpZ0J5dGVzICogODtcblxuXHQgICAgICAgICAgICAvLyBBZGQgcGFkZGluZ1xuXHQgICAgICAgICAgICBkYXRhV29yZHNbbkJpdHNMZWZ0ID4+PiA1XSB8PSAweDgwIDw8ICgyNCAtIG5CaXRzTGVmdCAlIDMyKTtcblx0ICAgICAgICAgICAgZGF0YVdvcmRzWygoKG5CaXRzTGVmdCArIDY0KSA+Pj4gOSkgPDwgNCkgKyAxNF0gPSBNYXRoLmZsb29yKG5CaXRzVG90YWwgLyAweDEwMDAwMDAwMCk7XG5cdCAgICAgICAgICAgIGRhdGFXb3Jkc1soKChuQml0c0xlZnQgKyA2NCkgPj4+IDkpIDw8IDQpICsgMTVdID0gbkJpdHNUb3RhbDtcblx0ICAgICAgICAgICAgZGF0YS5zaWdCeXRlcyA9IGRhdGFXb3Jkcy5sZW5ndGggKiA0O1xuXG5cdCAgICAgICAgICAgIC8vIEhhc2ggZmluYWwgYmxvY2tzXG5cdCAgICAgICAgICAgIHRoaXMuX3Byb2Nlc3MoKTtcblxuXHQgICAgICAgICAgICAvLyBSZXR1cm4gZmluYWwgY29tcHV0ZWQgaGFzaFxuXHQgICAgICAgICAgICByZXR1cm4gdGhpcy5faGFzaDtcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgY2xvbmU6IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgdmFyIGNsb25lID0gSGFzaGVyLmNsb25lLmNhbGwodGhpcyk7XG5cdCAgICAgICAgICAgIGNsb25lLl9oYXNoID0gdGhpcy5faGFzaC5jbG9uZSgpO1xuXG5cdCAgICAgICAgICAgIHJldHVybiBjbG9uZTtcblx0ICAgICAgICB9XG5cdCAgICB9KTtcblxuXHQgICAgLyoqXG5cdCAgICAgKiBTaG9ydGN1dCBmdW5jdGlvbiB0byB0aGUgaGFzaGVyJ3Mgb2JqZWN0IGludGVyZmFjZS5cblx0ICAgICAqXG5cdCAgICAgKiBAcGFyYW0ge1dvcmRBcnJheXxzdHJpbmd9IG1lc3NhZ2UgVGhlIG1lc3NhZ2UgdG8gaGFzaC5cblx0ICAgICAqXG5cdCAgICAgKiBAcmV0dXJuIHtXb3JkQXJyYXl9IFRoZSBoYXNoLlxuXHQgICAgICpcblx0ICAgICAqIEBzdGF0aWNcblx0ICAgICAqXG5cdCAgICAgKiBAZXhhbXBsZVxuXHQgICAgICpcblx0ICAgICAqICAgICB2YXIgaGFzaCA9IENyeXB0b0pTLlNIQTEoJ21lc3NhZ2UnKTtcblx0ICAgICAqICAgICB2YXIgaGFzaCA9IENyeXB0b0pTLlNIQTEod29yZEFycmF5KTtcblx0ICAgICAqL1xuXHQgICAgQy5TSEExID0gSGFzaGVyLl9jcmVhdGVIZWxwZXIoU0hBMSk7XG5cblx0ICAgIC8qKlxuXHQgICAgICogU2hvcnRjdXQgZnVuY3Rpb24gdG8gdGhlIEhNQUMncyBvYmplY3QgaW50ZXJmYWNlLlxuXHQgICAgICpcblx0ICAgICAqIEBwYXJhbSB7V29yZEFycmF5fHN0cmluZ30gbWVzc2FnZSBUaGUgbWVzc2FnZSB0byBoYXNoLlxuXHQgICAgICogQHBhcmFtIHtXb3JkQXJyYXl8c3RyaW5nfSBrZXkgVGhlIHNlY3JldCBrZXkuXG5cdCAgICAgKlxuXHQgICAgICogQHJldHVybiB7V29yZEFycmF5fSBUaGUgSE1BQy5cblx0ICAgICAqXG5cdCAgICAgKiBAc3RhdGljXG5cdCAgICAgKlxuXHQgICAgICogQGV4YW1wbGVcblx0ICAgICAqXG5cdCAgICAgKiAgICAgdmFyIGhtYWMgPSBDcnlwdG9KUy5IbWFjU0hBMShtZXNzYWdlLCBrZXkpO1xuXHQgICAgICovXG5cdCAgICBDLkhtYWNTSEExID0gSGFzaGVyLl9jcmVhdGVIbWFjSGVscGVyKFNIQTEpO1xuXHR9KCkpO1xuXG5cblx0cmV0dXJuIENyeXB0b0pTLlNIQTE7XG5cbn0pKTsiLCIvLyAgICAgdXVpZC5qc1xuLy9cbi8vICAgICBDb3B5cmlnaHQgKGMpIDIwMTAtMjAxMiBSb2JlcnQgS2llZmZlclxuLy8gICAgIE1JVCBMaWNlbnNlIC0gaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXG4oZnVuY3Rpb24oKSB7XG4gIHZhciBfZ2xvYmFsID0gdGhpcztcblxuICAvLyBVbmlxdWUgSUQgY3JlYXRpb24gcmVxdWlyZXMgYSBoaWdoIHF1YWxpdHkgcmFuZG9tICMgZ2VuZXJhdG9yLiAgV2UgZmVhdHVyZVxuICAvLyBkZXRlY3QgdG8gZGV0ZXJtaW5lIHRoZSBiZXN0IFJORyBzb3VyY2UsIG5vcm1hbGl6aW5nIHRvIGEgZnVuY3Rpb24gdGhhdFxuICAvLyByZXR1cm5zIDEyOC1iaXRzIG9mIHJhbmRvbW5lc3MsIHNpbmNlIHRoYXQncyB3aGF0J3MgdXN1YWxseSByZXF1aXJlZFxuICB2YXIgX3JuZztcblxuICAvLyBOb2RlLmpzIGNyeXB0by1iYXNlZCBSTkcgLSBodHRwOi8vbm9kZWpzLm9yZy9kb2NzL3YwLjYuMi9hcGkvY3J5cHRvLmh0bWxcbiAgLy9cbiAgLy8gTW9kZXJhdGVseSBmYXN0LCBoaWdoIHF1YWxpdHlcbiAgaWYgKHR5cGVvZihfZ2xvYmFsLnJlcXVpcmUpID09ICdmdW5jdGlvbicpIHtcbiAgICB0cnkge1xuICAgICAgdmFyIF9yYiA9IF9nbG9iYWwucmVxdWlyZSgnY3J5cHRvJykucmFuZG9tQnl0ZXM7XG4gICAgICBfcm5nID0gX3JiICYmIGZ1bmN0aW9uKCkge3JldHVybiBfcmIoMTYpO307XG4gICAgfSBjYXRjaChlKSB7fVxuICB9XG5cbiAgaWYgKCFfcm5nICYmIF9nbG9iYWwuY3J5cHRvICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAvLyBXSEFUV0cgY3J5cHRvLWJhc2VkIFJORyAtIGh0dHA6Ly93aWtpLndoYXR3Zy5vcmcvd2lraS9DcnlwdG9cbiAgICAvL1xuICAgIC8vIE1vZGVyYXRlbHkgZmFzdCwgaGlnaCBxdWFsaXR5XG4gICAgdmFyIF9ybmRzOCA9IG5ldyBVaW50OEFycmF5KDE2KTtcbiAgICBfcm5nID0gZnVuY3Rpb24gd2hhdHdnUk5HKCkge1xuICAgICAgY3J5cHRvLmdldFJhbmRvbVZhbHVlcyhfcm5kczgpO1xuICAgICAgcmV0dXJuIF9ybmRzODtcbiAgICB9O1xuICB9XG5cbiAgaWYgKCFfcm5nKSB7XG4gICAgLy8gTWF0aC5yYW5kb20oKS1iYXNlZCAoUk5HKVxuICAgIC8vXG4gICAgLy8gSWYgYWxsIGVsc2UgZmFpbHMsIHVzZSBNYXRoLnJhbmRvbSgpLiAgSXQncyBmYXN0LCBidXQgaXMgb2YgdW5zcGVjaWZpZWRcbiAgICAvLyBxdWFsaXR5LlxuICAgIHZhciAgX3JuZHMgPSBuZXcgQXJyYXkoMTYpO1xuICAgIF9ybmcgPSBmdW5jdGlvbigpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwLCByOyBpIDwgMTY7IGkrKykge1xuICAgICAgICBpZiAoKGkgJiAweDAzKSA9PT0gMCkgciA9IE1hdGgucmFuZG9tKCkgKiAweDEwMDAwMDAwMDtcbiAgICAgICAgX3JuZHNbaV0gPSByID4+PiAoKGkgJiAweDAzKSA8PCAzKSAmIDB4ZmY7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBfcm5kcztcbiAgICB9O1xuICB9XG5cbiAgLy8gQnVmZmVyIGNsYXNzIHRvIHVzZVxuICB2YXIgQnVmZmVyQ2xhc3MgPSB0eXBlb2YoX2dsb2JhbC5CdWZmZXIpID09ICdmdW5jdGlvbicgPyBfZ2xvYmFsLkJ1ZmZlciA6IEFycmF5O1xuXG4gIC8vIE1hcHMgZm9yIG51bWJlciA8LT4gaGV4IHN0cmluZyBjb252ZXJzaW9uXG4gIHZhciBfYnl0ZVRvSGV4ID0gW107XG4gIHZhciBfaGV4VG9CeXRlID0ge307XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgMjU2OyBpKyspIHtcbiAgICBfYnl0ZVRvSGV4W2ldID0gKGkgKyAweDEwMCkudG9TdHJpbmcoMTYpLnN1YnN0cigxKTtcbiAgICBfaGV4VG9CeXRlW19ieXRlVG9IZXhbaV1dID0gaTtcbiAgfVxuXG4gIC8vICoqYHBhcnNlKClgIC0gUGFyc2UgYSBVVUlEIGludG8gaXQncyBjb21wb25lbnQgYnl0ZXMqKlxuICBmdW5jdGlvbiBwYXJzZShzLCBidWYsIG9mZnNldCkge1xuICAgIHZhciBpID0gKGJ1ZiAmJiBvZmZzZXQpIHx8IDAsIGlpID0gMDtcblxuICAgIGJ1ZiA9IGJ1ZiB8fCBbXTtcbiAgICBzLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvWzAtOWEtZl17Mn0vZywgZnVuY3Rpb24ob2N0KSB7XG4gICAgICBpZiAoaWkgPCAxNikgeyAvLyBEb24ndCBvdmVyZmxvdyFcbiAgICAgICAgYnVmW2kgKyBpaSsrXSA9IF9oZXhUb0J5dGVbb2N0XTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIFplcm8gb3V0IHJlbWFpbmluZyBieXRlcyBpZiBzdHJpbmcgd2FzIHNob3J0XG4gICAgd2hpbGUgKGlpIDwgMTYpIHtcbiAgICAgIGJ1ZltpICsgaWkrK10gPSAwO1xuICAgIH1cblxuICAgIHJldHVybiBidWY7XG4gIH1cblxuICAvLyAqKmB1bnBhcnNlKClgIC0gQ29udmVydCBVVUlEIGJ5dGUgYXJyYXkgKGFsYSBwYXJzZSgpKSBpbnRvIGEgc3RyaW5nKipcbiAgZnVuY3Rpb24gdW5wYXJzZShidWYsIG9mZnNldCkge1xuICAgIHZhciBpID0gb2Zmc2V0IHx8IDAsIGJ0aCA9IF9ieXRlVG9IZXg7XG4gICAgcmV0dXJuICBidGhbYnVmW2krK11dICsgYnRoW2J1ZltpKytdXSArXG4gICAgICAgICAgICBidGhbYnVmW2krK11dICsgYnRoW2J1ZltpKytdXSArICctJyArXG4gICAgICAgICAgICBidGhbYnVmW2krK11dICsgYnRoW2J1ZltpKytdXSArICctJyArXG4gICAgICAgICAgICBidGhbYnVmW2krK11dICsgYnRoW2J1ZltpKytdXSArICctJyArXG4gICAgICAgICAgICBidGhbYnVmW2krK11dICsgYnRoW2J1ZltpKytdXSArICctJyArXG4gICAgICAgICAgICBidGhbYnVmW2krK11dICsgYnRoW2J1ZltpKytdXSArXG4gICAgICAgICAgICBidGhbYnVmW2krK11dICsgYnRoW2J1ZltpKytdXSArXG4gICAgICAgICAgICBidGhbYnVmW2krK11dICsgYnRoW2J1ZltpKytdXTtcbiAgfVxuXG4gIC8vICoqYHYxKClgIC0gR2VuZXJhdGUgdGltZS1iYXNlZCBVVUlEKipcbiAgLy9cbiAgLy8gSW5zcGlyZWQgYnkgaHR0cHM6Ly9naXRodWIuY29tL0xpb3NLL1VVSUQuanNcbiAgLy8gYW5kIGh0dHA6Ly9kb2NzLnB5dGhvbi5vcmcvbGlicmFyeS91dWlkLmh0bWxcblxuICAvLyByYW5kb20gIydzIHdlIG5lZWQgdG8gaW5pdCBub2RlIGFuZCBjbG9ja3NlcVxuICB2YXIgX3NlZWRCeXRlcyA9IF9ybmcoKTtcblxuICAvLyBQZXIgNC41LCBjcmVhdGUgYW5kIDQ4LWJpdCBub2RlIGlkLCAoNDcgcmFuZG9tIGJpdHMgKyBtdWx0aWNhc3QgYml0ID0gMSlcbiAgdmFyIF9ub2RlSWQgPSBbXG4gICAgX3NlZWRCeXRlc1swXSB8IDB4MDEsXG4gICAgX3NlZWRCeXRlc1sxXSwgX3NlZWRCeXRlc1syXSwgX3NlZWRCeXRlc1szXSwgX3NlZWRCeXRlc1s0XSwgX3NlZWRCeXRlc1s1XVxuICBdO1xuXG4gIC8vIFBlciA0LjIuMiwgcmFuZG9taXplICgxNCBiaXQpIGNsb2Nrc2VxXG4gIHZhciBfY2xvY2tzZXEgPSAoX3NlZWRCeXRlc1s2XSA8PCA4IHwgX3NlZWRCeXRlc1s3XSkgJiAweDNmZmY7XG5cbiAgLy8gUHJldmlvdXMgdXVpZCBjcmVhdGlvbiB0aW1lXG4gIHZhciBfbGFzdE1TZWNzID0gMCwgX2xhc3ROU2VjcyA9IDA7XG5cbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9icm9vZmEvbm9kZS11dWlkIGZvciBBUEkgZGV0YWlsc1xuICBmdW5jdGlvbiB2MShvcHRpb25zLCBidWYsIG9mZnNldCkge1xuICAgIHZhciBpID0gYnVmICYmIG9mZnNldCB8fCAwO1xuICAgIHZhciBiID0gYnVmIHx8IFtdO1xuXG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgICB2YXIgY2xvY2tzZXEgPSBvcHRpb25zLmNsb2Nrc2VxICE9IG51bGwgPyBvcHRpb25zLmNsb2Nrc2VxIDogX2Nsb2Nrc2VxO1xuXG4gICAgLy8gVVVJRCB0aW1lc3RhbXBzIGFyZSAxMDAgbmFuby1zZWNvbmQgdW5pdHMgc2luY2UgdGhlIEdyZWdvcmlhbiBlcG9jaCxcbiAgICAvLyAoMTU4Mi0xMC0xNSAwMDowMCkuICBKU051bWJlcnMgYXJlbid0IHByZWNpc2UgZW5vdWdoIGZvciB0aGlzLCBzb1xuICAgIC8vIHRpbWUgaXMgaGFuZGxlZCBpbnRlcm5hbGx5IGFzICdtc2VjcycgKGludGVnZXIgbWlsbGlzZWNvbmRzKSBhbmQgJ25zZWNzJ1xuICAgIC8vICgxMDAtbmFub3NlY29uZHMgb2Zmc2V0IGZyb20gbXNlY3MpIHNpbmNlIHVuaXggZXBvY2gsIDE5NzAtMDEtMDEgMDA6MDAuXG4gICAgdmFyIG1zZWNzID0gb3B0aW9ucy5tc2VjcyAhPSBudWxsID8gb3B0aW9ucy5tc2VjcyA6IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuXG4gICAgLy8gUGVyIDQuMi4xLjIsIHVzZSBjb3VudCBvZiB1dWlkJ3MgZ2VuZXJhdGVkIGR1cmluZyB0aGUgY3VycmVudCBjbG9ja1xuICAgIC8vIGN5Y2xlIHRvIHNpbXVsYXRlIGhpZ2hlciByZXNvbHV0aW9uIGNsb2NrXG4gICAgdmFyIG5zZWNzID0gb3B0aW9ucy5uc2VjcyAhPSBudWxsID8gb3B0aW9ucy5uc2VjcyA6IF9sYXN0TlNlY3MgKyAxO1xuXG4gICAgLy8gVGltZSBzaW5jZSBsYXN0IHV1aWQgY3JlYXRpb24gKGluIG1zZWNzKVxuICAgIHZhciBkdCA9IChtc2VjcyAtIF9sYXN0TVNlY3MpICsgKG5zZWNzIC0gX2xhc3ROU2VjcykvMTAwMDA7XG5cbiAgICAvLyBQZXIgNC4yLjEuMiwgQnVtcCBjbG9ja3NlcSBvbiBjbG9jayByZWdyZXNzaW9uXG4gICAgaWYgKGR0IDwgMCAmJiBvcHRpb25zLmNsb2Nrc2VxID09IG51bGwpIHtcbiAgICAgIGNsb2Nrc2VxID0gY2xvY2tzZXEgKyAxICYgMHgzZmZmO1xuICAgIH1cblxuICAgIC8vIFJlc2V0IG5zZWNzIGlmIGNsb2NrIHJlZ3Jlc3NlcyAobmV3IGNsb2Nrc2VxKSBvciB3ZSd2ZSBtb3ZlZCBvbnRvIGEgbmV3XG4gICAgLy8gdGltZSBpbnRlcnZhbFxuICAgIGlmICgoZHQgPCAwIHx8IG1zZWNzID4gX2xhc3RNU2VjcykgJiYgb3B0aW9ucy5uc2VjcyA9PSBudWxsKSB7XG4gICAgICBuc2VjcyA9IDA7XG4gICAgfVxuXG4gICAgLy8gUGVyIDQuMi4xLjIgVGhyb3cgZXJyb3IgaWYgdG9vIG1hbnkgdXVpZHMgYXJlIHJlcXVlc3RlZFxuICAgIGlmIChuc2VjcyA+PSAxMDAwMCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCd1dWlkLnYxKCk6IENhblxcJ3QgY3JlYXRlIG1vcmUgdGhhbiAxME0gdXVpZHMvc2VjJyk7XG4gICAgfVxuXG4gICAgX2xhc3RNU2VjcyA9IG1zZWNzO1xuICAgIF9sYXN0TlNlY3MgPSBuc2VjcztcbiAgICBfY2xvY2tzZXEgPSBjbG9ja3NlcTtcblxuICAgIC8vIFBlciA0LjEuNCAtIENvbnZlcnQgZnJvbSB1bml4IGVwb2NoIHRvIEdyZWdvcmlhbiBlcG9jaFxuICAgIG1zZWNzICs9IDEyMjE5MjkyODAwMDAwO1xuXG4gICAgLy8gYHRpbWVfbG93YFxuICAgIHZhciB0bCA9ICgobXNlY3MgJiAweGZmZmZmZmYpICogMTAwMDAgKyBuc2VjcykgJSAweDEwMDAwMDAwMDtcbiAgICBiW2krK10gPSB0bCA+Pj4gMjQgJiAweGZmO1xuICAgIGJbaSsrXSA9IHRsID4+PiAxNiAmIDB4ZmY7XG4gICAgYltpKytdID0gdGwgPj4+IDggJiAweGZmO1xuICAgIGJbaSsrXSA9IHRsICYgMHhmZjtcblxuICAgIC8vIGB0aW1lX21pZGBcbiAgICB2YXIgdG1oID0gKG1zZWNzIC8gMHgxMDAwMDAwMDAgKiAxMDAwMCkgJiAweGZmZmZmZmY7XG4gICAgYltpKytdID0gdG1oID4+PiA4ICYgMHhmZjtcbiAgICBiW2krK10gPSB0bWggJiAweGZmO1xuXG4gICAgLy8gYHRpbWVfaGlnaF9hbmRfdmVyc2lvbmBcbiAgICBiW2krK10gPSB0bWggPj4+IDI0ICYgMHhmIHwgMHgxMDsgLy8gaW5jbHVkZSB2ZXJzaW9uXG4gICAgYltpKytdID0gdG1oID4+PiAxNiAmIDB4ZmY7XG5cbiAgICAvLyBgY2xvY2tfc2VxX2hpX2FuZF9yZXNlcnZlZGAgKFBlciA0LjIuMiAtIGluY2x1ZGUgdmFyaWFudClcbiAgICBiW2krK10gPSBjbG9ja3NlcSA+Pj4gOCB8IDB4ODA7XG5cbiAgICAvLyBgY2xvY2tfc2VxX2xvd2BcbiAgICBiW2krK10gPSBjbG9ja3NlcSAmIDB4ZmY7XG5cbiAgICAvLyBgbm9kZWBcbiAgICB2YXIgbm9kZSA9IG9wdGlvbnMubm9kZSB8fCBfbm9kZUlkO1xuICAgIGZvciAodmFyIG4gPSAwOyBuIDwgNjsgbisrKSB7XG4gICAgICBiW2kgKyBuXSA9IG5vZGVbbl07XG4gICAgfVxuXG4gICAgcmV0dXJuIGJ1ZiA/IGJ1ZiA6IHVucGFyc2UoYik7XG4gIH1cblxuICAvLyAqKmB2NCgpYCAtIEdlbmVyYXRlIHJhbmRvbSBVVUlEKipcblxuICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2Jyb29mYS9ub2RlLXV1aWQgZm9yIEFQSSBkZXRhaWxzXG4gIGZ1bmN0aW9uIHY0KG9wdGlvbnMsIGJ1Ziwgb2Zmc2V0KSB7XG4gICAgLy8gRGVwcmVjYXRlZCAtICdmb3JtYXQnIGFyZ3VtZW50LCBhcyBzdXBwb3J0ZWQgaW4gdjEuMlxuICAgIHZhciBpID0gYnVmICYmIG9mZnNldCB8fCAwO1xuXG4gICAgaWYgKHR5cGVvZihvcHRpb25zKSA9PSAnc3RyaW5nJykge1xuICAgICAgYnVmID0gb3B0aW9ucyA9PSAnYmluYXJ5JyA/IG5ldyBCdWZmZXJDbGFzcygxNikgOiBudWxsO1xuICAgICAgb3B0aW9ucyA9IG51bGw7XG4gICAgfVxuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gICAgdmFyIHJuZHMgPSBvcHRpb25zLnJhbmRvbSB8fCAob3B0aW9ucy5ybmcgfHwgX3JuZykoKTtcblxuICAgIC8vIFBlciA0LjQsIHNldCBiaXRzIGZvciB2ZXJzaW9uIGFuZCBgY2xvY2tfc2VxX2hpX2FuZF9yZXNlcnZlZGBcbiAgICBybmRzWzZdID0gKHJuZHNbNl0gJiAweDBmKSB8IDB4NDA7XG4gICAgcm5kc1s4XSA9IChybmRzWzhdICYgMHgzZikgfCAweDgwO1xuXG4gICAgLy8gQ29weSBieXRlcyB0byBidWZmZXIsIGlmIHByb3ZpZGVkXG4gICAgaWYgKGJ1Zikge1xuICAgICAgZm9yICh2YXIgaWkgPSAwOyBpaSA8IDE2OyBpaSsrKSB7XG4gICAgICAgIGJ1ZltpICsgaWldID0gcm5kc1tpaV07XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGJ1ZiB8fCB1bnBhcnNlKHJuZHMpO1xuICB9XG5cbiAgLy8gRXhwb3J0IHB1YmxpYyBBUElcbiAgdmFyIHV1aWQgPSB2NDtcbiAgdXVpZC52MSA9IHYxO1xuICB1dWlkLnY0ID0gdjQ7XG4gIHV1aWQucGFyc2UgPSBwYXJzZTtcbiAgdXVpZC51bnBhcnNlID0gdW5wYXJzZTtcbiAgdXVpZC5CdWZmZXJDbGFzcyA9IEJ1ZmZlckNsYXNzO1xuXG4gIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICAvLyBQdWJsaXNoIGFzIEFNRCBtb2R1bGVcbiAgICBkZWZpbmUoZnVuY3Rpb24oKSB7cmV0dXJuIHV1aWQ7fSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mKG1vZHVsZSkgIT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgICAvLyBQdWJsaXNoIGFzIG5vZGUuanMgbW9kdWxlXG4gICAgbW9kdWxlLmV4cG9ydHMgPSB1dWlkO1xuICB9IGVsc2Uge1xuICAgIC8vIFB1Ymxpc2ggYXMgZ2xvYmFsIChpbiBicm93c2VycylcbiAgICB2YXIgX3ByZXZpb3VzUm9vdCA9IF9nbG9iYWwudXVpZDtcblxuICAgIC8vICoqYG5vQ29uZmxpY3QoKWAgLSAoYnJvd3NlciBvbmx5KSB0byByZXNldCBnbG9iYWwgJ3V1aWQnIHZhcioqXG4gICAgdXVpZC5ub0NvbmZsaWN0ID0gZnVuY3Rpb24oKSB7XG4gICAgICBfZ2xvYmFsLnV1aWQgPSBfcHJldmlvdXNSb290O1xuICAgICAgcmV0dXJuIHV1aWQ7XG4gICAgfTtcblxuICAgIF9nbG9iYWwudXVpZCA9IHV1aWQ7XG4gIH1cbn0pLmNhbGwodGhpcyk7XG4iLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHRpZiAoIW1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcblx0XHRtb2R1bGUuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fTtcblx0XHRtb2R1bGUucGF0aHMgPSBbXTtcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcblx0XHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XG5cdH1cblx0cmV0dXJuIG1vZHVsZTtcbn07XG4iLCJ1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKVxuU3RvcmFnZSA9IHJlcXVpcmUoJy4vc3RvcmFnZScpXG5cbmNsYXNzIEFkYXB0ZXJzXG5cbiAgIyMgQWRhcHRlciBmb3IgdXNpbmcgdGhlIGdpbWVsIGJhY2tlbmQuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vQWxlcGhiZXQvZ2ltZWxcbiAgIyMgdXNlcyBqUXVlcnkgdG8gc2VuZCBkYXRhIGlmIGAkLmFqYXhgIGlzIGZvdW5kLiBGYWxscyBiYWNrIG9uIHBsYWluIGpzIHhoclxuICAjIyBwYXJhbXM6XG4gICMjIC0gdXJsOiBHaW1lbCB0cmFjayBVUkwgdG8gcG9zdCBldmVudHMgdG9cbiAgIyMgLSBuYW1lcHNhY2U6IG5hbWVzcGFjZSBmb3IgR2ltZWwgKGFsbG93cyBzZXR0aW5nIGRpZmZlcmVudCBlbnZpcm9ubWVudHMgZXRjKVxuICAjIyAtIHN0b3JhZ2UgKG9wdGlvbmFsKSAtIHN0b3JhZ2UgYWRhcHRlciBmb3IgdGhlIHF1ZXVlXG4gIGNsYXNzIEBHaW1lbEFkYXB0ZXJcbiAgICBxdWV1ZV9uYW1lOiAnX2dpbWVsX3F1ZXVlJ1xuXG4gICAgY29uc3RydWN0b3I6ICh1cmwsIG5hbWVzcGFjZSwgc3RvcmFnZSA9IEFkYXB0ZXJzLkxvY2FsU3RvcmFnZUFkYXB0ZXIpIC0+XG4gICAgICBAX3N0b3JhZ2UgPSBzdG9yYWdlXG4gICAgICBAdXJsID0gdXJsXG4gICAgICBAbmFtZXNwYWNlID0gbmFtZXNwYWNlXG4gICAgICBAX3F1ZXVlID0gSlNPTi5wYXJzZShAX3N0b3JhZ2UuZ2V0KEBxdWV1ZV9uYW1lKSB8fCAnW10nKVxuICAgICAgQF9mbHVzaCgpXG5cbiAgICBfcmVtb3ZlX3F1dWlkOiAocXV1aWQpIC0+XG4gICAgICAoZXJyLCByZXMpID0+XG4gICAgICAgIHJldHVybiBpZiBlcnJcbiAgICAgICAgdXRpbHMucmVtb3ZlKEBfcXVldWUsIChlbCkgLT4gZWwucHJvcGVydGllcy5fcXV1aWQgPT0gcXV1aWQpXG4gICAgICAgIEBfc3RvcmFnZS5zZXQoQHF1ZXVlX25hbWUsIEpTT04uc3RyaW5naWZ5KEBfcXVldWUpKVxuXG4gICAgX2pxdWVyeV9nZXQ6ICh1cmwsIGRhdGEsIGNhbGxiYWNrKSAtPlxuICAgICAgdXRpbHMubG9nKCdzZW5kIHJlcXVlc3QgdXNpbmcgalF1ZXJ5JylcbiAgICAgIHdpbmRvdy5qUXVlcnkuYWpheFxuICAgICAgICBtZXRob2Q6ICdHRVQnXG4gICAgICAgIHVybDogdXJsXG4gICAgICAgIGRhdGE6IGRhdGFcbiAgICAgICAgc3VjY2VzczogY2FsbGJhY2tcblxuICAgIF9wbGFpbl9qc19nZXQ6ICh1cmwsIGRhdGEsIGNhbGxiYWNrKSAtPlxuICAgICAgdXRpbHMubG9nKCdmYWxsYmFjayBvbiBwbGFpbiBqcyB4aHInKVxuICAgICAgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KClcbiAgICAgIHBhcmFtcyA9IChcIiN7ZW5jb2RlVVJJQ29tcG9uZW50KGspfT0je2VuY29kZVVSSUNvbXBvbmVudCh2KX1cIiBmb3Igayx2IG9mIGRhdGEpXG4gICAgICBwYXJhbXMgPSBwYXJhbXMuam9pbignJicpLnJlcGxhY2UoLyUyMC9nLCAnKycpXG4gICAgICB4aHIub3BlbignR0VUJywgXCIje3VybH0/I3twYXJhbXN9XCIpXG4gICAgICB4aHIub25sb2FkID0gLT5cbiAgICAgICAgaWYgeGhyLnN0YXR1cyA9PSAyMDBcbiAgICAgICAgICBjYWxsYmFjaygpXG4gICAgICB4aHIuc2VuZCgpXG5cbiAgICBfYWpheF9nZXQ6ICh1cmwsIGRhdGEsIGNhbGxiYWNrKSAtPlxuICAgICAgaWYgd2luZG93LmpRdWVyeT8uYWpheFxuICAgICAgICBAX2pxdWVyeV9nZXQodXJsLCBkYXRhLCBjYWxsYmFjaylcbiAgICAgIGVsc2VcbiAgICAgICAgQF9wbGFpbl9qc19nZXQodXJsLCBkYXRhLCBjYWxsYmFjaylcblxuICAgIF9mbHVzaDogLT5cbiAgICAgIGZvciBpdGVtIGluIEBfcXVldWVcbiAgICAgICAgY2FsbGJhY2sgPSBAX3JlbW92ZV9xdXVpZChpdGVtLnByb3BlcnRpZXMuX3F1dWlkKVxuICAgICAgICBAX2FqYXhfZ2V0KEB1cmwsIHV0aWxzLm9taXQoaXRlbS5wcm9wZXJ0aWVzLCAnX3F1dWlkJyksIGNhbGxiYWNrKVxuICAgICAgICBudWxsXG5cbiAgICBfdXNlcl91dWlkOiAoZXhwZXJpbWVudCwgZ29hbCkgLT5cbiAgICAgIHJldHVybiB1dGlscy51dWlkKCkgdW5sZXNzIGV4cGVyaW1lbnQudXNlcl9pZFxuICAgICAgIyBpZiBnb2FsIGlzIG5vdCB1bmlxdWUsIHdlIHRyYWNrIGl0IGV2ZXJ5IHRpbWUuIHJldHVybiBhIG5ldyByYW5kb20gdXVpZFxuICAgICAgcmV0dXJuIHV0aWxzLnV1aWQoKSB1bmxlc3MgZ29hbC51bmlxdWVcbiAgICAgICMgZm9yIGEgZ2l2ZW4gdXNlciBpZCwgbmFtZXNwYWNlIGFuZCBleHBlcmltZW50LCB0aGUgdXVpZCB3aWxsIGFsd2F5cyBiZSB0aGUgc2FtZVxuICAgICAgIyB0aGlzIGF2b2lkcyBjb3VudGluZyBnb2FscyB0d2ljZSBmb3IgdGhlIHNhbWUgdXNlciBhY3Jvc3MgZGlmZmVyZW50IGRldmljZXNcbiAgICAgIHV0aWxzLnNoYTEoXCIje0BuYW1lc3BhY2V9LiN7ZXhwZXJpbWVudC5uYW1lfS4je2V4cGVyaW1lbnQudXNlcl9pZH1cIilcblxuICAgIF90cmFjazogKGV4cGVyaW1lbnQsIHZhcmlhbnQsIGdvYWwpIC0+XG4gICAgICB1dGlscy5sb2coXCJQZXJzaXN0ZW50IFF1ZXVlIEdpbWVsIHRyYWNrOiAje0BuYW1lc3BhY2V9LCAje2V4cGVyaW1lbnQubmFtZX0sICN7dmFyaWFudH0sICN7Z29hbC5uYW1lfVwiKVxuICAgICAgQF9xdWV1ZS5zaGlmdCgpIGlmIEBfcXVldWUubGVuZ3RoID4gMTAwXG4gICAgICBAX3F1ZXVlLnB1c2hcbiAgICAgICAgcHJvcGVydGllczpcbiAgICAgICAgICBleHBlcmltZW50OiBleHBlcmltZW50Lm5hbWVcbiAgICAgICAgICBfcXV1aWQ6IHV0aWxzLnV1aWQoKSAgIyBxdWV1ZSB1dWlkICh1c2VkIG9ubHkgaW50ZXJuYWxseSlcbiAgICAgICAgICB1dWlkOiBAX3VzZXJfdXVpZChleHBlcmltZW50LCBnb2FsKVxuICAgICAgICAgIHZhcmlhbnQ6IHZhcmlhbnRcbiAgICAgICAgICBldmVudDogZ29hbC5uYW1lXG4gICAgICAgICAgbmFtZXNwYWNlOiBAbmFtZXNwYWNlXG4gICAgICBAX3N0b3JhZ2Uuc2V0KEBxdWV1ZV9uYW1lLCBKU09OLnN0cmluZ2lmeShAX3F1ZXVlKSlcbiAgICAgIEBfZmx1c2goKVxuXG4gICAgZXhwZXJpbWVudF9zdGFydDogKGV4cGVyaW1lbnQsIHZhcmlhbnQpIC0+XG4gICAgICBAX3RyYWNrKGV4cGVyaW1lbnQsIHZhcmlhbnQsIHtuYW1lOiAncGFydGljaXBhdGUnLCB1bmlxdWU6IHRydWV9KVxuXG4gICAgZ29hbF9jb21wbGV0ZTogKGV4cGVyaW1lbnQsIHZhcmlhbnQsIGdvYWxfbmFtZSwgcHJvcHMpIC0+XG4gICAgICBAX3RyYWNrKGV4cGVyaW1lbnQsIHZhcmlhbnQsIHV0aWxzLmRlZmF1bHRzKHtuYW1lOiBnb2FsX25hbWV9LCBwcm9wcykpXG5cblxuICBjbGFzcyBAUGVyc2lzdGVudFF1ZXVlR29vZ2xlQW5hbHl0aWNzQWRhcHRlclxuICAgIG5hbWVzcGFjZTogJ2FsZXBoYmV0J1xuICAgIHF1ZXVlX25hbWU6ICdfZ2FfcXVldWUnXG5cbiAgICBjb25zdHJ1Y3RvcjogKHN0b3JhZ2UgPSBBZGFwdGVycy5Mb2NhbFN0b3JhZ2VBZGFwdGVyKSAtPlxuICAgICAgQF9zdG9yYWdlID0gc3RvcmFnZVxuICAgICAgQF9xdWV1ZSA9IEpTT04ucGFyc2UoQF9zdG9yYWdlLmdldChAcXVldWVfbmFtZSkgfHwgJ1tdJylcbiAgICAgIEBfZmx1c2goKVxuXG4gICAgX3JlbW92ZV91dWlkOiAodXVpZCkgLT5cbiAgICAgID0+XG4gICAgICAgIHV0aWxzLnJlbW92ZShAX3F1ZXVlLCAoZWwpIC0+IGVsLnV1aWQgPT0gdXVpZClcbiAgICAgICAgQF9zdG9yYWdlLnNldChAcXVldWVfbmFtZSwgSlNPTi5zdHJpbmdpZnkoQF9xdWV1ZSkpXG5cbiAgICBfZmx1c2g6IC0+XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2dhIG5vdCBkZWZpbmVkLiBQbGVhc2UgbWFrZSBzdXJlIHlvdXIgVW5pdmVyc2FsIGFuYWx5dGljcyBpcyBzZXQgdXAgY29ycmVjdGx5JykgaWYgdHlwZW9mIGdhIGlzbnQgJ2Z1bmN0aW9uJ1xuICAgICAgZm9yIGl0ZW0gaW4gQF9xdWV1ZVxuICAgICAgICBjYWxsYmFjayA9IEBfcmVtb3ZlX3V1aWQoaXRlbS51dWlkKVxuICAgICAgICBnYSgnc2VuZCcsICdldmVudCcsIGl0ZW0uY2F0ZWdvcnksIGl0ZW0uYWN0aW9uLCBpdGVtLmxhYmVsLCB7J2hpdENhbGxiYWNrJzogY2FsbGJhY2ssICdub25JbnRlcmFjdGlvbic6IDF9KVxuXG4gICAgX3RyYWNrOiAoY2F0ZWdvcnksIGFjdGlvbiwgbGFiZWwpIC0+XG4gICAgICB1dGlscy5sb2coXCJQZXJzaXN0ZW50IFF1ZXVlIEdvb2dsZSBVbml2ZXJzYWwgQW5hbHl0aWNzIHRyYWNrOiAje2NhdGVnb3J5fSwgI3thY3Rpb259LCAje2xhYmVsfVwiKVxuICAgICAgQF9xdWV1ZS5zaGlmdCgpIGlmIEBfcXVldWUubGVuZ3RoID4gMTAwXG4gICAgICBAX3F1ZXVlLnB1c2goe3V1aWQ6IHV0aWxzLnV1aWQoKSwgY2F0ZWdvcnk6IGNhdGVnb3J5LCBhY3Rpb246IGFjdGlvbiwgbGFiZWw6IGxhYmVsfSlcbiAgICAgIEBfc3RvcmFnZS5zZXQoQHF1ZXVlX25hbWUsIEpTT04uc3RyaW5naWZ5KEBfcXVldWUpKVxuICAgICAgQF9mbHVzaCgpXG5cbiAgICBleHBlcmltZW50X3N0YXJ0OiAoZXhwZXJpbWVudCwgdmFyaWFudCkgLT5cbiAgICAgIEBfdHJhY2soQG5hbWVzcGFjZSwgXCIje2V4cGVyaW1lbnQubmFtZX0gfCAje3ZhcmlhbnR9XCIsICdWaXNpdG9ycycpXG5cbiAgICBnb2FsX2NvbXBsZXRlOiAoZXhwZXJpbWVudCwgdmFyaWFudCwgZ29hbF9uYW1lLCBfcHJvcHMpIC0+XG4gICAgICBAX3RyYWNrKEBuYW1lc3BhY2UsIFwiI3tleHBlcmltZW50Lm5hbWV9IHwgI3t2YXJpYW50fVwiLCBnb2FsX25hbWUpXG5cblxuICBjbGFzcyBAUGVyc2lzdGVudFF1ZXVlS2VlbkFkYXB0ZXJcbiAgICBxdWV1ZV9uYW1lOiAnX2tlZW5fcXVldWUnXG5cbiAgICBjb25zdHJ1Y3RvcjogKGtlZW5fY2xpZW50LCBzdG9yYWdlID0gQWRhcHRlcnMuTG9jYWxTdG9yYWdlQWRhcHRlcikgLT5cbiAgICAgIEBjbGllbnQgPSBrZWVuX2NsaWVudFxuICAgICAgQF9zdG9yYWdlID0gc3RvcmFnZVxuICAgICAgQF9xdWV1ZSA9IEpTT04ucGFyc2UoQF9zdG9yYWdlLmdldChAcXVldWVfbmFtZSkgfHwgJ1tdJylcbiAgICAgIEBfZmx1c2goKVxuXG4gICAgX3JlbW92ZV9xdXVpZDogKHF1dWlkKSAtPlxuICAgICAgKGVyciwgcmVzKSA9PlxuICAgICAgICByZXR1cm4gaWYgZXJyXG4gICAgICAgIHV0aWxzLnJlbW92ZShAX3F1ZXVlLCAoZWwpIC0+IGVsLnByb3BlcnRpZXMuX3F1dWlkID09IHF1dWlkKVxuICAgICAgICBAX3N0b3JhZ2Uuc2V0KEBxdWV1ZV9uYW1lLCBKU09OLnN0cmluZ2lmeShAX3F1ZXVlKSlcblxuICAgIF9mbHVzaDogLT5cbiAgICAgIGZvciBpdGVtIGluIEBfcXVldWVcbiAgICAgICAgY2FsbGJhY2sgPSBAX3JlbW92ZV9xdXVpZChpdGVtLnByb3BlcnRpZXMuX3F1dWlkKVxuICAgICAgICBAY2xpZW50LmFkZEV2ZW50KGl0ZW0uZXhwZXJpbWVudF9uYW1lLCB1dGlscy5vbWl0KGl0ZW0ucHJvcGVydGllcywgJ19xdXVpZCcpLCBjYWxsYmFjaylcblxuICAgIF91c2VyX3V1aWQ6IChleHBlcmltZW50LCBnb2FsKSAtPlxuICAgICAgcmV0dXJuIHV0aWxzLnV1aWQoKSB1bmxlc3MgZXhwZXJpbWVudC51c2VyX2lkXG4gICAgICAjIGlmIGdvYWwgaXMgbm90IHVuaXF1ZSwgd2UgdHJhY2sgaXQgZXZlcnkgdGltZS4gcmV0dXJuIGEgbmV3IHJhbmRvbSB1dWlkXG4gICAgICByZXR1cm4gdXRpbHMudXVpZCgpIHVubGVzcyBnb2FsLnVuaXF1ZVxuICAgICAgIyBmb3IgYSBnaXZlbiB1c2VyIGlkLCBuYW1lc3BhY2UgYW5kIGV4cGVyaW1lbnQsIHRoZSB1dWlkIHdpbGwgYWx3YXlzIGJlIHRoZSBzYW1lXG4gICAgICAjIHRoaXMgYXZvaWRzIGNvdW50aW5nIGdvYWxzIHR3aWNlIGZvciB0aGUgc2FtZSB1c2VyIGFjcm9zcyBkaWZmZXJlbnQgZGV2aWNlc1xuICAgICAgdXRpbHMuc2hhMShcIiN7QG5hbWVzcGFjZX0uI3tleHBlcmltZW50Lm5hbWV9LiN7ZXhwZXJpbWVudC51c2VyX2lkfVwiKVxuXG4gICAgX3RyYWNrOiAoZXhwZXJpbWVudCwgdmFyaWFudCwgZ29hbCkgLT5cbiAgICAgIHV0aWxzLmxvZyhcIlBlcnNpc3RlbnQgUXVldWUgS2VlbiB0cmFjazogI3tleHBlcmltZW50Lm5hbWV9LCAje3ZhcmlhbnR9LCAje2V2ZW50fVwiKVxuICAgICAgQF9xdWV1ZS5zaGlmdCgpIGlmIEBfcXVldWUubGVuZ3RoID4gMTAwXG4gICAgICBAX3F1ZXVlLnB1c2hcbiAgICAgICAgZXhwZXJpbWVudF9uYW1lOiBleHBlcmltZW50Lm5hbWVcbiAgICAgICAgcHJvcGVydGllczpcbiAgICAgICAgICBfcXV1aWQ6IHV0aWxzLnV1aWQoKSAgIyBxdWV1ZSB1dWlkICh1c2VkIG9ubHkgaW50ZXJuYWxseSlcbiAgICAgICAgICB1dWlkOiBAX3VzZXJfdXVpZChleHBlcmltZW50LCBnb2FsKVxuICAgICAgICAgIHZhcmlhbnQ6IHZhcmlhbnRcbiAgICAgICAgICBldmVudDogZ29hbC5uYW1lXG4gICAgICBAX3N0b3JhZ2Uuc2V0KEBxdWV1ZV9uYW1lLCBKU09OLnN0cmluZ2lmeShAX3F1ZXVlKSlcbiAgICAgIEBfZmx1c2goKVxuXG4gICAgZXhwZXJpbWVudF9zdGFydDogKGV4cGVyaW1lbnQsIHZhcmlhbnQpIC0+XG4gICAgICBAX3RyYWNrKGV4cGVyaW1lbnQsIHZhcmlhbnQsIHtuYW1lOiAncGFydGljaXBhdGUnLCB1bmlxdWU6IHRydWV9KVxuXG4gICAgZ29hbF9jb21wbGV0ZTogKGV4cGVyaW1lbnQsIHZhcmlhbnQsIGdvYWxfbmFtZSwgcHJvcHMpIC0+XG4gICAgICBAX3RyYWNrKGV4cGVyaW1lbnQsIHZhcmlhbnQsIHV0aWxzLmRlZmF1bHRzKHtuYW1lOiBnb2FsX25hbWV9LCBwcm9wcykpXG5cblxuICBjbGFzcyBAR29vZ2xlVW5pdmVyc2FsQW5hbHl0aWNzQWRhcHRlclxuICAgIEBuYW1lc3BhY2U6ICdhbGVwaGJldCdcblxuICAgIEBfdHJhY2s6IChjYXRlZ29yeSwgYWN0aW9uLCBsYWJlbCkgLT5cbiAgICAgIHV0aWxzLmxvZyhcIkdvb2dsZSBVbml2ZXJzYWwgQW5hbHl0aWNzIHRyYWNrOiAje2NhdGVnb3J5fSwgI3thY3Rpb259LCAje2xhYmVsfVwiKVxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdnYSBub3QgZGVmaW5lZC4gUGxlYXNlIG1ha2Ugc3VyZSB5b3VyIFVuaXZlcnNhbCBhbmFseXRpY3MgaXMgc2V0IHVwIGNvcnJlY3RseScpIGlmIHR5cGVvZiBnYSBpc250ICdmdW5jdGlvbidcbiAgICAgIGdhKCdzZW5kJywgJ2V2ZW50JywgY2F0ZWdvcnksIGFjdGlvbiwgbGFiZWwsIHsnbm9uSW50ZXJhY3Rpb24nOiAxfSlcblxuICAgIEBleHBlcmltZW50X3N0YXJ0OiAoZXhwZXJpbWVudCwgdmFyaWFudCkgLT5cbiAgICAgIEBfdHJhY2soQG5hbWVzcGFjZSwgXCIje2V4cGVyaW1lbnQubmFtZX0gfCAje3ZhcmlhbnR9XCIsICdWaXNpdG9ycycpXG5cbiAgICBAZ29hbF9jb21wbGV0ZTogKGV4cGVyaW1lbnQsIHZhcmlhbnQsIGdvYWxfbmFtZSwgX3Byb3BzKSAtPlxuICAgICAgQF90cmFjayhAbmFtZXNwYWNlLCBcIiN7ZXhwZXJpbWVudC5uYW1lfSB8ICN7dmFyaWFudH1cIiwgZ29hbF9uYW1lKVxuXG5cbiAgY2xhc3MgQExvY2FsU3RvcmFnZUFkYXB0ZXJcbiAgICBAbmFtZXNwYWNlOiAnYWxlcGhiZXQnXG4gICAgQHNldDogKGtleSwgdmFsdWUpIC0+XG4gICAgICBuZXcgU3RvcmFnZShAbmFtZXNwYWNlKS5zZXQoa2V5LCB2YWx1ZSlcbiAgICBAZ2V0OiAoa2V5KSAtPlxuICAgICAgbmV3IFN0b3JhZ2UoQG5hbWVzcGFjZSkuZ2V0KGtleSlcblxuXG5tb2R1bGUuZXhwb3J0cyA9IEFkYXB0ZXJzXG4iLCJ1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKVxuYWRhcHRlcnMgPSByZXF1aXJlKCcuL2FkYXB0ZXJzJylcbm9wdGlvbnMgPSByZXF1aXJlKCcuL29wdGlvbnMnKVxuXG5jbGFzcyBBbGVwaEJldFxuICBAb3B0aW9ucyA9IG9wdGlvbnNcbiAgQHV0aWxzID0gdXRpbHNcblxuICBAR2ltZWxBZGFwdGVyID0gYWRhcHRlcnMuR2ltZWxBZGFwdGVyXG4gIEBQZXJzaXN0ZW50UXVldWVHb29nbGVBbmFseXRpY3NBZGFwdGVyID0gYWRhcHRlcnMuUGVyc2lzdGVudFF1ZXVlR29vZ2xlQW5hbHl0aWNzQWRhcHRlclxuICBAUGVyc2lzdGVudFF1ZXVlS2VlbkFkYXB0ZXIgPSBhZGFwdGVycy5QZXJzaXN0ZW50UXVldWVLZWVuQWRhcHRlclxuXG4gIGNsYXNzIEBFeHBlcmltZW50XG4gICAgQF9vcHRpb25zOlxuICAgICAgbmFtZTogbnVsbFxuICAgICAgdmFyaWFudHM6IG51bGxcbiAgICAgIHVzZXJfaWQ6IG51bGxcbiAgICAgIHNhbXBsZTogMS4wXG4gICAgICB0cmlnZ2VyOiAtPiB0cnVlXG4gICAgICB0cmFja2luZ19hZGFwdGVyOiBhZGFwdGVycy5Hb29nbGVVbml2ZXJzYWxBbmFseXRpY3NBZGFwdGVyXG4gICAgICBzdG9yYWdlX2FkYXB0ZXI6IGFkYXB0ZXJzLkxvY2FsU3RvcmFnZUFkYXB0ZXJcblxuICAgIGNvbnN0cnVjdG9yOiAoQG9wdGlvbnM9e30pIC0+XG4gICAgICB1dGlscy5kZWZhdWx0cyhAb3B0aW9ucywgRXhwZXJpbWVudC5fb3B0aW9ucylcbiAgICAgIF92YWxpZGF0ZS5jYWxsKHRoaXMpXG4gICAgICBAbmFtZSA9IEBvcHRpb25zLm5hbWVcbiAgICAgIEB2YXJpYW50cyA9IEBvcHRpb25zLnZhcmlhbnRzXG4gICAgICBAdXNlcl9pZCA9IEBvcHRpb25zLnVzZXJfaWRcbiAgICAgIEB2YXJpYW50X25hbWVzID0gdXRpbHMua2V5cyhAdmFyaWFudHMpXG4gICAgICBfcnVuLmNhbGwodGhpcylcblxuICAgIHJ1bjogLT5cbiAgICAgIHV0aWxzLmxvZyhcInJ1bm5pbmcgd2l0aCBvcHRpb25zOiAje0pTT04uc3RyaW5naWZ5KEBvcHRpb25zKX1cIilcbiAgICAgIGlmIHZhcmlhbnQgPSBAZ2V0X3N0b3JlZF92YXJpYW50KClcbiAgICAgICAgIyBhIHZhcmlhbnQgd2FzIGFscmVhZHkgY2hvc2VuLiBhY3RpdmF0ZSBpdFxuICAgICAgICB1dGlscy5sb2coXCIje3ZhcmlhbnR9IGFjdGl2ZVwiKVxuICAgICAgICBAYWN0aXZhdGVfdmFyaWFudCh2YXJpYW50KVxuICAgICAgZWxzZVxuICAgICAgICBAY29uZGl0aW9uYWxseV9hY3RpdmF0ZV92YXJpYW50KClcblxuICAgIF9ydW4gPSAtPiBAcnVuKClcblxuICAgIGFjdGl2YXRlX3ZhcmlhbnQ6ICh2YXJpYW50KSAtPlxuICAgICAgQHZhcmlhbnRzW3ZhcmlhbnRdPy5hY3RpdmF0ZSh0aGlzKVxuICAgICAgQHN0b3JhZ2UoKS5zZXQoXCIje0BvcHRpb25zLm5hbWV9OnZhcmlhbnRcIiwgdmFyaWFudClcblxuICAgICMgaWYgZXhwZXJpbWVudCBjb25kaXRpb25zIG1hdGNoLCBwaWNrIGFuZCBhY3RpdmF0ZSBhIHZhcmlhbnQsIHRyYWNrIGV4cGVyaW1lbnQgc3RhcnRcbiAgICBjb25kaXRpb25hbGx5X2FjdGl2YXRlX3ZhcmlhbnQ6IC0+XG4gICAgICByZXR1cm4gdW5sZXNzIEBvcHRpb25zLnRyaWdnZXIoKVxuICAgICAgdXRpbHMubG9nKCd0cmlnZ2VyIHNldCcpXG4gICAgICByZXR1cm4gdW5sZXNzIEBpbl9zYW1wbGUoKVxuICAgICAgdXRpbHMubG9nKCdpbiBzYW1wbGUnKVxuICAgICAgdmFyaWFudCA9IEBwaWNrX3ZhcmlhbnQoKVxuICAgICAgQHRyYWNraW5nKCkuZXhwZXJpbWVudF9zdGFydCh0aGlzLCB2YXJpYW50KVxuICAgICAgQGFjdGl2YXRlX3ZhcmlhbnQodmFyaWFudClcblxuICAgIGdvYWxfY29tcGxldGU6IChnb2FsX25hbWUsIHByb3BzPXt9KSAtPlxuICAgICAgdXRpbHMuZGVmYXVsdHMocHJvcHMsIHt1bmlxdWU6IHRydWV9KVxuICAgICAgcmV0dXJuIGlmIHByb3BzLnVuaXF1ZSAmJiBAc3RvcmFnZSgpLmdldChcIiN7QG9wdGlvbnMubmFtZX06I3tnb2FsX25hbWV9XCIpXG4gICAgICB2YXJpYW50ID0gQGdldF9zdG9yZWRfdmFyaWFudCgpXG4gICAgICByZXR1cm4gdW5sZXNzIHZhcmlhbnRcbiAgICAgIEBzdG9yYWdlKCkuc2V0KFwiI3tAb3B0aW9ucy5uYW1lfToje2dvYWxfbmFtZX1cIiwgdHJ1ZSkgaWYgcHJvcHMudW5pcXVlXG4gICAgICB1dGlscy5sb2coXCJleHBlcmltZW50OiAje0BvcHRpb25zLm5hbWV9IHZhcmlhbnQ6I3t2YXJpYW50fSBnb2FsOiN7Z29hbF9uYW1lfSBjb21wbGV0ZVwiKVxuICAgICAgQHRyYWNraW5nKCkuZ29hbF9jb21wbGV0ZSh0aGlzLCB2YXJpYW50LCBnb2FsX25hbWUsIHByb3BzKVxuXG4gICAgZ2V0X3N0b3JlZF92YXJpYW50OiAtPlxuICAgICAgQHN0b3JhZ2UoKS5nZXQoXCIje0BvcHRpb25zLm5hbWV9OnZhcmlhbnRcIilcblxuICAgIHBpY2tfdmFyaWFudDogLT5cbiAgICAgIGFsbF92YXJpYW50c19oYXZlX3dlaWdodHMgPSB1dGlscy5jaGVja193ZWlnaHRzKEB2YXJpYW50cylcbiAgICAgIHV0aWxzLmxvZyhcImFsbCB2YXJpYW50cyBoYXZlIHdlaWdodHM6ICN7YWxsX3ZhcmlhbnRzX2hhdmVfd2VpZ2h0c31cIilcbiAgICAgIGlmIGFsbF92YXJpYW50c19oYXZlX3dlaWdodHMgdGhlbiBAcGlja193ZWlnaHRlZF92YXJpYW50KCkgZWxzZSBAcGlja191bndlaWdodGVkX3ZhcmlhbnQoKVxuXG4gICAgcGlja193ZWlnaHRlZF92YXJpYW50OiAtPlxuXG4gICAgICAjIENob29zaW5nIGEgd2VpZ2h0ZWQgdmFyaWFudDpcbiAgICAgICMgRm9yIEEsIEIsIEMgd2l0aCB3ZWlnaHRzIDEsIDMsIDZcbiAgICAgICMgdmFyaWFudHMgPSBBLCBCLCBDXG4gICAgICAjIHdlaWdodHMgPSAxLCAzLCA2XG4gICAgICAjIHdlaWdodHNfc3VtID0gMTAgKHN1bSBvZiB3ZWlnaHRzKVxuICAgICAgIyB3ZWlnaHRlZF9pbmRleCA9IDIuMSAocmFuZG9tIG51bWJlciBiZXR3ZWVuIDAgYW5kIHdlaWdodCBzdW0pXG4gICAgICAjIEFCQkJDQ0NDQ0NcbiAgICAgICMgPT1eXG4gICAgICAjIFNlbGVjdCBCXG4gICAgICB3ZWlnaHRzX3N1bSA9IHV0aWxzLnN1bV93ZWlnaHRzKEB2YXJpYW50cylcbiAgICAgIHdlaWdodGVkX2luZGV4ID0gTWF0aC5jZWlsKChAX3JhbmRvbSgndmFyaWFudCcpICogd2VpZ2h0c19zdW0pKVxuICAgICAgZm9yIGtleSwgdmFsdWUgb2YgQHZhcmlhbnRzXG4gICAgICAgICMgdGhlbiB3ZSBhcmUgc3Vic3RyYWN0aW5nIHZhcmlhbnQgd2VpZ2h0IGZyb20gc2VsZWN0ZWQgbnVtYmVyXG4gICAgICAgICMgYW5kIGl0IGl0IHJlYWNoZXMgMCAob3IgYmVsb3cpIHdlIGFyZSBzZWxlY3RpbmcgdGhpcyB2YXJpYW50XG4gICAgICAgIHdlaWdodGVkX2luZGV4IC09IHZhbHVlLndlaWdodFxuICAgICAgICByZXR1cm4ga2V5IGlmIHdlaWdodGVkX2luZGV4IDw9IDBcblxuICAgIHBpY2tfdW53ZWlnaHRlZF92YXJpYW50OiAtPlxuICAgICAgcGFydGl0aW9ucyA9IDEuMCAvIEB2YXJpYW50X25hbWVzLmxlbmd0aFxuICAgICAgY2hvc2VuX3BhcnRpdGlvbiA9IE1hdGguZmxvb3IoQF9yYW5kb20oJ3ZhcmlhbnQnKSAvIHBhcnRpdGlvbnMpXG4gICAgICB2YXJpYW50ID0gQHZhcmlhbnRfbmFtZXNbY2hvc2VuX3BhcnRpdGlvbl1cbiAgICAgIHV0aWxzLmxvZyhcIiN7dmFyaWFudH0gcGlja2VkXCIpXG4gICAgICB2YXJpYW50XG5cbiAgICBpbl9zYW1wbGU6IC0+XG4gICAgICBhY3RpdmUgPSBAc3RvcmFnZSgpLmdldChcIiN7QG9wdGlvbnMubmFtZX06aW5fc2FtcGxlXCIpXG4gICAgICByZXR1cm4gYWN0aXZlIHVubGVzcyB0eXBlb2YgYWN0aXZlIGlzICd1bmRlZmluZWQnXG4gICAgICBhY3RpdmUgPSBAX3JhbmRvbSgnc2FtcGxlJykgPD0gQG9wdGlvbnMuc2FtcGxlXG4gICAgICBAc3RvcmFnZSgpLnNldChcIiN7QG9wdGlvbnMubmFtZX06aW5fc2FtcGxlXCIsIGFjdGl2ZSlcbiAgICAgIGFjdGl2ZVxuXG4gICAgX3JhbmRvbTogKHNhbHQpIC0+XG4gICAgICByZXR1cm4gdXRpbHMucmFuZG9tKCkgdW5sZXNzIEB1c2VyX2lkXG4gICAgICBzZWVkID0gXCIje0BuYW1lfS4je3NhbHR9LiN7QHVzZXJfaWR9XCJcbiAgICAgIHV0aWxzLnJhbmRvbShzZWVkKVxuXG4gICAgYWRkX2dvYWw6IChnb2FsKSAtPlxuICAgICAgZ29hbC5hZGRfZXhwZXJpbWVudCh0aGlzKVxuXG4gICAgYWRkX2dvYWxzOiAoZ29hbHMpIC0+XG4gICAgICBAYWRkX2dvYWwoZ29hbCkgZm9yIGdvYWwgaW4gZ29hbHNcblxuICAgIHN0b3JhZ2U6IC0+IEBvcHRpb25zLnN0b3JhZ2VfYWRhcHRlclxuXG4gICAgdHJhY2tpbmc6IC0+IEBvcHRpb25zLnRyYWNraW5nX2FkYXB0ZXJcblxuICAgIF92YWxpZGF0ZSA9IC0+XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2FuIGV4cGVyaW1lbnQgbmFtZSBtdXN0IGJlIHNwZWNpZmllZCcpIGlmIEBvcHRpb25zLm5hbWUgaXMgbnVsbFxuICAgICAgdGhyb3cgbmV3IEVycm9yKCd2YXJpYW50cyBtdXN0IGJlIHByb3ZpZGVkJykgaWYgQG9wdGlvbnMudmFyaWFudHMgaXMgbnVsbFxuICAgICAgdGhyb3cgbmV3IEVycm9yKCd0cmlnZ2VyIG11c3QgYmUgYSBmdW5jdGlvbicpIGlmIHR5cGVvZiBAb3B0aW9ucy50cmlnZ2VyIGlzbnQgJ2Z1bmN0aW9uJ1xuICAgICAgYWxsX3ZhcmlhbnRzX2hhdmVfd2VpZ2h0cyA9IHV0aWxzLnZhbGlkYXRlX3dlaWdodHMgQG9wdGlvbnMudmFyaWFudHNcbiAgICAgIHRocm93IG5ldyBFcnJvcignbm90IGFsbCB2YXJpYW50cyBoYXZlIHdlaWdodHMnKSBpZiAhYWxsX3ZhcmlhbnRzX2hhdmVfd2VpZ2h0c1xuXG4gIGNsYXNzIEBHb2FsXG4gICAgY29uc3RydWN0b3I6IChAbmFtZSwgQHByb3BzPXt9KSAtPlxuICAgICAgdXRpbHMuZGVmYXVsdHMoQHByb3BzLCB7dW5pcXVlOiB0cnVlfSlcbiAgICAgIEBleHBlcmltZW50cyA9IFtdXG5cbiAgICBhZGRfZXhwZXJpbWVudDogKGV4cGVyaW1lbnQpIC0+XG4gICAgICBAZXhwZXJpbWVudHMucHVzaChleHBlcmltZW50KVxuXG4gICAgYWRkX2V4cGVyaW1lbnRzOiAoZXhwZXJpbWVudHMpIC0+XG4gICAgICBAYWRkX2V4cGVyaW1lbnQoZXhwZXJpbWVudCkgZm9yIGV4cGVyaW1lbnQgaW4gZXhwZXJpbWVudHNcblxuICAgIGNvbXBsZXRlOiAtPlxuICAgICAgZm9yIGV4cGVyaW1lbnQgaW4gQGV4cGVyaW1lbnRzXG4gICAgICAgIGV4cGVyaW1lbnQuZ29hbF9jb21wbGV0ZShAbmFtZSwgQHByb3BzKVxuXG5cbm1vZHVsZS5leHBvcnRzID0gQWxlcGhCZXRcbiIsIm1vZHVsZS5leHBvcnRzID1cbiAgZGVidWc6IGZhbHNlXG4iLCJCYXNpbCA9IHJlcXVpcmUoJ2Jhc2lsLmpzJylcbnN0b3JlID0gbmV3IEJhc2lsKG5hbWVzcGFjZTogbnVsbClcblxuIyBhIHRoaW4gd3JhcHBlciBhcm91bmQgYmFzaWwuanMgZm9yIGVhc3kgc3dhcHBpbmdcbmNsYXNzIFN0b3JhZ2VcbiAgY29uc3RydWN0b3I6IChAbmFtZXNwYWNlPSdhbGVwaGJldCcpIC0+XG4gICAgQHN0b3JhZ2UgPSBzdG9yZS5nZXQoQG5hbWVzcGFjZSkgfHwge31cbiAgc2V0OiAoa2V5LCB2YWx1ZSkgLT5cbiAgICBAc3RvcmFnZVtrZXldID0gdmFsdWVcbiAgICBzdG9yZS5zZXQoQG5hbWVzcGFjZSwgQHN0b3JhZ2UpXG4gICAgcmV0dXJuIHZhbHVlXG4gIGdldDogKGtleSkgLT5cbiAgICBAc3RvcmFnZVtrZXldXG4gICAgIyBzdG9yZS5nZXQoXCIje0BuYW1lc3BhY2V9OiN7a2V5fVwiKVxuXG5tb2R1bGUuZXhwb3J0cyA9IFN0b3JhZ2VcbiIsIiMgTk9URTogdXNpbmcgYSBjdXN0b20gYnVpbGQgb2YgbG9kYXNoLCB0byBzYXZlIHNwYWNlXG5fID0gcmVxdWlyZSgnLi4vdmVuZG9yL2xvZGFzaC5jdXN0b20ubWluJylcbnV1aWQgPSByZXF1aXJlKCdub2RlLXV1aWQnKVxuc2hhMSA9IHJlcXVpcmUoJ2NyeXB0by1qcy9zaGExJylcbm9wdGlvbnMgPSByZXF1aXJlKCcuL29wdGlvbnMnKVxuXG5jbGFzcyBVdGlsc1xuICBAZGVmYXVsdHM6IF8uZGVmYXVsdHNcbiAgQGtleXM6IF8ua2V5c1xuICBAcmVtb3ZlOiBfLnJlbW92ZVxuICBAb21pdDogXy5vbWl0XG4gIEBsb2c6IChtZXNzYWdlKSAtPlxuICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UpIGlmIG9wdGlvbnMuZGVidWdcbiAgQHV1aWQ6IHV1aWQudjRcbiAgQHNoYTE6ICh0ZXh0KSAtPlxuICAgIHNoYTEodGV4dCkudG9TdHJpbmcoKVxuICBAcmFuZG9tOiAoc2VlZCkgLT5cbiAgICByZXR1cm4gTWF0aC5yYW5kb20oKSB1bmxlc3Mgc2VlZFxuICAgICMgYSBNVUNIIHNpbXBsaWZpZWQgdmVyc2lvbiBpbnNwaXJlZCBieSBQbGFuT3V0LmpzXG4gICAgcGFyc2VJbnQoQHNoYTEoc2VlZCkuc3Vic3RyKDAsIDEzKSwgMTYpIC8gMHhGRkZGRkZGRkZGRkZGXG4gIEBjaGVja193ZWlnaHRzOiAodmFyaWFudHMpIC0+XG4gICAgY29udGFpbnNfd2VpZ2h0ID0gW11cbiAgICBjb250YWluc193ZWlnaHQucHVzaCh2YWx1ZS53ZWlnaHQ/KSBmb3Iga2V5LCB2YWx1ZSBvZiB2YXJpYW50c1xuICAgIGNvbnRhaW5zX3dlaWdodC5ldmVyeSAoaGFzX3dlaWdodCkgLT4gaGFzX3dlaWdodFxuICBAc3VtX3dlaWdodHM6ICh2YXJpYW50cykgLT5cbiAgICBzdW0gPSAwXG4gICAgZm9yIGtleSwgdmFsdWUgb2YgdmFyaWFudHNcbiAgICAgIHN1bSArPSB2YWx1ZS53ZWlnaHQgfHwgMFxuICAgIHN1bVxuICBAdmFsaWRhdGVfd2VpZ2h0czogKHZhcmlhbnRzKSAtPlxuICAgIGNvbnRhaW5zX3dlaWdodCA9IFtdXG4gICAgY29udGFpbnNfd2VpZ2h0LnB1c2godmFsdWUud2VpZ2h0PykgZm9yIGtleSwgdmFsdWUgb2YgdmFyaWFudHNcbiAgICBjb250YWluc193ZWlnaHQuZXZlcnkgKGhhc193ZWlnaHQpIC0+IGhhc193ZWlnaHQgb3IgY29udGFpbnNfd2VpZ2h0LmV2ZXJ5IChoYXNfd2VpZ2h0KSAtPiAhaGFzX3dlaWdodFxubW9kdWxlLmV4cG9ydHMgPSBVdGlsc1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogTG9kYXNoIChDdXN0b20gQnVpbGQpIGxvZGFzaC5jb20vbGljZW5zZSB8IFVuZGVyc2NvcmUuanMgMS44LjMgdW5kZXJzY29yZWpzLm9yZy9MSUNFTlNFXG4gKiBCdWlsZDogYGxvZGFzaCAtcCBpbmNsdWRlPVwia2V5cyxkZWZhdWx0cyxyZW1vdmUsb21pdFwiIGV4cG9ydHM9XCJub2RlXCIgLW8gLi92ZW5kb3IvbG9kYXNoLmN1c3RvbS5taW4uanNgXG4gKi9cbjsoZnVuY3Rpb24oKXtmdW5jdGlvbiB0KHQsZSxyKXtzd2l0Y2goci5sZW5ndGgpe2Nhc2UgMDpyZXR1cm4gdC5jYWxsKGUpO2Nhc2UgMTpyZXR1cm4gdC5jYWxsKGUsclswXSk7Y2FzZSAyOnJldHVybiB0LmNhbGwoZSxyWzBdLHJbMV0pO2Nhc2UgMzpyZXR1cm4gdC5jYWxsKGUsclswXSxyWzFdLHJbMl0pfXJldHVybiB0LmFwcGx5KGUscil9ZnVuY3Rpb24gZSh0LGUpe2Zvcih2YXIgcj0tMSxuPW51bGw9PXQ/MDp0Lmxlbmd0aDsrK3I8biYmZmFsc2UhPT1lKHRbcl0scix0KTspO31mdW5jdGlvbiByKHQsZSl7Zm9yKHZhciByPS0xLG49bnVsbD09dD8wOnQubGVuZ3RoLG89MCxjPVtdOysrcjxuOyl7dmFyIHU9dFtyXTtlKHUscix0KSYmKGNbbysrXT11KX1yZXR1cm4gY31mdW5jdGlvbiBuKHQsZSl7Zm9yKHZhciByPS0xLG49bnVsbD09dD8wOnQubGVuZ3RoLG89QXJyYXkobik7KytyPG47KW9bcl09ZSh0W3JdLHIsdCk7cmV0dXJuIG99ZnVuY3Rpb24gbyh0LGUpe2Zvcih2YXIgcj0tMSxuPWUubGVuZ3RoLG89dC5sZW5ndGg7KytyPG47KXRbbytyXT1lW3JdO1xucmV0dXJuIHR9ZnVuY3Rpb24gYyh0LGUpe2Zvcih2YXIgcj0tMSxuPW51bGw9PXQ/MDp0Lmxlbmd0aDsrK3I8bjspaWYoZSh0W3JdLHIsdCkpcmV0dXJuIHRydWU7cmV0dXJuIGZhbHNlfWZ1bmN0aW9uIHUodCl7cmV0dXJuIGZ1bmN0aW9uKGUpe3JldHVybiBudWxsPT1lP0J0OmVbdF19fWZ1bmN0aW9uIGEodCl7cmV0dXJuIGZ1bmN0aW9uKGUpe3JldHVybiB0KGUpfX1mdW5jdGlvbiBpKHQpe3ZhciBlPS0xLHI9QXJyYXkodC5zaXplKTtyZXR1cm4gdC5mb3JFYWNoKGZ1bmN0aW9uKHQsbil7clsrK2VdPVtuLHRdfSkscn1mdW5jdGlvbiBmKHQpe3ZhciBlPU9iamVjdDtyZXR1cm4gZnVuY3Rpb24ocil7cmV0dXJuIHQoZShyKSl9fWZ1bmN0aW9uIGwodCl7dmFyIGU9LTEscj1BcnJheSh0LnNpemUpO3JldHVybiB0LmZvckVhY2goZnVuY3Rpb24odCl7clsrK2VdPXR9KSxyfWZ1bmN0aW9uIHMoKXt9ZnVuY3Rpb24gYih0KXt2YXIgZT0tMSxyPW51bGw9PXQ/MDp0Lmxlbmd0aDtmb3IodGhpcy5jbGVhcigpOysrZTxyOyl7XG52YXIgbj10W2VdO3RoaXMuc2V0KG5bMF0sblsxXSl9fWZ1bmN0aW9uIGgodCl7dmFyIGU9LTEscj1udWxsPT10PzA6dC5sZW5ndGg7Zm9yKHRoaXMuY2xlYXIoKTsrK2U8cjspe3ZhciBuPXRbZV07dGhpcy5zZXQoblswXSxuWzFdKX19ZnVuY3Rpb24gcCh0KXt2YXIgZT0tMSxyPW51bGw9PXQ/MDp0Lmxlbmd0aDtmb3IodGhpcy5jbGVhcigpOysrZTxyOyl7dmFyIG49dFtlXTt0aGlzLnNldChuWzBdLG5bMV0pfX1mdW5jdGlvbiB5KHQpe3ZhciBlPS0xLHI9bnVsbD09dD8wOnQubGVuZ3RoO2Zvcih0aGlzLl9fZGF0YV9fPW5ldyBwOysrZTxyOyl0aGlzLmFkZCh0W2VdKX1mdW5jdGlvbiBqKHQpe3RoaXMuc2l6ZT0odGhpcy5fX2RhdGFfXz1uZXcgaCh0KSkuc2l6ZX1mdW5jdGlvbiBfKHQsZSl7dmFyIHI9S2UodCksbj0hciYmSmUodCksbz0hciYmIW4mJlFlKHQpLGM9IXImJiFuJiYhbyYmWmUodCk7aWYocj1yfHxufHxvfHxjKXtmb3IodmFyIG49dC5sZW5ndGgsdT1TdHJpbmcsYT0tMSxpPUFycmF5KG4pOysrYTxuOylpW2FdPXUoYSk7XG5uPWl9ZWxzZSBuPVtdO3ZhciBmLHU9bi5sZW5ndGg7Zm9yKGYgaW4gdCkhZSYmIXVlLmNhbGwodCxmKXx8ciYmKFwibGVuZ3RoXCI9PWZ8fG8mJihcIm9mZnNldFwiPT1mfHxcInBhcmVudFwiPT1mKXx8YyYmKFwiYnVmZmVyXCI9PWZ8fFwiYnl0ZUxlbmd0aFwiPT1mfHxcImJ5dGVPZmZzZXRcIj09Zil8fGN0KGYsdSkpfHxuLnB1c2goZik7cmV0dXJuIG59ZnVuY3Rpb24gZyh0LGUscil7dmFyIG49dFtlXTt1ZS5jYWxsKHQsZSkmJnl0KG4scikmJihyIT09QnR8fGUgaW4gdCl8fHcodCxlLHIpfWZ1bmN0aW9uIHYodCxlKXtmb3IodmFyIHI9dC5sZW5ndGg7ci0tOylpZih5dCh0W3JdWzBdLGUpKXJldHVybiByO3JldHVybi0xfWZ1bmN0aW9uIGQodCxlKXtyZXR1cm4gdCYmVyhlLHp0KGUpLHQpfWZ1bmN0aW9uIEEodCxlKXtyZXR1cm4gdCYmVyhlLGt0KGUpLHQpfWZ1bmN0aW9uIHcodCxlLHIpe1wiX19wcm90b19fXCI9PWUmJkFlP0FlKHQsZSx7Y29uZmlndXJhYmxlOnRydWUsZW51bWVyYWJsZTp0cnVlLHZhbHVlOnIsXG53cml0YWJsZTp0cnVlfSk6dFtlXT1yfWZ1bmN0aW9uIG0odCxyLG4sbyxjLHUpe3ZhciBhLGk9MSZyLGY9MiZyLGw9NCZyO2lmKG4mJihhPWM/bih0LG8sYyx1KTpuKHQpKSxhIT09QnQpcmV0dXJuIGE7aWYoIXZ0KHQpKXJldHVybiB0O2lmKG89S2UodCkpe2lmKGE9cnQodCksIWkpcmV0dXJuIE4odCxhKX1lbHNle3ZhciBzPUdlKHQpLGI9XCJbb2JqZWN0IEZ1bmN0aW9uXVwiPT1zfHxcIltvYmplY3QgR2VuZXJhdG9yRnVuY3Rpb25dXCI9PXM7aWYoUWUodCkpcmV0dXJuIFIodCxpKTtpZihcIltvYmplY3QgT2JqZWN0XVwiPT1zfHxcIltvYmplY3QgQXJndW1lbnRzXVwiPT1zfHxiJiYhYyl7aWYoYT1mfHxiP3t9OnR5cGVvZiB0LmNvbnN0cnVjdG9yIT1cImZ1bmN0aW9uXCJ8fGF0KHQpP3t9OlJlKHllKHQpKSwhaSlyZXR1cm4gZj9xKHQsQShhLHQpKTpHKHQsZChhLHQpKX1lbHNle2lmKCFXdFtzXSlyZXR1cm4gYz90Ont9O2E9bnQodCxzLGkpfX1pZih1fHwodT1uZXcgaiksYz11LmdldCh0KSlyZXR1cm4gYztcbmlmKHUuc2V0KHQsYSksWWUodCkpcmV0dXJuIHQuZm9yRWFjaChmdW5jdGlvbihlKXthLmFkZChtKGUscixuLGUsdCx1KSl9KSxhO2lmKFhlKHQpKXJldHVybiB0LmZvckVhY2goZnVuY3Rpb24oZSxvKXthLnNldChvLG0oZSxyLG4sbyx0LHUpKX0pLGE7dmFyIGY9bD9mP1g6UTpmP2t0Onp0LGg9bz9CdDpmKHQpO3JldHVybiBlKGh8fHQsZnVuY3Rpb24oZSxvKXtoJiYobz1lLGU9dFtvXSksZyhhLG8sbShlLHIsbixvLHQsdSkpfSksYX1mdW5jdGlvbiBPKHQsZSxyLG4sYyl7dmFyIHU9LTEsYT10Lmxlbmd0aDtmb3Iocnx8KHI9b3QpLGN8fChjPVtdKTsrK3U8YTspe3ZhciBpPXRbdV07MDxlJiZyKGkpPzE8ZT9PKGksZS0xLHIsbixjKTpvKGMsaSk6bnx8KGNbYy5sZW5ndGhdPWkpfXJldHVybiBjfWZ1bmN0aW9uIFModCxlKXtlPVYoZSx0KTtmb3IodmFyIHI9MCxuPWUubGVuZ3RoO251bGwhPXQmJnI8bjspdD10W2x0KGVbcisrXSldO3JldHVybiByJiZyPT1uP3Q6QnR9ZnVuY3Rpb24geih0LGUscil7XG5yZXR1cm4gZT1lKHQpLEtlKHQpP2U6byhlLHIodCkpfWZ1bmN0aW9uIGsodCl7aWYobnVsbD09dCl0PXQ9PT1CdD9cIltvYmplY3QgVW5kZWZpbmVkXVwiOlwiW29iamVjdCBOdWxsXVwiO2Vsc2UgaWYoZGUmJmRlIGluIE9iamVjdCh0KSl7dmFyIGU9dWUuY2FsbCh0LGRlKSxyPXRbZGVdO3RyeXt0W2RlXT1CdDt2YXIgbj10cnVlfWNhdGNoKHQpe312YXIgbz1pZS5jYWxsKHQpO24mJihlP3RbZGVdPXI6ZGVsZXRlIHRbZGVdKSx0PW99ZWxzZSB0PWllLmNhbGwodCk7cmV0dXJuIHR9ZnVuY3Rpb24geCh0KXtyZXR1cm4gZHQodCkmJlwiW29iamVjdCBBcmd1bWVudHNdXCI9PWsodCl9ZnVuY3Rpb24gRSh0LGUscixuLG8pe2lmKHQ9PT1lKWU9dHJ1ZTtlbHNlIGlmKG51bGw9PXR8fG51bGw9PWV8fCFkdCh0KSYmIWR0KGUpKWU9dCE9PXQmJmUhPT1lO2Vsc2UgdDp7dmFyIGM9S2UodCksdT1LZShlKSxhPWM/XCJbb2JqZWN0IEFycmF5XVwiOkdlKHQpLGk9dT9cIltvYmplY3QgQXJyYXldXCI6R2UoZSksYT1cIltvYmplY3QgQXJndW1lbnRzXVwiPT1hP1wiW29iamVjdCBPYmplY3RdXCI6YSxpPVwiW29iamVjdCBBcmd1bWVudHNdXCI9PWk/XCJbb2JqZWN0IE9iamVjdF1cIjppLGY9XCJbb2JqZWN0IE9iamVjdF1cIj09YSx1PVwiW29iamVjdCBPYmplY3RdXCI9PWk7XG5pZigoaT1hPT1pKSYmUWUodCkpe2lmKCFRZShlKSl7ZT1mYWxzZTticmVhayB0fWM9dHJ1ZSxmPWZhbHNlfWlmKGkmJiFmKW98fChvPW5ldyBqKSxlPWN8fFplKHQpP0oodCxlLHIsbixFLG8pOksodCxlLGEscixuLEUsbyk7ZWxzZXtpZighKDEmcikmJihjPWYmJnVlLmNhbGwodCxcIl9fd3JhcHBlZF9fXCIpLGE9dSYmdWUuY2FsbChlLFwiX193cmFwcGVkX19cIiksY3x8YSkpe3Q9Yz90LnZhbHVlKCk6dCxlPWE/ZS52YWx1ZSgpOmUsb3x8KG89bmV3IGopLGU9RSh0LGUscixuLG8pO2JyZWFrIHR9aWYoaSllOmlmKG98fChvPW5ldyBqKSxjPTEmcixhPVEodCksdT1hLmxlbmd0aCxpPVEoZSkubGVuZ3RoLHU9PWl8fGMpe2ZvcihmPXU7Zi0tOyl7dmFyIGw9YVtmXTtpZighKGM/bCBpbiBlOnVlLmNhbGwoZSxsKSkpe2U9ZmFsc2U7YnJlYWsgZX19aWYoKGk9by5nZXQodCkpJiZvLmdldChlKSllPWk9PWU7ZWxzZXtpPXRydWUsby5zZXQodCxlKSxvLnNldChlLHQpO2Zvcih2YXIgcz1jOysrZjx1Oyl7dmFyIGw9YVtmXSxiPXRbbF0saD1lW2xdO1xuaWYobil2YXIgcD1jP24oaCxiLGwsZSx0LG8pOm4oYixoLGwsdCxlLG8pO2lmKHA9PT1CdD9iIT09aCYmIUUoYixoLHIsbixvKTohcCl7aT1mYWxzZTticmVha31zfHwocz1cImNvbnN0cnVjdG9yXCI9PWwpfWkmJiFzJiYocj10LmNvbnN0cnVjdG9yLG49ZS5jb25zdHJ1Y3RvcixyIT1uJiZcImNvbnN0cnVjdG9yXCJpbiB0JiZcImNvbnN0cnVjdG9yXCJpbiBlJiYhKHR5cGVvZiByPT1cImZ1bmN0aW9uXCImJnIgaW5zdGFuY2VvZiByJiZ0eXBlb2Ygbj09XCJmdW5jdGlvblwiJiZuIGluc3RhbmNlb2YgbikmJihpPWZhbHNlKSksby5kZWxldGUodCksby5kZWxldGUoZSksZT1pfX1lbHNlIGU9ZmFsc2U7ZWxzZSBlPWZhbHNlfX1yZXR1cm4gZX1mdW5jdGlvbiBGKHQpe3JldHVybiBkdCh0KSYmXCJbb2JqZWN0IE1hcF1cIj09R2UodCl9ZnVuY3Rpb24gSSh0LGUpe3ZhciByPWUubGVuZ3RoLG49cjtpZihudWxsPT10KXJldHVybiFuO2Zvcih0PU9iamVjdCh0KTtyLS07KXt2YXIgbz1lW3JdO2lmKG9bMl0/b1sxXSE9PXRbb1swXV06IShvWzBdaW4gdCkpcmV0dXJuIGZhbHNlO1xufWZvcig7KytyPG47KXt2YXIgbz1lW3JdLGM9b1swXSx1PXRbY10sYT1vWzFdO2lmKG9bMl0pe2lmKHU9PT1CdCYmIShjIGluIHQpKXJldHVybiBmYWxzZX1lbHNlIGlmKG89bmV3IGosdm9pZCAwPT09QnQ/IUUoYSx1LDMsdm9pZCAwLG8pOjEpcmV0dXJuIGZhbHNlfXJldHVybiB0cnVlfWZ1bmN0aW9uIE0odCl7cmV0dXJuIGR0KHQpJiZcIltvYmplY3QgU2V0XVwiPT1HZSh0KX1mdW5jdGlvbiBVKHQpe3JldHVybiBkdCh0KSYmZ3QodC5sZW5ndGgpJiYhIU50W2sodCldfWZ1bmN0aW9uIEIodCl7cmV0dXJuIHR5cGVvZiB0PT1cImZ1bmN0aW9uXCI/dDpudWxsPT10P0V0OnR5cGVvZiB0PT1cIm9iamVjdFwiP0tlKHQpP1AodFswXSx0WzFdKTpEKHQpOkl0KHQpfWZ1bmN0aW9uIEQodCl7dmFyIGU9dHQodCk7cmV0dXJuIDE9PWUubGVuZ3RoJiZlWzBdWzJdP2l0KGVbMF1bMF0sZVswXVsxXSk6ZnVuY3Rpb24ocil7cmV0dXJuIHI9PT10fHxJKHIsZSl9fWZ1bmN0aW9uIFAodCxlKXtyZXR1cm4gdXQodCkmJmU9PT1lJiYhdnQoZSk/aXQobHQodCksZSk6ZnVuY3Rpb24ocil7XG52YXIgbj1PdChyLHQpO3JldHVybiBuPT09QnQmJm49PT1lP1N0KHIsdCk6RShlLG4sMyl9fWZ1bmN0aW9uICQodCl7cmV0dXJuIGZ1bmN0aW9uKGUpe3JldHVybiBTKGUsdCl9fWZ1bmN0aW9uIEwodCl7aWYodHlwZW9mIHQ9PVwic3RyaW5nXCIpcmV0dXJuIHQ7aWYoS2UodCkpcmV0dXJuIG4odCxMKStcIlwiO2lmKHd0KHQpKXJldHVybiBWZT9WZS5jYWxsKHQpOlwiXCI7dmFyIGU9dCtcIlwiO3JldHVyblwiMFwiPT1lJiYxL3Q9PS1EdD9cIi0wXCI6ZX1mdW5jdGlvbiBDKHQsZSl7ZT1WKGUsdCk7dmFyIHI7aWYoMj5lLmxlbmd0aClyPXQ7ZWxzZXtyPWU7dmFyIG49MCxvPS0xLGM9LTEsdT1yLmxlbmd0aDtmb3IoMD5uJiYobj0tbj51PzA6dStuKSxvPW8+dT91Om8sMD5vJiYobys9dSksdT1uPm8/MDpvLW4+Pj4wLG4+Pj49MCxvPUFycmF5KHUpOysrYzx1OylvW2NdPXJbYytuXTtyPVModCxvKX10PXIsbnVsbD09dHx8ZGVsZXRlIHRbbHQoaHQoZSkpXX1mdW5jdGlvbiBWKHQsZSl7cmV0dXJuIEtlKHQpP3Q6dXQodCxlKT9bdF06SGUobXQodCkpO1xufWZ1bmN0aW9uIFIodCxlKXtpZihlKXJldHVybiB0LnNsaWNlKCk7dmFyIHI9dC5sZW5ndGgscj1wZT9wZShyKTpuZXcgdC5jb25zdHJ1Y3RvcihyKTtyZXR1cm4gdC5jb3B5KHIpLHJ9ZnVuY3Rpb24gVCh0KXt2YXIgZT1uZXcgdC5jb25zdHJ1Y3Rvcih0LmJ5dGVMZW5ndGgpO3JldHVybiBuZXcgaGUoZSkuc2V0KG5ldyBoZSh0KSksZX1mdW5jdGlvbiBOKHQsZSl7dmFyIHI9LTEsbj10Lmxlbmd0aDtmb3IoZXx8KGU9QXJyYXkobikpOysrcjxuOyllW3JdPXRbcl07cmV0dXJuIGV9ZnVuY3Rpb24gVyh0LGUscil7dmFyIG49IXI7cnx8KHI9e30pO2Zvcih2YXIgbz0tMSxjPWUubGVuZ3RoOysrbzxjOyl7dmFyIHU9ZVtvXSxhPUJ0O2E9PT1CdCYmKGE9dFt1XSksbj93KHIsdSxhKTpnKHIsdSxhKX1yZXR1cm4gcn1mdW5jdGlvbiBHKHQsZSl7cmV0dXJuIFcodCxOZSh0KSxlKX1mdW5jdGlvbiBxKHQsZSl7cmV0dXJuIFcodCxXZSh0KSxlKX1mdW5jdGlvbiBIKHQpe3JldHVybiBBdCh0KT9CdDp0O1xufWZ1bmN0aW9uIEoodCxlLHIsbixvLHUpe3ZhciBhPTEmcixpPXQubGVuZ3RoLGY9ZS5sZW5ndGg7aWYoaSE9ZiYmIShhJiZmPmkpKXJldHVybiBmYWxzZTtpZigoZj11LmdldCh0KSkmJnUuZ2V0KGUpKXJldHVybiBmPT1lO3ZhciBmPS0xLGw9dHJ1ZSxzPTImcj9uZXcgeTpCdDtmb3IodS5zZXQodCxlKSx1LnNldChlLHQpOysrZjxpOyl7dmFyIGI9dFtmXSxoPWVbZl07aWYobil2YXIgcD1hP24oaCxiLGYsZSx0LHUpOm4oYixoLGYsdCxlLHUpO2lmKHAhPT1CdCl7aWYocCljb250aW51ZTtsPWZhbHNlO2JyZWFrfWlmKHMpe2lmKCFjKGUsZnVuY3Rpb24odCxlKXtpZighcy5oYXMoZSkmJihiPT09dHx8byhiLHQscixuLHUpKSlyZXR1cm4gcy5wdXNoKGUpfSkpe2w9ZmFsc2U7YnJlYWt9fWVsc2UgaWYoYiE9PWgmJiFvKGIsaCxyLG4sdSkpe2w9ZmFsc2U7YnJlYWt9fXJldHVybiB1LmRlbGV0ZSh0KSx1LmRlbGV0ZShlKSxsfWZ1bmN0aW9uIEsodCxlLHIsbixvLGMsdSl7c3dpdGNoKHIpe2Nhc2VcIltvYmplY3QgRGF0YVZpZXddXCI6XG5pZih0LmJ5dGVMZW5ndGghPWUuYnl0ZUxlbmd0aHx8dC5ieXRlT2Zmc2V0IT1lLmJ5dGVPZmZzZXQpYnJlYWs7dD10LmJ1ZmZlcixlPWUuYnVmZmVyO2Nhc2VcIltvYmplY3QgQXJyYXlCdWZmZXJdXCI6aWYodC5ieXRlTGVuZ3RoIT1lLmJ5dGVMZW5ndGh8fCFjKG5ldyBoZSh0KSxuZXcgaGUoZSkpKWJyZWFrO3JldHVybiB0cnVlO2Nhc2VcIltvYmplY3QgQm9vbGVhbl1cIjpjYXNlXCJbb2JqZWN0IERhdGVdXCI6Y2FzZVwiW29iamVjdCBOdW1iZXJdXCI6cmV0dXJuIHl0KCt0LCtlKTtjYXNlXCJbb2JqZWN0IEVycm9yXVwiOnJldHVybiB0Lm5hbWU9PWUubmFtZSYmdC5tZXNzYWdlPT1lLm1lc3NhZ2U7Y2FzZVwiW29iamVjdCBSZWdFeHBdXCI6Y2FzZVwiW29iamVjdCBTdHJpbmddXCI6cmV0dXJuIHQ9PWUrXCJcIjtjYXNlXCJbb2JqZWN0IE1hcF1cIjp2YXIgYT1pO2Nhc2VcIltvYmplY3QgU2V0XVwiOmlmKGF8fChhPWwpLHQuc2l6ZSE9ZS5zaXplJiYhKDEmbikpYnJlYWs7cmV0dXJuKHI9dS5nZXQodCkpP3I9PWU6KG58PTIsXG51LnNldCh0LGUpLGU9SihhKHQpLGEoZSksbixvLGMsdSksdS5kZWxldGUodCksZSk7Y2FzZVwiW29iamVjdCBTeW1ib2xdXCI6aWYoQ2UpcmV0dXJuIENlLmNhbGwodCk9PUNlLmNhbGwoZSl9cmV0dXJuIGZhbHNlfWZ1bmN0aW9uIFEodCl7cmV0dXJuIHoodCx6dCxOZSl9ZnVuY3Rpb24gWCh0KXtyZXR1cm4geih0LGt0LFdlKX1mdW5jdGlvbiBZKCl7dmFyIHQ9cy5pdGVyYXRlZXx8RnQsdD10PT09RnQ/Qjp0O3JldHVybiBhcmd1bWVudHMubGVuZ3RoP3QoYXJndW1lbnRzWzBdLGFyZ3VtZW50c1sxXSk6dH1mdW5jdGlvbiBaKHQsZSl7dmFyIHI9dC5fX2RhdGFfXyxuPXR5cGVvZiBlO3JldHVybihcInN0cmluZ1wiPT1ufHxcIm51bWJlclwiPT1ufHxcInN5bWJvbFwiPT1ufHxcImJvb2xlYW5cIj09bj9cIl9fcHJvdG9fX1wiIT09ZTpudWxsPT09ZSk/clt0eXBlb2YgZT09XCJzdHJpbmdcIj9cInN0cmluZ1wiOlwiaGFzaFwiXTpyLm1hcH1mdW5jdGlvbiB0dCh0KXtmb3IodmFyIGU9enQodCkscj1lLmxlbmd0aDtyLS07KXtcbnZhciBuPWVbcl0sbz10W25dO2Vbcl09W24sbyxvPT09byYmIXZ0KG8pXX1yZXR1cm4gZX1mdW5jdGlvbiBldCh0LGUpe3ZhciByPW51bGw9PXQ/QnQ6dFtlXTtyZXR1cm4oIXZ0KHIpfHxhZSYmYWUgaW4gcj8wOihfdChyKT9sZTpSdCkudGVzdChzdChyKSkpP3I6QnR9ZnVuY3Rpb24gcnQodCl7dmFyIGU9dC5sZW5ndGgscj1uZXcgdC5jb25zdHJ1Y3RvcihlKTtyZXR1cm4gZSYmXCJzdHJpbmdcIj09dHlwZW9mIHRbMF0mJnVlLmNhbGwodCxcImluZGV4XCIpJiYoci5pbmRleD10LmluZGV4LHIuaW5wdXQ9dC5pbnB1dCkscn1mdW5jdGlvbiBudCh0LGUscil7dmFyIG49dC5jb25zdHJ1Y3Rvcjtzd2l0Y2goZSl7Y2FzZVwiW29iamVjdCBBcnJheUJ1ZmZlcl1cIjpyZXR1cm4gVCh0KTtjYXNlXCJbb2JqZWN0IEJvb2xlYW5dXCI6Y2FzZVwiW29iamVjdCBEYXRlXVwiOnJldHVybiBuZXcgbigrdCk7Y2FzZVwiW29iamVjdCBEYXRhVmlld11cIjpyZXR1cm4gZT1yP1QodC5idWZmZXIpOnQuYnVmZmVyLG5ldyB0LmNvbnN0cnVjdG9yKGUsdC5ieXRlT2Zmc2V0LHQuYnl0ZUxlbmd0aCk7XG5jYXNlXCJbb2JqZWN0IEZsb2F0MzJBcnJheV1cIjpjYXNlXCJbb2JqZWN0IEZsb2F0NjRBcnJheV1cIjpjYXNlXCJbb2JqZWN0IEludDhBcnJheV1cIjpjYXNlXCJbb2JqZWN0IEludDE2QXJyYXldXCI6Y2FzZVwiW29iamVjdCBJbnQzMkFycmF5XVwiOmNhc2VcIltvYmplY3QgVWludDhBcnJheV1cIjpjYXNlXCJbb2JqZWN0IFVpbnQ4Q2xhbXBlZEFycmF5XVwiOmNhc2VcIltvYmplY3QgVWludDE2QXJyYXldXCI6Y2FzZVwiW29iamVjdCBVaW50MzJBcnJheV1cIjpyZXR1cm4gZT1yP1QodC5idWZmZXIpOnQuYnVmZmVyLG5ldyB0LmNvbnN0cnVjdG9yKGUsdC5ieXRlT2Zmc2V0LHQubGVuZ3RoKTtjYXNlXCJbb2JqZWN0IE1hcF1cIjpyZXR1cm4gbmV3IG47Y2FzZVwiW29iamVjdCBOdW1iZXJdXCI6Y2FzZVwiW29iamVjdCBTdHJpbmddXCI6cmV0dXJuIG5ldyBuKHQpO2Nhc2VcIltvYmplY3QgUmVnRXhwXVwiOnJldHVybiBlPW5ldyB0LmNvbnN0cnVjdG9yKHQuc291cmNlLFZ0LmV4ZWModCkpLGUubGFzdEluZGV4PXQubGFzdEluZGV4LFxuZTtjYXNlXCJbb2JqZWN0IFNldF1cIjpyZXR1cm4gbmV3IG47Y2FzZVwiW29iamVjdCBTeW1ib2xdXCI6cmV0dXJuIENlP09iamVjdChDZS5jYWxsKHQpKTp7fX19ZnVuY3Rpb24gb3QodCl7cmV0dXJuIEtlKHQpfHxKZSh0KXx8ISEodmUmJnQmJnRbdmVdKX1mdW5jdGlvbiBjdCh0LGUpe3ZhciByPXR5cGVvZiB0O3JldHVybiBlPW51bGw9PWU/OTAwNzE5OTI1NDc0MDk5MTplLCEhZSYmKFwibnVtYmVyXCI9PXJ8fFwic3ltYm9sXCIhPXImJlR0LnRlc3QodCkpJiYtMTx0JiYwPT10JTEmJnQ8ZX1mdW5jdGlvbiB1dCh0LGUpe2lmKEtlKHQpKXJldHVybiBmYWxzZTt2YXIgcj10eXBlb2YgdDtyZXR1cm4hKFwibnVtYmVyXCIhPXImJlwic3ltYm9sXCIhPXImJlwiYm9vbGVhblwiIT1yJiZudWxsIT10JiYhd3QodCkpfHwoJHQudGVzdCh0KXx8IVB0LnRlc3QodCl8fG51bGwhPWUmJnQgaW4gT2JqZWN0KGUpKX1mdW5jdGlvbiBhdCh0KXt2YXIgZT10JiZ0LmNvbnN0cnVjdG9yO3JldHVybiB0PT09KHR5cGVvZiBlPT1cImZ1bmN0aW9uXCImJmUucHJvdG90eXBlfHxuZSk7XG59ZnVuY3Rpb24gaXQodCxlKXtyZXR1cm4gZnVuY3Rpb24ocil7cmV0dXJuIG51bGwhPXImJihyW3RdPT09ZSYmKGUhPT1CdHx8dCBpbiBPYmplY3QocikpKX19ZnVuY3Rpb24gZnQoZSxyLG4pe3JldHVybiByPVNlKHI9PT1CdD9lLmxlbmd0aC0xOnIsMCksZnVuY3Rpb24oKXtmb3IodmFyIG89YXJndW1lbnRzLGM9LTEsdT1TZShvLmxlbmd0aC1yLDApLGE9QXJyYXkodSk7KytjPHU7KWFbY109b1tyK2NdO2ZvcihjPS0xLHU9QXJyYXkocisxKTsrK2M8cjspdVtjXT1vW2NdO3JldHVybiB1W3JdPW4oYSksdChlLHRoaXMsdSl9fWZ1bmN0aW9uIGx0KHQpe2lmKHR5cGVvZiB0PT1cInN0cmluZ1wifHx3dCh0KSlyZXR1cm4gdDt2YXIgZT10K1wiXCI7cmV0dXJuXCIwXCI9PWUmJjEvdD09LUR0P1wiLTBcIjplfWZ1bmN0aW9uIHN0KHQpe2lmKG51bGwhPXQpe3RyeXtyZXR1cm4gY2UuY2FsbCh0KX1jYXRjaCh0KXt9cmV0dXJuIHQrXCJcIn1yZXR1cm5cIlwifWZ1bmN0aW9uIGJ0KHQpe3JldHVybihudWxsPT10PzA6dC5sZW5ndGgpP08odCwxKTpbXTtcbn1mdW5jdGlvbiBodCh0KXt2YXIgZT1udWxsPT10PzA6dC5sZW5ndGg7cmV0dXJuIGU/dFtlLTFdOkJ0fWZ1bmN0aW9uIHB0KHQsZSl7ZnVuY3Rpb24gcigpe3ZhciBuPWFyZ3VtZW50cyxvPWU/ZS5hcHBseSh0aGlzLG4pOm5bMF0sYz1yLmNhY2hlO3JldHVybiBjLmhhcyhvKT9jLmdldChvKToobj10LmFwcGx5KHRoaXMsbiksci5jYWNoZT1jLnNldChvLG4pfHxjLG4pfWlmKHR5cGVvZiB0IT1cImZ1bmN0aW9uXCJ8fG51bGwhPWUmJnR5cGVvZiBlIT1cImZ1bmN0aW9uXCIpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIGEgZnVuY3Rpb25cIik7cmV0dXJuIHIuY2FjaGU9bmV3KHB0LkNhY2hlfHxwKSxyfWZ1bmN0aW9uIHl0KHQsZSl7cmV0dXJuIHQ9PT1lfHx0IT09dCYmZSE9PWV9ZnVuY3Rpb24ganQodCl7cmV0dXJuIG51bGwhPXQmJmd0KHQubGVuZ3RoKSYmIV90KHQpfWZ1bmN0aW9uIF90KHQpe3JldHVybiEhdnQodCkmJih0PWsodCksXCJbb2JqZWN0IEZ1bmN0aW9uXVwiPT10fHxcIltvYmplY3QgR2VuZXJhdG9yRnVuY3Rpb25dXCI9PXR8fFwiW29iamVjdCBBc3luY0Z1bmN0aW9uXVwiPT10fHxcIltvYmplY3QgUHJveHldXCI9PXQpO1xufWZ1bmN0aW9uIGd0KHQpe3JldHVybiB0eXBlb2YgdD09XCJudW1iZXJcIiYmLTE8dCYmMD09dCUxJiY5MDA3MTk5MjU0NzQwOTkxPj10fWZ1bmN0aW9uIHZ0KHQpe3ZhciBlPXR5cGVvZiB0O3JldHVybiBudWxsIT10JiYoXCJvYmplY3RcIj09ZXx8XCJmdW5jdGlvblwiPT1lKX1mdW5jdGlvbiBkdCh0KXtyZXR1cm4gbnVsbCE9dCYmdHlwZW9mIHQ9PVwib2JqZWN0XCJ9ZnVuY3Rpb24gQXQodCl7cmV0dXJuISghZHQodCl8fFwiW29iamVjdCBPYmplY3RdXCIhPWsodCkpJiYodD15ZSh0KSxudWxsPT09dHx8KHQ9dWUuY2FsbCh0LFwiY29uc3RydWN0b3JcIikmJnQuY29uc3RydWN0b3IsdHlwZW9mIHQ9PVwiZnVuY3Rpb25cIiYmdCBpbnN0YW5jZW9mIHQmJmNlLmNhbGwodCk9PWZlKSl9ZnVuY3Rpb24gd3QodCl7cmV0dXJuIHR5cGVvZiB0PT1cInN5bWJvbFwifHxkdCh0KSYmXCJbb2JqZWN0IFN5bWJvbF1cIj09ayh0KX1mdW5jdGlvbiBtdCh0KXtyZXR1cm4gbnVsbD09dD9cIlwiOkwodCl9ZnVuY3Rpb24gT3QodCxlLHIpe1xucmV0dXJuIHQ9bnVsbD09dD9CdDpTKHQsZSksdD09PUJ0P3I6dH1mdW5jdGlvbiBTdCh0LGUpe3ZhciByO2lmKHI9bnVsbCE9dCl7cj10O3ZhciBuO249VihlLHIpO2Zvcih2YXIgbz0tMSxjPW4ubGVuZ3RoLHU9ZmFsc2U7KytvPGM7KXt2YXIgYT1sdChuW29dKTtpZighKHU9bnVsbCE9ciYmbnVsbCE9ciYmYSBpbiBPYmplY3QocikpKWJyZWFrO3I9clthXX11fHwrK28hPWM/cj11OihjPW51bGw9PXI/MDpyLmxlbmd0aCxyPSEhYyYmZ3QoYykmJmN0KGEsYykmJihLZShyKXx8SmUocikpKX1yZXR1cm4gcn1mdW5jdGlvbiB6dCh0KXtpZihqdCh0KSl0PV8odCk7ZWxzZSBpZihhdCh0KSl7dmFyIGUscj1bXTtmb3IoZSBpbiBPYmplY3QodCkpdWUuY2FsbCh0LGUpJiZcImNvbnN0cnVjdG9yXCIhPWUmJnIucHVzaChlKTt0PXJ9ZWxzZSB0PU9lKHQpO3JldHVybiB0fWZ1bmN0aW9uIGt0KHQpe2lmKGp0KHQpKXQ9Xyh0LHRydWUpO2Vsc2UgaWYodnQodCkpe3ZhciBlLHI9YXQodCksbj1bXTtmb3IoZSBpbiB0KShcImNvbnN0cnVjdG9yXCIhPWV8fCFyJiZ1ZS5jYWxsKHQsZSkpJiZuLnB1c2goZSk7XG50PW59ZWxzZXtpZihlPVtdLG51bGwhPXQpZm9yKHIgaW4gT2JqZWN0KHQpKWUucHVzaChyKTt0PWV9cmV0dXJuIHR9ZnVuY3Rpb24geHQodCl7cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIHR9fWZ1bmN0aW9uIEV0KHQpe3JldHVybiB0fWZ1bmN0aW9uIEZ0KHQpe3JldHVybiBCKHR5cGVvZiB0PT1cImZ1bmN0aW9uXCI/dDptKHQsMSkpfWZ1bmN0aW9uIEl0KHQpe3JldHVybiB1dCh0KT91KGx0KHQpKTokKHQpfWZ1bmN0aW9uIE10KCl7cmV0dXJuW119ZnVuY3Rpb24gVXQoKXtyZXR1cm4gZmFsc2V9dmFyIEJ0LER0PTEvMCxQdD0vXFwufFxcWyg/OlteW1xcXV0qfChbXCInXSkoPzooPyFcXDEpW15cXFxcXXxcXFxcLikqP1xcMSlcXF0vLCR0PS9eXFx3KiQvLEx0PS9bXi5bXFxdXSt8XFxbKD86KC0/XFxkKyg/OlxcLlxcZCspPyl8KFtcIiddKSgoPzooPyFcXDIpW15cXFxcXXxcXFxcLikqPylcXDIpXFxdfCg/PSg/OlxcLnxcXFtcXF0pKD86XFwufFxcW1xcXXwkKSkvZyxDdD0vXFxcXChcXFxcKT8vZyxWdD0vXFx3KiQvLFJ0PS9eXFxbb2JqZWN0IC4rP0NvbnN0cnVjdG9yXFxdJC8sVHQ9L14oPzowfFsxLTldXFxkKikkLyxOdD17fTtcbk50W1wiW29iamVjdCBGbG9hdDMyQXJyYXldXCJdPU50W1wiW29iamVjdCBGbG9hdDY0QXJyYXldXCJdPU50W1wiW29iamVjdCBJbnQ4QXJyYXldXCJdPU50W1wiW29iamVjdCBJbnQxNkFycmF5XVwiXT1OdFtcIltvYmplY3QgSW50MzJBcnJheV1cIl09TnRbXCJbb2JqZWN0IFVpbnQ4QXJyYXldXCJdPU50W1wiW29iamVjdCBVaW50OENsYW1wZWRBcnJheV1cIl09TnRbXCJbb2JqZWN0IFVpbnQxNkFycmF5XVwiXT1OdFtcIltvYmplY3QgVWludDMyQXJyYXldXCJdPXRydWUsTnRbXCJbb2JqZWN0IEFyZ3VtZW50c11cIl09TnRbXCJbb2JqZWN0IEFycmF5XVwiXT1OdFtcIltvYmplY3QgQXJyYXlCdWZmZXJdXCJdPU50W1wiW29iamVjdCBCb29sZWFuXVwiXT1OdFtcIltvYmplY3QgRGF0YVZpZXddXCJdPU50W1wiW29iamVjdCBEYXRlXVwiXT1OdFtcIltvYmplY3QgRXJyb3JdXCJdPU50W1wiW29iamVjdCBGdW5jdGlvbl1cIl09TnRbXCJbb2JqZWN0IE1hcF1cIl09TnRbXCJbb2JqZWN0IE51bWJlcl1cIl09TnRbXCJbb2JqZWN0IE9iamVjdF1cIl09TnRbXCJbb2JqZWN0IFJlZ0V4cF1cIl09TnRbXCJbb2JqZWN0IFNldF1cIl09TnRbXCJbb2JqZWN0IFN0cmluZ11cIl09TnRbXCJbb2JqZWN0IFdlYWtNYXBdXCJdPWZhbHNlO1xudmFyIFd0PXt9O1d0W1wiW29iamVjdCBBcmd1bWVudHNdXCJdPVd0W1wiW29iamVjdCBBcnJheV1cIl09V3RbXCJbb2JqZWN0IEFycmF5QnVmZmVyXVwiXT1XdFtcIltvYmplY3QgRGF0YVZpZXddXCJdPVd0W1wiW29iamVjdCBCb29sZWFuXVwiXT1XdFtcIltvYmplY3QgRGF0ZV1cIl09V3RbXCJbb2JqZWN0IEZsb2F0MzJBcnJheV1cIl09V3RbXCJbb2JqZWN0IEZsb2F0NjRBcnJheV1cIl09V3RbXCJbb2JqZWN0IEludDhBcnJheV1cIl09V3RbXCJbb2JqZWN0IEludDE2QXJyYXldXCJdPVd0W1wiW29iamVjdCBJbnQzMkFycmF5XVwiXT1XdFtcIltvYmplY3QgTWFwXVwiXT1XdFtcIltvYmplY3QgTnVtYmVyXVwiXT1XdFtcIltvYmplY3QgT2JqZWN0XVwiXT1XdFtcIltvYmplY3QgUmVnRXhwXVwiXT1XdFtcIltvYmplY3QgU2V0XVwiXT1XdFtcIltvYmplY3QgU3RyaW5nXVwiXT1XdFtcIltvYmplY3QgU3ltYm9sXVwiXT1XdFtcIltvYmplY3QgVWludDhBcnJheV1cIl09V3RbXCJbb2JqZWN0IFVpbnQ4Q2xhbXBlZEFycmF5XVwiXT1XdFtcIltvYmplY3QgVWludDE2QXJyYXldXCJdPVd0W1wiW29iamVjdCBVaW50MzJBcnJheV1cIl09dHJ1ZSxcbld0W1wiW29iamVjdCBFcnJvcl1cIl09V3RbXCJbb2JqZWN0IEZ1bmN0aW9uXVwiXT1XdFtcIltvYmplY3QgV2Vha01hcF1cIl09ZmFsc2U7dmFyIEd0LHF0PXR5cGVvZiBnbG9iYWw9PVwib2JqZWN0XCImJmdsb2JhbCYmZ2xvYmFsLk9iamVjdD09PU9iamVjdCYmZ2xvYmFsLEh0PXR5cGVvZiBzZWxmPT1cIm9iamVjdFwiJiZzZWxmJiZzZWxmLk9iamVjdD09PU9iamVjdCYmc2VsZixKdD1xdHx8SHR8fEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKSxLdD10eXBlb2YgZXhwb3J0cz09XCJvYmplY3RcIiYmZXhwb3J0cyYmIWV4cG9ydHMubm9kZVR5cGUmJmV4cG9ydHMsUXQ9S3QmJnR5cGVvZiBtb2R1bGU9PVwib2JqZWN0XCImJm1vZHVsZSYmIW1vZHVsZS5ub2RlVHlwZSYmbW9kdWxlLFh0PVF0JiZRdC5leHBvcnRzPT09S3QsWXQ9WHQmJnF0LnByb2Nlc3M7dDp7dHJ5e0d0PVl0JiZZdC5iaW5kaW5nJiZZdC5iaW5kaW5nKFwidXRpbFwiKTticmVhayB0fWNhdGNoKHQpe31HdD12b2lkIDB9dmFyIFp0PUd0JiZHdC5pc01hcCx0ZT1HdCYmR3QuaXNTZXQsZWU9R3QmJkd0LmlzVHlwZWRBcnJheSxyZT1BcnJheS5wcm90b3R5cGUsbmU9T2JqZWN0LnByb3RvdHlwZSxvZT1KdFtcIl9fY29yZS1qc19zaGFyZWRfX1wiXSxjZT1GdW5jdGlvbi5wcm90b3R5cGUudG9TdHJpbmcsdWU9bmUuaGFzT3duUHJvcGVydHksYWU9ZnVuY3Rpb24oKXtcbnZhciB0PS9bXi5dKyQvLmV4ZWMob2UmJm9lLmtleXMmJm9lLmtleXMuSUVfUFJPVE98fFwiXCIpO3JldHVybiB0P1wiU3ltYm9sKHNyYylfMS5cIit0OlwiXCJ9KCksaWU9bmUudG9TdHJpbmcsZmU9Y2UuY2FsbChPYmplY3QpLGxlPVJlZ0V4cChcIl5cIitjZS5jYWxsKHVlKS5yZXBsYWNlKC9bXFxcXF4kLiorPygpW1xcXXt9fF0vZyxcIlxcXFwkJlwiKS5yZXBsYWNlKC9oYXNPd25Qcm9wZXJ0eXwoZnVuY3Rpb24pLio/KD89XFxcXFxcKCl8IGZvciAuKz8oPz1cXFxcXFxdKS9nLFwiJDEuKj9cIikrXCIkXCIpLHNlPVh0P0p0LkJ1ZmZlcjpCdCxiZT1KdC5TeW1ib2wsaGU9SnQuVWludDhBcnJheSxwZT1zZT9zZS5hOkJ0LHllPWYoT2JqZWN0LmdldFByb3RvdHlwZU9mKSxqZT1PYmplY3QuY3JlYXRlLF9lPW5lLnByb3BlcnR5SXNFbnVtZXJhYmxlLGdlPXJlLnNwbGljZSx2ZT1iZT9iZS5pc0NvbmNhdFNwcmVhZGFibGU6QnQsZGU9YmU/YmUudG9TdHJpbmdUYWc6QnQsQWU9ZnVuY3Rpb24oKXt0cnl7dmFyIHQ9ZXQoT2JqZWN0LFwiZGVmaW5lUHJvcGVydHlcIik7XG5yZXR1cm4gdCh7fSxcIlwiLHt9KSx0fWNhdGNoKHQpe319KCksd2U9T2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyxtZT1zZT9zZS5pc0J1ZmZlcjpCdCxPZT1mKE9iamVjdC5rZXlzKSxTZT1NYXRoLm1heCx6ZT1EYXRlLm5vdyxrZT1ldChKdCxcIkRhdGFWaWV3XCIpLHhlPWV0KEp0LFwiTWFwXCIpLEVlPWV0KEp0LFwiUHJvbWlzZVwiKSxGZT1ldChKdCxcIlNldFwiKSxJZT1ldChKdCxcIldlYWtNYXBcIiksTWU9ZXQoT2JqZWN0LFwiY3JlYXRlXCIpLFVlPXN0KGtlKSxCZT1zdCh4ZSksRGU9c3QoRWUpLFBlPXN0KEZlKSwkZT1zdChJZSksTGU9YmU/YmUucHJvdG90eXBlOkJ0LENlPUxlP0xlLnZhbHVlT2Y6QnQsVmU9TGU/TGUudG9TdHJpbmc6QnQsUmU9ZnVuY3Rpb24oKXtmdW5jdGlvbiB0KCl7fXJldHVybiBmdW5jdGlvbihlKXtyZXR1cm4gdnQoZSk/amU/amUoZSk6KHQucHJvdG90eXBlPWUsZT1uZXcgdCx0LnByb3RvdHlwZT1CdCxlKTp7fX19KCk7Yi5wcm90b3R5cGUuY2xlYXI9ZnVuY3Rpb24oKXtcbnRoaXMuX19kYXRhX189TWU/TWUobnVsbCk6e30sdGhpcy5zaXplPTB9LGIucHJvdG90eXBlLmRlbGV0ZT1mdW5jdGlvbih0KXtyZXR1cm4gdD10aGlzLmhhcyh0KSYmZGVsZXRlIHRoaXMuX19kYXRhX19bdF0sdGhpcy5zaXplLT10PzE6MCx0fSxiLnByb3RvdHlwZS5nZXQ9ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy5fX2RhdGFfXztyZXR1cm4gTWU/KHQ9ZVt0XSxcIl9fbG9kYXNoX2hhc2hfdW5kZWZpbmVkX19cIj09PXQ/QnQ6dCk6dWUuY2FsbChlLHQpP2VbdF06QnR9LGIucHJvdG90eXBlLmhhcz1mdW5jdGlvbih0KXt2YXIgZT10aGlzLl9fZGF0YV9fO3JldHVybiBNZT9lW3RdIT09QnQ6dWUuY2FsbChlLHQpfSxiLnByb3RvdHlwZS5zZXQ9ZnVuY3Rpb24odCxlKXt2YXIgcj10aGlzLl9fZGF0YV9fO3JldHVybiB0aGlzLnNpemUrPXRoaXMuaGFzKHQpPzA6MSxyW3RdPU1lJiZlPT09QnQ/XCJfX2xvZGFzaF9oYXNoX3VuZGVmaW5lZF9fXCI6ZSx0aGlzfSxoLnByb3RvdHlwZS5jbGVhcj1mdW5jdGlvbigpe1xudGhpcy5fX2RhdGFfXz1bXSx0aGlzLnNpemU9MH0saC5wcm90b3R5cGUuZGVsZXRlPWZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMuX19kYXRhX187cmV0dXJuIHQ9dihlLHQpLCEoMD50KSYmKHQ9PWUubGVuZ3RoLTE/ZS5wb3AoKTpnZS5jYWxsKGUsdCwxKSwtLXRoaXMuc2l6ZSx0cnVlKX0saC5wcm90b3R5cGUuZ2V0PWZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMuX19kYXRhX187cmV0dXJuIHQ9dihlLHQpLDA+dD9CdDplW3RdWzFdfSxoLnByb3RvdHlwZS5oYXM9ZnVuY3Rpb24odCl7cmV0dXJuLTE8dih0aGlzLl9fZGF0YV9fLHQpfSxoLnByb3RvdHlwZS5zZXQ9ZnVuY3Rpb24odCxlKXt2YXIgcj10aGlzLl9fZGF0YV9fLG49dihyLHQpO3JldHVybiAwPm4/KCsrdGhpcy5zaXplLHIucHVzaChbdCxlXSkpOnJbbl1bMV09ZSx0aGlzfSxwLnByb3RvdHlwZS5jbGVhcj1mdW5jdGlvbigpe3RoaXMuc2l6ZT0wLHRoaXMuX19kYXRhX189e2hhc2g6bmV3IGIsbWFwOm5ldyh4ZXx8aCksc3RyaW5nOm5ldyBiXG59fSxwLnByb3RvdHlwZS5kZWxldGU9ZnVuY3Rpb24odCl7cmV0dXJuIHQ9Wih0aGlzLHQpLmRlbGV0ZSh0KSx0aGlzLnNpemUtPXQ/MTowLHR9LHAucHJvdG90eXBlLmdldD1mdW5jdGlvbih0KXtyZXR1cm4gWih0aGlzLHQpLmdldCh0KX0scC5wcm90b3R5cGUuaGFzPWZ1bmN0aW9uKHQpe3JldHVybiBaKHRoaXMsdCkuaGFzKHQpfSxwLnByb3RvdHlwZS5zZXQ9ZnVuY3Rpb24odCxlKXt2YXIgcj1aKHRoaXMsdCksbj1yLnNpemU7cmV0dXJuIHIuc2V0KHQsZSksdGhpcy5zaXplKz1yLnNpemU9PW4/MDoxLHRoaXN9LHkucHJvdG90eXBlLmFkZD15LnByb3RvdHlwZS5wdXNoPWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLl9fZGF0YV9fLnNldCh0LFwiX19sb2Rhc2hfaGFzaF91bmRlZmluZWRfX1wiKSx0aGlzfSx5LnByb3RvdHlwZS5oYXM9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuX19kYXRhX18uaGFzKHQpfSxqLnByb3RvdHlwZS5jbGVhcj1mdW5jdGlvbigpe3RoaXMuX19kYXRhX189bmV3IGgsXG50aGlzLnNpemU9MH0sai5wcm90b3R5cGUuZGVsZXRlPWZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMuX19kYXRhX187cmV0dXJuIHQ9ZS5kZWxldGUodCksdGhpcy5zaXplPWUuc2l6ZSx0fSxqLnByb3RvdHlwZS5nZXQ9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuX19kYXRhX18uZ2V0KHQpfSxqLnByb3RvdHlwZS5oYXM9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuX19kYXRhX18uaGFzKHQpfSxqLnByb3RvdHlwZS5zZXQ9ZnVuY3Rpb24odCxlKXt2YXIgcj10aGlzLl9fZGF0YV9fO2lmKHIgaW5zdGFuY2VvZiBoKXt2YXIgbj1yLl9fZGF0YV9fO2lmKCF4ZXx8MTk5Pm4ubGVuZ3RoKXJldHVybiBuLnB1c2goW3QsZV0pLHRoaXMuc2l6ZT0rK3Iuc2l6ZSx0aGlzO3I9dGhpcy5fX2RhdGFfXz1uZXcgcChuKX1yZXR1cm4gci5zZXQodCxlKSx0aGlzLnNpemU9ci5zaXplLHRoaXN9O3ZhciBUZT1BZT9mdW5jdGlvbih0LGUpe3JldHVybiBBZSh0LFwidG9TdHJpbmdcIix7Y29uZmlndXJhYmxlOnRydWUsXG5lbnVtZXJhYmxlOmZhbHNlLHZhbHVlOnh0KGUpLHdyaXRhYmxlOnRydWV9KX06RXQsTmU9d2U/ZnVuY3Rpb24odCl7cmV0dXJuIG51bGw9PXQ/W106KHQ9T2JqZWN0KHQpLHIod2UodCksZnVuY3Rpb24oZSl7cmV0dXJuIF9lLmNhbGwodCxlKX0pKX06TXQsV2U9d2U/ZnVuY3Rpb24odCl7Zm9yKHZhciBlPVtdO3Q7KW8oZSxOZSh0KSksdD15ZSh0KTtyZXR1cm4gZX06TXQsR2U9azsoa2UmJlwiW29iamVjdCBEYXRhVmlld11cIiE9R2UobmV3IGtlKG5ldyBBcnJheUJ1ZmZlcigxKSkpfHx4ZSYmXCJbb2JqZWN0IE1hcF1cIiE9R2UobmV3IHhlKXx8RWUmJlwiW29iamVjdCBQcm9taXNlXVwiIT1HZShFZS5yZXNvbHZlKCkpfHxGZSYmXCJbb2JqZWN0IFNldF1cIiE9R2UobmV3IEZlKXx8SWUmJlwiW29iamVjdCBXZWFrTWFwXVwiIT1HZShuZXcgSWUpKSYmKEdlPWZ1bmN0aW9uKHQpe3ZhciBlPWsodCk7aWYodD0odD1cIltvYmplY3QgT2JqZWN0XVwiPT1lP3QuY29uc3RydWN0b3I6QnQpP3N0KHQpOlwiXCIpc3dpdGNoKHQpe1xuY2FzZSBVZTpyZXR1cm5cIltvYmplY3QgRGF0YVZpZXddXCI7Y2FzZSBCZTpyZXR1cm5cIltvYmplY3QgTWFwXVwiO2Nhc2UgRGU6cmV0dXJuXCJbb2JqZWN0IFByb21pc2VdXCI7Y2FzZSBQZTpyZXR1cm5cIltvYmplY3QgU2V0XVwiO2Nhc2UgJGU6cmV0dXJuXCJbb2JqZWN0IFdlYWtNYXBdXCJ9cmV0dXJuIGV9KTt2YXIgcWU9ZnVuY3Rpb24odCl7dmFyIGU9MCxyPTA7cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIG49emUoKSxvPTE2LShuLXIpO2lmKHI9biwwPG8pe2lmKDgwMDw9KytlKXJldHVybiBhcmd1bWVudHNbMF19ZWxzZSBlPTA7cmV0dXJuIHQuYXBwbHkoQnQsYXJndW1lbnRzKX19KFRlKSxIZT1mdW5jdGlvbih0KXt0PXB0KHQsZnVuY3Rpb24odCl7cmV0dXJuIDUwMD09PWUuc2l6ZSYmZS5jbGVhcigpLHR9KTt2YXIgZT10LmNhY2hlO3JldHVybiB0fShmdW5jdGlvbih0KXt2YXIgZT1bXTtyZXR1cm4gNDY9PT10LmNoYXJDb2RlQXQoMCkmJmUucHVzaChcIlwiKSx0LnJlcGxhY2UoTHQsZnVuY3Rpb24odCxyLG4sbyl7XG5lLnB1c2gobj9vLnJlcGxhY2UoQ3QsXCIkMVwiKTpyfHx0KX0pLGV9KTtwdC5DYWNoZT1wO3ZhciBKZT14KGZ1bmN0aW9uKCl7cmV0dXJuIGFyZ3VtZW50c30oKSk/eDpmdW5jdGlvbih0KXtyZXR1cm4gZHQodCkmJnVlLmNhbGwodCxcImNhbGxlZVwiKSYmIV9lLmNhbGwodCxcImNhbGxlZVwiKX0sS2U9QXJyYXkuaXNBcnJheSxRZT1tZXx8VXQsWGU9WnQ/YShadCk6RixZZT10ZT9hKHRlKTpNLFplPWVlP2EoZWUpOlUsdHI9ZnVuY3Rpb24odCxlKXtyZXR1cm4gcWUoZnQodCxlLEV0KSx0K1wiXCIpfShmdW5jdGlvbih0LGUpe3Q9T2JqZWN0KHQpO3ZhciByLG49LTEsbz1lLmxlbmd0aCxjPTI8bz9lWzJdOkJ0O2lmKHI9Yyl7cj1lWzBdO3ZhciB1PWVbMV07aWYodnQoYykpe3ZhciBhPXR5cGVvZiB1O3I9ISEoXCJudW1iZXJcIj09YT9qdChjKSYmY3QodSxjLmxlbmd0aCk6XCJzdHJpbmdcIj09YSYmdSBpbiBjKSYmeXQoY1t1XSxyKX1lbHNlIHI9ZmFsc2V9Zm9yKHImJihvPTEpOysrbjxvOylmb3IoYz1lW25dLFxucj1rdChjKSx1PS0xLGE9ci5sZW5ndGg7Kyt1PGE7KXt2YXIgaT1yW3VdLGY9dFtpXTsoZj09PUJ0fHx5dChmLG5lW2ldKSYmIXVlLmNhbGwodCxpKSkmJih0W2ldPWNbaV0pfXJldHVybiB0fSksZXI9ZnVuY3Rpb24odCl7cmV0dXJuIHFlKGZ0KHQsQnQsYnQpLHQrXCJcIil9KGZ1bmN0aW9uKHQsZSl7dmFyIHI9e307aWYobnVsbD09dClyZXR1cm4gcjt2YXIgbz1mYWxzZTtlPW4oZSxmdW5jdGlvbihlKXtyZXR1cm4gZT1WKGUsdCksb3x8KG89MTxlLmxlbmd0aCksZX0pLFcodCxYKHQpLHIpLG8mJihyPW0ociw3LEgpKTtmb3IodmFyIGM9ZS5sZW5ndGg7Yy0tOylDKHIsZVtjXSk7cmV0dXJuIHJ9KTtzLmNvbnN0YW50PXh0LHMuZGVmYXVsdHM9dHIscy5mbGF0dGVuPWJ0LHMuaXRlcmF0ZWU9RnQscy5rZXlzPXp0LHMua2V5c0luPWt0LHMubWVtb2l6ZT1wdCxzLm9taXQ9ZXIscy5wcm9wZXJ0eT1JdCxzLnJlbW92ZT1mdW5jdGlvbih0LGUpe3ZhciByPVtdO2lmKCF0fHwhdC5sZW5ndGgpcmV0dXJuIHI7XG52YXIgbj0tMSxvPVtdLGM9dC5sZW5ndGg7Zm9yKGU9WShlLDMpOysrbjxjOyl7dmFyIHU9dFtuXTtlKHUsbix0KSYmKHIucHVzaCh1KSxvLnB1c2gobikpfWZvcihuPXQ/by5sZW5ndGg6MCxjPW4tMTtuLS07KWlmKHU9b1tuXSxuPT1jfHx1IT09YSl7dmFyIGE9dTtjdCh1KT9nZS5jYWxsKHQsdSwxKTpDKHQsdSl9cmV0dXJuIHJ9LHMuZXE9eXQscy5nZXQ9T3Qscy5oYXNJbj1TdCxzLmlkZW50aXR5PUV0LHMuaXNBcmd1bWVudHM9SmUscy5pc0FycmF5PUtlLHMuaXNBcnJheUxpa2U9anQscy5pc0J1ZmZlcj1RZSxzLmlzRnVuY3Rpb249X3Qscy5pc0xlbmd0aD1ndCxzLmlzTWFwPVhlLHMuaXNPYmplY3Q9dnQscy5pc09iamVjdExpa2U9ZHQscy5pc1BsYWluT2JqZWN0PUF0LHMuaXNTZXQ9WWUscy5pc1N5bWJvbD13dCxzLmlzVHlwZWRBcnJheT1aZSxzLmxhc3Q9aHQscy5zdHViQXJyYXk9TXQscy5zdHViRmFsc2U9VXQscy50b1N0cmluZz1tdCxzLlZFUlNJT049XCI0LjE3LjVcIixRdCYmKChRdC5leHBvcnRzPXMpLl89cyxcbkt0Ll89cyl9KS5jYWxsKHRoaXMpOyJdLCJzb3VyY2VSb290IjoiIn0=