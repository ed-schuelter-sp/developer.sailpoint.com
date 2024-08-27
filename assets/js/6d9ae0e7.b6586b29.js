"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[10083],{129544:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>a,default:()=>g,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var i=t(785893),n=t(511151);const r={id:"access-request-preapproval",title:"Access Request Submitted",pagination_label:"Access Request Submitted",sidebar_label:"Access Request Submitted",sidebar_class_name:"accessRequestSubmitted",keywords:["event","trigger","access","request","submitted","preapproval","available"],description:"Fires after an access request is submitted.",slug:"/extensibility/event-triggers/triggers/access-request-submitted",tags:["Event Triggers","Available Event Triggers","Request Response"]},a=void 0,o={id:"extensibility/event-triggers/available/access-request-preapproval",title:"Access Request Submitted",description:"Fires after an access request is submitted.",source:"@site/docs/extensibility/event-triggers/available/access-request-submitted.md",sourceDirName:"extensibility/event-triggers/available",slug:"/extensibility/event-triggers/triggers/access-request-submitted",permalink:"/docs/extensibility/event-triggers/triggers/access-request-submitted",draft:!1,unlisted:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/extensibility/event-triggers/available/access-request-submitted.md",tags:[{inline:!0,label:"Event Triggers",permalink:"/docs/tags/event-triggers"},{inline:!0,label:"Available Event Triggers",permalink:"/docs/tags/available-event-triggers"},{inline:!0,label:"Request Response",permalink:"/docs/tags/request-response"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1724791322e3,frontMatter:{id:"access-request-preapproval",title:"Access Request Submitted",pagination_label:"Access Request Submitted",sidebar_label:"Access Request Submitted",sidebar_class_name:"accessRequestSubmitted",keywords:["event","trigger","access","request","submitted","preapproval","available"],description:"Fires after an access request is submitted.",slug:"/extensibility/event-triggers/triggers/access-request-submitted",tags:["Event Triggers","Available Event Triggers","Request Response"]},sidebar:"openApiSidebar",previous:{title:"Access Request Dynamic Approval",permalink:"/docs/extensibility/event-triggers/triggers/access-request-dynamic-approval"},next:{title:"Account Aggregation Completed",permalink:"/docs/extensibility/event-triggers/triggers/account-aggregation-completed"}},c={},l=[{value:"Event Context",id:"event-context",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Additional Information and Links",id:"additional-information-and-links",level:2}];function d(e){const s={a:"a",admonition:"admonition",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h2,{id:"event-context",children:"Event Context"}),"\n",(0,i.jsxs)(s.p,{children:["The platform now includes event triggers within the access request approval workflow. The 'Access Request Submitted' event trigger provides more proactive governance, ensures users can quickly obtain needed access, and helps with more preventative measures towards unintended access. When an access request is submitted, this trigger is invoked before the ",(0,i.jsx)(s.a,{href:"/docs/extensibility/event-triggers/triggers/access-request-dynamic-approval",children:"Access Request Dynamic Approval trigger"}),"."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"Flow",src:t(598909).Z+"",width:"860",height:"263"})}),"\n",(0,i.jsx)(s.p,{children:"When an access request is submitted, some uses cases for this trigger include the following:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Provide the approver with additional context about the access request, like any Separation of Duties (SOD) policy violations, for example."}),"\n",(0,i.jsx)(s.li,{children:"Notify the approver through a different medium, such as Slack or Outlook Actionable Messages."}),"\n",(0,i.jsx)(s.li,{children:"Send a Terms of Agreement form of the requested Application to be signed by the access requester."}),"\n",(0,i.jsx)(s.li,{children:"On average, you can expect about 1 access request for every 4 identities within your org per day. On average you can expect about 1 to 2 access requests within a 10 second period."}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"Additional use cases include the following:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Send a Slack notification to the approver or an approval channel and approve the request within Slack."}),"\n",(0,i.jsx)(s.li,{children:"Create an Outlook Actionable Message."}),"\n",(0,i.jsx)(s.li,{children:"Create a Google Doc for the requester to fill out and submit."}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"configuration",children:"Configuration"}),"\n",(0,i.jsxs)(s.p,{children:["This is a ",(0,i.jsx)(s.code,{children:"REQUEST_RESPONSE"})," trigger type. For more information about how to respond to a ",(0,i.jsx)(s.code,{children:"REQUEST_RESPONSE"})," type trigger, see ",(0,i.jsx)(s.a,{href:"/docs/extensibility/event-triggers/responding-request-response-trigger",children:"responding to a request response type trigger"}),". This trigger intercepts newly submitted access requests and allows the subscribing service to perform a preliminary approval/denial before the access request moves to the next approver in the chain."]}),"\n",(0,i.jsx)(s.p,{children:"The subscribing service will receive the following input from the trigger service."}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-json",children:'{\n  "accessRequestId": "2c91808b6ef1d43e016efba0ce470904",\n  "requestedFor": {\n    "type": "IDENTITY",\n    "id": "2c91808568c529c60168cca6f90c1313",\n    "name": "William Wilson"\n  },\n  "requestedItems": [\n    {\n      "id": "2c91808b6ef1d43e016efba0ce470904",\n      "name": "Engineering Access",\n      "description": "Access to engineering database",\n      "type": "ACCESS_PROFILE",\n      "operation": "Add",\n      "comment": "William needs this access to do his job."\n    }\n  ],\n  "requestedBy": {\n    "type": "IDENTITY",\n    "id": "2c91808568c529c60168cca6f90c1314",\n    "name": "Rob Robertson"\n  }\n}\n'})}),"\n",(0,i.jsx)(s.p,{children:"The subscribing service can use this information to make a decision about whether to approve or deny the request."}),"\n",(0,i.jsx)(s.p,{children:"To approve an access request, the subscribing service responds to the event trigger with the following payload:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-json",children:'{\n  "approved": true,\n  "comment": "This access has passed preliminary approval.",\n  "approver": "AcmeCorpExternalIntegration"\n}\n'})}),"\n",(0,i.jsx)(s.p,{children:"To deny an access request, the subscribing service responds to the event trigger with the following payload:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-json",children:'{\n  "approved": false,\n  "comment": "This access should be denied, because this will cause an SOD violation.",\n  "approver": "AcmeCorpExternalIntegration"\n}\n'})}),"\n",(0,i.jsx)(s.admonition,{type:"warning",children:(0,i.jsxs)(s.p,{children:["The ",(0,i.jsx)(s.code,{children:"approver"})," does not have to be the name of an existing identity in your ISC tenant. It can be anything you want it to be. However, if you have an active subscription to the ",(0,i.jsx)(s.a,{href:"/docs/extensibility/event-triggers/triggers/access-request-decision",children:"Access Request Decision"})," trigger, you ",(0,i.jsx)(s.strong,{children:"MUST"})," provide the ",(0,i.jsx)(s.strong,{children:"username"})," of an existing identity in your tenant in the ",(0,i.jsx)(s.code,{children:"approver"})," field. If you do not provide the ",(0,i.jsx)(s.strong,{children:"username"})," of an existing identity, then your Access Request Decision subscriptions will never be triggered."]})}),"\n",(0,i.jsxs)(s.admonition,{type:"warning",children:[(0,i.jsxs)(s.p,{children:["This event trigger interrupts the normal workflow for access requests. Access requests can only proceed if the subscribing service responds within the alotted time by approving the request. If the subscribing service is non-responsive or it is responding with an incorrect payload, access requests will fail after the ",(0,i.jsx)(s.strong,{children:"Separation of Duties"})," check."]}),(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"AR failed",src:t(367255).Z+"",width:"440",height:"450"})}),(0,i.jsx)(s.p,{children:"If you see numerous access requests failing at this stage, verify that your subscribing service is operating correctly."})]}),"\n",(0,i.jsx)(s.h2,{id:"additional-information-and-links",children:"Additional Information and Links"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Trigger Type"}),": ",(0,i.jsx)(s.a,{href:"/docs/extensibility/event-triggers/trigger-types#request-response",children:"REQUEST_RESPONSE"})]}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"/docs/extensibility/event-triggers/responding-request-response-trigger",children:"How to respond to a REQUEST_RESPONSE trigger"})}),"\n"]})]})}function g(e={}){const{wrapper:s}={...(0,n.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},367255:(e,s,t)=>{t.d(s,{Z:()=>i});const i=t.p+"assets/images/access-request-preapproval-failure-892d2c05f3d6d5f085b65347414bbc6e.png"},598909:(e,s,t)=>{t.d(s,{Z:()=>i});const i=t.p+"assets/images/access-request-preapproval-path-7652533b5465742c950bd8a05679aad3.png"}}]);