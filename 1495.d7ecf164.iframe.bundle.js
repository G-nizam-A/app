/*! For license information please see 1495.d7ecf164.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_open_sauced_app=self.webpackChunk_open_sauced_app||[]).push([[1495],{"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}__webpack_require__.d(__webpack_exports__,{Z:()=>_objectWithoutProperties})},"./components/atoms/Avatar/avatar.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>Avatar_avatar});var esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),next_image=__webpack_require__("./node_modules/@storybook/nextjs/dist/images/next-image.mjs");const cachedImages=(imageUrl,cloudName)=>cloudName?"https://res.cloudinary.com/".concat(cloudName,"/image/fetch/").concat(imageUrl):imageUrl;var console=__webpack_require__("./node_modules/console-browserify/index.js"),__jsx=react.createElement;const Avatar_avatar=props=>{let imageSource;try{"string"==typeof props.avatarURL&&props.avatarURL.length>0&&new URL(props.avatarURL),imageSource=props.avatarURL&&props.isCached?cachedImages(props.avatarURL,"dgxgziswe"):props.avatarURL}catch(error){console.error(error)}switch(typeof props.size){case"string":return __jsx(DefaultAvatar,(0,esm_extends.Z)({},props,{avatarURL:imageSource}));case"number":return __jsx(CustomAvatar,(0,esm_extends.Z)({},props,{avatarURL:imageSource}))}},CustomAvatar=_ref=>{let{className,avatarURL,initials,alt,size,hasBorder,isCircle,initialsClassName}=_ref;return __jsx("div",{className:"inline-flex ".concat(avatarURL?"":"bg-orange-500"," justify-center relative items-center w-max h-max overflow-hidden\n\n        ").concat(isCircle?"rounded-full ":"rounded-lg ","\n        ").concat(hasBorder?"ring-2 ring-slate-200 ":"","\n        ").concat(null!=className?className:" ","\n      ")},avatarURL?__jsx(next_image.Z,{className:"".concat(className||""," object-cover"),alt:alt||"Avatar",width:size,height:size,src:avatarURL}):__jsx("div",{className:"".concat(initialsClassName," flex items-center justify-center font-bold leading-none text-slate-50 mb-0.25 "),style:{width:size,height:size}},initials))};CustomAvatar.displayName="CustomAvatar";const DefaultAvatar=_ref2=>{let{className,avatarURL,initials,alt,size,hasBorder,isCircle}=_ref2;return __jsx("div",{className:"inline-flex ".concat(avatarURL?"":"bg-orange-500"," justify-center relative items-center overflow-hidden\n        ").concat(isCircle?"rounded-full ":"rounded-lg ","\n        ").concat(hasBorder?"ring-2 ring-slate-200 ":"","\n        ").concat("sm"===size?"w-6 h-6 ":"base"===size?"w-8 h-8 ":"lg"===size?"w-12 h-12 ":"w-8 h-8 ","\n        ").concat(null!=className?className:" ","\n      ")},avatarURL?__jsx(next_image.Z,{className:"".concat(className||""," object-cover"),alt:alt||"Avatar",fill:!0,src:avatarURL}):__jsx("div",{className:"flex items-center justify-center font-bold leading-none text-slate-50 mb-0.25 ".concat("sm"===size?"text-xs":"base"===size?"text-sm":"lg"===size?"text-lg":"text-sm"),style:{width:size,height:size}},initials))};DefaultAvatar.displayName="DefaultAvatar";try{avatar.displayName="avatar",avatar.__docgenInfo={description:"",displayName:"avatar",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},avatarURL:{defaultValue:null,description:"",name:"avatarURL",required:!1,type:{name:"string | StaticImageData"}},initials:{defaultValue:null,description:"",name:"initials",required:!1,type:{name:"string"}},alt:{defaultValue:null,description:"",name:"alt",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:'number | "base" | "sm" | "lg"'}},hasBorder:{defaultValue:null,description:"",name:"hasBorder",required:!1,type:{name:"boolean"}},isCircle:{defaultValue:null,description:"",name:"isCircle",required:!1,type:{name:"boolean"}},isCached:{defaultValue:null,description:"",name:"isCached",required:!1,type:{name:"boolean"}},initialsClassName:{defaultValue:null,description:"",name:"initialsClassName",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/atoms/Avatar/avatar.tsx#avatar"]={docgenInfo:avatar.__docgenInfo,name:"avatar",path:"components/atoms/Avatar/avatar.tsx#avatar"})}catch(__react_docgen_typescript_loader_error){}},"./components/atoms/Button/button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),clsx__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/clsx/dist/clsx.m.js");const _excluded=["className","children","loading","disabled","variant","showLoadingText","onClick","href"];var __jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const Button=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((_ref,ref)=>{let{className,children,loading,disabled,variant,showLoadingText=!0,onClick,href}=_ref,props=(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_ref,_excluded);const styles={primary:"bg-light-orange-9 text-light-orange-2 border-light-orange-9 hover:bg-light-orange-10 ".concat(disabled?"bg-light-orange-7 hover:bg-light-orange-7 pointer-events-none":""),default:"bg-white border-light-slate-8 text-light-slate-11 hover:bg-light-slate-2 ".concat(disabled?"bg-light-slate-4 text-light-slate-9 pointer-events-none":""),dark:"bg-dark-slate-6 border-dark-slate-8 text-light-orange-2 hover:bg-dark-slate-8 ".concat(disabled?"bg-dark-slate-4 text-dark-slate-9 pointer-events-none":""),outline:"bg-orange-50 border-orange-500 text-orange-600 hover:bg-orange-100 ".concat(disabled?"bg-light-orange-3 pointer-events-none text-light-orange-7 border-light-orange-5":""),link:"text-orange-600 hover:bg-orange-100 border-none ".concat(disabled?"text-orange-400 pointer-events-none":""),destructive:"border-dark-red-8 bg-dark-red-8 text-white hover:border-dark-red-7 hover:bg-dark-red-7",text:""},rootClass=(0,clsx__WEBPACK_IMPORTED_MODULE_2__.Z)(styles[variant],disabled&&"cursor-not-allowed",disabled&&"destructive"!==variant&&"bg-light-orange-7 hover:bg-light-orange-7","items-center inline-flex text-sm font-semibold tracking-tight border py-2 px-4 rounded-md focus-visible:border-orange-500 focus:outline-none focus-visible:ring focus-visible:ring-orange-200 whitespace-nowrap",className),content=loading?__jsx("div",null,__jsx("svg",{"aria-hidden":"true",role:"status",className:(0,clsx__WEBPACK_IMPORTED_MODULE_2__.Z)("inline w-4 h-4 text-white animate-spin",showLoadingText?"mr-2":""),viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg"},__jsx("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"#E5E7EB"}),__jsx("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentColor"})),showLoadingText&&__jsx("span",{className:"text-white"},"Loading...")):children;return href?__jsx("a",(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)({className:rootClass,href,ref},props),content):__jsx("button",(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)({className:rootClass,ref,onClick:disabled?void 0:onClick},props),content)}));Button.displayName="Button";const __WEBPACK_DEFAULT_EXPORT__=Button;try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"dark"'},{value:'"link"'},{value:'"text"'},{value:'"default"'},{value:'"primary"'},{value:'"outline"'},{value:'"destructive"'}]}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}},href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string"}},rel:{defaultValue:null,description:"",name:"rel",required:!1,type:{name:"string"}},target:{defaultValue:null,description:"",name:"target",required:!1,type:{name:"string"}},showLoadingText:{defaultValue:{value:"true"},description:"",name:"showLoadingText",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/atoms/Button/button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"components/atoms/Button/button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./components/atoms/TopContributorCard/top-contributor-card.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),next_link__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/link.js"),next_link__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__),next_router__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/next/router.js"),lib_utils_github__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./lib/utils/github.ts"),lib_hooks_useFollowUser__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./lib/hooks/useFollowUser.ts"),lib_hooks_useSupabaseAuth__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./lib/hooks/useSupabaseAuth.ts"),_Avatar_avatar__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./components/atoms/Avatar/avatar.tsx"),_Button_button__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./components/atoms/Button/button.tsx"),console=__webpack_require__("./node_modules/console-browserify/index.js"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const TopContributorCard=_ref=>{let{login,refreshLoggedInUser}=_ref;const currentPath=(0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)().asPath,{isError:notFollowing,follow,unFollow}=(0,lib_hooks_useFollowUser__WEBPACK_IMPORTED_MODULE_4__.Z)(login),{0:host,1:setHost}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),{sessionToken,signIn}=(0,lib_hooks_useSupabaseAuth__WEBPACK_IMPORTED_MODULE_5__.Z)(),handleFollowContributor=async()=>{try{if(notFollowing)return await follow(),void refreshLoggedInUser();await unFollow(),refreshLoggedInUser()}catch(error){console.log(error)}};return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{"undefined"!=typeof window&&setHost(window.location.origin)}),[]),__jsx("div",{className:"flex items-center justify-between w-full gap-4 bg-light-slate-1"},__jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default(),{className:"overflow-hidden",href:"/user/".concat(login)},__jsx("div",{className:"flex items-center gap-2"},__jsx(_Avatar_avatar__WEBPACK_IMPORTED_MODULE_6__.Z,{className:"flex-none",isCircle:!0,size:35,avatarURL:(0,lib_utils_github__WEBPACK_IMPORTED_MODULE_3__.cc)(login)}),__jsx("p",{title:login,className:"text-sm font-semibold truncate text-light-slate-12"},login))),sessionToken&&!notFollowing?__jsx(_Button_button__WEBPACK_IMPORTED_MODULE_7__.Z,{onClick:()=>sessionToken?handleFollowContributor():signIn({provider:"github",options:{redirectTo:"".concat(host).concat(currentPath)}}),className:"!px-2 !py-1 [&>span:nth-child(1)]:hover:hidden [&>span:nth-child(1)]:focus-visible:hidden [&>span:nth-child(2)]:hover:inline [&>span:nth-child(2)]:focus-visible:inline",variant:"primary"},__jsx("span",null,"following"),__jsx("span",{className:"hidden"},"unfollow")):__jsx(_Button_button__WEBPACK_IMPORTED_MODULE_7__.Z,{onClick:()=>sessionToken?handleFollowContributor():signIn({provider:"github",options:{redirectTo:"".concat(host).concat(currentPath)}}),className:"!px-2 !py-1 border-light-orange-7 text-light-orange-10",variant:"text"},"follow"))};TopContributorCard.displayName="TopContributorCard";const __WEBPACK_DEFAULT_EXPORT__=TopContributorCard;try{topcontributorcard.displayName="topcontributorcard",topcontributorcard.__docgenInfo={description:"",displayName:"topcontributorcard",props:{login:{defaultValue:null,description:"",name:"login",required:!0,type:{name:"string"}},refreshLoggedInUser:{defaultValue:null,description:"",name:"refreshLoggedInUser",required:!0,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/atoms/TopContributorCard/top-contributor-card.tsx#topcontributorcard"]={docgenInfo:topcontributorcard.__docgenInfo,name:"topcontributorcard",path:"components/atoms/TopContributorCard/top-contributor-card.tsx#topcontributorcard"})}catch(__react_docgen_typescript_loader_error){}},"./lib/hooks/useFollowUser.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var swr__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/swr/core/dist/index.mjs"),lib_utils_public_api_fetcher__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./lib/utils/public-api-fetcher.ts"),_useSupabaseAuth__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./lib/hooks/useSupabaseAuth.ts"),console=__webpack_require__("./node_modules/console-browserify/index.js");const __WEBPACK_DEFAULT_EXPORT__=username=>{const{sessionToken,user}=(0,_useSupabaseAuth__WEBPACK_IMPORTED_MODULE_2__.Z)(),{mutate:mutateGlobal}=(0,swr__WEBPACK_IMPORTED_MODULE_0__.kY)(),{data,error,mutate}=(0,swr__WEBPACK_IMPORTED_MODULE_0__.ZP)(username?"users/".concat(username,"/follow"):null,lib_utils_public_api_fetcher__WEBPACK_IMPORTED_MODULE_1__.N);return{data:data||void 0,isLoading:!error&&!data,isError:!!error,mutate,follow:async()=>{const req=await fetch("".concat("https://beta.api.opensauced.pizza/v2","/users/").concat(username,"/follow"),{method:"PUT",headers:{Authorization:"Bearer ".concat(sessionToken)}}).catch((err=>console.log(err)));var _user$user_metadata;req&&req.ok&&(mutate(),mutateGlobal("user/".concat(null==user||null===(_user$user_metadata=user.user_metadata)||void 0===_user$user_metadata?void 0:_user$user_metadata.username)))},unFollow:async()=>{const req=await fetch("".concat("https://beta.api.opensauced.pizza/v2","/users/").concat(username,"/follow"),{method:"DELETE",headers:{Authorization:"Bearer ".concat(sessionToken)}}).catch((err=>console.log(err)));var _user$user_metadata2;req&&req.ok&&(mutate(),mutateGlobal("user/".concat(null==user||null===(_user$user_metadata2=user.user_metadata)||void 0===_user$user_metadata2?void 0:_user$user_metadata2.username)))}}}},"./lib/hooks/useSupabaseAuth.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_store__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./lib/store/index.ts"),_utils_supabase__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./lib/utils/supabase.ts"),process=__webpack_require__("./node_modules/process/browser.js");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const __WEBPACK_DEFAULT_EXPORT__=function(){let loadSession=arguments.length>0&&void 0!==arguments[0]&&arguments[0];const store=(0,_store__WEBPACK_IMPORTED_MODULE_2__.Z)(),user=(0,_store__WEBPACK_IMPORTED_MODULE_2__.Z)((state=>state.user)),sessionToken=(0,_store__WEBPACK_IMPORTED_MODULE_2__.Z)((state=>state.sessionToken)),providerToken=(0,_store__WEBPACK_IMPORTED_MODULE_2__.Z)((state=>state.providerToken)),userId=(0,_store__WEBPACK_IMPORTED_MODULE_2__.Z)((state=>state.userId)),username=(0,_store__WEBPACK_IMPORTED_MODULE_2__.Z)((state=>{var _state$user;return null===(_state$user=state.user)||void 0===_state$user?void 0:_state$user.user_metadata.user_name}));return(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((()=>{loadSession&&async function getUserSession(){var _currentUser$data$ses,_currentUser$data$ses2,_currentUser$data$ses3,_currentUser$data$ses4,_currentUser$data$ses5;const currentUser=await _utils_supabase__WEBPACK_IMPORTED_MODULE_3__.O.auth.getSession();store.setUser(null!==(_currentUser$data$ses=null==currentUser||null===(_currentUser$data$ses2=currentUser.data.session)||void 0===_currentUser$data$ses2?void 0:_currentUser$data$ses2.user)&&void 0!==_currentUser$data$ses?_currentUser$data$ses:null),store.setSessionToken(null==currentUser||null===(_currentUser$data$ses3=currentUser.data.session)||void 0===_currentUser$data$ses3?void 0:_currentUser$data$ses3.access_token),store.setProviderToken(null==currentUser||null===(_currentUser$data$ses4=currentUser.data.session)||void 0===_currentUser$data$ses4?void 0:_currentUser$data$ses4.provider_token),store.setUserId(null==currentUser||null===(_currentUser$data$ses5=currentUser.data.session)||void 0===_currentUser$data$ses5||null===(_currentUser$data$ses5=_currentUser$data$ses5.user)||void 0===_currentUser$data$ses5?void 0:_currentUser$data$ses5.user_metadata.sub)}();const{data:{subscription:listener}}=_utils_supabase__WEBPACK_IMPORTED_MODULE_3__.O.auth.onAuthStateChange(((_,session)=>{var _session$user;store.setUser(null!==(_session$user=null==session?void 0:session.user)&&void 0!==_session$user?_session$user:null),store.setSessionToken(null==session?void 0:session.access_token),store.setProviderToken(null==session?void 0:session.provider_token),store.setUserId(null==session?void 0:session.user.user_metadata.sub)}));return()=>{null==listener||listener.unsubscribe()}}),[]),{signIn:data=>{var _process$env$NEXT_PUB;_utils_supabase__WEBPACK_IMPORTED_MODULE_3__.O.auth.signInWithOAuth(_objectSpread(_objectSpread({},data),{},{options:data.options?_objectSpread(_objectSpread({},data.options),{},{scopes:"read:org"}):{redirectTo:null!==(_process$env$NEXT_PUB=process.env.NEXT_PUBLIC_BASE_URL)&&void 0!==_process$env$NEXT_PUB?_process$env$NEXT_PUB:"/",scopes:"read:org"}}))},signOut:()=>_utils_supabase__WEBPACK_IMPORTED_MODULE_3__.O.auth.signOut(),user,username,sessionToken,providerToken,userId}}},"./lib/store/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),zustand__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/zustand/esm/index.mjs");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const initialState={insightRepoLimit:10,user:null,sessionToken:null,providerToken:null,userId:null,hasReports:!1,openSearch:!1},__WEBPACK_DEFAULT_EXPORT__=(0,zustand__WEBPACK_IMPORTED_MODULE_1__.Ue)()((set=>_objectSpread(_objectSpread({},initialState),{},{setWaitlisted:()=>set((state=>_objectSpread(_objectSpread({},state),{},{waitlisted:!0}))),onboardUser:()=>set((state=>_objectSpread(_objectSpread({},state),{},{onboarded:!0}))),setSession:_ref=>{let{onboarded,waitlisted,insightRepoLimit}=_ref;return set((state=>_objectSpread(_objectSpread({},state),{},{onboarded,waitlisted,insightRepoLimit})))},setUser:user=>set((state=>_objectSpread(_objectSpread({},state),{},{user}))),setSessionToken:sessionToken=>set((state=>_objectSpread(_objectSpread({},state),{},{sessionToken}))),setProviderToken:providerToken=>set((state=>_objectSpread(_objectSpread({},state),{},{providerToken}))),setUserId:userId=>set((state=>_objectSpread(_objectSpread({},state),{},{userId}))),setHasReports:hasReports=>set((state=>_objectSpread(_objectSpread({},state),{},{hasReports}))),setOpenSearch:openSearch=>set((state=>_objectSpread(_objectSpread({},state),{},{openSearch})))})))},"./lib/utils/github.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Ty:()=>getOwnerAndRepoNameFromUrl,VV:()=>getPullRequestCommitMessageFromUrl,cc:()=>getAvatarByUsername,dL:()=>getGithubIssueComments,ih:()=>getGithubIssueDetails,ny:()=>generateRepoParts,o8:()=>isValidIssueUrl,pX:()=>generateGhOgImage,qm:()=>isValidPullRequestUrl});var _supabase__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./lib/utils/supabase.ts");const getAvatarByUsername=function(username){let size=arguments.length>1&&void 0!==arguments[1]?arguments[1]:460;return"https://www.github.com/".concat(username,".png?size=").concat(size)},generateRepoParts=url=>{try{const trimmedUrl=url.trim();if(!(trimmedUrl.includes("https://")||trimmedUrl.includes("http://")||trimmedUrl.includes("www."))&&2===trimmedUrl.split("/").length){const[orgName,repoName]=trimmedUrl.split("/");return{isValidUrl:!0,apiPaths:{orgName,repoName,repoFullName:"".concat(orgName,"/").concat(repoName),issueId:null}}}const githubUrl=new URL(trimmedUrl.includes("https://")?trimmedUrl:"https://".concat(trimmedUrl)),{pathname}=githubUrl,[,orgName,repoName,,issueId]=pathname.split("/"),repoFullName="".concat(orgName,"/").concat(repoName);return"github.com"===githubUrl.hostname&&orgName&&repoName?issueId?{isValidUrl:!0,apiPaths:{orgName,repoName,repoFullName,issueId}}:{isValidUrl:!0,apiPaths:{orgName,repoName,repoFullName,issueId:null}}:{isValidUrl:!1,apiPaths:{orgName:null,repoName:null,repoFullName:null,issueId:null}}}catch(err){return{isValidUrl:!1,apiPaths:{orgName:null,repoName:null,repoFullName:null,issueId:null}}}},generateGhOgImage=githubUrl=>{try{const trimmedUrl=githubUrl.trim(),url=new URL(trimmedUrl.includes("https://")?trimmedUrl:"https://".concat(trimmedUrl)),{pathname}=url;return"github.com"!==url.hostname?{isValid:!1,url:""}:{isValid:!0,url:"https://opengraph.githubassets.com/1".concat(pathname)}}catch(err){return{isValid:!1,url:""}}},getPullRequestCommitMessageFromUrl=async url=>{var _sessionResponse$data;const sessionResponse=await _supabase__WEBPACK_IMPORTED_MODULE_0__.O.auth.getSession(),githubToken=null==sessionResponse||null===(_sessionResponse$data=sessionResponse.data.session)||void 0===_sessionResponse$data?void 0:_sessionResponse$data.provider_token,[,,,owner,repoName,,pullRequestNumber]=url.split("/"),apiUrl="https://api.github.com/repos/".concat(owner,"/").concat(repoName,"/pulls/").concat(pullRequestNumber,"/commits"),response=await fetch(apiUrl,{headers:githubToken?{Authorization:"Bearer ".concat(githubToken)}:{}}),data=await response.json();return Array.isArray(null==data?void 0:data.commits)?data.commits.map((commit=>commit.commit.message)):data.map((commit=>commit.commit.message))},getGithubIssueDetails=async url=>{var _sessionResponse$data2;const sessionResponse=await _supabase__WEBPACK_IMPORTED_MODULE_0__.O.auth.getSession(),githubToken=null==sessionResponse||null===(_sessionResponse$data2=sessionResponse.data.session)||void 0===_sessionResponse$data2?void 0:_sessionResponse$data2.provider_token,[,,,owner,repoName,,issueNumber]=url.split("/"),apiUrl="https://api.github.com/repos/".concat(owner,"/").concat(repoName,"/issues/").concat(issueNumber),response=await fetch(apiUrl,{headers:githubToken?{Authorization:"Bearer ".concat(githubToken)}:{}}),data=await response.json();return{title:data.title,body:data.body}},getGithubIssueComments=async url=>{var _sessionResponse$data3;const sessionResponse=await _supabase__WEBPACK_IMPORTED_MODULE_0__.O.auth.getSession(),githubToken=null==sessionResponse||null===(_sessionResponse$data3=sessionResponse.data.session)||void 0===_sessionResponse$data3?void 0:_sessionResponse$data3.provider_token,[,,,owner,repoName,,issueNumber]=url.split("/"),apiUrl="https://api.github.com/repos/".concat(owner,"/").concat(repoName,"/issues/").concat(issueNumber,"/comments"),response=await fetch(apiUrl,{headers:{Authorization:"token ".concat(githubToken)}});return(await response.json()).map((comment=>comment.body)).join(" ")},isValidPullRequestUrl=url=>!!url.match(/((https?:\/\/)?(www\.)?github\.com\/[^\/]+\/[^\/]+\/pull\/[0-9]+)/),isValidIssueUrl=url=>!!url.match(/((https?:\/\/)?(www\.)?github\.com\/[^\/]+\/[^\/]+\/issues\/[0-9]+)/),getOwnerAndRepoNameFromUrl=url=>{const[,,,owner,repoName]=url.split("/");return{owner,repoName}}},"./lib/utils/public-api-fetcher.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{J:()=>expPublicApiFetcher,N:()=>publicApiFetcher});var _supabase__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./lib/utils/supabase.ts"),console=__webpack_require__("./node_modules/console-browserify/index.js");const publicApiFetcher=async apiUrl=>await apiFetcher("https://beta.api.opensauced.pizza/v2",apiUrl),expPublicApiFetcher=async apiUrl=>await apiFetcher("https://beta.api.opensauced.pizza/v2",apiUrl),apiFetcher=async(baseUrl,apiUrl)=>{var _sessionResponse$data;const sessionResponse=await _supabase__WEBPACK_IMPORTED_MODULE_0__.O.auth.getSession(),sessionToken=null==sessionResponse||null===(_sessionResponse$data=sessionResponse.data.session)||void 0===_sessionResponse$data?void 0:_sessionResponse$data.access_token,res=await fetch("".concat(baseUrl,"/").concat(apiUrl),{headers:{accept:"application/json",Authorization:"Bearer ".concat(sessionToken)}});if(!res.ok){const error=new Error("HttpError");throw error.message="".concat(res.status," ").concat(res.statusText),error.stack=JSON.stringify(await res.json()),console.error(error),error}return res.json()}},"./lib/utils/supabase.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{O:()=>supabase});var _supabase_auth_helpers_nextjs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@supabase/auth-helpers-nextjs/dist/index.js");const supabase=(0,_supabase_auth_helpers_nextjs__WEBPACK_IMPORTED_MODULE_0__.createPagesBrowserClient)()},"./node_modules/clsx/dist/clsx.m.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}__webpack_require__.d(__webpack_exports__,{W:()=>clsx,Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=clsx},"./node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var h=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),n=__webpack_require__("./node_modules/use-sync-external-store/shim/index.js");var q="function"==typeof Object.is?Object.is:function p(a,b){return a===b&&(0!==a||1/a==1/b)||a!=a&&b!=b},r=n.useSyncExternalStore,t=h.useRef,u=h.useEffect,v=h.useMemo,w=h.useDebugValue;exports.useSyncExternalStoreWithSelector=function(a,b,e,l,g){var c=t(null);if(null===c.current){var f={hasValue:!1,value:null};c.current=f}else f=c.current;c=v((function(){function a(a){if(!c){if(c=!0,d=a,a=l(a),void 0!==g&&f.hasValue){var b=f.value;if(g(b,a))return k=b}return k=a}if(b=k,q(d,a))return b;var e=l(a);return void 0!==g&&g(b,e)?b:(d=a,k=e)}var d,k,c=!1,m=void 0===e?null:e;return[function(){return a(b())},null===m?void 0:function(){return a(m())}]}),[b,e,l,g]);var d=r(a,c[0],c[1]);return u((function(){f.hasValue=!0,f.value=d}),[d]),w(d),d}},"./node_modules/use-sync-external-store/shim/with-selector.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.production.min.js")},"./node_modules/zustand/esm/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Ue:()=>create});var console=__webpack_require__("./node_modules/console-browserify/index.js");const createStoreImpl=createState=>{let state;const listeners=new Set,setState=(partial,replace)=>{const nextState="function"==typeof partial?partial(state):partial;if(!Object.is(nextState,state)){const previousState=state;state=(null!=replace?replace:"object"!=typeof nextState)?nextState:Object.assign({},state,nextState),listeners.forEach((listener=>listener(state,previousState)))}},getState=()=>state,api={setState,getState,subscribe:listener=>(listeners.add(listener),()=>listeners.delete(listener)),destroy:()=>{console.warn("[DEPRECATED] The destroy method will be unsupported in the future version. You should use unsubscribe function returned by subscribe. Everything will be garbage collected if store is garbage collected."),listeners.clear()}};return state=createState(setState,getState,api),api},createStore=createState=>createState?createStoreImpl(createState):createStoreImpl;var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),with_selector=__webpack_require__("./node_modules/use-sync-external-store/shim/with-selector.js"),esm_console=__webpack_require__("./node_modules/console-browserify/index.js");const{useSyncExternalStoreWithSelector}=with_selector;const createImpl=createState=>{"function"!=typeof createState&&esm_console.warn('[DEPRECATED] Passing a vanilla store will be unsupported in the future version. Please use `import { useStore } from "zustand"` to use the vanilla store in React.');const api="function"==typeof createState?createStore(createState):createState,useBoundStore=(selector,equalityFn)=>function useStore(api,selector=api.getState,equalityFn){const slice=useSyncExternalStoreWithSelector(api.subscribe,api.getState,api.getServerState||api.getState,selector,equalityFn);return(0,react.useDebugValue)(slice),slice}(api,selector,equalityFn);return Object.assign(useBoundStore,api),useBoundStore},create=createState=>createState?createImpl(createState):createImpl},"?c969":()=>{},"?fd9c":()=>{},"?0fee":()=>{}}]);