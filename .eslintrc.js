module.exports = {
  'env': {
    'es6': false,
    'browser': true,
    'commonjs': true
  },
  'globals': {
    'Handlebars': true,
    'mapboxgl': true,
    'jQuery': true,
    '$': true,
    'dots': true
  },
  'rules': {
    'strict': ['error'],
    // Minimize confusing code errors
    'comma-dangle': ['error', 'never'],
    'no-cond-assign': ['error', 'always'],
    'no-console': ['error', { 'allow': ['warn', 'error'] }],
    'no-constant-condition': ['error'],
    'no-control-regex': ['error'],
    'no-debugger': ['error'],
    'no-dupe-args': ['error'],
    'no-dupe-keys': ['error'],
    'no-duplicate-case': ['error'],
    'no-empty': ['error'],
    'no-empty-character-class': ['error'],
    'no-ex-assign': ['error'],
    'no-extra-boolean-cast': ['error'],
    'no-extra-parens': ['error'],
    'no-extra-semi': ['error'],
    'no-inner-declarations': ['error'],
    'no-invalid-regexp': ['error'],
    'no-irregular-whitespace': ['error'],
    'no-negated-in-lhs': ['error'],
    'no-obj-calls': ['error'],
    'no-regex-spaces': ['error'],
    'no-sparse-arrays': ['error'],
    'no-unexpected-multiline': ['error'],
    'use-isnan': ['error'],
    'valid-jsdoc': ['error'],
    'valid-typeof': ['error'],
    'no-unsafe-finally': ['error'],
    'no-unreachable': ['error'],
    // Best practices
    'array-callback-return': ['error'],
    'block-scoped-var': ['error'],
    'curly': ['error'],
    'dot-location': ['error', 'property'],
    'dot-notation': ['error'],
    'eqeqeq': ['error'],
    'no-alert': ['error'],
    'no-caller': ['error'],
    'no-case-declarations': ['error'],
    'no-eval': ['error'],
    'no-extra-bind': ['error'],
    'no-fallthrough': ['error'],
    'no-floating-decimal': ['error'],
    'no-implicit-coercion': ['error'],
    'no-implied-eval': ['error'],
    'no-invalid-this': ['error'],
    'no-iterator': ['error'],
    'no-labels': ['error'],
    'no-lone-blocks': ['error'],
    'no-loop-func': ['error'],
    'no-multi-spaces': ['error'],
    'no-native-reassign': ['error'],
    'no-new-func': ['error'],
    'no-new-wrappers': ['error'],
    'no-proto': ['error'],
    //'no-redeclare': ['error'],
    'no-return-assign': ['error'],
    'no-self-assign': ['error'],
    'no-self-compare': ['error'],
    'no-sequences': ['error'],
    'no-throw-literal': ['error'],
    'no-unused-expressions': ['error'],
    'no-useless-call': ['error'],
    'no-useless-concat': ['error'],
    'no-useless-escape': ['error'],
    'no-void': ['error'],
    'wrap-iife': ['error', 'inside'],
    'yoda': ['error'],
    // Variables
    'no-delete-var': ['error'],
    'no-shadow': ['error'],
    'no-shadow-restricted-names': ['error'],
    'no-undef': ['error'],
    'no-undef-init': ['error'],
    'no-unused-vars': ['error'],
    'no-use-before-define': ['error', 'nofunc'],
    // Formatting
    'array-bracket-spacing': ['error'],
    'block-spacing': ['error'],
    'brace-style': ['error'],
    'camelcase': ['error'],
    'comma-spacing': ['error'],
    'comma-style': ['error'],
    'computed-property-spacing': ['error'],
    'consistent-this': ['error', 'self'],
    'eol-last': ['error'],
    //'func-style': ['error', 'declaration'],
    'indent': ['error', 2, { 'SwitchCase': 1 }],
    'key-spacing': ['error'],
    'keyword-spacing': ['error'],
    'linebreak-style': ['error'],
    'lines-around-comment': ['error'],
    'max-depth': ['error'],
    'max-len': ['error', 120],
    'max-nested-callbacks': ['error', 3],
    'max-params': ['error', 4],
    'max-statements': ['error', 15],
    'max-statements-per-line': ['error'],
    'new-cap': ['error'],
    'new-parens': ['error'],
    //'newline-after-var': ['error'],
    'newline-before-return': ['error'],
    'newline-per-chained-call': ['error'],
    'no-array-constructor': ['error'],
    'no-continue': ['error'],
    'no-inline-comments': ['error'],
    'no-lonely-if': ['error'],
    'no-multiple-empty-lines': ['error'],
    'no-negated-condition': ['error'],
    'no-nested-ternary': ['error'],
    'no-new-object': ['error'],
    'no-spaced-func': ['error'],
    'no-unneeded-ternary': ['error'],
    'no-whitespace-before-property': ['error'],
    'object-curly-spacing': ['error', 'always'],
    'object-property-newline': ['error'],
    'one-var-declaration-per-line': ['error', 'always'],
    'operator-linebreak': ['error'],
    'padded-blocks': ['error', 'never'],
    'quote-props': ['error'],
    'quotes': ['error', 'single', { 'avoidEscape': true, 'allowTemplateLiterals': true }],
    'require-jsdoc': ['error'],
    'semi': ['error'],
    'semi-spacing': ['error'],
    'space-before-blocks': ['error'],
    'space-before-function-paren': ['error', 'never'],
    'space-in-parens': ['error'],
    'space-infix-ops': ['error'],
    'space-unary-ops': ['error'],
    'spaced-comment': ['error'],
    'wrap-regex': ['error'],
    // ES6
    'arrow-body-style': ['error'],
    'arrow-parens': ['error'],
    'arrow-spacing': ['error'],
    'constructor-super': ['error'],
    'generator-star-spacing': ['error', { 'before': false, 'after': true }],
    'no-class-assign': ['error'],
    'no-confusing-arrow': ['error'],
    'no-const-assign': ['error'],
    'no-dupe-class-members': ['error'],
    'no-this-before-super': ['error'],
    'no-useless-computed-key': ['error'],
    'no-useless-constructor': ['error'],
    'object-shorthand': ['error', 'never'],
    'prefer-const': ['error'],
    'require-yield': ['error'],
    'template-curly-spacing': ['error'],
    'yield-star-spacing': ['error']
  }
};

