(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"9eSz":function(e,t,a){"use strict";var r=a("TqRt");t.__esModule=!0,t.default=void 0;var i,n=r(a("PJYZ")),l=r(a("VbXa")),s=r(a("8OQS")),o=r(a("pVnL")),d=r(a("q1tI")),c=r(a("17x9")),u=function(e){var t=(0,o.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=y([].concat(t.fluid))),t.fixed&&(t.fixed=y([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(E&&!!window.matchMedia(t).matches)},m=function(e){var t=e.fluid,a=e.fixed,r=p(t||a||[]);return r&&r.src},p=function(e){if(E&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},h=Object.create({}),g=function(e){var t=u(e),a=m(t);return h[a]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,E="undefined"!=typeof window,v=E&&window.IntersectionObserver,w=new WeakMap;function S(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},r&&d.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),d.default.createElement("source",{media:i,srcSet:a,sizes:n}))}))}function y(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function k(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function L(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function R(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var x=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(w.has(e.target)){var t=w.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),w.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),w.set(e,t)),function(){a.unobserve(e),w.delete(e)}},I=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',l=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",o=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?R(e,!0):"")+R(e)})).join("")+"<img "+d+l+s+a+r+t+n+i+o+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},N=d.default.forwardRef((function(e,t){var a=e.src,r=e.imageVariants,i=e.generateSources,n=e.spreadProps,l=e.ariaHidden,s=d.default.createElement(z,(0,o.default)({ref:t,src:a},n,{ariaHidden:l}));return r.length>1?d.default.createElement("picture",null,i(r),s):s})),z=d.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,l=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,m=e.ariaHidden,p=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return d.default.createElement("img",(0,o.default)({"aria-hidden":m,sizes:a,srcSet:r,src:i},p,{onLoad:l,onError:c,ref:t,loading:u,draggable:f,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));z.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var C=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=E&&g(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!b&&v&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||E&&(b||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=d.default.createRef(),a.placeholderRef=t.placeholderRef||d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,l.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:g(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=x(e,(function(){var e=g(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),(a=m(t))&&(h[a]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,l=e.imgStyle,s=void 0===l?{}:l,c=e.placeholderStyle,f=void 0===c?{}:c,m=e.placeholderClassName,h=e.fluid,g=e.fixed,b=e.backgroundColor,E=e.durationFadeIn,v=e.Tag,w=e.itemProp,y=e.loading,R=e.draggable,x=!1===this.state.fadeIn||this.state.imgLoaded,C=!0===this.state.fadeIn&&!this.state.imgCached,V=(0,o.default)({opacity:x?1:0,transition:C?"opacity "+E+"ms":"none"},s),M="boolean"==typeof b?"lightgray":b,O={transitionDelay:E+"ms"},W=(0,o.default)({opacity:this.state.imgLoaded?0:1},C&&O,s,f),H={title:t,alt:this.state.isVisible?"":a,style:W,className:m,itemProp:w};if(h){var P=h,T=p(h);return d.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden",maxWidth:T.maxWidth?T.maxWidth+"px":null,maxHeight:T.maxHeight?T.maxHeight+"px":null},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(T.srcSet)},d.default.createElement(v,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/T.aspectRatio+"%"}}),M&&d.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,o.default)({backgroundColor:M,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},C&&O)}),T.base64&&d.default.createElement(N,{ariaHidden:!0,ref:this.placeholderRef,src:T.base64,spreadProps:H,imageVariants:P,generateSources:L}),T.tracedSVG&&d.default.createElement(N,{ariaHidden:!0,ref:this.placeholderRef,src:T.tracedSVG,spreadProps:H,imageVariants:P,generateSources:k}),this.state.isVisible&&d.default.createElement("picture",null,S(P),d.default.createElement(z,{alt:a,title:t,sizes:T.sizes,src:T.src,crossOrigin:this.props.crossOrigin,srcSet:T.srcSet,style:V,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:y,draggable:R})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:I((0,o.default)({alt:a,title:t,loading:y},T,{imageVariants:P}))}}))}if(g){var j=g,q=p(g),B=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:q.width,height:q.height},n);return"inherit"===n.display&&delete B.display,d.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:B,ref:this.handleRef,key:"fixed-"+JSON.stringify(q.srcSet)},M&&d.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,o.default)({backgroundColor:M,width:q.width,opacity:this.state.imgLoaded?0:1,height:q.height},C&&O)}),q.base64&&d.default.createElement(N,{ariaHidden:!0,ref:this.placeholderRef,src:q.base64,spreadProps:H,imageVariants:j,generateSources:L}),q.tracedSVG&&d.default.createElement(N,{ariaHidden:!0,ref:this.placeholderRef,src:q.tracedSVG,spreadProps:H,imageVariants:j,generateSources:k}),this.state.isVisible&&d.default.createElement("picture",null,S(j),d.default.createElement(z,{alt:a,title:t,width:q.width,height:q.height,sizes:q.sizes,src:q.src,crossOrigin:this.props.crossOrigin,srcSet:q.srcSet,style:V,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:y,draggable:R})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:I((0,o.default)({alt:a,title:t,loading:y},q,{imageVariants:j}))}}))}return null},t}(d.default.Component);C.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var V=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),M=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string,maxWidth:c.default.number,maxHeight:c.default.number});function O(e){return function(t,a,r){var i;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+r+"`, but their values are both `undefined`.");c.default.checkPropTypes(((i={})[a]=e,i),t,"prop",r)}}C.propTypes={resolutions:V,sizes:M,fixed:O(c.default.oneOfType([V,c.default.arrayOf(V)])),fluid:O(c.default.oneOfType([M,c.default.arrayOf(M)])),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var W=C;t.default=W},D5Rv:function(e,t,a){e.exports={list:"socials-module--list--nQjwE",item:"socials-module--item--2qCBJ",link:"socials-module--link--m0nMJ"}},QsD6:function(e,t,a){e.exports={wrapper:"section-module--wrapper--1PJu9",left:"section-module--left--4Dzzx",right:"section-module--right--3Zh5J",title:"section-module--title--3LB2K"}},RXBc:function(e,t,a){"use strict";a.r(t);var r=a("q1tI"),i=a.n(r),n=a("Wbzz"),l=a("bDs+"),s=a.n(l),o=function(e){var t=e.desc,a=e.link,r=void 0!==a&&a,l=e.title;return i.a.createElement("div",{className:s.a.wrapper},r?i.a.createElement(n.Link,{to:r,className:s.a.linkTitle},l," "):i.a.createElement("span",{className:s.a.title},l),i.a.createElement("p",{className:s.a.desc},t))},d=a("pb2/"),c=a.n(d),u=a("D5Rv"),f=a.n(u),m=function(){return i.a.createElement("div",null,i.a.createElement("ul",{className:f.a.list},i.a.createElement("li",{className:f.a.item},i.a.createElement("a",{className:f.a.link,href:"https://github.com/nm47"},i.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},i.a.createElement("path",{d:"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"})))),i.a.createElement("li",{className:f.a.item},i.a.createElement("a",{className:f.a.link,href:"https://www.linkedin.com/in/niels-moeller-57a4bb152/"},i.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},i.a.createElement("path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"}),i.a.createElement("rect",{x:"2",y:"9",width:"4",height:"12"}),i.a.createElement("circle",{cx:"4",cy:"4",r:"2"}))))))},p=a("uEY5"),h=a.n(p),g=function(){return i.a.createElement("div",{className:h.a.headerWrapper},i.a.createElement("div",{className:h.a.profileWrapper},i.a.createElement("img",{className:h.a.profilePicture,src:c.a,alt:"Niels Moeller"})),i.a.createElement("div",{className:h.a.profileContent},i.a.createElement("h1",null,"Niels Moeller"),i.a.createElement("h2",null,"Computer Science Student at the University of Houston"),i.a.createElement(m,null)))},b=a("8k0H"),E=(a("9eSz"),a("QsD6")),v=a.n(E),w=function(e){var t=e.children,a=e.id,r=e.title;return i.a.createElement("section",{id:a,className:v.a.wrapper},i.a.createElement("div",{className:v.a.left},i.a.createElement("h3",{className:v.a.title},r)),i.a.createElement("div",{className:v.a.right},t))},S=a("6d1X");t.default=function(){return i.a.createElement(b.a,null,i.a.createElement(g,null),i.a.createElement(S.a,{title:"Niels Moeller"}),i.a.createElement(w,{id:"about",title:"About Me"},i.a.createElement("p",null,"I'm a Senior Computer Science student with experience in the design, simulation, and implementation of autonomous robots."),i.a.createElement("p",null)),i.a.createElement(w,{id:"projects",title:"Projects"},i.a.createElement(o,{title:"Reaction Wheel Cube",link:"/blog/cube",desc:"A flywheel balanced robot using a brushless DC motor and a hall sensor encoder"}),i.a.createElement(o,{title:"Blüp bubble Gmail notifier",link:"/blog/blup",desc:"A Bubble blowing Gmail notifier"}),i.a.createElement(o,{title:"Inverted Pendulum Balancing Robot",link:"/blog/BalancingRobot",desc:"An autonomous two-wheeled balancing robot"}),i.a.createElement(o,{title:"RF Socket Controller",link:"/blog/RFSocket",desc:"A Home Automation Website to Control Sockets Around the House"}),i.a.createElement(o,{title:"Replacing Melzi Firmware on MMS V2.1",link:"/blog/Melzi",desc:"Burning a new bootloader and setting up Marlin on the MMS V2.1's Melzi board"})),i.a.createElement(w,{id:"skills",title:"Skills"},i.a.createElement(o,{title:"Languages & Frameworks",desc:"C/C++, Python, Java"}),i.a.createElement(o,{title:"Software",desc:"Fusion360, Kicad, Eagle, Visual Studio, Matlab, Xcode, Vim"}),i.a.createElement(o,{title:"Other",desc:"Git, Linux, Windows, Bash"})))}},"bDs+":function(e,t,a){e.exports={wrapper:"link-module--wrapper--2dAz0",linkTitle:"link-module--linkTitle--3VUWq",title:"link-module--title--3H5Ml",desc:"link-module--desc--2JcNe"}},"pb2/":function(e,t,a){e.exports=a.p+"static/professional-e4cad84f088519cb0cc8985bc49f75ae.jpg"},uEY5:function(e,t,a){e.exports={headerWrapper:"header-module--headerWrapper--15qHx",profileWrapper:"header-module--profileWrapper--17Lox",profilePicture:"header-module--profilePicture--1aaYx",profileContent:"header-module--profileContent--3G8DP"}}}]);
//# sourceMappingURL=component---src-pages-index-js-f41a145f14459a555471.js.map