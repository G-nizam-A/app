"use strict";(self.webpackChunk_open_sauced_insights=self.webpackChunk_open_sauced_insights||[]).push([[4481],{"./components/molecules/DevProfile/dev-profile.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DevProfileStory:()=>DevProfileStory,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _DevProfileStory$para,_DevProfileStory$para2,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),components_molecules_DevProfile_dev_profile__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./components/molecules/DevProfile/dev-profile.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const __WEBPACK_DEFAULT_EXPORT__={title:"Design System/Molecules/DevProfile",component:components_molecules_DevProfile_dev_profile__WEBPACK_IMPORTED_MODULE_2__.Z},DevProfileTemplate=args=>__jsx(components_molecules_DevProfile_dev_profile__WEBPACK_IMPORTED_MODULE_2__.Z,args);DevProfileTemplate.displayName="DevProfileTemplate";const DevProfileStory=DevProfileTemplate.bind({});DevProfileStory.args={username:"foxyblocks",hasBorder:!1},DevProfileStory.parameters=_objectSpread(_objectSpread({},DevProfileStory.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_DevProfileStory$para=DevProfileStory.parameters)||void 0===_DevProfileStory$para?void 0:_DevProfileStory$para.docs),{},{source:_objectSpread({originalSource:"args => <DevProfile {...args} />"},null===(_DevProfileStory$para2=DevProfileStory.parameters)||void 0===_DevProfileStory$para2||null===(_DevProfileStory$para2=_DevProfileStory$para2.docs)||void 0===_DevProfileStory$para2?void 0:_DevProfileStory$para2.source)})});const __namedExportsOrder=["DevProfileStory"]},"./components/atoms/Avatar/avatar-hover-card.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{q:()=>Avatar,Z:()=>avatar_hover_card});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),index_module=__webpack_require__("./node_modules/@radix-ui/react-hover-card/dist/index.module.js"),next_link=__webpack_require__("./node_modules/next/link.js"),link_default=__webpack_require__.n(next_link),next_image=__webpack_require__("./node_modules/@storybook/nextjs/dist/images/next-image.mjs"),next_router=__webpack_require__("./node_modules/next/router.js"),useFetchUser=__webpack_require__("./lib/hooks/useFetchUser.ts"),useContributorPullRequestsChart=__webpack_require__("./lib/hooks/useContributorPullRequestsChart.ts"),github=__webpack_require__("./lib/utils/github.ts"),contributor_hover_card=__webpack_require__("./components/molecules/ContributorHoverCard/contributor-hover-card.tsx"),__jsx=react.createElement;const hover_card_wrapper=_ref=>{let{username,repositories}=_ref;const topic=(0,next_router.useRouter)().query.pageId,{data:contributor}=(0,useFetchUser.j)(username),{repoList}=(0,useContributorPullRequestsChart.u)(username,"*",repositories,"30",!0),profile={githubAvatar:(0,github.cc)(username,40),githubName:username,totalPR:repoList.length},{is_maintainer,first_opened_pr_at}=null!=contributor?contributor:{};return __jsx(react.Fragment,null,__jsx(contributor_hover_card.Z,{dateOfFirstPr:first_opened_pr_at,totalPR:profile.totalPR,githubAvatar:profile.githubAvatar,githubName:profile.githubName,repoList,topic,repositories,isMaintainer:!!is_maintainer}))};try{hovercardwrapper.displayName="hovercardwrapper",hovercardwrapper.__docgenInfo={description:"",displayName:"hovercardwrapper",props:{username:{defaultValue:null,description:"",name:"username",required:!0,type:{name:"string"}},repositories:{defaultValue:null,description:"",name:"repositories",required:!1,type:{name:"number[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/molecules/HoverCardWrapper/hover-card-wrapper.tsx#hovercardwrapper"]={docgenInfo:hovercardwrapper.__docgenInfo,name:"hovercardwrapper",path:"components/molecules/HoverCardWrapper/hover-card-wrapper.tsx#hovercardwrapper"})}catch(__react_docgen_typescript_loader_error){}var avatar_hover_card_jsx=react.createElement;const Avatar=_ref=>{let{contributor,size="large"}=_ref,width=500,height=500;switch(size){case"xsmall":width=24,height=24;break;case"small":width=45,height=45;break;case"medium":width=35,height=35}return avatar_hover_card_jsx(next_image.Z,{alt:contributor,className:"border rounded-full",height:width,src:(0,github.cc)(contributor,40),width:height})};Avatar.displayName="Avatar";const AvatarHoverCard=_ref2=>{let{contributor,repositories,size="large"}=_ref2;return avatar_hover_card_jsx(index_module.fC,null,avatar_hover_card_jsx(link_default(),{href:"/user/".concat(contributor),as:"/user/".concat(contributor)},avatar_hover_card_jsx(index_module.xz,null,avatar_hover_card_jsx(Avatar,{contributor,size}))),avatar_hover_card_jsx(index_module.h_,null,avatar_hover_card_jsx(index_module.VY,{sideOffset:5},avatar_hover_card_jsx(hover_card_wrapper,{username:contributor,repositories}))))};AvatarHoverCard.displayName="AvatarHoverCard";const avatar_hover_card=AvatarHoverCard;try{Avatar.displayName="Avatar",Avatar.__docgenInfo={description:"",displayName:"Avatar",props:{contributor:{defaultValue:null,description:"",name:"contributor",required:!0,type:{name:"string"}},size:{defaultValue:{value:"large"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"xsmall"'},{value:'"large"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/atoms/Avatar/avatar-hover-card.tsx#Avatar"]={docgenInfo:Avatar.__docgenInfo,name:"Avatar",path:"components/atoms/Avatar/avatar-hover-card.tsx#Avatar"})}catch(__react_docgen_typescript_loader_error){}try{avatarhovercard.displayName="avatarhovercard",avatarhovercard.__docgenInfo={description:"",displayName:"avatarhovercard",props:{contributor:{defaultValue:null,description:"",name:"contributor",required:!0,type:{name:"string"}},size:{defaultValue:{value:"large"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"xsmall"'},{value:'"large"'}]}},repositories:{defaultValue:null,description:"",name:"repositories",required:!0,type:{name:"number[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/atoms/Avatar/avatar-hover-card.tsx#avatarhovercard"]={docgenInfo:avatarhovercard.__docgenInfo,name:"avatarhovercard",path:"components/atoms/Avatar/avatar-hover-card.tsx#avatarhovercard"})}catch(__react_docgen_typescript_loader_error){}},"./components/molecules/ContributorHoverCard/contributor-hover-card.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),next_router__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/router.js"),lib_utils_date_utils__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./lib/utils/date-utils.ts"),components_atoms_Badge_badge__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./components/atoms/Badge/badge.tsx"),_CardProfile_card_profile__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./components/molecules/CardProfile/card-profile.tsx"),_CardRepoList_card_repo_list__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./components/molecules/CardRepoList/card-repo-list.tsx"),_PullRequestTable_pull_request_table__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./components/molecules/PullRequestTable/pull-request-table.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const ContributorHoverCard=_ref=>{let{repoList,githubName,totalPR,dateOfFirstPr,githubAvatar,repositories,isMaintainer}=_ref;const topic=(0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)().query.pageId,calculatedDateFromToday=dateOfFirstPr?(0,lib_utils_date_utils__WEBPACK_IMPORTED_MODULE_6__.wu)(new Date(parseInt(dateOfFirstPr).toString())):"-";return __jsx("div",{className:"w-[364px] bg-white gap-4 p-3 rounded-lg shadow-superlative flex flex-col"},__jsx("div",{className:"flex items-center justify-between"},__jsx(_CardProfile_card_profile__WEBPACK_IMPORTED_MODULE_3__.Z,{dateOfFirstPR:calculatedDateFromToday,githubAvatar,githubName,totalPRs:totalPR,isRoundedAvatar:!0}),isMaintainer&&__jsx(components_atoms_Badge_badge__WEBPACK_IMPORTED_MODULE_2__.Z,{text:"maintainer"})),__jsx("div",null,__jsx(_PullRequestTable_pull_request_table__WEBPACK_IMPORTED_MODULE_5__.Z,{isHoverCard:!0,repositories,limit:5,contributor:githubName,topic})),__jsx("div",null,__jsx(_CardRepoList_card_repo_list__WEBPACK_IMPORTED_MODULE_4__.Z,{repoList,limit:3})))};ContributorHoverCard.displayName="ContributorHoverCard";const __WEBPACK_DEFAULT_EXPORT__=ContributorHoverCard;try{contributorhovercard.displayName="contributorhovercard",contributorhovercard.__docgenInfo={description:"",displayName:"contributorhovercard",props:{repoList:{defaultValue:null,description:"",name:"repoList",required:!0,type:{name:"RepoList[]"}},githubAvatar:{defaultValue:null,description:"",name:"githubAvatar",required:!0,type:{name:"string"}},githubName:{defaultValue:null,description:"",name:"githubName",required:!0,type:{name:"string"}},totalPR:{defaultValue:null,description:"",name:"totalPR",required:!0,type:{name:"number"}},dateOfFirstPr:{defaultValue:null,description:"",name:"dateOfFirstPr",required:!0,type:{name:"string | undefined"}},topic:{defaultValue:null,description:"",name:"topic",required:!1,type:{name:"string"}},repositories:{defaultValue:null,description:"",name:"repositories",required:!1,type:{name:"number[]"}},isMaintainer:{defaultValue:null,description:"",name:"isMaintainer",required:!0,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/molecules/ContributorHoverCard/contributor-hover-card.tsx#contributorhovercard"]={docgenInfo:contributorhovercard.__docgenInfo,name:"contributorhovercard",path:"components/molecules/ContributorHoverCard/contributor-hover-card.tsx#contributorhovercard"})}catch(__react_docgen_typescript_loader_error){}},"./components/molecules/DevProfile/dev-profile.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var next_link__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/link.js"),next_link__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),components_atoms_Avatar_avatar__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./components/atoms/Avatar/avatar.tsx"),lib_utils_github__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./lib/utils/github.ts"),lib_utils_truncate_string__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./lib/utils/truncate-string.ts"),components_atoms_Avatar_avatar_hover_card__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./components/atoms/Avatar/avatar-hover-card.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const DevProfile=_ref=>{let{username,hasBorder}=_ref;return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default(),{href:"/user/".concat(username),className:"flex items-center gap-2 text-light-slate-11"},__jsx("div",{className:"rounded-full md:hidden"},__jsx(components_atoms_Avatar_avatar__WEBPACK_IMPORTED_MODULE_2__.Z,{className:hasBorder?"ring-2 ring-orange-500":"",size:45,isCircle:!0,hasBorder,avatarURL:(0,lib_utils_github__WEBPACK_IMPORTED_MODULE_3__.cc)(username)})),__jsx("div",{className:"hidden rounded-full md:flex"},__jsx(components_atoms_Avatar_avatar_hover_card__WEBPACK_IMPORTED_MODULE_4__.Z,{contributor:username,repositories:[],size:"small"})),__jsx("div",null,__jsx("h1",{className:"text-light-slate-12"},username&&username.length>10?(0,lib_utils_truncate_string__WEBPACK_IMPORTED_MODULE_5__.a)(username,11):username)))};DevProfile.displayName="DevProfile";const __WEBPACK_DEFAULT_EXPORT__=DevProfile;try{devprofile.displayName="devprofile",devprofile.__docgenInfo={description:"",displayName:"devprofile",props:{username:{defaultValue:null,description:"",name:"username",required:!0,type:{name:"string"}},hasBorder:{defaultValue:null,description:"",name:"hasBorder",required:!0,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/molecules/DevProfile/dev-profile.tsx#devprofile"]={docgenInfo:devprofile.__docgenInfo,name:"devprofile",path:"components/molecules/DevProfile/dev-profile.tsx#devprofile"})}catch(__react_docgen_typescript_loader_error){}},"./lib/utils/truncate-string.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function truncateString(str,num){return void 0===str||str.length<=num||void 0===str?str:str.slice(0,num)+"..."}__webpack_require__.d(__webpack_exports__,{a:()=>truncateString})}}]);