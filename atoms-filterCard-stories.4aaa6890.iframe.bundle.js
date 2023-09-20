(self.webpackChunk_open_sauced_insights=self.webpackChunk_open_sauced_insights||[]).push([[7609],{"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}__webpack_require__.d(__webpack_exports__,{Z:function(){return _objectWithoutProperties}})},"./components/atoms/Typography/text.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";var _home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),clsx__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),_wrapper__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./components/atoms/Typography/wrapper.tsx"),_excluded=["children","title","className","type","disabled","mark","code","keyboard","underline","strikethrough","strong","small"],__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,Text=function Text(_ref){var children=_ref.children,title=_ref.title,className=_ref.className,_ref$type=_ref.type,type=void 0===_ref$type?"default":_ref$type,disabled=_ref.disabled,mark=_ref.mark,code=_ref.code,keyboard=_ref.keyboard,underline=_ref.underline,strikethrough=_ref.strikethrough,strong=_ref.strong,small=_ref.small,props=(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(_ref,_excluded),TextTag=mark?"mark":code?"code":keyboard?"kbd":strong?"strong":small?"small":"span";return __jsx(_wrapper__WEBPACK_IMPORTED_MODULE_1__.Z,(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)({className:(0,clsx__WEBPACK_IMPORTED_MODULE_4__.Z)(className,disabled&&"cursor-not-allowed select-none text-light-slate-11/50",keyboard&&"bg-light-slate-4/50 rounded px-2 border border-b-2 border-light-slate-8/50",underline&&"underline",strikethrough&&"line-through",function getTypeClass(type){return"secondary"===type?"!text-light-slate-5":"success"===type?"!text-dark-grass-10":"warning"===type?"!text-yellow-500":"danger"===type?"!text-dark-red-10":""}(type))},props),__jsx(TextTag,{title:title},children))};Text.displayName="Text",Text.__docgenInfo={description:"",methods:[],displayName:"Text",props:{type:{defaultValue:{value:'"default"',computed:!1},required:!1}}},__webpack_exports__.Z=Text;try{text.displayName="text",text.__docgenInfo={description:"",displayName:"text",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},type:{defaultValue:{value:"default"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"secondary"'},{value:'"success"'},{value:'"warning"'},{value:'"danger"'}]}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},mark:{defaultValue:null,description:"",name:"mark",required:!1,type:{name:"boolean"}},code:{defaultValue:null,description:"",name:"code",required:!1,type:{name:"boolean"}},keyboard:{defaultValue:null,description:"",name:"keyboard",required:!1,type:{name:"boolean"}},underline:{defaultValue:null,description:"",name:"underline",required:!1,type:{name:"boolean"}},strikethrough:{defaultValue:null,description:"",name:"strikethrough",required:!1,type:{name:"boolean"}},strong:{defaultValue:null,description:"",name:"strong",required:!1,type:{name:"boolean"}},small:{defaultValue:null,description:"",name:"small",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/atoms/Typography/text.tsx#text"]={docgenInfo:text.__docgenInfo,name:"text",path:"components/atoms/Typography/text.tsx#text"})}catch(__react_docgen_typescript_loader_error){}},"./components/atoms/Typography/wrapper.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";var _home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),clsx__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),_excluded=["children","className","size"],__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,TypographyWrapper=function TypographyWrapper(_ref){var children=_ref.children,className=_ref.className,_ref$size=_ref.size,size=void 0===_ref$size?"sm":_ref$size,props=(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_ref,_excluded);return __jsx("span",(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__.Z)({className:(0,clsx__WEBPACK_IMPORTED_MODULE_3__.Z)("prose","prose-".concat(size),className)},props),children)};TypographyWrapper.displayName="TypographyWrapper",TypographyWrapper.__docgenInfo={description:"",methods:[],displayName:"TypographyWrapper",props:{size:{defaultValue:{value:'"sm"',computed:!1},required:!1}}},__webpack_exports__.Z=TypographyWrapper;try{wrapper.displayName="wrapper",wrapper.__docgenInfo={description:"",displayName:"wrapper",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:{value:"sm"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"base"'},{value:'"sm"'},{value:'"lg"'},{value:'"xl"'},{value:'"2xl"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/atoms/Typography/wrapper.tsx#wrapper"]={docgenInfo:wrapper.__docgenInfo,name:"wrapper",path:"components/atoms/Typography/wrapper.tsx#wrapper"})}catch(__react_docgen_typescript_loader_error){}},"./stories/atoms/filterCard.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default},Removable:function(){return Removable},default:function(){return filterCard_stories}});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/react/index.js"),next_image=__webpack_require__("./node_modules/@storybook/nextjs/dist/images/next-image.mjs"),Typography_text=__webpack_require__("./components/atoms/Typography/text.tsx"),hash=__webpack_require__("./img/icons/hash.svg"),org=__webpack_require__("./img/icons/org.svg"),person=__webpack_require__("./img/icons/person.svg"),repo=__webpack_require__("./img/icons/repo.svg"),x_circle=__webpack_require__("./img/x-circle.svg"),__jsx=react.createElement,icons={topic:{src:hash.Z.src,alt:"Topic"},org:{src:org.Z.src,alt:"Organization"},contributor:{src:person.Z.src,alt:"Contributor"},repo:{src:repo.Z.src,alt:"Repository"}},FilterCard=function FilterCard(_ref){var filterName=_ref.filterName,bgColor=_ref.bgColor,icon=_ref.icon,isRemovable=_ref.isRemovable;return __jsx("div",{className:"inline-block py-1 px-2 border border-slate-300 outline-none hover:bg-slate-50 focus:ring-2 ".concat(bgColor&&"bg-".concat(bgColor)," ").concat(isRemovable?"focus:ring-orange-500":"bg-slate-100 focus:ring-slate-300"," rounded-lg")},__jsx("div",{className:"flex items-center gap-1"},__jsx(next_image.Z,{width:14,height:14,alt:"topic"===icon?icons.topic.alt:"org"===icon?icons.org.alt:"contributor"===icon?icons.contributor.alt:"repo"===icon?icons.repo.alt:"Icon",src:"topic"===icon?icons.topic.src:"org"===icon?icons.org.src:"contributor"===icon?icons.contributor.src:"repo"===icon?icons.repo.src:icons.topic.src}),__jsx(Typography_text.Z,{className:"!text-sm font-semibold tracking-tight !text-slate-900"},filterName),!!isRemovable&&__jsx(next_image.Z,{alt:"Cancel Icon",src:x_circle.Z})))};FilterCard.displayName="FilterCard",FilterCard.__docgenInfo={description:"",methods:[],displayName:"FilterCard"};var _Default$parameters,_Default$parameters2,_Removable$parameters,_Removable$parameters2,filter_card=FilterCard;try{filtercard.displayName="filtercard",filtercard.__docgenInfo={description:"",displayName:"filtercard",props:{filterName:{defaultValue:null,description:"",name:"filterName",required:!0,type:{name:"string"}},bgColor:{defaultValue:null,description:"",name:"bgColor",required:!1,type:{name:"string"}},isRemovable:{defaultValue:null,description:"",name:"isRemovable",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"enum",value:[{value:'"contributor"'},{value:'"topic"'},{value:'"repo"'},{value:'"org"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/atoms/FilterCard/filter-card.tsx#filtercard"]={docgenInfo:filtercard.__docgenInfo,name:"filtercard",path:"components/atoms/FilterCard/filter-card.tsx#filtercard"})}catch(__react_docgen_typescript_loader_error){}var filterCard_stories_jsx=react.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}var filterCard_stories={title:"Design System/Atoms/FilterCard",component:"FilterCard",argTypes:{isRemovable:{options:[!0,!1],control:{type:"radio"}},icon:{options:["repo","topic","org","contributor"],control:{type:"select"}}}},FilterCardTemplate=function FilterCardTemplate(args){return filterCard_stories_jsx(filter_card,args)};FilterCardTemplate.displayName="FilterCardTemplate";var Default=FilterCardTemplate.bind({});Default.args={filterName:"hacktoberfest",isRemovable:!1};var Removable=FilterCardTemplate.bind({});Removable.args={filterName:"hacktoberfest",isRemovable:!0},Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:"args => <FilterCard {...args} />"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source)})}),Removable.parameters=_objectSpread(_objectSpread({},Removable.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Removable$parameters=Removable.parameters)||void 0===_Removable$parameters?void 0:_Removable$parameters.docs),{},{source:_objectSpread({originalSource:"args => <FilterCard {...args} />"},null===(_Removable$parameters2=Removable.parameters)||void 0===_Removable$parameters2||null===(_Removable$parameters2=_Removable$parameters2.docs)||void 0===_Removable$parameters2?void 0:_Removable$parameters2.source)})})},"./img/icons/hash.svg":function(__unused_webpack_module,__webpack_exports__){"use strict";__webpack_exports__.Z={src:"static/media/hash.f6a5a7ff.svg",height:16,width:16,blurDataURL:"static/media/hash.f6a5a7ff.svg"}},"./img/icons/org.svg":function(__unused_webpack_module,__webpack_exports__){"use strict";__webpack_exports__.Z={src:"static/media/org.adecf385.svg",height:16,width:16,blurDataURL:"static/media/org.adecf385.svg"}},"./img/icons/person.svg":function(__unused_webpack_module,__webpack_exports__){"use strict";__webpack_exports__.Z={src:"static/media/person.c4abb5b3.svg",height:16,width:16,blurDataURL:"static/media/person.c4abb5b3.svg"}},"./img/icons/repo.svg":function(__unused_webpack_module,__webpack_exports__){"use strict";__webpack_exports__.Z={src:"static/media/repo.0f56bbae.svg",height:16,width:16,blurDataURL:"static/media/repo.0f56bbae.svg"}},"./img/x-circle.svg":function(__unused_webpack_module,__webpack_exports__){"use strict";__webpack_exports__.Z={src:"static/media/x-circle.fc817a41.svg",height:16,width:16,blurDataURL:"static/media/x-circle.fc817a41.svg"}},"./node_modules/@storybook/nextjs/dist sync recursive":function(module){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/nextjs/dist sync recursive",module.exports=webpackEmptyContext},"./node_modules/clsx/dist/clsx.m.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}__webpack_require__.d(__webpack_exports__,{W:function(){return clsx}}),__webpack_exports__.Z=clsx}}]);