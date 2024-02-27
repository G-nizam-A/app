"use strict";(self.webpackChunk_open_sauced_app=self.webpackChunk_open_sauced_app||[]).push([[8153],{"./components/atoms/Button/button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),clsx__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/clsx/dist/clsx.m.js");const _excluded=["className","children","loading","disabled","variant","showLoadingText","onClick","href"];var __jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const Button=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((_ref,ref)=>{let{className,children,loading,disabled,variant,showLoadingText=!0,onClick,href}=_ref,props=(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_ref,_excluded);const styles={primary:"bg-light-orange-9 text-light-orange-2 border-light-orange-9 hover:bg-light-orange-10 ".concat(disabled?"bg-light-orange-7 hover:bg-light-orange-7 pointer-events-none":""),default:"bg-white border-light-slate-8 text-light-slate-11 hover:bg-light-slate-2 ".concat(disabled?"bg-light-slate-4 text-light-slate-9 pointer-events-none":""),dark:"bg-dark-slate-6 border-dark-slate-8 text-light-orange-2 hover:bg-dark-slate-8 ".concat(disabled?"bg-dark-slate-4 text-dark-slate-9 pointer-events-none":""),outline:"bg-orange-50 border-orange-500 text-orange-600 hover:bg-orange-100 ".concat(disabled?"bg-light-orange-3 pointer-events-none text-light-orange-7 border-light-orange-5":""),link:"text-orange-600 hover:bg-orange-100 border-none ".concat(disabled?"text-orange-400 pointer-events-none":""),destructive:"border-dark-red-8 bg-dark-red-8 text-white hover:border-dark-red-7 hover:bg-dark-red-7",text:""},rootClass=(0,clsx__WEBPACK_IMPORTED_MODULE_2__.Z)(styles[variant],disabled&&"cursor-not-allowed",disabled&&"destructive"!==variant&&"bg-light-orange-7 hover:bg-light-orange-7","items-center inline-flex text-sm font-semibold tracking-tight border py-2 px-4 rounded-md focus-visible:border-orange-500 focus:outline-none focus-visible:ring focus-visible:ring-orange-200 whitespace-nowrap",className),content=loading?__jsx("div",null,__jsx("svg",{"aria-hidden":"true",role:"status",className:(0,clsx__WEBPACK_IMPORTED_MODULE_2__.Z)("inline w-4 h-4 text-white animate-spin",showLoadingText?"mr-2":""),viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg"},__jsx("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"#E5E7EB"}),__jsx("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentColor"})),showLoadingText&&__jsx("span",{className:"text-white"},"Loading...")):children;return href?__jsx("a",(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)({className:rootClass,href,ref},props),content):__jsx("button",(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)({className:rootClass,ref,onClick:disabled?void 0:onClick},props),content)}));Button.displayName="Button";const __WEBPACK_DEFAULT_EXPORT__=Button;try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"dark"'},{value:'"link"'},{value:'"text"'},{value:'"default"'},{value:'"primary"'},{value:'"outline"'},{value:'"destructive"'}]}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}},href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string"}},rel:{defaultValue:null,description:"",name:"rel",required:!1,type:{name:"string"}},target:{defaultValue:null,description:"",name:"target",required:!1,type:{name:"string"}},showLoadingText:{defaultValue:{value:"true"},description:"",name:"showLoadingText",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/atoms/Button/button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"components/atoms/Button/button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./components/atoms/Typography/wrapper.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),clsx__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/clsx/dist/clsx.m.js");const _excluded=["children","className","size"];var __jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const TypographyWrapper=_ref=>{let{children,className,size="sm"}=_ref,props=(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_ref,_excluded);return __jsx("span",(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__.Z)({className:(0,clsx__WEBPACK_IMPORTED_MODULE_3__.Z)("prose","prose-".concat(size),className)},props),children)};TypographyWrapper.displayName="TypographyWrapper";const __WEBPACK_DEFAULT_EXPORT__=TypographyWrapper;try{wrapper.displayName="wrapper",wrapper.__docgenInfo={description:"",displayName:"wrapper",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:{value:"sm"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"base"'},{value:'"sm"'},{value:'"lg"'},{value:'"xl"'},{value:'"2xl"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/atoms/Typography/wrapper.tsx#wrapper"]={docgenInfo:wrapper.__docgenInfo,name:"wrapper",path:"components/atoms/Typography/wrapper.tsx#wrapper"})}catch(__react_docgen_typescript_loader_error){}},"./components/molecules/Dialog/dialog.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$N:()=>DialogTitle,Be:()=>DialogDescription,Vq:()=>Dialog,cZ:()=>DialogContent,fK:()=>DialogHeader,iK:()=>DialogCloseButton});var _home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@radix-ui/react-dialog/dist/index.module.js"),clsx__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),react_icons_ai__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react-icons/ai/index.mjs");const _excluded=["className","children"],_excluded2=["className","children"],_excluded3=["className","children","onClick","autoStyle"],_excluded4=["className"],_excluded5=["className"],_excluded6=["className"],_excluded7=["className"];var __jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const Dialog=_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_1__.fC,DialogPortal=(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_1__.xz,_ref=>{let{className,children}=_ref,props=(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(_ref,_excluded);return __jsx(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_1__.h_,(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)({className:"".concat(className)},props),__jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center"},children))});DialogPortal.displayName="DialogPortal",DialogPortal.displayName=_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_1__.h_.displayName;const DialogOverlay=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((_ref2,ref)=>{let{className,children}=_ref2,props=(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(_ref2,_excluded2);return __jsx(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_1__.aV,(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)({className:(0,clsx__WEBPACK_IMPORTED_MODULE_4__.Z)("fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-all duration-100 data-[state=closed]:animate-out data-[state=open]:fade-in data-[state=closed]:fade-out",className)},props,{ref}))}));DialogOverlay.displayName=_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_1__.aV.displayName;const DialogCloseButton=_ref3=>{let{onClick}=_ref3;return __jsx(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_1__.x8,{onClick,className:"absolute top-4 right-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-slate-100 "},__jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__.oHP,{size:20}),__jsx("span",{className:"sr-only"},"Close"))};DialogCloseButton.displayName="DialogCloseButton";const DialogContent=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((_ref4,ref)=>{let{className,children,onClick,autoStyle=!0}=_ref4,props=(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(_ref4,_excluded3);return __jsx(DialogPortal,null,__jsx(DialogOverlay,null),__jsx(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_1__.VY,(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)({ref,className:(0,clsx__WEBPACK_IMPORTED_MODULE_4__.Z)("fixed z-50",autoStyle&&"w-full pb-3 gap-4 bg-light-slate-2 lg:p-6 animate-in data-[state=open]:fade-in-90 data-[state=open]:slide-in-from-bottom-10 md:w-max rounded-lg sm:zoom-in-90 data-[state=open]:sm:slide-in-from-bottom-0",className)},props),children))}));DialogContent.displayName=_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_1__.VY.displayName;const DialogHeader=_ref5=>{let{className}=_ref5,props=(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(_ref5,_excluded4);return __jsx("div",(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)({className:(0,clsx__WEBPACK_IMPORTED_MODULE_4__.Z)("flex flex-col space-y-2 text-center sm:text-left",className)},props))};DialogHeader.displayName="DialogHeader",DialogHeader.displayName="DialogHeader";const DialogTitle=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((_ref6,ref)=>{let{className}=_ref6,props=(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(_ref6,_excluded5);return __jsx(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_1__.Dx,(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)({ref,className:(0,clsx__WEBPACK_IMPORTED_MODULE_4__.Z)("text-lg font-semibold text-slate-900",className)},props))})),DialogDescription=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((_ref7,ref)=>{let{className}=_ref7,props=(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(_ref7,_excluded6);return __jsx(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_1__.dk,(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)({ref,className:(0,clsx__WEBPACK_IMPORTED_MODULE_4__.Z)("text-sm text-slate-500",className)},props))}));DialogDescription.displayName=_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_1__.dk.displayName,DialogTitle.displayName=_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_1__.Dx.displayName;const DialogFooter=_ref8=>{let{className}=_ref8,props=(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(_ref8,_excluded7);return __jsx("div",(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)({className:(0,clsx__WEBPACK_IMPORTED_MODULE_4__.Z)("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",className)},props))};DialogFooter.displayName="DialogFooter",DialogFooter.displayName="DialogFooter";try{DialogHeader.displayName="DialogHeader",DialogHeader.__docgenInfo={description:"",displayName:"DialogHeader",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/molecules/Dialog/dialog.tsx#DialogHeader"]={docgenInfo:DialogHeader.__docgenInfo,name:"DialogHeader",path:"components/molecules/Dialog/dialog.tsx#DialogHeader"})}catch(__react_docgen_typescript_loader_error){}},"./lib/hooks/useSupabaseAuth.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_store__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./lib/store/index.ts"),_utils_supabase__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./lib/utils/supabase.ts"),process=__webpack_require__("./node_modules/process/browser.js");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const __WEBPACK_DEFAULT_EXPORT__=function(){let loadSession=arguments.length>0&&void 0!==arguments[0]&&arguments[0];const store=(0,_store__WEBPACK_IMPORTED_MODULE_2__.Z)(),user=(0,_store__WEBPACK_IMPORTED_MODULE_2__.Z)((state=>state.user)),sessionToken=(0,_store__WEBPACK_IMPORTED_MODULE_2__.Z)((state=>state.sessionToken)),providerToken=(0,_store__WEBPACK_IMPORTED_MODULE_2__.Z)((state=>state.providerToken)),userId=(0,_store__WEBPACK_IMPORTED_MODULE_2__.Z)((state=>state.userId)),username=(0,_store__WEBPACK_IMPORTED_MODULE_2__.Z)((state=>{var _state$user;return null===(_state$user=state.user)||void 0===_state$user?void 0:_state$user.user_metadata.user_name}));return(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((()=>{loadSession&&async function getUserSession(){var _currentUser$data$ses,_currentUser$data$ses2,_currentUser$data$ses3,_currentUser$data$ses4,_currentUser$data$ses5;const currentUser=await _utils_supabase__WEBPACK_IMPORTED_MODULE_3__.O.auth.getSession();store.setUser(null!==(_currentUser$data$ses=null==currentUser||null===(_currentUser$data$ses2=currentUser.data.session)||void 0===_currentUser$data$ses2?void 0:_currentUser$data$ses2.user)&&void 0!==_currentUser$data$ses?_currentUser$data$ses:null),store.setSessionToken(null==currentUser||null===(_currentUser$data$ses3=currentUser.data.session)||void 0===_currentUser$data$ses3?void 0:_currentUser$data$ses3.access_token),store.setProviderToken(null==currentUser||null===(_currentUser$data$ses4=currentUser.data.session)||void 0===_currentUser$data$ses4?void 0:_currentUser$data$ses4.provider_token),store.setUserId(null==currentUser||null===(_currentUser$data$ses5=currentUser.data.session)||void 0===_currentUser$data$ses5||null===(_currentUser$data$ses5=_currentUser$data$ses5.user)||void 0===_currentUser$data$ses5?void 0:_currentUser$data$ses5.user_metadata.sub)}();const{data:{subscription:listener}}=_utils_supabase__WEBPACK_IMPORTED_MODULE_3__.O.auth.onAuthStateChange(((_,session)=>{var _session$user;store.setUser(null!==(_session$user=null==session?void 0:session.user)&&void 0!==_session$user?_session$user:null),store.setSessionToken(null==session?void 0:session.access_token),store.setProviderToken(null==session?void 0:session.provider_token),store.setUserId(null==session?void 0:session.user.user_metadata.sub)}));return()=>{null==listener||listener.unsubscribe()}}),[]),{signIn:data=>{var _process$env$NEXT_PUB;_utils_supabase__WEBPACK_IMPORTED_MODULE_3__.O.auth.signInWithOAuth(_objectSpread(_objectSpread({},data),{},{options:data.options?_objectSpread(_objectSpread({},data.options),{},{scopes:"read:org"}):{redirectTo:null!==(_process$env$NEXT_PUB=process.env.NEXT_PUBLIC_BASE_URL)&&void 0!==_process$env$NEXT_PUB?_process$env$NEXT_PUB:"/",scopes:"read:org"}}))},signOut:()=>_utils_supabase__WEBPACK_IMPORTED_MODULE_3__.O.auth.signOut(),user,username,sessionToken,providerToken,userId}}},"./lib/hooks/useToast.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{pm:()=>useToast});var _home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js"),_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}let count=0;const toastTimeouts=new Map,addToRemoveQueue=toastId=>{if(toastTimeouts.has(toastId))return;const timeout=setTimeout((()=>{toastTimeouts.delete(toastId),dispatch({type:"REMOVE_TOAST",toastId})}),1e3);toastTimeouts.set(toastId,timeout)},reducer=(state,action)=>{switch(action.type){case"ADD_TOAST":return _objectSpread(_objectSpread({},state),{},{toasts:[action.toast,...state.toasts].slice(0,1)});case"UPDATE_TOAST":return _objectSpread(_objectSpread({},state),{},{toasts:state.toasts.map((t=>t.id===action.toast.id?_objectSpread(_objectSpread({},t),action.toast):t))});case"DISMISS_TOAST":{const{toastId}=action;return toastId?addToRemoveQueue(toastId):state.toasts.forEach((toast=>{addToRemoveQueue(toast.id)})),_objectSpread(_objectSpread({},state),{},{toasts:state.toasts.map((t=>t.id===toastId||void 0===toastId?_objectSpread(_objectSpread({},t),{},{open:!1}):t))})}case"REMOVE_TOAST":return void 0===action.toastId?_objectSpread(_objectSpread({},state),{},{toasts:[]}):_objectSpread(_objectSpread({},state),{},{toasts:state.toasts.filter((t=>t.id!==action.toastId))})}},listeners=[];let memoryState={toasts:[]};function dispatch(action){memoryState=reducer(memoryState,action),listeners.forEach((listener=>{listener(memoryState)}))}function toast(_ref){let props=Object.assign({},((0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty_js__WEBPACK_IMPORTED_MODULE_2__.Z)(_ref),_ref));const id=function genId(){return count=(count+1)%Number.MAX_VALUE,count.toString()}(),dismiss=()=>dispatch({type:"DISMISS_TOAST",toastId:id});return dispatch({type:"ADD_TOAST",toast:_objectSpread(_objectSpread({},props),{},{id,open:!0,onOpenChange:open=>{open||dismiss()}})}),{id,dismiss,update:props=>dispatch({type:"UPDATE_TOAST",toast:_objectSpread(_objectSpread({},props),{},{id})})}}function useToast(){const[state,setState]=react__WEBPACK_IMPORTED_MODULE_1__.useState(memoryState);return react__WEBPACK_IMPORTED_MODULE_1__.useEffect((()=>(listeners.push(setState),()=>{const index=listeners.indexOf(setState);index>-1&&listeners.splice(index,1)})),[state]),_objectSpread(_objectSpread({},state),{},{toast,dismiss:toastId=>dispatch({type:"DISMISS_TOAST",toastId})})}},"./lib/store/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),zustand__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/zustand/esm/index.mjs");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const initialState={insightRepoLimit:10,user:null,sessionToken:null,providerToken:null,userId:null,hasReports:!1,openSearch:!1},__WEBPACK_DEFAULT_EXPORT__=(0,zustand__WEBPACK_IMPORTED_MODULE_1__.Ue)()((set=>_objectSpread(_objectSpread({},initialState),{},{setWaitlisted:()=>set((state=>_objectSpread(_objectSpread({},state),{},{waitlisted:!0}))),onboardUser:()=>set((state=>_objectSpread(_objectSpread({},state),{},{onboarded:!0}))),setSession:_ref=>{let{onboarded,waitlisted,insightRepoLimit}=_ref;return set((state=>_objectSpread(_objectSpread({},state),{},{onboarded,waitlisted,insightRepoLimit})))},setUser:user=>set((state=>_objectSpread(_objectSpread({},state),{},{user}))),setSessionToken:sessionToken=>set((state=>_objectSpread(_objectSpread({},state),{},{sessionToken}))),setProviderToken:providerToken=>set((state=>_objectSpread(_objectSpread({},state),{},{providerToken}))),setUserId:userId=>set((state=>_objectSpread(_objectSpread({},state),{},{userId}))),setHasReports:hasReports=>set((state=>_objectSpread(_objectSpread({},state),{},{hasReports}))),setOpenSearch:openSearch=>set((state=>_objectSpread(_objectSpread({},state),{},{openSearch})))})))},"./lib/utils/public-api-fetcher.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J:()=>expPublicApiFetcher,N:()=>publicApiFetcher});var _supabase__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./lib/utils/supabase.ts"),console=__webpack_require__("./node_modules/console-browserify/index.js");const publicApiFetcher=async apiUrl=>await apiFetcher("https://beta.api.opensauced.pizza/v2",apiUrl),expPublicApiFetcher=async apiUrl=>await apiFetcher("https://beta.api.opensauced.pizza/v2",apiUrl),apiFetcher=async(baseUrl,apiUrl)=>{var _sessionResponse$data;const sessionResponse=await _supabase__WEBPACK_IMPORTED_MODULE_0__.O.auth.getSession(),sessionToken=null==sessionResponse||null===(_sessionResponse$data=sessionResponse.data.session)||void 0===_sessionResponse$data?void 0:_sessionResponse$data.access_token,res=await fetch("".concat(baseUrl,"/").concat(apiUrl),{headers:{accept:"application/json",Authorization:"Bearer ".concat(sessionToken)}});if(!res.ok){const error=new Error("HttpError");throw error.message="".concat(res.status," ").concat(res.statusText),error.stack=JSON.stringify(await res.json()),console.error(error),error}return res.json()}},"./lib/utils/supabase.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>supabase});var _supabase_auth_helpers_nextjs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@supabase/auth-helpers-nextjs/dist/index.js");const supabase=(0,_supabase_auth_helpers_nextjs__WEBPACK_IMPORTED_MODULE_0__.createPagesBrowserClient)()}}]);