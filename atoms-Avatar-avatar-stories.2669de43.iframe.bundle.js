"use strict";(self.webpackChunk_open_sauced_app=self.webpackChunk_open_sauced_app||[]).push([[1816],{"./components/atoms/Avatar/avatar.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CustomAvatar:()=>CustomAvatar,Default:()=>Default,HasBorder:()=>HasBorder,NoURL:()=>NoURL,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Default$parameters,_Default$parameters2,_HasBorder$parameters,_HasBorder$parameters2,_NoURL$parameters,_NoURL$parameters2,_CustomAvatar$paramet,_CustomAvatar$paramet2,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_avatar__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./components/atoms/Avatar/avatar.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const __WEBPACK_DEFAULT_EXPORT__={title:"Design System/Atoms/Avatar",argTypes:{size:{options:["sm","base","lg"],control:{type:"select"}},hasBorder:{options:[!0,!1],control:{type:"radio"}}}},AvatarTemplate=args=>__jsx(_avatar__WEBPACK_IMPORTED_MODULE_2__.Z,args);AvatarTemplate.displayName="AvatarTemplate";const Default=AvatarTemplate.bind({});Default.args={size:"base",hasBorder:!1,avatarURL:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80",initials:"BD",alt:"Hello"};const HasBorder=AvatarTemplate.bind({});HasBorder.args={size:"base",hasBorder:!0,avatarURL:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80",initials:"BD",alt:"Hello"};const NoURL=AvatarTemplate.bind({});NoURL.args={size:"base",hasBorder:!0,initials:"BD",alt:"Hello"};const CustomAvatar=AvatarTemplate.bind({});CustomAvatar.args={size:56,hasBorder:!0,avatarURL:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80",initials:"BD",alt:"Hello"},Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:"args => <Avatar {...args} />"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source)})}),HasBorder.parameters=_objectSpread(_objectSpread({},HasBorder.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_HasBorder$parameters=HasBorder.parameters)||void 0===_HasBorder$parameters?void 0:_HasBorder$parameters.docs),{},{source:_objectSpread({originalSource:"args => <Avatar {...args} />"},null===(_HasBorder$parameters2=HasBorder.parameters)||void 0===_HasBorder$parameters2||null===(_HasBorder$parameters2=_HasBorder$parameters2.docs)||void 0===_HasBorder$parameters2?void 0:_HasBorder$parameters2.source)})}),NoURL.parameters=_objectSpread(_objectSpread({},NoURL.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_NoURL$parameters=NoURL.parameters)||void 0===_NoURL$parameters?void 0:_NoURL$parameters.docs),{},{source:_objectSpread({originalSource:"args => <Avatar {...args} />"},null===(_NoURL$parameters2=NoURL.parameters)||void 0===_NoURL$parameters2||null===(_NoURL$parameters2=_NoURL$parameters2.docs)||void 0===_NoURL$parameters2?void 0:_NoURL$parameters2.source)})}),CustomAvatar.parameters=_objectSpread(_objectSpread({},CustomAvatar.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_CustomAvatar$paramet=CustomAvatar.parameters)||void 0===_CustomAvatar$paramet?void 0:_CustomAvatar$paramet.docs),{},{source:_objectSpread({originalSource:"args => <Avatar {...args} />"},null===(_CustomAvatar$paramet2=CustomAvatar.parameters)||void 0===_CustomAvatar$paramet2||null===(_CustomAvatar$paramet2=_CustomAvatar$paramet2.docs)||void 0===_CustomAvatar$paramet2?void 0:_CustomAvatar$paramet2.source)})});const __namedExportsOrder=["Default","HasBorder","NoURL","CustomAvatar"]},"./components/atoms/Avatar/avatar.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Avatar_avatar});var esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),next_image=__webpack_require__("./node_modules/@storybook/nextjs/dist/images/next-image.mjs");const cachedImages=(imageUrl,cloudName)=>cloudName?"https://res.cloudinary.com/".concat(cloudName,"/image/fetch/").concat(imageUrl):imageUrl;var console=__webpack_require__("./node_modules/console-browserify/index.js"),__jsx=react.createElement;const Avatar_avatar=props=>{let imageSource;try{"string"==typeof props.avatarURL&&props.avatarURL.length>0&&new URL(props.avatarURL),imageSource=props.avatarURL&&props.isCached?cachedImages(props.avatarURL,"dgxgziswe"):props.avatarURL}catch(error){console.error(error)}switch(typeof props.size){case"string":return __jsx(DefaultAvatar,(0,esm_extends.Z)({},props,{avatarURL:imageSource}));case"number":return __jsx(CustomAvatar,(0,esm_extends.Z)({},props,{avatarURL:imageSource}))}},CustomAvatar=_ref=>{let{className,avatarURL,initials,alt,size,hasBorder,isCircle,initialsClassName}=_ref;return __jsx("div",{className:"inline-flex ".concat(avatarURL?"":"bg-orange-500"," justify-center relative items-center w-max h-max overflow-hidden\n\n        ").concat(isCircle?"rounded-full ":"rounded-lg ","\n        ").concat(hasBorder?"ring-2 ring-slate-200 ":"","\n        ").concat(null!=className?className:" ","\n      ")},avatarURL?__jsx(next_image.Z,{className:"".concat(className||""," object-cover"),alt:alt||"Avatar",width:size,height:size,src:avatarURL}):__jsx("div",{className:"".concat(initialsClassName," flex items-center justify-center font-bold leading-none text-slate-50 mb-0.25 "),style:{width:size,height:size}},initials))};CustomAvatar.displayName="CustomAvatar";const DefaultAvatar=_ref2=>{let{className,avatarURL,initials,alt,size,hasBorder,isCircle}=_ref2;return __jsx("div",{className:"inline-flex ".concat(avatarURL?"":"bg-orange-500"," justify-center relative items-center overflow-hidden\n        ").concat(isCircle?"rounded-full ":"rounded-lg ","\n        ").concat(hasBorder?"ring-2 ring-slate-200 ":"","\n        ").concat("sm"===size?"w-6 h-6 ":"base"===size?"w-8 h-8 ":"lg"===size?"w-12 h-12 ":"w-8 h-8 ","\n        ").concat(null!=className?className:" ","\n      ")},avatarURL?__jsx(next_image.Z,{className:"".concat(className||""," object-cover"),alt:alt||"Avatar",fill:!0,src:avatarURL}):__jsx("div",{className:"flex items-center justify-center font-bold leading-none text-slate-50 mb-0.25 ".concat("sm"===size?"text-xs":"base"===size?"text-sm":"lg"===size?"text-lg":"text-sm"),style:{width:size,height:size}},initials))};DefaultAvatar.displayName="DefaultAvatar";try{avatar.displayName="avatar",avatar.__docgenInfo={description:"",displayName:"avatar",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},avatarURL:{defaultValue:null,description:"",name:"avatarURL",required:!1,type:{name:"string | StaticImageData"}},initials:{defaultValue:null,description:"",name:"initials",required:!1,type:{name:"string"}},alt:{defaultValue:null,description:"",name:"alt",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:'number | "base" | "sm" | "lg"'}},hasBorder:{defaultValue:null,description:"",name:"hasBorder",required:!1,type:{name:"boolean"}},isCircle:{defaultValue:null,description:"",name:"isCircle",required:!1,type:{name:"boolean"}},isCached:{defaultValue:null,description:"",name:"isCached",required:!1,type:{name:"boolean"}},initialsClassName:{defaultValue:null,description:"",name:"initialsClassName",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/atoms/Avatar/avatar.tsx#avatar"]={docgenInfo:avatar.__docgenInfo,name:"avatar",path:"components/atoms/Avatar/avatar.tsx#avatar"})}catch(__react_docgen_typescript_loader_error){}}}]);