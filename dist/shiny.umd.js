!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.shiny=e()}(this,function(){var t=function(t){return"number"==typeof t},e=function(t){return"string"==typeof t},n=function(){};if("undefined"!=typeof window&&void 0!==window.document){var a=Math.PI/180,r=function(t,e){var n=i.patterns[t];if(!n)return null;var a=document.createElement("canvas");a.width=n.width,a.height=n.height;var r=a.getContext("2d");return r.fillStyle="rgba(0, 0, 0, "+(1-e)+")",r.fillRect(0,0,a.width,a.height),r.drawImage(n,0,0),a},i={orientationInitial:null,orientation:{alpha:null,beta:null,gamma:null},viewport:{width:window.innerWidth,height:window.innerHeight},origin:{x:0,y:0,z:300},patterns:{noise:function(t,e){var n=document.createElement("canvas");n.width=t,n.height=e;for(var a=n.getContext("2d"),r=0;r<t;r++)for(var i=0;i<e;i++)a.fillStyle="rgba(0, 0, 0, "+Math.random()+")",a.fillRect(r,i,1,1);return n}(64*window.devicePixelRatio,64*window.devicePixelRatio)},drawers:[]};n=function(t,e){return("string"==typeof t?Array.from(document.querySelectorAll(t)):Array.isArray(t)?t:[t]).map(function(t){return i.drawers.push(o(t,e))})};var o=function(e,n){void 0===n&&(n={});var a=function(e,n){var a=n.gradient;void 0===a&&(a={});var i=n.pattern;void 0===i&&(i={});var o=l(a.colors||["#fff","rgba(255,255,255,0)"]),p={x:a.flip&&a.flip.x?-1:1,y:a.flip&&a.flip.y?-1:1},d=t(i.opacity)?i.opacity:.25;return{type:n.type||"background",dirty:!0,styles:null,element:e,gradient:{type:a.type||"radial",flip:p,angle:a.angle||null,steps:o,scalar:a.scalar||{x:1,y:1}},pattern:{type:i.type||"none",data:i.type?r(i.type,d).toDataURL():null,opacity:d,size:{width:64,height:64}}}}(e,n),i=function(){a.styles=getComputedStyle(e);var t=function(t){var e=t.type,n=t.element,a=t.styles,r=t.pattern,i=t.gradient;n.style.position="static"===a.position?"relative":a.position;var o=document.createElement("span");o.className="shiny--wrapper";var l="position:absolute; pointer-events:none; user-select:none; background-attachment: fixed;",p=document.createElement("span"),d=p.style;if("border"===e){var c=parseFloat(a.borderTopWidth),u=parseFloat(a.borderLeftWidth),s=parseFloat(a.borderRightWidth),f=parseFloat(a.borderBottomWidth),h=parseFloat(a.borderTopLeftRadius),m=a.backgroundColor;l+="\n            border-radius: "+h+"px; \n            left: "+-u+"px;\n            top: "+-c+"px;\n            right: "+-s+"px;\n            bottom: "+-f+"px;";var g=document.createElement("div");g.style.cssText="position:absolute; \n            border-radius: "+(h-u)+"px; \n            left: "+u+"px;\n            top: "+c+"px;\n            right: "+s+"px;\n            bottom: "+f+"px;\n            background-color: "+m,p.appendChild(g)}else"background"===e?l+="left:0;top:0;width:100%;height:100%;border-radius:"+parseFloat(a.borderTopLeftRadius)+"px;":"text"===e&&(p.innerHTML=n.innerHTML,l+="color:transparent; background-clip: text; -webkit-background-clip: text; -moz-background-clip: text;");if(r.data){var y="url("+r.data+") 0 0 / "+r.size.width+"px "+r.size.height+"px;";l+="mask: "+y+"; -moz-mask: "+y+"; -webkit-mask: "+y+";"}if(d.cssText=l,o.appendChild(p),n.insertAdjacentElement("afterbegin",o),"linear"===i.type)return function(t,e){var n=t*i.flip.x+e*i.flip.y/2,a=i.steps.map(function(t){return t.colorRGBA+" "+100*(n+t.stop)+"%"}).join(", ");d.backgroundImage="linear-gradient("+i.angle+", "+a+")"};var v=i.steps.map(function(t){return t.colorRGBA+" "+100*t.stop+"%"}).join(", ");return function(t,e){d.backgroundImage="radial-gradient(100vmax 100vmax at "+100*(.5+t*i.flip.x*i.scalar.x)+"% "+100*(.5+e*i.flip.y*i.scalar.y)+"%, "+v+")"}}(a);o.write=function(e,n){t(e,n)}},o={read:function(){a.dirty&&(i(),a.dirty=!1)},write:function(){}};return o},l=function(n){return n.map(function(t){return e(t)?[t]:t}).map(function(n){return{color:e(n[0])?n[0]:n[1],opacity:t(n[n.length-1])?n[n.length-1]:null,stop:t(n[0])?n[0]:null}}).map(function(t,e,n){return Object.assign({},t,{opacity:null===t.opacity?1:t.opacity,stop:null===t.stop?e*(1/(n.length-1)):t.stop})}).map(function(t){return Object.assign({},t,{colorRGBA:p(t.color,t.opacity)})})},p=function(t,e){return"rgba"+d(t).slice(3,-1)+", "+e+")"},d=function(t){if(/rgb\(/.test(t))return t;var e=document.createElement("div");e.style.cssText="display:none;color:"+t,document.body.appendChild(e);var n=getComputedStyle(e).color;return e.parentNode.removeChild(e),n},c=function(t){return t*a},u=function(){!function(){if(i.orientationInitial){var t=i.orientation,e=i.orientationInitial,n=i.origin,a=i.viewport,r=e.alpha-t.alpha,o=e.beta-t.beta,l=e.gamma-t.gamma,p=n.x,d=n.y,u=n.z;p=p*Math.cos(-c(r))-d*Math.sin(-c(r)),d=(d=d*Math.cos(-c(r))+p*Math.sin(-c(r)))*Math.cos(-c(o))-u*Math.sin(-c(o)),u=(u=u*Math.cos(-c(o))+d*Math.sin(-c(o)))*Math.cos(-c(l))-p*Math.sin(-c(l)),p=p*Math.cos(-c(l))+u*Math.sin(-c(l));var s=a.width/a.height,f=p/(300*s),h=d/(300/s);i.drawers.forEach(function(t){return t.read()}),i.drawers.forEach(function(t){return t.write(f,h)})}}(),requestAnimationFrame(u)};window.addEventListener("deviceorientation",function(t){null!==t.alpha&&(i.orientation.alpha=t.alpha,i.orientation.beta=t.beta,i.orientation.gamma=t.gamma,null===i.orientationInitial&&(i.orientationInitial={alpha:t.alpha,beta:t.beta,gamma:t.gamma},u()))})}return n});
//# sourceMappingURL=shiny.umd.js.map
