"use strict";(self.webpackChunk_open_sauced_insights=self.webpackChunk_open_sauced_insights||[]).push([[7352],{"./node_modules/@babel/runtime/helpers/esm/defineProperty.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}__webpack_require__.d(__webpack_exports__,{Z:()=>_defineProperty})},"./components/Workspaces/TrackedRepoWizard/PickReposOrOrgStep.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>PickReposOrOrgStep_stories});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),fa=__webpack_require__("./node_modules/react-icons/fa/index.mjs"),fa6=__webpack_require__("./node_modules/react-icons/fa6/index.mjs"),useEffectOnce=__webpack_require__("./node_modules/react-use/esm/useEffectOnce.js"),__jsx=react.createElement;const PickReposOrOrgStep=_ref=>{let{onSearchRepos,onPasteRepos,onImportOrg}=_ref;const buttonRef=(0,react.useRef)(null);return(0,useEffectOnce.Z)((()=>{var _buttonRef$current;null===(_buttonRef$current=buttonRef.current)||void 0===_buttonRef$current||_buttonRef$current.focus()})),__jsx(react.Fragment,null,__jsx("div",{className:"grid gap-6 md:grid-cols-2","data-tracked-repo-wizard":!0},__jsx("button",{ref:buttonRef,className:"flex flex-col text-light-slate-12 p-8 border rounded-lg focus-visible:!border-green-800 focus-visible:!ring-green-100",onClick:onSearchRepos},__jsx(fa.U41,{size:20,className:"text-purple-800 mb-2"}),__jsx("span",{"data-button-title":!0,className:"font-semibold"},"Search for repositories"),__jsx("span",{className:"text-left"},"Search for specific repositories to track on your workspace.")),__jsx("button",{ref:buttonRef,className:"flex flex-col text-light-slate-12 p-8 border rounded-lg focus-visible:!border-green-800 focus-visible:!ring-green-100",onClick:onPasteRepos},__jsx(fa6.lHO,{size:20,className:"text-purple-800 mb-2"}),__jsx("span",{"data-button-title":!0,className:"font-semibold"},"Import repositories"),__jsx("span",{className:"text-left"},"Paste a list of repositories to track on your workspace")),__jsx("button",{className:"flex flex-col text-light-slate-12 p-8 border rounded-lg focus-visible:!border-green-800 focus-visible:!ring-green-100 cursor-not-allowed disabled:opacity-50",title:"coming soon",onClick:onImportOrg,disabled:!0},__jsx(fa6.hJX,{size:20,className:"text-purple-800 mb-2"}),__jsx("span",{"data-button-title":!0,className:"font-semibold"},"Import a Github Organization"),__jsx("span",{className:"text-left"},"Search for organizations on Github and import any or all repositories."))))};try{PickReposOrOrgStep.displayName="PickReposOrOrgStep",PickReposOrOrgStep.__docgenInfo={description:"",displayName:"PickReposOrOrgStep",props:{onSearchRepos:{defaultValue:null,description:"",name:"onSearchRepos",required:!0,type:{name:"() => void"}},onPasteRepos:{defaultValue:null,description:"",name:"onPasteRepos",required:!0,type:{name:"() => void"}},onImportOrg:{defaultValue:null,description:"",name:"onImportOrg",required:!0,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/Workspaces/TrackedRepoWizard/PickReposOrOrgStep.tsx#PickReposOrOrgStep"]={docgenInfo:PickReposOrOrgStep.__docgenInfo,name:"PickReposOrOrgStep",path:"components/Workspaces/TrackedRepoWizard/PickReposOrOrgStep.tsx#PickReposOrOrgStep"})}catch(__react_docgen_typescript_loader_error){}var _Default$parameters,_Default$parameters2;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const PickReposOrOrgStep_stories={title:"Components/Workspaces/TrackedRepoWizard/PickReposOrOrgStep",component:PickReposOrOrgStep,args:{onSearchRepos:()=>{},onImportOrg:()=>{}}},Default={};Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:"{}"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source)})});const __namedExportsOrder=["Default"]},"./node_modules/react-icons/lib/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{w_:()=>GenIcon,Pd:()=>IconContext});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),DefaultContext={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},IconContext=react.createContext&&react.createContext(DefaultContext),_excluded=["attr","size","title"];function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!=typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!=typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"==typeof key?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function Tree2Element(tree){return tree&&tree.map(((node,i)=>react.createElement(node.tag,_objectSpread({key:i},node.attr),Tree2Element(node.child))))}function GenIcon(data){return props=>react.createElement(IconBase,_extends({attr:_objectSpread({},data.attr)},props),Tree2Element(data.child))}function IconBase(props){var elem=conf=>{var className,{attr,size,title}=props,svgProps=_objectWithoutProperties(props,_excluded),computedSize=size||conf.size||"1em";return conf.className&&(className=conf.className),props.className&&(className=(className?className+" ":"")+props.className),react.createElement("svg",_extends({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},conf.attr,attr,svgProps,{className,style:_objectSpread(_objectSpread({color:props.color||conf.color},conf.style),props.style),height:computedSize,width:computedSize,xmlns:"http://www.w3.org/2000/svg"}),title&&react.createElement("title",null,title),props.children)};return void 0!==IconContext?react.createElement(IconContext.Consumer,null,(conf=>elem(conf))):elem(DefaultContext)}},"./node_modules/react-use/esm/useEffectOnce.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const __WEBPACK_DEFAULT_EXPORT__=function(effect){(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(effect,[])}}}]);