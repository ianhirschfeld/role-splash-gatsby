(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"0mN4":function(e,a,t){"use strict";t("OGtf")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"9eSz":function(e,a,t){"use strict";t("rGqo"),t("yt8O"),t("Btvt"),t("XfO3"),t("EK0E"),t("INYr"),t("0mN4");var i=t("TqRt");a.__esModule=!0,a.default=void 0;var n,r=i(t("PJYZ")),s=i(t("VbXa")),l=i(t("8OQS")),d=i(t("pVnL")),o=i(t("q1tI")),c=i(t("17x9")),u=function(e){var a=(0,d.default)({},e),t=a.resolutions,i=a.sizes,n=a.critical;return t&&(a.fixed=t,delete a.resolutions),i&&(a.fluid=i,delete a.sizes),n&&(a.loading="eager"),a.fluid&&(a.fluid=S([].concat(a.fluid))),a.fixed&&(a.fixed=S([].concat(a.fixed))),a},m=function(e){var a=e.media;return!!a&&(v&&!!window.matchMedia(a).matches)},f=function(e){var a=e.fluid,t=e.fixed;return g(a||t).src},g=function(e){if(v&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var a=e.findIndex(m);if(-1!==a)return e[a]}return e[0]},p=Object.create({}),h=function(e){var a=u(e),t=f(a);return p[t]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,v="undefined"!=typeof window,y=v&&window.IntersectionObserver,E=new WeakMap;function w(e){return e.map((function(e){var a=e.src,t=e.srcSet,i=e.srcSetWebp,n=e.media,r=e.sizes;return o.default.createElement(o.default.Fragment,{key:a},i&&o.default.createElement("source",{type:"image/webp",media:n,srcSet:i,sizes:r}),o.default.createElement("source",{media:n,srcSet:t,sizes:r}))}))}function S(e){var a=[],t=[];return e.forEach((function(e){return(e.media?a:t).push(e)})),[].concat(a,t)}function N(e){return e.map((function(e){var a=e.src,t=e.media,i=e.tracedSVG;return o.default.createElement("source",{key:a,media:t,srcSet:i})}))}function I(e){return e.map((function(e){var a=e.src,t=e.media,i=e.base64;return o.default.createElement("source",{key:a,media:t,srcSet:i})}))}function R(e,a){var t=e.srcSet,i=e.srcSetWebp,n=e.media,r=e.sizes;return"<source "+(a?"type='image/webp' ":"")+(n?'media="'+n+'" ':"")+'srcset="'+(a?i:t)+'" '+(r?'sizes="'+r+'" ':"")+"/>"}var A=function(e,a){var t=(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver((function(e){e.forEach((function(e){if(E.has(e.target)){var a=E.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),E.delete(e.target),a())}}))}),{rootMargin:"200px"})),n);return t&&(t.observe(e),E.set(e,a)),function(){t.unobserve(e),E.delete(e)}},C=function(e){var a=e.src?'src="'+e.src+'" ':'src="" ',t=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",r=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",d=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",o=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?R(e,!0):"")+R(e)})).join("")+"<img "+o+s+l+t+i+a+r+n+d+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},L=function(e){var a=e.src,t=e.imageVariants,i=e.generateSources,n=e.spreadProps,r=e.ariaHidden,s=o.default.createElement(z,(0,d.default)({src:a},n,{ariaHidden:r}));return t.length>1?o.default.createElement("picture",null,i(t),s):s},z=o.default.forwardRef((function(e,a){var t=e.sizes,i=e.srcSet,n=e.src,r=e.style,s=e.onLoad,c=e.onError,u=e.loading,m=e.draggable,f=e.ariaHidden,g=(0,l.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return o.default.createElement("img",(0,d.default)({"aria-hidden":f,sizes:t,srcSet:i,src:n},g,{onLoad:s,onError:c,ref:a,loading:u,draggable:m,style:(0,d.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},r)}))}));z.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var O=function(e){function a(a){var t;(t=e.call(this,a)||this).seenBefore=v&&h(a),t.isCritical="eager"===a.loading||a.critical,t.addNoScript=!(t.isCritical&&!a.fadeIn),t.useIOSupport=!b&&y&&!t.isCritical&&!t.seenBefore;var i=t.isCritical||v&&(b||!t.useIOSupport);return t.state={isVisible:i,imgLoaded:!1,imgCached:!1,fadeIn:!t.seenBefore&&a.fadeIn},t.imageRef=o.default.createRef(),t.handleImageLoaded=t.handleImageLoaded.bind((0,r.default)(t)),t.handleRef=t.handleRef.bind((0,r.default)(t)),t}(0,s.default)(a,e);var t=a.prototype;return t.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},t.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},t.handleRef=function(e){var a=this;this.useIOSupport&&e&&(this.cleanUpListeners=A(e,(function(){var e=h(a.props);a.state.isVisible||"function"!=typeof a.props.onStartLoad||a.props.onStartLoad({wasCached:e}),a.setState({isVisible:!0},(function(){return a.setState({imgLoaded:e,imgCached:!!a.imageRef.current.currentSrc})}))})))},t.handleImageLoaded=function(){var e,a,t;e=this.props,a=u(e),t=f(a),p[t]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},t.render=function(){var e=u(this.props),a=e.title,t=e.alt,i=e.className,n=e.style,r=void 0===n?{}:n,s=e.imgStyle,l=void 0===s?{}:s,c=e.placeholderStyle,m=void 0===c?{}:c,f=e.placeholderClassName,p=e.fluid,h=e.fixed,b=e.backgroundColor,v=e.durationFadeIn,y=e.Tag,E=e.itemProp,S=e.loading,R=e.draggable,A=!1===this.state.fadeIn||this.state.imgLoaded,O=!0===this.state.fadeIn&&!this.state.imgCached,V=(0,d.default)({opacity:A?1:0,transition:O?"opacity "+v+"ms":"none"},l),j="boolean"==typeof b?"lightgray":b,x={transitionDelay:v+"ms"},T=(0,d.default)({opacity:this.state.imgLoaded?0:1},O&&x,{},l,{},m),q={title:a,alt:this.state.isVisible?"":t,style:T,className:f,itemProp:E};if(p){var H=p,k=g(p);return o.default.createElement(y,{className:(i||"")+" gatsby-image-wrapper",style:(0,d.default)({position:"relative",overflow:"hidden"},r),ref:this.handleRef,key:"fluid-"+JSON.stringify(k.srcSet)},o.default.createElement(y,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/k.aspectRatio+"%"}}),j&&o.default.createElement(y,{"aria-hidden":!0,title:a,style:(0,d.default)({backgroundColor:j,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},O&&x)}),k.base64&&o.default.createElement(L,{ariaHidden:!0,src:k.base64,spreadProps:q,imageVariants:H,generateSources:I}),k.tracedSVG&&o.default.createElement(L,{ariaHidden:!0,src:k.tracedSVG,spreadProps:q,imageVariants:H,generateSources:N}),this.state.isVisible&&o.default.createElement("picture",null,w(H),o.default.createElement(z,{alt:t,title:a,sizes:k.sizes,src:k.src,crossOrigin:this.props.crossOrigin,srcSet:k.srcSet,style:V,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:S,draggable:R})),this.addNoScript&&o.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:C((0,d.default)({alt:t,title:a,loading:S},k,{imageVariants:H}))}}))}if(h){var P=h,W=g(h),M=(0,d.default)({position:"relative",overflow:"hidden",display:"inline-block",width:W.width,height:W.height},r);return"inherit"===r.display&&delete M.display,o.default.createElement(y,{className:(i||"")+" gatsby-image-wrapper",style:M,ref:this.handleRef,key:"fixed-"+JSON.stringify(W.srcSet)},j&&o.default.createElement(y,{"aria-hidden":!0,title:a,style:(0,d.default)({backgroundColor:j,width:W.width,opacity:this.state.imgLoaded?0:1,height:W.height},O&&x)}),W.base64&&o.default.createElement(L,{ariaHidden:!0,src:W.base64,spreadProps:q,imageVariants:P,generateSources:I}),W.tracedSVG&&o.default.createElement(L,{ariaHidden:!0,src:W.tracedSVG,spreadProps:q,imageVariants:P,generateSources:N}),this.state.isVisible&&o.default.createElement("picture",null,w(P),o.default.createElement(z,{alt:t,title:a,width:W.width,height:W.height,sizes:W.sizes,src:W.src,crossOrigin:this.props.crossOrigin,srcSet:W.srcSet,style:V,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:S,draggable:R})),this.addNoScript&&o.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:C((0,d.default)({alt:t,title:a,loading:S},W,{imageVariants:P}))}}))}return null},a}(o.default.Component);O.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var V=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),j=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string});O.propTypes={resolutions:V,sizes:j,fixed:c.default.oneOfType([V,c.default.arrayOf(V)]),fluid:c.default.oneOfType([j,c.default.arrayOf(j)]),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var x=O;a.default=x},INYr:function(e,a,t){"use strict";var i=t("XKFU"),n=t("CkkT")(6),r="findIndex",s=!0;r in[]&&Array(1)[r]((function(){s=!1})),i(i.P+i.F*s,"Array",{findIndex:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}}),t("nGyu")(r)},OGtf:function(e,a,t){var i=t("XKFU"),n=t("eeVq"),r=t("vhPU"),s=/"/g,l=function(e,a,t,i){var n=String(r(e)),l="<"+a;return""!==t&&(l+=" "+t+'="'+String(i).replace(s,"&quot;")+'"'),l+">"+n+"</"+a+">"};e.exports=function(e,a){var t={};t[e]=a(l),i(i.P+i.F*n((function(){var a=""[e]('"');return a!==a.toLowerCase()||a.split('"').length>3})),"String",t)}},RXBc:function(e,a,t){"use strict";t.r(a);var i=t("q1tI"),n=t.n(i),r=t("Bl7J"),s=(t("ezAz"),t("9eSz"),t("vrFN")),l=t("vGFT"),d=t.n(l);a.default=function(e){e.data;var a={position:"absolute",left:"-5000px"};return n.a.createElement(r.a,null,n.a.createElement(s.a,{title:"Role - You Can Play With Us",titleTemplate:"%s"}),n.a.createElement("article",null,n.a.createElement("div",{className:d.a.section},n.a.createElement("header",{className:[d.a.innerContent,d.a.headerContent].join(" ")},n.a.createElement("h1",{className:d.a.logo},"Role"),n.a.createElement("p",{className:"heading2"},"We’re Creating the world’s premier online Role Playing Community. Discover new games from the most passionate creators, meet new friends and adventure together. Anyone can play, Everyone is welcome."),n.a.createElement("p",{className:"heading2"},"Every story, every world, every version of you.",n.a.createElement("br",null),"This is your Game Table. This is Role."),n.a.createElement("h2",{className:"heading1"},"Welcome Home"),n.a.createElement("div",{className:d.a.form},n.a.createElement("div",{className:["heading3",d.a.formHeading].join(" ")},"Join us and learn more"),n.a.createElement("div",{id:"mc_embed_signup"},n.a.createElement("form",{action:"https://thesoapcollective.us9.list-manage.com/subscribe/post?u=3b7974721fb3e8f4f031367db&id=7bd197d227",method:"post",id:"mc-embedded-subscribe-form",name:"mc-embedded-subscribe-form",className:"validate",target:"_blank",noValidate:!0},n.a.createElement("div",{id:"mc_embed_signup_scroll"},n.a.createElement("input",{type:"email",defaultValue:"",name:"EMAIL",className:["email",d.a.email].join(" "),id:"mce-EMAIL",placeholder:"Email address",required:!0}),n.a.createElement("div",{style:a,"aria-hidden":"true"},n.a.createElement("input",{type:"text",name:"b_3b7974721fb3e8f4f031367db_7bd197d227",tabIndex:"-1",defaultValue:""})),n.a.createElement("div",{className:"clear"},n.a.createElement("input",{type:"submit",value:"Sign up!",name:"subscribe",id:"mc-embedded-subscribe",className:["button",d.a.submit].join(" ")}))))))),n.a.createElement("div",{className:d.a.arrow})),n.a.createElement("div",{className:d.a.slantedSection},n.a.createElement("div",{className:d.a.slant},n.a.createElement("div",{className:[d.a.innerContent,d.a.pillarsContent].join(" ")},n.a.createElement("h2",{className:["heading1",d.a.slantedHeading].join(" ")},"You can play with us"),n.a.createElement("div",{className:d.a.pillars},n.a.createElement("div",{className:d.a.pillar},n.a.createElement("h3",{className:"heading2"},"Play Something New"),n.a.createElement("p",null,"It doesn’t matter if you’re a brand new player or a seasoned veteran. The Role marketplace will help you discover, explore, and learn new games that meet your style."),n.a.createElement("div",{className:d.a.pillarImageContainer},n.a.createElement("div",{className:[d.a.pillarImage,d.a.imagePlay].join(" ")}))),n.a.createElement("div",{className:d.a.pillar},n.a.createElement("h3",{className:"heading2"},"Fill Your Table"),n.a.createElement("p",null,"Looking for people to play with? Need a Game Master to help run your game? Our community matching tools will help you find people and get playing quickly."),n.a.createElement("div",{className:d.a.pillarImageContainer},n.a.createElement("div",{className:[d.a.pillarImage,d.a.imageTable].join(" ")}))),n.a.createElement("div",{className:d.a.pillar},n.a.createElement("h3",{className:"heading2"},"Role Effortlessly"),n.a.createElement("p",null,"Online play that is easy, seamless, and limitless. Role takes the complexity out of the tools, so you can focus on what really matters: playing with people you love."),n.a.createElement("div",{className:d.a.pillarImageContainer},n.a.createElement("div",{className:[d.a.pillarImage,d.a.imageRole].join(" ")}))))))),n.a.createElement("div",{className:d.a.section},n.a.createElement("div",{className:[d.a.innerContent,d.a.creatorsContent].join(" ")},n.a.createElement("h2",{className:["heading1",d.a.sectionHeading].join(" ")},"Are You a Game Creator?"),n.a.createElement("h3",{className:"heading2"},"Join the Role Creators Program"),n.a.createElement("p",null,"Role is looking for the best new game creators who want to share their work with the world. More than just a marketplace - we’re invested in helping people discover new content from diverse voices, and giving everyone the tools to easily understand and learn new games."),n.a.createElement("p",null,n.a.createElement("strong",null,"Whether you’re an indie designer or an established publisher, we want to help people connect with the worlds you’re dreaming of.")))),n.a.createElement("div",{className:[d.a.slantedSection,d.a.slantedSectionFooter].join(" ")},n.a.createElement("div",{className:d.a.slant},n.a.createElement("div",{className:[d.a.innerContent,d.a.pillarsContent].join(" ")},n.a.createElement("h2",{className:["heading1",d.a.slantedHeading].join(" ")},"Coming in 2020"),n.a.createElement("h3",{className:"heading2"},"Your Next Great Adventure Awaits"),n.a.createElement("p",null,"Role is launching in 2020, with Early Access opening soon.",n.a.createElement("br",null),"Be among the first to know, and follow along for future updates!"),n.a.createElement("div",{className:["heading3",d.a.formHeading].join(" ")},"Join the Role Community"),n.a.createElement("div",{id:"mc_embed_signup",className:d.a.slantedEmailForm},n.a.createElement("form",{action:"https://thesoapcollective.us9.list-manage.com/subscribe/post?u=3b7974721fb3e8f4f031367db&id=7bd197d227",method:"post",id:"mc-embedded-subscribe-form",name:"mc-embedded-subscribe-form",className:"validate",target:"_blank",noValidate:!0},n.a.createElement("div",{id:"mc_embed_signup_scroll"},n.a.createElement("input",{type:"email",defaultValue:"",name:"EMAIL",className:["email",d.a.email].join(" "),id:"mce-EMAIL",placeholder:"Email address",required:!0}),n.a.createElement("div",{style:a,"aria-hidden":"true"},n.a.createElement("input",{type:"text",name:"b_3b7974721fb3e8f4f031367db_7bd197d227",tabIndex:"-1",defaultValue:""})),n.a.createElement("div",{className:"clear"},n.a.createElement("input",{type:"submit",value:"Sign up!",name:"subscribe",id:"mc-embedded-subscribe",className:["button",d.a.submit].join(" ")}))))))))))}},ezAz:function(e){e.exports=JSON.parse('{"data":{"placeholderImage":{"id":"bcfbf122-3a0b-58bb-b842-89c5a99cbec0","childImageSharp":{"id":"c66a5dad-4dc1-5524-961d-93ef1ae4122b","fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsSAAALEgHS3X78AAACYklEQVQ4y42Uy28SQRjA+dM8efDmwYN6qF6qiSY+Y/WgQRMibY00TaWNBSRSCraYQtHl/bR0KyxQWCgWWAqU8izl/Sq7rLNsRHlVJpvJtzPfb77nDIOcZHSoqZSrp4+KtXIziubaLRysMCZiCYqOoVnhjNEi8RcztdxxeTzc6VBfT+5O2Vhpb+vw4wMdZ0ppWvP9xzLeJoDNThf2W+Nz1+XzNxQubSToSKKW+BDc+WOnkshhSVgeCiGpViZMEg1oxc26Knt+ae3bEtJTZwzE1kXLccG0+sOOlrcvZXvsczPkITfsa20vwIKnhsh+BnjUarT74Gb13CY7KBVJMv3z4N1NszQYsMWM62HNrCis/GxXn0iYls23uz5LPBcv0bH8hUH2XRoM85ySXv7JBtO87jMIvWq+H5GoYIHCLA1ZxD6Qap3Ak8IKfW7TJ50lK6uP9E6RgndHaODtCJ6Z5RyHfnE7j6gRbcKlCYNSt+rtETHTpUGgEP8FYmdNqd/Mo7aiVWTfuH2L9xASvfxxlqr01EYkrJszvNkgW9bH0OuFr+99m+y9IOeyU6zIp/Hubp/yMEztlzFPwOhdvq+nIoS1JNn4t2sugCmVsDvPe2KKolnZLCxhOcAKQRDDXTQaVi46lqYhIBwHTrl3oWqhMRDtaJge37lOBMKo4tfbqhVX0J7snTsWps8uZWuoOQY6CcjpSIF55UvmqNgr5wUwtV1IVdnXtnSfPEB2qjDNqnvczRl0m+j6Jn5lXb6nAQJqinmN0ZEBj03YLzghY8PnTRz80o/GRJZpOLCb0PM9BN7pvUEjx28V00WUg9jIVwAAAABJRU5ErkJggg==","aspectRatio":1,"src":"/static/6d91c86c0fde632ba4cd01062fd9ccfa/630fb/gatsby-astronaut.png","srcSet":"/static/6d91c86c0fde632ba4cd01062fd9ccfa/5db04/gatsby-astronaut.png 75w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/6d161/gatsby-astronaut.png 150w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/630fb/gatsby-astronaut.png 300w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/62b1f/gatsby-astronaut.png 450w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/2a4de/gatsby-astronaut.png 600w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/ee604/gatsby-astronaut.png 800w","sizes":"(max-width: 300px) 100vw, 300px"}}}}}')}}]);
//# sourceMappingURL=component---src-pages-index-js-48df5cb75607f68c3fcb.js.map