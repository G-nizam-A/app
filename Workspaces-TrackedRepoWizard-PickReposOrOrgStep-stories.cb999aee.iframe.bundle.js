"use strict";(self.webpackChunk_open_sauced_insights=self.webpackChunk_open_sauced_insights||[]).push([[7352],{"./node_modules/@babel/runtime/helpers/esm/defineProperty.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}__webpack_require__.d(__webpack_exports__,{Z:()=>_defineProperty})},"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}__webpack_require__.d(__webpack_exports__,{Z:()=>_objectWithoutProperties})},"./components/Workspaces/TrackedRepoWizard/PickReposOrOrgStep.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,SelectedRepositories:()=>SelectedRepositories,__namedExportsOrder:()=>__namedExportsOrder,default:()=>PickReposOrOrgStep_stories});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),index_esm=__webpack_require__("./node_modules/react-icons/fa/index.esm.js"),fa6_index_esm=__webpack_require__("./node_modules/react-icons/fa6/index.esm.js"),card=__webpack_require__("./components/atoms/Card/card.tsx"),Button_button=__webpack_require__("./components/atoms/Button/button.tsx"),__jsx=react.createElement;const TrackedRepoWizardLayout=_ref=>{let{trackedReposCount,onAddToTrackingList,onCancel,children}=_ref;return __jsx(card.Z,{className:"p-0 w-max max-w-3xl"},__jsx("button",{className:"flex gap-1 items-center ml-4 mt-4 border border-transparent",onClick:onCancel},__jsx(fa6_index_esm.x_l,null)," back"),__jsx("div",{className:"flex flex-col justify-between gap-4"},__jsx("div",{className:"px-4 pt-2"},__jsx("h2",{className:"font-semibold mb-4"},"Add repositories to track"),children),__jsx("div",{className:"flex gap-4 items-center justify-end border-t-1 p-4"},__jsx("span",null,__jsx("span",{className:"font-semibold"},trackedReposCount)," Selected repositories"),__jsx(Button_button.Z,{variant:"primary",onClick:()=>{onAddToTrackingList()},disabled:0===trackedReposCount},"Add to tracking list"))))};TrackedRepoWizardLayout.displayName="TrackedRepoWizardLayout";try{TrackedRepoWizardLayout.displayName="TrackedRepoWizardLayout",TrackedRepoWizardLayout.__docgenInfo={description:"",displayName:"TrackedRepoWizardLayout",props:{onCancel:{defaultValue:null,description:"",name:"onCancel",required:!0,type:{name:"() => void"}},trackedReposCount:{defaultValue:null,description:"",name:"trackedReposCount",required:!0,type:{name:"number"}},onAddToTrackingList:{defaultValue:null,description:"",name:"onAddToTrackingList",required:!0,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/Workspaces/TrackedRepoWizard/TrackedRepoWizardLayout.tsx#TrackedRepoWizardLayout"]={docgenInfo:TrackedRepoWizardLayout.__docgenInfo,name:"TrackedRepoWizardLayout",path:"components/Workspaces/TrackedRepoWizard/TrackedRepoWizardLayout.tsx#TrackedRepoWizardLayout"})}catch(__react_docgen_typescript_loader_error){}var PickReposOrOrgStep_jsx=react.createElement;const PickReposOrOrgStep=_ref=>{let{onAddToTrackingList,onSearchRepos,onImportOrg,onCancel,trackedReposCount}=_ref;return PickReposOrOrgStep_jsx(TrackedRepoWizardLayout,{onAddToTrackingList,trackedReposCount,onCancel},PickReposOrOrgStep_jsx("div",{className:"grid gap-6 md:grid-cols-2","data-tracked-repo-wizard":!0},PickReposOrOrgStep_jsx("button",{className:"flex flex-col text-light-slate-12 p-8 border rounded-lg focus-visible:!border-green-800 focus-visible:!ring-green-100",onClick:onSearchRepos},PickReposOrOrgStep_jsx(index_esm.U41,{size:20,className:"text-purple-800 mb-2"}),PickReposOrOrgStep_jsx("span",{"data-button-title":!0,className:"font-semibold"},"Search for repositories"),PickReposOrOrgStep_jsx("span",{className:"text-left"},"Search for specific repositories to track on your workspace.")),PickReposOrOrgStep_jsx("button",{className:"flex flex-col text-light-slate-12 p-8 border rounded-lg focus-visible:!border-green-800 focus-visible:!ring-green-100",onClick:onImportOrg},PickReposOrOrgStep_jsx(fa6_index_esm.hJX,{size:20,className:"text-purple-800 mb-2"}),PickReposOrOrgStep_jsx("span",{"data-button-title":!0,className:"font-semibold"},"Import a Github Organization"),PickReposOrOrgStep_jsx("span",{className:"text-left"},"Search for organizations on Github and import any or all repositories."))))};PickReposOrOrgStep.displayName="PickReposOrOrgStep";try{PickReposOrOrgStep.displayName="PickReposOrOrgStep",PickReposOrOrgStep.__docgenInfo={description:"",displayName:"PickReposOrOrgStep",props:{onAddToTrackingList:{defaultValue:null,description:"",name:"onAddToTrackingList",required:!0,type:{name:"() => void"}},onSearchRepos:{defaultValue:null,description:"",name:"onSearchRepos",required:!0,type:{name:"() => void"}},onImportOrg:{defaultValue:null,description:"",name:"onImportOrg",required:!0,type:{name:"() => void"}},onCancel:{defaultValue:null,description:"",name:"onCancel",required:!0,type:{name:"() => void"}},trackedReposCount:{defaultValue:null,description:"",name:"trackedReposCount",required:!0,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/Workspaces/TrackedRepoWizard/PickReposOrOrgStep.tsx#PickReposOrOrgStep"]={docgenInfo:PickReposOrOrgStep.__docgenInfo,name:"PickReposOrOrgStep",path:"components/Workspaces/TrackedRepoWizard/PickReposOrOrgStep.tsx#PickReposOrOrgStep"})}catch(__react_docgen_typescript_loader_error){}var _Default$parameters,_Default$parameters2,_SelectedRepositories,_SelectedRepositories2;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const PickReposOrOrgStep_stories={title:"Components/Workspaces/TrackedRepoWizard/PickReposOrOrgStep",component:PickReposOrOrgStep,args:{trackedReposCount:0,onAddToTrackingList:()=>{},onSearchRepos:()=>{},onImportOrg:()=>{},onCancel:()=>{}}},Default={},SelectedRepositories={args:{trackedReposCount:543}};Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:"{}"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source)})}),SelectedRepositories.parameters=_objectSpread(_objectSpread({},SelectedRepositories.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_SelectedRepositories=SelectedRepositories.parameters)||void 0===_SelectedRepositories?void 0:_SelectedRepositories.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    trackedReposCount: 543\n  }\n}"},null===(_SelectedRepositories2=SelectedRepositories.parameters)||void 0===_SelectedRepositories2||null===(_SelectedRepositories2=_SelectedRepositories2.docs)||void 0===_SelectedRepositories2?void 0:_SelectedRepositories2.source)})});const __namedExportsOrder=["Default","SelectedRepositories"]},"./components/atoms/Button/button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),clsx__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/clsx/dist/clsx.m.js");const _excluded=["className","children","loading","disabled","variant","showLoadingText","onClick","href"];var __jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const Button=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((_ref,ref)=>{let{className,children,loading,disabled,variant,showLoadingText=!0,onClick,href}=_ref,props=(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_ref,_excluded);const styles={primary:"bg-light-orange-9 text-light-orange-2 border-light-orange-9 hover:bg-light-orange-10 ".concat(disabled?"bg-light-orange-7 hover:bg-light-orange-7 border-none  pointer-events-none":""),default:"bg-white border-light-slate-8 text-light-slate-11 hover:bg-light-slate-2 ".concat(disabled?"bg-light-slate-4 text-light-slate-9 pointer-events-none":""),dark:"bg-dark-slate-6 border-dark-slate-8 text-light-orange-2 hover:bg-dark-slate-8 ".concat(disabled?"bg-dark-slate-4 text-dark-slate-9 pointer-events-none":""),outline:"bg-orange-50 border-orange-500 text-orange-600 hover:bg-orange-100 ".concat(disabled?"bg-light-orange-3 pointer-events-none text-light-orange-7 border-light-orange-5":""),link:"text-orange-600 hover:bg-orange-100 border-none ".concat(disabled?"text-orange-400 pointer-events-none":""),destructive:"border-dark-red-8 bg-dark-red-8 text-white hover:border-dark-red-7 hover:bg-dark-red-7",text:""},rootClass=(0,clsx__WEBPACK_IMPORTED_MODULE_2__.Z)(styles[variant],disabled&&"cursor-not-allowed",disabled&&"destructive"!==variant&&"bg-light-orange-7 hover:bg-light-orange-7 border-none","items-center inline-flex text-sm font-semibold tracking-tight border py-2 px-4 rounded-md focus-visible:border-orange-500 focus:outline-none focus-visible:ring focus-visible:ring-orange-200 whitespace-nowrap",className),content=loading?__jsx("div",null,__jsx("svg",{"aria-hidden":"true",role:"status",className:(0,clsx__WEBPACK_IMPORTED_MODULE_2__.Z)("inline w-4 h-4 text-white animate-spin",showLoadingText?"mr-2":""),viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg"},__jsx("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"#E5E7EB"}),__jsx("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentColor"})),showLoadingText&&__jsx("span",{className:"text-white"},"Loading...")):children;return href?__jsx("a",(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)({className:rootClass,href,ref},props),content):__jsx("button",(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)({className:rootClass,ref,onClick:disabled?void 0:onClick},props),content)}));Button.displayName="Button";const __WEBPACK_DEFAULT_EXPORT__=Button;try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"dark"'},{value:'"link"'},{value:'"text"'},{value:'"default"'},{value:'"primary"'},{value:'"outline"'},{value:'"destructive"'}]}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}},href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string"}},rel:{defaultValue:null,description:"",name:"rel",required:!1,type:{name:"string"}},target:{defaultValue:null,description:"",name:"target",required:!1,type:{name:"string"}},showLoadingText:{defaultValue:{value:"true"},description:"",name:"showLoadingText",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/atoms/Button/button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"components/atoms/Button/button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./components/atoms/Card/card.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const Card=_ref=>{let{className,children,heading}=_ref;return __jsx("article",{className:"".concat(className||""," block ").concat(heading?"":"p-3"," bg-white border rounded-lg shadow-xs")},heading?__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx("div",{className:"px-3 md:px-6 py-3 rounded-t-lg bg-light-slate-3"},heading),__jsx("div",null,children)):children)};Card.displayName="Card";const __WEBPACK_DEFAULT_EXPORT__=Card;try{card.displayName="card",card.__docgenInfo={description:"",displayName:"card",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},heading:{defaultValue:null,description:"",name:"heading",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/atoms/Card/card.tsx#card"]={docgenInfo:card.__docgenInfo,name:"card",path:"components/atoms/Card/card.tsx#card"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/clsx/dist/clsx.m.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}__webpack_require__.d(__webpack_exports__,{W:()=>clsx,Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=clsx},"./node_modules/react-icons/lib/esm/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{w_:()=>GenIcon,Pd:()=>IconContext});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),DefaultContext={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},IconContext=react.createContext&&react.createContext(DefaultContext),__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t};function Tree2Element(tree){return tree&&tree.map((function(node,i){return react.createElement(node.tag,__assign({key:i},node.attr),Tree2Element(node.child))}))}function GenIcon(data){return function(props){return react.createElement(IconBase,__assign({attr:__assign({},data.attr)},props),Tree2Element(data.child))}}function IconBase(props){var elem=function(conf){var className,attr=props.attr,size=props.size,title=props.title,svgProps=__rest(props,["attr","size","title"]),computedSize=size||conf.size||"1em";return conf.className&&(className=conf.className),props.className&&(className=(className?className+" ":"")+props.className),react.createElement("svg",__assign({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},conf.attr,attr,svgProps,{className,style:__assign(__assign({color:props.color||conf.color},conf.style),props.style),height:computedSize,width:computedSize,xmlns:"http://www.w3.org/2000/svg"}),title&&react.createElement("title",null,title),props.children)};return void 0!==IconContext?react.createElement(IconContext.Consumer,null,(function(conf){return elem(conf)})):elem(DefaultContext)}}}]);