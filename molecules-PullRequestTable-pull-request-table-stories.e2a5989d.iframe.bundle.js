(self.webpackChunk_open_sauced_insights=self.webpackChunk_open_sauced_insights||[]).push([[2698],{"./node_modules/@babel/runtime/helpers/esm/defineProperty.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}__webpack_require__.d(__webpack_exports__,{Z:()=>_defineProperty})},"./components/molecules/PullRequestTable/pull-request-table.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AddedPullRequests:()=>AddedPullRequests,NoPullRequests:()=>NoPullRequests,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _AddedPullRequests$pa,_AddedPullRequests$pa2,_NoPullRequests$param,_NoPullRequests$param2,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),components_molecules_PullRequestTable_pull_request_table__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./components/molecules/PullRequestTable/pull-request-table.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const __WEBPACK_DEFAULT_EXPORT__={title:"Design System/Molecules/Contributor Table",component:"Card Table"},PullRequestTableTemplate=args=>__jsx(components_molecules_PullRequestTable_pull_request_table__WEBPACK_IMPORTED_MODULE_2__.Z,args);PullRequestTableTemplate.displayName="PullRequestTableTemplate";const AddedPullRequests=PullRequestTableTemplate.bind({}),NoPullRequests=PullRequestTableTemplate.bind({});AddedPullRequests.args={},NoPullRequests.args={},AddedPullRequests.parameters=_objectSpread(_objectSpread({},AddedPullRequests.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_AddedPullRequests$pa=AddedPullRequests.parameters)||void 0===_AddedPullRequests$pa?void 0:_AddedPullRequests$pa.docs),{},{source:_objectSpread({originalSource:"args => <PullRequestTable {...args} />"},null===(_AddedPullRequests$pa2=AddedPullRequests.parameters)||void 0===_AddedPullRequests$pa2||null===(_AddedPullRequests$pa2=_AddedPullRequests$pa2.docs)||void 0===_AddedPullRequests$pa2?void 0:_AddedPullRequests$pa2.source)})}),NoPullRequests.parameters=_objectSpread(_objectSpread({},NoPullRequests.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_NoPullRequests$param=NoPullRequests.parameters)||void 0===_NoPullRequests$param?void 0:_NoPullRequests$param.docs),{},{source:_objectSpread({originalSource:"args => <PullRequestTable {...args} />"},null===(_NoPullRequests$param2=NoPullRequests.parameters)||void 0===_NoPullRequests$param2||null===(_NoPullRequests$param2=_NoPullRequests$param2.docs)||void 0===_NoPullRequests$param2?void 0:_NoPullRequests$param2.source)})});const __namedExportsOrder=["AddedPullRequests","NoPullRequests"]},"./components/atoms/SkeletonLoader/skeleton-wrapper.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-loading-skeleton/dist/index.mjs"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const __WEBPACK_DEFAULT_EXPORT__=_ref=>{let{classNames,count=1,width,height,radius}=_ref;const skeletonArray=Array(count).fill(!0);return __jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,skeletonArray.map(((_,index)=>height?__jsx("div",{key:index,className:classNames},__jsx(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1__.Z,{height,width,borderRadius:radius,count:1})):__jsx("div",{key:index,className:"react-loading-skeleton"}))))};try{skeletonwrapper.displayName="skeletonwrapper",skeletonwrapper.__docgenInfo={description:"",displayName:"skeletonwrapper",props:{classNames:{defaultValue:null,description:"",name:"classNames",required:!1,type:{name:"string"}},count:{defaultValue:{value:"1"},description:"",name:"count",required:!1,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"number"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"number"}},radius:{defaultValue:null,description:"",name:"radius",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/atoms/SkeletonLoader/skeleton-wrapper.tsx#skeletonwrapper"]={docgenInfo:skeletonwrapper.__docgenInfo,name:"skeletonwrapper",path:"components/atoms/SkeletonLoader/skeleton-wrapper.tsx#skeletonwrapper"})}catch(__react_docgen_typescript_loader_error){}},"./components/atoms/Tooltip/tooltip.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{O:()=>TipProvider,Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@radix-ui/react-tooltip/dist/index.module.js"),clsx__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const Tooltip=_ref=>{let{children,content,className,direction}=_ref;const{Portal,Root,Content,Trigger,Arrow}=_radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_1__;return __jsx(Root,{delayDuration:300},__jsx(Trigger,{asChild:!0},__jsx("div",null,children)),__jsx(Portal,null,__jsx(Content,{sideOffset:4,collisionPadding:10,side:direction||"bottom",avoidCollisions:!0,style:{zIndex:9999}},__jsx("div",{className:(0,clsx__WEBPACK_IMPORTED_MODULE_2__.Z)("text-xs py-1 px-2 rounded shadow-lg  bg-dark-slate-2 text-dark-slate-12",className)},content),__jsx(Arrow,{className:"fill-dark "}))))};Tooltip.displayName="Tooltip";const TipProvider=_radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_1__.zt,__WEBPACK_DEFAULT_EXPORT__=Tooltip;try{TipProvider.displayName="TipProvider",TipProvider.__docgenInfo={description:"",displayName:"TipProvider",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/atoms/Tooltip/tooltip.tsx#TipProvider"]={docgenInfo:TipProvider.__docgenInfo,name:"TipProvider",path:"components/atoms/Tooltip/tooltip.tsx#TipProvider"})}catch(__react_docgen_typescript_loader_error){}try{tooltip.displayName="tooltip",tooltip.__docgenInfo={description:"",displayName:"tooltip",props:{content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"string"}},direction:{defaultValue:null,description:"",name:"direction",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"right"'},{value:'"left"'},{value:'"bottom"'}]}},delay:{defaultValue:null,description:"",name:"delay",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},tipClassName:{defaultValue:null,description:"",name:"tipClassName",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/atoms/Tooltip/tooltip.tsx#tooltip"]={docgenInfo:tooltip.__docgenInfo,name:"tooltip",path:"components/atoms/Tooltip/tooltip.tsx#tooltip"})}catch(__react_docgen_typescript_loader_error){}},"./components/atoms/Typography/text.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),clsx__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),_wrapper__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./components/atoms/Typography/wrapper.tsx");const _excluded=["children","title","className","type","disabled","mark","code","keyboard","underline","strikethrough","strong","small"];var __jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const Text=_ref=>{let{children,title,className,type="default",disabled,mark,code,keyboard,underline,strikethrough,strong,small}=_ref,props=(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(_ref,_excluded);const TextTag=mark?"mark":code?"code":keyboard?"kbd":strong?"strong":small?"small":"span";return __jsx(_wrapper__WEBPACK_IMPORTED_MODULE_1__.Z,(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)({className:(0,clsx__WEBPACK_IMPORTED_MODULE_4__.Z)(className,disabled&&"cursor-not-allowed select-none text-light-slate-11/50",keyboard&&"bg-light-slate-4/50 rounded px-2 border border-b-2 border-light-slate-8/50",underline&&"underline",strikethrough&&"line-through",(type=>"secondary"===type?"!text-light-slate-5":"success"===type?"!text-dark-grass-10":"warning"===type?"!text-yellow-500":"danger"===type?"!text-dark-red-10":"")(type))},props),__jsx(TextTag,{title},children))};Text.displayName="Text";const __WEBPACK_DEFAULT_EXPORT__=Text;try{text.displayName="text",text.__docgenInfo={description:"",displayName:"text",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},type:{defaultValue:{value:"default"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"secondary"'},{value:'"success"'},{value:'"warning"'},{value:'"danger"'}]}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},mark:{defaultValue:null,description:"",name:"mark",required:!1,type:{name:"boolean"}},code:{defaultValue:null,description:"",name:"code",required:!1,type:{name:"boolean"}},keyboard:{defaultValue:null,description:"",name:"keyboard",required:!1,type:{name:"boolean"}},underline:{defaultValue:null,description:"",name:"underline",required:!1,type:{name:"boolean"}},strikethrough:{defaultValue:null,description:"",name:"strikethrough",required:!1,type:{name:"boolean"}},strong:{defaultValue:null,description:"",name:"strong",required:!1,type:{name:"boolean"}},small:{defaultValue:null,description:"",name:"small",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/atoms/Typography/text.tsx#text"]={docgenInfo:text.__docgenInfo,name:"text",path:"components/atoms/Typography/text.tsx#text"})}catch(__react_docgen_typescript_loader_error){}},"./components/atoms/Typography/wrapper.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),clsx__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/clsx/dist/clsx.m.js");const _excluded=["children","className","size"];var __jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const TypographyWrapper=_ref=>{let{children,className,size="sm"}=_ref,props=(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_ref,_excluded);return __jsx("span",(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__.Z)({className:(0,clsx__WEBPACK_IMPORTED_MODULE_3__.Z)("prose","prose-".concat(size),className)},props),children)};TypographyWrapper.displayName="TypographyWrapper";const __WEBPACK_DEFAULT_EXPORT__=TypographyWrapper;try{wrapper.displayName="wrapper",wrapper.__docgenInfo={description:"",displayName:"wrapper",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:{value:"sm"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"base"'},{value:'"sm"'},{value:'"lg"'},{value:'"xl"'},{value:'"2xl"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/atoms/Typography/wrapper.tsx#wrapper"]={docgenInfo:wrapper.__docgenInfo,name:"wrapper",path:"components/atoms/Typography/wrapper.tsx#wrapper"})}catch(__react_docgen_typescript_loader_error){}},"./components/molecules/PullRequestTable/pull-request-table.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>pull_request_table});var esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),useContributorPullRequests=__webpack_require__("./lib/hooks/api/useContributorPullRequests.ts"),skeleton_wrapper=__webpack_require__("./components/atoms/SkeletonLoader/skeleton-wrapper.tsx"),lib=__webpack_require__("./node_modules/react-icons/lib/index.mjs"),go=__webpack_require__("./node_modules/react-icons/go/index.mjs"),bs=__webpack_require__("./node_modules/react-icons/bs/index.mjs"),fa=__webpack_require__("./node_modules/react-icons/fa/index.mjs"),Typography_text=__webpack_require__("./components/atoms/Typography/text.tsx"),tooltip=__webpack_require__("./components/atoms/Tooltip/tooltip.tsx"),__jsx=react.createElement;const LatestPrTableHeader=_ref=>{let{classNames,isHoverCard}=_ref;return __jsx("div",{className:"flex gap-2 items-center bg-light-slate-3 rounded-md px-2 py-1 "},__jsx("div",{className:"w-3/5"},__jsx(Typography_text.Z,{className:" "},"Latest PRs")),__jsx(lib.Pd.Provider,{value:{color:"gray",style:{width:14,height:14}}},__jsx("div",{className:"".concat(isHoverCard&&"ml-auto"," justify-end w-[calc(10%-4px)]")},__jsx(tooltip.Z,{content:"Last Commit Date"},__jsx(fa.tpH,null)))),__jsx(lib.Pd.Provider,{value:{color:"gray",style:{width:14,height:14}}},__jsx("div",{className:"".concat(isHoverCard?"hidden":"flex"," justify-end w-[calc(10%-4px)]")},__jsx(tooltip.Z,{content:"Date Approved"},__jsx(fa.wO,null)))),__jsx(lib.Pd.Provider,{value:{color:"gray",style:{width:14,height:14,strokeWidth:.3}}},__jsx("div",{className:"".concat(isHoverCard?"hidden":"flex"," justify-end w-[calc(10%-4px)]")},__jsx(tooltip.Z,{content:"Files Touched"},__jsx(go.h3x,null)))),__jsx(lib.Pd.Provider,{value:{color:"gray",style:{width:14,height:14,strokeWidth:.5}}},__jsx("div",{className:"".concat(isHoverCard?"hidden":"flex"," justify-end w-[calc(10%-4px)]")},__jsx(tooltip.Z,{content:"Lines Touched"},__jsx(bs.YlG,null)))))};LatestPrTableHeader.displayName="LatestPrTableHeader";const latest_pr_table_header=LatestPrTableHeader;try{latestprtableheader.displayName="latestprtableheader",latestprtableheader.__docgenInfo={description:"",displayName:"latestprtableheader",props:{classNames:{defaultValue:null,description:"",name:"classNames",required:!1,type:{name:"string"}},isHoverCard:{defaultValue:null,description:"",name:"isHoverCard",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/molecules/LatestPrTableHeader/latest-pr-table-header.tsx#latestprtableheader"]={docgenInfo:latestprtableheader.__docgenInfo,name:"latestprtableheader",path:"components/molecules/LatestPrTableHeader/latest-pr-table-header.tsx#latestprtableheader"})}catch(__react_docgen_typescript_loader_error){}var vsc=__webpack_require__("./node_modules/react-icons/vsc/index.mjs"),date_utils=__webpack_require__("./lib/utils/date-utils.ts"),humanizeNumber=__webpack_require__("./lib/utils/humanizeNumber.ts"),latest_pr_table_row_jsx=react.createElement;const LatestPrTableRow=_ref=>{let{prName,prStatus,prIssuedTime,prMergedTime,noOfFilesChanged,noOfLinesChanged,merged,draft,isHoverCard,repoFullName,prNumber,prUpdatedTime}=_ref;return latest_pr_table_row_jsx("div",{className:"flex gap-2 items-center px-2 py-1"},latest_pr_table_row_jsx("div",{className:"flex item-center gap-2 w-3/5 ".concat(isHoverCard&&"w-5/6")},draft||"open"!==prStatus.toLowerCase()?!draft&&"closed"===prStatus.toLowerCase()||"merged"===prStatus.toLowerCase()?latest_pr_table_row_jsx(lib.Pd.Provider,{value:{color:merged?"purple":"red",style:{width:14,height:14,marginTop:2}}},merged?latest_pr_table_row_jsx(vsc.HlQ,{title:"Merged Pull Request"}):latest_pr_table_row_jsx(vsc.UVi,{title:"Closed Pull Request"})):latest_pr_table_row_jsx(lib.Pd.Provider,{value:{color:"gray",style:{width:14,height:14,marginTop:2}}},latest_pr_table_row_jsx(vsc.jOL,{title:"Draft Pull Request"})):latest_pr_table_row_jsx(lib.Pd.Provider,{value:{color:"green",style:{width:14,height:14,marginTop:2}}},latest_pr_table_row_jsx(vsc.X9P,{title:"Open Pull Request"})),latest_pr_table_row_jsx(Typography_text.Z,{title:"updated date"},(0,date_utils.wu)(new Date(prUpdatedTime))),latest_pr_table_row_jsx(Typography_text.Z,{title:prName,className:"!text-light-slate-12 !w-32 md:!w-72 !truncate"},latest_pr_table_row_jsx("a",{href:"https://github.com/".concat(repoFullName,"/pull/").concat(prNumber),target:"_blank",rel:"noreferrer"},prName))),latest_pr_table_row_jsx("div",{className:"".concat(isHoverCard&&"ml-auto"," justify-end w-[calc(10%-4px)] text-sm text-light-slate-11")},(0,date_utils.wu)(new Date(prIssuedTime))),latest_pr_table_row_jsx("div",{className:"".concat(isHoverCard?"hidden":"flex"," justify-end w-[calc(10%-4px)] text-sm text-light-slate-11")},merged?(0,date_utils.wu)(new Date(prMergedTime)):"-"),latest_pr_table_row_jsx("div",{className:"".concat(isHoverCard?"hidden":"flex"," justify-end w-[calc(10%-4px)] text-sm text-light-slate-11")},noOfFilesChanged>=1e3?(0,humanizeNumber.Z)(noOfFilesChanged,"abbreviation"):noOfFilesChanged),latest_pr_table_row_jsx("div",{className:"".concat(isHoverCard?"hidden":"flex"," justify-end w-[calc(10%-4px)] text-sm text-light-slate-11")},noOfLinesChanged>=1e3?(0,humanizeNumber.Z)(noOfLinesChanged,"abbreviation"):noOfLinesChanged))};LatestPrTableRow.displayName="LatestPrTableRow";const latest_pr_table_row=LatestPrTableRow;try{latestprtablerow.displayName="latestprtablerow",latestprtablerow.__docgenInfo={description:"",displayName:"latestprtablerow",props:{prName:{defaultValue:null,description:"",name:"prName",required:!0,type:{name:"string"}},prStatus:{defaultValue:null,description:"",name:"prStatus",required:!0,type:{name:"string"}},merged:{defaultValue:null,description:"",name:"merged",required:!1,type:{name:"boolean"}},draft:{defaultValue:null,description:"",name:"draft",required:!1,type:{name:"boolean"}},prMergedTime:{defaultValue:null,description:"",name:"prMergedTime",required:!0,type:{name:"string"}},prIssuedTime:{defaultValue:null,description:"",name:"prIssuedTime",required:!0,type:{name:"string"}},noOfFilesChanged:{defaultValue:null,description:"",name:"noOfFilesChanged",required:!0,type:{name:"number"}},noOfLinesChanged:{defaultValue:null,description:"",name:"noOfLinesChanged",required:!0,type:{name:"number"}},isHoverCard:{defaultValue:null,description:"",name:"isHoverCard",required:!1,type:{name:"boolean"}},repoFullName:{defaultValue:null,description:"",name:"repoFullName",required:!0,type:{name:"string"}},prNumber:{defaultValue:null,description:"",name:"prNumber",required:!0,type:{name:"number"}},prUpdatedTime:{defaultValue:null,description:"",name:"prUpdatedTime",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/molecules/LatestPrTableRow/latest-pr-table-row.tsx#latestprtablerow"]={docgenInfo:latestprtablerow.__docgenInfo,name:"latestprtablerow",path:"components/molecules/LatestPrTableRow/latest-pr-table-row.tsx#latestprtablerow"})}catch(__react_docgen_typescript_loader_error){}var pull_request_table_jsx=react.createElement;const pull_request_table=_ref=>{let{contributor,topic,repositories,limit,isHoverCard,range}=_ref;const{data,isLoading}=(0,useContributorPullRequests.ZP)({contributor,topic,repoIds:repositories,limit,range,mostRecent:!0});return data.length>0?pull_request_table_jsx(react.Fragment,null,pull_request_table_jsx("div",{className:"flex flex-col"},pull_request_table_jsx(latest_pr_table_header,{isHoverCard}),pull_request_table_jsx("div",{className:"flex flex-col gap-0.5"},data.map(((_ref2,index)=>{let{pr_title:prName,pr_state:prStatus,pr_is_merged:merged,pr_is_draft:draft,pr_merged_at:prMergedTime,pr_created_at:prIssuedTime,pr_changed_files:noOfFilesChanged,pr_additions:additions,pr_deletions:deletions,pr_number:prNumber,repo_name:fullName,pr_updated_at:prUpdatedTime}=_ref2;const latestPrs={prName,prIssuedTime,prMergedTime,prStatus,merged,draft,noOfFilesChanged,noOfLinesChanged:Math.abs(additions-deletions),repoFullName:fullName,prNumber,prUpdatedTime};return pull_request_table_jsx(latest_pr_table_row,(0,esm_extends.Z)({isHoverCard,key:index},latestPrs))}))))):pull_request_table_jsx("div",{className:"px-2 py-1"},isLoading?pull_request_table_jsx(skeleton_wrapper.Z,{height:20}):"There are currently no PRs...")};try{pullrequesttable.displayName="pullrequesttable",pullrequesttable.__docgenInfo={description:"",displayName:"pullrequesttable",props:{contributor:{defaultValue:null,description:"",name:"contributor",required:!0,type:{name:"string"}},topic:{defaultValue:null,description:"",name:"topic",required:!0,type:{name:"string"}},repositories:{defaultValue:null,description:"",name:"repositories",required:!1,type:{name:"number[]"}},limit:{defaultValue:null,description:"",name:"limit",required:!1,type:{name:"number"}},isHoverCard:{defaultValue:null,description:"",name:"isHoverCard",required:!1,type:{name:"boolean"}},range:{defaultValue:null,description:"",name:"range",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/molecules/PullRequestTable/pull-request-table.tsx#pullrequesttable"]={docgenInfo:pullrequesttable.__docgenInfo,name:"pullrequesttable",path:"components/molecules/PullRequestTable/pull-request-table.tsx#pullrequesttable"})}catch(__react_docgen_typescript_loader_error){}},"./lib/hooks/api/useContributorPullRequests.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{ZP:()=>__WEBPACK_DEFAULT_EXPORT__});var swr__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/swr/core/dist/index.mjs"),next_router__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/router.js"),lib_utils_public_api_fetcher__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./lib/utils/public-api-fetcher.ts"),lib_utils_get_filter_query__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./lib/utils/get-filter-query.ts");function getContributorPRUrl(contributor,filter,topic){let repoIds=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],limit=arguments.length>4&&void 0!==arguments[4]?arguments[4]:8,range=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"30",mostRecent=arguments.length>6&&void 0!==arguments[6]&&arguments[6];const filterQuery=(0,lib_utils_get_filter_query__WEBPACK_IMPORTED_MODULE_3__.Z)(filter),query=new URLSearchParams(filterQuery);Number.isNaN(Number(topic))&&"*"!==topic&&query.set("topic",topic),limit&&query.set("limit","".concat(limit)),(null==repoIds?void 0:repoIds.length)>0&&query.set("repoIds",repoIds.join(",")),mostRecent?query.set("rangeType","all"):query.set("range","".concat(range));const baseEndpoint="users/".concat(contributor,"/prs");return"".concat(baseEndpoint,"?").concat(query.toString())}const __WEBPACK_DEFAULT_EXPORT__=function(){var _data$data,_data$meta;let options=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{contributor:"",topic:"",limit:8,range:"30",mostRecent:!1};const{contributor,topic,repoIds,limit,range,mostRecent}=options,router=(0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)(),{selectedFilter}=router.query,endpointString=getContributorPRUrl(contributor,selectedFilter,topic,repoIds,limit,range,mostRecent),{data,error,mutate}=(0,swr__WEBPACK_IMPORTED_MODULE_0__.ZP)(contributor?endpointString:null,lib_utils_public_api_fetcher__WEBPACK_IMPORTED_MODULE_2__.N);return{data:null!==(_data$data=null==data?void 0:data.data)&&void 0!==_data$data?_data$data:[],meta:null!==(_data$meta=null==data?void 0:data.meta)&&void 0!==_data$meta?_data$meta:{itemCount:0,limit:0,page:0,hasNextPage:!1,hasPreviousPage:!1,pageCount:0},isLoading:!error&&!data,isError:!!error,mutate}}},"./lib/utils/date-utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{L0:()=>getFormattedDate,MK:()=>getRelativeDays,wu:()=>calcDistanceFromToday,yy:()=>calcDaysFromToday});var date_fns_formatDistanceToNowStrict__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/date-fns/esm/formatDistanceToNowStrict/index.js");const months=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],calcDaysFromToday=endDate=>{const timeFromNowArray=(0,date_fns_formatDistanceToNowStrict__WEBPACK_IMPORTED_MODULE_0__.Z)(endDate,{unit:"day"}).split(" ");return parseInt(timeFromNowArray[0])},getRelativeDays=days=>0===days?"-":days>=365?"".concat(Math.floor(days/365),"y"):days>30&&days<365?"".concat(Math.floor(days/30),"mo"):"".concat(days,"d"),calcDistanceFromToday=endDate=>{const daysFromNow=calcDaysFromToday(endDate);return"".concat(getRelativeDays(daysFromNow))},getFormattedDate=dateString=>{const date=new Date(dateString),month=months[date.getMonth()],day=date.getDate(),year=date.getFullYear();return"".concat(month," ").concat(day,", ").concat(year)}},"./lib/utils/get-filter-query.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=filter=>{const query=new URLSearchParams;return Array.isArray(filter)&&2===filter.length?query.set("repo",filter.join("/")):filter&&query.set("filter",Array.isArray(filter)?filter[0]:filter),"".concat(query)?"&".concat(query):""}},"./lib/utils/humanizeNumber.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=(num,type)=>{const number="number"!=typeof num?parseFloat(num):num,abs=Math.abs(number),sign=Math.sign(number),commaConverted="".concat(abs>999?(sign*abs/1e3).toFixed(3).replace(".",","):sign*abs),abbreviated=abs>999?"".concat((sign*abs/1e3).toFixed(1),"k"):"".concat(sign*abs);return"comma"===type?commaConverted:abbreviated}},"./lib/utils/public-api-fetcher.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{J:()=>expPublicApiFetcher,N:()=>publicApiFetcher});var _supabase__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./lib/utils/supabase.ts"),console=__webpack_require__("./node_modules/console-browserify/index.js");const publicApiFetcher=async apiUrl=>await apiFetcher("https://beta.api.opensauced.pizza/v2",apiUrl),expPublicApiFetcher=async apiUrl=>await apiFetcher("https://beta.api.opensauced.pizza/v2",apiUrl),apiFetcher=async(baseUrl,apiUrl)=>{var _sessionResponse$data;const sessionResponse=await _supabase__WEBPACK_IMPORTED_MODULE_0__.O.auth.getSession(),sessionToken=null==sessionResponse||null===(_sessionResponse$data=sessionResponse.data.session)||void 0===_sessionResponse$data?void 0:_sessionResponse$data.access_token,res=await fetch("".concat(baseUrl,"/").concat(apiUrl),{headers:{accept:"application/json",Authorization:"Bearer ".concat(sessionToken)}});if(!res.ok){const error=new Error("HttpError");throw error.message="".concat(res.status," ").concat(res.statusText),error.stack=JSON.stringify(await res.json()),console.error(error),error}return res.json()}},"./lib/utils/supabase.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{O:()=>supabase});var _supabase_auth_helpers_nextjs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@supabase/auth-helpers-nextjs/dist/index.js");const supabase=(0,_supabase_auth_helpers_nextjs__WEBPACK_IMPORTED_MODULE_0__.createPagesBrowserClient)()},"?c969":()=>{},"?fd9c":()=>{},"?0fee":()=>{},"./node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs":(__unused_webpack_module,exports)=>{"use strict";function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}exports._=exports._interop_require_wildcard=function _interop_require_wildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!=typeof obj&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}newObj.default=obj,cache&&cache.set(obj,newObj);return newObj}}}]);