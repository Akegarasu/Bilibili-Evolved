!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["launch-bar/bangumi-search"]=t():e["launch-bar/bangumi-search"]=t()}(globalThis,(()=>(()=>{var e,t,i={706:e=>{function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id=706,e.exports=t},521:e=>{"use strict";e.exports="在输入番剧的 ss 号 / ep 号, 或番剧详情的 md 号时, 提供对应的跳转选项.\n"}},n={};function r(e){var t=n[e];if(void 0!==t)return t.exports;var o=n[e]={exports:{}};return i[e](o,o.exports,r),o.exports}t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,r.t=function(i,n){if(1&n&&(i=this(i)),8&n)return i;if("object"==typeof i&&i){if(4&n&&i.__esModule)return i;if(16&n&&"function"==typeof i.then)return i}var o=Object.create(null);r.r(o);var a={};e=e||[null,t({}),t([]),t(t)];for(var s=2&n&&i;"object"==typeof s&&!~e.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach((e=>a[e]=()=>i[e]));return a.default=()=>i,r.d(o,a),o},r.d=(e,t)=>{for(var i in t)r.o(t,i)&&!r.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};return(()=>{"use strict";r.d(o,{plugin:()=>i});const e=coreApis.ajax,t=e=>{const{name:t,displayName:i,description:n,indexer:r,link:o}=e;return{name:t||r,displayName:i,icon:"mdi-open-in-new",indexer:r,description:n,action:()=>{window.open(o,"_blank")},order:0}},i={name:"launchBar.actions.bangumiSearch",displayName:"搜索栏 - 番剧跳转",async setup(i){let{addData:n}=i;n("launchBar.actions",(i=>{i.push({name:"bangumiSearchProvider",getActions:async i=>{const{match:n,type:r,id:o,indexer:a}=((e,t)=>{const i=e.match(t);if(!i)return{};const n=i[1],r=i[2];return{match:i,type:n,id:r,indexer:`${n}${r}`}})(i,/^(md|ss|ep)(\d+)$/);if(!n)return[];if("md"===r){const i=await(0,e.getJson)(`https://api.bilibili.com/pgc/review/user?media_id=${o}`),{title:n}=lodash.get(i,"result.media",{});return[t({name:n,description:"番剧详情跳转",link:`https://www.bilibili.com/bangumi/media/${a}`,indexer:a})]}if("ep"===r){const i=await(0,e.getJson)(`https://api.bilibili.com/pgc/view/web/season?ep_id=${o}`),n=lodash.get(i,"result.episodes",[]).find((e=>e.id.toString()===o));return[t({name:n?.share_copy,description:"番剧跳转",link:`https://www.bilibili.com/bangumi/play/${a}`,indexer:a})]}const s=await(0,e.getJson)(`https://api.bilibili.com/pgc/view/web/season?season_id=${o}`),{title:c}=lodash.get(s,"result",{});return[t({name:c,description:"番剧跳转",link:`https://www.bilibili.com/bangumi/play/${a}`,indexer:a})]}})}))},commitHash:"fdc05db08b73a4fcf973c145748f390e73086049",coreVersion:"2.8.8",description:(()=>{const e=r(706);return{...Object.fromEntries(e.keys().map((t=>[t.match(/index\.(.+)\.md$/)[1],e(t)]))),"zh-CN":()=>Promise.resolve().then(r.t.bind(r,521,17)).then((e=>e.default))}})()}})(),o=o.plugin})()));