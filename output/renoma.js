(function(I){function x(b,a){this.w=b;this.B=a;this.parent=v.W;this.children=[]}function J(b,a,c){var e=new T(0,0,0),f,d,g=b.B.width/2;b=b.B.height/2;var q=a.B.width/2,y=a.B.height/2;switch(c[1]){case 0:e.y=b+y;f=new h(Math.min(g,q),b,0,1);d=new h(Math.max(-g,-q),b,0,1);break;case 1:e.y=-(b+y);f=new h(Math.max(-g,-q),-b,0,1);d=new h(Math.min(g,q),-b,0,1);break;case 2:e.x=g+q;f=new h(g,Math.max(-b,-y),0,1);d=new h(g,Math.min(b,y),0,1);break;case 3:e.x=-(g+q),f=new h(-g,Math.min(b,y),0,1),d=new h(-g,
Math.max(-b,-y),0,1)}this.direction=c;this.transform=m.Za(e);this.ua=a;this.ia=z.G(f,d)}function A(){this.U=[];this.Ma(-1)}function t(b,a){this.width=b;this.height=a;this.wa=[]}function K(){this.frames=0}function L(){}function M(b){this.context=b}function m(){}function da(){}function l(){}function B(b){this.vb=b;this.message=String(b);Error.captureStackTrace&&Error.captureStackTrace(this,B)}function h(b,a,c,e){this.x=b;this.y=a;this.z=c;this.a=e}function T(b,a,c){this.x=b;this.y=a;this.z=c}function N(b,
a){this.x=b;this.y=a}function r(b,a,c,e,f,d,g,q,y,h,ka,k,l,m,n,p){this.c=b;this.h=a;this.i=c;this.b=e;this.f=f;this.m11=d;this.m21=g;this.m31=q;this.g=y;this.m12=h;this.m22=ka;this.m32=k;this.j=l;this.m13=m;this.m23=n;this.m33=p}function U(){}function O(b,a,c,e){this.x=b;this.y=a;this.width=c;this.height=e}function C(){this.M={};this.M.ba={}}function G(){}function n(b,a,c,e,f){null==f&&(f=-1);this.left=b;this.key=a;this.value=c;this.right=e;this.u=-1==f?(function(a){a=a.left;return null==a?0:a.u}(this)>
function(a){a=a.right;return null==a?0:a.u}(this)?function(a){a=a.left;return null==a?0:a.u}(this):function(a){a=a.right;return null==a?0:a.u}(this))+1:f}function P(){}function V(b){var a=this;this.id=setInterval(function(){a.ka()},b)}function ea(){}function W(b){this.Pa=D.A(b)}function E(b,a){this.gb=b==k.J||b==k.F;this.xb=b==k.O||b==k.J;this.D=[];this.D.push({s:a.start,type:p.S});this.D.push({s:a.stop,type:p.S})}function D(b){this.w=b;this.ma=[];this.X=new C}function X(b,a,c){this.v=new h(b,a,0,
1);this.mb=c}function Y(b,a){this.start=b;this.stop=a}function Q(b){H.call(this,new X(0,0,.3),b,5)}function H(b,a,c){this.C=b;this.w=a;this.speed=c}function Z(b,a,c,e){this.na=b;this.controller=a;this.Ra=c;this.qb=e;this.N=new Q(b.Ba)}function R(){}function S(){}function aa(){this.V=new ba}function ba(){this.y=this.x=0;this.za=.1}function u(b){this.lb=b}function ha(){}function F(){}function fa(){}function ca(){}function w(){return l.A(this,"")}function ga(b,a){function c(){}c.prototype=b;var e=new c,
f;for(f in a)e[f]=a[f];a.toString!==Object.prototype.toString&&(e.toString=a.toString);return e}ca.l=!0;ca.Ja=function(b){return{ya:0,sa:b,R:function(){return this.ya<this.sa.length},next:function(){return this.sa[this.ya++]}}};fa.l=!0;fa.Xa=function(){var b=L.Wa();b.ga();var a=new V(33);a.ka=function(){b.update();b.ob()};a.ka()};Math.l=!0;F.l=!0;F.compare=function(b,a){return b==a?0:b>a?1:-1};F.Ia=function(b){return null!=b&&null!=b.o};ha.l=!0;var v={T:!0,pa:["None","Some"],W:["None",0]};v.W.toString=
w;v.W.o=v;v.oa=function(b){b=["Some",1,b];b.o=v;b.toString=w;return b};u.l=!0;u.P=[ha];u.H=function(){return new u(v.W)};u.L=function(b){return new u(v.oa(b))};u.prototype={raw:function(){return this.lb},m:u};ba.l=!0;ba.prototype={Na:function(b){return this.x=b},Oa:function(b){return this.y=b},ea:function(){return this.Aa(this.normalize(this.x))},fa:function(){return this.Aa(this.normalize(this.y))},Aa:function(b){b=b-this.za*da.sign(b);return b/=1-this.za},normalize:function(b){var a=this.x*this.x+
this.y*this.y;return 1>=a?b:b/Math.sqrt(a)},m:ba};aa.l=!0;aa.prototype={m:aa};S.l=!0;S.prototype={m:S};R.l=!0;R.P=[S];R.prototype={m:R};Z.l=!0;Z.prototype={ga:function(){this.Ra.ga(this);this.Qa();return this},update:function(){this.Ra.ja(this,.033);return this},ob:function(){this.qb.ja(this,.033);return this},ib:function(){this.slice.w!=this.N.w&&this.Qa()},Qa:function(){this.slice=x.L(this.na,this.N.w);this.Sa=new W(this.slice)},m:Z};H.l=!0;H.prototype={move:function(b,a){this.C.v.x+=b.ea()*a*this.speed;
this.C.v.y+=b.fa()*a*this.speed},ea:function(){return this.C.v.x},fa:function(){return this.C.v.y},m:H};Q.l=!0;Q.ca=H;Q.prototype=ga(H.prototype,{m:Q});Y.l=!0;Y.prototype={m:Y};var z={l:!0,G:function(b,a){return new Y(b,a)}};X.l=!0;X.prototype={wb:function(){return new N(this.v.x,this.v.y)},m:X};D.l=!0;D.A=function(b){var a=new D(b.w);a.Ka(b,m.H());return a};D.prototype={Ka:function(b,a){this.Y=a;this.floor=b.eb(a);var c=b.fb(a),e=b.parent;switch(e[1]){case 1:var f=e[2];c.get(f.direction).ra(function(b){var c=
f.ia;return z.G(function(){var b=c.start;return new h(a.c*b.x+a.h*b.y+a.i*b.z+a.b*b.a,a.f*b.x+a.m11*b.y+a.m21*b.z+a.m31*b.a,a.g*b.x+a.m12*b.y+a.m22*b.z+a.m32*b.a,a.j*b.x+a.m13*b.y+a.m23*b.z+a.m33*b.a)}(b),function(){var b=c.stop;return new h(a.c*b.x+a.h*b.y+a.i*b.z+a.b*b.a,a.f*b.x+a.m11*b.y+a.m21*b.z+a.m31*b.a,a.g*b.x+a.m12*b.y+a.m22*b.z+a.m32*b.a,a.j*b.x+a.m13*b.y+a.m23*b.z+a.m33*b.a)}(b))}(this))}for(var e=0,d=b.children;e<d.length;){var g=d[e];++e;c.get(g.direction).ra(function(b){var c=g.ia;return z.G(function(){var b=
c.start;return new h(a.c*b.x+a.h*b.y+a.i*b.z+a.b*b.a,a.f*b.x+a.m11*b.y+a.m21*b.z+a.m31*b.a,a.g*b.x+a.m12*b.y+a.m22*b.z+a.m32*b.a,a.j*b.x+a.m13*b.y+a.m23*b.z+a.m33*b.a)}(b),function(){var b=c.stop;return new h(a.c*b.x+a.h*b.y+a.i*b.z+a.b*b.a,a.f*b.x+a.m11*b.y+a.m21*b.z+a.m31*b.a,a.g*b.x+a.m12*b.y+a.m22*b.z+a.m32*b.a,a.j*b.x+a.m13*b.y+a.m23*b.z+a.m33*b.a)}(b))}(this));var q=new D(g.ua.w);this.X.set(g.ia,q);q.Ka(g.ua,function(){var b=g.transform;return new r(a.c*b.c+a.h*b.f+a.i*b.g+a.b*b.j,a.c*b.h+a.h*
b.m11+a.i*b.m12+a.b*b.m13,a.c*b.i+a.h*b.m21+a.i*b.m22+a.b*b.m23,a.c*b.b+a.h*b.m31+a.i*b.m32+a.b*b.m33,a.f*b.c+a.m11*b.f+a.m21*b.g+a.m31*b.j,a.f*b.h+a.m11*b.m11+a.m21*b.m12+a.m31*b.m13,a.f*b.i+a.m11*b.m21+a.m21*b.m22+a.m31*b.m23,a.f*b.b+a.m11*b.m31+a.m21*b.m32+a.m31*b.m33,a.g*b.c+a.m12*b.f+a.m22*b.g+a.m32*b.j,a.g*b.h+a.m12*b.m11+a.m22*b.m12+a.m32*b.m13,a.g*b.i+a.m12*b.m21+a.m22*b.m22+a.m32*b.m23,a.g*b.b+a.m12*b.m31+a.m22*b.m32+a.m32*b.m33,a.j*b.c+a.m13*b.f+a.m23*b.g+a.m33*b.j,a.j*b.h+a.m13*b.m11+a.m23*
b.m12+a.m33*b.m13,a.j*b.i+a.m13*b.m21+a.m23*b.m22+a.m33*b.m23,a.j*b.b+a.m13*b.m31+a.m23*b.m32+a.m33*b.m33)}(this))}for(c=c.iterator();c.R();)e=c.next(),this.ma=this.ma.concat(e.cb())},m:D};var p={T:!0,pa:["WallPoint","StartPortal","StopPortal"],S:["WallPoint",0]};p.S.toString=w;p.S.o=p;p.$=["StartPortal",1];p.$.toString=w;p.$.o=p;p.aa=["StopPortal",2];p.aa.toString=w;p.aa.o=p;E.l=!0;E.prototype={ra:function(b){this.D.push({s:b.start,type:p.$});this.D.push({s:b.stop,type:p.aa})},cb:function(){this.D.sort(this.gb?
function(a,b){return a.s.x<b.s.x?-1:a.s.x>b.s.x?1:0}:function(a,b){return a.s.y<b.s.y?-1:a.s.y>b.s.y?1:0});var b=[],a=!1,c=0;try{for(;c<this.D.length;){var e=this.D[c];switch(e.type[1]){case 0:var f=e.s;a||b.push(f);c++;throw"__break__";case 1:a=!a;break;case 2:a=!a}c++}}catch(h){if("__break__"!=h)throw h;}e=p.S;try{for(;c<this.D.length;){var d=this.D[c],g=d.type;switch(d.type[1]){case 0:var q=d.s;a||b.push(q);throw"__break__";default:var k=d.s;g==e?I.log("Overlapping portals!"):(a=!a,b.push(k))}c++}}catch(h){if("__break__"!=
h)throw h;}this.xb&&b.reverse();0!=b.length%2&&I.log("we have an odd number of stops");a=[];c=0;for(d=b.length/2|0;c<d;)g=c++,a.push(z.G(b[2*g],b[2*g+1]));return a},m:E};W.l=!0;W.prototype={m:W};ea.l=!0;V.l=!0;V.prototype={ka:function(){},m:V};P.l=!0;P.prototype={set:function(b,a){this.root=this.la(b,a,this.root)},get:function(b){for(var a=this.root;null!=a;){var c=this.compare(b,a.key);if(0==c)return a.value;a=0>c?a.left:a.right}return null},iterator:function(){var b=[];this.ha(this.root,b);return ca.Ja(b)},
la:function(b,a,c){if(null==c)return new n(null,b,a,null);var e=this.compare(b,c.key);if(0==e)return new n(c.left,b,a,c.right,null==c?0:c.u);if(0>e)return b=this.la(b,a,c.left),this.ta(b,c.key,c.value,c.right);b=this.la(b,a,c.right);return this.ta(c.left,c.key,c.value,b)},ha:function(b,a){null!=b&&(this.ha(b.left,a),a.push(b.value),this.ha(b.right,a))},ta:function(b,a,c,e){var f;null==b?f=0:f=b.u;var d;null==e?d=0:d=e.u;return f>d+2?function(){var a=b.left;return null==a?0:a.u}(this)>=function(){var a=
b.right;return null==a?0:a.u}(this)?new n(b.left,b.key,b.value,new n(b.right,a,c,e)):new n(new n(b.left,b.key,b.value,b.right.left),b.right.key,b.right.value,new n(b.right.right,a,c,e)):d>f+2?function(){var a=e.right;return null==a?0:a.u}(this)>function(){var a=e.left;return null==a?0:a.u}(this)?new n(new n(b,a,c,e.left),e.key,e.value,e.right):new n(new n(b,a,c,e.left.left),e.left.key,e.left.value,new n(e.left.right,e.key,e.value,e.right)):new n(b,a,c,e,(f>d?f:d)+1)},compare:function(b,a){return F.compare(b,
a)},m:P};n.l=!0;n.prototype={m:n};G.l=!0;G.P=[ea];G.ca=P;G.prototype=ga(P.prototype,{compare:function(b,a){var c=b[1]-a[1];if(0!=c)return c;var c=b.slice(2),e=a.slice(2);return 0==c.length&&0==e.length?0:this.va(c,e)},va:function(b,a){var c=b.length-a.length;if(0!=c)return c;for(var c=0,e=b.length;c<e;){var f=c++,f=this.bb(b[f],a[f]);if(0!=f)return f}return 0},bb:function(b,a){return F.Ia(b)&&F.Ia(a)?this.compare(b,a):b instanceof Array&&null==b.o&&a instanceof Array&&null==a.o?this.va(b,a):F.compare(b,
a)},m:G});C.l=!0;C.P=[ea];C.prototype={set:function(b,a){var c=b.qa||(b.qa=++C.Ta);this.M[c]=a;this.M.ba[c]=b},keys:function(){var b=[],a;for(a in this.M.ba)this.M.hasOwnProperty(a)&&b.push(this.M.ba[a]);return ca.Ja(b)},iterator:function(){return{nb:this.M,Ga:this.keys(),R:function(){return this.Ga.R()},next:function(){var b=this.Ga.next();return this.nb[b.qa]}}},m:C};O.l=!0;O.prototype={xa:function(b){return U.Fa(this.x,this.width,b.x)&&U.Fa(this.y,this.height,b.y)},Da:function(b){var a=new N(this.x,
this.y);switch(b){case 0:break;case 1:a.x+=this.width;break;case 2:a.x+=this.width;a.y+=this.height;break;case 3:a.y+=this.height;break;default:throw new B("Invalid vertex index.");}return a},m:O};U.l=!0;U.Fa=function(b,a,c){return c>=b&&c<=b+a};r.l=!0;r.prototype={m:r};N.l=!0;N.prototype={m:N};T.l=!0;T.prototype={m:T};h.l=!0;h.prototype={m:h};B.l=!0;B.ca=Error;B.prototype=ga(Error.prototype,{m:B});l.l=!0;l.Va=function(b){if(b instanceof Array&&null==b.o)return Array;var a=b.m;if(null!=a)return a;
b=l.Ca(b);return null!=b?l.sb(b):null};l.A=function(b,a){if(null==b)return"null";if(5<=a.length)return"<...>";var c=typeof b;"function"==c&&(b.l||b.T)&&(c="object");switch(c){case "object":if(b instanceof Array){if(b.o){if(2==b.length)return b[0];c=b[0]+"(";a+="\t";for(var e=2,f=b.length;e<f;){var d=e++;2!=d?c+=","+l.A(b[d],a):c+=l.A(b[d],a)}return c+")"}c=b.length;e="[";a+="\t";for(f=0;f<c;)d=f++,e+=(0<d?",":"")+l.A(b[d],a);return e+"]"}try{e=b.toString}catch(g){return g instanceof B&&(g=g.vb),"???"}if(null!=
e&&e!=Object.toString&&"function"==typeof e&&(c=b.toString(),"[object Object]"!=c))return c;c=null;e="{\n";a+="\t";f=null!=b.hasOwnProperty;for(c in b)f&&!b.hasOwnProperty(c)||"prototype"==c||"__class__"==c||"__super__"==c||"__interfaces__"==c||"__properties__"==c||(2!=e.length&&(e+=", \n"),e+=a+c+" : "+l.A(b[c],a));a=a.substring(1);return e+("\n"+a+"}");case "function":return"<function>";case "string":return b;default:return String(b)}};l.L=function(b,a){if(null==b)return!1;if(b==a)return!0;var c=
b.P;if(null!=c)for(var e=0,f=c.length;e<f;){var d=e++,d=c[d];if(d==a||l.L(d,a))return!0}return l.L(b.ca,a)};l.kb=function(b){var a=KeyboardEvent;if(null==a)return!1;switch(a){case la:return(b|0)===b;case ia:return"number"==typeof b;case ja:return"boolean"==typeof b;case String:return"string"==typeof b;case Array:return b instanceof Array&&null==b.o;case ma:return!0;default:if(null!=b)if("function"==typeof a){if(b instanceof a||l.L(l.Va(b),a))return!0}else{if("object"==typeof a&&l.rb(a)&&b instanceof
a)return!0}else return!1;return a==na&&null!=b.l||a==oa&&null!=b.T?!0:b.o==a}};l.Ca=function(b){b=l.ub.call(b).slice(8,-1);return"Object"==b||"Function"==b||"Math"==b||"JSON"==b?null:b};l.rb=function(b){return null!=l.Ca(b)};l.sb=function(b){return Function("return typeof "+b+' != "undefined" ? '+b+" : null")()};da.l=!0;da.sign=function(b){return 0>b?-1:0<b?1:0};m.l=!0;m.H=function(){var b=new r(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);return new r(b.c,b.h,b.i,b.b,b.f,b.m11,b.m21,b.m31,b.g,b.m12,b.m22,b.m32,
b.j,b.m13,b.m23,b.m33)};m.da=function(b,a,c){var e=m.H();e.b=b;e.m31=a;e.m32=c;return e};m.Za=function(b){return m.da(b.x,b.y,b.z)};m.Ua=function(){var b=m.H();b.c=10;b.m11=10;b.m22=10;return b};m.Ya=function(){var b=m.H();b.c=1;b.m11=-1;b.m22=0;return b};m.$a=function(b,a){var c=a.Da(0),e=a.Da(2),c=new h(c.x,c.y,0,1),c=new h(b.c*c.x+b.h*c.y+b.i*c.z+b.b*c.a,b.f*c.x+b.m11*c.y+b.m21*c.z+b.m31*c.a,b.g*c.x+b.m12*c.y+b.m22*c.z+b.m32*c.a,b.j*c.x+b.m13*c.y+b.m23*c.z+b.m33*c.a),e=new h(e.x,e.y,0,1),e=new h(b.c*
e.x+b.h*e.y+b.i*e.z+b.b*e.a,b.f*e.x+b.m11*e.y+b.m21*e.z+b.m31*e.a,b.g*e.x+b.m12*e.y+b.m22*e.z+b.m32*e.a,b.j*e.x+b.m13*e.y+b.m23*e.z+b.m33*e.a);return new O(c.x,c.y,e.x-c.x,e.y-c.y)};M.l=!0;M.P=[S];M.prototype={ja:function(b){var a;a=m.da(427,240,0);var c=m.Ya();a=new r(a.c*c.c+a.h*c.f+a.i*c.g+a.b*c.j,a.c*c.h+a.h*c.m11+a.i*c.m12+a.b*c.m13,a.c*c.i+a.h*c.m21+a.i*c.m22+a.b*c.m23,a.c*c.b+a.h*c.m31+a.i*c.m32+a.b*c.m33,a.f*c.c+a.m11*c.f+a.m21*c.g+a.m31*c.j,a.f*c.h+a.m11*c.m11+a.m21*c.m12+a.m31*c.m13,a.f*
c.i+a.m11*c.m21+a.m21*c.m22+a.m31*c.m23,a.f*c.b+a.m11*c.m31+a.m21*c.m32+a.m31*c.m33,a.g*c.c+a.m12*c.f+a.m22*c.g+a.m32*c.j,a.g*c.h+a.m12*c.m11+a.m22*c.m12+a.m32*c.m13,a.g*c.i+a.m12*c.m21+a.m22*c.m22+a.m32*c.m23,a.g*c.b+a.m12*c.m31+a.m22*c.m32+a.m32*c.m33,a.j*c.c+a.m13*c.f+a.m23*c.g+a.m33*c.j,a.j*c.h+a.m13*c.m11+a.m23*c.m12+a.m33*c.m13,a.j*c.i+a.m13*c.m21+a.m23*c.m22+a.m33*c.m23,a.j*c.b+a.m13*c.m31+a.m23*c.m32+a.m33*c.m33);c=m.Ua();a=new r(a.c*c.c+a.h*c.f+a.i*c.g+a.b*c.j,a.c*c.h+a.h*c.m11+a.i*c.m12+
a.b*c.m13,a.c*c.i+a.h*c.m21+a.i*c.m22+a.b*c.m23,a.c*c.b+a.h*c.m31+a.i*c.m32+a.b*c.m33,a.f*c.c+a.m11*c.f+a.m21*c.g+a.m31*c.j,a.f*c.h+a.m11*c.m11+a.m21*c.m12+a.m31*c.m13,a.f*c.i+a.m11*c.m21+a.m21*c.m22+a.m31*c.m23,a.f*c.b+a.m11*c.m31+a.m21*c.m32+a.m31*c.m33,a.g*c.c+a.m12*c.f+a.m22*c.g+a.m32*c.j,a.g*c.h+a.m12*c.m11+a.m22*c.m12+a.m32*c.m13,a.g*c.i+a.m12*c.m21+a.m22*c.m22+a.m32*c.m23,a.g*c.b+a.m12*c.m31+a.m22*c.m32+a.m32*c.m33,a.j*c.c+a.m13*c.f+a.m23*c.g+a.m33*c.j,a.j*c.h+a.m13*c.m11+a.m23*c.m12+a.m33*
c.m13,a.j*c.i+a.m13*c.m21+a.m23*c.m22+a.m33*c.m23,a.j*c.b+a.m13*c.m31+a.m23*c.m32+a.m33*c.m33);c=m.da(-b.N.ea(),-b.N.fa(),0);a=new r(a.c*c.c+a.h*c.f+a.i*c.g+a.b*c.j,a.c*c.h+a.h*c.m11+a.i*c.m12+a.b*c.m13,a.c*c.i+a.h*c.m21+a.i*c.m22+a.b*c.m23,a.c*c.b+a.h*c.m31+a.i*c.m32+a.b*c.m33,a.f*c.c+a.m11*c.f+a.m21*c.g+a.m31*c.j,a.f*c.h+a.m11*c.m11+a.m21*c.m12+a.m31*c.m13,a.f*c.i+a.m11*c.m21+a.m21*c.m22+a.m31*c.m23,a.f*c.b+a.m11*c.m31+a.m21*c.m32+a.m31*c.m33,a.g*c.c+a.m12*c.f+a.m22*c.g+a.m32*c.j,a.g*c.h+a.m12*
c.m11+a.m22*c.m12+a.m32*c.m13,a.g*c.i+a.m12*c.m21+a.m22*c.m22+a.m32*c.m23,a.g*c.b+a.m12*c.m31+a.m22*c.m32+a.m32*c.m33,a.j*c.c+a.m13*c.f+a.m23*c.g+a.m33*c.j,a.j*c.h+a.m13*c.m11+a.m23*c.m12+a.m33*c.m13,a.j*c.i+a.m13*c.m21+a.m23*c.m22+a.m33*c.m23,a.j*c.b+a.m13*c.m31+a.m23*c.m32+a.m33*c.m33);this.context.clearRect(0,0,854,480);this.La(b.Sa.Pa,a,b.N)},La:function(b,a,c){this.context.strokeStyle="#000000";this.context.beginPath();for(var e=0,f=b.ma;e<f.length;){var d=f[e];++e;var g;g=d.start;g=new h(a.c*
g.x+a.h*g.y+a.i*g.z+a.b*g.a,a.f*g.x+a.m11*g.y+a.m21*g.z+a.m31*g.a,a.g*g.x+a.m12*g.y+a.m22*g.z+a.m32*g.a,a.j*g.x+a.m13*g.y+a.m23*g.z+a.m33*g.a);d=d.stop;d=new h(a.c*d.x+a.h*d.y+a.i*d.z+a.b*d.a,a.f*d.x+a.m11*d.y+a.m21*d.z+a.m31*d.a,a.g*d.x+a.m12*d.y+a.m22*d.z+a.m32*d.a,a.j*d.x+a.m13*d.y+a.m23*d.z+a.m33*d.a);this.context.moveTo(g.x,g.y);this.context.lineTo(d.x,d.y)}this.context.stroke();this.context.strokeStyle="#00FF00";this.context.beginPath();for(e=b.X.keys();e.R();)g=e.next(),f=g.start,f=new h(a.c*
f.x+a.h*f.y+a.i*f.z+a.b*f.a,a.f*f.x+a.m11*f.y+a.m21*f.z+a.m31*f.a,a.g*f.x+a.m12*f.y+a.m22*f.z+a.m32*f.a,a.j*f.x+a.m13*f.y+a.m23*f.z+a.m33*f.a),g=g.stop,g=new h(a.c*g.x+a.h*g.y+a.i*g.z+a.b*g.a,a.f*g.x+a.m11*g.y+a.m21*g.z+a.m31*g.a,a.g*g.x+a.m12*g.y+a.m22*g.z+a.m32*g.a,a.j*g.x+a.m13*g.y+a.m23*g.z+a.m33*g.a),this.context.moveTo(f.x,f.y),this.context.lineTo(g.x,g.y);this.context.stroke();c.w==b.w&&this.pb(c,function(){var c=b.Y;return new r(a.c*c.c+a.h*c.f+a.i*c.g+a.b*c.j,a.c*c.h+a.h*c.m11+a.i*c.m12+
a.b*c.m13,a.c*c.i+a.h*c.m21+a.i*c.m22+a.b*c.m23,a.c*c.b+a.h*c.m31+a.i*c.m32+a.b*c.m33,a.f*c.c+a.m11*c.f+a.m21*c.g+a.m31*c.j,a.f*c.h+a.m11*c.m11+a.m21*c.m12+a.m31*c.m13,a.f*c.i+a.m11*c.m21+a.m21*c.m22+a.m31*c.m23,a.f*c.b+a.m11*c.m31+a.m21*c.m32+a.m31*c.m33,a.g*c.c+a.m12*c.f+a.m22*c.g+a.m32*c.j,a.g*c.h+a.m12*c.m11+a.m22*c.m12+a.m32*c.m13,a.g*c.i+a.m12*c.m21+a.m22*c.m22+a.m32*c.m23,a.g*c.b+a.m12*c.m31+a.m22*c.m32+a.m32*c.m33,a.j*c.c+a.m13*c.f+a.m23*c.g+a.m33*c.j,a.j*c.h+a.m13*c.m11+a.m23*c.m12+a.m33*
c.m13,a.j*c.i+a.m13*c.m21+a.m23*c.m22+a.m33*c.m23,a.j*c.b+a.m13*c.m31+a.m23*c.m32+a.m33*c.m33)}(this));for(e=b.X.iterator();e.R();)f=e.next(),this.La(f,function(){var c=b.Y;return new r(a.c*c.c+a.h*c.f+a.i*c.g+a.b*c.j,a.c*c.h+a.h*c.m11+a.i*c.m12+a.b*c.m13,a.c*c.i+a.h*c.m21+a.i*c.m22+a.b*c.m23,a.c*c.b+a.h*c.m31+a.i*c.m32+a.b*c.m33,a.f*c.c+a.m11*c.f+a.m21*c.g+a.m31*c.j,a.f*c.h+a.m11*c.m11+a.m21*c.m12+a.m31*c.m13,a.f*c.i+a.m11*c.m21+a.m21*c.m22+a.m31*c.m23,a.f*c.b+a.m11*c.m31+a.m21*c.m32+a.m31*c.m33,
a.g*c.c+a.m12*c.f+a.m22*c.g+a.m32*c.j,a.g*c.h+a.m12*c.m11+a.m22*c.m12+a.m32*c.m13,a.g*c.i+a.m12*c.m21+a.m22*c.m22+a.m32*c.m23,a.g*c.b+a.m12*c.m31+a.m22*c.m32+a.m32*c.m33,a.j*c.c+a.m13*c.f+a.m23*c.g+a.m33*c.j,a.j*c.h+a.m13*c.m11+a.m23*c.m12+a.m33*c.m13,a.j*c.i+a.m13*c.m21+a.m23*c.m22+a.m33*c.m23,a.j*c.b+a.m13*c.m31+a.m23*c.m32+a.m33*c.m33)}(this),c)},pb:function(b,a){var c=b.C,e;e=c.v;e=new h(e.x,e.y,e.z,e.a);var f;f=e;f=new h(f.x,f.y,f.z,f.a);f.x+=c.mb;e=new h(a.c*e.x+a.h*e.y+a.i*e.z+a.b*e.a,a.f*
e.x+a.m11*e.y+a.m21*e.z+a.m31*e.a,a.g*e.x+a.m12*e.y+a.m22*e.z+a.m32*e.a,a.j*e.x+a.m13*e.y+a.m23*e.z+a.m33*e.a);c=f=new h(a.c*f.x+a.h*f.y+a.i*f.z+a.b*f.a,a.f*f.x+a.m11*f.y+a.m21*f.z+a.m31*f.a,a.g*f.x+a.m12*f.y+a.m22*f.z+a.m32*f.a,a.j*f.x+a.m13*f.y+a.m23*f.z+a.m33*f.a);c=new h(c.x,c.y,c.z,c.a);c.x-=e.x;c.y-=e.y;c.z-=e.z;c.a-=e.a;c=Math.sqrt(c.x*c.x+c.y*c.y+c.z*c.z+c.a*c.a);this.context.strokeStyle="#FF0000";this.context.beginPath();this.context.arc(e.x,e.y,c,0,2*Math.PI);this.context.stroke()},m:M};
L.l=!0;L.Wa=function(){var b=window.document.createElement("canvas");b.width=854;b.height=480;window.document.body.appendChild(b);return new Z(L.na(),new aa,new K,new M(b.getContext("2d",null)))};L.na=function(){for(var b=new A,a=0;4>a;){var c=a++;b.ab(t.H(5+2*c%3,5+c%3))}b.K(0,1,k.I);b.K(1,2,k.I);b.K(1,3,k.F);b.K(3,2,k.F);b.Ma(1);return b};K.l=!0;K.P=[R];K.prototype={ga:function(b){this.hb(b)},ja:function(b,a){this.tb(b,a);this.frames++},tb:function(b,a){var c=b.N;c.move(b.controller.V,a);var e=
b.Sa.Pa,f=b.N.C.wb();if(!e.floor.xa(f))for(var d=e.X.iterator();d.R();)if(e=d.next(),m.$a(e.Y,e.floor).xa(f)){var f=e.Y,d=f=new r(f.c,f.h,f.i,f.b,f.f,f.m11,f.m21,f.m31,f.g,f.m12,f.m22,f.m32,f.j,f.m13,f.m23,f.m33),g;g=d.f;d.f=d.h;d.h=g;g=d.g;d.g=d.i;d.i=g;g=d.m12;d.m12=d.m21;d.m21=g;d;d=-(f.f*f.b+f.m11*f.m31+f.m21*f.m32);g=-(f.g*f.b+f.m12*f.m31+f.m22*f.m32);f.b=-(f.c*f.b+f.h*f.m31+f.i*f.m32);f.m31=d;f.m32=g;d=c.C.v;c.C.v=new h(f.c*d.x+f.h*d.y+f.i*d.z+f.b*d.a,f.f*d.x+f.m11*d.y+f.m21*d.z+f.m31*d.a,f.g*
d.x+f.m12*d.y+f.m22*d.z+f.m32*d.a,f.j*d.x+f.m13*d.y+f.m23*d.z+f.m33*d.a);c.w=e.w;break}b.ib()},hb:function(b){function a(a){if(l.kb(a)){var e;e="keydown"==a.type?1:0;switch(a.keyCode){case 87:b.controller.V.Oa(e);break;case 83:b.controller.V.Oa(-e);break;case 65:b.controller.V.Na(-e);break;case 68:b.controller.V.Na(e)}}}window.document.body.addEventListener("keydown",a,!1);window.document.body.addEventListener("keyup",a,!1)},m:K};t.l=!0;t.A=function(){I.log("Invalid room generated");return new t(-1,
-1)};t.H=function(b,a){return new t(b,a)};t.prototype={K:function(b,a){this.wa.push({direction:a,jb:b})},m:t};var k={T:!0,pa:["North","South","East","West"],J:["North",0]};k.J.toString=w;k.J.o=k;k.F=["South",1];k.F.toString=w;k.F.o=k;k.I=["East",2];k.I.toString=w;k.I.o=k;k.O=["West",3];k.O.toString=w;k.O.o=k;A.l=!0;A.yb=function(){return-1};A.Ha=function(b){switch(b[1]){case 0:return k.F;case 1:return k.J;case 2:return k.O;case 3:return k.I}};A.prototype={Ea:function(b){return this.Z(b)?u.L(this.U[b]):
u.H()},ab:function(b){return this.U.push(b)-1},K:function(b,a,c){this.Z(b)&&this.Z(a)?(this.U[b].K(a,c),this.U[a].K(b,A.Ha(c))):I.log("Invalid connection created")},Ma:function(b){this.Z(b)||I.log("Invalid default room");return this.Ba=b},Z:function(b){return 0<=b&&b<this.U.length},m:A};J.l=!0;J.prototype={m:J};x.l=!0;x.L=function(b,a){var c,e=b.Ea(a).raw();switch(e[1]){case 0:return new x(-1,t.A());case 1:c=e[2]}var e=new x(a,c),f=0;for(c=c.wa;f<c.length;){var d=c[f];++f;var g=d.direction,d=d.jb,
h,k=b.Ea(d).raw();switch(k[1]){case 0:h=t.A();break;case 1:h=k[2]}d=new x(d,h);d.parent=v.oa(new J(d,e,A.Ha(g)));e.children.push(new J(e,d,g))}return e};x.prototype={eb:function(){return new O(-this.B.width/2,-this.B.height/2,this.B.width,this.B.height)},fb:function(b){var a=this.B.height/2,c=this.B.width/2,e=new G,f=new E(k.J,z.G(function(){var d=new h(c,a,0,1);return new h(b.c*d.x+b.h*d.y+b.i*d.z+b.b*d.a,b.f*d.x+b.m11*d.y+b.m21*d.z+b.m31*d.a,b.g*d.x+b.m12*d.y+b.m22*d.z+b.m32*d.a,b.j*d.x+b.m13*d.y+
b.m23*d.z+b.m33*d.a)}(this),function(){var d=new h(-c,a,0,1);return new h(b.c*d.x+b.h*d.y+b.i*d.z+b.b*d.a,b.f*d.x+b.m11*d.y+b.m21*d.z+b.m31*d.a,b.g*d.x+b.m12*d.y+b.m22*d.z+b.m32*d.a,b.j*d.x+b.m13*d.y+b.m23*d.z+b.m33*d.a)}(this)));e.set(k.J,f);f=new E(k.F,z.G(function(){var d=new h(-c,-a,0,1);return new h(b.c*d.x+b.h*d.y+b.i*d.z+b.b*d.a,b.f*d.x+b.m11*d.y+b.m21*d.z+b.m31*d.a,b.g*d.x+b.m12*d.y+b.m22*d.z+b.m32*d.a,b.j*d.x+b.m13*d.y+b.m23*d.z+b.m33*d.a)}(this),function(){var d=new h(c,-a,0,1);return new h(b.c*
d.x+b.h*d.y+b.i*d.z+b.b*d.a,b.f*d.x+b.m11*d.y+b.m21*d.z+b.m31*d.a,b.g*d.x+b.m12*d.y+b.m22*d.z+b.m32*d.a,b.j*d.x+b.m13*d.y+b.m23*d.z+b.m33*d.a)}(this)));e.set(k.F,f);f=new E(k.I,z.G(function(){var d=new h(c,-a,0,1);return new h(b.c*d.x+b.h*d.y+b.i*d.z+b.b*d.a,b.f*d.x+b.m11*d.y+b.m21*d.z+b.m31*d.a,b.g*d.x+b.m12*d.y+b.m22*d.z+b.m32*d.a,b.j*d.x+b.m13*d.y+b.m23*d.z+b.m33*d.a)}(this),function(){var d=new h(c,a,0,1);return new h(b.c*d.x+b.h*d.y+b.i*d.z+b.b*d.a,b.f*d.x+b.m11*d.y+b.m21*d.z+b.m31*d.a,b.g*d.x+
b.m12*d.y+b.m22*d.z+b.m32*d.a,b.j*d.x+b.m13*d.y+b.m23*d.z+b.m33*d.a)}(this)));e.set(k.I,f);f=new E(k.O,z.G(function(){var d=new h(-c,a,0,1);return new h(b.c*d.x+b.h*d.y+b.i*d.z+b.b*d.a,b.f*d.x+b.m11*d.y+b.m21*d.z+b.m31*d.a,b.g*d.x+b.m12*d.y+b.m22*d.z+b.m32*d.a,b.j*d.x+b.m13*d.y+b.m23*d.z+b.m33*d.a)}(this),function(){var d=new h(-c,-a,0,1);return new h(b.c*d.x+b.h*d.y+b.i*d.z+b.b*d.a,b.f*d.x+b.m11*d.y+b.m21*d.z+b.m31*d.a,b.g*d.x+b.m12*d.y+b.m22*d.z+b.m32*d.a,b.j*d.x+b.m13*d.y+b.m23*d.z+b.m33*d.a)}(this)));
e.set(k.O,f);return e},m:x};String.prototype.m=String;String.l=!0;Array.l=!0;var la={l:["Int"]},ma={l:["Dynamic"]},ia=Number;ia.l=["Float"];var ja=Boolean;ja.T=["Bool"];var na={l:["Class"]},oa={};C.Ta=0;l.ub={}.toString;fa.Xa()})("undefined"!=typeof console?console:{log:function(){}});