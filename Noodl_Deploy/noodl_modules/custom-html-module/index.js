!(function (t) {
  var e = {};
  function n(o) {
    if (e[o]) return e[o].exports;
    var r = (e[o] = { i: o, l: !1, exports: {} });
    return t[o].call(r.exports, r, r.exports, n), (r.l = !0), r.exports;
  }
  (n.m = t),
    (n.c = e),
    (n.d = function (t, e, o) {
      n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: o });
    }),
    (n.r = function (t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (n.t = function (t, e) {
      if ((1 & e && (t = n(t)), 8 & e)) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var o = Object.create(null);
      if (
        (n.r(o),
        Object.defineProperty(o, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var r in t)
          n.d(
            o,
            r,
            function (e) {
              return t[e];
            }.bind(null, r)
          );
      return o;
    }),
    (n.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return n.d(e, "a", e), e;
    }),
    (n.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (n.p = ""),
    n((n.s = 1));
})([
  function (t, e) {
    t.exports = React;
  },
  function (t, e, n) {
    function o(t, e) {
      var n =
        ("undefined" != typeof Symbol && t[Symbol.iterator]) || t["@@iterator"];
      if (!n) {
        if (
          Array.isArray(t) ||
          (n = i(t)) ||
          (e && t && "number" == typeof t.length)
        ) {
          n && (t = n);
          var o = 0,
            r = function () {};
          return {
            s: r,
            n: function () {
              return o >= t.length ? { done: !0 } : { done: !1, value: t[o++] };
            },
            e: function (t) {
              throw t;
            },
            f: r,
          };
        }
        throw new TypeError(
          "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      }
      var a,
        u = !0,
        s = !1;
      return {
        s: function () {
          n = n.call(t);
        },
        n: function () {
          var t = n.next();
          return (u = t.done), t;
        },
        e: function (t) {
          (s = !0), (a = t);
        },
        f: function () {
          try {
            u || null == n.return || n.return();
          } finally {
            if (s) throw a;
          }
        },
      };
    }
    function r(t, e) {
      return (
        (function (t) {
          if (Array.isArray(t)) return t;
        })(t) ||
        (function (t, e) {
          var n =
            null == t
              ? null
              : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                t["@@iterator"];
          if (null == n) return;
          var o,
            r,
            i = [],
            a = !0,
            u = !1;
          try {
            for (
              n = n.call(t);
              !(a = (o = n.next()).done) &&
              (i.push(o.value), !e || i.length !== e);
              a = !0
            );
          } catch (t) {
            (u = !0), (r = t);
          } finally {
            try {
              a || null == n.return || n.return();
            } finally {
              if (u) throw r;
            }
          }
          return i;
        })(t, e) ||
        i(t, e) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function i(t, e) {
      if (t) {
        if ("string" == typeof t) return a(t, e);
        var n = Object.prototype.toString.call(t).slice(8, -1);
        return (
          "Object" === n && t.constructor && (n = t.constructor.name),
          "Map" === n || "Set" === n
            ? Array.from(t)
            : "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            ? a(t, e)
            : void 0
        );
      }
    }
    function a(t, e) {
      (null == e || e > t.length) && (e = t.length);
      for (var n = 0, o = new Array(e); n < e; n++) o[n] = t[n];
      return o;
    }
    var u = n(2),
      s = n(0).useRef,
      l = n(0).useEffect,
      c = n(0).useState;
    function p(t) {
      var e = s(null),
        n = r(c(), 2),
        o = n[0],
        i = n[1];
      return (
        l(
          function () {
            if (t.html) {
              var e = t.html;
              t.templateStringAndValue &&
                Object.keys(t.templateStringAndValue).forEach(function (n) {
                  e = e.replaceAll(n, t.templateStringAndValue[n] || "");
                }),
                i(e);
            }
          },
          [t]
        ),
        l(
          function () {
            if (t.runJs && e.current) {
              var n = document.createRange().createContextualFragment(o);
              (e.current.innerHTML = ""), e.current.appendChild(n);
            }
          },
          [o, t.runJs]
        ),
        React.createElement("div", {
          className: t.className,
          style: t.style,
          dangerouslySetInnerHTML: t.runJs ? null : { __html: o },
          ref: e,
        })
      );
    }
    var d = u.defineReactNode({
      name: "module.inlineHtml",
      displayName: "Custom HTML",
      docs: "https://docs.noodl.net/#/modules/custom-html/README.md",
      category: "Visual",
      getReactComponent: function () {
        return p;
      },
      inputProps: {
        html: {
          displayName: "HTML",
          type: { name: "string", codeeditor: "html" },
          default: "",
        },
        runJs: {
          displayName: "Run inline JavaScript",
          type: { name: "boolean" },
          default: !1,
        },
      },
      methods: {
        setTemplateVariable: function (t, e, n) {
          (this.model.inputs[t] = n),
            this.props.templateStringAndValue ||
              (this.props.templateStringAndValue = {}),
            (this.props.templateStringAndValue[e] = n),
            this.forceUpdate();
        },
        registerInputIfNeeded: function (t) {
          this.hasInput(t) ||
            (t.startsWith("prop-") &&
              this.registerInput(t, {
                set: this.setTemplateVariable.bind(
                  this,
                  t.substring("prop-".length),
                  this.model.templateStrings[t]
                ),
              }));
        },
      },
      setup: function (t, e) {
        function n(e) {
          function n() {
            var n = [];
            if (e.parameters.html) {
              e.templateStrings = {};
              var r,
                i = o(e.parameters.html.matchAll(/\{{2}([^}]+)\}{2}/g));
              try {
                for (i.s(); !(r = i.n()).done; ) {
                  match = r.value;
                  var a = match[1].trim(),
                    u = "prop-".concat(a),
                    s = match[0];
                  Object.keys(e.templateStrings).includes(u) ||
                    ((e.templateStrings[u] = s),
                    n.push({
                      name: u,
                      displayName: a,
                      group: "Variables",
                      type: "*",
                      plug: "input",
                    }));
                }
              } catch (t) {
                i.e(t);
              } finally {
                i.f();
              }
              t.editorConnection.sendDynamicPorts(e.id, n);
            }
          }
          n(),
            e.on("parameterUpdated", function (t) {
              n();
            });
        }
        e.on("nodeAdded.module.inlineHtml", function (t) {
          n(t);
        });
        var r,
          i = o(e.getNodesWithType("noodl.module.inlineHtml"));
        try {
          for (i.s(); !(r = i.n()).done; ) {
            n(r.value);
          }
        } catch (t) {
          i.e(t);
        } finally {
          i.f();
        }
      },
    });
    u.defineModule({ reactNodes: [d], nodes: [], setup: function () {} });
  },
  function (t, e) {
    function n(t) {
      return (n =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            })(t);
    }
    var o = {
      purple: "component",
      green: "data",
      default: "default",
      grey: "default",
    };
    (Noodl.defineNode = function (t) {
      var e = {};
      for (var r in ((e.name = t.name),
      (e.displayNodeName = t.displayName),
      (e.usePortAsLabel = t.useInputAsLabel),
      (e.color = o[t.color || "default"]),
      (e.category = t.category || "Modules"),
      (e.getInspectInfo = t.getInspectInfo),
      (e.docs = t.docs),
      (e.initialize = function () {
        this.inputs = {};
        var e = (this.outputs = {}),
          n = this;
        (this.setOutputs = function (t) {
          for (var o in t) (e[o] = t[o]), n.flagOutputDirty(o);
        }),
          (this.clearWarnings = function () {
            this.context.editorConnection &&
              this.nodeScope &&
              this.nodeScope.componentOwner &&
              this.context.editorConnection.clearWarnings(
                this.nodeScope.componentOwner.name,
                this.id
              );
          }.bind(this)),
          (this.sendWarning = function (t, e) {
            this.context.editorConnection &&
              this.nodeScope &&
              this.nodeScope.componentOwner &&
              this.context.editorConnection.sendWarning(
                this.nodeScope.componentOwner.name,
                this.id,
                t,
                { message: e }
              );
          }.bind(this)),
          "function" == typeof t.initialize && t.initialize.apply(this);
      }),
      (e.inputs = {}),
      (e.outputs = {}),
      t.inputs))
        e.inputs[r] = {
          type: "object" === n(t.inputs[r]) ? t.inputs[r].type : t.inputs[r],
          displayName:
            "object" === n(t.inputs[r]) ? t.inputs[r].displayName : void 0,
          group: "object" === n(t.inputs[r]) ? t.inputs[r].group : void 0,
          default: "object" === n(t.inputs[r]) ? t.inputs[r].default : void 0,
          set: (function () {
            var e = r;
            return function (n) {
              (this.inputs[e] = n),
                t.changed &&
                  "function" == typeof t.changed[e] &&
                  t.changed[e].apply(this, [n]);
            };
          })(),
        };
      for (var r in t.signals)
        e.inputs[r] = {
          type: "signal",
          displayName:
            "object" === n(t.signals[r]) ? t.signals[r].displayName : void 0,
          group: "object" === n(t.signals[r]) ? t.signals[r].group : void 0,
          valueChangedToTrue: (function () {
            var e = r;
            return function () {
              var o = this,
                r =
                  "object" === n(t.signals[e])
                    ? t.signals[e].signal
                    : t.signals[e];
              "function" == typeof r &&
                this.scheduleAfterInputsHaveUpdated(function () {
                  r.apply(o);
                });
            };
          })(),
        };
      for (var r in t.outputs)
        "signal" === t.outputs[r]
          ? (e.outputs[r] = { type: "signal" })
          : (e.outputs[r] = {
              type:
                "object" === n(t.outputs[r]) ? t.outputs[r].type : t.outputs[r],
              displayName:
                "object" === n(t.outputs[r])
                  ? t.outputs[r].displayName
                  : void 0,
              group: "object" === n(t.outputs[r]) ? t.outputs[r].group : void 0,
              getter: (function () {
                var t = r;
                return function () {
                  return this.outputs[t];
                };
              })(),
            });
      for (var r in ((e.methods = e.prototypeExtensions = {}), t.methods))
        e.prototypeExtensions[r] = t.methods[r];
      return (
        e.methods.onNodeDeleted &&
          (e.methods._onNodeDeleted = function () {
            this.__proto__.__proto__._onNodeDeleted.call(this),
              e.methods.onNodeDeleted.value.call(this);
          }),
        { node: e, setup: t.setup }
      );
    }),
      (Noodl.defineCollectionNode = function (t) {
        var e = {
          name: t.name,
          category: t.category,
          color: "data",
          inputs: t.inputs,
          outputs: Object.assign(
            {
              Items: "array",
              "Fetch Started": "signal",
              "Fetch Completed": "signal",
            },
            t.outputs || {}
          ),
          signals: Object.assign(
            {
              Fetch: function () {
                var e = this;
                this.sendSignalOnOutput("Fetch Started");
                var n = t.fetch.call(this, function () {
                  e.sendSignalOnOutput("Fetch Completed");
                });
                this.setOutputs({ Items: n });
              },
            },
            t.signals || {}
          ),
        };
        return Noodl.defineNode(e);
      }),
      (Noodl.defineModelNode = function (t) {
        var e = {
          name: t.name,
          category: t.category,
          color: "data",
          inputs: { Id: "string" },
          outputs: { Fetched: "signal" },
          changed: {
            Id: function (t) {
              var e = this;
              this._object &&
                this._changeListener &&
                this._object.off("change", this._changeListener),
                (this._object = Noodl.Object.get(t)),
                (this._changeListener = function (t, n) {
                  var o = {};
                  (o[t] = n), e.setOutputs(o);
                }),
                this._object.on("change", this._changeListener),
                this.setOutputs(this._object.data),
                this.sendSignalOnOutput("Fetched");
            },
          },
          initialize: function () {},
        };
        for (var n in t.properties)
          (e.inputs[n] = t.properties[n]),
            (e.outputs[n] = t.properties[n]),
            (e.changed[n] = (function () {
              var t = n;
              return function (e) {
                this._object && this._object.set(t, e);
              };
            })());
        return Noodl.defineNode(e);
      }),
      (Noodl.defineReactNode = function (t) {
        var e = Noodl.defineNode(t);
        return (
          (e.node.getReactComponent = t.getReactComponent),
          (e.node.inputProps = t.inputProps),
          (e.node.inputCss = t.inputCss),
          (e.node.outputProps = t.outputProps),
          (e.node.setup = t.setup),
          (e.node.frame = t.frame),
          e.node
        );
      }),
      (t.exports = Noodl);
  },
]);
//# sourceMappingURL=index.js.map
