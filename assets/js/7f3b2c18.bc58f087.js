"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[8161],{996019:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var n=r(785893),i=r(511151);const s={id:"get-reference-identity-attribute",title:"Get Reference Identity Attribute",pagination_label:"Get Reference Identity Attribute",sidebar_label:"Get Reference Identity Attribute",sidebar_class_name:"getReferenceIdentityAttribute",keywords:["transforms","operations","get","reference","identity","attribute"],description:"Get another user's identity attribute.",slug:"/extensibility/transforms/operations/get-reference-identity-attribute",tags:["Transforms","Transform Operations"]},a=void 0,o={id:"extensibility/transforms/operations/get-reference-identity-attribute",title:"Get Reference Identity Attribute",description:"Get another user's identity attribute.",source:"@site/docs/extensibility/transforms/operations/get-reference-identity-attribute.md",sourceDirName:"extensibility/transforms/operations",slug:"/extensibility/transforms/operations/get-reference-identity-attribute",permalink:"/docs/extensibility/transforms/operations/get-reference-identity-attribute",draft:!1,unlisted:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/extensibility/transforms/operations/get-reference-identity-attribute.md",tags:[{inline:!0,label:"Transforms",permalink:"/docs/tags/transforms"},{inline:!0,label:"Transform Operations",permalink:"/docs/tags/transform-operations"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1724791322e3,frontMatter:{id:"get-reference-identity-attribute",title:"Get Reference Identity Attribute",pagination_label:"Get Reference Identity Attribute",sidebar_label:"Get Reference Identity Attribute",sidebar_class_name:"getReferenceIdentityAttribute",keywords:["transforms","operations","get","reference","identity","attribute"],description:"Get another user's identity attribute.",slug:"/extensibility/transforms/operations/get-reference-identity-attribute",tags:["Transforms","Transform Operations"]},sidebar:"openApiSidebar",previous:{title:"Get End of String",permalink:"/docs/extensibility/transforms/operations/get-end-of-string"},next:{title:"Identity Attribute",permalink:"/docs/extensibility/transforms/operations/identity-attribute"}},l={},d=[{value:"Overview",id:"overview",level:2},{value:"Transform Structure",id:"transform-structure",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Examples",id:"examples",level:2}];function c(e){const t={code:"code",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,n.jsx)(t.p,{children:"Use the get reference identity attribute transform as an out-of-the-box rule provided through SailPoint's Cloud Services Deployment Utility rule. The transform allows you to get the identity attribute of another user from within a given identity's calculation. For your convenience, the transform allows you to use \"manager\" as a referential lookup to the target identity."}),"\n",(0,n.jsx)(t.h2,{id:"transform-structure",children:"Transform Structure"}),"\n",(0,n.jsxs)(t.p,{children:["The structure of a get reference identity transform requires the ",(0,n.jsx)(t.code,{children:"name"})," of the referenced rule to be the ",(0,n.jsx)(t.code,{children:"Cloud Services Deployment Utility"})," rule built by SailPoint. Additionally, you must set the ",(0,n.jsx)(t.code,{children:"operation"})," to ",(0,n.jsx)(t.code,{children:"getReferenceIdentityAttribute"})," and specify a ",(0,n.jsx)(t.code,{children:"uid"})," attribute that correlates to the identity whose attribute is desired. Last, you must include the ",(0,n.jsx)(t.code,{children:"type"})," and ",(0,n.jsx)(t.code,{children:"name"})," attributes required for all transforms:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'{\n  "attributes": {\n    "name": "Cloud Services Deployment Utility",\n    "operation": "getReferenceIdentityAttribute",\n    "uid": "manager",\n    "attributeName": "email"\n  },\n  "type": "rule",\n  "name": "Get Reference Identity Attribute Transform"\n}\n'})}),"\n",(0,n.jsx)(t.h2,{id:"attributes",children:"Attributes"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Required Attributes"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"type"})," - This must always be set to ",(0,n.jsx)(t.code,{children:"rule"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"name"})," - This is a required attribute for all transforms. It represents the name of the transform as it will appear in the UI's dropdown menus."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"attributes.name"})," - This must always be set to ",(0,n.jsx)(t.code,{children:"Cloud Services Deployment Utility"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"operation"})," - This must always be set to ",(0,n.jsx)(t.code,{children:"getReferenceIdentityAttribute"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"uid"})," - This is the SailPoint User Name (uid) value of the identity whose attribute is desired.","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"For your convenience, you can use the \"manager\" keyword to look up the user's manager and then get that manager's identity attribute."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Optional Attributes"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"requiresPeriodicRefresh"})," - This ",(0,n.jsx)(t.code,{children:"true"})," or ",(0,n.jsx)(t.code,{children:"false"})," value indicates whether the transform logic should be reevaluated every evening as part of the identity refresh process."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.p,{children:"This transform gets the user's manager's email address."}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Transform Request Body"}),":"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'{\n  "attributes": {\n    "name": "Cloud Services Deployment Utility",\n    "operation": "getReferenceIdentityAttribute",\n    "uid": "manager",\n    "attributeName": "email"\n  },\n  "type": "rule",\n  "name": "Get Reference Identity Attribute Transform"\n}\n'})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)("p",{children:"\xa0"}),"\n",(0,n.jsx)(t.p,{children:'This transform gets the alternate phone number for the user identified as "corporate.admin".'}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Transform Request Body"}),":"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'{\n  "attributes": {\n    "name": "Cloud Services Deployment Utility",\n    "operation": "getReferenceIdentityAttribute",\n    "uid": "corporate.admin",\n    "attributeName": "phone"\n  },\n  "type": "rule",\n  "name": "Get Reference Identity Attribute Transform"\n}\n'})})]})}function u(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}}}]);