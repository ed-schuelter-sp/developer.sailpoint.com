"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[48577],{139396:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var a=i(785893),n=i(511151),r=i(841282),c=i(476828);const s={id:"certification-summaries",title:"Certification Summaries",description:"Certification Summaries",custom_edit_url:null},o=void 0,l={id:"api/v2024/certification-summaries",title:"Certification Summaries",description:"Certification Summaries",source:"@site/docs/api/v2024/certification-summaries.tag.mdx",sourceDirName:"api/v2024",slug:"/api/v2024/certification-summaries",permalink:"/docs/api/v2024/certification-summaries",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"certification-summaries",title:"Certification Summaries",description:"Certification Summaries",custom_edit_url:null},sidebar:"isc_2024_sidebar",previous:{title:"Generate a Campaign from Template",permalink:"/docs/api/v2024/start-generate-campaign-template"},next:{title:"Summary of Certification Decisions",permalink:"/docs/api/v2024/get-identity-decision-summary"}},m={},d=[];function u(e){const t={a:"a",p:"p",...(0,n.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:["Use this API to implement certification summary functionality.\nWith this functionality in place, administrators and designated certification reviewers can review summaries of identity certification campaigns and draw conclusions about the campaigns' scope, security, and effectiveness.\nImplementing certification summary functionality improves organizations' ability to review their ",(0,a.jsx)(t.a,{href:"https://documentation.sailpoint.com/saas/user-help/certifications.html",children:"certifications"})," and helps them satisfy audit and regulatory requirements by enabling them to trace access changes and the decisions made in their review processes."]}),"\n",(0,a.jsx)(t.p,{children:"A certification refers to Identity Security Cloud's mechanism for reviewing a user's access to entitlements (sets of permissions) and approving or removing that access.\nThese certifications serve as a way of showing that a user's access has been reviewed and approved.\nMultiple certifications by different reviewers are often required to approve a user's access.\nA set of multiple certifications is called a certification campaign."}),"\n",(0,a.jsx)(t.p,{children:"For example, an organization may use a Manager Certification as a way of showing that a user's access has been reviewed and approved by their manager, or if the certification is part of a campaign, that the user's access has been reviewed and approved by multiple managers.\nOnce this certification has been completed, Identity Security Cloud  would provision all the access the user needs, nothing more."}),"\n",(0,a.jsx)(t.p,{children:"Certification summaries provide information about identity certification campaigns such as the identities involved, the number of decisions made, and the access changed.\nFor example, an administrator or designated certification reviewer can examine the Manager Certification campaign to get an overview of how many entitlement decisions are made in that campaign as opposed to role decisions, which identities would be affected by changes to the campaign, and how those identities' access would be affected."}),"\n","\n",(0,a.jsx)(r.Z,{items:(0,c.jA)().items})]})}function p(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},841282:(e,t,i)=>{i.d(t,{Z:()=>N});var a=i(667294),n=i(490512),r=i(476828),c=i(370393),s=i(585597),o=i(935096),l=i(633084),m=i(555199);const d={cardContainer:"cardContainer_S8oU",cardTitle:"cardTitle_HoSo",cardDescription:"cardDescription_c27F",docCardIcon:"docCardIcon_elTJ"};var u=i(799603),p=i(921702);function f({href:e,children:t}){return a.createElement(c.Z,{href:e,className:(0,n.Z)("card padding--lg",d.cardContainer)},t)}function h({href:e,icon:t,title:i,description:r}){return a.createElement(f,{href:e},a.createElement(m.default,{as:"h2",className:(0,n.Z)("text--truncate",d.cardTitle),title:i},t," ",i),r&&a.createElement("p",{className:(0,n.Z)("text--truncate",d.cardDescription),title:r},r))}function g({item:e}){var t;const i=(0,r.LM)(e),n=function(){const{selectMessage:e}=(0,s.c)();return t=>e(t,(0,l.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return i?a.createElement(h,{href:i,icon:a.createElement(u.G,{icon:p.cC_,className:d.docCardIcon}),title:e.label,description:null!=(t=e.description)?t:n(e.items.length)}):null}function v({item:e}){var t,i;const n=(0,o.Z)(e.href)?a.createElement(u.G,{icon:p.FL8,className:d.docCardIcon}):a.createElement(u.G,{icon:p.wlW,className:d.docCardIcon}),c=(0,r.xz)(null!=(t=e.docId)?t:void 0);return a.createElement(h,{href:e.href,icon:n,title:e.label,description:(null!=(i=e.description)?i:"<Heading"!=(null==c?void 0:c.description)&&"<span"!=(null==c?void 0:c.description))?null==c?void 0:c.description:e.label})}function y({item:e}){switch(e.type){case"link":return a.createElement(v,{item:e});case"category":return a.createElement(g,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}var w=Object.defineProperty,b=Object.getOwnPropertySymbols,C=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable,E=(e,t,i)=>t in e?w(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,j=(e,t)=>{for(var i in t||(t={}))C.call(t,i)&&E(e,i,t[i]);if(b)for(var i of b(t))x.call(t,i)&&E(e,i,t[i]);return e};function _({className:e}){const t=(0,r.jA)();return a.createElement(N,{items:t.items,className:e})}function N(e){const{items:t,className:i}=e;if(!t)return a.createElement(_,j({},e));const c=(0,r.MN)(t);return a.createElement("section",{className:(0,n.Z)("row",i)},c.map(((e,t)=>a.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},a.createElement(y,{item:e})))))}}}]);