(function(P){function I(){this.w=[];this.Gb(-1)}function w(a,c){this.width=a;this.height=c;this.ib=[]}function T(a){this.frames=0;this.ja=a}function U(){}function V(a){this.element=a;this.context=Aa.Tb(a);this.height=360;this.width=16*this.height/9|0;this.Fb=a.width;this.Cb=a.height;this.fb=3;this.X=new G;this.Ya=new W}function X(a){this.element=a;this.context=a.getContext("2d",null)}function ia(a){this.gc=a;a.innerHTML="test";this.clear()}function u(){}function Ba(){}function Aa(){}function r(){}
function J(a){this.Tc=a;this.message=String(a);Error.captureStackTrace&&Error.captureStackTrace(this,J)}function t(a,c,b,d){this.x=a;this.y=c;this.z=b;this.m=d}function h(a,c,b){this.x=a;this.y=c;this.z=b}function Q(a,c){this.x=a;this.y=c}function Y(a,c,b,d){this.ra=a;this.x=c;this.y=b;this.z=d}function ja(a,c,b,d,e,f,g,l,m,E,q,x,h,k,Ga,Ha){this.f=a;this.j=c;this.g=b;this.Bc=d;this.h=e;this.m11=f;this.m21=g;this.m31=l;this.i=m;this.m12=E;this.m22=q;this.m32=x;this.Ac=h;this.m13=k;this.m23=Ga;this.m33=
Ha}function A(a,c,b,d,e,f,g,l,m){this.f=a;this.j=c;this.g=b;this.h=d;this.m11=e;this.m21=f;this.i=g;this.m12=l;this.m22=m}function ka(){}function Z(a,c,b,d){this.x=a;this.y=c;this.width=b;this.height=d}function W(){this.D={}}function G(){this.D={};this.D.za={}}function R(){}function y(a,c,b,d,e){null==e&&(e=-1);this.left=a;this.key=c;this.value=b;this.right=d;this.J=-1==e?(function(a){a=a.left;return null==a?0:a.J}(this)>function(a){a=a.right;return null==a?0:a.J}(this)?function(a){a=a.left;return null==
a?0:a.J}(this):function(a){a=a.right;return null==a?0:a.J}(this))+1:e}function aa(){}function la(a){var c=this;this.id=setInterval(function(){c.Wa()},a)}function ma(){}function na(a){this.w=[];for(var c=0,b=a.w.length;c<b;){var d=c++;this.w.push(new H(a,d))}}function K(a,c,b){this.R=v.c(p.c(c,0),p.c(b,1));this.tc=a==k.M||a==k.I;this.Vc=a==k.$||a==k.M;this.S=[];this.S.push({a:this.R.start.a,type:z.sa});this.S.push({a:this.R.stop.a,type:z.sa})}function oa(a,c,b,d){this.a=a;this.u=c;this.ea=b;this.Z=
d}function pa(a,c,b){this.a=a;this.u=c;this.Z=b}function H(a,c){this.F=c;this.floor=H.U(a.w[c]);this.T=[];this.xa=[];this.bc(a)}function qa(a,c,b){this.R=a;this.H=c;this.da=b}function ra(){this.T=[];this.P=[];this.Aa=!0;this.gamma=2.2;this.Ha=!0}function L(a,c){this.origin=a;this.V=c}function M(a,c,b){this.o=new h(a,c,1);this.Y=b}function sa(a,c){this.start=a;this.stop=c}function N(a,c){this.origin=a;this.V=c}function ba(){}function ta(a,c,b){this.origin=a;this.la=c;this.qa=b}function ca(a){B.call(this,
new M(a.Pa()+.1,a.Ea(),.1),!1,a.F,0,Math.PI,"green.png")}function da(a){B.call(this,new M(0,0,.3),null,a,5,Math.PI,"blue.png")}function ea(a){B.call(this,new M(0,0,.2),null,a,3,Math.PI,"red.png")}function B(a,c,b,d,e,f){null==f&&(f="brick.png");null==c&&(c=!0);this.B=a;this.gb=c;this.Z=f;this.F=b;this.heading=0;this.speed=d;this.Pc=e}function ua(a,c,b,d){this.Ia=a;this.yb=50;this.v=new ra;this.controller=c;this.Kb=b;this.oa=d;this.ma=0;this.L=new fa(a.Da);this.W=new da(a.Da);this.nb=new ea((a.Da+
2)%a.w.length);this.P=[this.W,this.nb];this.ba=1}function ga(){}function va(){}function wa(){this.ya=new xa}function xa(){this.y=this.x=0;this.lb=.1}function fa(a,c,b){null==b&&(b=6);null==c&&(c=new h(0,0,1));this.sb=106;this.ac=1.7777777777777777;this.F=a;this.position=c;this.speed=b}function n(a){this.Ua=a}function ya(){}function O(){}function Ca(){}function za(){}function F(){return r.s(this,"")}function ha(a,c){function b(){}b.prototype=a;var d=new b,e;for(e in c)d[e]=c[e];c.toString!==Object.prototype.toString&&
(d.toString=c.toString);return d}za.b=!0;za.ub=function(a){return{kb:0,cb:a,rb:function(){return this.kb<this.cb.length},next:function(){return this.cb[this.kb++]}}};Ca.b=!0;Ca.Wb=function(){var a=U.Ub();a.ka();var c=new la(33);c.Wa=function(){a.update();a.na()};c.Wa()};Math.b=!0;O.b=!0;O.compare=function(a,c){return a==c?0:a>c?1:-1};O.tb=function(a){return null!=a&&null!=a.C};ya.b=!0;ya.xb=function(a){return r.s(a,"")};var C={ta:!0,ab:["None","Some"],fa:["None",0]};C.fa.toString=F;C.fa.C=C;C.Ka=
function(a){a=["Some",1,a];a.C=C;a.toString=F;return a};n.b=!0;n.Ga=function(a){return new n(C.Ka(a))};n.U=function(){return new n(C.fa)};n.G=function(a){return new n(C.Ka(a))};n.s=function(){return new n(C.fa)};n.aa=function(){return new n(C.fa)};n.Fa=function(a){return new n(C.Ka(a))};n.va=function(){return new n(C.fa)};n.prototype={mc:function(a){var c=this.Ua;switch(c[1]){case 0:return n.va();case 1:return n.Fa(a(c[2]))}},dc:function(a){var c=this.Ua;switch(c[1]){case 0:return n.aa();case 1:return a(c[2])}},
raw:function(){return this.Ua},l:n};fa.b=!0;fa.prototype={clone:function(){var a=this.position;return new fa(this.F,new h(a.x,a.y,a.z),this.speed)},move:function(a,c){var b=this.position,d=new h(a.x,a.y,a.z);d.x-=b.x;d.y-=b.y;d.z-=b.z;Math.sqrt(d.x*d.x+d.y*d.y+d.z*d.z)<this.speed*c||(b=Math.sqrt(d.x*d.x+d.y*d.y+d.z*d.z),0<b&&(d.x/=b,d.y/=b,d.z/=b,d),b=this.speed,d=new h(d.x,d.y,d.z),d.x*=b,d.y*=b,d.z*=b,d=new h(d.x,d.y,d.z),d.x*=c,d.y*=c,d.z*=c);b=this.position;b=new h(b.x,b.y,b.z);b.x+=d.x;b.y+=
d.y;b.z+=d.z;this.position=b},pc:function(a){var c=1.05*this.sb/2,b=new h(0,0,1),d=this.position;a=new h(a.x,a.y,a.z);a.x-=d.x;a.y-=d.y;a.z-=d.z;var d=Math.PI/180*c,e=Math.sin(d/2),d=new Y(Math.cos(d/2),e*b.x,e*b.y,e*b.z),e=2*(d.x*a.x+d.y*a.y+d.z*a.z),f=d.ra*d.ra-d.x*d.x-d.y*d.y-d.z*d.z,g=2*d.ra,c=Math.PI/180*-c,l=Math.sin(c/2),b=new Y(Math.cos(c/2),l*b.x,l*b.y,l*b.z),c=2*(b.x*a.x+b.y*a.y+b.z*a.z),l=b.ra*b.ra-b.x*b.x-b.y*b.y-b.z*b.z,m=2*b.ra;return S.jb(this.position,new h(e*d.x+f*a.x+g*(d.y*a.z-
d.z*a.y),e*d.y+f*a.y+g*(d.z*a.x-d.x*a.z),e*d.z+f*a.z+g*(d.x*a.y-d.y*a.x)),new h(c*b.x+l*a.x+m*(b.y*a.z-b.z*a.y),c*b.y+l*a.y+m*(b.z*a.x-b.x*a.z),c*b.z+l*a.z+m*(b.x*a.y-b.y*a.x)))},l:fa};xa.b=!0;xa.prototype={Ib:function(a){return this.x=a},Jb:function(a){return this.y=a},Pa:function(){return this.mb(this.x)},Ea:function(){return this.mb(this.y)},mb:function(a){a=a-this.lb*Ba.sign(a);return a/=1-this.lb},l:xa};wa.b=!0;wa.prototype={l:wa};va.b=!0;va.prototype={l:va};ga.b=!0;ga.prototype={l:ga};ua.b=
!0;ua.prototype={ka:function(){this.Kb.ka(this);for(var a=0,c=this.oa;a<c.length;){var b=c[a];++a;b.ka(this);b.pause()}this.oa[this.ma].Va();this.v.L=this.L;return this},update:function(){this.Kb.Ec(this,.033);return this},na:function(){this.v.clear();var a=this.L,c=this.W.B.o,b=this.Ja.w,d=b[a.F],e=new Q(a.position.x,a.position.y);if(!d.floor.Ca(e))for(var f=0,g=d.xa;f<g.length;)if(d=g[f],++f,u.$a(d.H,b[d.da].floor).Ca(e)){b=u.aa(d.H);a=a.clone();a.F=d.da;e=a.position;a.position=new h(b.f*e.x+b.j*
e.y+b.g*e.z,b.h*e.x+b.m11*e.y+b.m21*e.z,b.i*e.x+b.m12*e.y+b.m22*e.z);c=new h(b.f*c.x+b.j*c.y+b.g*c.z,b.h*c.x+b.m11*c.y+b.m21*c.z,b.i*c.x+b.m12*c.y+b.m22*c.z);break}this.v.L=a;this.v.target=c;this.v.Mc(this.ba);this.v.gamma=this.v.gamma;this.zb(a.pc(c),a.F,u.G());this.oa[this.ma].na(this.v);return this},zb:function(a,c,b){var d=this,e;a=a.raw();switch(a[1]){case 0:return;case 1:e=a[2]}a=this.Ia.w[c];if(!(function(){var a=new h(0,0,1),c=e.origin,a=new h(b.f*a.x+b.j*a.y+b.g*a.z,b.h*a.x+b.m11*a.y+b.m21*
a.z,b.i*a.x+b.m12*a.y+b.m22*a.z),a=new h(a.x,a.y,a.z);a.x-=c.x;a.y-=c.y;a.z-=c.z;return Math.sqrt(a.x*a.x+a.y*a.y+a.z*a.z)}(this)-a.width-a.height>this.yb)){a=0;for(var f=this.P;a<f.length;){var g=f[a];++a;g.F==c&&this.v.P.push({bb:g,nc:e,H:b})}a=0;for(f=this.Ja.w[c].T;a<f.length;){var l=f[a];++a;S.Ba(e,v.c(function(){var a=l.start,c=a.a;return p.c(new h(b.f*c.x+b.j*c.y+b.g*c.z,b.h*c.x+b.m11*c.y+b.m21*c.z,b.i*c.x+b.m12*c.y+b.m22*c.z),a.u)}(this),function(){var a=l.stop,c=a.a;return p.c(new h(b.f*
c.x+b.j*c.y+b.g*c.z,b.h*c.x+b.m11*c.y+b.m21*c.z,b.i*c.x+b.m12*c.y+b.m22*c.z),a.u)}(this))).mc(function(a){d.v.T.push(a)})}a=0;for(c=this.Ja.w[c].xa;a<c.length;){var m=c[a];++a;this.zb(S.yc(e,function(a){var c=m.R;return v.c(function(){var a=c.start,d=a.a;return p.c(new h(b.f*d.x+b.j*d.y+b.g*d.z,b.h*d.x+b.m11*d.y+b.m21*d.z,b.i*d.x+b.m12*d.y+b.m22*d.z),a.u)}(a),function(){var a=c.stop,d=a.a;return p.c(new h(b.f*d.x+b.j*d.y+b.g*d.z,b.h*d.x+b.m11*d.y+b.m21*d.z,b.i*d.x+b.m12*d.y+b.m22*d.z),a.u)}(a))}(this)),
m.da,function(){var a=m.H;return new A(b.f*a.f+b.j*a.h+b.g*a.i,b.f*a.j+b.j*a.m11+b.g*a.m12,b.f*a.g+b.j*a.m21+b.g*a.m22,b.h*a.f+b.m11*a.h+b.m21*a.i,b.h*a.j+b.m11*a.m11+b.m21*a.m12,b.h*a.g+b.m11*a.m21+b.m21*a.m22,b.i*a.f+b.m12*a.h+b.m22*a.i,b.i*a.j+b.m12*a.m11+b.m22*a.m12,b.i*a.g+b.m12*a.m21+b.m22*a.m22)}(this))}}},Dc:function(){this.oa[this.ma].pause();this.ma=(this.ma+1)%this.oa.length;this.oa[this.ma].Va()},Oc:function(){this.v.Aa=!this.v.Aa},Hb:function(a){return this.v.gamma=Math.max(.1,a)},Nc:function(){return this.v.Ha=
!this.v.Ha},hc:function(){this.P.push(new ca(this.W))},cc:function(){this.P=[this.W,this.nb]},l:ua};B.b=!0;B.prototype={move:function(a,c){this.rotate(a.Pa()*c*this.Pc);this.B.o.x+=a.Ea()*c*this.speed*Math.cos(this.heading);this.B.o.y+=a.Ea()*c*this.speed*Math.sin(this.heading)},rotate:function(a){this.heading=(this.heading-a)%(2*Math.PI)},Pa:function(){return this.B.o.x},Ea:function(){return this.B.o.y},l:B};ea.b=!0;ea.ua=B;ea.prototype=ha(B.prototype,{l:ea});da.b=!0;da.ua=B;da.prototype=ha(B.prototype,
{l:da});ca.b=!0;ca.ua=B;ca.prototype=ha(B.prototype,{l:ca});ta.b=!0;ta.prototype={l:ta};var S={b:!0,c:function(a,c,b){return new ta(a,c,b)},jb:function(a,c,b){a=S.c(a,c,b);c=a.la;b=a.qa;b=new h(b.x,b.y,b.z);var d=b.z*c.x-b.x*c.z,e=b.x*c.y-b.y*c.x;b.x=b.y*c.z-b.z*c.y;b.y=d;b.z=e;return 0<b.z?n.Ga(a):n.U()},yc:function(a,c){var b=a.origin,d=c.stop.a,e=new h(d.x,d.y,d.z);e.x-=b.x;e.y-=b.y;e.z-=b.z;var b=a.origin,d=c.start.a,f=new h(d.x,d.y,d.z);f.x-=b.x;f.y-=b.y;f.z-=b.z;if(0>function(){var b=a.qa,b=
new h(b.x,b.y,b.z),c=b.z*e.x-b.x*e.z,d=b.x*e.y-b.y*e.x;b.x=b.y*e.z-b.z*e.y;b.y=c;b.z=d;return b}(this).z&&0>function(){var b=a.la,c=new h(f.x,f.y,f.z),d=c.z*b.x-c.x*b.z,e=c.x*b.y-c.y*b.x;c.x=c.y*b.z-c.z*b.y;c.y=d;c.z=e;return c}(this).z)return n.U();b=0<function(){var b=a.la,b=new h(b.x,b.y,b.z),c=b.z*e.x-b.x*e.z,d=b.x*e.y-b.y*e.x;b.x=b.y*e.z-b.z*e.y;b.y=c;b.z=d;return b}(this).z?a.la:e;d=0>function(){var b=a.qa,b=new h(b.x,b.y,b.z),c=b.z*f.x-b.x*f.z,d=b.x*f.y-b.y*f.x;b.x=b.y*f.z-b.z*f.y;b.y=c;b.z=
d;return b}(this).z?a.qa:f;return S.jb(a.origin,b,d)},Ba:function(a,c){return L.G(a.origin,a.qa).Ba(c).dc(function(b){var c=a.la;return L.G(a.origin,new h(-c.x,-c.y,-c.z)).Ba(b)})},ia:function(a,c){var b=a.origin,d=a.qa,e=a.la,b=new t(b.x,b.y,0,1);return(new N(b,new t(e.y,-e.x,0,0))).ia((new N(b,new t(-d.y,d.x,0,0))).ia(c))}};ba.b=!0;ba.Xb=function(a,c,b){var d=1/Math.tan(a.sb*Math.PI/180/2),e=b-c;return[d,0,0,0,0,d/a.ac,0,0,0,0,(b+c)/e,-2*b*c/e,0,0,1,0]};ba.Vb=function(a,c){var b=new h(a.position.x,
a.position.y,1),d=new h(c.x,c.y,c.z);d.x-=b.x;d.y-=b.y;d.z-=b.z;var e;e=Math.sqrt(d.x*d.x+d.y*d.y+d.z*d.z);0<e&&(d.x/=e,d.y/=e,d.z/=e,d);var f=new h(0,0,1);e=new h(d.x,d.y,d.z);var g=e.z*f.x-e.x*f.z,l=e.x*f.y-e.y*f.x;e.x=e.y*f.z-e.z*f.y;e.y=g;e.z=l;f=Math.sqrt(e.x*e.x+e.y*e.y+e.z*e.z);0<f&&(e.x/=f,e.y/=f,e.z/=f,e);f=new h(e.x,e.y,e.z);g=f.z*d.x-f.x*d.z;l=f.x*d.y-f.y*d.x;f.x=f.y*d.z-f.z*d.y;f.y=g;f.z=l;return new ja(e.x,e.y,e.z,-(e.x*b.x+e.y*b.y+e.z*b.z),f.x,f.y,f.z,-(f.x*b.x+f.y*b.y+f.z*b.z),-d.x,
-d.y,-d.z,d.x*b.x+d.y*b.y+d.z*b.z,0,0,0,1)};N.b=!0;N.prototype={ia:function(a){for(var c=this,b=a.map(function(a){var b=c.V,d=c.origin;a=a.a;a=new t(a.x,a.y,a.z,a.m);a.x-=d.x;a.y-=d.y;a.z-=d.z;a.m-=d.m;return 0>b.x*a.x+b.y*a.y+b.z*a.z+b.m*a.m}),d=[],e=0,f=a.length;e<f;){var g=e++,l=(g+1)%a.length;if(!b[g]||!b[l]){if(b[l]||b[g]){var m=a[g],E=a[l],h,g=m.a,x=E.a,x=new t(x.x,x.y,x.z,x.m);x.x-=g.x;x.y-=g.y;x.z-=g.z;x.m-=g.m;h=x;var k;k=function(a){var b=a.V,c=m.a;a=a.origin;a=new t(a.x,a.y,a.z,a.m);a.x-=
c.x;a.y-=c.y;a.z-=c.z;a.m-=c.m;return b.x*a.x+b.y*a.y+b.z*a.z+b.m*a.m}(this)/function(a){a=a.V;return a.x*h.x+a.y*h.y+a.z*h.z+a.m*h.m}(this);var n=1-k,g=D.c(function(){var a=m.a,a=new t(a.x,a.y,a.z,a.m);a.x*=n;a.y*=n;a.z*=n;a.m*=n;var b=E.a,b=new t(b.x,b.y,b.z,b.m);b.x*=k;b.y*=k;b.z*=k;b.m*=k;a=new t(a.x,a.y,a.z,a.m);a.x+=b.x;a.y+=b.y;a.z+=b.z;a.m+=b.m;return a}(this),m.u*n+E.u*k,m.ea*n+E.ea*k,m.Z);d.push(g)}b[l]||d.push(a[l])}}return d},l:N};sa.b=!0;sa.prototype={Ta:function(a){var c=1-a;return p.c(function(b){var d=
b.start.a,d=new h(d.x,d.y,d.z);d.x*=c;d.y*=c;d.z*=c;b=b.stop.a;b=new h(b.x,b.y,b.z);b.x*=a;b.y*=a;b.z*=a;d=new h(d.x,d.y,d.z);d.x+=b.x;d.y+=b.y;d.z+=b.z;return d}(this),this.start.u*c+this.stop.u*a)},l:sa};var v={b:!0,c:function(a,c){return new sa(a,c)},wa:function(a){var c=a.stop.a;a=a.start.a;a=new h(a.x,a.y,a.z);a.x-=c.x;a.y-=c.y;a.z-=c.z;return Math.sqrt(a.x*a.x+a.y*a.y+a.z*a.z)},normalize:function(a){var c=1/v.wa(a);return v.c(function(b){var d=a.start;return p.c(function(){var a=d.a,a=new h(a.x,
a.y,a.z);a.x*=c;a.y*=c;a.z*=c;return a}(b),d.u)}(this),function(b){var d=a.stop;return p.c(function(){var a=d.a,a=new h(a.x,a.y,a.z);a.x*=c;a.y*=c;a.z*=c;return a}(b),d.u)}(this))},zc:function(a,c){var b=a.start.a,d=a.stop.a,e=new h(d.x,d.y,d.z);e.x-=b.x;e.y-=b.y;e.z-=b.z;var f=e.x*e.x+e.y*e.y+e.z*e.z;if(0==f)return n.s();var g=new h(c.x,c.y,c.z);g.x-=b.x;g.y-=b.y;g.z-=b.z;e=(g.x*e.x+g.y*e.y+g.z*e.z)/f;0>=e?b=v.c(p.c(b,0),p.c(c,1)):1<=e?b=v.c(p.c(d,0),p.c(c,1)):(b=a.Ta(e).a,b=v.c(p.c(b,0),p.c(c,1)));
return n.G(b)}};M.b=!0;M.prototype={sc:function(a){var c;a=v.zc(a,this.o).raw();switch(a[1]){case 0:return n.s();case 1:c=a[2]}var b=v.wa(c);return 0==b||b>this.Y?n.s():n.G(function(a){var e=1.001*(a.Y-b),f=v.normalize(c);return v.c(function(a){var b=f.start;return p.c(function(){var a=b.a,a=new h(a.x,a.y,a.z);a.x*=e;a.y*=e;a.z*=e;return a}(a),b.u)}(a),function(a){var b=f.stop;return p.c(function(){var a=b.a,a=new h(a.x,a.y,a.z);a.x*=e;a.y*=e;a.z*=e;return a}(a),b.u)}(a))}(this))},H:function(a){var c=
this.o;a=new h(a.f*c.x+a.j*c.y+a.g*c.z,a.h*c.x+a.m11*c.y+a.m21*c.z,a.i*c.x+a.m12*c.y+a.m22*c.z);return new M(a.x,a.y,this.Y)},rc:function(a){var c=v.c(p.c(a.o,0),p.c(this.o,1)),b=v.wa(c);return 0==b||b>a.Y+this.Y?n.s():n.G(function(d){var e=1.001*(a.Y+d.Y-b),f=v.normalize(c);return v.c(function(a){var b=f.start;return p.c(function(){var a=b.a,a=new h(a.x,a.y,a.z);a.x*=e;a.y*=e;a.z*=e;return a}(a),b.u)}(d),function(a){var b=f.stop;return p.c(function(){var a=b.a,a=new h(a.x,a.y,a.z);a.x*=e;a.y*=e;
a.z*=e;return a}(a),b.u)}(d))}(this))},l:M};L.b=!0;L.G=function(a,c){return new L(a,new h(-c.y,c.x,0))};L.prototype={Ba:function(a){var c;c=0>function(b){var c=b.V;b=b.origin;var d=a.start.a,d=new h(d.x,d.y,d.z);d.x-=b.x;d.y-=b.y;d.z-=b.z;return c.x*d.x+c.y*d.y+c.z*d.z}(this);var b;b=0>function(b){var c=b.V;b=b.origin;var d=a.stop.a,d=new h(d.x,d.y,d.z);d.x-=b.x;d.y-=b.y;d.z-=b.z;return c.x*d.x+c.y*d.y+c.z*d.z}(this);if(c&&b)return n.s();if(!c&&!b)return n.G(a);var d=a.start.a,e=a.stop.a,f=new h(e.x,
e.y,e.z);f.x-=d.x;f.y-=d.y;f.z-=d.z;d=function(b){var c=b.V,d=a.start.a;b=b.origin;b=new h(b.x,b.y,b.z);b.x-=d.x;b.y-=d.y;b.z-=d.z;return c.x*b.x+c.y*b.y+c.z*b.z}(this)/function(a){a=a.V;return a.x*f.x+a.y*f.y+a.z*f.z}(this);if(c)return n.G(v.c(a.Ta(d),a.stop));if(b)return n.G(v.c(a.start,a.Ta(d)));P.log("This should never be hit");return n.s()},l:L};ra.b=!0;ra.prototype={clear:function(){this.T=[];this.P=[]},Mc:function(a){return this.ba=Math.max(.1,a)},l:ra};qa.b=!0;qa.prototype={l:qa};H.b=!0;H.U=
function(a){return new Z(-a.width/2,-a.height/2,a.width,a.height)};H.aa=function(a){var c=a.height/2,b=a.width/2;a=new R;var d=new K(k.M,new h(b,c,1),new h(-b,c,1));a.set(k.M,d);d=new K(k.I,new h(-b,-c,1),new h(b,-c,1));a.set(k.I,d);d=new K(k.O,new h(b,-c,1),new h(b,c,1));a.set(k.O,d);c=new K(k.$,new h(-b,c,1),new h(-b,-c,1));a.set(k.$,c);return a};H.prototype={bc:function(a){for(var c=a.w[this.F],b=H.aa(c),d=0,c=c.ib;d<c.length;){var e=c[d];++d;var f=this.qc(a,e);b.get(e.direction).$b(f.R);this.xa.push(f)}for(a=
b.iterator();a.rb();)b=a.next(),this.T=this.T.concat(b.lc())},qc:function(a,c){var b=a.w[this.F],d=a.w[c.wb],e=new h(0,0,0),f,g,l=b.width/2,b=b.height/2,m=d.width/2,d=d.height/2;switch(c.direction[1]){case 0:e.y=b+d;f=new h(Math.min(l,m),b,1);g=new h(Math.max(-l,-m),b,1);break;case 1:e.y=-(b+d);f=new h(Math.max(-l,-m),-b,1);g=new h(Math.min(l,m),-b,1);break;case 2:e.x=l+m;f=new h(l,Math.max(-b,-d),1);g=new h(l,Math.min(b,d),1);break;case 3:e.x=-(l+m),f=new h(-l,Math.min(b,d),1),g=new h(-l,Math.max(-b,
-d),1)}return new qa(v.c(p.c(f,0),p.c(g,1)),u.Zb(e),c.wb)},l:H};pa.b=!0;pa.prototype={l:pa};var p={b:!0,c:function(a,c,b){null==b&&(b="brick.png");return new pa(a,c,b)}};oa.b=!0;oa.prototype={l:oa};var D={b:!0,c:function(a,c,b,d){null==d&&(d="brick.png");return new oa(a,c,b,d)},clone:function(a){var c=a.a;return D.c(new t(c.x,c.y,c.z,c.m),a.u,a.ea)}},z={ta:!0,ab:["WallPoint","StartPortal","StopPortal"],sa:["WallPoint",0]};z.sa.toString=F;z.sa.C=z;z.La=["StartPortal",1];z.La.toString=F;z.La.C=z;z.Ma=
["StopPortal",2];z.Ma.toString=F;z.Ma.C=z;K.b=!0;K.prototype={$b:function(a){this.S.push({a:a.start.a,type:z.La});this.S.push({a:a.stop.a,type:z.Ma})},lc:function(){this.S.sort(this.tc?function(a,b){return a.a.x<b.a.x?-1:a.a.x>b.a.x?1:0}:function(a,b){return a.a.y<b.a.y?-1:a.a.y>b.a.y?1:0});var a=[],c=!1,b=0,d=v.wa(this.R);try{for(;b<this.S.length;){var e=this.S[b];switch(e.type[1]){case 0:var f=e.a;c||a.push(p.c(f,function(a){a=a.R.start.a;var b=f,b=new h(b.x,b.y,b.z);b.x-=a.x;b.y-=a.y;b.z-=a.z;
return Math.sqrt(b.x*b.x+b.y*b.y+b.z*b.z)}(this)/d));b++;throw"__break__";case 1:c=!c;break;case 2:c=!c}b++}}catch(q){if("__break__"!=q)throw q;}e=z.sa;try{for(;b<this.S.length;){var g=this.S[b],l=g.type;switch(g.type[1]){case 0:var m=g.a;c||a.push(p.c(m,function(a){a=a.R.start.a;var b=m,b=new h(b.x,b.y,b.z);b.x-=a.x;b.y-=a.y;b.z-=a.z;return Math.sqrt(b.x*b.x+b.y*b.y+b.z*b.z)}(this)/d));throw"__break__";default:var E=g.a;l==e?P.log("Overlapping portals!"):(c=!c,a.push(p.c(E,function(a){a=a.R.start.a;
var b=E,b=new h(b.x,b.y,b.z);b.x-=a.x;b.y-=a.y;b.z-=a.z;return Math.sqrt(b.x*b.x+b.y*b.y+b.z*b.z)}(this)/d)))}b++}}catch(q){if("__break__"!=q)throw q;}this.Vc&&(a.reverse(),a=a.map(function(a){return p.c(a.a,1-a.u)}));0!=a.length%2&&P.log("we have an odd number of stops");c=[];b=0;for(d=a.length/2|0;b<d;)g=b++,g=v.c(a[2*g],a[2*g+1]),0<v.wa(g)&&c.push(g);return c},l:K};na.b=!0;na.prototype={l:na};ma.b=!0;la.b=!0;la.prototype={Wa:function(){},l:la};aa.b=!0;aa.prototype={set:function(a,c){this.root=
this.Xa(a,c,this.root)},get:function(a){for(var c=this.root;null!=c;){var b=this.compare(a,c.key);if(0==b)return c.value;c=0>b?c.left:c.right}return null},iterator:function(){var a=[];this.Sa(this.root,a);return za.ub(a)},Xa:function(a,c,b){if(null==b)return new y(null,a,c,null);var d=this.compare(a,b.key);if(0==d)return new y(b.left,a,c,b.right,null==b?0:b.J);if(0>d)return a=this.Xa(a,c,b.left),this.eb(a,b.key,b.value,b.right);a=this.Xa(a,c,b.right);return this.eb(b.left,b.key,b.value,a)},Sa:function(a,
c){null!=a&&(this.Sa(a.left,c),c.push(a.value),this.Sa(a.right,c))},eb:function(a,c,b,d){var e;null==a?e=0:e=a.J;var f;null==d?f=0:f=d.J;return e>f+2?function(){var b=a.left;return null==b?0:b.J}(this)>=function(){var b=a.right;return null==b?0:b.J}(this)?new y(a.left,a.key,a.value,new y(a.right,c,b,d)):new y(new y(a.left,a.key,a.value,a.right.left),a.right.key,a.right.value,new y(a.right.right,c,b,d)):f>e+2?function(){var a=d.right;return null==a?0:a.J}(this)>function(){var a=d.left;return null==
a?0:a.J}(this)?new y(new y(a,c,b,d.left),d.key,d.value,d.right):new y(new y(a,c,b,d.left.left),d.left.key,d.left.value,new y(d.left.right,d.key,d.value,d.right)):new y(a,c,b,d,(e>f?e:f)+1)},compare:function(a,c){return O.compare(a,c)},l:aa};y.b=!0;y.prototype={l:y};R.b=!0;R.ha=[ma];R.ua=aa;R.prototype=ha(aa.prototype,{compare:function(a,c){var b=a[1]-c[1];if(0!=b)return b;var b=a.slice(2),d=c.slice(2);return 0==b.length&&0==d.length?0:this.hb(b,d)},hb:function(a,c){var b=a.length-c.length;if(0!=b)return b;
for(var b=0,d=a.length;b<d;){var e=b++,e=this.fc(a[e],c[e]);if(0!=e)return e}return 0},fc:function(a,c){return O.tb(a)&&O.tb(c)?this.compare(a,c):a instanceof Array&&null==a.C&&c instanceof Array&&null==c.C?this.hb(a,c):O.compare(a,c)},l:R});G.b=!0;G.ha=[ma];G.prototype={set:function(a,c){var b=a.ga||(a.ga=++G.Qb);this.D[b]=c;this.D.za[b]=a},keys:function(){var a=[],c;for(c in this.D.za)this.D.hasOwnProperty(c)&&a.push(this.D.za[c]);return za.ub(a)},l:G};W.b=!0;W.ha=[ma];W.prototype={set:function(a,
c){null!=Da[a]?this.Lc(a,c):this.D[a]=c},get:function(a){return null!=Da[a]?this.oc(a):this.D[a]},ic:function(a){return null!=Da[a]?this.jc(a):this.D.hasOwnProperty(a)},Lc:function(a,c){null==this.pa&&(this.pa={});this.pa["$"+a]=c},oc:function(a){return null==this.pa?null:this.pa["$"+a]},jc:function(a){return null==this.pa?!1:this.pa.hasOwnProperty("$"+a)},l:W};Z.b=!0;Z.prototype={Ca:function(a){return ka.Ga(this.x,this.width,a.x)&&ka.Ga(this.y,this.height,a.y)},qb:function(a){var c=new Q(this.x,
this.y);switch(a){case 0:break;case 1:c.x+=this.width;break;case 2:c.x+=this.width;c.y+=this.height;break;case 3:c.y+=this.height;break;default:throw new J("Invalid vertex index.");}return c},l:Z};ka.b=!0;ka.Ga=function(a,c,b){return b>=a&&b<=a+c};A.b=!0;A.prototype={l:A};ja.b=!0;ja.prototype={l:ja};Y.b=!0;Y.prototype={l:Y};Q.b=!0;Q.prototype={l:Q};h.b=!0;h.prototype={l:h};t.b=!0;t.prototype={l:t};J.b=!0;J.ua=Error;J.prototype=ha(Error.prototype,{l:J});r.b=!0;r.Sb=function(a){if(a instanceof Array&&
null==a.C)return Array;var c=a.l;if(null!=c)return c;a=r.Fa(a);return null!=a?r.Nb(a):null};r.s=function(a,c){if(null==a)return"null";if(5<=c.length)return"<...>";var b=typeof a;"function"==b&&(a.b||a.ta)&&(b="object");switch(b){case "object":if(a instanceof Array){if(a.C){if(2==a.length)return a[0];b=a[0]+"(";c+="\t";for(var d=2,e=a.length;d<e;){var f=d++;2!=f?b+=","+r.s(a[f],c):b+=r.s(a[f],c)}return b+")"}b=a.length;d="[";c+="\t";for(e=0;e<b;)f=e++,d+=(0<f?",":"")+r.s(a[f],c);return d+"]"}try{d=
a.toString}catch(g){return g instanceof J&&(g=g.Tc),"???"}if(null!=d&&d!=Object.toString&&"function"==typeof d&&(b=a.toString(),"[object Object]"!=b))return b;b=null;d="{\n";c+="\t";e=null!=a.hasOwnProperty;for(b in a)e&&!a.hasOwnProperty(b)||"prototype"==b||"__class__"==b||"__super__"==b||"__interfaces__"==b||"__properties__"==b||(2!=d.length&&(d+=", \n"),d+=c+b+" : "+r.s(a[b],c));c=c.substring(1);return d+("\n"+c+"}");case "function":return"<function>";case "string":return a;default:return String(a)}};
r.U=function(a,c){if(null==a)return!1;if(a==c)return!0;var b=a.ha;if(null!=b)for(var d=0,e=b.length;d<e;){var f=d++,f=b[f];if(f==c||r.U(f,c))return!0}return r.U(a.ua,c)};r.Lb=function(a){var c=KeyboardEvent;if(null==c)return!1;switch(c){case Ia:return(a|0)===a;case Ea:return"number"==typeof a;case Fa:return"boolean"==typeof a;case String:return"string"==typeof a;case Array:return a instanceof Array&&null==a.C;case Ja:return!0;default:if(null!=a)if("function"==typeof c){if(a instanceof c||r.U(r.Sb(a),
c))return!0}else{if("object"==typeof c&&r.Mb(c)&&a instanceof c)return!0}else return!1;return c==Ka&&null!=a.b||c==La&&null!=a.ta?!0:a.C==c}};r.Fa=function(a){a=r.Ob.call(a).slice(8,-1);return"Object"==a||"Function"==a||"Math"==a||"JSON"==a?null:a};r.Mb=function(a){return null!=r.Fa(a)};r.Nb=function(a){return Function("return typeof "+a+' != "undefined" ? '+a+" : null")()};Aa.b=!0;Aa.Tb=function(a){for(var c=0,b=["webgl","experimental-webgl"];c<b.length;){var d=b[c];++c;d=a.getContext(d,null);if(null!=
d)return d}return null};Ba.b=!0;Ba.sign=function(a){return 0>a?-1:0<a?1:0};u.b=!0;u.G=function(){var a=new A(1,0,0,0,1,0,0,0,1);return new A(a.f,a.j,a.g,a.h,a.m11,a.m21,a.i,a.m12,a.m22)};u.va=function(a,c){var b=u.G();b.g=a;b.m21=c;return b};u.Zb=function(a){return u.va(a.x,a.y)};u.Rb=function(){var a=u.G();a.f=20;a.m11=20;return a};u.Yb=function(){var a=u.G();a.f=1;a.m11=-1;return a};u.$a=function(a,c){var b=c.qb(0),d=c.qb(2),b=new h(b.x,b.y,1),b=new h(a.f*b.x+a.j*b.y+a.g*b.z,a.h*b.x+a.m11*b.y+a.m21*
b.z,a.i*b.x+a.m12*b.y+a.m22*b.z),d=new h(d.x,d.y,1),d=new h(a.f*d.x+a.j*d.y+a.g*d.z,a.h*d.x+a.m11*d.y+a.m21*d.z,a.i*d.x+a.m12*d.y+a.m22*d.z);return new Z(b.x,b.y,d.x-b.x,d.y-b.y)};u.aa=function(a){a=new A(a.f,a.j,a.g,a.h,a.m11,a.m21,a.i,a.m12,a.m22);a.f=1/a.f;a.m11=1/a.m11;a.g=-a.g;a.m21=-a.m21;return a};ia.b=!0;ia.prototype={clear:function(){this.Ra=this.Qa=0},na:function(){this.gc.innerHTML="Hit Tests Done: "+ya.xb(this.Qa)+"\nActual Hits: "+ya.xb(this.Ra)+"\n"},l:ia};X.b=!0;X.ha=[ga];X.prototype=
{ka:function(){var a;a=u.va(this.element.width/2,this.element.height/2);var c=u.Yb();a=new A(a.f*c.f+a.j*c.h+a.g*c.i,a.f*c.j+a.j*c.m11+a.g*c.m12,a.f*c.g+a.j*c.m21+a.g*c.m22,a.h*c.f+a.m11*c.h+a.m21*c.i,a.h*c.j+a.m11*c.m11+a.m21*c.m12,a.h*c.g+a.m11*c.m21+a.m21*c.m22,a.i*c.f+a.m12*c.h+a.m22*c.i,a.i*c.j+a.m12*c.m11+a.m22*c.m12,a.i*c.g+a.m12*c.m21+a.m22*c.m22);c=u.Rb();this.Gc=new A(a.f*c.f+a.j*c.h+a.g*c.i,a.f*c.j+a.j*c.m11+a.g*c.m12,a.f*c.g+a.j*c.m21+a.g*c.m22,a.h*c.f+a.m11*c.h+a.m21*c.i,a.h*c.j+a.m11*
c.m11+a.m21*c.m12,a.h*c.g+a.m11*c.m21+a.m21*c.m22,a.i*c.f+a.m12*c.h+a.m22*c.i,a.i*c.j+a.m12*c.m11+a.m22*c.m12,a.i*c.g+a.m12*c.m21+a.m22*c.m22)},pause:function(){this.element.hidden=!0},Va:function(){this.element.hidden=!1},na:function(a){var c=a.L;a.Aa&&this.context.clearRect(0,0,this.element.width,this.element.height);var b,d=this.Gc,c=u.va(-c.position.x,-c.position.y);b=new A(d.f*c.f+d.j*c.h+d.g*c.i,d.f*c.j+d.j*c.m11+d.g*c.m12,d.f*c.g+d.j*c.m21+d.g*c.m22,d.h*c.f+d.m11*c.h+d.m21*c.i,d.h*c.j+d.m11*
c.m11+d.m21*c.m12,d.h*c.g+d.m11*c.m21+d.m21*c.m22,d.i*c.f+d.m12*c.h+d.m22*c.i,d.i*c.j+d.m12*c.m11+d.m22*c.m12,d.i*c.g+d.m12*c.m21+d.m22*c.m22);this.context.strokeStyle="#000000";this.context.beginPath();d=0;for(c=a.T;d<c.length;){var e=c[d];++d;var f,g=e.start;f=p.c(function(){var a=g.a;return new h(b.f*a.x+b.j*a.y+b.g*a.z,b.h*a.x+b.m11*a.y+b.m21*a.z,b.i*a.x+b.m12*a.y+b.m22*a.z)}(this),g.u);var l=e.stop,e=p.c(function(){var a=l.a;return new h(b.f*a.x+b.j*a.y+b.g*a.z,b.h*a.x+b.m11*a.y+b.m21*a.z,b.i*
a.x+b.m12*a.y+b.m22*a.z)}(this),l.u);this.context.moveTo(f.a.x,f.a.y);this.context.lineTo(e.a.x,e.a.y)}this.context.stroke();d=0;for(c=a.P;d<c.length;){var m=c[d];++d;this.Fc(m.bb,function(){var a=m.H;return new A(b.f*a.f+b.j*a.h+b.g*a.i,b.f*a.j+b.j*a.m11+b.g*a.m12,b.f*a.g+b.j*a.m21+b.g*a.m22,b.h*a.f+b.m11*a.h+b.m21*a.i,b.h*a.j+b.m11*a.m11+b.m21*a.m12,b.h*a.g+b.m11*a.m21+b.m21*a.m22,b.i*a.f+b.m12*a.h+b.m22*a.i,b.i*a.j+b.m12*a.m11+b.m22*a.m12,b.i*a.g+b.m12*a.m21+b.m22*a.m22)}(this))}a.clear()},Fc:function(a,
c){var b=a.B,d;d=b.o;d=new h(d.x,d.y,d.z);var e;e=d;e=new h(e.x,e.y,e.z);e.x+=b.Y;d=new h(c.f*d.x+c.j*d.y+c.g*d.z,c.h*d.x+c.m11*d.y+c.m21*d.z,c.i*d.x+c.m12*d.y+c.m22*d.z);b=e=new h(c.f*e.x+c.j*e.y+c.g*e.z,c.h*e.x+c.m11*e.y+c.m21*e.z,c.i*e.x+c.m12*e.y+c.m22*e.z);b=new h(b.x,b.y,b.z);b.x-=d.x;b.y-=d.y;b.z-=d.z;b=Math.sqrt(b.x*b.x+b.y*b.y+b.z*b.z);this.context.strokeStyle="#FF0000";this.context.beginPath();this.context.arc(d.x,d.y,b,0,2*Math.PI);this.context.stroke()},l:X};V.b=!0;V.ha=[ga];V.prototype=
{ka:function(a){this.vb=.5;this.ob=a.yb;this.Cc=new N(new t(0,0,-this.vb,1),new t(0,0,-1,0));this.kc=new N(new t(0,0,-this.ob,1),new t(0,0,1,0));this.vc();this.uc();this.xc();this.context.clearColor(0,0,0,1);this.context.clearDepth(-1)},pause:function(){this.element.hidden=!0},Va:function(){this.element.hidden=!1},na:function(a){var c=this;this.X=new G;for(var b=ba.Vb(a.L,a.target),d=0,e=a.T;d<e.length;){var f=e[d];++d;var g;g=f.start;g=D.c(new t(g.a.x,g.a.y,0,g.a.z),g.u,0,g.Z);var f=f.stop,f=D.c(new t(f.a.x,
f.a.y,0,f.a.z),f.u,0,f.Z),l=D.clone(g),m=D.clone(f);l.a.z=this.fb;m.a.z=this.fb;l.ea=1;m.ea=1;var k=this.Oa(g.Z);this.X.D[k.ga].push([g,l,f]);this.X.D[k.ga].push([f,l,m])}d=0;for(e=a.P;d<e.length;){g=e[d];++d;var f=g.bb,l=g.H,q,m=f.B.o;q=new h(l.f*m.x+l.j*m.y+l.g*m.z,l.h*m.x+l.m11*m.y+l.m21*m.z,l.i*m.x+l.m12*m.y+l.m22*m.z);l=D.c(new t(q.x,q.y,0,1),0,0);m=D.c(new t(q.x+.1,q.y-.1,.9,1),0,1);k=D.c(new t(q.x-.1,q.y+.1,.9,1),1,0);q=D.c(new t(q.x+.1,q.y+.1,1.1,1),1,1);var n=this.Oa(f.Z),f=[];f.push([l,
m,k]);f.push([l,k,q]);f.push([l,q,m]);f.push([m,q,k]);l=this.X.D[n.ga];for(m=0;m<f.length;)k=f[m],++m,l.push(S.ia(g.nc,k))}a.Ha?(this.context.bindFramebuffer(36160,this.pb),this.context.viewport(0,0,this.width,this.height)):(this.context.bindFramebuffer(36160,null),this.context.viewport(0,0,this.Fb,this.Cb));this.context.useProgram(this.N);a.Aa&&this.context.clear(16640);this.context.enable(2929);this.context.depthFunc(518);this.context.enable(2884);this.context.uniformMatrix4fv(this.Jc,!1,ba.Xb(a.L,
this.vb,this.ob));this.context.activeTexture(33984);for(d=this.X.keys();d.rb();){e=d.next();g=this.X.D[e.ga].map(function(a){a=a.map(function(a){var c=a.a;return D.c(new t(b.f*c.x+b.j*c.y+b.g*c.z+b.Bc*c.m,b.h*c.x+b.m11*c.y+b.m21*c.z+b.m31*c.m,b.i*c.x+b.m12*c.y+b.m22*c.z+b.m32*c.m,b.Ac*c.x+b.m13*c.y+b.m23*c.z+b.m33*c.m),a.u,a.ea,a.Z)});return c.kc.ia(c.Cc.ia(a))});f=[];l=[];for(k=m=0;k<g.length;)if(q=g[k],++k,3!=q.length)4==q.length&&(g.push([q[0],q[1],q[3]]),g.push([q[1],q[2],q[3]]));else for(n=0;n<
q.length;){var p=q[n];++n;f.push(p.a.x);f.push(p.a.y);f.push(p.a.z);f.push(p.a.m);l.push(p.u);l.push(p.ea);m++}this.context.bindBuffer(34962,this.Uc);this.context.bufferData(34962,new Float32Array(f),35044);this.context.vertexAttribPointer(this.Ab,4,5126,!1,0,0);this.context.bindBuffer(34962,this.Sc);this.context.bufferData(34962,new Float32Array(l),35044);this.context.vertexAttribPointer(this.Bb,2,5126,!1,0,0);this.context.bindTexture(3553,e);this.context.uniform1i(this.Kc,0);this.context.uniform1f(this.Ic,
a.gamma);this.context.uniform1f(this.Hc,a.ba);this.context.drawArrays(4,0,m)}a.Ha&&(this.context.bindFramebuffer(36160,null),this.context.useProgram(this.ca),this.context.disable(2929),this.context.clear(16384),this.context.bindBuffer(34962,this.Eb),this.context.vertexAttribPointer(this.Db,3,5126,!1,0,0),this.context.viewport(0,0,this.Fb,this.Cb),this.context.bindTexture(3553,this.Na),this.context.drawArrays(4,0,6))},vc:function(){this.Na=this.context.createTexture();this.context.bindTexture(3553,
this.Na);this.context.texParameteri(3553,10240,9728);this.context.texParameteri(3553,10241,9728);this.context.texParameteri(3553,10242,33071);this.context.texParameteri(3553,10243,33071);this.context.texImage2D(3553,0,6408,this.width,this.height,0,6408,5121,null);var a=this.context.createRenderbuffer();this.context.bindRenderbuffer(36161,a);this.context.bindRenderbuffer(36161,a);this.context.renderbufferStorage(36161,33189,this.width,this.height);this.pb=this.context.createFramebuffer();this.context.bindFramebuffer(36160,
this.pb);this.context.framebufferTexture2D(36160,36064,3553,this.Na,0);this.context.framebufferRenderbuffer(36160,36096,36161,a);this.context.bindTexture(3553,null);this.context.bindRenderbuffer(36161,null);this.context.bindFramebuffer(36160,null)},xc:function(){var a=this.context.createShader(35633),c=this.context.createShader(35632);this.context.shaderSource(a,"attribute vec4 a_position;\n      attribute vec2 a_uv;\n      uniform mat4 u_pers;\n      varying vec2 v_uv;\n\n      void main() {\n        v_uv = a_uv;\n        vec4 pos = u_pers * a_position;\n        gl_Position = pos * (1.0/pos.w);\n      }");
this.context.shaderSource(c,"precision mediump float;\n\n      uniform sampler2D u_texture;\n      uniform float u_gamma;\n      uniform float u_fog;\n      varying vec2 v_uv;\n\n      vec3 gamma_correct(vec3 col) {\n        float gamma_exp = 1.0 / u_gamma;\n        return vec3(\n          pow(col.x, gamma_exp),\n          pow(col.y, gamma_exp),\n          pow(col.z, gamma_exp));\n      }\n\n      void main() {\n        float fog = pow(gl_FragCoord.z, u_fog);\n        vec3 color  = texture2D(u_texture, v_uv).xyz;\n        vec3 final_color = gamma_correct(color) * fog;\n        gl_FragColor = vec4(final_color, 1.0);\n      }");
this.context.compileShader(a);this.context.compileShader(c);this.N=this.context.createProgram();this.context.attachShader(this.N,a);this.context.attachShader(this.N,c);this.context.linkProgram(this.N);this.Ab=this.context.getAttribLocation(this.N,"a_position");this.context.enableVertexAttribArray(this.Ab);this.Bb=this.context.getAttribLocation(this.N,"a_uv");this.context.enableVertexAttribArray(this.Bb);this.Jc=this.context.getUniformLocation(this.N,"u_pers");this.Kc=this.context.getUniformLocation(this.N,
"u_texture");this.Ic=this.context.getUniformLocation(this.N,"u_gamma");this.Hc=this.context.getUniformLocation(this.N,"u_fog");a=this.context.createShader(35633);c=this.context.createShader(35632);this.context.shaderSource(a,"precision mediump float;\n\n      attribute vec4 a_position;\n      varying vec2 v_uv;\n\n      void main() {\n        gl_Position = a_position;\n        v_uv = a_position.xy * 0.5 + 0.5;\n      }");this.context.shaderSource(c,"precision mediump float;\n\n      uniform sampler2D u_texture;\n      varying vec2 v_uv;\n\n      void main() {\n        gl_FragColor = texture2D(u_texture, v_uv);\n      }");
this.context.compileShader(a);this.context.compileShader(c);this.ca=this.context.createProgram();this.context.attachShader(this.ca,a);this.context.attachShader(this.ca,c);this.context.linkProgram(this.ca);this.context.useProgram(this.ca);this.Db=this.context.getAttribLocation(this.ca,"a_position");this.context.enableVertexAttribArray(this.Db);this.context.bindTexture(3553,this.Oa("brick.png"));this.context.uniform1i(this.context.getUniformLocation(this.ca,"u_texture"),0)},uc:function(){this.Uc=this.context.createBuffer();
this.Sc=this.context.createBuffer();this.Eb=this.context.createBuffer();this.context.bindBuffer(34962,this.Eb);this.context.bufferData(34962,new Float32Array([-1,-1,0,1,-1,0,1,1,0,-1,-1,0,1,1,0,-1,1,0]),35044);this.context.bindBuffer(34962,null)},Oa:function(a){var c=this,b;if(this.Ya.ic(a))b=this.Ya.get(a);else{var d=window.document.createElement("img");b=this.context.createTexture();this.Ya.set(a,b);b;d.onload=function(){c.context.bindTexture(3553,b);c.context.texImage2D(3553,0,6408,6408,5121,d);
c.context.texParameteri(3553,10240,9729);c.context.texParameteri(3553,10241,9985);c.context.generateMipmap(3553);c.context.bindTexture(3553,null)};d.src="output/"+a}null==this.X.D.za[b.ga]&&(a=[],this.X.set(b,a),a);return b},l:V};U.b=!0;U.Ub=function(){var a=[];a.push(window.document.createElement("canvas"));a.push(window.document.createElement("canvas"));for(var c=[],b=0;b<a.length;){var d=a[b];++b;c.push(d)}b=window.document.body;for(d=0;d<c.length;){var e=c[d];++d;e.height=b.clientHeight-200;e.width=
16*e.height/9|0}for(d=0;d<a.length;)e=a[d],++d,b.appendChild(e);a=window.document.createElement("p");d=new ia(a);b.appendChild(a);return new ua(U.Ia(),new wa,new T(d),[new V(c[0]),new X(c[1])])};U.Ia=function(){var a=new I;a.K(w.s(5,5));a.K(w.s(8,4));a.K(w.s(6,6));a.K(w.s(4,4));a.K(w.s(4,4));a.K(w.s(5,5));a.K(w.s(3,10));a.K(w.s(4,4));a.K(w.s(5,5));a.K(w.s(5,1));a.K(w.s(5,3));a.A(0,1,k.O);a.A(1,2,k.O);a.A(1,3,k.I);a.A(3,2,k.I);a.A(0,4,k.M);a.A(4,5,k.O);a.A(5,8,k.I);a.A(8,6,k.I);a.A(6,7,k.$);a.A(7,
0,k.M);a.A(6,9,k.I);a.A(9,10,k.O);a.A(10,10,k.M);a.Gb(1);return a};T.b=!0;T.ha=[va];T.prototype={ka:function(a){this.wc(a);a.Ja=new na(a.Ia)},Ec:function(a,c){this.ja.clear();this.Rc(a,c);this.ec(a.P,a);this.Qc(a,c);this.ja.na();this.frames++},Rc:function(a,c){a.W.move(a.controller.ya,c)},ec:function(a,c){for(var b=0,d=a.length;b<d;){var e=b++,f=a[e];if(f.gb){var g=c.Ja.w,l=g[f.F],m=[];m.push({id:f.F,H:new A(1,0,0,0,1,0,0,0,1)});for(var k=0,n=l.xa;k<n.length;){var p=n[k];++k;m.push({id:p.da,H:p.H})}k=
f.B;e+=1;for(n=a.length;e<n;)if(p=e++,p=a[p],p.gb)for(var r=0;r<m.length;){var t=m[r];++r;if(p.F==t.id){r=u.aa(t.H);p=k.rc(p.B.H(r)).raw();switch(p[1]){case 1:p=p[2],k.o.x+=p.stop.a.x-p.start.a.x,k.o.y+=p.stop.a.y-p.start.a.y,this.ja.Ra++}this.ja.Qa++;break}}m=0;for(e=l.T;m<e.length;){n=e[m];++m;n=k.sc(n).raw();switch(n[1]){case 1:n=n[2],k.o.x+=n.stop.a.x-n.start.a.x,k.o.y+=n.stop.a.y-n.start.a.y,this.ja.Ra++}this.ja.Qa++}k=new Q(f.B.o.x,f.B.o.y);if(!l.floor.Ca(k))for(m=0,e=l.xa;m<e.length;)if(l=
e[m],++m,u.$a(l.H,g[l.da].floor).Ca(k)){g=u.aa(l.H);f.F=l.da;k=f.B.o;f.B.o=new h(g.f*k.x+g.j*k.y+g.g*k.z,g.h*k.x+g.m11*k.y+g.m21*k.z,g.i*k.x+g.m12*k.y+g.m22*k.z);c.L.F=l.da;f=c.L.position;c.L.position=new h(g.f*f.x+g.j*f.y+g.g*f.z,g.h*f.x+g.m11*f.y+g.m21*f.z,g.i*f.x+g.m12*f.y+g.m22*f.z);break}}}},Qc:function(a,c){var b=new h(Math.cos(a.W.heading),Math.sin(a.W.heading),0),b=new h(b.x,b.y,b.z);b.x*=2;b.y*=2;b.z*=2;var d=a.W.B.o,d=new h(d.x,d.y,d.z);d.x-=b.x;d.y-=b.y;d.z-=b.z;a.L.move(d,c)},wc:function(a){function c(b){if(r.Lb(b)){var c;
c="keydown"==b.type?1:0;var e=b.keyCode;switch(e){case 87:a.controller.ya.Jb(c);break;case 83:a.controller.ya.Jb(-c);break;case 65:a.controller.ya.Ib(-c);break;case 68:a.controller.ya.Ib(c);break;default:if(0==c)switch(e){case 80:a.Dc();break;case 79:a.Oc();break;case 219:a.ba-=.1;break;case 221:a.ba+=.1;break;case 61:a.Hb(a.v.gamma+.1);break;case 173:a.Hb(a.v.gamma-.1);break;case 48:a.Nc();break;case 32:a.hc();break;case 90:a.cc();break;default:P.log(b.keyCode)}}}}window.document.body.addEventListener("keydown",
c,!1);window.document.body.addEventListener("keyup",c,!1)},l:T};w.b=!0;w.s=function(a,c){return new w(a,c)};w.prototype={A:function(a,c){this.ib.push({direction:c,wb:a})},l:w};var k={ta:!0,ab:["North","South","East","West"],M:["North",0]};k.M.toString=F;k.M.C=k;k.I=["South",1];k.I.toString=F;k.I.C=k;k.O=["East",2];k.O.toString=F;k.O.C=k;k.$=["West",3];k.$.toString=F;k.$.C=k;I.b=!0;I.Wc=function(){return-1};I.Pb=function(a){switch(a[1]){case 0:return k.I;case 1:return k.M;case 2:return k.$;case 3:return k.O}};
I.prototype={K:function(a){return this.w.push(a)-1},A:function(a,c,b){this.Za(a)&&this.Za(c)?(this.w[a].A(c,b),this.w[c].A(a,I.Pb(b))):P.log("Invalid connection created")},Gb:function(a){this.Za(a)||P.log("Invalid default room");return this.Da=a},Za:function(a){return 0<=a&&a<this.w.length},l:I};String.prototype.l=String;String.b=!0;Array.b=!0;var Ia={b:["Int"]},Ja={b:["Dynamic"]},Ea=Number;Ea.b=["Float"];var Fa=Boolean;Fa.ta=["Bool"];var Ka={b:["Class"]},La={};null==Array.prototype.map&&(Array.prototype.map=
function(a){for(var c=[],b=0,d=this.length;b<d;){var e=b++;c[e]=a(this[e])}return c});var Da={};G.Qb=0;r.Ob={}.toString;Ca.Wb()})("undefined"!=typeof console?console:{log:function(){}});
