(self.webpackChunk_open_sauced_app=self.webpackChunk_open_sauced_app||[]).push([[8460],{"./node_modules/@babel/runtime/helpers/esm/defineProperty.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}__webpack_require__.d(__webpack_exports__,{Z:()=>_defineProperty})},"./node_modules/@heroicons/react/24/outline/ChartBarSquareIcon.js":(module,__unused_webpack_exports,__webpack_require__)=>{const React=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const ForwardRef=React.forwardRef((function ChartBarSquareIcon({title,titleId,...props},svgRef){return React.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:svgRef,"aria-labelledby":titleId},props),title?React.createElement("title",{id:titleId},title):null,React.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"}))}));module.exports=ForwardRef},"./node_modules/@heroicons/react/24/outline/UsersIcon.js":(module,__unused_webpack_exports,__webpack_require__)=>{const React=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const ForwardRef=React.forwardRef((function UsersIcon({title,titleId,...props},svgRef){return React.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:svgRef,"aria-labelledby":titleId},props),title?React.createElement("title",{id:titleId},title):null,React.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"}))}));module.exports=ForwardRef},"./components/shared/AppSidebar/InsightsPanel.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ContributorInsights:()=>ContributorInsights,Loading:()=>InsightsPanel_stories_Loading,RepositoryInsights:()=>RepositoryInsights,__namedExportsOrder:()=>__namedExportsOrder,default:()=>InsightsPanel_stories});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),UsersIcon=__webpack_require__("./node_modules/@heroicons/react/24/outline/UsersIcon.js"),ChartBarSquareIcon=__webpack_require__("./node_modules/@heroicons/react/24/outline/ChartBarSquareIcon.js"),next_link=__webpack_require__("./node_modules/next/link.js"),link_default=__webpack_require__.n(next_link),sidebar_menu_item=(__webpack_require__("./components/atoms/SkeletonLoader/skeleton-wrapper.tsx"),__webpack_require__("./components/shared/AppSidebar/sidebar-menu-item.tsx")),__jsx=react.createElement;const InsightsPanel=_ref=>{let{title,insights,type,isLoading,workspaceId}=_ref;const{0:open,1:setOpen}=(0,react.useState)(!0);return __jsx("div",null,__jsx(sidebar_menu_item.Z,{title,url:"/workspaces/".concat(workspaceId,"list"===type?"/contributor-insights":"/repository-insights"),icon:(type=>{switch(type){case"list":return __jsx(UsersIcon,{className:"w-5 h-5 text-slate-400"});case"repo":return __jsx(ChartBarSquareIcon,{className:"w-5 h-5 text-slate-400"})}})(type)}),__jsx("div",{className:"overflow-hidden"},isLoading?null:__jsx("ul",{className:"list-none w-full px-4 mt-1 [&_li]:border-l-2 text-slate-700 tracking-tight"},insights.slice(0,3).map((insight=>{const url="list"===type?"/workspaces/".concat(workspaceId,"/contributor-insights/").concat(insight.id,"/overview"):"/workspaces/".concat(workspaceId,"/repository-insights/").concat(insight.id,"/dashboard");return __jsx("li",{className:"py-1 px-3 hover:bg-slate-100 rounded-tr-md rounded-br-md transition-colors text-sm",key:insight.id},__jsx(link_default(),{title,href:url,className:"items-center flex-auto flex-row align-middle block"},__jsx("span",{className:"whitespace-nowrap overflow-hidden overflow-ellipsis inline-flex"},insight.name)))})),insights.length>3?__jsx("li",{className:"py-1 px-3 hover:bg-slate-100 rounded-tr-md rounded-br-md transition-colors text-sm"},__jsx(link_default(),{className:"text-xs text-slate-500 pl-3 pt-2 border-l-2 hover:text-orange-600",title:"",href:"/workspaces/".concat(workspaceId,"list"===type?"/contributor-insights":"/repository-insights")},"Show all")):null)))};InsightsPanel.displayName="InsightsPanel";try{InsightsPanel.displayName="InsightsPanel",InsightsPanel.__docgenInfo={description:"",displayName:"InsightsPanel",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},insights:{defaultValue:null,description:"",name:"insights",required:!0,type:{name:"DbWorkspaceRepositoryInsight[] | DbWorkspaceContributorInsight[]"}},type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:'"repo"'},{value:'"list"'}]}},isLoading:{defaultValue:null,description:"",name:"isLoading",required:!0,type:{name:"boolean"}},workspaceId:{defaultValue:null,description:"",name:"workspaceId",required:!1,type:{name:"string | null"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/shared/AppSidebar/InsightsPanel.tsx#InsightsPanel"]={docgenInfo:InsightsPanel.__docgenInfo,name:"InsightsPanel",path:"components/shared/AppSidebar/InsightsPanel.tsx#InsightsPanel"})}catch(__react_docgen_typescript_loader_error){}var _RepositoryInsights$p,_RepositoryInsights$p2,_ContributorInsights$,_ContributorInsights$2,_Loading$parameters,_Loading$parameters2;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const InsightsPanel_stories={title:"Components/Workspaces/InsightsPanel",component:InsightsPanel,args:{isLoading:!1}},RepositoryInsights={args:{title:"Repository Insights",insights:new Array(5).fill("").map(((_,i)=>({id:i,name:"Repository Insight ".concat(i+1),is_public:!0,is_favorite:!1,is_featured:!1,short_code:"my-insight-".concat(i),created_at:"2021-09-14T20:30:14.000Z",updated_at:"2021-09-14T20:30:14.000Z",deleted_at:null}))),type:"repo"}},ContributorInsights={args:{title:"Contributor Insights",insights:new Array(5).fill("").map(((_,i)=>({id:i,name:"Contributor Insight ".concat(i+1),is_public:!0,is_favorite:!1,is_featured:!1,short_code:"my-insight-".concat(i),created_at:"2021-09-14T20:30:14.000Z",updated_at:"2021-09-14T20:30:14.000Z",deleted_at:null}))),type:"list"}},InsightsPanel_stories_Loading={args:{title:"Repository Insights",isLoading:!0}};RepositoryInsights.parameters=_objectSpread(_objectSpread({},RepositoryInsights.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_RepositoryInsights$p=RepositoryInsights.parameters)||void 0===_RepositoryInsights$p?void 0:_RepositoryInsights$p.docs),{},{source:_objectSpread({originalSource:'{\n  args: {\n    title: "Repository Insights",\n    insights: new Array(5).fill("").map((_, i) => {\n      return {\n        id: i,\n        name: `Repository Insight ${i + 1}`,\n        is_public: true,\n        is_favorite: false,\n        is_featured: false,\n        short_code: `my-insight-${i}`,\n        created_at: "2021-09-14T20:30:14.000Z",\n        updated_at: "2021-09-14T20:30:14.000Z",\n        deleted_at: null\n      };\n    }),\n    type: "repo"\n  }\n}'},null===(_RepositoryInsights$p2=RepositoryInsights.parameters)||void 0===_RepositoryInsights$p2||null===(_RepositoryInsights$p2=_RepositoryInsights$p2.docs)||void 0===_RepositoryInsights$p2?void 0:_RepositoryInsights$p2.source)})}),ContributorInsights.parameters=_objectSpread(_objectSpread({},ContributorInsights.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_ContributorInsights$=ContributorInsights.parameters)||void 0===_ContributorInsights$?void 0:_ContributorInsights$.docs),{},{source:_objectSpread({originalSource:'{\n  args: {\n    title: "Contributor Insights",\n    insights: new Array(5).fill("").map((_, i) => {\n      return {\n        id: i,\n        name: `Contributor Insight ${i + 1}`,\n        is_public: true,\n        is_favorite: false,\n        is_featured: false,\n        short_code: `my-insight-${i}`,\n        created_at: "2021-09-14T20:30:14.000Z",\n        updated_at: "2021-09-14T20:30:14.000Z",\n        deleted_at: null\n      };\n    }),\n    type: "list"\n  }\n}'},null===(_ContributorInsights$2=ContributorInsights.parameters)||void 0===_ContributorInsights$2||null===(_ContributorInsights$2=_ContributorInsights$2.docs)||void 0===_ContributorInsights$2?void 0:_ContributorInsights$2.source)})}),InsightsPanel_stories_Loading.parameters=_objectSpread(_objectSpread({},InsightsPanel_stories_Loading.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Loading$parameters=InsightsPanel_stories_Loading.parameters)||void 0===_Loading$parameters?void 0:_Loading$parameters.docs),{},{source:_objectSpread({originalSource:'{\n  args: {\n    title: "Repository Insights",\n    isLoading: true\n  }\n}'},null===(_Loading$parameters2=InsightsPanel_stories_Loading.parameters)||void 0===_Loading$parameters2||null===(_Loading$parameters2=_Loading$parameters2.docs)||void 0===_Loading$parameters2?void 0:_Loading$parameters2.source)})});const __namedExportsOrder=["RepositoryInsights","ContributorInsights","Loading"]},"./components/atoms/SkeletonLoader/skeleton-wrapper.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-loading-skeleton/dist/index.mjs"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const __WEBPACK_DEFAULT_EXPORT__=_ref=>{let{classNames,count=1,width,height,radius}=_ref;const skeletonArray=Array(count).fill(!0);return __jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,skeletonArray.map(((_,index)=>height?__jsx("div",{key:index,className:classNames},__jsx(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1__.Z,{height,width,borderRadius:radius,count:1})):__jsx("div",{key:index,className:"react-loading-skeleton"}))))};try{skeletonwrapper.displayName="skeletonwrapper",skeletonwrapper.__docgenInfo={description:"",displayName:"skeletonwrapper",props:{classNames:{defaultValue:null,description:"",name:"classNames",required:!1,type:{name:"string"}},count:{defaultValue:{value:"1"},description:"",name:"count",required:!1,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"number"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"number"}},radius:{defaultValue:null,description:"",name:"radius",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/atoms/SkeletonLoader/skeleton-wrapper.tsx#skeletonwrapper"]={docgenInfo:skeletonwrapper.__docgenInfo,name:"skeletonwrapper",path:"components/atoms/SkeletonLoader/skeleton-wrapper.tsx#skeletonwrapper"})}catch(__react_docgen_typescript_loader_error){}},"./components/shared/AppSidebar/sidebar-menu-item.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var next_link__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/link.js"),next_link__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__),__jsx=__webpack_require__("./node_modules/next/dist/compiled/react/index.js").createElement;const SidebarMenuItem=_ref=>{let{title,icon,type,url:href,isActive}=_ref;return __jsx("li",null,__jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default(),{title,href,className:"hover:bg-slate-100 text-sm font-medium flex gap-1 items-center rounded-md transition-colors cursor-pointer tracking-tight py-1 px-2 group"},icon,__jsx("h3",{className:"py-1 text-slate-800"},title)))};SidebarMenuItem.displayName="SidebarMenuItem";const __WEBPACK_DEFAULT_EXPORT__=SidebarMenuItem;try{sidebarmenuitem.displayName="sidebarmenuitem",sidebarmenuitem.__docgenInfo={description:"",displayName:"sidebarmenuitem",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"repo"'},{value:'"list"'}]}},url:{defaultValue:null,description:"",name:"url",required:!0,type:{name:"string"}},isActive:{defaultValue:null,description:"",name:"isActive",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/shared/AppSidebar/sidebar-menu-item.tsx#sidebarmenuitem"]={docgenInfo:sidebarmenuitem.__docgenInfo,name:"sidebarmenuitem",path:"components/shared/AppSidebar/sidebar-menu-item.tsx#sidebarmenuitem"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/react-loading-skeleton/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>Skeleton});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const SkeletonThemeContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({}),defaultEnableAnimation=!0;function styleOptionsToCssProperties({baseColor,highlightColor,width,height,borderRadius,circle,direction,duration,enableAnimation=defaultEnableAnimation}){const style={};return"rtl"===direction&&(style["--animation-direction"]="reverse"),"number"==typeof duration&&(style["--animation-duration"]=`${duration}s`),enableAnimation||(style["--pseudo-element-display"]="none"),"string"!=typeof width&&"number"!=typeof width||(style.width=width),"string"!=typeof height&&"number"!=typeof height||(style.height=height),"string"!=typeof borderRadius&&"number"!=typeof borderRadius||(style.borderRadius=borderRadius),circle&&(style.borderRadius="50%"),void 0!==baseColor&&(style["--base-color"]=baseColor),void 0!==highlightColor&&(style["--highlight-color"]=highlightColor),style}function Skeleton({count=1,wrapper:Wrapper,className:customClassName,containerClassName,containerTestId,circle=!1,style:styleProp,...originalPropsStyleOptions}){var _a,_b,_c;const contextStyleOptions=react__WEBPACK_IMPORTED_MODULE_0__.useContext(SkeletonThemeContext),propsStyleOptions={...originalPropsStyleOptions};for(const[key,value]of Object.entries(originalPropsStyleOptions))void 0===value&&delete propsStyleOptions[key];const styleOptions={...contextStyleOptions,...propsStyleOptions,circle},style={...styleProp,...styleOptionsToCssProperties(styleOptions)};let className="react-loading-skeleton";customClassName&&(className+=` ${customClassName}`);const inline=null!==(_a=styleOptions.inline)&&void 0!==_a&&_a,elements=[],countCeil=Math.ceil(count);for(let i=0;i<countCeil;i++){let thisStyle=style;if(countCeil>count&&i===countCeil-1){const width=null!==(_b=thisStyle.width)&&void 0!==_b?_b:"100%",fractionalPart=count%1,fractionalWidth="number"==typeof width?width*fractionalPart:`calc(${width} * ${fractionalPart})`;thisStyle={...thisStyle,width:fractionalWidth}}const skeletonSpan=react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className,style:thisStyle,key:i},"‌");inline?elements.push(skeletonSpan):elements.push(react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,{key:i},skeletonSpan,react__WEBPACK_IMPORTED_MODULE_0__.createElement("br",null)))}return react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:containerClassName,"data-testid":containerTestId,"aria-live":"polite","aria-busy":null!==(_c=styleOptions.enableAnimation)&&void 0!==_c?_c:defaultEnableAnimation},Wrapper?elements.map(((el,i)=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(Wrapper,{key:i},el))):elements)}},"./node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs":(__unused_webpack_module,exports)=>{"use strict";function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}exports._=exports._interop_require_wildcard=function _interop_require_wildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!=typeof obj&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}newObj.default=obj,cache&&cache.set(obj,newObj);return newObj}}}]);