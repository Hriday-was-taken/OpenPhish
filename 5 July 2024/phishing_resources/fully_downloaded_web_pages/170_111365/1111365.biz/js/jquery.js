function SignalR() {
	var n = $.connection("/myPath");
	n.start().done(function() {});
	n.received(function() {})
}

function AddBack() {
	if ($("#divtranBack", parent.document).length == 0) $("body", parent.document).append("<div id='divtranBack' style='width:100%;height:100%;position:absolute;left:0px;top:0px;filter:alpha(Opacity=60);-moz-opacity:0.2;opacity:0.2;background-color:black;z-index:2;'><\/div>")
}(function(n, t) {
	function yu(n) {
		var t = wt[n] = {};
		return i.each(n.split(h), function(n, i) {
			t[i] = !0
		}), t
	}

	function ui(n, r, u) {
		if (u === t && n.nodeType === 1) {
			var f = "data-" + r.replace(sr, "-$1").toLowerCase();
			if (u = n.getAttribute(f), typeof u == "string") {
				try {
					u = u === "true" ? !0 : u === "false" ? !1 : u === "null" ? null : +u + "" === u ? +u : or.test(u) ? i.parseJSON(u) : u
				} catch (e) {}
				i.data(n, r, u)
			} else u = t
		}
		return u
	}

	function at(n) {
		var t;
		for (t in n)
			if ((t !== "data" || !i.isEmptyObject(n[t])) && t !== "toJSON") return !1;
		return !0
	}

	function v() {
		return !1
	}

	function g() {
		return !0
	}

	function k(n) {
		return !n || !n.parentNode || n.parentNode.nodeType === 11
	}

	function fi(n, t) {
		do n = n[t]; while (n && n.nodeType !== 1);
		return n
	}

	function ei(n, t, r) {
		if (t = t || 0, i.isFunction(t)) return i.grep(n, function(n, i) {
			var u = !!t.call(n, i, n);
			return u === r
		});
		if (t.nodeType) return i.grep(n, function(n) {
			return n === t === r
		});
		if (typeof t == "string") {
			var u = i.grep(n, function(n) {
				return n.nodeType === 1
			});
			if (fe.test(t)) return i.filter(t, u, !r);
			t = i.filter(t, u)
		}
		return i.grep(n, function(n) {
			return i.inArray(n, t) >= 0 === r
		})
	}

	function oi(n) {
		var i = kr.split("|"),
			t = n.createDocumentFragment();
		if (t.createElement)
			while (i.length) t.createElement(i.pop());
		return t
	}

	function pu(n, t) {
		return n.getElementsByTagName(t)[0] || n.appendChild(n.ownerDocument.createElement(t))
	}

	function si(n, t) {
		if (t.nodeType === 1 && i.hasData(n)) {
			var u, f, o, s = i._data(n),
				r = i._data(t, s),
				e = s.events;
			if (e) {
				delete r.handle;
				r.events = {};
				for (u in e)
					for (f = 0, o = e[u].length; f < o; f++) i.event.add(t, u, e[u][f])
			}
			r.data && (r.data = i.extend({}, r.data))
		}
	}

	function hi(n, t) {
		var r;
		t.nodeType === 1 && (t.clearAttributes && t.clearAttributes(), t.mergeAttributes && t.mergeAttributes(n), r = t.nodeName.toLowerCase(), r === "object" ? (t.parentNode && (t.outerHTML = n.outerHTML), i.support.html5Clone && n.innerHTML && !i.trim(t.innerHTML) && (t.innerHTML = n.innerHTML)) : r === "input" && nu.test(n.type) ? (t.defaultChecked = t.checked = n.checked, t.value !== n.value && (t.value = n.value)) : r === "option" ? t.selected = n.defaultSelected : r === "input" || r === "textarea" ? t.defaultValue = n.defaultValue : r === "script" && t.text !== n.text && (t.text = n.text), t.removeAttribute(i.expando))
	}

	function nt(n) {
		return typeof n.getElementsByTagName != "undefined" ? n.getElementsByTagName("*") : typeof n.querySelectorAll != "undefined" ? n.querySelectorAll("*") : []
	}

	function ci(n) {
		nu.test(n.type) && (n.defaultChecked = n.checked)
	}

	function li(n, t) {
		if (t in n) return t;
		for (var r = t.charAt(0).toUpperCase() + t.slice(1), u = t, i = fu.length; i--;)
			if (t = fu[i] + r, t in n) return t;
		return u
	}

	function tt(n, t) {
		return n = t || n, i.css(n, "display") === "none" || !i.contains(n.ownerDocument, n)
	}

	function ai(n, t) {
		for (var r, o, e = [], f = 0, s = n.length; f < s; f++)(r = n[f], r.style) && (e[f] = i._data(r, "olddisplay"), t ? (!e[f] && r.style.display === "none" && (r.style.display = ""), r.style.display === "" && tt(r) && (e[f] = i._data(r, "olddisplay", wi(r.nodeName)))) : (o = u(r, "display"), !e[f] && o !== "none" && i._data(r, "olddisplay", o)));
		for (f = 0; f < s; f++)(r = n[f], r.style) && (t && r.style.display !== "none" && r.style.display !== "" || (r.style.display = t ? e[f] || "" : "none"));
		return n
	}

	function vi(n, t, i) {
		var r = be.exec(t);
		return r ? Math.max(0, r[1] - (i || 0)) + (r[2] || "px") : t
	}

	function yi(n, t, r, f) {
		for (var e = r === (f ? "border" : "content") ? 4 : t === "width" ? 1 : 0, o = 0; e < 4; e += 2) r === "margin" && (o += i.css(n, r + c[e], !0)), f ? (r === "content" && (o -= parseFloat(u(n, "padding" + c[e])) || 0), r !== "margin" && (o -= parseFloat(u(n, "border" + c[e] + "Width")) || 0)) : (o += parseFloat(u(n, "padding" + c[e])) || 0, r !== "padding" && (o += parseFloat(u(n, "border" + c[e] + "Width")) || 0));
		return o
	}

	function pi(n, t, r) {
		var f = t === "width" ? n.offsetWidth : n.offsetHeight,
			e = !0,
			o = i.support.boxSizing && i.css(n, "boxSizing") === "border-box";
		if (f <= 0 || f == null) {
			if (f = u(n, t), (f < 0 || f == null) && (f = n.style[t]), ot.test(f)) return f;
			e = o && (i.support.boxSizingReliable || f === n.style[t]);
			f = parseFloat(f) || 0
		}
		return f + yi(n, t, r || (o ? "border" : "content"), e) + "px"
	}

	function wi(n) {
		if (ti[n]) return ti[n];
		var f = i("<" + n + ">").appendTo(r.body),
			t = f.css("display");
		return f.remove(), (t === "none" || t === "") && (y = r.body.appendChild(y || i.extend(r.createElement("iframe"), {
			frameBorder: 0,
			width: 0,
			height: 0
		})), p && y.createElement || (p = (y.contentWindow || y.contentDocument).document, p.write("<!doctype html><html><body>"), p.close()), f = p.body.appendChild(p.createElement(n)), t = u(f, "display"), r.body.removeChild(y)), ti[n] = t, t
	}

	function vt(n, t, r, u) {
		var f;
		if (i.isArray(t)) i.each(t, function(t, i) {
			r || to.test(n) ? u(n, i) : vt(n + "[" + (typeof i == "object" ? t : "") + "]", i, r, u)
		});
		else if (r || i.type(t) !== "object") u(n, t);
		else
			for (f in t) vt(n + "[" + f + "]", t[f], r, u)
	}

	function bi(n) {
		return function(t, r) {
			typeof t != "string" && (r = t, t = "*");
			var u, o, f, s = t.toLowerCase().split(h),
				e = 0,
				c = s.length;
			if (i.isFunction(r))
				for (; e < c; e++) u = s[e], f = /^\+/.test(u), f && (u = u.substr(1) || "*"), o = n[u] = n[u] || [], o[f ? "unshift" : "push"](r)
		}
	}

	function it(n, i, r, u, f, e) {
		f = f || i.dataTypes[0];
		e = e || {};
		e[f] = !0;
		for (var o, s = n[f], h = 0, l = s ? s.length : 0, c = n === ii; h < l && (c || !o); h++) o = s[h](i, r, u), typeof o == "string" && (!c || e[o] ? o = t : (i.dataTypes.unshift(o), o = it(n, i, r, u, o, e)));
		return (c || !o) && !e["*"] && (o = it(n, i, r, u, "*", e)), o
	}

	function ki(n, r) {
		var u, f, e = i.ajaxSettings.flatOptions || {};
		for (u in r) r[u] !== t && ((e[u] ? n : f || (f = {}))[u] = r[u]);
		f && i.extend(!0, n, f)
	}

	function wu(n, i, r) {
		var o, u, e, s, h = n.contents,
			f = n.dataTypes,
			c = n.responseFields;
		for (u in c) u in r && (i[c[u]] = r[u]);
		while (f[0] === "*") f.shift(), o === t && (o = n.mimeType || i.getResponseHeader("content-type"));
		if (o)
			for (u in h)
				if (h[u] && h[u].test(o)) {
					f.unshift(u);
					break
				}
		if (f[0] in r) e = f[0];
		else {
			for (u in r) {
				if (!f[0] || n.converters[u + " " + f[0]]) {
					e = u;
					break
				}
				s || (s = u)
			}
			e = e || s
		}
		if (e) return e !== f[0] && f.unshift(e), r[e]
	}

	function bu(n, t) {
		var i, o, r, e, s = n.dataTypes.slice(),
			f = s[0],
			u = {},
			h = 0;
		if (n.dataFilter && (t = n.dataFilter(t, n.dataType)), s[1])
			for (i in n.converters) u[i.toLowerCase()] = n.converters[i];
		for (; r = s[++h];)
			if (r !== "*") {
				if (f !== "*" && f !== r) {
					if (i = u[f + " " + r] || u["* " + r], !i)
						for (o in u)
							if (e = o.split(" "), e[1] === r && (i = u[f + " " + e[0]] || u["* " + e[0]], i)) {
								i === !0 ? i = u[o] : u[o] !== !0 && (r = e[0], s.splice(h--, 0, r));
								break
							}
					if (i !== !0)
						if (i && n.throws) t = i(t);
						else try {
							t = i(t)
						} catch (c) {
							return {
								state: "parsererror",
								error: i ? c : "No conversion from " + f + " to " + r
							}
						}
				}
				f = r
			}
		return {
			state: "success",
			data: t
		}
	}

	function di() {
		try {
			return new n.XMLHttpRequest
		} catch (t) {}
	}

	function ku() {
		try {
			return new n.ActiveXObject("Microsoft.XMLHTTP")
		} catch (t) {}
	}

	function gi() {
		return setTimeout(function() {
			b = t
		}, 0), b = i.now()
	}

	function du(n, t) {
		i.each(t, function(t, i) {
			for (var u = (d[t] || []).concat(d["*"]), r = 0, f = u.length; r < f; r++)
				if (u[r].call(n, t, i)) return
		})
	}

	function nr(n, t, r) {
		var e, o = 0,
			c = lt.length,
			f = i.Deferred().always(function() {
				delete h.elem
			}),
			h = function() {
				for (var o = b || gi(), t = Math.max(0, u.startTime + u.duration - o), s = t / u.duration || 0, i = 1 - s, r = 0, e = u.tweens.length; r < e; r++) u.tweens[r].run(i);
				return f.notifyWith(n, [u, i, t]), i < 1 && e ? t : (f.resolveWith(n, [u]), !1)
			},
			u = f.promise({
				elem: n,
				props: i.extend({}, t),
				opts: i.extend(!0, {
					specialEasing: {}
				}, r),
				originalProperties: t,
				originalOptions: r,
				startTime: b || gi(),
				duration: r.duration,
				tweens: [],
				createTween: function(t, r) {
					var f = i.Tween(n, u.opts, t, r, u.opts.specialEasing[t] || u.opts.easing);
					return u.tweens.push(f), f
				},
				stop: function(t) {
					for (var i = 0, r = t ? u.tweens.length : 0; i < r; i++) u.tweens[i].run(1);
					return t ? f.resolveWith(n, [u, t]) : f.rejectWith(n, [u, t]), this
				}
			}),
			s = u.props;
		for (gu(s, u.opts.specialEasing); o < c; o++)
			if (e = lt[o].call(u, n, s, u.opts), e) return e;
		return du(u, s), i.isFunction(u.opts.start) && u.opts.start.call(n, u), i.fx.timer(i.extend(h, {
			anim: u,
			queue: u.opts.queue,
			elem: n
		})), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
	}

	function gu(n, t) {
		var r, f, e, u, o;
		for (r in n)
			if (f = i.camelCase(r), e = t[f], u = n[r], i.isArray(u) && (e = u[1], u = n[r] = u[0]), r !== f && (n[f] = u, delete n[r]), o = i.cssHooks[f], o && "expand" in o) {
				u = o.expand(u);
				delete n[f];
				for (r in u) r in n || (n[r] = u[r], t[r] = e)
			} else t[f] = e
	}

	function nf(n, t, r) {
		var o, u, a, v, s, y, l, f, b, h = this,
			e = n.style,
			p = {},
			w = [],
			c = n.nodeType && tt(n);
		r.queue || (f = i._queueHooks(n, "fx"), f.unqueued == null && (f.unqueued = 0, b = f.empty.fire, f.empty.fire = function() {
			f.unqueued || b()
		}), f.unqueued++, h.always(function() {
			h.always(function() {
				f.unqueued--;
				i.queue(n, "fx").length || f.empty.fire()
			})
		}));
		n.nodeType === 1 && ("height" in t || "width" in t) && (r.overflow = [e.overflow, e.overflowX, e.overflowY], i.css(n, "display") === "inline" && i.css(n, "float") === "none" && (!i.support.inlineBlockNeedsLayout || wi(n.nodeName) === "inline" ? e.display = "inline-block" : e.zoom = 1));
		r.overflow && (e.overflow = "hidden", i.support.shrinkWrapBlocks || h.done(function() {
			e.overflow = r.overflow[0];
			e.overflowX = r.overflow[1];
			e.overflowY = r.overflow[2]
		}));
		for (o in t)
			if (a = t[o], ao.exec(a)) {
				if (delete t[o], y = y || a === "toggle", a === (c ? "hide" : "show")) continue;
				w.push(o)
			}
		if (v = w.length, v)
			for (s = i._data(n, "fxshow") || i._data(n, "fxshow", {}), ("hidden" in s) && (c = s.hidden), y && (s.hidden = !c), c ? i(n).show() : h.done(function() {
					i(n).hide()
				}), h.done(function() {
					var t;
					i.removeData(n, "fxshow", !0);
					for (t in p) i.style(n, t, p[t])
				}), o = 0; o < v; o++) u = w[o], l = h.createTween(u, c ? s[u] : 0), p[u] = s[u] || i.style(n, u), u in s || (s[u] = l.start, c && (l.end = l.start, l.start = u === "width" || u === "height" ? 1 : 0))
	}

	function f(n, t, i, r, u) {
		return new f.prototype.init(n, t, i, r, u)
	}

	function rt(n, t) {
		var r, i = {
				height: n
			},
			u = 0;
		for (t = t ? 1 : 0; u < 4; u += 2 - t) r = c[u], i["margin" + r] = i["padding" + r] = n;
		return t && (i.opacity = i.width = n), i
	}

	function tr(n) {
		return i.isWindow(n) ? n : n.nodeType === 9 ? n.defaultView || n.parentWindow : !1
	}
	var ir, ut, r = n.document,
		tf = n.location,
		rf = n.navigator,
		uf = n.jQuery,
		ff = n.$,
		rr = Array.prototype.push,
		o = Array.prototype.slice,
		ur = Array.prototype.indexOf,
		ef = Object.prototype.toString,
		yt = Object.prototype.hasOwnProperty,
		pt = String.prototype.trim,
		i = function(n, t) {
			return new i.fn.init(n, t, ir)
		},
		ft = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,
		of = /\S/,
		h = /\s+/,
		sf = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
		hf = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
		fr = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
		cf = /^[\],:{}\s]*$/,
		lf = /(?:^|:|,)(?:\s*\[)+/g,
		af = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
		vf = /"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,
		yf = /^-ms-/,
		pf = /-([\da-z])/gi,
		wf = function(n, t) {
			return (t + "").toUpperCase()
		},
		et = function() {
			r.addEventListener ? (r.removeEventListener("DOMContentLoaded", et, !1), i.ready()) : r.readyState === "complete" && (r.detachEvent("onreadystatechange", et), i.ready())
		},
		er = {},
		wt, or, sr, w, ht, vu, ri;
	i.fn = i.prototype = {
		constructor: i,
		init: function(n, u, f) {
			var e, o, s;
			if (!n) return this;
			if (n.nodeType) return this.context = this[0] = n, this.length = 1, this;
			if (typeof n == "string") {
				if (e = n.charAt(0) === "<" && n.charAt(n.length - 1) === ">" && n.length >= 3 ? [null, n, null] : hf.exec(n), e && (e[1] || !u)) {
					if (e[1]) return u = u instanceof i ? u[0] : u, s = u && u.nodeType ? u.ownerDocument || u : r, n = i.parseHTML(e[1], s, !0), fr.test(e[1]) && i.isPlainObject(u) && this.attr.call(n, u, !0), i.merge(this, n);
					if (o = r.getElementById(e[2]), o && o.parentNode) {
						if (o.id !== e[2]) return f.find(n);
						this.length = 1;
						this[0] = o
					}
					return this.context = r, this.selector = n, this
				}
				return !u || u.jquery ? (u || f).find(n) : this.constructor(u).find(n)
			}
			return i.isFunction(n) ? f.ready(n) : (n.selector !== t && (this.selector = n.selector, this.context = n.context), i.makeArray(n, this))
		},
		selector: "",
		jquery: "1.8.3",
		length: 0,
		size: function() {
			return this.length
		},
		toArray: function() {
			return o.call(this)
		},
		get: function(n) {
			return n == null ? this.toArray() : n < 0 ? this[this.length + n] : this[n]
		},
		pushStack: function(n, t, r) {
			var u = i.merge(this.constructor(), n);
			return u.prevObject = this, u.context = this.context, t === "find" ? u.selector = this.selector + (this.selector ? " " : "") + r : t && (u.selector = this.selector + "." + t + "(" + r + ")"), u
		},
		each: function(n, t) {
			return i.each(this, n, t)
		},
		ready: function(n) {
			return i.ready.promise().done(n), this
		},
		eq: function(n) {
			return n = +n, n === -1 ? this.slice(n) : this.slice(n, n + 1)
		},
		first: function() {
			return this.eq(0)
		},
		last: function() {
			return this.eq(-1)
		},
		slice: function() {
			return this.pushStack(o.apply(this, arguments), "slice", o.call(arguments).join(","))
		},
		map: function(n) {
			return this.pushStack(i.map(this, function(t, i) {
				return n.call(t, i, t)
			}))
		},
		end: function() {
			return this.prevObject || this.constructor(null)
		},
		push: rr,
		sort: [].sort,
		splice: [].splice
	};
	i.fn.init.prototype = i.fn;
	i.extend = i.fn.extend = function() {
		var o, e, u, r, s, h, n = arguments[0] || {},
			f = 1,
			l = arguments.length,
			c = !1;
		for (typeof n == "boolean" && (c = n, n = arguments[1] || {}, f = 2), typeof n != "object" && !i.isFunction(n) && (n = {}), l === f && (n = this, --f); f < l; f++)
			if ((o = arguments[f]) != null)
				for (e in o)(u = n[e], r = o[e], n !== r) && (c && r && (i.isPlainObject(r) || (s = i.isArray(r))) ? (s ? (s = !1, h = u && i.isArray(u) ? u : []) : h = u && i.isPlainObject(u) ? u : {}, n[e] = i.extend(c, h, r)) : r !== t && (n[e] = r));
		return n
	};
	i.extend({
		noConflict: function(t) {
			return n.$ === i && (n.$ = ff), t && n.jQuery === i && (n.jQuery = uf), i
		},
		isReady: !1,
		readyWait: 1,
		holdReady: function(n) {
			n ? i.readyWait++ : i.ready(!0)
		},
		ready: function(n) {
			if (n === !0 ? !--i.readyWait : !i.isReady) {
				if (!r.body) return setTimeout(i.ready, 1);
				(i.isReady = !0, n !== !0 && --i.readyWait > 0) || (ut.resolveWith(r, [i]), i.fn.trigger && i(r).trigger("ready").off("ready"))
			}
		},
		isFunction: function(n) {
			return i.type(n) === "function"
		},
		isArray: Array.isArray || function(n) {
			return i.type(n) === "array"
		},
		isWindow: function(n) {
			return n != null && n == n.window
		},
		isNumeric: function(n) {
			return !isNaN(parseFloat(n)) && isFinite(n)
		},
		type: function(n) {
			return n == null ? String(n) : er[ef.call(n)] || "object"
		},
		isPlainObject: function(n) {
			if (!n || i.type(n) !== "object" || n.nodeType || i.isWindow(n)) return !1;
			try {
				if (n.constructor && !yt.call(n, "constructor") && !yt.call(n.constructor.prototype, "isPrototypeOf")) return !1
			} catch (u) {
				return !1
			}
			var r;
			for (r in n);
			return r === t || yt.call(n, r)
		},
		isEmptyObject: function(n) {
			var t;
			for (t in n) return !1;
			return !0
		},
		error: function(n) {
			throw new Error(n);
		},
		parseHTML: function(n, t, u) {
			var f;
			return !n || typeof n != "string" ? null : (typeof t == "boolean" && (u = t, t = 0), t = t || r, (f = fr.exec(n)) ? [t.createElement(f[1])] : (f = i.buildFragment([n], t, u ? null : []), i.merge([], (f.cacheable ? i.clone(f.fragment) : f.fragment).childNodes)))
		},
		parseJSON: function(t) {
			if (!t || typeof t != "string") return null;
			if (t = i.trim(t), n.JSON && n.JSON.parse) return n.JSON.parse(t);
			if (cf.test(t.replace(af, "@").replace(vf, "]").replace(lf, ""))) return new Function("return " + t)();
			i.error("Invalid JSON: " + t)
		},
		parseXML: function(r) {
			var u, f;
			if (!r || typeof r != "string") return null;
			try {
				n.DOMParser ? (f = new DOMParser, u = f.parseFromString(r, "text/xml")) : (u = new ActiveXObject("Microsoft.XMLDOM"), u.async = "false", u.loadXML(r))
			} catch (e) {
				u = t
			}
			return (!u || !u.documentElement || u.getElementsByTagName("parsererror").length) && i.error("Invalid XML: " + r), u
		},
		noop: function() {},
		globalEval: function(t) {
			t && of.test(t) && (n.execScript || function(t) {
				n.eval.call(n, t)
			})(t)
		},
		camelCase: function(n) {
			return n.replace(yf, "ms-").replace(pf, wf)
		},
		nodeName: function(n, t) {
			return n.nodeName && n.nodeName.toLowerCase() === t.toLowerCase()
		},
		each: function(n, r, u) {
			var f, e = 0,
				o = n.length,
				s = o === t || i.isFunction(n);
			if (u) {
				if (s) {
					for (f in n)
						if (r.apply(n[f], u) === !1) break
				} else
					for (; e < o;)
						if (r.apply(n[e++], u) === !1) break
			} else if (s) {
				for (f in n)
					if (r.call(n[f], f, n[f]) === !1) break
			} else
				for (; e < o;)
					if (r.call(n[e], e, n[e++]) === !1) break;
			return n
		},
		trim: pt && !pt.call("﻿ ") ? function(n) {
			return n == null ? "" : pt.call(n)
		} : function(n) {
			return n == null ? "" : (n + "").replace(sf, "")
		},
		makeArray: function(n, t) {
			var r, u = t || [];
			return n != null && (r = i.type(n), n.length == null || r === "string" || r === "function" || r === "regexp" || i.isWindow(n) ? rr.call(u, n) : i.merge(u, n)), u
		},
		inArray: function(n, t, i) {
			var r;
			if (t) {
				if (ur) return ur.call(t, n, i);
				for (r = t.length, i = i ? i < 0 ? Math.max(0, r + i) : i : 0; i < r; i++)
					if (i in t && t[i] === n) return i
			}
			return -1
		},
		merge: function(n, i) {
			var f = i.length,
				u = n.length,
				r = 0;
			if (typeof f == "number")
				for (; r < f; r++) n[u++] = i[r];
			else
				while (i[r] !== t) n[u++] = i[r++];
			return n.length = u, n
		},
		grep: function(n, t, i) {
			var u, f = [],
				r = 0,
				e = n.length;
			for (i = !!i; r < e; r++) u = !!t(n[r], r), i !== u && f.push(n[r]);
			return f
		},
		map: function(n, r, u) {
			var f, h, e = [],
				s = 0,
				o = n.length,
				c = n instanceof i || o !== t && typeof o == "number" && (o > 0 && n[0] && n[o - 1] || o === 0 || i.isArray(n));
			if (c)
				for (; s < o; s++) f = r(n[s], s, u), f != null && (e[e.length] = f);
			else
				for (h in n) f = r(n[h], h, u), f != null && (e[e.length] = f);
			return e.concat.apply([], e)
		},
		guid: 1,
		proxy: function(n, r) {
			var f, e, u;
			return typeof r == "string" && (f = n[r], r = n, n = f), i.isFunction(n) ? (e = o.call(arguments, 2), u = function() {
				return n.apply(r, e.concat(o.call(arguments)))
			}, u.guid = n.guid = n.guid || i.guid++, u) : t
		},
		access: function(n, r, u, f, e, o, s) {
			var c, l = u == null,
				h = 0,
				a = n.length;
			if (u && typeof u == "object") {
				for (h in u) i.access(n, r, h, u[h], 1, o, f);
				e = 1
			} else if (f !== t) {
				if (c = s === t && i.isFunction(f), l && (c ? (c = r, r = function(n, t, r) {
						return c.call(i(n), r)
					}) : (r.call(n, f), r = null)), r)
					for (; h < a; h++) r(n[h], u, c ? f.call(n[h], h, r(n[h], u)) : f, s);
				e = 1
			}
			return e ? n : l ? r.call(n) : a ? r(n[0], u) : o
		},
		now: function() {
			return (new Date).getTime()
		}
	});
	i.ready.promise = function(t) {
		if (!ut)
			if (ut = i.Deferred(), r.readyState === "complete") setTimeout(i.ready, 1);
			else if (r.addEventListener) r.addEventListener("DOMContentLoaded", et, !1), n.addEventListener("load", i.ready, !1);
		else {
			r.attachEvent("onreadystatechange", et);
			n.attachEvent("onload", i.ready);
			var u = !1;
			try {
				u = n.frameElement == null && r.documentElement
			} catch (e) {}
			u && u.doScroll && function f() {
				if (!i.isReady) {
					try {
						u.doScroll("left")
					} catch (n) {
						return setTimeout(f, 50)
					}
					i.ready()
				}
			}()
		}
		return ut.promise(t)
	};
	i.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(n, t) {
		er["[object " + t + "]"] = t.toLowerCase()
	});
	ir = i(r);
	wt = {};
	i.Callbacks = function(n) {
		n = typeof n == "string" ? wt[n] || yu(n) : i.extend({}, n);
		var f, c, o, l, s, e, r = [],
			u = !n.once && [],
			a = function(t) {
				for (f = n.memory && t, c = !0, e = l || 0, l = 0, s = r.length, o = !0; r && e < s; e++)
					if (r[e].apply(t[0], t[1]) === !1 && n.stopOnFalse) {
						f = !1;
						break
					}
				o = !1;
				r && (u ? u.length && a(u.shift()) : f ? r = [] : h.disable())
			},
			h = {
				add: function() {
					if (r) {
						var t = r.length;
						(function u(t) {
							i.each(t, function(t, f) {
								var e = i.type(f);
								e === "function" ? (!n.unique || !h.has(f)) && r.push(f) : f && f.length && e !== "string" && u(f)
							})
						})(arguments);
						o ? s = r.length : f && (l = t, a(f))
					}
					return this
				},
				remove: function() {
					return r && i.each(arguments, function(n, t) {
						for (var u;
							(u = i.inArray(t, r, u)) > -1;) r.splice(u, 1), o && (u <= s && s--, u <= e && e--)
					}), this
				},
				has: function(n) {
					return i.inArray(n, r) > -1
				},
				empty: function() {
					return r = [], this
				},
				disable: function() {
					return r = u = f = t, this
				},
				disabled: function() {
					return !r
				},
				lock: function() {
					return u = t, f || h.disable(), this
				},
				locked: function() {
					return !u
				},
				fireWith: function(n, t) {
					return t = t || [], t = [n, t.slice ? t.slice() : t], r && (!c || u) && (o ? u.push(t) : a(t)), this
				},
				fire: function() {
					return h.fireWith(this, arguments), this
				},
				fired: function() {
					return !!c
				}
			};
		return h
	};
	i.extend({
		Deferred: function(n) {
			var u = [
					["resolve", "done", i.Callbacks("once memory"), "resolved"],
					["reject", "fail", i.Callbacks("once memory"), "rejected"],
					["notify", "progress", i.Callbacks("memory")]
				],
				f = "pending",
				r = {
					state: function() {
						return f
					},
					always: function() {
						return t.done(arguments).fail(arguments), this
					},
					then: function() {
						var n = arguments;
						return i.Deferred(function(r) {
							i.each(u, function(u, f) {
								var e = f[0],
									o = n[u];
								t[f[1]](i.isFunction(o) ? function() {
									var n = o.apply(this, arguments);
									n && i.isFunction(n.promise) ? n.promise().done(r.resolve).fail(r.reject).progress(r.notify) : r[e + "With"](this === t ? r : this, [n])
								} : r[e])
							});
							n = null
						}).promise()
					},
					promise: function(n) {
						return n != null ? i.extend(n, r) : r
					}
				},
				t = {};
			return r.pipe = r.then, i.each(u, function(n, i) {
				var e = i[2],
					o = i[3];
				r[i[1]] = e.add;
				o && e.add(function() {
					f = o
				}, u[n ^ 1][2].disable, u[2][2].lock);
				t[i[0]] = e.fire;
				t[i[0] + "With"] = e.fireWith
			}), r.promise(t), n && n.call(t, t), t
		},
		when: function(n) {
			var t = 0,
				u = o.call(arguments),
				r = u.length,
				e = r !== 1 || n && i.isFunction(n.promise) ? r : 0,
				f = e === 1 ? n : i.Deferred(),
				c = function(n, t, i) {
					return function(r) {
						t[n] = this;
						i[n] = arguments.length > 1 ? o.call(arguments) : r;
						i === s ? f.notifyWith(t, i) : --e || f.resolveWith(t, i)
					}
				},
				s, l, h;
			if (r > 1)
				for (s = new Array(r), l = new Array(r), h = new Array(r); t < r; t++) u[t] && i.isFunction(u[t].promise) ? u[t].promise().done(c(t, h, u)).fail(f.reject).progress(c(t, l, s)) : --e;
			return e || f.resolveWith(h, u), f.promise()
		}
	});
	i.support = function() {
		var u, h, e, c, l, f, o, a, v, s, y, t = r.createElement("div");
		if (t.setAttribute("className", "t"), t.innerHTML = "  <link/><table><\/table><a href='/a'>a<\/a><input type='checkbox'/>", h = t.getElementsByTagName("*"), e = t.getElementsByTagName("a")[0], !h || !e || !h.length) return {};
		c = r.createElement("select");
		l = c.appendChild(r.createElement("option"));
		f = t.getElementsByTagName("input")[0];
		e.style.cssText = "top:1px;float:left;opacity:.5";
		u = {
			leadingWhitespace: t.firstChild.nodeType === 3,
			tbody: !t.getElementsByTagName("tbody").length,
			htmlSerialize: !!t.getElementsByTagName("link").length,
			style: /top/.test(e.getAttribute("style")),
			hrefNormalized: e.getAttribute("href") === "/a",
			opacity: /^0.5/.test(e.style.opacity),
			cssFloat: !!e.style.cssFloat,
			checkOn: f.value === "on",
			optSelected: l.selected,
			getSetAttribute: t.className !== "t",
			enctype: !!r.createElement("form").enctype,
			html5Clone: r.createElement("nav").cloneNode(!0).outerHTML !== "<:nav><\/:nav>",
			boxModel: r.compatMode === "CSS1Compat",
			submitBubbles: !0,
			changeBubbles: !0,
			focusinBubbles: !1,
			deleteExpando: !0,
			noCloneEvent: !0,
			inlineBlockNeedsLayout: !1,
			shrinkWrapBlocks: !1,
			reliableMarginRight: !0,
			boxSizingReliable: !0,
			pixelPosition: !1
		};
		f.checked = !0;
		u.noCloneChecked = f.cloneNode(!0).checked;
		c.disabled = !0;
		u.optDisabled = !l.disabled;
		try {
			delete t.test
		} catch (p) {
			u.deleteExpando = !1
		}
		if (!t.addEventListener && t.attachEvent && t.fireEvent && (t.attachEvent("onclick", y = function() {
				u.noCloneEvent = !1
			}), t.cloneNode(!0).fireEvent("onclick"), t.detachEvent("onclick", y)), f = r.createElement("input"), f.value = "t", f.setAttribute("type", "radio"), u.radioValue = f.value === "t", f.setAttribute("checked", "checked"), f.setAttribute("name", "t"), t.appendChild(f), o = r.createDocumentFragment(), o.appendChild(t.lastChild), u.checkClone = o.cloneNode(!0).cloneNode(!0).lastChild.checked, u.appendChecked = f.checked, o.removeChild(f), o.appendChild(t), t.attachEvent)
			for (v in {
					submit: !0,
					change: !0,
					focusin: !0
				}) a = "on" + v, s = a in t, s || (t.setAttribute(a, "return;"), s = typeof t[a] == "function"), u[v + "Bubbles"] = s;
		return i(function() {
			var i, t, f, e, h = "padding:0;margin:0;border:0;display:block;overflow:hidden;",
				o = r.getElementsByTagName("body")[0];
			o && (i = r.createElement("div"), i.style.cssText = "visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px", o.insertBefore(i, o.firstChild), t = r.createElement("div"), i.appendChild(t), t.innerHTML = "<table><tr><td><\/td><td>t<\/td><\/tr><\/table>", f = t.getElementsByTagName("td"), f[0].style.cssText = "padding:0;margin:0;border:0;display:none", s = f[0].offsetHeight === 0, f[0].style.display = "", f[1].style.display = "none", u.reliableHiddenOffsets = s && f[0].offsetHeight === 0, t.innerHTML = "", t.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", u.boxSizing = t.offsetWidth === 4, u.doesNotIncludeMarginInBodyOffset = o.offsetTop !== 1, n.getComputedStyle && (u.pixelPosition = (n.getComputedStyle(t, null) || {}).top !== "1%", u.boxSizingReliable = (n.getComputedStyle(t, null) || {
				width: "4px"
			}).width === "4px", e = r.createElement("div"), e.style.cssText = t.style.cssText = h, e.style.marginRight = e.style.width = "0", t.style.width = "1px", t.appendChild(e), u.reliableMarginRight = !parseFloat((n.getComputedStyle(e, null) || {}).marginRight)), typeof t.style.zoom != "undefined" && (t.innerHTML = "", t.style.cssText = h + "width:1px;padding:1px;display:inline;zoom:1", u.inlineBlockNeedsLayout = t.offsetWidth === 3, t.style.display = "block", t.style.overflow = "visible", t.innerHTML = "<div><\/div>", t.firstChild.style.width = "5px", u.shrinkWrapBlocks = t.offsetWidth !== 3, i.style.zoom = 1), o.removeChild(i), i = t = f = e = null)
		}), o.removeChild(t), h = e = c = l = f = o = t = null, u
	}();
	or = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/;
	sr = /([A-Z])/g;
	i.extend({
		cache: {},
		deletedIds: [],
		uuid: 0,
		expando: "jQuery" + (i.fn.jquery + Math.random()).replace(/\D/g, ""),
		noData: {
			embed: !0,
			object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
			applet: !0
		},
		hasData: function(n) {
			return n = n.nodeType ? i.cache[n[i.expando]] : n[i.expando], !!n && !at(n)
		},
		data: function(n, r, u, f) {
			if (i.acceptData(n)) {
				var s, h, c = i.expando,
					a = typeof r == "string",
					l = n.nodeType,
					o = l ? i.cache : n,
					e = l ? n[c] : n[c] && c;
				if (e && o[e] && (f || o[e].data) || !a || u !== t) return e || (l ? n[c] = e = i.deletedIds.pop() || i.guid++ : e = c), o[e] || (o[e] = {}, l || (o[e].toJSON = i.noop)), (typeof r == "object" || typeof r == "function") && (f ? o[e] = i.extend(o[e], r) : o[e].data = i.extend(o[e].data, r)), s = o[e], f || (s.data || (s.data = {}), s = s.data), u !== t && (s[i.camelCase(r)] = u), a ? (h = s[r], h == null && (h = s[i.camelCase(r)])) : h = s, h
			}
		},
		removeData: function(n, t, r) {
			if (i.acceptData(n)) {
				var e, o, h, s = n.nodeType,
					u = s ? i.cache : n,
					f = s ? n[i.expando] : i.expando;
				if (u[f]) {
					if (t && (e = r ? u[f] : u[f].data, e)) {
						for (i.isArray(t) || ((t in e) ? t = [t] : (t = i.camelCase(t), t = (t in e) ? [t] : t.split(" "))), o = 0, h = t.length; o < h; o++) delete e[t[o]];
						if (!(r ? at : i.isEmptyObject)(e)) return
					}(r || (delete u[f].data, at(u[f]))) && (s ? i.cleanData([n], !0) : i.support.deleteExpando || u != u.window ? delete u[f] : u[f] = null)
				}
			}
		},
		_data: function(n, t, r) {
			return i.data(n, t, r, !0)
		},
		acceptData: function(n) {
			var t = n.nodeName && i.noData[n.nodeName.toLowerCase()];
			return !t || t !== !0 && n.getAttribute("classid") === t
		}
	});
	i.fn.extend({
		data: function(n, r) {
			var u, s, h, o, l, e = this[0],
				c = 0,
				f = null;
			if (n === t) {
				if (this.length && (f = i.data(e), e.nodeType === 1 && !i._data(e, "parsedAttrs"))) {
					for (h = e.attributes, l = h.length; c < l; c++) o = h[c].name, o.indexOf("data-") || (o = i.camelCase(o.substring(5)), ui(e, o, f[o]));
					i._data(e, "parsedAttrs", !0)
				}
				return f
			}
			return typeof n == "object" ? this.each(function() {
				i.data(this, n)
			}) : (u = n.split(".", 2), u[1] = u[1] ? "." + u[1] : "", s = u[1] + "!", i.access(this, function(r) {
				if (r === t) return f = this.triggerHandler("getData" + s, [u[0]]), f === t && e && (f = i.data(e, n), f = ui(e, n, f)), f === t && u[1] ? this.data(u[0]) : f;
				u[1] = r;
				this.each(function() {
					var t = i(this);
					t.triggerHandler("setData" + s, u);
					i.data(this, n, r);
					t.triggerHandler("changeData" + s, u)
				})
			}, null, r, arguments.length > 1, null, !1))
		},
		removeData: function(n) {
			return this.each(function() {
				i.removeData(this, n)
			})
		}
	});
	i.extend({
		queue: function(n, t, r) {
			var u;
			if (n) return t = (t || "fx") + "queue", u = i._data(n, t), r && (!u || i.isArray(r) ? u = i._data(n, t, i.makeArray(r)) : u.push(r)), u || []
		},
		dequeue: function(n, t) {
			t = t || "fx";
			var r = i.queue(n, t),
				e = r.length,
				u = r.shift(),
				f = i._queueHooks(n, t),
				o = function() {
					i.dequeue(n, t)
				};
			u === "inprogress" && (u = r.shift(), e--);
			u && (t === "fx" && r.unshift("inprogress"), delete f.stop, u.call(n, o, f));
			!e && f && f.empty.fire()
		},
		_queueHooks: function(n, t) {
			var r = t + "queueHooks";
			return i._data(n, r) || i._data(n, r, {
				empty: i.Callbacks("once memory").add(function() {
					i.removeData(n, t + "queue", !0);
					i.removeData(n, r, !0)
				})
			})
		}
	});
	i.fn.extend({
		queue: function(n, r) {
			var u = 2;
			return typeof n != "string" && (r = n, n = "fx", u--), arguments.length < u ? i.queue(this[0], n) : r === t ? this : this.each(function() {
				var t = i.queue(this, n, r);
				i._queueHooks(this, n);
				n === "fx" && t[0] !== "inprogress" && i.dequeue(this, n)
			})
		},
		dequeue: function(n) {
			return this.each(function() {
				i.dequeue(this, n)
			})
		},
		delay: function(n, t) {
			return n = i.fx ? i.fx.speeds[n] || n : n, t = t || "fx", this.queue(t, function(t, i) {
				var r = setTimeout(t, n);
				i.stop = function() {
					clearTimeout(r)
				}
			})
		},
		clearQueue: function(n) {
			return this.queue(n || "fx", [])
		},
		promise: function(n, r) {
			var u, e = 1,
				o = i.Deferred(),
				f = this,
				s = this.length,
				h = function() {
					--e || o.resolveWith(f, [f])
				};
			for (typeof n != "string" && (r = n, n = t), n = n || "fx"; s--;) u = i._data(f[s], n + "queueHooks"), u && u.empty && (e++, u.empty.add(h));
			return h(), o.promise(r)
		}
	});
	var s, hr, cr, lr = /[\t\r\n]/g,
		bf = /\r/g,
		kf = /^(?:button|input)$/i,
		df = /^(?:button|input|object|select|textarea)$/i,
		gf = /^a(?:rea|)$/i,
		ar = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
		vr = i.support.getSetAttribute;
	i.fn.extend({
		attr: function(n, t) {
			return i.access(this, i.attr, n, t, arguments.length > 1)
		},
		removeAttr: function(n) {
			return this.each(function() {
				i.removeAttr(this, n)
			})
		},
		prop: function(n, t) {
			return i.access(this, i.prop, n, t, arguments.length > 1)
		},
		removeProp: function(n) {
			return n = i.propFix[n] || n, this.each(function() {
				try {
					this[n] = t;
					delete this[n]
				} catch (i) {}
			})
		},
		addClass: function(n) {
			var r, f, o, t, e, u, s;
			if (i.isFunction(n)) return this.each(function(t) {
				i(this).addClass(n.call(this, t, this.className))
			});
			if (n && typeof n == "string")
				for (r = n.split(h), f = 0, o = this.length; f < o; f++)
					if (t = this[f], t.nodeType === 1)
						if (t.className || r.length !== 1) {
							for (e = " " + t.className + " ", u = 0, s = r.length; u < s; u++) e.indexOf(" " + r[u] + " ") < 0 && (e += r[u] + " ");
							t.className = i.trim(e)
						} else t.className = n;
			return this
		},
		removeClass: function(n) {
			var e, r, u, f, s, o, c;
			if (i.isFunction(n)) return this.each(function(t) {
				i(this).removeClass(n.call(this, t, this.className))
			});
			if (n && typeof n == "string" || n === t)
				for (e = (n || "").split(h), o = 0, c = this.length; o < c; o++)
					if (u = this[o], u.nodeType === 1 && u.className) {
						for (r = (" " + u.className + " ").replace(lr, " "), f = 0, s = e.length; f < s; f++)
							while (r.indexOf(" " + e[f] + " ") >= 0) r = r.replace(" " + e[f] + " ", " ");
						u.className = n ? i.trim(r) : ""
					}
			return this
		},
		toggleClass: function(n, t) {
			var r = typeof n,
				u = typeof t == "boolean";
			return i.isFunction(n) ? this.each(function(r) {
				i(this).toggleClass(n.call(this, r, this.className, t), t)
			}) : this.each(function() {
				if (r === "string")
					for (var f, s = 0, o = i(this), e = t, c = n.split(h); f = c[s++];) e = u ? e : !o.hasClass(f), o[e ? "addClass" : "removeClass"](f);
				else(r === "undefined" || r === "boolean") && (this.className && i._data(this, "__className__", this.className), this.className = this.className || n === !1 ? "" : i._data(this, "__className__") || "")
			})
		},
		hasClass: function(n) {
			for (var i = " " + n + " ", t = 0, r = this.length; t < r; t++)
				if (this[t].nodeType === 1 && (" " + this[t].className + " ").replace(lr, " ").indexOf(i) >= 0) return !0;
			return !1
		},
		val: function(n) {
			var r, u, e, f = this[0];
			return arguments.length ? (e = i.isFunction(n), this.each(function(u) {
				var f, o = i(this);
				this.nodeType === 1 && (f = e ? n.call(this, u, o.val()) : n, f == null ? f = "" : typeof f == "number" ? f += "" : i.isArray(f) && (f = i.map(f, function(n) {
					return n == null ? "" : n + ""
				})), r = i.valHooks[this.type] || i.valHooks[this.nodeName.toLowerCase()], r && "set" in r && r.set(this, f, "value") !== t || (this.value = f))
			})) : f ? (r = i.valHooks[f.type] || i.valHooks[f.nodeName.toLowerCase()], r && "get" in r && (u = r.get(f, "value")) !== t ? u : (u = f.value, typeof u == "string" ? u.replace(bf, "") : u == null ? "" : u)) : void 0
		}
	});
	i.extend({
		valHooks: {
			option: {
				get: function(n) {
					var t = n.attributes.value;
					return !t || t.specified ? n.value : n.text
				}
			},
			select: {
				get: function(n) {
					for (var e, t, o = n.options, r = n.selectedIndex, u = n.type === "select-one" || r < 0, s = u ? null : [], h = u ? r + 1 : o.length, f = r < 0 ? h : u ? r : 0; f < h; f++)
						if (t = o[f], (t.selected || f === r) && (i.support.optDisabled ? !t.disabled : t.getAttribute("disabled") === null) && (!t.parentNode.disabled || !i.nodeName(t.parentNode, "optgroup"))) {
							if (e = i(t).val(), u) return e;
							s.push(e)
						}
					return s
				},
				set: function(n, t) {
					var r = i.makeArray(t);
					return i(n).find("option").each(function() {
						this.selected = i.inArray(i(this).val(), r) >= 0
					}), r.length || (n.selectedIndex = -1), r
				}
			}
		},
		attrFn: {},
		attr: function(n, r, u, f) {
			var e, o, h, c = n.nodeType;
			if (n && c !== 3 && c !== 8 && c !== 2) {
				if (f && i.isFunction(i.fn[r])) return i(n)[r](u);
				if (typeof n.getAttribute == "undefined") return i.prop(n, r, u);
				if (h = c !== 1 || !i.isXMLDoc(n), h && (r = r.toLowerCase(), o = i.attrHooks[r] || (ar.test(r) ? hr : s)), u !== t) {
					if (u === null) {
						i.removeAttr(n, r);
						return
					}
					return o && "set" in o && h && (e = o.set(n, u, r)) !== t ? e : (n.setAttribute(r, u + ""), u)
				}
				return o && "get" in o && h && (e = o.get(n, r)) !== null ? e : (e = n.getAttribute(r), e === null ? t : e)
			}
		},
		removeAttr: function(n, t) {
			var u, f, r, e, o = 0;
			if (t && n.nodeType === 1)
				for (f = t.split(h); o < f.length; o++) r = f[o], r && (u = i.propFix[r] || r, e = ar.test(r), e || i.attr(n, r, ""), n.removeAttribute(vr ? r : u), e && u in n && (n[u] = !1))
		},
		attrHooks: {
			type: {
				set: function(n, t) {
					if (kf.test(n.nodeName) && n.parentNode) i.error("type property can't be changed");
					else if (!i.support.radioValue && t === "radio" && i.nodeName(n, "input")) {
						var r = n.value;
						return n.setAttribute("type", t), r && (n.value = r), t
					}
				}
			},
			value: {
				get: function(n, t) {
					return s && i.nodeName(n, "button") ? s.get(n, t) : t in n ? n.value : null
				},
				set: function(n, t, r) {
					if (s && i.nodeName(n, "button")) return s.set(n, t, r);
					n.value = t
				}
			}
		},
		propFix: {
			tabindex: "tabIndex",
			readonly: "readOnly",
			"for": "htmlFor",
			"class": "className",
			maxlength: "maxLength",
			cellspacing: "cellSpacing",
			cellpadding: "cellPadding",
			rowspan: "rowSpan",
			colspan: "colSpan",
			usemap: "useMap",
			frameborder: "frameBorder",
			contenteditable: "contentEditable"
		},
		prop: function(n, r, u) {
			var e, f, s, o = n.nodeType;
			if (n && o !== 3 && o !== 8 && o !== 2) return s = o !== 1 || !i.isXMLDoc(n), s && (r = i.propFix[r] || r, f = i.propHooks[r]), u !== t ? f && "set" in f && (e = f.set(n, u, r)) !== t ? e : n[r] = u : f && "get" in f && (e = f.get(n, r)) !== null ? e : n[r]
		},
		propHooks: {
			tabIndex: {
				get: function(n) {
					var i = n.getAttributeNode("tabindex");
					return i && i.specified ? parseInt(i.value, 10) : df.test(n.nodeName) || gf.test(n.nodeName) && n.href ? 0 : t
				}
			}
		}
	});
	hr = {
		get: function(n, r) {
			var u, f = i.prop(n, r);
			return f === !0 || typeof f != "boolean" && (u = n.getAttributeNode(r)) && u.nodeValue !== !1 ? r.toLowerCase() : t
		},
		set: function(n, t, r) {
			var u;
			return t === !1 ? i.removeAttr(n, r) : (u = i.propFix[r] || r, u in n && (n[u] = !0), n.setAttribute(r, r.toLowerCase())), r
		}
	};
	vr || (cr = {
		name: !0,
		id: !0,
		coords: !0
	}, s = i.valHooks.button = {
		get: function(n, i) {
			var r;
			return r = n.getAttributeNode(i), r && (cr[i] ? r.value !== "" : r.specified) ? r.value : t
		},
		set: function(n, t, i) {
			var u = n.getAttributeNode(i);
			return u || (u = r.createAttribute(i), n.setAttributeNode(u)), u.value = t + ""
		}
	}, i.each(["width", "height"], function(n, t) {
		i.attrHooks[t] = i.extend(i.attrHooks[t], {
			set: function(n, i) {
				if (i === "") return n.setAttribute(t, "auto"), i
			}
		})
	}), i.attrHooks.contenteditable = {
		get: s.get,
		set: function(n, t, i) {
			t === "" && (t = "false");
			s.set(n, t, i)
		}
	});
	i.support.hrefNormalized || i.each(["href", "src", "width", "height"], function(n, r) {
		i.attrHooks[r] = i.extend(i.attrHooks[r], {
			get: function(n) {
				var i = n.getAttribute(r, 2);
				return i === null ? t : i
			}
		})
	});
	i.support.style || (i.attrHooks.style = {
		get: function(n) {
			return n.style.cssText.toLowerCase() || t
		},
		set: function(n, t) {
			return n.style.cssText = t + ""
		}
	});
	i.support.optSelected || (i.propHooks.selected = i.extend(i.propHooks.selected, {
		get: function(n) {
			var t = n.parentNode;
			return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
		}
	}));
	i.support.enctype || (i.propFix.enctype = "encoding");
	i.support.checkOn || i.each(["radio", "checkbox"], function() {
		i.valHooks[this] = {
			get: function(n) {
				return n.getAttribute("value") === null ? "on" : n.value
			}
		}
	});
	i.each(["radio", "checkbox"], function() {
		i.valHooks[this] = i.extend(i.valHooks[this], {
			set: function(n, t) {
				if (i.isArray(t)) return n.checked = i.inArray(i(n).val(), t) >= 0
			}
		})
	});
	var bt = /^(?:textarea|input|select)$/i,
		yr = /^([^\.]*|)(?:\.(.+)|)$/,
		ne = /(?:^|\s)hover(\.\S+|)\b/,
		te = /^key/,
		ie = /^(?:mouse|contextmenu)|click/,
		pr = /^(?:focusinfocus|focusoutblur)$/,
		wr = function(n) {
			return i.event.special.hover ? n : n.replace(ne, "mouseenter$1 mouseleave$1")
		};
	i.event = {
		add: function(n, r, u, f, e) {
			var a, s, v, y, p, o, b, l, w, c, h;
			if (n.nodeType !== 3 && n.nodeType !== 8 && r && u && (a = i._data(n))) {
				for (u.handler && (w = u, u = w.handler, e = w.selector), u.guid || (u.guid = i.guid++), v = a.events, v || (a.events = v = {}), s = a.handle, s || (a.handle = s = function(n) {
						return typeof i == "undefined" || !!n && i.event.triggered === n.type ? t : i.event.dispatch.apply(s.elem, arguments)
					}, s.elem = n), r = i.trim(wr(r)).split(" "), y = 0; y < r.length; y++) p = yr.exec(r[y]) || [], o = p[1], b = (p[2] || "").split(".").sort(), h = i.event.special[o] || {}, o = (e ? h.delegateType : h.bindType) || o, h = i.event.special[o] || {}, l = i.extend({
					type: o,
					origType: p[1],
					data: f,
					handler: u,
					guid: u.guid,
					selector: e,
					needsContext: e && i.expr.match.needsContext.test(e),
					namespace: b.join(".")
				}, w), c = v[o], c || (c = v[o] = [], c.delegateCount = 0, h.setup && h.setup.call(n, f, b, s) !== !1 || (n.addEventListener ? n.addEventListener(o, s, !1) : n.attachEvent && n.attachEvent("on" + o, s))), h.add && (h.add.call(n, l), l.handler.guid || (l.handler.guid = u.guid)), e ? c.splice(c.delegateCount++, 0, l) : c.push(l), i.event.global[o] = !0;
				n = null
			}
		},
		global: {},
		remove: function(n, t, r, u, f) {
			var l, p, e, w, h, b, a, v, c, o, s, y = i.hasData(n) && i._data(n);
			if (y && (v = y.events)) {
				for (t = i.trim(wr(t || "")).split(" "), l = 0; l < t.length; l++) {
					if (p = yr.exec(t[l]) || [], e = w = p[1], h = p[2], !e) {
						for (e in v) i.event.remove(n, e + t[l], r, u, !0);
						continue
					}
					for (c = i.event.special[e] || {}, e = (u ? c.delegateType : c.bindType) || e, o = v[e] || [], b = o.length, h = h ? new RegExp("(^|\\.)" + h.split(".").sort().join("\\.(?:.*\\.|)") + "(\\.|$)") : null, a = 0; a < o.length; a++) s = o[a], (f || w === s.origType) && (!r || r.guid === s.guid) && (!h || h.test(s.namespace)) && (!u || u === s.selector || u === "**" && s.selector) && (o.splice(a--, 1), s.selector && o.delegateCount--, c.remove && c.remove.call(n, s));
					o.length === 0 && b !== o.length && ((!c.teardown || c.teardown.call(n, h, y.handle) === !1) && i.removeEvent(n, e, y.handle), delete v[e])
				}
				i.isEmptyObject(v) && (delete y.handle, i.removeData(n, "events", !0))
			}
		},
		customEvent: {
			getData: !0,
			setData: !0,
			changeData: !0
		},
		trigger: function(u, f, e, o) {
			if (!e || e.nodeType !== 3 && e.nodeType !== 8) {
				var w, d, c, h, l, v, a, y, p, k, s = u.type || u,
					b = [];
				if (pr.test(s + i.event.triggered)) return;
				if (s.indexOf("!") >= 0 && (s = s.slice(0, -1), d = !0), s.indexOf(".") >= 0 && (b = s.split("."), s = b.shift(), b.sort()), (!e || i.event.customEvent[s]) && !i.event.global[s]) return;
				if (u = typeof u == "object" ? u[i.expando] ? u : new i.Event(s, u) : new i.Event(s), u.type = s, u.isTrigger = !0, u.exclusive = d, u.namespace = b.join("."), u.namespace_re = u.namespace ? new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, v = s.indexOf(":") < 0 ? "on" + s : "", !e) {
					w = i.cache;
					for (c in w) w[c].events && w[c].events[s] && i.event.trigger(u, f, w[c].handle.elem, !0);
					return
				}
				if (u.result = t, u.target || (u.target = e), f = f != null ? i.makeArray(f) : [], f.unshift(u), a = i.event.special[s] || {}, a.trigger && a.trigger.apply(e, f) === !1) return;
				if (p = [
						[e, a.bindType || s]
					], !o && !a.noBubble && !i.isWindow(e)) {
					for (k = a.delegateType || s, h = pr.test(k + s) ? e : e.parentNode, l = e; h; h = h.parentNode) p.push([h, k]), l = h;
					l === (e.ownerDocument || r) && p.push([l.defaultView || l.parentWindow || n, k])
				}
				for (c = 0; c < p.length && !u.isPropagationStopped(); c++) h = p[c][0], u.type = p[c][1], y = (i._data(h, "events") || {})[u.type] && i._data(h, "handle"), y && y.apply(h, f), y = v && h[v], y && i.acceptData(h) && y.apply && y.apply(h, f) === !1 && u.preventDefault();
				return u.type = s, !o && !u.isDefaultPrevented() && (!a._default || a._default.apply(e.ownerDocument, f) === !1) && (s !== "click" || !i.nodeName(e, "a")) && i.acceptData(e) && v && e[s] && (s !== "focus" && s !== "blur" || u.target.offsetWidth !== 0) && !i.isWindow(e) && (l = e[v], l && (e[v] = null), i.event.triggered = s, e[s](), i.event.triggered = t, l && (e[v] = l)), u.result
			}
			return
		},
		dispatch: function(r) {
			r = i.event.fix(r || n.event);
			var f, c, e, l, a, h, v, u, s, y = (i._data(this, "events") || {})[r.type] || [],
				p = y.delegateCount,
				k = o.call(arguments),
				d = !r.exclusive && !r.namespace,
				w = i.event.special[r.type] || {},
				b = [];
			if (k[0] = r, r.delegateTarget = this, !w.preDispatch || w.preDispatch.call(this, r) !== !1) {
				if (p && (!r.button || r.type !== "click"))
					for (e = r.target; e != this; e = e.parentNode || this)
						if (e.disabled !== !0 || r.type !== "click") {
							for (a = {}, v = [], f = 0; f < p; f++) u = y[f], s = u.selector, a[s] === t && (a[s] = u.needsContext ? i(s, this).index(e) >= 0 : i.find(s, this, null, [e]).length), a[s] && v.push(u);
							v.length && b.push({
								elem: e,
								matches: v
							})
						}
				for (y.length > p && b.push({
						elem: this,
						matches: y.slice(p)
					}), f = 0; f < b.length && !r.isPropagationStopped(); f++)
					for (h = b[f], r.currentTarget = h.elem, c = 0; c < h.matches.length && !r.isImmediatePropagationStopped(); c++) u = h.matches[c], (d || !r.namespace && !u.namespace || r.namespace_re && r.namespace_re.test(u.namespace)) && (r.data = u.data, r.handleObj = u, l = ((i.event.special[u.origType] || {}).handle || u.handler).apply(h.elem, k), l !== t && (r.result = l, l === !1 && (r.preventDefault(), r.stopPropagation())));
				return w.postDispatch && w.postDispatch.call(this, r), r.result
			}
		},
		props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
		fixHooks: {},
		keyHooks: {
			props: "char charCode key keyCode".split(" "),
			filter: function(n, t) {
				return n.which == null && (n.which = t.charCode != null ? t.charCode : t.keyCode), n
			}
		},
		mouseHooks: {
			props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
			filter: function(n, i) {
				var o, u, f, e = i.button,
					s = i.fromElement;
				return n.pageX == null && i.clientX != null && (o = n.target.ownerDocument || r, u = o.documentElement, f = o.body, n.pageX = i.clientX + (u && u.scrollLeft || f && f.scrollLeft || 0) - (u && u.clientLeft || f && f.clientLeft || 0), n.pageY = i.clientY + (u && u.scrollTop || f && f.scrollTop || 0) - (u && u.clientTop || f && f.clientTop || 0)), !n.relatedTarget && s && (n.relatedTarget = s === n.target ? i.toElement : s), !n.which && e !== t && (n.which = e & 1 ? 1 : e & 2 ? 3 : e & 4 ? 2 : 0), n
			}
		},
		fix: function(n) {
			if (n[i.expando]) return n;
			var f, e, t = n,
				u = i.event.fixHooks[n.type] || {},
				o = u.props ? this.props.concat(u.props) : this.props;
			for (n = i.Event(t), f = o.length; f;) e = o[--f], n[e] = t[e];
			return n.target || (n.target = t.srcElement || r), n.target.nodeType === 3 && (n.target = n.target.parentNode), n.metaKey = !!n.metaKey, u.filter ? u.filter(n, t) : n
		},
		special: {
			load: {
				noBubble: !0
			},
			focus: {
				delegateType: "focusin"
			},
			blur: {
				delegateType: "focusout"
			},
			beforeunload: {
				setup: function(n, t, r) {
					i.isWindow(this) && (this.onbeforeunload = r)
				},
				teardown: function(n, t) {
					this.onbeforeunload === t && (this.onbeforeunload = null)
				}
			}
		},
		simulate: function(n, t, r, u) {
			var f = i.extend(new i.Event, r, {
				type: n,
				isSimulated: !0,
				originalEvent: {}
			});
			u ? i.event.trigger(f, null, t) : i.event.dispatch.call(t, f);
			f.isDefaultPrevented() && r.preventDefault()
		}
	};
	i.event.handle = i.event.dispatch;
	i.removeEvent = r.removeEventListener ? function(n, t, i) {
		n.removeEventListener && n.removeEventListener(t, i, !1)
	} : function(n, t, i) {
		var r = "on" + t;
		n.detachEvent && (typeof n[r] == "undefined" && (n[r] = null), n.detachEvent(r, i))
	};
	i.Event = function(n, t) {
		if (!(this instanceof i.Event)) return new i.Event(n, t);
		n && n.type ? (this.originalEvent = n, this.type = n.type, this.isDefaultPrevented = n.defaultPrevented || n.returnValue === !1 || n.getPreventDefault && n.getPreventDefault() ? g : v) : this.type = n;
		t && i.extend(this, t);
		this.timeStamp = n && n.timeStamp || i.now();
		this[i.expando] = !0
	};
	i.Event.prototype = {
		preventDefault: function() {
			this.isDefaultPrevented = g;
			var n = this.originalEvent;
			n && (n.preventDefault ? n.preventDefault() : n.returnValue = !1)
		},
		stopPropagation: function() {
			this.isPropagationStopped = g;
			var n = this.originalEvent;
			n && (n.stopPropagation && n.stopPropagation(), n.cancelBubble = !0)
		},
		stopImmediatePropagation: function() {
			this.isImmediatePropagationStopped = g;
			this.stopPropagation()
		},
		isDefaultPrevented: v,
		isPropagationStopped: v,
		isImmediatePropagationStopped: v
	};
	i.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout"
	}, function(n, t) {
		i.event.special[n] = {
			delegateType: t,
			bindType: t,
			handle: function(n) {
				var f, e = this,
					r = n.relatedTarget,
					u = n.handleObj,
					o = u.selector;
				return r && (r === e || i.contains(e, r)) || (n.type = u.origType, f = u.handler.apply(this, arguments), n.type = t), f
			}
		}
	});
	i.support.submitBubbles || (i.event.special.submit = {
		setup: function() {
			if (i.nodeName(this, "form")) return !1;
			i.event.add(this, "click._submit keypress._submit", function(n) {
				var u = n.target,
					r = i.nodeName(u, "input") || i.nodeName(u, "button") ? u.form : t;
				r && !i._data(r, "_submit_attached") && (i.event.add(r, "submit._submit", function(n) {
					n._submit_bubble = !0
				}), i._data(r, "_submit_attached", !0))
			})
		},
		postDispatch: function(n) {
			n._submit_bubble && (delete n._submit_bubble, this.parentNode && !n.isTrigger && i.event.simulate("submit", this.parentNode, n, !0))
		},
		teardown: function() {
			if (i.nodeName(this, "form")) return !1;
			i.event.remove(this, "._submit")
		}
	});
	i.support.changeBubbles || (i.event.special.change = {
		setup: function() {
			if (bt.test(this.nodeName)) return (this.type === "checkbox" || this.type === "radio") && (i.event.add(this, "propertychange._change", function(n) {
				n.originalEvent.propertyName === "checked" && (this._just_changed = !0)
			}), i.event.add(this, "click._change", function(n) {
				this._just_changed && !n.isTrigger && (this._just_changed = !1);
				i.event.simulate("change", this, n, !0)
			})), !1;
			i.event.add(this, "beforeactivate._change", function(n) {
				var t = n.target;
				bt.test(t.nodeName) && !i._data(t, "_change_attached") && (i.event.add(t, "change._change", function(n) {
					!this.parentNode || n.isSimulated || n.isTrigger || i.event.simulate("change", this.parentNode, n, !0)
				}), i._data(t, "_change_attached", !0))
			})
		},
		handle: function(n) {
			var t = n.target;
			if (this !== t || n.isSimulated || n.isTrigger || t.type !== "radio" && t.type !== "checkbox") return n.handleObj.handler.apply(this, arguments)
		},
		teardown: function() {
			return i.event.remove(this, "._change"), !bt.test(this.nodeName)
		}
	});
	i.support.focusinBubbles || i.each({
		focus: "focusin",
		blur: "focusout"
	}, function(n, t) {
		var u = 0,
			f = function(n) {
				i.event.simulate(t, n.target, i.event.fix(n), !0)
			};
		i.event.special[t] = {
			setup: function() {
				u++ == 0 && r.addEventListener(n, f, !0)
			},
			teardown: function() {
				--u == 0 && r.removeEventListener(n, f, !0)
			}
		}
	});
	i.fn.extend({
		on: function(n, r, u, f, e) {
			var o, s;
			if (typeof n == "object") {
				typeof r != "string" && (u = u || r, r = t);
				for (s in n) this.on(s, r, u, n[s], e);
				return this
			}
			if (u == null && f == null ? (f = r, u = r = t) : f == null && (typeof r == "string" ? (f = u, u = t) : (f = u, u = r, r = t)), f === !1) f = v;
			else if (!f) return this;
			return e === 1 && (o = f, f = function(n) {
				return i().off(n), o.apply(this, arguments)
			}, f.guid = o.guid || (o.guid = i.guid++)), this.each(function() {
				i.event.add(this, n, f, u, r)
			})
		},
		one: function(n, t, i, r) {
			return this.on(n, t, i, r, 1)
		},
		off: function(n, r, u) {
			var f, e;
			if (n && n.preventDefault && n.handleObj) return f = n.handleObj, i(n.delegateTarget).off(f.namespace ? f.origType + "." + f.namespace : f.origType, f.selector, f.handler), this;
			if (typeof n == "object") {
				for (e in n) this.off(e, r, n[e]);
				return this
			}
			return (r === !1 || typeof r == "function") && (u = r, r = t), u === !1 && (u = v), this.each(function() {
				i.event.remove(this, n, u, r)
			})
		},
		bind: function(n, t, i) {
			return this.on(n, null, t, i)
		},
		unbind: function(n, t) {
			return this.off(n, null, t)
		},
		live: function(n, t, r) {
			return i(this.context).on(n, this.selector, t, r), this
		},
		die: function(n, t) {
			return i(this.context).off(n, this.selector || "**", t), this
		},
		delegate: function(n, t, i, r) {
			return this.on(t, n, i, r)
		},
		undelegate: function(n, t, i) {
			return arguments.length === 1 ? this.off(n, "**") : this.off(t, n || "**", i)
		},
		trigger: function(n, t) {
			return this.each(function() {
				i.event.trigger(n, t, this)
			})
		},
		triggerHandler: function(n, t) {
			if (this[0]) return i.event.trigger(n, t, this[0], !0)
		},
		toggle: function(n) {
			var t = arguments,
				u = n.guid || i.guid++,
				r = 0,
				f = function(u) {
					var f = (i._data(this, "lastToggle" + n.guid) || 0) % r;
					return i._data(this, "lastToggle" + n.guid, f + 1), u.preventDefault(), t[f].apply(this, arguments) || !1
				};
			for (f.guid = u; r < t.length;) t[r++].guid = u;
			return this.click(f)
		},
		hover: function(n, t) {
			return this.mouseenter(n).mouseleave(t || n)
		}
	});
	i.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(n, t) {
			i.fn[t] = function(n, i) {
				return i == null && (i = n, n = null), arguments.length > 0 ? this.on(t, null, n, i) : this.trigger(t)
			};
			te.test(t) && (i.event.fixHooks[t] = i.event.keyHooks);
			ie.test(t) && (i.event.fixHooks[t] = i.event.mouseHooks)
		}),
		function(n, t) {
			function r(n, t, i, r) {
				i = i || [];
				t = t || h;
				var e, u, o, f, s = t.nodeType;
				if (!n || typeof n != "string") return i;
				if (s !== 1 && s !== 9) return [];
				if (o = it(t), !o && !r && (e = ki.exec(n)))
					if (f = e[1]) {
						if (s === 9) {
							if (u = t.getElementById(f), !u || !u.parentNode) return i;
							if (u.id === f) return i.push(u), i
						} else if (t.ownerDocument && (u = t.ownerDocument.getElementById(f)) && ti(t, u) && u.id === f) return i.push(u), i
					} else {
						if (e[2]) return p.apply(i, w.call(t.getElementsByTagName(n), 0)), i;
						if ((f = e[3]) && hi && t.getElementsByClassName) return p.apply(i, w.call(t.getElementsByClassName(f), 0)), i
					}
				return lt(n.replace(ft, "$1"), t, i, r, o)
			}

			function b(n) {
				return function(t) {
					var i = t.nodeName.toLowerCase();
					return i === "input" && t.type === n
				}
			}

			function gt(n) {
				return function(t) {
					var i = t.nodeName.toLowerCase();
					return (i === "input" || i === "button") && t.type === n
				}
			}

			function a(n) {
				return s(function(t) {
					return t = +t, s(function(i, r) {
						for (var u, f = n([], i.length, t), e = f.length; e--;) i[u = f[e]] && (i[u] = !(r[u] = i[u]))
					})
				})
			}

			function d(n, t, i) {
				if (n === t) return i;
				for (var r = n.nextSibling; r;) {
					if (r === t) return -1;
					r = r.nextSibling
				}
				return 1
			}

			function g(n, t) {
				var o, f, h, s, i, c, l, a = fi[e][n + " "];
				if (a) return t ? 0 : a.slice(0);
				for (i = n, c = [], l = u.preFilter; i;) {
					(!o || (f = pi.exec(i))) && (f && (i = i.slice(f[0].length) || i), c.push(h = []));
					o = !1;
					(f = wi.exec(i)) && (h.push(o = new ri(f.shift())), i = i.slice(o.length), o.type = f[0].replace(ft, " "));
					for (s in u.filter)(f = et[s].exec(i)) && (!l[s] || (f = l[s](f))) && (h.push(o = new ri(f.shift())), i = i.slice(o.length), o.type = s, o.matches = f);
					if (!o) break
				}
				return t ? i.length : i ? r.error(n) : fi(n, c).slice(0)
			}

			function ot(n, t, i) {
				var r = t.dir,
					u = i && t.dir === "parentNode",
					f = ai++;
				return t.first ? function(t, i, f) {
					while (t = t[r])
						if (u || t.nodeType === 1) return n(t, i, f)
				} : function(t, i, o) {
					if (o) {
						while (t = t[r])
							if ((u || t.nodeType === 1) && n(t, i, o)) return t
					} else
						for (var s, h = ut + " " + f + " ", c = h + at; t = t[r];)
							if (u || t.nodeType === 1) {
								if ((s = t[e]) === c) return t.sizset;
								if (typeof s == "string" && s.indexOf(h) === 0) {
									if (t.sizset) return t
								} else {
									if (t[e] = c, n(t, i, o)) return t.sizset = !0, t;
									t.sizset = !1
								}
							}
				}
			}

			function st(n) {
				return n.length > 1 ? function(t, i, r) {
					for (var u = n.length; u--;)
						if (!n[u](t, i, r)) return !1;
					return !0
				} : n[0]
			}

			function nt(n, t, i, r, u) {
				for (var e, o = [], f = 0, s = n.length, h = t != null; f < s; f++)(e = n[f]) && (!i || i(e, r, u)) && (o.push(e), h && t.push(f));
				return o
			}

			function ht(n, t, i, r, u, f) {
				return r && !r[e] && (r = ht(r)), u && !u[e] && (u = ht(u, f)), s(function(f, e, o, s) {
					var l, c, a, w = [],
						y = [],
						b = e.length,
						k = f || li(t || "*", o.nodeType ? [o] : o, []),
						v = n && (f || !t) ? nt(k, w, n, o, s) : k,
						h = i ? u || (f ? n : b || r) ? [] : e : v;
					if (i && i(v, h, o, s), r)
						for (l = nt(h, y), r(l, [], o, s), c = l.length; c--;)(a = l[c]) && (h[y[c]] = !(v[y[c]] = a));
					if (f) {
						if (u || n) {
							if (u) {
								for (l = [], c = h.length; c--;)(a = h[c]) && l.push(v[c] = a);
								u(null, h = [], l, s)
							}
							for (c = h.length; c--;)(a = h[c]) && (l = u ? wt.call(f, a) : w[c]) > -1 && (f[l] = !(e[l] = a))
						}
					} else h = nt(h === e ? h.splice(b, h.length) : h), u ? u(null, e, h, s) : p.apply(e, h)
				})
			}

			function ct(n) {
				for (var s, r, i, o = n.length, h = u.relative[n[0].type], c = h || u.relative[" "], t = h ? 1 : 0, l = ot(function(n) {
						return n === s
					}, c, !0), a = ot(function(n) {
						return wt.call(s, n) > -1
					}, c, !0), f = [function(n, t, i) {
						return !h && (i || t !== rt) || ((s = t).nodeType ? l(n, t, i) : a(n, t, i))
					}]; t < o; t++)
					if (r = u.relative[n[t].type]) f = [ot(st(f), r)];
					else {
						if (r = u.filter[n[t].type].apply(null, n[t].matches), r[e]) {
							for (i = ++t; i < o; i++)
								if (u.relative[n[i].type]) break;
							return ht(t > 1 && st(f), t > 1 && n.slice(0, t - 1).join("").replace(ft, "$1"), r, t < i && ct(n.slice(t, i)), i < o && ct(n = n.slice(i)), i < o && n.join(""))
						}
						f.push(r)
					}
				return st(f)
			}

			function ci(n, t) {
				var f = t.length > 0,
					e = n.length > 0,
					i = function(o, s, c, l, a) {
						var y, b, k, w = [],
							d = 0,
							v = "0",
							g = o && [],
							tt = a != null,
							it = rt,
							et = o || e && u.find.TAG("*", a && s.parentNode || s),
							ft = ut += it == null ? 1 : Math.E;
						for (tt && (rt = s !== h && s, at = i.el);
							(y = et[v]) != null; v++) {
							if (e && y) {
								for (b = 0; k = n[b]; b++)
									if (k(y, s, c)) {
										l.push(y);
										break
									}
								tt && (ut = ft, at = ++i.el)
							}
							f && ((y = !k && y) && d--, o && g.push(y))
						}
						if (d += v, f && v !== d) {
							for (b = 0; k = t[b]; b++) k(g, w, s, c);
							if (o) {
								if (d > 0)
									while (v--) g[v] || w[v] || (w[v] = vi.call(l));
								w = nt(w)
							}
							p.apply(l, w);
							tt && !o && w.length > 0 && d + t.length > 1 && r.uniqueSort(l)
						}
						return tt && (ut = ft, rt = it), g
					};
				return i.el = 0, f ? s(i) : i
			}

			function li(n, t, i) {
				for (var u = 0, f = t.length; u < f; u++) r(n, t[u], i);
				return i
			}

			function lt(n, t, i, r, f) {
				var o, e, s, c, l, h = g(n),
					a = h.length;
				if (!r && h.length === 1) {
					if (e = h[0] = h[0].slice(0), e.length > 2 && (s = e[0]).type === "ID" && t.nodeType === 9 && !f && u.relative[e[1].type]) {
						if (t = u.find.ID(s.matches[0].replace(y, ""), t, f)[0], !t) return i;
						n = n.slice(e.shift().length)
					}
					for (o = et.POS.test(n) ? -1 : e.length - 1; o >= 0; o--) {
						if (s = e[o], u.relative[c = s.type]) break;
						if ((l = u.find[c]) && (r = l(s.matches[0].replace(y, ""), dt.test(e[0].type) && t.parentNode || t, f))) {
							if (e.splice(o, 1), n = r.length && e.join(""), !n) return p.apply(i, w.call(r, 0)), i;
							break
						}
					}
				}
				return yt(n, h)(r, t, f, i, dt.test(n)), i
			}

			function ni() {}
			var at, vt, u, tt, it, ti, yt, pt, k, rt, ii = !0,
				c = "undefined",
				e = ("sizcache" + Math.random()).replace(".", ""),
				ri = String,
				h = n.document,
				o = h.documentElement,
				ut = 0,
				ai = 0,
				vi = [].pop,
				p = [].push,
				w = [].slice,
				wt = [].indexOf || function(n) {
					for (var t = 0, i = this.length; t < i; t++)
						if (this[t] === n) return t;
					return -1
				},
				s = function(n, t) {
					return n[e] = t == null || t, n
				},
				bt = function() {
					var n = {},
						t = [];
					return s(function(i, r) {
						return t.push(i) > u.cacheLength && delete n[t.shift()], n[i + " "] = r
					}, n)
				},
				ui = bt(),
				fi = bt(),
				ei = bt(),
				f = "[\\x20\\t\\r\\n\\f]",
				v = "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",
				yi = v.replace("w", "w#"),
				oi = "\\[" + f + "*(" + v + ")" + f + "*(?:([*^$|!~]?=)" + f + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + yi + ")|)|)" + f + "*\\]",
				kt = ":(" + v + ")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:" + oi + ")|[^:]|\\\\.)*|.*))\\)|)",
				si = ":(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + f + "*((?:-\\d)?\\d*)" + f + "*\\)|)(?=[^-]|$)",
				ft = new RegExp("^" + f + "+|((?:^|[^\\\\])(?:\\\\.)*)" + f + "+$", "g"),
				pi = new RegExp("^" + f + "*," + f + "*"),
				wi = new RegExp("^" + f + "*([\\x20\\t\\r\\n\\f>+~])" + f + "*"),
				bi = new RegExp(kt),
				ki = /^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,
				dt = /[\x20\t\r\n\f]*[+~]/,
				di = /h\d/i,
				gi = /input|select|textarea|button/i,
				y = /\\(?!\\)/g,
				et = {
					ID: new RegExp("^#(" + v + ")"),
					CLASS: new RegExp("^\\.(" + v + ")"),
					NAME: new RegExp("^\\[name=['\"]?(" + v + ")['\"]?\\]"),
					TAG: new RegExp("^(" + v.replace("w", "w*") + ")"),
					ATTR: new RegExp("^" + oi),
					PSEUDO: new RegExp("^" + kt),
					POS: new RegExp(si, "i"),
					CHILD: new RegExp("^:(only|nth|first|last)-child(?:\\(" + f + "*(even|odd|(([+-]|)(\\d*)n|)" + f + "*(?:([+-]|)" + f + "*(\\d+)|))" + f + "*\\)|)", "i"),
					needsContext: new RegExp("^" + f + "*[>+~]|" + si, "i")
				},
				l = function(n) {
					var t = h.createElement("div");
					try {
						return n(t)
					} catch (i) {
						return !1
					} finally {
						t = null
					}
				},
				nr = l(function(n) {
					return n.appendChild(h.createComment("")), !n.getElementsByTagName("*").length
				}),
				tr = l(function(n) {
					return n.innerHTML = "<a href='#'><\/a>", n.firstChild && typeof n.firstChild.getAttribute !== c && n.firstChild.getAttribute("href") === "#"
				}),
				ir = l(function(n) {
					n.innerHTML = "<select><\/select>";
					var t = typeof n.lastChild.getAttribute("multiple");
					return t !== "boolean" && t !== "string"
				}),
				hi = l(function(n) {
					return n.innerHTML = "<div class='hidden e'><\/div><div class='hidden'><\/div>", !n.getElementsByClassName || !n.getElementsByClassName("e").length ? !1 : (n.lastChild.className = "e", n.getElementsByClassName("e").length === 2)
				}),
				rr = l(function(n) {
					n.id = e + 0;
					n.innerHTML = "<a name='" + e + "'><\/a><div name='" + e + "'><\/div>";
					o.insertBefore(n, o.firstChild);
					var t = h.getElementsByName && h.getElementsByName(e).length === 2 + h.getElementsByName(e + 0).length;
					return vt = !h.getElementById(e), o.removeChild(n), t
				});
			try {
				w.call(o.childNodes, 0)[0].nodeType
			} catch (ur) {
				w = function(n) {
					for (var t, i = []; t = this[n]; n++) i.push(t);
					return i
				}
			}
			r.matches = function(n, t) {
				return r(n, null, null, t)
			};
			r.matchesSelector = function(n, t) {
				return r(t, null, null, [n]).length > 0
			};
			tt = r.getText = function(n) {
				var r, i = "",
					u = 0,
					t = n.nodeType;
				if (t) {
					if (t === 1 || t === 9 || t === 11) {
						if (typeof n.textContent == "string") return n.textContent;
						for (n = n.firstChild; n; n = n.nextSibling) i += tt(n)
					} else if (t === 3 || t === 4) return n.nodeValue
				} else
					for (; r = n[u]; u++) i += tt(r);
				return i
			};
			it = r.isXML = function(n) {
				var t = n && (n.ownerDocument || n).documentElement;
				return t ? t.nodeName !== "HTML" : !1
			};
			ti = r.contains = o.contains ? function(n, t) {
				var r = n.nodeType === 9 ? n.documentElement : n,
					i = t && t.parentNode;
				return n === i || !!(i && i.nodeType === 1 && r.contains && r.contains(i))
			} : o.compareDocumentPosition ? function(n, t) {
				return t && !!(n.compareDocumentPosition(t) & 16)
			} : function(n, t) {
				while (t = t.parentNode)
					if (t === n) return !0;
				return !1
			};
			r.attr = function(n, t) {
				var i, r = it(n);
				return r || (t = t.toLowerCase()), (i = u.attrHandle[t]) ? i(n) : r || ir ? n.getAttribute(t) : (i = n.getAttributeNode(t), i ? typeof n[t] == "boolean" ? n[t] ? t : null : i.specified ? i.value : null : null)
			};
			u = r.selectors = {
				cacheLength: 50,
				createPseudo: s,
				match: et,
				attrHandle: tr ? {} : {
					href: function(n) {
						return n.getAttribute("href", 2)
					},
					type: function(n) {
						return n.getAttribute("type")
					}
				},
				find: {
					ID: vt ? function(n, t, i) {
						if (typeof t.getElementById !== c && !i) {
							var r = t.getElementById(n);
							return r && r.parentNode ? [r] : []
						}
					} : function(n, i, r) {
						if (typeof i.getElementById !== c && !r) {
							var u = i.getElementById(n);
							return u ? u.id === n || typeof u.getAttributeNode !== c && u.getAttributeNode("id").value === n ? [u] : t : []
						}
					},
					TAG: nr ? function(n, t) {
						if (typeof t.getElementsByTagName !== c) return t.getElementsByTagName(n)
					} : function(n, t) {
						var f = t.getElementsByTagName(n),
							i, r, u;
						if (n === "*") {
							for (r = [], u = 0; i = f[u]; u++) i.nodeType === 1 && r.push(i);
							return r
						}
						return f
					},
					NAME: rr && function(n, t) {
						if (typeof t.getElementsByName !== c) return t.getElementsByName(name)
					},
					CLASS: hi && function(n, t, i) {
						if (typeof t.getElementsByClassName !== c && !i) return t.getElementsByClassName(n)
					}
				},
				relative: {
					">": {
						dir: "parentNode",
						first: !0
					},
					" ": {
						dir: "parentNode"
					},
					"+": {
						dir: "previousSibling",
						first: !0
					},
					"~": {
						dir: "previousSibling"
					}
				},
				preFilter: {
					ATTR: function(n) {
						return n[1] = n[1].replace(y, ""), n[3] = (n[4] || n[5] || "").replace(y, ""), n[2] === "~=" && (n[3] = " " + n[3] + " "), n.slice(0, 4)
					},
					CHILD: function(n) {
						return n[1] = n[1].toLowerCase(), n[1] === "nth" ? (n[2] || r.error(n[0]), n[3] = +(n[3] ? n[4] + (n[5] || 1) : 2 * (n[2] === "even" || n[2] === "odd")), n[4] = +(n[6] + n[7] || n[2] === "odd")) : n[2] && r.error(n[0]), n
					},
					PSEUDO: function(n) {
						var t, i;
						return et.CHILD.test(n[0]) ? null : (n[3] ? n[2] = n[3] : (t = n[4]) && (bi.test(t) && (i = g(t, !0)) && (i = t.indexOf(")", t.length - i) - t.length) && (t = t.slice(0, i), n[0] = n[0].slice(0, i)), n[2] = t), n.slice(0, 3))
					}
				},
				filter: {
					ID: vt ? function(n) {
						return n = n.replace(y, ""),
							function(t) {
								return t.getAttribute("id") === n
							}
					} : function(n) {
						return n = n.replace(y, ""),
							function(t) {
								var i = typeof t.getAttributeNode !== c && t.getAttributeNode("id");
								return i && i.value === n
							}
					},
					TAG: function(n) {
						return n === "*" ? function() {
							return !0
						} : (n = n.replace(y, "").toLowerCase(), function(t) {
							return t.nodeName && t.nodeName.toLowerCase() === n
						})
					},
					CLASS: function(n) {
						var t = ui[e][n + " "];
						return t || (t = new RegExp("(^|" + f + ")" + n + "(" + f + "|$)")) && ui(n, function(n) {
							return t.test(n.className || typeof n.getAttribute !== c && n.getAttribute("class") || "")
						})
					},
					ATTR: function(n, t, i) {
						return function(u) {
							var f = r.attr(u, n);
							return f == null ? t === "!=" : t ? (f += "", t === "=" ? f === i : t === "!=" ? f !== i : t === "^=" ? i && f.indexOf(i) === 0 : t === "*=" ? i && f.indexOf(i) > -1 : t === "$=" ? i && f.substr(f.length - i.length) === i : t === "~=" ? (" " + f + " ").indexOf(i) > -1 : t === "|=" ? f === i || f.substr(0, i.length + 1) === i + "-" : !1) : !0
						}
					},
					CHILD: function(n, t, i, r) {
						return n === "nth" ? function(n) {
							var t, u, f = n.parentNode;
							if (i === 1 && r === 0) return !0;
							if (f)
								for (u = 0, t = f.firstChild; t; t = t.nextSibling)
									if (t.nodeType === 1 && (u++, n === t)) break;
							return u -= r, u === i || u % i == 0 && u / i >= 0
						} : function(t) {
							var i = t;
							switch (n) {
								case "only":
								case "first":
									while (i = i.previousSibling)
										if (i.nodeType === 1) return !1;
									if (n === "first") return !0;
									i = t;
								case "last":
									while (i = i.nextSibling)
										if (i.nodeType === 1) return !1;
									return !0
							}
						}
					},
					PSEUDO: function(n, t) {
						var f, i = u.pseudos[n] || u.setFilters[n.toLowerCase()] || r.error("unsupported pseudo: " + n);
						return i[e] ? i(t) : i.length > 1 ? (f = [n, n, "", t], u.setFilters.hasOwnProperty(n.toLowerCase()) ? s(function(n, r) {
							for (var u, f = i(n, t), e = f.length; e--;) u = wt.call(n, f[e]), n[u] = !(r[u] = f[e])
						}) : function(n) {
							return i(n, 0, f)
						}) : i
					}
				},
				pseudos: {
					not: s(function(n) {
						var i = [],
							r = [],
							t = yt(n.replace(ft, "$1"));
						return t[e] ? s(function(n, i, r, u) {
							for (var e, o = t(n, null, u, []), f = n.length; f--;)(e = o[f]) && (n[f] = !(i[f] = e))
						}) : function(n, u, f) {
							return i[0] = n, t(i, null, f, r), !r.pop()
						}
					}),
					has: s(function(n) {
						return function(t) {
							return r(n, t).length > 0
						}
					}),
					contains: s(function(n) {
						return function(t) {
							return (t.textContent || t.innerText || tt(t)).indexOf(n) > -1
						}
					}),
					enabled: function(n) {
						return n.disabled === !1
					},
					disabled: function(n) {
						return n.disabled === !0
					},
					checked: function(n) {
						var t = n.nodeName.toLowerCase();
						return t === "input" && !!n.checked || t === "option" && !!n.selected
					},
					selected: function(n) {
						return n.parentNode && n.parentNode.selectedIndex, n.selected === !0
					},
					parent: function(n) {
						return !u.pseudos.empty(n)
					},
					empty: function(n) {
						var t;
						for (n = n.firstChild; n;) {
							if (n.nodeName > "@" || (t = n.nodeType) === 3 || t === 4) return !1;
							n = n.nextSibling
						}
						return !0
					},
					header: function(n) {
						return di.test(n.nodeName)
					},
					text: function(n) {
						var t, i;
						return n.nodeName.toLowerCase() === "input" && (t = n.type) === "text" && ((i = n.getAttribute("type")) == null || i.toLowerCase() === t)
					},
					radio: b("radio"),
					checkbox: b("checkbox"),
					file: b("file"),
					password: b("password"),
					image: b("image"),
					submit: gt("submit"),
					reset: gt("reset"),
					button: function(n) {
						var t = n.nodeName.toLowerCase();
						return t === "input" && n.type === "button" || t === "button"
					},
					input: function(n) {
						return gi.test(n.nodeName)
					},
					focus: function(n) {
						var t = n.ownerDocument;
						return n === t.activeElement && (!t.hasFocus || t.hasFocus()) && !!(n.type || n.href || ~n.tabIndex)
					},
					active: function(n) {
						return n === n.ownerDocument.activeElement
					},
					first: a(function() {
						return [0]
					}),
					last: a(function(n, t) {
						return [t - 1]
					}),
					eq: a(function(n, t, i) {
						return [i < 0 ? i + t : i]
					}),
					even: a(function(n, t) {
						for (var i = 0; i < t; i += 2) n.push(i);
						return n
					}),
					odd: a(function(n, t) {
						for (var i = 1; i < t; i += 2) n.push(i);
						return n
					}),
					lt: a(function(n, t, i) {
						for (var r = i < 0 ? i + t : i; --r >= 0;) n.push(r);
						return n
					}),
					gt: a(function(n, t, i) {
						for (var r = i < 0 ? i + t : i; ++r < t;) n.push(r);
						return n
					})
				}
			};
			pt = o.compareDocumentPosition ? function(n, t) {
				return n === t ? (k = !0, 0) : (!n.compareDocumentPosition || !t.compareDocumentPosition ? n.compareDocumentPosition : n.compareDocumentPosition(t) & 4) ? -1 : 1
			} : function(n, t) {
				var i;
				if (n === t) return k = !0, 0;
				if (n.sourceIndex && t.sourceIndex) return n.sourceIndex - t.sourceIndex;
				var e, h, u = [],
					f = [],
					o = n.parentNode,
					s = t.parentNode,
					r = o;
				if (o === s) return d(n, t);
				if (!o) return -1;
				if (!s) return 1;
				while (r) u.unshift(r), r = r.parentNode;
				for (r = s; r;) f.unshift(r), r = r.parentNode;
				for (e = u.length, h = f.length, i = 0; i < e && i < h; i++)
					if (u[i] !== f[i]) return d(u[i], f[i]);
				return i === e ? d(n, f[i], -1) : d(u[i], t, 1)
			};
			[0, 0].sort(pt);
			ii = !k;
			r.uniqueSort = function(n) {
				var r, u = [],
					t = 1,
					i = 0;
				if (k = ii, n.sort(pt), k) {
					for (; r = n[t]; t++) r === n[t - 1] && (i = u.push(t));
					while (i--) n.splice(u[i], 1)
				}
				return n
			};
			r.error = function(n) {
				throw new Error("Syntax error, unrecognized expression: " + n);
			};
			yt = r.compile = function(n, t) {
				var r, u = [],
					f = [],
					i = ei[e][n + " "];
				if (!i) {
					for (t || (t = g(n)), r = t.length; r--;) i = ct(t[r]), i[e] ? u.push(i) : f.push(i);
					i = ei(n, ci(f, u))
				}
				return i
			};
			h.querySelectorAll && function() {
				var u, s = lt,
					h = /'|\\/g,
					c = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
					n = [":focus"],
					t = [":active"],
					i = o.matchesSelector || o.mozMatchesSelector || o.webkitMatchesSelector || o.oMatchesSelector || o.msMatchesSelector;
				l(function(t) {
					t.innerHTML = "<select><option selected=''><\/option><\/select>";
					t.querySelectorAll("[selected]").length || n.push("\\[" + f + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)");
					t.querySelectorAll(":checked").length || n.push(":checked")
				});
				l(function(t) {
					t.innerHTML = "<p test=''><\/p>";
					t.querySelectorAll("[test^='']").length && n.push("[*^$]=" + f + "*(?:\"\"|'')");
					t.innerHTML = "<input type='hidden'/>";
					t.querySelectorAll(":enabled").length || n.push(":enabled", ":disabled")
				});
				n = new RegExp(n.join("|"));
				lt = function(t, i, r, u, f) {
					if (!u && !f && !n.test(t)) {
						var o, l, a = !0,
							c = e,
							y = i,
							v = i.nodeType === 9 && t;
						if (i.nodeType === 1 && i.nodeName.toLowerCase() !== "object") {
							for (o = g(t), (a = i.getAttribute("id")) ? c = a.replace(h, "\\$&") : i.setAttribute("id", c), c = "[id='" + c + "'] ", l = o.length; l--;) o[l] = c + o[l].join("");
							y = dt.test(t) && i.parentNode || i;
							v = o.join(",")
						}
						if (v) try {
							return p.apply(r, w.call(y.querySelectorAll(v), 0)), r
						} catch (b) {} finally {
							a || i.removeAttribute("id")
						}
					}
					return s(t, i, r, u, f)
				};
				i && (l(function(n) {
					u = i.call(n, "div");
					try {
						i.call(n, "[test!='']:sizzle");
						t.push("!=", kt)
					} catch (r) {}
				}), t = new RegExp(t.join("|")), r.matchesSelector = function(f, e) {
					if (e = e.replace(c, "='$1']"), !it(f) && !t.test(e) && !n.test(e)) try {
						var o = i.call(f, e);
						if (o || u || f.document && f.document.nodeType !== 11) return o
					} catch (s) {}
					return r(e, null, null, [f]).length > 0
				})
			}();
			u.pseudos.nth = u.pseudos.eq;
			u.filters = ni.prototype = u.pseudos;
			u.setFilters = new ni;
			r.attr = i.attr;
			i.find = r;
			i.expr = r.selectors;
			i.expr[":"] = i.expr.pseudos;
			i.unique = r.uniqueSort;
			i.text = r.getText;
			i.isXMLDoc = r.isXML;
			i.contains = r.contains
		}(n);
	var re = /Until$/,
		ue = /^(?:parents|prev(?:Until|All))/,
		fe = /^.[^:#\[\.,]*$/,
		br = i.expr.match.needsContext,
		ee = {
			children: !0,
			contents: !0,
			next: !0,
			prev: !0
		};
	i.fn.extend({
		find: function(n) {
			var t, f, o, u, e, r, s = this;
			if (typeof n != "string") return i(n).filter(function() {
				for (t = 0, f = s.length; t < f; t++)
					if (i.contains(s[t], this)) return !0
			});
			for (r = this.pushStack("", "find", n), t = 0, f = this.length; t < f; t++)
				if (o = r.length, i.find(n, this[t], r), t > 0)
					for (u = o; u < r.length; u++)
						for (e = 0; e < o; e++)
							if (r[e] === r[u]) {
								r.splice(u--, 1);
								break
							}
			return r
		},
		has: function(n) {
			var t, r = i(n, this),
				u = r.length;
			return this.filter(function() {
				for (t = 0; t < u; t++)
					if (i.contains(this, r[t])) return !0
			})
		},
		not: function(n) {
			return this.pushStack(ei(this, n, !1), "not", n)
		},
		filter: function(n) {
			return this.pushStack(ei(this, n, !0), "filter", n)
		},
		is: function(n) {
			return !!n && (typeof n == "string" ? br.test(n) ? i(n, this.context).index(this[0]) >= 0 : i.filter(n, this).length > 0 : this.filter(n).length > 0)
		},
		closest: function(n, t) {
			for (var r, f = 0, o = this.length, u = [], e = br.test(n) || typeof n != "string" ? i(n, t || this.context) : 0; f < o; f++)
				for (r = this[f]; r && r.ownerDocument && r !== t && r.nodeType !== 11;) {
					if (e ? e.index(r) > -1 : i.find.matchesSelector(r, n)) {
						u.push(r);
						break
					}
					r = r.parentNode
				}
			return u = u.length > 1 ? i.unique(u) : u, this.pushStack(u, "closest", n)
		},
		index: function(n) {
			return n ? typeof n == "string" ? i.inArray(this[0], i(n)) : i.inArray(n.jquery ? n[0] : n, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1
		},
		add: function(n, t) {
			var u = typeof n == "string" ? i(n, t) : i.makeArray(n && n.nodeType ? [n] : n),
				r = i.merge(this.get(), u);
			return this.pushStack(k(u[0]) || k(r[0]) ? r : i.unique(r))
		},
		addBack: function(n) {
			return this.add(n == null ? this.prevObject : this.prevObject.filter(n))
		}
	});
	i.fn.andSelf = i.fn.addBack;
	i.each({
		parent: function(n) {
			var t = n.parentNode;
			return t && t.nodeType !== 11 ? t : null
		},
		parents: function(n) {
			return i.dir(n, "parentNode")
		},
		parentsUntil: function(n, t, r) {
			return i.dir(n, "parentNode", r)
		},
		next: function(n) {
			return fi(n, "nextSibling")
		},
		prev: function(n) {
			return fi(n, "previousSibling")
		},
		nextAll: function(n) {
			return i.dir(n, "nextSibling")
		},
		prevAll: function(n) {
			return i.dir(n, "previousSibling")
		},
		nextUntil: function(n, t, r) {
			return i.dir(n, "nextSibling", r)
		},
		prevUntil: function(n, t, r) {
			return i.dir(n, "previousSibling", r)
		},
		siblings: function(n) {
			return i.sibling((n.parentNode || {}).firstChild, n)
		},
		children: function(n) {
			return i.sibling(n.firstChild)
		},
		contents: function(n) {
			return i.nodeName(n, "iframe") ? n.contentDocument || n.contentWindow.document : i.merge([], n.childNodes)
		}
	}, function(n, t) {
		i.fn[n] = function(r, u) {
			var f = i.map(this, t, r);
			return re.test(n) || (u = r), u && typeof u == "string" && (f = i.filter(u, f)), f = this.length > 1 && !ee[n] ? i.unique(f) : f, this.length > 1 && ue.test(n) && (f = f.reverse()), this.pushStack(f, n, o.call(arguments).join(","))
		}
	});
	i.extend({
		filter: function(n, t, r) {
			return r && (n = ":not(" + n + ")"), t.length === 1 ? i.find.matchesSelector(t[0], n) ? [t[0]] : [] : i.find.matches(n, t)
		},
		dir: function(n, r, u) {
			for (var e = [], f = n[r]; f && f.nodeType !== 9 && (u === t || f.nodeType !== 1 || !i(f).is(u));) f.nodeType === 1 && e.push(f), f = f[r];
			return e
		},
		sibling: function(n, t) {
			for (var i = []; n; n = n.nextSibling) n.nodeType === 1 && n !== t && i.push(n);
			return i
		}
	});
	var kr = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
		oe = / jQuery\d+="(?:null|\d+)"/g,
		kt = /^\s+/,
		dr = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
		gr = /<([\w:]+)/,
		se = /<tbody/i,
		he = /<|&#?\w+;/,
		ce = /<(?:script|style|link)/i,
		le = /<(?:script|object|embed|option|style)/i,
		dt = new RegExp("<(?:" + kr + ")[\\s/>]", "i"),
		nu = /^(?:checkbox|radio)$/,
		tu = /checked\s*(?:[^=]|=\s*.checked.)/i,
		ae = /\/(java|ecma)script/i,
		ve = /^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,
		e = {
			option: [1, "<select multiple='multiple'>", "<\/select>"],
			legend: [1, "<fieldset>", "<\/fieldset>"],
			thead: [1, "<table>", "<\/table>"],
			tr: [2, "<table><tbody>", "<\/tbody><\/table>"],
			td: [3, "<table><tbody><tr>", "<\/tr><\/tbody><\/table>"],
			col: [2, "<table><tbody><\/tbody><colgroup>", "<\/colgroup><\/table>"],
			area: [1, "<map>", "<\/map>"],
			_default: [0, "", ""]
		},
		iu = oi(r),
		gt = iu.appendChild(r.createElement("div"));
	e.optgroup = e.option;
	e.tbody = e.tfoot = e.colgroup = e.caption = e.thead;
	e.th = e.td;
	i.support.htmlSerialize || (e._default = [1, "X<div>", "<\/div>"]);
	i.fn.extend({
		text: function(n) {
			return i.access(this, function(n) {
				return n === t ? i.text(this) : this.empty().append((this[0] && this[0].ownerDocument || r).createTextNode(n))
			}, null, n, arguments.length)
		},
		wrapAll: function(n) {
			if (i.isFunction(n)) return this.each(function(t) {
				i(this).wrapAll(n.call(this, t))
			});
			if (this[0]) {
				var t = i(n, this[0].ownerDocument).eq(0).clone(!0);
				this[0].parentNode && t.insertBefore(this[0]);
				t.map(function() {
					for (var n = this; n.firstChild && n.firstChild.nodeType === 1;) n = n.firstChild;
					return n
				}).append(this)
			}
			return this
		},
		wrapInner: function(n) {
			return i.isFunction(n) ? this.each(function(t) {
				i(this).wrapInner(n.call(this, t))
			}) : this.each(function() {
				var t = i(this),
					r = t.contents();
				r.length ? r.wrapAll(n) : t.append(n)
			})
		},
		wrap: function(n) {
			var t = i.isFunction(n);
			return this.each(function(r) {
				i(this).wrapAll(t ? n.call(this, r) : n)
			})
		},
		unwrap: function() {
			return this.parent().each(function() {
				i.nodeName(this, "body") || i(this).replaceWith(this.childNodes)
			}).end()
		},
		append: function() {
			return this.domManip(arguments, !0, function(n) {
				(this.nodeType === 1 || this.nodeType === 11) && this.appendChild(n)
			})
		},
		prepend: function() {
			return this.domManip(arguments, !0, function(n) {
				(this.nodeType === 1 || this.nodeType === 11) && this.insertBefore(n, this.firstChild)
			})
		},
		before: function() {
			if (!k(this[0])) return this.domManip(arguments, !1, function(n) {
				this.parentNode.insertBefore(n, this)
			});
			if (arguments.length) {
				var n = i.clean(arguments);
				return this.pushStack(i.merge(n, this), "before", this.selector)
			}
		},
		after: function() {
			if (!k(this[0])) return this.domManip(arguments, !1, function(n) {
				this.parentNode.insertBefore(n, this.nextSibling)
			});
			if (arguments.length) {
				var n = i.clean(arguments);
				return this.pushStack(i.merge(this, n), "after", this.selector)
			}
		},
		remove: function(n, t) {
			for (var r, u = 0;
				(r = this[u]) != null; u++)(!n || i.filter(n, [r]).length) && (t || r.nodeType !== 1 || (i.cleanData(r.getElementsByTagName("*")), i.cleanData([r])), r.parentNode && r.parentNode.removeChild(r));
			return this
		},
		empty: function() {
			for (var n, t = 0;
				(n = this[t]) != null; t++)
				for (n.nodeType === 1 && i.cleanData(n.getElementsByTagName("*")); n.firstChild;) n.removeChild(n.firstChild);
			return this
		},
		clone: function(n, t) {
			return n = n == null ? !1 : n, t = t == null ? n : t, this.map(function() {
				return i.clone(this, n, t)
			})
		},
		html: function(n) {
			return i.access(this, function(n) {
				var r = this[0] || {},
					u = 0,
					f = this.length;
				if (n === t) return r.nodeType === 1 ? r.innerHTML.replace(oe, "") : t;
				if (typeof n == "string" && !ce.test(n) && (i.support.htmlSerialize || !dt.test(n)) && (i.support.leadingWhitespace || !kt.test(n)) && !e[(gr.exec(n) || ["", ""])[1].toLowerCase()]) {
					n = n.replace(dr, "<$1><\/$2>");
					try {
						for (; u < f; u++) r = this[u] || {}, r.nodeType === 1 && (i.cleanData(r.getElementsByTagName("*")), r.innerHTML = n);
						r = 0
					} catch (o) {}
				}
				r && this.empty().append(n)
			}, null, n, arguments.length)
		},
		replaceWith: function(n) {
			return k(this[0]) ? this.length ? this.pushStack(i(i.isFunction(n) ? n() : n), "replaceWith", n) : this : i.isFunction(n) ? this.each(function(t) {
				var r = i(this),
					u = r.html();
				r.replaceWith(n.call(this, t, u))
			}) : (typeof n != "string" && (n = i(n).detach()), this.each(function() {
				var t = this.nextSibling,
					r = this.parentNode;
				i(this).remove();
				t ? i(t).before(n) : i(r).append(n)
			}))
		},
		detach: function(n) {
			return this.remove(n, !0)
		},
		domManip: function(n, r, u) {
			n = [].concat.apply([], n);
			var h, o, f, a, e = 0,
				s = n[0],
				c = [],
				l = this.length;
			if (!i.support.checkClone && l > 1 && typeof s == "string" && tu.test(s)) return this.each(function() {
				i(this).domManip(n, r, u)
			});
			if (i.isFunction(s)) return this.each(function(f) {
				var e = i(this);
				n[0] = s.call(this, f, r ? e.html() : t);
				e.domManip(n, r, u)
			});
			if (this[0]) {
				if (h = i.buildFragment(n, this, c), f = h.fragment, o = f.firstChild, f.childNodes.length === 1 && (f = o), o)
					for (r = r && i.nodeName(o, "tr"), a = h.cacheable || l - 1; e < l; e++) u.call(r && i.nodeName(this[e], "table") ? pu(this[e], "tbody") : this[e], e === a ? f : i.clone(f, !0, !0));
				f = o = null;
				c.length && i.each(c, function(n, t) {
					t.src ? i.ajax ? i.ajax({
						url: t.src,
						type: "GET",
						dataType: "script",
						async: !1,
						global: !1,
						throws: !0
					}) : i.error("no ajax") : i.globalEval((t.text || t.textContent || t.innerHTML || "").replace(ve, ""));
					t.parentNode && t.parentNode.removeChild(t)
				})
			}
			return this
		}
	});
	i.buildFragment = function(n, u, f) {
		var o, s, h, e = n[0];
		return u = u || r, u = !u.nodeType && u[0] || u, u = u.ownerDocument || u, n.length === 1 && typeof e == "string" && e.length < 512 && u === r && e.charAt(0) === "<" && !le.test(e) && (i.support.checkClone || !tu.test(e)) && (i.support.html5Clone || !dt.test(e)) && (s = !0, o = i.fragments[e], h = o !== t), o || (o = u.createDocumentFragment(), i.clean(n, u, o, f), s && (i.fragments[e] = h && o)), {
			fragment: o,
			cacheable: s
		}
	};
	i.fragments = {};
	i.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function(n, t) {
		i.fn[n] = function(r) {
			var o, u = 0,
				s = [],
				f = i(r),
				h = f.length,
				e = this.length === 1 && this[0].parentNode;
			if ((e == null || e && e.nodeType === 11 && e.childNodes.length === 1) && h === 1) return f[t](this[0]), this;
			for (; u < h; u++) o = (u > 0 ? this.clone(!0) : this).get(), i(f[u])[t](o), s = s.concat(o);
			return this.pushStack(s, n, f.selector)
		}
	});
	i.extend({
			clone: function(n, t, r) {
				var f, o, u, e;
				if (i.support.html5Clone || i.isXMLDoc(n) || !dt.test("<" + n.nodeName + ">") ? e = n.cloneNode(!0) : (gt.innerHTML = n.outerHTML, gt.removeChild(e = gt.firstChild)), (!i.support.noCloneEvent || !i.support.noCloneChecked) && (n.nodeType === 1 || n.nodeType === 11) && !i.isXMLDoc(n))
					for (hi(n, e), f = nt(n), o = nt(e), u = 0; f[u]; ++u) o[u] && hi(f[u], o[u]);
				if (t && (si(n, e), r))
					for (f = nt(n), o = nt(e), u = 0; f[u]; ++u) si(f[u], o[u]);
				return f = o = null, e
			},
			clean: function(n, t, u, f) {
				var h, c, o, p, v, d, s, w, a, b, k, y = t === r && iu,
					l = [];
				for (t && typeof t.createDocumentFragment != "undefined" || (t = r), h = 0;
					(o = n[h]) != null; h++)
					if (typeof o == "number" && (o += ""), o) {
						if (typeof o == "string")
							if (he.test(o)) {
								for (y = y || oi(t), s = t.createElement("div"), y.appendChild(s), o = o.replace(dr, "<$1><\/$2>"), p = (gr.exec(o) || ["", ""])[1].toLowerCase(), v = e[p] || e._default, d = v[0], s.innerHTML = v[1] + o + v[2]; d--;) s = s.lastChild;
								if (!i.support.tbody)
									for (w = se.test(o), a = p === "table" && !w ? s.firstChild && s.firstChild.childNodes : v[1] === "<table>" && !w ? s.childNodes : [], c = a.length - 1; c >= 0; --c) i.nodeName(a[c], "tbody") && !a[c].childNodes.length && a[c].parentNode.removeChild(a[c]);
								!i.support.leadingWhitespace && kt.test(o) && s.insertBefore(t.createTextNode(kt.exec(o)[0]), s.firstChild);
								o = s.childNodes;
								s.parentNode.removeChild(s)
							} else o = t.createTextNode(o);
						o.nodeType ? l.push(o) : i.merge(l, o)
					}
				if (s && (o = s = y = null), !i.support.appendChecked)
					for (h = 0;
						(o = l[h]) != null; h++) i.nodeName(o, "input") ? ci(o) : typeof o.getElementsByTagName != "undefined" && i.grep(o.getElementsByTagName("input"), ci);
				if (u)
					for (b = function(n) {
							if (!n.type || ae.test(n.type)) return f ? f.push(n.parentNode ? n.parentNode.removeChild(n) : n) : u.appendChild(n)
						}, h = 0;
						(o = l[h]) != null; h++) i.nodeName(o, "script") && b(o) || (u.appendChild(o), typeof o.getElementsByTagName != "undefined" && (k = i.grep(i.merge([], o.getElementsByTagName("script")), b), l.splice.apply(l, [h + 1, 0].concat(k)), h += k.length));
				return l
			},
			cleanData: function(n, t) {
				for (var f, u, r, e, h = 0, o = i.expando, s = i.cache, c = i.support.deleteExpando, l = i.event.special;
					(r = n[h]) != null; h++)
					if ((t || i.acceptData(r)) && (u = r[o], f = u && s[u], f)) {
						if (f.events)
							for (e in f.events) l[e] ? i.event.remove(r, e) : i.removeEvent(r, e, f.handle);
						s[u] && (delete s[u], c ? delete r[o] : r.removeAttribute ? r.removeAttribute(o) : r[o] = null, i.deletedIds.push(u))
					}
			}
		}),
		function() {
			var t, n;
			i.uaMatch = function(n) {
				n = n.toLowerCase();
				var t = /(chrome)[ \/]([\w.]+)/.exec(n) || /(webkit)[ \/]([\w.]+)/.exec(n) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(n) || /(msie) ([\w.]+)/.exec(n) || n.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(n) || [];
				return {
					browser: t[1] || "",
					version: t[2] || "0"
				}
			};
			t = i.uaMatch(rf.userAgent);
			n = {};
			t.browser && (n[t.browser] = !0, n.version = t.version);
			n.chrome ? n.webkit = !0 : n.webkit && (n.safari = !0);
			i.browser = n;
			i.sub = function() {
				function n(t, i) {
					return new n.fn.init(t, i)
				}
				i.extend(!0, n, this);
				n.superclass = this;
				n.fn = n.prototype = this();
				n.fn.constructor = n;
				n.sub = this.sub;
				n.fn.init = function(r, u) {
					return u && u instanceof i && !(u instanceof n) && (u = n(u)), i.fn.init.call(this, r, u, t)
				};
				n.fn.init.prototype = n.fn;
				var t = n(r);
				return n
			}
		}();
	var u, y, p, ni = /alpha\([^)]*\)/i,
		ye = /opacity=([^)]*)/,
		pe = /^(top|right|bottom|left)$/,
		we = /^(none|table(?!-c[ea]).+)/,
		ru = /^margin/,
		be = new RegExp("^(" + ft + ")(.*)$", "i"),
		ot = new RegExp("^(" + ft + ")(?!px)[a-z%]+$", "i"),
		ke = new RegExp("^([-+])=(" + ft + ")", "i"),
		ti = {
			BODY: "block"
		},
		de = {
			position: "absolute",
			visibility: "hidden",
			display: "block"
		},
		uu = {
			letterSpacing: 0,
			fontWeight: 400
		},
		c = ["Top", "Right", "Bottom", "Left"],
		fu = ["Webkit", "O", "Moz", "ms"],
		ge = i.fn.toggle;
	i.fn.extend({
		css: function(n, r) {
			return i.access(this, function(n, r, u) {
				return u !== t ? i.style(n, r, u) : i.css(n, r)
			}, n, r, arguments.length > 1)
		},
		show: function() {
			return ai(this, !0)
		},
		hide: function() {
			return ai(this)
		},
		toggle: function(n, t) {
			var r = typeof n == "boolean";
			return i.isFunction(n) && i.isFunction(t) ? ge.apply(this, arguments) : this.each(function() {
				(r ? n : tt(this)) ? i(this).show(): i(this).hide()
			})
		}
	});
	i.extend({
		cssHooks: {
			opacity: {
				get: function(n, t) {
					if (t) {
						var i = u(n, "opacity");
						return i === "" ? "1" : i
					}
				}
			}
		},
		cssNumber: {
			fillOpacity: !0,
			fontWeight: !0,
			lineHeight: !0,
			opacity: !0,
			orphans: !0,
			widows: !0,
			zIndex: !0,
			zoom: !0
		},
		cssProps: {
			float: i.support.cssFloat ? "cssFloat" : "styleFloat"
		},
		style: function(n, r, u, f) {
			if (n && n.nodeType !== 3 && n.nodeType !== 8 && n.style) {
				var o, s, e, h = i.camelCase(r),
					c = n.style;
				if (r = i.cssProps[h] || (i.cssProps[h] = li(c, h)), e = i.cssHooks[r] || i.cssHooks[h], u === t) return e && "get" in e && (o = e.get(n, !1, f)) !== t ? o : c[r];
				if ((s = typeof u, s === "string" && (o = ke.exec(u)) && (u = (o[1] + 1) * o[2] + parseFloat(i.css(n, r)), s = "number"), u != null && (s !== "number" || !isNaN(u))) && (s !== "number" || i.cssNumber[h] || (u += "px"), !e || !("set" in e) || (u = e.set(n, u, f)) !== t)) try {
					c[r] = u
				} catch (l) {}
			}
		},
		css: function(n, r, f, e) {
			var o, c, s, h = i.camelCase(r);
			return r = i.cssProps[h] || (i.cssProps[h] = li(n.style, h)), s = i.cssHooks[r] || i.cssHooks[h], s && "get" in s && (o = s.get(n, !0, e)), o === t && (o = u(n, r)), o === "normal" && r in uu && (o = uu[r]), f || e !== t ? (c = parseFloat(o), f || i.isNumeric(c) ? c || 0 : o) : o
		},
		swap: function(n, t, i) {
			var u, r, f = {};
			for (r in t) f[r] = n.style[r], n.style[r] = t[r];
			u = i.call(n);
			for (r in t) n.style[r] = f[r];
			return u
		}
	});
	n.getComputedStyle ? u = function(t, r) {
		var f, o, s, h, e = n.getComputedStyle(t, null),
			u = t.style;
		return e && (f = e.getPropertyValue(r) || e[r], f === "" && !i.contains(t.ownerDocument, t) && (f = i.style(t, r)), ot.test(f) && ru.test(r) && (o = u.width, s = u.minWidth, h = u.maxWidth, u.minWidth = u.maxWidth = u.width = f, f = e.width, u.width = o, u.minWidth = s, u.maxWidth = h)), f
	} : r.documentElement.currentStyle && (u = function(n, t) {
		var f, u, i = n.currentStyle && n.currentStyle[t],
			r = n.style;
		return i == null && r && r[t] && (i = r[t]), ot.test(i) && !pe.test(t) && (f = r.left, u = n.runtimeStyle && n.runtimeStyle.left, u && (n.runtimeStyle.left = n.currentStyle.left), r.left = t === "fontSize" ? "1em" : i, i = r.pixelLeft + "px", r.left = f, u && (n.runtimeStyle.left = u)), i === "" ? "auto" : i
	});
	i.each(["height", "width"], function(n, t) {
		i.cssHooks[t] = {
			get: function(n, r, f) {
				if (r) return n.offsetWidth === 0 && we.test(u(n, "display")) ? i.swap(n, de, function() {
					return pi(n, t, f)
				}) : pi(n, t, f)
			},
			set: function(n, r, u) {
				return vi(n, r, u ? yi(n, t, u, i.support.boxSizing && i.css(n, "boxSizing") === "border-box") : 0)
			}
		}
	});
	i.support.opacity || (i.cssHooks.opacity = {
		get: function(n, t) {
			return ye.test((t && n.currentStyle ? n.currentStyle.filter : n.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
		},
		set: function(n, t) {
			var r = n.style,
				u = n.currentStyle,
				e = i.isNumeric(t) ? "alpha(opacity=" + t * 100 + ")" : "",
				f = u && u.filter || r.filter || "";
			(r.zoom = 1, t >= 1 && i.trim(f.replace(ni, "")) === "" && r.removeAttribute && (r.removeAttribute("filter"), u && !u.filter)) || (r.filter = ni.test(f) ? f.replace(ni, e) : f + " " + e)
		}
	});
	i(function() {
		i.support.reliableMarginRight || (i.cssHooks.marginRight = {
			get: function(n, t) {
				return i.swap(n, {
					display: "inline-block"
				}, function() {
					if (t) return u(n, "marginRight")
				})
			}
		});
		!i.support.pixelPosition && i.fn.position && i.each(["top", "left"], function(n, t) {
			i.cssHooks[t] = {
				get: function(n, r) {
					if (r) {
						var f = u(n, t);
						return ot.test(f) ? i(n).position()[t] + "px" : f
					}
				}
			}
		})
	});
	i.expr && i.expr.filters && (i.expr.filters.hidden = function(n) {
		return n.offsetWidth === 0 && n.offsetHeight === 0 || !i.support.reliableHiddenOffsets && (n.style && n.style.display || u(n, "display")) === "none"
	}, i.expr.filters.visible = function(n) {
		return !i.expr.filters.hidden(n)
	});
	i.each({
		margin: "",
		padding: "",
		border: "Width"
	}, function(n, t) {
		i.cssHooks[n + t] = {
			expand: function(i) {
				for (var u = typeof i == "string" ? i.split(" ") : [i], f = {}, r = 0; r < 4; r++) f[n + c[r] + t] = u[r] || u[r - 2] || u[0];
				return f
			}
		};
		ru.test(n) || (i.cssHooks[n + t].set = vi)
	});
	var no = /%20/g,
		to = /\[\]$/,
		eu = /\r?\n/g,
		io = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
		ro = /^(?:select|textarea)/i;
	i.fn.extend({
		serialize: function() {
			return i.param(this.serializeArray())
		},
		serializeArray: function() {
			return this.map(function() {
				return this.elements ? i.makeArray(this.elements) : this
			}).filter(function() {
				return this.name && !this.disabled && (this.checked || ro.test(this.nodeName) || io.test(this.type))
			}).map(function(n, t) {
				var r = i(this).val();
				return r == null ? null : i.isArray(r) ? i.map(r, function(n) {
					return {
						name: t.name,
						value: n.replace(eu, "\r\n")
					}
				}) : {
					name: t.name,
					value: r.replace(eu, "\r\n")
				}
			}).get()
		}
	});
	i.param = function(n, r) {
		var u, f = [],
			e = function(n, t) {
				t = i.isFunction(t) ? t() : t == null ? "" : t;
				f[f.length] = encodeURIComponent(n) + "=" + encodeURIComponent(t)
			};
		if (r === t && (r = i.ajaxSettings && i.ajaxSettings.traditional), i.isArray(n) || n.jquery && !i.isPlainObject(n)) i.each(n, function() {
			e(this.name, this.value)
		});
		else
			for (u in n) vt(u, n[u], r, e);
		return f.join("&").replace(no, "+")
	};
	var l, a, uo = /#.*$/,
		fo = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
		eo = /^(?:GET|HEAD)$/,
		oo = /^\/\//,
		ou = /\?/,
		so = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
		ho = /([?&])_=[^&]*/,
		su = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
		hu = i.fn.load,
		ii = {},
		cu = {},
		lu = ["*/"] + ["*"];
	try {
		a = tf.href
	} catch (po) {
		a = r.createElement("a");
		a.href = "";
		a = a.href
	}
	l = su.exec(a.toLowerCase()) || [];
	i.fn.load = function(n, r, u) {
		if (typeof n != "string" && hu) return hu.apply(this, arguments);
		if (!this.length) return this;
		var f, o, s, h = this,
			e = n.indexOf(" ");
		return e >= 0 && (f = n.slice(e, n.length), n = n.slice(0, e)), i.isFunction(r) ? (u = r, r = t) : r && typeof r == "object" && (o = "POST"), i.ajax({
			url: n,
			type: o,
			dataType: "html",
			data: r,
			complete: function(n, t) {
				u && h.each(u, s || [n.responseText, t, n])
			}
		}).done(function(n) {
			s = arguments;
			h.html(f ? i("<div>").append(n.replace(so, "")).find(f) : n)
		}), this
	};
	i.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(n, t) {
		i.fn[t] = function(n) {
			return this.on(t, n)
		}
	});
	i.each(["get", "post"], function(n, r) {
		i[r] = function(n, u, f, e) {
			return i.isFunction(u) && (e = e || f, f = u, u = t), i.ajax({
				type: r,
				url: n,
				data: u,
				success: f,
				dataType: e
			})
		}
	});
	i.extend({
		getScript: function(n, r) {
			return i.get(n, t, r, "script")
		},
		getJSON: function(n, t, r) {
			return i.get(n, t, r, "json")
		},
		ajaxSetup: function(n, t) {
			return t ? ki(n, i.ajaxSettings) : (t = n, n = i.ajaxSettings), ki(n, t), n
		},
		ajaxSettings: {
			url: a,
			isLocal: /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/.test(l[1]),
			global: !0,
			type: "GET",
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			processData: !0,
			async: !0,
			accepts: {
				xml: "application/xml, text/xml",
				html: "text/html",
				text: "text/plain",
				json: "application/json, text/javascript",
				"*": lu
			},
			contents: {
				xml: /xml/,
				html: /html/,
				json: /json/
			},
			responseFields: {
				xml: "responseXML",
				text: "responseText"
			},
			converters: {
				"* text": n.String,
				"text html": !0,
				"text json": i.parseJSON,
				"text xml": i.parseXML
			},
			flatOptions: {
				context: !0,
				url: !0
			}
		},
		ajaxPrefilter: bi(ii),
		ajaxTransport: bi(cu),
		ajax: function(n, r) {
			function p(n, r, h, l) {
				var a, tt, w, it, p, v = r;
				e !== 2 && (e = 2, d && clearTimeout(d), c = t, k = l || "", f.readyState = n > 0 ? 4 : 0, h && (it = wu(u, f, h)), n >= 200 && n < 300 || n === 304 ? (u.ifModified && (p = f.getResponseHeader("Last-Modified"), p && (i.lastModified[o] = p), p = f.getResponseHeader("Etag"), p && (i.etag[o] = p)), n === 304 ? (v = "notmodified", a = !0) : (a = bu(u, it), v = a.state, tt = a.data, w = a.error, a = !w)) : (w = v, (!v || n) && (v = "error", n < 0 && (n = 0))), f.status = n, f.statusText = (r || v) + "", a ? nt.resolveWith(s, [tt, v, f]) : nt.rejectWith(s, [f, v, w]), f.statusCode(b), b = t, y && g.trigger("ajax" + (a ? "Success" : "Error"), [f, u, a ? tt : w]), ut.fireWith(s, [f, v]), y && (g.trigger("ajaxComplete", [f, u]), --i.active || i.event.trigger("ajaxStop")))
			}
			var tt, rt;
			typeof n == "object" && (r = n, n = t);
			r = r || {};
			var o, k, w, c, d, a, y, v, u = i.ajaxSetup({}, r),
				s = u.context || u,
				g = s !== u && (s.nodeType || s instanceof i) ? i(s) : i.event,
				nt = i.Deferred(),
				ut = i.Callbacks("once memory"),
				b = u.statusCode || {},
				ft = {},
				et = {},
				e = 0,
				ot = "canceled",
				f = {
					readyState: 0,
					setRequestHeader: function(n, t) {
						if (!e) {
							var i = n.toLowerCase();
							n = et[i] = et[i] || n;
							ft[n] = t
						}
						return this
					},
					getAllResponseHeaders: function() {
						return e === 2 ? k : null
					},
					getResponseHeader: function(n) {
						var i;
						if (e === 2) {
							if (!w)
								for (w = {}; i = fo.exec(k);) w[i[1].toLowerCase()] = i[2];
							i = w[n.toLowerCase()]
						}
						return i === t ? null : i
					},
					overrideMimeType: function(n) {
						return e || (u.mimeType = n), this
					},
					abort: function(n) {
						return n = n || ot, c && c.abort(n), p(0, n), this
					}
				};
			if (nt.promise(f), f.success = f.done, f.error = f.fail, f.complete = ut.add, f.statusCode = function(n) {
					if (n) {
						var t;
						if (e < 2)
							for (t in n) b[t] = [b[t], n[t]];
						else t = n[f.status], f.always(t)
					}
					return this
				}, u.url = ((n || u.url) + "").replace(uo, "").replace(oo, l[1] + "//"), u.dataTypes = i.trim(u.dataType || "*").toLowerCase().split(h), u.crossDomain == null && (a = su.exec(u.url.toLowerCase()), u.crossDomain = !(!a || a[1] === l[1] && a[2] === l[2] && (a[3] || (a[1] === "http:" ? 80 : 443)) == (l[3] || (l[1] === "http:" ? 80 : 443)))), u.data && u.processData && typeof u.data != "string" && (u.data = i.param(u.data, u.traditional)), it(ii, u, r, f), e === 2) return f;
			y = u.global;
			u.type = u.type.toUpperCase();
			u.hasContent = !eo.test(u.type);
			y && i.active++ == 0 && i.event.trigger("ajaxStart");
			u.hasContent || (u.data && (u.url += (ou.test(u.url) ? "&" : "?") + u.data, delete u.data), o = u.url, u.cache === !1 && (tt = i.now(), rt = u.url.replace(ho, "$1_=" + tt), u.url = rt + (rt === u.url ? (ou.test(u.url) ? "&" : "?") + "_=" + tt : "")));
			(u.data && u.hasContent && u.contentType !== !1 || r.contentType) && f.setRequestHeader("Content-Type", u.contentType);
			u.ifModified && (o = o || u.url, i.lastModified[o] && f.setRequestHeader("If-Modified-Since", i.lastModified[o]), i.etag[o] && f.setRequestHeader("If-None-Match", i.etag[o]));
			f.setRequestHeader("Accept", u.dataTypes[0] && u.accepts[u.dataTypes[0]] ? u.accepts[u.dataTypes[0]] + (u.dataTypes[0] !== "*" ? ", " + lu + "; q=0.01" : "") : u.accepts["*"]);
			for (v in u.headers) f.setRequestHeader(v, u.headers[v]);
			if (!u.beforeSend || u.beforeSend.call(s, f, u) !== !1 && e !== 2) {
				ot = "abort";
				for (v in {
						success: 1,
						error: 1,
						complete: 1
					}) f[v](u[v]);
				if (c = it(cu, u, r, f), c) {
					f.readyState = 1;
					y && g.trigger("ajaxSend", [f, u]);
					u.async && u.timeout > 0 && (d = setTimeout(function() {
						f.abort("timeout")
					}, u.timeout));
					try {
						e = 1;
						c.send(ft, p)
					} catch (st) {
						if (!(e < 2)) throw st;
						p(-1, st)
					}
				} else p(-1, "No Transport");
				return f
			}
			return f.abort()
		},
		active: 0,
		lastModified: {},
		etag: {}
	});
	var au = [],
		co = /\?/,
		st = /(=)\?(?=&|$)|\?\?/,
		lo = i.now();
	i.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function() {
			var n = au.pop() || i.expando + "_" + lo++;
			return this[n] = !0, n
		}
	});
	i.ajaxPrefilter("json jsonp", function(r, u, f) {
		var e, s, o, h = r.data,
			c = r.url,
			l = r.jsonp !== !1,
			a = l && st.test(c),
			v = l && !a && typeof h == "string" && !(r.contentType || "").indexOf("application/x-www-form-urlencoded") && st.test(h);
		if (r.dataTypes[0] === "jsonp" || a || v) return e = r.jsonpCallback = i.isFunction(r.jsonpCallback) ? r.jsonpCallback() : r.jsonpCallback, s = n[e], a ? r.url = c.replace(st, "$1" + e) : v ? r.data = h.replace(st, "$1" + e) : l && (r.url += (co.test(c) ? "&" : "?") + r.jsonp + "=" + e), r.converters["script json"] = function() {
			return o || i.error(e + " was not called"), o[0]
		}, r.dataTypes[0] = "json", n[e] = function() {
			o = arguments
		}, f.always(function() {
			n[e] = s;
			r[e] && (r.jsonpCallback = u.jsonpCallback, au.push(e));
			o && i.isFunction(s) && s(o[0]);
			o = s = t
		}), "script"
	});
	i.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /javascript|ecmascript/
		},
		converters: {
			"text script": function(n) {
				return i.globalEval(n), n
			}
		}
	});
	i.ajaxPrefilter("script", function(n) {
		n.cache === t && (n.cache = !1);
		n.crossDomain && (n.type = "GET", n.global = !1)
	});
	i.ajaxTransport("script", function(n) {
		if (n.crossDomain) {
			var i, u = r.head || r.getElementsByTagName("head")[0] || r.documentElement;
			return {
				send: function(f, e) {
					i = r.createElement("script");
					i.async = "async";
					n.scriptCharset && (i.charset = n.scriptCharset);
					i.src = n.url;
					i.onload = i.onreadystatechange = function(n, r) {
						(r || !i.readyState || /loaded|complete/.test(i.readyState)) && (i.onload = i.onreadystatechange = null, u && i.parentNode && u.removeChild(i), i = t, r || e(200, "success"))
					};
					u.insertBefore(i, u.firstChild)
				},
				abort: function() {
					i && i.onload(0, 1)
				}
			}
		}
	});
	ht = n.ActiveXObject ? function() {
		for (var n in w) w[n](0, 1)
	} : !1;
	vu = 0;
	i.ajaxSettings.xhr = n.ActiveXObject ? function() {
			return !this.isLocal && di() || ku()
		} : di,
		function(n) {
			i.extend(i.support, {
				ajax: !!n,
				cors: !!n && "withCredentials" in n
			})
		}(i.ajaxSettings.xhr());
	i.support.ajax && i.ajaxTransport(function(r) {
		if (!r.crossDomain || i.support.cors) {
			var u;
			return {
				send: function(f, e) {
					var h, s, o = r.xhr();
					if (r.username ? o.open(r.type, r.url, r.async, r.username, r.password) : o.open(r.type, r.url, r.async), r.xhrFields)
						for (s in r.xhrFields) o[s] = r.xhrFields[s];
					r.mimeType && o.overrideMimeType && o.overrideMimeType(r.mimeType);
					r.crossDomain || f["X-Requested-With"] || (f["X-Requested-With"] = "XMLHttpRequest");
					try {
						for (s in f) o.setRequestHeader(s, f[s])
					} catch (c) {}
					o.send(r.hasContent && r.data || null);
					u = function(n, f) {
						var s, a, v, c, l;
						try {
							if (u && (f || o.readyState === 4))
								if (u = t, h && (o.onreadystatechange = i.noop, ht && delete w[h]), f) o.readyState !== 4 && o.abort();
								else {
									s = o.status;
									v = o.getAllResponseHeaders();
									c = {};
									l = o.responseXML;
									l && l.documentElement && (c.xml = l);
									try {
										c.text = o.responseText
									} catch (p) {}
									try {
										a = o.statusText
									} catch (p) {
										a = ""
									}!s && r.isLocal && !r.crossDomain ? s = c.text ? 200 : 404 : s === 1223 && (s = 204)
								}
						} catch (y) {
							f || e(-1, y)
						}
						c && e(s, a, c, v)
					};
					r.async ? o.readyState === 4 ? setTimeout(u, 0) : (h = ++vu, ht && (w || (w = {}, i(n).unload(ht)), w[h] = u), o.onreadystatechange = u) : u()
				},
				abort: function() {
					u && u(0, 1)
				}
			}
		}
	});
	var b, ct, ao = /^(?:toggle|show|hide)$/,
		vo = new RegExp("^(?:([-+])=|)(" + ft + ")([a-z%]*)$", "i"),
		yo = /queueHooks$/,
		lt = [nf],
		d = {
			"*": [function(n, t) {
				var o, s, r = this.createTween(n, t),
					e = vo.exec(t),
					h = r.cur(),
					u = +h || 0,
					f = 1,
					c = 20;
				if (e) {
					if (o = +e[2], s = e[3] || (i.cssNumber[n] ? "" : "px"), s !== "px" && u) {
						u = i.css(r.elem, n, !0) || o || 1;
						do f = f || ".5", u /= f, i.style(r.elem, n, u + s); while (f !== (f = r.cur() / h) && f !== 1 && --c)
					}
					r.unit = s;
					r.start = u;
					r.end = e[1] ? u + (e[1] + 1) * o : o
				}
				return r
			}]
		};
	i.Animation = i.extend(nr, {
		tweener: function(n, t) {
			i.isFunction(n) ? (t = n, n = ["*"]) : n = n.split(" ");
			for (var r, u = 0, f = n.length; u < f; u++) r = n[u], d[r] = d[r] || [], d[r].unshift(t)
		},
		prefilter: function(n, t) {
			t ? lt.unshift(n) : lt.push(n)
		}
	});
	i.Tween = f;
	f.prototype = {
		constructor: f,
		init: function(n, t, r, u, f, e) {
			this.elem = n;
			this.prop = r;
			this.easing = f || "swing";
			this.options = t;
			this.start = this.now = this.cur();
			this.end = u;
			this.unit = e || (i.cssNumber[r] ? "" : "px")
		},
		cur: function() {
			var n = f.propHooks[this.prop];
			return n && n.get ? n.get(this) : f.propHooks._default.get(this)
		},
		run: function(n) {
			var t, r = f.propHooks[this.prop];
			return this.pos = this.options.duration ? t = i.easing[this.easing](n, this.options.duration * n, 0, 1, this.options.duration) : t = n, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), r && r.set ? r.set(this) : f.propHooks._default.set(this), this
		}
	};
	f.prototype.init.prototype = f.prototype;
	f.propHooks = {
		_default: {
			get: function(n) {
				var t;
				return n.elem[n.prop] == null || !!n.elem.style && n.elem.style[n.prop] != null ? (t = i.css(n.elem, n.prop, !1, ""), !t || t === "auto" ? 0 : t) : n.elem[n.prop]
			},
			set: function(n) {
				i.fx.step[n.prop] ? i.fx.step[n.prop](n) : n.elem.style && (n.elem.style[i.cssProps[n.prop]] != null || i.cssHooks[n.prop]) ? i.style(n.elem, n.prop, n.now + n.unit) : n.elem[n.prop] = n.now
			}
		}
	};
	f.propHooks.scrollTop = f.propHooks.scrollLeft = {
		set: function(n) {
			n.elem.nodeType && n.elem.parentNode && (n.elem[n.prop] = n.now)
		}
	};
	i.each(["toggle", "show", "hide"], function(n, t) {
		var r = i.fn[t];
		i.fn[t] = function(u, f, e) {
			return u == null || typeof u == "boolean" || !n && i.isFunction(u) && i.isFunction(f) ? r.apply(this, arguments) : this.animate(rt(t, !0), u, f, e)
		}
	});
	i.fn.extend({
		fadeTo: function(n, t, i, r) {
			return this.filter(tt).css("opacity", 0).show().end().animate({
				opacity: t
			}, n, i, r)
		},
		animate: function(n, t, r, u) {
			var e = i.isEmptyObject(n),
				f = i.speed(t, r, u),
				o = function() {
					var t = nr(this, i.extend({}, n), f);
					e && t.stop(!0)
				};
			return e || f.queue === !1 ? this.each(o) : this.queue(f.queue, o)
		},
		stop: function(n, r, u) {
			var f = function(n) {
				var t = n.stop;
				delete n.stop;
				t(u)
			};
			return typeof n != "string" && (u = r, r = n, n = t), r && n !== !1 && this.queue(n || "fx", []), this.each(function() {
				var o = !0,
					t = n != null && n + "queueHooks",
					e = i.timers,
					r = i._data(this);
				if (t) r[t] && r[t].stop && f(r[t]);
				else
					for (t in r) r[t] && r[t].stop && yo.test(t) && f(r[t]);
				for (t = e.length; t--;) e[t].elem === this && (n == null || e[t].queue === n) && (e[t].anim.stop(u), o = !1, e.splice(t, 1));
				(o || !u) && i.dequeue(this, n)
			})
		}
	});
	i.each({
		slideDown: rt("show"),
		slideUp: rt("hide"),
		slideToggle: rt("toggle"),
		fadeIn: {
			opacity: "show"
		},
		fadeOut: {
			opacity: "hide"
		},
		fadeToggle: {
			opacity: "toggle"
		}
	}, function(n, t) {
		i.fn[n] = function(n, i, r) {
			return this.animate(t, n, i, r)
		}
	});
	i.speed = function(n, t, r) {
		var u = n && typeof n == "object" ? i.extend({}, n) : {
			complete: r || !r && t || i.isFunction(n) && n,
			duration: n,
			easing: r && t || t && !i.isFunction(t) && t
		};
		return u.duration = i.fx.off ? 0 : typeof u.duration == "number" ? u.duration : u.duration in i.fx.speeds ? i.fx.speeds[u.duration] : i.fx.speeds._default, (u.queue == null || u.queue === !0) && (u.queue = "fx"), u.old = u.complete, u.complete = function() {
			i.isFunction(u.old) && u.old.call(this);
			u.queue && i.dequeue(this, u.queue)
		}, u
	};
	i.easing = {
		linear: function(n) {
			return n
		},
		swing: function(n) {
			return .5 - Math.cos(n * Math.PI) / 2
		}
	};
	i.timers = [];
	i.fx = f.prototype.init;
	i.fx.tick = function() {
		var u, n = i.timers,
			r = 0;
		for (b = i.now(); r < n.length; r++) u = n[r], u() || n[r] !== u || n.splice(r--, 1);
		n.length || i.fx.stop();
		b = t
	};
	i.fx.timer = function(n) {
		n() && i.timers.push(n) && !ct && (ct = setInterval(i.fx.tick, i.fx.interval))
	};
	i.fx.interval = 13;
	i.fx.stop = function() {
		clearInterval(ct);
		ct = null
	};
	i.fx.speeds = {
		slow: 600,
		fast: 200,
		_default: 400
	};
	i.fx.step = {};
	i.expr && i.expr.filters && (i.expr.filters.animated = function(n) {
		return i.grep(i.timers, function(t) {
			return n === t.elem
		}).length
	});
	ri = /^(?:body|html)$/i;
	i.fn.offset = function(n) {
		if (arguments.length) return n === t ? this : this.each(function(t) {
			i.offset.setOffset(this, n, t)
		});
		var u, o, s, h, c, l, a, f = {
				top: 0,
				left: 0
			},
			r = this[0],
			e = r && r.ownerDocument;
		if (e) return (o = e.body) === r ? i.offset.bodyOffset(r) : (u = e.documentElement, i.contains(u, r) ? (typeof r.getBoundingClientRect != "undefined" && (f = r.getBoundingClientRect()), s = tr(e), h = u.clientTop || o.clientTop || 0, c = u.clientLeft || o.clientLeft || 0, l = s.pageYOffset || u.scrollTop, a = s.pageXOffset || u.scrollLeft, {
			top: f.top + l - h,
			left: f.left + a - c
		}) : f)
	};
	i.offset = {
		bodyOffset: function(n) {
			var t = n.offsetTop,
				r = n.offsetLeft;
			return i.support.doesNotIncludeMarginInBodyOffset && (t += parseFloat(i.css(n, "marginTop")) || 0, r += parseFloat(i.css(n, "marginLeft")) || 0), {
				top: t,
				left: r
			}
		},
		setOffset: function(n, t, r) {
			var f = i.css(n, "position");
			f === "static" && (n.style.position = "relative");
			var e = i(n),
				o = e.offset(),
				l = i.css(n, "top"),
				a = i.css(n, "left"),
				v = (f === "absolute" || f === "fixed") && i.inArray("auto", [l, a]) > -1,
				u = {},
				s = {},
				h, c;
			v ? (s = e.position(), h = s.top, c = s.left) : (h = parseFloat(l) || 0, c = parseFloat(a) || 0);
			i.isFunction(t) && (t = t.call(n, r, o));
			t.top != null && (u.top = t.top - o.top + h);
			t.left != null && (u.left = t.left - o.left + c);
			"using" in t ? t.using.call(n, u) : e.css(u)
		}
	};
	i.fn.extend({
		position: function() {
			if (this[0]) {
				var u = this[0],
					n = this.offsetParent(),
					t = this.offset(),
					r = ri.test(n[0].nodeName) ? {
						top: 0,
						left: 0
					} : n.offset();
				return t.top -= parseFloat(i.css(u, "marginTop")) || 0, t.left -= parseFloat(i.css(u, "marginLeft")) || 0, r.top += parseFloat(i.css(n[0], "borderTopWidth")) || 0, r.left += parseFloat(i.css(n[0], "borderLeftWidth")) || 0, {
					top: t.top - r.top,
					left: t.left - r.left
				}
			}
		},
		offsetParent: function() {
			return this.map(function() {
				for (var n = this.offsetParent || r.body; n && !ri.test(n.nodeName) && i.css(n, "position") === "static";) n = n.offsetParent;
				return n || r.body
			})
		}
	});
	i.each({
		scrollLeft: "pageXOffset",
		scrollTop: "pageYOffset"
	}, function(n, r) {
		var u = /Y/.test(r);
		i.fn[n] = function(f) {
			return i.access(this, function(n, f, e) {
				var o = tr(n);
				if (e === t) return o ? r in o ? o[r] : o.document.documentElement[f] : n[f];
				o ? o.scrollTo(u ? i(o).scrollLeft() : e, u ? e : i(o).scrollTop()) : n[f] = e
			}, n, f, arguments.length, null)
		}
	});
	i.each({
		Height: "height",
		Width: "width"
	}, function(n, r) {
		i.each({
			padding: "inner" + n,
			content: r,
			"": "outer" + n
		}, function(u, f) {
			i.fn[f] = function(f, e) {
				var o = arguments.length && (u || typeof f != "boolean"),
					s = u || (f === !0 || e === !0 ? "margin" : "border");
				return i.access(this, function(r, u, f) {
					var e;
					return i.isWindow(r) ? r.document.documentElement["client" + n] : r.nodeType === 9 ? (e = r.documentElement, Math.max(r.body["scroll" + n], e["scroll" + n], r.body["offset" + n], e["offset" + n], e["client" + n])) : f === t ? i.css(r, u, f, s) : i.style(r, u, f, s)
				}, r, o ? f : t, o, null)
			}
		})
	});
	n.jQuery = n.$ = i;
	typeof define == "function" && define.amd && define.amd.jQuery && define("jquery", [], function() {
		return i
	})
})(window),
function(n, t, i) {
	function v(t, i) {
		var u, f;
		if (n.isArray(t)) {
			for (u = t.length - 1; u >= 0; u--) f = t[u], n.type(f) === "string" && r.transports[f] || (i.log("Invalid transport: " + f + ", removing it from the transports list."), t.splice(u, 1));
			t.length === 0 && (i.log("No transports remain within the specified transport array."), t = null)
		} else if (r.transports[t] || t === "auto") {
			if (t === "auto" && r._.ieVersion <= 8) return ["longPolling"]
		} else i.log("Invalid transport: " + t.toString() + "."), t = null;
		return t
	}

	function y(n) {
		return n === "http:" ? 80 : n === "https:" ? 443 : void 0
	}

	function h(n, t) {
		return t.match(/:\d+$/) ? t : t + ":" + y(n)
	}

	function p(t, i) {
		var u = this,
			r = [];
		u.tryBuffer = function(i) {
			return t.state === n.signalR.connectionState.connecting ? (r.push(i), !0) : !1
		};
		u.drain = function() {
			if (t.state === n.signalR.connectionState.connected)
				while (r.length > 0) i(r.shift())
		};
		u.clear = function() {
			r = []
		}
	}
	var f = {
		nojQuery: "jQuery was not found. Please ensure jQuery is referenced before the SignalR client JavaScript file.",
		noTransportOnInit: "No transport could be initialized successfully. Try specifying a different transport or none at all for auto initialization.",
		errorOnNegotiate: "Error during negotiation request.",
		stoppedWhileLoading: "The connection was stopped during page load.",
		stoppedWhileNegotiating: "The connection was stopped during the negotiate request.",
		errorParsingNegotiateResponse: "Error parsing negotiate response.",
		errorDuringStartRequest: "Error during start request. Stopping the connection.",
		stoppedDuringStartRequest: "The connection was stopped during the start request.",
		errorParsingStartResponse: "Error parsing start response: '{0}'. Stopping the connection.",
		invalidStartResponse: "Invalid start response: '{0}'. Stopping the connection.",
		protocolIncompatible: "You are using a version of the client that isn't compatible with the server. Client version {0}, server version {1}.",
		sendFailed: "Send failed.",
		parseFailed: "Failed at parsing response: {0}",
		longPollFailed: "Long polling request failed.",
		eventSourceFailedToConnect: "EventSource failed to connect.",
		eventSourceError: "Error raised by EventSource",
		webSocketClosed: "WebSocket closed.",
		pingServerFailedInvalidResponse: "Invalid ping response when pinging server: '{0}'.",
		pingServerFailed: "Failed to ping server.",
		pingServerFailedStatusCode: "Failed to ping server.  Server responded with status code {0}, stopping the connection.",
		pingServerFailedParse: "Failed to parse ping server response, stopping the connection.",
		noConnectionTransport: "Connection is in an invalid state, there is no transport active.",
		webSocketsInvalidState: "The Web Socket transport is in an invalid state, transitioning into reconnecting.",
		reconnectTimeout: "Couldn't reconnect within the configured timeout of {0} ms, disconnecting.",
		reconnectWindowTimeout: "The client has been inactive since {0} and it has exceeded the inactivity timeout of {1} ms. Stopping the connection."
	};
	if (typeof n != "function") throw new Error(f.nojQuery);
	var r, c, s = t.document.readyState === "complete",
		e = n(t),
		l = "__Negotiate Aborted__",
		u = {
			onStart: "onStart",
			onStarting: "onStarting",
			onReceived: "onReceived",
			onError: "onError",
			onConnectionSlow: "onConnectionSlow",
			onReconnecting: "onReconnecting",
			onReconnect: "onReconnect",
			onStateChanged: "onStateChanged",
			onDisconnect: "onDisconnect"
		},
		w = function(n, i) {
			if (i !== !1) {
				var r;
				typeof t.console != "undefined" && (r = "[" + (new Date).toTimeString() + "] SignalR: " + n, t.console.debug ? t.console.debug(r) : t.console.log && t.console.log(r))
			}
		},
		o = function(t, i, r) {
			return i === t.state ? (t.state = r, n(t).triggerHandler(u.onStateChanged, [{
				oldState: i,
				newState: r
			}]), !0) : !1
		},
		b = function(n) {
			return n.state === r.connectionState.disconnected
		},
		a = function(n) {
			return n._.keepAliveData.activated && n.transport.supportsKeepAlive(n)
		},
		k = function(i) {
			var f, e;
			i._.configuredStopReconnectingTimeout || (e = function(t) {
				var i = r._.format(r.resources.reconnectTimeout, t.disconnectTimeout);
				t.log(i);
				n(t).triggerHandler(u.onError, [r._.error(i, "TimeoutException")]);
				t.stop(!1, !1)
			}, i.reconnecting(function() {
				var n = this;
				n.state === r.connectionState.reconnecting && (f = t.setTimeout(function() {
					e(n)
				}, n.disconnectTimeout))
			}), i.stateChanged(function(n) {
				n.oldState === r.connectionState.reconnecting && t.clearTimeout(f)
			}), i._.configuredStopReconnectingTimeout = !0)
		};
	r = function(n, t, i) {
		return new r.fn.init(n, t, i)
	};
	r._ = {
		defaultContentType: "application/x-www-form-urlencoded; charset=UTF-8",
		ieVersion: function() {
			var i, n;
			return t.navigator.appName === "Microsoft Internet Explorer" && (n = /MSIE ([0-9]+\.[0-9]+)/.exec(t.navigator.userAgent), n && (i = t.parseFloat(n[1]))), i
		}(),
		error: function(n, t, i) {
			var r = new Error(n);
			return r.source = t, typeof i != "undefined" && (r.context = i), r
		},
		transportError: function(n, t, r, u) {
			var f = this.error(n, r, u);
			return f.transport = t ? t.name : i, f
		},
		format: function() {
			for (var t = arguments[0], n = 0; n < arguments.length - 1; n++) t = t.replace("{" + n + "}", arguments[n + 1]);
			return t
		},
		firefoxMajorVersion: function(n) {
			var t = n.match(/Firefox\/(\d+)/);
			return !t || !t.length || t.length < 2 ? 0 : parseInt(t[1], 10)
		},
		configurePingInterval: function(i) {
			var f = i._.config,
				e = function(t) {
					n(i).triggerHandler(u.onError, [t])
				};
			f && !i._.pingIntervalId && f.pingInterval && (i._.pingIntervalId = t.setInterval(function() {
				r.transports._logic.pingServer(i).fail(e)
			}, f.pingInterval))
		}
	};
	r.events = u;
	r.resources = f;
	r.ajaxDefaults = {
		processData: !0,
		timeout: null,
		async: !0,
		global: !1,
		cache: !1
	};
	r.changeState = o;
	r.isDisconnecting = b;
	r.connectionState = {
		connecting: 0,
		connected: 1,
		reconnecting: 2,
		disconnected: 4
	};
	r.hub = {
		start: function() {
			throw new Error("SignalR: Error loading hubs. Ensure your hubs reference is correct, e.g. <script src='/signalr/js'><\/script>.");
		}
	};
	e.load(function() {
		s = !0
	});
	r.fn = r.prototype = {
		init: function(t, i, r) {
			var f = n(this);
			this.url = t;
			this.qs = i;
			this.lastError = null;
			this._ = {
				keepAliveData: {},
				connectingMessageBuffer: new p(this, function(n) {
					f.triggerHandler(u.onReceived, [n])
				}),
				onFailedTimeoutHandle: null,
				lastMessageAt: (new Date).getTime(),
				lastActiveAt: (new Date).getTime(),
				beatInterval: 5e3,
				beatHandle: null,
				totalTransportConnectTimeout: 0
			};
			typeof r == "boolean" && (this.logging = r)
		},
		_parseResponse: function(n) {
			var t = this;
			return n ? typeof n == "string" ? t.json.parse(n) : n : n
		},
		_originalJson: t.JSON,
		json: t.JSON,
		isCrossDomain: function(i, r) {
			var u;
			return (i = n.trim(i), r = r || t.location, i.indexOf("http") !== 0) ? !1 : (u = t.document.createElement("a"), u.href = i, u.protocol + h(u.protocol, u.host) !== r.protocol + h(r.protocol, r.host))
		},
		ajaxDataType: "text",
		contentType: "application/json; charset=UTF-8",
		logging: !1,
		state: r.connectionState.disconnected,
		clientProtocol: "1.4",
		reconnectDelay: 2e3,
		transportConnectTimeout: 0,
		disconnectTimeout: 3e4,
		reconnectWindow: 3e4,
		keepAliveWarnAt: 2 / 3,
		start: function(i, h) {
			var c = this,
				y = {
					pingInterval: 3e5,
					waitForPageLoad: !0,
					transport: "auto",
					jsonp: !1
				},
				d, p = c._deferral || n.Deferred(),
				w = t.document.createElement("a"),
				b, g;
			if (c.lastError = null, c._deferral = p, !c.json) throw new Error("SignalR: No JSON parser found. Please ensure json2.js is referenced before the SignalR.js file if you need to support clients without native JSON parsing support, e.g. IE<8.");
			if (n.type(i) === "function" ? h = i : n.type(i) === "object" && (n.extend(y, i), n.type(y.callback) === "function" && (h = y.callback)), y.transport = v(y.transport, c), !y.transport) throw new Error("SignalR: Invalid transport(s) specified, aborting start.");
			return (c._.config = y, !s && y.waitForPageLoad === !0) ? (c._.deferredStartHandler = function() {
				c.start(i, h)
			}, e.bind("load", c._.deferredStartHandler), p.promise()) : c.state === r.connectionState.connecting ? p.promise() : o(c, r.connectionState.disconnected, r.connectionState.connecting) === !1 ? (p.resolve(c), p.promise()) : (k(c), w.href = c.url, w.protocol && w.protocol !== ":" ? (c.protocol = w.protocol, c.host = w.host) : (c.protocol = t.document.location.protocol, c.host = w.host || t.document.location.host), c.baseUrl = c.protocol + "//" + c.host, c.wsProtocol = c.protocol === "https:" ? "wss://" : "ws://", y.transport === "auto" && y.jsonp === !0 && (y.transport = "longPolling"), c.url.indexOf("//") === 0 && (c.url = t.location.protocol + c.url, c.log("Protocol relative URL detected, normalizing it to '" + c.url + "'.")), this.isCrossDomain(c.url) && (c.log("Auto detected cross domain url."), y.transport === "auto" && (y.transport = ["webSockets", "serverSentEvents", "longPolling"]), typeof y.withCredentials == "undefined" && (y.withCredentials = !0), y.jsonp || (y.jsonp = !n.support.cors, y.jsonp && c.log("Using jsonp because this browser doesn't support CORS.")), c.contentType = r._.defaultContentType), c.withCredentials = y.withCredentials, c.ajaxDataType = y.jsonp ? "jsonp" : "text", n(c).bind(u.onStart, function() {
				n.type(h) === "function" && h.call(c);
				p.resolve(c)
			}), d = function(i, s) {
				var y = r._.error(f.noTransportOnInit);
				if (s = s || 0, s >= i.length) {
					n(c).triggerHandler(u.onError, [y]);
					p.reject(y);
					c.stop();
					return
				}
				if (c.state !== r.connectionState.disconnected) {
					var w = i[s],
						h = r.transports[w],
						l = !1,
						v = function() {
							l || (l = !0, t.clearTimeout(c._.onFailedTimeoutHandle), h.stop(c), d(i, s + 1))
						};
					c.transport = h;
					try {
						c._.onFailedTimeoutHandle = t.setTimeout(function() {
							c.log(h.name + " timed out when trying to connect.");
							v()
						}, c._.totalTransportConnectTimeout);
						h.start(c, function() {
							var i = function() {
								var i = r._.firefoxMajorVersion(t.navigator.userAgent) >= 11,
									f = !!c.withCredentials && i;
								c.log("The start request succeeded. Transitioning to the connected state.");
								a(c) && r.transports._logic.monitorKeepAlive(c);
								r.transports._logic.startHeartbeat(c);
								r._.configurePingInterval(c);
								o(c, r.connectionState.connecting, r.connectionState.connected) || c.log("WARNING! The connection was not in the connecting state.");
								c._.connectingMessageBuffer.drain();
								n(c).triggerHandler(u.onStart);
								e.bind("unload", function() {
									c.log("Window unloading, stopping the connection.");
									c.stop(f)
								});
								i && e.bind("beforeunload", function() {
									t.setTimeout(function() {
										c.stop(f)
									}, 0)
								})
							};
							if (!l) {
								if (l = !0, t.clearTimeout(c._.onFailedTimeoutHandle), c.state === r.connectionState.disconnected) return;
								c.log(h.name + " transport selected. Initiating start request.");
								r.transports._logic.ajaxStart(c, i)
							}
						}, v)
					} catch (b) {
						c.log(h.name + " transport threw '" + b.message + "' when attempting to start.");
						v()
					}
				}
			}, b = c.url + "/negotiate", g = function(t, i) {
				var e = r._.error(f.errorOnNegotiate, t, i._.negotiateRequest);
				n(i).triggerHandler(u.onError, e);
				p.reject(e);
				i.stop()
			}, n(c).triggerHandler(u.onStarting), b = r.transports._logic.prepareQueryString(c, b), c.log("Negotiating with '" + b + "'."), c._.negotiateRequest = r.transports._logic.ajax(c, {
				url: b,
				error: function(n, t) {
					t !== l ? g(n, c) : p.reject(r._.error(f.stoppedWhileNegotiating, null, c._.negotiateRequest))
				},
				success: function(t) {
					var i, e, h, o = [],
						s = [];
					try {
						i = c._parseResponse(t)
					} catch (l) {
						g(r._.error(f.errorParsingNegotiateResponse, l), c);
						return
					}
					if (e = c._.keepAliveData, c.appRelativeUrl = i.Url, c.id = i.ConnectionId, c.token = i.ConnectionToken, c.webSocketServerUrl = i.WebSocketServerUrl, c._.pollTimeout = i.ConnectionTimeout * 1e3 + 1e4, c.disconnectTimeout = i.DisconnectTimeout * 1e3, c._.totalTransportConnectTimeout = c.transportConnectTimeout + i.TransportConnectTimeout * 1e3, i.KeepAliveTimeout ? (e.activated = !0, e.timeout = i.KeepAliveTimeout * 1e3, e.timeoutWarning = e.timeout * c.keepAliveWarnAt, c._.beatInterval = (e.timeout - e.timeoutWarning) / 3) : e.activated = !1, c.reconnectWindow = c.disconnectTimeout + (e.timeout || 0), !i.ProtocolVersion || i.ProtocolVersion !== c.clientProtocol) {
						h = r._.error(r._.format(f.protocolIncompatible, c.clientProtocol, i.ProtocolVersion));
						n(c).triggerHandler(u.onError, [h]);
						p.reject(h);
						return
					}
					n.each(r.transports, function(n) {
						if (n.indexOf("_") === 0 || n === "webSockets" && !i.TryWebSockets) return !0;
						s.push(n)
					});
					n.isArray(y.transport) ? n.each(y.transport, function(t, i) {
						n.inArray(i, s) >= 0 && o.push(i)
					}) : y.transport === "auto" ? o = s : n.inArray(y.transport, s) >= 0 && o.push(y.transport);
					d(o)
				}
			}), p.promise())
		},
		starting: function(t) {
			var i = this;
			return n(i).bind(u.onStarting, function() {
				t.call(i)
			}), i
		},
		send: function(n) {
			var t = this;
			if (t.state === r.connectionState.disconnected) throw new Error("SignalR: Connection must be started before data can be sent. Call .start() before .send()");
			if (t.state === r.connectionState.connecting) throw new Error("SignalR: Connection has not been fully initialized. Use .start().done() or .start().fail() to run logic after the connection has started.");
			return t.transport.send(t, n), t
		},
		received: function(t) {
			var i = this;
			return n(i).bind(u.onReceived, function(n, r) {
				t.call(i, r)
			}), i
		},
		stateChanged: function(t) {
			var i = this;
			return n(i).bind(u.onStateChanged, function(n, r) {
				t.call(i, r)
			}), i
		},
		error: function(t) {
			var i = this;
			return n(i).bind(u.onError, function(n, r, u) {
				i.lastError = r;
				t.call(i, r, u)
			}), i
		},
		disconnected: function(t) {
			var i = this;
			return n(i).bind(u.onDisconnect, function() {
				t.call(i)
			}), i
		},
		connectionSlow: function(t) {
			var i = this;
			return n(i).bind(u.onConnectionSlow, function() {
				t.call(i)
			}), i
		},
		reconnecting: function(t) {
			var i = this;
			return n(i).bind(u.onReconnecting, function() {
				t.call(i)
			}), i
		},
		reconnected: function(t) {
			var i = this;
			return n(i).bind(u.onReconnect, function() {
				t.call(i)
			}), i
		},
		stop: function(i, h) {
			var c = this,
				v = c._deferral;
			if (c._.deferredStartHandler && e.unbind("load", c._.deferredStartHandler), delete c._.config, delete c._.deferredStartHandler, !s && (!c._.config || c._.config.waitForPageLoad === !0)) {
				c.log("Stopping connection prior to negotiate.");
				v && v.reject(r._.error(f.stoppedWhileLoading));
				return
			}
			if (c.state !== r.connectionState.disconnected) return c.log("Stopping connection."), o(c, c.state, r.connectionState.disconnected), t.clearTimeout(c._.beatHandle), t.clearTimeout(c._.onFailedTimeoutHandle), t.clearInterval(c._.pingIntervalId), c.transport && (c.transport.stop(c), h !== !1 && c.transport.abort(c, i), a(c) && r.transports._logic.stopMonitoringKeepAlive(c), c.transport = null), c._.negotiateRequest && (c._.negotiateRequest.abort(l), delete c._.negotiateRequest), r.transports._logic.tryAbortStartRequest(c), n(c).triggerHandler(u.onDisconnect), delete c._deferral, delete c.messageId, delete c.groupsToken, delete c.id, delete c._.pingIntervalId, delete c._.lastMessageAt, delete c._.lastActiveAt, c._.connectingMessageBuffer.clear(), c
		},
		log: function(n) {
			w(n, this.logging)
		}
	};
	r.fn.init.prototype = r.fn;
	r.noConflict = function() {
		return n.connection === r && (n.connection = c), r
	};
	n.connection && (c = n.connection);
	n.connection = n.signalR = r
}(window.jQuery, window),
function(n, t) {
	function e(n) {
		n._.keepAliveData.monitoring && s(n);
		r.markActive(n) && (n._.beatHandle = t.setTimeout(function() {
			e(n)
		}, n._.beatInterval))
	}

	function s(t) {
		var r = t._.keepAliveData,
			f;
		t.state === i.connectionState.connected && (f = (new Date).getTime() - t._.lastMessageAt, f >= r.timeout ? (t.log("Keep alive timed out.  Notifying transport that connection has been lost."), t.transport.lostConnection(t)) : f >= r.timeoutWarning ? r.userNotified || (t.log("Keep alive has been missed, connection may be dead/slow."), n(t).triggerHandler(u.onConnectionSlow), r.userNotified = !0) : r.userNotified = !1)
	}

	function f(n, t) {
		var i = n.url + t;
		return n.transport && (i += "?transport=" + n.transport.name), r.prepareQueryString(n, i)
	}
	var i = n.signalR,
		u = n.signalR.events,
		h = n.signalR.changeState,
		o = "__Start Aborted__",
		r;
	i.transports = {};
	r = i.transports._logic = {
		ajax: function(t, i) {
			return n.ajax(n.extend(!0, {}, n.signalR.ajaxDefaults, {
				type: "GET",
				data: {},
				xhrFields: {
					withCredentials: t.withCredentials
				},
				contentType: t.contentType,
				dataType: t.ajaxDataType
			}, i))
		},
		pingServer: function(t) {
			var e, f, u = n.Deferred();
			return t.transport ? (e = t.url + "/ping", e = r.addQs(e, t.qs), f = r.ajax(t, {
				url: e,
				success: function(n) {
					var r;
					try {
						r = t._parseResponse(n)
					} catch (e) {
						u.reject(i._.transportError(i.resources.pingServerFailedParse, t.transport, e, f));
						t.stop();
						return
					}
					r.Response === "pong" ? u.resolve() : u.reject(i._.transportError(i._.format(i.resources.pingServerFailedInvalidResponse, n), t.transport, null, f))
				},
				error: function(n) {
					n.status === 401 || n.status === 403 ? (u.reject(i._.transportError(i._.format(i.resources.pingServerFailedStatusCode, n.status), t.transport, n, f)), t.stop()) : u.reject(i._.transportError(i.resources.pingServerFailed, t.transport, n, f))
				}
			})) : u.reject(i._.transportError(i.resources.noConnectionTransport, t.transport)), u.promise()
		},
		prepareQueryString: function(n, i) {
			var u;
			return u = r.addQs(i, "clientProtocol=" + n.clientProtocol), u = r.addQs(u, n.qs), n.token && (u += "&connectionToken=" + t.encodeURIComponent(n.token)), n.data && (u += "&connectionData=" + t.encodeURIComponent(n.data)), u
		},
		addQs: function(t, i) {
			var r = t.indexOf("?") !== -1 ? "&" : "?",
				u;
			if (!i) return t;
			if (typeof i == "object") return t + r + n.param(i);
			if (typeof i == "string") return u = i.charAt(0), (u === "?" || u === "&") && (r = ""), t + r + i;
			throw new Error("Query string property must be either a string or object.");
		},
		getUrl: function(n, i, u, f) {
			var s = i === "webSockets" ? "" : n.baseUrl,
				e = s + n.appRelativeUrl,
				o = "transport=" + i;
			return n.groupsToken && (o += "&groupsToken=" + t.encodeURIComponent(n.groupsToken)), u ? (e += f ? "/poll" : "/reconnect", n.messageId && (o += "&messageId=" + t.encodeURIComponent(n.messageId))) : e += "/connect", e += "?" + o, e = r.prepareQueryString(n, e), e + ("&tid=" + Math.floor(Math.random() * 11))
		},
		maximizePersistentResponse: function(n) {
			return {
				MessageId: n.C,
				Messages: n.M,
				Initialized: typeof n.S != "undefined" ? !0 : !1,
				Disconnect: typeof n.D != "undefined" ? !0 : !1,
				ShouldReconnect: typeof n.T != "undefined" ? !0 : !1,
				LongPollDelay: n.L,
				GroupsToken: n.G
			}
		},
		updateGroups: function(n, t) {
			t && (n.groupsToken = t)
		},
		stringifySend: function(n, t) {
			return typeof t == "string" || typeof t == "undefined" || t === null ? t : n.json.stringify(t)
		},
		ajaxSend: function(t, e) {
			var h = r.stringifySend(t, e),
				c = f(t, "/send"),
				o, s = function(t, r) {
					n(r).triggerHandler(u.onError, [i._.transportError(i.resources.sendFailed, r.transport, t, o), e])
				};
			return o = r.ajax(t, {
				url: c,
				type: t.ajaxDataType === "jsonp" ? "GET" : "POST",
				contentType: i._.defaultContentType,
				data: {
					data: h
				},
				success: function(n) {
					var i;
					if (n) {
						try {
							i = t._parseResponse(n)
						} catch (u) {
							s(u, t);
							t.stop();
							return
						}
						r.triggerReceived(t, i)
					}
				},
				error: function(n, i) {
					i !== "abort" && i !== "parsererror" && s(n, t)
				}
			})
		},
		ajaxAbort: function(n, t) {
			if (typeof n.transport != "undefined") {
				t = typeof t == "undefined" ? !0 : t;
				var i = f(n, "/abort");
				r.ajax(n, {
					url: i,
					async: t,
					timeout: 1e3,
					type: "POST"
				});
				n.log("Fired ajax abort async = " + t + ".")
			}
		},
		ajaxStart: function(t, e) {
			var h = function(n) {
					var i = t._deferral;
					i && i.reject(n)
				},
				s = function(i) {
					t.log("The start request failed. Stopping the connection.");
					n(t).triggerHandler(u.onError, [i]);
					h(i);
					t.stop()
				};
			t._.startRequest = r.ajax(t, {
				url: f(t, "/start"),
				success: function(n, r, u) {
					var f;
					try {
						f = t._parseResponse(n)
					} catch (o) {
						s(i._.error(i._.format(i.resources.errorParsingStartResponse, n), o, u));
						return
					}
					f.Response === "started" ? e() : s(i._.error(i._.format(i.resources.invalidStartResponse, n), null, u))
				},
				error: function(n, r, u) {
					r !== o ? s(i._.error(i.resources.errorDuringStartRequest, u, n)) : (t.log("The start request aborted because connection.stop() was called."), h(i._.error(i.resources.stoppedDuringStartRequest, null, n)))
				}
			})
		},
		tryAbortStartRequest: function(n) {
			n._.startRequest && (n._.startRequest.abort(o), delete n._.startRequest)
		},
		tryInitialize: function(n, t) {
			n.Initialized && t()
		},
		triggerReceived: function(t, i) {
			t._.connectingMessageBuffer.tryBuffer(i) || n(t).triggerHandler(u.onReceived, [i])
		},
		processMessages: function(t, i, u) {
			var f;
			r.markLastMessage(t);
			i && (f = r.maximizePersistentResponse(i), r.updateGroups(t, f.GroupsToken), f.MessageId && (t.messageId = f.MessageId), f.Messages && (n.each(f.Messages, function(n, i) {
				r.triggerReceived(t, i)
			}), r.tryInitialize(f, u)))
		},
		monitorKeepAlive: function(t) {
			var i = t._.keepAliveData;
			i.monitoring ? t.log("Tried to monitor keep alive but it's already being monitored.") : (i.monitoring = !0, r.markLastMessage(t), t._.keepAliveData.reconnectKeepAliveUpdate = function() {
				r.markLastMessage(t)
			}, n(t).bind(u.onReconnect, t._.keepAliveData.reconnectKeepAliveUpdate), t.log("Now monitoring keep alive with a warning timeout of " + i.timeoutWarning + " and a connection lost timeout of " + i.timeout + "."))
		},
		stopMonitoringKeepAlive: function(t) {
			var i = t._.keepAliveData;
			i.monitoring && (i.monitoring = !1, n(t).unbind(u.onReconnect, t._.keepAliveData.reconnectKeepAliveUpdate), t._.keepAliveData = {}, t.log("Stopping the monitoring of the keep alive."))
		},
		startHeartbeat: function(n) {
			n._.lastActiveAt = (new Date).getTime();
			e(n)
		},
		markLastMessage: function(n) {
			n._.lastMessageAt = (new Date).getTime()
		},
		markActive: function(n) {
			return r.verifyLastActive(n) ? (n._.lastActiveAt = (new Date).getTime(), !0) : !1
		},
		isConnectedOrReconnecting: function(n) {
			return n.state === i.connectionState.connected || n.state === i.connectionState.reconnecting
		},
		ensureReconnectingState: function(t) {
			return h(t, i.connectionState.connected, i.connectionState.reconnecting) === !0 && n(t).triggerHandler(u.onReconnecting), t.state === i.connectionState.reconnecting
		},
		clearReconnectTimeout: function(n) {
			n && n._.reconnectTimeout && (t.clearTimeout(n._.reconnectTimeout), delete n._.reconnectTimeout)
		},
		verifyLastActive: function(t) {
			if ((new Date).getTime() - t._.lastActiveAt >= t.reconnectWindow) {
				var r = i._.format(i.resources.reconnectWindowTimeout, new Date(t._.lastActiveAt), t.reconnectWindow);
				return t.log(r), n(t).triggerHandler(u.onError, [i._.error(r, "TimeoutException")]), t.stop(!1, !1), !1
			}
			return !0
		},
		reconnect: function(n, u) {
			var f = i.transports[u];
			if (r.isConnectedOrReconnecting(n) && !n._.reconnectTimeout) {
				if (!r.verifyLastActive(n)) return;
				n._.reconnectTimeout = t.setTimeout(function() {
					r.verifyLastActive(n) && (f.stop(n), r.ensureReconnectingState(n) && (n.log(u + " reconnecting."), f.start(n)))
				}, n.reconnectDelay)
			}
		},
		handleParseFailure: function(t, r, f, e, o) {
			t.state === i.connectionState.connecting ? (t.log("Failed to parse server response while attempting to connect."), e()) : (n(t).triggerHandler(u.onError, [i._.transportError(i._.format(i.resources.parseFailed, r), t.transport, f, o)]), t.stop())
		},
		foreverFrame: {
			count: 0,
			connections: {}
		}
	}
}(window.jQuery, window),
function(n, t) {
	var r = n.signalR,
		u = n.signalR.events,
		f = n.signalR.changeState,
		i = r.transports._logic;
	r.transports.webSockets = {
		name: "webSockets",
		supportsKeepAlive: function() {
			return !0
		},
		send: function(t, f) {
			var e = i.stringifySend(t, f);
			try {
				t.socket.send(e)
			} catch (o) {
				n(t).triggerHandler(u.onError, [r._.transportError(r.resources.webSocketsInvalidState, t.transport, o, t.socket), f])
			}
		},
		start: function(e, o, s) {
			var h, c = !1,
				l = this,
				a = !o,
				v = n(e);
			if (!t.WebSocket) {
				s();
				return
			}
			e.socket || (h = e.webSocketServerUrl ? e.webSocketServerUrl : e.wsProtocol + e.host, h += i.getUrl(e, this.name, a), e.log("Connecting to websocket endpoint '" + h + "'."), e.socket = new t.WebSocket(h), e.socket.onopen = function() {
				c = !0;
				e.log("Websocket opened.");
				i.clearReconnectTimeout(e);
				f(e, r.connectionState.reconnecting, r.connectionState.connected) === !0 && v.triggerHandler(u.onReconnect)
			}, e.socket.onclose = function(t) {
				if (this === e.socket) {
					if (c) typeof t.wasClean != "undefined" && t.wasClean === !1 ? (n(e).triggerHandler(u.onError, [r._.transportError(r.resources.webSocketClosed, e.transport, t)]), e.log("Unclean disconnect from websocket: " + t.reason || "[no reason given].")) : e.log("Websocket closed.");
					else {
						s ? s() : a && l.reconnect(e);
						return
					}
					l.reconnect(e)
				}
			}, e.socket.onmessage = function(t) {
				var r;
				try {
					r = e._parseResponse(t.data)
				} catch (u) {
					i.handleParseFailure(e, t.data, u, s, t);
					return
				}
				r && (n.isEmptyObject(r) || r.M ? i.processMessages(e, r, o) : i.triggerReceived(e, r))
			})
		},
		reconnect: function(n) {
			i.reconnect(n, this.name)
		},
		lostConnection: function(n) {
			this.reconnect(n)
		},
		stop: function(n) {
			i.clearReconnectTimeout(n);
			n.socket && (n.log("Closing the Websocket."), n.socket.close(), n.socket = null)
		},
		abort: function(n, t) {
			i.ajaxAbort(n, t)
		}
	}
}(window.jQuery, window),
function(n, t) {
	var i = n.signalR,
		u = n.signalR.events,
		e = n.signalR.changeState,
		r = i.transports._logic,
		f = function(n) {
			t.clearTimeout(n._.reconnectAttemptTimeoutHandle);
			delete n._.reconnectAttemptTimeoutHandle
		};
	i.transports.serverSentEvents = {
		name: "serverSentEvents",
		supportsKeepAlive: function() {
			return !0
		},
		timeOut: 3e3,
		start: function(o, s, h) {
			var c = this,
				l = !1,
				a = n(o),
				v = !s,
				y;
			if (o.eventSource && (o.log("The connection already has an event source. Stopping it."), o.stop()), !t.EventSource) {
				h && (o.log("This browser doesn't support SSE."), h());
				return
			}
			y = r.getUrl(o, this.name, v);
			try {
				o.log("Attempting to connect to SSE endpoint '" + y + "'.");
				o.eventSource = new t.EventSource(y, {
					withCredentials: o.withCredentials
				})
			} catch (p) {
				o.log("EventSource failed trying to connect with error " + p.Message + ".");
				h ? h() : (a.triggerHandler(u.onError, [i._.transportError(i.resources.eventSourceFailedToConnect, o.transport, p)]), v && c.reconnect(o));
				return
			}
			v && (o._.reconnectAttemptTimeoutHandle = t.setTimeout(function() {
				l === !1 && o.eventSource.readyState !== t.EventSource.OPEN && c.reconnect(o)
			}, c.timeOut));
			o.eventSource.addEventListener("open", function() {
				o.log("EventSource connected.");
				f(o);
				r.clearReconnectTimeout(o);
				l === !1 && (l = !0, e(o, i.connectionState.reconnecting, i.connectionState.connected) === !0 && a.triggerHandler(u.onReconnect))
			}, !1);
			o.eventSource.addEventListener("message", function(n) {
				var t;
				if (n.data !== "initialized") {
					try {
						t = o._parseResponse(n.data)
					} catch (i) {
						r.handleParseFailure(o, n.data, i, h, n);
						return
					}
					r.processMessages(o, t, s)
				}
			}, !1);
			o.eventSource.addEventListener("error", function(n) {
				if (this === o.eventSource) {
					if (!l) {
						h && h();
						return
					}
					o.log("EventSource readyState: " + o.eventSource.readyState + ".");
					n.eventPhase === t.EventSource.CLOSED ? (o.log("EventSource reconnecting due to the server connection ending."), c.reconnect(o)) : (o.log("EventSource error."), a.triggerHandler(u.onError, [i._.transportError(i.resources.eventSourceError, o.transport, n)]))
				}
			}, !1)
		},
		reconnect: function(n) {
			r.reconnect(n, this.name)
		},
		lostConnection: function(n) {
			this.reconnect(n)
		},
		send: function(n, t) {
			r.ajaxSend(n, t)
		},
		stop: function(n) {
			f(n);
			r.clearReconnectTimeout(n);
			n && n.eventSource && (n.log("EventSource calling close()."), n.eventSource.close(), n.eventSource = null, delete n.eventSource)
		},
		abort: function(n, t) {
			r.ajaxAbort(n, t)
		}
	}
}(window.jQuery, window),
function(n, t) {
	var r = n.signalR,
		e = n.signalR.events,
		o = n.signalR.changeState,
		i = r.transports._logic,
		u = function() {
			var n = t.document.createElement("iframe");
			return n.setAttribute("style", "position:absolute;top:0;left:0;width:0;height:0;visibility:hidden;"), n
		},
		f = function() {
			var i = null,
				f = 1e3,
				n = 0;
			return {
				prevent: function() {
					r._.ieVersion <= 8 && (n === 0 && (i = t.setInterval(function() {
						var n = u();
						t.document.body.appendChild(n);
						t.document.body.removeChild(n);
						n = null
					}, f)), n++)
				},
				cancel: function() {
					n === 1 && t.clearInterval(i);
					n > 0 && n--
				}
			}
		}();
	r.transports.foreverFrame = {
		name: "foreverFrame",
		supportsKeepAlive: function() {
			return !0
		},
		iframeClearThreshold: 50,
		start: function(n, r, e) {
			var l = this,
				s = i.foreverFrame.count += 1,
				h, o = u(),
				c = function() {
					n.log("Forever frame iframe finished loading and is no longer receiving messages.");
					l.reconnect(n)
				};
			if (t.EventSource) {
				e && (n.log("This browser supports SSE, skipping Forever Frame."), e());
				return
			}
			o.setAttribute("data-signalr-connection-id", n.id);
			f.prevent();
			h = i.getUrl(n, this.name);
			h += "&frameId=" + s;
			t.document.body.appendChild(o);
			n.log("Binding to iframe's load event.");
			o.addEventListener ? o.addEventListener("load", c, !1) : o.attachEvent && o.attachEvent("onload", c);
			o.src = h;
			i.foreverFrame.connections[s] = n;
			n.frame = o;
			n.frameId = s;
			r && (n.onSuccess = function() {
				n.log("Iframe transport started.");
				r()
			})
		},
		reconnect: function(n) {
			var r = this;
			i.isConnectedOrReconnecting(n) && i.verifyLastActive(n) && t.setTimeout(function() {
				if (i.verifyLastActive(n) && n.frame && i.ensureReconnectingState(n)) {
					var u = n.frame,
						t = i.getUrl(n, r.name, !0) + "&frameId=" + n.frameId;
					n.log("Updating iframe src to '" + t + "'.");
					u.src = t
				}
			}, n.reconnectDelay)
		},
		lostConnection: function(n) {
			this.reconnect(n)
		},
		send: function(n, t) {
			i.ajaxSend(n, t)
		},
		receive: function(t, u) {
			var f, e, o;
			if (t.json !== t._originalJson && (u = t._originalJson.stringify(u)), o = t._parseResponse(u), i.processMessages(t, o, t.onSuccess), t.state === n.signalR.connectionState.connected && (t.frameMessageCount = (t.frameMessageCount || 0) + 1, t.frameMessageCount > r.transports.foreverFrame.iframeClearThreshold && (t.frameMessageCount = 0, f = t.frame.contentWindow || t.frame.contentDocument, f && f.document && f.document.body)))
				for (e = f.document.body; e.firstChild;) e.removeChild(e.firstChild)
		},
		stop: function(n) {
			var r = null;
			if (f.cancel(), n.frame) {
				if (n.frame.stop) n.frame.stop();
				else try {
					r = n.frame.contentWindow || n.frame.contentDocument;
					r.document && r.document.execCommand && r.document.execCommand("Stop")
				} catch (u) {
					n.log("Error occured when stopping foreverFrame transport. Message = " + u.message + ".")
				}
				n.frame.parentNode === t.document.body && t.document.body.removeChild(n.frame);
				delete i.foreverFrame.connections[n.frameId];
				n.frame = null;
				n.frameId = null;
				delete n.frame;
				delete n.frameId;
				delete n.onSuccess;
				delete n.frameMessageCount;
				n.log("Stopping forever frame.")
			}
		},
		abort: function(n, t) {
			i.ajaxAbort(n, t)
		},
		getConnection: function(n) {
			return i.foreverFrame.connections[n]
		},
		started: function(t) {
			o(t, r.connectionState.reconnecting, r.connectionState.connected) === !0 && n(t).triggerHandler(e.onReconnect)
		}
	}
}(window.jQuery, window),
function(n, t) {
	var r = n.signalR,
		u = n.signalR.events,
		e = n.signalR.changeState,
		f = n.signalR.isDisconnecting,
		i = r.transports._logic;
	r.transports.longPolling = {
		name: "longPolling",
		supportsKeepAlive: function() {
			return !1
		},
		reconnectDelay: 3e3,
		start: function(o, s, h) {
			var a = this,
				v = function() {
					v = n.noop;
					h = null;
					o.log("LongPolling connected.");
					s()
				},
				y = function() {
					return h ? (h(), h = null, o.log("LongPolling failed to connect."), !0) : !1
				},
				c = o._,
				l = 0,
				p = function(i) {
					t.clearTimeout(c.reconnectTimeoutId);
					c.reconnectTimeoutId = null;
					e(i, r.connectionState.reconnecting, r.connectionState.connected) === !0 && (i.log("Raising the reconnect event"), n(i).triggerHandler(u.onReconnect))
				},
				w = 36e5;
			o.pollXhr && (o.log("Polling xhr requests already exists, aborting."), o.stop());
			o.messageId = null;
			c.reconnectTimeoutId = null;
			c.pollTimeoutId = t.setTimeout(function() {
				(function e(s, h) {
					var d = s.messageId,
						g = d === null,
						b = !g,
						nt = !h,
						k = i.getUrl(s, a.name, b, nt);
					f(s) !== !0 && (o.log("Opening long polling request to '" + k + "'."), s.pollXhr = i.ajax(o, {
						xhrFields: {
							onprogress: function() {
								i.markLastMessage(o)
							}
						},
						url: k,
						timeout: o._.pollTimeout,
						success: function(r) {
							var h, w = 0,
								u, a;
							o.log("Long poll complete.");
							l = 0;
							try {
								h = o._parseResponse(r)
							} catch (b) {
								i.handleParseFailure(s, r, b, y, s.pollXhr);
								return
							}(c.reconnectTimeoutId !== null && p(s), h && (u = i.maximizePersistentResponse(h)), i.processMessages(s, h, v), u && n.type(u.LongPollDelay) === "number" && (w = u.LongPollDelay), u && u.Disconnect) || f(s) !== !0 && (a = u && u.ShouldReconnect, !a || i.ensureReconnectingState(s)) && (w > 0 ? c.pollTimeoutId = t.setTimeout(function() {
								e(s, a)
							}, w) : e(s, a))
						},
						error: function(f, h) {
							if (t.clearTimeout(c.reconnectTimeoutId), c.reconnectTimeoutId = null, h === "abort") {
								o.log("Aborted xhr request.");
								return
							}
							if (!y()) {
								if (l++, o.state !== r.connectionState.reconnecting && (o.log("An error occurred using longPolling. Status = " + h + ".  Response = " + f.responseText + "."), n(s).triggerHandler(u.onError, [r._.transportError(r.resources.longPollFailed, o.transport, f, s.pollXhr)])), (o.state === r.connectionState.connected || o.state === r.connectionState.reconnecting) && !i.verifyLastActive(o)) return;
								if (!i.ensureReconnectingState(s)) return;
								c.pollTimeoutId = t.setTimeout(function() {
									e(s, !0)
								}, a.reconnectDelay)
							}
						}
					}), b && h === !0 && (c.reconnectTimeoutId = t.setTimeout(function() {
						p(s)
					}, Math.min(1e3 * (Math.pow(2, l) - 1), w))))
				})(o)
			}, 250)
		},
		lostConnection: function(n) {
			n.pollXhr && n.pollXhr.abort("lostConnection")
		},
		send: function(n, t) {
			i.ajaxSend(n, t)
		},
		stop: function(n) {
			t.clearTimeout(n._.pollTimeoutId);
			t.clearTimeout(n._.reconnectTimeoutId);
			delete n._.pollTimeoutId;
			delete n._.reconnectTimeoutId;
			n.pollXhr && (n.pollXhr.abort(), n.pollXhr = null, delete n.pollXhr)
		},
		abort: function(n, t) {
			i.ajaxAbort(n, t)
		}
	}
}(window.jQuery, window),
function(n) {
	function r(n) {
		return n + s
	}

	function e(n, t, i) {
		for (var f = n.length, u = [], r = 0; r < f; r += 1) n.hasOwnProperty(r) && (u[r] = t.call(i, n[r], r, n));
		return u
	}

	function o(t) {
		return n.isFunction(t) ? null : n.type(t) === "undefined" ? null : t
	}

	function u(n) {
		for (var t in n)
			if (n.hasOwnProperty(t)) return !0;
		return !1
	}

	function f(n, t) {
		var i = n._.invocationCallbacks,
			r, f;
		u(i) && n.log("Clearing hub invocation callbacks with error: " + t + ".");
		n._.invocationCallbackId = 0;
		delete n._.invocationCallbacks;
		n._.invocationCallbacks = {};
		for (f in i) r = i[f], r.method.call(r.scope, {
			E: t
		})
	}

	function i(n, t) {
		return new i.fn.init(n, t)
	}

	function t(i, r) {
		var u = {
			qs: null,
			logging: !1,
			useDefaultPath: !0
		};
		return n.extend(u, r), (!i || u.useDefaultPath) && (i = (i || "") + "/signalr"), new t.fn.init(i, u)
	}
	var s = ".hubProxy",
		h = n.signalR;
	i.fn = i.prototype = {
		init: function(n, t) {
			this.state = {};
			this.connection = n;
			this.hubName = t;
			this._ = {
				callbackMap: {}
			}
		},
		constructor: i,
		hasSubscriptions: function() {
			return u(this._.callbackMap)
		},
		on: function(t, i) {
			var u = this,
				f = u._.callbackMap;
			return t = t.toLowerCase(), f[t] || (f[t] = {}), f[t][i] = function(n, t) {
				i.apply(u, t)
			}, n(u).bind(r(t), f[t][i]), u
		},
		off: function(t, i) {
			var e = this,
				o = e._.callbackMap,
				f;
			return t = t.toLowerCase(), f = o[t], f && (f[i] ? (n(e).unbind(r(t), f[i]), delete f[i], u(f) || delete o[t]) : i || (n(e).unbind(r(t)), delete o[t])), e
		},
		invoke: function(t) {
			var i = this,
				r = i.connection,
				s = n.makeArray(arguments).slice(1),
				c = e(s, o),
				f = {
					H: i.hubName,
					M: t,
					A: c,
					I: r._.invocationCallbackId
				},
				u = n.Deferred(),
				l = function(f) {
					var e = i._maximizeHubResponse(f),
						s, o;
					n.extend(i.state, e.State);
					e.Progress ? u.notifyWith ? u.notifyWith(i, [e.Progress.Data]) : r._.progressjQueryVersionLogged || (r.log("A hub method invocation progress update was received but the version of jQuery in use (" + n.prototype.jquery + ") does not support progress updates. Upgrade to jQuery 1.7+ to receive progress notifications."), r._.progressjQueryVersionLogged = !0) : e.Error ? (e.StackTrace && r.log(e.Error + "\n" + e.StackTrace + "."), s = e.IsHubException ? "HubException" : "Exception", o = h._.error(e.Error, s), o.data = e.ErrorData, r.log(i.hubName + "." + t + " failed to execute. Error: " + o.message), u.rejectWith(i, [o])) : (r.log("Invoked " + i.hubName + "." + t), u.resolveWith(i, [e.Result]))
				};
			return r._.invocationCallbacks[r._.invocationCallbackId.toString()] = {
				scope: i,
				method: l
			}, r._.invocationCallbackId += 1, n.isEmptyObject(i.state) || (f.S = i.state), r.log("Invoking " + i.hubName + "." + t), r.send(f), u.promise()
		},
		_maximizeHubResponse: function(n) {
			return {
				State: n.S,
				Result: n.R,
				Progress: n.P ? {
					Id: n.P.I,
					Data: n.P.D
				} : null,
				Id: n.I,
				IsHubException: n.H,
				Error: n.E,
				StackTrace: n.T,
				ErrorData: n.D
			}
		}
	};
	i.fn.init.prototype = i.fn;
	t.fn = t.prototype = n.connection();
	t.fn.init = function(t, i) {
		var e = {
				qs: null,
				logging: !1,
				useDefaultPath: !0
			},
			u = this;
		n.extend(e, i);
		n.signalR.fn.init.call(u, t, e.qs, e.logging);
		u.proxies = {};
		u._.invocationCallbackId = 0;
		u._.invocationCallbacks = {};
		u.received(function(t) {
			var f, o, e, i, s, h;
			t && (typeof t.P != "undefined" ? (e = t.P.I.toString(), i = u._.invocationCallbacks[e], i && i.method.call(i.scope, t)) : typeof t.I != "undefined" ? (e = t.I.toString(), i = u._.invocationCallbacks[e], i && (u._.invocationCallbacks[e] = null, delete u._.invocationCallbacks[e], i.method.call(i.scope, t))) : (f = this._maximizeClientHubInvocation(t), u.log("Triggering client hub event '" + f.Method + "' on hub '" + f.Hub + "'."), s = f.Hub.toLowerCase(), h = f.Method.toLowerCase(), o = this.proxies[s], n.extend(o.state, f.State), n(o).triggerHandler(r(h), [f.Args])))
		});
		u.error(function(n, t) {
			var i, r;
			t && (i = t.I, r = u._.invocationCallbacks[i], r && (u._.invocationCallbacks[i] = null, delete u._.invocationCallbacks[i], r.method.call(r.scope, {
				E: n
			})))
		});
		u.reconnecting(function() {
			u.transport && u.transport.name === "webSockets" && f(u, "Connection started reconnecting before invocation result was received.")
		});
		u.disconnected(function() {
			f(u, "Connection was disconnected before invocation result was received.")
		})
	};
	t.fn._maximizeClientHubInvocation = function(n) {
		return {
			Hub: n.H,
			Method: n.M,
			Args: n.A,
			State: n.S
		}
	};
	t.fn._registerSubscribedHubs = function() {
		var t = this;
		t._subscribedToHubs || (t._subscribedToHubs = !0, t.starting(function() {
			var i = [];
			n.each(t.proxies, function(n) {
				this.hasSubscriptions() && (i.push({
					name: n
				}), t.log("Client subscribed to hub '" + n + "'."))
			});
			i.length === 0 && t.log("No hubs have been subscribed to.  The client will not receive data from hubs.  To fix, declare at least one client side function prior to connection start for each hub you wish to subscribe to.");
			t.data = t.json.stringify(i)
		}))
	};
	t.fn.createHubProxy = function(n) {
		n = n.toLowerCase();
		var t = this.proxies[n];
		return t || (t = i(this, n), this.proxies[n] = t), this._registerSubscribedHubs(), t
	};
	t.fn.init.prototype = t.fn;
	n.hubConnection = t
}(window.jQuery, window),
function(n) {
	n.signalR.version = "2.1.2"
}(window.jQuery),
function(n) {
	n.fn.OnlyInputNumber = function() {
		n(this).val("");
		n(this).css("ime-mode", "disabled");
		this.bind("keypress", function() {
			(event.keyCode < 48 || event.keyCode > 57) && (event.returnValue = !1)
		});
		this.bind("keydown", function() {
			window.event.keyCode == 13 && (window.event.keyCode = 9)
		});
		this.bind("keyup", function() {
			this.value = this.value.replace(/\D/g, "")
		})
	}
}(jQuery);
$(function() {
	$("#indexLiveSports,#menuLiveSports").click(function() {
		if (!$("body").data("login")) return art.zxMsg.alertWarning("请先登录"), !1
	});
	var n = document.location.hostname.split(".");
	n.length == 3 && n[1].toLocaleLowerCase() == "vip-zx" && $("#UserName").val(n[0])
})