var n8 = Object.create
var { getPrototypeOf: o8, defineProperty: j4, getOwnPropertyNames: t8 } = Object
var e8 = Object.prototype.hasOwnProperty
function Y6(Y) {
  return this[Y]
}
var Z6,
  K6,
  g0 = (Y, Z, K) => {
    var J = Y != null && typeof Y === 'object'
    if (J) {
      var Q = Z ? (Z6 ??= new WeakMap()) : (K6 ??= new WeakMap()),
        V = Q.get(Y)
      if (V) return V
    }
    K = Y != null ? n8(o8(Y)) : {}
    let z = Z || !Y || !Y.__esModule ? j4(K, 'default', { value: Y, enumerable: !0 }) : K
    for (let F of t8(Y)) if (!e8.call(z, F)) j4(z, F, { get: Y6.bind(Y, F), enumerable: !0 })
    if (J) Q.set(Y, z)
    return z
  }
var J6 = (Y, Z) => () => (Z || Y((Z = { exports: {} }).exports, Z), Z.exports)
var X6 = Y => Y
function Q6(Y, Z) {
  this[Y] = X6.bind(null, Z)
}
var V0 = (Y, Z) => {
  for (var K in Z) j4(Y, K, { get: Z[K], enumerable: !0, configurable: !0, set: Q6.bind(Z, K) })
}
var v0 = J6((r2, NZ) => {
  NZ.exports = {
    trueFunc: function () {
      return !0
    },
    falseFunc: function () {
      return !1
    },
  }
})
var S4 = {}
V0(S4, {
  xml: () => l6,
  text: () => C0,
  root: () => p6,
  parseHTML: () => s6,
  merge: () => QZ,
  html: () => r6,
  extract: () => a6,
  contains: () => _1,
})
var P0 = {}
V0(P0, {
  uniqueSort: () => j0,
  textContent: () => U0,
  testElement: () => G6,
  replaceElement: () => y6,
  removeSubsets: () => S6,
  removeElement: () => F0,
  prevElementSibling: () => E1,
  prependChild: () => g6,
  prepend: () => x6,
  nextElementSibling: () => $1,
  isText: () => r,
  isTag: () => f,
  isDocument: () => n,
  isComment: () => x0,
  isCDATA: () => T0,
  innerText: () => Y1,
  hasChildren: () => C,
  hasAttrib: () => b6,
  getText: () => G1,
  getSiblings: () => u4,
  getParent: () => tY,
  getOuterHTML: () => oY,
  getName: () => f6,
  getInnerHTML: () => v6,
  getFeed: () => k6,
  getElementsByTagType: () => I6,
  getElementsByTagName: () => h0,
  getElementsByClassName: () => u6,
  getElements: () => $6,
  getElementById: () => E6,
  getChildren: () => i0,
  getAttributeValue: () => O6,
  findOneChild: () => h6,
  findOne: () => I1,
  findAll: () => C6,
  find: () => u1,
  filter: () => c0,
  existsOne: () => eY,
  compareDocumentPosition: () => ZZ,
  appendChild: () => M6,
  append: () => N6,
  DocumentPosition: () => o,
})
var p = {}
V0(p, {
  isTag: () => R4,
  Text: () => v4,
  Tag: () => M4,
  Style: () => y4,
  Script: () => f4,
  Root: () => P4,
  ElementType: () => x,
  Doctype: () => g4,
  Directive: () => O4,
  Comment: () => b4,
  CDATA: () => N4,
})
var x
;(function (Y) {
  ;((Y.Root = 'root'),
    (Y.Text = 'text'),
    (Y.Directive = 'directive'),
    (Y.Comment = 'comment'),
    (Y.Script = 'script'),
    (Y.Style = 'style'),
    (Y.Tag = 'tag'),
    (Y.CDATA = 'cdata'),
    (Y.Doctype = 'doctype'))
})(x || (x = {}))
function R4(Y) {
  return Y.type === x.Tag || Y.type === x.Script || Y.type === x.Style
}
var {
  Root: P4,
  Text: v4,
  Directive: O4,
  Comment: b4,
  Script: f4,
  Style: y4,
  Tag: M4,
  CDATA: N4,
  Doctype: g4,
} = x
class h4 {
  constructor() {
    ;((this.parent = null),
      (this.prev = null),
      (this.next = null),
      (this.startIndex = null),
      (this.endIndex = null))
  }
  get parentNode() {
    return this.parent
  }
  set parentNode(Y) {
    this.parent = Y
  }
  get previousSibling() {
    return this.prev
  }
  set previousSibling(Y) {
    this.prev = Y
  }
  get nextSibling() {
    return this.next
  }
  set nextSibling(Y) {
    this.next = Y
  }
  cloneNode(Y = !1) {
    return m0(this, Y)
  }
}
class N1 extends h4 {
  constructor(Y) {
    super()
    this.data = Y
  }
  get nodeValue() {
    return this.data
  }
  set nodeValue(Y) {
    this.data = Y
  }
}
class W0 extends N1 {
  constructor() {
    super(...arguments)
    this.type = x.Text
  }
  get nodeType() {
    return 3
  }
}
class k0 extends N1 {
  constructor() {
    super(...arguments)
    this.type = x.Comment
  }
  get nodeType() {
    return 8
  }
}
class _0 extends N1 {
  constructor(Y, Z) {
    super(Z)
    ;((this.name = Y), (this.type = x.Directive))
  }
  get nodeType() {
    return 1
  }
}
class g1 extends h4 {
  constructor(Y) {
    super()
    this.children = Y
  }
  get firstChild() {
    var Y
    return (Y = this.children[0]) !== null && Y !== void 0 ? Y : null
  }
  get lastChild() {
    return this.children.length > 0 ? this.children[this.children.length - 1] : null
  }
  get childNodes() {
    return this.children
  }
  set childNodes(Y) {
    this.children = Y
  }
}
class x1 extends g1 {
  constructor() {
    super(...arguments)
    this.type = x.CDATA
  }
  get nodeType() {
    return 4
  }
}
class a extends g1 {
  constructor() {
    super(...arguments)
    this.type = x.Root
  }
  get nodeType() {
    return 9
  }
}
class A0 extends g1 {
  constructor(Y, Z, K = [], J = Y === 'script' ? x.Script : Y === 'style' ? x.Style : x.Tag) {
    super(K)
    ;((this.name = Y), (this.attribs = Z), (this.type = J))
  }
  get nodeType() {
    return 1
  }
  get tagName() {
    return this.name
  }
  set tagName(Y) {
    this.name = Y
  }
  get attributes() {
    return Object.keys(this.attribs).map(Y => {
      var Z, K
      return {
        name: Y,
        value: this.attribs[Y],
        namespace: (Z = this['x-attribsNamespace']) === null || Z === void 0 ? void 0 : Z[Y],
        prefix: (K = this['x-attribsPrefix']) === null || K === void 0 ? void 0 : K[Y],
      }
    })
  }
}
function f(Y) {
  return R4(Y)
}
function T0(Y) {
  return Y.type === x.CDATA
}
function r(Y) {
  return Y.type === x.Text
}
function x0(Y) {
  return Y.type === x.Comment
}
function h1(Y) {
  return Y.type === x.Directive
}
function n(Y) {
  return Y.type === x.Root
}
function C(Y) {
  return Object.prototype.hasOwnProperty.call(Y, 'children')
}
function m0(Y, Z = !1) {
  let K
  if (r(Y)) K = new W0(Y.data)
  else if (x0(Y)) K = new k0(Y.data)
  else if (f(Y)) {
    let J = Z ? x4(Y.children) : [],
      Q = new A0(Y.name, { ...Y.attribs }, J)
    if ((J.forEach(V => (V.parent = Q)), Y.namespace != null)) Q.namespace = Y.namespace
    if (Y['x-attribsNamespace']) Q['x-attribsNamespace'] = { ...Y['x-attribsNamespace'] }
    if (Y['x-attribsPrefix']) Q['x-attribsPrefix'] = { ...Y['x-attribsPrefix'] }
    K = Q
  } else if (T0(Y)) {
    let J = Z ? x4(Y.children) : [],
      Q = new x1(J)
    ;(J.forEach(V => (V.parent = Q)), (K = Q))
  } else if (n(Y)) {
    let J = Z ? x4(Y.children) : [],
      Q = new a(J)
    if ((J.forEach(V => (V.parent = Q)), Y['x-mode'])) Q['x-mode'] = Y['x-mode']
    K = Q
  } else if (h1(Y)) {
    let J = new _0(Y.name, Y.data)
    if (Y['x-name'] != null)
      ((J['x-name'] = Y['x-name']),
        (J['x-publicId'] = Y['x-publicId']),
        (J['x-systemId'] = Y['x-systemId']))
    K = J
  } else throw Error(`Not implemented yet: ${Y.type}`)
  if (((K.startIndex = Y.startIndex), (K.endIndex = Y.endIndex), Y.sourceCodeLocation != null))
    K.sourceCodeLocation = Y.sourceCodeLocation
  return K
}
function x4(Y) {
  let Z = Y.map(K => m0(K, !0))
  for (let K = 1; K < Z.length; K++) ((Z[K].prev = Z[K - 1]), (Z[K - 1].next = Z[K]))
  return Z
}
var cY = { withStartIndices: !1, withEndIndices: !1, xmlMode: !1 }
class C4 {
  constructor(Y, Z, K) {
    if (
      ((this.dom = []),
      (this.root = new a(this.dom)),
      (this.done = !1),
      (this.tagStack = [this.root]),
      (this.lastNode = null),
      (this.parser = null),
      typeof Z === 'function')
    )
      ((K = Z), (Z = cY))
    if (typeof Y === 'object') ((Z = Y), (Y = void 0))
    ;((this.callback = Y !== null && Y !== void 0 ? Y : null),
      (this.options = Z !== null && Z !== void 0 ? Z : cY),
      (this.elementCB = K !== null && K !== void 0 ? K : null))
  }
  onparserinit(Y) {
    this.parser = Y
  }
  onreset() {
    ;((this.dom = []),
      (this.root = new a(this.dom)),
      (this.done = !1),
      (this.tagStack = [this.root]),
      (this.lastNode = null),
      (this.parser = null))
  }
  onend() {
    if (this.done) return
    ;((this.done = !0), (this.parser = null), this.handleCallback(null))
  }
  onerror(Y) {
    this.handleCallback(Y)
  }
  onclosetag() {
    this.lastNode = null
    let Y = this.tagStack.pop()
    if (this.options.withEndIndices) Y.endIndex = this.parser.endIndex
    if (this.elementCB) this.elementCB(Y)
  }
  onopentag(Y, Z) {
    let K = this.options.xmlMode ? x.Tag : void 0,
      J = new A0(Y, Z, void 0, K)
    ;(this.addNode(J), this.tagStack.push(J))
  }
  ontext(Y) {
    let { lastNode: Z } = this
    if (Z && Z.type === x.Text) {
      if (((Z.data += Y), this.options.withEndIndices)) Z.endIndex = this.parser.endIndex
    } else {
      let K = new W0(Y)
      ;(this.addNode(K), (this.lastNode = K))
    }
  }
  oncomment(Y) {
    if (this.lastNode && this.lastNode.type === x.Comment) {
      this.lastNode.data += Y
      return
    }
    let Z = new k0(Y)
    ;(this.addNode(Z), (this.lastNode = Z))
  }
  oncommentend() {
    this.lastNode = null
  }
  oncdatastart() {
    let Y = new W0(''),
      Z = new x1([Y])
    ;(this.addNode(Z), (Y.parent = Z), (this.lastNode = Y))
  }
  oncdataend() {
    this.lastNode = null
  }
  onprocessinginstruction(Y, Z) {
    let K = new _0(Y, Z)
    this.addNode(K)
  }
  handleCallback(Y) {
    if (typeof this.callback === 'function') this.callback(Y, this.dom)
    else if (Y) throw Y
  }
  addNode(Y) {
    let Z = this.tagStack[this.tagStack.length - 1],
      K = Z.children[Z.children.length - 1]
    if (this.options.withStartIndices) Y.startIndex = this.parser.startIndex
    if (this.options.withEndIndices) Y.endIndex = this.parser.endIndex
    if ((Z.children.push(Y), K)) ((Y.prev = K), (K.next = Y))
    ;((Y.parent = Z), (this.lastNode = null))
  }
}
var dY = /["&'<>$\x80-\uFFFF]/g,
  rY = new Map([
    [34, '&quot;'],
    [38, '&amp;'],
    [39, '&apos;'],
    [60, '&lt;'],
    [62, '&gt;'],
  ]),
  V6 =
    String.prototype.codePointAt != null
      ? (Y, Z) => Y.codePointAt(Z)
      : (Y, Z) =>
          (Y.charCodeAt(Z) & 64512) === 55296
            ? (Y.charCodeAt(Z) - 55296) * 1024 + Y.charCodeAt(Z + 1) - 56320 + 65536
            : Y.charCodeAt(Z)
function C1(Y) {
  let Z = '',
    K = 0,
    J
  while ((J = dY.exec(Y)) !== null) {
    let Q = J.index,
      V = Y.charCodeAt(Q),
      z = rY.get(V)
    if (z !== void 0) ((Z += Y.substring(K, Q) + z), (K = Q + 1))
    else
      ((Z += `${Y.substring(K, Q)}&#x${V6(Y, Q).toString(16)};`),
        (K = dY.lastIndex += Number((V & 64512) === 55296)))
  }
  return Z + Y.substr(K)
}
function D4(Y, Z) {
  return function (J) {
    let Q,
      V = 0,
      z = ''
    while ((Q = Y.exec(J))) {
      if (V !== Q.index) z += J.substring(V, Q.index)
      ;((z += Z.get(Q[0].charCodeAt(0))), (V = Q.index + 1))
    }
    return z + J.substring(V)
  }
}
var z6 = D4(/[&<>'"]/g, rY),
  G4 = D4(
    /["&\u00A0]/g,
    new Map([
      [34, '&quot;'],
      [38, '&amp;'],
      [160, '&nbsp;'],
    ]),
  ),
  $4 = D4(
    /[&<>\u00A0]/g,
    new Map([
      [38, '&amp;'],
      [60, '&lt;'],
      [62, '&gt;'],
      [160, '&nbsp;'],
    ]),
  )
var lY
;(function (Y) {
  ;((Y[(Y.XML = 0)] = 'XML'), (Y[(Y.HTML = 1)] = 'HTML'))
})(lY || (lY = {}))
var sY
;(function (Y) {
  ;((Y[(Y.UTF8 = 0)] = 'UTF8'),
    (Y[(Y.ASCII = 1)] = 'ASCII'),
    (Y[(Y.Extensive = 2)] = 'Extensive'),
    (Y[(Y.Attribute = 3)] = 'Attribute'),
    (Y[(Y.Text = 4)] = 'Text'))
})(sY || (sY = {}))
var pY = new Map(
    [
      'altGlyph',
      'altGlyphDef',
      'altGlyphItem',
      'animateColor',
      'animateMotion',
      'animateTransform',
      'clipPath',
      'feBlend',
      'feColorMatrix',
      'feComponentTransfer',
      'feComposite',
      'feConvolveMatrix',
      'feDiffuseLighting',
      'feDisplacementMap',
      'feDistantLight',
      'feDropShadow',
      'feFlood',
      'feFuncA',
      'feFuncB',
      'feFuncG',
      'feFuncR',
      'feGaussianBlur',
      'feImage',
      'feMerge',
      'feMergeNode',
      'feMorphology',
      'feOffset',
      'fePointLight',
      'feSpecularLighting',
      'feSpotLight',
      'feTile',
      'feTurbulence',
      'foreignObject',
      'glyphRef',
      'linearGradient',
      'radialGradient',
      'textPath',
    ].map(Y => [Y.toLowerCase(), Y]),
  ),
  aY = new Map(
    [
      'definitionURL',
      'attributeName',
      'attributeType',
      'baseFrequency',
      'baseProfile',
      'calcMode',
      'clipPathUnits',
      'diffuseConstant',
      'edgeMode',
      'filterUnits',
      'glyphRef',
      'gradientTransform',
      'gradientUnits',
      'kernelMatrix',
      'kernelUnitLength',
      'keyPoints',
      'keySplines',
      'keyTimes',
      'lengthAdjust',
      'limitingConeAngle',
      'markerHeight',
      'markerUnits',
      'markerWidth',
      'maskContentUnits',
      'maskUnits',
      'numOctaves',
      'pathLength',
      'patternContentUnits',
      'patternTransform',
      'patternUnits',
      'pointsAtX',
      'pointsAtY',
      'pointsAtZ',
      'preserveAlpha',
      'preserveAspectRatio',
      'primitiveUnits',
      'refX',
      'refY',
      'repeatCount',
      'repeatDur',
      'requiredExtensions',
      'requiredFeatures',
      'specularConstant',
      'specularExponent',
      'spreadMethod',
      'startOffset',
      'stdDeviation',
      'stitchTiles',
      'surfaceScale',
      'systemLanguage',
      'tableValues',
      'targetX',
      'targetY',
      'textLength',
      'viewBox',
      'viewTarget',
      'xChannelSelector',
      'yChannelSelector',
      'zoomAndPan',
    ].map(Y => [Y.toLowerCase(), Y]),
  )
var H6 = new Set([
  'style',
  'script',
  'xmp',
  'iframe',
  'noembed',
  'noframes',
  'plaintext',
  'noscript',
])
function W6(Y) {
  return Y.replace(/"/g, '&quot;')
}
function U6(Y, Z) {
  var K
  if (!Y) return
  let J =
    ((K = Z.encodeEntities) !== null && K !== void 0 ? K : Z.decodeEntities) === !1
      ? W6
      : Z.xmlMode || Z.encodeEntities !== 'utf8'
        ? C1
        : G4
  return Object.keys(Y)
    .map(Q => {
      var V, z
      let F = (V = Y[Q]) !== null && V !== void 0 ? V : ''
      if (Z.xmlMode === 'foreign') Q = (z = aY.get(Q)) !== null && z !== void 0 ? z : Q
      if (!Z.emptyAttrs && !Z.xmlMode && F === '') return Q
      return `${Q}="${J(F)}"`
    })
    .join(' ')
}
var nY = new Set([
  'area',
  'base',
  'basefont',
  'br',
  'col',
  'command',
  'embed',
  'frame',
  'hr',
  'img',
  'input',
  'isindex',
  'keygen',
  'link',
  'meta',
  'param',
  'source',
  'track',
  'wbr',
])
function E4(Y, Z = {}) {
  let K = 'length' in Y ? Y : [Y],
    J = ''
  for (let Q = 0; Q < K.length; Q++) J += F6(K[Q], Z)
  return J
}
var D1 = E4
function F6(Y, Z) {
  switch (Y.type) {
    case P4:
      return E4(Y.children, Z)
    case g4:
    case O4:
      return L6(Y)
    case b4:
      return P6(Y)
    case N4:
      return R6(Y)
    case f4:
    case y4:
    case M4:
      return w6(Y, Z)
    case v4:
      return j6(Y, Z)
  }
}
var q6 = new Set([
    'mi',
    'mo',
    'mn',
    'ms',
    'mtext',
    'annotation-xml',
    'foreignObject',
    'desc',
    'title',
  ]),
  B6 = new Set(['svg', 'math'])
function w6(Y, Z) {
  var K
  if (Z.xmlMode === 'foreign') {
    if (
      ((Y.name = (K = pY.get(Y.name)) !== null && K !== void 0 ? K : Y.name),
      Y.parent && q6.has(Y.parent.name))
    )
      Z = { ...Z, xmlMode: !1 }
  }
  if (!Z.xmlMode && B6.has(Y.name)) Z = { ...Z, xmlMode: 'foreign' }
  let J = `<${Y.name}`,
    Q = U6(Y.attribs, Z)
  if (Q) J += ` ${Q}`
  if (
    Y.children.length === 0 &&
    (Z.xmlMode ? Z.selfClosingTags !== !1 : Z.selfClosingTags && nY.has(Y.name))
  ) {
    if (!Z.xmlMode) J += ' '
    J += '/>'
  } else {
    if (((J += '>'), Y.children.length > 0)) J += E4(Y.children, Z)
    if (Z.xmlMode || !nY.has(Y.name)) J += `</${Y.name}>`
  }
  return J
}
function L6(Y) {
  return `<${Y.data}>`
}
function j6(Y, Z) {
  var K
  let J = Y.data || ''
  if (
    ((K = Z.encodeEntities) !== null && K !== void 0 ? K : Z.decodeEntities) !== !1 &&
    !(!Z.xmlMode && Y.parent && H6.has(Y.parent.name))
  )
    J = Z.xmlMode || Z.encodeEntities !== 'utf8' ? C1(J) : $4(J)
  return J
}
function R6(Y) {
  return `<![CDATA[${Y.children[0].data}]]>`
}
function P6(Y) {
  return `<!--${Y.data}-->`
}
function oY(Y, Z) {
  return D1(Y, Z)
}
function v6(Y, Z) {
  return C(Y) ? Y.children.map(K => oY(K, Z)).join('') : ''
}
function G1(Y) {
  if (Array.isArray(Y)) return Y.map(G1).join('')
  if (f(Y))
    return Y.name === 'br'
      ? `
`
      : G1(Y.children)
  if (T0(Y)) return G1(Y.children)
  if (r(Y)) return Y.data
  return ''
}
function U0(Y) {
  if (Array.isArray(Y)) return Y.map(U0).join('')
  if (C(Y) && !x0(Y)) return U0(Y.children)
  if (r(Y)) return Y.data
  return ''
}
function Y1(Y) {
  if (Array.isArray(Y)) return Y.map(Y1).join('')
  if (C(Y) && (Y.type === x.Tag || T0(Y))) return Y1(Y.children)
  if (r(Y)) return Y.data
  return ''
}
function i0(Y) {
  return C(Y) ? Y.children : []
}
function tY(Y) {
  return Y.parent || null
}
function u4(Y) {
  let Z = tY(Y)
  if (Z != null) return i0(Z)
  let K = [Y],
    { prev: J, next: Q } = Y
  while (J != null) (K.unshift(J), ({ prev: J } = J))
  while (Q != null) (K.push(Q), ({ next: Q } = Q))
  return K
}
function O6(Y, Z) {
  var K
  return (K = Y.attribs) === null || K === void 0 ? void 0 : K[Z]
}
function b6(Y, Z) {
  return (
    Y.attribs != null && Object.prototype.hasOwnProperty.call(Y.attribs, Z) && Y.attribs[Z] != null
  )
}
function f6(Y) {
  return Y.name
}
function $1(Y) {
  let { next: Z } = Y
  while (Z !== null && !f(Z)) ({ next: Z } = Z)
  return Z
}
function E1(Y) {
  let { prev: Z } = Y
  while (Z !== null && !f(Z)) ({ prev: Z } = Z)
  return Z
}
function F0(Y) {
  if (Y.prev) Y.prev.next = Y.next
  if (Y.next) Y.next.prev = Y.prev
  if (Y.parent) {
    let Z = Y.parent.children,
      K = Z.lastIndexOf(Y)
    if (K >= 0) Z.splice(K, 1)
  }
  ;((Y.next = null), (Y.prev = null), (Y.parent = null))
}
function y6(Y, Z) {
  let K = (Z.prev = Y.prev)
  if (K) K.next = Z
  let J = (Z.next = Y.next)
  if (J) J.prev = Z
  let Q = (Z.parent = Y.parent)
  if (Q) {
    let V = Q.children
    ;((V[V.lastIndexOf(Y)] = Z), (Y.parent = null))
  }
}
function M6(Y, Z) {
  if ((F0(Z), (Z.next = null), (Z.parent = Y), Y.children.push(Z) > 1)) {
    let K = Y.children[Y.children.length - 2]
    ;((K.next = Z), (Z.prev = K))
  } else Z.prev = null
}
function N6(Y, Z) {
  F0(Z)
  let { parent: K } = Y,
    J = Y.next
  if (((Z.next = J), (Z.prev = Y), (Y.next = Z), (Z.parent = K), J)) {
    if (((J.prev = Z), K)) {
      let Q = K.children
      Q.splice(Q.lastIndexOf(J), 0, Z)
    }
  } else if (K) K.children.push(Z)
}
function g6(Y, Z) {
  if ((F0(Z), (Z.parent = Y), (Z.prev = null), Y.children.unshift(Z) !== 1)) {
    let K = Y.children[1]
    ;((K.prev = Z), (Z.next = K))
  } else Z.next = null
}
function x6(Y, Z) {
  F0(Z)
  let { parent: K } = Y
  if (K) {
    let J = K.children
    J.splice(J.indexOf(Y), 0, Z)
  }
  if (Y.prev) Y.prev.next = Z
  ;((Z.parent = K), (Z.prev = Y.prev), (Z.next = Y), (Y.prev = Z))
}
function c0(Y, Z, K = !0, J = 1 / 0) {
  return u1(Y, Array.isArray(Z) ? Z : [Z], K, J)
}
function u1(Y, Z, K, J) {
  let Q = [],
    V = [Array.isArray(Z) ? Z : [Z]],
    z = [0]
  for (;;) {
    if (z[0] >= V[0].length) {
      if (z.length === 1) return Q
      ;(V.shift(), z.shift())
      continue
    }
    let F = V[0][z[0]++]
    if (Y(F)) {
      if ((Q.push(F), --J <= 0)) return Q
    }
    if (K && C(F) && F.children.length > 0) (z.unshift(0), V.unshift(F.children))
  }
}
function h6(Y, Z) {
  return Z.find(Y)
}
function I1(Y, Z, K = !0) {
  let J = Array.isArray(Z) ? Z : [Z]
  for (let Q = 0; Q < J.length; Q++) {
    let V = J[Q]
    if (f(V) && Y(V)) return V
    if (K && C(V) && V.children.length > 0) {
      let z = I1(Y, V.children, !0)
      if (z) return z
    }
  }
  return null
}
function eY(Y, Z) {
  return (Array.isArray(Z) ? Z : [Z]).some(K => (f(K) && Y(K)) || (C(K) && eY(Y, K.children)))
}
function C6(Y, Z) {
  let K = [],
    J = [Array.isArray(Z) ? Z : [Z]],
    Q = [0]
  for (;;) {
    if (Q[0] >= J[0].length) {
      if (J.length === 1) return K
      ;(J.shift(), Q.shift())
      continue
    }
    let V = J[0][Q[0]++]
    if (f(V) && Y(V)) K.push(V)
    if (C(V) && V.children.length > 0) (Q.unshift(0), J.unshift(V.children))
  }
}
var S1 = {
  tag_name(Y) {
    if (typeof Y === 'function') return Z => f(Z) && Y(Z.name)
    else if (Y === '*') return f
    return Z => f(Z) && Z.name === Y
  },
  tag_type(Y) {
    if (typeof Y === 'function') return Z => Y(Z.type)
    return Z => Z.type === Y
  },
  tag_contains(Y) {
    if (typeof Y === 'function') return Z => r(Z) && Y(Z.data)
    return Z => r(Z) && Z.data === Y
  },
}
function I4(Y, Z) {
  if (typeof Z === 'function') return K => f(K) && Z(K.attribs[Y])
  return K => f(K) && K.attribs[Y] === Z
}
function D6(Y, Z) {
  return K => Y(K) || Z(K)
}
function YZ(Y) {
  let Z = Object.keys(Y).map(K => {
    let J = Y[K]
    return Object.prototype.hasOwnProperty.call(S1, K) ? S1[K](J) : I4(K, J)
  })
  return Z.length === 0 ? null : Z.reduce(D6)
}
function G6(Y, Z) {
  let K = YZ(Y)
  return K ? K(Z) : !0
}
function $6(Y, Z, K, J = 1 / 0) {
  let Q = YZ(Y)
  return Q ? c0(Q, Z, K, J) : []
}
function E6(Y, Z, K = !0) {
  if (!Array.isArray(Z)) Z = [Z]
  return I1(I4('id', Y), Z, K)
}
function h0(Y, Z, K = !0, J = 1 / 0) {
  return c0(S1.tag_name(Y), Z, K, J)
}
function u6(Y, Z, K = !0, J = 1 / 0) {
  return c0(I4('class', Y), Z, K, J)
}
function I6(Y, Z, K = !0, J = 1 / 0) {
  return c0(S1.tag_type(Y), Z, K, J)
}
function S6(Y) {
  let Z = Y.length
  while (--Z >= 0) {
    let K = Y[Z]
    if (Z > 0 && Y.lastIndexOf(K, Z - 1) >= 0) {
      Y.splice(Z, 1)
      continue
    }
    for (let J = K.parent; J; J = J.parent)
      if (Y.includes(J)) {
        Y.splice(Z, 1)
        break
      }
  }
  return Y
}
var o
;(function (Y) {
  ;((Y[(Y.DISCONNECTED = 1)] = 'DISCONNECTED'),
    (Y[(Y.PRECEDING = 2)] = 'PRECEDING'),
    (Y[(Y.FOLLOWING = 4)] = 'FOLLOWING'),
    (Y[(Y.CONTAINS = 8)] = 'CONTAINS'),
    (Y[(Y.CONTAINED_BY = 16)] = 'CONTAINED_BY'))
})(o || (o = {}))
function ZZ(Y, Z) {
  let K = [],
    J = []
  if (Y === Z) return 0
  let Q = C(Y) ? Y : Y.parent
  while (Q) (K.unshift(Q), (Q = Q.parent))
  Q = C(Z) ? Z : Z.parent
  while (Q) (J.unshift(Q), (Q = Q.parent))
  let V = Math.min(K.length, J.length),
    z = 0
  while (z < V && K[z] === J[z]) z++
  if (z === 0) return o.DISCONNECTED
  let F = K[z - 1],
    q = F.children,
    w = K[z],
    j = J[z]
  if (q.indexOf(w) > q.indexOf(j)) {
    if (F === Z) return o.FOLLOWING | o.CONTAINED_BY
    return o.FOLLOWING
  }
  if (F === Y) return o.PRECEDING | o.CONTAINS
  return o.PRECEDING
}
function j0(Y) {
  return (
    (Y = Y.filter((Z, K, J) => !J.includes(Z, K + 1))),
    Y.sort((Z, K) => {
      let J = ZZ(Z, K)
      if (J & o.PRECEDING) return -1
      else if (J & o.FOLLOWING) return 1
      return 0
    }),
    Y
  )
}
function k6(Y) {
  let Z = k1(i6, Y)
  return !Z ? null : Z.name === 'feed' ? _6(Z) : A6(Z)
}
function _6(Y) {
  var Z
  let K = Y.children,
    J = {
      type: 'atom',
      items: h0('entry', K).map(z => {
        var F
        let { children: q } = z,
          w = { media: KZ(q) }
        ;(l(w, 'id', 'id', q), l(w, 'title', 'title', q))
        let j = (F = k1('link', q)) === null || F === void 0 ? void 0 : F.attribs.href
        if (j) w.link = j
        let O = R0('summary', q) || R0('content', q)
        if (O) w.description = O
        let b = R0('updated', q)
        if (b) w.pubDate = new Date(b)
        return w
      }),
    }
  ;(l(J, 'id', 'id', K), l(J, 'title', 'title', K))
  let Q = (Z = k1('link', K)) === null || Z === void 0 ? void 0 : Z.attribs.href
  if (Q) J.link = Q
  l(J, 'description', 'subtitle', K)
  let V = R0('updated', K)
  if (V) J.updated = new Date(V)
  return (l(J, 'author', 'email', K, !0), J)
}
function A6(Y) {
  var Z, K
  let J =
      (K = (Z = k1('channel', Y.children)) === null || Z === void 0 ? void 0 : Z.children) !==
        null && K !== void 0
        ? K
        : [],
    Q = {
      type: Y.name.substr(0, 3),
      id: '',
      items: h0('item', Y.children).map(z => {
        let { children: F } = z,
          q = { media: KZ(F) }
        ;(l(q, 'id', 'guid', F),
          l(q, 'title', 'title', F),
          l(q, 'link', 'link', F),
          l(q, 'description', 'description', F))
        let w = R0('pubDate', F) || R0('dc:date', F)
        if (w) q.pubDate = new Date(w)
        return q
      }),
    }
  ;(l(Q, 'title', 'title', J), l(Q, 'link', 'link', J), l(Q, 'description', 'description', J))
  let V = R0('lastBuildDate', J)
  if (V) Q.updated = new Date(V)
  return (l(Q, 'author', 'managingEditor', J, !0), Q)
}
var T6 = ['url', 'type', 'lang'],
  m6 = [
    'fileSize',
    'bitrate',
    'framerate',
    'samplingrate',
    'channels',
    'duration',
    'height',
    'width',
  ]
function KZ(Y) {
  return h0('media:content', Y).map(Z => {
    let { attribs: K } = Z,
      J = { medium: K.medium, isDefault: !!K.isDefault }
    for (let Q of T6) if (K[Q]) J[Q] = K[Q]
    for (let Q of m6) if (K[Q]) J[Q] = parseInt(K[Q], 10)
    if (K.expression) J.expression = K.expression
    return J
  })
}
function k1(Y, Z) {
  return h0(Y, Z, !0, 1)[0]
}
function R0(Y, Z, K = !1) {
  return U0(h0(Y, Z, K, 1)).trim()
}
function l(Y, Z, K, J, Q = !1) {
  let V = R0(K, J, Q)
  if (V) Y[Z] = V
}
function i6(Y) {
  return Y === 'rss' || Y === 'feed' || Y === 'rdf:RDF'
}
var c6 = { _useHtmlParser2: !1 }
function Z1(Y, Z) {
  if (!Y) return Z !== null && Z !== void 0 ? Z : c6
  let K = { _useHtmlParser2: !!Y.xmlMode, ...Z, ...Y }
  if (Y.xml) {
    if (((K._useHtmlParser2 = !0), (K.xmlMode = !0), Y.xml !== !0)) Object.assign(K, Y.xml)
  } else if (Y.xmlMode) K._useHtmlParser2 = !0
  return K
}
function XZ(Y, Z, K) {
  if (!Y) return ''
  return Y(Z !== null && Z !== void 0 ? Z : Y._root.children, null, void 0, K).toString()
}
function d6(Y, Z) {
  return !Z && typeof Y === 'object' && Y != null && !('length' in Y) && !('type' in Y)
}
function r6(Y, Z) {
  let K = d6(Y) ? ((Z = Y), void 0) : Y,
    J = { ...(this === null || this === void 0 ? void 0 : this._options), ...Z1(Z) }
  return XZ(this, K, J)
}
function l6(Y) {
  let Z = { ...this._options, xmlMode: !0 }
  return XZ(this, Y, Z)
}
function C0(Y) {
  let Z = Y !== null && Y !== void 0 ? Y : this ? this.root() : [],
    K = ''
  for (let J = 0; J < Z.length; J++) K += U0(Z[J])
  return K
}
function s6(Y, Z, K = typeof Z === 'boolean' ? Z : !1) {
  if (!Y || typeof Y !== 'string') return null
  if (typeof Z === 'boolean') K = Z
  let J = this.load(Y, this._options, !1)
  if (!K) J('script').remove()
  return [...J.root()[0].children]
}
function p6() {
  return this(this._root)
}
function _1(Y, Z) {
  if (Z === Y) return !1
  let K = Z
  while (K && K !== K.parent) if (((K = K.parent), K === Y)) return !0
  return !1
}
function a6(Y) {
  return this.root().extract(Y)
}
function QZ(Y, Z) {
  if (!JZ(Y) || !JZ(Z)) return
  let K = Y.length,
    J = +Z.length
  for (let Q = 0; Q < J; Q++) Y[K++] = Z[Q]
  return ((Y.length = K), Y)
}
function JZ(Y) {
  if (Array.isArray(Y)) return !0
  if (
    typeof Y !== 'object' ||
    Y === null ||
    !('length' in Y) ||
    typeof Y.length !== 'number' ||
    Y.length < 0
  )
    return !1
  for (let Z = 0; Z < Y.length; Z++) if (!(Z in Y)) return !1
  return !0
}
var p4 = {}
V0(p4, {
  val: () => F7,
  toggleClass: () => bZ,
  removeClass: () => OZ,
  removeAttr: () => q7,
  prop: () => z7,
  hasClass: () => B7,
  data: () => U7,
  attr: () => V7,
  addClass: () => vZ,
})
function t(Y) {
  return Y.cheerio != null
}
function VZ(Y) {
  return Y.replace(/[._-](\w|$)/g, (Z, K) => K.toUpperCase())
}
function zZ(Y) {
  return Y.replace(/[A-Z]/g, '-$&').toLowerCase()
}
function G(Y, Z) {
  let K = Y.length
  for (let J = 0; J < K; J++) Z(Y[J], J)
  return Y
}
var D0
;(function (Y) {
  ;((Y[(Y.LowerA = 97)] = 'LowerA'),
    (Y[(Y.LowerZ = 122)] = 'LowerZ'),
    (Y[(Y.UpperA = 65)] = 'UpperA'),
    (Y[(Y.UpperZ = 90)] = 'UpperZ'),
    (Y[(Y.Exclamation = 33)] = 'Exclamation'))
})(D0 || (D0 = {}))
function K1(Y) {
  if (typeof Y !== 'string') return !1
  let Z = Y.indexOf('<')
  if (Z === -1 || Z > Y.length - 3) return !1
  let K = Y.charCodeAt(Z + 1)
  return (
    ((K >= D0.LowerA && K <= D0.LowerZ) ||
      (K >= D0.UpperA && K <= D0.UpperZ) ||
      K === D0.Exclamation) &&
    Y.includes('>', Z + 2)
  )
}
var k4,
  n6 = new Map([
    [0, 65533],
    [128, 8364],
    [130, 8218],
    [131, 402],
    [132, 8222],
    [133, 8230],
    [134, 8224],
    [135, 8225],
    [136, 710],
    [137, 8240],
    [138, 352],
    [139, 8249],
    [140, 338],
    [142, 381],
    [145, 8216],
    [146, 8217],
    [147, 8220],
    [148, 8221],
    [149, 8226],
    [150, 8211],
    [151, 8212],
    [152, 732],
    [153, 8482],
    [154, 353],
    [155, 8250],
    [156, 339],
    [158, 382],
    [159, 376],
  ]),
  J1 =
    (k4 = String.fromCodePoint) !== null && k4 !== void 0
      ? k4
      : Y => {
          let Z = ''
          if (Y > 65535)
            ((Y -= 65536),
              (Z += String.fromCharCode(((Y >>> 10) & 1023) | 55296)),
              (Y = 56320 | (Y & 1023)))
          return ((Z += String.fromCharCode(Y)), Z)
        }
function _4(Y) {
  var Z
  if ((Y >= 55296 && Y <= 57343) || Y > 1114111) return 65533
  return (Z = n6.get(Y)) !== null && Z !== void 0 ? Z : Y
}
function A1(Y) {
  let Z =
      typeof atob === 'function'
        ? atob(Y)
        : typeof Buffer.from === 'function'
          ? Buffer.from(Y, 'base64').toString('binary')
          : new Buffer(Y, 'base64').toString('binary'),
    K = Z.length & -2,
    J = new Uint16Array(K / 2)
  for (let Q = 0, V = 0; Q < K; Q += 2) {
    let z = Z.charCodeAt(Q),
      F = Z.charCodeAt(Q + 1)
    J[V++] = z | (F << 8)
  }
  return J
}
var A4 = A1(
  'QR08ALkAAgH6AYsDNQR2BO0EPgXZBQEGLAbdBxMISQrvCmQLfQurDKQNLw4fD4YPpA+6D/IPAAAAAAAAAAAAAAAAKhBMEY8TmxUWF2EYLBkxGuAa3RsJHDscWR8YIC8jSCSIJcMl6ie3Ku8rEC0CLjoupS7kLgAIRU1hYmNmZ2xtbm9wcnN0dVQAWgBeAGUAaQBzAHcAfgCBAIQAhwCSAJoAoACsALMAbABpAGcAO4DGAMZAUAA7gCYAJkBjAHUAdABlADuAwQDBQHIiZXZlAAJhAAFpeW0AcgByAGMAO4DCAMJAEGRyAADgNdgE3XIAYQB2AGUAO4DAAMBA8CFoYZFj4SFjcgBhZAAAoFMqAAFncIsAjgBvAG4ABGFmAADgNdg43fAlbHlGdW5jdGlvbgCgYSBpAG4AZwA7gMUAxUAAAWNzpACoAHIAAOA12Jzc6SFnbgCgVCJpAGwAZABlADuAwwDDQG0AbAA7gMQAxEAABGFjZWZvcnN1xQDYANoA7QDxAPYA+QD8AAABY3LJAM8AayNzbGFzaAAAoBYidgHTANUAAKDnKmUAZAAAoAYjeQARZIABY3J0AOAA5QDrAGEidXNlAACgNSLuI291bGxpcwCgLCFhAJJjcgAA4DXYBd1wAGYAAOA12Dnd5SF2ZdhiYwDyAOoAbSJwZXEAAKBOIgAHSE9hY2RlZmhpbG9yc3UXARoBHwE6AVIBVQFiAWQBZgGCAakB6QHtAfIBYwB5ACdkUABZADuAqQCpQIABY3B5ACUBKAE1AfUhdGUGYWmg0iJ0KGFsRGlmZmVyZW50aWFsRAAAoEUhbCJleXMAAKAtIQACYWVpb0EBRAFKAU0B8iFvbgxhZABpAGwAO4DHAMdAcgBjAAhhbiJpbnQAAKAwIm8AdAAKYQABZG5ZAV0BaSJsbGEAuGB0I2VyRG90ALdg8gA5AWkAp2NyImNsZQAAAkRNUFRwAXQBeQF9AW8AdAAAoJkiaSJudXMAAKCWIuwhdXMAoJUiaSJtZXMAAKCXIm8AAAFjc4cBlAFrKndpc2VDb250b3VySW50ZWdyYWwAAKAyImUjQ3VybHkAAAFEUZwBpAFvJXVibGVRdW90ZQAAoB0gdSJvdGUAAKAZIAACbG5wdbABtgHNAdgBbwBuAGWgNyIAoHQqgAFnaXQAvAHBAcUB8iJ1ZW50AKBhIm4AdAAAoC8i7yV1ckludGVncmFsAKAuIgABZnLRAdMBAKACIe8iZHVjdACgECJuLnRlckNsb2Nrd2lzZUNvbnRvdXJJbnRlZ3JhbAAAoDMi7yFzcwCgLypjAHIAAOA12J7ccABDoNMiYQBwAACgTSKABURKU1phY2VmaW9zAAsCEgIVAhgCGwIsAjQCOQI9AnMCfwNvoEUh9CJyYWhkAKARKWMAeQACZGMAeQAFZGMAeQAPZIABZ3JzACECJQIoAuchZXIAoCEgcgAAoKEhaAB2AACg5CoAAWF5MAIzAvIhb24OYRRkbAB0oAciYQCUY3IAAOA12AfdAAFhZkECawIAAWNtRQJnAvIjaXRpY2FsAAJBREdUUAJUAl8CYwJjInV0ZQC0YG8AdAFZAloC2WJiJGxlQWN1dGUA3WJyImF2ZQBgYGkibGRlANxi7yFuZACgxCJmJWVyZW50aWFsRAAAoEYhcAR9AgAAAAAAAIECjgIAABoDZgAA4DXYO91EoagAhQKJAm8AdAAAoNwgcSJ1YWwAAKBQIuIhbGUAA0NETFJVVpkCqAK1Au8C/wIRA28AbgB0AG8AdQByAEkAbgB0AGUAZwByAGEA7ADEAW8AdAKvAgAAAACwAqhgbiNBcnJvdwAAoNMhAAFlb7kC0AJmAHQAgAFBUlQAwQLGAs0CciJyb3cAAKDQIekkZ2h0QXJyb3cAoNQhZQDlACsCbgBnAAABTFLWAugC5SFmdAABQVLcAuECciJyb3cAAKD4J+kkZ2h0QXJyb3cAoPon6SRnaHRBcnJvdwCg+SdpImdodAAAAUFU9gL7AnIicm93AACg0iFlAGUAAKCoInAAQQIGAwAAAAALA3Iicm93AACg0SFvJHduQXJyb3cAAKDVIWUlcnRpY2FsQmFyAACgJSJuAAADQUJMUlRhJAM2AzoDWgNxA3oDciJyb3cAAKGTIUJVLAMwA2EAcgAAoBMpcCNBcnJvdwAAoPUhciJldmUAEWPlIWZ00gJDAwAASwMAAFIDaSVnaHRWZWN0b3IAAKBQKWUkZVZlY3RvcgAAoF4p5SJjdG9yQqC9IWEAcgAAoFYpaSJnaHQA1AFiAwAAaQNlJGVWZWN0b3IAAKBfKeUiY3RvckKgwSFhAHIAAKBXKWUAZQBBoKQiciJyb3cAAKCnIXIAcgBvAPcAtAIAAWN0gwOHA3IA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YwAAoN8i4SFycnCgtiEAoD0pgKIqImJjZG9zACsVMBU6FT4VQRVyImNhcAAAoEgqAAFhdTQVNxVwAACgRipwAACgSipvAHQAAKCNInIAAKBFKgDgKiIA/gACYWxydksVURVuFXMVcgByAG2gtyEAoDwpeQCAAWV2dwBYFWUVaRVxAHACXxUAAAAAYxVyAGUA4wAXFXUA4wAZFWUAZQAAoM4iZSJkZ2UAAKDPImUAbgA7gKQApEBlI2Fycm93AAABbHJ7FX8V5SFmdACgtiFpImdodAAAoLchZQDkAG0VAAFjaYsVkRVvAG4AaQBuAPQAkwFuAHQAAKAxImwiY3R5AACgLSOACUFIYWJjZGVmaGlqbG9yc3R1d3oAuBW7Fb8V1RXgFegV+RUKFhUWHxZUFlcWZRbFFtsW7xb7FgUXChdyAPIAtAJhAHIAAKBlKQACZ2xyc8YVyhXOFdAV5yFlcgCgICDlIXRoAKA4IfIA9QxoAHagECAAoKMiawHZFd4VYSJyb3cAAKAPKWEA4wBfAgABYXnkFecV8iFvbg9hNGQAoUYhYW/tFfQVAAFnciEC8RVyAACgyiF0InNlcQAAoHcqgAFnbG0A/xUCFgUWO4CwALBAdABhALRjcCJ0eXYAAKCxKQABaXIOFhIW8yFodACgfykA4DXYId1hAHIAAAFschsWHRYAoMMhAKDCIYACYWVnc3YAKBauAjYWOhY+Fm0AAKHEIm9zLhY0Fm4AZABzoMQi9SFpdACgZiZhIm1tYQDdY2kAbgAAoPIiAKH3AGlvQxZRFmQAZQAAgfcAO29KFksW90BuI3RpbWVzAACgxyJuAPgAUBZjAHkAUmRjAG8CXhYAAAAAYhZyAG4AAKAeI28AcAAAoA0jgAJscHR1dwBuFnEWdRaSFp4W7CFhciRgZgAA4DXYVd0AotkCZW1wc30WhBaJFo0WcQBkoFAibwB0AACgUSJpIm51cwAAoDgi7CF1cwCgFCLxInVhcmUAoKEiYgBsAGUAYgBhAHIAdwBlAGQAZwDlANcAbgCAAWFkaAClFqoWtBZyAHIAbwD3APUMbwB3AG4AYQByAHIAbwB3APMA8xVhI3Jwb29uAAABbHK8FsAWZQBmAPQAHBZpAGcAaAD0AB4WYgHJFs8WawBhAHIAbwD3AJILbwLUFgAAAADYFnIAbgAAoB8jbwBwAACgDCOAAWNvdADhFukW7BYAAXJ55RboFgDgNdi53FVkbAAAoPYp8iFvaxFhAAFkcvMW9xZvAHQAAKDxImkA5qC/JVsSAAFhaP8WAhdyAPIANQNhAPIA1wvhIm5nbGUAoKYpAAFjaQ4XEBd5AF9k5yJyYXJyAKD/JwAJRGFjZGVmZ2xtbm9wcXJzdHV4MRc4F0YXWxcyBF4XaRd5F40XrBe0F78X2RcVGCEYLRg1GEAYAAFEbzUXgRZvAPQA+BUAAWNzPBdCF3UAdABlADuA6QDpQPQhZXIAoG4qAAJhaW95TRdQF1YXWhfyIW9uG2FyAGOgViI7gOoA6kDsIW9uAKBVIk1kbwB0ABdhAAFEcmIXZhdvAHQAAKBSIgDgNdgi3XKhmipuF3QXYQB2AGUAO4DoAOhAZKCWKm8AdAAAoJgqgKGZKmlscwCAF4UXhxfuInRlcnMAoOcjAKATIWSglSpvAHQAAKCXKoABYXBzAJMXlheiF2MAcgATYXQAeQBzogUinxcAAAAAoRdlAHQAAKAFInAAMaADIDMBqRerFwCgBCAAoAUgAAFnc7AXsRdLYXAAAKACIAABZ3C4F7sXbwBuABlhZgAA4DXYVt2AAWFscwDFF8sXzxdyAHOg1SJsAACg4yl1AHMAAKBxKmkAAKG1A2x21RfYF28AbgC1Y/VjAAJjc3V24BfoF/0XEBgAAWlv5BdWF3IAYwAAoFYiaQLuFwAAAADwF+0ADQThIW50AAFnbPUX+Rd0AHIAAKCWKuUhc3MAoJUqgAFhZWkAAxgGGAoYbABzAD1gcwB0AACgXyJ2AESgYSJEAACgeCrwImFyc2wAoOUpAAFEYRkYHRhvAHQAAKBTInIAcgAAoHEpgAFjZGkAJxgqGO0XcgAAoC8hbwD0AIwCAAFhaDEYMhi3YzuA8ADwQAABbXI5GD0YbAA7gOsA60BvAACgrCCAAWNpcABGGEgYSxhsACFgcwD0ACwEAAFlb08YVxhjAHQAYQB0AGkAbwDuABoEbgBlAG4AdABpAGEAbADlADME4Ql1GAAAgRgAAIMYiBgAAAAAoRilGAAAqhgAALsYvhjRGAAA1xgnGWwAbABpAG4AZwBkAG8AdABzAGUA8QBlF3kARGRtImFsZQAAoEAmgAFpbHIAjRiRGJ0Y7CFpZwCgA/tpApcYAAAAAJoYZwAAoAD7aQBnAACgBPsA4DXYI93sIWlnAKAB++whaWcA4GYAagCAAWFsdACvGLIYthh0AACgbSZpAGcAAKAC+24AcwAAoLElbwBmAJJh8AHCGAAAxhhmAADgNdhX3QABYWvJGMwYbADsAGsEdqDUIgCg2SphI3J0aW50AACgDSoAAWFv2hgiGQABY3PeGB8ZsQPnGP0YBRkSGRUZAAAdGbID7xjyGPQY9xj5GAAA+xg7gL0AvUAAoFMhO4C8ALxAAKBVIQCgWSEAoFshswEBGQAAAxkAoFQhAKBWIbQCCxkOGQAAAAAQGTuAvgC+QACgVyEAoFwhNQAAoFghtgEZGQAAGxkAoFohAKBdITgAAKBeIWwAAKBEIHcAbgAAoCIjYwByAADgNdi73IAIRWFiY2RlZmdpamxub3JzdHYARhlKGVoZXhlmGWkZkhmWGZkZnRmgGa0ZxhnLGc8Z4BkjGmygZyIAoIwqgAFjbXAAUBlTGVgZ9SF0ZfVhbQBhAOSgswM6FgCghipyImV2ZQAfYQABaXliGWUZcgBjAB1hM2RvAHQAIWGAoWUibHFzAMYEcBl6GfGhZSLOBAAAdhlsAGEAbgD0AN8EgKF+KmNkbACBGYQZjBljAACgqSpvAHQAb6CAKmyggioAoIQqZeDbIgD+cwAAoJQqcgAA4DXYJN3noGsirATtIWVsAKA3IWMAeQBTZIChdyJFYWoApxmpGasZAKCSKgCgpSoAoKQqAAJFYWVztBm2Gb0ZwhkAoGkicABwoIoq8iFveACgiipxoIgq8aCIKrUZaQBtAACg5yJwAGYAAOA12FjdYQB2AOUAYwIAAWNp0xnWGXIAAKAKIW0AAKFzImVs3BneGQCgjioAoJAqAIM+ADtjZGxxco0E6xn0GfgZ/BkBGgABY2nvGfEZAKCnKnIAAKB6Km8AdAAAoNci0CFhcgCglSl1ImVzdAAAoHwqgAJhZGVscwAKGvQZFhrVBCAa8AEPGgAAFBpwAHIAbwD4AFkZcgAAoHgpcQAAAWxxxAQbGmwAZQBzAPMASRlpAO0A5AQAAWVuJxouGnIjdG5lcXEAAOBpIgD+xQAsGgAFQWFiY2Vma29zeUAaQxpmGmoabRqDGocalhrCGtMacgDyAMwCAAJpbG1yShpOGlAaVBpyAHMA8ABxD2YAvWBpAGwA9AASBQABZHJYGlsaYwB5AEpkAKGUIWN3YBpkGmkAcgAAoEgpAKCtIWEAcgAAoA8h6SFyYyVhgAFhbHIAcxp7Gn8a8iF0c3WgZSZpAHQAAKBlJuwhaXAAoCYg4yFvbgCguSJyAADgNdgl3XMAAAFld4wakRphInJvdwAAoCUpYSJyb3cAAKAmKYACYW1vcHIAnxqjGqcauhq+GnIAcgAAoP8h9CFodACgOyJrAAABbHKsGrMaZSRmdGFycm93AACgqSHpJGdodGFycm93AKCqIWYAAOA12Fnd4iFhcgCgFSCAAWNsdADIGswa0BpyAADgNdi93GEAcwDoAGka8iFvaydhAAFicNca2xr1IWxsAKBDIOghZW4AoBAg4Qr2GgAA/RoAAAgbExsaGwAAIRs7GwAAAAA+G2IbmRuVG6sbAACyG80b0htjAHUAdABlADuA7QDtQAChYyBpeQEbBhtyAGMAO4DuAO5AOGQAAWN4CxsNG3kANWRjAGwAO4ChAKFAAAFmcssCFhsA4DXYJt1yAGEAdgBlADuA7ADsQIChSCFpbm8AJxsyGzYbAAFpbisbLxtuAHQAAKAMKnQAAKAtIuYhaW4AoNwpdABhAACgKSHsIWlnM2GAAWFvcABDG1sbXhuAAWNndABJG0sbWRtyACthgAFlbHAAcQVRG1UbaQBuAOUAyAVhAHIA9AByBWgAMWFmAACgtyJlAGQAtWEAoggiY2ZvdGkbbRt1G3kb4SFyZQCgBSFpAG4AdKAeImkAZQAAoN0pZABvAPQAWxsAoisiY2VscIEbhRuPG5QbYQBsAACguiIAAWdyiRuNG2UAcgDzACMQ4wCCG2EicmhrAACgFyryIW9kAKA8KgACY2dwdJ8boRukG6gbeQBRZG8AbgAvYWYAAOA12FrdYQC5Y3UAZQBzAHQAO4C/AL9AAAFjabUbuRtyAADgNdi+3G4AAKIIIkVkc3bCG8QbyBvQAwCg+SJvAHQAAKD1Inag9CIAoPMiaaBiIOwhZGUpYesB1hsAANkbYwB5AFZkbAA7gO8A70AAA2NmbW9zdeYb7hvyG/Ub+hsFHAABaXnqG+0bcgBjADVhOWRyAADgNdgn3eEhdGg3YnAAZgAA4DXYW93jAf8bAAADHHIAAOA12L/c8iFjeVhk6yFjeVRkAARhY2ZnaGpvcxUcGhwiHCYcKhwtHDAcNRzwIXBhdqC6A/BjAAFleR4cIRzkIWls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ZmdobG1vcHJzdHV3CiwNLBEsHSwnLDEsQCxLLFIsYix6LIQsjyzLLOgs7Sz/LAotcgDyAAkDYQByAACgYykAAWNyFSwbLHUAdABlADuA+gD6QPIACQ1yAOMBIywAACUseQBeZHYAZQBtYQABaXkrLDAscgBjADuA+wD7QENkgAFhYmgANyw6LD0scgDyANEO7CFhY3FhYQDyAOAOAAFpckQsSCzzIWh0AKB+KQDgNdgy3XIAYQB2AGUAO4D5APlAYQFWLF8scgAAAWxyWixcLACgvyEAoL4hbABrAACggCUAAWN0Zix2LG8CbCwAAAAAcyxyAG4AZaAcI3IAAKAcI28AcAAAoA8jcgBpAACg+CUAAWFsfiyBLGMAcgBrYTuAqACoQAABZ3CILIssbwBuAHNhZgAA4DXYZt0AA2FkaGxzdZksniynLLgsuyzFLHIAcgBvAPcACQ1vAHcAbgBhAHIAcgBvAPcA2A5hI3Jwb29uAAABbHKvLLMsZQBmAPQAWyxpAGcAaAD0AF0sdQDzAKYOaQAAocUDaGzBLMIs0mNvAG4AxWPwI2Fycm93cwCgyCGAAWNpdADRLOEs5CxvAtcsAAAAAN4scgBuAGWgHSNyAACgHSNvAHAAAKAOI24AZwBvYXIAaQAAoPklYwByAADgNdjK3IABZGlyAPMs9yz6LG8AdAAAoPAi7CFkZWlhaQBmoLUlAKC0JQABYW0DLQYtcgDyAMosbAA7gPwA/EDhIm5nbGUAoKcpgAdBQkRhY2RlZmxub3Byc3oAJy0qLTAtNC2bLZ0toS2/LcMtxy3TLdgt3C3gLfwtcgDyABADYQByAHag6CoAoOkqYQBzAOgA/gIAAW5yOC08LechcnQAoJwpgANla25wcnN0AJkpSC1NLVQtXi1iLYItYQBwAHAA4QAaHG8AdABoAGkAbgDnAKEXgAFoaXIAoSmzJFotbwBwAPQAdCVooJUh7wD4JgABaXVmLWotZwBtAOEAuygAAWJwbi14LXMjZXRuZXEAceCKIgD+AODLKgD+cyNldG5lcQBx4IsiAP4A4MwqAP4AAWhyhi2KLWUAdADhABIraSNhbmdsZQAAAWxyki2WLeUhZnQAoLIiaSJnaHQAAKCzInkAMmThIXNoAKCiIoABZWxyAKcttC24LWKiKCKuLQAAAACyLWEAcgAAoLsicQAAoFoi7CFpcACg7iIAAWJ0vC1eD2EA8gBfD3IAAOA12DPddAByAOkAlS1zAHUAAAFicM0t0C0A4IIi0iAA4IMi0iBwAGYAAOA12GfdcgBvAPAAWQt0AHIA6QCaLQABY3XkLegtcgAA4DXYy9wAAWJw7C30LW4AAAFFZXUt8S0A4IoiAP5uAAABRWV/LfktAOCLIgD+6SJnemFnAKCaKYADY2Vmb3BycwANLhAuJS4pLiMuLi40LukhcmN1YQABZGkULiEuAAFiZxguHC5hAHIAAKBfKmUAcaAnIgCgWSLlIXJwAKAYIXIAAOA12DTdcABmAADgNdho3WWgQCJhAHQA6ABqD2MAcgAA4DXYzNzjCuQRUC4AAFQuAABYLmIuAAAAAGMubS5wLnQuAAAAAIguki4AAJouJxIqEnQAcgDpAB0ScgAA4DXYNd0AAUFhWy5eLnIA8gDnAnIA8gCTB75jAAFBYWYuaS5yAPIA4AJyAPIAjAdhAPAAeh5pAHMAAKD7IoABZHB0APgReS6DLgABZmx9LoAuAOA12GnddQDzAP8RaQBtAOUABBIAAUFhiy6OLnIA8gDuAnIA8gCaBwABY3GVLgoScgAA4DXYzdwAAXB0nS6hLmwAdQDzACUScgDpACASAARhY2VmaW9zdbEuvC7ELsguzC7PLtQu2S5jAAABdXm2LrsudABlADuA/QD9QE9kAAFpecAuwy5yAGMAd2FLZG4AO4ClAKVAcgAA4DXYNt1jAHkAV2RwAGYAAOA12GrdYwByAADgNdjO3AABY23dLt8ueQBOZGwAO4D/AP9AAAVhY2RlZmhpb3N38y73Lv8uAi8MLxAvEy8YLx0vIi9jInV0ZQB6YQABYXn7Lv4u8iFvbn5hN2RvAHQAfGEAAWV0Bi8KL3QAcgDmAB8QYQC2Y3IAAOA12DfdYwB5ADZk5yJyYXJyAKDdIXAAZgAA4DXYa91jAHIAAOA12M/cAAFqbiYvKC8AoA0gagAAoAwg',
)
var T4 = A1('AAJhZ2xxBwARABMAFQBtAg0AAAAAAA8AcAAmYG8AcwAnYHQAPmB0ADxg9SFvdCJg')
var T
;(function (Y) {
  ;((Y[(Y.VALUE_LENGTH = 49152)] = 'VALUE_LENGTH'),
    (Y[(Y.FLAG13 = 8192)] = 'FLAG13'),
    (Y[(Y.BRANCH_LENGTH = 8064)] = 'BRANCH_LENGTH'),
    (Y[(Y.JUMP_TABLE = 127)] = 'JUMP_TABLE'))
})(T || (T = {}))
var E
;(function (Y) {
  ;((Y[(Y.NUM = 35)] = 'NUM'),
    (Y[(Y.SEMI = 59)] = 'SEMI'),
    (Y[(Y.EQUALS = 61)] = 'EQUALS'),
    (Y[(Y.ZERO = 48)] = 'ZERO'),
    (Y[(Y.NINE = 57)] = 'NINE'),
    (Y[(Y.LOWER_A = 97)] = 'LOWER_A'),
    (Y[(Y.LOWER_F = 102)] = 'LOWER_F'),
    (Y[(Y.LOWER_X = 120)] = 'LOWER_X'),
    (Y[(Y.LOWER_Z = 122)] = 'LOWER_Z'),
    (Y[(Y.UPPER_A = 65)] = 'UPPER_A'),
    (Y[(Y.UPPER_F = 70)] = 'UPPER_F'),
    (Y[(Y.UPPER_Z = 90)] = 'UPPER_Z'))
})(E || (E = {}))
var HZ = 32
function m4(Y) {
  return Y >= E.ZERO && Y <= E.NINE
}
function o6(Y) {
  return (Y >= E.UPPER_A && Y <= E.UPPER_F) || (Y >= E.LOWER_A && Y <= E.LOWER_F)
}
function t6(Y) {
  return (Y >= E.UPPER_A && Y <= E.UPPER_Z) || (Y >= E.LOWER_A && Y <= E.LOWER_Z) || m4(Y)
}
function e6(Y) {
  return Y === E.EQUALS || t6(Y)
}
var k
;(function (Y) {
  ;((Y[(Y.EntityStart = 0)] = 'EntityStart'),
    (Y[(Y.NumericStart = 1)] = 'NumericStart'),
    (Y[(Y.NumericDecimal = 2)] = 'NumericDecimal'),
    (Y[(Y.NumericHex = 3)] = 'NumericHex'),
    (Y[(Y.NamedEntity = 4)] = 'NamedEntity'))
})(k || (k = {}))
var K0
;(function (Y) {
  ;((Y[(Y.Legacy = 0)] = 'Legacy'),
    (Y[(Y.Strict = 1)] = 'Strict'),
    (Y[(Y.Attribute = 2)] = 'Attribute'))
})(K0 || (K0 = {}))
class i4 {
  constructor(Y, Z, K) {
    ;((this.decodeTree = Y),
      (this.emitCodePoint = Z),
      (this.errors = K),
      (this.state = k.EntityStart),
      (this.consumed = 1),
      (this.result = 0),
      (this.treeIndex = 0),
      (this.excess = 1),
      (this.decodeMode = K0.Strict),
      (this.runConsumed = 0))
  }
  startEntity(Y) {
    ;((this.decodeMode = Y),
      (this.state = k.EntityStart),
      (this.result = 0),
      (this.treeIndex = 0),
      (this.excess = 1),
      (this.consumed = 1),
      (this.runConsumed = 0))
  }
  write(Y, Z) {
    switch (this.state) {
      case k.EntityStart: {
        if (Y.charCodeAt(Z) === E.NUM)
          return (
            (this.state = k.NumericStart), (this.consumed += 1), this.stateNumericStart(Y, Z + 1)
          )
        return ((this.state = k.NamedEntity), this.stateNamedEntity(Y, Z))
      }
      case k.NumericStart:
        return this.stateNumericStart(Y, Z)
      case k.NumericDecimal:
        return this.stateNumericDecimal(Y, Z)
      case k.NumericHex:
        return this.stateNumericHex(Y, Z)
      case k.NamedEntity:
        return this.stateNamedEntity(Y, Z)
    }
  }
  stateNumericStart(Y, Z) {
    if (Z >= Y.length) return -1
    if ((Y.charCodeAt(Z) | HZ) === E.LOWER_X)
      return ((this.state = k.NumericHex), (this.consumed += 1), this.stateNumericHex(Y, Z + 1))
    return ((this.state = k.NumericDecimal), this.stateNumericDecimal(Y, Z))
  }
  stateNumericHex(Y, Z) {
    while (Z < Y.length) {
      let K = Y.charCodeAt(Z)
      if (m4(K) || o6(K)) {
        let J = K <= E.NINE ? K - E.ZERO : (K | HZ) - E.LOWER_A + 10
        ;((this.result = this.result * 16 + J), this.consumed++, Z++)
      } else return this.emitNumericEntity(K, 3)
    }
    return -1
  }
  stateNumericDecimal(Y, Z) {
    while (Z < Y.length) {
      let K = Y.charCodeAt(Z)
      if (m4(K)) ((this.result = this.result * 10 + (K - E.ZERO)), this.consumed++, Z++)
      else return this.emitNumericEntity(K, 2)
    }
    return -1
  }
  emitNumericEntity(Y, Z) {
    var K
    if (this.consumed <= Z)
      return (
        (K = this.errors) === null ||
          K === void 0 ||
          K.absenceOfDigitsInNumericCharacterReference(this.consumed),
        0
      )
    if (Y === E.SEMI) this.consumed += 1
    else if (this.decodeMode === K0.Strict) return 0
    if ((this.emitCodePoint(_4(this.result), this.consumed), this.errors)) {
      if (Y !== E.SEMI) this.errors.missingSemicolonAfterCharacterReference()
      this.errors.validateNumericCharacterReference(this.result)
    }
    return this.consumed
  }
  stateNamedEntity(Y, Z) {
    let { decodeTree: K } = this,
      J = K[this.treeIndex],
      Q = (J & T.VALUE_LENGTH) >> 14
    while (Z < Y.length) {
      if (Q === 0 && (J & T.FLAG13) !== 0) {
        let z = (J & T.BRANCH_LENGTH) >> 7
        if (this.runConsumed === 0) {
          let F = J & T.JUMP_TABLE
          if (Y.charCodeAt(Z) !== F)
            return this.result === 0 ? 0 : this.emitNotTerminatedNamedEntity()
          ;(Z++, this.excess++, this.runConsumed++)
        }
        while (this.runConsumed < z) {
          if (Z >= Y.length) return -1
          let F = this.runConsumed - 1,
            q = K[this.treeIndex + 1 + (F >> 1)],
            w = F % 2 === 0 ? q & 255 : (q >> 8) & 255
          if (Y.charCodeAt(Z) !== w)
            return (
              (this.runConsumed = 0), this.result === 0 ? 0 : this.emitNotTerminatedNamedEntity()
            )
          ;(Z++, this.excess++, this.runConsumed++)
        }
        ;((this.runConsumed = 0),
          (this.treeIndex += 1 + (z >> 1)),
          (J = K[this.treeIndex]),
          (Q = (J & T.VALUE_LENGTH) >> 14))
      }
      if (Z >= Y.length) break
      let V = Y.charCodeAt(Z)
      if (V === E.SEMI && Q !== 0 && (J & T.FLAG13) !== 0)
        return this.emitNamedEntityData(this.treeIndex, Q, this.consumed + this.excess)
      if (((this.treeIndex = Y7(K, J, this.treeIndex + Math.max(1, Q), V)), this.treeIndex < 0))
        return this.result === 0 || (this.decodeMode === K0.Attribute && (Q === 0 || e6(V)))
          ? 0
          : this.emitNotTerminatedNamedEntity()
      if (((J = K[this.treeIndex]), (Q = (J & T.VALUE_LENGTH) >> 14), Q !== 0)) {
        if (V === E.SEMI)
          return this.emitNamedEntityData(this.treeIndex, Q, this.consumed + this.excess)
        if (this.decodeMode !== K0.Strict && (J & T.FLAG13) === 0)
          ((this.result = this.treeIndex), (this.consumed += this.excess), (this.excess = 0))
      }
      ;(Z++, this.excess++)
    }
    return -1
  }
  emitNotTerminatedNamedEntity() {
    var Y
    let { result: Z, decodeTree: K } = this,
      J = (K[Z] & T.VALUE_LENGTH) >> 14
    return (
      this.emitNamedEntityData(Z, J, this.consumed),
      (Y = this.errors) === null || Y === void 0 || Y.missingSemicolonAfterCharacterReference(),
      this.consumed
    )
  }
  emitNamedEntityData(Y, Z, K) {
    let { decodeTree: J } = this
    if ((this.emitCodePoint(Z === 1 ? J[Y] & ~(T.VALUE_LENGTH | T.FLAG13) : J[Y + 1], K), Z === 3))
      this.emitCodePoint(J[Y + 2], K)
    return K
  }
  end() {
    var Y
    switch (this.state) {
      case k.NamedEntity:
        return this.result !== 0 &&
          (this.decodeMode !== K0.Attribute || this.result === this.treeIndex)
          ? this.emitNotTerminatedNamedEntity()
          : 0
      case k.NumericDecimal:
        return this.emitNumericEntity(0, 2)
      case k.NumericHex:
        return this.emitNumericEntity(0, 3)
      case k.NumericStart:
        return (
          (Y = this.errors) === null ||
            Y === void 0 ||
            Y.absenceOfDigitsInNumericCharacterReference(this.consumed),
          0
        )
      case k.EntityStart:
        return 0
    }
  }
}
function Y7(Y, Z, K, J) {
  let Q = (Z & T.BRANCH_LENGTH) >> 7,
    V = Z & T.JUMP_TABLE
  if (Q === 0) return V !== 0 && J === V ? K : -1
  if (V) {
    let w = J - V
    return w < 0 || w >= Q ? -1 : Y[K + w] - 1
  }
  let z = (Q + 1) >> 1,
    F = 0,
    q = Q - 1
  while (F <= q) {
    let w = (F + q) >>> 1,
      j = w >> 1,
      b = (Y[K + j] >> ((w & 1) * 8)) & 255
    if (b < J) F = w + 1
    else if (b > J) q = w - 1
    else return Y[K + z + w]
  }
  return -1
}
var M
;(function (Y) {
  ;((Y[(Y.Tab = 9)] = 'Tab'),
    (Y[(Y.NewLine = 10)] = 'NewLine'),
    (Y[(Y.FormFeed = 12)] = 'FormFeed'),
    (Y[(Y.CarriageReturn = 13)] = 'CarriageReturn'),
    (Y[(Y.Space = 32)] = 'Space'),
    (Y[(Y.ExclamationMark = 33)] = 'ExclamationMark'),
    (Y[(Y.Number = 35)] = 'Number'),
    (Y[(Y.Amp = 38)] = 'Amp'),
    (Y[(Y.SingleQuote = 39)] = 'SingleQuote'),
    (Y[(Y.DoubleQuote = 34)] = 'DoubleQuote'),
    (Y[(Y.Dash = 45)] = 'Dash'),
    (Y[(Y.Slash = 47)] = 'Slash'),
    (Y[(Y.Zero = 48)] = 'Zero'),
    (Y[(Y.Nine = 57)] = 'Nine'),
    (Y[(Y.Semi = 59)] = 'Semi'),
    (Y[(Y.Lt = 60)] = 'Lt'),
    (Y[(Y.Eq = 61)] = 'Eq'),
    (Y[(Y.Gt = 62)] = 'Gt'),
    (Y[(Y.Questionmark = 63)] = 'Questionmark'),
    (Y[(Y.UpperA = 65)] = 'UpperA'),
    (Y[(Y.LowerA = 97)] = 'LowerA'),
    (Y[(Y.UpperF = 70)] = 'UpperF'),
    (Y[(Y.LowerF = 102)] = 'LowerF'),
    (Y[(Y.UpperZ = 90)] = 'UpperZ'),
    (Y[(Y.LowerZ = 122)] = 'LowerZ'),
    (Y[(Y.LowerX = 120)] = 'LowerX'),
    (Y[(Y.OpeningSquareBracket = 91)] = 'OpeningSquareBracket'))
})(M || (M = {}))
var P
;(function (Y) {
  ;((Y[(Y.Text = 1)] = 'Text'),
    (Y[(Y.BeforeTagName = 2)] = 'BeforeTagName'),
    (Y[(Y.InTagName = 3)] = 'InTagName'),
    (Y[(Y.InSelfClosingTag = 4)] = 'InSelfClosingTag'),
    (Y[(Y.BeforeClosingTagName = 5)] = 'BeforeClosingTagName'),
    (Y[(Y.InClosingTagName = 6)] = 'InClosingTagName'),
    (Y[(Y.AfterClosingTagName = 7)] = 'AfterClosingTagName'),
    (Y[(Y.BeforeAttributeName = 8)] = 'BeforeAttributeName'),
    (Y[(Y.InAttributeName = 9)] = 'InAttributeName'),
    (Y[(Y.AfterAttributeName = 10)] = 'AfterAttributeName'),
    (Y[(Y.BeforeAttributeValue = 11)] = 'BeforeAttributeValue'),
    (Y[(Y.InAttributeValueDq = 12)] = 'InAttributeValueDq'),
    (Y[(Y.InAttributeValueSq = 13)] = 'InAttributeValueSq'),
    (Y[(Y.InAttributeValueNq = 14)] = 'InAttributeValueNq'),
    (Y[(Y.BeforeDeclaration = 15)] = 'BeforeDeclaration'),
    (Y[(Y.InDeclaration = 16)] = 'InDeclaration'),
    (Y[(Y.InProcessingInstruction = 17)] = 'InProcessingInstruction'),
    (Y[(Y.BeforeComment = 18)] = 'BeforeComment'),
    (Y[(Y.CDATASequence = 19)] = 'CDATASequence'),
    (Y[(Y.InSpecialComment = 20)] = 'InSpecialComment'),
    (Y[(Y.InCommentLike = 21)] = 'InCommentLike'),
    (Y[(Y.BeforeSpecialS = 22)] = 'BeforeSpecialS'),
    (Y[(Y.BeforeSpecialT = 23)] = 'BeforeSpecialT'),
    (Y[(Y.SpecialStartSequence = 24)] = 'SpecialStartSequence'),
    (Y[(Y.InSpecialTag = 25)] = 'InSpecialTag'),
    (Y[(Y.InEntity = 26)] = 'InEntity'))
})(P || (P = {}))
function q0(Y) {
  return (
    Y === M.Space || Y === M.NewLine || Y === M.Tab || Y === M.FormFeed || Y === M.CarriageReturn
  )
}
function T1(Y) {
  return Y === M.Slash || Y === M.Gt || q0(Y)
}
function Z7(Y) {
  return (Y >= M.LowerA && Y <= M.LowerZ) || (Y >= M.UpperA && Y <= M.UpperZ)
}
var J0
;(function (Y) {
  ;((Y[(Y.NoValue = 0)] = 'NoValue'),
    (Y[(Y.Unquoted = 1)] = 'Unquoted'),
    (Y[(Y.Single = 2)] = 'Single'),
    (Y[(Y.Double = 3)] = 'Double'))
})(J0 || (J0 = {}))
var I = {
  Cdata: new Uint8Array([67, 68, 65, 84, 65, 91]),
  CdataEnd: new Uint8Array([93, 93, 62]),
  CommentEnd: new Uint8Array([45, 45, 62]),
  ScriptEnd: new Uint8Array([60, 47, 115, 99, 114, 105, 112, 116]),
  StyleEnd: new Uint8Array([60, 47, 115, 116, 121, 108, 101]),
  TitleEnd: new Uint8Array([60, 47, 116, 105, 116, 108, 101]),
  TextareaEnd: new Uint8Array([60, 47, 116, 101, 120, 116, 97, 114, 101, 97]),
  XmpEnd: new Uint8Array([60, 47, 120, 109, 112]),
}
class m1 {
  constructor({ xmlMode: Y = !1, decodeEntities: Z = !0 }, K) {
    ;((this.cbs = K),
      (this.state = P.Text),
      (this.buffer = ''),
      (this.sectionStart = 0),
      (this.index = 0),
      (this.entityStart = 0),
      (this.baseState = P.Text),
      (this.isSpecial = !1),
      (this.running = !0),
      (this.offset = 0),
      (this.currentSequence = void 0),
      (this.sequenceIndex = 0),
      (this.xmlMode = Y),
      (this.decodeEntities = Z),
      (this.entityDecoder = new i4(Y ? T4 : A4, (J, Q) => this.emitCodePoint(J, Q))))
  }
  reset() {
    ;((this.state = P.Text),
      (this.buffer = ''),
      (this.sectionStart = 0),
      (this.index = 0),
      (this.baseState = P.Text),
      (this.currentSequence = void 0),
      (this.running = !0),
      (this.offset = 0))
  }
  write(Y) {
    ;((this.offset += this.buffer.length), (this.buffer = Y), this.parse())
  }
  end() {
    if (this.running) this.finish()
  }
  pause() {
    this.running = !1
  }
  resume() {
    if (((this.running = !0), this.index < this.buffer.length + this.offset)) this.parse()
  }
  stateText(Y) {
    if (Y === M.Lt || (!this.decodeEntities && this.fastForwardTo(M.Lt))) {
      if (this.index > this.sectionStart) this.cbs.ontext(this.sectionStart, this.index)
      ;((this.state = P.BeforeTagName), (this.sectionStart = this.index))
    } else if (this.decodeEntities && Y === M.Amp) this.startEntity()
  }
  stateSpecialStartSequence(Y) {
    let Z = this.sequenceIndex === this.currentSequence.length
    if (!(Z ? T1(Y) : (Y | 32) === this.currentSequence[this.sequenceIndex])) this.isSpecial = !1
    else if (!Z) {
      this.sequenceIndex++
      return
    }
    ;((this.sequenceIndex = 0), (this.state = P.InTagName), this.stateInTagName(Y))
  }
  stateInSpecialTag(Y) {
    if (this.sequenceIndex === this.currentSequence.length) {
      if (Y === M.Gt || q0(Y)) {
        let Z = this.index - this.currentSequence.length
        if (this.sectionStart < Z) {
          let K = this.index
          ;((this.index = Z), this.cbs.ontext(this.sectionStart, Z), (this.index = K))
        }
        ;((this.isSpecial = !1), (this.sectionStart = Z + 2), this.stateInClosingTagName(Y))
        return
      }
      this.sequenceIndex = 0
    }
    if ((Y | 32) === this.currentSequence[this.sequenceIndex]) this.sequenceIndex += 1
    else if (this.sequenceIndex === 0) {
      if (this.currentSequence === I.TitleEnd) {
        if (this.decodeEntities && Y === M.Amp) this.startEntity()
      } else if (this.fastForwardTo(M.Lt)) this.sequenceIndex = 1
    } else this.sequenceIndex = Number(Y === M.Lt)
  }
  stateCDATASequence(Y) {
    if (Y === I.Cdata[this.sequenceIndex]) {
      if (++this.sequenceIndex === I.Cdata.length)
        ((this.state = P.InCommentLike),
          (this.currentSequence = I.CdataEnd),
          (this.sequenceIndex = 0),
          (this.sectionStart = this.index + 1))
    } else ((this.sequenceIndex = 0), (this.state = P.InDeclaration), this.stateInDeclaration(Y))
  }
  fastForwardTo(Y) {
    while (++this.index < this.buffer.length + this.offset)
      if (this.buffer.charCodeAt(this.index - this.offset) === Y) return !0
    return ((this.index = this.buffer.length + this.offset - 1), !1)
  }
  stateInCommentLike(Y) {
    if (Y === this.currentSequence[this.sequenceIndex]) {
      if (++this.sequenceIndex === this.currentSequence.length) {
        if (this.currentSequence === I.CdataEnd) this.cbs.oncdata(this.sectionStart, this.index, 2)
        else this.cbs.oncomment(this.sectionStart, this.index, 2)
        ;((this.sequenceIndex = 0), (this.sectionStart = this.index + 1), (this.state = P.Text))
      }
    } else if (this.sequenceIndex === 0) {
      if (this.fastForwardTo(this.currentSequence[0])) this.sequenceIndex = 1
    } else if (Y !== this.currentSequence[this.sequenceIndex - 1]) this.sequenceIndex = 0
  }
  isTagStartChar(Y) {
    return this.xmlMode ? !T1(Y) : Z7(Y)
  }
  startSpecial(Y, Z) {
    ;((this.isSpecial = !0),
      (this.currentSequence = Y),
      (this.sequenceIndex = Z),
      (this.state = P.SpecialStartSequence))
  }
  stateBeforeTagName(Y) {
    if (Y === M.ExclamationMark)
      ((this.state = P.BeforeDeclaration), (this.sectionStart = this.index + 1))
    else if (Y === M.Questionmark)
      ((this.state = P.InProcessingInstruction), (this.sectionStart = this.index + 1))
    else if (this.isTagStartChar(Y)) {
      let Z = Y | 32
      if (((this.sectionStart = this.index), this.xmlMode)) this.state = P.InTagName
      else if (Z === I.ScriptEnd[2]) this.state = P.BeforeSpecialS
      else if (Z === I.TitleEnd[2] || Z === I.XmpEnd[2]) this.state = P.BeforeSpecialT
      else this.state = P.InTagName
    } else if (Y === M.Slash) this.state = P.BeforeClosingTagName
    else ((this.state = P.Text), this.stateText(Y))
  }
  stateInTagName(Y) {
    if (T1(Y))
      (this.cbs.onopentagname(this.sectionStart, this.index),
        (this.sectionStart = -1),
        (this.state = P.BeforeAttributeName),
        this.stateBeforeAttributeName(Y))
  }
  stateBeforeClosingTagName(Y) {
    if (q0(Y));
    else if (Y === M.Gt) this.state = P.Text
    else
      ((this.state = this.isTagStartChar(Y) ? P.InClosingTagName : P.InSpecialComment),
        (this.sectionStart = this.index))
  }
  stateInClosingTagName(Y) {
    if (Y === M.Gt || q0(Y))
      (this.cbs.onclosetag(this.sectionStart, this.index),
        (this.sectionStart = -1),
        (this.state = P.AfterClosingTagName),
        this.stateAfterClosingTagName(Y))
  }
  stateAfterClosingTagName(Y) {
    if (Y === M.Gt || this.fastForwardTo(M.Gt))
      ((this.state = P.Text), (this.sectionStart = this.index + 1))
  }
  stateBeforeAttributeName(Y) {
    if (Y === M.Gt) {
      if ((this.cbs.onopentagend(this.index), this.isSpecial))
        ((this.state = P.InSpecialTag), (this.sequenceIndex = 0))
      else this.state = P.Text
      this.sectionStart = this.index + 1
    } else if (Y === M.Slash) this.state = P.InSelfClosingTag
    else if (!q0(Y)) ((this.state = P.InAttributeName), (this.sectionStart = this.index))
  }
  stateInSelfClosingTag(Y) {
    if (Y === M.Gt)
      (this.cbs.onselfclosingtag(this.index),
        (this.state = P.Text),
        (this.sectionStart = this.index + 1),
        (this.isSpecial = !1))
    else if (!q0(Y)) ((this.state = P.BeforeAttributeName), this.stateBeforeAttributeName(Y))
  }
  stateInAttributeName(Y) {
    if (Y === M.Eq || T1(Y))
      (this.cbs.onattribname(this.sectionStart, this.index),
        (this.sectionStart = this.index),
        (this.state = P.AfterAttributeName),
        this.stateAfterAttributeName(Y))
  }
  stateAfterAttributeName(Y) {
    if (Y === M.Eq) this.state = P.BeforeAttributeValue
    else if (Y === M.Slash || Y === M.Gt)
      (this.cbs.onattribend(J0.NoValue, this.sectionStart),
        (this.sectionStart = -1),
        (this.state = P.BeforeAttributeName),
        this.stateBeforeAttributeName(Y))
    else if (!q0(Y))
      (this.cbs.onattribend(J0.NoValue, this.sectionStart),
        (this.state = P.InAttributeName),
        (this.sectionStart = this.index))
  }
  stateBeforeAttributeValue(Y) {
    if (Y === M.DoubleQuote)
      ((this.state = P.InAttributeValueDq), (this.sectionStart = this.index + 1))
    else if (Y === M.SingleQuote)
      ((this.state = P.InAttributeValueSq), (this.sectionStart = this.index + 1))
    else if (!q0(Y))
      ((this.sectionStart = this.index),
        (this.state = P.InAttributeValueNq),
        this.stateInAttributeValueNoQuotes(Y))
  }
  handleInAttributeValue(Y, Z) {
    if (Y === Z || (!this.decodeEntities && this.fastForwardTo(Z)))
      (this.cbs.onattribdata(this.sectionStart, this.index),
        (this.sectionStart = -1),
        this.cbs.onattribend(Z === M.DoubleQuote ? J0.Double : J0.Single, this.index + 1),
        (this.state = P.BeforeAttributeName))
    else if (this.decodeEntities && Y === M.Amp) this.startEntity()
  }
  stateInAttributeValueDoubleQuotes(Y) {
    this.handleInAttributeValue(Y, M.DoubleQuote)
  }
  stateInAttributeValueSingleQuotes(Y) {
    this.handleInAttributeValue(Y, M.SingleQuote)
  }
  stateInAttributeValueNoQuotes(Y) {
    if (q0(Y) || Y === M.Gt)
      (this.cbs.onattribdata(this.sectionStart, this.index),
        (this.sectionStart = -1),
        this.cbs.onattribend(J0.Unquoted, this.index),
        (this.state = P.BeforeAttributeName),
        this.stateBeforeAttributeName(Y))
    else if (this.decodeEntities && Y === M.Amp) this.startEntity()
  }
  stateBeforeDeclaration(Y) {
    if (Y === M.OpeningSquareBracket) ((this.state = P.CDATASequence), (this.sequenceIndex = 0))
    else this.state = Y === M.Dash ? P.BeforeComment : P.InDeclaration
  }
  stateInDeclaration(Y) {
    if (Y === M.Gt || this.fastForwardTo(M.Gt))
      (this.cbs.ondeclaration(this.sectionStart, this.index),
        (this.state = P.Text),
        (this.sectionStart = this.index + 1))
  }
  stateInProcessingInstruction(Y) {
    if (Y === M.Gt || this.fastForwardTo(M.Gt))
      (this.cbs.onprocessinginstruction(this.sectionStart, this.index),
        (this.state = P.Text),
        (this.sectionStart = this.index + 1))
  }
  stateBeforeComment(Y) {
    if (Y === M.Dash)
      ((this.state = P.InCommentLike),
        (this.currentSequence = I.CommentEnd),
        (this.sequenceIndex = 2),
        (this.sectionStart = this.index + 1))
    else this.state = P.InDeclaration
  }
  stateInSpecialComment(Y) {
    if (Y === M.Gt || this.fastForwardTo(M.Gt))
      (this.cbs.oncomment(this.sectionStart, this.index, 0),
        (this.state = P.Text),
        (this.sectionStart = this.index + 1))
  }
  stateBeforeSpecialS(Y) {
    let Z = Y | 32
    if (Z === I.ScriptEnd[3]) this.startSpecial(I.ScriptEnd, 4)
    else if (Z === I.StyleEnd[3]) this.startSpecial(I.StyleEnd, 4)
    else ((this.state = P.InTagName), this.stateInTagName(Y))
  }
  stateBeforeSpecialT(Y) {
    switch (Y | 32) {
      case I.TitleEnd[3]: {
        this.startSpecial(I.TitleEnd, 4)
        break
      }
      case I.TextareaEnd[3]: {
        this.startSpecial(I.TextareaEnd, 4)
        break
      }
      case I.XmpEnd[3]: {
        this.startSpecial(I.XmpEnd, 4)
        break
      }
      default:
        ;((this.state = P.InTagName), this.stateInTagName(Y))
    }
  }
  startEntity() {
    ;((this.baseState = this.state),
      (this.state = P.InEntity),
      (this.entityStart = this.index),
      this.entityDecoder.startEntity(
        this.xmlMode
          ? K0.Strict
          : this.baseState === P.Text || this.baseState === P.InSpecialTag
            ? K0.Legacy
            : K0.Attribute,
      ))
  }
  stateInEntity() {
    let Y = this.index - this.offset,
      Z = this.entityDecoder.write(this.buffer, Y)
    if (Z >= 0) {
      if (((this.state = this.baseState), Z === 0)) this.index -= 1
    } else {
      if (Y < this.buffer.length && this.buffer.charCodeAt(Y) === M.Amp) {
        ;((this.state = this.baseState), (this.index -= 1))
        return
      }
      this.index = this.offset + this.buffer.length - 1
    }
  }
  cleanup() {
    if (this.running && this.sectionStart !== this.index) {
      if (this.state === P.Text || (this.state === P.InSpecialTag && this.sequenceIndex === 0))
        (this.cbs.ontext(this.sectionStart, this.index), (this.sectionStart = this.index))
      else if (
        this.state === P.InAttributeValueDq ||
        this.state === P.InAttributeValueSq ||
        this.state === P.InAttributeValueNq
      )
        (this.cbs.onattribdata(this.sectionStart, this.index), (this.sectionStart = this.index))
    }
  }
  shouldContinue() {
    return this.index < this.buffer.length + this.offset && this.running
  }
  parse() {
    while (this.shouldContinue()) {
      let Y = this.buffer.charCodeAt(this.index - this.offset)
      switch (this.state) {
        case P.Text: {
          this.stateText(Y)
          break
        }
        case P.SpecialStartSequence: {
          this.stateSpecialStartSequence(Y)
          break
        }
        case P.InSpecialTag: {
          this.stateInSpecialTag(Y)
          break
        }
        case P.CDATASequence: {
          this.stateCDATASequence(Y)
          break
        }
        case P.InAttributeValueDq: {
          this.stateInAttributeValueDoubleQuotes(Y)
          break
        }
        case P.InAttributeName: {
          this.stateInAttributeName(Y)
          break
        }
        case P.InCommentLike: {
          this.stateInCommentLike(Y)
          break
        }
        case P.InSpecialComment: {
          this.stateInSpecialComment(Y)
          break
        }
        case P.BeforeAttributeName: {
          this.stateBeforeAttributeName(Y)
          break
        }
        case P.InTagName: {
          this.stateInTagName(Y)
          break
        }
        case P.InClosingTagName: {
          this.stateInClosingTagName(Y)
          break
        }
        case P.BeforeTagName: {
          this.stateBeforeTagName(Y)
          break
        }
        case P.AfterAttributeName: {
          this.stateAfterAttributeName(Y)
          break
        }
        case P.InAttributeValueSq: {
          this.stateInAttributeValueSingleQuotes(Y)
          break
        }
        case P.BeforeAttributeValue: {
          this.stateBeforeAttributeValue(Y)
          break
        }
        case P.BeforeClosingTagName: {
          this.stateBeforeClosingTagName(Y)
          break
        }
        case P.AfterClosingTagName: {
          this.stateAfterClosingTagName(Y)
          break
        }
        case P.BeforeSpecialS: {
          this.stateBeforeSpecialS(Y)
          break
        }
        case P.BeforeSpecialT: {
          this.stateBeforeSpecialT(Y)
          break
        }
        case P.InAttributeValueNq: {
          this.stateInAttributeValueNoQuotes(Y)
          break
        }
        case P.InSelfClosingTag: {
          this.stateInSelfClosingTag(Y)
          break
        }
        case P.InDeclaration: {
          this.stateInDeclaration(Y)
          break
        }
        case P.BeforeDeclaration: {
          this.stateBeforeDeclaration(Y)
          break
        }
        case P.BeforeComment: {
          this.stateBeforeComment(Y)
          break
        }
        case P.InProcessingInstruction: {
          this.stateInProcessingInstruction(Y)
          break
        }
        case P.InEntity: {
          this.stateInEntity()
          break
        }
      }
      this.index++
    }
    this.cleanup()
  }
  finish() {
    if (this.state === P.InEntity) (this.entityDecoder.end(), (this.state = this.baseState))
    ;(this.handleTrailingData(), this.cbs.onend())
  }
  handleTrailingData() {
    let Y = this.buffer.length + this.offset
    if (this.sectionStart >= Y) return
    if (this.state === P.InCommentLike)
      if (this.currentSequence === I.CdataEnd) this.cbs.oncdata(this.sectionStart, Y, 0)
      else this.cbs.oncomment(this.sectionStart, Y, 0)
    else if (
      this.state === P.InTagName ||
      this.state === P.BeforeAttributeName ||
      this.state === P.BeforeAttributeValue ||
      this.state === P.AfterAttributeName ||
      this.state === P.InAttributeName ||
      this.state === P.InAttributeValueSq ||
      this.state === P.InAttributeValueDq ||
      this.state === P.InAttributeValueNq ||
      this.state === P.InClosingTagName
    );
    else this.cbs.ontext(this.sectionStart, Y)
  }
  emitCodePoint(Y, Z) {
    if (this.baseState !== P.Text && this.baseState !== P.InSpecialTag) {
      if (this.sectionStart < this.entityStart)
        this.cbs.onattribdata(this.sectionStart, this.entityStart)
      ;((this.sectionStart = this.entityStart + Z),
        (this.index = this.sectionStart - 1),
        this.cbs.onattribentity(Y))
    } else {
      if (this.sectionStart < this.entityStart) this.cbs.ontext(this.sectionStart, this.entityStart)
      ;((this.sectionStart = this.entityStart + Z),
        (this.index = this.sectionStart - 1),
        this.cbs.ontextentity(Y, this.sectionStart))
    }
  }
}
var d0 = new Set(['input', 'option', 'optgroup', 'select', 'button', 'datalist', 'textarea']),
  D = new Set(['p']),
  WZ = new Set(['thead', 'tbody']),
  UZ = new Set(['dd', 'dt']),
  FZ = new Set(['rt', 'rp']),
  K7 = new Map([
    ['tr', new Set(['tr', 'th', 'td'])],
    ['th', new Set(['th'])],
    ['td', new Set(['thead', 'th', 'td'])],
    ['body', new Set(['head', 'link', 'script'])],
    ['li', new Set(['li'])],
    ['p', D],
    ['h1', D],
    ['h2', D],
    ['h3', D],
    ['h4', D],
    ['h5', D],
    ['h6', D],
    ['select', d0],
    ['input', d0],
    ['output', d0],
    ['button', d0],
    ['datalist', d0],
    ['textarea', d0],
    ['option', new Set(['option'])],
    ['optgroup', new Set(['optgroup', 'option'])],
    ['dd', UZ],
    ['dt', UZ],
    ['address', D],
    ['article', D],
    ['aside', D],
    ['blockquote', D],
    ['details', D],
    ['div', D],
    ['dl', D],
    ['fieldset', D],
    ['figcaption', D],
    ['figure', D],
    ['footer', D],
    ['form', D],
    ['header', D],
    ['hr', D],
    ['main', D],
    ['nav', D],
    ['ol', D],
    ['pre', D],
    ['section', D],
    ['table', D],
    ['ul', D],
    ['rt', FZ],
    ['rp', FZ],
    ['tbody', WZ],
    ['tfoot', WZ],
  ]),
  J7 = new Set([
    'area',
    'base',
    'basefont',
    'br',
    'col',
    'command',
    'embed',
    'frame',
    'hr',
    'img',
    'input',
    'isindex',
    'keygen',
    'link',
    'meta',
    'param',
    'source',
    'track',
    'wbr',
  ]),
  qZ = new Set(['math', 'svg']),
  BZ = new Set([
    'mi',
    'mo',
    'mn',
    'ms',
    'mtext',
    'annotation-xml',
    'foreignobject',
    'desc',
    'title',
  ]),
  X7 = /\s|\//
class c4 {
  constructor(Y, Z = {}) {
    var K, J, Q, V, z, F
    ;((this.options = Z),
      (this.startIndex = 0),
      (this.endIndex = 0),
      (this.openTagStart = 0),
      (this.tagname = ''),
      (this.attribname = ''),
      (this.attribvalue = ''),
      (this.attribs = null),
      (this.stack = []),
      (this.buffers = []),
      (this.bufferOffset = 0),
      (this.writeIndex = 0),
      (this.ended = !1),
      (this.cbs = Y !== null && Y !== void 0 ? Y : {}),
      (this.htmlMode = !this.options.xmlMode),
      (this.lowerCaseTagNames = (K = Z.lowerCaseTags) !== null && K !== void 0 ? K : this.htmlMode),
      (this.lowerCaseAttributeNames =
        (J = Z.lowerCaseAttributeNames) !== null && J !== void 0 ? J : this.htmlMode),
      (this.recognizeSelfClosing =
        (Q = Z.recognizeSelfClosing) !== null && Q !== void 0 ? Q : !this.htmlMode),
      (this.tokenizer = new ((V = Z.Tokenizer) !== null && V !== void 0 ? V : m1)(
        this.options,
        this,
      )),
      (this.foreignContext = [!this.htmlMode]),
      (F = (z = this.cbs).onparserinit) === null || F === void 0 || F.call(z, this))
  }
  ontext(Y, Z) {
    var K, J
    let Q = this.getSlice(Y, Z)
    ;((this.endIndex = Z - 1),
      (J = (K = this.cbs).ontext) === null || J === void 0 || J.call(K, Q),
      (this.startIndex = Z))
  }
  ontextentity(Y, Z) {
    var K, J
    ;((this.endIndex = Z - 1),
      (J = (K = this.cbs).ontext) === null || J === void 0 || J.call(K, J1(Y)),
      (this.startIndex = Z))
  }
  isVoidElement(Y) {
    return this.htmlMode && J7.has(Y)
  }
  onopentagname(Y, Z) {
    this.endIndex = Z
    let K = this.getSlice(Y, Z)
    if (this.lowerCaseTagNames) K = K.toLowerCase()
    this.emitOpenTag(K)
  }
  emitOpenTag(Y) {
    var Z, K, J, Q
    ;((this.openTagStart = this.startIndex), (this.tagname = Y))
    let V = this.htmlMode && K7.get(Y)
    if (V)
      while (this.stack.length > 0 && V.has(this.stack[0])) {
        let z = this.stack.shift()
        ;(K = (Z = this.cbs).onclosetag) === null || K === void 0 || K.call(Z, z, !0)
      }
    if (!this.isVoidElement(Y)) {
      if ((this.stack.unshift(Y), this.htmlMode)) {
        if (qZ.has(Y)) this.foreignContext.unshift(!0)
        else if (BZ.has(Y)) this.foreignContext.unshift(!1)
      }
    }
    if (
      ((Q = (J = this.cbs).onopentagname) === null || Q === void 0 || Q.call(J, Y),
      this.cbs.onopentag)
    )
      this.attribs = {}
  }
  endOpenTag(Y) {
    var Z, K
    if (((this.startIndex = this.openTagStart), this.attribs))
      ((K = (Z = this.cbs).onopentag) === null ||
        K === void 0 ||
        K.call(Z, this.tagname, this.attribs, Y),
        (this.attribs = null))
    if (this.cbs.onclosetag && this.isVoidElement(this.tagname))
      this.cbs.onclosetag(this.tagname, !0)
    this.tagname = ''
  }
  onopentagend(Y) {
    ;((this.endIndex = Y), this.endOpenTag(!1), (this.startIndex = Y + 1))
  }
  onclosetag(Y, Z) {
    var K, J, Q, V, z, F, q, w
    this.endIndex = Z
    let j = this.getSlice(Y, Z)
    if (this.lowerCaseTagNames) j = j.toLowerCase()
    if (this.htmlMode && (qZ.has(j) || BZ.has(j))) this.foreignContext.shift()
    if (!this.isVoidElement(j)) {
      let O = this.stack.indexOf(j)
      if (O !== -1)
        for (let b = 0; b <= O; b++) {
          let N = this.stack.shift()
          ;(J = (K = this.cbs).onclosetag) === null || J === void 0 || J.call(K, N, b !== O)
        }
      else if (this.htmlMode && j === 'p') (this.emitOpenTag('p'), this.closeCurrentTag(!0))
    } else if (this.htmlMode && j === 'br')
      ((V = (Q = this.cbs).onopentagname) === null || V === void 0 || V.call(Q, 'br'),
        (F = (z = this.cbs).onopentag) === null || F === void 0 || F.call(z, 'br', {}, !0),
        (w = (q = this.cbs).onclosetag) === null || w === void 0 || w.call(q, 'br', !1))
    this.startIndex = Z + 1
  }
  onselfclosingtag(Y) {
    if (((this.endIndex = Y), this.recognizeSelfClosing || this.foreignContext[0]))
      (this.closeCurrentTag(!1), (this.startIndex = Y + 1))
    else this.onopentagend(Y)
  }
  closeCurrentTag(Y) {
    var Z, K
    let J = this.tagname
    if ((this.endOpenTag(Y), this.stack[0] === J))
      ((K = (Z = this.cbs).onclosetag) === null || K === void 0 || K.call(Z, J, !Y),
        this.stack.shift())
  }
  onattribname(Y, Z) {
    this.startIndex = Y
    let K = this.getSlice(Y, Z)
    this.attribname = this.lowerCaseAttributeNames ? K.toLowerCase() : K
  }
  onattribdata(Y, Z) {
    this.attribvalue += this.getSlice(Y, Z)
  }
  onattribentity(Y) {
    this.attribvalue += J1(Y)
  }
  onattribend(Y, Z) {
    var K, J
    if (
      ((this.endIndex = Z),
      (J = (K = this.cbs).onattribute) === null ||
        J === void 0 ||
        J.call(
          K,
          this.attribname,
          this.attribvalue,
          Y === J0.Double ? '"' : Y === J0.Single ? "'" : Y === J0.NoValue ? void 0 : null,
        ),
      this.attribs && !Object.prototype.hasOwnProperty.call(this.attribs, this.attribname))
    )
      this.attribs[this.attribname] = this.attribvalue
    this.attribvalue = ''
  }
  getInstructionName(Y) {
    let Z = Y.search(X7),
      K = Z < 0 ? Y : Y.substr(0, Z)
    if (this.lowerCaseTagNames) K = K.toLowerCase()
    return K
  }
  ondeclaration(Y, Z) {
    this.endIndex = Z
    let K = this.getSlice(Y, Z)
    if (this.cbs.onprocessinginstruction) {
      let J = this.getInstructionName(K)
      this.cbs.onprocessinginstruction(`!${J}`, `!${K}`)
    }
    this.startIndex = Z + 1
  }
  onprocessinginstruction(Y, Z) {
    this.endIndex = Z
    let K = this.getSlice(Y, Z)
    if (this.cbs.onprocessinginstruction) {
      let J = this.getInstructionName(K)
      this.cbs.onprocessinginstruction(`?${J}`, `?${K}`)
    }
    this.startIndex = Z + 1
  }
  oncomment(Y, Z, K) {
    var J, Q, V, z
    ;((this.endIndex = Z),
      (Q = (J = this.cbs).oncomment) === null || Q === void 0 || Q.call(J, this.getSlice(Y, Z - K)),
      (z = (V = this.cbs).oncommentend) === null || z === void 0 || z.call(V),
      (this.startIndex = Z + 1))
  }
  oncdata(Y, Z, K) {
    var J, Q, V, z, F, q, w, j, O, b
    this.endIndex = Z
    let N = this.getSlice(Y, Z - K)
    if (!this.htmlMode || this.options.recognizeCDATA)
      ((Q = (J = this.cbs).oncdatastart) === null || Q === void 0 || Q.call(J),
        (z = (V = this.cbs).ontext) === null || z === void 0 || z.call(V, N),
        (q = (F = this.cbs).oncdataend) === null || q === void 0 || q.call(F))
    else
      ((j = (w = this.cbs).oncomment) === null || j === void 0 || j.call(w, `[CDATA[${N}]]`),
        (b = (O = this.cbs).oncommentend) === null || b === void 0 || b.call(O))
    this.startIndex = Z + 1
  }
  onend() {
    var Y, Z
    if (this.cbs.onclosetag) {
      this.endIndex = this.startIndex
      for (let K = 0; K < this.stack.length; K++) this.cbs.onclosetag(this.stack[K], !0)
    }
    ;(Z = (Y = this.cbs).onend) === null || Z === void 0 || Z.call(Y)
  }
  reset() {
    var Y, Z, K, J
    ;((Z = (Y = this.cbs).onreset) === null || Z === void 0 || Z.call(Y),
      this.tokenizer.reset(),
      (this.tagname = ''),
      (this.attribname = ''),
      (this.attribs = null),
      (this.stack.length = 0),
      (this.startIndex = 0),
      (this.endIndex = 0),
      (J = (K = this.cbs).onparserinit) === null || J === void 0 || J.call(K, this),
      (this.buffers.length = 0),
      (this.foreignContext.length = 0),
      this.foreignContext.unshift(!this.htmlMode),
      (this.bufferOffset = 0),
      (this.writeIndex = 0),
      (this.ended = !1))
  }
  parseComplete(Y) {
    ;(this.reset(), this.end(Y))
  }
  getSlice(Y, Z) {
    while (Y - this.bufferOffset >= this.buffers[0].length) this.shiftBuffer()
    let K = this.buffers[0].slice(Y - this.bufferOffset, Z - this.bufferOffset)
    while (Z - this.bufferOffset > this.buffers[0].length)
      (this.shiftBuffer(), (K += this.buffers[0].slice(0, Z - this.bufferOffset)))
    return K
  }
  shiftBuffer() {
    ;((this.bufferOffset += this.buffers[0].length), this.writeIndex--, this.buffers.shift())
  }
  write(Y) {
    var Z, K
    if (this.ended) {
      ;(K = (Z = this.cbs).onerror) === null ||
        K === void 0 ||
        K.call(Z, Error('.write() after done!'))
      return
    }
    if ((this.buffers.push(Y), this.tokenizer.running)) (this.tokenizer.write(Y), this.writeIndex++)
  }
  end(Y) {
    var Z, K
    if (this.ended) {
      ;(K = (Z = this.cbs).onerror) === null ||
        K === void 0 ||
        K.call(Z, Error('.end() after done!'))
      return
    }
    if (Y) this.write(Y)
    ;((this.ended = !0), this.tokenizer.end())
  }
  pause() {
    this.tokenizer.pause()
  }
  resume() {
    this.tokenizer.resume()
    while (this.tokenizer.running && this.writeIndex < this.buffers.length)
      this.tokenizer.write(this.buffers[this.writeIndex++])
    if (this.ended) this.tokenizer.end()
  }
  parseChunk(Y) {
    this.write(Y)
  }
  done(Y) {
    this.end(Y)
  }
}
function wZ(Y, Z) {
  let K = new C4(void 0, Z)
  return (new c4(K, Z).end(Y), K.root)
}
var d4,
  X1 =
    (d4 = Object.hasOwn) !== null && d4 !== void 0
      ? d4
      : (Y, Z) => Object.prototype.hasOwnProperty.call(Y, Z),
  Q1 = /\s+/,
  l4 = 'data-',
  s4 =
    /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
  Q7 = /^{[^]*}$|^\[[^]*]$/
function i1(Y, Z, K) {
  var J
  if (!Y || !f(Y)) return
  if ((((J = Y.attribs) !== null && J !== void 0) || (Y.attribs = {}), !Z)) return Y.attribs
  if (X1(Y.attribs, Z)) return !K && s4.test(Z) ? Z : Y.attribs[Z]
  if (Y.name === 'option' && Z === 'value') return C0(Y.children)
  if (
    Y.name === 'input' &&
    (Y.attribs.type === 'radio' || Y.attribs.type === 'checkbox') &&
    Z === 'value'
  )
    return 'on'
  return
}
function r0(Y, Z, K) {
  if (K === null) PZ(Y, Z)
  else Y.attribs[Z] = `${K}`
}
function V7(Y, Z) {
  if (typeof Y === 'object' || Z !== void 0) {
    if (typeof Z === 'function') {
      if (typeof Y !== 'string') throw Error('Bad combination of arguments.')
      return G(this, (K, J) => {
        if (f(K)) r0(K, Y, Z.call(K, J, K.attribs[Y]))
      })
    }
    return G(this, K => {
      if (!f(K)) return
      if (typeof Y === 'object')
        for (let J of Object.keys(Y)) {
          let Q = Y[J]
          r0(K, J, Q)
        }
      else r0(K, Y, Z)
    })
  }
  return arguments.length > 1 ? this : i1(this[0], Y, this.options.xmlMode)
}
function LZ(Y, Z, K) {
  return Z in Y ? Y[Z] : !K && s4.test(Z) ? i1(Y, Z, !1) !== void 0 : i1(Y, Z, K)
}
function r4(Y, Z, K, J) {
  if (Z in Y) Y[Z] = K
  else r0(Y, Z, !J && s4.test(Z) ? (K ? '' : null) : `${K}`)
}
function z7(Y, Z) {
  var K
  if (typeof Y === 'string' && Z === void 0) {
    let J = this[0]
    if (!J) return
    switch (Y) {
      case 'style': {
        let Q = this.css(),
          V = Object.keys(Q)
        for (let z = 0; z < V.length; z++) Q[z] = V[z]
        return ((Q.length = V.length), Q)
      }
      case 'tagName':
      case 'nodeName': {
        if (!f(J)) return
        return J.name.toUpperCase()
      }
      case 'href':
      case 'src': {
        if (!f(J)) return
        let Q = (K = J.attribs) === null || K === void 0 ? void 0 : K[Y]
        if (
          typeof URL < 'u' &&
          ((Y === 'href' && (J.tagName === 'a' || J.tagName === 'link')) ||
            (Y === 'src' &&
              (J.tagName === 'img' ||
                J.tagName === 'iframe' ||
                J.tagName === 'audio' ||
                J.tagName === 'video' ||
                J.tagName === 'source'))) &&
          Q !== void 0 &&
          this.options.baseURI
        )
          return new URL(Q, this.options.baseURI).href
        return Q
      }
      case 'innerText':
        return Y1(J)
      case 'textContent':
        return U0(J)
      case 'outerHTML': {
        if (J.type === p.Root) return this.html()
        return this.clone().wrap('<container />').parent().html()
      }
      case 'innerHTML':
        return this.html()
      default: {
        if (!f(J)) return
        return LZ(J, Y, this.options.xmlMode)
      }
    }
  }
  if (typeof Y === 'object' || Z !== void 0) {
    if (typeof Z === 'function') {
      if (typeof Y === 'object') throw TypeError('Bad combination of arguments.')
      return G(this, (J, Q) => {
        if (f(J)) r4(J, Y, Z.call(J, Q, LZ(J, Y, this.options.xmlMode)), this.options.xmlMode)
      })
    }
    return G(this, J => {
      if (!f(J)) return
      if (typeof Y === 'object')
        for (let Q of Object.keys(Y)) {
          let V = Y[Q]
          r4(J, Q, V, this.options.xmlMode)
        }
      else r4(J, Y, Z, this.options.xmlMode)
    })
  }
  return
}
function jZ(Y, Z, K) {
  var J
  if ((((J = Y.data) !== null && J !== void 0) || (Y.data = {}), typeof Z === 'object'))
    Object.assign(Y.data, Z)
  else if (typeof Z === 'string' && K !== void 0) Y.data[Z] = K
}
function H7(Y) {
  for (let Z of Object.keys(Y.attribs)) {
    if (!Z.startsWith(l4)) continue
    let K = VZ(Z.slice(l4.length))
    if (!X1(Y.data, K)) Y.data[K] = RZ(Y.attribs[Z])
  }
  return Y.data
}
function W7(Y, Z) {
  let K = l4 + zZ(Z),
    J = Y.data
  if (X1(J, Z)) return J[Z]
  if (X1(Y.attribs, K)) return (J[Z] = RZ(Y.attribs[K]))
  return
}
function RZ(Y) {
  if (Y === 'null') return null
  if (Y === 'true') return !0
  if (Y === 'false') return !1
  let Z = Number(Y)
  if (Y === String(Z)) return Z
  if (Q7.test(Y))
    try {
      return JSON.parse(Y)
    } catch {}
  return Y
}
function U7(Y, Z) {
  var K
  let J = this[0]
  if (!J || !f(J)) return
  let Q = J
  if ((((K = Q.data) !== null && K !== void 0) || (Q.data = {}), Y == null)) return H7(Q)
  if (typeof Y === 'object' || Z !== void 0)
    return (
      G(this, V => {
        if (f(V))
          if (typeof Y === 'object') jZ(V, Y)
          else jZ(V, Y, Z)
      }),
      this
    )
  return W7(Q, Y)
}
function F7(Y) {
  let Z = arguments.length === 0,
    K = this[0]
  if (!K || !f(K)) return Z ? void 0 : this
  switch (K.name) {
    case 'textarea':
      return this.text(Y)
    case 'select': {
      let J = this.find('option:selected')
      if (!Z) {
        if (this.attr('multiple') == null && typeof Y === 'object') return this
        this.find('option').removeAttr('selected')
        let Q = typeof Y === 'object' ? Y : [Y]
        for (let V of Q) this.find(`option[value="${V}"]`).attr('selected', '')
        return this
      }
      return this.attr('multiple') ? J.toArray().map(Q => C0(Q.children)) : J.attr('value')
    }
    case 'button':
    case 'input':
    case 'option':
      return Z ? this.attr('value') : this.attr('value', Y)
  }
  return
}
function PZ(Y, Z) {
  if (!Y.attribs || !X1(Y.attribs, Z)) return
  delete Y.attribs[Z]
}
function c1(Y) {
  return Y ? Y.trim().split(Q1) : []
}
function q7(Y) {
  let Z = c1(Y)
  for (let K of Z)
    G(this, J => {
      if (f(J)) PZ(J, K)
    })
  return this
}
function B7(Y) {
  return this.toArray().some(Z => {
    let K = f(Z) && Z.attribs.class,
      J = -1
    if (K && Y.length > 0)
      while ((J = K.indexOf(Y, J + 1)) > -1) {
        let Q = J + Y.length
        if ((J === 0 || Q1.test(K[J - 1])) && (Q === K.length || Q1.test(K[Q]))) return !0
      }
    return !1
  })
}
function vZ(Y) {
  if (typeof Y === 'function')
    return G(this, (J, Q) => {
      if (f(J)) {
        let V = J.attribs.class || ''
        vZ.call([J], Y.call(J, Q, V))
      }
    })
  if (!Y || typeof Y !== 'string') return this
  let Z = Y.split(Q1),
    K = this.length
  for (let J = 0; J < K; J++) {
    let Q = this[J]
    if (!f(Q)) continue
    let V = i1(Q, 'class', !1)
    if (V) {
      let z = ` ${V} `
      for (let F of Z) {
        let q = `${F} `
        if (!z.includes(` ${q}`)) z += q
      }
      r0(Q, 'class', z.trim())
    } else r0(Q, 'class', Z.join(' ').trim())
  }
  return this
}
function OZ(Y) {
  if (typeof Y === 'function')
    return G(this, (Q, V) => {
      if (f(Q)) OZ.call([Q], Y.call(Q, V, Q.attribs.class || ''))
    })
  let Z = c1(Y),
    K = Z.length,
    J = arguments.length === 0
  return G(this, Q => {
    if (!f(Q)) return
    if (J) Q.attribs.class = ''
    else {
      let V = c1(Q.attribs.class),
        z = !1
      for (let F = 0; F < K; F++) {
        let q = V.indexOf(Z[F])
        if (q !== -1) (V.splice(q, 1), (z = !0), F--)
      }
      if (z) Q.attribs.class = V.join(' ')
    }
  })
}
function bZ(Y, Z) {
  if (typeof Y === 'function')
    return G(this, (z, F) => {
      if (f(z)) bZ.call([z], Y.call(z, F, z.attribs.class || '', Z), Z)
    })
  if (!Y || typeof Y !== 'string') return this
  let K = Y.split(Q1),
    J = K.length,
    Q = typeof Z === 'boolean' ? (Z ? 1 : -1) : 0,
    V = this.length
  for (let z = 0; z < V; z++) {
    let F = this[z]
    if (!f(F)) continue
    let q = c1(F.attribs.class)
    for (let w = 0; w < J; w++) {
      let j = q.indexOf(K[w])
      if (Q >= 0 && j === -1) q.push(K[w])
      else if (Q <= 0 && j !== -1) q.splice(j, 1)
    }
    F.attribs.class = q.join(' ')
  }
  return this
}
var RY = {}
V0(RY, {
  toArray: () => H5,
  slice: () => U5,
  siblings: () => a7,
  prevUntil: () => p7,
  prevAll: () => s7,
  prev: () => l7,
  parentsUntil: () => m7,
  parents: () => T7,
  parent: () => A7,
  not: () => K5,
  nextUntil: () => r7,
  nextAll: () => d7,
  next: () => c7,
  map: () => e7,
  last: () => Q5,
  is: () => Z5,
  index: () => W5,
  has: () => J5,
  get: () => z5,
  first: () => X5,
  find: () => k7,
  filterArray: () => jY,
  filter: () => Y5,
  eq: () => V5,
  end: () => F5,
  each: () => t7,
  contents: () => o7,
  closest: () => i7,
  children: () => n7,
  addBack: () => B5,
  add: () => q5,
  _findBySelector: () => _7,
})
var y
;(function (Y) {
  ;((Y.Attribute = 'attribute'),
    (Y.Pseudo = 'pseudo'),
    (Y.PseudoElement = 'pseudo-element'),
    (Y.Tag = 'tag'),
    (Y.Universal = 'universal'),
    (Y.Adjacent = 'adjacent'),
    (Y.Child = 'child'),
    (Y.Descendant = 'descendant'),
    (Y.Parent = 'parent'),
    (Y.Sibling = 'sibling'),
    (Y.ColumnCombinator = 'column-combinator'))
})(y || (y = {}))
var u
;(function (Y) {
  ;((Y.Any = 'any'),
    (Y.Element = 'element'),
    (Y.End = 'end'),
    (Y.Equals = 'equals'),
    (Y.Exists = 'exists'),
    (Y.Hyphen = 'hyphen'),
    (Y.Not = 'not'),
    (Y.Start = 'start'))
})(u || (u = {}))
var fZ = /^[^\\#]?(?:\\(?:[\da-f]{1,6}\s?|.)|[\w\-\u00b0-\uFFFF])+/,
  w7 = /\\([\da-f]{1,6}\s?|(\s)|.)/gi,
  L7 = new Map([
    [126, u.Element],
    [94, u.Start],
    [36, u.End],
    [42, u.Any],
    [33, u.Not],
    [124, u.Hyphen],
  ]),
  j7 = new Set(['has', 'not', 'matches', 'is', 'where', 'host', 'host-context'])
function G0(Y) {
  switch (Y.type) {
    case y.Adjacent:
    case y.Child:
    case y.Descendant:
    case y.Parent:
    case y.Sibling:
    case y.ColumnCombinator:
      return !0
    default:
      return !1
  }
}
var R7 = new Set(['contains', 'icontains'])
function P7(Y, Z, K) {
  let J = parseInt(Z, 16) - 65536
  return J !== J || K
    ? Z
    : J < 0
      ? String.fromCharCode(J + 65536)
      : String.fromCharCode((J >> 10) | 55296, (J & 1023) | 56320)
}
function V1(Y) {
  return Y.replace(w7, P7)
}
function a4(Y) {
  return Y === 39 || Y === 34
}
function yZ(Y) {
  return Y === 32 || Y === 9 || Y === 10 || Y === 12 || Y === 13
}
function B0(Y) {
  let Z = [],
    K = MZ(Z, `${Y}`, 0)
  if (K < Y.length) throw Error(`Unmatched selector: ${Y.slice(K)}`)
  return Z
}
function MZ(Y, Z, K) {
  let J = []
  function Q(b) {
    let N = Z.slice(K + b).match(fZ)
    if (!N) throw Error(`Expected name, found ${Z.slice(K)}`)
    let [g] = N
    return ((K += b + g.length), V1(g))
  }
  function V(b) {
    K += b
    while (K < Z.length && yZ(Z.charCodeAt(K))) K++
  }
  function z() {
    K += 1
    let b = K,
      N = 1
    for (; N > 0 && K < Z.length; K++)
      if (Z.charCodeAt(K) === 40 && !F(K)) N++
      else if (Z.charCodeAt(K) === 41 && !F(K)) N--
    if (N) throw Error('Parenthesis not matched')
    return V1(Z.slice(b, K - 1))
  }
  function F(b) {
    let N = 0
    while (Z.charCodeAt(--b) === 92) N++
    return (N & 1) === 1
  }
  function q() {
    if (J.length > 0 && G0(J[J.length - 1])) throw Error('Did not expect successive traversals.')
  }
  function w(b) {
    if (J.length > 0 && J[J.length - 1].type === y.Descendant) {
      J[J.length - 1].type = b
      return
    }
    ;(q(), J.push({ type: b }))
  }
  function j(b, N) {
    J.push({
      type: y.Attribute,
      name: b,
      action: N,
      value: Q(1),
      namespace: null,
      ignoreCase: 'quirks',
    })
  }
  function O() {
    if (J.length && J[J.length - 1].type === y.Descendant) J.pop()
    if (J.length === 0) throw Error('Empty sub-selector')
    Y.push(J)
  }
  if ((V(0), Z.length === K)) return K
  Y: while (K < Z.length) {
    let b = Z.charCodeAt(K)
    switch (b) {
      case 32:
      case 9:
      case 10:
      case 12:
      case 13: {
        if (J.length === 0 || J[0].type !== y.Descendant) (q(), J.push({ type: y.Descendant }))
        V(1)
        break
      }
      case 62: {
        ;(w(y.Child), V(1))
        break
      }
      case 60: {
        ;(w(y.Parent), V(1))
        break
      }
      case 126: {
        ;(w(y.Sibling), V(1))
        break
      }
      case 43: {
        ;(w(y.Adjacent), V(1))
        break
      }
      case 46: {
        j('class', u.Element)
        break
      }
      case 35: {
        j('id', u.Equals)
        break
      }
      case 91: {
        V(1)
        let N,
          g = null
        if (Z.charCodeAt(K) === 124) N = Q(1)
        else if (Z.startsWith('*|', K)) ((g = '*'), (N = Q(2)))
        else if (((N = Q(0)), Z.charCodeAt(K) === 124 && Z.charCodeAt(K + 1) !== 61))
          ((g = N), (N = Q(1)))
        V(0)
        let S = u.Exists,
          Z0 = L7.get(Z.charCodeAt(K))
        if (Z0) {
          if (((S = Z0), Z.charCodeAt(K + 1) !== 61)) throw Error('Expected `=`')
          V(2)
        } else if (Z.charCodeAt(K) === 61) ((S = u.Equals), V(1))
        let I0 = '',
          S0 = null
        if (S !== 'exists') {
          if (a4(Z.charCodeAt(K))) {
            let M1 = Z.charCodeAt(K),
              N0 = K + 1
            while (N0 < Z.length && (Z.charCodeAt(N0) !== M1 || F(N0))) N0 += 1
            if (Z.charCodeAt(N0) !== M1) throw Error("Attribute value didn't end")
            ;((I0 = V1(Z.slice(K + 1, N0))), (K = N0 + 1))
          } else {
            let M1 = K
            while (K < Z.length && ((!yZ(Z.charCodeAt(K)) && Z.charCodeAt(K) !== 93) || F(K)))
              K += 1
            I0 = V1(Z.slice(M1, K))
          }
          V(0)
          let e0 = Z.charCodeAt(K) | 32
          if (e0 === 115) ((S0 = !1), V(1))
          else if (e0 === 105) ((S0 = !0), V(1))
        }
        if (Z.charCodeAt(K) !== 93) throw Error("Attribute selector didn't terminate")
        K += 1
        let t0 = { type: y.Attribute, name: N, action: S, value: I0, namespace: g, ignoreCase: S0 }
        J.push(t0)
        break
      }
      case 58: {
        if (Z.charCodeAt(K + 1) === 58) {
          J.push({
            type: y.PseudoElement,
            name: Q(2).toLowerCase(),
            data: Z.charCodeAt(K) === 40 ? z() : null,
          })
          continue
        }
        let N = Q(1).toLowerCase(),
          g = null
        if (Z.charCodeAt(K) === 40)
          if (j7.has(N)) {
            if (a4(Z.charCodeAt(K + 1))) throw Error(`Pseudo-selector ${N} cannot be quoted`)
            if (((g = []), (K = MZ(g, Z, K + 1)), Z.charCodeAt(K) !== 41))
              throw Error(`Missing closing parenthesis in :${N} (${Z})`)
            K += 1
          } else {
            if (((g = z()), R7.has(N))) {
              let S = g.charCodeAt(0)
              if (S === g.charCodeAt(g.length - 1) && a4(S)) g = g.slice(1, -1)
            }
            g = V1(g)
          }
        J.push({ type: y.Pseudo, name: N, data: g })
        break
      }
      case 44: {
        ;(O(), (J = []), V(1))
        break
      }
      default: {
        if (Z.startsWith('/*', K)) {
          let S = Z.indexOf('*/', K + 2)
          if (S < 0) throw Error('Comment was not terminated')
          if (((K = S + 2), J.length === 0)) V(0)
          break
        }
        let N = null,
          g
        if (b === 42) ((K += 1), (g = '*'))
        else if (b === 124) {
          if (((g = ''), Z.charCodeAt(K + 1) === 124)) {
            ;(w(y.ColumnCombinator), V(2))
            break
          }
        } else if (fZ.test(Z.slice(K))) g = Q(0)
        else break Y
        if (Z.charCodeAt(K) === 124 && Z.charCodeAt(K + 1) !== 124)
          if (((N = g), Z.charCodeAt(K + 1) === 42)) ((g = '*'), (K += 2))
          else g = Q(1)
        J.push(
          g === '*' ? { type: y.Universal, namespace: N } : { type: y.Tag, name: g, namespace: N },
        )
      }
    }
  }
  return (O(), K)
}
var VY = g0(v0(), 1)
var w0 = g0(v0(), 1)
var gZ = new Map([
  [y.Universal, 50],
  [y.Tag, 30],
  [y.Attribute, 1],
  [y.Pseudo, 0],
])
function z1(Y) {
  return !gZ.has(Y.type)
}
var v7 = new Map([
  [u.Exists, 10],
  [u.Equals, 8],
  [u.Not, 7],
  [u.Start, 6],
  [u.End, 6],
  [u.Any, 5],
])
function n4(Y) {
  let Z = Y.map(xZ)
  for (let K = 1; K < Y.length; K++) {
    let J = Z[K]
    if (J < 0) continue
    for (let Q = K - 1; Q >= 0 && J < Z[Q]; Q--) {
      let V = Y[Q + 1]
      ;((Y[Q + 1] = Y[Q]), (Y[Q] = V), (Z[Q + 1] = Z[Q]), (Z[Q] = J))
    }
  }
}
function xZ(Y) {
  var Z, K
  let J = (Z = gZ.get(Y.type)) !== null && Z !== void 0 ? Z : -1
  if (Y.type === y.Attribute) {
    if (
      ((J = (K = v7.get(Y.action)) !== null && K !== void 0 ? K : 4),
      Y.action === u.Equals && Y.name === 'id')
    )
      J = 9
    if (Y.ignoreCase) J >>= 1
  } else if (Y.type === y.Pseudo)
    if (!Y.data) J = 3
    else if (Y.name === 'has' || Y.name === 'contains') J = 0
    else if (Array.isArray(Y.data)) {
      if (((J = Math.min(...Y.data.map(Q => Math.min(...Q.map(xZ))))), J < 0)) J = 0
    } else J = 2
  return J
}
var H1 = g0(v0(), 1),
  O7 = /[-[\]{}()*+?.,\\^$|#\s]/g
function hZ(Y) {
  return Y.replace(O7, '\\$&')
}
var b7 = new Set([
  'accept',
  'accept-charset',
  'align',
  'alink',
  'axis',
  'bgcolor',
  'charset',
  'checked',
  'clear',
  'codetype',
  'color',
  'compact',
  'declare',
  'defer',
  'dir',
  'direction',
  'disabled',
  'enctype',
  'face',
  'frame',
  'hreflang',
  'http-equiv',
  'lang',
  'language',
  'link',
  'media',
  'method',
  'multiple',
  'nohref',
  'noresize',
  'noshade',
  'nowrap',
  'readonly',
  'rel',
  'rev',
  'rules',
  'scope',
  'scrolling',
  'selected',
  'shape',
  'target',
  'text',
  'type',
  'valign',
  'valuetype',
  'vlink',
])
function $0(Y, Z) {
  return typeof Y.ignoreCase === 'boolean'
    ? Y.ignoreCase
    : Y.ignoreCase === 'quirks'
      ? !!Z.quirksMode
      : !Z.xmlMode && b7.has(Y.name)
}
var CZ = {
  equals(Y, Z, K) {
    let { adapter: J } = K,
      { name: Q } = Z,
      { value: V } = Z
    if ($0(Z, K))
      return (
        (V = V.toLowerCase()),
        z => {
          let F = J.getAttributeValue(z, Q)
          return F != null && F.length === V.length && F.toLowerCase() === V && Y(z)
        }
      )
    return z => J.getAttributeValue(z, Q) === V && Y(z)
  },
  hyphen(Y, Z, K) {
    let { adapter: J } = K,
      { name: Q } = Z,
      { value: V } = Z,
      z = V.length
    if ($0(Z, K))
      return (
        (V = V.toLowerCase()),
        function (q) {
          let w = J.getAttributeValue(q, Q)
          return (
            w != null &&
            (w.length === z || w.charAt(z) === '-') &&
            w.substr(0, z).toLowerCase() === V &&
            Y(q)
          )
        }
      )
    return function (q) {
      let w = J.getAttributeValue(q, Q)
      return w != null && (w.length === z || w.charAt(z) === '-') && w.substr(0, z) === V && Y(q)
    }
  },
  element(Y, Z, K) {
    let { adapter: J } = K,
      { name: Q, value: V } = Z
    if (/\s/.test(V)) return H1.default.falseFunc
    let z = new RegExp(`(?:^|\\s)${hZ(V)}(?:$|\\s)`, $0(Z, K) ? 'i' : '')
    return function (q) {
      let w = J.getAttributeValue(q, Q)
      return w != null && w.length >= V.length && z.test(w) && Y(q)
    }
  },
  exists(Y, { name: Z }, { adapter: K }) {
    return J => K.hasAttrib(J, Z) && Y(J)
  },
  start(Y, Z, K) {
    let { adapter: J } = K,
      { name: Q } = Z,
      { value: V } = Z,
      z = V.length
    if (z === 0) return H1.default.falseFunc
    if ($0(Z, K))
      return (
        (V = V.toLowerCase()),
        F => {
          let q = J.getAttributeValue(F, Q)
          return q != null && q.length >= z && q.substr(0, z).toLowerCase() === V && Y(F)
        }
      )
    return F => {
      var q
      return (
        !!((q = J.getAttributeValue(F, Q)) === null || q === void 0 ? void 0 : q.startsWith(V)) &&
        Y(F)
      )
    }
  },
  end(Y, Z, K) {
    let { adapter: J } = K,
      { name: Q } = Z,
      { value: V } = Z,
      z = -V.length
    if (z === 0) return H1.default.falseFunc
    if ($0(Z, K))
      return (
        (V = V.toLowerCase()),
        F => {
          var q
          return (
            ((q = J.getAttributeValue(F, Q)) === null || q === void 0
              ? void 0
              : q.substr(z).toLowerCase()) === V && Y(F)
          )
        }
      )
    return F => {
      var q
      return (
        !!((q = J.getAttributeValue(F, Q)) === null || q === void 0 ? void 0 : q.endsWith(V)) &&
        Y(F)
      )
    }
  },
  any(Y, Z, K) {
    let { adapter: J } = K,
      { name: Q, value: V } = Z
    if (V === '') return H1.default.falseFunc
    if ($0(Z, K)) {
      let z = new RegExp(hZ(V), 'i')
      return function (q) {
        let w = J.getAttributeValue(q, Q)
        return w != null && w.length >= V.length && z.test(w) && Y(q)
      }
    }
    return z => {
      var F
      return (
        !!((F = J.getAttributeValue(z, Q)) === null || F === void 0 ? void 0 : F.includes(V)) &&
        Y(z)
      )
    }
  },
  not(Y, Z, K) {
    let { adapter: J } = K,
      { name: Q } = Z,
      { value: V } = Z
    if (V === '') return z => !!J.getAttributeValue(z, Q) && Y(z)
    else if ($0(Z, K))
      return (
        (V = V.toLowerCase()),
        z => {
          let F = J.getAttributeValue(z, Q)
          return (F == null || F.length !== V.length || F.toLowerCase() !== V) && Y(z)
        }
      )
    return z => J.getAttributeValue(z, Q) !== V && Y(z)
  },
}
var f7 = new Set([9, 10, 12, 13, 32])
function DZ(Y) {
  if (((Y = Y.trim().toLowerCase()), Y === 'even')) return [2, 0]
  else if (Y === 'odd') return [2, 1]
  let Z = 0,
    K = 0,
    J = V(),
    Q = z()
  if (Z < Y.length && Y.charAt(Z) === 'n')
    if ((Z++, (K = J * (Q !== null && Q !== void 0 ? Q : 1)), F(), Z < Y.length))
      ((J = V()), F(), (Q = z()))
    else J = Q = 0
  if (Q === null || Z < Y.length) throw Error(`n-th rule couldn't be parsed ('${Y}')`)
  return [K, J * Q]
  function V() {
    if (Y.charAt(Z) === '-') return (Z++, -1)
    if (Y.charAt(Z) === '+') Z++
    return 1
  }
  function z() {
    let q = Z,
      w = 0
    while (Z < Y.length && Y.charCodeAt(Z) >= 48 && Y.charCodeAt(Z) <= 57)
      ((w = w * 10 + (Y.charCodeAt(Z) - 48)), Z++)
    return Z === q ? null : w
  }
  function F() {
    while (Z < Y.length && f7.has(Y.charCodeAt(Z))) Z++
  }
}
var o4 = g0(v0(), 1)
function GZ(Y) {
  let Z = Y[0],
    K = Y[1] - 1
  if (K < 0 && Z <= 0) return o4.default.falseFunc
  if (Z === -1) return V => V <= K
  if (Z === 0) return V => V === K
  if (Z === 1) return K < 0 ? o4.default.trueFunc : V => V >= K
  let J = Math.abs(Z),
    Q = ((K % J) + J) % J
  return Z > 1 ? V => V >= K && V % J === Q : V => V <= K && V % J === Q
}
function l0(Y) {
  return GZ(DZ(Y))
}
var s = g0(v0(), 1)
function d1(Y, Z) {
  return K => {
    let J = Z.getParent(K)
    return J != null && Z.isTag(J) && Y(K)
  }
}
var s0 = {
  contains(Y, Z, { adapter: K }) {
    return function (Q) {
      return Y(Q) && K.getText(Q).includes(Z)
    }
  },
  icontains(Y, Z, { adapter: K }) {
    let J = Z.toLowerCase()
    return function (V) {
      return Y(V) && K.getText(V).toLowerCase().includes(J)
    }
  },
  'nth-child'(Y, Z, { adapter: K, equals: J }) {
    let Q = l0(Z)
    if (Q === s.default.falseFunc) return s.default.falseFunc
    if (Q === s.default.trueFunc) return d1(Y, K)
    return function (z) {
      let F = K.getSiblings(z),
        q = 0
      for (let w = 0; w < F.length; w++) {
        if (J(z, F[w])) break
        if (K.isTag(F[w])) q++
      }
      return Q(q) && Y(z)
    }
  },
  'nth-last-child'(Y, Z, { adapter: K, equals: J }) {
    let Q = l0(Z)
    if (Q === s.default.falseFunc) return s.default.falseFunc
    if (Q === s.default.trueFunc) return d1(Y, K)
    return function (z) {
      let F = K.getSiblings(z),
        q = 0
      for (let w = F.length - 1; w >= 0; w--) {
        if (J(z, F[w])) break
        if (K.isTag(F[w])) q++
      }
      return Q(q) && Y(z)
    }
  },
  'nth-of-type'(Y, Z, { adapter: K, equals: J }) {
    let Q = l0(Z)
    if (Q === s.default.falseFunc) return s.default.falseFunc
    if (Q === s.default.trueFunc) return d1(Y, K)
    return function (z) {
      let F = K.getSiblings(z),
        q = 0
      for (let w = 0; w < F.length; w++) {
        let j = F[w]
        if (J(z, j)) break
        if (K.isTag(j) && K.getName(j) === K.getName(z)) q++
      }
      return Q(q) && Y(z)
    }
  },
  'nth-last-of-type'(Y, Z, { adapter: K, equals: J }) {
    let Q = l0(Z)
    if (Q === s.default.falseFunc) return s.default.falseFunc
    if (Q === s.default.trueFunc) return d1(Y, K)
    return function (z) {
      let F = K.getSiblings(z),
        q = 0
      for (let w = F.length - 1; w >= 0; w--) {
        let j = F[w]
        if (J(z, j)) break
        if (K.isTag(j) && K.getName(j) === K.getName(z)) q++
      }
      return Q(q) && Y(z)
    }
  },
  root(Y, Z, { adapter: K }) {
    return J => {
      let Q = K.getParent(J)
      return (Q == null || !K.isTag(Q)) && Y(J)
    }
  },
  scope(Y, Z, K, J) {
    let { equals: Q } = K
    if (!J || J.length === 0) return s0.root(Y, Z, K)
    if (J.length === 1) return V => Q(J[0], V) && Y(V)
    return V => J.includes(V) && Y(V)
  },
  hover: t4('isHovered'),
  visited: t4('isVisited'),
  active: t4('isActive'),
}
function t4(Y) {
  return function (K, J, { adapter: Q }) {
    let V = Q[Y]
    if (typeof V !== 'function') return s.default.falseFunc
    return function (F) {
      return V(F) && K(F)
    }
  }
}
var W1 = {
  empty(Y, { adapter: Z }) {
    return !Z.getChildren(Y).some(K => Z.isTag(K) || Z.getText(K) !== '')
  },
  'first-child'(Y, { adapter: Z, equals: K }) {
    if (Z.prevElementSibling) return Z.prevElementSibling(Y) == null
    let J = Z.getSiblings(Y).find(Q => Z.isTag(Q))
    return J != null && K(Y, J)
  },
  'last-child'(Y, { adapter: Z, equals: K }) {
    let J = Z.getSiblings(Y)
    for (let Q = J.length - 1; Q >= 0; Q--) {
      if (K(Y, J[Q])) return !0
      if (Z.isTag(J[Q])) break
    }
    return !1
  },
  'first-of-type'(Y, { adapter: Z, equals: K }) {
    let J = Z.getSiblings(Y),
      Q = Z.getName(Y)
    for (let V = 0; V < J.length; V++) {
      let z = J[V]
      if (K(Y, z)) return !0
      if (Z.isTag(z) && Z.getName(z) === Q) break
    }
    return !1
  },
  'last-of-type'(Y, { adapter: Z, equals: K }) {
    let J = Z.getSiblings(Y),
      Q = Z.getName(Y)
    for (let V = J.length - 1; V >= 0; V--) {
      let z = J[V]
      if (K(Y, z)) return !0
      if (Z.isTag(z) && Z.getName(z) === Q) break
    }
    return !1
  },
  'only-of-type'(Y, { adapter: Z, equals: K }) {
    let J = Z.getName(Y)
    return Z.getSiblings(Y).every(Q => K(Y, Q) || !Z.isTag(Q) || Z.getName(Q) !== J)
  },
  'only-child'(Y, { adapter: Z, equals: K }) {
    return Z.getSiblings(Y).every(J => K(Y, J) || !Z.isTag(J))
  },
}
function e4(Y, Z, K, J) {
  if (K === null) {
    if (Y.length > J) throw Error(`Pseudo-class :${Z} requires an argument`)
  } else if (Y.length === J) throw Error(`Pseudo-class :${Z} doesn't have any arguments`)
}
var r1 = {
  'any-link': ':is(a, area, link)[href]',
  link: ':any-link:not(:visited)',
  disabled: `:is(
        :is(button, input, select, textarea, optgroup, option)[disabled],
        optgroup[disabled] > option,
        fieldset[disabled]:not(fieldset[disabled] legend:first-of-type *)
    )`,
  enabled: ':not(:disabled)',
  checked: ':is(:is(input[type=radio], input[type=checkbox])[checked], option:selected)',
  required: ':is(input, select, textarea)[required]',
  optional: ':is(input, select, textarea):not([required])',
  selected:
    'option:is([selected], select:not([multiple]):not(:has(> option[selected])) > :first-of-type)',
  checkbox: '[type=checkbox]',
  file: '[type=file]',
  password: '[type=password]',
  radio: '[type=radio]',
  reset: '[type=reset]',
  image: '[type=image]',
  submit: '[type=submit]',
  parent: ':not(:empty)',
  header: ':is(h1, h2, h3, h4, h5, h6)',
  button: ':is(button, input[type=button])',
  input: ':is(input, textarea, select, button)',
  text: "input:is(:not([type!='']), [type=text])",
}
var e = g0(v0(), 1)
var KY = {}
function JY(Y, Z) {
  if (Y === e.default.falseFunc) return e.default.falseFunc
  return K => Z.isTag(K) && Y(K)
}
function XY(Y, Z) {
  let K = Z.getSiblings(Y)
  if (K.length <= 1) return []
  let J = K.indexOf(Y)
  if (J < 0 || J === K.length - 1) return []
  return K.slice(J + 1).filter(Z.isTag)
}
function ZY(Y) {
  return {
    xmlMode: !!Y.xmlMode,
    lowerCaseAttributeNames: !!Y.lowerCaseAttributeNames,
    lowerCaseTags: !!Y.lowerCaseTags,
    quirksMode: !!Y.quirksMode,
    cacheResults: !!Y.cacheResults,
    pseudos: Y.pseudos,
    adapter: Y.adapter,
    equals: Y.equals,
  }
}
var YY = (Y, Z, K, J, Q) => {
    let V = Q(Z, ZY(K), J)
    return V === e.default.trueFunc
      ? Y
      : V === e.default.falseFunc
        ? e.default.falseFunc
        : z => V(z) && Y(z)
  },
  l1 = {
    is: YY,
    matches: YY,
    where: YY,
    not(Y, Z, K, J, Q) {
      let V = Q(Z, ZY(K), J)
      return V === e.default.falseFunc
        ? Y
        : V === e.default.trueFunc
          ? e.default.falseFunc
          : z => !V(z) && Y(z)
    },
    has(Y, Z, K, J, Q) {
      let { adapter: V } = K,
        z = ZY(K)
      z.relativeSelector = !0
      let F = Z.some(j => j.some(z1)) ? [KY] : void 0,
        q = Q(Z, z, F)
      if (q === e.default.falseFunc) return e.default.falseFunc
      let w = JY(q, V)
      if (F && q !== e.default.trueFunc) {
        let { shouldTestNextSiblings: j = !1 } = q
        return O => {
          if (!Y(O)) return !1
          F[0] = O
          let b = V.getChildren(O),
            N = j ? [...b, ...XY(O, V)] : b
          return V.existsOne(w, N)
        }
      }
      return j => Y(j) && V.existsOne(w, V.getChildren(j))
    },
  }
function $Z(Y, Z, K, J, Q) {
  var V
  let { name: z, data: F } = Z
  if (Array.isArray(F)) {
    if (!(z in l1)) throw Error(`Unknown pseudo-class :${z}(${F})`)
    return l1[z](Y, F, K, J, Q)
  }
  let q = (V = K.pseudos) === null || V === void 0 ? void 0 : V[z],
    w = typeof q === 'string' ? q : r1[z]
  if (typeof w === 'string') {
    if (F != null) throw Error(`Pseudo ${z} doesn't have any arguments`)
    let j = B0(w)
    return l1.is(Y, j, K, J, Q)
  }
  if (typeof q === 'function') return (e4(q, z, F, 1), j => q(j, F) && Y(j))
  if (z in s0) return s0[z](Y, F, K, J)
  if (z in W1) {
    let j = W1[z]
    return (e4(j, z, F, 2), O => j(O, K, F) && Y(O))
  }
  throw Error(`Unknown pseudo-class :${z}`)
}
function QY(Y, Z) {
  let K = Z.getParent(Y)
  if (K && Z.isTag(K)) return K
  return null
}
function EZ(Y, Z, K, J, Q) {
  let { adapter: V, equals: z } = K
  switch (Z.type) {
    case y.PseudoElement:
      throw Error('Pseudo-elements are not supported by css-select')
    case y.ColumnCombinator:
      throw Error('Column combinators are not yet supported by css-select')
    case y.Attribute: {
      if (Z.namespace != null)
        throw Error('Namespaced attributes are not yet supported by css-select')
      if (!K.xmlMode || K.lowerCaseAttributeNames) Z.name = Z.name.toLowerCase()
      return CZ[Z.action](Y, Z, K)
    }
    case y.Pseudo:
      return $Z(Y, Z, K, J, Q)
    case y.Tag: {
      if (Z.namespace != null)
        throw Error('Namespaced tag names are not yet supported by css-select')
      let { name: F } = Z
      if (!K.xmlMode || K.lowerCaseTags) F = F.toLowerCase()
      return function (w) {
        return V.getName(w) === F && Y(w)
      }
    }
    case y.Descendant: {
      if (K.cacheResults === !1 || typeof WeakSet > 'u')
        return function (w) {
          let j = w
          while ((j = QY(j, V))) if (Y(j)) return !0
          return !1
        }
      let F = new WeakSet()
      return function (w) {
        let j = w
        while ((j = QY(j, V)))
          if (!F.has(j)) {
            if (V.isTag(j) && Y(j)) return !0
            F.add(j)
          }
        return !1
      }
    }
    case '_flexibleDescendant':
      return function (q) {
        let w = q
        do if (Y(w)) return !0
        while ((w = QY(w, V)))
        return !1
      }
    case y.Parent:
      return function (q) {
        return V.getChildren(q).some(w => V.isTag(w) && Y(w))
      }
    case y.Child:
      return function (q) {
        let w = V.getParent(q)
        return w != null && V.isTag(w) && Y(w)
      }
    case y.Sibling:
      return function (q) {
        let w = V.getSiblings(q)
        for (let j = 0; j < w.length; j++) {
          let O = w[j]
          if (z(q, O)) break
          if (V.isTag(O) && Y(O)) return !0
        }
        return !1
      }
    case y.Adjacent: {
      if (V.prevElementSibling)
        return function (q) {
          let w = V.prevElementSibling(q)
          return w != null && Y(w)
        }
      return function (q) {
        let w = V.getSiblings(q),
          j
        for (let O = 0; O < w.length; O++) {
          let b = w[O]
          if (z(q, b)) break
          if (V.isTag(b)) j = b
        }
        return !!j && Y(j)
      }
    }
    case y.Universal: {
      if (Z.namespace != null && Z.namespace !== '*')
        throw Error('Namespaced universal selectors are not yet supported by css-select')
      return Y
    }
  }
}
function uZ(Y, Z, K) {
  let J = s1(Y, Z, K)
  return JY(J, Z.adapter)
}
function s1(Y, Z, K) {
  let J = typeof Y === 'string' ? B0(Y) : Y
  return p1(J, Z, K)
}
function IZ(Y) {
  return (
    Y.type === y.Pseudo &&
    (Y.name === 'scope' || (Array.isArray(Y.data) && Y.data.some(Z => Z.some(IZ))))
  )
}
var y7 = { type: y.Descendant },
  M7 = { type: '_flexibleDescendant' },
  N7 = { type: y.Pseudo, name: 'scope', data: null }
function g7(Y, { adapter: Z }, K) {
  let J = !!(K === null || K === void 0
    ? void 0
    : K.every(Q => {
        let V = Z.isTag(Q) && Z.getParent(Q)
        return Q === KY || (V && Z.isTag(V))
      }))
  for (let Q of Y) {
    if (Q.length > 0 && z1(Q[0]) && Q[0].type !== y.Descendant);
    else if (J && !Q.some(IZ)) Q.unshift(y7)
    else continue
    Q.unshift(N7)
  }
}
function p1(Y, Z, K) {
  var J
  ;(Y.forEach(n4), (K = (J = Z.context) !== null && J !== void 0 ? J : K))
  let Q = Array.isArray(K),
    V = K && (Array.isArray(K) ? K : [K])
  if (Z.relativeSelector !== !1) g7(Y, Z, V)
  else if (Y.some(q => q.length > 0 && z1(q[0])))
    throw Error('Relative selectors are not allowed when the `relativeSelector` option is disabled')
  let z = !1,
    F = Y.map(q => {
      if (q.length >= 2) {
        let [w, j] = q
        if (w.type !== y.Pseudo || w.name !== 'scope');
        else if (Q && j.type === y.Descendant) q[1] = M7
        else if (j.type === y.Adjacent || j.type === y.Sibling) z = !0
      }
      return x7(q, Z, V)
    }).reduce(h7, w0.default.falseFunc)
  return ((F.shouldTestNextSiblings = z), F)
}
function x7(Y, Z, K) {
  var J
  return Y.reduce(
    (Q, V) => (Q === w0.default.falseFunc ? w0.default.falseFunc : EZ(Q, V, Z, K, p1)),
    (J = Z.rootFunc) !== null && J !== void 0 ? J : w0.default.trueFunc,
  )
}
function h7(Y, Z) {
  if (Z === w0.default.falseFunc || Y === w0.default.trueFunc) return Y
  if (Y === w0.default.falseFunc || Z === w0.default.trueFunc) return Z
  return function (J) {
    return Y(J) || Z(J)
  }
}
var SZ = (Y, Z) => Y === Z,
  C7 = { adapter: P0, equals: SZ }
function kZ(Y) {
  var Z, K, J, Q
  let V = Y !== null && Y !== void 0 ? Y : C7
  return (
    ((Z = V.adapter) !== null && Z !== void 0) || (V.adapter = P0),
    ((K = V.equals) !== null && K !== void 0) ||
      (V.equals =
        (Q = (J = V.adapter) === null || J === void 0 ? void 0 : J.equals) !== null && Q !== void 0
          ? Q
          : SZ),
    V
  )
}
function zY(Y) {
  return function (K, J, Q) {
    let V = kZ(J)
    return Y(K, V, Q)
  }
}
var MX = zY(uZ),
  NX = zY(s1),
  a1 = zY(p1)
function _Z(Y) {
  return function (K, J, Q) {
    let V = kZ(Q)
    if (typeof K !== 'function') K = s1(K, V, J)
    let z = n1(J, V.adapter, K.shouldTestNextSiblings)
    return Y(K, z, V)
  }
}
function n1(Y, Z, K = !1) {
  if (K) Y = D7(Y, Z)
  return Array.isArray(Y) ? Z.removeSubsets(Y) : Z.getChildren(Y)
}
function D7(Y, Z) {
  let K = Array.isArray(Y) ? Y.slice(0) : [Y],
    J = K.length
  for (let Q = 0; Q < J; Q++) {
    let V = XY(K[Q], Z)
    K.push(...V)
  }
  return K
}
var gX = _Z((Y, Z, K) =>
    Y === VY.default.falseFunc || !Z || Z.length === 0 ? [] : K.adapter.findAll(Y, Z),
  ),
  xX = _Z((Y, Z, K) =>
    Y === VY.default.falseFunc || !Z || Z.length === 0 ? null : K.adapter.findOne(Y, Z),
  )
var t1 = g0(v0(), 1)
var G7 = new Set(['first', 'last', 'eq', 'gt', 'nth', 'lt', 'even', 'odd'])
function p0(Y) {
  if (Y.type !== 'pseudo') return !1
  if (G7.has(Y.name)) return !0
  if (Y.name === 'not' && Array.isArray(Y.data)) return Y.data.some(Z => Z.some(p0))
  return !1
}
function AZ(Y, Z, K) {
  let J = Z != null ? parseInt(Z, 10) : NaN
  switch (Y) {
    case 'first':
      return 1
    case 'nth':
    case 'eq':
      return isFinite(J) ? (J >= 0 ? J + 1 : 1 / 0) : 0
    case 'lt':
      return isFinite(J) ? (J >= 0 ? Math.min(J, K) : 1 / 0) : 0
    case 'gt':
      return isFinite(J) ? 1 / 0 : 0
    case 'odd':
      return 2 * K
    case 'even':
      return 2 * K - 1
    case 'last':
    case 'not':
      return 1 / 0
  }
}
function TZ(Y) {
  while (Y.parent) Y = Y.parent
  return Y
}
function o1(Y) {
  let Z = [],
    K = []
  for (let J of Y)
    if (J.some(p0)) Z.push(J)
    else K.push(J)
  return [K, Z]
}
var $7 = { type: y.Universal, namespace: null },
  E7 = { type: y.Pseudo, name: 'scope', data: null }
function UY(Y, Z, K = {}) {
  return FY([Y], Z, K)
}
function FY(Y, Z, K = {}) {
  if (typeof Z === 'function') return Y.some(Z)
  let [J, Q] = o1(B0(Z))
  return (J.length > 0 && Y.some(a1(J, K))) || Q.some(V => iZ(V, Y, K).length > 0)
}
function u7(Y, Z, K, J) {
  let Q = typeof K === 'string' ? parseInt(K, 10) : NaN
  switch (Y) {
    case 'first':
    case 'lt':
      return Z
    case 'last':
      return Z.length > 0 ? [Z[Z.length - 1]] : Z
    case 'nth':
    case 'eq':
      return isFinite(Q) && Math.abs(Q) < Z.length ? [Q < 0 ? Z[Z.length + Q] : Z[Q]] : []
    case 'gt':
      return isFinite(Q) ? Z.slice(Q + 1) : []
    case 'even':
      return Z.filter((V, z) => z % 2 === 0)
    case 'odd':
      return Z.filter((V, z) => z % 2 === 1)
    case 'not': {
      let V = new Set(mZ(K, Z, J))
      return Z.filter(z => !V.has(z))
    }
  }
}
function qY(Y, Z, K = {}) {
  return mZ(B0(Y), Z, K)
}
function mZ(Y, Z, K) {
  if (Z.length === 0) return []
  let [J, Q] = o1(Y),
    V
  if (J.length) {
    let z = WY(Z, J, K)
    if (Q.length === 0) return z
    if (z.length) V = new Set(z)
  }
  for (
    let z = 0;
    z < Q.length && (V === null || V === void 0 ? void 0 : V.size) !== Z.length;
    z++
  ) {
    let F = Q[z]
    if ((V ? Z.filter(j => f(j) && !V.has(j)) : Z).length === 0) break
    let w = iZ(F, Z, K)
    if (w.length)
      if (!V) {
        if (z === Q.length - 1) return w
        V = new Set(w)
      } else w.forEach(j => V.add(j))
  }
  return typeof V < 'u' ? (V.size === Z.length ? Z : Z.filter(z => V.has(z))) : []
}
function iZ(Y, Z, K) {
  var J
  if (Y.some(G0)) {
    let Q = (J = K.root) !== null && J !== void 0 ? J : TZ(Z[0]),
      V = { ...K, context: Z, relativeSelector: !1 }
    return (Y.push(E7), e1(Q, Y, V, !0, Z.length))
  }
  return e1(Z, Y, K, !1, Z.length)
}
function cZ(Y, Z, K = {}, J = 1 / 0) {
  if (typeof Y === 'function') return dZ(Z, Y)
  let [Q, V] = o1(B0(Y)),
    z = V.map(F => e1(Z, F, K, !0, J))
  if (Q.length) z.push(HY(Z, Q, K, J))
  if (z.length === 0) return []
  if (z.length === 1) return z[0]
  return j0(z.reduce((F, q) => [...F, ...q]))
}
function e1(Y, Z, K, J, Q) {
  let V = Z.findIndex(p0),
    z = Z.slice(0, V),
    F = Z[V],
    q = Z.length - 1 === V ? Q : 1 / 0,
    w = AZ(F.name, F.data, q)
  if (w === 0) return []
  let O = (
      z.length === 0 && !Array.isArray(Y)
        ? i0(Y).filter(f)
        : z.length === 0
          ? (Array.isArray(Y) ? Y : [Y]).filter(f)
          : J || z.some(G0)
            ? HY(Y, [z], K, w)
            : WY(Y, [z], K)
    ).slice(0, w),
    b = u7(F.name, O, F.data, K)
  if (b.length === 0 || Z.length === V + 1) return b
  let N = Z.slice(V + 1),
    g = N.some(G0)
  if (g) {
    if (G0(N[0])) {
      let { type: S } = N[0]
      if (S === y.Sibling || S === y.Adjacent) b = n1(b, P0, !0)
      N.unshift($7)
    }
    K = { ...K, relativeSelector: !1, rootFunc: S => b.includes(S) }
  } else if (K.rootFunc && K.rootFunc !== t1.trueFunc) K = { ...K, rootFunc: t1.trueFunc }
  return N.some(p0) ? e1(b, N, K, !1, Q) : g ? HY(b, [N], K, Q) : WY(b, [N], K)
}
function HY(Y, Z, K, J) {
  let Q = a1(Z, K, Y)
  return dZ(Y, Q, J)
}
function dZ(Y, Z, K = 1 / 0) {
  let J = n1(Y, P0, Z.shouldTestNextSiblings)
  return u1(Q => f(Q) && Z(Q), J, !0, K)
}
function WY(Y, Z, K) {
  let J = (Array.isArray(Y) ? Y : [Y]).filter(f)
  if (J.length === 0) return J
  let Q = a1(Z, K)
  return Q === t1.trueFunc ? J : J.filter(Q)
}
var S7 = /^\s*(?:[+~]|:scope\b)/
function k7(Y) {
  if (!Y) return this._make([])
  if (typeof Y !== 'string') {
    let Z = t(Y) ? Y.toArray() : [Y],
      K = this.toArray()
    return this._make(Z.filter(J => K.some(Q => _1(Q, J))))
  }
  return this._findBySelector(Y, Number.POSITIVE_INFINITY)
}
function _7(Y, Z) {
  var K
  let J = this.toArray(),
    Q = S7.test(Y) ? J : this.children().toArray(),
    V = {
      context: J,
      root: (K = this._root) === null || K === void 0 ? void 0 : K[0],
      xmlMode: this.options.xmlMode,
      lowerCaseTags: this.options.lowerCaseTags,
      lowerCaseAttributeNames: this.options.lowerCaseAttributeNames,
      pseudos: this.options.pseudos,
      quirksMode: this.options.quirksMode,
    }
  return this._make(cZ(Y, Q, V, Z))
}
function BY(Y) {
  return function (Z, ...K) {
    return function (J) {
      var Q
      let V = Y(Z, this)
      if (J)
        V = jY(
          V,
          J,
          this.options.xmlMode,
          (Q = this._root) === null || Q === void 0 ? void 0 : Q[0],
        )
      return this._make(this.length > 1 && V.length > 1 ? K.reduce((z, F) => F(z), V) : V)
    }
  }
}
var U1 = BY((Y, Z) => {
    let K = []
    for (let J = 0; J < Z.length; J++) {
      let Q = Y(Z[J])
      if (Q.length > 0) K = K.concat(Q)
    }
    return K
  }),
  wY = BY((Y, Z) => {
    let K = []
    for (let J = 0; J < Z.length; J++) {
      let Q = Y(Z[J])
      if (Q !== null) K.push(Q)
    }
    return K
  })
function LY(Y, ...Z) {
  let K = null,
    J = BY((Q, V) => {
      let z = []
      return (
        G(V, F => {
          for (let q; (q = Q(F)); F = q) {
            if (K === null || K === void 0 ? void 0 : K(q, z.length)) break
            z.push(q)
          }
        }),
        z
      )
    })(Y, ...Z)
  return function (Q, V) {
    K = typeof Q === 'string' ? F => UY(F, Q, this.options) : Q ? F1(Q) : null
    let z = J.call(this, V)
    return ((K = null), z)
  }
}
function a0(Y) {
  return Y.length > 1 ? Array.from(new Set(Y)) : Y
}
var A7 = wY(({ parent: Y }) => (Y && !n(Y) ? Y : null), a0),
  T7 = U1(
    Y => {
      let Z = []
      while (Y.parent && !n(Y.parent)) (Z.push(Y.parent), (Y = Y.parent))
      return Z
    },
    j0,
    Y => Y.reverse(),
  ),
  m7 = LY(
    ({ parent: Y }) => (Y && !n(Y) ? Y : null),
    j0,
    Y => Y.reverse(),
  )
function i7(Y) {
  var Z
  let K = []
  if (!Y) return this._make(K)
  let J = {
      xmlMode: this.options.xmlMode,
      root: (Z = this._root) === null || Z === void 0 ? void 0 : Z[0],
    },
    Q = typeof Y === 'string' ? V => UY(V, Y, J) : F1(Y)
  return (
    G(this, V => {
      if (V && !n(V) && !f(V)) V = V.parent
      while (V && f(V)) {
        if (Q(V, 0)) {
          if (!K.includes(V)) K.push(V)
          break
        }
        V = V.parent
      }
    }),
    this._make(K)
  )
}
var c7 = wY(Y => $1(Y)),
  d7 = U1(Y => {
    let Z = []
    while (Y.next) if (((Y = Y.next), f(Y))) Z.push(Y)
    return Z
  }, a0),
  r7 = LY(Y => $1(Y), a0),
  l7 = wY(Y => E1(Y)),
  s7 = U1(Y => {
    let Z = []
    while (Y.prev) if (((Y = Y.prev), f(Y))) Z.push(Y)
    return Z
  }, a0),
  p7 = LY(Y => E1(Y), a0),
  a7 = U1(Y => u4(Y).filter(Z => f(Z) && Z !== Y), j0),
  n7 = U1(Y => i0(Y).filter(f), a0)
function o7() {
  let Y = this.toArray().reduce((Z, K) => (C(K) ? Z.concat(K.children) : Z), [])
  return this._make(Y)
}
function t7(Y) {
  let Z = 0,
    K = this.length
  while (Z < K && Y.call(this[Z], Z, this[Z]) !== !1) ++Z
  return this
}
function e7(Y) {
  let Z = []
  for (let K = 0; K < this.length; K++) {
    let J = this[K],
      Q = Y.call(J, K, J)
    if (Q != null) Z = Z.concat(Q)
  }
  return this._make(Z)
}
function F1(Y) {
  if (typeof Y === 'function') return (Z, K) => Y.call(Z, K, Z)
  if (t(Y)) return Z => Array.prototype.includes.call(Y, Z)
  return function (Z) {
    return Y === Z
  }
}
function Y5(Y) {
  var Z
  return this._make(
    jY(
      this.toArray(),
      Y,
      this.options.xmlMode,
      (Z = this._root) === null || Z === void 0 ? void 0 : Z[0],
    ),
  )
}
function jY(Y, Z, K, J) {
  return typeof Z === 'string' ? qY(Z, Y, { xmlMode: K, root: J }) : Y.filter(F1(Z))
}
function Z5(Y) {
  let Z = this.toArray()
  return typeof Y === 'string' ? FY(Z.filter(f), Y, this.options) : Y ? Z.some(F1(Y)) : !1
}
function K5(Y) {
  let Z = this.toArray()
  if (typeof Y === 'string') {
    let K = new Set(qY(Y, Z, this.options))
    Z = Z.filter(J => !K.has(J))
  } else {
    let K = F1(Y)
    Z = Z.filter((J, Q) => !K(J, Q))
  }
  return this._make(Z)
}
function J5(Y) {
  return this.filter(
    typeof Y === 'string' ? `:has(${Y})` : (Z, K) => this._make(K).find(Y).length > 0,
  )
}
function X5() {
  return this.length > 1 ? this._make(this[0]) : this
}
function Q5() {
  return this.length > 0 ? this._make(this[this.length - 1]) : this
}
function V5(Y) {
  var Z
  if (((Y = +Y), Y === 0 && this.length <= 1)) return this
  if (Y < 0) Y = this.length + Y
  return this._make((Z = this[Y]) !== null && Z !== void 0 ? Z : [])
}
function z5(Y) {
  if (Y == null) return this.toArray()
  return this[Y < 0 ? this.length + Y : Y]
}
function H5() {
  return Array.prototype.slice.call(this)
}
function W5(Y) {
  let Z, K
  if (Y == null) ((Z = this.parent().children()), (K = this[0]))
  else if (typeof Y === 'string') ((Z = this._make(Y)), (K = this[0]))
  else ((Z = this), (K = t(Y) ? Y[0] : Y))
  return Array.prototype.indexOf.call(Z, K)
}
function U5(Y, Z) {
  return this._make(Array.prototype.slice.call(this, Y, Z))
}
function F5() {
  var Y
  return (Y = this.prevObject) !== null && Y !== void 0 ? Y : this._make([])
}
function q5(Y, Z) {
  let K = this._make(Y, Z),
    J = j0([...this.get(), ...K.get()])
  return this._make(J)
}
function B5(Y) {
  return this.prevObject ? this.add(Y ? this.prevObject.filter(Y) : this.prevObject) : this
}
var PY = {}
V0(PY, {
  wrapInner: () => O5,
  wrapAll: () => f5,
  wrap: () => v5,
  unwrap: () => b5,
  toString: () => G5,
  text: () => $5,
  replaceWith: () => h5,
  remove: () => x5,
  prependTo: () => j5,
  prepend: () => P5,
  insertBefore: () => g5,
  insertAfter: () => M5,
  html: () => D5,
  empty: () => C5,
  clone: () => E5,
  before: () => N5,
  appendTo: () => L5,
  append: () => R5,
  after: () => y5,
  _makeDomArray: () => w5,
})
function rZ(Y) {
  return function (K, J, Q, V) {
    if (typeof Buffer < 'u' && Buffer.isBuffer(K)) K = K.toString()
    if (typeof K === 'string') return Y(K, J, Q, V)
    let z = K
    if (!Array.isArray(z) && n(z)) return z
    let F = new a([])
    return (O0(z, F), F)
  }
}
function O0(Y, Z) {
  let K = Array.isArray(Y) ? Y : [Y]
  if (Z) Z.children = K
  else Z = null
  for (let J = 0; J < K.length; J++) {
    let Q = K[J]
    if (Q.parent && Q.parent.children !== K) F0(Q)
    if (Z) ((Q.prev = K[J - 1] || null), (Q.next = K[J + 1] || null))
    else Q.prev = Q.next = null
    Q.parent = Z
  }
  return Z
}
function w5(Y, Z) {
  if (Y == null) return []
  if (typeof Y === 'string') return this._parse(Y, this.options, !1, null).children.slice(0)
  if ('length' in Y) {
    if (Y.length === 1) return this._makeDomArray(Y[0], Z)
    let K = []
    for (let J = 0; J < Y.length; J++) {
      let Q = Y[J]
      if (typeof Q === 'object') {
        if (Q == null) continue
        if (!('length' in Q)) {
          K.push(Z ? m0(Q, !0) : Q)
          continue
        }
      }
      K.push(...this._makeDomArray(Q, Z))
    }
    return K
  }
  return [Z ? m0(Y, !0) : Y]
}
function lZ(Y) {
  return function (...Z) {
    let K = this.length - 1
    return G(this, (J, Q) => {
      if (!C(J)) return
      let V = typeof Z[0] === 'function' ? Z[0].call(J, Q, this._render(J.children)) : Z,
        z = this._makeDomArray(V, Q < K)
      Y(z, J.children, J)
    })
  }
}
function b0(Y, Z, K, J, Q) {
  var V, z
  let F = [Z, K, ...J],
    q = Z === 0 ? null : Y[Z - 1],
    w = Z + K >= Y.length ? null : Y[Z + K]
  for (let j = 0; j < J.length; ++j) {
    let O = J[j],
      b = O.parent
    if (b) {
      let g = b.children.indexOf(O)
      if (g !== -1) {
        if ((b.children.splice(g, 1), Q === b && Z > g)) F[0]--
      }
    }
    if (((O.parent = Q), O.prev)) O.prev.next = (V = O.next) !== null && V !== void 0 ? V : null
    if (O.next) O.next.prev = (z = O.prev) !== null && z !== void 0 ? z : null
    ;((O.prev = j === 0 ? q : J[j - 1]), (O.next = j === J.length - 1 ? w : J[j + 1]))
  }
  if (q) q.next = J[0]
  if (w) w.prev = J[J.length - 1]
  return Y.splice(...F)
}
function L5(Y) {
  return ((t(Y) ? Y : this._make(Y)).append(this), this)
}
function j5(Y) {
  return ((t(Y) ? Y : this._make(Y)).prepend(this), this)
}
var R5 = lZ((Y, Z, K) => {
    b0(Z, Z.length, 0, Y, K)
  }),
  P5 = lZ((Y, Z, K) => {
    b0(Z, 0, 0, Y, K)
  })
function sZ(Y) {
  return function (Z) {
    let K = this.length - 1,
      J = this.parents().last()
    for (let Q = 0; Q < this.length; Q++) {
      let V = this[Q],
        z =
          typeof Z === 'function'
            ? Z.call(V, Q, V)
            : typeof Z === 'string' && !K1(Z)
              ? J.find(Z).clone()
              : Z,
        [F] = this._makeDomArray(z, Q < K)
      if (!F || !C(F)) continue
      let q = F,
        w = 0
      while (w < q.children.length) {
        let j = q.children[w]
        if (f(j)) ((q = j), (w = 0))
        else w++
      }
      Y(V, q, [F])
    }
    return this
  }
}
var v5 = sZ((Y, Z, K) => {
    let { parent: J } = Y
    if (!J) return
    let Q = J.children,
      V = Q.indexOf(Y)
    ;(O0([Y], Z), b0(Q, V, 0, K, J))
  }),
  O5 = sZ((Y, Z, K) => {
    if (!C(Y)) return
    ;(O0(Y.children, Z), O0(K, Y))
  })
function b5(Y) {
  return (
    this.parent(Y)
      .not('body')
      .each((Z, K) => {
        this._make(K).replaceWith(K.children)
      }),
    this
  )
}
function f5(Y) {
  let Z = this[0]
  if (Z) {
    let K = this._make(typeof Y === 'function' ? Y.call(Z, 0, Z) : Y).insertBefore(Z),
      J
    for (let V = 0; V < K.length; V++) if (K[V].type === p.Tag) J = K[V]
    let Q = 0
    while (J && Q < J.children.length) {
      let V = J.children[Q]
      if (V.type === p.Tag) ((J = V), (Q = 0))
      else Q++
    }
    if (J) this._make(J).append(this)
  }
  return this
}
function y5(...Y) {
  let Z = this.length - 1
  return G(this, (K, J) => {
    if (!C(K) || !K.parent) return
    let Q = K.parent.children,
      V = Q.indexOf(K)
    if (V === -1) return
    let z = typeof Y[0] === 'function' ? Y[0].call(K, J, this._render(K.children)) : Y,
      F = this._makeDomArray(z, J < Z)
    b0(Q, V + 1, 0, F, K.parent)
  })
}
function M5(Y) {
  if (typeof Y === 'string') Y = this._make(Y)
  this.remove()
  let Z = []
  for (let K of this._makeDomArray(Y)) {
    let J = this.clone().toArray(),
      { parent: Q } = K
    if (!Q) continue
    let V = Q.children,
      z = V.indexOf(K)
    if (z === -1) continue
    ;(b0(V, z + 1, 0, J, Q), Z.push(...J))
  }
  return this._make(Z)
}
function N5(...Y) {
  let Z = this.length - 1
  return G(this, (K, J) => {
    if (!C(K) || !K.parent) return
    let Q = K.parent.children,
      V = Q.indexOf(K)
    if (V === -1) return
    let z = typeof Y[0] === 'function' ? Y[0].call(K, J, this._render(K.children)) : Y,
      F = this._makeDomArray(z, J < Z)
    b0(Q, V, 0, F, K.parent)
  })
}
function g5(Y) {
  let Z = this._make(Y)
  this.remove()
  let K = []
  return (
    G(Z, J => {
      let Q = this.clone().toArray(),
        { parent: V } = J
      if (!V) return
      let z = V.children,
        F = z.indexOf(J)
      if (F === -1) return
      ;(b0(z, F, 0, Q, V), K.push(...Q))
    }),
    this._make(K)
  )
}
function x5(Y) {
  let Z = Y ? this.filter(Y) : this
  return (
    G(Z, K => {
      ;(F0(K), (K.prev = K.next = K.parent = null))
    }),
    this
  )
}
function h5(Y) {
  return G(this, (Z, K) => {
    let { parent: J } = Z
    if (!J) return
    let Q = J.children,
      V = typeof Y === 'function' ? Y.call(Z, K, Z) : Y,
      z = this._makeDomArray(V)
    O0(z, null)
    let F = Q.indexOf(Z)
    if ((b0(Q, F, 1, z, J), !z.includes(Z))) Z.parent = Z.prev = Z.next = null
  })
}
function C5() {
  return G(this, Y => {
    if (!C(Y)) return
    for (let Z of Y.children) Z.next = Z.prev = Z.parent = null
    Y.children.length = 0
  })
}
function D5(Y) {
  if (Y === void 0) {
    let Z = this[0]
    if (!Z || !C(Z)) return null
    return this._render(Z.children)
  }
  return G(this, Z => {
    if (!C(Z)) return
    for (let J of Z.children) J.next = J.prev = J.parent = null
    let K = t(Y) ? Y.toArray() : this._parse(`${Y}`, this.options, !1, Z).children
    O0(K, Z)
  })
}
function G5() {
  return this._render(this)
}
function $5(Y) {
  if (Y === void 0) return C0(this)
  if (typeof Y === 'function') return G(this, (Z, K) => this._make(Z).text(Y.call(Z, K, C0([Z]))))
  return G(this, Z => {
    if (!C(Z)) return
    for (let J of Z.children) J.next = J.prev = J.parent = null
    let K = new W0(`${Y}`)
    O0(K, Z)
  })
}
function E5() {
  let Y = Array.prototype.map.call(this.get(), K => m0(K, !0)),
    Z = new a(Y)
  for (let K of Y) K.parent = Z
  return this._make(Y)
}
var vY = {}
V0(vY, { css: () => u5 })
function u5(Y, Z) {
  if ((Y != null && Z != null) || (typeof Y === 'object' && !Array.isArray(Y)))
    return G(this, (K, J) => {
      if (f(K)) pZ(K, Y, Z, J)
    })
  if (this.length === 0) return
  return aZ(this[0], Y)
}
function pZ(Y, Z, K, J) {
  if (typeof Z === 'string') {
    let Q = aZ(Y),
      V = typeof K === 'function' ? K.call(Y, J, Q[Z]) : K
    if (V === '') delete Q[Z]
    else if (V != null) Q[Z] = V
    Y.attribs.style = I5(Q)
  } else if (typeof Z === 'object') {
    let Q = Object.keys(Z)
    for (let V = 0; V < Q.length; V++) {
      let z = Q[V]
      pZ(Y, z, Z[z], V)
    }
  }
}
function aZ(Y, Z) {
  if (!Y || !f(Y)) return
  let K = S5(Y.attribs.style)
  if (typeof Z === 'string') return K[Z]
  if (Array.isArray(Z)) {
    let J = {}
    for (let Q of Z) if (K[Q] != null) J[Q] = K[Q]
    return J
  }
  return K
}
function I5(Y) {
  return Object.keys(Y).reduce((Z, K) => `${Z}${Z ? ' ' : ''}${K}: ${Y[K]};`, '')
}
function S5(Y) {
  if (((Y = (Y || '').trim()), !Y)) return {}
  let Z = {},
    K
  for (let J of Y.split(';')) {
    let Q = J.indexOf(':')
    if (Q < 1 || Q === J.length - 1) {
      let V = J.trimEnd()
      if (V.length > 0 && K !== void 0) Z[K] += `;${V}`
    } else ((K = J.slice(0, Q).trim()), (Z[K] = J.slice(Q + 1).trim()))
  }
  return Z
}
var OY = {}
V0(OY, { serializeArray: () => A5, serialize: () => _5 })
var nZ = 'input,select,textarea,keygen',
  k5 = /%20/g,
  oZ = /\r?\n/g
function _5() {
  return this.serializeArray()
    .map(K => `${encodeURIComponent(K.name)}=${encodeURIComponent(K.value)}`)
    .join('&')
    .replace(k5, '+')
}
function A5() {
  return this.map((Y, Z) => {
    let K = this._make(Z)
    if (f(Z) && Z.name === 'form') return K.find(nZ).toArray()
    return K.filter(nZ).toArray()
  })
    .filter(
      '[name!=""]:enabled:not(:submit, :button, :image, :reset, :file):matches([checked], :not(:checkbox, :radio))',
    )
    .map((Y, Z) => {
      var K
      let J = this._make(Z),
        Q = J.attr('name'),
        V = (K = J.val()) !== null && K !== void 0 ? K : ''
      if (Array.isArray(V))
        return V.map(z => ({
          name: Q,
          value: z.replace(
            oZ,
            `\r
`,
          ),
        }))
      return {
        name: Q,
        value: V.replace(
          oZ,
          `\r
`,
        ),
      }
    })
    .toArray()
}
var bY = {}
V0(bY, { extract: () => m5 })
function T5(Y) {
  var Z
  if (typeof Y === 'string') return { selector: Y, value: 'textContent' }
  return { selector: Y.selector, value: (Z = Y.value) !== null && Z !== void 0 ? Z : 'textContent' }
}
function m5(Y) {
  let Z = {}
  for (let K in Y) {
    let J = Y[K],
      Q = Array.isArray(J),
      { selector: V, value: z } = T5(Q ? J[0] : J),
      F =
        typeof z === 'function'
          ? z
          : typeof z === 'string'
            ? q => this._make(q).prop(z)
            : q => this._make(q).extract(z)
    if (Q)
      Z[K] = this._findBySelector(V, Number.POSITIVE_INFINITY)
        .map((q, w) => F(w, K, Z))
        .get()
    else {
      let q = this._findBySelector(V, 1)
      Z[K] = q.length > 0 ? F(q[0], K, Z) : void 0
    }
  }
  return Z
}
class E0 {
  constructor(Y, Z, K) {
    if (((this.length = 0), (this.options = K), (this._root = Z), Y)) {
      for (let J = 0; J < Y.length; J++) this[J] = Y[J]
      this.length = Y.length
    }
  }
}
E0.prototype.cheerio = '[cheerio object]'
E0.prototype.splice = Array.prototype.splice
E0.prototype[Symbol.iterator] = Array.prototype[Symbol.iterator]
Object.assign(E0.prototype, p4, RY, PY, vY, OY, bY)
function tZ(Y, Z) {
  return function K(J, Q, V = !0) {
    if (J == null) throw Error('cheerio.load() expects a string')
    let z = Z1(Q),
      F = Y(J, z, V, null)
    class q extends E0 {
      _make(j, O) {
        let b = w(j, O)
        return ((b.prevObject = this), b)
      }
      _parse(j, O, b, N) {
        return Y(j, O, b, N)
      }
      _render(j) {
        return Z(j, this.options)
      }
    }
    function w(j, O, b = F, N) {
      if (j && t(j)) return j
      let g = Z1(N, z),
        S = typeof b === 'string' ? [Y(b, g, !1, null)] : 'length' in b ? b : [b],
        Z0 = t(S) ? S : new q(S, null, g)
      if (((Z0._root = Z0), !j)) return new q(void 0, Z0, g)
      let I0 =
          typeof j === 'string' && K1(j)
            ? Y(j, g, !1, null).children
            : i5(j)
              ? [j]
              : Array.isArray(j)
                ? j
                : void 0,
        S0 = new q(I0, Z0, g)
      if (I0) return S0
      if (typeof j !== 'string') throw TypeError('Unexpected type of selector')
      let t0 = j,
        e0 = O
          ? typeof O === 'string'
            ? K1(O)
              ? new q([Y(O, g, !1, null)], Z0, g)
              : ((t0 = `${O} ${t0}`), Z0)
            : t(O)
              ? O
              : new q(Array.isArray(O) ? O : [O], Z0, g)
          : Z0
      if (!e0) return S0
      return e0.find(t0)
    }
    return (
      Object.assign(w, S4, {
        load: K,
        _root: F,
        _options: z,
        fn: q.prototype,
        prototype: q.prototype,
      }),
      w
    )
  }
}
function i5(Y) {
  return !!Y.name || Y.type === p.Root || Y.type === p.Text || Y.type === p.Comment
}
var c5 = new Set([
    65534, 65535, 131070, 131071, 196606, 196607, 262142, 262143, 327678, 327679, 393214, 393215,
    458750, 458751, 524286, 524287, 589822, 589823, 655358, 655359, 720894, 720895, 786430, 786431,
    851966, 851967, 917502, 917503, 983038, 983039, 1048574, 1048575, 1114110, 1114111,
  ]),
  $ = '�',
  H
;(function (Y) {
  ;((Y[(Y.EOF = -1)] = 'EOF'),
    (Y[(Y.NULL = 0)] = 'NULL'),
    (Y[(Y.TABULATION = 9)] = 'TABULATION'),
    (Y[(Y.CARRIAGE_RETURN = 13)] = 'CARRIAGE_RETURN'),
    (Y[(Y.LINE_FEED = 10)] = 'LINE_FEED'),
    (Y[(Y.FORM_FEED = 12)] = 'FORM_FEED'),
    (Y[(Y.SPACE = 32)] = 'SPACE'),
    (Y[(Y.EXCLAMATION_MARK = 33)] = 'EXCLAMATION_MARK'),
    (Y[(Y.QUOTATION_MARK = 34)] = 'QUOTATION_MARK'),
    (Y[(Y.AMPERSAND = 38)] = 'AMPERSAND'),
    (Y[(Y.APOSTROPHE = 39)] = 'APOSTROPHE'),
    (Y[(Y.HYPHEN_MINUS = 45)] = 'HYPHEN_MINUS'),
    (Y[(Y.SOLIDUS = 47)] = 'SOLIDUS'),
    (Y[(Y.DIGIT_0 = 48)] = 'DIGIT_0'),
    (Y[(Y.DIGIT_9 = 57)] = 'DIGIT_9'),
    (Y[(Y.SEMICOLON = 59)] = 'SEMICOLON'),
    (Y[(Y.LESS_THAN_SIGN = 60)] = 'LESS_THAN_SIGN'),
    (Y[(Y.EQUALS_SIGN = 61)] = 'EQUALS_SIGN'),
    (Y[(Y.GREATER_THAN_SIGN = 62)] = 'GREATER_THAN_SIGN'),
    (Y[(Y.QUESTION_MARK = 63)] = 'QUESTION_MARK'),
    (Y[(Y.LATIN_CAPITAL_A = 65)] = 'LATIN_CAPITAL_A'),
    (Y[(Y.LATIN_CAPITAL_Z = 90)] = 'LATIN_CAPITAL_Z'),
    (Y[(Y.RIGHT_SQUARE_BRACKET = 93)] = 'RIGHT_SQUARE_BRACKET'),
    (Y[(Y.GRAVE_ACCENT = 96)] = 'GRAVE_ACCENT'),
    (Y[(Y.LATIN_SMALL_A = 97)] = 'LATIN_SMALL_A'),
    (Y[(Y.LATIN_SMALL_Z = 122)] = 'LATIN_SMALL_Z'))
})(H || (H = {}))
var d = {
  DASH_DASH: '--',
  CDATA_START: '[CDATA[',
  DOCTYPE: 'doctype',
  SCRIPT: 'script',
  PUBLIC: 'public',
  SYSTEM: 'system',
}
function Y4(Y) {
  return Y >= 55296 && Y <= 57343
}
function eZ(Y) {
  return Y >= 56320 && Y <= 57343
}
function Y8(Y, Z) {
  return (Y - 55296) * 1024 + 9216 + Z
}
function Z4(Y) {
  return (
    (Y !== 32 && Y !== 10 && Y !== 13 && Y !== 9 && Y !== 12 && Y >= 1 && Y <= 31) ||
    (Y >= 127 && Y <= 159)
  )
}
function K4(Y) {
  return (Y >= 64976 && Y <= 65007) || c5.has(Y)
}
var L
;(function (Y) {
  ;((Y.controlCharacterInInputStream = 'control-character-in-input-stream'),
    (Y.noncharacterInInputStream = 'noncharacter-in-input-stream'),
    (Y.surrogateInInputStream = 'surrogate-in-input-stream'),
    (Y.nonVoidHtmlElementStartTagWithTrailingSolidus =
      'non-void-html-element-start-tag-with-trailing-solidus'),
    (Y.endTagWithAttributes = 'end-tag-with-attributes'),
    (Y.endTagWithTrailingSolidus = 'end-tag-with-trailing-solidus'),
    (Y.unexpectedSolidusInTag = 'unexpected-solidus-in-tag'),
    (Y.unexpectedNullCharacter = 'unexpected-null-character'),
    (Y.unexpectedQuestionMarkInsteadOfTagName = 'unexpected-question-mark-instead-of-tag-name'),
    (Y.invalidFirstCharacterOfTagName = 'invalid-first-character-of-tag-name'),
    (Y.unexpectedEqualsSignBeforeAttributeName = 'unexpected-equals-sign-before-attribute-name'),
    (Y.missingEndTagName = 'missing-end-tag-name'),
    (Y.unexpectedCharacterInAttributeName = 'unexpected-character-in-attribute-name'),
    (Y.unknownNamedCharacterReference = 'unknown-named-character-reference'),
    (Y.missingSemicolonAfterCharacterReference = 'missing-semicolon-after-character-reference'),
    (Y.unexpectedCharacterAfterDoctypeSystemIdentifier =
      'unexpected-character-after-doctype-system-identifier'),
    (Y.unexpectedCharacterInUnquotedAttributeValue =
      'unexpected-character-in-unquoted-attribute-value'),
    (Y.eofBeforeTagName = 'eof-before-tag-name'),
    (Y.eofInTag = 'eof-in-tag'),
    (Y.missingAttributeValue = 'missing-attribute-value'),
    (Y.missingWhitespaceBetweenAttributes = 'missing-whitespace-between-attributes'),
    (Y.missingWhitespaceAfterDoctypePublicKeyword =
      'missing-whitespace-after-doctype-public-keyword'),
    (Y.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers =
      'missing-whitespace-between-doctype-public-and-system-identifiers'),
    (Y.missingWhitespaceAfterDoctypeSystemKeyword =
      'missing-whitespace-after-doctype-system-keyword'),
    (Y.missingQuoteBeforeDoctypePublicIdentifier =
      'missing-quote-before-doctype-public-identifier'),
    (Y.missingQuoteBeforeDoctypeSystemIdentifier =
      'missing-quote-before-doctype-system-identifier'),
    (Y.missingDoctypePublicIdentifier = 'missing-doctype-public-identifier'),
    (Y.missingDoctypeSystemIdentifier = 'missing-doctype-system-identifier'),
    (Y.abruptDoctypePublicIdentifier = 'abrupt-doctype-public-identifier'),
    (Y.abruptDoctypeSystemIdentifier = 'abrupt-doctype-system-identifier'),
    (Y.cdataInHtmlContent = 'cdata-in-html-content'),
    (Y.incorrectlyOpenedComment = 'incorrectly-opened-comment'),
    (Y.eofInScriptHtmlCommentLikeText = 'eof-in-script-html-comment-like-text'),
    (Y.eofInDoctype = 'eof-in-doctype'),
    (Y.nestedComment = 'nested-comment'),
    (Y.abruptClosingOfEmptyComment = 'abrupt-closing-of-empty-comment'),
    (Y.eofInComment = 'eof-in-comment'),
    (Y.incorrectlyClosedComment = 'incorrectly-closed-comment'),
    (Y.eofInCdata = 'eof-in-cdata'),
    (Y.absenceOfDigitsInNumericCharacterReference =
      'absence-of-digits-in-numeric-character-reference'),
    (Y.nullCharacterReference = 'null-character-reference'),
    (Y.surrogateCharacterReference = 'surrogate-character-reference'),
    (Y.characterReferenceOutsideUnicodeRange = 'character-reference-outside-unicode-range'),
    (Y.controlCharacterReference = 'control-character-reference'),
    (Y.noncharacterCharacterReference = 'noncharacter-character-reference'),
    (Y.missingWhitespaceBeforeDoctypeName = 'missing-whitespace-before-doctype-name'),
    (Y.missingDoctypeName = 'missing-doctype-name'),
    (Y.invalidCharacterSequenceAfterDoctypeName = 'invalid-character-sequence-after-doctype-name'),
    (Y.duplicateAttribute = 'duplicate-attribute'),
    (Y.nonConformingDoctype = 'non-conforming-doctype'),
    (Y.missingDoctype = 'missing-doctype'),
    (Y.misplacedDoctype = 'misplaced-doctype'),
    (Y.endTagWithoutMatchingOpenElement = 'end-tag-without-matching-open-element'),
    (Y.closingOfElementWithOpenChildElements = 'closing-of-element-with-open-child-elements'),
    (Y.disallowedContentInNoscriptInHead = 'disallowed-content-in-noscript-in-head'),
    (Y.openElementsLeftAfterEof = 'open-elements-left-after-eof'),
    (Y.abandonedHeadElementChild = 'abandoned-head-element-child'),
    (Y.misplacedStartTagForHeadElement = 'misplaced-start-tag-for-head-element'),
    (Y.nestedNoscriptInHead = 'nested-noscript-in-head'),
    (Y.eofInElementThatCanContainOnlyText = 'eof-in-element-that-can-contain-only-text'))
})(L || (L = {}))
var r5 = 65536
class fY {
  constructor(Y) {
    ;((this.handler = Y),
      (this.html = ''),
      (this.pos = -1),
      (this.lastGapPos = -2),
      (this.gapStack = []),
      (this.skipNextNewLine = !1),
      (this.lastChunkWritten = !1),
      (this.endOfChunkHit = !1),
      (this.bufferWaterline = r5),
      (this.isEol = !1),
      (this.lineStartPos = 0),
      (this.droppedBufferSize = 0),
      (this.line = 1),
      (this.lastErrOffset = -1))
  }
  get col() {
    return this.pos - this.lineStartPos + Number(this.lastGapPos !== this.pos)
  }
  get offset() {
    return this.droppedBufferSize + this.pos
  }
  getError(Y, Z) {
    let { line: K, col: J, offset: Q } = this,
      V = J + Z,
      z = Q + Z
    return {
      code: Y,
      startLine: K,
      endLine: K,
      startCol: V,
      endCol: V,
      startOffset: z,
      endOffset: z,
    }
  }
  _err(Y) {
    if (this.handler.onParseError && this.lastErrOffset !== this.offset)
      ((this.lastErrOffset = this.offset), this.handler.onParseError(this.getError(Y, 0)))
  }
  _addGap() {
    ;(this.gapStack.push(this.lastGapPos), (this.lastGapPos = this.pos))
  }
  _processSurrogate(Y) {
    if (this.pos !== this.html.length - 1) {
      let Z = this.html.charCodeAt(this.pos + 1)
      if (eZ(Z)) return (this.pos++, this._addGap(), Y8(Y, Z))
    } else if (!this.lastChunkWritten) return ((this.endOfChunkHit = !0), H.EOF)
    return (this._err(L.surrogateInInputStream), Y)
  }
  willDropParsedChunk() {
    return this.pos > this.bufferWaterline
  }
  dropParsedChunk() {
    if (this.willDropParsedChunk())
      ((this.html = this.html.substring(this.pos)),
        (this.lineStartPos -= this.pos),
        (this.droppedBufferSize += this.pos),
        (this.pos = 0),
        (this.lastGapPos = -2),
        (this.gapStack.length = 0))
  }
  write(Y, Z) {
    if (this.html.length > 0) this.html += Y
    else this.html = Y
    ;((this.endOfChunkHit = !1), (this.lastChunkWritten = Z))
  }
  insertHtmlAtCurrentPos(Y) {
    ;((this.html = this.html.substring(0, this.pos + 1) + Y + this.html.substring(this.pos + 1)),
      (this.endOfChunkHit = !1))
  }
  startsWith(Y, Z) {
    if (this.pos + Y.length > this.html.length)
      return ((this.endOfChunkHit = !this.lastChunkWritten), !1)
    if (Z) return this.html.startsWith(Y, this.pos)
    for (let K = 0; K < Y.length; K++)
      if ((this.html.charCodeAt(this.pos + K) | 32) !== Y.charCodeAt(K)) return !1
    return !0
  }
  peek(Y) {
    let Z = this.pos + Y
    if (Z >= this.html.length) return ((this.endOfChunkHit = !this.lastChunkWritten), H.EOF)
    let K = this.html.charCodeAt(Z)
    return K === H.CARRIAGE_RETURN ? H.LINE_FEED : K
  }
  advance() {
    if ((this.pos++, this.isEol)) ((this.isEol = !1), this.line++, (this.lineStartPos = this.pos))
    if (this.pos >= this.html.length) return ((this.endOfChunkHit = !this.lastChunkWritten), H.EOF)
    let Y = this.html.charCodeAt(this.pos)
    if (Y === H.CARRIAGE_RETURN)
      return ((this.isEol = !0), (this.skipNextNewLine = !0), H.LINE_FEED)
    if (Y === H.LINE_FEED) {
      if (((this.isEol = !0), this.skipNextNewLine))
        return (this.line--, (this.skipNextNewLine = !1), this._addGap(), this.advance())
    }
    if (((this.skipNextNewLine = !1), Y4(Y))) Y = this._processSurrogate(Y)
    if (
      !(
        this.handler.onParseError === null ||
        (Y > 31 && Y < 127) ||
        Y === H.LINE_FEED ||
        Y === H.CARRIAGE_RETURN ||
        (Y > 159 && Y < 64976)
      )
    )
      this._checkForProblematicCharacters(Y)
    return Y
  }
  _checkForProblematicCharacters(Y) {
    if (Z4(Y)) this._err(L.controlCharacterInInputStream)
    else if (K4(Y)) this._err(L.noncharacterInInputStream)
  }
  retreat(Y) {
    this.pos -= Y
    while (this.pos < this.lastGapPos) ((this.lastGapPos = this.gapStack.pop()), this.pos--)
    this.isEol = !1
  }
}
var h
;(function (Y) {
  ;((Y[(Y.CHARACTER = 0)] = 'CHARACTER'),
    (Y[(Y.NULL_CHARACTER = 1)] = 'NULL_CHARACTER'),
    (Y[(Y.WHITESPACE_CHARACTER = 2)] = 'WHITESPACE_CHARACTER'),
    (Y[(Y.START_TAG = 3)] = 'START_TAG'),
    (Y[(Y.END_TAG = 4)] = 'END_TAG'),
    (Y[(Y.COMMENT = 5)] = 'COMMENT'),
    (Y[(Y.DOCTYPE = 6)] = 'DOCTYPE'),
    (Y[(Y.EOF = 7)] = 'EOF'),
    (Y[(Y.HIBERNATION = 8)] = 'HIBERNATION'))
})(h || (h = {}))
function J4(Y, Z) {
  for (let K = Y.attrs.length - 1; K >= 0; K--) if (Y.attrs[K].name === Z) return Y.attrs[K].value
  return null
}
var yY = new Uint16Array(
  'ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\x00\x00\x00\x00\x00\x00ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀\uD835\uDD04rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀\uD835\uDD38plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀\uD835\uDC9Cign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀\uD835\uDD05pf;쀀\uD835\uDD39eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀\uD835\uDC9EpĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀\uD835\uDD07Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\x00\x00\x00͔͂\x00Ѕf;쀀\uD835\uDD3Bƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\x00\x00ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\x00\x00ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\x00ц\x00ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\x00ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀\uD835\uDC9Frok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀\uD835\uDD08rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\x00\x00ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀\uD835\uDD3Csilon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀\uD835\uDD09lledɓ֗\x00\x00֣mallSquare;旼erySmallSquare;斪Ͱֺ\x00ֿ\x00\x00ׄf;쀀\uD835\uDD3DAll;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀\uD835\uDD0A;拙pf;쀀\uD835\uDD3Eeater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀\uD835\uDCA2;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\x00ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\x00ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀\uD835\uDD40a;䎙cr;愐ilde;䄨ǫޚ\x00ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀\uD835\uDD0Dpf;쀀\uD835\uDD41ǣ߇\x00ߌr;쀀\uD835\uDCA5rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀\uD835\uDD0Epf;쀀\uD835\uDD42cr;쀀\uD835\uDCA6րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\x00ࣃbleBracket;柦nǔࣈ\x00࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀\uD835\uDD0FĀ;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀\uD835\uDD43erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀\uD835\uDD10nusPlus;戓pf;쀀\uD835\uDD44cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀\uD835\uDD11ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀\uD835\uDCA9ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀\uD835\uDD12rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀\uD835\uDD46enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀\uD835\uDCAAash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀\uD835\uDD13i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀\uD835\uDCAB;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀\uD835\uDD14pf;愚cr;쀀\uD835\uDCAC؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\x00စbleBracket;柧nǔည\x00နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀\uD835\uDD16ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀\uD835\uDD4Aɲᅭ\x00\x00ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀\uD835\uDCAEar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀\uD835\uDD17Āeiቻ኉ǲኀ\x00ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀\uD835\uDD4BipleDot;惛Āctዖዛr;쀀\uD835\uDCAFrok;䅦ૡዷጎጚጦ\x00ጬጱ\x00\x00\x00\x00\x00ጸጽ፷ᎅ\x00᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\x00጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀\uD835\uDD18rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀\uD835\uDD4CЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀\uD835\uDCB0ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀\uD835\uDD19pf;쀀\uD835\uDD4Dcr;쀀\uD835\uDCB1dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀\uD835\uDD1Apf;쀀\uD835\uDD4Ecr;쀀\uD835\uDCB2Ȁfiosᓋᓐᓒᓘr;쀀\uD835\uDD1B;䎞pf;쀀\uD835\uDD4Fcr;쀀\uD835\uDCB3ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀\uD835\uDD1Cpf;쀀\uD835\uDD50cr;쀀\uD835\uDCB4ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\x00ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀\uD835\uDCB5௡ᖃᖊᖐ\x00ᖰᖶᖿ\x00\x00\x00\x00ᗆᗛᗫᙟ᙭\x00ᚕ᚛ᚲᚹ\x00ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀\uD835\uDD1Erave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\x00\x00ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀\uD835\uDD52΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀\uD835\uDCB6;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀\uD835\uDD1Fg΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\x00\x00ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\x00ᠳƲᠯ\x00ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀\uD835\uDD53Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀\uD835\uDCB7mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\x00᧨ᨑᨕᨲ\x00ᨷᩐ\x00\x00᪴\x00\x00᫁\x00\x00ᬡᬮ᭍᭒\x00᯽\x00ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\x00᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀\uD835\uDD20ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\x00\x00᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\x00ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\x00\x00᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\x00ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀\uD835\uDD54oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀\uD835\uDCB8Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\x00\x00᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\x00\x00ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀\uD835\uDD21arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\x00\x00ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀\uD835\uDD55ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\x00\x00ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀\uD835\uDCB9;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀\uD835\uDD22ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀\uD835\uDD56ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\x00\x00ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\x00ᾞ\x00ᾡᾧ\x00\x00ῆῌ\x00ΐ\x00ῦῪ \x00 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\x00\x00᾽g;耀ﬀig;耀ﬄ;쀀\uD835\uDD23lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\x00ῳf;쀀\uD835\uDD57ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\x00⁐β•‥‧‪‬\x00‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\x00‶;慔;慖ʴ‾⁁\x00\x00⁃耻¾䂾;慗;慜5;慘ƶ⁌\x00⁎;慚;慝8;慞l;恄wn;挢cr;쀀\uD835\uDCBBࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀\uD835\uDD24Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀\uD835\uDD58Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\x00↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀\uD835\uDD25sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀\uD835\uDD59bar;怕ƀclt≯≴≸r;쀀\uD835\uDCBDasè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\x00⊪\x00⊸⋅⋎\x00⋕⋳\x00\x00⋸⌢⍧⍢⍿\x00⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀\uD835\uDD26rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀\uD835\uDD5Aa;䎹uest耻¿䂿Āci⎊⎏r;쀀\uD835\uDCBEnʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\x00⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀\uD835\uDD27ath;䈷pf;쀀\uD835\uDD5Bǣ⏬\x00⏱r;쀀\uD835\uDCBFrcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀\uD835\uDD28reen;䄸cy;䑅cy;䑜pf;쀀\uD835\uDD5Ccr;쀀\uD835\uDCC0஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\x00⒪\x00⒱\x00\x00\x00\x00\x00⒵Ⓔ\x00ⓆⓈⓍ\x00⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀\uD835\uDD29Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀\uD835\uDD5Dus;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀\uD835\uDCC1mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀\uD835\uDD2Ao;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀\uD835\uDD5EĀct⣸⣽r;쀀\uD835\uDCC2pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\x00⧣p肻 ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\x00⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀\uD835\uDD2BȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀\uD835\uDD5F膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀\uD835\uDCC3ortɭ⬅\x00\x00⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00ⴭ\x00ⴸⵈⵠⵥ⵲ⶄᬇ\x00\x00ⶍⶫ\x00ⷈⷎ\x00ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀\uD835\uDD2Cͯ⵹\x00\x00⵼\x00ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀\uD835\uDD60ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\x00⹽\x00⺀⺝\x00⺢⺹\x00\x00⻋ຜ\x00⼓\x00\x00⼫⾼\x00⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\x00\x00⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀\uD835\uDD2Dƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀\uD835\uDD61nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀\uD835\uDCC5;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀\uD835\uDD2Epf;쀀\uD835\uDD62rime;恗cr;쀀\uD835\uDCC6ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀\uD835\uDD2FĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀\uD835\uDD63us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀\uD835\uDCC7Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\x00㍺㎤\x00\x00㏬㏰\x00㐨㑈㑚㒭㒱㓊㓱\x00㘖\x00\x00㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\x00㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀\uD835\uDD30Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\x00\x00㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀\uD835\uDD64aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀\uD835\uDCC8tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\x00㙾㛂\x00\x00\x00\x00\x00㛛㜃\x00㜉㝬\x00\x00\x00㞇ɲ㙖\x00\x00㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀\uD835\uDD31Ȁeiko㚆㚝㚵㚼ǲ㚋\x00㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀\uD835\uDD65rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀\uD835\uDCC9;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\x00㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀\uD835\uDD32rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\x00\x00㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀\uD835\uDD66̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\x00\x00㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀\uD835\uDCCAƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀\uD835\uDD33tré㦮suĀbp㧯㧱»ജ»൙pf;쀀\uD835\uDD67roð໻tré㦴Ācu㨆㨋r;쀀\uD835\uDCCBĀbp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀\uD835\uDD34pf;쀀\uD835\uDD68Ā;eᑹ㩦atèᑹcr;쀀\uD835\uDCCCૣណ㪇\x00㪋\x00㪐㪛\x00\x00㪝㪨㪫㪯\x00\x00㫃㫎\x00㫘ៜ៟tré៑r;쀀\uD835\uDD35ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀\uD835\uDD69imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀\uD835\uDCCDĀpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀\uD835\uDD36cy;䑗pf;쀀\uD835\uDD6Acr;쀀\uD835\uDCCEĀcm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀\uD835\uDD37cy;䐶grarr;懝pf;쀀\uD835\uDD6Bcr;쀀\uD835\uDCCFĀjn㮅㮇;怍j;怌'
    .split('')
    .map(Y => Y.charCodeAt(0)),
)
var MY,
  s5 = new Map([
    [0, 65533],
    [128, 8364],
    [130, 8218],
    [131, 402],
    [132, 8222],
    [133, 8230],
    [134, 8224],
    [135, 8225],
    [136, 710],
    [137, 8240],
    [138, 352],
    [139, 8249],
    [140, 338],
    [142, 381],
    [145, 8216],
    [146, 8217],
    [147, 8220],
    [148, 8221],
    [149, 8226],
    [150, 8211],
    [151, 8212],
    [152, 732],
    [153, 8482],
    [154, 353],
    [155, 8250],
    [156, 339],
    [158, 382],
    [159, 376],
  ]),
  p5 =
    (MY = String.fromCodePoint) !== null && MY !== void 0
      ? MY
      : function (Y) {
          let Z = ''
          if (Y > 65535)
            ((Y -= 65536),
              (Z += String.fromCharCode(((Y >>> 10) & 1023) | 55296)),
              (Y = 56320 | (Y & 1023)))
          return ((Z += String.fromCharCode(Y)), Z)
        }
function Z8(Y) {
  var Z
  if ((Y >= 55296 && Y <= 57343) || Y > 1114111) return 65533
  return (Z = s5.get(Y)) !== null && Z !== void 0 ? Z : Y
}
var A
;(function (Y) {
  ;((Y[(Y.NUM = 35)] = 'NUM'),
    (Y[(Y.SEMI = 59)] = 'SEMI'),
    (Y[(Y.EQUALS = 61)] = 'EQUALS'),
    (Y[(Y.ZERO = 48)] = 'ZERO'),
    (Y[(Y.NINE = 57)] = 'NINE'),
    (Y[(Y.LOWER_A = 97)] = 'LOWER_A'),
    (Y[(Y.LOWER_F = 102)] = 'LOWER_F'),
    (Y[(Y.LOWER_X = 120)] = 'LOWER_X'),
    (Y[(Y.LOWER_Z = 122)] = 'LOWER_Z'),
    (Y[(Y.UPPER_A = 65)] = 'UPPER_A'),
    (Y[(Y.UPPER_F = 70)] = 'UPPER_F'),
    (Y[(Y.UPPER_Z = 90)] = 'UPPER_Z'))
})(A || (A = {}))
var a5 = 32,
  f0
;(function (Y) {
  ;((Y[(Y.VALUE_LENGTH = 49152)] = 'VALUE_LENGTH'),
    (Y[(Y.BRANCH_LENGTH = 16256)] = 'BRANCH_LENGTH'),
    (Y[(Y.JUMP_TABLE = 127)] = 'JUMP_TABLE'))
})(f0 || (f0 = {}))
function NY(Y) {
  return Y >= A.ZERO && Y <= A.NINE
}
function n5(Y) {
  return (Y >= A.UPPER_A && Y <= A.UPPER_F) || (Y >= A.LOWER_A && Y <= A.LOWER_F)
}
function o5(Y) {
  return (Y >= A.UPPER_A && Y <= A.UPPER_Z) || (Y >= A.LOWER_A && Y <= A.LOWER_Z) || NY(Y)
}
function t5(Y) {
  return Y === A.EQUALS || o5(Y)
}
var _
;(function (Y) {
  ;((Y[(Y.EntityStart = 0)] = 'EntityStart'),
    (Y[(Y.NumericStart = 1)] = 'NumericStart'),
    (Y[(Y.NumericDecimal = 2)] = 'NumericDecimal'),
    (Y[(Y.NumericHex = 3)] = 'NumericHex'),
    (Y[(Y.NamedEntity = 4)] = 'NamedEntity'))
})(_ || (_ = {}))
var z0
;(function (Y) {
  ;((Y[(Y.Legacy = 0)] = 'Legacy'),
    (Y[(Y.Strict = 1)] = 'Strict'),
    (Y[(Y.Attribute = 2)] = 'Attribute'))
})(z0 || (z0 = {}))
class gY {
  constructor(Y, Z, K) {
    ;((this.decodeTree = Y),
      (this.emitCodePoint = Z),
      (this.errors = K),
      (this.state = _.EntityStart),
      (this.consumed = 1),
      (this.result = 0),
      (this.treeIndex = 0),
      (this.excess = 1),
      (this.decodeMode = z0.Strict))
  }
  startEntity(Y) {
    ;((this.decodeMode = Y),
      (this.state = _.EntityStart),
      (this.result = 0),
      (this.treeIndex = 0),
      (this.excess = 1),
      (this.consumed = 1))
  }
  write(Y, Z) {
    switch (this.state) {
      case _.EntityStart: {
        if (Y.charCodeAt(Z) === A.NUM)
          return (
            (this.state = _.NumericStart), (this.consumed += 1), this.stateNumericStart(Y, Z + 1)
          )
        return ((this.state = _.NamedEntity), this.stateNamedEntity(Y, Z))
      }
      case _.NumericStart:
        return this.stateNumericStart(Y, Z)
      case _.NumericDecimal:
        return this.stateNumericDecimal(Y, Z)
      case _.NumericHex:
        return this.stateNumericHex(Y, Z)
      case _.NamedEntity:
        return this.stateNamedEntity(Y, Z)
    }
  }
  stateNumericStart(Y, Z) {
    if (Z >= Y.length) return -1
    if ((Y.charCodeAt(Z) | a5) === A.LOWER_X)
      return ((this.state = _.NumericHex), (this.consumed += 1), this.stateNumericHex(Y, Z + 1))
    return ((this.state = _.NumericDecimal), this.stateNumericDecimal(Y, Z))
  }
  addToNumericResult(Y, Z, K, J) {
    if (Z !== K) {
      let Q = K - Z
      ;((this.result = this.result * Math.pow(J, Q) + Number.parseInt(Y.substr(Z, Q), J)),
        (this.consumed += Q))
    }
  }
  stateNumericHex(Y, Z) {
    let K = Z
    while (Z < Y.length) {
      let J = Y.charCodeAt(Z)
      if (NY(J) || n5(J)) Z += 1
      else return (this.addToNumericResult(Y, K, Z, 16), this.emitNumericEntity(J, 3))
    }
    return (this.addToNumericResult(Y, K, Z, 16), -1)
  }
  stateNumericDecimal(Y, Z) {
    let K = Z
    while (Z < Y.length) {
      let J = Y.charCodeAt(Z)
      if (NY(J)) Z += 1
      else return (this.addToNumericResult(Y, K, Z, 10), this.emitNumericEntity(J, 2))
    }
    return (this.addToNumericResult(Y, K, Z, 10), -1)
  }
  emitNumericEntity(Y, Z) {
    var K
    if (this.consumed <= Z)
      return (
        (K = this.errors) === null ||
          K === void 0 ||
          K.absenceOfDigitsInNumericCharacterReference(this.consumed),
        0
      )
    if (Y === A.SEMI) this.consumed += 1
    else if (this.decodeMode === z0.Strict) return 0
    if ((this.emitCodePoint(Z8(this.result), this.consumed), this.errors)) {
      if (Y !== A.SEMI) this.errors.missingSemicolonAfterCharacterReference()
      this.errors.validateNumericCharacterReference(this.result)
    }
    return this.consumed
  }
  stateNamedEntity(Y, Z) {
    let { decodeTree: K } = this,
      J = K[this.treeIndex],
      Q = (J & f0.VALUE_LENGTH) >> 14
    for (; Z < Y.length; Z++, this.excess++) {
      let V = Y.charCodeAt(Z)
      if (((this.treeIndex = e5(K, J, this.treeIndex + Math.max(1, Q), V)), this.treeIndex < 0))
        return this.result === 0 || (this.decodeMode === z0.Attribute && (Q === 0 || t5(V)))
          ? 0
          : this.emitNotTerminatedNamedEntity()
      if (((J = K[this.treeIndex]), (Q = (J & f0.VALUE_LENGTH) >> 14), Q !== 0)) {
        if (V === A.SEMI)
          return this.emitNamedEntityData(this.treeIndex, Q, this.consumed + this.excess)
        if (this.decodeMode !== z0.Strict)
          ((this.result = this.treeIndex), (this.consumed += this.excess), (this.excess = 0))
      }
    }
    return -1
  }
  emitNotTerminatedNamedEntity() {
    var Y
    let { result: Z, decodeTree: K } = this,
      J = (K[Z] & f0.VALUE_LENGTH) >> 14
    return (
      this.emitNamedEntityData(Z, J, this.consumed),
      (Y = this.errors) === null || Y === void 0 || Y.missingSemicolonAfterCharacterReference(),
      this.consumed
    )
  }
  emitNamedEntityData(Y, Z, K) {
    let { decodeTree: J } = this
    if ((this.emitCodePoint(Z === 1 ? J[Y] & ~f0.VALUE_LENGTH : J[Y + 1], K), Z === 3))
      this.emitCodePoint(J[Y + 2], K)
    return K
  }
  end() {
    var Y
    switch (this.state) {
      case _.NamedEntity:
        return this.result !== 0 &&
          (this.decodeMode !== z0.Attribute || this.result === this.treeIndex)
          ? this.emitNotTerminatedNamedEntity()
          : 0
      case _.NumericDecimal:
        return this.emitNumericEntity(0, 2)
      case _.NumericHex:
        return this.emitNumericEntity(0, 3)
      case _.NumericStart:
        return (
          (Y = this.errors) === null ||
            Y === void 0 ||
            Y.absenceOfDigitsInNumericCharacterReference(this.consumed),
          0
        )
      case _.EntityStart:
        return 0
    }
  }
}
function e5(Y, Z, K, J) {
  let Q = (Z & f0.BRANCH_LENGTH) >> 7,
    V = Z & f0.JUMP_TABLE
  if (Q === 0) return V !== 0 && J === V ? K : -1
  if (V) {
    let q = J - V
    return q < 0 || q >= Q ? -1 : Y[K + q] - 1
  }
  let z = K,
    F = z + Q - 1
  while (z <= F) {
    let q = (z + F) >>> 1,
      w = Y[q]
    if (w < J) z = q + 1
    else if (w > J) F = q - 1
    else return Y[q + Q]
  }
  return -1
}
var X4 = {}
V0(X4, {
  hasUnescapedText: () => hY,
  getTagID: () => y0,
  TAG_NAMES: () => B,
  TAG_ID: () => X,
  SPECIAL_ELEMENTS: () => xY,
  NUMBERED_HEADERS: () => n0,
  NS: () => R,
  DOCUMENT_MODE: () => m,
  ATTRS: () => H0,
})
var R
;(function (Y) {
  ;((Y.HTML = 'http://www.w3.org/1999/xhtml'),
    (Y.MATHML = 'http://www.w3.org/1998/Math/MathML'),
    (Y.SVG = 'http://www.w3.org/2000/svg'),
    (Y.XLINK = 'http://www.w3.org/1999/xlink'),
    (Y.XML = 'http://www.w3.org/XML/1998/namespace'),
    (Y.XMLNS = 'http://www.w3.org/2000/xmlns/'))
})(R || (R = {}))
var H0
;(function (Y) {
  ;((Y.TYPE = 'type'),
    (Y.ACTION = 'action'),
    (Y.ENCODING = 'encoding'),
    (Y.PROMPT = 'prompt'),
    (Y.NAME = 'name'),
    (Y.COLOR = 'color'),
    (Y.FACE = 'face'),
    (Y.SIZE = 'size'))
})(H0 || (H0 = {}))
var m
;(function (Y) {
  ;((Y.NO_QUIRKS = 'no-quirks'), (Y.QUIRKS = 'quirks'), (Y.LIMITED_QUIRKS = 'limited-quirks'))
})(m || (m = {}))
var B
;(function (Y) {
  ;((Y.A = 'a'),
    (Y.ADDRESS = 'address'),
    (Y.ANNOTATION_XML = 'annotation-xml'),
    (Y.APPLET = 'applet'),
    (Y.AREA = 'area'),
    (Y.ARTICLE = 'article'),
    (Y.ASIDE = 'aside'),
    (Y.B = 'b'),
    (Y.BASE = 'base'),
    (Y.BASEFONT = 'basefont'),
    (Y.BGSOUND = 'bgsound'),
    (Y.BIG = 'big'),
    (Y.BLOCKQUOTE = 'blockquote'),
    (Y.BODY = 'body'),
    (Y.BR = 'br'),
    (Y.BUTTON = 'button'),
    (Y.CAPTION = 'caption'),
    (Y.CENTER = 'center'),
    (Y.CODE = 'code'),
    (Y.COL = 'col'),
    (Y.COLGROUP = 'colgroup'),
    (Y.DD = 'dd'),
    (Y.DESC = 'desc'),
    (Y.DETAILS = 'details'),
    (Y.DIALOG = 'dialog'),
    (Y.DIR = 'dir'),
    (Y.DIV = 'div'),
    (Y.DL = 'dl'),
    (Y.DT = 'dt'),
    (Y.EM = 'em'),
    (Y.EMBED = 'embed'),
    (Y.FIELDSET = 'fieldset'),
    (Y.FIGCAPTION = 'figcaption'),
    (Y.FIGURE = 'figure'),
    (Y.FONT = 'font'),
    (Y.FOOTER = 'footer'),
    (Y.FOREIGN_OBJECT = 'foreignObject'),
    (Y.FORM = 'form'),
    (Y.FRAME = 'frame'),
    (Y.FRAMESET = 'frameset'),
    (Y.H1 = 'h1'),
    (Y.H2 = 'h2'),
    (Y.H3 = 'h3'),
    (Y.H4 = 'h4'),
    (Y.H5 = 'h5'),
    (Y.H6 = 'h6'),
    (Y.HEAD = 'head'),
    (Y.HEADER = 'header'),
    (Y.HGROUP = 'hgroup'),
    (Y.HR = 'hr'),
    (Y.HTML = 'html'),
    (Y.I = 'i'),
    (Y.IMG = 'img'),
    (Y.IMAGE = 'image'),
    (Y.INPUT = 'input'),
    (Y.IFRAME = 'iframe'),
    (Y.KEYGEN = 'keygen'),
    (Y.LABEL = 'label'),
    (Y.LI = 'li'),
    (Y.LINK = 'link'),
    (Y.LISTING = 'listing'),
    (Y.MAIN = 'main'),
    (Y.MALIGNMARK = 'malignmark'),
    (Y.MARQUEE = 'marquee'),
    (Y.MATH = 'math'),
    (Y.MENU = 'menu'),
    (Y.META = 'meta'),
    (Y.MGLYPH = 'mglyph'),
    (Y.MI = 'mi'),
    (Y.MO = 'mo'),
    (Y.MN = 'mn'),
    (Y.MS = 'ms'),
    (Y.MTEXT = 'mtext'),
    (Y.NAV = 'nav'),
    (Y.NOBR = 'nobr'),
    (Y.NOFRAMES = 'noframes'),
    (Y.NOEMBED = 'noembed'),
    (Y.NOSCRIPT = 'noscript'),
    (Y.OBJECT = 'object'),
    (Y.OL = 'ol'),
    (Y.OPTGROUP = 'optgroup'),
    (Y.OPTION = 'option'),
    (Y.P = 'p'),
    (Y.PARAM = 'param'),
    (Y.PLAINTEXT = 'plaintext'),
    (Y.PRE = 'pre'),
    (Y.RB = 'rb'),
    (Y.RP = 'rp'),
    (Y.RT = 'rt'),
    (Y.RTC = 'rtc'),
    (Y.RUBY = 'ruby'),
    (Y.S = 's'),
    (Y.SCRIPT = 'script'),
    (Y.SEARCH = 'search'),
    (Y.SECTION = 'section'),
    (Y.SELECT = 'select'),
    (Y.SOURCE = 'source'),
    (Y.SMALL = 'small'),
    (Y.SPAN = 'span'),
    (Y.STRIKE = 'strike'),
    (Y.STRONG = 'strong'),
    (Y.STYLE = 'style'),
    (Y.SUB = 'sub'),
    (Y.SUMMARY = 'summary'),
    (Y.SUP = 'sup'),
    (Y.TABLE = 'table'),
    (Y.TBODY = 'tbody'),
    (Y.TEMPLATE = 'template'),
    (Y.TEXTAREA = 'textarea'),
    (Y.TFOOT = 'tfoot'),
    (Y.TD = 'td'),
    (Y.TH = 'th'),
    (Y.THEAD = 'thead'),
    (Y.TITLE = 'title'),
    (Y.TR = 'tr'),
    (Y.TRACK = 'track'),
    (Y.TT = 'tt'),
    (Y.U = 'u'),
    (Y.UL = 'ul'),
    (Y.SVG = 'svg'),
    (Y.VAR = 'var'),
    (Y.WBR = 'wbr'),
    (Y.XMP = 'xmp'))
})(B || (B = {}))
var X
;(function (Y) {
  ;((Y[(Y.UNKNOWN = 0)] = 'UNKNOWN'),
    (Y[(Y.A = 1)] = 'A'),
    (Y[(Y.ADDRESS = 2)] = 'ADDRESS'),
    (Y[(Y.ANNOTATION_XML = 3)] = 'ANNOTATION_XML'),
    (Y[(Y.APPLET = 4)] = 'APPLET'),
    (Y[(Y.AREA = 5)] = 'AREA'),
    (Y[(Y.ARTICLE = 6)] = 'ARTICLE'),
    (Y[(Y.ASIDE = 7)] = 'ASIDE'),
    (Y[(Y.B = 8)] = 'B'),
    (Y[(Y.BASE = 9)] = 'BASE'),
    (Y[(Y.BASEFONT = 10)] = 'BASEFONT'),
    (Y[(Y.BGSOUND = 11)] = 'BGSOUND'),
    (Y[(Y.BIG = 12)] = 'BIG'),
    (Y[(Y.BLOCKQUOTE = 13)] = 'BLOCKQUOTE'),
    (Y[(Y.BODY = 14)] = 'BODY'),
    (Y[(Y.BR = 15)] = 'BR'),
    (Y[(Y.BUTTON = 16)] = 'BUTTON'),
    (Y[(Y.CAPTION = 17)] = 'CAPTION'),
    (Y[(Y.CENTER = 18)] = 'CENTER'),
    (Y[(Y.CODE = 19)] = 'CODE'),
    (Y[(Y.COL = 20)] = 'COL'),
    (Y[(Y.COLGROUP = 21)] = 'COLGROUP'),
    (Y[(Y.DD = 22)] = 'DD'),
    (Y[(Y.DESC = 23)] = 'DESC'),
    (Y[(Y.DETAILS = 24)] = 'DETAILS'),
    (Y[(Y.DIALOG = 25)] = 'DIALOG'),
    (Y[(Y.DIR = 26)] = 'DIR'),
    (Y[(Y.DIV = 27)] = 'DIV'),
    (Y[(Y.DL = 28)] = 'DL'),
    (Y[(Y.DT = 29)] = 'DT'),
    (Y[(Y.EM = 30)] = 'EM'),
    (Y[(Y.EMBED = 31)] = 'EMBED'),
    (Y[(Y.FIELDSET = 32)] = 'FIELDSET'),
    (Y[(Y.FIGCAPTION = 33)] = 'FIGCAPTION'),
    (Y[(Y.FIGURE = 34)] = 'FIGURE'),
    (Y[(Y.FONT = 35)] = 'FONT'),
    (Y[(Y.FOOTER = 36)] = 'FOOTER'),
    (Y[(Y.FOREIGN_OBJECT = 37)] = 'FOREIGN_OBJECT'),
    (Y[(Y.FORM = 38)] = 'FORM'),
    (Y[(Y.FRAME = 39)] = 'FRAME'),
    (Y[(Y.FRAMESET = 40)] = 'FRAMESET'),
    (Y[(Y.H1 = 41)] = 'H1'),
    (Y[(Y.H2 = 42)] = 'H2'),
    (Y[(Y.H3 = 43)] = 'H3'),
    (Y[(Y.H4 = 44)] = 'H4'),
    (Y[(Y.H5 = 45)] = 'H5'),
    (Y[(Y.H6 = 46)] = 'H6'),
    (Y[(Y.HEAD = 47)] = 'HEAD'),
    (Y[(Y.HEADER = 48)] = 'HEADER'),
    (Y[(Y.HGROUP = 49)] = 'HGROUP'),
    (Y[(Y.HR = 50)] = 'HR'),
    (Y[(Y.HTML = 51)] = 'HTML'),
    (Y[(Y.I = 52)] = 'I'),
    (Y[(Y.IMG = 53)] = 'IMG'),
    (Y[(Y.IMAGE = 54)] = 'IMAGE'),
    (Y[(Y.INPUT = 55)] = 'INPUT'),
    (Y[(Y.IFRAME = 56)] = 'IFRAME'),
    (Y[(Y.KEYGEN = 57)] = 'KEYGEN'),
    (Y[(Y.LABEL = 58)] = 'LABEL'),
    (Y[(Y.LI = 59)] = 'LI'),
    (Y[(Y.LINK = 60)] = 'LINK'),
    (Y[(Y.LISTING = 61)] = 'LISTING'),
    (Y[(Y.MAIN = 62)] = 'MAIN'),
    (Y[(Y.MALIGNMARK = 63)] = 'MALIGNMARK'),
    (Y[(Y.MARQUEE = 64)] = 'MARQUEE'),
    (Y[(Y.MATH = 65)] = 'MATH'),
    (Y[(Y.MENU = 66)] = 'MENU'),
    (Y[(Y.META = 67)] = 'META'),
    (Y[(Y.MGLYPH = 68)] = 'MGLYPH'),
    (Y[(Y.MI = 69)] = 'MI'),
    (Y[(Y.MO = 70)] = 'MO'),
    (Y[(Y.MN = 71)] = 'MN'),
    (Y[(Y.MS = 72)] = 'MS'),
    (Y[(Y.MTEXT = 73)] = 'MTEXT'),
    (Y[(Y.NAV = 74)] = 'NAV'),
    (Y[(Y.NOBR = 75)] = 'NOBR'),
    (Y[(Y.NOFRAMES = 76)] = 'NOFRAMES'),
    (Y[(Y.NOEMBED = 77)] = 'NOEMBED'),
    (Y[(Y.NOSCRIPT = 78)] = 'NOSCRIPT'),
    (Y[(Y.OBJECT = 79)] = 'OBJECT'),
    (Y[(Y.OL = 80)] = 'OL'),
    (Y[(Y.OPTGROUP = 81)] = 'OPTGROUP'),
    (Y[(Y.OPTION = 82)] = 'OPTION'),
    (Y[(Y.P = 83)] = 'P'),
    (Y[(Y.PARAM = 84)] = 'PARAM'),
    (Y[(Y.PLAINTEXT = 85)] = 'PLAINTEXT'),
    (Y[(Y.PRE = 86)] = 'PRE'),
    (Y[(Y.RB = 87)] = 'RB'),
    (Y[(Y.RP = 88)] = 'RP'),
    (Y[(Y.RT = 89)] = 'RT'),
    (Y[(Y.RTC = 90)] = 'RTC'),
    (Y[(Y.RUBY = 91)] = 'RUBY'),
    (Y[(Y.S = 92)] = 'S'),
    (Y[(Y.SCRIPT = 93)] = 'SCRIPT'),
    (Y[(Y.SEARCH = 94)] = 'SEARCH'),
    (Y[(Y.SECTION = 95)] = 'SECTION'),
    (Y[(Y.SELECT = 96)] = 'SELECT'),
    (Y[(Y.SOURCE = 97)] = 'SOURCE'),
    (Y[(Y.SMALL = 98)] = 'SMALL'),
    (Y[(Y.SPAN = 99)] = 'SPAN'),
    (Y[(Y.STRIKE = 100)] = 'STRIKE'),
    (Y[(Y.STRONG = 101)] = 'STRONG'),
    (Y[(Y.STYLE = 102)] = 'STYLE'),
    (Y[(Y.SUB = 103)] = 'SUB'),
    (Y[(Y.SUMMARY = 104)] = 'SUMMARY'),
    (Y[(Y.SUP = 105)] = 'SUP'),
    (Y[(Y.TABLE = 106)] = 'TABLE'),
    (Y[(Y.TBODY = 107)] = 'TBODY'),
    (Y[(Y.TEMPLATE = 108)] = 'TEMPLATE'),
    (Y[(Y.TEXTAREA = 109)] = 'TEXTAREA'),
    (Y[(Y.TFOOT = 110)] = 'TFOOT'),
    (Y[(Y.TD = 111)] = 'TD'),
    (Y[(Y.TH = 112)] = 'TH'),
    (Y[(Y.THEAD = 113)] = 'THEAD'),
    (Y[(Y.TITLE = 114)] = 'TITLE'),
    (Y[(Y.TR = 115)] = 'TR'),
    (Y[(Y.TRACK = 116)] = 'TRACK'),
    (Y[(Y.TT = 117)] = 'TT'),
    (Y[(Y.U = 118)] = 'U'),
    (Y[(Y.UL = 119)] = 'UL'),
    (Y[(Y.SVG = 120)] = 'SVG'),
    (Y[(Y.VAR = 121)] = 'VAR'),
    (Y[(Y.WBR = 122)] = 'WBR'),
    (Y[(Y.XMP = 123)] = 'XMP'))
})(X || (X = {}))
var Y9 = new Map([
  [B.A, X.A],
  [B.ADDRESS, X.ADDRESS],
  [B.ANNOTATION_XML, X.ANNOTATION_XML],
  [B.APPLET, X.APPLET],
  [B.AREA, X.AREA],
  [B.ARTICLE, X.ARTICLE],
  [B.ASIDE, X.ASIDE],
  [B.B, X.B],
  [B.BASE, X.BASE],
  [B.BASEFONT, X.BASEFONT],
  [B.BGSOUND, X.BGSOUND],
  [B.BIG, X.BIG],
  [B.BLOCKQUOTE, X.BLOCKQUOTE],
  [B.BODY, X.BODY],
  [B.BR, X.BR],
  [B.BUTTON, X.BUTTON],
  [B.CAPTION, X.CAPTION],
  [B.CENTER, X.CENTER],
  [B.CODE, X.CODE],
  [B.COL, X.COL],
  [B.COLGROUP, X.COLGROUP],
  [B.DD, X.DD],
  [B.DESC, X.DESC],
  [B.DETAILS, X.DETAILS],
  [B.DIALOG, X.DIALOG],
  [B.DIR, X.DIR],
  [B.DIV, X.DIV],
  [B.DL, X.DL],
  [B.DT, X.DT],
  [B.EM, X.EM],
  [B.EMBED, X.EMBED],
  [B.FIELDSET, X.FIELDSET],
  [B.FIGCAPTION, X.FIGCAPTION],
  [B.FIGURE, X.FIGURE],
  [B.FONT, X.FONT],
  [B.FOOTER, X.FOOTER],
  [B.FOREIGN_OBJECT, X.FOREIGN_OBJECT],
  [B.FORM, X.FORM],
  [B.FRAME, X.FRAME],
  [B.FRAMESET, X.FRAMESET],
  [B.H1, X.H1],
  [B.H2, X.H2],
  [B.H3, X.H3],
  [B.H4, X.H4],
  [B.H5, X.H5],
  [B.H6, X.H6],
  [B.HEAD, X.HEAD],
  [B.HEADER, X.HEADER],
  [B.HGROUP, X.HGROUP],
  [B.HR, X.HR],
  [B.HTML, X.HTML],
  [B.I, X.I],
  [B.IMG, X.IMG],
  [B.IMAGE, X.IMAGE],
  [B.INPUT, X.INPUT],
  [B.IFRAME, X.IFRAME],
  [B.KEYGEN, X.KEYGEN],
  [B.LABEL, X.LABEL],
  [B.LI, X.LI],
  [B.LINK, X.LINK],
  [B.LISTING, X.LISTING],
  [B.MAIN, X.MAIN],
  [B.MALIGNMARK, X.MALIGNMARK],
  [B.MARQUEE, X.MARQUEE],
  [B.MATH, X.MATH],
  [B.MENU, X.MENU],
  [B.META, X.META],
  [B.MGLYPH, X.MGLYPH],
  [B.MI, X.MI],
  [B.MO, X.MO],
  [B.MN, X.MN],
  [B.MS, X.MS],
  [B.MTEXT, X.MTEXT],
  [B.NAV, X.NAV],
  [B.NOBR, X.NOBR],
  [B.NOFRAMES, X.NOFRAMES],
  [B.NOEMBED, X.NOEMBED],
  [B.NOSCRIPT, X.NOSCRIPT],
  [B.OBJECT, X.OBJECT],
  [B.OL, X.OL],
  [B.OPTGROUP, X.OPTGROUP],
  [B.OPTION, X.OPTION],
  [B.P, X.P],
  [B.PARAM, X.PARAM],
  [B.PLAINTEXT, X.PLAINTEXT],
  [B.PRE, X.PRE],
  [B.RB, X.RB],
  [B.RP, X.RP],
  [B.RT, X.RT],
  [B.RTC, X.RTC],
  [B.RUBY, X.RUBY],
  [B.S, X.S],
  [B.SCRIPT, X.SCRIPT],
  [B.SEARCH, X.SEARCH],
  [B.SECTION, X.SECTION],
  [B.SELECT, X.SELECT],
  [B.SOURCE, X.SOURCE],
  [B.SMALL, X.SMALL],
  [B.SPAN, X.SPAN],
  [B.STRIKE, X.STRIKE],
  [B.STRONG, X.STRONG],
  [B.STYLE, X.STYLE],
  [B.SUB, X.SUB],
  [B.SUMMARY, X.SUMMARY],
  [B.SUP, X.SUP],
  [B.TABLE, X.TABLE],
  [B.TBODY, X.TBODY],
  [B.TEMPLATE, X.TEMPLATE],
  [B.TEXTAREA, X.TEXTAREA],
  [B.TFOOT, X.TFOOT],
  [B.TD, X.TD],
  [B.TH, X.TH],
  [B.THEAD, X.THEAD],
  [B.TITLE, X.TITLE],
  [B.TR, X.TR],
  [B.TRACK, X.TRACK],
  [B.TT, X.TT],
  [B.U, X.U],
  [B.UL, X.UL],
  [B.SVG, X.SVG],
  [B.VAR, X.VAR],
  [B.WBR, X.WBR],
  [B.XMP, X.XMP],
])
function y0(Y) {
  var Z
  return (Z = Y9.get(Y)) !== null && Z !== void 0 ? Z : X.UNKNOWN
}
var v = X,
  xY = {
    [R.HTML]: new Set([
      v.ADDRESS,
      v.APPLET,
      v.AREA,
      v.ARTICLE,
      v.ASIDE,
      v.BASE,
      v.BASEFONT,
      v.BGSOUND,
      v.BLOCKQUOTE,
      v.BODY,
      v.BR,
      v.BUTTON,
      v.CAPTION,
      v.CENTER,
      v.COL,
      v.COLGROUP,
      v.DD,
      v.DETAILS,
      v.DIR,
      v.DIV,
      v.DL,
      v.DT,
      v.EMBED,
      v.FIELDSET,
      v.FIGCAPTION,
      v.FIGURE,
      v.FOOTER,
      v.FORM,
      v.FRAME,
      v.FRAMESET,
      v.H1,
      v.H2,
      v.H3,
      v.H4,
      v.H5,
      v.H6,
      v.HEAD,
      v.HEADER,
      v.HGROUP,
      v.HR,
      v.HTML,
      v.IFRAME,
      v.IMG,
      v.INPUT,
      v.LI,
      v.LINK,
      v.LISTING,
      v.MAIN,
      v.MARQUEE,
      v.MENU,
      v.META,
      v.NAV,
      v.NOEMBED,
      v.NOFRAMES,
      v.NOSCRIPT,
      v.OBJECT,
      v.OL,
      v.P,
      v.PARAM,
      v.PLAINTEXT,
      v.PRE,
      v.SCRIPT,
      v.SECTION,
      v.SELECT,
      v.SOURCE,
      v.STYLE,
      v.SUMMARY,
      v.TABLE,
      v.TBODY,
      v.TD,
      v.TEMPLATE,
      v.TEXTAREA,
      v.TFOOT,
      v.TH,
      v.THEAD,
      v.TITLE,
      v.TR,
      v.TRACK,
      v.UL,
      v.WBR,
      v.XMP,
    ]),
    [R.MATHML]: new Set([v.MI, v.MO, v.MN, v.MS, v.MTEXT, v.ANNOTATION_XML]),
    [R.SVG]: new Set([v.TITLE, v.FOREIGN_OBJECT, v.DESC]),
    [R.XLINK]: new Set(),
    [R.XML]: new Set(),
    [R.XMLNS]: new Set(),
  },
  n0 = new Set([v.H1, v.H2, v.H3, v.H4, v.H5, v.H6]),
  Z9 = new Set([B.STYLE, B.SCRIPT, B.XMP, B.IFRAME, B.NOEMBED, B.NOFRAMES, B.PLAINTEXT])
function hY(Y, Z) {
  return Z9.has(Y) || (Z && Y === B.NOSCRIPT)
}
var W
;(function (Y) {
  ;((Y[(Y.DATA = 0)] = 'DATA'),
    (Y[(Y.RCDATA = 1)] = 'RCDATA'),
    (Y[(Y.RAWTEXT = 2)] = 'RAWTEXT'),
    (Y[(Y.SCRIPT_DATA = 3)] = 'SCRIPT_DATA'),
    (Y[(Y.PLAINTEXT = 4)] = 'PLAINTEXT'),
    (Y[(Y.TAG_OPEN = 5)] = 'TAG_OPEN'),
    (Y[(Y.END_TAG_OPEN = 6)] = 'END_TAG_OPEN'),
    (Y[(Y.TAG_NAME = 7)] = 'TAG_NAME'),
    (Y[(Y.RCDATA_LESS_THAN_SIGN = 8)] = 'RCDATA_LESS_THAN_SIGN'),
    (Y[(Y.RCDATA_END_TAG_OPEN = 9)] = 'RCDATA_END_TAG_OPEN'),
    (Y[(Y.RCDATA_END_TAG_NAME = 10)] = 'RCDATA_END_TAG_NAME'),
    (Y[(Y.RAWTEXT_LESS_THAN_SIGN = 11)] = 'RAWTEXT_LESS_THAN_SIGN'),
    (Y[(Y.RAWTEXT_END_TAG_OPEN = 12)] = 'RAWTEXT_END_TAG_OPEN'),
    (Y[(Y.RAWTEXT_END_TAG_NAME = 13)] = 'RAWTEXT_END_TAG_NAME'),
    (Y[(Y.SCRIPT_DATA_LESS_THAN_SIGN = 14)] = 'SCRIPT_DATA_LESS_THAN_SIGN'),
    (Y[(Y.SCRIPT_DATA_END_TAG_OPEN = 15)] = 'SCRIPT_DATA_END_TAG_OPEN'),
    (Y[(Y.SCRIPT_DATA_END_TAG_NAME = 16)] = 'SCRIPT_DATA_END_TAG_NAME'),
    (Y[(Y.SCRIPT_DATA_ESCAPE_START = 17)] = 'SCRIPT_DATA_ESCAPE_START'),
    (Y[(Y.SCRIPT_DATA_ESCAPE_START_DASH = 18)] = 'SCRIPT_DATA_ESCAPE_START_DASH'),
    (Y[(Y.SCRIPT_DATA_ESCAPED = 19)] = 'SCRIPT_DATA_ESCAPED'),
    (Y[(Y.SCRIPT_DATA_ESCAPED_DASH = 20)] = 'SCRIPT_DATA_ESCAPED_DASH'),
    (Y[(Y.SCRIPT_DATA_ESCAPED_DASH_DASH = 21)] = 'SCRIPT_DATA_ESCAPED_DASH_DASH'),
    (Y[(Y.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN = 22)] = 'SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN'),
    (Y[(Y.SCRIPT_DATA_ESCAPED_END_TAG_OPEN = 23)] = 'SCRIPT_DATA_ESCAPED_END_TAG_OPEN'),
    (Y[(Y.SCRIPT_DATA_ESCAPED_END_TAG_NAME = 24)] = 'SCRIPT_DATA_ESCAPED_END_TAG_NAME'),
    (Y[(Y.SCRIPT_DATA_DOUBLE_ESCAPE_START = 25)] = 'SCRIPT_DATA_DOUBLE_ESCAPE_START'),
    (Y[(Y.SCRIPT_DATA_DOUBLE_ESCAPED = 26)] = 'SCRIPT_DATA_DOUBLE_ESCAPED'),
    (Y[(Y.SCRIPT_DATA_DOUBLE_ESCAPED_DASH = 27)] = 'SCRIPT_DATA_DOUBLE_ESCAPED_DASH'),
    (Y[(Y.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH = 28)] = 'SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH'),
    (Y[(Y.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN = 29)] =
      'SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN'),
    (Y[(Y.SCRIPT_DATA_DOUBLE_ESCAPE_END = 30)] = 'SCRIPT_DATA_DOUBLE_ESCAPE_END'),
    (Y[(Y.BEFORE_ATTRIBUTE_NAME = 31)] = 'BEFORE_ATTRIBUTE_NAME'),
    (Y[(Y.ATTRIBUTE_NAME = 32)] = 'ATTRIBUTE_NAME'),
    (Y[(Y.AFTER_ATTRIBUTE_NAME = 33)] = 'AFTER_ATTRIBUTE_NAME'),
    (Y[(Y.BEFORE_ATTRIBUTE_VALUE = 34)] = 'BEFORE_ATTRIBUTE_VALUE'),
    (Y[(Y.ATTRIBUTE_VALUE_DOUBLE_QUOTED = 35)] = 'ATTRIBUTE_VALUE_DOUBLE_QUOTED'),
    (Y[(Y.ATTRIBUTE_VALUE_SINGLE_QUOTED = 36)] = 'ATTRIBUTE_VALUE_SINGLE_QUOTED'),
    (Y[(Y.ATTRIBUTE_VALUE_UNQUOTED = 37)] = 'ATTRIBUTE_VALUE_UNQUOTED'),
    (Y[(Y.AFTER_ATTRIBUTE_VALUE_QUOTED = 38)] = 'AFTER_ATTRIBUTE_VALUE_QUOTED'),
    (Y[(Y.SELF_CLOSING_START_TAG = 39)] = 'SELF_CLOSING_START_TAG'),
    (Y[(Y.BOGUS_COMMENT = 40)] = 'BOGUS_COMMENT'),
    (Y[(Y.MARKUP_DECLARATION_OPEN = 41)] = 'MARKUP_DECLARATION_OPEN'),
    (Y[(Y.COMMENT_START = 42)] = 'COMMENT_START'),
    (Y[(Y.COMMENT_START_DASH = 43)] = 'COMMENT_START_DASH'),
    (Y[(Y.COMMENT = 44)] = 'COMMENT'),
    (Y[(Y.COMMENT_LESS_THAN_SIGN = 45)] = 'COMMENT_LESS_THAN_SIGN'),
    (Y[(Y.COMMENT_LESS_THAN_SIGN_BANG = 46)] = 'COMMENT_LESS_THAN_SIGN_BANG'),
    (Y[(Y.COMMENT_LESS_THAN_SIGN_BANG_DASH = 47)] = 'COMMENT_LESS_THAN_SIGN_BANG_DASH'),
    (Y[(Y.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH = 48)] = 'COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH'),
    (Y[(Y.COMMENT_END_DASH = 49)] = 'COMMENT_END_DASH'),
    (Y[(Y.COMMENT_END = 50)] = 'COMMENT_END'),
    (Y[(Y.COMMENT_END_BANG = 51)] = 'COMMENT_END_BANG'),
    (Y[(Y.DOCTYPE = 52)] = 'DOCTYPE'),
    (Y[(Y.BEFORE_DOCTYPE_NAME = 53)] = 'BEFORE_DOCTYPE_NAME'),
    (Y[(Y.DOCTYPE_NAME = 54)] = 'DOCTYPE_NAME'),
    (Y[(Y.AFTER_DOCTYPE_NAME = 55)] = 'AFTER_DOCTYPE_NAME'),
    (Y[(Y.AFTER_DOCTYPE_PUBLIC_KEYWORD = 56)] = 'AFTER_DOCTYPE_PUBLIC_KEYWORD'),
    (Y[(Y.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER = 57)] = 'BEFORE_DOCTYPE_PUBLIC_IDENTIFIER'),
    (Y[(Y.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED = 58)] =
      'DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED'),
    (Y[(Y.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED = 59)] =
      'DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED'),
    (Y[(Y.AFTER_DOCTYPE_PUBLIC_IDENTIFIER = 60)] = 'AFTER_DOCTYPE_PUBLIC_IDENTIFIER'),
    (Y[(Y.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS = 61)] =
      'BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS'),
    (Y[(Y.AFTER_DOCTYPE_SYSTEM_KEYWORD = 62)] = 'AFTER_DOCTYPE_SYSTEM_KEYWORD'),
    (Y[(Y.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER = 63)] = 'BEFORE_DOCTYPE_SYSTEM_IDENTIFIER'),
    (Y[(Y.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED = 64)] =
      'DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED'),
    (Y[(Y.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED = 65)] =
      'DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED'),
    (Y[(Y.AFTER_DOCTYPE_SYSTEM_IDENTIFIER = 66)] = 'AFTER_DOCTYPE_SYSTEM_IDENTIFIER'),
    (Y[(Y.BOGUS_DOCTYPE = 67)] = 'BOGUS_DOCTYPE'),
    (Y[(Y.CDATA_SECTION = 68)] = 'CDATA_SECTION'),
    (Y[(Y.CDATA_SECTION_BRACKET = 69)] = 'CDATA_SECTION_BRACKET'),
    (Y[(Y.CDATA_SECTION_END = 70)] = 'CDATA_SECTION_END'),
    (Y[(Y.CHARACTER_REFERENCE = 71)] = 'CHARACTER_REFERENCE'),
    (Y[(Y.AMBIGUOUS_AMPERSAND = 72)] = 'AMBIGUOUS_AMPERSAND'))
})(W || (W = {}))
var i = {
  DATA: W.DATA,
  RCDATA: W.RCDATA,
  RAWTEXT: W.RAWTEXT,
  SCRIPT_DATA: W.SCRIPT_DATA,
  PLAINTEXT: W.PLAINTEXT,
  CDATA_SECTION: W.CDATA_SECTION,
}
function K9(Y) {
  return Y >= H.DIGIT_0 && Y <= H.DIGIT_9
}
function q1(Y) {
  return Y >= H.LATIN_CAPITAL_A && Y <= H.LATIN_CAPITAL_Z
}
function J9(Y) {
  return Y >= H.LATIN_SMALL_A && Y <= H.LATIN_SMALL_Z
}
function M0(Y) {
  return J9(Y) || q1(Y)
}
function K8(Y) {
  return M0(Y) || K9(Y)
}
function Q4(Y) {
  return Y + 32
}
function X8(Y) {
  return Y === H.SPACE || Y === H.LINE_FEED || Y === H.TABULATION || Y === H.FORM_FEED
}
function J8(Y) {
  return X8(Y) || Y === H.SOLIDUS || Y === H.GREATER_THAN_SIGN
}
function X9(Y) {
  if (Y === H.NULL) return L.nullCharacterReference
  else if (Y > 1114111) return L.characterReferenceOutsideUnicodeRange
  else if (Y4(Y)) return L.surrogateCharacterReference
  else if (K4(Y)) return L.noncharacterCharacterReference
  else if (Z4(Y) || Y === H.CARRIAGE_RETURN) return L.controlCharacterReference
  return null
}
class V4 {
  constructor(Y, Z) {
    ;((this.options = Y),
      (this.handler = Z),
      (this.paused = !1),
      (this.inLoop = !1),
      (this.inForeignNode = !1),
      (this.lastStartTagName = ''),
      (this.active = !1),
      (this.state = W.DATA),
      (this.returnState = W.DATA),
      (this.entityStartPos = 0),
      (this.consumedAfterSnapshot = -1),
      (this.currentCharacterToken = null),
      (this.currentToken = null),
      (this.currentAttr = { name: '', value: '' }),
      (this.preprocessor = new fY(Z)),
      (this.currentLocation = this.getCurrentLocation(-1)),
      (this.entityDecoder = new gY(
        yY,
        (K, J) => {
          ;((this.preprocessor.pos = this.entityStartPos + J - 1),
            this._flushCodePointConsumedAsCharacterReference(K))
        },
        Z.onParseError
          ? {
              missingSemicolonAfterCharacterReference: () => {
                this._err(L.missingSemicolonAfterCharacterReference, 1)
              },
              absenceOfDigitsInNumericCharacterReference: K => {
                this._err(
                  L.absenceOfDigitsInNumericCharacterReference,
                  this.entityStartPos - this.preprocessor.pos + K,
                )
              },
              validateNumericCharacterReference: K => {
                let J = X9(K)
                if (J) this._err(J, 1)
              },
            }
          : void 0,
      )))
  }
  _err(Y, Z = 0) {
    var K, J
    ;(J = (K = this.handler).onParseError) === null ||
      J === void 0 ||
      J.call(K, this.preprocessor.getError(Y, Z))
  }
  getCurrentLocation(Y) {
    if (!this.options.sourceCodeLocationInfo) return null
    return {
      startLine: this.preprocessor.line,
      startCol: this.preprocessor.col - Y,
      startOffset: this.preprocessor.offset - Y,
      endLine: -1,
      endCol: -1,
      endOffset: -1,
    }
  }
  _runParsingLoop() {
    if (this.inLoop) return
    this.inLoop = !0
    while (this.active && !this.paused) {
      this.consumedAfterSnapshot = 0
      let Y = this._consume()
      if (!this._ensureHibernation()) this._callState(Y)
    }
    this.inLoop = !1
  }
  pause() {
    this.paused = !0
  }
  resume(Y) {
    if (!this.paused) throw Error('Parser was already resumed')
    if (((this.paused = !1), this.inLoop)) return
    if ((this._runParsingLoop(), !this.paused)) Y === null || Y === void 0 || Y()
  }
  write(Y, Z, K) {
    if (((this.active = !0), this.preprocessor.write(Y, Z), this._runParsingLoop(), !this.paused))
      K === null || K === void 0 || K()
  }
  insertHtmlAtCurrentPos(Y) {
    ;((this.active = !0), this.preprocessor.insertHtmlAtCurrentPos(Y), this._runParsingLoop())
  }
  _ensureHibernation() {
    if (this.preprocessor.endOfChunkHit)
      return (
        this.preprocessor.retreat(this.consumedAfterSnapshot),
        (this.consumedAfterSnapshot = 0),
        (this.active = !1),
        !0
      )
    return !1
  }
  _consume() {
    return (this.consumedAfterSnapshot++, this.preprocessor.advance())
  }
  _advanceBy(Y) {
    this.consumedAfterSnapshot += Y
    for (let Z = 0; Z < Y; Z++) this.preprocessor.advance()
  }
  _consumeSequenceIfMatch(Y, Z) {
    if (this.preprocessor.startsWith(Y, Z)) return (this._advanceBy(Y.length - 1), !0)
    return !1
  }
  _createStartTagToken() {
    this.currentToken = {
      type: h.START_TAG,
      tagName: '',
      tagID: X.UNKNOWN,
      selfClosing: !1,
      ackSelfClosing: !1,
      attrs: [],
      location: this.getCurrentLocation(1),
    }
  }
  _createEndTagToken() {
    this.currentToken = {
      type: h.END_TAG,
      tagName: '',
      tagID: X.UNKNOWN,
      selfClosing: !1,
      ackSelfClosing: !1,
      attrs: [],
      location: this.getCurrentLocation(2),
    }
  }
  _createCommentToken(Y) {
    this.currentToken = { type: h.COMMENT, data: '', location: this.getCurrentLocation(Y) }
  }
  _createDoctypeToken(Y) {
    this.currentToken = {
      type: h.DOCTYPE,
      name: Y,
      forceQuirks: !1,
      publicId: null,
      systemId: null,
      location: this.currentLocation,
    }
  }
  _createCharacterToken(Y, Z) {
    this.currentCharacterToken = { type: Y, chars: Z, location: this.currentLocation }
  }
  _createAttr(Y) {
    ;((this.currentAttr = { name: Y, value: '' }),
      (this.currentLocation = this.getCurrentLocation(0)))
  }
  _leaveAttrName() {
    var Y, Z
    let K = this.currentToken
    if (J4(K, this.currentAttr.name) === null) {
      if ((K.attrs.push(this.currentAttr), K.location && this.currentLocation)) {
        let J =
          (Y = (Z = K.location).attrs) !== null && Y !== void 0
            ? Y
            : (Z.attrs = Object.create(null))
        ;((J[this.currentAttr.name] = this.currentLocation), this._leaveAttrValue())
      }
    } else this._err(L.duplicateAttribute)
  }
  _leaveAttrValue() {
    if (this.currentLocation)
      ((this.currentLocation.endLine = this.preprocessor.line),
        (this.currentLocation.endCol = this.preprocessor.col),
        (this.currentLocation.endOffset = this.preprocessor.offset))
  }
  prepareToken(Y) {
    if ((this._emitCurrentCharacterToken(Y.location), (this.currentToken = null), Y.location))
      ((Y.location.endLine = this.preprocessor.line),
        (Y.location.endCol = this.preprocessor.col + 1),
        (Y.location.endOffset = this.preprocessor.offset + 1))
    this.currentLocation = this.getCurrentLocation(-1)
  }
  emitCurrentTagToken() {
    let Y = this.currentToken
    if ((this.prepareToken(Y), (Y.tagID = y0(Y.tagName)), Y.type === h.START_TAG))
      ((this.lastStartTagName = Y.tagName), this.handler.onStartTag(Y))
    else {
      if (Y.attrs.length > 0) this._err(L.endTagWithAttributes)
      if (Y.selfClosing) this._err(L.endTagWithTrailingSolidus)
      this.handler.onEndTag(Y)
    }
    this.preprocessor.dropParsedChunk()
  }
  emitCurrentComment(Y) {
    ;(this.prepareToken(Y), this.handler.onComment(Y), this.preprocessor.dropParsedChunk())
  }
  emitCurrentDoctype(Y) {
    ;(this.prepareToken(Y), this.handler.onDoctype(Y), this.preprocessor.dropParsedChunk())
  }
  _emitCurrentCharacterToken(Y) {
    if (this.currentCharacterToken) {
      if (Y && this.currentCharacterToken.location)
        ((this.currentCharacterToken.location.endLine = Y.startLine),
          (this.currentCharacterToken.location.endCol = Y.startCol),
          (this.currentCharacterToken.location.endOffset = Y.startOffset))
      switch (this.currentCharacterToken.type) {
        case h.CHARACTER: {
          this.handler.onCharacter(this.currentCharacterToken)
          break
        }
        case h.NULL_CHARACTER: {
          this.handler.onNullCharacter(this.currentCharacterToken)
          break
        }
        case h.WHITESPACE_CHARACTER: {
          this.handler.onWhitespaceCharacter(this.currentCharacterToken)
          break
        }
      }
      this.currentCharacterToken = null
    }
  }
  _emitEOFToken() {
    let Y = this.getCurrentLocation(0)
    if (Y) ((Y.endLine = Y.startLine), (Y.endCol = Y.startCol), (Y.endOffset = Y.startOffset))
    ;(this._emitCurrentCharacterToken(Y),
      this.handler.onEof({ type: h.EOF, location: Y }),
      (this.active = !1))
  }
  _appendCharToCurrentCharacterToken(Y, Z) {
    if (this.currentCharacterToken)
      if (this.currentCharacterToken.type === Y) {
        this.currentCharacterToken.chars += Z
        return
      } else
        ((this.currentLocation = this.getCurrentLocation(0)),
          this._emitCurrentCharacterToken(this.currentLocation),
          this.preprocessor.dropParsedChunk())
    this._createCharacterToken(Y, Z)
  }
  _emitCodePoint(Y) {
    let Z = X8(Y) ? h.WHITESPACE_CHARACTER : Y === H.NULL ? h.NULL_CHARACTER : h.CHARACTER
    this._appendCharToCurrentCharacterToken(Z, String.fromCodePoint(Y))
  }
  _emitChars(Y) {
    this._appendCharToCurrentCharacterToken(h.CHARACTER, Y)
  }
  _startCharacterReference() {
    ;((this.returnState = this.state),
      (this.state = W.CHARACTER_REFERENCE),
      (this.entityStartPos = this.preprocessor.pos),
      this.entityDecoder.startEntity(
        this._isCharacterReferenceInAttribute() ? z0.Attribute : z0.Legacy,
      ))
  }
  _isCharacterReferenceInAttribute() {
    return (
      this.returnState === W.ATTRIBUTE_VALUE_DOUBLE_QUOTED ||
      this.returnState === W.ATTRIBUTE_VALUE_SINGLE_QUOTED ||
      this.returnState === W.ATTRIBUTE_VALUE_UNQUOTED
    )
  }
  _flushCodePointConsumedAsCharacterReference(Y) {
    if (this._isCharacterReferenceInAttribute()) this.currentAttr.value += String.fromCodePoint(Y)
    else this._emitCodePoint(Y)
  }
  _callState(Y) {
    switch (this.state) {
      case W.DATA: {
        this._stateData(Y)
        break
      }
      case W.RCDATA: {
        this._stateRcdata(Y)
        break
      }
      case W.RAWTEXT: {
        this._stateRawtext(Y)
        break
      }
      case W.SCRIPT_DATA: {
        this._stateScriptData(Y)
        break
      }
      case W.PLAINTEXT: {
        this._statePlaintext(Y)
        break
      }
      case W.TAG_OPEN: {
        this._stateTagOpen(Y)
        break
      }
      case W.END_TAG_OPEN: {
        this._stateEndTagOpen(Y)
        break
      }
      case W.TAG_NAME: {
        this._stateTagName(Y)
        break
      }
      case W.RCDATA_LESS_THAN_SIGN: {
        this._stateRcdataLessThanSign(Y)
        break
      }
      case W.RCDATA_END_TAG_OPEN: {
        this._stateRcdataEndTagOpen(Y)
        break
      }
      case W.RCDATA_END_TAG_NAME: {
        this._stateRcdataEndTagName(Y)
        break
      }
      case W.RAWTEXT_LESS_THAN_SIGN: {
        this._stateRawtextLessThanSign(Y)
        break
      }
      case W.RAWTEXT_END_TAG_OPEN: {
        this._stateRawtextEndTagOpen(Y)
        break
      }
      case W.RAWTEXT_END_TAG_NAME: {
        this._stateRawtextEndTagName(Y)
        break
      }
      case W.SCRIPT_DATA_LESS_THAN_SIGN: {
        this._stateScriptDataLessThanSign(Y)
        break
      }
      case W.SCRIPT_DATA_END_TAG_OPEN: {
        this._stateScriptDataEndTagOpen(Y)
        break
      }
      case W.SCRIPT_DATA_END_TAG_NAME: {
        this._stateScriptDataEndTagName(Y)
        break
      }
      case W.SCRIPT_DATA_ESCAPE_START: {
        this._stateScriptDataEscapeStart(Y)
        break
      }
      case W.SCRIPT_DATA_ESCAPE_START_DASH: {
        this._stateScriptDataEscapeStartDash(Y)
        break
      }
      case W.SCRIPT_DATA_ESCAPED: {
        this._stateScriptDataEscaped(Y)
        break
      }
      case W.SCRIPT_DATA_ESCAPED_DASH: {
        this._stateScriptDataEscapedDash(Y)
        break
      }
      case W.SCRIPT_DATA_ESCAPED_DASH_DASH: {
        this._stateScriptDataEscapedDashDash(Y)
        break
      }
      case W.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN: {
        this._stateScriptDataEscapedLessThanSign(Y)
        break
      }
      case W.SCRIPT_DATA_ESCAPED_END_TAG_OPEN: {
        this._stateScriptDataEscapedEndTagOpen(Y)
        break
      }
      case W.SCRIPT_DATA_ESCAPED_END_TAG_NAME: {
        this._stateScriptDataEscapedEndTagName(Y)
        break
      }
      case W.SCRIPT_DATA_DOUBLE_ESCAPE_START: {
        this._stateScriptDataDoubleEscapeStart(Y)
        break
      }
      case W.SCRIPT_DATA_DOUBLE_ESCAPED: {
        this._stateScriptDataDoubleEscaped(Y)
        break
      }
      case W.SCRIPT_DATA_DOUBLE_ESCAPED_DASH: {
        this._stateScriptDataDoubleEscapedDash(Y)
        break
      }
      case W.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH: {
        this._stateScriptDataDoubleEscapedDashDash(Y)
        break
      }
      case W.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN: {
        this._stateScriptDataDoubleEscapedLessThanSign(Y)
        break
      }
      case W.SCRIPT_DATA_DOUBLE_ESCAPE_END: {
        this._stateScriptDataDoubleEscapeEnd(Y)
        break
      }
      case W.BEFORE_ATTRIBUTE_NAME: {
        this._stateBeforeAttributeName(Y)
        break
      }
      case W.ATTRIBUTE_NAME: {
        this._stateAttributeName(Y)
        break
      }
      case W.AFTER_ATTRIBUTE_NAME: {
        this._stateAfterAttributeName(Y)
        break
      }
      case W.BEFORE_ATTRIBUTE_VALUE: {
        this._stateBeforeAttributeValue(Y)
        break
      }
      case W.ATTRIBUTE_VALUE_DOUBLE_QUOTED: {
        this._stateAttributeValueDoubleQuoted(Y)
        break
      }
      case W.ATTRIBUTE_VALUE_SINGLE_QUOTED: {
        this._stateAttributeValueSingleQuoted(Y)
        break
      }
      case W.ATTRIBUTE_VALUE_UNQUOTED: {
        this._stateAttributeValueUnquoted(Y)
        break
      }
      case W.AFTER_ATTRIBUTE_VALUE_QUOTED: {
        this._stateAfterAttributeValueQuoted(Y)
        break
      }
      case W.SELF_CLOSING_START_TAG: {
        this._stateSelfClosingStartTag(Y)
        break
      }
      case W.BOGUS_COMMENT: {
        this._stateBogusComment(Y)
        break
      }
      case W.MARKUP_DECLARATION_OPEN: {
        this._stateMarkupDeclarationOpen(Y)
        break
      }
      case W.COMMENT_START: {
        this._stateCommentStart(Y)
        break
      }
      case W.COMMENT_START_DASH: {
        this._stateCommentStartDash(Y)
        break
      }
      case W.COMMENT: {
        this._stateComment(Y)
        break
      }
      case W.COMMENT_LESS_THAN_SIGN: {
        this._stateCommentLessThanSign(Y)
        break
      }
      case W.COMMENT_LESS_THAN_SIGN_BANG: {
        this._stateCommentLessThanSignBang(Y)
        break
      }
      case W.COMMENT_LESS_THAN_SIGN_BANG_DASH: {
        this._stateCommentLessThanSignBangDash(Y)
        break
      }
      case W.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH: {
        this._stateCommentLessThanSignBangDashDash(Y)
        break
      }
      case W.COMMENT_END_DASH: {
        this._stateCommentEndDash(Y)
        break
      }
      case W.COMMENT_END: {
        this._stateCommentEnd(Y)
        break
      }
      case W.COMMENT_END_BANG: {
        this._stateCommentEndBang(Y)
        break
      }
      case W.DOCTYPE: {
        this._stateDoctype(Y)
        break
      }
      case W.BEFORE_DOCTYPE_NAME: {
        this._stateBeforeDoctypeName(Y)
        break
      }
      case W.DOCTYPE_NAME: {
        this._stateDoctypeName(Y)
        break
      }
      case W.AFTER_DOCTYPE_NAME: {
        this._stateAfterDoctypeName(Y)
        break
      }
      case W.AFTER_DOCTYPE_PUBLIC_KEYWORD: {
        this._stateAfterDoctypePublicKeyword(Y)
        break
      }
      case W.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER: {
        this._stateBeforeDoctypePublicIdentifier(Y)
        break
      }
      case W.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED: {
        this._stateDoctypePublicIdentifierDoubleQuoted(Y)
        break
      }
      case W.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED: {
        this._stateDoctypePublicIdentifierSingleQuoted(Y)
        break
      }
      case W.AFTER_DOCTYPE_PUBLIC_IDENTIFIER: {
        this._stateAfterDoctypePublicIdentifier(Y)
        break
      }
      case W.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS: {
        this._stateBetweenDoctypePublicAndSystemIdentifiers(Y)
        break
      }
      case W.AFTER_DOCTYPE_SYSTEM_KEYWORD: {
        this._stateAfterDoctypeSystemKeyword(Y)
        break
      }
      case W.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER: {
        this._stateBeforeDoctypeSystemIdentifier(Y)
        break
      }
      case W.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED: {
        this._stateDoctypeSystemIdentifierDoubleQuoted(Y)
        break
      }
      case W.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED: {
        this._stateDoctypeSystemIdentifierSingleQuoted(Y)
        break
      }
      case W.AFTER_DOCTYPE_SYSTEM_IDENTIFIER: {
        this._stateAfterDoctypeSystemIdentifier(Y)
        break
      }
      case W.BOGUS_DOCTYPE: {
        this._stateBogusDoctype(Y)
        break
      }
      case W.CDATA_SECTION: {
        this._stateCdataSection(Y)
        break
      }
      case W.CDATA_SECTION_BRACKET: {
        this._stateCdataSectionBracket(Y)
        break
      }
      case W.CDATA_SECTION_END: {
        this._stateCdataSectionEnd(Y)
        break
      }
      case W.CHARACTER_REFERENCE: {
        this._stateCharacterReference()
        break
      }
      case W.AMBIGUOUS_AMPERSAND: {
        this._stateAmbiguousAmpersand(Y)
        break
      }
      default:
        throw Error('Unknown state')
    }
  }
  _stateData(Y) {
    switch (Y) {
      case H.LESS_THAN_SIGN: {
        this.state = W.TAG_OPEN
        break
      }
      case H.AMPERSAND: {
        this._startCharacterReference()
        break
      }
      case H.NULL: {
        ;(this._err(L.unexpectedNullCharacter), this._emitCodePoint(Y))
        break
      }
      case H.EOF: {
        this._emitEOFToken()
        break
      }
      default:
        this._emitCodePoint(Y)
    }
  }
  _stateRcdata(Y) {
    switch (Y) {
      case H.AMPERSAND: {
        this._startCharacterReference()
        break
      }
      case H.LESS_THAN_SIGN: {
        this.state = W.RCDATA_LESS_THAN_SIGN
        break
      }
      case H.NULL: {
        ;(this._err(L.unexpectedNullCharacter), this._emitChars($))
        break
      }
      case H.EOF: {
        this._emitEOFToken()
        break
      }
      default:
        this._emitCodePoint(Y)
    }
  }
  _stateRawtext(Y) {
    switch (Y) {
      case H.LESS_THAN_SIGN: {
        this.state = W.RAWTEXT_LESS_THAN_SIGN
        break
      }
      case H.NULL: {
        ;(this._err(L.unexpectedNullCharacter), this._emitChars($))
        break
      }
      case H.EOF: {
        this._emitEOFToken()
        break
      }
      default:
        this._emitCodePoint(Y)
    }
  }
  _stateScriptData(Y) {
    switch (Y) {
      case H.LESS_THAN_SIGN: {
        this.state = W.SCRIPT_DATA_LESS_THAN_SIGN
        break
      }
      case H.NULL: {
        ;(this._err(L.unexpectedNullCharacter), this._emitChars($))
        break
      }
      case H.EOF: {
        this._emitEOFToken()
        break
      }
      default:
        this._emitCodePoint(Y)
    }
  }
  _statePlaintext(Y) {
    switch (Y) {
      case H.NULL: {
        ;(this._err(L.unexpectedNullCharacter), this._emitChars($))
        break
      }
      case H.EOF: {
        this._emitEOFToken()
        break
      }
      default:
        this._emitCodePoint(Y)
    }
  }
  _stateTagOpen(Y) {
    if (M0(Y)) (this._createStartTagToken(), (this.state = W.TAG_NAME), this._stateTagName(Y))
    else
      switch (Y) {
        case H.EXCLAMATION_MARK: {
          this.state = W.MARKUP_DECLARATION_OPEN
          break
        }
        case H.SOLIDUS: {
          this.state = W.END_TAG_OPEN
          break
        }
        case H.QUESTION_MARK: {
          ;(this._err(L.unexpectedQuestionMarkInsteadOfTagName),
            this._createCommentToken(1),
            (this.state = W.BOGUS_COMMENT),
            this._stateBogusComment(Y))
          break
        }
        case H.EOF: {
          ;(this._err(L.eofBeforeTagName), this._emitChars('<'), this._emitEOFToken())
          break
        }
        default:
          ;(this._err(L.invalidFirstCharacterOfTagName),
            this._emitChars('<'),
            (this.state = W.DATA),
            this._stateData(Y))
      }
  }
  _stateEndTagOpen(Y) {
    if (M0(Y)) (this._createEndTagToken(), (this.state = W.TAG_NAME), this._stateTagName(Y))
    else
      switch (Y) {
        case H.GREATER_THAN_SIGN: {
          ;(this._err(L.missingEndTagName), (this.state = W.DATA))
          break
        }
        case H.EOF: {
          ;(this._err(L.eofBeforeTagName), this._emitChars('</'), this._emitEOFToken())
          break
        }
        default:
          ;(this._err(L.invalidFirstCharacterOfTagName),
            this._createCommentToken(2),
            (this.state = W.BOGUS_COMMENT),
            this._stateBogusComment(Y))
      }
  }
  _stateTagName(Y) {
    let Z = this.currentToken
    switch (Y) {
      case H.SPACE:
      case H.LINE_FEED:
      case H.TABULATION:
      case H.FORM_FEED: {
        this.state = W.BEFORE_ATTRIBUTE_NAME
        break
      }
      case H.SOLIDUS: {
        this.state = W.SELF_CLOSING_START_TAG
        break
      }
      case H.GREATER_THAN_SIGN: {
        ;((this.state = W.DATA), this.emitCurrentTagToken())
        break
      }
      case H.NULL: {
        ;(this._err(L.unexpectedNullCharacter), (Z.tagName += $))
        break
      }
      case H.EOF: {
        ;(this._err(L.eofInTag), this._emitEOFToken())
        break
      }
      default:
        Z.tagName += String.fromCodePoint(q1(Y) ? Q4(Y) : Y)
    }
  }
  _stateRcdataLessThanSign(Y) {
    if (Y === H.SOLIDUS) this.state = W.RCDATA_END_TAG_OPEN
    else (this._emitChars('<'), (this.state = W.RCDATA), this._stateRcdata(Y))
  }
  _stateRcdataEndTagOpen(Y) {
    if (M0(Y)) ((this.state = W.RCDATA_END_TAG_NAME), this._stateRcdataEndTagName(Y))
    else (this._emitChars('</'), (this.state = W.RCDATA), this._stateRcdata(Y))
  }
  handleSpecialEndTag(Y) {
    if (!this.preprocessor.startsWith(this.lastStartTagName, !1)) return !this._ensureHibernation()
    this._createEndTagToken()
    let Z = this.currentToken
    switch (
      ((Z.tagName = this.lastStartTagName), this.preprocessor.peek(this.lastStartTagName.length))
    ) {
      case H.SPACE:
      case H.LINE_FEED:
      case H.TABULATION:
      case H.FORM_FEED:
        return (
          this._advanceBy(this.lastStartTagName.length), (this.state = W.BEFORE_ATTRIBUTE_NAME), !1
        )
      case H.SOLIDUS:
        return (
          this._advanceBy(this.lastStartTagName.length), (this.state = W.SELF_CLOSING_START_TAG), !1
        )
      case H.GREATER_THAN_SIGN:
        return (
          this._advanceBy(this.lastStartTagName.length),
          this.emitCurrentTagToken(),
          (this.state = W.DATA),
          !1
        )
      default:
        return !this._ensureHibernation()
    }
  }
  _stateRcdataEndTagName(Y) {
    if (this.handleSpecialEndTag(Y))
      (this._emitChars('</'), (this.state = W.RCDATA), this._stateRcdata(Y))
  }
  _stateRawtextLessThanSign(Y) {
    if (Y === H.SOLIDUS) this.state = W.RAWTEXT_END_TAG_OPEN
    else (this._emitChars('<'), (this.state = W.RAWTEXT), this._stateRawtext(Y))
  }
  _stateRawtextEndTagOpen(Y) {
    if (M0(Y)) ((this.state = W.RAWTEXT_END_TAG_NAME), this._stateRawtextEndTagName(Y))
    else (this._emitChars('</'), (this.state = W.RAWTEXT), this._stateRawtext(Y))
  }
  _stateRawtextEndTagName(Y) {
    if (this.handleSpecialEndTag(Y))
      (this._emitChars('</'), (this.state = W.RAWTEXT), this._stateRawtext(Y))
  }
  _stateScriptDataLessThanSign(Y) {
    switch (Y) {
      case H.SOLIDUS: {
        this.state = W.SCRIPT_DATA_END_TAG_OPEN
        break
      }
      case H.EXCLAMATION_MARK: {
        ;((this.state = W.SCRIPT_DATA_ESCAPE_START), this._emitChars('<!'))
        break
      }
      default:
        ;(this._emitChars('<'), (this.state = W.SCRIPT_DATA), this._stateScriptData(Y))
    }
  }
  _stateScriptDataEndTagOpen(Y) {
    if (M0(Y)) ((this.state = W.SCRIPT_DATA_END_TAG_NAME), this._stateScriptDataEndTagName(Y))
    else (this._emitChars('</'), (this.state = W.SCRIPT_DATA), this._stateScriptData(Y))
  }
  _stateScriptDataEndTagName(Y) {
    if (this.handleSpecialEndTag(Y))
      (this._emitChars('</'), (this.state = W.SCRIPT_DATA), this._stateScriptData(Y))
  }
  _stateScriptDataEscapeStart(Y) {
    if (Y === H.HYPHEN_MINUS) ((this.state = W.SCRIPT_DATA_ESCAPE_START_DASH), this._emitChars('-'))
    else ((this.state = W.SCRIPT_DATA), this._stateScriptData(Y))
  }
  _stateScriptDataEscapeStartDash(Y) {
    if (Y === H.HYPHEN_MINUS) ((this.state = W.SCRIPT_DATA_ESCAPED_DASH_DASH), this._emitChars('-'))
    else ((this.state = W.SCRIPT_DATA), this._stateScriptData(Y))
  }
  _stateScriptDataEscaped(Y) {
    switch (Y) {
      case H.HYPHEN_MINUS: {
        ;((this.state = W.SCRIPT_DATA_ESCAPED_DASH), this._emitChars('-'))
        break
      }
      case H.LESS_THAN_SIGN: {
        this.state = W.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN
        break
      }
      case H.NULL: {
        ;(this._err(L.unexpectedNullCharacter), this._emitChars($))
        break
      }
      case H.EOF: {
        ;(this._err(L.eofInScriptHtmlCommentLikeText), this._emitEOFToken())
        break
      }
      default:
        this._emitCodePoint(Y)
    }
  }
  _stateScriptDataEscapedDash(Y) {
    switch (Y) {
      case H.HYPHEN_MINUS: {
        ;((this.state = W.SCRIPT_DATA_ESCAPED_DASH_DASH), this._emitChars('-'))
        break
      }
      case H.LESS_THAN_SIGN: {
        this.state = W.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN
        break
      }
      case H.NULL: {
        ;(this._err(L.unexpectedNullCharacter),
          (this.state = W.SCRIPT_DATA_ESCAPED),
          this._emitChars($))
        break
      }
      case H.EOF: {
        ;(this._err(L.eofInScriptHtmlCommentLikeText), this._emitEOFToken())
        break
      }
      default:
        ;((this.state = W.SCRIPT_DATA_ESCAPED), this._emitCodePoint(Y))
    }
  }
  _stateScriptDataEscapedDashDash(Y) {
    switch (Y) {
      case H.HYPHEN_MINUS: {
        this._emitChars('-')
        break
      }
      case H.LESS_THAN_SIGN: {
        this.state = W.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN
        break
      }
      case H.GREATER_THAN_SIGN: {
        ;((this.state = W.SCRIPT_DATA), this._emitChars('>'))
        break
      }
      case H.NULL: {
        ;(this._err(L.unexpectedNullCharacter),
          (this.state = W.SCRIPT_DATA_ESCAPED),
          this._emitChars($))
        break
      }
      case H.EOF: {
        ;(this._err(L.eofInScriptHtmlCommentLikeText), this._emitEOFToken())
        break
      }
      default:
        ;((this.state = W.SCRIPT_DATA_ESCAPED), this._emitCodePoint(Y))
    }
  }
  _stateScriptDataEscapedLessThanSign(Y) {
    if (Y === H.SOLIDUS) this.state = W.SCRIPT_DATA_ESCAPED_END_TAG_OPEN
    else if (M0(Y))
      (this._emitChars('<'),
        (this.state = W.SCRIPT_DATA_DOUBLE_ESCAPE_START),
        this._stateScriptDataDoubleEscapeStart(Y))
    else
      (this._emitChars('<'), (this.state = W.SCRIPT_DATA_ESCAPED), this._stateScriptDataEscaped(Y))
  }
  _stateScriptDataEscapedEndTagOpen(Y) {
    if (M0(Y))
      ((this.state = W.SCRIPT_DATA_ESCAPED_END_TAG_NAME), this._stateScriptDataEscapedEndTagName(Y))
    else
      (this._emitChars('</'), (this.state = W.SCRIPT_DATA_ESCAPED), this._stateScriptDataEscaped(Y))
  }
  _stateScriptDataEscapedEndTagName(Y) {
    if (this.handleSpecialEndTag(Y))
      (this._emitChars('</'), (this.state = W.SCRIPT_DATA_ESCAPED), this._stateScriptDataEscaped(Y))
  }
  _stateScriptDataDoubleEscapeStart(Y) {
    if (this.preprocessor.startsWith(d.SCRIPT, !1) && J8(this.preprocessor.peek(d.SCRIPT.length))) {
      this._emitCodePoint(Y)
      for (let Z = 0; Z < d.SCRIPT.length; Z++) this._emitCodePoint(this._consume())
      this.state = W.SCRIPT_DATA_DOUBLE_ESCAPED
    } else if (!this._ensureHibernation())
      ((this.state = W.SCRIPT_DATA_ESCAPED), this._stateScriptDataEscaped(Y))
  }
  _stateScriptDataDoubleEscaped(Y) {
    switch (Y) {
      case H.HYPHEN_MINUS: {
        ;((this.state = W.SCRIPT_DATA_DOUBLE_ESCAPED_DASH), this._emitChars('-'))
        break
      }
      case H.LESS_THAN_SIGN: {
        ;((this.state = W.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN), this._emitChars('<'))
        break
      }
      case H.NULL: {
        ;(this._err(L.unexpectedNullCharacter), this._emitChars($))
        break
      }
      case H.EOF: {
        ;(this._err(L.eofInScriptHtmlCommentLikeText), this._emitEOFToken())
        break
      }
      default:
        this._emitCodePoint(Y)
    }
  }
  _stateScriptDataDoubleEscapedDash(Y) {
    switch (Y) {
      case H.HYPHEN_MINUS: {
        ;((this.state = W.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH), this._emitChars('-'))
        break
      }
      case H.LESS_THAN_SIGN: {
        ;((this.state = W.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN), this._emitChars('<'))
        break
      }
      case H.NULL: {
        ;(this._err(L.unexpectedNullCharacter),
          (this.state = W.SCRIPT_DATA_DOUBLE_ESCAPED),
          this._emitChars($))
        break
      }
      case H.EOF: {
        ;(this._err(L.eofInScriptHtmlCommentLikeText), this._emitEOFToken())
        break
      }
      default:
        ;((this.state = W.SCRIPT_DATA_DOUBLE_ESCAPED), this._emitCodePoint(Y))
    }
  }
  _stateScriptDataDoubleEscapedDashDash(Y) {
    switch (Y) {
      case H.HYPHEN_MINUS: {
        this._emitChars('-')
        break
      }
      case H.LESS_THAN_SIGN: {
        ;((this.state = W.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN), this._emitChars('<'))
        break
      }
      case H.GREATER_THAN_SIGN: {
        ;((this.state = W.SCRIPT_DATA), this._emitChars('>'))
        break
      }
      case H.NULL: {
        ;(this._err(L.unexpectedNullCharacter),
          (this.state = W.SCRIPT_DATA_DOUBLE_ESCAPED),
          this._emitChars($))
        break
      }
      case H.EOF: {
        ;(this._err(L.eofInScriptHtmlCommentLikeText), this._emitEOFToken())
        break
      }
      default:
        ;((this.state = W.SCRIPT_DATA_DOUBLE_ESCAPED), this._emitCodePoint(Y))
    }
  }
  _stateScriptDataDoubleEscapedLessThanSign(Y) {
    if (Y === H.SOLIDUS) ((this.state = W.SCRIPT_DATA_DOUBLE_ESCAPE_END), this._emitChars('/'))
    else ((this.state = W.SCRIPT_DATA_DOUBLE_ESCAPED), this._stateScriptDataDoubleEscaped(Y))
  }
  _stateScriptDataDoubleEscapeEnd(Y) {
    if (this.preprocessor.startsWith(d.SCRIPT, !1) && J8(this.preprocessor.peek(d.SCRIPT.length))) {
      this._emitCodePoint(Y)
      for (let Z = 0; Z < d.SCRIPT.length; Z++) this._emitCodePoint(this._consume())
      this.state = W.SCRIPT_DATA_ESCAPED
    } else if (!this._ensureHibernation())
      ((this.state = W.SCRIPT_DATA_DOUBLE_ESCAPED), this._stateScriptDataDoubleEscaped(Y))
  }
  _stateBeforeAttributeName(Y) {
    switch (Y) {
      case H.SPACE:
      case H.LINE_FEED:
      case H.TABULATION:
      case H.FORM_FEED:
        break
      case H.SOLIDUS:
      case H.GREATER_THAN_SIGN:
      case H.EOF: {
        ;((this.state = W.AFTER_ATTRIBUTE_NAME), this._stateAfterAttributeName(Y))
        break
      }
      case H.EQUALS_SIGN: {
        ;(this._err(L.unexpectedEqualsSignBeforeAttributeName),
          this._createAttr('='),
          (this.state = W.ATTRIBUTE_NAME))
        break
      }
      default:
        ;(this._createAttr(''), (this.state = W.ATTRIBUTE_NAME), this._stateAttributeName(Y))
    }
  }
  _stateAttributeName(Y) {
    switch (Y) {
      case H.SPACE:
      case H.LINE_FEED:
      case H.TABULATION:
      case H.FORM_FEED:
      case H.SOLIDUS:
      case H.GREATER_THAN_SIGN:
      case H.EOF: {
        ;(this._leaveAttrName(),
          (this.state = W.AFTER_ATTRIBUTE_NAME),
          this._stateAfterAttributeName(Y))
        break
      }
      case H.EQUALS_SIGN: {
        ;(this._leaveAttrName(), (this.state = W.BEFORE_ATTRIBUTE_VALUE))
        break
      }
      case H.QUOTATION_MARK:
      case H.APOSTROPHE:
      case H.LESS_THAN_SIGN: {
        ;(this._err(L.unexpectedCharacterInAttributeName),
          (this.currentAttr.name += String.fromCodePoint(Y)))
        break
      }
      case H.NULL: {
        ;(this._err(L.unexpectedNullCharacter), (this.currentAttr.name += $))
        break
      }
      default:
        this.currentAttr.name += String.fromCodePoint(q1(Y) ? Q4(Y) : Y)
    }
  }
  _stateAfterAttributeName(Y) {
    switch (Y) {
      case H.SPACE:
      case H.LINE_FEED:
      case H.TABULATION:
      case H.FORM_FEED:
        break
      case H.SOLIDUS: {
        this.state = W.SELF_CLOSING_START_TAG
        break
      }
      case H.EQUALS_SIGN: {
        this.state = W.BEFORE_ATTRIBUTE_VALUE
        break
      }
      case H.GREATER_THAN_SIGN: {
        ;((this.state = W.DATA), this.emitCurrentTagToken())
        break
      }
      case H.EOF: {
        ;(this._err(L.eofInTag), this._emitEOFToken())
        break
      }
      default:
        ;(this._createAttr(''), (this.state = W.ATTRIBUTE_NAME), this._stateAttributeName(Y))
    }
  }
  _stateBeforeAttributeValue(Y) {
    switch (Y) {
      case H.SPACE:
      case H.LINE_FEED:
      case H.TABULATION:
      case H.FORM_FEED:
        break
      case H.QUOTATION_MARK: {
        this.state = W.ATTRIBUTE_VALUE_DOUBLE_QUOTED
        break
      }
      case H.APOSTROPHE: {
        this.state = W.ATTRIBUTE_VALUE_SINGLE_QUOTED
        break
      }
      case H.GREATER_THAN_SIGN: {
        ;(this._err(L.missingAttributeValue), (this.state = W.DATA), this.emitCurrentTagToken())
        break
      }
      default:
        ;((this.state = W.ATTRIBUTE_VALUE_UNQUOTED), this._stateAttributeValueUnquoted(Y))
    }
  }
  _stateAttributeValueDoubleQuoted(Y) {
    switch (Y) {
      case H.QUOTATION_MARK: {
        this.state = W.AFTER_ATTRIBUTE_VALUE_QUOTED
        break
      }
      case H.AMPERSAND: {
        this._startCharacterReference()
        break
      }
      case H.NULL: {
        ;(this._err(L.unexpectedNullCharacter), (this.currentAttr.value += $))
        break
      }
      case H.EOF: {
        ;(this._err(L.eofInTag), this._emitEOFToken())
        break
      }
      default:
        this.currentAttr.value += String.fromCodePoint(Y)
    }
  }
  _stateAttributeValueSingleQuoted(Y) {
    switch (Y) {
      case H.APOSTROPHE: {
        this.state = W.AFTER_ATTRIBUTE_VALUE_QUOTED
        break
      }
      case H.AMPERSAND: {
        this._startCharacterReference()
        break
      }
      case H.NULL: {
        ;(this._err(L.unexpectedNullCharacter), (this.currentAttr.value += $))
        break
      }
      case H.EOF: {
        ;(this._err(L.eofInTag), this._emitEOFToken())
        break
      }
      default:
        this.currentAttr.value += String.fromCodePoint(Y)
    }
  }
  _stateAttributeValueUnquoted(Y) {
    switch (Y) {
      case H.SPACE:
      case H.LINE_FEED:
      case H.TABULATION:
      case H.FORM_FEED: {
        ;(this._leaveAttrValue(), (this.state = W.BEFORE_ATTRIBUTE_NAME))
        break
      }
      case H.AMPERSAND: {
        this._startCharacterReference()
        break
      }
      case H.GREATER_THAN_SIGN: {
        ;(this._leaveAttrValue(), (this.state = W.DATA), this.emitCurrentTagToken())
        break
      }
      case H.NULL: {
        ;(this._err(L.unexpectedNullCharacter), (this.currentAttr.value += $))
        break
      }
      case H.QUOTATION_MARK:
      case H.APOSTROPHE:
      case H.LESS_THAN_SIGN:
      case H.EQUALS_SIGN:
      case H.GRAVE_ACCENT: {
        ;(this._err(L.unexpectedCharacterInUnquotedAttributeValue),
          (this.currentAttr.value += String.fromCodePoint(Y)))
        break
      }
      case H.EOF: {
        ;(this._err(L.eofInTag), this._emitEOFToken())
        break
      }
      default:
        this.currentAttr.value += String.fromCodePoint(Y)
    }
  }
  _stateAfterAttributeValueQuoted(Y) {
    switch (Y) {
      case H.SPACE:
      case H.LINE_FEED:
      case H.TABULATION:
      case H.FORM_FEED: {
        ;(this._leaveAttrValue(), (this.state = W.BEFORE_ATTRIBUTE_NAME))
        break
      }
      case H.SOLIDUS: {
        ;(this._leaveAttrValue(), (this.state = W.SELF_CLOSING_START_TAG))
        break
      }
      case H.GREATER_THAN_SIGN: {
        ;(this._leaveAttrValue(), (this.state = W.DATA), this.emitCurrentTagToken())
        break
      }
      case H.EOF: {
        ;(this._err(L.eofInTag), this._emitEOFToken())
        break
      }
      default:
        ;(this._err(L.missingWhitespaceBetweenAttributes),
          (this.state = W.BEFORE_ATTRIBUTE_NAME),
          this._stateBeforeAttributeName(Y))
    }
  }
  _stateSelfClosingStartTag(Y) {
    switch (Y) {
      case H.GREATER_THAN_SIGN: {
        let Z = this.currentToken
        ;((Z.selfClosing = !0), (this.state = W.DATA), this.emitCurrentTagToken())
        break
      }
      case H.EOF: {
        ;(this._err(L.eofInTag), this._emitEOFToken())
        break
      }
      default:
        ;(this._err(L.unexpectedSolidusInTag),
          (this.state = W.BEFORE_ATTRIBUTE_NAME),
          this._stateBeforeAttributeName(Y))
    }
  }
  _stateBogusComment(Y) {
    let Z = this.currentToken
    switch (Y) {
      case H.GREATER_THAN_SIGN: {
        ;((this.state = W.DATA), this.emitCurrentComment(Z))
        break
      }
      case H.EOF: {
        ;(this.emitCurrentComment(Z), this._emitEOFToken())
        break
      }
      case H.NULL: {
        ;(this._err(L.unexpectedNullCharacter), (Z.data += $))
        break
      }
      default:
        Z.data += String.fromCodePoint(Y)
    }
  }
  _stateMarkupDeclarationOpen(Y) {
    if (this._consumeSequenceIfMatch(d.DASH_DASH, !0))
      (this._createCommentToken(d.DASH_DASH.length + 1), (this.state = W.COMMENT_START))
    else if (this._consumeSequenceIfMatch(d.DOCTYPE, !1))
      ((this.currentLocation = this.getCurrentLocation(d.DOCTYPE.length + 1)),
        (this.state = W.DOCTYPE))
    else if (this._consumeSequenceIfMatch(d.CDATA_START, !0))
      if (this.inForeignNode) this.state = W.CDATA_SECTION
      else
        (this._err(L.cdataInHtmlContent),
          this._createCommentToken(d.CDATA_START.length + 1),
          (this.currentToken.data = '[CDATA['),
          (this.state = W.BOGUS_COMMENT))
    else if (!this._ensureHibernation())
      (this._err(L.incorrectlyOpenedComment),
        this._createCommentToken(2),
        (this.state = W.BOGUS_COMMENT),
        this._stateBogusComment(Y))
  }
  _stateCommentStart(Y) {
    switch (Y) {
      case H.HYPHEN_MINUS: {
        this.state = W.COMMENT_START_DASH
        break
      }
      case H.GREATER_THAN_SIGN: {
        ;(this._err(L.abruptClosingOfEmptyComment), (this.state = W.DATA))
        let Z = this.currentToken
        this.emitCurrentComment(Z)
        break
      }
      default:
        ;((this.state = W.COMMENT), this._stateComment(Y))
    }
  }
  _stateCommentStartDash(Y) {
    let Z = this.currentToken
    switch (Y) {
      case H.HYPHEN_MINUS: {
        this.state = W.COMMENT_END
        break
      }
      case H.GREATER_THAN_SIGN: {
        ;(this._err(L.abruptClosingOfEmptyComment),
          (this.state = W.DATA),
          this.emitCurrentComment(Z))
        break
      }
      case H.EOF: {
        ;(this._err(L.eofInComment), this.emitCurrentComment(Z), this._emitEOFToken())
        break
      }
      default:
        ;((Z.data += '-'), (this.state = W.COMMENT), this._stateComment(Y))
    }
  }
  _stateComment(Y) {
    let Z = this.currentToken
    switch (Y) {
      case H.HYPHEN_MINUS: {
        this.state = W.COMMENT_END_DASH
        break
      }
      case H.LESS_THAN_SIGN: {
        ;((Z.data += '<'), (this.state = W.COMMENT_LESS_THAN_SIGN))
        break
      }
      case H.NULL: {
        ;(this._err(L.unexpectedNullCharacter), (Z.data += $))
        break
      }
      case H.EOF: {
        ;(this._err(L.eofInComment), this.emitCurrentComment(Z), this._emitEOFToken())
        break
      }
      default:
        Z.data += String.fromCodePoint(Y)
    }
  }
  _stateCommentLessThanSign(Y) {
    let Z = this.currentToken
    switch (Y) {
      case H.EXCLAMATION_MARK: {
        ;((Z.data += '!'), (this.state = W.COMMENT_LESS_THAN_SIGN_BANG))
        break
      }
      case H.LESS_THAN_SIGN: {
        Z.data += '<'
        break
      }
      default:
        ;((this.state = W.COMMENT), this._stateComment(Y))
    }
  }
  _stateCommentLessThanSignBang(Y) {
    if (Y === H.HYPHEN_MINUS) this.state = W.COMMENT_LESS_THAN_SIGN_BANG_DASH
    else ((this.state = W.COMMENT), this._stateComment(Y))
  }
  _stateCommentLessThanSignBangDash(Y) {
    if (Y === H.HYPHEN_MINUS) this.state = W.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH
    else ((this.state = W.COMMENT_END_DASH), this._stateCommentEndDash(Y))
  }
  _stateCommentLessThanSignBangDashDash(Y) {
    if (Y !== H.GREATER_THAN_SIGN && Y !== H.EOF) this._err(L.nestedComment)
    ;((this.state = W.COMMENT_END), this._stateCommentEnd(Y))
  }
  _stateCommentEndDash(Y) {
    let Z = this.currentToken
    switch (Y) {
      case H.HYPHEN_MINUS: {
        this.state = W.COMMENT_END
        break
      }
      case H.EOF: {
        ;(this._err(L.eofInComment), this.emitCurrentComment(Z), this._emitEOFToken())
        break
      }
      default:
        ;((Z.data += '-'), (this.state = W.COMMENT), this._stateComment(Y))
    }
  }
  _stateCommentEnd(Y) {
    let Z = this.currentToken
    switch (Y) {
      case H.GREATER_THAN_SIGN: {
        ;((this.state = W.DATA), this.emitCurrentComment(Z))
        break
      }
      case H.EXCLAMATION_MARK: {
        this.state = W.COMMENT_END_BANG
        break
      }
      case H.HYPHEN_MINUS: {
        Z.data += '-'
        break
      }
      case H.EOF: {
        ;(this._err(L.eofInComment), this.emitCurrentComment(Z), this._emitEOFToken())
        break
      }
      default:
        ;((Z.data += '--'), (this.state = W.COMMENT), this._stateComment(Y))
    }
  }
  _stateCommentEndBang(Y) {
    let Z = this.currentToken
    switch (Y) {
      case H.HYPHEN_MINUS: {
        ;((Z.data += '--!'), (this.state = W.COMMENT_END_DASH))
        break
      }
      case H.GREATER_THAN_SIGN: {
        ;(this._err(L.incorrectlyClosedComment), (this.state = W.DATA), this.emitCurrentComment(Z))
        break
      }
      case H.EOF: {
        ;(this._err(L.eofInComment), this.emitCurrentComment(Z), this._emitEOFToken())
        break
      }
      default:
        ;((Z.data += '--!'), (this.state = W.COMMENT), this._stateComment(Y))
    }
  }
  _stateDoctype(Y) {
    switch (Y) {
      case H.SPACE:
      case H.LINE_FEED:
      case H.TABULATION:
      case H.FORM_FEED: {
        this.state = W.BEFORE_DOCTYPE_NAME
        break
      }
      case H.GREATER_THAN_SIGN: {
        ;((this.state = W.BEFORE_DOCTYPE_NAME), this._stateBeforeDoctypeName(Y))
        break
      }
      case H.EOF: {
        ;(this._err(L.eofInDoctype), this._createDoctypeToken(null))
        let Z = this.currentToken
        ;((Z.forceQuirks = !0), this.emitCurrentDoctype(Z), this._emitEOFToken())
        break
      }
      default:
        ;(this._err(L.missingWhitespaceBeforeDoctypeName),
          (this.state = W.BEFORE_DOCTYPE_NAME),
          this._stateBeforeDoctypeName(Y))
    }
  }
  _stateBeforeDoctypeName(Y) {
    if (q1(Y)) (this._createDoctypeToken(String.fromCharCode(Q4(Y))), (this.state = W.DOCTYPE_NAME))
    else
      switch (Y) {
        case H.SPACE:
        case H.LINE_FEED:
        case H.TABULATION:
        case H.FORM_FEED:
          break
        case H.NULL: {
          ;(this._err(L.unexpectedNullCharacter),
            this._createDoctypeToken($),
            (this.state = W.DOCTYPE_NAME))
          break
        }
        case H.GREATER_THAN_SIGN: {
          ;(this._err(L.missingDoctypeName), this._createDoctypeToken(null))
          let Z = this.currentToken
          ;((Z.forceQuirks = !0), this.emitCurrentDoctype(Z), (this.state = W.DATA))
          break
        }
        case H.EOF: {
          ;(this._err(L.eofInDoctype), this._createDoctypeToken(null))
          let Z = this.currentToken
          ;((Z.forceQuirks = !0), this.emitCurrentDoctype(Z), this._emitEOFToken())
          break
        }
        default:
          ;(this._createDoctypeToken(String.fromCodePoint(Y)), (this.state = W.DOCTYPE_NAME))
      }
  }
  _stateDoctypeName(Y) {
    let Z = this.currentToken
    switch (Y) {
      case H.SPACE:
      case H.LINE_FEED:
      case H.TABULATION:
      case H.FORM_FEED: {
        this.state = W.AFTER_DOCTYPE_NAME
        break
      }
      case H.GREATER_THAN_SIGN: {
        ;((this.state = W.DATA), this.emitCurrentDoctype(Z))
        break
      }
      case H.NULL: {
        ;(this._err(L.unexpectedNullCharacter), (Z.name += $))
        break
      }
      case H.EOF: {
        ;(this._err(L.eofInDoctype),
          (Z.forceQuirks = !0),
          this.emitCurrentDoctype(Z),
          this._emitEOFToken())
        break
      }
      default:
        Z.name += String.fromCodePoint(q1(Y) ? Q4(Y) : Y)
    }
  }
  _stateAfterDoctypeName(Y) {
    let Z = this.currentToken
    switch (Y) {
      case H.SPACE:
      case H.LINE_FEED:
      case H.TABULATION:
      case H.FORM_FEED:
        break
      case H.GREATER_THAN_SIGN: {
        ;((this.state = W.DATA), this.emitCurrentDoctype(Z))
        break
      }
      case H.EOF: {
        ;(this._err(L.eofInDoctype),
          (Z.forceQuirks = !0),
          this.emitCurrentDoctype(Z),
          this._emitEOFToken())
        break
      }
      default:
        if (this._consumeSequenceIfMatch(d.PUBLIC, !1)) this.state = W.AFTER_DOCTYPE_PUBLIC_KEYWORD
        else if (this._consumeSequenceIfMatch(d.SYSTEM, !1))
          this.state = W.AFTER_DOCTYPE_SYSTEM_KEYWORD
        else if (!this._ensureHibernation())
          (this._err(L.invalidCharacterSequenceAfterDoctypeName),
            (Z.forceQuirks = !0),
            (this.state = W.BOGUS_DOCTYPE),
            this._stateBogusDoctype(Y))
    }
  }
  _stateAfterDoctypePublicKeyword(Y) {
    let Z = this.currentToken
    switch (Y) {
      case H.SPACE:
      case H.LINE_FEED:
      case H.TABULATION:
      case H.FORM_FEED: {
        this.state = W.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER
        break
      }
      case H.QUOTATION_MARK: {
        ;(this._err(L.missingWhitespaceAfterDoctypePublicKeyword),
          (Z.publicId = ''),
          (this.state = W.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED))
        break
      }
      case H.APOSTROPHE: {
        ;(this._err(L.missingWhitespaceAfterDoctypePublicKeyword),
          (Z.publicId = ''),
          (this.state = W.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED))
        break
      }
      case H.GREATER_THAN_SIGN: {
        ;(this._err(L.missingDoctypePublicIdentifier),
          (Z.forceQuirks = !0),
          (this.state = W.DATA),
          this.emitCurrentDoctype(Z))
        break
      }
      case H.EOF: {
        ;(this._err(L.eofInDoctype),
          (Z.forceQuirks = !0),
          this.emitCurrentDoctype(Z),
          this._emitEOFToken())
        break
      }
      default:
        ;(this._err(L.missingQuoteBeforeDoctypePublicIdentifier),
          (Z.forceQuirks = !0),
          (this.state = W.BOGUS_DOCTYPE),
          this._stateBogusDoctype(Y))
    }
  }
  _stateBeforeDoctypePublicIdentifier(Y) {
    let Z = this.currentToken
    switch (Y) {
      case H.SPACE:
      case H.LINE_FEED:
      case H.TABULATION:
      case H.FORM_FEED:
        break
      case H.QUOTATION_MARK: {
        ;((Z.publicId = ''), (this.state = W.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED))
        break
      }
      case H.APOSTROPHE: {
        ;((Z.publicId = ''), (this.state = W.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED))
        break
      }
      case H.GREATER_THAN_SIGN: {
        ;(this._err(L.missingDoctypePublicIdentifier),
          (Z.forceQuirks = !0),
          (this.state = W.DATA),
          this.emitCurrentDoctype(Z))
        break
      }
      case H.EOF: {
        ;(this._err(L.eofInDoctype),
          (Z.forceQuirks = !0),
          this.emitCurrentDoctype(Z),
          this._emitEOFToken())
        break
      }
      default:
        ;(this._err(L.missingQuoteBeforeDoctypePublicIdentifier),
          (Z.forceQuirks = !0),
          (this.state = W.BOGUS_DOCTYPE),
          this._stateBogusDoctype(Y))
    }
  }
  _stateDoctypePublicIdentifierDoubleQuoted(Y) {
    let Z = this.currentToken
    switch (Y) {
      case H.QUOTATION_MARK: {
        this.state = W.AFTER_DOCTYPE_PUBLIC_IDENTIFIER
        break
      }
      case H.NULL: {
        ;(this._err(L.unexpectedNullCharacter), (Z.publicId += $))
        break
      }
      case H.GREATER_THAN_SIGN: {
        ;(this._err(L.abruptDoctypePublicIdentifier),
          (Z.forceQuirks = !0),
          this.emitCurrentDoctype(Z),
          (this.state = W.DATA))
        break
      }
      case H.EOF: {
        ;(this._err(L.eofInDoctype),
          (Z.forceQuirks = !0),
          this.emitCurrentDoctype(Z),
          this._emitEOFToken())
        break
      }
      default:
        Z.publicId += String.fromCodePoint(Y)
    }
  }
  _stateDoctypePublicIdentifierSingleQuoted(Y) {
    let Z = this.currentToken
    switch (Y) {
      case H.APOSTROPHE: {
        this.state = W.AFTER_DOCTYPE_PUBLIC_IDENTIFIER
        break
      }
      case H.NULL: {
        ;(this._err(L.unexpectedNullCharacter), (Z.publicId += $))
        break
      }
      case H.GREATER_THAN_SIGN: {
        ;(this._err(L.abruptDoctypePublicIdentifier),
          (Z.forceQuirks = !0),
          this.emitCurrentDoctype(Z),
          (this.state = W.DATA))
        break
      }
      case H.EOF: {
        ;(this._err(L.eofInDoctype),
          (Z.forceQuirks = !0),
          this.emitCurrentDoctype(Z),
          this._emitEOFToken())
        break
      }
      default:
        Z.publicId += String.fromCodePoint(Y)
    }
  }
  _stateAfterDoctypePublicIdentifier(Y) {
    let Z = this.currentToken
    switch (Y) {
      case H.SPACE:
      case H.LINE_FEED:
      case H.TABULATION:
      case H.FORM_FEED: {
        this.state = W.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS
        break
      }
      case H.GREATER_THAN_SIGN: {
        ;((this.state = W.DATA), this.emitCurrentDoctype(Z))
        break
      }
      case H.QUOTATION_MARK: {
        ;(this._err(L.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers),
          (Z.systemId = ''),
          (this.state = W.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED))
        break
      }
      case H.APOSTROPHE: {
        ;(this._err(L.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers),
          (Z.systemId = ''),
          (this.state = W.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED))
        break
      }
      case H.EOF: {
        ;(this._err(L.eofInDoctype),
          (Z.forceQuirks = !0),
          this.emitCurrentDoctype(Z),
          this._emitEOFToken())
        break
      }
      default:
        ;(this._err(L.missingQuoteBeforeDoctypeSystemIdentifier),
          (Z.forceQuirks = !0),
          (this.state = W.BOGUS_DOCTYPE),
          this._stateBogusDoctype(Y))
    }
  }
  _stateBetweenDoctypePublicAndSystemIdentifiers(Y) {
    let Z = this.currentToken
    switch (Y) {
      case H.SPACE:
      case H.LINE_FEED:
      case H.TABULATION:
      case H.FORM_FEED:
        break
      case H.GREATER_THAN_SIGN: {
        ;(this.emitCurrentDoctype(Z), (this.state = W.DATA))
        break
      }
      case H.QUOTATION_MARK: {
        ;((Z.systemId = ''), (this.state = W.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED))
        break
      }
      case H.APOSTROPHE: {
        ;((Z.systemId = ''), (this.state = W.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED))
        break
      }
      case H.EOF: {
        ;(this._err(L.eofInDoctype),
          (Z.forceQuirks = !0),
          this.emitCurrentDoctype(Z),
          this._emitEOFToken())
        break
      }
      default:
        ;(this._err(L.missingQuoteBeforeDoctypeSystemIdentifier),
          (Z.forceQuirks = !0),
          (this.state = W.BOGUS_DOCTYPE),
          this._stateBogusDoctype(Y))
    }
  }
  _stateAfterDoctypeSystemKeyword(Y) {
    let Z = this.currentToken
    switch (Y) {
      case H.SPACE:
      case H.LINE_FEED:
      case H.TABULATION:
      case H.FORM_FEED: {
        this.state = W.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER
        break
      }
      case H.QUOTATION_MARK: {
        ;(this._err(L.missingWhitespaceAfterDoctypeSystemKeyword),
          (Z.systemId = ''),
          (this.state = W.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED))
        break
      }
      case H.APOSTROPHE: {
        ;(this._err(L.missingWhitespaceAfterDoctypeSystemKeyword),
          (Z.systemId = ''),
          (this.state = W.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED))
        break
      }
      case H.GREATER_THAN_SIGN: {
        ;(this._err(L.missingDoctypeSystemIdentifier),
          (Z.forceQuirks = !0),
          (this.state = W.DATA),
          this.emitCurrentDoctype(Z))
        break
      }
      case H.EOF: {
        ;(this._err(L.eofInDoctype),
          (Z.forceQuirks = !0),
          this.emitCurrentDoctype(Z),
          this._emitEOFToken())
        break
      }
      default:
        ;(this._err(L.missingQuoteBeforeDoctypeSystemIdentifier),
          (Z.forceQuirks = !0),
          (this.state = W.BOGUS_DOCTYPE),
          this._stateBogusDoctype(Y))
    }
  }
  _stateBeforeDoctypeSystemIdentifier(Y) {
    let Z = this.currentToken
    switch (Y) {
      case H.SPACE:
      case H.LINE_FEED:
      case H.TABULATION:
      case H.FORM_FEED:
        break
      case H.QUOTATION_MARK: {
        ;((Z.systemId = ''), (this.state = W.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED))
        break
      }
      case H.APOSTROPHE: {
        ;((Z.systemId = ''), (this.state = W.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED))
        break
      }
      case H.GREATER_THAN_SIGN: {
        ;(this._err(L.missingDoctypeSystemIdentifier),
          (Z.forceQuirks = !0),
          (this.state = W.DATA),
          this.emitCurrentDoctype(Z))
        break
      }
      case H.EOF: {
        ;(this._err(L.eofInDoctype),
          (Z.forceQuirks = !0),
          this.emitCurrentDoctype(Z),
          this._emitEOFToken())
        break
      }
      default:
        ;(this._err(L.missingQuoteBeforeDoctypeSystemIdentifier),
          (Z.forceQuirks = !0),
          (this.state = W.BOGUS_DOCTYPE),
          this._stateBogusDoctype(Y))
    }
  }
  _stateDoctypeSystemIdentifierDoubleQuoted(Y) {
    let Z = this.currentToken
    switch (Y) {
      case H.QUOTATION_MARK: {
        this.state = W.AFTER_DOCTYPE_SYSTEM_IDENTIFIER
        break
      }
      case H.NULL: {
        ;(this._err(L.unexpectedNullCharacter), (Z.systemId += $))
        break
      }
      case H.GREATER_THAN_SIGN: {
        ;(this._err(L.abruptDoctypeSystemIdentifier),
          (Z.forceQuirks = !0),
          this.emitCurrentDoctype(Z),
          (this.state = W.DATA))
        break
      }
      case H.EOF: {
        ;(this._err(L.eofInDoctype),
          (Z.forceQuirks = !0),
          this.emitCurrentDoctype(Z),
          this._emitEOFToken())
        break
      }
      default:
        Z.systemId += String.fromCodePoint(Y)
    }
  }
  _stateDoctypeSystemIdentifierSingleQuoted(Y) {
    let Z = this.currentToken
    switch (Y) {
      case H.APOSTROPHE: {
        this.state = W.AFTER_DOCTYPE_SYSTEM_IDENTIFIER
        break
      }
      case H.NULL: {
        ;(this._err(L.unexpectedNullCharacter), (Z.systemId += $))
        break
      }
      case H.GREATER_THAN_SIGN: {
        ;(this._err(L.abruptDoctypeSystemIdentifier),
          (Z.forceQuirks = !0),
          this.emitCurrentDoctype(Z),
          (this.state = W.DATA))
        break
      }
      case H.EOF: {
        ;(this._err(L.eofInDoctype),
          (Z.forceQuirks = !0),
          this.emitCurrentDoctype(Z),
          this._emitEOFToken())
        break
      }
      default:
        Z.systemId += String.fromCodePoint(Y)
    }
  }
  _stateAfterDoctypeSystemIdentifier(Y) {
    let Z = this.currentToken
    switch (Y) {
      case H.SPACE:
      case H.LINE_FEED:
      case H.TABULATION:
      case H.FORM_FEED:
        break
      case H.GREATER_THAN_SIGN: {
        ;(this.emitCurrentDoctype(Z), (this.state = W.DATA))
        break
      }
      case H.EOF: {
        ;(this._err(L.eofInDoctype),
          (Z.forceQuirks = !0),
          this.emitCurrentDoctype(Z),
          this._emitEOFToken())
        break
      }
      default:
        ;(this._err(L.unexpectedCharacterAfterDoctypeSystemIdentifier),
          (this.state = W.BOGUS_DOCTYPE),
          this._stateBogusDoctype(Y))
    }
  }
  _stateBogusDoctype(Y) {
    let Z = this.currentToken
    switch (Y) {
      case H.GREATER_THAN_SIGN: {
        ;(this.emitCurrentDoctype(Z), (this.state = W.DATA))
        break
      }
      case H.NULL: {
        this._err(L.unexpectedNullCharacter)
        break
      }
      case H.EOF: {
        ;(this.emitCurrentDoctype(Z), this._emitEOFToken())
        break
      }
      default:
    }
  }
  _stateCdataSection(Y) {
    switch (Y) {
      case H.RIGHT_SQUARE_BRACKET: {
        this.state = W.CDATA_SECTION_BRACKET
        break
      }
      case H.EOF: {
        ;(this._err(L.eofInCdata), this._emitEOFToken())
        break
      }
      default:
        this._emitCodePoint(Y)
    }
  }
  _stateCdataSectionBracket(Y) {
    if (Y === H.RIGHT_SQUARE_BRACKET) this.state = W.CDATA_SECTION_END
    else (this._emitChars(']'), (this.state = W.CDATA_SECTION), this._stateCdataSection(Y))
  }
  _stateCdataSectionEnd(Y) {
    switch (Y) {
      case H.GREATER_THAN_SIGN: {
        this.state = W.DATA
        break
      }
      case H.RIGHT_SQUARE_BRACKET: {
        this._emitChars(']')
        break
      }
      default:
        ;(this._emitChars(']]'), (this.state = W.CDATA_SECTION), this._stateCdataSection(Y))
    }
  }
  _stateCharacterReference() {
    let Y = this.entityDecoder.write(this.preprocessor.html, this.preprocessor.pos)
    if (Y < 0)
      if (this.preprocessor.lastChunkWritten) Y = this.entityDecoder.end()
      else {
        ;((this.active = !1),
          (this.preprocessor.pos = this.preprocessor.html.length - 1),
          (this.consumedAfterSnapshot = 0),
          (this.preprocessor.endOfChunkHit = !0))
        return
      }
    if (Y === 0)
      ((this.preprocessor.pos = this.entityStartPos),
        this._flushCodePointConsumedAsCharacterReference(H.AMPERSAND),
        (this.state =
          !this._isCharacterReferenceInAttribute() && K8(this.preprocessor.peek(1))
            ? W.AMBIGUOUS_AMPERSAND
            : this.returnState))
    else this.state = this.returnState
  }
  _stateAmbiguousAmpersand(Y) {
    if (K8(Y)) this._flushCodePointConsumedAsCharacterReference(Y)
    else {
      if (Y === H.SEMICOLON) this._err(L.unknownNamedCharacterReference)
      ;((this.state = this.returnState), this._callState(Y))
    }
  }
}
var H8 = new Set([X.DD, X.DT, X.LI, X.OPTGROUP, X.OPTION, X.P, X.RB, X.RP, X.RT, X.RTC]),
  Q8 = new Set([...H8, X.CAPTION, X.COLGROUP, X.TBODY, X.TD, X.TFOOT, X.TH, X.THEAD, X.TR]),
  z4 = new Set([X.APPLET, X.CAPTION, X.HTML, X.MARQUEE, X.OBJECT, X.TABLE, X.TD, X.TEMPLATE, X.TH]),
  Q9 = new Set([...z4, X.OL, X.UL]),
  V9 = new Set([...z4, X.BUTTON]),
  V8 = new Set([X.ANNOTATION_XML, X.MI, X.MN, X.MO, X.MS, X.MTEXT]),
  z8 = new Set([X.DESC, X.FOREIGN_OBJECT, X.TITLE]),
  z9 = new Set([X.TR, X.TEMPLATE, X.HTML]),
  H9 = new Set([X.TBODY, X.TFOOT, X.THEAD, X.TEMPLATE, X.HTML]),
  W9 = new Set([X.TABLE, X.TEMPLATE, X.HTML]),
  U9 = new Set([X.TD, X.TH])
class CY {
  get currentTmplContentOrNode() {
    return this._isInTemplate() ? this.treeAdapter.getTemplateContent(this.current) : this.current
  }
  constructor(Y, Z, K) {
    ;((this.treeAdapter = Z),
      (this.handler = K),
      (this.items = []),
      (this.tagIDs = []),
      (this.stackTop = -1),
      (this.tmplCount = 0),
      (this.currentTagId = X.UNKNOWN),
      (this.current = Y))
  }
  _indexOf(Y) {
    return this.items.lastIndexOf(Y, this.stackTop)
  }
  _isInTemplate() {
    return (
      this.currentTagId === X.TEMPLATE && this.treeAdapter.getNamespaceURI(this.current) === R.HTML
    )
  }
  _updateCurrentElement() {
    ;((this.current = this.items[this.stackTop]), (this.currentTagId = this.tagIDs[this.stackTop]))
  }
  push(Y, Z) {
    if (
      (this.stackTop++,
      (this.items[this.stackTop] = Y),
      (this.current = Y),
      (this.tagIDs[this.stackTop] = Z),
      (this.currentTagId = Z),
      this._isInTemplate())
    )
      this.tmplCount++
    this.handler.onItemPush(Y, Z, !0)
  }
  pop() {
    let Y = this.current
    if (this.tmplCount > 0 && this._isInTemplate()) this.tmplCount--
    ;(this.stackTop--, this._updateCurrentElement(), this.handler.onItemPop(Y, !0))
  }
  replace(Y, Z) {
    let K = this._indexOf(Y)
    if (((this.items[K] = Z), K === this.stackTop)) this.current = Z
  }
  insertAfter(Y, Z, K) {
    let J = this._indexOf(Y) + 1
    if (
      (this.items.splice(J, 0, Z),
      this.tagIDs.splice(J, 0, K),
      this.stackTop++,
      J === this.stackTop)
    )
      this._updateCurrentElement()
    if (this.current && this.currentTagId !== void 0)
      this.handler.onItemPush(this.current, this.currentTagId, J === this.stackTop)
  }
  popUntilTagNamePopped(Y) {
    let Z = this.stackTop + 1
    do Z = this.tagIDs.lastIndexOf(Y, Z - 1)
    while (Z > 0 && this.treeAdapter.getNamespaceURI(this.items[Z]) !== R.HTML)
    this.shortenToLength(Math.max(Z, 0))
  }
  shortenToLength(Y) {
    while (this.stackTop >= Y) {
      let Z = this.current
      if (this.tmplCount > 0 && this._isInTemplate()) this.tmplCount -= 1
      ;(this.stackTop--, this._updateCurrentElement(), this.handler.onItemPop(Z, this.stackTop < Y))
    }
  }
  popUntilElementPopped(Y) {
    let Z = this._indexOf(Y)
    this.shortenToLength(Math.max(Z, 0))
  }
  popUntilPopped(Y, Z) {
    let K = this._indexOfTagNames(Y, Z)
    this.shortenToLength(Math.max(K, 0))
  }
  popUntilNumberedHeaderPopped() {
    this.popUntilPopped(n0, R.HTML)
  }
  popUntilTableCellPopped() {
    this.popUntilPopped(U9, R.HTML)
  }
  popAllUpToHtmlElement() {
    ;((this.tmplCount = 0), this.shortenToLength(1))
  }
  _indexOfTagNames(Y, Z) {
    for (let K = this.stackTop; K >= 0; K--)
      if (Y.has(this.tagIDs[K]) && this.treeAdapter.getNamespaceURI(this.items[K]) === Z) return K
    return -1
  }
  clearBackTo(Y, Z) {
    let K = this._indexOfTagNames(Y, Z)
    this.shortenToLength(K + 1)
  }
  clearBackToTableContext() {
    this.clearBackTo(W9, R.HTML)
  }
  clearBackToTableBodyContext() {
    this.clearBackTo(H9, R.HTML)
  }
  clearBackToTableRowContext() {
    this.clearBackTo(z9, R.HTML)
  }
  remove(Y) {
    let Z = this._indexOf(Y)
    if (Z >= 0)
      if (Z === this.stackTop) this.pop()
      else
        (this.items.splice(Z, 1),
          this.tagIDs.splice(Z, 1),
          this.stackTop--,
          this._updateCurrentElement(),
          this.handler.onItemPop(Y, !1))
  }
  tryPeekProperlyNestedBodyElement() {
    return this.stackTop >= 1 && this.tagIDs[1] === X.BODY ? this.items[1] : null
  }
  contains(Y) {
    return this._indexOf(Y) > -1
  }
  getCommonAncestor(Y) {
    let Z = this._indexOf(Y) - 1
    return Z >= 0 ? this.items[Z] : null
  }
  isRootHtmlElementCurrent() {
    return this.stackTop === 0 && this.tagIDs[0] === X.HTML
  }
  hasInDynamicScope(Y, Z) {
    for (let K = this.stackTop; K >= 0; K--) {
      let J = this.tagIDs[K]
      switch (this.treeAdapter.getNamespaceURI(this.items[K])) {
        case R.HTML: {
          if (J === Y) return !0
          if (Z.has(J)) return !1
          break
        }
        case R.SVG: {
          if (z8.has(J)) return !1
          break
        }
        case R.MATHML: {
          if (V8.has(J)) return !1
          break
        }
      }
    }
    return !0
  }
  hasInScope(Y) {
    return this.hasInDynamicScope(Y, z4)
  }
  hasInListItemScope(Y) {
    return this.hasInDynamicScope(Y, Q9)
  }
  hasInButtonScope(Y) {
    return this.hasInDynamicScope(Y, V9)
  }
  hasNumberedHeaderInScope() {
    for (let Y = this.stackTop; Y >= 0; Y--) {
      let Z = this.tagIDs[Y]
      switch (this.treeAdapter.getNamespaceURI(this.items[Y])) {
        case R.HTML: {
          if (n0.has(Z)) return !0
          if (z4.has(Z)) return !1
          break
        }
        case R.SVG: {
          if (z8.has(Z)) return !1
          break
        }
        case R.MATHML: {
          if (V8.has(Z)) return !1
          break
        }
      }
    }
    return !0
  }
  hasInTableScope(Y) {
    for (let Z = this.stackTop; Z >= 0; Z--) {
      if (this.treeAdapter.getNamespaceURI(this.items[Z]) !== R.HTML) continue
      switch (this.tagIDs[Z]) {
        case Y:
          return !0
        case X.TABLE:
        case X.HTML:
          return !1
      }
    }
    return !0
  }
  hasTableBodyContextInTableScope() {
    for (let Y = this.stackTop; Y >= 0; Y--) {
      if (this.treeAdapter.getNamespaceURI(this.items[Y]) !== R.HTML) continue
      switch (this.tagIDs[Y]) {
        case X.TBODY:
        case X.THEAD:
        case X.TFOOT:
          return !0
        case X.TABLE:
        case X.HTML:
          return !1
      }
    }
    return !0
  }
  hasInSelectScope(Y) {
    for (let Z = this.stackTop; Z >= 0; Z--) {
      if (this.treeAdapter.getNamespaceURI(this.items[Z]) !== R.HTML) continue
      switch (this.tagIDs[Z]) {
        case Y:
          return !0
        case X.OPTION:
        case X.OPTGROUP:
          break
        default:
          return !1
      }
    }
    return !0
  }
  generateImpliedEndTags() {
    while (this.currentTagId !== void 0 && H8.has(this.currentTagId)) this.pop()
  }
  generateImpliedEndTagsThoroughly() {
    while (this.currentTagId !== void 0 && Q8.has(this.currentTagId)) this.pop()
  }
  generateImpliedEndTagsWithExclusion(Y) {
    while (this.currentTagId !== void 0 && this.currentTagId !== Y && Q8.has(this.currentTagId))
      this.pop()
  }
}
var X0
;(function (Y) {
  ;((Y[(Y.Marker = 0)] = 'Marker'), (Y[(Y.Element = 1)] = 'Element'))
})(X0 || (X0 = {}))
var W8 = { type: X0.Marker }
class DY {
  constructor(Y) {
    ;((this.treeAdapter = Y), (this.entries = []), (this.bookmark = null))
  }
  _getNoahArkConditionCandidates(Y, Z) {
    let K = [],
      J = Z.length,
      Q = this.treeAdapter.getTagName(Y),
      V = this.treeAdapter.getNamespaceURI(Y)
    for (let z = 0; z < this.entries.length; z++) {
      let F = this.entries[z]
      if (F.type === X0.Marker) break
      let { element: q } = F
      if (this.treeAdapter.getTagName(q) === Q && this.treeAdapter.getNamespaceURI(q) === V) {
        let w = this.treeAdapter.getAttrList(q)
        if (w.length === J) K.push({ idx: z, attrs: w })
      }
    }
    return K
  }
  _ensureNoahArkCondition(Y) {
    if (this.entries.length < 3) return
    let Z = this.treeAdapter.getAttrList(Y),
      K = this._getNoahArkConditionCandidates(Y, Z)
    if (K.length < 3) return
    let J = new Map(Z.map(V => [V.name, V.value])),
      Q = 0
    for (let V = 0; V < K.length; V++) {
      let z = K[V]
      if (z.attrs.every(F => J.get(F.name) === F.value)) {
        if (((Q += 1), Q >= 3)) this.entries.splice(z.idx, 1)
      }
    }
  }
  insertMarker() {
    this.entries.unshift(W8)
  }
  pushElement(Y, Z) {
    ;(this._ensureNoahArkCondition(Y),
      this.entries.unshift({ type: X0.Element, element: Y, token: Z }))
  }
  insertElementAfterBookmark(Y, Z) {
    let K = this.entries.indexOf(this.bookmark)
    this.entries.splice(K, 0, { type: X0.Element, element: Y, token: Z })
  }
  removeEntry(Y) {
    let Z = this.entries.indexOf(Y)
    if (Z !== -1) this.entries.splice(Z, 1)
  }
  clearToLastMarker() {
    let Y = this.entries.indexOf(W8)
    if (Y === -1) this.entries.length = 0
    else this.entries.splice(0, Y + 1)
  }
  getElementEntryInScopeWithTagName(Y) {
    let Z = this.entries.find(
      K => K.type === X0.Marker || this.treeAdapter.getTagName(K.element) === Y,
    )
    return Z && Z.type === X0.Element ? Z : null
  }
  getElementEntry(Y) {
    return this.entries.find(Z => Z.type === X0.Element && Z.element === Y)
  }
}
var Y0 = {
  createDocument() {
    return { nodeName: '#document', mode: m.NO_QUIRKS, childNodes: [] }
  },
  createDocumentFragment() {
    return { nodeName: '#document-fragment', childNodes: [] }
  },
  createElement(Y, Z, K) {
    return { nodeName: Y, tagName: Y, attrs: K, namespaceURI: Z, childNodes: [], parentNode: null }
  },
  createCommentNode(Y) {
    return { nodeName: '#comment', data: Y, parentNode: null }
  },
  createTextNode(Y) {
    return { nodeName: '#text', value: Y, parentNode: null }
  },
  appendChild(Y, Z) {
    ;(Y.childNodes.push(Z), (Z.parentNode = Y))
  },
  insertBefore(Y, Z, K) {
    let J = Y.childNodes.indexOf(K)
    ;(Y.childNodes.splice(J, 0, Z), (Z.parentNode = Y))
  },
  setTemplateContent(Y, Z) {
    Y.content = Z
  },
  getTemplateContent(Y) {
    return Y.content
  },
  setDocumentType(Y, Z, K, J) {
    let Q = Y.childNodes.find(V => V.nodeName === '#documentType')
    if (Q) ((Q.name = Z), (Q.publicId = K), (Q.systemId = J))
    else {
      let V = { nodeName: '#documentType', name: Z, publicId: K, systemId: J, parentNode: null }
      Y0.appendChild(Y, V)
    }
  },
  setDocumentMode(Y, Z) {
    Y.mode = Z
  },
  getDocumentMode(Y) {
    return Y.mode
  },
  detachNode(Y) {
    if (Y.parentNode) {
      let Z = Y.parentNode.childNodes.indexOf(Y)
      ;(Y.parentNode.childNodes.splice(Z, 1), (Y.parentNode = null))
    }
  },
  insertText(Y, Z) {
    if (Y.childNodes.length > 0) {
      let K = Y.childNodes[Y.childNodes.length - 1]
      if (Y0.isTextNode(K)) {
        K.value += Z
        return
      }
    }
    Y0.appendChild(Y, Y0.createTextNode(Z))
  },
  insertTextBefore(Y, Z, K) {
    let J = Y.childNodes[Y.childNodes.indexOf(K) - 1]
    if (J && Y0.isTextNode(J)) J.value += Z
    else Y0.insertBefore(Y, Y0.createTextNode(Z), K)
  },
  adoptAttributes(Y, Z) {
    let K = new Set(Y.attrs.map(J => J.name))
    for (let J = 0; J < Z.length; J++) if (!K.has(Z[J].name)) Y.attrs.push(Z[J])
  },
  getFirstChild(Y) {
    return Y.childNodes[0]
  },
  getChildNodes(Y) {
    return Y.childNodes
  },
  getParentNode(Y) {
    return Y.parentNode
  },
  getAttrList(Y) {
    return Y.attrs
  },
  getTagName(Y) {
    return Y.tagName
  },
  getNamespaceURI(Y) {
    return Y.namespaceURI
  },
  getTextNodeContent(Y) {
    return Y.value
  },
  getCommentNodeContent(Y) {
    return Y.data
  },
  getDocumentTypeNodeName(Y) {
    return Y.name
  },
  getDocumentTypeNodePublicId(Y) {
    return Y.publicId
  },
  getDocumentTypeNodeSystemId(Y) {
    return Y.systemId
  },
  isTextNode(Y) {
    return Y.nodeName === '#text'
  },
  isCommentNode(Y) {
    return Y.nodeName === '#comment'
  },
  isDocumentTypeNode(Y) {
    return Y.nodeName === '#documentType'
  },
  isElementNode(Y) {
    return Object.prototype.hasOwnProperty.call(Y, 'tagName')
  },
  setNodeSourceCodeLocation(Y, Z) {
    Y.sourceCodeLocation = Z
  },
  getNodeSourceCodeLocation(Y) {
    return Y.sourceCodeLocation
  },
  updateNodeSourceCodeLocation(Y, Z) {
    Y.sourceCodeLocation = { ...Y.sourceCodeLocation, ...Z }
  },
}
var F8 = 'html',
  F9 = 'about:legacy-compat',
  q9 = 'http://www.ibm.com/data/dtd/v11/ibmxhtml1-transitional.dtd',
  q8 = [
    '+//silmaril//dtd html pro v0r11 19970101//',
    '-//as//dtd html 3.0 aswedit + extensions//',
    '-//advasoft ltd//dtd html 3.0 aswedit + extensions//',
    '-//ietf//dtd html 2.0 level 1//',
    '-//ietf//dtd html 2.0 level 2//',
    '-//ietf//dtd html 2.0 strict level 1//',
    '-//ietf//dtd html 2.0 strict level 2//',
    '-//ietf//dtd html 2.0 strict//',
    '-//ietf//dtd html 2.0//',
    '-//ietf//dtd html 2.1e//',
    '-//ietf//dtd html 3.0//',
    '-//ietf//dtd html 3.2 final//',
    '-//ietf//dtd html 3.2//',
    '-//ietf//dtd html 3//',
    '-//ietf//dtd html level 0//',
    '-//ietf//dtd html level 1//',
    '-//ietf//dtd html level 2//',
    '-//ietf//dtd html level 3//',
    '-//ietf//dtd html strict level 0//',
    '-//ietf//dtd html strict level 1//',
    '-//ietf//dtd html strict level 2//',
    '-//ietf//dtd html strict level 3//',
    '-//ietf//dtd html strict//',
    '-//ietf//dtd html//',
    '-//metrius//dtd metrius presentational//',
    '-//microsoft//dtd internet explorer 2.0 html strict//',
    '-//microsoft//dtd internet explorer 2.0 html//',
    '-//microsoft//dtd internet explorer 2.0 tables//',
    '-//microsoft//dtd internet explorer 3.0 html strict//',
    '-//microsoft//dtd internet explorer 3.0 html//',
    '-//microsoft//dtd internet explorer 3.0 tables//',
    '-//netscape comm. corp.//dtd html//',
    '-//netscape comm. corp.//dtd strict html//',
    "-//o'reilly and associates//dtd html 2.0//",
    "-//o'reilly and associates//dtd html extended 1.0//",
    "-//o'reilly and associates//dtd html extended relaxed 1.0//",
    '-//sq//dtd html 2.0 hotmetal + extensions//',
    '-//softquad software//dtd hotmetal pro 6.0::19990601::extensions to html 4.0//',
    '-//softquad//dtd hotmetal pro 4.0::19971010::extensions to html 4.0//',
    '-//spyglass//dtd html 2.0 extended//',
    '-//sun microsystems corp.//dtd hotjava html//',
    '-//sun microsystems corp.//dtd hotjava strict html//',
    '-//w3c//dtd html 3 1995-03-24//',
    '-//w3c//dtd html 3.2 draft//',
    '-//w3c//dtd html 3.2 final//',
    '-//w3c//dtd html 3.2//',
    '-//w3c//dtd html 3.2s draft//',
    '-//w3c//dtd html 4.0 frameset//',
    '-//w3c//dtd html 4.0 transitional//',
    '-//w3c//dtd html experimental 19960712//',
    '-//w3c//dtd html experimental 970421//',
    '-//w3c//dtd w3 html//',
    '-//w3o//dtd w3 html 3.0//',
    '-//webtechs//dtd mozilla html 2.0//',
    '-//webtechs//dtd mozilla html//',
  ],
  B9 = [...q8, '-//w3c//dtd html 4.01 frameset//', '-//w3c//dtd html 4.01 transitional//'],
  w9 = new Set([
    '-//w3o//dtd w3 html strict 3.0//en//',
    '-/w3c/dtd html 4.0 transitional/en',
    'html',
  ]),
  B8 = ['-//w3c//dtd xhtml 1.0 frameset//', '-//w3c//dtd xhtml 1.0 transitional//'],
  L9 = [...B8, '-//w3c//dtd html 4.01 frameset//', '-//w3c//dtd html 4.01 transitional//']
function U8(Y, Z) {
  return Z.some(K => Y.startsWith(K))
}
function w8(Y) {
  return Y.name === F8 && Y.publicId === null && (Y.systemId === null || Y.systemId === F9)
}
function L8(Y) {
  if (Y.name !== F8) return m.QUIRKS
  let { systemId: Z } = Y
  if (Z && Z.toLowerCase() === q9) return m.QUIRKS
  let { publicId: K } = Y
  if (K !== null) {
    if (((K = K.toLowerCase()), w9.has(K))) return m.QUIRKS
    let J = Z === null ? B9 : q8
    if (U8(K, J)) return m.QUIRKS
    if (((J = Z === null ? B8 : L9), U8(K, J))) return m.LIMITED_QUIRKS
  }
  return m.NO_QUIRKS
}
var j8 = { TEXT_HTML: 'text/html', APPLICATION_XML: 'application/xhtml+xml' },
  R9 = 'definitionurl',
  P9 = 'definitionURL',
  v9 = new Map(
    [
      'attributeName',
      'attributeType',
      'baseFrequency',
      'baseProfile',
      'calcMode',
      'clipPathUnits',
      'diffuseConstant',
      'edgeMode',
      'filterUnits',
      'glyphRef',
      'gradientTransform',
      'gradientUnits',
      'kernelMatrix',
      'kernelUnitLength',
      'keyPoints',
      'keySplines',
      'keyTimes',
      'lengthAdjust',
      'limitingConeAngle',
      'markerHeight',
      'markerUnits',
      'markerWidth',
      'maskContentUnits',
      'maskUnits',
      'numOctaves',
      'pathLength',
      'patternContentUnits',
      'patternTransform',
      'patternUnits',
      'pointsAtX',
      'pointsAtY',
      'pointsAtZ',
      'preserveAlpha',
      'preserveAspectRatio',
      'primitiveUnits',
      'refX',
      'refY',
      'repeatCount',
      'repeatDur',
      'requiredExtensions',
      'requiredFeatures',
      'specularConstant',
      'specularExponent',
      'spreadMethod',
      'startOffset',
      'stdDeviation',
      'stitchTiles',
      'surfaceScale',
      'systemLanguage',
      'tableValues',
      'targetX',
      'targetY',
      'textLength',
      'viewBox',
      'viewTarget',
      'xChannelSelector',
      'yChannelSelector',
      'zoomAndPan',
    ].map(Y => [Y.toLowerCase(), Y]),
  ),
  O9 = new Map([
    ['xlink:actuate', { prefix: 'xlink', name: 'actuate', namespace: R.XLINK }],
    ['xlink:arcrole', { prefix: 'xlink', name: 'arcrole', namespace: R.XLINK }],
    ['xlink:href', { prefix: 'xlink', name: 'href', namespace: R.XLINK }],
    ['xlink:role', { prefix: 'xlink', name: 'role', namespace: R.XLINK }],
    ['xlink:show', { prefix: 'xlink', name: 'show', namespace: R.XLINK }],
    ['xlink:title', { prefix: 'xlink', name: 'title', namespace: R.XLINK }],
    ['xlink:type', { prefix: 'xlink', name: 'type', namespace: R.XLINK }],
    ['xml:lang', { prefix: 'xml', name: 'lang', namespace: R.XML }],
    ['xml:space', { prefix: 'xml', name: 'space', namespace: R.XML }],
    ['xmlns', { prefix: '', name: 'xmlns', namespace: R.XMLNS }],
    ['xmlns:xlink', { prefix: 'xmlns', name: 'xlink', namespace: R.XMLNS }],
  ]),
  b9 = new Map(
    [
      'altGlyph',
      'altGlyphDef',
      'altGlyphItem',
      'animateColor',
      'animateMotion',
      'animateTransform',
      'clipPath',
      'feBlend',
      'feColorMatrix',
      'feComponentTransfer',
      'feComposite',
      'feConvolveMatrix',
      'feDiffuseLighting',
      'feDisplacementMap',
      'feDistantLight',
      'feFlood',
      'feFuncA',
      'feFuncB',
      'feFuncG',
      'feFuncR',
      'feGaussianBlur',
      'feImage',
      'feMerge',
      'feMergeNode',
      'feMorphology',
      'feOffset',
      'fePointLight',
      'feSpecularLighting',
      'feSpotLight',
      'feTile',
      'feTurbulence',
      'foreignObject',
      'glyphRef',
      'linearGradient',
      'radialGradient',
      'textPath',
    ].map(Y => [Y.toLowerCase(), Y]),
  ),
  f9 = new Set([
    X.B,
    X.BIG,
    X.BLOCKQUOTE,
    X.BODY,
    X.BR,
    X.CENTER,
    X.CODE,
    X.DD,
    X.DIV,
    X.DL,
    X.DT,
    X.EM,
    X.EMBED,
    X.H1,
    X.H2,
    X.H3,
    X.H4,
    X.H5,
    X.H6,
    X.HEAD,
    X.HR,
    X.I,
    X.IMG,
    X.LI,
    X.LISTING,
    X.MENU,
    X.META,
    X.NOBR,
    X.OL,
    X.P,
    X.PRE,
    X.RUBY,
    X.S,
    X.SMALL,
    X.SPAN,
    X.STRONG,
    X.STRIKE,
    X.SUB,
    X.SUP,
    X.TABLE,
    X.TT,
    X.U,
    X.UL,
    X.VAR,
  ])
function R8(Y) {
  let Z = Y.tagID
  return (
    (Z === X.FONT &&
      Y.attrs.some(({ name: J }) => J === H0.COLOR || J === H0.SIZE || J === H0.FACE)) ||
    f9.has(Z)
  )
}
function GY(Y) {
  for (let Z = 0; Z < Y.attrs.length; Z++)
    if (Y.attrs[Z].name === R9) {
      Y.attrs[Z].name = P9
      break
    }
}
function $Y(Y) {
  for (let Z = 0; Z < Y.attrs.length; Z++) {
    let K = v9.get(Y.attrs[Z].name)
    if (K != null) Y.attrs[Z].name = K
  }
}
function H4(Y) {
  for (let Z = 0; Z < Y.attrs.length; Z++) {
    let K = O9.get(Y.attrs[Z].name)
    if (K)
      ((Y.attrs[Z].prefix = K.prefix),
        (Y.attrs[Z].name = K.name),
        (Y.attrs[Z].namespace = K.namespace))
  }
}
function P8(Y) {
  let Z = b9.get(Y.tagName)
  if (Z != null) ((Y.tagName = Z), (Y.tagID = y0(Y.tagName)))
}
function y9(Y, Z) {
  return Z === R.MATHML && (Y === X.MI || Y === X.MO || Y === X.MN || Y === X.MS || Y === X.MTEXT)
}
function M9(Y, Z, K) {
  if (Z === R.MATHML && Y === X.ANNOTATION_XML) {
    for (let J = 0; J < K.length; J++)
      if (K[J].name === H0.ENCODING) {
        let Q = K[J].value.toLowerCase()
        return Q === j8.TEXT_HTML || Q === j8.APPLICATION_XML
      }
  }
  return Z === R.SVG && (Y === X.FOREIGN_OBJECT || Y === X.DESC || Y === X.TITLE)
}
function v8(Y, Z, K, J) {
  return ((!J || J === R.HTML) && M9(Y, Z, K)) || ((!J || J === R.MATHML) && y9(Y, Z))
}
var N9 = 'hidden',
  g9 = 8,
  x9 = 3,
  U
;(function (Y) {
  ;((Y[(Y.INITIAL = 0)] = 'INITIAL'),
    (Y[(Y.BEFORE_HTML = 1)] = 'BEFORE_HTML'),
    (Y[(Y.BEFORE_HEAD = 2)] = 'BEFORE_HEAD'),
    (Y[(Y.IN_HEAD = 3)] = 'IN_HEAD'),
    (Y[(Y.IN_HEAD_NO_SCRIPT = 4)] = 'IN_HEAD_NO_SCRIPT'),
    (Y[(Y.AFTER_HEAD = 5)] = 'AFTER_HEAD'),
    (Y[(Y.IN_BODY = 6)] = 'IN_BODY'),
    (Y[(Y.TEXT = 7)] = 'TEXT'),
    (Y[(Y.IN_TABLE = 8)] = 'IN_TABLE'),
    (Y[(Y.IN_TABLE_TEXT = 9)] = 'IN_TABLE_TEXT'),
    (Y[(Y.IN_CAPTION = 10)] = 'IN_CAPTION'),
    (Y[(Y.IN_COLUMN_GROUP = 11)] = 'IN_COLUMN_GROUP'),
    (Y[(Y.IN_TABLE_BODY = 12)] = 'IN_TABLE_BODY'),
    (Y[(Y.IN_ROW = 13)] = 'IN_ROW'),
    (Y[(Y.IN_CELL = 14)] = 'IN_CELL'),
    (Y[(Y.IN_SELECT = 15)] = 'IN_SELECT'),
    (Y[(Y.IN_SELECT_IN_TABLE = 16)] = 'IN_SELECT_IN_TABLE'),
    (Y[(Y.IN_TEMPLATE = 17)] = 'IN_TEMPLATE'),
    (Y[(Y.AFTER_BODY = 18)] = 'AFTER_BODY'),
    (Y[(Y.IN_FRAMESET = 19)] = 'IN_FRAMESET'),
    (Y[(Y.AFTER_FRAMESET = 20)] = 'AFTER_FRAMESET'),
    (Y[(Y.AFTER_AFTER_BODY = 21)] = 'AFTER_AFTER_BODY'),
    (Y[(Y.AFTER_AFTER_FRAMESET = 22)] = 'AFTER_AFTER_FRAMESET'))
})(U || (U = {}))
var h9 = { startLine: -1, startCol: -1, startOffset: -1, endLine: -1, endCol: -1, endOffset: -1 },
  M8 = new Set([X.TABLE, X.TBODY, X.TFOOT, X.THEAD, X.TR]),
  b8 = { scriptingEnabled: !0, sourceCodeLocationInfo: !1, treeAdapter: Y0, onParseError: null }
class b1 {
  constructor(Y, Z, K = null, J = null) {
    if (
      ((this.fragmentContext = K),
      (this.scriptHandler = J),
      (this.currentToken = null),
      (this.stopped = !1),
      (this.insertionMode = U.INITIAL),
      (this.originalInsertionMode = U.INITIAL),
      (this.headElement = null),
      (this.formElement = null),
      (this.currentNotInHTML = !1),
      (this.tmplInsertionModeStack = []),
      (this.pendingCharacterTokens = []),
      (this.hasNonWhitespacePendingCharacterToken = !1),
      (this.framesetOk = !0),
      (this.skipNextNewLine = !1),
      (this.fosterParentingEnabled = !1),
      (this.options = { ...b8, ...Y }),
      (this.treeAdapter = this.options.treeAdapter),
      (this.onParseError = this.options.onParseError),
      this.onParseError)
    )
      this.options.sourceCodeLocationInfo = !0
    ;((this.document = Z !== null && Z !== void 0 ? Z : this.treeAdapter.createDocument()),
      (this.tokenizer = new V4(this.options, this)),
      (this.activeFormattingElements = new DY(this.treeAdapter)),
      (this.fragmentContextID = K ? y0(this.treeAdapter.getTagName(K)) : X.UNKNOWN),
      this._setContextModes(K !== null && K !== void 0 ? K : this.document, this.fragmentContextID),
      (this.openElements = new CY(this.document, this.treeAdapter, this)))
  }
  static parse(Y, Z) {
    let K = new this(Z)
    return (K.tokenizer.write(Y, !0), K.document)
  }
  static getFragmentParser(Y, Z) {
    let K = { ...b8, ...Z }
    ;(Y !== null && Y !== void 0) || (Y = K.treeAdapter.createElement(B.TEMPLATE, R.HTML, []))
    let J = K.treeAdapter.createElement('documentmock', R.HTML, []),
      Q = new this(K, J, Y)
    if (Q.fragmentContextID === X.TEMPLATE) Q.tmplInsertionModeStack.unshift(U.IN_TEMPLATE)
    return (
      Q._initTokenizerForFragmentParsing(),
      Q._insertFakeRootElement(),
      Q._resetInsertionMode(),
      Q._findFormInFragmentContext(),
      Q
    )
  }
  getFragment() {
    let Y = this.treeAdapter.getFirstChild(this.document),
      Z = this.treeAdapter.createDocumentFragment()
    return (this._adoptNodes(Y, Z), Z)
  }
  _err(Y, Z, K) {
    var J
    if (!this.onParseError) return
    let Q = (J = Y.location) !== null && J !== void 0 ? J : h9,
      V = {
        code: Z,
        startLine: Q.startLine,
        startCol: Q.startCol,
        startOffset: Q.startOffset,
        endLine: K ? Q.startLine : Q.endLine,
        endCol: K ? Q.startCol : Q.endCol,
        endOffset: K ? Q.startOffset : Q.endOffset,
      }
    this.onParseError(V)
  }
  onItemPush(Y, Z, K) {
    var J, Q
    if (
      ((Q = (J = this.treeAdapter).onItemPush) === null || Q === void 0 || Q.call(J, Y),
      K && this.openElements.stackTop > 0)
    )
      this._setContextModes(Y, Z)
  }
  onItemPop(Y, Z) {
    var K, J
    if (this.options.sourceCodeLocationInfo) this._setEndLocation(Y, this.currentToken)
    if (
      ((J = (K = this.treeAdapter).onItemPop) === null ||
        J === void 0 ||
        J.call(K, Y, this.openElements.current),
      Z)
    ) {
      let Q, V
      if (this.openElements.stackTop === 0 && this.fragmentContext)
        ((Q = this.fragmentContext), (V = this.fragmentContextID))
      else ({ current: Q, currentTagId: V } = this.openElements)
      this._setContextModes(Q, V)
    }
  }
  _setContextModes(Y, Z) {
    let K = Y === this.document || (Y && this.treeAdapter.getNamespaceURI(Y) === R.HTML)
    ;((this.currentNotInHTML = !K),
      (this.tokenizer.inForeignNode =
        !K && Y !== void 0 && Z !== void 0 && !this._isIntegrationPoint(Z, Y)))
  }
  _switchToTextParsing(Y, Z) {
    ;(this._insertElement(Y, R.HTML),
      (this.tokenizer.state = Z),
      (this.originalInsertionMode = this.insertionMode),
      (this.insertionMode = U.TEXT))
  }
  switchToPlaintextParsing() {
    ;((this.insertionMode = U.TEXT),
      (this.originalInsertionMode = U.IN_BODY),
      (this.tokenizer.state = i.PLAINTEXT))
  }
  _getAdjustedCurrentElement() {
    return this.openElements.stackTop === 0 && this.fragmentContext
      ? this.fragmentContext
      : this.openElements.current
  }
  _findFormInFragmentContext() {
    let Y = this.fragmentContext
    while (Y) {
      if (this.treeAdapter.getTagName(Y) === B.FORM) {
        this.formElement = Y
        break
      }
      Y = this.treeAdapter.getParentNode(Y)
    }
  }
  _initTokenizerForFragmentParsing() {
    if (!this.fragmentContext || this.treeAdapter.getNamespaceURI(this.fragmentContext) !== R.HTML)
      return
    switch (this.fragmentContextID) {
      case X.TITLE:
      case X.TEXTAREA: {
        this.tokenizer.state = i.RCDATA
        break
      }
      case X.STYLE:
      case X.XMP:
      case X.IFRAME:
      case X.NOEMBED:
      case X.NOFRAMES:
      case X.NOSCRIPT: {
        this.tokenizer.state = i.RAWTEXT
        break
      }
      case X.SCRIPT: {
        this.tokenizer.state = i.SCRIPT_DATA
        break
      }
      case X.PLAINTEXT: {
        this.tokenizer.state = i.PLAINTEXT
        break
      }
      default:
    }
  }
  _setDocumentType(Y) {
    let Z = Y.name || '',
      K = Y.publicId || '',
      J = Y.systemId || ''
    if ((this.treeAdapter.setDocumentType(this.document, Z, K, J), Y.location)) {
      let V = this.treeAdapter
        .getChildNodes(this.document)
        .find(z => this.treeAdapter.isDocumentTypeNode(z))
      if (V) this.treeAdapter.setNodeSourceCodeLocation(V, Y.location)
    }
  }
  _attachElementToTree(Y, Z) {
    if (this.options.sourceCodeLocationInfo) {
      let K = Z && { ...Z, startTag: Z }
      this.treeAdapter.setNodeSourceCodeLocation(Y, K)
    }
    if (this._shouldFosterParentOnInsertion()) this._fosterParentElement(Y)
    else {
      let K = this.openElements.currentTmplContentOrNode
      this.treeAdapter.appendChild(K !== null && K !== void 0 ? K : this.document, Y)
    }
  }
  _appendElement(Y, Z) {
    let K = this.treeAdapter.createElement(Y.tagName, Z, Y.attrs)
    this._attachElementToTree(K, Y.location)
  }
  _insertElement(Y, Z) {
    let K = this.treeAdapter.createElement(Y.tagName, Z, Y.attrs)
    ;(this._attachElementToTree(K, Y.location), this.openElements.push(K, Y.tagID))
  }
  _insertFakeElement(Y, Z) {
    let K = this.treeAdapter.createElement(Y, R.HTML, [])
    ;(this._attachElementToTree(K, null), this.openElements.push(K, Z))
  }
  _insertTemplate(Y) {
    let Z = this.treeAdapter.createElement(Y.tagName, R.HTML, Y.attrs),
      K = this.treeAdapter.createDocumentFragment()
    if (
      (this.treeAdapter.setTemplateContent(Z, K),
      this._attachElementToTree(Z, Y.location),
      this.openElements.push(Z, Y.tagID),
      this.options.sourceCodeLocationInfo)
    )
      this.treeAdapter.setNodeSourceCodeLocation(K, null)
  }
  _insertFakeRootElement() {
    let Y = this.treeAdapter.createElement(B.HTML, R.HTML, [])
    if (this.options.sourceCodeLocationInfo) this.treeAdapter.setNodeSourceCodeLocation(Y, null)
    ;(this.treeAdapter.appendChild(this.openElements.current, Y), this.openElements.push(Y, X.HTML))
  }
  _appendCommentNode(Y, Z) {
    let K = this.treeAdapter.createCommentNode(Y.data)
    if ((this.treeAdapter.appendChild(Z, K), this.options.sourceCodeLocationInfo))
      this.treeAdapter.setNodeSourceCodeLocation(K, Y.location)
  }
  _insertCharacters(Y) {
    let Z, K
    if (this._shouldFosterParentOnInsertion())
      if ((({ parent: Z, beforeElement: K } = this._findFosterParentingLocation()), K))
        this.treeAdapter.insertTextBefore(Z, Y.chars, K)
      else this.treeAdapter.insertText(Z, Y.chars)
    else ((Z = this.openElements.currentTmplContentOrNode), this.treeAdapter.insertText(Z, Y.chars))
    if (!Y.location) return
    let J = this.treeAdapter.getChildNodes(Z),
      Q = K ? J.lastIndexOf(K) : J.length,
      V = J[Q - 1]
    if (this.treeAdapter.getNodeSourceCodeLocation(V)) {
      let { endLine: F, endCol: q, endOffset: w } = Y.location
      this.treeAdapter.updateNodeSourceCodeLocation(V, { endLine: F, endCol: q, endOffset: w })
    } else if (this.options.sourceCodeLocationInfo)
      this.treeAdapter.setNodeSourceCodeLocation(V, Y.location)
  }
  _adoptNodes(Y, Z) {
    for (let K = this.treeAdapter.getFirstChild(Y); K; K = this.treeAdapter.getFirstChild(Y))
      (this.treeAdapter.detachNode(K), this.treeAdapter.appendChild(Z, K))
  }
  _setEndLocation(Y, Z) {
    if (this.treeAdapter.getNodeSourceCodeLocation(Y) && Z.location) {
      let K = Z.location,
        J = this.treeAdapter.getTagName(Y),
        Q =
          Z.type === h.END_TAG && J === Z.tagName
            ? { endTag: { ...K }, endLine: K.endLine, endCol: K.endCol, endOffset: K.endOffset }
            : { endLine: K.startLine, endCol: K.startCol, endOffset: K.startOffset }
      this.treeAdapter.updateNodeSourceCodeLocation(Y, Q)
    }
  }
  shouldProcessStartTagTokenInForeignContent(Y) {
    if (!this.currentNotInHTML) return !1
    let Z, K
    if (this.openElements.stackTop === 0 && this.fragmentContext)
      ((Z = this.fragmentContext), (K = this.fragmentContextID))
    else ({ current: Z, currentTagId: K } = this.openElements)
    if (
      Y.tagID === X.SVG &&
      this.treeAdapter.getTagName(Z) === B.ANNOTATION_XML &&
      this.treeAdapter.getNamespaceURI(Z) === R.MATHML
    )
      return !1
    return (
      this.tokenizer.inForeignNode ||
      ((Y.tagID === X.MGLYPH || Y.tagID === X.MALIGNMARK) &&
        K !== void 0 &&
        !this._isIntegrationPoint(K, Z, R.HTML))
    )
  }
  _processToken(Y) {
    switch (Y.type) {
      case h.CHARACTER: {
        this.onCharacter(Y)
        break
      }
      case h.NULL_CHARACTER: {
        this.onNullCharacter(Y)
        break
      }
      case h.COMMENT: {
        this.onComment(Y)
        break
      }
      case h.DOCTYPE: {
        this.onDoctype(Y)
        break
      }
      case h.START_TAG: {
        this._processStartTag(Y)
        break
      }
      case h.END_TAG: {
        this.onEndTag(Y)
        break
      }
      case h.EOF: {
        this.onEof(Y)
        break
      }
      case h.WHITESPACE_CHARACTER: {
        this.onWhitespaceCharacter(Y)
        break
      }
    }
  }
  _isIntegrationPoint(Y, Z, K) {
    let J = this.treeAdapter.getNamespaceURI(Z),
      Q = this.treeAdapter.getAttrList(Z)
    return v8(Y, J, Q, K)
  }
  _reconstructActiveFormattingElements() {
    let Y = this.activeFormattingElements.entries.length
    if (Y) {
      let Z = this.activeFormattingElements.entries.findIndex(
          J => J.type === X0.Marker || this.openElements.contains(J.element),
        ),
        K = Z === -1 ? Y - 1 : Z - 1
      for (let J = K; J >= 0; J--) {
        let Q = this.activeFormattingElements.entries[J]
        ;(this._insertElement(Q.token, this.treeAdapter.getNamespaceURI(Q.element)),
          (Q.element = this.openElements.current))
      }
    }
  }
  _closeTableCell() {
    ;(this.openElements.generateImpliedEndTags(),
      this.openElements.popUntilTableCellPopped(),
      this.activeFormattingElements.clearToLastMarker(),
      (this.insertionMode = U.IN_ROW))
  }
  _closePElement() {
    ;(this.openElements.generateImpliedEndTagsWithExclusion(X.P),
      this.openElements.popUntilTagNamePopped(X.P))
  }
  _resetInsertionMode() {
    for (let Y = this.openElements.stackTop; Y >= 0; Y--)
      switch (
        Y === 0 && this.fragmentContext ? this.fragmentContextID : this.openElements.tagIDs[Y]
      ) {
        case X.TR: {
          this.insertionMode = U.IN_ROW
          return
        }
        case X.TBODY:
        case X.THEAD:
        case X.TFOOT: {
          this.insertionMode = U.IN_TABLE_BODY
          return
        }
        case X.CAPTION: {
          this.insertionMode = U.IN_CAPTION
          return
        }
        case X.COLGROUP: {
          this.insertionMode = U.IN_COLUMN_GROUP
          return
        }
        case X.TABLE: {
          this.insertionMode = U.IN_TABLE
          return
        }
        case X.BODY: {
          this.insertionMode = U.IN_BODY
          return
        }
        case X.FRAMESET: {
          this.insertionMode = U.IN_FRAMESET
          return
        }
        case X.SELECT: {
          this._resetInsertionModeForSelect(Y)
          return
        }
        case X.TEMPLATE: {
          this.insertionMode = this.tmplInsertionModeStack[0]
          return
        }
        case X.HTML: {
          this.insertionMode = this.headElement ? U.AFTER_HEAD : U.BEFORE_HEAD
          return
        }
        case X.TD:
        case X.TH: {
          if (Y > 0) {
            this.insertionMode = U.IN_CELL
            return
          }
          break
        }
        case X.HEAD: {
          if (Y > 0) {
            this.insertionMode = U.IN_HEAD
            return
          }
          break
        }
      }
    this.insertionMode = U.IN_BODY
  }
  _resetInsertionModeForSelect(Y) {
    if (Y > 0)
      for (let Z = Y - 1; Z > 0; Z--) {
        let K = this.openElements.tagIDs[Z]
        if (K === X.TEMPLATE) break
        else if (K === X.TABLE) {
          this.insertionMode = U.IN_SELECT_IN_TABLE
          return
        }
      }
    this.insertionMode = U.IN_SELECT
  }
  _isElementCausesFosterParenting(Y) {
    return M8.has(Y)
  }
  _shouldFosterParentOnInsertion() {
    return (
      this.fosterParentingEnabled &&
      this.openElements.currentTagId !== void 0 &&
      this._isElementCausesFosterParenting(this.openElements.currentTagId)
    )
  }
  _findFosterParentingLocation() {
    for (let Y = this.openElements.stackTop; Y >= 0; Y--) {
      let Z = this.openElements.items[Y]
      switch (this.openElements.tagIDs[Y]) {
        case X.TEMPLATE: {
          if (this.treeAdapter.getNamespaceURI(Z) === R.HTML)
            return { parent: this.treeAdapter.getTemplateContent(Z), beforeElement: null }
          break
        }
        case X.TABLE: {
          let K = this.treeAdapter.getParentNode(Z)
          if (K) return { parent: K, beforeElement: Z }
          return { parent: this.openElements.items[Y - 1], beforeElement: null }
        }
        default:
      }
    }
    return { parent: this.openElements.items[0], beforeElement: null }
  }
  _fosterParentElement(Y) {
    let Z = this._findFosterParentingLocation()
    if (Z.beforeElement) this.treeAdapter.insertBefore(Z.parent, Y, Z.beforeElement)
    else this.treeAdapter.appendChild(Z.parent, Y)
  }
  _isSpecialElement(Y, Z) {
    let K = this.treeAdapter.getNamespaceURI(Y)
    return xY[K].has(Z)
  }
  onCharacter(Y) {
    if (((this.skipNextNewLine = !1), this.tokenizer.inForeignNode)) {
      XJ(this, Y)
      return
    }
    switch (this.insertionMode) {
      case U.INITIAL: {
        B1(this, Y)
        break
      }
      case U.BEFORE_HTML: {
        L1(this, Y)
        break
      }
      case U.BEFORE_HEAD: {
        j1(this, Y)
        break
      }
      case U.IN_HEAD: {
        R1(this, Y)
        break
      }
      case U.IN_HEAD_NO_SCRIPT: {
        P1(this, Y)
        break
      }
      case U.AFTER_HEAD: {
        v1(this, Y)
        break
      }
      case U.IN_BODY:
      case U.IN_CAPTION:
      case U.IN_CELL:
      case U.IN_TEMPLATE: {
        g8(this, Y)
        break
      }
      case U.TEXT:
      case U.IN_SELECT:
      case U.IN_SELECT_IN_TABLE: {
        this._insertCharacters(Y)
        break
      }
      case U.IN_TABLE:
      case U.IN_TABLE_BODY:
      case U.IN_ROW: {
        EY(this, Y)
        break
      }
      case U.IN_TABLE_TEXT: {
        $8(this, Y)
        break
      }
      case U.IN_COLUMN_GROUP: {
        U4(this, Y)
        break
      }
      case U.AFTER_BODY: {
        F4(this, Y)
        break
      }
      case U.AFTER_AFTER_BODY: {
        W4(this, Y)
        break
      }
      default:
    }
  }
  onNullCharacter(Y) {
    if (((this.skipNextNewLine = !1), this.tokenizer.inForeignNode)) {
      JJ(this, Y)
      return
    }
    switch (this.insertionMode) {
      case U.INITIAL: {
        B1(this, Y)
        break
      }
      case U.BEFORE_HTML: {
        L1(this, Y)
        break
      }
      case U.BEFORE_HEAD: {
        j1(this, Y)
        break
      }
      case U.IN_HEAD: {
        R1(this, Y)
        break
      }
      case U.IN_HEAD_NO_SCRIPT: {
        P1(this, Y)
        break
      }
      case U.AFTER_HEAD: {
        v1(this, Y)
        break
      }
      case U.TEXT: {
        this._insertCharacters(Y)
        break
      }
      case U.IN_TABLE:
      case U.IN_TABLE_BODY:
      case U.IN_ROW: {
        EY(this, Y)
        break
      }
      case U.IN_COLUMN_GROUP: {
        U4(this, Y)
        break
      }
      case U.AFTER_BODY: {
        F4(this, Y)
        break
      }
      case U.AFTER_AFTER_BODY: {
        W4(this, Y)
        break
      }
      default:
    }
  }
  onComment(Y) {
    if (((this.skipNextNewLine = !1), this.currentNotInHTML)) {
      uY(this, Y)
      return
    }
    switch (this.insertionMode) {
      case U.INITIAL:
      case U.BEFORE_HTML:
      case U.BEFORE_HEAD:
      case U.IN_HEAD:
      case U.IN_HEAD_NO_SCRIPT:
      case U.AFTER_HEAD:
      case U.IN_BODY:
      case U.IN_TABLE:
      case U.IN_CAPTION:
      case U.IN_COLUMN_GROUP:
      case U.IN_TABLE_BODY:
      case U.IN_ROW:
      case U.IN_CELL:
      case U.IN_SELECT:
      case U.IN_SELECT_IN_TABLE:
      case U.IN_TEMPLATE:
      case U.IN_FRAMESET:
      case U.AFTER_FRAMESET: {
        uY(this, Y)
        break
      }
      case U.IN_TABLE_TEXT: {
        w1(this, Y)
        break
      }
      case U.AFTER_BODY: {
        I9(this, Y)
        break
      }
      case U.AFTER_AFTER_BODY:
      case U.AFTER_AFTER_FRAMESET: {
        S9(this, Y)
        break
      }
      default:
    }
  }
  onDoctype(Y) {
    switch (((this.skipNextNewLine = !1), this.insertionMode)) {
      case U.INITIAL: {
        k9(this, Y)
        break
      }
      case U.BEFORE_HEAD:
      case U.IN_HEAD:
      case U.IN_HEAD_NO_SCRIPT:
      case U.AFTER_HEAD: {
        this._err(Y, L.misplacedDoctype)
        break
      }
      case U.IN_TABLE_TEXT: {
        w1(this, Y)
        break
      }
      default:
    }
  }
  onStartTag(Y) {
    if (
      ((this.skipNextNewLine = !1),
      (this.currentToken = Y),
      this._processStartTag(Y),
      Y.selfClosing && !Y.ackSelfClosing)
    )
      this._err(Y, L.nonVoidHtmlElementStartTagWithTrailingSolidus)
  }
  _processStartTag(Y) {
    if (this.shouldProcessStartTagTokenInForeignContent(Y)) QJ(this, Y)
    else this._startTagOutsideForeignContent(Y)
  }
  _startTagOutsideForeignContent(Y) {
    switch (this.insertionMode) {
      case U.INITIAL: {
        B1(this, Y)
        break
      }
      case U.BEFORE_HTML: {
        _9(this, Y)
        break
      }
      case U.BEFORE_HEAD: {
        T9(this, Y)
        break
      }
      case U.IN_HEAD: {
        Q0(this, Y)
        break
      }
      case U.IN_HEAD_NO_SCRIPT: {
        c9(this, Y)
        break
      }
      case U.AFTER_HEAD: {
        r9(this, Y)
        break
      }
      case U.IN_BODY: {
        c(this, Y)
        break
      }
      case U.IN_TABLE: {
        o0(this, Y)
        break
      }
      case U.IN_TABLE_TEXT: {
        w1(this, Y)
        break
      }
      case U.IN_CAPTION: {
        mK(this, Y)
        break
      }
      case U.IN_COLUMN_GROUP: {
        _Y(this, Y)
        break
      }
      case U.IN_TABLE_BODY: {
        w4(this, Y)
        break
      }
      case U.IN_ROW: {
        L4(this, Y)
        break
      }
      case U.IN_CELL: {
        dK(this, Y)
        break
      }
      case U.IN_SELECT: {
        I8(this, Y)
        break
      }
      case U.IN_SELECT_IN_TABLE: {
        lK(this, Y)
        break
      }
      case U.IN_TEMPLATE: {
        pK(this, Y)
        break
      }
      case U.AFTER_BODY: {
        nK(this, Y)
        break
      }
      case U.IN_FRAMESET: {
        oK(this, Y)
        break
      }
      case U.AFTER_FRAMESET: {
        eK(this, Y)
        break
      }
      case U.AFTER_AFTER_BODY: {
        ZJ(this, Y)
        break
      }
      case U.AFTER_AFTER_FRAMESET: {
        KJ(this, Y)
        break
      }
      default:
    }
  }
  onEndTag(Y) {
    if (((this.skipNextNewLine = !1), (this.currentToken = Y), this.currentNotInHTML)) VJ(this, Y)
    else this._endTagOutsideForeignContent(Y)
  }
  _endTagOutsideForeignContent(Y) {
    switch (this.insertionMode) {
      case U.INITIAL: {
        B1(this, Y)
        break
      }
      case U.BEFORE_HTML: {
        A9(this, Y)
        break
      }
      case U.BEFORE_HEAD: {
        m9(this, Y)
        break
      }
      case U.IN_HEAD: {
        i9(this, Y)
        break
      }
      case U.IN_HEAD_NO_SCRIPT: {
        d9(this, Y)
        break
      }
      case U.AFTER_HEAD: {
        l9(this, Y)
        break
      }
      case U.IN_BODY: {
        B4(this, Y)
        break
      }
      case U.TEXT: {
        GK(this, Y)
        break
      }
      case U.IN_TABLE: {
        O1(this, Y)
        break
      }
      case U.IN_TABLE_TEXT: {
        w1(this, Y)
        break
      }
      case U.IN_CAPTION: {
        iK(this, Y)
        break
      }
      case U.IN_COLUMN_GROUP: {
        cK(this, Y)
        break
      }
      case U.IN_TABLE_BODY: {
        IY(this, Y)
        break
      }
      case U.IN_ROW: {
        u8(this, Y)
        break
      }
      case U.IN_CELL: {
        rK(this, Y)
        break
      }
      case U.IN_SELECT: {
        S8(this, Y)
        break
      }
      case U.IN_SELECT_IN_TABLE: {
        sK(this, Y)
        break
      }
      case U.IN_TEMPLATE: {
        aK(this, Y)
        break
      }
      case U.AFTER_BODY: {
        _8(this, Y)
        break
      }
      case U.IN_FRAMESET: {
        tK(this, Y)
        break
      }
      case U.AFTER_FRAMESET: {
        YJ(this, Y)
        break
      }
      case U.AFTER_AFTER_BODY: {
        W4(this, Y)
        break
      }
      default:
    }
  }
  onEof(Y) {
    switch (this.insertionMode) {
      case U.INITIAL: {
        B1(this, Y)
        break
      }
      case U.BEFORE_HTML: {
        L1(this, Y)
        break
      }
      case U.BEFORE_HEAD: {
        j1(this, Y)
        break
      }
      case U.IN_HEAD: {
        R1(this, Y)
        break
      }
      case U.IN_HEAD_NO_SCRIPT: {
        P1(this, Y)
        break
      }
      case U.AFTER_HEAD: {
        v1(this, Y)
        break
      }
      case U.IN_BODY:
      case U.IN_TABLE:
      case U.IN_CAPTION:
      case U.IN_COLUMN_GROUP:
      case U.IN_TABLE_BODY:
      case U.IN_ROW:
      case U.IN_CELL:
      case U.IN_SELECT:
      case U.IN_SELECT_IN_TABLE: {
        D8(this, Y)
        break
      }
      case U.TEXT: {
        $K(this, Y)
        break
      }
      case U.IN_TABLE_TEXT: {
        w1(this, Y)
        break
      }
      case U.IN_TEMPLATE: {
        k8(this, Y)
        break
      }
      case U.AFTER_BODY:
      case U.IN_FRAMESET:
      case U.AFTER_FRAMESET:
      case U.AFTER_AFTER_BODY:
      case U.AFTER_AFTER_FRAMESET: {
        kY(this, Y)
        break
      }
      default:
    }
  }
  onWhitespaceCharacter(Y) {
    if (this.skipNextNewLine) {
      if (((this.skipNextNewLine = !1), Y.chars.charCodeAt(0) === H.LINE_FEED)) {
        if (Y.chars.length === 1) return
        Y.chars = Y.chars.substr(1)
      }
    }
    if (this.tokenizer.inForeignNode) {
      this._insertCharacters(Y)
      return
    }
    switch (this.insertionMode) {
      case U.IN_HEAD:
      case U.IN_HEAD_NO_SCRIPT:
      case U.AFTER_HEAD:
      case U.TEXT:
      case U.IN_COLUMN_GROUP:
      case U.IN_SELECT:
      case U.IN_SELECT_IN_TABLE:
      case U.IN_FRAMESET:
      case U.AFTER_FRAMESET: {
        this._insertCharacters(Y)
        break
      }
      case U.IN_BODY:
      case U.IN_CAPTION:
      case U.IN_CELL:
      case U.IN_TEMPLATE:
      case U.AFTER_BODY:
      case U.AFTER_AFTER_BODY:
      case U.AFTER_AFTER_FRAMESET: {
        N8(this, Y)
        break
      }
      case U.IN_TABLE:
      case U.IN_TABLE_BODY:
      case U.IN_ROW: {
        EY(this, Y)
        break
      }
      case U.IN_TABLE_TEXT: {
        G8(this, Y)
        break
      }
      default:
    }
  }
}
function C9(Y, Z) {
  let K = Y.activeFormattingElements.getElementEntryInScopeWithTagName(Z.tagName)
  if (K) {
    if (!Y.openElements.contains(K.element)) (Y.activeFormattingElements.removeEntry(K), (K = null))
    else if (!Y.openElements.hasInScope(Z.tagID)) K = null
  } else C8(Y, Z)
  return K
}
function D9(Y, Z) {
  let K = null,
    J = Y.openElements.stackTop
  for (; J >= 0; J--) {
    let Q = Y.openElements.items[J]
    if (Q === Z.element) break
    if (Y._isSpecialElement(Q, Y.openElements.tagIDs[J])) K = Q
  }
  if (!K)
    (Y.openElements.shortenToLength(Math.max(J, 0)), Y.activeFormattingElements.removeEntry(Z))
  return K
}
function G9(Y, Z, K) {
  let J = Z,
    Q = Y.openElements.getCommonAncestor(Z)
  for (let V = 0, z = Q; z !== K; V++, z = Q) {
    Q = Y.openElements.getCommonAncestor(z)
    let F = Y.activeFormattingElements.getElementEntry(z),
      q = F && V >= x9
    if (!F || q) {
      if (q) Y.activeFormattingElements.removeEntry(F)
      Y.openElements.remove(z)
    } else {
      if (((z = $9(Y, F)), J === Z)) Y.activeFormattingElements.bookmark = F
      ;(Y.treeAdapter.detachNode(J), Y.treeAdapter.appendChild(z, J), (J = z))
    }
  }
  return J
}
function $9(Y, Z) {
  let K = Y.treeAdapter.getNamespaceURI(Z.element),
    J = Y.treeAdapter.createElement(Z.token.tagName, K, Z.token.attrs)
  return (Y.openElements.replace(Z.element, J), (Z.element = J), J)
}
function E9(Y, Z, K) {
  let J = Y.treeAdapter.getTagName(Z),
    Q = y0(J)
  if (Y._isElementCausesFosterParenting(Q)) Y._fosterParentElement(K)
  else {
    let V = Y.treeAdapter.getNamespaceURI(Z)
    if (Q === X.TEMPLATE && V === R.HTML) Z = Y.treeAdapter.getTemplateContent(Z)
    Y.treeAdapter.appendChild(Z, K)
  }
}
function u9(Y, Z, K) {
  let J = Y.treeAdapter.getNamespaceURI(K.element),
    { token: Q } = K,
    V = Y.treeAdapter.createElement(Q.tagName, J, Q.attrs)
  ;(Y._adoptNodes(Z, V),
    Y.treeAdapter.appendChild(Z, V),
    Y.activeFormattingElements.insertElementAfterBookmark(V, Q),
    Y.activeFormattingElements.removeEntry(K),
    Y.openElements.remove(K.element),
    Y.openElements.insertAfter(Z, V, Q.tagID))
}
function SY(Y, Z) {
  for (let K = 0; K < g9; K++) {
    let J = C9(Y, Z)
    if (!J) break
    let Q = D9(Y, J)
    if (!Q) break
    Y.activeFormattingElements.bookmark = J
    let V = G9(Y, Q, J.element),
      z = Y.openElements.getCommonAncestor(J.element)
    if ((Y.treeAdapter.detachNode(V), z)) E9(Y, z, V)
    u9(Y, Q, J)
  }
}
function uY(Y, Z) {
  Y._appendCommentNode(Z, Y.openElements.currentTmplContentOrNode)
}
function I9(Y, Z) {
  Y._appendCommentNode(Z, Y.openElements.items[0])
}
function S9(Y, Z) {
  Y._appendCommentNode(Z, Y.document)
}
function kY(Y, Z) {
  if (((Y.stopped = !0), Z.location)) {
    let K = Y.fragmentContext ? 0 : 2
    for (let J = Y.openElements.stackTop; J >= K; J--) Y._setEndLocation(Y.openElements.items[J], Z)
    if (!Y.fragmentContext && Y.openElements.stackTop >= 0) {
      let J = Y.openElements.items[0],
        Q = Y.treeAdapter.getNodeSourceCodeLocation(J)
      if (Q && !Q.endTag) {
        if ((Y._setEndLocation(J, Z), Y.openElements.stackTop >= 1)) {
          let V = Y.openElements.items[1],
            z = Y.treeAdapter.getNodeSourceCodeLocation(V)
          if (z && !z.endTag) Y._setEndLocation(V, Z)
        }
      }
    }
  }
}
function k9(Y, Z) {
  Y._setDocumentType(Z)
  let K = Z.forceQuirks ? m.QUIRKS : L8(Z)
  if (!w8(Z)) Y._err(Z, L.nonConformingDoctype)
  ;(Y.treeAdapter.setDocumentMode(Y.document, K), (Y.insertionMode = U.BEFORE_HTML))
}
function B1(Y, Z) {
  ;(Y._err(Z, L.missingDoctype, !0),
    Y.treeAdapter.setDocumentMode(Y.document, m.QUIRKS),
    (Y.insertionMode = U.BEFORE_HTML),
    Y._processToken(Z))
}
function _9(Y, Z) {
  if (Z.tagID === X.HTML) (Y._insertElement(Z, R.HTML), (Y.insertionMode = U.BEFORE_HEAD))
  else L1(Y, Z)
}
function A9(Y, Z) {
  let K = Z.tagID
  if (K === X.HTML || K === X.HEAD || K === X.BODY || K === X.BR) L1(Y, Z)
}
function L1(Y, Z) {
  ;(Y._insertFakeRootElement(), (Y.insertionMode = U.BEFORE_HEAD), Y._processToken(Z))
}
function T9(Y, Z) {
  switch (Z.tagID) {
    case X.HTML: {
      c(Y, Z)
      break
    }
    case X.HEAD: {
      ;(Y._insertElement(Z, R.HTML),
        (Y.headElement = Y.openElements.current),
        (Y.insertionMode = U.IN_HEAD))
      break
    }
    default:
      j1(Y, Z)
  }
}
function m9(Y, Z) {
  let K = Z.tagID
  if (K === X.HEAD || K === X.BODY || K === X.HTML || K === X.BR) j1(Y, Z)
  else Y._err(Z, L.endTagWithoutMatchingOpenElement)
}
function j1(Y, Z) {
  ;(Y._insertFakeElement(B.HEAD, X.HEAD),
    (Y.headElement = Y.openElements.current),
    (Y.insertionMode = U.IN_HEAD),
    Y._processToken(Z))
}
function Q0(Y, Z) {
  switch (Z.tagID) {
    case X.HTML: {
      c(Y, Z)
      break
    }
    case X.BASE:
    case X.BASEFONT:
    case X.BGSOUND:
    case X.LINK:
    case X.META: {
      ;(Y._appendElement(Z, R.HTML), (Z.ackSelfClosing = !0))
      break
    }
    case X.TITLE: {
      Y._switchToTextParsing(Z, i.RCDATA)
      break
    }
    case X.NOSCRIPT: {
      if (Y.options.scriptingEnabled) Y._switchToTextParsing(Z, i.RAWTEXT)
      else (Y._insertElement(Z, R.HTML), (Y.insertionMode = U.IN_HEAD_NO_SCRIPT))
      break
    }
    case X.NOFRAMES:
    case X.STYLE: {
      Y._switchToTextParsing(Z, i.RAWTEXT)
      break
    }
    case X.SCRIPT: {
      Y._switchToTextParsing(Z, i.SCRIPT_DATA)
      break
    }
    case X.TEMPLATE: {
      ;(Y._insertTemplate(Z),
        Y.activeFormattingElements.insertMarker(),
        (Y.framesetOk = !1),
        (Y.insertionMode = U.IN_TEMPLATE),
        Y.tmplInsertionModeStack.unshift(U.IN_TEMPLATE))
      break
    }
    case X.HEAD: {
      Y._err(Z, L.misplacedStartTagForHeadElement)
      break
    }
    default:
      R1(Y, Z)
  }
}
function i9(Y, Z) {
  switch (Z.tagID) {
    case X.HEAD: {
      ;(Y.openElements.pop(), (Y.insertionMode = U.AFTER_HEAD))
      break
    }
    case X.BODY:
    case X.BR:
    case X.HTML: {
      R1(Y, Z)
      break
    }
    case X.TEMPLATE: {
      u0(Y, Z)
      break
    }
    default:
      Y._err(Z, L.endTagWithoutMatchingOpenElement)
  }
}
function u0(Y, Z) {
  if (Y.openElements.tmplCount > 0) {
    if (
      (Y.openElements.generateImpliedEndTagsThoroughly(),
      Y.openElements.currentTagId !== X.TEMPLATE)
    )
      Y._err(Z, L.closingOfElementWithOpenChildElements)
    ;(Y.openElements.popUntilTagNamePopped(X.TEMPLATE),
      Y.activeFormattingElements.clearToLastMarker(),
      Y.tmplInsertionModeStack.shift(),
      Y._resetInsertionMode())
  } else Y._err(Z, L.endTagWithoutMatchingOpenElement)
}
function R1(Y, Z) {
  ;(Y.openElements.pop(), (Y.insertionMode = U.AFTER_HEAD), Y._processToken(Z))
}
function c9(Y, Z) {
  switch (Z.tagID) {
    case X.HTML: {
      c(Y, Z)
      break
    }
    case X.BASEFONT:
    case X.BGSOUND:
    case X.HEAD:
    case X.LINK:
    case X.META:
    case X.NOFRAMES:
    case X.STYLE: {
      Q0(Y, Z)
      break
    }
    case X.NOSCRIPT: {
      Y._err(Z, L.nestedNoscriptInHead)
      break
    }
    default:
      P1(Y, Z)
  }
}
function d9(Y, Z) {
  switch (Z.tagID) {
    case X.NOSCRIPT: {
      ;(Y.openElements.pop(), (Y.insertionMode = U.IN_HEAD))
      break
    }
    case X.BR: {
      P1(Y, Z)
      break
    }
    default:
      Y._err(Z, L.endTagWithoutMatchingOpenElement)
  }
}
function P1(Y, Z) {
  let K = Z.type === h.EOF ? L.openElementsLeftAfterEof : L.disallowedContentInNoscriptInHead
  ;(Y._err(Z, K), Y.openElements.pop(), (Y.insertionMode = U.IN_HEAD), Y._processToken(Z))
}
function r9(Y, Z) {
  switch (Z.tagID) {
    case X.HTML: {
      c(Y, Z)
      break
    }
    case X.BODY: {
      ;(Y._insertElement(Z, R.HTML), (Y.framesetOk = !1), (Y.insertionMode = U.IN_BODY))
      break
    }
    case X.FRAMESET: {
      ;(Y._insertElement(Z, R.HTML), (Y.insertionMode = U.IN_FRAMESET))
      break
    }
    case X.BASE:
    case X.BASEFONT:
    case X.BGSOUND:
    case X.LINK:
    case X.META:
    case X.NOFRAMES:
    case X.SCRIPT:
    case X.STYLE:
    case X.TEMPLATE:
    case X.TITLE: {
      ;(Y._err(Z, L.abandonedHeadElementChild),
        Y.openElements.push(Y.headElement, X.HEAD),
        Q0(Y, Z),
        Y.openElements.remove(Y.headElement))
      break
    }
    case X.HEAD: {
      Y._err(Z, L.misplacedStartTagForHeadElement)
      break
    }
    default:
      v1(Y, Z)
  }
}
function l9(Y, Z) {
  switch (Z.tagID) {
    case X.BODY:
    case X.HTML:
    case X.BR: {
      v1(Y, Z)
      break
    }
    case X.TEMPLATE: {
      u0(Y, Z)
      break
    }
    default:
      Y._err(Z, L.endTagWithoutMatchingOpenElement)
  }
}
function v1(Y, Z) {
  ;(Y._insertFakeElement(B.BODY, X.BODY), (Y.insertionMode = U.IN_BODY), q4(Y, Z))
}
function q4(Y, Z) {
  switch (Z.type) {
    case h.CHARACTER: {
      g8(Y, Z)
      break
    }
    case h.WHITESPACE_CHARACTER: {
      N8(Y, Z)
      break
    }
    case h.COMMENT: {
      uY(Y, Z)
      break
    }
    case h.START_TAG: {
      c(Y, Z)
      break
    }
    case h.END_TAG: {
      B4(Y, Z)
      break
    }
    case h.EOF: {
      D8(Y, Z)
      break
    }
    default:
  }
}
function N8(Y, Z) {
  ;(Y._reconstructActiveFormattingElements(), Y._insertCharacters(Z))
}
function g8(Y, Z) {
  ;(Y._reconstructActiveFormattingElements(), Y._insertCharacters(Z), (Y.framesetOk = !1))
}
function s9(Y, Z) {
  if (Y.openElements.tmplCount === 0)
    Y.treeAdapter.adoptAttributes(Y.openElements.items[0], Z.attrs)
}
function p9(Y, Z) {
  let K = Y.openElements.tryPeekProperlyNestedBodyElement()
  if (K && Y.openElements.tmplCount === 0)
    ((Y.framesetOk = !1), Y.treeAdapter.adoptAttributes(K, Z.attrs))
}
function a9(Y, Z) {
  let K = Y.openElements.tryPeekProperlyNestedBodyElement()
  if (Y.framesetOk && K)
    (Y.treeAdapter.detachNode(K),
      Y.openElements.popAllUpToHtmlElement(),
      Y._insertElement(Z, R.HTML),
      (Y.insertionMode = U.IN_FRAMESET))
}
function n9(Y, Z) {
  if (Y.openElements.hasInButtonScope(X.P)) Y._closePElement()
  Y._insertElement(Z, R.HTML)
}
function o9(Y, Z) {
  if (Y.openElements.hasInButtonScope(X.P)) Y._closePElement()
  if (Y.openElements.currentTagId !== void 0 && n0.has(Y.openElements.currentTagId))
    Y.openElements.pop()
  Y._insertElement(Z, R.HTML)
}
function t9(Y, Z) {
  if (Y.openElements.hasInButtonScope(X.P)) Y._closePElement()
  ;(Y._insertElement(Z, R.HTML), (Y.skipNextNewLine = !0), (Y.framesetOk = !1))
}
function e9(Y, Z) {
  let K = Y.openElements.tmplCount > 0
  if (!Y.formElement || K) {
    if (Y.openElements.hasInButtonScope(X.P)) Y._closePElement()
    if ((Y._insertElement(Z, R.HTML), !K)) Y.formElement = Y.openElements.current
  }
}
function YK(Y, Z) {
  Y.framesetOk = !1
  let K = Z.tagID
  for (let J = Y.openElements.stackTop; J >= 0; J--) {
    let Q = Y.openElements.tagIDs[J]
    if ((K === X.LI && Q === X.LI) || ((K === X.DD || K === X.DT) && (Q === X.DD || Q === X.DT))) {
      ;(Y.openElements.generateImpliedEndTagsWithExclusion(Q),
        Y.openElements.popUntilTagNamePopped(Q))
      break
    }
    if (
      Q !== X.ADDRESS &&
      Q !== X.DIV &&
      Q !== X.P &&
      Y._isSpecialElement(Y.openElements.items[J], Q)
    )
      break
  }
  if (Y.openElements.hasInButtonScope(X.P)) Y._closePElement()
  Y._insertElement(Z, R.HTML)
}
function ZK(Y, Z) {
  if (Y.openElements.hasInButtonScope(X.P)) Y._closePElement()
  ;(Y._insertElement(Z, R.HTML), (Y.tokenizer.state = i.PLAINTEXT))
}
function KK(Y, Z) {
  if (Y.openElements.hasInScope(X.BUTTON))
    (Y.openElements.generateImpliedEndTags(), Y.openElements.popUntilTagNamePopped(X.BUTTON))
  ;(Y._reconstructActiveFormattingElements(), Y._insertElement(Z, R.HTML), (Y.framesetOk = !1))
}
function JK(Y, Z) {
  let K = Y.activeFormattingElements.getElementEntryInScopeWithTagName(B.A)
  if (K) (SY(Y, Z), Y.openElements.remove(K.element), Y.activeFormattingElements.removeEntry(K))
  ;(Y._reconstructActiveFormattingElements(),
    Y._insertElement(Z, R.HTML),
    Y.activeFormattingElements.pushElement(Y.openElements.current, Z))
}
function XK(Y, Z) {
  ;(Y._reconstructActiveFormattingElements(),
    Y._insertElement(Z, R.HTML),
    Y.activeFormattingElements.pushElement(Y.openElements.current, Z))
}
function QK(Y, Z) {
  if ((Y._reconstructActiveFormattingElements(), Y.openElements.hasInScope(X.NOBR)))
    (SY(Y, Z), Y._reconstructActiveFormattingElements())
  ;(Y._insertElement(Z, R.HTML), Y.activeFormattingElements.pushElement(Y.openElements.current, Z))
}
function VK(Y, Z) {
  ;(Y._reconstructActiveFormattingElements(),
    Y._insertElement(Z, R.HTML),
    Y.activeFormattingElements.insertMarker(),
    (Y.framesetOk = !1))
}
function zK(Y, Z) {
  if (
    Y.treeAdapter.getDocumentMode(Y.document) !== m.QUIRKS &&
    Y.openElements.hasInButtonScope(X.P)
  )
    Y._closePElement()
  ;(Y._insertElement(Z, R.HTML), (Y.framesetOk = !1), (Y.insertionMode = U.IN_TABLE))
}
function x8(Y, Z) {
  ;(Y._reconstructActiveFormattingElements(),
    Y._appendElement(Z, R.HTML),
    (Y.framesetOk = !1),
    (Z.ackSelfClosing = !0))
}
function h8(Y) {
  let Z = J4(Y, H0.TYPE)
  return Z != null && Z.toLowerCase() === N9
}
function HK(Y, Z) {
  if ((Y._reconstructActiveFormattingElements(), Y._appendElement(Z, R.HTML), !h8(Z)))
    Y.framesetOk = !1
  Z.ackSelfClosing = !0
}
function WK(Y, Z) {
  ;(Y._appendElement(Z, R.HTML), (Z.ackSelfClosing = !0))
}
function UK(Y, Z) {
  if (Y.openElements.hasInButtonScope(X.P)) Y._closePElement()
  ;(Y._appendElement(Z, R.HTML), (Y.framesetOk = !1), (Z.ackSelfClosing = !0))
}
function FK(Y, Z) {
  ;((Z.tagName = B.IMG), (Z.tagID = X.IMG), x8(Y, Z))
}
function qK(Y, Z) {
  ;(Y._insertElement(Z, R.HTML),
    (Y.skipNextNewLine = !0),
    (Y.tokenizer.state = i.RCDATA),
    (Y.originalInsertionMode = Y.insertionMode),
    (Y.framesetOk = !1),
    (Y.insertionMode = U.TEXT))
}
function BK(Y, Z) {
  if (Y.openElements.hasInButtonScope(X.P)) Y._closePElement()
  ;(Y._reconstructActiveFormattingElements(),
    (Y.framesetOk = !1),
    Y._switchToTextParsing(Z, i.RAWTEXT))
}
function wK(Y, Z) {
  ;((Y.framesetOk = !1), Y._switchToTextParsing(Z, i.RAWTEXT))
}
function f8(Y, Z) {
  Y._switchToTextParsing(Z, i.RAWTEXT)
}
function LK(Y, Z) {
  ;(Y._reconstructActiveFormattingElements(),
    Y._insertElement(Z, R.HTML),
    (Y.framesetOk = !1),
    (Y.insertionMode =
      Y.insertionMode === U.IN_TABLE ||
      Y.insertionMode === U.IN_CAPTION ||
      Y.insertionMode === U.IN_TABLE_BODY ||
      Y.insertionMode === U.IN_ROW ||
      Y.insertionMode === U.IN_CELL
        ? U.IN_SELECT_IN_TABLE
        : U.IN_SELECT))
}
function jK(Y, Z) {
  if (Y.openElements.currentTagId === X.OPTION) Y.openElements.pop()
  ;(Y._reconstructActiveFormattingElements(), Y._insertElement(Z, R.HTML))
}
function RK(Y, Z) {
  if (Y.openElements.hasInScope(X.RUBY)) Y.openElements.generateImpliedEndTags()
  Y._insertElement(Z, R.HTML)
}
function PK(Y, Z) {
  if (Y.openElements.hasInScope(X.RUBY)) Y.openElements.generateImpliedEndTagsWithExclusion(X.RTC)
  Y._insertElement(Z, R.HTML)
}
function vK(Y, Z) {
  if ((Y._reconstructActiveFormattingElements(), GY(Z), H4(Z), Z.selfClosing))
    Y._appendElement(Z, R.MATHML)
  else Y._insertElement(Z, R.MATHML)
  Z.ackSelfClosing = !0
}
function OK(Y, Z) {
  if ((Y._reconstructActiveFormattingElements(), $Y(Z), H4(Z), Z.selfClosing))
    Y._appendElement(Z, R.SVG)
  else Y._insertElement(Z, R.SVG)
  Z.ackSelfClosing = !0
}
function y8(Y, Z) {
  ;(Y._reconstructActiveFormattingElements(), Y._insertElement(Z, R.HTML))
}
function c(Y, Z) {
  switch (Z.tagID) {
    case X.I:
    case X.S:
    case X.B:
    case X.U:
    case X.EM:
    case X.TT:
    case X.BIG:
    case X.CODE:
    case X.FONT:
    case X.SMALL:
    case X.STRIKE:
    case X.STRONG: {
      XK(Y, Z)
      break
    }
    case X.A: {
      JK(Y, Z)
      break
    }
    case X.H1:
    case X.H2:
    case X.H3:
    case X.H4:
    case X.H5:
    case X.H6: {
      o9(Y, Z)
      break
    }
    case X.P:
    case X.DL:
    case X.OL:
    case X.UL:
    case X.DIV:
    case X.DIR:
    case X.NAV:
    case X.MAIN:
    case X.MENU:
    case X.ASIDE:
    case X.CENTER:
    case X.FIGURE:
    case X.FOOTER:
    case X.HEADER:
    case X.HGROUP:
    case X.DIALOG:
    case X.DETAILS:
    case X.ADDRESS:
    case X.ARTICLE:
    case X.SEARCH:
    case X.SECTION:
    case X.SUMMARY:
    case X.FIELDSET:
    case X.BLOCKQUOTE:
    case X.FIGCAPTION: {
      n9(Y, Z)
      break
    }
    case X.LI:
    case X.DD:
    case X.DT: {
      YK(Y, Z)
      break
    }
    case X.BR:
    case X.IMG:
    case X.WBR:
    case X.AREA:
    case X.EMBED:
    case X.KEYGEN: {
      x8(Y, Z)
      break
    }
    case X.HR: {
      UK(Y, Z)
      break
    }
    case X.RB:
    case X.RTC: {
      RK(Y, Z)
      break
    }
    case X.RT:
    case X.RP: {
      PK(Y, Z)
      break
    }
    case X.PRE:
    case X.LISTING: {
      t9(Y, Z)
      break
    }
    case X.XMP: {
      BK(Y, Z)
      break
    }
    case X.SVG: {
      OK(Y, Z)
      break
    }
    case X.HTML: {
      s9(Y, Z)
      break
    }
    case X.BASE:
    case X.LINK:
    case X.META:
    case X.STYLE:
    case X.TITLE:
    case X.SCRIPT:
    case X.BGSOUND:
    case X.BASEFONT:
    case X.TEMPLATE: {
      Q0(Y, Z)
      break
    }
    case X.BODY: {
      p9(Y, Z)
      break
    }
    case X.FORM: {
      e9(Y, Z)
      break
    }
    case X.NOBR: {
      QK(Y, Z)
      break
    }
    case X.MATH: {
      vK(Y, Z)
      break
    }
    case X.TABLE: {
      zK(Y, Z)
      break
    }
    case X.INPUT: {
      HK(Y, Z)
      break
    }
    case X.PARAM:
    case X.TRACK:
    case X.SOURCE: {
      WK(Y, Z)
      break
    }
    case X.IMAGE: {
      FK(Y, Z)
      break
    }
    case X.BUTTON: {
      KK(Y, Z)
      break
    }
    case X.APPLET:
    case X.OBJECT:
    case X.MARQUEE: {
      VK(Y, Z)
      break
    }
    case X.IFRAME: {
      wK(Y, Z)
      break
    }
    case X.SELECT: {
      LK(Y, Z)
      break
    }
    case X.OPTION:
    case X.OPTGROUP: {
      jK(Y, Z)
      break
    }
    case X.NOEMBED:
    case X.NOFRAMES: {
      f8(Y, Z)
      break
    }
    case X.FRAMESET: {
      a9(Y, Z)
      break
    }
    case X.TEXTAREA: {
      qK(Y, Z)
      break
    }
    case X.NOSCRIPT: {
      if (Y.options.scriptingEnabled) f8(Y, Z)
      else y8(Y, Z)
      break
    }
    case X.PLAINTEXT: {
      ZK(Y, Z)
      break
    }
    case X.COL:
    case X.TH:
    case X.TD:
    case X.TR:
    case X.HEAD:
    case X.FRAME:
    case X.TBODY:
    case X.TFOOT:
    case X.THEAD:
    case X.CAPTION:
    case X.COLGROUP:
      break
    default:
      y8(Y, Z)
  }
}
function bK(Y, Z) {
  if (Y.openElements.hasInScope(X.BODY)) {
    if (((Y.insertionMode = U.AFTER_BODY), Y.options.sourceCodeLocationInfo)) {
      let K = Y.openElements.tryPeekProperlyNestedBodyElement()
      if (K) Y._setEndLocation(K, Z)
    }
  }
}
function fK(Y, Z) {
  if (Y.openElements.hasInScope(X.BODY)) ((Y.insertionMode = U.AFTER_BODY), _8(Y, Z))
}
function yK(Y, Z) {
  let K = Z.tagID
  if (Y.openElements.hasInScope(K))
    (Y.openElements.generateImpliedEndTags(), Y.openElements.popUntilTagNamePopped(K))
}
function MK(Y) {
  let Z = Y.openElements.tmplCount > 0,
    { formElement: K } = Y
  if (!Z) Y.formElement = null
  if ((K || Z) && Y.openElements.hasInScope(X.FORM)) {
    if ((Y.openElements.generateImpliedEndTags(), Z)) Y.openElements.popUntilTagNamePopped(X.FORM)
    else if (K) Y.openElements.remove(K)
  }
}
function NK(Y) {
  if (!Y.openElements.hasInButtonScope(X.P)) Y._insertFakeElement(B.P, X.P)
  Y._closePElement()
}
function gK(Y) {
  if (Y.openElements.hasInListItemScope(X.LI))
    (Y.openElements.generateImpliedEndTagsWithExclusion(X.LI),
      Y.openElements.popUntilTagNamePopped(X.LI))
}
function xK(Y, Z) {
  let K = Z.tagID
  if (Y.openElements.hasInScope(K))
    (Y.openElements.generateImpliedEndTagsWithExclusion(K), Y.openElements.popUntilTagNamePopped(K))
}
function hK(Y) {
  if (Y.openElements.hasNumberedHeaderInScope())
    (Y.openElements.generateImpliedEndTags(), Y.openElements.popUntilNumberedHeaderPopped())
}
function CK(Y, Z) {
  let K = Z.tagID
  if (Y.openElements.hasInScope(K))
    (Y.openElements.generateImpliedEndTags(),
      Y.openElements.popUntilTagNamePopped(K),
      Y.activeFormattingElements.clearToLastMarker())
}
function DK(Y) {
  ;(Y._reconstructActiveFormattingElements(),
    Y._insertFakeElement(B.BR, X.BR),
    Y.openElements.pop(),
    (Y.framesetOk = !1))
}
function C8(Y, Z) {
  let { tagName: K, tagID: J } = Z
  for (let Q = Y.openElements.stackTop; Q > 0; Q--) {
    let V = Y.openElements.items[Q],
      z = Y.openElements.tagIDs[Q]
    if (J === z && (J !== X.UNKNOWN || Y.treeAdapter.getTagName(V) === K)) {
      if ((Y.openElements.generateImpliedEndTagsWithExclusion(J), Y.openElements.stackTop >= Q))
        Y.openElements.shortenToLength(Q)
      break
    }
    if (Y._isSpecialElement(V, z)) break
  }
}
function B4(Y, Z) {
  switch (Z.tagID) {
    case X.A:
    case X.B:
    case X.I:
    case X.S:
    case X.U:
    case X.EM:
    case X.TT:
    case X.BIG:
    case X.CODE:
    case X.FONT:
    case X.NOBR:
    case X.SMALL:
    case X.STRIKE:
    case X.STRONG: {
      SY(Y, Z)
      break
    }
    case X.P: {
      NK(Y)
      break
    }
    case X.DL:
    case X.UL:
    case X.OL:
    case X.DIR:
    case X.DIV:
    case X.NAV:
    case X.PRE:
    case X.MAIN:
    case X.MENU:
    case X.ASIDE:
    case X.BUTTON:
    case X.CENTER:
    case X.FIGURE:
    case X.FOOTER:
    case X.HEADER:
    case X.HGROUP:
    case X.DIALOG:
    case X.ADDRESS:
    case X.ARTICLE:
    case X.DETAILS:
    case X.SEARCH:
    case X.SECTION:
    case X.SUMMARY:
    case X.LISTING:
    case X.FIELDSET:
    case X.BLOCKQUOTE:
    case X.FIGCAPTION: {
      yK(Y, Z)
      break
    }
    case X.LI: {
      gK(Y)
      break
    }
    case X.DD:
    case X.DT: {
      xK(Y, Z)
      break
    }
    case X.H1:
    case X.H2:
    case X.H3:
    case X.H4:
    case X.H5:
    case X.H6: {
      hK(Y)
      break
    }
    case X.BR: {
      DK(Y)
      break
    }
    case X.BODY: {
      bK(Y, Z)
      break
    }
    case X.HTML: {
      fK(Y, Z)
      break
    }
    case X.FORM: {
      MK(Y)
      break
    }
    case X.APPLET:
    case X.OBJECT:
    case X.MARQUEE: {
      CK(Y, Z)
      break
    }
    case X.TEMPLATE: {
      u0(Y, Z)
      break
    }
    default:
      C8(Y, Z)
  }
}
function D8(Y, Z) {
  if (Y.tmplInsertionModeStack.length > 0) k8(Y, Z)
  else kY(Y, Z)
}
function GK(Y, Z) {
  var K
  if (Z.tagID === X.SCRIPT)
    (K = Y.scriptHandler) === null || K === void 0 || K.call(Y, Y.openElements.current)
  ;(Y.openElements.pop(), (Y.insertionMode = Y.originalInsertionMode))
}
function $K(Y, Z) {
  ;(Y._err(Z, L.eofInElementThatCanContainOnlyText),
    Y.openElements.pop(),
    (Y.insertionMode = Y.originalInsertionMode),
    Y.onEof(Z))
}
function EY(Y, Z) {
  if (Y.openElements.currentTagId !== void 0 && M8.has(Y.openElements.currentTagId))
    switch (
      ((Y.pendingCharacterTokens.length = 0),
      (Y.hasNonWhitespacePendingCharacterToken = !1),
      (Y.originalInsertionMode = Y.insertionMode),
      (Y.insertionMode = U.IN_TABLE_TEXT),
      Z.type)
    ) {
      case h.CHARACTER: {
        $8(Y, Z)
        break
      }
      case h.WHITESPACE_CHARACTER: {
        G8(Y, Z)
        break
      }
    }
  else f1(Y, Z)
}
function EK(Y, Z) {
  ;(Y.openElements.clearBackToTableContext(),
    Y.activeFormattingElements.insertMarker(),
    Y._insertElement(Z, R.HTML),
    (Y.insertionMode = U.IN_CAPTION))
}
function uK(Y, Z) {
  ;(Y.openElements.clearBackToTableContext(),
    Y._insertElement(Z, R.HTML),
    (Y.insertionMode = U.IN_COLUMN_GROUP))
}
function IK(Y, Z) {
  ;(Y.openElements.clearBackToTableContext(),
    Y._insertFakeElement(B.COLGROUP, X.COLGROUP),
    (Y.insertionMode = U.IN_COLUMN_GROUP),
    _Y(Y, Z))
}
function SK(Y, Z) {
  ;(Y.openElements.clearBackToTableContext(),
    Y._insertElement(Z, R.HTML),
    (Y.insertionMode = U.IN_TABLE_BODY))
}
function kK(Y, Z) {
  ;(Y.openElements.clearBackToTableContext(),
    Y._insertFakeElement(B.TBODY, X.TBODY),
    (Y.insertionMode = U.IN_TABLE_BODY),
    w4(Y, Z))
}
function _K(Y, Z) {
  if (Y.openElements.hasInTableScope(X.TABLE))
    (Y.openElements.popUntilTagNamePopped(X.TABLE), Y._resetInsertionMode(), Y._processStartTag(Z))
}
function AK(Y, Z) {
  if (h8(Z)) Y._appendElement(Z, R.HTML)
  else f1(Y, Z)
  Z.ackSelfClosing = !0
}
function TK(Y, Z) {
  if (!Y.formElement && Y.openElements.tmplCount === 0)
    (Y._insertElement(Z, R.HTML), (Y.formElement = Y.openElements.current), Y.openElements.pop())
}
function o0(Y, Z) {
  switch (Z.tagID) {
    case X.TD:
    case X.TH:
    case X.TR: {
      kK(Y, Z)
      break
    }
    case X.STYLE:
    case X.SCRIPT:
    case X.TEMPLATE: {
      Q0(Y, Z)
      break
    }
    case X.COL: {
      IK(Y, Z)
      break
    }
    case X.FORM: {
      TK(Y, Z)
      break
    }
    case X.TABLE: {
      _K(Y, Z)
      break
    }
    case X.TBODY:
    case X.TFOOT:
    case X.THEAD: {
      SK(Y, Z)
      break
    }
    case X.INPUT: {
      AK(Y, Z)
      break
    }
    case X.CAPTION: {
      EK(Y, Z)
      break
    }
    case X.COLGROUP: {
      uK(Y, Z)
      break
    }
    default:
      f1(Y, Z)
  }
}
function O1(Y, Z) {
  switch (Z.tagID) {
    case X.TABLE: {
      if (Y.openElements.hasInTableScope(X.TABLE))
        (Y.openElements.popUntilTagNamePopped(X.TABLE), Y._resetInsertionMode())
      break
    }
    case X.TEMPLATE: {
      u0(Y, Z)
      break
    }
    case X.BODY:
    case X.CAPTION:
    case X.COL:
    case X.COLGROUP:
    case X.HTML:
    case X.TBODY:
    case X.TD:
    case X.TFOOT:
    case X.TH:
    case X.THEAD:
    case X.TR:
      break
    default:
      f1(Y, Z)
  }
}
function f1(Y, Z) {
  let K = Y.fosterParentingEnabled
  ;((Y.fosterParentingEnabled = !0), q4(Y, Z), (Y.fosterParentingEnabled = K))
}
function G8(Y, Z) {
  Y.pendingCharacterTokens.push(Z)
}
function $8(Y, Z) {
  ;(Y.pendingCharacterTokens.push(Z), (Y.hasNonWhitespacePendingCharacterToken = !0))
}
function w1(Y, Z) {
  let K = 0
  if (Y.hasNonWhitespacePendingCharacterToken)
    for (; K < Y.pendingCharacterTokens.length; K++) f1(Y, Y.pendingCharacterTokens[K])
  else
    for (; K < Y.pendingCharacterTokens.length; K++)
      Y._insertCharacters(Y.pendingCharacterTokens[K])
  ;((Y.insertionMode = Y.originalInsertionMode), Y._processToken(Z))
}
var E8 = new Set([X.CAPTION, X.COL, X.COLGROUP, X.TBODY, X.TD, X.TFOOT, X.TH, X.THEAD, X.TR])
function mK(Y, Z) {
  let K = Z.tagID
  if (E8.has(K)) {
    if (Y.openElements.hasInTableScope(X.CAPTION))
      (Y.openElements.generateImpliedEndTags(),
        Y.openElements.popUntilTagNamePopped(X.CAPTION),
        Y.activeFormattingElements.clearToLastMarker(),
        (Y.insertionMode = U.IN_TABLE),
        o0(Y, Z))
  } else c(Y, Z)
}
function iK(Y, Z) {
  let K = Z.tagID
  switch (K) {
    case X.CAPTION:
    case X.TABLE: {
      if (Y.openElements.hasInTableScope(X.CAPTION)) {
        if (
          (Y.openElements.generateImpliedEndTags(),
          Y.openElements.popUntilTagNamePopped(X.CAPTION),
          Y.activeFormattingElements.clearToLastMarker(),
          (Y.insertionMode = U.IN_TABLE),
          K === X.TABLE)
        )
          O1(Y, Z)
      }
      break
    }
    case X.BODY:
    case X.COL:
    case X.COLGROUP:
    case X.HTML:
    case X.TBODY:
    case X.TD:
    case X.TFOOT:
    case X.TH:
    case X.THEAD:
    case X.TR:
      break
    default:
      B4(Y, Z)
  }
}
function _Y(Y, Z) {
  switch (Z.tagID) {
    case X.HTML: {
      c(Y, Z)
      break
    }
    case X.COL: {
      ;(Y._appendElement(Z, R.HTML), (Z.ackSelfClosing = !0))
      break
    }
    case X.TEMPLATE: {
      Q0(Y, Z)
      break
    }
    default:
      U4(Y, Z)
  }
}
function cK(Y, Z) {
  switch (Z.tagID) {
    case X.COLGROUP: {
      if (Y.openElements.currentTagId === X.COLGROUP)
        (Y.openElements.pop(), (Y.insertionMode = U.IN_TABLE))
      break
    }
    case X.TEMPLATE: {
      u0(Y, Z)
      break
    }
    case X.COL:
      break
    default:
      U4(Y, Z)
  }
}
function U4(Y, Z) {
  if (Y.openElements.currentTagId === X.COLGROUP)
    (Y.openElements.pop(), (Y.insertionMode = U.IN_TABLE), Y._processToken(Z))
}
function w4(Y, Z) {
  switch (Z.tagID) {
    case X.TR: {
      ;(Y.openElements.clearBackToTableBodyContext(),
        Y._insertElement(Z, R.HTML),
        (Y.insertionMode = U.IN_ROW))
      break
    }
    case X.TH:
    case X.TD: {
      ;(Y.openElements.clearBackToTableBodyContext(),
        Y._insertFakeElement(B.TR, X.TR),
        (Y.insertionMode = U.IN_ROW),
        L4(Y, Z))
      break
    }
    case X.CAPTION:
    case X.COL:
    case X.COLGROUP:
    case X.TBODY:
    case X.TFOOT:
    case X.THEAD: {
      if (Y.openElements.hasTableBodyContextInTableScope())
        (Y.openElements.clearBackToTableBodyContext(),
          Y.openElements.pop(),
          (Y.insertionMode = U.IN_TABLE),
          o0(Y, Z))
      break
    }
    default:
      o0(Y, Z)
  }
}
function IY(Y, Z) {
  let K = Z.tagID
  switch (Z.tagID) {
    case X.TBODY:
    case X.TFOOT:
    case X.THEAD: {
      if (Y.openElements.hasInTableScope(K))
        (Y.openElements.clearBackToTableBodyContext(),
          Y.openElements.pop(),
          (Y.insertionMode = U.IN_TABLE))
      break
    }
    case X.TABLE: {
      if (Y.openElements.hasTableBodyContextInTableScope())
        (Y.openElements.clearBackToTableBodyContext(),
          Y.openElements.pop(),
          (Y.insertionMode = U.IN_TABLE),
          O1(Y, Z))
      break
    }
    case X.BODY:
    case X.CAPTION:
    case X.COL:
    case X.COLGROUP:
    case X.HTML:
    case X.TD:
    case X.TH:
    case X.TR:
      break
    default:
      O1(Y, Z)
  }
}
function L4(Y, Z) {
  switch (Z.tagID) {
    case X.TH:
    case X.TD: {
      ;(Y.openElements.clearBackToTableRowContext(),
        Y._insertElement(Z, R.HTML),
        (Y.insertionMode = U.IN_CELL),
        Y.activeFormattingElements.insertMarker())
      break
    }
    case X.CAPTION:
    case X.COL:
    case X.COLGROUP:
    case X.TBODY:
    case X.TFOOT:
    case X.THEAD:
    case X.TR: {
      if (Y.openElements.hasInTableScope(X.TR))
        (Y.openElements.clearBackToTableRowContext(),
          Y.openElements.pop(),
          (Y.insertionMode = U.IN_TABLE_BODY),
          w4(Y, Z))
      break
    }
    default:
      o0(Y, Z)
  }
}
function u8(Y, Z) {
  switch (Z.tagID) {
    case X.TR: {
      if (Y.openElements.hasInTableScope(X.TR))
        (Y.openElements.clearBackToTableRowContext(),
          Y.openElements.pop(),
          (Y.insertionMode = U.IN_TABLE_BODY))
      break
    }
    case X.TABLE: {
      if (Y.openElements.hasInTableScope(X.TR))
        (Y.openElements.clearBackToTableRowContext(),
          Y.openElements.pop(),
          (Y.insertionMode = U.IN_TABLE_BODY),
          IY(Y, Z))
      break
    }
    case X.TBODY:
    case X.TFOOT:
    case X.THEAD: {
      if (Y.openElements.hasInTableScope(Z.tagID) || Y.openElements.hasInTableScope(X.TR))
        (Y.openElements.clearBackToTableRowContext(),
          Y.openElements.pop(),
          (Y.insertionMode = U.IN_TABLE_BODY),
          IY(Y, Z))
      break
    }
    case X.BODY:
    case X.CAPTION:
    case X.COL:
    case X.COLGROUP:
    case X.HTML:
    case X.TD:
    case X.TH:
      break
    default:
      O1(Y, Z)
  }
}
function dK(Y, Z) {
  let K = Z.tagID
  if (E8.has(K)) {
    if (Y.openElements.hasInTableScope(X.TD) || Y.openElements.hasInTableScope(X.TH))
      (Y._closeTableCell(), L4(Y, Z))
  } else c(Y, Z)
}
function rK(Y, Z) {
  let K = Z.tagID
  switch (K) {
    case X.TD:
    case X.TH: {
      if (Y.openElements.hasInTableScope(K))
        (Y.openElements.generateImpliedEndTags(),
          Y.openElements.popUntilTagNamePopped(K),
          Y.activeFormattingElements.clearToLastMarker(),
          (Y.insertionMode = U.IN_ROW))
      break
    }
    case X.TABLE:
    case X.TBODY:
    case X.TFOOT:
    case X.THEAD:
    case X.TR: {
      if (Y.openElements.hasInTableScope(K)) (Y._closeTableCell(), u8(Y, Z))
      break
    }
    case X.BODY:
    case X.CAPTION:
    case X.COL:
    case X.COLGROUP:
    case X.HTML:
      break
    default:
      B4(Y, Z)
  }
}
function I8(Y, Z) {
  switch (Z.tagID) {
    case X.HTML: {
      c(Y, Z)
      break
    }
    case X.OPTION: {
      if (Y.openElements.currentTagId === X.OPTION) Y.openElements.pop()
      Y._insertElement(Z, R.HTML)
      break
    }
    case X.OPTGROUP: {
      if (Y.openElements.currentTagId === X.OPTION) Y.openElements.pop()
      if (Y.openElements.currentTagId === X.OPTGROUP) Y.openElements.pop()
      Y._insertElement(Z, R.HTML)
      break
    }
    case X.HR: {
      if (Y.openElements.currentTagId === X.OPTION) Y.openElements.pop()
      if (Y.openElements.currentTagId === X.OPTGROUP) Y.openElements.pop()
      ;(Y._appendElement(Z, R.HTML), (Z.ackSelfClosing = !0))
      break
    }
    case X.INPUT:
    case X.KEYGEN:
    case X.TEXTAREA:
    case X.SELECT: {
      if (Y.openElements.hasInSelectScope(X.SELECT)) {
        if (
          (Y.openElements.popUntilTagNamePopped(X.SELECT),
          Y._resetInsertionMode(),
          Z.tagID !== X.SELECT)
        )
          Y._processStartTag(Z)
      }
      break
    }
    case X.SCRIPT:
    case X.TEMPLATE: {
      Q0(Y, Z)
      break
    }
    default:
  }
}
function S8(Y, Z) {
  switch (Z.tagID) {
    case X.OPTGROUP: {
      if (
        Y.openElements.stackTop > 0 &&
        Y.openElements.currentTagId === X.OPTION &&
        Y.openElements.tagIDs[Y.openElements.stackTop - 1] === X.OPTGROUP
      )
        Y.openElements.pop()
      if (Y.openElements.currentTagId === X.OPTGROUP) Y.openElements.pop()
      break
    }
    case X.OPTION: {
      if (Y.openElements.currentTagId === X.OPTION) Y.openElements.pop()
      break
    }
    case X.SELECT: {
      if (Y.openElements.hasInSelectScope(X.SELECT))
        (Y.openElements.popUntilTagNamePopped(X.SELECT), Y._resetInsertionMode())
      break
    }
    case X.TEMPLATE: {
      u0(Y, Z)
      break
    }
    default:
  }
}
function lK(Y, Z) {
  let K = Z.tagID
  if (
    K === X.CAPTION ||
    K === X.TABLE ||
    K === X.TBODY ||
    K === X.TFOOT ||
    K === X.THEAD ||
    K === X.TR ||
    K === X.TD ||
    K === X.TH
  )
    (Y.openElements.popUntilTagNamePopped(X.SELECT), Y._resetInsertionMode(), Y._processStartTag(Z))
  else I8(Y, Z)
}
function sK(Y, Z) {
  let K = Z.tagID
  if (
    K === X.CAPTION ||
    K === X.TABLE ||
    K === X.TBODY ||
    K === X.TFOOT ||
    K === X.THEAD ||
    K === X.TR ||
    K === X.TD ||
    K === X.TH
  ) {
    if (Y.openElements.hasInTableScope(K))
      (Y.openElements.popUntilTagNamePopped(X.SELECT), Y._resetInsertionMode(), Y.onEndTag(Z))
  } else S8(Y, Z)
}
function pK(Y, Z) {
  switch (Z.tagID) {
    case X.BASE:
    case X.BASEFONT:
    case X.BGSOUND:
    case X.LINK:
    case X.META:
    case X.NOFRAMES:
    case X.SCRIPT:
    case X.STYLE:
    case X.TEMPLATE:
    case X.TITLE: {
      Q0(Y, Z)
      break
    }
    case X.CAPTION:
    case X.COLGROUP:
    case X.TBODY:
    case X.TFOOT:
    case X.THEAD: {
      ;((Y.tmplInsertionModeStack[0] = U.IN_TABLE), (Y.insertionMode = U.IN_TABLE), o0(Y, Z))
      break
    }
    case X.COL: {
      ;((Y.tmplInsertionModeStack[0] = U.IN_COLUMN_GROUP),
        (Y.insertionMode = U.IN_COLUMN_GROUP),
        _Y(Y, Z))
      break
    }
    case X.TR: {
      ;((Y.tmplInsertionModeStack[0] = U.IN_TABLE_BODY),
        (Y.insertionMode = U.IN_TABLE_BODY),
        w4(Y, Z))
      break
    }
    case X.TD:
    case X.TH: {
      ;((Y.tmplInsertionModeStack[0] = U.IN_ROW), (Y.insertionMode = U.IN_ROW), L4(Y, Z))
      break
    }
    default:
      ;((Y.tmplInsertionModeStack[0] = U.IN_BODY), (Y.insertionMode = U.IN_BODY), c(Y, Z))
  }
}
function aK(Y, Z) {
  if (Z.tagID === X.TEMPLATE) u0(Y, Z)
}
function k8(Y, Z) {
  if (Y.openElements.tmplCount > 0)
    (Y.openElements.popUntilTagNamePopped(X.TEMPLATE),
      Y.activeFormattingElements.clearToLastMarker(),
      Y.tmplInsertionModeStack.shift(),
      Y._resetInsertionMode(),
      Y.onEof(Z))
  else kY(Y, Z)
}
function nK(Y, Z) {
  if (Z.tagID === X.HTML) c(Y, Z)
  else F4(Y, Z)
}
function _8(Y, Z) {
  var K
  if (Z.tagID === X.HTML) {
    if (!Y.fragmentContext) Y.insertionMode = U.AFTER_AFTER_BODY
    if (Y.options.sourceCodeLocationInfo && Y.openElements.tagIDs[0] === X.HTML) {
      Y._setEndLocation(Y.openElements.items[0], Z)
      let J = Y.openElements.items[1]
      if (
        J &&
        !((K = Y.treeAdapter.getNodeSourceCodeLocation(J)) === null || K === void 0
          ? void 0
          : K.endTag)
      )
        Y._setEndLocation(J, Z)
    }
  } else F4(Y, Z)
}
function F4(Y, Z) {
  ;((Y.insertionMode = U.IN_BODY), q4(Y, Z))
}
function oK(Y, Z) {
  switch (Z.tagID) {
    case X.HTML: {
      c(Y, Z)
      break
    }
    case X.FRAMESET: {
      Y._insertElement(Z, R.HTML)
      break
    }
    case X.FRAME: {
      ;(Y._appendElement(Z, R.HTML), (Z.ackSelfClosing = !0))
      break
    }
    case X.NOFRAMES: {
      Q0(Y, Z)
      break
    }
    default:
  }
}
function tK(Y, Z) {
  if (Z.tagID === X.FRAMESET && !Y.openElements.isRootHtmlElementCurrent()) {
    if ((Y.openElements.pop(), !Y.fragmentContext && Y.openElements.currentTagId !== X.FRAMESET))
      Y.insertionMode = U.AFTER_FRAMESET
  }
}
function eK(Y, Z) {
  switch (Z.tagID) {
    case X.HTML: {
      c(Y, Z)
      break
    }
    case X.NOFRAMES: {
      Q0(Y, Z)
      break
    }
    default:
  }
}
function YJ(Y, Z) {
  if (Z.tagID === X.HTML) Y.insertionMode = U.AFTER_AFTER_FRAMESET
}
function ZJ(Y, Z) {
  if (Z.tagID === X.HTML) c(Y, Z)
  else W4(Y, Z)
}
function W4(Y, Z) {
  ;((Y.insertionMode = U.IN_BODY), q4(Y, Z))
}
function KJ(Y, Z) {
  switch (Z.tagID) {
    case X.HTML: {
      c(Y, Z)
      break
    }
    case X.NOFRAMES: {
      Q0(Y, Z)
      break
    }
    default:
  }
}
function JJ(Y, Z) {
  ;((Z.chars = $), Y._insertCharacters(Z))
}
function XJ(Y, Z) {
  ;(Y._insertCharacters(Z), (Y.framesetOk = !1))
}
function A8(Y) {
  while (
    Y.treeAdapter.getNamespaceURI(Y.openElements.current) !== R.HTML &&
    Y.openElements.currentTagId !== void 0 &&
    !Y._isIntegrationPoint(Y.openElements.currentTagId, Y.openElements.current)
  )
    Y.openElements.pop()
}
function QJ(Y, Z) {
  if (R8(Z)) (A8(Y), Y._startTagOutsideForeignContent(Z))
  else {
    let K = Y._getAdjustedCurrentElement(),
      J = Y.treeAdapter.getNamespaceURI(K)
    if (J === R.MATHML) GY(Z)
    else if (J === R.SVG) (P8(Z), $Y(Z))
    if ((H4(Z), Z.selfClosing)) Y._appendElement(Z, J)
    else Y._insertElement(Z, J)
    Z.ackSelfClosing = !0
  }
}
function VJ(Y, Z) {
  if (Z.tagID === X.P || Z.tagID === X.BR) {
    ;(A8(Y), Y._endTagOutsideForeignContent(Z))
    return
  }
  for (let K = Y.openElements.stackTop; K > 0; K--) {
    let J = Y.openElements.items[K]
    if (Y.treeAdapter.getNamespaceURI(J) === R.HTML) {
      Y._endTagOutsideForeignContent(Z)
      break
    }
    let Q = Y.treeAdapter.getTagName(J)
    if (Q.toLowerCase() === Z.tagName) {
      ;((Z.tagName = Q), Y.openElements.shortenToLength(K))
      break
    }
  }
}
var k3 =
  String.prototype.codePointAt == null
    ? (Y, Z) =>
        (Y.charCodeAt(Z) & 64512) === 55296
          ? (Y.charCodeAt(Z) - 55296) * 1024 + Y.charCodeAt(Z + 1) - 56320 + 65536
          : Y.charCodeAt(Z)
    : (Y, Z) => Y.codePointAt(Z)
function T8(Y, Z) {
  return function (J) {
    let Q,
      V = 0,
      z = ''
    while ((Q = Y.exec(J))) {
      if (V !== Q.index) z += J.substring(V, Q.index)
      ;((z += Z.get(Q[0].charCodeAt(0))), (V = Q.index + 1))
    }
    return z + J.substring(V)
  }
}
var m8 = T8(
    /["&\u00A0]/g,
    new Map([
      [34, '&quot;'],
      [38, '&amp;'],
      [160, '&nbsp;'],
    ]),
  ),
  i8 = T8(
    /[&<>\u00A0]/g,
    new Map([
      [38, '&amp;'],
      [60, '&lt;'],
      [62, '&gt;'],
      [160, '&nbsp;'],
    ]),
  )
var zJ = new Set([
  B.AREA,
  B.BASE,
  B.BASEFONT,
  B.BGSOUND,
  B.BR,
  B.COL,
  B.EMBED,
  B.FRAME,
  B.HR,
  B.IMG,
  B.INPUT,
  B.KEYGEN,
  B.LINK,
  B.META,
  B.PARAM,
  B.SOURCE,
  B.TRACK,
  B.WBR,
])
function HJ(Y, Z) {
  return (
    Z.treeAdapter.isElementNode(Y) &&
    Z.treeAdapter.getNamespaceURI(Y) === R.HTML &&
    zJ.has(Z.treeAdapter.getTagName(Y))
  )
}
var WJ = { treeAdapter: Y0, scriptingEnabled: !0 }
function AY(Y, Z) {
  let K = { ...WJ, ...Z }
  return c8(Y, K)
}
function UJ(Y, Z) {
  let K = '',
    J =
      Z.treeAdapter.isElementNode(Y) &&
      Z.treeAdapter.getTagName(Y) === B.TEMPLATE &&
      Z.treeAdapter.getNamespaceURI(Y) === R.HTML
        ? Z.treeAdapter.getTemplateContent(Y)
        : Y,
    Q = Z.treeAdapter.getChildNodes(J)
  if (Q) for (let V of Q) K += c8(V, Z)
  return K
}
function c8(Y, Z) {
  if (Z.treeAdapter.isElementNode(Y)) return FJ(Y, Z)
  if (Z.treeAdapter.isTextNode(Y)) return BJ(Y, Z)
  if (Z.treeAdapter.isCommentNode(Y)) return wJ(Y, Z)
  if (Z.treeAdapter.isDocumentTypeNode(Y)) return LJ(Y, Z)
  return ''
}
function FJ(Y, Z) {
  let K = Z.treeAdapter.getTagName(Y)
  return `<${K}${qJ(Y, Z)}>${HJ(Y, Z) ? '' : `${UJ(Y, Z)}</${K}>`}`
}
function qJ(Y, { treeAdapter: Z }) {
  let K = ''
  for (let J of Z.getAttrList(Y)) {
    if (((K += ' '), J.namespace))
      switch (J.namespace) {
        case R.XML: {
          K += `xml:${J.name}`
          break
        }
        case R.XMLNS: {
          if (J.name !== 'xmlns') K += 'xmlns:'
          K += J.name
          break
        }
        case R.XLINK: {
          K += `xlink:${J.name}`
          break
        }
        default:
          K += `${J.prefix}:${J.name}`
      }
    else K += J.name
    K += `="${m8(J.value)}"`
  }
  return K
}
function BJ(Y, Z) {
  let { treeAdapter: K } = Z,
    J = K.getTextNodeContent(Y),
    Q = K.getParentNode(Y),
    V = Q && K.isElementNode(Q) && K.getTagName(Q)
  return V && K.getNamespaceURI(Q) === R.HTML && hY(V, Z.scriptingEnabled) ? J : i8(J)
}
function wJ(Y, { treeAdapter: Z }) {
  return `<!--${Z.getCommentNodeContent(Y)}-->`
}
function LJ(Y, { treeAdapter: Z }) {
  return `<!DOCTYPE ${Z.getDocumentTypeNodeName(Y)}>`
}
function d8(Y, Z) {
  return b1.parse(Y, Z)
}
function r8(Y, Z, K) {
  if (typeof Y === 'string') ((K = Z), (Z = Y), (Y = null))
  let J = b1.getFragmentParser(Y, K)
  return (J.tokenizer.write(Z, !0), J.getFragment())
}
function l8(Y) {
  let Z = Y.includes('"') ? "'" : '"'
  return Z + Y + Z
}
function jJ(Y, Z, K) {
  let J = '!DOCTYPE '
  if (Y) J += Y
  if (Z) J += ` PUBLIC ${l8(Z)}`
  else if (K) J += ' SYSTEM'
  if (K) J += ` ${l8(K)}`
  return J
}
var L0 = {
  isCommentNode: x0,
  isElementNode: f,
  isTextNode: r,
  createDocument() {
    let Y = new a([])
    return ((Y['x-mode'] = X4.DOCUMENT_MODE.NO_QUIRKS), Y)
  },
  createDocumentFragment() {
    return new a([])
  },
  createElement(Y, Z, K) {
    let J = Object.create(null),
      Q = Object.create(null),
      V = Object.create(null)
    for (let F = 0; F < K.length; F++) {
      let q = K[F].name
      ;((J[q] = K[F].value), (Q[q] = K[F].namespace), (V[q] = K[F].prefix))
    }
    let z = new A0(Y, J, [])
    return ((z.namespace = Z), (z['x-attribsNamespace'] = Q), (z['x-attribsPrefix'] = V), z)
  },
  createCommentNode(Y) {
    return new k0(Y)
  },
  createTextNode(Y) {
    return new W0(Y)
  },
  appendChild(Y, Z) {
    let K = Y.children[Y.children.length - 1]
    if (K) ((K.next = Z), (Z.prev = K))
    ;(Y.children.push(Z), (Z.parent = Y))
  },
  insertBefore(Y, Z, K) {
    let J = Y.children.indexOf(K),
      { prev: Q } = K
    if (Q) ((Q.next = Z), (Z.prev = Q))
    ;((K.prev = Z), (Z.next = K), Y.children.splice(J, 0, Z), (Z.parent = Y))
  },
  setTemplateContent(Y, Z) {
    L0.appendChild(Y, Z)
  },
  getTemplateContent(Y) {
    return Y.children[0]
  },
  setDocumentType(Y, Z, K, J) {
    let Q = jJ(Z, K, J),
      V = Y.children.find(z => h1(z) && z.name === '!doctype')
    if (V) V.data = Q !== null && Q !== void 0 ? Q : null
    else ((V = new _0('!doctype', Q)), L0.appendChild(Y, V))
    ;((V['x-name'] = Z), (V['x-publicId'] = K), (V['x-systemId'] = J))
  },
  setDocumentMode(Y, Z) {
    Y['x-mode'] = Z
  },
  getDocumentMode(Y) {
    return Y['x-mode']
  },
  detachNode(Y) {
    if (Y.parent) {
      let Z = Y.parent.children.indexOf(Y),
        { prev: K, next: J } = Y
      if (((Y.prev = null), (Y.next = null), K)) K.next = J
      if (J) J.prev = K
      ;(Y.parent.children.splice(Z, 1), (Y.parent = null))
    }
  },
  insertText(Y, Z) {
    let K = Y.children[Y.children.length - 1]
    if (K && r(K)) K.data += Z
    else L0.appendChild(Y, L0.createTextNode(Z))
  },
  insertTextBefore(Y, Z, K) {
    let J = Y.children[Y.children.indexOf(K) - 1]
    if (J && r(J)) J.data += Z
    else L0.insertBefore(Y, L0.createTextNode(Z), K)
  },
  adoptAttributes(Y, Z) {
    for (let K = 0; K < Z.length; K++) {
      let J = Z[K].name
      if (Y.attribs[J] === void 0)
        ((Y.attribs[J] = Z[K].value),
          (Y['x-attribsNamespace'][J] = Z[K].namespace),
          (Y['x-attribsPrefix'][J] = Z[K].prefix))
    }
  },
  getFirstChild(Y) {
    return Y.children[0]
  },
  getChildNodes(Y) {
    return Y.children
  },
  getParentNode(Y) {
    return Y.parent
  },
  getAttrList(Y) {
    return Y.attributes
  },
  getTagName(Y) {
    return Y.name
  },
  getNamespaceURI(Y) {
    return Y.namespace
  },
  getTextNodeContent(Y) {
    return Y.data
  },
  getCommentNodeContent(Y) {
    return Y.data
  },
  getDocumentTypeNodeName(Y) {
    var Z
    return (Z = Y['x-name']) !== null && Z !== void 0 ? Z : ''
  },
  getDocumentTypeNodePublicId(Y) {
    var Z
    return (Z = Y['x-publicId']) !== null && Z !== void 0 ? Z : ''
  },
  getDocumentTypeNodeSystemId(Y) {
    var Z
    return (Z = Y['x-systemId']) !== null && Z !== void 0 ? Z : ''
  },
  isDocumentTypeNode(Y) {
    return h1(Y) && Y.name === '!doctype'
  },
  setNodeSourceCodeLocation(Y, Z) {
    if (Z) ((Y.startIndex = Z.startOffset), (Y.endIndex = Z.endOffset))
    Y.sourceCodeLocation = Z
  },
  getNodeSourceCodeLocation(Y) {
    return Y.sourceCodeLocation
  },
  updateNodeSourceCodeLocation(Y, Z) {
    if (Z.endOffset != null) Y.endIndex = Z.endOffset
    Y.sourceCodeLocation = { ...Y.sourceCodeLocation, ...Z }
  },
}
function s8(Y, Z, K, J) {
  var Q
  if (
    (((Q = Z.treeAdapter) !== null && Q !== void 0) || (Z.treeAdapter = L0),
    Z.scriptingEnabled !== !1)
  )
    Z.scriptingEnabled = !0
  return K ? d8(Y, Z) : r8(J, Y, Z)
}
var RJ = { treeAdapter: L0 }
function p8(Y) {
  let Z = 'length' in Y ? Y : [Y]
  for (let J = 0; J < Z.length; J += 1) {
    let Q = Z[J]
    if (n(Q)) Array.prototype.splice.call(Z, J, 1, ...Q.children)
  }
  let K = ''
  for (let J = 0; J < Z.length; J += 1) {
    let Q = Z[J]
    K += AY(Q, RJ)
  }
  return K
}
var PJ = rZ((Y, Z, K, J) => (Z._useHtmlParser2 ? wZ(Y, Z) : s8(Y, Z, K, J))),
  y1 = tZ(PJ, (Y, Z) => (Z._useHtmlParser2 ? D1(Y, Z) : p8(Y)))
import vJ from 'ky'
var TY = { TIMEOUT: 20000, CACHE: 'no-cache' }
class mY {
  name
  baseUrl
  version
  language
  client
  constructor(Y) {
    ;((this.name = Y.name),
      (this.baseUrl = Y.baseUrl),
      (this.version = Y.version),
      (this.language = Y.language),
      (this.client = vJ.create({
        cache: TY.CACHE,
        timeout: TY.TIMEOUT,
        headers: {
          'User-Agent':
            Y.userAgent ?? 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        },
      })))
  }
  async fetchHtml(Y) {
    let K = await (await this.client.get(Y)).text()
    return y1(K)
  }
}
class iY extends mY {
  constructor() {
    super({ name: 'arno', baseUrl: 'https://ar-no.com/', version: '0.0.1', language: 'ar' })
  }
  async search(Y) {
    let Z = new URL(this.baseUrl)
    ;(Z.searchParams.set('s', Y), Z.searchParams.set('post_type', 'wp-manga'))
    let K = await this.fetchHtml(Z.toString()),
      J = []
    return (
      K('.c-tabs-item').each((Q, V) => {
        let z = K(V),
          F = z.find('.post-title a'),
          q = F.text().trim(),
          j = (F.attr('href') || '').match(/\/novel\/([^/]+)\/?/)?.[1] || '',
          O = z.find('.tab-thumb img, .post-thumb img').attr('src') || ''
        if (q && j) J.push({ id: j, title: q, cover: O, source: 'arno' })
      }),
      J
    )
  }
  async fetchPopular(Y) {
    let Z = new URL(this.baseUrl)
    if (Y > 1) Z.searchParams.set('paged', Y.toString())
    let K = await this.fetchHtml(Z.toString()),
      J = []
    return (
      K('.popular-item-wrap .popular-content, .slider__item').each((Q, V) => {
        let z = K(V),
          F = z.find('.post-title a').first(),
          q = F.text().trim(),
          j = (F.attr('href') || '').match(/\/novel\/([^/]+)\/?/)?.[1] || '',
          O = z.find('.slider__thumb_item img').attr('src') || ''
        if (q && j) J.push({ id: j, title: q, cover: O, source: 'arno' })
      }),
      J
    )
  }
  async fetchNovelInfo(Y) {
    let Z = new URL(`${this.baseUrl}novel/${Y}/`),
      K = await this.fetchHtml(Z.toString()),
      J = K('.post-title h1').text().trim(),
      Q = K('.summary_image img').attr('src') || '',
      V = K('.description-summary .summary__content').text().trim(),
      z =
        K('.author-content a').text().trim() ||
        K(".post-content_item:contains('المؤلف') .summary-content").text().trim(),
      F = []
    K('.genres-content a').each((w, j) => {
      let O = K(j).text().trim()
      if (O) F.push(O)
    })
    let q = ''
    return (
      K('.post-content_item').each((w, j) => {
        let O = K(j),
          b = O.find('h5').text().trim()
        if (b === 'الحالة' || b === 'الحالة ') q = O.find('.summary-content').text().trim()
      }),
      { id: Y, source: 'arno', title: J, description: V, cover: Q, author: z, genres: F, status: q }
    )
  }
  async fetchChapters(Y) {
    if (!Y) return []
    try {
      let Z = new URL(this.baseUrl)
      Z.pathname = `/novel/${Y}/ajax/chapters/`
      let J = await (
          await this.client.post(Z.toString(), {
            headers: { Accept: 'text/html,application/xhtml+xml' },
          })
        ).text(),
        Q = y1(J),
        V = []
      return (
        Q('.wp-manga-chapter').each((z, F) => {
          let w = Q(F).find('a'),
            j = w.attr('href') || '',
            O = w.text().trim()
          if (j && O) V.push({ id: j, title: O, url: j })
        }),
        V.toReversed()
      )
    } catch (Z) {
      return (console.error('Failed to fetch chapters:', Z), [])
    }
  }
  async fetchChapterContent(Y) {
    let Z = Y,
      K = await this.fetchHtml(Z),
      J = K('.entry-title').text().trim() || K('h1').text().trim(),
      Q = K('.reading-content').first()
    if (!Q.length) Q = K('.c-blog-post .entry-content').first()
    if (!Q.length) Q = K('.c-blog-post .entry-content_wrap').first()
    let V = Q.html() || ''
    V = V.replace(
      /<br\s*\/?>/gi,
      `
`,
    ).replace(
      /<\/p>/gi,
      `</p>
`,
    )
    let w = y1(V)
      .text()
      .split(/\n{2,}/)
      .filter(j => j.trim())
      .map(j => j.trim()).join(`

`)
    return { title: J, content: w, language: this.language }
  }
}
var vQ = { arno: iY },
  OQ = ['arno']
export { OQ as sourcesNames, vQ as sources }
