(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["15c9"],{"15c9":function(n,o,e){"use strict";e.r(o);var t=function(){var n=this,o=n.$createElement,e=n._self._c||o;return e("div",{staticClass:"plugin"},[e("Code",{attrs:{source:"install"}}),e("p",[n._v("Например, схема с такими узлами")]),e("Code",{attrs:{source:"visualize"}}),e("p",[n._v("сгенерирует следующий исходный код")]),e("Code",{attrs:{source:"example"}})],1)},d=[],s=e("2877"),i=function(n){n.options.code||(n.options.code={}),n.options.code["install"]="import CodePlugin from 'rete-code-plugin';\n\nclass NumComponent extends Rete.Component {\n    // ...\n\n    code(node, inputs, add) { // 'node' param is similar to worker's \"node\"\n        // \"inputs\" contains variables name\n        add('console.log(\"hello!\")') // add code line\n        add('num', node.data.num); // add variable with value \"node.data.num\"\n    }\n}\n\nconst sourceCode = await CodePlugin.generate(engine, editor.toJSON());"},u=i,a=function(n){n.options.code||(n.options.code={}),n.options.code["visualize"]="Number 6\n        \\ Add 11 -- Add 16\n        /         /\nNumber 5 ---------"},c=a,l=function(n){n.options.code||(n.options.code={}),n.options.code["example"]='console.log("hello!");\nconst number1num = 5;\nconsole.log("hello!");\nconst number3num = 6;\nconst add4num = number3num + number1num;\nconst add2num = add4num + number1num;'},r=l,p={},m=Object(s["a"])(p,t,d,!1,null,null,null);"function"===typeof u&&u(m),"function"===typeof c&&c(m),"function"===typeof r&&r(m),m.options.__file="Code.vue";o["default"]=m.exports}}]);
//# sourceMappingURL=15c9.f1c854e0.js.map