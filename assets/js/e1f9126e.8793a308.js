"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[9780],{688287:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>c,metadata:()=>l,toc:()=>m});var s=n(785893),i=n(511151),a=n(841282),r=n(476828);const c={id:"segments",title:"Segments",description:"Segments",custom_edit_url:null},o=void 0,l={id:"api/v3/segments",title:"Segments",description:"Segments",source:"@site/docs/api/v3/segments.tag.mdx",sourceDirName:"api/v3",slug:"/api/v3/segments",permalink:"/docs/api/v3/segments",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"segments",title:"Segments",description:"Segments",custom_edit_url:null},sidebar:"isc_v3_sidebar",previous:{title:"Get a Document by ID",permalink:"/docs/api/v3/search-get"},next:{title:"Create Segment",permalink:"/docs/api/v3/create-segment"}},d={},m=[];function u(e){const t={a:"a",code:"code",p:"p",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"Use this API to implement and customize access request segment functionality.\nWith this functionality in place, administrators can create and manage access request segments.\nSegments provide organizations with a way to make the access their users have even more granular - this can simply the access request process for the organization's users and improves security by reducing the risk of overprovisoning access."}),"\n",(0,s.jsx)(t.p,{children:'Segments represent sets of identities, all grouped by specified identity attributes, who are only able to see and access the access items associated with their segments.\nFor example, administrators could group all their organization\'s London office employees into one segment, "London Office Employees," by their shared location.\nThe administrators could then define the access items the London employees would need, and the identities in the "London Office Employees" would then only be able to see and access those items.'}),"\n",(0,s.jsx)(t.p,{children:"In Identity Security Cloud, administrators can use the 'Access' drop-down menu and select 'Segments' to reach the 'Access Requests Segments' page.\nThis page lists all the existing access request segments, along with their statuses, enabled or disabled.\nAdministrators can use this page to create, edit, enable, disable, and delete segments.\nTo create a segment, an administrator must provide a name, define the identities grouped in the segment, and define the items the identities in the segment can access.\nThese items can be access profiles, roles, or entitlements."}),"\n",(0,s.jsxs)(t.p,{children:["When administrators use the API to create and manage segments, they use a JSON expression in the ",(0,s.jsx)(t.code,{children:"visibilityCriteria"})," object to define the segment's identities and access items."]}),"\n",(0,s.jsxs)(t.p,{children:["Refer to ",(0,s.jsx)(t.a,{href:"https://documentation.sailpoint.com/saas/help/requests/segments.html",children:"Managing Access Request Segments"})," for more information about segments in Identity Security Cloud."]}),"\n","\n",(0,s.jsx)(a.Z,{items:(0,r.jA)().items})]})}function p(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},841282:(e,t,n)=>{n.d(t,{Z:()=>N});var s=n(667294),i=n(490512),a=n(476828),r=n(370393),c=n(585597),o=n(935096),l=n(633084),d=n(555199);const m={cardContainer:"cardContainer_S8oU",cardTitle:"cardTitle_HoSo",cardDescription:"cardDescription_c27F",docCardIcon:"docCardIcon_elTJ"};var u=n(799603),p=n(921702);function h({href:e,children:t}){return s.createElement(r.Z,{href:e,className:(0,i.Z)("card padding--lg",m.cardContainer)},t)}function g({href:e,icon:t,title:n,description:a}){return s.createElement(h,{href:e},s.createElement(d.default,{as:"h2",className:(0,i.Z)("text--truncate",m.cardTitle),title:n},t," ",n),a&&s.createElement("p",{className:(0,i.Z)("text--truncate",m.cardDescription),title:a},a))}function f({item:e}){var t;const n=(0,a.LM)(e),i=function(){const{selectMessage:e}=(0,c.c)();return t=>e(t,(0,l.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?s.createElement(g,{href:n,icon:s.createElement(u.G,{icon:p.cC_,className:m.docCardIcon}),title:e.label,description:null!=(t=e.description)?t:i(e.items.length)}):null}function y({item:e}){var t,n;const i=(0,o.Z)(e.href)?s.createElement(u.G,{icon:p.FL8,className:m.docCardIcon}):s.createElement(u.G,{icon:p.wlW,className:m.docCardIcon}),r=(0,a.xz)(null!=(t=e.docId)?t:void 0);return s.createElement(g,{href:e.href,icon:i,title:e.label,description:(null!=(n=e.description)?n:"<Heading"!=(null==r?void 0:r.description)&&"<span"!=(null==r?void 0:r.description))?null==r?void 0:r.description:e.label})}function b({item:e}){switch(e.type){case"link":return s.createElement(y,{item:e});case"category":return s.createElement(f,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}var v=Object.defineProperty,w=Object.getOwnPropertySymbols,x=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable,S=(e,t,n)=>t in e?v(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,j=(e,t)=>{for(var n in t||(t={}))x.call(t,n)&&S(e,n,t[n]);if(w)for(var n of w(t))E.call(t,n)&&S(e,n,t[n]);return e};function C({className:e}){const t=(0,a.jA)();return s.createElement(N,{items:t.items,className:e})}function N(e){const{items:t,className:n}=e;if(!t)return s.createElement(C,j({},e));const r=(0,a.MN)(t);return s.createElement("section",{className:(0,i.Z)("row",n)},r.map(((e,t)=>s.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},s.createElement(b,{item:e})))))}}}]);