function errors() {
  // comma-dangle
  var x = [ 1, 2, ];
  // no-cond-assign
  if (x[0] = 1 && x); // eslint-disable-line no-extra-semi,curly
  // no-console
  console.log(x); console.error(x);
  // no-constant-condition
  if (true); // eslint-disable-line no-extra-semi,curly
  // no-control-regex
  x[1] = /\x1f/;
  // no-debugger
  debugger;
  // no-dupe-args
  var y = function fail(a, b, a) { };
  // no-dupe-keys
  y = { foo: 1, foo: 2 };
  // no-duplicate-case
  switch (y.foo) { case 1: break; case 1: break; }
  // no-empty
  if (y.foo) { } 
  // no-empty-character-class
  /^a[]/;
  // no-ex-assign
  try { throw new Error(); } catch (e) { e = 1; }
  // no-extra-boolean-cast
  x.foo = !!!x.foo; // eslint-disable-line no-implicit-coercion
  // no-extra-parens
  x.foo = (x.foo * x.foo);
  // no-extra-semicolons
  function fail() { };
  // no-inner-declarations
  if (x) { function fail() { } }
  // no-invalid-regex
  RegExp('[');
  // no-irregular-whitespace
  // This has a non breaking space
  // no-negated-in-lhs
  if (!foo in x); // eslint-disable-line no-extra-semi,curly
  // no-obj-calls
  Math();
  // no-regex-spaces
  /foo  bar/;
  // no-sparse-arrays
  ['a', , 'c']
  // no-unexpected-multiline
  (1 || 2);
  // use-isnan
  NaN === NaN;
  // valid-jsdoc
  /** @param */ function invalid(a) { }
  // valid-typeof
  typeof x === 'invalid';
  // no-unsafe-finally
  try { } catch (e) { } finally { return true; } // eslint-disable-line no-empty
  // no-unreachable
  return true;
}

function bestPractice() {
  'use strict';

  // array-callback-return
  [ 1 ].map(function() { });
  // block-scoped-var
  if (isNaN(false)) { var y = false; } y = true;
  // curly
  if (isNaN(false)) isNan();
  // dot-location
  x.
  // dot-notation
  foo['bar'];
  // no-alert
  alert('no!');
  // no-caller
  arguments.callee(0);
  // no-eval
  eval('alert("no!");');
  // no-extra-bind
  (function no() { return false }).bind(x);
  // no-fallthrough
  switch (x) { case 1: isNaN(); case 2: break; }
  // no-floating-decimal
  x = 2.;
  // no-implicit-coercion
  x = !!x;
  // no-implied-eval
  setTimeout('alert("nope");', 1);
  // no-invalid-this
  x.foo = () => { this.a = 0; };
  // no-iterator
  x.__iterator__ = function() { isNaN(); }
  // no-labels
  A: while (isNaN(false)) { isNan(); }
  // no-lone-blocks
  { x = { }; }  
  // no-loop-func
  while (isNaN(false)) { x = function() { isNan(); }; }
  // no-magic-numbers
  x = 5 * x;
  // no-multi-spaces
  x =  5;
  // no-native-reassign
  String = 'no';
  // no-new-func
  x = new Function('a', 'return 0');
  // no-new-wrappers
  new String('no');
  // no-proto
  x.__proto__;
  // no-redeclare
  var x = 1;
  // no-return-assign
  function x(x) { return x = 2; } 
  // no-self-assign
  x = x;
  // no-self-compare
  x === x;
  // no-sequences
  1, isNaN();
  // no-unused-expressions
  1;
  // no-useless-call
  x.call(null, 1);
  // no-useless-concat
  x = 'a' + 'b';
  // no-useless-escape
  x = "\a";
  // no-void
  x = void 1;
  // wrap-iife
  (function() { isNaN(); }());
  // yoda
  if ('yoda' === x) { isNaN(); }
}

