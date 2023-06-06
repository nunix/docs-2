"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[1467],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},v=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),v=s(n),m=i,d=v["".concat(c,".").concat(m)]||v[m]||u[m]||a;return n?r.createElement(d,o(o({ref:t},p),{},{components:n})):r.createElement(d,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=v;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}v.displayName="MDXCreateElement"},54267:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(87462),i=(n(67294),n(3905));const a={sidebar_position:2,sidebar_label:"\u5177\u6709 VLAN \u611f\u77e5\u4ea4\u6362\u673a\u7684\u591a\u4e2a NIC",title:"\u5177\u6709 VLAN \u611f\u77e5\u4ea4\u6362\u673a\u7684\u591a\u4e2a NIC",keywords:["Harvester","harvester","Rancher","rancher","\u7f51\u7edc","network","VLAN","vlan"],Description:"Harvester \u6784\u5efa\u5728 Kubernetes \u4e4b\u4e0a\uff0c\u800c Kubernetes \u4f7f\u7528 [CNI](https://github.com/containernetworking/cni) \u4f5c\u4e3a\u7f51\u7edc\u63d0\u4f9b\u5546\u548c Kubernetes Pod \u7f51\u7edc\u4e4b\u95f4\u7684\u63a5\u53e3\u3002\u56e0\u6b64\uff0c\u6211\u4eec\u4e5f\u57fa\u4e8e CNI \u5b9e\u73b0 Harvester \u7f51\u7edc\u3002\u6b64\u5916\uff0cHarvester UI \u96c6\u6210\u4e86\u7f51\u7edc\u914d\u7f6e\uff0c\u6765\u5b9e\u73b0\u7528\u6237\u53cb\u597d\u7684\u865a\u62df\u673a\u7f51\u7edc\u914d\u7f6e\u3002"},o=void 0,l={unversionedId:"networking/best-practice/multiple-nics-vlan-aware-switch",id:"version-v1.0/networking/best-practice/multiple-nics-vlan-aware-switch",title:"\u5177\u6709 VLAN \u611f\u77e5\u4ea4\u6362\u673a\u7684\u591a\u4e2a NIC",description:"\u5728\u6b64\u201cVLAN \u611f\u77e5\u201d\u4ea4\u6362\u673a\u914d\u7f6e\u7684\u6700\u4f73\u5b9e\u8df5\u6307\u5357\u4e2d\uff0c\u6211\u4eec\u5c06\u4ecb\u7ecd\u5e38\u89c1\u573a\u666f\u4e0b\u7684 Harvester VLAN \u7f51\u7edc\u548c\u5916\u90e8\u4ea4\u6362\u673a\u914d\u7f6e\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.0/networking/best-practice/multiple-nics-vlan-aware-switch.md",sourceDirName:"networking/best-practice",slug:"/networking/best-practice/multiple-nics-vlan-aware-switch",permalink:"/zh/v1.0/networking/best-practice/multiple-nics-vlan-aware-switch",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.0/networking/best-practice/multiple-nics-vlan-aware-switch.md",tags:[],version:"v1.0",lastUpdatedAt:1669342702,formattedLastUpdatedAt:"2022\u5e7411\u670825\u65e5",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"\u5177\u6709 VLAN \u611f\u77e5\u4ea4\u6362\u673a\u7684\u591a\u4e2a NIC",title:"\u5177\u6709 VLAN \u611f\u77e5\u4ea4\u6362\u673a\u7684\u591a\u4e2a NIC",keywords:["Harvester","harvester","Rancher","rancher","\u7f51\u7edc","network","VLAN","vlan"],Description:"Harvester \u6784\u5efa\u5728 Kubernetes \u4e4b\u4e0a\uff0c\u800c Kubernetes \u4f7f\u7528 [CNI](https://github.com/containernetworking/cni) \u4f5c\u4e3a\u7f51\u7edc\u63d0\u4f9b\u5546\u548c Kubernetes Pod \u7f51\u7edc\u4e4b\u95f4\u7684\u63a5\u53e3\u3002\u56e0\u6b64\uff0c\u6211\u4eec\u4e5f\u57fa\u4e8e CNI \u5b9e\u73b0 Harvester \u7f51\u7edc\u3002\u6b64\u5916\uff0cHarvester UI \u96c6\u6210\u4e86\u7f51\u7edc\u914d\u7f6e\uff0c\u6765\u5b9e\u73b0\u7528\u6237\u53cb\u597d\u7684\u865a\u62df\u673a\u7f51\u7edc\u914d\u7f6e\u3002"},sidebar:"tutorialSidebar",previous:{title:"\u6982\u8ff0",permalink:"/zh/v1.0/networking/best-practice/overview"},next:{title:"\u5177\u6709\u975e VLAN \u611f\u77e5\u4ea4\u6362\u673a\u7684\u591a\u4e2a NIC",permalink:"/zh/v1.0/networking/best-practice/multiple-nics-non-vlan-aware-switch"}},c={},s=[{value:"\u67b6\u6784",id:"\u67b6\u6784",level:2},{value:"\u5916\u90e8\u4ea4\u6362\u673a\u914d\u7f6e",id:"\u5916\u90e8\u4ea4\u6362\u673a\u914d\u7f6e",level:2},{value:"\u5728 Harvester \u4e2d\u521b\u5efa VLAN \u7f51\u7edc",id:"\u5728-harvester-\u4e2d\u521b\u5efa-vlan-\u7f51\u7edc",level:2},{value:"\u5c06 VM \u8fde\u63a5\u5230 Harvester \u4e3b\u673a\u7684\u5b50\u7f51",id:"\u5c06-vm-\u8fde\u63a5\u5230-harvester-\u4e3b\u673a\u7684\u5b50\u7f51",level:3},{value:"\u5c06 VM \u8fde\u63a5\u5230\u7279\u5b9a VLAN \u7f51\u7edc",id:"\u5c06-vm-\u8fde\u63a5\u5230\u7279\u5b9a-vlan-\u7f51\u7edc",level:3}],p={toc:s};function u(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u5728\u6b64\u201cVLAN \u611f\u77e5\u201d\u4ea4\u6362\u673a\u914d\u7f6e\u7684\u6700\u4f73\u5b9e\u8df5\u6307\u5357\u4e2d\uff0c\u6211\u4eec\u5c06\u4ecb\u7ecd\u5e38\u89c1\u573a\u666f\u4e0b\u7684 Harvester VLAN \u7f51\u7edc\u548c\u5916\u90e8\u4ea4\u6362\u673a\u914d\u7f6e\u3002"),(0,i.kt)("h2",{id:"\u67b6\u6784"},"\u67b6\u6784"),(0,i.kt)("p",null,"\u786c\u4ef6\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u4e09\u53f0\u5e26\u53cc\u7aef\u53e3\u7f51\u5361\u7684 Harvester Server\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u4e00\u4e2a\u6216\u591a\u4e2a VLAN \u611f\u77e5\u4ea4\u6362\u673a\u3002\u6211\u4eec\u5c06\u4f7f\u7528\u7c7b\u4f3c Cisco \u7684\u914d\u7f6e\u4f5c\u4e3a\u793a\u4f8b\u3002")),(0,i.kt)("p",null,"\u7f51\u7edc\u89c4\u683c\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5047\u8bbe Harvester \u4e3b\u673a\u7684\u5b50\u7f51\u5728 VLAN 100 \u4e2d\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u5047\u8bbe VM \u5728 VLAN 101-200 \u4e2d\u3002")),(0,i.kt)("p",null,"\u5e03\u7ebf\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Harvester Server \u4ece\u7aef\u53e3 ",(0,i.kt)("inlineCode",{parentName:"li"},"1")," \u5230\u7aef\u53e3 ",(0,i.kt)("inlineCode",{parentName:"li"},"6")," \u8fde\u63a5\u5230\u4ea4\u6362\u673a\u3002")),(0,i.kt)("p",null,"\u4e0b\u56fe\u8bf4\u660e\u4e86\u672c\u6307\u5357\u6240\u7528\u7684\u5e03\u7ebf\uff1a"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"mulitple-nics-vlan-aware.png",src:n(4574).Z,width:"921",height:"506"})),(0,i.kt)("h2",{id:"\u5916\u90e8\u4ea4\u6362\u673a\u914d\u7f6e"},"\u5916\u90e8\u4ea4\u6362\u673a\u914d\u7f6e"),(0,i.kt)("p",null,"\u5bf9\u4e8e\u5916\u90e8\u4ea4\u6362\u673a\u7684\u7f51\u7edc\uff0c\u6211\u4eec\u5c06\u4f7f\u7528\u7c7b\u4f3c Cisco \u7684\u914d\u7f6e\u4f5c\u4e3a\u793a\u4f8b\u3002\u4f60\u53ef\u4ee5\u5c06\u4ee5\u4e0b\u914d\u7f6e\u5e94\u7528\u4e8e\u4f60\u7684\u4ea4\u6362\u673a\uff1a"),(0,i.kt)("p",null,"\u5bf9\u4e8e ",(0,i.kt)("inlineCode",{parentName:"p"},"harvester-mgmt")," \u7aef\u53e3\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"switch# config terminal\nswitch(config)# interface ethernet1/<Port Number>\nswitch(config-if)# switchport\nswitch(config-if)# switchport mode access\nswitch(config-if)# switchport access 100\nswitch(config-if)# no shutdown\nswitch(config-if)# end\nswitch# copy running-config startup-config\n")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u4f60\u9700\u8981\u907f\u514d\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"harvester-mgmt")," \u4f5c\u4e3a VLAN \u7f51\u7edc\u63a5\u53e3\u3002\u6b64\u8bbe\u7f6e\u53ea\u5141\u8bb8 ",(0,i.kt)("inlineCode",{parentName:"p"},"harvester-mgmt")," \u540c\u4e00\u5b50\u7f51\u4e2d\u7684\u6d41\u91cf\uff0c\u4e0d\u5141\u8bb8\u5176\u4ed6 VLAN \u6d41\u91cf\u3002")),(0,i.kt)("p",null,"\u5bf9\u4e8e VLAN \u7f51\u7edc\u7aef\u53e3\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"switch# config terminal\nswitch(config)# interface ethernet1/<Port Number>\nswitch(config-if)# switchport\nswitch(config-if)# switchport mode trunk\nswitch(config-if)# switchport trunk allowed vlan 100-200\nswitch(config-if)# switchport trunk native vlan 1\nswitch(config-if)# no shutdown\nswitch(config-if)# end\nswitch# copy running-config startup-config\n")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"\u6211\u4eec\u4f7f\u7528 VLAN \u4e2d\u7ee7\u8bbe\u7f6e\u6765\u8bbe\u7f6e VLAN \u7f51\u7edc\u7684\u7f51\u7edc\u7aef\u53e3\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u4f60\u53ef\u4ee5\u7b80\u5355\u5730\u4e3a Harvester VLAN \u7f51\u7edc\u4e2d\u7684 VM \u8bbe\u7f6e VLAN 100\uff0c\u4ece\u800c\u8fde\u63a5\u5230 ",(0,i.kt)("inlineCode",{parentName:"p"},"harvester-mgmt")," \u7684\u540c\u4e00\u5b50\u7f51\u3002")),(0,i.kt)("h2",{id:"\u5728-harvester-\u4e2d\u521b\u5efa-vlan-\u7f51\u7edc"},"\u5728 Harvester \u4e2d\u521b\u5efa VLAN \u7f51\u7edc"),(0,i.kt)("p",null,"\u4f60\u53ef\u4ee5\u524d\u5f80 ",(0,i.kt)("strong",{parentName:"p"},"Advanced > Networks")," \u9875\u9762\uff0c\u7136\u540e\u70b9\u51fb ",(0,i.kt)("strong",{parentName:"p"},"Create")," \u6309\u94ae\uff0c\u6765\u521b\u5efa\u4e00\u4e2a\u65b0\u7684 VLAN \u7f51\u7edc\u3002"),(0,i.kt)("p",null,"\u6307\u5b9a\u4f60\u8981\u4e3a VLAN \u7f51\u7edc\u8bbe\u7f6e\u7684\u540d\u79f0\u548c VLAN ID",(0,i.kt)("small",null,"\uff08\u5982\u679c\u4f60\u914d\u7f6e\u4e86 ",(0,i.kt)("a",{parentName:"p",href:"/zh/v1.0/rancher/virtualization-management#%E5%A4%9A%E7%A7%9F%E6%88%B7"},"Rancher \u591a\u79df\u6237"),"\uff0c\u4f60\u53ef\u4ee5\u5728\u4e0d\u540c\u7684\u547d\u540d\u7a7a\u95f4\u4e2d\u6307\u5b9a\u76f8\u540c\u7684 VLAN ID\uff09"),"\uff1a"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"create-vlan-network.png",src:n(20310).Z,width:"3472",height:"1132"})),(0,i.kt)("h3",{id:"\u5c06-vm-\u8fde\u63a5\u5230-harvester-\u4e3b\u673a\u7684\u5b50\u7f51"},"\u5c06 VM \u8fde\u63a5\u5230 Harvester \u4e3b\u673a\u7684\u5b50\u7f51"),(0,i.kt)("p",null,"\u5b8c\u6210\u4e0a\u4e00\u8282\u4e2d\u7684\u914d\u7f6e\u540e\uff0c\u5916\u90e8\u4ea4\u6362\u673a\u4f1a\u5c06\u672a\u6807\u8bb0\u7684\u7f51\u7edc\u6d41\u91cf\u53d1\u9001\u5230 Harvester \u4e3b\u673a\u7684\u5b50\u7f51\u3002\u5728 Harvester \u4e2d\uff0c\u672a\u6807\u8bb0\u7684\u6d41\u91cf\u5728 VLAN 1 \u4e2d\u63a5\u6536\u3002"),(0,i.kt)("p",null,"\u56e0\u6b64\uff0c\u5982\u679c\u9700\u8981 VM \u8fde\u63a5\u5230 VLAN ID 1\uff0c\u5219\u4e5f\u9700\u8981\u5728 Harvester \u4e2d\u521b\u5efa VLAN ID 1 \u7f51\u7edc\u3002"),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"\u5f3a\u70c8\u5efa\u8bae\u4e0d\u8981\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\u4f7f\u7528 VLAN 1\u3002")),(0,i.kt)("h3",{id:"\u5c06-vm-\u8fde\u63a5\u5230\u7279\u5b9a-vlan-\u7f51\u7edc"},"\u5c06 VM \u8fde\u63a5\u5230\u7279\u5b9a VLAN \u7f51\u7edc"),(0,i.kt)("p",null,"\u4f60\u9700\u8981\u521b\u5efa\u4e00\u4e2a\u5177\u6709\u7279\u5b9a VLAN ID \u7684 VLAN \u7f51\u7edc\uff0c\u5e76\u5c06 VM \u5173\u8054\u5230\u8be5 VLAN \u7f51\u7edc\u3002"),(0,i.kt)("p",null,"\u6709\u5173 Harvester \u7f51\u7edc\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,i.kt)("a",{parentName:"p",href:"/zh/v1.0/networking/harvester-network"},"\u6b64\u9875\u9762"),"\u3002"))}u.isMDXComponent=!0},20310:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/create-network-2288440fcd22445ded421874d1ddcd24.png"},4574:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/mulitple-nics-vlan-aware-eed7b30c0fa0ca9a3c0b590f6f17d735.png"}}]);