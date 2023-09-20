"use strict";(self.webpackChunk_open_sauced_insights=self.webpackChunk_open_sauced_insights||[]).push([[547],{"./node_modules/@babel/runtime/helpers/esm/defineProperty.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}__webpack_require__.d(__webpack_exports__,{Z:function(){return _defineProperty}})},"./stories/molecules/featured-highlights-panel.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default},default:function(){return featured_highlights_panel_stories}});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/react/index.js"),next_link=__webpack_require__("./node_modules/next/link.js"),link_default=__webpack_require__.n(next_link),__jsx=react.createElement,FeaturedHighlightsPanel=function FeaturedHighlightsPanel(_ref){var highlights=_ref.highlights,_useState=(0,react.useState)(""),host=_useState[0],setHost=_useState[1];return(0,react.useEffect)((function(){void 0!==window&&setHost(window.location.origin)}),[]),__jsx("div",{className:"w-full p-6 pt-5 space-y-4 border rounded-lg bg-light-slate-1"},__jsx("h2",{className:"pb-2 text-lg border-b"},"Featured Highlights"),__jsx("div",{className:"flex flex-col gap-4 text-sm"},highlights.map((function(_ref2){var id=_ref2.id,title=_ref2.title;return __jsx(link_default(),{className:"font-normal transition hover:text-light-orange-10",key:id,href:"".concat(host,"/feed/").concat(id)},title)}))))};FeaturedHighlightsPanel.displayName="FeaturedHighlightsPanel",FeaturedHighlightsPanel.__docgenInfo={description:"",methods:[],displayName:"FeaturedHighlightsPanel",props:{highlights:{required:!0,tsType:{name:"Array",elements:[{name:"DbHighlight"}],raw:"DbHighlight[]"},description:""}}};var _Default$parameters,_Default$parameters2,featured_highlights_panel=FeaturedHighlightsPanel;try{featuredhighlightspanel.displayName="featuredhighlightspanel",featuredhighlightspanel.__docgenInfo={description:"",displayName:"featuredhighlightspanel",props:{highlights:{defaultValue:null,description:"",name:"highlights",required:!0,type:{name:"DbHighlight[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/molecules/FeaturedHighlightsPanel/featured-highlights-panel.tsx#featuredhighlightspanel"]={docgenInfo:featuredhighlightspanel.__docgenInfo,name:"featuredhighlightspanel",path:"components/molecules/FeaturedHighlightsPanel/featured-highlights-panel.tsx#featuredhighlightspanel"})}catch(__react_docgen_typescript_loader_error){}var featured_highlights_panel_stories_jsx=react.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}var featured_highlights_panel_stories={title:"Design System/Molecules/FeaturedHighlightsPanel"},FeaturedHighlightsPanelTemplate=function FeaturedHighlightsPanelTemplate(args){return featured_highlights_panel_stories_jsx(featured_highlights_panel,args)};FeaturedHighlightsPanelTemplate.displayName="FeaturedHighlightsPanelTemplate";var Default=FeaturedHighlightsPanelTemplate.bind({});Default.args={highlights:[{id:"1",name:"A Pizza Surprise: Unleashing the Power of OAuth! 🍕🔥",title:"OAuth, never missing a chance to surprise! 🍕",url:"supabase/supabase",type:"pull_request",highlight:"supabase",user_id:"1",created_at:"2021-08-24T09:00:00.000Z",updated_at:"2021-08-24T09:00:00.000Z",login:"supabase",shipped_at:"2021-08-24T09:00:00.000Z",pinned:!1,deleted_at:"2021-08-24T09:00:00.000Z",tagged_repos:[]},{id:"2",name:"OAuth, never missing a chance to surprise! 🍕",title:"OAuth, never missing a chance to surprise! 🍕",url:"supabase/supabase",type:"pull_request",highlight:"supabase",user_id:"1",created_at:"2021-08-24T09:00:00.000Z",updated_at:"2021-08-24T09:00:00.000Z",login:"supabase",shipped_at:"2021-08-24T09:00:00.000Z",pinned:!1,deleted_at:"2021-08-24T09:00:00.000Z",tagged_repos:[]}]},Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:"args => <FeaturedHighlightsPanel {...args} />"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source)})})},"./node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs":function(__unused_webpack_module,exports){function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}exports._=exports._interop_require_wildcard=function _interop_require_wildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!=typeof obj&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}newObj.default=obj,cache&&cache.set(obj,newObj);return newObj}}}]);