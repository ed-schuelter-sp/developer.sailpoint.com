"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[49267],{450119:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>g,frontMatter:()=>s,metadata:()=>d,toc:()=>o});var n=i(785893),r=i(511151);const s={id:"identity-deleted",title:"Identity Deleted",pagination_label:"Identity Deleted",sidebar_label:"Identity Deleted",sidebar_class_name:"identityDeleted",keywords:["event","trigger","identity","deleted","early access"],description:"Fires after an identity is deleted.",slug:"/extensibility/event-triggers/triggers/identity-deleted",tags:["Event Triggers","Early Access Event Triggers","Fire and Forget"]},a=void 0,d={id:"extensibility/event-triggers/early-access/identity-deleted",title:"Identity Deleted",description:"Fires after an identity is deleted.",source:"@site/docs/extensibility/event-triggers/early-access/identity-deleted.md",sourceDirName:"extensibility/event-triggers/early-access",slug:"/extensibility/event-triggers/triggers/identity-deleted",permalink:"/docs/extensibility/event-triggers/triggers/identity-deleted",draft:!1,unlisted:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/extensibility/event-triggers/early-access/identity-deleted.md",tags:[{inline:!0,label:"Event Triggers",permalink:"/docs/tags/event-triggers"},{inline:!0,label:"Early Access Event Triggers",permalink:"/docs/tags/early-access-event-triggers"},{inline:!0,label:"Fire and Forget",permalink:"/docs/tags/fire-and-forget"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1724791322e3,frontMatter:{id:"identity-deleted",title:"Identity Deleted",pagination_label:"Identity Deleted",sidebar_label:"Identity Deleted",sidebar_class_name:"identityDeleted",keywords:["event","trigger","identity","deleted","early access"],description:"Fires after an identity is deleted.",slug:"/extensibility/event-triggers/triggers/identity-deleted",tags:["Event Triggers","Early Access Event Triggers","Fire and Forget"]},sidebar:"openApiSidebar",previous:{title:"Early Access Event Triggers",permalink:"/docs/extensibility/event-triggers/early-access"},next:{title:"Source Account Created",permalink:"/docs/extensibility/event-triggers/triggers/source-account-created"}},l={},o=[{value:"Event Context",id:"event-context",level:2},{value:"Additional Information and Links",id:"additional-information-and-links",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsx)(t.p,{children:"This is an early access event trigger. Please contact support to have it enabled in your tenant."})}),"\n",(0,n.jsx)(t.h2,{id:"event-context",children:"Event Context"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Flow",src:i(625250).Z+"",width:"1178",height:"229"})}),"\n",(0,n.jsx)(t.p,{children:"Identity deleted event will occur when an identity meets all of the following requirements:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"No correlated accounts"}),"\n",(0,n.jsx)(t.li,{children:"Not an owner of a role, access profile, application, source, or taskResult"}),"\n",(0,n.jsx)(t.li,{children:"Not an owner or requester of a workItem"}),"\n",(0,n.jsx)(t.li,{children:"Not a protected account or manager"}),"\n",(0,n.jsx)(t.li,{children:"No assigned capabilities (ex. not an assigned cert reviewer)"}),"\n",(0,n.jsx)(t.li,{children:"Not involved in any active certification as a target (its access is not being certified)"}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["After accounts are aggregated and the identity refresh process finds an identity that meets the above criteria, the associated identity is deleted from Identity Security Cloud. For more information, see ",(0,n.jsx)(t.a,{href:"https://community.sailpoint.com/t5/Connectors/Configuring-Correlation/ta-p/74045",children:"Configuring Correlation"}),". The Identity deleted event contains any identity attributes as they are configured in the identity profile. For more information, see ",(0,n.jsx)(t.a,{href:"https://community.sailpoint.com/t5/Admin-Help/Mapping-Identity-Profiles/ta-p/77877",children:"Mapping Identity Profiles"}),"."]}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsxs)(t.p,{children:["Identity Security Cloud will ",(0,n.jsx)(t.strong,{children:"hide"})," an identity from the identity list in the UI when the authoritative account is removed. This does not necessarily mean that the identity has been deleted. The identity will only be deleted when the above criteria are met. The deletion task run each night, so there will be a delay from when the criteria are met to when the identity will actually be deleted."]})}),"\n",(0,n.jsx)(t.p,{children:"This event trigger provides a flexible way to extend joiner-mover-leaver processes. This provides more proactive governance and ensures users can quickly get necessary access when they enter your organization."}),"\n",(0,n.jsx)(t.p,{children:"Some uses cases for this trigger include the following:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Notify an administrator or system to take the appropriate provisioning actions as part of the leaver workflow."}),"\n",(0,n.jsx)(t.li,{children:"Notify a system to trigger another action (e.g. deactivate an employee\u2019s badge upon termination)."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"This is an example input from this trigger:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'{\n  "identity": {\n    "type": "IDENTITY",\n    "id": "2c91808568c529c60168cca6f90c1313",\n    "name": "William Wilson"\n  },\n  "attributes": {\n    "firstname": "John"\n  }\n}\n'})}),"\n",(0,n.jsx)(t.h2,{id:"additional-information-and-links",children:"Additional Information and Links"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Trigger Type"}),": ",(0,n.jsx)(t.a,{href:"/docs/extensibility/event-triggers/trigger-types#fire-and-forget",children:"FIRE_AND_FORGET"})]}),"\n"]})]})}function g(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},625250:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/identity-deleted-path-48c9bae187bac0382cda77be26264812.png"}}]);