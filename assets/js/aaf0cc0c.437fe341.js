"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[95182],{740128:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var i=n(785893),a=n(511151);const o={id:"saas-connectivity",title:"SaaS Connectivity",pagination_label:"SaaS Connectivity",sidebar_label:"SaaS Connectivity",sidebar_position:4,sidebar_class_name:"saasConnectivity",keywords:["connectivity","connectors"],description:"Cloud-based connectivity without VAs.",slug:"/connectivity/saas-connectivity",tags:["Connectivity"]},c=void 0,s={id:"connectivity/saas-connectivity/saas-connectivity",title:"SaaS Connectivity",description:"Cloud-based connectivity without VAs.",source:"@site/docs/connectivity/saas-connectivity/index.md",sourceDirName:"connectivity/saas-connectivity",slug:"/connectivity/saas-connectivity",permalink:"/docs/connectivity/saas-connectivity",draft:!1,unlisted:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/connectivity/saas-connectivity/index.md",tags:[{inline:!0,label:"Connectivity",permalink:"/docs/tags/connectivity"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1724791322e3,sidebarPosition:4,frontMatter:{id:"saas-connectivity",title:"SaaS Connectivity",pagination_label:"SaaS Connectivity",sidebar_label:"SaaS Connectivity",sidebar_position:4,sidebar_class_name:"saasConnectivity",keywords:["connectivity","connectors"],description:"Cloud-based connectivity without VAs.",slug:"/connectivity/saas-connectivity",tags:["Connectivity"]},sidebar:"openApiSidebar",previous:{title:"Connectivity",permalink:"/docs/connectivity"},next:{title:"Prerequisites",permalink:"/docs/connectivity/saas-connectivity/prerequisites"}},r={},d=[{value:"What Are Connectors",id:"what-are-connectors",level:2},{value:"Why We Are Introducing SaaS Connectivity",id:"why-we-are-introducing-saas-connectivity",level:2},{value:"Architecture of SaaS Connectivity",id:"architecture-of-saas-connectivity",level:2},{value:"Connectivity Encryption",id:"connectivity-encryption",level:2}];function l(e){const t={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"SaaS Connectivity is a cloud based connector runtime that makes developing and deploying web service connectors easier than Connector 1.0 does. However, because the cloud hosts SaaS Connectivity, not a Virtual Appliance (VA), SaaS Connectivity is limited in the types of applications it can connect to. For example, you cannot use SaaS Connectivity to connect to on-prem services that can only communicate within an intranet (no public internet access). This excludes JDBC and Mainframe applications, to name a few."}),"\n",(0,i.jsx)("div",{class:"text--center",children:(0,i.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/1WPO7t0j1oc?si=RZjNJYUrDtKLmbvB",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0})}),"\n",(0,i.jsx)(t.h2,{id:"what-are-connectors",children:"What Are Connectors"}),"\n",(0,i.jsx)(t.p,{children:"Connectors are the bridges between the SailPoint Identity Security Cloud (ISC) SaaS platform and the source systems that ISC needs to communicate with and aggregate data from. An example of a source system ISC may need to communicate with would be an Oracle HR system or GitHub. In these cases, ISC synchronizes data between systems to ensure account entitlements and state are correct through the organization."}),"\n",(0,i.jsx)(t.h2,{id:"why-we-are-introducing-saas-connectivity",children:"Why We Are Introducing SaaS Connectivity"}),"\n",(0,i.jsx)(t.p,{children:"The primary driver for indroducing the SaaS Connectivity framework is to allow a way to connect to other cloud based sources in a truly SaaS architecture, without the need to rely on a VA. There are also other benefits that come with the SaaS Connectivity framework:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Ability to develop, debug and test custom connectors locally without any dependencies on Identity Security Cloud"}),"\n",(0,i.jsx)(t.li,{children:"Features to customize the user interface when configuring the connector that are specific to the source"}),"\n",(0,i.jsx)(t.li,{children:"Support for more modern languages and frameworks"}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"architecture-of-saas-connectivity",children:"Architecture of SaaS Connectivity"}),"\n",(0,i.jsx)(t.p,{children:"VA connectors always communicate with external sources through the Virtual Appliance (VA) as seen in the diagram below:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Old Connectivity",src:n(873916).Z+"",width:"776",height:"589"})}),"\n",(0,i.jsx)(t.p,{children:"The new Cloud connectors work differently - they run on the ISC platform instead:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"New Connectivity",src:n(739936).Z+"",width:"535",height:"465"})}),"\n",(0,i.jsx)(t.p,{children:"With both SaaS connectivity and traditional VA connectivity in place, you can have the best of both worlds. Below is a new diagram showing both of them working together to leverage both on-prem and cloud based sources."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"SaaS Connectivity and On Prem",src:n(496394).Z+"",width:"924",height:"604"})}),"\n",(0,i.jsx)(t.h2,{id:"connectivity-encryption",children:"Connectivity Encryption"}),"\n",(0,i.jsxs)(t.p,{children:["Any direct connectors that specify a virtual appliance (VA) use ",(0,i.jsx)(t.a,{href:"https://community.sailpoint.com/t5/Lighthouse/Protecting-Sensitive-Data-with-Zero-Knowledge-Encryption/ta-p/79657?attachment-id=452",children:"Zero Knowledge Encryption"})," schemes with an RSA 2048-bit asymmetric key pair: there is a private key on the VA for decryption and a public key in the cloud (as part of the VA cluster) for encryption."]}),"\n",(0,i.jsxs)(t.p,{children:["SaaS connectors cannot operate the same way because they do not communicate through VA clusters. Despite this, SaaS connectors can still leverage the asymmetric key pair scheme \u2014 the key pair simply resides in the cloud instead of on the VA. The key pair is only accessible to the Connectivity service and is managed to SailPoint standards for credential storage. Whenever you are storing secret data, use the ",(0,i.jsx)(t.code,{children:"secret"})," or ",(0,i.jsx)(t.code,{children:"secrettextarea"})," field types."]})]})}function h(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},739936:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/new_connectivity_diagram-c5c6f05dd0bed0859d3622b78c34def3.png"},496394:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/new_connectivity_diagram_both-03aa9a5b3e0a4431e14df078966fa631.png"},873916:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/old_connectivity_diagram-1497d1edc66afb93e6d4f7ad8453b5aa.png"}}]);