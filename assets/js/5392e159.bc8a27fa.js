"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[6277],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var m=r.createContext({}),c=function(e){var t=r.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(m.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,m=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(a),d=n,v=p["".concat(m,".").concat(d)]||p[d]||s[d]||o;return a?r.createElement(v,l(l({ref:t},u),{},{components:a})):r.createElement(v,l({ref:t},u))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=p;var i={};for(var m in t)hasOwnProperty.call(t,m)&&(i[m]=t[m]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var c=2;c<o;c++)l[c]=a[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},69210:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));const o={sidebar_position:1,sidebar_label:"Create a Volume",title:"Create a Volume",keywords:["Volume"],Description:"Create a volume from the Volume page."},l=void 0,i={unversionedId:"volume/create-volume",id:"volume/create-volume",title:"Create a Volume",description:"Create an Empty Volume",source:"@site/docs/volume/create-volume.md",sourceDirName:"volume",slug:"/volume/create-volume",permalink:"/dev/volume/create-volume",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/docs/volume/create-volume.md",tags:[],version:"current",lastUpdatedAt:1678206083,formattedLastUpdatedAt:"Mar 7, 2023",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Create a Volume",title:"Create a Volume",keywords:["Volume"],Description:"Create a volume from the Volume page."},sidebar:"tutorialSidebar",previous:{title:"Clone VM",permalink:"/dev/vm/clone-vm"},next:{title:"Edit a Volume",permalink:"/dev/volume/edit-volume"}},m={},c=[{value:"Create an Empty Volume",id:"create-an-empty-volume",level:2},{value:"Header Section",id:"header-section",level:3},{value:"Basics Tab",id:"basics-tab",level:3},{value:"Create an Image Volume",id:"create-an-image-volume",level:2},{value:"Header Section",id:"header-section-1",level:3},{value:"Basics Tab",id:"basics-tab-1",level:3}],u={toc:c};function s(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"create-an-empty-volume"},"Create an Empty Volume"),(0,n.kt)("h3",{id:"header-section"},"Header Section"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Set the Volume ",(0,n.kt)("inlineCode",{parentName:"li"},"Name"),"."),(0,n.kt)("li",{parentName:"ol"},"(Optional) Provide a ",(0,n.kt)("inlineCode",{parentName:"li"},"Description")," for the Volume.")),(0,n.kt)("h3",{id:"basics-tab"},"Basics Tab"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Choose ",(0,n.kt)("inlineCode",{parentName:"li"},"New")," in ",(0,n.kt)("inlineCode",{parentName:"li"},"Source"),"."),(0,n.kt)("li",{parentName:"ol"},"Select an existing ",(0,n.kt)("inlineCode",{parentName:"li"},"StorageClass"),"."),(0,n.kt)("li",{parentName:"ol"},"Configure the ",(0,n.kt)("inlineCode",{parentName:"li"},"Size")," of the volume.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"create-empty-volume",src:a(73551).Z,width:"2560",height:"726"})),(0,n.kt)("h2",{id:"create-an-image-volume"},"Create an Image Volume"),(0,n.kt)("h3",{id:"header-section-1"},"Header Section"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Set the Volume ",(0,n.kt)("inlineCode",{parentName:"li"},"Name"),"."),(0,n.kt)("li",{parentName:"ol"},"(Optional) Provide a ",(0,n.kt)("inlineCode",{parentName:"li"},"Description")," for the Volume.")),(0,n.kt)("h3",{id:"basics-tab-1"},"Basics Tab"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Choose ",(0,n.kt)("inlineCode",{parentName:"li"},"VM Image")," in ",(0,n.kt)("inlineCode",{parentName:"li"},"Source"),"."),(0,n.kt)("li",{parentName:"ol"},"Select an existing ",(0,n.kt)("inlineCode",{parentName:"li"},"Image"),"."),(0,n.kt)("li",{parentName:"ol"},"Configure the ",(0,n.kt)("inlineCode",{parentName:"li"},"Size")," of the volume.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"create-image-volume",src:a(13987).Z,width:"2560",height:"726"})))}s.isMDXComponent=!0},73551:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/create-empty-volume-e64eb8d677034412d1b394dda137a8ad.png"},13987:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/create-image-volume-ad01408a1eaa69454a211039f3de6c36.png"}}]);