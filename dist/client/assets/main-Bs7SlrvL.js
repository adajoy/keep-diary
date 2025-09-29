function Nv(l) {
	return l && l.__esModule && Object.prototype.hasOwnProperty.call(l, 'default')
		? l.default
		: l;
}
var mc = { exports: {} },
	si = {}; /**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Kh;
function Lv() {
	if (Kh) return si;
	Kh = 1;
	var l = Symbol.for('react.transitional.element'),
		u = Symbol.for('react.fragment');
	function r(c, o, d) {
		var v = null;
		if (
			(d !== void 0 && (v = '' + d),
			o.key !== void 0 && (v = '' + o.key),
			'key' in o)
		) {
			d = {};
			for (var y in o) y !== 'key' && (d[y] = o[y]);
		} else d = o;
		return (
			(o = d.ref),
			{ $$typeof: l, type: c, key: v, ref: o !== void 0 ? o : null, props: d }
		);
	}
	return (si.Fragment = u), (si.jsx = r), (si.jsxs = r), si;
}
var Jh;
function Bv() {
	return Jh || ((Jh = 1), (mc.exports = Lv())), mc.exports;
}
var j = Bv(),
	vc = { exports: {} },
	rt = {}; /**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ph;
function Hv() {
	if (Ph) return rt;
	Ph = 1;
	var l = Symbol.for('react.transitional.element'),
		u = Symbol.for('react.portal'),
		r = Symbol.for('react.fragment'),
		c = Symbol.for('react.strict_mode'),
		o = Symbol.for('react.profiler'),
		d = Symbol.for('react.consumer'),
		v = Symbol.for('react.context'),
		y = Symbol.for('react.forward_ref'),
		h = Symbol.for('react.suspense'),
		p = Symbol.for('react.memo'),
		g = Symbol.for('react.lazy'),
		b = Symbol.iterator;
	function _(E) {
		return E === null || typeof E != 'object'
			? null
			: ((E = (b && E[b]) || E['@@iterator']),
				typeof E == 'function' ? E : null);
	}
	var A = {
			isMounted: function () {
				return !1;
			},
			enqueueForceUpdate: function () {},
			enqueueReplaceState: function () {},
			enqueueSetState: function () {},
		},
		D = Object.assign,
		H = {};
	function Y(E, B, G) {
		(this.props = E),
			(this.context = B),
			(this.refs = H),
			(this.updater = G || A);
	}
	(Y.prototype.isReactComponent = {}),
		(Y.prototype.setState = function (E, B) {
			if (typeof E != 'object' && typeof E != 'function' && E != null)
				throw Error(
					'takes an object of state variables to update or a function which returns an object of state variables.',
				);
			this.updater.enqueueSetState(this, E, B, 'setState');
		}),
		(Y.prototype.forceUpdate = function (E) {
			this.updater.enqueueForceUpdate(this, E, 'forceUpdate');
		});
	function F() {}
	F.prototype = Y.prototype;
	function it(E, B, G) {
		(this.props = E),
			(this.context = B),
			(this.refs = H),
			(this.updater = G || A);
	}
	var K = (it.prototype = new F());
	(K.constructor = it), D(K, Y.prototype), (K.isPureReactComponent = !0);
	var lt = Array.isArray,
		P = { H: null, A: null, T: null, S: null, V: null },
		W = Object.prototype.hasOwnProperty;
	function Z(E, B, G, q, k, ct) {
		return (
			(G = ct.ref),
			{ $$typeof: l, type: E, key: B, ref: G !== void 0 ? G : null, props: ct }
		);
	}
	function Q(E, B) {
		return Z(E.type, B, void 0, void 0, void 0, E.props);
	}
	function ut(E) {
		return typeof E == 'object' && E !== null && E.$$typeof === l;
	}
	function ht(E) {
		var B = { '=': '=0', ':': '=2' };
		return (
			'$' +
			E.replace(/[=:]/g, function (G) {
				return B[G];
			})
		);
	}
	var St = /\/+/g;
	function pt(E, B) {
		return typeof E == 'object' && E !== null && E.key != null
			? ht('' + E.key)
			: B.toString(36);
	}
	function ne() {}
	function Vt(E) {
		switch (E.status) {
			case 'fulfilled':
				return E.value;
			case 'rejected':
				throw E.reason;
			default:
				switch (
					(typeof E.status == 'string'
						? E.then(ne, ne)
						: ((E.status = 'pending'),
							E.then(
								function (B) {
									E.status === 'pending' &&
										((E.status = 'fulfilled'), (E.value = B));
								},
								function (B) {
									E.status === 'pending' &&
										((E.status = 'rejected'), (E.reason = B));
								},
							)),
					E.status)
				) {
					case 'fulfilled':
						return E.value;
					case 'rejected':
						throw E.reason;
				}
		}
		throw E;
	}
	function wt(E, B, G, q, k) {
		var ct = typeof E;
		(ct === 'undefined' || ct === 'boolean') && (E = null);
		var $ = !1;
		if (E === null) $ = !0;
		else
			switch (ct) {
				case 'bigint':
				case 'string':
				case 'number':
					$ = !0;
					break;
				case 'object':
					switch (E.$$typeof) {
						case l:
						case u:
							$ = !0;
							break;
						case g:
							return ($ = E._init), wt($(E._payload), B, G, q, k);
					}
			}
		if ($)
			return (
				(k = k(E)),
				($ = q === '' ? '.' + pt(E, 0) : q),
				lt(k)
					? ((G = ''),
						$ != null && (G = $.replace(St, '$&/') + '/'),
						wt(k, B, G, '', function (ae) {
							return ae;
						}))
					: k != null &&
						(ut(k) &&
							(k = Q(
								k,
								G +
									(k.key == null || (E && E.key === k.key)
										? ''
										: ('' + k.key).replace(St, '$&/') + '/') +
									$,
							)),
						B.push(k)),
				1
			);
		$ = 0;
		var Qt = q === '' ? '.' : q + ':';
		if (lt(E))
			for (var bt = 0; bt < E.length; bt++)
				(q = E[bt]), (ct = Qt + pt(q, bt)), ($ += wt(q, B, G, ct, k));
		else if (((bt = _(E)), typeof bt == 'function'))
			for (E = bt.call(E), bt = 0; !(q = E.next()).done; )
				(q = q.value), (ct = Qt + pt(q, bt++)), ($ += wt(q, B, G, ct, k));
		else if (ct === 'object') {
			if (typeof E.then == 'function') return wt(Vt(E), B, G, q, k);
			throw (
				((B = String(E)),
				Error(
					'Objects are not valid as a React child (found: ' +
						(B === '[object Object]'
							? 'object with keys {' + Object.keys(E).join(', ') + '}'
							: B) +
						'). If you meant to render a collection of children, use an array instead.',
				))
			);
		}
		return $;
	}
	function C(E, B, G) {
		if (E == null) return E;
		var q = [],
			k = 0;
		return (
			wt(E, q, '', '', function (ct) {
				return B.call(G, ct, k++);
			}),
			q
		);
	}
	function V(E) {
		if (E._status === -1) {
			var B = E._result;
			(B = B()),
				B.then(
					function (G) {
						(E._status === 0 || E._status === -1) &&
							((E._status = 1), (E._result = G));
					},
					function (G) {
						(E._status === 0 || E._status === -1) &&
							((E._status = 2), (E._result = G));
					},
				),
				E._status === -1 && ((E._status = 0), (E._result = B));
		}
		if (E._status === 1) return E._result.default;
		throw E._result;
	}
	var tt =
		typeof reportError == 'function'
			? reportError
			: function (E) {
					if (
						typeof window == 'object' &&
						typeof window.ErrorEvent == 'function'
					) {
						var B = new window.ErrorEvent('error', {
							bubbles: !0,
							cancelable: !0,
							message:
								typeof E == 'object' &&
								E !== null &&
								typeof E.message == 'string'
									? String(E.message)
									: String(E),
							error: E,
						});
						if (!window.dispatchEvent(B)) return;
					} else if (
						typeof process == 'object' &&
						typeof process.emit == 'function'
					) {
						process.emit('uncaughtException', E);
						return;
					}
					console.error(E);
				};
	function Tt() {}
	return (
		(rt.Children = {
			map: C,
			forEach: function (E, B, G) {
				C(
					E,
					function () {
						B.apply(this, arguments);
					},
					G,
				);
			},
			count: function (E) {
				var B = 0;
				return (
					C(E, function () {
						B++;
					}),
					B
				);
			},
			toArray: function (E) {
				return (
					C(E, function (B) {
						return B;
					}) || []
				);
			},
			only: function (E) {
				if (!ut(E))
					throw Error(
						'React.Children.only expected to receive a single React element child.',
					);
				return E;
			},
		}),
		(rt.Component = Y),
		(rt.Fragment = r),
		(rt.Profiler = o),
		(rt.PureComponent = it),
		(rt.StrictMode = c),
		(rt.Suspense = h),
		(rt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = P),
		(rt.__COMPILER_RUNTIME = {
			__proto__: null,
			c: function (E) {
				return P.H.useMemoCache(E);
			},
		}),
		(rt.cache = function (E) {
			return function () {
				return E.apply(null, arguments);
			};
		}),
		(rt.cloneElement = function (E, B, G) {
			if (E == null)
				throw Error(
					'The argument must be a React element, but you passed ' + E + '.',
				);
			var q = D({}, E.props),
				k = E.key,
				ct = void 0;
			if (B != null)
				for ($ in (B.ref !== void 0 && (ct = void 0),
				B.key !== void 0 && (k = '' + B.key),
				B))
					!W.call(B, $) ||
						$ === 'key' ||
						$ === '__self' ||
						$ === '__source' ||
						($ === 'ref' && B.ref === void 0) ||
						(q[$] = B[$]);
			var $ = arguments.length - 2;
			if ($ === 1) q.children = G;
			else if (1 < $) {
				for (var Qt = Array($), bt = 0; bt < $; bt++)
					Qt[bt] = arguments[bt + 2];
				q.children = Qt;
			}
			return Z(E.type, k, void 0, void 0, ct, q);
		}),
		(rt.createContext = function (E) {
			return (
				(E = {
					$$typeof: v,
					_currentValue: E,
					_currentValue2: E,
					_threadCount: 0,
					Provider: null,
					Consumer: null,
				}),
				(E.Provider = E),
				(E.Consumer = { $$typeof: d, _context: E }),
				E
			);
		}),
		(rt.createElement = function (E, B, G) {
			var q,
				k = {},
				ct = null;
			if (B != null)
				for (q in (B.key !== void 0 && (ct = '' + B.key), B))
					W.call(B, q) &&
						q !== 'key' &&
						q !== '__self' &&
						q !== '__source' &&
						(k[q] = B[q]);
			var $ = arguments.length - 2;
			if ($ === 1) k.children = G;
			else if (1 < $) {
				for (var Qt = Array($), bt = 0; bt < $; bt++)
					Qt[bt] = arguments[bt + 2];
				k.children = Qt;
			}
			if (E && E.defaultProps)
				for (q in (($ = E.defaultProps), $)) k[q] === void 0 && (k[q] = $[q]);
			return Z(E, ct, void 0, void 0, null, k);
		}),
		(rt.createRef = function () {
			return { current: null };
		}),
		(rt.forwardRef = function (E) {
			return { $$typeof: y, render: E };
		}),
		(rt.isValidElement = ut),
		(rt.lazy = function (E) {
			return { $$typeof: g, _payload: { _status: -1, _result: E }, _init: V };
		}),
		(rt.memo = function (E, B) {
			return { $$typeof: p, type: E, compare: B === void 0 ? null : B };
		}),
		(rt.startTransition = function (E) {
			var B = P.T,
				G = {};
			P.T = G;
			try {
				var q = E(),
					k = P.S;
				k !== null && k(G, q),
					typeof q == 'object' &&
						q !== null &&
						typeof q.then == 'function' &&
						q.then(Tt, tt);
			} catch (ct) {
				tt(ct);
			} finally {
				P.T = B;
			}
		}),
		(rt.unstable_useCacheRefresh = function () {
			return P.H.useCacheRefresh();
		}),
		(rt.use = function (E) {
			return P.H.use(E);
		}),
		(rt.useActionState = function (E, B, G) {
			return P.H.useActionState(E, B, G);
		}),
		(rt.useCallback = function (E, B) {
			return P.H.useCallback(E, B);
		}),
		(rt.useContext = function (E) {
			return P.H.useContext(E);
		}),
		(rt.useDebugValue = function () {}),
		(rt.useDeferredValue = function (E, B) {
			return P.H.useDeferredValue(E, B);
		}),
		(rt.useEffect = function (E, B, G) {
			var q = P.H;
			if (typeof G == 'function')
				throw Error(
					'useEffect CRUD overload is not enabled in this build of React.',
				);
			return q.useEffect(E, B);
		}),
		(rt.useId = function () {
			return P.H.useId();
		}),
		(rt.useImperativeHandle = function (E, B, G) {
			return P.H.useImperativeHandle(E, B, G);
		}),
		(rt.useInsertionEffect = function (E, B) {
			return P.H.useInsertionEffect(E, B);
		}),
		(rt.useLayoutEffect = function (E, B) {
			return P.H.useLayoutEffect(E, B);
		}),
		(rt.useMemo = function (E, B) {
			return P.H.useMemo(E, B);
		}),
		(rt.useOptimistic = function (E, B) {
			return P.H.useOptimistic(E, B);
		}),
		(rt.useReducer = function (E, B, G) {
			return P.H.useReducer(E, B, G);
		}),
		(rt.useRef = function (E) {
			return P.H.useRef(E);
		}),
		(rt.useState = function (E) {
			return P.H.useState(E);
		}),
		(rt.useSyncExternalStore = function (E, B, G) {
			return P.H.useSyncExternalStore(E, B, G);
		}),
		(rt.useTransition = function () {
			return P.H.useTransition();
		}),
		(rt.version = '19.1.1'),
		rt
	);
}
var kh;
function bi() {
	return kh || ((kh = 1), (vc.exports = Hv())), vc.exports;
}
var nt = bi();
const gi = Nv(nt);
var gc = { exports: {} },
	ci = {},
	Sc = { exports: {} },
	bc = {}; /**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $h;
function jv() {
	return (
		$h ||
			(($h = 1),
			(function (l) {
				function u(C, V) {
					var tt = C.length;
					C.push(V);
					t: for (; 0 < tt; ) {
						var Tt = (tt - 1) >>> 1,
							E = C[Tt];
						if (0 < o(E, V)) (C[Tt] = V), (C[tt] = E), (tt = Tt);
						else break t;
					}
				}
				function r(C) {
					return C.length === 0 ? null : C[0];
				}
				function c(C) {
					if (C.length === 0) return null;
					var V = C[0],
						tt = C.pop();
					if (tt !== V) {
						C[0] = tt;
						t: for (var Tt = 0, E = C.length, B = E >>> 1; Tt < B; ) {
							var G = 2 * (Tt + 1) - 1,
								q = C[G],
								k = G + 1,
								ct = C[k];
							if (0 > o(q, tt))
								k < E && 0 > o(ct, q)
									? ((C[Tt] = ct), (C[k] = tt), (Tt = k))
									: ((C[Tt] = q), (C[G] = tt), (Tt = G));
							else if (k < E && 0 > o(ct, tt))
								(C[Tt] = ct), (C[k] = tt), (Tt = k);
							else break t;
						}
					}
					return V;
				}
				function o(C, V) {
					var tt = C.sortIndex - V.sortIndex;
					return tt !== 0 ? tt : C.id - V.id;
				}
				if (
					((l.unstable_now = void 0),
					typeof performance == 'object' &&
						typeof performance.now == 'function')
				) {
					var d = performance;
					l.unstable_now = function () {
						return d.now();
					};
				} else {
					var v = Date,
						y = v.now();
					l.unstable_now = function () {
						return v.now() - y;
					};
				}
				var h = [],
					p = [],
					g = 1,
					b = null,
					_ = 3,
					A = !1,
					D = !1,
					H = !1,
					Y = !1,
					F = typeof setTimeout == 'function' ? setTimeout : null,
					it = typeof clearTimeout == 'function' ? clearTimeout : null,
					K = typeof setImmediate < 'u' ? setImmediate : null;
				function lt(C) {
					for (var V = r(p); V !== null; ) {
						if (V.callback === null) c(p);
						else if (V.startTime <= C)
							c(p), (V.sortIndex = V.expirationTime), u(h, V);
						else break;
						V = r(p);
					}
				}
				function P(C) {
					if (((H = !1), lt(C), !D))
						if (r(h) !== null) (D = !0), W || ((W = !0), pt());
						else {
							var V = r(p);
							V !== null && wt(P, V.startTime - C);
						}
				}
				var W = !1,
					Z = -1,
					Q = 5,
					ut = -1;
				function ht() {
					return Y ? !0 : !(l.unstable_now() - ut < Q);
				}
				function St() {
					if (((Y = !1), W)) {
						var C = l.unstable_now();
						ut = C;
						var V = !0;
						try {
							t: {
								(D = !1), H && ((H = !1), it(Z), (Z = -1)), (A = !0);
								var tt = _;
								try {
									e: {
										for (
											lt(C), b = r(h);
											b !== null && !(b.expirationTime > C && ht());
										) {
											var Tt = b.callback;
											if (typeof Tt == 'function') {
												(b.callback = null), (_ = b.priorityLevel);
												var E = Tt(b.expirationTime <= C);
												if (((C = l.unstable_now()), typeof E == 'function')) {
													(b.callback = E), lt(C), (V = !0);
													break e;
												}
												b === r(h) && c(h), lt(C);
											} else c(h);
											b = r(h);
										}
										if (b !== null) V = !0;
										else {
											var B = r(p);
											B !== null && wt(P, B.startTime - C), (V = !1);
										}
									}
									break t;
								} finally {
									(b = null), (_ = tt), (A = !1);
								}
								V = void 0;
							}
						} finally {
							V ? pt() : (W = !1);
						}
					}
				}
				var pt;
				if (typeof K == 'function')
					pt = function () {
						K(St);
					};
				else if (typeof MessageChannel < 'u') {
					var ne = new MessageChannel(),
						Vt = ne.port2;
					(ne.port1.onmessage = St),
						(pt = function () {
							Vt.postMessage(null);
						});
				} else
					pt = function () {
						F(St, 0);
					};
				function wt(C, V) {
					Z = F(function () {
						C(l.unstable_now());
					}, V);
				}
				(l.unstable_IdlePriority = 5),
					(l.unstable_ImmediatePriority = 1),
					(l.unstable_LowPriority = 4),
					(l.unstable_NormalPriority = 3),
					(l.unstable_Profiling = null),
					(l.unstable_UserBlockingPriority = 2),
					(l.unstable_cancelCallback = function (C) {
						C.callback = null;
					}),
					(l.unstable_forceFrameRate = function (C) {
						0 > C || 125 < C
							? console.error(
									'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported',
								)
							: (Q = 0 < C ? Math.floor(1e3 / C) : 5);
					}),
					(l.unstable_getCurrentPriorityLevel = function () {
						return _;
					}),
					(l.unstable_next = function (C) {
						switch (_) {
							case 1:
							case 2:
							case 3:
								var V = 3;
								break;
							default:
								V = _;
						}
						var tt = _;
						_ = V;
						try {
							return C();
						} finally {
							_ = tt;
						}
					}),
					(l.unstable_requestPaint = function () {
						Y = !0;
					}),
					(l.unstable_runWithPriority = function (C, V) {
						switch (C) {
							case 1:
							case 2:
							case 3:
							case 4:
							case 5:
								break;
							default:
								C = 3;
						}
						var tt = _;
						_ = C;
						try {
							return V();
						} finally {
							_ = tt;
						}
					}),
					(l.unstable_scheduleCallback = function (C, V, tt) {
						var Tt = l.unstable_now();
						switch (
							(typeof tt == 'object' && tt !== null
								? ((tt = tt.delay),
									(tt = typeof tt == 'number' && 0 < tt ? Tt + tt : Tt))
								: (tt = Tt),
							C)
						) {
							case 1:
								var E = -1;
								break;
							case 2:
								E = 250;
								break;
							case 5:
								E = 1073741823;
								break;
							case 4:
								E = 1e4;
								break;
							default:
								E = 5e3;
						}
						return (
							(E = tt + E),
							(C = {
								id: g++,
								callback: V,
								priorityLevel: C,
								startTime: tt,
								expirationTime: E,
								sortIndex: -1,
							}),
							tt > Tt
								? ((C.sortIndex = tt),
									u(p, C),
									r(h) === null &&
										C === r(p) &&
										(H ? (it(Z), (Z = -1)) : (H = !0), wt(P, tt - Tt)))
								: ((C.sortIndex = E),
									u(h, C),
									D || A || ((D = !0), W || ((W = !0), pt()))),
							C
						);
					}),
					(l.unstable_shouldYield = ht),
					(l.unstable_wrapCallback = function (C) {
						var V = _;
						return function () {
							var tt = _;
							_ = V;
							try {
								return C.apply(this, arguments);
							} finally {
								_ = tt;
							}
						};
					});
			})(bc)),
		bc
	);
}
var Fh;
function qv() {
	return Fh || ((Fh = 1), (Sc.exports = jv())), Sc.exports;
}
var _c = { exports: {} },
	te = {}; /**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Wh;
function Vv() {
	if (Wh) return te;
	Wh = 1;
	var l = bi();
	function u(h) {
		var p = 'https://react.dev/errors/' + h;
		if (1 < arguments.length) {
			p += '?args[]=' + encodeURIComponent(arguments[1]);
			for (var g = 2; g < arguments.length; g++)
				p += '&args[]=' + encodeURIComponent(arguments[g]);
		}
		return (
			'Minified React error #' +
			h +
			'; visit ' +
			p +
			' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
		);
	}
	function r() {}
	var c = {
			d: {
				f: r,
				r: function () {
					throw Error(u(522));
				},
				D: r,
				C: r,
				L: r,
				m: r,
				X: r,
				S: r,
				M: r,
			},
			p: 0,
			findDOMNode: null,
		},
		o = Symbol.for('react.portal');
	function d(h, p, g) {
		var b =
			3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
		return {
			$$typeof: o,
			key: b == null ? null : '' + b,
			children: h,
			containerInfo: p,
			implementation: g,
		};
	}
	var v = l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
	function y(h, p) {
		if (h === 'font') return '';
		if (typeof p == 'string') return p === 'use-credentials' ? p : '';
	}
	return (
		(te.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = c),
		(te.createPortal = function (h, p) {
			var g =
				2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
			if (!p || (p.nodeType !== 1 && p.nodeType !== 9 && p.nodeType !== 11))
				throw Error(u(299));
			return d(h, p, null, g);
		}),
		(te.flushSync = function (h) {
			var p = v.T,
				g = c.p;
			try {
				if (((v.T = null), (c.p = 2), h)) return h();
			} finally {
				(v.T = p), (c.p = g), c.d.f();
			}
		}),
		(te.preconnect = function (h, p) {
			typeof h == 'string' &&
				(p
					? ((p = p.crossOrigin),
						(p =
							typeof p == 'string'
								? p === 'use-credentials'
									? p
									: ''
								: void 0))
					: (p = null),
				c.d.C(h, p));
		}),
		(te.prefetchDNS = function (h) {
			typeof h == 'string' && c.d.D(h);
		}),
		(te.preinit = function (h, p) {
			if (typeof h == 'string' && p && typeof p.as == 'string') {
				var g = p.as,
					b = y(g, p.crossOrigin),
					_ = typeof p.integrity == 'string' ? p.integrity : void 0,
					A = typeof p.fetchPriority == 'string' ? p.fetchPriority : void 0;
				g === 'style'
					? c.d.S(h, typeof p.precedence == 'string' ? p.precedence : void 0, {
							crossOrigin: b,
							integrity: _,
							fetchPriority: A,
						})
					: g === 'script' &&
						c.d.X(h, {
							crossOrigin: b,
							integrity: _,
							fetchPriority: A,
							nonce: typeof p.nonce == 'string' ? p.nonce : void 0,
						});
			}
		}),
		(te.preinitModule = function (h, p) {
			if (typeof h == 'string')
				if (typeof p == 'object' && p !== null) {
					if (p.as == null || p.as === 'script') {
						var g = y(p.as, p.crossOrigin);
						c.d.M(h, {
							crossOrigin: g,
							integrity: typeof p.integrity == 'string' ? p.integrity : void 0,
							nonce: typeof p.nonce == 'string' ? p.nonce : void 0,
						});
					}
				} else p == null && c.d.M(h);
		}),
		(te.preload = function (h, p) {
			if (
				typeof h == 'string' &&
				typeof p == 'object' &&
				p !== null &&
				typeof p.as == 'string'
			) {
				var g = p.as,
					b = y(g, p.crossOrigin);
				c.d.L(h, g, {
					crossOrigin: b,
					integrity: typeof p.integrity == 'string' ? p.integrity : void 0,
					nonce: typeof p.nonce == 'string' ? p.nonce : void 0,
					type: typeof p.type == 'string' ? p.type : void 0,
					fetchPriority:
						typeof p.fetchPriority == 'string' ? p.fetchPriority : void 0,
					referrerPolicy:
						typeof p.referrerPolicy == 'string' ? p.referrerPolicy : void 0,
					imageSrcSet:
						typeof p.imageSrcSet == 'string' ? p.imageSrcSet : void 0,
					imageSizes: typeof p.imageSizes == 'string' ? p.imageSizes : void 0,
					media: typeof p.media == 'string' ? p.media : void 0,
				});
			}
		}),
		(te.preloadModule = function (h, p) {
			if (typeof h == 'string')
				if (p) {
					var g = y(p.as, p.crossOrigin);
					c.d.m(h, {
						as: typeof p.as == 'string' && p.as !== 'script' ? p.as : void 0,
						crossOrigin: g,
						integrity: typeof p.integrity == 'string' ? p.integrity : void 0,
					});
				} else c.d.m(h);
		}),
		(te.requestFormReset = function (h) {
			c.d.r(h);
		}),
		(te.unstable_batchedUpdates = function (h, p) {
			return h(p);
		}),
		(te.useFormState = function (h, p, g) {
			return v.H.useFormState(h, p, g);
		}),
		(te.useFormStatus = function () {
			return v.H.useHostTransitionStatus();
		}),
		(te.version = '19.1.1'),
		te
	);
}
var Ih;
function Np() {
	if (Ih) return _c.exports;
	Ih = 1;
	function l() {
		if (
			!(
				typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
				typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
			)
		)
			try {
				__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l);
			} catch (u) {
				console.error(u);
			}
	}
	return l(), (_c.exports = Vv()), _c.exports;
} /**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tp;
function Yv() {
	if (tp) return ci;
	tp = 1;
	var l = qv(),
		u = bi(),
		r = Np();
	function c(t) {
		var e = 'https://react.dev/errors/' + t;
		if (1 < arguments.length) {
			e += '?args[]=' + encodeURIComponent(arguments[1]);
			for (var n = 2; n < arguments.length; n++)
				e += '&args[]=' + encodeURIComponent(arguments[n]);
		}
		return (
			'Minified React error #' +
			t +
			'; visit ' +
			e +
			' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
		);
	}
	function o(t) {
		return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
	}
	function d(t) {
		var e = t,
			n = t;
		if (t.alternate) for (; e.return; ) e = e.return;
		else {
			t = e;
			do (e = t), (e.flags & 4098) !== 0 && (n = e.return), (t = e.return);
			while (t);
		}
		return e.tag === 3 ? n : null;
	}
	function v(t) {
		if (t.tag === 13) {
			var e = t.memoizedState;
			if (
				(e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)),
				e !== null)
			)
				return e.dehydrated;
		}
		return null;
	}
	function y(t) {
		if (d(t) !== t) throw Error(c(188));
	}
	function h(t) {
		var e = t.alternate;
		if (!e) {
			if (((e = d(t)), e === null)) throw Error(c(188));
			return e !== t ? null : t;
		}
		for (var n = t, a = e; ; ) {
			var i = n.return;
			if (i === null) break;
			var s = i.alternate;
			if (s === null) {
				if (((a = i.return), a !== null)) {
					n = a;
					continue;
				}
				break;
			}
			if (i.child === s.child) {
				for (s = i.child; s; ) {
					if (s === n) return y(i), t;
					if (s === a) return y(i), e;
					s = s.sibling;
				}
				throw Error(c(188));
			}
			if (n.return !== a.return) (n = i), (a = s);
			else {
				for (var f = !1, m = i.child; m; ) {
					if (m === n) {
						(f = !0), (n = i), (a = s);
						break;
					}
					if (m === a) {
						(f = !0), (a = i), (n = s);
						break;
					}
					m = m.sibling;
				}
				if (!f) {
					for (m = s.child; m; ) {
						if (m === n) {
							(f = !0), (n = s), (a = i);
							break;
						}
						if (m === a) {
							(f = !0), (a = s), (n = i);
							break;
						}
						m = m.sibling;
					}
					if (!f) throw Error(c(189));
				}
			}
			if (n.alternate !== a) throw Error(c(190));
		}
		if (n.tag !== 3) throw Error(c(188));
		return n.stateNode.current === n ? t : e;
	}
	function p(t) {
		var e = t.tag;
		if (e === 5 || e === 26 || e === 27 || e === 6) return t;
		for (t = t.child; t !== null; ) {
			if (((e = p(t)), e !== null)) return e;
			t = t.sibling;
		}
		return null;
	}
	var g = Object.assign,
		b = Symbol.for('react.element'),
		_ = Symbol.for('react.transitional.element'),
		A = Symbol.for('react.portal'),
		D = Symbol.for('react.fragment'),
		H = Symbol.for('react.strict_mode'),
		Y = Symbol.for('react.profiler'),
		F = Symbol.for('react.provider'),
		it = Symbol.for('react.consumer'),
		K = Symbol.for('react.context'),
		lt = Symbol.for('react.forward_ref'),
		P = Symbol.for('react.suspense'),
		W = Symbol.for('react.suspense_list'),
		Z = Symbol.for('react.memo'),
		Q = Symbol.for('react.lazy'),
		ut = Symbol.for('react.activity'),
		ht = Symbol.for('react.memo_cache_sentinel'),
		St = Symbol.iterator;
	function pt(t) {
		return t === null || typeof t != 'object'
			? null
			: ((t = (St && t[St]) || t['@@iterator']),
				typeof t == 'function' ? t : null);
	}
	var ne = Symbol.for('react.client.reference');
	function Vt(t) {
		if (t == null) return null;
		if (typeof t == 'function')
			return t.$$typeof === ne ? null : t.displayName || t.name || null;
		if (typeof t == 'string') return t;
		switch (t) {
			case D:
				return 'Fragment';
			case Y:
				return 'Profiler';
			case H:
				return 'StrictMode';
			case P:
				return 'Suspense';
			case W:
				return 'SuspenseList';
			case ut:
				return 'Activity';
		}
		if (typeof t == 'object')
			switch (t.$$typeof) {
				case A:
					return 'Portal';
				case K:
					return (t.displayName || 'Context') + '.Provider';
				case it:
					return (t._context.displayName || 'Context') + '.Consumer';
				case lt:
					var e = t.render;
					return (
						(t = t.displayName),
						t ||
							((t = e.displayName || e.name || ''),
							(t = t !== '' ? 'ForwardRef(' + t + ')' : 'ForwardRef')),
						t
					);
				case Z:
					return (
						(e = t.displayName || null), e !== null ? e : Vt(t.type) || 'Memo'
					);
				case Q:
					(e = t._payload), (t = t._init);
					try {
						return Vt(t(e));
					} catch {}
			}
		return null;
	}
	var wt = Array.isArray,
		C = u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
		V = r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
		tt = { pending: !1, data: null, method: null, action: null },
		Tt = [],
		E = -1;
	function B(t) {
		return { current: t };
	}
	function G(t) {
		0 > E || ((t.current = Tt[E]), (Tt[E] = null), E--);
	}
	function q(t, e) {
		E++, (Tt[E] = t.current), (t.current = e);
	}
	var k = B(null),
		ct = B(null),
		$ = B(null),
		Qt = B(null);
	function bt(t, e) {
		switch ((q($, e), q(ct, t), q(k, null), e.nodeType)) {
			case 9:
			case 11:
				t = (t = e.documentElement) && (t = t.namespaceURI) ? bh(t) : 0;
				break;
			default:
				if (((t = e.tagName), (e = e.namespaceURI)))
					(e = bh(e)), (t = _h(e, t));
				else
					switch (t) {
						case 'svg':
							t = 1;
							break;
						case 'math':
							t = 2;
							break;
						default:
							t = 0;
					}
		}
		G(k), q(k, t);
	}
	function ae() {
		G(k), G(ct), G($);
	}
	function Xn(t) {
		t.memoizedState !== null && q(Qt, t);
		var e = k.current,
			n = _h(e, t.type);
		e !== n && (q(ct, t), q(k, n));
	}
	function on(t) {
		ct.current === t && (G(k), G(ct)),
			Qt.current === t && (G(Qt), (ai._currentValue = tt));
	}
	var Ne = Object.prototype.hasOwnProperty,
		ol = l.unstable_scheduleCallback,
		fl = l.unstable_cancelCallback,
		_i = l.unstable_shouldYield,
		ar = l.unstable_requestPaint,
		Re = l.unstable_now,
		lr = l.unstable_getCurrentPriorityLevel,
		Qn = l.unstable_ImmediatePriority,
		Zn = l.unstable_UserBlockingPriority,
		Kn = l.unstable_NormalPriority,
		Ri = l.unstable_LowPriority,
		_t = l.unstable_IdlePriority,
		Yt = l.log,
		fe = l.unstable_setDisableYieldValue,
		fn = null,
		de = null;
	function dn(t) {
		if (
			(typeof Yt == 'function' && fe(t),
			de && typeof de.setStrictMode == 'function')
		)
			try {
				de.setStrictMode(fn, t);
			} catch {}
	}
	var he = Math.clz32 ? Math.clz32 : by,
		gy = Math.log,
		Sy = Math.LN2;
	function by(t) {
		return (t >>>= 0), t === 0 ? 32 : (31 - ((gy(t) / Sy) | 0)) | 0;
	}
	var Ei = 256,
		Ti = 4194304;
	function Jn(t) {
		var e = t & 42;
		if (e !== 0) return e;
		switch (t & -t) {
			case 1:
				return 1;
			case 2:
				return 2;
			case 4:
				return 4;
			case 8:
				return 8;
			case 16:
				return 16;
			case 32:
				return 32;
			case 64:
				return 64;
			case 128:
				return 128;
			case 256:
			case 512:
			case 1024:
			case 2048:
			case 4096:
			case 8192:
			case 16384:
			case 32768:
			case 65536:
			case 131072:
			case 262144:
			case 524288:
			case 1048576:
			case 2097152:
				return t & 4194048;
			case 4194304:
			case 8388608:
			case 16777216:
			case 33554432:
				return t & 62914560;
			case 67108864:
				return 67108864;
			case 134217728:
				return 134217728;
			case 268435456:
				return 268435456;
			case 536870912:
				return 536870912;
			case 1073741824:
				return 0;
			default:
				return t;
		}
	}
	function Ai(t, e, n) {
		var a = t.pendingLanes;
		if (a === 0) return 0;
		var i = 0,
			s = t.suspendedLanes,
			f = t.pingedLanes;
		t = t.warmLanes;
		var m = a & 134217727;
		return (
			m !== 0
				? ((a = m & ~s),
					a !== 0
						? (i = Jn(a))
						: ((f &= m),
							f !== 0
								? (i = Jn(f))
								: n || ((n = m & ~t), n !== 0 && (i = Jn(n)))))
				: ((m = a & ~s),
					m !== 0
						? (i = Jn(m))
						: f !== 0
							? (i = Jn(f))
							: n || ((n = a & ~t), n !== 0 && (i = Jn(n)))),
			i === 0
				? 0
				: e !== 0 &&
						e !== i &&
						(e & s) === 0 &&
						((s = i & -i),
						(n = e & -e),
						s >= n || (s === 32 && (n & 4194048) !== 0))
					? e
					: i
		);
	}
	function dl(t, e) {
		return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
	}
	function _y(t, e) {
		switch (t) {
			case 1:
			case 2:
			case 4:
			case 8:
			case 64:
				return e + 250;
			case 16:
			case 32:
			case 128:
			case 256:
			case 512:
			case 1024:
			case 2048:
			case 4096:
			case 8192:
			case 16384:
			case 32768:
			case 65536:
			case 131072:
			case 262144:
			case 524288:
			case 1048576:
			case 2097152:
				return e + 5e3;
			case 4194304:
			case 8388608:
			case 16777216:
			case 33554432:
				return -1;
			case 67108864:
			case 134217728:
			case 268435456:
			case 536870912:
			case 1073741824:
				return -1;
			default:
				return -1;
		}
	}
	function eo() {
		var t = Ei;
		return (Ei <<= 1), (Ei & 4194048) === 0 && (Ei = 256), t;
	}
	function no() {
		var t = Ti;
		return (Ti <<= 1), (Ti & 62914560) === 0 && (Ti = 4194304), t;
	}
	function ir(t) {
		for (var e = [], n = 0; 31 > n; n++) e.push(t);
		return e;
	}
	function hl(t, e) {
		(t.pendingLanes |= e),
			e !== 268435456 &&
				((t.suspendedLanes = 0), (t.pingedLanes = 0), (t.warmLanes = 0));
	}
	function Ry(t, e, n, a, i, s) {
		var f = t.pendingLanes;
		(t.pendingLanes = n),
			(t.suspendedLanes = 0),
			(t.pingedLanes = 0),
			(t.warmLanes = 0),
			(t.expiredLanes &= n),
			(t.entangledLanes &= n),
			(t.errorRecoveryDisabledLanes &= n),
			(t.shellSuspendCounter = 0);
		var m = t.entanglements,
			R = t.expirationTimes,
			x = t.hiddenUpdates;
		for (n = f & ~n; 0 < n; ) {
			var U = 31 - he(n),
				L = 1 << U;
			(m[U] = 0), (R[U] = -1);
			var z = x[U];
			if (z !== null)
				for (x[U] = null, U = 0; U < z.length; U++) {
					var w = z[U];
					w !== null && (w.lane &= -536870913);
				}
			n &= ~L;
		}
		a !== 0 && ao(t, a, 0),
			s !== 0 && i === 0 && t.tag !== 0 && (t.suspendedLanes |= s & ~(f & ~e));
	}
	function ao(t, e, n) {
		(t.pendingLanes |= e), (t.suspendedLanes &= ~e);
		var a = 31 - he(e);
		(t.entangledLanes |= e),
			(t.entanglements[a] = t.entanglements[a] | 1073741824 | (n & 4194090));
	}
	function lo(t, e) {
		var n = (t.entangledLanes |= e);
		for (t = t.entanglements; n; ) {
			var a = 31 - he(n),
				i = 1 << a;
			(i & e) | (t[a] & e) && (t[a] |= e), (n &= ~i);
		}
	}
	function ur(t) {
		switch (t) {
			case 2:
				t = 1;
				break;
			case 8:
				t = 4;
				break;
			case 32:
				t = 16;
				break;
			case 256:
			case 512:
			case 1024:
			case 2048:
			case 4096:
			case 8192:
			case 16384:
			case 32768:
			case 65536:
			case 131072:
			case 262144:
			case 524288:
			case 1048576:
			case 2097152:
			case 4194304:
			case 8388608:
			case 16777216:
			case 33554432:
				t = 128;
				break;
			case 268435456:
				t = 134217728;
				break;
			default:
				t = 0;
		}
		return t;
	}
	function rr(t) {
		return (
			(t &= -t),
			2 < t ? (8 < t ? ((t & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
		);
	}
	function io() {
		var t = V.p;
		return t !== 0 ? t : ((t = window.event), t === void 0 ? 32 : Vh(t.type));
	}
	function Ey(t, e) {
		var n = V.p;
		try {
			return (V.p = t), e();
		} finally {
			V.p = n;
		}
	}
	var hn = Math.random().toString(36).slice(2),
		Wt = '__reactFiber$' + hn,
		ie = '__reactProps$' + hn,
		va = '__reactContainer$' + hn,
		sr = '__reactEvents$' + hn,
		Ty = '__reactListeners$' + hn,
		Ay = '__reactHandles$' + hn,
		uo = '__reactResources$' + hn,
		pl = '__reactMarker$' + hn;
	function cr(t) {
		delete t[Wt], delete t[ie], delete t[sr], delete t[Ty], delete t[Ay];
	}
	function ga(t) {
		var e = t[Wt];
		if (e) return e;
		for (var n = t.parentNode; n; ) {
			if ((e = n[va] || n[Wt])) {
				if (
					((n = e.alternate),
					e.child !== null || (n !== null && n.child !== null))
				)
					for (t = Ah(t); t !== null; ) {
						if ((n = t[Wt])) return n;
						t = Ah(t);
					}
				return e;
			}
			(t = n), (n = t.parentNode);
		}
		return null;
	}
	function Sa(t) {
		if ((t = t[Wt] || t[va])) {
			var e = t.tag;
			if (e === 5 || e === 6 || e === 13 || e === 26 || e === 27 || e === 3)
				return t;
		}
		return null;
	}
	function yl(t) {
		var e = t.tag;
		if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
		throw Error(c(33));
	}
	function ba(t) {
		var e = t[uo];
		return (
			e ||
				(e = t[uo] =
					{ hoistableStyles: new Map(), hoistableScripts: new Map() }),
			e
		);
	}
	function Zt(t) {
		t[pl] = !0;
	}
	var ro = new Set(),
		so = {};
	function Pn(t, e) {
		_a(t, e), _a(t + 'Capture', e);
	}
	function _a(t, e) {
		for (so[t] = e, t = 0; t < e.length; t++) ro.add(e[t]);
	}
	var My = RegExp(
			'^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$',
		),
		co = {},
		oo = {};
	function Oy(t) {
		return Ne.call(oo, t)
			? !0
			: Ne.call(co, t)
				? !1
				: My.test(t)
					? (oo[t] = !0)
					: ((co[t] = !0), !1);
	}
	function Mi(t, e, n) {
		if (Oy(e))
			if (n === null) t.removeAttribute(e);
			else {
				switch (typeof n) {
					case 'undefined':
					case 'function':
					case 'symbol':
						t.removeAttribute(e);
						return;
					case 'boolean':
						var a = e.toLowerCase().slice(0, 5);
						if (a !== 'data-' && a !== 'aria-') {
							t.removeAttribute(e);
							return;
						}
				}
				t.setAttribute(e, '' + n);
			}
	}
	function Oi(t, e, n) {
		if (n === null) t.removeAttribute(e);
		else {
			switch (typeof n) {
				case 'undefined':
				case 'function':
				case 'symbol':
				case 'boolean':
					t.removeAttribute(e);
					return;
			}
			t.setAttribute(e, '' + n);
		}
	}
	function Je(t, e, n, a) {
		if (a === null) t.removeAttribute(n);
		else {
			switch (typeof a) {
				case 'undefined':
				case 'function':
				case 'symbol':
				case 'boolean':
					t.removeAttribute(n);
					return;
			}
			t.setAttributeNS(e, n, '' + a);
		}
	}
	var or, fo;
	function Ra(t) {
		if (or === void 0)
			try {
				throw Error();
			} catch (n) {
				var e = n.stack.trim().match(/\n( *(at )?)/);
				(or = (e && e[1]) || ''),
					(fo =
						-1 <
						n.stack.indexOf(`
    at`)
							? ' (<anonymous>)'
							: -1 < n.stack.indexOf('@')
								? '@unknown:0:0'
								: '');
			}
		return (
			`
` +
			or +
			t +
			fo
		);
	}
	var fr = !1;
	function dr(t, e) {
		if (!t || fr) return '';
		fr = !0;
		var n = Error.prepareStackTrace;
		Error.prepareStackTrace = void 0;
		try {
			var a = {
				DetermineComponentFrameRoot: function () {
					try {
						if (e) {
							var L = function () {
								throw Error();
							};
							if (
								(Object.defineProperty(L.prototype, 'props', {
									set: function () {
										throw Error();
									},
								}),
								typeof Reflect == 'object' && Reflect.construct)
							) {
								try {
									Reflect.construct(L, []);
								} catch (w) {
									var z = w;
								}
								Reflect.construct(t, [], L);
							} else {
								try {
									L.call();
								} catch (w) {
									z = w;
								}
								t.call(L.prototype);
							}
						} else {
							try {
								throw Error();
							} catch (w) {
								z = w;
							}
							(L = t()) &&
								typeof L.catch == 'function' &&
								L.catch(function () {});
						}
					} catch (w) {
						if (w && z && typeof w.stack == 'string') return [w.stack, z.stack];
					}
					return [null, null];
				},
			};
			a.DetermineComponentFrameRoot.displayName = 'DetermineComponentFrameRoot';
			var i = Object.getOwnPropertyDescriptor(
				a.DetermineComponentFrameRoot,
				'name',
			);
			i &&
				i.configurable &&
				Object.defineProperty(a.DetermineComponentFrameRoot, 'name', {
					value: 'DetermineComponentFrameRoot',
				});
			var s = a.DetermineComponentFrameRoot(),
				f = s[0],
				m = s[1];
			if (f && m) {
				var R = f.split(`
`),
					x = m.split(`
`);
				for (
					i = a = 0;
					a < R.length && !R[a].includes('DetermineComponentFrameRoot');
				)
					a++;
				for (; i < x.length && !x[i].includes('DetermineComponentFrameRoot'); )
					i++;
				if (a === R.length || i === x.length)
					for (
						a = R.length - 1, i = x.length - 1;
						1 <= a && 0 <= i && R[a] !== x[i];
					)
						i--;
				for (; 1 <= a && 0 <= i; a--, i--)
					if (R[a] !== x[i]) {
						if (a !== 1 || i !== 1)
							do
								if ((a--, i--, 0 > i || R[a] !== x[i])) {
									var U =
										`
` + R[a].replace(' at new ', ' at ');
									return (
										t.displayName &&
											U.includes('<anonymous>') &&
											(U = U.replace('<anonymous>', t.displayName)),
										U
									);
								}
							while (1 <= a && 0 <= i);
						break;
					}
			}
		} finally {
			(fr = !1), (Error.prepareStackTrace = n);
		}
		return (n = t ? t.displayName || t.name : '') ? Ra(n) : '';
	}
	function xy(t) {
		switch (t.tag) {
			case 26:
			case 27:
			case 5:
				return Ra(t.type);
			case 16:
				return Ra('Lazy');
			case 13:
				return Ra('Suspense');
			case 19:
				return Ra('SuspenseList');
			case 0:
			case 15:
				return dr(t.type, !1);
			case 11:
				return dr(t.type.render, !1);
			case 1:
				return dr(t.type, !0);
			case 31:
				return Ra('Activity');
			default:
				return '';
		}
	}
	function ho(t) {
		try {
			var e = '';
			do (e += xy(t)), (t = t.return);
			while (t);
			return e;
		} catch (n) {
			return (
				`
Error generating stack: ` +
				n.message +
				`
` +
				n.stack
			);
		}
	}
	function Ee(t) {
		switch (typeof t) {
			case 'bigint':
			case 'boolean':
			case 'number':
			case 'string':
			case 'undefined':
				return t;
			case 'object':
				return t;
			default:
				return '';
		}
	}
	function po(t) {
		var e = t.type;
		return (
			(t = t.nodeName) &&
			t.toLowerCase() === 'input' &&
			(e === 'checkbox' || e === 'radio')
		);
	}
	function zy(t) {
		var e = po(t) ? 'checked' : 'value',
			n = Object.getOwnPropertyDescriptor(t.constructor.prototype, e),
			a = '' + t[e];
		if (
			!t.hasOwnProperty(e) &&
			typeof n < 'u' &&
			typeof n.get == 'function' &&
			typeof n.set == 'function'
		) {
			var i = n.get,
				s = n.set;
			return (
				Object.defineProperty(t, e, {
					configurable: !0,
					get: function () {
						return i.call(this);
					},
					set: function (f) {
						(a = '' + f), s.call(this, f);
					},
				}),
				Object.defineProperty(t, e, { enumerable: n.enumerable }),
				{
					getValue: function () {
						return a;
					},
					setValue: function (f) {
						a = '' + f;
					},
					stopTracking: function () {
						(t._valueTracker = null), delete t[e];
					},
				}
			);
		}
	}
	function xi(t) {
		t._valueTracker || (t._valueTracker = zy(t));
	}
	function yo(t) {
		if (!t) return !1;
		var e = t._valueTracker;
		if (!e) return !0;
		var n = e.getValue(),
			a = '';
		return (
			t && (a = po(t) ? (t.checked ? 'true' : 'false') : t.value),
			(t = a),
			t !== n ? (e.setValue(t), !0) : !1
		);
	}
	function zi(t) {
		if (
			((t = t || (typeof document < 'u' ? document : void 0)), typeof t > 'u')
		)
			return null;
		try {
			return t.activeElement || t.body;
		} catch {
			return t.body;
		}
	}
	var wy = /[\n"\\]/g;
	function Te(t) {
		return t.replace(wy, function (e) {
			return '\\' + e.charCodeAt(0).toString(16) + ' ';
		});
	}
	function hr(t, e, n, a, i, s, f, m) {
		(t.name = ''),
			f != null &&
			typeof f != 'function' &&
			typeof f != 'symbol' &&
			typeof f != 'boolean'
				? (t.type = f)
				: t.removeAttribute('type'),
			e != null
				? f === 'number'
					? ((e === 0 && t.value === '') || t.value != e) &&
						(t.value = '' + Ee(e))
					: t.value !== '' + Ee(e) && (t.value = '' + Ee(e))
				: (f !== 'submit' && f !== 'reset') || t.removeAttribute('value'),
			e != null
				? pr(t, f, Ee(e))
				: n != null
					? pr(t, f, Ee(n))
					: a != null && t.removeAttribute('value'),
			i == null && s != null && (t.defaultChecked = !!s),
			i != null &&
				(t.checked = i && typeof i != 'function' && typeof i != 'symbol'),
			m != null &&
			typeof m != 'function' &&
			typeof m != 'symbol' &&
			typeof m != 'boolean'
				? (t.name = '' + Ee(m))
				: t.removeAttribute('name');
	}
	function mo(t, e, n, a, i, s, f, m) {
		if (
			(s != null &&
				typeof s != 'function' &&
				typeof s != 'symbol' &&
				typeof s != 'boolean' &&
				(t.type = s),
			e != null || n != null)
		) {
			if (!((s !== 'submit' && s !== 'reset') || e != null)) return;
			(n = n != null ? '' + Ee(n) : ''),
				(e = e != null ? '' + Ee(e) : n),
				m || e === t.value || (t.value = e),
				(t.defaultValue = e);
		}
		(a = a ?? i),
			(a = typeof a != 'function' && typeof a != 'symbol' && !!a),
			(t.checked = m ? t.checked : !!a),
			(t.defaultChecked = !!a),
			f != null &&
				typeof f != 'function' &&
				typeof f != 'symbol' &&
				typeof f != 'boolean' &&
				(t.name = f);
	}
	function pr(t, e, n) {
		(e === 'number' && zi(t.ownerDocument) === t) ||
			t.defaultValue === '' + n ||
			(t.defaultValue = '' + n);
	}
	function Ea(t, e, n, a) {
		if (((t = t.options), e)) {
			e = {};
			for (var i = 0; i < n.length; i++) e['$' + n[i]] = !0;
			for (n = 0; n < t.length; n++)
				(i = e.hasOwnProperty('$' + t[n].value)),
					t[n].selected !== i && (t[n].selected = i),
					i && a && (t[n].defaultSelected = !0);
		} else {
			for (n = '' + Ee(n), e = null, i = 0; i < t.length; i++) {
				if (t[i].value === n) {
					(t[i].selected = !0), a && (t[i].defaultSelected = !0);
					return;
				}
				e !== null || t[i].disabled || (e = t[i]);
			}
			e !== null && (e.selected = !0);
		}
	}
	function vo(t, e, n) {
		if (
			e != null &&
			((e = '' + Ee(e)), e !== t.value && (t.value = e), n == null)
		) {
			t.defaultValue !== e && (t.defaultValue = e);
			return;
		}
		t.defaultValue = n != null ? '' + Ee(n) : '';
	}
	function go(t, e, n, a) {
		if (e == null) {
			if (a != null) {
				if (n != null) throw Error(c(92));
				if (wt(a)) {
					if (1 < a.length) throw Error(c(93));
					a = a[0];
				}
				n = a;
			}
			n == null && (n = ''), (e = n);
		}
		(n = Ee(e)),
			(t.defaultValue = n),
			(a = t.textContent),
			a === n && a !== '' && a !== null && (t.value = a);
	}
	function Ta(t, e) {
		if (e) {
			var n = t.firstChild;
			if (n && n === t.lastChild && n.nodeType === 3) {
				n.nodeValue = e;
				return;
			}
		}
		t.textContent = e;
	}
	var Dy = new Set(
		'animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp'.split(
			' ',
		),
	);
	function So(t, e, n) {
		var a = e.indexOf('--') === 0;
		n == null || typeof n == 'boolean' || n === ''
			? a
				? t.setProperty(e, '')
				: e === 'float'
					? (t.cssFloat = '')
					: (t[e] = '')
			: a
				? t.setProperty(e, n)
				: typeof n != 'number' || n === 0 || Dy.has(e)
					? e === 'float'
						? (t.cssFloat = n)
						: (t[e] = ('' + n).trim())
					: (t[e] = n + 'px');
	}
	function bo(t, e, n) {
		if (e != null && typeof e != 'object') throw Error(c(62));
		if (((t = t.style), n != null)) {
			for (var a in n)
				!n.hasOwnProperty(a) ||
					(e != null && e.hasOwnProperty(a)) ||
					(a.indexOf('--') === 0
						? t.setProperty(a, '')
						: a === 'float'
							? (t.cssFloat = '')
							: (t[a] = ''));
			for (var i in e)
				(a = e[i]), e.hasOwnProperty(i) && n[i] !== a && So(t, i, a);
		} else for (var s in e) e.hasOwnProperty(s) && So(t, s, e[s]);
	}
	function yr(t) {
		if (t.indexOf('-') === -1) return !1;
		switch (t) {
			case 'annotation-xml':
			case 'color-profile':
			case 'font-face':
			case 'font-face-src':
			case 'font-face-uri':
			case 'font-face-format':
			case 'font-face-name':
			case 'missing-glyph':
				return !1;
			default:
				return !0;
		}
	}
	var Cy = new Map([
			['acceptCharset', 'accept-charset'],
			['htmlFor', 'for'],
			['httpEquiv', 'http-equiv'],
			['crossOrigin', 'crossorigin'],
			['accentHeight', 'accent-height'],
			['alignmentBaseline', 'alignment-baseline'],
			['arabicForm', 'arabic-form'],
			['baselineShift', 'baseline-shift'],
			['capHeight', 'cap-height'],
			['clipPath', 'clip-path'],
			['clipRule', 'clip-rule'],
			['colorInterpolation', 'color-interpolation'],
			['colorInterpolationFilters', 'color-interpolation-filters'],
			['colorProfile', 'color-profile'],
			['colorRendering', 'color-rendering'],
			['dominantBaseline', 'dominant-baseline'],
			['enableBackground', 'enable-background'],
			['fillOpacity', 'fill-opacity'],
			['fillRule', 'fill-rule'],
			['floodColor', 'flood-color'],
			['floodOpacity', 'flood-opacity'],
			['fontFamily', 'font-family'],
			['fontSize', 'font-size'],
			['fontSizeAdjust', 'font-size-adjust'],
			['fontStretch', 'font-stretch'],
			['fontStyle', 'font-style'],
			['fontVariant', 'font-variant'],
			['fontWeight', 'font-weight'],
			['glyphName', 'glyph-name'],
			['glyphOrientationHorizontal', 'glyph-orientation-horizontal'],
			['glyphOrientationVertical', 'glyph-orientation-vertical'],
			['horizAdvX', 'horiz-adv-x'],
			['horizOriginX', 'horiz-origin-x'],
			['imageRendering', 'image-rendering'],
			['letterSpacing', 'letter-spacing'],
			['lightingColor', 'lighting-color'],
			['markerEnd', 'marker-end'],
			['markerMid', 'marker-mid'],
			['markerStart', 'marker-start'],
			['overlinePosition', 'overline-position'],
			['overlineThickness', 'overline-thickness'],
			['paintOrder', 'paint-order'],
			['panose-1', 'panose-1'],
			['pointerEvents', 'pointer-events'],
			['renderingIntent', 'rendering-intent'],
			['shapeRendering', 'shape-rendering'],
			['stopColor', 'stop-color'],
			['stopOpacity', 'stop-opacity'],
			['strikethroughPosition', 'strikethrough-position'],
			['strikethroughThickness', 'strikethrough-thickness'],
			['strokeDasharray', 'stroke-dasharray'],
			['strokeDashoffset', 'stroke-dashoffset'],
			['strokeLinecap', 'stroke-linecap'],
			['strokeLinejoin', 'stroke-linejoin'],
			['strokeMiterlimit', 'stroke-miterlimit'],
			['strokeOpacity', 'stroke-opacity'],
			['strokeWidth', 'stroke-width'],
			['textAnchor', 'text-anchor'],
			['textDecoration', 'text-decoration'],
			['textRendering', 'text-rendering'],
			['transformOrigin', 'transform-origin'],
			['underlinePosition', 'underline-position'],
			['underlineThickness', 'underline-thickness'],
			['unicodeBidi', 'unicode-bidi'],
			['unicodeRange', 'unicode-range'],
			['unitsPerEm', 'units-per-em'],
			['vAlphabetic', 'v-alphabetic'],
			['vHanging', 'v-hanging'],
			['vIdeographic', 'v-ideographic'],
			['vMathematical', 'v-mathematical'],
			['vectorEffect', 'vector-effect'],
			['vertAdvY', 'vert-adv-y'],
			['vertOriginX', 'vert-origin-x'],
			['vertOriginY', 'vert-origin-y'],
			['wordSpacing', 'word-spacing'],
			['writingMode', 'writing-mode'],
			['xmlnsXlink', 'xmlns:xlink'],
			['xHeight', 'x-height'],
		]),
		Uy =
			/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
	function wi(t) {
		return Uy.test('' + t)
			? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
			: t;
	}
	var mr = null;
	function vr(t) {
		return (
			(t = t.target || t.srcElement || window),
			t.correspondingUseElement && (t = t.correspondingUseElement),
			t.nodeType === 3 ? t.parentNode : t
		);
	}
	var Aa = null,
		Ma = null;
	function _o(t) {
		var e = Sa(t);
		if (e && (t = e.stateNode)) {
			var n = t[ie] || null;
			t: switch (((t = e.stateNode), e.type)) {
				case 'input':
					if (
						(hr(
							t,
							n.value,
							n.defaultValue,
							n.defaultValue,
							n.checked,
							n.defaultChecked,
							n.type,
							n.name,
						),
						(e = n.name),
						n.type === 'radio' && e != null)
					) {
						for (n = t; n.parentNode; ) n = n.parentNode;
						for (
							n = n.querySelectorAll(
								'input[name="' + Te('' + e) + '"][type="radio"]',
							),
								e = 0;
							e < n.length;
							e++
						) {
							var a = n[e];
							if (a !== t && a.form === t.form) {
								var i = a[ie] || null;
								if (!i) throw Error(c(90));
								hr(
									a,
									i.value,
									i.defaultValue,
									i.defaultValue,
									i.checked,
									i.defaultChecked,
									i.type,
									i.name,
								);
							}
						}
						for (e = 0; e < n.length; e++)
							(a = n[e]), a.form === t.form && yo(a);
					}
					break t;
				case 'textarea':
					vo(t, n.value, n.defaultValue);
					break t;
				case 'select':
					(e = n.value), e != null && Ea(t, !!n.multiple, e, !1);
			}
		}
	}
	var gr = !1;
	function Ro(t, e, n) {
		if (gr) return t(e, n);
		gr = !0;
		try {
			var a = t(e);
			return a;
		} finally {
			if (
				((gr = !1),
				(Aa !== null || Ma !== null) &&
					(yu(), Aa && ((e = Aa), (t = Ma), (Ma = Aa = null), _o(e), t)))
			)
				for (e = 0; e < t.length; e++) _o(t[e]);
		}
	}
	function ml(t, e) {
		var n = t.stateNode;
		if (n === null) return null;
		var a = n[ie] || null;
		if (a === null) return null;
		n = a[e];
		t: switch (e) {
			case 'onClick':
			case 'onClickCapture':
			case 'onDoubleClick':
			case 'onDoubleClickCapture':
			case 'onMouseDown':
			case 'onMouseDownCapture':
			case 'onMouseMove':
			case 'onMouseMoveCapture':
			case 'onMouseUp':
			case 'onMouseUpCapture':
			case 'onMouseEnter':
				(a = !a.disabled) ||
					((t = t.type),
					(a = !(
						t === 'button' ||
						t === 'input' ||
						t === 'select' ||
						t === 'textarea'
					))),
					(t = !a);
				break t;
			default:
				t = !1;
		}
		if (t) return null;
		if (n && typeof n != 'function') throw Error(c(231, e, typeof n));
		return n;
	}
	var Pe = !(
			typeof window > 'u' ||
			typeof window.document > 'u' ||
			typeof window.document.createElement > 'u'
		),
		Sr = !1;
	if (Pe)
		try {
			var vl = {};
			Object.defineProperty(vl, 'passive', {
				get: function () {
					Sr = !0;
				},
			}),
				window.addEventListener('test', vl, vl),
				window.removeEventListener('test', vl, vl);
		} catch {
			Sr = !1;
		}
	var pn = null,
		br = null,
		Di = null;
	function Eo() {
		if (Di) return Di;
		var t,
			e = br,
			n = e.length,
			a,
			i = 'value' in pn ? pn.value : pn.textContent,
			s = i.length;
		for (t = 0; t < n && e[t] === i[t]; t++);
		var f = n - t;
		for (a = 1; a <= f && e[n - a] === i[s - a]; a++);
		return (Di = i.slice(t, 1 < a ? 1 - a : void 0));
	}
	function Ci(t) {
		var e = t.keyCode;
		return (
			'charCode' in t
				? ((t = t.charCode), t === 0 && e === 13 && (t = 13))
				: (t = e),
			t === 10 && (t = 13),
			32 <= t || t === 13 ? t : 0
		);
	}
	function Ui() {
		return !0;
	}
	function To() {
		return !1;
	}
	function ue(t) {
		function e(n, a, i, s, f) {
			(this._reactName = n),
				(this._targetInst = i),
				(this.type = a),
				(this.nativeEvent = s),
				(this.target = f),
				(this.currentTarget = null);
			for (var m in t)
				t.hasOwnProperty(m) && ((n = t[m]), (this[m] = n ? n(s) : s[m]));
			return (
				(this.isDefaultPrevented = (
					s.defaultPrevented != null
						? s.defaultPrevented
						: s.returnValue === !1
				)
					? Ui
					: To),
				(this.isPropagationStopped = To),
				this
			);
		}
		return (
			g(e.prototype, {
				preventDefault: function () {
					this.defaultPrevented = !0;
					var n = this.nativeEvent;
					n &&
						(n.preventDefault
							? n.preventDefault()
							: typeof n.returnValue != 'unknown' && (n.returnValue = !1),
						(this.isDefaultPrevented = Ui));
				},
				stopPropagation: function () {
					var n = this.nativeEvent;
					n &&
						(n.stopPropagation
							? n.stopPropagation()
							: typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
						(this.isPropagationStopped = Ui));
				},
				persist: function () {},
				isPersistent: Ui,
			}),
			e
		);
	}
	var kn = {
			eventPhase: 0,
			bubbles: 0,
			cancelable: 0,
			timeStamp: function (t) {
				return t.timeStamp || Date.now();
			},
			defaultPrevented: 0,
			isTrusted: 0,
		},
		Ni = ue(kn),
		gl = g({}, kn, { view: 0, detail: 0 }),
		Ny = ue(gl),
		_r,
		Rr,
		Sl,
		Li = g({}, gl, {
			screenX: 0,
			screenY: 0,
			clientX: 0,
			clientY: 0,
			pageX: 0,
			pageY: 0,
			ctrlKey: 0,
			shiftKey: 0,
			altKey: 0,
			metaKey: 0,
			getModifierState: Tr,
			button: 0,
			buttons: 0,
			relatedTarget: function (t) {
				return t.relatedTarget === void 0
					? t.fromElement === t.srcElement
						? t.toElement
						: t.fromElement
					: t.relatedTarget;
			},
			movementX: function (t) {
				return 'movementX' in t
					? t.movementX
					: (t !== Sl &&
							(Sl && t.type === 'mousemove'
								? ((_r = t.screenX - Sl.screenX), (Rr = t.screenY - Sl.screenY))
								: (Rr = _r = 0),
							(Sl = t)),
						_r);
			},
			movementY: function (t) {
				return 'movementY' in t ? t.movementY : Rr;
			},
		}),
		Ao = ue(Li),
		Ly = g({}, Li, { dataTransfer: 0 }),
		By = ue(Ly),
		Hy = g({}, gl, { relatedTarget: 0 }),
		Er = ue(Hy),
		jy = g({}, kn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
		qy = ue(jy),
		Vy = g({}, kn, {
			clipboardData: function (t) {
				return 'clipboardData' in t ? t.clipboardData : window.clipboardData;
			},
		}),
		Yy = ue(Vy),
		Gy = g({}, kn, { data: 0 }),
		Mo = ue(Gy),
		Xy = {
			Esc: 'Escape',
			Spacebar: ' ',
			Left: 'ArrowLeft',
			Up: 'ArrowUp',
			Right: 'ArrowRight',
			Down: 'ArrowDown',
			Del: 'Delete',
			Win: 'OS',
			Menu: 'ContextMenu',
			Apps: 'ContextMenu',
			Scroll: 'ScrollLock',
			MozPrintableKey: 'Unidentified',
		},
		Qy = {
			8: 'Backspace',
			9: 'Tab',
			12: 'Clear',
			13: 'Enter',
			16: 'Shift',
			17: 'Control',
			18: 'Alt',
			19: 'Pause',
			20: 'CapsLock',
			27: 'Escape',
			32: ' ',
			33: 'PageUp',
			34: 'PageDown',
			35: 'End',
			36: 'Home',
			37: 'ArrowLeft',
			38: 'ArrowUp',
			39: 'ArrowRight',
			40: 'ArrowDown',
			45: 'Insert',
			46: 'Delete',
			112: 'F1',
			113: 'F2',
			114: 'F3',
			115: 'F4',
			116: 'F5',
			117: 'F6',
			118: 'F7',
			119: 'F8',
			120: 'F9',
			121: 'F10',
			122: 'F11',
			123: 'F12',
			144: 'NumLock',
			145: 'ScrollLock',
			224: 'Meta',
		},
		Zy = {
			Alt: 'altKey',
			Control: 'ctrlKey',
			Meta: 'metaKey',
			Shift: 'shiftKey',
		};
	function Ky(t) {
		var e = this.nativeEvent;
		return e.getModifierState
			? e.getModifierState(t)
			: (t = Zy[t])
				? !!e[t]
				: !1;
	}
	function Tr() {
		return Ky;
	}
	var Jy = g({}, gl, {
			key: function (t) {
				if (t.key) {
					var e = Xy[t.key] || t.key;
					if (e !== 'Unidentified') return e;
				}
				return t.type === 'keypress'
					? ((t = Ci(t)), t === 13 ? 'Enter' : String.fromCharCode(t))
					: t.type === 'keydown' || t.type === 'keyup'
						? Qy[t.keyCode] || 'Unidentified'
						: '';
			},
			code: 0,
			location: 0,
			ctrlKey: 0,
			shiftKey: 0,
			altKey: 0,
			metaKey: 0,
			repeat: 0,
			locale: 0,
			getModifierState: Tr,
			charCode: function (t) {
				return t.type === 'keypress' ? Ci(t) : 0;
			},
			keyCode: function (t) {
				return t.type === 'keydown' || t.type === 'keyup' ? t.keyCode : 0;
			},
			which: function (t) {
				return t.type === 'keypress'
					? Ci(t)
					: t.type === 'keydown' || t.type === 'keyup'
						? t.keyCode
						: 0;
			},
		}),
		Py = ue(Jy),
		ky = g({}, Li, {
			pointerId: 0,
			width: 0,
			height: 0,
			pressure: 0,
			tangentialPressure: 0,
			tiltX: 0,
			tiltY: 0,
			twist: 0,
			pointerType: 0,
			isPrimary: 0,
		}),
		Oo = ue(ky),
		$y = g({}, gl, {
			touches: 0,
			targetTouches: 0,
			changedTouches: 0,
			altKey: 0,
			metaKey: 0,
			ctrlKey: 0,
			shiftKey: 0,
			getModifierState: Tr,
		}),
		Fy = ue($y),
		Wy = g({}, kn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
		Iy = ue(Wy),
		tm = g({}, Li, {
			deltaX: function (t) {
				return 'deltaX' in t
					? t.deltaX
					: 'wheelDeltaX' in t
						? -t.wheelDeltaX
						: 0;
			},
			deltaY: function (t) {
				return 'deltaY' in t
					? t.deltaY
					: 'wheelDeltaY' in t
						? -t.wheelDeltaY
						: 'wheelDelta' in t
							? -t.wheelDelta
							: 0;
			},
			deltaZ: 0,
			deltaMode: 0,
		}),
		em = ue(tm),
		nm = g({}, kn, { newState: 0, oldState: 0 }),
		am = ue(nm),
		lm = [9, 13, 27, 32],
		Ar = Pe && 'CompositionEvent' in window,
		bl = null;
	Pe && 'documentMode' in document && (bl = document.documentMode);
	var im = Pe && 'TextEvent' in window && !bl,
		xo = Pe && (!Ar || (bl && 8 < bl && 11 >= bl)),
		zo = ' ',
		wo = !1;
	function Do(t, e) {
		switch (t) {
			case 'keyup':
				return lm.indexOf(e.keyCode) !== -1;
			case 'keydown':
				return e.keyCode !== 229;
			case 'keypress':
			case 'mousedown':
			case 'focusout':
				return !0;
			default:
				return !1;
		}
	}
	function Co(t) {
		return (t = t.detail), typeof t == 'object' && 'data' in t ? t.data : null;
	}
	var Oa = !1;
	function um(t, e) {
		switch (t) {
			case 'compositionend':
				return Co(e);
			case 'keypress':
				return e.which !== 32 ? null : ((wo = !0), zo);
			case 'textInput':
				return (t = e.data), t === zo && wo ? null : t;
			default:
				return null;
		}
	}
	function rm(t, e) {
		if (Oa)
			return t === 'compositionend' || (!Ar && Do(t, e))
				? ((t = Eo()), (Di = br = pn = null), (Oa = !1), t)
				: null;
		switch (t) {
			case 'paste':
				return null;
			case 'keypress':
				if (!(e.ctrlKey || e.altKey || e.metaKey) || (e.ctrlKey && e.altKey)) {
					if (e.char && 1 < e.char.length) return e.char;
					if (e.which) return String.fromCharCode(e.which);
				}
				return null;
			case 'compositionend':
				return xo && e.locale !== 'ko' ? null : e.data;
			default:
				return null;
		}
	}
	var sm = {
		color: !0,
		date: !0,
		datetime: !0,
		'datetime-local': !0,
		email: !0,
		month: !0,
		number: !0,
		password: !0,
		range: !0,
		search: !0,
		tel: !0,
		text: !0,
		time: !0,
		url: !0,
		week: !0,
	};
	function Uo(t) {
		var e = t && t.nodeName && t.nodeName.toLowerCase();
		return e === 'input' ? !!sm[t.type] : e === 'textarea';
	}
	function No(t, e, n, a) {
		Aa ? (Ma ? Ma.push(a) : (Ma = [a])) : (Aa = a),
			(e = _u(e, 'onChange')),
			0 < e.length &&
				((n = new Ni('onChange', 'change', null, n, a)),
				t.push({ event: n, listeners: e }));
	}
	var _l = null,
		Rl = null;
	function cm(t) {
		yh(t, 0);
	}
	function Bi(t) {
		var e = yl(t);
		if (yo(e)) return t;
	}
	function Lo(t, e) {
		if (t === 'change') return e;
	}
	var Bo = !1;
	if (Pe) {
		var Mr;
		if (Pe) {
			var Or = 'oninput' in document;
			if (!Or) {
				var Ho = document.createElement('div');
				Ho.setAttribute('oninput', 'return;'),
					(Or = typeof Ho.oninput == 'function');
			}
			Mr = Or;
		} else Mr = !1;
		Bo = Mr && (!document.documentMode || 9 < document.documentMode);
	}
	function jo() {
		_l && (_l.detachEvent('onpropertychange', qo), (Rl = _l = null));
	}
	function qo(t) {
		if (t.propertyName === 'value' && Bi(Rl)) {
			var e = [];
			No(e, Rl, t, vr(t)), Ro(cm, e);
		}
	}
	function om(t, e, n) {
		t === 'focusin'
			? (jo(), (_l = e), (Rl = n), _l.attachEvent('onpropertychange', qo))
			: t === 'focusout' && jo();
	}
	function fm(t) {
		if (t === 'selectionchange' || t === 'keyup' || t === 'keydown')
			return Bi(Rl);
	}
	function dm(t, e) {
		if (t === 'click') return Bi(e);
	}
	function hm(t, e) {
		if (t === 'input' || t === 'change') return Bi(e);
	}
	function pm(t, e) {
		return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
	}
	var pe = typeof Object.is == 'function' ? Object.is : pm;
	function El(t, e) {
		if (pe(t, e)) return !0;
		if (
			typeof t != 'object' ||
			t === null ||
			typeof e != 'object' ||
			e === null
		)
			return !1;
		var n = Object.keys(t),
			a = Object.keys(e);
		if (n.length !== a.length) return !1;
		for (a = 0; a < n.length; a++) {
			var i = n[a];
			if (!Ne.call(e, i) || !pe(t[i], e[i])) return !1;
		}
		return !0;
	}
	function Vo(t) {
		for (; t && t.firstChild; ) t = t.firstChild;
		return t;
	}
	function Yo(t, e) {
		var n = Vo(t);
		t = 0;
		for (var a; n; ) {
			if (n.nodeType === 3) {
				if (((a = t + n.textContent.length), t <= e && a >= e))
					return { node: n, offset: e - t };
				t = a;
			}
			t: {
				for (; n; ) {
					if (n.nextSibling) {
						n = n.nextSibling;
						break t;
					}
					n = n.parentNode;
				}
				n = void 0;
			}
			n = Vo(n);
		}
	}
	function Go(t, e) {
		return t && e
			? t === e
				? !0
				: t && t.nodeType === 3
					? !1
					: e && e.nodeType === 3
						? Go(t, e.parentNode)
						: 'contains' in t
							? t.contains(e)
							: t.compareDocumentPosition
								? !!(t.compareDocumentPosition(e) & 16)
								: !1
			: !1;
	}
	function Xo(t) {
		t =
			t != null &&
			t.ownerDocument != null &&
			t.ownerDocument.defaultView != null
				? t.ownerDocument.defaultView
				: window;
		for (var e = zi(t.document); e instanceof t.HTMLIFrameElement; ) {
			try {
				var n = typeof e.contentWindow.location.href == 'string';
			} catch {
				n = !1;
			}
			if (n) t = e.contentWindow;
			else break;
			e = zi(t.document);
		}
		return e;
	}
	function xr(t) {
		var e = t && t.nodeName && t.nodeName.toLowerCase();
		return (
			e &&
			((e === 'input' &&
				(t.type === 'text' ||
					t.type === 'search' ||
					t.type === 'tel' ||
					t.type === 'url' ||
					t.type === 'password')) ||
				e === 'textarea' ||
				t.contentEditable === 'true')
		);
	}
	var ym = Pe && 'documentMode' in document && 11 >= document.documentMode,
		xa = null,
		zr = null,
		Tl = null,
		wr = !1;
	function Qo(t, e, n) {
		var a =
			n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
		wr ||
			xa == null ||
			xa !== zi(a) ||
			((a = xa),
			'selectionStart' in a && xr(a)
				? (a = { start: a.selectionStart, end: a.selectionEnd })
				: ((a = (
						(a.ownerDocument && a.ownerDocument.defaultView) ||
						window
					).getSelection()),
					(a = {
						anchorNode: a.anchorNode,
						anchorOffset: a.anchorOffset,
						focusNode: a.focusNode,
						focusOffset: a.focusOffset,
					})),
			(Tl && El(Tl, a)) ||
				((Tl = a),
				(a = _u(zr, 'onSelect')),
				0 < a.length &&
					((e = new Ni('onSelect', 'select', null, e, n)),
					t.push({ event: e, listeners: a }),
					(e.target = xa))));
	}
	function $n(t, e) {
		var n = {};
		return (
			(n[t.toLowerCase()] = e.toLowerCase()),
			(n['Webkit' + t] = 'webkit' + e),
			(n['Moz' + t] = 'moz' + e),
			n
		);
	}
	var za = {
			animationend: $n('Animation', 'AnimationEnd'),
			animationiteration: $n('Animation', 'AnimationIteration'),
			animationstart: $n('Animation', 'AnimationStart'),
			transitionrun: $n('Transition', 'TransitionRun'),
			transitionstart: $n('Transition', 'TransitionStart'),
			transitioncancel: $n('Transition', 'TransitionCancel'),
			transitionend: $n('Transition', 'TransitionEnd'),
		},
		Dr = {},
		Zo = {};
	Pe &&
		((Zo = document.createElement('div').style),
		'AnimationEvent' in window ||
			(delete za.animationend.animation,
			delete za.animationiteration.animation,
			delete za.animationstart.animation),
		'TransitionEvent' in window || delete za.transitionend.transition);
	function Fn(t) {
		if (Dr[t]) return Dr[t];
		if (!za[t]) return t;
		var e = za[t],
			n;
		for (n in e) if (e.hasOwnProperty(n) && n in Zo) return (Dr[t] = e[n]);
		return t;
	}
	var Ko = Fn('animationend'),
		Jo = Fn('animationiteration'),
		Po = Fn('animationstart'),
		mm = Fn('transitionrun'),
		vm = Fn('transitionstart'),
		gm = Fn('transitioncancel'),
		ko = Fn('transitionend'),
		$o = new Map(),
		Cr =
			'abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
				' ',
			);
	Cr.push('scrollEnd');
	function Le(t, e) {
		$o.set(t, e), Pn(e, [t]);
	}
	var Fo = new WeakMap();
	function Ae(t, e) {
		if (typeof t == 'object' && t !== null) {
			var n = Fo.get(t);
			return n !== void 0
				? n
				: ((e = { value: t, source: e, stack: ho(e) }), Fo.set(t, e), e);
		}
		return { value: t, source: e, stack: ho(e) };
	}
	var Me = [],
		wa = 0,
		Ur = 0;
	function Hi() {
		for (var t = wa, e = (Ur = wa = 0); e < t; ) {
			var n = Me[e];
			Me[e++] = null;
			var a = Me[e];
			Me[e++] = null;
			var i = Me[e];
			Me[e++] = null;
			var s = Me[e];
			if (((Me[e++] = null), a !== null && i !== null)) {
				var f = a.pending;
				f === null ? (i.next = i) : ((i.next = f.next), (f.next = i)),
					(a.pending = i);
			}
			s !== 0 && Wo(n, i, s);
		}
	}
	function ji(t, e, n, a) {
		(Me[wa++] = t),
			(Me[wa++] = e),
			(Me[wa++] = n),
			(Me[wa++] = a),
			(Ur |= a),
			(t.lanes |= a),
			(t = t.alternate),
			t !== null && (t.lanes |= a);
	}
	function Nr(t, e, n, a) {
		return ji(t, e, n, a), qi(t);
	}
	function Da(t, e) {
		return ji(t, null, null, e), qi(t);
	}
	function Wo(t, e, n) {
		t.lanes |= n;
		var a = t.alternate;
		a !== null && (a.lanes |= n);
		for (var i = !1, s = t.return; s !== null; )
			(s.childLanes |= n),
				(a = s.alternate),
				a !== null && (a.childLanes |= n),
				s.tag === 22 &&
					((t = s.stateNode), t === null || t._visibility & 1 || (i = !0)),
				(t = s),
				(s = s.return);
		return t.tag === 3
			? ((s = t.stateNode),
				i &&
					e !== null &&
					((i = 31 - he(n)),
					(t = s.hiddenUpdates),
					(a = t[i]),
					a === null ? (t[i] = [e]) : a.push(e),
					(e.lane = n | 536870912)),
				s)
			: null;
	}
	function qi(t) {
		if (50 < kl) throw ((kl = 0), (Vs = null), Error(c(185)));
		for (var e = t.return; e !== null; ) (t = e), (e = t.return);
		return t.tag === 3 ? t.stateNode : null;
	}
	var Ca = {};
	function Sm(t, e, n, a) {
		(this.tag = t),
			(this.key = n),
			(this.sibling =
				this.child =
				this.return =
				this.stateNode =
				this.type =
				this.elementType =
					null),
			(this.index = 0),
			(this.refCleanup = this.ref = null),
			(this.pendingProps = e),
			(this.dependencies =
				this.memoizedState =
				this.updateQueue =
				this.memoizedProps =
					null),
			(this.mode = a),
			(this.subtreeFlags = this.flags = 0),
			(this.deletions = null),
			(this.childLanes = this.lanes = 0),
			(this.alternate = null);
	}
	function ye(t, e, n, a) {
		return new Sm(t, e, n, a);
	}
	function Lr(t) {
		return (t = t.prototype), !(!t || !t.isReactComponent);
	}
	function ke(t, e) {
		var n = t.alternate;
		return (
			n === null
				? ((n = ye(t.tag, e, t.key, t.mode)),
					(n.elementType = t.elementType),
					(n.type = t.type),
					(n.stateNode = t.stateNode),
					(n.alternate = t),
					(t.alternate = n))
				: ((n.pendingProps = e),
					(n.type = t.type),
					(n.flags = 0),
					(n.subtreeFlags = 0),
					(n.deletions = null)),
			(n.flags = t.flags & 65011712),
			(n.childLanes = t.childLanes),
			(n.lanes = t.lanes),
			(n.child = t.child),
			(n.memoizedProps = t.memoizedProps),
			(n.memoizedState = t.memoizedState),
			(n.updateQueue = t.updateQueue),
			(e = t.dependencies),
			(n.dependencies =
				e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }),
			(n.sibling = t.sibling),
			(n.index = t.index),
			(n.ref = t.ref),
			(n.refCleanup = t.refCleanup),
			n
		);
	}
	function Io(t, e) {
		t.flags &= 65011714;
		var n = t.alternate;
		return (
			n === null
				? ((t.childLanes = 0),
					(t.lanes = e),
					(t.child = null),
					(t.subtreeFlags = 0),
					(t.memoizedProps = null),
					(t.memoizedState = null),
					(t.updateQueue = null),
					(t.dependencies = null),
					(t.stateNode = null))
				: ((t.childLanes = n.childLanes),
					(t.lanes = n.lanes),
					(t.child = n.child),
					(t.subtreeFlags = 0),
					(t.deletions = null),
					(t.memoizedProps = n.memoizedProps),
					(t.memoizedState = n.memoizedState),
					(t.updateQueue = n.updateQueue),
					(t.type = n.type),
					(e = n.dependencies),
					(t.dependencies =
						e === null
							? null
							: { lanes: e.lanes, firstContext: e.firstContext })),
			t
		);
	}
	function Vi(t, e, n, a, i, s) {
		var f = 0;
		if (((a = t), typeof t == 'function')) Lr(t) && (f = 1);
		else if (typeof t == 'string')
			f = _v(t, n, k.current)
				? 26
				: t === 'html' || t === 'head' || t === 'body'
					? 27
					: 5;
		else
			t: switch (t) {
				case ut:
					return (t = ye(31, n, e, i)), (t.elementType = ut), (t.lanes = s), t;
				case D:
					return Wn(n.children, i, s, e);
				case H:
					(f = 8), (i |= 24);
					break;
				case Y:
					return (
						(t = ye(12, n, e, i | 2)), (t.elementType = Y), (t.lanes = s), t
					);
				case P:
					return (t = ye(13, n, e, i)), (t.elementType = P), (t.lanes = s), t;
				case W:
					return (t = ye(19, n, e, i)), (t.elementType = W), (t.lanes = s), t;
				default:
					if (typeof t == 'object' && t !== null)
						switch (t.$$typeof) {
							case F:
							case K:
								f = 10;
								break t;
							case it:
								f = 9;
								break t;
							case lt:
								f = 11;
								break t;
							case Z:
								f = 14;
								break t;
							case Q:
								(f = 16), (a = null);
								break t;
						}
					(f = 29),
						(n = Error(c(130, t === null ? 'null' : typeof t, ''))),
						(a = null);
			}
		return (
			(e = ye(f, n, e, i)), (e.elementType = t), (e.type = a), (e.lanes = s), e
		);
	}
	function Wn(t, e, n, a) {
		return (t = ye(7, t, a, e)), (t.lanes = n), t;
	}
	function Br(t, e, n) {
		return (t = ye(6, t, null, e)), (t.lanes = n), t;
	}
	function Hr(t, e, n) {
		return (
			(e = ye(4, t.children !== null ? t.children : [], t.key, e)),
			(e.lanes = n),
			(e.stateNode = {
				containerInfo: t.containerInfo,
				pendingChildren: null,
				implementation: t.implementation,
			}),
			e
		);
	}
	var Ua = [],
		Na = 0,
		Yi = null,
		Gi = 0,
		Oe = [],
		xe = 0,
		In = null,
		$e = 1,
		Fe = '';
	function ta(t, e) {
		(Ua[Na++] = Gi), (Ua[Na++] = Yi), (Yi = t), (Gi = e);
	}
	function tf(t, e, n) {
		(Oe[xe++] = $e), (Oe[xe++] = Fe), (Oe[xe++] = In), (In = t);
		var a = $e;
		t = Fe;
		var i = 32 - he(a) - 1;
		(a &= ~(1 << i)), (n += 1);
		var s = 32 - he(e) + i;
		if (30 < s) {
			var f = i - (i % 5);
			(s = (a & ((1 << f) - 1)).toString(32)),
				(a >>= f),
				(i -= f),
				($e = (1 << (32 - he(e) + i)) | (n << i) | a),
				(Fe = s + t);
		} else ($e = (1 << s) | (n << i) | a), (Fe = t);
	}
	function jr(t) {
		t.return !== null && (ta(t, 1), tf(t, 1, 0));
	}
	function qr(t) {
		for (; t === Yi; )
			(Yi = Ua[--Na]), (Ua[Na] = null), (Gi = Ua[--Na]), (Ua[Na] = null);
		for (; t === In; )
			(In = Oe[--xe]),
				(Oe[xe] = null),
				(Fe = Oe[--xe]),
				(Oe[xe] = null),
				($e = Oe[--xe]),
				(Oe[xe] = null);
	}
	var le = null,
		Ut = null,
		gt = !1,
		ea = null,
		qe = !1,
		Vr = Error(c(519));
	function na(t) {
		var e = Error(c(418, ''));
		throw (Ol(Ae(e, t)), Vr);
	}
	function ef(t) {
		var e = t.stateNode,
			n = t.type,
			a = t.memoizedProps;
		switch (((e[Wt] = t), (e[ie] = a), n)) {
			case 'dialog':
				dt('cancel', e), dt('close', e);
				break;
			case 'iframe':
			case 'object':
			case 'embed':
				dt('load', e);
				break;
			case 'video':
			case 'audio':
				for (n = 0; n < Fl.length; n++) dt(Fl[n], e);
				break;
			case 'source':
				dt('error', e);
				break;
			case 'img':
			case 'image':
			case 'link':
				dt('error', e), dt('load', e);
				break;
			case 'details':
				dt('toggle', e);
				break;
			case 'input':
				dt('invalid', e),
					mo(
						e,
						a.value,
						a.defaultValue,
						a.checked,
						a.defaultChecked,
						a.type,
						a.name,
						!0,
					),
					xi(e);
				break;
			case 'select':
				dt('invalid', e);
				break;
			case 'textarea':
				dt('invalid', e), go(e, a.value, a.defaultValue, a.children), xi(e);
		}
		(n = a.children),
			(typeof n != 'string' && typeof n != 'number' && typeof n != 'bigint') ||
			e.textContent === '' + n ||
			a.suppressHydrationWarning === !0 ||
			Sh(e.textContent, n)
				? (a.popover != null && (dt('beforetoggle', e), dt('toggle', e)),
					a.onScroll != null && dt('scroll', e),
					a.onScrollEnd != null && dt('scrollend', e),
					a.onClick != null && (e.onclick = Ru),
					(e = !0))
				: (e = !1),
			e || na(t);
	}
	function nf(t) {
		for (le = t.return; le; )
			switch (le.tag) {
				case 5:
				case 13:
					qe = !1;
					return;
				case 27:
				case 3:
					qe = !0;
					return;
				default:
					le = le.return;
			}
	}
	function Al(t) {
		if (t !== le) return !1;
		if (!gt) return nf(t), (gt = !0), !1;
		var e = t.tag,
			n;
		if (
			((n = e !== 3 && e !== 27) &&
				((n = e === 5) &&
					((n = t.type),
					(n =
						!(n !== 'form' && n !== 'button') || nc(t.type, t.memoizedProps))),
				(n = !n)),
			n && Ut && na(t),
			nf(t),
			e === 13)
		) {
			if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
				throw Error(c(317));
			t: {
				for (t = t.nextSibling, e = 0; t; ) {
					if (t.nodeType === 8)
						if (((n = t.data), n === '/$')) {
							if (e === 0) {
								Ut = He(t.nextSibling);
								break t;
							}
							e--;
						} else (n !== '$' && n !== '$!' && n !== '$?') || e++;
					t = t.nextSibling;
				}
				Ut = null;
			}
		} else
			e === 27
				? ((e = Ut), wn(t.type) ? ((t = uc), (uc = null), (Ut = t)) : (Ut = e))
				: (Ut = le ? He(t.stateNode.nextSibling) : null);
		return !0;
	}
	function Ml() {
		(Ut = le = null), (gt = !1);
	}
	function af() {
		var t = ea;
		return (
			t !== null &&
				(ce === null ? (ce = t) : ce.push.apply(ce, t), (ea = null)),
			t
		);
	}
	function Ol(t) {
		ea === null ? (ea = [t]) : ea.push(t);
	}
	var Yr = B(null),
		aa = null,
		We = null;
	function yn(t, e, n) {
		q(Yr, e._currentValue), (e._currentValue = n);
	}
	function Ie(t) {
		(t._currentValue = Yr.current), G(Yr);
	}
	function Gr(t, e, n) {
		for (; t !== null; ) {
			var a = t.alternate;
			if (
				((t.childLanes & e) !== e
					? ((t.childLanes |= e), a !== null && (a.childLanes |= e))
					: a !== null && (a.childLanes & e) !== e && (a.childLanes |= e),
				t === n)
			)
				break;
			t = t.return;
		}
	}
	function Xr(t, e, n, a) {
		var i = t.child;
		for (i !== null && (i.return = t); i !== null; ) {
			var s = i.dependencies;
			if (s !== null) {
				var f = i.child;
				s = s.firstContext;
				t: for (; s !== null; ) {
					var m = s;
					s = i;
					for (var R = 0; R < e.length; R++)
						if (m.context === e[R]) {
							(s.lanes |= n),
								(m = s.alternate),
								m !== null && (m.lanes |= n),
								Gr(s.return, n, t),
								a || (f = null);
							break t;
						}
					s = m.next;
				}
			} else if (i.tag === 18) {
				if (((f = i.return), f === null)) throw Error(c(341));
				(f.lanes |= n),
					(s = f.alternate),
					s !== null && (s.lanes |= n),
					Gr(f, n, t),
					(f = null);
			} else f = i.child;
			if (f !== null) f.return = i;
			else
				for (f = i; f !== null; ) {
					if (f === t) {
						f = null;
						break;
					}
					if (((i = f.sibling), i !== null)) {
						(i.return = f.return), (f = i);
						break;
					}
					f = f.return;
				}
			i = f;
		}
	}
	function xl(t, e, n, a) {
		t = null;
		for (var i = e, s = !1; i !== null; ) {
			if (!s) {
				if ((i.flags & 524288) !== 0) s = !0;
				else if ((i.flags & 262144) !== 0) break;
			}
			if (i.tag === 10) {
				var f = i.alternate;
				if (f === null) throw Error(c(387));
				if (((f = f.memoizedProps), f !== null)) {
					var m = i.type;
					pe(i.pendingProps.value, f.value) ||
						(t !== null ? t.push(m) : (t = [m]));
				}
			} else if (i === Qt.current) {
				if (((f = i.alternate), f === null)) throw Error(c(387));
				f.memoizedState.memoizedState !== i.memoizedState.memoizedState &&
					(t !== null ? t.push(ai) : (t = [ai]));
			}
			i = i.return;
		}
		t !== null && Xr(e, t, n, a), (e.flags |= 262144);
	}
	function Xi(t) {
		for (t = t.firstContext; t !== null; ) {
			if (!pe(t.context._currentValue, t.memoizedValue)) return !0;
			t = t.next;
		}
		return !1;
	}
	function la(t) {
		(aa = t),
			(We = null),
			(t = t.dependencies),
			t !== null && (t.firstContext = null);
	}
	function It(t) {
		return lf(aa, t);
	}
	function Qi(t, e) {
		return aa === null && la(t), lf(t, e);
	}
	function lf(t, e) {
		var n = e._currentValue;
		if (((e = { context: e, memoizedValue: n, next: null }), We === null)) {
			if (t === null) throw Error(c(308));
			(We = e),
				(t.dependencies = { lanes: 0, firstContext: e }),
				(t.flags |= 524288);
		} else We = We.next = e;
		return n;
	}
	var bm =
			typeof AbortController < 'u'
				? AbortController
				: function () {
						var t = [],
							e = (this.signal = {
								aborted: !1,
								addEventListener: function (n, a) {
									t.push(a);
								},
							});
						this.abort = function () {
							(e.aborted = !0),
								t.forEach(function (n) {
									return n();
								});
						};
					},
		_m = l.unstable_scheduleCallback,
		Rm = l.unstable_NormalPriority,
		Gt = {
			$$typeof: K,
			Consumer: null,
			Provider: null,
			_currentValue: null,
			_currentValue2: null,
			_threadCount: 0,
		};
	function Qr() {
		return { controller: new bm(), data: new Map(), refCount: 0 };
	}
	function zl(t) {
		t.refCount--,
			t.refCount === 0 &&
				_m(Rm, function () {
					t.controller.abort();
				});
	}
	var wl = null,
		Zr = 0,
		La = 0,
		Ba = null;
	function Em(t, e) {
		if (wl === null) {
			var n = (wl = []);
			(Zr = 0),
				(La = Js()),
				(Ba = {
					status: 'pending',
					value: void 0,
					then: function (a) {
						n.push(a);
					},
				});
		}
		return Zr++, e.then(uf, uf), e;
	}
	function uf() {
		if (--Zr === 0 && wl !== null) {
			Ba !== null && (Ba.status = 'fulfilled');
			var t = wl;
			(wl = null), (La = 0), (Ba = null);
			for (var e = 0; e < t.length; e++) (0, t[e])();
		}
	}
	function Tm(t, e) {
		var n = [],
			a = {
				status: 'pending',
				value: null,
				reason: null,
				then: function (i) {
					n.push(i);
				},
			};
		return (
			t.then(
				function () {
					(a.status = 'fulfilled'), (a.value = e);
					for (var i = 0; i < n.length; i++) (0, n[i])(e);
				},
				function (i) {
					for (a.status = 'rejected', a.reason = i, i = 0; i < n.length; i++)
						(0, n[i])(void 0);
				},
			),
			a
		);
	}
	var rf = C.S;
	C.S = function (t, e) {
		typeof e == 'object' &&
			e !== null &&
			typeof e.then == 'function' &&
			Em(t, e),
			rf !== null && rf(t, e);
	};
	var ia = B(null);
	function Kr() {
		var t = ia.current;
		return t !== null ? t : zt.pooledCache;
	}
	function Zi(t, e) {
		e === null ? q(ia, ia.current) : q(ia, e.pool);
	}
	function sf() {
		var t = Kr();
		return t === null ? null : { parent: Gt._currentValue, pool: t };
	}
	var Dl = Error(c(460)),
		cf = Error(c(474)),
		Ki = Error(c(542)),
		Jr = { then: function () {} };
	function of(t) {
		return (t = t.status), t === 'fulfilled' || t === 'rejected';
	}
	function Ji() {}
	function ff(t, e, n) {
		switch (
			((n = t[n]),
			n === void 0 ? t.push(e) : n !== e && (e.then(Ji, Ji), (e = n)),
			e.status)
		) {
			case 'fulfilled':
				return e.value;
			case 'rejected':
				throw ((t = e.reason), hf(t), t);
			default:
				if (typeof e.status == 'string') e.then(Ji, Ji);
				else {
					if (((t = zt), t !== null && 100 < t.shellSuspendCounter))
						throw Error(c(482));
					(t = e),
						(t.status = 'pending'),
						t.then(
							function (a) {
								if (e.status === 'pending') {
									var i = e;
									(i.status = 'fulfilled'), (i.value = a);
								}
							},
							function (a) {
								if (e.status === 'pending') {
									var i = e;
									(i.status = 'rejected'), (i.reason = a);
								}
							},
						);
				}
				switch (e.status) {
					case 'fulfilled':
						return e.value;
					case 'rejected':
						throw ((t = e.reason), hf(t), t);
				}
				throw ((Cl = e), Dl);
		}
	}
	var Cl = null;
	function df() {
		if (Cl === null) throw Error(c(459));
		var t = Cl;
		return (Cl = null), t;
	}
	function hf(t) {
		if (t === Dl || t === Ki) throw Error(c(483));
	}
	var mn = !1;
	function Pr(t) {
		t.updateQueue = {
			baseState: t.memoizedState,
			firstBaseUpdate: null,
			lastBaseUpdate: null,
			shared: { pending: null, lanes: 0, hiddenCallbacks: null },
			callbacks: null,
		};
	}
	function kr(t, e) {
		(t = t.updateQueue),
			e.updateQueue === t &&
				(e.updateQueue = {
					baseState: t.baseState,
					firstBaseUpdate: t.firstBaseUpdate,
					lastBaseUpdate: t.lastBaseUpdate,
					shared: t.shared,
					callbacks: null,
				});
	}
	function vn(t) {
		return { lane: t, tag: 0, payload: null, callback: null, next: null };
	}
	function gn(t, e, n) {
		var a = t.updateQueue;
		if (a === null) return null;
		if (((a = a.shared), (Rt & 2) !== 0)) {
			var i = a.pending;
			return (
				i === null ? (e.next = e) : ((e.next = i.next), (i.next = e)),
				(a.pending = e),
				(e = qi(t)),
				Wo(t, null, n),
				e
			);
		}
		return ji(t, a, e, n), qi(t);
	}
	function Ul(t, e, n) {
		if (
			((e = e.updateQueue), e !== null && ((e = e.shared), (n & 4194048) !== 0))
		) {
			var a = e.lanes;
			(a &= t.pendingLanes), (n |= a), (e.lanes = n), lo(t, n);
		}
	}
	function $r(t, e) {
		var n = t.updateQueue,
			a = t.alternate;
		if (a !== null && ((a = a.updateQueue), n === a)) {
			var i = null,
				s = null;
			if (((n = n.firstBaseUpdate), n !== null)) {
				do {
					var f = {
						lane: n.lane,
						tag: n.tag,
						payload: n.payload,
						callback: null,
						next: null,
					};
					s === null ? (i = s = f) : (s = s.next = f), (n = n.next);
				} while (n !== null);
				s === null ? (i = s = e) : (s = s.next = e);
			} else i = s = e;
			(n = {
				baseState: a.baseState,
				firstBaseUpdate: i,
				lastBaseUpdate: s,
				shared: a.shared,
				callbacks: a.callbacks,
			}),
				(t.updateQueue = n);
			return;
		}
		(t = n.lastBaseUpdate),
			t === null ? (n.firstBaseUpdate = e) : (t.next = e),
			(n.lastBaseUpdate = e);
	}
	var Fr = !1;
	function Nl() {
		if (Fr) {
			var t = Ba;
			if (t !== null) throw t;
		}
	}
	function Ll(t, e, n, a) {
		Fr = !1;
		var i = t.updateQueue;
		mn = !1;
		var s = i.firstBaseUpdate,
			f = i.lastBaseUpdate,
			m = i.shared.pending;
		if (m !== null) {
			i.shared.pending = null;
			var R = m,
				x = R.next;
			(R.next = null), f === null ? (s = x) : (f.next = x), (f = R);
			var U = t.alternate;
			U !== null &&
				((U = U.updateQueue),
				(m = U.lastBaseUpdate),
				m !== f &&
					(m === null ? (U.firstBaseUpdate = x) : (m.next = x),
					(U.lastBaseUpdate = R)));
		}
		if (s !== null) {
			var L = i.baseState;
			(f = 0), (U = x = R = null), (m = s);
			do {
				var z = m.lane & -536870913,
					w = z !== m.lane;
				if (w ? (yt & z) === z : (a & z) === z) {
					z !== 0 && z === La && (Fr = !0),
						U !== null &&
							(U = U.next =
								{
									lane: 0,
									tag: m.tag,
									payload: m.payload,
									callback: null,
									next: null,
								});
					t: {
						var at = t,
							I = m;
						z = e;
						var Ot = n;
						switch (I.tag) {
							case 1:
								if (((at = I.payload), typeof at == 'function')) {
									L = at.call(Ot, L, z);
									break t;
								}
								L = at;
								break t;
							case 3:
								at.flags = (at.flags & -65537) | 128;
							case 0:
								if (
									((at = I.payload),
									(z = typeof at == 'function' ? at.call(Ot, L, z) : at),
									z == null)
								)
									break t;
								L = g({}, L, z);
								break t;
							case 2:
								mn = !0;
						}
					}
					(z = m.callback),
						z !== null &&
							((t.flags |= 64),
							w && (t.flags |= 8192),
							(w = i.callbacks),
							w === null ? (i.callbacks = [z]) : w.push(z));
				} else
					(w = {
						lane: z,
						tag: m.tag,
						payload: m.payload,
						callback: m.callback,
						next: null,
					}),
						U === null ? ((x = U = w), (R = L)) : (U = U.next = w),
						(f |= z);
				if (((m = m.next), m === null)) {
					if (((m = i.shared.pending), m === null)) break;
					(w = m),
						(m = w.next),
						(w.next = null),
						(i.lastBaseUpdate = w),
						(i.shared.pending = null);
				}
			} while (!0);
			U === null && (R = L),
				(i.baseState = R),
				(i.firstBaseUpdate = x),
				(i.lastBaseUpdate = U),
				s === null && (i.shared.lanes = 0),
				(Mn |= f),
				(t.lanes = f),
				(t.memoizedState = L);
		}
	}
	function pf(t, e) {
		if (typeof t != 'function') throw Error(c(191, t));
		t.call(e);
	}
	function yf(t, e) {
		var n = t.callbacks;
		if (n !== null)
			for (t.callbacks = null, t = 0; t < n.length; t++) pf(n[t], e);
	}
	var Ha = B(null),
		Pi = B(0);
	function mf(t, e) {
		(t = rn), q(Pi, t), q(Ha, e), (rn = t | e.baseLanes);
	}
	function Wr() {
		q(Pi, rn), q(Ha, Ha.current);
	}
	function Ir() {
		(rn = Pi.current), G(Ha), G(Pi);
	}
	var Sn = 0,
		st = null,
		At = null,
		jt = null,
		ki = !1,
		ja = !1,
		ua = !1,
		$i = 0,
		Bl = 0,
		qa = null,
		Am = 0;
	function Lt() {
		throw Error(c(321));
	}
	function ts(t, e) {
		if (e === null) return !1;
		for (var n = 0; n < e.length && n < t.length; n++)
			if (!pe(t[n], e[n])) return !1;
		return !0;
	}
	function es(t, e, n, a, i, s) {
		return (
			(Sn = s),
			(st = e),
			(e.memoizedState = null),
			(e.updateQueue = null),
			(e.lanes = 0),
			(C.H = t === null || t.memoizedState === null ? If : td),
			(ua = !1),
			(s = n(a, i)),
			(ua = !1),
			ja && (s = gf(e, n, a, i)),
			vf(t),
			s
		);
	}
	function vf(t) {
		C.H = nu;
		var e = At !== null && At.next !== null;
		if (((Sn = 0), (jt = At = st = null), (ki = !1), (Bl = 0), (qa = null), e))
			throw Error(c(300));
		t === null ||
			Kt ||
			((t = t.dependencies), t !== null && Xi(t) && (Kt = !0));
	}
	function gf(t, e, n, a) {
		st = t;
		var i = 0;
		do {
			if ((ja && (qa = null), (Bl = 0), (ja = !1), 25 <= i))
				throw Error(c(301));
			if (((i += 1), (jt = At = null), t.updateQueue != null)) {
				var s = t.updateQueue;
				(s.lastEffect = null),
					(s.events = null),
					(s.stores = null),
					s.memoCache != null && (s.memoCache.index = 0);
			}
			(C.H = Cm), (s = e(n, a));
		} while (ja);
		return s;
	}
	function Mm() {
		var t = C.H,
			e = t.useState()[0];
		return (
			(e = typeof e.then == 'function' ? Hl(e) : e),
			(t = t.useState()[0]),
			(At !== null ? At.memoizedState : null) !== t && (st.flags |= 1024),
			e
		);
	}
	function ns() {
		var t = $i !== 0;
		return ($i = 0), t;
	}
	function as(t, e, n) {
		(e.updateQueue = t.updateQueue), (e.flags &= -2053), (t.lanes &= ~n);
	}
	function ls(t) {
		if (ki) {
			for (t = t.memoizedState; t !== null; ) {
				var e = t.queue;
				e !== null && (e.pending = null), (t = t.next);
			}
			ki = !1;
		}
		(Sn = 0), (jt = At = st = null), (ja = !1), (Bl = $i = 0), (qa = null);
	}
	function re() {
		var t = {
			memoizedState: null,
			baseState: null,
			baseQueue: null,
			queue: null,
			next: null,
		};
		return jt === null ? (st.memoizedState = jt = t) : (jt = jt.next = t), jt;
	}
	function qt() {
		if (At === null) {
			var t = st.alternate;
			t = t !== null ? t.memoizedState : null;
		} else t = At.next;
		var e = jt === null ? st.memoizedState : jt.next;
		if (e !== null) (jt = e), (At = t);
		else {
			if (t === null)
				throw st.alternate === null ? Error(c(467)) : Error(c(310));
			(At = t),
				(t = {
					memoizedState: At.memoizedState,
					baseState: At.baseState,
					baseQueue: At.baseQueue,
					queue: At.queue,
					next: null,
				}),
				jt === null ? (st.memoizedState = jt = t) : (jt = jt.next = t);
		}
		return jt;
	}
	function is() {
		return { lastEffect: null, events: null, stores: null, memoCache: null };
	}
	function Hl(t) {
		var e = Bl;
		return (
			(Bl += 1),
			qa === null && (qa = []),
			(t = ff(qa, t, e)),
			(e = st),
			(jt === null ? e.memoizedState : jt.next) === null &&
				((e = e.alternate),
				(C.H = e === null || e.memoizedState === null ? If : td)),
			t
		);
	}
	function Fi(t) {
		if (t !== null && typeof t == 'object') {
			if (typeof t.then == 'function') return Hl(t);
			if (t.$$typeof === K) return It(t);
		}
		throw Error(c(438, String(t)));
	}
	function us(t) {
		var e = null,
			n = st.updateQueue;
		if ((n !== null && (e = n.memoCache), e == null)) {
			var a = st.alternate;
			a !== null &&
				((a = a.updateQueue),
				a !== null &&
					((a = a.memoCache),
					a != null &&
						(e = {
							data: a.data.map(function (i) {
								return i.slice();
							}),
							index: 0,
						})));
		}
		if (
			(e == null && (e = { data: [], index: 0 }),
			n === null && ((n = is()), (st.updateQueue = n)),
			(n.memoCache = e),
			(n = e.data[e.index]),
			n === void 0)
		)
			for (n = e.data[e.index] = Array(t), a = 0; a < t; a++) n[a] = ht;
		return e.index++, n;
	}
	function tn(t, e) {
		return typeof e == 'function' ? e(t) : e;
	}
	function Wi(t) {
		var e = qt();
		return rs(e, At, t);
	}
	function rs(t, e, n) {
		var a = t.queue;
		if (a === null) throw Error(c(311));
		a.lastRenderedReducer = n;
		var i = t.baseQueue,
			s = a.pending;
		if (s !== null) {
			if (i !== null) {
				var f = i.next;
				(i.next = s.next), (s.next = f);
			}
			(e.baseQueue = i = s), (a.pending = null);
		}
		if (((s = t.baseState), i === null)) t.memoizedState = s;
		else {
			e = i.next;
			var m = (f = null),
				R = null,
				x = e,
				U = !1;
			do {
				var L = x.lane & -536870913;
				if (L !== x.lane ? (yt & L) === L : (Sn & L) === L) {
					var z = x.revertLane;
					if (z === 0)
						R !== null &&
							(R = R.next =
								{
									lane: 0,
									revertLane: 0,
									action: x.action,
									hasEagerState: x.hasEagerState,
									eagerState: x.eagerState,
									next: null,
								}),
							L === La && (U = !0);
					else if ((Sn & z) === z) {
						(x = x.next), z === La && (U = !0);
						continue;
					} else
						(L = {
							lane: 0,
							revertLane: x.revertLane,
							action: x.action,
							hasEagerState: x.hasEagerState,
							eagerState: x.eagerState,
							next: null,
						}),
							R === null ? ((m = R = L), (f = s)) : (R = R.next = L),
							(st.lanes |= z),
							(Mn |= z);
					(L = x.action),
						ua && n(s, L),
						(s = x.hasEagerState ? x.eagerState : n(s, L));
				} else
					(z = {
						lane: L,
						revertLane: x.revertLane,
						action: x.action,
						hasEagerState: x.hasEagerState,
						eagerState: x.eagerState,
						next: null,
					}),
						R === null ? ((m = R = z), (f = s)) : (R = R.next = z),
						(st.lanes |= L),
						(Mn |= L);
				x = x.next;
			} while (x !== null && x !== e);
			if (
				(R === null ? (f = s) : (R.next = m),
				!pe(s, t.memoizedState) && ((Kt = !0), U && ((n = Ba), n !== null)))
			)
				throw n;
			(t.memoizedState = s),
				(t.baseState = f),
				(t.baseQueue = R),
				(a.lastRenderedState = s);
		}
		return i === null && (a.lanes = 0), [t.memoizedState, a.dispatch];
	}
	function ss(t) {
		var e = qt(),
			n = e.queue;
		if (n === null) throw Error(c(311));
		n.lastRenderedReducer = t;
		var a = n.dispatch,
			i = n.pending,
			s = e.memoizedState;
		if (i !== null) {
			n.pending = null;
			var f = (i = i.next);
			do (s = t(s, f.action)), (f = f.next);
			while (f !== i);
			pe(s, e.memoizedState) || (Kt = !0),
				(e.memoizedState = s),
				e.baseQueue === null && (e.baseState = s),
				(n.lastRenderedState = s);
		}
		return [s, a];
	}
	function Sf(t, e, n) {
		var a = st,
			i = qt(),
			s = gt;
		if (s) {
			if (n === void 0) throw Error(c(407));
			n = n();
		} else n = e();
		var f = !pe((At || i).memoizedState, n);
		f && ((i.memoizedState = n), (Kt = !0)), (i = i.queue);
		var m = Rf.bind(null, a, i, t);
		if (
			(jl(2048, 8, m, [t]),
			i.getSnapshot !== e || f || (jt !== null && jt.memoizedState.tag & 1))
		) {
			if (
				((a.flags |= 2048),
				Va(9, Ii(), _f.bind(null, a, i, n, e), null),
				zt === null)
			)
				throw Error(c(349));
			s || (Sn & 124) !== 0 || bf(a, e, n);
		}
		return n;
	}
	function bf(t, e, n) {
		(t.flags |= 16384),
			(t = { getSnapshot: e, value: n }),
			(e = st.updateQueue),
			e === null
				? ((e = is()), (st.updateQueue = e), (e.stores = [t]))
				: ((n = e.stores), n === null ? (e.stores = [t]) : n.push(t));
	}
	function _f(t, e, n, a) {
		(e.value = n), (e.getSnapshot = a), Ef(e) && Tf(t);
	}
	function Rf(t, e, n) {
		return n(function () {
			Ef(e) && Tf(t);
		});
	}
	function Ef(t) {
		var e = t.getSnapshot;
		t = t.value;
		try {
			var n = e();
			return !pe(t, n);
		} catch {
			return !0;
		}
	}
	function Tf(t) {
		var e = Da(t, 2);
		e !== null && be(e, t, 2);
	}
	function cs(t) {
		var e = re();
		if (typeof t == 'function') {
			var n = t;
			if (((t = n()), ua)) {
				dn(!0);
				try {
					n();
				} finally {
					dn(!1);
				}
			}
		}
		return (
			(e.memoizedState = e.baseState = t),
			(e.queue = {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: tn,
				lastRenderedState: t,
			}),
			e
		);
	}
	function Af(t, e, n, a) {
		return (t.baseState = n), rs(t, At, typeof a == 'function' ? a : tn);
	}
	function Om(t, e, n, a, i) {
		if (eu(t)) throw Error(c(485));
		if (((t = e.action), t !== null)) {
			var s = {
				payload: i,
				action: t,
				next: null,
				isTransition: !0,
				status: 'pending',
				value: null,
				reason: null,
				listeners: [],
				then: function (f) {
					s.listeners.push(f);
				},
			};
			C.T !== null ? n(!0) : (s.isTransition = !1),
				a(s),
				(n = e.pending),
				n === null
					? ((s.next = e.pending = s), Mf(e, s))
					: ((s.next = n.next), (e.pending = n.next = s));
		}
	}
	function Mf(t, e) {
		var n = e.action,
			a = e.payload,
			i = t.state;
		if (e.isTransition) {
			var s = C.T,
				f = {};
			C.T = f;
			try {
				var m = n(i, a),
					R = C.S;
				R !== null && R(f, m), Of(t, e, m);
			} catch (x) {
				os(t, e, x);
			} finally {
				C.T = s;
			}
		} else
			try {
				(s = n(i, a)), Of(t, e, s);
			} catch (x) {
				os(t, e, x);
			}
	}
	function Of(t, e, n) {
		n !== null && typeof n == 'object' && typeof n.then == 'function'
			? n.then(
					function (a) {
						xf(t, e, a);
					},
					function (a) {
						return os(t, e, a);
					},
				)
			: xf(t, e, n);
	}
	function xf(t, e, n) {
		(e.status = 'fulfilled'),
			(e.value = n),
			zf(e),
			(t.state = n),
			(e = t.pending),
			e !== null &&
				((n = e.next),
				n === e ? (t.pending = null) : ((n = n.next), (e.next = n), Mf(t, n)));
	}
	function os(t, e, n) {
		var a = t.pending;
		if (((t.pending = null), a !== null)) {
			a = a.next;
			do (e.status = 'rejected'), (e.reason = n), zf(e), (e = e.next);
			while (e !== a);
		}
		t.action = null;
	}
	function zf(t) {
		t = t.listeners;
		for (var e = 0; e < t.length; e++) (0, t[e])();
	}
	function wf(t, e) {
		return e;
	}
	function Df(t, e) {
		if (gt) {
			var n = zt.formState;
			if (n !== null) {
				t: {
					var a = st;
					if (gt) {
						if (Ut) {
							e: {
								for (var i = Ut, s = qe; i.nodeType !== 8; ) {
									if (!s) {
										i = null;
										break e;
									}
									if (((i = He(i.nextSibling)), i === null)) {
										i = null;
										break e;
									}
								}
								(s = i.data), (i = s === 'F!' || s === 'F' ? i : null);
							}
							if (i) {
								(Ut = He(i.nextSibling)), (a = i.data === 'F!');
								break t;
							}
						}
						na(a);
					}
					a = !1;
				}
				a && (e = n[0]);
			}
		}
		return (
			(n = re()),
			(n.memoizedState = n.baseState = e),
			(a = {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: wf,
				lastRenderedState: e,
			}),
			(n.queue = a),
			(n = $f.bind(null, st, a)),
			(a.dispatch = n),
			(a = cs(!1)),
			(s = ys.bind(null, st, !1, a.queue)),
			(a = re()),
			(i = { state: e, dispatch: null, action: t, pending: null }),
			(a.queue = i),
			(n = Om.bind(null, st, i, s, n)),
			(i.dispatch = n),
			(a.memoizedState = t),
			[e, n, !1]
		);
	}
	function Cf(t) {
		var e = qt();
		return Uf(e, At, t);
	}
	function Uf(t, e, n) {
		if (
			((e = rs(t, e, wf)[0]),
			(t = Wi(tn)[0]),
			typeof e == 'object' && e !== null && typeof e.then == 'function')
		)
			try {
				var a = Hl(e);
			} catch (f) {
				throw f === Dl ? Ki : f;
			}
		else a = e;
		e = qt();
		var i = e.queue,
			s = i.dispatch;
		return (
			n !== e.memoizedState &&
				((st.flags |= 2048), Va(9, Ii(), xm.bind(null, i, n), null)),
			[a, s, t]
		);
	}
	function xm(t, e) {
		t.action = e;
	}
	function Nf(t) {
		var e = qt(),
			n = At;
		if (n !== null) return Uf(e, n, t);
		qt(), (e = e.memoizedState), (n = qt());
		var a = n.queue.dispatch;
		return (n.memoizedState = t), [e, a, !1];
	}
	function Va(t, e, n, a) {
		return (
			(t = { tag: t, create: n, deps: a, inst: e, next: null }),
			(e = st.updateQueue),
			e === null && ((e = is()), (st.updateQueue = e)),
			(n = e.lastEffect),
			n === null
				? (e.lastEffect = t.next = t)
				: ((a = n.next), (n.next = t), (t.next = a), (e.lastEffect = t)),
			t
		);
	}
	function Ii() {
		return { destroy: void 0, resource: void 0 };
	}
	function Lf() {
		return qt().memoizedState;
	}
	function tu(t, e, n, a) {
		var i = re();
		(a = a === void 0 ? null : a),
			(st.flags |= t),
			(i.memoizedState = Va(1 | e, Ii(), n, a));
	}
	function jl(t, e, n, a) {
		var i = qt();
		a = a === void 0 ? null : a;
		var s = i.memoizedState.inst;
		At !== null && a !== null && ts(a, At.memoizedState.deps)
			? (i.memoizedState = Va(e, s, n, a))
			: ((st.flags |= t), (i.memoizedState = Va(1 | e, s, n, a)));
	}
	function Bf(t, e) {
		tu(8390656, 8, t, e);
	}
	function Hf(t, e) {
		jl(2048, 8, t, e);
	}
	function jf(t, e) {
		return jl(4, 2, t, e);
	}
	function qf(t, e) {
		return jl(4, 4, t, e);
	}
	function Vf(t, e) {
		if (typeof e == 'function') {
			t = t();
			var n = e(t);
			return function () {
				typeof n == 'function' ? n() : e(null);
			};
		}
		if (e != null)
			return (
				(t = t()),
				(e.current = t),
				function () {
					e.current = null;
				}
			);
	}
	function Yf(t, e, n) {
		(n = n != null ? n.concat([t]) : null), jl(4, 4, Vf.bind(null, e, t), n);
	}
	function fs() {}
	function Gf(t, e) {
		var n = qt();
		e = e === void 0 ? null : e;
		var a = n.memoizedState;
		return e !== null && ts(e, a[1]) ? a[0] : ((n.memoizedState = [t, e]), t);
	}
	function Xf(t, e) {
		var n = qt();
		e = e === void 0 ? null : e;
		var a = n.memoizedState;
		if (e !== null && ts(e, a[1])) return a[0];
		if (((a = t()), ua)) {
			dn(!0);
			try {
				t();
			} finally {
				dn(!1);
			}
		}
		return (n.memoizedState = [a, e]), a;
	}
	function ds(t, e, n) {
		return n === void 0 || (Sn & 1073741824) !== 0
			? (t.memoizedState = e)
			: ((t.memoizedState = n), (t = Kd()), (st.lanes |= t), (Mn |= t), n);
	}
	function Qf(t, e, n, a) {
		return pe(n, e)
			? n
			: Ha.current !== null
				? ((t = ds(t, n, a)), pe(t, e) || (Kt = !0), t)
				: (Sn & 42) === 0
					? ((Kt = !0), (t.memoizedState = n))
					: ((t = Kd()), (st.lanes |= t), (Mn |= t), e);
	}
	function Zf(t, e, n, a, i) {
		var s = V.p;
		V.p = s !== 0 && 8 > s ? s : 8;
		var f = C.T,
			m = {};
		(C.T = m), ys(t, !1, e, n);
		try {
			var R = i(),
				x = C.S;
			if (
				(x !== null && x(m, R),
				R !== null && typeof R == 'object' && typeof R.then == 'function')
			) {
				var U = Tm(R, a);
				ql(t, e, U, Se(t));
			} else ql(t, e, a, Se(t));
		} catch (L) {
			ql(t, e, { then: function () {}, status: 'rejected', reason: L }, Se());
		} finally {
			(V.p = s), (C.T = f);
		}
	}
	function zm() {}
	function hs(t, e, n, a) {
		if (t.tag !== 5) throw Error(c(476));
		var i = Kf(t).queue;
		Zf(
			t,
			i,
			e,
			tt,
			n === null
				? zm
				: function () {
						return Jf(t), n(a);
					},
		);
	}
	function Kf(t) {
		var e = t.memoizedState;
		if (e !== null) return e;
		e = {
			memoizedState: tt,
			baseState: tt,
			baseQueue: null,
			queue: {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: tn,
				lastRenderedState: tt,
			},
			next: null,
		};
		var n = {};
		return (
			(e.next = {
				memoizedState: n,
				baseState: n,
				baseQueue: null,
				queue: {
					pending: null,
					lanes: 0,
					dispatch: null,
					lastRenderedReducer: tn,
					lastRenderedState: n,
				},
				next: null,
			}),
			(t.memoizedState = e),
			(t = t.alternate),
			t !== null && (t.memoizedState = e),
			e
		);
	}
	function Jf(t) {
		var e = Kf(t).next.queue;
		ql(t, e, {}, Se());
	}
	function ps() {
		return It(ai);
	}
	function Pf() {
		return qt().memoizedState;
	}
	function kf() {
		return qt().memoizedState;
	}
	function wm(t) {
		for (var e = t.return; e !== null; ) {
			switch (e.tag) {
				case 24:
				case 3:
					var n = Se();
					t = vn(n);
					var a = gn(e, t, n);
					a !== null && (be(a, e, n), Ul(a, e, n)),
						(e = { cache: Qr() }),
						(t.payload = e);
					return;
			}
			e = e.return;
		}
	}
	function Dm(t, e, n) {
		var a = Se();
		(n = {
			lane: a,
			revertLane: 0,
			action: n,
			hasEagerState: !1,
			eagerState: null,
			next: null,
		}),
			eu(t)
				? Ff(e, n)
				: ((n = Nr(t, e, n, a)), n !== null && (be(n, t, a), Wf(n, e, a)));
	}
	function $f(t, e, n) {
		var a = Se();
		ql(t, e, n, a);
	}
	function ql(t, e, n, a) {
		var i = {
			lane: a,
			revertLane: 0,
			action: n,
			hasEagerState: !1,
			eagerState: null,
			next: null,
		};
		if (eu(t)) Ff(e, i);
		else {
			var s = t.alternate;
			if (
				t.lanes === 0 &&
				(s === null || s.lanes === 0) &&
				((s = e.lastRenderedReducer), s !== null)
			)
				try {
					var f = e.lastRenderedState,
						m = s(f, n);
					if (((i.hasEagerState = !0), (i.eagerState = m), pe(m, f)))
						return ji(t, e, i, 0), zt === null && Hi(), !1;
				} catch {
				} finally {
				}
			if (((n = Nr(t, e, i, a)), n !== null))
				return be(n, t, a), Wf(n, e, a), !0;
		}
		return !1;
	}
	function ys(t, e, n, a) {
		if (
			((a = {
				lane: 2,
				revertLane: Js(),
				action: a,
				hasEagerState: !1,
				eagerState: null,
				next: null,
			}),
			eu(t))
		) {
			if (e) throw Error(c(479));
		} else (e = Nr(t, n, a, 2)), e !== null && be(e, t, 2);
	}
	function eu(t) {
		var e = t.alternate;
		return t === st || (e !== null && e === st);
	}
	function Ff(t, e) {
		ja = ki = !0;
		var n = t.pending;
		n === null ? (e.next = e) : ((e.next = n.next), (n.next = e)),
			(t.pending = e);
	}
	function Wf(t, e, n) {
		if ((n & 4194048) !== 0) {
			var a = e.lanes;
			(a &= t.pendingLanes), (n |= a), (e.lanes = n), lo(t, n);
		}
	}
	var nu = {
			readContext: It,
			use: Fi,
			useCallback: Lt,
			useContext: Lt,
			useEffect: Lt,
			useImperativeHandle: Lt,
			useLayoutEffect: Lt,
			useInsertionEffect: Lt,
			useMemo: Lt,
			useReducer: Lt,
			useRef: Lt,
			useState: Lt,
			useDebugValue: Lt,
			useDeferredValue: Lt,
			useTransition: Lt,
			useSyncExternalStore: Lt,
			useId: Lt,
			useHostTransitionStatus: Lt,
			useFormState: Lt,
			useActionState: Lt,
			useOptimistic: Lt,
			useMemoCache: Lt,
			useCacheRefresh: Lt,
		},
		If = {
			readContext: It,
			use: Fi,
			useCallback: function (t, e) {
				return (re().memoizedState = [t, e === void 0 ? null : e]), t;
			},
			useContext: It,
			useEffect: Bf,
			useImperativeHandle: function (t, e, n) {
				(n = n != null ? n.concat([t]) : null),
					tu(4194308, 4, Vf.bind(null, e, t), n);
			},
			useLayoutEffect: function (t, e) {
				return tu(4194308, 4, t, e);
			},
			useInsertionEffect: function (t, e) {
				tu(4, 2, t, e);
			},
			useMemo: function (t, e) {
				var n = re();
				e = e === void 0 ? null : e;
				var a = t();
				if (ua) {
					dn(!0);
					try {
						t();
					} finally {
						dn(!1);
					}
				}
				return (n.memoizedState = [a, e]), a;
			},
			useReducer: function (t, e, n) {
				var a = re();
				if (n !== void 0) {
					var i = n(e);
					if (ua) {
						dn(!0);
						try {
							n(e);
						} finally {
							dn(!1);
						}
					}
				} else i = e;
				return (
					(a.memoizedState = a.baseState = i),
					(t = {
						pending: null,
						lanes: 0,
						dispatch: null,
						lastRenderedReducer: t,
						lastRenderedState: i,
					}),
					(a.queue = t),
					(t = t.dispatch = Dm.bind(null, st, t)),
					[a.memoizedState, t]
				);
			},
			useRef: function (t) {
				var e = re();
				return (t = { current: t }), (e.memoizedState = t);
			},
			useState: function (t) {
				t = cs(t);
				var e = t.queue,
					n = $f.bind(null, st, e);
				return (e.dispatch = n), [t.memoizedState, n];
			},
			useDebugValue: fs,
			useDeferredValue: function (t, e) {
				var n = re();
				return ds(n, t, e);
			},
			useTransition: function () {
				var t = cs(!1);
				return (
					(t = Zf.bind(null, st, t.queue, !0, !1)),
					(re().memoizedState = t),
					[!1, t]
				);
			},
			useSyncExternalStore: function (t, e, n) {
				var a = st,
					i = re();
				if (gt) {
					if (n === void 0) throw Error(c(407));
					n = n();
				} else {
					if (((n = e()), zt === null)) throw Error(c(349));
					(yt & 124) !== 0 || bf(a, e, n);
				}
				i.memoizedState = n;
				var s = { value: n, getSnapshot: e };
				return (
					(i.queue = s),
					Bf(Rf.bind(null, a, s, t), [t]),
					(a.flags |= 2048),
					Va(9, Ii(), _f.bind(null, a, s, n, e), null),
					n
				);
			},
			useId: function () {
				var t = re(),
					e = zt.identifierPrefix;
				if (gt) {
					var n = Fe,
						a = $e;
					(n = (a & ~(1 << (32 - he(a) - 1))).toString(32) + n),
						(e = '«' + e + 'R' + n),
						(n = $i++),
						0 < n && (e += 'H' + n.toString(32)),
						(e += '»');
				} else (n = Am++), (e = '«' + e + 'r' + n.toString(32) + '»');
				return (t.memoizedState = e);
			},
			useHostTransitionStatus: ps,
			useFormState: Df,
			useActionState: Df,
			useOptimistic: function (t) {
				var e = re();
				e.memoizedState = e.baseState = t;
				var n = {
					pending: null,
					lanes: 0,
					dispatch: null,
					lastRenderedReducer: null,
					lastRenderedState: null,
				};
				return (
					(e.queue = n),
					(e = ys.bind(null, st, !0, n)),
					(n.dispatch = e),
					[t, e]
				);
			},
			useMemoCache: us,
			useCacheRefresh: function () {
				return (re().memoizedState = wm.bind(null, st));
			},
		},
		td = {
			readContext: It,
			use: Fi,
			useCallback: Gf,
			useContext: It,
			useEffect: Hf,
			useImperativeHandle: Yf,
			useInsertionEffect: jf,
			useLayoutEffect: qf,
			useMemo: Xf,
			useReducer: Wi,
			useRef: Lf,
			useState: function () {
				return Wi(tn);
			},
			useDebugValue: fs,
			useDeferredValue: function (t, e) {
				var n = qt();
				return Qf(n, At.memoizedState, t, e);
			},
			useTransition: function () {
				var t = Wi(tn)[0],
					e = qt().memoizedState;
				return [typeof t == 'boolean' ? t : Hl(t), e];
			},
			useSyncExternalStore: Sf,
			useId: Pf,
			useHostTransitionStatus: ps,
			useFormState: Cf,
			useActionState: Cf,
			useOptimistic: function (t, e) {
				var n = qt();
				return Af(n, At, t, e);
			},
			useMemoCache: us,
			useCacheRefresh: kf,
		},
		Cm = {
			readContext: It,
			use: Fi,
			useCallback: Gf,
			useContext: It,
			useEffect: Hf,
			useImperativeHandle: Yf,
			useInsertionEffect: jf,
			useLayoutEffect: qf,
			useMemo: Xf,
			useReducer: ss,
			useRef: Lf,
			useState: function () {
				return ss(tn);
			},
			useDebugValue: fs,
			useDeferredValue: function (t, e) {
				var n = qt();
				return At === null ? ds(n, t, e) : Qf(n, At.memoizedState, t, e);
			},
			useTransition: function () {
				var t = ss(tn)[0],
					e = qt().memoizedState;
				return [typeof t == 'boolean' ? t : Hl(t), e];
			},
			useSyncExternalStore: Sf,
			useId: Pf,
			useHostTransitionStatus: ps,
			useFormState: Nf,
			useActionState: Nf,
			useOptimistic: function (t, e) {
				var n = qt();
				return At !== null
					? Af(n, At, t, e)
					: ((n.baseState = t), [t, n.queue.dispatch]);
			},
			useMemoCache: us,
			useCacheRefresh: kf,
		},
		Ya = null,
		Vl = 0;
	function au(t) {
		var e = Vl;
		return (Vl += 1), Ya === null && (Ya = []), ff(Ya, t, e);
	}
	function Yl(t, e) {
		(e = e.props.ref), (t.ref = e !== void 0 ? e : null);
	}
	function lu(t, e) {
		throw e.$$typeof === b
			? Error(c(525))
			: ((t = Object.prototype.toString.call(e)),
				Error(
					c(
						31,
						t === '[object Object]'
							? 'object with keys {' + Object.keys(e).join(', ') + '}'
							: t,
					),
				));
	}
	function ed(t) {
		var e = t._init;
		return e(t._payload);
	}
	function nd(t) {
		function e(M, T) {
			if (t) {
				var O = M.deletions;
				O === null ? ((M.deletions = [T]), (M.flags |= 16)) : O.push(T);
			}
		}
		function n(M, T) {
			if (!t) return null;
			for (; T !== null; ) e(M, T), (T = T.sibling);
			return null;
		}
		function a(M) {
			for (var T = new Map(); M !== null; )
				M.key !== null ? T.set(M.key, M) : T.set(M.index, M), (M = M.sibling);
			return T;
		}
		function i(M, T) {
			return (M = ke(M, T)), (M.index = 0), (M.sibling = null), M;
		}
		function s(M, T, O) {
			return (
				(M.index = O),
				t
					? ((O = M.alternate),
						O !== null
							? ((O = O.index), O < T ? ((M.flags |= 67108866), T) : O)
							: ((M.flags |= 67108866), T))
					: ((M.flags |= 1048576), T)
			);
		}
		function f(M) {
			return t && M.alternate === null && (M.flags |= 67108866), M;
		}
		function m(M, T, O, N) {
			return T === null || T.tag !== 6
				? ((T = Br(O, M.mode, N)), (T.return = M), T)
				: ((T = i(T, O)), (T.return = M), T);
		}
		function R(M, T, O, N) {
			var X = O.type;
			return X === D
				? U(M, T, O.props.children, N, O.key)
				: T !== null &&
						(T.elementType === X ||
							(typeof X == 'object' &&
								X !== null &&
								X.$$typeof === Q &&
								ed(X) === T.type))
					? ((T = i(T, O.props)), Yl(T, O), (T.return = M), T)
					: ((T = Vi(O.type, O.key, O.props, null, M.mode, N)),
						Yl(T, O),
						(T.return = M),
						T);
		}
		function x(M, T, O, N) {
			return T === null ||
				T.tag !== 4 ||
				T.stateNode.containerInfo !== O.containerInfo ||
				T.stateNode.implementation !== O.implementation
				? ((T = Hr(O, M.mode, N)), (T.return = M), T)
				: ((T = i(T, O.children || [])), (T.return = M), T);
		}
		function U(M, T, O, N, X) {
			return T === null || T.tag !== 7
				? ((T = Wn(O, M.mode, N, X)), (T.return = M), T)
				: ((T = i(T, O)), (T.return = M), T);
		}
		function L(M, T, O) {
			if (
				(typeof T == 'string' && T !== '') ||
				typeof T == 'number' ||
				typeof T == 'bigint'
			)
				return (T = Br('' + T, M.mode, O)), (T.return = M), T;
			if (typeof T == 'object' && T !== null) {
				switch (T.$$typeof) {
					case _:
						return (
							(O = Vi(T.type, T.key, T.props, null, M.mode, O)),
							Yl(O, T),
							(O.return = M),
							O
						);
					case A:
						return (T = Hr(T, M.mode, O)), (T.return = M), T;
					case Q:
						var N = T._init;
						return (T = N(T._payload)), L(M, T, O);
				}
				if (wt(T) || pt(T))
					return (T = Wn(T, M.mode, O, null)), (T.return = M), T;
				if (typeof T.then == 'function') return L(M, au(T), O);
				if (T.$$typeof === K) return L(M, Qi(M, T), O);
				lu(M, T);
			}
			return null;
		}
		function z(M, T, O, N) {
			var X = T !== null ? T.key : null;
			if (
				(typeof O == 'string' && O !== '') ||
				typeof O == 'number' ||
				typeof O == 'bigint'
			)
				return X !== null ? null : m(M, T, '' + O, N);
			if (typeof O == 'object' && O !== null) {
				switch (O.$$typeof) {
					case _:
						return O.key === X ? R(M, T, O, N) : null;
					case A:
						return O.key === X ? x(M, T, O, N) : null;
					case Q:
						return (X = O._init), (O = X(O._payload)), z(M, T, O, N);
				}
				if (wt(O) || pt(O)) return X !== null ? null : U(M, T, O, N, null);
				if (typeof O.then == 'function') return z(M, T, au(O), N);
				if (O.$$typeof === K) return z(M, T, Qi(M, O), N);
				lu(M, O);
			}
			return null;
		}
		function w(M, T, O, N, X) {
			if (
				(typeof N == 'string' && N !== '') ||
				typeof N == 'number' ||
				typeof N == 'bigint'
			)
				return (M = M.get(O) || null), m(T, M, '' + N, X);
			if (typeof N == 'object' && N !== null) {
				switch (N.$$typeof) {
					case _:
						return (
							(M = M.get(N.key === null ? O : N.key) || null), R(T, M, N, X)
						);
					case A:
						return (
							(M = M.get(N.key === null ? O : N.key) || null), x(T, M, N, X)
						);
					case Q:
						var ot = N._init;
						return (N = ot(N._payload)), w(M, T, O, N, X);
				}
				if (wt(N) || pt(N)) return (M = M.get(O) || null), U(T, M, N, X, null);
				if (typeof N.then == 'function') return w(M, T, O, au(N), X);
				if (N.$$typeof === K) return w(M, T, O, Qi(T, N), X);
				lu(T, N);
			}
			return null;
		}
		function at(M, T, O, N) {
			for (
				var X = null, ot = null, J = T, et = (T = 0), Pt = null;
				J !== null && et < O.length;
				et++
			) {
				J.index > et ? ((Pt = J), (J = null)) : (Pt = J.sibling);
				var mt = z(M, J, O[et], N);
				if (mt === null) {
					J === null && (J = Pt);
					break;
				}
				t && J && mt.alternate === null && e(M, J),
					(T = s(mt, T, et)),
					ot === null ? (X = mt) : (ot.sibling = mt),
					(ot = mt),
					(J = Pt);
			}
			if (et === O.length) return n(M, J), gt && ta(M, et), X;
			if (J === null) {
				for (; et < O.length; et++)
					(J = L(M, O[et], N)),
						J !== null &&
							((T = s(J, T, et)),
							ot === null ? (X = J) : (ot.sibling = J),
							(ot = J));
				return gt && ta(M, et), X;
			}
			for (J = a(J); et < O.length; et++)
				(Pt = w(J, M, et, O[et], N)),
					Pt !== null &&
						(t &&
							Pt.alternate !== null &&
							J.delete(Pt.key === null ? et : Pt.key),
						(T = s(Pt, T, et)),
						ot === null ? (X = Pt) : (ot.sibling = Pt),
						(ot = Pt));
			return (
				t &&
					J.forEach(function (Ln) {
						return e(M, Ln);
					}),
				gt && ta(M, et),
				X
			);
		}
		function I(M, T, O, N) {
			if (O == null) throw Error(c(151));
			for (
				var X = null, ot = null, J = T, et = (T = 0), Pt = null, mt = O.next();
				J !== null && !mt.done;
				et++, mt = O.next()
			) {
				J.index > et ? ((Pt = J), (J = null)) : (Pt = J.sibling);
				var Ln = z(M, J, mt.value, N);
				if (Ln === null) {
					J === null && (J = Pt);
					break;
				}
				t && J && Ln.alternate === null && e(M, J),
					(T = s(Ln, T, et)),
					ot === null ? (X = Ln) : (ot.sibling = Ln),
					(ot = Ln),
					(J = Pt);
			}
			if (mt.done) return n(M, J), gt && ta(M, et), X;
			if (J === null) {
				for (; !mt.done; et++, mt = O.next())
					(mt = L(M, mt.value, N)),
						mt !== null &&
							((T = s(mt, T, et)),
							ot === null ? (X = mt) : (ot.sibling = mt),
							(ot = mt));
				return gt && ta(M, et), X;
			}
			for (J = a(J); !mt.done; et++, mt = O.next())
				(mt = w(J, M, et, mt.value, N)),
					mt !== null &&
						(t &&
							mt.alternate !== null &&
							J.delete(mt.key === null ? et : mt.key),
						(T = s(mt, T, et)),
						ot === null ? (X = mt) : (ot.sibling = mt),
						(ot = mt));
			return (
				t &&
					J.forEach(function (Uv) {
						return e(M, Uv);
					}),
				gt && ta(M, et),
				X
			);
		}
		function Ot(M, T, O, N) {
			if (
				(typeof O == 'object' &&
					O !== null &&
					O.type === D &&
					O.key === null &&
					(O = O.props.children),
				typeof O == 'object' && O !== null)
			) {
				switch (O.$$typeof) {
					case _:
						t: {
							for (var X = O.key; T !== null; ) {
								if (T.key === X) {
									if (((X = O.type), X === D)) {
										if (T.tag === 7) {
											n(M, T.sibling),
												(N = i(T, O.props.children)),
												(N.return = M),
												(M = N);
											break t;
										}
									} else if (
										T.elementType === X ||
										(typeof X == 'object' &&
											X !== null &&
											X.$$typeof === Q &&
											ed(X) === T.type)
									) {
										n(M, T.sibling),
											(N = i(T, O.props)),
											Yl(N, O),
											(N.return = M),
											(M = N);
										break t;
									}
									n(M, T);
									break;
								} else e(M, T);
								T = T.sibling;
							}
							O.type === D
								? ((N = Wn(O.props.children, M.mode, N, O.key)),
									(N.return = M),
									(M = N))
								: ((N = Vi(O.type, O.key, O.props, null, M.mode, N)),
									Yl(N, O),
									(N.return = M),
									(M = N));
						}
						return f(M);
					case A:
						t: {
							for (X = O.key; T !== null; ) {
								if (T.key === X)
									if (
										T.tag === 4 &&
										T.stateNode.containerInfo === O.containerInfo &&
										T.stateNode.implementation === O.implementation
									) {
										n(M, T.sibling),
											(N = i(T, O.children || [])),
											(N.return = M),
											(M = N);
										break t;
									} else {
										n(M, T);
										break;
									}
								else e(M, T);
								T = T.sibling;
							}
							(N = Hr(O, M.mode, N)), (N.return = M), (M = N);
						}
						return f(M);
					case Q:
						return (X = O._init), (O = X(O._payload)), Ot(M, T, O, N);
				}
				if (wt(O)) return at(M, T, O, N);
				if (pt(O)) {
					if (((X = pt(O)), typeof X != 'function')) throw Error(c(150));
					return (O = X.call(O)), I(M, T, O, N);
				}
				if (typeof O.then == 'function') return Ot(M, T, au(O), N);
				if (O.$$typeof === K) return Ot(M, T, Qi(M, O), N);
				lu(M, O);
			}
			return (typeof O == 'string' && O !== '') ||
				typeof O == 'number' ||
				typeof O == 'bigint'
				? ((O = '' + O),
					T !== null && T.tag === 6
						? (n(M, T.sibling), (N = i(T, O)), (N.return = M), (M = N))
						: (n(M, T), (N = Br(O, M.mode, N)), (N.return = M), (M = N)),
					f(M))
				: n(M, T);
		}
		return function (M, T, O, N) {
			try {
				Vl = 0;
				var X = Ot(M, T, O, N);
				return (Ya = null), X;
			} catch (J) {
				if (J === Dl || J === Ki) throw J;
				var ot = ye(29, J, null, M.mode);
				return (ot.lanes = N), (ot.return = M), ot;
			} finally {
			}
		};
	}
	var Ga = nd(!0),
		ad = nd(!1),
		ze = B(null),
		Ve = null;
	function bn(t) {
		var e = t.alternate;
		q(Xt, Xt.current & 1),
			q(ze, t),
			Ve === null &&
				(e === null || Ha.current !== null || e.memoizedState !== null) &&
				(Ve = t);
	}
	function ld(t) {
		if (t.tag === 22) {
			if ((q(Xt, Xt.current), q(ze, t), Ve === null)) {
				var e = t.alternate;
				e !== null && e.memoizedState !== null && (Ve = t);
			}
		} else _n();
	}
	function _n() {
		q(Xt, Xt.current), q(ze, ze.current);
	}
	function en(t) {
		G(ze), Ve === t && (Ve = null), G(Xt);
	}
	var Xt = B(0);
	function iu(t) {
		for (var e = t; e !== null; ) {
			if (e.tag === 13) {
				var n = e.memoizedState;
				if (
					n !== null &&
					((n = n.dehydrated), n === null || n.data === '$?' || ic(n))
				)
					return e;
			} else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
				if ((e.flags & 128) !== 0) return e;
			} else if (e.child !== null) {
				(e.child.return = e), (e = e.child);
				continue;
			}
			if (e === t) break;
			for (; e.sibling === null; ) {
				if (e.return === null || e.return === t) return null;
				e = e.return;
			}
			(e.sibling.return = e.return), (e = e.sibling);
		}
		return null;
	}
	function ms(t, e, n, a) {
		(e = t.memoizedState),
			(n = n(a, e)),
			(n = n == null ? e : g({}, e, n)),
			(t.memoizedState = n),
			t.lanes === 0 && (t.updateQueue.baseState = n);
	}
	var vs = {
		enqueueSetState: function (t, e, n) {
			t = t._reactInternals;
			var a = Se(),
				i = vn(a);
			(i.payload = e),
				n != null && (i.callback = n),
				(e = gn(t, i, a)),
				e !== null && (be(e, t, a), Ul(e, t, a));
		},
		enqueueReplaceState: function (t, e, n) {
			t = t._reactInternals;
			var a = Se(),
				i = vn(a);
			(i.tag = 1),
				(i.payload = e),
				n != null && (i.callback = n),
				(e = gn(t, i, a)),
				e !== null && (be(e, t, a), Ul(e, t, a));
		},
		enqueueForceUpdate: function (t, e) {
			t = t._reactInternals;
			var n = Se(),
				a = vn(n);
			(a.tag = 2),
				e != null && (a.callback = e),
				(e = gn(t, a, n)),
				e !== null && (be(e, t, n), Ul(e, t, n));
		},
	};
	function id(t, e, n, a, i, s, f) {
		return (
			(t = t.stateNode),
			typeof t.shouldComponentUpdate == 'function'
				? t.shouldComponentUpdate(a, s, f)
				: e.prototype && e.prototype.isPureReactComponent
					? !El(n, a) || !El(i, s)
					: !0
		);
	}
	function ud(t, e, n, a) {
		(t = e.state),
			typeof e.componentWillReceiveProps == 'function' &&
				e.componentWillReceiveProps(n, a),
			typeof e.UNSAFE_componentWillReceiveProps == 'function' &&
				e.UNSAFE_componentWillReceiveProps(n, a),
			e.state !== t && vs.enqueueReplaceState(e, e.state, null);
	}
	function ra(t, e) {
		var n = e;
		if ('ref' in e) {
			n = {};
			for (var a in e) a !== 'ref' && (n[a] = e[a]);
		}
		if ((t = t.defaultProps)) {
			n === e && (n = g({}, n));
			for (var i in t) n[i] === void 0 && (n[i] = t[i]);
		}
		return n;
	}
	var uu =
		typeof reportError == 'function'
			? reportError
			: function (t) {
					if (
						typeof window == 'object' &&
						typeof window.ErrorEvent == 'function'
					) {
						var e = new window.ErrorEvent('error', {
							bubbles: !0,
							cancelable: !0,
							message:
								typeof t == 'object' &&
								t !== null &&
								typeof t.message == 'string'
									? String(t.message)
									: String(t),
							error: t,
						});
						if (!window.dispatchEvent(e)) return;
					} else if (
						typeof process == 'object' &&
						typeof process.emit == 'function'
					) {
						process.emit('uncaughtException', t);
						return;
					}
					console.error(t);
				};
	function rd(t) {
		uu(t);
	}
	function sd(t) {
		console.error(t);
	}
	function cd(t) {
		uu(t);
	}
	function ru(t, e) {
		try {
			var n = t.onUncaughtError;
			n(e.value, { componentStack: e.stack });
		} catch (a) {
			setTimeout(function () {
				throw a;
			});
		}
	}
	function od(t, e, n) {
		try {
			var a = t.onCaughtError;
			a(n.value, {
				componentStack: n.stack,
				errorBoundary: e.tag === 1 ? e.stateNode : null,
			});
		} catch (i) {
			setTimeout(function () {
				throw i;
			});
		}
	}
	function gs(t, e, n) {
		return (
			(n = vn(n)),
			(n.tag = 3),
			(n.payload = { element: null }),
			(n.callback = function () {
				ru(t, e);
			}),
			n
		);
	}
	function fd(t) {
		return (t = vn(t)), (t.tag = 3), t;
	}
	function dd(t, e, n, a) {
		var i = n.type.getDerivedStateFromError;
		if (typeof i == 'function') {
			var s = a.value;
			(t.payload = function () {
				return i(s);
			}),
				(t.callback = function () {
					od(e, n, a);
				});
		}
		var f = n.stateNode;
		f !== null &&
			typeof f.componentDidCatch == 'function' &&
			(t.callback = function () {
				od(e, n, a),
					typeof i != 'function' &&
						(On === null ? (On = new Set([this])) : On.add(this));
				var m = a.stack;
				this.componentDidCatch(a.value, {
					componentStack: m !== null ? m : '',
				});
			});
	}
	function Um(t, e, n, a, i) {
		if (
			((n.flags |= 32768),
			a !== null && typeof a == 'object' && typeof a.then == 'function')
		) {
			if (
				((e = n.alternate),
				e !== null && xl(e, n, i, !0),
				(n = ze.current),
				n !== null)
			) {
				switch (n.tag) {
					case 13:
						return (
							Ve === null ? Gs() : n.alternate === null && Nt === 0 && (Nt = 3),
							(n.flags &= -257),
							(n.flags |= 65536),
							(n.lanes = i),
							a === Jr
								? (n.flags |= 16384)
								: ((e = n.updateQueue),
									e === null ? (n.updateQueue = new Set([a])) : e.add(a),
									Qs(t, a, i)),
							!1
						);
					case 22:
						return (
							(n.flags |= 65536),
							a === Jr
								? (n.flags |= 16384)
								: ((e = n.updateQueue),
									e === null
										? ((e = {
												transitions: null,
												markerInstances: null,
												retryQueue: new Set([a]),
											}),
											(n.updateQueue = e))
										: ((n = e.retryQueue),
											n === null ? (e.retryQueue = new Set([a])) : n.add(a)),
									Qs(t, a, i)),
							!1
						);
				}
				throw Error(c(435, n.tag));
			}
			return Qs(t, a, i), Gs(), !1;
		}
		if (gt)
			return (
				(e = ze.current),
				e !== null
					? ((e.flags & 65536) === 0 && (e.flags |= 256),
						(e.flags |= 65536),
						(e.lanes = i),
						a !== Vr && ((t = Error(c(422), { cause: a })), Ol(Ae(t, n))))
					: (a !== Vr && ((e = Error(c(423), { cause: a })), Ol(Ae(e, n))),
						(t = t.current.alternate),
						(t.flags |= 65536),
						(i &= -i),
						(t.lanes |= i),
						(a = Ae(a, n)),
						(i = gs(t.stateNode, a, i)),
						$r(t, i),
						Nt !== 4 && (Nt = 2)),
				!1
			);
		var s = Error(c(520), { cause: a });
		if (
			((s = Ae(s, n)),
			Pl === null ? (Pl = [s]) : Pl.push(s),
			Nt !== 4 && (Nt = 2),
			e === null)
		)
			return !0;
		(a = Ae(a, n)), (n = e);
		do {
			switch (n.tag) {
				case 3:
					return (
						(n.flags |= 65536),
						(t = i & -i),
						(n.lanes |= t),
						(t = gs(n.stateNode, a, t)),
						$r(n, t),
						!1
					);
				case 1:
					if (
						((e = n.type),
						(s = n.stateNode),
						(n.flags & 128) === 0 &&
							(typeof e.getDerivedStateFromError == 'function' ||
								(s !== null &&
									typeof s.componentDidCatch == 'function' &&
									(On === null || !On.has(s)))))
					)
						return (
							(n.flags |= 65536),
							(i &= -i),
							(n.lanes |= i),
							(i = fd(i)),
							dd(i, t, n, a),
							$r(n, i),
							!1
						);
			}
			n = n.return;
		} while (n !== null);
		return !1;
	}
	var hd = Error(c(461)),
		Kt = !1;
	function kt(t, e, n, a) {
		e.child = t === null ? ad(e, null, n, a) : Ga(e, t.child, n, a);
	}
	function pd(t, e, n, a, i) {
		n = n.render;
		var s = e.ref;
		if ('ref' in a) {
			var f = {};
			for (var m in a) m !== 'ref' && (f[m] = a[m]);
		} else f = a;
		return (
			la(e),
			(a = es(t, e, n, f, s, i)),
			(m = ns()),
			t !== null && !Kt
				? (as(t, e, i), nn(t, e, i))
				: (gt && m && jr(e), (e.flags |= 1), kt(t, e, a, i), e.child)
		);
	}
	function yd(t, e, n, a, i) {
		if (t === null) {
			var s = n.type;
			return typeof s == 'function' &&
				!Lr(s) &&
				s.defaultProps === void 0 &&
				n.compare === null
				? ((e.tag = 15), (e.type = s), md(t, e, s, a, i))
				: ((t = Vi(n.type, null, a, e, e.mode, i)),
					(t.ref = e.ref),
					(t.return = e),
					(e.child = t));
		}
		if (((s = t.child), !Ms(t, i))) {
			var f = s.memoizedProps;
			if (
				((n = n.compare), (n = n !== null ? n : El), n(f, a) && t.ref === e.ref)
			)
				return nn(t, e, i);
		}
		return (
			(e.flags |= 1),
			(t = ke(s, a)),
			(t.ref = e.ref),
			(t.return = e),
			(e.child = t)
		);
	}
	function md(t, e, n, a, i) {
		if (t !== null) {
			var s = t.memoizedProps;
			if (El(s, a) && t.ref === e.ref)
				if (((Kt = !1), (e.pendingProps = a = s), Ms(t, i)))
					(t.flags & 131072) !== 0 && (Kt = !0);
				else return (e.lanes = t.lanes), nn(t, e, i);
		}
		return Ss(t, e, n, a, i);
	}
	function vd(t, e, n) {
		var a = e.pendingProps,
			i = a.children,
			s = t !== null ? t.memoizedState : null;
		if (a.mode === 'hidden') {
			if ((e.flags & 128) !== 0) {
				if (((a = s !== null ? s.baseLanes | n : n), t !== null)) {
					for (i = e.child = t.child, s = 0; i !== null; )
						(s = s | i.lanes | i.childLanes), (i = i.sibling);
					e.childLanes = s & ~a;
				} else (e.childLanes = 0), (e.child = null);
				return gd(t, e, a, n);
			}
			if ((n & 536870912) !== 0)
				(e.memoizedState = { baseLanes: 0, cachePool: null }),
					t !== null && Zi(e, s !== null ? s.cachePool : null),
					s !== null ? mf(e, s) : Wr(),
					ld(e);
			else
				return (
					(e.lanes = e.childLanes = 536870912),
					gd(t, e, s !== null ? s.baseLanes | n : n, n)
				);
		} else
			s !== null
				? (Zi(e, s.cachePool), mf(e, s), _n(), (e.memoizedState = null))
				: (t !== null && Zi(e, null), Wr(), _n());
		return kt(t, e, i, n), e.child;
	}
	function gd(t, e, n, a) {
		var i = Kr();
		return (
			(i = i === null ? null : { parent: Gt._currentValue, pool: i }),
			(e.memoizedState = { baseLanes: n, cachePool: i }),
			t !== null && Zi(e, null),
			Wr(),
			ld(e),
			t !== null && xl(t, e, a, !0),
			null
		);
	}
	function su(t, e) {
		var n = e.ref;
		if (n === null) t !== null && t.ref !== null && (e.flags |= 4194816);
		else {
			if (typeof n != 'function' && typeof n != 'object') throw Error(c(284));
			(t === null || t.ref !== n) && (e.flags |= 4194816);
		}
	}
	function Ss(t, e, n, a, i) {
		return (
			la(e),
			(n = es(t, e, n, a, void 0, i)),
			(a = ns()),
			t !== null && !Kt
				? (as(t, e, i), nn(t, e, i))
				: (gt && a && jr(e), (e.flags |= 1), kt(t, e, n, i), e.child)
		);
	}
	function Sd(t, e, n, a, i, s) {
		return (
			la(e),
			(e.updateQueue = null),
			(n = gf(e, a, n, i)),
			vf(t),
			(a = ns()),
			t !== null && !Kt
				? (as(t, e, s), nn(t, e, s))
				: (gt && a && jr(e), (e.flags |= 1), kt(t, e, n, s), e.child)
		);
	}
	function bd(t, e, n, a, i) {
		if ((la(e), e.stateNode === null)) {
			var s = Ca,
				f = n.contextType;
			typeof f == 'object' && f !== null && (s = It(f)),
				(s = new n(a, s)),
				(e.memoizedState =
					s.state !== null && s.state !== void 0 ? s.state : null),
				(s.updater = vs),
				(e.stateNode = s),
				(s._reactInternals = e),
				(s = e.stateNode),
				(s.props = a),
				(s.state = e.memoizedState),
				(s.refs = {}),
				Pr(e),
				(f = n.contextType),
				(s.context = typeof f == 'object' && f !== null ? It(f) : Ca),
				(s.state = e.memoizedState),
				(f = n.getDerivedStateFromProps),
				typeof f == 'function' && (ms(e, n, f, a), (s.state = e.memoizedState)),
				typeof n.getDerivedStateFromProps == 'function' ||
					typeof s.getSnapshotBeforeUpdate == 'function' ||
					(typeof s.UNSAFE_componentWillMount != 'function' &&
						typeof s.componentWillMount != 'function') ||
					((f = s.state),
					typeof s.componentWillMount == 'function' && s.componentWillMount(),
					typeof s.UNSAFE_componentWillMount == 'function' &&
						s.UNSAFE_componentWillMount(),
					f !== s.state && vs.enqueueReplaceState(s, s.state, null),
					Ll(e, a, s, i),
					Nl(),
					(s.state = e.memoizedState)),
				typeof s.componentDidMount == 'function' && (e.flags |= 4194308),
				(a = !0);
		} else if (t === null) {
			s = e.stateNode;
			var m = e.memoizedProps,
				R = ra(n, m);
			s.props = R;
			var x = s.context,
				U = n.contextType;
			(f = Ca), typeof U == 'object' && U !== null && (f = It(U));
			var L = n.getDerivedStateFromProps;
			(U =
				typeof L == 'function' ||
				typeof s.getSnapshotBeforeUpdate == 'function'),
				(m = e.pendingProps !== m),
				U ||
					(typeof s.UNSAFE_componentWillReceiveProps != 'function' &&
						typeof s.componentWillReceiveProps != 'function') ||
					((m || x !== f) && ud(e, s, a, f)),
				(mn = !1);
			var z = e.memoizedState;
			(s.state = z),
				Ll(e, a, s, i),
				Nl(),
				(x = e.memoizedState),
				m || z !== x || mn
					? (typeof L == 'function' && (ms(e, n, L, a), (x = e.memoizedState)),
						(R = mn || id(e, n, R, a, z, x, f))
							? (U ||
									(typeof s.UNSAFE_componentWillMount != 'function' &&
										typeof s.componentWillMount != 'function') ||
									(typeof s.componentWillMount == 'function' &&
										s.componentWillMount(),
									typeof s.UNSAFE_componentWillMount == 'function' &&
										s.UNSAFE_componentWillMount()),
								typeof s.componentDidMount == 'function' &&
									(e.flags |= 4194308))
							: (typeof s.componentDidMount == 'function' &&
									(e.flags |= 4194308),
								(e.memoizedProps = a),
								(e.memoizedState = x)),
						(s.props = a),
						(s.state = x),
						(s.context = f),
						(a = R))
					: (typeof s.componentDidMount == 'function' && (e.flags |= 4194308),
						(a = !1));
		} else {
			(s = e.stateNode),
				kr(t, e),
				(f = e.memoizedProps),
				(U = ra(n, f)),
				(s.props = U),
				(L = e.pendingProps),
				(z = s.context),
				(x = n.contextType),
				(R = Ca),
				typeof x == 'object' && x !== null && (R = It(x)),
				(m = n.getDerivedStateFromProps),
				(x =
					typeof m == 'function' ||
					typeof s.getSnapshotBeforeUpdate == 'function') ||
					(typeof s.UNSAFE_componentWillReceiveProps != 'function' &&
						typeof s.componentWillReceiveProps != 'function') ||
					((f !== L || z !== R) && ud(e, s, a, R)),
				(mn = !1),
				(z = e.memoizedState),
				(s.state = z),
				Ll(e, a, s, i),
				Nl();
			var w = e.memoizedState;
			f !== L ||
			z !== w ||
			mn ||
			(t !== null && t.dependencies !== null && Xi(t.dependencies))
				? (typeof m == 'function' && (ms(e, n, m, a), (w = e.memoizedState)),
					(U =
						mn ||
						id(e, n, U, a, z, w, R) ||
						(t !== null && t.dependencies !== null && Xi(t.dependencies)))
						? (x ||
								(typeof s.UNSAFE_componentWillUpdate != 'function' &&
									typeof s.componentWillUpdate != 'function') ||
								(typeof s.componentWillUpdate == 'function' &&
									s.componentWillUpdate(a, w, R),
								typeof s.UNSAFE_componentWillUpdate == 'function' &&
									s.UNSAFE_componentWillUpdate(a, w, R)),
							typeof s.componentDidUpdate == 'function' && (e.flags |= 4),
							typeof s.getSnapshotBeforeUpdate == 'function' &&
								(e.flags |= 1024))
						: (typeof s.componentDidUpdate != 'function' ||
								(f === t.memoizedProps && z === t.memoizedState) ||
								(e.flags |= 4),
							typeof s.getSnapshotBeforeUpdate != 'function' ||
								(f === t.memoizedProps && z === t.memoizedState) ||
								(e.flags |= 1024),
							(e.memoizedProps = a),
							(e.memoizedState = w)),
					(s.props = a),
					(s.state = w),
					(s.context = R),
					(a = U))
				: (typeof s.componentDidUpdate != 'function' ||
						(f === t.memoizedProps && z === t.memoizedState) ||
						(e.flags |= 4),
					typeof s.getSnapshotBeforeUpdate != 'function' ||
						(f === t.memoizedProps && z === t.memoizedState) ||
						(e.flags |= 1024),
					(a = !1));
		}
		return (
			(s = a),
			su(t, e),
			(a = (e.flags & 128) !== 0),
			s || a
				? ((s = e.stateNode),
					(n =
						a && typeof n.getDerivedStateFromError != 'function'
							? null
							: s.render()),
					(e.flags |= 1),
					t !== null && a
						? ((e.child = Ga(e, t.child, null, i)),
							(e.child = Ga(e, null, n, i)))
						: kt(t, e, n, i),
					(e.memoizedState = s.state),
					(t = e.child))
				: (t = nn(t, e, i)),
			t
		);
	}
	function _d(t, e, n, a) {
		return Ml(), (e.flags |= 256), kt(t, e, n, a), e.child;
	}
	var bs = {
		dehydrated: null,
		treeContext: null,
		retryLane: 0,
		hydrationErrors: null,
	};
	function _s(t) {
		return { baseLanes: t, cachePool: sf() };
	}
	function Rs(t, e, n) {
		return (t = t !== null ? t.childLanes & ~n : 0), e && (t |= we), t;
	}
	function Rd(t, e, n) {
		var a = e.pendingProps,
			i = !1,
			s = (e.flags & 128) !== 0,
			f;
		if (
			((f = s) ||
				(f =
					t !== null && t.memoizedState === null ? !1 : (Xt.current & 2) !== 0),
			f && ((i = !0), (e.flags &= -129)),
			(f = (e.flags & 32) !== 0),
			(e.flags &= -33),
			t === null)
		) {
			if (gt) {
				if ((i ? bn(e) : _n(), gt)) {
					var m = Ut,
						R;
					if ((R = m)) {
						t: {
							for (R = m, m = qe; R.nodeType !== 8; ) {
								if (!m) {
									m = null;
									break t;
								}
								if (((R = He(R.nextSibling)), R === null)) {
									m = null;
									break t;
								}
							}
							m = R;
						}
						m !== null
							? ((e.memoizedState = {
									dehydrated: m,
									treeContext: In !== null ? { id: $e, overflow: Fe } : null,
									retryLane: 536870912,
									hydrationErrors: null,
								}),
								(R = ye(18, null, null, 0)),
								(R.stateNode = m),
								(R.return = e),
								(e.child = R),
								(le = e),
								(Ut = null),
								(R = !0))
							: (R = !1);
					}
					R || na(e);
				}
				if (
					((m = e.memoizedState),
					m !== null && ((m = m.dehydrated), m !== null))
				)
					return ic(m) ? (e.lanes = 32) : (e.lanes = 536870912), null;
				en(e);
			}
			return (
				(m = a.children),
				(a = a.fallback),
				i
					? (_n(),
						(i = e.mode),
						(m = cu({ mode: 'hidden', children: m }, i)),
						(a = Wn(a, i, n, null)),
						(m.return = e),
						(a.return = e),
						(m.sibling = a),
						(e.child = m),
						(i = e.child),
						(i.memoizedState = _s(n)),
						(i.childLanes = Rs(t, f, n)),
						(e.memoizedState = bs),
						a)
					: (bn(e), Es(e, m))
			);
		}
		if (
			((R = t.memoizedState), R !== null && ((m = R.dehydrated), m !== null))
		) {
			if (s)
				e.flags & 256
					? (bn(e), (e.flags &= -257), (e = Ts(t, e, n)))
					: e.memoizedState !== null
						? (_n(), (e.child = t.child), (e.flags |= 128), (e = null))
						: (_n(),
							(i = a.fallback),
							(m = e.mode),
							(a = cu({ mode: 'visible', children: a.children }, m)),
							(i = Wn(i, m, n, null)),
							(i.flags |= 2),
							(a.return = e),
							(i.return = e),
							(a.sibling = i),
							(e.child = a),
							Ga(e, t.child, null, n),
							(a = e.child),
							(a.memoizedState = _s(n)),
							(a.childLanes = Rs(t, f, n)),
							(e.memoizedState = bs),
							(e = i));
			else if ((bn(e), ic(m))) {
				if (((f = m.nextSibling && m.nextSibling.dataset), f)) var x = f.dgst;
				(f = x),
					(a = Error(c(419))),
					(a.stack = ''),
					(a.digest = f),
					Ol({ value: a, source: null, stack: null }),
					(e = Ts(t, e, n));
			} else if (
				(Kt || xl(t, e, n, !1), (f = (n & t.childLanes) !== 0), Kt || f)
			) {
				if (
					((f = zt),
					f !== null &&
						((a = n & -n),
						(a = (a & 42) !== 0 ? 1 : ur(a)),
						(a = (a & (f.suspendedLanes | n)) !== 0 ? 0 : a),
						a !== 0 && a !== R.retryLane))
				)
					throw ((R.retryLane = a), Da(t, a), be(f, t, a), hd);
				m.data === '$?' || Gs(), (e = Ts(t, e, n));
			} else
				m.data === '$?'
					? ((e.flags |= 192), (e.child = t.child), (e = null))
					: ((t = R.treeContext),
						(Ut = He(m.nextSibling)),
						(le = e),
						(gt = !0),
						(ea = null),
						(qe = !1),
						t !== null &&
							((Oe[xe++] = $e),
							(Oe[xe++] = Fe),
							(Oe[xe++] = In),
							($e = t.id),
							(Fe = t.overflow),
							(In = e)),
						(e = Es(e, a.children)),
						(e.flags |= 4096));
			return e;
		}
		return i
			? (_n(),
				(i = a.fallback),
				(m = e.mode),
				(R = t.child),
				(x = R.sibling),
				(a = ke(R, { mode: 'hidden', children: a.children })),
				(a.subtreeFlags = R.subtreeFlags & 65011712),
				x !== null ? (i = ke(x, i)) : ((i = Wn(i, m, n, null)), (i.flags |= 2)),
				(i.return = e),
				(a.return = e),
				(a.sibling = i),
				(e.child = a),
				(a = i),
				(i = e.child),
				(m = t.child.memoizedState),
				m === null
					? (m = _s(n))
					: ((R = m.cachePool),
						R !== null
							? ((x = Gt._currentValue),
								(R = R.parent !== x ? { parent: x, pool: x } : R))
							: (R = sf()),
						(m = { baseLanes: m.baseLanes | n, cachePool: R })),
				(i.memoizedState = m),
				(i.childLanes = Rs(t, f, n)),
				(e.memoizedState = bs),
				a)
			: (bn(e),
				(n = t.child),
				(t = n.sibling),
				(n = ke(n, { mode: 'visible', children: a.children })),
				(n.return = e),
				(n.sibling = null),
				t !== null &&
					((f = e.deletions),
					f === null ? ((e.deletions = [t]), (e.flags |= 16)) : f.push(t)),
				(e.child = n),
				(e.memoizedState = null),
				n);
	}
	function Es(t, e) {
		return (
			(e = cu({ mode: 'visible', children: e }, t.mode)),
			(e.return = t),
			(t.child = e)
		);
	}
	function cu(t, e) {
		return (
			(t = ye(22, t, null, e)),
			(t.lanes = 0),
			(t.stateNode = {
				_visibility: 1,
				_pendingMarkers: null,
				_retryCache: null,
				_transitions: null,
			}),
			t
		);
	}
	function Ts(t, e, n) {
		return (
			Ga(e, t.child, null, n),
			(t = Es(e, e.pendingProps.children)),
			(t.flags |= 2),
			(e.memoizedState = null),
			t
		);
	}
	function Ed(t, e, n) {
		t.lanes |= e;
		var a = t.alternate;
		a !== null && (a.lanes |= e), Gr(t.return, e, n);
	}
	function As(t, e, n, a, i) {
		var s = t.memoizedState;
		s === null
			? (t.memoizedState = {
					isBackwards: e,
					rendering: null,
					renderingStartTime: 0,
					last: a,
					tail: n,
					tailMode: i,
				})
			: ((s.isBackwards = e),
				(s.rendering = null),
				(s.renderingStartTime = 0),
				(s.last = a),
				(s.tail = n),
				(s.tailMode = i));
	}
	function Td(t, e, n) {
		var a = e.pendingProps,
			i = a.revealOrder,
			s = a.tail;
		if ((kt(t, e, a.children, n), (a = Xt.current), (a & 2) !== 0))
			(a = (a & 1) | 2), (e.flags |= 128);
		else {
			if (t !== null && (t.flags & 128) !== 0)
				t: for (t = e.child; t !== null; ) {
					if (t.tag === 13) t.memoizedState !== null && Ed(t, n, e);
					else if (t.tag === 19) Ed(t, n, e);
					else if (t.child !== null) {
						(t.child.return = t), (t = t.child);
						continue;
					}
					if (t === e) break t;
					for (; t.sibling === null; ) {
						if (t.return === null || t.return === e) break t;
						t = t.return;
					}
					(t.sibling.return = t.return), (t = t.sibling);
				}
			a &= 1;
		}
		switch ((q(Xt, a), i)) {
			case 'forwards':
				for (n = e.child, i = null; n !== null; )
					(t = n.alternate),
						t !== null && iu(t) === null && (i = n),
						(n = n.sibling);
				(n = i),
					n === null
						? ((i = e.child), (e.child = null))
						: ((i = n.sibling), (n.sibling = null)),
					As(e, !1, i, n, s);
				break;
			case 'backwards':
				for (n = null, i = e.child, e.child = null; i !== null; ) {
					if (((t = i.alternate), t !== null && iu(t) === null)) {
						e.child = i;
						break;
					}
					(t = i.sibling), (i.sibling = n), (n = i), (i = t);
				}
				As(e, !0, n, null, s);
				break;
			case 'together':
				As(e, !1, null, null, void 0);
				break;
			default:
				e.memoizedState = null;
		}
		return e.child;
	}
	function nn(t, e, n) {
		if (
			(t !== null && (e.dependencies = t.dependencies),
			(Mn |= e.lanes),
			(n & e.childLanes) === 0)
		)
			if (t !== null) {
				if ((xl(t, e, n, !1), (n & e.childLanes) === 0)) return null;
			} else return null;
		if (t !== null && e.child !== t.child) throw Error(c(153));
		if (e.child !== null) {
			for (
				t = e.child, n = ke(t, t.pendingProps), e.child = n, n.return = e;
				t.sibling !== null;
			)
				(t = t.sibling),
					(n = n.sibling = ke(t, t.pendingProps)),
					(n.return = e);
			n.sibling = null;
		}
		return e.child;
	}
	function Ms(t, e) {
		return (t.lanes & e) !== 0
			? !0
			: ((t = t.dependencies), !!(t !== null && Xi(t)));
	}
	function Nm(t, e, n) {
		switch (e.tag) {
			case 3:
				bt(e, e.stateNode.containerInfo),
					yn(e, Gt, t.memoizedState.cache),
					Ml();
				break;
			case 27:
			case 5:
				Xn(e);
				break;
			case 4:
				bt(e, e.stateNode.containerInfo);
				break;
			case 10:
				yn(e, e.type, e.memoizedProps.value);
				break;
			case 13:
				var a = e.memoizedState;
				if (a !== null)
					return a.dehydrated !== null
						? (bn(e), (e.flags |= 128), null)
						: (n & e.child.childLanes) !== 0
							? Rd(t, e, n)
							: (bn(e), (t = nn(t, e, n)), t !== null ? t.sibling : null);
				bn(e);
				break;
			case 19:
				var i = (t.flags & 128) !== 0;
				if (
					((a = (n & e.childLanes) !== 0),
					a || (xl(t, e, n, !1), (a = (n & e.childLanes) !== 0)),
					i)
				) {
					if (a) return Td(t, e, n);
					e.flags |= 128;
				}
				if (
					((i = e.memoizedState),
					i !== null &&
						((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
					q(Xt, Xt.current),
					a)
				)
					break;
				return null;
			case 22:
			case 23:
				return (e.lanes = 0), vd(t, e, n);
			case 24:
				yn(e, Gt, t.memoizedState.cache);
		}
		return nn(t, e, n);
	}
	function Ad(t, e, n) {
		if (t !== null)
			if (t.memoizedProps !== e.pendingProps) Kt = !0;
			else {
				if (!Ms(t, n) && (e.flags & 128) === 0) return (Kt = !1), Nm(t, e, n);
				Kt = (t.flags & 131072) !== 0;
			}
		else (Kt = !1), gt && (e.flags & 1048576) !== 0 && tf(e, Gi, e.index);
		switch (((e.lanes = 0), e.tag)) {
			case 16:
				t: {
					t = e.pendingProps;
					var a = e.elementType,
						i = a._init;
					if (((a = i(a._payload)), (e.type = a), typeof a == 'function'))
						Lr(a)
							? ((t = ra(a, t)), (e.tag = 1), (e = bd(null, e, a, t, n)))
							: ((e.tag = 0), (e = Ss(null, e, a, t, n)));
					else {
						if (a != null) {
							if (((i = a.$$typeof), i === lt)) {
								(e.tag = 11), (e = pd(null, e, a, t, n));
								break t;
							} else if (i === Z) {
								(e.tag = 14), (e = yd(null, e, a, t, n));
								break t;
							}
						}
						throw ((e = Vt(a) || a), Error(c(306, e, '')));
					}
				}
				return e;
			case 0:
				return Ss(t, e, e.type, e.pendingProps, n);
			case 1:
				return (a = e.type), (i = ra(a, e.pendingProps)), bd(t, e, a, i, n);
			case 3:
				t: {
					if ((bt(e, e.stateNode.containerInfo), t === null))
						throw Error(c(387));
					a = e.pendingProps;
					var s = e.memoizedState;
					(i = s.element), kr(t, e), Ll(e, a, null, n);
					var f = e.memoizedState;
					if (
						((a = f.cache),
						yn(e, Gt, a),
						a !== s.cache && Xr(e, [Gt], n, !0),
						Nl(),
						(a = f.element),
						s.isDehydrated)
					)
						if (
							((s = { element: a, isDehydrated: !1, cache: f.cache }),
							(e.updateQueue.baseState = s),
							(e.memoizedState = s),
							e.flags & 256)
						) {
							e = _d(t, e, a, n);
							break t;
						} else if (a !== i) {
							(i = Ae(Error(c(424)), e)), Ol(i), (e = _d(t, e, a, n));
							break t;
						} else {
							switch (((t = e.stateNode.containerInfo), t.nodeType)) {
								case 9:
									t = t.body;
									break;
								default:
									t = t.nodeName === 'HTML' ? t.ownerDocument.body : t;
							}
							for (
								Ut = He(t.firstChild),
									le = e,
									gt = !0,
									ea = null,
									qe = !0,
									n = ad(e, null, a, n),
									e.child = n;
								n;
							)
								(n.flags = (n.flags & -3) | 4096), (n = n.sibling);
						}
					else {
						if ((Ml(), a === i)) {
							e = nn(t, e, n);
							break t;
						}
						kt(t, e, a, n);
					}
					e = e.child;
				}
				return e;
			case 26:
				return (
					su(t, e),
					t === null
						? (n = zh(e.type, null, e.pendingProps, null))
							? (e.memoizedState = n)
							: gt ||
								((n = e.type),
								(t = e.pendingProps),
								(a = Eu($.current).createElement(n)),
								(a[Wt] = e),
								(a[ie] = t),
								Ft(a, n, t),
								Zt(a),
								(e.stateNode = a))
						: (e.memoizedState = zh(
								e.type,
								t.memoizedProps,
								e.pendingProps,
								t.memoizedState,
							)),
					null
				);
			case 27:
				return (
					Xn(e),
					t === null &&
						gt &&
						((a = e.stateNode = Mh(e.type, e.pendingProps, $.current)),
						(le = e),
						(qe = !0),
						(i = Ut),
						wn(e.type) ? ((uc = i), (Ut = He(a.firstChild))) : (Ut = i)),
					kt(t, e, e.pendingProps.children, n),
					su(t, e),
					t === null && (e.flags |= 4194304),
					e.child
				);
			case 5:
				return (
					t === null &&
						gt &&
						((i = a = Ut) &&
							((a = sv(a, e.type, e.pendingProps, qe)),
							a !== null
								? ((e.stateNode = a),
									(le = e),
									(Ut = He(a.firstChild)),
									(qe = !1),
									(i = !0))
								: (i = !1)),
						i || na(e)),
					Xn(e),
					(i = e.type),
					(s = e.pendingProps),
					(f = t !== null ? t.memoizedProps : null),
					(a = s.children),
					nc(i, s) ? (a = null) : f !== null && nc(i, f) && (e.flags |= 32),
					e.memoizedState !== null &&
						((i = es(t, e, Mm, null, null, n)), (ai._currentValue = i)),
					su(t, e),
					kt(t, e, a, n),
					e.child
				);
			case 6:
				return (
					t === null &&
						gt &&
						((t = n = Ut) &&
							((n = cv(n, e.pendingProps, qe)),
							n !== null
								? ((e.stateNode = n), (le = e), (Ut = null), (t = !0))
								: (t = !1)),
						t || na(e)),
					null
				);
			case 13:
				return Rd(t, e, n);
			case 4:
				return (
					bt(e, e.stateNode.containerInfo),
					(a = e.pendingProps),
					t === null ? (e.child = Ga(e, null, a, n)) : kt(t, e, a, n),
					e.child
				);
			case 11:
				return pd(t, e, e.type, e.pendingProps, n);
			case 7:
				return kt(t, e, e.pendingProps, n), e.child;
			case 8:
				return kt(t, e, e.pendingProps.children, n), e.child;
			case 12:
				return kt(t, e, e.pendingProps.children, n), e.child;
			case 10:
				return (
					(a = e.pendingProps),
					yn(e, e.type, a.value),
					kt(t, e, a.children, n),
					e.child
				);
			case 9:
				return (
					(i = e.type._context),
					(a = e.pendingProps.children),
					la(e),
					(i = It(i)),
					(a = a(i)),
					(e.flags |= 1),
					kt(t, e, a, n),
					e.child
				);
			case 14:
				return yd(t, e, e.type, e.pendingProps, n);
			case 15:
				return md(t, e, e.type, e.pendingProps, n);
			case 19:
				return Td(t, e, n);
			case 31:
				return (
					(a = e.pendingProps),
					(n = e.mode),
					(a = { mode: a.mode, children: a.children }),
					t === null
						? ((n = cu(a, n)),
							(n.ref = e.ref),
							(e.child = n),
							(n.return = e),
							(e = n))
						: ((n = ke(t.child, a)),
							(n.ref = e.ref),
							(e.child = n),
							(n.return = e),
							(e = n)),
					e
				);
			case 22:
				return vd(t, e, n);
			case 24:
				return (
					la(e),
					(a = It(Gt)),
					t === null
						? ((i = Kr()),
							i === null &&
								((i = zt),
								(s = Qr()),
								(i.pooledCache = s),
								s.refCount++,
								s !== null && (i.pooledCacheLanes |= n),
								(i = s)),
							(e.memoizedState = { parent: a, cache: i }),
							Pr(e),
							yn(e, Gt, i))
						: ((t.lanes & n) !== 0 && (kr(t, e), Ll(e, null, null, n), Nl()),
							(i = t.memoizedState),
							(s = e.memoizedState),
							i.parent !== a
								? ((i = { parent: a, cache: a }),
									(e.memoizedState = i),
									e.lanes === 0 &&
										(e.memoizedState = e.updateQueue.baseState = i),
									yn(e, Gt, a))
								: ((a = s.cache),
									yn(e, Gt, a),
									a !== i.cache && Xr(e, [Gt], n, !0))),
					kt(t, e, e.pendingProps.children, n),
					e.child
				);
			case 29:
				throw e.pendingProps;
		}
		throw Error(c(156, e.tag));
	}
	function an(t) {
		t.flags |= 4;
	}
	function Md(t, e) {
		if (e.type !== 'stylesheet' || (e.state.loading & 4) !== 0)
			t.flags &= -16777217;
		else if (((t.flags |= 16777216), !Nh(e))) {
			if (
				((e = ze.current),
				e !== null &&
					((yt & 4194048) === yt
						? Ve !== null
						: ((yt & 62914560) !== yt && (yt & 536870912) === 0) || e !== Ve))
			)
				throw ((Cl = Jr), cf);
			t.flags |= 8192;
		}
	}
	function ou(t, e) {
		e !== null && (t.flags |= 4),
			t.flags & 16384 &&
				((e = t.tag !== 22 ? no() : 536870912), (t.lanes |= e), (Ka |= e));
	}
	function Gl(t, e) {
		if (!gt)
			switch (t.tailMode) {
				case 'hidden':
					e = t.tail;
					for (var n = null; e !== null; )
						e.alternate !== null && (n = e), (e = e.sibling);
					n === null ? (t.tail = null) : (n.sibling = null);
					break;
				case 'collapsed':
					n = t.tail;
					for (var a = null; n !== null; )
						n.alternate !== null && (a = n), (n = n.sibling);
					a === null
						? e || t.tail === null
							? (t.tail = null)
							: (t.tail.sibling = null)
						: (a.sibling = null);
			}
	}
	function Ct(t) {
		var e = t.alternate !== null && t.alternate.child === t.child,
			n = 0,
			a = 0;
		if (e)
			for (var i = t.child; i !== null; )
				(n |= i.lanes | i.childLanes),
					(a |= i.subtreeFlags & 65011712),
					(a |= i.flags & 65011712),
					(i.return = t),
					(i = i.sibling);
		else
			for (i = t.child; i !== null; )
				(n |= i.lanes | i.childLanes),
					(a |= i.subtreeFlags),
					(a |= i.flags),
					(i.return = t),
					(i = i.sibling);
		return (t.subtreeFlags |= a), (t.childLanes = n), e;
	}
	function Lm(t, e, n) {
		var a = e.pendingProps;
		switch ((qr(e), e.tag)) {
			case 31:
			case 16:
			case 15:
			case 0:
			case 11:
			case 7:
			case 8:
			case 12:
			case 9:
			case 14:
				return Ct(e), null;
			case 1:
				return Ct(e), null;
			case 3:
				return (
					(n = e.stateNode),
					(a = null),
					t !== null && (a = t.memoizedState.cache),
					e.memoizedState.cache !== a && (e.flags |= 2048),
					Ie(Gt),
					ae(),
					n.pendingContext &&
						((n.context = n.pendingContext), (n.pendingContext = null)),
					(t === null || t.child === null) &&
						(Al(e)
							? an(e)
							: t === null ||
								(t.memoizedState.isDehydrated && (e.flags & 256) === 0) ||
								((e.flags |= 1024), af())),
					Ct(e),
					null
				);
			case 26:
				return (
					(n = e.memoizedState),
					t === null
						? (an(e),
							n !== null ? (Ct(e), Md(e, n)) : (Ct(e), (e.flags &= -16777217)))
						: n
							? n !== t.memoizedState
								? (an(e), Ct(e), Md(e, n))
								: (Ct(e), (e.flags &= -16777217))
							: (t.memoizedProps !== a && an(e), Ct(e), (e.flags &= -16777217)),
					null
				);
			case 27:
				on(e), (n = $.current);
				var i = e.type;
				if (t !== null && e.stateNode != null) t.memoizedProps !== a && an(e);
				else {
					if (!a) {
						if (e.stateNode === null) throw Error(c(166));
						return Ct(e), null;
					}
					(t = k.current),
						Al(e) ? ef(e) : ((t = Mh(i, a, n)), (e.stateNode = t), an(e));
				}
				return Ct(e), null;
			case 5:
				if ((on(e), (n = e.type), t !== null && e.stateNode != null))
					t.memoizedProps !== a && an(e);
				else {
					if (!a) {
						if (e.stateNode === null) throw Error(c(166));
						return Ct(e), null;
					}
					if (((t = k.current), Al(e))) ef(e);
					else {
						switch (((i = Eu($.current)), t)) {
							case 1:
								t = i.createElementNS('http://www.w3.org/2000/svg', n);
								break;
							case 2:
								t = i.createElementNS('http://www.w3.org/1998/Math/MathML', n);
								break;
							default:
								switch (n) {
									case 'svg':
										t = i.createElementNS('http://www.w3.org/2000/svg', n);
										break;
									case 'math':
										t = i.createElementNS(
											'http://www.w3.org/1998/Math/MathML',
											n,
										);
										break;
									case 'script':
										(t = i.createElement('div')),
											(t.innerHTML = '<script><\/script>'),
											(t = t.removeChild(t.firstChild));
										break;
									case 'select':
										(t =
											typeof a.is == 'string'
												? i.createElement('select', { is: a.is })
												: i.createElement('select')),
											a.multiple
												? (t.multiple = !0)
												: a.size && (t.size = a.size);
										break;
									default:
										t =
											typeof a.is == 'string'
												? i.createElement(n, { is: a.is })
												: i.createElement(n);
								}
						}
						(t[Wt] = e), (t[ie] = a);
						t: for (i = e.child; i !== null; ) {
							if (i.tag === 5 || i.tag === 6) t.appendChild(i.stateNode);
							else if (i.tag !== 4 && i.tag !== 27 && i.child !== null) {
								(i.child.return = i), (i = i.child);
								continue;
							}
							if (i === e) break t;
							for (; i.sibling === null; ) {
								if (i.return === null || i.return === e) break t;
								i = i.return;
							}
							(i.sibling.return = i.return), (i = i.sibling);
						}
						e.stateNode = t;
						t: switch ((Ft(t, n, a), n)) {
							case 'button':
							case 'input':
							case 'select':
							case 'textarea':
								t = !!a.autoFocus;
								break t;
							case 'img':
								t = !0;
								break t;
							default:
								t = !1;
						}
						t && an(e);
					}
				}
				return Ct(e), (e.flags &= -16777217), null;
			case 6:
				if (t && e.stateNode != null) t.memoizedProps !== a && an(e);
				else {
					if (typeof a != 'string' && e.stateNode === null) throw Error(c(166));
					if (((t = $.current), Al(e))) {
						if (
							((t = e.stateNode),
							(n = e.memoizedProps),
							(a = null),
							(i = le),
							i !== null)
						)
							switch (i.tag) {
								case 27:
								case 5:
									a = i.memoizedProps;
							}
						(t[Wt] = e),
							(t = !!(
								t.nodeValue === n ||
								(a !== null && a.suppressHydrationWarning === !0) ||
								Sh(t.nodeValue, n)
							)),
							t || na(e);
					} else (t = Eu(t).createTextNode(a)), (t[Wt] = e), (e.stateNode = t);
				}
				return Ct(e), null;
			case 13:
				if (
					((a = e.memoizedState),
					t === null ||
						(t.memoizedState !== null && t.memoizedState.dehydrated !== null))
				) {
					if (((i = Al(e)), a !== null && a.dehydrated !== null)) {
						if (t === null) {
							if (!i) throw Error(c(318));
							if (
								((i = e.memoizedState),
								(i = i !== null ? i.dehydrated : null),
								!i)
							)
								throw Error(c(317));
							i[Wt] = e;
						} else
							Ml(),
								(e.flags & 128) === 0 && (e.memoizedState = null),
								(e.flags |= 4);
						Ct(e), (i = !1);
					} else
						(i = af()),
							t !== null &&
								t.memoizedState !== null &&
								(t.memoizedState.hydrationErrors = i),
							(i = !0);
					if (!i) return e.flags & 256 ? (en(e), e) : (en(e), null);
				}
				if ((en(e), (e.flags & 128) !== 0)) return (e.lanes = n), e;
				if (
					((n = a !== null), (t = t !== null && t.memoizedState !== null), n)
				) {
					(a = e.child),
						(i = null),
						a.alternate !== null &&
							a.alternate.memoizedState !== null &&
							a.alternate.memoizedState.cachePool !== null &&
							(i = a.alternate.memoizedState.cachePool.pool);
					var s = null;
					a.memoizedState !== null &&
						a.memoizedState.cachePool !== null &&
						(s = a.memoizedState.cachePool.pool),
						s !== i && (a.flags |= 2048);
				}
				return (
					n !== t && n && (e.child.flags |= 8192),
					ou(e, e.updateQueue),
					Ct(e),
					null
				);
			case 4:
				return ae(), t === null && Fs(e.stateNode.containerInfo), Ct(e), null;
			case 10:
				return Ie(e.type), Ct(e), null;
			case 19:
				if ((G(Xt), (i = e.memoizedState), i === null)) return Ct(e), null;
				if (((a = (e.flags & 128) !== 0), (s = i.rendering), s === null))
					if (a) Gl(i, !1);
					else {
						if (Nt !== 0 || (t !== null && (t.flags & 128) !== 0))
							for (t = e.child; t !== null; ) {
								if (((s = iu(t)), s !== null)) {
									for (
										e.flags |= 128,
											Gl(i, !1),
											t = s.updateQueue,
											e.updateQueue = t,
											ou(e, t),
											e.subtreeFlags = 0,
											t = n,
											n = e.child;
										n !== null;
									)
										Io(n, t), (n = n.sibling);
									return q(Xt, (Xt.current & 1) | 2), e.child;
								}
								t = t.sibling;
							}
						i.tail !== null &&
							Re() > hu &&
							((e.flags |= 128), (a = !0), Gl(i, !1), (e.lanes = 4194304));
					}
				else {
					if (!a)
						if (((t = iu(s)), t !== null)) {
							if (
								((e.flags |= 128),
								(a = !0),
								(t = t.updateQueue),
								(e.updateQueue = t),
								ou(e, t),
								Gl(i, !0),
								i.tail === null &&
									i.tailMode === 'hidden' &&
									!s.alternate &&
									!gt)
							)
								return Ct(e), null;
						} else
							2 * Re() - i.renderingStartTime > hu &&
								n !== 536870912 &&
								((e.flags |= 128), (a = !0), Gl(i, !1), (e.lanes = 4194304));
					i.isBackwards
						? ((s.sibling = e.child), (e.child = s))
						: ((t = i.last),
							t !== null ? (t.sibling = s) : (e.child = s),
							(i.last = s));
				}
				return i.tail !== null
					? ((e = i.tail),
						(i.rendering = e),
						(i.tail = e.sibling),
						(i.renderingStartTime = Re()),
						(e.sibling = null),
						(t = Xt.current),
						q(Xt, a ? (t & 1) | 2 : t & 1),
						e)
					: (Ct(e), null);
			case 22:
			case 23:
				return (
					en(e),
					Ir(),
					(a = e.memoizedState !== null),
					t !== null
						? (t.memoizedState !== null) !== a && (e.flags |= 8192)
						: a && (e.flags |= 8192),
					a
						? (n & 536870912) !== 0 &&
							(e.flags & 128) === 0 &&
							(Ct(e), e.subtreeFlags & 6 && (e.flags |= 8192))
						: Ct(e),
					(n = e.updateQueue),
					n !== null && ou(e, n.retryQueue),
					(n = null),
					t !== null &&
						t.memoizedState !== null &&
						t.memoizedState.cachePool !== null &&
						(n = t.memoizedState.cachePool.pool),
					(a = null),
					e.memoizedState !== null &&
						e.memoizedState.cachePool !== null &&
						(a = e.memoizedState.cachePool.pool),
					a !== n && (e.flags |= 2048),
					t !== null && G(ia),
					null
				);
			case 24:
				return (
					(n = null),
					t !== null && (n = t.memoizedState.cache),
					e.memoizedState.cache !== n && (e.flags |= 2048),
					Ie(Gt),
					Ct(e),
					null
				);
			case 25:
				return null;
			case 30:
				return null;
		}
		throw Error(c(156, e.tag));
	}
	function Bm(t, e) {
		switch ((qr(e), e.tag)) {
			case 1:
				return (
					(t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
				);
			case 3:
				return (
					Ie(Gt),
					ae(),
					(t = e.flags),
					(t & 65536) !== 0 && (t & 128) === 0
						? ((e.flags = (t & -65537) | 128), e)
						: null
				);
			case 26:
			case 27:
			case 5:
				return on(e), null;
			case 13:
				if (
					(en(e), (t = e.memoizedState), t !== null && t.dehydrated !== null)
				) {
					if (e.alternate === null) throw Error(c(340));
					Ml();
				}
				return (
					(t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
				);
			case 19:
				return G(Xt), null;
			case 4:
				return ae(), null;
			case 10:
				return Ie(e.type), null;
			case 22:
			case 23:
				return (
					en(e),
					Ir(),
					t !== null && G(ia),
					(t = e.flags),
					t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
				);
			case 24:
				return Ie(Gt), null;
			case 25:
				return null;
			default:
				return null;
		}
	}
	function Od(t, e) {
		switch ((qr(e), e.tag)) {
			case 3:
				Ie(Gt), ae();
				break;
			case 26:
			case 27:
			case 5:
				on(e);
				break;
			case 4:
				ae();
				break;
			case 13:
				en(e);
				break;
			case 19:
				G(Xt);
				break;
			case 10:
				Ie(e.type);
				break;
			case 22:
			case 23:
				en(e), Ir(), t !== null && G(ia);
				break;
			case 24:
				Ie(Gt);
		}
	}
	function Xl(t, e) {
		try {
			var n = e.updateQueue,
				a = n !== null ? n.lastEffect : null;
			if (a !== null) {
				var i = a.next;
				n = i;
				do {
					if ((n.tag & t) === t) {
						a = void 0;
						var s = n.create,
							f = n.inst;
						(a = s()), (f.destroy = a);
					}
					n = n.next;
				} while (n !== i);
			}
		} catch (m) {
			xt(e, e.return, m);
		}
	}
	function Rn(t, e, n) {
		try {
			var a = e.updateQueue,
				i = a !== null ? a.lastEffect : null;
			if (i !== null) {
				var s = i.next;
				a = s;
				do {
					if ((a.tag & t) === t) {
						var f = a.inst,
							m = f.destroy;
						if (m !== void 0) {
							(f.destroy = void 0), (i = e);
							var R = n,
								x = m;
							try {
								x();
							} catch (U) {
								xt(i, R, U);
							}
						}
					}
					a = a.next;
				} while (a !== s);
			}
		} catch (U) {
			xt(e, e.return, U);
		}
	}
	function xd(t) {
		var e = t.updateQueue;
		if (e !== null) {
			var n = t.stateNode;
			try {
				yf(e, n);
			} catch (a) {
				xt(t, t.return, a);
			}
		}
	}
	function zd(t, e, n) {
		(n.props = ra(t.type, t.memoizedProps)), (n.state = t.memoizedState);
		try {
			n.componentWillUnmount();
		} catch (a) {
			xt(t, e, a);
		}
	}
	function Ql(t, e) {
		try {
			var n = t.ref;
			if (n !== null) {
				switch (t.tag) {
					case 26:
					case 27:
					case 5:
						var a = t.stateNode;
						break;
					case 30:
						a = t.stateNode;
						break;
					default:
						a = t.stateNode;
				}
				typeof n == 'function' ? (t.refCleanup = n(a)) : (n.current = a);
			}
		} catch (i) {
			xt(t, e, i);
		}
	}
	function Ye(t, e) {
		var n = t.ref,
			a = t.refCleanup;
		if (n !== null)
			if (typeof a == 'function')
				try {
					a();
				} catch (i) {
					xt(t, e, i);
				} finally {
					(t.refCleanup = null),
						(t = t.alternate),
						t != null && (t.refCleanup = null);
				}
			else if (typeof n == 'function')
				try {
					n(null);
				} catch (i) {
					xt(t, e, i);
				}
			else n.current = null;
	}
	function wd(t) {
		var e = t.type,
			n = t.memoizedProps,
			a = t.stateNode;
		try {
			t: switch (e) {
				case 'button':
				case 'input':
				case 'select':
				case 'textarea':
					n.autoFocus && a.focus();
					break t;
				case 'img':
					n.src ? (a.src = n.src) : n.srcSet && (a.srcset = n.srcSet);
			}
		} catch (i) {
			xt(t, t.return, i);
		}
	}
	function Os(t, e, n) {
		try {
			var a = t.stateNode;
			av(a, t.type, n, e), (a[ie] = e);
		} catch (i) {
			xt(t, t.return, i);
		}
	}
	function Dd(t) {
		return (
			t.tag === 5 ||
			t.tag === 3 ||
			t.tag === 26 ||
			(t.tag === 27 && wn(t.type)) ||
			t.tag === 4
		);
	}
	function xs(t) {
		t: for (;;) {
			for (; t.sibling === null; ) {
				if (t.return === null || Dd(t.return)) return null;
				t = t.return;
			}
			for (
				t.sibling.return = t.return, t = t.sibling;
				t.tag !== 5 && t.tag !== 6 && t.tag !== 18;
			) {
				if (
					(t.tag === 27 && wn(t.type)) ||
					t.flags & 2 ||
					t.child === null ||
					t.tag === 4
				)
					continue t;
				(t.child.return = t), (t = t.child);
			}
			if (!(t.flags & 2)) return t.stateNode;
		}
	}
	function zs(t, e, n) {
		var a = t.tag;
		if (a === 5 || a === 6)
			(t = t.stateNode),
				e
					? (n.nodeType === 9
							? n.body
							: n.nodeName === 'HTML'
								? n.ownerDocument.body
								: n
						).insertBefore(t, e)
					: ((e =
							n.nodeType === 9
								? n.body
								: n.nodeName === 'HTML'
									? n.ownerDocument.body
									: n),
						e.appendChild(t),
						(n = n._reactRootContainer),
						n != null || e.onclick !== null || (e.onclick = Ru));
		else if (
			a !== 4 &&
			(a === 27 && wn(t.type) && ((n = t.stateNode), (e = null)),
			(t = t.child),
			t !== null)
		)
			for (zs(t, e, n), t = t.sibling; t !== null; )
				zs(t, e, n), (t = t.sibling);
	}
	function fu(t, e, n) {
		var a = t.tag;
		if (a === 5 || a === 6)
			(t = t.stateNode), e ? n.insertBefore(t, e) : n.appendChild(t);
		else if (
			a !== 4 &&
			(a === 27 && wn(t.type) && (n = t.stateNode), (t = t.child), t !== null)
		)
			for (fu(t, e, n), t = t.sibling; t !== null; )
				fu(t, e, n), (t = t.sibling);
	}
	function Cd(t) {
		var e = t.stateNode,
			n = t.memoizedProps;
		try {
			for (var a = t.type, i = e.attributes; i.length; )
				e.removeAttributeNode(i[0]);
			Ft(e, a, n), (e[Wt] = t), (e[ie] = n);
		} catch (s) {
			xt(t, t.return, s);
		}
	}
	var ln = !1,
		Bt = !1,
		ws = !1,
		Ud = typeof WeakSet == 'function' ? WeakSet : Set,
		Jt = null;
	function Hm(t, e) {
		if (((t = t.containerInfo), (tc = zu), (t = Xo(t)), xr(t))) {
			if ('selectionStart' in t)
				var n = { start: t.selectionStart, end: t.selectionEnd };
			else
				t: {
					n = ((n = t.ownerDocument) && n.defaultView) || window;
					var a = n.getSelection && n.getSelection();
					if (a && a.rangeCount !== 0) {
						n = a.anchorNode;
						var i = a.anchorOffset,
							s = a.focusNode;
						a = a.focusOffset;
						try {
							n.nodeType, s.nodeType;
						} catch {
							n = null;
							break t;
						}
						var f = 0,
							m = -1,
							R = -1,
							x = 0,
							U = 0,
							L = t,
							z = null;
						e: for (;;) {
							for (
								var w;
								L !== n || (i !== 0 && L.nodeType !== 3) || (m = f + i),
									L !== s || (a !== 0 && L.nodeType !== 3) || (R = f + a),
									L.nodeType === 3 && (f += L.nodeValue.length),
									(w = L.firstChild) !== null;
							)
								(z = L), (L = w);
							for (;;) {
								if (L === t) break e;
								if (
									(z === n && ++x === i && (m = f),
									z === s && ++U === a && (R = f),
									(w = L.nextSibling) !== null)
								)
									break;
								(L = z), (z = L.parentNode);
							}
							L = w;
						}
						n = m === -1 || R === -1 ? null : { start: m, end: R };
					} else n = null;
				}
			n = n || { start: 0, end: 0 };
		} else n = null;
		for (
			ec = { focusedElem: t, selectionRange: n }, zu = !1, Jt = e;
			Jt !== null;
		)
			if (
				((e = Jt), (t = e.child), (e.subtreeFlags & 1024) !== 0 && t !== null)
			)
				(t.return = e), (Jt = t);
			else
				for (; Jt !== null; ) {
					switch (((e = Jt), (s = e.alternate), (t = e.flags), e.tag)) {
						case 0:
							break;
						case 11:
						case 15:
							break;
						case 1:
							if ((t & 1024) !== 0 && s !== null) {
								(t = void 0),
									(n = e),
									(i = s.memoizedProps),
									(s = s.memoizedState),
									(a = n.stateNode);
								try {
									var at = ra(n.type, i, n.elementType === n.type);
									(t = a.getSnapshotBeforeUpdate(at, s)),
										(a.__reactInternalSnapshotBeforeUpdate = t);
								} catch (I) {
									xt(n, n.return, I);
								}
							}
							break;
						case 3:
							if ((t & 1024) !== 0) {
								if (
									((t = e.stateNode.containerInfo), (n = t.nodeType), n === 9)
								)
									lc(t);
								else if (n === 1)
									switch (t.nodeName) {
										case 'HEAD':
										case 'HTML':
										case 'BODY':
											lc(t);
											break;
										default:
											t.textContent = '';
									}
							}
							break;
						case 5:
						case 26:
						case 27:
						case 6:
						case 4:
						case 17:
							break;
						default:
							if ((t & 1024) !== 0) throw Error(c(163));
					}
					if (((t = e.sibling), t !== null)) {
						(t.return = e.return), (Jt = t);
						break;
					}
					Jt = e.return;
				}
	}
	function Nd(t, e, n) {
		var a = n.flags;
		switch (n.tag) {
			case 0:
			case 11:
			case 15:
				En(t, n), a & 4 && Xl(5, n);
				break;
			case 1:
				if ((En(t, n), a & 4))
					if (((t = n.stateNode), e === null))
						try {
							t.componentDidMount();
						} catch (f) {
							xt(n, n.return, f);
						}
					else {
						var i = ra(n.type, e.memoizedProps);
						e = e.memoizedState;
						try {
							t.componentDidUpdate(i, e, t.__reactInternalSnapshotBeforeUpdate);
						} catch (f) {
							xt(n, n.return, f);
						}
					}
				a & 64 && xd(n), a & 512 && Ql(n, n.return);
				break;
			case 3:
				if ((En(t, n), a & 64 && ((t = n.updateQueue), t !== null))) {
					if (((e = null), n.child !== null))
						switch (n.child.tag) {
							case 27:
							case 5:
								e = n.child.stateNode;
								break;
							case 1:
								e = n.child.stateNode;
						}
					try {
						yf(t, e);
					} catch (f) {
						xt(n, n.return, f);
					}
				}
				break;
			case 27:
				e === null && a & 4 && Cd(n);
			case 26:
			case 5:
				En(t, n), e === null && a & 4 && wd(n), a & 512 && Ql(n, n.return);
				break;
			case 12:
				En(t, n);
				break;
			case 13:
				En(t, n),
					a & 4 && Hd(t, n),
					a & 64 &&
						((t = n.memoizedState),
						t !== null &&
							((t = t.dehydrated),
							t !== null && ((n = Km.bind(null, n)), ov(t, n))));
				break;
			case 22:
				if (((a = n.memoizedState !== null || ln), !a)) {
					(e = (e !== null && e.memoizedState !== null) || Bt), (i = ln);
					var s = Bt;
					(ln = a),
						(Bt = e) && !s ? Tn(t, n, (n.subtreeFlags & 8772) !== 0) : En(t, n),
						(ln = i),
						(Bt = s);
				}
				break;
			case 30:
				break;
			default:
				En(t, n);
		}
	}
	function Ld(t) {
		var e = t.alternate;
		e !== null && ((t.alternate = null), Ld(e)),
			(t.child = null),
			(t.deletions = null),
			(t.sibling = null),
			t.tag === 5 && ((e = t.stateNode), e !== null && cr(e)),
			(t.stateNode = null),
			(t.return = null),
			(t.dependencies = null),
			(t.memoizedProps = null),
			(t.memoizedState = null),
			(t.pendingProps = null),
			(t.stateNode = null),
			(t.updateQueue = null);
	}
	var Dt = null,
		se = !1;
	function un(t, e, n) {
		for (n = n.child; n !== null; ) Bd(t, e, n), (n = n.sibling);
	}
	function Bd(t, e, n) {
		if (de && typeof de.onCommitFiberUnmount == 'function')
			try {
				de.onCommitFiberUnmount(fn, n);
			} catch {}
		switch (n.tag) {
			case 26:
				Bt || Ye(n, e),
					un(t, e, n),
					n.memoizedState
						? n.memoizedState.count--
						: n.stateNode && ((n = n.stateNode), n.parentNode.removeChild(n));
				break;
			case 27:
				Bt || Ye(n, e);
				var a = Dt,
					i = se;
				wn(n.type) && ((Dt = n.stateNode), (se = !1)),
					un(t, e, n),
					Il(n.stateNode),
					(Dt = a),
					(se = i);
				break;
			case 5:
				Bt || Ye(n, e);
			case 6:
				if (
					((a = Dt),
					(i = se),
					(Dt = null),
					un(t, e, n),
					(Dt = a),
					(se = i),
					Dt !== null)
				)
					if (se)
						try {
							(Dt.nodeType === 9
								? Dt.body
								: Dt.nodeName === 'HTML'
									? Dt.ownerDocument.body
									: Dt
							).removeChild(n.stateNode);
						} catch (s) {
							xt(n, e, s);
						}
					else
						try {
							Dt.removeChild(n.stateNode);
						} catch (s) {
							xt(n, e, s);
						}
				break;
			case 18:
				Dt !== null &&
					(se
						? ((t = Dt),
							Th(
								t.nodeType === 9
									? t.body
									: t.nodeName === 'HTML'
										? t.ownerDocument.body
										: t,
								n.stateNode,
							),
							ri(t))
						: Th(Dt, n.stateNode));
				break;
			case 4:
				(a = Dt),
					(i = se),
					(Dt = n.stateNode.containerInfo),
					(se = !0),
					un(t, e, n),
					(Dt = a),
					(se = i);
				break;
			case 0:
			case 11:
			case 14:
			case 15:
				Bt || Rn(2, n, e), Bt || Rn(4, n, e), un(t, e, n);
				break;
			case 1:
				Bt ||
					(Ye(n, e),
					(a = n.stateNode),
					typeof a.componentWillUnmount == 'function' && zd(n, e, a)),
					un(t, e, n);
				break;
			case 21:
				un(t, e, n);
				break;
			case 22:
				(Bt = (a = Bt) || n.memoizedState !== null), un(t, e, n), (Bt = a);
				break;
			default:
				un(t, e, n);
		}
	}
	function Hd(t, e) {
		if (
			e.memoizedState === null &&
			((t = e.alternate),
			t !== null &&
				((t = t.memoizedState), t !== null && ((t = t.dehydrated), t !== null)))
		)
			try {
				ri(t);
			} catch (n) {
				xt(e, e.return, n);
			}
	}
	function jm(t) {
		switch (t.tag) {
			case 13:
			case 19:
				var e = t.stateNode;
				return e === null && (e = t.stateNode = new Ud()), e;
			case 22:
				return (
					(t = t.stateNode),
					(e = t._retryCache),
					e === null && (e = t._retryCache = new Ud()),
					e
				);
			default:
				throw Error(c(435, t.tag));
		}
	}
	function Ds(t, e) {
		var n = jm(t);
		e.forEach(function (a) {
			var i = Jm.bind(null, t, a);
			n.has(a) || (n.add(a), a.then(i, i));
		});
	}
	function me(t, e) {
		var n = e.deletions;
		if (n !== null)
			for (var a = 0; a < n.length; a++) {
				var i = n[a],
					s = t,
					f = e,
					m = f;
				t: for (; m !== null; ) {
					switch (m.tag) {
						case 27:
							if (wn(m.type)) {
								(Dt = m.stateNode), (se = !1);
								break t;
							}
							break;
						case 5:
							(Dt = m.stateNode), (se = !1);
							break t;
						case 3:
						case 4:
							(Dt = m.stateNode.containerInfo), (se = !0);
							break t;
					}
					m = m.return;
				}
				if (Dt === null) throw Error(c(160));
				Bd(s, f, i),
					(Dt = null),
					(se = !1),
					(s = i.alternate),
					s !== null && (s.return = null),
					(i.return = null);
			}
		if (e.subtreeFlags & 13878)
			for (e = e.child; e !== null; ) jd(e, t), (e = e.sibling);
	}
	var Be = null;
	function jd(t, e) {
		var n = t.alternate,
			a = t.flags;
		switch (t.tag) {
			case 0:
			case 11:
			case 14:
			case 15:
				me(e, t),
					ve(t),
					a & 4 && (Rn(3, t, t.return), Xl(3, t), Rn(5, t, t.return));
				break;
			case 1:
				me(e, t),
					ve(t),
					a & 512 && (Bt || n === null || Ye(n, n.return)),
					a & 64 &&
						ln &&
						((t = t.updateQueue),
						t !== null &&
							((a = t.callbacks),
							a !== null &&
								((n = t.shared.hiddenCallbacks),
								(t.shared.hiddenCallbacks = n === null ? a : n.concat(a)))));
				break;
			case 26:
				var i = Be;
				if (
					(me(e, t),
					ve(t),
					a & 512 && (Bt || n === null || Ye(n, n.return)),
					a & 4)
				) {
					var s = n !== null ? n.memoizedState : null;
					if (((a = t.memoizedState), n === null))
						if (a === null)
							if (t.stateNode === null) {
								t: {
									(a = t.type),
										(n = t.memoizedProps),
										(i = i.ownerDocument || i);
									e: switch (a) {
										case 'title':
											(s = i.getElementsByTagName('title')[0]),
												(!s ||
													s[pl] ||
													s[Wt] ||
													s.namespaceURI === 'http://www.w3.org/2000/svg' ||
													s.hasAttribute('itemprop')) &&
													((s = i.createElement(a)),
													i.head.insertBefore(
														s,
														i.querySelector('head > title'),
													)),
												Ft(s, a, n),
												(s[Wt] = t),
												Zt(s),
												(a = s);
											break t;
										case 'link':
											var f = Ch('link', 'href', i).get(a + (n.href || ''));
											if (f) {
												for (var m = 0; m < f.length; m++)
													if (
														((s = f[m]),
														s.getAttribute('href') ===
															(n.href == null || n.href === ''
																? null
																: n.href) &&
															s.getAttribute('rel') ===
																(n.rel == null ? null : n.rel) &&
															s.getAttribute('title') ===
																(n.title == null ? null : n.title) &&
															s.getAttribute('crossorigin') ===
																(n.crossOrigin == null ? null : n.crossOrigin))
													) {
														f.splice(m, 1);
														break e;
													}
											}
											(s = i.createElement(a)),
												Ft(s, a, n),
												i.head.appendChild(s);
											break;
										case 'meta':
											if (
												(f = Ch('meta', 'content', i).get(
													a + (n.content || ''),
												))
											) {
												for (m = 0; m < f.length; m++)
													if (
														((s = f[m]),
														s.getAttribute('content') ===
															(n.content == null ? null : '' + n.content) &&
															s.getAttribute('name') ===
																(n.name == null ? null : n.name) &&
															s.getAttribute('property') ===
																(n.property == null ? null : n.property) &&
															s.getAttribute('http-equiv') ===
																(n.httpEquiv == null ? null : n.httpEquiv) &&
															s.getAttribute('charset') ===
																(n.charSet == null ? null : n.charSet))
													) {
														f.splice(m, 1);
														break e;
													}
											}
											(s = i.createElement(a)),
												Ft(s, a, n),
												i.head.appendChild(s);
											break;
										default:
											throw Error(c(468, a));
									}
									(s[Wt] = t), Zt(s), (a = s);
								}
								t.stateNode = a;
							} else Uh(i, t.type, t.stateNode);
						else t.stateNode = Dh(i, a, t.memoizedProps);
					else
						s !== a
							? (s === null
									? n.stateNode !== null &&
										((n = n.stateNode), n.parentNode.removeChild(n))
									: s.count--,
								a === null
									? Uh(i, t.type, t.stateNode)
									: Dh(i, a, t.memoizedProps))
							: a === null &&
								t.stateNode !== null &&
								Os(t, t.memoizedProps, n.memoizedProps);
				}
				break;
			case 27:
				me(e, t),
					ve(t),
					a & 512 && (Bt || n === null || Ye(n, n.return)),
					n !== null && a & 4 && Os(t, t.memoizedProps, n.memoizedProps);
				break;
			case 5:
				if (
					(me(e, t),
					ve(t),
					a & 512 && (Bt || n === null || Ye(n, n.return)),
					t.flags & 32)
				) {
					i = t.stateNode;
					try {
						Ta(i, '');
					} catch (w) {
						xt(t, t.return, w);
					}
				}
				a & 4 &&
					t.stateNode != null &&
					((i = t.memoizedProps), Os(t, i, n !== null ? n.memoizedProps : i)),
					a & 1024 && (ws = !0);
				break;
			case 6:
				if ((me(e, t), ve(t), a & 4)) {
					if (t.stateNode === null) throw Error(c(162));
					(a = t.memoizedProps), (n = t.stateNode);
					try {
						n.nodeValue = a;
					} catch (w) {
						xt(t, t.return, w);
					}
				}
				break;
			case 3:
				if (
					((Mu = null),
					(i = Be),
					(Be = Tu(e.containerInfo)),
					me(e, t),
					(Be = i),
					ve(t),
					a & 4 && n !== null && n.memoizedState.isDehydrated)
				)
					try {
						ri(e.containerInfo);
					} catch (w) {
						xt(t, t.return, w);
					}
				ws && ((ws = !1), qd(t));
				break;
			case 4:
				(a = Be),
					(Be = Tu(t.stateNode.containerInfo)),
					me(e, t),
					ve(t),
					(Be = a);
				break;
			case 12:
				me(e, t), ve(t);
				break;
			case 13:
				me(e, t),
					ve(t),
					t.child.flags & 8192 &&
						(t.memoizedState !== null) !=
							(n !== null && n.memoizedState !== null) &&
						(Hs = Re()),
					a & 4 &&
						((a = t.updateQueue),
						a !== null && ((t.updateQueue = null), Ds(t, a)));
				break;
			case 22:
				i = t.memoizedState !== null;
				var R = n !== null && n.memoizedState !== null,
					x = ln,
					U = Bt;
				if (
					((ln = x || i),
					(Bt = U || R),
					me(e, t),
					(Bt = U),
					(ln = x),
					ve(t),
					a & 8192)
				)
					t: for (
						e = t.stateNode,
							e._visibility = i ? e._visibility & -2 : e._visibility | 1,
							i && (n === null || R || ln || Bt || sa(t)),
							n = null,
							e = t;
						;
					) {
						if (e.tag === 5 || e.tag === 26) {
							if (n === null) {
								R = n = e;
								try {
									if (((s = R.stateNode), i))
										(f = s.style),
											typeof f.setProperty == 'function'
												? f.setProperty('display', 'none', 'important')
												: (f.display = 'none');
									else {
										m = R.stateNode;
										var L = R.memoizedProps.style,
											z =
												L != null && L.hasOwnProperty('display')
													? L.display
													: null;
										m.style.display =
											z == null || typeof z == 'boolean' ? '' : ('' + z).trim();
									}
								} catch (w) {
									xt(R, R.return, w);
								}
							}
						} else if (e.tag === 6) {
							if (n === null) {
								R = e;
								try {
									R.stateNode.nodeValue = i ? '' : R.memoizedProps;
								} catch (w) {
									xt(R, R.return, w);
								}
							}
						} else if (
							((e.tag !== 22 && e.tag !== 23) ||
								e.memoizedState === null ||
								e === t) &&
							e.child !== null
						) {
							(e.child.return = e), (e = e.child);
							continue;
						}
						if (e === t) break t;
						for (; e.sibling === null; ) {
							if (e.return === null || e.return === t) break t;
							n === e && (n = null), (e = e.return);
						}
						n === e && (n = null),
							(e.sibling.return = e.return),
							(e = e.sibling);
					}
				a & 4 &&
					((a = t.updateQueue),
					a !== null &&
						((n = a.retryQueue),
						n !== null && ((a.retryQueue = null), Ds(t, n))));
				break;
			case 19:
				me(e, t),
					ve(t),
					a & 4 &&
						((a = t.updateQueue),
						a !== null && ((t.updateQueue = null), Ds(t, a)));
				break;
			case 30:
				break;
			case 21:
				break;
			default:
				me(e, t), ve(t);
		}
	}
	function ve(t) {
		var e = t.flags;
		if (e & 2) {
			try {
				for (var n, a = t.return; a !== null; ) {
					if (Dd(a)) {
						n = a;
						break;
					}
					a = a.return;
				}
				if (n == null) throw Error(c(160));
				switch (n.tag) {
					case 27:
						var i = n.stateNode,
							s = xs(t);
						fu(t, s, i);
						break;
					case 5:
						var f = n.stateNode;
						n.flags & 32 && (Ta(f, ''), (n.flags &= -33));
						var m = xs(t);
						fu(t, m, f);
						break;
					case 3:
					case 4:
						var R = n.stateNode.containerInfo,
							x = xs(t);
						zs(t, x, R);
						break;
					default:
						throw Error(c(161));
				}
			} catch (U) {
				xt(t, t.return, U);
			}
			t.flags &= -3;
		}
		e & 4096 && (t.flags &= -4097);
	}
	function qd(t) {
		if (t.subtreeFlags & 1024)
			for (t = t.child; t !== null; ) {
				var e = t;
				qd(e),
					e.tag === 5 && e.flags & 1024 && e.stateNode.reset(),
					(t = t.sibling);
			}
	}
	function En(t, e) {
		if (e.subtreeFlags & 8772)
			for (e = e.child; e !== null; ) Nd(t, e.alternate, e), (e = e.sibling);
	}
	function sa(t) {
		for (t = t.child; t !== null; ) {
			var e = t;
			switch (e.tag) {
				case 0:
				case 11:
				case 14:
				case 15:
					Rn(4, e, e.return), sa(e);
					break;
				case 1:
					Ye(e, e.return);
					var n = e.stateNode;
					typeof n.componentWillUnmount == 'function' && zd(e, e.return, n),
						sa(e);
					break;
				case 27:
					Il(e.stateNode);
				case 26:
				case 5:
					Ye(e, e.return), sa(e);
					break;
				case 22:
					e.memoizedState === null && sa(e);
					break;
				case 30:
					sa(e);
					break;
				default:
					sa(e);
			}
			t = t.sibling;
		}
	}
	function Tn(t, e, n) {
		for (n = n && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
			var a = e.alternate,
				i = t,
				s = e,
				f = s.flags;
			switch (s.tag) {
				case 0:
				case 11:
				case 15:
					Tn(i, s, n), Xl(4, s);
					break;
				case 1:
					if (
						(Tn(i, s, n),
						(a = s),
						(i = a.stateNode),
						typeof i.componentDidMount == 'function')
					)
						try {
							i.componentDidMount();
						} catch (x) {
							xt(a, a.return, x);
						}
					if (((a = s), (i = a.updateQueue), i !== null)) {
						var m = a.stateNode;
						try {
							var R = i.shared.hiddenCallbacks;
							if (R !== null)
								for (i.shared.hiddenCallbacks = null, i = 0; i < R.length; i++)
									pf(R[i], m);
						} catch (x) {
							xt(a, a.return, x);
						}
					}
					n && f & 64 && xd(s), Ql(s, s.return);
					break;
				case 27:
					Cd(s);
				case 26:
				case 5:
					Tn(i, s, n), n && a === null && f & 4 && wd(s), Ql(s, s.return);
					break;
				case 12:
					Tn(i, s, n);
					break;
				case 13:
					Tn(i, s, n), n && f & 4 && Hd(i, s);
					break;
				case 22:
					s.memoizedState === null && Tn(i, s, n), Ql(s, s.return);
					break;
				case 30:
					break;
				default:
					Tn(i, s, n);
			}
			e = e.sibling;
		}
	}
	function Cs(t, e) {
		var n = null;
		t !== null &&
			t.memoizedState !== null &&
			t.memoizedState.cachePool !== null &&
			(n = t.memoizedState.cachePool.pool),
			(t = null),
			e.memoizedState !== null &&
				e.memoizedState.cachePool !== null &&
				(t = e.memoizedState.cachePool.pool),
			t !== n && (t != null && t.refCount++, n != null && zl(n));
	}
	function Us(t, e) {
		(t = null),
			e.alternate !== null && (t = e.alternate.memoizedState.cache),
			(e = e.memoizedState.cache),
			e !== t && (e.refCount++, t != null && zl(t));
	}
	function Ge(t, e, n, a) {
		if (e.subtreeFlags & 10256)
			for (e = e.child; e !== null; ) Vd(t, e, n, a), (e = e.sibling);
	}
	function Vd(t, e, n, a) {
		var i = e.flags;
		switch (e.tag) {
			case 0:
			case 11:
			case 15:
				Ge(t, e, n, a), i & 2048 && Xl(9, e);
				break;
			case 1:
				Ge(t, e, n, a);
				break;
			case 3:
				Ge(t, e, n, a),
					i & 2048 &&
						((t = null),
						e.alternate !== null && (t = e.alternate.memoizedState.cache),
						(e = e.memoizedState.cache),
						e !== t && (e.refCount++, t != null && zl(t)));
				break;
			case 12:
				if (i & 2048) {
					Ge(t, e, n, a), (t = e.stateNode);
					try {
						var s = e.memoizedProps,
							f = s.id,
							m = s.onPostCommit;
						typeof m == 'function' &&
							m(
								f,
								e.alternate === null ? 'mount' : 'update',
								t.passiveEffectDuration,
								-0,
							);
					} catch (R) {
						xt(e, e.return, R);
					}
				} else Ge(t, e, n, a);
				break;
			case 13:
				Ge(t, e, n, a);
				break;
			case 23:
				break;
			case 22:
				(s = e.stateNode),
					(f = e.alternate),
					e.memoizedState !== null
						? s._visibility & 2
							? Ge(t, e, n, a)
							: Zl(t, e)
						: s._visibility & 2
							? Ge(t, e, n, a)
							: ((s._visibility |= 2),
								Xa(t, e, n, a, (e.subtreeFlags & 10256) !== 0)),
					i & 2048 && Cs(f, e);
				break;
			case 24:
				Ge(t, e, n, a), i & 2048 && Us(e.alternate, e);
				break;
			default:
				Ge(t, e, n, a);
		}
	}
	function Xa(t, e, n, a, i) {
		for (i = i && (e.subtreeFlags & 10256) !== 0, e = e.child; e !== null; ) {
			var s = t,
				f = e,
				m = n,
				R = a,
				x = f.flags;
			switch (f.tag) {
				case 0:
				case 11:
				case 15:
					Xa(s, f, m, R, i), Xl(8, f);
					break;
				case 23:
					break;
				case 22:
					var U = f.stateNode;
					f.memoizedState !== null
						? U._visibility & 2
							? Xa(s, f, m, R, i)
							: Zl(s, f)
						: ((U._visibility |= 2), Xa(s, f, m, R, i)),
						i && x & 2048 && Cs(f.alternate, f);
					break;
				case 24:
					Xa(s, f, m, R, i), i && x & 2048 && Us(f.alternate, f);
					break;
				default:
					Xa(s, f, m, R, i);
			}
			e = e.sibling;
		}
	}
	function Zl(t, e) {
		if (e.subtreeFlags & 10256)
			for (e = e.child; e !== null; ) {
				var n = t,
					a = e,
					i = a.flags;
				switch (a.tag) {
					case 22:
						Zl(n, a), i & 2048 && Cs(a.alternate, a);
						break;
					case 24:
						Zl(n, a), i & 2048 && Us(a.alternate, a);
						break;
					default:
						Zl(n, a);
				}
				e = e.sibling;
			}
	}
	var Kl = 8192;
	function Qa(t) {
		if (t.subtreeFlags & Kl)
			for (t = t.child; t !== null; ) Yd(t), (t = t.sibling);
	}
	function Yd(t) {
		switch (t.tag) {
			case 26:
				Qa(t),
					t.flags & Kl &&
						t.memoizedState !== null &&
						Ev(Be, t.memoizedState, t.memoizedProps);
				break;
			case 5:
				Qa(t);
				break;
			case 3:
			case 4:
				var e = Be;
				(Be = Tu(t.stateNode.containerInfo)), Qa(t), (Be = e);
				break;
			case 22:
				t.memoizedState === null &&
					((e = t.alternate),
					e !== null && e.memoizedState !== null
						? ((e = Kl), (Kl = 16777216), Qa(t), (Kl = e))
						: Qa(t));
				break;
			default:
				Qa(t);
		}
	}
	function Gd(t) {
		var e = t.alternate;
		if (e !== null && ((t = e.child), t !== null)) {
			e.child = null;
			do (e = t.sibling), (t.sibling = null), (t = e);
			while (t !== null);
		}
	}
	function Jl(t) {
		var e = t.deletions;
		if ((t.flags & 16) !== 0) {
			if (e !== null)
				for (var n = 0; n < e.length; n++) {
					var a = e[n];
					(Jt = a), Qd(a, t);
				}
			Gd(t);
		}
		if (t.subtreeFlags & 10256)
			for (t = t.child; t !== null; ) Xd(t), (t = t.sibling);
	}
	function Xd(t) {
		switch (t.tag) {
			case 0:
			case 11:
			case 15:
				Jl(t), t.flags & 2048 && Rn(9, t, t.return);
				break;
			case 3:
				Jl(t);
				break;
			case 12:
				Jl(t);
				break;
			case 22:
				var e = t.stateNode;
				t.memoizedState !== null &&
				e._visibility & 2 &&
				(t.return === null || t.return.tag !== 13)
					? ((e._visibility &= -3), du(t))
					: Jl(t);
				break;
			default:
				Jl(t);
		}
	}
	function du(t) {
		var e = t.deletions;
		if ((t.flags & 16) !== 0) {
			if (e !== null)
				for (var n = 0; n < e.length; n++) {
					var a = e[n];
					(Jt = a), Qd(a, t);
				}
			Gd(t);
		}
		for (t = t.child; t !== null; ) {
			switch (((e = t), e.tag)) {
				case 0:
				case 11:
				case 15:
					Rn(8, e, e.return), du(e);
					break;
				case 22:
					(n = e.stateNode),
						n._visibility & 2 && ((n._visibility &= -3), du(e));
					break;
				default:
					du(e);
			}
			t = t.sibling;
		}
	}
	function Qd(t, e) {
		for (; Jt !== null; ) {
			var n = Jt;
			switch (n.tag) {
				case 0:
				case 11:
				case 15:
					Rn(8, n, e);
					break;
				case 23:
				case 22:
					if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
						var a = n.memoizedState.cachePool.pool;
						a != null && a.refCount++;
					}
					break;
				case 24:
					zl(n.memoizedState.cache);
			}
			if (((a = n.child), a !== null)) (a.return = n), (Jt = a);
			else
				t: for (n = t; Jt !== null; ) {
					a = Jt;
					var i = a.sibling,
						s = a.return;
					if ((Ld(a), a === n)) {
						Jt = null;
						break t;
					}
					if (i !== null) {
						(i.return = s), (Jt = i);
						break t;
					}
					Jt = s;
				}
		}
	}
	var qm = {
			getCacheForType: function (t) {
				var e = It(Gt),
					n = e.data.get(t);
				return n === void 0 && ((n = t()), e.data.set(t, n)), n;
			},
		},
		Vm = typeof WeakMap == 'function' ? WeakMap : Map,
		Rt = 0,
		zt = null,
		ft = null,
		yt = 0,
		Et = 0,
		ge = null,
		An = !1,
		Za = !1,
		Ns = !1,
		rn = 0,
		Nt = 0,
		Mn = 0,
		ca = 0,
		Ls = 0,
		we = 0,
		Ka = 0,
		Pl = null,
		ce = null,
		Bs = !1,
		Hs = 0,
		hu = 1 / 0,
		pu = null,
		On = null,
		$t = 0,
		xn = null,
		Ja = null,
		Pa = 0,
		js = 0,
		qs = null,
		Zd = null,
		kl = 0,
		Vs = null;
	function Se() {
		if ((Rt & 2) !== 0 && yt !== 0) return yt & -yt;
		if (C.T !== null) {
			var t = La;
			return t !== 0 ? t : Js();
		}
		return io();
	}
	function Kd() {
		we === 0 && (we = (yt & 536870912) === 0 || gt ? eo() : 536870912);
		var t = ze.current;
		return t !== null && (t.flags |= 32), we;
	}
	function be(t, e, n) {
		((t === zt && (Et === 2 || Et === 9)) || t.cancelPendingCommit !== null) &&
			(ka(t, 0), zn(t, yt, we, !1)),
			hl(t, n),
			((Rt & 2) === 0 || t !== zt) &&
				(t === zt &&
					((Rt & 2) === 0 && (ca |= n), Nt === 4 && zn(t, yt, we, !1)),
				Xe(t));
	}
	function Jd(t, e, n) {
		if ((Rt & 6) !== 0) throw Error(c(327));
		var a = (!n && (e & 124) === 0 && (e & t.expiredLanes) === 0) || dl(t, e),
			i = a ? Xm(t, e) : Xs(t, e, !0),
			s = a;
		do {
			if (i === 0) {
				Za && !a && zn(t, e, 0, !1);
				break;
			} else {
				if (((n = t.current.alternate), s && !Ym(n))) {
					(i = Xs(t, e, !1)), (s = !1);
					continue;
				}
				if (i === 2) {
					if (((s = e), t.errorRecoveryDisabledLanes & s)) var f = 0;
					else
						(f = t.pendingLanes & -536870913),
							(f = f !== 0 ? f : f & 536870912 ? 536870912 : 0);
					if (f !== 0) {
						e = f;
						t: {
							var m = t;
							i = Pl;
							var R = m.current.memoizedState.isDehydrated;
							if ((R && (ka(m, f).flags |= 256), (f = Xs(m, f, !1)), f !== 2)) {
								if (Ns && !R) {
									(m.errorRecoveryDisabledLanes |= s), (ca |= s), (i = 4);
									break t;
								}
								(s = ce),
									(ce = i),
									s !== null && (ce === null ? (ce = s) : ce.push.apply(ce, s));
							}
							i = f;
						}
						if (((s = !1), i !== 2)) continue;
					}
				}
				if (i === 1) {
					ka(t, 0), zn(t, e, 0, !0);
					break;
				}
				t: {
					switch (((a = t), (s = i), s)) {
						case 0:
						case 1:
							throw Error(c(345));
						case 4:
							if ((e & 4194048) !== e) break;
						case 6:
							zn(a, e, we, !An);
							break t;
						case 2:
							ce = null;
							break;
						case 3:
						case 5:
							break;
						default:
							throw Error(c(329));
					}
					if ((e & 62914560) === e && ((i = Hs + 300 - Re()), 10 < i)) {
						if ((zn(a, e, we, !An), Ai(a, 0, !0) !== 0)) break t;
						a.timeoutHandle = Rh(
							Pd.bind(null, a, n, ce, pu, Bs, e, we, ca, Ka, An, s, 2, -0, 0),
							i,
						);
						break t;
					}
					Pd(a, n, ce, pu, Bs, e, we, ca, Ka, An, s, 0, -0, 0);
				}
			}
			break;
		} while (!0);
		Xe(t);
	}
	function Pd(t, e, n, a, i, s, f, m, R, x, U, L, z, w) {
		if (
			((t.timeoutHandle = -1),
			(L = e.subtreeFlags),
			(L & 8192 || (L & 16785408) === 16785408) &&
				((ni = { stylesheets: null, count: 0, unsuspend: Rv }),
				Yd(e),
				(L = Tv()),
				L !== null))
		) {
			(t.cancelPendingCommit = L(
				eh.bind(null, t, e, s, n, a, i, f, m, R, U, 1, z, w),
			)),
				zn(t, s, f, !x);
			return;
		}
		eh(t, e, s, n, a, i, f, m, R);
	}
	function Ym(t) {
		for (var e = t; ; ) {
			var n = e.tag;
			if (
				(n === 0 || n === 11 || n === 15) &&
				e.flags & 16384 &&
				((n = e.updateQueue), n !== null && ((n = n.stores), n !== null))
			)
				for (var a = 0; a < n.length; a++) {
					var i = n[a],
						s = i.getSnapshot;
					i = i.value;
					try {
						if (!pe(s(), i)) return !1;
					} catch {
						return !1;
					}
				}
			if (((n = e.child), e.subtreeFlags & 16384 && n !== null))
				(n.return = e), (e = n);
			else {
				if (e === t) break;
				for (; e.sibling === null; ) {
					if (e.return === null || e.return === t) return !0;
					e = e.return;
				}
				(e.sibling.return = e.return), (e = e.sibling);
			}
		}
		return !0;
	}
	function zn(t, e, n, a) {
		(e &= ~Ls),
			(e &= ~ca),
			(t.suspendedLanes |= e),
			(t.pingedLanes &= ~e),
			a && (t.warmLanes |= e),
			(a = t.expirationTimes);
		for (var i = e; 0 < i; ) {
			var s = 31 - he(i),
				f = 1 << s;
			(a[s] = -1), (i &= ~f);
		}
		n !== 0 && ao(t, n, e);
	}
	function yu() {
		return (Rt & 6) === 0 ? ($l(0), !1) : !0;
	}
	function Ys() {
		if (ft !== null) {
			if (Et === 0) var t = ft.return;
			else (t = ft), (We = aa = null), ls(t), (Ya = null), (Vl = 0), (t = ft);
			for (; t !== null; ) Od(t.alternate, t), (t = t.return);
			ft = null;
		}
	}
	function ka(t, e) {
		var n = t.timeoutHandle;
		n !== -1 && ((t.timeoutHandle = -1), iv(n)),
			(n = t.cancelPendingCommit),
			n !== null && ((t.cancelPendingCommit = null), n()),
			Ys(),
			(zt = t),
			(ft = n = ke(t.current, null)),
			(yt = e),
			(Et = 0),
			(ge = null),
			(An = !1),
			(Za = dl(t, e)),
			(Ns = !1),
			(Ka = we = Ls = ca = Mn = Nt = 0),
			(ce = Pl = null),
			(Bs = !1),
			(e & 8) !== 0 && (e |= e & 32);
		var a = t.entangledLanes;
		if (a !== 0)
			for (t = t.entanglements, a &= e; 0 < a; ) {
				var i = 31 - he(a),
					s = 1 << i;
				(e |= t[i]), (a &= ~s);
			}
		return (rn = e), Hi(), n;
	}
	function kd(t, e) {
		(st = null),
			(C.H = nu),
			e === Dl || e === Ki
				? ((e = df()), (Et = 3))
				: e === cf
					? ((e = df()), (Et = 4))
					: (Et =
							e === hd
								? 8
								: e !== null &&
										typeof e == 'object' &&
										typeof e.then == 'function'
									? 6
									: 1),
			(ge = e),
			ft === null && ((Nt = 1), ru(t, Ae(e, t.current)));
	}
	function $d() {
		var t = C.H;
		return (C.H = nu), t === null ? nu : t;
	}
	function Fd() {
		var t = C.A;
		return (C.A = qm), t;
	}
	function Gs() {
		(Nt = 4),
			An || ((yt & 4194048) !== yt && ze.current !== null) || (Za = !0),
			((Mn & 134217727) === 0 && (ca & 134217727) === 0) ||
				zt === null ||
				zn(zt, yt, we, !1);
	}
	function Xs(t, e, n) {
		var a = Rt;
		Rt |= 2;
		var i = $d(),
			s = Fd();
		(zt !== t || yt !== e) && ((pu = null), ka(t, e)), (e = !1);
		var f = Nt;
		t: do
			try {
				if (Et !== 0 && ft !== null) {
					var m = ft,
						R = ge;
					switch (Et) {
						case 8:
							Ys(), (f = 6);
							break t;
						case 3:
						case 2:
						case 9:
						case 6:
							ze.current === null && (e = !0);
							var x = Et;
							if (((Et = 0), (ge = null), $a(t, m, R, x), n && Za)) {
								f = 0;
								break t;
							}
							break;
						default:
							(x = Et), (Et = 0), (ge = null), $a(t, m, R, x);
					}
				}
				Gm(), (f = Nt);
				break;
			} catch (U) {
				kd(t, U);
			}
		while (!0);
		return (
			e && t.shellSuspendCounter++,
			(We = aa = null),
			(Rt = a),
			(C.H = i),
			(C.A = s),
			ft === null && ((zt = null), (yt = 0), Hi()),
			f
		);
	}
	function Gm() {
		for (; ft !== null; ) Wd(ft);
	}
	function Xm(t, e) {
		var n = Rt;
		Rt |= 2;
		var a = $d(),
			i = Fd();
		zt !== t || yt !== e
			? ((pu = null), (hu = Re() + 500), ka(t, e))
			: (Za = dl(t, e));
		t: do
			try {
				if (Et !== 0 && ft !== null) {
					e = ft;
					var s = ge;
					e: switch (Et) {
						case 1:
							(Et = 0), (ge = null), $a(t, e, s, 1);
							break;
						case 2:
						case 9:
							if (of(s)) {
								(Et = 0), (ge = null), Id(e);
								break;
							}
							(e = function () {
								(Et !== 2 && Et !== 9) || zt !== t || (Et = 7), Xe(t);
							}),
								s.then(e, e);
							break t;
						case 3:
							Et = 7;
							break t;
						case 4:
							Et = 5;
							break t;
						case 7:
							of(s)
								? ((Et = 0), (ge = null), Id(e))
								: ((Et = 0), (ge = null), $a(t, e, s, 7));
							break;
						case 5:
							var f = null;
							switch (ft.tag) {
								case 26:
									f = ft.memoizedState;
								case 5:
								case 27:
									var m = ft;
									if (!f || Nh(f)) {
										(Et = 0), (ge = null);
										var R = m.sibling;
										if (R !== null) ft = R;
										else {
											var x = m.return;
											x !== null ? ((ft = x), mu(x)) : (ft = null);
										}
										break e;
									}
							}
							(Et = 0), (ge = null), $a(t, e, s, 5);
							break;
						case 6:
							(Et = 0), (ge = null), $a(t, e, s, 6);
							break;
						case 8:
							Ys(), (Nt = 6);
							break t;
						default:
							throw Error(c(462));
					}
				}
				Qm();
				break;
			} catch (U) {
				kd(t, U);
			}
		while (!0);
		return (
			(We = aa = null),
			(C.H = a),
			(C.A = i),
			(Rt = n),
			ft !== null ? 0 : ((zt = null), (yt = 0), Hi(), Nt)
		);
	}
	function Qm() {
		for (; ft !== null && !_i(); ) Wd(ft);
	}
	function Wd(t) {
		var e = Ad(t.alternate, t, rn);
		(t.memoizedProps = t.pendingProps), e === null ? mu(t) : (ft = e);
	}
	function Id(t) {
		var e = t,
			n = e.alternate;
		switch (e.tag) {
			case 15:
			case 0:
				e = Sd(n, e, e.pendingProps, e.type, void 0, yt);
				break;
			case 11:
				e = Sd(n, e, e.pendingProps, e.type.render, e.ref, yt);
				break;
			case 5:
				ls(e);
			default:
				Od(n, e), (e = ft = Io(e, rn)), (e = Ad(n, e, rn));
		}
		(t.memoizedProps = t.pendingProps), e === null ? mu(t) : (ft = e);
	}
	function $a(t, e, n, a) {
		(We = aa = null), ls(e), (Ya = null), (Vl = 0);
		var i = e.return;
		try {
			if (Um(t, i, e, n, yt)) {
				(Nt = 1), ru(t, Ae(n, t.current)), (ft = null);
				return;
			}
		} catch (s) {
			if (i !== null) throw ((ft = i), s);
			(Nt = 1), ru(t, Ae(n, t.current)), (ft = null);
			return;
		}
		e.flags & 32768
			? (gt || a === 1
					? (t = !0)
					: Za || (yt & 536870912) !== 0
						? (t = !1)
						: ((An = t = !0),
							(a === 2 || a === 9 || a === 3 || a === 6) &&
								((a = ze.current),
								a !== null && a.tag === 13 && (a.flags |= 16384))),
				th(e, t))
			: mu(e);
	}
	function mu(t) {
		var e = t;
		do {
			if ((e.flags & 32768) !== 0) {
				th(e, An);
				return;
			}
			t = e.return;
			var n = Lm(e.alternate, e, rn);
			if (n !== null) {
				ft = n;
				return;
			}
			if (((e = e.sibling), e !== null)) {
				ft = e;
				return;
			}
			ft = e = t;
		} while (e !== null);
		Nt === 0 && (Nt = 5);
	}
	function th(t, e) {
		do {
			var n = Bm(t.alternate, t);
			if (n !== null) {
				(n.flags &= 32767), (ft = n);
				return;
			}
			if (
				((n = t.return),
				n !== null &&
					((n.flags |= 32768), (n.subtreeFlags = 0), (n.deletions = null)),
				!e && ((t = t.sibling), t !== null))
			) {
				ft = t;
				return;
			}
			ft = t = n;
		} while (t !== null);
		(Nt = 6), (ft = null);
	}
	function eh(t, e, n, a, i, s, f, m, R) {
		t.cancelPendingCommit = null;
		do vu();
		while ($t !== 0);
		if ((Rt & 6) !== 0) throw Error(c(327));
		if (e !== null) {
			if (e === t.current) throw Error(c(177));
			if (
				((s = e.lanes | e.childLanes),
				(s |= Ur),
				Ry(t, n, s, f, m, R),
				t === zt && ((ft = zt = null), (yt = 0)),
				(Ja = e),
				(xn = t),
				(Pa = n),
				(js = s),
				(qs = i),
				(Zd = a),
				(e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
					? ((t.callbackNode = null),
						(t.callbackPriority = 0),
						Pm(Kn, function () {
							return uh(), null;
						}))
					: ((t.callbackNode = null), (t.callbackPriority = 0)),
				(a = (e.flags & 13878) !== 0),
				(e.subtreeFlags & 13878) !== 0 || a)
			) {
				(a = C.T), (C.T = null), (i = V.p), (V.p = 2), (f = Rt), (Rt |= 4);
				try {
					Hm(t, e, n);
				} finally {
					(Rt = f), (V.p = i), (C.T = a);
				}
			}
			($t = 1), nh(), ah(), lh();
		}
	}
	function nh() {
		if ($t === 1) {
			$t = 0;
			var t = xn,
				e = Ja,
				n = (e.flags & 13878) !== 0;
			if ((e.subtreeFlags & 13878) !== 0 || n) {
				(n = C.T), (C.T = null);
				var a = V.p;
				V.p = 2;
				var i = Rt;
				Rt |= 4;
				try {
					jd(e, t);
					var s = ec,
						f = Xo(t.containerInfo),
						m = s.focusedElem,
						R = s.selectionRange;
					if (
						f !== m &&
						m &&
						m.ownerDocument &&
						Go(m.ownerDocument.documentElement, m)
					) {
						if (R !== null && xr(m)) {
							var x = R.start,
								U = R.end;
							if ((U === void 0 && (U = x), 'selectionStart' in m))
								(m.selectionStart = x),
									(m.selectionEnd = Math.min(U, m.value.length));
							else {
								var L = m.ownerDocument || document,
									z = (L && L.defaultView) || window;
								if (z.getSelection) {
									var w = z.getSelection(),
										at = m.textContent.length,
										I = Math.min(R.start, at),
										Ot = R.end === void 0 ? I : Math.min(R.end, at);
									!w.extend && I > Ot && ((f = Ot), (Ot = I), (I = f));
									var M = Yo(m, I),
										T = Yo(m, Ot);
									if (
										M &&
										T &&
										(w.rangeCount !== 1 ||
											w.anchorNode !== M.node ||
											w.anchorOffset !== M.offset ||
											w.focusNode !== T.node ||
											w.focusOffset !== T.offset)
									) {
										var O = L.createRange();
										O.setStart(M.node, M.offset),
											w.removeAllRanges(),
											I > Ot
												? (w.addRange(O), w.extend(T.node, T.offset))
												: (O.setEnd(T.node, T.offset), w.addRange(O));
									}
								}
							}
						}
						for (L = [], w = m; (w = w.parentNode); )
							w.nodeType === 1 &&
								L.push({ element: w, left: w.scrollLeft, top: w.scrollTop });
						for (
							typeof m.focus == 'function' && m.focus(), m = 0;
							m < L.length;
							m++
						) {
							var N = L[m];
							(N.element.scrollLeft = N.left), (N.element.scrollTop = N.top);
						}
					}
					(zu = !!tc), (ec = tc = null);
				} finally {
					(Rt = i), (V.p = a), (C.T = n);
				}
			}
			(t.current = e), ($t = 2);
		}
	}
	function ah() {
		if ($t === 2) {
			$t = 0;
			var t = xn,
				e = Ja,
				n = (e.flags & 8772) !== 0;
			if ((e.subtreeFlags & 8772) !== 0 || n) {
				(n = C.T), (C.T = null);
				var a = V.p;
				V.p = 2;
				var i = Rt;
				Rt |= 4;
				try {
					Nd(t, e.alternate, e);
				} finally {
					(Rt = i), (V.p = a), (C.T = n);
				}
			}
			$t = 3;
		}
	}
	function lh() {
		if ($t === 4 || $t === 3) {
			($t = 0), ar();
			var t = xn,
				e = Ja,
				n = Pa,
				a = Zd;
			(e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
				? ($t = 5)
				: (($t = 0), (Ja = xn = null), ih(t, t.pendingLanes));
			var i = t.pendingLanes;
			if (
				(i === 0 && (On = null),
				rr(n),
				(e = e.stateNode),
				de && typeof de.onCommitFiberRoot == 'function')
			)
				try {
					de.onCommitFiberRoot(fn, e, void 0, (e.current.flags & 128) === 128);
				} catch {}
			if (a !== null) {
				(e = C.T), (i = V.p), (V.p = 2), (C.T = null);
				try {
					for (var s = t.onRecoverableError, f = 0; f < a.length; f++) {
						var m = a[f];
						s(m.value, { componentStack: m.stack });
					}
				} finally {
					(C.T = e), (V.p = i);
				}
			}
			(Pa & 3) !== 0 && vu(),
				Xe(t),
				(i = t.pendingLanes),
				(n & 4194090) !== 0 && (i & 42) !== 0
					? t === Vs
						? kl++
						: ((kl = 0), (Vs = t))
					: (kl = 0),
				$l(0);
		}
	}
	function ih(t, e) {
		(t.pooledCacheLanes &= e) === 0 &&
			((e = t.pooledCache), e != null && ((t.pooledCache = null), zl(e)));
	}
	function vu(t) {
		return nh(), ah(), lh(), uh();
	}
	function uh() {
		if ($t !== 5) return !1;
		var t = xn,
			e = js;
		js = 0;
		var n = rr(Pa),
			a = C.T,
			i = V.p;
		try {
			(V.p = 32 > n ? 32 : n), (C.T = null), (n = qs), (qs = null);
			var s = xn,
				f = Pa;
			if ((($t = 0), (Ja = xn = null), (Pa = 0), (Rt & 6) !== 0))
				throw Error(c(331));
			var m = Rt;
			if (
				((Rt |= 4),
				Xd(s.current),
				Vd(s, s.current, f, n),
				(Rt = m),
				$l(0, !1),
				de && typeof de.onPostCommitFiberRoot == 'function')
			)
				try {
					de.onPostCommitFiberRoot(fn, s);
				} catch {}
			return !0;
		} finally {
			(V.p = i), (C.T = a), ih(t, e);
		}
	}
	function rh(t, e, n) {
		(e = Ae(n, e)),
			(e = gs(t.stateNode, e, 2)),
			(t = gn(t, e, 2)),
			t !== null && (hl(t, 2), Xe(t));
	}
	function xt(t, e, n) {
		if (t.tag === 3) rh(t, t, n);
		else
			for (; e !== null; ) {
				if (e.tag === 3) {
					rh(e, t, n);
					break;
				} else if (e.tag === 1) {
					var a = e.stateNode;
					if (
						typeof e.type.getDerivedStateFromError == 'function' ||
						(typeof a.componentDidCatch == 'function' &&
							(On === null || !On.has(a)))
					) {
						(t = Ae(n, t)),
							(n = fd(2)),
							(a = gn(e, n, 2)),
							a !== null && (dd(n, a, e, t), hl(a, 2), Xe(a));
						break;
					}
				}
				e = e.return;
			}
	}
	function Qs(t, e, n) {
		var a = t.pingCache;
		if (a === null) {
			a = t.pingCache = new Vm();
			var i = new Set();
			a.set(e, i);
		} else (i = a.get(e)), i === void 0 && ((i = new Set()), a.set(e, i));
		i.has(n) ||
			((Ns = !0), i.add(n), (t = Zm.bind(null, t, e, n)), e.then(t, t));
	}
	function Zm(t, e, n) {
		var a = t.pingCache;
		a !== null && a.delete(e),
			(t.pingedLanes |= t.suspendedLanes & n),
			(t.warmLanes &= ~n),
			zt === t &&
				(yt & n) === n &&
				(Nt === 4 || (Nt === 3 && (yt & 62914560) === yt && 300 > Re() - Hs)
					? (Rt & 2) === 0 && ka(t, 0)
					: (Ls |= n),
				Ka === yt && (Ka = 0)),
			Xe(t);
	}
	function sh(t, e) {
		e === 0 && (e = no()), (t = Da(t, e)), t !== null && (hl(t, e), Xe(t));
	}
	function Km(t) {
		var e = t.memoizedState,
			n = 0;
		e !== null && (n = e.retryLane), sh(t, n);
	}
	function Jm(t, e) {
		var n = 0;
		switch (t.tag) {
			case 13:
				var a = t.stateNode,
					i = t.memoizedState;
				i !== null && (n = i.retryLane);
				break;
			case 19:
				a = t.stateNode;
				break;
			case 22:
				a = t.stateNode._retryCache;
				break;
			default:
				throw Error(c(314));
		}
		a !== null && a.delete(e), sh(t, n);
	}
	function Pm(t, e) {
		return ol(t, e);
	}
	var gu = null,
		Fa = null,
		Zs = !1,
		Su = !1,
		Ks = !1,
		oa = 0;
	function Xe(t) {
		t !== Fa &&
			t.next === null &&
			(Fa === null ? (gu = Fa = t) : (Fa = Fa.next = t)),
			(Su = !0),
			Zs || ((Zs = !0), $m());
	}
	function $l(t, e) {
		if (!Ks && Su) {
			Ks = !0;
			do
				for (var n = !1, a = gu; a !== null; ) {
					if (t !== 0) {
						var i = a.pendingLanes;
						if (i === 0) var s = 0;
						else {
							var f = a.suspendedLanes,
								m = a.pingedLanes;
							(s = (1 << (31 - he(42 | t) + 1)) - 1),
								(s &= i & ~(f & ~m)),
								(s = s & 201326741 ? (s & 201326741) | 1 : s ? s | 2 : 0);
						}
						s !== 0 && ((n = !0), dh(a, s));
					} else
						(s = yt),
							(s = Ai(
								a,
								a === zt ? s : 0,
								a.cancelPendingCommit !== null || a.timeoutHandle !== -1,
							)),
							(s & 3) === 0 || dl(a, s) || ((n = !0), dh(a, s));
					a = a.next;
				}
			while (n);
			Ks = !1;
		}
	}
	function km() {
		ch();
	}
	function ch() {
		Su = Zs = !1;
		var t = 0;
		oa !== 0 && (lv() && (t = oa), (oa = 0));
		for (var e = Re(), n = null, a = gu; a !== null; ) {
			var i = a.next,
				s = oh(a, e);
			s === 0
				? ((a.next = null),
					n === null ? (gu = i) : (n.next = i),
					i === null && (Fa = n))
				: ((n = a), (t !== 0 || (s & 3) !== 0) && (Su = !0)),
				(a = i);
		}
		$l(t);
	}
	function oh(t, e) {
		for (
			var n = t.suspendedLanes,
				a = t.pingedLanes,
				i = t.expirationTimes,
				s = t.pendingLanes & -62914561;
			0 < s;
		) {
			var f = 31 - he(s),
				m = 1 << f,
				R = i[f];
			R === -1
				? ((m & n) === 0 || (m & a) !== 0) && (i[f] = _y(m, e))
				: R <= e && (t.expiredLanes |= m),
				(s &= ~m);
		}
		if (
			((e = zt),
			(n = yt),
			(n = Ai(
				t,
				t === e ? n : 0,
				t.cancelPendingCommit !== null || t.timeoutHandle !== -1,
			)),
			(a = t.callbackNode),
			n === 0 ||
				(t === e && (Et === 2 || Et === 9)) ||
				t.cancelPendingCommit !== null)
		)
			return (
				a !== null && a !== null && fl(a),
				(t.callbackNode = null),
				(t.callbackPriority = 0)
			);
		if ((n & 3) === 0 || dl(t, n)) {
			if (((e = n & -n), e === t.callbackPriority)) return e;
			switch ((a !== null && fl(a), rr(n))) {
				case 2:
				case 8:
					n = Zn;
					break;
				case 32:
					n = Kn;
					break;
				case 268435456:
					n = _t;
					break;
				default:
					n = Kn;
			}
			return (
				(a = fh.bind(null, t)),
				(n = ol(n, a)),
				(t.callbackPriority = e),
				(t.callbackNode = n),
				e
			);
		}
		return (
			a !== null && a !== null && fl(a),
			(t.callbackPriority = 2),
			(t.callbackNode = null),
			2
		);
	}
	function fh(t, e) {
		if ($t !== 0 && $t !== 5)
			return (t.callbackNode = null), (t.callbackPriority = 0), null;
		var n = t.callbackNode;
		if (vu() && t.callbackNode !== n) return null;
		var a = yt;
		return (
			(a = Ai(
				t,
				t === zt ? a : 0,
				t.cancelPendingCommit !== null || t.timeoutHandle !== -1,
			)),
			a === 0
				? null
				: (Jd(t, a, e),
					oh(t, Re()),
					t.callbackNode != null && t.callbackNode === n
						? fh.bind(null, t)
						: null)
		);
	}
	function dh(t, e) {
		if (vu()) return null;
		Jd(t, e, !0);
	}
	function $m() {
		uv(function () {
			(Rt & 6) !== 0 ? ol(Qn, km) : ch();
		});
	}
	function Js() {
		return oa === 0 && (oa = eo()), oa;
	}
	function hh(t) {
		return t == null || typeof t == 'symbol' || typeof t == 'boolean'
			? null
			: typeof t == 'function'
				? t
				: wi('' + t);
	}
	function ph(t, e) {
		var n = e.ownerDocument.createElement('input');
		return (
			(n.name = e.name),
			(n.value = e.value),
			t.id && n.setAttribute('form', t.id),
			e.parentNode.insertBefore(n, e),
			(t = new FormData(t)),
			n.parentNode.removeChild(n),
			t
		);
	}
	function Fm(t, e, n, a, i) {
		if (e === 'submit' && n && n.stateNode === i) {
			var s = hh((i[ie] || null).action),
				f = a.submitter;
			f &&
				((e = (e = f[ie] || null)
					? hh(e.formAction)
					: f.getAttribute('formAction')),
				e !== null && ((s = e), (f = null)));
			var m = new Ni('action', 'action', null, a, i);
			t.push({
				event: m,
				listeners: [
					{
						instance: null,
						listener: function () {
							if (a.defaultPrevented) {
								if (oa !== 0) {
									var R = f ? ph(i, f) : new FormData(i);
									hs(
										n,
										{ pending: !0, data: R, method: i.method, action: s },
										null,
										R,
									);
								}
							} else
								typeof s == 'function' &&
									(m.preventDefault(),
									(R = f ? ph(i, f) : new FormData(i)),
									hs(
										n,
										{ pending: !0, data: R, method: i.method, action: s },
										s,
										R,
									));
						},
						currentTarget: i,
					},
				],
			});
		}
	}
	for (var Ps = 0; Ps < Cr.length; Ps++) {
		var ks = Cr[Ps],
			Wm = ks.toLowerCase(),
			Im = ks[0].toUpperCase() + ks.slice(1);
		Le(Wm, 'on' + Im);
	}
	Le(Ko, 'onAnimationEnd'),
		Le(Jo, 'onAnimationIteration'),
		Le(Po, 'onAnimationStart'),
		Le('dblclick', 'onDoubleClick'),
		Le('focusin', 'onFocus'),
		Le('focusout', 'onBlur'),
		Le(mm, 'onTransitionRun'),
		Le(vm, 'onTransitionStart'),
		Le(gm, 'onTransitionCancel'),
		Le(ko, 'onTransitionEnd'),
		_a('onMouseEnter', ['mouseout', 'mouseover']),
		_a('onMouseLeave', ['mouseout', 'mouseover']),
		_a('onPointerEnter', ['pointerout', 'pointerover']),
		_a('onPointerLeave', ['pointerout', 'pointerover']),
		Pn(
			'onChange',
			'change click focusin focusout input keydown keyup selectionchange'.split(
				' ',
			),
		),
		Pn(
			'onSelect',
			'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
				' ',
			),
		),
		Pn('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
		Pn(
			'onCompositionEnd',
			'compositionend focusout keydown keypress keyup mousedown'.split(' '),
		),
		Pn(
			'onCompositionStart',
			'compositionstart focusout keydown keypress keyup mousedown'.split(' '),
		),
		Pn(
			'onCompositionUpdate',
			'compositionupdate focusout keydown keypress keyup mousedown'.split(' '),
		);
	var Fl =
			'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
				' ',
			),
		tv = new Set(
			'beforetoggle cancel close invalid load scroll scrollend toggle'
				.split(' ')
				.concat(Fl),
		);
	function yh(t, e) {
		e = (e & 4) !== 0;
		for (var n = 0; n < t.length; n++) {
			var a = t[n],
				i = a.event;
			a = a.listeners;
			t: {
				var s = void 0;
				if (e)
					for (var f = a.length - 1; 0 <= f; f--) {
						var m = a[f],
							R = m.instance,
							x = m.currentTarget;
						if (((m = m.listener), R !== s && i.isPropagationStopped()))
							break t;
						(s = m), (i.currentTarget = x);
						try {
							s(i);
						} catch (U) {
							uu(U);
						}
						(i.currentTarget = null), (s = R);
					}
				else
					for (f = 0; f < a.length; f++) {
						if (
							((m = a[f]),
							(R = m.instance),
							(x = m.currentTarget),
							(m = m.listener),
							R !== s && i.isPropagationStopped())
						)
							break t;
						(s = m), (i.currentTarget = x);
						try {
							s(i);
						} catch (U) {
							uu(U);
						}
						(i.currentTarget = null), (s = R);
					}
			}
		}
	}
	function dt(t, e) {
		var n = e[sr];
		n === void 0 && (n = e[sr] = new Set());
		var a = t + '__bubble';
		n.has(a) || (mh(e, t, 2, !1), n.add(a));
	}
	function $s(t, e, n) {
		var a = 0;
		e && (a |= 4), mh(n, t, a, e);
	}
	var bu = '_reactListening' + Math.random().toString(36).slice(2);
	function Fs(t) {
		if (!t[bu]) {
			(t[bu] = !0),
				ro.forEach(function (n) {
					n !== 'selectionchange' && (tv.has(n) || $s(n, !1, t), $s(n, !0, t));
				});
			var e = t.nodeType === 9 ? t : t.ownerDocument;
			e === null || e[bu] || ((e[bu] = !0), $s('selectionchange', !1, e));
		}
	}
	function mh(t, e, n, a) {
		switch (Vh(e)) {
			case 2:
				var i = Ov;
				break;
			case 8:
				i = xv;
				break;
			default:
				i = fc;
		}
		(n = i.bind(null, e, n, t)),
			(i = void 0),
			!Sr ||
				(e !== 'touchstart' && e !== 'touchmove' && e !== 'wheel') ||
				(i = !0),
			a
				? i !== void 0
					? t.addEventListener(e, n, { capture: !0, passive: i })
					: t.addEventListener(e, n, !0)
				: i !== void 0
					? t.addEventListener(e, n, { passive: i })
					: t.addEventListener(e, n, !1);
	}
	function Ws(t, e, n, a, i) {
		var s = a;
		if ((e & 1) === 0 && (e & 2) === 0 && a !== null)
			t: for (;;) {
				if (a === null) return;
				var f = a.tag;
				if (f === 3 || f === 4) {
					var m = a.stateNode.containerInfo;
					if (m === i) break;
					if (f === 4)
						for (f = a.return; f !== null; ) {
							var R = f.tag;
							if ((R === 3 || R === 4) && f.stateNode.containerInfo === i)
								return;
							f = f.return;
						}
					for (; m !== null; ) {
						if (((f = ga(m)), f === null)) return;
						if (((R = f.tag), R === 5 || R === 6 || R === 26 || R === 27)) {
							a = s = f;
							continue t;
						}
						m = m.parentNode;
					}
				}
				a = a.return;
			}
		Ro(function () {
			var x = s,
				U = vr(n),
				L = [];
			t: {
				var z = $o.get(t);
				if (z !== void 0) {
					var w = Ni,
						at = t;
					switch (t) {
						case 'keypress':
							if (Ci(n) === 0) break t;
						case 'keydown':
						case 'keyup':
							w = Py;
							break;
						case 'focusin':
							(at = 'focus'), (w = Er);
							break;
						case 'focusout':
							(at = 'blur'), (w = Er);
							break;
						case 'beforeblur':
						case 'afterblur':
							w = Er;
							break;
						case 'click':
							if (n.button === 2) break t;
						case 'auxclick':
						case 'dblclick':
						case 'mousedown':
						case 'mousemove':
						case 'mouseup':
						case 'mouseout':
						case 'mouseover':
						case 'contextmenu':
							w = Ao;
							break;
						case 'drag':
						case 'dragend':
						case 'dragenter':
						case 'dragexit':
						case 'dragleave':
						case 'dragover':
						case 'dragstart':
						case 'drop':
							w = By;
							break;
						case 'touchcancel':
						case 'touchend':
						case 'touchmove':
						case 'touchstart':
							w = Fy;
							break;
						case Ko:
						case Jo:
						case Po:
							w = qy;
							break;
						case ko:
							w = Iy;
							break;
						case 'scroll':
						case 'scrollend':
							w = Ny;
							break;
						case 'wheel':
							w = em;
							break;
						case 'copy':
						case 'cut':
						case 'paste':
							w = Yy;
							break;
						case 'gotpointercapture':
						case 'lostpointercapture':
						case 'pointercancel':
						case 'pointerdown':
						case 'pointermove':
						case 'pointerout':
						case 'pointerover':
						case 'pointerup':
							w = Oo;
							break;
						case 'toggle':
						case 'beforetoggle':
							w = am;
					}
					var I = (e & 4) !== 0,
						Ot = !I && (t === 'scroll' || t === 'scrollend'),
						M = I ? (z !== null ? z + 'Capture' : null) : z;
					I = [];
					for (var T = x, O; T !== null; ) {
						var N = T;
						if (
							((O = N.stateNode),
							(N = N.tag),
							(N !== 5 && N !== 26 && N !== 27) ||
								O === null ||
								M === null ||
								((N = ml(T, M)), N != null && I.push(Wl(T, N, O))),
							Ot)
						)
							break;
						T = T.return;
					}
					0 < I.length &&
						((z = new w(z, at, null, n, U)),
						L.push({ event: z, listeners: I }));
				}
			}
			if ((e & 7) === 0) {
				t: {
					if (
						((z = t === 'mouseover' || t === 'pointerover'),
						(w = t === 'mouseout' || t === 'pointerout'),
						z &&
							n !== mr &&
							(at = n.relatedTarget || n.fromElement) &&
							(ga(at) || at[va]))
					)
						break t;
					if (
						(w || z) &&
						((z =
							U.window === U
								? U
								: (z = U.ownerDocument)
									? z.defaultView || z.parentWindow
									: window),
						w
							? ((at = n.relatedTarget || n.toElement),
								(w = x),
								(at = at ? ga(at) : null),
								at !== null &&
									((Ot = d(at)),
									(I = at.tag),
									at !== Ot || (I !== 5 && I !== 27 && I !== 6)) &&
									(at = null))
							: ((w = null), (at = x)),
						w !== at)
					) {
						if (
							((I = Ao),
							(N = 'onMouseLeave'),
							(M = 'onMouseEnter'),
							(T = 'mouse'),
							(t === 'pointerout' || t === 'pointerover') &&
								((I = Oo),
								(N = 'onPointerLeave'),
								(M = 'onPointerEnter'),
								(T = 'pointer')),
							(Ot = w == null ? z : yl(w)),
							(O = at == null ? z : yl(at)),
							(z = new I(N, T + 'leave', w, n, U)),
							(z.target = Ot),
							(z.relatedTarget = O),
							(N = null),
							ga(U) === x &&
								((I = new I(M, T + 'enter', at, n, U)),
								(I.target = O),
								(I.relatedTarget = Ot),
								(N = I)),
							(Ot = N),
							w && at)
						)
							e: {
								for (I = w, M = at, T = 0, O = I; O; O = Wa(O)) T++;
								for (O = 0, N = M; N; N = Wa(N)) O++;
								for (; 0 < T - O; ) (I = Wa(I)), T--;
								for (; 0 < O - T; ) (M = Wa(M)), O--;
								for (; T--; ) {
									if (I === M || (M !== null && I === M.alternate)) break e;
									(I = Wa(I)), (M = Wa(M));
								}
								I = null;
							}
						else I = null;
						w !== null && vh(L, z, w, I, !1),
							at !== null && Ot !== null && vh(L, Ot, at, I, !0);
					}
				}
				t: {
					if (
						((z = x ? yl(x) : window),
						(w = z.nodeName && z.nodeName.toLowerCase()),
						w === 'select' || (w === 'input' && z.type === 'file'))
					)
						var X = Lo;
					else if (Uo(z))
						if (Bo) X = hm;
						else {
							X = fm;
							var ot = om;
						}
					else
						(w = z.nodeName),
							!w ||
							w.toLowerCase() !== 'input' ||
							(z.type !== 'checkbox' && z.type !== 'radio')
								? x && yr(x.elementType) && (X = Lo)
								: (X = dm);
					if (X && (X = X(t, x))) {
						No(L, X, n, U);
						break t;
					}
					ot && ot(t, z, x),
						t === 'focusout' &&
							x &&
							z.type === 'number' &&
							x.memoizedProps.value != null &&
							pr(z, 'number', z.value);
				}
				switch (((ot = x ? yl(x) : window), t)) {
					case 'focusin':
						(Uo(ot) || ot.contentEditable === 'true') &&
							((xa = ot), (zr = x), (Tl = null));
						break;
					case 'focusout':
						Tl = zr = xa = null;
						break;
					case 'mousedown':
						wr = !0;
						break;
					case 'contextmenu':
					case 'mouseup':
					case 'dragend':
						(wr = !1), Qo(L, n, U);
						break;
					case 'selectionchange':
						if (ym) break;
					case 'keydown':
					case 'keyup':
						Qo(L, n, U);
				}
				var J;
				if (Ar)
					t: {
						switch (t) {
							case 'compositionstart':
								var et = 'onCompositionStart';
								break t;
							case 'compositionend':
								et = 'onCompositionEnd';
								break t;
							case 'compositionupdate':
								et = 'onCompositionUpdate';
								break t;
						}
						et = void 0;
					}
				else
					Oa
						? Do(t, n) && (et = 'onCompositionEnd')
						: t === 'keydown' &&
							n.keyCode === 229 &&
							(et = 'onCompositionStart');
				et &&
					(xo &&
						n.locale !== 'ko' &&
						(Oa || et !== 'onCompositionStart'
							? et === 'onCompositionEnd' && Oa && (J = Eo())
							: ((pn = U),
								(br = 'value' in pn ? pn.value : pn.textContent),
								(Oa = !0))),
					(ot = _u(x, et)),
					0 < ot.length &&
						((et = new Mo(et, t, null, n, U)),
						L.push({ event: et, listeners: ot }),
						J ? (et.data = J) : ((J = Co(n)), J !== null && (et.data = J)))),
					(J = im ? um(t, n) : rm(t, n)) &&
						((et = _u(x, 'onBeforeInput')),
						0 < et.length &&
							((ot = new Mo('onBeforeInput', 'beforeinput', null, n, U)),
							L.push({ event: ot, listeners: et }),
							(ot.data = J))),
					Fm(L, t, x, n, U);
			}
			yh(L, e);
		});
	}
	function Wl(t, e, n) {
		return { instance: t, listener: e, currentTarget: n };
	}
	function _u(t, e) {
		for (var n = e + 'Capture', a = []; t !== null; ) {
			var i = t,
				s = i.stateNode;
			if (
				((i = i.tag),
				(i !== 5 && i !== 26 && i !== 27) ||
					s === null ||
					((i = ml(t, n)),
					i != null && a.unshift(Wl(t, i, s)),
					(i = ml(t, e)),
					i != null && a.push(Wl(t, i, s))),
				t.tag === 3)
			)
				return a;
			t = t.return;
		}
		return [];
	}
	function Wa(t) {
		if (t === null) return null;
		do t = t.return;
		while (t && t.tag !== 5 && t.tag !== 27);
		return t || null;
	}
	function vh(t, e, n, a, i) {
		for (var s = e._reactName, f = []; n !== null && n !== a; ) {
			var m = n,
				R = m.alternate,
				x = m.stateNode;
			if (((m = m.tag), R !== null && R === a)) break;
			(m !== 5 && m !== 26 && m !== 27) ||
				x === null ||
				((R = x),
				i
					? ((x = ml(n, s)), x != null && f.unshift(Wl(n, x, R)))
					: i || ((x = ml(n, s)), x != null && f.push(Wl(n, x, R)))),
				(n = n.return);
		}
		f.length !== 0 && t.push({ event: e, listeners: f });
	}
	var ev = /\r\n?/g,
		nv = /\u0000|\uFFFD/g;
	function gh(t) {
		return (typeof t == 'string' ? t : '' + t)
			.replace(
				ev,
				`
`,
			)
			.replace(nv, '');
	}
	function Sh(t, e) {
		return (e = gh(e)), gh(t) === e;
	}
	function Ru() {}
	function Mt(t, e, n, a, i, s) {
		switch (n) {
			case 'children':
				typeof a == 'string'
					? e === 'body' || (e === 'textarea' && a === '') || Ta(t, a)
					: (typeof a == 'number' || typeof a == 'bigint') &&
						e !== 'body' &&
						Ta(t, '' + a);
				break;
			case 'className':
				Oi(t, 'class', a);
				break;
			case 'tabIndex':
				Oi(t, 'tabindex', a);
				break;
			case 'dir':
			case 'role':
			case 'viewBox':
			case 'width':
			case 'height':
				Oi(t, n, a);
				break;
			case 'style':
				bo(t, a, s);
				break;
			case 'data':
				if (e !== 'object') {
					Oi(t, 'data', a);
					break;
				}
			case 'src':
			case 'href':
				if (a === '' && (e !== 'a' || n !== 'href')) {
					t.removeAttribute(n);
					break;
				}
				if (
					a == null ||
					typeof a == 'function' ||
					typeof a == 'symbol' ||
					typeof a == 'boolean'
				) {
					t.removeAttribute(n);
					break;
				}
				(a = wi('' + a)), t.setAttribute(n, a);
				break;
			case 'action':
			case 'formAction':
				if (typeof a == 'function') {
					t.setAttribute(
						n,
						"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
					);
					break;
				} else
					typeof s == 'function' &&
						(n === 'formAction'
							? (e !== 'input' && Mt(t, e, 'name', i.name, i, null),
								Mt(t, e, 'formEncType', i.formEncType, i, null),
								Mt(t, e, 'formMethod', i.formMethod, i, null),
								Mt(t, e, 'formTarget', i.formTarget, i, null))
							: (Mt(t, e, 'encType', i.encType, i, null),
								Mt(t, e, 'method', i.method, i, null),
								Mt(t, e, 'target', i.target, i, null)));
				if (a == null || typeof a == 'symbol' || typeof a == 'boolean') {
					t.removeAttribute(n);
					break;
				}
				(a = wi('' + a)), t.setAttribute(n, a);
				break;
			case 'onClick':
				a != null && (t.onclick = Ru);
				break;
			case 'onScroll':
				a != null && dt('scroll', t);
				break;
			case 'onScrollEnd':
				a != null && dt('scrollend', t);
				break;
			case 'dangerouslySetInnerHTML':
				if (a != null) {
					if (typeof a != 'object' || !('__html' in a)) throw Error(c(61));
					if (((n = a.__html), n != null)) {
						if (i.children != null) throw Error(c(60));
						t.innerHTML = n;
					}
				}
				break;
			case 'multiple':
				t.multiple = a && typeof a != 'function' && typeof a != 'symbol';
				break;
			case 'muted':
				t.muted = a && typeof a != 'function' && typeof a != 'symbol';
				break;
			case 'suppressContentEditableWarning':
			case 'suppressHydrationWarning':
			case 'defaultValue':
			case 'defaultChecked':
			case 'innerHTML':
			case 'ref':
				break;
			case 'autoFocus':
				break;
			case 'xlinkHref':
				if (
					a == null ||
					typeof a == 'function' ||
					typeof a == 'boolean' ||
					typeof a == 'symbol'
				) {
					t.removeAttribute('xlink:href');
					break;
				}
				(n = wi('' + a)),
					t.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', n);
				break;
			case 'contentEditable':
			case 'spellCheck':
			case 'draggable':
			case 'value':
			case 'autoReverse':
			case 'externalResourcesRequired':
			case 'focusable':
			case 'preserveAlpha':
				a != null && typeof a != 'function' && typeof a != 'symbol'
					? t.setAttribute(n, '' + a)
					: t.removeAttribute(n);
				break;
			case 'inert':
			case 'allowFullScreen':
			case 'async':
			case 'autoPlay':
			case 'controls':
			case 'default':
			case 'defer':
			case 'disabled':
			case 'disablePictureInPicture':
			case 'disableRemotePlayback':
			case 'formNoValidate':
			case 'hidden':
			case 'loop':
			case 'noModule':
			case 'noValidate':
			case 'open':
			case 'playsInline':
			case 'readOnly':
			case 'required':
			case 'reversed':
			case 'scoped':
			case 'seamless':
			case 'itemScope':
				a && typeof a != 'function' && typeof a != 'symbol'
					? t.setAttribute(n, '')
					: t.removeAttribute(n);
				break;
			case 'capture':
			case 'download':
				a === !0
					? t.setAttribute(n, '')
					: a !== !1 &&
							a != null &&
							typeof a != 'function' &&
							typeof a != 'symbol'
						? t.setAttribute(n, a)
						: t.removeAttribute(n);
				break;
			case 'cols':
			case 'rows':
			case 'size':
			case 'span':
				a != null &&
				typeof a != 'function' &&
				typeof a != 'symbol' &&
				!isNaN(a) &&
				1 <= a
					? t.setAttribute(n, a)
					: t.removeAttribute(n);
				break;
			case 'rowSpan':
			case 'start':
				a == null || typeof a == 'function' || typeof a == 'symbol' || isNaN(a)
					? t.removeAttribute(n)
					: t.setAttribute(n, a);
				break;
			case 'popover':
				dt('beforetoggle', t), dt('toggle', t), Mi(t, 'popover', a);
				break;
			case 'xlinkActuate':
				Je(t, 'http://www.w3.org/1999/xlink', 'xlink:actuate', a);
				break;
			case 'xlinkArcrole':
				Je(t, 'http://www.w3.org/1999/xlink', 'xlink:arcrole', a);
				break;
			case 'xlinkRole':
				Je(t, 'http://www.w3.org/1999/xlink', 'xlink:role', a);
				break;
			case 'xlinkShow':
				Je(t, 'http://www.w3.org/1999/xlink', 'xlink:show', a);
				break;
			case 'xlinkTitle':
				Je(t, 'http://www.w3.org/1999/xlink', 'xlink:title', a);
				break;
			case 'xlinkType':
				Je(t, 'http://www.w3.org/1999/xlink', 'xlink:type', a);
				break;
			case 'xmlBase':
				Je(t, 'http://www.w3.org/XML/1998/namespace', 'xml:base', a);
				break;
			case 'xmlLang':
				Je(t, 'http://www.w3.org/XML/1998/namespace', 'xml:lang', a);
				break;
			case 'xmlSpace':
				Je(t, 'http://www.w3.org/XML/1998/namespace', 'xml:space', a);
				break;
			case 'is':
				Mi(t, 'is', a);
				break;
			case 'innerText':
			case 'textContent':
				break;
			default:
				(!(2 < n.length) ||
					(n[0] !== 'o' && n[0] !== 'O') ||
					(n[1] !== 'n' && n[1] !== 'N')) &&
					((n = Cy.get(n) || n), Mi(t, n, a));
		}
	}
	function Is(t, e, n, a, i, s) {
		switch (n) {
			case 'style':
				bo(t, a, s);
				break;
			case 'dangerouslySetInnerHTML':
				if (a != null) {
					if (typeof a != 'object' || !('__html' in a)) throw Error(c(61));
					if (((n = a.__html), n != null)) {
						if (i.children != null) throw Error(c(60));
						t.innerHTML = n;
					}
				}
				break;
			case 'children':
				typeof a == 'string'
					? Ta(t, a)
					: (typeof a == 'number' || typeof a == 'bigint') && Ta(t, '' + a);
				break;
			case 'onScroll':
				a != null && dt('scroll', t);
				break;
			case 'onScrollEnd':
				a != null && dt('scrollend', t);
				break;
			case 'onClick':
				a != null && (t.onclick = Ru);
				break;
			case 'suppressContentEditableWarning':
			case 'suppressHydrationWarning':
			case 'innerHTML':
			case 'ref':
				break;
			case 'innerText':
			case 'textContent':
				break;
			default:
				if (!so.hasOwnProperty(n))
					t: {
						if (
							n[0] === 'o' &&
							n[1] === 'n' &&
							((i = n.endsWith('Capture')),
							(e = n.slice(2, i ? n.length - 7 : void 0)),
							(s = t[ie] || null),
							(s = s != null ? s[n] : null),
							typeof s == 'function' && t.removeEventListener(e, s, i),
							typeof a == 'function')
						) {
							typeof s != 'function' &&
								s !== null &&
								(n in t
									? (t[n] = null)
									: t.hasAttribute(n) && t.removeAttribute(n)),
								t.addEventListener(e, a, i);
							break t;
						}
						n in t
							? (t[n] = a)
							: a === !0
								? t.setAttribute(n, '')
								: Mi(t, n, a);
					}
		}
	}
	function Ft(t, e, n) {
		switch (e) {
			case 'div':
			case 'span':
			case 'svg':
			case 'path':
			case 'a':
			case 'g':
			case 'p':
			case 'li':
				break;
			case 'img':
				dt('error', t), dt('load', t);
				var a = !1,
					i = !1,
					s;
				for (s in n)
					if (n.hasOwnProperty(s)) {
						var f = n[s];
						if (f != null)
							switch (s) {
								case 'src':
									a = !0;
									break;
								case 'srcSet':
									i = !0;
									break;
								case 'children':
								case 'dangerouslySetInnerHTML':
									throw Error(c(137, e));
								default:
									Mt(t, e, s, f, n, null);
							}
					}
				i && Mt(t, e, 'srcSet', n.srcSet, n, null),
					a && Mt(t, e, 'src', n.src, n, null);
				return;
			case 'input':
				dt('invalid', t);
				var m = (s = f = i = null),
					R = null,
					x = null;
				for (a in n)
					if (n.hasOwnProperty(a)) {
						var U = n[a];
						if (U != null)
							switch (a) {
								case 'name':
									i = U;
									break;
								case 'type':
									f = U;
									break;
								case 'checked':
									R = U;
									break;
								case 'defaultChecked':
									x = U;
									break;
								case 'value':
									s = U;
									break;
								case 'defaultValue':
									m = U;
									break;
								case 'children':
								case 'dangerouslySetInnerHTML':
									if (U != null) throw Error(c(137, e));
									break;
								default:
									Mt(t, e, a, U, n, null);
							}
					}
				mo(t, s, m, R, x, f, i, !1), xi(t);
				return;
			case 'select':
				dt('invalid', t), (a = f = s = null);
				for (i in n)
					if (n.hasOwnProperty(i) && ((m = n[i]), m != null))
						switch (i) {
							case 'value':
								s = m;
								break;
							case 'defaultValue':
								f = m;
								break;
							case 'multiple':
								a = m;
							default:
								Mt(t, e, i, m, n, null);
						}
				(e = s),
					(n = f),
					(t.multiple = !!a),
					e != null ? Ea(t, !!a, e, !1) : n != null && Ea(t, !!a, n, !0);
				return;
			case 'textarea':
				dt('invalid', t), (s = i = a = null);
				for (f in n)
					if (n.hasOwnProperty(f) && ((m = n[f]), m != null))
						switch (f) {
							case 'value':
								a = m;
								break;
							case 'defaultValue':
								i = m;
								break;
							case 'children':
								s = m;
								break;
							case 'dangerouslySetInnerHTML':
								if (m != null) throw Error(c(91));
								break;
							default:
								Mt(t, e, f, m, n, null);
						}
				go(t, a, i, s), xi(t);
				return;
			case 'option':
				for (R in n)
					if (n.hasOwnProperty(R) && ((a = n[R]), a != null))
						switch (R) {
							case 'selected':
								t.selected =
									a && typeof a != 'function' && typeof a != 'symbol';
								break;
							default:
								Mt(t, e, R, a, n, null);
						}
				return;
			case 'dialog':
				dt('beforetoggle', t), dt('toggle', t), dt('cancel', t), dt('close', t);
				break;
			case 'iframe':
			case 'object':
				dt('load', t);
				break;
			case 'video':
			case 'audio':
				for (a = 0; a < Fl.length; a++) dt(Fl[a], t);
				break;
			case 'image':
				dt('error', t), dt('load', t);
				break;
			case 'details':
				dt('toggle', t);
				break;
			case 'embed':
			case 'source':
			case 'link':
				dt('error', t), dt('load', t);
			case 'area':
			case 'base':
			case 'br':
			case 'col':
			case 'hr':
			case 'keygen':
			case 'meta':
			case 'param':
			case 'track':
			case 'wbr':
			case 'menuitem':
				for (x in n)
					if (n.hasOwnProperty(x) && ((a = n[x]), a != null))
						switch (x) {
							case 'children':
							case 'dangerouslySetInnerHTML':
								throw Error(c(137, e));
							default:
								Mt(t, e, x, a, n, null);
						}
				return;
			default:
				if (yr(e)) {
					for (U in n)
						n.hasOwnProperty(U) &&
							((a = n[U]), a !== void 0 && Is(t, e, U, a, n, void 0));
					return;
				}
		}
		for (m in n)
			n.hasOwnProperty(m) && ((a = n[m]), a != null && Mt(t, e, m, a, n, null));
	}
	function av(t, e, n, a) {
		switch (e) {
			case 'div':
			case 'span':
			case 'svg':
			case 'path':
			case 'a':
			case 'g':
			case 'p':
			case 'li':
				break;
			case 'input':
				var i = null,
					s = null,
					f = null,
					m = null,
					R = null,
					x = null,
					U = null;
				for (w in n) {
					var L = n[w];
					if (n.hasOwnProperty(w) && L != null)
						switch (w) {
							case 'checked':
								break;
							case 'value':
								break;
							case 'defaultValue':
								R = L;
							default:
								a.hasOwnProperty(w) || Mt(t, e, w, null, a, L);
						}
				}
				for (var z in a) {
					var w = a[z];
					if (((L = n[z]), a.hasOwnProperty(z) && (w != null || L != null)))
						switch (z) {
							case 'type':
								s = w;
								break;
							case 'name':
								i = w;
								break;
							case 'checked':
								x = w;
								break;
							case 'defaultChecked':
								U = w;
								break;
							case 'value':
								f = w;
								break;
							case 'defaultValue':
								m = w;
								break;
							case 'children':
							case 'dangerouslySetInnerHTML':
								if (w != null) throw Error(c(137, e));
								break;
							default:
								w !== L && Mt(t, e, z, w, a, L);
						}
				}
				hr(t, f, m, R, x, U, s, i);
				return;
			case 'select':
				w = f = m = z = null;
				for (s in n)
					if (((R = n[s]), n.hasOwnProperty(s) && R != null))
						switch (s) {
							case 'value':
								break;
							case 'multiple':
								w = R;
							default:
								a.hasOwnProperty(s) || Mt(t, e, s, null, a, R);
						}
				for (i in a)
					if (
						((s = a[i]),
						(R = n[i]),
						a.hasOwnProperty(i) && (s != null || R != null))
					)
						switch (i) {
							case 'value':
								z = s;
								break;
							case 'defaultValue':
								m = s;
								break;
							case 'multiple':
								f = s;
							default:
								s !== R && Mt(t, e, i, s, a, R);
						}
				(e = m),
					(n = f),
					(a = w),
					z != null
						? Ea(t, !!n, z, !1)
						: !!a != !!n &&
							(e != null ? Ea(t, !!n, e, !0) : Ea(t, !!n, n ? [] : '', !1));
				return;
			case 'textarea':
				w = z = null;
				for (m in n)
					if (
						((i = n[m]),
						n.hasOwnProperty(m) && i != null && !a.hasOwnProperty(m))
					)
						switch (m) {
							case 'value':
								break;
							case 'children':
								break;
							default:
								Mt(t, e, m, null, a, i);
						}
				for (f in a)
					if (
						((i = a[f]),
						(s = n[f]),
						a.hasOwnProperty(f) && (i != null || s != null))
					)
						switch (f) {
							case 'value':
								z = i;
								break;
							case 'defaultValue':
								w = i;
								break;
							case 'children':
								break;
							case 'dangerouslySetInnerHTML':
								if (i != null) throw Error(c(91));
								break;
							default:
								i !== s && Mt(t, e, f, i, a, s);
						}
				vo(t, z, w);
				return;
			case 'option':
				for (var at in n)
					if (
						((z = n[at]),
						n.hasOwnProperty(at) && z != null && !a.hasOwnProperty(at))
					)
						switch (at) {
							case 'selected':
								t.selected = !1;
								break;
							default:
								Mt(t, e, at, null, a, z);
						}
				for (R in a)
					if (
						((z = a[R]),
						(w = n[R]),
						a.hasOwnProperty(R) && z !== w && (z != null || w != null))
					)
						switch (R) {
							case 'selected':
								t.selected =
									z && typeof z != 'function' && typeof z != 'symbol';
								break;
							default:
								Mt(t, e, R, z, a, w);
						}
				return;
			case 'img':
			case 'link':
			case 'area':
			case 'base':
			case 'br':
			case 'col':
			case 'embed':
			case 'hr':
			case 'keygen':
			case 'meta':
			case 'param':
			case 'source':
			case 'track':
			case 'wbr':
			case 'menuitem':
				for (var I in n)
					(z = n[I]),
						n.hasOwnProperty(I) &&
							z != null &&
							!a.hasOwnProperty(I) &&
							Mt(t, e, I, null, a, z);
				for (x in a)
					if (
						((z = a[x]),
						(w = n[x]),
						a.hasOwnProperty(x) && z !== w && (z != null || w != null))
					)
						switch (x) {
							case 'children':
							case 'dangerouslySetInnerHTML':
								if (z != null) throw Error(c(137, e));
								break;
							default:
								Mt(t, e, x, z, a, w);
						}
				return;
			default:
				if (yr(e)) {
					for (var Ot in n)
						(z = n[Ot]),
							n.hasOwnProperty(Ot) &&
								z !== void 0 &&
								!a.hasOwnProperty(Ot) &&
								Is(t, e, Ot, void 0, a, z);
					for (U in a)
						(z = a[U]),
							(w = n[U]),
							!a.hasOwnProperty(U) ||
								z === w ||
								(z === void 0 && w === void 0) ||
								Is(t, e, U, z, a, w);
					return;
				}
		}
		for (var M in n)
			(z = n[M]),
				n.hasOwnProperty(M) &&
					z != null &&
					!a.hasOwnProperty(M) &&
					Mt(t, e, M, null, a, z);
		for (L in a)
			(z = a[L]),
				(w = n[L]),
				!a.hasOwnProperty(L) ||
					z === w ||
					(z == null && w == null) ||
					Mt(t, e, L, z, a, w);
	}
	var tc = null,
		ec = null;
	function Eu(t) {
		return t.nodeType === 9 ? t : t.ownerDocument;
	}
	function bh(t) {
		switch (t) {
			case 'http://www.w3.org/2000/svg':
				return 1;
			case 'http://www.w3.org/1998/Math/MathML':
				return 2;
			default:
				return 0;
		}
	}
	function _h(t, e) {
		if (t === 0)
			switch (e) {
				case 'svg':
					return 1;
				case 'math':
					return 2;
				default:
					return 0;
			}
		return t === 1 && e === 'foreignObject' ? 0 : t;
	}
	function nc(t, e) {
		return (
			t === 'textarea' ||
			t === 'noscript' ||
			typeof e.children == 'string' ||
			typeof e.children == 'number' ||
			typeof e.children == 'bigint' ||
			(typeof e.dangerouslySetInnerHTML == 'object' &&
				e.dangerouslySetInnerHTML !== null &&
				e.dangerouslySetInnerHTML.__html != null)
		);
	}
	var ac = null;
	function lv() {
		var t = window.event;
		return t && t.type === 'popstate'
			? t === ac
				? !1
				: ((ac = t), !0)
			: ((ac = null), !1);
	}
	var Rh = typeof setTimeout == 'function' ? setTimeout : void 0,
		iv = typeof clearTimeout == 'function' ? clearTimeout : void 0,
		Eh = typeof Promise == 'function' ? Promise : void 0,
		uv =
			typeof queueMicrotask == 'function'
				? queueMicrotask
				: typeof Eh < 'u'
					? function (t) {
							return Eh.resolve(null).then(t).catch(rv);
						}
					: Rh;
	function rv(t) {
		setTimeout(function () {
			throw t;
		});
	}
	function wn(t) {
		return t === 'head';
	}
	function Th(t, e) {
		var n = e,
			a = 0,
			i = 0;
		do {
			var s = n.nextSibling;
			if ((t.removeChild(n), s && s.nodeType === 8))
				if (((n = s.data), n === '/$')) {
					if (0 < a && 8 > a) {
						n = a;
						var f = t.ownerDocument;
						if ((n & 1 && Il(f.documentElement), n & 2 && Il(f.body), n & 4))
							for (n = f.head, Il(n), f = n.firstChild; f; ) {
								var m = f.nextSibling,
									R = f.nodeName;
								f[pl] ||
									R === 'SCRIPT' ||
									R === 'STYLE' ||
									(R === 'LINK' && f.rel.toLowerCase() === 'stylesheet') ||
									n.removeChild(f),
									(f = m);
							}
					}
					if (i === 0) {
						t.removeChild(s), ri(e);
						return;
					}
					i--;
				} else
					n === '$' || n === '$?' || n === '$!'
						? i++
						: (a = n.charCodeAt(0) - 48);
			else a = 0;
			n = s;
		} while (n);
		ri(e);
	}
	function lc(t) {
		var e = t.firstChild;
		for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
			var n = e;
			switch (((e = e.nextSibling), n.nodeName)) {
				case 'HTML':
				case 'HEAD':
				case 'BODY':
					lc(n), cr(n);
					continue;
				case 'SCRIPT':
				case 'STYLE':
					continue;
				case 'LINK':
					if (n.rel.toLowerCase() === 'stylesheet') continue;
			}
			t.removeChild(n);
		}
	}
	function sv(t, e, n, a) {
		for (; t.nodeType === 1; ) {
			var i = n;
			if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
				if (!a && (t.nodeName !== 'INPUT' || t.type !== 'hidden')) break;
			} else if (a) {
				if (!t[pl])
					switch (e) {
						case 'meta':
							if (!t.hasAttribute('itemprop')) break;
							return t;
						case 'link':
							if (
								((s = t.getAttribute('rel')),
								s === 'stylesheet' && t.hasAttribute('data-precedence'))
							)
								break;
							if (
								s !== i.rel ||
								t.getAttribute('href') !==
									(i.href == null || i.href === '' ? null : i.href) ||
								t.getAttribute('crossorigin') !==
									(i.crossOrigin == null ? null : i.crossOrigin) ||
								t.getAttribute('title') !== (i.title == null ? null : i.title)
							)
								break;
							return t;
						case 'style':
							if (t.hasAttribute('data-precedence')) break;
							return t;
						case 'script':
							if (
								((s = t.getAttribute('src')),
								(s !== (i.src == null ? null : i.src) ||
									t.getAttribute('type') !== (i.type == null ? null : i.type) ||
									t.getAttribute('crossorigin') !==
										(i.crossOrigin == null ? null : i.crossOrigin)) &&
									s &&
									t.hasAttribute('async') &&
									!t.hasAttribute('itemprop'))
							)
								break;
							return t;
						default:
							return t;
					}
			} else if (e === 'input' && t.type === 'hidden') {
				var s = i.name == null ? null : '' + i.name;
				if (i.type === 'hidden' && t.getAttribute('name') === s) return t;
			} else return t;
			if (((t = He(t.nextSibling)), t === null)) break;
		}
		return null;
	}
	function cv(t, e, n) {
		if (e === '') return null;
		for (; t.nodeType !== 3; )
			if (
				((t.nodeType !== 1 || t.nodeName !== 'INPUT' || t.type !== 'hidden') &&
					!n) ||
				((t = He(t.nextSibling)), t === null)
			)
				return null;
		return t;
	}
	function ic(t) {
		return (
			t.data === '$!' ||
			(t.data === '$?' && t.ownerDocument.readyState === 'complete')
		);
	}
	function ov(t, e) {
		var n = t.ownerDocument;
		if (t.data !== '$?' || n.readyState === 'complete') e();
		else {
			var a = function () {
				e(), n.removeEventListener('DOMContentLoaded', a);
			};
			n.addEventListener('DOMContentLoaded', a), (t._reactRetry = a);
		}
	}
	function He(t) {
		for (; t != null; t = t.nextSibling) {
			var e = t.nodeType;
			if (e === 1 || e === 3) break;
			if (e === 8) {
				if (
					((e = t.data),
					e === '$' || e === '$!' || e === '$?' || e === 'F!' || e === 'F')
				)
					break;
				if (e === '/$') return null;
			}
		}
		return t;
	}
	var uc = null;
	function Ah(t) {
		t = t.previousSibling;
		for (var e = 0; t; ) {
			if (t.nodeType === 8) {
				var n = t.data;
				if (n === '$' || n === '$!' || n === '$?') {
					if (e === 0) return t;
					e--;
				} else n === '/$' && e++;
			}
			t = t.previousSibling;
		}
		return null;
	}
	function Mh(t, e, n) {
		switch (((e = Eu(n)), t)) {
			case 'html':
				if (((t = e.documentElement), !t)) throw Error(c(452));
				return t;
			case 'head':
				if (((t = e.head), !t)) throw Error(c(453));
				return t;
			case 'body':
				if (((t = e.body), !t)) throw Error(c(454));
				return t;
			default:
				throw Error(c(451));
		}
	}
	function Il(t) {
		for (var e = t.attributes; e.length; ) t.removeAttributeNode(e[0]);
		cr(t);
	}
	var De = new Map(),
		Oh = new Set();
	function Tu(t) {
		return typeof t.getRootNode == 'function'
			? t.getRootNode()
			: t.nodeType === 9
				? t
				: t.ownerDocument;
	}
	var sn = V.d;
	V.d = { f: fv, r: dv, D: hv, C: pv, L: yv, m: mv, X: gv, S: vv, M: Sv };
	function fv() {
		var t = sn.f(),
			e = yu();
		return t || e;
	}
	function dv(t) {
		var e = Sa(t);
		e !== null && e.tag === 5 && e.type === 'form' ? Jf(e) : sn.r(t);
	}
	var Ia = typeof document > 'u' ? null : document;
	function xh(t, e, n) {
		var a = Ia;
		if (a && typeof e == 'string' && e) {
			var i = Te(e);
			(i = 'link[rel="' + t + '"][href="' + i + '"]'),
				typeof n == 'string' && (i += '[crossorigin="' + n + '"]'),
				Oh.has(i) ||
					(Oh.add(i),
					(t = { rel: t, crossOrigin: n, href: e }),
					a.querySelector(i) === null &&
						((e = a.createElement('link')),
						Ft(e, 'link', t),
						Zt(e),
						a.head.appendChild(e)));
		}
	}
	function hv(t) {
		sn.D(t), xh('dns-prefetch', t, null);
	}
	function pv(t, e) {
		sn.C(t, e), xh('preconnect', t, e);
	}
	function yv(t, e, n) {
		sn.L(t, e, n);
		var a = Ia;
		if (a && t && e) {
			var i = 'link[rel="preload"][as="' + Te(e) + '"]';
			e === 'image' && n && n.imageSrcSet
				? ((i += '[imagesrcset="' + Te(n.imageSrcSet) + '"]'),
					typeof n.imageSizes == 'string' &&
						(i += '[imagesizes="' + Te(n.imageSizes) + '"]'))
				: (i += '[href="' + Te(t) + '"]');
			var s = i;
			switch (e) {
				case 'style':
					s = tl(t);
					break;
				case 'script':
					s = el(t);
			}
			De.has(s) ||
				((t = g(
					{
						rel: 'preload',
						href: e === 'image' && n && n.imageSrcSet ? void 0 : t,
						as: e,
					},
					n,
				)),
				De.set(s, t),
				a.querySelector(i) !== null ||
					(e === 'style' && a.querySelector(ti(s))) ||
					(e === 'script' && a.querySelector(ei(s))) ||
					((e = a.createElement('link')),
					Ft(e, 'link', t),
					Zt(e),
					a.head.appendChild(e)));
		}
	}
	function mv(t, e) {
		sn.m(t, e);
		var n = Ia;
		if (n && t) {
			var a = e && typeof e.as == 'string' ? e.as : 'script',
				i =
					'link[rel="modulepreload"][as="' + Te(a) + '"][href="' + Te(t) + '"]',
				s = i;
			switch (a) {
				case 'audioworklet':
				case 'paintworklet':
				case 'serviceworker':
				case 'sharedworker':
				case 'worker':
				case 'script':
					s = el(t);
			}
			if (
				!De.has(s) &&
				((t = g({ rel: 'modulepreload', href: t }, e)),
				De.set(s, t),
				n.querySelector(i) === null)
			) {
				switch (a) {
					case 'audioworklet':
					case 'paintworklet':
					case 'serviceworker':
					case 'sharedworker':
					case 'worker':
					case 'script':
						if (n.querySelector(ei(s))) return;
				}
				(a = n.createElement('link')),
					Ft(a, 'link', t),
					Zt(a),
					n.head.appendChild(a);
			}
		}
	}
	function vv(t, e, n) {
		sn.S(t, e, n);
		var a = Ia;
		if (a && t) {
			var i = ba(a).hoistableStyles,
				s = tl(t);
			e = e || 'default';
			var f = i.get(s);
			if (!f) {
				var m = { loading: 0, preload: null };
				if ((f = a.querySelector(ti(s)))) m.loading = 5;
				else {
					(t = g({ rel: 'stylesheet', href: t, 'data-precedence': e }, n)),
						(n = De.get(s)) && rc(t, n);
					var R = (f = a.createElement('link'));
					Zt(R),
						Ft(R, 'link', t),
						(R._p = new Promise(function (x, U) {
							(R.onload = x), (R.onerror = U);
						})),
						R.addEventListener('load', function () {
							m.loading |= 1;
						}),
						R.addEventListener('error', function () {
							m.loading |= 2;
						}),
						(m.loading |= 4),
						Au(f, e, a);
				}
				(f = { type: 'stylesheet', instance: f, count: 1, state: m }),
					i.set(s, f);
			}
		}
	}
	function gv(t, e) {
		sn.X(t, e);
		var n = Ia;
		if (n && t) {
			var a = ba(n).hoistableScripts,
				i = el(t),
				s = a.get(i);
			s ||
				((s = n.querySelector(ei(i))),
				s ||
					((t = g({ src: t, async: !0 }, e)),
					(e = De.get(i)) && sc(t, e),
					(s = n.createElement('script')),
					Zt(s),
					Ft(s, 'link', t),
					n.head.appendChild(s)),
				(s = { type: 'script', instance: s, count: 1, state: null }),
				a.set(i, s));
		}
	}
	function Sv(t, e) {
		sn.M(t, e);
		var n = Ia;
		if (n && t) {
			var a = ba(n).hoistableScripts,
				i = el(t),
				s = a.get(i);
			s ||
				((s = n.querySelector(ei(i))),
				s ||
					((t = g({ src: t, async: !0, type: 'module' }, e)),
					(e = De.get(i)) && sc(t, e),
					(s = n.createElement('script')),
					Zt(s),
					Ft(s, 'link', t),
					n.head.appendChild(s)),
				(s = { type: 'script', instance: s, count: 1, state: null }),
				a.set(i, s));
		}
	}
	function zh(t, e, n, a) {
		var i = (i = $.current) ? Tu(i) : null;
		if (!i) throw Error(c(446));
		switch (t) {
			case 'meta':
			case 'title':
				return null;
			case 'style':
				return typeof n.precedence == 'string' && typeof n.href == 'string'
					? ((e = tl(n.href)),
						(n = ba(i).hoistableStyles),
						(a = n.get(e)),
						a ||
							((a = { type: 'style', instance: null, count: 0, state: null }),
							n.set(e, a)),
						a)
					: { type: 'void', instance: null, count: 0, state: null };
			case 'link':
				if (
					n.rel === 'stylesheet' &&
					typeof n.href == 'string' &&
					typeof n.precedence == 'string'
				) {
					t = tl(n.href);
					var s = ba(i).hoistableStyles,
						f = s.get(t);
					if (
						(f ||
							((i = i.ownerDocument || i),
							(f = {
								type: 'stylesheet',
								instance: null,
								count: 0,
								state: { loading: 0, preload: null },
							}),
							s.set(t, f),
							(s = i.querySelector(ti(t))) &&
								!s._p &&
								((f.instance = s), (f.state.loading = 5)),
							De.has(t) ||
								((n = {
									rel: 'preload',
									as: 'style',
									href: n.href,
									crossOrigin: n.crossOrigin,
									integrity: n.integrity,
									media: n.media,
									hrefLang: n.hrefLang,
									referrerPolicy: n.referrerPolicy,
								}),
								De.set(t, n),
								s || bv(i, t, n, f.state))),
						e && a === null)
					)
						throw Error(c(528, ''));
					return f;
				}
				if (e && a !== null) throw Error(c(529, ''));
				return null;
			case 'script':
				return (
					(e = n.async),
					(n = n.src),
					typeof n == 'string' &&
					e &&
					typeof e != 'function' &&
					typeof e != 'symbol'
						? ((e = el(n)),
							(n = ba(i).hoistableScripts),
							(a = n.get(e)),
							a ||
								((a = {
									type: 'script',
									instance: null,
									count: 0,
									state: null,
								}),
								n.set(e, a)),
							a)
						: { type: 'void', instance: null, count: 0, state: null }
				);
			default:
				throw Error(c(444, t));
		}
	}
	function tl(t) {
		return 'href="' + Te(t) + '"';
	}
	function ti(t) {
		return 'link[rel="stylesheet"][' + t + ']';
	}
	function wh(t) {
		return g({}, t, { 'data-precedence': t.precedence, precedence: null });
	}
	function bv(t, e, n, a) {
		t.querySelector('link[rel="preload"][as="style"][' + e + ']')
			? (a.loading = 1)
			: ((e = t.createElement('link')),
				(a.preload = e),
				e.addEventListener('load', function () {
					return (a.loading |= 1);
				}),
				e.addEventListener('error', function () {
					return (a.loading |= 2);
				}),
				Ft(e, 'link', n),
				Zt(e),
				t.head.appendChild(e));
	}
	function el(t) {
		return '[src="' + Te(t) + '"]';
	}
	function ei(t) {
		return 'script[async]' + t;
	}
	function Dh(t, e, n) {
		if ((e.count++, e.instance === null))
			switch (e.type) {
				case 'style':
					var a = t.querySelector('style[data-href~="' + Te(n.href) + '"]');
					if (a) return (e.instance = a), Zt(a), a;
					var i = g({}, n, {
						'data-href': n.href,
						'data-precedence': n.precedence,
						href: null,
						precedence: null,
					});
					return (
						(a = (t.ownerDocument || t).createElement('style')),
						Zt(a),
						Ft(a, 'style', i),
						Au(a, n.precedence, t),
						(e.instance = a)
					);
				case 'stylesheet':
					i = tl(n.href);
					var s = t.querySelector(ti(i));
					if (s) return (e.state.loading |= 4), (e.instance = s), Zt(s), s;
					(a = wh(n)),
						(i = De.get(i)) && rc(a, i),
						(s = (t.ownerDocument || t).createElement('link')),
						Zt(s);
					var f = s;
					return (
						(f._p = new Promise(function (m, R) {
							(f.onload = m), (f.onerror = R);
						})),
						Ft(s, 'link', a),
						(e.state.loading |= 4),
						Au(s, n.precedence, t),
						(e.instance = s)
					);
				case 'script':
					return (
						(s = el(n.src)),
						(i = t.querySelector(ei(s)))
							? ((e.instance = i), Zt(i), i)
							: ((a = n),
								(i = De.get(s)) && ((a = g({}, n)), sc(a, i)),
								(t = t.ownerDocument || t),
								(i = t.createElement('script')),
								Zt(i),
								Ft(i, 'link', a),
								t.head.appendChild(i),
								(e.instance = i))
					);
				case 'void':
					return null;
				default:
					throw Error(c(443, e.type));
			}
		else
			e.type === 'stylesheet' &&
				(e.state.loading & 4) === 0 &&
				((a = e.instance), (e.state.loading |= 4), Au(a, n.precedence, t));
		return e.instance;
	}
	function Au(t, e, n) {
		for (
			var a = n.querySelectorAll(
					'link[rel="stylesheet"][data-precedence],style[data-precedence]',
				),
				i = a.length ? a[a.length - 1] : null,
				s = i,
				f = 0;
			f < a.length;
			f++
		) {
			var m = a[f];
			if (m.dataset.precedence === e) s = m;
			else if (s !== i) break;
		}
		s
			? s.parentNode.insertBefore(t, s.nextSibling)
			: ((e = n.nodeType === 9 ? n.head : n), e.insertBefore(t, e.firstChild));
	}
	function rc(t, e) {
		t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
			t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
			t.title == null && (t.title = e.title);
	}
	function sc(t, e) {
		t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
			t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
			t.integrity == null && (t.integrity = e.integrity);
	}
	var Mu = null;
	function Ch(t, e, n) {
		if (Mu === null) {
			var a = new Map(),
				i = (Mu = new Map());
			i.set(n, a);
		} else (i = Mu), (a = i.get(n)), a || ((a = new Map()), i.set(n, a));
		if (a.has(t)) return a;
		for (
			a.set(t, null), n = n.getElementsByTagName(t), i = 0;
			i < n.length;
			i++
		) {
			var s = n[i];
			if (
				!(
					s[pl] ||
					s[Wt] ||
					(t === 'link' && s.getAttribute('rel') === 'stylesheet')
				) &&
				s.namespaceURI !== 'http://www.w3.org/2000/svg'
			) {
				var f = s.getAttribute(e) || '';
				f = t + f;
				var m = a.get(f);
				m ? m.push(s) : a.set(f, [s]);
			}
		}
		return a;
	}
	function Uh(t, e, n) {
		(t = t.ownerDocument || t),
			t.head.insertBefore(
				n,
				e === 'title' ? t.querySelector('head > title') : null,
			);
	}
	function _v(t, e, n) {
		if (n === 1 || e.itemProp != null) return !1;
		switch (t) {
			case 'meta':
			case 'title':
				return !0;
			case 'style':
				if (
					typeof e.precedence != 'string' ||
					typeof e.href != 'string' ||
					e.href === ''
				)
					break;
				return !0;
			case 'link':
				if (
					typeof e.rel != 'string' ||
					typeof e.href != 'string' ||
					e.href === '' ||
					e.onLoad ||
					e.onError
				)
					break;
				switch (e.rel) {
					case 'stylesheet':
						return (
							(t = e.disabled), typeof e.precedence == 'string' && t == null
						);
					default:
						return !0;
				}
			case 'script':
				if (
					e.async &&
					typeof e.async != 'function' &&
					typeof e.async != 'symbol' &&
					!e.onLoad &&
					!e.onError &&
					e.src &&
					typeof e.src == 'string'
				)
					return !0;
		}
		return !1;
	}
	function Nh(t) {
		return !(t.type === 'stylesheet' && (t.state.loading & 3) === 0);
	}
	var ni = null;
	function Rv() {}
	function Ev(t, e, n) {
		if (ni === null) throw Error(c(475));
		var a = ni;
		if (
			e.type === 'stylesheet' &&
			(typeof n.media != 'string' || matchMedia(n.media).matches !== !1) &&
			(e.state.loading & 4) === 0
		) {
			if (e.instance === null) {
				var i = tl(n.href),
					s = t.querySelector(ti(i));
				if (s) {
					(t = s._p),
						t !== null &&
							typeof t == 'object' &&
							typeof t.then == 'function' &&
							(a.count++, (a = Ou.bind(a)), t.then(a, a)),
						(e.state.loading |= 4),
						(e.instance = s),
						Zt(s);
					return;
				}
				(s = t.ownerDocument || t),
					(n = wh(n)),
					(i = De.get(i)) && rc(n, i),
					(s = s.createElement('link')),
					Zt(s);
				var f = s;
				(f._p = new Promise(function (m, R) {
					(f.onload = m), (f.onerror = R);
				})),
					Ft(s, 'link', n),
					(e.instance = s);
			}
			a.stylesheets === null && (a.stylesheets = new Map()),
				a.stylesheets.set(e, t),
				(t = e.state.preload) &&
					(e.state.loading & 3) === 0 &&
					(a.count++,
					(e = Ou.bind(a)),
					t.addEventListener('load', e),
					t.addEventListener('error', e));
		}
	}
	function Tv() {
		if (ni === null) throw Error(c(475));
		var t = ni;
		return (
			t.stylesheets && t.count === 0 && cc(t, t.stylesheets),
			0 < t.count
				? function (e) {
						var n = setTimeout(function () {
							if ((t.stylesheets && cc(t, t.stylesheets), t.unsuspend)) {
								var a = t.unsuspend;
								(t.unsuspend = null), a();
							}
						}, 6e4);
						return (
							(t.unsuspend = e),
							function () {
								(t.unsuspend = null), clearTimeout(n);
							}
						);
					}
				: null
		);
	}
	function Ou() {
		if ((this.count--, this.count === 0)) {
			if (this.stylesheets) cc(this, this.stylesheets);
			else if (this.unsuspend) {
				var t = this.unsuspend;
				(this.unsuspend = null), t();
			}
		}
	}
	var xu = null;
	function cc(t, e) {
		(t.stylesheets = null),
			t.unsuspend !== null &&
				(t.count++,
				(xu = new Map()),
				e.forEach(Av, t),
				(xu = null),
				Ou.call(t));
	}
	function Av(t, e) {
		if (!(e.state.loading & 4)) {
			var n = xu.get(t);
			if (n) var a = n.get(null);
			else {
				(n = new Map()), xu.set(t, n);
				for (
					var i = t.querySelectorAll(
							'link[data-precedence],style[data-precedence]',
						),
						s = 0;
					s < i.length;
					s++
				) {
					var f = i[s];
					(f.nodeName === 'LINK' || f.getAttribute('media') !== 'not all') &&
						(n.set(f.dataset.precedence, f), (a = f));
				}
				a && n.set(null, a);
			}
			(i = e.instance),
				(f = i.getAttribute('data-precedence')),
				(s = n.get(f) || a),
				s === a && n.set(null, i),
				n.set(f, i),
				this.count++,
				(a = Ou.bind(this)),
				i.addEventListener('load', a),
				i.addEventListener('error', a),
				s
					? s.parentNode.insertBefore(i, s.nextSibling)
					: ((t = t.nodeType === 9 ? t.head : t),
						t.insertBefore(i, t.firstChild)),
				(e.state.loading |= 4);
		}
	}
	var ai = {
		$$typeof: K,
		Provider: null,
		Consumer: null,
		_currentValue: tt,
		_currentValue2: tt,
		_threadCount: 0,
	};
	function Mv(t, e, n, a, i, s, f, m) {
		(this.tag = 1),
			(this.containerInfo = t),
			(this.pingCache = this.current = this.pendingChildren = null),
			(this.timeoutHandle = -1),
			(this.callbackNode =
				this.next =
				this.pendingContext =
				this.context =
				this.cancelPendingCommit =
					null),
			(this.callbackPriority = 0),
			(this.expirationTimes = ir(-1)),
			(this.entangledLanes =
				this.shellSuspendCounter =
				this.errorRecoveryDisabledLanes =
				this.expiredLanes =
				this.warmLanes =
				this.pingedLanes =
				this.suspendedLanes =
				this.pendingLanes =
					0),
			(this.entanglements = ir(0)),
			(this.hiddenUpdates = ir(null)),
			(this.identifierPrefix = a),
			(this.onUncaughtError = i),
			(this.onCaughtError = s),
			(this.onRecoverableError = f),
			(this.pooledCache = null),
			(this.pooledCacheLanes = 0),
			(this.formState = m),
			(this.incompleteTransitions = new Map());
	}
	function Lh(t, e, n, a, i, s, f, m, R, x, U, L) {
		return (
			(t = new Mv(t, e, n, f, m, R, x, L)),
			(e = 1),
			s === !0 && (e |= 24),
			(s = ye(3, null, null, e)),
			(t.current = s),
			(s.stateNode = t),
			(e = Qr()),
			e.refCount++,
			(t.pooledCache = e),
			e.refCount++,
			(s.memoizedState = { element: a, isDehydrated: n, cache: e }),
			Pr(s),
			t
		);
	}
	function Bh(t) {
		return t ? ((t = Ca), t) : Ca;
	}
	function Hh(t, e, n, a, i, s) {
		(i = Bh(i)),
			a.context === null ? (a.context = i) : (a.pendingContext = i),
			(a = vn(e)),
			(a.payload = { element: n }),
			(s = s === void 0 ? null : s),
			s !== null && (a.callback = s),
			(n = gn(t, a, e)),
			n !== null && (be(n, t, e), Ul(n, t, e));
	}
	function jh(t, e) {
		if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
			var n = t.retryLane;
			t.retryLane = n !== 0 && n < e ? n : e;
		}
	}
	function oc(t, e) {
		jh(t, e), (t = t.alternate) && jh(t, e);
	}
	function qh(t) {
		if (t.tag === 13) {
			var e = Da(t, 67108864);
			e !== null && be(e, t, 67108864), oc(t, 67108864);
		}
	}
	var zu = !0;
	function Ov(t, e, n, a) {
		var i = C.T;
		C.T = null;
		var s = V.p;
		try {
			(V.p = 2), fc(t, e, n, a);
		} finally {
			(V.p = s), (C.T = i);
		}
	}
	function xv(t, e, n, a) {
		var i = C.T;
		C.T = null;
		var s = V.p;
		try {
			(V.p = 8), fc(t, e, n, a);
		} finally {
			(V.p = s), (C.T = i);
		}
	}
	function fc(t, e, n, a) {
		if (zu) {
			var i = dc(a);
			if (i === null) Ws(t, e, a, wu, n), Yh(t, a);
			else if (wv(i, t, e, n, a)) a.stopPropagation();
			else if ((Yh(t, a), e & 4 && -1 < zv.indexOf(t))) {
				for (; i !== null; ) {
					var s = Sa(i);
					if (s !== null)
						switch (s.tag) {
							case 3:
								if (((s = s.stateNode), s.current.memoizedState.isDehydrated)) {
									var f = Jn(s.pendingLanes);
									if (f !== 0) {
										var m = s;
										for (m.pendingLanes |= 2, m.entangledLanes |= 2; f; ) {
											var R = 1 << (31 - he(f));
											(m.entanglements[1] |= R), (f &= ~R);
										}
										Xe(s), (Rt & 6) === 0 && ((hu = Re() + 500), $l(0));
									}
								}
								break;
							case 13:
								(m = Da(s, 2)), m !== null && be(m, s, 2), yu(), oc(s, 2);
						}
					if (((s = dc(a)), s === null && Ws(t, e, a, wu, n), s === i)) break;
					i = s;
				}
				i !== null && a.stopPropagation();
			} else Ws(t, e, a, null, n);
		}
	}
	function dc(t) {
		return (t = vr(t)), hc(t);
	}
	var wu = null;
	function hc(t) {
		if (((wu = null), (t = ga(t)), t !== null)) {
			var e = d(t);
			if (e === null) t = null;
			else {
				var n = e.tag;
				if (n === 13) {
					if (((t = v(e)), t !== null)) return t;
					t = null;
				} else if (n === 3) {
					if (e.stateNode.current.memoizedState.isDehydrated)
						return e.tag === 3 ? e.stateNode.containerInfo : null;
					t = null;
				} else e !== t && (t = null);
			}
		}
		return (wu = t), null;
	}
	function Vh(t) {
		switch (t) {
			case 'beforetoggle':
			case 'cancel':
			case 'click':
			case 'close':
			case 'contextmenu':
			case 'copy':
			case 'cut':
			case 'auxclick':
			case 'dblclick':
			case 'dragend':
			case 'dragstart':
			case 'drop':
			case 'focusin':
			case 'focusout':
			case 'input':
			case 'invalid':
			case 'keydown':
			case 'keypress':
			case 'keyup':
			case 'mousedown':
			case 'mouseup':
			case 'paste':
			case 'pause':
			case 'play':
			case 'pointercancel':
			case 'pointerdown':
			case 'pointerup':
			case 'ratechange':
			case 'reset':
			case 'resize':
			case 'seeked':
			case 'submit':
			case 'toggle':
			case 'touchcancel':
			case 'touchend':
			case 'touchstart':
			case 'volumechange':
			case 'change':
			case 'selectionchange':
			case 'textInput':
			case 'compositionstart':
			case 'compositionend':
			case 'compositionupdate':
			case 'beforeblur':
			case 'afterblur':
			case 'beforeinput':
			case 'blur':
			case 'fullscreenchange':
			case 'focus':
			case 'hashchange':
			case 'popstate':
			case 'select':
			case 'selectstart':
				return 2;
			case 'drag':
			case 'dragenter':
			case 'dragexit':
			case 'dragleave':
			case 'dragover':
			case 'mousemove':
			case 'mouseout':
			case 'mouseover':
			case 'pointermove':
			case 'pointerout':
			case 'pointerover':
			case 'scroll':
			case 'touchmove':
			case 'wheel':
			case 'mouseenter':
			case 'mouseleave':
			case 'pointerenter':
			case 'pointerleave':
				return 8;
			case 'message':
				switch (lr()) {
					case Qn:
						return 2;
					case Zn:
						return 8;
					case Kn:
					case Ri:
						return 32;
					case _t:
						return 268435456;
					default:
						return 32;
				}
			default:
				return 32;
		}
	}
	var pc = !1,
		Dn = null,
		Cn = null,
		Un = null,
		li = new Map(),
		ii = new Map(),
		Nn = [],
		zv =
			'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset'.split(
				' ',
			);
	function Yh(t, e) {
		switch (t) {
			case 'focusin':
			case 'focusout':
				Dn = null;
				break;
			case 'dragenter':
			case 'dragleave':
				Cn = null;
				break;
			case 'mouseover':
			case 'mouseout':
				Un = null;
				break;
			case 'pointerover':
			case 'pointerout':
				li.delete(e.pointerId);
				break;
			case 'gotpointercapture':
			case 'lostpointercapture':
				ii.delete(e.pointerId);
		}
	}
	function ui(t, e, n, a, i, s) {
		return t === null || t.nativeEvent !== s
			? ((t = {
					blockedOn: e,
					domEventName: n,
					eventSystemFlags: a,
					nativeEvent: s,
					targetContainers: [i],
				}),
				e !== null && ((e = Sa(e)), e !== null && qh(e)),
				t)
			: ((t.eventSystemFlags |= a),
				(e = t.targetContainers),
				i !== null && e.indexOf(i) === -1 && e.push(i),
				t);
	}
	function wv(t, e, n, a, i) {
		switch (e) {
			case 'focusin':
				return (Dn = ui(Dn, t, e, n, a, i)), !0;
			case 'dragenter':
				return (Cn = ui(Cn, t, e, n, a, i)), !0;
			case 'mouseover':
				return (Un = ui(Un, t, e, n, a, i)), !0;
			case 'pointerover':
				var s = i.pointerId;
				return li.set(s, ui(li.get(s) || null, t, e, n, a, i)), !0;
			case 'gotpointercapture':
				return (
					(s = i.pointerId), ii.set(s, ui(ii.get(s) || null, t, e, n, a, i)), !0
				);
		}
		return !1;
	}
	function Gh(t) {
		var e = ga(t.target);
		if (e !== null) {
			var n = d(e);
			if (n !== null) {
				if (((e = n.tag), e === 13)) {
					if (((e = v(n)), e !== null)) {
						(t.blockedOn = e),
							Ey(t.priority, function () {
								if (n.tag === 13) {
									var a = Se();
									a = ur(a);
									var i = Da(n, a);
									i !== null && be(i, n, a), oc(n, a);
								}
							});
						return;
					}
				} else if (e === 3 && n.stateNode.current.memoizedState.isDehydrated) {
					t.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
					return;
				}
			}
		}
		t.blockedOn = null;
	}
	function Du(t) {
		if (t.blockedOn !== null) return !1;
		for (var e = t.targetContainers; 0 < e.length; ) {
			var n = dc(t.nativeEvent);
			if (n === null) {
				n = t.nativeEvent;
				var a = new n.constructor(n.type, n);
				(mr = a), n.target.dispatchEvent(a), (mr = null);
			} else return (e = Sa(n)), e !== null && qh(e), (t.blockedOn = n), !1;
			e.shift();
		}
		return !0;
	}
	function Xh(t, e, n) {
		Du(t) && n.delete(e);
	}
	function Dv() {
		(pc = !1),
			Dn !== null && Du(Dn) && (Dn = null),
			Cn !== null && Du(Cn) && (Cn = null),
			Un !== null && Du(Un) && (Un = null),
			li.forEach(Xh),
			ii.forEach(Xh);
	}
	function Cu(t, e) {
		t.blockedOn === e &&
			((t.blockedOn = null),
			pc ||
				((pc = !0),
				l.unstable_scheduleCallback(l.unstable_NormalPriority, Dv)));
	}
	var Uu = null;
	function Qh(t) {
		Uu !== t &&
			((Uu = t),
			l.unstable_scheduleCallback(l.unstable_NormalPriority, function () {
				Uu === t && (Uu = null);
				for (var e = 0; e < t.length; e += 3) {
					var n = t[e],
						a = t[e + 1],
						i = t[e + 2];
					if (typeof a != 'function') {
						if (hc(a || n) === null) continue;
						break;
					}
					var s = Sa(n);
					s !== null &&
						(t.splice(e, 3),
						(e -= 3),
						hs(s, { pending: !0, data: i, method: n.method, action: a }, a, i));
				}
			}));
	}
	function ri(t) {
		function e(R) {
			return Cu(R, t);
		}
		Dn !== null && Cu(Dn, t),
			Cn !== null && Cu(Cn, t),
			Un !== null && Cu(Un, t),
			li.forEach(e),
			ii.forEach(e);
		for (var n = 0; n < Nn.length; n++) {
			var a = Nn[n];
			a.blockedOn === t && (a.blockedOn = null);
		}
		for (; 0 < Nn.length && ((n = Nn[0]), n.blockedOn === null); )
			Gh(n), n.blockedOn === null && Nn.shift();
		if (((n = (t.ownerDocument || t).$$reactFormReplay), n != null))
			for (a = 0; a < n.length; a += 3) {
				var i = n[a],
					s = n[a + 1],
					f = i[ie] || null;
				if (typeof s == 'function') f || Qh(n);
				else if (f) {
					var m = null;
					if (s && s.hasAttribute('formAction')) {
						if (((i = s), (f = s[ie] || null))) m = f.formAction;
						else if (hc(i) !== null) continue;
					} else m = f.action;
					typeof m == 'function' ? (n[a + 1] = m) : (n.splice(a, 3), (a -= 3)),
						Qh(n);
				}
			}
	}
	function yc(t) {
		this._internalRoot = t;
	}
	(Nu.prototype.render = yc.prototype.render =
		function (t) {
			var e = this._internalRoot;
			if (e === null) throw Error(c(409));
			var n = e.current,
				a = Se();
			Hh(n, a, t, e, null, null);
		}),
		(Nu.prototype.unmount = yc.prototype.unmount =
			function () {
				var t = this._internalRoot;
				if (t !== null) {
					this._internalRoot = null;
					var e = t.containerInfo;
					Hh(t.current, 2, null, t, null, null), yu(), (e[va] = null);
				}
			});
	function Nu(t) {
		this._internalRoot = t;
	}
	Nu.prototype.unstable_scheduleHydration = function (t) {
		if (t) {
			var e = io();
			t = { blockedOn: null, target: t, priority: e };
			for (var n = 0; n < Nn.length && e !== 0 && e < Nn[n].priority; n++);
			Nn.splice(n, 0, t), n === 0 && Gh(t);
		}
	};
	var Zh = u.version;
	if (Zh !== '19.1.1') throw Error(c(527, Zh, '19.1.1'));
	V.findDOMNode = function (t) {
		var e = t._reactInternals;
		if (e === void 0)
			throw typeof t.render == 'function'
				? Error(c(188))
				: ((t = Object.keys(t).join(',')), Error(c(268, t)));
		return (
			(t = h(e)),
			(t = t !== null ? p(t) : null),
			(t = t === null ? null : t.stateNode),
			t
		);
	};
	var Cv = {
		bundleType: 0,
		version: '19.1.1',
		rendererPackageName: 'react-dom',
		currentDispatcherRef: C,
		reconcilerVersion: '19.1.1',
	};
	if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
		var Lu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
		if (!Lu.isDisabled && Lu.supportsFiber)
			try {
				(fn = Lu.inject(Cv)), (de = Lu);
			} catch {}
	}
	return (
		(ci.createRoot = function (t, e) {
			if (!o(t)) throw Error(c(299));
			var n = !1,
				a = '',
				i = rd,
				s = sd,
				f = cd,
				m = null;
			return (
				e != null &&
					(e.unstable_strictMode === !0 && (n = !0),
					e.identifierPrefix !== void 0 && (a = e.identifierPrefix),
					e.onUncaughtError !== void 0 && (i = e.onUncaughtError),
					e.onCaughtError !== void 0 && (s = e.onCaughtError),
					e.onRecoverableError !== void 0 && (f = e.onRecoverableError),
					e.unstable_transitionCallbacks !== void 0 &&
						(m = e.unstable_transitionCallbacks)),
				(e = Lh(t, 1, !1, null, null, n, a, i, s, f, m, null)),
				(t[va] = e.current),
				Fs(t),
				new yc(e)
			);
		}),
		(ci.hydrateRoot = function (t, e, n) {
			if (!o(t)) throw Error(c(299));
			var a = !1,
				i = '',
				s = rd,
				f = sd,
				m = cd,
				R = null,
				x = null;
			return (
				n != null &&
					(n.unstable_strictMode === !0 && (a = !0),
					n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
					n.onUncaughtError !== void 0 && (s = n.onUncaughtError),
					n.onCaughtError !== void 0 && (f = n.onCaughtError),
					n.onRecoverableError !== void 0 && (m = n.onRecoverableError),
					n.unstable_transitionCallbacks !== void 0 &&
						(R = n.unstable_transitionCallbacks),
					n.formState !== void 0 && (x = n.formState)),
				(e = Lh(t, 1, !0, e, n ?? null, a, i, s, f, m, R, x)),
				(e.context = Bh(null)),
				(n = e.current),
				(a = Se()),
				(a = ur(a)),
				(i = vn(a)),
				(i.callback = null),
				gn(n, i, a),
				(n = a),
				(e.current.lanes = n),
				hl(e, n),
				Xe(e),
				(t[va] = e.current),
				Fs(t),
				new Nu(e)
			);
		}),
		(ci.version = '19.1.1'),
		ci
	);
}
var ep;
function Gv() {
	if (ep) return gc.exports;
	ep = 1;
	function l() {
		if (
			!(
				typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
				typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
			)
		)
			try {
				__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l);
			} catch (u) {
				console.error(u);
			}
	}
	return l(), (gc.exports = Yv()), gc.exports;
}
var Xv = Gv();
const ll = new WeakMap(),
	Gu = new WeakMap(),
	Zu = { current: [] };
let Rc = !1,
	yi = 0;
const pi = new Set(),
	Bu = new Map();
function Lp(l) {
	const u = Array.from(l).sort((r, c) =>
		r instanceof ul && r.options.deps.includes(c)
			? 1
			: c instanceof ul && c.options.deps.includes(r)
				? -1
				: 0,
	);
	for (const r of u) {
		if (Zu.current.includes(r)) continue;
		Zu.current.push(r), r.recompute();
		const c = Gu.get(r);
		if (c)
			for (const o of c) {
				const d = ll.get(o);
				d && Lp(d);
			}
	}
}
function Qv(l) {
	const u = { prevVal: l.prevState, currentVal: l.state };
	for (const r of l.listeners) r(u);
}
function Zv(l) {
	const u = { prevVal: l.prevState, currentVal: l.state };
	for (const r of l.listeners) r(u);
}
function Bp(l) {
	if (
		(yi > 0 && !Bu.has(l) && Bu.set(l, l.prevState),
		pi.add(l),
		!(yi > 0) && !Rc)
	)
		try {
			for (Rc = !0; pi.size > 0; ) {
				const u = Array.from(pi);
				pi.clear();
				for (const r of u) {
					const c = Bu.get(r) ?? r.prevState;
					(r.prevState = c), Qv(r);
				}
				for (const r of u) {
					const c = ll.get(r);
					c && (Zu.current.push(r), Lp(c));
				}
				for (const r of u) {
					const c = ll.get(r);
					if (c) for (const o of c) Zv(o);
				}
			}
		} finally {
			(Rc = !1), (Zu.current = []), Bu.clear();
		}
}
function il(l) {
	yi++;
	try {
		l();
	} finally {
		if ((yi--, yi === 0)) {
			const u = pi.values().next().value;
			u && Bp(u);
		}
	}
}
function Kv(l) {
	return typeof l == 'function';
}
class Nc {
	constructor(u, r) {
		(this.listeners = new Set()),
			(this.subscribe = (c) => {
				var o, d;
				this.listeners.add(c);
				const v =
					(d = (o = this.options) == null ? void 0 : o.onSubscribe) == null
						? void 0
						: d.call(o, c, this);
				return () => {
					this.listeners.delete(c), v?.();
				};
			}),
			(this.prevState = u),
			(this.state = u),
			(this.options = r);
	}
	setState(u) {
		var r, c, o;
		(this.prevState = this.state),
			(r = this.options) != null && r.updateFn
				? (this.state = this.options.updateFn(this.prevState)(u))
				: Kv(u)
					? (this.state = u(this.prevState))
					: (this.state = u),
			(o = (c = this.options) == null ? void 0 : c.onUpdate) == null ||
				o.call(c),
			Bp(this);
	}
}
class ul {
	constructor(u) {
		(this.listeners = new Set()),
			(this._subscriptions = []),
			(this.lastSeenDepValues = []),
			(this.getDepVals = () => {
				const r = this.options.deps.length,
					c = new Array(r),
					o = new Array(r);
				for (let d = 0; d < r; d++) {
					const v = this.options.deps[d];
					(c[d] = v.prevState), (o[d] = v.state);
				}
				return (
					(this.lastSeenDepValues = o),
					{ prevDepVals: c, currDepVals: o, prevVal: this.prevState ?? void 0 }
				);
			}),
			(this.recompute = () => {
				var r, c;
				this.prevState = this.state;
				const o = this.getDepVals();
				(this.state = this.options.fn(o)),
					(c = (r = this.options).onUpdate) == null || c.call(r);
			}),
			(this.checkIfRecalculationNeededDeeply = () => {
				for (const d of this.options.deps)
					d instanceof ul && d.checkIfRecalculationNeededDeeply();
				let r = !1;
				const c = this.lastSeenDepValues,
					{ currDepVals: o } = this.getDepVals();
				for (let d = 0; d < o.length; d++)
					if (o[d] !== c[d]) {
						r = !0;
						break;
					}
				r && this.recompute();
			}),
			(this.mount = () => (
				this.registerOnGraph(),
				this.checkIfRecalculationNeededDeeply(),
				() => {
					this.unregisterFromGraph();
					for (const r of this._subscriptions) r();
				}
			)),
			(this.subscribe = (r) => {
				var c, o;
				this.listeners.add(r);
				const d =
					(o = (c = this.options).onSubscribe) == null
						? void 0
						: o.call(c, r, this);
				return () => {
					this.listeners.delete(r), d?.();
				};
			}),
			(this.options = u),
			(this.state = u.fn({
				prevDepVals: void 0,
				prevVal: void 0,
				currDepVals: this.getDepVals().currDepVals,
			}));
	}
	registerOnGraph(u = this.options.deps) {
		for (const r of u)
			if (r instanceof ul)
				r.registerOnGraph(), this.registerOnGraph(r.options.deps);
			else if (r instanceof Nc) {
				let c = ll.get(r);
				c || ((c = new Set()), ll.set(r, c)), c.add(this);
				let o = Gu.get(this);
				o || ((o = new Set()), Gu.set(this, o)), o.add(r);
			}
	}
	unregisterFromGraph(u = this.options.deps) {
		for (const r of u)
			if (r instanceof ul) this.unregisterFromGraph(r.options.deps);
			else if (r instanceof Nc) {
				const c = ll.get(r);
				c && c.delete(this);
				const o = Gu.get(this);
				o && o.delete(r);
			}
	}
}
const jn = '__TSR_index',
	np = 'popstate',
	ap = 'beforeunload';
function Jv(l) {
	let u = l.getLocation();
	const r = new Set(),
		c = (v) => {
			(u = l.getLocation()), r.forEach((y) => y({ location: u, action: v }));
		},
		o = (v) => {
			(l.notifyOnIndexChange ?? !0) ? c(v) : (u = l.getLocation());
		},
		d = async ({ task: v, navigateOpts: y, ...h }) => {
			if (y?.ignoreBlocker ?? !1) {
				v();
				return;
			}
			const g = l.getBlockers?.() ?? [],
				b = h.type === 'PUSH' || h.type === 'REPLACE';
			if (typeof document < 'u' && g.length && b)
				for (const _ of g) {
					const A = Ku(h.path, h.state);
					if (
						await _.blockerFn({
							currentLocation: u,
							nextLocation: A,
							action: h.type,
						})
					) {
						l.onBlocked?.();
						return;
					}
				}
			v();
		};
	return {
		get location() {
			return u;
		},
		get length() {
			return l.getLength();
		},
		subscribers: r,
		subscribe: (v) => (
			r.add(v),
			() => {
				r.delete(v);
			}
		),
		push: (v, y, h) => {
			const p = u.state[jn];
			(y = lp(p + 1, y)),
				d({
					task: () => {
						l.pushState(v, y), c({ type: 'PUSH' });
					},
					navigateOpts: h,
					type: 'PUSH',
					path: v,
					state: y,
				});
		},
		replace: (v, y, h) => {
			const p = u.state[jn];
			(y = lp(p, y)),
				d({
					task: () => {
						l.replaceState(v, y), c({ type: 'REPLACE' });
					},
					navigateOpts: h,
					type: 'REPLACE',
					path: v,
					state: y,
				});
		},
		go: (v, y) => {
			d({
				task: () => {
					l.go(v), o({ type: 'GO', index: v });
				},
				navigateOpts: y,
				type: 'GO',
			});
		},
		back: (v) => {
			d({
				task: () => {
					l.back(v?.ignoreBlocker ?? !1), o({ type: 'BACK' });
				},
				navigateOpts: v,
				type: 'BACK',
			});
		},
		forward: (v) => {
			d({
				task: () => {
					l.forward(v?.ignoreBlocker ?? !1), o({ type: 'FORWARD' });
				},
				navigateOpts: v,
				type: 'FORWARD',
			});
		},
		canGoBack: () => u.state[jn] !== 0,
		createHref: (v) => l.createHref(v),
		block: (v) => {
			if (!l.setBlockers) return () => {};
			const y = l.getBlockers?.() ?? [];
			return (
				l.setBlockers([...y, v]),
				() => {
					const h = l.getBlockers?.() ?? [];
					l.setBlockers?.(h.filter((p) => p !== v));
				}
			);
		},
		flush: () => l.flush?.(),
		destroy: () => l.destroy?.(),
		notify: c,
	};
}
function lp(l, u) {
	u || (u = {});
	const r = Xc();
	return { ...u, key: r, __TSR_key: r, [jn]: l };
}
function Pv(l) {
	const u = typeof document < 'u' ? window : void 0,
		r = u.history.pushState,
		c = u.history.replaceState;
	let o = [];
	const d = () => o,
		v = (Q) => (o = Q),
		y = (Q) => Q,
		h = () =>
			Ku(
				`${u.location.pathname}${u.location.search}${u.location.hash}`,
				u.history.state,
			);
	if (!u.history.state?.__TSR_key && !u.history.state?.key) {
		const Q = Xc();
		u.history.replaceState({ [jn]: 0, key: Q, __TSR_key: Q }, '');
	}
	let p = h(),
		g,
		b = !1,
		_ = !1,
		A = !1,
		D = !1;
	const H = () => p;
	let Y, F;
	const it = () => {
			Y &&
				((Z._ignoreSubscribers = !0),
				(Y.isPush ? u.history.pushState : u.history.replaceState)(
					Y.state,
					'',
					Y.href,
				),
				(Z._ignoreSubscribers = !1),
				(Y = void 0),
				(F = void 0),
				(g = void 0));
		},
		K = (Q, ut, ht) => {
			const St = y(ut);
			F || (g = p),
				(p = Ku(ut, ht)),
				(Y = { href: St, state: ht, isPush: Y?.isPush || Q === 'push' }),
				F || (F = Promise.resolve().then(() => it()));
		},
		lt = (Q) => {
			(p = h()), Z.notify({ type: Q });
		},
		P = async () => {
			if (_) {
				_ = !1;
				return;
			}
			const Q = h(),
				ut = Q.state[jn] - p.state[jn],
				ht = ut === 1,
				St = ut === -1,
				pt = (!ht && !St) || b;
			b = !1;
			const ne = pt ? 'GO' : St ? 'BACK' : 'FORWARD',
				Vt = pt ? { type: 'GO', index: ut } : { type: St ? 'BACK' : 'FORWARD' };
			if (A) A = !1;
			else {
				const wt = d();
				if (typeof document < 'u' && wt.length) {
					for (const C of wt)
						if (
							await C.blockerFn({
								currentLocation: p,
								nextLocation: Q,
								action: ne,
							})
						) {
							(_ = !0), u.history.go(1), Z.notify(Vt);
							return;
						}
				}
			}
			(p = h()), Z.notify(Vt);
		},
		W = (Q) => {
			if (D) {
				D = !1;
				return;
			}
			let ut = !1;
			const ht = d();
			if (typeof document < 'u' && ht.length)
				for (const St of ht) {
					const pt = St.enableBeforeUnload ?? !0;
					if (pt === !0) {
						ut = !0;
						break;
					}
					if (typeof pt == 'function' && pt() === !0) {
						ut = !0;
						break;
					}
				}
			if (ut) return Q.preventDefault(), (Q.returnValue = '');
		},
		Z = Jv({
			getLocation: H,
			getLength: () => u.history.length,
			pushState: (Q, ut) => K('push', Q, ut),
			replaceState: (Q, ut) => K('replace', Q, ut),
			back: (Q) => (Q && (A = !0), (D = !0), u.history.back()),
			forward: (Q) => {
				Q && (A = !0), (D = !0), u.history.forward();
			},
			go: (Q) => {
				(b = !0), u.history.go(Q);
			},
			createHref: (Q) => y(Q),
			flush: it,
			destroy: () => {
				(u.history.pushState = r),
					(u.history.replaceState = c),
					u.removeEventListener(ap, W, { capture: !0 }),
					u.removeEventListener(np, P);
			},
			onBlocked: () => {
				g && p !== g && (p = g);
			},
			getBlockers: d,
			setBlockers: v,
			notifyOnIndexChange: !1,
		});
	return (
		u.addEventListener(ap, W, { capture: !0 }),
		u.addEventListener(np, P),
		(u.history.pushState = function (...Q) {
			const ut = r.apply(u.history, Q);
			return Z._ignoreSubscribers || lt('PUSH'), ut;
		}),
		(u.history.replaceState = function (...Q) {
			const ut = c.apply(u.history, Q);
			return Z._ignoreSubscribers || lt('REPLACE'), ut;
		}),
		Z
	);
}
function Ku(l, u) {
	const r = l.indexOf('#'),
		c = l.indexOf('?'),
		o = Xc();
	return {
		href: l,
		pathname: l.substring(
			0,
			r > 0 ? (c > 0 ? Math.min(r, c) : r) : c > 0 ? c : l.length,
		),
		hash: r > -1 ? l.substring(r) : '',
		search: c > -1 ? l.slice(c, r === -1 ? void 0 : r) : '',
		state: u || { [jn]: 0, key: o, __TSR_key: o },
	};
}
function Xc() {
	return (Math.random() + 1).toString(36).substring(7);
}
function Lc(l) {
	return l[l.length - 1];
}
function kv(l) {
	return typeof l == 'function';
}
function da(l, u) {
	return kv(l) ? l(u) : l;
}
const $v = Object.prototype.hasOwnProperty;
function Ce(l, u) {
	if (l === u) return l;
	const r = u,
		c = rp(l) && rp(r);
	if (!c && !(Si(l) && Si(r))) return r;
	const o = c ? l : ip(l);
	if (!o) return r;
	const d = c ? r : ip(r);
	if (!d) return r;
	const v = o.length,
		y = d.length,
		h = c ? new Array(y) : {};
	let p = 0;
	for (let g = 0; g < y; g++) {
		const b = c ? g : d[g],
			_ = l[b],
			A = r[b];
		if (_ === A) {
			(h[b] = _), (c ? g < v : $v.call(l, b)) && p++;
			continue;
		}
		if (
			_ === null ||
			A === null ||
			typeof _ != 'object' ||
			typeof A != 'object'
		) {
			h[b] = A;
			continue;
		}
		const D = Ce(_, A);
		(h[b] = D), D === _ && p++;
	}
	return v === y && p === v ? l : h;
}
function ip(l) {
	const u = [],
		r = Object.getOwnPropertyNames(l);
	for (const o of r) {
		if (!Object.prototype.propertyIsEnumerable.call(l, o)) return !1;
		u.push(o);
	}
	const c = Object.getOwnPropertySymbols(l);
	for (const o of c) {
		if (!Object.prototype.propertyIsEnumerable.call(l, o)) return !1;
		u.push(o);
	}
	return u;
}
function Si(l) {
	if (!up(l)) return !1;
	const u = l.constructor;
	if (typeof u > 'u') return !0;
	const r = u.prototype;
	return !(!up(r) || !r.hasOwnProperty('isPrototypeOf'));
}
function up(l) {
	return Object.prototype.toString.call(l) === '[object Object]';
}
function rp(l) {
	return Array.isArray(l) && l.length === Object.keys(l).length;
}
function ha(l, u, r) {
	if (l === u) return !0;
	if (typeof l != typeof u) return !1;
	if (Array.isArray(l) && Array.isArray(u)) {
		if (l.length !== u.length) return !1;
		for (let c = 0, o = l.length; c < o; c++) if (!ha(l[c], u[c], r)) return !1;
		return !0;
	}
	if (Si(l) && Si(u)) {
		const c = r?.ignoreUndefined ?? !0;
		if (r?.partial) {
			for (const v in u)
				if ((!c || u[v] !== void 0) && !ha(l[v], u[v], r)) return !1;
			return !0;
		}
		let o = 0;
		if (!c) o = Object.keys(l).length;
		else for (const v in l) l[v] !== void 0 && o++;
		let d = 0;
		for (const v in u)
			if ((!c || u[v] !== void 0) && (d++, d > o || !ha(l[v], u[v], r)))
				return !1;
		return o === d;
	}
	return !1;
}
function ya(l) {
	let u, r;
	const c = new Promise((o, d) => {
		(u = o), (r = d);
	});
	return (
		(c.status = 'pending'),
		(c.resolve = (o) => {
			(c.status = 'resolved'), (c.value = o), u(o), l?.(o);
		}),
		(c.reject = (o) => {
			(c.status = 'rejected'), r(o);
		}),
		c
	);
}
function Fv(l) {
	return typeof l?.message != 'string'
		? !1
		: l.message.startsWith('Failed to fetch dynamically imported module') ||
				l.message.startsWith('error loading dynamically imported module') ||
				l.message.startsWith('Importing a module script failed');
}
function qn(l) {
	return !!(l && typeof l == 'object' && typeof l.then == 'function');
}
var Wv = 'Invariant failed';
function oe(l, u) {
	if (!l) throw new Error(Wv);
}
const _e = '__root__',
	Ze = 0,
	ma = 1,
	sl = 2,
	cl = 3;
function cn(l) {
	return Qc(l.filter((u) => u !== void 0).join('/'));
}
function Qc(l) {
	return l.replace(/\/{2,}/g, '/');
}
function Zc(l) {
	return l === '/' ? l : l.replace(/^\/{1,}/, '');
}
function Vn(l) {
	return l === '/' ? l : l.replace(/\/{1,}$/, '');
}
function Bc(l) {
	return Vn(Zc(l));
}
function Ju(l, u) {
	return l?.endsWith('/') && l !== '/' && l !== `${u}/` ? l.slice(0, -1) : l;
}
function Iv(l, u, r) {
	return Ju(l, r) === Ju(u, r);
}
function tg(l) {
	const { type: u, value: r } = l;
	if (u === Ze) return r;
	const { prefixSegment: c, suffixSegment: o } = l;
	if (u === ma) {
		const d = r.substring(1);
		if (c && o) return `${c}{$${d}}${o}`;
		if (c) return `${c}{$${d}}`;
		if (o) return `{$${d}}${o}`;
	}
	if (u === cl) {
		const d = r.substring(1);
		return c && o
			? `${c}{-$${d}}${o}`
			: c
				? `${c}{-$${d}}`
				: o
					? `{-$${d}}${o}`
					: `{-$${d}}`;
	}
	if (u === sl) {
		if (c && o) return `${c}{$}${o}`;
		if (c) return `${c}{$}`;
		if (o) return `{$}${o}`;
	}
	return r;
}
function eg({ base: l, to: u, trailingSlash: r = 'never', parseCache: c }) {
	let o = Hp(l, c).slice();
	const d = Wu(u, c);
	o.length > 1 && Lc(o)?.value === '/' && o.pop();
	for (let h = 0, p = d.length; h < p; h++) {
		const g = d[h],
			b = g.value;
		b === '/'
			? h
				? h === p - 1 && o.push(g)
				: (o = [g])
			: b === '..'
				? o.pop()
				: b === '.' || o.push(g);
	}
	o.length > 1 &&
		(Lc(o).value === '/'
			? r === 'never' && o.pop()
			: r === 'always' && o.push({ type: Ze, value: '/' }));
	const v = o.map(tg);
	return cn(v);
}
const Hp = (l, u) => jp(l, u, !0),
	Wu = (l, u) => jp(l, u, !1),
	jp = (l, u, r) => {
		if (!l) return [];
		const c = u?.get(l);
		if (c) return c;
		const o = rg(l, r);
		return u?.set(l, o), o;
	},
	ng = /^\$.{1,}$/,
	ag = /^(.*?)\{(\$[a-zA-Z_$][a-zA-Z0-9_$]*)\}(.*)$/,
	lg = /^(.*?)\{-(\$[a-zA-Z_$][a-zA-Z0-9_$]*)\}(.*)$/,
	ig = /^\$$/,
	ug = /^(.*?)\{\$\}(.*)$/;
function rg(l, u) {
	l = Qc(l);
	const r = [];
	if (
		(l.slice(0, 1) === '/' &&
			((l = l.substring(1)), r.push({ type: Ze, value: '/' })),
		!l)
	)
		return r;
	const c = l.split('/').filter(Boolean);
	return (
		r.push(
			...c.map((o) => {
				const d = !u && o !== _e && o.slice(-1) === '_' ? o.slice(0, -1) : o,
					v = d.match(ug);
				if (v) {
					const p = v[1],
						g = v[2];
					return {
						type: sl,
						value: '$',
						prefixSegment: p || void 0,
						suffixSegment: g || void 0,
					};
				}
				const y = d.match(lg);
				if (y) {
					const p = y[1],
						g = y[2],
						b = y[3];
					return {
						type: cl,
						value: g,
						prefixSegment: p || void 0,
						suffixSegment: b || void 0,
					};
				}
				const h = d.match(ag);
				if (h) {
					const p = h[1],
						g = h[2],
						b = h[3];
					return {
						type: ma,
						value: '' + g,
						prefixSegment: p || void 0,
						suffixSegment: b || void 0,
					};
				}
				if (ng.test(d)) {
					const p = d.substring(1);
					return {
						type: ma,
						value: '$' + p,
						prefixSegment: void 0,
						suffixSegment: void 0,
					};
				}
				return ig.test(d)
					? {
							type: sl,
							value: '$',
							prefixSegment: void 0,
							suffixSegment: void 0,
						}
					: {
							type: Ze,
							value: d.includes('%25')
								? d
										.split('%25')
										.map((p) => decodeURI(p))
										.join('%25')
								: decodeURI(d),
						};
			}),
		),
		l.slice(-1) === '/' &&
			((l = l.substring(1)), r.push({ type: Ze, value: '/' })),
		r
	);
}
function Hu({
	path: l,
	params: u,
	leaveWildcards: r,
	leaveParams: c,
	decodeCharMap: o,
	parseCache: d,
}) {
	const v = Wu(l, d);
	function y(b) {
		const _ = u[b],
			A = typeof _ == 'string';
		return b === '*' || b === '_splat'
			? A
				? encodeURI(_)
				: _
			: A
				? sg(_, o)
				: _;
	}
	let h = !1;
	const p = {},
		g = cn(
			v.map((b) => {
				if (b.type === Ze) return b.value;
				if (b.type === sl) {
					(p._splat = u._splat), (p['*'] = u._splat);
					const _ = b.prefixSegment || '',
						A = b.suffixSegment || '';
					if (!('_splat' in u))
						return (
							(h = !0), r ? `${_}${b.value}${A}` : _ || A ? `${_}${A}` : void 0
						);
					const D = y('_splat');
					return r ? `${_}${b.value}${D ?? ''}${A}` : `${_}${D}${A}`;
				}
				if (b.type === ma) {
					const _ = b.value.substring(1);
					!h && !(_ in u) && (h = !0), (p[_] = u[_]);
					const A = b.prefixSegment || '',
						D = b.suffixSegment || '';
					if (c) {
						const H = y(b.value);
						return `${A}${b.value}${H ?? ''}${D}`;
					}
					return `${A}${y(_) ?? 'undefined'}${D}`;
				}
				if (b.type === cl) {
					const _ = b.value.substring(1),
						A = b.prefixSegment || '',
						D = b.suffixSegment || '';
					if (!(_ in u) || u[_] == null)
						return r ? `${A}${_}${D}` : A || D ? `${A}${D}` : void 0;
					if (((p[_] = u[_]), c)) {
						const H = y(b.value);
						return `${A}${b.value}${H ?? ''}${D}`;
					}
					return r ? `${A}${_}${y(_) ?? ''}${D}` : `${A}${y(_) ?? ''}${D}`;
				}
				return b.value;
			}),
		);
	return { usedParams: p, interpolatedPath: g, isMissingParams: h };
}
function sg(l, u) {
	let r = encodeURIComponent(l);
	if (u) for (const [c, o] of u) r = r.replaceAll(c, o);
	return r;
}
function Hc(l, u, r) {
	const c = cg(l, u, r);
	if (!(u.to && !c)) return c ?? {};
}
function cg(l, { to: u, fuzzy: r, caseSensitive: c }, o) {
	const d = u,
		v = Hp(l.startsWith('/') ? l : `/${l}`, o),
		y = Wu(d.startsWith('/') ? d : `/${d}`, o),
		h = {};
	return og(v, y, h, r, c) ? h : void 0;
}
function og(l, u, r, c, o) {
	let d = 0,
		v = 0;
	for (; d < l.length || v < u.length; ) {
		const y = l[d],
			h = u[v];
		if (h) {
			if (h.type === sl) {
				const p = l.slice(d);
				let g;
				if (h.prefixSegment || h.suffixSegment) {
					if (!y) return !1;
					const b = h.prefixSegment || '',
						_ = h.suffixSegment || '',
						A = y.value;
					if (
						('prefixSegment' in h && !A.startsWith(b)) ||
						('suffixSegment' in h && !l[l.length - 1]?.value.endsWith(_))
					)
						return !1;
					let D = decodeURI(cn(p.map((H) => H.value)));
					b && D.startsWith(b) && (D = D.slice(b.length)),
						_ && D.endsWith(_) && (D = D.slice(0, D.length - _.length)),
						(g = D);
				} else g = decodeURI(cn(p.map((b) => b.value)));
				return (r['*'] = g), (r._splat = g), !0;
			}
			if (h.type === Ze) {
				if (h.value === '/' && !y?.value) {
					v++;
					continue;
				}
				if (y) {
					if (o) {
						if (h.value !== y.value) return !1;
					} else if (h.value.toLowerCase() !== y.value.toLowerCase()) return !1;
					d++, v++;
					continue;
				} else return !1;
			}
			if (h.type === ma) {
				if (!y || y.value === '/') return !1;
				let p = '',
					g = !1;
				if (h.prefixSegment || h.suffixSegment) {
					const b = h.prefixSegment || '',
						_ = h.suffixSegment || '',
						A = y.value;
					if ((b && !A.startsWith(b)) || (_ && !A.endsWith(_))) return !1;
					let D = A;
					b && D.startsWith(b) && (D = D.slice(b.length)),
						_ && D.endsWith(_) && (D = D.slice(0, D.length - _.length)),
						(p = decodeURIComponent(D)),
						(g = !0);
				} else (p = decodeURIComponent(y.value)), (g = !0);
				g && ((r[h.value.substring(1)] = p), d++), v++;
				continue;
			}
			if (h.type === cl) {
				if (!y) {
					v++;
					continue;
				}
				if (y.value === '/') {
					v++;
					continue;
				}
				let p = '',
					g = !1;
				if (h.prefixSegment || h.suffixSegment) {
					const b = h.prefixSegment || '',
						_ = h.suffixSegment || '',
						A = y.value;
					if ((!b || A.startsWith(b)) && (!_ || A.endsWith(_))) {
						let D = A;
						b && D.startsWith(b) && (D = D.slice(b.length)),
							_ && D.endsWith(_) && (D = D.slice(0, D.length - _.length)),
							(p = decodeURIComponent(D)),
							(g = !0);
					}
				} else {
					let b = !0;
					for (let _ = v + 1; _ < u.length; _++) {
						const A = u[_];
						if (A?.type === Ze && A.value === y.value) {
							b = !1;
							break;
						}
						if (A?.type === ma || A?.type === sl) {
							l.length < u.length && (b = !1);
							break;
						}
					}
					b && ((p = decodeURIComponent(y.value)), (g = !0));
				}
				g && ((r[h.value.substring(1)] = p), d++), v++;
				continue;
			}
		}
		if (d < l.length && v >= u.length)
			return (
				(r['**'] = cn(l.slice(d).map((p) => p.value))),
				!!c && u[u.length - 1]?.value !== '/'
			);
		if (v < u.length && d >= l.length) {
			for (let p = v; p < u.length; p++) if (u[p]?.type !== cl) return !1;
			break;
		}
		break;
	}
	return !0;
}
const fg = 0.75,
	dg = 1,
	hg = 0.5,
	pg = 0.4,
	yg = 0.25,
	mg = 0.2,
	vg = 0.05,
	gg = 0.02,
	Sg = 0.01,
	sp = 2e-4,
	cp = 1e-4;
function op(l, u) {
	return l.prefixSegment && l.suffixSegment
		? u + vg + sp * l.prefixSegment.length + cp * l.suffixSegment.length
		: l.prefixSegment
			? u + gg + sp * l.prefixSegment.length
			: l.suffixSegment
				? u + Sg + cp * l.suffixSegment.length
				: u;
}
function bg(l) {
	const u = [];
	return (
		l.forEach((c, o) => {
			if (c.isRoot || !c.path) return;
			const d = Zc(c.fullPath);
			let v = Wu(d),
				y = 0;
			for (; v.length > y + 1 && v[y]?.value === '/'; ) y++;
			y > 0 && (v = v.slice(y));
			let h = 0,
				p = !1;
			const g = v.map((b, _) => {
				if (b.value === '/') return fg;
				if (b.type === Ze) return dg;
				let A;
				b.type === ma ? (A = hg) : b.type === cl ? ((A = pg), h++) : (A = yg);
				for (let D = _ + 1; D < v.length; D++) {
					const H = v[D];
					if (H.type === Ze && H.value !== '/') return (p = !0), op(b, A + mg);
				}
				return op(b, A);
			});
			u.push({
				child: c,
				trimmed: d,
				parsed: v,
				index: o,
				scores: g,
				optionalParamCount: h,
				hasStaticAfter: p,
			});
		}),
		u
			.sort((c, o) => {
				const d = Math.min(c.scores.length, o.scores.length);
				for (let v = 0; v < d; v++)
					if (c.scores[v] !== o.scores[v]) return o.scores[v] - c.scores[v];
				if (c.scores.length !== o.scores.length) {
					if (c.optionalParamCount !== o.optionalParamCount) {
						if (c.hasStaticAfter === o.hasStaticAfter)
							return c.optionalParamCount - o.optionalParamCount;
						if (c.hasStaticAfter && !o.hasStaticAfter) return -1;
						if (!c.hasStaticAfter && o.hasStaticAfter) return 1;
					}
					return o.scores.length - c.scores.length;
				}
				for (let v = 0; v < d; v++)
					if (c.parsed[v].value !== o.parsed[v].value)
						return c.parsed[v].value > o.parsed[v].value ? 1 : -1;
				return c.index - o.index;
			})
			.map((c, o) => ((c.child.rank = o), c.child))
	);
}
function _g({ routeTree: l, initRoute: u }) {
	const r = {},
		c = {},
		o = (v) => {
			v.forEach((y, h) => {
				u?.(y, h);
				const p = r[y.id];
				if (
					(oe(!p, `Duplicate routes found with id: ${String(y.id)}`),
					(r[y.id] = y),
					!y.isRoot && y.path)
				) {
					const b = Vn(y.fullPath);
					(!c[b] || y.fullPath.endsWith('/')) && (c[b] = y);
				}
				const g = y.children;
				g?.length && o(g);
			});
		};
	o([l]);
	const d = bg(Object.values(r));
	return { routesById: r, routesByPath: c, flatRoutes: d };
}
function Ue(l) {
	return !!l?.isNotFound;
}
function Rg() {
	try {
		if (typeof window < 'u' && typeof window.sessionStorage == 'object')
			return window.sessionStorage;
	} catch {}
}
const Pu = 'tsr-scroll-restoration-v1_3',
	Eg = (l, u) => {
		let r;
		return (...c) => {
			r ||
				(r = setTimeout(() => {
					l(...c), (r = null);
				}, u));
		};
	};
function Tg() {
	const l = Rg();
	if (!l) return null;
	const u = l.getItem(Pu);
	let r = u ? JSON.parse(u) : {};
	return {
		state: r,
		set: (c) => ((r = da(c, r) || r), l.setItem(Pu, JSON.stringify(r))),
	};
}
const ju = Tg(),
	jc = (l) => l.state.__TSR_key || l.href;
function Ag(l) {
	const u = [];
	let r;
	for (; (r = l.parentNode); )
		u.push(
			`${l.tagName}:nth-child(${Array.prototype.indexOf.call(r.children, l) + 1})`,
		),
			(l = r);
	return `${u.reverse().join(' > ')}`.toLowerCase();
}
let ku = !1;
function qp({
	storageKey: l,
	key: u,
	behavior: r,
	shouldScrollRestoration: c,
	scrollToTopSelectors: o,
	location: d,
}) {
	let v;
	try {
		v = JSON.parse(sessionStorage.getItem(l) || '{}');
	} catch (p) {
		console.error(p);
		return;
	}
	const y = u || window.history.state?.__TSR_key,
		h = v[y];
	ku = !0;
	t: {
		if (c && h && Object.keys(h).length > 0) {
			for (const b in h) {
				const _ = h[b];
				if (b === 'window')
					window.scrollTo({ top: _.scrollY, left: _.scrollX, behavior: r });
				else if (b) {
					const A = document.querySelector(b);
					A && ((A.scrollLeft = _.scrollX), (A.scrollTop = _.scrollY));
				}
			}
			break t;
		}
		const p = (d ?? window.location).hash.split('#', 2)[1];
		if (p) {
			const b = window.history.state?.__hashScrollIntoViewOptions ?? !0;
			if (b) {
				const _ = document.getElementById(p);
				_ && _.scrollIntoView(b);
			}
			break t;
		}
		const g = { top: 0, left: 0, behavior: r };
		if ((window.scrollTo(g), o))
			for (const b of o) {
				if (b === 'window') continue;
				const _ = typeof b == 'function' ? b() : document.querySelector(b);
				_ && _.scrollTo(g);
			}
	}
	ku = !1;
}
function Mg(l, u) {
	if (
		(!ju && !l.isServer) ||
		((l.options.scrollRestoration ?? !1) && (l.isScrollRestoring = !0),
		l.isServer || l.isScrollRestorationSetup || !ju)
	)
		return;
	(l.isScrollRestorationSetup = !0), (ku = !1);
	const c = l.options.getScrollRestorationKey || jc;
	window.history.scrollRestoration = 'manual';
	const o = (d) => {
		if (ku || !l.isScrollRestoring) return;
		let v = '';
		if (d.target === document || d.target === window) v = 'window';
		else {
			const h = d.target.getAttribute('data-scroll-restoration-id');
			h ? (v = `[data-scroll-restoration-id="${h}"]`) : (v = Ag(d.target));
		}
		const y = c(l.state.location);
		ju.set((h) => {
			const p = (h[y] ||= {}),
				g = (p[v] ||= {});
			if (v === 'window')
				(g.scrollX = window.scrollX || 0), (g.scrollY = window.scrollY || 0);
			else if (v) {
				const b = document.querySelector(v);
				b && ((g.scrollX = b.scrollLeft || 0), (g.scrollY = b.scrollTop || 0));
			}
			return h;
		});
	};
	typeof document < 'u' && document.addEventListener('scroll', Eg(o, 100), !0),
		l.subscribe('onRendered', (d) => {
			const v = c(d.toLocation);
			if (!l.resetNextScroll) {
				l.resetNextScroll = !0;
				return;
			}
			(typeof l.options.scrollRestoration == 'function' &&
				!l.options.scrollRestoration({ location: l.latestLocation })) ||
				(qp({
					storageKey: Pu,
					key: v,
					behavior: l.options.scrollRestorationBehavior,
					shouldScrollRestoration: l.isScrollRestoring,
					scrollToTopSelectors: l.options.scrollToTopSelectors,
					location: l.history.location,
				}),
				l.isScrollRestoring && ju.set((y) => ((y[v] ||= {}), y)));
		});
}
function Og(l) {
	if (typeof document < 'u' && document.querySelector) {
		const u = l.state.location.state.__hashScrollIntoViewOptions ?? !0;
		if (u && l.state.location.hash !== '') {
			const r = document.getElementById(l.state.location.hash);
			r && r.scrollIntoView(u);
		}
	}
}
function Vp(l, u = String) {
	const r = new URLSearchParams();
	for (const c in l) {
		const o = l[c];
		o !== void 0 && r.set(c, u(o));
	}
	return r.toString();
}
function Ec(l) {
	return l
		? l === 'false'
			? !1
			: l === 'true'
				? !0
				: +l * 0 === 0 && +l + '' === l
					? +l
					: l
		: '';
}
function xg(l) {
	const u = new URLSearchParams(l),
		r = {};
	for (const [c, o] of u.entries()) {
		const d = r[c];
		d == null
			? (r[c] = Ec(o))
			: Array.isArray(d)
				? d.push(Ec(o))
				: (r[c] = [d, Ec(o)]);
	}
	return r;
}
const zg = Dg(JSON.parse),
	wg = Cg(JSON.stringify, JSON.parse);
function Dg(l) {
	return (u) => {
		u[0] === '?' && (u = u.substring(1));
		const r = xg(u);
		for (const c in r) {
			const o = r[c];
			if (typeof o == 'string')
				try {
					r[c] = l(o);
				} catch {}
		}
		return r;
	};
}
function Cg(l, u) {
	const r = typeof u == 'function';
	function c(o) {
		if (typeof o == 'object' && o !== null)
			try {
				return l(o);
			} catch {}
		else if (r && typeof o == 'string')
			try {
				return u(o), l(o);
			} catch {}
		return o;
	}
	return (o) => {
		const d = Vp(o, c);
		return d ? `?${d}` : '';
	};
}
function Yp(l) {
	if (
		((l.statusCode = l.statusCode || l.code || 307),
		!l.reloadDocument && typeof l.href == 'string')
	)
		try {
			new URL(l.href), (l.reloadDocument = !0);
		} catch {}
	const u = new Headers(l.headers);
	l.href && u.get('Location') === null && u.set('Location', l.href);
	const r = new Response(null, { status: l.statusCode, headers: u });
	if (((r.options = l), l.throw)) throw r;
	return r;
}
function je(l) {
	return l instanceof Response && !!l.options;
}
function Ug(l) {
	if (l !== null && typeof l == 'object' && l.isSerializedRedirect)
		return Yp(l);
}
function Ng(l) {
	const u = new Map();
	let r, c;
	const o = (d) => {
		d.next &&
			(d.prev
				? ((d.prev.next = d.next),
					(d.next.prev = d.prev),
					(d.next = void 0),
					c && ((c.next = d), (d.prev = c)))
				: ((d.next.prev = void 0),
					(r = d.next),
					(d.next = void 0),
					c && ((d.prev = c), (c.next = d))),
			(c = d));
	};
	return {
		get(d) {
			const v = u.get(d);
			if (v) return o(v), v.value;
		},
		set(d, v) {
			if (u.size >= l && r) {
				const h = r;
				u.delete(h.key),
					h.next && ((r = h.next), (h.next.prev = void 0)),
					h === c && (c = void 0);
			}
			const y = u.get(d);
			if (y) (y.value = v), o(y);
			else {
				const h = { key: d, value: v, prev: c };
				c && (c.next = h), (c = h), r || (r = h), u.set(d, h);
			}
		},
	};
}
const Xu = (l) => {
		if (!l.rendered) return (l.rendered = !0), l.onReady?.();
	},
	Iu = (l, u) =>
		!!(l.preload && !l.router.state.matches.some((r) => r.id === u)),
	Gp = (l, u) => {
		const r = l.router.routesById[u.routeId ?? ''] ?? l.router.routeTree;
		!r.options.notFoundComponent &&
			l.router.options?.defaultNotFoundComponent &&
			(r.options.notFoundComponent = l.router.options.defaultNotFoundComponent),
			oe(r.options.notFoundComponent);
		const c = l.matches.find((o) => o.routeId === r.id);
		oe(c, 'Could not find match for route: ' + r.id),
			l.updateMatch(c.id, (o) => ({
				...o,
				status: 'notFound',
				error: u,
				isFetching: !1,
			})),
			u.routerCode === 'BEFORE_LOAD' &&
				r.parentRoute &&
				((u.routeId = r.parentRoute.id), Gp(l, u));
	},
	Hn = (l, u, r) => {
		if (!(!je(r) && !Ue(r))) {
			if (je(r) && r.redirectHandled && !r.options.reloadDocument) throw r;
			if (u) {
				u._nonReactive.beforeLoadPromise?.resolve(),
					u._nonReactive.loaderPromise?.resolve(),
					(u._nonReactive.beforeLoadPromise = void 0),
					(u._nonReactive.loaderPromise = void 0);
				const c = je(r) ? 'redirected' : 'notFound';
				l.updateMatch(u.id, (o) => ({
					...o,
					status: c,
					isFetching: !1,
					error: r,
				})),
					Ue(r) && !r.routeId && (r.routeId = u.routeId),
					u._nonReactive.loadPromise?.resolve();
			}
			throw je(r)
				? ((l.rendered = !0),
					(r.options._fromLocation = l.location),
					(r.redirectHandled = !0),
					(r = l.router.resolveRedirect(r)),
					r)
				: (Gp(l, r), r);
		}
	},
	Xp = (l, u) => {
		const r = l.router.getMatch(u);
		return !!(
			(!l.router.isServer && r._nonReactive.dehydrated) ||
			(l.router.isServer && r.ssr === !1)
		);
	},
	oi = (l, u, r, c) => {
		const { id: o, routeId: d } = l.matches[u],
			v = l.router.looseRoutesById[d];
		if (r instanceof Promise) throw r;
		(r.routerCode = c),
			(l.firstBadMatchIndex ??= u),
			Hn(l, l.router.getMatch(o), r);
		try {
			v.options.onError?.(r);
		} catch (y) {
			(r = y), Hn(l, l.router.getMatch(o), r);
		}
		l.updateMatch(
			o,
			(y) => (
				y._nonReactive.beforeLoadPromise?.resolve(),
				(y._nonReactive.beforeLoadPromise = void 0),
				y._nonReactive.loadPromise?.resolve(),
				{
					...y,
					error: r,
					status: 'error',
					isFetching: !1,
					updatedAt: Date.now(),
					abortController: new AbortController(),
				}
			),
		);
	},
	Lg = (l, u, r, c) => {
		const o = l.router.getMatch(u),
			d = l.matches[r - 1]?.id,
			v = d ? l.router.getMatch(d) : void 0;
		if (l.router.isShell()) {
			o.ssr = u === _e;
			return;
		}
		if (v?.ssr === !1) {
			o.ssr = !1;
			return;
		}
		const y = (A) => (A === !0 && v?.ssr === 'data-only' ? 'data-only' : A),
			h = l.router.options.defaultSsr ?? !0;
		if (c.options.ssr === void 0) {
			o.ssr = y(h);
			return;
		}
		if (typeof c.options.ssr != 'function') {
			o.ssr = y(c.options.ssr);
			return;
		}
		const { search: p, params: g } = o,
			b = {
				search: qu(p, o.searchError),
				params: qu(g, o.paramsError),
				location: l.location,
				matches: l.matches.map((A) => ({
					index: A.index,
					pathname: A.pathname,
					fullPath: A.fullPath,
					staticData: A.staticData,
					id: A.id,
					routeId: A.routeId,
					search: qu(A.search, A.searchError),
					params: qu(A.params, A.paramsError),
					ssr: A.ssr,
				})),
			},
			_ = c.options.ssr(b);
		if (qn(_))
			return _.then((A) => {
				o.ssr = y(A ?? h);
			});
		o.ssr = y(_ ?? h);
	},
	Qp = (l, u, r, c) => {
		if (c._nonReactive.pendingTimeout !== void 0) return;
		const o = r.options.pendingMs ?? l.router.options.defaultPendingMs;
		if (
			!!(
				l.onReady &&
				!l.router.isServer &&
				!Iu(l, u) &&
				(r.options.loader || r.options.beforeLoad || Jp(r)) &&
				typeof o == 'number' &&
				o !== 1 / 0 &&
				(r.options.pendingComponent ??
					l.router.options?.defaultPendingComponent)
			)
		) {
			const v = setTimeout(() => {
				Xu(l);
			}, o);
			c._nonReactive.pendingTimeout = v;
		}
	},
	Bg = (l, u, r) => {
		const c = l.router.getMatch(u);
		if (!c._nonReactive.beforeLoadPromise && !c._nonReactive.loaderPromise)
			return;
		Qp(l, u, r, c);
		const o = () => {
			const d = l.router.getMatch(u);
			d.preload &&
				(d.status === 'redirected' || d.status === 'notFound') &&
				Hn(l, d, d.error);
		};
		return c._nonReactive.beforeLoadPromise
			? c._nonReactive.beforeLoadPromise.then(o)
			: o();
	},
	Hg = (l, u, r, c) => {
		const o = l.router.getMatch(u),
			d = o._nonReactive.loadPromise;
		o._nonReactive.loadPromise = ya(() => {
			d?.resolve();
		});
		const { paramsError: v, searchError: y } = o;
		v && oi(l, r, v, 'PARSE_PARAMS'),
			y && oi(l, r, y, 'VALIDATE_SEARCH'),
			Qp(l, u, c, o);
		const h = new AbortController(),
			p = l.matches[r - 1]?.id,
			_ = {
				...((p ? l.router.getMatch(p) : void 0)?.context ??
					l.router.options.context ??
					void 0),
				...o.__routeContext,
			};
		let A = !1;
		const D = () => {
				A ||
					((A = !0),
					l.updateMatch(u, (Z) => ({
						...Z,
						isFetching: 'beforeLoad',
						fetchCount: Z.fetchCount + 1,
						abortController: h,
						context: _,
					})));
			},
			H = () => {
				o._nonReactive.beforeLoadPromise?.resolve(),
					(o._nonReactive.beforeLoadPromise = void 0),
					l.updateMatch(u, (Z) => ({ ...Z, isFetching: !1 }));
			};
		if (!c.options.beforeLoad) {
			il(() => {
				D(), H();
			});
			return;
		}
		o._nonReactive.beforeLoadPromise = ya();
		const { search: Y, params: F, cause: it } = o,
			K = Iu(l, u),
			lt = {
				search: Y,
				abortController: h,
				params: F,
				preload: K,
				context: _,
				location: l.location,
				navigate: (Z) => l.router.navigate({ ...Z, _fromLocation: l.location }),
				buildLocation: l.router.buildLocation,
				cause: K ? 'preload' : it,
				matches: l.matches,
				...l.router.options.additionalContext,
			},
			P = (Z) => {
				if (Z === void 0) {
					il(() => {
						D(), H();
					});
					return;
				}
				(je(Z) || Ue(Z)) && (D(), oi(l, r, Z, 'BEFORE_LOAD')),
					il(() => {
						D(),
							l.updateMatch(u, (Q) => ({
								...Q,
								__beforeLoadContext: Z,
								context: { ...Q.context, ...Z },
							})),
							H();
					});
			};
		let W;
		try {
			if (((W = c.options.beforeLoad(lt)), qn(W)))
				return (
					D(),
					W.catch((Z) => {
						oi(l, r, Z, 'BEFORE_LOAD');
					}).then(P)
				);
		} catch (Z) {
			D(), oi(l, r, Z, 'BEFORE_LOAD');
		}
		P(W);
	},
	jg = (l, u) => {
		const { id: r, routeId: c } = l.matches[u],
			o = l.router.looseRoutesById[c],
			d = () => {
				if (l.router.isServer) {
					const h = Lg(l, r, u, o);
					if (qn(h)) return h.then(y);
				}
				return y();
			},
			v = () => Hg(l, r, u, o),
			y = () => {
				if (Xp(l, r)) return;
				const h = Bg(l, r, o);
				return qn(h) ? h.then(v) : v();
			};
		return d();
	},
	mi = (l, u, r) => {
		const c = l.router.getMatch(u);
		if (!c || (!r.options.head && !r.options.scripts && !r.options.headers))
			return;
		const o = {
			matches: l.matches,
			match: c,
			params: c.params,
			loaderData: c.loaderData,
		};
		return Promise.all([
			r.options.head?.(o),
			r.options.scripts?.(o),
			r.options.headers?.(o),
		]).then(([d, v, y]) => {
			const h = d?.meta,
				p = d?.links,
				g = d?.scripts,
				b = d?.styles;
			return {
				meta: h,
				links: p,
				headScripts: g,
				headers: y,
				scripts: v,
				styles: b,
			};
		});
	},
	Zp = (l, u, r, c) => {
		const o = l.matchPromises[r - 1],
			{
				params: d,
				loaderDeps: v,
				abortController: y,
				context: h,
				cause: p,
			} = l.router.getMatch(u),
			g = Iu(l, u);
		return {
			params: d,
			deps: v,
			preload: !!g,
			parentMatchPromise: o,
			abortController: y,
			context: h,
			location: l.location,
			navigate: (b) => l.router.navigate({ ...b, _fromLocation: l.location }),
			cause: g ? 'preload' : p,
			route: c,
			...l.router.options.additionalContext,
		};
	},
	fp = async (l, u, r, c) => {
		try {
			const o = l.router.getMatch(u);
			try {
				(!l.router.isServer || o.ssr === !0) && Kp(c);
				const d = c.options.loader?.(Zp(l, u, r, c)),
					v = c.options.loader && qn(d);
				if (
					(!!(
						v ||
						c._lazyPromise ||
						c._componentsPromise ||
						c.options.head ||
						c.options.scripts ||
						c.options.headers ||
						o._nonReactive.minPendingPromise
					) && l.updateMatch(u, (b) => ({ ...b, isFetching: 'loader' })),
					c.options.loader)
				) {
					const b = v ? await d : d;
					Hn(l, l.router.getMatch(u), b),
						b !== void 0 && l.updateMatch(u, (_) => ({ ..._, loaderData: b }));
				}
				c._lazyPromise && (await c._lazyPromise);
				const h = mi(l, u, c),
					p = h ? await h : void 0,
					g = o._nonReactive.minPendingPromise;
				g && (await g),
					c._componentsPromise && (await c._componentsPromise),
					l.updateMatch(u, (b) => ({
						...b,
						error: void 0,
						status: 'success',
						isFetching: !1,
						updatedAt: Date.now(),
						...p,
					}));
			} catch (d) {
				let v = d;
				const y = o._nonReactive.minPendingPromise;
				y && (await y), Hn(l, l.router.getMatch(u), d);
				try {
					c.options.onError?.(d);
				} catch (g) {
					(v = g), Hn(l, l.router.getMatch(u), g);
				}
				const h = mi(l, u, c),
					p = h ? await h : void 0;
				l.updateMatch(u, (g) => ({
					...g,
					error: v,
					status: 'error',
					isFetching: !1,
					...p,
				}));
			}
		} catch (o) {
			const d = l.router.getMatch(u);
			if (d) {
				const v = mi(l, u, c);
				if (v) {
					const y = await v;
					l.updateMatch(u, (h) => ({ ...h, ...y }));
				}
				d._nonReactive.loaderPromise = void 0;
			}
			Hn(l, d, o);
		}
	},
	qg = async (l, u) => {
		const { id: r, routeId: c } = l.matches[u];
		let o = !1,
			d = !1;
		const v = l.router.looseRoutesById[c];
		if (Xp(l, r)) {
			if (l.router.isServer) {
				const p = mi(l, r, v);
				if (p) {
					const g = await p;
					l.updateMatch(r, (b) => ({ ...b, ...g }));
				}
				return l.router.getMatch(r);
			}
		} else {
			const p = l.router.getMatch(r);
			if (p._nonReactive.loaderPromise) {
				if (p.status === 'success' && !l.sync && !p.preload) return p;
				await p._nonReactive.loaderPromise;
				const g = l.router.getMatch(r);
				g.error && Hn(l, g, g.error);
			} else {
				const g = Date.now() - p.updatedAt,
					b = Iu(l, r),
					_ = b
						? (v.options.preloadStaleTime ??
							l.router.options.defaultPreloadStaleTime ??
							3e4)
						: (v.options.staleTime ?? l.router.options.defaultStaleTime ?? 0),
					A = v.options.shouldReload,
					D = typeof A == 'function' ? A(Zp(l, r, u, v)) : A,
					H = !!b && !l.router.state.matches.some((K) => K.id === r),
					Y = l.router.getMatch(r);
				(Y._nonReactive.loaderPromise = ya()),
					H !== Y.preload && l.updateMatch(r, (K) => ({ ...K, preload: H }));
				const { status: F, invalid: it } = Y;
				if (
					((o = F === 'success' && (it || (D ?? g > _))),
					!(b && v.options.preload === !1))
				)
					if (o && !l.sync)
						(d = !0),
							(async () => {
								try {
									await fp(l, r, u, v);
									const K = l.router.getMatch(r);
									K._nonReactive.loaderPromise?.resolve(),
										K._nonReactive.loadPromise?.resolve(),
										(K._nonReactive.loaderPromise = void 0);
								} catch (K) {
									je(K) && (await l.router.navigate(K.options));
								}
							})();
					else if (F !== 'success' || (o && l.sync)) await fp(l, r, u, v);
					else {
						const K = mi(l, r, v);
						if (K) {
							const lt = await K;
							l.updateMatch(r, (P) => ({ ...P, ...lt }));
						}
					}
			}
		}
		const y = l.router.getMatch(r);
		d ||
			(y._nonReactive.loaderPromise?.resolve(),
			y._nonReactive.loadPromise?.resolve()),
			clearTimeout(y._nonReactive.pendingTimeout),
			(y._nonReactive.pendingTimeout = void 0),
			d || (y._nonReactive.loaderPromise = void 0),
			(y._nonReactive.dehydrated = void 0);
		const h = d ? y.isFetching : !1;
		return h !== y.isFetching || y.invalid !== !1
			? (l.updateMatch(r, (p) => ({ ...p, isFetching: h, invalid: !1 })),
				l.router.getMatch(r))
			: y;
	};
async function dp(l) {
	const u = Object.assign(l, { matchPromises: [] });
	!u.router.isServer &&
		u.router.state.matches.some((r) => r._forcePending) &&
		Xu(u);
	try {
		for (let o = 0; o < u.matches.length; o++) {
			const d = jg(u, o);
			qn(d) && (await d);
		}
		const r = u.firstBadMatchIndex ?? u.matches.length;
		for (let o = 0; o < r; o++) u.matchPromises.push(qg(u, o));
		await Promise.all(u.matchPromises);
		const c = Xu(u);
		qn(c) && (await c);
	} catch (r) {
		if (Ue(r) && !u.preload) {
			const c = Xu(u);
			throw (qn(c) && (await c), r);
		}
		if (je(r)) throw r;
	}
	return u.matches;
}
async function Kp(l) {
	if (
		(!l._lazyLoaded &&
			l._lazyPromise === void 0 &&
			(l.lazyFn
				? (l._lazyPromise = l.lazyFn().then((u) => {
						const { id: r, ...c } = u.options;
						Object.assign(l.options, c),
							(l._lazyLoaded = !0),
							(l._lazyPromise = void 0);
					}))
				: (l._lazyLoaded = !0)),
		!l._componentsLoaded && l._componentsPromise === void 0)
	) {
		const u = () => {
			const r = [];
			for (const c of Pp) {
				const o = l.options[c]?.preload;
				o && r.push(o());
			}
			if (r.length)
				return Promise.all(r).then(() => {
					(l._componentsLoaded = !0), (l._componentsPromise = void 0);
				});
			(l._componentsLoaded = !0), (l._componentsPromise = void 0);
		};
		l._componentsPromise = l._lazyPromise ? l._lazyPromise.then(u) : u();
	}
	return l._componentsPromise;
}
function qu(l, u) {
	return u ? { status: 'error', error: u } : { status: 'success', value: l };
}
function Jp(l) {
	for (const u of Pp) if (l.options[u]?.preload) return !0;
	return !1;
}
const Pp = [
	'component',
	'errorComponent',
	'pendingComponent',
	'notFoundComponent',
];
function Vg(l) {
	return {
		input: ({ url: u }) => {
			for (const r of l) u = kp(r, u);
			return u;
		},
		output: ({ url: u }) => {
			for (let r = l.length - 1; r >= 0; r--) u = $p(l[r], u);
			return u;
		},
	};
}
function Yg(l) {
	const u = Bc(l.basepath),
		r = new RegExp(`^/${u}/`, l.caseSensitive ? '' : 'i');
	return {
		input: ({ url: c }) => ((c.pathname = c.pathname.replace(r, '/')), c),
		output: ({ url: c }) => ((c.pathname = cn(['/', u, c.pathname])), c),
	};
}
function kp(l, u) {
	const r = l?.input?.({ url: u });
	if (r) {
		if (typeof r == 'string') return new URL(r);
		if (r instanceof URL) return r;
	}
	return u;
}
function $p(l, u) {
	const r = l?.output?.({ url: u });
	if (r) {
		if (typeof r == 'string') return new URL(r);
		if (r instanceof URL) return r;
	}
	return u;
}
function Gg(l) {
	return l instanceof Error
		? { name: l.name, message: l.message }
		: { data: l };
}
function pa(l) {
	const u = l.resolvedLocation,
		r = l.location,
		c = u?.pathname !== r.pathname,
		o = u?.href !== r.href,
		d = u?.hash !== r.hash;
	return {
		fromLocation: u,
		toLocation: r,
		pathChanged: c,
		hrefChanged: o,
		hashChanged: d,
	};
}
class Xg {
	constructor(u) {
		(this.tempLocationKey = `${Math.round(Math.random() * 1e7)}`),
			(this.resetNextScroll = !0),
			(this.shouldViewTransition = void 0),
			(this.isViewTransitionTypesSupported = void 0),
			(this.subscribers = new Set()),
			(this.isScrollRestoring = !1),
			(this.isScrollRestorationSetup = !1),
			(this.startTransition = (r) => r()),
			(this.update = (r) => {
				if (
					(r.notFoundRoute &&
						console.warn(
							'The notFoundRoute API is deprecated and will be removed in the next major version. See https://tanstack.com/router/v1/docs/framework/react/guide/not-found-errors#migrating-from-notfoundroute for more info.',
						),
					(this.options = { ...this.options, ...r }),
					(this.isServer = this.options.isServer ?? typeof document > 'u'),
					(this.pathParamsDecodeCharMap = this.options
						.pathParamsAllowedCharacters
						? new Map(
								this.options.pathParamsAllowedCharacters.map((c) => [
									encodeURIComponent(c),
									c,
								]),
							)
						: void 0),
					(!this.history ||
						(this.options.history && this.options.history !== this.history)) &&
						(this.options.history
							? (this.history = this.options.history)
							: this.isServer || (this.history = Pv())),
					this.options.basepath)
				) {
					const c = Yg({ basepath: this.options.basepath });
					this.options.rewrite
						? (this.rewrite = Vg([c, this.options.rewrite]))
						: (this.rewrite = c);
				} else this.rewrite = this.options.rewrite;
				(this.origin = this.options.origin),
					this.origin ||
						(this.isServer
							? (this.origin = 'http://localhost')
							: (this.origin = window.origin)),
					this.history && this.updateLatestLocation(),
					this.options.routeTree !== this.routeTree &&
						((this.routeTree = this.options.routeTree), this.buildRouteTree()),
					!this.__store &&
						this.latestLocation &&
						((this.__store = new Nc(Zg(this.latestLocation), {
							onUpdate: () => {
								this.__store.state = {
									...this.state,
									cachedMatches: this.state.cachedMatches.filter(
										(c) => !['redirected'].includes(c.status),
									),
								};
							},
						})),
						Mg(this)),
					typeof window < 'u' &&
						'CSS' in window &&
						typeof window.CSS?.supports == 'function' &&
						(this.isViewTransitionTypesSupported = window.CSS.supports(
							'selector(:active-view-transition-type(a)',
						));
			}),
			(this.updateLatestLocation = () => {
				this.latestLocation = this.parseLocation(
					this.history.location,
					this.latestLocation,
				);
			}),
			(this.buildRouteTree = () => {
				const {
					routesById: r,
					routesByPath: c,
					flatRoutes: o,
				} = _g({
					routeTree: this.routeTree,
					initRoute: (v, y) => {
						v.init({ originalIndex: y });
					},
				});
				(this.routesById = r), (this.routesByPath = c), (this.flatRoutes = o);
				const d = this.options.notFoundRoute;
				d &&
					(d.init({ originalIndex: 99999999999 }), (this.routesById[d.id] = d));
			}),
			(this.subscribe = (r, c) => {
				const o = { eventType: r, fn: c };
				return (
					this.subscribers.add(o),
					() => {
						this.subscribers.delete(o);
					}
				);
			}),
			(this.emit = (r) => {
				this.subscribers.forEach((c) => {
					c.eventType === r.type && c.fn(r);
				});
			}),
			(this.parseLocation = (r, c) => {
				const o = ({ href: h, state: p }) => {
						const g = new URL(h, this.origin),
							b = kp(this.rewrite, g),
							_ = this.options.parseSearch(b.search),
							A = this.options.stringifySearch(_);
						b.search = A;
						const D = b.href.replace(b.origin, ''),
							{ pathname: H, hash: Y } = b;
						return {
							href: D,
							publicHref: h,
							url: b.href,
							pathname: H,
							searchStr: A,
							search: Ce(c?.search, _),
							hash: Y.split('#').reverse()[0] ?? '',
							state: Ce(c?.state, p),
						};
					},
					d = o(r),
					{ __tempLocation: v, __tempKey: y } = d.state;
				if (v && (!y || y === this.tempLocationKey)) {
					const h = o(v);
					return (
						(h.state.key = d.state.key),
						(h.state.__TSR_key = d.state.__TSR_key),
						delete h.state.__tempLocation,
						{ ...h, maskedLocation: d }
					);
				}
				return d;
			}),
			(this.resolvePathWithBase = (r, c) =>
				eg({
					base: r,
					to: Qc(c),
					trailingSlash: this.options.trailingSlash,
					parseCache: this.parsePathnameCache,
				})),
			(this.matchRoutes = (r, c, o) =>
				typeof r == 'string'
					? this.matchRoutesInternal({ pathname: r, search: c }, o)
					: this.matchRoutesInternal(r, c)),
			(this.parsePathnameCache = Ng(1e3)),
			(this.getMatchedRoutes = (r, c) =>
				Kg({
					pathname: r,
					routePathname: c,
					caseSensitive: this.options.caseSensitive,
					routesByPath: this.routesByPath,
					routesById: this.routesById,
					flatRoutes: this.flatRoutes,
					parseCache: this.parsePathnameCache,
				})),
			(this.cancelMatch = (r) => {
				const c = this.getMatch(r);
				c &&
					(c.abortController.abort(),
					clearTimeout(c._nonReactive.pendingTimeout),
					(c._nonReactive.pendingTimeout = void 0));
			}),
			(this.cancelMatches = () => {
				this.state.pendingMatches?.forEach((r) => {
					this.cancelMatch(r.id);
				});
			}),
			(this.buildLocation = (r) => {
				const c = (d = {}) => {
						const v = d._fromLocation || this.latestLocation,
							y = this.matchRoutes(v, { _buildLocation: !0 }),
							h = Lc(y);
						d.from;
						const p =
								d.unsafeRelative === 'path'
									? v.pathname
									: (d.from ?? h.fullPath),
							g = this.resolvePathWithBase(p, '.'),
							b = h.search,
							_ = { ...h.params },
							A = d.to
								? this.resolvePathWithBase(g, `${d.to}`)
								: this.resolvePathWithBase(g, '.'),
							D =
								d.params === !1 || d.params === null
									? {}
									: (d.params ?? !0) === !0
										? _
										: Object.assign(_, da(d.params, _)),
							H = Hu({
								path: A,
								params: D,
								parseCache: this.parsePathnameCache,
							}).interpolatedPath,
							Y = this.matchRoutes(H, void 0, { _buildLocation: !0 }).map(
								(ht) => this.looseRoutesById[ht.routeId],
							);
						if (Object.keys(D).length > 0)
							for (const ht of Y) {
								const St =
									ht.options.params?.stringify ?? ht.options.stringifyParams;
								St && Object.assign(D, St(D));
							}
						const F = Hu({
							path: A,
							params: D,
							leaveWildcards: !1,
							leaveParams: r.leaveParams,
							decodeCharMap: this.pathParamsDecodeCharMap,
							parseCache: this.parsePathnameCache,
						}).interpolatedPath;
						let it = b;
						if (r._includeValidateSearch && this.options.search?.strict) {
							const ht = {};
							Y.forEach((St) => {
								if (St.options.validateSearch)
									try {
										Object.assign(
											ht,
											qc(St.options.validateSearch, { ...ht, ...it }),
										);
									} catch {}
							}),
								(it = ht);
						}
						(it = Jg({
							search: it,
							dest: d,
							destRoutes: Y,
							_includeValidateSearch: r._includeValidateSearch,
						})),
							(it = Ce(b, it));
						const K = this.options.stringifySearch(it),
							lt =
								d.hash === !0 ? v.hash : d.hash ? da(d.hash, v.hash) : void 0,
							P = lt ? `#${lt}` : '';
						let W =
							d.state === !0 ? v.state : d.state ? da(d.state, v.state) : {};
						W = Ce(v.state, W);
						const Z = `${F}${K}${P}`,
							Q = new URL(Z, this.origin),
							ut = $p(this.rewrite, Q);
						return {
							publicHref: ut.pathname + ut.search + ut.hash,
							href: Z,
							url: ut.href,
							pathname: F,
							search: it,
							searchStr: K,
							state: W,
							hash: lt ?? '',
							unmaskOnReload: d.unmaskOnReload,
						};
					},
					o = (d = {}, v) => {
						const y = c(d);
						let h = v ? c(v) : void 0;
						if (!h) {
							let p = {};
							const g = this.options.routeMasks?.find((b) => {
								const _ = Hc(
									y.pathname,
									{ to: b.from, caseSensitive: !1, fuzzy: !1 },
									this.parsePathnameCache,
								);
								return _ ? ((p = _), !0) : !1;
							});
							if (g) {
								const { from: b, ..._ } = g;
								(v = { from: r.from, ..._, params: p }), (h = c(v));
							}
						}
						return h && (y.maskedLocation = h), y;
					};
				return r.mask ? o(r, { from: r.from, ...r.mask }) : o(r);
			}),
			(this.commitLocation = ({
				viewTransition: r,
				ignoreBlocker: c,
				...o
			}) => {
				const d = () => {
						const h = [
							'key',
							'__TSR_key',
							'__TSR_index',
							'__hashScrollIntoViewOptions',
						];
						h.forEach((g) => {
							o.state[g] = this.latestLocation.state[g];
						});
						const p = ha(o.state, this.latestLocation.state);
						return (
							h.forEach((g) => {
								delete o.state[g];
							}),
							p
						);
					},
					v = Vn(this.latestLocation.href) === Vn(o.href),
					y = this.commitLocationPromise;
				if (
					((this.commitLocationPromise = ya(() => {
						y?.resolve();
					})),
					v && d())
				)
					this.load();
				else {
					let { maskedLocation: h, hashScrollIntoView: p, ...g } = o;
					h &&
						((g = {
							...h,
							state: {
								...h.state,
								__tempKey: void 0,
								__tempLocation: {
									...g,
									search: g.searchStr,
									state: {
										...g.state,
										__tempKey: void 0,
										__tempLocation: void 0,
										__TSR_key: void 0,
										key: void 0,
									},
								},
							},
						}),
						(g.unmaskOnReload ?? this.options.unmaskOnReload ?? !1) &&
							(g.state.__tempKey = this.tempLocationKey)),
						(g.state.__hashScrollIntoViewOptions =
							p ?? this.options.defaultHashScrollIntoView ?? !0),
						(this.shouldViewTransition = r),
						this.history[o.replace ? 'replace' : 'push'](
							g.publicHref,
							g.state,
							{ ignoreBlocker: c },
						);
				}
				return (
					(this.resetNextScroll = o.resetScroll ?? !0),
					this.history.subscribers.size || this.load(),
					this.commitLocationPromise
				);
			}),
			(this.buildAndCommitLocation = ({
				replace: r,
				resetScroll: c,
				hashScrollIntoView: o,
				viewTransition: d,
				ignoreBlocker: v,
				href: y,
				...h
			} = {}) => {
				if (y) {
					const g = this.history.location.state.__TSR_index,
						b = Ku(y, { __TSR_index: r ? g : g + 1 });
					(h.to = b.pathname),
						(h.search = this.options.parseSearch(b.search)),
						(h.hash = b.hash.slice(1));
				}
				const p = this.buildLocation({ ...h, _includeValidateSearch: !0 });
				return this.commitLocation({
					...p,
					viewTransition: d,
					replace: r,
					resetScroll: c,
					hashScrollIntoView: o,
					ignoreBlocker: v,
				});
			}),
			(this.navigate = ({ to: r, reloadDocument: c, href: o, ...d }) => {
				if (!c && o)
					try {
						new URL(`${o}`), (c = !0);
					} catch {}
				return c
					? (o || (o = this.buildLocation({ to: r, ...d }).href),
						d.replace ? window.location.replace(o) : (window.location.href = o),
						Promise.resolve())
					: this.buildAndCommitLocation({
							...d,
							href: o,
							to: r,
							_isNavigate: !0,
						});
			}),
			(this.beforeLoad = () => {
				if (
					(this.cancelMatches(), this.updateLatestLocation(), this.isServer)
				) {
					const c = this.buildLocation({
							to: this.latestLocation.pathname,
							search: !0,
							params: !0,
							hash: !0,
							state: !0,
							_includeValidateSearch: !0,
						}),
						o = (d) => {
							try {
								return encodeURI(decodeURI(d));
							} catch {
								return d;
							}
						};
					if (Bc(o(this.latestLocation.href)) !== Bc(o(c.href)))
						throw Yp({ href: c.href });
				}
				const r = this.matchRoutes(this.latestLocation);
				this.__store.setState((c) => ({
					...c,
					status: 'pending',
					statusCode: 200,
					isLoading: !0,
					location: this.latestLocation,
					pendingMatches: r,
					cachedMatches: c.cachedMatches.filter(
						(o) => !r.some((d) => d.id === o.id),
					),
				}));
			}),
			(this.load = async (r) => {
				let c, o, d;
				for (
					d = new Promise((v) => {
						this.startTransition(async () => {
							try {
								this.beforeLoad();
								const y = this.latestLocation,
									h = this.state.resolvedLocation;
								this.state.redirect ||
									this.emit({
										type: 'onBeforeNavigate',
										...pa({ resolvedLocation: h, location: y }),
									}),
									this.emit({
										type: 'onBeforeLoad',
										...pa({ resolvedLocation: h, location: y }),
									}),
									await dp({
										router: this,
										sync: r?.sync,
										matches: this.state.pendingMatches,
										location: y,
										updateMatch: this.updateMatch,
										onReady: async () => {
											this.startViewTransition(async () => {
												let p, g, b;
												il(() => {
													this.__store.setState((_) => {
														const A = _.matches,
															D = _.pendingMatches || _.matches;
														return (
															(p = A.filter(
																(H) => !D.some((Y) => Y.id === H.id),
															)),
															(g = D.filter(
																(H) => !A.some((Y) => Y.id === H.id),
															)),
															(b = A.filter((H) =>
																D.some((Y) => Y.id === H.id),
															)),
															{
																..._,
																isLoading: !1,
																loadedAt: Date.now(),
																matches: D,
																pendingMatches: void 0,
																cachedMatches: [
																	..._.cachedMatches,
																	...p.filter((H) => H.status !== 'error'),
																],
															}
														);
													}),
														this.clearExpiredCache();
												}),
													[
														[p, 'onLeave'],
														[g, 'onEnter'],
														[b, 'onStay'],
													].forEach(([_, A]) => {
														_.forEach((D) => {
															this.looseRoutesById[D.routeId].options[A]?.(D);
														});
													});
											});
										},
									});
							} catch (y) {
								je(y)
									? ((c = y),
										this.isServer ||
											this.navigate({
												...c.options,
												replace: !0,
												ignoreBlocker: !0,
											}))
									: Ue(y) && (o = y),
									this.__store.setState((h) => ({
										...h,
										statusCode: c
											? c.status
											: o
												? 404
												: h.matches.some((p) => p.status === 'error')
													? 500
													: 200,
										redirect: c,
									}));
							}
							this.latestLoadPromise === d &&
								(this.commitLocationPromise?.resolve(),
								(this.latestLoadPromise = void 0),
								(this.commitLocationPromise = void 0)),
								v();
						});
					}),
						this.latestLoadPromise = d,
						await d;
					this.latestLoadPromise && d !== this.latestLoadPromise;
				)
					await this.latestLoadPromise;
				this.hasNotFoundMatch() &&
					this.__store.setState((v) => ({ ...v, statusCode: 404 }));
			}),
			(this.startViewTransition = (r) => {
				const c =
					this.shouldViewTransition ?? this.options.defaultViewTransition;
				if (
					(delete this.shouldViewTransition,
					c &&
						typeof document < 'u' &&
						'startViewTransition' in document &&
						typeof document.startViewTransition == 'function')
				) {
					let o;
					if (typeof c == 'object' && this.isViewTransitionTypesSupported) {
						const d = this.latestLocation,
							v = this.state.resolvedLocation,
							y =
								typeof c.types == 'function'
									? c.types(pa({ resolvedLocation: v, location: d }))
									: c.types;
						o = { update: r, types: y };
					} else o = r;
					document.startViewTransition(o);
				} else r();
			}),
			(this.updateMatch = (r, c) => {
				const o = this.state.pendingMatches?.some((d) => d.id === r)
					? 'pendingMatches'
					: this.state.matches.some((d) => d.id === r)
						? 'matches'
						: this.state.cachedMatches.some((d) => d.id === r)
							? 'cachedMatches'
							: '';
				o &&
					this.__store.setState((d) => ({
						...d,
						[o]: d[o]?.map((v) => (v.id === r ? c(v) : v)),
					}));
			}),
			(this.getMatch = (r) => {
				const c = (o) => o.id === r;
				return (
					this.state.cachedMatches.find(c) ??
					this.state.pendingMatches?.find(c) ??
					this.state.matches.find(c)
				);
			}),
			(this.invalidate = (r) => {
				const c = (o) =>
					(r?.filter?.(o) ?? !0)
						? {
								...o,
								invalid: !0,
								...(r?.forcePending || o.status === 'error'
									? { status: 'pending', error: void 0 }
									: void 0),
							}
						: o;
				return (
					this.__store.setState((o) => ({
						...o,
						matches: o.matches.map(c),
						cachedMatches: o.cachedMatches.map(c),
						pendingMatches: o.pendingMatches?.map(c),
					})),
					(this.shouldViewTransition = !1),
					this.load({ sync: r?.sync })
				);
			}),
			(this.resolveRedirect = (r) => (
				r.options.href ||
					((r.options.href = this.buildLocation(r.options).href),
					r.headers.set('Location', r.options.href)),
				r.headers.get('Location') || r.headers.set('Location', r.options.href),
				r
			)),
			(this.clearCache = (r) => {
				const c = r?.filter;
				c !== void 0
					? this.__store.setState((o) => ({
							...o,
							cachedMatches: o.cachedMatches.filter((d) => !c(d)),
						}))
					: this.__store.setState((o) => ({ ...o, cachedMatches: [] }));
			}),
			(this.clearExpiredCache = () => {
				const r = (c) => {
					const o = this.looseRoutesById[c.routeId];
					if (!o.options.loader) return !0;
					const d =
						(c.preload
							? (o.options.preloadGcTime ?? this.options.defaultPreloadGcTime)
							: (o.options.gcTime ?? this.options.defaultGcTime)) ?? 300 * 1e3;
					return c.status === 'error' ? !0 : Date.now() - c.updatedAt >= d;
				};
				this.clearCache({ filter: r });
			}),
			(this.loadRouteChunk = Kp),
			(this.preloadRoute = async (r) => {
				const c = this.buildLocation(r);
				let o = this.matchRoutes(c, { throwOnError: !0, preload: !0, dest: r });
				const d = new Set(
						[...this.state.matches, ...(this.state.pendingMatches ?? [])].map(
							(y) => y.id,
						),
					),
					v = new Set([...d, ...this.state.cachedMatches.map((y) => y.id)]);
				il(() => {
					o.forEach((y) => {
						v.has(y.id) ||
							this.__store.setState((h) => ({
								...h,
								cachedMatches: [...h.cachedMatches, y],
							}));
					});
				});
				try {
					return (
						(o = await dp({
							router: this,
							matches: o,
							location: c,
							preload: !0,
							updateMatch: (y, h) => {
								d.has(y)
									? (o = o.map((p) => (p.id === y ? h(p) : p)))
									: this.updateMatch(y, h);
							},
						})),
						o
					);
				} catch (y) {
					if (je(y))
						return y.options.reloadDocument
							? void 0
							: await this.preloadRoute({ ...y.options, _fromLocation: c });
					Ue(y) || console.error(y);
					return;
				}
			}),
			(this.matchRoute = (r, c) => {
				const o = {
						...r,
						to: r.to ? this.resolvePathWithBase(r.from || '', r.to) : void 0,
						params: r.params || {},
						leaveParams: !0,
					},
					d = this.buildLocation(o);
				if (c?.pending && this.state.status !== 'pending') return !1;
				const y = (c?.pending === void 0 ? !this.state.isLoading : c.pending)
						? this.latestLocation
						: this.state.resolvedLocation || this.state.location,
					h = Hc(y.pathname, { ...c, to: d.pathname }, this.parsePathnameCache);
				return !h || (r.params && !ha(h, r.params, { partial: !0 }))
					? !1
					: h && (c?.includeSearch ?? !0)
						? ha(y.search, d.search, { partial: !0 })
							? h
							: !1
						: h;
			}),
			(this.hasNotFoundMatch = () =>
				this.__store.state.matches.some(
					(r) => r.status === 'notFound' || r.globalNotFound,
				)),
			this.update({
				defaultPreloadDelay: 50,
				defaultPendingMs: 1e3,
				defaultPendingMinMs: 500,
				context: void 0,
				...u,
				caseSensitive: u.caseSensitive ?? !1,
				notFoundMode: u.notFoundMode ?? 'fuzzy',
				stringifySearch: u.stringifySearch ?? wg,
				parseSearch: u.parseSearch ?? zg,
			}),
			typeof document < 'u' && (self.__TSR_ROUTER__ = this);
	}
	isShell() {
		return !!this.options.isShell;
	}
	isPrerendering() {
		return !!this.options.isPrerendering;
	}
	get state() {
		return this.__store.state;
	}
	get looseRoutesById() {
		return this.routesById;
	}
	matchRoutesInternal(u, r) {
		const {
			foundRoute: c,
			matchedRoutes: o,
			routeParams: d,
		} = this.getMatchedRoutes(u.pathname, r?.dest?.to);
		let v = !1;
		(c ? c.path !== '/' && d['**'] : Vn(u.pathname)) &&
			(this.options.notFoundRoute
				? o.push(this.options.notFoundRoute)
				: (v = !0));
		const y = (() => {
				if (v) {
					if (this.options.notFoundMode !== 'root')
						for (let g = o.length - 1; g >= 0; g--) {
							const b = o[g];
							if (b.children) return b.id;
						}
					return _e;
				}
			})(),
			h = [],
			p = (g) =>
				g?.id
					? (g.context ?? this.options.context ?? void 0)
					: (this.options.context ?? void 0);
		return (
			o.forEach((g, b) => {
				const _ = h[b - 1],
					[A, D, H] = (() => {
						const pt = _?.search ?? u.search,
							ne = _?._strictSearch ?? void 0;
						try {
							const Vt = qc(g.options.validateSearch, { ...pt }) ?? void 0;
							return [{ ...pt, ...Vt }, { ...ne, ...Vt }, void 0];
						} catch (Vt) {
							let wt = Vt;
							if (
								(Vt instanceof $u || (wt = new $u(Vt.message, { cause: Vt })),
								r?.throwOnError)
							)
								throw wt;
							return [pt, {}, wt];
						}
					})(),
					Y = g.options.loaderDeps?.({ search: A }) ?? '',
					F = Y ? JSON.stringify(Y) : '',
					{ interpolatedPath: it, usedParams: K } = Hu({
						path: g.fullPath,
						params: d,
						decodeCharMap: this.pathParamsDecodeCharMap,
					}),
					lt =
						Hu({
							path: g.id,
							params: d,
							leaveWildcards: !0,
							decodeCharMap: this.pathParamsDecodeCharMap,
							parseCache: this.parsePathnameCache,
						}).interpolatedPath + F,
					P = this.getMatch(lt),
					W = this.state.matches.find((pt) => pt.routeId === g.id),
					Z = P?._strictParams ?? K;
				let Q;
				if (!P) {
					const pt = g.options.params?.parse ?? g.options.parseParams;
					if (pt)
						try {
							Object.assign(Z, pt(Z));
						} catch (ne) {
							if (((Q = new Qg(ne.message, { cause: ne })), r?.throwOnError))
								throw Q;
						}
				}
				Object.assign(d, Z);
				const ut = W ? 'stay' : 'enter';
				let ht;
				if (P)
					ht = {
						...P,
						cause: ut,
						params: W ? Ce(W.params, d) : d,
						_strictParams: Z,
						search: Ce(W ? W.search : P.search, A),
						_strictSearch: D,
					};
				else {
					const pt =
						g.options.loader || g.options.beforeLoad || g.lazyFn || Jp(g)
							? 'pending'
							: 'success';
					ht = {
						id: lt,
						index: b,
						routeId: g.id,
						params: W ? Ce(W.params, d) : d,
						_strictParams: Z,
						pathname: it,
						updatedAt: Date.now(),
						search: W ? Ce(W.search, A) : A,
						_strictSearch: D,
						searchError: void 0,
						status: pt,
						isFetching: !1,
						error: void 0,
						paramsError: Q,
						__routeContext: void 0,
						_nonReactive: { loadPromise: ya() },
						__beforeLoadContext: void 0,
						context: {},
						abortController: new AbortController(),
						fetchCount: 0,
						cause: ut,
						loaderDeps: W ? Ce(W.loaderDeps, Y) : Y,
						invalid: !1,
						preload: !1,
						links: void 0,
						scripts: void 0,
						headScripts: void 0,
						meta: void 0,
						staticData: g.options.staticData || {},
						fullPath: g.fullPath,
					};
				}
				r?.preload || (ht.globalNotFound = y === g.id), (ht.searchError = H);
				const St = p(_);
				(ht.context = {
					...St,
					...ht.__routeContext,
					...ht.__beforeLoadContext,
				}),
					h.push(ht);
			}),
			h.forEach((g, b) => {
				const _ = this.looseRoutesById[g.routeId];
				if (!this.getMatch(g.id) && r?._buildLocation !== !0) {
					const D = h[b - 1],
						H = p(D);
					if (_.options.context) {
						const Y = {
							deps: g.loaderDeps,
							params: g.params,
							context: H ?? {},
							location: u,
							navigate: (F) => this.navigate({ ...F, _fromLocation: u }),
							buildLocation: this.buildLocation,
							cause: g.cause,
							abortController: g.abortController,
							preload: !!g.preload,
							matches: h,
						};
						g.__routeContext = _.options.context(Y) ?? void 0;
					}
					g.context = { ...H, ...g.__routeContext, ...g.__beforeLoadContext };
				}
			}),
			h
		);
	}
}
class $u extends Error {}
class Qg extends Error {}
function Zg(l) {
	return {
		loadedAt: 0,
		isLoading: !1,
		isTransitioning: !1,
		status: 'idle',
		resolvedLocation: void 0,
		location: l,
		matches: [],
		pendingMatches: [],
		cachedMatches: [],
		statusCode: 200,
	};
}
function qc(l, u) {
	if (l == null) return {};
	if ('~standard' in l) {
		const r = l['~standard'].validate(u);
		if (r instanceof Promise) throw new $u('Async validation not supported');
		if (r.issues)
			throw new $u(JSON.stringify(r.issues, void 0, 2), { cause: r });
		return r.value;
	}
	return 'parse' in l ? l.parse(u) : typeof l == 'function' ? l(u) : {};
}
function Kg({
	pathname: l,
	routePathname: u,
	caseSensitive: r,
	routesByPath: c,
	routesById: o,
	flatRoutes: d,
	parseCache: v,
}) {
	let y = {};
	const h = Vn(l),
		p = (A) =>
			Hc(
				h,
				{
					to: A.fullPath,
					caseSensitive: A.options?.caseSensitive ?? r,
					fuzzy: !0,
				},
				v,
			);
	let g = u !== void 0 ? c[u] : void 0;
	if (g) y = p(g);
	else {
		let A;
		for (const D of d) {
			const H = p(D);
			if (H)
				if (D.path !== '/' && H['**'])
					A || (A = { foundRoute: D, routeParams: H });
				else {
					(g = D), (y = H);
					break;
				}
		}
		!g && A && ((g = A.foundRoute), (y = A.routeParams));
	}
	let b = g || o[_e];
	const _ = [b];
	for (; b.parentRoute; ) (b = b.parentRoute), _.push(b);
	return _.reverse(), { matchedRoutes: _, routeParams: y, foundRoute: g };
}
function Jg({ search: l, dest: u, destRoutes: r, _includeValidateSearch: c }) {
	const o =
			r.reduce((y, h) => {
				const p = [];
				if ('search' in h.options)
					h.options.search?.middlewares &&
						p.push(...h.options.search.middlewares);
				else if (h.options.preSearchFilters || h.options.postSearchFilters) {
					const g = ({ search: b, next: _ }) => {
						let A = b;
						'preSearchFilters' in h.options &&
							h.options.preSearchFilters &&
							(A = h.options.preSearchFilters.reduce((H, Y) => Y(H), b));
						const D = _(A);
						return 'postSearchFilters' in h.options &&
							h.options.postSearchFilters
							? h.options.postSearchFilters.reduce((H, Y) => Y(H), D)
							: D;
					};
					p.push(g);
				}
				if (c && h.options.validateSearch) {
					const g = ({ search: b, next: _ }) => {
						const A = _(b);
						try {
							return { ...A, ...(qc(h.options.validateSearch, A) ?? void 0) };
						} catch {
							return A;
						}
					};
					p.push(g);
				}
				return y.concat(p);
			}, []) ?? [],
		d = ({ search: y }) =>
			u.search ? (u.search === !0 ? y : da(u.search, y)) : {};
	o.push(d);
	const v = (y, h) => {
		if (y >= o.length) return h;
		const p = o[y];
		return p({ search: h, next: (b) => v(y + 1, b) });
	};
	return v(0, l);
}
const Qe = Symbol.for('TSR_DEFERRED_PROMISE');
function Pg(l, u) {
	const r = l;
	return (
		r[Qe] ||
			((r[Qe] = { status: 'pending' }),
			r
				.then((c) => {
					(r[Qe].status = 'success'), (r[Qe].data = c);
				})
				.catch((c) => {
					(r[Qe].status = 'error'),
						(r[Qe].error = { data: Gg(c), __isServerError: !0 });
				})),
		r
	);
}
const kg = 'Error preloading route! ☝️';
class Fp {
	constructor(u) {
		if (
			((this.init = (r) => {
				this.originalIndex = r.originalIndex;
				const c = this.options,
					o = !c?.path && !c?.id;
				(this.parentRoute = this.options.getParentRoute?.()),
					o ? (this._path = _e) : this.parentRoute || oe(!1);
				let d = o ? _e : c?.path;
				d && d !== '/' && (d = Zc(d));
				const v = c?.id || d;
				let y = o
					? _e
					: cn([this.parentRoute.id === _e ? '' : this.parentRoute.id, v]);
				d === _e && (d = '/'), y !== _e && (y = cn(['/', y]));
				const h = y === _e ? '/' : cn([this.parentRoute.fullPath, d]);
				(this._path = d), (this._id = y), (this._fullPath = h), (this._to = h);
			}),
			(this.clone = (r) => {
				(this._path = r._path),
					(this._id = r._id),
					(this._fullPath = r._fullPath),
					(this._to = r._to),
					(this.options.getParentRoute = r.options.getParentRoute),
					(this.children = r.children);
			}),
			(this.addChildren = (r) => this._addFileChildren(r)),
			(this._addFileChildren = (r) => (
				Array.isArray(r) && (this.children = r),
				typeof r == 'object' &&
					r !== null &&
					(this.children = Object.values(r)),
				this
			)),
			(this._addFileTypes = () => this),
			(this.updateLoader = (r) => (Object.assign(this.options, r), this)),
			(this.update = (r) => (Object.assign(this.options, r), this)),
			(this.lazy = (r) => ((this.lazyFn = r), this)),
			(this.options = u || {}),
			(this.isRoot = !u?.getParentRoute),
			u?.id && u?.path)
		)
			throw new Error("Route cannot have both an 'id' and a 'path' option.");
	}
	get to() {
		return this._to;
	}
	get id() {
		return this._id;
	}
	get path() {
		return this._path;
	}
	get fullPath() {
		return this._fullPath;
	}
}
class $g extends Fp {
	constructor(u) {
		super(u);
	}
}
var Fg = ((l) => (
	(l[(l.AggregateError = 1)] = 'AggregateError'),
	(l[(l.ArrowFunction = 2)] = 'ArrowFunction'),
	(l[(l.ErrorPrototypeStack = 4)] = 'ErrorPrototypeStack'),
	(l[(l.ObjectAssign = 8)] = 'ObjectAssign'),
	(l[(l.BigIntTypedArray = 16)] = 'BigIntTypedArray'),
	l
))(Fg || {});
function Wg(l) {
	switch (l) {
		case '"':
			return '\\"';
		case '\\':
			return '\\\\';
		case `
`:
			return '\\n';
		case '\r':
			return '\\r';
		case '\b':
			return '\\b';
		case '	':
			return '\\t';
		case '\f':
			return '\\f';
		case '<':
			return '\\x3C';
		case '\u2028':
			return '\\u2028';
		case '\u2029':
			return '\\u2029';
		default:
			return;
	}
}
function Yn(l) {
	let u = '',
		r = 0,
		c;
	for (let o = 0, d = l.length; o < d; o++)
		(c = Wg(l[o])), c && ((u += l.slice(r, o) + c), (r = o + 1));
	return r === 0 ? (u = l) : (u += l.slice(r)), u;
}
function Ig(l) {
	switch (l) {
		case '\\\\':
			return '\\';
		case '\\"':
			return '"';
		case '\\n':
			return `
`;
		case '\\r':
			return '\r';
		case '\\b':
			return '\b';
		case '\\t':
			return '	';
		case '\\f':
			return '\f';
		case '\\x3C':
			return '<';
		case '\\u2028':
			return '\u2028';
		case '\\u2029':
			return '\u2029';
		default:
			return l;
	}
}
function fa(l) {
	return l.replace(/(\\\\|\\"|\\n|\\r|\\b|\\t|\\f|\\u2028|\\u2029|\\x3C)/g, Ig);
}
var Vu = '__SEROVAL_REFS__';
function Bn(l, u) {
	if (!l) throw u;
}
var Wp = new Map(),
	al = new Map();
function Ip(l) {
	return Wp.has(l);
}
function t0(l) {
	return al.has(l);
}
function e0(l) {
	return Bn(Ip(l), new Y0(l)), Wp.get(l);
}
function n0(l) {
	return Bn(t0(l), new G0(l)), al.get(l);
}
typeof globalThis < 'u'
	? Object.defineProperty(globalThis, Vu, {
			value: al,
			configurable: !0,
			writable: !1,
			enumerable: !1,
		})
	: typeof window < 'u'
		? Object.defineProperty(window, Vu, {
				value: al,
				configurable: !0,
				writable: !1,
				enumerable: !1,
			})
		: typeof self < 'u'
			? Object.defineProperty(self, Vu, {
					value: al,
					configurable: !0,
					writable: !1,
					enumerable: !1,
				})
			: typeof global < 'u' &&
				Object.defineProperty(global, Vu, {
					value: al,
					configurable: !0,
					writable: !1,
					enumerable: !1,
				});
function ty(l, u) {
	for (let r = 0, c = u.length; r < c; r++) {
		let o = u[r];
		l.has(o) || (l.add(o), o.extends && ty(l, o.extends));
	}
}
function ey(l) {
	if (l) {
		let u = new Set();
		return ty(u, l), [...u];
	}
}
var ny = {
		[Symbol.asyncIterator]: 0,
		[Symbol.hasInstance]: 1,
		[Symbol.isConcatSpreadable]: 2,
		[Symbol.iterator]: 3,
		[Symbol.match]: 4,
		[Symbol.matchAll]: 5,
		[Symbol.replace]: 6,
		[Symbol.search]: 7,
		[Symbol.species]: 8,
		[Symbol.split]: 9,
		[Symbol.toPrimitive]: 10,
		[Symbol.toStringTag]: 11,
		[Symbol.unscopables]: 12,
	},
	a0 = {
		0: Symbol.asyncIterator,
		1: Symbol.hasInstance,
		2: Symbol.isConcatSpreadable,
		3: Symbol.iterator,
		4: Symbol.match,
		5: Symbol.matchAll,
		6: Symbol.replace,
		7: Symbol.search,
		8: Symbol.species,
		9: Symbol.split,
		10: Symbol.toPrimitive,
		11: Symbol.toStringTag,
		12: Symbol.unscopables,
	},
	l0 = {
		2: !0,
		3: !1,
		1: void 0,
		0: null,
		4: -0,
		5: Number.POSITIVE_INFINITY,
		6: Number.NEGATIVE_INFINITY,
		7: Number.NaN,
	},
	i0 = {
		0: 'Error',
		1: 'EvalError',
		2: 'RangeError',
		3: 'ReferenceError',
		4: 'SyntaxError',
		5: 'TypeError',
		6: 'URIError',
	},
	u0 = {
		0: Error,
		1: EvalError,
		2: RangeError,
		3: ReferenceError,
		4: SyntaxError,
		5: TypeError,
		6: URIError,
	},
	S = void 0;
function vt(l, u, r, c, o, d, v, y, h, p, g, b) {
	return {
		t: l,
		i: u,
		s: r,
		l: c,
		c: o,
		m: d,
		p: v,
		e: y,
		a: h,
		f: p,
		b: g,
		o: b,
	};
}
function Gn(l) {
	return vt(2, S, l, S, S, S, S, S, S, S, S, S);
}
var hp = Gn(2),
	pp = Gn(3),
	r0 = Gn(1),
	s0 = Gn(0),
	c0 = Gn(4),
	o0 = Gn(5),
	f0 = Gn(6),
	d0 = Gn(7);
function Kc(l) {
	return l instanceof EvalError
		? 1
		: l instanceof RangeError
			? 2
			: l instanceof ReferenceError
				? 3
				: l instanceof SyntaxError
					? 4
					: l instanceof TypeError
						? 5
						: l instanceof URIError
							? 6
							: 0;
}
function h0(l) {
	let u = i0[Kc(l)];
	return l.name !== u
		? { name: l.name }
		: l.constructor.name !== u
			? { name: l.constructor.name }
			: {};
}
function yp(l, u) {
	let r = h0(l),
		c = Object.getOwnPropertyNames(l);
	for (let o = 0, d = c.length, v; o < d; o++)
		(v = c[o]),
			v !== 'name' &&
				v !== 'message' &&
				(v === 'stack'
					? u & 4 && ((r = r || {}), (r[v] = l[v]))
					: ((r = r || {}), (r[v] = l[v])));
	return r;
}
function ay(l) {
	return Object.isFrozen(l)
		? 3
		: Object.isSealed(l)
			? 2
			: Object.isExtensible(l)
				? 0
				: 1;
}
function p0(l) {
	switch (l) {
		case Number.POSITIVE_INFINITY:
			return o0;
		case Number.NEGATIVE_INFINITY:
			return f0;
	}
	return l !== l
		? d0
		: Object.is(l, -0)
			? c0
			: vt(0, S, l, S, S, S, S, S, S, S, S, S);
}
function mp(l) {
	return vt(1, S, Yn(l), S, S, S, S, S, S, S, S, S);
}
function y0(l) {
	return vt(3, S, '' + l, S, S, S, S, S, S, S, S, S);
}
function m0(l) {
	return vt(4, l, S, S, S, S, S, S, S, S, S, S);
}
function v0(l, u) {
	let r = u.valueOf();
	return vt(5, l, r !== r ? '' : u.toISOString(), S, S, S, S, S, S, S, S, S);
}
function g0(l, u) {
	return vt(6, l, S, S, Yn(u.source), u.flags, S, S, S, S, S, S);
}
function S0(l, u) {
	let r = new Uint8Array(u),
		c = r.length,
		o = new Array(c);
	for (let d = 0; d < c; d++) o[d] = r[d];
	return vt(19, l, o, S, S, S, S, S, S, S, S, S);
}
function b0(l, u) {
	return vt(17, l, ny[u], S, S, S, S, S, S, S, S, S);
}
function _0(l, u) {
	return vt(18, l, Yn(e0(u)), S, S, S, S, S, S, S, S, S);
}
function R0(l, u, r) {
	return vt(25, l, r, S, Yn(u), S, S, S, S, S, S, S);
}
function E0(l, u, r) {
	return vt(9, l, S, u.length, S, S, S, S, r, S, S, ay(u));
}
function T0(l, u) {
	return vt(21, l, S, S, S, S, S, S, S, u, S, S);
}
function A0(l, u, r) {
	return vt(
		15,
		l,
		S,
		u.length,
		u.constructor.name,
		S,
		S,
		S,
		S,
		r,
		u.byteOffset,
		S,
	);
}
function M0(l, u, r) {
	return vt(
		16,
		l,
		S,
		u.length,
		u.constructor.name,
		S,
		S,
		S,
		S,
		r,
		u.byteOffset,
		S,
	);
}
function O0(l, u, r) {
	return vt(20, l, S, u.byteLength, S, S, S, S, S, r, u.byteOffset, S);
}
function x0(l, u, r) {
	return vt(13, l, Kc(u), S, S, Yn(u.message), r, S, S, S, S, S);
}
function z0(l, u, r) {
	return vt(14, l, Kc(u), S, S, Yn(u.message), r, S, S, S, S, S);
}
function w0(l, u, r) {
	return vt(7, l, S, u, S, S, S, S, r, S, S, S);
}
function D0(l, u) {
	return vt(28, S, S, S, S, S, S, S, [l, u], S, S, S);
}
function C0(l, u) {
	return vt(30, S, S, S, S, S, S, S, [l, u], S, S, S);
}
function U0(l, u, r) {
	return vt(31, l, S, S, S, S, S, S, r, u, S, S);
}
function N0(l, u) {
	return vt(32, l, S, S, S, S, S, S, S, u, S, S);
}
function L0(l, u) {
	return vt(33, l, S, S, S, S, S, S, S, u, S, S);
}
function B0(l, u) {
	return vt(34, l, S, S, S, S, S, S, S, u, S, S);
}
var { toString: Jc } = Object.prototype;
function H0(l, u) {
	return u instanceof Error
		? `Seroval caught an error during the ${l} process.
  
${u.name}
${u.message}

- For more information, please check the "cause" property of this error.
- If you believe this is an error in Seroval, please submit an issue at https://github.com/lxsmnsyc/seroval/issues/new`
		: `Seroval caught an error during the ${l} process.

"${Jc.call(u)}"

For more information, please check the "cause" property of this error.`;
}
var ly = class extends Error {
		constructor(u, r) {
			super(H0(u, r)), (this.cause = r);
		}
	},
	vp = class extends ly {
		constructor(l) {
			super('parsing', l);
		}
	},
	j0 = class extends ly {
		constructor(l) {
			super('deserialization', l);
		}
	},
	Qu = class extends Error {
		constructor(l) {
			super(`The value ${Jc.call(l)} of type "${typeof l}" cannot be parsed/serialized.
      
There are few workarounds for this problem:
- Transform the value in a way that it can be serialized.
- If the reference is present on multiple runtimes (isomorphic), you can use the Reference API to map the references.`),
				(this.value = l);
		}
	},
	q0 = class extends Error {
		constructor(l) {
			super('Unsupported node type "' + l.t + '".');
		}
	},
	V0 = class extends Error {
		constructor(l) {
			super('Missing plugin for tag "' + l + '".');
		}
	},
	fi = class extends Error {
		constructor(l) {
			super('Missing "' + l + '" instance.');
		}
	},
	Y0 = class extends Error {
		constructor(l) {
			super(
				'Missing reference for the value "' +
					Jc.call(l) +
					'" of type "' +
					typeof l +
					'"',
			),
				(this.value = l);
		}
	},
	G0 = class extends Error {
		constructor(l) {
			super('Missing reference for id "' + Yn(l) + '"');
		}
	},
	X0 = class extends Error {
		constructor(l) {
			super('Unknown TypedArray "' + l + '"');
		}
	},
	Q0 = class {
		constructor(l, u) {
			(this.value = l), (this.replacement = u);
		}
	},
	Z0 = {},
	K0 = {},
	J0 = { 0: {}, 1: {}, 2: {}, 3: {}, 4: {} };
function Vc() {
	let l, u;
	return {
		promise: new Promise((r, c) => {
			(l = r), (u = c);
		}),
		resolve(r) {
			l(r);
		},
		reject(r) {
			u(r);
		},
	};
}
function P0(l) {
	return '__SEROVAL_STREAM__' in l;
}
function tr() {
	let l = new Set(),
		u = [],
		r = !0,
		c = !0;
	function o(y) {
		for (let h of l.keys()) h.next(y);
	}
	function d(y) {
		for (let h of l.keys()) h.throw(y);
	}
	function v(y) {
		for (let h of l.keys()) h.return(y);
	}
	return {
		__SEROVAL_STREAM__: !0,
		on(y) {
			r && l.add(y);
			for (let h = 0, p = u.length; h < p; h++) {
				let g = u[h];
				h === p - 1 && !r ? (c ? y.return(g) : y.throw(g)) : y.next(g);
			}
			return () => {
				r && l.delete(y);
			};
		},
		next(y) {
			r && (u.push(y), o(y));
		},
		throw(y) {
			r && (u.push(y), d(y), (r = !1), (c = !1), l.clear());
		},
		return(y) {
			r && (u.push(y), v(y), (r = !1), (c = !0), l.clear());
		},
	};
}
function k0(l) {
	let u = tr(),
		r = l[Symbol.asyncIterator]();
	async function c() {
		try {
			let o = await r.next();
			o.done ? u.return(o.value) : (u.next(o.value), await c());
		} catch (o) {
			u.throw(o);
		}
	}
	return c().catch(() => {}), u;
}
function $0(l) {
	return () => {
		let u = [],
			r = [],
			c = 0,
			o = -1,
			d = !1;
		function v() {
			for (let h = 0, p = r.length; h < p; h++)
				r[h].resolve({ done: !0, value: void 0 });
		}
		l.on({
			next(h) {
				let p = r.shift();
				p && p.resolve({ done: !1, value: h }), u.push(h);
			},
			throw(h) {
				let p = r.shift();
				p && p.reject(h), v(), (o = u.length), u.push(h), (d = !0);
			},
			return(h) {
				let p = r.shift();
				p && p.resolve({ done: !0, value: h }), v(), (o = u.length), u.push(h);
			},
		});
		function y() {
			let h = c++,
				p = u[h];
			if (h !== o) return { done: !1, value: p };
			if (d) throw p;
			return { done: !0, value: p };
		}
		return {
			[Symbol.asyncIterator]() {
				return this;
			},
			async next() {
				if (o === -1) {
					let h = c++;
					if (h >= u.length) {
						let p = Vc();
						return r.push(p), await p.promise;
					}
					return { done: !1, value: u[h] };
				}
				return c > o ? { done: !0, value: void 0 } : y();
			},
		};
	};
}
function F0(l) {
	let u = [],
		r = -1,
		c = -1,
		o = l[Symbol.iterator]();
	for (;;)
		try {
			let d = o.next();
			if ((u.push(d.value), d.done)) {
				c = u.length - 1;
				break;
			}
		} catch (d) {
			(r = u.length), u.push(d);
		}
	return { v: u, t: r, d: c };
}
function W0(l) {
	return () => {
		let u = 0;
		return {
			[Symbol.iterator]() {
				return this;
			},
			next() {
				if (u > l.d) return { done: !0, value: S };
				let r = u++,
					c = l.v[r];
				if (r === l.t) throw c;
				return { done: r === l.d, value: c };
			},
		};
	};
}
async function I0(l) {
	try {
		return [1, await l];
	} catch (u) {
		return [0, u];
	}
}
var tS = class {
		constructor(l) {
			(this.marked = new Set()),
				(this.plugins = l.plugins),
				(this.features = 31 ^ (l.disabledFeatures || 0)),
				(this.refs = l.refs || new Map());
		}
		markRef(l) {
			this.marked.add(l);
		}
		isMarked(l) {
			return this.marked.has(l);
		}
		createIndex(l) {
			let u = this.refs.size;
			return this.refs.set(l, u), u;
		}
		getIndexedValue(l) {
			let u = this.refs.get(l);
			return u != null
				? (this.markRef(u), { type: 1, value: m0(u) })
				: { type: 0, value: this.createIndex(l) };
		}
		getReference(l) {
			let u = this.getIndexedValue(l);
			return u.type === 1 ? u : Ip(l) ? { type: 2, value: _0(u.value, l) } : u;
		}
		parseWellKnownSymbol(l) {
			let u = this.getReference(l);
			return u.type !== 0 ? u.value : (Bn(l in ny, new Qu(l)), b0(u.value, l));
		}
		parseSpecialReference(l) {
			let u = this.getIndexedValue(J0[l]);
			return u.type === 1
				? u.value
				: vt(26, u.value, l, S, S, S, S, S, S, S, S, S);
		}
		parseIteratorFactory() {
			let l = this.getIndexedValue(Z0);
			return l.type === 1
				? l.value
				: vt(
						27,
						l.value,
						S,
						S,
						S,
						S,
						S,
						S,
						S,
						this.parseWellKnownSymbol(Symbol.iterator),
						S,
						S,
					);
		}
		parseAsyncIteratorFactory() {
			let l = this.getIndexedValue(K0);
			return l.type === 1
				? l.value
				: vt(
						29,
						l.value,
						S,
						S,
						S,
						S,
						S,
						S,
						[
							this.parseSpecialReference(1),
							this.parseWellKnownSymbol(Symbol.asyncIterator),
						],
						S,
						S,
						S,
					);
		}
		createObjectNode(l, u, r, c) {
			return vt(r ? 11 : 10, l, S, S, S, S, c, S, S, S, S, ay(u));
		}
		createMapNode(l, u, r, c) {
			return vt(
				8,
				l,
				S,
				S,
				S,
				S,
				S,
				{ k: u, v: r, s: c },
				S,
				this.parseSpecialReference(0),
				S,
				S,
			);
		}
		createPromiseConstructorNode(l, u) {
			return vt(
				22,
				l,
				u,
				S,
				S,
				S,
				S,
				S,
				S,
				this.parseSpecialReference(1),
				S,
				S,
			);
		}
	},
	eS = class extends tS {
		async parseItems(l) {
			let u = [];
			for (let r = 0, c = l.length; r < c; r++)
				r in l && (u[r] = await this.parse(l[r]));
			return u;
		}
		async parseArray(l, u) {
			return E0(l, u, await this.parseItems(u));
		}
		async parseProperties(l) {
			let u = Object.entries(l),
				r = [],
				c = [];
			for (let d = 0, v = u.length; d < v; d++)
				r.push(Yn(u[d][0])), c.push(await this.parse(u[d][1]));
			let o = Symbol.iterator;
			return (
				o in l &&
					(r.push(this.parseWellKnownSymbol(o)),
					c.push(D0(this.parseIteratorFactory(), await this.parse(F0(l))))),
				(o = Symbol.asyncIterator),
				o in l &&
					(r.push(this.parseWellKnownSymbol(o)),
					c.push(
						C0(this.parseAsyncIteratorFactory(), await this.parse(k0(l))),
					)),
				(o = Symbol.toStringTag),
				o in l && (r.push(this.parseWellKnownSymbol(o)), c.push(mp(l[o]))),
				(o = Symbol.isConcatSpreadable),
				o in l &&
					(r.push(this.parseWellKnownSymbol(o)), c.push(l[o] ? hp : pp)),
				{ k: r, v: c, s: r.length }
			);
		}
		async parsePlainObject(l, u, r) {
			return this.createObjectNode(l, u, r, await this.parseProperties(u));
		}
		async parseBoxed(l, u) {
			return T0(l, await this.parse(u.valueOf()));
		}
		async parseTypedArray(l, u) {
			return A0(l, u, await this.parse(u.buffer));
		}
		async parseBigIntTypedArray(l, u) {
			return M0(l, u, await this.parse(u.buffer));
		}
		async parseDataView(l, u) {
			return O0(l, u, await this.parse(u.buffer));
		}
		async parseError(l, u) {
			let r = yp(u, this.features);
			return x0(l, u, r ? await this.parseProperties(r) : S);
		}
		async parseAggregateError(l, u) {
			let r = yp(u, this.features);
			return z0(l, u, r ? await this.parseProperties(r) : S);
		}
		async parseMap(l, u) {
			let r = [],
				c = [];
			for (let [o, d] of u.entries())
				r.push(await this.parse(o)), c.push(await this.parse(d));
			return this.createMapNode(l, r, c, u.size);
		}
		async parseSet(l, u) {
			let r = [];
			for (let c of u.keys()) r.push(await this.parse(c));
			return w0(l, u.size, r);
		}
		async parsePromise(l, u) {
			let [r, c] = await I0(u);
			return vt(12, l, r, S, S, S, S, S, S, await this.parse(c), S, S);
		}
		async parsePlugin(l, u) {
			let r = this.plugins;
			if (r)
				for (let c = 0, o = r.length; c < o; c++) {
					let d = r[c];
					if (d.parse.async && d.test(u))
						return R0(l, d.tag, await d.parse.async(u, this, { id: l }));
				}
			return S;
		}
		async parseStream(l, u) {
			return U0(
				l,
				this.parseSpecialReference(4),
				await new Promise((r, c) => {
					let o = [],
						d = u.on({
							next: (v) => {
								this.markRef(l),
									this.parse(v).then(
										(y) => {
											o.push(N0(l, y));
										},
										(y) => {
											c(y), d();
										},
									);
							},
							throw: (v) => {
								this.markRef(l),
									this.parse(v).then(
										(y) => {
											o.push(L0(l, y)), r(o), d();
										},
										(y) => {
											c(y), d();
										},
									);
							},
							return: (v) => {
								this.markRef(l),
									this.parse(v).then(
										(y) => {
											o.push(B0(l, y)), r(o), d();
										},
										(y) => {
											c(y), d();
										},
									);
							},
						});
				}),
			);
		}
		async parseObject(l, u) {
			if (Array.isArray(u)) return this.parseArray(l, u);
			if (P0(u)) return this.parseStream(l, u);
			let r = u.constructor;
			if (r === Q0) return this.parse(u.replacement);
			let c = await this.parsePlugin(l, u);
			if (c) return c;
			switch (r) {
				case Object:
					return this.parsePlainObject(l, u, !1);
				case S:
					return this.parsePlainObject(l, u, !0);
				case Date:
					return v0(l, u);
				case RegExp:
					return g0(l, u);
				case Error:
				case EvalError:
				case RangeError:
				case ReferenceError:
				case SyntaxError:
				case TypeError:
				case URIError:
					return this.parseError(l, u);
				case Number:
				case Boolean:
				case String:
				case BigInt:
					return this.parseBoxed(l, u);
				case ArrayBuffer:
					return S0(l, u);
				case Int8Array:
				case Int16Array:
				case Int32Array:
				case Uint8Array:
				case Uint16Array:
				case Uint32Array:
				case Uint8ClampedArray:
				case Float32Array:
				case Float64Array:
					return this.parseTypedArray(l, u);
				case DataView:
					return this.parseDataView(l, u);
				case Map:
					return this.parseMap(l, u);
				case Set:
					return this.parseSet(l, u);
			}
			if (r === Promise || u instanceof Promise) return this.parsePromise(l, u);
			let o = this.features;
			if (o & 16)
				switch (r) {
					case BigInt64Array:
					case BigUint64Array:
						return this.parseBigIntTypedArray(l, u);
				}
			if (
				o & 1 &&
				typeof AggregateError < 'u' &&
				(r === AggregateError || u instanceof AggregateError)
			)
				return this.parseAggregateError(l, u);
			if (u instanceof Error) return this.parseError(l, u);
			if (Symbol.iterator in u || Symbol.asyncIterator in u)
				return this.parsePlainObject(l, u, !!r);
			throw new Qu(u);
		}
		async parseFunction(l) {
			let u = this.getReference(l);
			if (u.type !== 0) return u.value;
			let r = await this.parsePlugin(u.value, l);
			if (r) return r;
			throw new Qu(l);
		}
		async parse(l) {
			switch (typeof l) {
				case 'boolean':
					return l ? hp : pp;
				case 'undefined':
					return r0;
				case 'string':
					return mp(l);
				case 'number':
					return p0(l);
				case 'bigint':
					return y0(l);
				case 'object': {
					if (l) {
						let u = this.getReference(l);
						return u.type === 0 ? await this.parseObject(u.value, l) : u.value;
					}
					return s0;
				}
				case 'symbol':
					return this.parseWellKnownSymbol(l);
				case 'function':
					return this.parseFunction(l);
				default:
					throw new Qu(l);
			}
		}
		async parseTop(l) {
			try {
				return await this.parse(l);
			} catch (u) {
				throw u instanceof vp ? u : new vp(u);
			}
		}
	};
function nS(l) {
	switch (l) {
		case 'Int8Array':
			return Int8Array;
		case 'Int16Array':
			return Int16Array;
		case 'Int32Array':
			return Int32Array;
		case 'Uint8Array':
			return Uint8Array;
		case 'Uint16Array':
			return Uint16Array;
		case 'Uint32Array':
			return Uint32Array;
		case 'Uint8ClampedArray':
			return Uint8ClampedArray;
		case 'Float32Array':
			return Float32Array;
		case 'Float64Array':
			return Float64Array;
		case 'BigInt64Array':
			return BigInt64Array;
		case 'BigUint64Array':
			return BigUint64Array;
		default:
			throw new X0(l);
	}
}
function gp(l, u) {
	switch (u) {
		case 3:
			return Object.freeze(l);
		case 1:
			return Object.preventExtensions(l);
		case 2:
			return Object.seal(l);
		default:
			return l;
	}
}
var aS = class {
		constructor(l) {
			(this.plugins = l.plugins), (this.refs = l.refs || new Map());
		}
		deserializeReference(l) {
			return this.assignIndexedValue(l.i, n0(fa(l.s)));
		}
		deserializeArray(l) {
			let u = l.l,
				r = this.assignIndexedValue(l.i, new Array(u)),
				c;
			for (let o = 0; o < u; o++)
				(c = l.a[o]), c && (r[o] = this.deserialize(c));
			return gp(r, l.o), r;
		}
		deserializeProperties(l, u) {
			let r = l.s;
			if (r) {
				let c = l.k,
					o = l.v;
				for (let d = 0, v; d < r; d++)
					(v = c[d]),
						typeof v == 'string'
							? (u[fa(v)] = this.deserialize(o[d]))
							: (u[this.deserialize(v)] = this.deserialize(o[d]));
			}
			return u;
		}
		deserializeObject(l) {
			let u = this.assignIndexedValue(
				l.i,
				l.t === 10 ? {} : Object.create(null),
			);
			return this.deserializeProperties(l.p, u), gp(u, l.o), u;
		}
		deserializeDate(l) {
			return this.assignIndexedValue(l.i, new Date(l.s));
		}
		deserializeRegExp(l) {
			return this.assignIndexedValue(l.i, new RegExp(fa(l.c), l.m));
		}
		deserializeSet(l) {
			let u = this.assignIndexedValue(l.i, new Set()),
				r = l.a;
			for (let c = 0, o = l.l; c < o; c++) u.add(this.deserialize(r[c]));
			return u;
		}
		deserializeMap(l) {
			let u = this.assignIndexedValue(l.i, new Map()),
				r = l.e.k,
				c = l.e.v;
			for (let o = 0, d = l.e.s; o < d; o++)
				u.set(this.deserialize(r[o]), this.deserialize(c[o]));
			return u;
		}
		deserializeArrayBuffer(l) {
			let u = new Uint8Array(l.s);
			return this.assignIndexedValue(l.i, u.buffer);
		}
		deserializeTypedArray(l) {
			let u = nS(l.c),
				r = this.deserialize(l.f);
			return this.assignIndexedValue(l.i, new u(r, l.b, l.l));
		}
		deserializeDataView(l) {
			let u = this.deserialize(l.f);
			return this.assignIndexedValue(l.i, new DataView(u, l.b, l.l));
		}
		deserializeDictionary(l, u) {
			if (l.p) {
				let r = this.deserializeProperties(l.p, {});
				Object.assign(u, r);
			}
			return u;
		}
		deserializeAggregateError(l) {
			let u = this.assignIndexedValue(l.i, new AggregateError([], fa(l.m)));
			return this.deserializeDictionary(l, u);
		}
		deserializeError(l) {
			let u = u0[l.s],
				r = this.assignIndexedValue(l.i, new u(fa(l.m)));
			return this.deserializeDictionary(l, r);
		}
		deserializePromise(l) {
			let u = Vc(),
				r = this.assignIndexedValue(l.i, u),
				c = this.deserialize(l.f);
			return l.s ? u.resolve(c) : u.reject(c), r.promise;
		}
		deserializeBoxed(l) {
			return this.assignIndexedValue(l.i, Object(this.deserialize(l.f)));
		}
		deserializePlugin(l) {
			let u = this.plugins;
			if (u) {
				let r = fa(l.c);
				for (let c = 0, o = u.length; c < o; c++) {
					let d = u[c];
					if (d.tag === r)
						return this.assignIndexedValue(
							l.i,
							d.deserialize(l.s, this, { id: l.i }),
						);
				}
			}
			throw new V0(l.c);
		}
		deserializePromiseConstructor(l) {
			return this.assignIndexedValue(
				l.i,
				this.assignIndexedValue(l.s, Vc()).promise,
			);
		}
		deserializePromiseResolve(l) {
			let u = this.refs.get(l.i);
			Bn(u, new fi('Promise')), u.resolve(this.deserialize(l.a[1]));
		}
		deserializePromiseReject(l) {
			let u = this.refs.get(l.i);
			Bn(u, new fi('Promise')), u.reject(this.deserialize(l.a[1]));
		}
		deserializeIteratorFactoryInstance(l) {
			this.deserialize(l.a[0]);
			let u = this.deserialize(l.a[1]);
			return W0(u);
		}
		deserializeAsyncIteratorFactoryInstance(l) {
			this.deserialize(l.a[0]);
			let u = this.deserialize(l.a[1]);
			return $0(u);
		}
		deserializeStreamConstructor(l) {
			let u = this.assignIndexedValue(l.i, tr()),
				r = l.a.length;
			if (r) for (let c = 0; c < r; c++) this.deserialize(l.a[c]);
			return u;
		}
		deserializeStreamNext(l) {
			let u = this.refs.get(l.i);
			Bn(u, new fi('Stream')), u.next(this.deserialize(l.f));
		}
		deserializeStreamThrow(l) {
			let u = this.refs.get(l.i);
			Bn(u, new fi('Stream')), u.throw(this.deserialize(l.f));
		}
		deserializeStreamReturn(l) {
			let u = this.refs.get(l.i);
			Bn(u, new fi('Stream')), u.return(this.deserialize(l.f));
		}
		deserializeIteratorFactory(l) {
			this.deserialize(l.f);
		}
		deserializeAsyncIteratorFactory(l) {
			this.deserialize(l.a[1]);
		}
		deserializeTop(l) {
			try {
				return this.deserialize(l);
			} catch (u) {
				throw new j0(u);
			}
		}
		deserialize(l) {
			switch (l.t) {
				case 2:
					return l0[l.s];
				case 0:
					return l.s;
				case 1:
					return fa(l.s);
				case 3:
					return BigInt(l.s);
				case 4:
					return this.refs.get(l.i);
				case 18:
					return this.deserializeReference(l);
				case 9:
					return this.deserializeArray(l);
				case 10:
				case 11:
					return this.deserializeObject(l);
				case 5:
					return this.deserializeDate(l);
				case 6:
					return this.deserializeRegExp(l);
				case 7:
					return this.deserializeSet(l);
				case 8:
					return this.deserializeMap(l);
				case 19:
					return this.deserializeArrayBuffer(l);
				case 16:
				case 15:
					return this.deserializeTypedArray(l);
				case 20:
					return this.deserializeDataView(l);
				case 14:
					return this.deserializeAggregateError(l);
				case 13:
					return this.deserializeError(l);
				case 12:
					return this.deserializePromise(l);
				case 17:
					return a0[l.s];
				case 21:
					return this.deserializeBoxed(l);
				case 25:
					return this.deserializePlugin(l);
				case 22:
					return this.deserializePromiseConstructor(l);
				case 23:
					return this.deserializePromiseResolve(l);
				case 24:
					return this.deserializePromiseReject(l);
				case 28:
					return this.deserializeIteratorFactoryInstance(l);
				case 30:
					return this.deserializeAsyncIteratorFactoryInstance(l);
				case 31:
					return this.deserializeStreamConstructor(l);
				case 32:
					return this.deserializeStreamNext(l);
				case 33:
					return this.deserializeStreamThrow(l);
				case 34:
					return this.deserializeStreamReturn(l);
				case 27:
					return this.deserializeIteratorFactory(l);
				case 29:
					return this.deserializeAsyncIteratorFactory(l);
				default:
					throw new q0(l);
			}
		}
	},
	lS = class extends aS {
		constructor() {
			super(...arguments), (this.mode = 'cross');
		}
		assignIndexedValue(l, u) {
			return this.refs.has(l) || this.refs.set(l, u), u;
		}
	};
function Tc(l, u) {
	let r = ey(u.plugins);
	return new lS({ plugins: r, refs: u.refs }).deserializeTop(l);
}
var iS = class extends eS {
	constructor() {
		super(...arguments), (this.mode = 'vanilla');
	}
};
async function uS(l, u = {}) {
	let r = ey(u.plugins),
		c = new iS({ plugins: r, disabledFeatures: u.disabledFeatures });
	return { t: await c.parseTop(l), f: c.features, m: Array.from(c.marked) };
}
function rS(l) {
	return {
		tag: '$TSR/t/' + l.key,
		test: l.test,
		parse: {
			sync(u, r) {
				return r.parse(l.toSerializable(u));
			},
			async async(u, r) {
				return await r.parse(l.toSerializable(u));
			},
			stream(u, r) {
				return r.parse(l.toSerializable(u));
			},
		},
		serialize: void 0,
		deserialize(u, r) {
			return l.fromSerializable(r.deserialize(u));
		},
	};
}
var vi = {},
	sS = {
		tag: 'seroval-plugins/web/ReadableStreamFactory',
		test(l) {
			return l === vi;
		},
		parse: {
			sync() {},
			async async() {
				return await Promise.resolve(void 0);
			},
			stream() {},
		},
		serialize(l, u) {
			return u.createFunction(
				['d'],
				'new ReadableStream({start:' +
					u.createEffectfulFunction(
						['c'],
						'd.on({next:' +
							u.createEffectfulFunction(['v'], 'try{c.enqueue(v)}catch{}') +
							',throw:' +
							u.createEffectfulFunction(['v'], 'c.error(v)') +
							',return:' +
							u.createEffectfulFunction([], 'try{c.close()}catch{}') +
							'})',
					) +
					'})',
			);
		},
		deserialize() {
			return vi;
		},
	};
function Sp(l) {
	let u = tr(),
		r = l.getReader();
	async function c() {
		try {
			let o = await r.read();
			o.done ? u.return(o.value) : (u.next(o.value), await c());
		} catch (o) {
			u.throw(o);
		}
	}
	return c().catch(() => {}), u;
}
var cS = {
		tag: 'seroval/plugins/web/ReadableStream',
		extends: [sS],
		test(l) {
			return typeof ReadableStream > 'u' ? !1 : l instanceof ReadableStream;
		},
		parse: {
			sync(l, u) {
				return { factory: u.parse(vi), stream: u.parse(tr()) };
			},
			async async(l, u) {
				return { factory: await u.parse(vi), stream: await u.parse(Sp(l)) };
			},
			stream(l, u) {
				return { factory: u.parse(vi), stream: u.parse(Sp(l)) };
			},
		},
		serialize(l, u) {
			return '(' + u.serialize(l.factory) + ')(' + u.serialize(l.stream) + ')';
		},
		deserialize(l, u) {
			let r = u.deserialize(l.stream);
			return new ReadableStream({
				start(c) {
					r.on({
						next(o) {
							try {
								c.enqueue(o);
							} catch {}
						},
						throw(o) {
							c.error(o);
						},
						return() {
							try {
								c.close();
							} catch {}
						},
					});
				},
			});
		},
	},
	oS = cS;
const fS = {
		tag: '$TSR/Error',
		test(l) {
			return l instanceof Error;
		},
		parse: {
			sync(l, u) {
				return { message: u.parse(l.message) };
			},
			async async(l, u) {
				return { message: await u.parse(l.message) };
			},
			stream(l, u) {
				return { message: u.parse(l.message) };
			},
		},
		serialize(l, u) {
			return 'new Error(' + u.serialize(l.message) + ')';
		},
		deserialize(l, u) {
			return new Error(u.deserialize(l.message));
		},
	},
	dS = [fS, oS];
function hS({ promise: l }) {
	const u = Pg(l);
	if (u[Qe].status === 'pending') throw u;
	if (u[Qe].status === 'error') throw u[Qe].error;
	return [u[Qe].data, u];
}
function pS(l) {
	const u = j.jsx(yS, { ...l });
	return l.fallback
		? j.jsx(nt.Suspense, { fallback: l.fallback, children: u })
		: u;
}
function yS(l) {
	const [u] = hS(l);
	return l.children(u);
}
function Pc(l) {
	const u = l.errorComponent ?? er;
	return j.jsx(mS, {
		getResetKey: l.getResetKey,
		onCatch: l.onCatch,
		children: ({ error: r, reset: c }) =>
			r ? nt.createElement(u, { error: r, reset: c }) : l.children,
	});
}
class mS extends nt.Component {
	constructor() {
		super(...arguments), (this.state = { error: null });
	}
	static getDerivedStateFromProps(u) {
		return { resetKey: u.getResetKey() };
	}
	static getDerivedStateFromError(u) {
		return { error: u };
	}
	reset() {
		this.setState({ error: null });
	}
	componentDidUpdate(u, r) {
		r.error && r.resetKey !== this.state.resetKey && this.reset();
	}
	componentDidCatch(u, r) {
		this.props.onCatch && this.props.onCatch(u, r);
	}
	render() {
		return this.props.children({
			error:
				this.state.resetKey !== this.props.getResetKey()
					? null
					: this.state.error,
			reset: () => {
				this.reset();
			},
		});
	}
}
function er({ error: l }) {
	const [u, r] = nt.useState(!1);
	return j.jsxs('div', {
		style: { padding: '.5rem', maxWidth: '100%' },
		children: [
			j.jsxs('div', {
				style: { display: 'flex', alignItems: 'center', gap: '.5rem' },
				children: [
					j.jsx('strong', {
						style: { fontSize: '1rem' },
						children: 'Something went wrong!',
					}),
					j.jsx('button', {
						style: {
							appearance: 'none',
							fontSize: '.6em',
							border: '1px solid currentColor',
							padding: '.1rem .2rem',
							fontWeight: 'bold',
							borderRadius: '.25rem',
						},
						onClick: () => r((c) => !c),
						children: u ? 'Hide Error' : 'Show Error',
					}),
				],
			}),
			j.jsx('div', { style: { height: '.25rem' } }),
			u
				? j.jsx('div', {
						children: j.jsx('pre', {
							style: {
								fontSize: '.7em',
								border: '1px solid red',
								borderRadius: '.25rem',
								padding: '.3rem',
								color: 'red',
								overflow: 'auto',
							},
							children: l.message
								? j.jsx('code', { children: l.message })
								: null,
						}),
					})
				: null,
		],
	});
}
function vS({ children: l, fallback: u = null }) {
	return gS()
		? j.jsx(gi.Fragment, { children: l })
		: j.jsx(gi.Fragment, { children: u });
}
function gS() {
	return gi.useSyncExternalStore(
		SS,
		() => !0,
		() => !1,
	);
}
function SS() {
	return () => {};
}
var Ac = { exports: {} },
	Mc = {},
	Oc = { exports: {} },
	xc = {}; /**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var bp;
function bS() {
	if (bp) return xc;
	bp = 1;
	var l = bi();
	function u(b, _) {
		return (b === _ && (b !== 0 || 1 / b === 1 / _)) || (b !== b && _ !== _);
	}
	var r = typeof Object.is == 'function' ? Object.is : u,
		c = l.useState,
		o = l.useEffect,
		d = l.useLayoutEffect,
		v = l.useDebugValue;
	function y(b, _) {
		var A = _(),
			D = c({ inst: { value: A, getSnapshot: _ } }),
			H = D[0].inst,
			Y = D[1];
		return (
			d(
				function () {
					(H.value = A), (H.getSnapshot = _), h(H) && Y({ inst: H });
				},
				[b, A, _],
			),
			o(
				function () {
					return (
						h(H) && Y({ inst: H }),
						b(function () {
							h(H) && Y({ inst: H });
						})
					);
				},
				[b],
			),
			v(A),
			A
		);
	}
	function h(b) {
		var _ = b.getSnapshot;
		b = b.value;
		try {
			var A = _();
			return !r(b, A);
		} catch {
			return !0;
		}
	}
	function p(b, _) {
		return _();
	}
	var g =
		typeof window > 'u' ||
		typeof window.document > 'u' ||
		typeof window.document.createElement > 'u'
			? p
			: y;
	return (
		(xc.useSyncExternalStore =
			l.useSyncExternalStore !== void 0 ? l.useSyncExternalStore : g),
		xc
	);
}
var _p;
function _S() {
	return _p || ((_p = 1), (Oc.exports = bS())), Oc.exports;
} /**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Rp;
function RS() {
	if (Rp) return Mc;
	Rp = 1;
	var l = bi(),
		u = _S();
	function r(p, g) {
		return (p === g && (p !== 0 || 1 / p === 1 / g)) || (p !== p && g !== g);
	}
	var c = typeof Object.is == 'function' ? Object.is : r,
		o = u.useSyncExternalStore,
		d = l.useRef,
		v = l.useEffect,
		y = l.useMemo,
		h = l.useDebugValue;
	return (
		(Mc.useSyncExternalStoreWithSelector = function (p, g, b, _, A) {
			var D = d(null);
			if (D.current === null) {
				var H = { hasValue: !1, value: null };
				D.current = H;
			} else H = D.current;
			D = y(
				function () {
					function F(W) {
						if (!it) {
							if (
								((it = !0), (K = W), (W = _(W)), A !== void 0 && H.hasValue)
							) {
								var Z = H.value;
								if (A(Z, W)) return (lt = Z);
							}
							return (lt = W);
						}
						if (((Z = lt), c(K, W))) return Z;
						var Q = _(W);
						return A !== void 0 && A(Z, Q) ? ((K = W), Z) : ((K = W), (lt = Q));
					}
					var it = !1,
						K,
						lt,
						P = b === void 0 ? null : b;
					return [
						function () {
							return F(g());
						},
						P === null
							? void 0
							: function () {
									return F(P());
								},
					];
				},
				[g, b, _, A],
			);
			var Y = o(p, D[0], D[1]);
			return (
				v(
					function () {
						(H.hasValue = !0), (H.value = Y);
					},
					[Y],
				),
				h(Y),
				Y
			);
		}),
		Mc
	);
}
var Ep;
function ES() {
	return Ep || ((Ep = 1), (Ac.exports = RS())), Ac.exports;
}
var TS = ES();
function AS(l, u = (r) => r) {
	return TS.useSyncExternalStoreWithSelector(
		l.subscribe,
		() => l.state,
		() => l.state,
		u,
		MS,
	);
}
function MS(l, u) {
	if (Object.is(l, u)) return !0;
	if (typeof l != 'object' || l === null || typeof u != 'object' || u === null)
		return !1;
	if (l instanceof Map && u instanceof Map) {
		if (l.size !== u.size) return !1;
		for (const [c, o] of l) if (!u.has(c) || !Object.is(o, u.get(c))) return !1;
		return !0;
	}
	if (l instanceof Set && u instanceof Set) {
		if (l.size !== u.size) return !1;
		for (const c of l) if (!u.has(c)) return !1;
		return !0;
	}
	if (l instanceof Date && u instanceof Date)
		return l.getTime() === u.getTime();
	const r = Tp(l);
	if (r.length !== Tp(u).length) return !1;
	for (let c = 0; c < r.length; c++)
		if (
			!Object.prototype.hasOwnProperty.call(u, r[c]) ||
			!Object.is(l[r[c]], u[r[c]])
		)
			return !1;
	return !0;
}
function Tp(l) {
	return Object.keys(l).concat(Object.getOwnPropertySymbols(l));
}
const zc = nt.createContext(null);
function iy() {
	return typeof document > 'u'
		? zc
		: window.__TSR_ROUTER_CONTEXT__
			? window.__TSR_ROUTER_CONTEXT__
			: ((window.__TSR_ROUTER_CONTEXT__ = zc), zc);
}
function ee(l) {
	const u = nt.useContext(iy());
	return l?.warn, u;
}
function Ht(l) {
	const u = ee({ warn: l?.router === void 0 }),
		r = l?.router || u,
		c = nt.useRef(void 0);
	return AS(r.__store, (o) => {
		if (l?.select) {
			if (l.structuralSharing ?? r.options.defaultStructuralSharing) {
				const d = Ce(c.current, l.select(o));
				return (c.current = d), d;
			}
			return l.select(o);
		}
		return o;
	});
}
const nr = nt.createContext(void 0),
	OS = nt.createContext(void 0);
function Ke(l) {
	const u = nt.useContext(l.from ? OS : nr);
	return Ht({
		select: (c) => {
			const o = c.matches.find((d) =>
				l.from ? l.from === d.routeId : d.id === u,
			);
			if (
				(oe(
					!((l.shouldThrow ?? !0) && !o),
					`Could not find ${l.from ? `an active match from "${l.from}"` : 'a nearest match!'}`,
				),
				o !== void 0)
			)
				return l.select ? l.select(o) : o;
		},
		structuralSharing: l.structuralSharing,
	});
}
function kc(l) {
	return Ke({
		from: l.from,
		strict: l.strict,
		structuralSharing: l.structuralSharing,
		select: (u) => (l.select ? l.select(u.loaderData) : u.loaderData),
	});
}
function $c(l) {
	const { select: u, ...r } = l;
	return Ke({ ...r, select: (c) => (u ? u(c.loaderDeps) : c.loaderDeps) });
}
function Fc(l) {
	return Ke({
		from: l.from,
		shouldThrow: l.shouldThrow,
		structuralSharing: l.structuralSharing,
		strict: l.strict,
		select: (u) => {
			const r = l.strict === !1 ? u.params : u._strictParams;
			return l.select ? l.select(r) : r;
		},
	});
}
function Wc(l) {
	return Ke({
		from: l.from,
		strict: l.strict,
		shouldThrow: l.shouldThrow,
		structuralSharing: l.structuralSharing,
		select: (u) => (l.select ? l.select(u.search) : u.search),
	});
}
function Ic(l) {
	const u = ee();
	return nt.useCallback(
		(r) => u.navigate({ ...r, from: r.from ?? l?.from }),
		[l?.from, u],
	);
}
var xS = Np();
const Yu = typeof window < 'u' ? nt.useLayoutEffect : nt.useEffect;
function wc(l) {
	const u = nt.useRef({ value: l, prev: null }),
		r = u.current.value;
	return l !== r && (u.current = { value: l, prev: r }), u.current.prev;
}
function zS(l, u, r = {}, c = {}) {
	nt.useEffect(() => {
		if (!l.current || c.disabled || typeof IntersectionObserver != 'function')
			return;
		const o = new IntersectionObserver(([d]) => {
			u(d);
		}, r);
		return (
			o.observe(l.current),
			() => {
				o.disconnect();
			}
		);
	}, [u, r, c.disabled, l]);
}
function wS(l) {
	const u = nt.useRef(null);
	return nt.useImperativeHandle(l, () => u.current, []), u;
}
function DS(l, u) {
	const r = ee(),
		[c, o] = nt.useState(!1),
		d = nt.useRef(!1),
		v = wS(u),
		{
			activeProps: y,
			inactiveProps: h,
			activeOptions: p,
			to: g,
			preload: b,
			preloadDelay: _,
			hashScrollIntoView: A,
			replace: D,
			startTransition: H,
			resetScroll: Y,
			viewTransition: F,
			children: it,
			target: K,
			disabled: lt,
			style: P,
			className: W,
			onClick: Z,
			onFocus: Q,
			onMouseEnter: ut,
			onMouseLeave: ht,
			onTouchStart: St,
			ignoreBlocker: pt,
			params: ne,
			search: Vt,
			hash: wt,
			state: C,
			mask: V,
			reloadDocument: tt,
			unsafeRelative: Tt,
			from: E,
			_fromLocation: B,
			...G
		} = l,
		q = Ht({ select: (_t) => _t.location.search, structuralSharing: !0 }),
		k = l.from,
		ct = nt.useMemo(
			() => ({ ...l, from: k }),
			[
				r,
				q,
				k,
				l._fromLocation,
				l.hash,
				l.to,
				l.search,
				l.params,
				l.state,
				l.mask,
				l.unsafeRelative,
			],
		),
		$ = nt.useMemo(() => r.buildLocation({ ...ct }), [r, ct]),
		Qt = nt.useMemo(() => {
			if (lt) return;
			let _t = $.maskedLocation ? $.maskedLocation.url : $.url,
				Yt = !1;
			return (
				r.origin &&
					(_t.startsWith(r.origin)
						? (_t = _t.replace(r.origin, '') || '/')
						: (Yt = !0)),
				{ href: _t, external: Yt }
			);
		}, [lt, $.maskedLocation, $.url, r.origin]),
		bt = nt.useMemo(() => {
			if (Qt?.external) return Qt.href;
			try {
				return new URL(g), g;
			} catch {}
		}, [g, Qt]),
		ae = l.reloadDocument || bt ? !1 : (b ?? r.options.defaultPreload),
		Xn = _ ?? r.options.defaultPreloadDelay ?? 0,
		on = Ht({
			select: (_t) => {
				if (bt) return !1;
				if (p?.exact) {
					if (!Iv(_t.location.pathname, $.pathname, r.basepath)) return !1;
				} else {
					const Yt = Ju(_t.location.pathname, r.basepath),
						fe = Ju($.pathname, r.basepath);
					if (
						!(
							Yt.startsWith(fe) &&
							(Yt.length === fe.length || Yt[fe.length] === '/')
						)
					)
						return !1;
				}
				return (p?.includeSearch ?? !0) &&
					!ha(_t.location.search, $.search, {
						partial: !p?.exact,
						ignoreUndefined: !p?.explicitUndefined,
					})
					? !1
					: p?.includeHash
						? _t.location.hash === $.hash
						: !0;
			},
		}),
		Ne = nt.useCallback(() => {
			r.preloadRoute({ ...ct }).catch((_t) => {
				console.warn(_t), console.warn(kg);
			});
		}, [r, ct]),
		ol = nt.useCallback(
			(_t) => {
				_t?.isIntersecting && Ne();
			},
			[Ne],
		);
	zS(v, ol, BS, { disabled: !!lt || ae !== 'viewport' }),
		nt.useEffect(() => {
			d.current || (!lt && ae === 'render' && (Ne(), (d.current = !0)));
		}, [lt, Ne, ae]);
	const fl = (_t) => {
		const Yt = _t.currentTarget.target,
			fe = K !== void 0 ? K : Yt;
		if (
			!lt &&
			!HS(_t) &&
			!_t.defaultPrevented &&
			(!fe || fe === '_self') &&
			_t.button === 0
		) {
			_t.preventDefault(),
				xS.flushSync(() => {
					o(!0);
				});
			const fn = r.subscribe('onResolved', () => {
				fn(), o(!1);
			});
			r.navigate({
				...ct,
				replace: D,
				resetScroll: Y,
				hashScrollIntoView: A,
				startTransition: H,
				viewTransition: F,
				ignoreBlocker: pt,
			});
		}
	};
	if (bt)
		return {
			...G,
			ref: v,
			href: bt,
			...(it && { children: it }),
			...(K && { target: K }),
			...(lt && { disabled: lt }),
			...(P && { style: P }),
			...(W && { className: W }),
			...(Z && { onClick: Z }),
			...(Q && { onFocus: Q }),
			...(ut && { onMouseEnter: ut }),
			...(ht && { onMouseLeave: ht }),
			...(St && { onTouchStart: St }),
		};
	const _i = (_t) => {
			lt || (ae && Ne());
		},
		ar = _i,
		Re = (_t) => {
			if (!(lt || !ae))
				if (!Xn) Ne();
				else {
					const Yt = _t.target;
					if (di.has(Yt)) return;
					const fe = setTimeout(() => {
						di.delete(Yt), Ne();
					}, Xn);
					di.set(Yt, fe);
				}
		},
		lr = (_t) => {
			if (lt || !ae || !Xn) return;
			const Yt = _t.target,
				fe = di.get(Yt);
			fe && (clearTimeout(fe), di.delete(Yt));
		},
		Qn = on ? (da(y, {}) ?? CS) : Dc,
		Zn = on ? Dc : (da(h, {}) ?? Dc),
		Kn = [W, Qn.className, Zn.className].filter(Boolean).join(' '),
		Ri = (P || Qn.style || Zn.style) && { ...P, ...Qn.style, ...Zn.style };
	return {
		...G,
		...Qn,
		...Zn,
		href: Qt?.href,
		ref: v,
		onClick: hi([Z, fl]),
		onFocus: hi([Q, _i]),
		onMouseEnter: hi([ut, Re]),
		onMouseLeave: hi([ht, lr]),
		onTouchStart: hi([St, ar]),
		disabled: !!lt,
		target: K,
		...(Ri && { style: Ri }),
		...(Kn && { className: Kn }),
		...(lt && US),
		...(on && NS),
		...(c && LS),
	};
}
const Dc = {},
	CS = { className: 'active' },
	US = { role: 'link', 'aria-disabled': !0 },
	NS = { 'data-status': 'active', 'aria-current': 'page' },
	LS = { 'data-transitioning': 'transitioning' },
	di = new WeakMap(),
	BS = { rootMargin: '100px' },
	hi = (l) => (u) => {
		for (const r of l)
			if (r) {
				if (u.defaultPrevented) return;
				r(u);
			}
	},
	uy = nt.forwardRef((l, u) => {
		const { _asChild: r, ...c } = l,
			{ type: o, ref: d, ...v } = DS(c, u),
			y =
				typeof c.children == 'function'
					? c.children({ isActive: v['data-status'] === 'active' })
					: c.children;
		return (
			r === void 0 && delete v.disabled,
			nt.createElement(r || 'a', { ...v, ref: d }, y)
		);
	});
function HS(l) {
	return !!(l.metaKey || l.altKey || l.ctrlKey || l.shiftKey);
}
let jS = class extends Fp {
	constructor(u) {
		super(u),
			(this.useMatch = (r) =>
				Ke({
					select: r?.select,
					from: this.id,
					structuralSharing: r?.structuralSharing,
				})),
			(this.useRouteContext = (r) =>
				Ke({
					...r,
					from: this.id,
					select: (c) => (r?.select ? r.select(c.context) : c.context),
				})),
			(this.useSearch = (r) =>
				Wc({
					select: r?.select,
					structuralSharing: r?.structuralSharing,
					from: this.id,
				})),
			(this.useParams = (r) =>
				Fc({
					select: r?.select,
					structuralSharing: r?.structuralSharing,
					from: this.id,
				})),
			(this.useLoaderDeps = (r) => $c({ ...r, from: this.id })),
			(this.useLoaderData = (r) => kc({ ...r, from: this.id })),
			(this.useNavigate = () => Ic({ from: this.fullPath })),
			(this.Link = gi.forwardRef((r, c) =>
				j.jsx(uy, { ref: c, from: this.fullPath, ...r }),
			)),
			(this.$$typeof = Symbol.for('react.memo'));
	}
};
function qS(l) {
	return new jS(l);
}
class VS extends $g {
	constructor(u) {
		super(u),
			(this.useMatch = (r) =>
				Ke({
					select: r?.select,
					from: this.id,
					structuralSharing: r?.structuralSharing,
				})),
			(this.useRouteContext = (r) =>
				Ke({
					...r,
					from: this.id,
					select: (c) => (r?.select ? r.select(c.context) : c.context),
				})),
			(this.useSearch = (r) =>
				Wc({
					select: r?.select,
					structuralSharing: r?.structuralSharing,
					from: this.id,
				})),
			(this.useParams = (r) =>
				Fc({
					select: r?.select,
					structuralSharing: r?.structuralSharing,
					from: this.id,
				})),
			(this.useLoaderDeps = (r) => $c({ ...r, from: this.id })),
			(this.useLoaderData = (r) => kc({ ...r, from: this.id })),
			(this.useNavigate = () => Ic({ from: this.fullPath })),
			(this.Link = gi.forwardRef((r, c) =>
				j.jsx(uy, { ref: c, from: this.fullPath, ...r }),
			)),
			(this.$$typeof = Symbol.for('react.memo'));
	}
}
function YS(l) {
	return new VS(l);
}
function Fu(l) {
	return typeof l == 'object'
		? new Ap(l, { silent: !0 }).createRoute(l)
		: new Ap(l, { silent: !0 }).createRoute;
}
class Ap {
	constructor(u, r) {
		(this.path = u),
			(this.createRoute = (c) => {
				this.silent;
				const o = qS(c);
				return (o.isRoot = !1), o;
			}),
			(this.silent = r?.silent);
	}
}
class Mp {
	constructor(u) {
		(this.useMatch = (r) =>
			Ke({
				select: r?.select,
				from: this.options.id,
				structuralSharing: r?.structuralSharing,
			})),
			(this.useRouteContext = (r) =>
				Ke({
					from: this.options.id,
					select: (c) => (r?.select ? r.select(c.context) : c.context),
				})),
			(this.useSearch = (r) =>
				Wc({
					select: r?.select,
					structuralSharing: r?.structuralSharing,
					from: this.options.id,
				})),
			(this.useParams = (r) =>
				Fc({
					select: r?.select,
					structuralSharing: r?.structuralSharing,
					from: this.options.id,
				})),
			(this.useLoaderDeps = (r) => $c({ ...r, from: this.options.id })),
			(this.useLoaderData = (r) => kc({ ...r, from: this.options.id })),
			(this.useNavigate = () => {
				const r = ee();
				return Ic({ from: r.routesById[this.options.id].fullPath });
			}),
			(this.options = u),
			(this.$$typeof = Symbol.for('react.memo'));
	}
}
function Op(l) {
	return typeof l == 'object' ? new Mp(l) : (u) => new Mp({ id: l, ...u });
}
function ry(l, u) {
	let r, c, o, d;
	const v = () => (
			r ||
				(r = l()
					.then((h) => {
						(r = void 0), (c = h[u]);
					})
					.catch((h) => {
						if (
							((o = h),
							Fv(o) &&
								o instanceof Error &&
								typeof window < 'u' &&
								typeof sessionStorage < 'u')
						) {
							const p = `tanstack_router_reload:${o.message}`;
							sessionStorage.getItem(p) ||
								(sessionStorage.setItem(p, '1'), (d = !0));
						}
					})),
			r
		),
		y = function (p) {
			if (d) throw (window.location.reload(), new Promise(() => {}));
			if (o) throw o;
			if (!c) throw v();
			return nt.createElement(c, p);
		};
	return (y.preload = v), y;
}
function GS() {
	const l = ee(),
		u = nt.useRef({ router: l, mounted: !1 }),
		[r, c] = nt.useState(!1),
		{ hasPendingMatches: o, isLoading: d } = Ht({
			select: (b) => ({
				isLoading: b.isLoading,
				hasPendingMatches: b.matches.some((_) => _.status === 'pending'),
			}),
			structuralSharing: !0,
		}),
		v = wc(d),
		y = d || r || o,
		h = wc(y),
		p = d || o,
		g = wc(p);
	return (
		(l.startTransition = (b) => {
			c(!0),
				nt.startTransition(() => {
					b(), c(!1);
				});
		}),
		nt.useEffect(() => {
			const b = l.history.subscribe(l.load),
				_ = l.buildLocation({
					to: l.latestLocation.pathname,
					search: !0,
					params: !0,
					hash: !0,
					state: !0,
					_includeValidateSearch: !0,
				});
			return (
				Vn(l.latestLocation.href) !== Vn(_.href) &&
					l.commitLocation({ ..._, replace: !0 }),
				() => {
					b();
				}
			);
		}, [l, l.history]),
		Yu(() => {
			if (
				(typeof window < 'u' && l.ssr) ||
				(u.current.router === l && u.current.mounted)
			)
				return;
			(u.current = { router: l, mounted: !0 }),
				(async () => {
					try {
						await l.load();
					} catch (_) {
						console.error(_);
					}
				})();
		}, [l]),
		Yu(() => {
			v && !d && l.emit({ type: 'onLoad', ...pa(l.state) });
		}, [v, l, d]),
		Yu(() => {
			g && !p && l.emit({ type: 'onBeforeRouteMount', ...pa(l.state) });
		}, [p, g, l]),
		Yu(() => {
			h &&
				!y &&
				(l.emit({ type: 'onResolved', ...pa(l.state) }),
				l.__store.setState((b) => ({
					...b,
					status: 'idle',
					resolvedLocation: b.location,
				})),
				Og(l));
		}, [y, h, l]),
		null
	);
}
function XS(l) {
	const u = Ht({
		select: (r) => `not-found-${r.location.pathname}-${r.status}`,
	});
	return j.jsx(Pc, {
		getResetKey: () => u,
		onCatch: (r, c) => {
			if (Ue(r)) l.onCatch?.(r, c);
			else throw r;
		},
		errorComponent: ({ error: r }) => {
			if (Ue(r)) return l.fallback?.(r);
			throw r;
		},
		children: l.children,
	});
}
function QS() {
	return j.jsx('p', { children: 'Not Found' });
}
function nl(l) {
	return j.jsx(j.Fragment, { children: l.children });
}
function sy(l, u, r) {
	return u.options.notFoundComponent
		? j.jsx(u.options.notFoundComponent, { data: r })
		: l.options.defaultNotFoundComponent
			? j.jsx(l.options.defaultNotFoundComponent, { data: r })
			: j.jsx(QS, {});
}
function ZS({ children: l }) {
	const u = ee();
	return u.isServer
		? j.jsx('script', {
				nonce: u.options.ssr?.nonce,
				className: '$tsr',
				dangerouslySetInnerHTML: {
					__html:
						[l].filter(Boolean).join(`
`) + ';$_TSR.c()',
				},
			})
		: null;
}
function KS() {
	const l = ee();
	if (
		!l.isScrollRestoring ||
		!l.isServer ||
		(typeof l.options.scrollRestoration == 'function' &&
			!l.options.scrollRestoration({ location: l.latestLocation }))
	)
		return null;
	const r = (l.options.getScrollRestorationKey || jc)(l.latestLocation),
		c = r !== jc(l.latestLocation) ? r : void 0,
		o = { storageKey: Pu, shouldScrollRestoration: !0 };
	return (
		c && (o.key = c),
		j.jsx(ZS, { children: `(${qp.toString()})(${JSON.stringify(o)})` })
	);
}
const cy = nt.memo(function ({ matchId: u }) {
	const r = ee(),
		c = Ht({
			select: (F) => {
				const it = F.matches.find((K) => K.id === u);
				return (
					oe(it),
					{
						routeId: it.routeId,
						ssr: it.ssr,
						_displayPending: it._displayPending,
					}
				);
			},
			structuralSharing: !0,
		}),
		o = r.routesById[c.routeId],
		d = o.options.pendingComponent ?? r.options.defaultPendingComponent,
		v = d ? j.jsx(d, {}) : null,
		y = o.options.errorComponent ?? r.options.defaultErrorComponent,
		h = o.options.onCatch ?? r.options.defaultOnCatch,
		p = o.isRoot
			? (o.options.notFoundComponent ??
				r.options.notFoundRoute?.options.component)
			: o.options.notFoundComponent,
		g = c.ssr === !1 || c.ssr === 'data-only',
		b =
			(!o.isRoot || o.options.wrapInSuspense || g) &&
			(o.options.wrapInSuspense ??
				d ??
				(o.options.errorComponent?.preload || g))
				? nt.Suspense
				: nl,
		_ = y ? Pc : nl,
		A = p ? XS : nl,
		D = Ht({ select: (F) => F.loadedAt }),
		H = Ht({
			select: (F) => {
				const it = F.matches.findIndex((K) => K.id === u);
				return F.matches[it - 1]?.routeId;
			},
		}),
		Y = o.isRoot ? (o.options.shellComponent ?? nl) : nl;
	return j.jsxs(Y, {
		children: [
			j.jsx(nr.Provider, {
				value: u,
				children: j.jsx(b, {
					fallback: v,
					children: j.jsx(_, {
						getResetKey: () => D,
						errorComponent: y || er,
						onCatch: (F, it) => {
							if (Ue(F)) throw F;
							h?.(F, it);
						},
						children: j.jsx(A, {
							fallback: (F) => {
								if (
									!p ||
									(F.routeId && F.routeId !== c.routeId) ||
									(!F.routeId && !o.isRoot)
								)
									throw F;
								return nt.createElement(p, F);
							},
							children:
								g || c._displayPending
									? j.jsx(vS, {
											fallback: v,
											children: j.jsx(xp, { matchId: u }),
										})
									: j.jsx(xp, { matchId: u }),
						}),
					}),
				}),
			}),
			H === _e && r.options.scrollRestoration
				? j.jsxs(j.Fragment, { children: [j.jsx(JS, {}), j.jsx(KS, {})] })
				: null,
		],
	});
});
function JS() {
	const l = ee(),
		u = nt.useRef(void 0);
	return j.jsx(
		'script',
		{
			suppressHydrationWarning: !0,
			ref: (r) => {
				r &&
					(u.current === void 0 || u.current.href !== l.latestLocation.href) &&
					(l.emit({ type: 'onRendered', ...pa(l.state) }),
					(u.current = l.latestLocation));
			},
		},
		l.latestLocation.state.__TSR_key,
	);
}
const xp = nt.memo(function ({ matchId: u }) {
		const r = ee(),
			{
				match: c,
				key: o,
				routeId: d,
			} = Ht({
				select: (h) => {
					const p = h.matches.find((D) => D.id === u),
						g = p.routeId,
						_ = (
							r.routesById[g].options.remountDeps ??
							r.options.defaultRemountDeps
						)?.({
							routeId: g,
							loaderDeps: p.loaderDeps,
							params: p._strictParams,
							search: p._strictSearch,
						});
					return {
						key: _ ? JSON.stringify(_) : void 0,
						routeId: g,
						match: {
							id: p.id,
							status: p.status,
							error: p.error,
							_forcePending: p._forcePending,
							_displayPending: p._displayPending,
						},
					};
				},
				structuralSharing: !0,
			}),
			v = r.routesById[d],
			y = nt.useMemo(() => {
				const h = v.options.component ?? r.options.defaultComponent;
				return h ? j.jsx(h, {}, o) : j.jsx(oy, {});
			}, [o, v.options.component, r.options.defaultComponent]);
		if (c._displayPending)
			throw r.getMatch(c.id)?._nonReactive.displayPendingPromise;
		if (c._forcePending) throw r.getMatch(c.id)?._nonReactive.minPendingPromise;
		if (c.status === 'pending') {
			const h = v.options.pendingMinMs ?? r.options.defaultPendingMinMs;
			if (h) {
				const p = r.getMatch(c.id);
				if (p && !p._nonReactive.minPendingPromise && !r.isServer) {
					const g = ya();
					(p._nonReactive.minPendingPromise = g),
						setTimeout(() => {
							g.resolve(), (p._nonReactive.minPendingPromise = void 0);
						}, h);
				}
			}
			throw r.getMatch(c.id)?._nonReactive.loadPromise;
		}
		if (c.status === 'notFound') return oe(Ue(c.error)), sy(r, v, c.error);
		if (c.status === 'redirected')
			throw (oe(je(c.error)), r.getMatch(c.id)?._nonReactive.loadPromise);
		if (c.status === 'error') {
			if (r.isServer) {
				const h =
					(v.options.errorComponent ?? r.options.defaultErrorComponent) || er;
				return j.jsx(h, {
					error: c.error,
					reset: void 0,
					info: { componentStack: '' },
				});
			}
			throw c.error;
		}
		return y;
	}),
	oy = nt.memo(function () {
		const u = ee(),
			r = nt.useContext(nr),
			c = Ht({ select: (p) => p.matches.find((g) => g.id === r)?.routeId }),
			o = u.routesById[c],
			d = Ht({
				select: (p) => {
					const b = p.matches.find((_) => _.id === r);
					return oe(b), b.globalNotFound;
				},
			}),
			v = Ht({
				select: (p) => {
					const g = p.matches,
						b = g.findIndex((_) => _.id === r);
					return g[b + 1]?.id;
				},
			}),
			y = u.options.defaultPendingComponent
				? j.jsx(u.options.defaultPendingComponent, {})
				: null;
		if (d) return sy(u, o, void 0);
		if (!v) return null;
		const h = j.jsx(cy, { matchId: v });
		return r === _e ? j.jsx(nt.Suspense, { fallback: y, children: h }) : h;
	});
function PS() {
	const l = ee(),
		u = l.options.defaultPendingComponent
			? j.jsx(l.options.defaultPendingComponent, {})
			: null,
		r = l.isServer || (typeof document < 'u' && l.ssr) ? nl : nt.Suspense,
		c = j.jsxs(r, {
			fallback: u,
			children: [!l.isServer && j.jsx(GS, {}), j.jsx(kS, {})],
		});
	return l.options.InnerWrap ? j.jsx(l.options.InnerWrap, { children: c }) : c;
}
function kS() {
	const l = ee(),
		u = Ht({ select: (o) => o.matches[0]?.id }),
		r = Ht({ select: (o) => o.loadedAt }),
		c = u ? j.jsx(cy, { matchId: u }) : null;
	return j.jsx(nr.Provider, {
		value: u,
		children: l.options.disableGlobalCatchBoundary
			? c
			: j.jsx(Pc, {
					getResetKey: () => r,
					errorComponent: er,
					onCatch: (o) => {
						o.message || o.toString();
					},
					children: c,
				}),
	});
}
const $S = (l) => new FS(l);
class FS extends Xg {
	constructor(u) {
		super(u);
	}
}
typeof globalThis < 'u'
	? ((globalThis.createFileRoute = Fu), (globalThis.createLazyFileRoute = Op))
	: typeof window < 'u' &&
		((window.createFileRoute = Fu), (window.createLazyFileRoute = Op));
function WS({ router: l, children: u, ...r }) {
	Object.keys(r).length > 0 &&
		l.update({
			...l.options,
			...r,
			context: { ...l.options.context, ...r.context },
		});
	const c = iy(),
		o = j.jsx(c.Provider, { value: l, children: u });
	return l.options.Wrap ? j.jsx(l.options.Wrap, { children: o }) : o;
}
function IS({ router: l, ...u }) {
	return j.jsx(WS, { router: l, ...u, children: j.jsx(PS, {}) });
}
function fy({ tag: l, attrs: u, children: r }) {
	switch (l) {
		case 'title':
			return j.jsx('title', {
				...u,
				suppressHydrationWarning: !0,
				children: r,
			});
		case 'meta':
			return j.jsx('meta', { ...u, suppressHydrationWarning: !0 });
		case 'link':
			return j.jsx('link', { ...u, suppressHydrationWarning: !0 });
		case 'style':
			return j.jsx('style', { ...u, dangerouslySetInnerHTML: { __html: r } });
		case 'script':
			return j.jsx(t1, { attrs: u, children: r });
		default:
			return null;
	}
}
function t1({ attrs: l, children: u }) {
	const r = ee();
	return (
		nt.useEffect(() => {
			if (l?.src) {
				const c = (() => {
					try {
						const v = document.baseURI || window.location.href;
						return new URL(l.src, v).href;
					} catch {
						return l.src;
					}
				})();
				if (
					Array.from(document.querySelectorAll('script[src]')).find(
						(v) => v.src === c,
					)
				)
					return;
				const d = document.createElement('script');
				for (const [v, y] of Object.entries(l))
					v !== 'suppressHydrationWarning' &&
						y !== void 0 &&
						y !== !1 &&
						d.setAttribute(v, typeof y == 'boolean' ? '' : String(y));
				return (
					document.head.appendChild(d),
					() => {
						d.parentNode && d.parentNode.removeChild(d);
					}
				);
			}
			if (typeof u == 'string') {
				const c = typeof l?.type == 'string' ? l.type : 'text/javascript',
					o = typeof l?.nonce == 'string' ? l.nonce : void 0;
				if (
					Array.from(document.querySelectorAll('script:not([src])')).find(
						(y) => {
							if (!(y instanceof HTMLScriptElement)) return !1;
							const h = y.getAttribute('type') ?? 'text/javascript',
								p = y.getAttribute('nonce') ?? void 0;
							return y.textContent === u && h === c && p === o;
						},
					)
				)
					return;
				const v = document.createElement('script');
				if (((v.textContent = u), l))
					for (const [y, h] of Object.entries(l))
						y !== 'suppressHydrationWarning' &&
							h !== void 0 &&
							h !== !1 &&
							v.setAttribute(y, typeof h == 'boolean' ? '' : String(h));
				return (
					document.head.appendChild(v),
					() => {
						v.parentNode && v.parentNode.removeChild(v);
					}
				);
			}
		}, [l, u]),
		r.isServer
			? l?.src && typeof l.src == 'string'
				? j.jsx('script', { ...l, suppressHydrationWarning: !0 })
				: typeof u == 'string'
					? j.jsx('script', {
							...l,
							dangerouslySetInnerHTML: { __html: u },
							suppressHydrationWarning: !0,
						})
					: null
			: null
	);
}
const e1 = () => {
	const l = ee(),
		u = Ht({ select: (y) => y.matches.map((h) => h.meta).filter(Boolean) }),
		r = nt.useMemo(() => {
			const y = [],
				h = {};
			let p;
			for (let g = u.length - 1; g >= 0; g--) {
				const b = u[g];
				for (let _ = b.length - 1; _ >= 0; _--) {
					const A = b[_];
					if (A)
						if (A.title) p || (p = { tag: 'title', children: A.title });
						else {
							const D = A.name ?? A.property;
							if (D) {
								if (h[D]) continue;
								h[D] = !0;
							}
							y.push({ tag: 'meta', attrs: { ...A } });
						}
				}
			}
			return p && y.push(p), y.reverse(), y;
		}, [u]),
		c = Ht({
			select: (y) => {
				const h = y.matches
						.map((b) => b.links)
						.filter(Boolean)
						.flat(1)
						.map((b) => ({ tag: 'link', attrs: { ...b } })),
					p = l.ssr?.manifest,
					g = y.matches
						.map((b) => p?.routes[b.routeId]?.assets ?? [])
						.filter(Boolean)
						.flat(1)
						.filter((b) => b.tag === 'link')
						.map((b) => ({
							tag: 'link',
							attrs: { ...b.attrs, suppressHydrationWarning: !0 },
						}));
				return [...h, ...g];
			},
			structuralSharing: !0,
		}),
		o = Ht({
			select: (y) => {
				const h = [];
				return (
					y.matches
						.map((p) => l.looseRoutesById[p.routeId])
						.forEach((p) =>
							l.ssr?.manifest?.routes[p.id]?.preloads
								?.filter(Boolean)
								.forEach((g) => {
									h.push({
										tag: 'link',
										attrs: { rel: 'modulepreload', href: g },
									});
								}),
						),
					h
				);
			},
			structuralSharing: !0,
		}),
		d = Ht({
			select: (y) =>
				y.matches
					.map((h) => h.styles)
					.flat(1)
					.filter(Boolean)
					.map(({ children: h, ...p }) => ({
						tag: 'style',
						attrs: p,
						children: h,
					})),
			structuralSharing: !0,
		}),
		v = Ht({
			select: (y) =>
				y.matches
					.map((h) => h.headScripts)
					.flat(1)
					.filter(Boolean)
					.map(({ children: h, ...p }) => ({
						tag: 'script',
						attrs: { ...p },
						children: h,
					})),
			structuralSharing: !0,
		});
	return a1([...r, ...o, ...c, ...d, ...v], (y) => JSON.stringify(y));
};
function n1() {
	return e1().map((u) =>
		nt.createElement(fy, { ...u, key: `tsr-meta-${JSON.stringify(u)}` }),
	);
}
function a1(l, u) {
	const r = new Set();
	return l.filter((c) => {
		const o = u(c);
		return r.has(o) ? !1 : (r.add(o), !0);
	});
}
const l1 = () => {
	const l = ee(),
		u = Ht({
			select: (o) => {
				const d = [],
					v = l.ssr?.manifest;
				return v
					? (o.matches
							.map((y) => l.looseRoutesById[y.routeId])
							.forEach((y) =>
								v.routes[y.id]?.assets
									?.filter((h) => h.tag === 'script')
									.forEach((h) => {
										d.push({
											tag: 'script',
											attrs: h.attrs,
											children: h.children,
										});
									}),
							),
						d)
					: [];
			},
			structuralSharing: !0,
		}),
		{ scripts: r } = Ht({
			select: (o) => ({
				scripts: o.matches
					.map((d) => d.scripts)
					.flat(1)
					.filter(Boolean)
					.map(({ children: d, ...v }) => ({
						tag: 'script',
						attrs: { ...v, suppressHydrationWarning: !0 },
						children: d,
					})),
			}),
			structuralSharing: !0,
		}),
		c = [...r, ...u];
	return j.jsx(j.Fragment, {
		children: c.map((o, d) =>
			nt.createElement(fy, { ...o, key: `tsr-scripts-${o.tag}-${d}` }),
		),
	});
};
function dy(l) {
	if (Array.isArray(l)) return l.flatMap((g) => dy(g));
	if (typeof l != 'string') return [];
	const u = [];
	let r = 0,
		c,
		o,
		d,
		v,
		y;
	const h = () => {
			for (; r < l.length && /\s/.test(l.charAt(r)); ) r += 1;
			return r < l.length;
		},
		p = () => ((o = l.charAt(r)), o !== '=' && o !== ';' && o !== ',');
	for (; r < l.length; ) {
		for (c = r, y = !1; h(); )
			if (((o = l.charAt(r)), o === ',')) {
				for (d = r, r += 1, h(), v = r; r < l.length && p(); ) r += 1;
				r < l.length && l.charAt(r) === '='
					? ((y = !0), (r = v), u.push(l.slice(c, d)), (c = r))
					: (r = d + 1);
			} else r += 1;
		(!y || r >= l.length) && u.push(l.slice(c));
	}
	return u;
}
function i1(l) {
	return l instanceof Headers
		? new Headers(l)
		: Array.isArray(l)
			? new Headers(l)
			: typeof l == 'object'
				? new Headers(l)
				: new Headers();
}
function u1(...l) {
	return l.reduce((u, r) => {
		const c = i1(r);
		for (const [o, d] of c.entries())
			o === 'set-cookie'
				? dy(d).forEach((y) => u.append('set-cookie', y))
				: u.set(o, d);
		return u;
	}, new Headers());
}
function r1(l, u) {
	(l.id = u.i),
		(l.__beforeLoadContext = u.b),
		(l.loaderData = u.l),
		(l.status = u.s),
		(l.ssr = u.ssr),
		(l.updatedAt = u.u),
		(l.error = u.e);
}
async function s1(l) {
	oe(window.$_TSR);
	const u = l.options.serializationAdapters;
	if (u?.length) {
		const _ = new Map();
		u.forEach((A) => {
			_.set(A.key, A.fromSerializable);
		}),
			(window.$_TSR.t = _),
			window.$_TSR.buffer.forEach((A) => A());
	}
	(window.$_TSR.initialized = !0), oe(window.$_TSR.router);
	const {
		manifest: r,
		dehydratedData: c,
		lastMatchId: o,
	} = window.$_TSR.router;
	l.ssr = { manifest: r };
	const d = l.matchRoutes(l.state.location),
		v = Promise.all(
			d.map((_) => {
				const A = l.looseRoutesById[_.routeId];
				return l.loadRouteChunk(A);
			}),
		);
	function y(_) {
		const D =
			l.looseRoutesById[_.routeId].options.pendingMinMs ??
			l.options.defaultPendingMinMs;
		if (D) {
			const H = ya();
			(_._nonReactive.minPendingPromise = H),
				(_._forcePending = !0),
				setTimeout(() => {
					H.resolve(),
						l.updateMatch(
							_.id,
							(Y) => (
								(Y._nonReactive.minPendingPromise = void 0),
								{ ...Y, _forcePending: void 0 }
							),
						);
				}, D);
		}
	}
	let h;
	d.forEach((_) => {
		const A = window.$_TSR.router.matches.find((D) => D.i === _.id);
		if (!A) {
			(_._nonReactive.dehydrated = !1), (_.ssr = !1);
			return;
		}
		r1(_, A),
			(_._nonReactive.dehydrated = _.ssr !== !1),
			(_.ssr === 'data-only' || _.ssr === !1) &&
				h === void 0 &&
				((h = _.index), y(_));
	}),
		l.__store.setState((_) => ({ ..._, matches: d })),
		await l.options.hydrate?.(c),
		await Promise.all(
			l.state.matches.map(async (_) => {
				const A = l.looseRoutesById[_.routeId],
					H = l.state.matches[_.index - 1]?.context ?? l.options.context;
				if (A.options.context) {
					const K = {
						deps: _.loaderDeps,
						params: _.params,
						context: H ?? {},
						location: l.state.location,
						navigate: (lt) =>
							l.navigate({ ...lt, _fromLocation: l.state.location }),
						buildLocation: l.buildLocation,
						cause: _.cause,
						abortController: _.abortController,
						preload: !1,
						matches: d,
					};
					_.__routeContext = A.options.context(K) ?? void 0;
				}
				_.context = { ...H, ..._.__routeContext, ..._.__beforeLoadContext };
				const Y = {
						matches: l.state.matches,
						match: _,
						params: _.params,
						loaderData: _.loaderData,
					},
					F = await A.options.head?.(Y),
					it = await A.options.scripts?.(Y);
				(_.meta = F?.meta),
					(_.links = F?.links),
					(_.headScripts = F?.scripts),
					(_.styles = F?.styles),
					(_.scripts = it);
			}),
		);
	const p = d[d.length - 1].id !== o;
	if (!d.some((_) => _.ssr === !1) && !p)
		return (
			d.forEach((_) => {
				_._nonReactive.dehydrated = void 0;
			}),
			v
		);
	const b = Promise.resolve()
		.then(() => l.load())
		.catch((_) => {
			console.error('Error during router hydration:', _);
		});
	if (p) {
		const _ = d[1];
		oe(_),
			y(_),
			(_._displayPending = !0),
			(_._nonReactive.displayPendingPromise = b),
			b.then(() => {
				il(() => {
					l.__store.state.status === 'pending' &&
						l.__store.setState((A) => ({
							...A,
							status: 'idle',
							resolvedLocation: A.location,
						})),
						l.updateMatch(_.id, (A) => ({
							...A,
							_displayPending: void 0,
							displayPendingPromise: void 0,
						}));
				});
			});
	}
	return v;
}
const c1 = '__TSS_CONTEXT',
	Yc = Symbol.for('TSS_SERVER_FUNCTION'),
	zp = Symbol.for('TSS_SERVER_FUNCTION_FACTORY'),
	o1 = 'x-tss-serialized',
	hy = () => window.__TSS_START_OPTIONS__;
function f1() {
	return [...(hy().serializationAdapters?.map(rS) ?? []), ...dS];
}
let rl = null;
async function d1(l, u, r) {
	rl || (rl = f1());
	const c = u[0];
	if (Si(c) && c.method) {
		const o = c,
			d = o.data instanceof FormData ? 'formData' : 'payload',
			v = new Headers({
				'x-tsr-redirect': 'manual',
				...(d === 'payload'
					? {
							'content-type': 'application/json',
							accept: 'application/x-ndjson, application/json',
						}
					: {}),
				...(o.headers instanceof Headers
					? Object.fromEntries(o.headers.entries())
					: o.headers),
			});
		if (o.method === 'GET') {
			if (d === 'formData')
				throw new Error('FormData is not supported with GET requests');
			const y = Vp({ payload: await py(o) });
			y && (l.includes('?') ? (l += `&${y}`) : (l += `?${y}`));
		}
		return (
			l.includes('?') ? (l += '&createServerFn') : (l += '?createServerFn'),
			await wp(async () =>
				r(l, {
					method: o.method,
					headers: v,
					signal: o.signal,
					...(await h1(o)),
				}),
			)
		);
	}
	return await wp(() =>
		r(l, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(u),
		}),
	);
}
async function py(l) {
	const u = {};
	return (
		l.data && (u.data = l.data),
		l.context && Object.keys(l.context).length > 0 && (u.context = l.context),
		yy(u)
	);
}
async function yy(l) {
	return JSON.stringify(await Promise.resolve(uS(l, { plugins: rl })));
}
async function h1(l) {
	return l.method === 'POST'
		? l.data instanceof FormData
			? (l.data.set(c1, await yy(l.context)), { body: l.data })
			: { body: await py(l) }
		: {};
}
async function wp(l) {
	const u = await (async () => {
			try {
				return await l();
			} catch (o) {
				if (o instanceof Response) return o;
				throw o;
			}
		})(),
		r = u.headers.get('content-type');
	oe(r);
	const c = !!u.headers.get(o1);
	if (!u.ok) {
		if (c && r.includes('application/json')) {
			const o = await u.json();
			throw Tc(o, { plugins: rl });
		}
		throw new Error(await u.text());
	}
	if (c) {
		let o;
		if (r.includes('application/x-ndjson')) {
			const d = new Map();
			o = await p1({
				response: u,
				onMessage: (v) => Tc(v, { refs: d, plugins: rl }),
				onError(v, y) {
					console.error(v, y);
				},
			});
		}
		if (r.includes('application/json')) {
			const d = await u.json();
			o = Tc(d, { plugins: rl });
		}
		if ((oe(o), o instanceof Error)) throw o;
		return o;
	}
	if (r.includes('application/json')) {
		const o = await u.json(),
			d = Ug(o);
		if (d) throw d;
		if (Ue(o)) throw o;
		return o;
	}
	return u;
}
async function p1({ response: l, onMessage: u, onError: r }) {
	if (!l.body) throw new Error('No response body');
	const c = l.body.pipeThrough(new TextDecoderStream()).getReader();
	let o = '',
		d = !1,
		v;
	for (; !d; ) {
		const { value: y, done: h } = await c.read();
		if ((y && (o += y), o.length === 0 && h))
			throw new Error('Stream ended before first object');
		if (
			o.endsWith(`
`)
		) {
			const p = o
					.split(`
`)
					.filter(Boolean),
				g = p[0];
			if (!g) throw new Error('No JSON line in the first chunk');
			(v = JSON.parse(g)),
				(d = !0),
				(o = p.slice(1).join(`
`));
		} else {
			const p = o.indexOf(`
`);
			if (p >= 0) {
				const g = o.slice(0, p).trim();
				(o = o.slice(p + 1)), g.length > 0 && ((v = JSON.parse(g)), (d = !0));
			}
		}
	}
	return (
		(async () => {
			try {
				for (;;) {
					const { value: y, done: h } = await c.read();
					y && (o += y);
					const p = o.lastIndexOf(`
`);
					if (p >= 0) {
						const g = o.slice(0, p);
						o = o.slice(p + 1);
						const b = g
							.split(`
`)
							.filter(Boolean);
						for (const _ of b)
							try {
								u(JSON.parse(_));
							} catch (A) {
								r?.(`Invalid JSON line: ${_}`, A);
							}
					}
					if (h) break;
				}
			} catch (y) {
				r?.('Stream processing error:', y);
			}
		})(),
		u(v)
	);
}
var Cc;
function Dp(l) {
	return l.replace(/^\/|\/$/g, '');
}
function my(l) {
	if (!Cc) {
		const c = Dp('/'),
			o = Dp('/_serverFn');
		Cc = `${c ? `/${c}` : ''}/${o}/`;
	}
	const u = Cc + l;
	return Object.assign((...c) => d1(u, c, fetch), {
		url: u,
		functionId: l,
		[Yc]: !0,
	});
}
const y1 = {
		key: '$TSS/serverfn',
		test: (l) => (typeof l != 'function' || !(Yc in l) ? !1 : !!l[Yc]),
		toSerializable: ({ functionId: l }) => ({ functionId: l }),
		fromSerializable: ({ functionId: l }) => my(l),
	},
	to = YS({
		head: () => ({
			meta: [
				{ charSet: 'utf-8' },
				{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
				{ title: 'TanStack Start Starter' },
			],
		}),
		component: m1,
	});
function m1() {
	return j.jsx(v1, { children: j.jsx(oy, {}) });
}
function v1({ children: l }) {
	return j.jsxs('html', {
		children: [
			j.jsx('head', { children: j.jsx(n1, {}) }),
			j.jsxs('body', { children: [l, j.jsx(l1, {})] }),
		],
	});
}
const g1 = 'modulepreload',
	S1 = function (l) {
		return '/' + l;
	},
	Cp = {},
	vy = function (u, r, c) {
		let o = Promise.resolve();
		if (r && r.length > 0) {
			let h = function (p) {
				return Promise.all(
					p.map((g) =>
						Promise.resolve(g).then(
							(b) => ({ status: 'fulfilled', value: b }),
							(b) => ({ status: 'rejected', reason: b }),
						),
					),
				);
			};
			document.getElementsByTagName('link');
			const v = document.querySelector('meta[property=csp-nonce]'),
				y = v?.nonce || v?.getAttribute('nonce');
			o = h(
				r.map((p) => {
					if (((p = S1(p)), p in Cp)) return;
					Cp[p] = !0;
					const g = p.endsWith('.css'),
						b = g ? '[rel="stylesheet"]' : '';
					if (document.querySelector(`link[href="${p}"]${b}`)) return;
					const _ = document.createElement('link');
					if (
						((_.rel = g ? 'stylesheet' : g1),
						g || (_.as = 'script'),
						(_.crossOrigin = ''),
						(_.href = p),
						y && _.setAttribute('nonce', y),
						document.head.appendChild(_),
						g)
					)
						return new Promise((A, D) => {
							_.addEventListener('load', A),
								_.addEventListener('error', () =>
									D(new Error(`Unable to preload CSS for ${p}`)),
								);
						});
				}),
			);
		}
		function d(v) {
			const y = new Event('vite:preloadError', { cancelable: !0 });
			if (((y.payload = v), window.dispatchEvent(y), !y.defaultPrevented))
				throw v;
		}
		return o.then((v) => {
			for (const y of v || []) y.status === 'rejected' && d(y.reason);
			return u().catch(d);
		});
	},
	b1 = () => vy(() => import('./signin-D1l5R635.js'), []),
	_1 = Fu('/signin')({ component: ry(b1, 'component') }),
	R1 = () => {
		throw new Error(
			'createServerOnlyFn() functions can only be called on the server!',
		);
	},
	Gc = (l, u) => {
		const r = u || l || {};
		typeof r.method > 'u' && (r.method = 'GET');
		const c = {
			options: r,
			middleware: (d) => {
				const v = [...(r.middleware || [])];
				d.map((p) => {
					zp in p
						? p.options.middleware && v.push(...p.options.middleware)
						: v.push(p);
				});
				const y = { ...r, middleware: v },
					h = Gc(void 0, y);
				return (h[zp] = !0), h;
			},
			inputValidator: (d) => {
				const v = { ...r, inputValidator: d };
				return Gc(void 0, v);
			},
			handler: (...d) => {
				const [v, y] = d,
					h = { ...r, extractedFn: v, serverFn: y },
					p = [...(h.middleware || []), M1(h)];
				return Object.assign(
					async (g) =>
						Up(p, 'client', {
							...v,
							...h,
							data: g?.data,
							headers: g?.headers,
							signal: g?.signal,
							context: {},
						}).then((b) => {
							if (b.error) throw b.error;
							return b.result;
						}),
					{
						...v,
						__executeServer: async (g, b) => {
							const _ = R1(),
								A = { ...v, ...g, context: { ..._, ...g.context }, signal: b };
							return Up(p, 'server', A).then((D) => ({
								result: D.result,
								error: D.error,
								context: D.sendContext,
							}));
						},
					},
				);
			},
		};
		return Object.assign((d) => ({ ...c, options: { ...c.options, ...d } }), c);
	};
async function Up(l, u, r) {
	const c = hy().functionMiddleware || [],
		o = E1([...c, ...l]),
		d = async (v) => {
			const y = o.shift();
			if (!y) return v;
			'inputValidator' in y.options &&
				y.options.inputValidator &&
				u === 'server' &&
				(v.data = await A1(y.options.inputValidator, v.data));
			const h =
				u === 'client' && 'client' in y.options
					? y.options.client
					: y.options.server;
			return h
				? T1(h, v, async (p) =>
						d(p).catch((g) => {
							if (je(g) || Ue(g)) return { ...p, error: g };
							throw g;
						}),
					)
				: d(v);
		};
	return d({
		...r,
		headers: r.headers || {},
		sendContext: r.sendContext || {},
		context: r.context || {},
	});
}
function E1(l) {
	const u = new Set(),
		r = [],
		c = (o) => {
			o.forEach((d) => {
				d.options.middleware && c(d.options.middleware),
					u.has(d) || (u.add(d), r.push(d));
			});
		};
	return c(l), r;
}
const T1 = async (l, u, r) =>
	l({
		...u,
		next: async (c = {}) =>
			r({
				...u,
				...c,
				context: { ...u.context, ...c.context },
				sendContext: { ...u.sendContext, ...(c.sendContext ?? {}) },
				headers: u1(u.headers, c.headers),
				result:
					c.result !== void 0 ? c.result : c instanceof Response ? c : u.result,
				error: c.error ?? u.error,
			}),
	});
function A1(l, u) {
	if (l == null) return {};
	if ('~standard' in l) {
		const r = l['~standard'].validate(u);
		if (r instanceof Promise) throw new Error('Async validation not supported');
		if (r.issues) throw new Error(JSON.stringify(r.issues, void 0, 2));
		return r.value;
	}
	if ('parse' in l) return l.parse(u);
	if (typeof l == 'function') return l(u);
	throw new Error('Invalid validator type!');
}
function M1(l) {
	return {
		_types: void 0,
		options: {
			inputValidator: l.inputValidator,
			client: async ({ next: u, sendContext: r, ...c }) => {
				const o = { ...c, context: r },
					d = await l.extractedFn?.(o);
				return u(d);
			},
			server: async ({ next: u, ...r }) => {
				const c = await l.serverFn?.(r);
				return u({ ...r, result: c });
			},
		},
	};
}
const O1 = () => vy(() => import('./index-DEHA1yP-.js'), []),
	x1 = my('src_routes_index_tsx--getCount_createServerFn_handler'),
	z1 = Gc({ method: 'GET' }).handler(x1),
	w1 = Fu('/')({
		component: ry(O1, 'component'),
		loader: async () => await z1(),
	}),
	D1 = _1.update({ id: '/signin', path: '/signin', getParentRoute: () => to }),
	C1 = w1.update({ id: '/', path: '/', getParentRoute: () => to }),
	U1 = { IndexRoute: C1, SigninRoute: D1 },
	N1 = to._addFileChildren(U1);
function L1() {
	return $S({ routeTree: N1, scrollRestoration: !0 });
}
async function B1() {
	const l = await L1();
	let u;
	return (
		(u = []),
		(window.__TSS_START_OPTIONS__ = { serializationAdapters: u }),
		u.push(y1),
		(l.options.serializationAdapters = u),
		l.state.matches.length || (await s1(l)),
		l
	);
}
let Uc;
function H1() {
	return (
		Uc || (Uc = B1()),
		j.jsx(pS, { promise: Uc, children: (l) => j.jsx(IS, { router: l }) })
	);
}
nt.startTransition(() => {
	Xv.hydrateRoot(document, j.jsx(nt.StrictMode, { children: j.jsx(H1, {}) }));
});
export { w1 as R, my as a, Gc as c, j, ee as u };
