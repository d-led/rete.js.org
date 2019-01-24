(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-35ed"],{"04bd":function(t,n,e){"use strict";var o=e("b81b"),a=e.n(o);a.a},b81b:function(t,n,e){},ba84:function(t,n,e){},bd47:function(t,n,e){"use strict";e.r(n);var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"nodes"},[e("h1",[t._v("Узлы")]),e("Node"),e("p",[t._v("Все узлы могут содержать имя, входы, выходы и контролы.")]),e("p",[t._v("Имя должно идентифицировать узел и однозначно указывать его предназначение.")]),e("p",[t._v(" Входы и выходы должны быть расположены слева и справа от узла соответственно (для кастомных узлов могут быть исключения).\nОни представлены сокетом и могут иметь имена. Все выходы могут иметь неограниченное количество соединений. \nПо умолчанию входы могут иметь только одно соединение. Вы можете изменить это как для входов, так и для выходов")]),e("p",[t._v("Вход с неограниченным количествой подключений, выход с разрешенным только одним соединением:")]),e("Code",[t._v("new Rete.Input ('num', 'Number', numSocket, true);\nnew Rete.Output ('num', 'Number', numSocket, false);")]),e("p",[t._v(" Контролы могут располагаться либо непосредственно на самом узле, либо прикреплены к конкретному входу. \nФактически, местоположение в первом случае определяется в стандартном шаблоне плагина для рендеринга. \nВо втором случае Контрол отображается, когда на входе нет соединения.\nЭто необходимо для гарантии того, что Контрол отвечает за предоставление входных данных, когда они не передаются с другого узла.")]),e("p",[t._v("Давайте создадим узел (исключительно для создания в Билдере)")]),e("Code",{attrs:{source:"createNode"}})],1)},a=[],s=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"node",on:{mouseover:function(n){t.always=!0},mouseleave:function(n){t.always=!1}}},[e("Tooltip",{staticClass:"title",attrs:{placement:"top",always:t.always,offset:"12px"},nativeOn:{click:function(n){t.go("nodes")}}},[t._v("Lorem Ipsum"),e("template",{slot:"content"},[t._v("Узел")])],2),e("div",{staticClass:"output"},[e("div",{staticClass:"title"},[t._v("dolor")]),e("Tooltip",{staticClass:"socket",attrs:{placement:"right",always:t.always},nativeOn:{click:function(n){n.stopPropagation(),t.go("sockets")}}},[e("template",{slot:"content"},[t._v("Сокет выхода")])],2)],1),e("div",{staticClass:"control"},[e("Tooltip",{staticClass:"input",attrs:{placement:"right",always:t.always},nativeOn:{click:function(n){n.stopPropagation(),t.go("controls")}}},[e("template",{slot:"content"},[t._v("Контрол")])],2)],1),e("div",{staticClass:"input"},[e("Tooltip",{staticClass:"socket",attrs:{placement:"left",always:t.always},nativeOn:{click:function(n){n.stopPropagation(),t.go("sockets")}}},[e("template",{slot:"content"},[t._v("Сокет входа")])],2),e("div",{staticClass:"title"},[t._v("sit amet"),e("template",{slot:"content"},[t._v("Название входа")])],2)],1)],1)},i=[],u={data:function(){return{always:!1}},methods:{go:function(t){this.$router.push("/docs/".concat(t))}},mounted:function(){var t=this;setTimeout(function(){return t.always=!0},500)}},c=u,l=(e("04bd"),e("2877")),r=Object(l["a"])(c,s,i,!1,null,"7cedefd2",null);r.options.__file="Node.vue";var p=r.exports,d={components:{Node:p}},m=d,v=(e("f15f"),function(t){t.options.code||(t.options.code={}),t.options.code["createNode"]="var in1 = new Rete.Input('num1', 'Number', numSocket);\nvar in2 = new Rete.Input('num2', 'Number', numSocket, true); // can have multiple connections\nvar out = new Rete.Output('Number', numSocket); // the third parameter must be false to deny multiple connections\n\nvar numControl = new NumControl();\n\nvar numNode = new Rete.Node('Add');\nnumNode.addInput(in1);\nnumNode.addInput(in2);\nnumNode.addControl(numControl);\nnumNode.addOutput(out);"}),f=v,w=Object(l["a"])(m,o,a,!1,null,"d8ab1782",null);"function"===typeof f&&f(w),w.options.__file="index.vue";n["default"]=w.exports},f15f:function(t,n,e){"use strict";var o=e("ba84"),a=e.n(o);a.a}}]);
//# sourceMappingURL=chunk-35ed.3b585393.js.map