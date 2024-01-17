(()=>{"use strict";var deferred,leafPrototypes,getProto,inProgress,__webpack_modules__={},__webpack_module_cache__={};function __webpack_require__(moduleId){var cachedModule=__webpack_module_cache__[moduleId];if(void 0!==cachedModule)return cachedModule.exports;var module=__webpack_module_cache__[moduleId]={id:moduleId,loaded:!1,exports:{}};return __webpack_modules__[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.loaded=!0,module.exports}__webpack_require__.m=__webpack_modules__,__webpack_require__.amdO={},deferred=[],__webpack_require__.O=(result,chunkIds,fn,priority)=>{if(!chunkIds){var notFulfilled=1/0;for(i=0;i<deferred.length;i++){chunkIds=deferred[i][0],fn=deferred[i][1],priority=deferred[i][2];for(var fulfilled=!0,j=0;j<chunkIds.length;j++)(!1&priority||notFulfilled>=priority)&&Object.keys(__webpack_require__.O).every((key=>__webpack_require__.O[key](chunkIds[j])))?chunkIds.splice(j--,1):(fulfilled=!1,priority<notFulfilled&&(notFulfilled=priority));if(fulfilled){deferred.splice(i--,1);var r=fn();void 0!==r&&(result=r)}}return result}priority=priority||0;for(var i=deferred.length;i>0&&deferred[i-1][2]>priority;i--)deferred[i]=deferred[i-1];deferred[i]=[chunkIds,fn,priority]},__webpack_require__.n=module=>{var getter=module&&module.__esModule?()=>module.default:()=>module;return __webpack_require__.d(getter,{a:getter}),getter},getProto=Object.getPrototypeOf?obj=>Object.getPrototypeOf(obj):obj=>obj.__proto__,__webpack_require__.t=function(value,mode){if(1&mode&&(value=this(value)),8&mode)return value;if("object"==typeof value&&value){if(4&mode&&value.__esModule)return value;if(16&mode&&"function"==typeof value.then)return value}var ns=Object.create(null);__webpack_require__.r(ns);var def={};leafPrototypes=leafPrototypes||[null,getProto({}),getProto([]),getProto(getProto)];for(var current=2&mode&&value;"object"==typeof current&&!~leafPrototypes.indexOf(current);current=getProto(current))Object.getOwnPropertyNames(current).forEach((key=>def[key]=()=>value[key]));return def.default=()=>value,__webpack_require__.d(ns,def),ns},__webpack_require__.d=(exports,definition)=>{for(var key in definition)__webpack_require__.o(definition,key)&&!__webpack_require__.o(exports,key)&&Object.defineProperty(exports,key,{enumerable:!0,get:definition[key]})},__webpack_require__.f={},__webpack_require__.e=chunkId=>Promise.all(Object.keys(__webpack_require__.f).reduce(((promises,key)=>(__webpack_require__.f[key](chunkId,promises),promises)),[])),__webpack_require__.u=chunkId=>(({116:"atoms-FilterCard-filterCard-stories",133:"shared-LanguagePill-language-pill-stories",185:"Workspaces-TrackedReposTable-stories",249:"atoms-LayoutToggle-layout-toggle-stories",343:"atoms-RadioCheck-radio-check-stories",541:"organisms-DevCardCarousel-dev-card-carousel-stories",542:"atoms-ListNameHeader-list-name-header-stories",561:"atoms-ProgressPie-progress-pie-stories",603:"shared-AppSidebar-sidebar-menu-item-stories",609:"molecules-ContextClueCard-context-clue-card-stories",624:"organisms-DevCardWall-dev-card-wall-stories",630:"organisms-UserSettingsPage-user-settings-page-stories",679:"molecules-ReportsHistory-reports-history-stories",872:"molecules-InsightsPageListDropdown-insights-page-list-dropdown-stories",989:"atoms-Avatar-avatar-hover-card-stories",1095:"atoms-Typography-title-stories",1122:"molecules-SuperlativeSelector-superlative-selector-stories",1176:"molecules-AuthSection-auth-section-stories",1180:"atoms-Card-card-stories",1203:"organisms-Dashboard-dashboard-stories",1355:"atoms-Badge-badge-stories",1377:"molecules-ConnectionSummaryCard-connection-summary-card-stories",1382:"atoms-Select-single-select-stories",1412:"molecules-SelectReportsFilter-select-reports-filter-stories",1417:"organisms-SuggestedRepoList-suggested-repo-list-stories",1443:"shared-LanguageSwitch-language-switch-stories",1500:"shared-ButtonGroup-stories",1537:"atoms-InsightBadge-insight-badge-stories",1565:"molecules-HighlightInput-highlight-input-stories",1816:"atoms-Avatar-avatar-stories",1851:"molecules-SuggestedRepo-suggested-repo-stories",1949:"molecules-NewsletterForm-newsletter-form-stories",2021:"atoms-Radio-radio-stories",2049:"atoms-ToggleGroup-toggle-group-stories",2054:"atoms-Error-error-stories",2098:"atoms-Sparkline-sparkline-stories",2168:"molecules-FavoriteRepos-favorite-repos-stories",2187:"organisms-Waitlist-waitlist-stories",2207:"molecules-PieChart-pie-chart-stories",2239:"molecules-AvatarRoll-avatar-roll-stories",2248:"organisms-RepositoriesCart-repositories-cart-stories",2290:"organisms-Header-header-stories",2320:"molecules-CardRepoList-card-repo-list-stories",2321:"molecules-ContributorProfileHeader-contributor-profile-header-stories",2371:"molecules-CardLineChart-card-line-chart-stories",2421:"organisms-ToolList-tool-nav-stories",2505:"molecules-NivoScatterChart-nivo-scatter-chart-stories",2544:"molecules-RepositoryResult-repository-result-stories",2698:"molecules-PullRequestTable-pull-request-table-stories",2877:"organisms-Reports-reports-stories",3039:"organisms-Footer-footer-stories",3079:"molecules-PaginationGotoPage-pagination-goto-page-stories",3289:"molecules-ComponentDateFilter-component-date-filter-stories",3396:"organisms-Contributors-contributors-stories",3421:"molecules-Calendar-calendar-stories",3442:"atoms-TopContributorCard-top-user-card-stories",3636:"atoms-Typography-text-stories",3645:"atoms-PillSelector-pill-selector-stories",3938:"organisms-TopNav-top-nav-stories",3940:"molecules-DropdownList-dropdown-list-stories",4031:"molecules-AnnouncementCard-announcement-card-stories",4182:"Graphs-ContributionsTreemap-contributions-treemap-stories",4247:"molecules-PullRequestSocialCard-pull-request-social-card-stories",4256:"organisms-ToolsDisplay-tools-display-stories",4357:"atoms-PullRequestOverviewChart-pull-request-overview-chart-stories",4481:"molecules-DevProfile-dev-profile-stories",4594:"organisms-RepositoriesTable-repositories-table-stories",4612:"atoms-SkeletonLoader-skeleton-wrapper-stories",4636:"atoms-ContextFilterButton-context-filter-button-stories",4709:"atoms-TableTitle-table-title-stories",4717:"atoms-Fab-fab-stories",4730:"molecules-StackedAvatar-stacked-avatar-stories",4926:"molecules-WaitlistButton-wailtlist-button-stories",5024:"molecules-ReposoitoryCartItem-repository-cart-item-stories",5117:"atoms-UserCard-user-card-stories",5160:"atoms-InsightsPageListItem-insights-page-list-item-stories",5202:"atoms-Select-select-stories",5207:"molecules-Pagination-pagination-stories",5319:"molecules-ContributionsEvolution-contributions-evolution-card-stories",5422:"molecules-HighlightCard-highlight-card-stories",5468:"molecules-ListCard-list-card-stories",5513:"atoms-NotificationsCard-notification-card-stories",5537:"Graphs-MostUsedLanguagesGraph-most-used-languages-graph-stories",5543:"atoms-Search-search-stories",5603:"molecules-InsightPageTable-insight-page-table-stories",5645:"molecules-RecommendedRepoCard-recommended-repo-card-stories",5690:"organisms-ContributorProfilePage-contributor-profile-page-stories",5859:"molecules-CardProfile-card-profile-stories",5887:"atoms-Button-button-stories",6059:"molecules-AuthContentWrapper-auth-content-wrapper-stories",6289:"molecules-RepoCardProfile-repo-card-profile-stories",6313:"molecules-ContributorHighlight-contributor-highlight-card-stories",6418:"molecules-FeaturedHighlightsPanel-featured-highlights-panel-stories",6424:"atoms-EChartWrapper-echart-wrapper-stories",6441:"molecules-FilterCardSelect-filter-card-select-stories",6589:"organisms-LoginTopNav-login-top-nav-stories",6749:"organisms-SearchDialog-search-dialog-stories",6786:"molecules-PaginationResults-pagination-result-stories",6848:"molecules-HighlightsFeedCard-highlights-filter-card-stories",6850:"atoms-SpinLoader-spinner-stories",6974:"molecules-DevCard-dev-card-stories",7028:"atoms-Select-multi-select-stories",7124:"molecules-TableRepositoryName-table-repository-name-stories",7146:"molecules-MostActiveContributorsCard-most-active-contributors-card-stories",7164:"atoms-Pill-pill-stories",7184:"atoms-Typography-typography-wrapper-stories",7286:"molecules-SearchResults-search-result-stories",7310:"atoms-IconButton-icon-button-stories",7343:"atoms-TextInput-text-input-stories",7352:"Workspaces-TrackedRepoWizard-PickReposOrOrgStep-stories",7361:"molecules-ConnectionCard-connection-card-stories",7504:"molecules-DashboardScatterChart-dashboard-scatter-chart-stories",7507:"molecules-PullRequestOverview-pull-request-overview-stories",7636:"molecules-ContributorListTableRow-contributor-list-table-row-stories",7670:"molecules-InsightPageCard-insight-page-card-stories",7790:"molecules-PageHeader-page-header-stories",7828:"molecules-TopContributorsPanel-top-contributors-panel-stories",7871:"molecules-ContributorHoverCard-contributor-hover-card-stories",7967:"molecules-ComponentHeader-component-header-stories",8189:"molecules-ProfileLanguageChart-profile-language-chart-stories",8490:"molecules-HeaderLogo-header-logo-stories",8515:"atoms-FilterChip-filter-chip-stories",8570:"atoms-CartIllustration-cart-illustration-stories",8668:"molecules-TeamMemberRow-team-member-row-stories",8695:"molecules-TeamMembersConfig-team-members-config-stories",8794:"organisms-ContributorCard-contributor-card-stories",8848:"atoms-ContextFilterOption-context-filter-option-stories",9151:"atoms-Checkbox-checkbox-stories",9156:"molecules-OnboardingButton-onboarding-button-stories",9319:"molecules-CardHorizontalBarChart-card-horizontal-bar-stories",9393:"atoms-ContextThumbnail-context-thumbnail-stories",9433:"atoms-ScrollArea-scroll-area-stories",9437:"molecules-ComponentGradient-component-gradient-stories",9480:"molecules-HighlightPrompt-highlight-prompt-stories",9561:"organisms-Repositories-repository-stories",9572:"molecules-FavoriteRepoCard-favorite-repo-card-stories",9659:"templates-Loader-loader-stories",9671:"molecules-ContributionsEvolutionByTypeCard-contributions-evolution-by-type-stories",9752:"atoms-ToggleOption-toggle-option-stories",9912:"atoms-FavoriteSelector-favorite-selector-stories",9916:"atoms-ToggleSwitch-toggle-switch-stories",9944:"atoms-Select-limit-select-stories",9983:"molecules-ContributorFilterDropdown-contributor-filter-dropdown-stories"}[chunkId]||chunkId)+"."+{110:"1e832101",116:"c52765d6",133:"1aefe362",151:"c9d59fcf",155:"4085cdc2",185:"d87e57cd",231:"55d89cb5",249:"d817f57a",343:"99bfb7b1",365:"7b535635",541:"9ff2e7be",542:"8aecd79d",561:"d4b175d9",600:"b64416d1",603:"ca9baf40",609:"7b5706be",624:"a5616710",630:"67cd2952",658:"b0f61569",662:"7907c3cf",679:"0004c9c9",872:"9b9f358a",989:"f165bae3",1095:"9d7405c1",1122:"34b5ada3",1163:"dd94e98d",1176:"604329d7",1180:"f8bed12a",1181:"b0a95ed9",1203:"be8eb072",1341:"2aa3e7cf",1355:"a68b41f7",1377:"b63596c3",1382:"1e675065",1412:"fbc5b921",1417:"c12c2419",1443:"d2854de9",1495:"c242bc54",1500:"e626da8e",1511:"c375f49f",1537:"38b996c1",1565:"950d1936",1664:"c38b688f",1729:"75325062",1791:"573d649b",1816:"3b92ce71",1851:"b9ffaa6c",1949:"49179b28",2021:"0c678b18",2049:"ce93143c",2054:"0d37bb14",2098:"e6770d35",2168:"39c65a59",2187:"e79eb5fe",2207:"d14e6d07",2239:"1dc2fef0",2248:"4e565f42",2290:"f5ef003b",2320:"acfd9ba5",2321:"fb7828d3",2371:"d8a1b4e2",2421:"389ce368",2494:"a97ea8f4",2505:"c70f5747",2544:"4fde10de",2568:"2876f620",2698:"757f2a28",2717:"35645bd6",2750:"a5ed41ad",2820:"ebc43a6c",2829:"232da08d",2877:"7fdeb3f3",2966:"fc9e78a1",3022:"41d44d19",3039:"0b82668e",3079:"d2442648",3104:"b0c52953",3289:"aa1c6157",3396:"c2159e3c",3421:"11efda1d",3426:"183e88b4",3442:"798a188b",3636:"f2023c43",3645:"5412a31c",3750:"09adecde",3804:"8c0440ca",3854:"40d97b42",3938:"c400550b",3940:"3b65fa4c",3990:"b3e2e41c",4031:"894fd3b1",4182:"7da09bfe",4247:"0e4c519b",4256:"56cdf435",4357:"17566a0c",4416:"783df7d1",4430:"994c9b17",4454:"9abe991e",4481:"1ab01a7c",4578:"d9dc3c1e",4579:"8de9e0bb",4594:"f6058aa7",4612:"92ef02e9",4636:"bf77f03d",4709:"518e5950",4717:"e68fb6f9",4730:"03b0a6b6",4753:"4fd274e6",4903:"f8e03d0a",4926:"9cb6e987",5024:"c369e071",5117:"2832225e",5141:"adc9b09a",5155:"19534e28",5160:"555d82a5",5202:"52521011",5207:"e8f82328",5291:"bea6d502",5312:"1af12f6e",5319:"2bc014eb",5422:"a7b6863d",5434:"5d4a3d2e",5468:"80d0e31e",5513:"c023ef59",5529:"a372dc46",5537:"1666e256",5543:"d874edb1",5578:"f8398220",5603:"729f8b0f",5645:"458cfefe",5690:"cfa1cdaf",5859:"bd6f0d95",5887:"a0b2a086",5901:"73109364",5940:"a1f17a5a",6059:"5184bdf9",6289:"f39c167d",6313:"74c69d3a",6398:"1ad96f6a",6418:"28947f8a",6424:"812ad3c2",6441:"fdedf0b5",6453:"c53a54f8",6498:"79df144a",6589:"cee201c0",6607:"16dea626",6675:"1be0730f",6749:"6f8905a6",6786:"f4121c2f",6814:"5fd3a6e6",6831:"56615e7e",6848:"1cadb2c5",6850:"fc38c171",6893:"396600e1",6942:"16ed4f23",6974:"fa610a22",7028:"e7071794",7106:"f844c6b6",7124:"6ea6eb73",7146:"59dd9fe1",7164:"7f57ede7",7184:"28abbfc9",7286:"f5eda4d5",7310:"f138e7bf",7326:"ded8b986",7343:"d4f53c52",7352:"cb999aee",7361:"e7ec9fed",7397:"9bcd543f",7504:"01a2dd72",7507:"0938a9e8",7516:"013bc5eb",7636:"9e369e6e",7637:"5005021e",7643:"f628ff53",7670:"396d44e6",7790:"40be0299",7828:"920e3faa",7837:"f24edf8c",7871:"6b144be8",7901:"7eb236cb",7902:"2dbac89b",7967:"3399037c",8020:"4390a46f",8177:"2e814da8",8189:"422dd4e2",8193:"b9db6b16",8197:"2cfbec0f",8284:"88e907b6",8490:"c0d24aa5",8515:"95578490",8570:"9fa7bb51",8608:"8f52e03c",8662:"55a65a4d",8663:"bef36a09",8668:"3b3c7a72",8695:"6547768b",8794:"83f420dc",8797:"d5d3ea78",8821:"2c57683d",8848:"12be9355",8898:"6035b034",9115:"4e9095af",9151:"84e7a4ce",9156:"496e21cf",9274:"5658b7f0",9319:"12e8b23a",9352:"683e1379",9365:"79bd9a22",9393:"0895d319",9433:"3be1e748",9437:"cbaa533b",9480:"fc34a436",9560:"1082833c",9561:"4a924a1c",9572:"85b0bc55",9583:"1aa5af4b",9659:"2bbf42e1",9670:"c84a3fd4",9671:"10ef2c7e",9680:"fd82c701",9752:"42c31753",9850:"0a46866b",9912:"56311dac",9916:"46512622",9924:"dcc7129e",9930:"4afc10f4",9944:"0a728af6",9983:"0690afb2"}[chunkId]+".iframe.bundle.js"),__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.o=(obj,prop)=>Object.prototype.hasOwnProperty.call(obj,prop),inProgress={},__webpack_require__.l=(url,done,key,chunkId)=>{if(inProgress[url])inProgress[url].push(done);else{var script,needAttach;if(void 0!==key)for(var scripts=document.getElementsByTagName("script"),i=0;i<scripts.length;i++){var s=scripts[i];if(s.getAttribute("src")==url||s.getAttribute("data-webpack")=="@open-sauced/insights:"+key){script=s;break}}script||(needAttach=!0,(script=document.createElement("script")).charset="utf-8",script.timeout=120,__webpack_require__.nc&&script.setAttribute("nonce",__webpack_require__.nc),script.setAttribute("data-webpack","@open-sauced/insights:"+key),script.src=url),inProgress[url]=[done];var onScriptComplete=(prev,event)=>{script.onerror=script.onload=null,clearTimeout(timeout);var doneFns=inProgress[url];if(delete inProgress[url],script.parentNode&&script.parentNode.removeChild(script),doneFns&&doneFns.forEach((fn=>fn(event))),prev)return prev(event)},timeout=setTimeout(onScriptComplete.bind(null,void 0,{type:"timeout",target:script}),12e4);script.onerror=onScriptComplete.bind(null,script.onerror),script.onload=onScriptComplete.bind(null,script.onload),needAttach&&document.head.appendChild(script)}},__webpack_require__.r=exports=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(exports,"__esModule",{value:!0})},__webpack_require__.nmd=module=>(module.paths=[],module.children||(module.children=[]),module),__webpack_require__.p="",(()=>{__webpack_require__.b=document.baseURI||self.location.href;var installedChunks={1303:0};__webpack_require__.f.j=(chunkId,promises)=>{var installedChunkData=__webpack_require__.o(installedChunks,chunkId)?installedChunks[chunkId]:void 0;if(0!==installedChunkData)if(installedChunkData)promises.push(installedChunkData[2]);else if(1303!=chunkId){var promise=new Promise(((resolve,reject)=>installedChunkData=installedChunks[chunkId]=[resolve,reject]));promises.push(installedChunkData[2]=promise);var url=__webpack_require__.p+__webpack_require__.u(chunkId),error=new Error;__webpack_require__.l(url,(event=>{if(__webpack_require__.o(installedChunks,chunkId)&&(0!==(installedChunkData=installedChunks[chunkId])&&(installedChunks[chunkId]=void 0),installedChunkData)){var errorType=event&&("load"===event.type?"missing":event.type),realSrc=event&&event.target&&event.target.src;error.message="Loading chunk "+chunkId+" failed.\n("+errorType+": "+realSrc+")",error.name="ChunkLoadError",error.type=errorType,error.request=realSrc,installedChunkData[1](error)}}),"chunk-"+chunkId,chunkId)}else installedChunks[chunkId]=0},__webpack_require__.O.j=chunkId=>0===installedChunks[chunkId];var webpackJsonpCallback=(parentChunkLoadingFunction,data)=>{var moduleId,chunkId,chunkIds=data[0],moreModules=data[1],runtime=data[2],i=0;if(chunkIds.some((id=>0!==installedChunks[id]))){for(moduleId in moreModules)__webpack_require__.o(moreModules,moduleId)&&(__webpack_require__.m[moduleId]=moreModules[moduleId]);if(runtime)var result=runtime(__webpack_require__)}for(parentChunkLoadingFunction&&parentChunkLoadingFunction(data);i<chunkIds.length;i++)chunkId=chunkIds[i],__webpack_require__.o(installedChunks,chunkId)&&installedChunks[chunkId]&&installedChunks[chunkId][0](),installedChunks[chunkId]=0;return __webpack_require__.O(result)},chunkLoadingGlobal=self.webpackChunk_open_sauced_insights=self.webpackChunk_open_sauced_insights||[];chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null,0)),chunkLoadingGlobal.push=webpackJsonpCallback.bind(null,chunkLoadingGlobal.push.bind(chunkLoadingGlobal))})(),__webpack_require__.nc=void 0})();