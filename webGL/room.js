/*! For license information please see main.js.LICENSE.txt */
(() => {
  var t = {
      62: (t, s, n) => {
        "use strict";
        function o(t) {
          let s = t[0],
            n = t[1],
            o = t[2];
          return Math.sqrt(s * s + n * n + o * o);
        }
        function e(t, s) {
          return (t[0] = s[0]), (t[1] = s[1]), (t[2] = s[2]), t;
        }
        function i(t, s, n) {
          return (
            (t[0] = s[0] + n[0]), (t[1] = s[1] + n[1]), (t[2] = s[2] + n[2]), t
          );
        }
        function r(t, s, n) {
          return (
            (t[0] = s[0] - n[0]), (t[1] = s[1] - n[1]), (t[2] = s[2] - n[2]), t
          );
        }
        function a(t, s, n) {
          return (t[0] = s[0] * n), (t[1] = s[1] * n), (t[2] = s[2] * n), t;
        }
        function d(t) {
          let s = t[0],
            n = t[1],
            o = t[2];
          return s * s + n * n + o * o;
        }
        function c(t, s) {
          let n = s[0],
            o = s[1],
            e = s[2],
            i = n * n + o * o + e * e;
          return (
            i > 0 && (i = 1 / Math.sqrt(i)),
            (t[0] = s[0] * i),
            (t[1] = s[1] * i),
            (t[2] = s[2] * i),
            t
          );
        }
        function f(t, s) {
          return t[0] * s[0] + t[1] * s[1] + t[2] * s[2];
        }
        function u(t, s, n) {
          let o = s[0],
            e = s[1],
            i = s[2],
            r = n[0],
            a = n[1],
            d = n[2];
          return (
            (t[0] = e * d - i * a),
            (t[1] = i * r - o * d),
            (t[2] = o * a - e * r),
            t
          );
        }
        const m = (function () {
          const t = [0, 0, 0],
            s = [0, 0, 0];
          return function (n, o) {
            e(t, n), e(s, o), c(t, t), c(s, s);
            let i = f(t, s);
            return i > 1 ? 0 : i < -1 ? Math.PI : Math.acos(i);
          };
        })();
        class h extends Array {
          constructor(t = 0, s = t, n = t) {
            return super(t, s, n), this;
          }
          get x() {
            return this[0];
          }
          get y() {
            return this[1];
          }
          get z() {
            return this[2];
          }
          set x(t) {
            this[0] = t;
          }
          set y(t) {
            this[1] = t;
          }
          set z(t) {
            this[2] = t;
          }
          set(t, s = t, n = t) {
            return t.length
              ? this.copy(t)
              : ((function (t, s, n, o) {
                  (t[0] = s), (t[1] = n), (t[2] = o);
                })(this, t, s, n),
                this);
          }
          copy(t) {
            return e(this, t), this;
          }
          add(t, s) {
            return s ? i(this, t, s) : i(this, this, t), this;
          }
          sub(t, s) {
            return s ? r(this, t, s) : r(this, this, t), this;
          }
          multiply(t) {
            var s, n, o;
            return (
              t.length
                ? ((n = this),
                  (o = t),
                  ((s = this)[0] = n[0] * o[0]),
                  (s[1] = n[1] * o[1]),
                  (s[2] = n[2] * o[2]))
                : a(this, this, t),
              this
            );
          }
          inverse(t = this) {
            var s, n;
            return (
              (n = t),
              ((s = this)[0] = 1 / n[0]),
              (s[1] = 1 / n[1]),
              (s[2] = 1 / n[2]),
              this
            );
          }
          len() {
            return o(this);
          }
          distance(t) {
            return t
              ? (function (t, s) {
                  let n = s[0] - t[0],
                    o = s[1] - t[1],
                    e = s[2] - t[2];
                  return Math.sqrt(n * n + o * o + e * e);
                })(this, t)
              : o(this);
          }
          squaredLen() {
            return d(this);
          }
          squaredDistance(t) {
            return t
              ? (function (t, s) {
                  let n = s[0] - t[0],
                    o = s[1] - t[1],
                    e = s[2] - t[2];
                  return n * n + o * o + e * e;
                })(this, t)
              : d(this);
          }
          negate(t = this) {
            var s, n;
            return (
              (n = t),
              ((s = this)[0] = -n[0]),
              (s[1] = -n[1]),
              (s[2] = -n[2]),
              this
            );
          }
          cross(t, s) {
            return s ? u(this, t, s) : u(this, this, t), this;
          }
          scale(t) {
            return a(this, this, t), this;
          }
          normalize() {
            return c(this, this), this;
          }
          dot(t) {
            return f(this, t);
          }
          equals(t) {
            return (
              (s = t), this[0] === s[0] && this[1] === s[1] && this[2] === s[2]
            );
            var s;
          }
          applyMatrix4(t) {
            return (
              (function (t, s, n) {
                let o = s[0],
                  e = s[1],
                  i = s[2],
                  r = n[3] * o + n[7] * e + n[11] * i + n[15];
                (r = r || 1),
                  (t[0] = (n[0] * o + n[4] * e + n[8] * i + n[12]) / r),
                  (t[1] = (n[1] * o + n[5] * e + n[9] * i + n[13]) / r),
                  (t[2] = (n[2] * o + n[6] * e + n[10] * i + n[14]) / r);
              })(this, this, t),
              this
            );
          }
          scaleRotateMatrix4(t) {
            return (
              (function (t, s, n) {
                let o = s[0],
                  e = s[1],
                  i = s[2],
                  r = n[3] * o + n[7] * e + n[11] * i + n[15];
                (r = r || 1),
                  (t[0] = (n[0] * o + n[4] * e + n[8] * i) / r),
                  (t[1] = (n[1] * o + n[5] * e + n[9] * i) / r),
                  (t[2] = (n[2] * o + n[6] * e + n[10] * i) / r);
              })(this, this, t),
              this
            );
          }
          applyQuaternion(t) {
            return (
              (function (t, s, n) {
                let o = s[0],
                  e = s[1],
                  i = s[2],
                  r = n[0],
                  a = n[1],
                  d = n[2],
                  c = a * i - d * e,
                  f = d * o - r * i,
                  u = r * e - a * o,
                  m = a * u - d * f,
                  h = d * c - r * u,
                  l = r * f - a * c,
                  g = 2 * n[3];
                (c *= g),
                  (f *= g),
                  (u *= g),
                  (m *= 2),
                  (h *= 2),
                  (l *= 2),
                  (t[0] = o + c + m),
                  (t[1] = e + f + h),
                  (t[2] = i + u + l);
              })(this, this, t),
              this
            );
          }
          angle(t) {
            return m(this, t);
          }
          lerp(t, s) {
            return (
              (function (t, s, n, o) {
                let e = s[0],
                  i = s[1],
                  r = s[2];
                (t[0] = e + o * (n[0] - e)),
                  (t[1] = i + o * (n[1] - i)),
                  (t[2] = r + o * (n[2] - r));
              })(this, this, t, s),
              this
            );
          }
          clone() {
            return new h(this[0], this[1], this[2]);
          }
          fromArray(t, s = 0) {
            return (
              (this[0] = t[s]), (this[1] = t[s + 1]), (this[2] = t[s + 2]), this
            );
          }
          toArray(t = [], s = 0) {
            return (
              (t[s] = this[0]), (t[s + 1] = this[1]), (t[s + 2] = this[2]), t
            );
          }
          transformDirection(t) {
            const s = this[0],
              n = this[1],
              o = this[2];
            return (
              (this[0] = t[0] * s + t[4] * n + t[8] * o),
              (this[1] = t[1] * s + t[5] * n + t[9] * o),
              (this[2] = t[2] * s + t[6] * n + t[10] * o),
              this.normalize()
            );
          }
        }
        const l = new h();
        let g = 1;
        class x {
          constructor({
            canvas: t = document.createElement("canvas"),
            width: s = 300,
            height: n = 150,
            dpr: o = 1,
            alpha: e = !1,
            depth: i = !0,
            stencil: r = !1,
            antialias: a = !1,
            premultipliedAlpha: d = !1,
            preserveDrawingBuffer: c = !1,
            powerPreference: f = "default",
            autoClear: u = !0,
            webgl: m = 2,
          } = {}) {
            const h = {
              alpha: e,
              depth: i,
              stencil: r,
              antialias: a,
              premultipliedAlpha: d,
              preserveDrawingBuffer: c,
              powerPreference: f,
            };
            (this.dpr = o),
              (this.alpha = e),
              (this.color = !0),
              (this.depth = i),
              (this.stencil = r),
              (this.premultipliedAlpha = d),
              (this.autoClear = u),
              (this.id = g++),
              2 === m && (this.gl = t.getContext("webgl2", h)),
              (this.isWebgl2 = !!this.gl),
              this.gl ||
                (this.gl =
                  t.getContext("webgl", h) ||
                  t.getContext("experimental-webgl", h)),
              (this.gl.renderer = this),
              this.setSize(s, n),
              (this.state = {}),
              (this.state.blendFunc = { src: this.gl.ONE, dst: this.gl.ZERO }),
              (this.state.blendEquation = { modeRGB: this.gl.FUNC_ADD }),
              (this.state.cullFace = null),
              (this.state.frontFace = this.gl.CCW),
              (this.state.depthMask = !0),
              (this.state.depthFunc = this.gl.LESS),
              (this.state.premultiplyAlpha = !1),
              (this.state.flipY = !1),
              (this.state.unpackAlignment = 4),
              (this.state.framebuffer = null),
              (this.state.viewport = { width: null, height: null }),
              (this.state.textureUnits = []),
              (this.state.activeTextureUnit = 0),
              (this.state.boundBuffer = null),
              (this.state.uniformLocations = new Map()),
              (this.extensions = {}),
              this.isWebgl2
                ? (this.getExtension("EXT_color_buffer_float"),
                  this.getExtension("OES_texture_float_linear"))
                : (this.getExtension("OES_texture_float"),
                  this.getExtension("OES_texture_float_linear"),
                  this.getExtension("OES_texture_half_float"),
                  this.getExtension("OES_texture_half_float_linear"),
                  this.getExtension("OES_element_index_uint"),
                  this.getExtension("OES_standard_derivatives"),
                  this.getExtension("EXT_sRGB"),
                  this.getExtension("WEBGL_depth_texture"),
                  this.getExtension("WEBGL_draw_buffers")),
              (this.vertexAttribDivisor = this.getExtension(
                "ANGLE_instanced_arrays",
                "vertexAttribDivisor",
                "vertexAttribDivisorANGLE"
              )),
              (this.drawArraysInstanced = this.getExtension(
                "ANGLE_instanced_arrays",
                "drawArraysInstanced",
                "drawArraysInstancedANGLE"
              )),
              (this.drawElementsInstanced = this.getExtension(
                "ANGLE_instanced_arrays",
                "drawElementsInstanced",
                "drawElementsInstancedANGLE"
              )),
              (this.createVertexArray = this.getExtension(
                "OES_vertex_array_object",
                "createVertexArray",
                "createVertexArrayOES"
              )),
              (this.bindVertexArray = this.getExtension(
                "OES_vertex_array_object",
                "bindVertexArray",
                "bindVertexArrayOES"
              )),
              (this.deleteVertexArray = this.getExtension(
                "OES_vertex_array_object",
                "deleteVertexArray",
                "deleteVertexArrayOES"
              )),
              (this.drawBuffers = this.getExtension(
                "WEBGL_draw_buffers",
                "drawBuffers",
                "drawBuffersWEBGL"
              )),
              (this.parameters = {}),
              (this.parameters.maxTextureUnits = this.gl.getParameter(
                this.gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS
              )),
              (this.parameters.maxAnisotropy = this.getExtension(
                "EXT_texture_filter_anisotropic"
              )
                ? this.gl.getParameter(
                    this.getExtension("EXT_texture_filter_anisotropic")
                      .MAX_TEXTURE_MAX_ANISOTROPY_EXT
                  )
                : 0);
          }
          setSize(t, s) {
            (this.width = t),
              (this.height = s),
              (this.gl.canvas.width = t * this.dpr),
              (this.gl.canvas.height = s * this.dpr),
              Object.assign(this.gl.canvas.style, {
                width: t + "px",
                height: s + "px",
              });
          }
          setViewport(t, s) {
            (this.state.viewport.width === t &&
              this.state.viewport.height === s) ||
              ((this.state.viewport.width = t),
              (this.state.viewport.height = s),
              this.gl.viewport(0, 0, t, s));
          }
          enable(t) {
            !0 !== this.state[t] && (this.gl.enable(t), (this.state[t] = !0));
          }
          disable(t) {
            !1 !== this.state[t] && (this.gl.disable(t), (this.state[t] = !1));
          }
          setBlendFunc(t, s, n, o) {
            (this.state.blendFunc.src === t &&
              this.state.blendFunc.dst === s &&
              this.state.blendFunc.srcAlpha === n &&
              this.state.blendFunc.dstAlpha === o) ||
              ((this.state.blendFunc.src = t),
              (this.state.blendFunc.dst = s),
              (this.state.blendFunc.srcAlpha = n),
              (this.state.blendFunc.dstAlpha = o),
              void 0 !== n
                ? this.gl.blendFuncSeparate(t, s, n, o)
                : this.gl.blendFunc(t, s));
          }
          setBlendEquation(t, s) {
            (t = t || this.gl.FUNC_ADD),
              (this.state.blendEquation.modeRGB === t &&
                this.state.blendEquation.modeAlpha === s) ||
                ((this.state.blendEquation.modeRGB = t),
                (this.state.blendEquation.modeAlpha = s),
                void 0 !== s
                  ? this.gl.blendEquationSeparate(t, s)
                  : this.gl.blendEquation(t));
          }
          setCullFace(t) {
            this.state.cullFace !== t &&
              ((this.state.cullFace = t), this.gl.cullFace(t));
          }
          setFrontFace(t) {
            this.state.frontFace !== t &&
              ((this.state.frontFace = t), this.gl.frontFace(t));
          }
          setDepthMask(t) {
            this.state.depthMask !== t &&
              ((this.state.depthMask = t), this.gl.depthMask(t));
          }
          setDepthFunc(t) {
            this.state.depthFunc !== t &&
              ((this.state.depthFunc = t), this.gl.depthFunc(t));
          }
          activeTexture(t) {
            this.state.activeTextureUnit !== t &&
              ((this.state.activeTextureUnit = t),
              this.gl.activeTexture(this.gl.TEXTURE0 + t));
          }
          bindFramebuffer({
            target: t = this.gl.FRAMEBUFFER,
            buffer: s = null,
          } = {}) {
            this.state.framebuffer !== s &&
              ((this.state.framebuffer = s), this.gl.bindFramebuffer(t, s));
          }
          getExtension(t, s, n) {
            return s && this.gl[s]
              ? this.gl[s].bind(this.gl)
              : (this.extensions[t] ||
                  (this.extensions[t] = this.gl.getExtension(t)),
                s
                  ? this.extensions[t]
                    ? this.extensions[t][n].bind(this.extensions[t])
                    : null
                  : this.extensions[t]);
          }
          sortOpaque(t, s) {
            return t.renderOrder !== s.renderOrder
              ? t.renderOrder - s.renderOrder
              : t.program.id !== s.program.id
              ? t.program.id - s.program.id
              : t.zDepth !== s.zDepth
              ? t.zDepth - s.zDepth
              : s.id - t.id;
          }
          sortTransparent(t, s) {
            return t.renderOrder !== s.renderOrder
              ? t.renderOrder - s.renderOrder
              : t.zDepth !== s.zDepth
              ? s.zDepth - t.zDepth
              : s.id - t.id;
          }
          sortUI(t, s) {
            return t.renderOrder !== s.renderOrder
              ? t.renderOrder - s.renderOrder
              : t.program.id !== s.program.id
              ? t.program.id - s.program.id
              : s.id - t.id;
          }
          getRenderList({ scene: t, camera: s, frustumCull: n, sort: o }) {
            let e = [];
            if (
              (s && n && s.updateFrustum(),
              t.traverse((t) => {
                if (!t.visible) return !0;
                t.draw &&
                  ((n && t.frustumCulled && s && !s.frustumIntersectsMesh(t)) ||
                    e.push(t));
              }),
              o)
            ) {
              const t = [],
                n = [],
                o = [];
              e.forEach((e) => {
                e.program.transparent
                  ? e.program.depthTest
                    ? n.push(e)
                    : o.push(e)
                  : t.push(e),
                  (e.zDepth = 0),
                  0 === e.renderOrder &&
                    e.program.depthTest &&
                    s &&
                    (e.worldMatrix.getTranslation(l),
                    l.applyMatrix4(s.projectionViewMatrix),
                    (e.zDepth = l.z));
              }),
                t.sort(this.sortOpaque),
                n.sort(this.sortTransparent),
                o.sort(this.sortUI),
                (e = t.concat(n, o));
            }
            return e;
          }
          render({
            scene: t,
            camera: s,
            target: n = null,
            update: o = !0,
            sort: e = !0,
            frustumCull: i = !0,
            clear: r,
          }) {
            null === n
              ? (this.bindFramebuffer(),
                this.setViewport(this.width * this.dpr, this.height * this.dpr))
              : (this.bindFramebuffer(n), this.setViewport(n.width, n.height)),
              (r || (this.autoClear && !1 !== r)) &&
                (!this.depth ||
                  (n && !n.depth) ||
                  (this.enable(this.gl.DEPTH_TEST), this.setDepthMask(!0)),
                this.gl.clear(
                  (this.color ? this.gl.COLOR_BUFFER_BIT : 0) |
                    (this.depth ? this.gl.DEPTH_BUFFER_BIT : 0) |
                    (this.stencil ? this.gl.STENCIL_BUFFER_BIT : 0)
                )),
              o && t.updateMatrixWorld(),
              s && s.updateMatrixWorld(),
              this.getRenderList({
                scene: t,
                camera: s,
                frustumCull: i,
                sort: e,
              }).forEach((t) => {
                t.draw({ camera: s });
              });
          }
        }
        function p(t, s, n) {
          let o = s[0],
            e = s[1],
            i = s[2],
            r = s[3],
            a = n[0],
            d = n[1],
            c = n[2],
            f = n[3];
          return (
            (t[0] = o * f + r * a + e * c - i * d),
            (t[1] = e * f + r * d + i * a - o * c),
            (t[2] = i * f + r * c + o * d - e * a),
            (t[3] = r * f - o * a - e * d - i * c),
            t
          );
        }
        class y extends Array {
          constructor(t = 0, s = 0, n = 0, o = 1) {
            return super(t, s, n, o), (this.onChange = () => {}), this;
          }
          get x() {
            return this[0];
          }
          get y() {
            return this[1];
          }
          get z() {
            return this[2];
          }
          get w() {
            return this[3];
          }
          set x(t) {
            (this[0] = t), this.onChange();
          }
          set y(t) {
            (this[1] = t), this.onChange();
          }
          set z(t) {
            (this[2] = t), this.onChange();
          }
          set w(t) {
            (this[3] = t), this.onChange();
          }
          identity() {
            var t;
            return (
              ((t = this)[0] = 0),
              (t[1] = 0),
              (t[2] = 0),
              (t[3] = 1),
              this.onChange(),
              this
            );
          }
          set(t, s, n, o) {
            return t.length
              ? this.copy(t)
              : ((function (t, s, n, o, e) {
                  (t[0] = s), (t[1] = n), (t[2] = o), (t[3] = e);
                })(this, t, s, n, o),
                this.onChange(),
                this);
          }
          rotateX(t) {
            return (
              (function (t, s, n) {
                n *= 0.5;
                let o = s[0],
                  e = s[1],
                  i = s[2],
                  r = s[3],
                  a = Math.sin(n),
                  d = Math.cos(n);
                (t[0] = o * d + r * a),
                  (t[1] = e * d + i * a),
                  (t[2] = i * d - e * a),
                  (t[3] = r * d - o * a);
              })(this, this, t),
              this.onChange(),
              this
            );
          }
          rotateY(t) {
            return (
              (function (t, s, n) {
                n *= 0.5;
                let o = s[0],
                  e = s[1],
                  i = s[2],
                  r = s[3],
                  a = Math.sin(n),
                  d = Math.cos(n);
                (t[0] = o * d - i * a),
                  (t[1] = e * d + r * a),
                  (t[2] = i * d + o * a),
                  (t[3] = r * d - e * a);
              })(this, this, t),
              this.onChange(),
              this
            );
          }
          rotateZ(t) {
            return (
              (function (t, s, n) {
                n *= 0.5;
                let o = s[0],
                  e = s[1],
                  i = s[2],
                  r = s[3],
                  a = Math.sin(n),
                  d = Math.cos(n);
                (t[0] = o * d + e * a),
                  (t[1] = e * d - o * a),
                  (t[2] = i * d + r * a),
                  (t[3] = r * d - i * a);
              })(this, this, t),
              this.onChange(),
              this
            );
          }
          inverse(t = this) {
            return (
              (function (t, s) {
                let n = s[0],
                  o = s[1],
                  e = s[2],
                  i = s[3],
                  r = n * n + o * o + e * e + i * i,
                  a = r ? 1 / r : 0;
                (t[0] = -n * a),
                  (t[1] = -o * a),
                  (t[2] = -e * a),
                  (t[3] = i * a);
              })(this, t),
              this.onChange(),
              this
            );
          }
          conjugate(t = this) {
            var s, n;
            return (
              (n = t),
              ((s = this)[0] = -n[0]),
              (s[1] = -n[1]),
              (s[2] = -n[2]),
              (s[3] = n[3]),
              this.onChange(),
              this
            );
          }
          copy(t) {
            return (
              (n = t),
              ((s = this)[0] = n[0]),
              (s[1] = n[1]),
              (s[2] = n[2]),
              (s[3] = n[3]),
              this.onChange(),
              this
            );
            var s, n;
          }
          normalize(t = this) {
            return (
              (function (t, s) {
                let n = s[0],
                  o = s[1],
                  e = s[2],
                  i = s[3],
                  r = n * n + o * o + e * e + i * i;
                r > 0 && (r = 1 / Math.sqrt(r)),
                  (t[0] = n * r),
                  (t[1] = o * r),
                  (t[2] = e * r),
                  (t[3] = i * r);
              })(this, t),
              this.onChange(),
              this
            );
          }
          multiply(t, s) {
            return s ? p(this, t, s) : p(this, this, t), this.onChange(), this;
          }
          dot(t) {
            return (
              (n = t),
              (s = this)[0] * n[0] + s[1] * n[1] + s[2] * n[2] + s[3] * n[3]
            );
            var s, n;
          }
          fromMatrix3(t) {
            return (
              (function (t, s) {
                let n,
                  o = s[0] + s[4] + s[8];
                if (o > 0)
                  (n = Math.sqrt(o + 1)),
                    (t[3] = 0.5 * n),
                    (n = 0.5 / n),
                    (t[0] = (s[5] - s[7]) * n),
                    (t[1] = (s[6] - s[2]) * n),
                    (t[2] = (s[1] - s[3]) * n);
                else {
                  let o = 0;
                  s[4] > s[0] && (o = 1), s[8] > s[3 * o + o] && (o = 2);
                  let e = (o + 1) % 3,
                    i = (o + 2) % 3;
                  (n = Math.sqrt(
                    s[3 * o + o] - s[3 * e + e] - s[3 * i + i] + 1
                  )),
                    (t[o] = 0.5 * n),
                    (n = 0.5 / n),
                    (t[3] = (s[3 * e + i] - s[3 * i + e]) * n),
                    (t[e] = (s[3 * e + o] + s[3 * o + e]) * n),
                    (t[i] = (s[3 * i + o] + s[3 * o + i]) * n);
                }
              })(this, t),
              this.onChange(),
              this
            );
          }
          fromEuler(t) {
            return (
              (function (t, s, n = "YXZ") {
                let o = Math.sin(0.5 * s[0]),
                  e = Math.cos(0.5 * s[0]),
                  i = Math.sin(0.5 * s[1]),
                  r = Math.cos(0.5 * s[1]),
                  a = Math.sin(0.5 * s[2]),
                  d = Math.cos(0.5 * s[2]);
                "XYZ" === n
                  ? ((t[0] = o * r * d + e * i * a),
                    (t[1] = e * i * d - o * r * a),
                    (t[2] = e * r * a + o * i * d),
                    (t[3] = e * r * d - o * i * a))
                  : "YXZ" === n
                  ? ((t[0] = o * r * d + e * i * a),
                    (t[1] = e * i * d - o * r * a),
                    (t[2] = e * r * a - o * i * d),
                    (t[3] = e * r * d + o * i * a))
                  : "ZXY" === n
                  ? ((t[0] = o * r * d - e * i * a),
                    (t[1] = e * i * d + o * r * a),
                    (t[2] = e * r * a + o * i * d),
                    (t[3] = e * r * d - o * i * a))
                  : "ZYX" === n
                  ? ((t[0] = o * r * d - e * i * a),
                    (t[1] = e * i * d + o * r * a),
                    (t[2] = e * r * a - o * i * d),
                    (t[3] = e * r * d + o * i * a))
                  : "YZX" === n
                  ? ((t[0] = o * r * d + e * i * a),
                    (t[1] = e * i * d + o * r * a),
                    (t[2] = e * r * a - o * i * d),
                    (t[3] = e * r * d - o * i * a))
                  : "XZY" === n &&
                    ((t[0] = o * r * d - e * i * a),
                    (t[1] = e * i * d - o * r * a),
                    (t[2] = e * r * a + o * i * d),
                    (t[3] = e * r * d + o * i * a));
              })(this, t, t.order),
              this
            );
          }
          fromAxisAngle(t, s) {
            return (
              (function (t, s, n) {
                n *= 0.5;
                let o = Math.sin(n);
                (t[0] = o * s[0]),
                  (t[1] = o * s[1]),
                  (t[2] = o * s[2]),
                  (t[3] = Math.cos(n));
              })(this, t, s),
              this
            );
          }
          slerp(t, s) {
            return (
              (function (t, s, n, o) {
                let e,
                  i,
                  r,
                  a,
                  d,
                  c = s[0],
                  f = s[1],
                  u = s[2],
                  m = s[3],
                  h = n[0],
                  l = n[1],
                  g = n[2],
                  x = n[3];
                (i = c * h + f * l + u * g + m * x),
                  i < 0 && ((i = -i), (h = -h), (l = -l), (g = -g), (x = -x)),
                  1 - i > 1e-6
                    ? ((e = Math.acos(i)),
                      (r = Math.sin(e)),
                      (a = Math.sin((1 - o) * e) / r),
                      (d = Math.sin(o * e) / r))
                    : ((a = 1 - o), (d = o)),
                  (t[0] = a * c + d * h),
                  (t[1] = a * f + d * l),
                  (t[2] = a * u + d * g),
                  (t[3] = a * m + d * x);
              })(this, this, t, s),
              this
            );
          }
          fromArray(t, s = 0) {
            return (
              (this[0] = t[s]),
              (this[1] = t[s + 1]),
              (this[2] = t[s + 2]),
              (this[3] = t[s + 3]),
              this
            );
          }
          toArray(t = [], s = 0) {
            return (
              (t[s] = this[0]),
              (t[s + 1] = this[1]),
              (t[s + 2] = this[2]),
              (t[s + 3] = this[3]),
              t
            );
          }
        }
        function w(t, s, n) {
          let o = s[0],
            e = s[1],
            i = s[2],
            r = s[3],
            a = s[4],
            d = s[5],
            c = s[6],
            f = s[7],
            u = s[8],
            m = s[9],
            h = s[10],
            l = s[11],
            g = s[12],
            x = s[13],
            p = s[14],
            y = s[15],
            w = n[0],
            v = n[1],
            b = n[2],
            M = n[3];
          return (
            (t[0] = w * o + v * a + b * u + M * g),
            (t[1] = w * e + v * d + b * m + M * x),
            (t[2] = w * i + v * c + b * h + M * p),
            (t[3] = w * r + v * f + b * l + M * y),
            (w = n[4]),
            (v = n[5]),
            (b = n[6]),
            (M = n[7]),
            (t[4] = w * o + v * a + b * u + M * g),
            (t[5] = w * e + v * d + b * m + M * x),
            (t[6] = w * i + v * c + b * h + M * p),
            (t[7] = w * r + v * f + b * l + M * y),
            (w = n[8]),
            (v = n[9]),
            (b = n[10]),
            (M = n[11]),
            (t[8] = w * o + v * a + b * u + M * g),
            (t[9] = w * e + v * d + b * m + M * x),
            (t[10] = w * i + v * c + b * h + M * p),
            (t[11] = w * r + v * f + b * l + M * y),
            (w = n[12]),
            (v = n[13]),
            (b = n[14]),
            (M = n[15]),
            (t[12] = w * o + v * a + b * u + M * g),
            (t[13] = w * e + v * d + b * m + M * x),
            (t[14] = w * i + v * c + b * h + M * p),
            (t[15] = w * r + v * f + b * l + M * y),
            t
          );
        }
        function v(t, s) {
          let n = s[0],
            o = s[1],
            e = s[2],
            i = s[4],
            r = s[5],
            a = s[6],
            d = s[8],
            c = s[9],
            f = s[10];
          return (
            (t[0] = Math.hypot(n, o, e)),
            (t[1] = Math.hypot(i, r, a)),
            (t[2] = Math.hypot(d, c, f)),
            t
          );
        }
        const b = (function () {
          const t = [0, 0, 0];
          return function (s, n) {
            let o = t;
            v(o, n);
            let e = 1 / o[0],
              i = 1 / o[1],
              r = 1 / o[2],
              a = n[0] * e,
              d = n[1] * i,
              c = n[2] * r,
              f = n[4] * e,
              u = n[5] * i,
              m = n[6] * r,
              h = n[8] * e,
              l = n[9] * i,
              g = n[10] * r,
              x = a + u + g,
              p = 0;
            return (
              x > 0
                ? ((p = 2 * Math.sqrt(x + 1)),
                  (s[3] = 0.25 * p),
                  (s[0] = (m - l) / p),
                  (s[1] = (h - c) / p),
                  (s[2] = (d - f) / p))
                : a > u && a > g
                ? ((p = 2 * Math.sqrt(1 + a - u - g)),
                  (s[3] = (m - l) / p),
                  (s[0] = 0.25 * p),
                  (s[1] = (d + f) / p),
                  (s[2] = (h + c) / p))
                : u > g
                ? ((p = 2 * Math.sqrt(1 + u - a - g)),
                  (s[3] = (h - c) / p),
                  (s[0] = (d + f) / p),
                  (s[1] = 0.25 * p),
                  (s[2] = (m + l) / p))
                : ((p = 2 * Math.sqrt(1 + g - a - u)),
                  (s[3] = (d - f) / p),
                  (s[0] = (h + c) / p),
                  (s[1] = (m + l) / p),
                  (s[2] = 0.25 * p)),
              s
            );
          };
        })();
        class M extends Array {
          constructor(
            t = 1,
            s = 0,
            n = 0,
            o = 0,
            e = 0,
            i = 1,
            r = 0,
            a = 0,
            d = 0,
            c = 0,
            f = 1,
            u = 0,
            m = 0,
            h = 0,
            l = 0,
            g = 1
          ) {
            return super(t, s, n, o, e, i, r, a, d, c, f, u, m, h, l, g), this;
          }
          get x() {
            return this[12];
          }
          get y() {
            return this[13];
          }
          get z() {
            return this[14];
          }
          get w() {
            return this[15];
          }
          set x(t) {
            this[12] = t;
          }
          set y(t) {
            this[13] = t;
          }
          set z(t) {
            this[14] = t;
          }
          set w(t) {
            this[15] = t;
          }
          set(t, s, n, o, e, i, r, a, d, c, f, u, m, h, l, g) {
            return t.length
              ? this.copy(t)
              : ((function (t, s, n, o, e, i, r, a, d, c, f, u, m, h, l, g, x) {
                  (t[0] = s),
                    (t[1] = n),
                    (t[2] = o),
                    (t[3] = e),
                    (t[4] = i),
                    (t[5] = r),
                    (t[6] = a),
                    (t[7] = d),
                    (t[8] = c),
                    (t[9] = f),
                    (t[10] = u),
                    (t[11] = m),
                    (t[12] = h),
                    (t[13] = l),
                    (t[14] = g),
                    (t[15] = x);
                })(this, t, s, n, o, e, i, r, a, d, c, f, u, m, h, l, g),
                this);
          }
          translate(t, s = this) {
            return (
              (function (t, s, n) {
                let o,
                  e,
                  i,
                  r,
                  a,
                  d,
                  c,
                  f,
                  u,
                  m,
                  h,
                  l,
                  g = n[0],
                  x = n[1],
                  p = n[2];
                s === t
                  ? ((t[12] = s[0] * g + s[4] * x + s[8] * p + s[12]),
                    (t[13] = s[1] * g + s[5] * x + s[9] * p + s[13]),
                    (t[14] = s[2] * g + s[6] * x + s[10] * p + s[14]),
                    (t[15] = s[3] * g + s[7] * x + s[11] * p + s[15]))
                  : ((o = s[0]),
                    (e = s[1]),
                    (i = s[2]),
                    (r = s[3]),
                    (a = s[4]),
                    (d = s[5]),
                    (c = s[6]),
                    (f = s[7]),
                    (u = s[8]),
                    (m = s[9]),
                    (h = s[10]),
                    (l = s[11]),
                    (t[0] = o),
                    (t[1] = e),
                    (t[2] = i),
                    (t[3] = r),
                    (t[4] = a),
                    (t[5] = d),
                    (t[6] = c),
                    (t[7] = f),
                    (t[8] = u),
                    (t[9] = m),
                    (t[10] = h),
                    (t[11] = l),
                    (t[12] = o * g + a * x + u * p + s[12]),
                    (t[13] = e * g + d * x + m * p + s[13]),
                    (t[14] = i * g + c * x + h * p + s[14]),
                    (t[15] = r * g + f * x + l * p + s[15]));
              })(this, s, t),
              this
            );
          }
          rotate(t, s, n = this) {
            return (
              (function (t, s, n, o) {
                let e,
                  i,
                  r,
                  a,
                  d,
                  c,
                  f,
                  u,
                  m,
                  h,
                  l,
                  g,
                  x,
                  p,
                  y,
                  w,
                  v,
                  b,
                  M,
                  E,
                  A,
                  S,
                  T,
                  F,
                  _ = o[0],
                  C = o[1],
                  P = o[2],
                  R = Math.hypot(_, C, P);
                Math.abs(R) < 1e-6 ||
                  ((R = 1 / R),
                  (_ *= R),
                  (C *= R),
                  (P *= R),
                  (e = Math.sin(n)),
                  (i = Math.cos(n)),
                  (r = 1 - i),
                  (a = s[0]),
                  (d = s[1]),
                  (c = s[2]),
                  (f = s[3]),
                  (u = s[4]),
                  (m = s[5]),
                  (h = s[6]),
                  (l = s[7]),
                  (g = s[8]),
                  (x = s[9]),
                  (p = s[10]),
                  (y = s[11]),
                  (w = _ * _ * r + i),
                  (v = C * _ * r + P * e),
                  (b = P * _ * r - C * e),
                  (M = _ * C * r - P * e),
                  (E = C * C * r + i),
                  (A = P * C * r + _ * e),
                  (S = _ * P * r + C * e),
                  (T = C * P * r - _ * e),
                  (F = P * P * r + i),
                  (t[0] = a * w + u * v + g * b),
                  (t[1] = d * w + m * v + x * b),
                  (t[2] = c * w + h * v + p * b),
                  (t[3] = f * w + l * v + y * b),
                  (t[4] = a * M + u * E + g * A),
                  (t[5] = d * M + m * E + x * A),
                  (t[6] = c * M + h * E + p * A),
                  (t[7] = f * M + l * E + y * A),
                  (t[8] = a * S + u * T + g * F),
                  (t[9] = d * S + m * T + x * F),
                  (t[10] = c * S + h * T + p * F),
                  (t[11] = f * S + l * T + y * F),
                  s !== t &&
                    ((t[12] = s[12]),
                    (t[13] = s[13]),
                    (t[14] = s[14]),
                    (t[15] = s[15])));
              })(this, n, t, s),
              this
            );
          }
          scale(t, s = this) {
            return (
              (function (t, s, n) {
                let o = n[0],
                  e = n[1],
                  i = n[2];
                (t[0] = s[0] * o),
                  (t[1] = s[1] * o),
                  (t[2] = s[2] * o),
                  (t[3] = s[3] * o),
                  (t[4] = s[4] * e),
                  (t[5] = s[5] * e),
                  (t[6] = s[6] * e),
                  (t[7] = s[7] * e),
                  (t[8] = s[8] * i),
                  (t[9] = s[9] * i),
                  (t[10] = s[10] * i),
                  (t[11] = s[11] * i),
                  (t[12] = s[12]),
                  (t[13] = s[13]),
                  (t[14] = s[14]),
                  (t[15] = s[15]);
              })(this, s, "number" == typeof t ? [t, t, t] : t),
              this
            );
          }
          multiply(t, s) {
            return s ? w(this, t, s) : w(this, this, t), this;
          }
          identity() {
            var t;
            return (
              ((t = this)[0] = 1),
              (t[1] = 0),
              (t[2] = 0),
              (t[3] = 0),
              (t[4] = 0),
              (t[5] = 1),
              (t[6] = 0),
              (t[7] = 0),
              (t[8] = 0),
              (t[9] = 0),
              (t[10] = 1),
              (t[11] = 0),
              (t[12] = 0),
              (t[13] = 0),
              (t[14] = 0),
              (t[15] = 1),
              this
            );
          }
          copy(t) {
            var s, n;
            return (
              (n = t),
              ((s = this)[0] = n[0]),
              (s[1] = n[1]),
              (s[2] = n[2]),
              (s[3] = n[3]),
              (s[4] = n[4]),
              (s[5] = n[5]),
              (s[6] = n[6]),
              (s[7] = n[7]),
              (s[8] = n[8]),
              (s[9] = n[9]),
              (s[10] = n[10]),
              (s[11] = n[11]),
              (s[12] = n[12]),
              (s[13] = n[13]),
              (s[14] = n[14]),
              (s[15] = n[15]),
              this
            );
          }
          fromPerspective({ fov: t, aspect: s, near: n, far: o } = {}) {
            return (
              (function (t, s, n, o, e) {
                let i = 1 / Math.tan(s / 2),
                  r = 1 / (o - e);
                (t[0] = i / n),
                  (t[1] = 0),
                  (t[2] = 0),
                  (t[3] = 0),
                  (t[4] = 0),
                  (t[5] = i),
                  (t[6] = 0),
                  (t[7] = 0),
                  (t[8] = 0),
                  (t[9] = 0),
                  (t[10] = (e + o) * r),
                  (t[11] = -1),
                  (t[12] = 0),
                  (t[13] = 0),
                  (t[14] = 2 * e * o * r),
                  (t[15] = 0);
              })(this, t, s, n, o),
              this
            );
          }
          fromOrthogonal({
            left: t,
            right: s,
            bottom: n,
            top: o,
            near: e,
            far: i,
          }) {
            return (
              (function (t, s, n, o, e, i, r) {
                let a = 1 / (s - n),
                  d = 1 / (o - e),
                  c = 1 / (i - r);
                (t[0] = -2 * a),
                  (t[1] = 0),
                  (t[2] = 0),
                  (t[3] = 0),
                  (t[4] = 0),
                  (t[5] = -2 * d),
                  (t[6] = 0),
                  (t[7] = 0),
                  (t[8] = 0),
                  (t[9] = 0),
                  (t[10] = 2 * c),
                  (t[11] = 0),
                  (t[12] = (s + n) * a),
                  (t[13] = (e + o) * d),
                  (t[14] = (r + i) * c),
                  (t[15] = 1);
              })(this, t, s, n, o, e, i),
              this
            );
          }
          fromQuaternion(t) {
            return (
              (function (t, s) {
                let n = s[0],
                  o = s[1],
                  e = s[2],
                  i = s[3],
                  r = n + n,
                  a = o + o,
                  d = e + e,
                  c = n * r,
                  f = o * r,
                  u = o * a,
                  m = e * r,
                  h = e * a,
                  l = e * d,
                  g = i * r,
                  x = i * a,
                  p = i * d;
                (t[0] = 1 - u - l),
                  (t[1] = f + p),
                  (t[2] = m - x),
                  (t[3] = 0),
                  (t[4] = f - p),
                  (t[5] = 1 - c - l),
                  (t[6] = h + g),
                  (t[7] = 0),
                  (t[8] = m + x),
                  (t[9] = h - g),
                  (t[10] = 1 - c - u),
                  (t[11] = 0),
                  (t[12] = 0),
                  (t[13] = 0),
                  (t[14] = 0),
                  (t[15] = 1);
              })(this, t),
              this
            );
          }
          setPosition(t) {
            return (this.x = t[0]), (this.y = t[1]), (this.z = t[2]), this;
          }
          inverse(t = this) {
            return (
              (function (t, s) {
                let n = s[0],
                  o = s[1],
                  e = s[2],
                  i = s[3],
                  r = s[4],
                  a = s[5],
                  d = s[6],
                  c = s[7],
                  f = s[8],
                  u = s[9],
                  m = s[10],
                  h = s[11],
                  l = s[12],
                  g = s[13],
                  x = s[14],
                  p = s[15],
                  y = n * a - o * r,
                  w = n * d - e * r,
                  v = n * c - i * r,
                  b = o * d - e * a,
                  M = o * c - i * a,
                  E = e * c - i * d,
                  A = f * g - u * l,
                  S = f * x - m * l,
                  T = f * p - h * l,
                  F = u * x - m * g,
                  _ = u * p - h * g,
                  C = m * p - h * x,
                  P = y * C - w * _ + v * F + b * T - M * S + E * A;
                P &&
                  ((P = 1 / P),
                  (t[0] = (a * C - d * _ + c * F) * P),
                  (t[1] = (e * _ - o * C - i * F) * P),
                  (t[2] = (g * E - x * M + p * b) * P),
                  (t[3] = (m * M - u * E - h * b) * P),
                  (t[4] = (d * T - r * C - c * S) * P),
                  (t[5] = (n * C - e * T + i * S) * P),
                  (t[6] = (x * v - l * E - p * w) * P),
                  (t[7] = (f * E - m * v + h * w) * P),
                  (t[8] = (r * _ - a * T + c * A) * P),
                  (t[9] = (o * T - n * _ - i * A) * P),
                  (t[10] = (l * M - g * v + p * y) * P),
                  (t[11] = (u * v - f * M - h * y) * P),
                  (t[12] = (a * S - r * F - d * A) * P),
                  (t[13] = (n * F - o * S + e * A) * P),
                  (t[14] = (g * w - l * b - x * y) * P),
                  (t[15] = (f * b - u * w + m * y) * P));
              })(this, t),
              this
            );
          }
          compose(t, s, n) {
            return (
              (function (t, s, n, o) {
                let e = s[0],
                  i = s[1],
                  r = s[2],
                  a = s[3],
                  d = e + e,
                  c = i + i,
                  f = r + r,
                  u = e * d,
                  m = e * c,
                  h = e * f,
                  l = i * c,
                  g = i * f,
                  x = r * f,
                  p = a * d,
                  y = a * c,
                  w = a * f,
                  v = o[0],
                  b = o[1],
                  M = o[2];
                (t[0] = (1 - (l + x)) * v),
                  (t[1] = (m + w) * v),
                  (t[2] = (h - y) * v),
                  (t[3] = 0),
                  (t[4] = (m - w) * b),
                  (t[5] = (1 - (u + x)) * b),
                  (t[6] = (g + p) * b),
                  (t[7] = 0),
                  (t[8] = (h + y) * M),
                  (t[9] = (g - p) * M),
                  (t[10] = (1 - (u + l)) * M),
                  (t[11] = 0),
                  (t[12] = n[0]),
                  (t[13] = n[1]),
                  (t[14] = n[2]),
                  (t[15] = 1);
              })(this, t, s, n),
              this
            );
          }
          getRotation(t) {
            return b(t, this), this;
          }
          getTranslation(t) {
            var s, n;
            return (
              (n = this),
              ((s = t)[0] = n[12]),
              (s[1] = n[13]),
              (s[2] = n[14]),
              this
            );
          }
          getScaling(t) {
            return v(t, this), this;
          }
          getMaxScaleOnAxis() {
            return (function (t) {
              let s = t[0],
                n = t[1],
                o = t[2],
                e = t[4],
                i = t[5],
                r = t[6],
                a = t[8],
                d = t[9],
                c = t[10];
              const f = s * s + n * n + o * o,
                u = e * e + i * i + r * r,
                m = a * a + d * d + c * c;
              return Math.sqrt(Math.max(f, u, m));
            })(this);
          }
          lookAt(t, s, n) {
            return (
              (function (t, s, n, o) {
                let e = s[0],
                  i = s[1],
                  r = s[2],
                  a = o[0],
                  d = o[1],
                  c = o[2],
                  f = e - n[0],
                  u = i - n[1],
                  m = r - n[2],
                  h = f * f + u * u + m * m;
                0 === h
                  ? (m = 1)
                  : ((h = 1 / Math.sqrt(h)), (f *= h), (u *= h), (m *= h));
                let l = d * m - c * u,
                  g = c * f - a * m,
                  x = a * u - d * f;
                (h = l * l + g * g + x * x),
                  0 === h &&
                    (c ? (a += 1e-6) : d ? (c += 1e-6) : (d += 1e-6),
                    (l = d * m - c * u),
                    (g = c * f - a * m),
                    (x = a * u - d * f),
                    (h = l * l + g * g + x * x)),
                  (h = 1 / Math.sqrt(h)),
                  (l *= h),
                  (g *= h),
                  (x *= h),
                  (t[0] = l),
                  (t[1] = g),
                  (t[2] = x),
                  (t[3] = 0),
                  (t[4] = u * x - m * g),
                  (t[5] = m * l - f * x),
                  (t[6] = f * g - u * l),
                  (t[7] = 0),
                  (t[8] = f),
                  (t[9] = u),
                  (t[10] = m),
                  (t[11] = 0),
                  (t[12] = e),
                  (t[13] = i),
                  (t[14] = r),
                  (t[15] = 1);
              })(this, t, s, n),
              this
            );
          }
          determinant() {
            return (function (t) {
              let s = t[0],
                n = t[1],
                o = t[2],
                e = t[3],
                i = t[4],
                r = t[5],
                a = t[6],
                d = t[7],
                c = t[8],
                f = t[9],
                u = t[10],
                m = t[11],
                h = t[12],
                l = t[13],
                g = t[14],
                x = t[15];
              return (
                (s * r - n * i) * (u * x - m * g) -
                (s * a - o * i) * (f * x - m * l) +
                (s * d - e * i) * (f * g - u * l) +
                (n * a - o * r) * (c * x - m * h) -
                (n * d - e * r) * (c * g - u * h) +
                (o * d - e * a) * (c * l - f * h)
              );
            })(this);
          }
          fromArray(t, s = 0) {
            return (
              (this[0] = t[s]),
              (this[1] = t[s + 1]),
              (this[2] = t[s + 2]),
              (this[3] = t[s + 3]),
              (this[4] = t[s + 4]),
              (this[5] = t[s + 5]),
              (this[6] = t[s + 6]),
              (this[7] = t[s + 7]),
              (this[8] = t[s + 8]),
              (this[9] = t[s + 9]),
              (this[10] = t[s + 10]),
              (this[11] = t[s + 11]),
              (this[12] = t[s + 12]),
              (this[13] = t[s + 13]),
              (this[14] = t[s + 14]),
              (this[15] = t[s + 15]),
              this
            );
          }
          toArray(t = [], s = 0) {
            return (
              (t[s] = this[0]),
              (t[s + 1] = this[1]),
              (t[s + 2] = this[2]),
              (t[s + 3] = this[3]),
              (t[s + 4] = this[4]),
              (t[s + 5] = this[5]),
              (t[s + 6] = this[6]),
              (t[s + 7] = this[7]),
              (t[s + 8] = this[8]),
              (t[s + 9] = this[9]),
              (t[s + 10] = this[10]),
              (t[s + 11] = this[11]),
              (t[s + 12] = this[12]),
              (t[s + 13] = this[13]),
              (t[s + 14] = this[14]),
              (t[s + 15] = this[15]),
              t
            );
          }
        }
        const E = new M();
        class A extends Array {
          constructor(t = 0, s = t, n = t, o = "YXZ") {
            return (
              super(t, s, n), (this.order = o), (this.onChange = () => {}), this
            );
          }
          get x() {
            return this[0];
          }
          get y() {
            return this[1];
          }
          get z() {
            return this[2];
          }
          set x(t) {
            (this[0] = t), this.onChange();
          }
          set y(t) {
            (this[1] = t), this.onChange();
          }
          set z(t) {
            (this[2] = t), this.onChange();
          }
          set(t, s = t, n = t) {
            return t.length
              ? this.copy(t)
              : ((this[0] = t),
                (this[1] = s),
                (this[2] = n),
                this.onChange(),
                this);
          }
          copy(t) {
            return (
              (this[0] = t[0]),
              (this[1] = t[1]),
              (this[2] = t[2]),
              this.onChange(),
              this
            );
          }
          reorder(t) {
            return (this.order = t), this.onChange(), this;
          }
          fromRotationMatrix(t, s = this.order) {
            return (
              (function (t, s, n = "YXZ") {
                "XYZ" === n
                  ? ((t[1] = Math.asin(Math.min(Math.max(s[8], -1), 1))),
                    Math.abs(s[8]) < 0.99999
                      ? ((t[0] = Math.atan2(-s[9], s[10])),
                        (t[2] = Math.atan2(-s[4], s[0])))
                      : ((t[0] = Math.atan2(s[6], s[5])), (t[2] = 0)))
                  : "YXZ" === n
                  ? ((t[0] = Math.asin(-Math.min(Math.max(s[9], -1), 1))),
                    Math.abs(s[9]) < 0.99999
                      ? ((t[1] = Math.atan2(s[8], s[10])),
                        (t[2] = Math.atan2(s[1], s[5])))
                      : ((t[1] = Math.atan2(-s[2], s[0])), (t[2] = 0)))
                  : "ZXY" === n
                  ? ((t[0] = Math.asin(Math.min(Math.max(s[6], -1), 1))),
                    Math.abs(s[6]) < 0.99999
                      ? ((t[1] = Math.atan2(-s[2], s[10])),
                        (t[2] = Math.atan2(-s[4], s[5])))
                      : ((t[1] = 0), (t[2] = Math.atan2(s[1], s[0]))))
                  : "ZYX" === n
                  ? ((t[1] = Math.asin(-Math.min(Math.max(s[2], -1), 1))),
                    Math.abs(s[2]) < 0.99999
                      ? ((t[0] = Math.atan2(s[6], s[10])),
                        (t[2] = Math.atan2(s[1], s[0])))
                      : ((t[0] = 0), (t[2] = Math.atan2(-s[4], s[5]))))
                  : "YZX" === n
                  ? ((t[2] = Math.asin(Math.min(Math.max(s[1], -1), 1))),
                    Math.abs(s[1]) < 0.99999
                      ? ((t[0] = Math.atan2(-s[9], s[5])),
                        (t[1] = Math.atan2(-s[2], s[0])))
                      : ((t[0] = 0), (t[1] = Math.atan2(s[8], s[10]))))
                  : "XZY" === n &&
                    ((t[2] = Math.asin(-Math.min(Math.max(s[4], -1), 1))),
                    Math.abs(s[4]) < 0.99999
                      ? ((t[0] = Math.atan2(s[6], s[5])),
                        (t[1] = Math.atan2(s[8], s[0])))
                      : ((t[0] = Math.atan2(-s[9], s[10])), (t[1] = 0)));
              })(this, t, s),
              this
            );
          }
          fromQuaternion(t, s = this.order) {
            return E.fromQuaternion(t), this.fromRotationMatrix(E, s);
          }
        }
        class S {
          constructor() {
            (this.parent = null),
              (this.children = []),
              (this.visible = !0),
              (this.matrix = new M()),
              (this.worldMatrix = new M()),
              (this.matrixAutoUpdate = !0),
              (this.position = new h()),
              (this.quaternion = new y()),
              (this.scale = new h(1)),
              (this.rotation = new A()),
              (this.up = new h(0, 1, 0)),
              (this.rotation.onChange = () =>
                this.quaternion.fromEuler(this.rotation)),
              (this.quaternion.onChange = () =>
                this.rotation.fromQuaternion(this.quaternion));
          }
          setParent(t, s = !0) {
            this.parent &&
              t !== this.parent &&
              this.parent.removeChild(this, !1),
              (this.parent = t),
              s && t && t.addChild(this, !1);
          }
          addChild(t, s = !0) {
            ~this.children.indexOf(t) || this.children.push(t),
              s && t.setParent(this, !1);
          }
          removeChild(t, s = !0) {
            ~this.children.indexOf(t) &&
              this.children.splice(this.children.indexOf(t), 1),
              s && t.setParent(null, !1);
          }
          updateMatrixWorld(t) {
            this.matrixAutoUpdate && this.updateMatrix(),
              (this.worldMatrixNeedsUpdate || t) &&
                (null === this.parent
                  ? this.worldMatrix.copy(this.matrix)
                  : this.worldMatrix.multiply(
                      this.parent.worldMatrix,
                      this.matrix
                    ),
                (this.worldMatrixNeedsUpdate = !1),
                (t = !0));
            for (let s = 0, n = this.children.length; s < n; s++)
              this.children[s].updateMatrixWorld(t);
          }
          updateMatrix() {
            this.matrix.compose(this.quaternion, this.position, this.scale),
              (this.worldMatrixNeedsUpdate = !0);
          }
          traverse(t) {
            if (!t(this))
              for (let s = 0, n = this.children.length; s < n; s++)
                this.children[s].traverse(t);
          }
          decompose() {
            this.matrix.getTranslation(this.position),
              this.matrix.getRotation(this.quaternion),
              this.matrix.getScaling(this.scale),
              this.rotation.fromQuaternion(this.quaternion);
          }
          lookAt(t, s = !1) {
            s
              ? this.matrix.lookAt(this.position, t, this.up)
              : this.matrix.lookAt(t, this.position, this.up),
              this.matrix.getRotation(this.quaternion),
              this.rotation.fromQuaternion(this.quaternion);
          }
        }
        const T = new M(),
          F = new h(),
          _ = new h();
        class C extends S {
          constructor(
            t,
            {
              near: s = 0.1,
              far: n = 100,
              fov: o = 45,
              aspect: e = 1,
              left: i,
              right: r,
              bottom: a,
              top: d,
              zoom: c = 1,
            } = {}
          ) {
            super(),
              Object.assign(this, {
                near: s,
                far: n,
                fov: o,
                aspect: e,
                left: i,
                right: r,
                bottom: a,
                top: d,
                zoom: c,
              }),
              (this.projectionMatrix = new M()),
              (this.viewMatrix = new M()),
              (this.projectionViewMatrix = new M()),
              (this.worldPosition = new h()),
              (this.type = i || r ? "orthographic" : "perspective"),
              "orthographic" === this.type
                ? this.orthographic()
                : this.perspective();
          }
          perspective({
            near: t = this.near,
            far: s = this.far,
            fov: n = this.fov,
            aspect: o = this.aspect,
          } = {}) {
            return (
              Object.assign(this, { near: t, far: s, fov: n, aspect: o }),
              this.projectionMatrix.fromPerspective({
                fov: n * (Math.PI / 180),
                aspect: o,
                near: t,
                far: s,
              }),
              (this.type = "perspective"),
              this
            );
          }
          orthographic({
            near: t = this.near,
            far: s = this.far,
            left: n = this.left,
            right: o = this.right,
            bottom: e = this.bottom,
            top: i = this.top,
            zoom: r = this.zoom,
          } = {}) {
            return (
              Object.assign(this, {
                near: t,
                far: s,
                left: n,
                right: o,
                bottom: e,
                top: i,
                zoom: r,
              }),
              (n /= r),
              (o /= r),
              (e /= r),
              (i /= r),
              this.projectionMatrix.fromOrthogonal({
                left: n,
                right: o,
                bottom: e,
                top: i,
                near: t,
                far: s,
              }),
              (this.type = "orthographic"),
              this
            );
          }
          updateMatrixWorld() {
            return (
              super.updateMatrixWorld(),
              this.viewMatrix.inverse(this.worldMatrix),
              this.worldMatrix.getTranslation(this.worldPosition),
              this.projectionViewMatrix.multiply(
                this.projectionMatrix,
                this.viewMatrix
              ),
              this
            );
          }
          lookAt(t) {
            return super.lookAt(t, !0), this;
          }
          project(t) {
            return (
              t.applyMatrix4(this.viewMatrix),
              t.applyMatrix4(this.projectionMatrix),
              this
            );
          }
          unproject(t) {
            return (
              t.applyMatrix4(T.inverse(this.projectionMatrix)),
              t.applyMatrix4(this.worldMatrix),
              this
            );
          }
          updateFrustum() {
            this.frustum ||
              (this.frustum = [
                new h(),
                new h(),
                new h(),
                new h(),
                new h(),
                new h(),
              ]);
            const t = this.projectionViewMatrix;
            (this.frustum[0].set(
              t[3] - t[0],
              t[7] - t[4],
              t[11] - t[8]
            ).constant = t[15] - t[12]),
              (this.frustum[1].set(
                t[3] + t[0],
                t[7] + t[4],
                t[11] + t[8]
              ).constant = t[15] + t[12]),
              (this.frustum[2].set(
                t[3] + t[1],
                t[7] + t[5],
                t[11] + t[9]
              ).constant = t[15] + t[13]),
              (this.frustum[3].set(
                t[3] - t[1],
                t[7] - t[5],
                t[11] - t[9]
              ).constant = t[15] - t[13]),
              (this.frustum[4].set(
                t[3] - t[2],
                t[7] - t[6],
                t[11] - t[10]
              ).constant = t[15] - t[14]),
              (this.frustum[5].set(
                t[3] + t[2],
                t[7] + t[6],
                t[11] + t[10]
              ).constant = t[15] + t[14]);
            for (let t = 0; t < 6; t++) {
              const s = 1 / this.frustum[t].distance();
              this.frustum[t].multiply(s), (this.frustum[t].constant *= s);
            }
          }
          frustumIntersectsMesh(t) {
            if (!t.geometry.attributes.position) return !0;
            if (
              ((t.geometry.bounds && t.geometry.bounds.radius !== 1 / 0) ||
                t.geometry.computeBoundingSphere(),
              !t.geometry.bounds)
            )
              return !0;
            const s = F;
            s.copy(t.geometry.bounds.center), s.applyMatrix4(t.worldMatrix);
            const n =
              t.geometry.bounds.radius * t.worldMatrix.getMaxScaleOnAxis();
            return this.frustumIntersectsSphere(s, n);
          }
          frustumIntersectsSphere(t, s) {
            const n = _;
            for (let o = 0; o < 6; o++) {
              const e = this.frustum[o];
              if (n.copy(e).dot(t) + e.constant < -s) return !1;
            }
            return !0;
          }
        }
        const P = new h();
        let R = 1,
          I = 1,
          L = !1;
        class O {
          constructor(t, s = {}) {
            t.canvas ||
              console.error("gl not passed as first argument to Geometry"),
              (this.gl = t),
              (this.attributes = s),
              (this.id = R++),
              (this.VAOs = {}),
              (this.drawRange = { start: 0, count: 0 }),
              (this.instancedCount = 0),
              this.gl.renderer.bindVertexArray(null),
              (this.gl.renderer.currentGeometry = null),
              (this.glState = this.gl.renderer.state);
            for (let t in s) this.addAttribute(t, s[t]);
          }
          addAttribute(t, s) {
            if (
              ((this.attributes[t] = s),
              (s.id = I++),
              (s.size = s.size || 1),
              (s.type =
                s.type ||
                (s.data.constructor === Float32Array
                  ? this.gl.FLOAT
                  : s.data.constructor === Uint16Array
                  ? this.gl.UNSIGNED_SHORT
                  : this.gl.UNSIGNED_INT)),
              (s.target =
                "index" === t
                  ? this.gl.ELEMENT_ARRAY_BUFFER
                  : this.gl.ARRAY_BUFFER),
              (s.normalized = s.normalized || !1),
              (s.stride = s.stride || 0),
              (s.offset = s.offset || 0),
              (s.count =
                s.count ||
                (s.stride
                  ? s.data.byteLength / s.stride
                  : s.data.length / s.size)),
              (s.divisor = s.instanced || 0),
              (s.needsUpdate = !1),
              s.buffer ||
                ((s.buffer = this.gl.createBuffer()), this.updateAttribute(s)),
              s.divisor)
            ) {
              if (
                ((this.isInstanced = !0),
                this.instancedCount &&
                  this.instancedCount !== s.count * s.divisor)
              )
                return (
                  console.warn(
                    "geometry has multiple instanced buffers of different length"
                  ),
                  (this.instancedCount = Math.min(
                    this.instancedCount,
                    s.count * s.divisor
                  ))
                );
              this.instancedCount = s.count * s.divisor;
            } else
              "index" === t
                ? (this.drawRange.count = s.count)
                : this.attributes.index ||
                  (this.drawRange.count = Math.max(
                    this.drawRange.count,
                    s.count
                  ));
          }
          updateAttribute(t) {
            this.glState.boundBuffer !== t.buffer &&
              (this.gl.bindBuffer(t.target, t.buffer),
              (this.glState.boundBuffer = t.buffer)),
              this.gl.bufferData(t.target, t.data, this.gl.STATIC_DRAW),
              (t.needsUpdate = !1);
          }
          setIndex(t) {
            this.addAttribute("index", t);
          }
          setDrawRange(t, s) {
            (this.drawRange.start = t), (this.drawRange.count = s);
          }
          setInstancedCount(t) {
            this.instancedCount = t;
          }
          createVAO(t) {
            (this.VAOs[
              t.attributeOrder
            ] = this.gl.renderer.createVertexArray()),
              this.gl.renderer.bindVertexArray(this.VAOs[t.attributeOrder]),
              this.bindAttributes(t);
          }
          bindAttributes(t) {
            t.attributeLocations.forEach((t, { name: s, type: n }) => {
              if (!this.attributes[s])
                return void console.warn(
                  `active attribute ${s} not being supplied`
                );
              const o = this.attributes[s];
              this.gl.bindBuffer(o.target, o.buffer),
                (this.glState.boundBuffer = o.buffer);
              let e = 1;
              35674 === n && (e = 2),
                35675 === n && (e = 3),
                35676 === n && (e = 4);
              const i = o.size / e,
                r = 1 === e ? 0 : e * e * e,
                a = 1 === e ? 0 : e * e;
              for (let s = 0; s < e; s++)
                this.gl.vertexAttribPointer(
                  t + s,
                  i,
                  o.type,
                  o.normalized,
                  o.stride + r,
                  o.offset + s * a
                ),
                  this.gl.enableVertexAttribArray(t + s),
                  this.gl.renderer.vertexAttribDivisor(t + s, o.divisor);
            }),
              this.attributes.index &&
                this.gl.bindBuffer(
                  this.gl.ELEMENT_ARRAY_BUFFER,
                  this.attributes.index.buffer
                );
          }
          draw({ program: t, mode: s = this.gl.TRIANGLES }) {
            this.gl.renderer.currentGeometry !==
              `${this.id}_${t.attributeOrder}` &&
              (this.VAOs[t.attributeOrder] || this.createVAO(t),
              this.gl.renderer.bindVertexArray(this.VAOs[t.attributeOrder]),
              (this.gl.renderer.currentGeometry = `${this.id}_${t.attributeOrder}`)),
              t.attributeLocations.forEach((t, { name: s }) => {
                const n = this.attributes[s];
                n.needsUpdate && this.updateAttribute(n);
              }),
              this.isInstanced
                ? this.attributes.index
                  ? this.gl.renderer.drawElementsInstanced(
                      s,
                      this.drawRange.count,
                      this.attributes.index.type,
                      this.attributes.index.offset + 2 * this.drawRange.start,
                      this.instancedCount
                    )
                  : this.gl.renderer.drawArraysInstanced(
                      s,
                      this.drawRange.start,
                      this.drawRange.count,
                      this.instancedCount
                    )
                : this.attributes.index
                ? this.gl.drawElements(
                    s,
                    this.drawRange.count,
                    this.attributes.index.type,
                    this.attributes.index.offset + 2 * this.drawRange.start
                  )
                : this.gl.drawArrays(
                    s,
                    this.drawRange.start,
                    this.drawRange.count
                  );
          }
          getPositionArray() {
            const t = this.attributes.position;
            return t.data
              ? t.data
              : L
              ? void 0
              : (console.warn(
                  "No position buffer data found to compute bounds"
                ),
                (L = !0));
          }
          computeBoundingBox(t) {
            t || (t = this.getPositionArray()),
              this.bounds ||
                (this.bounds = {
                  min: new h(),
                  max: new h(),
                  center: new h(),
                  scale: new h(),
                  radius: 1 / 0,
                });
            const s = this.bounds.min,
              n = this.bounds.max,
              o = this.bounds.center,
              e = this.bounds.scale;
            s.set(1 / 0), n.set(-1 / 0);
            for (let o = 0, e = t.length; o < e; o += 3) {
              const e = t[o],
                i = t[o + 1],
                r = t[o + 2];
              (s.x = Math.min(e, s.x)),
                (s.y = Math.min(i, s.y)),
                (s.z = Math.min(r, s.z)),
                (n.x = Math.max(e, n.x)),
                (n.y = Math.max(i, n.y)),
                (n.z = Math.max(r, n.z));
            }
            e.sub(n, s), o.add(s, n).divide(2);
          }
          computeBoundingSphere(t) {
            t || (t = this.getPositionArray()),
              this.bounds || this.computeBoundingBox(t);
            let s = 0;
            for (let n = 0, o = t.length; n < o; n += 3)
              P.fromArray(t, n),
                (s = Math.max(s, this.bounds.center.squaredDistance(P)));
            this.bounds.radius = Math.sqrt(s);
          }
          remove() {
            this.vao && this.gl.renderer.deleteVertexArray(this.vao);
            for (let t in this.attributes)
              this.gl.deleteBuffer(this.attributes[t].buffer),
                delete this.attributes[t];
          }
        }
        class U extends O {
          constructor(
            t,
            {
              width: s = 1,
              height: n = 1,
              widthSegments: o = 1,
              heightSegments: e = 1,
              attributes: i = {},
            } = {}
          ) {
            const r = o,
              a = e,
              d = (r + 1) * (a + 1),
              c = r * a * 6,
              f = new Float32Array(3 * d),
              u = new Float32Array(3 * d),
              m = new Float32Array(2 * d),
              h = d > 65536 ? new Uint32Array(c) : new Uint16Array(c);
            U.buildPlane(f, u, m, h, s, n, 0, r, a),
              Object.assign(i, {
                position: { size: 3, data: f },
                normal: { size: 3, data: u },
                uv: { size: 2, data: m },
                index: { data: h },
              }),
              super(t, i);
          }
          static buildPlane(
            t,
            s,
            n,
            o,
            e,
            i,
            r,
            a,
            d,
            c = 0,
            f = 1,
            u = 2,
            m = 1,
            h = -1,
            l = 0,
            g = 0
          ) {
            const x = l,
              p = e / a,
              y = i / d;
            for (let w = 0; w <= d; w++) {
              let v = w * y - i / 2;
              for (let i = 0; i <= a; i++, l++) {
                let y = i * p - e / 2;
                if (
                  ((t[3 * l + c] = y * m),
                  (t[3 * l + f] = v * h),
                  (t[3 * l + u] = r / 2),
                  (s[3 * l + c] = 0),
                  (s[3 * l + f] = 0),
                  (s[3 * l + u] = r >= 0 ? 1 : -1),
                  (n[2 * l] = i / a),
                  (n[2 * l + 1] = 1 - w / d),
                  w === d || i === a)
                )
                  continue;
                let b = x + i + w * (a + 1),
                  M = x + i + (w + 1) * (a + 1),
                  E = x + i + (w + 1) * (a + 1) + 1,
                  A = x + i + w * (a + 1) + 1;
                (o[6 * g] = b),
                  (o[6 * g + 1] = M),
                  (o[6 * g + 2] = A),
                  (o[6 * g + 3] = M),
                  (o[6 * g + 4] = E),
                  (o[6 * g + 5] = A),
                  g++;
              }
            }
          }
        }
        var N = n(320),
          B = n.n(N),
          z = n(569),
          D = n.n(z);
        function j(t, s) {
          return Math.random() * (s - t) + t;
        }
        const X = n.p + "explore.png",
          G = n.p + "space.png",
          k = n.p + "art.png",
          V = n.p + "farm.png",
          q = n.p + "class.png",
          W = n.p + "cooking.png",
          Y = n.p + "gallery.png",
          $ = n.p + "fireworks.png",
          H = n.p + "biology.png",
          Z = n.p + "water.png",
          Q = n.p + "lab.png",
          K = n.p + "climate.png",
          J = new Uint8Array(4);
        function tt(t) {
          return 0 == (t & (t - 1));
        }
        let st = 1;
        class nt {
          constructor(
            t,
            {
              image: s,
              target: n = t.TEXTURE_2D,
              type: o = t.UNSIGNED_BYTE,
              format: e = t.RGBA,
              internalFormat: i = e,
              wrapS: r = t.CLAMP_TO_EDGE,
              wrapT: a = t.CLAMP_TO_EDGE,
              generateMipmaps: d = !0,
              minFilter: c = d ? t.NEAREST_MIPMAP_LINEAR : t.LINEAR,
              magFilter: f = t.LINEAR,
              premultiplyAlpha: u = !1,
              unpackAlignment: m = 4,
              flipY: h = n == t.TEXTURE_2D,
              anisotropy: l = 0,
              level: g = 0,
              width: x,
              height: p = x,
            } = {}
          ) {
            (this.gl = t),
              (this.id = st++),
              (this.image = s),
              (this.target = n),
              (this.type = o),
              (this.format = e),
              (this.internalFormat = i),
              (this.minFilter = c),
              (this.magFilter = f),
              (this.wrapS = r),
              (this.wrapT = a),
              (this.generateMipmaps = d),
              (this.premultiplyAlpha = u),
              (this.unpackAlignment = m),
              (this.flipY = h),
              (this.anisotropy = Math.min(
                l,
                this.gl.renderer.parameters.maxAnisotropy
              )),
              (this.level = g),
              (this.width = x),
              (this.height = p),
              (this.texture = this.gl.createTexture()),
              (this.store = { image: null }),
              (this.glState = this.gl.renderer.state),
              (this.state = {}),
              (this.state.minFilter = this.gl.NEAREST_MIPMAP_LINEAR),
              (this.state.magFilter = this.gl.LINEAR),
              (this.state.wrapS = this.gl.REPEAT),
              (this.state.wrapT = this.gl.REPEAT),
              (this.state.anisotropy = 0);
          }
          bind() {
            this.glState.textureUnits[this.glState.activeTextureUnit] !==
              this.id &&
              (this.gl.bindTexture(this.target, this.texture),
              (this.glState.textureUnits[
                this.glState.activeTextureUnit
              ] = this.id));
          }
          update(t = 0) {
            const s = !(this.image === this.store.image && !this.needsUpdate);
            if (
              ((s || this.glState.textureUnits[t] !== this.id) &&
                (this.gl.renderer.activeTexture(t), this.bind()),
              s)
            ) {
              if (
                ((this.needsUpdate = !1),
                this.flipY !== this.glState.flipY &&
                  (this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, this.flipY),
                  (this.glState.flipY = this.flipY)),
                this.premultiplyAlpha !== this.glState.premultiplyAlpha &&
                  (this.gl.pixelStorei(
                    this.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL,
                    this.premultiplyAlpha
                  ),
                  (this.glState.premultiplyAlpha = this.premultiplyAlpha)),
                this.unpackAlignment !== this.glState.unpackAlignment &&
                  (this.gl.pixelStorei(
                    this.gl.UNPACK_ALIGNMENT,
                    this.unpackAlignment
                  ),
                  (this.glState.unpackAlignment = this.unpackAlignment)),
                this.minFilter !== this.state.minFilter &&
                  (this.gl.texParameteri(
                    this.target,
                    this.gl.TEXTURE_MIN_FILTER,
                    this.minFilter
                  ),
                  (this.state.minFilter = this.minFilter)),
                this.magFilter !== this.state.magFilter &&
                  (this.gl.texParameteri(
                    this.target,
                    this.gl.TEXTURE_MAG_FILTER,
                    this.magFilter
                  ),
                  (this.state.magFilter = this.magFilter)),
                this.wrapS !== this.state.wrapS &&
                  (this.gl.texParameteri(
                    this.target,
                    this.gl.TEXTURE_WRAP_S,
                    this.wrapS
                  ),
                  (this.state.wrapS = this.wrapS)),
                this.wrapT !== this.state.wrapT &&
                  (this.gl.texParameteri(
                    this.target,
                    this.gl.TEXTURE_WRAP_T,
                    this.wrapT
                  ),
                  (this.state.wrapT = this.wrapT)),
                this.anisotropy &&
                  this.anisotropy !== this.state.anisotropy &&
                  (this.gl.texParameterf(
                    this.target,
                    this.gl.renderer.getExtension(
                      "EXT_texture_filter_anisotropic"
                    ).TEXTURE_MAX_ANISOTROPY_EXT,
                    this.anisotropy
                  ),
                  (this.state.anisotropy = this.anisotropy)),
                this.image)
              ) {
                if (
                  (this.image.width &&
                    ((this.width = this.image.width),
                    (this.height = this.image.height)),
                  this.target === this.gl.TEXTURE_CUBE_MAP)
                )
                  for (let t = 0; t < 6; t++)
                    this.gl.texImage2D(
                      this.gl.TEXTURE_CUBE_MAP_POSITIVE_X + t,
                      this.level,
                      this.internalFormat,
                      this.format,
                      this.type,
                      this.image[t]
                    );
                else if (ArrayBuffer.isView(this.image))
                  this.gl.texImage2D(
                    this.target,
                    this.level,
                    this.internalFormat,
                    this.width,
                    this.height,
                    0,
                    this.format,
                    this.type,
                    this.image
                  );
                else if (this.image.isCompressedTexture)
                  for (let t = 0; t < this.image.length; t++)
                    this.gl.compressedTexImage2D(
                      this.target,
                      t,
                      this.internalFormat,
                      this.image[t].width,
                      this.image[t].height,
                      0,
                      this.image[t].data
                    );
                else
                  this.gl.texImage2D(
                    this.target,
                    this.level,
                    this.internalFormat,
                    this.format,
                    this.type,
                    this.image
                  );
                this.generateMipmaps &&
                  (this.gl.renderer.isWebgl2 ||
                  (tt(this.image.width) && tt(this.image.height))
                    ? this.gl.generateMipmap(this.target)
                    : ((this.generateMipmaps = !1),
                      (this.wrapS = this.wrapT = this.gl.CLAMP_TO_EDGE),
                      (this.minFilter = this.gl.LINEAR))),
                  this.onUpdate && this.onUpdate();
              } else if (this.target === this.gl.TEXTURE_CUBE_MAP)
                for (let t = 0; t < 6; t++)
                  this.gl.texImage2D(
                    this.gl.TEXTURE_CUBE_MAP_POSITIVE_X + t,
                    0,
                    this.gl.RGBA,
                    1,
                    1,
                    0,
                    this.gl.RGBA,
                    this.gl.UNSIGNED_BYTE,
                    J
                  );
              else
                this.width
                  ? this.gl.texImage2D(
                      this.target,
                      this.level,
                      this.internalFormat,
                      this.width,
                      this.height,
                      0,
                      this.format,
                      this.type,
                      null
                    )
                  : this.gl.texImage2D(
                      this.target,
                      0,
                      this.gl.RGBA,
                      1,
                      1,
                      0,
                      this.gl.RGBA,
                      this.gl.UNSIGNED_BYTE,
                      J
                    );
              this.store.image = this.image;
            }
          }
        }
        let ot = 1;
        const et = {};
        class it {
          constructor(
            t,
            {
              vertex: s,
              fragment: n,
              uniforms: o = {},
              transparent: e = !1,
              cullFace: i = t.BACK,
              frontFace: r = t.CCW,
              depthTest: a = !0,
              depthWrite: d = !0,
              depthFunc: c = t.LESS,
            } = {}
          ) {
            t.canvas ||
              console.error("gl not passed as fist argument to Program"),
              (this.gl = t),
              (this.uniforms = o),
              (this.id = ot++),
              s || console.warn("vertex shader not supplied"),
              n || console.warn("fragment shader not supplied"),
              (this.transparent = e),
              (this.cullFace = i),
              (this.frontFace = r),
              (this.depthTest = a),
              (this.depthWrite = d),
              (this.depthFunc = c),
              (this.blendFunc = {}),
              (this.blendEquation = {}),
              this.transparent &&
                !this.blendFunc.src &&
                (this.gl.renderer.premultipliedAlpha
                  ? this.setBlendFunc(this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA)
                  : this.setBlendFunc(
                      this.gl.SRC_ALPHA,
                      this.gl.ONE_MINUS_SRC_ALPHA
                    ));
            const f = t.createShader(t.VERTEX_SHADER);
            t.shaderSource(f, s),
              t.compileShader(f),
              "" !== t.getShaderInfoLog(f) &&
                console.warn(
                  `${t.getShaderInfoLog(f)}\nVertex Shader\n${at(s)}`
                );
            const u = t.createShader(t.FRAGMENT_SHADER);
            if (
              (t.shaderSource(u, n),
              t.compileShader(u),
              "" !== t.getShaderInfoLog(u) &&
                console.warn(
                  `${t.getShaderInfoLog(u)}\nFragment Shader\n${at(n)}`
                ),
              (this.program = t.createProgram()),
              t.attachShader(this.program, f),
              t.attachShader(this.program, u),
              t.linkProgram(this.program),
              !t.getProgramParameter(this.program, t.LINK_STATUS))
            )
              return console.warn(t.getProgramInfoLog(this.program));
            t.deleteShader(f),
              t.deleteShader(u),
              (this.uniformLocations = new Map());
            let m = t.getProgramParameter(this.program, t.ACTIVE_UNIFORMS);
            for (let s = 0; s < m; s++) {
              let n = t.getActiveUniform(this.program, s);
              this.uniformLocations.set(
                n,
                t.getUniformLocation(this.program, n.name)
              );
              const o = n.name.match(/(\w+)/g);
              (n.uniformName = o[0]),
                3 === o.length
                  ? ((n.isStructArray = !0),
                    (n.structIndex = Number(o[1])),
                    (n.structProperty = o[2]))
                  : 2 === o.length &&
                    isNaN(Number(o[1])) &&
                    ((n.isStruct = !0), (n.structProperty = o[1]));
            }
            this.attributeLocations = new Map();
            const h = [],
              l = t.getProgramParameter(this.program, t.ACTIVE_ATTRIBUTES);
            for (let s = 0; s < l; s++) {
              const n = t.getActiveAttrib(this.program, s),
                o = t.getAttribLocation(this.program, n.name);
              (h[o] = n.name), this.attributeLocations.set(n, o);
            }
            this.attributeOrder = h.join("");
          }
          setBlendFunc(t, s, n, o) {
            (this.blendFunc.src = t),
              (this.blendFunc.dst = s),
              (this.blendFunc.srcAlpha = n),
              (this.blendFunc.dstAlpha = o),
              t && (this.transparent = !0);
          }
          setBlendEquation(t, s) {
            (this.blendEquation.modeRGB = t),
              (this.blendEquation.modeAlpha = s);
          }
          applyState() {
            this.depthTest
              ? this.gl.renderer.enable(this.gl.DEPTH_TEST)
              : this.gl.renderer.disable(this.gl.DEPTH_TEST),
              this.cullFace
                ? this.gl.renderer.enable(this.gl.CULL_FACE)
                : this.gl.renderer.disable(this.gl.CULL_FACE),
              this.blendFunc.src
                ? this.gl.renderer.enable(this.gl.BLEND)
                : this.gl.renderer.disable(this.gl.BLEND),
              this.cullFace && this.gl.renderer.setCullFace(this.cullFace),
              this.gl.renderer.setFrontFace(this.frontFace),
              this.gl.renderer.setDepthMask(this.depthWrite),
              this.gl.renderer.setDepthFunc(this.depthFunc),
              this.blendFunc.src &&
                this.gl.renderer.setBlendFunc(
                  this.blendFunc.src,
                  this.blendFunc.dst,
                  this.blendFunc.srcAlpha,
                  this.blendFunc.dstAlpha
                ),
              this.gl.renderer.setBlendEquation(
                this.blendEquation.modeRGB,
                this.blendEquation.modeAlpha
              );
          }
          use({ flipFaces: t = !1 } = {}) {
            let s = -1;
            this.gl.renderer.currentProgram === this.id ||
              (this.gl.useProgram(this.program),
              (this.gl.renderer.currentProgram = this.id)),
              this.uniformLocations.forEach((t, n) => {
                let o = n.uniformName,
                  e = this.uniforms[o];
                if (
                  (n.isStruct &&
                    ((e = e[n.structProperty]), (o += `.${n.structProperty}`)),
                  n.isStructArray &&
                    ((e = e[n.structIndex][n.structProperty]),
                    (o += `[${n.structIndex}].${n.structProperty}`)),
                  !e)
                )
                  return ct(`Active uniform ${o} has not been supplied`);
                if (e && void 0 === e.value)
                  return ct(`${o} uniform is missing a value parameter`);
                if (e.value.texture)
                  return (s += 1), e.value.update(s), rt(this.gl, n.type, t, s);
                if (e.value.length && e.value[0].texture) {
                  const o = [];
                  return (
                    e.value.forEach((t) => {
                      (s += 1), t.update(s), o.push(s);
                    }),
                    rt(this.gl, n.type, t, o)
                  );
                }
                rt(this.gl, n.type, t, e.value);
              }),
              this.applyState(),
              t &&
                this.gl.renderer.setFrontFace(
                  this.frontFace === this.gl.CCW ? this.gl.CW : this.gl.CCW
                );
          }
          remove() {
            this.gl.deleteProgram(this.program);
          }
        }
        function rt(t, s, n, o) {
          o = o.length
            ? (function (t) {
                const s = t.length,
                  n = t[0].length;
                if (void 0 === n) return t;
                const o = s * n;
                let e = et[o];
                e || (et[o] = e = new Float32Array(o));
                for (let o = 0; o < s; o++) e.set(t[o], o * n);
                return e;
              })(o)
            : o;
          const e = t.renderer.state.uniformLocations.get(n);
          if (o.length)
            if (void 0 === e || e.length !== o.length)
              t.renderer.state.uniformLocations.set(n, o.slice(0));
            else {
              if (
                (function (t, s) {
                  if (t.length !== s.length) return !1;
                  for (let n = 0, o = t.length; n < o; n++)
                    if (t[n] !== s[n]) return !1;
                  return !0;
                })(e, o)
              )
                return;
              e.set
                ? e.set(o)
                : (function (t, s) {
                    for (let n = 0, o = t.length; n < o; n++) t[n] = s[n];
                  })(e, o),
                t.renderer.state.uniformLocations.set(n, e);
            }
          else {
            if (e === o) return;
            t.renderer.state.uniformLocations.set(n, o);
          }
          switch (s) {
            case 5126:
              return o.length ? t.uniform1fv(n, o) : t.uniform1f(n, o);
            case 35664:
              return t.uniform2fv(n, o);
            case 35665:
              return t.uniform3fv(n, o);
            case 35666:
              return t.uniform4fv(n, o);
            case 35670:
            case 5124:
            case 35678:
            case 35680:
              return o.length ? t.uniform1iv(n, o) : t.uniform1i(n, o);
            case 35671:
            case 35667:
              return t.uniform2iv(n, o);
            case 35672:
            case 35668:
              return t.uniform3iv(n, o);
            case 35673:
            case 35669:
              return t.uniform4iv(n, o);
            case 35674:
              return t.uniformMatrix2fv(n, !1, o);
            case 35675:
              return t.uniformMatrix3fv(n, !1, o);
            case 35676:
              return t.uniformMatrix4fv(n, !1, o);
          }
        }
        function at(t) {
          let s = t.split("\n");
          for (let t = 0; t < s.length; t++) s[t] = t + 1 + ": " + s[t];
          return s.join("\n");
        }
        let dt = 0;
        function ct(t) {
          dt > 100 ||
            (console.warn(t),
            dt++,
            dt > 100 &&
              console.warn("More than 100 program warnings - stopping logs."));
        }
        function ft(t, s, n) {
          let o = s[0],
            e = s[1],
            i = s[2],
            r = s[3],
            a = s[4],
            d = s[5],
            c = s[6],
            f = s[7],
            u = s[8],
            m = n[0],
            h = n[1],
            l = n[2],
            g = n[3],
            x = n[4],
            p = n[5],
            y = n[6],
            w = n[7],
            v = n[8];
          return (
            (t[0] = m * o + h * r + l * c),
            (t[1] = m * e + h * a + l * f),
            (t[2] = m * i + h * d + l * u),
            (t[3] = g * o + x * r + p * c),
            (t[4] = g * e + x * a + p * f),
            (t[5] = g * i + x * d + p * u),
            (t[6] = y * o + w * r + v * c),
            (t[7] = y * e + w * a + v * f),
            (t[8] = y * i + w * d + v * u),
            t
          );
        }
        class ut extends Array {
          constructor(
            t = 1,
            s = 0,
            n = 0,
            o = 0,
            e = 1,
            i = 0,
            r = 0,
            a = 0,
            d = 1
          ) {
            return super(t, s, n, o, e, i, r, a, d), this;
          }
          set(t, s, n, o, e, i, r, a, d) {
            return t.length
              ? this.copy(t)
              : ((function (t, s, n, o, e, i, r, a, d, c) {
                  (t[0] = s),
                    (t[1] = n),
                    (t[2] = o),
                    (t[3] = e),
                    (t[4] = i),
                    (t[5] = r),
                    (t[6] = a),
                    (t[7] = d),
                    (t[8] = c);
                })(this, t, s, n, o, e, i, r, a, d),
                this);
          }
          translate(t, s = this) {
            return (
              (function (t, s, n) {
                let o = s[0],
                  e = s[1],
                  i = s[2],
                  r = s[3],
                  a = s[4],
                  d = s[5],
                  c = s[6],
                  f = s[7],
                  u = s[8],
                  m = n[0],
                  h = n[1];
                (t[0] = o),
                  (t[1] = e),
                  (t[2] = i),
                  (t[3] = r),
                  (t[4] = a),
                  (t[5] = d),
                  (t[6] = m * o + h * r + c),
                  (t[7] = m * e + h * a + f),
                  (t[8] = m * i + h * d + u);
              })(this, s, t),
              this
            );
          }
          rotate(t, s = this) {
            return (
              (function (t, s, n) {
                let o = s[0],
                  e = s[1],
                  i = s[2],
                  r = s[3],
                  a = s[4],
                  d = s[5],
                  c = s[6],
                  f = s[7],
                  u = s[8],
                  m = Math.sin(n),
                  h = Math.cos(n);
                (t[0] = h * o + m * r),
                  (t[1] = h * e + m * a),
                  (t[2] = h * i + m * d),
                  (t[3] = h * r - m * o),
                  (t[4] = h * a - m * e),
                  (t[5] = h * d - m * i),
                  (t[6] = c),
                  (t[7] = f),
                  (t[8] = u);
              })(this, s, t),
              this
            );
          }
          scale(t, s = this) {
            return (
              (function (t, s, n) {
                let o = n[0],
                  e = n[1];
                (t[0] = o * s[0]),
                  (t[1] = o * s[1]),
                  (t[2] = o * s[2]),
                  (t[3] = e * s[3]),
                  (t[4] = e * s[4]),
                  (t[5] = e * s[5]),
                  (t[6] = s[6]),
                  (t[7] = s[7]),
                  (t[8] = s[8]);
              })(this, s, t),
              this
            );
          }
          multiply(t, s) {
            return s ? ft(this, t, s) : ft(this, this, t), this;
          }
          identity() {
            var t;
            return (
              ((t = this)[0] = 1),
              (t[1] = 0),
              (t[2] = 0),
              (t[3] = 0),
              (t[4] = 1),
              (t[5] = 0),
              (t[6] = 0),
              (t[7] = 0),
              (t[8] = 1),
              this
            );
          }
          copy(t) {
            var s, n;
            return (
              (n = t),
              ((s = this)[0] = n[0]),
              (s[1] = n[1]),
              (s[2] = n[2]),
              (s[3] = n[3]),
              (s[4] = n[4]),
              (s[5] = n[5]),
              (s[6] = n[6]),
              (s[7] = n[7]),
              (s[8] = n[8]),
              this
            );
          }
          fromMatrix4(t) {
            var s, n;
            return (
              (n = t),
              ((s = this)[0] = n[0]),
              (s[1] = n[1]),
              (s[2] = n[2]),
              (s[3] = n[4]),
              (s[4] = n[5]),
              (s[5] = n[6]),
              (s[6] = n[8]),
              (s[7] = n[9]),
              (s[8] = n[10]),
              this
            );
          }
          fromQuaternion(t) {
            return (
              (function (t, s) {
                let n = s[0],
                  o = s[1],
                  e = s[2],
                  i = s[3],
                  r = n + n,
                  a = o + o,
                  d = e + e,
                  c = n * r,
                  f = o * r,
                  u = o * a,
                  m = e * r,
                  h = e * a,
                  l = e * d,
                  g = i * r,
                  x = i * a,
                  p = i * d;
                (t[0] = 1 - u - l),
                  (t[3] = f - p),
                  (t[6] = m + x),
                  (t[1] = f + p),
                  (t[4] = 1 - c - l),
                  (t[7] = h - g),
                  (t[2] = m - x),
                  (t[5] = h + g),
                  (t[8] = 1 - c - u);
              })(this, t),
              this
            );
          }
          fromBasis(t, s, n) {
            return (
              this.set(t[0], t[1], t[2], s[0], s[1], s[2], n[0], n[1], n[2]),
              this
            );
          }
          inverse(t = this) {
            return (
              (function (t, s) {
                let n = s[0],
                  o = s[1],
                  e = s[2],
                  i = s[3],
                  r = s[4],
                  a = s[5],
                  d = s[6],
                  c = s[7],
                  f = s[8],
                  u = f * r - a * c,
                  m = -f * i + a * d,
                  h = c * i - r * d,
                  l = n * u + o * m + e * h;
                l &&
                  ((l = 1 / l),
                  (t[0] = u * l),
                  (t[1] = (-f * o + e * c) * l),
                  (t[2] = (a * o - e * r) * l),
                  (t[3] = m * l),
                  (t[4] = (f * n - e * d) * l),
                  (t[5] = (-a * n + e * i) * l),
                  (t[6] = h * l),
                  (t[7] = (-c * n + o * d) * l),
                  (t[8] = (r * n - o * i) * l));
              })(this, t),
              this
            );
          }
          getNormalMatrix(t) {
            return (
              (function (t, s) {
                let n = s[0],
                  o = s[1],
                  e = s[2],
                  i = s[3],
                  r = s[4],
                  a = s[5],
                  d = s[6],
                  c = s[7],
                  f = s[8],
                  u = s[9],
                  m = s[10],
                  h = s[11],
                  l = s[12],
                  g = s[13],
                  x = s[14],
                  p = s[15],
                  y = n * a - o * r,
                  w = n * d - e * r,
                  v = n * c - i * r,
                  b = o * d - e * a,
                  M = o * c - i * a,
                  E = e * c - i * d,
                  A = f * g - u * l,
                  S = f * x - m * l,
                  T = f * p - h * l,
                  F = u * x - m * g,
                  _ = u * p - h * g,
                  C = m * p - h * x,
                  P = y * C - w * _ + v * F + b * T - M * S + E * A;
                P &&
                  ((P = 1 / P),
                  (t[0] = (a * C - d * _ + c * F) * P),
                  (t[1] = (d * T - r * C - c * S) * P),
                  (t[2] = (r * _ - a * T + c * A) * P),
                  (t[3] = (e * _ - o * C - i * F) * P),
                  (t[4] = (n * C - e * T + i * S) * P),
                  (t[5] = (o * T - n * _ - i * A) * P),
                  (t[6] = (g * E - x * M + p * b) * P),
                  (t[7] = (x * v - l * E - p * w) * P),
                  (t[8] = (l * M - g * v + p * y) * P));
              })(this, t),
              this
            );
          }
        }
        let mt = 0;
        class ht extends S {
          constructor(
            t,
            {
              geometry: s,
              program: n,
              mode: o = t.TRIANGLES,
              frustumCulled: e = !0,
              renderOrder: i = 0,
            } = {}
          ) {
            super(),
              t.canvas ||
                console.error("gl not passed as first argument to Mesh"),
              (this.gl = t),
              (this.id = mt++),
              (this.geometry = s),
              (this.program = n),
              (this.mode = o),
              (this.frustumCulled = e),
              (this.renderOrder = i),
              (this.modelViewMatrix = new M()),
              (this.normalMatrix = new ut()),
              (this.beforeRenderCallbacks = []),
              (this.afterRenderCallbacks = []);
          }
          onBeforeRender(t) {
            return this.beforeRenderCallbacks.push(t), this;
          }
          onAfterRender(t) {
            return this.afterRenderCallbacks.push(t), this;
          }
          draw({ camera: t } = {}) {
            this.beforeRenderCallbacks.forEach(
              (s) => s && s({ mesh: this, camera: t })
            ),
              t &&
                (this.program.uniforms.modelMatrix ||
                  Object.assign(this.program.uniforms, {
                    modelMatrix: { value: null },
                    viewMatrix: { value: null },
                    modelViewMatrix: { value: null },
                    normalMatrix: { value: null },
                    projectionMatrix: { value: null },
                    cameraPosition: { value: null },
                  }),
                (this.program.uniforms.projectionMatrix.value =
                  t.projectionMatrix),
                (this.program.uniforms.cameraPosition.value = t.worldPosition),
                (this.program.uniforms.viewMatrix.value = t.viewMatrix),
                this.modelViewMatrix.multiply(t.viewMatrix, this.worldMatrix),
                this.normalMatrix.getNormalMatrix(this.modelViewMatrix),
                (this.program.uniforms.modelMatrix.value = this.worldMatrix),
                (this.program.uniforms.modelViewMatrix.value = this.modelViewMatrix),
                (this.program.uniforms.normalMatrix.value = this.normalMatrix));
            let s = this.program.cullFace && this.worldMatrix.determinant() < 0;
            this.program.use({ flipFaces: s }),
              this.geometry.draw({ mode: this.mode, program: this.program }),
              this.afterRenderCallbacks.forEach(
                (s) => s && s({ mesh: this, camera: t })
              );
          }
        }
        var lt = n(663),
          gt = n.n(lt);
        const xt = {
          black: "#000000",
          white: "#ffffff",
          red: "#ff0000",
          green: "#00ff00",
          blue: "#0000ff",
          fuchsia: "#ff00ff",
          cyan: "#00ffff",
          yellow: "#ffff00",
          orange: "#ff8000",
        };
        function pt(t) {
          4 === t.length &&
            (t = t[0] + t[1] + t[1] + t[2] + t[2] + t[3] + t[3]);
          const s = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
          return (
            s ||
              console.warn(`Unable to convert hex string ${t} to rgb values`),
            [
              parseInt(s[1], 16) / 255,
              parseInt(s[2], 16) / 255,
              parseInt(s[3], 16) / 255,
            ]
          );
        }
        function yt(t) {
          return [
            (((t = parseInt(t)) >> 16) & 255) / 255,
            ((t >> 8) & 255) / 255,
            (255 & t) / 255,
          ];
        }
        function wt(t) {
          return void 0 === t
            ? [0, 0, 0]
            : 3 === arguments.length
            ? arguments
            : isNaN(t)
            ? "#" === t[0]
              ? pt(t)
              : xt[t.toLowerCase()]
              ? pt(xt[t.toLowerCase()])
              : (console.warn("Color format not recognised"), [0, 0, 0])
            : yt(t);
        }
        class vt extends Array {
          constructor(t) {
            return Array.isArray(t) ? super(...t) : super(...wt(...arguments));
          }
          get r() {
            return this[0];
          }
          get g() {
            return this[1];
          }
          get b() {
            return this[2];
          }
          set r(t) {
            this[0] = t;
          }
          set g(t) {
            this[1] = t;
          }
          set b(t) {
            this[2] = t;
          }
          set(t) {
            return Array.isArray(t)
              ? this.copy(t)
              : this.copy(wt(...arguments));
          }
          copy(t) {
            return (this[0] = t[0]), (this[1] = t[1]), (this[2] = t[2]), this;
          }
        }
        function bt({
          font: t,
          text: s,
          width: n = 1 / 0,
          align: o = "left",
          size: e = 1,
          letterSpacing: i = 0,
          lineHeight: r = 1.4,
          wordSpacing: a = 0,
          wordBreak: d = !1,
        }) {
          const c = this;
          let f, u, m, h, l;
          const g = /\n/,
            x = /\s/;
          function p() {
            (m = t.common.lineHeight), (h = t.common.base), (l = e / h);
            let n = s.replace(/[ \n]/g, "").length;
            u = {
              position: new Float32Array(4 * n * 3),
              uv: new Float32Array(4 * n * 2),
              id: new Float32Array(4 * n),
              index: new Uint16Array(6 * n),
            };
            for (let t = 0; t < n; t++)
              (u.id[t] = t),
                u.index.set(
                  [
                    4 * t,
                    4 * t + 2,
                    4 * t + 1,
                    4 * t + 1,
                    4 * t + 2,
                    4 * t + 3,
                  ],
                  6 * t
                );
            y();
          }
          function y() {
            const m = [];
            let h = 0,
              p = 0,
              y = 0,
              v = b();
            function b() {
              const t = { width: 0, glyphs: [] };
              return m.push(t), (p = h), (y = 0), t;
            }
            let M = 0;
            for (; h < s.length && M < 100; ) {
              M++;
              const t = s[h];
              if (!v.width && x.test(t)) {
                h++, (p = h), (y = 0);
                continue;
              }
              if (g.test(t)) {
                h++, (v = b());
                continue;
              }
              const o = f[t] || f[" "];
              if (v.glyphs.length) {
                const t = v.glyphs[v.glyphs.length - 1][0];
                let s = w(o.id, t.id) * l;
                (v.width += s), (y += s);
              }
              v.glyphs.push([o, v.width]);
              let r = 0;
              if (
                (x.test(t) ? ((p = h), (y = 0), (r += a * e)) : (r += i * e),
                (r += o.xadvance * l),
                (v.width += r),
                (y += r),
                v.width > n)
              ) {
                if (d && v.glyphs.length > 1) {
                  (v.width -= r), v.glyphs.pop(), (v = b());
                  continue;
                }
                if (!d && y !== v.width) {
                  let t = h - p + 1;
                  v.glyphs.splice(-t, t), (h = p), (v.width -= y), (v = b());
                  continue;
                }
              }
              h++;
            }
            v.width || m.pop(),
              (function (s) {
                const n = t.common.scaleW,
                  i = t.common.scaleH;
                let a = 0.07 * e,
                  d = 0;
                for (let t = 0; t < s.length; t++) {
                  let c = s[t];
                  for (let t = 0; t < c.glyphs.length; t++) {
                    const s = c.glyphs[t][0];
                    let e = c.glyphs[t][1];
                    if (
                      ("center" === o
                        ? (e -= 0.5 * c.width)
                        : "right" === o && (e -= c.width),
                      x.test(s.char))
                    )
                      continue;
                    (e += s.xoffset * l), (a -= s.yoffset * l);
                    let r = s.width * l,
                      f = s.height * l;
                    u.position.set(
                      [e, a - f, 0, e, a, 0, e + r, a - f, 0, e + r, a, 0],
                      4 * d * 3
                    );
                    let m = s.x / n,
                      h = s.width / n,
                      g = 1 - s.y / i,
                      p = s.height / i;
                    u.uv.set(
                      [m, g - p, m, g, m + h, g - p, m + h, g],
                      4 * d * 2
                    ),
                      (a += s.yoffset * l),
                      d++;
                  }
                  a -= e * r;
                }
                (c.buffers = u),
                  (c.numLines = s.length),
                  (c.height = c.numLines * e * r);
              })(m);
          }
          function w(s, n) {
            for (let o = 0; o < t.kernings.length; o++) {
              let e = t.kernings[o];
              if (!(e.first < s || e.second < n))
                return e.first > s || (e.first === s && e.second > n)
                  ? 0
                  : e.amount;
            }
            return 0;
          }
          (f = {}),
            t.chars.forEach((t) => (f[t.char] = t)),
            p(),
            (this.resize = function (t) {
              ({ width: n } = t), y();
            }),
            (this.update = function (t) {
              ({ text: s } = t), p();
            });
        }
        const Mt =
            "#define GLSLIFY 1\nuniform vec3 uColor;\nuniform sampler2D tMap;\n\nvarying vec2 vUv;\n\nvoid main() {\n  vec3 color = texture2D(tMap, vUv).rgb;\n\n  float signed = max(min(color.r, color.g), min(max(color.r, color.g), color.b)) - 0.5;\n  float d = fwidth(signed);\n  float alpha = smoothstep(-d, d, signed);\n\n  if (alpha < 0.02) discard;\n\n  gl_FragColor = vec4(uColor, alpha);\n}\n",
          Et =
            "#define GLSLIFY 1\nattribute vec2 uv;\nattribute vec3 position;\n\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\n\nvarying vec2 vUv;\n\nvoid main() {\n  vUv = uv;\n\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n}\n",
          At = JSON.parse(
            '{"pages":["forma.png"],"chars":[{"id":36,"index":367,"char":"$","width":25,"height":41,"xoffset":-1,"yoffset":0.5,"xadvance":23.436,"chnl":15,"x":0,"y":0,"page":0},{"id":40,"index":298,"char":"(","width":12,"height":41,"xoffset":-1,"yoffset":2.5,"xadvance":8.862,"chnl":15,"x":26,"y":0,"page":0},{"id":41,"index":299,"char":")","width":12,"height":41,"xoffset":-1,"yoffset":2.5,"xadvance":8.862,"chnl":15,"x":39,"y":0,"page":0},{"id":47,"index":331,"char":"/","width":16,"height":41,"xoffset":-1,"yoffset":3.5,"xadvance":13.02,"chnl":15,"x":52,"y":0,"page":0},{"id":64,"index":336,"char":"@","width":37,"height":41,"xoffset":-1,"yoffset":4.5,"xadvance":34.272,"chnl":15,"x":69,"y":0,"page":0},{"id":91,"index":300,"char":"[","width":11,"height":41,"xoffset":0,"yoffset":2.5,"xadvance":9.618,"chnl":15,"x":107,"y":0,"page":0},{"id":92,"index":332,"char":"\\\\","width":16,"height":41,"xoffset":-1,"yoffset":3.5,"xadvance":13.062,"chnl":15,"x":0,"y":42,"page":0},{"id":93,"index":301,"char":"]","width":11,"height":41,"xoffset":-1,"yoffset":2.5,"xadvance":9.618,"chnl":15,"x":0,"y":84,"page":0},{"id":123,"index":302,"char":"{","width":12,"height":41,"xoffset":0,"yoffset":2.5,"xadvance":10.29,"chnl":15,"x":12,"y":84,"page":0},{"id":124,"index":334,"char":"|","width":7,"height":41,"xoffset":-1,"yoffset":2.5,"xadvance":5.208,"chnl":15,"x":17,"y":42,"page":0},{"id":125,"index":303,"char":"}","width":12,"height":41,"xoffset":-1,"yoffset":2.5,"xadvance":10.29,"chnl":15,"x":25,"y":42,"page":0},{"id":87,"index":100,"char":"W","width":40,"height":33,"xoffset":-2,"yoffset":4.5,"xadvance":36.162,"chnl":15,"x":25,"y":84,"page":0},{"id":106,"index":176,"char":"j","width":8,"height":39,"xoffset":-1,"yoffset":5.5,"xadvance":6.888,"chnl":15,"x":119,"y":0,"page":0},{"id":38,"index":337,"char":"&","width":30,"height":35,"xoffset":-1,"yoffset":3.5,"xadvance":26.796,"chnl":15,"x":38,"y":42,"page":0},{"id":37,"index":305,"char":"%","width":33,"height":34,"xoffset":-1,"yoffset":3.5,"xadvance":30.702,"chnl":15,"x":66,"y":78,"page":0},{"id":48,"index":280,"char":"0","width":25,"height":34,"xoffset":-1,"yoffset":3.5,"xadvance":22.932,"chnl":15,"x":69,"y":42,"page":0},{"id":50,"index":282,"char":"2","width":23,"height":34,"xoffset":-1,"yoffset":3.5,"xadvance":20.454,"chnl":15,"x":95,"y":42,"page":0},{"id":51,"index":283,"char":"3","width":24,"height":34,"xoffset":-1,"yoffset":3.5,"xadvance":21.588,"chnl":15,"x":100,"y":77,"page":0},{"id":53,"index":285,"char":"5","width":24,"height":34,"xoffset":-1,"yoffset":4.5,"xadvance":21.504,"chnl":15,"x":119,"y":40,"page":0},{"id":54,"index":286,"char":"6","width":24,"height":34,"xoffset":-1,"yoffset":3.5,"xadvance":22.05,"chnl":15,"x":128,"y":0,"page":0},{"id":56,"index":288,"char":"8","width":25,"height":34,"xoffset":-1,"yoffset":3.5,"xadvance":22.344,"chnl":15,"x":125,"y":75,"page":0},{"id":57,"index":289,"char":"9","width":24,"height":34,"xoffset":-1,"yoffset":3.5,"xadvance":22.05,"chnl":15,"x":144,"y":35,"page":0},{"id":63,"index":329,"char":"?","width":23,"height":34,"xoffset":-2,"yoffset":3.5,"xadvance":19.74,"chnl":15,"x":153,"y":0,"page":0},{"id":67,"index":13,"char":"C","width":30,"height":34,"xoffset":-1,"yoffset":3.5,"xadvance":27.51,"chnl":15,"x":151,"y":70,"page":0},{"id":71,"index":32,"char":"G","width":30,"height":34,"xoffset":-1,"yoffset":3.5,"xadvance":27.888,"chnl":15,"x":169,"y":35,"page":0},{"id":74,"index":49,"char":"J","width":22,"height":34,"xoffset":-2,"yoffset":4.5,"xadvance":19.446,"chnl":15,"x":177,"y":0,"page":0},{"id":79,"index":63,"char":"O","width":32,"height":34,"xoffset":-1,"yoffset":3.5,"xadvance":29.568,"chnl":15,"x":182,"y":70,"page":0},{"id":81,"index":73,"char":"Q","width":32,"height":34,"xoffset":-1,"yoffset":3.5,"xadvance":29.694,"chnl":15,"x":215,"y":0,"page":0},{"id":83,"index":78,"char":"S","width":28,"height":34,"xoffset":-1,"yoffset":3.5,"xadvance":24.738,"chnl":15,"x":200,"y":35,"page":0},{"id":85,"index":88,"char":"U","width":26,"height":34,"xoffset":-1,"yoffset":4.5,"xadvance":24.15,"chnl":15,"x":229,"y":35,"page":0},{"id":98,"index":140,"char":"b","width":24,"height":34,"xoffset":-1,"yoffset":4.5,"xadvance":21.546,"chnl":15,"x":215,"y":70,"page":0},{"id":100,"index":147,"char":"d","width":24,"height":34,"xoffset":-1,"yoffset":4.5,"xadvance":21.546,"chnl":15,"x":151,"y":105,"page":0},{"id":102,"index":159,"char":"f","width":16,"height":34,"xoffset":-2,"yoffset":3.5,"xadvance":13.02,"chnl":15,"x":240,"y":70,"page":0},{"id":103,"index":160,"char":"g","width":24,"height":34,"xoffset":-1,"yoffset":11.5,"xadvance":21.504,"chnl":15,"x":125,"y":110,"page":0},{"id":109,"index":184,"char":"m","width":34,"height":26,"xoffset":-1,"yoffset":11.5,"xadvance":32.634,"chnl":15,"x":66,"y":113,"page":0},{"id":33,"index":327,"char":"!","width":8,"height":33,"xoffset":-1,"yoffset":4.5,"xadvance":7.056,"chnl":15,"x":248,"y":0,"page":0},{"id":35,"index":304,"char":"#","width":32,"height":33,"xoffset":-2,"yoffset":4.5,"xadvance":28.014,"chnl":15,"x":25,"y":118,"page":0},{"id":49,"index":281,"char":"1","width":14,"height":33,"xoffset":-2,"yoffset":4.5,"xadvance":12.894,"chnl":15,"x":200,"y":0,"page":0},{"id":52,"index":284,"char":"4","width":25,"height":33,"xoffset":-2,"yoffset":4.5,"xadvance":21.63,"chnl":15,"x":58,"y":140,"page":0},{"id":55,"index":287,"char":"7","width":22,"height":33,"xoffset":-2,"yoffset":4.5,"xadvance":18.186,"chnl":15,"x":101,"y":112,"page":0},{"id":65,"index":2,"char":"A","width":30,"height":33,"xoffset":-2,"yoffset":4.5,"xadvance":25.494,"chnl":15,"x":0,"y":152,"page":0},{"id":66,"index":12,"char":"B","width":26,"height":33,"xoffset":-1,"yoffset":4.5,"xadvance":24.864,"chnl":15,"x":31,"y":152,"page":0},{"id":68,"index":19,"char":"D","width":29,"height":33,"xoffset":0,"yoffset":4.5,"xadvance":26.754,"chnl":15,"x":0,"y":186,"page":0},{"id":69,"index":21,"char":"E","width":23,"height":33,"xoffset":-1,"yoffset":4.5,"xadvance":20.958,"chnl":15,"x":0,"y":220,"page":0},{"id":70,"index":31,"char":"F","width":22,"height":33,"xoffset":-1,"yoffset":4.5,"xadvance":19.866,"chnl":15,"x":24,"y":220,"page":0},{"id":72,"index":37,"char":"H","width":27,"height":33,"xoffset":-1,"yoffset":4.5,"xadvance":26.418,"chnl":15,"x":30,"y":186,"page":0},{"id":73,"index":39,"char":"I","width":8,"height":33,"xoffset":0,"yoffset":4.5,"xadvance":7.35,"chnl":15,"x":47,"y":220,"page":0},{"id":75,"index":51,"char":"K","width":25,"height":33,"xoffset":0,"yoffset":4.5,"xadvance":22.554,"chnl":15,"x":56,"y":220,"page":0},{"id":76,"index":53,"char":"L","width":21,"height":33,"xoffset":0,"yoffset":4.5,"xadvance":19.026,"chnl":15,"x":58,"y":174,"page":0},{"id":77,"index":57,"char":"M","width":33,"height":33,"xoffset":-1,"yoffset":4.5,"xadvance":32.004,"chnl":15,"x":80,"y":174,"page":0},{"id":78,"index":58,"char":"N","width":28,"height":33,"xoffset":-1,"yoffset":4.5,"xadvance":26.67,"chnl":15,"x":82,"y":208,"page":0},{"id":80,"index":72,"char":"P","width":24,"height":33,"xoffset":-1,"yoffset":4.5,"xadvance":22.428,"chnl":15,"x":111,"y":208,"page":0},{"id":82,"index":74,"char":"R","width":26,"height":33,"xoffset":-1,"yoffset":4.5,"xadvance":23.856,"chnl":15,"x":114,"y":146,"page":0},{"id":84,"index":84,"char":"T","width":25,"height":33,"xoffset":-2,"yoffset":4.5,"xadvance":21.504,"chnl":15,"x":136,"y":180,"page":0},{"id":86,"index":99,"char":"V","width":29,"height":33,"xoffset":-2,"yoffset":4.5,"xadvance":24.822,"chnl":15,"x":141,"y":145,"page":0},{"id":88,"index":105,"char":"X","width":28,"height":33,"xoffset":-2,"yoffset":4.5,"xadvance":24.318,"chnl":15,"x":136,"y":214,"page":0},{"id":89,"index":106,"char":"Y","width":27,"height":33,"xoffset":-2,"yoffset":4.5,"xadvance":22.806,"chnl":15,"x":162,"y":179,"page":0},{"id":90,"index":111,"char":"Z","width":26,"height":33,"xoffset":-1,"yoffset":4.5,"xadvance":22.89,"chnl":15,"x":171,"y":140,"page":0},{"id":104,"index":165,"char":"h","width":22,"height":33,"xoffset":-1,"yoffset":4.5,"xadvance":20.58,"chnl":15,"x":176,"y":105,"page":0},{"id":107,"index":178,"char":"k","width":21,"height":33,"xoffset":-1,"yoffset":4.5,"xadvance":18.396,"chnl":15,"x":165,"y":213,"page":0},{"id":108,"index":180,"char":"l","width":8,"height":33,"xoffset":0,"yoffset":4.5,"xadvance":6.846,"chnl":15,"x":84,"y":140,"page":0},{"id":112,"index":199,"char":"p","width":24,"height":33,"xoffset":-1,"yoffset":11.5,"xadvance":21.546,"chnl":15,"x":187,"y":213,"page":0},{"id":113,"index":200,"char":"q","width":24,"height":33,"xoffset":-1,"yoffset":11.5,"xadvance":21.546,"chnl":15,"x":190,"y":174,"page":0},{"id":119,"index":227,"char":"w","width":33,"height":26,"xoffset":-2,"yoffset":11.5,"xadvance":28.938,"chnl":15,"x":198,"y":139,"page":0},{"id":121,"index":233,"char":"y","width":24,"height":33,"xoffset":-2,"yoffset":11.5,"xadvance":19.152,"chnl":15,"x":199,"y":105,"page":0},{"id":105,"index":167,"char":"i","width":8,"height":32,"xoffset":-1,"yoffset":5.5,"xadvance":6.888,"chnl":15,"x":224,"y":105,"page":0},{"id":116,"index":211,"char":"t","width":16,"height":31,"xoffset":-2,"yoffset":6.5,"xadvance":12.642,"chnl":15,"x":233,"y":105,"page":0},{"id":59,"index":325,"char":";","width":9,"height":30,"xoffset":-2,"yoffset":11.5,"xadvance":6.174,"chnl":15,"x":233,"y":137,"page":0},{"id":99,"index":141,"char":"c","width":24,"height":27,"xoffset":-1,"yoffset":11.5,"xadvance":20.664,"chnl":15,"x":215,"y":168,"page":0},{"id":101,"index":149,"char":"e","width":24,"height":27,"xoffset":-1,"yoffset":11.5,"xadvance":21.42,"chnl":15,"x":215,"y":196,"page":0},{"id":111,"index":190,"char":"o","width":24,"height":27,"xoffset":-1,"yoffset":11.5,"xadvance":21.798,"chnl":15,"x":212,"y":224,"page":0},{"id":115,"index":205,"char":"s","width":23,"height":27,"xoffset":-1,"yoffset":11.5,"xadvance":19.95,"chnl":15,"x":237,"y":224,"page":0},{"id":58,"index":324,"char":":","width":8,"height":26,"xoffset":-1,"yoffset":11.5,"xadvance":6.174,"chnl":15,"x":114,"y":180,"page":0},{"id":97,"index":130,"char":"a","width":24,"height":26,"xoffset":-1,"yoffset":11.5,"xadvance":21.546,"chnl":15,"x":256,"y":34,"page":0},{"id":110,"index":185,"char":"n","width":22,"height":26,"xoffset":-1,"yoffset":11.5,"xadvance":20.622,"chnl":15,"x":257,"y":0,"page":0},{"id":114,"index":201,"char":"r","width":17,"height":26,"xoffset":-1,"yoffset":11.5,"xadvance":14.112,"chnl":15,"x":93,"y":146,"page":0},{"id":117,"index":215,"char":"u","width":22,"height":26,"xoffset":-1,"yoffset":11.5,"xadvance":20.622,"chnl":15,"x":280,"y":0,"page":0},{"id":118,"index":226,"char":"v","width":24,"height":26,"xoffset":-2,"yoffset":11.5,"xadvance":19.824,"chnl":15,"x":240,"y":168,"page":0},{"id":120,"index":232,"char":"x","width":23,"height":26,"xoffset":-2,"yoffset":11.5,"xadvance":19.236,"chnl":15,"x":240,"y":195,"page":0},{"id":122,"index":238,"char":"z","width":21,"height":26,"xoffset":-1,"yoffset":11.5,"xadvance":18.228,"chnl":15,"x":243,"y":137,"page":0},{"id":43,"index":344,"char":"+","width":23,"height":25,"xoffset":-1,"yoffset":8.5,"xadvance":21.126,"chnl":15,"x":0,"y":126,"page":0},{"id":60,"index":350,"char":"<","width":23,"height":24,"xoffset":-1,"yoffset":8.5,"xadvance":21.126,"chnl":15,"x":250,"y":105,"page":0},{"id":62,"index":351,"char":">","width":23,"height":24,"xoffset":-1,"yoffset":8.5,"xadvance":21.126,"chnl":15,"x":261,"y":222,"page":0},{"id":61,"index":349,"char":"=","width":23,"height":17,"xoffset":-1,"yoffset":12.5,"xadvance":21.126,"chnl":15,"x":264,"y":195,"page":0},{"id":94,"index":374,"char":"^","width":23,"height":22,"xoffset":-1,"yoffset":4.5,"xadvance":20.622,"chnl":15,"x":257,"y":61,"page":0},{"id":126,"index":375,"char":"~","width":23,"height":13,"xoffset":-1,"yoffset":12.5,"xadvance":20.958,"chnl":15,"x":82,"y":242,"page":0},{"id":95,"index":293,"char":"_","width":19,"height":7,"xoffset":-2,"yoffset":37.5,"xadvance":15.96,"chnl":15,"x":264,"y":213,"page":0},{"id":42,"index":319,"char":"*","width":17,"height":17,"xoffset":-1,"yoffset":1.5,"xadvance":14.112,"chnl":15,"x":257,"y":84,"page":0},{"id":96,"index":377,"char":"`","width":15,"height":10,"xoffset":2,"yoffset":3.5,"xadvance":21,"chnl":15,"x":58,"y":208,"page":0},{"id":34,"index":308,"char":"\\"","width":13,"height":13,"xoffset":-1,"yoffset":4.5,"xadvance":11.34,"chnl":15,"x":106,"y":242,"page":0},{"id":39,"index":307,"char":"\'","width":8,"height":13,"xoffset":-1,"yoffset":4.5,"xadvance":6.258,"chnl":15,"x":120,"y":242,"page":0},{"id":44,"index":323,"char":",","width":9,"height":13,"xoffset":-2,"yoffset":29.5,"xadvance":5.88,"chnl":15,"x":123,"y":180,"page":0},{"id":45,"index":294,"char":"-","width":13,"height":7,"xoffset":-2,"yoffset":19.5,"xadvance":10.206,"chnl":15,"x":198,"y":166,"page":0},{"id":46,"index":322,"char":".","width":8,"height":8,"xoffset":-1,"yoffset":29.5,"xadvance":5.88,"chnl":15,"x":284,"y":213,"page":0},{"id":32,"index":1,"char":" ","width":0,"height":0,"xoffset":-2,"yoffset":33.5,"xadvance":6.972,"chnl":15,"x":69,"y":77,"page":0}],"info":{"face":"forma","size":42,"bold":0,"italic":0,"charset":[" ","!","\\"","#","$","%","&","\'","(",")","*","+",",","-",".","/","0","1","2","3","4","5","6","7","8","9",":",";","<","=",">","?","@","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","[","\\\\","]","^","_","`","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","{","|","}","~"],"unicode":1,"stretchH":100,"smooth":1,"aa":1,"padding":[2,2,2,2],"spacing":[0,0]},"common":{"lineHeight":50.4,"base":33.5,"scaleW":512,"scaleH":256,"pages":1,"packed":0,"alphaChnl":0,"redChnl":0,"greenChnl":0,"blueChnl":0},"distanceField":{"fieldType":"msdf","distanceRange":4},"kernings":[{"first":32,"second":65,"amount":-0.63},{"first":32,"second":67,"amount":-0.42},{"first":32,"second":71,"amount":-0.42},{"first":32,"second":74,"amount":-0.21},{"first":32,"second":79,"amount":-0.42},{"first":32,"second":81,"amount":-0.42},{"first":32,"second":84,"amount":-0.63},{"first":32,"second":86,"amount":-0.63},{"first":32,"second":87,"amount":-0.42},{"first":32,"second":88,"amount":-0.21},{"first":32,"second":89,"amount":-0.63},{"first":32,"second":97,"amount":-0.336},{"first":32,"second":99,"amount":-0.336},{"first":32,"second":100,"amount":-0.336},{"first":32,"second":101,"amount":-0.336},{"first":32,"second":103,"amount":-0.336},{"first":32,"second":111,"amount":-0.336},{"first":32,"second":113,"amount":-0.336},{"first":32,"second":116,"amount":-0.21},{"first":32,"second":118,"amount":-0.42},{"first":32,"second":119,"amount":-0.42},{"first":32,"second":120,"amount":-0.21},{"first":32,"second":121,"amount":-0.42},{"first":34,"second":48,"amount":-0.42},{"first":34,"second":49,"amount":0.21},{"first":34,"second":52,"amount":-2.52},{"first":34,"second":54,"amount":-0.21},{"first":34,"second":55,"amount":0.21},{"first":34,"second":56,"amount":-0.63},{"first":34,"second":65,"amount":-1.26},{"first":34,"second":67,"amount":-0.63},{"first":34,"second":71,"amount":-0.63},{"first":34,"second":74,"amount":-2.94},{"first":34,"second":79,"amount":-0.63},{"first":34,"second":81,"amount":-0.63},{"first":34,"second":83,"amount":-0.42},{"first":34,"second":86,"amount":0.21},{"first":34,"second":87,"amount":0.21},{"first":34,"second":88,"amount":-0.63},{"first":34,"second":89,"amount":0.21},{"first":34,"second":90,"amount":-0.42},{"first":34,"second":97,"amount":-1.05},{"first":34,"second":99,"amount":-1.05},{"first":34,"second":100,"amount":-1.05},{"first":34,"second":101,"amount":-1.05},{"first":34,"second":102,"amount":-0.21},{"first":34,"second":103,"amount":-1.05},{"first":34,"second":111,"amount":-1.05},{"first":34,"second":113,"amount":-1.05},{"first":34,"second":115,"amount":-0.84},{"first":34,"second":118,"amount":0.42},{"first":34,"second":119,"amount":0.21},{"first":34,"second":120,"amount":-0.21},{"first":34,"second":121,"amount":0.42},{"first":35,"second":55,"amount":-1.05},{"first":38,"second":65,"amount":0.21},{"first":38,"second":67,"amount":-0.966},{"first":38,"second":71,"amount":-0.966},{"first":38,"second":74,"amount":-1.05},{"first":38,"second":79,"amount":-0.966},{"first":38,"second":81,"amount":-0.966},{"first":38,"second":83,"amount":-1.68},{"first":38,"second":84,"amount":-4.62},{"first":38,"second":85,"amount":-0.63},{"first":38,"second":86,"amount":-3.78},{"first":38,"second":87,"amount":-2.73},{"first":38,"second":89,"amount":-4.62},{"first":38,"second":90,"amount":0.42},{"first":38,"second":97,"amount":-0.63},{"first":38,"second":99,"amount":-0.63},{"first":38,"second":100,"amount":-0.63},{"first":38,"second":101,"amount":-0.63},{"first":38,"second":102,"amount":-0.84},{"first":38,"second":103,"amount":-0.63},{"first":38,"second":111,"amount":-0.63},{"first":38,"second":113,"amount":-0.63},{"first":38,"second":116,"amount":-1.05},{"first":38,"second":122,"amount":0.42},{"first":39,"second":48,"amount":-0.42},{"first":39,"second":49,"amount":0.21},{"first":39,"second":52,"amount":-2.52},{"first":39,"second":54,"amount":-0.21},{"first":39,"second":55,"amount":0.21},{"first":39,"second":56,"amount":-0.63},{"first":39,"second":65,"amount":-1.26},{"first":39,"second":67,"amount":-0.63},{"first":39,"second":71,"amount":-0.63},{"first":39,"second":74,"amount":-2.94},{"first":39,"second":79,"amount":-0.63},{"first":39,"second":81,"amount":-0.63},{"first":39,"second":83,"amount":-0.42},{"first":39,"second":86,"amount":0.21},{"first":39,"second":87,"amount":0.21},{"first":39,"second":88,"amount":-0.63},{"first":39,"second":89,"amount":0.21},{"first":39,"second":90,"amount":-0.42},{"first":39,"second":97,"amount":-1.05},{"first":39,"second":99,"amount":-1.05},{"first":39,"second":100,"amount":-1.05},{"first":39,"second":101,"amount":-1.05},{"first":39,"second":102,"amount":-0.21},{"first":39,"second":103,"amount":-1.05},{"first":39,"second":111,"amount":-1.05},{"first":39,"second":113,"amount":-1.05},{"first":39,"second":115,"amount":-0.84},{"first":39,"second":118,"amount":0.42},{"first":39,"second":119,"amount":0.21},{"first":39,"second":120,"amount":-0.21},{"first":39,"second":121,"amount":0.42},{"first":40,"second":48,"amount":-1.89},{"first":40,"second":49,"amount":-1.47},{"first":40,"second":50,"amount":-0.84},{"first":40,"second":51,"amount":-1.26},{"first":40,"second":52,"amount":-1.89},{"first":40,"second":53,"amount":-1.05},{"first":40,"second":54,"amount":-1.89},{"first":40,"second":55,"amount":0.42},{"first":40,"second":56,"amount":-1.47},{"first":40,"second":57,"amount":-1.26},{"first":40,"second":65,"amount":-0.84},{"first":40,"second":67,"amount":-1.26},{"first":40,"second":71,"amount":-1.26},{"first":40,"second":74,"amount":-1.05},{"first":40,"second":79,"amount":-1.26},{"first":40,"second":81,"amount":-1.26},{"first":40,"second":83,"amount":-1.47},{"first":40,"second":88,"amount":-0.63},{"first":40,"second":90,"amount":-0.21},{"first":40,"second":97,"amount":-0.21},{"first":40,"second":99,"amount":-0.21},{"first":40,"second":100,"amount":-0.21},{"first":40,"second":101,"amount":-0.21},{"first":40,"second":103,"amount":-0.21},{"first":40,"second":111,"amount":-0.21},{"first":40,"second":113,"amount":-0.21},{"first":40,"second":116,"amount":-0.21},{"first":40,"second":118,"amount":-0.21},{"first":40,"second":119,"amount":-0.21},{"first":40,"second":120,"amount":-0.42},{"first":40,"second":121,"amount":-0.21},{"first":42,"second":44,"amount":-1.89},{"first":42,"second":46,"amount":-1.89},{"first":42,"second":52,"amount":-4.41},{"first":42,"second":53,"amount":-0.21},{"first":42,"second":55,"amount":0.21},{"first":42,"second":56,"amount":-0.42},{"first":42,"second":65,"amount":-4.41},{"first":42,"second":67,"amount":-1.05},{"first":42,"second":71,"amount":-1.05},{"first":42,"second":74,"amount":-7.14},{"first":42,"second":79,"amount":-1.05},{"first":42,"second":81,"amount":-1.05},{"first":42,"second":83,"amount":-0.21},{"first":42,"second":86,"amount":0.21},{"first":42,"second":87,"amount":0.21},{"first":42,"second":88,"amount":-0.42},{"first":42,"second":89,"amount":0.21},{"first":42,"second":90,"amount":-0.42},{"first":42,"second":97,"amount":-1.47},{"first":42,"second":99,"amount":-1.47},{"first":42,"second":100,"amount":-1.47},{"first":42,"second":101,"amount":-1.47},{"first":42,"second":103,"amount":-1.47},{"first":42,"second":111,"amount":-1.47},{"first":42,"second":113,"amount":-1.47},{"first":42,"second":115,"amount":-0.63},{"first":42,"second":118,"amount":0.42},{"first":42,"second":121,"amount":0.42},{"first":43,"second":49,"amount":-3.36},{"first":43,"second":50,"amount":-1.89},{"first":43,"second":51,"amount":-1.89},{"first":43,"second":52,"amount":-0.63},{"first":43,"second":53,"amount":-0.63},{"first":43,"second":55,"amount":-4.2},{"first":43,"second":56,"amount":-1.26},{"first":43,"second":57,"amount":-0.42},{"first":44,"second":32,"amount":-0.63},{"first":44,"second":48,"amount":-1.05},{"first":44,"second":49,"amount":-3.36},{"first":44,"second":50,"amount":0.21},{"first":44,"second":51,"amount":-0.21},{"first":44,"second":52,"amount":-1.05},{"first":44,"second":53,"amount":-0.21},{"first":44,"second":54,"amount":-1.05},{"first":44,"second":55,"amount":-2.1},{"first":44,"second":56,"amount":-0.21},{"first":44,"second":57,"amount":-0.84},{"first":44,"second":65,"amount":0.63},{"first":44,"second":67,"amount":-1.47},{"first":44,"second":71,"amount":-1.47},{"first":44,"second":74,"amount":-0.21},{"first":44,"second":79,"amount":-1.47},{"first":44,"second":81,"amount":-1.47},{"first":44,"second":83,"amount":-0.21},{"first":44,"second":84,"amount":-2.31},{"first":44,"second":85,"amount":-0.63},{"first":44,"second":86,"amount":-2.52},{"first":44,"second":87,"amount":-1.26},{"first":44,"second":89,"amount":-2.73},{"first":44,"second":97,"amount":-0.63},{"first":44,"second":99,"amount":-0.63},{"first":44,"second":100,"amount":-0.63},{"first":44,"second":101,"amount":-0.63},{"first":44,"second":102,"amount":-0.84},{"first":44,"second":103,"amount":-0.63},{"first":44,"second":111,"amount":-0.63},{"first":44,"second":113,"amount":-0.63},{"first":44,"second":115,"amount":-0.21},{"first":44,"second":116,"amount":-0.84},{"first":44,"second":118,"amount":-1.68},{"first":44,"second":119,"amount":-1.05},{"first":44,"second":121,"amount":-1.68},{"first":45,"second":48,"amount":0.21},{"first":45,"second":49,"amount":-3.36},{"first":45,"second":50,"amount":-1.47},{"first":45,"second":51,"amount":-1.26},{"first":45,"second":52,"amount":0.336},{"first":45,"second":53,"amount":-0.21},{"first":45,"second":54,"amount":0.21},{"first":45,"second":55,"amount":-3.36},{"first":45,"second":56,"amount":-0.42},{"first":45,"second":57,"amount":-0.63},{"first":45,"second":65,"amount":-1.47},{"first":45,"second":67,"amount":0.126},{"first":45,"second":71,"amount":0.126},{"first":45,"second":79,"amount":0.126},{"first":45,"second":81,"amount":0.126},{"first":45,"second":84,"amount":-3.99},{"first":45,"second":86,"amount":-2.73},{"first":45,"second":87,"amount":-1.89},{"first":45,"second":88,"amount":-3.15},{"first":45,"second":89,"amount":-3.99},{"first":45,"second":90,"amount":-1.68},{"first":45,"second":97,"amount":0.21},{"first":45,"second":99,"amount":0.21},{"first":45,"second":100,"amount":0.21},{"first":45,"second":101,"amount":0.21},{"first":45,"second":102,"amount":-0.42},{"first":45,"second":103,"amount":0.21},{"first":45,"second":111,"amount":0.21},{"first":45,"second":113,"amount":0.21},{"first":45,"second":115,"amount":-0.21},{"first":45,"second":116,"amount":-0.42},{"first":45,"second":118,"amount":-0.84},{"first":45,"second":119,"amount":-0.42},{"first":45,"second":120,"amount":-2.52},{"first":45,"second":121,"amount":-0.84},{"first":45,"second":122,"amount":-1.47},{"first":46,"second":32,"amount":-0.63},{"first":46,"second":48,"amount":-1.05},{"first":46,"second":49,"amount":-3.36},{"first":46,"second":50,"amount":0.21},{"first":46,"second":51,"amount":-0.21},{"first":46,"second":52,"amount":-1.05},{"first":46,"second":53,"amount":-0.21},{"first":46,"second":54,"amount":-1.05},{"first":46,"second":55,"amount":-2.1},{"first":46,"second":56,"amount":-0.21},{"first":46,"second":57,"amount":-0.84},{"first":46,"second":65,"amount":0.63},{"first":46,"second":67,"amount":-1.47},{"first":46,"second":71,"amount":-1.47},{"first":46,"second":74,"amount":-0.21},{"first":46,"second":79,"amount":-1.47},{"first":46,"second":81,"amount":-1.47},{"first":46,"second":83,"amount":-0.21},{"first":46,"second":84,"amount":-2.31},{"first":46,"second":85,"amount":-0.63},{"first":46,"second":86,"amount":-2.52},{"first":46,"second":87,"amount":-1.26},{"first":46,"second":89,"amount":-2.73},{"first":46,"second":97,"amount":-0.63},{"first":46,"second":99,"amount":-0.63},{"first":46,"second":100,"amount":-0.63},{"first":46,"second":101,"amount":-0.63},{"first":46,"second":102,"amount":-0.84},{"first":46,"second":103,"amount":-0.63},{"first":46,"second":111,"amount":-0.63},{"first":46,"second":113,"amount":-0.63},{"first":46,"second":115,"amount":-0.21},{"first":46,"second":116,"amount":-0.84},{"first":46,"second":118,"amount":-1.68},{"first":46,"second":119,"amount":-1.05},{"first":46,"second":121,"amount":-1.68},{"first":47,"second":47,"amount":-5.25},{"first":47,"second":55,"amount":0.42},{"first":47,"second":65,"amount":-3.36},{"first":47,"second":67,"amount":-1.47},{"first":47,"second":71,"amount":-1.47},{"first":47,"second":74,"amount":-3.15},{"first":47,"second":79,"amount":-1.47},{"first":47,"second":81,"amount":-1.47},{"first":47,"second":83,"amount":-1.26},{"first":47,"second":84,"amount":0.21},{"first":47,"second":86,"amount":0.21},{"first":47,"second":87,"amount":0.21},{"first":47,"second":88,"amount":-0.84},{"first":47,"second":89,"amount":0.21},{"first":47,"second":90,"amount":-0.84},{"first":47,"second":97,"amount":-1.89},{"first":47,"second":99,"amount":-1.89},{"first":47,"second":100,"amount":-1.89},{"first":47,"second":101,"amount":-1.89},{"first":47,"second":102,"amount":-0.756},{"first":47,"second":103,"amount":-1.89},{"first":47,"second":109,"amount":-0.84},{"first":47,"second":110,"amount":-0.84},{"first":47,"second":111,"amount":-1.89},{"first":47,"second":112,"amount":-0.84},{"first":47,"second":113,"amount":-1.89},{"first":47,"second":114,"amount":-0.84},{"first":47,"second":115,"amount":-1.47},{"first":47,"second":116,"amount":-0.63},{"first":47,"second":117,"amount":-0.42},{"first":47,"second":118,"amount":-0.63},{"first":47,"second":119,"amount":-0.63},{"first":47,"second":120,"amount":-0.63},{"first":47,"second":121,"amount":-0.63},{"first":47,"second":122,"amount":-1.68},{"first":48,"second":34,"amount":-0.42},{"first":48,"second":39,"amount":-0.42},{"first":48,"second":41,"amount":-1.89},{"first":48,"second":44,"amount":-1.05},{"first":48,"second":45,"amount":0.21},{"first":48,"second":46,"amount":-1.05},{"first":48,"second":49,"amount":-0.21},{"first":48,"second":52,"amount":0.126},{"first":48,"second":53,"amount":-0.21},{"first":48,"second":55,"amount":-1.47},{"first":48,"second":93,"amount":-1.89},{"first":48,"second":125,"amount":-1.89},{"first":49,"second":41,"amount":-0.63},{"first":49,"second":43,"amount":-0.84},{"first":49,"second":49,"amount":-0.21},{"first":49,"second":60,"amount":-0.21},{"first":49,"second":93,"amount":-0.63},{"first":49,"second":125,"amount":-0.63},{"first":50,"second":34,"amount":0.21},{"first":50,"second":39,"amount":0.21},{"first":50,"second":41,"amount":-0.84},{"first":50,"second":43,"amount":-1.68},{"first":50,"second":44,"amount":0.126},{"first":50,"second":45,"amount":-1.89},{"first":50,"second":46,"amount":0.126},{"first":50,"second":49,"amount":0.42},{"first":50,"second":50,"amount":0.42},{"first":50,"second":51,"amount":-0.21},{"first":50,"second":52,"amount":-2.73},{"first":50,"second":53,"amount":-0.21},{"first":50,"second":54,"amount":-0.126},{"first":50,"second":55,"amount":-0.336},{"first":50,"second":56,"amount":-0.126},{"first":50,"second":57,"amount":0.21},{"first":50,"second":60,"amount":-1.47},{"first":50,"second":63,"amount":0.21},{"first":50,"second":93,"amount":-0.84},{"first":50,"second":116,"amount":0.21},{"first":50,"second":125,"amount":-0.84},{"first":51,"second":34,"amount":-0.21},{"first":51,"second":39,"amount":-0.21},{"first":51,"second":41,"amount":-1.26},{"first":51,"second":43,"amount":-1.05},{"first":51,"second":44,"amount":-0.21},{"first":51,"second":46,"amount":-0.21},{"first":51,"second":52,"amount":0.126},{"first":51,"second":55,"amount":-0.966},{"first":51,"second":57,"amount":-0.42},{"first":51,"second":60,"amount":-0.84},{"first":51,"second":63,"amount":-0.21},{"first":51,"second":93,"amount":-1.26},{"first":51,"second":125,"amount":-1.26},{"first":52,"second":34,"amount":-1.26},{"first":52,"second":37,"amount":-0.84},{"first":52,"second":39,"amount":-1.26},{"first":52,"second":41,"amount":-1.68},{"first":52,"second":42,"amount":-1.68},{"first":52,"second":43,"amount":-1.47},{"first":52,"second":45,"amount":0.21},{"first":52,"second":49,"amount":-0.84},{"first":52,"second":52,"amount":0.21},{"first":52,"second":53,"amount":-0.336},{"first":52,"second":55,"amount":-1.176},{"first":52,"second":57,"amount":-0.84},{"first":52,"second":60,"amount":-1.05},{"first":52,"second":63,"amount":-1.68},{"first":52,"second":93,"amount":-1.68},{"first":52,"second":125,"amount":-1.68},{"first":53,"second":34,"amount":-1.05},{"first":53,"second":39,"amount":-1.05},{"first":53,"second":41,"amount":-1.26},{"first":53,"second":42,"amount":-1.26},{"first":53,"second":43,"amount":-0.21},{"first":53,"second":44,"amount":-0.21},{"first":53,"second":45,"amount":0.21},{"first":53,"second":46,"amount":-0.21},{"first":53,"second":49,"amount":-1.89},{"first":53,"second":53,"amount":-0.126},{"first":53,"second":55,"amount":-0.84},{"first":53,"second":57,"amount":-0.546},{"first":53,"second":63,"amount":-1.68},{"first":53,"second":93,"amount":-1.26},{"first":53,"second":125,"amount":-1.26},{"first":54,"second":34,"amount":-0.63},{"first":54,"second":37,"amount":-0.21},{"first":54,"second":39,"amount":-0.63},{"first":54,"second":41,"amount":-1.68},{"first":54,"second":42,"amount":-0.21},{"first":54,"second":43,"amount":-0.21},{"first":54,"second":44,"amount":-0.42},{"first":54,"second":45,"amount":0.21},{"first":54,"second":46,"amount":-0.42},{"first":54,"second":49,"amount":-0.63},{"first":54,"second":52,"amount":0.126},{"first":54,"second":54,"amount":-0.126},{"first":54,"second":55,"amount":-1.05},{"first":54,"second":57,"amount":-0.336},{"first":54,"second":60,"amount":-0.21},{"first":54,"second":63,"amount":-0.42},{"first":54,"second":93,"amount":-1.68},{"first":54,"second":125,"amount":-1.68},{"first":55,"second":34,"amount":0.42},{"first":55,"second":37,"amount":0.126},{"first":55,"second":39,"amount":0.42},{"first":55,"second":41,"amount":0.546},{"first":55,"second":42,"amount":0.42},{"first":55,"second":43,"amount":-3.15},{"first":55,"second":44,"amount":-2.52},{"first":55,"second":45,"amount":-3.15},{"first":55,"second":46,"amount":-2.52},{"first":55,"second":47,"amount":-1.89},{"first":55,"second":48,"amount":-1.05},{"first":55,"second":49,"amount":0.21},{"first":55,"second":50,"amount":-0.546},{"first":55,"second":51,"amount":-0.63},{"first":55,"second":52,"amount":-3.066},{"first":55,"second":53,"amount":-0.546},{"first":55,"second":54,"amount":-1.05},{"first":55,"second":55,"amount":1.176},{"first":55,"second":56,"amount":-0.84},{"first":55,"second":57,"amount":-0.21},{"first":55,"second":58,"amount":-0.63},{"first":55,"second":59,"amount":-0.63},{"first":55,"second":60,"amount":-2.52},{"first":55,"second":61,"amount":-1.26},{"first":55,"second":62,"amount":-0.42},{"first":55,"second":92,"amount":0.42},{"first":55,"second":93,"amount":0.546},{"first":55,"second":116,"amount":-0.63},{"first":55,"second":125,"amount":0.546},{"first":56,"second":34,"amount":-0.63},{"first":56,"second":39,"amount":-0.63},{"first":56,"second":41,"amount":-1.47},{"first":56,"second":42,"amount":-0.42},{"first":56,"second":43,"amount":-1.26},{"first":56,"second":44,"amount":-0.21},{"first":56,"second":45,"amount":-0.42},{"first":56,"second":46,"amount":-0.21},{"first":56,"second":53,"amount":-0.21},{"first":56,"second":55,"amount":-1.176},{"first":56,"second":60,"amount":-0.84},{"first":56,"second":93,"amount":-1.47},{"first":56,"second":125,"amount":-1.47},{"first":57,"second":34,"amount":-0.63},{"first":57,"second":39,"amount":-0.63},{"first":57,"second":41,"amount":-1.26},{"first":57,"second":44,"amount":-1.05},{"first":57,"second":45,"amount":0.21},{"first":57,"second":46,"amount":-1.05},{"first":57,"second":49,"amount":-0.21},{"first":57,"second":50,"amount":-0.21},{"first":57,"second":51,"amount":-0.21},{"first":57,"second":53,"amount":-0.336},{"first":57,"second":55,"amount":-1.47},{"first":57,"second":57,"amount":-0.126},{"first":57,"second":63,"amount":-0.21},{"first":57,"second":93,"amount":-1.26},{"first":57,"second":125,"amount":-1.26},{"first":58,"second":47,"amount":-0.21},{"first":58,"second":49,"amount":-0.42},{"first":58,"second":52,"amount":-0.42},{"first":58,"second":55,"amount":-0.84},{"first":58,"second":65,"amount":0.21},{"first":58,"second":84,"amount":-1.89},{"first":58,"second":86,"amount":-0.42},{"first":58,"second":87,"amount":-0.21},{"first":58,"second":89,"amount":-0.63},{"first":58,"second":118,"amount":0.42},{"first":58,"second":119,"amount":0.21},{"first":58,"second":121,"amount":0.42},{"first":59,"second":47,"amount":-0.21},{"first":59,"second":49,"amount":-0.42},{"first":59,"second":52,"amount":-0.42},{"first":59,"second":55,"amount":-0.84},{"first":59,"second":65,"amount":0.21},{"first":59,"second":84,"amount":-1.89},{"first":59,"second":86,"amount":-0.42},{"first":59,"second":87,"amount":-0.21},{"first":59,"second":89,"amount":-0.63},{"first":59,"second":118,"amount":0.42},{"first":59,"second":119,"amount":0.21},{"first":59,"second":121,"amount":0.42},{"first":60,"second":52,"amount":-0.21},{"first":60,"second":55,"amount":-0.42},{"first":61,"second":49,"amount":-1.26},{"first":61,"second":55,"amount":-2.52},{"first":62,"second":49,"amount":-2.94},{"first":62,"second":50,"amount":-2.31},{"first":62,"second":51,"amount":-2.1},{"first":62,"second":52,"amount":-0.63},{"first":62,"second":53,"amount":-0.21},{"first":62,"second":55,"amount":-4.62},{"first":62,"second":56,"amount":-0.84},{"first":62,"second":57,"amount":-0.21},{"first":64,"second":65,"amount":-0.84},{"first":64,"second":74,"amount":0.126},{"first":64,"second":84,"amount":-3.99},{"first":64,"second":86,"amount":-2.94},{"first":64,"second":87,"amount":-2.31},{"first":64,"second":88,"amount":-2.1},{"first":64,"second":89,"amount":-4.2},{"first":64,"second":90,"amount":-1.05},{"first":64,"second":102,"amount":-0.63},{"first":64,"second":116,"amount":-0.21},{"first":64,"second":118,"amount":-0.336},{"first":64,"second":119,"amount":-0.21},{"first":64,"second":120,"amount":-0.84},{"first":64,"second":121,"amount":-0.336},{"first":64,"second":122,"amount":-0.84},{"first":65,"second":32,"amount":-0.63},{"first":65,"second":33,"amount":0.21},{"first":65,"second":34,"amount":-1.26},{"first":65,"second":38,"amount":-0.21},{"first":65,"second":39,"amount":-1.26},{"first":65,"second":41,"amount":-0.84},{"first":65,"second":42,"amount":-4.41},{"first":65,"second":44,"amount":0.63},{"first":65,"second":45,"amount":-1.47},{"first":65,"second":46,"amount":0.63},{"first":65,"second":47,"amount":-0.21},{"first":65,"second":58,"amount":0.21},{"first":65,"second":59,"amount":0.21},{"first":65,"second":63,"amount":-3.57},{"first":65,"second":64,"amount":-0.63},{"first":65,"second":65,"amount":1.008},{"first":65,"second":67,"amount":-1.26},{"first":65,"second":71,"amount":-1.26},{"first":65,"second":79,"amount":-1.26},{"first":65,"second":81,"amount":-1.26},{"first":65,"second":83,"amount":-0.84},{"first":65,"second":84,"amount":-3.36},{"first":65,"second":85,"amount":-1.26},{"first":65,"second":86,"amount":-2.94},{"first":65,"second":87,"amount":-2.1},{"first":65,"second":88,"amount":0.756},{"first":65,"second":89,"amount":-3.15},{"first":65,"second":90,"amount":0.42},{"first":65,"second":92,"amount":-3.36},{"first":65,"second":93,"amount":-0.84},{"first":65,"second":97,"amount":-0.756},{"first":65,"second":99,"amount":-0.756},{"first":65,"second":100,"amount":-0.756},{"first":65,"second":101,"amount":-0.756},{"first":65,"second":102,"amount":-0.84},{"first":65,"second":103,"amount":-0.756},{"first":65,"second":111,"amount":-0.756},{"first":65,"second":113,"amount":-0.756},{"first":65,"second":115,"amount":-0.546},{"first":65,"second":116,"amount":-1.386},{"first":65,"second":117,"amount":-0.546},{"first":65,"second":118,"amount":-1.47},{"first":65,"second":119,"amount":-0.966},{"first":65,"second":120,"amount":0.546},{"first":65,"second":121,"amount":-1.47},{"first":65,"second":122,"amount":0.42},{"first":65,"second":125,"amount":-0.84},{"first":66,"second":32,"amount":-0.21},{"first":66,"second":34,"amount":-0.21},{"first":66,"second":39,"amount":-0.21},{"first":66,"second":41,"amount":-1.68},{"first":66,"second":42,"amount":-0.42},{"first":66,"second":44,"amount":-0.21},{"first":66,"second":46,"amount":-0.21},{"first":66,"second":47,"amount":-2.1},{"first":66,"second":65,"amount":-0.84},{"first":66,"second":74,"amount":0.42},{"first":66,"second":84,"amount":-1.26},{"first":66,"second":86,"amount":-1.05},{"first":66,"second":87,"amount":-0.966},{"first":66,"second":88,"amount":-1.47},{"first":66,"second":89,"amount":-1.596},{"first":66,"second":92,"amount":-1.68},{"first":66,"second":93,"amount":-1.68},{"first":66,"second":98,"amount":-0.126},{"first":66,"second":102,"amount":-0.336},{"first":66,"second":104,"amount":-0.126},{"first":66,"second":107,"amount":-0.126},{"first":66,"second":108,"amount":-0.126},{"first":66,"second":118,"amount":-0.42},{"first":66,"second":119,"amount":-0.546},{"first":66,"second":120,"amount":-1.05},{"first":66,"second":121,"amount":-0.42},{"first":66,"second":122,"amount":-0.756},{"first":66,"second":125,"amount":-1.68},{"first":67,"second":32,"amount":-0.42},{"first":67,"second":34,"amount":-0.42},{"first":67,"second":39,"amount":-0.42},{"first":67,"second":41,"amount":-1.26},{"first":67,"second":42,"amount":-0.21},{"first":67,"second":44,"amount":-0.84},{"first":67,"second":45,"amount":0.126},{"first":67,"second":46,"amount":-0.84},{"first":67,"second":47,"amount":-1.89},{"first":67,"second":65,"amount":-1.26},{"first":67,"second":84,"amount":-1.05},{"first":67,"second":86,"amount":-1.05},{"first":67,"second":87,"amount":-0.84},{"first":67,"second":88,"amount":-1.26},{"first":67,"second":89,"amount":-1.68},{"first":67,"second":90,"amount":-0.84},{"first":67,"second":92,"amount":-1.05},{"first":67,"second":93,"amount":-1.26},{"first":67,"second":97,"amount":0.21},{"first":67,"second":99,"amount":0.21},{"first":67,"second":100,"amount":0.21},{"first":67,"second":101,"amount":0.21},{"first":67,"second":103,"amount":0.21},{"first":67,"second":111,"amount":0.21},{"first":67,"second":113,"amount":0.21},{"first":67,"second":115,"amount":-0.21},{"first":67,"second":118,"amount":0.336},{"first":67,"second":119,"amount":0.21},{"first":67,"second":121,"amount":0.336},{"first":67,"second":122,"amount":-0.21},{"first":67,"second":125,"amount":-1.26},{"first":68,"second":32,"amount":-0.42},{"first":68,"second":34,"amount":-0.63},{"first":68,"second":39,"amount":-0.63},{"first":68,"second":41,"amount":-1.26},{"first":68,"second":42,"amount":-1.05},{"first":68,"second":44,"amount":-1.47},{"first":68,"second":45,"amount":0.126},{"first":68,"second":46,"amount":-1.47},{"first":68,"second":47,"amount":-2.73},{"first":68,"second":63,"amount":-0.63},{"first":68,"second":65,"amount":-1.26},{"first":68,"second":84,"amount":-2.1},{"first":68,"second":86,"amount":-1.26},{"first":68,"second":87,"amount":-0.84},{"first":68,"second":88,"amount":-2.73},{"first":68,"second":89,"amount":-2.1},{"first":68,"second":90,"amount":-1.47},{"first":68,"second":92,"amount":-1.47},{"first":68,"second":93,"amount":-1.26},{"first":68,"second":97,"amount":0.21},{"first":68,"second":99,"amount":0.21},{"first":68,"second":100,"amount":0.21},{"first":68,"second":101,"amount":0.21},{"first":68,"second":103,"amount":0.21},{"first":68,"second":111,"amount":0.21},{"first":68,"second":113,"amount":0.21},{"first":68,"second":122,"amount":-0.21},{"first":68,"second":125,"amount":-1.26},{"first":69,"second":42,"amount":-0.21},{"first":69,"second":45,"amount":-0.42},{"first":69,"second":47,"amount":-0.42},{"first":69,"second":63,"amount":-0.21},{"first":69,"second":64,"amount":-0.21},{"first":69,"second":65,"amount":0.546},{"first":69,"second":67,"amount":-0.84},{"first":69,"second":71,"amount":-0.84},{"first":69,"second":74,"amount":-0.42},{"first":69,"second":79,"amount":-0.84},{"first":69,"second":81,"amount":-0.84},{"first":69,"second":86,"amount":0.126},{"first":69,"second":88,"amount":0.126},{"first":69,"second":89,"amount":0.21},{"first":69,"second":92,"amount":-0.21},{"first":69,"second":97,"amount":-0.546},{"first":69,"second":99,"amount":-0.546},{"first":69,"second":100,"amount":-0.546},{"first":69,"second":101,"amount":-0.546},{"first":69,"second":102,"amount":-0.63},{"first":69,"second":103,"amount":-0.546},{"first":69,"second":111,"amount":-0.546},{"first":69,"second":113,"amount":-0.546},{"first":69,"second":115,"amount":-0.42},{"first":69,"second":116,"amount":-0.42},{"first":69,"second":117,"amount":-0.42},{"first":69,"second":118,"amount":-0.42},{"first":69,"second":119,"amount":-0.42},{"first":69,"second":120,"amount":0.126},{"first":69,"second":121,"amount":-0.42},{"first":70,"second":32,"amount":-0.42},{"first":70,"second":38,"amount":-0.42},{"first":70,"second":42,"amount":0.21},{"first":70,"second":44,"amount":-2.31},{"first":70,"second":46,"amount":-2.31},{"first":70,"second":47,"amount":-3.15},{"first":70,"second":64,"amount":-0.21},{"first":70,"second":65,"amount":-2.52},{"first":70,"second":74,"amount":-1.47},{"first":70,"second":83,"amount":-0.21},{"first":70,"second":84,"amount":0.126},{"first":70,"second":86,"amount":0.63},{"first":70,"second":87,"amount":0.336},{"first":70,"second":88,"amount":-0.21},{"first":70,"second":89,"amount":0.756},{"first":70,"second":90,"amount":-0.84},{"first":70,"second":92,"amount":0.21},{"first":70,"second":97,"amount":-0.21},{"first":70,"second":99,"amount":-0.21},{"first":70,"second":100,"amount":-0.21},{"first":70,"second":101,"amount":-0.21},{"first":70,"second":103,"amount":-0.21},{"first":70,"second":109,"amount":-0.21},{"first":70,"second":110,"amount":-0.21},{"first":70,"second":111,"amount":-0.21},{"first":70,"second":112,"amount":-0.21},{"first":70,"second":113,"amount":-0.21},{"first":70,"second":114,"amount":-0.21},{"first":70,"second":115,"amount":-0.21},{"first":70,"second":116,"amount":-0.21},{"first":70,"second":118,"amount":-0.84},{"first":70,"second":119,"amount":-0.42},{"first":70,"second":120,"amount":-1.89},{"first":70,"second":121,"amount":-0.84},{"first":70,"second":122,"amount":-1.05},{"first":71,"second":32,"amount":-0.42},{"first":71,"second":34,"amount":-0.63},{"first":71,"second":39,"amount":-0.63},{"first":71,"second":41,"amount":-1.26},{"first":71,"second":42,"amount":-1.05},{"first":71,"second":44,"amount":-1.47},{"first":71,"second":45,"amount":0.126},{"first":71,"second":46,"amount":-1.47},{"first":71,"second":47,"amount":-2.73},{"first":71,"second":63,"amount":-0.63},{"first":71,"second":65,"amount":-1.26},{"first":71,"second":84,"amount":-2.1},{"first":71,"second":86,"amount":-1.26},{"first":71,"second":87,"amount":-0.84},{"first":71,"second":88,"amount":-2.73},{"first":71,"second":89,"amount":-2.1},{"first":71,"second":90,"amount":-1.47},{"first":71,"second":92,"amount":-1.47},{"first":71,"second":93,"amount":-1.26},{"first":71,"second":97,"amount":0.21},{"first":71,"second":99,"amount":0.21},{"first":71,"second":100,"amount":0.21},{"first":71,"second":101,"amount":0.21},{"first":71,"second":103,"amount":0.21},{"first":71,"second":111,"amount":0.21},{"first":71,"second":113,"amount":0.21},{"first":71,"second":122,"amount":-0.21},{"first":71,"second":125,"amount":-1.26},{"first":72,"second":47,"amount":-1.26},{"first":73,"second":47,"amount":-1.26},{"first":74,"second":44,"amount":-0.63},{"first":74,"second":46,"amount":-0.63},{"first":74,"second":47,"amount":-1.89},{"first":74,"second":63,"amount":0.21},{"first":74,"second":65,"amount":-1.26},{"first":74,"second":88,"amount":-0.63},{"first":74,"second":89,"amount":0.126},{"first":74,"second":97,"amount":0.21},{"first":74,"second":99,"amount":0.21},{"first":74,"second":100,"amount":0.21},{"first":74,"second":101,"amount":0.21},{"first":74,"second":103,"amount":0.21},{"first":74,"second":111,"amount":0.21},{"first":74,"second":113,"amount":0.21},{"first":74,"second":118,"amount":0.21},{"first":74,"second":121,"amount":0.21},{"first":75,"second":32,"amount":-0.21},{"first":75,"second":34,"amount":-1.05},{"first":75,"second":38,"amount":-0.42},{"first":75,"second":39,"amount":-1.05},{"first":75,"second":41,"amount":-0.42},{"first":75,"second":42,"amount":-0.84},{"first":75,"second":44,"amount":0.84},{"first":75,"second":45,"amount":-3.57},{"first":75,"second":46,"amount":0.84},{"first":75,"second":47,"amount":-0.21},{"first":75,"second":58,"amount":0.126},{"first":75,"second":59,"amount":0.126},{"first":75,"second":63,"amount":-2.94},{"first":75,"second":64,"amount":-0.42},{"first":75,"second":65,"amount":1.05},{"first":75,"second":67,"amount":-2.52},{"first":75,"second":71,"amount":-2.52},{"first":75,"second":74,"amount":-0.84},{"first":75,"second":79,"amount":-2.52},{"first":75,"second":81,"amount":-2.52},{"first":75,"second":83,"amount":-1.89},{"first":75,"second":84,"amount":-1.05},{"first":75,"second":85,"amount":-1.596},{"first":75,"second":86,"amount":-0.672},{"first":75,"second":87,"amount":-0.966},{"first":75,"second":88,"amount":0.546},{"first":75,"second":89,"amount":-0.588},{"first":75,"second":90,"amount":0.63},{"first":75,"second":92,"amount":-0.84},{"first":75,"second":93,"amount":-0.42},{"first":75,"second":97,"amount":-1.806},{"first":75,"second":99,"amount":-1.806},{"first":75,"second":100,"amount":-1.806},{"first":75,"second":101,"amount":-1.806},{"first":75,"second":102,"amount":-1.68},{"first":75,"second":103,"amount":-1.806},{"first":75,"second":111,"amount":-1.806},{"first":75,"second":113,"amount":-1.806},{"first":75,"second":115,"amount":-1.26},{"first":75,"second":116,"amount":-1.806},{"first":75,"second":117,"amount":-1.05},{"first":75,"second":118,"amount":-2.52},{"first":75,"second":119,"amount":-1.68},{"first":75,"second":120,"amount":1.05},{"first":75,"second":121,"amount":-2.52},{"first":75,"second":122,"amount":0.756},{"first":75,"second":125,"amount":-0.42},{"first":76,"second":32,"amount":-0.63},{"first":76,"second":34,"amount":-2.31},{"first":76,"second":38,"amount":-0.42},{"first":76,"second":39,"amount":-2.31},{"first":76,"second":41,"amount":-0.84},{"first":76,"second":42,"amount":-7.14},{"first":76,"second":44,"amount":0.21},{"first":76,"second":45,"amount":-4.2},{"first":76,"second":46,"amount":0.21},{"first":76,"second":47,"amount":-0.42},{"first":76,"second":63,"amount":-5.04},{"first":76,"second":64,"amount":-0.63},{"first":76,"second":65,"amount":0.672},{"first":76,"second":67,"amount":-2.646},{"first":76,"second":71,"amount":-2.646},{"first":76,"second":74,"amount":-0.21},{"first":76,"second":79,"amount":-2.646},{"first":76,"second":81,"amount":-2.646},{"first":76,"second":83,"amount":-1.68},{"first":76,"second":84,"amount":-5.88},{"first":76,"second":85,"amount":-1.26},{"first":76,"second":86,"amount":-4.83},{"first":76,"second":87,"amount":-3.57},{"first":76,"second":88,"amount":0.546},{"first":76,"second":89,"amount":-5.46},{"first":76,"second":92,"amount":-4.62},{"first":76,"second":93,"amount":-0.84},{"first":76,"second":97,"amount":-1.26},{"first":76,"second":99,"amount":-1.26},{"first":76,"second":100,"amount":-1.26},{"first":76,"second":101,"amount":-1.26},{"first":76,"second":102,"amount":-1.47},{"first":76,"second":103,"amount":-1.26},{"first":76,"second":111,"amount":-1.26},{"first":76,"second":113,"amount":-1.26},{"first":76,"second":115,"amount":-0.63},{"first":76,"second":116,"amount":-1.68},{"first":76,"second":117,"amount":-1.05},{"first":76,"second":118,"amount":-3.36},{"first":76,"second":119,"amount":-2.016},{"first":76,"second":120,"amount":0.336},{"first":76,"second":121,"amount":-3.36},{"first":76,"second":122,"amount":0.336},{"first":76,"second":125,"amount":-0.84},{"first":77,"second":47,"amount":-1.26},{"first":78,"second":47,"amount":-1.26},{"first":79,"second":32,"amount":-0.42},{"first":79,"second":34,"amount":-0.63},{"first":79,"second":39,"amount":-0.63},{"first":79,"second":41,"amount":-1.26},{"first":79,"second":42,"amount":-1.05},{"first":79,"second":44,"amount":-1.47},{"first":79,"second":45,"amount":0.126},{"first":79,"second":46,"amount":-1.47},{"first":79,"second":47,"amount":-2.73},{"first":79,"second":63,"amount":-0.63},{"first":79,"second":65,"amount":-1.26},{"first":79,"second":84,"amount":-2.1},{"first":79,"second":86,"amount":-1.26},{"first":79,"second":87,"amount":-0.84},{"first":79,"second":88,"amount":-2.73},{"first":79,"second":89,"amount":-2.1},{"first":79,"second":90,"amount":-1.47},{"first":79,"second":92,"amount":-1.47},{"first":79,"second":93,"amount":-1.26},{"first":79,"second":97,"amount":0.21},{"first":79,"second":99,"amount":0.21},{"first":79,"second":100,"amount":0.21},{"first":79,"second":101,"amount":0.21},{"first":79,"second":103,"amount":0.21},{"first":79,"second":111,"amount":0.21},{"first":79,"second":113,"amount":0.21},{"first":79,"second":122,"amount":-0.21},{"first":79,"second":125,"amount":-1.26},{"first":80,"second":32,"amount":-0.63},{"first":80,"second":38,"amount":-1.47},{"first":80,"second":41,"amount":-1.26},{"first":80,"second":44,"amount":-2.52},{"first":80,"second":45,"amount":-0.84},{"first":80,"second":46,"amount":-2.52},{"first":80,"second":47,"amount":-3.99},{"first":80,"second":63,"amount":0.42},{"first":80,"second":64,"amount":-0.84},{"first":80,"second":65,"amount":-3.78},{"first":80,"second":74,"amount":-3.36},{"first":80,"second":84,"amount":-1.05},{"first":80,"second":86,"amount":-0.756},{"first":80,"second":87,"amount":-0.42},{"first":80,"second":88,"amount":-2.52},{"first":80,"second":89,"amount":-1.26},{"first":80,"second":90,"amount":-2.1},{"first":80,"second":92,"amount":-0.42},{"first":80,"second":93,"amount":-1.26},{"first":80,"second":97,"amount":-1.05},{"first":80,"second":99,"amount":-1.05},{"first":80,"second":100,"amount":-1.05},{"first":80,"second":101,"amount":-1.05},{"first":80,"second":103,"amount":-1.05},{"first":80,"second":109,"amount":-0.21},{"first":80,"second":110,"amount":-0.21},{"first":80,"second":111,"amount":-1.05},{"first":80,"second":112,"amount":-0.21},{"first":80,"second":113,"amount":-1.05},{"first":80,"second":114,"amount":-0.21},{"first":80,"second":115,"amount":-0.84},{"first":80,"second":117,"amount":-0.21},{"first":80,"second":118,"amount":0.63},{"first":80,"second":119,"amount":0.42},{"first":80,"second":120,"amount":-0.21},{"first":80,"second":121,"amount":0.63},{"first":80,"second":122,"amount":-0.84},{"first":80,"second":125,"amount":-1.26},{"first":81,"second":34,"amount":-0.63},{"first":81,"second":39,"amount":-0.63},{"first":81,"second":41,"amount":-1.05},{"first":81,"second":42,"amount":-0.63},{"first":81,"second":47,"amount":-0.84},{"first":81,"second":63,"amount":-0.42},{"first":81,"second":65,"amount":0.42},{"first":81,"second":84,"amount":-1.68},{"first":81,"second":86,"amount":-1.26},{"first":81,"second":87,"amount":-0.84},{"first":81,"second":88,"amount":0.126},{"first":81,"second":89,"amount":-1.68},{"first":81,"second":92,"amount":-1.47},{"first":81,"second":93,"amount":-1.05},{"first":81,"second":120,"amount":0.126},{"first":81,"second":125,"amount":-1.05},{"first":82,"second":34,"amount":-0.21},{"first":82,"second":38,"amount":-0.84},{"first":82,"second":39,"amount":-0.21},{"first":82,"second":41,"amount":-0.63},{"first":82,"second":42,"amount":-0.21},{"first":82,"second":45,"amount":-1.05},{"first":82,"second":47,"amount":-0.63},{"first":82,"second":63,"amount":0.21},{"first":82,"second":64,"amount":-0.63},{"first":82,"second":65,"amount":0.672},{"first":82,"second":67,"amount":-0.42},{"first":82,"second":71,"amount":-0.42},{"first":82,"second":74,"amount":-1.68},{"first":82,"second":79,"amount":-0.42},{"first":82,"second":81,"amount":-0.42},{"first":82,"second":83,"amount":-0.42},{"first":82,"second":84,"amount":-1.05},{"first":82,"second":86,"amount":-1.26},{"first":82,"second":87,"amount":-0.756},{"first":82,"second":88,"amount":0.546},{"first":82,"second":89,"amount":-1.386},{"first":82,"second":90,"amount":0.126},{"first":82,"second":92,"amount":-1.05},{"first":82,"second":93,"amount":-0.63},{"first":82,"second":97,"amount":-1.05},{"first":82,"second":99,"amount":-1.05},{"first":82,"second":100,"amount":-1.05},{"first":82,"second":101,"amount":-1.05},{"first":82,"second":103,"amount":-1.05},{"first":82,"second":111,"amount":-1.05},{"first":82,"second":113,"amount":-1.05},{"first":82,"second":115,"amount":-0.42},{"first":82,"second":117,"amount":-0.42},{"first":82,"second":118,"amount":0.336},{"first":82,"second":119,"amount":0.126},{"first":82,"second":120,"amount":0.42},{"first":82,"second":121,"amount":0.336},{"first":82,"second":122,"amount":0.126},{"first":82,"second":125,"amount":-0.63},{"first":83,"second":34,"amount":-0.42},{"first":83,"second":38,"amount":0.21},{"first":83,"second":39,"amount":-0.42},{"first":83,"second":41,"amount":-1.47},{"first":83,"second":42,"amount":-0.21},{"first":83,"second":44,"amount":-0.21},{"first":83,"second":46,"amount":-0.21},{"first":83,"second":47,"amount":-1.89},{"first":83,"second":63,"amount":-0.21},{"first":83,"second":65,"amount":-0.756},{"first":83,"second":84,"amount":-1.26},{"first":83,"second":86,"amount":-0.756},{"first":83,"second":87,"amount":-0.336},{"first":83,"second":88,"amount":-1.47},{"first":83,"second":89,"amount":-1.89},{"first":83,"second":92,"amount":-1.26},{"first":83,"second":93,"amount":-1.47},{"first":83,"second":97,"amount":0.126},{"first":83,"second":99,"amount":0.126},{"first":83,"second":100,"amount":0.126},{"first":83,"second":101,"amount":0.126},{"first":83,"second":103,"amount":0.126},{"first":83,"second":111,"amount":0.126},{"first":83,"second":113,"amount":0.126},{"first":83,"second":115,"amount":0.126},{"first":83,"second":122,"amount":-0.336},{"first":83,"second":125,"amount":-1.47},{"first":84,"second":32,"amount":-0.63},{"first":84,"second":38,"amount":-3.36},{"first":84,"second":44,"amount":-2.31},{"first":84,"second":45,"amount":-3.99},{"first":84,"second":46,"amount":-2.31},{"first":84,"second":47,"amount":-4.62},{"first":84,"second":58,"amount":-1.89},{"first":84,"second":59,"amount":-1.89},{"first":84,"second":63,"amount":-0.84},{"first":84,"second":64,"amount":-3.99},{"first":84,"second":65,"amount":-3.36},{"first":84,"second":67,"amount":-2.1},{"first":84,"second":71,"amount":-2.1},{"first":84,"second":74,"amount":-5.04},{"first":84,"second":79,"amount":-2.1},{"first":84,"second":81,"amount":-2.1},{"first":84,"second":83,"amount":-0.63},{"first":84,"second":84,"amount":0.21},{"first":84,"second":86,"amount":0.63},{"first":84,"second":87,"amount":0.336},{"first":84,"second":88,"amount":-0.336},{"first":84,"second":89,"amount":0.756},{"first":84,"second":90,"amount":-1.176},{"first":84,"second":92,"amount":0.21},{"first":84,"second":97,"amount":-5.25},{"first":84,"second":98,"amount":-0.21},{"first":84,"second":99,"amount":-5.25},{"first":84,"second":100,"amount":-5.25},{"first":84,"second":101,"amount":-5.25},{"first":84,"second":102,"amount":-2.1},{"first":84,"second":103,"amount":-5.25},{"first":84,"second":104,"amount":-0.21},{"first":84,"second":105,"amount":-0.42},{"first":84,"second":106,"amount":-0.42},{"first":84,"second":107,"amount":-0.21},{"first":84,"second":108,"amount":-0.21},{"first":84,"second":109,"amount":-4.2},{"first":84,"second":110,"amount":-4.2},{"first":84,"second":111,"amount":-5.25},{"first":84,"second":112,"amount":-4.2},{"first":84,"second":113,"amount":-5.25},{"first":84,"second":114,"amount":-4.2},{"first":84,"second":115,"amount":-4.2},{"first":84,"second":116,"amount":-1.89},{"first":84,"second":117,"amount":-4.2},{"first":84,"second":118,"amount":-4.41},{"first":84,"second":119,"amount":-4.41},{"first":84,"second":120,"amount":-5.04},{"first":84,"second":121,"amount":-4.41},{"first":84,"second":122,"amount":-4.62},{"first":85,"second":44,"amount":-0.63},{"first":85,"second":46,"amount":-0.63},{"first":85,"second":47,"amount":-1.89},{"first":85,"second":63,"amount":0.21},{"first":85,"second":65,"amount":-1.26},{"first":85,"second":88,"amount":-0.63},{"first":85,"second":89,"amount":0.126},{"first":85,"second":97,"amount":0.21},{"first":85,"second":99,"amount":0.21},{"first":85,"second":100,"amount":0.21},{"first":85,"second":101,"amount":0.21},{"first":85,"second":103,"amount":0.21},{"first":85,"second":111,"amount":0.21},{"first":85,"second":113,"amount":0.21},{"first":85,"second":118,"amount":0.21},{"first":85,"second":121,"amount":0.21},{"first":86,"second":32,"amount":-0.63},{"first":86,"second":34,"amount":0.21},{"first":86,"second":38,"amount":-2.31},{"first":86,"second":39,"amount":0.21},{"first":86,"second":42,"amount":0.21},{"first":86,"second":44,"amount":-2.52},{"first":86,"second":45,"amount":-2.73},{"first":86,"second":46,"amount":-2.52},{"first":86,"second":47,"amount":-4.2},{"first":86,"second":58,"amount":-0.42},{"first":86,"second":59,"amount":-0.42},{"first":86,"second":63,"amount":-0.42},{"first":86,"second":64,"amount":-2.94},{"first":86,"second":65,"amount":-2.94},{"first":86,"second":67,"amount":-1.26},{"first":86,"second":71,"amount":-1.26},{"first":86,"second":74,"amount":-3.36},{"first":86,"second":79,"amount":-1.26},{"first":86,"second":81,"amount":-1.26},{"first":86,"second":83,"amount":-0.546},{"first":86,"second":84,"amount":0.63},{"first":86,"second":86,"amount":1.008},{"first":86,"second":87,"amount":0.756},{"first":86,"second":89,"amount":1.134},{"first":86,"second":90,"amount":-0.63},{"first":86,"second":92,"amount":0.21},{"first":86,"second":97,"amount":-3.15},{"first":86,"second":98,"amount":0.21},{"first":86,"second":99,"amount":-3.15},{"first":86,"second":100,"amount":-3.15},{"first":86,"second":101,"amount":-3.15},{"first":86,"second":102,"amount":-0.42},{"first":86,"second":103,"amount":-3.15},{"first":86,"second":104,"amount":0.21},{"first":86,"second":105,"amount":0.21},{"first":86,"second":106,"amount":0.21},{"first":86,"second":107,"amount":0.21},{"first":86,"second":108,"amount":0.21},{"first":86,"second":109,"amount":-1.26},{"first":86,"second":110,"amount":-1.26},{"first":86,"second":111,"amount":-3.15},{"first":86,"second":112,"amount":-1.26},{"first":86,"second":113,"amount":-3.15},{"first":86,"second":114,"amount":-1.26},{"first":86,"second":115,"amount":-1.68},{"first":86,"second":117,"amount":-1.26},{"first":86,"second":118,"amount":-0.63},{"first":86,"second":119,"amount":-0.84},{"first":86,"second":120,"amount":-0.84},{"first":86,"second":121,"amount":-0.63},{"first":86,"second":122,"amount":-0.84},{"first":87,"second":32,"amount":-0.42},{"first":87,"second":34,"amount":0.21},{"first":87,"second":38,"amount":-2.1},{"first":87,"second":39,"amount":0.21},{"first":87,"second":42,"amount":0.21},{"first":87,"second":44,"amount":-1.26},{"first":87,"second":45,"amount":-2.1},{"first":87,"second":46,"amount":-1.26},{"first":87,"second":47,"amount":-3.78},{"first":87,"second":58,"amount":-0.21},{"first":87,"second":59,"amount":-0.21},{"first":87,"second":63,"amount":-0.21},{"first":87,"second":64,"amount":-2.31},{"first":87,"second":65,"amount":-2.1},{"first":87,"second":67,"amount":-0.84},{"first":87,"second":71,"amount":-0.84},{"first":87,"second":74,"amount":-2.52},{"first":87,"second":79,"amount":-0.84},{"first":87,"second":81,"amount":-0.84},{"first":87,"second":83,"amount":-0.21},{"first":87,"second":84,"amount":0.336},{"first":87,"second":86,"amount":0.756},{"first":87,"second":87,"amount":0.588},{"first":87,"second":88,"amount":-0.21},{"first":87,"second":89,"amount":0.966},{"first":87,"second":90,"amount":-0.63},{"first":87,"second":92,"amount":0.21},{"first":87,"second":97,"amount":-1.89},{"first":87,"second":99,"amount":-1.89},{"first":87,"second":100,"amount":-1.89},{"first":87,"second":101,"amount":-1.89},{"first":87,"second":103,"amount":-1.89},{"first":87,"second":105,"amount":0.126},{"first":87,"second":106,"amount":0.126},{"first":87,"second":109,"amount":-0.42},{"first":87,"second":110,"amount":-0.42},{"first":87,"second":111,"amount":-1.89},{"first":87,"second":112,"amount":-0.42},{"first":87,"second":113,"amount":-1.89},{"first":87,"second":114,"amount":-0.42},{"first":87,"second":115,"amount":-0.84},{"first":87,"second":117,"amount":-0.42},{"first":87,"second":119,"amount":-0.21},{"first":87,"second":120,"amount":-0.42},{"first":87,"second":122,"amount":-1.05},{"first":88,"second":32,"amount":-0.21},{"first":88,"second":34,"amount":-0.63},{"first":88,"second":38,"amount":-1.26},{"first":88,"second":39,"amount":-0.63},{"first":88,"second":41,"amount":-0.63},{"first":88,"second":42,"amount":-0.42},{"first":88,"second":45,"amount":-3.15},{"first":88,"second":47,"amount":-0.84},{"first":88,"second":63,"amount":-2.31},{"first":88,"second":64,"amount":-1.26},{"first":88,"second":65,"amount":0.756},{"first":88,"second":67,"amount":-2.73},{"first":88,"second":71,"amount":-2.73},{"first":88,"second":74,"amount":-0.42},{"first":88,"second":79,"amount":-2.73},{"first":88,"second":81,"amount":-2.73},{"first":88,"second":83,"amount":-1.47},{"first":88,"second":84,"amount":-0.42},{"first":88,"second":85,"amount":-0.63},{"first":88,"second":86,"amount":-0.126},{"first":88,"second":87,"amount":-0.21},{"first":88,"second":92,"amount":-0.84},{"first":88,"second":93,"amount":-0.63},{"first":88,"second":97,"amount":-1.68},{"first":88,"second":99,"amount":-1.68},{"first":88,"second":100,"amount":-1.68},{"first":88,"second":101,"amount":-1.68},{"first":88,"second":102,"amount":-1.26},{"first":88,"second":103,"amount":-1.68},{"first":88,"second":111,"amount":-1.68},{"first":88,"second":113,"amount":-1.68},{"first":88,"second":115,"amount":-1.26},{"first":88,"second":116,"amount":-1.26},{"first":88,"second":117,"amount":-1.05},{"first":88,"second":118,"amount":-2.52},{"first":88,"second":119,"amount":-1.89},{"first":88,"second":120,"amount":0.42},{"first":88,"second":121,"amount":-2.52},{"first":88,"second":122,"amount":0.21},{"first":88,"second":125,"amount":-0.63},{"first":89,"second":32,"amount":-0.63},{"first":89,"second":34,"amount":0.21},{"first":89,"second":38,"amount":-3.36},{"first":89,"second":39,"amount":0.21},{"first":89,"second":42,"amount":0.21},{"first":89,"second":44,"amount":-2.73},{"first":89,"second":45,"amount":-3.99},{"first":89,"second":46,"amount":-2.73},{"first":89,"second":47,"amount":-4.83},{"first":89,"second":58,"amount":-0.63},{"first":89,"second":59,"amount":-0.63},{"first":89,"second":63,"amount":-0.84},{"first":89,"second":64,"amount":-4.2},{"first":89,"second":65,"amount":-3.15},{"first":89,"second":67,"amount":-2.1},{"first":89,"second":71,"amount":-2.1},{"first":89,"second":74,"amount":-4.62},{"first":89,"second":79,"amount":-2.1},{"first":89,"second":81,"amount":-2.1},{"first":89,"second":83,"amount":-1.47},{"first":89,"second":84,"amount":0.756},{"first":89,"second":85,"amount":0.126},{"first":89,"second":86,"amount":1.134},{"first":89,"second":87,"amount":0.966},{"first":89,"second":88,"amount":0.126},{"first":89,"second":89,"amount":1.218},{"first":89,"second":90,"amount":-0.546},{"first":89,"second":92,"amount":0.21},{"first":89,"second":97,"amount":-4.41},{"first":89,"second":98,"amount":0.21},{"first":89,"second":99,"amount":-4.41},{"first":89,"second":100,"amount":-4.41},{"first":89,"second":101,"amount":-4.41},{"first":89,"second":102,"amount":-1.26},{"first":89,"second":103,"amount":-4.41},{"first":89,"second":104,"amount":0.21},{"first":89,"second":107,"amount":0.21},{"first":89,"second":108,"amount":0.21},{"first":89,"second":109,"amount":-2.1},{"first":89,"second":110,"amount":-2.1},{"first":89,"second":111,"amount":-4.41},{"first":89,"second":112,"amount":-2.1},{"first":89,"second":113,"amount":-4.41},{"first":89,"second":114,"amount":-2.1},{"first":89,"second":115,"amount":-3.36},{"first":89,"second":116,"amount":-1.26},{"first":89,"second":117,"amount":-2.1},{"first":89,"second":118,"amount":-1.89},{"first":89,"second":119,"amount":-2.1},{"first":89,"second":120,"amount":-2.52},{"first":89,"second":121,"amount":-1.89},{"first":89,"second":122,"amount":-2.52},{"first":90,"second":38,"amount":-1.47},{"first":90,"second":41,"amount":-0.21},{"first":90,"second":45,"amount":-2.52},{"first":90,"second":47,"amount":-0.84},{"first":90,"second":63,"amount":-0.84},{"first":90,"second":64,"amount":-0.84},{"first":90,"second":65,"amount":0.42},{"first":90,"second":67,"amount":-1.47},{"first":90,"second":71,"amount":-1.47},{"first":90,"second":74,"amount":-0.63},{"first":90,"second":79,"amount":-1.47},{"first":90,"second":81,"amount":-1.47},{"first":90,"second":84,"amount":-0.126},{"first":90,"second":86,"amount":0.126},{"first":90,"second":89,"amount":0.21},{"first":90,"second":90,"amount":0.126},{"first":90,"second":92,"amount":-0.21},{"first":90,"second":93,"amount":-0.21},{"first":90,"second":97,"amount":-1.596},{"first":90,"second":99,"amount":-1.596},{"first":90,"second":100,"amount":-1.596},{"first":90,"second":101,"amount":-1.596},{"first":90,"second":102,"amount":-0.42},{"first":90,"second":103,"amount":-1.596},{"first":90,"second":111,"amount":-1.596},{"first":90,"second":113,"amount":-1.596},{"first":90,"second":115,"amount":-0.63},{"first":90,"second":116,"amount":-0.42},{"first":90,"second":117,"amount":-0.63},{"first":90,"second":118,"amount":-1.47},{"first":90,"second":119,"amount":-0.84},{"first":90,"second":121,"amount":-1.47},{"first":90,"second":125,"amount":-0.21},{"first":91,"second":48,"amount":-1.89},{"first":91,"second":49,"amount":-1.47},{"first":91,"second":50,"amount":-0.84},{"first":91,"second":51,"amount":-1.26},{"first":91,"second":52,"amount":-1.89},{"first":91,"second":53,"amount":-1.05},{"first":91,"second":54,"amount":-1.89},{"first":91,"second":55,"amount":0.42},{"first":91,"second":56,"amount":-1.47},{"first":91,"second":57,"amount":-1.26},{"first":91,"second":65,"amount":-0.84},{"first":91,"second":67,"amount":-1.26},{"first":91,"second":71,"amount":-1.26},{"first":91,"second":74,"amount":-1.05},{"first":91,"second":79,"amount":-1.26},{"first":91,"second":81,"amount":-1.26},{"first":91,"second":83,"amount":-1.47},{"first":91,"second":88,"amount":-0.63},{"first":91,"second":90,"amount":-0.21},{"first":91,"second":97,"amount":-0.21},{"first":91,"second":99,"amount":-0.21},{"first":91,"second":100,"amount":-0.21},{"first":91,"second":101,"amount":-0.21},{"first":91,"second":103,"amount":-0.21},{"first":91,"second":111,"amount":-0.21},{"first":91,"second":113,"amount":-0.21},{"first":91,"second":116,"amount":-0.21},{"first":91,"second":118,"amount":-0.21},{"first":91,"second":119,"amount":-0.21},{"first":91,"second":120,"amount":-0.42},{"first":91,"second":121,"amount":-0.21},{"first":92,"second":49,"amount":-2.52},{"first":92,"second":55,"amount":-1.89},{"first":92,"second":65,"amount":-0.21},{"first":92,"second":66,"amount":-1.26},{"first":92,"second":67,"amount":-2.73},{"first":92,"second":68,"amount":-1.26},{"first":92,"second":69,"amount":-1.26},{"first":92,"second":70,"amount":-1.26},{"first":92,"second":71,"amount":-2.73},{"first":92,"second":72,"amount":-1.26},{"first":92,"second":73,"amount":-1.26},{"first":92,"second":74,"amount":-1.47},{"first":92,"second":75,"amount":-1.26},{"first":92,"second":76,"amount":-1.26},{"first":92,"second":77,"amount":-1.26},{"first":92,"second":78,"amount":-1.26},{"first":92,"second":79,"amount":-2.73},{"first":92,"second":80,"amount":-1.26},{"first":92,"second":81,"amount":-2.73},{"first":92,"second":82,"amount":-1.26},{"first":92,"second":83,"amount":-2.31},{"first":92,"second":84,"amount":-4.62},{"first":92,"second":85,"amount":-1.89},{"first":92,"second":86,"amount":-4.2},{"first":92,"second":87,"amount":-3.78},{"first":92,"second":88,"amount":-0.84},{"first":92,"second":89,"amount":-4.83},{"first":92,"second":90,"amount":-1.05},{"first":92,"second":97,"amount":-0.63},{"first":92,"second":99,"amount":-0.63},{"first":92,"second":100,"amount":-0.63},{"first":92,"second":101,"amount":-0.63},{"first":92,"second":102,"amount":-0.84},{"first":92,"second":103,"amount":-0.63},{"first":92,"second":109,"amount":-0.42},{"first":92,"second":110,"amount":-0.42},{"first":92,"second":111,"amount":-0.63},{"first":92,"second":112,"amount":-0.42},{"first":92,"second":113,"amount":-0.63},{"first":92,"second":114,"amount":-0.42},{"first":92,"second":115,"amount":-0.63},{"first":92,"second":116,"amount":-0.84},{"first":92,"second":117,"amount":-0.63},{"first":92,"second":118,"amount":-1.26},{"first":92,"second":119,"amount":-1.26},{"first":92,"second":120,"amount":-0.42},{"first":92,"second":121,"amount":-1.26},{"first":97,"second":41,"amount":-0.21},{"first":97,"second":65,"amount":0.126},{"first":97,"second":84,"amount":-2.52},{"first":97,"second":86,"amount":-1.26},{"first":97,"second":87,"amount":-0.42},{"first":97,"second":89,"amount":-1.68},{"first":97,"second":92,"amount":-0.63},{"first":97,"second":93,"amount":-0.21},{"first":97,"second":125,"amount":-0.21},{"first":98,"second":32,"amount":-0.336},{"first":98,"second":34,"amount":-1.05},{"first":98,"second":39,"amount":-1.05},{"first":98,"second":41,"amount":-0.21},{"first":98,"second":42,"amount":-1.47},{"first":98,"second":44,"amount":-0.63},{"first":98,"second":45,"amount":0.21},{"first":98,"second":46,"amount":-0.63},{"first":98,"second":47,"amount":-1.26},{"first":98,"second":63,"amount":-2.31},{"first":98,"second":65,"amount":-0.42},{"first":98,"second":84,"amount":-3.15},{"first":98,"second":85,"amount":0.21},{"first":98,"second":86,"amount":-1.89},{"first":98,"second":87,"amount":-1.05},{"first":98,"second":88,"amount":-1.05},{"first":98,"second":89,"amount":-2.73},{"first":98,"second":92,"amount":-0.84},{"first":98,"second":93,"amount":-0.21},{"first":98,"second":102,"amount":-1.05},{"first":98,"second":115,"amount":-0.21},{"first":98,"second":116,"amount":-0.63},{"first":98,"second":118,"amount":-1.05},{"first":98,"second":119,"amount":-0.756},{"first":98,"second":120,"amount":-1.68},{"first":98,"second":121,"amount":-1.05},{"first":98,"second":122,"amount":-1.176},{"first":98,"second":125,"amount":-0.21},{"first":99,"second":32,"amount":-0.336},{"first":99,"second":34,"amount":-0.63},{"first":99,"second":39,"amount":-0.63},{"first":99,"second":41,"amount":-0.21},{"first":99,"second":42,"amount":-1.05},{"first":99,"second":47,"amount":-1.26},{"first":99,"second":63,"amount":-1.47},{"first":99,"second":84,"amount":-3.15},{"first":99,"second":86,"amount":-1.89},{"first":99,"second":87,"amount":-1.05},{"first":99,"second":88,"amount":-0.42},{"first":99,"second":89,"amount":-3.15},{"first":99,"second":92,"amount":-0.84},{"first":99,"second":93,"amount":-0.21},{"first":99,"second":102,"amount":-0.63},{"first":99,"second":116,"amount":-0.42},{"first":99,"second":118,"amount":-0.546},{"first":99,"second":119,"amount":-0.21},{"first":99,"second":120,"amount":-0.84},{"first":99,"second":121,"amount":-0.546},{"first":99,"second":122,"amount":-0.63},{"first":99,"second":125,"amount":-0.21},{"first":100,"second":65,"amount":0.126},{"first":100,"second":89,"amount":0.21},{"first":101,"second":32,"amount":-0.336},{"first":101,"second":34,"amount":-1.05},{"first":101,"second":39,"amount":-1.05},{"first":101,"second":41,"amount":-0.21},{"first":101,"second":42,"amount":-1.47},{"first":101,"second":44,"amount":-0.63},{"first":101,"second":45,"amount":0.21},{"first":101,"second":46,"amount":-0.63},{"first":101,"second":47,"amount":-1.26},{"first":101,"second":63,"amount":-2.31},{"first":101,"second":65,"amount":-0.42},{"first":101,"second":84,"amount":-3.15},{"first":101,"second":85,"amount":0.21},{"first":101,"second":86,"amount":-1.89},{"first":101,"second":87,"amount":-1.05},{"first":101,"second":88,"amount":-1.05},{"first":101,"second":89,"amount":-2.73},{"first":101,"second":92,"amount":-0.84},{"first":101,"second":93,"amount":-0.21},{"first":101,"second":102,"amount":-1.05},{"first":101,"second":115,"amount":-0.21},{"first":101,"second":116,"amount":-0.63},{"first":101,"second":118,"amount":-1.05},{"first":101,"second":119,"amount":-0.756},{"first":101,"second":120,"amount":-1.68},{"first":101,"second":121,"amount":-1.05},{"first":101,"second":122,"amount":-1.176},{"first":101,"second":125,"amount":-0.21},{"first":102,"second":32,"amount":-0.126},{"first":102,"second":34,"amount":0.42},{"first":102,"second":38,"amount":-0.84},{"first":102,"second":39,"amount":0.42},{"first":102,"second":42,"amount":0.63},{"first":102,"second":44,"amount":-2.52},{"first":102,"second":45,"amount":-1.68},{"first":102,"second":46,"amount":-2.52},{"first":102,"second":47,"amount":-2.94},{"first":102,"second":63,"amount":0.63},{"first":102,"second":64,"amount":-0.63},{"first":102,"second":65,"amount":-1.05},{"first":102,"second":74,"amount":-1.68},{"first":102,"second":84,"amount":0.42},{"first":102,"second":86,"amount":0.84},{"first":102,"second":87,"amount":0.42},{"first":102,"second":88,"amount":-0.21},{"first":102,"second":89,"amount":0.84},{"first":102,"second":90,"amount":-0.63},{"first":102,"second":92,"amount":0.21},{"first":102,"second":97,"amount":-1.596},{"first":102,"second":99,"amount":-1.596},{"first":102,"second":100,"amount":-1.596},{"first":102,"second":101,"amount":-1.596},{"first":102,"second":102,"amount":0.084},{"first":102,"second":103,"amount":-1.596},{"first":102,"second":111,"amount":-1.596},{"first":102,"second":113,"amount":-1.596},{"first":102,"second":115,"amount":-0.42},{"first":102,"second":116,"amount":0.084},{"first":102,"second":118,"amount":0.546},{"first":102,"second":119,"amount":0.336},{"first":102,"second":120,"amount":-0.336},{"first":102,"second":121,"amount":0.546},{"first":103,"second":41,"amount":-0.21},{"first":103,"second":65,"amount":0.126},{"first":103,"second":84,"amount":-2.52},{"first":103,"second":86,"amount":-1.26},{"first":103,"second":87,"amount":-0.42},{"first":103,"second":89,"amount":-1.68},{"first":103,"second":92,"amount":-0.63},{"first":103,"second":93,"amount":-0.21},{"first":103,"second":125,"amount":-0.21},{"first":104,"second":34,"amount":-1.05},{"first":104,"second":39,"amount":-1.05},{"first":104,"second":42,"amount":-0.63},{"first":104,"second":47,"amount":-0.42},{"first":104,"second":63,"amount":-0.84},{"first":104,"second":65,"amount":0.21},{"first":104,"second":84,"amount":-2.52},{"first":104,"second":86,"amount":-1.68},{"first":104,"second":87,"amount":-1.05},{"first":104,"second":89,"amount":-2.1},{"first":104,"second":92,"amount":-0.84},{"first":104,"second":116,"amount":-0.336},{"first":104,"second":118,"amount":-0.756},{"first":104,"second":119,"amount":-0.42},{"first":104,"second":121,"amount":-0.756},{"first":107,"second":34,"amount":-0.42},{"first":107,"second":39,"amount":-0.42},{"first":107,"second":41,"amount":-0.21},{"first":107,"second":44,"amount":0.336},{"first":107,"second":45,"amount":-2.73},{"first":107,"second":46,"amount":0.336},{"first":107,"second":47,"amount":-0.21},{"first":107,"second":63,"amount":-0.126},{"first":107,"second":64,"amount":-0.63},{"first":107,"second":65,"amount":1.26},{"first":107,"second":84,"amount":-2.1},{"first":107,"second":86,"amount":-0.84},{"first":107,"second":87,"amount":-0.63},{"first":107,"second":88,"amount":0.84},{"first":107,"second":89,"amount":-1.89},{"first":107,"second":90,"amount":0.546},{"first":107,"second":92,"amount":-0.63},{"first":107,"second":93,"amount":-0.21},{"first":107,"second":97,"amount":-1.596},{"first":107,"second":99,"amount":-1.596},{"first":107,"second":100,"amount":-1.596},{"first":107,"second":101,"amount":-1.596},{"first":107,"second":102,"amount":-0.21},{"first":107,"second":103,"amount":-1.596},{"first":107,"second":111,"amount":-1.596},{"first":107,"second":113,"amount":-1.596},{"first":107,"second":115,"amount":-1.05},{"first":107,"second":116,"amount":-0.21},{"first":107,"second":117,"amount":-0.756},{"first":107,"second":118,"amount":0.126},{"first":107,"second":119,"amount":-0.126},{"first":107,"second":120,"amount":0.756},{"first":107,"second":121,"amount":0.126},{"first":107,"second":122,"amount":0.546},{"first":107,"second":125,"amount":-0.21},{"first":108,"second":65,"amount":0.126},{"first":108,"second":89,"amount":0.21},{"first":109,"second":34,"amount":-1.05},{"first":109,"second":39,"amount":-1.05},{"first":109,"second":42,"amount":-0.63},{"first":109,"second":47,"amount":-0.42},{"first":109,"second":63,"amount":-0.84},{"first":109,"second":65,"amount":0.21},{"first":109,"second":84,"amount":-2.52},{"first":109,"second":86,"amount":-1.68},{"first":109,"second":87,"amount":-1.05},{"first":109,"second":89,"amount":-2.1},{"first":109,"second":92,"amount":-0.84},{"first":109,"second":116,"amount":-0.336},{"first":109,"second":118,"amount":-0.756},{"first":109,"second":119,"amount":-0.42},{"first":109,"second":121,"amount":-0.756},{"first":110,"second":34,"amount":-1.05},{"first":110,"second":39,"amount":-1.05},{"first":110,"second":42,"amount":-0.63},{"first":110,"second":47,"amount":-0.42},{"first":110,"second":63,"amount":-0.84},{"first":110,"second":65,"amount":0.21},{"first":110,"second":84,"amount":-2.52},{"first":110,"second":86,"amount":-1.68},{"first":110,"second":87,"amount":-1.05},{"first":110,"second":89,"amount":-2.1},{"first":110,"second":92,"amount":-0.84},{"first":110,"second":116,"amount":-0.336},{"first":110,"second":118,"amount":-0.756},{"first":110,"second":119,"amount":-0.42},{"first":110,"second":121,"amount":-0.756},{"first":111,"second":32,"amount":-0.336},{"first":111,"second":34,"amount":-1.05},{"first":111,"second":39,"amount":-1.05},{"first":111,"second":41,"amount":-0.21},{"first":111,"second":42,"amount":-1.47},{"first":111,"second":44,"amount":-0.63},{"first":111,"second":45,"amount":0.21},{"first":111,"second":46,"amount":-0.63},{"first":111,"second":47,"amount":-1.26},{"first":111,"second":63,"amount":-2.31},{"first":111,"second":65,"amount":-0.42},{"first":111,"second":84,"amount":-3.15},{"first":111,"second":85,"amount":0.21},{"first":111,"second":86,"amount":-1.89},{"first":111,"second":87,"amount":-1.05},{"first":111,"second":88,"amount":-1.05},{"first":111,"second":89,"amount":-2.73},{"first":111,"second":92,"amount":-0.84},{"first":111,"second":93,"amount":-0.21},{"first":111,"second":102,"amount":-1.05},{"first":111,"second":115,"amount":-0.21},{"first":111,"second":116,"amount":-0.63},{"first":111,"second":118,"amount":-1.05},{"first":111,"second":119,"amount":-0.756},{"first":111,"second":120,"amount":-1.68},{"first":111,"second":121,"amount":-1.05},{"first":111,"second":122,"amount":-1.176},{"first":111,"second":125,"amount":-0.21},{"first":112,"second":32,"amount":-0.336},{"first":112,"second":34,"amount":-1.05},{"first":112,"second":39,"amount":-1.05},{"first":112,"second":41,"amount":-0.21},{"first":112,"second":42,"amount":-1.47},{"first":112,"second":44,"amount":-0.63},{"first":112,"second":45,"amount":0.21},{"first":112,"second":46,"amount":-0.63},{"first":112,"second":47,"amount":-1.26},{"first":112,"second":63,"amount":-2.31},{"first":112,"second":65,"amount":-0.42},{"first":112,"second":84,"amount":-3.15},{"first":112,"second":85,"amount":0.21},{"first":112,"second":86,"amount":-1.89},{"first":112,"second":87,"amount":-1.05},{"first":112,"second":88,"amount":-1.05},{"first":112,"second":89,"amount":-2.73},{"first":112,"second":92,"amount":-0.84},{"first":112,"second":93,"amount":-0.21},{"first":112,"second":102,"amount":-1.05},{"first":112,"second":115,"amount":-0.21},{"first":112,"second":116,"amount":-0.63},{"first":112,"second":118,"amount":-1.05},{"first":112,"second":119,"amount":-0.756},{"first":112,"second":120,"amount":-1.68},{"first":112,"second":121,"amount":-1.05},{"first":112,"second":122,"amount":-1.176},{"first":112,"second":125,"amount":-0.21},{"first":113,"second":41,"amount":-0.21},{"first":113,"second":65,"amount":0.126},{"first":113,"second":84,"amount":-2.52},{"first":113,"second":86,"amount":-1.26},{"first":113,"second":87,"amount":-0.42},{"first":113,"second":89,"amount":-1.68},{"first":113,"second":92,"amount":-0.63},{"first":113,"second":93,"amount":-0.21},{"first":113,"second":125,"amount":-0.21},{"first":114,"second":32,"amount":-0.63},{"first":114,"second":41,"amount":-0.21},{"first":114,"second":44,"amount":-3.15},{"first":114,"second":45,"amount":-3.15},{"first":114,"second":46,"amount":-3.15},{"first":114,"second":47,"amount":-3.78},{"first":114,"second":63,"amount":0.21},{"first":114,"second":64,"amount":-0.63},{"first":114,"second":65,"amount":-2.31},{"first":114,"second":84,"amount":-2.52},{"first":114,"second":86,"amount":-0.42},{"first":114,"second":88,"amount":-1.68},{"first":114,"second":89,"amount":-1.05},{"first":114,"second":90,"amount":-1.68},{"first":114,"second":92,"amount":-0.21},{"first":114,"second":93,"amount":-0.21},{"first":114,"second":97,"amount":-1.68},{"first":114,"second":99,"amount":-1.68},{"first":114,"second":100,"amount":-1.68},{"first":114,"second":101,"amount":-1.68},{"first":114,"second":102,"amount":0.336},{"first":114,"second":103,"amount":-1.68},{"first":114,"second":111,"amount":-1.68},{"first":114,"second":113,"amount":-1.68},{"first":114,"second":115,"amount":-0.84},{"first":114,"second":116,"amount":0.336},{"first":114,"second":118,"amount":0.714},{"first":114,"second":119,"amount":0.42},{"first":114,"second":120,"amount":-0.336},{"first":114,"second":121,"amount":0.714},{"first":114,"second":122,"amount":-0.336},{"first":114,"second":125,"amount":-0.21},{"first":115,"second":34,"amount":-0.84},{"first":115,"second":39,"amount":-0.84},{"first":115,"second":42,"amount":-0.63},{"first":115,"second":45,"amount":-0.63},{"first":115,"second":47,"amount":-0.84},{"first":115,"second":63,"amount":-1.47},{"first":115,"second":84,"amount":-2.31},{"first":115,"second":86,"amount":-1.89},{"first":115,"second":87,"amount":-1.05},{"first":115,"second":88,"amount":-0.21},{"first":115,"second":89,"amount":-2.73},{"first":115,"second":92,"amount":-0.63},{"first":115,"second":102,"amount":-0.84},{"first":115,"second":116,"amount":-0.63},{"first":115,"second":118,"amount":-0.966},{"first":115,"second":119,"amount":-0.63},{"first":115,"second":120,"amount":-1.05},{"first":115,"second":121,"amount":-0.966},{"first":116,"second":34,"amount":-0.21},{"first":116,"second":38,"amount":-0.21},{"first":116,"second":39,"amount":-0.21},{"first":116,"second":44,"amount":0.21},{"first":116,"second":45,"amount":-1.68},{"first":116,"second":46,"amount":0.21},{"first":116,"second":47,"amount":-0.21},{"first":116,"second":63,"amount":0.336},{"first":116,"second":64,"amount":-0.21},{"first":116,"second":92,"amount":-0.21},{"first":116,"second":97,"amount":-0.966},{"first":116,"second":99,"amount":-0.966},{"first":116,"second":100,"amount":-0.966},{"first":116,"second":101,"amount":-0.966},{"first":116,"second":102,"amount":0.084},{"first":116,"second":103,"amount":-0.966},{"first":116,"second":111,"amount":-0.966},{"first":116,"second":113,"amount":-0.966},{"first":116,"second":115,"amount":-0.21},{"first":116,"second":116,"amount":0.084},{"first":116,"second":118,"amount":0.546},{"first":116,"second":119,"amount":0.336},{"first":116,"second":120,"amount":0.126},{"first":116,"second":121,"amount":0.546},{"first":117,"second":41,"amount":-0.21},{"first":117,"second":65,"amount":0.126},{"first":117,"second":84,"amount":-2.52},{"first":117,"second":86,"amount":-1.26},{"first":117,"second":87,"amount":-0.42},{"first":117,"second":89,"amount":-1.68},{"first":117,"second":92,"amount":-0.63},{"first":117,"second":93,"amount":-0.21},{"first":117,"second":125,"amount":-0.21},{"first":118,"second":32,"amount":-0.42},{"first":118,"second":33,"amount":0.21},{"first":118,"second":34,"amount":0.42},{"first":118,"second":39,"amount":0.42},{"first":118,"second":41,"amount":-0.21},{"first":118,"second":42,"amount":0.42},{"first":118,"second":44,"amount":-1.68},{"first":118,"second":45,"amount":-0.84},{"first":118,"second":46,"amount":-1.68},{"first":118,"second":47,"amount":-2.52},{"first":118,"second":58,"amount":0.42},{"first":118,"second":59,"amount":0.42},{"first":118,"second":63,"amount":0.966},{"first":118,"second":64,"amount":-0.336},{"first":118,"second":65,"amount":-1.26},{"first":118,"second":84,"amount":-2.1},{"first":118,"second":86,"amount":-0.42},{"first":118,"second":88,"amount":-1.05},{"first":118,"second":89,"amount":-1.05},{"first":118,"second":90,"amount":-0.84},{"first":118,"second":92,"amount":-0.21},{"first":118,"second":93,"amount":-0.21},{"first":118,"second":97,"amount":-1.05},{"first":118,"second":99,"amount":-1.05},{"first":118,"second":100,"amount":-1.05},{"first":118,"second":101,"amount":-1.05},{"first":118,"second":102,"amount":0.546},{"first":118,"second":103,"amount":-1.05},{"first":118,"second":111,"amount":-1.05},{"first":118,"second":113,"amount":-1.05},{"first":118,"second":115,"amount":-0.546},{"first":118,"second":116,"amount":0.546},{"first":118,"second":117,"amount":0.21},{"first":118,"second":118,"amount":1.05},{"first":118,"second":119,"amount":0.756},{"first":118,"second":120,"amount":0.126},{"first":118,"second":121,"amount":1.05},{"first":118,"second":122,"amount":-0.42},{"first":118,"second":125,"amount":-0.21},{"first":119,"second":32,"amount":-0.42},{"first":119,"second":34,"amount":0.21},{"first":119,"second":39,"amount":0.21},{"first":119,"second":41,"amount":-0.21},{"first":119,"second":44,"amount":-1.05},{"first":119,"second":45,"amount":-0.42},{"first":119,"second":46,"amount":-1.05},{"first":119,"second":47,"amount":-2.52},{"first":119,"second":58,"amount":0.21},{"first":119,"second":59,"amount":0.21},{"first":119,"second":63,"amount":0.63},{"first":119,"second":64,"amount":-0.21},{"first":119,"second":65,"amount":-0.756},{"first":119,"second":84,"amount":-2.1},{"first":119,"second":86,"amount":-0.42},{"first":119,"second":88,"amount":-0.63},{"first":119,"second":89,"amount":-1.05},{"first":119,"second":90,"amount":-0.63},{"first":119,"second":92,"amount":-0.21},{"first":119,"second":93,"amount":-0.21},{"first":119,"second":97,"amount":-0.756},{"first":119,"second":99,"amount":-0.756},{"first":119,"second":100,"amount":-0.756},{"first":119,"second":101,"amount":-0.756},{"first":119,"second":102,"amount":0.336},{"first":119,"second":103,"amount":-0.756},{"first":119,"second":111,"amount":-0.756},{"first":119,"second":113,"amount":-0.756},{"first":119,"second":115,"amount":-0.21},{"first":119,"second":116,"amount":0.336},{"first":119,"second":118,"amount":0.756},{"first":119,"second":119,"amount":0.42},{"first":119,"second":121,"amount":0.756},{"first":119,"second":122,"amount":-0.21},{"first":119,"second":125,"amount":-0.21},{"first":120,"second":32,"amount":-0.21},{"first":120,"second":34,"amount":-0.21},{"first":120,"second":39,"amount":-0.21},{"first":120,"second":41,"amount":-0.42},{"first":120,"second":45,"amount":-2.1},{"first":120,"second":47,"amount":-0.42},{"first":120,"second":63,"amount":-0.21},{"first":120,"second":64,"amount":-0.63},{"first":120,"second":65,"amount":0.84},{"first":120,"second":84,"amount":-2.31},{"first":120,"second":86,"amount":-1.05},{"first":120,"second":87,"amount":-0.63},{"first":120,"second":88,"amount":0.42},{"first":120,"second":89,"amount":-1.89},{"first":120,"second":90,"amount":0.21},{"first":120,"second":92,"amount":-0.63},{"first":120,"second":93,"amount":-0.42},{"first":120,"second":97,"amount":-1.68},{"first":120,"second":99,"amount":-1.68},{"first":120,"second":100,"amount":-1.68},{"first":120,"second":101,"amount":-1.68},{"first":120,"second":102,"amount":-0.42},{"first":120,"second":103,"amount":-1.68},{"first":120,"second":111,"amount":-1.68},{"first":120,"second":113,"amount":-1.68},{"first":120,"second":115,"amount":-1.05},{"first":120,"second":116,"amount":-0.42},{"first":120,"second":120,"amount":0.21},{"first":120,"second":122,"amount":0.21},{"first":120,"second":125,"amount":-0.42},{"first":121,"second":32,"amount":-0.42},{"first":121,"second":33,"amount":0.21},{"first":121,"second":34,"amount":0.42},{"first":121,"second":39,"amount":0.42},{"first":121,"second":41,"amount":-0.21},{"first":121,"second":42,"amount":0.42},{"first":121,"second":44,"amount":-1.68},{"first":121,"second":45,"amount":-0.84},{"first":121,"second":46,"amount":-1.68},{"first":121,"second":47,"amount":-2.52},{"first":121,"second":58,"amount":0.42},{"first":121,"second":59,"amount":0.42},{"first":121,"second":63,"amount":0.966},{"first":121,"second":64,"amount":-0.336},{"first":121,"second":65,"amount":-1.26},{"first":121,"second":84,"amount":-2.1},{"first":121,"second":86,"amount":-0.42},{"first":121,"second":88,"amount":-1.05},{"first":121,"second":89,"amount":-1.05},{"first":121,"second":90,"amount":-0.84},{"first":121,"second":92,"amount":-0.21},{"first":121,"second":93,"amount":-0.21},{"first":121,"second":97,"amount":-1.05},{"first":121,"second":99,"amount":-1.05},{"first":121,"second":100,"amount":-1.05},{"first":121,"second":101,"amount":-1.05},{"first":121,"second":102,"amount":0.546},{"first":121,"second":103,"amount":-1.05},{"first":121,"second":111,"amount":-1.05},{"first":121,"second":113,"amount":-1.05},{"first":121,"second":115,"amount":-0.546},{"first":121,"second":116,"amount":0.546},{"first":121,"second":117,"amount":0.21},{"first":121,"second":118,"amount":1.05},{"first":121,"second":119,"amount":0.756},{"first":121,"second":120,"amount":0.126},{"first":121,"second":121,"amount":1.05},{"first":121,"second":122,"amount":-0.42},{"first":121,"second":125,"amount":-0.21},{"first":122,"second":38,"amount":-0.42},{"first":122,"second":45,"amount":-1.47},{"first":122,"second":47,"amount":-0.21},{"first":122,"second":64,"amount":-0.63},{"first":122,"second":65,"amount":0.546},{"first":122,"second":84,"amount":-1.47},{"first":122,"second":86,"amount":-0.63},{"first":122,"second":87,"amount":-0.63},{"first":122,"second":88,"amount":0.21},{"first":122,"second":89,"amount":-1.47},{"first":122,"second":92,"amount":-0.42},{"first":122,"second":97,"amount":-1.176},{"first":122,"second":99,"amount":-1.176},{"first":122,"second":100,"amount":-1.176},{"first":122,"second":101,"amount":-1.176},{"first":122,"second":103,"amount":-1.176},{"first":122,"second":111,"amount":-1.176},{"first":122,"second":113,"amount":-1.176},{"first":122,"second":120,"amount":0.21},{"first":123,"second":48,"amount":-1.89},{"first":123,"second":49,"amount":-1.47},{"first":123,"second":50,"amount":-0.84},{"first":123,"second":51,"amount":-1.26},{"first":123,"second":52,"amount":-1.89},{"first":123,"second":53,"amount":-1.05},{"first":123,"second":54,"amount":-1.89},{"first":123,"second":55,"amount":0.42},{"first":123,"second":56,"amount":-1.47},{"first":123,"second":57,"amount":-1.26},{"first":123,"second":65,"amount":-0.84},{"first":123,"second":67,"amount":-1.26},{"first":123,"second":71,"amount":-1.26},{"first":123,"second":74,"amount":-1.05},{"first":123,"second":79,"amount":-1.26},{"first":123,"second":81,"amount":-1.26},{"first":123,"second":83,"amount":-1.47},{"first":123,"second":88,"amount":-0.63},{"first":123,"second":90,"amount":-0.21},{"first":123,"second":97,"amount":-0.21},{"first":123,"second":99,"amount":-0.21},{"first":123,"second":100,"amount":-0.21},{"first":123,"second":101,"amount":-0.21},{"first":123,"second":103,"amount":-0.21},{"first":123,"second":111,"amount":-0.21},{"first":123,"second":113,"amount":-0.21},{"first":123,"second":116,"amount":-0.21},{"first":123,"second":118,"amount":-0.21},{"first":123,"second":119,"amount":-0.21},{"first":123,"second":120,"amount":-0.42},{"first":123,"second":121,"amount":-0.21}]}'
          ),
          St = n.p + "c4170d08dcd3267f4d4c10c3c3f8364e.png",
          Tt = JSON.parse(
            '{"pages":["freight.png"],"chars":[{"id":87,"index":27,"char":"W","width":46,"height":31,"xoffset":-2,"yoffset":4.308,"xadvance":41.538,"chnl":15,"x":0,"y":0,"page":0},{"id":40,"index":315,"char":"(","width":15,"height":43,"xoffset":0,"yoffset":3.308,"xadvance":13.272,"chnl":15,"x":47,"y":0,"page":0},{"id":41,"index":316,"char":")","width":15,"height":43,"xoffset":-2,"yoffset":3.308,"xadvance":13.272,"chnl":15,"x":0,"y":32,"page":0},{"id":36,"index":269,"char":"$","width":21,"height":42,"xoffset":-1,"yoffset":-0.692,"xadvance":18.69,"chnl":15,"x":16,"y":32,"page":0},{"id":123,"index":319,"char":"{","width":17,"height":42,"xoffset":-3,"yoffset":3.308,"xadvance":12.222,"chnl":15,"x":38,"y":44,"page":0},{"id":125,"index":320,"char":"}","width":17,"height":42,"xoffset":-2,"yoffset":3.308,"xadvance":12.222,"chnl":15,"x":16,"y":75,"page":0},{"id":47,"index":310,"char":"/","width":13,"height":41,"xoffset":-1,"yoffset":4.308,"xadvance":10.458,"chnl":15,"x":34,"y":87,"page":0},{"id":91,"index":317,"char":"[","width":14,"height":41,"xoffset":0,"yoffset":4.308,"xadvance":12.852,"chnl":15,"x":48,"y":87,"page":0},{"id":92,"index":311,"char":"\\\\","width":13,"height":41,"xoffset":-2,"yoffset":4.308,"xadvance":9.744,"chnl":15,"x":0,"y":76,"page":0},{"id":93,"index":318,"char":"]","width":14,"height":41,"xoffset":-2,"yoffset":4.308,"xadvance":12.852,"chnl":15,"x":56,"y":44,"page":0},{"id":106,"index":40,"char":"j","width":14,"height":41,"xoffset":-6,"yoffset":4.308,"xadvance":8.568,"chnl":15,"x":63,"y":86,"page":0},{"id":124,"index":304,"char":"|","width":4,"height":41,"xoffset":1,"yoffset":2.308,"xadvance":6.426,"chnl":15,"x":63,"y":0,"page":0},{"id":81,"index":21,"char":"Q","width":34,"height":38,"xoffset":-1,"yoffset":3.308,"xadvance":30.03,"chnl":15,"x":68,"y":0,"page":0},{"id":74,"index":13,"char":"J","width":19,"height":37,"xoffset":-5,"yoffset":4.308,"xadvance":12.684,"chnl":15,"x":103,"y":0,"page":0},{"id":77,"index":17,"char":"M","width":37,"height":30,"xoffset":-1,"yoffset":4.308,"xadvance":34.23,"chnl":15,"x":78,"y":39,"page":0},{"id":64,"index":306,"char":"@","width":34,"height":35,"xoffset":-1,"yoffset":3.308,"xadvance":32.172,"chnl":15,"x":78,"y":70,"page":0},{"id":38,"index":314,"char":"&","width":34,"height":32,"xoffset":-2,"yoffset":3.308,"xadvance":29.4,"chnl":15,"x":113,"y":70,"page":0},{"id":109,"index":43,"char":"m","width":34,"height":22,"xoffset":-1,"yoffset":12.308,"xadvance":30.828,"chnl":15,"x":78,"y":106,"page":0},{"id":119,"index":53,"char":"w","width":34,"height":22,"xoffset":-2,"yoffset":12.308,"xadvance":29.736,"chnl":15,"x":113,"y":103,"page":0},{"id":51,"index":262,"char":"3","width":19,"height":33,"xoffset":-2,"yoffset":10.308,"xadvance":16.506,"chnl":15,"x":123,"y":0,"page":0},{"id":98,"index":32,"char":"b","width":24,"height":33,"xoffset":-3,"yoffset":2.308,"xadvance":19.74,"chnl":15,"x":123,"y":34,"page":0},{"id":100,"index":34,"char":"d","width":24,"height":33,"xoffset":-1,"yoffset":2.308,"xadvance":20.244,"chnl":15,"x":143,"y":0,"page":0},{"id":103,"index":37,"char":"g","width":22,"height":33,"xoffset":-2,"yoffset":12.308,"xadvance":18.648,"chnl":15,"x":148,"y":34,"page":0},{"id":112,"index":46,"char":"p","width":24,"height":33,"xoffset":-2,"yoffset":12.308,"xadvance":20.328,"chnl":15,"x":168,"y":0,"page":0},{"id":113,"index":47,"char":"q","width":24,"height":33,"xoffset":-1,"yoffset":11.308,"xadvance":20.076,"chnl":15,"x":148,"y":68,"page":0},{"id":33,"index":334,"char":"!","width":8,"height":32,"xoffset":1,"yoffset":3.308,"xadvance":9.87,"chnl":15,"x":171,"y":34,"page":0},{"id":52,"index":263,"char":"4","width":23,"height":32,"xoffset":-2,"yoffset":10.308,"xadvance":19.404,"chnl":15,"x":173,"y":67,"page":0},{"id":53,"index":264,"char":"5","width":20,"height":32,"xoffset":-3,"yoffset":10.308,"xadvance":15.834,"chnl":15,"x":180,"y":34,"page":0},{"id":54,"index":265,"char":"6","width":22,"height":32,"xoffset":-1,"yoffset":3.308,"xadvance":20.076,"chnl":15,"x":193,"y":0,"page":0},{"id":56,"index":267,"char":"8","width":21,"height":32,"xoffset":-1,"yoffset":3.308,"xadvance":19.278,"chnl":15,"x":216,"y":0,"page":0},{"id":57,"index":268,"char":"9","width":22,"height":32,"xoffset":-1,"yoffset":10.308,"xadvance":20.076,"chnl":15,"x":197,"y":67,"page":0},{"id":67,"index":6,"char":"C","width":30,"height":32,"xoffset":-1,"yoffset":3.308,"xadvance":28.182,"chnl":15,"x":201,"y":33,"page":0},{"id":71,"index":10,"char":"G","width":31,"height":32,"xoffset":-1,"yoffset":3.308,"xadvance":28.812,"chnl":15,"x":220,"y":66,"page":0},{"id":72,"index":11,"char":"H","width":32,"height":30,"xoffset":-1,"yoffset":4.308,"xadvance":30.198,"chnl":15,"x":0,"y":118,"page":0},{"id":78,"index":18,"char":"N","width":32,"height":31,"xoffset":-2,"yoffset":4.308,"xadvance":28.728,"chnl":15,"x":220,"y":99,"page":0},{"id":79,"index":19,"char":"O","width":32,"height":31,"xoffset":-1,"yoffset":3.308,"xadvance":30.03,"chnl":15,"x":173,"y":100,"page":0},{"id":85,"index":25,"char":"U","width":32,"height":31,"xoffset":-2,"yoffset":4.308,"xadvance":27.972,"chnl":15,"x":206,"y":131,"page":0},{"id":102,"index":36,"char":"f","width":17,"height":32,"xoffset":-2,"yoffset":2.308,"xadvance":11.592,"chnl":15,"x":232,"y":33,"page":0},{"id":104,"index":38,"char":"h","width":24,"height":32,"xoffset":-2,"yoffset":2.308,"xadvance":20.202,"chnl":15,"x":148,"y":102,"page":0},{"id":107,"index":41,"char":"k","width":23,"height":32,"xoffset":-2,"yoffset":2.308,"xadvance":19.194,"chnl":15,"x":173,"y":132,"page":0},{"id":108,"index":42,"char":"l","width":12,"height":32,"xoffset":-2,"yoffset":2.308,"xadvance":8.946,"chnl":15,"x":238,"y":0,"page":0},{"id":121,"index":55,"char":"y","width":23,"height":32,"xoffset":-2,"yoffset":12.308,"xadvance":18.816,"chnl":15,"x":113,"y":126,"page":0},{"id":35,"index":278,"char":"#","width":26,"height":31,"xoffset":-3,"yoffset":3.308,"xadvance":20.748,"chnl":15,"x":137,"y":135,"page":0},{"id":37,"index":276,"char":"%","width":26,"height":31,"xoffset":-2,"yoffset":3.308,"xadvance":22.218,"chnl":15,"x":197,"y":163,"page":0},{"id":55,"index":266,"char":"7","width":20,"height":31,"xoffset":-1,"yoffset":10.308,"xadvance":17.178,"chnl":15,"x":224,"y":163,"page":0},{"id":63,"index":336,"char":"?","width":14,"height":31,"xoffset":-1,"yoffset":3.308,"xadvance":12.558,"chnl":15,"x":63,"y":128,"page":0},{"id":65,"index":4,"char":"A","width":30,"height":31,"xoffset":-2,"yoffset":3.308,"xadvance":26.25,"chnl":15,"x":164,"y":165,"page":0},{"id":75,"index":15,"char":"K","width":31,"height":30,"xoffset":-1,"yoffset":4.308,"xadvance":27.636,"chnl":15,"x":78,"y":129,"page":0},{"id":83,"index":23,"char":"S","width":21,"height":31,"xoffset":0,"yoffset":3.308,"xadvance":20.328,"chnl":15,"x":110,"y":159,"page":0},{"id":86,"index":26,"char":"V","width":31,"height":31,"xoffset":-2,"yoffset":4.308,"xadvance":26.502,"chnl":15,"x":132,"y":167,"page":0},{"id":88,"index":28,"char":"X","width":31,"height":30,"xoffset":-2,"yoffset":4.308,"xadvance":26.628,"chnl":15,"x":0,"y":199,"page":0},{"id":66,"index":5,"char":"B","width":25,"height":30,"xoffset":-1,"yoffset":4.308,"xadvance":23.604,"chnl":15,"x":33,"y":129,"page":0},{"id":68,"index":7,"char":"D","width":29,"height":30,"xoffset":-1,"yoffset":4.308,"xadvance":27.342,"chnl":15,"x":0,"y":149,"page":0},{"id":69,"index":8,"char":"E","width":26,"height":30,"xoffset":-1,"yoffset":4.308,"xadvance":24.234,"chnl":15,"x":30,"y":160,"page":0},{"id":70,"index":9,"char":"F","width":24,"height":30,"xoffset":-1,"yoffset":4.308,"xadvance":22.806,"chnl":15,"x":32,"y":199,"page":0},{"id":73,"index":12,"char":"I","width":15,"height":30,"xoffset":-1,"yoffset":4.308,"xadvance":13.524,"chnl":15,"x":239,"y":131,"page":0},{"id":76,"index":16,"char":"L","width":25,"height":30,"xoffset":-1,"yoffset":4.308,"xadvance":22.764,"chnl":15,"x":57,"y":160,"page":0},{"id":80,"index":20,"char":"P","width":25,"height":30,"xoffset":-2,"yoffset":4.308,"xadvance":22.638,"chnl":15,"x":83,"y":160,"page":0},{"id":82,"index":22,"char":"R","width":30,"height":30,"xoffset":-2,"yoffset":4.308,"xadvance":26.25,"chnl":15,"x":57,"y":199,"page":0},{"id":84,"index":24,"char":"T","width":28,"height":30,"xoffset":-1,"yoffset":4.308,"xadvance":26.544,"chnl":15,"x":88,"y":191,"page":0},{"id":89,"index":29,"char":"Y","width":29,"height":30,"xoffset":-2,"yoffset":4.308,"xadvance":25.62,"chnl":15,"x":88,"y":222,"page":0},{"id":90,"index":30,"char":"Z","width":25,"height":30,"xoffset":-1,"yoffset":4.308,"xadvance":23.898,"chnl":15,"x":118,"y":199,"page":0},{"id":105,"index":39,"char":"i","width":12,"height":30,"xoffset":-1,"yoffset":4.308,"xadvance":9.156,"chnl":15,"x":206,"y":100,"page":0},{"id":116,"index":50,"char":"t","width":16,"height":26,"xoffset":-2,"yoffset":8.308,"xadvance":12.894,"chnl":15,"x":0,"y":230,"page":0},{"id":48,"index":257,"char":"0","width":24,"height":25,"xoffset":-1,"yoffset":10.308,"xadvance":22.218,"chnl":15,"x":118,"y":230,"page":0},{"id":59,"index":333,"char":";","width":9,"height":25,"xoffset":-1,"yoffset":13.308,"xadvance":6.804,"chnl":15,"x":17,"y":230,"page":0},{"id":49,"index":259,"char":"1","width":15,"height":24,"xoffset":-1,"yoffset":10.308,"xadvance":13.524,"chnl":15,"x":143,"y":230,"page":0},{"id":50,"index":261,"char":"2","width":21,"height":24,"xoffset":-1,"yoffset":10.308,"xadvance":17.85,"chnl":15,"x":27,"y":230,"page":0},{"id":110,"index":44,"char":"n","width":24,"height":22,"xoffset":-1,"yoffset":12.308,"xadvance":20.622,"chnl":15,"x":49,"y":230,"page":0},{"id":117,"index":51,"char":"u","width":24,"height":22,"xoffset":-2,"yoffset":12.308,"xadvance":19.572,"chnl":15,"x":144,"y":199,"page":0},{"id":97,"index":31,"char":"a","width":20,"height":23,"xoffset":-1,"yoffset":12.308,"xadvance":16.674,"chnl":15,"x":159,"y":222,"page":0},{"id":99,"index":33,"char":"c","width":20,"height":23,"xoffset":-1,"yoffset":12.308,"xadvance":16.926,"chnl":15,"x":169,"y":197,"page":0},{"id":101,"index":35,"char":"e","width":20,"height":23,"xoffset":-1,"yoffset":12.308,"xadvance":17.346,"chnl":15,"x":180,"y":221,"page":0},{"id":111,"index":45,"char":"o","width":23,"height":23,"xoffset":-1,"yoffset":12.308,"xadvance":20.37,"chnl":15,"x":190,"y":197,"page":0},{"id":115,"index":49,"char":"s","width":17,"height":23,"xoffset":-1,"yoffset":12.308,"xadvance":14.574,"chnl":15,"x":201,"y":221,"page":0},{"id":118,"index":52,"char":"v","width":23,"height":22,"xoffset":-2,"yoffset":12.308,"xadvance":19.11,"chnl":15,"x":214,"y":195,"page":0},{"id":120,"index":54,"char":"x","width":23,"height":22,"xoffset":-2,"yoffset":12.308,"xadvance":18.606,"chnl":15,"x":219,"y":218,"page":0},{"id":43,"index":288,"char":"+","width":22,"height":22,"xoffset":-2,"yoffset":11.308,"xadvance":18.186,"chnl":15,"x":238,"y":195,"page":0},{"id":114,"index":48,"char":"r","width":18,"height":22,"xoffset":-1,"yoffset":12.308,"xadvance":14.532,"chnl":15,"x":250,"y":33,"page":0},{"id":122,"index":56,"char":"z","width":19,"height":22,"xoffset":-1,"yoffset":12.308,"xadvance":17.178,"chnl":15,"x":245,"y":162,"page":0},{"id":58,"index":332,"char":":","width":8,"height":21,"xoffset":0,"yoffset":13.308,"xadvance":7.644,"chnl":15,"x":197,"y":132,"page":0},{"id":60,"index":297,"char":"<","width":21,"height":21,"xoffset":-2,"yoffset":12.308,"xadvance":17.64,"chnl":15,"x":251,"y":0,"page":0},{"id":61,"index":292,"char":"=","width":21,"height":12,"xoffset":-1,"yoffset":16.308,"xadvance":17.976,"chnl":15,"x":219,"y":241,"page":0},{"id":62,"index":298,"char":">","width":21,"height":21,"xoffset":-1,"yoffset":12.308,"xadvance":17.64,"chnl":15,"x":243,"y":218,"page":0},{"id":95,"index":354,"char":"_","width":21,"height":5,"xoffset":-1,"yoffset":30.308,"xadvance":18.732,"chnl":15,"x":0,"y":191,"page":0},{"id":34,"index":313,"char":"\\"","width":17,"height":14,"xoffset":-2,"yoffset":3.308,"xadvance":12.516,"chnl":15,"x":241,"y":241,"page":0},{"id":42,"index":321,"char":"*","width":16,"height":17,"xoffset":-1,"yoffset":3.308,"xadvance":12.726,"chnl":15,"x":261,"y":185,"page":0},{"id":126,"index":309,"char":"~","width":16,"height":8,"xoffset":0,"yoffset":19.308,"xadvance":15.54,"chnl":15,"x":250,"y":56,"page":0},{"id":94,"index":308,"char":"^","width":15,"height":12,"xoffset":0,"yoffset":2.308,"xadvance":15.54,"chnl":15,"x":261,"y":203,"page":0},{"id":39,"index":312,"char":"\'","width":11,"height":14,"xoffset":-2,"yoffset":3.308,"xadvance":6.216,"chnl":15,"x":74,"y":230,"page":0},{"id":45,"index":350,"char":"-","width":14,"height":5,"xoffset":-1,"yoffset":19.308,"xadvance":11.76,"chnl":15,"x":117,"y":191,"page":0},{"id":44,"index":331,"char":",","width":9,"height":13,"xoffset":-1,"yoffset":25.308,"xadvance":6.804,"chnl":15,"x":259,"y":240,"page":0},{"id":96,"index":355,"char":"`","width":12,"height":12,"xoffset":0,"yoffset":2.308,"xadvance":15.54,"chnl":15,"x":265,"y":216,"page":0},{"id":46,"index":330,"char":".","width":8,"height":8,"xoffset":0,"yoffset":26.308,"xadvance":7.728,"chnl":15,"x":38,"y":32,"page":0},{"id":32,"index":1,"char":" ","width":0,"height":0,"xoffset":-2,"yoffset":30.308,"xadvance":7.56,"chnl":15,"x":56,"y":86,"page":0}],"info":{"face":"freight","size":42,"bold":0,"italic":0,"charset":[" ","!","\\"","#","$","%","&","\'","(",")","*","+",",","-",".","/","0","1","2","3","4","5","6","7","8","9",":",";","<","=",">","?","@","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","[","\\\\","]","^","_","`","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","{","|","}","~"],"unicode":1,"stretchH":100,"smooth":1,"aa":1,"padding":[2,2,2,2],"spacing":[0,0]},"common":{"lineHeight":41.244,"base":30.308,"scaleW":512,"scaleH":256,"pages":1,"packed":0,"alphaChnl":0,"redChnl":0,"greenChnl":0,"blueChnl":0},"distanceField":{"fieldType":"msdf","distanceRange":4},"kernings":[{"first":33,"second":66,"amount":-0.42},{"first":33,"second":68,"amount":-0.42},{"first":33,"second":69,"amount":-0.42},{"first":33,"second":70,"amount":-0.42},{"first":33,"second":72,"amount":-0.42},{"first":33,"second":73,"amount":-0.42},{"first":33,"second":75,"amount":-0.42},{"first":33,"second":76,"amount":-0.42},{"first":33,"second":77,"amount":-0.42},{"first":33,"second":78,"amount":-0.42},{"first":33,"second":80,"amount":-0.42},{"first":33,"second":82,"amount":-0.42},{"first":35,"second":52,"amount":-2.1},{"first":35,"second":54,"amount":-0.42},{"first":35,"second":55,"amount":1.68},{"first":35,"second":57,"amount":-0.42},{"first":36,"second":52,"amount":-0.42},{"first":36,"second":54,"amount":0.42},{"first":36,"second":56,"amount":0.42},{"first":36,"second":57,"amount":0.42},{"first":44,"second":48,"amount":-0.84},{"first":44,"second":49,"amount":-1.68},{"first":44,"second":50,"amount":0.42},{"first":44,"second":51,"amount":-1.26},{"first":44,"second":52,"amount":-1.26},{"first":44,"second":54,"amount":-0.84},{"first":44,"second":55,"amount":-1.26},{"first":44,"second":56,"amount":-0.84},{"first":44,"second":57,"amount":-0.42},{"first":44,"second":65,"amount":-0.42},{"first":44,"second":66,"amount":-1.26},{"first":44,"second":67,"amount":-1.68},{"first":44,"second":68,"amount":-1.26},{"first":44,"second":69,"amount":-1.26},{"first":44,"second":70,"amount":-1.26},{"first":44,"second":71,"amount":-1.68},{"first":44,"second":72,"amount":-1.26},{"first":44,"second":73,"amount":-1.26},{"first":44,"second":75,"amount":-1.26},{"first":44,"second":76,"amount":-1.26},{"first":44,"second":77,"amount":-1.26},{"first":44,"second":78,"amount":-1.26},{"first":44,"second":79,"amount":-1.68},{"first":44,"second":80,"amount":-1.26},{"first":44,"second":81,"amount":-1.68},{"first":44,"second":82,"amount":-1.26},{"first":44,"second":83,"amount":0.42},{"first":44,"second":84,"amount":-4.2},{"first":44,"second":85,"amount":-2.52},{"first":44,"second":86,"amount":-4.62},{"first":44,"second":87,"amount":-4.62},{"first":44,"second":89,"amount":-4.62},{"first":44,"second":99,"amount":-1.26},{"first":44,"second":100,"amount":-1.26},{"first":44,"second":101,"amount":-1.26},{"first":44,"second":111,"amount":-1.26},{"first":44,"second":113,"amount":-1.26},{"first":44,"second":118,"amount":-2.94},{"first":44,"second":119,"amount":-2.94},{"first":44,"second":121,"amount":-2.94},{"first":45,"second":48,"amount":1.26},{"first":45,"second":49,"amount":-0.84},{"first":45,"second":50,"amount":-0.84},{"first":45,"second":51,"amount":-0.84},{"first":45,"second":52,"amount":-0.42},{"first":45,"second":53,"amount":-0.84},{"first":45,"second":54,"amount":1.26},{"first":45,"second":55,"amount":-0.84},{"first":45,"second":57,"amount":1.26},{"first":45,"second":65,"amount":-0.84},{"first":45,"second":67,"amount":2.52},{"first":45,"second":71,"amount":2.52},{"first":45,"second":79,"amount":2.52},{"first":45,"second":81,"amount":2.52},{"first":45,"second":83,"amount":0.42},{"first":45,"second":84,"amount":-2.1},{"first":45,"second":85,"amount":0.84},{"first":45,"second":86,"amount":-1.68},{"first":45,"second":87,"amount":-1.68},{"first":45,"second":89,"amount":-3.36},{"first":45,"second":99,"amount":0.84},{"first":45,"second":100,"amount":0.84},{"first":45,"second":101,"amount":0.84},{"first":45,"second":111,"amount":0.84},{"first":45,"second":113,"amount":0.84},{"first":45,"second":118,"amount":-0.84},{"first":45,"second":119,"amount":-0.84},{"first":45,"second":120,"amount":-0.84},{"first":45,"second":121,"amount":-0.84},{"first":46,"second":48,"amount":-1.68},{"first":46,"second":49,"amount":-1.68},{"first":46,"second":50,"amount":0.42},{"first":46,"second":51,"amount":0.42},{"first":46,"second":52,"amount":-1.26},{"first":46,"second":53,"amount":0.84},{"first":46,"second":54,"amount":-0.84},{"first":46,"second":55,"amount":-0.42},{"first":46,"second":56,"amount":-0.84},{"first":46,"second":57,"amount":-0.84},{"first":46,"second":65,"amount":-0.42},{"first":46,"second":66,"amount":-1.26},{"first":46,"second":67,"amount":-1.68},{"first":46,"second":68,"amount":-1.26},{"first":46,"second":69,"amount":-1.26},{"first":46,"second":70,"amount":-1.26},{"first":46,"second":71,"amount":-1.68},{"first":46,"second":72,"amount":-1.26},{"first":46,"second":73,"amount":-1.26},{"first":46,"second":75,"amount":-1.26},{"first":46,"second":76,"amount":-1.26},{"first":46,"second":77,"amount":-1.26},{"first":46,"second":78,"amount":-1.26},{"first":46,"second":79,"amount":-1.68},{"first":46,"second":80,"amount":-1.26},{"first":46,"second":81,"amount":-1.68},{"first":46,"second":82,"amount":-1.26},{"first":46,"second":83,"amount":0.42},{"first":46,"second":84,"amount":-4.2},{"first":46,"second":85,"amount":-2.52},{"first":46,"second":86,"amount":-4.62},{"first":46,"second":87,"amount":-4.62},{"first":46,"second":89,"amount":-4.62},{"first":46,"second":99,"amount":-1.26},{"first":46,"second":100,"amount":-1.26},{"first":46,"second":101,"amount":-1.26},{"first":46,"second":111,"amount":-1.26},{"first":46,"second":113,"amount":-1.26},{"first":46,"second":118,"amount":-2.94},{"first":46,"second":119,"amount":-2.94},{"first":46,"second":121,"amount":-2.94},{"first":47,"second":52,"amount":-2.1},{"first":47,"second":99,"amount":-0.84},{"first":47,"second":100,"amount":-0.84},{"first":47,"second":101,"amount":-0.84},{"first":47,"second":111,"amount":-0.84},{"first":47,"second":113,"amount":-0.84},{"first":48,"second":44,"amount":-0.84},{"first":48,"second":45,"amount":1.26},{"first":48,"second":46,"amount":-1.68},{"first":48,"second":49,"amount":-0.63},{"first":48,"second":50,"amount":-0.84},{"first":48,"second":51,"amount":-0.84},{"first":48,"second":52,"amount":-1.05},{"first":49,"second":48,"amount":-0.84},{"first":49,"second":52,"amount":-0.84},{"first":49,"second":53,"amount":-0.42},{"first":49,"second":55,"amount":-0.63},{"first":50,"second":44,"amount":-0.42},{"first":50,"second":45,"amount":0.84},{"first":50,"second":46,"amount":-0.42},{"first":50,"second":55,"amount":-0.21},{"first":50,"second":56,"amount":0.42},{"first":50,"second":58,"amount":-0.42},{"first":50,"second":59,"amount":-0.42},{"first":51,"second":45,"amount":-0.42},{"first":51,"second":46,"amount":-0.84},{"first":51,"second":52,"amount":0.42},{"first":51,"second":53,"amount":0.42},{"first":51,"second":55,"amount":-0.21},{"first":51,"second":58,"amount":-0.42},{"first":52,"second":44,"amount":-0.42},{"first":52,"second":45,"amount":-0.42},{"first":52,"second":46,"amount":-0.42},{"first":52,"second":48,"amount":-0.21},{"first":52,"second":49,"amount":-0.42},{"first":52,"second":50,"amount":-0.21},{"first":52,"second":51,"amount":-0.21},{"first":52,"second":53,"amount":-0.21},{"first":52,"second":54,"amount":0.21},{"first":52,"second":55,"amount":-0.63},{"first":52,"second":57,"amount":-0.21},{"first":53,"second":45,"amount":0.84},{"first":53,"second":46,"amount":-0.42},{"first":53,"second":51,"amount":-0.42},{"first":53,"second":52,"amount":0.21},{"first":53,"second":55,"amount":0.84},{"first":53,"second":56,"amount":0.42},{"first":54,"second":35,"amount":0.42},{"first":54,"second":44,"amount":-0.84},{"first":54,"second":45,"amount":1.26},{"first":54,"second":46,"amount":-0.84},{"first":54,"second":52,"amount":-0.42},{"first":55,"second":35,"amount":-0.84},{"first":55,"second":44,"amount":-2.52},{"first":55,"second":45,"amount":-1.26},{"first":55,"second":46,"amount":-2.52},{"first":55,"second":47,"amount":-1.68},{"first":55,"second":48,"amount":-0.42},{"first":55,"second":52,"amount":-2.52},{"first":55,"second":53,"amount":-1.26},{"first":55,"second":54,"amount":-1.68},{"first":55,"second":55,"amount":0.21},{"first":55,"second":56,"amount":-0.84},{"first":55,"second":57,"amount":0.42},{"first":56,"second":35,"amount":0.42},{"first":56,"second":44,"amount":-0.84},{"first":56,"second":45,"amount":0.42},{"first":56,"second":46,"amount":-0.84},{"first":56,"second":50,"amount":-0.42},{"first":56,"second":51,"amount":-0.42},{"first":56,"second":52,"amount":-0.42},{"first":56,"second":53,"amount":-1.26},{"first":56,"second":55,"amount":-0.42},{"first":57,"second":35,"amount":0.84},{"first":57,"second":44,"amount":-2.1},{"first":57,"second":45,"amount":1.26},{"first":57,"second":46,"amount":-2.1},{"first":57,"second":49,"amount":-0.42},{"first":57,"second":52,"amount":-0.21},{"first":58,"second":49,"amount":-0.84},{"first":58,"second":50,"amount":0.42},{"first":58,"second":51,"amount":0.42},{"first":58,"second":53,"amount":0.42},{"first":58,"second":66,"amount":-0.42},{"first":58,"second":68,"amount":-0.42},{"first":58,"second":69,"amount":-0.42},{"first":58,"second":70,"amount":-0.42},{"first":58,"second":72,"amount":-0.42},{"first":58,"second":73,"amount":-0.42},{"first":58,"second":75,"amount":-0.42},{"first":58,"second":76,"amount":-0.42},{"first":58,"second":77,"amount":-0.42},{"first":58,"second":78,"amount":-0.42},{"first":58,"second":80,"amount":-0.42},{"first":58,"second":82,"amount":-0.42},{"first":58,"second":84,"amount":-2.1},{"first":58,"second":86,"amount":-2.94},{"first":58,"second":87,"amount":-2.94},{"first":58,"second":89,"amount":-2.94},{"first":58,"second":99,"amount":-0.42},{"first":58,"second":100,"amount":-0.42},{"first":58,"second":101,"amount":-0.42},{"first":58,"second":111,"amount":-0.42},{"first":58,"second":113,"amount":-0.42},{"first":59,"second":49,"amount":-0.84},{"first":59,"second":50,"amount":0.42},{"first":59,"second":66,"amount":-0.42},{"first":59,"second":68,"amount":-0.42},{"first":59,"second":69,"amount":-0.42},{"first":59,"second":70,"amount":-0.42},{"first":59,"second":72,"amount":-0.42},{"first":59,"second":73,"amount":-0.42},{"first":59,"second":75,"amount":-0.42},{"first":59,"second":76,"amount":-0.42},{"first":59,"second":77,"amount":-0.42},{"first":59,"second":78,"amount":-0.42},{"first":59,"second":80,"amount":-0.42},{"first":59,"second":82,"amount":-0.42},{"first":59,"second":84,"amount":-2.1},{"first":59,"second":86,"amount":-2.94},{"first":59,"second":87,"amount":-2.94},{"first":59,"second":89,"amount":-2.94},{"first":59,"second":99,"amount":-0.42},{"first":59,"second":100,"amount":-0.42},{"first":59,"second":101,"amount":-0.42},{"first":59,"second":111,"amount":-0.42},{"first":59,"second":113,"amount":-0.42},{"first":65,"second":44,"amount":-0.42},{"first":65,"second":45,"amount":-0.84},{"first":65,"second":46,"amount":-0.42},{"first":65,"second":67,"amount":-2.52},{"first":65,"second":71,"amount":-2.52},{"first":65,"second":74,"amount":-0.42},{"first":65,"second":79,"amount":-2.52},{"first":65,"second":81,"amount":-2.52},{"first":65,"second":83,"amount":-0.42},{"first":65,"second":84,"amount":-4.62},{"first":65,"second":85,"amount":-2.1},{"first":65,"second":86,"amount":-5.04},{"first":65,"second":87,"amount":-5.04},{"first":65,"second":88,"amount":-1.26},{"first":65,"second":89,"amount":-3.78},{"first":65,"second":97,"amount":-0.84},{"first":65,"second":99,"amount":-1.68},{"first":65,"second":100,"amount":-1.68},{"first":65,"second":101,"amount":-1.68},{"first":65,"second":102,"amount":-0.84},{"first":65,"second":103,"amount":-0.84},{"first":65,"second":104,"amount":-0.42},{"first":65,"second":105,"amount":-0.42},{"first":65,"second":106,"amount":-0.42},{"first":65,"second":107,"amount":-0.42},{"first":65,"second":108,"amount":-0.42},{"first":65,"second":109,"amount":-0.42},{"first":65,"second":110,"amount":-0.42},{"first":65,"second":111,"amount":-1.68},{"first":65,"second":112,"amount":-0.42},{"first":65,"second":113,"amount":-1.68},{"first":65,"second":114,"amount":-0.42},{"first":65,"second":115,"amount":-0.42},{"first":65,"second":116,"amount":-1.68},{"first":65,"second":117,"amount":-1.68},{"first":65,"second":118,"amount":-3.99},{"first":65,"second":119,"amount":-3.99},{"first":65,"second":121,"amount":-3.99},{"first":66,"second":44,"amount":-0.84},{"first":66,"second":45,"amount":0.84},{"first":66,"second":46,"amount":-0.84},{"first":66,"second":47,"amount":-0.84},{"first":66,"second":65,"amount":-0.42},{"first":66,"second":84,"amount":-0.84},{"first":66,"second":85,"amount":-0.42},{"first":66,"second":86,"amount":-1.68},{"first":66,"second":87,"amount":-1.68},{"first":66,"second":88,"amount":-1.26},{"first":66,"second":89,"amount":-1.68},{"first":66,"second":90,"amount":-0.42},{"first":66,"second":99,"amount":0.42},{"first":66,"second":100,"amount":0.42},{"first":66,"second":101,"amount":0.42},{"first":66,"second":109,"amount":-0.42},{"first":66,"second":110,"amount":-0.42},{"first":66,"second":111,"amount":0.42},{"first":66,"second":112,"amount":-0.42},{"first":66,"second":113,"amount":0.42},{"first":66,"second":114,"amount":-0.42},{"first":66,"second":118,"amount":-0.84},{"first":66,"second":119,"amount":-0.84},{"first":66,"second":120,"amount":-0.42},{"first":66,"second":121,"amount":-0.84},{"first":67,"second":47,"amount":-0.42},{"first":67,"second":65,"amount":-1.26},{"first":67,"second":84,"amount":-0.84},{"first":67,"second":105,"amount":-0.42},{"first":67,"second":109,"amount":-0.42},{"first":67,"second":110,"amount":-0.42},{"first":67,"second":112,"amount":-0.42},{"first":67,"second":114,"amount":-0.42},{"first":67,"second":118,"amount":-0.84},{"first":67,"second":119,"amount":-0.84},{"first":67,"second":120,"amount":-0.42},{"first":67,"second":121,"amount":-0.84},{"first":68,"second":44,"amount":-1.68},{"first":68,"second":45,"amount":2.52},{"first":68,"second":46,"amount":-1.68},{"first":68,"second":65,"amount":-2.52},{"first":68,"second":83,"amount":-0.42},{"first":68,"second":84,"amount":-0.84},{"first":68,"second":86,"amount":-2.1},{"first":68,"second":87,"amount":-2.1},{"first":68,"second":88,"amount":-1.68},{"first":68,"second":89,"amount":-1.68},{"first":68,"second":90,"amount":-0.42},{"first":69,"second":116,"amount":-0.42},{"first":69,"second":118,"amount":-2.1},{"first":69,"second":119,"amount":-2.1},{"first":69,"second":120,"amount":-0.42},{"first":69,"second":121,"amount":-2.1},{"first":69,"second":122,"amount":-0.42},{"first":70,"second":44,"amount":-3.78},{"first":70,"second":45,"amount":-0.84},{"first":70,"second":46,"amount":-3.78},{"first":70,"second":47,"amount":-3.36},{"first":70,"second":58,"amount":-0.84},{"first":70,"second":59,"amount":-0.84},{"first":70,"second":65,"amount":-2.94},{"first":70,"second":97,"amount":-2.52},{"first":70,"second":99,"amount":-2.94},{"first":70,"second":100,"amount":-2.94},{"first":70,"second":101,"amount":-2.94},{"first":70,"second":102,"amount":-0.84},{"first":70,"second":103,"amount":-2.1},{"first":70,"second":105,"amount":-0.84},{"first":70,"second":106,"amount":-0.84},{"first":70,"second":109,"amount":-2.52},{"first":70,"second":110,"amount":-2.52},{"first":70,"second":111,"amount":-2.94},{"first":70,"second":112,"amount":-2.52},{"first":70,"second":113,"amount":-2.94},{"first":70,"second":114,"amount":-2.52},{"first":70,"second":115,"amount":-2.1},{"first":70,"second":116,"amount":-0.84},{"first":70,"second":117,"amount":-0.84},{"first":70,"second":118,"amount":-2.1},{"first":70,"second":119,"amount":-2.1},{"first":70,"second":120,"amount":-1.26},{"first":70,"second":121,"amount":-2.1},{"first":70,"second":122,"amount":-1.68},{"first":71,"second":45,"amount":1.26},{"first":71,"second":65,"amount":-0.84},{"first":71,"second":84,"amount":-1.26},{"first":71,"second":86,"amount":-0.42},{"first":71,"second":87,"amount":-0.42},{"first":71,"second":88,"amount":-0.42},{"first":71,"second":89,"amount":-0.42},{"first":71,"second":118,"amount":-0.42},{"first":71,"second":119,"amount":-0.42},{"first":71,"second":120,"amount":-0.42},{"first":71,"second":121,"amount":-0.42},{"first":72,"second":33,"amount":-0.42},{"first":72,"second":44,"amount":-1.26},{"first":72,"second":46,"amount":-1.26},{"first":72,"second":58,"amount":-0.42},{"first":72,"second":59,"amount":-0.42},{"first":72,"second":97,"amount":-0.84},{"first":72,"second":99,"amount":-1.05},{"first":72,"second":100,"amount":-1.05},{"first":72,"second":101,"amount":-1.05},{"first":72,"second":102,"amount":-0.84},{"first":72,"second":103,"amount":-0.84},{"first":72,"second":105,"amount":-0.42},{"first":72,"second":106,"amount":-0.42},{"first":72,"second":109,"amount":-0.84},{"first":72,"second":110,"amount":-0.84},{"first":72,"second":111,"amount":-1.05},{"first":72,"second":112,"amount":-0.84},{"first":72,"second":113,"amount":-1.05},{"first":72,"second":114,"amount":-0.84},{"first":72,"second":116,"amount":-0.84},{"first":72,"second":117,"amount":-0.84},{"first":72,"second":118,"amount":-2.1},{"first":72,"second":119,"amount":-2.1},{"first":72,"second":120,"amount":-0.42},{"first":72,"second":121,"amount":-2.1},{"first":72,"second":122,"amount":-0.42},{"first":73,"second":33,"amount":-0.42},{"first":73,"second":44,"amount":-1.26},{"first":73,"second":46,"amount":-1.26},{"first":73,"second":58,"amount":-0.42},{"first":73,"second":59,"amount":-0.42},{"first":73,"second":97,"amount":-0.84},{"first":73,"second":99,"amount":-1.05},{"first":73,"second":100,"amount":-1.05},{"first":73,"second":101,"amount":-1.05},{"first":73,"second":102,"amount":-0.84},{"first":73,"second":103,"amount":-0.84},{"first":73,"second":105,"amount":-0.42},{"first":73,"second":106,"amount":-0.42},{"first":73,"second":109,"amount":-0.84},{"first":73,"second":110,"amount":-0.84},{"first":73,"second":111,"amount":-1.05},{"first":73,"second":112,"amount":-0.84},{"first":73,"second":113,"amount":-1.05},{"first":73,"second":114,"amount":-0.84},{"first":73,"second":116,"amount":-0.84},{"first":73,"second":117,"amount":-0.84},{"first":73,"second":118,"amount":-2.1},{"first":73,"second":119,"amount":-2.1},{"first":73,"second":120,"amount":-0.42},{"first":73,"second":121,"amount":-2.1},{"first":73,"second":122,"amount":-0.42},{"first":74,"second":44,"amount":-1.26},{"first":74,"second":46,"amount":-1.26},{"first":74,"second":47,"amount":-2.94},{"first":74,"second":65,"amount":-0.84},{"first":74,"second":97,"amount":-1.26},{"first":74,"second":99,"amount":-1.68},{"first":74,"second":100,"amount":-1.68},{"first":74,"second":101,"amount":-1.68},{"first":74,"second":103,"amount":-1.26},{"first":74,"second":104,"amount":-0.84},{"first":74,"second":105,"amount":-0.84},{"first":74,"second":106,"amount":-0.84},{"first":74,"second":107,"amount":-0.84},{"first":74,"second":108,"amount":-0.84},{"first":74,"second":109,"amount":-0.84},{"first":74,"second":110,"amount":-0.84},{"first":74,"second":111,"amount":-1.68},{"first":74,"second":112,"amount":-0.84},{"first":74,"second":113,"amount":-1.68},{"first":74,"second":114,"amount":-0.84},{"first":74,"second":115,"amount":-0.84},{"first":74,"second":116,"amount":-1.26},{"first":74,"second":117,"amount":-0.84},{"first":74,"second":118,"amount":-1.68},{"first":74,"second":119,"amount":-1.68},{"first":74,"second":120,"amount":-1.26},{"first":74,"second":121,"amount":-1.68},{"first":74,"second":122,"amount":-0.84},{"first":75,"second":44,"amount":-0.42},{"first":75,"second":45,"amount":-1.68},{"first":75,"second":46,"amount":-0.42},{"first":75,"second":47,"amount":-1.26},{"first":75,"second":58,"amount":-0.42},{"first":75,"second":59,"amount":-0.42},{"first":75,"second":67,"amount":-2.52},{"first":75,"second":71,"amount":-2.52},{"first":75,"second":79,"amount":-2.52},{"first":75,"second":81,"amount":-2.52},{"first":75,"second":84,"amount":-2.1},{"first":75,"second":85,"amount":-1.68},{"first":75,"second":86,"amount":-2.94},{"first":75,"second":87,"amount":-2.94},{"first":75,"second":88,"amount":-0.84},{"first":75,"second":89,"amount":-2.52},{"first":75,"second":97,"amount":-1.26},{"first":75,"second":99,"amount":-2.52},{"first":75,"second":100,"amount":-2.52},{"first":75,"second":101,"amount":-2.52},{"first":75,"second":102,"amount":-0.84},{"first":75,"second":103,"amount":-1.26},{"first":75,"second":105,"amount":-0.42},{"first":75,"second":106,"amount":-0.42},{"first":75,"second":109,"amount":-0.42},{"first":75,"second":110,"amount":-0.42},{"first":75,"second":111,"amount":-2.52},{"first":75,"second":112,"amount":-0.42},{"first":75,"second":113,"amount":-2.52},{"first":75,"second":114,"amount":-0.42},{"first":75,"second":115,"amount":-0.42},{"first":75,"second":116,"amount":-1.68},{"first":75,"second":117,"amount":-1.68},{"first":75,"second":118,"amount":-3.78},{"first":75,"second":119,"amount":-3.78},{"first":75,"second":120,"amount":-2.1},{"first":75,"second":121,"amount":-3.78},{"first":76,"second":84,"amount":-3.78},{"first":76,"second":85,"amount":-0.63},{"first":76,"second":86,"amount":-3.78},{"first":76,"second":87,"amount":-3.78},{"first":76,"second":89,"amount":-2.94},{"first":76,"second":118,"amount":-2.1},{"first":76,"second":119,"amount":-2.1},{"first":76,"second":120,"amount":-0.42},{"first":76,"second":121,"amount":-2.1},{"first":77,"second":33,"amount":-0.42},{"first":77,"second":44,"amount":-1.26},{"first":77,"second":46,"amount":-1.26},{"first":77,"second":58,"amount":-0.42},{"first":77,"second":59,"amount":-0.42},{"first":77,"second":97,"amount":-0.84},{"first":77,"second":99,"amount":-1.05},{"first":77,"second":100,"amount":-1.05},{"first":77,"second":101,"amount":-1.05},{"first":77,"second":102,"amount":-0.84},{"first":77,"second":103,"amount":-0.84},{"first":77,"second":105,"amount":-0.42},{"first":77,"second":106,"amount":-0.42},{"first":77,"second":109,"amount":-0.84},{"first":77,"second":110,"amount":-0.84},{"first":77,"second":111,"amount":-1.05},{"first":77,"second":112,"amount":-0.84},{"first":77,"second":113,"amount":-1.05},{"first":77,"second":114,"amount":-0.84},{"first":77,"second":116,"amount":-0.84},{"first":77,"second":117,"amount":-0.84},{"first":77,"second":118,"amount":-2.1},{"first":77,"second":119,"amount":-2.1},{"first":77,"second":120,"amount":-0.42},{"first":77,"second":121,"amount":-2.1},{"first":77,"second":122,"amount":-0.42},{"first":78,"second":33,"amount":-0.42},{"first":78,"second":44,"amount":-1.26},{"first":78,"second":46,"amount":-1.26},{"first":78,"second":58,"amount":-0.42},{"first":78,"second":59,"amount":-0.42},{"first":78,"second":97,"amount":-0.84},{"first":78,"second":99,"amount":-1.05},{"first":78,"second":100,"amount":-1.05},{"first":78,"second":101,"amount":-1.05},{"first":78,"second":102,"amount":-0.84},{"first":78,"second":103,"amount":-0.84},{"first":78,"second":105,"amount":-0.42},{"first":78,"second":106,"amount":-0.42},{"first":78,"second":109,"amount":-0.84},{"first":78,"second":110,"amount":-0.84},{"first":78,"second":111,"amount":-1.05},{"first":78,"second":112,"amount":-0.84},{"first":78,"second":113,"amount":-1.05},{"first":78,"second":114,"amount":-0.84},{"first":78,"second":116,"amount":-0.84},{"first":78,"second":117,"amount":-0.84},{"first":78,"second":118,"amount":-2.1},{"first":78,"second":119,"amount":-2.1},{"first":78,"second":120,"amount":-0.42},{"first":78,"second":121,"amount":-2.1},{"first":78,"second":122,"amount":-0.42},{"first":79,"second":44,"amount":-1.68},{"first":79,"second":45,"amount":2.52},{"first":79,"second":46,"amount":-1.68},{"first":79,"second":65,"amount":-2.52},{"first":79,"second":83,"amount":-0.42},{"first":79,"second":84,"amount":-0.84},{"first":79,"second":86,"amount":-2.1},{"first":79,"second":87,"amount":-2.1},{"first":79,"second":88,"amount":-1.68},{"first":79,"second":89,"amount":-1.68},{"first":79,"second":90,"amount":-0.42},{"first":80,"second":44,"amount":-4.2},{"first":80,"second":45,"amount":-2.52},{"first":80,"second":46,"amount":-4.2},{"first":80,"second":47,"amount":-2.52},{"first":80,"second":65,"amount":-2.94},{"first":80,"second":67,"amount":0.42},{"first":80,"second":71,"amount":0.42},{"first":80,"second":79,"amount":0.42},{"first":80,"second":81,"amount":0.42},{"first":80,"second":85,"amount":-0.42},{"first":80,"second":86,"amount":-0.42},{"first":80,"second":87,"amount":-0.42},{"first":80,"second":88,"amount":-0.84},{"first":80,"second":89,"amount":-0.42},{"first":80,"second":97,"amount":-1.47},{"first":80,"second":99,"amount":-1.68},{"first":80,"second":100,"amount":-1.68},{"first":80,"second":101,"amount":-1.68},{"first":80,"second":103,"amount":-1.68},{"first":80,"second":104,"amount":-0.42},{"first":80,"second":107,"amount":-0.42},{"first":80,"second":108,"amount":-0.42},{"first":80,"second":109,"amount":-0.84},{"first":80,"second":110,"amount":-0.84},{"first":80,"second":111,"amount":-1.68},{"first":80,"second":112,"amount":-0.84},{"first":80,"second":113,"amount":-1.68},{"first":80,"second":114,"amount":-0.84},{"first":80,"second":115,"amount":-1.26},{"first":80,"second":116,"amount":-0.42},{"first":81,"second":44,"amount":-1.68},{"first":81,"second":45,"amount":2.52},{"first":81,"second":46,"amount":-1.68},{"first":81,"second":65,"amount":-2.52},{"first":81,"second":83,"amount":-0.42},{"first":81,"second":84,"amount":-0.84},{"first":81,"second":86,"amount":-2.1},{"first":81,"second":87,"amount":-2.1},{"first":81,"second":88,"amount":-1.68},{"first":81,"second":89,"amount":-1.68},{"first":81,"second":90,"amount":-0.42},{"first":82,"second":44,"amount":-0.42},{"first":82,"second":45,"amount":-1.68},{"first":82,"second":46,"amount":-0.42},{"first":82,"second":58,"amount":-0.42},{"first":82,"second":59,"amount":-0.42},{"first":82,"second":65,"amount":-1.26},{"first":82,"second":67,"amount":-1.68},{"first":82,"second":71,"amount":-1.68},{"first":82,"second":79,"amount":-1.68},{"first":82,"second":81,"amount":-1.68},{"first":82,"second":83,"amount":-0.84},{"first":82,"second":84,"amount":-1.68},{"first":82,"second":85,"amount":-1.68},{"first":82,"second":86,"amount":-2.94},{"first":82,"second":87,"amount":-2.94},{"first":82,"second":88,"amount":-1.68},{"first":82,"second":89,"amount":-2.52},{"first":82,"second":90,"amount":-0.42},{"first":82,"second":97,"amount":-0.84},{"first":82,"second":98,"amount":-0.84},{"first":82,"second":99,"amount":-2.1},{"first":82,"second":100,"amount":-2.1},{"first":82,"second":101,"amount":-2.1},{"first":82,"second":102,"amount":-0.42},{"first":82,"second":103,"amount":-0.42},{"first":82,"second":111,"amount":-2.1},{"first":82,"second":113,"amount":-2.1},{"first":82,"second":116,"amount":-1.26},{"first":82,"second":117,"amount":-1.26},{"first":82,"second":118,"amount":-2.1},{"first":82,"second":119,"amount":-2.1},{"first":82,"second":120,"amount":-1.68},{"first":82,"second":121,"amount":-2.1},{"first":83,"second":44,"amount":-0.84},{"first":83,"second":45,"amount":1.68},{"first":83,"second":46,"amount":-0.84},{"first":83,"second":65,"amount":-0.42},{"first":83,"second":67,"amount":0.84},{"first":83,"second":71,"amount":0.84},{"first":83,"second":79,"amount":0.84},{"first":83,"second":81,"amount":0.84},{"first":83,"second":83,"amount":-0.42},{"first":83,"second":84,"amount":-0.84},{"first":83,"second":86,"amount":-0.84},{"first":83,"second":87,"amount":-0.84},{"first":83,"second":88,"amount":-0.84},{"first":83,"second":89,"amount":-1.26},{"first":83,"second":90,"amount":-0.42},{"first":83,"second":118,"amount":-0.42},{"first":83,"second":119,"amount":-0.42},{"first":83,"second":120,"amount":-0.42},{"first":83,"second":121,"amount":-0.42},{"first":84,"second":44,"amount":-4.2},{"first":84,"second":45,"amount":-2.1},{"first":84,"second":46,"amount":-4.2},{"first":84,"second":58,"amount":-2.1},{"first":84,"second":59,"amount":-2.1},{"first":84,"second":65,"amount":-4.62},{"first":84,"second":67,"amount":-0.84},{"first":84,"second":71,"amount":-0.84},{"first":84,"second":79,"amount":-0.84},{"first":84,"second":81,"amount":-0.84},{"first":84,"second":83,"amount":-0.84},{"first":84,"second":84,"amount":-0.42},{"first":84,"second":86,"amount":-0.42},{"first":84,"second":87,"amount":-0.42},{"first":84,"second":88,"amount":-0.84},{"first":84,"second":89,"amount":-0.84},{"first":84,"second":90,"amount":-0.42},{"first":84,"second":97,"amount":-5.04},{"first":84,"second":99,"amount":-5.04},{"first":84,"second":100,"amount":-5.04},{"first":84,"second":101,"amount":-5.04},{"first":84,"second":102,"amount":-2.1},{"first":84,"second":103,"amount":-4.62},{"first":84,"second":109,"amount":-4.2},{"first":84,"second":110,"amount":-4.2},{"first":84,"second":111,"amount":-5.04},{"first":84,"second":112,"amount":-4.2},{"first":84,"second":113,"amount":-5.04},{"first":84,"second":114,"amount":-4.2},{"first":84,"second":115,"amount":-4.62},{"first":84,"second":116,"amount":-2.52},{"first":84,"second":117,"amount":-4.2},{"first":84,"second":118,"amount":-4.2},{"first":84,"second":119,"amount":-4.2},{"first":84,"second":120,"amount":-4.2},{"first":84,"second":121,"amount":-4.2},{"first":84,"second":122,"amount":-3.36},{"first":85,"second":44,"amount":-2.52},{"first":85,"second":45,"amount":0.84},{"first":85,"second":46,"amount":-2.52},{"first":85,"second":65,"amount":-2.1},{"first":85,"second":85,"amount":-0.42},{"first":85,"second":86,"amount":-0.42},{"first":85,"second":87,"amount":-0.42},{"first":85,"second":88,"amount":-0.84},{"first":85,"second":97,"amount":-0.84},{"first":85,"second":99,"amount":-1.05},{"first":85,"second":100,"amount":-1.05},{"first":85,"second":101,"amount":-1.05},{"first":85,"second":102,"amount":-1.26},{"first":85,"second":103,"amount":-1.68},{"first":85,"second":105,"amount":-0.84},{"first":85,"second":106,"amount":-0.84},{"first":85,"second":109,"amount":-1.26},{"first":85,"second":110,"amount":-1.26},{"first":85,"second":111,"amount":-1.05},{"first":85,"second":112,"amount":-1.26},{"first":85,"second":113,"amount":-1.05},{"first":85,"second":114,"amount":-1.26},{"first":85,"second":115,"amount":-1.05},{"first":85,"second":116,"amount":-0.63},{"first":85,"second":117,"amount":-0.84},{"first":85,"second":118,"amount":-1.68},{"first":85,"second":119,"amount":-1.68},{"first":85,"second":120,"amount":-1.68},{"first":85,"second":121,"amount":-1.68},{"first":85,"second":122,"amount":-0.84},{"first":86,"second":44,"amount":-4.62},{"first":86,"second":45,"amount":-1.68},{"first":86,"second":46,"amount":-4.62},{"first":86,"second":47,"amount":-3.78},{"first":86,"second":58,"amount":-2.94},{"first":86,"second":59,"amount":-2.94},{"first":86,"second":65,"amount":-5.04},{"first":86,"second":66,"amount":-0.84},{"first":86,"second":67,"amount":-2.1},{"first":86,"second":68,"amount":-0.84},{"first":86,"second":69,"amount":-0.84},{"first":86,"second":70,"amount":-0.84},{"first":86,"second":71,"amount":-2.1},{"first":86,"second":72,"amount":-0.84},{"first":86,"second":73,"amount":-0.84},{"first":86,"second":75,"amount":-0.84},{"first":86,"second":76,"amount":-0.84},{"first":86,"second":77,"amount":-0.84},{"first":86,"second":78,"amount":-0.84},{"first":86,"second":79,"amount":-2.1},{"first":86,"second":80,"amount":-0.84},{"first":86,"second":81,"amount":-2.1},{"first":86,"second":82,"amount":-0.84},{"first":86,"second":83,"amount":-1.26},{"first":86,"second":84,"amount":-0.42},{"first":86,"second":85,"amount":-0.42},{"first":86,"second":86,"amount":-1.26},{"first":86,"second":87,"amount":-1.26},{"first":86,"second":88,"amount":-2.52},{"first":86,"second":97,"amount":-4.2},{"first":86,"second":99,"amount":-4.41},{"first":86,"second":100,"amount":-4.41},{"first":86,"second":101,"amount":-4.41},{"first":86,"second":102,"amount":-2.1},{"first":86,"second":103,"amount":-4.2},{"first":86,"second":105,"amount":-1.05},{"first":86,"second":106,"amount":-1.26},{"first":86,"second":109,"amount":-3.99},{"first":86,"second":110,"amount":-3.99},{"first":86,"second":111,"amount":-4.41},{"first":86,"second":112,"amount":-3.99},{"first":86,"second":113,"amount":-4.41},{"first":86,"second":114,"amount":-3.99},{"first":86,"second":115,"amount":-3.36},{"first":86,"second":116,"amount":-2.52},{"first":86,"second":117,"amount":-2.52},{"first":86,"second":118,"amount":-2.94},{"first":86,"second":119,"amount":-2.94},{"first":86,"second":120,"amount":-2.94},{"first":86,"second":121,"amount":-2.94},{"first":86,"second":122,"amount":-3.36},{"first":87,"second":44,"amount":-4.62},{"first":87,"second":45,"amount":-1.68},{"first":87,"second":46,"amount":-4.62},{"first":87,"second":47,"amount":-3.78},{"first":87,"second":58,"amount":-2.94},{"first":87,"second":59,"amount":-2.94},{"first":87,"second":65,"amount":-5.04},{"first":87,"second":66,"amount":-0.84},{"first":87,"second":67,"amount":-2.1},{"first":87,"second":68,"amount":-0.84},{"first":87,"second":69,"amount":-0.84},{"first":87,"second":70,"amount":-0.84},{"first":87,"second":71,"amount":-2.1},{"first":87,"second":72,"amount":-0.84},{"first":87,"second":73,"amount":-0.84},{"first":87,"second":75,"amount":-0.84},{"first":87,"second":76,"amount":-0.84},{"first":87,"second":77,"amount":-0.84},{"first":87,"second":78,"amount":-0.84},{"first":87,"second":79,"amount":-2.1},{"first":87,"second":80,"amount":-0.84},{"first":87,"second":81,"amount":-2.1},{"first":87,"second":82,"amount":-0.84},{"first":87,"second":83,"amount":-1.26},{"first":87,"second":84,"amount":-0.42},{"first":87,"second":85,"amount":-0.42},{"first":87,"second":86,"amount":-1.26},{"first":87,"second":87,"amount":-1.26},{"first":87,"second":88,"amount":-2.52},{"first":87,"second":97,"amount":-4.2},{"first":87,"second":99,"amount":-4.41},{"first":87,"second":100,"amount":-4.41},{"first":87,"second":101,"amount":-4.41},{"first":87,"second":102,"amount":-2.1},{"first":87,"second":103,"amount":-4.2},{"first":87,"second":105,"amount":-1.05},{"first":87,"second":106,"amount":-1.26},{"first":87,"second":109,"amount":-3.99},{"first":87,"second":110,"amount":-3.99},{"first":87,"second":111,"amount":-4.41},{"first":87,"second":112,"amount":-3.99},{"first":87,"second":113,"amount":-4.41},{"first":87,"second":114,"amount":-3.99},{"first":87,"second":115,"amount":-3.36},{"first":87,"second":116,"amount":-2.52},{"first":87,"second":117,"amount":-2.52},{"first":87,"second":118,"amount":-2.94},{"first":87,"second":119,"amount":-2.94},{"first":87,"second":120,"amount":-2.94},{"first":87,"second":121,"amount":-2.94},{"first":87,"second":122,"amount":-3.36},{"first":88,"second":65,"amount":-1.26},{"first":88,"second":67,"amount":-1.68},{"first":88,"second":71,"amount":-1.68},{"first":88,"second":79,"amount":-1.68},{"first":88,"second":81,"amount":-1.68},{"first":88,"second":83,"amount":-0.84},{"first":88,"second":84,"amount":-0.84},{"first":88,"second":85,"amount":-0.84},{"first":88,"second":86,"amount":-2.52},{"first":88,"second":87,"amount":-2.52},{"first":88,"second":99,"amount":-1.68},{"first":88,"second":100,"amount":-1.68},{"first":88,"second":101,"amount":-1.68},{"first":88,"second":103,"amount":-0.42},{"first":88,"second":109,"amount":-0.42},{"first":88,"second":110,"amount":-0.42},{"first":88,"second":111,"amount":-1.68},{"first":88,"second":112,"amount":-0.42},{"first":88,"second":113,"amount":-1.68},{"first":88,"second":114,"amount":-0.42},{"first":88,"second":116,"amount":-1.26},{"first":88,"second":117,"amount":-1.68},{"first":88,"second":118,"amount":-2.52},{"first":88,"second":119,"amount":-2.52},{"first":88,"second":121,"amount":-2.52},{"first":89,"second":44,"amount":-4.62},{"first":89,"second":45,"amount":-3.36},{"first":89,"second":46,"amount":-4.62},{"first":89,"second":47,"amount":-4.2},{"first":89,"second":58,"amount":-2.94},{"first":89,"second":59,"amount":-2.94},{"first":89,"second":65,"amount":-3.78},{"first":89,"second":66,"amount":-0.84},{"first":89,"second":67,"amount":-1.68},{"first":89,"second":68,"amount":-0.84},{"first":89,"second":69,"amount":-0.84},{"first":89,"second":70,"amount":-0.84},{"first":89,"second":71,"amount":-1.68},{"first":89,"second":72,"amount":-0.84},{"first":89,"second":73,"amount":-0.84},{"first":89,"second":75,"amount":-0.84},{"first":89,"second":76,"amount":-0.84},{"first":89,"second":77,"amount":-0.84},{"first":89,"second":78,"amount":-0.84},{"first":89,"second":79,"amount":-1.68},{"first":89,"second":80,"amount":-0.84},{"first":89,"second":81,"amount":-1.68},{"first":89,"second":82,"amount":-0.84},{"first":89,"second":83,"amount":-1.68},{"first":89,"second":84,"amount":-0.84},{"first":89,"second":97,"amount":-3.78},{"first":89,"second":99,"amount":-5.04},{"first":89,"second":100,"amount":-5.04},{"first":89,"second":101,"amount":-5.04},{"first":89,"second":102,"amount":-2.94},{"first":89,"second":103,"amount":-4.2},{"first":89,"second":104,"amount":-0.42},{"first":89,"second":105,"amount":-1.68},{"first":89,"second":106,"amount":-1.68},{"first":89,"second":107,"amount":-0.42},{"first":89,"second":108,"amount":-0.42},{"first":89,"second":109,"amount":-3.78},{"first":89,"second":110,"amount":-3.78},{"first":89,"second":111,"amount":-5.04},{"first":89,"second":112,"amount":-3.78},{"first":89,"second":113,"amount":-5.04},{"first":89,"second":114,"amount":-3.78},{"first":89,"second":115,"amount":-4.2},{"first":89,"second":116,"amount":-3.36},{"first":89,"second":117,"amount":-3.78},{"first":89,"second":118,"amount":-4.2},{"first":89,"second":119,"amount":-4.2},{"first":89,"second":120,"amount":-3.36},{"first":89,"second":121,"amount":-4.2},{"first":89,"second":122,"amount":-3.78},{"first":90,"second":84,"amount":-0.42},{"first":90,"second":118,"amount":-1.68},{"first":90,"second":119,"amount":-1.68},{"first":90,"second":120,"amount":-0.84},{"first":90,"second":121,"amount":-1.68},{"first":92,"second":99,"amount":-0.84},{"first":92,"second":100,"amount":-0.84},{"first":92,"second":101,"amount":-0.84},{"first":92,"second":111,"amount":-0.84},{"first":92,"second":113,"amount":-0.84},{"first":97,"second":102,"amount":-0.42},{"first":97,"second":116,"amount":-0.42},{"first":97,"second":118,"amount":-1.26},{"first":97,"second":119,"amount":-1.26},{"first":97,"second":120,"amount":-0.42},{"first":97,"second":121,"amount":-1.26},{"first":98,"second":44,"amount":-1.26},{"first":98,"second":45,"amount":0.84},{"first":98,"second":46,"amount":-1.26},{"first":98,"second":47,"amount":-1.26},{"first":98,"second":58,"amount":-0.42},{"first":98,"second":59,"amount":-0.42},{"first":98,"second":118,"amount":-1.134},{"first":98,"second":119,"amount":-1.134},{"first":98,"second":120,"amount":-1.26},{"first":98,"second":121,"amount":-1.134},{"first":99,"second":116,"amount":-0.42},{"first":100,"second":98,"amount":0.42},{"first":100,"second":104,"amount":0.42},{"first":100,"second":107,"amount":0.42},{"first":100,"second":108,"amount":0.42},{"first":100,"second":118,"amount":-0.63},{"first":100,"second":119,"amount":-0.63},{"first":100,"second":121,"amount":-0.63},{"first":101,"second":44,"amount":-0.84},{"first":101,"second":45,"amount":0.42},{"first":101,"second":46,"amount":-0.84},{"first":101,"second":116,"amount":-0.42},{"first":101,"second":118,"amount":-0.63},{"first":101,"second":119,"amount":-0.63},{"first":101,"second":120,"amount":-0.84},{"first":101,"second":121,"amount":-0.63},{"first":102,"second":33,"amount":0.84},{"first":102,"second":41,"amount":3.36},{"first":102,"second":44,"amount":-2.1},{"first":102,"second":45,"amount":-0.84},{"first":102,"second":46,"amount":-2.1},{"first":102,"second":47,"amount":-2.1},{"first":102,"second":58,"amount":-0.84},{"first":102,"second":59,"amount":-0.84},{"first":102,"second":63,"amount":2.52},{"first":102,"second":92,"amount":3.36},{"first":102,"second":93,"amount":2.94},{"first":102,"second":97,"amount":-0.63},{"first":102,"second":99,"amount":-0.84},{"first":102,"second":100,"amount":-0.84},{"first":102,"second":101,"amount":-0.84},{"first":102,"second":102,"amount":-1.68},{"first":102,"second":103,"amount":-0.84},{"first":102,"second":104,"amount":-0.42},{"first":102,"second":105,"amount":-0.84},{"first":102,"second":106,"amount":-0.84},{"first":102,"second":107,"amount":-0.42},{"first":102,"second":108,"amount":-0.42},{"first":102,"second":111,"amount":-0.84},{"first":102,"second":113,"amount":-0.84},{"first":102,"second":115,"amount":-0.84},{"first":102,"second":116,"amount":-0.63},{"first":102,"second":117,"amount":-0.42},{"first":102,"second":125,"amount":2.94},{"first":103,"second":33,"amount":-0.42},{"first":103,"second":44,"amount":-0.84},{"first":103,"second":46,"amount":-0.84},{"first":103,"second":63,"amount":-0.42},{"first":103,"second":97,"amount":-0.84},{"first":103,"second":99,"amount":-0.84},{"first":103,"second":100,"amount":-0.84},{"first":103,"second":101,"amount":-0.84},{"first":103,"second":104,"amount":-0.42},{"first":103,"second":107,"amount":-0.42},{"first":103,"second":108,"amount":-0.42},{"first":103,"second":111,"amount":-0.84},{"first":103,"second":113,"amount":-0.84},{"first":104,"second":118,"amount":-1.26},{"first":104,"second":119,"amount":-1.26},{"first":104,"second":121,"amount":-1.26},{"first":105,"second":118,"amount":-0.42},{"first":105,"second":119,"amount":-0.42},{"first":105,"second":121,"amount":-0.42},{"first":106,"second":118,"amount":-0.42},{"first":106,"second":119,"amount":-0.42},{"first":106,"second":121,"amount":-0.42},{"first":107,"second":33,"amount":-0.84},{"first":107,"second":44,"amount":-0.42},{"first":107,"second":45,"amount":-2.1},{"first":107,"second":46,"amount":-0.42},{"first":107,"second":47,"amount":-1.26},{"first":107,"second":58,"amount":-0.42},{"first":107,"second":59,"amount":-0.42},{"first":107,"second":63,"amount":-1.26},{"first":107,"second":92,"amount":-0.42},{"first":107,"second":97,"amount":-1.26},{"first":107,"second":99,"amount":-1.89},{"first":107,"second":100,"amount":-1.89},{"first":107,"second":101,"amount":-1.89},{"first":107,"second":102,"amount":-1.26},{"first":107,"second":103,"amount":-1.26},{"first":107,"second":105,"amount":-0.42},{"first":107,"second":106,"amount":-0.42},{"first":107,"second":109,"amount":-0.42},{"first":107,"second":110,"amount":-0.42},{"first":107,"second":111,"amount":-1.89},{"first":107,"second":112,"amount":-0.42},{"first":107,"second":113,"amount":-1.89},{"first":107,"second":114,"amount":-0.42},{"first":107,"second":115,"amount":-0.84},{"first":107,"second":116,"amount":-1.26},{"first":107,"second":117,"amount":-1.68},{"first":107,"second":118,"amount":-2.52},{"first":107,"second":119,"amount":-2.52},{"first":107,"second":120,"amount":-0.84},{"first":107,"second":121,"amount":-2.52},{"first":107,"second":122,"amount":-0.42},{"first":108,"second":98,"amount":0.42},{"first":108,"second":104,"amount":0.42},{"first":108,"second":107,"amount":0.42},{"first":108,"second":108,"amount":0.42},{"first":108,"second":118,"amount":-0.63},{"first":108,"second":119,"amount":-0.63},{"first":108,"second":121,"amount":-0.63},{"first":109,"second":118,"amount":-1.26},{"first":109,"second":119,"amount":-1.26},{"first":109,"second":121,"amount":-1.26},{"first":110,"second":118,"amount":-1.26},{"first":110,"second":119,"amount":-1.26},{"first":110,"second":121,"amount":-1.26},{"first":111,"second":44,"amount":-1.26},{"first":111,"second":45,"amount":0.84},{"first":111,"second":46,"amount":-1.26},{"first":111,"second":47,"amount":-1.26},{"first":111,"second":58,"amount":-0.42},{"first":111,"second":59,"amount":-0.42},{"first":111,"second":118,"amount":-1.134},{"first":111,"second":119,"amount":-1.134},{"first":111,"second":120,"amount":-1.26},{"first":111,"second":121,"amount":-1.134},{"first":112,"second":44,"amount":-1.26},{"first":112,"second":45,"amount":0.84},{"first":112,"second":46,"amount":-1.26},{"first":112,"second":47,"amount":-1.26},{"first":112,"second":58,"amount":-0.42},{"first":112,"second":59,"amount":-0.42},{"first":112,"second":118,"amount":-1.134},{"first":112,"second":119,"amount":-1.134},{"first":112,"second":120,"amount":-1.26},{"first":112,"second":121,"amount":-1.134},{"first":113,"second":112,"amount":0.84},{"first":113,"second":118,"amount":-0.84},{"first":113,"second":119,"amount":-0.84},{"first":113,"second":121,"amount":-0.84},{"first":114,"second":44,"amount":-2.94},{"first":114,"second":45,"amount":-0.42},{"first":114,"second":46,"amount":-2.94},{"first":114,"second":97,"amount":-0.42},{"first":114,"second":99,"amount":-0.714},{"first":114,"second":100,"amount":-0.714},{"first":114,"second":101,"amount":-0.714},{"first":114,"second":103,"amount":-0.42},{"first":114,"second":104,"amount":-0.294},{"first":114,"second":107,"amount":-0.294},{"first":114,"second":108,"amount":-0.294},{"first":114,"second":109,"amount":-0.084},{"first":114,"second":110,"amount":-0.084},{"first":114,"second":111,"amount":-0.714},{"first":114,"second":112,"amount":-0.084},{"first":114,"second":113,"amount":-0.714},{"first":114,"second":114,"amount":-0.084},{"first":115,"second":102,"amount":-0.21},{"first":115,"second":116,"amount":-0.42},{"first":115,"second":118,"amount":-0.84},{"first":115,"second":119,"amount":-0.84},{"first":115,"second":121,"amount":-0.84},{"first":116,"second":47,"amount":-0.84},{"first":116,"second":99,"amount":-0.63},{"first":116,"second":100,"amount":-0.63},{"first":116,"second":101,"amount":-0.63},{"first":116,"second":109,"amount":-0.42},{"first":116,"second":110,"amount":-0.42},{"first":116,"second":111,"amount":-0.63},{"first":116,"second":112,"amount":-0.42},{"first":116,"second":113,"amount":-0.63},{"first":116,"second":114,"amount":-0.42},{"first":118,"second":44,"amount":-3.36},{"first":118,"second":45,"amount":-0.84},{"first":118,"second":46,"amount":-3.36},{"first":118,"second":47,"amount":-3.78},{"first":118,"second":97,"amount":-1.26},{"first":118,"second":98,"amount":-0.42},{"first":118,"second":99,"amount":-1.344},{"first":118,"second":100,"amount":-1.344},{"first":118,"second":101,"amount":-1.344},{"first":118,"second":102,"amount":-0.42},{"first":118,"second":103,"amount":-1.26},{"first":118,"second":104,"amount":-1.26},{"first":118,"second":105,"amount":-0.84},{"first":118,"second":107,"amount":-1.26},{"first":118,"second":108,"amount":-1.26},{"first":118,"second":109,"amount":-0.84},{"first":118,"second":110,"amount":-0.84},{"first":118,"second":111,"amount":-1.344},{"first":118,"second":112,"amount":-0.84},{"first":118,"second":113,"amount":-1.344},{"first":118,"second":114,"amount":-0.84},{"first":118,"second":115,"amount":-1.26},{"first":118,"second":118,"amount":-1.68},{"first":118,"second":119,"amount":-1.68},{"first":118,"second":120,"amount":-1.26},{"first":118,"second":121,"amount":-1.68},{"first":118,"second":122,"amount":-0.84},{"first":119,"second":44,"amount":-3.36},{"first":119,"second":45,"amount":-0.84},{"first":119,"second":46,"amount":-3.36},{"first":119,"second":47,"amount":-3.78},{"first":119,"second":97,"amount":-1.26},{"first":119,"second":98,"amount":-0.42},{"first":119,"second":99,"amount":-1.344},{"first":119,"second":100,"amount":-1.344},{"first":119,"second":101,"amount":-1.344},{"first":119,"second":102,"amount":-0.42},{"first":119,"second":103,"amount":-1.26},{"first":119,"second":104,"amount":-1.26},{"first":119,"second":105,"amount":-0.84},{"first":119,"second":107,"amount":-1.26},{"first":119,"second":108,"amount":-1.26},{"first":119,"second":109,"amount":-0.84},{"first":119,"second":110,"amount":-0.84},{"first":119,"second":111,"amount":-1.344},{"first":119,"second":112,"amount":-0.84},{"first":119,"second":113,"amount":-1.344},{"first":119,"second":114,"amount":-0.84},{"first":119,"second":115,"amount":-1.26},{"first":119,"second":118,"amount":-1.68},{"first":119,"second":119,"amount":-1.68},{"first":119,"second":120,"amount":-1.26},{"first":119,"second":121,"amount":-1.68},{"first":119,"second":122,"amount":-0.84},{"first":120,"second":45,"amount":-0.84},{"first":120,"second":97,"amount":-0.42},{"first":120,"second":99,"amount":-1.26},{"first":120,"second":100,"amount":-1.26},{"first":120,"second":101,"amount":-1.26},{"first":120,"second":111,"amount":-1.26},{"first":120,"second":113,"amount":-1.26},{"first":120,"second":118,"amount":-1.26},{"first":120,"second":119,"amount":-1.26},{"first":120,"second":121,"amount":-1.26},{"first":121,"second":44,"amount":-3.36},{"first":121,"second":45,"amount":-0.84},{"first":121,"second":46,"amount":-3.36},{"first":121,"second":47,"amount":-3.78},{"first":121,"second":97,"amount":-1.26},{"first":121,"second":98,"amount":-0.42},{"first":121,"second":99,"amount":-1.344},{"first":121,"second":100,"amount":-1.344},{"first":121,"second":101,"amount":-1.344},{"first":121,"second":102,"amount":-0.42},{"first":121,"second":103,"amount":-1.26},{"first":121,"second":104,"amount":-1.26},{"first":121,"second":105,"amount":-0.84},{"first":121,"second":107,"amount":-1.26},{"first":121,"second":108,"amount":-1.26},{"first":121,"second":109,"amount":-0.84},{"first":121,"second":110,"amount":-0.84},{"first":121,"second":111,"amount":-1.344},{"first":121,"second":112,"amount":-0.84},{"first":121,"second":113,"amount":-1.344},{"first":121,"second":114,"amount":-0.84},{"first":121,"second":115,"amount":-1.26},{"first":121,"second":118,"amount":-1.68},{"first":121,"second":119,"amount":-1.68},{"first":121,"second":120,"amount":-1.26},{"first":121,"second":121,"amount":-1.68},{"first":121,"second":122,"amount":-0.84},{"first":122,"second":103,"amount":-0.42},{"first":122,"second":118,"amount":-0.42},{"first":122,"second":119,"amount":-0.42},{"first":122,"second":121,"amount":-0.42}]}'
          ),
          Ft = n.p + "0bbe7191e25aa7960588ce2dfdedf36c.png";
        new (class {
          constructor() {
            document.documentElement.classList.remove("no-js"),
              (this.scroll = { ease: 0.05, current: 0, target: 0, last: 0 }),
              (this.onCheckDebounce = D()(this.onCheck, 200)),
              this.createRenderer(),
              this.createCamera(),
              this.createScene(),
              this.onResize(),
              this.createGeometry(),
              this.createMedias(),
              this.createBackground(),
              this.update(),
              this.addEventListeners(),
              this.createPreloader();
          }
          createPreloader() {
            Array.from(this.mediasImages).forEach(({ image: t }) => {
              const s = new Image();
              (this.loaded = 0),
                (s.src = t),
                (s.onload = (t) => {
                  (this.loaded += 1),
                    this.loaded === this.mediasImages.length &&
                      (document.documentElement.classList.remove("loading"),
                      document.documentElement.classList.add("loaded"));
                });
            });
          }
          createRenderer() {
            (this.renderer = new x()),
              (this.gl = this.renderer.gl),
              this.gl.clearColor(
                0,0.04313725490196078431372549019608,0.22352941176470588235294117647059,1
              ),
              document.body.appendChild(this.gl.canvas);
          }
          createCamera() {
            (this.camera = new C(this.gl)),
              (this.camera.fov = 45),
              (this.camera.position.z = 20);
          }
          createScene() {
            this.scene = new S();
          }
          createGeometry() {
            this.planeGeometry = new U(this.gl, {
              heightSegments: 50,
              widthSegments: 100,
            });
          }
          createMedias() {
            (this.mediasImages = [
              { image: X, text: "Virtual Reality Class" },
              { image: G, text: "Space Class" },
              { image: k, text: "Art Museum" },
              { image: V, text: "Farming" },
              { image: q, text: "Homeroom" },
              { image: W, text: "Cooking" },
              { image: Y, text: "Poetry Class" },
              { image: $, text: "Fireworks Workshop" },
              { image: H, text: "Marine Biology" },
              { image: Z, text: "Artistic Expressions" },
              { image: Q, text: "Chemistry" },
              { image: K, text: "History of Houses" },
            ]),
              (this.medias = this.mediasImages.map(
                ({ image: t, text: s }, n) =>
                  new (class {
                    constructor({
                      geometry: t,
                      gl: s,
                      image: n,
                      index: o,
                      length: e,
                      renderer: i,
                      scene: r,
                      screen: a,
                      text: d,
                      viewport: c,
                    }) {
                      (this.extra = 0),
                        (this.geometry = t),
                        (this.gl = s),
                        (this.image = n),
                        (this.index = o),
                        (this.length = e),
                        (this.renderer = i),
                        (this.scene = r),
                        (this.screen = a),
                        (this.text = d),
                        (this.viewport = c),
                        this.createShader(),
                        this.createMesh(),
                        this.createTitle(),
                        this.onResize();
                    }
                    createShader() {
                      const t = new nt(this.gl, { generateMipmaps: !1 });
                      this.program = new it(this.gl, {
                        depthTest: !1,
                        depthWrite: !1,
                        fragment:
                          "precision highp float;\n#define GLSLIFY 1\n\nuniform vec2 uImageSizes;\nuniform vec2 uPlaneSizes;\nuniform sampler2D tMap;\n\nvarying vec2 vUv;\n\nvoid main() {\n  vec2 ratio = vec2(\n    min((uPlaneSizes.x / uPlaneSizes.y) / (uImageSizes.x / uImageSizes.y), 1.0),\n    min((uPlaneSizes.y / uPlaneSizes.x) / (uImageSizes.y / uImageSizes.x), 1.0)\n  );\n\n  vec2 uv = vec2(\n    vUv.x * ratio.x + (1.0 - ratio.x) * 0.5,\n    vUv.y * ratio.y + (1.0 - ratio.y) * 0.5\n  );\n\n  gl_FragColor.rgb = texture2D(tMap, uv).rgb;\n  gl_FragColor.a = 1.0;\n}\n",
                        vertex:
                          "precision highp float;\n#define GLSLIFY 1\n\nattribute vec3 position;\nattribute vec2 uv;\n\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\n\nuniform float uTime;\nuniform float uSpeed;\n\nvarying vec2 vUv;\n\nvoid main() {\n  vUv = uv;\n\n  vec3 p = position;\n\n  p.z = (sin(p.x * 4.0 + uTime) * 1.5 + cos(p.y * 2.0 + uTime) * 1.5) * (0.1 + uSpeed * 0.5);\n\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);\n}\n",
                        uniforms: {
                          tMap: { value: t },
                          uPlaneSizes: { value: [0, 0] },
                          uImageSizes: { value: [0, 0] },
                          uViewportSizes: {
                            value: [this.viewport.width, this.viewport.height],
                          },
                          uSpeed: { value: 0 },
                          uTime: { value: 100 * Math.random() },
                        },
                        transparent: !0,
                      });
                      const s = new Image();
                      (s.src = this.image),
                        (s.onload = (n) => {
                          (t.image = s),
                            (this.program.uniforms.uImageSizes.value = [
                              s.naturalWidth,
                              s.naturalHeight,
                            ]);
                        });
                    }
                    createMesh() {
                      (this.plane = new ht(this.gl, {
                        geometry: this.geometry,
                        program: this.program,
                      })),
                        this.plane.setParent(this.scene);
                    }
                    createTitle() {
                      (this.number = new (class {
                        constructor({ gl: t, plane: s, renderer: n, text: o }) {
                          gt()(this),
                            (this.gl = t),
                            (this.plane = s),
                            (this.renderer = n),
                            (this.text = o + 1),
                            this.createShader(),
                            this.createMesh();
                        }
                        createShader() {
                          const t = new nt(this.gl, { generateMipmaps: !1 }),
                            s = new Image();
                          (s.src = St), (s.onload = (n) => (t.image = s));
                          const n = `#version 300 es\n\n      #define attribute in\n      #define varying out\n\n      ${Et}\n    `,
                            o = `#version 300 es\n\n      precision highp float;\n\n      #define varying in\n      #define texture2D texture\n      #define gl_FragColor FragColor\n\n      out vec4 FragColor;\n\n      ${Mt}\n    `;
                          let e = `\n      #extension GL_OES_standard_derivatives : enable\n\n      precision highp float;\n\n      ${Mt}\n    `,
                            i = `${Et}`;
                          this.renderer.isWebgl2 && ((e = o), (i = n)),
                            (this.program = new it(this.gl, {
                              cullFace: null,
                              depthTest: !1,
                              depthWrite: !1,
                              transparent: !0,
                              fragment: e,
                              vertex: i,
                              uniforms: {
                                uColor: { value: new vt("#E0FF77") },
                                tMap: { value: t },
                              },
                            }));
                        }
                        createMesh() {
                          const t = new bt({
                              align: "center",
                              font: At,
                              size: 0.025,
                              text: `${
                                this.text < 10 ? `0${this.text}` : this.text
                              }`,
                              wordSpacing: 0,
                            }),
                            s = new O(this.gl, {
                              position: { size: 3, data: t.buffers.position },
                              uv: { size: 2, data: t.buffers.uv },
                              id: { size: 1, data: t.buffers.id },
                              index: { data: t.buffers.index },
                            });
                          s.computeBoundingBox(),
                            (this.mesh = new ht(this.gl, {
                              geometry: s,
                              program: this.program,
                            })),
                            (this.mesh.position.y =
                              0.5 * -this.plane.scale.y - 0.03),
                            this.mesh.setParent(this.plane);
                        }
                      })({
                        gl: this.gl,
                        plane: this.plane,
                        renderer: this.renderer,
                        text: this.index % (this.length / 2),
                      })),
                        (this.title = new (class {
                          constructor({
                            gl: t,
                            plane: s,
                            renderer: n,
                            text: o,
                          }) {
                            gt()(this),
                              (this.gl = t),
                              (this.plane = s),
                              (this.renderer = n),
                              (this.text = o),
                              this.createShader(),
                              this.createMesh();
                          }
                          createShader() {
                            const t = new nt(this.gl, { generateMipmaps: !1 }),
                              s = new Image();
                            (s.src = Ft), (s.onload = (n) => (t.image = s));
                            const n = `#version 300 es\n\n      #define attribute in\n      #define varying out\n\n      ${Et}\n    `,
                              o = `#version 300 es\n\n      precision highp float;\n\n      #define varying in\n      #define texture2D texture\n      #define gl_FragColor FragColor\n\n      out vec4 FragColor;\n\n      ${Mt}\n    `;
                            let e = `\n      #extension GL_OES_standard_derivatives : enable\n\n      precision highp float;\n\n      ${Mt}\n    `,
                              i = `${Et}`;
                            this.renderer.isWebgl2 && ((e = o), (i = n)),
                              (this.program = new it(this.gl, {
                                cullFace: null,
                                depthTest: !1,
                                depthWrite: !1,
                                transparent: !0,
                                fragment: e,
                                vertex: i,
                                uniforms: {
                                  uColor: { value: new vt("#E0FF77") },
                                  tMap: { value: t },
                                },
                              }));
                          }
                          createMesh() {
                            const t = new bt({
                                align: "center",
                                font: Tt,
                                letterSpacing: -0.05,
                                size: 0.08,
                                text: this.text,
                                wordSpacing: 0,
                              }),
                              s = new O(this.gl, {
                                position: { size: 3, data: t.buffers.position },
                                uv: { size: 2, data: t.buffers.uv },
                                id: { size: 1, data: t.buffers.id },
                                index: { data: t.buffers.index },
                              });
                            s.computeBoundingBox(),
                              (this.mesh = new ht(this.gl, {
                                geometry: s,
                                program: this.program,
                              })),
                              (this.mesh.position.y =
                                0.5 * -this.plane.scale.y - 0.085),
                              this.mesh.setParent(this.plane);
                          }
                        })({
                          gl: this.gl,
                          plane: this.plane,
                          renderer: this.renderer,
                          text: this.text,
                        }));
                    }
                    update(t, s) {
                      (this.plane.position.x = this.x - t.current - this.extra),
                        (this.plane.position.y =
                          75 *
                            Math.cos(
                              (this.plane.position.x / this.widthTotal) *
                                Math.PI
                            ) -
                          74.5),
                        (this.plane.rotation.z = (function (
                          t,
                          s,
                          n,
                          o,
                          e,
                          i = !1
                        ) {
                          const r = ((t - s) / (n - s)) * (-Math.PI - o) + o;
                          return i ? Math.round(r) : r;
                        })(
                          this.plane.position.x,
                          -this.widthTotal,
                          this.widthTotal,
                          Math.PI
                        )),
                        (this.speed = t.current - t.last),
                        (this.program.uniforms.uTime.value += 0.04),
                        (this.program.uniforms.uSpeed.value = this.speed);
                      const n = this.plane.scale.x / 2,
                        o = this.viewport.width;
                      (this.isBefore = this.plane.position.x + n < -o),
                        (this.isAfter = this.plane.position.x - n > o),
                        "right" === s &&
                          this.isBefore &&
                          ((this.extra -= this.widthTotal),
                          (this.isBefore = !1),
                          (this.isAfter = !1)),
                        "left" === s &&
                          this.isAfter &&
                          ((this.extra += this.widthTotal),
                          (this.isBefore = !1),
                          (this.isAfter = !1));
                    }
                    onResize({ screen: t, viewport: s } = {}) {
                      t && (this.screen = t),
                        s &&
                          ((this.viewport = s),
                          (this.plane.program.uniforms.uViewportSizes.value = [
                            this.viewport.width,
                            this.viewport.height,
                          ])),
                        (this.scale = this.screen.height / 1500),
                        (this.plane.scale.y =
                          (this.viewport.height * (900 * this.scale)) /
                          this.screen.height),
                        (this.plane.scale.x =
                          (this.viewport.width * (700 * this.scale)) /
                          this.screen.width),
                        (this.plane.program.uniforms.uPlaneSizes.value = [
                          this.plane.scale.x,
                          this.plane.scale.y,
                        ]),
                        (this.padding = 2),
                        (this.width = this.plane.scale.x + this.padding),
                        (this.widthTotal = this.width * this.length),
                        (this.x = this.width * this.index);
                    }
                  })({
                    geometry: this.planeGeometry,
                    gl: this.gl,
                    image: t,
                    index: n,
                    length: this.mediasImages.length,
                    renderer: this.renderer,
                    scene: this.scene,
                    screen: this.screen,
                    text: s,
                    viewport: this.viewport,
                  })
              ));
          }
          createBackground() {
            this.background = new (class {
              constructor({ gl: t, scene: s, viewport: n }) {
                (this.gl = t), (this.scene = s), (this.viewport = n);
                const o = new U(this.gl),
                  e = new it(this.gl, {
                    vertex:
                      "#define GLSLIFY 1\nattribute vec3 position;\nattribute vec3 normal;\n\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat3 normalMatrix;\n\nvoid main() {\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n}\n\n",
                    fragment:
                      "precision highp float;\n#define GLSLIFY 1\n\nuniform float uAlpha;\nuniform vec3 uColor;\n\nvoid main() {\n  gl_FragColor.rgb = uColor;\n  gl_FragColor.a = 1.0;\n}\n",
                    uniforms: { uColor: { value: new vt("#132362") } },
                    transparent: !0,
                  });
                this.meshes = [];
                for (let t = 0; t < 50; t++) {
                  let t = new ht(this.gl, { geometry: o, program: e });
                  const s = j(0.75, 1);
                  (t.scale.x = 1.6 * s),
                    (t.scale.y = 0.9 * s),
                    (t.speed = j(0.75, 1)),
                    (t.xExtra = 0),
                    (t.x = t.position.x = j(
                      0.5 * -this.viewport.width,
                      0.5 * this.viewport.width
                    )),
                    (t.y = t.position.y = j(
                      0.5 * -this.viewport.height,
                      0.5 * this.viewport.height
                    )),
                    this.meshes.push(t),
                    this.scene.addChild(t);
                }
              }
              update(t, s) {
                this.meshes.forEach((n) => {
                  n.position.x = n.x - t.current * n.speed - n.xExtra;
                  const o = 0.5 * this.viewport.width,
                    e = this.viewport.width + n.scale.x;
                  (n.isBefore = n.position.x < -o),
                    (n.isAfter = n.position.x > o),
                    "right" === s &&
                      n.isBefore &&
                      ((n.xExtra -= e), (n.isBefore = !1), (n.isAfter = !1)),
                    "left" === s &&
                      n.isAfter &&
                      ((n.xExtra += e), (n.isBefore = !1), (n.isAfter = !1)),
                    (n.position.y += 0.05 * n.speed),
                    n.position.y > 0.5 * this.viewport.height + n.scale.y &&
                      (n.position.y -= this.viewport.height + n.scale.y);
                });
              }
            })({ gl: this.gl, scene: this.scene, viewport: this.viewport });
          }
          onTouchDown(t) {
            (this.isDown = !0),
              (this.scroll.position = this.scroll.current),
              (this.start = t.touches ? t.touches[0].clientX : t.clientX);
          }
          onTouchMove(t) {
            if (!this.isDown) return;
            const s = t.touches ? t.touches[0].clientX : t.clientX,
              n = 0.01 * (this.start - s);
            this.scroll.target = this.scroll.position + n;
          }
          onTouchUp(t) {
            (this.isDown = !1), this.onCheck();
          }
          onWheel(t) {
            const s = B()(t).pixelY;
            (this.scroll.target += 0.005 * s), this.onCheckDebounce();
          }
          onCheck() {
            const { width: t } = this.medias[0],
              s = t * Math.round(Math.abs(this.scroll.target) / t);
            this.scroll.target < 0
              ? (this.scroll.target = -s)
              : (this.scroll.target = s);
          }
          onResize() {
            (this.screen = {
              height: window.innerHeight,
              width: window.innerWidth,
            }),
              this.renderer.setSize(this.screen.width, this.screen.height),
              this.camera.perspective({
                aspect: this.gl.canvas.width / this.gl.canvas.height,
              });
            const t = this.camera.fov * (Math.PI / 180),
              s = 2 * Math.tan(t / 2) * this.camera.position.z,
              n = s * this.camera.aspect;
            (this.viewport = { height: s, width: n }),
              this.medias &&
                this.medias.forEach((t) =>
                  t.onResize({ screen: this.screen, viewport: this.viewport })
                );
          }
          update() {
            var t;
            (this.scroll.current =
              (t = this.scroll.current) +
              (this.scroll.target - t) * this.scroll.ease),
              this.scroll.current > this.scroll.last
                ? (this.direction = "right")
                : (this.direction = "left"),
              this.medias &&
                this.medias.forEach((t) =>
                  t.update(this.scroll, this.direction)
                ),
              this.background &&
                this.background.update(this.scroll, this.direction),
              this.renderer.render({ scene: this.scene, camera: this.camera }),
              (this.scroll.last = this.scroll.current),
              window.requestAnimationFrame(this.update.bind(this));
          }
          addEventListeners() {
            window.addEventListener("resize", this.onResize.bind(this)),
              window.addEventListener("mousewheel", this.onWheel.bind(this)),
              window.addEventListener("wheel", this.onWheel.bind(this)),
              window.addEventListener("mousedown", this.onTouchDown.bind(this)),
              window.addEventListener("mousemove", this.onTouchMove.bind(this)),
              window.addEventListener("mouseup", this.onTouchUp.bind(this)),
              window.addEventListener(
                "touchstart",
                this.onTouchDown.bind(this)
              ),
              window.addEventListener("touchmove", this.onTouchMove.bind(this)),
              window.addEventListener("touchend", this.onTouchUp.bind(this));
          }
        })();
      },
      663: (t) => {
        "use strict";
        t.exports = (t, { include: s, exclude: n } = {}) => {
          const o = (t) => {
            const o = (s) => ("string" == typeof s ? t === s : s.test(t));
            return s ? s.some(o) : !n || !n.some(o);
          };
          for (const [s, n] of ((t) => {
            const s = new Set();
            do {
              for (const n of Reflect.ownKeys(t)) s.add([t, n]);
            } while ((t = Reflect.getPrototypeOf(t)) && t !== Object.prototype);
            return s;
          })(t.constructor.prototype)) {
            if ("constructor" === n || !o(n)) continue;
            const e = Reflect.getOwnPropertyDescriptor(s, n);
            e && "function" == typeof e.value && (t[n] = t[n].bind(t));
          }
          return t;
        };
      },
      773: (t, s, n) => {
        var o = n(362).Symbol;
        t.exports = o;
      },
      185: (t, s, n) => {
        var o = n(773),
          e = n(888),
          i = n(299),
          r = o ? o.toStringTag : void 0;
        t.exports = function (t) {
          return null == t
            ? void 0 === t
              ? "[object Undefined]"
              : "[object Null]"
            : r && r in Object(t)
            ? e(t)
            : i(t);
        };
      },
      432: (t, s, n) => {
        var o = n(751),
          e = /^\s+/;
        t.exports = function (t) {
          return t ? t.slice(0, o(t) + 1).replace(e, "") : t;
        };
      },
      556: (t, s, n) => {
        var o = "object" == typeof n.g && n.g && n.g.Object === Object && n.g;
        t.exports = o;
      },
      888: (t, s, n) => {
        var o = n(773),
          e = Object.prototype,
          i = e.hasOwnProperty,
          r = e.toString,
          a = o ? o.toStringTag : void 0;
        t.exports = function (t) {
          var s = i.call(t, a),
            n = t[a];
          try {
            t[a] = void 0;
            var o = !0;
          } catch (t) {}
          var e = r.call(t);
          return o && (s ? (t[a] = n) : delete t[a]), e;
        };
      },
      299: (t) => {
        var s = Object.prototype.toString;
        t.exports = function (t) {
          return s.call(t);
        };
      },
      362: (t, s, n) => {
        var o = n(556),
          e = "object" == typeof self && self && self.Object === Object && self,
          i = o || e || Function("return this")();
        t.exports = i;
      },
      751: (t) => {
        var s = /\s/;
        t.exports = function (t) {
          for (var n = t.length; n-- && s.test(t.charAt(n)); );
          return n;
        };
      },
      569: (t, s, n) => {
        var o = n(71),
          e = n(989),
          i = n(705),
          r = Math.max,
          a = Math.min;
        t.exports = function (t, s, n) {
          var d,
            c,
            f,
            u,
            m,
            h,
            l = 0,
            g = !1,
            x = !1,
            p = !0;
          if ("function" != typeof t)
            throw new TypeError("Expected a function");
          function y(s) {
            var n = d,
              o = c;
            return (d = c = void 0), (l = s), (u = t.apply(o, n));
          }
          function w(t) {
            return (l = t), (m = setTimeout(b, s)), g ? y(t) : u;
          }
          function v(t) {
            var n = t - h;
            return void 0 === h || n >= s || n < 0 || (x && t - l >= f);
          }
          function b() {
            var t = e();
            if (v(t)) return M(t);
            m = setTimeout(
              b,
              (function (t) {
                var n = s - (t - h);
                return x ? a(n, f - (t - l)) : n;
              })(t)
            );
          }
          function M(t) {
            return (m = void 0), p && d ? y(t) : ((d = c = void 0), u);
          }
          function E() {
            var t = e(),
              n = v(t);
            if (((d = arguments), (c = this), (h = t), n)) {
              if (void 0 === m) return w(h);
              if (x) return clearTimeout(m), (m = setTimeout(b, s)), y(h);
            }
            return void 0 === m && (m = setTimeout(b, s)), u;
          }
          return (
            (s = i(s) || 0),
            o(n) &&
              ((g = !!n.leading),
              (f = (x = "maxWait" in n) ? r(i(n.maxWait) || 0, s) : f),
              (p = "trailing" in n ? !!n.trailing : p)),
            (E.cancel = function () {
              void 0 !== m && clearTimeout(m),
                (l = 0),
                (d = h = c = m = void 0);
            }),
            (E.flush = function () {
              return void 0 === m ? u : M(e());
            }),
            E
          );
        };
      },
      71: (t) => {
        t.exports = function (t) {
          var s = typeof t;
          return null != t && ("object" == s || "function" == s);
        };
      },
      939: (t) => {
        t.exports = function (t) {
          return null != t && "object" == typeof t;
        };
      },
      655: (t, s, n) => {
        var o = n(185),
          e = n(939);
        t.exports = function (t) {
          return "symbol" == typeof t || (e(t) && "[object Symbol]" == o(t));
        };
      },
      989: (t, s, n) => {
        var o = n(362);
        t.exports = function () {
          return o.Date.now();
        };
      },
      705: (t, s, n) => {
        var o = n(432),
          e = n(71),
          i = n(655),
          r = /^[-+]0x[0-9a-f]+$/i,
          a = /^0b[01]+$/i,
          d = /^0o[0-7]+$/i,
          c = parseInt;
        t.exports = function (t) {
          if ("number" == typeof t) return t;
          if (i(t)) return NaN;
          if (e(t)) {
            var s = "function" == typeof t.valueOf ? t.valueOf() : t;
            t = e(s) ? s + "" : s;
          }
          if ("string" != typeof t) return 0 === t ? t : +t;
          t = o(t);
          var n = a.test(t);
          return n || d.test(t)
            ? c(t.slice(2), n ? 2 : 8)
            : r.test(t)
            ? NaN
            : +t;
        };
      },
      320: (t, s, n) => {
        t.exports = n(45);
      },
      230: (t) => {
        "use strict";
        var s = !(
            "undefined" == typeof window ||
            !window.document ||
            !window.document.createElement
          ),
          n = {
            canUseDOM: s,
            canUseWorkers: "undefined" != typeof Worker,
            canUseEventListeners:
              s && !(!window.addEventListener && !window.attachEvent),
            canUseViewport: s && !!window.screen,
            isInWorker: !s,
          };
        t.exports = n;
      },
      907: (t) => {
        var s,
          n,
          o,
          e,
          i,
          r,
          a,
          d,
          c,
          f,
          u,
          m,
          h,
          l,
          g,
          x = !1;
        function p() {
          if (!x) {
            x = !0;
            var t = navigator.userAgent,
              p = /(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(
                t
              ),
              y = /(Mac OS X)|(Windows)|(Linux)/.exec(t);
            if (
              ((m = /\b(iPhone|iP[ao]d)/.exec(t)),
              (h = /\b(iP[ao]d)/.exec(t)),
              (f = /Android/i.exec(t)),
              (l = /FBAN\/\w+;/i.exec(t)),
              (g = /Mobile/i.exec(t)),
              (u = !!/Win64/.exec(t)),
              p)
            ) {
              (s = p[1] ? parseFloat(p[1]) : p[5] ? parseFloat(p[5]) : NaN) &&
                document &&
                document.documentMode &&
                (s = document.documentMode);
              var w = /(?:Trident\/(\d+.\d+))/.exec(t);
              (r = w ? parseFloat(w[1]) + 4 : s),
                (n = p[2] ? parseFloat(p[2]) : NaN),
                (o = p[3] ? parseFloat(p[3]) : NaN),
                (e = p[4] ? parseFloat(p[4]) : NaN)
                  ? ((p = /(?:Chrome\/(\d+\.\d+))/.exec(t)),
                    (i = p && p[1] ? parseFloat(p[1]) : NaN))
                  : (i = NaN);
            } else s = n = o = i = e = NaN;
            if (y) {
              if (y[1]) {
                var v = /(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(t);
                a = !v || parseFloat(v[1].replace("_", "."));
              } else a = !1;
              (d = !!y[2]), (c = !!y[3]);
            } else a = d = c = !1;
          }
        }
        var y = {
          ie: function () {
            return p() || s;
          },
          ieCompatibilityMode: function () {
            return p() || r > s;
          },
          ie64: function () {
            return y.ie() && u;
          },
          firefox: function () {
            return p() || n;
          },
          opera: function () {
            return p() || o;
          },
          webkit: function () {
            return p() || e;
          },
          safari: function () {
            return y.webkit();
          },
          chrome: function () {
            return p() || i;
          },
          windows: function () {
            return p() || d;
          },
          osx: function () {
            return p() || a;
          },
          linux: function () {
            return p() || c;
          },
          iphone: function () {
            return p() || m;
          },
          mobile: function () {
            return p() || m || h || f || g;
          },
          nativeApp: function () {
            return p() || l;
          },
          android: function () {
            return p() || f;
          },
          ipad: function () {
            return p() || h;
          },
        };
        t.exports = y;
      },
      480: (t, s, n) => {
        "use strict";
        var o,
          e = n(230);
        e.canUseDOM &&
          (o =
            document.implementation &&
            document.implementation.hasFeature &&
            !0 !== document.implementation.hasFeature("", "")),
          (t.exports = function (t, s) {
            if (!e.canUseDOM || (s && !("addEventListener" in document)))
              return !1;
            var n = "on" + t,
              i = n in document;
            if (!i) {
              var r = document.createElement("div");
              r.setAttribute(n, "return;"), (i = "function" == typeof r[n]);
            }
            return (
              !i &&
                o &&
                "wheel" === t &&
                (i = document.implementation.hasFeature("Events.wheel", "3.0")),
              i
            );
          });
      },
      45: (t, s, n) => {
        "use strict";
        var o = n(907),
          e = n(480);
        function i(t) {
          var s = 0,
            n = 0,
            o = 0,
            e = 0;
          return (
            "detail" in t && (n = t.detail),
            "wheelDelta" in t && (n = -t.wheelDelta / 120),
            "wheelDeltaY" in t && (n = -t.wheelDeltaY / 120),
            "wheelDeltaX" in t && (s = -t.wheelDeltaX / 120),
            "axis" in t && t.axis === t.HORIZONTAL_AXIS && ((s = n), (n = 0)),
            (o = 10 * s),
            (e = 10 * n),
            "deltaY" in t && (e = t.deltaY),
            "deltaX" in t && (o = t.deltaX),
            (o || e) &&
              t.deltaMode &&
              (1 == t.deltaMode
                ? ((o *= 40), (e *= 40))
                : ((o *= 800), (e *= 800))),
            o && !s && (s = o < 1 ? -1 : 1),
            e && !n && (n = e < 1 ? -1 : 1),
            { spinX: s, spinY: n, pixelX: o, pixelY: e }
          );
        }
        (i.getEventType = function () {
          return o.firefox()
            ? "DOMMouseScroll"
            : e("wheel")
            ? "wheel"
            : "mousewheel";
        }),
          (t.exports = i);
      },
      532: () => {},
    },
    s = {};
  function n(o) {
    if (s[o]) return s[o].exports;
    var e = (s[o] = { exports: {} });
    return t[o](e, e.exports, n), e.exports;
  }
  (n.n = (t) => {
    var s = t && t.__esModule ? () => t.default : () => t;
    return n.d(s, { a: s }), s;
  }),
    (n.d = (t, s) => {
      for (var o in s)
        n.o(s, o) &&
          !n.o(t, o) &&
          Object.defineProperty(t, o, { enumerable: !0, get: s[o] });
    }),
    (n.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (t) {
        if ("object" == typeof window) return window;
      }
    })()),
    (n.o = (t, s) => Object.prototype.hasOwnProperty.call(t, s)),
    (() => {
      var t;
      n.g.importScripts && (t = n.g.location + "");
      var s = n.g.document;
      if (!t && s && (s.currentScript && (t = s.currentScript.src), !t)) {
        var o = s.getElementsByTagName("script");
        o.length && (t = o[o.length - 1].src);
      }
      if (!t)
        throw new Error(
          "Automatic publicPath is not supported in this browser"
        );
      (t = t
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (n.p = t);
    })(),
    n(62),
    n(532);
})();
