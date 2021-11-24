"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [461],
  {
    17407: function (t, e, n) {
      n.d(e, {
        r: function () {
          return i;
        },
      });
      var r = n(9341);
      function i(t) {
        const [e, n, i] = t.substr(0, 10).split("-");
        return (0, r.Z)(
          new Date(parseInt(e), parseInt(n) - 1, parseInt(i)),
          "MMM d, yyyy"
        );
      }
    },
    21874: function (t) {
      const e = (...t) => console && console.log(...t),
        n = {
          info: e,
          debug: e,
          warn: e,
          error: (...t) => {
            console &&
              (console.error ? console.error(...t) : console.log(...t));
          },
        };
      t.exports = n;
    },
    74992: function (t, e, n) {
      n.d(e, {
        q6: function () {
          return c;
        },
        WE: function () {
          return u;
        },
      });
      var r = n(15861),
        i = n(87757),
        o = n.n(i),
        a = n(82028);
      function c(t, e, n) {
        return s.apply(this, arguments);
      }
      function s() {
        return (s = (0, r.Z)(
          o().mark(function t(e, n, r) {
            var i, c;
            return o().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      (i = {}),
                      r && (i.headers = { Cookie: r.headers.cookie }),
                      (c = n
                        ? "/guides/".concat(e, "/preview")
                        : "/guides/".concat(e)),
                      (t.next = 5),
                      (0, a.R1)(c, i)
                    );
                  case 5:
                    return t.abrupt("return", t.sent);
                  case 6:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
      function u() {
        return l.apply(this, arguments);
      }
      function l() {
        return (l = (0, r.Z)(
          o().mark(function t() {
            return o().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return t.abrupt(
                      "return",
                      (0, a.R1)("/guides/landing-page")
                    );
                  case 1:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
    },
    33257: function (t, e, n) {
      n.d(e, {
        ts: function () {
          return c;
        },
        OS: function () {
          return u;
        },
        BZ: function () {
          return d;
        },
      });
      var r = n(15861),
        i = n(87757),
        o = n.n(i),
        a = n(82028);
      function c(t) {
        return s.apply(this, arguments);
      }
      function s() {
        return (s = (0, r.Z)(
          o().mark(function t(e) {
            var n;
            return o().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      (n = {}),
                      e && (n.headers = { Cookie: e.headers.cookie }),
                      (t.next = 4),
                      (0, a.R1)("/users/current", n)
                    );
                  case 4:
                    return t.abrupt("return", t.sent);
                  case 5:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
      function u(t) {
        return l.apply(this, arguments);
      }
      function l() {
        return (l = (0, r.Z)(
          o().mark(function t(e) {
            var n;
            return o().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      (n = {}),
                      e && (n.headers = { Cookie: e.headers.cookie }),
                      (t.next = 4),
                      (0, a.R1)("/users/prism-data", n)
                    );
                  case 4:
                    return t.abrupt("return", t.sent);
                  case 5:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
      function d(t) {
        return f.apply(this, arguments);
      }
      function f() {
        return (f = (0, r.Z)(
          o().mark(function t(e) {
            var n;
            return o().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      (n = {}),
                      e && (n.headers = { Cookie: e.headers.cookie }),
                      (t.next = 4),
                      (0, a.R1)("/users/feature-flags", n)
                    );
                  case 4:
                    return t.abrupt("return", t.sent);
                  case 5:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
    },
    82028: function (t, e, n) {
      n.d(e, {
        QW: function () {
          return E;
        },
        R1: function () {
          return I;
        },
        sg: function () {
          return b;
        },
        PY: function () {
          return N;
        },
      });
      var r = n(4942),
        i = n(15861),
        o = n(15671),
        a = n(60136),
        c = n(6215),
        s = n(61120),
        u = n(72407),
        l = n(87757),
        d = n.n(l),
        f = n(44586),
        p = n(94301),
        h = n.n(p),
        y = n(66455),
        x = n(43144),
        m = (function () {
          function t(e) {
            (0, o.Z)(this, t),
              (this.success = !0),
              (this.payload = void 0),
              (this.metadata = {}),
              (this.error = void 0),
              Object.assign(this, e);
          }
          return (
            (0, x.Z)(t, [
              {
                key: "map",
                value: function (t) {
                  return this.success ? v(t(this.payload)) : this;
                },
              },
              {
                key: "getPayloadOrDefault",
                value: function (t) {
                  return this.success ? this.payload : t;
                },
              },
            ]),
            t
          );
        })();
      function v(t) {
        var e =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return new m({ success: !0, payload: t, metadata: e });
      }
      function g(t) {
        var e =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return new m({ success: !1, error: t, metadata: e });
      }
      function w(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function j(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? w(Object(n), !0).forEach(function (e) {
                (0, r.Z)(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : w(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      function k(t) {
        var e = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = (0, s.Z)(t);
          if (e) {
            var i = (0, s.Z)(this).constructor;
            n = Reflect.construct(r, arguments, i);
          } else n = r.apply(this, arguments);
          return (0, c.Z)(this, n);
        };
      }
      Error;
      function C() {
        return y.Y.apiEndpointExternal;
      }
      function b(t, e) {
        return L.apply(this, arguments);
      }
      function L() {
        return (L = (0, i.Z)(
          d().mark(function t(e, n) {
            var r, i;
            return d().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      (i = {
                        method: "POST",
                        body: (r = "object" === typeof n)
                          ? JSON.stringify(n)
                          : n,
                      }),
                      r &&
                        (i.headers = new Headers({
                          "Content-Type": "application/json",
                        })),
                      (t.next = 5),
                      Z(e, i)
                    );
                  case 5:
                    return t.abrupt("return", t.sent);
                  case 6:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
      function Z(t) {
        return H.apply(this, arguments);
      }
      function H() {
        return (H = (0, i.Z)(
          d().mark(function t(e) {
            var n,
              r,
              i,
              o = arguments;
            return d().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (n = o.length > 1 && void 0 !== o[1] ? o[1] : {}),
                        (i = C() + e),
                        (t.prev = 2),
                        (t.next = 5),
                        h()(i, j({ credentials: "include" }, n))
                      );
                    case 5:
                      (r = t.sent), (t.next = 11);
                      break;
                    case 8:
                      return (
                        (t.prev = 8),
                        (t.t0 = t.catch(2)),
                        t.abrupt("return", g(t.t0))
                      );
                    case 11:
                      return (t.next = 13), T(r);
                    case 13:
                      return t.abrupt("return", t.sent);
                    case 14:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              null,
              [[2, 8]]
            );
          })
        )).apply(this, arguments);
      }
      var I = Z;
      function T(t) {
        return M.apply(this, arguments);
      }
      function M() {
        return (M = (0, i.Z)(
          d().mark(function t(e) {
            var n;
            return d().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    if (
                      ((n = { statusCode: e.status, headers: e.headers }),
                      200 !== e.status)
                    ) {
                      t.next = 19;
                      break;
                    }
                    if (
                      "application/json" !==
                      e.headers.get("content-type").split(";")[0]
                    ) {
                      t.next = 11;
                      break;
                    }
                    return (t.t0 = v), (t.next = 6), e.json();
                  case 6:
                    return (
                      (t.t1 = t.sent),
                      (t.t2 = n),
                      t.abrupt("return", (0, t.t0)(t.t1, t.t2))
                    );
                  case 11:
                    return (t.t3 = v), (t.next = 14), e.text();
                  case 14:
                    return (
                      (t.t4 = t.sent),
                      (t.t5 = n),
                      t.abrupt("return", (0, t.t3)(t.t4, t.t5))
                    );
                  case 17:
                    t.next = 24;
                    break;
                  case 19:
                    if (204 !== e.status) {
                      t.next = 23;
                      break;
                    }
                    return t.abrupt("return", v(null, n));
                  case 23:
                    return t.abrupt(
                      "return",
                      g(
                        new Error(
                          "Failed to retrieve resource at ".concat(e.url)
                        ),
                        n
                      )
                    );
                  case 24:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
      function N() {
        if (window) {
          var t = window.localStorage.getItem("guestId");
          return (
            t || ((t = (0, f.Z)()), window.localStorage.setItem("guestId", t)),
            t
          );
        }
      }
      function E(t) {
        return O.apply(this, arguments);
      }
      function O() {
        return (O = (0, i.Z)(
          d().mark(function t(e) {
            return d().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (t.next = 2), Z(e, { method: "DELETE" });
                  case 2:
                    return t.abrupt("return", t.sent);
                  case 3:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
    },
    77521: function (t, e, n) {
      n.d(e, {
        Z: function () {
          return v;
        },
      });
      var r = n(15861),
        i = n(15671),
        o = n(43144),
        a = n(60136),
        c = n(6215),
        s = n(61120),
        u = n(87757),
        l = n.n(u),
        d = n(67294),
        f = n(33257),
        p = n(79701),
        h = n(34562),
        y = n(93897),
        x = n(85893);
      function m(t) {
        var e = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = (0, s.Z)(t);
          if (e) {
            var i = (0, s.Z)(this).constructor;
            n = Reflect.construct(r, arguments, i);
          } else n = r.apply(this, arguments);
          return (0, c.Z)(this, n);
        };
      }
      var v = (function (t) {
        (0, a.Z)(n, t);
        var e = m(n);
        function n(t) {
          var r;
          return (
            (0, i.Z)(this, n),
            ((r = e.call(this, t)).state = { user: { isLoggedIn: !1 } }),
            r
          );
        }
        return (
          (0, o.Z)(n, [
            {
              key: "componentDidMount",
              value: (function () {
                var t = (0, r.Z)(
                  l().mark(function t() {
                    var e, n;
                    return l().wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (t.next = 2), (0, f.ts)();
                            case 2:
                              (e = t.sent).success
                                ? ((n = e.payload),
                                  this.setState({ user: n }),
                                  h.yV(n.userHandle))
                                : (0, y.hE)(
                                    "Unable to get user information. Some features will be unavailable."
                                  );
                            case 4:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      this
                    );
                  })
                );
                return function () {
                  return t.apply(this, arguments);
                };
              })(),
            },
            {
              key: "render",
              value: function () {
                return (0, x.jsx)(p.Ec.Provider, {
                  value: this.state,
                  children: this.props.children,
                });
              },
            },
          ]),
          n
        );
      })(d.Component);
    },
    55815: function (t, e, n) {
      n.d(e, {
        Z: function () {
          return c;
        },
      });
      var r = n(65988),
        i = n(66455),
        o = n(67294),
        a = n(85893);
      function c() {
        var t = (0, o.useRef)(null);
        return (0, a.jsxs)("div", {
          className: "jsx-".concat(s.__hash) + " iframeContainer",
          children: [
            (0, a.jsx)("iframe", {
              ref: t,
              src: i.Y.wwwFooterUrl,
              onLoad: function () {
                if (document) {
                  var e = t.current.contentDocument;
                  setTimeout(function () {
                    e &&
                      e.querySelectorAll("a").forEach(function (t) {
                        return t.addEventListener("click", function (e) {
                          return (window.location = t.href);
                        });
                      });
                  }, 1e3),
                    e &&
                      (e.body.innerHTML +=
                        "<style>.cookie_notification{display: none}</style>");
                }
              },
              className: "jsx-".concat(s.__hash) + " iframe",
            }),
            (0, a.jsx)(r.default, { id: s.__hash, children: s }),
          ],
        });
      }
      var s = [
        ".iframeContainer.jsx-170148238{overflow:hidden;padding-top:56.25%;position:relative;}",
        ".iframe.jsx-170148238{border:0;height:100%;left:0;position:absolute;top:0;width:100%;}",
      ];
      s.__hash = "170148238";
    },
    41073: function (t, e, n) {
      n.d(e, {
        Z: function () {
          return a;
        },
      });
      var r = n(9008),
        i = (n(6069), n(66455)),
        o = n(85893);
      function a(t) {
        var e = t.children;
        return (0, o.jsxs)(r.default, {
          children: [
            (0, o.jsx)("meta", {
              name: "viewport",
              content: "width=device-width, initial-scale=1",
            }),
            (0, o.jsx)("meta", {
              name: "description",
              content: "Pluralsight Guides",
            }),
            (0, o.jsx)("link", {
              href: "https://fonts.googleapis.com/css?family=Source+Code+Pro:500",
              rel: "stylesheet",
            }),
            (0, o.jsx)("script", {
              dangerouslySetInnerHTML: {
                __html:
                  'var doNotTrack = document.cookie.indexOf("ps_optout=1") > -1;\n        var oneHour = 60 * 60 * 1000;\n        var trkDate = new Date(Date.now() + oneHour);\n        document.cookie = "ps_trk=" + (doNotTrack ? "0" : "1")  + "; expires=" + trkDate.toUTCString() + "; path=/; domain=pluralsight.com";',
              },
            }),
            (0, o.jsx)("script", { src: i.Y.dtmUrl, async: !0 }),
            e,
          ],
        });
      }
    },
    33619: function (t, e, n) {
      n.d(e, {
        Z: function () {
          return h;
        },
      });
      var r = n(65988),
        i = (n(67294), n(68990)),
        o = n(17252),
        a = n(66455),
        c = n(76334),
        s = n(30163),
        u = n(34562),
        l = n(79701),
        d = n(85893);
      function f() {
        return (0, d.jsxs)("svg", {
          width: "188px",
          height: "40px",
          viewBox: "0 0 188 40",
          children: [
            (0, d.jsx)("defs", {
              children: (0, d.jsxs)("linearGradient", {
                x1: "50%",
                y1: "-2.48949813e-15%",
                x2: "50%",
                y2: "100%",
                id: "linearGradient-1",
                children: [
                  (0, d.jsx)("stop", { stopColor: "#F96816", offset: "0%" }),
                  (0, d.jsx)("stop", { stopColor: "#E80A89", offset: "100%" }),
                ],
              }),
            }),
            (0, d.jsx)("g", {
              id: "Header",
              stroke: "none",
              strokeWidth: "1",
              fill: "none",
              fillRule: "evenodd",
              children: (0, d.jsx)("g", {
                id: "JIT-Tutorials-Header",
                transform: "translate(-24.000000, -22.000000)",
                children: (0, d.jsx)("g", {
                  id: "Group-14",
                  children: (0, d.jsx)("g", {
                    id: "Group-3",
                    transform: "translate(24.000000, 22.000000)",
                    children: (0, d.jsx)("g", {
                      id: "pluralsight-logo-horizontal-color",
                      children: (0, d.jsxs)("g", {
                        id: "pluralsight-logo",
                        children: [
                          (0, d.jsxs)("g", {
                            id: "Pluralsight",
                            transform: "translate(50.350227, 14.375000)",
                            fill: "#FFFFFF",
                            children: [
                              (0, d.jsx)("polygon", {
                                id: "T",
                                points:
                                  "128.89658 0.207737908 128.89658 1.97224658 132.304282 1.97224658 132.304282 11.0428029 134.206652 11.0428029 134.206652 1.97224658 137.614354 1.97224658 137.614354 0.207737908",
                              }),
                              (0, d.jsx)("polygon", {
                                id: "H",
                                points:
                                  "115.263288 0.207737908 117.151143 0.207737908 117.151143 4.71244502 122.276784 4.71244502 122.276784 0.207737908 124.164639 0.207737908 124.164639 11.0428029 122.276784 11.0428029 122.276784 6.47609254 117.151143 6.47609254 117.151143 11.0428029 115.263288 11.0428029",
                              }),
                              (0, d.jsx)("path", {
                                d: "M100.003296,5.6561859 L100.003296,5.62518428 C100.003296,2.59133164 102.306121,0.0225032488 105.543907,0.0225032488 C107.416393,0.0225032488 108.568232,0.548669574 109.67311,1.49335772 L108.475163,2.93234942 C107.646932,2.2201734 106.833216,1.77064996 105.467061,1.77064996 C103.487844,1.77064996 101.983367,3.52051898 101.983367,5.59418266 L101.983367,5.62518428 C101.983367,7.85385604 103.440883,9.49521941 105.636123,9.49521941 C106.648785,9.49521941 107.570085,9.17056359 108.229255,8.67453773 L108.229255,6.64651531 L105.48243,6.64651531 L105.48243,4.9905123 L110.056487,4.9905123 L110.056487,9.54172183 C108.997717,10.4545472 107.47787,11.2278653 105.574646,11.2278653 C102.213051,11.2278653 100.003296,8.814045 100.003296,5.6561859",
                                id: "G",
                              }),
                              (0, d.jsx)("polygon", {
                                id: "I",
                                points:
                                  "92.9542645 0.206618405 94.8412656 0.206618405 94.8412656 11.0416834 92.9542645 11.0416834",
                              }),
                              (0, d.jsx)("path", {
                                d: "M79.5533581,9.46387333 L80.6881203,8.10152451 C81.7170055,8.99971024 82.7458907,9.5095146 84.080453,9.5095146 C85.2468076,9.5095146 85.9836772,8.96870862 85.9836772,8.14802694 L85.9836772,8.11788648 C85.9836772,7.34284607 85.5533385,6.9251854 83.5587527,6.46102231 C81.2721514,5.90385437 79.9828429,5.22267996 79.9828429,3.22652032 L79.9828429,3.19465754 C79.9828429,1.33714402 81.5180592,0.053160403 83.6509682,0.053160403 C85.2160691,0.053160403 86.458416,0.532824303 87.5487781,1.41550922 L86.536116,2.85536207 C85.5695616,2.12682409 84.6021533,1.74102619 83.6202297,1.74102619 C82.5144983,1.74102619 81.8706979,2.31283379 81.8706979,3.02500981 L81.8706979,3.05601143 C81.8706979,3.89133276 82.3616597,4.26335216 84.4177225,4.75851687 C86.6889546,5.31568481 87.8706783,6.13636649 87.8706783,7.93187678 L87.8706783,7.96201724 C87.8706783,9.99003965 86.2902082,11.1973804 84.0343453,11.1973804 C82.3923982,11.1973804 80.8426665,10.6247116 79.5533581,9.46387333",
                                id: "S",
                              }),
                              (0, d.jsx)("polygon", {
                                id: "L",
                                points:
                                  "68.0115369 0.207737908 69.898538 0.207737908 69.898538 9.30929582 75.5467336 9.30929582 75.5467336 11.0428029 68.0115369 11.0428029",
                              }),
                              (0, d.jsx)("path", {
                                d: "M56.936207,0.131008907 L58.6857388,0.131008907 L63.4126339,11.0427168 L61.4171942,11.0427168 L60.3276859,8.42738595 L55.2481522,8.42738595 L54.1432746,11.0427168 L52.2093119,11.0427168 L56.936207,0.131008907 Z M59.636924,6.73952016 L57.7806613,2.40532194 L55.9389141,6.73952016 L59.636924,6.73952016 Z",
                                id: "A",
                              }),
                              (0, d.jsx)("path", {
                                d: "M39.2731768,0.207737908 L44.0615488,0.207737908 C45.4123342,0.207737908 46.4711041,0.610758922 47.161866,1.29107217 C47.7288202,1.87924173 48.0515742,2.68442261 48.0515742,3.6282496 L48.0515742,3.66011237 C48.0515742,5.4392607 46.9919505,6.50795531 45.4891804,6.94111679 L48.3888437,11.0428029 L46.1645731,11.0428029 L43.5244793,7.2657726 L41.1601779,7.2657726 L41.1601779,11.0428029 L39.2731768,11.0428029 L39.2731768,0.207737908 Z M43.9223718,5.57962913 C45.2731572,5.57962913 46.1329808,4.86659195 46.1329808,3.76775687 L46.1329808,3.73675526 C46.1329808,2.57591695 45.3047495,1.94124496 43.9078564,1.94124496 L41.1601779,1.94124496 L41.1601779,5.57962913 L43.9223718,5.57962913 Z",
                                id: "R",
                              }),
                              (0, d.jsx)("path", {
                                d: "M24.7878039,6.44612431 L24.7878039,0.207910139 L26.6756588,0.207910139 L26.6756588,6.36775911 C26.6756588,8.38028072 27.704544,9.46361498 29.391745,9.46361498 C31.0652845,9.46361498 32.0933159,8.44228395 32.0933159,6.44612431 L32.0933159,0.207910139 L33.9811708,0.207910139 L33.9811708,6.3522583 C33.9811708,9.58762145 32.1701621,11.213484 29.3618604,11.213484 C26.5680742,11.213484 24.7878039,9.58762145 24.7878039,6.44612431",
                                id: "U",
                              }),
                              (0, d.jsx)("polygon", {
                                id: "L",
                                points:
                                  "13.013597 0.207737908 14.901452 0.207737908 14.901452 9.30929582 20.5496476 9.30929582 20.5496476 11.0428029 13.013597 11.0428029",
                              }),
                              (0, d.jsx)("path", {
                                d: "M0,0.207737908 L4.23593326,0.207737908 C6.73685011,0.207737908 8.31817412,1.64672961 8.31817412,3.8297601 L8.31817412,3.86076172 C8.31817412,6.29008284 6.38421144,7.56028796 4.0207639,7.56028796 L1.88700111,7.56028796 L1.88700111,11.0428029 L0,11.0428029 L0,0.207737908 Z M4.08224086,5.84142055 C5.50901862,5.84142055 6.40043453,5.03710084 6.40043453,3.90726415 L6.40043453,3.87540137 C6.40043453,2.60777972 5.49450323,1.94124496 4.08224086,1.94124496 L1.88700111,1.94124496 L1.88700111,5.84142055 L4.08224086,5.84142055 Z",
                                id: "P",
                              }),
                            ],
                          }),
                          (0, d.jsxs)("g", {
                            id: "Mark",
                            children: [
                              (0, d.jsx)("path", {
                                d: "M19.8302431,40 C30.7827007,40 39.6604862,31.044969 39.6604862,20.0008615 C39.6613403,8.95503101 30.7827007,0 19.8302431,0 C8.87863966,0 0,8.95503101 0,20.0008615 C0,31.044969 8.87778553,40 19.8302431,40 Z",
                                id: "circle",
                                fill: "url(#linearGradient-1)",
                              }),
                              (0, d.jsx)("path", {
                                d: "M10.6897404,11.875 L10.6897404,28.125 L24.6328801,19.9999219 L10.6897404,11.875 Z M12.3939019,14.8530469 L21.2264162,19.9999219 L12.3939019,25.146875 L12.3939019,14.8530469 Z",
                                id: "arrow-small",
                                fill: "#FFFFFF",
                              }),
                              (0, d.jsx)("path", {
                                d: "M14.7177585,9.53125 L14.7177585,30.46875 L32.5339926,20 L14.7177585,9.53125 Z M16.4219201,12.5217969 L29.1486757,20 L16.4219201,27.4782031 L16.4219201,12.5217969 Z",
                                id: "arrow-large",
                                fill: "#FFFFFF",
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  }),
                }),
              }),
            }),
          ],
        });
      }
      function p(t) {
        setTimeout(function () {
          window.location = t;
        }, 100);
      }
      function h(t) {
        var e = t.guide,
          n = a.Y.signInUrl,
          h = a.Y.signOutUrl,
          y = a.Y.freeTrialUrl,
          x = (0, d.jsxs)("div", {
            className: "jsx-4223644170",
            children: [
              (0, d.jsx)(i.ZP, {
                style: { background: o.XI.skillsBackground },
                appearance: i.ZP.appearances.primary,
                size: i.ZP.sizes.medium,
                onClick: function (t) {
                  u.j("generic_click", {
                    eventName: "Guides Sign Up Clicked",
                    source: "guides/header",
                    context: "guides",
                    contentTitle: e ? e.title : "All Guides",
                    contentId: e ? e.id : null,
                    contentType: "guide",
                  }),
                    p("".concat(y));
                },
                children: "Get started",
              }),
              (0, d.jsx)(i.ZP, {
                size: i.ZP.sizes.medium,
                appearance: i.ZP.appearances.flat,
                "data-ui-login-button": !0,
                onClick: function (t) {
                  u.j("generic_click", {
                    eventName: "Guides Sign In Clicked",
                    source: "guides/header",
                    context: "guides",
                    contentTitle: e ? e.title : "All Guides",
                    contentId: e ? e.id : null,
                    contentType: "guide",
                  }),
                    p("".concat(n, "?redirectTo=").concat(window.location));
                },
                children: "Log in",
              }),
              (0, d.jsx)(r.default, {
                id: "4223644170",
                children: [
                  "div.jsx-4223644170{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:214px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}",
                ],
              }),
            ],
          }),
          m = (0, d.jsx)(i.ZP, {
            size: i.ZP.sizes.medium,
            appearance: i.ZP.appearances.flat,
            "data-ui-logout-button": !0,
            onClick: function (t) {
              u.j("generic_click", {
                eventName: "Guides Sign Out Clicked",
                source: "guides/header",
                context: "guides",
                contentTitle: e ? e.title : "All Guides",
                contentId: e ? e.id : null,
                contentType: "guide",
              }),
                p("".concat(h, "?redirectTo=").concat(window.location));
            },
            children: "Log out",
          });
        return (0, d.jsxs)("header", {
          className:
            r.default.dynamic([
              ["1662182620", [(0, c.Z)(24), (0, c.Z)(2), s.Z.mobileQuery]],
            ]) + " header",
          children: [
            (0, d.jsx)("a", {
              href: "https://www.pluralsight.com/",
              alt: "Pluralsight Home",
              className:
                r.default.dynamic([
                  ["1662182620", [(0, c.Z)(24), (0, c.Z)(2), s.Z.mobileQuery]],
                ]) + " logo-link",
              children: (0, d.jsx)(f, {}),
            }),
            (0, d.jsx)(l.Ec.Consumer, {
              children: function (t) {
                var e = t.user;
                return (0, d.jsx)("div", {
                  className:
                    r.default.dynamic([
                      [
                        "1662182620",
                        [(0, c.Z)(24), (0, c.Z)(2), s.Z.mobileQuery],
                      ],
                    ]) + " auth-buttons",
                  children: e && e.isLoggedIn ? m : x,
                });
              },
            }),
            (0, d.jsx)(r.default, {
              id: "1662182620",
              dynamic: [(0, c.Z)(24), (0, c.Z)(2), s.Z.mobileQuery],
              children: [
                ".header.__jsx-style-dynamic-selector{line-height:0;padding:"
                  .concat(
                    (0, c.Z)(24),
                    ";display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-flex-flow:row;-ms-flex-flow:row;flex-flow:row;border-image:linear-gradient(to right,#f05a28,#e80a89);border-width:0 0 "
                  )
                  .concat(
                    (0, c.Z)(2),
                    " 0;border-style:solid;border-image-slice:1;}"
                  ),
                ".logo-link.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}",
                "@media screen and ".concat(
                  s.Z.mobileQuery,
                  "{.auth-buttons.__jsx-style-dynamic-selector{display:none;}}"
                ),
              ],
            }),
          ],
        });
      }
    },
    14151: function (t, e, n) {
      n.d(e, {
        Z: function () {
          return x;
        },
      });
      var r = n(15671),
        i = n(43144),
        o = n(60136),
        a = n(6215),
        c = n(61120),
        s = n(67294),
        u = n(66455),
        l = n(85893);
      function d() {
        return (0, l.jsx)("script", {
          async: !0,
          type: "text/javascript",
          dangerouslySetInnerHTML: {
            __html:
              '!function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","page","once","off","on"];analytics.factory=function(t){return function(){var e=Array.prototype.slice.call(arguments);e.unshift(t);analytics.push(e);return analytics}};for(var t=0;t<analytics.methods.length;t++){var e=analytics.methods[t];analytics[e]=analytics.factory(e)}analytics.load=function(t){var e=document.createElement("script");e.type="text/javascript";e.async=!0;e.src=("https:"===document.location.protocol?"https://":"http://")+"cdn.segment.com/analytics.js/v1/"+t+"/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(e,n)};analytics.SNIPPET_VERSION="3.1.0";\n  analytics.load("'.concat(
                u.Y.segmentWriteKey,
                '");\n  }}();'
              ),
          },
        });
      }
      function f() {
        return (0, l.jsx)("script", {
          type: "text/javascript",
          dangerouslySetInnerHTML: {
            __html: "if (_satellite) {_satellite.pageBottom();}",
          },
        });
      }
      function p() {
        return (0, l.jsx)("script", {
          type: "text/javascript",
          async: !0,
          dangerouslySetInnerHTML: {
            __html:
              '\n      "use strict"\n      !function() {\n        var t = window.driftt = window.drift = window.driftt || [];\n        if (!t.init) {\n          if (t.invoked) return void (window.console && console.error && console.error("Drift snippet included twice."));\n          t.invoked = !0, t.methods = [ "identify", "config", "track", "reset", "debug", "show", "ping", "page", "hide", "off", "on" ], \n          t.factory = function(e) {\n            return function() {\n              var n = Array.prototype.slice.call(arguments);\n              return n.unshift(e), t.push(n), t;\n            };\n          }, t.methods.forEach(function(e) {\n            t[e] = t.factory(e);\n          }), t.load = function(t) {\n            var e = 3e5, n = Math.ceil(new Date() / e) * e, o = document.createElement("script");\n            o.type = "text/javascript", o.async = !0, o.crossorigin = "anonymous", o.src = "https://js.driftt.com/include/" + n + "/" + t + ".js";\n            var i = document.getElementsByTagName("script")[0];\n            i.parentNode.insertBefore(o, i);\n          };\n        }\n      }();\n      drift.SNIPPET_VERSION = \'0.3.1\'; \n      drift.load(\'p4vbmwb65dy3\');\n    ',
          },
        });
      }
      var h = n(34562);
      function y(t) {
        var e = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = (0, c.Z)(t);
          if (e) {
            var i = (0, c.Z)(this).constructor;
            n = Reflect.construct(r, arguments, i);
          } else n = r.apply(this, arguments);
          return (0, a.Z)(this, n);
        };
      }
      var x = (function (t) {
        (0, o.Z)(n, t);
        var e = y(n);
        function n(t) {
          var i;
          return (
            (0, r.Z)(this, n),
            ((i = e.call(this, t)).state = { isLoaded: !1 }),
            i
          );
        }
        return (
          (0, i.Z)(n, [
            {
              key: "componentDidMount",
              value: function () {
                this.setState({ isLoaded: !0 }), h.Md();
              },
            },
            {
              key: "render",
              value: function () {
                return (0, l.jsxs)("div", {
                  children: [
                    (0, l.jsx)(d, {}),
                    this.props.displayDrift && (0, l.jsx)(p, {}),
                    (0, l.jsx)("script", {
                      src: "https://s2.pluralsight.com/analytics/analytics-facade.v4.7.11.js",
                    }),
                    this.state.isLoaded &&
                      (0, l.jsx)("div", {
                        "data-ui-js-is-loaded": !0,
                        style: { display: "none" },
                      }),
                    (0, l.jsx)(f, {}),
                  ],
                });
              },
            },
          ]),
          n
        );
      })(s.Component);
    },
    92346: function (t, e, n) {
      n.d(e, {
        Z: function () {
          return m;
        },
      });
      var r = n(15861),
        i = n(87757),
        o = n.n(i),
        a = n(33257),
        c = n(66455),
        s = n(15671),
        u = n(43144),
        l = n(60136),
        d = n(6215),
        f = n(61120),
        p = n(67294),
        h = n(85893);
      function y(t) {
        var e = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = (0, f.Z)(t);
          if (e) {
            var i = (0, f.Z)(this).constructor;
            n = Reflect.construct(r, arguments, i);
          } else n = r.apply(this, arguments);
          return (0, d.Z)(this, n);
        };
      }
      var x = (function (t) {
        (0, l.Z)(n, t);
        var e = y(n);
        function n() {
          return (0, s.Z)(this, n), e.apply(this, arguments);
        }
        return (
          (0, u.Z)(n, [
            {
              key: "componentDidMount",
              value: function () {
                var t = document.createElement("script");
                (t.src = c.Y.prismNotificationUrl), document.body.append(t);
              },
            },
            {
              key: "render",
              value: function () {
                return (0, h.jsx)("div", { id: "ps-notifications" });
              },
            },
          ]),
          n
        );
      })(p.Component);
      function m(t) {
        var e = t.userHandle,
          n = t.children,
          i = (0, p.useState)(!1),
          s = (i[0], i[1]);
        return (
          (0, p.useEffect)(function () {
            function t() {
              return (t = (0, r.Z)(
                o().mark(function t() {
                  var n, r, i;
                  return o().wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (window.Prism.isInited()) {
                            t.next = 3;
                            break;
                          }
                          return (
                            (t.next = 3),
                            window.Prism.init({
                              launchDarklyClientId: c.Y.launchDarklyClientId,
                              userHandle: e,
                            })
                          );
                        case 3:
                          return (t.next = 5), (0, a.OS)();
                        case 5:
                          return (
                            (n = t.sent),
                            (r = n.payload),
                            (i = {
                              launchDarklyClientId: c.Y.launchDarklyClientId,
                              userHandle: r.currentUser.userHandle,
                              payload: r.payload,
                              userEmail: r.currentUser.email,
                              userName:
                                r.currentUser.firstName +
                                " " +
                                r.currentUser.lastName,
                            }),
                            (t.next = 10),
                            window.Prism.update(i)
                          );
                        case 10:
                          s(!0);
                        case 11:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                })
              )).apply(this, arguments);
            }
            !(function () {
              t.apply(this, arguments);
            })();
          }, []),
          (0, h.jsxs)(p.Fragment, { children: [n, (0, h.jsx)(x, {})] })
        );
      }
    },
    79701: function (t, e, n) {
      n.d(e, {
        a1: function () {
          return i;
        },
        Ec: function () {
          return o;
        },
        tK: function () {
          return a;
        },
      });
      var r = n(67294),
        i = r.createContext(),
        o = r.createContext({ user: { isLoggedIn: !1 } }),
        a = r.createContext({});
    },
    93897: function (t, e, n) {
      n.d(e, {
        hE: function () {
          return a;
        },
      });
      var r = n(44586),
        i = [],
        o = [];
      function a(t) {
        var e =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : 7e3,
          n = c(t);
        setTimeout(function () {
          s(n);
        }, e);
      }
      function c(t) {
        var e = (0, r.Z)();
        return i.push({ id: e, message: t }), u(), e;
      }
      function s(t) {
        (i = i.filter(function (e) {
          return e.id !== t;
        })),
          u();
      }
      function u() {
        o.forEach(function (t) {
          return t(i);
        });
      }
    },
    97643: function (t, e, n) {
      n.r(e),
        n.d(e, {
          default: function () {
            return x;
          },
        });
      n(67294);
      var r = n(9008),
        i = n(17252),
        o = n(36459),
        a = n(85893);
      function c(t) {
        return (
          (0, o.Z)(t),
          (0, a.jsxs)("svg", {
            width: "128",
            height: "128",
            viewBox: "0 0 128 128",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              (0, a.jsx)("path", {
                opacity: "0.2",
                d: "M98.5763 15.1936H40.0043C38.8211 15.1936 38.0322 15.312 38.0322 15.4896V25C38.0322 25 38.8211 25 40.0043 25H91.4999C93.1568 25 94.4999 26.3431 94.4999 28V99.5H101.161C101.161 80.9516 101.5 21 101.5 16.5L100.548 15.4896C100.548 15.312 99.5623 15.1936 98.5763 15.1936Z",
                fill: "white",
              }),
              (0, a.jsx)("path", {
                d: "M89.8207 111.9H29.2382C28.0143 111.9 27.1984 111.084 27.1984 109.86V29.4914C27.1984 28.2675 28.0143 27.4516 29.2382 27.4516H89.8207C91.0446 27.4516 91.8605 28.2675 91.8605 29.4914V109.86C91.8605 111.084 90.8406 111.9 89.8207 111.9Z",
                stroke: "white",
                strokeWidth: "2",
                strokeMiterlimit: "10",
                strokeLinecap: "round",
                strokeLinejoin: "round",
              }),
              (0, a.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M39.0322 17.2366C39.0322 16.8462 39.1564 16.6006 39.2979 16.4568C39.438 16.3144 39.6718 16.1935 40.043 16.1935H99.7634C100.135 16.1935 100.368 16.3144 100.508 16.4568C100.65 16.6006 100.774 16.8462 100.774 17.2366V97.7312C100.774 98.3553 100.267 98.7742 99.7634 98.7742H94.6451V100.774H99.7634C101.27 100.774 102.774 99.5586 102.774 97.7312V17.2366C102.774 16.4011 102.496 15.6252 101.934 15.0539C101.37 14.4812 100.599 14.1935 99.7634 14.1935H40.043C39.2077 14.1935 38.4361 14.4812 37.8725 15.0539C37.3103 15.6252 37.0322 16.4011 37.0322 17.2366V24.7742H39.0322V17.2366Z",
                fill: "white",
              }),
              (0, a.jsx)("line", {
                x1: "60",
                y1: "46",
                x2: "81",
                y2: "46",
                stroke: "white",
                strokeWidth: "2",
                strokeLinecap: "round",
              }),
              (0, a.jsx)("path", {
                d: "M38 56H81",
                stroke: "white",
                strokeWidth: "2",
                strokeLinecap: "round",
              }),
              (0, a.jsx)("line", {
                x1: "39",
                y1: "66",
                x2: "81",
                y2: "66",
                stroke: "white",
                strokeWidth: "2",
                strokeLinecap: "round",
              }),
              (0, a.jsx)("line", {
                x1: "39",
                y1: "76",
                x2: "81",
                y2: "76",
                stroke: "white",
                strokeWidth: "2",
                strokeLinecap: "round",
              }),
              (0, a.jsx)("line", {
                x1: "39",
                y1: "86",
                x2: "81",
                y2: "86",
                stroke: "white",
                strokeWidth: "2",
                strokeLinecap: "round",
              }),
              (0, a.jsx)("line", {
                x1: "39",
                y1: "96",
                x2: "64",
                y2: "96",
                stroke: "white",
                strokeWidth: "2",
                strokeLinecap: "round",
              }),
              (0, a.jsx)("circle", {
                cx: "77.5",
                cy: "97.5",
                r: "4.5",
                stroke: "white",
                strokeWidth: "2",
              }),
              (0, a.jsx)("rect", {
                x: "36",
                y: "36",
                width: "16",
                height: "10",
                rx: "1",
                fill: "white",
                fillOpacity: "0.2",
                stroke: "white",
                strokeWidth: "2",
              }),
              (0, a.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M25 54.25H8C6.75736 54.25 5.75 53.2426 5.75 52V26C5.75 24.7574 6.75736 23.75 8 23.75H36V21.25H8C5.37665 21.25 3.25 23.3766 3.25 26V52C3.25 54.6234 5.37665 56.75 8 56.75H25V54.25ZM25 94.25H18.2903C14.8571 94.25 12.25 97.4237 12.25 101.105V117.895C12.25 121.576 14.8571 124.75 18.2903 124.75H48.7097C52.1429 124.75 54.75 121.576 54.75 117.895V114H51.9274V117.895C51.9274 120.114 50.3895 121.724 48.7097 121.724H18.2903C16.6105 121.724 15.0726 120.114 15.0726 117.895V101.105C15.0726 98.8861 16.6105 97.2763 18.2903 97.2763H25V95.7763H18.2903C17.8256 95.7763 17.3811 95.85 16.9637 95.9864C17.3875 95.8322 17.8339 95.75 18.2903 95.75H25V94.25ZM104 86.75H121.512C124.321 86.75 126.75 84.7022 126.75 82V58C126.75 55.2978 124.321 53.25 121.512 53.25H104V55.75H121.512C123.04 55.75 124.128 56.8362 124.128 58V82C124.128 83.1638 123.04 84.25 121.512 84.25H104V86.75ZM104 46.75H116C118.623 46.75 120.75 44.6234 120.75 42V31C120.75 28.3766 118.623 26.25 116 26.25H104V28.75H116C117.243 28.75 118.25 29.7574 118.25 31V42C118.25 43.2426 117.243 44.25 116 44.25H104V46.75ZM48.7097 123.224C49.1744 123.224 49.6189 123.15 50.0362 123.014C49.6124 123.168 49.1661 123.25 48.7097 123.25H18.2903C17.8339 123.25 17.3875 123.168 16.9637 123.014C17.3811 123.15 17.8256 123.224 18.2903 123.224H48.7097Z",
                fill: "white",
              }),
            ],
          })
        );
      }
      var s = n(94955),
        u = n(33154),
        l = n(2234);
      function d(t) {
        return function () {
          return (0, a.jsxs)("div", {
            style: { backgroundColor: i._Q[1], height: "100vh" },
            children: [
              (0, a.jsx)(r.default, {
                children: (0, a.jsx)("title", {
                  children: "Pluralsight Guides | Error",
                }),
              }),
              t,
            ],
          });
        };
      }
      var f = d(
          (0, a.jsx)("div", {
            style: {
              width: "500px",
              display: "flex",
              margin: "0 auto",
              textAlign: "center",
              paddingTop: "150px",
            },
            children: (0, a.jsxs)("div", {
              style: {
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                color: i.h1.highOnDark,
                flexDirection: "column",
              },
              children: [
                (0, a.jsx)(c, {}),
                (0, a.jsx)(s.X6, {
                  size: s.X6.sizes.large,
                  children: (0, a.jsxs)("h1", {
                    children: [
                      "This guide is no longer available. Browse our collection",
                      " ",
                      (0, a.jsx)(u.Z, {
                        children: (0, a.jsx)("a", {
                          href: "/guides",
                          children: "here",
                        }),
                      }),
                      ".",
                    ],
                  }),
                }),
                (0, a.jsx)(s.X6, {
                  size: s.X6.sizes.medium,
                  children: (0, a.jsx)("h2", {
                    style: { color: i.h1.lowOnDark },
                    children: "ERROR CODE: 410",
                  }),
                }),
              ],
            }),
          })
        ),
        p = d((0, a.jsx)(l.t9, {})),
        h = d((0, a.jsx)(l.IR, { action: "/search" })),
        y = d((0, a.jsx)(l.CA, {}));
      function x(t) {
        var e = t.statusCode;
        return 404 === e
          ? (0, a.jsx)(h, {})
          : 403 === e
          ? (0, a.jsx)(y, {})
          : 410 === e
          ? (0, a.jsx)(f, {})
          : (0, a.jsx)(p, {});
      }
      x.getInitialProps = function (t) {
        var e = t.res,
          n = t.err;
        return { statusCode: e ? e.statusCode : n ? n.statusCode : 404 };
      };
    },
    30163: function (t, e, n) {
      var r = n(76334),
        i = (0, r.Z)(760),
        o = (0, r.Z)(761);
      e.Z = {
        mobileMaxWidth: i,
        nonMobileMinWidth: o,
        mobileQuery: "(max-width: ".concat(i, ")"),
        nonMobileQuery: "(min-width: ".concat(o, ")"),
      };
    },
    76334: function (t, e, n) {
      function r(t) {
        return t / 14 + "rem";
      }
      n.d(e, {
        Z: function () {
          return r;
        },
      });
    },
    34562: function (t, e, n) {
      n.d(e, {
        Md: function () {
          return w;
        },
        j: function () {
          return j;
        },
        yV: function () {
          return k;
        },
        G7: function () {
          return b;
        },
      });
      var r,
        i = n(15861),
        o = n(70885),
        a = n(87757),
        c = n.n(a),
        s = (n(66455), n(59044)),
        u = n(21874),
        l = n.n(u);
      function d(t, e) {
        var n =
          ("undefined" !== typeof Symbol && t[Symbol.iterator]) ||
          t["@@iterator"];
        if (!n) {
          if (
            Array.isArray(t) ||
            (n = (function (t, e) {
              if (!t) return;
              if ("string" === typeof t) return f(t, e);
              var n = Object.prototype.toString.call(t).slice(8, -1);
              "Object" === n && t.constructor && (n = t.constructor.name);
              if ("Map" === n || "Set" === n) return Array.from(t);
              if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return f(t, e);
            })(t)) ||
            (e && t && "number" === typeof t.length)
          ) {
            n && (t = n);
            var r = 0,
              i = function () {};
            return {
              s: i,
              n: function () {
                return r >= t.length
                  ? { done: !0 }
                  : { done: !1, value: t[r++] };
              },
              e: function (t) {
                throw t;
              },
              f: i,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var o,
          a = !0,
          c = !1;
        return {
          s: function () {
            n = n.call(t);
          },
          n: function () {
            var t = n.next();
            return (a = t.done), t;
          },
          e: function (t) {
            (c = !0), (o = t);
          },
          f: function () {
            try {
              a || null == n.return || n.return();
            } finally {
              if (c) throw o;
            }
          },
        };
      }
      function f(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      var p = !1,
        h = !1,
        y = [],
        x = void 0,
        m = !1;
      function v() {
        r ||
          (window.AnalyticsFacade
            ? (r = new window.AnalyticsFacade({
                contextName: "guides",
                waitForIdentify: !1,
              }))
            : (l().info(
                "Analytics facade is disabled. This is intended in dev only."
              ),
              (r = {
                page: function () {},
                track: function () {},
                identify: function () {},
              })));
      }
      function g() {
        var t,
          e = d(y);
        try {
          for (e.s(); !(t = e.n()).done; ) {
            var n = (0, o.Z)(t.value, 2),
              i = n[0],
              a = n[1];
            r.track(i, a);
          }
        } catch (c) {
          e.e(c);
        } finally {
          e.f();
        }
        y = [];
      }
      function w(t) {
        v(), p ? (r.page(t), (h = !0), g()) : ((x = t), (m = !0));
      }
      function j(t) {
        var e =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        v(), h ? r.track(t, e) : y.push([t, e]);
      }
      function k(t, e) {
        return C.apply(this, arguments);
      }
      function C() {
        return (C = (0, i.Z)(
          c().mark(function t(e, n) {
            return c().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    if ((v(), !e)) {
                      t.next = 4;
                      break;
                    }
                    return (t.next = 4), r.identify(e, n);
                  case 4:
                    (p = !0), m && (r.page(x), (h = !0), g());
                  case 6:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
      function b(t, e) {
        if ("function" === typeof window.getSelection) {
          var n = window.getSelection();
          if (n) {
            var r = (function (t, e) {
                return t.length > e ? t.substr(0, e) + "..." : t;
              })(n.toString().replace(/^\s+|\s+$/g, ""), 150),
              i = (function (t) {
                for (var e = []; t.parentNode; ) (t = t.parentNode), e.push(t);
                return e;
              })(n.anchorNode),
              o = (function (t, e) {
                var n = t.find(function (t) {
                  return (t.className || "")
                    .split(" ")
                    .includes("guide-section");
                });
                if (n)
                  for (
                    var r = e.querySelectorAll(".guide-section"), i = 0;
                    i < r.length;
                    i++
                  )
                    if (r[i] === n) return i;
              })(i, document),
              a = (function (t) {
                return t.find(function (t) {
                  return "CODE" === t.nodeName;
                })
                  ? t.find(function (t) {
                      return "PRE" === t.nodeName;
                    })
                    ? "code block"
                    : "inline code"
                  : t.find(function (t) {
                      return ["H1", "H2", "H3", "H4"].includes(t.nodeName);
                    })
                  ? "heading"
                  : t.find(function (t) {
                      return "P" === t.nodeName;
                    })
                  ? "paragraph"
                  : "unknown";
              })(i),
              c = (function (t, e) {
                if (t.parentNode && "undefined" !== typeof e.scrollY)
                  return Math.floor(
                    t.parentNode.getBoundingClientRect().top + e.scrollY
                  );
              })(n.anchorNode, window);
            j("generic_click", {
              eventName: "Text Copied",
              source: "guides/guide",
              context: "guides",
              text: r,
              blockType: a,
              moduleIndex: o,
              pxFromTop: c,
              percentDownPage: Math.floor((c / (0, s.T)()) * 100),
              contentId: t,
              contentTitle: e,
              contentType: "guide",
            });
          }
        }
      }
    },
    8794: function (t, e, n) {
      n.d(e, {
        ZB: function () {
          return i;
        },
      });
      var r = n(66455);
      function i(t, e, n, i) {
        var o = r.Y.signInUrl,
          a = r.Y.appHost,
          c = r.Y.publicHost;
        return t
          ? (function (t) {
              var e = t.req,
                n = t.res,
                r = t.isLoggedIn,
                i = t.hasJwt,
                o = t.signInUrl,
                a = t.appHost,
                c = t.publicHost;
              if (e.headers.host === a) {
                if (r) return;
                var s = ""
                    .concat(e.protocol, "://")
                    .concat(e.headers.host)
                    .concat(e.url),
                  u = "".concat(e.protocol, "://").concat(c).concat(e.url);
                i
                  ? n.redirect(302, "".concat(o, "?redirectTo=").concat(s))
                  : n.redirect(302, u);
              } else {
                if (!i) return;
                var l = "".concat(e.protocol, "://").concat(a).concat(e.url);
                n.redirect(302, l);
              }
            })({
              req: t,
              res: e,
              isLoggedIn: n,
              hasJwt: i,
              signInUrl: o,
              appHost: a,
              publicHost: c,
            })
          : (function (t) {
              var e = t.document,
                n = t.isLoggedIn,
                r = t.hasJwt,
                i = t.signInUrl,
                o = t.appHost,
                a = t.publicHost;
              if (e.location.host === o) {
                if (n) return;
                var c = "".concat(i, "?redirectTo=").concat(e.location.href);
                e.location = r
                  ? c
                  : ""
                      .concat(e.location.protocol, "//")
                      .concat(a)
                      .concat(e.location.pathname);
              } else {
                if (!r) return;
                var s = ""
                  .concat(e.location.protocol, "://")
                  .concat(o)
                  .concat(e.location.pathname);
                e.location = s;
              }
            })({
              document: document,
              isLoggedIn: n,
              hasJwt: i,
              signInUrl: o,
              appHost: a,
              publicHost: c,
            });
      }
    },
    59044: function (t, e, n) {
      function r() {
        var t = document.body,
          e = document.documentElement;
        return Math.max(
          t.scrollHeight,
          t.offsetHeight,
          e.clientHeight,
          e.scrollHeight,
          e.offsetHeight
        );
      }
      n.d(e, {
        T: function () {
          return r;
        },
        c: function () {
          return o;
        },
      });
      var i = {
        P: "paragraph",
        LI: "list-item",
        TABLE: "table",
        PRE: "code-block",
        BLOCKQUOTE: "block-quote",
      };
      function o(t) {
        var e = a(t);
        if (!e) return "unknown";
        var n = a(e);
        return (
          n && "BLOCKQUOTE" === n.nodeName && (e = n),
          i[e.nodeName] || "unknown"
        );
      }
      function a(t) {
        if (t && t.parentNode) {
          for (var e = t.parentNode; !i[e.nodeName]; ) {
            if (!e.parentNode) return;
            e = e.parentNode;
          }
          return e;
        }
      }
    },
    41220: function (t, e, n) {
      n.d(e, {
        Z: function () {
          return i;
        },
      });
      var r = n(26113);
      function i() {
        (0, r.rehydrate)(window.__NEXT_DATA__.ids);
      }
    },
    66455: function (t, e, n) {
      n.d(e, {
        Y: function () {
          return i;
        },
      });
      var r = n(11752),
        i = (0, r.default)() ? (0, r.default)().publicRuntimeConfig : {};
      (0, r.default)() && (0, r.default)().serverRuntimeConfig;
    },
  },
]);
