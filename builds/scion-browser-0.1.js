(function(){var a=Array.prototype.indexOf||function(a){for(var b=0,c=this.length;b<c;b++)if(this[b]===a)return b;return-1};define("util/set/ArraySet",[],function(){var b;return b=function(){function b(a){var b,c,d;a==null&&(a=[]),this.o=[];for(c=0,d=a.length;c<d;c++)b=a[c],this.add(b)}return b.prototype.add=function(a){if(!this.contains(a))return this.o.push(a)},b.prototype.remove=function(a){var b,c;for(b=0,c=this.o.length;0>c?b>c:b<c;0>c?b--:b++)if(this.o[b]===a)return this.o.splice(b,1),!0;return!1},b.prototype.union=function(a){var b,c,d;a=a.iter?a.iter():a;for(c=0,d=a.length;c<d;c++)b=a[c],this.add(b);return this},b.prototype.difference=function(a){var b,c,d;a=a.iter?a.iter():a;for(c=0,d=a.length;c<d;c++)b=a[c],this.remove(b);return this},b.prototype.contains=function(b){return a.call(this.o,b)>=0},b.prototype.iter=function(){return this.o},b.prototype.isEmpty=function(){return!this.o.length},b.prototype.equals=function(a){var b,c,d,e,f,g,h;b=a.iter(),h=this.o;for(d=0,f=h.length;d<f;d++){c=h[d];if(!a.contains(c))return!1}for(e=0,g=b.length;e<g;e++){c=b[e];if(!this.contains(c))return!1}return!0},b.prototype.toString=function(){return"Set("+this.o.toString()+")"},b}()})}).call(this),function(){define("scxml/state-kinds-enum",{BASIC:0,COMPOSITE:1,PARALLEL:2,HISTORY:3,INITIAL:4,FINAL:5})}.call(this),define("util/reduce",[],function(){return function(a,b,c){if(a.reduce)return c?a.reduce(b,c):a.reduce(b);var d=a.length,e;if(typeof b!="function")throw new TypeError;if(d===0&&arguments.length===2)throw new TypeError;var f=0;if(arguments.length<3){do{if(f in a){e=a[f++];break}if(++f>=d)throw new TypeError}while(!0)}else e=arguments[2];for(;f<d;f++)f in a&&(e=b.call(undefined,e,a[f],f,a));return e}}),function(){var a=Array.prototype.indexOf||function(a){for(var b=0,c=this.length;b<c;b++)if(this[b]===a)return b;return-1};define("scxml/default-transition-selector",[],function(){return function(){return function(b,c,d){var e,f,g,h,i,j;f=[],i=b.transitions;for(g=0,h=i.length;g<h;g++)e=i[g],(!e.event||(j=e.event,a.call(c,j)>=0))&&(!e.cond||d(e))&&f.push(e);return f}}})}.call(this),function(){var a=Array.prototype.indexOf||function(a){for(var b=0,c=this.length;b<c;b++)if(this[b]===a)return b;return-1};define("scxml/model",["scxml/state-kinds-enum"],function(b){return{getDepth:function(a){var b,c;b=0,c=a.parent;while(c)b+=1,c=c.parent;return b},getAncestors:function(a,b){var c,d;c=[],d=a.parent;while(d&&d!==b)c.push(d),d=d.parent;return c},getAncestorsOrSelf:function(a,b){return[a].concat(this.getAncestors(a,b))},getDescendants:function(a){var b,c,d,e,f,g,h;c=[],d=a.children.slice();while(d.length){e=d.shift(),c.push(e),h=e.children;for(f=0,g=h.length;f<g;f++)b=h[f],d.push(b)}return c},getDescendantsOrSelf:function(a){return[a].concat(this.getDescendants(a))},isOrthogonalTo:function(a,c){return!this.isAncestrallyRelatedTo(a,c)&&this.getLCA(a,c).kind===b.PARALLEL},isAncestrallyRelatedTo:function(b,c){return a.call(this.getAncestorsOrSelf(c),b)>=0||a.call(this.getAncestorsOrSelf(b),c)>=0},getLCA:function(b,c){var d,e,f,g;return arguments.length===1?(g=b,this.getLCA(g.source,g.targets[0])):(f=b,e=function(){var b,e,g,h;g=this.getAncestors(f),h=[];for(b=0,e=g.length;b<e;b++)d=g[b],a.call(this.getDescendants(d),c)>=0&&h.push(d);return h}.call(this),e[0])}}})}.call(this),function(){define("scxml/setup-default-opts",["scxml/default-transition-selector","util/set/ArraySet","scxml/model"],function(a,b,c){return function(d){var e,f,g,h,i;return d==null&&(d={}),(e=d.TransitionSet)!=null?e:d.TransitionSet=b,(f=d.StateSet)!=null?f:d.StateSet=b,(g=d.BasicStateSet)!=null?g:d.BasicStateSet=b,(h=d.transitionSelector)!=null?h:d.transitionSelector=a(),(i=d.model)!=null?i:d.model=c,d}})}.call(this),function(){var a=Array.prototype.indexOf||function(a){for(var b=0,c=this.length;b<c;b++)if(this[b]===a)return b;return-1};define("util/annotate-scxml-json",["scxml/state-kinds-enum"],function(b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y;return c=["state","parallel","history","final","initial"],d=c.concat("scxml"),q=e=y=x=n=p=f=void 0,t=function(a,b,c,d,e){return JSON.stringify(r(a,b,c,d,e))},r=function(a,b,c,d,i){var l,m,o,r,s,t,u,w,z,A,B,C,D,E,F,G;q=[],e=[],y={},x=[],n={},p=[],f={},o=v(a,[],b,c,d,i),G=g(a),t=G[0],l=G[1],m=G[2];if(c||i)for(A=0,D=q.length;A<D;A++)s=q[A],s.ancestors.reverse();if(d||i)for(B=0,E=q.length;B<E;B++)s=q[B],s.descendants.reverse();if(i)for(C=0,F=x.length;C<F;C++)z=x[C],r=n[z.source],w=function(){var a,b,c,d;c=z.targets,d=[];for(a=0,b=c.length;a<b;a++)u=c[a],d.push(n[u]);return d}(),r?w.length||(console.debug(z),new Error("target missing")):(console.debug(z),new Error("source missing")),z.lca=k(r,w[0]);return{states:q,transitions:x,root:o.id,events:h(y),scripts:j(m),profile:l.profile,version:l.version,datamodel:f}},j=function(a){var b,c,d,e,f,h,i,j,k,l,m;h=[];for(i=0,k=a.length;i<k;i++){c=a[i],m=g(c),f=m[0],b=m[1],d=m[2];if(f==="script")for(j=0,l=d.length;j<l;j++)e=d[j],typeof e=="string"&&h.push(e)}return h},h=function(a){var b,c,d;c=0,d={};for(b in a)d[b]={name:b,documentOrder:c++};return d},g=function(a,b){var c,d,e,f,g;return g=a[0],f=a[1],f&&typeof f=="object"&&!o(f||typeof f=="string")?(c=f,e=a.slice(2)):e=a.slice(1),b&&(e=function(){var a,b,c;c=[];for(a=0,b=e.length;a<b;a++)d=e[a],typeof d!="string"&&c.push(d);return c}()),[g,c,e]},w=function(a,b,c,d,e,f){var h,i,j,k,l,m;return m=g(a,!0),k=m[0],h=m[1],j=m[2],h.event&&(y[h.event]=!0),l={documentOrder:x.length,id:x.length,source:b.id,cond:h.cond,event:h.event,actions:function(){var a,b,c;c=[];for(a=0,b=j.length;a<b;a++)i=j[a],c.push(s(i));return c}(),targets:h.target.trim().split(/\s+/)},x.push(l),l},s=function(a){var b,c,d,e,f;f=g(a),e=f[0],b=f[1],d=f[2];switch(e){case"if":return{type:"if",cond:b.cond,actions:function(){var a,b,e;e=[];for(a=0,b=d.length;a<b;a++)c=d[a],e.push(s(c));return e}()};case"elseif":return{type:"elseif",cond:b.cond,actions:function(){var a,b,e;e=[];for(a=0,b=d.length;a<b;a++)c=d[a],e.push(s(c));return e}()};case"else":return{type:"else",actions:function(){var a,b,e;e=[];for(a=0,b=d.length;a<b;a++)c=d[a],e.push(s(c));return e}()};case"log":return{type:"log",expr:b.expr,label:b.label};case"script":return{type:"script",script:d.join("\n")};case"send":return{type:"send",delay:b.delay,id:b.id,contentexpr:b.contentexpr,event:b.event};case"cancel":return{type:"cancel",sendid:b.sendid};case"assign":return{type:"assign",location:b.location,expr:b.expr};case"invoke":throw new Exception(""+e+" not yet supported");case"finalize":throw new Exception(""+e+" not yet supported");case"raise":throw new Exception(""+e+" not yet supported")}},u=function(a,b,c,d,e,h){var i,j,k,l,m,n,o,p,q,r,s,t;r=g(a,!0),o=r[0],i=r[1],n=r[2],t=[];for(p=0,q=n.length;p<q;p++)j=n[p],j[0]==="data"&&(s=g(j,!0),m=s[0],k=s[1],l=s[2],t.push(k.id?f[k.id]=k.expr||null:void 0));return t},v=function(f,h,j,k,l,m){var p,r,t,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X;W=g(f,!0),L=W[0],t=W[1],B=W[2],D=(t!=null?t.id:void 0)||i(L),console.warn("Processing "+L+" node with id '"+D+"'"),E=function(){switch(L){case"state":return!function(){var b,c,e,f;f=[];for(b=0,c=B.length;b<c;b++)x=B[b],(e=x[0],a.call(d,e)>=0)&&f.push(x);return f}().length?b.BASIC:b.COMPOSITE;case"scxml":return b.COMPOSITE;case"initial":return b.INITIAL;case"parallel":return b.PARALLEL;case"final":return b.FINAL;case"history":return b.HISTORY}}(),J={id:D,kind:E,descendants:[]},n[D]=J,h.length&&(J.parent=h[h.length-1]),E===b.HISTORY&&(J.isDeep=t.type==="deep"?!0:!1),J.documentOrder=q.length,q.push(J);if(E===b.BASIC||E===b.INITIAL||E===b.HISTORY)J.basicDocumentOrder=e.length,e.push(J);j&&(J.depth=h.length);if(k||m)J.ancestors=h.slice();if(l||m)for(O=0,S=h.length;O<S;O++)r=h[O],n[r].descendants.push(J.id);H=[],G=[],N=[],K=[],F=h.concat(J.id),I=!1,(t!=null?t.initial:void 0)&&!I&&(console.log("generating fake initial node"),C=["initial",["transition",{target:t.initial}]],x=v(C,F,j,k,l,m),J.initial=x.id,K.push(x),I=!0);for(P=0,T=B.length;P<T;P++){x=B[P];if(o(x)){X=g(x,!0),A=X[0],y=X[1],z=X[2];switch(A){case"transition":N.push(w(x,J));break;case"onentry":for(Q=0,U=z.length;Q<U;Q++)p=z[Q],G.push(s(p));break;case"onexit":for(R=0,V=z.length;R<V;R++)p=z[R],H.push(s(p));break;case"initial":I||(x=v(x,F,j,k,l,m),J.initial=x.id,K.push(x));break;case"history":x=v(x,F,j,k,l,m),J.history=x.id,K.push(x);break;case"datamodel":u(x,F,j,k,l,m);break;default:a.call(c,A)>=0&&K.push(v(x,F,j,k,l,m))}}}return J.onexit=H,J.onentry=G,J.transitions=function(){var a,b,c;c=[];for(b=0,a=N.length;b<a;b++)M=N[b],c.push(M.documentOrder);return c}(),J.children=function(){var a,b,c;c=[];for(b=0,a=K.length;b<a;b++)x=K[b],c.push(x.id);return c}(),J},o=function(a){return Object.prototype.toString.call(a)==="[object Array]"},m="$generated",l={},i=function(a){var b;return(b=l[a])!=null?b:l[a]=0,""+m+"-"+a+"-"+l[a]++},k=function(b,c){var d,e,f,g,h,i,j;f=[],i=b.ancestors;for(g=0,h=i.length;g<h;g++)d=i[g],e=n[d],(j=c.id,a.call(e.descendants,j)>=0)&&f.push(d);if(!f.length)throw new Error("Could not find LCA for states.");return f[0]},function(a,b){var c,d,e,f;return typeof a=="object"&&o(a)?r(a):(d=function(a){var c,d,e;return e=JSON.parse(a),d=t(e,!0,!0,!0,!0),b==="-"?process.stdout.write(d):(c=require("fs"),c.writeFileSync(b,d,"utf-8"))},!a||a==="-"?(process.stdin.resume(),process.stdin.setEncoding("utf-8"),e="",process.stdin.on("data",function(a){return e+=a}),process.stdin.on("end",function(){return d(e)})):(c=require("fs"),f=c.readFileSync(a,"utf-8"),d(f)))}})}.call(this),function(){define("scxml/json2model",["scxml/model"],function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n;return e=a.SCXMLModel,h=a.State,i=a.Transition,g=a.SendAction,c=a.CancelAction,d=a.LogAction,b=a.AssignAction,f=a.ScriptAction,j=function(a){return a?a.slice(-2)==="ms"?parseFloat(a.slice(0,-2)):a.slice(-1)==="s"?parseFloat(a.slice(0,-1))*1e3:parseFloat(a):0},l=function(a,b){return new Function("getData","setData","In","_events","datamodel","var _event = _events[0]; with(datamodel){"+(b?"return":"")+" "+a+"}")},m=function(){return this.id},n=function(){var a;return""+this.source.id+" -> ["+function(){var b,c,d,e;d=this.targets,e=[];for(b=0,c=d.length;b<c;b++)a=d[b],e.push(a.id);return e}.call(this)+"]"},k=function(a){var b,c,d,e,f,g,h,i,k,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G;d={},B=a.states;for(k=0,r=B.length;k<r;k++)e=B[k],d[e.id]=e;C=a.transitions;for(o=0,s=C.length;o<s;o++)h=C[o],h.toString=n,h.evaluateCondition=l(h.cond,!0);D=a.states;for(p=0,t=D.length;p<t;p++){e=D[p],e.toString=m,e.transitions=function(){var b,c,d,f;d=e.transitions,f=[];for(b=0,c=d.length;b<c;b++)i=d[b],f.push(a.transitions[i]);return f}(),c=e.onentry.concat(e.onexit),E=e.transitions;for(q=0,u=E.length;q<u;q++){h=E[q],F=h.actions;for(y=0,v=F.length;y<v;y++)b=F[y],c.push(b)}for(z=0,w=c.length;z<w;z++){b=c[z];switch(b.type){case"script":b.evaluate=l(b.script);break;case"assign":b.evaluate=l(b.expr,!0);break;case"send":b.contentexpr&&(b.evaluate=l(b.contentexpr,!0));break;case"log":b.evaluate=l(b.expr,!0)}b.type==="send"&&b.delay&&(b.delay=j(b.delay))}e.initial=d[e.initial],e.history=d[e.history],e.children=function(){var a,b,c,g;c=e.children,g=[];for(b=0,a=c.length;b<a;b++)f=c[b],g.push(d[f]);return g}(),e.parent=d[e.parent],G=e.transitions;for(A=0,x=G.length;A<x;A++)g=G[A],g.source=d[g.source],g.targets=function(){var a,b,c,e;c=g.targets,e=[];for(b=0,a=c.length;b<a;b++)f=c[b],e.push(d[f]);return e}()}return a.root=d[a.root],a}})}.call(this),function(){define("scxml/event",[],function(){var a;return a=function(){function a(a,b){this.name=a!=null?a:"",this.data=b}return a.prototype.toString=function(){return this.name},a}()})}.call(this),function(){var __hasProp=Object.prototype.hasOwnProperty,__indexOf=Array.prototype.indexOf||function(a){for(var b=0,c=this.length;b<c;b++)if(this[b]===a)return b;return-1},__bind=function(a,b){return function(){return a.apply(b,arguments)}},__extends=function(a,b){function d(){this.constructor=a}for(var c in b)__hasProp.call(b,c)&&(a[c]=b[c]);return d.prototype=b.prototype,a.prototype=new d,a.__super__=b.prototype,a};define("scxml/SCXML",["util/set/ArraySet","scxml/state-kinds-enum","scxml/event","util/reduce","scxml/setup-default-opts"],function(ArraySet,stateKinds,Event,reduce,setupDefaultOpts){var BrowserInterpreter,NodeInterpreter,SCXMLInterpreter,SimpleInterpreter,create,flatten,getTransitionWithHigherSourceChildPriority;return flatten=function(a){var b,c,d,e;b=[];for(d=0,e=a.length;d<e;d++)c=a[d],b=b.concat(c);return b},create=function(a){var b;return Object.create?Object.create(a):(b=function(){},b.prototype=a,new b)},getTransitionWithHigherSourceChildPriority=function(a){return function(b){var c,d;return c=b[0],d=b[1],"compare transitions based first on depth, then based on document order",a.getDepth(c.source)<a.getDepth(d.source)?d:a.getDepth(d.source)<a.getDepth(c.source)?c:c.documentOrder<d.documentOrder?c:d}},SCXMLInterpreter=function(){function SCXMLInterpreter(model,opts){var k,v,_base,_base2,_base3,_base4,_base5,_ref,_ref2,_ref3,_ref4,_ref5;this.model=model,this.opts=opts!=null?opts:{};if(this.opts.printTrace){console.debug("initializing SCXML interpreter with opts:");for(k in opts){if(!__hasProp.call(opts,k))continue;v=opts[k],v=typeof v=="function"?v.toString():v,console.debug(k,v)}}(_ref=(_base=this.opts).StateIdSet)!=null?_ref:_base.StateIdSet=ArraySet,(_ref2=(_base2=this.opts).EventSet)!=null?_ref2:_base2.EventSet=ArraySet,(_ref3=(_base3=this.opts).TransitionPairSet)!=null?_ref3:_base3.TransitionPairSet=ArraySet,(_ref4=(_base4=this.opts).priorityComparisonFn)!=null?_ref4:_base4.priorityComparisonFn=getTransitionWithHigherSourceChildPriority(this.opts.model),(_ref5=(_base5=this.opts).globalEval)!=null?_ref5:_base5.globalEval=(typeof window!="undefined"&&window!==null?window.executeScript:void 0)||eval,this._configuration=new this.opts.BasicStateSet,this._historyValue={},this._innerEventQueue=[],this._isInFinalState=!1,this._datamodel=create(this.model.datamodel),this._timeoutMap={}}return SCXMLInterpreter.prototype.start=function(){var k,script,v,_i,_len,_ref,_ref2;this.opts.printTrace&&console.debug("performing initial big step"),this._configuration.add(this.model.root.initial),_ref=this.model.scripts;for(_i=0,_len=_ref.length;_i<_len;_i++){script=_ref[_i];with(this._datamodel)this.opts.globalEval.call(null,script)}_ref2=this._datamodel;for(k in _ref2)v=_ref2[k],v&&(this._datamodel[k]=eval(v));return this._performBigStep()},SCXMLInterpreter.prototype.getConfiguration=function(){var a;return new this.opts.StateIdSet(function(){var b,c,d,e;d=this._configuration.iter(),e=[];for(b=0,c=d.length;b<c;b++)a=d[b],e.push(a.id);return e}.call(this))},SCXMLInterpreter.prototype.getFullConfiguration=function(){var a;return new this.opts.StateIdSet(function(){var b,c,d,e;d=flatten(function(){var b,c,d,e;d=this._configuration.iter(),e=[];for(b=0,c=d.length;b<c;b++)a=d[b],e.push([a].concat(this.opts.model.getAncestors(a)));return e}.call(this)),e=[];for(b=0,c=d.length;b<c;b++)a=d[b],e.push(a.id);return e}.call(this))},SCXMLInterpreter.prototype.isIn=function(a){return this.getFullConfiguration().contains(a)},SCXMLInterpreter.prototype._performBigStep=function(a){var b,c,d,e,f,g;a&&this._innerEventQueue.push(new this.opts.EventSet([a])),d=!0;while(d)c=this._innerEventQueue.length?this._innerEventQueue.shift():new this.opts.EventSet,b={},g=this._performSmallStep(c,b),d=!g.isEmpty();e=function(){var a;a=[];for(f in this._configuration.iter())f.kind===!stateKinds.FINAL&&a.push(f);return a}.call(this);if(e.length===0)return this._isInFinalState=!0},SCXMLInterpreter.prototype._performSmallStep=function(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F;this.opts.printTrace&&console.debug("selecting transitions with eventSet: ",a),j=this._selectTransitions(a,b),this.opts.printTrace&&console.debug("selected transitions: ",j);if(!j.isEmpty()){this.opts.printTrace&&console.debug("sorted transitions: ",j),B=this._getStatesExited(j),e=B[0],n=B[1],C=this._getStatesEntered(j),d=C[0],m=C[1],this.opts.printTrace&&console.debug("basicStatesExited ",e),this.opts.printTrace&&console.debug("basicStatesEntered ",d),this.opts.printTrace&&console.debug("statesExited ",n),this.opts.printTrace&&console.debug("statesEntered ",m),f=new this.opts.EventSet,this.opts.printTrace&&console.debug("executing state exit actions");for(p=0,t=n.length;p<t;p++){l=n[p],this.opts.printTrace&&console.debug("exiting ",l),D=l.onexit;for(q=0,u=D.length;q<u;q++)c=D[q],this._evaluateAction(c,a,b,f);l.history&&(l.history.isDeep?g=__bind(function(a){return a.kind===stateKinds.BASIC&&__indexOf.call(this.opts.model.getDescendants(l),a)>=0},this):g=function(a){return a.parent===l},this._historyValue[l.history.id]=function(){var a,b,c;c=[];for(a=0,b=n.length;a<b;a++)i=n[a],g(i)&&c.push(i);return c}())}k=j.iter().sort(function(a,b){return a.documentOrder-b.documentOrder}),this.opts.printTrace&&console.debug("executing transitition actions");for(r=0,v=k.length;r<v;r++){o=k[r],this.opts.printTrace&&console.debug("transitition ",o),E=o.actions;for(s=0,w=E.length;s<w;s++)c=E[s],this._evaluateAction(c,a,b,f)}this.opts.printTrace&&console.debug("executing state enter actions");for(z=0,x=m.length;z<x;z++){l=m[z],this.opts.printTrace&&console.debug("entering ",l),F=l.onentry;for(A=0,y=F.length;A<y;A++)c=F[A],this._evaluateAction(c,a,b,f)}this.opts.printTrace&&console.debug("updating configuration "),this.opts.printTrace&&console.debug("old configuration ",this._configuration),this._configuration.difference(e),this._configuration.union(d),this.opts.printTrace&&console.debug("new configuration ",this._configuration),f.isEmpty()||(this.opts.printTrace&&console.debug("adding triggered events to inner queue ",f),this._innerEventQueue.push(f)),this.opts.printTrace&&console.debug("updating datamodel for next small step :");for(h in b){if(!__hasProp.call(b,h))continue;this.opts.printTrace&&console.debug("key ",h),h in this._datamodel?this.opts.printTrace&&console.debug("old value ",this._datamodel[h]):this.opts.printTrace&&console.debug("old value is null"),this.opts.printTrace&&console.debug("new value ",b[h]),this._datamodel[h]=b[h]}}return j},SCXMLInterpreter.prototype._evaluateAction=function(a,b,c,d){var e,f;switch(a.type){case"send":return this.opts.printTrace&&console.debug("sending event",a.event,"with content",a.contentexpr),e=a.contentexpr?this._eval(a,c,b):null,d.add(new Event(a.event,e));case"assign":return c[a.location]=this._eval(a,c,b);case"script":return this._eval(a,c,b,!0);case"log":f=this._eval(a,c,b);if(this.opts.printTrace)return console.log(f)}},SCXMLInterpreter.prototype._eval=function(a,b,c,d){var e;return e=this._getScriptingInterface(b,c,d),a.evaluate.call(this.opts.evaluationContext,e.getData,e.setData,e.In,e.events,this._datamodel)},SCXMLInterpreter.prototype._getScriptingInterface=function(a,b,c){return c==null&&(c=!1),{setData:c?function(b,c){return a[b]=c}:function(){},getData:__bind(function(a){return this._datamodel[a]},this),In:__bind(function(a){return this.isIn(a)},this),events:b.iter()}},SCXMLInterpreter.prototype._getStatesExited=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;h=new this.opts.StateSet,c=new this.opts.BasicStateSet,p=a.iter();for(j=0,m=p.length;j<m;j++){i=p[j],e=this.opts.model.getLCA(i),d=this.opts.model.getDescendants(e),q=this._configuration.iter();for(k=0,n=q.length;k<n;k++){g=q[k];if(__indexOf.call(d,g)>=0){c.add(g),h.add(g),r=this.opts.model.getAncestors(g,e);for(l=0,o=r.length;l<o;l++)b=r[l],h.add(b)}}}return f=h.iter().sort(__bind(function(a,b){return this.opts.model.getDepth(b)-this.opts.model.getDepth(a)},this)),[c,f]},SCXMLInterpreter.prototype._getStatesEntered=function(a){var b,c,d,e,f,g,h,i,j,k;h=flatten(function(){var b,c,d,e;d=a.iter(),e=[];for(b=0,c=d.length;b<c;b++)i=d[b],e.push(function(){var a,b,c,d;c=i.targets,d=[];for(a=0,b=c.length;a<b;a++)f=c[a],d.push(f);return d}());return e}()),this.opts.printTrace&&console.debug("statesToRecursivelyAdd :",h),g=new this.opts.StateSet,b=new this.opts.BasicStateSet;while(h.length){for(j=0,k=h.length;j<k;j++)f=h[j],this._recursiveAddStatesToEnter(f,g,b);c=flatten(function(){var a,b,c,e;c=g.iter(),e=[];for(a=0,b=c.length;a<b;a++)d=c[a],d.kind===stateKinds.PARALLEL&&e.push(d.children);return e}()),h=function(){var a,b,e;e=[];for(a=0,b=c.length;a<b;a++)d=c[a],!d.kind===stateKinds.HISTORY&&!g.contains(d)&&e.push(d);return e}()}return e=g.iter().sort(__bind(function(a,b){return this.opts.model.getDepth(a)-this.opts.model.getDepth(b)},this)),[b,e]},SCXMLInterpreter.prototype._recursiveAddStatesToEnter=function(a,b,c){var d,e,f,g,h,i,j,k,l,m;if(a.kind===stateKinds.HISTORY){if(a.id in this._historyValue){j=this._historyValue[a.id],l=[];for(f=0,h=j.length;f<h;f++)e=j[f],l.push(this._recursiveAddStatesToEnter(e,b,c));return l}return b.add(a),c.add(a)}b.add(a);if(a.kind===stateKinds.PARALLEL){k=a.children,m=[];for(g=0,i=k.length;g<i;g++)d=k[g],m.push(d.kind!==stateKinds.HISTORY?this._recursiveAddStatesToEnter(d,b,c):void 0);return m}if(a.kind===stateKinds.COMPOSITE)return this._recursiveAddStatesToEnter(a.initial,b,c);if(a.kind===stateKinds.INITIAL||a.kind===stateKinds.BASIC||a.kind===stateKinds.FINAL)return c.add(a)},SCXMLInterpreter.prototype._selectTransitions=function(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y;if(this.opts.onlySelectFromBasicStates)l=this._configuration.iter();else{m=new this.opts.StateSet,w=this._configuration.iter();for(o=0,s=w.length;o<s;o++){d=w[o],m.add(d),x=this.opts.model.getAncestors(d);for(p=0,t=x.length;p<t;p++)c=x[p],m.add(c)}l=m.iter()}i=this._getScriptingInterface(b,a),e=__bind(function(a){return a.evaluateCondition.call(this.opts.evaluationContext,i.getData,i.setData,i.In,i.events,this._datamodel)},this),h=function(){var b,c,d,e;d=a.iter(),e=[];for(b=0,c=d.length;b<c;b++)g=d[b],e.push(g.name);return e}(),f=new this.opts.TransitionSet;for(q=0,u=l.length;q<u;q++){k=l[q],y=this.opts.transitionSelector(k,h,e);for(r=0,v=y.length;r<v;r++)n=y[r],f.add(n)}return this.opts.printTrace&&console.debug("allTransitionsForEachState",allTransitionsForEachState),j=this._selectPriorityEnabledTransitions(f),this.opts.printTrace&&console.debug("priorityEnabledTransitions",j),j},SCXMLInterpreter.prototype._selectPriorityEnabledTransitions=function(a){var b,c,d,e,f,g;d=new this.opts.TransitionSet,f=this._getInconsistentTransitions(a),b=f[0],c=f[1],d.union(b),this.opts.printTrace&&console.debug("enabledTransitions",a),this.opts.printTrace&&console.debug("consistentTransitions",b),this.opts.printTrace&&console.debug("inconsistentTransitionsPairs",c),this.opts.printTrace&&console.debug("priorityEnabledTransitions",d);while(!c.isEmpty())a=new this.opts.TransitionSet(function(){var a,b,d,f;d=c.iter(),f=[];for(a=0,b=d.length;a<b;a++)e=d[a],f.push(this.opts.priorityComparisonFn(e));return f}.call(this)),g=this._getInconsistentTransitions(a),b=g[0],c=g[1],d.union(b),this.opts.printTrace&&console.debug("enabledTransitions",a),this.opts.printTrace&&console.debug("consistentTransitions",b),this.opts.printTrace&&console.debug("inconsistentTransitionsPairs",c),this.opts.printTrace&&console.debug("priorityEnabledTransitions",d);return d},SCXMLInterpreter.prototype._getInconsistentTransitions=function(a){var b,c,d,e,f,g,h,i,j,k,l;b=new this.opts.TransitionSet,e=new this.opts.TransitionPairSet,i=a.iter(),this.opts.printTrace&&console.debug("transitions",i);for(d=0,j=i.length;0>j?d>j:d<j;0>j?d--:d++)for(f=k=d+1,l=i.length;k>l?f>l:f<l;k>l?f--:f++)g=i[d],h=i[f],this._conflicts(g,h)&&(b.add(g),b.add(h),e.add([g,h]));return c=a.difference(b),[c,e]},SCXMLInterpreter.prototype._conflicts=function(a,b){return!this._isArenaOrthogonal(a,b)},SCXMLInterpreter.prototype._isArenaOrthogonal=function(a,b){var c,d,e;return d=this.opts.model.getLCA(a),e=this.opts.model.getLCA(b),c=this.opts.model.isOrthogonalTo(d,e),this.opts.printTrace&&(console.debug("transition LCAs",d.id,e.id),console.debug("transition LCAs are orthogonal?",c)),c},SCXMLInterpreter}(),SimpleInterpreter=function(){function a(b,c,d,e){this.setTimeout=c,this.clearTimeout=d,a.__super__.constructor.call(this,b,e)}return __extends(a,SCXMLInterpreter),a.prototype._evaluateAction=function(b,c,d,e){var f,g,h;if(b.type==="send"&&b.delay){if(!this.setTimeout)throw new Error("setTimeout function not set");this.opts.printTrace&&console.debug("sending event",b.event,"with content",b.contentexpr,"after delay",b.delay),g=b.contentexpr?this._eval(b,d,c):null,f=__bind(function(){return this.gen(new Event(b.event,g))},this),h=this.setTimeout(f,b.delay);if(b.id)return this._timeoutMap[b.id]=h}else{if(b.type!=="cancel")return a.__super__._evaluateAction.call(this,b,c,d,e);if(!this.clearTimeout)throw new Error("clearTimeout function not set");if(b.sendid in this._timeoutMap)return this.opts.printTrace&&console.debug("cancelling ",b.id," with timeout id ",this._timeoutMap[b.id]),this.clearTimeout(this._timeoutMap[b.id])}},a.prototype.gen=function(a){return this.opts.printTrace&&console.debug("received event "+a),this._performBigStep(a)},a}(),BrowserInterpreter=function(){function a(b,c){var d,e;c==null&&(c={}),e=function(a,b){return window.setTimeout(a,b)},d=function(a){return window.clearTimeout(a)},setupDefaultOpts(c),a.__super__.constructor.call(this,b,e,d,c)}return __extends(a,SimpleInterpreter),a}(),NodeInterpreter=function(){function a(b,c){c==null&&(c={}),setupDefaultOpts(c),a.__super__.constructor.call(this,b,setTimeout,clearTimeout,c)}return __extends(a,SimpleInterpreter),a}(),{SCXMLInterpreter:SCXMLInterpreter,SimpleInterpreter:SimpleInterpreter,BrowserInterpreter:BrowserInterpreter,NodeInterpreter:NodeInterpreter}})}.call(this),define("lib/JsonML_DOM",[],function(){var a={};return a.parseDOM=function(b,c){function d(b,c,d){if(b.hasChildNodes()){for(var e=0;e<b.childNodes.length;e++){var f=b.childNodes[e];f=a.parseDOM(f,c),f&&d.push(f)}return!0}return!1}if(!b||!b.nodeType)return b=null;var e,f;switch(b.nodeType){case 1:case 9:case 11:f=[b.tagName||""];var g=b.attributes,h={},i=!1;for(e=0;g&&e<g.length;e++)g[e].specified&&(g[e].name==="style"?h.style=b.style.cssText||g[e].value:"string"==typeof g[e].value&&(h[g[e].name]=g[e].value),i=!0);i&&f.push(h);var j;switch(f[0].toLowerCase()){case"frame":case"iframe":try{"undefined"!=typeof b.contentDocument?j=b.contentDocument:"undefined"!=typeof b.contentWindow?j=b.contentWindow.document:"undefined"!=typeof b.document&&(j=b.document),j=a.parseDOM(j,c),j&&f.push(j)}catch(k){}break;case"style":j=b.styleSheet&&b.styleSheet.cssText;if(j&&"string"==typeof j)j=j.replace("<!--","").replace("-->",""),f.push(j);else if(b.hasChildNodes())for(e=0;e<b.childNodes.length;e++)j=b.childNodes[e],j=a.parseDOM(j,c),j&&"string"==typeof j&&(j=j.replace("<!--","").replace("-->",""),f.push(j));break;case"input":d(b,c,f),j=b.type!=="password"&&b.value,j&&(i||(f.shift(),h={},f.unshift(h),f.unshift(b.tagName||"")),h.value=j);break;case"textarea":d(b,c,f)||(j=b.value||b.innerHTML,j&&"string"==typeof j&&f.push(j));break;default:d(b,c,f)}return"function"==typeof c&&(f=c(f,b)),b=null,f;case 3:case 4:var l=String(b.nodeValue);return b=null,l;case 10:f=["!"];var m=["DOCTYPE",(b.name||"html").toLowerCase()];return b.publicId&&m.push("PUBLIC",'"'+b.publicId+'"'),b.systemId&&m.push('"'+b.systemId+'"'),f.push(m.join(" ")),"function"==typeof c&&(f=c(f,b)),b=null,f;case 8:if((b.nodeValue||"").indexOf("DOCTYPE")!==0)return b=null,null;return f=["!",b.nodeValue],"function"==typeof c&&(f=c(f,b)),b=null,f;default:return b=null}},a.parseHTML=function(b,c){var d=document.createElement("div");d.innerHTML=b;var e=a.parseDOM(d,c);return d=null,e.length===2?e[1]:(e[0]="",e)},a}),function(){define("util/browser/parseOnLoad",["scxml/SCXML","util/annotate-scxml-json","scxml/json2model","scxml/event","lib/JsonML_DOM"],function(a,b,c,d,e){var f;return f=a.BrowserInterpreter,function(){"A statechart is initialized from an XML document as follows:\n1. Get the SCXML document.\n2. Convert the XML to JsonML using XSLT or DOM, and parse the JSON to\n\tan SCXML-JSON document.\n3. Annotate and transform the SCXML-JSON document so that it is in a\n\tform more congenial to interpretation, creating an annotated SCXML-JSON\n\tdocument\n4. Convert the SCXML-JSON document to a statechart object model. This\n\tstep essentially converts id labels to object references, parses JavaScript\n\tscripts and expressions embedded in the SCXML as js functions, and does some\n\tvalidation for correctness. \n5. Use the statechart object model to instantiate an instance of the\n\tstatechart interpreter. Optionally, we can pass to the construct an object to\n\tbe used as the context object (the 'this' object) in script evaluation. Lots of\n\tother parameters are available.\n6. Connect relevant event listeners to the statechart instance.\n7. Call the start method on the new intrepreter instance to start\n\texecution of the statechart.\n\nAlso note that steps 1-3 can be done ahead-of-time. The annotated\n\tSCXML-JSON object can be serialized as JSON and sent across the wire before\n\tbeing converted to a statechart object model in step 4. ";var a,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B;r=document.getElementsByTagName("scxml"),B=[];for(w=0,y=r.length;w<y;w++){q=r[w],console.log("scxml",q),g=q.parentNode,console.log("domNodeToHookUp",g),u="http://www.w3.org/2005/07/scxml",t=document.implementation.createDocument(u,"scxml",null),o=t.importNode(q.cloneNode(!0),!0),t.replaceChild(o,t.documentElement),console.log("newNode",o),A=e.parseDOM(t),h=A[0],s=A[1],console.log("scxmlJson",s),a=b(s),console.log("annotatedScxmlJson",a),n=c(a),console.log("model",n),m=new f(n,{evaluationContext:g}),console.log("interpreter",m),p="https://github.com/jbeard4/SCION";if(q.hasAttributeNS(p,"domEventsToConnect")){k=q.getAttributeNS(p,"domEventsToConnect"),l=function(){var a,b,c,d;c=k.split(","),d=[];for(a=0,b=c.length;a<b;a++)i=c[a],d.push(i.trim());return d}(),v=function(a){return g.addEventListener(a,function(b){return b.preventDefault(),m.gen(new d(a,b))},!1)};for(x=0,z=l.length;x<z;x++)j=l[x],v(j)}B.push(m.start())}return B}})}.call(this)