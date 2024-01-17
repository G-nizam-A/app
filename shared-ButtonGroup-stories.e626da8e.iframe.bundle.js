"use strict";(self.webpackChunk_open_sauced_insights=self.webpackChunk_open_sauced_insights||[]).push([[1500],{"./node_modules/@babel/runtime/helpers/esm/defineProperty.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}__webpack_require__.d(__webpack_exports__,{Z:()=>_defineProperty})},"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}__webpack_require__.d(__webpack_exports__,{Z:()=>_objectWithoutProperties})},"./components/shared/ButtonGroup.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ThreeButtons:()=>ThreeButtons,TwoButtons:()=>TwoButtons,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ButtonGroup_stories});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");const _excluded=["variant"];var __jsx=react.createElement;const variantStyles={primary:"bg-light-slate-5",secondary:"bg-white"},ButtonGroupItem=_ref=>{let{variant="secondary"}=_ref,restOfProps=(0,objectWithoutProperties.Z)(_ref,_excluded);return __jsx("button",(0,esm_extends.Z)({className:"p-1 px-2 border first:rounded-l first:border-r first:border-r-transparent last:rounded-r last:border-l-transparent ".concat(variantStyles[variant])},restOfProps))};ButtonGroupItem.displayName="ButtonGroupItem";const ButtonGroup=_ref2=>{let{children,label}=_ref2;if(react.Children.toArray(children).some((child=>!(0,react.isValidElement)(child)||(0,react.isValidElement)(child)&&child.type!==ButtonGroupItem)))throw new Error("ButtonGroup children must be ButtonGroupItems");return __jsx("div",{role:"group","aria-label":label,className:"flex items-center w-max"},children)};ButtonGroup.displayName="ButtonGroup";try{ButtonGroupItem.displayName="ButtonGroupItem",ButtonGroupItem.__docgenInfo={description:"",displayName:"ButtonGroupItem",props:{variant:{defaultValue:{value:"secondary"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"secondary"'},{value:'"primary"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/shared/ButtonGroup.tsx#ButtonGroupItem"]={docgenInfo:ButtonGroupItem.__docgenInfo,name:"ButtonGroupItem",path:"components/shared/ButtonGroup.tsx#ButtonGroupItem"})}catch(__react_docgen_typescript_loader_error){}try{ButtonGroup.displayName="ButtonGroup",ButtonGroup.__docgenInfo={description:"",displayName:"ButtonGroup",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/shared/ButtonGroup.tsx#ButtonGroup"]={docgenInfo:ButtonGroup.__docgenInfo,name:"ButtonGroup",path:"components/shared/ButtonGroup.tsx#ButtonGroup"})}catch(__react_docgen_typescript_loader_error){}var _ThreeButtons$paramet,_ThreeButtons$paramet2,_TwoButtons$parameter,_TwoButtons$parameter2,ButtonGroup_stories_jsx=react.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const ButtonGroup_stories={title:"Components/Shared/ButtonGroup",component:ButtonGroup,args:{label:"This is a button group",children:[ButtonGroup_stories_jsx(ButtonGroupItem,{key:"1",variant:"primary"},"Organizations"),ButtonGroup_stories_jsx(ButtonGroupItem,{key:"2"},"Repositories"),ButtonGroup_stories_jsx(ButtonGroupItem,{key:"3"},"Contributors")]}},ThreeButtons={},TwoButtons={args:{label:"This is a button group",children:[ButtonGroup_stories_jsx(ButtonGroupItem,{key:"1",variant:"primary"},"Organizations"),ButtonGroup_stories_jsx(ButtonGroupItem,{key:"3"},"Contributors")]}};ThreeButtons.parameters=_objectSpread(_objectSpread({},ThreeButtons.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_ThreeButtons$paramet=ThreeButtons.parameters)||void 0===_ThreeButtons$paramet?void 0:_ThreeButtons$paramet.docs),{},{source:_objectSpread({originalSource:"{}"},null===(_ThreeButtons$paramet2=ThreeButtons.parameters)||void 0===_ThreeButtons$paramet2||null===(_ThreeButtons$paramet2=_ThreeButtons$paramet2.docs)||void 0===_ThreeButtons$paramet2?void 0:_ThreeButtons$paramet2.source)})}),TwoButtons.parameters=_objectSpread(_objectSpread({},TwoButtons.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_TwoButtons$parameter=TwoButtons.parameters)||void 0===_TwoButtons$parameter?void 0:_TwoButtons$parameter.docs),{},{source:_objectSpread({originalSource:'{\n  args: {\n    label: "This is a button group",\n    children: [<ButtonGroupItem key="1" variant="primary">\n        Organizations\n      </ButtonGroupItem>, <ButtonGroupItem key="3">Contributors</ButtonGroupItem>]\n  }\n}'},null===(_TwoButtons$parameter2=TwoButtons.parameters)||void 0===_TwoButtons$parameter2||null===(_TwoButtons$parameter2=_TwoButtons$parameter2.docs)||void 0===_TwoButtons$parameter2?void 0:_TwoButtons$parameter2.source)})});const __namedExportsOrder=["ThreeButtons","TwoButtons"]}}]);