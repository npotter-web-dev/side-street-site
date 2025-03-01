/*! For license information please see main.996f74d7.js.LICENSE.txt */
(() => {
  var e = {
      497: (e, t, n) => {
        "use strict";
        var r = n(218);
        function a() {}
        function i() {}
        (i.resetWarningCache = a),
          (e.exports = function () {
            function e(e, t, n, a, i, o) {
              if (o !== r) {
                var l = new Error(
                  "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
                );
                throw ((l.name = "Invariant Violation"), l);
              }
            }
            function t() {
              return e;
            }
            e.isRequired = e;
            var n = {
              array: e,
              bigint: e,
              bool: e,
              func: e,
              number: e,
              object: e,
              string: e,
              symbol: e,
              any: e,
              arrayOf: t,
              element: e,
              elementType: e,
              instanceOf: t,
              node: e,
              objectOf: t,
              oneOf: t,
              oneOfType: t,
              shape: t,
              exact: t,
              checkPropTypes: i,
              resetWarningCache: a,
            };
            return (n.PropTypes = n), n;
          });
      },
      173: (e, t, n) => {
        e.exports = n(497)();
      },
      218: (e) => {
        "use strict";
        e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
      },
      730: (e, t, n) => {
        "use strict";
        var r = n(43),
          a = n(853);
        function i(e) {
          for (
            var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
            n < arguments.length;
            n++
          )
            t += "&args[]=" + encodeURIComponent(arguments[n]);
          return (
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        var o = new Set(),
          l = {};
        function s(e, t) {
          c(e, t), c(e + "Capture", t);
        }
        function c(e, t) {
          for (l[e] = t, e = 0; e < t.length; e++) o.add(t[e]);
        }
        var u = !(
            "undefined" === typeof window ||
            "undefined" === typeof window.document ||
            "undefined" === typeof window.document.createElement
          ),
          d = Object.prototype.hasOwnProperty,
          f =
            /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
          p = {},
          m = {};
        function h(e, t, n, r, a, i, o) {
          (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
            (this.attributeName = r),
            (this.attributeNamespace = a),
            (this.mustUseProperty = n),
            (this.propertyName = e),
            (this.type = t),
            (this.sanitizeURL = i),
            (this.removeEmptyString = o);
        }
        var v = {};
        "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
          .split(" ")
          .forEach(function (e) {
            v[e] = new h(e, 0, !1, e, null, !1, !1);
          }),
          [
            ["acceptCharset", "accept-charset"],
            ["className", "class"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
          ].forEach(function (e) {
            var t = e[0];
            v[t] = new h(t, 1, !1, e[1], null, !1, !1);
          }),
          ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
            v[e] = new h(e, 2, !1, e.toLowerCase(), null, !1, !1);
          }),
          ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(
            function (e) {
              v[e] = new h(e, 2, !1, e, null, !1, !1);
            }
          ),
          "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
            .split(" ")
            .forEach(function (e) {
              v[e] = new h(e, 3, !1, e.toLowerCase(), null, !1, !1);
            }),
          ["checked", "multiple", "muted", "selected"].forEach(function (e) {
            v[e] = new h(e, 3, !0, e, null, !1, !1);
          }),
          ["capture", "download"].forEach(function (e) {
            v[e] = new h(e, 4, !1, e, null, !1, !1);
          }),
          ["cols", "rows", "size", "span"].forEach(function (e) {
            v[e] = new h(e, 6, !1, e, null, !1, !1);
          }),
          ["rowSpan", "start"].forEach(function (e) {
            v[e] = new h(e, 5, !1, e.toLowerCase(), null, !1, !1);
          });
        var g = /[\-:]([a-z])/g;
        function b(e) {
          return e[1].toUpperCase();
        }
        function y(e, t, n, r) {
          var a = v.hasOwnProperty(t) ? v[t] : null;
          (null !== a
            ? 0 !== a.type
            : r ||
              !(2 < t.length) ||
              ("o" !== t[0] && "O" !== t[0]) ||
              ("n" !== t[1] && "N" !== t[1])) &&
            ((function (e, t, n, r) {
              if (
                null === t ||
                "undefined" === typeof t ||
                (function (e, t, n, r) {
                  if (null !== n && 0 === n.type) return !1;
                  switch (typeof t) {
                    case "function":
                    case "symbol":
                      return !0;
                    case "boolean":
                      return (
                        !r &&
                        (null !== n
                          ? !n.acceptsBooleans
                          : "data-" !== (e = e.toLowerCase().slice(0, 5)) && "aria-" !== e)
                      );
                    default:
                      return !1;
                  }
                })(e, t, n, r)
              )
                return !0;
              if (r) return !1;
              if (null !== n)
                switch (n.type) {
                  case 3:
                    return !t;
                  case 4:
                    return !1 === t;
                  case 5:
                    return isNaN(t);
                  case 6:
                    return isNaN(t) || 1 > t;
                }
              return !1;
            })(t, n, a, r) && (n = null),
            r || null === a
              ? (function (e) {
                  return (
                    !!d.call(m, e) ||
                    (!d.call(p, e) && (f.test(e) ? (m[e] = !0) : ((p[e] = !0), !1)))
                  );
                })(t) && (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
              : a.mustUseProperty
              ? (e[a.propertyName] = null === n ? 3 !== a.type && "" : n)
              : ((t = a.attributeName),
                (r = a.attributeNamespace),
                null === n
                  ? e.removeAttribute(t)
                  : ((n = 3 === (a = a.type) || (4 === a && !0 === n) ? "" : "" + n),
                    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
        }
        "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
          .split(" ")
          .forEach(function (e) {
            var t = e.replace(g, b);
            v[t] = new h(t, 1, !1, e, null, !1, !1);
          }),
          "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
            .split(" ")
            .forEach(function (e) {
              var t = e.replace(g, b);
              v[t] = new h(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
            }),
          ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
            var t = e.replace(g, b);
            v[t] = new h(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
          }),
          ["tabIndex", "crossOrigin"].forEach(function (e) {
            v[e] = new h(e, 1, !1, e.toLowerCase(), null, !1, !1);
          }),
          (v.xlinkHref = new h(
            "xlinkHref",
            1,
            !1,
            "xlink:href",
            "http://www.w3.org/1999/xlink",
            !0,
            !1
          )),
          ["src", "href", "action", "formAction"].forEach(function (e) {
            v[e] = new h(e, 1, !1, e.toLowerCase(), null, !0, !0);
          });
        var w = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
          x = Symbol.for("react.element"),
          S = Symbol.for("react.portal"),
          k = Symbol.for("react.fragment"),
          E = Symbol.for("react.strict_mode"),
          C = Symbol.for("react.profiler"),
          T = Symbol.for("react.provider"),
          P = Symbol.for("react.context"),
          N = Symbol.for("react.forward_ref"),
          O = Symbol.for("react.suspense"),
          M = Symbol.for("react.suspense_list"),
          _ = Symbol.for("react.memo"),
          j = Symbol.for("react.lazy");
        Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
        var L = Symbol.for("react.offscreen");
        Symbol.for("react.legacy_hidden"),
          Symbol.for("react.cache"),
          Symbol.for("react.tracing_marker");
        var z = Symbol.iterator;
        function A(e) {
          return null === e || "object" !== typeof e
            ? null
            : "function" === typeof (e = (z && e[z]) || e["@@iterator"])
            ? e
            : null;
        }
        var I,
          R = Object.assign;
        function F(e) {
          if (void 0 === I)
            try {
              throw Error();
            } catch (n) {
              var t = n.stack.trim().match(/\n( *(at )?)/);
              I = (t && t[1]) || "";
            }
          return "\n" + I + e;
        }
        var D = !1;
        function B(e, t) {
          if (!e || D) return "";
          D = !0;
          var n = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            if (t)
              if (
                ((t = function () {
                  throw Error();
                }),
                Object.defineProperty(t.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                "object" === typeof Reflect && Reflect.construct)
              ) {
                try {
                  Reflect.construct(t, []);
                } catch (c) {
                  var r = c;
                }
                Reflect.construct(e, [], t);
              } else {
                try {
                  t.call();
                } catch (c) {
                  r = c;
                }
                e.call(t.prototype);
              }
            else {
              try {
                throw Error();
              } catch (c) {
                r = c;
              }
              e();
            }
          } catch (c) {
            if (c && r && "string" === typeof c.stack) {
              for (
                var a = c.stack.split("\n"),
                  i = r.stack.split("\n"),
                  o = a.length - 1,
                  l = i.length - 1;
                1 <= o && 0 <= l && a[o] !== i[l];

              )
                l--;
              for (; 1 <= o && 0 <= l; o--, l--)
                if (a[o] !== i[l]) {
                  if (1 !== o || 1 !== l)
                    do {
                      if ((o--, 0 > --l || a[o] !== i[l])) {
                        var s = "\n" + a[o].replace(" at new ", " at ");
                        return (
                          e.displayName &&
                            s.includes("<anonymous>") &&
                            (s = s.replace("<anonymous>", e.displayName)),
                          s
                        );
                      }
                    } while (1 <= o && 0 <= l);
                  break;
                }
            }
          } finally {
            (D = !1), (Error.prepareStackTrace = n);
          }
          return (e = e ? e.displayName || e.name : "") ? F(e) : "";
        }
        function H(e) {
          switch (e.tag) {
            case 5:
              return F(e.type);
            case 16:
              return F("Lazy");
            case 13:
              return F("Suspense");
            case 19:
              return F("SuspenseList");
            case 0:
            case 2:
            case 15:
              return (e = B(e.type, !1));
            case 11:
              return (e = B(e.type.render, !1));
            case 1:
              return (e = B(e.type, !0));
            default:
              return "";
          }
        }
        function V(e) {
          if (null == e) return null;
          if ("function" === typeof e) return e.displayName || e.name || null;
          if ("string" === typeof e) return e;
          switch (e) {
            case k:
              return "Fragment";
            case S:
              return "Portal";
            case C:
              return "Profiler";
            case E:
              return "StrictMode";
            case O:
              return "Suspense";
            case M:
              return "SuspenseList";
          }
          if ("object" === typeof e)
            switch (e.$$typeof) {
              case P:
                return (e.displayName || "Context") + ".Consumer";
              case T:
                return (e._context.displayName || "Context") + ".Provider";
              case N:
                var t = e.render;
                return (
                  (e = e.displayName) ||
                    (e =
                      "" !== (e = t.displayName || t.name || "")
                        ? "ForwardRef(" + e + ")"
                        : "ForwardRef"),
                  e
                );
              case _:
                return null !== (t = e.displayName || null) ? t : V(e.type) || "Memo";
              case j:
                (t = e._payload), (e = e._init);
                try {
                  return V(e(t));
                } catch (n) {}
            }
          return null;
        }
        function W(e) {
          var t = e.type;
          switch (e.tag) {
            case 24:
              return "Cache";
            case 9:
              return (t.displayName || "Context") + ".Consumer";
            case 10:
              return (t._context.displayName || "Context") + ".Provider";
            case 18:
              return "DehydratedFragment";
            case 11:
              return (
                (e = (e = t.render).displayName || e.name || ""),
                t.displayName || ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef")
              );
            case 7:
              return "Fragment";
            case 5:
              return t;
            case 4:
              return "Portal";
            case 3:
              return "Root";
            case 6:
              return "Text";
            case 16:
              return V(t);
            case 8:
              return t === E ? "StrictMode" : "Mode";
            case 22:
              return "Offscreen";
            case 12:
              return "Profiler";
            case 21:
              return "Scope";
            case 13:
              return "Suspense";
            case 19:
              return "SuspenseList";
            case 25:
              return "TracingMarker";
            case 1:
            case 0:
            case 17:
            case 2:
            case 14:
            case 15:
              if ("function" === typeof t) return t.displayName || t.name || null;
              if ("string" === typeof t) return t;
          }
          return null;
        }
        function G(e) {
          switch (typeof e) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
            case "object":
              return e;
            default:
              return "";
          }
        }
        function U(e) {
          var t = e.type;
          return (
            (e = e.nodeName) && "input" === e.toLowerCase() && ("checkbox" === t || "radio" === t)
          );
        }
        function $(e) {
          e._valueTracker ||
            (e._valueTracker = (function (e) {
              var t = U(e) ? "checked" : "value",
                n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                r = "" + e[t];
              if (
                !e.hasOwnProperty(t) &&
                "undefined" !== typeof n &&
                "function" === typeof n.get &&
                "function" === typeof n.set
              ) {
                var a = n.get,
                  i = n.set;
                return (
                  Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                      return a.call(this);
                    },
                    set: function (e) {
                      (r = "" + e), i.call(this, e);
                    },
                  }),
                  Object.defineProperty(e, t, { enumerable: n.enumerable }),
                  {
                    getValue: function () {
                      return r;
                    },
                    setValue: function (e) {
                      r = "" + e;
                    },
                    stopTracking: function () {
                      (e._valueTracker = null), delete e[t];
                    },
                  }
                );
              }
            })(e));
        }
        function Y(e) {
          if (!e) return !1;
          var t = e._valueTracker;
          if (!t) return !0;
          var n = t.getValue(),
            r = "";
          return (
            e && (r = U(e) ? (e.checked ? "true" : "false") : e.value),
            (e = r) !== n && (t.setValue(e), !0)
          );
        }
        function q(e) {
          if (
            "undefined" === typeof (e = e || ("undefined" !== typeof document ? document : void 0))
          )
            return null;
          try {
            return e.activeElement || e.body;
          } catch (t) {
            return e.body;
          }
        }
        function Q(e, t) {
          var n = t.checked;
          return R({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != n ? n : e._wrapperState.initialChecked,
          });
        }
        function X(e, t) {
          var n = null == t.defaultValue ? "" : t.defaultValue,
            r = null != t.checked ? t.checked : t.defaultChecked;
          (n = G(null != t.value ? t.value : n)),
            (e._wrapperState = {
              initialChecked: r,
              initialValue: n,
              controlled:
                "checkbox" === t.type || "radio" === t.type ? null != t.checked : null != t.value,
            });
        }
        function K(e, t) {
          null != (t = t.checked) && y(e, "checked", t, !1);
        }
        function J(e, t) {
          K(e, t);
          var n = G(t.value),
            r = t.type;
          if (null != n)
            "number" === r
              ? ((0 === n && "" === e.value) || e.value != n) && (e.value = "" + n)
              : e.value !== "" + n && (e.value = "" + n);
          else if ("submit" === r || "reset" === r) return void e.removeAttribute("value");
          t.hasOwnProperty("value")
            ? ee(e, t.type, n)
            : t.hasOwnProperty("defaultValue") && ee(e, t.type, G(t.defaultValue)),
            null == t.checked &&
              null != t.defaultChecked &&
              (e.defaultChecked = !!t.defaultChecked);
        }
        function Z(e, t, n) {
          if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var r = t.type;
            if (!(("submit" !== r && "reset" !== r) || (void 0 !== t.value && null !== t.value)))
              return;
            (t = "" + e._wrapperState.initialValue),
              n || t === e.value || (e.value = t),
              (e.defaultValue = t);
          }
          "" !== (n = e.name) && (e.name = ""),
            (e.defaultChecked = !!e._wrapperState.initialChecked),
            "" !== n && (e.name = n);
        }
        function ee(e, t, n) {
          ("number" === t && q(e.ownerDocument) === e) ||
            (null == n
              ? (e.defaultValue = "" + e._wrapperState.initialValue)
              : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
        }
        var te = Array.isArray;
        function ne(e, t, n, r) {
          if (((e = e.options), t)) {
            t = {};
            for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
            for (n = 0; n < e.length; n++)
              (a = t.hasOwnProperty("$" + e[n].value)),
                e[n].selected !== a && (e[n].selected = a),
                a && r && (e[n].defaultSelected = !0);
          } else {
            for (n = "" + G(n), t = null, a = 0; a < e.length; a++) {
              if (e[a].value === n)
                return (e[a].selected = !0), void (r && (e[a].defaultSelected = !0));
              null !== t || e[a].disabled || (t = e[a]);
            }
            null !== t && (t.selected = !0);
          }
        }
        function re(e, t) {
          if (null != t.dangerouslySetInnerHTML) throw Error(i(91));
          return R({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue,
          });
        }
        function ae(e, t) {
          var n = t.value;
          if (null == n) {
            if (((n = t.children), (t = t.defaultValue), null != n)) {
              if (null != t) throw Error(i(92));
              if (te(n)) {
                if (1 < n.length) throw Error(i(93));
                n = n[0];
              }
              t = n;
            }
            null == t && (t = ""), (n = t);
          }
          e._wrapperState = { initialValue: G(n) };
        }
        function ie(e, t) {
          var n = G(t.value),
            r = G(t.defaultValue);
          null != n &&
            ((n = "" + n) !== e.value && (e.value = n),
            null == t.defaultValue && e.defaultValue !== n && (e.defaultValue = n)),
            null != r && (e.defaultValue = "" + r);
        }
        function oe(e) {
          var t = e.textContent;
          t === e._wrapperState.initialValue && "" !== t && null !== t && (e.value = t);
        }
        function le(e) {
          switch (e) {
            case "svg":
              return "http://www.w3.org/2000/svg";
            case "math":
              return "http://www.w3.org/1998/Math/MathML";
            default:
              return "http://www.w3.org/1999/xhtml";
          }
        }
        function se(e, t) {
          return null == e || "http://www.w3.org/1999/xhtml" === e
            ? le(t)
            : "http://www.w3.org/2000/svg" === e && "foreignObject" === t
            ? "http://www.w3.org/1999/xhtml"
            : e;
        }
        var ce,
          ue,
          de =
            ((ue = function (e, t) {
              if ("http://www.w3.org/2000/svg" !== e.namespaceURI || "innerHTML" in e)
                e.innerHTML = t;
              else {
                for (
                  (ce = ce || document.createElement("div")).innerHTML =
                    "<svg>" + t.valueOf().toString() + "</svg>",
                    t = ce.firstChild;
                  e.firstChild;

                )
                  e.removeChild(e.firstChild);
                for (; t.firstChild; ) e.appendChild(t.firstChild);
              }
            }),
            "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction
              ? function (e, t, n, r) {
                  MSApp.execUnsafeLocalFunction(function () {
                    return ue(e, t);
                  });
                }
              : ue);
        function fe(e, t) {
          if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType) return void (n.nodeValue = t);
          }
          e.textContent = t;
        }
        var pe = {
            animationIterationCount: !0,
            aspectRatio: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0,
          },
          me = ["Webkit", "ms", "Moz", "O"];
        function he(e, t, n) {
          return null == t || "boolean" === typeof t || "" === t
            ? ""
            : n || "number" !== typeof t || 0 === t || (pe.hasOwnProperty(e) && pe[e])
            ? ("" + t).trim()
            : t + "px";
        }
        function ve(e, t) {
          for (var n in ((e = e.style), t))
            if (t.hasOwnProperty(n)) {
              var r = 0 === n.indexOf("--"),
                a = he(n, t[n], r);
              "float" === n && (n = "cssFloat"), r ? e.setProperty(n, a) : (e[n] = a);
            }
        }
        Object.keys(pe).forEach(function (e) {
          me.forEach(function (t) {
            (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (pe[t] = pe[e]);
          });
        });
        var ge = R(
          { menuitem: !0 },
          {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0,
          }
        );
        function be(e, t) {
          if (t) {
            if (ge[e] && (null != t.children || null != t.dangerouslySetInnerHTML))
              throw Error(i(137, e));
            if (null != t.dangerouslySetInnerHTML) {
              if (null != t.children) throw Error(i(60));
              if (
                "object" !== typeof t.dangerouslySetInnerHTML ||
                !("__html" in t.dangerouslySetInnerHTML)
              )
                throw Error(i(61));
            }
            if (null != t.style && "object" !== typeof t.style) throw Error(i(62));
          }
        }
        function ye(e, t) {
          if (-1 === e.indexOf("-")) return "string" === typeof t.is;
          switch (e) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
              return !1;
            default:
              return !0;
          }
        }
        var we = null;
        function xe(e) {
          return (
            (e = e.target || e.srcElement || window).correspondingUseElement &&
              (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
          );
        }
        var Se = null,
          ke = null,
          Ee = null;
        function Ce(e) {
          if ((e = ya(e))) {
            if ("function" !== typeof Se) throw Error(i(280));
            var t = e.stateNode;
            t && ((t = xa(t)), Se(e.stateNode, e.type, t));
          }
        }
        function Te(e) {
          ke ? (Ee ? Ee.push(e) : (Ee = [e])) : (ke = e);
        }
        function Pe() {
          if (ke) {
            var e = ke,
              t = Ee;
            if (((Ee = ke = null), Ce(e), t)) for (e = 0; e < t.length; e++) Ce(t[e]);
          }
        }
        function Ne(e, t) {
          return e(t);
        }
        function Oe() {}
        var Me = !1;
        function _e(e, t, n) {
          if (Me) return e(t, n);
          Me = !0;
          try {
            return Ne(e, t, n);
          } finally {
            (Me = !1), (null !== ke || null !== Ee) && (Oe(), Pe());
          }
        }
        function je(e, t) {
          var n = e.stateNode;
          if (null === n) return null;
          var r = xa(n);
          if (null === r) return null;
          n = r[t];
          e: switch (t) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
              (r = !r.disabled) ||
                (r = !(
                  "button" === (e = e.type) ||
                  "input" === e ||
                  "select" === e ||
                  "textarea" === e
                )),
                (e = !r);
              break e;
            default:
              e = !1;
          }
          if (e) return null;
          if (n && "function" !== typeof n) throw Error(i(231, t, typeof n));
          return n;
        }
        var Le = !1;
        if (u)
          try {
            var ze = {};
            Object.defineProperty(ze, "passive", {
              get: function () {
                Le = !0;
              },
            }),
              window.addEventListener("test", ze, ze),
              window.removeEventListener("test", ze, ze);
          } catch (ue) {
            Le = !1;
          }
        function Ae(e, t, n, r, a, i, o, l, s) {
          var c = Array.prototype.slice.call(arguments, 3);
          try {
            t.apply(n, c);
          } catch (u) {
            this.onError(u);
          }
        }
        var Ie = !1,
          Re = null,
          Fe = !1,
          De = null,
          Be = {
            onError: function (e) {
              (Ie = !0), (Re = e);
            },
          };
        function He(e, t, n, r, a, i, o, l, s) {
          (Ie = !1), (Re = null), Ae.apply(Be, arguments);
        }
        function Ve(e) {
          var t = e,
            n = e;
          if (e.alternate) for (; t.return; ) t = t.return;
          else {
            e = t;
            do {
              0 !== (4098 & (t = e).flags) && (n = t.return), (e = t.return);
            } while (e);
          }
          return 3 === t.tag ? n : null;
        }
        function We(e) {
          if (13 === e.tag) {
            var t = e.memoizedState;
            if ((null === t && null !== (e = e.alternate) && (t = e.memoizedState), null !== t))
              return t.dehydrated;
          }
          return null;
        }
        function Ge(e) {
          if (Ve(e) !== e) throw Error(i(188));
        }
        function Ue(e) {
          return null !==
            (e = (function (e) {
              var t = e.alternate;
              if (!t) {
                if (null === (t = Ve(e))) throw Error(i(188));
                return t !== e ? null : e;
              }
              for (var n = e, r = t; ; ) {
                var a = n.return;
                if (null === a) break;
                var o = a.alternate;
                if (null === o) {
                  if (null !== (r = a.return)) {
                    n = r;
                    continue;
                  }
                  break;
                }
                if (a.child === o.child) {
                  for (o = a.child; o; ) {
                    if (o === n) return Ge(a), e;
                    if (o === r) return Ge(a), t;
                    o = o.sibling;
                  }
                  throw Error(i(188));
                }
                if (n.return !== r.return) (n = a), (r = o);
                else {
                  for (var l = !1, s = a.child; s; ) {
                    if (s === n) {
                      (l = !0), (n = a), (r = o);
                      break;
                    }
                    if (s === r) {
                      (l = !0), (r = a), (n = o);
                      break;
                    }
                    s = s.sibling;
                  }
                  if (!l) {
                    for (s = o.child; s; ) {
                      if (s === n) {
                        (l = !0), (n = o), (r = a);
                        break;
                      }
                      if (s === r) {
                        (l = !0), (r = o), (n = a);
                        break;
                      }
                      s = s.sibling;
                    }
                    if (!l) throw Error(i(189));
                  }
                }
                if (n.alternate !== r) throw Error(i(190));
              }
              if (3 !== n.tag) throw Error(i(188));
              return n.stateNode.current === n ? e : t;
            })(e))
            ? $e(e)
            : null;
        }
        function $e(e) {
          if (5 === e.tag || 6 === e.tag) return e;
          for (e = e.child; null !== e; ) {
            var t = $e(e);
            if (null !== t) return t;
            e = e.sibling;
          }
          return null;
        }
        var Ye = a.unstable_scheduleCallback,
          qe = a.unstable_cancelCallback,
          Qe = a.unstable_shouldYield,
          Xe = a.unstable_requestPaint,
          Ke = a.unstable_now,
          Je = a.unstable_getCurrentPriorityLevel,
          Ze = a.unstable_ImmediatePriority,
          et = a.unstable_UserBlockingPriority,
          tt = a.unstable_NormalPriority,
          nt = a.unstable_LowPriority,
          rt = a.unstable_IdlePriority,
          at = null,
          it = null;
        var ot = Math.clz32
            ? Math.clz32
            : function (e) {
                return (e >>>= 0), 0 === e ? 32 : (31 - ((lt(e) / st) | 0)) | 0;
              },
          lt = Math.log,
          st = Math.LN2;
        var ct = 64,
          ut = 4194304;
        function dt(e) {
          switch (e & -e) {
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
              return 4194240 & e;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              return 130023424 & e;
            case 134217728:
              return 134217728;
            case 268435456:
              return 268435456;
            case 536870912:
              return 536870912;
            case 1073741824:
              return 1073741824;
            default:
              return e;
          }
        }
        function ft(e, t) {
          var n = e.pendingLanes;
          if (0 === n) return 0;
          var r = 0,
            a = e.suspendedLanes,
            i = e.pingedLanes,
            o = 268435455 & n;
          if (0 !== o) {
            var l = o & ~a;
            0 !== l ? (r = dt(l)) : 0 !== (i &= o) && (r = dt(i));
          } else 0 !== (o = n & ~a) ? (r = dt(o)) : 0 !== i && (r = dt(i));
          if (0 === r) return 0;
          if (
            0 !== t &&
            t !== r &&
            0 === (t & a) &&
            ((a = r & -r) >= (i = t & -t) || (16 === a && 0 !== (4194240 & i)))
          )
            return t;
          if ((0 !== (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes)))
            for (e = e.entanglements, t &= r; 0 < t; )
              (a = 1 << (n = 31 - ot(t))), (r |= e[n]), (t &= ~a);
          return r;
        }
        function pt(e, t) {
          switch (e) {
            case 1:
            case 2:
            case 4:
              return t + 250;
            case 8:
            case 16:
            case 32:
            case 64:
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
              return t + 5e3;
            default:
              return -1;
          }
        }
        function mt(e) {
          return 0 !== (e = -1073741825 & e.pendingLanes) ? e : 1073741824 & e ? 1073741824 : 0;
        }
        function ht() {
          var e = ct;
          return 0 === (4194240 & (ct <<= 1)) && (ct = 64), e;
        }
        function vt(e) {
          for (var t = [], n = 0; 31 > n; n++) t.push(e);
          return t;
        }
        function gt(e, t, n) {
          (e.pendingLanes |= t),
            536870912 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
            ((e = e.eventTimes)[(t = 31 - ot(t))] = n);
        }
        function bt(e, t) {
          var n = (e.entangledLanes |= t);
          for (e = e.entanglements; n; ) {
            var r = 31 - ot(n),
              a = 1 << r;
            (a & t) | (e[r] & t) && (e[r] |= t), (n &= ~a);
          }
        }
        var yt = 0;
        function wt(e) {
          return 1 < (e &= -e) ? (4 < e ? (0 !== (268435455 & e) ? 16 : 536870912) : 4) : 1;
        }
        var xt,
          St,
          kt,
          Et,
          Ct,
          Tt = !1,
          Pt = [],
          Nt = null,
          Ot = null,
          Mt = null,
          _t = new Map(),
          jt = new Map(),
          Lt = [],
          zt =
            "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
              " "
            );
        function At(e, t) {
          switch (e) {
            case "focusin":
            case "focusout":
              Nt = null;
              break;
            case "dragenter":
            case "dragleave":
              Ot = null;
              break;
            case "mouseover":
            case "mouseout":
              Mt = null;
              break;
            case "pointerover":
            case "pointerout":
              _t.delete(t.pointerId);
              break;
            case "gotpointercapture":
            case "lostpointercapture":
              jt.delete(t.pointerId);
          }
        }
        function It(e, t, n, r, a, i) {
          return null === e || e.nativeEvent !== i
            ? ((e = {
                blockedOn: t,
                domEventName: n,
                eventSystemFlags: r,
                nativeEvent: i,
                targetContainers: [a],
              }),
              null !== t && null !== (t = ya(t)) && St(t),
              e)
            : ((e.eventSystemFlags |= r),
              (t = e.targetContainers),
              null !== a && -1 === t.indexOf(a) && t.push(a),
              e);
        }
        function Rt(e) {
          var t = ba(e.target);
          if (null !== t) {
            var n = Ve(t);
            if (null !== n)
              if (13 === (t = n.tag)) {
                if (null !== (t = We(n)))
                  return (
                    (e.blockedOn = t),
                    void Ct(e.priority, function () {
                      kt(n);
                    })
                  );
              } else if (3 === t && n.stateNode.current.memoizedState.isDehydrated)
                return void (e.blockedOn = 3 === n.tag ? n.stateNode.containerInfo : null);
          }
          e.blockedOn = null;
        }
        function Ft(e) {
          if (null !== e.blockedOn) return !1;
          for (var t = e.targetContainers; 0 < t.length; ) {
            var n = Qt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (null !== n) return null !== (t = ya(n)) && St(t), (e.blockedOn = n), !1;
            var r = new (n = e.nativeEvent).constructor(n.type, n);
            (we = r), n.target.dispatchEvent(r), (we = null), t.shift();
          }
          return !0;
        }
        function Dt(e, t, n) {
          Ft(e) && n.delete(t);
        }
        function Bt() {
          (Tt = !1),
            null !== Nt && Ft(Nt) && (Nt = null),
            null !== Ot && Ft(Ot) && (Ot = null),
            null !== Mt && Ft(Mt) && (Mt = null),
            _t.forEach(Dt),
            jt.forEach(Dt);
        }
        function Ht(e, t) {
          e.blockedOn === t &&
            ((e.blockedOn = null),
            Tt || ((Tt = !0), a.unstable_scheduleCallback(a.unstable_NormalPriority, Bt)));
        }
        function Vt(e) {
          function t(t) {
            return Ht(t, e);
          }
          if (0 < Pt.length) {
            Ht(Pt[0], e);
            for (var n = 1; n < Pt.length; n++) {
              var r = Pt[n];
              r.blockedOn === e && (r.blockedOn = null);
            }
          }
          for (
            null !== Nt && Ht(Nt, e),
              null !== Ot && Ht(Ot, e),
              null !== Mt && Ht(Mt, e),
              _t.forEach(t),
              jt.forEach(t),
              n = 0;
            n < Lt.length;
            n++
          )
            (r = Lt[n]).blockedOn === e && (r.blockedOn = null);
          for (; 0 < Lt.length && null === (n = Lt[0]).blockedOn; )
            Rt(n), null === n.blockedOn && Lt.shift();
        }
        var Wt = w.ReactCurrentBatchConfig,
          Gt = !0;
        function Ut(e, t, n, r) {
          var a = yt,
            i = Wt.transition;
          Wt.transition = null;
          try {
            (yt = 1), Yt(e, t, n, r);
          } finally {
            (yt = a), (Wt.transition = i);
          }
        }
        function $t(e, t, n, r) {
          var a = yt,
            i = Wt.transition;
          Wt.transition = null;
          try {
            (yt = 4), Yt(e, t, n, r);
          } finally {
            (yt = a), (Wt.transition = i);
          }
        }
        function Yt(e, t, n, r) {
          if (Gt) {
            var a = Qt(e, t, n, r);
            if (null === a) Gr(e, t, r, qt, n), At(e, r);
            else if (
              (function (e, t, n, r, a) {
                switch (t) {
                  case "focusin":
                    return (Nt = It(Nt, e, t, n, r, a)), !0;
                  case "dragenter":
                    return (Ot = It(Ot, e, t, n, r, a)), !0;
                  case "mouseover":
                    return (Mt = It(Mt, e, t, n, r, a)), !0;
                  case "pointerover":
                    var i = a.pointerId;
                    return _t.set(i, It(_t.get(i) || null, e, t, n, r, a)), !0;
                  case "gotpointercapture":
                    return (i = a.pointerId), jt.set(i, It(jt.get(i) || null, e, t, n, r, a)), !0;
                }
                return !1;
              })(a, e, t, n, r)
            )
              r.stopPropagation();
            else if ((At(e, r), 4 & t && -1 < zt.indexOf(e))) {
              for (; null !== a; ) {
                var i = ya(a);
                if (
                  (null !== i && xt(i),
                  null === (i = Qt(e, t, n, r)) && Gr(e, t, r, qt, n),
                  i === a)
                )
                  break;
                a = i;
              }
              null !== a && r.stopPropagation();
            } else Gr(e, t, r, null, n);
          }
        }
        var qt = null;
        function Qt(e, t, n, r) {
          if (((qt = null), null !== (e = ba((e = xe(r))))))
            if (null === (t = Ve(e))) e = null;
            else if (13 === (n = t.tag)) {
              if (null !== (e = We(t))) return e;
              e = null;
            } else if (3 === n) {
              if (t.stateNode.current.memoizedState.isDehydrated)
                return 3 === t.tag ? t.stateNode.containerInfo : null;
              e = null;
            } else t !== e && (e = null);
          return (qt = e), null;
        }
        function Xt(e) {
          switch (e) {
            case "cancel":
            case "click":
            case "close":
            case "contextmenu":
            case "copy":
            case "cut":
            case "auxclick":
            case "dblclick":
            case "dragend":
            case "dragstart":
            case "drop":
            case "focusin":
            case "focusout":
            case "input":
            case "invalid":
            case "keydown":
            case "keypress":
            case "keyup":
            case "mousedown":
            case "mouseup":
            case "paste":
            case "pause":
            case "play":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
            case "ratechange":
            case "reset":
            case "resize":
            case "seeked":
            case "submit":
            case "touchcancel":
            case "touchend":
            case "touchstart":
            case "volumechange":
            case "change":
            case "selectionchange":
            case "textInput":
            case "compositionstart":
            case "compositionend":
            case "compositionupdate":
            case "beforeblur":
            case "afterblur":
            case "beforeinput":
            case "blur":
            case "fullscreenchange":
            case "focus":
            case "hashchange":
            case "popstate":
            case "select":
            case "selectstart":
              return 1;
            case "drag":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "mousemove":
            case "mouseout":
            case "mouseover":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "scroll":
            case "toggle":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
              return 4;
            case "message":
              switch (Je()) {
                case Ze:
                  return 1;
                case et:
                  return 4;
                case tt:
                case nt:
                  return 16;
                case rt:
                  return 536870912;
                default:
                  return 16;
              }
            default:
              return 16;
          }
        }
        var Kt = null,
          Jt = null,
          Zt = null;
        function en() {
          if (Zt) return Zt;
          var e,
            t,
            n = Jt,
            r = n.length,
            a = "value" in Kt ? Kt.value : Kt.textContent,
            i = a.length;
          for (e = 0; e < r && n[e] === a[e]; e++);
          var o = r - e;
          for (t = 1; t <= o && n[r - t] === a[i - t]; t++);
          return (Zt = a.slice(e, 1 < t ? 1 - t : void 0));
        }
        function tn(e) {
          var t = e.keyCode;
          return (
            "charCode" in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : (e = t),
            10 === e && (e = 13),
            32 <= e || 13 === e ? e : 0
          );
        }
        function nn() {
          return !0;
        }
        function rn() {
          return !1;
        }
        function an(e) {
          function t(t, n, r, a, i) {
            for (var o in ((this._reactName = t),
            (this._targetInst = r),
            (this.type = n),
            (this.nativeEvent = a),
            (this.target = i),
            (this.currentTarget = null),
            e))
              e.hasOwnProperty(o) && ((t = e[o]), (this[o] = t ? t(a) : a[o]));
            return (
              (this.isDefaultPrevented = (
                null != a.defaultPrevented ? a.defaultPrevented : !1 === a.returnValue
              )
                ? nn
                : rn),
              (this.isPropagationStopped = rn),
              this
            );
          }
          return (
            R(t.prototype, {
              preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e &&
                  (e.preventDefault
                    ? e.preventDefault()
                    : "unknown" !== typeof e.returnValue && (e.returnValue = !1),
                  (this.isDefaultPrevented = nn));
              },
              stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                  (e.stopPropagation
                    ? e.stopPropagation()
                    : "unknown" !== typeof e.cancelBubble && (e.cancelBubble = !0),
                  (this.isPropagationStopped = nn));
              },
              persist: function () {},
              isPersistent: nn,
            }),
            t
          );
        }
        var on,
          ln,
          sn,
          cn = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
              return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
          },
          un = an(cn),
          dn = R({}, cn, { view: 0, detail: 0 }),
          fn = an(dn),
          pn = R({}, dn, {
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
            getModifierState: Cn,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
              return void 0 === e.relatedTarget
                ? e.fromElement === e.srcElement
                  ? e.toElement
                  : e.fromElement
                : e.relatedTarget;
            },
            movementX: function (e) {
              return "movementX" in e
                ? e.movementX
                : (e !== sn &&
                    (sn && "mousemove" === e.type
                      ? ((on = e.screenX - sn.screenX), (ln = e.screenY - sn.screenY))
                      : (ln = on = 0),
                    (sn = e)),
                  on);
            },
            movementY: function (e) {
              return "movementY" in e ? e.movementY : ln;
            },
          }),
          mn = an(pn),
          hn = an(R({}, pn, { dataTransfer: 0 })),
          vn = an(R({}, dn, { relatedTarget: 0 })),
          gn = an(R({}, cn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })),
          bn = R({}, cn, {
            clipboardData: function (e) {
              return "clipboardData" in e ? e.clipboardData : window.clipboardData;
            },
          }),
          yn = an(bn),
          wn = an(R({}, cn, { data: 0 })),
          xn = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified",
          },
          Sn = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta",
          },
          kn = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
        function En(e) {
          var t = this.nativeEvent;
          return t.getModifierState ? t.getModifierState(e) : !!(e = kn[e]) && !!t[e];
        }
        function Cn() {
          return En;
        }
        var Tn = R({}, dn, {
            key: function (e) {
              if (e.key) {
                var t = xn[e.key] || e.key;
                if ("Unidentified" !== t) return t;
              }
              return "keypress" === e.type
                ? 13 === (e = tn(e))
                  ? "Enter"
                  : String.fromCharCode(e)
                : "keydown" === e.type || "keyup" === e.type
                ? Sn[e.keyCode] || "Unidentified"
                : "";
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: Cn,
            charCode: function (e) {
              return "keypress" === e.type ? tn(e) : 0;
            },
            keyCode: function (e) {
              return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
            },
            which: function (e) {
              return "keypress" === e.type
                ? tn(e)
                : "keydown" === e.type || "keyup" === e.type
                ? e.keyCode
                : 0;
            },
          }),
          Pn = an(Tn),
          Nn = an(
            R({}, pn, {
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
            })
          ),
          On = an(
            R({}, dn, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: Cn,
            })
          ),
          Mn = an(R({}, cn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })),
          _n = R({}, pn, {
            deltaX: function (e) {
              return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
            },
            deltaY: function (e) {
              return "deltaY" in e
                ? e.deltaY
                : "wheelDeltaY" in e
                ? -e.wheelDeltaY
                : "wheelDelta" in e
                ? -e.wheelDelta
                : 0;
            },
            deltaZ: 0,
            deltaMode: 0,
          }),
          jn = an(_n),
          Ln = [9, 13, 27, 32],
          zn = u && "CompositionEvent" in window,
          An = null;
        u && "documentMode" in document && (An = document.documentMode);
        var In = u && "TextEvent" in window && !An,
          Rn = u && (!zn || (An && 8 < An && 11 >= An)),
          Fn = String.fromCharCode(32),
          Dn = !1;
        function Bn(e, t) {
          switch (e) {
            case "keyup":
              return -1 !== Ln.indexOf(t.keyCode);
            case "keydown":
              return 229 !== t.keyCode;
            case "keypress":
            case "mousedown":
            case "focusout":
              return !0;
            default:
              return !1;
          }
        }
        function Hn(e) {
          return "object" === typeof (e = e.detail) && "data" in e ? e.data : null;
        }
        var Vn = !1;
        var Wn = {
          color: !0,
          date: !0,
          datetime: !0,
          "datetime-local": !0,
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
        function Gn(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return "input" === t ? !!Wn[e.type] : "textarea" === t;
        }
        function Un(e, t, n, r) {
          Te(r),
            0 < (t = $r(t, "onChange")).length &&
              ((n = new un("onChange", "change", null, n, r)), e.push({ event: n, listeners: t }));
        }
        var $n = null,
          Yn = null;
        function qn(e) {
          Fr(e, 0);
        }
        function Qn(e) {
          if (Y(wa(e))) return e;
        }
        function Xn(e, t) {
          if ("change" === e) return t;
        }
        var Kn = !1;
        if (u) {
          var Jn;
          if (u) {
            var Zn = "oninput" in document;
            if (!Zn) {
              var er = document.createElement("div");
              er.setAttribute("oninput", "return;"), (Zn = "function" === typeof er.oninput);
            }
            Jn = Zn;
          } else Jn = !1;
          Kn = Jn && (!document.documentMode || 9 < document.documentMode);
        }
        function tr() {
          $n && ($n.detachEvent("onpropertychange", nr), (Yn = $n = null));
        }
        function nr(e) {
          if ("value" === e.propertyName && Qn(Yn)) {
            var t = [];
            Un(t, Yn, e, xe(e)), _e(qn, t);
          }
        }
        function rr(e, t, n) {
          "focusin" === e
            ? (tr(), (Yn = n), ($n = t).attachEvent("onpropertychange", nr))
            : "focusout" === e && tr();
        }
        function ar(e) {
          if ("selectionchange" === e || "keyup" === e || "keydown" === e) return Qn(Yn);
        }
        function ir(e, t) {
          if ("click" === e) return Qn(t);
        }
        function or(e, t) {
          if ("input" === e || "change" === e) return Qn(t);
        }
        var lr =
          "function" === typeof Object.is
            ? Object.is
            : function (e, t) {
                return (e === t && (0 !== e || 1 / e === 1 / t)) || (e !== e && t !== t);
              };
        function sr(e, t) {
          if (lr(e, t)) return !0;
          if ("object" !== typeof e || null === e || "object" !== typeof t || null === t) return !1;
          var n = Object.keys(e),
            r = Object.keys(t);
          if (n.length !== r.length) return !1;
          for (r = 0; r < n.length; r++) {
            var a = n[r];
            if (!d.call(t, a) || !lr(e[a], t[a])) return !1;
          }
          return !0;
        }
        function cr(e) {
          for (; e && e.firstChild; ) e = e.firstChild;
          return e;
        }
        function ur(e, t) {
          var n,
            r = cr(e);
          for (e = 0; r; ) {
            if (3 === r.nodeType) {
              if (((n = e + r.textContent.length), e <= t && n >= t))
                return { node: r, offset: t - e };
              e = n;
            }
            e: {
              for (; r; ) {
                if (r.nextSibling) {
                  r = r.nextSibling;
                  break e;
                }
                r = r.parentNode;
              }
              r = void 0;
            }
            r = cr(r);
          }
        }
        function dr(e, t) {
          return (
            !(!e || !t) &&
            (e === t ||
              ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                  ? dr(e, t.parentNode)
                  : "contains" in e
                  ? e.contains(t)
                  : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(t)))))
          );
        }
        function fr() {
          for (var e = window, t = q(); t instanceof e.HTMLIFrameElement; ) {
            try {
              var n = "string" === typeof t.contentWindow.location.href;
            } catch (r) {
              n = !1;
            }
            if (!n) break;
            t = q((e = t.contentWindow).document);
          }
          return t;
        }
        function pr(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return (
            t &&
            (("input" === t &&
              ("text" === e.type ||
                "search" === e.type ||
                "tel" === e.type ||
                "url" === e.type ||
                "password" === e.type)) ||
              "textarea" === t ||
              "true" === e.contentEditable)
          );
        }
        function mr(e) {
          var t = fr(),
            n = e.focusedElem,
            r = e.selectionRange;
          if (t !== n && n && n.ownerDocument && dr(n.ownerDocument.documentElement, n)) {
            if (null !== r && pr(n))
              if (((t = r.start), void 0 === (e = r.end) && (e = t), "selectionStart" in n))
                (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
              else if (
                (e = ((t = n.ownerDocument || document) && t.defaultView) || window).getSelection
              ) {
                e = e.getSelection();
                var a = n.textContent.length,
                  i = Math.min(r.start, a);
                (r = void 0 === r.end ? i : Math.min(r.end, a)),
                  !e.extend && i > r && ((a = r), (r = i), (i = a)),
                  (a = ur(n, i));
                var o = ur(n, r);
                a &&
                  o &&
                  (1 !== e.rangeCount ||
                    e.anchorNode !== a.node ||
                    e.anchorOffset !== a.offset ||
                    e.focusNode !== o.node ||
                    e.focusOffset !== o.offset) &&
                  ((t = t.createRange()).setStart(a.node, a.offset),
                  e.removeAllRanges(),
                  i > r
                    ? (e.addRange(t), e.extend(o.node, o.offset))
                    : (t.setEnd(o.node, o.offset), e.addRange(t)));
              }
            for (t = [], e = n; (e = e.parentNode); )
              1 === e.nodeType && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
            for ("function" === typeof n.focus && n.focus(), n = 0; n < t.length; n++)
              ((e = t[n]).element.scrollLeft = e.left), (e.element.scrollTop = e.top);
          }
        }
        var hr = u && "documentMode" in document && 11 >= document.documentMode,
          vr = null,
          gr = null,
          br = null,
          yr = !1;
        function wr(e, t, n) {
          var r = n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument;
          yr ||
            null == vr ||
            vr !== q(r) ||
            ("selectionStart" in (r = vr) && pr(r)
              ? (r = { start: r.selectionStart, end: r.selectionEnd })
              : (r = {
                  anchorNode: (r = (
                    (r.ownerDocument && r.ownerDocument.defaultView) ||
                    window
                  ).getSelection()).anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
                }),
            (br && sr(br, r)) ||
              ((br = r),
              0 < (r = $r(gr, "onSelect")).length &&
                ((t = new un("onSelect", "select", null, t, n)),
                e.push({ event: t, listeners: r }),
                (t.target = vr))));
        }
        function xr(e, t) {
          var n = {};
          return (
            (n[e.toLowerCase()] = t.toLowerCase()),
            (n["Webkit" + e] = "webkit" + t),
            (n["Moz" + e] = "moz" + t),
            n
          );
        }
        var Sr = {
            animationend: xr("Animation", "AnimationEnd"),
            animationiteration: xr("Animation", "AnimationIteration"),
            animationstart: xr("Animation", "AnimationStart"),
            transitionend: xr("Transition", "TransitionEnd"),
          },
          kr = {},
          Er = {};
        function Cr(e) {
          if (kr[e]) return kr[e];
          if (!Sr[e]) return e;
          var t,
            n = Sr[e];
          for (t in n) if (n.hasOwnProperty(t) && t in Er) return (kr[e] = n[t]);
          return e;
        }
        u &&
          ((Er = document.createElement("div").style),
          "AnimationEvent" in window ||
            (delete Sr.animationend.animation,
            delete Sr.animationiteration.animation,
            delete Sr.animationstart.animation),
          "TransitionEvent" in window || delete Sr.transitionend.transition);
        var Tr = Cr("animationend"),
          Pr = Cr("animationiteration"),
          Nr = Cr("animationstart"),
          Or = Cr("transitionend"),
          Mr = new Map(),
          _r =
            "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
              " "
            );
        function jr(e, t) {
          Mr.set(e, t), s(t, [e]);
        }
        for (var Lr = 0; Lr < _r.length; Lr++) {
          var zr = _r[Lr];
          jr(zr.toLowerCase(), "on" + (zr[0].toUpperCase() + zr.slice(1)));
        }
        jr(Tr, "onAnimationEnd"),
          jr(Pr, "onAnimationIteration"),
          jr(Nr, "onAnimationStart"),
          jr("dblclick", "onDoubleClick"),
          jr("focusin", "onFocus"),
          jr("focusout", "onBlur"),
          jr(Or, "onTransitionEnd"),
          c("onMouseEnter", ["mouseout", "mouseover"]),
          c("onMouseLeave", ["mouseout", "mouseover"]),
          c("onPointerEnter", ["pointerout", "pointerover"]),
          c("onPointerLeave", ["pointerout", "pointerover"]),
          s(
            "onChange",
            "change click focusin focusout input keydown keyup selectionchange".split(" ")
          ),
          s(
            "onSelect",
            "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
              " "
            )
          ),
          s("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
          s(
            "onCompositionEnd",
            "compositionend focusout keydown keypress keyup mousedown".split(" ")
          ),
          s(
            "onCompositionStart",
            "compositionstart focusout keydown keypress keyup mousedown".split(" ")
          ),
          s(
            "onCompositionUpdate",
            "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
          );
        var Ar =
            "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
              " "
            ),
          Ir = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ar));
        function Rr(e, t, n) {
          var r = e.type || "unknown-event";
          (e.currentTarget = n),
            (function (e, t, n, r, a, o, l, s, c) {
              if ((He.apply(this, arguments), Ie)) {
                if (!Ie) throw Error(i(198));
                var u = Re;
                (Ie = !1), (Re = null), Fe || ((Fe = !0), (De = u));
              }
            })(r, t, void 0, e),
            (e.currentTarget = null);
        }
        function Fr(e, t) {
          t = 0 !== (4 & t);
          for (var n = 0; n < e.length; n++) {
            var r = e[n],
              a = r.event;
            r = r.listeners;
            e: {
              var i = void 0;
              if (t)
                for (var o = r.length - 1; 0 <= o; o--) {
                  var l = r[o],
                    s = l.instance,
                    c = l.currentTarget;
                  if (((l = l.listener), s !== i && a.isPropagationStopped())) break e;
                  Rr(a, l, c), (i = s);
                }
              else
                for (o = 0; o < r.length; o++) {
                  if (
                    ((s = (l = r[o]).instance),
                    (c = l.currentTarget),
                    (l = l.listener),
                    s !== i && a.isPropagationStopped())
                  )
                    break e;
                  Rr(a, l, c), (i = s);
                }
            }
          }
          if (Fe) throw ((e = De), (Fe = !1), (De = null), e);
        }
        function Dr(e, t) {
          var n = t[ha];
          void 0 === n && (n = t[ha] = new Set());
          var r = e + "__bubble";
          n.has(r) || (Wr(t, e, 2, !1), n.add(r));
        }
        function Br(e, t, n) {
          var r = 0;
          t && (r |= 4), Wr(n, e, r, t);
        }
        var Hr = "_reactListening" + Math.random().toString(36).slice(2);
        function Vr(e) {
          if (!e[Hr]) {
            (e[Hr] = !0),
              o.forEach(function (t) {
                "selectionchange" !== t && (Ir.has(t) || Br(t, !1, e), Br(t, !0, e));
              });
            var t = 9 === e.nodeType ? e : e.ownerDocument;
            null === t || t[Hr] || ((t[Hr] = !0), Br("selectionchange", !1, t));
          }
        }
        function Wr(e, t, n, r) {
          switch (Xt(t)) {
            case 1:
              var a = Ut;
              break;
            case 4:
              a = $t;
              break;
            default:
              a = Yt;
          }
          (n = a.bind(null, t, n, e)),
            (a = void 0),
            !Le || ("touchstart" !== t && "touchmove" !== t && "wheel" !== t) || (a = !0),
            r
              ? void 0 !== a
                ? e.addEventListener(t, n, { capture: !0, passive: a })
                : e.addEventListener(t, n, !0)
              : void 0 !== a
              ? e.addEventListener(t, n, { passive: a })
              : e.addEventListener(t, n, !1);
        }
        function Gr(e, t, n, r, a) {
          var i = r;
          if (0 === (1 & t) && 0 === (2 & t) && null !== r)
            e: for (;;) {
              if (null === r) return;
              var o = r.tag;
              if (3 === o || 4 === o) {
                var l = r.stateNode.containerInfo;
                if (l === a || (8 === l.nodeType && l.parentNode === a)) break;
                if (4 === o)
                  for (o = r.return; null !== o; ) {
                    var s = o.tag;
                    if (
                      (3 === s || 4 === s) &&
                      ((s = o.stateNode.containerInfo) === a ||
                        (8 === s.nodeType && s.parentNode === a))
                    )
                      return;
                    o = o.return;
                  }
                for (; null !== l; ) {
                  if (null === (o = ba(l))) return;
                  if (5 === (s = o.tag) || 6 === s) {
                    r = i = o;
                    continue e;
                  }
                  l = l.parentNode;
                }
              }
              r = r.return;
            }
          _e(function () {
            var r = i,
              a = xe(n),
              o = [];
            e: {
              var l = Mr.get(e);
              if (void 0 !== l) {
                var s = un,
                  c = e;
                switch (e) {
                  case "keypress":
                    if (0 === tn(n)) break e;
                  case "keydown":
                  case "keyup":
                    s = Pn;
                    break;
                  case "focusin":
                    (c = "focus"), (s = vn);
                    break;
                  case "focusout":
                    (c = "blur"), (s = vn);
                    break;
                  case "beforeblur":
                  case "afterblur":
                    s = vn;
                    break;
                  case "click":
                    if (2 === n.button) break e;
                  case "auxclick":
                  case "dblclick":
                  case "mousedown":
                  case "mousemove":
                  case "mouseup":
                  case "mouseout":
                  case "mouseover":
                  case "contextmenu":
                    s = mn;
                    break;
                  case "drag":
                  case "dragend":
                  case "dragenter":
                  case "dragexit":
                  case "dragleave":
                  case "dragover":
                  case "dragstart":
                  case "drop":
                    s = hn;
                    break;
                  case "touchcancel":
                  case "touchend":
                  case "touchmove":
                  case "touchstart":
                    s = On;
                    break;
                  case Tr:
                  case Pr:
                  case Nr:
                    s = gn;
                    break;
                  case Or:
                    s = Mn;
                    break;
                  case "scroll":
                    s = fn;
                    break;
                  case "wheel":
                    s = jn;
                    break;
                  case "copy":
                  case "cut":
                  case "paste":
                    s = yn;
                    break;
                  case "gotpointercapture":
                  case "lostpointercapture":
                  case "pointercancel":
                  case "pointerdown":
                  case "pointermove":
                  case "pointerout":
                  case "pointerover":
                  case "pointerup":
                    s = Nn;
                }
                var u = 0 !== (4 & t),
                  d = !u && "scroll" === e,
                  f = u ? (null !== l ? l + "Capture" : null) : l;
                u = [];
                for (var p, m = r; null !== m; ) {
                  var h = (p = m).stateNode;
                  if (
                    (5 === p.tag &&
                      null !== h &&
                      ((p = h), null !== f && null != (h = je(m, f)) && u.push(Ur(m, h, p))),
                    d)
                  )
                    break;
                  m = m.return;
                }
                0 < u.length && ((l = new s(l, c, null, n, a)), o.push({ event: l, listeners: u }));
              }
            }
            if (0 === (7 & t)) {
              if (
                ((s = "mouseout" === e || "pointerout" === e),
                (!(l = "mouseover" === e || "pointerover" === e) ||
                  n === we ||
                  !(c = n.relatedTarget || n.fromElement) ||
                  (!ba(c) && !c[ma])) &&
                  (s || l) &&
                  ((l =
                    a.window === a
                      ? a
                      : (l = a.ownerDocument)
                      ? l.defaultView || l.parentWindow
                      : window),
                  s
                    ? ((s = r),
                      null !== (c = (c = n.relatedTarget || n.toElement) ? ba(c) : null) &&
                        (c !== (d = Ve(c)) || (5 !== c.tag && 6 !== c.tag)) &&
                        (c = null))
                    : ((s = null), (c = r)),
                  s !== c))
              ) {
                if (
                  ((u = mn),
                  (h = "onMouseLeave"),
                  (f = "onMouseEnter"),
                  (m = "mouse"),
                  ("pointerout" !== e && "pointerover" !== e) ||
                    ((u = Nn), (h = "onPointerLeave"), (f = "onPointerEnter"), (m = "pointer")),
                  (d = null == s ? l : wa(s)),
                  (p = null == c ? l : wa(c)),
                  ((l = new u(h, m + "leave", s, n, a)).target = d),
                  (l.relatedTarget = p),
                  (h = null),
                  ba(a) === r &&
                    (((u = new u(f, m + "enter", c, n, a)).target = p),
                    (u.relatedTarget = d),
                    (h = u)),
                  (d = h),
                  s && c)
                )
                  e: {
                    for (f = c, m = 0, p = u = s; p; p = Yr(p)) m++;
                    for (p = 0, h = f; h; h = Yr(h)) p++;
                    for (; 0 < m - p; ) (u = Yr(u)), m--;
                    for (; 0 < p - m; ) (f = Yr(f)), p--;
                    for (; m--; ) {
                      if (u === f || (null !== f && u === f.alternate)) break e;
                      (u = Yr(u)), (f = Yr(f));
                    }
                    u = null;
                  }
                else u = null;
                null !== s && qr(o, l, s, u, !1), null !== c && null !== d && qr(o, d, c, u, !0);
              }
              if (
                "select" === (s = (l = r ? wa(r) : window).nodeName && l.nodeName.toLowerCase()) ||
                ("input" === s && "file" === l.type)
              )
                var v = Xn;
              else if (Gn(l))
                if (Kn) v = or;
                else {
                  v = ar;
                  var g = rr;
                }
              else
                (s = l.nodeName) &&
                  "input" === s.toLowerCase() &&
                  ("checkbox" === l.type || "radio" === l.type) &&
                  (v = ir);
              switch (
                (v && (v = v(e, r))
                  ? Un(o, v, n, a)
                  : (g && g(e, l, r),
                    "focusout" === e &&
                      (g = l._wrapperState) &&
                      g.controlled &&
                      "number" === l.type &&
                      ee(l, "number", l.value)),
                (g = r ? wa(r) : window),
                e)
              ) {
                case "focusin":
                  (Gn(g) || "true" === g.contentEditable) && ((vr = g), (gr = r), (br = null));
                  break;
                case "focusout":
                  br = gr = vr = null;
                  break;
                case "mousedown":
                  yr = !0;
                  break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                  (yr = !1), wr(o, n, a);
                  break;
                case "selectionchange":
                  if (hr) break;
                case "keydown":
                case "keyup":
                  wr(o, n, a);
              }
              var b;
              if (zn)
                e: {
                  switch (e) {
                    case "compositionstart":
                      var y = "onCompositionStart";
                      break e;
                    case "compositionend":
                      y = "onCompositionEnd";
                      break e;
                    case "compositionupdate":
                      y = "onCompositionUpdate";
                      break e;
                  }
                  y = void 0;
                }
              else
                Vn
                  ? Bn(e, n) && (y = "onCompositionEnd")
                  : "keydown" === e && 229 === n.keyCode && (y = "onCompositionStart");
              y &&
                (Rn &&
                  "ko" !== n.locale &&
                  (Vn || "onCompositionStart" !== y
                    ? "onCompositionEnd" === y && Vn && (b = en())
                    : ((Jt = "value" in (Kt = a) ? Kt.value : Kt.textContent), (Vn = !0))),
                0 < (g = $r(r, y)).length &&
                  ((y = new wn(y, e, null, n, a)),
                  o.push({ event: y, listeners: g }),
                  b ? (y.data = b) : null !== (b = Hn(n)) && (y.data = b))),
                (b = In
                  ? (function (e, t) {
                      switch (e) {
                        case "compositionend":
                          return Hn(t);
                        case "keypress":
                          return 32 !== t.which ? null : ((Dn = !0), Fn);
                        case "textInput":
                          return (e = t.data) === Fn && Dn ? null : e;
                        default:
                          return null;
                      }
                    })(e, n)
                  : (function (e, t) {
                      if (Vn)
                        return "compositionend" === e || (!zn && Bn(e, t))
                          ? ((e = en()), (Zt = Jt = Kt = null), (Vn = !1), e)
                          : null;
                      switch (e) {
                        case "paste":
                        default:
                          return null;
                        case "keypress":
                          if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
                            if (t.char && 1 < t.char.length) return t.char;
                            if (t.which) return String.fromCharCode(t.which);
                          }
                          return null;
                        case "compositionend":
                          return Rn && "ko" !== t.locale ? null : t.data;
                      }
                    })(e, n)) &&
                  0 < (r = $r(r, "onBeforeInput")).length &&
                  ((a = new wn("onBeforeInput", "beforeinput", null, n, a)),
                  o.push({ event: a, listeners: r }),
                  (a.data = b));
            }
            Fr(o, t);
          });
        }
        function Ur(e, t, n) {
          return { instance: e, listener: t, currentTarget: n };
        }
        function $r(e, t) {
          for (var n = t + "Capture", r = []; null !== e; ) {
            var a = e,
              i = a.stateNode;
            5 === a.tag &&
              null !== i &&
              ((a = i),
              null != (i = je(e, n)) && r.unshift(Ur(e, i, a)),
              null != (i = je(e, t)) && r.push(Ur(e, i, a))),
              (e = e.return);
          }
          return r;
        }
        function Yr(e) {
          if (null === e) return null;
          do {
            e = e.return;
          } while (e && 5 !== e.tag);
          return e || null;
        }
        function qr(e, t, n, r, a) {
          for (var i = t._reactName, o = []; null !== n && n !== r; ) {
            var l = n,
              s = l.alternate,
              c = l.stateNode;
            if (null !== s && s === r) break;
            5 === l.tag &&
              null !== c &&
              ((l = c),
              a
                ? null != (s = je(n, i)) && o.unshift(Ur(n, s, l))
                : a || (null != (s = je(n, i)) && o.push(Ur(n, s, l)))),
              (n = n.return);
          }
          0 !== o.length && e.push({ event: t, listeners: o });
        }
        var Qr = /\r\n?/g,
          Xr = /\u0000|\uFFFD/g;
        function Kr(e) {
          return ("string" === typeof e ? e : "" + e).replace(Qr, "\n").replace(Xr, "");
        }
        function Jr(e, t, n) {
          if (((t = Kr(t)), Kr(e) !== t && n)) throw Error(i(425));
        }
        function Zr() {}
        var ea = null,
          ta = null;
        function na(e, t) {
          return (
            "textarea" === e ||
            "noscript" === e ||
            "string" === typeof t.children ||
            "number" === typeof t.children ||
            ("object" === typeof t.dangerouslySetInnerHTML &&
              null !== t.dangerouslySetInnerHTML &&
              null != t.dangerouslySetInnerHTML.__html)
          );
        }
        var ra = "function" === typeof setTimeout ? setTimeout : void 0,
          aa = "function" === typeof clearTimeout ? clearTimeout : void 0,
          ia = "function" === typeof Promise ? Promise : void 0,
          oa =
            "function" === typeof queueMicrotask
              ? queueMicrotask
              : "undefined" !== typeof ia
              ? function (e) {
                  return ia.resolve(null).then(e).catch(la);
                }
              : ra;
        function la(e) {
          setTimeout(function () {
            throw e;
          });
        }
        function sa(e, t) {
          var n = t,
            r = 0;
          do {
            var a = n.nextSibling;
            if ((e.removeChild(n), a && 8 === a.nodeType))
              if ("/$" === (n = a.data)) {
                if (0 === r) return e.removeChild(a), void Vt(t);
                r--;
              } else ("$" !== n && "$?" !== n && "$!" !== n) || r++;
            n = a;
          } while (n);
          Vt(t);
        }
        function ca(e) {
          for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t) break;
            if (8 === t) {
              if ("$" === (t = e.data) || "$!" === t || "$?" === t) break;
              if ("/$" === t) return null;
            }
          }
          return e;
        }
        function ua(e) {
          e = e.previousSibling;
          for (var t = 0; e; ) {
            if (8 === e.nodeType) {
              var n = e.data;
              if ("$" === n || "$!" === n || "$?" === n) {
                if (0 === t) return e;
                t--;
              } else "/$" === n && t++;
            }
            e = e.previousSibling;
          }
          return null;
        }
        var da = Math.random().toString(36).slice(2),
          fa = "__reactFiber$" + da,
          pa = "__reactProps$" + da,
          ma = "__reactContainer$" + da,
          ha = "__reactEvents$" + da,
          va = "__reactListeners$" + da,
          ga = "__reactHandles$" + da;
        function ba(e) {
          var t = e[fa];
          if (t) return t;
          for (var n = e.parentNode; n; ) {
            if ((t = n[ma] || n[fa])) {
              if (((n = t.alternate), null !== t.child || (null !== n && null !== n.child)))
                for (e = ua(e); null !== e; ) {
                  if ((n = e[fa])) return n;
                  e = ua(e);
                }
              return t;
            }
            n = (e = n).parentNode;
          }
          return null;
        }
        function ya(e) {
          return !(e = e[fa] || e[ma]) ||
            (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
            ? null
            : e;
        }
        function wa(e) {
          if (5 === e.tag || 6 === e.tag) return e.stateNode;
          throw Error(i(33));
        }
        function xa(e) {
          return e[pa] || null;
        }
        var Sa = [],
          ka = -1;
        function Ea(e) {
          return { current: e };
        }
        function Ca(e) {
          0 > ka || ((e.current = Sa[ka]), (Sa[ka] = null), ka--);
        }
        function Ta(e, t) {
          ka++, (Sa[ka] = e.current), (e.current = t);
        }
        var Pa = {},
          Na = Ea(Pa),
          Oa = Ea(!1),
          Ma = Pa;
        function _a(e, t) {
          var n = e.type.contextTypes;
          if (!n) return Pa;
          var r = e.stateNode;
          if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
            return r.__reactInternalMemoizedMaskedChildContext;
          var a,
            i = {};
          for (a in n) i[a] = t[a];
          return (
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t),
              (e.__reactInternalMemoizedMaskedChildContext = i)),
            i
          );
        }
        function ja(e) {
          return null !== (e = e.childContextTypes) && void 0 !== e;
        }
        function La() {
          Ca(Oa), Ca(Na);
        }
        function za(e, t, n) {
          if (Na.current !== Pa) throw Error(i(168));
          Ta(Na, t), Ta(Oa, n);
        }
        function Aa(e, t, n) {
          var r = e.stateNode;
          if (((t = t.childContextTypes), "function" !== typeof r.getChildContext)) return n;
          for (var a in (r = r.getChildContext()))
            if (!(a in t)) throw Error(i(108, W(e) || "Unknown", a));
          return R({}, n, r);
        }
        function Ia(e) {
          return (
            (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Pa),
            (Ma = Na.current),
            Ta(Na, e),
            Ta(Oa, Oa.current),
            !0
          );
        }
        function Ra(e, t, n) {
          var r = e.stateNode;
          if (!r) throw Error(i(169));
          n
            ? ((e = Aa(e, t, Ma)),
              (r.__reactInternalMemoizedMergedChildContext = e),
              Ca(Oa),
              Ca(Na),
              Ta(Na, e))
            : Ca(Oa),
            Ta(Oa, n);
        }
        var Fa = null,
          Da = !1,
          Ba = !1;
        function Ha(e) {
          null === Fa ? (Fa = [e]) : Fa.push(e);
        }
        function Va() {
          if (!Ba && null !== Fa) {
            Ba = !0;
            var e = 0,
              t = yt;
            try {
              var n = Fa;
              for (yt = 1; e < n.length; e++) {
                var r = n[e];
                do {
                  r = r(!0);
                } while (null !== r);
              }
              (Fa = null), (Da = !1);
            } catch (a) {
              throw (null !== Fa && (Fa = Fa.slice(e + 1)), Ye(Ze, Va), a);
            } finally {
              (yt = t), (Ba = !1);
            }
          }
          return null;
        }
        var Wa = [],
          Ga = 0,
          Ua = null,
          $a = 0,
          Ya = [],
          qa = 0,
          Qa = null,
          Xa = 1,
          Ka = "";
        function Ja(e, t) {
          (Wa[Ga++] = $a), (Wa[Ga++] = Ua), (Ua = e), ($a = t);
        }
        function Za(e, t, n) {
          (Ya[qa++] = Xa), (Ya[qa++] = Ka), (Ya[qa++] = Qa), (Qa = e);
          var r = Xa;
          e = Ka;
          var a = 32 - ot(r) - 1;
          (r &= ~(1 << a)), (n += 1);
          var i = 32 - ot(t) + a;
          if (30 < i) {
            var o = a - (a % 5);
            (i = (r & ((1 << o) - 1)).toString(32)),
              (r >>= o),
              (a -= o),
              (Xa = (1 << (32 - ot(t) + a)) | (n << a) | r),
              (Ka = i + e);
          } else (Xa = (1 << i) | (n << a) | r), (Ka = e);
        }
        function ei(e) {
          null !== e.return && (Ja(e, 1), Za(e, 1, 0));
        }
        function ti(e) {
          for (; e === Ua; ) (Ua = Wa[--Ga]), (Wa[Ga] = null), ($a = Wa[--Ga]), (Wa[Ga] = null);
          for (; e === Qa; )
            (Qa = Ya[--qa]),
              (Ya[qa] = null),
              (Ka = Ya[--qa]),
              (Ya[qa] = null),
              (Xa = Ya[--qa]),
              (Ya[qa] = null);
        }
        var ni = null,
          ri = null,
          ai = !1,
          ii = null;
        function oi(e, t) {
          var n = _c(5, null, null, 0);
          (n.elementType = "DELETED"),
            (n.stateNode = t),
            (n.return = e),
            null === (t = e.deletions) ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
        }
        function li(e, t) {
          switch (e.tag) {
            case 5:
              var n = e.type;
              return (
                null !==
                  (t =
                    1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t) &&
                ((e.stateNode = t), (ni = e), (ri = ca(t.firstChild)), !0)
              );
            case 6:
              return (
                null !== (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) &&
                ((e.stateNode = t), (ni = e), (ri = null), !0)
              );
            case 13:
              return (
                null !== (t = 8 !== t.nodeType ? null : t) &&
                ((n = null !== Qa ? { id: Xa, overflow: Ka } : null),
                (e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }),
                ((n = _c(18, null, null, 0)).stateNode = t),
                (n.return = e),
                (e.child = n),
                (ni = e),
                (ri = null),
                !0)
              );
            default:
              return !1;
          }
        }
        function si(e) {
          return 0 !== (1 & e.mode) && 0 === (128 & e.flags);
        }
        function ci(e) {
          if (ai) {
            var t = ri;
            if (t) {
              var n = t;
              if (!li(e, t)) {
                if (si(e)) throw Error(i(418));
                t = ca(n.nextSibling);
                var r = ni;
                t && li(e, t) ? oi(r, n) : ((e.flags = (-4097 & e.flags) | 2), (ai = !1), (ni = e));
              }
            } else {
              if (si(e)) throw Error(i(418));
              (e.flags = (-4097 & e.flags) | 2), (ai = !1), (ni = e);
            }
          }
        }
        function ui(e) {
          for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag; )
            e = e.return;
          ni = e;
        }
        function di(e) {
          if (e !== ni) return !1;
          if (!ai) return ui(e), (ai = !0), !1;
          var t;
          if (
            ((t = 3 !== e.tag) &&
              !(t = 5 !== e.tag) &&
              (t = "head" !== (t = e.type) && "body" !== t && !na(e.type, e.memoizedProps)),
            t && (t = ri))
          ) {
            if (si(e)) throw (fi(), Error(i(418)));
            for (; t; ) oi(e, t), (t = ca(t.nextSibling));
          }
          if ((ui(e), 13 === e.tag)) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(i(317));
            e: {
              for (e = e.nextSibling, t = 0; e; ) {
                if (8 === e.nodeType) {
                  var n = e.data;
                  if ("/$" === n) {
                    if (0 === t) {
                      ri = ca(e.nextSibling);
                      break e;
                    }
                    t--;
                  } else ("$" !== n && "$!" !== n && "$?" !== n) || t++;
                }
                e = e.nextSibling;
              }
              ri = null;
            }
          } else ri = ni ? ca(e.stateNode.nextSibling) : null;
          return !0;
        }
        function fi() {
          for (var e = ri; e; ) e = ca(e.nextSibling);
        }
        function pi() {
          (ri = ni = null), (ai = !1);
        }
        function mi(e) {
          null === ii ? (ii = [e]) : ii.push(e);
        }
        var hi = w.ReactCurrentBatchConfig;
        function vi(e, t, n) {
          if (null !== (e = n.ref) && "function" !== typeof e && "object" !== typeof e) {
            if (n._owner) {
              if ((n = n._owner)) {
                if (1 !== n.tag) throw Error(i(309));
                var r = n.stateNode;
              }
              if (!r) throw Error(i(147, e));
              var a = r,
                o = "" + e;
              return null !== t &&
                null !== t.ref &&
                "function" === typeof t.ref &&
                t.ref._stringRef === o
                ? t.ref
                : ((t = function (e) {
                    var t = a.refs;
                    null === e ? delete t[o] : (t[o] = e);
                  }),
                  (t._stringRef = o),
                  t);
            }
            if ("string" !== typeof e) throw Error(i(284));
            if (!n._owner) throw Error(i(290, e));
          }
          return e;
        }
        function gi(e, t) {
          throw (
            ((e = Object.prototype.toString.call(t)),
            Error(
              i(
                31,
                "[object Object]" === e ? "object with keys {" + Object.keys(t).join(", ") + "}" : e
              )
            ))
          );
        }
        function bi(e) {
          return (0, e._init)(e._payload);
        }
        function yi(e) {
          function t(t, n) {
            if (e) {
              var r = t.deletions;
              null === r ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
            }
          }
          function n(n, r) {
            if (!e) return null;
            for (; null !== r; ) t(n, r), (r = r.sibling);
            return null;
          }
          function r(e, t) {
            for (e = new Map(); null !== t; )
              null !== t.key ? e.set(t.key, t) : e.set(t.index, t), (t = t.sibling);
            return e;
          }
          function a(e, t) {
            return ((e = Lc(e, t)).index = 0), (e.sibling = null), e;
          }
          function o(t, n, r) {
            return (
              (t.index = r),
              e
                ? null !== (r = t.alternate)
                  ? (r = r.index) < n
                    ? ((t.flags |= 2), n)
                    : r
                  : ((t.flags |= 2), n)
                : ((t.flags |= 1048576), n)
            );
          }
          function l(t) {
            return e && null === t.alternate && (t.flags |= 2), t;
          }
          function s(e, t, n, r) {
            return null === t || 6 !== t.tag
              ? (((t = Rc(n, e.mode, r)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function c(e, t, n, r) {
            var i = n.type;
            return i === k
              ? d(e, t, n.props.children, r, n.key)
              : null !== t &&
                (t.elementType === i ||
                  ("object" === typeof i && null !== i && i.$$typeof === j && bi(i) === t.type))
              ? (((r = a(t, n.props)).ref = vi(e, t, n)), (r.return = e), r)
              : (((r = zc(n.type, n.key, n.props, null, e.mode, r)).ref = vi(e, t, n)),
                (r.return = e),
                r);
          }
          function u(e, t, n, r) {
            return null === t ||
              4 !== t.tag ||
              t.stateNode.containerInfo !== n.containerInfo ||
              t.stateNode.implementation !== n.implementation
              ? (((t = Fc(n, e.mode, r)).return = e), t)
              : (((t = a(t, n.children || [])).return = e), t);
          }
          function d(e, t, n, r, i) {
            return null === t || 7 !== t.tag
              ? (((t = Ac(n, e.mode, r, i)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function f(e, t, n) {
            if (("string" === typeof t && "" !== t) || "number" === typeof t)
              return ((t = Rc("" + t, e.mode, n)).return = e), t;
            if ("object" === typeof t && null !== t) {
              switch (t.$$typeof) {
                case x:
                  return (
                    ((n = zc(t.type, t.key, t.props, null, e.mode, n)).ref = vi(e, null, t)),
                    (n.return = e),
                    n
                  );
                case S:
                  return ((t = Fc(t, e.mode, n)).return = e), t;
                case j:
                  return f(e, (0, t._init)(t._payload), n);
              }
              if (te(t) || A(t)) return ((t = Ac(t, e.mode, n, null)).return = e), t;
              gi(e, t);
            }
            return null;
          }
          function p(e, t, n, r) {
            var a = null !== t ? t.key : null;
            if (("string" === typeof n && "" !== n) || "number" === typeof n)
              return null !== a ? null : s(e, t, "" + n, r);
            if ("object" === typeof n && null !== n) {
              switch (n.$$typeof) {
                case x:
                  return n.key === a ? c(e, t, n, r) : null;
                case S:
                  return n.key === a ? u(e, t, n, r) : null;
                case j:
                  return p(e, t, (a = n._init)(n._payload), r);
              }
              if (te(n) || A(n)) return null !== a ? null : d(e, t, n, r, null);
              gi(e, n);
            }
            return null;
          }
          function m(e, t, n, r, a) {
            if (("string" === typeof r && "" !== r) || "number" === typeof r)
              return s(t, (e = e.get(n) || null), "" + r, a);
            if ("object" === typeof r && null !== r) {
              switch (r.$$typeof) {
                case x:
                  return c(t, (e = e.get(null === r.key ? n : r.key) || null), r, a);
                case S:
                  return u(t, (e = e.get(null === r.key ? n : r.key) || null), r, a);
                case j:
                  return m(e, t, n, (0, r._init)(r._payload), a);
              }
              if (te(r) || A(r)) return d(t, (e = e.get(n) || null), r, a, null);
              gi(t, r);
            }
            return null;
          }
          function h(a, i, l, s) {
            for (
              var c = null, u = null, d = i, h = (i = 0), v = null;
              null !== d && h < l.length;
              h++
            ) {
              d.index > h ? ((v = d), (d = null)) : (v = d.sibling);
              var g = p(a, d, l[h], s);
              if (null === g) {
                null === d && (d = v);
                break;
              }
              e && d && null === g.alternate && t(a, d),
                (i = o(g, i, h)),
                null === u ? (c = g) : (u.sibling = g),
                (u = g),
                (d = v);
            }
            if (h === l.length) return n(a, d), ai && Ja(a, h), c;
            if (null === d) {
              for (; h < l.length; h++)
                null !== (d = f(a, l[h], s)) &&
                  ((i = o(d, i, h)), null === u ? (c = d) : (u.sibling = d), (u = d));
              return ai && Ja(a, h), c;
            }
            for (d = r(a, d); h < l.length; h++)
              null !== (v = m(d, a, h, l[h], s)) &&
                (e && null !== v.alternate && d.delete(null === v.key ? h : v.key),
                (i = o(v, i, h)),
                null === u ? (c = v) : (u.sibling = v),
                (u = v));
            return (
              e &&
                d.forEach(function (e) {
                  return t(a, e);
                }),
              ai && Ja(a, h),
              c
            );
          }
          function v(a, l, s, c) {
            var u = A(s);
            if ("function" !== typeof u) throw Error(i(150));
            if (null == (s = u.call(s))) throw Error(i(151));
            for (
              var d = (u = null), h = l, v = (l = 0), g = null, b = s.next();
              null !== h && !b.done;
              v++, b = s.next()
            ) {
              h.index > v ? ((g = h), (h = null)) : (g = h.sibling);
              var y = p(a, h, b.value, c);
              if (null === y) {
                null === h && (h = g);
                break;
              }
              e && h && null === y.alternate && t(a, h),
                (l = o(y, l, v)),
                null === d ? (u = y) : (d.sibling = y),
                (d = y),
                (h = g);
            }
            if (b.done) return n(a, h), ai && Ja(a, v), u;
            if (null === h) {
              for (; !b.done; v++, b = s.next())
                null !== (b = f(a, b.value, c)) &&
                  ((l = o(b, l, v)), null === d ? (u = b) : (d.sibling = b), (d = b));
              return ai && Ja(a, v), u;
            }
            for (h = r(a, h); !b.done; v++, b = s.next())
              null !== (b = m(h, a, v, b.value, c)) &&
                (e && null !== b.alternate && h.delete(null === b.key ? v : b.key),
                (l = o(b, l, v)),
                null === d ? (u = b) : (d.sibling = b),
                (d = b));
            return (
              e &&
                h.forEach(function (e) {
                  return t(a, e);
                }),
              ai && Ja(a, v),
              u
            );
          }
          return function e(r, i, o, s) {
            if (
              ("object" === typeof o &&
                null !== o &&
                o.type === k &&
                null === o.key &&
                (o = o.props.children),
              "object" === typeof o && null !== o)
            ) {
              switch (o.$$typeof) {
                case x:
                  e: {
                    for (var c = o.key, u = i; null !== u; ) {
                      if (u.key === c) {
                        if ((c = o.type) === k) {
                          if (7 === u.tag) {
                            n(r, u.sibling), ((i = a(u, o.props.children)).return = r), (r = i);
                            break e;
                          }
                        } else if (
                          u.elementType === c ||
                          ("object" === typeof c &&
                            null !== c &&
                            c.$$typeof === j &&
                            bi(c) === u.type)
                        ) {
                          n(r, u.sibling),
                            ((i = a(u, o.props)).ref = vi(r, u, o)),
                            (i.return = r),
                            (r = i);
                          break e;
                        }
                        n(r, u);
                        break;
                      }
                      t(r, u), (u = u.sibling);
                    }
                    o.type === k
                      ? (((i = Ac(o.props.children, r.mode, s, o.key)).return = r), (r = i))
                      : (((s = zc(o.type, o.key, o.props, null, r.mode, s)).ref = vi(r, i, o)),
                        (s.return = r),
                        (r = s));
                  }
                  return l(r);
                case S:
                  e: {
                    for (u = o.key; null !== i; ) {
                      if (i.key === u) {
                        if (
                          4 === i.tag &&
                          i.stateNode.containerInfo === o.containerInfo &&
                          i.stateNode.implementation === o.implementation
                        ) {
                          n(r, i.sibling), ((i = a(i, o.children || [])).return = r), (r = i);
                          break e;
                        }
                        n(r, i);
                        break;
                      }
                      t(r, i), (i = i.sibling);
                    }
                    ((i = Fc(o, r.mode, s)).return = r), (r = i);
                  }
                  return l(r);
                case j:
                  return e(r, i, (u = o._init)(o._payload), s);
              }
              if (te(o)) return h(r, i, o, s);
              if (A(o)) return v(r, i, o, s);
              gi(r, o);
            }
            return ("string" === typeof o && "" !== o) || "number" === typeof o
              ? ((o = "" + o),
                null !== i && 6 === i.tag
                  ? (n(r, i.sibling), ((i = a(i, o)).return = r), (r = i))
                  : (n(r, i), ((i = Rc(o, r.mode, s)).return = r), (r = i)),
                l(r))
              : n(r, i);
          };
        }
        var wi = yi(!0),
          xi = yi(!1),
          Si = Ea(null),
          ki = null,
          Ei = null,
          Ci = null;
        function Ti() {
          Ci = Ei = ki = null;
        }
        function Pi(e) {
          var t = Si.current;
          Ca(Si), (e._currentValue = t);
        }
        function Ni(e, t, n) {
          for (; null !== e; ) {
            var r = e.alternate;
            if (
              ((e.childLanes & t) !== t
                ? ((e.childLanes |= t), null !== r && (r.childLanes |= t))
                : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t),
              e === n)
            )
              break;
            e = e.return;
          }
        }
        function Oi(e, t) {
          (ki = e),
            (Ci = Ei = null),
            null !== (e = e.dependencies) &&
              null !== e.firstContext &&
              (0 !== (e.lanes & t) && (yl = !0), (e.firstContext = null));
        }
        function Mi(e) {
          var t = e._currentValue;
          if (Ci !== e)
            if (((e = { context: e, memoizedValue: t, next: null }), null === Ei)) {
              if (null === ki) throw Error(i(308));
              (Ei = e), (ki.dependencies = { lanes: 0, firstContext: e });
            } else Ei = Ei.next = e;
          return t;
        }
        var _i = null;
        function ji(e) {
          null === _i ? (_i = [e]) : _i.push(e);
        }
        function Li(e, t, n, r) {
          var a = t.interleaved;
          return (
            null === a ? ((n.next = n), ji(t)) : ((n.next = a.next), (a.next = n)),
            (t.interleaved = n),
            zi(e, r)
          );
        }
        function zi(e, t) {
          e.lanes |= t;
          var n = e.alternate;
          for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
            (e.childLanes |= t),
              null !== (n = e.alternate) && (n.childLanes |= t),
              (n = e),
              (e = e.return);
          return 3 === n.tag ? n.stateNode : null;
        }
        var Ai = !1;
        function Ii(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, interleaved: null, lanes: 0 },
            effects: null,
          };
        }
        function Ri(e, t) {
          (e = e.updateQueue),
            t.updateQueue === e &&
              (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
              });
        }
        function Fi(e, t) {
          return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
        }
        function Di(e, t, n) {
          var r = e.updateQueue;
          if (null === r) return null;
          if (((r = r.shared), 0 !== (2 & Ns))) {
            var a = r.pending;
            return (
              null === a ? (t.next = t) : ((t.next = a.next), (a.next = t)),
              (r.pending = t),
              zi(e, n)
            );
          }
          return (
            null === (a = r.interleaved)
              ? ((t.next = t), ji(r))
              : ((t.next = a.next), (a.next = t)),
            (r.interleaved = t),
            zi(e, n)
          );
        }
        function Bi(e, t, n) {
          if (null !== (t = t.updateQueue) && ((t = t.shared), 0 !== (4194240 & n))) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), bt(e, n);
          }
        }
        function Hi(e, t) {
          var n = e.updateQueue,
            r = e.alternate;
          if (null !== r && n === (r = r.updateQueue)) {
            var a = null,
              i = null;
            if (null !== (n = n.firstBaseUpdate)) {
              do {
                var o = {
                  eventTime: n.eventTime,
                  lane: n.lane,
                  tag: n.tag,
                  payload: n.payload,
                  callback: n.callback,
                  next: null,
                };
                null === i ? (a = i = o) : (i = i.next = o), (n = n.next);
              } while (null !== n);
              null === i ? (a = i = t) : (i = i.next = t);
            } else a = i = t;
            return (
              (n = {
                baseState: r.baseState,
                firstBaseUpdate: a,
                lastBaseUpdate: i,
                shared: r.shared,
                effects: r.effects,
              }),
              void (e.updateQueue = n)
            );
          }
          null === (e = n.lastBaseUpdate) ? (n.firstBaseUpdate = t) : (e.next = t),
            (n.lastBaseUpdate = t);
        }
        function Vi(e, t, n, r) {
          var a = e.updateQueue;
          Ai = !1;
          var i = a.firstBaseUpdate,
            o = a.lastBaseUpdate,
            l = a.shared.pending;
          if (null !== l) {
            a.shared.pending = null;
            var s = l,
              c = s.next;
            (s.next = null), null === o ? (i = c) : (o.next = c), (o = s);
            var u = e.alternate;
            null !== u &&
              (l = (u = u.updateQueue).lastBaseUpdate) !== o &&
              (null === l ? (u.firstBaseUpdate = c) : (l.next = c), (u.lastBaseUpdate = s));
          }
          if (null !== i) {
            var d = a.baseState;
            for (o = 0, u = c = s = null, l = i; ; ) {
              var f = l.lane,
                p = l.eventTime;
              if ((r & f) === f) {
                null !== u &&
                  (u = u.next =
                    {
                      eventTime: p,
                      lane: 0,
                      tag: l.tag,
                      payload: l.payload,
                      callback: l.callback,
                      next: null,
                    });
                e: {
                  var m = e,
                    h = l;
                  switch (((f = t), (p = n), h.tag)) {
                    case 1:
                      if ("function" === typeof (m = h.payload)) {
                        d = m.call(p, d, f);
                        break e;
                      }
                      d = m;
                      break e;
                    case 3:
                      m.flags = (-65537 & m.flags) | 128;
                    case 0:
                      if (
                        null ===
                          (f = "function" === typeof (m = h.payload) ? m.call(p, d, f) : m) ||
                        void 0 === f
                      )
                        break e;
                      d = R({}, d, f);
                      break e;
                    case 2:
                      Ai = !0;
                  }
                }
                null !== l.callback &&
                  0 !== l.lane &&
                  ((e.flags |= 64), null === (f = a.effects) ? (a.effects = [l]) : f.push(l));
              } else
                (p = {
                  eventTime: p,
                  lane: f,
                  tag: l.tag,
                  payload: l.payload,
                  callback: l.callback,
                  next: null,
                }),
                  null === u ? ((c = u = p), (s = d)) : (u = u.next = p),
                  (o |= f);
              if (null === (l = l.next)) {
                if (null === (l = a.shared.pending)) break;
                (l = (f = l).next),
                  (f.next = null),
                  (a.lastBaseUpdate = f),
                  (a.shared.pending = null);
              }
            }
            if (
              (null === u && (s = d),
              (a.baseState = s),
              (a.firstBaseUpdate = c),
              (a.lastBaseUpdate = u),
              null !== (t = a.shared.interleaved))
            ) {
              a = t;
              do {
                (o |= a.lane), (a = a.next);
              } while (a !== t);
            } else null === i && (a.shared.lanes = 0);
            (Is |= o), (e.lanes = o), (e.memoizedState = d);
          }
        }
        function Wi(e, t, n) {
          if (((e = t.effects), (t.effects = null), null !== e))
            for (t = 0; t < e.length; t++) {
              var r = e[t],
                a = r.callback;
              if (null !== a) {
                if (((r.callback = null), (r = n), "function" !== typeof a)) throw Error(i(191, a));
                a.call(r);
              }
            }
        }
        var Gi = {},
          Ui = Ea(Gi),
          $i = Ea(Gi),
          Yi = Ea(Gi);
        function qi(e) {
          if (e === Gi) throw Error(i(174));
          return e;
        }
        function Qi(e, t) {
          switch ((Ta(Yi, t), Ta($i, e), Ta(Ui, Gi), (e = t.nodeType))) {
            case 9:
            case 11:
              t = (t = t.documentElement) ? t.namespaceURI : se(null, "");
              break;
            default:
              t = se((t = (e = 8 === e ? t.parentNode : t).namespaceURI || null), (e = e.tagName));
          }
          Ca(Ui), Ta(Ui, t);
        }
        function Xi() {
          Ca(Ui), Ca($i), Ca(Yi);
        }
        function Ki(e) {
          qi(Yi.current);
          var t = qi(Ui.current),
            n = se(t, e.type);
          t !== n && (Ta($i, e), Ta(Ui, n));
        }
        function Ji(e) {
          $i.current === e && (Ca(Ui), Ca($i));
        }
        var Zi = Ea(0);
        function eo(e) {
          for (var t = e; null !== t; ) {
            if (13 === t.tag) {
              var n = t.memoizedState;
              if (null !== n && (null === (n = n.dehydrated) || "$?" === n.data || "$!" === n.data))
                return t;
            } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
              if (0 !== (128 & t.flags)) return t;
            } else if (null !== t.child) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break;
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === e) return null;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
          return null;
        }
        var to = [];
        function no() {
          for (var e = 0; e < to.length; e++) to[e]._workInProgressVersionPrimary = null;
          to.length = 0;
        }
        var ro = w.ReactCurrentDispatcher,
          ao = w.ReactCurrentBatchConfig,
          io = 0,
          oo = null,
          lo = null,
          so = null,
          co = !1,
          uo = !1,
          fo = 0,
          po = 0;
        function mo() {
          throw Error(i(321));
        }
        function ho(e, t) {
          if (null === t) return !1;
          for (var n = 0; n < t.length && n < e.length; n++) if (!lr(e[n], t[n])) return !1;
          return !0;
        }
        function vo(e, t, n, r, a, o) {
          if (
            ((io = o),
            (oo = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (ro.current = null === e || null === e.memoizedState ? Zo : el),
            (e = n(r, a)),
            uo)
          ) {
            o = 0;
            do {
              if (((uo = !1), (fo = 0), 25 <= o)) throw Error(i(301));
              (o += 1), (so = lo = null), (t.updateQueue = null), (ro.current = tl), (e = n(r, a));
            } while (uo);
          }
          if (
            ((ro.current = Jo),
            (t = null !== lo && null !== lo.next),
            (io = 0),
            (so = lo = oo = null),
            (co = !1),
            t)
          )
            throw Error(i(300));
          return e;
        }
        function go() {
          var e = 0 !== fo;
          return (fo = 0), e;
        }
        function bo() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return null === so ? (oo.memoizedState = so = e) : (so = so.next = e), so;
        }
        function yo() {
          if (null === lo) {
            var e = oo.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = lo.next;
          var t = null === so ? oo.memoizedState : so.next;
          if (null !== t) (so = t), (lo = e);
          else {
            if (null === e) throw Error(i(310));
            (e = {
              memoizedState: (lo = e).memoizedState,
              baseState: lo.baseState,
              baseQueue: lo.baseQueue,
              queue: lo.queue,
              next: null,
            }),
              null === so ? (oo.memoizedState = so = e) : (so = so.next = e);
          }
          return so;
        }
        function wo(e, t) {
          return "function" === typeof t ? t(e) : t;
        }
        function xo(e) {
          var t = yo(),
            n = t.queue;
          if (null === n) throw Error(i(311));
          n.lastRenderedReducer = e;
          var r = lo,
            a = r.baseQueue,
            o = n.pending;
          if (null !== o) {
            if (null !== a) {
              var l = a.next;
              (a.next = o.next), (o.next = l);
            }
            (r.baseQueue = a = o), (n.pending = null);
          }
          if (null !== a) {
            (o = a.next), (r = r.baseState);
            var s = (l = null),
              c = null,
              u = o;
            do {
              var d = u.lane;
              if ((io & d) === d)
                null !== c &&
                  (c = c.next =
                    {
                      lane: 0,
                      action: u.action,
                      hasEagerState: u.hasEagerState,
                      eagerState: u.eagerState,
                      next: null,
                    }),
                  (r = u.hasEagerState ? u.eagerState : e(r, u.action));
              else {
                var f = {
                  lane: d,
                  action: u.action,
                  hasEagerState: u.hasEagerState,
                  eagerState: u.eagerState,
                  next: null,
                };
                null === c ? ((s = c = f), (l = r)) : (c = c.next = f), (oo.lanes |= d), (Is |= d);
              }
              u = u.next;
            } while (null !== u && u !== o);
            null === c ? (l = r) : (c.next = s),
              lr(r, t.memoizedState) || (yl = !0),
              (t.memoizedState = r),
              (t.baseState = l),
              (t.baseQueue = c),
              (n.lastRenderedState = r);
          }
          if (null !== (e = n.interleaved)) {
            a = e;
            do {
              (o = a.lane), (oo.lanes |= o), (Is |= o), (a = a.next);
            } while (a !== e);
          } else null === a && (n.lanes = 0);
          return [t.memoizedState, n.dispatch];
        }
        function So(e) {
          var t = yo(),
            n = t.queue;
          if (null === n) throw Error(i(311));
          n.lastRenderedReducer = e;
          var r = n.dispatch,
            a = n.pending,
            o = t.memoizedState;
          if (null !== a) {
            n.pending = null;
            var l = (a = a.next);
            do {
              (o = e(o, l.action)), (l = l.next);
            } while (l !== a);
            lr(o, t.memoizedState) || (yl = !0),
              (t.memoizedState = o),
              null === t.baseQueue && (t.baseState = o),
              (n.lastRenderedState = o);
          }
          return [o, r];
        }
        function ko() {}
        function Eo(e, t) {
          var n = oo,
            r = yo(),
            a = t(),
            o = !lr(r.memoizedState, a);
          if (
            (o && ((r.memoizedState = a), (yl = !0)),
            (r = r.queue),
            Io(Po.bind(null, n, r, e), [e]),
            r.getSnapshot !== t || o || (null !== so && 1 & so.memoizedState.tag))
          ) {
            if (((n.flags |= 2048), _o(9, To.bind(null, n, r, a, t), void 0, null), null === Os))
              throw Error(i(349));
            0 !== (30 & io) || Co(n, t, a);
          }
          return a;
        }
        function Co(e, t, n) {
          (e.flags |= 16384),
            (e = { getSnapshot: t, value: n }),
            null === (t = oo.updateQueue)
              ? ((t = { lastEffect: null, stores: null }), (oo.updateQueue = t), (t.stores = [e]))
              : null === (n = t.stores)
              ? (t.stores = [e])
              : n.push(e);
        }
        function To(e, t, n, r) {
          (t.value = n), (t.getSnapshot = r), No(t) && Oo(e);
        }
        function Po(e, t, n) {
          return n(function () {
            No(t) && Oo(e);
          });
        }
        function No(e) {
          var t = e.getSnapshot;
          e = e.value;
          try {
            var n = t();
            return !lr(e, n);
          } catch (r) {
            return !0;
          }
        }
        function Oo(e) {
          var t = zi(e, 1);
          null !== t && nc(t, e, 1, -1);
        }
        function Mo(e) {
          var t = bo();
          return (
            "function" === typeof e && (e = e()),
            (t.memoizedState = t.baseState = e),
            (e = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: wo,
              lastRenderedState: e,
            }),
            (t.queue = e),
            (e = e.dispatch = qo.bind(null, oo, e)),
            [t.memoizedState, e]
          );
        }
        function _o(e, t, n, r) {
          return (
            (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
            null === (t = oo.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (oo.updateQueue = t),
                (t.lastEffect = e.next = e))
              : null === (n = t.lastEffect)
              ? (t.lastEffect = e.next = e)
              : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
            e
          );
        }
        function jo() {
          return yo().memoizedState;
        }
        function Lo(e, t, n, r) {
          var a = bo();
          (oo.flags |= e), (a.memoizedState = _o(1 | t, n, void 0, void 0 === r ? null : r));
        }
        function zo(e, t, n, r) {
          var a = yo();
          r = void 0 === r ? null : r;
          var i = void 0;
          if (null !== lo) {
            var o = lo.memoizedState;
            if (((i = o.destroy), null !== r && ho(r, o.deps)))
              return void (a.memoizedState = _o(t, n, i, r));
          }
          (oo.flags |= e), (a.memoizedState = _o(1 | t, n, i, r));
        }
        function Ao(e, t) {
          return Lo(8390656, 8, e, t);
        }
        function Io(e, t) {
          return zo(2048, 8, e, t);
        }
        function Ro(e, t) {
          return zo(4, 2, e, t);
        }
        function Fo(e, t) {
          return zo(4, 4, e, t);
        }
        function Do(e, t) {
          return "function" === typeof t
            ? ((e = e()),
              t(e),
              function () {
                t(null);
              })
            : null !== t && void 0 !== t
            ? ((e = e()),
              (t.current = e),
              function () {
                t.current = null;
              })
            : void 0;
        }
        function Bo(e, t, n) {
          return (
            (n = null !== n && void 0 !== n ? n.concat([e]) : null),
            zo(4, 4, Do.bind(null, t, e), n)
          );
        }
        function Ho() {}
        function Vo(e, t) {
          var n = yo();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && ho(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
        }
        function Wo(e, t) {
          var n = yo();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && ho(t, r[1])
            ? r[0]
            : ((e = e()), (n.memoizedState = [e, t]), e);
        }
        function Go(e, t, n) {
          return 0 === (21 & io)
            ? (e.baseState && ((e.baseState = !1), (yl = !0)), (e.memoizedState = n))
            : (lr(n, t) || ((n = ht()), (oo.lanes |= n), (Is |= n), (e.baseState = !0)), t);
        }
        function Uo(e, t) {
          var n = yt;
          (yt = 0 !== n && 4 > n ? n : 4), e(!0);
          var r = ao.transition;
          ao.transition = {};
          try {
            e(!1), t();
          } finally {
            (yt = n), (ao.transition = r);
          }
        }
        function $o() {
          return yo().memoizedState;
        }
        function Yo(e, t, n) {
          var r = tc(e);
          if (
            ((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), Qo(e))
          )
            Xo(t, n);
          else if (null !== (n = Li(e, t, n, r))) {
            nc(n, e, r, ec()), Ko(n, t, r);
          }
        }
        function qo(e, t, n) {
          var r = tc(e),
            a = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
          if (Qo(e)) Xo(t, a);
          else {
            var i = e.alternate;
            if (
              0 === e.lanes &&
              (null === i || 0 === i.lanes) &&
              null !== (i = t.lastRenderedReducer)
            )
              try {
                var o = t.lastRenderedState,
                  l = i(o, n);
                if (((a.hasEagerState = !0), (a.eagerState = l), lr(l, o))) {
                  var s = t.interleaved;
                  return (
                    null === s ? ((a.next = a), ji(t)) : ((a.next = s.next), (s.next = a)),
                    void (t.interleaved = a)
                  );
                }
              } catch (c) {}
            null !== (n = Li(e, t, a, r)) && (nc(n, e, r, (a = ec())), Ko(n, t, r));
          }
        }
        function Qo(e) {
          var t = e.alternate;
          return e === oo || (null !== t && t === oo);
        }
        function Xo(e, t) {
          uo = co = !0;
          var n = e.pending;
          null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t);
        }
        function Ko(e, t, n) {
          if (0 !== (4194240 & n)) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), bt(e, n);
          }
        }
        var Jo = {
            readContext: Mi,
            useCallback: mo,
            useContext: mo,
            useEffect: mo,
            useImperativeHandle: mo,
            useInsertionEffect: mo,
            useLayoutEffect: mo,
            useMemo: mo,
            useReducer: mo,
            useRef: mo,
            useState: mo,
            useDebugValue: mo,
            useDeferredValue: mo,
            useTransition: mo,
            useMutableSource: mo,
            useSyncExternalStore: mo,
            useId: mo,
            unstable_isNewReconciler: !1,
          },
          Zo = {
            readContext: Mi,
            useCallback: function (e, t) {
              return (bo().memoizedState = [e, void 0 === t ? null : t]), e;
            },
            useContext: Mi,
            useEffect: Ao,
            useImperativeHandle: function (e, t, n) {
              return (
                (n = null !== n && void 0 !== n ? n.concat([e]) : null),
                Lo(4194308, 4, Do.bind(null, t, e), n)
              );
            },
            useLayoutEffect: function (e, t) {
              return Lo(4194308, 4, e, t);
            },
            useInsertionEffect: function (e, t) {
              return Lo(4, 2, e, t);
            },
            useMemo: function (e, t) {
              var n = bo();
              return (t = void 0 === t ? null : t), (e = e()), (n.memoizedState = [e, t]), e;
            },
            useReducer: function (e, t, n) {
              var r = bo();
              return (
                (t = void 0 !== n ? n(t) : t),
                (r.memoizedState = r.baseState = t),
                (e = {
                  pending: null,
                  interleaved: null,
                  lanes: 0,
                  dispatch: null,
                  lastRenderedReducer: e,
                  lastRenderedState: t,
                }),
                (r.queue = e),
                (e = e.dispatch = Yo.bind(null, oo, e)),
                [r.memoizedState, e]
              );
            },
            useRef: function (e) {
              return (e = { current: e }), (bo().memoizedState = e);
            },
            useState: Mo,
            useDebugValue: Ho,
            useDeferredValue: function (e) {
              return (bo().memoizedState = e);
            },
            useTransition: function () {
              var e = Mo(!1),
                t = e[0];
              return (e = Uo.bind(null, e[1])), (bo().memoizedState = e), [t, e];
            },
            useMutableSource: function () {},
            useSyncExternalStore: function (e, t, n) {
              var r = oo,
                a = bo();
              if (ai) {
                if (void 0 === n) throw Error(i(407));
                n = n();
              } else {
                if (((n = t()), null === Os)) throw Error(i(349));
                0 !== (30 & io) || Co(r, t, n);
              }
              a.memoizedState = n;
              var o = { value: n, getSnapshot: t };
              return (
                (a.queue = o),
                Ao(Po.bind(null, r, o, e), [e]),
                (r.flags |= 2048),
                _o(9, To.bind(null, r, o, n, t), void 0, null),
                n
              );
            },
            useId: function () {
              var e = bo(),
                t = Os.identifierPrefix;
              if (ai) {
                var n = Ka;
                (t = ":" + t + "R" + (n = (Xa & ~(1 << (32 - ot(Xa) - 1))).toString(32) + n)),
                  0 < (n = fo++) && (t += "H" + n.toString(32)),
                  (t += ":");
              } else t = ":" + t + "r" + (n = po++).toString(32) + ":";
              return (e.memoizedState = t);
            },
            unstable_isNewReconciler: !1,
          },
          el = {
            readContext: Mi,
            useCallback: Vo,
            useContext: Mi,
            useEffect: Io,
            useImperativeHandle: Bo,
            useInsertionEffect: Ro,
            useLayoutEffect: Fo,
            useMemo: Wo,
            useReducer: xo,
            useRef: jo,
            useState: function () {
              return xo(wo);
            },
            useDebugValue: Ho,
            useDeferredValue: function (e) {
              return Go(yo(), lo.memoizedState, e);
            },
            useTransition: function () {
              return [xo(wo)[0], yo().memoizedState];
            },
            useMutableSource: ko,
            useSyncExternalStore: Eo,
            useId: $o,
            unstable_isNewReconciler: !1,
          },
          tl = {
            readContext: Mi,
            useCallback: Vo,
            useContext: Mi,
            useEffect: Io,
            useImperativeHandle: Bo,
            useInsertionEffect: Ro,
            useLayoutEffect: Fo,
            useMemo: Wo,
            useReducer: So,
            useRef: jo,
            useState: function () {
              return So(wo);
            },
            useDebugValue: Ho,
            useDeferredValue: function (e) {
              var t = yo();
              return null === lo ? (t.memoizedState = e) : Go(t, lo.memoizedState, e);
            },
            useTransition: function () {
              return [So(wo)[0], yo().memoizedState];
            },
            useMutableSource: ko,
            useSyncExternalStore: Eo,
            useId: $o,
            unstable_isNewReconciler: !1,
          };
        function nl(e, t) {
          if (e && e.defaultProps) {
            for (var n in ((t = R({}, t)), (e = e.defaultProps))) void 0 === t[n] && (t[n] = e[n]);
            return t;
          }
          return t;
        }
        function rl(e, t, n, r) {
          (n = null === (n = n(r, (t = e.memoizedState))) || void 0 === n ? t : R({}, t, n)),
            (e.memoizedState = n),
            0 === e.lanes && (e.updateQueue.baseState = n);
        }
        var al = {
          isMounted: function (e) {
            return !!(e = e._reactInternals) && Ve(e) === e;
          },
          enqueueSetState: function (e, t, n) {
            e = e._reactInternals;
            var r = ec(),
              a = tc(e),
              i = Fi(r, a);
            (i.payload = t),
              void 0 !== n && null !== n && (i.callback = n),
              null !== (t = Di(e, i, a)) && (nc(t, e, a, r), Bi(t, e, a));
          },
          enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals;
            var r = ec(),
              a = tc(e),
              i = Fi(r, a);
            (i.tag = 1),
              (i.payload = t),
              void 0 !== n && null !== n && (i.callback = n),
              null !== (t = Di(e, i, a)) && (nc(t, e, a, r), Bi(t, e, a));
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var n = ec(),
              r = tc(e),
              a = Fi(n, r);
            (a.tag = 2),
              void 0 !== t && null !== t && (a.callback = t),
              null !== (t = Di(e, a, r)) && (nc(t, e, r, n), Bi(t, e, r));
          },
        };
        function il(e, t, n, r, a, i, o) {
          return "function" === typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(r, i, o)
            : !t.prototype || !t.prototype.isPureReactComponent || !sr(n, r) || !sr(a, i);
        }
        function ol(e, t, n) {
          var r = !1,
            a = Pa,
            i = t.contextType;
          return (
            "object" === typeof i && null !== i
              ? (i = Mi(i))
              : ((a = ja(t) ? Ma : Na.current),
                (i = (r = null !== (r = t.contextTypes) && void 0 !== r) ? _a(e, a) : Pa)),
            (t = new t(n, i)),
            (e.memoizedState = null !== t.state && void 0 !== t.state ? t.state : null),
            (t.updater = al),
            (e.stateNode = t),
            (t._reactInternals = e),
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = a),
              (e.__reactInternalMemoizedMaskedChildContext = i)),
            t
          );
        }
        function ll(e, t, n, r) {
          (e = t.state),
            "function" === typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, r),
            "function" === typeof t.UNSAFE_componentWillReceiveProps &&
              t.UNSAFE_componentWillReceiveProps(n, r),
            t.state !== e && al.enqueueReplaceState(t, t.state, null);
        }
        function sl(e, t, n, r) {
          var a = e.stateNode;
          (a.props = n), (a.state = e.memoizedState), (a.refs = {}), Ii(e);
          var i = t.contextType;
          "object" === typeof i && null !== i
            ? (a.context = Mi(i))
            : ((i = ja(t) ? Ma : Na.current), (a.context = _a(e, i))),
            (a.state = e.memoizedState),
            "function" === typeof (i = t.getDerivedStateFromProps) &&
              (rl(e, t, i, n), (a.state = e.memoizedState)),
            "function" === typeof t.getDerivedStateFromProps ||
              "function" === typeof a.getSnapshotBeforeUpdate ||
              ("function" !== typeof a.UNSAFE_componentWillMount &&
                "function" !== typeof a.componentWillMount) ||
              ((t = a.state),
              "function" === typeof a.componentWillMount && a.componentWillMount(),
              "function" === typeof a.UNSAFE_componentWillMount && a.UNSAFE_componentWillMount(),
              t !== a.state && al.enqueueReplaceState(a, a.state, null),
              Vi(e, n, a, r),
              (a.state = e.memoizedState)),
            "function" === typeof a.componentDidMount && (e.flags |= 4194308);
        }
        function cl(e, t) {
          try {
            var n = "",
              r = t;
            do {
              (n += H(r)), (r = r.return);
            } while (r);
            var a = n;
          } catch (i) {
            a = "\nError generating stack: " + i.message + "\n" + i.stack;
          }
          return { value: e, source: t, stack: a, digest: null };
        }
        function ul(e, t, n) {
          return {
            value: e,
            source: null,
            stack: null != n ? n : null,
            digest: null != t ? t : null,
          };
        }
        function dl(e, t) {
          try {
            console.error(t.value);
          } catch (n) {
            setTimeout(function () {
              throw n;
            });
          }
        }
        var fl = "function" === typeof WeakMap ? WeakMap : Map;
        function pl(e, t, n) {
          ((n = Fi(-1, n)).tag = 3), (n.payload = { element: null });
          var r = t.value;
          return (
            (n.callback = function () {
              Gs || ((Gs = !0), (Us = r)), dl(0, t);
            }),
            n
          );
        }
        function ml(e, t, n) {
          (n = Fi(-1, n)).tag = 3;
          var r = e.type.getDerivedStateFromError;
          if ("function" === typeof r) {
            var a = t.value;
            (n.payload = function () {
              return r(a);
            }),
              (n.callback = function () {
                dl(0, t);
              });
          }
          var i = e.stateNode;
          return (
            null !== i &&
              "function" === typeof i.componentDidCatch &&
              (n.callback = function () {
                dl(0, t),
                  "function" !== typeof r && (null === $s ? ($s = new Set([this])) : $s.add(this));
                var e = t.stack;
                this.componentDidCatch(t.value, { componentStack: null !== e ? e : "" });
              }),
            n
          );
        }
        function hl(e, t, n) {
          var r = e.pingCache;
          if (null === r) {
            r = e.pingCache = new fl();
            var a = new Set();
            r.set(t, a);
          } else void 0 === (a = r.get(t)) && ((a = new Set()), r.set(t, a));
          a.has(n) || (a.add(n), (e = Cc.bind(null, e, t, n)), t.then(e, e));
        }
        function vl(e) {
          do {
            var t;
            if (
              ((t = 13 === e.tag) && (t = null === (t = e.memoizedState) || null !== t.dehydrated),
              t)
            )
              return e;
            e = e.return;
          } while (null !== e);
          return null;
        }
        function gl(e, t, n, r, a) {
          return 0 === (1 & e.mode)
            ? (e === t
                ? (e.flags |= 65536)
                : ((e.flags |= 128),
                  (n.flags |= 131072),
                  (n.flags &= -52805),
                  1 === n.tag &&
                    (null === n.alternate
                      ? (n.tag = 17)
                      : (((t = Fi(-1, 1)).tag = 2), Di(n, t, 1))),
                  (n.lanes |= 1)),
              e)
            : ((e.flags |= 65536), (e.lanes = a), e);
        }
        var bl = w.ReactCurrentOwner,
          yl = !1;
        function wl(e, t, n, r) {
          t.child = null === e ? xi(t, null, n, r) : wi(t, e.child, n, r);
        }
        function xl(e, t, n, r, a) {
          n = n.render;
          var i = t.ref;
          return (
            Oi(t, a),
            (r = vo(e, t, n, r, i, a)),
            (n = go()),
            null === e || yl
              ? (ai && n && ei(t), (t.flags |= 1), wl(e, t, r, a), t.child)
              : ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~a), Gl(e, t, a))
          );
        }
        function Sl(e, t, n, r, a) {
          if (null === e) {
            var i = n.type;
            return "function" !== typeof i ||
              jc(i) ||
              void 0 !== i.defaultProps ||
              null !== n.compare ||
              void 0 !== n.defaultProps
              ? (((e = zc(n.type, null, r, t, t.mode, a)).ref = t.ref),
                (e.return = t),
                (t.child = e))
              : ((t.tag = 15), (t.type = i), kl(e, t, i, r, a));
          }
          if (((i = e.child), 0 === (e.lanes & a))) {
            var o = i.memoizedProps;
            if ((n = null !== (n = n.compare) ? n : sr)(o, r) && e.ref === t.ref)
              return Gl(e, t, a);
          }
          return (t.flags |= 1), ((e = Lc(i, r)).ref = t.ref), (e.return = t), (t.child = e);
        }
        function kl(e, t, n, r, a) {
          if (null !== e) {
            var i = e.memoizedProps;
            if (sr(i, r) && e.ref === t.ref) {
              if (((yl = !1), (t.pendingProps = r = i), 0 === (e.lanes & a)))
                return (t.lanes = e.lanes), Gl(e, t, a);
              0 !== (131072 & e.flags) && (yl = !0);
            }
          }
          return Tl(e, t, n, r, a);
        }
        function El(e, t, n) {
          var r = t.pendingProps,
            a = r.children,
            i = null !== e ? e.memoizedState : null;
          if ("hidden" === r.mode)
            if (0 === (1 & t.mode))
              (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
                Ta(Ls, js),
                (js |= n);
            else {
              if (0 === (1073741824 & n))
                return (
                  (e = null !== i ? i.baseLanes | n : n),
                  (t.lanes = t.childLanes = 1073741824),
                  (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
                  (t.updateQueue = null),
                  Ta(Ls, js),
                  (js |= e),
                  null
                );
              (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
                (r = null !== i ? i.baseLanes : n),
                Ta(Ls, js),
                (js |= r);
            }
          else
            null !== i ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
              Ta(Ls, js),
              (js |= r);
          return wl(e, t, a, n), t.child;
        }
        function Cl(e, t) {
          var n = t.ref;
          ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
            ((t.flags |= 512), (t.flags |= 2097152));
        }
        function Tl(e, t, n, r, a) {
          var i = ja(n) ? Ma : Na.current;
          return (
            (i = _a(t, i)),
            Oi(t, a),
            (n = vo(e, t, n, r, i, a)),
            (r = go()),
            null === e || yl
              ? (ai && r && ei(t), (t.flags |= 1), wl(e, t, n, a), t.child)
              : ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~a), Gl(e, t, a))
          );
        }
        function Pl(e, t, n, r, a) {
          if (ja(n)) {
            var i = !0;
            Ia(t);
          } else i = !1;
          if ((Oi(t, a), null === t.stateNode)) Wl(e, t), ol(t, n, r), sl(t, n, r, a), (r = !0);
          else if (null === e) {
            var o = t.stateNode,
              l = t.memoizedProps;
            o.props = l;
            var s = o.context,
              c = n.contextType;
            "object" === typeof c && null !== c
              ? (c = Mi(c))
              : (c = _a(t, (c = ja(n) ? Ma : Na.current)));
            var u = n.getDerivedStateFromProps,
              d = "function" === typeof u || "function" === typeof o.getSnapshotBeforeUpdate;
            d ||
              ("function" !== typeof o.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof o.componentWillReceiveProps) ||
              ((l !== r || s !== c) && ll(t, o, r, c)),
              (Ai = !1);
            var f = t.memoizedState;
            (o.state = f),
              Vi(t, r, o, a),
              (s = t.memoizedState),
              l !== r || f !== s || Oa.current || Ai
                ? ("function" === typeof u && (rl(t, n, u, r), (s = t.memoizedState)),
                  (l = Ai || il(t, n, l, r, f, s, c))
                    ? (d ||
                        ("function" !== typeof o.UNSAFE_componentWillMount &&
                          "function" !== typeof o.componentWillMount) ||
                        ("function" === typeof o.componentWillMount && o.componentWillMount(),
                        "function" === typeof o.UNSAFE_componentWillMount &&
                          o.UNSAFE_componentWillMount()),
                      "function" === typeof o.componentDidMount && (t.flags |= 4194308))
                    : ("function" === typeof o.componentDidMount && (t.flags |= 4194308),
                      (t.memoizedProps = r),
                      (t.memoizedState = s)),
                  (o.props = r),
                  (o.state = s),
                  (o.context = c),
                  (r = l))
                : ("function" === typeof o.componentDidMount && (t.flags |= 4194308), (r = !1));
          } else {
            (o = t.stateNode),
              Ri(e, t),
              (l = t.memoizedProps),
              (c = t.type === t.elementType ? l : nl(t.type, l)),
              (o.props = c),
              (d = t.pendingProps),
              (f = o.context),
              "object" === typeof (s = n.contextType) && null !== s
                ? (s = Mi(s))
                : (s = _a(t, (s = ja(n) ? Ma : Na.current)));
            var p = n.getDerivedStateFromProps;
            (u = "function" === typeof p || "function" === typeof o.getSnapshotBeforeUpdate) ||
              ("function" !== typeof o.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof o.componentWillReceiveProps) ||
              ((l !== d || f !== s) && ll(t, o, r, s)),
              (Ai = !1),
              (f = t.memoizedState),
              (o.state = f),
              Vi(t, r, o, a);
            var m = t.memoizedState;
            l !== d || f !== m || Oa.current || Ai
              ? ("function" === typeof p && (rl(t, n, p, r), (m = t.memoizedState)),
                (c = Ai || il(t, n, c, r, f, m, s) || !1)
                  ? (u ||
                      ("function" !== typeof o.UNSAFE_componentWillUpdate &&
                        "function" !== typeof o.componentWillUpdate) ||
                      ("function" === typeof o.componentWillUpdate &&
                        o.componentWillUpdate(r, m, s),
                      "function" === typeof o.UNSAFE_componentWillUpdate &&
                        o.UNSAFE_componentWillUpdate(r, m, s)),
                    "function" === typeof o.componentDidUpdate && (t.flags |= 4),
                    "function" === typeof o.getSnapshotBeforeUpdate && (t.flags |= 1024))
                  : ("function" !== typeof o.componentDidUpdate ||
                      (l === e.memoizedProps && f === e.memoizedState) ||
                      (t.flags |= 4),
                    "function" !== typeof o.getSnapshotBeforeUpdate ||
                      (l === e.memoizedProps && f === e.memoizedState) ||
                      (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = m)),
                (o.props = r),
                (o.state = m),
                (o.context = s),
                (r = c))
              : ("function" !== typeof o.componentDidUpdate ||
                  (l === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 4),
                "function" !== typeof o.getSnapshotBeforeUpdate ||
                  (l === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 1024),
                (r = !1));
          }
          return Nl(e, t, n, r, i, a);
        }
        function Nl(e, t, n, r, a, i) {
          Cl(e, t);
          var o = 0 !== (128 & t.flags);
          if (!r && !o) return a && Ra(t, n, !1), Gl(e, t, i);
          (r = t.stateNode), (bl.current = t);
          var l = o && "function" !== typeof n.getDerivedStateFromError ? null : r.render();
          return (
            (t.flags |= 1),
            null !== e && o
              ? ((t.child = wi(t, e.child, null, i)), (t.child = wi(t, null, l, i)))
              : wl(e, t, l, i),
            (t.memoizedState = r.state),
            a && Ra(t, n, !0),
            t.child
          );
        }
        function Ol(e) {
          var t = e.stateNode;
          t.pendingContext
            ? za(0, t.pendingContext, t.pendingContext !== t.context)
            : t.context && za(0, t.context, !1),
            Qi(e, t.containerInfo);
        }
        function Ml(e, t, n, r, a) {
          return pi(), mi(a), (t.flags |= 256), wl(e, t, n, r), t.child;
        }
        var _l,
          jl,
          Ll,
          zl,
          Al = { dehydrated: null, treeContext: null, retryLane: 0 };
        function Il(e) {
          return { baseLanes: e, cachePool: null, transitions: null };
        }
        function Rl(e, t, n) {
          var r,
            a = t.pendingProps,
            o = Zi.current,
            l = !1,
            s = 0 !== (128 & t.flags);
          if (
            ((r = s) || (r = (null === e || null !== e.memoizedState) && 0 !== (2 & o)),
            r
              ? ((l = !0), (t.flags &= -129))
              : (null !== e && null === e.memoizedState) || (o |= 1),
            Ta(Zi, 1 & o),
            null === e)
          )
            return (
              ci(t),
              null !== (e = t.memoizedState) && null !== (e = e.dehydrated)
                ? (0 === (1 & t.mode)
                    ? (t.lanes = 1)
                    : "$!" === e.data
                    ? (t.lanes = 8)
                    : (t.lanes = 1073741824),
                  null)
                : ((s = a.children),
                  (e = a.fallback),
                  l
                    ? ((a = t.mode),
                      (l = t.child),
                      (s = { mode: "hidden", children: s }),
                      0 === (1 & a) && null !== l
                        ? ((l.childLanes = 0), (l.pendingProps = s))
                        : (l = Ic(s, a, 0, null)),
                      (e = Ac(e, a, n, null)),
                      (l.return = t),
                      (e.return = t),
                      (l.sibling = e),
                      (t.child = l),
                      (t.child.memoizedState = Il(n)),
                      (t.memoizedState = Al),
                      e)
                    : Fl(t, s))
            );
          if (null !== (o = e.memoizedState) && null !== (r = o.dehydrated))
            return (function (e, t, n, r, a, o, l) {
              if (n)
                return 256 & t.flags
                  ? ((t.flags &= -257), Dl(e, t, l, (r = ul(Error(i(422))))))
                  : null !== t.memoizedState
                  ? ((t.child = e.child), (t.flags |= 128), null)
                  : ((o = r.fallback),
                    (a = t.mode),
                    (r = Ic({ mode: "visible", children: r.children }, a, 0, null)),
                    ((o = Ac(o, a, l, null)).flags |= 2),
                    (r.return = t),
                    (o.return = t),
                    (r.sibling = o),
                    (t.child = r),
                    0 !== (1 & t.mode) && wi(t, e.child, null, l),
                    (t.child.memoizedState = Il(l)),
                    (t.memoizedState = Al),
                    o);
              if (0 === (1 & t.mode)) return Dl(e, t, l, null);
              if ("$!" === a.data) {
                if ((r = a.nextSibling && a.nextSibling.dataset)) var s = r.dgst;
                return (r = s), Dl(e, t, l, (r = ul((o = Error(i(419))), r, void 0)));
              }
              if (((s = 0 !== (l & e.childLanes)), yl || s)) {
                if (null !== (r = Os)) {
                  switch (l & -l) {
                    case 4:
                      a = 2;
                      break;
                    case 16:
                      a = 8;
                      break;
                    case 64:
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
                    case 4194304:
                    case 8388608:
                    case 16777216:
                    case 33554432:
                    case 67108864:
                      a = 32;
                      break;
                    case 536870912:
                      a = 268435456;
                      break;
                    default:
                      a = 0;
                  }
                  0 !== (a = 0 !== (a & (r.suspendedLanes | l)) ? 0 : a) &&
                    a !== o.retryLane &&
                    ((o.retryLane = a), zi(e, a), nc(r, e, a, -1));
                }
                return hc(), Dl(e, t, l, (r = ul(Error(i(421)))));
              }
              return "$?" === a.data
                ? ((t.flags |= 128),
                  (t.child = e.child),
                  (t = Pc.bind(null, e)),
                  (a._reactRetry = t),
                  null)
                : ((e = o.treeContext),
                  (ri = ca(a.nextSibling)),
                  (ni = t),
                  (ai = !0),
                  (ii = null),
                  null !== e &&
                    ((Ya[qa++] = Xa),
                    (Ya[qa++] = Ka),
                    (Ya[qa++] = Qa),
                    (Xa = e.id),
                    (Ka = e.overflow),
                    (Qa = t)),
                  (t = Fl(t, r.children)),
                  (t.flags |= 4096),
                  t);
            })(e, t, s, a, r, o, n);
          if (l) {
            (l = a.fallback), (s = t.mode), (r = (o = e.child).sibling);
            var c = { mode: "hidden", children: a.children };
            return (
              0 === (1 & s) && t.child !== o
                ? (((a = t.child).childLanes = 0), (a.pendingProps = c), (t.deletions = null))
                : ((a = Lc(o, c)).subtreeFlags = 14680064 & o.subtreeFlags),
              null !== r ? (l = Lc(r, l)) : ((l = Ac(l, s, n, null)).flags |= 2),
              (l.return = t),
              (a.return = t),
              (a.sibling = l),
              (t.child = a),
              (a = l),
              (l = t.child),
              (s =
                null === (s = e.child.memoizedState)
                  ? Il(n)
                  : { baseLanes: s.baseLanes | n, cachePool: null, transitions: s.transitions }),
              (l.memoizedState = s),
              (l.childLanes = e.childLanes & ~n),
              (t.memoizedState = Al),
              a
            );
          }
          return (
            (e = (l = e.child).sibling),
            (a = Lc(l, { mode: "visible", children: a.children })),
            0 === (1 & t.mode) && (a.lanes = n),
            (a.return = t),
            (a.sibling = null),
            null !== e &&
              (null === (n = t.deletions) ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
            (t.child = a),
            (t.memoizedState = null),
            a
          );
        }
        function Fl(e, t) {
          return (
            ((t = Ic({ mode: "visible", children: t }, e.mode, 0, null)).return = e), (e.child = t)
          );
        }
        function Dl(e, t, n, r) {
          return (
            null !== r && mi(r),
            wi(t, e.child, null, n),
            ((e = Fl(t, t.pendingProps.children)).flags |= 2),
            (t.memoizedState = null),
            e
          );
        }
        function Bl(e, t, n) {
          e.lanes |= t;
          var r = e.alternate;
          null !== r && (r.lanes |= t), Ni(e.return, t, n);
        }
        function Hl(e, t, n, r, a) {
          var i = e.memoizedState;
          null === i
            ? (e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: r,
                tail: n,
                tailMode: a,
              })
            : ((i.isBackwards = t),
              (i.rendering = null),
              (i.renderingStartTime = 0),
              (i.last = r),
              (i.tail = n),
              (i.tailMode = a));
        }
        function Vl(e, t, n) {
          var r = t.pendingProps,
            a = r.revealOrder,
            i = r.tail;
          if ((wl(e, t, r.children, n), 0 !== (2 & (r = Zi.current))))
            (r = (1 & r) | 2), (t.flags |= 128);
          else {
            if (null !== e && 0 !== (128 & e.flags))
              e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && Bl(e, n, t);
                else if (19 === e.tag) Bl(e, n, t);
                else if (null !== e.child) {
                  (e.child.return = e), (e = e.child);
                  continue;
                }
                if (e === t) break e;
                for (; null === e.sibling; ) {
                  if (null === e.return || e.return === t) break e;
                  e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
              }
            r &= 1;
          }
          if ((Ta(Zi, r), 0 === (1 & t.mode))) t.memoizedState = null;
          else
            switch (a) {
              case "forwards":
                for (n = t.child, a = null; null !== n; )
                  null !== (e = n.alternate) && null === eo(e) && (a = n), (n = n.sibling);
                null === (n = a)
                  ? ((a = t.child), (t.child = null))
                  : ((a = n.sibling), (n.sibling = null)),
                  Hl(t, !1, a, n, i);
                break;
              case "backwards":
                for (n = null, a = t.child, t.child = null; null !== a; ) {
                  if (null !== (e = a.alternate) && null === eo(e)) {
                    t.child = a;
                    break;
                  }
                  (e = a.sibling), (a.sibling = n), (n = a), (a = e);
                }
                Hl(t, !0, n, null, i);
                break;
              case "together":
                Hl(t, !1, null, null, void 0);
                break;
              default:
                t.memoizedState = null;
            }
          return t.child;
        }
        function Wl(e, t) {
          0 === (1 & t.mode) &&
            null !== e &&
            ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
        }
        function Gl(e, t, n) {
          if (
            (null !== e && (t.dependencies = e.dependencies),
            (Is |= t.lanes),
            0 === (n & t.childLanes))
          )
            return null;
          if (null !== e && t.child !== e.child) throw Error(i(153));
          if (null !== t.child) {
            for (
              n = Lc((e = t.child), e.pendingProps), t.child = n, n.return = t;
              null !== e.sibling;

            )
              (e = e.sibling), ((n = n.sibling = Lc(e, e.pendingProps)).return = t);
            n.sibling = null;
          }
          return t.child;
        }
        function Ul(e, t) {
          if (!ai)
            switch (e.tailMode) {
              case "hidden":
                t = e.tail;
                for (var n = null; null !== t; ) null !== t.alternate && (n = t), (t = t.sibling);
                null === n ? (e.tail = null) : (n.sibling = null);
                break;
              case "collapsed":
                n = e.tail;
                for (var r = null; null !== n; ) null !== n.alternate && (r = n), (n = n.sibling);
                null === r
                  ? t || null === e.tail
                    ? (e.tail = null)
                    : (e.tail.sibling = null)
                  : (r.sibling = null);
            }
        }
        function $l(e) {
          var t = null !== e.alternate && e.alternate.child === e.child,
            n = 0,
            r = 0;
          if (t)
            for (var a = e.child; null !== a; )
              (n |= a.lanes | a.childLanes),
                (r |= 14680064 & a.subtreeFlags),
                (r |= 14680064 & a.flags),
                (a.return = e),
                (a = a.sibling);
          else
            for (a = e.child; null !== a; )
              (n |= a.lanes | a.childLanes),
                (r |= a.subtreeFlags),
                (r |= a.flags),
                (a.return = e),
                (a = a.sibling);
          return (e.subtreeFlags |= r), (e.childLanes = n), t;
        }
        function Yl(e, t, n) {
          var r = t.pendingProps;
          switch ((ti(t), t.tag)) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
              return $l(t), null;
            case 1:
            case 17:
              return ja(t.type) && La(), $l(t), null;
            case 3:
              return (
                (r = t.stateNode),
                Xi(),
                Ca(Oa),
                Ca(Na),
                no(),
                r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
                (null !== e && null !== e.child) ||
                  (di(t)
                    ? (t.flags |= 4)
                    : null === e ||
                      (e.memoizedState.isDehydrated && 0 === (256 & t.flags)) ||
                      ((t.flags |= 1024), null !== ii && (oc(ii), (ii = null)))),
                jl(e, t),
                $l(t),
                null
              );
            case 5:
              Ji(t);
              var a = qi(Yi.current);
              if (((n = t.type), null !== e && null != t.stateNode))
                Ll(e, t, n, r, a), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(i(166));
                  return $l(t), null;
                }
                if (((e = qi(Ui.current)), di(t))) {
                  (r = t.stateNode), (n = t.type);
                  var o = t.memoizedProps;
                  switch (((r[fa] = t), (r[pa] = o), (e = 0 !== (1 & t.mode)), n)) {
                    case "dialog":
                      Dr("cancel", r), Dr("close", r);
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      Dr("load", r);
                      break;
                    case "video":
                    case "audio":
                      for (a = 0; a < Ar.length; a++) Dr(Ar[a], r);
                      break;
                    case "source":
                      Dr("error", r);
                      break;
                    case "img":
                    case "image":
                    case "link":
                      Dr("error", r), Dr("load", r);
                      break;
                    case "details":
                      Dr("toggle", r);
                      break;
                    case "input":
                      X(r, o), Dr("invalid", r);
                      break;
                    case "select":
                      (r._wrapperState = { wasMultiple: !!o.multiple }), Dr("invalid", r);
                      break;
                    case "textarea":
                      ae(r, o), Dr("invalid", r);
                  }
                  for (var s in (be(n, o), (a = null), o))
                    if (o.hasOwnProperty(s)) {
                      var c = o[s];
                      "children" === s
                        ? "string" === typeof c
                          ? r.textContent !== c &&
                            (!0 !== o.suppressHydrationWarning && Jr(r.textContent, c, e),
                            (a = ["children", c]))
                          : "number" === typeof c &&
                            r.textContent !== "" + c &&
                            (!0 !== o.suppressHydrationWarning && Jr(r.textContent, c, e),
                            (a = ["children", "" + c]))
                        : l.hasOwnProperty(s) && null != c && "onScroll" === s && Dr("scroll", r);
                    }
                  switch (n) {
                    case "input":
                      $(r), Z(r, o, !0);
                      break;
                    case "textarea":
                      $(r), oe(r);
                      break;
                    case "select":
                    case "option":
                      break;
                    default:
                      "function" === typeof o.onClick && (r.onclick = Zr);
                  }
                  (r = a), (t.updateQueue = r), null !== r && (t.flags |= 4);
                } else {
                  (s = 9 === a.nodeType ? a : a.ownerDocument),
                    "http://www.w3.org/1999/xhtml" === e && (e = le(n)),
                    "http://www.w3.org/1999/xhtml" === e
                      ? "script" === n
                        ? (((e = s.createElement("div")).innerHTML = "<script></script>"),
                          (e = e.removeChild(e.firstChild)))
                        : "string" === typeof r.is
                        ? (e = s.createElement(n, { is: r.is }))
                        : ((e = s.createElement(n)),
                          "select" === n &&
                            ((s = e), r.multiple ? (s.multiple = !0) : r.size && (s.size = r.size)))
                      : (e = s.createElementNS(e, n)),
                    (e[fa] = t),
                    (e[pa] = r),
                    _l(e, t, !1, !1),
                    (t.stateNode = e);
                  e: {
                    switch (((s = ye(n, r)), n)) {
                      case "dialog":
                        Dr("cancel", e), Dr("close", e), (a = r);
                        break;
                      case "iframe":
                      case "object":
                      case "embed":
                        Dr("load", e), (a = r);
                        break;
                      case "video":
                      case "audio":
                        for (a = 0; a < Ar.length; a++) Dr(Ar[a], e);
                        a = r;
                        break;
                      case "source":
                        Dr("error", e), (a = r);
                        break;
                      case "img":
                      case "image":
                      case "link":
                        Dr("error", e), Dr("load", e), (a = r);
                        break;
                      case "details":
                        Dr("toggle", e), (a = r);
                        break;
                      case "input":
                        X(e, r), (a = Q(e, r)), Dr("invalid", e);
                        break;
                      case "option":
                      default:
                        a = r;
                        break;
                      case "select":
                        (e._wrapperState = { wasMultiple: !!r.multiple }),
                          (a = R({}, r, { value: void 0 })),
                          Dr("invalid", e);
                        break;
                      case "textarea":
                        ae(e, r), (a = re(e, r)), Dr("invalid", e);
                    }
                    for (o in (be(n, a), (c = a)))
                      if (c.hasOwnProperty(o)) {
                        var u = c[o];
                        "style" === o
                          ? ve(e, u)
                          : "dangerouslySetInnerHTML" === o
                          ? null != (u = u ? u.__html : void 0) && de(e, u)
                          : "children" === o
                          ? "string" === typeof u
                            ? ("textarea" !== n || "" !== u) && fe(e, u)
                            : "number" === typeof u && fe(e, "" + u)
                          : "suppressContentEditableWarning" !== o &&
                            "suppressHydrationWarning" !== o &&
                            "autoFocus" !== o &&
                            (l.hasOwnProperty(o)
                              ? null != u && "onScroll" === o && Dr("scroll", e)
                              : null != u && y(e, o, u, s));
                      }
                    switch (n) {
                      case "input":
                        $(e), Z(e, r, !1);
                        break;
                      case "textarea":
                        $(e), oe(e);
                        break;
                      case "option":
                        null != r.value && e.setAttribute("value", "" + G(r.value));
                        break;
                      case "select":
                        (e.multiple = !!r.multiple),
                          null != (o = r.value)
                            ? ne(e, !!r.multiple, o, !1)
                            : null != r.defaultValue && ne(e, !!r.multiple, r.defaultValue, !0);
                        break;
                      default:
                        "function" === typeof a.onClick && (e.onclick = Zr);
                    }
                    switch (n) {
                      case "button":
                      case "input":
                      case "select":
                      case "textarea":
                        r = !!r.autoFocus;
                        break e;
                      case "img":
                        r = !0;
                        break e;
                      default:
                        r = !1;
                    }
                  }
                  r && (t.flags |= 4);
                }
                null !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              }
              return $l(t), null;
            case 6:
              if (e && null != t.stateNode) zl(e, t, e.memoizedProps, r);
              else {
                if ("string" !== typeof r && null === t.stateNode) throw Error(i(166));
                if (((n = qi(Yi.current)), qi(Ui.current), di(t))) {
                  if (
                    ((r = t.stateNode),
                    (n = t.memoizedProps),
                    (r[fa] = t),
                    (o = r.nodeValue !== n) && null !== (e = ni))
                  )
                    switch (e.tag) {
                      case 3:
                        Jr(r.nodeValue, n, 0 !== (1 & e.mode));
                        break;
                      case 5:
                        !0 !== e.memoizedProps.suppressHydrationWarning &&
                          Jr(r.nodeValue, n, 0 !== (1 & e.mode));
                    }
                  o && (t.flags |= 4);
                } else
                  ((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(r))[fa] = t),
                    (t.stateNode = r);
              }
              return $l(t), null;
            case 13:
              if (
                (Ca(Zi),
                (r = t.memoizedState),
                null === e || (null !== e.memoizedState && null !== e.memoizedState.dehydrated))
              ) {
                if (ai && null !== ri && 0 !== (1 & t.mode) && 0 === (128 & t.flags))
                  fi(), pi(), (t.flags |= 98560), (o = !1);
                else if (((o = di(t)), null !== r && null !== r.dehydrated)) {
                  if (null === e) {
                    if (!o) throw Error(i(318));
                    if (!(o = null !== (o = t.memoizedState) ? o.dehydrated : null))
                      throw Error(i(317));
                    o[fa] = t;
                  } else pi(), 0 === (128 & t.flags) && (t.memoizedState = null), (t.flags |= 4);
                  $l(t), (o = !1);
                } else null !== ii && (oc(ii), (ii = null)), (o = !0);
                if (!o) return 65536 & t.flags ? t : null;
              }
              return 0 !== (128 & t.flags)
                ? ((t.lanes = n), t)
                : ((r = null !== r) !== (null !== e && null !== e.memoizedState) &&
                    r &&
                    ((t.child.flags |= 8192),
                    0 !== (1 & t.mode) &&
                      (null === e || 0 !== (1 & Zi.current) ? 0 === zs && (zs = 3) : hc())),
                  null !== t.updateQueue && (t.flags |= 4),
                  $l(t),
                  null);
            case 4:
              return Xi(), jl(e, t), null === e && Vr(t.stateNode.containerInfo), $l(t), null;
            case 10:
              return Pi(t.type._context), $l(t), null;
            case 19:
              if ((Ca(Zi), null === (o = t.memoizedState))) return $l(t), null;
              if (((r = 0 !== (128 & t.flags)), null === (s = o.rendering)))
                if (r) Ul(o, !1);
                else {
                  if (0 !== zs || (null !== e && 0 !== (128 & e.flags)))
                    for (e = t.child; null !== e; ) {
                      if (null !== (s = eo(e))) {
                        for (
                          t.flags |= 128,
                            Ul(o, !1),
                            null !== (r = s.updateQueue) && ((t.updateQueue = r), (t.flags |= 4)),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child;
                          null !== n;

                        )
                          (e = r),
                            ((o = n).flags &= 14680066),
                            null === (s = o.alternate)
                              ? ((o.childLanes = 0),
                                (o.lanes = e),
                                (o.child = null),
                                (o.subtreeFlags = 0),
                                (o.memoizedProps = null),
                                (o.memoizedState = null),
                                (o.updateQueue = null),
                                (o.dependencies = null),
                                (o.stateNode = null))
                              : ((o.childLanes = s.childLanes),
                                (o.lanes = s.lanes),
                                (o.child = s.child),
                                (o.subtreeFlags = 0),
                                (o.deletions = null),
                                (o.memoizedProps = s.memoizedProps),
                                (o.memoizedState = s.memoizedState),
                                (o.updateQueue = s.updateQueue),
                                (o.type = s.type),
                                (e = s.dependencies),
                                (o.dependencies =
                                  null === e
                                    ? null
                                    : { lanes: e.lanes, firstContext: e.firstContext })),
                            (n = n.sibling);
                        return Ta(Zi, (1 & Zi.current) | 2), t.child;
                      }
                      e = e.sibling;
                    }
                  null !== o.tail &&
                    Ke() > Vs &&
                    ((t.flags |= 128), (r = !0), Ul(o, !1), (t.lanes = 4194304));
                }
              else {
                if (!r)
                  if (null !== (e = eo(s))) {
                    if (
                      ((t.flags |= 128),
                      (r = !0),
                      null !== (n = e.updateQueue) && ((t.updateQueue = n), (t.flags |= 4)),
                      Ul(o, !0),
                      null === o.tail && "hidden" === o.tailMode && !s.alternate && !ai)
                    )
                      return $l(t), null;
                  } else
                    2 * Ke() - o.renderingStartTime > Vs &&
                      1073741824 !== n &&
                      ((t.flags |= 128), (r = !0), Ul(o, !1), (t.lanes = 4194304));
                o.isBackwards
                  ? ((s.sibling = t.child), (t.child = s))
                  : (null !== (n = o.last) ? (n.sibling = s) : (t.child = s), (o.last = s));
              }
              return null !== o.tail
                ? ((t = o.tail),
                  (o.rendering = t),
                  (o.tail = t.sibling),
                  (o.renderingStartTime = Ke()),
                  (t.sibling = null),
                  (n = Zi.current),
                  Ta(Zi, r ? (1 & n) | 2 : 1 & n),
                  t)
                : ($l(t), null);
            case 22:
            case 23:
              return (
                dc(),
                (r = null !== t.memoizedState),
                null !== e && (null !== e.memoizedState) !== r && (t.flags |= 8192),
                r && 0 !== (1 & t.mode)
                  ? 0 !== (1073741824 & js) && ($l(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                  : $l(t),
                null
              );
            case 24:
            case 25:
              return null;
          }
          throw Error(i(156, t.tag));
        }
        function ql(e, t) {
          switch ((ti(t), t.tag)) {
            case 1:
              return (
                ja(t.type) && La(),
                65536 & (e = t.flags) ? ((t.flags = (-65537 & e) | 128), t) : null
              );
            case 3:
              return (
                Xi(),
                Ca(Oa),
                Ca(Na),
                no(),
                0 !== (65536 & (e = t.flags)) && 0 === (128 & e)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 5:
              return Ji(t), null;
            case 13:
              if ((Ca(Zi), null !== (e = t.memoizedState) && null !== e.dehydrated)) {
                if (null === t.alternate) throw Error(i(340));
                pi();
              }
              return 65536 & (e = t.flags) ? ((t.flags = (-65537 & e) | 128), t) : null;
            case 19:
              return Ca(Zi), null;
            case 4:
              return Xi(), null;
            case 10:
              return Pi(t.type._context), null;
            case 22:
            case 23:
              return dc(), null;
            default:
              return null;
          }
        }
        (_l = function (e, t) {
          for (var n = t.child; null !== n; ) {
            if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
            else if (4 !== n.tag && null !== n.child) {
              (n.child.return = n), (n = n.child);
              continue;
            }
            if (n === t) break;
            for (; null === n.sibling; ) {
              if (null === n.return || n.return === t) return;
              n = n.return;
            }
            (n.sibling.return = n.return), (n = n.sibling);
          }
        }),
          (jl = function () {}),
          (Ll = function (e, t, n, r) {
            var a = e.memoizedProps;
            if (a !== r) {
              (e = t.stateNode), qi(Ui.current);
              var i,
                o = null;
              switch (n) {
                case "input":
                  (a = Q(e, a)), (r = Q(e, r)), (o = []);
                  break;
                case "select":
                  (a = R({}, a, { value: void 0 })), (r = R({}, r, { value: void 0 })), (o = []);
                  break;
                case "textarea":
                  (a = re(e, a)), (r = re(e, r)), (o = []);
                  break;
                default:
                  "function" !== typeof a.onClick &&
                    "function" === typeof r.onClick &&
                    (e.onclick = Zr);
              }
              for (u in (be(n, r), (n = null), a))
                if (!r.hasOwnProperty(u) && a.hasOwnProperty(u) && null != a[u])
                  if ("style" === u) {
                    var s = a[u];
                    for (i in s) s.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
                  } else
                    "dangerouslySetInnerHTML" !== u &&
                      "children" !== u &&
                      "suppressContentEditableWarning" !== u &&
                      "suppressHydrationWarning" !== u &&
                      "autoFocus" !== u &&
                      (l.hasOwnProperty(u) ? o || (o = []) : (o = o || []).push(u, null));
              for (u in r) {
                var c = r[u];
                if (
                  ((s = null != a ? a[u] : void 0),
                  r.hasOwnProperty(u) && c !== s && (null != c || null != s))
                )
                  if ("style" === u)
                    if (s) {
                      for (i in s)
                        !s.hasOwnProperty(i) ||
                          (c && c.hasOwnProperty(i)) ||
                          (n || (n = {}), (n[i] = ""));
                      for (i in c)
                        c.hasOwnProperty(i) && s[i] !== c[i] && (n || (n = {}), (n[i] = c[i]));
                    } else n || (o || (o = []), o.push(u, n)), (n = c);
                  else
                    "dangerouslySetInnerHTML" === u
                      ? ((c = c ? c.__html : void 0),
                        (s = s ? s.__html : void 0),
                        null != c && s !== c && (o = o || []).push(u, c))
                      : "children" === u
                      ? ("string" !== typeof c && "number" !== typeof c) ||
                        (o = o || []).push(u, "" + c)
                      : "suppressContentEditableWarning" !== u &&
                        "suppressHydrationWarning" !== u &&
                        (l.hasOwnProperty(u)
                          ? (null != c && "onScroll" === u && Dr("scroll", e),
                            o || s === c || (o = []))
                          : (o = o || []).push(u, c));
              }
              n && (o = o || []).push("style", n);
              var u = o;
              (t.updateQueue = u) && (t.flags |= 4);
            }
          }),
          (zl = function (e, t, n, r) {
            n !== r && (t.flags |= 4);
          });
        var Ql = !1,
          Xl = !1,
          Kl = "function" === typeof WeakSet ? WeakSet : Set,
          Jl = null;
        function Zl(e, t) {
          var n = e.ref;
          if (null !== n)
            if ("function" === typeof n)
              try {
                n(null);
              } catch (r) {
                Ec(e, t, r);
              }
            else n.current = null;
        }
        function es(e, t, n) {
          try {
            n();
          } catch (r) {
            Ec(e, t, r);
          }
        }
        var ts = !1;
        function ns(e, t, n) {
          var r = t.updateQueue;
          if (null !== (r = null !== r ? r.lastEffect : null)) {
            var a = (r = r.next);
            do {
              if ((a.tag & e) === e) {
                var i = a.destroy;
                (a.destroy = void 0), void 0 !== i && es(t, n, i);
              }
              a = a.next;
            } while (a !== r);
          }
        }
        function rs(e, t) {
          if (null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)) {
            var n = (t = t.next);
            do {
              if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r();
              }
              n = n.next;
            } while (n !== t);
          }
        }
        function as(e) {
          var t = e.ref;
          if (null !== t) {
            var n = e.stateNode;
            e.tag, (e = n), "function" === typeof t ? t(e) : (t.current = e);
          }
        }
        function is(e) {
          var t = e.alternate;
          null !== t && ((e.alternate = null), is(t)),
            (e.child = null),
            (e.deletions = null),
            (e.sibling = null),
            5 === e.tag &&
              null !== (t = e.stateNode) &&
              (delete t[fa], delete t[pa], delete t[ha], delete t[va], delete t[ga]),
            (e.stateNode = null),
            (e.return = null),
            (e.dependencies = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.stateNode = null),
            (e.updateQueue = null);
        }
        function os(e) {
          return 5 === e.tag || 3 === e.tag || 4 === e.tag;
        }
        function ls(e) {
          e: for (;;) {
            for (; null === e.sibling; ) {
              if (null === e.return || os(e.return)) return null;
              e = e.return;
            }
            for (
              e.sibling.return = e.return, e = e.sibling;
              5 !== e.tag && 6 !== e.tag && 18 !== e.tag;

            ) {
              if (2 & e.flags) continue e;
              if (null === e.child || 4 === e.tag) continue e;
              (e.child.return = e), (e = e.child);
            }
            if (!(2 & e.flags)) return e.stateNode;
          }
        }
        function ss(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode),
              t
                ? 8 === n.nodeType
                  ? n.parentNode.insertBefore(e, t)
                  : n.insertBefore(e, t)
                : (8 === n.nodeType
                    ? (t = n.parentNode).insertBefore(e, n)
                    : (t = n).appendChild(e),
                  (null !== (n = n._reactRootContainer) && void 0 !== n) ||
                    null !== t.onclick ||
                    (t.onclick = Zr));
          else if (4 !== r && null !== (e = e.child))
            for (ss(e, t, n), e = e.sibling; null !== e; ) ss(e, t, n), (e = e.sibling);
        }
        function cs(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r) (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
          else if (4 !== r && null !== (e = e.child))
            for (cs(e, t, n), e = e.sibling; null !== e; ) cs(e, t, n), (e = e.sibling);
        }
        var us = null,
          ds = !1;
        function fs(e, t, n) {
          for (n = n.child; null !== n; ) ps(e, t, n), (n = n.sibling);
        }
        function ps(e, t, n) {
          if (it && "function" === typeof it.onCommitFiberUnmount)
            try {
              it.onCommitFiberUnmount(at, n);
            } catch (l) {}
          switch (n.tag) {
            case 5:
              Xl || Zl(n, t);
            case 6:
              var r = us,
                a = ds;
              (us = null),
                fs(e, t, n),
                (ds = a),
                null !== (us = r) &&
                  (ds
                    ? ((e = us),
                      (n = n.stateNode),
                      8 === e.nodeType ? e.parentNode.removeChild(n) : e.removeChild(n))
                    : us.removeChild(n.stateNode));
              break;
            case 18:
              null !== us &&
                (ds
                  ? ((e = us),
                    (n = n.stateNode),
                    8 === e.nodeType ? sa(e.parentNode, n) : 1 === e.nodeType && sa(e, n),
                    Vt(e))
                  : sa(us, n.stateNode));
              break;
            case 4:
              (r = us),
                (a = ds),
                (us = n.stateNode.containerInfo),
                (ds = !0),
                fs(e, t, n),
                (us = r),
                (ds = a);
              break;
            case 0:
            case 11:
            case 14:
            case 15:
              if (!Xl && null !== (r = n.updateQueue) && null !== (r = r.lastEffect)) {
                a = r = r.next;
                do {
                  var i = a,
                    o = i.destroy;
                  (i = i.tag),
                    void 0 !== o && (0 !== (2 & i) || 0 !== (4 & i)) && es(n, t, o),
                    (a = a.next);
                } while (a !== r);
              }
              fs(e, t, n);
              break;
            case 1:
              if (!Xl && (Zl(n, t), "function" === typeof (r = n.stateNode).componentWillUnmount))
                try {
                  (r.props = n.memoizedProps),
                    (r.state = n.memoizedState),
                    r.componentWillUnmount();
                } catch (l) {
                  Ec(n, t, l);
                }
              fs(e, t, n);
              break;
            case 21:
              fs(e, t, n);
              break;
            case 22:
              1 & n.mode
                ? ((Xl = (r = Xl) || null !== n.memoizedState), fs(e, t, n), (Xl = r))
                : fs(e, t, n);
              break;
            default:
              fs(e, t, n);
          }
        }
        function ms(e) {
          var t = e.updateQueue;
          if (null !== t) {
            e.updateQueue = null;
            var n = e.stateNode;
            null === n && (n = e.stateNode = new Kl()),
              t.forEach(function (t) {
                var r = Nc.bind(null, e, t);
                n.has(t) || (n.add(t), t.then(r, r));
              });
          }
        }
        function hs(e, t) {
          var n = t.deletions;
          if (null !== n)
            for (var r = 0; r < n.length; r++) {
              var a = n[r];
              try {
                var o = e,
                  l = t,
                  s = l;
                e: for (; null !== s; ) {
                  switch (s.tag) {
                    case 5:
                      (us = s.stateNode), (ds = !1);
                      break e;
                    case 3:
                    case 4:
                      (us = s.stateNode.containerInfo), (ds = !0);
                      break e;
                  }
                  s = s.return;
                }
                if (null === us) throw Error(i(160));
                ps(o, l, a), (us = null), (ds = !1);
                var c = a.alternate;
                null !== c && (c.return = null), (a.return = null);
              } catch (u) {
                Ec(a, t, u);
              }
            }
          if (12854 & t.subtreeFlags) for (t = t.child; null !== t; ) vs(t, e), (t = t.sibling);
        }
        function vs(e, t) {
          var n = e.alternate,
            r = e.flags;
          switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              if ((hs(t, e), gs(e), 4 & r)) {
                try {
                  ns(3, e, e.return), rs(3, e);
                } catch (v) {
                  Ec(e, e.return, v);
                }
                try {
                  ns(5, e, e.return);
                } catch (v) {
                  Ec(e, e.return, v);
                }
              }
              break;
            case 1:
              hs(t, e), gs(e), 512 & r && null !== n && Zl(n, n.return);
              break;
            case 5:
              if ((hs(t, e), gs(e), 512 & r && null !== n && Zl(n, n.return), 32 & e.flags)) {
                var a = e.stateNode;
                try {
                  fe(a, "");
                } catch (v) {
                  Ec(e, e.return, v);
                }
              }
              if (4 & r && null != (a = e.stateNode)) {
                var o = e.memoizedProps,
                  l = null !== n ? n.memoizedProps : o,
                  s = e.type,
                  c = e.updateQueue;
                if (((e.updateQueue = null), null !== c))
                  try {
                    "input" === s && "radio" === o.type && null != o.name && K(a, o), ye(s, l);
                    var u = ye(s, o);
                    for (l = 0; l < c.length; l += 2) {
                      var d = c[l],
                        f = c[l + 1];
                      "style" === d
                        ? ve(a, f)
                        : "dangerouslySetInnerHTML" === d
                        ? de(a, f)
                        : "children" === d
                        ? fe(a, f)
                        : y(a, d, f, u);
                    }
                    switch (s) {
                      case "input":
                        J(a, o);
                        break;
                      case "textarea":
                        ie(a, o);
                        break;
                      case "select":
                        var p = a._wrapperState.wasMultiple;
                        a._wrapperState.wasMultiple = !!o.multiple;
                        var m = o.value;
                        null != m
                          ? ne(a, !!o.multiple, m, !1)
                          : p !== !!o.multiple &&
                            (null != o.defaultValue
                              ? ne(a, !!o.multiple, o.defaultValue, !0)
                              : ne(a, !!o.multiple, o.multiple ? [] : "", !1));
                    }
                    a[pa] = o;
                  } catch (v) {
                    Ec(e, e.return, v);
                  }
              }
              break;
            case 6:
              if ((hs(t, e), gs(e), 4 & r)) {
                if (null === e.stateNode) throw Error(i(162));
                (a = e.stateNode), (o = e.memoizedProps);
                try {
                  a.nodeValue = o;
                } catch (v) {
                  Ec(e, e.return, v);
                }
              }
              break;
            case 3:
              if ((hs(t, e), gs(e), 4 & r && null !== n && n.memoizedState.isDehydrated))
                try {
                  Vt(t.containerInfo);
                } catch (v) {
                  Ec(e, e.return, v);
                }
              break;
            case 4:
            default:
              hs(t, e), gs(e);
              break;
            case 13:
              hs(t, e),
                gs(e),
                8192 & (a = e.child).flags &&
                  ((o = null !== a.memoizedState),
                  (a.stateNode.isHidden = o),
                  !o ||
                    (null !== a.alternate && null !== a.alternate.memoizedState) ||
                    (Hs = Ke())),
                4 & r && ms(e);
              break;
            case 22:
              if (
                ((d = null !== n && null !== n.memoizedState),
                1 & e.mode ? ((Xl = (u = Xl) || d), hs(t, e), (Xl = u)) : hs(t, e),
                gs(e),
                8192 & r)
              ) {
                if (
                  ((u = null !== e.memoizedState),
                  (e.stateNode.isHidden = u) && !d && 0 !== (1 & e.mode))
                )
                  for (Jl = e, d = e.child; null !== d; ) {
                    for (f = Jl = d; null !== Jl; ) {
                      switch (((m = (p = Jl).child), p.tag)) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                          ns(4, p, p.return);
                          break;
                        case 1:
                          Zl(p, p.return);
                          var h = p.stateNode;
                          if ("function" === typeof h.componentWillUnmount) {
                            (r = p), (n = p.return);
                            try {
                              (t = r),
                                (h.props = t.memoizedProps),
                                (h.state = t.memoizedState),
                                h.componentWillUnmount();
                            } catch (v) {
                              Ec(r, n, v);
                            }
                          }
                          break;
                        case 5:
                          Zl(p, p.return);
                          break;
                        case 22:
                          if (null !== p.memoizedState) {
                            xs(f);
                            continue;
                          }
                      }
                      null !== m ? ((m.return = p), (Jl = m)) : xs(f);
                    }
                    d = d.sibling;
                  }
                e: for (d = null, f = e; ; ) {
                  if (5 === f.tag) {
                    if (null === d) {
                      d = f;
                      try {
                        (a = f.stateNode),
                          u
                            ? "function" === typeof (o = a.style).setProperty
                              ? o.setProperty("display", "none", "important")
                              : (o.display = "none")
                            : ((s = f.stateNode),
                              (l =
                                void 0 !== (c = f.memoizedProps.style) &&
                                null !== c &&
                                c.hasOwnProperty("display")
                                  ? c.display
                                  : null),
                              (s.style.display = he("display", l)));
                      } catch (v) {
                        Ec(e, e.return, v);
                      }
                    }
                  } else if (6 === f.tag) {
                    if (null === d)
                      try {
                        f.stateNode.nodeValue = u ? "" : f.memoizedProps;
                      } catch (v) {
                        Ec(e, e.return, v);
                      }
                  } else if (
                    ((22 !== f.tag && 23 !== f.tag) || null === f.memoizedState || f === e) &&
                    null !== f.child
                  ) {
                    (f.child.return = f), (f = f.child);
                    continue;
                  }
                  if (f === e) break e;
                  for (; null === f.sibling; ) {
                    if (null === f.return || f.return === e) break e;
                    d === f && (d = null), (f = f.return);
                  }
                  d === f && (d = null), (f.sibling.return = f.return), (f = f.sibling);
                }
              }
              break;
            case 19:
              hs(t, e), gs(e), 4 & r && ms(e);
            case 21:
          }
        }
        function gs(e) {
          var t = e.flags;
          if (2 & t) {
            try {
              e: {
                for (var n = e.return; null !== n; ) {
                  if (os(n)) {
                    var r = n;
                    break e;
                  }
                  n = n.return;
                }
                throw Error(i(160));
              }
              switch (r.tag) {
                case 5:
                  var a = r.stateNode;
                  32 & r.flags && (fe(a, ""), (r.flags &= -33)), cs(e, ls(e), a);
                  break;
                case 3:
                case 4:
                  var o = r.stateNode.containerInfo;
                  ss(e, ls(e), o);
                  break;
                default:
                  throw Error(i(161));
              }
            } catch (l) {
              Ec(e, e.return, l);
            }
            e.flags &= -3;
          }
          4096 & t && (e.flags &= -4097);
        }
        function bs(e, t, n) {
          (Jl = e), ys(e, t, n);
        }
        function ys(e, t, n) {
          for (var r = 0 !== (1 & e.mode); null !== Jl; ) {
            var a = Jl,
              i = a.child;
            if (22 === a.tag && r) {
              var o = null !== a.memoizedState || Ql;
              if (!o) {
                var l = a.alternate,
                  s = (null !== l && null !== l.memoizedState) || Xl;
                l = Ql;
                var c = Xl;
                if (((Ql = o), (Xl = s) && !c))
                  for (Jl = a; null !== Jl; )
                    (s = (o = Jl).child),
                      22 === o.tag && null !== o.memoizedState
                        ? Ss(a)
                        : null !== s
                        ? ((s.return = o), (Jl = s))
                        : Ss(a);
                for (; null !== i; ) (Jl = i), ys(i, t, n), (i = i.sibling);
                (Jl = a), (Ql = l), (Xl = c);
              }
              ws(e);
            } else 0 !== (8772 & a.subtreeFlags) && null !== i ? ((i.return = a), (Jl = i)) : ws(e);
          }
        }
        function ws(e) {
          for (; null !== Jl; ) {
            var t = Jl;
            if (0 !== (8772 & t.flags)) {
              var n = t.alternate;
              try {
                if (0 !== (8772 & t.flags))
                  switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Xl || rs(5, t);
                      break;
                    case 1:
                      var r = t.stateNode;
                      if (4 & t.flags && !Xl)
                        if (null === n) r.componentDidMount();
                        else {
                          var a =
                            t.elementType === t.type
                              ? n.memoizedProps
                              : nl(t.type, n.memoizedProps);
                          r.componentDidUpdate(
                            a,
                            n.memoizedState,
                            r.__reactInternalSnapshotBeforeUpdate
                          );
                        }
                      var o = t.updateQueue;
                      null !== o && Wi(t, o, r);
                      break;
                    case 3:
                      var l = t.updateQueue;
                      if (null !== l) {
                        if (((n = null), null !== t.child))
                          switch (t.child.tag) {
                            case 5:
                            case 1:
                              n = t.child.stateNode;
                          }
                        Wi(t, l, n);
                      }
                      break;
                    case 5:
                      var s = t.stateNode;
                      if (null === n && 4 & t.flags) {
                        n = s;
                        var c = t.memoizedProps;
                        switch (t.type) {
                          case "button":
                          case "input":
                          case "select":
                          case "textarea":
                            c.autoFocus && n.focus();
                            break;
                          case "img":
                            c.src && (n.src = c.src);
                        }
                      }
                      break;
                    case 6:
                    case 4:
                    case 12:
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                      break;
                    case 13:
                      if (null === t.memoizedState) {
                        var u = t.alternate;
                        if (null !== u) {
                          var d = u.memoizedState;
                          if (null !== d) {
                            var f = d.dehydrated;
                            null !== f && Vt(f);
                          }
                        }
                      }
                      break;
                    default:
                      throw Error(i(163));
                  }
                Xl || (512 & t.flags && as(t));
              } catch (p) {
                Ec(t, t.return, p);
              }
            }
            if (t === e) {
              Jl = null;
              break;
            }
            if (null !== (n = t.sibling)) {
              (n.return = t.return), (Jl = n);
              break;
            }
            Jl = t.return;
          }
        }
        function xs(e) {
          for (; null !== Jl; ) {
            var t = Jl;
            if (t === e) {
              Jl = null;
              break;
            }
            var n = t.sibling;
            if (null !== n) {
              (n.return = t.return), (Jl = n);
              break;
            }
            Jl = t.return;
          }
        }
        function Ss(e) {
          for (; null !== Jl; ) {
            var t = Jl;
            try {
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  var n = t.return;
                  try {
                    rs(4, t);
                  } catch (s) {
                    Ec(t, n, s);
                  }
                  break;
                case 1:
                  var r = t.stateNode;
                  if ("function" === typeof r.componentDidMount) {
                    var a = t.return;
                    try {
                      r.componentDidMount();
                    } catch (s) {
                      Ec(t, a, s);
                    }
                  }
                  var i = t.return;
                  try {
                    as(t);
                  } catch (s) {
                    Ec(t, i, s);
                  }
                  break;
                case 5:
                  var o = t.return;
                  try {
                    as(t);
                  } catch (s) {
                    Ec(t, o, s);
                  }
              }
            } catch (s) {
              Ec(t, t.return, s);
            }
            if (t === e) {
              Jl = null;
              break;
            }
            var l = t.sibling;
            if (null !== l) {
              (l.return = t.return), (Jl = l);
              break;
            }
            Jl = t.return;
          }
        }
        var ks,
          Es = Math.ceil,
          Cs = w.ReactCurrentDispatcher,
          Ts = w.ReactCurrentOwner,
          Ps = w.ReactCurrentBatchConfig,
          Ns = 0,
          Os = null,
          Ms = null,
          _s = 0,
          js = 0,
          Ls = Ea(0),
          zs = 0,
          As = null,
          Is = 0,
          Rs = 0,
          Fs = 0,
          Ds = null,
          Bs = null,
          Hs = 0,
          Vs = 1 / 0,
          Ws = null,
          Gs = !1,
          Us = null,
          $s = null,
          Ys = !1,
          qs = null,
          Qs = 0,
          Xs = 0,
          Ks = null,
          Js = -1,
          Zs = 0;
        function ec() {
          return 0 !== (6 & Ns) ? Ke() : -1 !== Js ? Js : (Js = Ke());
        }
        function tc(e) {
          return 0 === (1 & e.mode)
            ? 1
            : 0 !== (2 & Ns) && 0 !== _s
            ? _s & -_s
            : null !== hi.transition
            ? (0 === Zs && (Zs = ht()), Zs)
            : 0 !== (e = yt)
            ? e
            : (e = void 0 === (e = window.event) ? 16 : Xt(e.type));
        }
        function nc(e, t, n, r) {
          if (50 < Xs) throw ((Xs = 0), (Ks = null), Error(i(185)));
          gt(e, n, r),
            (0 !== (2 & Ns) && e === Os) ||
              (e === Os && (0 === (2 & Ns) && (Rs |= n), 4 === zs && lc(e, _s)),
              rc(e, r),
              1 === n && 0 === Ns && 0 === (1 & t.mode) && ((Vs = Ke() + 500), Da && Va()));
        }
        function rc(e, t) {
          var n = e.callbackNode;
          !(function (e, t) {
            for (
              var n = e.suspendedLanes,
                r = e.pingedLanes,
                a = e.expirationTimes,
                i = e.pendingLanes;
              0 < i;

            ) {
              var o = 31 - ot(i),
                l = 1 << o,
                s = a[o];
              -1 === s
                ? (0 !== (l & n) && 0 === (l & r)) || (a[o] = pt(l, t))
                : s <= t && (e.expiredLanes |= l),
                (i &= ~l);
            }
          })(e, t);
          var r = ft(e, e === Os ? _s : 0);
          if (0 === r) null !== n && qe(n), (e.callbackNode = null), (e.callbackPriority = 0);
          else if (((t = r & -r), e.callbackPriority !== t)) {
            if ((null != n && qe(n), 1 === t))
              0 === e.tag
                ? (function (e) {
                    (Da = !0), Ha(e);
                  })(sc.bind(null, e))
                : Ha(sc.bind(null, e)),
                oa(function () {
                  0 === (6 & Ns) && Va();
                }),
                (n = null);
            else {
              switch (wt(r)) {
                case 1:
                  n = Ze;
                  break;
                case 4:
                  n = et;
                  break;
                case 16:
                default:
                  n = tt;
                  break;
                case 536870912:
                  n = rt;
              }
              n = Oc(n, ac.bind(null, e));
            }
            (e.callbackPriority = t), (e.callbackNode = n);
          }
        }
        function ac(e, t) {
          if (((Js = -1), (Zs = 0), 0 !== (6 & Ns))) throw Error(i(327));
          var n = e.callbackNode;
          if (Sc() && e.callbackNode !== n) return null;
          var r = ft(e, e === Os ? _s : 0);
          if (0 === r) return null;
          if (0 !== (30 & r) || 0 !== (r & e.expiredLanes) || t) t = vc(e, r);
          else {
            t = r;
            var a = Ns;
            Ns |= 2;
            var o = mc();
            for ((Os === e && _s === t) || ((Ws = null), (Vs = Ke() + 500), fc(e, t)); ; )
              try {
                bc();
                break;
              } catch (s) {
                pc(e, s);
              }
            Ti(),
              (Cs.current = o),
              (Ns = a),
              null !== Ms ? (t = 0) : ((Os = null), (_s = 0), (t = zs));
          }
          if (0 !== t) {
            if ((2 === t && 0 !== (a = mt(e)) && ((r = a), (t = ic(e, a))), 1 === t))
              throw ((n = As), fc(e, 0), lc(e, r), rc(e, Ke()), n);
            if (6 === t) lc(e, r);
            else {
              if (
                ((a = e.current.alternate),
                0 === (30 & r) &&
                  !(function (e) {
                    for (var t = e; ; ) {
                      if (16384 & t.flags) {
                        var n = t.updateQueue;
                        if (null !== n && null !== (n = n.stores))
                          for (var r = 0; r < n.length; r++) {
                            var a = n[r],
                              i = a.getSnapshot;
                            a = a.value;
                            try {
                              if (!lr(i(), a)) return !1;
                            } catch (l) {
                              return !1;
                            }
                          }
                      }
                      if (((n = t.child), 16384 & t.subtreeFlags && null !== n))
                        (n.return = t), (t = n);
                      else {
                        if (t === e) break;
                        for (; null === t.sibling; ) {
                          if (null === t.return || t.return === e) return !0;
                          t = t.return;
                        }
                        (t.sibling.return = t.return), (t = t.sibling);
                      }
                    }
                    return !0;
                  })(a) &&
                  (2 === (t = vc(e, r)) && 0 !== (o = mt(e)) && ((r = o), (t = ic(e, o))), 1 === t))
              )
                throw ((n = As), fc(e, 0), lc(e, r), rc(e, Ke()), n);
              switch (((e.finishedWork = a), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                  throw Error(i(345));
                case 2:
                case 5:
                  xc(e, Bs, Ws);
                  break;
                case 3:
                  if ((lc(e, r), (130023424 & r) === r && 10 < (t = Hs + 500 - Ke()))) {
                    if (0 !== ft(e, 0)) break;
                    if (((a = e.suspendedLanes) & r) !== r) {
                      ec(), (e.pingedLanes |= e.suspendedLanes & a);
                      break;
                    }
                    e.timeoutHandle = ra(xc.bind(null, e, Bs, Ws), t);
                    break;
                  }
                  xc(e, Bs, Ws);
                  break;
                case 4:
                  if ((lc(e, r), (4194240 & r) === r)) break;
                  for (t = e.eventTimes, a = -1; 0 < r; ) {
                    var l = 31 - ot(r);
                    (o = 1 << l), (l = t[l]) > a && (a = l), (r &= ~o);
                  }
                  if (
                    ((r = a),
                    10 <
                      (r =
                        (120 > (r = Ke() - r)
                          ? 120
                          : 480 > r
                          ? 480
                          : 1080 > r
                          ? 1080
                          : 1920 > r
                          ? 1920
                          : 3e3 > r
                          ? 3e3
                          : 4320 > r
                          ? 4320
                          : 1960 * Es(r / 1960)) - r))
                  ) {
                    e.timeoutHandle = ra(xc.bind(null, e, Bs, Ws), r);
                    break;
                  }
                  xc(e, Bs, Ws);
                  break;
                default:
                  throw Error(i(329));
              }
            }
          }
          return rc(e, Ke()), e.callbackNode === n ? ac.bind(null, e) : null;
        }
        function ic(e, t) {
          var n = Ds;
          return (
            e.current.memoizedState.isDehydrated && (fc(e, t).flags |= 256),
            2 !== (e = vc(e, t)) && ((t = Bs), (Bs = n), null !== t && oc(t)),
            e
          );
        }
        function oc(e) {
          null === Bs ? (Bs = e) : Bs.push.apply(Bs, e);
        }
        function lc(e, t) {
          for (
            t &= ~Fs, t &= ~Rs, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes;
            0 < t;

          ) {
            var n = 31 - ot(t),
              r = 1 << n;
            (e[n] = -1), (t &= ~r);
          }
        }
        function sc(e) {
          if (0 !== (6 & Ns)) throw Error(i(327));
          Sc();
          var t = ft(e, 0);
          if (0 === (1 & t)) return rc(e, Ke()), null;
          var n = vc(e, t);
          if (0 !== e.tag && 2 === n) {
            var r = mt(e);
            0 !== r && ((t = r), (n = ic(e, r)));
          }
          if (1 === n) throw ((n = As), fc(e, 0), lc(e, t), rc(e, Ke()), n);
          if (6 === n) throw Error(i(345));
          return (
            (e.finishedWork = e.current.alternate),
            (e.finishedLanes = t),
            xc(e, Bs, Ws),
            rc(e, Ke()),
            null
          );
        }
        function cc(e, t) {
          var n = Ns;
          Ns |= 1;
          try {
            return e(t);
          } finally {
            0 === (Ns = n) && ((Vs = Ke() + 500), Da && Va());
          }
        }
        function uc(e) {
          null !== qs && 0 === qs.tag && 0 === (6 & Ns) && Sc();
          var t = Ns;
          Ns |= 1;
          var n = Ps.transition,
            r = yt;
          try {
            if (((Ps.transition = null), (yt = 1), e)) return e();
          } finally {
            (yt = r), (Ps.transition = n), 0 === (6 & (Ns = t)) && Va();
          }
        }
        function dc() {
          (js = Ls.current), Ca(Ls);
        }
        function fc(e, t) {
          (e.finishedWork = null), (e.finishedLanes = 0);
          var n = e.timeoutHandle;
          if ((-1 !== n && ((e.timeoutHandle = -1), aa(n)), null !== Ms))
            for (n = Ms.return; null !== n; ) {
              var r = n;
              switch ((ti(r), r.tag)) {
                case 1:
                  null !== (r = r.type.childContextTypes) && void 0 !== r && La();
                  break;
                case 3:
                  Xi(), Ca(Oa), Ca(Na), no();
                  break;
                case 5:
                  Ji(r);
                  break;
                case 4:
                  Xi();
                  break;
                case 13:
                case 19:
                  Ca(Zi);
                  break;
                case 10:
                  Pi(r.type._context);
                  break;
                case 22:
                case 23:
                  dc();
              }
              n = n.return;
            }
          if (
            ((Os = e),
            (Ms = e = Lc(e.current, null)),
            (_s = js = t),
            (zs = 0),
            (As = null),
            (Fs = Rs = Is = 0),
            (Bs = Ds = null),
            null !== _i)
          ) {
            for (t = 0; t < _i.length; t++)
              if (null !== (r = (n = _i[t]).interleaved)) {
                n.interleaved = null;
                var a = r.next,
                  i = n.pending;
                if (null !== i) {
                  var o = i.next;
                  (i.next = a), (r.next = o);
                }
                n.pending = r;
              }
            _i = null;
          }
          return e;
        }
        function pc(e, t) {
          for (;;) {
            var n = Ms;
            try {
              if ((Ti(), (ro.current = Jo), co)) {
                for (var r = oo.memoizedState; null !== r; ) {
                  var a = r.queue;
                  null !== a && (a.pending = null), (r = r.next);
                }
                co = !1;
              }
              if (
                ((io = 0),
                (so = lo = oo = null),
                (uo = !1),
                (fo = 0),
                (Ts.current = null),
                null === n || null === n.return)
              ) {
                (zs = 1), (As = t), (Ms = null);
                break;
              }
              e: {
                var o = e,
                  l = n.return,
                  s = n,
                  c = t;
                if (
                  ((t = _s),
                  (s.flags |= 32768),
                  null !== c && "object" === typeof c && "function" === typeof c.then)
                ) {
                  var u = c,
                    d = s,
                    f = d.tag;
                  if (0 === (1 & d.mode) && (0 === f || 11 === f || 15 === f)) {
                    var p = d.alternate;
                    p
                      ? ((d.updateQueue = p.updateQueue),
                        (d.memoizedState = p.memoizedState),
                        (d.lanes = p.lanes))
                      : ((d.updateQueue = null), (d.memoizedState = null));
                  }
                  var m = vl(l);
                  if (null !== m) {
                    (m.flags &= -257), gl(m, l, s, 0, t), 1 & m.mode && hl(o, u, t), (c = u);
                    var h = (t = m).updateQueue;
                    if (null === h) {
                      var v = new Set();
                      v.add(c), (t.updateQueue = v);
                    } else h.add(c);
                    break e;
                  }
                  if (0 === (1 & t)) {
                    hl(o, u, t), hc();
                    break e;
                  }
                  c = Error(i(426));
                } else if (ai && 1 & s.mode) {
                  var g = vl(l);
                  if (null !== g) {
                    0 === (65536 & g.flags) && (g.flags |= 256), gl(g, l, s, 0, t), mi(cl(c, s));
                    break e;
                  }
                }
                (o = c = cl(c, s)),
                  4 !== zs && (zs = 2),
                  null === Ds ? (Ds = [o]) : Ds.push(o),
                  (o = l);
                do {
                  switch (o.tag) {
                    case 3:
                      (o.flags |= 65536), (t &= -t), (o.lanes |= t), Hi(o, pl(0, c, t));
                      break e;
                    case 1:
                      s = c;
                      var b = o.type,
                        y = o.stateNode;
                      if (
                        0 === (128 & o.flags) &&
                        ("function" === typeof b.getDerivedStateFromError ||
                          (null !== y &&
                            "function" === typeof y.componentDidCatch &&
                            (null === $s || !$s.has(y))))
                      ) {
                        (o.flags |= 65536), (t &= -t), (o.lanes |= t), Hi(o, ml(o, s, t));
                        break e;
                      }
                  }
                  o = o.return;
                } while (null !== o);
              }
              wc(n);
            } catch (w) {
              (t = w), Ms === n && null !== n && (Ms = n = n.return);
              continue;
            }
            break;
          }
        }
        function mc() {
          var e = Cs.current;
          return (Cs.current = Jo), null === e ? Jo : e;
        }
        function hc() {
          (0 !== zs && 3 !== zs && 2 !== zs) || (zs = 4),
            null === Os || (0 === (268435455 & Is) && 0 === (268435455 & Rs)) || lc(Os, _s);
        }
        function vc(e, t) {
          var n = Ns;
          Ns |= 2;
          var r = mc();
          for ((Os === e && _s === t) || ((Ws = null), fc(e, t)); ; )
            try {
              gc();
              break;
            } catch (a) {
              pc(e, a);
            }
          if ((Ti(), (Ns = n), (Cs.current = r), null !== Ms)) throw Error(i(261));
          return (Os = null), (_s = 0), zs;
        }
        function gc() {
          for (; null !== Ms; ) yc(Ms);
        }
        function bc() {
          for (; null !== Ms && !Qe(); ) yc(Ms);
        }
        function yc(e) {
          var t = ks(e.alternate, e, js);
          (e.memoizedProps = e.pendingProps), null === t ? wc(e) : (Ms = t), (Ts.current = null);
        }
        function wc(e) {
          var t = e;
          do {
            var n = t.alternate;
            if (((e = t.return), 0 === (32768 & t.flags))) {
              if (null !== (n = Yl(n, t, js))) return void (Ms = n);
            } else {
              if (null !== (n = ql(n, t))) return (n.flags &= 32767), void (Ms = n);
              if (null === e) return (zs = 6), void (Ms = null);
              (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
            }
            if (null !== (t = t.sibling)) return void (Ms = t);
            Ms = t = e;
          } while (null !== t);
          0 === zs && (zs = 5);
        }
        function xc(e, t, n) {
          var r = yt,
            a = Ps.transition;
          try {
            (Ps.transition = null),
              (yt = 1),
              (function (e, t, n, r) {
                do {
                  Sc();
                } while (null !== qs);
                if (0 !== (6 & Ns)) throw Error(i(327));
                n = e.finishedWork;
                var a = e.finishedLanes;
                if (null === n) return null;
                if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
                  throw Error(i(177));
                (e.callbackNode = null), (e.callbackPriority = 0);
                var o = n.lanes | n.childLanes;
                if (
                  ((function (e, t) {
                    var n = e.pendingLanes & ~t;
                    (e.pendingLanes = t),
                      (e.suspendedLanes = 0),
                      (e.pingedLanes = 0),
                      (e.expiredLanes &= t),
                      (e.mutableReadLanes &= t),
                      (e.entangledLanes &= t),
                      (t = e.entanglements);
                    var r = e.eventTimes;
                    for (e = e.expirationTimes; 0 < n; ) {
                      var a = 31 - ot(n),
                        i = 1 << a;
                      (t[a] = 0), (r[a] = -1), (e[a] = -1), (n &= ~i);
                    }
                  })(e, o),
                  e === Os && ((Ms = Os = null), (_s = 0)),
                  (0 === (2064 & n.subtreeFlags) && 0 === (2064 & n.flags)) ||
                    Ys ||
                    ((Ys = !0),
                    Oc(tt, function () {
                      return Sc(), null;
                    })),
                  (o = 0 !== (15990 & n.flags)),
                  0 !== (15990 & n.subtreeFlags) || o)
                ) {
                  (o = Ps.transition), (Ps.transition = null);
                  var l = yt;
                  yt = 1;
                  var s = Ns;
                  (Ns |= 4),
                    (Ts.current = null),
                    (function (e, t) {
                      if (((ea = Gt), pr((e = fr())))) {
                        if ("selectionStart" in e)
                          var n = { start: e.selectionStart, end: e.selectionEnd };
                        else
                          e: {
                            var r =
                              (n = ((n = e.ownerDocument) && n.defaultView) || window)
                                .getSelection && n.getSelection();
                            if (r && 0 !== r.rangeCount) {
                              n = r.anchorNode;
                              var a = r.anchorOffset,
                                o = r.focusNode;
                              r = r.focusOffset;
                              try {
                                n.nodeType, o.nodeType;
                              } catch (x) {
                                n = null;
                                break e;
                              }
                              var l = 0,
                                s = -1,
                                c = -1,
                                u = 0,
                                d = 0,
                                f = e,
                                p = null;
                              t: for (;;) {
                                for (
                                  var m;
                                  f !== n || (0 !== a && 3 !== f.nodeType) || (s = l + a),
                                    f !== o || (0 !== r && 3 !== f.nodeType) || (c = l + r),
                                    3 === f.nodeType && (l += f.nodeValue.length),
                                    null !== (m = f.firstChild);

                                )
                                  (p = f), (f = m);
                                for (;;) {
                                  if (f === e) break t;
                                  if (
                                    (p === n && ++u === a && (s = l),
                                    p === o && ++d === r && (c = l),
                                    null !== (m = f.nextSibling))
                                  )
                                    break;
                                  p = (f = p).parentNode;
                                }
                                f = m;
                              }
                              n = -1 === s || -1 === c ? null : { start: s, end: c };
                            } else n = null;
                          }
                        n = n || { start: 0, end: 0 };
                      } else n = null;
                      for (
                        ta = { focusedElem: e, selectionRange: n }, Gt = !1, Jl = t;
                        null !== Jl;

                      )
                        if (((e = (t = Jl).child), 0 !== (1028 & t.subtreeFlags) && null !== e))
                          (e.return = t), (Jl = e);
                        else
                          for (; null !== Jl; ) {
                            t = Jl;
                            try {
                              var h = t.alternate;
                              if (0 !== (1024 & t.flags))
                                switch (t.tag) {
                                  case 0:
                                  case 11:
                                  case 15:
                                  case 5:
                                  case 6:
                                  case 4:
                                  case 17:
                                    break;
                                  case 1:
                                    if (null !== h) {
                                      var v = h.memoizedProps,
                                        g = h.memoizedState,
                                        b = t.stateNode,
                                        y = b.getSnapshotBeforeUpdate(
                                          t.elementType === t.type ? v : nl(t.type, v),
                                          g
                                        );
                                      b.__reactInternalSnapshotBeforeUpdate = y;
                                    }
                                    break;
                                  case 3:
                                    var w = t.stateNode.containerInfo;
                                    1 === w.nodeType
                                      ? (w.textContent = "")
                                      : 9 === w.nodeType &&
                                        w.documentElement &&
                                        w.removeChild(w.documentElement);
                                    break;
                                  default:
                                    throw Error(i(163));
                                }
                            } catch (x) {
                              Ec(t, t.return, x);
                            }
                            if (null !== (e = t.sibling)) {
                              (e.return = t.return), (Jl = e);
                              break;
                            }
                            Jl = t.return;
                          }
                      (h = ts), (ts = !1);
                    })(e, n),
                    vs(n, e),
                    mr(ta),
                    (Gt = !!ea),
                    (ta = ea = null),
                    (e.current = n),
                    bs(n, e, a),
                    Xe(),
                    (Ns = s),
                    (yt = l),
                    (Ps.transition = o);
                } else e.current = n;
                if (
                  (Ys && ((Ys = !1), (qs = e), (Qs = a)),
                  (o = e.pendingLanes),
                  0 === o && ($s = null),
                  (function (e) {
                    if (it && "function" === typeof it.onCommitFiberRoot)
                      try {
                        it.onCommitFiberRoot(at, e, void 0, 128 === (128 & e.current.flags));
                      } catch (t) {}
                  })(n.stateNode),
                  rc(e, Ke()),
                  null !== t)
                )
                  for (r = e.onRecoverableError, n = 0; n < t.length; n++)
                    (a = t[n]), r(a.value, { componentStack: a.stack, digest: a.digest });
                if (Gs) throw ((Gs = !1), (e = Us), (Us = null), e);
                0 !== (1 & Qs) && 0 !== e.tag && Sc(),
                  (o = e.pendingLanes),
                  0 !== (1 & o) ? (e === Ks ? Xs++ : ((Xs = 0), (Ks = e))) : (Xs = 0),
                  Va();
              })(e, t, n, r);
          } finally {
            (Ps.transition = a), (yt = r);
          }
          return null;
        }
        function Sc() {
          if (null !== qs) {
            var e = wt(Qs),
              t = Ps.transition,
              n = yt;
            try {
              if (((Ps.transition = null), (yt = 16 > e ? 16 : e), null === qs)) var r = !1;
              else {
                if (((e = qs), (qs = null), (Qs = 0), 0 !== (6 & Ns))) throw Error(i(331));
                var a = Ns;
                for (Ns |= 4, Jl = e.current; null !== Jl; ) {
                  var o = Jl,
                    l = o.child;
                  if (0 !== (16 & Jl.flags)) {
                    var s = o.deletions;
                    if (null !== s) {
                      for (var c = 0; c < s.length; c++) {
                        var u = s[c];
                        for (Jl = u; null !== Jl; ) {
                          var d = Jl;
                          switch (d.tag) {
                            case 0:
                            case 11:
                            case 15:
                              ns(8, d, o);
                          }
                          var f = d.child;
                          if (null !== f) (f.return = d), (Jl = f);
                          else
                            for (; null !== Jl; ) {
                              var p = (d = Jl).sibling,
                                m = d.return;
                              if ((is(d), d === u)) {
                                Jl = null;
                                break;
                              }
                              if (null !== p) {
                                (p.return = m), (Jl = p);
                                break;
                              }
                              Jl = m;
                            }
                        }
                      }
                      var h = o.alternate;
                      if (null !== h) {
                        var v = h.child;
                        if (null !== v) {
                          h.child = null;
                          do {
                            var g = v.sibling;
                            (v.sibling = null), (v = g);
                          } while (null !== v);
                        }
                      }
                      Jl = o;
                    }
                  }
                  if (0 !== (2064 & o.subtreeFlags) && null !== l) (l.return = o), (Jl = l);
                  else
                    e: for (; null !== Jl; ) {
                      if (0 !== (2048 & (o = Jl).flags))
                        switch (o.tag) {
                          case 0:
                          case 11:
                          case 15:
                            ns(9, o, o.return);
                        }
                      var b = o.sibling;
                      if (null !== b) {
                        (b.return = o.return), (Jl = b);
                        break e;
                      }
                      Jl = o.return;
                    }
                }
                var y = e.current;
                for (Jl = y; null !== Jl; ) {
                  var w = (l = Jl).child;
                  if (0 !== (2064 & l.subtreeFlags) && null !== w) (w.return = l), (Jl = w);
                  else
                    e: for (l = y; null !== Jl; ) {
                      if (0 !== (2048 & (s = Jl).flags))
                        try {
                          switch (s.tag) {
                            case 0:
                            case 11:
                            case 15:
                              rs(9, s);
                          }
                        } catch (S) {
                          Ec(s, s.return, S);
                        }
                      if (s === l) {
                        Jl = null;
                        break e;
                      }
                      var x = s.sibling;
                      if (null !== x) {
                        (x.return = s.return), (Jl = x);
                        break e;
                      }
                      Jl = s.return;
                    }
                }
                if (((Ns = a), Va(), it && "function" === typeof it.onPostCommitFiberRoot))
                  try {
                    it.onPostCommitFiberRoot(at, e);
                  } catch (S) {}
                r = !0;
              }
              return r;
            } finally {
              (yt = n), (Ps.transition = t);
            }
          }
          return !1;
        }
        function kc(e, t, n) {
          (e = Di(e, (t = pl(0, (t = cl(n, t)), 1)), 1)),
            (t = ec()),
            null !== e && (gt(e, 1, t), rc(e, t));
        }
        function Ec(e, t, n) {
          if (3 === e.tag) kc(e, e, n);
          else
            for (; null !== t; ) {
              if (3 === t.tag) {
                kc(t, e, n);
                break;
              }
              if (1 === t.tag) {
                var r = t.stateNode;
                if (
                  "function" === typeof t.type.getDerivedStateFromError ||
                  ("function" === typeof r.componentDidCatch && (null === $s || !$s.has(r)))
                ) {
                  (t = Di(t, (e = ml(t, (e = cl(n, e)), 1)), 1)),
                    (e = ec()),
                    null !== t && (gt(t, 1, e), rc(t, e));
                  break;
                }
              }
              t = t.return;
            }
        }
        function Cc(e, t, n) {
          var r = e.pingCache;
          null !== r && r.delete(t),
            (t = ec()),
            (e.pingedLanes |= e.suspendedLanes & n),
            Os === e &&
              (_s & n) === n &&
              (4 === zs || (3 === zs && (130023424 & _s) === _s && 500 > Ke() - Hs)
                ? fc(e, 0)
                : (Fs |= n)),
            rc(e, t);
        }
        function Tc(e, t) {
          0 === t &&
            (0 === (1 & e.mode)
              ? (t = 1)
              : ((t = ut), 0 === (130023424 & (ut <<= 1)) && (ut = 4194304)));
          var n = ec();
          null !== (e = zi(e, t)) && (gt(e, t, n), rc(e, n));
        }
        function Pc(e) {
          var t = e.memoizedState,
            n = 0;
          null !== t && (n = t.retryLane), Tc(e, n);
        }
        function Nc(e, t) {
          var n = 0;
          switch (e.tag) {
            case 13:
              var r = e.stateNode,
                a = e.memoizedState;
              null !== a && (n = a.retryLane);
              break;
            case 19:
              r = e.stateNode;
              break;
            default:
              throw Error(i(314));
          }
          null !== r && r.delete(t), Tc(e, n);
        }
        function Oc(e, t) {
          return Ye(e, t);
        }
        function Mc(e, t, n, r) {
          (this.tag = e),
            (this.key = n),
            (this.sibling =
              this.child =
              this.return =
              this.stateNode =
              this.type =
              this.elementType =
                null),
            (this.index = 0),
            (this.ref = null),
            (this.pendingProps = t),
            (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
            (this.mode = r),
            (this.subtreeFlags = this.flags = 0),
            (this.deletions = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null);
        }
        function _c(e, t, n, r) {
          return new Mc(e, t, n, r);
        }
        function jc(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function Lc(e, t) {
          var n = e.alternate;
          return (
            null === n
              ? (((n = _c(e.tag, t, e.key, e.mode)).elementType = e.elementType),
                (n.type = e.type),
                (n.stateNode = e.stateNode),
                (n.alternate = e),
                (e.alternate = n))
              : ((n.pendingProps = t),
                (n.type = e.type),
                (n.flags = 0),
                (n.subtreeFlags = 0),
                (n.deletions = null)),
            (n.flags = 14680064 & e.flags),
            (n.childLanes = e.childLanes),
            (n.lanes = e.lanes),
            (n.child = e.child),
            (n.memoizedProps = e.memoizedProps),
            (n.memoizedState = e.memoizedState),
            (n.updateQueue = e.updateQueue),
            (t = e.dependencies),
            (n.dependencies = null === t ? null : { lanes: t.lanes, firstContext: t.firstContext }),
            (n.sibling = e.sibling),
            (n.index = e.index),
            (n.ref = e.ref),
            n
          );
        }
        function zc(e, t, n, r, a, o) {
          var l = 2;
          if (((r = e), "function" === typeof e)) jc(e) && (l = 1);
          else if ("string" === typeof e) l = 5;
          else
            e: switch (e) {
              case k:
                return Ac(n.children, a, o, t);
              case E:
                (l = 8), (a |= 8);
                break;
              case C:
                return ((e = _c(12, n, t, 2 | a)).elementType = C), (e.lanes = o), e;
              case O:
                return ((e = _c(13, n, t, a)).elementType = O), (e.lanes = o), e;
              case M:
                return ((e = _c(19, n, t, a)).elementType = M), (e.lanes = o), e;
              case L:
                return Ic(n, a, o, t);
              default:
                if ("object" === typeof e && null !== e)
                  switch (e.$$typeof) {
                    case T:
                      l = 10;
                      break e;
                    case P:
                      l = 9;
                      break e;
                    case N:
                      l = 11;
                      break e;
                    case _:
                      l = 14;
                      break e;
                    case j:
                      (l = 16), (r = null);
                      break e;
                  }
                throw Error(i(130, null == e ? e : typeof e, ""));
            }
          return ((t = _c(l, n, t, a)).elementType = e), (t.type = r), (t.lanes = o), t;
        }
        function Ac(e, t, n, r) {
          return ((e = _c(7, e, r, t)).lanes = n), e;
        }
        function Ic(e, t, n, r) {
          return (
            ((e = _c(22, e, r, t)).elementType = L),
            (e.lanes = n),
            (e.stateNode = { isHidden: !1 }),
            e
          );
        }
        function Rc(e, t, n) {
          return ((e = _c(6, e, null, t)).lanes = n), e;
        }
        function Fc(e, t, n) {
          return (
            ((t = _c(4, null !== e.children ? e.children : [], e.key, t)).lanes = n),
            (t.stateNode = {
              containerInfo: e.containerInfo,
              pendingChildren: null,
              implementation: e.implementation,
            }),
            t
          );
        }
        function Dc(e, t, n, r, a) {
          (this.tag = t),
            (this.containerInfo = e),
            (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
            (this.timeoutHandle = -1),
            (this.callbackNode = this.pendingContext = this.context = null),
            (this.callbackPriority = 0),
            (this.eventTimes = vt(0)),
            (this.expirationTimes = vt(-1)),
            (this.entangledLanes =
              this.finishedLanes =
              this.mutableReadLanes =
              this.expiredLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = vt(0)),
            (this.identifierPrefix = r),
            (this.onRecoverableError = a),
            (this.mutableSourceEagerHydrationData = null);
        }
        function Bc(e, t, n, r, a, i, o, l, s) {
          return (
            (e = new Dc(e, t, n, l, s)),
            1 === t ? ((t = 1), !0 === i && (t |= 8)) : (t = 0),
            (i = _c(3, null, null, t)),
            (e.current = i),
            (i.stateNode = e),
            (i.memoizedState = {
              element: r,
              isDehydrated: n,
              cache: null,
              transitions: null,
              pendingSuspenseBoundaries: null,
            }),
            Ii(i),
            e
          );
        }
        function Hc(e) {
          if (!e) return Pa;
          e: {
            if (Ve((e = e._reactInternals)) !== e || 1 !== e.tag) throw Error(i(170));
            var t = e;
            do {
              switch (t.tag) {
                case 3:
                  t = t.stateNode.context;
                  break e;
                case 1:
                  if (ja(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e;
                  }
              }
              t = t.return;
            } while (null !== t);
            throw Error(i(171));
          }
          if (1 === e.tag) {
            var n = e.type;
            if (ja(n)) return Aa(e, n, t);
          }
          return t;
        }
        function Vc(e, t, n, r, a, i, o, l, s) {
          return (
            ((e = Bc(n, r, !0, e, 0, i, 0, l, s)).context = Hc(null)),
            (n = e.current),
            ((i = Fi((r = ec()), (a = tc(n)))).callback = void 0 !== t && null !== t ? t : null),
            Di(n, i, a),
            (e.current.lanes = a),
            gt(e, a, r),
            rc(e, r),
            e
          );
        }
        function Wc(e, t, n, r) {
          var a = t.current,
            i = ec(),
            o = tc(a);
          return (
            (n = Hc(n)),
            null === t.context ? (t.context = n) : (t.pendingContext = n),
            ((t = Fi(i, o)).payload = { element: e }),
            null !== (r = void 0 === r ? null : r) && (t.callback = r),
            null !== (e = Di(a, t, o)) && (nc(e, a, o, i), Bi(e, a, o)),
            o
          );
        }
        function Gc(e) {
          return (e = e.current).child ? (e.child.tag, e.child.stateNode) : null;
        }
        function Uc(e, t) {
          if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane;
            e.retryLane = 0 !== n && n < t ? n : t;
          }
        }
        function $c(e, t) {
          Uc(e, t), (e = e.alternate) && Uc(e, t);
        }
        ks = function (e, t, n) {
          if (null !== e)
            if (e.memoizedProps !== t.pendingProps || Oa.current) yl = !0;
            else {
              if (0 === (e.lanes & n) && 0 === (128 & t.flags))
                return (
                  (yl = !1),
                  (function (e, t, n) {
                    switch (t.tag) {
                      case 3:
                        Ol(t), pi();
                        break;
                      case 5:
                        Ki(t);
                        break;
                      case 1:
                        ja(t.type) && Ia(t);
                        break;
                      case 4:
                        Qi(t, t.stateNode.containerInfo);
                        break;
                      case 10:
                        var r = t.type._context,
                          a = t.memoizedProps.value;
                        Ta(Si, r._currentValue), (r._currentValue = a);
                        break;
                      case 13:
                        if (null !== (r = t.memoizedState))
                          return null !== r.dehydrated
                            ? (Ta(Zi, 1 & Zi.current), (t.flags |= 128), null)
                            : 0 !== (n & t.child.childLanes)
                            ? Rl(e, t, n)
                            : (Ta(Zi, 1 & Zi.current),
                              null !== (e = Gl(e, t, n)) ? e.sibling : null);
                        Ta(Zi, 1 & Zi.current);
                        break;
                      case 19:
                        if (((r = 0 !== (n & t.childLanes)), 0 !== (128 & e.flags))) {
                          if (r) return Vl(e, t, n);
                          t.flags |= 128;
                        }
                        if (
                          (null !== (a = t.memoizedState) &&
                            ((a.rendering = null), (a.tail = null), (a.lastEffect = null)),
                          Ta(Zi, Zi.current),
                          r)
                        )
                          break;
                        return null;
                      case 22:
                      case 23:
                        return (t.lanes = 0), El(e, t, n);
                    }
                    return Gl(e, t, n);
                  })(e, t, n)
                );
              yl = 0 !== (131072 & e.flags);
            }
          else (yl = !1), ai && 0 !== (1048576 & t.flags) && Za(t, $a, t.index);
          switch (((t.lanes = 0), t.tag)) {
            case 2:
              var r = t.type;
              Wl(e, t), (e = t.pendingProps);
              var a = _a(t, Na.current);
              Oi(t, n), (a = vo(null, t, r, e, a, n));
              var o = go();
              return (
                (t.flags |= 1),
                "object" === typeof a &&
                null !== a &&
                "function" === typeof a.render &&
                void 0 === a.$$typeof
                  ? ((t.tag = 1),
                    (t.memoizedState = null),
                    (t.updateQueue = null),
                    ja(r) ? ((o = !0), Ia(t)) : (o = !1),
                    (t.memoizedState = null !== a.state && void 0 !== a.state ? a.state : null),
                    Ii(t),
                    (a.updater = al),
                    (t.stateNode = a),
                    (a._reactInternals = t),
                    sl(t, r, e, n),
                    (t = Nl(null, t, r, !0, o, n)))
                  : ((t.tag = 0), ai && o && ei(t), wl(null, t, a, n), (t = t.child)),
                t
              );
            case 16:
              r = t.elementType;
              e: {
                switch (
                  (Wl(e, t),
                  (e = t.pendingProps),
                  (r = (a = r._init)(r._payload)),
                  (t.type = r),
                  (a = t.tag =
                    (function (e) {
                      if ("function" === typeof e) return jc(e) ? 1 : 0;
                      if (void 0 !== e && null !== e) {
                        if ((e = e.$$typeof) === N) return 11;
                        if (e === _) return 14;
                      }
                      return 2;
                    })(r)),
                  (e = nl(r, e)),
                  a)
                ) {
                  case 0:
                    t = Tl(null, t, r, e, n);
                    break e;
                  case 1:
                    t = Pl(null, t, r, e, n);
                    break e;
                  case 11:
                    t = xl(null, t, r, e, n);
                    break e;
                  case 14:
                    t = Sl(null, t, r, nl(r.type, e), n);
                    break e;
                }
                throw Error(i(306, r, ""));
              }
              return t;
            case 0:
              return (
                (r = t.type),
                (a = t.pendingProps),
                Tl(e, t, r, (a = t.elementType === r ? a : nl(r, a)), n)
              );
            case 1:
              return (
                (r = t.type),
                (a = t.pendingProps),
                Pl(e, t, r, (a = t.elementType === r ? a : nl(r, a)), n)
              );
            case 3:
              e: {
                if ((Ol(t), null === e)) throw Error(i(387));
                (r = t.pendingProps),
                  (a = (o = t.memoizedState).element),
                  Ri(e, t),
                  Vi(t, r, null, n);
                var l = t.memoizedState;
                if (((r = l.element), o.isDehydrated)) {
                  if (
                    ((o = {
                      element: r,
                      isDehydrated: !1,
                      cache: l.cache,
                      pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
                      transitions: l.transitions,
                    }),
                    (t.updateQueue.baseState = o),
                    (t.memoizedState = o),
                    256 & t.flags)
                  ) {
                    t = Ml(e, t, r, n, (a = cl(Error(i(423)), t)));
                    break e;
                  }
                  if (r !== a) {
                    t = Ml(e, t, r, n, (a = cl(Error(i(424)), t)));
                    break e;
                  }
                  for (
                    ri = ca(t.stateNode.containerInfo.firstChild),
                      ni = t,
                      ai = !0,
                      ii = null,
                      n = xi(t, null, r, n),
                      t.child = n;
                    n;

                  )
                    (n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
                } else {
                  if ((pi(), r === a)) {
                    t = Gl(e, t, n);
                    break e;
                  }
                  wl(e, t, r, n);
                }
                t = t.child;
              }
              return t;
            case 5:
              return (
                Ki(t),
                null === e && ci(t),
                (r = t.type),
                (a = t.pendingProps),
                (o = null !== e ? e.memoizedProps : null),
                (l = a.children),
                na(r, a) ? (l = null) : null !== o && na(r, o) && (t.flags |= 32),
                Cl(e, t),
                wl(e, t, l, n),
                t.child
              );
            case 6:
              return null === e && ci(t), null;
            case 13:
              return Rl(e, t, n);
            case 4:
              return (
                Qi(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = wi(t, null, r, n)) : wl(e, t, r, n),
                t.child
              );
            case 11:
              return (
                (r = t.type),
                (a = t.pendingProps),
                xl(e, t, r, (a = t.elementType === r ? a : nl(r, a)), n)
              );
            case 7:
              return wl(e, t, t.pendingProps, n), t.child;
            case 8:
            case 12:
              return wl(e, t, t.pendingProps.children, n), t.child;
            case 10:
              e: {
                if (
                  ((r = t.type._context),
                  (a = t.pendingProps),
                  (o = t.memoizedProps),
                  (l = a.value),
                  Ta(Si, r._currentValue),
                  (r._currentValue = l),
                  null !== o)
                )
                  if (lr(o.value, l)) {
                    if (o.children === a.children && !Oa.current) {
                      t = Gl(e, t, n);
                      break e;
                    }
                  } else
                    for (null !== (o = t.child) && (o.return = t); null !== o; ) {
                      var s = o.dependencies;
                      if (null !== s) {
                        l = o.child;
                        for (var c = s.firstContext; null !== c; ) {
                          if (c.context === r) {
                            if (1 === o.tag) {
                              (c = Fi(-1, n & -n)).tag = 2;
                              var u = o.updateQueue;
                              if (null !== u) {
                                var d = (u = u.shared).pending;
                                null === d ? (c.next = c) : ((c.next = d.next), (d.next = c)),
                                  (u.pending = c);
                              }
                            }
                            (o.lanes |= n),
                              null !== (c = o.alternate) && (c.lanes |= n),
                              Ni(o.return, n, t),
                              (s.lanes |= n);
                            break;
                          }
                          c = c.next;
                        }
                      } else if (10 === o.tag) l = o.type === t.type ? null : o.child;
                      else if (18 === o.tag) {
                        if (null === (l = o.return)) throw Error(i(341));
                        (l.lanes |= n),
                          null !== (s = l.alternate) && (s.lanes |= n),
                          Ni(l, n, t),
                          (l = o.sibling);
                      } else l = o.child;
                      if (null !== l) l.return = o;
                      else
                        for (l = o; null !== l; ) {
                          if (l === t) {
                            l = null;
                            break;
                          }
                          if (null !== (o = l.sibling)) {
                            (o.return = l.return), (l = o);
                            break;
                          }
                          l = l.return;
                        }
                      o = l;
                    }
                wl(e, t, a.children, n), (t = t.child);
              }
              return t;
            case 9:
              return (
                (a = t.type),
                (r = t.pendingProps.children),
                Oi(t, n),
                (r = r((a = Mi(a)))),
                (t.flags |= 1),
                wl(e, t, r, n),
                t.child
              );
            case 14:
              return (a = nl((r = t.type), t.pendingProps)), Sl(e, t, r, (a = nl(r.type, a)), n);
            case 15:
              return kl(e, t, t.type, t.pendingProps, n);
            case 17:
              return (
                (r = t.type),
                (a = t.pendingProps),
                (a = t.elementType === r ? a : nl(r, a)),
                Wl(e, t),
                (t.tag = 1),
                ja(r) ? ((e = !0), Ia(t)) : (e = !1),
                Oi(t, n),
                ol(t, r, a),
                sl(t, r, a, n),
                Nl(null, t, r, !0, e, n)
              );
            case 19:
              return Vl(e, t, n);
            case 22:
              return El(e, t, n);
          }
          throw Error(i(156, t.tag));
        };
        var Yc =
          "function" === typeof reportError
            ? reportError
            : function (e) {
                console.error(e);
              };
        function qc(e) {
          this._internalRoot = e;
        }
        function Qc(e) {
          this._internalRoot = e;
        }
        function Xc(e) {
          return !(!e || (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType));
        }
        function Kc(e) {
          return !(
            !e ||
            (1 !== e.nodeType &&
              9 !== e.nodeType &&
              11 !== e.nodeType &&
              (8 !== e.nodeType || " react-mount-point-unstable " !== e.nodeValue))
          );
        }
        function Jc() {}
        function Zc(e, t, n, r, a) {
          var i = n._reactRootContainer;
          if (i) {
            var o = i;
            if ("function" === typeof a) {
              var l = a;
              a = function () {
                var e = Gc(o);
                l.call(e);
              };
            }
            Wc(t, o, e, a);
          } else
            o = (function (e, t, n, r, a) {
              if (a) {
                if ("function" === typeof r) {
                  var i = r;
                  r = function () {
                    var e = Gc(o);
                    i.call(e);
                  };
                }
                var o = Vc(t, r, e, 0, null, !1, 0, "", Jc);
                return (
                  (e._reactRootContainer = o),
                  (e[ma] = o.current),
                  Vr(8 === e.nodeType ? e.parentNode : e),
                  uc(),
                  o
                );
              }
              for (; (a = e.lastChild); ) e.removeChild(a);
              if ("function" === typeof r) {
                var l = r;
                r = function () {
                  var e = Gc(s);
                  l.call(e);
                };
              }
              var s = Bc(e, 0, !1, null, 0, !1, 0, "", Jc);
              return (
                (e._reactRootContainer = s),
                (e[ma] = s.current),
                Vr(8 === e.nodeType ? e.parentNode : e),
                uc(function () {
                  Wc(t, s, n, r);
                }),
                s
              );
            })(n, t, e, a, r);
          return Gc(o);
        }
        (Qc.prototype.render = qc.prototype.render =
          function (e) {
            var t = this._internalRoot;
            if (null === t) throw Error(i(409));
            Wc(e, t, null, null);
          }),
          (Qc.prototype.unmount = qc.prototype.unmount =
            function () {
              var e = this._internalRoot;
              if (null !== e) {
                this._internalRoot = null;
                var t = e.containerInfo;
                uc(function () {
                  Wc(null, e, null, null);
                }),
                  (t[ma] = null);
              }
            }),
          (Qc.prototype.unstable_scheduleHydration = function (e) {
            if (e) {
              var t = Et();
              e = { blockedOn: null, target: e, priority: t };
              for (var n = 0; n < Lt.length && 0 !== t && t < Lt[n].priority; n++);
              Lt.splice(n, 0, e), 0 === n && Rt(e);
            }
          }),
          (xt = function (e) {
            switch (e.tag) {
              case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                  var n = dt(t.pendingLanes);
                  0 !== n &&
                    (bt(t, 1 | n), rc(t, Ke()), 0 === (6 & Ns) && ((Vs = Ke() + 500), Va()));
                }
                break;
              case 13:
                uc(function () {
                  var t = zi(e, 1);
                  if (null !== t) {
                    var n = ec();
                    nc(t, e, 1, n);
                  }
                }),
                  $c(e, 1);
            }
          }),
          (St = function (e) {
            if (13 === e.tag) {
              var t = zi(e, 134217728);
              if (null !== t) nc(t, e, 134217728, ec());
              $c(e, 134217728);
            }
          }),
          (kt = function (e) {
            if (13 === e.tag) {
              var t = tc(e),
                n = zi(e, t);
              if (null !== n) nc(n, e, t, ec());
              $c(e, t);
            }
          }),
          (Et = function () {
            return yt;
          }),
          (Ct = function (e, t) {
            var n = yt;
            try {
              return (yt = e), t();
            } finally {
              yt = n;
            }
          }),
          (Se = function (e, t, n) {
            switch (t) {
              case "input":
                if ((J(e, n), (t = n.name), "radio" === n.type && null != t)) {
                  for (n = e; n.parentNode; ) n = n.parentNode;
                  for (
                    n = n.querySelectorAll(
                      "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
                    ),
                      t = 0;
                    t < n.length;
                    t++
                  ) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                      var a = xa(r);
                      if (!a) throw Error(i(90));
                      Y(r), J(r, a);
                    }
                  }
                }
                break;
              case "textarea":
                ie(e, n);
                break;
              case "select":
                null != (t = n.value) && ne(e, !!n.multiple, t, !1);
            }
          }),
          (Ne = cc),
          (Oe = uc);
        var eu = { usingClientEntryPoint: !1, Events: [ya, wa, xa, Te, Pe, cc] },
          tu = {
            findFiberByHostInstance: ba,
            bundleType: 0,
            version: "18.3.1",
            rendererPackageName: "react-dom",
          },
          nu = {
            bundleType: tu.bundleType,
            version: tu.version,
            rendererPackageName: tu.rendererPackageName,
            rendererConfig: tu.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setErrorHandler: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: w.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (e) {
              return null === (e = Ue(e)) ? null : e.stateNode;
            },
            findFiberByHostInstance:
              tu.findFiberByHostInstance ||
              function () {
                return null;
              },
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
            reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
          };
        if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
          var ru = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!ru.isDisabled && ru.supportsFiber)
            try {
              (at = ru.inject(nu)), (it = ru);
            } catch (ue) {}
        }
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = eu),
          (t.createPortal = function (e, t) {
            var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
            if (!Xc(t)) throw Error(i(200));
            return (function (e, t, n) {
              var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
              return {
                $$typeof: S,
                key: null == r ? null : "" + r,
                children: e,
                containerInfo: t,
                implementation: n,
              };
            })(e, t, null, n);
          }),
          (t.createRoot = function (e, t) {
            if (!Xc(e)) throw Error(i(299));
            var n = !1,
              r = "",
              a = Yc;
            return (
              null !== t &&
                void 0 !== t &&
                (!0 === t.unstable_strictMode && (n = !0),
                void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
                void 0 !== t.onRecoverableError && (a = t.onRecoverableError)),
              (t = Bc(e, 1, !1, null, 0, n, 0, r, a)),
              (e[ma] = t.current),
              Vr(8 === e.nodeType ? e.parentNode : e),
              new qc(t)
            );
          }),
          (t.findDOMNode = function (e) {
            if (null == e) return null;
            if (1 === e.nodeType) return e;
            var t = e._reactInternals;
            if (void 0 === t) {
              if ("function" === typeof e.render) throw Error(i(188));
              throw ((e = Object.keys(e).join(",")), Error(i(268, e)));
            }
            return (e = null === (e = Ue(t)) ? null : e.stateNode);
          }),
          (t.flushSync = function (e) {
            return uc(e);
          }),
          (t.hydrate = function (e, t, n) {
            if (!Kc(t)) throw Error(i(200));
            return Zc(null, e, t, !0, n);
          }),
          (t.hydrateRoot = function (e, t, n) {
            if (!Xc(e)) throw Error(i(405));
            var r = (null != n && n.hydratedSources) || null,
              a = !1,
              o = "",
              l = Yc;
            if (
              (null !== n &&
                void 0 !== n &&
                (!0 === n.unstable_strictMode && (a = !0),
                void 0 !== n.identifierPrefix && (o = n.identifierPrefix),
                void 0 !== n.onRecoverableError && (l = n.onRecoverableError)),
              (t = Vc(t, null, e, 1, null != n ? n : null, a, 0, o, l)),
              (e[ma] = t.current),
              Vr(e),
              r)
            )
              for (e = 0; e < r.length; e++)
                (a = (a = (n = r[e])._getVersion)(n._source)),
                  null == t.mutableSourceEagerHydrationData
                    ? (t.mutableSourceEagerHydrationData = [n, a])
                    : t.mutableSourceEagerHydrationData.push(n, a);
            return new Qc(t);
          }),
          (t.render = function (e, t, n) {
            if (!Kc(t)) throw Error(i(200));
            return Zc(null, e, t, !1, n);
          }),
          (t.unmountComponentAtNode = function (e) {
            if (!Kc(e)) throw Error(i(40));
            return (
              !!e._reactRootContainer &&
              (uc(function () {
                Zc(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[ma] = null);
                });
              }),
              !0)
            );
          }),
          (t.unstable_batchedUpdates = cc),
          (t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
            if (!Kc(n)) throw Error(i(200));
            if (null == e || void 0 === e._reactInternals) throw Error(i(38));
            return Zc(e, t, n, !1, r);
          }),
          (t.version = "18.3.1-next-f1338f8080-20240426");
      },
      391: (e, t, n) => {
        "use strict";
        var r = n(950);
        (t.createRoot = r.createRoot), (t.hydrateRoot = r.hydrateRoot);
      },
      950: (e, t, n) => {
        "use strict";
        !(function e() {
          if (
            "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (t) {
              console.error(t);
            }
        })(),
          (e.exports = n(730));
      },
      675: function (e, t, n) {
        "use strict";
        var r =
            (this && this.__assign) ||
            function () {
              return (
                (r =
                  Object.assign ||
                  function (e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                      for (var a in (t = arguments[n]))
                        Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                    return e;
                  }),
                r.apply(this, arguments)
              );
            },
          a =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, n, r) {
                  void 0 === r && (r = n);
                  var a = Object.getOwnPropertyDescriptor(t, n);
                  (a && !("get" in a ? !t.__esModule : a.writable || a.configurable)) ||
                    (a = {
                      enumerable: !0,
                      get: function () {
                        return t[n];
                      },
                    }),
                    Object.defineProperty(e, r, a);
                }
              : function (e, t, n, r) {
                  void 0 === r && (r = n), (e[r] = t[n]);
                }),
          i =
            (this && this.__setModuleDefault) ||
            (Object.create
              ? function (e, t) {
                  Object.defineProperty(e, "default", { enumerable: !0, value: t });
                }
              : function (e, t) {
                  e.default = t;
                }),
          o =
            (this && this.__importStar) ||
            function (e) {
              if (e && e.__esModule) return e;
              var t = {};
              if (null != e)
                for (var n in e)
                  "default" !== n && Object.prototype.hasOwnProperty.call(e, n) && a(t, e, n);
              return i(t, e), t;
            },
          l =
            (this && this.__rest) ||
            function (e, t) {
              var n = {};
              for (var r in e)
                Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
              if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
                var a = 0;
                for (r = Object.getOwnPropertySymbols(e); a < r.length; a++)
                  t.indexOf(r[a]) < 0 &&
                    Object.prototype.propertyIsEnumerable.call(e, r[a]) &&
                    (n[r[a]] = e[r[a]]);
              }
              return n;
            };
        Object.defineProperty(t, "__esModule", { value: !0 });
        var s = o(n(43)),
          c = n(880),
          u = (0, n(744).createAnimation)(
            "FadeLoader",
            "50% {opacity: 0.3} 100% {opacity: 1}",
            "fade"
          );
        t.default = function (e) {
          var t = e.loading,
            n = void 0 === t || t,
            a = e.color,
            i = void 0 === a ? "#000000" : a,
            o = e.speedMultiplier,
            d = void 0 === o ? 1 : o,
            f = e.cssOverride,
            p = void 0 === f ? {} : f,
            m = e.height,
            h = void 0 === m ? 15 : m,
            v = e.width,
            g = void 0 === v ? 5 : v,
            b = e.radius,
            y = void 0 === b ? 2 : b,
            w = e.margin,
            x = void 0 === w ? 2 : w,
            S = l(e, [
              "loading",
              "color",
              "speedMultiplier",
              "cssOverride",
              "height",
              "width",
              "radius",
              "margin",
            ]),
            k = (0, c.parseLengthAndUnit)(x).value + 18,
            E = k / 2 + k / 5.5,
            C = r(
              {
                display: "inherit",
                position: "relative",
                fontSize: "0",
                top: k,
                left: k,
                width: "".concat(3 * k, "px"),
                height: "".concat(3 * k, "px"),
              },
              p
            ),
            T = function (e) {
              return {
                position: "absolute",
                width: (0, c.cssValue)(g),
                height: (0, c.cssValue)(h),
                margin: (0, c.cssValue)(x),
                backgroundColor: i,
                borderRadius: (0, c.cssValue)(y),
                transition: "2s",
                animationFillMode: "both",
                animation: ""
                  .concat(u, " ")
                  .concat(1.2 / d, "s ")
                  .concat(0.12 * e, "s infinite ease-in-out"),
              };
            },
            P = r(r({}, T(1)), { top: "".concat(k, "px"), left: "0" }),
            N = r(r({}, T(2)), {
              top: "".concat(E, "px"),
              left: "".concat(E, "px"),
              transform: "rotate(-45deg)",
            }),
            O = r(r({}, T(3)), { top: "0", left: "".concat(k, "px"), transform: "rotate(90deg)" }),
            M = r(r({}, T(4)), {
              top: "".concat(-1 * E, "px"),
              left: "".concat(E, "px"),
              transform: "rotate(45deg)",
            }),
            _ = r(r({}, T(5)), { top: "".concat(-1 * k, "px"), left: "0" }),
            j = r(r({}, T(6)), {
              top: "".concat(-1 * E, "px"),
              left: "".concat(-1 * E, "px"),
              transform: "rotate(-45deg)",
            }),
            L = r(r({}, T(7)), {
              top: "0",
              left: "".concat(-1 * k, "px"),
              transform: "rotate(90deg)",
            }),
            z = r(r({}, T(8)), {
              top: "".concat(E, "px"),
              left: "".concat(-1 * E, "px"),
              transform: "rotate(45deg)",
            });
          return n
            ? s.createElement(
                "span",
                r({ style: C }, S),
                s.createElement("span", { style: P }),
                s.createElement("span", { style: N }),
                s.createElement("span", { style: O }),
                s.createElement("span", { style: M }),
                s.createElement("span", { style: _ }),
                s.createElement("span", { style: j }),
                s.createElement("span", { style: L }),
                s.createElement("span", { style: z })
              )
            : null;
        };
      },
      744: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.createAnimation = void 0);
        t.createAnimation = function (e, t, n) {
          var r = "react-spinners-".concat(e, "-").concat(n);
          if ("undefined" == typeof window || !window.document) return r;
          var a = document.createElement("style");
          document.head.appendChild(a);
          var i = a.sheet,
            o = "\n    @keyframes ".concat(r, " {\n      ").concat(t, "\n    }\n  ");
          return i && i.insertRule(o, 0), r;
        };
      },
      880: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.parseLengthAndUnit = r),
          (t.cssValue = function (e) {
            var t = r(e);
            return "".concat(t.value).concat(t.unit);
          });
        var n = {
          cm: !0,
          mm: !0,
          in: !0,
          px: !0,
          pt: !0,
          pc: !0,
          em: !0,
          ex: !0,
          ch: !0,
          rem: !0,
          vw: !0,
          vh: !0,
          vmin: !0,
          vmax: !0,
          "%": !0,
        };
        function r(e) {
          if ("number" === typeof e) return { value: e, unit: "px" };
          var t,
            r = (e.match(/^[0-9.]*/) || "").toString();
          t = r.includes(".") ? parseFloat(r) : parseInt(r, 10);
          var a = (e.match(/[^0-9]*$/) || "").toString();
          return n[a]
            ? { value: t, unit: a }
            : (console.warn(
                "React Spinners: "
                  .concat(e, " is not a valid css value. Defaulting to ")
                  .concat(t, "px.")
              ),
              { value: t, unit: "px" });
        }
      },
      153: (e, t, n) => {
        "use strict";
        var r = n(43),
          a = Symbol.for("react.element"),
          i = Symbol.for("react.fragment"),
          o = Object.prototype.hasOwnProperty,
          l = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
          s = { key: !0, ref: !0, __self: !0, __source: !0 };
        function c(e, t, n) {
          var r,
            i = {},
            c = null,
            u = null;
          for (r in (void 0 !== n && (c = "" + n),
          void 0 !== t.key && (c = "" + t.key),
          void 0 !== t.ref && (u = t.ref),
          t))
            o.call(t, r) && !s.hasOwnProperty(r) && (i[r] = t[r]);
          if (e && e.defaultProps) for (r in (t = e.defaultProps)) void 0 === i[r] && (i[r] = t[r]);
          return { $$typeof: a, type: e, key: c, ref: u, props: i, _owner: l.current };
        }
        (t.jsx = c), (t.jsxs = c);
      },
      202: (e, t) => {
        "use strict";
        var n = Symbol.for("react.element"),
          r = Symbol.for("react.portal"),
          a = Symbol.for("react.fragment"),
          i = Symbol.for("react.strict_mode"),
          o = Symbol.for("react.profiler"),
          l = Symbol.for("react.provider"),
          s = Symbol.for("react.context"),
          c = Symbol.for("react.forward_ref"),
          u = Symbol.for("react.suspense"),
          d = Symbol.for("react.memo"),
          f = Symbol.for("react.lazy"),
          p = Symbol.iterator;
        var m = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          h = Object.assign,
          v = {};
        function g(e, t, n) {
          (this.props = e), (this.context = t), (this.refs = v), (this.updater = n || m);
        }
        function b() {}
        function y(e, t, n) {
          (this.props = e), (this.context = t), (this.refs = v), (this.updater = n || m);
        }
        (g.prototype.isReactComponent = {}),
          (g.prototype.setState = function (e, t) {
            if ("object" !== typeof e && "function" !== typeof e && null != e)
              throw Error(
                "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
              );
            this.updater.enqueueSetState(this, e, t, "setState");
          }),
          (g.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate");
          }),
          (b.prototype = g.prototype);
        var w = (y.prototype = new b());
        (w.constructor = y), h(w, g.prototype), (w.isPureReactComponent = !0);
        var x = Array.isArray,
          S = Object.prototype.hasOwnProperty,
          k = { current: null },
          E = { key: !0, ref: !0, __self: !0, __source: !0 };
        function C(e, t, r) {
          var a,
            i = {},
            o = null,
            l = null;
          if (null != t)
            for (a in (void 0 !== t.ref && (l = t.ref), void 0 !== t.key && (o = "" + t.key), t))
              S.call(t, a) && !E.hasOwnProperty(a) && (i[a] = t[a]);
          var s = arguments.length - 2;
          if (1 === s) i.children = r;
          else if (1 < s) {
            for (var c = Array(s), u = 0; u < s; u++) c[u] = arguments[u + 2];
            i.children = c;
          }
          if (e && e.defaultProps) for (a in (s = e.defaultProps)) void 0 === i[a] && (i[a] = s[a]);
          return { $$typeof: n, type: e, key: o, ref: l, props: i, _owner: k.current };
        }
        function T(e) {
          return "object" === typeof e && null !== e && e.$$typeof === n;
        }
        var P = /\/+/g;
        function N(e, t) {
          return "object" === typeof e && null !== e && null != e.key
            ? (function (e) {
                var t = { "=": "=0", ":": "=2" };
                return (
                  "$" +
                  e.replace(/[=:]/g, function (e) {
                    return t[e];
                  })
                );
              })("" + e.key)
            : t.toString(36);
        }
        function O(e, t, a, i, o) {
          var l = typeof e;
          ("undefined" !== l && "boolean" !== l) || (e = null);
          var s = !1;
          if (null === e) s = !0;
          else
            switch (l) {
              case "string":
              case "number":
                s = !0;
                break;
              case "object":
                switch (e.$$typeof) {
                  case n:
                  case r:
                    s = !0;
                }
            }
          if (s)
            return (
              (o = o((s = e))),
              (e = "" === i ? "." + N(s, 0) : i),
              x(o)
                ? ((a = ""),
                  null != e && (a = e.replace(P, "$&/") + "/"),
                  O(o, t, a, "", function (e) {
                    return e;
                  }))
                : null != o &&
                  (T(o) &&
                    (o = (function (e, t) {
                      return {
                        $$typeof: n,
                        type: e.type,
                        key: t,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner,
                      };
                    })(
                      o,
                      a +
                        (!o.key || (s && s.key === o.key)
                          ? ""
                          : ("" + o.key).replace(P, "$&/") + "/") +
                        e
                    )),
                  t.push(o)),
              1
            );
          if (((s = 0), (i = "" === i ? "." : i + ":"), x(e)))
            for (var c = 0; c < e.length; c++) {
              var u = i + N((l = e[c]), c);
              s += O(l, t, a, u, o);
            }
          else if (
            ((u = (function (e) {
              return null === e || "object" !== typeof e
                ? null
                : "function" === typeof (e = (p && e[p]) || e["@@iterator"])
                ? e
                : null;
            })(e)),
            "function" === typeof u)
          )
            for (e = u.call(e), c = 0; !(l = e.next()).done; )
              s += O((l = l.value), t, a, (u = i + N(l, c++)), o);
          else if ("object" === l)
            throw (
              ((t = String(e)),
              Error(
                "Objects are not valid as a React child (found: " +
                  ("[object Object]" === t
                    ? "object with keys {" + Object.keys(e).join(", ") + "}"
                    : t) +
                  "). If you meant to render a collection of children, use an array instead."
              ))
            );
          return s;
        }
        function M(e, t, n) {
          if (null == e) return e;
          var r = [],
            a = 0;
          return (
            O(e, r, "", "", function (e) {
              return t.call(n, e, a++);
            }),
            r
          );
        }
        function _(e) {
          if (-1 === e._status) {
            var t = e._result;
            (t = t()).then(
              function (t) {
                (0 !== e._status && -1 !== e._status) || ((e._status = 1), (e._result = t));
              },
              function (t) {
                (0 !== e._status && -1 !== e._status) || ((e._status = 2), (e._result = t));
              }
            ),
              -1 === e._status && ((e._status = 0), (e._result = t));
          }
          if (1 === e._status) return e._result.default;
          throw e._result;
        }
        var j = { current: null },
          L = { transition: null },
          z = { ReactCurrentDispatcher: j, ReactCurrentBatchConfig: L, ReactCurrentOwner: k };
        function A() {
          throw Error("act(...) is not supported in production builds of React.");
        }
        (t.Children = {
          map: M,
          forEach: function (e, t, n) {
            M(
              e,
              function () {
                t.apply(this, arguments);
              },
              n
            );
          },
          count: function (e) {
            var t = 0;
            return (
              M(e, function () {
                t++;
              }),
              t
            );
          },
          toArray: function (e) {
            return (
              M(e, function (e) {
                return e;
              }) || []
            );
          },
          only: function (e) {
            if (!T(e))
              throw Error("React.Children.only expected to receive a single React element child.");
            return e;
          },
        }),
          (t.Component = g),
          (t.Fragment = a),
          (t.Profiler = o),
          (t.PureComponent = y),
          (t.StrictMode = i),
          (t.Suspense = u),
          (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = z),
          (t.act = A),
          (t.cloneElement = function (e, t, r) {
            if (null === e || void 0 === e)
              throw Error(
                "React.cloneElement(...): The argument must be a React element, but you passed " +
                  e +
                  "."
              );
            var a = h({}, e.props),
              i = e.key,
              o = e.ref,
              l = e._owner;
            if (null != t) {
              if (
                (void 0 !== t.ref && ((o = t.ref), (l = k.current)),
                void 0 !== t.key && (i = "" + t.key),
                e.type && e.type.defaultProps)
              )
                var s = e.type.defaultProps;
              for (c in t)
                S.call(t, c) &&
                  !E.hasOwnProperty(c) &&
                  (a[c] = void 0 === t[c] && void 0 !== s ? s[c] : t[c]);
            }
            var c = arguments.length - 2;
            if (1 === c) a.children = r;
            else if (1 < c) {
              s = Array(c);
              for (var u = 0; u < c; u++) s[u] = arguments[u + 2];
              a.children = s;
            }
            return { $$typeof: n, type: e.type, key: i, ref: o, props: a, _owner: l };
          }),
          (t.createContext = function (e) {
            return (
              ((e = {
                $$typeof: s,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
                _defaultValue: null,
                _globalName: null,
              }).Provider = { $$typeof: l, _context: e }),
              (e.Consumer = e)
            );
          }),
          (t.createElement = C),
          (t.createFactory = function (e) {
            var t = C.bind(null, e);
            return (t.type = e), t;
          }),
          (t.createRef = function () {
            return { current: null };
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: c, render: e };
          }),
          (t.isValidElement = T),
          (t.lazy = function (e) {
            return { $$typeof: f, _payload: { _status: -1, _result: e }, _init: _ };
          }),
          (t.memo = function (e, t) {
            return { $$typeof: d, type: e, compare: void 0 === t ? null : t };
          }),
          (t.startTransition = function (e) {
            var t = L.transition;
            L.transition = {};
            try {
              e();
            } finally {
              L.transition = t;
            }
          }),
          (t.unstable_act = A),
          (t.useCallback = function (e, t) {
            return j.current.useCallback(e, t);
          }),
          (t.useContext = function (e) {
            return j.current.useContext(e);
          }),
          (t.useDebugValue = function () {}),
          (t.useDeferredValue = function (e) {
            return j.current.useDeferredValue(e);
          }),
          (t.useEffect = function (e, t) {
            return j.current.useEffect(e, t);
          }),
          (t.useId = function () {
            return j.current.useId();
          }),
          (t.useImperativeHandle = function (e, t, n) {
            return j.current.useImperativeHandle(e, t, n);
          }),
          (t.useInsertionEffect = function (e, t) {
            return j.current.useInsertionEffect(e, t);
          }),
          (t.useLayoutEffect = function (e, t) {
            return j.current.useLayoutEffect(e, t);
          }),
          (t.useMemo = function (e, t) {
            return j.current.useMemo(e, t);
          }),
          (t.useReducer = function (e, t, n) {
            return j.current.useReducer(e, t, n);
          }),
          (t.useRef = function (e) {
            return j.current.useRef(e);
          }),
          (t.useState = function (e) {
            return j.current.useState(e);
          }),
          (t.useSyncExternalStore = function (e, t, n) {
            return j.current.useSyncExternalStore(e, t, n);
          }),
          (t.useTransition = function () {
            return j.current.useTransition();
          }),
          (t.version = "18.3.1");
      },
      43: (e, t, n) => {
        "use strict";
        e.exports = n(202);
      },
      579: (e, t, n) => {
        "use strict";
        e.exports = n(153);
      },
      234: (e, t) => {
        "use strict";
        function n(e, t) {
          var n = e.length;
          e.push(t);
          e: for (; 0 < n; ) {
            var r = (n - 1) >>> 1,
              a = e[r];
            if (!(0 < i(a, t))) break e;
            (e[r] = t), (e[n] = a), (n = r);
          }
        }
        function r(e) {
          return 0 === e.length ? null : e[0];
        }
        function a(e) {
          if (0 === e.length) return null;
          var t = e[0],
            n = e.pop();
          if (n !== t) {
            e[0] = n;
            e: for (var r = 0, a = e.length, o = a >>> 1; r < o; ) {
              var l = 2 * (r + 1) - 1,
                s = e[l],
                c = l + 1,
                u = e[c];
              if (0 > i(s, n))
                c < a && 0 > i(u, s)
                  ? ((e[r] = u), (e[c] = n), (r = c))
                  : ((e[r] = s), (e[l] = n), (r = l));
              else {
                if (!(c < a && 0 > i(u, n))) break e;
                (e[r] = u), (e[c] = n), (r = c);
              }
            }
          }
          return t;
        }
        function i(e, t) {
          var n = e.sortIndex - t.sortIndex;
          return 0 !== n ? n : e.id - t.id;
        }
        if ("object" === typeof performance && "function" === typeof performance.now) {
          var o = performance;
          t.unstable_now = function () {
            return o.now();
          };
        } else {
          var l = Date,
            s = l.now();
          t.unstable_now = function () {
            return l.now() - s;
          };
        }
        var c = [],
          u = [],
          d = 1,
          f = null,
          p = 3,
          m = !1,
          h = !1,
          v = !1,
          g = "function" === typeof setTimeout ? setTimeout : null,
          b = "function" === typeof clearTimeout ? clearTimeout : null,
          y = "undefined" !== typeof setImmediate ? setImmediate : null;
        function w(e) {
          for (var t = r(u); null !== t; ) {
            if (null === t.callback) a(u);
            else {
              if (!(t.startTime <= e)) break;
              a(u), (t.sortIndex = t.expirationTime), n(c, t);
            }
            t = r(u);
          }
        }
        function x(e) {
          if (((v = !1), w(e), !h))
            if (null !== r(c)) (h = !0), L(S);
            else {
              var t = r(u);
              null !== t && z(x, t.startTime - e);
            }
        }
        function S(e, n) {
          (h = !1), v && ((v = !1), b(T), (T = -1)), (m = !0);
          var i = p;
          try {
            for (w(n), f = r(c); null !== f && (!(f.expirationTime > n) || (e && !O())); ) {
              var o = f.callback;
              if ("function" === typeof o) {
                (f.callback = null), (p = f.priorityLevel);
                var l = o(f.expirationTime <= n);
                (n = t.unstable_now()),
                  "function" === typeof l ? (f.callback = l) : f === r(c) && a(c),
                  w(n);
              } else a(c);
              f = r(c);
            }
            if (null !== f) var s = !0;
            else {
              var d = r(u);
              null !== d && z(x, d.startTime - n), (s = !1);
            }
            return s;
          } finally {
            (f = null), (p = i), (m = !1);
          }
        }
        "undefined" !== typeof navigator &&
          void 0 !== navigator.scheduling &&
          void 0 !== navigator.scheduling.isInputPending &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        var k,
          E = !1,
          C = null,
          T = -1,
          P = 5,
          N = -1;
        function O() {
          return !(t.unstable_now() - N < P);
        }
        function M() {
          if (null !== C) {
            var e = t.unstable_now();
            N = e;
            var n = !0;
            try {
              n = C(!0, e);
            } finally {
              n ? k() : ((E = !1), (C = null));
            }
          } else E = !1;
        }
        if ("function" === typeof y)
          k = function () {
            y(M);
          };
        else if ("undefined" !== typeof MessageChannel) {
          var _ = new MessageChannel(),
            j = _.port2;
          (_.port1.onmessage = M),
            (k = function () {
              j.postMessage(null);
            });
        } else
          k = function () {
            g(M, 0);
          };
        function L(e) {
          (C = e), E || ((E = !0), k());
        }
        function z(e, n) {
          T = g(function () {
            e(t.unstable_now());
          }, n);
        }
        (t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function (e) {
            e.callback = null;
          }),
          (t.unstable_continueExecution = function () {
            h || m || ((h = !0), L(S));
          }),
          (t.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (P = 0 < e ? Math.floor(1e3 / e) : 5);
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return p;
          }),
          (t.unstable_getFirstCallbackNode = function () {
            return r(c);
          }),
          (t.unstable_next = function (e) {
            switch (p) {
              case 1:
              case 2:
              case 3:
                var t = 3;
                break;
              default:
                t = p;
            }
            var n = p;
            p = t;
            try {
              return e();
            } finally {
              p = n;
            }
          }),
          (t.unstable_pauseExecution = function () {}),
          (t.unstable_requestPaint = function () {}),
          (t.unstable_runWithPriority = function (e, t) {
            switch (e) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                e = 3;
            }
            var n = p;
            p = e;
            try {
              return t();
            } finally {
              p = n;
            }
          }),
          (t.unstable_scheduleCallback = function (e, a, i) {
            var o = t.unstable_now();
            switch (
              ("object" === typeof i && null !== i
                ? (i = "number" === typeof (i = i.delay) && 0 < i ? o + i : o)
                : (i = o),
              e)
            ) {
              case 1:
                var l = -1;
                break;
              case 2:
                l = 250;
                break;
              case 5:
                l = 1073741823;
                break;
              case 4:
                l = 1e4;
                break;
              default:
                l = 5e3;
            }
            return (
              (e = {
                id: d++,
                callback: a,
                priorityLevel: e,
                startTime: i,
                expirationTime: (l = i + l),
                sortIndex: -1,
              }),
              i > o
                ? ((e.sortIndex = i),
                  n(u, e),
                  null === r(c) && e === r(u) && (v ? (b(T), (T = -1)) : (v = !0), z(x, i - o)))
                : ((e.sortIndex = l), n(c, e), h || m || ((h = !0), L(S))),
              e
            );
          }),
          (t.unstable_shouldYield = O),
          (t.unstable_wrapCallback = function (e) {
            var t = p;
            return function () {
              var n = p;
              p = t;
              try {
                return e.apply(this, arguments);
              } finally {
                p = n;
              }
            };
          });
      },
      853: (e, t, n) => {
        "use strict";
        e.exports = n(234);
      },
    },
    t = {};
  function n(r) {
    var a = t[r];
    if (void 0 !== a) return a.exports;
    var i = (t[r] = { exports: {} });
    return e[r].call(i.exports, i, i.exports, n), i.exports;
  }
  (n.n = (e) => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return n.d(t, { a: t }), t;
  }),
    (() => {
      var e,
        t = Object.getPrototypeOf ? (e) => Object.getPrototypeOf(e) : (e) => e.__proto__;
      n.t = function (r, a) {
        if ((1 & a && (r = this(r)), 8 & a)) return r;
        if ("object" === typeof r && r) {
          if (4 & a && r.__esModule) return r;
          if (16 & a && "function" === typeof r.then) return r;
        }
        var i = Object.create(null);
        n.r(i);
        var o = {};
        e = e || [null, t({}), t([]), t(t)];
        for (var l = 2 & a && r; "object" == typeof l && !~e.indexOf(l); l = t(l))
          Object.getOwnPropertyNames(l).forEach((e) => (o[e] = () => r[e]));
        return (o.default = () => r), n.d(i, o), i;
      };
    })(),
    (n.d = (e, t) => {
      for (var r in t)
        n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (n.r = (e) => {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.p = "/side-street-site/"),
    (() => {
      "use strict";
      var e,
        t = n(43),
        r = n.t(t, 2),
        a = n(391),
        i = n(950),
        o = n.t(i, 2);
      function l() {
        return (
          (l = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          l.apply(this, arguments)
        );
      }
      !(function (e) {
        (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
      })(e || (e = {}));
      const s = "popstate";
      function c(e, t) {
        if (!1 === e || null === e || "undefined" === typeof e) throw new Error(t);
      }
      function u(e, t) {
        if (!e) {
          "undefined" !== typeof console && console.warn(t);
          try {
            throw new Error(t);
          } catch (n) {}
        }
      }
      function d(e, t) {
        return { usr: e.state, key: e.key, idx: t };
      }
      function f(e, t, n, r) {
        return (
          void 0 === n && (n = null),
          l(
            { pathname: "string" === typeof e ? e : e.pathname, search: "", hash: "" },
            "string" === typeof t ? m(t) : t,
            { state: n, key: (t && t.key) || r || Math.random().toString(36).substr(2, 8) }
          )
        );
      }
      function p(e) {
        let { pathname: t = "/", search: n = "", hash: r = "" } = e;
        return (
          n && "?" !== n && (t += "?" === n.charAt(0) ? n : "?" + n),
          r && "#" !== r && (t += "#" === r.charAt(0) ? r : "#" + r),
          t
        );
      }
      function m(e) {
        let t = {};
        if (e) {
          let n = e.indexOf("#");
          n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
          let r = e.indexOf("?");
          r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))), e && (t.pathname = e);
        }
        return t;
      }
      function h(t, n, r, a) {
        void 0 === a && (a = {});
        let { window: i = document.defaultView, v5Compat: o = !1 } = a,
          u = i.history,
          m = e.Pop,
          h = null,
          v = g();
        function g() {
          return (u.state || { idx: null }).idx;
        }
        function b() {
          m = e.Pop;
          let t = g(),
            n = null == t ? null : t - v;
          (v = t), h && h({ action: m, location: w.location, delta: n });
        }
        function y(e) {
          let t = "null" !== i.location.origin ? i.location.origin : i.location.href,
            n = "string" === typeof e ? e : p(e);
          return (
            (n = n.replace(/ $/, "%20")),
            c(t, "No window.location.(origin|href) available to create URL for href: " + n),
            new URL(n, t)
          );
        }
        null == v && ((v = 0), u.replaceState(l({}, u.state, { idx: v }), ""));
        let w = {
          get action() {
            return m;
          },
          get location() {
            return t(i, u);
          },
          listen(e) {
            if (h) throw new Error("A history only accepts one active listener");
            return (
              i.addEventListener(s, b),
              (h = e),
              () => {
                i.removeEventListener(s, b), (h = null);
              }
            );
          },
          createHref: (e) => n(i, e),
          createURL: y,
          encodeLocation(e) {
            let t = y(e);
            return { pathname: t.pathname, search: t.search, hash: t.hash };
          },
          push: function (t, n) {
            m = e.Push;
            let a = f(w.location, t, n);
            r && r(a, t), (v = g() + 1);
            let l = d(a, v),
              s = w.createHref(a);
            try {
              u.pushState(l, "", s);
            } catch (c) {
              if (c instanceof DOMException && "DataCloneError" === c.name) throw c;
              i.location.assign(s);
            }
            o && h && h({ action: m, location: w.location, delta: 1 });
          },
          replace: function (t, n) {
            m = e.Replace;
            let a = f(w.location, t, n);
            r && r(a, t), (v = g());
            let i = d(a, v),
              l = w.createHref(a);
            u.replaceState(i, "", l), o && h && h({ action: m, location: w.location, delta: 0 });
          },
          go: (e) => u.go(e),
        };
        return w;
      }
      var v;
      !(function (e) {
        (e.data = "data"),
          (e.deferred = "deferred"),
          (e.redirect = "redirect"),
          (e.error = "error");
      })(v || (v = {}));
      new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);
      function g(e, t, n) {
        void 0 === n && (n = "/");
        let r = _(("string" === typeof t ? m(t) : t).pathname || "/", n);
        if (null == r) return null;
        let a = b(e);
        !(function (e) {
          e.sort((e, t) =>
            e.score !== t.score
              ? t.score - e.score
              : (function (e, t) {
                  let n = e.length === t.length && e.slice(0, -1).every((e, n) => e === t[n]);
                  return n ? e[e.length - 1] - t[t.length - 1] : 0;
                })(
                  e.routesMeta.map((e) => e.childrenIndex),
                  t.routesMeta.map((e) => e.childrenIndex)
                )
          );
        })(a);
        let i = null;
        for (let o = 0; null == i && o < a.length; ++o) {
          let e = M(r);
          i = N(a[o], e);
        }
        return i;
      }
      function b(e, t, n, r) {
        void 0 === t && (t = []), void 0 === n && (n = []), void 0 === r && (r = "");
        let a = (e, a, i) => {
          let o = {
            relativePath: void 0 === i ? e.path || "" : i,
            caseSensitive: !0 === e.caseSensitive,
            childrenIndex: a,
            route: e,
          };
          o.relativePath.startsWith("/") &&
            (c(
              o.relativePath.startsWith(r),
              'Absolute route path "' +
                o.relativePath +
                '" nested under path "' +
                r +
                '" is not valid. An absolute child route path must start with the combined path of all its parent routes.'
            ),
            (o.relativePath = o.relativePath.slice(r.length)));
          let l = I([r, o.relativePath]),
            s = n.concat(o);
          e.children &&
            e.children.length > 0 &&
            (c(
              !0 !== e.index,
              'Index routes must not have child routes. Please remove all child routes from route path "' +
                l +
                '".'
            ),
            b(e.children, t, s, l)),
            (null != e.path || e.index) && t.push({ path: l, score: P(l, e.index), routesMeta: s });
        };
        return (
          e.forEach((e, t) => {
            var n;
            if ("" !== e.path && null != (n = e.path) && n.includes("?"))
              for (let r of y(e.path)) a(e, t, r);
            else a(e, t);
          }),
          t
        );
      }
      function y(e) {
        let t = e.split("/");
        if (0 === t.length) return [];
        let [n, ...r] = t,
          a = n.endsWith("?"),
          i = n.replace(/\?$/, "");
        if (0 === r.length) return a ? [i, ""] : [i];
        let o = y(r.join("/")),
          l = [];
        return (
          l.push(...o.map((e) => ("" === e ? i : [i, e].join("/")))),
          a && l.push(...o),
          l.map((t) => (e.startsWith("/") && "" === t ? "/" : t))
        );
      }
      const w = /^:[\w-]+$/,
        x = 3,
        S = 2,
        k = 1,
        E = 10,
        C = -2,
        T = (e) => "*" === e;
      function P(e, t) {
        let n = e.split("/"),
          r = n.length;
        return (
          n.some(T) && (r += C),
          t && (r += S),
          n.filter((e) => !T(e)).reduce((e, t) => e + (w.test(t) ? x : "" === t ? k : E), r)
        );
      }
      function N(e, t) {
        let { routesMeta: n } = e,
          r = {},
          a = "/",
          i = [];
        for (let o = 0; o < n.length; ++o) {
          let e = n[o],
            l = o === n.length - 1,
            s = "/" === a ? t : t.slice(a.length) || "/",
            c = O({ path: e.relativePath, caseSensitive: e.caseSensitive, end: l }, s);
          if (!c) return null;
          Object.assign(r, c.params);
          let u = e.route;
          i.push({
            params: r,
            pathname: I([a, c.pathname]),
            pathnameBase: R(I([a, c.pathnameBase])),
            route: u,
          }),
            "/" !== c.pathnameBase && (a = I([a, c.pathnameBase]));
        }
        return i;
      }
      function O(e, t) {
        "string" === typeof e && (e = { path: e, caseSensitive: !1, end: !0 });
        let [n, r] = (function (e, t, n) {
            void 0 === t && (t = !1);
            void 0 === n && (n = !0);
            u(
              "*" === e || !e.endsWith("*") || e.endsWith("/*"),
              'Route path "' +
                e +
                '" will be treated as if it were "' +
                e.replace(/\*$/, "/*") +
                '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "' +
                e.replace(/\*$/, "/*") +
                '".'
            );
            let r = [],
              a =
                "^" +
                e
                  .replace(/\/*\*?$/, "")
                  .replace(/^\/*/, "/")
                  .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
                  .replace(
                    /\/:([\w-]+)(\?)?/g,
                    (e, t, n) => (
                      r.push({ paramName: t, isOptional: null != n }),
                      n ? "/?([^\\/]+)?" : "/([^\\/]+)"
                    )
                  );
            e.endsWith("*")
              ? (r.push({ paramName: "*" }),
                (a += "*" === e || "/*" === e ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
              : n
              ? (a += "\\/*$")
              : "" !== e && "/" !== e && (a += "(?:(?=\\/|$))");
            let i = new RegExp(a, t ? void 0 : "i");
            return [i, r];
          })(e.path, e.caseSensitive, e.end),
          a = t.match(n);
        if (!a) return null;
        let i = a[0],
          o = i.replace(/(.)\/+$/, "$1"),
          l = a.slice(1),
          s = r.reduce((e, t, n) => {
            let { paramName: r, isOptional: a } = t;
            if ("*" === r) {
              let e = l[n] || "";
              o = i.slice(0, i.length - e.length).replace(/(.)\/+$/, "$1");
            }
            const s = l[n];
            return (e[r] = a && !s ? void 0 : (s || "").replace(/%2F/g, "/")), e;
          }, {});
        return { params: s, pathname: i, pathnameBase: o, pattern: e };
      }
      function M(e) {
        try {
          return e
            .split("/")
            .map((e) => decodeURIComponent(e).replace(/\//g, "%2F"))
            .join("/");
        } catch (t) {
          return (
            u(
              !1,
              'The URL path "' +
                e +
                '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (' +
                t +
                ")."
            ),
            e
          );
        }
      }
      function _(e, t) {
        if ("/" === t) return e;
        if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
        let n = t.endsWith("/") ? t.length - 1 : t.length,
          r = e.charAt(n);
        return r && "/" !== r ? null : e.slice(n) || "/";
      }
      function j(e, t, n, r) {
        return (
          "Cannot include a '" +
          e +
          "' character in a manually specified `to." +
          t +
          "` field [" +
          JSON.stringify(r) +
          "].  Please separate it out to the `to." +
          n +
          '` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'
        );
      }
      function L(e) {
        return e.filter((e, t) => 0 === t || (e.route.path && e.route.path.length > 0));
      }
      function z(e, t) {
        let n = L(e);
        return t
          ? n.map((t, n) => (n === e.length - 1 ? t.pathname : t.pathnameBase))
          : n.map((e) => e.pathnameBase);
      }
      function A(e, t, n, r) {
        let a;
        void 0 === r && (r = !1),
          "string" === typeof e
            ? (a = m(e))
            : ((a = l({}, e)),
              c(!a.pathname || !a.pathname.includes("?"), j("?", "pathname", "search", a)),
              c(!a.pathname || !a.pathname.includes("#"), j("#", "pathname", "hash", a)),
              c(!a.search || !a.search.includes("#"), j("#", "search", "hash", a)));
        let i,
          o = "" === e || "" === a.pathname,
          s = o ? "/" : a.pathname;
        if (null == s) i = n;
        else {
          let e = t.length - 1;
          if (!r && s.startsWith("..")) {
            let t = s.split("/");
            for (; ".." === t[0]; ) t.shift(), (e -= 1);
            a.pathname = t.join("/");
          }
          i = e >= 0 ? t[e] : "/";
        }
        let u = (function (e, t) {
            void 0 === t && (t = "/");
            let { pathname: n, search: r = "", hash: a = "" } = "string" === typeof e ? m(e) : e,
              i = n
                ? n.startsWith("/")
                  ? n
                  : (function (e, t) {
                      let n = t.replace(/\/+$/, "").split("/");
                      return (
                        e.split("/").forEach((e) => {
                          ".." === e ? n.length > 1 && n.pop() : "." !== e && n.push(e);
                        }),
                        n.length > 1 ? n.join("/") : "/"
                      );
                    })(n, t)
                : t;
            return { pathname: i, search: F(r), hash: D(a) };
          })(a, i),
          d = s && "/" !== s && s.endsWith("/"),
          f = (o || "." === s) && n.endsWith("/");
        return u.pathname.endsWith("/") || (!d && !f) || (u.pathname += "/"), u;
      }
      const I = (e) => e.join("/").replace(/\/\/+/g, "/"),
        R = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
        F = (e) => (e && "?" !== e ? (e.startsWith("?") ? e : "?" + e) : ""),
        D = (e) => (e && "#" !== e ? (e.startsWith("#") ? e : "#" + e) : "");
      Error;
      function B(e) {
        return (
          null != e &&
          "number" === typeof e.status &&
          "string" === typeof e.statusText &&
          "boolean" === typeof e.internal &&
          "data" in e
        );
      }
      const H = ["post", "put", "patch", "delete"],
        V = (new Set(H), ["get", ...H]);
      new Set(V), new Set([301, 302, 303, 307, 308]), new Set([307, 308]);
      Symbol("deferred");
      function W() {
        return (
          (W = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          W.apply(this, arguments)
        );
      }
      const G = t.createContext(null);
      const U = t.createContext(null);
      const $ = t.createContext(null);
      const Y = t.createContext(null);
      const q = t.createContext({ outlet: null, matches: [], isDataRoute: !1 });
      const Q = t.createContext(null);
      function X() {
        return null != t.useContext(Y);
      }
      function K() {
        return X() || c(!1), t.useContext(Y).location;
      }
      function J(e) {
        t.useContext($).static || t.useLayoutEffect(e);
      }
      function Z() {
        let { isDataRoute: e } = t.useContext(q);
        return e
          ? (function () {
              let { router: e } = ce(le.UseNavigateStable),
                n = de(se.UseNavigateStable),
                r = t.useRef(!1);
              return (
                J(() => {
                  r.current = !0;
                }),
                t.useCallback(
                  function (t, a) {
                    void 0 === a && (a = {}),
                      r.current &&
                        ("number" === typeof t
                          ? e.navigate(t)
                          : e.navigate(t, W({ fromRouteId: n }, a)));
                  },
                  [e, n]
                )
              );
            })()
          : (function () {
              X() || c(!1);
              let e = t.useContext(G),
                { basename: n, future: r, navigator: a } = t.useContext($),
                { matches: i } = t.useContext(q),
                { pathname: o } = K(),
                l = JSON.stringify(z(i, r.v7_relativeSplatPath)),
                s = t.useRef(!1);
              return (
                J(() => {
                  s.current = !0;
                }),
                t.useCallback(
                  function (t, r) {
                    if ((void 0 === r && (r = {}), !s.current)) return;
                    if ("number" === typeof t) return void a.go(t);
                    let i = A(t, JSON.parse(l), o, "path" === r.relative);
                    null == e &&
                      "/" !== n &&
                      (i.pathname = "/" === i.pathname ? n : I([n, i.pathname])),
                      (r.replace ? a.replace : a.push)(i, r.state, r);
                  },
                  [n, a, l, o, e]
                )
              );
            })();
      }
      function ee(e, n) {
        let { relative: r } = void 0 === n ? {} : n,
          { future: a } = t.useContext($),
          { matches: i } = t.useContext(q),
          { pathname: o } = K(),
          l = JSON.stringify(z(i, a.v7_relativeSplatPath));
        return t.useMemo(() => A(e, JSON.parse(l), o, "path" === r), [e, l, o, r]);
      }
      function te(n, r, a, i) {
        X() || c(!1);
        let { navigator: o } = t.useContext($),
          { matches: l } = t.useContext(q),
          s = l[l.length - 1],
          u = s ? s.params : {},
          d = (s && s.pathname, s ? s.pathnameBase : "/");
        s && s.route;
        let f,
          p = K();
        if (r) {
          var h;
          let e = "string" === typeof r ? m(r) : r;
          "/" === d || (null == (h = e.pathname) ? void 0 : h.startsWith(d)) || c(!1), (f = e);
        } else f = p;
        let v = f.pathname || "/",
          b = v;
        if ("/" !== d) {
          let e = d.replace(/^\//, "").split("/");
          b = "/" + v.replace(/^\//, "").split("/").slice(e.length).join("/");
        }
        let y = g(n, { pathname: b });
        let w = oe(
          y &&
            y.map((e) =>
              Object.assign({}, e, {
                params: Object.assign({}, u, e.params),
                pathname: I([
                  d,
                  o.encodeLocation ? o.encodeLocation(e.pathname).pathname : e.pathname,
                ]),
                pathnameBase:
                  "/" === e.pathnameBase
                    ? d
                    : I([
                        d,
                        o.encodeLocation
                          ? o.encodeLocation(e.pathnameBase).pathname
                          : e.pathnameBase,
                      ]),
              })
            ),
          l,
          a,
          i
        );
        return r && w
          ? t.createElement(
              Y.Provider,
              {
                value: {
                  location: W(
                    { pathname: "/", search: "", hash: "", state: null, key: "default" },
                    f
                  ),
                  navigationType: e.Pop,
                },
              },
              w
            )
          : w;
      }
      function ne() {
        let e = (function () {
            var e;
            let n = t.useContext(Q),
              r = ue(se.UseRouteError),
              a = de(se.UseRouteError);
            if (void 0 !== n) return n;
            return null == (e = r.errors) ? void 0 : e[a];
          })(),
          n = B(e)
            ? e.status + " " + e.statusText
            : e instanceof Error
            ? e.message
            : JSON.stringify(e),
          r = e instanceof Error ? e.stack : null,
          a = "rgba(200,200,200, 0.5)",
          i = { padding: "0.5rem", backgroundColor: a };
        return t.createElement(
          t.Fragment,
          null,
          t.createElement("h2", null, "Unexpected Application Error!"),
          t.createElement("h3", { style: { fontStyle: "italic" } }, n),
          r ? t.createElement("pre", { style: i }, r) : null,
          null
        );
      }
      const re = t.createElement(ne, null);
      class ae extends t.Component {
        constructor(e) {
          super(e),
            (this.state = { location: e.location, revalidation: e.revalidation, error: e.error });
        }
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        static getDerivedStateFromProps(e, t) {
          return t.location !== e.location ||
            ("idle" !== t.revalidation && "idle" === e.revalidation)
            ? { error: e.error, location: e.location, revalidation: e.revalidation }
            : {
                error: void 0 !== e.error ? e.error : t.error,
                location: t.location,
                revalidation: e.revalidation || t.revalidation,
              };
        }
        componentDidCatch(e, t) {
          console.error("React Router caught the following error during render", e, t);
        }
        render() {
          return void 0 !== this.state.error
            ? t.createElement(
                q.Provider,
                { value: this.props.routeContext },
                t.createElement(Q.Provider, {
                  value: this.state.error,
                  children: this.props.component,
                })
              )
            : this.props.children;
        }
      }
      function ie(e) {
        let { routeContext: n, match: r, children: a } = e,
          i = t.useContext(G);
        return (
          i &&
            i.static &&
            i.staticContext &&
            (r.route.errorElement || r.route.ErrorBoundary) &&
            (i.staticContext._deepestRenderedBoundaryId = r.route.id),
          t.createElement(q.Provider, { value: n }, a)
        );
      }
      function oe(e, n, r, a) {
        var i;
        if (
          (void 0 === n && (n = []),
          void 0 === r && (r = null),
          void 0 === a && (a = null),
          null == e)
        ) {
          var o;
          if (null == (o = r) || !o.errors) return null;
          e = r.matches;
        }
        let l = e,
          s = null == (i = r) ? void 0 : i.errors;
        if (null != s) {
          let e = l.findIndex((e) => e.route.id && void 0 !== (null == s ? void 0 : s[e.route.id]));
          e >= 0 || c(!1), (l = l.slice(0, Math.min(l.length, e + 1)));
        }
        let u = !1,
          d = -1;
        if (r && a && a.v7_partialHydration)
          for (let t = 0; t < l.length; t++) {
            let e = l[t];
            if (
              ((e.route.HydrateFallback || e.route.hydrateFallbackElement) && (d = t), e.route.id)
            ) {
              let { loaderData: t, errors: n } = r,
                a = e.route.loader && void 0 === t[e.route.id] && (!n || void 0 === n[e.route.id]);
              if (e.route.lazy || a) {
                (u = !0), (l = d >= 0 ? l.slice(0, d + 1) : [l[0]]);
                break;
              }
            }
          }
        return l.reduceRight((e, a, i) => {
          let o,
            c = !1,
            f = null,
            p = null;
          var m;
          r &&
            ((o = s && a.route.id ? s[a.route.id] : void 0),
            (f = a.route.errorElement || re),
            u &&
              (d < 0 && 0 === i
                ? ((m = "route-fallback"), !1 || fe[m] || (fe[m] = !0), (c = !0), (p = null))
                : d === i && ((c = !0), (p = a.route.hydrateFallbackElement || null))));
          let h = n.concat(l.slice(0, i + 1)),
            v = () => {
              let n;
              return (
                (n = o
                  ? f
                  : c
                  ? p
                  : a.route.Component
                  ? t.createElement(a.route.Component, null)
                  : a.route.element
                  ? a.route.element
                  : e),
                t.createElement(ie, {
                  match: a,
                  routeContext: { outlet: e, matches: h, isDataRoute: null != r },
                  children: n,
                })
              );
            };
          return r && (a.route.ErrorBoundary || a.route.errorElement || 0 === i)
            ? t.createElement(ae, {
                location: r.location,
                revalidation: r.revalidation,
                component: f,
                error: o,
                children: v(),
                routeContext: { outlet: null, matches: h, isDataRoute: !0 },
              })
            : v();
        }, null);
      }
      var le = (function (e) {
          return (
            (e.UseBlocker = "useBlocker"),
            (e.UseRevalidator = "useRevalidator"),
            (e.UseNavigateStable = "useNavigate"),
            e
          );
        })(le || {}),
        se = (function (e) {
          return (
            (e.UseBlocker = "useBlocker"),
            (e.UseLoaderData = "useLoaderData"),
            (e.UseActionData = "useActionData"),
            (e.UseRouteError = "useRouteError"),
            (e.UseNavigation = "useNavigation"),
            (e.UseRouteLoaderData = "useRouteLoaderData"),
            (e.UseMatches = "useMatches"),
            (e.UseRevalidator = "useRevalidator"),
            (e.UseNavigateStable = "useNavigate"),
            (e.UseRouteId = "useRouteId"),
            e
          );
        })(se || {});
      function ce(e) {
        let n = t.useContext(G);
        return n || c(!1), n;
      }
      function ue(e) {
        let n = t.useContext(U);
        return n || c(!1), n;
      }
      function de(e) {
        let n = (function (e) {
            let n = t.useContext(q);
            return n || c(!1), n;
          })(),
          r = n.matches[n.matches.length - 1];
        return r.route.id || c(!1), r.route.id;
      }
      const fe = {};
      r.startTransition;
      function pe(e) {
        c(!1);
      }
      function me(n) {
        let {
          basename: r = "/",
          children: a = null,
          location: i,
          navigationType: o = e.Pop,
          navigator: l,
          static: s = !1,
          future: u,
        } = n;
        X() && c(!1);
        let d = r.replace(/^\/*/, "/"),
          f = t.useMemo(
            () => ({
              basename: d,
              navigator: l,
              static: s,
              future: W({ v7_relativeSplatPath: !1 }, u),
            }),
            [d, u, l, s]
          );
        "string" === typeof i && (i = m(i));
        let {
            pathname: p = "/",
            search: h = "",
            hash: v = "",
            state: g = null,
            key: b = "default",
          } = i,
          y = t.useMemo(() => {
            let e = _(p, d);
            return null == e
              ? null
              : {
                  location: { pathname: e, search: h, hash: v, state: g, key: b },
                  navigationType: o,
                };
          }, [d, p, h, v, g, b, o]);
        return null == y
          ? null
          : t.createElement(
              $.Provider,
              { value: f },
              t.createElement(Y.Provider, { children: a, value: y })
            );
      }
      function he(e) {
        let { children: t, location: n } = e;
        return te(ve(t), n);
      }
      new Promise(() => {});
      t.Component;
      function ve(e, n) {
        void 0 === n && (n = []);
        let r = [];
        return (
          t.Children.forEach(e, (e, a) => {
            if (!t.isValidElement(e)) return;
            let i = [...n, a];
            if (e.type === t.Fragment) return void r.push.apply(r, ve(e.props.children, i));
            e.type !== pe && c(!1), e.props.index && e.props.children && c(!1);
            let o = {
              id: e.props.id || i.join("-"),
              caseSensitive: e.props.caseSensitive,
              element: e.props.element,
              Component: e.props.Component,
              index: e.props.index,
              path: e.props.path,
              loader: e.props.loader,
              action: e.props.action,
              errorElement: e.props.errorElement,
              ErrorBoundary: e.props.ErrorBoundary,
              hasErrorBoundary: null != e.props.ErrorBoundary || null != e.props.errorElement,
              shouldRevalidate: e.props.shouldRevalidate,
              handle: e.props.handle,
              lazy: e.props.lazy,
            };
            e.props.children && (o.children = ve(e.props.children, i)), r.push(o);
          }),
          r
        );
      }
      function ge() {
        return (
          (ge = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          ge.apply(this, arguments)
        );
      }
      function be(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = {},
          i = Object.keys(e);
        for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
        return a;
      }
      new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]);
      const ye = [
        "onClick",
        "relative",
        "reloadDocument",
        "replace",
        "state",
        "target",
        "to",
        "preventScrollReset",
        "unstable_viewTransition",
      ];
      try {
        window.__reactRouterVersion = "6";
      } catch (mo) {}
      new Map();
      const we = r.startTransition;
      o.flushSync, r.useId;
      function xe(e) {
        let { basename: n, children: r, future: a, window: i } = e,
          o = t.useRef();
        var l;
        null == o.current &&
          (o.current =
            (void 0 === (l = { window: i, v5Compat: !0 }) && (l = {}),
            h(
              function (e, t) {
                let {
                  pathname: n = "/",
                  search: r = "",
                  hash: a = "",
                } = m(e.location.hash.substr(1));
                return (
                  n.startsWith("/") || n.startsWith(".") || (n = "/" + n),
                  f(
                    "",
                    { pathname: n, search: r, hash: a },
                    (t.state && t.state.usr) || null,
                    (t.state && t.state.key) || "default"
                  )
                );
              },
              function (e, t) {
                let n = e.document.querySelector("base"),
                  r = "";
                if (n && n.getAttribute("href")) {
                  let t = e.location.href,
                    n = t.indexOf("#");
                  r = -1 === n ? t : t.slice(0, n);
                }
                return r + "#" + ("string" === typeof t ? t : p(t));
              },
              function (e, t) {
                u(
                  "/" === e.pathname.charAt(0),
                  "relative pathnames are not supported in hash history.push(" +
                    JSON.stringify(t) +
                    ")"
                );
              },
              l
            )));
        let s = o.current,
          [c, d] = t.useState({ action: s.action, location: s.location }),
          { v7_startTransition: v } = a || {},
          g = t.useCallback(
            (e) => {
              v && we ? we(() => d(e)) : d(e);
            },
            [d, v]
          );
        return (
          t.useLayoutEffect(() => s.listen(g), [s, g]),
          t.createElement(me, {
            basename: n,
            children: r,
            location: c.location,
            navigationType: c.action,
            navigator: s,
            future: a,
          })
        );
      }
      const Se =
          "undefined" !== typeof window &&
          "undefined" !== typeof window.document &&
          "undefined" !== typeof window.document.createElement,
        ke = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
        Ee = t.forwardRef(function (e, n) {
          let r,
            {
              onClick: a,
              relative: i,
              reloadDocument: o,
              replace: l,
              state: s,
              target: u,
              to: d,
              preventScrollReset: f,
              unstable_viewTransition: m,
            } = e,
            h = be(e, ye),
            { basename: v } = t.useContext($),
            g = !1;
          if ("string" === typeof d && ke.test(d) && ((r = d), Se))
            try {
              let e = new URL(window.location.href),
                t = d.startsWith("//") ? new URL(e.protocol + d) : new URL(d),
                n = _(t.pathname, v);
              t.origin === e.origin && null != n ? (d = n + t.search + t.hash) : (g = !0);
            } catch (mo) {}
          let b = (function (e, n) {
              let { relative: r } = void 0 === n ? {} : n;
              X() || c(!1);
              let { basename: a, navigator: i } = t.useContext($),
                { hash: o, pathname: l, search: s } = ee(e, { relative: r }),
                u = l;
              return (
                "/" !== a && (u = "/" === l ? a : I([a, l])),
                i.createHref({ pathname: u, search: s, hash: o })
              );
            })(d, { relative: i }),
            y = (function (e, n) {
              let {
                  target: r,
                  replace: a,
                  state: i,
                  preventScrollReset: o,
                  relative: l,
                  unstable_viewTransition: s,
                } = void 0 === n ? {} : n,
                c = Z(),
                u = K(),
                d = ee(e, { relative: l });
              return t.useCallback(
                (t) => {
                  if (
                    (function (e, t) {
                      return (
                        0 === e.button &&
                        (!t || "_self" === t) &&
                        !(function (e) {
                          return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
                        })(e)
                      );
                    })(t, r)
                  ) {
                    t.preventDefault();
                    let n = void 0 !== a ? a : p(u) === p(d);
                    c(e, {
                      replace: n,
                      state: i,
                      preventScrollReset: o,
                      relative: l,
                      unstable_viewTransition: s,
                    });
                  }
                },
                [u, c, d, a, i, r, e, o, l, s]
              );
            })(d, {
              replace: l,
              state: s,
              target: u,
              preventScrollReset: f,
              relative: i,
              unstable_viewTransition: m,
            });
          return t.createElement(
            "a",
            ge({}, h, {
              href: r || b,
              onClick:
                g || o
                  ? a
                  : function (e) {
                      a && a(e), e.defaultPrevented || y(e);
                    },
              ref: n,
              target: u,
            })
          );
        });
      var Ce, Te;
      (function (e) {
        (e.UseScrollRestoration = "useScrollRestoration"),
          (e.UseSubmit = "useSubmit"),
          (e.UseSubmitFetcher = "useSubmitFetcher"),
          (e.UseFetcher = "useFetcher"),
          (e.useViewTransitionState = "useViewTransitionState");
      })(Ce || (Ce = {})),
        (function (e) {
          (e.UseFetcher = "useFetcher"),
            (e.UseFetchers = "useFetchers"),
            (e.UseScrollRestoration = "useScrollRestoration");
        })(Te || (Te = {}));
      function Pe(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function Ne(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Pe(Object(n), !0).forEach(function (t) {
                _e(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Pe(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      function Oe(e) {
        return (
          (Oe =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          Oe(e)
        );
      }
      function Me(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function _e(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function je(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ("undefined" !== typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
            if (null == n) return;
            var r,
              a,
              i = [],
              o = !0,
              l = !1;
            try {
              for (
                n = n.call(e);
                !(o = (r = n.next()).done) && (i.push(r.value), !t || i.length !== t);
                o = !0
              );
            } catch (s) {
              (l = !0), (a = s);
            } finally {
              try {
                o || null == n.return || n.return();
              } finally {
                if (l) throw a;
              }
            }
            return i;
          })(e, t) ||
          ze(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function Le(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return Ae(e);
          })(e) ||
          (function (e) {
            if (
              ("undefined" !== typeof Symbol && null != e[Symbol.iterator]) ||
              null != e["@@iterator"]
            )
              return Array.from(e);
          })(e) ||
          ze(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function ze(e, t) {
        if (e) {
          if ("string" === typeof e) return Ae(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(e)
              : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? Ae(e, t)
              : void 0
          );
        }
      }
      function Ae(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      var Ie = function () {},
        Re = {},
        Fe = {},
        De = null,
        Be = { mark: Ie, measure: Ie };
      try {
        "undefined" !== typeof window && (Re = window),
          "undefined" !== typeof document && (Fe = document),
          "undefined" !== typeof MutationObserver && (De = MutationObserver),
          "undefined" !== typeof performance && (Be = performance);
      } catch (mo) {}
      var He,
        Ve,
        We,
        Ge,
        Ue,
        $e = (Re.navigator || {}).userAgent,
        Ye = void 0 === $e ? "" : $e,
        qe = Re,
        Qe = Fe,
        Xe = De,
        Ke = Be,
        Je =
          (qe.document,
          !!Qe.documentElement &&
            !!Qe.head &&
            "function" === typeof Qe.addEventListener &&
            "function" === typeof Qe.createElement),
        Ze = ~Ye.indexOf("MSIE") || ~Ye.indexOf("Trident/"),
        et = "___FONT_AWESOME___",
        tt = 16,
        nt = "fa",
        rt = "svg-inline--fa",
        at = "data-fa-i2svg",
        it = "data-fa-pseudo-element",
        ot = "data-fa-pseudo-element-pending",
        lt = "data-prefix",
        st = "data-icon",
        ct = "fontawesome-i2svg",
        ut = "async",
        dt = ["HTML", "HEAD", "STYLE", "SCRIPT"],
        ft = (function () {
          try {
            return !0;
          } catch (mo) {
            return !1;
          }
        })(),
        pt = "classic",
        mt = "sharp",
        ht = [pt, mt];
      function vt(e) {
        return new Proxy(e, {
          get: function (e, t) {
            return t in e ? e[t] : e[pt];
          },
        });
      }
      var gt = vt(
          (_e((He = {}), pt, {
            fa: "solid",
            fas: "solid",
            "fa-solid": "solid",
            far: "regular",
            "fa-regular": "regular",
            fal: "light",
            "fa-light": "light",
            fat: "thin",
            "fa-thin": "thin",
            fad: "duotone",
            "fa-duotone": "duotone",
            fab: "brands",
            "fa-brands": "brands",
            fak: "kit",
            fakd: "kit",
            "fa-kit": "kit",
            "fa-kit-duotone": "kit",
          }),
          _e(He, mt, {
            fa: "solid",
            fass: "solid",
            "fa-solid": "solid",
            fasr: "regular",
            "fa-regular": "regular",
            fasl: "light",
            "fa-light": "light",
            fast: "thin",
            "fa-thin": "thin",
          }),
          He)
        ),
        bt = vt(
          (_e((Ve = {}), pt, {
            solid: "fas",
            regular: "far",
            light: "fal",
            thin: "fat",
            duotone: "fad",
            brands: "fab",
            kit: "fak",
          }),
          _e(Ve, mt, { solid: "fass", regular: "fasr", light: "fasl", thin: "fast" }),
          Ve)
        ),
        yt = vt(
          (_e((We = {}), pt, {
            fab: "fa-brands",
            fad: "fa-duotone",
            fak: "fa-kit",
            fal: "fa-light",
            far: "fa-regular",
            fas: "fa-solid",
            fat: "fa-thin",
          }),
          _e(We, mt, { fass: "fa-solid", fasr: "fa-regular", fasl: "fa-light", fast: "fa-thin" }),
          We)
        ),
        wt = vt(
          (_e((Ge = {}), pt, {
            "fa-brands": "fab",
            "fa-duotone": "fad",
            "fa-kit": "fak",
            "fa-light": "fal",
            "fa-regular": "far",
            "fa-solid": "fas",
            "fa-thin": "fat",
          }),
          _e(Ge, mt, {
            "fa-solid": "fass",
            "fa-regular": "fasr",
            "fa-light": "fasl",
            "fa-thin": "fast",
          }),
          Ge)
        ),
        xt = /fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,
        St = "fa-layers-text",
        kt =
          /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,
        Et = vt(
          (_e((Ue = {}), pt, { 900: "fas", 400: "far", normal: "far", 300: "fal", 100: "fat" }),
          _e(Ue, mt, { 900: "fass", 400: "fasr", 300: "fasl", 100: "fast" }),
          Ue)
        ),
        Ct = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        Tt = Ct.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
        Pt = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"],
        Nt = {
          GROUP: "duotone-group",
          SWAP_OPACITY: "swap-opacity",
          PRIMARY: "primary",
          SECONDARY: "secondary",
        },
        Ot = new Set();
      Object.keys(bt[pt]).map(Ot.add.bind(Ot)), Object.keys(bt[mt]).map(Ot.add.bind(Ot));
      var Mt = []
          .concat(ht, Le(Ot), [
            "2xs",
            "xs",
            "sm",
            "lg",
            "xl",
            "2xl",
            "beat",
            "border",
            "fade",
            "beat-fade",
            "bounce",
            "flip-both",
            "flip-horizontal",
            "flip-vertical",
            "flip",
            "fw",
            "inverse",
            "layers-counter",
            "layers-text",
            "layers",
            "li",
            "pull-left",
            "pull-right",
            "pulse",
            "rotate-180",
            "rotate-270",
            "rotate-90",
            "rotate-by",
            "shake",
            "spin-pulse",
            "spin-reverse",
            "spin",
            "stack-1x",
            "stack-2x",
            "stack",
            "ul",
            Nt.GROUP,
            Nt.SWAP_OPACITY,
            Nt.PRIMARY,
            Nt.SECONDARY,
          ])
          .concat(
            Ct.map(function (e) {
              return "".concat(e, "x");
            })
          )
          .concat(
            Tt.map(function (e) {
              return "w-".concat(e);
            })
          ),
        _t = qe.FontAwesomeConfig || {};
      if (Qe && "function" === typeof Qe.querySelector) {
        [
          ["data-family-prefix", "familyPrefix"],
          ["data-css-prefix", "cssPrefix"],
          ["data-family-default", "familyDefault"],
          ["data-style-default", "styleDefault"],
          ["data-replacement-class", "replacementClass"],
          ["data-auto-replace-svg", "autoReplaceSvg"],
          ["data-auto-add-css", "autoAddCss"],
          ["data-auto-a11y", "autoA11y"],
          ["data-search-pseudo-elements", "searchPseudoElements"],
          ["data-observe-mutations", "observeMutations"],
          ["data-mutate-approach", "mutateApproach"],
          ["data-keep-original-source", "keepOriginalSource"],
          ["data-measure-performance", "measurePerformance"],
          ["data-show-missing-icons", "showMissingIcons"],
        ].forEach(function (e) {
          var t = je(e, 2),
            n = t[0],
            r = t[1],
            a = (function (e) {
              return "" === e || ("false" !== e && ("true" === e || e));
            })(
              (function (e) {
                var t = Qe.querySelector("script[" + e + "]");
                if (t) return t.getAttribute(e);
              })(n)
            );
          void 0 !== a && null !== a && (_t[r] = a);
        });
      }
      var jt = {
        styleDefault: "solid",
        familyDefault: "classic",
        cssPrefix: nt,
        replacementClass: rt,
        autoReplaceSvg: !0,
        autoAddCss: !0,
        autoA11y: !0,
        searchPseudoElements: !1,
        observeMutations: !0,
        mutateApproach: "async",
        keepOriginalSource: !0,
        measurePerformance: !1,
        showMissingIcons: !0,
      };
      _t.familyPrefix && (_t.cssPrefix = _t.familyPrefix);
      var Lt = Ne(Ne({}, jt), _t);
      Lt.autoReplaceSvg || (Lt.observeMutations = !1);
      var zt = {};
      Object.keys(jt).forEach(function (e) {
        Object.defineProperty(zt, e, {
          enumerable: !0,
          set: function (t) {
            (Lt[e] = t),
              At.forEach(function (e) {
                return e(zt);
              });
          },
          get: function () {
            return Lt[e];
          },
        });
      }),
        Object.defineProperty(zt, "familyPrefix", {
          enumerable: !0,
          set: function (e) {
            (Lt.cssPrefix = e),
              At.forEach(function (e) {
                return e(zt);
              });
          },
          get: function () {
            return Lt.cssPrefix;
          },
        }),
        (qe.FontAwesomeConfig = zt);
      var At = [];
      var It = tt,
        Rt = { size: 16, x: 0, y: 0, rotate: 0, flipX: !1, flipY: !1 };
      var Ft = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
      function Dt() {
        for (var e = 12, t = ""; e-- > 0; ) t += Ft[(62 * Math.random()) | 0];
        return t;
      }
      function Bt(e) {
        for (var t = [], n = (e || []).length >>> 0; n--; ) t[n] = e[n];
        return t;
      }
      function Ht(e) {
        return e.classList
          ? Bt(e.classList)
          : (e.getAttribute("class") || "").split(" ").filter(function (e) {
              return e;
            });
      }
      function Vt(e) {
        return ""
          .concat(e)
          .replace(/&/g, "&amp;")
          .replace(/"/g, "&quot;")
          .replace(/'/g, "&#39;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;");
      }
      function Wt(e) {
        return Object.keys(e || {}).reduce(function (t, n) {
          return t + "".concat(n, ": ").concat(e[n].trim(), ";");
        }, "");
      }
      function Gt(e) {
        return (
          e.size !== Rt.size ||
          e.x !== Rt.x ||
          e.y !== Rt.y ||
          e.rotate !== Rt.rotate ||
          e.flipX ||
          e.flipY
        );
      }
      var Ut =
        ':root, :host {\n  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";\n  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";\n  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";\n  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";\n  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";\n  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";\n}\n\nsvg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {\n  overflow: visible;\n  box-sizing: content-box;\n}\n\n.svg-inline--fa {\n  display: var(--fa-display, inline-block);\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-2xs {\n  vertical-align: 0.1em;\n}\n.svg-inline--fa.fa-xs {\n  vertical-align: 0em;\n}\n.svg-inline--fa.fa-sm {\n  vertical-align: -0.0714285705em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.2em;\n}\n.svg-inline--fa.fa-xl {\n  vertical-align: -0.25em;\n}\n.svg-inline--fa.fa-2xl {\n  vertical-align: -0.3125em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-li {\n  width: var(--fa-li-width, 2em);\n  top: 0.25em;\n}\n.svg-inline--fa.fa-fw {\n  width: var(--fa-fw-width, 1.25em);\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: var(--fa-counter-background-color, #ff253a);\n  border-radius: var(--fa-counter-border-radius, 1em);\n  box-sizing: border-box;\n  color: var(--fa-inverse, #fff);\n  line-height: var(--fa-counter-line-height, 1);\n  max-width: var(--fa-counter-max-width, 5em);\n  min-width: var(--fa-counter-min-width, 1.5em);\n  overflow: hidden;\n  padding: var(--fa-counter-padding, 0.25em 0.5em);\n  right: var(--fa-right, 0);\n  text-overflow: ellipsis;\n  top: var(--fa-top, 0);\n  -webkit-transform: scale(var(--fa-counter-scale, 0.25));\n          transform: scale(var(--fa-counter-scale, 0.25));\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: var(--fa-bottom, 0);\n  right: var(--fa-right, 0);\n  top: auto;\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: var(--fa-bottom, 0);\n  left: var(--fa-left, 0);\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  top: var(--fa-top, 0);\n  right: var(--fa-right, 0);\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: var(--fa-left, 0);\n  right: auto;\n  top: var(--fa-top, 0);\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: top left;\n          transform-origin: top left;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-2xs {\n  font-size: 0.625em;\n  line-height: 0.1em;\n  vertical-align: 0.225em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n  line-height: 0.0833333337em;\n  vertical-align: 0.125em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n  line-height: 0.0714285718em;\n  vertical-align: 0.0535714295em;\n}\n\n.fa-lg {\n  font-size: 1.25em;\n  line-height: 0.05em;\n  vertical-align: -0.075em;\n}\n\n.fa-xl {\n  font-size: 1.5em;\n  line-height: 0.0416666682em;\n  vertical-align: -0.125em;\n}\n\n.fa-2xl {\n  font-size: 2em;\n  line-height: 0.03125em;\n  vertical-align: -0.1875em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: var(--fa-li-margin, 2.5em);\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: calc(var(--fa-li-width, 2em) * -1);\n  position: absolute;\n  text-align: center;\n  width: var(--fa-li-width, 2em);\n  line-height: inherit;\n}\n\n.fa-border {\n  border-color: var(--fa-border-color, #eee);\n  border-radius: var(--fa-border-radius, 0.1em);\n  border-style: var(--fa-border-style, solid);\n  border-width: var(--fa-border-width, 0.08em);\n  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);\n}\n\n.fa-pull-left {\n  float: left;\n  margin-right: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-pull-right {\n  float: right;\n  margin-left: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-beat {\n  -webkit-animation-name: fa-beat;\n          animation-name: fa-beat;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);\n          animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-bounce {\n  -webkit-animation-name: fa-bounce;\n          animation-name: fa-bounce;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n}\n\n.fa-fade {\n  -webkit-animation-name: fa-fade;\n          animation-name: fa-fade;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-beat-fade {\n  -webkit-animation-name: fa-beat-fade;\n          animation-name: fa-beat-fade;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-flip {\n  -webkit-animation-name: fa-flip;\n          animation-name: fa-flip;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);\n          animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-shake {\n  -webkit-animation-name: fa-shake;\n          animation-name: fa-shake;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, linear);\n          animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin {\n  -webkit-animation-name: fa-spin;\n          animation-name: fa-spin;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 2s);\n          animation-duration: var(--fa-animation-duration, 2s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, linear);\n          animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin-reverse {\n  --fa-animation-direction: reverse;\n}\n\n.fa-pulse,\n.fa-spin-pulse {\n  -webkit-animation-name: fa-spin;\n          animation-name: fa-spin;\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));\n          animation-timing-function: var(--fa-animation-timing, steps(8));\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .fa-beat,\n.fa-bounce,\n.fa-fade,\n.fa-beat-fade,\n.fa-flip,\n.fa-pulse,\n.fa-shake,\n.fa-spin,\n.fa-spin-pulse {\n    -webkit-animation-delay: -1ms;\n            animation-delay: -1ms;\n    -webkit-animation-duration: 1ms;\n            animation-duration: 1ms;\n    -webkit-animation-iteration-count: 1;\n            animation-iteration-count: 1;\n    -webkit-transition-delay: 0s;\n            transition-delay: 0s;\n    -webkit-transition-duration: 0s;\n            transition-duration: 0s;\n  }\n}\n@-webkit-keyframes fa-beat {\n  0%, 90% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  45% {\n    -webkit-transform: scale(var(--fa-beat-scale, 1.25));\n            transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@keyframes fa-beat {\n  0%, 90% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  45% {\n    -webkit-transform: scale(var(--fa-beat-scale, 1.25));\n            transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@-webkit-keyframes fa-bounce {\n  0% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n}\n@keyframes fa-bounce {\n  0% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n}\n@-webkit-keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@-webkit-keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));\n            transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));\n            transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@-webkit-keyframes fa-flip {\n  50% {\n    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@keyframes fa-flip {\n  50% {\n    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@-webkit-keyframes fa-shake {\n  0% {\n    -webkit-transform: rotate(-15deg);\n            transform: rotate(-15deg);\n  }\n  4% {\n    -webkit-transform: rotate(15deg);\n            transform: rotate(15deg);\n  }\n  8%, 24% {\n    -webkit-transform: rotate(-18deg);\n            transform: rotate(-18deg);\n  }\n  12%, 28% {\n    -webkit-transform: rotate(18deg);\n            transform: rotate(18deg);\n  }\n  16% {\n    -webkit-transform: rotate(-22deg);\n            transform: rotate(-22deg);\n  }\n  20% {\n    -webkit-transform: rotate(22deg);\n            transform: rotate(22deg);\n  }\n  32% {\n    -webkit-transform: rotate(-12deg);\n            transform: rotate(-12deg);\n  }\n  36% {\n    -webkit-transform: rotate(12deg);\n            transform: rotate(12deg);\n  }\n  40%, 100% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n}\n@keyframes fa-shake {\n  0% {\n    -webkit-transform: rotate(-15deg);\n            transform: rotate(-15deg);\n  }\n  4% {\n    -webkit-transform: rotate(15deg);\n            transform: rotate(15deg);\n  }\n  8%, 24% {\n    -webkit-transform: rotate(-18deg);\n            transform: rotate(-18deg);\n  }\n  12%, 28% {\n    -webkit-transform: rotate(18deg);\n            transform: rotate(18deg);\n  }\n  16% {\n    -webkit-transform: rotate(-22deg);\n            transform: rotate(-22deg);\n  }\n  20% {\n    -webkit-transform: rotate(22deg);\n            transform: rotate(22deg);\n  }\n  32% {\n    -webkit-transform: rotate(-12deg);\n            transform: rotate(-12deg);\n  }\n  36% {\n    -webkit-transform: rotate(12deg);\n            transform: rotate(12deg);\n  }\n  40%, 100% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n}\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1);\n}\n\n.fa-flip-both,\n.fa-flip-horizontal.fa-flip-vertical {\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1);\n}\n\n.fa-rotate-by {\n  -webkit-transform: rotate(var(--fa-rotate-angle, 0));\n          transform: rotate(var(--fa-rotate-angle, 0));\n}\n\n.fa-stack {\n  display: inline-block;\n  vertical-align: middle;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: var(--fa-stack-z-index, auto);\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}\n\n.sr-only,\n.fa-sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.sr-only-focusable:not(:focus),\n.fa-sr-only-focusable:not(:focus) {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.fad.fa-inverse,\n.fa-duotone.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}';
      function $t() {
        var e = nt,
          t = rt,
          n = zt.cssPrefix,
          r = zt.replacementClass,
          a = Ut;
        if (n !== e || r !== t) {
          var i = new RegExp("\\.".concat(e, "\\-"), "g"),
            o = new RegExp("\\--".concat(e, "\\-"), "g"),
            l = new RegExp("\\.".concat(t), "g");
          a = a
            .replace(i, ".".concat(n, "-"))
            .replace(o, "--".concat(n, "-"))
            .replace(l, ".".concat(r));
        }
        return a;
      }
      var Yt = !1;
      function qt() {
        zt.autoAddCss &&
          !Yt &&
          (!(function (e) {
            if (e && Je) {
              var t = Qe.createElement("style");
              t.setAttribute("type", "text/css"), (t.innerHTML = e);
              for (var n = Qe.head.childNodes, r = null, a = n.length - 1; a > -1; a--) {
                var i = n[a],
                  o = (i.tagName || "").toUpperCase();
                ["STYLE", "LINK"].indexOf(o) > -1 && (r = i);
              }
              Qe.head.insertBefore(t, r);
            }
          })($t()),
          (Yt = !0));
      }
      var Qt = {
          mixout: function () {
            return { dom: { css: $t, insertCss: qt } };
          },
          hooks: function () {
            return {
              beforeDOMElementCreation: function () {
                qt();
              },
              beforeI2svg: function () {
                qt();
              },
            };
          },
        },
        Xt = qe || {};
      Xt[et] || (Xt[et] = {}),
        Xt[et].styles || (Xt[et].styles = {}),
        Xt[et].hooks || (Xt[et].hooks = {}),
        Xt[et].shims || (Xt[et].shims = []);
      var Kt = Xt[et],
        Jt = [],
        Zt = !1;
      function en(e) {
        var t = e.tag,
          n = e.attributes,
          r = void 0 === n ? {} : n,
          a = e.children,
          i = void 0 === a ? [] : a;
        return "string" === typeof e
          ? Vt(e)
          : "<"
              .concat(t, " ")
              .concat(
                (function (e) {
                  return Object.keys(e || {})
                    .reduce(function (t, n) {
                      return t + "".concat(n, '="').concat(Vt(e[n]), '" ');
                    }, "")
                    .trim();
                })(r),
                ">"
              )
              .concat(i.map(en).join(""), "</")
              .concat(t, ">");
      }
      function tn(e, t, n) {
        if (e && e[t] && e[t][n]) return { prefix: t, iconName: n, icon: e[t][n] };
      }
      Je &&
        ((Zt = (Qe.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(
          Qe.readyState
        )) ||
          Qe.addEventListener("DOMContentLoaded", function e() {
            Qe.removeEventListener("DOMContentLoaded", e),
              (Zt = 1),
              Jt.map(function (e) {
                return e();
              });
          }));
      var nn = function (e, t, n, r) {
        var a,
          i,
          o,
          l = Object.keys(e),
          s = l.length,
          c =
            void 0 !== r
              ? (function (e, t) {
                  return function (n, r, a, i) {
                    return e.call(t, n, r, a, i);
                  };
                })(t, r)
              : t;
        for (void 0 === n ? ((a = 1), (o = e[l[0]])) : ((a = 0), (o = n)); a < s; a++)
          o = c(o, e[(i = l[a])], i, e);
        return o;
      };
      function rn(e) {
        var t = (function (e) {
          for (var t = [], n = 0, r = e.length; n < r; ) {
            var a = e.charCodeAt(n++);
            if (a >= 55296 && a <= 56319 && n < r) {
              var i = e.charCodeAt(n++);
              56320 == (64512 & i)
                ? t.push(((1023 & a) << 10) + (1023 & i) + 65536)
                : (t.push(a), n--);
            } else t.push(a);
          }
          return t;
        })(e);
        return 1 === t.length ? t[0].toString(16) : null;
      }
      function an(e) {
        return Object.keys(e).reduce(function (t, n) {
          var r = e[n];
          return !!r.icon ? (t[r.iconName] = r.icon) : (t[n] = r), t;
        }, {});
      }
      function on(e, t) {
        var n = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).skipHooks,
          r = void 0 !== n && n,
          a = an(t);
        "function" !== typeof Kt.hooks.addPack || r
          ? (Kt.styles[e] = Ne(Ne({}, Kt.styles[e] || {}), a))
          : Kt.hooks.addPack(e, an(t)),
          "fas" === e && on("fa", t);
      }
      var ln,
        sn,
        cn,
        un = Kt.styles,
        dn = Kt.shims,
        fn = (_e((ln = {}), pt, Object.values(yt[pt])), _e(ln, mt, Object.values(yt[mt])), ln),
        pn = null,
        mn = {},
        hn = {},
        vn = {},
        gn = {},
        bn = {},
        yn = (_e((sn = {}), pt, Object.keys(gt[pt])), _e(sn, mt, Object.keys(gt[mt])), sn);
      function wn(e, t) {
        var n,
          r = t.split("-"),
          a = r[0],
          i = r.slice(1).join("-");
        return a !== e || "" === i || ((n = i), ~Mt.indexOf(n)) ? null : i;
      }
      var xn,
        Sn = function () {
          var e = function (e) {
            return nn(
              un,
              function (t, n, r) {
                return (t[r] = nn(n, e, {})), t;
              },
              {}
            );
          };
          (mn = e(function (e, t, n) {
            (t[3] && (e[t[3]] = n), t[2]) &&
              t[2]
                .filter(function (e) {
                  return "number" === typeof e;
                })
                .forEach(function (t) {
                  e[t.toString(16)] = n;
                });
            return e;
          })),
            (hn = e(function (e, t, n) {
              ((e[n] = n), t[2]) &&
                t[2]
                  .filter(function (e) {
                    return "string" === typeof e;
                  })
                  .forEach(function (t) {
                    e[t] = n;
                  });
              return e;
            })),
            (bn = e(function (e, t, n) {
              var r = t[2];
              return (
                (e[n] = n),
                r.forEach(function (t) {
                  e[t] = n;
                }),
                e
              );
            }));
          var t = "far" in un || zt.autoFetchSvg,
            n = nn(
              dn,
              function (e, n) {
                var r = n[0],
                  a = n[1],
                  i = n[2];
                return (
                  "far" !== a || t || (a = "fas"),
                  "string" === typeof r && (e.names[r] = { prefix: a, iconName: i }),
                  "number" === typeof r &&
                    (e.unicodes[r.toString(16)] = { prefix: a, iconName: i }),
                  e
                );
              },
              { names: {}, unicodes: {} }
            );
          (vn = n.names),
            (gn = n.unicodes),
            (pn = Nn(zt.styleDefault, { family: zt.familyDefault }));
        };
      function kn(e, t) {
        return (mn[e] || {})[t];
      }
      function En(e, t) {
        return (bn[e] || {})[t];
      }
      function Cn(e) {
        return vn[e] || { prefix: null, iconName: null };
      }
      function Tn() {
        return pn;
      }
      (xn = function (e) {
        pn = Nn(e.styleDefault, { family: zt.familyDefault });
      }),
        At.push(xn),
        Sn();
      var Pn = function () {
        return { prefix: null, iconName: null, rest: [] };
      };
      function Nn(e) {
        var t = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).family,
          n = void 0 === t ? pt : t,
          r = gt[n][e],
          a = bt[n][e] || bt[n][r],
          i = e in Kt.styles ? e : null;
        return a || i || null;
      }
      var On = (_e((cn = {}), pt, Object.keys(yt[pt])), _e(cn, mt, Object.keys(yt[mt])), cn);
      function Mn(e) {
        var t,
          n = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).skipLookups,
          r = void 0 !== n && n,
          a =
            (_e((t = {}), pt, "".concat(zt.cssPrefix, "-").concat(pt)),
            _e(t, mt, "".concat(zt.cssPrefix, "-").concat(mt)),
            t),
          i = null,
          o = pt;
        (e.includes(a[pt]) ||
          e.some(function (e) {
            return On[pt].includes(e);
          })) &&
          (o = pt),
          (e.includes(a[mt]) ||
            e.some(function (e) {
              return On[mt].includes(e);
            })) &&
            (o = mt);
        var l = e.reduce(function (e, t) {
          var n = wn(zt.cssPrefix, t);
          if (
            (un[t]
              ? ((t = fn[o].includes(t) ? wt[o][t] : t), (i = t), (e.prefix = t))
              : yn[o].indexOf(t) > -1
              ? ((i = t), (e.prefix = Nn(t, { family: o })))
              : n
              ? (e.iconName = n)
              : t !== zt.replacementClass && t !== a[pt] && t !== a[mt] && e.rest.push(t),
            !r && e.prefix && e.iconName)
          ) {
            var l = "fa" === i ? Cn(e.iconName) : {},
              s = En(e.prefix, e.iconName);
            l.prefix && (i = null),
              (e.iconName = l.iconName || s || e.iconName),
              (e.prefix = l.prefix || e.prefix),
              "far" !== e.prefix || un.far || !un.fas || zt.autoFetchSvg || (e.prefix = "fas");
          }
          return e;
        }, Pn());
        return (
          (e.includes("fa-brands") || e.includes("fab")) && (l.prefix = "fab"),
          (e.includes("fa-duotone") || e.includes("fad")) && (l.prefix = "fad"),
          l.prefix ||
            o !== mt ||
            (!un.fass && !zt.autoFetchSvg) ||
            ((l.prefix = "fass"), (l.iconName = En(l.prefix, l.iconName) || l.iconName)),
          ("fa" !== l.prefix && "fa" !== i) || (l.prefix = Tn() || "fas"),
          l
        );
      }
      var _n = (function () {
          function e() {
            !(function (e, t) {
              if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            })(this, e),
              (this.definitions = {});
          }
          var t, n, r;
          return (
            (t = e),
            (n = [
              {
                key: "add",
                value: function () {
                  for (var e = this, t = arguments.length, n = new Array(t), r = 0; r < t; r++)
                    n[r] = arguments[r];
                  var a = n.reduce(this._pullDefinitions, {});
                  Object.keys(a).forEach(function (t) {
                    (e.definitions[t] = Ne(Ne({}, e.definitions[t] || {}), a[t])), on(t, a[t]);
                    var n = yt[pt][t];
                    n && on(n, a[t]), Sn();
                  });
                },
              },
              {
                key: "reset",
                value: function () {
                  this.definitions = {};
                },
              },
              {
                key: "_pullDefinitions",
                value: function (e, t) {
                  var n = t.prefix && t.iconName && t.icon ? { 0: t } : t;
                  return (
                    Object.keys(n).map(function (t) {
                      var r = n[t],
                        a = r.prefix,
                        i = r.iconName,
                        o = r.icon,
                        l = o[2];
                      e[a] || (e[a] = {}),
                        l.length > 0 &&
                          l.forEach(function (t) {
                            "string" === typeof t && (e[a][t] = o);
                          }),
                        (e[a][i] = o);
                    }),
                    e
                  );
                },
              },
            ]),
            n && Me(t.prototype, n),
            r && Me(t, r),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            e
          );
        })(),
        jn = [],
        Ln = {},
        zn = {},
        An = Object.keys(zn);
      function In(e, t) {
        for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++)
          r[a - 2] = arguments[a];
        return (
          (Ln[e] || []).forEach(function (e) {
            t = e.apply(null, [t].concat(r));
          }),
          t
        );
      }
      function Rn(e) {
        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
          n[r - 1] = arguments[r];
        (Ln[e] || []).forEach(function (e) {
          e.apply(null, n);
        });
      }
      function Fn() {
        var e = arguments[0],
          t = Array.prototype.slice.call(arguments, 1);
        return zn[e] ? zn[e].apply(null, t) : void 0;
      }
      function Dn(e) {
        "fa" === e.prefix && (e.prefix = "fas");
        var t = e.iconName,
          n = e.prefix || Tn();
        if (t) return (t = En(n, t) || t), tn(Bn.definitions, n, t) || tn(Kt.styles, n, t);
      }
      var Bn = new _n(),
        Hn = {
          i2svg: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return Je
              ? (Rn("beforeI2svg", e), Fn("pseudoElements2svg", e), Fn("i2svg", e))
              : Promise.reject("Operation requires a DOM of some kind.");
          },
          watch: function () {
            var e,
              t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              n = t.autoReplaceSvgRoot;
            !1 === zt.autoReplaceSvg && (zt.autoReplaceSvg = !0),
              (zt.observeMutations = !0),
              (e = function () {
                Gn({ autoReplaceSvgRoot: n }), Rn("watch", t);
              }),
              Je && (Zt ? setTimeout(e, 0) : Jt.push(e));
          },
        },
        Vn = {
          icon: function (e) {
            if (null === e) return null;
            if ("object" === Oe(e) && e.prefix && e.iconName)
              return { prefix: e.prefix, iconName: En(e.prefix, e.iconName) || e.iconName };
            if (Array.isArray(e) && 2 === e.length) {
              var t = 0 === e[1].indexOf("fa-") ? e[1].slice(3) : e[1],
                n = Nn(e[0]);
              return { prefix: n, iconName: En(n, t) || t };
            }
            if (
              "string" === typeof e &&
              (e.indexOf("".concat(zt.cssPrefix, "-")) > -1 || e.match(xt))
            ) {
              var r = Mn(e.split(" "), { skipLookups: !0 });
              return { prefix: r.prefix || Tn(), iconName: En(r.prefix, r.iconName) || r.iconName };
            }
            if ("string" === typeof e) {
              var a = Tn();
              return { prefix: a, iconName: En(a, e) || e };
            }
          },
        },
        Wn = {
          noAuto: function () {
            (zt.autoReplaceSvg = !1), (zt.observeMutations = !1), Rn("noAuto");
          },
          config: zt,
          dom: Hn,
          parse: Vn,
          library: Bn,
          findIconDefinition: Dn,
          toHtml: en,
        },
        Gn = function () {
          var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {})
              .autoReplaceSvgRoot,
            t = void 0 === e ? Qe : e;
          (Object.keys(Kt.styles).length > 0 || zt.autoFetchSvg) &&
            Je &&
            zt.autoReplaceSvg &&
            Wn.dom.i2svg({ node: t });
        };
      function Un(e, t) {
        return (
          Object.defineProperty(e, "abstract", { get: t }),
          Object.defineProperty(e, "html", {
            get: function () {
              return e.abstract.map(function (e) {
                return en(e);
              });
            },
          }),
          Object.defineProperty(e, "node", {
            get: function () {
              if (Je) {
                var t = Qe.createElement("div");
                return (t.innerHTML = e.html), t.children;
              }
            },
          }),
          e
        );
      }
      function $n(e) {
        var t = e.icons,
          n = t.main,
          r = t.mask,
          a = e.prefix,
          i = e.iconName,
          o = e.transform,
          l = e.symbol,
          s = e.title,
          c = e.maskId,
          u = e.titleId,
          d = e.extra,
          f = e.watchable,
          p = void 0 !== f && f,
          m = r.found ? r : n,
          h = m.width,
          v = m.height,
          g = "fak" === a,
          b = [zt.replacementClass, i ? "".concat(zt.cssPrefix, "-").concat(i) : ""]
            .filter(function (e) {
              return -1 === d.classes.indexOf(e);
            })
            .filter(function (e) {
              return "" !== e || !!e;
            })
            .concat(d.classes)
            .join(" "),
          y = {
            children: [],
            attributes: Ne(
              Ne({}, d.attributes),
              {},
              {
                "data-prefix": a,
                "data-icon": i,
                class: b,
                role: d.attributes.role || "img",
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 ".concat(h, " ").concat(v),
              }
            ),
          },
          w =
            g && !~d.classes.indexOf("fa-fw")
              ? { width: "".concat((h / v) * 16 * 0.0625, "em") }
              : {};
        p && (y.attributes[at] = ""),
          s &&
            (y.children.push({
              tag: "title",
              attributes: { id: y.attributes["aria-labelledby"] || "title-".concat(u || Dt()) },
              children: [s],
            }),
            delete y.attributes.title);
        var x = Ne(
            Ne({}, y),
            {},
            {
              prefix: a,
              iconName: i,
              main: n,
              mask: r,
              maskId: c,
              transform: o,
              symbol: l,
              styles: Ne(Ne({}, w), d.styles),
            }
          ),
          S =
            r.found && n.found
              ? Fn("generateAbstractMask", x) || { children: [], attributes: {} }
              : Fn("generateAbstractIcon", x) || { children: [], attributes: {} },
          k = S.children,
          E = S.attributes;
        return (
          (x.children = k),
          (x.attributes = E),
          l
            ? (function (e) {
                var t = e.prefix,
                  n = e.iconName,
                  r = e.children,
                  a = e.attributes,
                  i = e.symbol,
                  o = !0 === i ? "".concat(t, "-").concat(zt.cssPrefix, "-").concat(n) : i;
                return [
                  {
                    tag: "svg",
                    attributes: { style: "display: none;" },
                    children: [
                      { tag: "symbol", attributes: Ne(Ne({}, a), {}, { id: o }), children: r },
                    ],
                  },
                ];
              })(x)
            : (function (e) {
                var t = e.children,
                  n = e.main,
                  r = e.mask,
                  a = e.attributes,
                  i = e.styles,
                  o = e.transform;
                if (Gt(o) && n.found && !r.found) {
                  var l = { x: n.width / n.height / 2, y: 0.5 };
                  a.style = Wt(
                    Ne(
                      Ne({}, i),
                      {},
                      {
                        "transform-origin": ""
                          .concat(l.x + o.x / 16, "em ")
                          .concat(l.y + o.y / 16, "em"),
                      }
                    )
                  );
                }
                return [{ tag: "svg", attributes: a, children: t }];
              })(x)
        );
      }
      function Yn(e) {
        var t = e.content,
          n = e.width,
          r = e.height,
          a = e.transform,
          i = e.title,
          o = e.extra,
          l = e.watchable,
          s = void 0 !== l && l,
          c = Ne(
            Ne(Ne({}, o.attributes), i ? { title: i } : {}),
            {},
            { class: o.classes.join(" ") }
          );
        s && (c[at] = "");
        var u = Ne({}, o.styles);
        Gt(a) &&
          ((u.transform = (function (e) {
            var t = e.transform,
              n = e.width,
              r = void 0 === n ? tt : n,
              a = e.height,
              i = void 0 === a ? tt : a,
              o = e.startCentered,
              l = void 0 !== o && o,
              s = "";
            return (
              (s +=
                l && Ze
                  ? "translate(".concat(t.x / It - r / 2, "em, ").concat(t.y / It - i / 2, "em) ")
                  : l
                  ? "translate(calc(-50% + "
                      .concat(t.x / It, "em), calc(-50% + ")
                      .concat(t.y / It, "em)) ")
                  : "translate(".concat(t.x / It, "em, ").concat(t.y / It, "em) ")),
              (s += "scale("
                .concat((t.size / It) * (t.flipX ? -1 : 1), ", ")
                .concat((t.size / It) * (t.flipY ? -1 : 1), ") ")),
              s + "rotate(".concat(t.rotate, "deg) ")
            );
          })({ transform: a, startCentered: !0, width: n, height: r })),
          (u["-webkit-transform"] = u.transform));
        var d = Wt(u);
        d.length > 0 && (c.style = d);
        var f = [];
        return (
          f.push({ tag: "span", attributes: c, children: [t] }),
          i && f.push({ tag: "span", attributes: { class: "sr-only" }, children: [i] }),
          f
        );
      }
      var qn = Kt.styles;
      function Qn(e) {
        var t = e[0],
          n = e[1],
          r = je(e.slice(4), 1)[0];
        return {
          found: !0,
          width: t,
          height: n,
          icon: Array.isArray(r)
            ? {
                tag: "g",
                attributes: { class: "".concat(zt.cssPrefix, "-").concat(Nt.GROUP) },
                children: [
                  {
                    tag: "path",
                    attributes: {
                      class: "".concat(zt.cssPrefix, "-").concat(Nt.SECONDARY),
                      fill: "currentColor",
                      d: r[0],
                    },
                  },
                  {
                    tag: "path",
                    attributes: {
                      class: "".concat(zt.cssPrefix, "-").concat(Nt.PRIMARY),
                      fill: "currentColor",
                      d: r[1],
                    },
                  },
                ],
              }
            : { tag: "path", attributes: { fill: "currentColor", d: r } },
        };
      }
      var Xn = { found: !1, width: 512, height: 512 };
      function Kn(e, t) {
        var n = t;
        return (
          "fa" === t && null !== zt.styleDefault && (t = Tn()),
          new Promise(function (r, a) {
            Fn("missingIconAbstract");
            if ("fa" === n) {
              var i = Cn(e) || {};
              (e = i.iconName || e), (t = i.prefix || t);
            }
            if (e && t && qn[t] && qn[t][e]) return r(Qn(qn[t][e]));
            !(function (e, t) {
              ft ||
                zt.showMissingIcons ||
                !e ||
                console.error(
                  'Icon with name "'.concat(e, '" and prefix "').concat(t, '" is missing.')
                );
            })(e, t),
              r(
                Ne(
                  Ne({}, Xn),
                  {},
                  { icon: (zt.showMissingIcons && e && Fn("missingIconAbstract")) || {} }
                )
              );
          })
        );
      }
      var Jn = function () {},
        Zn = zt.measurePerformance && Ke && Ke.mark && Ke.measure ? Ke : { mark: Jn, measure: Jn },
        er = 'FA "6.5.2"',
        tr = function (e) {
          Zn.mark("".concat(er, " ").concat(e, " ends")),
            Zn.measure(
              "".concat(er, " ").concat(e),
              "".concat(er, " ").concat(e, " begins"),
              "".concat(er, " ").concat(e, " ends")
            );
        },
        nr = {
          begin: function (e) {
            return (
              Zn.mark("".concat(er, " ").concat(e, " begins")),
              function () {
                return tr(e);
              }
            );
          },
          end: tr,
        },
        rr = function () {};
      function ar(e) {
        return "string" === typeof (e.getAttribute ? e.getAttribute(at) : null);
      }
      function ir(e) {
        return Qe.createElementNS("http://www.w3.org/2000/svg", e);
      }
      function or(e) {
        return Qe.createElement(e);
      }
      function lr(e) {
        var t = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).ceFn,
          n = void 0 === t ? ("svg" === e.tag ? ir : or) : t;
        if ("string" === typeof e) return Qe.createTextNode(e);
        var r = n(e.tag);
        return (
          Object.keys(e.attributes || []).forEach(function (t) {
            r.setAttribute(t, e.attributes[t]);
          }),
          (e.children || []).forEach(function (e) {
            r.appendChild(lr(e, { ceFn: n }));
          }),
          r
        );
      }
      var sr = {
        replace: function (e) {
          var t = e[0];
          if (t.parentNode)
            if (
              (e[1].forEach(function (e) {
                t.parentNode.insertBefore(lr(e), t);
              }),
              null === t.getAttribute(at) && zt.keepOriginalSource)
            ) {
              var n = Qe.createComment(
                (function (e) {
                  var t = " ".concat(e.outerHTML, " ");
                  return "".concat(t, "Font Awesome fontawesome.com ");
                })(t)
              );
              t.parentNode.replaceChild(n, t);
            } else t.remove();
        },
        nest: function (e) {
          var t = e[0],
            n = e[1];
          if (~Ht(t).indexOf(zt.replacementClass)) return sr.replace(e);
          var r = new RegExp("".concat(zt.cssPrefix, "-.*"));
          if ((delete n[0].attributes.id, n[0].attributes.class)) {
            var a = n[0].attributes.class.split(" ").reduce(
              function (e, t) {
                return (
                  t === zt.replacementClass || t.match(r) ? e.toSvg.push(t) : e.toNode.push(t), e
                );
              },
              { toNode: [], toSvg: [] }
            );
            (n[0].attributes.class = a.toSvg.join(" ")),
              0 === a.toNode.length
                ? t.removeAttribute("class")
                : t.setAttribute("class", a.toNode.join(" "));
          }
          var i = n
            .map(function (e) {
              return en(e);
            })
            .join("\n");
          t.setAttribute(at, ""), (t.innerHTML = i);
        },
      };
      function cr(e) {
        e();
      }
      function ur(e, t) {
        var n = "function" === typeof t ? t : rr;
        if (0 === e.length) n();
        else {
          var r = cr;
          zt.mutateApproach === ut && (r = qe.requestAnimationFrame || cr),
            r(function () {
              var t = !0 === zt.autoReplaceSvg ? sr.replace : sr[zt.autoReplaceSvg] || sr.replace,
                r = nr.begin("mutate");
              e.map(t), r(), n();
            });
        }
      }
      var dr = !1;
      function fr() {
        dr = !0;
      }
      function pr() {
        dr = !1;
      }
      var mr = null;
      function hr(e) {
        if (Xe && zt.observeMutations) {
          var t = e.treeCallback,
            n = void 0 === t ? rr : t,
            r = e.nodeCallback,
            a = void 0 === r ? rr : r,
            i = e.pseudoElementsCallback,
            o = void 0 === i ? rr : i,
            l = e.observeMutationsRoot,
            s = void 0 === l ? Qe : l;
          (mr = new Xe(function (e) {
            if (!dr) {
              var t = Tn();
              Bt(e).forEach(function (e) {
                if (
                  ("childList" === e.type &&
                    e.addedNodes.length > 0 &&
                    !ar(e.addedNodes[0]) &&
                    (zt.searchPseudoElements && o(e.target), n(e.target)),
                  "attributes" === e.type &&
                    e.target.parentNode &&
                    zt.searchPseudoElements &&
                    o(e.target.parentNode),
                  "attributes" === e.type && ar(e.target) && ~Pt.indexOf(e.attributeName))
                )
                  if (
                    "class" === e.attributeName &&
                    (function (e) {
                      var t = e.getAttribute ? e.getAttribute(lt) : null,
                        n = e.getAttribute ? e.getAttribute(st) : null;
                      return t && n;
                    })(e.target)
                  ) {
                    var r = Mn(Ht(e.target)),
                      i = r.prefix,
                      l = r.iconName;
                    e.target.setAttribute(lt, i || t), l && e.target.setAttribute(st, l);
                  } else
                    (s = e.target) &&
                      s.classList &&
                      s.classList.contains &&
                      s.classList.contains(zt.replacementClass) &&
                      a(e.target);
                var s;
              });
            }
          })),
            Je && mr.observe(s, { childList: !0, attributes: !0, characterData: !0, subtree: !0 });
        }
      }
      function vr(e) {
        var t = e.getAttribute("data-prefix"),
          n = e.getAttribute("data-icon"),
          r = void 0 !== e.innerText ? e.innerText.trim() : "",
          a = Mn(Ht(e));
        return (
          a.prefix || (a.prefix = Tn()),
          t && n && ((a.prefix = t), (a.iconName = n)),
          (a.iconName && a.prefix) ||
            (a.prefix &&
              r.length > 0 &&
              (a.iconName =
                (function (e, t) {
                  return (hn[e] || {})[t];
                })(a.prefix, e.innerText) || kn(a.prefix, rn(e.innerText))),
            !a.iconName &&
              zt.autoFetchSvg &&
              e.firstChild &&
              e.firstChild.nodeType === Node.TEXT_NODE &&
              (a.iconName = e.firstChild.data)),
          a
        );
      }
      function gr(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { styleParser: !0 },
          n = vr(e),
          r = n.iconName,
          a = n.prefix,
          i = n.rest,
          o = (function (e) {
            var t = Bt(e.attributes).reduce(function (e, t) {
                return "class" !== e.name && "style" !== e.name && (e[t.name] = t.value), e;
              }, {}),
              n = e.getAttribute("title"),
              r = e.getAttribute("data-fa-title-id");
            return (
              zt.autoA11y &&
                (n
                  ? (t["aria-labelledby"] = ""
                      .concat(zt.replacementClass, "-title-")
                      .concat(r || Dt()))
                  : ((t["aria-hidden"] = "true"), (t.focusable = "false"))),
              t
            );
          })(e),
          l = In("parseNodeAttributes", {}, e),
          s = t.styleParser
            ? (function (e) {
                var t = e.getAttribute("style"),
                  n = [];
                return (
                  t &&
                    (n = t.split(";").reduce(function (e, t) {
                      var n = t.split(":"),
                        r = n[0],
                        a = n.slice(1);
                      return r && a.length > 0 && (e[r] = a.join(":").trim()), e;
                    }, {})),
                  n
                );
              })(e)
            : [];
        return Ne(
          {
            iconName: r,
            title: e.getAttribute("title"),
            titleId: e.getAttribute("data-fa-title-id"),
            prefix: a,
            transform: Rt,
            mask: { iconName: null, prefix: null, rest: [] },
            maskId: null,
            symbol: !1,
            extra: { classes: i, styles: s, attributes: o },
          },
          l
        );
      }
      var br = Kt.styles;
      function yr(e) {
        var t = "nest" === zt.autoReplaceSvg ? gr(e, { styleParser: !1 }) : gr(e);
        return ~t.extra.classes.indexOf(St)
          ? Fn("generateLayersText", e, t)
          : Fn("generateSvgReplacementMutation", e, t);
      }
      var wr = new Set();
      function xr(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (!Je) return Promise.resolve();
        var n = Qe.documentElement.classList,
          r = function (e) {
            return n.add("".concat(ct, "-").concat(e));
          },
          a = function (e) {
            return n.remove("".concat(ct, "-").concat(e));
          },
          i = zt.autoFetchSvg
            ? wr
            : ht
                .map(function (e) {
                  return "fa-".concat(e);
                })
                .concat(Object.keys(br));
        i.includes("fa") || i.push("fa");
        var o = [".".concat(St, ":not([").concat(at, "])")]
          .concat(
            i.map(function (e) {
              return ".".concat(e, ":not([").concat(at, "])");
            })
          )
          .join(", ");
        if (0 === o.length) return Promise.resolve();
        var l = [];
        try {
          l = Bt(e.querySelectorAll(o));
        } catch (mo) {}
        if (!(l.length > 0)) return Promise.resolve();
        r("pending"), a("complete");
        var s = nr.begin("onTree"),
          c = l.reduce(function (e, t) {
            try {
              var n = yr(t);
              n && e.push(n);
            } catch (mo) {
              ft || ("MissingIcon" === mo.name && console.error(mo));
            }
            return e;
          }, []);
        return new Promise(function (e, n) {
          Promise.all(c)
            .then(function (n) {
              ur(n, function () {
                r("active"), r("complete"), a("pending"), "function" === typeof t && t(), s(), e();
              });
            })
            .catch(function (e) {
              s(), n(e);
            });
        });
      }
      function Sr(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        yr(e).then(function (e) {
          e && ur([e], t);
        });
      }
      ht.map(function (e) {
        wr.add("fa-".concat(e));
      }),
        Object.keys(gt[pt]).map(wr.add.bind(wr)),
        Object.keys(gt[mt]).map(wr.add.bind(wr)),
        (wr = Le(wr));
      var kr = function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            n = t.transform,
            r = void 0 === n ? Rt : n,
            a = t.symbol,
            i = void 0 !== a && a,
            o = t.mask,
            l = void 0 === o ? null : o,
            s = t.maskId,
            c = void 0 === s ? null : s,
            u = t.title,
            d = void 0 === u ? null : u,
            f = t.titleId,
            p = void 0 === f ? null : f,
            m = t.classes,
            h = void 0 === m ? [] : m,
            v = t.attributes,
            g = void 0 === v ? {} : v,
            b = t.styles,
            y = void 0 === b ? {} : b;
          if (e) {
            var w = e.prefix,
              x = e.iconName,
              S = e.icon;
            return Un(Ne({ type: "icon" }, e), function () {
              return (
                Rn("beforeDOMElementCreation", { iconDefinition: e, params: t }),
                zt.autoA11y &&
                  (d
                    ? (g["aria-labelledby"] = ""
                        .concat(zt.replacementClass, "-title-")
                        .concat(p || Dt()))
                    : ((g["aria-hidden"] = "true"), (g.focusable = "false"))),
                $n({
                  icons: {
                    main: Qn(S),
                    mask: l ? Qn(l.icon) : { found: !1, width: null, height: null, icon: {} },
                  },
                  prefix: w,
                  iconName: x,
                  transform: Ne(Ne({}, Rt), r),
                  symbol: i,
                  title: d,
                  maskId: c,
                  titleId: p,
                  extra: { attributes: g, styles: y, classes: h },
                })
              );
            });
          }
        },
        Er = {
          mixout: function () {
            return {
              icon:
                ((e = kr),
                function (t) {
                  var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    r = (t || {}).icon ? t : Dn(t || {}),
                    a = n.mask;
                  return (
                    a && (a = (a || {}).icon ? a : Dn(a || {})),
                    e(r, Ne(Ne({}, n), {}, { mask: a }))
                  );
                }),
            };
            var e;
          },
          hooks: function () {
            return {
              mutationObserverCallbacks: function (e) {
                return (e.treeCallback = xr), (e.nodeCallback = Sr), e;
              },
            };
          },
          provides: function (e) {
            (e.i2svg = function (e) {
              var t = e.node,
                n = void 0 === t ? Qe : t,
                r = e.callback;
              return xr(n, void 0 === r ? function () {} : r);
            }),
              (e.generateSvgReplacementMutation = function (e, t) {
                var n = t.iconName,
                  r = t.title,
                  a = t.titleId,
                  i = t.prefix,
                  o = t.transform,
                  l = t.symbol,
                  s = t.mask,
                  c = t.maskId,
                  u = t.extra;
                return new Promise(function (t, d) {
                  Promise.all([
                    Kn(n, i),
                    s.iconName
                      ? Kn(s.iconName, s.prefix)
                      : Promise.resolve({ found: !1, width: 512, height: 512, icon: {} }),
                  ])
                    .then(function (s) {
                      var d = je(s, 2),
                        f = d[0],
                        p = d[1];
                      t([
                        e,
                        $n({
                          icons: { main: f, mask: p },
                          prefix: i,
                          iconName: n,
                          transform: o,
                          symbol: l,
                          maskId: c,
                          title: r,
                          titleId: a,
                          extra: u,
                          watchable: !0,
                        }),
                      ]);
                    })
                    .catch(d);
                });
              }),
              (e.generateAbstractIcon = function (e) {
                var t,
                  n = e.children,
                  r = e.attributes,
                  a = e.main,
                  i = e.transform,
                  o = Wt(e.styles);
                return (
                  o.length > 0 && (r.style = o),
                  Gt(i) &&
                    (t = Fn("generateAbstractTransformGrouping", {
                      main: a,
                      transform: i,
                      containerWidth: a.width,
                      iconWidth: a.width,
                    })),
                  n.push(t || a.icon),
                  { children: n, attributes: r }
                );
              });
          },
        },
        Cr = {
          mixout: function () {
            return {
              layer: function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                  n = t.classes,
                  r = void 0 === n ? [] : n;
                return Un({ type: "layer" }, function () {
                  Rn("beforeDOMElementCreation", { assembler: e, params: t });
                  var n = [];
                  return (
                    e(function (e) {
                      Array.isArray(e)
                        ? e.map(function (e) {
                            n = n.concat(e.abstract);
                          })
                        : (n = n.concat(e.abstract));
                    }),
                    [
                      {
                        tag: "span",
                        attributes: {
                          class: ["".concat(zt.cssPrefix, "-layers")].concat(Le(r)).join(" "),
                        },
                        children: n,
                      },
                    ]
                  );
                });
              },
            };
          },
        },
        Tr = {
          mixout: function () {
            return {
              counter: function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                  n = t.title,
                  r = void 0 === n ? null : n,
                  a = t.classes,
                  i = void 0 === a ? [] : a,
                  o = t.attributes,
                  l = void 0 === o ? {} : o,
                  s = t.styles,
                  c = void 0 === s ? {} : s;
                return Un({ type: "counter", content: e }, function () {
                  return (
                    Rn("beforeDOMElementCreation", { content: e, params: t }),
                    (function (e) {
                      var t = e.content,
                        n = e.title,
                        r = e.extra,
                        a = Ne(
                          Ne(Ne({}, r.attributes), n ? { title: n } : {}),
                          {},
                          { class: r.classes.join(" ") }
                        ),
                        i = Wt(r.styles);
                      i.length > 0 && (a.style = i);
                      var o = [];
                      return (
                        o.push({ tag: "span", attributes: a, children: [t] }),
                        n &&
                          o.push({ tag: "span", attributes: { class: "sr-only" }, children: [n] }),
                        o
                      );
                    })({
                      content: e.toString(),
                      title: r,
                      extra: {
                        attributes: l,
                        styles: c,
                        classes: ["".concat(zt.cssPrefix, "-layers-counter")].concat(Le(i)),
                      },
                    })
                  );
                });
              },
            };
          },
        },
        Pr = {
          mixout: function () {
            return {
              text: function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                  n = t.transform,
                  r = void 0 === n ? Rt : n,
                  a = t.title,
                  i = void 0 === a ? null : a,
                  o = t.classes,
                  l = void 0 === o ? [] : o,
                  s = t.attributes,
                  c = void 0 === s ? {} : s,
                  u = t.styles,
                  d = void 0 === u ? {} : u;
                return Un({ type: "text", content: e }, function () {
                  return (
                    Rn("beforeDOMElementCreation", { content: e, params: t }),
                    Yn({
                      content: e,
                      transform: Ne(Ne({}, Rt), r),
                      title: i,
                      extra: {
                        attributes: c,
                        styles: d,
                        classes: ["".concat(zt.cssPrefix, "-layers-text")].concat(Le(l)),
                      },
                    })
                  );
                });
              },
            };
          },
          provides: function (e) {
            e.generateLayersText = function (e, t) {
              var n = t.title,
                r = t.transform,
                a = t.extra,
                i = null,
                o = null;
              if (Ze) {
                var l = parseInt(getComputedStyle(e).fontSize, 10),
                  s = e.getBoundingClientRect();
                (i = s.width / l), (o = s.height / l);
              }
              return (
                zt.autoA11y && !n && (a.attributes["aria-hidden"] = "true"),
                Promise.resolve([
                  e,
                  Yn({
                    content: e.innerHTML,
                    width: i,
                    height: o,
                    transform: r,
                    title: n,
                    extra: a,
                    watchable: !0,
                  }),
                ])
              );
            };
          },
        },
        Nr = new RegExp('"', "ug"),
        Or = [1105920, 1112319];
      function Mr(e, t) {
        var n = "".concat(ot).concat(t.replace(":", "-"));
        return new Promise(function (r, a) {
          if (null !== e.getAttribute(n)) return r();
          var i = Bt(e.children).filter(function (e) {
              return e.getAttribute(it) === t;
            })[0],
            o = qe.getComputedStyle(e, t),
            l = o.getPropertyValue("font-family").match(kt),
            s = o.getPropertyValue("font-weight"),
            c = o.getPropertyValue("content");
          if (i && !l) return e.removeChild(i), r();
          if (l && "none" !== c && "" !== c) {
            var u = o.getPropertyValue("content"),
              d = ~["Sharp"].indexOf(l[2]) ? mt : pt,
              f = ~["Solid", "Regular", "Light", "Thin", "Duotone", "Brands", "Kit"].indexOf(l[2])
                ? bt[d][l[2].toLowerCase()]
                : Et[d][s],
              p = (function (e) {
                var t = e.replace(Nr, ""),
                  n = (function (e, t) {
                    var n,
                      r = e.length,
                      a = e.charCodeAt(t);
                    return a >= 55296 &&
                      a <= 56319 &&
                      r > t + 1 &&
                      (n = e.charCodeAt(t + 1)) >= 56320 &&
                      n <= 57343
                      ? 1024 * (a - 55296) + n - 56320 + 65536
                      : a;
                  })(t, 0),
                  r = n >= Or[0] && n <= Or[1],
                  a = 2 === t.length && t[0] === t[1];
                return { value: rn(a ? t[0] : t), isSecondary: r || a };
              })(u),
              m = p.value,
              h = p.isSecondary,
              v = l[0].startsWith("FontAwesome"),
              g = kn(f, m),
              b = g;
            if (v) {
              var y = (function (e) {
                var t = gn[e],
                  n = kn("fas", e);
                return (
                  t ||
                  (n ? { prefix: "fas", iconName: n } : null) || { prefix: null, iconName: null }
                );
              })(m);
              y.iconName && y.prefix && ((g = y.iconName), (f = y.prefix));
            }
            if (!g || h || (i && i.getAttribute(lt) === f && i.getAttribute(st) === b)) r();
            else {
              e.setAttribute(n, b), i && e.removeChild(i);
              var w = {
                  iconName: null,
                  title: null,
                  titleId: null,
                  prefix: null,
                  transform: Rt,
                  symbol: !1,
                  mask: { iconName: null, prefix: null, rest: [] },
                  maskId: null,
                  extra: { classes: [], styles: {}, attributes: {} },
                },
                x = w.extra;
              (x.attributes[it] = t),
                Kn(g, f)
                  .then(function (a) {
                    var i = $n(
                        Ne(
                          Ne({}, w),
                          {},
                          {
                            icons: { main: a, mask: Pn() },
                            prefix: f,
                            iconName: b,
                            extra: x,
                            watchable: !0,
                          }
                        )
                      ),
                      o = Qe.createElementNS("http://www.w3.org/2000/svg", "svg");
                    "::before" === t ? e.insertBefore(o, e.firstChild) : e.appendChild(o),
                      (o.outerHTML = i
                        .map(function (e) {
                          return en(e);
                        })
                        .join("\n")),
                      e.removeAttribute(n),
                      r();
                  })
                  .catch(a);
            }
          } else r();
        });
      }
      function _r(e) {
        return Promise.all([Mr(e, "::before"), Mr(e, "::after")]);
      }
      function jr(e) {
        return (
          e.parentNode !== document.head &&
          !~dt.indexOf(e.tagName.toUpperCase()) &&
          !e.getAttribute(it) &&
          (!e.parentNode || "svg" !== e.parentNode.tagName)
        );
      }
      function Lr(e) {
        if (Je)
          return new Promise(function (t, n) {
            var r = Bt(e.querySelectorAll("*")).filter(jr).map(_r),
              a = nr.begin("searchPseudoElements");
            fr(),
              Promise.all(r)
                .then(function () {
                  a(), pr(), t();
                })
                .catch(function () {
                  a(), pr(), n();
                });
          });
      }
      var zr = !1,
        Ar = function (e) {
          return e
            .toLowerCase()
            .split(" ")
            .reduce(
              function (e, t) {
                var n = t.toLowerCase().split("-"),
                  r = n[0],
                  a = n.slice(1).join("-");
                if (r && "h" === a) return (e.flipX = !0), e;
                if (r && "v" === a) return (e.flipY = !0), e;
                if (((a = parseFloat(a)), isNaN(a))) return e;
                switch (r) {
                  case "grow":
                    e.size = e.size + a;
                    break;
                  case "shrink":
                    e.size = e.size - a;
                    break;
                  case "left":
                    e.x = e.x - a;
                    break;
                  case "right":
                    e.x = e.x + a;
                    break;
                  case "up":
                    e.y = e.y - a;
                    break;
                  case "down":
                    e.y = e.y + a;
                    break;
                  case "rotate":
                    e.rotate = e.rotate + a;
                }
                return e;
              },
              { size: 16, x: 0, y: 0, flipX: !1, flipY: !1, rotate: 0 }
            );
        },
        Ir = {
          mixout: function () {
            return {
              parse: {
                transform: function (e) {
                  return Ar(e);
                },
              },
            };
          },
          hooks: function () {
            return {
              parseNodeAttributes: function (e, t) {
                var n = t.getAttribute("data-fa-transform");
                return n && (e.transform = Ar(n)), e;
              },
            };
          },
          provides: function (e) {
            e.generateAbstractTransformGrouping = function (e) {
              var t = e.main,
                n = e.transform,
                r = e.containerWidth,
                a = e.iconWidth,
                i = { transform: "translate(".concat(r / 2, " 256)") },
                o = "translate(".concat(32 * n.x, ", ").concat(32 * n.y, ") "),
                l = "scale("
                  .concat((n.size / 16) * (n.flipX ? -1 : 1), ", ")
                  .concat((n.size / 16) * (n.flipY ? -1 : 1), ") "),
                s = "rotate(".concat(n.rotate, " 0 0)"),
                c = {
                  outer: i,
                  inner: { transform: "".concat(o, " ").concat(l, " ").concat(s) },
                  path: { transform: "translate(".concat((a / 2) * -1, " -256)") },
                };
              return {
                tag: "g",
                attributes: Ne({}, c.outer),
                children: [
                  {
                    tag: "g",
                    attributes: Ne({}, c.inner),
                    children: [
                      {
                        tag: t.icon.tag,
                        children: t.icon.children,
                        attributes: Ne(Ne({}, t.icon.attributes), c.path),
                      },
                    ],
                  },
                ],
              };
            };
          },
        },
        Rr = { x: 0, y: 0, width: "100%", height: "100%" };
      function Fr(e) {
        var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return e.attributes && (e.attributes.fill || t) && (e.attributes.fill = "black"), e;
      }
      var Dr = {
          hooks: function () {
            return {
              parseNodeAttributes: function (e, t) {
                var n = t.getAttribute("data-fa-mask"),
                  r = n
                    ? Mn(
                        n.split(" ").map(function (e) {
                          return e.trim();
                        })
                      )
                    : Pn();
                return (
                  r.prefix || (r.prefix = Tn()),
                  (e.mask = r),
                  (e.maskId = t.getAttribute("data-fa-mask-id")),
                  e
                );
              },
            };
          },
          provides: function (e) {
            e.generateAbstractMask = function (e) {
              var t,
                n = e.children,
                r = e.attributes,
                a = e.main,
                i = e.mask,
                o = e.maskId,
                l = e.transform,
                s = a.width,
                c = a.icon,
                u = i.width,
                d = i.icon,
                f = (function (e) {
                  var t = e.transform,
                    n = e.containerWidth,
                    r = e.iconWidth,
                    a = { transform: "translate(".concat(n / 2, " 256)") },
                    i = "translate(".concat(32 * t.x, ", ").concat(32 * t.y, ") "),
                    o = "scale("
                      .concat((t.size / 16) * (t.flipX ? -1 : 1), ", ")
                      .concat((t.size / 16) * (t.flipY ? -1 : 1), ") "),
                    l = "rotate(".concat(t.rotate, " 0 0)");
                  return {
                    outer: a,
                    inner: { transform: "".concat(i, " ").concat(o, " ").concat(l) },
                    path: { transform: "translate(".concat((r / 2) * -1, " -256)") },
                  };
                })({ transform: l, containerWidth: u, iconWidth: s }),
                p = { tag: "rect", attributes: Ne(Ne({}, Rr), {}, { fill: "white" }) },
                m = c.children ? { children: c.children.map(Fr) } : {},
                h = {
                  tag: "g",
                  attributes: Ne({}, f.inner),
                  children: [
                    Fr(Ne({ tag: c.tag, attributes: Ne(Ne({}, c.attributes), f.path) }, m)),
                  ],
                },
                v = { tag: "g", attributes: Ne({}, f.outer), children: [h] },
                g = "mask-".concat(o || Dt()),
                b = "clip-".concat(o || Dt()),
                y = {
                  tag: "mask",
                  attributes: Ne(
                    Ne({}, Rr),
                    {},
                    { id: g, maskUnits: "userSpaceOnUse", maskContentUnits: "userSpaceOnUse" }
                  ),
                  children: [p, v],
                },
                w = {
                  tag: "defs",
                  children: [
                    {
                      tag: "clipPath",
                      attributes: { id: b },
                      children: ((t = d), "g" === t.tag ? t.children : [t]),
                    },
                    y,
                  ],
                };
              return (
                n.push(w, {
                  tag: "rect",
                  attributes: Ne(
                    {
                      fill: "currentColor",
                      "clip-path": "url(#".concat(b, ")"),
                      mask: "url(#".concat(g, ")"),
                    },
                    Rr
                  ),
                }),
                { children: n, attributes: r }
              );
            };
          },
        },
        Br = {
          provides: function (e) {
            var t = !1;
            qe.matchMedia && (t = qe.matchMedia("(prefers-reduced-motion: reduce)").matches),
              (e.missingIconAbstract = function () {
                var e = [],
                  n = { fill: "currentColor" },
                  r = { attributeType: "XML", repeatCount: "indefinite", dur: "2s" };
                e.push({
                  tag: "path",
                  attributes: Ne(
                    Ne({}, n),
                    {},
                    {
                      d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z",
                    }
                  ),
                });
                var a = Ne(Ne({}, r), {}, { attributeName: "opacity" }),
                  i = {
                    tag: "circle",
                    attributes: Ne(Ne({}, n), {}, { cx: "256", cy: "364", r: "28" }),
                    children: [],
                  };
                return (
                  t ||
                    i.children.push(
                      {
                        tag: "animate",
                        attributes: Ne(
                          Ne({}, r),
                          {},
                          { attributeName: "r", values: "28;14;28;28;14;28;" }
                        ),
                      },
                      { tag: "animate", attributes: Ne(Ne({}, a), {}, { values: "1;0;1;1;0;1;" }) }
                    ),
                  e.push(i),
                  e.push({
                    tag: "path",
                    attributes: Ne(
                      Ne({}, n),
                      {},
                      {
                        opacity: "1",
                        d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z",
                      }
                    ),
                    children: t
                      ? []
                      : [
                          {
                            tag: "animate",
                            attributes: Ne(Ne({}, a), {}, { values: "1;0;0;0;0;1;" }),
                          },
                        ],
                  }),
                  t ||
                    e.push({
                      tag: "path",
                      attributes: Ne(
                        Ne({}, n),
                        {},
                        {
                          opacity: "0",
                          d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z",
                        }
                      ),
                      children: [
                        {
                          tag: "animate",
                          attributes: Ne(Ne({}, a), {}, { values: "0;0;1;1;0;0;" }),
                        },
                      ],
                    }),
                  { tag: "g", attributes: { class: "missing" }, children: e }
                );
              });
          },
        };
      !(function (e, t) {
        var n = t.mixoutsTo;
        (jn = e),
          (Ln = {}),
          Object.keys(zn).forEach(function (e) {
            -1 === An.indexOf(e) && delete zn[e];
          }),
          jn.forEach(function (e) {
            var t = e.mixout ? e.mixout() : {};
            if (
              (Object.keys(t).forEach(function (e) {
                "function" === typeof t[e] && (n[e] = t[e]),
                  "object" === Oe(t[e]) &&
                    Object.keys(t[e]).forEach(function (r) {
                      n[e] || (n[e] = {}), (n[e][r] = t[e][r]);
                    });
              }),
              e.hooks)
            ) {
              var r = e.hooks();
              Object.keys(r).forEach(function (e) {
                Ln[e] || (Ln[e] = []), Ln[e].push(r[e]);
              });
            }
            e.provides && e.provides(zn);
          });
      })(
        [
          Qt,
          Er,
          Cr,
          Tr,
          Pr,
          {
            hooks: function () {
              return {
                mutationObserverCallbacks: function (e) {
                  return (e.pseudoElementsCallback = Lr), e;
                },
              };
            },
            provides: function (e) {
              e.pseudoElements2svg = function (e) {
                var t = e.node,
                  n = void 0 === t ? Qe : t;
                zt.searchPseudoElements && Lr(n);
              };
            },
          },
          {
            mixout: function () {
              return {
                dom: {
                  unwatch: function () {
                    fr(), (zr = !0);
                  },
                },
              };
            },
            hooks: function () {
              return {
                bootstrap: function () {
                  hr(In("mutationObserverCallbacks", {}));
                },
                noAuto: function () {
                  mr && mr.disconnect();
                },
                watch: function (e) {
                  var t = e.observeMutationsRoot;
                  zr ? pr() : hr(In("mutationObserverCallbacks", { observeMutationsRoot: t }));
                },
              };
            },
          },
          Ir,
          Dr,
          Br,
          {
            hooks: function () {
              return {
                parseNodeAttributes: function (e, t) {
                  var n = t.getAttribute("data-fa-symbol"),
                    r = null !== n && ("" === n || n);
                  return (e.symbol = r), e;
                },
              };
            },
          },
        ],
        { mixoutsTo: Wn }
      );
      var Hr = Wn.library,
        Vr = Wn.parse,
        Wr = Wn.icon,
        Gr = n(173),
        Ur = n.n(Gr);
      function $r(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function Yr(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? $r(Object(n), !0).forEach(function (t) {
                Qr(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : $r(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      function qr(e) {
        return (
          (qr =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          qr(e)
        );
      }
      function Qr(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function Xr(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              a = {},
              i = Object.keys(e);
            for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (r = 0; r < i.length; r++)
            (n = i[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]));
        }
        return a;
      }
      function Kr(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return Jr(e);
          })(e) ||
          (function (e) {
            if (
              ("undefined" !== typeof Symbol && null != e[Symbol.iterator]) ||
              null != e["@@iterator"]
            )
              return Array.from(e);
          })(e) ||
          (function (e, t) {
            if (!e) return;
            if ("string" === typeof e) return Jr(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
              return Jr(e, t);
          })(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function Jr(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function Zr(e) {
        return (
          (t = e),
          (t -= 0) === t
            ? e
            : (e = e.replace(/[\-_\s]+(.)?/g, function (e, t) {
                return t ? t.toUpperCase() : "";
              }))
                .substr(0, 1)
                .toLowerCase() + e.substr(1)
        );
        var t;
      }
      var ea = ["style"];
      var ta = !1;
      try {
        ta = !0;
      } catch (mo) {}
      function na(e) {
        return e && "object" === qr(e) && e.prefix && e.iconName && e.icon
          ? e
          : Vr.icon
          ? Vr.icon(e)
          : null === e
          ? null
          : e && "object" === qr(e) && e.prefix && e.iconName
          ? e
          : Array.isArray(e) && 2 === e.length
          ? { prefix: e[0], iconName: e[1] }
          : "string" === typeof e
          ? { prefix: "fas", iconName: e }
          : void 0;
      }
      function ra(e, t) {
        return (Array.isArray(t) && t.length > 0) || (!Array.isArray(t) && t) ? Qr({}, e, t) : {};
      }
      var aa = {
          border: !1,
          className: "",
          mask: null,
          maskId: null,
          fixedWidth: !1,
          inverse: !1,
          flip: !1,
          icon: null,
          listItem: !1,
          pull: null,
          pulse: !1,
          rotation: null,
          size: null,
          spin: !1,
          spinPulse: !1,
          spinReverse: !1,
          beat: !1,
          fade: !1,
          beatFade: !1,
          bounce: !1,
          shake: !1,
          symbol: !1,
          title: "",
          titleId: null,
          transform: null,
          swapOpacity: !1,
        },
        ia = t.forwardRef(function (e, t) {
          var n = Yr(Yr({}, aa), e),
            r = n.icon,
            a = n.mask,
            i = n.symbol,
            o = n.className,
            l = n.title,
            s = n.titleId,
            c = n.maskId,
            u = na(r),
            d = ra(
              "classes",
              [].concat(
                Kr(
                  (function (e) {
                    var t,
                      n = e.beat,
                      r = e.fade,
                      a = e.beatFade,
                      i = e.bounce,
                      o = e.shake,
                      l = e.flash,
                      s = e.spin,
                      c = e.spinPulse,
                      u = e.spinReverse,
                      d = e.pulse,
                      f = e.fixedWidth,
                      p = e.inverse,
                      m = e.border,
                      h = e.listItem,
                      v = e.flip,
                      g = e.size,
                      b = e.rotation,
                      y = e.pull,
                      w =
                        (Qr(
                          (t = {
                            "fa-beat": n,
                            "fa-fade": r,
                            "fa-beat-fade": a,
                            "fa-bounce": i,
                            "fa-shake": o,
                            "fa-flash": l,
                            "fa-spin": s,
                            "fa-spin-reverse": u,
                            "fa-spin-pulse": c,
                            "fa-pulse": d,
                            "fa-fw": f,
                            "fa-inverse": p,
                            "fa-border": m,
                            "fa-li": h,
                            "fa-flip": !0 === v,
                            "fa-flip-horizontal": "horizontal" === v || "both" === v,
                            "fa-flip-vertical": "vertical" === v || "both" === v,
                          }),
                          "fa-".concat(g),
                          "undefined" !== typeof g && null !== g
                        ),
                        Qr(
                          t,
                          "fa-rotate-".concat(b),
                          "undefined" !== typeof b && null !== b && 0 !== b
                        ),
                        Qr(t, "fa-pull-".concat(y), "undefined" !== typeof y && null !== y),
                        Qr(t, "fa-swap-opacity", e.swapOpacity),
                        t);
                    return Object.keys(w)
                      .map(function (e) {
                        return w[e] ? e : null;
                      })
                      .filter(function (e) {
                        return e;
                      });
                  })(n)
                ),
                Kr((o || "").split(" "))
              )
            ),
            f = ra(
              "transform",
              "string" === typeof n.transform ? Vr.transform(n.transform) : n.transform
            ),
            p = ra("mask", na(a)),
            m = Wr(
              u,
              Yr(Yr(Yr(Yr({}, d), f), p), {}, { symbol: i, title: l, titleId: s, maskId: c })
            );
          if (!m)
            return (
              (function () {
                var e;
                !ta &&
                  console &&
                  "function" === typeof console.error &&
                  (e = console).error.apply(e, arguments);
              })("Could not find icon", u),
              null
            );
          var h = m.abstract,
            v = { ref: t };
          return (
            Object.keys(n).forEach(function (e) {
              aa.hasOwnProperty(e) || (v[e] = n[e]);
            }),
            oa(h[0], v)
          );
        });
      (ia.displayName = "FontAwesomeIcon"),
        (ia.propTypes = {
          beat: Ur().bool,
          border: Ur().bool,
          beatFade: Ur().bool,
          bounce: Ur().bool,
          className: Ur().string,
          fade: Ur().bool,
          flash: Ur().bool,
          mask: Ur().oneOfType([Ur().object, Ur().array, Ur().string]),
          maskId: Ur().string,
          fixedWidth: Ur().bool,
          inverse: Ur().bool,
          flip: Ur().oneOf([!0, !1, "horizontal", "vertical", "both"]),
          icon: Ur().oneOfType([Ur().object, Ur().array, Ur().string]),
          listItem: Ur().bool,
          pull: Ur().oneOf(["right", "left"]),
          pulse: Ur().bool,
          rotation: Ur().oneOf([0, 90, 180, 270]),
          shake: Ur().bool,
          size: Ur().oneOf([
            "2xs",
            "xs",
            "sm",
            "lg",
            "xl",
            "2xl",
            "1x",
            "2x",
            "3x",
            "4x",
            "5x",
            "6x",
            "7x",
            "8x",
            "9x",
            "10x",
          ]),
          spin: Ur().bool,
          spinPulse: Ur().bool,
          spinReverse: Ur().bool,
          symbol: Ur().oneOfType([Ur().bool, Ur().string]),
          title: Ur().string,
          titleId: Ur().string,
          transform: Ur().oneOfType([Ur().string, Ur().object]),
          swapOpacity: Ur().bool,
        });
      var oa = function e(t, n) {
          var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          if ("string" === typeof n) return n;
          var a = (n.children || []).map(function (n) {
              return e(t, n);
            }),
            i = Object.keys(n.attributes || {}).reduce(
              function (e, t) {
                var r = n.attributes[t];
                switch (t) {
                  case "class":
                    (e.attrs.className = r), delete n.attributes.class;
                    break;
                  case "style":
                    e.attrs.style = r
                      .split(";")
                      .map(function (e) {
                        return e.trim();
                      })
                      .filter(function (e) {
                        return e;
                      })
                      .reduce(function (e, t) {
                        var n,
                          r = t.indexOf(":"),
                          a = Zr(t.slice(0, r)),
                          i = t.slice(r + 1).trim();
                        return (
                          a.startsWith("webkit")
                            ? (e[((n = a), n.charAt(0).toUpperCase() + n.slice(1))] = i)
                            : (e[a] = i),
                          e
                        );
                      }, {});
                    break;
                  default:
                    0 === t.indexOf("aria-") || 0 === t.indexOf("data-")
                      ? (e.attrs[t.toLowerCase()] = r)
                      : (e.attrs[Zr(t)] = r);
                }
                return e;
              },
              { attrs: {} }
            ),
            o = r.style,
            l = void 0 === o ? {} : o,
            s = Xr(r, ea);
          return (
            (i.attrs.style = Yr(Yr({}, i.attrs.style), l)),
            t.apply(void 0, [n.tag, Yr(Yr({}, i.attrs), s)].concat(Kr(a)))
          );
        }.bind(null, t.createElement),
        la = {
          prefix: "fab",
          iconName: "yelp",
          icon: [
            384,
            512,
            [],
            "f1e9",
            "M42.9 240.32l99.62 48.61c19.2 9.4 16.2 37.51-4.5 42.71L30.5 358.45a22.79 22.79 0 0 1-28.21-19.6 197.16 197.16 0 0 1 9-85.32 22.8 22.8 0 0 1 31.61-13.21zm44 239.25a199.45 199.45 0 0 0 79.42 32.11A22.78 22.78 0 0 0 192.94 490l3.9-110.82c.7-21.3-25.5-31.91-39.81-16.1l-74.21 82.4a22.82 22.82 0 0 0 4.09 34.09zm145.34-109.92l58.81 94a22.93 22.93 0 0 0 34 5.5 198.36 198.36 0 0 0 52.71-67.61A23 23 0 0 0 364.17 370l-105.42-34.26c-20.31-6.5-37.81 15.8-26.51 33.91zm148.33-132.23a197.44 197.44 0 0 0-50.41-69.31 22.85 22.85 0 0 0-34 4.4l-62 91.92c-11.9 17.7 4.7 40.61 25.2 34.71L366 268.63a23 23 0 0 0 14.61-31.21zM62.11 30.18a22.86 22.86 0 0 0-9.9 32l104.12 180.44c11.7 20.2 42.61 11.9 42.61-11.4V22.88a22.67 22.67 0 0 0-24.5-22.8 320.37 320.37 0 0 0-112.33 30.1z",
          ],
        },
        sa = {
          prefix: "fab",
          iconName: "google",
          icon: [
            488,
            512,
            [],
            "f1a0",
            "M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z",
          ],
        },
        ca = {
          prefix: "fab",
          iconName: "facebook-f",
          icon: [
            320,
            512,
            [],
            "f39e",
            "M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z",
          ],
        },
        ua = {
          prefix: "fab",
          iconName: "instagram",
          icon: [
            448,
            512,
            [],
            "f16d",
            "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z",
          ],
        },
        da = {
          prefix: "far",
          iconName: "envelope",
          icon: [
            512,
            512,
            [128386, 9993, 61443],
            "f0e0",
            "M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z",
          ],
        };
      Hr.add(ua, ca, la, sa, da);
      const fa = {
          yelp: "https://www.yelp.com/biz/side-street-cafe-newbury-park",
          google:
            "https://www.google.com/maps/place/Side+Street+Cafe/@34.1926667,-118.929348,17z/data=!3m1!5s0x80e8309687d1ca2d:0xd4bb9d5844d69703!4m8!3m7!1s0x80e83097bf7e226f:0x74efb6209b14f06a!8m2!3d34.1926667!4d-118.929348!9m1!1b1!16s%2Fg%2F1t_kgvg_?entry=ttu&g_ep=EgoyMDI1MDEyOS4xIKXMDSoASAFQAw%3D%3D",
          instagram: "https://www.instagram.com/sidestreetcafe805/",
          facebook: "https://www.facebook.com/people/Side-Street-Cafe/100057583961043/",
          nextdoor: "https://nextdoor.com/pages/side-street-cafe-newbury-park-ca/",
        },
        pa = n.p + "static/media/cafe-sign.0a0b725a88edfa4638d5.png";
      var ma = n(579);
      const ha = () => {
        const [e, n] = (0, t.useState)(!1),
          r = () => {
            n(!e);
          };
        return (0, ma.jsxs)("div", {
          className: "site-header",
          children: [
            (0, ma.jsx)("div", {
              className: "mobile-menu-button",
              onClick: r,
              children: e ? (0, ma.jsx)("p", {}) : (0, ma.jsx)("p", { children: "\u2261" }),
            }),
            (0, ma.jsxs)("div", {
              className: "header-container",
              children: [
                (0, ma.jsxs)("div", {
                  className: "header-contact group1",
                  children: [
                    (0, ma.jsx)("p", { children: "996 Lawrence Drive #103" }),
                    (0, ma.jsx)("p", { children: "Newbury Park, CA" }),
                  ],
                }),
                (0, ma.jsxs)("div", {
                  className: "header-logo",
                  children: [
                    (0, ma.jsx)("img", {
                      className: "cafe-logo",
                      src: pa,
                      alt: "Side Street Cafe Logo",
                    }),
                    (0, ma.jsx)("h2", {
                      className: "header-subtitle",
                      children: "Where the Locals Eat!",
                    }),
                  ],
                }),
                (0, ma.jsxs)("div", {
                  className: "header-contact group2",
                  children: [
                    (0, ma.jsx)("p", { children: "(805) 499-9323" }),
                    (0, ma.jsxs)("ul", {
                      className: "social-buttons",
                      children: [
                        (0, ma.jsx)("li", {
                          children: (0, ma.jsx)("a", {
                            href: fa.yelp,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: (0, ma.jsx)(ia, {
                              icon: "fa-brands fa-yelp",
                              className: "social-icons yelp",
                            }),
                          }),
                        }),
                        (0, ma.jsx)("li", {
                          children: (0, ma.jsx)("a", {
                            href: fa.google,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: (0, ma.jsx)(ia, {
                              icon: "fa-brands fa-google",
                              className: "social-icons google",
                            }),
                          }),
                        }),
                        (0, ma.jsx)("li", {
                          children: (0, ma.jsx)("a", {
                            href: fa.facebook,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: (0, ma.jsx)(ia, {
                              icon: "fa-brands fa-facebook-f",
                              className: "social-icons facebook",
                            }),
                          }),
                        }),
                        (0, ma.jsx)("li", {
                          children: (0, ma.jsx)("a", {
                            href: fa.instagram,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: (0, ma.jsx)(ia, {
                              icon: "fa-brands fa-instagram",
                              className: "social-icons instagram",
                            }),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            e &&
              (0, ma.jsxs)("nav", {
                className: "mobile-menu",
                children: [
                  (0, ma.jsxs)("div", {
                    className: "mobile-menu-close-button",
                    onClick: r,
                    children: [(0, ma.jsx)("p", { children: "\u26cc" }), " "],
                  }),
                  (0, ma.jsxs)("ul", {
                    className: "navbar-options",
                    children: [
                      (0, ma.jsx)("li", {
                        children: (0, ma.jsx)(Ee, {
                          to: "/",
                          className: "link",
                          onClick: r,
                          children: "Home",
                        }),
                      }),
                      (0, ma.jsx)("li", {
                        children: (0, ma.jsx)(Ee, {
                          to: "/menu",
                          className: "link",
                          onClick: r,
                          children: "Menu",
                        }),
                      }),
                      (0, ma.jsx)("li", {
                        children: (0, ma.jsx)(Ee, {
                          to: "/specials",
                          className: "link",
                          onClick: r,
                          children: "Specials",
                        }),
                      }),
                      (0, ma.jsx)("li", {
                        children: (0, ma.jsx)(Ee, {
                          to: "/reviews",
                          className: "link",
                          onClick: r,
                          children: "Reviews",
                        }),
                      }),
                      (0, ma.jsx)("li", {
                        children: (0, ma.jsx)(Ee, {
                          to: "/contact",
                          className: "link",
                          onClick: r,
                          children: "Contact",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            (0, ma.jsx)("nav", {
              className: "header-navigation",
              children: (0, ma.jsxs)("ul", {
                className: "navbar-options",
                children: [
                  (0, ma.jsx)("li", {
                    children: (0, ma.jsx)(Ee, { to: "/", className: "link", children: "Home" }),
                  }),
                  (0, ma.jsx)("li", {
                    children: (0, ma.jsx)(Ee, { to: "/menu", className: "link", children: "Menu" }),
                  }),
                  (0, ma.jsx)("li", {
                    children: (0, ma.jsx)(Ee, {
                      to: "/specials",
                      className: "link",
                      children: "Specials",
                    }),
                  }),
                  (0, ma.jsx)("li", {
                    children: (0, ma.jsx)(Ee, {
                      to: "/reviews",
                      className: "link",
                      children: "Reviews",
                    }),
                  }),
                  (0, ma.jsx)("li", {
                    children: (0, ma.jsx)(Ee, {
                      to: "/contact",
                      className: "link",
                      children: "Contact",
                    }),
                  }),
                ],
              }),
            }),
          ],
        });
      };
      function va(e) {
        return (
          null !== e && "object" === typeof e && "constructor" in e && e.constructor === Object
        );
      }
      function ga(e, t) {
        void 0 === e && (e = {}),
          void 0 === t && (t = {}),
          Object.keys(t).forEach((n) => {
            "undefined" === typeof e[n]
              ? (e[n] = t[n])
              : va(t[n]) && va(e[n]) && Object.keys(t[n]).length > 0 && ga(e[n], t[n]);
          });
      }
      const ba = {
        body: {},
        addEventListener() {},
        removeEventListener() {},
        activeElement: { blur() {}, nodeName: "" },
        querySelector: () => null,
        querySelectorAll: () => [],
        getElementById: () => null,
        createEvent: () => ({ initEvent() {} }),
        createElement: () => ({
          children: [],
          childNodes: [],
          style: {},
          setAttribute() {},
          getElementsByTagName: () => [],
        }),
        createElementNS: () => ({}),
        importNode: () => null,
        location: {
          hash: "",
          host: "",
          hostname: "",
          href: "",
          origin: "",
          pathname: "",
          protocol: "",
          search: "",
        },
      };
      function ya() {
        const e = "undefined" !== typeof document ? document : {};
        return ga(e, ba), e;
      }
      const wa = {
        document: ba,
        navigator: { userAgent: "" },
        location: {
          hash: "",
          host: "",
          hostname: "",
          href: "",
          origin: "",
          pathname: "",
          protocol: "",
          search: "",
        },
        history: { replaceState() {}, pushState() {}, go() {}, back() {} },
        CustomEvent: function () {
          return this;
        },
        addEventListener() {},
        removeEventListener() {},
        getComputedStyle: () => ({ getPropertyValue: () => "" }),
        Image() {},
        Date() {},
        screen: {},
        setTimeout() {},
        clearTimeout() {},
        matchMedia: () => ({}),
        requestAnimationFrame: (e) =>
          "undefined" === typeof setTimeout ? (e(), null) : setTimeout(e, 0),
        cancelAnimationFrame(e) {
          "undefined" !== typeof setTimeout && clearTimeout(e);
        },
      };
      function xa() {
        const e = "undefined" !== typeof window ? window : {};
        return ga(e, wa), e;
      }
      function Sa(e, t) {
        return void 0 === t && (t = 0), setTimeout(e, t);
      }
      function ka() {
        return Date.now();
      }
      function Ea(e, t) {
        void 0 === t && (t = "x");
        const n = xa();
        let r, a, i;
        const o = (function (e) {
          const t = xa();
          let n;
          return (
            t.getComputedStyle && (n = t.getComputedStyle(e, null)),
            !n && e.currentStyle && (n = e.currentStyle),
            n || (n = e.style),
            n
          );
        })(e);
        return (
          n.WebKitCSSMatrix
            ? ((a = o.transform || o.webkitTransform),
              a.split(",").length > 6 &&
                (a = a
                  .split(", ")
                  .map((e) => e.replace(",", "."))
                  .join(", ")),
              (i = new n.WebKitCSSMatrix("none" === a ? "" : a)))
            : ((i =
                o.MozTransform ||
                o.OTransform ||
                o.MsTransform ||
                o.msTransform ||
                o.transform ||
                o.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")),
              (r = i.toString().split(","))),
          "x" === t &&
            (a = n.WebKitCSSMatrix
              ? i.m41
              : 16 === r.length
              ? parseFloat(r[12])
              : parseFloat(r[4])),
          "y" === t &&
            (a = n.WebKitCSSMatrix
              ? i.m42
              : 16 === r.length
              ? parseFloat(r[13])
              : parseFloat(r[5])),
          a || 0
        );
      }
      function Ca(e) {
        return (
          "object" === typeof e &&
          null !== e &&
          e.constructor &&
          "Object" === Object.prototype.toString.call(e).slice(8, -1)
        );
      }
      function Ta() {
        const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
          t = ["__proto__", "constructor", "prototype"];
        for (let r = 1; r < arguments.length; r += 1) {
          const a = r < 0 || arguments.length <= r ? void 0 : arguments[r];
          if (
            void 0 !== a &&
            null !== a &&
            ((n = a),
            !("undefined" !== typeof window && "undefined" !== typeof window.HTMLElement
              ? n instanceof HTMLElement
              : n && (1 === n.nodeType || 11 === n.nodeType)))
          ) {
            const n = Object.keys(Object(a)).filter((e) => t.indexOf(e) < 0);
            for (let t = 0, r = n.length; t < r; t += 1) {
              const r = n[t],
                i = Object.getOwnPropertyDescriptor(a, r);
              void 0 !== i &&
                i.enumerable &&
                (Ca(e[r]) && Ca(a[r])
                  ? a[r].__swiper__
                    ? (e[r] = a[r])
                    : Ta(e[r], a[r])
                  : !Ca(e[r]) && Ca(a[r])
                  ? ((e[r] = {}), a[r].__swiper__ ? (e[r] = a[r]) : Ta(e[r], a[r]))
                  : (e[r] = a[r]));
            }
          }
        }
        var n;
        return e;
      }
      function Pa(e, t, n) {
        e.style.setProperty(t, n);
      }
      function Na(e) {
        let { swiper: t, targetPosition: n, side: r } = e;
        const a = xa(),
          i = -t.translate;
        let o,
          l = null;
        const s = t.params.speed;
        (t.wrapperEl.style.scrollSnapType = "none"), a.cancelAnimationFrame(t.cssModeFrameID);
        const c = n > i ? "next" : "prev",
          u = (e, t) => ("next" === c && e >= t) || ("prev" === c && e <= t),
          d = () => {
            (o = new Date().getTime()), null === l && (l = o);
            const e = Math.max(Math.min((o - l) / s, 1), 0),
              c = 0.5 - Math.cos(e * Math.PI) / 2;
            let f = i + c * (n - i);
            if ((u(f, n) && (f = n), t.wrapperEl.scrollTo({ [r]: f }), u(f, n)))
              return (
                (t.wrapperEl.style.overflow = "hidden"),
                (t.wrapperEl.style.scrollSnapType = ""),
                setTimeout(() => {
                  (t.wrapperEl.style.overflow = ""), t.wrapperEl.scrollTo({ [r]: f });
                }),
                void a.cancelAnimationFrame(t.cssModeFrameID)
              );
            t.cssModeFrameID = a.requestAnimationFrame(d);
          };
        d();
      }
      function Oa(e) {
        return (
          e.querySelector(".swiper-slide-transform") ||
          (e.shadowRoot && e.shadowRoot.querySelector(".swiper-slide-transform")) ||
          e
        );
      }
      function Ma(e, t) {
        void 0 === t && (t = "");
        const n = xa(),
          r = [...e.children];
        return (
          n.HTMLSlotElement && e instanceof HTMLSlotElement && r.push(...e.assignedElements()),
          t ? r.filter((e) => e.matches(t)) : r
        );
      }
      function _a(e) {
        try {
          return void console.warn(e);
        } catch (t) {}
      }
      function ja(e, t) {
        void 0 === t && (t = []);
        const n = document.createElement(e);
        return (
          n.classList.add(
            ...(Array.isArray(t)
              ? t
              : (function (e) {
                  return (
                    void 0 === e && (e = ""),
                    e
                      .trim()
                      .split(" ")
                      .filter((e) => !!e.trim())
                  );
                })(t))
          ),
          n
        );
      }
      function La(e, t) {
        return xa().getComputedStyle(e, null).getPropertyValue(t);
      }
      function za(e) {
        let t,
          n = e;
        if (n) {
          for (t = 0; null !== (n = n.previousSibling); ) 1 === n.nodeType && (t += 1);
          return t;
        }
      }
      function Aa(e, t) {
        const n = [];
        let r = e.parentElement;
        for (; r; ) t ? r.matches(t) && n.push(r) : n.push(r), (r = r.parentElement);
        return n;
      }
      function Ia(e, t, n) {
        const r = xa();
        return n
          ? e["width" === t ? "offsetWidth" : "offsetHeight"] +
              parseFloat(
                r
                  .getComputedStyle(e, null)
                  .getPropertyValue("width" === t ? "margin-right" : "margin-top")
              ) +
              parseFloat(
                r
                  .getComputedStyle(e, null)
                  .getPropertyValue("width" === t ? "margin-left" : "margin-bottom")
              )
          : e.offsetWidth;
      }
      function Ra(e) {
        return (Array.isArray(e) ? e : [e]).filter((e) => !!e);
      }
      let Fa, Da, Ba;
      function Ha() {
        return (
          Fa ||
            (Fa = (function () {
              const e = xa(),
                t = ya();
              return {
                smoothScroll:
                  t.documentElement &&
                  t.documentElement.style &&
                  "scrollBehavior" in t.documentElement.style,
                touch: !!("ontouchstart" in e || (e.DocumentTouch && t instanceof e.DocumentTouch)),
              };
            })()),
          Fa
        );
      }
      function Va(e) {
        return (
          void 0 === e && (e = {}),
          Da ||
            (Da = (function (e) {
              let { userAgent: t } = void 0 === e ? {} : e;
              const n = Ha(),
                r = xa(),
                a = r.navigator.platform,
                i = t || r.navigator.userAgent,
                o = { ios: !1, android: !1 },
                l = r.screen.width,
                s = r.screen.height,
                c = i.match(/(Android);?[\s\/]+([\d.]+)?/);
              let u = i.match(/(iPad).*OS\s([\d_]+)/);
              const d = i.match(/(iPod)(.*OS\s([\d_]+))?/),
                f = !u && i.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                p = "Win32" === a;
              let m = "MacIntel" === a;
              return (
                !u &&
                  m &&
                  n.touch &&
                  [
                    "1024x1366",
                    "1366x1024",
                    "834x1194",
                    "1194x834",
                    "834x1112",
                    "1112x834",
                    "768x1024",
                    "1024x768",
                    "820x1180",
                    "1180x820",
                    "810x1080",
                    "1080x810",
                  ].indexOf("".concat(l, "x").concat(s)) >= 0 &&
                  ((u = i.match(/(Version)\/([\d.]+)/)), u || (u = [0, 1, "13_0_0"]), (m = !1)),
                c && !p && ((o.os = "android"), (o.android = !0)),
                (u || f || d) && ((o.os = "ios"), (o.ios = !0)),
                o
              );
            })(e)),
          Da
        );
      }
      function Wa() {
        return (
          Ba ||
            (Ba = (function () {
              const e = xa(),
                t = Va();
              let n = !1;
              function r() {
                const t = e.navigator.userAgent.toLowerCase();
                return (
                  t.indexOf("safari") >= 0 && t.indexOf("chrome") < 0 && t.indexOf("android") < 0
                );
              }
              if (r()) {
                const t = String(e.navigator.userAgent);
                if (t.includes("Version/")) {
                  const [e, r] = t
                    .split("Version/")[1]
                    .split(" ")[0]
                    .split(".")
                    .map((e) => Number(e));
                  n = e < 16 || (16 === e && r < 2);
                }
              }
              const a = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent),
                i = r();
              return {
                isSafari: n || i,
                needPerspectiveFix: n,
                need3dFix: i || (a && t.ios),
                isWebView: a,
              };
            })()),
          Ba
        );
      }
      var Ga = {
        on(e, t, n) {
          const r = this;
          if (!r.eventsListeners || r.destroyed) return r;
          if ("function" !== typeof t) return r;
          const a = n ? "unshift" : "push";
          return (
            e.split(" ").forEach((e) => {
              r.eventsListeners[e] || (r.eventsListeners[e] = []), r.eventsListeners[e][a](t);
            }),
            r
          );
        },
        once(e, t, n) {
          const r = this;
          if (!r.eventsListeners || r.destroyed) return r;
          if ("function" !== typeof t) return r;
          function a() {
            r.off(e, a), a.__emitterProxy && delete a.__emitterProxy;
            for (var n = arguments.length, i = new Array(n), o = 0; o < n; o++) i[o] = arguments[o];
            t.apply(r, i);
          }
          return (a.__emitterProxy = t), r.on(e, a, n);
        },
        onAny(e, t) {
          const n = this;
          if (!n.eventsListeners || n.destroyed) return n;
          if ("function" !== typeof e) return n;
          const r = t ? "unshift" : "push";
          return n.eventsAnyListeners.indexOf(e) < 0 && n.eventsAnyListeners[r](e), n;
        },
        offAny(e) {
          const t = this;
          if (!t.eventsListeners || t.destroyed) return t;
          if (!t.eventsAnyListeners) return t;
          const n = t.eventsAnyListeners.indexOf(e);
          return n >= 0 && t.eventsAnyListeners.splice(n, 1), t;
        },
        off(e, t) {
          const n = this;
          return !n.eventsListeners || n.destroyed
            ? n
            : n.eventsListeners
            ? (e.split(" ").forEach((e) => {
                "undefined" === typeof t
                  ? (n.eventsListeners[e] = [])
                  : n.eventsListeners[e] &&
                    n.eventsListeners[e].forEach((r, a) => {
                      (r === t || (r.__emitterProxy && r.__emitterProxy === t)) &&
                        n.eventsListeners[e].splice(a, 1);
                    });
              }),
              n)
            : n;
        },
        emit() {
          const e = this;
          if (!e.eventsListeners || e.destroyed) return e;
          if (!e.eventsListeners) return e;
          let t, n, r;
          for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o];
          "string" === typeof i[0] || Array.isArray(i[0])
            ? ((t = i[0]), (n = i.slice(1, i.length)), (r = e))
            : ((t = i[0].events), (n = i[0].data), (r = i[0].context || e)),
            n.unshift(r);
          return (
            (Array.isArray(t) ? t : t.split(" ")).forEach((t) => {
              e.eventsAnyListeners &&
                e.eventsAnyListeners.length &&
                e.eventsAnyListeners.forEach((e) => {
                  e.apply(r, [t, ...n]);
                }),
                e.eventsListeners &&
                  e.eventsListeners[t] &&
                  e.eventsListeners[t].forEach((e) => {
                    e.apply(r, n);
                  });
            }),
            e
          );
        },
      };
      const Ua = (e, t, n) => {
        t && !e.classList.contains(n)
          ? e.classList.add(n)
          : !t && e.classList.contains(n) && e.classList.remove(n);
      };
      const $a = (e, t, n) => {
        t && !e.classList.contains(n)
          ? e.classList.add(n)
          : !t && e.classList.contains(n) && e.classList.remove(n);
      };
      const Ya = (e, t) => {
          if (!e || e.destroyed || !e.params) return;
          const n = t.closest(e.isElement ? "swiper-slide" : ".".concat(e.params.slideClass));
          if (n) {
            let t = n.querySelector(".".concat(e.params.lazyPreloaderClass));
            !t &&
              e.isElement &&
              (n.shadowRoot
                ? (t = n.shadowRoot.querySelector(".".concat(e.params.lazyPreloaderClass)))
                : requestAnimationFrame(() => {
                    n.shadowRoot &&
                      ((t = n.shadowRoot.querySelector(".".concat(e.params.lazyPreloaderClass))),
                      t && t.remove());
                  })),
              t && t.remove();
          }
        },
        qa = (e, t) => {
          if (!e.slides[t]) return;
          const n = e.slides[t].querySelector('[loading="lazy"]');
          n && n.removeAttribute("loading");
        },
        Qa = (e) => {
          if (!e || e.destroyed || !e.params) return;
          let t = e.params.lazyPreloadPrevNext;
          const n = e.slides.length;
          if (!n || !t || t < 0) return;
          t = Math.min(t, n);
          const r =
              "auto" === e.params.slidesPerView
                ? e.slidesPerViewDynamic()
                : Math.ceil(e.params.slidesPerView),
            a = e.activeIndex;
          if (e.params.grid && e.params.grid.rows > 1) {
            const n = a,
              i = [n - t];
            return (
              i.push(...Array.from({ length: t }).map((e, t) => n + r + t)),
              void e.slides.forEach((t, n) => {
                i.includes(t.column) && qa(e, n);
              })
            );
          }
          const i = a + r - 1;
          if (e.params.rewind || e.params.loop)
            for (let o = a - t; o <= i + t; o += 1) {
              const t = ((o % n) + n) % n;
              (t < a || t > i) && qa(e, t);
            }
          else
            for (let o = Math.max(a - t, 0); o <= Math.min(i + t, n - 1); o += 1)
              o !== a && (o > i || o < a) && qa(e, o);
        };
      var Xa = {
        updateSize: function () {
          const e = this;
          let t, n;
          const r = e.el;
          (t =
            "undefined" !== typeof e.params.width && null !== e.params.width
              ? e.params.width
              : r.clientWidth),
            (n =
              "undefined" !== typeof e.params.height && null !== e.params.height
                ? e.params.height
                : r.clientHeight),
            (0 === t && e.isHorizontal()) ||
              (0 === n && e.isVertical()) ||
              ((t =
                t -
                parseInt(La(r, "padding-left") || 0, 10) -
                parseInt(La(r, "padding-right") || 0, 10)),
              (n =
                n -
                parseInt(La(r, "padding-top") || 0, 10) -
                parseInt(La(r, "padding-bottom") || 0, 10)),
              Number.isNaN(t) && (t = 0),
              Number.isNaN(n) && (n = 0),
              Object.assign(e, { width: t, height: n, size: e.isHorizontal() ? t : n }));
        },
        updateSlides: function () {
          const e = this;
          function t(t, n) {
            return parseFloat(t.getPropertyValue(e.getDirectionLabel(n)) || 0);
          }
          const n = e.params,
            { wrapperEl: r, slidesEl: a, size: i, rtlTranslate: o, wrongRTL: l } = e,
            s = e.virtual && n.virtual.enabled,
            c = s ? e.virtual.slides.length : e.slides.length,
            u = Ma(a, ".".concat(e.params.slideClass, ", swiper-slide")),
            d = s ? e.virtual.slides.length : u.length;
          let f = [];
          const p = [],
            m = [];
          let h = n.slidesOffsetBefore;
          "function" === typeof h && (h = n.slidesOffsetBefore.call(e));
          let v = n.slidesOffsetAfter;
          "function" === typeof v && (v = n.slidesOffsetAfter.call(e));
          const g = e.snapGrid.length,
            b = e.slidesGrid.length;
          let y = n.spaceBetween,
            w = -h,
            x = 0,
            S = 0;
          if ("undefined" === typeof i) return;
          "string" === typeof y && y.indexOf("%") >= 0
            ? (y = (parseFloat(y.replace("%", "")) / 100) * i)
            : "string" === typeof y && (y = parseFloat(y)),
            (e.virtualSize = -y),
            u.forEach((e) => {
              o ? (e.style.marginLeft = "") : (e.style.marginRight = ""),
                (e.style.marginBottom = ""),
                (e.style.marginTop = "");
            }),
            n.centeredSlides &&
              n.cssMode &&
              (Pa(r, "--swiper-centered-offset-before", ""),
              Pa(r, "--swiper-centered-offset-after", ""));
          const k = n.grid && n.grid.rows > 1 && e.grid;
          let E;
          k ? e.grid.initSlides(u) : e.grid && e.grid.unsetSlides();
          const C =
            "auto" === n.slidesPerView &&
            n.breakpoints &&
            Object.keys(n.breakpoints).filter(
              (e) => "undefined" !== typeof n.breakpoints[e].slidesPerView
            ).length > 0;
          for (let T = 0; T < d; T += 1) {
            let r;
            if (
              ((E = 0),
              u[T] && (r = u[T]),
              k && e.grid.updateSlide(T, r, u),
              !u[T] || "none" !== La(r, "display"))
            ) {
              if ("auto" === n.slidesPerView) {
                C && (u[T].style[e.getDirectionLabel("width")] = "");
                const a = getComputedStyle(r),
                  i = r.style.transform,
                  o = r.style.webkitTransform;
                if (
                  (i && (r.style.transform = "none"),
                  o && (r.style.webkitTransform = "none"),
                  n.roundLengths)
                )
                  E = e.isHorizontal() ? Ia(r, "width", !0) : Ia(r, "height", !0);
                else {
                  const e = t(a, "width"),
                    n = t(a, "padding-left"),
                    i = t(a, "padding-right"),
                    o = t(a, "margin-left"),
                    l = t(a, "margin-right"),
                    s = a.getPropertyValue("box-sizing");
                  if (s && "border-box" === s) E = e + o + l;
                  else {
                    const { clientWidth: t, offsetWidth: a } = r;
                    E = e + n + i + o + l + (a - t);
                  }
                }
                i && (r.style.transform = i),
                  o && (r.style.webkitTransform = o),
                  n.roundLengths && (E = Math.floor(E));
              } else
                (E = (i - (n.slidesPerView - 1) * y) / n.slidesPerView),
                  n.roundLengths && (E = Math.floor(E)),
                  u[T] && (u[T].style[e.getDirectionLabel("width")] = "".concat(E, "px"));
              u[T] && (u[T].swiperSlideSize = E),
                m.push(E),
                n.centeredSlides
                  ? ((w = w + E / 2 + x / 2 + y),
                    0 === x && 0 !== T && (w = w - i / 2 - y),
                    0 === T && (w = w - i / 2 - y),
                    Math.abs(w) < 0.001 && (w = 0),
                    n.roundLengths && (w = Math.floor(w)),
                    S % n.slidesPerGroup === 0 && f.push(w),
                    p.push(w))
                  : (n.roundLengths && (w = Math.floor(w)),
                    (S - Math.min(e.params.slidesPerGroupSkip, S)) % e.params.slidesPerGroup ===
                      0 && f.push(w),
                    p.push(w),
                    (w = w + E + y)),
                (e.virtualSize += E + y),
                (x = E),
                (S += 1);
            }
          }
          if (
            ((e.virtualSize = Math.max(e.virtualSize, i) + v),
            o &&
              l &&
              ("slide" === n.effect || "coverflow" === n.effect) &&
              (r.style.width = "".concat(e.virtualSize + y, "px")),
            n.setWrapperSize &&
              (r.style[e.getDirectionLabel("width")] = "".concat(e.virtualSize + y, "px")),
            k && e.grid.updateWrapperSize(E, f),
            !n.centeredSlides)
          ) {
            const t = [];
            for (let r = 0; r < f.length; r += 1) {
              let a = f[r];
              n.roundLengths && (a = Math.floor(a)), f[r] <= e.virtualSize - i && t.push(a);
            }
            (f = t),
              Math.floor(e.virtualSize - i) - Math.floor(f[f.length - 1]) > 1 &&
                f.push(e.virtualSize - i);
          }
          if (s && n.loop) {
            const t = m[0] + y;
            if (n.slidesPerGroup > 1) {
              const r = Math.ceil(
                  (e.virtual.slidesBefore + e.virtual.slidesAfter) / n.slidesPerGroup
                ),
                a = t * n.slidesPerGroup;
              for (let e = 0; e < r; e += 1) f.push(f[f.length - 1] + a);
            }
            for (let r = 0; r < e.virtual.slidesBefore + e.virtual.slidesAfter; r += 1)
              1 === n.slidesPerGroup && f.push(f[f.length - 1] + t),
                p.push(p[p.length - 1] + t),
                (e.virtualSize += t);
          }
          if ((0 === f.length && (f = [0]), 0 !== y)) {
            const t = e.isHorizontal() && o ? "marginLeft" : e.getDirectionLabel("marginRight");
            u.filter((e, t) => !(n.cssMode && !n.loop) || t !== u.length - 1).forEach((e) => {
              e.style[t] = "".concat(y, "px");
            });
          }
          if (n.centeredSlides && n.centeredSlidesBounds) {
            let e = 0;
            m.forEach((t) => {
              e += t + (y || 0);
            }),
              (e -= y);
            const t = e > i ? e - i : 0;
            f = f.map((e) => (e <= 0 ? -h : e > t ? t + v : e));
          }
          if (n.centerInsufficientSlides) {
            let e = 0;
            m.forEach((t) => {
              e += t + (y || 0);
            }),
              (e -= y);
            const t = (n.slidesOffsetBefore || 0) + (n.slidesOffsetAfter || 0);
            if (e + t < i) {
              const n = (i - e - t) / 2;
              f.forEach((e, t) => {
                f[t] = e - n;
              }),
                p.forEach((e, t) => {
                  p[t] = e + n;
                });
            }
          }
          if (
            (Object.assign(e, { slides: u, snapGrid: f, slidesGrid: p, slidesSizesGrid: m }),
            n.centeredSlides && n.cssMode && !n.centeredSlidesBounds)
          ) {
            Pa(r, "--swiper-centered-offset-before", "".concat(-f[0], "px")),
              Pa(
                r,
                "--swiper-centered-offset-after",
                "".concat(e.size / 2 - m[m.length - 1] / 2, "px")
              );
            const t = -e.snapGrid[0],
              n = -e.slidesGrid[0];
            (e.snapGrid = e.snapGrid.map((e) => e + t)),
              (e.slidesGrid = e.slidesGrid.map((e) => e + n));
          }
          if (
            (d !== c && e.emit("slidesLengthChange"),
            f.length !== g &&
              (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")),
            p.length !== b && e.emit("slidesGridLengthChange"),
            n.watchSlidesProgress && e.updateSlidesOffset(),
            e.emit("slidesUpdated"),
            !s && !n.cssMode && ("slide" === n.effect || "fade" === n.effect))
          ) {
            const t = "".concat(n.containerModifierClass, "backface-hidden"),
              r = e.el.classList.contains(t);
            d <= n.maxBackfaceHiddenSlides
              ? r || e.el.classList.add(t)
              : r && e.el.classList.remove(t);
          }
        },
        updateAutoHeight: function (e) {
          const t = this,
            n = [],
            r = t.virtual && t.params.virtual.enabled;
          let a,
            i = 0;
          "number" === typeof e ? t.setTransition(e) : !0 === e && t.setTransition(t.params.speed);
          const o = (e) => (r ? t.slides[t.getSlideIndexByData(e)] : t.slides[e]);
          if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
            if (t.params.centeredSlides)
              (t.visibleSlides || []).forEach((e) => {
                n.push(e);
              });
            else
              for (a = 0; a < Math.ceil(t.params.slidesPerView); a += 1) {
                const e = t.activeIndex + a;
                if (e > t.slides.length && !r) break;
                n.push(o(e));
              }
          else n.push(o(t.activeIndex));
          for (a = 0; a < n.length; a += 1)
            if ("undefined" !== typeof n[a]) {
              const e = n[a].offsetHeight;
              i = e > i ? e : i;
            }
          (i || 0 === i) && (t.wrapperEl.style.height = "".concat(i, "px"));
        },
        updateSlidesOffset: function () {
          const e = this,
            t = e.slides,
            n = e.isElement
              ? e.isHorizontal()
                ? e.wrapperEl.offsetLeft
                : e.wrapperEl.offsetTop
              : 0;
          for (let r = 0; r < t.length; r += 1)
            t[r].swiperSlideOffset =
              (e.isHorizontal() ? t[r].offsetLeft : t[r].offsetTop) - n - e.cssOverflowAdjustment();
        },
        updateSlidesProgress: function (e) {
          void 0 === e && (e = (this && this.translate) || 0);
          const t = this,
            n = t.params,
            { slides: r, rtlTranslate: a, snapGrid: i } = t;
          if (0 === r.length) return;
          "undefined" === typeof r[0].swiperSlideOffset && t.updateSlidesOffset();
          let o = -e;
          a && (o = e), (t.visibleSlidesIndexes = []), (t.visibleSlides = []);
          let l = n.spaceBetween;
          "string" === typeof l && l.indexOf("%") >= 0
            ? (l = (parseFloat(l.replace("%", "")) / 100) * t.size)
            : "string" === typeof l && (l = parseFloat(l));
          for (let s = 0; s < r.length; s += 1) {
            const e = r[s];
            let c = e.swiperSlideOffset;
            n.cssMode && n.centeredSlides && (c -= r[0].swiperSlideOffset);
            const u = (o + (n.centeredSlides ? t.minTranslate() : 0) - c) / (e.swiperSlideSize + l),
              d =
                (o - i[0] + (n.centeredSlides ? t.minTranslate() : 0) - c) /
                (e.swiperSlideSize + l),
              f = -(o - c),
              p = f + t.slidesSizesGrid[s],
              m = f >= 0 && f <= t.size - t.slidesSizesGrid[s],
              h = (f >= 0 && f < t.size - 1) || (p > 1 && p <= t.size) || (f <= 0 && p >= t.size);
            h && (t.visibleSlides.push(e), t.visibleSlidesIndexes.push(s)),
              Ua(e, h, n.slideVisibleClass),
              Ua(e, m, n.slideFullyVisibleClass),
              (e.progress = a ? -u : u),
              (e.originalProgress = a ? -d : d);
          }
        },
        updateProgress: function (e) {
          const t = this;
          if ("undefined" === typeof e) {
            const n = t.rtlTranslate ? -1 : 1;
            e = (t && t.translate && t.translate * n) || 0;
          }
          const n = t.params,
            r = t.maxTranslate() - t.minTranslate();
          let { progress: a, isBeginning: i, isEnd: o, progressLoop: l } = t;
          const s = i,
            c = o;
          if (0 === r) (a = 0), (i = !0), (o = !0);
          else {
            a = (e - t.minTranslate()) / r;
            const n = Math.abs(e - t.minTranslate()) < 1,
              l = Math.abs(e - t.maxTranslate()) < 1;
            (i = n || a <= 0), (o = l || a >= 1), n && (a = 0), l && (a = 1);
          }
          if (n.loop) {
            const n = t.getSlideIndexByData(0),
              r = t.getSlideIndexByData(t.slides.length - 1),
              a = t.slidesGrid[n],
              i = t.slidesGrid[r],
              o = t.slidesGrid[t.slidesGrid.length - 1],
              s = Math.abs(e);
            (l = s >= a ? (s - a) / o : (s + o - i) / o), l > 1 && (l -= 1);
          }
          Object.assign(t, { progress: a, progressLoop: l, isBeginning: i, isEnd: o }),
            (n.watchSlidesProgress || (n.centeredSlides && n.autoHeight)) &&
              t.updateSlidesProgress(e),
            i && !s && t.emit("reachBeginning toEdge"),
            o && !c && t.emit("reachEnd toEdge"),
            ((s && !i) || (c && !o)) && t.emit("fromEdge"),
            t.emit("progress", a);
        },
        updateSlidesClasses: function () {
          const e = this,
            { slides: t, params: n, slidesEl: r, activeIndex: a } = e,
            i = e.virtual && n.virtual.enabled,
            o = e.grid && n.grid && n.grid.rows > 1,
            l = (e) => Ma(r, ".".concat(n.slideClass).concat(e, ", swiper-slide").concat(e))[0];
          let s, c, u;
          if (i)
            if (n.loop) {
              let t = a - e.virtual.slidesBefore;
              t < 0 && (t = e.virtual.slides.length + t),
                t >= e.virtual.slides.length && (t -= e.virtual.slides.length),
                (s = l('[data-swiper-slide-index="'.concat(t, '"]')));
            } else s = l('[data-swiper-slide-index="'.concat(a, '"]'));
          else
            o
              ? ((s = t.find((e) => e.column === a)),
                (u = t.find((e) => e.column === a + 1)),
                (c = t.find((e) => e.column === a - 1)))
              : (s = t[a]);
          s &&
            (o ||
              ((u = (function (e, t) {
                const n = [];
                for (; e.nextElementSibling; ) {
                  const r = e.nextElementSibling;
                  t ? r.matches(t) && n.push(r) : n.push(r), (e = r);
                }
                return n;
              })(s, ".".concat(n.slideClass, ", swiper-slide"))[0]),
              n.loop && !u && (u = t[0]),
              (c = (function (e, t) {
                const n = [];
                for (; e.previousElementSibling; ) {
                  const r = e.previousElementSibling;
                  t ? r.matches(t) && n.push(r) : n.push(r), (e = r);
                }
                return n;
              })(s, ".".concat(n.slideClass, ", swiper-slide"))[0]),
              n.loop && 0 === !c && (c = t[t.length - 1]))),
            t.forEach((e) => {
              $a(e, e === s, n.slideActiveClass),
                $a(e, e === u, n.slideNextClass),
                $a(e, e === c, n.slidePrevClass);
            }),
            e.emitSlidesClasses();
        },
        updateActiveIndex: function (e) {
          const t = this,
            n = t.rtlTranslate ? t.translate : -t.translate,
            { snapGrid: r, params: a, activeIndex: i, realIndex: o, snapIndex: l } = t;
          let s,
            c = e;
          const u = (e) => {
            let n = e - t.virtual.slidesBefore;
            return (
              n < 0 && (n = t.virtual.slides.length + n),
              n >= t.virtual.slides.length && (n -= t.virtual.slides.length),
              n
            );
          };
          if (
            ("undefined" === typeof c &&
              (c = (function (e) {
                const { slidesGrid: t, params: n } = e,
                  r = e.rtlTranslate ? e.translate : -e.translate;
                let a;
                for (let i = 0; i < t.length; i += 1)
                  "undefined" !== typeof t[i + 1]
                    ? r >= t[i] && r < t[i + 1] - (t[i + 1] - t[i]) / 2
                      ? (a = i)
                      : r >= t[i] && r < t[i + 1] && (a = i + 1)
                    : r >= t[i] && (a = i);
                return n.normalizeSlideIndex && (a < 0 || "undefined" === typeof a) && (a = 0), a;
              })(t)),
            r.indexOf(n) >= 0)
          )
            s = r.indexOf(n);
          else {
            const e = Math.min(a.slidesPerGroupSkip, c);
            s = e + Math.floor((c - e) / a.slidesPerGroup);
          }
          if ((s >= r.length && (s = r.length - 1), c === i && !t.params.loop))
            return void (s !== l && ((t.snapIndex = s), t.emit("snapIndexChange")));
          if (c === i && t.params.loop && t.virtual && t.params.virtual.enabled)
            return void (t.realIndex = u(c));
          const d = t.grid && a.grid && a.grid.rows > 1;
          let f;
          if (t.virtual && a.virtual.enabled && a.loop) f = u(c);
          else if (d) {
            const e = t.slides.find((e) => e.column === c);
            let n = parseInt(e.getAttribute("data-swiper-slide-index"), 10);
            Number.isNaN(n) && (n = Math.max(t.slides.indexOf(e), 0)),
              (f = Math.floor(n / a.grid.rows));
          } else if (t.slides[c]) {
            const e = t.slides[c].getAttribute("data-swiper-slide-index");
            f = e ? parseInt(e, 10) : c;
          } else f = c;
          Object.assign(t, {
            previousSnapIndex: l,
            snapIndex: s,
            previousRealIndex: o,
            realIndex: f,
            previousIndex: i,
            activeIndex: c,
          }),
            t.initialized && Qa(t),
            t.emit("activeIndexChange"),
            t.emit("snapIndexChange"),
            (t.initialized || t.params.runCallbacksOnInit) &&
              (o !== f && t.emit("realIndexChange"), t.emit("slideChange"));
        },
        updateClickedSlide: function (e, t) {
          const n = this,
            r = n.params;
          let a = e.closest(".".concat(r.slideClass, ", swiper-slide"));
          !a &&
            n.isElement &&
            t &&
            t.length > 1 &&
            t.includes(e) &&
            [...t.slice(t.indexOf(e) + 1, t.length)].forEach((e) => {
              !a && e.matches && e.matches(".".concat(r.slideClass, ", swiper-slide")) && (a = e);
            });
          let i,
            o = !1;
          if (a)
            for (let l = 0; l < n.slides.length; l += 1)
              if (n.slides[l] === a) {
                (o = !0), (i = l);
                break;
              }
          if (!a || !o) return (n.clickedSlide = void 0), void (n.clickedIndex = void 0);
          (n.clickedSlide = a),
            n.virtual && n.params.virtual.enabled
              ? (n.clickedIndex = parseInt(a.getAttribute("data-swiper-slide-index"), 10))
              : (n.clickedIndex = i),
            r.slideToClickedSlide &&
              void 0 !== n.clickedIndex &&
              n.clickedIndex !== n.activeIndex &&
              n.slideToClickedSlide();
        },
      };
      var Ka = {
        getTranslate: function (e) {
          void 0 === e && (e = this.isHorizontal() ? "x" : "y");
          const { params: t, rtlTranslate: n, translate: r, wrapperEl: a } = this;
          if (t.virtualTranslate) return n ? -r : r;
          if (t.cssMode) return r;
          let i = Ea(a, e);
          return (i += this.cssOverflowAdjustment()), n && (i = -i), i || 0;
        },
        setTranslate: function (e, t) {
          const n = this,
            { rtlTranslate: r, params: a, wrapperEl: i, progress: o } = n;
          let l,
            s = 0,
            c = 0;
          n.isHorizontal() ? (s = r ? -e : e) : (c = e),
            a.roundLengths && ((s = Math.floor(s)), (c = Math.floor(c))),
            (n.previousTranslate = n.translate),
            (n.translate = n.isHorizontal() ? s : c),
            a.cssMode
              ? (i[n.isHorizontal() ? "scrollLeft" : "scrollTop"] = n.isHorizontal() ? -s : -c)
              : a.virtualTranslate ||
                (n.isHorizontal()
                  ? (s -= n.cssOverflowAdjustment())
                  : (c -= n.cssOverflowAdjustment()),
                (i.style.transform = "translate3d("
                  .concat(s, "px, ")
                  .concat(c, "px, ")
                  .concat(0, "px)")));
          const u = n.maxTranslate() - n.minTranslate();
          (l = 0 === u ? 0 : (e - n.minTranslate()) / u),
            l !== o && n.updateProgress(e),
            n.emit("setTranslate", n.translate, t);
        },
        minTranslate: function () {
          return -this.snapGrid[0];
        },
        maxTranslate: function () {
          return -this.snapGrid[this.snapGrid.length - 1];
        },
        translateTo: function (e, t, n, r, a) {
          void 0 === e && (e = 0),
            void 0 === t && (t = this.params.speed),
            void 0 === n && (n = !0),
            void 0 === r && (r = !0);
          const i = this,
            { params: o, wrapperEl: l } = i;
          if (i.animating && o.preventInteractionOnTransition) return !1;
          const s = i.minTranslate(),
            c = i.maxTranslate();
          let u;
          if (((u = r && e > s ? s : r && e < c ? c : e), i.updateProgress(u), o.cssMode)) {
            const e = i.isHorizontal();
            if (0 === t) l[e ? "scrollLeft" : "scrollTop"] = -u;
            else {
              if (!i.support.smoothScroll)
                return Na({ swiper: i, targetPosition: -u, side: e ? "left" : "top" }), !0;
              l.scrollTo({ [e ? "left" : "top"]: -u, behavior: "smooth" });
            }
            return !0;
          }
          return (
            0 === t
              ? (i.setTransition(0),
                i.setTranslate(u),
                n && (i.emit("beforeTransitionStart", t, a), i.emit("transitionEnd")))
              : (i.setTransition(t),
                i.setTranslate(u),
                n && (i.emit("beforeTransitionStart", t, a), i.emit("transitionStart")),
                i.animating ||
                  ((i.animating = !0),
                  i.onTranslateToWrapperTransitionEnd ||
                    (i.onTranslateToWrapperTransitionEnd = function (e) {
                      i &&
                        !i.destroyed &&
                        e.target === this &&
                        (i.wrapperEl.removeEventListener(
                          "transitionend",
                          i.onTranslateToWrapperTransitionEnd
                        ),
                        (i.onTranslateToWrapperTransitionEnd = null),
                        delete i.onTranslateToWrapperTransitionEnd,
                        (i.animating = !1),
                        n && i.emit("transitionEnd"));
                    }),
                  i.wrapperEl.addEventListener(
                    "transitionend",
                    i.onTranslateToWrapperTransitionEnd
                  ))),
            !0
          );
        },
      };
      function Ja(e) {
        let { swiper: t, runCallbacks: n, direction: r, step: a } = e;
        const { activeIndex: i, previousIndex: o } = t;
        let l = r;
        if (
          (l || (l = i > o ? "next" : i < o ? "prev" : "reset"),
          t.emit("transition".concat(a)),
          n && i !== o)
        ) {
          if ("reset" === l) return void t.emit("slideResetTransition".concat(a));
          t.emit("slideChangeTransition".concat(a)),
            "next" === l
              ? t.emit("slideNextTransition".concat(a))
              : t.emit("slidePrevTransition".concat(a));
        }
      }
      var Za = {
        setTransition: function (e, t) {
          const n = this;
          n.params.cssMode ||
            ((n.wrapperEl.style.transitionDuration = "".concat(e, "ms")),
            (n.wrapperEl.style.transitionDelay = 0 === e ? "0ms" : "")),
            n.emit("setTransition", e, t);
        },
        transitionStart: function (e, t) {
          void 0 === e && (e = !0);
          const n = this,
            { params: r } = n;
          r.cssMode ||
            (r.autoHeight && n.updateAutoHeight(),
            Ja({ swiper: n, runCallbacks: e, direction: t, step: "Start" }));
        },
        transitionEnd: function (e, t) {
          void 0 === e && (e = !0);
          const n = this,
            { params: r } = n;
          (n.animating = !1),
            r.cssMode ||
              (n.setTransition(0), Ja({ swiper: n, runCallbacks: e, direction: t, step: "End" }));
        },
      };
      var ei = {
        slideTo: function (e, t, n, r, a) {
          void 0 === e && (e = 0),
            void 0 === n && (n = !0),
            "string" === typeof e && (e = parseInt(e, 10));
          const i = this;
          let o = e;
          o < 0 && (o = 0);
          const {
            params: l,
            snapGrid: s,
            slidesGrid: c,
            previousIndex: u,
            activeIndex: d,
            rtlTranslate: f,
            wrapperEl: p,
            enabled: m,
          } = i;
          if ((!m && !r && !a) || i.destroyed || (i.animating && l.preventInteractionOnTransition))
            return !1;
          "undefined" === typeof t && (t = i.params.speed);
          const h = Math.min(i.params.slidesPerGroupSkip, o);
          let v = h + Math.floor((o - h) / i.params.slidesPerGroup);
          v >= s.length && (v = s.length - 1);
          const g = -s[v];
          if (l.normalizeSlideIndex)
            for (let x = 0; x < c.length; x += 1) {
              const e = -Math.floor(100 * g),
                t = Math.floor(100 * c[x]),
                n = Math.floor(100 * c[x + 1]);
              "undefined" !== typeof c[x + 1]
                ? e >= t && e < n - (n - t) / 2
                  ? (o = x)
                  : e >= t && e < n && (o = x + 1)
                : e >= t && (o = x);
            }
          if (i.initialized && o !== d) {
            if (
              !i.allowSlideNext &&
              (f
                ? g > i.translate && g > i.minTranslate()
                : g < i.translate && g < i.minTranslate())
            )
              return !1;
            if (!i.allowSlidePrev && g > i.translate && g > i.maxTranslate() && (d || 0) !== o)
              return !1;
          }
          let b;
          o !== (u || 0) && n && i.emit("beforeSlideChangeStart"),
            i.updateProgress(g),
            (b = o > d ? "next" : o < d ? "prev" : "reset");
          const y = i.virtual && i.params.virtual.enabled;
          if (!(y && a) && ((f && -g === i.translate) || (!f && g === i.translate)))
            return (
              i.updateActiveIndex(o),
              l.autoHeight && i.updateAutoHeight(),
              i.updateSlidesClasses(),
              "slide" !== l.effect && i.setTranslate(g),
              "reset" !== b && (i.transitionStart(n, b), i.transitionEnd(n, b)),
              !1
            );
          if (l.cssMode) {
            const e = i.isHorizontal(),
              n = f ? g : -g;
            if (0 === t)
              y && ((i.wrapperEl.style.scrollSnapType = "none"), (i._immediateVirtual = !0)),
                y && !i._cssModeVirtualInitialSet && i.params.initialSlide > 0
                  ? ((i._cssModeVirtualInitialSet = !0),
                    requestAnimationFrame(() => {
                      p[e ? "scrollLeft" : "scrollTop"] = n;
                    }))
                  : (p[e ? "scrollLeft" : "scrollTop"] = n),
                y &&
                  requestAnimationFrame(() => {
                    (i.wrapperEl.style.scrollSnapType = ""), (i._immediateVirtual = !1);
                  });
            else {
              if (!i.support.smoothScroll)
                return Na({ swiper: i, targetPosition: n, side: e ? "left" : "top" }), !0;
              p.scrollTo({ [e ? "left" : "top"]: n, behavior: "smooth" });
            }
            return !0;
          }
          const w = Wa().isSafari;
          return (
            y && !a && w && i.isElement && i.virtual.update(!1, !1, o),
            i.setTransition(t),
            i.setTranslate(g),
            i.updateActiveIndex(o),
            i.updateSlidesClasses(),
            i.emit("beforeTransitionStart", t, r),
            i.transitionStart(n, b),
            0 === t
              ? i.transitionEnd(n, b)
              : i.animating ||
                ((i.animating = !0),
                i.onSlideToWrapperTransitionEnd ||
                  (i.onSlideToWrapperTransitionEnd = function (e) {
                    i &&
                      !i.destroyed &&
                      e.target === this &&
                      (i.wrapperEl.removeEventListener(
                        "transitionend",
                        i.onSlideToWrapperTransitionEnd
                      ),
                      (i.onSlideToWrapperTransitionEnd = null),
                      delete i.onSlideToWrapperTransitionEnd,
                      i.transitionEnd(n, b));
                  }),
                i.wrapperEl.addEventListener("transitionend", i.onSlideToWrapperTransitionEnd)),
            !0
          );
        },
        slideToLoop: function (e, t, n, r) {
          if ((void 0 === e && (e = 0), void 0 === n && (n = !0), "string" === typeof e)) {
            e = parseInt(e, 10);
          }
          const a = this;
          if (a.destroyed) return;
          "undefined" === typeof t && (t = a.params.speed);
          const i = a.grid && a.params.grid && a.params.grid.rows > 1;
          let o = e;
          if (a.params.loop)
            if (a.virtual && a.params.virtual.enabled) o += a.virtual.slidesBefore;
            else {
              let e;
              if (i) {
                const t = o * a.params.grid.rows;
                e = a.slides.find(
                  (e) => 1 * e.getAttribute("data-swiper-slide-index") === t
                ).column;
              } else e = a.getSlideIndexByData(o);
              const t = i ? Math.ceil(a.slides.length / a.params.grid.rows) : a.slides.length,
                { centeredSlides: n } = a.params;
              let l = a.params.slidesPerView;
              "auto" === l
                ? (l = a.slidesPerViewDynamic())
                : ((l = Math.ceil(parseFloat(a.params.slidesPerView, 10))),
                  n && l % 2 === 0 && (l += 1));
              let s = t - e < l;
              if (
                (n && (s = s || e < Math.ceil(l / 2)),
                r && n && "auto" !== a.params.slidesPerView && !i && (s = !1),
                s)
              ) {
                const r = n
                  ? e < a.activeIndex
                    ? "prev"
                    : "next"
                  : e - a.activeIndex - 1 < a.params.slidesPerView
                  ? "next"
                  : "prev";
                a.loopFix({
                  direction: r,
                  slideTo: !0,
                  activeSlideIndex: "next" === r ? e + 1 : e - t + 1,
                  slideRealIndex: "next" === r ? a.realIndex : void 0,
                });
              }
              if (i) {
                const e = o * a.params.grid.rows;
                o = a.slides.find(
                  (t) => 1 * t.getAttribute("data-swiper-slide-index") === e
                ).column;
              } else o = a.getSlideIndexByData(o);
            }
          return (
            requestAnimationFrame(() => {
              a.slideTo(o, t, n, r);
            }),
            a
          );
        },
        slideNext: function (e, t, n) {
          void 0 === t && (t = !0);
          const r = this,
            { enabled: a, params: i, animating: o } = r;
          if (!a || r.destroyed) return r;
          "undefined" === typeof e && (e = r.params.speed);
          let l = i.slidesPerGroup;
          "auto" === i.slidesPerView &&
            1 === i.slidesPerGroup &&
            i.slidesPerGroupAuto &&
            (l = Math.max(r.slidesPerViewDynamic("current", !0), 1));
          const s = r.activeIndex < i.slidesPerGroupSkip ? 1 : l,
            c = r.virtual && i.virtual.enabled;
          if (i.loop) {
            if (o && !c && i.loopPreventsSliding) return !1;
            if (
              (r.loopFix({ direction: "next" }),
              (r._clientLeft = r.wrapperEl.clientLeft),
              r.activeIndex === r.slides.length - 1 && i.cssMode)
            )
              return (
                requestAnimationFrame(() => {
                  r.slideTo(r.activeIndex + s, e, t, n);
                }),
                !0
              );
          }
          return i.rewind && r.isEnd
            ? r.slideTo(0, e, t, n)
            : r.slideTo(r.activeIndex + s, e, t, n);
        },
        slidePrev: function (e, t, n) {
          void 0 === t && (t = !0);
          const r = this,
            {
              params: a,
              snapGrid: i,
              slidesGrid: o,
              rtlTranslate: l,
              enabled: s,
              animating: c,
            } = r;
          if (!s || r.destroyed) return r;
          "undefined" === typeof e && (e = r.params.speed);
          const u = r.virtual && a.virtual.enabled;
          if (a.loop) {
            if (c && !u && a.loopPreventsSliding) return !1;
            r.loopFix({ direction: "prev" }), (r._clientLeft = r.wrapperEl.clientLeft);
          }
          function d(e) {
            return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
          }
          const f = d(l ? r.translate : -r.translate),
            p = i.map((e) => d(e)),
            m = a.freeMode && a.freeMode.enabled;
          let h = i[p.indexOf(f) - 1];
          if ("undefined" === typeof h && (a.cssMode || m)) {
            let e;
            i.forEach((t, n) => {
              f >= t && (e = n);
            }),
              "undefined" !== typeof e && (h = m ? i[e] : i[e > 0 ? e - 1 : e]);
          }
          let v = 0;
          if (
            ("undefined" !== typeof h &&
              ((v = o.indexOf(h)),
              v < 0 && (v = r.activeIndex - 1),
              "auto" === a.slidesPerView &&
                1 === a.slidesPerGroup &&
                a.slidesPerGroupAuto &&
                ((v = v - r.slidesPerViewDynamic("previous", !0) + 1), (v = Math.max(v, 0)))),
            a.rewind && r.isBeginning)
          ) {
            const a =
              r.params.virtual && r.params.virtual.enabled && r.virtual
                ? r.virtual.slides.length - 1
                : r.slides.length - 1;
            return r.slideTo(a, e, t, n);
          }
          return a.loop && 0 === r.activeIndex && a.cssMode
            ? (requestAnimationFrame(() => {
                r.slideTo(v, e, t, n);
              }),
              !0)
            : r.slideTo(v, e, t, n);
        },
        slideReset: function (e, t, n) {
          void 0 === t && (t = !0);
          const r = this;
          if (!r.destroyed)
            return (
              "undefined" === typeof e && (e = r.params.speed), r.slideTo(r.activeIndex, e, t, n)
            );
        },
        slideToClosest: function (e, t, n, r) {
          void 0 === t && (t = !0), void 0 === r && (r = 0.5);
          const a = this;
          if (a.destroyed) return;
          "undefined" === typeof e && (e = a.params.speed);
          let i = a.activeIndex;
          const o = Math.min(a.params.slidesPerGroupSkip, i),
            l = o + Math.floor((i - o) / a.params.slidesPerGroup),
            s = a.rtlTranslate ? a.translate : -a.translate;
          if (s >= a.snapGrid[l]) {
            const e = a.snapGrid[l];
            s - e > (a.snapGrid[l + 1] - e) * r && (i += a.params.slidesPerGroup);
          } else {
            const e = a.snapGrid[l - 1];
            s - e <= (a.snapGrid[l] - e) * r && (i -= a.params.slidesPerGroup);
          }
          return (
            (i = Math.max(i, 0)), (i = Math.min(i, a.slidesGrid.length - 1)), a.slideTo(i, e, t, n)
          );
        },
        slideToClickedSlide: function () {
          const e = this;
          if (e.destroyed) return;
          const { params: t, slidesEl: n } = e,
            r = "auto" === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView;
          let a,
            i = e.clickedIndex;
          const o = e.isElement ? "swiper-slide" : ".".concat(t.slideClass);
          if (t.loop) {
            if (e.animating) return;
            (a = parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10)),
              t.centeredSlides
                ? i < e.loopedSlides - r / 2 || i > e.slides.length - e.loopedSlides + r / 2
                  ? (e.loopFix(),
                    (i = e.getSlideIndex(
                      Ma(n, "".concat(o, '[data-swiper-slide-index="').concat(a, '"]'))[0]
                    )),
                    Sa(() => {
                      e.slideTo(i);
                    }))
                  : e.slideTo(i)
                : i > e.slides.length - r
                ? (e.loopFix(),
                  (i = e.getSlideIndex(
                    Ma(n, "".concat(o, '[data-swiper-slide-index="').concat(a, '"]'))[0]
                  )),
                  Sa(() => {
                    e.slideTo(i);
                  }))
                : e.slideTo(i);
          } else e.slideTo(i);
        },
      };
      var ti = {
        loopCreate: function (e) {
          const t = this,
            { params: n, slidesEl: r } = t;
          if (!n.loop || (t.virtual && t.params.virtual.enabled)) return;
          const a = () => {
              Ma(r, ".".concat(n.slideClass, ", swiper-slide")).forEach((e, t) => {
                e.setAttribute("data-swiper-slide-index", t);
              });
            },
            i = t.grid && n.grid && n.grid.rows > 1,
            o = n.slidesPerGroup * (i ? n.grid.rows : 1),
            l = t.slides.length % o !== 0,
            s = i && t.slides.length % n.grid.rows !== 0,
            c = (e) => {
              for (let r = 0; r < e; r += 1) {
                const e = t.isElement
                  ? ja("swiper-slide", [n.slideBlankClass])
                  : ja("div", [n.slideClass, n.slideBlankClass]);
                t.slidesEl.append(e);
              }
            };
          if (l) {
            if (n.loopAddBlankSlides) {
              c(o - (t.slides.length % o)), t.recalcSlides(), t.updateSlides();
            } else
              _a(
                "Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"
              );
            a();
          } else if (s) {
            if (n.loopAddBlankSlides) {
              c(n.grid.rows - (t.slides.length % n.grid.rows)), t.recalcSlides(), t.updateSlides();
            } else
              _a(
                "Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"
              );
            a();
          } else a();
          t.loopFix({ slideRealIndex: e, direction: n.centeredSlides ? void 0 : "next" });
        },
        loopFix: function (e) {
          let {
            slideRealIndex: t,
            slideTo: n = !0,
            direction: r,
            setTranslate: a,
            activeSlideIndex: i,
            byController: o,
            byMousewheel: l,
          } = void 0 === e ? {} : e;
          const s = this;
          if (!s.params.loop) return;
          s.emit("beforeLoopFix");
          const { slides: c, allowSlidePrev: u, allowSlideNext: d, slidesEl: f, params: p } = s,
            { centeredSlides: m } = p;
          if (((s.allowSlidePrev = !0), (s.allowSlideNext = !0), s.virtual && p.virtual.enabled))
            return (
              n &&
                (p.centeredSlides || 0 !== s.snapIndex
                  ? p.centeredSlides && s.snapIndex < p.slidesPerView
                    ? s.slideTo(s.virtual.slides.length + s.snapIndex, 0, !1, !0)
                    : s.snapIndex === s.snapGrid.length - 1 &&
                      s.slideTo(s.virtual.slidesBefore, 0, !1, !0)
                  : s.slideTo(s.virtual.slides.length, 0, !1, !0)),
              (s.allowSlidePrev = u),
              (s.allowSlideNext = d),
              void s.emit("loopFix")
            );
          let h = p.slidesPerView;
          "auto" === h
            ? (h = s.slidesPerViewDynamic())
            : ((h = Math.ceil(parseFloat(p.slidesPerView, 10))), m && h % 2 === 0 && (h += 1));
          const v = p.slidesPerGroupAuto ? h : p.slidesPerGroup;
          let g = v;
          g % v !== 0 && (g += v - (g % v)), (g += p.loopAdditionalSlides), (s.loopedSlides = g);
          const b = s.grid && p.grid && p.grid.rows > 1;
          c.length < h + g
            ? _a(
                "Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"
              )
            : b &&
              "row" === p.grid.fill &&
              _a("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
          const y = [],
            w = [];
          let x = s.activeIndex;
          "undefined" === typeof i
            ? (i = s.getSlideIndex(c.find((e) => e.classList.contains(p.slideActiveClass))))
            : (x = i);
          const S = "next" === r || !r,
            k = "prev" === r || !r;
          let E = 0,
            C = 0;
          const T = b ? Math.ceil(c.length / p.grid.rows) : c.length,
            P = (b ? c[i].column : i) + (m && "undefined" === typeof a ? -h / 2 + 0.5 : 0);
          if (P < g) {
            E = Math.max(g - P, v);
            for (let e = 0; e < g - P; e += 1) {
              const t = e - Math.floor(e / T) * T;
              if (b) {
                const e = T - t - 1;
                for (let t = c.length - 1; t >= 0; t -= 1) c[t].column === e && y.push(t);
              } else y.push(T - t - 1);
            }
          } else if (P + h > T - g) {
            C = Math.max(P - (T - 2 * g), v);
            for (let e = 0; e < C; e += 1) {
              const t = e - Math.floor(e / T) * T;
              b
                ? c.forEach((e, n) => {
                    e.column === t && w.push(n);
                  })
                : w.push(t);
            }
          }
          if (
            ((s.__preventObserver__ = !0),
            requestAnimationFrame(() => {
              s.__preventObserver__ = !1;
            }),
            k &&
              y.forEach((e) => {
                (c[e].swiperLoopMoveDOM = !0), f.prepend(c[e]), (c[e].swiperLoopMoveDOM = !1);
              }),
            S &&
              w.forEach((e) => {
                (c[e].swiperLoopMoveDOM = !0), f.append(c[e]), (c[e].swiperLoopMoveDOM = !1);
              }),
            s.recalcSlides(),
            "auto" === p.slidesPerView
              ? s.updateSlides()
              : b &&
                ((y.length > 0 && k) || (w.length > 0 && S)) &&
                s.slides.forEach((e, t) => {
                  s.grid.updateSlide(t, e, s.slides);
                }),
            p.watchSlidesProgress && s.updateSlidesOffset(),
            n)
          )
            if (y.length > 0 && k) {
              if ("undefined" === typeof t) {
                const e = s.slidesGrid[x],
                  t = s.slidesGrid[x + E] - e;
                l
                  ? s.setTranslate(s.translate - t)
                  : (s.slideTo(x + Math.ceil(E), 0, !1, !0),
                    a &&
                      ((s.touchEventsData.startTranslate = s.touchEventsData.startTranslate - t),
                      (s.touchEventsData.currentTranslate =
                        s.touchEventsData.currentTranslate - t)));
              } else if (a) {
                const e = b ? y.length / p.grid.rows : y.length;
                s.slideTo(s.activeIndex + e, 0, !1, !0),
                  (s.touchEventsData.currentTranslate = s.translate);
              }
            } else if (w.length > 0 && S)
              if ("undefined" === typeof t) {
                const e = s.slidesGrid[x],
                  t = s.slidesGrid[x - C] - e;
                l
                  ? s.setTranslate(s.translate - t)
                  : (s.slideTo(x - C, 0, !1, !0),
                    a &&
                      ((s.touchEventsData.startTranslate = s.touchEventsData.startTranslate - t),
                      (s.touchEventsData.currentTranslate =
                        s.touchEventsData.currentTranslate - t)));
              } else {
                const e = b ? w.length / p.grid.rows : w.length;
                s.slideTo(s.activeIndex - e, 0, !1, !0);
              }
          if (
            ((s.allowSlidePrev = u),
            (s.allowSlideNext = d),
            s.controller && s.controller.control && !o)
          ) {
            const e = {
              slideRealIndex: t,
              direction: r,
              setTranslate: a,
              activeSlideIndex: i,
              byController: !0,
            };
            Array.isArray(s.controller.control)
              ? s.controller.control.forEach((t) => {
                  !t.destroyed &&
                    t.params.loop &&
                    t.loopFix({ ...e, slideTo: t.params.slidesPerView === p.slidesPerView && n });
                })
              : s.controller.control instanceof s.constructor &&
                s.controller.control.params.loop &&
                s.controller.control.loopFix({
                  ...e,
                  slideTo: s.controller.control.params.slidesPerView === p.slidesPerView && n,
                });
          }
          s.emit("loopFix");
        },
        loopDestroy: function () {
          const e = this,
            { params: t, slidesEl: n } = e;
          if (!t.loop || (e.virtual && e.params.virtual.enabled)) return;
          e.recalcSlides();
          const r = [];
          e.slides.forEach((e) => {
            const t =
              "undefined" === typeof e.swiperSlideIndex
                ? 1 * e.getAttribute("data-swiper-slide-index")
                : e.swiperSlideIndex;
            r[t] = e;
          }),
            e.slides.forEach((e) => {
              e.removeAttribute("data-swiper-slide-index");
            }),
            r.forEach((e) => {
              n.append(e);
            }),
            e.recalcSlides(),
            e.slideTo(e.realIndex, 0);
        },
      };
      var ni = {
        setGrabCursor: function (e) {
          const t = this;
          if (!t.params.simulateTouch || (t.params.watchOverflow && t.isLocked) || t.params.cssMode)
            return;
          const n = "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
          t.isElement && (t.__preventObserver__ = !0),
            (n.style.cursor = "move"),
            (n.style.cursor = e ? "grabbing" : "grab"),
            t.isElement &&
              requestAnimationFrame(() => {
                t.__preventObserver__ = !1;
              });
        },
        unsetGrabCursor: function () {
          const e = this;
          (e.params.watchOverflow && e.isLocked) ||
            e.params.cssMode ||
            (e.isElement && (e.__preventObserver__ = !0),
            (e["container" === e.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = ""),
            e.isElement &&
              requestAnimationFrame(() => {
                e.__preventObserver__ = !1;
              }));
        },
      };
      function ri(e, t, n) {
        const r = xa(),
          { params: a } = e,
          i = a.edgeSwipeDetection,
          o = a.edgeSwipeThreshold;
        return (
          !i || !(n <= o || n >= r.innerWidth - o) || ("prevent" === i && (t.preventDefault(), !0))
        );
      }
      function ai(e) {
        const t = this,
          n = ya();
        let r = e;
        r.originalEvent && (r = r.originalEvent);
        const a = t.touchEventsData;
        if ("pointerdown" === r.type) {
          if (null !== a.pointerId && a.pointerId !== r.pointerId) return;
          a.pointerId = r.pointerId;
        } else
          "touchstart" === r.type &&
            1 === r.targetTouches.length &&
            (a.touchId = r.targetTouches[0].identifier);
        if ("touchstart" === r.type) return void ri(t, r, r.targetTouches[0].pageX);
        const { params: i, touches: o, enabled: l } = t;
        if (!l) return;
        if (!i.simulateTouch && "mouse" === r.pointerType) return;
        if (t.animating && i.preventInteractionOnTransition) return;
        !t.animating && i.cssMode && i.loop && t.loopFix();
        let s = r.target;
        if (
          "wrapper" === i.touchEventsTarget &&
          !(function (e, t) {
            const n = xa();
            let r = t.contains(e);
            !r &&
              n.HTMLSlotElement &&
              t instanceof HTMLSlotElement &&
              ((r = [...t.assignedElements()].includes(e)),
              r ||
                (r = (function (e, t) {
                  const n = [t];
                  for (; n.length > 0; ) {
                    var r, a;
                    const t = n.shift();
                    if (e === t) return !0;
                    n.push(
                      ...t.children,
                      ...((null === (r = t.shadowRoot) || void 0 === r ? void 0 : r.children) ||
                        []),
                      ...((null === (a = t.assignedElements) || void 0 === a
                        ? void 0
                        : a.call(t)) || [])
                    );
                  }
                })(e, t)));
            return r;
          })(s, t.wrapperEl)
        )
          return;
        if ("which" in r && 3 === r.which) return;
        if ("button" in r && r.button > 0) return;
        if (a.isTouched && a.isMoved) return;
        const c = !!i.noSwipingClass && "" !== i.noSwipingClass,
          u = r.composedPath ? r.composedPath() : r.path;
        c && r.target && r.target.shadowRoot && u && (s = u[0]);
        const d = i.noSwipingSelector ? i.noSwipingSelector : ".".concat(i.noSwipingClass),
          f = !(!r.target || !r.target.shadowRoot);
        if (
          i.noSwiping &&
          (f
            ? (function (e, t) {
                return (
                  void 0 === t && (t = this),
                  (function t(n) {
                    if (!n || n === ya() || n === xa()) return null;
                    n.assignedSlot && (n = n.assignedSlot);
                    const r = n.closest(e);
                    return r || n.getRootNode ? r || t(n.getRootNode().host) : null;
                  })(t)
                );
              })(d, s)
            : s.closest(d))
        )
          return void (t.allowClick = !0);
        if (i.swipeHandler && !s.closest(i.swipeHandler)) return;
        (o.currentX = r.pageX), (o.currentY = r.pageY);
        const p = o.currentX,
          m = o.currentY;
        if (!ri(t, r, p)) return;
        Object.assign(a, {
          isTouched: !0,
          isMoved: !1,
          allowTouchCallbacks: !0,
          isScrolling: void 0,
          startMoving: void 0,
        }),
          (o.startX = p),
          (o.startY = m),
          (a.touchStartTime = ka()),
          (t.allowClick = !0),
          t.updateSize(),
          (t.swipeDirection = void 0),
          i.threshold > 0 && (a.allowThresholdMove = !1);
        let h = !0;
        s.matches(a.focusableElements) && ((h = !1), "SELECT" === s.nodeName && (a.isTouched = !1)),
          n.activeElement &&
            n.activeElement.matches(a.focusableElements) &&
            n.activeElement !== s &&
            ("mouse" === r.pointerType ||
              ("mouse" !== r.pointerType && !s.matches(a.focusableElements))) &&
            n.activeElement.blur();
        const v = h && t.allowTouchMove && i.touchStartPreventDefault;
        (!i.touchStartForcePreventDefault && !v) || s.isContentEditable || r.preventDefault(),
          i.freeMode &&
            i.freeMode.enabled &&
            t.freeMode &&
            t.animating &&
            !i.cssMode &&
            t.freeMode.onTouchStart(),
          t.emit("touchStart", r);
      }
      function ii(e) {
        const t = ya(),
          n = this,
          r = n.touchEventsData,
          { params: a, touches: i, rtlTranslate: o, enabled: l } = n;
        if (!l) return;
        if (!a.simulateTouch && "mouse" === e.pointerType) return;
        let s,
          c = e;
        if ((c.originalEvent && (c = c.originalEvent), "pointermove" === c.type)) {
          if (null !== r.touchId) return;
          if (c.pointerId !== r.pointerId) return;
        }
        if ("touchmove" === c.type) {
          if (
            ((s = [...c.changedTouches].find((e) => e.identifier === r.touchId)),
            !s || s.identifier !== r.touchId)
          )
            return;
        } else s = c;
        if (!r.isTouched)
          return void (r.startMoving && r.isScrolling && n.emit("touchMoveOpposite", c));
        const u = s.pageX,
          d = s.pageY;
        if (c.preventedByNestedSwiper) return (i.startX = u), void (i.startY = d);
        if (!n.allowTouchMove)
          return (
            c.target.matches(r.focusableElements) || (n.allowClick = !1),
            void (
              r.isTouched &&
              (Object.assign(i, { startX: u, startY: d, currentX: u, currentY: d }),
              (r.touchStartTime = ka()))
            )
          );
        if (a.touchReleaseOnEdges && !a.loop)
          if (n.isVertical()) {
            if (
              (d < i.startY && n.translate <= n.maxTranslate()) ||
              (d > i.startY && n.translate >= n.minTranslate())
            )
              return (r.isTouched = !1), void (r.isMoved = !1);
          } else if (
            (u < i.startX && n.translate <= n.maxTranslate()) ||
            (u > i.startX && n.translate >= n.minTranslate())
          )
            return;
        if (
          (t.activeElement &&
            t.activeElement.matches(r.focusableElements) &&
            t.activeElement !== c.target &&
            "mouse" !== c.pointerType &&
            t.activeElement.blur(),
          t.activeElement && c.target === t.activeElement && c.target.matches(r.focusableElements))
        )
          return (r.isMoved = !0), void (n.allowClick = !1);
        r.allowTouchCallbacks && n.emit("touchMove", c),
          (i.previousX = i.currentX),
          (i.previousY = i.currentY),
          (i.currentX = u),
          (i.currentY = d);
        const f = i.currentX - i.startX,
          p = i.currentY - i.startY;
        if (n.params.threshold && Math.sqrt(f ** 2 + p ** 2) < n.params.threshold) return;
        if ("undefined" === typeof r.isScrolling) {
          let e;
          (n.isHorizontal() && i.currentY === i.startY) ||
          (n.isVertical() && i.currentX === i.startX)
            ? (r.isScrolling = !1)
            : f * f + p * p >= 25 &&
              ((e = (180 * Math.atan2(Math.abs(p), Math.abs(f))) / Math.PI),
              (r.isScrolling = n.isHorizontal() ? e > a.touchAngle : 90 - e > a.touchAngle));
        }
        if (
          (r.isScrolling && n.emit("touchMoveOpposite", c),
          "undefined" === typeof r.startMoving &&
            ((i.currentX === i.startX && i.currentY === i.startY) || (r.startMoving = !0)),
          r.isScrolling || ("touchmove" === c.type && r.preventTouchMoveFromPointerMove))
        )
          return void (r.isTouched = !1);
        if (!r.startMoving) return;
        (n.allowClick = !1),
          !a.cssMode && c.cancelable && c.preventDefault(),
          a.touchMoveStopPropagation && !a.nested && c.stopPropagation();
        let m = n.isHorizontal() ? f : p,
          h = n.isHorizontal() ? i.currentX - i.previousX : i.currentY - i.previousY;
        a.oneWayMovement && ((m = Math.abs(m) * (o ? 1 : -1)), (h = Math.abs(h) * (o ? 1 : -1))),
          (i.diff = m),
          (m *= a.touchRatio),
          o && ((m = -m), (h = -h));
        const v = n.touchesDirection;
        (n.swipeDirection = m > 0 ? "prev" : "next"),
          (n.touchesDirection = h > 0 ? "prev" : "next");
        const g = n.params.loop && !a.cssMode,
          b =
            ("next" === n.touchesDirection && n.allowSlideNext) ||
            ("prev" === n.touchesDirection && n.allowSlidePrev);
        if (!r.isMoved) {
          if (
            (g && b && n.loopFix({ direction: n.swipeDirection }),
            (r.startTranslate = n.getTranslate()),
            n.setTransition(0),
            n.animating)
          ) {
            const e = new window.CustomEvent("transitionend", {
              bubbles: !0,
              cancelable: !0,
              detail: { bySwiperTouchMove: !0 },
            });
            n.wrapperEl.dispatchEvent(e);
          }
          (r.allowMomentumBounce = !1),
            !a.grabCursor ||
              (!0 !== n.allowSlideNext && !0 !== n.allowSlidePrev) ||
              n.setGrabCursor(!0),
            n.emit("sliderFirstMove", c);
        }
        if (
          (new Date().getTime(),
          !1 !== a._loopSwapReset &&
            r.isMoved &&
            r.allowThresholdMove &&
            v !== n.touchesDirection &&
            g &&
            b &&
            Math.abs(m) >= 1)
        )
          return (
            Object.assign(i, {
              startX: u,
              startY: d,
              currentX: u,
              currentY: d,
              startTranslate: r.currentTranslate,
            }),
            (r.loopSwapReset = !0),
            void (r.startTranslate = r.currentTranslate)
          );
        n.emit("sliderMove", c), (r.isMoved = !0), (r.currentTranslate = m + r.startTranslate);
        let y = !0,
          w = a.resistanceRatio;
        if (
          (a.touchReleaseOnEdges && (w = 0),
          m > 0
            ? (g &&
                b &&
                r.allowThresholdMove &&
                r.currentTranslate >
                  (a.centeredSlides
                    ? n.minTranslate() -
                      n.slidesSizesGrid[n.activeIndex + 1] -
                      ("auto" !== a.slidesPerView && n.slides.length - a.slidesPerView >= 2
                        ? n.slidesSizesGrid[n.activeIndex + 1] + n.params.spaceBetween
                        : 0) -
                      n.params.spaceBetween
                    : n.minTranslate()) &&
                n.loopFix({ direction: "prev", setTranslate: !0, activeSlideIndex: 0 }),
              r.currentTranslate > n.minTranslate() &&
                ((y = !1),
                a.resistance &&
                  (r.currentTranslate =
                    n.minTranslate() - 1 + (-n.minTranslate() + r.startTranslate + m) ** w)))
            : m < 0 &&
              (g &&
                b &&
                r.allowThresholdMove &&
                r.currentTranslate <
                  (a.centeredSlides
                    ? n.maxTranslate() +
                      n.slidesSizesGrid[n.slidesSizesGrid.length - 1] +
                      n.params.spaceBetween +
                      ("auto" !== a.slidesPerView && n.slides.length - a.slidesPerView >= 2
                        ? n.slidesSizesGrid[n.slidesSizesGrid.length - 1] + n.params.spaceBetween
                        : 0)
                    : n.maxTranslate()) &&
                n.loopFix({
                  direction: "next",
                  setTranslate: !0,
                  activeSlideIndex:
                    n.slides.length -
                    ("auto" === a.slidesPerView
                      ? n.slidesPerViewDynamic()
                      : Math.ceil(parseFloat(a.slidesPerView, 10))),
                }),
              r.currentTranslate < n.maxTranslate() &&
                ((y = !1),
                a.resistance &&
                  (r.currentTranslate =
                    n.maxTranslate() + 1 - (n.maxTranslate() - r.startTranslate - m) ** w))),
          y && (c.preventedByNestedSwiper = !0),
          !n.allowSlideNext &&
            "next" === n.swipeDirection &&
            r.currentTranslate < r.startTranslate &&
            (r.currentTranslate = r.startTranslate),
          !n.allowSlidePrev &&
            "prev" === n.swipeDirection &&
            r.currentTranslate > r.startTranslate &&
            (r.currentTranslate = r.startTranslate),
          n.allowSlidePrev || n.allowSlideNext || (r.currentTranslate = r.startTranslate),
          a.threshold > 0)
        ) {
          if (!(Math.abs(m) > a.threshold || r.allowThresholdMove))
            return void (r.currentTranslate = r.startTranslate);
          if (!r.allowThresholdMove)
            return (
              (r.allowThresholdMove = !0),
              (i.startX = i.currentX),
              (i.startY = i.currentY),
              (r.currentTranslate = r.startTranslate),
              void (i.diff = n.isHorizontal() ? i.currentX - i.startX : i.currentY - i.startY)
            );
        }
        a.followFinger &&
          !a.cssMode &&
          (((a.freeMode && a.freeMode.enabled && n.freeMode) || a.watchSlidesProgress) &&
            (n.updateActiveIndex(), n.updateSlidesClasses()),
          a.freeMode && a.freeMode.enabled && n.freeMode && n.freeMode.onTouchMove(),
          n.updateProgress(r.currentTranslate),
          n.setTranslate(r.currentTranslate));
      }
      function oi(e) {
        const t = this,
          n = t.touchEventsData;
        let r,
          a = e;
        a.originalEvent && (a = a.originalEvent);
        if ("touchend" === a.type || "touchcancel" === a.type) {
          if (
            ((r = [...a.changedTouches].find((e) => e.identifier === n.touchId)),
            !r || r.identifier !== n.touchId)
          )
            return;
        } else {
          if (null !== n.touchId) return;
          if (a.pointerId !== n.pointerId) return;
          r = a;
        }
        if (["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(a.type)) {
          if (
            !(
              ["pointercancel", "contextmenu"].includes(a.type) &&
              (t.browser.isSafari || t.browser.isWebView)
            )
          )
            return;
        }
        (n.pointerId = null), (n.touchId = null);
        const { params: i, touches: o, rtlTranslate: l, slidesGrid: s, enabled: c } = t;
        if (!c) return;
        if (!i.simulateTouch && "mouse" === a.pointerType) return;
        if (
          (n.allowTouchCallbacks && t.emit("touchEnd", a),
          (n.allowTouchCallbacks = !1),
          !n.isTouched)
        )
          return (
            n.isMoved && i.grabCursor && t.setGrabCursor(!1),
            (n.isMoved = !1),
            void (n.startMoving = !1)
          );
        i.grabCursor &&
          n.isMoved &&
          n.isTouched &&
          (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
          t.setGrabCursor(!1);
        const u = ka(),
          d = u - n.touchStartTime;
        if (t.allowClick) {
          const e = a.path || (a.composedPath && a.composedPath());
          t.updateClickedSlide((e && e[0]) || a.target, e),
            t.emit("tap click", a),
            d < 300 && u - n.lastClickTime < 300 && t.emit("doubleTap doubleClick", a);
        }
        if (
          ((n.lastClickTime = ka()),
          Sa(() => {
            t.destroyed || (t.allowClick = !0);
          }),
          !n.isTouched ||
            !n.isMoved ||
            !t.swipeDirection ||
            (0 === o.diff && !n.loopSwapReset) ||
            (n.currentTranslate === n.startTranslate && !n.loopSwapReset))
        )
          return (n.isTouched = !1), (n.isMoved = !1), void (n.startMoving = !1);
        let f;
        if (
          ((n.isTouched = !1),
          (n.isMoved = !1),
          (n.startMoving = !1),
          (f = i.followFinger ? (l ? t.translate : -t.translate) : -n.currentTranslate),
          i.cssMode)
        )
          return;
        if (i.freeMode && i.freeMode.enabled) return void t.freeMode.onTouchEnd({ currentPos: f });
        const p = f >= -t.maxTranslate() && !t.params.loop;
        let m = 0,
          h = t.slidesSizesGrid[0];
        for (let w = 0; w < s.length; w += w < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup) {
          const e = w < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
          "undefined" !== typeof s[w + e]
            ? (p || (f >= s[w] && f < s[w + e])) && ((m = w), (h = s[w + e] - s[w]))
            : (p || f >= s[w]) && ((m = w), (h = s[s.length - 1] - s[s.length - 2]));
        }
        let v = null,
          g = null;
        i.rewind &&
          (t.isBeginning
            ? (g =
                i.virtual && i.virtual.enabled && t.virtual
                  ? t.virtual.slides.length - 1
                  : t.slides.length - 1)
            : t.isEnd && (v = 0));
        const b = (f - s[m]) / h,
          y = m < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
        if (d > i.longSwipesMs) {
          if (!i.longSwipes) return void t.slideTo(t.activeIndex);
          "next" === t.swipeDirection &&
            (b >= i.longSwipesRatio ? t.slideTo(i.rewind && t.isEnd ? v : m + y) : t.slideTo(m)),
            "prev" === t.swipeDirection &&
              (b > 1 - i.longSwipesRatio
                ? t.slideTo(m + y)
                : null !== g && b < 0 && Math.abs(b) > i.longSwipesRatio
                ? t.slideTo(g)
                : t.slideTo(m));
        } else {
          if (!i.shortSwipes) return void t.slideTo(t.activeIndex);
          t.navigation && (a.target === t.navigation.nextEl || a.target === t.navigation.prevEl)
            ? a.target === t.navigation.nextEl
              ? t.slideTo(m + y)
              : t.slideTo(m)
            : ("next" === t.swipeDirection && t.slideTo(null !== v ? v : m + y),
              "prev" === t.swipeDirection && t.slideTo(null !== g ? g : m));
        }
      }
      function li() {
        const e = this,
          { params: t, el: n } = e;
        if (n && 0 === n.offsetWidth) return;
        t.breakpoints && e.setBreakpoint();
        const { allowSlideNext: r, allowSlidePrev: a, snapGrid: i } = e,
          o = e.virtual && e.params.virtual.enabled;
        (e.allowSlideNext = !0),
          (e.allowSlidePrev = !0),
          e.updateSize(),
          e.updateSlides(),
          e.updateSlidesClasses();
        const l = o && t.loop;
        !("auto" === t.slidesPerView || t.slidesPerView > 1) ||
        !e.isEnd ||
        e.isBeginning ||
        e.params.centeredSlides ||
        l
          ? e.params.loop && !o
            ? e.slideToLoop(e.realIndex, 0, !1, !0)
            : e.slideTo(e.activeIndex, 0, !1, !0)
          : e.slideTo(e.slides.length - 1, 0, !1, !0),
          e.autoplay &&
            e.autoplay.running &&
            e.autoplay.paused &&
            (clearTimeout(e.autoplay.resizeTimeout),
            (e.autoplay.resizeTimeout = setTimeout(() => {
              e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.resume();
            }, 500))),
          (e.allowSlidePrev = a),
          (e.allowSlideNext = r),
          e.params.watchOverflow && i !== e.snapGrid && e.checkOverflow();
      }
      function si(e) {
        const t = this;
        t.enabled &&
          (t.allowClick ||
            (t.params.preventClicks && e.preventDefault(),
            t.params.preventClicksPropagation &&
              t.animating &&
              (e.stopPropagation(), e.stopImmediatePropagation())));
      }
      function ci() {
        const e = this,
          { wrapperEl: t, rtlTranslate: n, enabled: r } = e;
        if (!r) return;
        let a;
        (e.previousTranslate = e.translate),
          e.isHorizontal() ? (e.translate = -t.scrollLeft) : (e.translate = -t.scrollTop),
          0 === e.translate && (e.translate = 0),
          e.updateActiveIndex(),
          e.updateSlidesClasses();
        const i = e.maxTranslate() - e.minTranslate();
        (a = 0 === i ? 0 : (e.translate - e.minTranslate()) / i),
          a !== e.progress && e.updateProgress(n ? -e.translate : e.translate),
          e.emit("setTranslate", e.translate, !1);
      }
      function ui(e) {
        const t = this;
        Ya(t, e.target),
          t.params.cssMode ||
            ("auto" !== t.params.slidesPerView && !t.params.autoHeight) ||
            t.update();
      }
      function di() {
        const e = this;
        e.documentTouchHandlerProceeded ||
          ((e.documentTouchHandlerProceeded = !0),
          e.params.touchReleaseOnEdges && (e.el.style.touchAction = "auto"));
      }
      const fi = (e, t) => {
        const n = ya(),
          { params: r, el: a, wrapperEl: i, device: o } = e,
          l = !!r.nested,
          s = "on" === t ? "addEventListener" : "removeEventListener",
          c = t;
        a &&
          "string" !== typeof a &&
          (n[s]("touchstart", e.onDocumentTouchStart, { passive: !1, capture: l }),
          a[s]("touchstart", e.onTouchStart, { passive: !1 }),
          a[s]("pointerdown", e.onTouchStart, { passive: !1 }),
          n[s]("touchmove", e.onTouchMove, { passive: !1, capture: l }),
          n[s]("pointermove", e.onTouchMove, { passive: !1, capture: l }),
          n[s]("touchend", e.onTouchEnd, { passive: !0 }),
          n[s]("pointerup", e.onTouchEnd, { passive: !0 }),
          n[s]("pointercancel", e.onTouchEnd, { passive: !0 }),
          n[s]("touchcancel", e.onTouchEnd, { passive: !0 }),
          n[s]("pointerout", e.onTouchEnd, { passive: !0 }),
          n[s]("pointerleave", e.onTouchEnd, { passive: !0 }),
          n[s]("contextmenu", e.onTouchEnd, { passive: !0 }),
          (r.preventClicks || r.preventClicksPropagation) && a[s]("click", e.onClick, !0),
          r.cssMode && i[s]("scroll", e.onScroll),
          r.updateOnWindowResize
            ? e[c](
                o.ios || o.android
                  ? "resize orientationchange observerUpdate"
                  : "resize observerUpdate",
                li,
                !0
              )
            : e[c]("observerUpdate", li, !0),
          a[s]("load", e.onLoad, { capture: !0 }));
      };
      var pi = {
        attachEvents: function () {
          const e = this,
            { params: t } = e;
          (e.onTouchStart = ai.bind(e)),
            (e.onTouchMove = ii.bind(e)),
            (e.onTouchEnd = oi.bind(e)),
            (e.onDocumentTouchStart = di.bind(e)),
            t.cssMode && (e.onScroll = ci.bind(e)),
            (e.onClick = si.bind(e)),
            (e.onLoad = ui.bind(e)),
            fi(e, "on");
        },
        detachEvents: function () {
          fi(this, "off");
        },
      };
      const mi = (e, t) => e.grid && t.grid && t.grid.rows > 1;
      var hi = {
        setBreakpoint: function () {
          const e = this,
            { realIndex: t, initialized: n, params: r, el: a } = e,
            i = r.breakpoints;
          if (!i || (i && 0 === Object.keys(i).length)) return;
          const o = ya(),
            l =
              "window" !== r.breakpointsBase && r.breakpointsBase ? "container" : r.breakpointsBase,
            s =
              ["window", "container"].includes(r.breakpointsBase) || !r.breakpointsBase
                ? e.el
                : o.querySelector(r.breakpointsBase),
            c = e.getBreakpoint(i, l, s);
          if (!c || e.currentBreakpoint === c) return;
          const u = (c in i ? i[c] : void 0) || e.originalParams,
            d = mi(e, r),
            f = mi(e, u),
            p = e.params.grabCursor,
            m = u.grabCursor,
            h = r.enabled;
          d && !f
            ? (a.classList.remove(
                "".concat(r.containerModifierClass, "grid"),
                "".concat(r.containerModifierClass, "grid-column")
              ),
              e.emitContainerClasses())
            : !d &&
              f &&
              (a.classList.add("".concat(r.containerModifierClass, "grid")),
              ((u.grid.fill && "column" === u.grid.fill) ||
                (!u.grid.fill && "column" === r.grid.fill)) &&
                a.classList.add("".concat(r.containerModifierClass, "grid-column")),
              e.emitContainerClasses()),
            p && !m ? e.unsetGrabCursor() : !p && m && e.setGrabCursor(),
            ["navigation", "pagination", "scrollbar"].forEach((t) => {
              if ("undefined" === typeof u[t]) return;
              const n = r[t] && r[t].enabled,
                a = u[t] && u[t].enabled;
              n && !a && e[t].disable(), !n && a && e[t].enable();
            });
          const v = u.direction && u.direction !== r.direction,
            g = r.loop && (u.slidesPerView !== r.slidesPerView || v),
            b = r.loop;
          v && n && e.changeDirection(), Ta(e.params, u);
          const y = e.params.enabled,
            w = e.params.loop;
          Object.assign(e, {
            allowTouchMove: e.params.allowTouchMove,
            allowSlideNext: e.params.allowSlideNext,
            allowSlidePrev: e.params.allowSlidePrev,
          }),
            h && !y ? e.disable() : !h && y && e.enable(),
            (e.currentBreakpoint = c),
            e.emit("_beforeBreakpoint", u),
            n &&
              (g
                ? (e.loopDestroy(), e.loopCreate(t), e.updateSlides())
                : !b && w
                ? (e.loopCreate(t), e.updateSlides())
                : b && !w && e.loopDestroy()),
            e.emit("breakpoint", u);
        },
        getBreakpoint: function (e, t, n) {
          if ((void 0 === t && (t = "window"), !e || ("container" === t && !n))) return;
          let r = !1;
          const a = xa(),
            i = "window" === t ? a.innerHeight : n.clientHeight,
            o = Object.keys(e).map((e) => {
              if ("string" === typeof e && 0 === e.indexOf("@")) {
                const t = parseFloat(e.substr(1));
                return { value: i * t, point: e };
              }
              return { value: e, point: e };
            });
          o.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
          for (let l = 0; l < o.length; l += 1) {
            const { point: e, value: i } = o[l];
            "window" === t
              ? a.matchMedia("(min-width: ".concat(i, "px)")).matches && (r = e)
              : i <= n.clientWidth && (r = e);
          }
          return r || "max";
        },
      };
      var vi = {
        addClasses: function () {
          const e = this,
            { classNames: t, params: n, rtl: r, el: a, device: i } = e,
            o = (function (e, t) {
              const n = [];
              return (
                e.forEach((e) => {
                  "object" === typeof e
                    ? Object.keys(e).forEach((r) => {
                        e[r] && n.push(t + r);
                      })
                    : "string" === typeof e && n.push(t + e);
                }),
                n
              );
            })(
              [
                "initialized",
                n.direction,
                { "free-mode": e.params.freeMode && n.freeMode.enabled },
                { autoheight: n.autoHeight },
                { rtl: r },
                { grid: n.grid && n.grid.rows > 1 },
                { "grid-column": n.grid && n.grid.rows > 1 && "column" === n.grid.fill },
                { android: i.android },
                { ios: i.ios },
                { "css-mode": n.cssMode },
                { centered: n.cssMode && n.centeredSlides },
                { "watch-progress": n.watchSlidesProgress },
              ],
              n.containerModifierClass
            );
          t.push(...o), a.classList.add(...t), e.emitContainerClasses();
        },
        removeClasses: function () {
          const { el: e, classNames: t } = this;
          e && "string" !== typeof e && (e.classList.remove(...t), this.emitContainerClasses());
        },
      };
      var gi = {
          checkOverflow: function () {
            const e = this,
              { isLocked: t, params: n } = e,
              { slidesOffsetBefore: r } = n;
            if (r) {
              const t = e.slides.length - 1,
                n = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * r;
              e.isLocked = e.size > n;
            } else e.isLocked = 1 === e.snapGrid.length;
            !0 === n.allowSlideNext && (e.allowSlideNext = !e.isLocked),
              !0 === n.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
              t && t !== e.isLocked && (e.isEnd = !1),
              t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
          },
        },
        bi = {
          init: !0,
          direction: "horizontal",
          oneWayMovement: !1,
          swiperElementNodeName: "SWIPER-CONTAINER",
          touchEventsTarget: "wrapper",
          initialSlide: 0,
          speed: 300,
          cssMode: !1,
          updateOnWindowResize: !0,
          resizeObserver: !0,
          nested: !1,
          createElements: !1,
          eventsPrefix: "swiper",
          enabled: !0,
          focusableElements: "input, select, option, textarea, button, video, label",
          width: null,
          height: null,
          preventInteractionOnTransition: !1,
          userAgent: null,
          url: null,
          edgeSwipeDetection: !1,
          edgeSwipeThreshold: 20,
          autoHeight: !1,
          setWrapperSize: !1,
          virtualTranslate: !1,
          effect: "slide",
          breakpoints: void 0,
          breakpointsBase: "window",
          spaceBetween: 0,
          slidesPerView: 1,
          slidesPerGroup: 1,
          slidesPerGroupSkip: 0,
          slidesPerGroupAuto: !1,
          centeredSlides: !1,
          centeredSlidesBounds: !1,
          slidesOffsetBefore: 0,
          slidesOffsetAfter: 0,
          normalizeSlideIndex: !0,
          centerInsufficientSlides: !1,
          watchOverflow: !0,
          roundLengths: !1,
          touchRatio: 1,
          touchAngle: 45,
          simulateTouch: !0,
          shortSwipes: !0,
          longSwipes: !0,
          longSwipesRatio: 0.5,
          longSwipesMs: 300,
          followFinger: !0,
          allowTouchMove: !0,
          threshold: 5,
          touchMoveStopPropagation: !1,
          touchStartPreventDefault: !0,
          touchStartForcePreventDefault: !1,
          touchReleaseOnEdges: !1,
          uniqueNavElements: !0,
          resistance: !0,
          resistanceRatio: 0.85,
          watchSlidesProgress: !1,
          grabCursor: !1,
          preventClicks: !0,
          preventClicksPropagation: !0,
          slideToClickedSlide: !1,
          loop: !1,
          loopAddBlankSlides: !0,
          loopAdditionalSlides: 0,
          loopPreventsSliding: !0,
          rewind: !1,
          allowSlidePrev: !0,
          allowSlideNext: !0,
          swipeHandler: null,
          noSwiping: !0,
          noSwipingClass: "swiper-no-swiping",
          noSwipingSelector: null,
          passiveListeners: !0,
          maxBackfaceHiddenSlides: 10,
          containerModifierClass: "swiper-",
          slideClass: "swiper-slide",
          slideBlankClass: "swiper-slide-blank",
          slideActiveClass: "swiper-slide-active",
          slideVisibleClass: "swiper-slide-visible",
          slideFullyVisibleClass: "swiper-slide-fully-visible",
          slideNextClass: "swiper-slide-next",
          slidePrevClass: "swiper-slide-prev",
          wrapperClass: "swiper-wrapper",
          lazyPreloaderClass: "swiper-lazy-preloader",
          lazyPreloadPrevNext: 0,
          runCallbacksOnInit: !0,
          _emitClasses: !1,
        };
      function yi(e, t) {
        return function (n) {
          void 0 === n && (n = {});
          const r = Object.keys(n)[0],
            a = n[r];
          "object" === typeof a && null !== a
            ? (!0 === e[r] && (e[r] = { enabled: !0 }),
              "navigation" === r &&
                e[r] &&
                e[r].enabled &&
                !e[r].prevEl &&
                !e[r].nextEl &&
                (e[r].auto = !0),
              ["pagination", "scrollbar"].indexOf(r) >= 0 &&
                e[r] &&
                e[r].enabled &&
                !e[r].el &&
                (e[r].auto = !0),
              r in e && "enabled" in a
                ? ("object" !== typeof e[r] || "enabled" in e[r] || (e[r].enabled = !0),
                  e[r] || (e[r] = { enabled: !1 }),
                  Ta(t, n))
                : Ta(t, n))
            : Ta(t, n);
        };
      }
      const wi = {
          eventsEmitter: Ga,
          update: Xa,
          translate: Ka,
          transition: Za,
          slide: ei,
          loop: ti,
          grabCursor: ni,
          events: pi,
          breakpoints: hi,
          checkOverflow: gi,
          classes: vi,
        },
        xi = {};
      class Si {
        constructor() {
          let e, t;
          for (var n = arguments.length, r = new Array(n), a = 0; a < n; a++) r[a] = arguments[a];
          1 === r.length &&
          r[0].constructor &&
          "Object" === Object.prototype.toString.call(r[0]).slice(8, -1)
            ? (t = r[0])
            : ([e, t] = r),
            t || (t = {}),
            (t = Ta({}, t)),
            e && !t.el && (t.el = e);
          const i = ya();
          if (t.el && "string" === typeof t.el && i.querySelectorAll(t.el).length > 1) {
            const e = [];
            return (
              i.querySelectorAll(t.el).forEach((n) => {
                const r = Ta({}, t, { el: n });
                e.push(new Si(r));
              }),
              e
            );
          }
          const o = this;
          (o.__swiper__ = !0),
            (o.support = Ha()),
            (o.device = Va({ userAgent: t.userAgent })),
            (o.browser = Wa()),
            (o.eventsListeners = {}),
            (o.eventsAnyListeners = []),
            (o.modules = [...o.__modules__]),
            t.modules && Array.isArray(t.modules) && o.modules.push(...t.modules);
          const l = {};
          o.modules.forEach((e) => {
            e({
              params: t,
              swiper: o,
              extendParams: yi(t, l),
              on: o.on.bind(o),
              once: o.once.bind(o),
              off: o.off.bind(o),
              emit: o.emit.bind(o),
            });
          });
          const s = Ta({}, bi, l);
          return (
            (o.params = Ta({}, s, xi, t)),
            (o.originalParams = Ta({}, o.params)),
            (o.passedParams = Ta({}, t)),
            o.params &&
              o.params.on &&
              Object.keys(o.params.on).forEach((e) => {
                o.on(e, o.params.on[e]);
              }),
            o.params && o.params.onAny && o.onAny(o.params.onAny),
            Object.assign(o, {
              enabled: o.params.enabled,
              el: e,
              classNames: [],
              slides: [],
              slidesGrid: [],
              snapGrid: [],
              slidesSizesGrid: [],
              isHorizontal: () => "horizontal" === o.params.direction,
              isVertical: () => "vertical" === o.params.direction,
              activeIndex: 0,
              realIndex: 0,
              isBeginning: !0,
              isEnd: !1,
              translate: 0,
              previousTranslate: 0,
              progress: 0,
              velocity: 0,
              animating: !1,
              cssOverflowAdjustment() {
                return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
              },
              allowSlideNext: o.params.allowSlideNext,
              allowSlidePrev: o.params.allowSlidePrev,
              touchEventsData: {
                isTouched: void 0,
                isMoved: void 0,
                allowTouchCallbacks: void 0,
                touchStartTime: void 0,
                isScrolling: void 0,
                currentTranslate: void 0,
                startTranslate: void 0,
                allowThresholdMove: void 0,
                focusableElements: o.params.focusableElements,
                lastClickTime: 0,
                clickTimeout: void 0,
                velocities: [],
                allowMomentumBounce: void 0,
                startMoving: void 0,
                pointerId: null,
                touchId: null,
              },
              allowClick: !0,
              allowTouchMove: o.params.allowTouchMove,
              touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
              imagesToLoad: [],
              imagesLoaded: 0,
            }),
            o.emit("_swiper"),
            o.params.init && o.init(),
            o
          );
        }
        getDirectionLabel(e) {
          return this.isHorizontal()
            ? e
            : {
                width: "height",
                "margin-top": "margin-left",
                "margin-bottom ": "margin-right",
                "margin-left": "margin-top",
                "margin-right": "margin-bottom",
                "padding-left": "padding-top",
                "padding-right": "padding-bottom",
                marginRight: "marginBottom",
              }[e];
        }
        getSlideIndex(e) {
          const { slidesEl: t, params: n } = this,
            r = za(Ma(t, ".".concat(n.slideClass, ", swiper-slide"))[0]);
          return za(e) - r;
        }
        getSlideIndexByData(e) {
          return this.getSlideIndex(
            this.slides.find((t) => 1 * t.getAttribute("data-swiper-slide-index") === e)
          );
        }
        recalcSlides() {
          const { slidesEl: e, params: t } = this;
          this.slides = Ma(e, ".".concat(t.slideClass, ", swiper-slide"));
        }
        enable() {
          const e = this;
          e.enabled ||
            ((e.enabled = !0), e.params.grabCursor && e.setGrabCursor(), e.emit("enable"));
        }
        disable() {
          const e = this;
          e.enabled &&
            ((e.enabled = !1), e.params.grabCursor && e.unsetGrabCursor(), e.emit("disable"));
        }
        setProgress(e, t) {
          const n = this;
          e = Math.min(Math.max(e, 0), 1);
          const r = n.minTranslate(),
            a = (n.maxTranslate() - r) * e + r;
          n.translateTo(a, "undefined" === typeof t ? 0 : t),
            n.updateActiveIndex(),
            n.updateSlidesClasses();
        }
        emitContainerClasses() {
          const e = this;
          if (!e.params._emitClasses || !e.el) return;
          const t = e.el.className
            .split(" ")
            .filter(
              (t) => 0 === t.indexOf("swiper") || 0 === t.indexOf(e.params.containerModifierClass)
            );
          e.emit("_containerClasses", t.join(" "));
        }
        getSlideClasses(e) {
          const t = this;
          return t.destroyed
            ? ""
            : e.className
                .split(" ")
                .filter(
                  (e) => 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass)
                )
                .join(" ");
        }
        emitSlidesClasses() {
          const e = this;
          if (!e.params._emitClasses || !e.el) return;
          const t = [];
          e.slides.forEach((n) => {
            const r = e.getSlideClasses(n);
            t.push({ slideEl: n, classNames: r }), e.emit("_slideClass", n, r);
          }),
            e.emit("_slideClasses", t);
        }
        slidesPerViewDynamic(e, t) {
          void 0 === e && (e = "current"), void 0 === t && (t = !1);
          const {
            params: n,
            slides: r,
            slidesGrid: a,
            slidesSizesGrid: i,
            size: o,
            activeIndex: l,
          } = this;
          let s = 1;
          if ("number" === typeof n.slidesPerView) return n.slidesPerView;
          if (n.centeredSlides) {
            let e,
              t = r[l] ? Math.ceil(r[l].swiperSlideSize) : 0;
            for (let n = l + 1; n < r.length; n += 1)
              r[n] && !e && ((t += Math.ceil(r[n].swiperSlideSize)), (s += 1), t > o && (e = !0));
            for (let n = l - 1; n >= 0; n -= 1)
              r[n] && !e && ((t += r[n].swiperSlideSize), (s += 1), t > o && (e = !0));
          } else if ("current" === e)
            for (let c = l + 1; c < r.length; c += 1) {
              (t ? a[c] + i[c] - a[l] < o : a[c] - a[l] < o) && (s += 1);
            }
          else
            for (let c = l - 1; c >= 0; c -= 1) {
              a[l] - a[c] < o && (s += 1);
            }
          return s;
        }
        update() {
          const e = this;
          if (!e || e.destroyed) return;
          const { snapGrid: t, params: n } = e;
          function r() {
            const t = e.rtlTranslate ? -1 * e.translate : e.translate,
              n = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
            e.setTranslate(n), e.updateActiveIndex(), e.updateSlidesClasses();
          }
          let a;
          if (
            (n.breakpoints && e.setBreakpoint(),
            [...e.el.querySelectorAll('[loading="lazy"]')].forEach((t) => {
              t.complete && Ya(e, t);
            }),
            e.updateSize(),
            e.updateSlides(),
            e.updateProgress(),
            e.updateSlidesClasses(),
            n.freeMode && n.freeMode.enabled && !n.cssMode)
          )
            r(), n.autoHeight && e.updateAutoHeight();
          else {
            if (
              ("auto" === n.slidesPerView || n.slidesPerView > 1) &&
              e.isEnd &&
              !n.centeredSlides
            ) {
              const t = e.virtual && n.virtual.enabled ? e.virtual.slides : e.slides;
              a = e.slideTo(t.length - 1, 0, !1, !0);
            } else a = e.slideTo(e.activeIndex, 0, !1, !0);
            a || r();
          }
          n.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update");
        }
        changeDirection(e, t) {
          void 0 === t && (t = !0);
          const n = this,
            r = n.params.direction;
          return (
            e || (e = "horizontal" === r ? "vertical" : "horizontal"),
            e === r ||
              ("horizontal" !== e && "vertical" !== e) ||
              (n.el.classList.remove("".concat(n.params.containerModifierClass).concat(r)),
              n.el.classList.add("".concat(n.params.containerModifierClass).concat(e)),
              n.emitContainerClasses(),
              (n.params.direction = e),
              n.slides.forEach((t) => {
                "vertical" === e ? (t.style.width = "") : (t.style.height = "");
              }),
              n.emit("changeDirection"),
              t && n.update()),
            n
          );
        }
        changeLanguageDirection(e) {
          const t = this;
          (t.rtl && "rtl" === e) ||
            (!t.rtl && "ltr" === e) ||
            ((t.rtl = "rtl" === e),
            (t.rtlTranslate = "horizontal" === t.params.direction && t.rtl),
            t.rtl
              ? (t.el.classList.add("".concat(t.params.containerModifierClass, "rtl")),
                (t.el.dir = "rtl"))
              : (t.el.classList.remove("".concat(t.params.containerModifierClass, "rtl")),
                (t.el.dir = "ltr")),
            t.update());
        }
        mount(e) {
          const t = this;
          if (t.mounted) return !0;
          let n = e || t.params.el;
          if (("string" === typeof n && (n = document.querySelector(n)), !n)) return !1;
          (n.swiper = t),
            n.parentNode &&
              n.parentNode.host &&
              n.parentNode.host.nodeName === t.params.swiperElementNodeName.toUpperCase() &&
              (t.isElement = !0);
          const r = () => ".".concat((t.params.wrapperClass || "").trim().split(" ").join("."));
          let a = (() => {
            if (n && n.shadowRoot && n.shadowRoot.querySelector) {
              return n.shadowRoot.querySelector(r());
            }
            return Ma(n, r())[0];
          })();
          return (
            !a &&
              t.params.createElements &&
              ((a = ja("div", t.params.wrapperClass)),
              n.append(a),
              Ma(n, ".".concat(t.params.slideClass)).forEach((e) => {
                a.append(e);
              })),
            Object.assign(t, {
              el: n,
              wrapperEl: a,
              slidesEl: t.isElement && !n.parentNode.host.slideSlots ? n.parentNode.host : a,
              hostEl: t.isElement ? n.parentNode.host : n,
              mounted: !0,
              rtl: "rtl" === n.dir.toLowerCase() || "rtl" === La(n, "direction"),
              rtlTranslate:
                "horizontal" === t.params.direction &&
                ("rtl" === n.dir.toLowerCase() || "rtl" === La(n, "direction")),
              wrongRTL: "-webkit-box" === La(a, "display"),
            }),
            !0
          );
        }
        init(e) {
          const t = this;
          if (t.initialized) return t;
          if (!1 === t.mount(e)) return t;
          t.emit("beforeInit"),
            t.params.breakpoints && t.setBreakpoint(),
            t.addClasses(),
            t.updateSize(),
            t.updateSlides(),
            t.params.watchOverflow && t.checkOverflow(),
            t.params.grabCursor && t.enabled && t.setGrabCursor(),
            t.params.loop && t.virtual && t.params.virtual.enabled
              ? t.slideTo(
                  t.params.initialSlide + t.virtual.slidesBefore,
                  0,
                  t.params.runCallbacksOnInit,
                  !1,
                  !0
                )
              : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0),
            t.params.loop && t.loopCreate(),
            t.attachEvents();
          const n = [...t.el.querySelectorAll('[loading="lazy"]')];
          return (
            t.isElement && n.push(...t.hostEl.querySelectorAll('[loading="lazy"]')),
            n.forEach((e) => {
              e.complete
                ? Ya(t, e)
                : e.addEventListener("load", (e) => {
                    Ya(t, e.target);
                  });
            }),
            Qa(t),
            (t.initialized = !0),
            Qa(t),
            t.emit("init"),
            t.emit("afterInit"),
            t
          );
        }
        destroy(e, t) {
          void 0 === e && (e = !0), void 0 === t && (t = !0);
          const n = this,
            { params: r, el: a, wrapperEl: i, slides: o } = n;
          return (
            "undefined" === typeof n.params ||
              n.destroyed ||
              (n.emit("beforeDestroy"),
              (n.initialized = !1),
              n.detachEvents(),
              r.loop && n.loopDestroy(),
              t &&
                (n.removeClasses(),
                a && "string" !== typeof a && a.removeAttribute("style"),
                i && i.removeAttribute("style"),
                o &&
                  o.length &&
                  o.forEach((e) => {
                    e.classList.remove(
                      r.slideVisibleClass,
                      r.slideFullyVisibleClass,
                      r.slideActiveClass,
                      r.slideNextClass,
                      r.slidePrevClass
                    ),
                      e.removeAttribute("style"),
                      e.removeAttribute("data-swiper-slide-index");
                  })),
              n.emit("destroy"),
              Object.keys(n.eventsListeners).forEach((e) => {
                n.off(e);
              }),
              !1 !== e &&
                (n.el && "string" !== typeof n.el && (n.el.swiper = null),
                (function (e) {
                  const t = e;
                  Object.keys(t).forEach((e) => {
                    try {
                      t[e] = null;
                    } catch (mo) {}
                    try {
                      delete t[e];
                    } catch (mo) {}
                  });
                })(n)),
              (n.destroyed = !0)),
            null
          );
        }
        static extendDefaults(e) {
          Ta(xi, e);
        }
        static get extendedDefaults() {
          return xi;
        }
        static get defaults() {
          return bi;
        }
        static installModule(e) {
          Si.prototype.__modules__ || (Si.prototype.__modules__ = []);
          const t = Si.prototype.__modules__;
          "function" === typeof e && t.indexOf(e) < 0 && t.push(e);
        }
        static use(e) {
          return Array.isArray(e)
            ? (e.forEach((e) => Si.installModule(e)), Si)
            : (Si.installModule(e), Si);
        }
      }
      Object.keys(wi).forEach((e) => {
        Object.keys(wi[e]).forEach((t) => {
          Si.prototype[t] = wi[e][t];
        });
      }),
        Si.use([
          function (e) {
            let { swiper: t, on: n, emit: r } = e;
            const a = xa();
            let i = null,
              o = null;
            const l = () => {
                t && !t.destroyed && t.initialized && (r("beforeResize"), r("resize"));
              },
              s = () => {
                t && !t.destroyed && t.initialized && r("orientationchange");
              };
            n("init", () => {
              t.params.resizeObserver && "undefined" !== typeof a.ResizeObserver
                ? t &&
                  !t.destroyed &&
                  t.initialized &&
                  ((i = new ResizeObserver((e) => {
                    o = a.requestAnimationFrame(() => {
                      const { width: n, height: r } = t;
                      let a = n,
                        i = r;
                      e.forEach((e) => {
                        let { contentBoxSize: n, contentRect: r, target: o } = e;
                        (o && o !== t.el) ||
                          ((a = r ? r.width : (n[0] || n).inlineSize),
                          (i = r ? r.height : (n[0] || n).blockSize));
                      }),
                        (a === n && i === r) || l();
                    });
                  })),
                  i.observe(t.el))
                : (a.addEventListener("resize", l), a.addEventListener("orientationchange", s));
            }),
              n("destroy", () => {
                o && a.cancelAnimationFrame(o),
                  i && i.unobserve && t.el && (i.unobserve(t.el), (i = null)),
                  a.removeEventListener("resize", l),
                  a.removeEventListener("orientationchange", s);
              });
          },
          function (e) {
            let { swiper: t, extendParams: n, on: r, emit: a } = e;
            const i = [],
              o = xa(),
              l = function (e, n) {
                void 0 === n && (n = {});
                const r = new (o.MutationObserver || o.WebkitMutationObserver)((e) => {
                  if (t.__preventObserver__) return;
                  if (1 === e.length) return void a("observerUpdate", e[0]);
                  const n = function () {
                    a("observerUpdate", e[0]);
                  };
                  o.requestAnimationFrame ? o.requestAnimationFrame(n) : o.setTimeout(n, 0);
                });
                r.observe(e, {
                  attributes: "undefined" === typeof n.attributes || n.attributes,
                  childList: t.isElement || ("undefined" === typeof n.childList || n).childList,
                  characterData: "undefined" === typeof n.characterData || n.characterData,
                }),
                  i.push(r);
              };
            n({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
              r("init", () => {
                if (t.params.observer) {
                  if (t.params.observeParents) {
                    const e = Aa(t.hostEl);
                    for (let t = 0; t < e.length; t += 1) l(e[t]);
                  }
                  l(t.hostEl, { childList: t.params.observeSlideChildren }),
                    l(t.wrapperEl, { attributes: !1 });
                }
              }),
              r("destroy", () => {
                i.forEach((e) => {
                  e.disconnect();
                }),
                  i.splice(0, i.length);
              });
          },
        ]);
      const ki = [
        "eventsPrefix",
        "injectStyles",
        "injectStylesUrls",
        "modules",
        "init",
        "_direction",
        "oneWayMovement",
        "swiperElementNodeName",
        "touchEventsTarget",
        "initialSlide",
        "_speed",
        "cssMode",
        "updateOnWindowResize",
        "resizeObserver",
        "nested",
        "focusableElements",
        "_enabled",
        "_width",
        "_height",
        "preventInteractionOnTransition",
        "userAgent",
        "url",
        "_edgeSwipeDetection",
        "_edgeSwipeThreshold",
        "_freeMode",
        "_autoHeight",
        "setWrapperSize",
        "virtualTranslate",
        "_effect",
        "breakpoints",
        "breakpointsBase",
        "_spaceBetween",
        "_slidesPerView",
        "maxBackfaceHiddenSlides",
        "_grid",
        "_slidesPerGroup",
        "_slidesPerGroupSkip",
        "_slidesPerGroupAuto",
        "_centeredSlides",
        "_centeredSlidesBounds",
        "_slidesOffsetBefore",
        "_slidesOffsetAfter",
        "normalizeSlideIndex",
        "_centerInsufficientSlides",
        "_watchOverflow",
        "roundLengths",
        "touchRatio",
        "touchAngle",
        "simulateTouch",
        "_shortSwipes",
        "_longSwipes",
        "longSwipesRatio",
        "longSwipesMs",
        "_followFinger",
        "allowTouchMove",
        "_threshold",
        "touchMoveStopPropagation",
        "touchStartPreventDefault",
        "touchStartForcePreventDefault",
        "touchReleaseOnEdges",
        "uniqueNavElements",
        "_resistance",
        "_resistanceRatio",
        "_watchSlidesProgress",
        "_grabCursor",
        "preventClicks",
        "preventClicksPropagation",
        "_slideToClickedSlide",
        "_loop",
        "loopAdditionalSlides",
        "loopAddBlankSlides",
        "loopPreventsSliding",
        "_rewind",
        "_allowSlidePrev",
        "_allowSlideNext",
        "_swipeHandler",
        "_noSwiping",
        "noSwipingClass",
        "noSwipingSelector",
        "passiveListeners",
        "containerModifierClass",
        "slideClass",
        "slideActiveClass",
        "slideVisibleClass",
        "slideFullyVisibleClass",
        "slideNextClass",
        "slidePrevClass",
        "slideBlankClass",
        "wrapperClass",
        "lazyPreloaderClass",
        "lazyPreloadPrevNext",
        "runCallbacksOnInit",
        "observer",
        "observeParents",
        "observeSlideChildren",
        "a11y",
        "_autoplay",
        "_controller",
        "coverflowEffect",
        "cubeEffect",
        "fadeEffect",
        "flipEffect",
        "creativeEffect",
        "cardsEffect",
        "hashNavigation",
        "history",
        "keyboard",
        "mousewheel",
        "_navigation",
        "_pagination",
        "parallax",
        "_scrollbar",
        "_thumbs",
        "virtual",
        "zoom",
        "control",
      ];
      function Ei(e) {
        return (
          "object" === typeof e &&
          null !== e &&
          e.constructor &&
          "Object" === Object.prototype.toString.call(e).slice(8, -1) &&
          !e.__swiper__
        );
      }
      function Ci(e, t) {
        const n = ["__proto__", "constructor", "prototype"];
        Object.keys(t)
          .filter((e) => n.indexOf(e) < 0)
          .forEach((n) => {
            "undefined" === typeof e[n]
              ? (e[n] = t[n])
              : Ei(t[n]) && Ei(e[n]) && Object.keys(t[n]).length > 0
              ? t[n].__swiper__
                ? (e[n] = t[n])
                : Ci(e[n], t[n])
              : (e[n] = t[n]);
          });
      }
      function Ti(e) {
        return (
          void 0 === e && (e = {}),
          e.navigation &&
            "undefined" === typeof e.navigation.nextEl &&
            "undefined" === typeof e.navigation.prevEl
        );
      }
      function Pi(e) {
        return void 0 === e && (e = {}), e.pagination && "undefined" === typeof e.pagination.el;
      }
      function Ni(e) {
        return void 0 === e && (e = {}), e.scrollbar && "undefined" === typeof e.scrollbar.el;
      }
      function Oi(e) {
        void 0 === e && (e = "");
        const t = e
            .split(" ")
            .map((e) => e.trim())
            .filter((e) => !!e),
          n = [];
        return (
          t.forEach((e) => {
            n.indexOf(e) < 0 && n.push(e);
          }),
          n.join(" ")
        );
      }
      function Mi(e) {
        return (
          void 0 === e && (e = ""),
          e ? (e.includes("swiper-wrapper") ? e : "swiper-wrapper ".concat(e)) : "swiper-wrapper"
        );
      }
      function _i() {
        return (
          (_i = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          _i.apply(this, arguments)
        );
      }
      function ji(e) {
        return e.type && e.type.displayName && e.type.displayName.includes("SwiperSlide");
      }
      function Li(e) {
        const n = [];
        return (
          t.Children.toArray(e).forEach((e) => {
            ji(e)
              ? n.push(e)
              : e.props && e.props.children && Li(e.props.children).forEach((e) => n.push(e));
          }),
          n
        );
      }
      function zi(e) {
        const n = [],
          r = {
            "container-start": [],
            "container-end": [],
            "wrapper-start": [],
            "wrapper-end": [],
          };
        return (
          t.Children.toArray(e).forEach((e) => {
            if (ji(e)) n.push(e);
            else if (e.props && e.props.slot && r[e.props.slot]) r[e.props.slot].push(e);
            else if (e.props && e.props.children) {
              const t = Li(e.props.children);
              t.length > 0 ? t.forEach((e) => n.push(e)) : r["container-end"].push(e);
            } else r["container-end"].push(e);
          }),
          { slides: n, slots: r }
        );
      }
      function Ai(e, n) {
        return "undefined" === typeof window
          ? (0, t.useEffect)(e, n)
          : (0, t.useLayoutEffect)(e, n);
      }
      const Ii = (0, t.createContext)(null),
        Ri = (0, t.createContext)(null),
        Fi = (0, t.forwardRef)(function (e, n) {
          let {
              className: r,
              tag: a = "div",
              wrapperTag: i = "div",
              children: o,
              onSwiper: l,
              ...s
            } = void 0 === e ? {} : e,
            c = !1;
          const [u, d] = (0, t.useState)("swiper"),
            [f, p] = (0, t.useState)(null),
            [m, h] = (0, t.useState)(!1),
            v = (0, t.useRef)(!1),
            g = (0, t.useRef)(null),
            b = (0, t.useRef)(null),
            y = (0, t.useRef)(null),
            w = (0, t.useRef)(null),
            x = (0, t.useRef)(null),
            S = (0, t.useRef)(null),
            k = (0, t.useRef)(null),
            E = (0, t.useRef)(null),
            {
              params: C,
              passedParams: T,
              rest: P,
              events: N,
            } = (function (e, t) {
              void 0 === e && (e = {}), void 0 === t && (t = !0);
              const n = { on: {} },
                r = {},
                a = {};
              Ci(n, bi), (n._emitClasses = !0), (n.init = !1);
              const i = {},
                o = ki.map((e) => e.replace(/_/, "")),
                l = Object.assign({}, e);
              return (
                Object.keys(l).forEach((l) => {
                  "undefined" !== typeof e[l] &&
                    (o.indexOf(l) >= 0
                      ? Ei(e[l])
                        ? ((n[l] = {}), (a[l] = {}), Ci(n[l], e[l]), Ci(a[l], e[l]))
                        : ((n[l] = e[l]), (a[l] = e[l]))
                      : 0 === l.search(/on[A-Z]/) && "function" === typeof e[l]
                      ? t
                        ? (r["".concat(l[2].toLowerCase()).concat(l.substr(3))] = e[l])
                        : (n.on["".concat(l[2].toLowerCase()).concat(l.substr(3))] = e[l])
                      : (i[l] = e[l]));
                }),
                ["navigation", "pagination", "scrollbar"].forEach((e) => {
                  !0 === n[e] && (n[e] = {}), !1 === n[e] && delete n[e];
                }),
                { params: n, passedParams: a, rest: i, events: r }
              );
            })(s),
            { slides: O, slots: M } = zi(o),
            _ = () => {
              h(!m);
            };
          Object.assign(C.on, {
            _containerClasses(e, t) {
              d(t);
            },
          });
          const j = () => {
            Object.assign(C.on, N), (c = !0);
            const e = { ...C };
            if (
              (delete e.wrapperClass,
              (b.current = new Si(e)),
              b.current.virtual && b.current.params.virtual.enabled)
            ) {
              b.current.virtual.slides = O;
              const e = { cache: !1, slides: O, renderExternal: p, renderExternalUpdate: !1 };
              Ci(b.current.params.virtual, e), Ci(b.current.originalParams.virtual, e);
            }
          };
          g.current || j(), b.current && b.current.on("_beforeBreakpoint", _);
          return (
            (0, t.useEffect)(() => () => {
              b.current && b.current.off("_beforeBreakpoint", _);
            }),
            (0, t.useEffect)(() => {
              !v.current && b.current && (b.current.emitSlidesClasses(), (v.current = !0));
            }),
            Ai(() => {
              if ((n && (n.current = g.current), g.current))
                return (
                  b.current.destroyed && j(),
                  (function (e, t) {
                    let {
                      el: n,
                      nextEl: r,
                      prevEl: a,
                      paginationEl: i,
                      scrollbarEl: o,
                      swiper: l,
                    } = e;
                    Ti(t) &&
                      r &&
                      a &&
                      ((l.params.navigation.nextEl = r),
                      (l.originalParams.navigation.nextEl = r),
                      (l.params.navigation.prevEl = a),
                      (l.originalParams.navigation.prevEl = a)),
                      Pi(t) &&
                        i &&
                        ((l.params.pagination.el = i), (l.originalParams.pagination.el = i)),
                      Ni(t) &&
                        o &&
                        ((l.params.scrollbar.el = o), (l.originalParams.scrollbar.el = o)),
                      l.init(n);
                  })(
                    {
                      el: g.current,
                      nextEl: x.current,
                      prevEl: S.current,
                      paginationEl: k.current,
                      scrollbarEl: E.current,
                      swiper: b.current,
                    },
                    C
                  ),
                  l && !b.current.destroyed && l(b.current),
                  () => {
                    b.current && !b.current.destroyed && b.current.destroy(!0, !1);
                  }
                );
            }, []),
            Ai(() => {
              !c &&
                N &&
                b.current &&
                Object.keys(N).forEach((e) => {
                  b.current.on(e, N[e]);
                });
              const e = (function (e, t, n, r, a) {
                const i = [];
                if (!t) return i;
                const o = (e) => {
                  i.indexOf(e) < 0 && i.push(e);
                };
                if (n && r) {
                  const e = r.map(a),
                    t = n.map(a);
                  e.join("") !== t.join("") && o("children"),
                    r.length !== n.length && o("children");
                }
                return (
                  ki
                    .filter((e) => "_" === e[0])
                    .map((e) => e.replace(/_/, ""))
                    .forEach((n) => {
                      if (n in e && n in t)
                        if (Ei(e[n]) && Ei(t[n])) {
                          const r = Object.keys(e[n]),
                            a = Object.keys(t[n]);
                          r.length !== a.length
                            ? o(n)
                            : (r.forEach((r) => {
                                e[n][r] !== t[n][r] && o(n);
                              }),
                              a.forEach((r) => {
                                e[n][r] !== t[n][r] && o(n);
                              }));
                        } else e[n] !== t[n] && o(n);
                    }),
                  i
                );
              })(T, y.current, O, w.current, (e) => e.key);
              return (
                (y.current = T),
                (w.current = O),
                e.length &&
                  b.current &&
                  !b.current.destroyed &&
                  (function (e) {
                    let {
                      swiper: t,
                      slides: n,
                      passedParams: r,
                      changedParams: a,
                      nextEl: i,
                      prevEl: o,
                      scrollbarEl: l,
                      paginationEl: s,
                    } = e;
                    const c = a.filter(
                        (e) => "children" !== e && "direction" !== e && "wrapperClass" !== e
                      ),
                      {
                        params: u,
                        pagination: d,
                        navigation: f,
                        scrollbar: p,
                        virtual: m,
                        thumbs: h,
                      } = t;
                    let v, g, b, y, w, x, S, k;
                    a.includes("thumbs") &&
                      r.thumbs &&
                      r.thumbs.swiper &&
                      !r.thumbs.swiper.destroyed &&
                      u.thumbs &&
                      (!u.thumbs.swiper || u.thumbs.swiper.destroyed) &&
                      (v = !0),
                      a.includes("controller") &&
                        r.controller &&
                        r.controller.control &&
                        u.controller &&
                        !u.controller.control &&
                        (g = !0),
                      a.includes("pagination") &&
                        r.pagination &&
                        (r.pagination.el || s) &&
                        (u.pagination || !1 === u.pagination) &&
                        d &&
                        !d.el &&
                        (b = !0),
                      a.includes("scrollbar") &&
                        r.scrollbar &&
                        (r.scrollbar.el || l) &&
                        (u.scrollbar || !1 === u.scrollbar) &&
                        p &&
                        !p.el &&
                        (y = !0),
                      a.includes("navigation") &&
                        r.navigation &&
                        (r.navigation.prevEl || o) &&
                        (r.navigation.nextEl || i) &&
                        (u.navigation || !1 === u.navigation) &&
                        f &&
                        !f.prevEl &&
                        !f.nextEl &&
                        (w = !0);
                    const E = (e) => {
                      t[e] &&
                        (t[e].destroy(),
                        "navigation" === e
                          ? (t.isElement && (t[e].prevEl.remove(), t[e].nextEl.remove()),
                            (u[e].prevEl = void 0),
                            (u[e].nextEl = void 0),
                            (t[e].prevEl = void 0),
                            (t[e].nextEl = void 0))
                          : (t.isElement && t[e].el.remove(),
                            (u[e].el = void 0),
                            (t[e].el = void 0)));
                    };
                    a.includes("loop") &&
                      t.isElement &&
                      (u.loop && !r.loop ? (x = !0) : !u.loop && r.loop ? (S = !0) : (k = !0)),
                      c.forEach((e) => {
                        if (Ei(u[e]) && Ei(r[e]))
                          Object.assign(u[e], r[e]),
                            ("navigation" !== e && "pagination" !== e && "scrollbar" !== e) ||
                              !("enabled" in r[e]) ||
                              r[e].enabled ||
                              E(e);
                        else {
                          const t = r[e];
                          (!0 !== t && !1 !== t) ||
                          ("navigation" !== e && "pagination" !== e && "scrollbar" !== e)
                            ? (u[e] = r[e])
                            : !1 === t && E(e);
                        }
                      }),
                      c.includes("controller") &&
                        !g &&
                        t.controller &&
                        t.controller.control &&
                        u.controller &&
                        u.controller.control &&
                        (t.controller.control = u.controller.control),
                      a.includes("children") && n && m && u.virtual.enabled
                        ? ((m.slides = n), m.update(!0))
                        : a.includes("virtual") &&
                          m &&
                          u.virtual.enabled &&
                          (n && (m.slides = n), m.update(!0)),
                      a.includes("children") && n && u.loop && (k = !0),
                      v && h.init() && h.update(!0);
                    g && (t.controller.control = u.controller.control),
                      b &&
                        (!t.isElement ||
                          (s && "string" !== typeof s) ||
                          ((s = document.createElement("div")),
                          s.classList.add("swiper-pagination"),
                          s.part.add("pagination"),
                          t.el.appendChild(s)),
                        s && (u.pagination.el = s),
                        d.init(),
                        d.render(),
                        d.update()),
                      y &&
                        (!t.isElement ||
                          (l && "string" !== typeof l) ||
                          ((l = document.createElement("div")),
                          l.classList.add("swiper-scrollbar"),
                          l.part.add("scrollbar"),
                          t.el.appendChild(l)),
                        l && (u.scrollbar.el = l),
                        p.init(),
                        p.updateSize(),
                        p.setTranslate()),
                      w &&
                        (t.isElement &&
                          ((i && "string" !== typeof i) ||
                            ((i = document.createElement("div")),
                            i.classList.add("swiper-button-next"),
                            (i.innerHTML = t.hostEl.constructor.nextButtonSvg),
                            i.part.add("button-next"),
                            t.el.appendChild(i)),
                          (o && "string" !== typeof o) ||
                            ((o = document.createElement("div")),
                            o.classList.add("swiper-button-prev"),
                            (o.innerHTML = t.hostEl.constructor.prevButtonSvg),
                            o.part.add("button-prev"),
                            t.el.appendChild(o))),
                        i && (u.navigation.nextEl = i),
                        o && (u.navigation.prevEl = o),
                        f.init(),
                        f.update()),
                      a.includes("allowSlideNext") && (t.allowSlideNext = r.allowSlideNext),
                      a.includes("allowSlidePrev") && (t.allowSlidePrev = r.allowSlidePrev),
                      a.includes("direction") && t.changeDirection(r.direction, !1),
                      (x || k) && t.loopDestroy(),
                      (S || k) && t.loopCreate(),
                      t.update();
                  })({
                    swiper: b.current,
                    slides: O,
                    passedParams: T,
                    changedParams: e,
                    nextEl: x.current,
                    prevEl: S.current,
                    scrollbarEl: E.current,
                    paginationEl: k.current,
                  }),
                () => {
                  N &&
                    b.current &&
                    Object.keys(N).forEach((e) => {
                      b.current.off(e, N[e]);
                    });
                }
              );
            }),
            Ai(() => {
              ((e) => {
                !e ||
                  e.destroyed ||
                  !e.params.virtual ||
                  (e.params.virtual && !e.params.virtual.enabled) ||
                  (e.updateSlides(),
                  e.updateProgress(),
                  e.updateSlidesClasses(),
                  e.parallax &&
                    e.params.parallax &&
                    e.params.parallax.enabled &&
                    e.parallax.setTranslate());
              })(b.current);
            }, [f]),
            t.createElement(
              a,
              _i({ ref: g, className: Oi("".concat(u).concat(r ? " ".concat(r) : "")) }, P),
              t.createElement(
                Ri.Provider,
                { value: b.current },
                M["container-start"],
                t.createElement(
                  i,
                  { className: Mi(C.wrapperClass) },
                  M["wrapper-start"],
                  C.virtual
                    ? (function (e, n, r) {
                        if (!r) return null;
                        const a = (e) => {
                            let t = e;
                            return e < 0 ? (t = n.length + e) : t >= n.length && (t -= n.length), t;
                          },
                          i = e.isHorizontal()
                            ? { [e.rtlTranslate ? "right" : "left"]: "".concat(r.offset, "px") }
                            : { top: "".concat(r.offset, "px") },
                          { from: o, to: l } = r,
                          s = e.params.loop ? -n.length : 0,
                          c = e.params.loop ? 2 * n.length : n.length,
                          u = [];
                        for (let t = s; t < c; t += 1) t >= o && t <= l && u.push(n[a(t)]);
                        return u.map((n, r) =>
                          t.cloneElement(n, {
                            swiper: e,
                            style: i,
                            key: n.props.virtualIndex || n.key || "slide-".concat(r),
                          })
                        );
                      })(b.current, O, f)
                    : O.map((e, n) =>
                        t.cloneElement(e, { swiper: b.current, swiperSlideIndex: n })
                      ),
                  M["wrapper-end"]
                ),
                Ti(C) &&
                  t.createElement(
                    t.Fragment,
                    null,
                    t.createElement("div", { ref: S, className: "swiper-button-prev" }),
                    t.createElement("div", { ref: x, className: "swiper-button-next" })
                  ),
                Ni(C) && t.createElement("div", { ref: E, className: "swiper-scrollbar" }),
                Pi(C) && t.createElement("div", { ref: k, className: "swiper-pagination" }),
                M["container-end"]
              )
            )
          );
        });
      Fi.displayName = "Swiper";
      const Di = (0, t.forwardRef)(function (e, n) {
        let {
          tag: r = "div",
          children: a,
          className: i = "",
          swiper: o,
          zoom: l,
          lazy: s,
          virtualIndex: c,
          swiperSlideIndex: u,
          ...d
        } = void 0 === e ? {} : e;
        const f = (0, t.useRef)(null),
          [p, m] = (0, t.useState)("swiper-slide"),
          [h, v] = (0, t.useState)(!1);
        function g(e, t, n) {
          t === f.current && m(n);
        }
        Ai(() => {
          if (
            ("undefined" !== typeof u && (f.current.swiperSlideIndex = u),
            n && (n.current = f.current),
            f.current && o)
          ) {
            if (!o.destroyed)
              return (
                o.on("_slideClass", g),
                () => {
                  o && o.off("_slideClass", g);
                }
              );
            "swiper-slide" !== p && m("swiper-slide");
          }
        }),
          Ai(() => {
            o && f.current && !o.destroyed && m(o.getSlideClasses(f.current));
          }, [o]);
        const b = {
            isActive: p.indexOf("swiper-slide-active") >= 0,
            isVisible: p.indexOf("swiper-slide-visible") >= 0,
            isPrev: p.indexOf("swiper-slide-prev") >= 0,
            isNext: p.indexOf("swiper-slide-next") >= 0,
          },
          y = () => ("function" === typeof a ? a(b) : a);
        return t.createElement(
          r,
          _i(
            {
              ref: f,
              className: Oi("".concat(p).concat(i ? " ".concat(i) : "")),
              "data-swiper-slide-index": c,
              onLoad: () => {
                v(!0);
              },
            },
            d
          ),
          l &&
            t.createElement(
              Ii.Provider,
              { value: b },
              t.createElement(
                "div",
                {
                  className: "swiper-zoom-container",
                  "data-swiper-zoom": "number" === typeof l ? l : void 0,
                },
                y(),
                s && !h && t.createElement("div", { className: "swiper-lazy-preloader" })
              )
            ),
          !l &&
            t.createElement(
              Ii.Provider,
              { value: b },
              y(),
              s && !h && t.createElement("div", { className: "swiper-lazy-preloader" })
            )
        );
      });
      function Bi(e, t, n, r) {
        return (
          e.params.createElements &&
            Object.keys(r).forEach((a) => {
              if (!n[a] && !0 === n.auto) {
                let i = Ma(e.el, ".".concat(r[a]))[0];
                i || ((i = ja("div", r[a])), (i.className = r[a]), e.el.append(i)),
                  (n[a] = i),
                  (t[a] = i);
              }
            }),
          n
        );
      }
      function Hi(e) {
        let { swiper: t, extendParams: n, on: r, emit: a } = e;
        function i(e) {
          let n;
          return e &&
            "string" === typeof e &&
            t.isElement &&
            ((n = t.el.querySelector(e) || t.hostEl.querySelector(e)), n)
            ? n
            : (e &&
                ("string" === typeof e && (n = [...document.querySelectorAll(e)]),
                t.params.uniqueNavElements &&
                "string" === typeof e &&
                n &&
                n.length > 1 &&
                1 === t.el.querySelectorAll(e).length
                  ? (n = t.el.querySelector(e))
                  : n && 1 === n.length && (n = n[0])),
              e && !n ? e : n);
        }
        function o(e, n) {
          const r = t.params.navigation;
          (e = Ra(e)).forEach((e) => {
            e &&
              (e.classList[n ? "add" : "remove"](...r.disabledClass.split(" ")),
              "BUTTON" === e.tagName && (e.disabled = n),
              t.params.watchOverflow &&
                t.enabled &&
                e.classList[t.isLocked ? "add" : "remove"](r.lockClass));
          });
        }
        function l() {
          const { nextEl: e, prevEl: n } = t.navigation;
          if (t.params.loop) return o(n, !1), void o(e, !1);
          o(n, t.isBeginning && !t.params.rewind), o(e, t.isEnd && !t.params.rewind);
        }
        function s(e) {
          e.preventDefault(),
            (!t.isBeginning || t.params.loop || t.params.rewind) &&
              (t.slidePrev(), a("navigationPrev"));
        }
        function c(e) {
          e.preventDefault(),
            (!t.isEnd || t.params.loop || t.params.rewind) && (t.slideNext(), a("navigationNext"));
        }
        function u() {
          const e = t.params.navigation;
          if (
            ((t.params.navigation = Bi(t, t.originalParams.navigation, t.params.navigation, {
              nextEl: "swiper-button-next",
              prevEl: "swiper-button-prev",
            })),
            !e.nextEl && !e.prevEl)
          )
            return;
          let n = i(e.nextEl),
            r = i(e.prevEl);
          Object.assign(t.navigation, { nextEl: n, prevEl: r }), (n = Ra(n)), (r = Ra(r));
          const a = (n, r) => {
            n && n.addEventListener("click", "next" === r ? c : s),
              !t.enabled && n && n.classList.add(...e.lockClass.split(" "));
          };
          n.forEach((e) => a(e, "next")), r.forEach((e) => a(e, "prev"));
        }
        function d() {
          let { nextEl: e, prevEl: n } = t.navigation;
          (e = Ra(e)), (n = Ra(n));
          const r = (e, n) => {
            e.removeEventListener("click", "next" === n ? c : s),
              e.classList.remove(...t.params.navigation.disabledClass.split(" "));
          };
          e.forEach((e) => r(e, "next")), n.forEach((e) => r(e, "prev"));
        }
        n({
          navigation: {
            nextEl: null,
            prevEl: null,
            hideOnClick: !1,
            disabledClass: "swiper-button-disabled",
            hiddenClass: "swiper-button-hidden",
            lockClass: "swiper-button-lock",
            navigationDisabledClass: "swiper-navigation-disabled",
          },
        }),
          (t.navigation = { nextEl: null, prevEl: null }),
          r("init", () => {
            !1 === t.params.navigation.enabled ? f() : (u(), l());
          }),
          r("toEdge fromEdge lock unlock", () => {
            l();
          }),
          r("destroy", () => {
            d();
          }),
          r("enable disable", () => {
            let { nextEl: e, prevEl: n } = t.navigation;
            (e = Ra(e)),
              (n = Ra(n)),
              t.enabled
                ? l()
                : [...e, ...n]
                    .filter((e) => !!e)
                    .forEach((e) => e.classList.add(t.params.navigation.lockClass));
          }),
          r("click", (e, n) => {
            let { nextEl: r, prevEl: i } = t.navigation;
            (r = Ra(r)), (i = Ra(i));
            const o = n.target;
            let l = i.includes(o) || r.includes(o);
            if (t.isElement && !l) {
              const e = n.path || (n.composedPath && n.composedPath());
              e && (l = e.find((e) => r.includes(e) || i.includes(e)));
            }
            if (t.params.navigation.hideOnClick && !l) {
              if (
                t.pagination &&
                t.params.pagination &&
                t.params.pagination.clickable &&
                (t.pagination.el === o || t.pagination.el.contains(o))
              )
                return;
              let e;
              r.length
                ? (e = r[0].classList.contains(t.params.navigation.hiddenClass))
                : i.length && (e = i[0].classList.contains(t.params.navigation.hiddenClass)),
                a(!0 === e ? "navigationShow" : "navigationHide"),
                [...r, ...i]
                  .filter((e) => !!e)
                  .forEach((e) => e.classList.toggle(t.params.navigation.hiddenClass));
            }
          });
        const f = () => {
          t.el.classList.add(...t.params.navigation.navigationDisabledClass.split(" ")), d();
        };
        Object.assign(t.navigation, {
          enable: () => {
            t.el.classList.remove(...t.params.navigation.navigationDisabledClass.split(" ")),
              u(),
              l();
          },
          disable: f,
          update: l,
          init: u,
          destroy: d,
        });
      }
      function Vi(e) {
        return (
          void 0 === e && (e = ""),
          ".".concat(
            e
              .trim()
              .replace(/([\.:!+\/])/g, "\\$1")
              .replace(/ /g, ".")
          )
        );
      }
      function Wi(e) {
        let { swiper: t, extendParams: n, on: r, emit: a } = e;
        const i = "swiper-pagination";
        let o;
        n({
          pagination: {
            el: null,
            bulletElement: "span",
            clickable: !1,
            hideOnClick: !1,
            renderBullet: null,
            renderProgressbar: null,
            renderFraction: null,
            renderCustom: null,
            progressbarOpposite: !1,
            type: "bullets",
            dynamicBullets: !1,
            dynamicMainBullets: 1,
            formatFractionCurrent: (e) => e,
            formatFractionTotal: (e) => e,
            bulletClass: "".concat(i, "-bullet"),
            bulletActiveClass: "".concat(i, "-bullet-active"),
            modifierClass: "".concat(i, "-"),
            currentClass: "".concat(i, "-current"),
            totalClass: "".concat(i, "-total"),
            hiddenClass: "".concat(i, "-hidden"),
            progressbarFillClass: "".concat(i, "-progressbar-fill"),
            progressbarOppositeClass: "".concat(i, "-progressbar-opposite"),
            clickableClass: "".concat(i, "-clickable"),
            lockClass: "".concat(i, "-lock"),
            horizontalClass: "".concat(i, "-horizontal"),
            verticalClass: "".concat(i, "-vertical"),
            paginationDisabledClass: "".concat(i, "-disabled"),
          },
        }),
          (t.pagination = { el: null, bullets: [] });
        let l = 0;
        function s() {
          return (
            !t.params.pagination.el ||
            !t.pagination.el ||
            (Array.isArray(t.pagination.el) && 0 === t.pagination.el.length)
          );
        }
        function c(e, n) {
          const { bulletActiveClass: r } = t.params.pagination;
          e &&
            (e = e["".concat("prev" === n ? "previous" : "next", "ElementSibling")]) &&
            (e.classList.add("".concat(r, "-").concat(n)),
            (e = e["".concat("prev" === n ? "previous" : "next", "ElementSibling")]) &&
              e.classList.add("".concat(r, "-").concat(n, "-").concat(n)));
        }
        function u(e) {
          const n = e.target.closest(Vi(t.params.pagination.bulletClass));
          if (!n) return;
          e.preventDefault();
          const r = za(n) * t.params.slidesPerGroup;
          if (t.params.loop) {
            if (t.realIndex === r) return;
            const e =
              ((a = t.realIndex),
              (i = r),
              (o = t.slides.length),
              (i %= o) === 1 + (a %= o) ? "next" : i === a - 1 ? "previous" : void 0);
            "next" === e ? t.slideNext() : "previous" === e ? t.slidePrev() : t.slideToLoop(r);
          } else t.slideTo(r);
          var a, i, o;
        }
        function d() {
          const e = t.rtl,
            n = t.params.pagination;
          if (s()) return;
          let r,
            i,
            u = t.pagination.el;
          u = Ra(u);
          const d =
              t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length,
            f = t.params.loop ? Math.ceil(d / t.params.slidesPerGroup) : t.snapGrid.length;
          if (
            (t.params.loop
              ? ((i = t.previousRealIndex || 0),
                (r =
                  t.params.slidesPerGroup > 1
                    ? Math.floor(t.realIndex / t.params.slidesPerGroup)
                    : t.realIndex))
              : "undefined" !== typeof t.snapIndex
              ? ((r = t.snapIndex), (i = t.previousSnapIndex))
              : ((i = t.previousIndex || 0), (r = t.activeIndex || 0)),
            "bullets" === n.type && t.pagination.bullets && t.pagination.bullets.length > 0)
          ) {
            const a = t.pagination.bullets;
            let s, d, f;
            if (
              (n.dynamicBullets &&
                ((o = Ia(a[0], t.isHorizontal() ? "width" : "height", !0)),
                u.forEach((e) => {
                  e.style[t.isHorizontal() ? "width" : "height"] = "".concat(
                    o * (n.dynamicMainBullets + 4),
                    "px"
                  );
                }),
                n.dynamicMainBullets > 1 &&
                  void 0 !== i &&
                  ((l += r - (i || 0)),
                  l > n.dynamicMainBullets - 1 ? (l = n.dynamicMainBullets - 1) : l < 0 && (l = 0)),
                (s = Math.max(r - l, 0)),
                (d = s + (Math.min(a.length, n.dynamicMainBullets) - 1)),
                (f = (d + s) / 2)),
              a.forEach((e) => {
                const t = [
                  ...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map((e) =>
                    "".concat(n.bulletActiveClass).concat(e)
                  ),
                ]
                  .map((e) => ("string" === typeof e && e.includes(" ") ? e.split(" ") : e))
                  .flat();
                e.classList.remove(...t);
              }),
              u.length > 1)
            )
              a.forEach((e) => {
                const a = za(e);
                a === r
                  ? e.classList.add(...n.bulletActiveClass.split(" "))
                  : t.isElement && e.setAttribute("part", "bullet"),
                  n.dynamicBullets &&
                    (a >= s &&
                      a <= d &&
                      e.classList.add(..."".concat(n.bulletActiveClass, "-main").split(" ")),
                    a === s && c(e, "prev"),
                    a === d && c(e, "next"));
              });
            else {
              const e = a[r];
              if (
                (e && e.classList.add(...n.bulletActiveClass.split(" ")),
                t.isElement &&
                  a.forEach((e, t) => {
                    e.setAttribute("part", t === r ? "bullet-active" : "bullet");
                  }),
                n.dynamicBullets)
              ) {
                const e = a[s],
                  t = a[d];
                for (let r = s; r <= d; r += 1)
                  a[r] && a[r].classList.add(..."".concat(n.bulletActiveClass, "-main").split(" "));
                c(e, "prev"), c(t, "next");
              }
            }
            if (n.dynamicBullets) {
              const r = Math.min(a.length, n.dynamicMainBullets + 4),
                i = (o * r - o) / 2 - f * o,
                l = e ? "right" : "left";
              a.forEach((e) => {
                e.style[t.isHorizontal() ? l : "top"] = "".concat(i, "px");
              });
            }
          }
          u.forEach((e, i) => {
            if (
              ("fraction" === n.type &&
                (e.querySelectorAll(Vi(n.currentClass)).forEach((e) => {
                  e.textContent = n.formatFractionCurrent(r + 1);
                }),
                e.querySelectorAll(Vi(n.totalClass)).forEach((e) => {
                  e.textContent = n.formatFractionTotal(f);
                })),
              "progressbar" === n.type)
            ) {
              let a;
              a = n.progressbarOpposite
                ? t.isHorizontal()
                  ? "vertical"
                  : "horizontal"
                : t.isHorizontal()
                ? "horizontal"
                : "vertical";
              const i = (r + 1) / f;
              let o = 1,
                l = 1;
              "horizontal" === a ? (o = i) : (l = i),
                e.querySelectorAll(Vi(n.progressbarFillClass)).forEach((e) => {
                  (e.style.transform = "translate3d(0,0,0) scaleX("
                    .concat(o, ") scaleY(")
                    .concat(l, ")")),
                    (e.style.transitionDuration = "".concat(t.params.speed, "ms"));
                });
            }
            "custom" === n.type && n.renderCustom
              ? ((e.innerHTML = n.renderCustom(t, r + 1, f)), 0 === i && a("paginationRender", e))
              : (0 === i && a("paginationRender", e), a("paginationUpdate", e)),
              t.params.watchOverflow &&
                t.enabled &&
                e.classList[t.isLocked ? "add" : "remove"](n.lockClass);
          });
        }
        function f() {
          const e = t.params.pagination;
          if (s()) return;
          const n =
            t.virtual && t.params.virtual.enabled
              ? t.virtual.slides.length
              : t.grid && t.params.grid.rows > 1
              ? t.slides.length / Math.ceil(t.params.grid.rows)
              : t.slides.length;
          let r = t.pagination.el;
          r = Ra(r);
          let i = "";
          if ("bullets" === e.type) {
            let r = t.params.loop ? Math.ceil(n / t.params.slidesPerGroup) : t.snapGrid.length;
            t.params.freeMode && t.params.freeMode.enabled && r > n && (r = n);
            for (let n = 0; n < r; n += 1)
              e.renderBullet
                ? (i += e.renderBullet.call(t, n, e.bulletClass))
                : (i += "<"
                    .concat(e.bulletElement, " ")
                    .concat(t.isElement ? 'part="bullet"' : "", ' class="')
                    .concat(e.bulletClass, '"></')
                    .concat(e.bulletElement, ">"));
          }
          "fraction" === e.type &&
            (i = e.renderFraction
              ? e.renderFraction.call(t, e.currentClass, e.totalClass)
              : '<span class="'.concat(e.currentClass, '"></span>') +
                " / " +
                '<span class="'.concat(e.totalClass, '"></span>')),
            "progressbar" === e.type &&
              (i = e.renderProgressbar
                ? e.renderProgressbar.call(t, e.progressbarFillClass)
                : '<span class="'.concat(e.progressbarFillClass, '"></span>')),
            (t.pagination.bullets = []),
            r.forEach((n) => {
              "custom" !== e.type && (n.innerHTML = i || ""),
                "bullets" === e.type &&
                  t.pagination.bullets.push(...n.querySelectorAll(Vi(e.bulletClass)));
            }),
            "custom" !== e.type && a("paginationRender", r[0]);
        }
        function p() {
          t.params.pagination = Bi(t, t.originalParams.pagination, t.params.pagination, {
            el: "swiper-pagination",
          });
          const e = t.params.pagination;
          if (!e.el) return;
          let n;
          "string" === typeof e.el && t.isElement && (n = t.el.querySelector(e.el)),
            n || "string" !== typeof e.el || (n = [...document.querySelectorAll(e.el)]),
            n || (n = e.el),
            n &&
              0 !== n.length &&
              (t.params.uniqueNavElements &&
                "string" === typeof e.el &&
                Array.isArray(n) &&
                n.length > 1 &&
                ((n = [...t.el.querySelectorAll(e.el)]),
                n.length > 1 && (n = n.find((e) => Aa(e, ".swiper")[0] === t.el))),
              Array.isArray(n) && 1 === n.length && (n = n[0]),
              Object.assign(t.pagination, { el: n }),
              (n = Ra(n)),
              n.forEach((n) => {
                "bullets" === e.type &&
                  e.clickable &&
                  n.classList.add(...(e.clickableClass || "").split(" ")),
                  n.classList.add(e.modifierClass + e.type),
                  n.classList.add(t.isHorizontal() ? e.horizontalClass : e.verticalClass),
                  "bullets" === e.type &&
                    e.dynamicBullets &&
                    (n.classList.add("".concat(e.modifierClass).concat(e.type, "-dynamic")),
                    (l = 0),
                    e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)),
                  "progressbar" === e.type &&
                    e.progressbarOpposite &&
                    n.classList.add(e.progressbarOppositeClass),
                  e.clickable && n.addEventListener("click", u),
                  t.enabled || n.classList.add(e.lockClass);
              }));
        }
        function m() {
          const e = t.params.pagination;
          if (s()) return;
          let n = t.pagination.el;
          n &&
            ((n = Ra(n)),
            n.forEach((n) => {
              n.classList.remove(e.hiddenClass),
                n.classList.remove(e.modifierClass + e.type),
                n.classList.remove(t.isHorizontal() ? e.horizontalClass : e.verticalClass),
                e.clickable &&
                  (n.classList.remove(...(e.clickableClass || "").split(" ")),
                  n.removeEventListener("click", u));
            })),
            t.pagination.bullets &&
              t.pagination.bullets.forEach((t) =>
                t.classList.remove(...e.bulletActiveClass.split(" "))
              );
        }
        r("changeDirection", () => {
          if (!t.pagination || !t.pagination.el) return;
          const e = t.params.pagination;
          let { el: n } = t.pagination;
          (n = Ra(n)),
            n.forEach((n) => {
              n.classList.remove(e.horizontalClass, e.verticalClass),
                n.classList.add(t.isHorizontal() ? e.horizontalClass : e.verticalClass);
            });
        }),
          r("init", () => {
            !1 === t.params.pagination.enabled ? h() : (p(), f(), d());
          }),
          r("activeIndexChange", () => {
            "undefined" === typeof t.snapIndex && d();
          }),
          r("snapIndexChange", () => {
            d();
          }),
          r("snapGridLengthChange", () => {
            f(), d();
          }),
          r("destroy", () => {
            m();
          }),
          r("enable disable", () => {
            let { el: e } = t.pagination;
            e &&
              ((e = Ra(e)),
              e.forEach((e) =>
                e.classList[t.enabled ? "remove" : "add"](t.params.pagination.lockClass)
              ));
          }),
          r("lock unlock", () => {
            d();
          }),
          r("click", (e, n) => {
            const r = n.target,
              i = Ra(t.pagination.el);
            if (
              t.params.pagination.el &&
              t.params.pagination.hideOnClick &&
              i &&
              i.length > 0 &&
              !r.classList.contains(t.params.pagination.bulletClass)
            ) {
              if (
                t.navigation &&
                ((t.navigation.nextEl && r === t.navigation.nextEl) ||
                  (t.navigation.prevEl && r === t.navigation.prevEl))
              )
                return;
              const e = i[0].classList.contains(t.params.pagination.hiddenClass);
              a(!0 === e ? "paginationShow" : "paginationHide"),
                i.forEach((e) => e.classList.toggle(t.params.pagination.hiddenClass));
            }
          });
        const h = () => {
          t.el.classList.add(t.params.pagination.paginationDisabledClass);
          let { el: e } = t.pagination;
          e &&
            ((e = Ra(e)),
            e.forEach((e) => e.classList.add(t.params.pagination.paginationDisabledClass))),
            m();
        };
        Object.assign(t.pagination, {
          enable: () => {
            t.el.classList.remove(t.params.pagination.paginationDisabledClass);
            let { el: e } = t.pagination;
            e &&
              ((e = Ra(e)),
              e.forEach((e) => e.classList.remove(t.params.pagination.paginationDisabledClass))),
              p(),
              f(),
              d();
          },
          disable: h,
          render: f,
          update: d,
          init: p,
          destroy: m,
        });
      }
      function Gi(e) {
        let t,
          n,
          { swiper: r, extendParams: a, on: i, emit: o, params: l } = e;
        (r.autoplay = { running: !1, paused: !1, timeLeft: 0 }),
          a({
            autoplay: {
              enabled: !1,
              delay: 3e3,
              waitForTransition: !0,
              disableOnInteraction: !1,
              stopOnLastSlide: !1,
              reverseDirection: !1,
              pauseOnMouseEnter: !1,
            },
          });
        let s,
          c,
          u,
          d,
          f,
          p,
          m,
          h,
          v = l && l.autoplay ? l.autoplay.delay : 3e3,
          g = l && l.autoplay ? l.autoplay.delay : 3e3,
          b = new Date().getTime();
        function y(e) {
          r &&
            !r.destroyed &&
            r.wrapperEl &&
            e.target === r.wrapperEl &&
            (r.wrapperEl.removeEventListener("transitionend", y),
            h || (e.detail && e.detail.bySwiperTouchMove) || C());
        }
        const w = () => {
            if (r.destroyed || !r.autoplay.running) return;
            r.autoplay.paused ? (c = !0) : c && ((g = s), (c = !1));
            const e = r.autoplay.paused ? s : b + g - new Date().getTime();
            (r.autoplay.timeLeft = e),
              o("autoplayTimeLeft", e, e / v),
              (n = requestAnimationFrame(() => {
                w();
              }));
          },
          x = (e) => {
            if (r.destroyed || !r.autoplay.running) return;
            cancelAnimationFrame(n), w();
            let a = "undefined" === typeof e ? r.params.autoplay.delay : e;
            (v = r.params.autoplay.delay), (g = r.params.autoplay.delay);
            const i = (() => {
              let e;
              if (
                ((e =
                  r.virtual && r.params.virtual.enabled
                    ? r.slides.find((e) => e.classList.contains("swiper-slide-active"))
                    : r.slides[r.activeIndex]),
                !e)
              )
                return;
              return parseInt(e.getAttribute("data-swiper-autoplay"), 10);
            })();
            !Number.isNaN(i) && i > 0 && "undefined" === typeof e && ((a = i), (v = i), (g = i)),
              (s = a);
            const l = r.params.speed,
              c = () => {
                r &&
                  !r.destroyed &&
                  (r.params.autoplay.reverseDirection
                    ? !r.isBeginning || r.params.loop || r.params.rewind
                      ? (r.slidePrev(l, !0, !0), o("autoplay"))
                      : r.params.autoplay.stopOnLastSlide ||
                        (r.slideTo(r.slides.length - 1, l, !0, !0), o("autoplay"))
                    : !r.isEnd || r.params.loop || r.params.rewind
                    ? (r.slideNext(l, !0, !0), o("autoplay"))
                    : r.params.autoplay.stopOnLastSlide || (r.slideTo(0, l, !0, !0), o("autoplay")),
                  r.params.cssMode &&
                    ((b = new Date().getTime()),
                    requestAnimationFrame(() => {
                      x();
                    })));
              };
            return (
              a > 0
                ? (clearTimeout(t),
                  (t = setTimeout(() => {
                    c();
                  }, a)))
                : requestAnimationFrame(() => {
                    c();
                  }),
              a
            );
          },
          S = () => {
            (b = new Date().getTime()), (r.autoplay.running = !0), x(), o("autoplayStart");
          },
          k = () => {
            (r.autoplay.running = !1), clearTimeout(t), cancelAnimationFrame(n), o("autoplayStop");
          },
          E = (e, n) => {
            if (r.destroyed || !r.autoplay.running) return;
            clearTimeout(t), e || (m = !0);
            const a = () => {
              o("autoplayPause"),
                r.params.autoplay.waitForTransition
                  ? r.wrapperEl.addEventListener("transitionend", y)
                  : C();
            };
            if (((r.autoplay.paused = !0), n))
              return p && (s = r.params.autoplay.delay), (p = !1), void a();
            const i = s || r.params.autoplay.delay;
            (s = i - (new Date().getTime() - b)),
              (r.isEnd && s < 0 && !r.params.loop) || (s < 0 && (s = 0), a());
          },
          C = () => {
            (r.isEnd && s < 0 && !r.params.loop) ||
              r.destroyed ||
              !r.autoplay.running ||
              ((b = new Date().getTime()),
              m ? ((m = !1), x(s)) : x(),
              (r.autoplay.paused = !1),
              o("autoplayResume"));
          },
          T = () => {
            if (r.destroyed || !r.autoplay.running) return;
            const e = ya();
            "hidden" === e.visibilityState && ((m = !0), E(!0)),
              "visible" === e.visibilityState && C();
          },
          P = (e) => {
            "mouse" === e.pointerType &&
              ((m = !0), (h = !0), r.animating || r.autoplay.paused || E(!0));
          },
          N = (e) => {
            "mouse" === e.pointerType && ((h = !1), r.autoplay.paused && C());
          };
        i("init", () => {
          r.params.autoplay.enabled &&
            (r.params.autoplay.pauseOnMouseEnter &&
              (r.el.addEventListener("pointerenter", P), r.el.addEventListener("pointerleave", N)),
            ya().addEventListener("visibilitychange", T),
            S());
        }),
          i("destroy", () => {
            r.el &&
              "string" !== typeof r.el &&
              (r.el.removeEventListener("pointerenter", P),
              r.el.removeEventListener("pointerleave", N)),
              ya().removeEventListener("visibilitychange", T),
              r.autoplay.running && k();
          }),
          i("_freeModeStaticRelease", () => {
            (d || m) && C();
          }),
          i("_freeModeNoMomentumRelease", () => {
            r.params.autoplay.disableOnInteraction ? k() : E(!0, !0);
          }),
          i("beforeTransitionStart", (e, t, n) => {
            !r.destroyed &&
              r.autoplay.running &&
              (n || !r.params.autoplay.disableOnInteraction ? E(!0, !0) : k());
          }),
          i("sliderFirstMove", () => {
            !r.destroyed &&
              r.autoplay.running &&
              (r.params.autoplay.disableOnInteraction
                ? k()
                : ((u = !0),
                  (d = !1),
                  (m = !1),
                  (f = setTimeout(() => {
                    (m = !0), (d = !0), E(!0);
                  }, 200))));
          }),
          i("touchEnd", () => {
            if (!r.destroyed && r.autoplay.running && u) {
              if ((clearTimeout(f), clearTimeout(t), r.params.autoplay.disableOnInteraction))
                return (d = !1), void (u = !1);
              d && r.params.cssMode && C(), (d = !1), (u = !1);
            }
          }),
          i("slideChange", () => {
            !r.destroyed && r.autoplay.running && (p = !0);
          }),
          Object.assign(r.autoplay, { start: S, stop: k, pause: E, resume: C });
      }
      function Ui(e, t) {
        const n = Oa(t);
        return (
          n !== t &&
            ((n.style.backfaceVisibility = "hidden"),
            (n.style["-webkit-backface-visibility"] = "hidden")),
          n
        );
      }
      function $i(e) {
        let { swiper: t, duration: n, transformElements: r, allSlides: a } = e;
        const { activeIndex: i } = t;
        if (t.params.virtualTranslate && 0 !== n) {
          let e,
            n = !1;
          (e = a
            ? r
            : r.filter((e) => {
                const n = e.classList.contains("swiper-slide-transform")
                  ? ((e) => {
                      if (!e.parentElement)
                        return t.slides.find((t) => t.shadowRoot && t.shadowRoot === e.parentNode);
                      return e.parentElement;
                    })(e)
                  : e;
                return t.getSlideIndex(n) === i;
              })),
            e.forEach((e) => {
              !(function (e, t) {
                t &&
                  e.addEventListener("transitionend", function n(r) {
                    r.target === e && (t.call(e, r), e.removeEventListener("transitionend", n));
                  });
              })(e, () => {
                if (n) return;
                if (!t || t.destroyed) return;
                (n = !0), (t.animating = !1);
                const e = new window.CustomEvent("transitionend", { bubbles: !0, cancelable: !0 });
                t.wrapperEl.dispatchEvent(e);
              });
            });
        }
      }
      function Yi(e) {
        let { swiper: t, extendParams: n, on: r } = e;
        n({ fadeEffect: { crossFade: !1 } });
        !(function (e) {
          const {
            effect: t,
            swiper: n,
            on: r,
            setTranslate: a,
            setTransition: i,
            overwriteParams: o,
            perspective: l,
            recreateShadows: s,
            getEffectParams: c,
          } = e;
          let u;
          r("beforeInit", () => {
            if (n.params.effect !== t) return;
            n.classNames.push("".concat(n.params.containerModifierClass).concat(t)),
              l && l() && n.classNames.push("".concat(n.params.containerModifierClass, "3d"));
            const e = o ? o() : {};
            Object.assign(n.params, e), Object.assign(n.originalParams, e);
          }),
            r("setTranslate", () => {
              n.params.effect === t && a();
            }),
            r("setTransition", (e, r) => {
              n.params.effect === t && i(r);
            }),
            r("transitionEnd", () => {
              if (n.params.effect === t && s) {
                if (!c || !c().slideShadows) return;
                n.slides.forEach((e) => {
                  e.querySelectorAll(
                    ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
                  ).forEach((e) => e.remove());
                }),
                  s();
              }
            }),
            r("virtualUpdate", () => {
              n.params.effect === t &&
                (n.slides.length || (u = !0),
                requestAnimationFrame(() => {
                  u && n.slides && n.slides.length && (a(), (u = !1));
                }));
            });
        })({
          effect: "fade",
          swiper: t,
          on: r,
          setTranslate: () => {
            const { slides: e } = t;
            t.params.fadeEffect;
            for (let n = 0; n < e.length; n += 1) {
              const e = t.slides[n];
              let r = -e.swiperSlideOffset;
              t.params.virtualTranslate || (r -= t.translate);
              let a = 0;
              t.isHorizontal() || ((a = r), (r = 0));
              const i = t.params.fadeEffect.crossFade
                  ? Math.max(1 - Math.abs(e.progress), 0)
                  : 1 + Math.min(Math.max(e.progress, -1), 0),
                o = Ui(0, e);
              (o.style.opacity = i),
                (o.style.transform = "translate3d(".concat(r, "px, ").concat(a, "px, 0px)"));
            }
          },
          setTransition: (e) => {
            const n = t.slides.map((e) => Oa(e));
            n.forEach((t) => {
              t.style.transitionDuration = "".concat(e, "ms");
            }),
              $i({ swiper: t, duration: e, transformElements: n, allSlides: !0 });
          },
          overwriteParams: () => ({
            slidesPerView: 1,
            slidesPerGroup: 1,
            watchSlidesProgress: !0,
            spaceBetween: 0,
            virtualTranslate: !t.params.cssMode,
          }),
        });
      }
      Di.displayName = "SwiperSlide";
      const qi = n.p + "static/media/omelettes.3ac35747a8616bfec1fb.jpg",
        Qi = n.p + "static/media/veggies.e6f24e79718faacc2421.jpg",
        Xi = n.p + "static/media/waffles.a080ebdf6fae1226d6d7.jpg",
        Ki = [
          { id: 1, image: qi, caption: "Omelette" },
          { id: 2, image: Qi, caption: "Veggies" },
          { id: 3, image: Xi, caption: "Waffles" },
        ],
        Ji = () =>
          (0, ma.jsx)("div", {
            className: "swiper-container",
            children: (0, ma.jsxs)(Fi, {
              modules: [Yi, Wi, Hi, Gi],
              effect: "fade",
              slidesPerView: 1,
              spaceBetween: 10,
              loop: !0,
              grabCursor: !0,
              centeredSlides: !0,
              autoplay: { delay: 4500, disableOnInteraction: !1 },
              pagination: { el: ".swiper-pagination", clickable: !0, dynamicBullets: !0 },
              navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
                clickable: !0,
              },
              className: "swiper_container",
              children: [
                Ki.map((e) =>
                  (0, ma.jsx)(
                    Di,
                    { children: (0, ma.jsx)("img", { src: e.image, className: "swiper-img" }) },
                    e.id
                  )
                ),
                (0, ma.jsxs)("div", {
                  className: "slider-controller",
                  children: [
                    (0, ma.jsx)("div", {
                      className: "swiper-button-prev slider-arrow",
                      children: (0, ma.jsx)("ion-icon", { name: "arrow-back-outline" }),
                    }),
                    (0, ma.jsx)("div", {
                      className: "swiper-button-next slider-arrow",
                      children: (0, ma.jsx)("ion-icon", { name: "arrow-forward-outline" }),
                    }),
                    (0, ma.jsx)("div", { className: "swiper-pagination" }),
                  ],
                }),
              ],
            }),
          }),
        Zi = () => (
          (0, t.useEffect)(() => {
            const e = () => {
              const e = window.scrollY,
                t = "50% ".concat(-e / 2, "px");
              document.querySelector(".page-container").style.backgroundPosition = t;
            };
            if (!(window.innerWidth <= 600))
              return (
                window.addEventListener("scroll", e),
                () => {
                  window.removeEventListener("scroll", e);
                }
              );
          }, []),
          null
        ),
        eo = () =>
          (0, ma.jsx)("div", {
            className: "page-container",
            children: (0, ma.jsxs)("div", {
              className: "home-page",
              children: [
                (0, ma.jsx)("div", { className: "home-gallery", children: (0, ma.jsx)(Ji, {}) }),
                (0, ma.jsxs)("div", {
                  className: "home-main",
                  children: [
                    (0, ma.jsxs)("div", {
                      className: "home-header",
                      children: [
                        (0, ma.jsx)("h1", {
                          className: "home-title",
                          children: "Side Street Cafe",
                        }),
                        (0, ma.jsx)("h2", {
                          className: "home-subtitle",
                          children: "Where the Locals Eat!",
                        }),
                      ],
                    }),
                    (0, ma.jsxs)("div", {
                      className: "home-info",
                      children: [
                        (0, ma.jsx)("p", {
                          className: "home-bio",
                          children:
                            "Nestled in the heart of Newbury Park, CA, Side Street Caf\xe9 is your go-to destination for a delightful breakfast or lunch experience. Whether you're craving our signature pancakes or a fresh, gourmet sandwich, our cozy ambiance and friendly staff make every meal special. Come savor the flavors in an environment that feels like home!",
                        }),
                        (0, ma.jsx)("br", {}),
                        (0, ma.jsxs)("div", {
                          className: "home-schedule",
                          children: [
                            (0, ma.jsx)("p", {
                              className: "bold",
                              children: "We are open 7 days a week:",
                            }),
                            (0, ma.jsx)("p", { children: "Mon - Fri from 6:30am - 2:00pm" }),
                            (0, ma.jsx)("p", { children: "Sat - Sun from 7:00am - 2:00pm" }),
                            (0, ma.jsx)("p", { className: "bold", children: "Join us!" }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
        to = [
          {
            id: 1,
            title: "2 Egg Classics and Scramblers",
            info: "All Egg Breakfasts Served with Two Eggs, Home Fries, and Toast OR Biscuits 'n' Gravy. (Substitute croissant or bagel +$1.50) (Gluten-free toast +$2.25)",
            image: qi,
            items: [
              { name: "Just Eggs (2 Eggs)", price: "11.99", description: "" },
              { name: "Applewood Smoked Bacon (4 Strips)", price: "15.99", description: "" },
              { name: "Ham (6 oz.)", price: "15.99", description: "" },
              { name: "Patty Sausage (2 Patties)", price: "15.99", description: "" },
              { name: "Turkey Sausage Links (4 Links)", price: "15.99", description: "" },
              { name: "Cajun Hot Links", price: "15.99", description: "" },
              { name: "Hamburger Patty (8oz.)", price: "13.99", description: "" },
              { name: "Chicken Fried Steak", price: "16.99", description: "" },
              { name: "Carne Asada", price: "17.99", description: "" },
              {
                name: "Side Street Scrambler",
                price: "14.99",
                description: "Chorizo, Spinach and Mushrooms",
              },
              {
                name: "Veggie Scrambler",
                price: "14.99",
                description:
                  "Mushrooms, Tomato, Bell Peppers, Onion, Avocado topped with Cheddar Cheese",
              },
              { name: "Chorizo Scrambler", price: "16.99", description: "" },
              { name: "Minced Ham Scrambler", price: "15.99", description: "" },
              { name: "Minced Hot Link Scrambler", price: "12.99", description: "" },
              {
                name: "Abc Scrambler",
                price: "15.99",
                description: "with Tomato, Grilled Onions and American Cheese",
              },
            ],
          },
          {
            id: 2,
            title: "Eggs Benedict",
            info: "On an English Muffin, topped with Hollandaise, served with Home Fries",
            image: qi,
            items: [
              {
                name: "Traditional (Ham)",
                price: "17.99",
                description:
                  "On an English Muffin, topped with Hollandaise, served with Home Fries",
              },
              {
                name: "Veggie",
                price: "19.99",
                description: "Tomato, Saut\xe9ed Mushrooms, Spinach and Avocado",
              },
              { name: "Club", price: "19.99", description: "Turkey, Bacon and Tomato" },
              { name: "Turkey Avocado", price: "19.99", description: "" },
              { name: "Crab Cake", price: "20.99", description: "(Add Avocado +$2.95)" },
              {
                name: "Corned Beef Hash",
                price: "20.99",
                description: "Corned Beef Hash, Mushrooms, Onion and Parsley",
              },
              {
                name: "Country Benedict",
                price: "20.99",
                description:
                  "Fresh Baked Biscuits w/Boneless Chicken Thighs, Poached Eggs and Hollandaise",
              },
              { name: "Chorizo Benedict", price: "19.99", description: "" },
              {
                name: "Biker Benedict",
                price: "19.99",
                description: "Poached Eggs, Sausage Pattie on top of Biscuit Covered in Gravy",
              },
            ],
          },
          {
            id: 3,
            title: "Omelettes",
            info: "Made with Three Eggs, Served with Toast OR Biscuits \u2018n\u201b Gravy AND Home Fries (substitute croissant or bagel +$1.50), (Gluten-free toast +$2.25). Watching your cholesterol? All omelettes can be made with no yolks! (Egg Beaters +$3.00)",
            image: qi,
            items: [
              {
                name: "Side Street Special",
                price: "17.99",
                description: "Tri Tip, Jack Cheese, Ortega Chilies, Onions, Avocado and Salsa",
              },
              {
                name: "California Dreamer",
                price: "17.99",
                description: "Bacon, Tomato, Guacamole, Cheddar and Jack Cheeses",
              },
              {
                name: "Cobb",
                price: "17.99",
                description:
                  "Chicken, Bacon, Green Onions, topped with Avocado, Tomato and Bleu Cheese",
              },
              {
                name: "Vegetarian",
                price: "15.99",
                description: "Mushroom. Tomato, Avocado, Onions, Bell Pepper and Cheddar Cheese",
              },
              { name: "Spinach, Mushroom and Jack Cheese", price: "16.99", description: "" },
              {
                name: "Spanish",
                price: "15.99",
                description: "Avocado, Ortega Chilies, Salsa and Cheddar Cheese",
              },
              {
                name: "Denver",
                price: "16.99",
                description: "Ham, Bell Pepper, Onion and Cheddar Cheese",
              },
              { name: "A.B.C.", price: "17.99", description: "Avocado, Bacon and Cheddar Cheese" },
              {
                name: "San Francisco",
                price: "17.99",
                description: "Bacon and Pepper Jack, topped with Salsa, Avocado and Sour Cream",
              },
              {
                name: "Chili Verde",
                price: "17.99",
                description:
                  "Pork, onion, topped w cilantro, pepperjack, sour cream and tomatillo sauce",
              },
            ],
          },
          {
            id: 4,
            title: "South of the Border",
            info: "",
            image: qi,
            items: [
              {
                name: "Erik's Omelette",
                price: "19.99",
                description:
                  "Carne Asada, Cilantro and Onions, topped with Avocado, Sour Cream and Pepper Jack",
              },
              {
                name: "Breakfast Burrito",
                price: "14.99",
                description:
                  "Scrambled Eggs, Choice of Bacon or Sausage, Cheddar Cheese, Onions, Ortega Chilies and Tomato. Flour Tortilla topped with sour cream on side. Served with Home Fries.",
              },
              {
                name: "Huevos Rancheros",
                price: "18.99",
                description:
                  "Open-faced Flour Tortilla, with Refried Beans, Salsa, 2 Eggs, Jack and Cheddar Cheese, topped with Tomatoes, Sour Cream Green Onions and Guacamole. Served with Home Fries.",
              },
            ],
          },
          {
            id: 5,
            title: "Fan Favorites",
            info: "",
            image: qi,
            items: [
              {
                name: "Breakfast Club Sandwich",
                price: "13.99",
                description:
                  "Scrambled Eggs with Bacon and Cheddar Cheese on a large English Muffin. Served with Home Fries.",
              },
              {
                name: "Corned Beef Hash",
                price: "15.99",
                description:
                  "Homemade! With Saut\xe9ed Mushrooms, Onions Parsley, Sliced Tomatoes and 2 Eggs Any Style. Choice of Toast or Biscuits \u2018n\u201b Gravy.",
              },
              {
                name: "The Whiplash Sandwich",
                price: "14.99",
                description:
                  "Fried Eggs with Bacon, Sausage and Cheddar Cheese on a choice of bread. Served with Home Fries.",
              },
            ],
          },
          {
            id: 6,
            title: "Waffles",
            info: "Made From Scratch, Belgian Style, Lightly Dusted With Powdered Sugar and Cinnamon. Combos Served With 2 Eggs & Bacon or Sausage.",
            image: Xi,
            items: [
              { name: "Waffle (Plain)", price: "12.99", description: "" },
              { name: "Pecan Waffle", price: "13.99", description: "" },
              { name: "Bacon Waffle", price: "13.99", description: "" },
              { name: "Strawberry Waffle", price: "13.99", description: "with Whipped Cream" },
              { name: "Banana Nut Waffle", price: "13.99", description: "" },
              { name: "Waffle Combo", price: "16.99", description: "" },
              { name: "Pecan Waffle Combo", price: "18.99", description: "" },
              { name: "Bacon Waffle Combo", price: "18.99", description: "" },
              { name: "Strawberry Waffle Combo", price: "18.99", description: "" },
              { name: "Banana Nut Waffle Combo", price: "18.99", description: "" },
              { name: "Chicken & Waffles", price: "15.99", description: "" },
            ],
          },
          {
            id: 7,
            title: "Pancakes",
            info: "",
            image: Xi,
            items: [
              { name: "Buttermilk Pancakes (2 Large)", price: "11.99", description: "" },
              { name: "Blueberry Pancakes", price: "12.99", description: "with Whipped Cream" },
              { name: "Strawberry Pancakes", price: "12.99", description: "with Whipped Cream" },
              { name: "Banana Nut Pancakes", price: "12.99", description: "" },
              { name: "7-Grain Almond Granola Pancakes (2)", price: "11.99", description: "" },
              { name: "Chocolate Chip Pancakes (2)", price: "12.99", description: "" },
              { name: "Short Stack (3)", price: "8.99", description: "" },
              { name: "French Toast", price: "12.99", description: "" },
              {
                name: "Pancake Combo",
                price: "15.99",
                description: "served with 2 Eggs and Bacon or Sausage",
              },
              {
                name: "French Toast Combo",
                price: "16.99",
                description: "served with 2 Eggs and Bacon or Sausage",
              },
            ],
          },
          {
            id: 8,
            title: "Not So Hungry",
            info: "",
            image: qi,
            items: [
              { name: "Croissant", price: "5.99", description: "w/ Butter and Jelly" },
              { name: "Bagel & Cream Cheese", price: "5.99", description: "" },
              {
                name: "Oatmeal",
                price: "9.99",
                description: "Served w/ Raisins, Brown Sugar, Milk and choice of toast",
              },
              { name: "Fruit Bowl", price: "7.99", description: "" },
              { name: "Greek Yogurt & Fruit", price: "10.99", description: "" },
              { name: "Greek Yogurt & Fruit & Granola", price: "11.99", description: "" },
              {
                name: "Sunrise Parfait",
                price: "13.99",
                description: "Low-fat Yogurt with Fresh Fruit and Granola",
              },
            ],
          },
          {
            id: 9,
            title: "Side Orders",
            info: "",
            image: qi,
            items: [
              { name: "Applewood Smoked Bacon (4 Strips)", price: "7.99", description: "" },
              { name: "Turkey Sausage (4 Links)", price: "7.99", description: "" },
              { name: "Sausage Patty (2 Patties)", price: "7.99", description: "" },
              { name: "Ham", price: "8.99", description: "" },
              { name: "1 Egg", price: "3.75", description: "" },
              { name: "Tortilla", price: "2.00", description: "" },
              { name: "Toast", price: "2.95", description: "" },
              { name: "Garlic Toast", price: "2.50", description: "" },
              { name: "English Muffin", price: "2.75", description: "" },
              { name: "Biscuit", price: "3.25", description: "" },
              { name: "Croissant", price: "4.25", description: "" },
              { name: "Bagel", price: "4.25", description: "" },
              { name: "Side One Open Biscuit Topped W Gravy", price: "6.99", description: "" },
              { name: "Gravy", price: "3.00", description: "" },
              { name: "Whipped Cream", price: "1.50", description: "" },
              { name: "Hollandaise Sauce", price: "3.25", description: "" },
              { name: "Cream Cheese", price: "1.50", description: "" },
              { name: "Cottage Cheese", price: "3.25", description: "" },
              { name: "Sour Cream", price: "1.50", description: "" },
              { name: "1/2 Avocado or Guacamole", price: "2.95", description: "" },
              { name: "Potato Salad or Cole Slaw", price: "4.25", description: "" },
              { name: "Onion Rings", price: "8.99", description: "" },
              { name: "Home Fries", price: "3.50", description: "" },
              { name: "French Fries", price: "5.99", description: "" },
              { name: "Sweet Potato Fries", price: "8.99", description: "" },
              { name: "Serrano Chilies", price: "1.95", description: "" },
              { name: "Side of Corned Beef Hash", price: "9.99", description: "" },
              { name: "Side of Chicken Breast", price: "6.99", description: "" },
            ],
          },
        ],
        no = [
          {
            id: 1,
            title: "Sandwiches",
            info: "Most of our sandwiches are served on White, Wheat, Rye, Sourdough or 7-Grain Bread (Gluten-free bread +$2.25). Sub a Croissant or French Roll, or add Cheese +$1.50. All include your choice of French Fries, Cole Slaw, Potato Salad, Soup or Mixed Green Salad (Onion Rings or Sweet Potato Fries +$1.50). WE USE ABF FRESH CHICKEN BREASTS.",
            image: qi,
            items: [
              {
                name: "Side Street Club",
                price: "15.99",
                description:
                  "Turkey, Ham, Bacon, Swiss and American Cheese, Lettuce, Tomato and Mayo",
              },
              {
                name: "Triple Decker Club",
                price: "15.99",
                description: "Turkey, Ham, Bacon, Lettuce, Tomato and Mayo on Toasted Wheat Bread",
              },
              {
                name: "Grilled Chicken Club",
                price: "15.99",
                description:
                  "Chicken Breast, Bacon, Tomato, Avocado, Lettuce and Swiss Cheese on Grilled Wheat",
              },
              {
                name: "Reuben",
                price: "14.99",
                description:
                  "Corned Beef or Turkey on Grilled Rye with Swiss Cheese and Sauerkraut",
              },
              { name: "Turkey Sandwich", price: "11.99", description: "" },
              { name: "Ham Sandwich", price: "11.99", description: "" },
              { name: "Roast Beef or Corned Beef", price: "12.99", description: "" },
              { name: "Chicken Salad Sandwich", price: "12.99", description: "" },
              {
                name: "Malibu Chicken Sandwich",
                price: "16.99",
                description: "Chicken, Ham, Swiss, Avocado, Lettuce and Tomato",
              },
              {
                name: "Bacon, Lettuce and Tomato",
                price: "13.99",
                description: "(add Avocado +$2.95)",
              },
              {
                name: "Veggie Sandwich",
                price: "14.99",
                description: "Lettuce, Sprouts, Avocado, Cucumber, Swiss Cheese and Tomato",
              },
              {
                name: "Healthy Roll-Ups",
                price: "16.99",
                description:
                  "Choice of Turkey, Chicken Salad, Tuna Salad, Roast Beef with Swiss Cheese, Avocado, Sprouts, Lettuce and Tomatoes Rolled in Whole Wheat Wrap with Brown Mustard and Mayo",
              },
              {
                name: "Albacore Tuna Sandwich",
                price: "14.99",
                description: "with Lettuce, Tomato, Avocado, and Swiss on Grilled Sourdough",
              },
              { name: "Tuna Salad Sandwich", price: "12.99", description: "" },
              {
                name: "Tuna Melt",
                price: "14.99",
                description: "on Grilled Sourdough with Swiss and American Cheese",
              },
              {
                name: "Tuna Avocado Swiss Melt",
                price: "14.99",
                description: "on Grilled Sourdough",
              },
              {
                name: "Suzanne's Lunch",
                price: "14.99",
                description:
                  "Grilled French Garlic Roll stuffed with Turkey, Jack Cheese, Ortega Chilies and Tomato",
              },
              { name: "Grilled Ham and Cheese", price: "10.99", description: "" },
              { name: "Grilled Cheese", price: "11.99", description: "" },
              {
                name: "Turkey Melt",
                price: "15.99",
                description: "Turkey, Bacon, Swiss and Avocado on Grilled Sourdough",
              },
              {
                name: "California Melt",
                price: "14.99",
                description: "Turkey, Avocado, Bacon and Jack Cheese on Grilled Sourdough",
              },
              { name: "Patty Melt", price: "14.99", description: "Beef Patty and Cheese" },
              {
                name: "Beefeater",
                price: "12.99",
                description: "Roast Beef on Grilled Sourdough with Ortega Chilies and Jack Cheese",
              },
              {
                name: "French Dip",
                price: "14.99",
                description: "Roast Beef and Swiss Cheese on French Roll served with Au Jus",
              },
              {
                name: "Tri-Tip Sandwich",
                price: "15.99",
                description: "with Grilled Onions, Lettuce, Tomato, and Avocado on Ciabatta",
              },
              { name: "BBQ Tri-Tip", price: "16.99", description: "on a French Roll" },
              {
                name: "Beef Philly",
                price: "18.99",
                description: "with Onions, Bell Pepper and Jack Cheese",
              },
              {
                name: "Chicken Philly",
                price: "16.99",
                description: "with Onions, Bell Pepper and Jack Cheese",
              },
            ],
          },
          {
            id: 2,
            title: "Hamburgers",
            info: "All burgers are served with your choice of French Fries, Potato Salad, Cole Slaw, Soup, or Mixed Green Salad (Sub Onion Rings or Sweet Potato Fries +$1.00)",
            image: qi,
            items: [
              { name: "Burger", price: "12.99", description: "(with Cheese +$2.50)" },
              { name: "Ortega Jack Burger", price: "14.99", description: "" },
              { name: "Cheddar Avocado Burger", price: "15.99", description: "" },
              {
                name: "Garden Veggie Burger",
                price: "14.99",
                description: "Sprouts, Tomato, Onion and Avocado",
              },
              {
                name: "Patty Melt (on Rye)",
                price: "14.99",
                description: "with American Cheese and Grilled Onion",
              },
              {
                name: "Side Street Burger",
                price: "17.99",
                description:
                  "with Corned Beef, American and Swiss Cheese, Bacon, Avocado, Mushrooms and Grilled Onions",
              },
              {
                name: "Hickory Burger",
                price: "15.99",
                description: "Bacon, Jack Cheese, BBQ Sauce topped with an Onion Ring",
              },
              { name: "California Burger", price: "14.99", description: "Avocado and Sprouts" },
              {
                name: "Sourdough Melt Burger",
                price: "14.99",
                description: "with Tomato, Grilled Onions and American Cheese",
              },
            ],
          },
          {
            id: 3,
            title: "Soups and Salads",
            info: "Served with Garlic Toast and choice of dressing. (Sorry NO SOUP ON THE WEEKENDS)",
            image: qi,
            items: [
              { name: "Soup of the Day", price: "5.99/$6.99", description: "" },
              { name: "Soup and Garden Salad", price: "9.99", description: "" },
              {
                name: "Bowl Soup or Salad and 1/2 Sandwich",
                price: "10.99",
                description: "(Choice of Ham, Turkey, Tuna, Roast Beef or Chicken Salad)",
              },
              { name: "Side Salad", price: "4.99", description: "(Accompanied with Meal - $2.50)" },
              {
                name: "Grilled Chicken Salad",
                price: "16.99",
                description:
                  "Grilled Chicken Breast over Tossed Greens, Red Onion, Cucumber Slices, Tomatoes, Sliced Hard Boiled Egg",
              },
              {
                name: "Chef Salad",
                price: "16.99",
                description:
                  "Ham and Turkey, Red Onion, Cheddar and Jack Cheese, Hard-Boiled Egg, Bacon, Tomatoes on a bed of Fresh Lettuce",
              },
              {
                name: "Chicken Salad or Tuna Salad",
                price: "15.99",
                description:
                  "Generous Scoop of Homemade Tuna/Chicken Salad on Crisp Salad Greens, Red Onion, Tomato, Sliced Hard-Boiled Egg and Cucumber",
              },
              { name: "Caesar Salad", price: "12.99", description: "Add Chicken +$3.00" },
              {
                name: "Spinach Salad",
                price: "13.99",
                description:
                  "Leaf Spinach topped with Crumbled Egg, Bacon, Mushrooms, Tomato. Served with Hot Bacon Dressing",
              },
              {
                name: "Shelly's Chinese Chicken Salad",
                price: "17.99",
                description: "Shredded Chicken Breast served over Tossed Greens, Chopped",
              },
            ],
          },
          {
            id: 4,
            title: "Sides",
            info: "",
            image: qi,
            items: [
              { name: "French Fries", price: "6.99", description: "" },
              { name: "Fresh Fruit", price: "7.99", description: "" },
              { name: "Homemade Potato Salad", price: "4.99", description: "" },
              { name: "Mashed Potatoes", price: "5.99", description: "" },
              { name: "Coleslaw", price: "4.99", description: "" },
              { name: "Onion Rings", price: "8.99", description: "" },
              { name: "Cup of Soup", price: "6.99", description: "" },
              { name: "Cup of Chili", price: "6.99", description: "" },
            ],
          },
        ],
        ro = [
          {
            id: 1,
            title: "Drinks",
            info: "",
            image: qi,
            items: [
              { name: "Coffee", price: "3.95", description: "" },
              { name: "Cold Brew Coffee", price: "5.25", description: "" },
              { name: "Hot Tea", price: "3.75", description: "" },
              { name: "Iced Tea", price: "3.75", description: "" },
              { name: "Tropical Iced Tea", price: "3.00", description: "" },
              { name: "Soda (One Refill)", price: "3.00", description: "" },
              { name: "Lemonade", price: "3.95", description: "" },
              { name: "Milk", price: "3.75/4.25", description: "" },
              { name: "Hot Chocolate", price: "4.25/5.25", description: "" },
              { name: "Chocolate Milk", price: "4.25/5.25", description: "" },
              { name: "Cranberry Juice", price: "4.25/5.25", description: "" },
              { name: "Grapefruit Juice", price: "4.25/5.25", description: "" },
              { name: "Orange Juice (Fresh)", price: "5.99/6.99", description: "" },
              { name: "Apple Juice", price: "4.25/5.25", description: "" },
              { name: "Tomato Juice", price: "4.25/5.25", description: "" },
            ],
          },
        ],
        ao = [
          {
            id: 1,
            title: "",
            info: "",
            image: "",
            items: [
              { name: "Red Velvet Waffle", price: "12.99/ combo $17.99", description: "" },
              {
                name: "Florentine Benedict",
                price: "19.99",
                description: "English muffin, spinach, tomato, ham, poached eggs, and hollandaise.",
              },
              {
                name: "Manny's Sandy",
                price: "16.99",
                description:
                  "Fried eggs, pepper jack, guacamole, tomato, and bacon. Served on a burger bun.",
              },
              {
                name: "Potato Skin Benedict",
                price: "20.99",
                description: "Chopped bacon, green onion, poached eggs, and hollandaise.",
              },
              {
                name: "Spicy Chicken Sandwich",
                price: "14.99",
                description:
                  "Spicy fried chicken, lettuce, tomato, avocado, cheddar cheese, and chipotle mayo.",
              },
              {
                name: "Erik's Salad",
                price: "15.99",
                description:
                  "Chopped crispy chicken, tomato, avocado, cheddar cheese, and your choice of dressing.",
              },
              {
                name: "Mushroom Swiss Burger",
                price: "13.99",
                description: "Grilled mushrooms, swiss cheese, grilled onion, lettuce, and tomato.",
              },
            ],
          },
        ],
        io = () => {
          const e = (0, t.useRef)(null),
            n = (0, t.useRef)(null),
            r = (0, t.useRef)(null),
            a = (0, t.useRef)(null),
            i = (e) => {
              e.current.scrollIntoView({ behavior: "smooth", block: "start" });
            };
          return (0, ma.jsx)("div", {
            className: "page-container",
            children: (0, ma.jsxs)("div", {
              className: "menu-page",
              children: [
                (0, ma.jsx)("div", { className: "menu-gallery", children: (0, ma.jsx)(Ji, {}) }),
                (0, ma.jsxs)("div", {
                  className: "menu-top",
                  ref: e,
                  children: [
                    (0, ma.jsxs)("div", {
                      className: "menu-nav",
                      children: [
                        (0, ma.jsx)("a", { onClick: () => i(n), children: "Breakfast" }),
                        (0, ma.jsx)("a", { onClick: () => i(r), children: "Lunch" }),
                        (0, ma.jsx)("a", { onClick: () => i(a), children: "Drinks" }),
                      ],
                    }),
                    (0, ma.jsxs)("p", {
                      children: [
                        "MAXIMUM OF 3 DIVIDED CHECKS PER TABLE.",
                        (0, ma.jsx)("br", {}),
                        "Kid's Menu Available",
                        (0, ma.jsx)("br", {}),
                        "Take Out? Call (805) 499-9323",
                      ],
                    }),
                    (0, ma.jsx)("p", { className: "tiny-script", children: "(No Online Orders)" }),
                  ],
                }),
                (0, ma.jsxs)("div", {
                  className: "category",
                  ref: n,
                  children: [
                    (0, ma.jsxs)("section", {
                      className: "category-title",
                      children: [
                        (0, ma.jsx)("hr", {}),
                        (0, ma.jsx)("h2", { children: "Breakfast - Served All Day" }),
                        (0, ma.jsx)("hr", {}),
                      ],
                    }),
                    to.map((e) =>
                      (0, ma.jsxs)(
                        "div",
                        {
                          className: "subcategory-container",
                          children: [
                            (0, ma.jsx)("div", {
                              className: "subcategory-image",
                              children: (0, ma.jsx)("img", { src: e.image, load: "lazy" }),
                            }),
                            (0, ma.jsxs)("div", {
                              className: "subcategory-box",
                              children: [
                                (0, ma.jsxs)("div", {
                                  className: "subcategory-title",
                                  children: [
                                    (0, ma.jsx)("h2", { children: e.title }),
                                    (0, ma.jsx)("p", { children: e.info }),
                                  ],
                                }),
                                (0, ma.jsx)("div", {
                                  className: "items-container",
                                  children: e.items.map((e, t) =>
                                    (0, ma.jsxs)(
                                      "div",
                                      {
                                        className: "menu-item",
                                        children: [
                                          (0, ma.jsx)("h3", {
                                            className: "item-name",
                                            children: e.name,
                                          }),
                                          (0, ma.jsx)("p", {
                                            className: "item-info",
                                            children: e.description,
                                          }),
                                          (0, ma.jsxs)("p", {
                                            className: "item-price",
                                            children: ["$", e.price],
                                          }),
                                        ],
                                      },
                                      t
                                    )
                                  ),
                                }),
                              ],
                            }),
                          ],
                        },
                        e.id
                      )
                    ),
                  ],
                }),
                (0, ma.jsxs)("div", {
                  className: "category",
                  ref: r,
                  children: [
                    (0, ma.jsxs)("section", {
                      className: "category-title",
                      children: [
                        (0, ma.jsx)("hr", {}),
                        (0, ma.jsx)("h2", { children: "Let's Do Lunch!" }),
                        (0, ma.jsx)("hr", {}),
                      ],
                    }),
                    no.map((e) =>
                      (0, ma.jsxs)(
                        "div",
                        {
                          className: "subcategory-container",
                          children: [
                            (0, ma.jsx)("div", {
                              className: "subcategory-image",
                              children: (0, ma.jsx)("img", { src: e.image, load: "lazy" }),
                            }),
                            (0, ma.jsxs)("div", {
                              className: "subcategory-box",
                              children: [
                                (0, ma.jsxs)("div", {
                                  className: "subcategory-title",
                                  children: [
                                    (0, ma.jsx)("h2", { children: e.title }),
                                    (0, ma.jsx)("p", { children: e.info }),
                                  ],
                                }),
                                (0, ma.jsx)("div", {
                                  className: "items-container",
                                  children: e.items.map((e, t) =>
                                    (0, ma.jsxs)(
                                      "div",
                                      {
                                        className: "menu-item",
                                        children: [
                                          (0, ma.jsx)("h3", {
                                            className: "item-name",
                                            children: e.name,
                                          }),
                                          (0, ma.jsx)("p", {
                                            className: "item-info",
                                            children: e.description,
                                          }),
                                          (0, ma.jsxs)("p", {
                                            className: "item-price",
                                            children: ["$", e.price],
                                          }),
                                        ],
                                      },
                                      t
                                    )
                                  ),
                                }),
                              ],
                            }),
                          ],
                        },
                        e.id
                      )
                    ),
                  ],
                }),
                (0, ma.jsxs)("div", {
                  className: "category",
                  ref: a,
                  children: [
                    (0, ma.jsxs)("section", {
                      className: "category-title",
                      children: [
                        (0, ma.jsx)("hr", {}),
                        (0, ma.jsx)("h2", { children: "Drinks" }),
                        (0, ma.jsx)("hr", {}),
                      ],
                    }),
                    ro.map((e) =>
                      (0, ma.jsx)(
                        "div",
                        {
                          className: "subcategory-container",
                          children: (0, ma.jsx)("div", {
                            className: "drink-container",
                            children: e.items.map((e, t) =>
                              (0, ma.jsxs)(
                                "div",
                                {
                                  className: "drink",
                                  children: [
                                    (0, ma.jsx)("p", { className: "item-name", children: e.name }),
                                    (0, ma.jsxs)("p", {
                                      className: "item-price",
                                      children: ["$", e.price],
                                    }),
                                  ],
                                },
                                t
                              )
                            ),
                          }),
                        },
                        e.id
                      )
                    ),
                  ],
                }),
                (0, ma.jsx)("div", {
                  className: "menu-bottom",
                  children: (0, ma.jsx)("a", { onClick: () => i(e), children: "Back to the top" }),
                }),
              ],
            }),
          });
        },
        oo = () =>
          (0, ma.jsx)("div", {
            className: "page-container",
            children: (0, ma.jsxs)("div", {
              className: "specials-page",
              children: [
                (0, ma.jsx)("h1", { children: "Specials" }),
                ao.map((e) =>
                  (0, ma.jsx)(
                    "div",
                    {
                      className: "subcategory-container",
                      children: (0, ma.jsxs)("div", {
                        className: "subcategory-box",
                        children: [
                          (0, ma.jsxs)("div", {
                            className: "subcategory-title",
                            children: [
                              (0, ma.jsx)("h2", { children: e.title }),
                              (0, ma.jsx)("p", { children: e.info }),
                            ],
                          }),
                          (0, ma.jsx)("div", {
                            className: "items-container",
                            children: e.items.map((e, t) =>
                              (0, ma.jsxs)(
                                "div",
                                {
                                  className: "menu-item",
                                  children: [
                                    (0, ma.jsx)("h3", { className: "item-name", children: e.name }),
                                    (0, ma.jsx)("p", {
                                      className: "item-info",
                                      children: e.description,
                                    }),
                                    (0, ma.jsxs)("p", {
                                      className: "item-price",
                                      children: ["$", e.price],
                                    }),
                                  ],
                                },
                                t
                              )
                            ),
                          }),
                        ],
                      }),
                    },
                    e.id
                  )
                ),
              ],
            }),
          }),
        lo = () =>
          (0, ma.jsx)("div", {
            className: "page-container",
            children: (0, ma.jsx)("div", {
              className: "reviews-page",
              children: (0, ma.jsxs)("div", {
                className: "reviews-container",
                children: [
                  (0, ma.jsxs)("div", {
                    className: "reviews-title",
                    children: [
                      (0, ma.jsx)("h1", { children: "Interested in leaving a review?" }),
                      (0, ma.jsx)("hr", {}),
                      (0, ma.jsx)("p", { children: "Share your experience!" }),
                    ],
                  }),
                  (0, ma.jsx)("div", {
                    className: "social-container",
                    children: (0, ma.jsxs)("ul", {
                      className: "social-buttons",
                      children: [
                        (0, ma.jsx)("li", {
                          children: (0, ma.jsx)("a", {
                            href: fa.yelp,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: (0, ma.jsx)(ia, {
                              icon: "fa-brands fa-yelp",
                              className: "social-icons yelp",
                            }),
                          }),
                        }),
                        (0, ma.jsx)("li", {
                          children: (0, ma.jsx)("a", {
                            href: fa.google,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: (0, ma.jsx)(ia, {
                              icon: "fa-brands fa-google",
                              className: "social-icons google",
                            }),
                          }),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
          }),
        so = () => (
          Zi(),
          (0, ma.jsx)("div", {
            className: "page-container",
            children: (0, ma.jsx)("div", {
              className: "contact-page",
              children: (0, ma.jsxs)("div", {
                className: "contact-row",
                children: [
                  (0, ma.jsxs)("div", {
                    className: "contact-main",
                    children: [
                      (0, ma.jsx)("h1", { children: "We'd Love to See You Soon!" }),
                      (0, ma.jsx)("p", {
                        className: "address",
                        children: "996 Lawrence Drive #103",
                      }),
                      (0, ma.jsx)("p", { children: "Newbury Park, CA 91320" }),
                      (0, ma.jsx)("p", { children: "Monday - Friday : 6:30am - 2:00pm" }),
                      (0, ma.jsx)("p", { children: "Saturday & Sunday : 7:00am - 2:00pm" }),
                      (0, ma.jsx)("p", { children: "SideStreetCafe805@gmail.com" }),
                      (0, ma.jsx)("p", { children: "(805) 499-9323" }),
                      (0, ma.jsxs)("ul", {
                        className: "social-buttons",
                        children: [
                          (0, ma.jsx)("li", {
                            children: (0, ma.jsx)("a", {
                              href: fa.yelp,
                              target: "_blank",
                              rel: "noopener noreferrer",
                              children: (0, ma.jsx)(ia, {
                                icon: "fa-brands fa-yelp",
                                className: "social-icons yelp",
                              }),
                            }),
                          }),
                          (0, ma.jsx)("li", {
                            children: (0, ma.jsx)("a", {
                              href: fa.google,
                              target: "_blank",
                              rel: "noopener noreferrer",
                              children: (0, ma.jsx)(ia, {
                                icon: "fa-brands fa-google",
                                className: "social-icons google",
                              }),
                            }),
                          }),
                          (0, ma.jsx)("li", {
                            children: (0, ma.jsx)("a", {
                              href: fa.facebook,
                              target: "_blank",
                              rel: "noopener noreferrer",
                              children: (0, ma.jsx)(ia, {
                                icon: "fa-brands fa-facebook-f",
                                className: "social-icons facebook",
                              }),
                            }),
                          }),
                          (0, ma.jsx)("li", {
                            children: (0, ma.jsx)("a", {
                              href: fa.instagram,
                              target: "_blank",
                              rel: "noopener noreferrer",
                              children: (0, ma.jsx)(ia, {
                                icon: "fa-brands fa-instagram",
                                className: "social-icons instagram",
                              }),
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, ma.jsx)("div", {
                    className: "contact-map",
                    children: (0, ma.jsx)("iframe", {
                      src: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13200.752931409592!2d-118.929348!3d34.1926667!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e83097bf7e226f%3A0x74efb6209b14f06a!2sSide%20Street%20Cafe!5e0!3m2!1sen!2sus!4v1718419932583!5m2!1sen!2sus",
                      allowFullScreen: "",
                      loading: "lazy",
                      referrerPolicy: "no-referrer-when-downgrade",
                    }),
                  }),
                ],
              }),
            }),
          })
        ),
        co = () =>
          (0, ma.jsx)("div", {
            className: "footer-container",
            children: (0, ma.jsxs)("div", {
              className: "site-footer",
              children: [
                (0, ma.jsx)("h1", { children: "Side Street Cafe" }),
                (0, ma.jsxs)("div", {
                  className: "footer-top",
                  children: [
                    (0, ma.jsxs)("div", {
                      className: "footer-column col1",
                      children: [
                        (0, ma.jsx)("p", { children: "996 Lawrence Drive #103" }),
                        (0, ma.jsx)("p", { children: "Newbury Park, CA" }),
                        (0, ma.jsx)("p", { children: "(805) 499-9323" }),
                      ],
                    }),
                    (0, ma.jsx)("div", {
                      className: "footer-column col2",
                      children: (0, ma.jsxs)("ul", {
                        className: "footer-navigation",
                        children: [
                          (0, ma.jsx)("li", {
                            children: (0, ma.jsx)(Ee, {
                              to: "/",
                              className: "link",
                              children: "Home",
                            }),
                          }),
                          (0, ma.jsx)("li", {
                            children: (0, ma.jsx)(Ee, {
                              to: "/menu",
                              className: "link",
                              children: "Menu",
                            }),
                          }),
                          (0, ma.jsx)("li", {
                            children: (0, ma.jsx)(Ee, {
                              to: "/specials",
                              className: "link",
                              children: "Specials",
                            }),
                          }),
                          (0, ma.jsx)("li", {
                            children: (0, ma.jsx)(Ee, {
                              to: "/reviews",
                              className: "link",
                              children: "Reviews",
                            }),
                          }),
                          (0, ma.jsx)("li", {
                            children: (0, ma.jsx)(Ee, {
                              to: "/contact",
                              className: "link",
                              children: "Contact",
                            }),
                          }),
                        ],
                      }),
                    }),
                    (0, ma.jsx)("div", {
                      className: "footer-column col3",
                      children: (0, ma.jsxs)("ul", {
                        className: "social-buttons",
                        children: [
                          (0, ma.jsx)("li", {
                            children: (0, ma.jsx)("a", {
                              href: fa.yelp,
                              target: "_blank",
                              rel: "noopener noreferrer",
                              children: (0, ma.jsx)(ia, {
                                icon: "fa-brands fa-yelp",
                                className: "social-icons yelp",
                              }),
                            }),
                          }),
                          (0, ma.jsx)("li", {
                            children: (0, ma.jsx)("a", {
                              href: fa.google,
                              target: "_blank",
                              rel: "noopener noreferrer",
                              children: (0, ma.jsx)(ia, {
                                icon: "fa-brands fa-google",
                                className: "social-icons google",
                              }),
                            }),
                          }),
                          (0, ma.jsx)("li", {
                            children: (0, ma.jsx)("a", {
                              href: fa.facebook,
                              target: "_blank",
                              rel: "noopener noreferrer",
                              children: (0, ma.jsx)(ia, {
                                icon: "fa-brands fa-facebook-f",
                                className: "social-icons facebook",
                              }),
                            }),
                          }),
                          (0, ma.jsx)("li", {
                            children: (0, ma.jsx)("a", {
                              href: fa.instagram,
                              target: "_blank",
                              rel: "noopener noreferrer",
                              children: (0, ma.jsx)(ia, {
                                icon: "fa-brands fa-instagram",
                                className: "social-icons instagram",
                              }),
                            }),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
                (0, ma.jsx)("label", {
                  className: "copyright",
                  children:
                    "\xa9 2025 Side Street Cafe, Newbury Park. All righgts reserved. Website design by Nathan Potter.",
                }),
              ],
            }),
          });
      var uo = n(675),
        fo = n.n(uo);
      const po = function () {
        const [e, n] = (0, t.useState)(!0);
        (0, t.useEffect)(() => {
          setTimeout(() => {
            n(!1);
          }, 3e3);
        }, []);
        const r = [
            "Just flipping your pancakes...",
            "Gathering the ingredients...",
            "Brewing your coffee...",
            "Whipping up a fresh batter...",
            "Whisking up something special...",
            "Making sure everything is sunny-side up...",
          ],
          a = r[Math.floor(Math.random() * r.length)];
        return (0, ma.jsx)(xe, {
          children: (0, ma.jsx)("div", {
            className: "container",
            children: e
              ? (0, ma.jsxs)("div", {
                  className: "spinner-container",
                  children: [
                    (0, ma.jsx)(fo(), { size: 50, color: "#36d7b7", loading: e }),
                    (0, ma.jsx)("p", { className: "loading-message", children: a }),
                  ],
                })
              : (0, ma.jsxs)("div", {
                  className: "app",
                  children: [
                    (0, ma.jsx)(ha, {}),
                    (0, ma.jsxs)(he, {
                      children: [
                        (0, ma.jsx)(pe, { path: "/", exact: !0, element: (0, ma.jsx)(eo, {}) }),
                        (0, ma.jsx)(pe, { path: "/menu", element: (0, ma.jsx)(io, {}) }),
                        (0, ma.jsx)(pe, { path: "/reviews", element: (0, ma.jsx)(lo, {}) }),
                        (0, ma.jsx)(pe, { path: "/specials", element: (0, ma.jsx)(oo, {}) }),
                        (0, ma.jsx)(pe, { path: "/contact", element: (0, ma.jsx)(so, {}) }),
                      ],
                    }),
                    (0, ma.jsx)(co, {}),
                  ],
                }),
          }),
        });
      };
      a.createRoot(document.getElementById("root")).render(
        (0, ma.jsx)(t.StrictMode, { children: (0, ma.jsx)(po, {}) })
      );
    })();
})();
//# sourceMappingURL=main.996f74d7.js.map