var funcStyle = function() { return isNaN; }

function variables() {
  // no-delete-var
  var x; delete x;
  // no-shadow
  function y() { var x; }
  // no-shadow-restricted-names
  var undefined = "foo";
  // no-undef
  z = 1;
  // no-undef-init
  var a = undefined; isNaN(a);
  // no-unused-vars
  var b;
  // no-use-before-define
  isNaN(c); var c;
  // array-bracket-spacing
  c = [ 'no '];
  // block-spacing
  function y() {return 'no'; }
  // camelcase
  var bad_name = 1; isNaN(bad_name);
  // comma-spacing
  c = ['no' ,'no'];
  // comma-style
  c = {
    a: 1
    , b: 2
  }
  // computed-property-spacing
  x[ 'a-b'] = 'no';
  // consistent-this
  var that = this; x = function() { return that; } //eslint-disable-line brace-style 
  // indent
  x;
  // key-spacing
  x = {'foo' :2};
  // keyword-spacing
  if(x){ return isNaN; }
  // line-break
  
  // lines-around-comment
  x;
  /* Block comment */
  if (true) { if (true) { if (true) { if (true) { if (true) { return isNaN; } } } } }
  // max-len
  x = 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1;
  // max-nested-callbacks
  x(function() { x(function() { x(function() { x(function() { }); }); }); });
  // max-params
  function d(j, k, l, m, n) { return j + k + l + m + n; } d();
  // max-statements, max-statements-per-line
  function e() { x = 1; x = 1; x = 1; x = 1; x = 1; x = 1; x = 1; x = 1; x = 1; x = 1; x = 1; x = 1; x = 1; x = 1; x = 1; x = 1; }
  // new-cap, new-parens
  d = new e;
  // newline-per-chained-call
  d.foo().bar();
  // no-array-constructor
  x = new Array();
  // no-continue
  while (x) { if (x) { continue; } }
  // no-inline-comments
  x = 1; // no
  // no-lonely-if
  if (x) { isNan; } else { if (d) { isNaN; } }
  // no-multiple-empty-lines



  // no-negated-condition
  if (!x) { isNaN; } else { isNaN; }
  // no-nested-ternary
  d = x ? d : x ? d : null;
  // no-new-object
  x = new Object();
  // no-spaced-func
  x ();
  // no-unneeded-ternary
  d = x ? true : false;
  // no-whitespace-before-property
  d = x. foo;
  // object-curly-spacing
  d = {'x': 1};
  // object-property-newline
  d = { 'x': 1, 'y': 1 };
  // one-var-declarationer-per-line
  var t, s; 
  // operator-linebreak
  d = t
    + s;
  // quote-props
  d = { x: 1 };  
  // quotes
  d = "x"; d = `${x}`;
  // semi
  x = 1
  // semi-spacing
  x = 1 ;d = 1;
  // space-before-blocks, space-before-function-param
  function d (){ return isNaN; }
  // space-in-parens, space-infix-ops
  x = ( 1+1 );
  // space-unary-ops
  x = typeof!x;
  //spaced-comment

  // wrap-regex
  x = /foo/.test('bar');
  // padded-blocks

}

function es6() {
  'use strict';

  // arrow-body-style, arrow-parens, arrow-spacing
  let x = a=>a;
  // constructor-super
  class A { constructor() { } }; class B extends A { constructor() { } };
  // generator-star-spacing
  function *generator() { yield 1; }
  // no-class-assign
  A = 0;
  // no-confusing-arrow
  x = (a) => isNaN(a) ? 1 : 0;
  // no-const-assign
  const y = 0; y = 1;
  // no-dupe-class-members
  class C { a() { return isNaN; } a() { return isNaN(); } }
  // no-this-before-super
  class D extends C { constructor() { this.a = 1; super(); } }  
  // no-useless-computed-key
  x = { ['a']: 0 };
  // object-shorthand
  y = { x };
  // prefer-const
  let t = 0;
  // template-curly-spacing
  x = `${ x }`;  
  // yield-star-spacing
  function* gen() { yield *generator; }
}

















