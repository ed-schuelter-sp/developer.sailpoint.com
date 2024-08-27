"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[84282],{352427:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var r=a(785893),n=a(511151),c=a(841282),i=a(476828);const s={id:"access-model-metadata",title:"Access Model Metadata",description:"Access Model Metadata",custom_edit_url:null},o=void 0,l={id:"api/v2024/access-model-metadata",title:"Access Model Metadata",description:"Access Model Metadata",source:"@site/docs/api/v2024/access-model-metadata.tag.mdx",sourceDirName:"api/v2024",slug:"/api/v2024/access-model-metadata",permalink:"/docs/api/v2024/access-model-metadata",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"access-model-metadata",title:"Access Model Metadata",description:"Access Model Metadata",custom_edit_url:null},sidebar:"isc_2024_sidebar",previous:{title:"Introduction",permalink:"/docs/api/v2024/identity-security-cloud-v-2024-api"},next:{title:"List Access Model Metadata Attributes",permalink:"/docs/api/v2024/list-access-model-metadata-attribute"}},d={},u=[];function m(e){const t={li:"li",p:"p",ul:"ul",...(0,n.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Use this API to create and manage metadata attributes for your Access Model.\nAccess Model Metadata allows you to add contextual information to your ISC Access Model items using pre-defined metadata for risk, regulations, privacy levels, etc., or by creating your own metadata attributes to reflect the unique needs of your organization. This release of the API includes support for entitlement metadata. Support for role and access profile metadata will be introduced in a subsequent release."}),"\n",(0,r.jsx)(t.p,{children:"Common usages for Access Model metadata include:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Organizing and categorizing access items to make it easier for your users to search for and find the access rights they want to request, certify, or manage."}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Providing richer information about access that is being acted on to allow stakeholders to make better decisions when approving, certifying, or managing access rights."}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Identifying access that may requires additional approval requirements or be subject to more frequent review."}),"\n"]}),"\n"]}),"\n","\n",(0,r.jsx)(c.Z,{items:(0,i.jA)().items})]})}function p(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},841282:(e,t,a)=>{a.d(t,{Z:()=>_});var r=a(667294),n=a(490512),c=a(476828),i=a(370393),s=a(585597),o=a(935096),l=a(633084),d=a(555199);const u={cardContainer:"cardContainer_S8oU",cardTitle:"cardTitle_HoSo",cardDescription:"cardDescription_c27F",docCardIcon:"docCardIcon_elTJ"};var m=a(799603),p=a(921702);function f({href:e,children:t}){return r.createElement(i.Z,{href:e,className:(0,n.Z)("card padding--lg",u.cardContainer)},t)}function h({href:e,icon:t,title:a,description:c}){return r.createElement(f,{href:e},r.createElement(d.default,{as:"h2",className:(0,n.Z)("text--truncate",u.cardTitle),title:a},t," ",a),c&&r.createElement("p",{className:(0,n.Z)("text--truncate",u.cardDescription),title:c},c))}function g({item:e}){var t;const a=(0,c.LM)(e),n=function(){const{selectMessage:e}=(0,s.c)();return t=>e(t,(0,l.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return a?r.createElement(h,{href:a,icon:r.createElement(m.G,{icon:p.cC_,className:u.docCardIcon}),title:e.label,description:null!=(t=e.description)?t:n(e.items.length)}):null}function v({item:e}){var t,a;const n=(0,o.Z)(e.href)?r.createElement(m.G,{icon:p.FL8,className:u.docCardIcon}):r.createElement(m.G,{icon:p.wlW,className:u.docCardIcon}),i=(0,c.xz)(null!=(t=e.docId)?t:void 0);return r.createElement(h,{href:e.href,icon:n,title:e.label,description:(null!=(a=e.description)?a:"<Heading"!=(null==i?void 0:i.description)&&"<span"!=(null==i?void 0:i.description))?null==i?void 0:i.description:e.label})}function y({item:e}){switch(e.type){case"link":return r.createElement(v,{item:e});case"category":return r.createElement(g,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}var b=Object.defineProperty,M=Object.getOwnPropertySymbols,j=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable,x=(e,t,a)=>t in e?b(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,E=(e,t)=>{for(var a in t||(t={}))j.call(t,a)&&x(e,a,t[a]);if(M)for(var a of M(t))w.call(t,a)&&x(e,a,t[a]);return e};function A({className:e}){const t=(0,c.jA)();return r.createElement(_,{items:t.items,className:e})}function _(e){const{items:t,className:a}=e;if(!t)return r.createElement(A,E({},e));const i=(0,c.MN)(t);return r.createElement("section",{className:(0,n.Z)("row",a)},i.map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(y,{item:e})))))}}}]);