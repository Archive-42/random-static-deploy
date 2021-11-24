(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [874],
  {
    80633: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return ve;
          },
        });
      var s = a(15861),
        n = a(4942),
        i = a(65988),
        r = a(87757),
        o = a.n(r),
        l = a(82129),
        c = a(17252),
        d = a(94955),
        h = a(36490),
        x = a(36620),
        f = a(41073),
        u = a(33619),
        p = a(55815),
        j = a(14151),
        g = a(76334),
        m = a(41220),
        b = a(77521),
        _ = a(97643),
        w = a(17407),
        y = a(74992),
        k = a(8794),
        v = a(33257),
        C = a(92346),
        P = a(34562),
        Z = a(66455),
        N = a(67294),
        G = a(20296),
        H = a(55372),
        A = a(49623),
        M = a(26552),
        T = a(67394),
        V = a(67299),
        O = a(1729),
        L = a(32943),
        B = a(85893);
      function D() {
        return (0, B.jsxs)("span", {
          className: "jsx-".concat(S.__hash) + " root",
          children: [
            "NEW",
            (0, B.jsx)(i.default, { id: S.__hash, children: S }),
          ],
        });
      }
      var S = [
        ".root.jsx-2460792749{background-color:".concat(
          c.Lf.base,
          ";color:#ffffff;font-size:12px;line-height:12px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding:0 10px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border-radius:2px;height:24px;font-weight:bold;}"
        ),
      ];
      S.__hash = "2460792749";
      var q = a(5152),
        I = (0, q.default)(
          function () {
            return Promise.all([a.e(278), a.e(842)]).then(a.bind(a, 95842));
          },
          {
            ssr: !1,
            loadableGenerated: {
              webpack: function () {
                return [95842];
              },
              modules: [
                "../components/LandingPage/GuideSummary.js -> ../../components/LandingPage/AddToChannelBtn",
              ],
            },
          }
        );
      function z(e) {
        var t = new Date(e.lastPublishedAt)
          .toLocaleTimeString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })
          .split(",")
          .slice(0, 2)
          .join(",");
        return [
          "".concat(e.minutesToRead.toString(), "m read  "),
          e.authorFullName,
          t,
          "".concat(e.viewCount, " Views"),
          (0, B.jsxs)(O.Z.Text, {
            children: [
              (0, B.jsx)(L.P, {
                style: {
                  width: (0, g.Z)(11.38),
                  margin: ""
                    .concat((0, g.Z)(6), " ")
                    .concat((0, g.Z)(5), " 0 0"),
                },
                color: L.P.colors.yellow,
              }),
              "".concat(e.upvoteCount),
            ],
          }),
        ];
      }
      var E = function (e) {
          var t = e.guide,
            a = e.isNew,
            s = e.setIsMessageFromError,
            n = e.setMessage,
            i = e.userHandle;
          return (0, B.jsx)(O.Z, {
            actionBar: [
              a ? (0, B.jsx)(D, {}, "newtag-".concat(t.id)) : null,
              (0, B.jsx)(
                "span",
                {
                  style: { marginLeft: (0, g.Z)(45), lineHeight: "normal" },
                  onClick: function (e) {
                    e.stopPropagation();
                  },
                  children:
                    i &&
                    (0, B.jsx)(
                      I,
                      {
                        contentId: t.id,
                        onSuccess: function (e) {
                          n(e), s(!1);
                        },
                        onError: function (e) {
                          s(!0), n(e);
                        },
                        source: "guides/all",
                        userHandle: i,
                      },
                      "AddToChannelButton-".concat(t.id)
                    ),
                },
                "span-".concat(t.id)
              ),
            ],
            title: (0, B.jsx)(O.Z.TextLink, {
              children: (0, B.jsx)("a", {
                href: "".concat(Z.Y.uiBaseUrl, "/guides/").concat(t.slug),
                onClick: function () {
                  analytics.track("generic_click", {
                    eventName: "Guide Title Clicked",
                    source: "guides/all",
                    context: "guides",
                    authorName: t.authorFullName,
                    contentId: t.id,
                    contentTitle: t.title,
                    contentType: "guide",
                  });
                },
                children: t.title,
              }),
            }),
            actionBarVisible: !0,
            metadata1: z(t),
          });
        },
        F = a(30724),
        R = a.n(F),
        U = a(68990);
      function X(e) {
        var t = e.guideId,
          a = e.title,
          s = e.authorName,
          n = e.description,
          r = e.sections,
          o = e.url;
        return (0, B.jsxs)("div", {
          className: "jsx-".concat(W.__hash) + " details-root",
          children: [
            (0, B.jsxs)("div", {
              className: "jsx-".concat(W.__hash) + " details-description",
              children: [
                (0, B.jsx)("h3", {
                  className: "jsx-".concat(W.__hash),
                  children: "Description",
                }),
                (0, B.jsx)(d.P, {
                  style: { width: "400px", color: "#AAAAAA" },
                  children: (0, B.jsx)(R(), {
                    renderers: {
                      link: function (e) {
                        return e.children;
                      },
                      paragraph: function (e) {
                        return e.children;
                      },
                      heading: function (e) {
                        return e.children;
                      },
                    },
                    source: n.split(" ").slice(0, 50).join(" ") + "...",
                    disallowedTypes: ["image"],
                  }),
                }),
                (0, B.jsxs)("h3", {
                  className: "jsx-".concat(W.__hash),
                  children: ["By ", s],
                }),
                (0, B.jsx)(U.ZP, {
                  style: { width: "144px" },
                  onClick: function () {
                    P.j("generic_click", {
                      eventName: "Read Guide Button Clicked",
                      source: "guides/all",
                      context: "guides",
                      authorName: s,
                      contentId: t,
                      contentTitle: a,
                      url: o,
                      contentType: "guide",
                    }),
                      (window.location.href = "".concat(o));
                  },
                  children: "Read guide",
                }),
              ],
            }),
            (0, B.jsxs)("div", {
              className: "jsx-".concat(W.__hash) + " details-sections",
              children: [
                (0, B.jsx)("h3", {
                  className: "jsx-".concat(W.__hash),
                  children: "Sections",
                }),
                (0, B.jsx)("div", {
                  className: "jsx-".concat(W.__hash) + " section-titles",
                  children: r.map(function (e, t) {
                    return (0, B.jsxs)(
                      "div",
                      {
                        onClick: function () {
                          return (
                            (t = e),
                            void P.j("generic_click", {
                              eventName: "Guide Section Clicked",
                              sectionName: t,
                              source: "guides/all",
                              context: "guides",
                              contentType: "guide",
                            })
                          );
                          var t;
                        },
                        className: "jsx-".concat(W.__hash),
                        children: [
                          (0, B.jsx)("div", {
                            style: { padding: "11px 0px" },
                            className: "jsx-".concat(W.__hash),
                            children: e,
                          }),
                          (0, B.jsx)("hr", {
                            style: { border: "1px solid #363636" },
                            className: "jsx-".concat(W.__hash),
                          }),
                        ],
                      },
                      t
                    );
                  }),
                }),
              ],
            }),
            (0, B.jsx)(i.default, { id: W.__hash, children: W }),
          ],
        });
      }
      var W = [
        ".details-root.jsx-836808008{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;overflow:auto;padding:40px 80px 40px 40px;}",
        ".details-description.jsx-836808008{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding-bottom:44px;padding-left:40px;}",
        "h3.jsx-836808008{font-size:14px;line-height:16px;padding-bottom:8px;}",
        ".details-sections.jsx-836808008{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin-left:80px;width:100%;}",
        ".section-titles.jsx-836808008{font-size:14px;line-height:16px;color:".concat(
          c.h1.lowOnDark,
          ";}"
        ),
      ];
      W.__hash = "836808008";
      var Y = function (e) {
        var t = e.guide,
          a = e.setIsMessageFromError,
          s = e.setMessage,
          n = e.userHandle,
          i = (0, N.useState)(!1),
          r = i[0],
          o = i[1],
          l = Date.parse(t.lastPublishedAt),
          c = new Date();
        c.setDate(c.getDate() - 7);
        var d = l >= c;
        return (0, B.jsxs)(V.Z, {
          onToggle: function (e) {
            P.j("generic_click", {
              eventName: "Guide Drawer Toggle",
              source: "guides/all",
              context: "guides",
              authorName: t.authorFullName,
              contentId: t.id,
              contentTitle: t.title,
              contentType: "guide",
            }),
              o(!r);
          },
          isOpen: r,
          children: [
            (0, B.jsx)(V.Z.Summary, {
              children: (0, B.jsx)(E, {
                isNew: d,
                guide: t,
                setIsMessageFromError: a,
                setMessage: s,
                userHandle: n,
              }),
            }),
            (0, B.jsx)(V.Z.Details, {
              children: (0, B.jsx)(X, {
                guideId: t.id,
                title: t.title,
                authorName: t.authorFullName,
                description: t.description,
                sections: t.sections,
                url: "".concat(Z.Y.uiBaseUrl, "/guides/").concat(t.slug),
              }),
            }),
          ],
        });
      };
      function Q(e) {
        var t = e.style;
        return (0, B.jsxs)("svg", {
          width: "89",
          height: "24",
          viewBox: "0 0 89 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          style: t,
          children: [
            (0, B.jsx)("rect", {
              width: "89",
              height: "24",
              rx: "2",
              fill: "#F2F2F2",
            }),
            (0, B.jsx)("path", {
              d: "M37.304 16.144C38.888 16.144 40.124 15.532 41.024 14.764V10.996H37.244V12.592H39.236V13.924C38.732 14.284 38.084 14.476 37.364 14.476C35.768 14.476 34.652 13.264 34.652 11.632V11.608C34.652 10.084 35.792 8.812 37.232 8.812C38.252 8.812 38.864 9.148 39.548 9.712L40.712 8.308C39.8 7.54 38.852 7.12 37.292 7.12C34.64 7.12 32.72 9.16 32.72 11.632V11.656C32.72 14.236 34.58 16.144 37.304 16.144ZM46.6189 16.132C48.9589 16.132 50.4349 14.836 50.4349 12.196V7.264H48.5989V12.28C48.5989 13.708 47.8549 14.44 46.6429 14.44C45.4309 14.44 44.6989 13.672 44.6989 12.208V7.264H42.8509V12.268C42.8509 14.824 44.2909 16.132 46.6189 16.132ZM52.6063 16H54.4543V7.264H52.6063V16ZM56.7644 16H60.1364C62.8844 16 64.7804 14.092 64.7804 11.632V11.608C64.7804 9.148 62.8844 7.264 60.1364 7.264H56.7644V16ZM60.1364 8.932C61.7564 8.932 62.8484 10.048 62.8484 11.632V11.656C62.8484 13.24 61.7564 14.332 60.1364 14.332H58.6004V8.932H60.1364ZM66.6199 16H73.2439V14.356H68.4439V12.424H72.6199V10.78H68.4439V8.908H73.1839V7.264H66.6199V16Z",
              fill: "#181818",
            }),
            (0, B.jsx)("path", {
              d: "M11.3333 6.37508C11.3333 6.26002 11.4265 6.16675 11.5416 6.16675H24.4583C24.5733 6.16675 24.6666 6.26002 24.6666 6.37508V7.62508C24.6666 7.74014 24.5733 7.83341 24.4583 7.83341H11.5416C11.4265 7.83341 11.3333 7.74014 11.3333 7.62508V6.37508ZM11.3333 9.70842C11.3333 9.59336 11.4265 9.50008 11.5416 9.50008H24.4583C24.5733 9.50008 24.6666 9.59336 24.6666 9.70842V10.9584C24.6666 11.0735 24.5733 11.1667 24.4583 11.1667H11.5416C11.4265 11.1667 11.3333 11.0735 11.3333 10.9584V9.70842ZM11.3333 13.0417C11.3333 12.9267 11.4265 12.8334 11.5416 12.8334H24.4583C24.5733 12.8334 24.6666 12.9267 24.6666 13.0417V14.2917C24.6666 14.4068 24.5733 14.5001 24.4583 14.5001H11.5416C11.4265 14.5001 11.3333 14.4068 11.3333 14.2917V13.0417ZM11.3333 16.3751C11.3333 16.26 11.4265 16.1667 11.5416 16.1667H21.1249C21.24 16.1667 21.3333 16.26 21.3333 16.3751V17.6251C21.3333 17.7401 21.24 17.8334 21.1249 17.8334H11.5416C11.4265 17.8334 11.3333 17.7401 11.3333 17.6251V16.3751Z",
              fill: "#181818",
            }),
          ],
        });
      }
      function J() {
        return (0, B.jsxs)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          xmlnsXlink: "http://www.w3.org/1999/xlink",
          width: "151",
          height: "151",
          viewBox: "0 0 151 151",
          children: [
            (0, B.jsxs)("defs", {
              children: [
                (0, B.jsx)("clipPath", {
                  id: "clip-path",
                  children: (0, B.jsx)("path", {
                    id: "Path_3",
                    dataname: "Path 3",
                    d: "M225.739-270.679,148.1-255.151A23.754,23.754,0,0,0,129.465-227.2h0l15.529,77.64a23.754,23.754,0,0,0,27.951,18.634h0l77.64-15.529a23.753,23.753,0,0,0,18.633-27.95h0L253.69-252.045a23.757,23.757,0,0,0-23.266-19.1h0a23.851,23.851,0,0,0-4.684.466",
                    transform: "translate(-128.999 271.145)",
                    fill: "none",
                  }),
                }),
                (0, B.jsx)("clipPath", {
                  id: "clip-path-2",
                  children: (0, B.jsx)("path", {
                    id: "Path_2",
                    dataname: "Path 2",
                    d: "M0-4.112H395.888V-400H0Z",
                    transform: "translate(0 400)",
                    fill: "none",
                  }),
                }),
                (0, B.jsxs)("linearGradient", {
                  id: "linear-gradient",
                  x1: "0.364",
                  y1: "0.5",
                  x2: "0.636",
                  y2: "0.5",
                  gradientUnits: "objectBoundingBox",
                  children: [
                    (0, B.jsx)("stop", { offset: "0", stopColor: "#c3cddb" }),
                    (0, B.jsx)("stop", { offset: "0.1", stopColor: "#c8d1de" }),
                    (0, B.jsx)("stop", { offset: "0.2", stopColor: "#cdd5e1" }),
                    (0, B.jsx)("stop", { offset: "0.3", stopColor: "#d2d9e4" }),
                    (0, B.jsx)("stop", { offset: "0.4", stopColor: "#d7dee8" }),
                    (0, B.jsx)("stop", { offset: "0.5", stopColor: "#dde2eb" }),
                    (0, B.jsx)("stop", { offset: "0.6", stopColor: "#e1e6ee" }),
                    (0, B.jsx)("stop", { offset: "0.7", stopColor: "#e7ebf2" }),
                    (0, B.jsx)("stop", { offset: "0.8", stopColor: "#eceff5" }),
                    (0, B.jsx)("stop", { offset: "0.9", stopColor: "#f1f3f8" }),
                    (0, B.jsx)("stop", { offset: "1", stopColor: "#f6f8fb" }),
                  ],
                }),
                (0, B.jsx)("clipPath", {
                  id: "clip-path-3",
                  children: (0, B.jsx)("path", {
                    id: "Path_6",
                    dataname: "Path 6",
                    d: "M227.375-262.833,149.735-247.3a15.851,15.851,0,0,0-12.422,18.633h0l15.528,77.64a15.852,15.852,0,0,0,18.633,12.422h0l77.64-15.528a15.854,15.854,0,0,0,12.423-18.633h0l-15.528-77.64a15.862,15.862,0,0,0-15.523-12.732h0a15.84,15.84,0,0,0-3.111.309",
                    transform: "translate(-137.003 263.142)",
                    fill: "none",
                  }),
                }),
                (0, B.jsxs)("linearGradient", {
                  id: "linear-gradient-2",
                  x1: "0.381",
                  y1: "0.5",
                  x2: "0.619",
                  y2: "0.5",
                  gradientUnits: "objectBoundingBox",
                  children: [
                    (0, B.jsx)("stop", { offset: "0", stopColor: "#edf0f4" }),
                    (0, B.jsx)("stop", { offset: "0.1", stopColor: "#e9edf2" }),
                    (0, B.jsx)("stop", { offset: "0.2", stopColor: "#e4e9ef" }),
                    (0, B.jsx)("stop", { offset: "0.3", stopColor: "#e0e5ec" }),
                    (0, B.jsx)("stop", { offset: "0.4", stopColor: "#dbe1e9" }),
                    (0, B.jsx)("stop", { offset: "0.5", stopColor: "#d7dde6" }),
                    (0, B.jsx)("stop", { offset: "0.6", stopColor: "#d2d9e4" }),
                    (0, B.jsx)("stop", { offset: "0.7", stopColor: "#ced5e1" }),
                    (0, B.jsx)("stop", { offset: "0.8", stopColor: "#c9d1de" }),
                    (0, B.jsx)("stop", { offset: "0.9", stopColor: "#c4cddb" }),
                    (0, B.jsx)("stop", { offset: "1", stopColor: "#b8c6db" }),
                  ],
                }),
                (0, B.jsx)("clipPath", {
                  id: "clip-path-5",
                  children: (0, B.jsx)("rect", {
                    id: "Rectangle_1",
                    dataname: "Rectangle 1",
                    width: "126",
                    height: "125",
                    transform: "translate(-0.338 -0.344)",
                    fill: "none",
                  }),
                }),
                (0, B.jsx)("clipPath", {
                  id: "clip-path-6",
                  children: (0, B.jsx)("path", {
                    id: "Path_8",
                    dataname: "Path 8",
                    d: "M137-138.3H261.845V-263.142H137Z",
                    transform: "translate(-137.003 263.142)",
                    fill: "none",
                  }),
                }),
                (0, B.jsx)("clipPath", {
                  id: "clip-path-7",
                  children: (0, B.jsx)("path", {
                    id: "Path_14",
                    dataname: "Path 14",
                    d: "M168.753-265A23.753,23.753,0,0,0,145-241.247h0v79.178a23.753,23.753,0,0,0,23.753,23.753h79.178a23.753,23.753,0,0,0,23.753-23.753h0v-79.178A23.753,23.753,0,0,0,247.931-265H168.753Z",
                    transform: "translate(-145 265)",
                    fill: "none",
                  }),
                }),
                (0, B.jsxs)("linearGradient", {
                  id: "linear-gradient-3",
                  x1: "0.343",
                  y1: "0.522",
                  x2: "0.663",
                  y2: "0.522",
                  gradientUnits: "objectBoundingBox",
                  children: [
                    (0, B.jsx)("stop", { offset: "0", stopColor: "#e4ebf4" }),
                    (0, B.jsx)("stop", { offset: "0.1", stopColor: "#e8eef7" }),
                    (0, B.jsx)("stop", { offset: "0.2", stopColor: "#ebf0f8" }),
                    (0, B.jsx)("stop", { offset: "0.3", stopColor: "#edf2f8" }),
                    (0, B.jsx)("stop", { offset: "0.4", stopColor: "#eff3f9" }),
                    (0, B.jsx)("stop", { offset: "0.5", stopColor: "#f1f5fa" }),
                    (0, B.jsx)("stop", { offset: "0.6", stopColor: "#f4f7fb" }),
                    (0, B.jsx)("stop", { offset: "0.7", stopColor: "#f6f8fb" }),
                    (0, B.jsx)("stop", { offset: "0.8", stopColor: "#f8fafc" }),
                    (0, B.jsx)("stop", { offset: "0.9", stopColor: "#fafcfd" }),
                    (0, B.jsx)("stop", { offset: "1", stopColor: "#fdfdfd" }),
                  ],
                }),
                (0, B.jsx)("clipPath", {
                  id: "clip-path-9",
                  children: (0, B.jsx)("path", {
                    id: "Path_17",
                    dataname: "Path 17",
                    d: "M168.836-257A15.853,15.853,0,0,0,153-241.164h0v79.178a15.853,15.853,0,0,0,15.836,15.836h79.178a15.853,15.853,0,0,0,15.836-15.836h0v-79.178A15.854,15.854,0,0,0,248.013-257H168.836Z",
                    transform: "translate(-153 257)",
                    fill: "none",
                  }),
                }),
                (0, B.jsxs)("linearGradient", {
                  id: "linear-gradient-4",
                  x1: "0.363",
                  y1: "0.522",
                  x2: "0.643",
                  y2: "0.522",
                  gradientUnits: "objectBoundingBox",
                  children: [
                    (0, B.jsx)("stop", { offset: "0", stopColor: "#f6f8fb" }),
                    (0, B.jsx)("stop", { offset: "0.1", stopColor: "#f7f8fc" }),
                    (0, B.jsx)("stop", { offset: "0.2", stopColor: "#f8f9fc" }),
                    (0, B.jsx)("stop", { offset: "0.3", stopColor: "#f8fafc" }),
                    (0, B.jsx)("stop", { offset: "0.4", stopColor: "#f9fafd" }),
                    (0, B.jsx)("stop", { offset: "0.5", stopColor: "#fafbfd" }),
                    (0, B.jsx)("stop", { offset: "0.6", stopColor: "#fafcfd" }),
                    (0, B.jsx)("stop", { offset: "0.7", stopColor: "#fbfcfe" }),
                    (0, B.jsx)("stop", { offset: "0.8", stopColor: "#fbfdfe" }),
                    (0, B.jsx)("stop", { offset: "0.9", stopColor: "#fcfefe" }),
                    (0, B.jsx)("stop", { offset: "1", stopColor: "#fdffff" }),
                  ],
                }),
                (0, B.jsx)("clipPath", {
                  id: "clip-Artboard_1",
                  children: (0, B.jsx)("rect", { width: "151", height: "151" }),
                }),
              ],
            }),
            (0, B.jsxs)("g", {
              id: "Artboard_1",
              dataname: "Artboard \u2013 1",
              clipPath: "url(#clip-Artboard_1)",
              children: [
                (0, B.jsx)("g", {
                  id: "Group_3",
                  dataname: "Group 3",
                  transform: "translate(2.54 5.415)",
                  clipPath: "url(#clip-path)",
                  children: (0, B.jsx)("g", {
                    id: "Group_2",
                    dataname: "Group 2",
                    transform: "translate(-127.673 -127.53)",
                    clipPath: "url(#clip-path-2)",
                    children: (0, B.jsx)("g", {
                      id: "Group_1",
                      dataname: "Group 1",
                      transform: "translate(15.226 472.02) rotate(-101.31)",
                      children: (0, B.jsx)("path", {
                        id: "Path_1",
                        dataname: "Path 1",
                        d: "M465.84,77.64,388.2,465.84,0,388.2,77.64,0Z",
                        transform: "translate(0 0)",
                        fill: "url(#linear-gradient)",
                      }),
                    }),
                  }),
                }),
                (0, B.jsx)("g", {
                  id: "Group_6",
                  dataname: "Group 6",
                  transform: "translate(10.461 13.335)",
                  clipPath: "url(#clip-path-3)",
                  children: (0, B.jsx)("g", {
                    id: "Group_5",
                    dataname: "Group 5",
                    transform: "translate(-135.595 -135.451)",
                    clipPath: "url(#clip-path-2)",
                    children: (0, B.jsx)("g", {
                      id: "Group_4",
                      dataname: "Group 4",
                      transform: "translate(15.226 472.02) rotate(-101.31)",
                      children: (0, B.jsx)("path", {
                        id: "Path_4",
                        dataname: "Path 4",
                        d: "M465.84,77.64,388.2,465.84,0,388.2,77.64,0Z",
                        transform: "translate(0 0)",
                        fill: "url(#linear-gradient-2)",
                      }),
                    }),
                  }),
                }),
                (0, B.jsx)("g", {
                  id: "Group_9",
                  dataname: "Group 9",
                  transform: "translate(10.338 13.344)",
                  opacity: "0.8",
                  style: { isolation: "isolate" },
                  children: (0, B.jsx)("g", {
                    id: "Group_8",
                    dataname: "Group 8",
                    transform: "translate(0 0)",
                    clipPath: "url(#clip-path-5)",
                    children: (0, B.jsx)("g", {
                      id: "Group_7",
                      dataname: "Group 7",
                      transform: "translate(0.123 -0.008)",
                      clipPath: "url(#clip-path-6)",
                      children: (0, B.jsx)("path", {
                        id: "Path_7",
                        dataname: "Path 7",
                        d: "M230.485-263.142a15.92,15.92,0,0,0-3.111.309L149.735-247.3a15.854,15.854,0,0,0-12.423,18.633l15.528,77.64A15.863,15.863,0,0,0,168.363-138.3a15.829,15.829,0,0,0,3.11-.309l77.641-15.529a15.853,15.853,0,0,0,12.423-18.633l-15.528-77.64a15.864,15.864,0,0,0-15.524-12.732m0,.495h0a15.379,15.379,0,0,1,15.037,12.334l15.529,77.641a15.358,15.358,0,0,1-12.035,18.051l-77.64,15.528a15.323,15.323,0,0,1-3.014.3,15.38,15.38,0,0,1-15.038-12.334L137.8-228.768a15.357,15.357,0,0,1,12.034-18.051l77.64-15.528a15.392,15.392,0,0,1,3.015-.3",
                        transform: "translate(-137.003 263.142)",
                        fill: "#fff",
                      }),
                    }),
                  }),
                }),
                (0, B.jsx)("path", {
                  id: "Path_9",
                  dataname: "Path 9",
                  d: "M269.372-174.311l-15.527-77.641a23.649,23.649,0,0,0-4.549-9.93c-.778-.077-1.567-.119-2.365-.119H182.968l-31.274,6.255a23.69,23.69,0,0,0-7.694,17.5v79.178a23.753,23.753,0,0,0,23.753,23.753h27.76l55.226-11.045a23.752,23.752,0,0,0,18.632-27.95",
                  transform: "translate(-126.614 276.466)",
                  fill: "#a9b6cc",
                }),
                (0, B.jsx)("g", {
                  id: "Group_14",
                  dataname: "Group 14",
                  transform: "translate(18.376 11.497)",
                  clipPath: "url(#clip-path-7)",
                  children: (0, B.jsx)("g", {
                    id: "Group_13",
                    dataname: "Group 13",
                    transform: "translate(-143.509 -133.612)",
                    clipPath: "url(#clip-path-2)",
                    children: (0, B.jsx)("g", {
                      id: "Group_12",
                      dataname: "Group 12",
                      transform: "translate(0 395.888) rotate(-90)",
                      children: (0, B.jsx)("path", {
                        id: "Path_12",
                        dataname: "Path 12",
                        d: "M395.888,0V395.888H0V0Z",
                        transform: "translate(0)",
                        fill: "url(#linear-gradient-3)",
                      }),
                    }),
                  }),
                }),
                (0, B.jsx)("g", {
                  id: "Group_17",
                  dataname: "Group 17",
                  transform: "translate(26.293 19.414)",
                  clipPath: "url(#clip-path-9)",
                  children: (0, B.jsx)("g", {
                    id: "Group_16",
                    dataname: "Group 16",
                    transform: "translate(-151.427 -141.53)",
                    clipPath: "url(#clip-path-2)",
                    children: (0, B.jsx)("g", {
                      id: "Group_15",
                      dataname: "Group 15",
                      transform: "translate(0 395.888) rotate(-90)",
                      children: (0, B.jsx)("path", {
                        id: "Path_15",
                        dataname: "Path 15",
                        d: "M395.888,0V395.888H0V0Z",
                        transform: "translate(0)",
                        fill: "url(#linear-gradient-4)",
                      }),
                    }),
                  }),
                }),
                (0, B.jsxs)("text", {
                  id: "Guides_are_here_to_provide_support_and_answer_questions_for_technologists._They_re_a_text-based_resource_for_learners_in_their_moment_of_need_to_answer_a_question_or_solve_a_problem_that_they_have_encountered._They_are_",
                  dataname:
                    "Guides are here to  provide support and answer questions for  technologists. They\u2019re a  text-based resource for  learners in their moment  of need to answer a  question or solve a  problem that they have  encountered. They are ",
                  transform: "translate(34 33)",
                  fill: "#e4e9ef",
                  fontSize: "7",
                  fontFamily: "Georgia-Bold, Georgia",
                  fontWeight: "700",
                  letterSpacing: "0.037em",
                  children: [
                    (0, B.jsxs)("tspan", {
                      x: "0",
                      y: "0",
                      children: ["Guides are here to", " "],
                    }),
                    (0, B.jsx)("tspan", {
                      x: "0",
                      y: "10",
                      children: "provide support and",
                    }),
                    (0, B.jsxs)("tspan", {
                      x: "0",
                      y: "20",
                      children: ["answer questions for", " "],
                    }),
                    (0, B.jsxs)("tspan", {
                      x: "0",
                      y: "30",
                      children: ["technologists. They\u2019re a", " "],
                    }),
                    (0, B.jsxs)("tspan", {
                      x: "0",
                      y: "40",
                      children: ["text-based resource for", " "],
                    }),
                    (0, B.jsxs)("tspan", {
                      x: "0",
                      y: "50",
                      children: ["learners in their moment", " "],
                    }),
                    (0, B.jsxs)("tspan", {
                      x: "0",
                      y: "60",
                      children: ["of need to answer a", " "],
                    }),
                    (0, B.jsxs)("tspan", {
                      x: "0",
                      y: "70",
                      children: ["question or solve a", " "],
                    }),
                    (0, B.jsxs)("tspan", {
                      x: "0",
                      y: "80",
                      children: ["problem that they have", " "],
                    }),
                    (0, B.jsxs)("tspan", {
                      x: "0",
                      y: "90",
                      children: ["encountered. They are", " "],
                    }),
                  ],
                }),
                (0, B.jsx)("path", {
                  id: "Path_18",
                  dataname: "Path 18",
                  d: "M248.013-257H168.836A15.854,15.854,0,0,0,153-241.164v79.178a15.854,15.854,0,0,0,15.836,15.836h79.178a15.854,15.854,0,0,0,15.836-15.836v-79.178A15.854,15.854,0,0,0,248.013-257m0,.495a15.358,15.358,0,0,1,15.341,15.341v79.178a15.358,15.358,0,0,1-15.341,15.341H168.836a15.358,15.358,0,0,1-15.341-15.341v-79.178a15.358,15.358,0,0,1,15.341-15.341h79.178",
                  transform: "translate(-126.707 276.414)",
                  fill: "#fff",
                }),
                (0, B.jsx)("path", {
                  id: "Path_22",
                  dataname: "Path 22",
                  d: "M181.676-197.768h11.066l-5.353-16.778Zm25.012,8.645q.514,1.545,4.169,1.545v4.22H190.22v-4.22h3.963q1.492,0,1.492-.926a1.977,1.977,0,0,0-.155-.619l-1.441-4.116h-13.9l-1.287,3.7a2.061,2.061,0,0,0-.154.67q0,1.286,2.316,1.287h2.935v4.22H169.427l-.051-4.22a9.708,9.708,0,0,0,3.217-.386,1.969,1.969,0,0,0,1.262-1.107L185.381-221.6h10.4Z",
                  transform: "translate(-126.875 276.05)",
                  fill: "#2e363a",
                }),
                (0, B.jsx)("path", {
                  id: "Path_23",
                  dataname: "Path 23",
                  d: "M233.87-197.448q-2.42,1.029-4.3,1.7a27.321,27.321,0,0,0-3.19,1.338,5.871,5.871,0,0,0-1.981,1.518,3.593,3.593,0,0,0-.669,2.29,2.911,2.911,0,0,0,.925,2.213,4.163,4.163,0,0,0,2.934.875,6.454,6.454,0,0,0,3.784-1.131,7.757,7.757,0,0,0,2.5-2.832Zm8.852,8.39q0,2.16,1.492,2.161a1.167,1.167,0,0,0,1.082-.643,3.071,3.071,0,0,0,.359-1.517v-2.626h2.986v1.647A8.313,8.313,0,0,1,248-186.51a6.04,6.04,0,0,1-1.673,2.186,5.858,5.858,0,0,1-2.316,1.132,11.036,11.036,0,0,1-2.572.309,6.554,6.554,0,0,1-4.709-1.467,7.292,7.292,0,0,1-2.034-3.731,8.012,8.012,0,0,1-1.338,2.162,9.093,9.093,0,0,1-2.161,1.827,11.26,11.26,0,0,1-2.986,1.261,14.467,14.467,0,0,1-3.807.463q-4.788,0-6.974-1.981a6.765,6.765,0,0,1-2.187-5.275,7.12,7.12,0,0,1,.72-3.4,6.066,6.066,0,0,1,1.981-2.188,10.336,10.336,0,0,1,3.011-1.338q1.75-.488,3.809-.925t4.375-.9a41.114,41.114,0,0,0,4.682-1.235v-1.6a7.307,7.307,0,0,0-.308-2.11,5.088,5.088,0,0,0-.979-1.827,4.914,4.914,0,0,0-1.724-1.287,5.9,5.9,0,0,0-2.5-.489,14.2,14.2,0,0,0-3.6.386,8.346,8.346,0,0,0-2.572,1.158,4.354,4.354,0,0,1,2.136.721,2.262,2.262,0,0,1,.9,2.007,3.265,3.265,0,0,1-1.056,2.548,4.5,4.5,0,0,1-3.114.952q-4.117,0-4.116-4.014a5.118,5.118,0,0,1,.848-2.779,7.589,7.589,0,0,1,2.47-2.342,14.033,14.033,0,0,1,3.99-1.6,22.383,22.383,0,0,1,5.4-.592,26.091,26.091,0,0,1,4.735.437,13.4,13.4,0,0,1,4.219,1.493,8.5,8.5,0,0,1,3.011,2.882,8.448,8.448,0,0,1,1.158,4.606Z",
                  transform: "translate(-127.346 275.936)",
                  fill: "#2e363a",
                }),
              ],
            }),
          ],
        });
      }
      function K() {
        return (0, B.jsxs)("div", {
          className: "jsx-".concat($.__hash) + " header-root",
          children: [
            (0, B.jsxs)("div", {
              className: "jsx-".concat($.__hash) + " header-description",
              children: [
                (0, B.jsx)("div", {
                  className: "jsx-".concat($.__hash),
                  children: (0, B.jsx)(Q, {}),
                }),
                (0, B.jsx)(d.X6, {
                  className: "title",
                  size: d.X6.sizes.xLarge,
                  children: (0, B.jsx)("h2", {
                    className: "jsx-".concat($.__hash),
                    children: "Guides",
                  }),
                }),
                (0, B.jsx)(d.X6, {
                  style: { margin: 0 },
                  size: d.X6.sizes.medium,
                  children: (0, B.jsx)("h2", {
                    className: "jsx-".concat($.__hash),
                    children: "A Reliable Resource for Just-In-Time Answers",
                  }),
                }),
                (0, B.jsx)(d.P, {
                  style: { margin: 0 },
                  children:
                    "Guides are text-based articles that help you remove roadblocks and solve technical problems faster with reliable, just-in-time answers. With helpful resources like code blocks and real-life examples, guides are easy to search for quick answers or dive deep on a specific technology question.",
                }),
              ],
            }),
            (0, B.jsx)("div", {
              className: "jsx-".concat($.__hash) + " guides-icon",
              children: (0, B.jsx)(J, {}),
            }),
            (0, B.jsx)(i.default, { id: $.__hash, children: $ }),
          ],
        });
      }
      var $ = [
        ".header-root.jsx-1762985090{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;color:".concat(
          c.h1.highOnDark,
          ";padding:40px 80px;background:linear-gradient( 180deg, rgba(117,135,153,0.5) 0%, rgba(117,135,153,0) 100% );}"
        ),
        ".header-description.jsx-1762985090{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:568px;}",
        ".title.jsx-1762985090{font-weight:600;}",
        ".guides-icon.jsx-1762985090{margin-right:70px;}",
      ];
      $.__hash = "1762985090";
      var ee = a(42982),
        te = a(33963),
        ae = a(44416);
      function se(e) {
        var t = e.numberOfPages,
          a = e.currentPage,
          s = e.setCurrentPage,
          n =
            t > 5
              ? (function (e, t) {
                  var a = 3,
                    s = Array.from(Array(e)).map(function (e, t) {
                      return t + 1;
                    });
                  if (t < a)
                    return [].concat((0, ee.Z)(s.slice(0, a)), ["...", e]);
                  if (t > e - a)
                    return [1, "..."].concat((0, ee.Z)(s.slice(e - a, e)));
                  var n = s.slice(
                    t - Math.floor(a / 2) - 1,
                    t + Math.ceil(a / 2) - 1
                  );
                  return [1, "..."].concat((0, ee.Z)(n), ["...", e]);
                })(t, a)
              : (function (e) {
                  for (var t = [], a = 1; a <= e; a++) t.push(a);
                  return t;
                })(t);
        return (0, B.jsxs)("div", {
          className: "jsx-".concat(re.__hash) + " paginate",
          children: [
            1 !== a &&
              (0, B.jsx)("span", {
                onClick: function () {
                  P.j("generic_click", {
                    eventName: "Paginate Left Arrow Click",
                    source: "guides/all",
                    context: "guides",
                    page: a - 1,
                    contentType: "guide",
                  }),
                    s(a - 1);
                },
                className: "jsx-".concat(re.__hash) + " navigate-arrow",
                children: (0, B.jsx)(te.B, {}),
              }),
            (0, B.jsx)("span", {
              className: "jsx-".concat(re.__hash) + " page-container",
              children: (0, B.jsx)(ne, {
                pageArray: n,
                currentPage: a,
                setCurrentPage: s,
              }),
            }),
            a !== t &&
              (0, B.jsx)("span", {
                onClick: function () {
                  P.j("generic_click", {
                    eventName: "Paginate Right Arrow Click",
                    source: "guides/all",
                    context: "guides",
                    page: a + 1,
                    contentType: "guide",
                  }),
                    s(a + 1);
                },
                className: "jsx-".concat(re.__hash) + " navigate-arrow",
                children: (0, B.jsx)(ae.Q, {}),
              }),
            (0, B.jsx)(i.default, { id: re.__hash, children: re }),
          ],
        });
      }
      function ne(e) {
        var t = e.pageArray,
          a = e.currentPage,
          s = e.setCurrentPage;
        return t.map(function (e) {
          return "..." === e
            ? (0, B.jsx)(
                "span",
                { className: "ellipsis", children: "..." },
                "".concat(Math.random())
              )
            : (0, B.jsx)(
                ie,
                { number: e, currentPage: a, setCurrentPage: s },
                "".concat(Math.random())
              );
        });
      }
      function ie(e) {
        var t = e.number,
          a = e.currentPage,
          s = e.setCurrentPage;
        return (0, B.jsx)(
          "span",
          {
            className: "page ".concat(t === a && "active"),
            id: t,
            onClick: function (e) {
              P.j("generic_click", {
                eventName: "Paginate Page Click",
                source: "guides/all",
                context: "guides",
                page: t,
                contentType: "guide",
              }),
                s(t);
            },
            children: "".concat(t),
          },
          t
        );
      }
      var re = [
        ".paginate.jsx-3194714883{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}",
        ".page-container.jsx-3194714883{color:".concat(c.h1.lowOnDark, ";}"),
        ".page-container.jsx-3194714883 .page{margin-right:15px;padding-bottom:9px;cursor:pointer;}",
        ".page-container.jsx-3194714883 .page:hover{border-bottom:3px solid ".concat(
          c.h1.lowOnDark,
          ";}"
        ),
        ".page-container.jsx-3194714883 .page:first-child{margin-left:15px;}",
        ".page-container.jsx-3194714883 .active{color:"
          .concat(c.h1.highOnDark, ";border-bottom:3px solid ")
          .concat(c.Lf.base, ";}"),
        ".page-container.jsx-3194714883 .ellipsis{margin-right:15px;cursor:default;}",
        ".navigate-arrow.jsx-3194714883{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:32px;height:32px;border-radius:50%;cursor:pointer;}",
        ".navigate-arrow.jsx-3194714883:hover{background-color:".concat(
          c.L4[1],
          ";color:black;}"
        ),
      ];
      re.__hash = "3194714883";
      var oe,
        le = (0, q.default)(
          function () {
            return Promise.all([a.e(278), a.e(75)]).then(a.bind(a, 26075));
          },
          {
            ssr: !1,
            loadableGenerated: {
              webpack: function () {
                return [26075];
              },
              modules: [
                "../components/LandingPage/index.js -> ../../components/LandingPage/AddToChannelMsgRenderer",
              ],
            },
          }
        );
      function ce(e) {
        var t = e.guides,
          a = e.userHandle,
          s = (0, N.useState)(""),
          n = s[0],
          r = s[1],
          o = (function (e, t) {
            return t
              ? e.filter(
                  (function (e) {
                    return function (t) {
                      var a = e.toLowerCase();
                      return (
                        t.title.toLowerCase().includes(a) ||
                        t.authorFullName.toLowerCase().includes(a)
                      );
                    };
                  })(t)
                )
              : e;
          })(t, n),
          l = (0, N.useState)(1),
          h = l[0],
          x = l[1],
          f = Math.ceil(o.length / 12),
          u = (0, N.useState)(!1),
          p = u[0],
          j = u[1],
          m = (0, N.useState)(null),
          b = m[0],
          _ = m[1];
        return (
          (0, N.useEffect)(function () {
            P.j("generic_click", {
              eventName: "Landing Page Viewed",
              source: "guides/all",
              context: "guides",
              contentType: "guide",
            });
          }, []),
          (0, N.useEffect)(
            function () {
              clearTimeout(oe),
                (oe = setTimeout(function () {
                  _(null);
                }, 3e3));
            },
            [b]
          ),
          (0, B.jsxs)("div", {
            style: { position: "relative" },
            children: [
              b &&
                (0, B.jsx)("div", {
                  style: { position: "absolute", top: "0", width: "100%" },
                  children: (0, B.jsx)(H.ZP, {
                    color: p ? H.ZP.colors.red : H.ZP.colors.blue,
                    onClick: function () {
                      _(null);
                    },
                    children: (0, B.jsx)(le, { message: b }),
                  }),
                }),
              (0, B.jsx)(K, {}),
              (0, B.jsxs)("div", {
                className: "jsx-".concat(xe.__hash) + " root",
                children: [
                  (0, B.jsxs)("div", {
                    className:
                      "jsx-".concat(xe.__hash) + " menu-and-search-bar",
                    children: [
                      (0, B.jsx)("div", {
                        style: {
                          paddingBottom: (0, g.Z)(30),
                          borderBottom: ""
                            .concat((0, g.Z)(4), " solid ")
                            .concat(c.Lf.base),
                        },
                        className: "jsx-".concat(xe.__hash),
                        children: (0, B.jsx)(d.X6, {
                          size: d.X6.sizes.medium,
                          children: (0, B.jsx)("h2", {
                            className: "jsx-".concat(xe.__hash),
                            children: "Available Guides",
                          }),
                        }),
                      }),
                      (0, B.jsx)(T.ZP, {
                        placeholder: "Search",
                        icon: (0, B.jsx)(M.W, {}),
                        iconAlign: T.ZP.iconAligns.right,
                        appearance: T.ZP.appearances.subtle,
                        value: n,
                        onChange: function (e) {
                          return he(e.target.value, r, x);
                        },
                      }),
                    ],
                  }),
                  (0, B.jsxs)("div", {
                    className: "jsx-".concat(xe.__hash) + " guide-list",
                    children: [
                      o && o.length > 0
                        ? o.slice(12 * h - 12, 12 * h).map(function (e) {
                            return (0,
                            B.jsx)(Y, { guide: e, setIsMessageFromError: j, setMessage: _, userHandle: a }, e.id);
                          })
                        : (0, B.jsx)(A.Z, {
                            heading: (0, B.jsx)(A.Z.Heading, {
                              children: "No results found for ".concat(n),
                            }),
                            caption: (0, B.jsx)(A.Z.Caption, {
                              children:
                                "We couldn't find any guides that match your search term.",
                            }),
                            illustration: (0, B.jsx)(A.Z.Illustration, {
                              name: A.Z.Illustration.names.magnify,
                            }),
                          }),
                      (0, B.jsx)("div", {
                        className: "jsx-".concat(xe.__hash) + " pagination",
                        children:
                          o.length > 0 &&
                          (0, B.jsx)(se, {
                            numberOfPages: f,
                            currentPage: h,
                            setCurrentPage: x,
                          }),
                      }),
                    ],
                  }),
                  (0, B.jsx)(i.default, { id: xe.__hash, children: xe }),
                ],
              }),
            ],
          })
        );
      }
      var de = void 0,
        he = function (e, t, a) {
          de && de.clear(),
            (de = (0, G.debounce)(
              function () {
                P.j("generic_click", {
                  eventName: "Search Guides",
                  source: "guides/all",
                  context: "guides",
                  searchTerm: e,
                  contentType: "guide",
                });
              },
              500,
              !1
            ))(),
            t(e),
            a(1);
        },
        xe = [
          "a.jsx-4142275149{color:inherit;-webkit-text-decoration:none;text-decoration:none;}",
          "a.jsx-4142275149:hover{-webkit-text-decoration:underline;text-decoration:underline;}",
          ".root.jsx-4142275149{overflow:auto;background:"
            .concat(c._Q[1], ";padding-bottom:")
            .concat((0, g.Z)(20), ";color:")
            .concat(c.h1.highOnDark, ";min-height:100vh;}"),
          ".menu-and-search-bar.jsx-4142275149{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:baseline;-webkit-box-align:baseline;-ms-flex-align:baseline;align-items:baseline;padding-top:"
            .concat((0, g.Z)(32), ";margin-right:")
            .concat((0, g.Z)(80), ";margin-left:")
            .concat((0, g.Z)(80), ";}"),
          ".guide-list.jsx-4142275149{margin-right:"
            .concat((0, g.Z)(80), ";margin-left:")
            .concat((0, g.Z)(80), ";}"),
          ".no-results-found.jsx-4142275149{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}",
          ".pagination.jsx-4142275149{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}",
        ];
      xe.__hash = "4142275149";
      var fe = a(21874),
        ue = a.n(fe);
      function pe(e, t) {
        var a = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var s = Object.getOwnPropertySymbols(e);
          t &&
            (s = s.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            a.push.apply(a, s);
        }
        return a;
      }
      function je(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? pe(Object(a), !0).forEach(function (t) {
                (0, n.Z)(e, t, a[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
            : pe(Object(a)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(a, t)
                );
              });
        }
        return e;
      }
      function ge(e) {
        var t = e.guide,
          a = e.index;
        return (0, B.jsxs)("div", {
          "data-ui-is-test-guide":
            "just-plain-react" === t.slug ? "true" : "false",
          className: "jsx-".concat(me.__hash) + " card",
          children: [
            (0, B.jsxs)("a", {
              href: "/guides/".concat(t.slug),
              onClick: function () {
                return P.j("generic_click", {
                  eventName: "Guides Title Clicked",
                  source: "guides/all",
                  context: "guides",
                  authorName: t.authorFullName,
                  position: a + 1,
                  contentId: t.id,
                  contentTitle: t.title,
                  contentType: "guide",
                });
              },
              className: "jsx-".concat(me.__hash),
              children: [
                (0, B.jsx)("div", {
                  className: "jsx-".concat(me.__hash) + " title",
                  children: t.title,
                }),
                (0, B.jsxs)("ul", {
                  className: "jsx-".concat(me.__hash) + " meta",
                  children: [
                    (0, B.jsx)("li", {
                      className: "jsx-".concat(me.__hash),
                      children: (0, w.r)(t.lastPublishedAt),
                    }),
                    (0, B.jsxs)("li", {
                      className: "jsx-".concat(me.__hash),
                      children: [t.minutesToRead, " Min read"],
                    }),
                    t.viewCount > 0 &&
                      (0, B.jsxs)("li", {
                        className: "jsx-".concat(me.__hash),
                        children: [
                          t.viewCount.toLocaleString("en-us"),
                          " View",
                          t.viewCount > 1 ? "s" : "",
                        ],
                      }),
                  ],
                }),
                (0, B.jsxs)("div", {
                  className: "jsx-".concat(me.__hash) + " details",
                  children: [
                    (0, B.jsx)("img", {
                      alt: "Author avatar",
                      src: t.authorAvatarUrl,
                      className: "jsx-".concat(me.__hash),
                    }),
                    (0, B.jsx)("span", {
                      className: "jsx-".concat(me.__hash) + " author-name",
                      children: t.authorFullName,
                    }),
                  ],
                }),
              ],
            }),
            (0, B.jsx)(i.default, { id: me.__hash, children: me }),
          ],
        });
      }
      (0, m.Z)();
      var me = [
        ".card.jsx-4279469256{height:270px;background:".concat(
          c._Q[1],
          ";min-width:300px;max-width:300px;box-sizing:border-box;padding:20px;margin:12px 12px 0 0;cursor:pointer;font-weight:200;}"
        ),
        ".title.jsx-4279469256{font-size:"
          .concat((0, g.Z)(18), ";color:")
          .concat(
            c.UA,
            ";overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;line-height:"
          )
          .concat((0, g.Z)(24), ";max-height:")
          .concat((0, g.Z)(48), ";}"),
        ".card.jsx-4279469256:hover{background:".concat(c._Q[3], ";}"),
        "a.jsx-4279469256{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;color:".concat(
          c.h1.highOnDark,
          ";-webkit-text-decoration:none;text-decoration:none;}"
        ),
        ".details.jsx-4279469256{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}",
        "img.jsx-4279469256{max-width:50px;max-height:50px;border-radius:25px;bottom:20px;right:20px;}",
        ".author-name.jsx-4279469256{margin-left:10px;bottom:37px;right:82px;}",
        ".meta.jsx-4279469256{list-style:none;padding:0;margin:20px 0;font-size:".concat(
          (0, g.Z)(16),
          ";}"
        ),
        ".meta.jsx-4279469256 li.jsx-4279469256{line-height:1.4;font-size:".concat(
          (0, g.Z)(14),
          ";}"
        ),
      ];
      function be(e) {
        var t = e.success,
          a = e.statusCode,
          s = e.guides,
          n = e.userHandle,
          i = e.flags;
        return t
          ? (0, B.jsx)(b.Z, {
              children: (0, B.jsxs)(x.ZP, {
                flags: i,
                children: [
                  (0, B.jsxs)(f.Z, {
                    children: [
                      (0, B.jsx)("title", {
                        children:
                          "An authoritative resource for just in time learning",
                      }),
                      (0, B.jsx)("link", {
                        rel: "stylesheet",
                        href: Z.Y.prismCssUrl,
                      }),
                    ],
                  }),
                  (0, B.jsxs)("div", {
                    className: "outer",
                    children: [
                      (0, B.jsx)(C.Z, { userHandle: n }),
                      (0, B.jsx)(ce, { guides: s, userHandle: n }),
                    ],
                  }),
                  (0, B.jsx)(j.Z, { displayDrift: !1 }),
                  (0, B.jsx)("script", {
                    type: "text/javascript",
                    src: Z.Y.prismJsUrl,
                  }),
                ],
              }),
            })
          : (0, B.jsx)(_.default, { statusCode: a });
      }
      function _e(e) {
        var t = e.success,
          a = e.statusCode,
          s = e.guides,
          n = e.flags;
        return t
          ? (0, B.jsx)(b.Z, {
              children: (0, B.jsxs)(x.ZP, {
                flags: n,
                children: [
                  (0, B.jsx)(f.Z, {
                    children: (0, B.jsx)("title", {
                      className: "jsx-".concat(ke.__hash),
                      children:
                        "An authoritative resource for just in time learning",
                    }),
                  }),
                  (0, B.jsx)(u.Z, {}),
                  (0, B.jsx)(ye, { guides: s }),
                  (0, B.jsx)(p.Z, {}),
                  (0, B.jsx)(j.Z, { displayDrift: !1 }),
                  (0, B.jsx)(i.default, { id: ke.__hash, children: ke }),
                ],
              }),
            })
          : (0, B.jsx)(_.default, { statusCode: a });
      }
      function we(e) {
        return e.isLoggedIn
          ? (0, B.jsx)(be, je({}, e))
          : (0, B.jsx)(_e, je({}, e));
      }
      function ye(e) {
        var t = e.guides;
        return (0, B.jsxs)("main", {
          className: "jsx-".concat(ke.__hash),
          children: [
            (0, B.jsx)("div", {
              className: "jsx-".concat(ke.__hash) + " index-header",
              children: (0, B.jsxs)(h.ZP, {
                name: h.ZP.names.light,
                children: [
                  (0, B.jsx)(d.X6, {
                    size: d.X6.sizes.xLarge,
                    children: (0, B.jsx)("h1", {
                      className: "jsx-".concat(ke.__hash),
                      children: "A reliable resource for just-in-time answers",
                    }),
                  }),
                  (0, B.jsx)(d.P, {
                    children:
                      "Guides are text-based articles that help you remove roadblocks and solve technical problems faster with reliable, just-in-time answers. With helpful resources like code blocks and real-life examples, guides are easy to search for quick answers or dive deep on a specific technology question",
                  }),
                ],
              }),
            }),
            (0, B.jsx)("div", {
              className: "jsx-".concat(ke.__hash) + " card-container",
              children: t.map(function (e, t) {
                return (0, B.jsx)(ge, { guide: e, index: t }, e.id);
              }),
            }),
            (0, B.jsx)(i.default, { id: ke.__hash, children: ke }),
          ],
        });
      }
      (me.__hash = "4279469256"),
        (we.getInitialProps = (function () {
          var e = (0, s.Z)(
            o().mark(function e(t) {
              var a, s, n, i, r, c, d, h, x;
              return o().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (a = t.req), (s = t.res), (e.next = 3), (0, v.ts)(a)
                      );
                    case 3:
                      return (
                        (n = e.sent),
                        (i = !1),
                        n.success &&
                          ((i = n.payload.isLoggedIn),
                          (r = n.payload.hasJwt),
                          (0, k.ZB)(a, s, i, r)),
                        (e.next = 8),
                        (0, v.BZ)(a)
                      );
                    case 8:
                      return (
                        (c = e.sent).success ||
                          ue().error("Failed to get feature flags"),
                        (e.next = 12),
                        (0, y.WE)()
                      );
                    case 12:
                      if ((d = e.sent).success) {
                        e.next = 15;
                        break;
                      }
                      return e.abrupt("return", {
                        success: !1,
                        statusCode: d.metadata.statusCode,
                      });
                    case 15:
                      return (
                        (h = d.payload.guides),
                        (x = l.GYS(l.MRu(l.vgT("lastPublishedAt"))(h))),
                        e.abrupt("return", {
                          guides: x,
                          success: !0,
                          isLoggedIn: i,
                          userHandle: n.payload.userHandle,
                          flags: c.payload,
                        })
                      );
                    case 18:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })());
      var ke = [
        "main.jsx-222196455{background-color:"
          .concat(c.L4[1], ";padding:")
          .concat((0, g.Z)(40), " 0;}"),
        ".index-header.jsx-222196455{max-width:936px;margin:0 auto;padding:0 ".concat(
          (0, g.Z)(12),
          ";}"
        ),
        ".card-container.jsx-222196455{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:row wrap;-ms-flex-flow:row wrap;flex-flow:row wrap;overflow:hidden;margin:0;padding:0 0 0 ".concat(
          (0, g.Z)(12),
          ";-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}"
        ),
      ];
      ke.__hash = "222196455";
      var ve = we;
    },
    70131: function (e, t, a) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/guides",
        function () {
          return a(80633);
        },
      ]);
    },
  },
  function (e) {
    e.O(0, [774, 566, 257, 178, 461, 888, 179], function () {
      return (t = 70131), e((e.s = t));
      var t;
    });
    var t = e.O();
    _N_E = t;
  },
]);
