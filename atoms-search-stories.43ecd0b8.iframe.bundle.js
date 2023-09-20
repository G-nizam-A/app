"use strict";(self.webpackChunk_open_sauced_insights=self.webpackChunk_open_sauced_insights||[]).push([[940],{"./node_modules/@babel/runtime/helpers/esm/defineProperty.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}__webpack_require__.d(__webpack_exports__,{Z:function(){return _defineProperty}})},"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}__webpack_require__.d(__webpack_exports__,{Z:function(){return _objectWithoutProperties}})},"./components/atoms/ScrollArea/scroll-area.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{fK:function(){return ScrollViewport},xr:function(){return ScrollArea}});var _home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_radix_ui_react_scroll_area__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@radix-ui/react-scroll-area/dist/index.mjs"),clsx__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),_excluded=["className","children"],_excluded2=["className","children"],_excluded3=["className","orientation"],__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,ScrollArea=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function(_ref,ref){var className=_ref.className,children=_ref.children,props=(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_ref,_excluded);return __jsx(_radix_ui_react_scroll_area__WEBPACK_IMPORTED_MODULE_2__.fC,(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)({ref:ref,className:(0,clsx__WEBPACK_IMPORTED_MODULE_4__.Z)("relative overflow-hidden",className)},props),__jsx(ScrollViewport,null,children))}));ScrollArea.displayName=_radix_ui_react_scroll_area__WEBPACK_IMPORTED_MODULE_2__.fC.displayName;var ScrollViewport=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function(_ref2,ref){var className=_ref2.className,children=_ref2.children,props=(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_ref2,_excluded2);return __jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx(_radix_ui_react_scroll_area__WEBPACK_IMPORTED_MODULE_2__.l_,(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)({ref:ref,className:(0,clsx__WEBPACK_IMPORTED_MODULE_4__.Z)("h-full w-full rounded-[inherit]",className)},props),children),__jsx(ScrollBar,null),__jsx(_radix_ui_react_scroll_area__WEBPACK_IMPORTED_MODULE_2__.Ns,null))}));ScrollViewport.displayName=_radix_ui_react_scroll_area__WEBPACK_IMPORTED_MODULE_2__.l_.displayName;var ScrollBar=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function(_ref3,ref){var className=_ref3.className,_ref3$orientation=_ref3.orientation,orientation=void 0===_ref3$orientation?"vertical":_ref3$orientation,props=(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_ref3,_excluded3);return __jsx(_radix_ui_react_scroll_area__WEBPACK_IMPORTED_MODULE_2__.LW,(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)({ref:ref,className:(0,clsx__WEBPACK_IMPORTED_MODULE_4__.Z)("flex touch-none select-none p-0.5 transition-colors duration-[160ms] ease-out","vertical"===orientation&&"h-full w-2 border-l border-l-transparent","horizontal"===orientation&&"h-2 border-t border-t-transparent",className),orientation:orientation},props),__jsx(_radix_ui_react_scroll_area__WEBPACK_IMPORTED_MODULE_2__.bU,{className:"relative bg-light-slate-5 flex-1 rounded-full bg-border"}))}));ScrollBar.displayName=_radix_ui_react_scroll_area__WEBPACK_IMPORTED_MODULE_2__.LW.displayName,ScrollArea.__docgenInfo={description:"",methods:[]},ScrollViewport.__docgenInfo={description:"",methods:[]},ScrollBar.__docgenInfo={description:"",methods:[],props:{orientation:{defaultValue:{value:'"vertical"',computed:!1},required:!1}}};try{ScrollArea.displayName="ScrollArea",ScrollArea.__docgenInfo={description:"",displayName:"ScrollArea",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/atoms/ScrollArea/scroll-area.tsx#ScrollArea"]={docgenInfo:ScrollArea.__docgenInfo,name:"ScrollArea",path:"components/atoms/ScrollArea/scroll-area.tsx#ScrollArea"})}catch(__react_docgen_typescript_loader_error){}try{ScrollViewport.displayName="ScrollViewport",ScrollViewport.__docgenInfo={description:"",displayName:"ScrollViewport",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/atoms/ScrollArea/scroll-area.tsx#ScrollViewport"]={docgenInfo:ScrollViewport.__docgenInfo,name:"ScrollViewport",path:"components/atoms/ScrollArea/scroll-area.tsx#ScrollViewport"})}catch(__react_docgen_typescript_loader_error){}try{ScrollBar.displayName="ScrollBar",ScrollBar.__docgenInfo={description:"",displayName:"ScrollBar",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/atoms/ScrollArea/scroll-area.tsx#ScrollBar"]={docgenInfo:ScrollBar.__docgenInfo,name:"ScrollBar",path:"components/atoms/ScrollArea/scroll-area.tsx#ScrollBar"})}catch(__react_docgen_typescript_loader_error){}},"./components/atoms/Search/search.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_icons_gr__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react-icons/gr/index.esm.js"),react_icons_fa__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react-icons/fa/index.esm.js"),_SpinLoader_spin_loader__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./components/atoms/SpinLoader/spin-loader.tsx"),_ScrollArea_scroll_area__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./components/atoms/ScrollArea/scroll-area.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,suggestionsStyle={"-webkit-line-clamp":"1",display:"-webkit-box","-webkit-box-orient":"vertical"},Search=function Search(_ref){var placeholder=_ref.placeholder,name=_ref.name,value=_ref.value,autoFocus=_ref.autoFocus,className=_ref.className,onSearch=_ref.onSearch,suggestions=_ref.suggestions,onChange=_ref.onChange,isLoading=_ref.isLoading,_useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(value),search=_useState[0],setSearch=_useState[1],_useState2=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),showSuggestions=_useState2[0],setShowSuggestions=_useState2[1],handleOnSearch=function handleOnSearch(){null==onSearch||onSearch(search)};(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){setSearch(value)}),[value]);return __jsx("div",{className:"".concat(className&&className," flex bg-white  py-1 w-max px-3 shadow-input border transition focus-within:ring focus-within:border-orange-500 focus-within:ring-orange-100 rounded-lg   ring-light-slate-6 items-center relative")},__jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.U41,{className:"text-light-slate-9",fontSize:16,onClick:handleOnSearch}),__jsx("input",{className:"w-full pl-2 placeholder:text-sm focus:outline-none placeholder:text-slate-400",autoFocus:autoFocus,placeholder:placeholder,name:name,value:search,type:"search",id:name,onChange:function handleChange(e){setSearch(e.target.value),null==onChange||onChange(e.target.value)},onKeyUp:function onKeyUp(e){"Enter"===e.code&&handleOnSearch()},onFocus:function onFocus(){return setShowSuggestions(!0)},onBlur:function onBlur(){return setTimeout((function(){return setShowSuggestions(!1)}),500)}}),suggestions&&suggestions.length>0&&showSuggestions&&__jsx("div",{className:"absolute left-0 z-10 w-full pb-1 space-y-1 bg-white border rounded-lg cursor-pointer shadow-input border-light-slate-6 top-full"},__jsx(_ScrollArea_scroll_area__WEBPACK_IMPORTED_MODULE_2__.xr,{type:"auto",className:"h-60"},suggestions.map((function(suggestion,index){return __jsx("div",{className:"px-4 py-2 overflow-hidden break-all text-light-slate-9 hover:bg-light-slate-2",style:suggestionsStyle,key:index,onClick:function onClick(){return function handleOnSelect(suggestion){setSearch(suggestion),null==onSearch||onSearch(suggestion),setShowSuggestions(!1)}(suggestion)}},__jsx("span",{className:"pl-5 text-sm "},suggestion))})))),search&&__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,isLoading?__jsx(_SpinLoader_spin_loader__WEBPACK_IMPORTED_MODULE_1__.$,{className:"w-5 h-5 "}):__jsx(react_icons_gr__WEBPACK_IMPORTED_MODULE_4__.nfZ,{className:"cursor-pointer text-light-slate-9",fontSize:16,onClick:function handleEmpty(){setSearch(""),null==onSearch||onSearch(""),null==onChange||onChange("")}})))};Search.displayName="Search",Search.__docgenInfo={description:"",methods:[],displayName:"Search",props:{name:{required:!0,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},autoFocus:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:""},onSearch:{required:!1,tsType:{name:"signature",type:"function",raw:"(search?: string) => void",signature:{arguments:[{name:"search",type:{name:"string"}}],return:{name:"void"}}},description:""},suggestions:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{name:"value",type:{name:"string"}}],return:{name:"void"}}},description:""},isLoading:{required:!1,tsType:{name:"boolean"},description:""}}},__webpack_exports__.Z=Search;try{search.displayName="search",search.__docgenInfo={description:"",displayName:"search",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},autoFocus:{defaultValue:null,description:"",name:"autoFocus",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},onSearch:{defaultValue:null,description:"",name:"onSearch",required:!1,type:{name:"((search?: string) => void)"}},suggestions:{defaultValue:null,description:"",name:"suggestions",required:!1,type:{name:"string[]"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: string) => void)"}},isLoading:{defaultValue:null,description:"",name:"isLoading",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/atoms/Search/search.tsx#search"]={docgenInfo:search.__docgenInfo,name:"search",path:"components/atoms/Search/search.tsx#search"})}catch(__react_docgen_typescript_loader_error){}},"./components/atoms/SpinLoader/spin-loader.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{$:function(){return Spinner}});var _home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),clsx__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),_excluded=["className"],_excluded2=["className"],__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,SpinLoader=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function(_ref,ref){_ref.className;var props=(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_ref,_excluded);return __jsx("div",(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__.Z)({ref:ref},props,{className:"flex justify-center w-full pt-36 "}),__jsx(Spinner,{className:"mr-2 md:w-16 md:h-16"}))}));SpinLoader.displayName="SpinLoader",SpinLoader.__docgenInfo={description:"",methods:[],displayName:"SpinLoader"},__webpack_exports__.Z=SpinLoader;var Spinner=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function(_ref2,ref){var className=_ref2.className,props=(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_ref2,_excluded2);return __jsx("div",(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__.Z)({ref:ref},props,{role:"status"}),__jsx("svg",{"aria-hidden":"true",className:(0,clsx__WEBPACK_IMPORTED_MODULE_3__.Z)("inline w-6 h-6 text-gray-200 animate-spin fill-light-slate-8",className),viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg"},__jsx("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),__jsx("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"})),__jsx("span",{className:"sr-only"},"Loading..."))}));Spinner.displayName="Spinner",Spinner.__docgenInfo={description:"",methods:[],displayName:"Spinner"};try{SpinLoader.displayName="SpinLoader",SpinLoader.__docgenInfo={description:"",displayName:"SpinLoader",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/atoms/SpinLoader/spin-loader.tsx#SpinLoader"]={docgenInfo:SpinLoader.__docgenInfo,name:"SpinLoader",path:"components/atoms/SpinLoader/spin-loader.tsx#SpinLoader"})}catch(__react_docgen_typescript_loader_error){}},"./stories/atoms/search.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default},Focused:function(){return Focused},WithSuggestions:function(){return WithSuggestions}});var _Default$parameters,_Default$parameters2,_Focused$parameters,_Focused$parameters2,_WithSuggestions$para,_WithSuggestions$para2,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),components_atoms_Search_search__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./components/atoms/Search/search.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}__webpack_exports__.default={title:"Design System/Atoms/Search"};var SearchTemplate=function SearchTemplate(args){return __jsx(components_atoms_Search_search__WEBPACK_IMPORTED_MODULE_2__.Z,args)};SearchTemplate.displayName="SearchTemplate";var Default=SearchTemplate.bind({}),Focused=SearchTemplate.bind({}),WithSuggestions=SearchTemplate.bind({});Default.args={placeholder:"Search repositories",name:"Search"},Focused.args={placeholder:"Search repositories",name:"Search",autoFocus:!0},WithSuggestions.args={placeholder:"Search repositories",name:"Search",suggestions:["openarch/north","opencv/opencv","openmusic5/featurecity"]},Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:"args => <Search {...args} />"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source)})}),Focused.parameters=_objectSpread(_objectSpread({},Focused.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Focused$parameters=Focused.parameters)||void 0===_Focused$parameters?void 0:_Focused$parameters.docs),{},{source:_objectSpread({originalSource:"args => <Search {...args} />"},null===(_Focused$parameters2=Focused.parameters)||void 0===_Focused$parameters2||null===(_Focused$parameters2=_Focused$parameters2.docs)||void 0===_Focused$parameters2?void 0:_Focused$parameters2.source)})}),WithSuggestions.parameters=_objectSpread(_objectSpread({},WithSuggestions.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_WithSuggestions$para=WithSuggestions.parameters)||void 0===_WithSuggestions$para?void 0:_WithSuggestions$para.docs),{},{source:_objectSpread({originalSource:"args => <Search {...args} />"},null===(_WithSuggestions$para2=WithSuggestions.parameters)||void 0===_WithSuggestions$para2||null===(_WithSuggestions$para2=_WithSuggestions$para2.docs)||void 0===_WithSuggestions$para2?void 0:_WithSuggestions$para2.source)})})},"./node_modules/clsx/dist/clsx.m.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}__webpack_require__.d(__webpack_exports__,{W:function(){return clsx}}),__webpack_exports__.Z=clsx},"./node_modules/react-icons/lib/esm/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{w_:function(){return GenIcon},Pd:function(){return IconContext}});var react=__webpack_require__("./node_modules/react/index.js"),DefaultContext={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},IconContext=react.createContext&&react.createContext(DefaultContext),__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t};function Tree2Element(tree){return tree&&tree.map((function(node,i){return react.createElement(node.tag,__assign({key:i},node.attr),Tree2Element(node.child))}))}function GenIcon(data){return function(props){return react.createElement(IconBase,__assign({attr:__assign({},data.attr)},props),Tree2Element(data.child))}}function IconBase(props){var elem=function(conf){var className,attr=props.attr,size=props.size,title=props.title,svgProps=__rest(props,["attr","size","title"]),computedSize=size||conf.size||"1em";return conf.className&&(className=conf.className),props.className&&(className=(className?className+" ":"")+props.className),react.createElement("svg",__assign({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},conf.attr,attr,svgProps,{className:className,style:__assign(__assign({color:props.color||conf.color},conf.style),props.style),height:computedSize,width:computedSize,xmlns:"http://www.w3.org/2000/svg"}),title&&react.createElement("title",null,title),props.children)};return void 0!==IconContext?react.createElement(IconContext.Consumer,null,(function(conf){return elem(conf)})):elem(DefaultContext)}}}]);