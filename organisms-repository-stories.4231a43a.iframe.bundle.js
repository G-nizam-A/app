/*! For license information please see organisms-repository-stories.4231a43a.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_open_sauced_insights=self.webpackChunk_open_sauced_insights||[]).push([[3996],{"./node_modules/@radix-ui/react-use-previous/dist/index.module.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{D:function(){return $010c2913dbd2fe3d$export$5cae361ad82dce8b}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function $010c2913dbd2fe3d$export$5cae361ad82dce8b(value){const ref=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({value:value,previous:value});return(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>(ref.current.value!==value&&(ref.current.previous=ref.current.value,ref.current.value=value),ref.current.previous)),[value])}},"./stories/organisms/repository.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ReportsOrganism:function(){return ReportsOrganism}});var _ReportsOrganism$para,_ReportsOrganism$para2,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),components_organisms_Repositories_repositories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./components/organisms/Repositories/repositories.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}__webpack_exports__.default={title:"Design System/organisms/Repositories"};var ReportsOrganism=function ReportsOrganism(){return __jsx(components_organisms_Repositories_repositories__WEBPACK_IMPORTED_MODULE_2__.Z,null)};ReportsOrganism.displayName="ReportsOrganism",ReportsOrganism.parameters=_objectSpread(_objectSpread({},ReportsOrganism.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_ReportsOrganism$para=ReportsOrganism.parameters)||void 0===_ReportsOrganism$para?void 0:_ReportsOrganism$para.docs),{},{source:_objectSpread({originalSource:"(): JSX.Element => <Repositories />"},null===(_ReportsOrganism$para2=ReportsOrganism.parameters)||void 0===_ReportsOrganism$para2||null===(_ReportsOrganism$para2=_ReportsOrganism$para2.docs)||void 0===_ReportsOrganism$para2?void 0:_ReportsOrganism$para2.source)})}),ReportsOrganism.__docgenInfo={description:"",methods:[],displayName:"ReportsOrganism"}},"./node_modules/lodash.debounce/index.js":function(module,__unused_webpack_exports,__webpack_require__){var NAN=NaN,symbolTag="[object Symbol]",reTrim=/^\s+|\s+$/g,reIsBadHex=/^[-+]0x[0-9a-f]+$/i,reIsBinary=/^0b[01]+$/i,reIsOctal=/^0o[0-7]+$/i,freeParseInt=parseInt,freeGlobal="object"==typeof __webpack_require__.g&&__webpack_require__.g&&__webpack_require__.g.Object===Object&&__webpack_require__.g,freeSelf="object"==typeof self&&self&&self.Object===Object&&self,root=freeGlobal||freeSelf||Function("return this")(),objectToString=Object.prototype.toString,nativeMax=Math.max,nativeMin=Math.min,now=function(){return root.Date.now()};function isObject(value){var type=typeof value;return!!value&&("object"==type||"function"==type)}function toNumber(value){if("number"==typeof value)return value;if(function isSymbol(value){return"symbol"==typeof value||function isObjectLike(value){return!!value&&"object"==typeof value}(value)&&objectToString.call(value)==symbolTag}(value))return NAN;if(isObject(value)){var other="function"==typeof value.valueOf?value.valueOf():value;value=isObject(other)?other+"":other}if("string"!=typeof value)return 0===value?value:+value;value=value.replace(reTrim,"");var isBinary=reIsBinary.test(value);return isBinary||reIsOctal.test(value)?freeParseInt(value.slice(2),isBinary?2:8):reIsBadHex.test(value)?NAN:+value}module.exports=function debounce(func,wait,options){var lastArgs,lastThis,maxWait,result,timerId,lastCallTime,lastInvokeTime=0,leading=!1,maxing=!1,trailing=!0;if("function"!=typeof func)throw new TypeError("Expected a function");function invokeFunc(time){var args=lastArgs,thisArg=lastThis;return lastArgs=lastThis=void 0,lastInvokeTime=time,result=func.apply(thisArg,args)}function shouldInvoke(time){var timeSinceLastCall=time-lastCallTime;return void 0===lastCallTime||timeSinceLastCall>=wait||timeSinceLastCall<0||maxing&&time-lastInvokeTime>=maxWait}function timerExpired(){var time=now();if(shouldInvoke(time))return trailingEdge(time);timerId=setTimeout(timerExpired,function remainingWait(time){var result=wait-(time-lastCallTime);return maxing?nativeMin(result,maxWait-(time-lastInvokeTime)):result}(time))}function trailingEdge(time){return timerId=void 0,trailing&&lastArgs?invokeFunc(time):(lastArgs=lastThis=void 0,result)}function debounced(){var time=now(),isInvoking=shouldInvoke(time);if(lastArgs=arguments,lastThis=this,lastCallTime=time,isInvoking){if(void 0===timerId)return function leadingEdge(time){return lastInvokeTime=time,timerId=setTimeout(timerExpired,wait),leading?invokeFunc(time):result}(lastCallTime);if(maxing)return timerId=setTimeout(timerExpired,wait),invokeFunc(lastCallTime)}return void 0===timerId&&(timerId=setTimeout(timerExpired,wait)),result}return wait=toNumber(wait)||0,isObject(options)&&(leading=!!options.leading,maxWait=(maxing="maxWait"in options)?nativeMax(toNumber(options.maxWait)||0,wait):maxWait,trailing="trailing"in options?!!options.trailing:trailing),debounced.cancel=function cancel(){void 0!==timerId&&clearTimeout(timerId),lastInvokeTime=0,lastArgs=lastCallTime=lastThis=timerId=void 0},debounced.flush=function flush(){return void 0===timerId?result:trailingEdge(now())},debounced}},"./node_modules/rooks/dist/esm/hooks/useDebounce.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{N:function(){return useDebounce}});var lodash_debounce=__webpack_require__("./node_modules/lodash.debounce/index.js"),lodash_debounce_default=__webpack_require__.n(lodash_debounce),react=__webpack_require__("./node_modules/react/index.js");const useIsomorphicEffect="undefined"==typeof window?react.useEffect:react.useLayoutEffect;function useDebounce(callback,wait,options){const createDebouncedCallback=(0,react.useCallback)((function_=>lodash_debounce_default()(function_,wait,options)),[wait,options]),freshCallback=function useFreshRef(value,preferLayoutEffect=!1){const useEffectToUse=preferLayoutEffect?useIsomorphicEffect:react.useEffect,ref=(0,react.useRef)(value);return useEffectToUse((()=>{ref.current=value})),ref}(callback);const debouncedCallbackRef=(0,react.useRef)(createDebouncedCallback((function tick(...args){var _a;null===(_a=freshCallback.current)||void 0===_a||_a.call(freshCallback,...args)})));return function useWillUnmount(callback){(0,react.useEffect)((()=>callback),[])}((()=>{var _a;return null===(_a=debouncedCallbackRef.current)||void 0===_a?void 0:_a.cancel()})),debouncedCallbackRef.current}},"./node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.production.min.js":function(__unused_webpack_module,exports,__webpack_require__){"use strict";var h=__webpack_require__("./node_modules/react/index.js"),n=__webpack_require__("./node_modules/use-sync-external-store/shim/index.js");var q="function"==typeof Object.is?Object.is:function p(a,b){return a===b&&(0!==a||1/a==1/b)||a!=a&&b!=b},r=n.useSyncExternalStore,t=h.useRef,u=h.useEffect,v=h.useMemo,w=h.useDebugValue;exports.useSyncExternalStoreWithSelector=function(a,b,e,l,g){var c=t(null);if(null===c.current){var f={hasValue:!1,value:null};c.current=f}else f=c.current;c=v((function(){function a(a){if(!c){if(c=!0,d=a,a=l(a),void 0!==g&&f.hasValue){var b=f.value;if(g(b,a))return k=b}return k=a}if(b=k,q(d,a))return b;var e=l(a);return void 0!==g&&g(b,e)?b:(d=a,k=e)}var d,k,c=!1,m=void 0===e?null:e;return[function(){return a(b())},null===m?void 0:function(){return a(m())}]}),[b,e,l,g]);var d=r(a,c[0],c[1]);return u((function(){f.hasValue=!0,f.value=d}),[d]),w(d),d}},"./node_modules/use-sync-external-store/shim/with-selector.js":function(module,__unused_webpack_exports,__webpack_require__){"use strict";module.exports=__webpack_require__("./node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.production.min.js")},"./node_modules/zustand/esm/index.mjs":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Ue:function(){return create}});var console=__webpack_require__("./node_modules/console-browserify/index.js");const createStoreImpl=createState=>{let state;const listeners=new Set,setState=(partial,replace)=>{const nextState="function"==typeof partial?partial(state):partial;if(!Object.is(nextState,state)){const previousState=state;state=(null!=replace?replace:"object"!=typeof nextState)?nextState:Object.assign({},state,nextState),listeners.forEach((listener=>listener(state,previousState)))}},getState=()=>state,api={setState:setState,getState:getState,subscribe:listener=>(listeners.add(listener),()=>listeners.delete(listener)),destroy:()=>{console.warn("[DEPRECATED] The destroy method will be unsupported in the future version. You should use unsubscribe function returned by subscribe. Everything will be garbage collected if store is garbage collected."),listeners.clear()}};return state=createState(setState,getState,api),api},createStore=createState=>createState?createStoreImpl(createState):createStoreImpl;var react=__webpack_require__("./node_modules/react/index.js"),with_selector=__webpack_require__("./node_modules/use-sync-external-store/shim/with-selector.js"),esm_console=__webpack_require__("./node_modules/console-browserify/index.js");const{useSyncExternalStoreWithSelector:useSyncExternalStoreWithSelector}=with_selector;const createImpl=createState=>{"function"!=typeof createState&&esm_console.warn('[DEPRECATED] Passing a vanilla store will be unsupported in the future version. Please use `import { useStore } from "zustand"` to use the vanilla store in React.');const api="function"==typeof createState?createStore(createState):createState,useBoundStore=(selector,equalityFn)=>function useStore(api,selector=api.getState,equalityFn){const slice=useSyncExternalStoreWithSelector(api.subscribe,api.getState,api.getServerState||api.getState,selector,equalityFn);return(0,react.useDebugValue)(slice),slice}(api,selector,equalityFn);return Object.assign(useBoundStore,api),useBoundStore},create=createState=>createState?createImpl(createState):createImpl}}]);