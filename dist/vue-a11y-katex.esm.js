!function(){if("undefined"!=typeof document){var e=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style");t.type="text/css",t.styleSheet?t.styleSheet.cssText="":t.appendChild(document.createTextNode("")),e.appendChild(t)}}();var InlineMath={render:function(){var e=this.$createElement;return(this._self._c||e)("span",{domProps:{innerHTML:this._s(this._expression)}})},staticRenderFns:[],props:{expression:{type:String,default:""}},computed:{_expression:function(){try{return katex.renderToString(this.expression,{throwOnError:!1})}catch(e){return e}}}}(function(){if("undefined"!=typeof document){var e=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style");t.type="text/css",t.styleSheet?t.styleSheet.cssText="":t.appendChild(document.createTextNode("")),e.appendChild(t)}})(),BlockMath={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{domProps:{innerHTML:this._s(this._expression)}})},staticRenderFns:[],props:{expression:{type:String,default:""}},computed:{_expression:function(){try{return katex.renderToString(this.expression,{throwOnError:!1})}catch(e){return e}}}},KatexMath={InlineMath:InlineMath,BlockMath:BlockMath};export default KatexMath;
