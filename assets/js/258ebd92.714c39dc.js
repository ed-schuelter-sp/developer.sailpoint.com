"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[40983],{210639:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>a,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var s=n(785893),t=n(511151);const o={id:"provisioning-action-completed",title:"Provisioning Completed",pagination_label:"Provisioning Completed",sidebar_label:"Provisioning Completed",sidebar_class_name:"provisioningCompleted",keywords:["event","trigger","provisioning","action","completed","available"],description:"Fires after a provisioning action completed on a source.",slug:"/extensibility/event-triggers/triggers/provisioning-completed",tags:["Event Triggers","Available Event Triggers","Fire and Forget"]},r=void 0,c={id:"extensibility/event-triggers/available/provisioning-action-completed",title:"Provisioning Completed",description:"Fires after a provisioning action completed on a source.",source:"@site/docs/extensibility/event-triggers/available/provisioning-completed.md",sourceDirName:"extensibility/event-triggers/available",slug:"/extensibility/event-triggers/triggers/provisioning-completed",permalink:"/docs/extensibility/event-triggers/triggers/provisioning-completed",draft:!1,unlisted:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/extensibility/event-triggers/available/provisioning-completed.md",tags:[{inline:!0,label:"Event Triggers",permalink:"/docs/tags/event-triggers"},{inline:!0,label:"Available Event Triggers",permalink:"/docs/tags/available-event-triggers"},{inline:!0,label:"Fire and Forget",permalink:"/docs/tags/fire-and-forget"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1724791322e3,frontMatter:{id:"provisioning-action-completed",title:"Provisioning Completed",pagination_label:"Provisioning Completed",sidebar_label:"Provisioning Completed",sidebar_class_name:"provisioningCompleted",keywords:["event","trigger","provisioning","action","completed","available"],description:"Fires after a provisioning action completed on a source.",slug:"/extensibility/event-triggers/triggers/provisioning-completed",tags:["Event Triggers","Available Event Triggers","Fire and Forget"]},sidebar:"openApiSidebar",previous:{title:"Outlier Detected",permalink:"/docs/extensibility/event-triggers/triggers/outlier-detected"},next:{title:"Scheduled Search",permalink:"/docs/extensibility/event-triggers/triggers/scheduled-search"}},a={},l=[{value:"Event Context",id:"event-context",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Access Request",id:"access-request",level:3},{value:"Certification",id:"certification",level:3},{value:"Role Membership",id:"role-membership",level:3},{value:"Lifecycle Management",id:"lifecycle-management",level:3},{value:"Password Management",id:"password-management",level:3},{value:"Additional Information and Links",id:"additional-information-and-links",level:2}];function d(e){const i={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.h2,{id:"event-context",children:"Event Context"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"Flow",src:n(414945).Z+"",width:"721",height:"255"})}),"\n",(0,s.jsx)(i.p,{children:"The 'Provisioning Completed' event trigger notifies subscribed applications after the action is completed. This event trigger provides a flexible way to extend the Provisioning workflow after access has changed for an identity within SailPoint. This provides more proactive governance and ensures users can quickly get necessary access."}),"\n",(0,s.jsx)(i.p,{children:"Some uses cases for this trigger include the following:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Notify the requester that the access request has been fulfilled."}),"\n",(0,s.jsx)(i.li,{children:"Notify an application user and/or access certifier that access has been revoked."}),"\n",(0,s.jsx)(i.li,{children:"Notify an administrator or system that provisioning has been completed."}),"\n",(0,s.jsx)(i.li,{children:"Notify a third party system to trigger another action, like continuing additional provisioning actions or auditing of provisioning activities, for example."}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"This is an example input from this trigger:"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-json",children:'{\n  "trackingNumber": "4b4d982dddff4267ab12f0f1e72b5a6d",\n  "sources": "Corp AD, Corp LDAP, Corp Salesforce",\n  "action": "IdentityRefresh",\n  "errors": ["Connector AD Failed"],\n  "warnings": ["Notification Skipped due to invalid email"],\n  "recipient": {\n    "type": "IDENTITY",\n    "id": "2c91808568c529c60168cca6f90c1313",\n    "name": "William Wilson"\n  },\n  "requester": {\n    "type": "IDENTITY",\n    "id": "2c91808568c529c60168cca6f90c1313",\n    "name": "William Wilson"\n  },\n  "accountRequests": [\n    {\n      "source": {\n        "id": "4e4d982dddff4267ab12f0f1e72b5a6d",\n        "type": "SOURCE",\n        "name": "Corporate Active Directory"\n      },\n      "accountId": "CN=Rob.Robertson,ou=csm,ou=sales,dc=helpco,dc=com",\n      "accountOperation": "Modify",\n      "provisioningResult": "SUCCESS",\n      "provisioningTarget": "Corp AD",\n      "ticketId": "72619262",\n      "attributeRequests": [\n        {\n          "attributeName": "memberOf",\n          "attributeValue": "CN=sales,DC=helpco,DC=com",\n          "operation": "Add"\n        }\n      ]\n    }\n  ]\n}\n'})}),"\n",(0,s.jsx)(i.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsx)(i.p,{children:"Before consuming this event trigger, the following prerequesites must be met:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["An oAuth client configured with authority as ",(0,s.jsx)(i.code,{children:"ORG_ADMIN"}),"."]}),"\n",(0,s.jsxs)(i.li,{children:["An org enabled with the ",(0,s.jsx)(i.code,{children:"ARSENAL_ALLOW_POSTPROVISIONING_TRIGGERS"})," feature flag."]}),"\n",(0,s.jsx)(i.li,{children:"Configure connectors for provisioning into target applications."}),"\n",(0,s.jsx)(i.li,{children:"An org configured for automated provisioning. See the Event Context section for specific setup."}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"To provision to a target application, the connector for the source must support the following connector features:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"ENABLE"})," - Can enable or disable accounts."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"UNLOCK"})," - Can lock or unlock accounts."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"PROVISIONING"})," - Can write to accounts. Currently, the trigger does not include attribute synchronization."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"PASSWORD"})," - Can update password for accounts."]}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:["For a list of supported connectors and features, see [Supported Connectors for Identity Security Cloud](",(0,s.jsx)(i.a,{href:"https://community.sailpoint.com/t5/Connectors/Supported-Sources-Connectors-for-Identity",children:"https://community.sailpoint.com/t5/Connectors/Supported-Sources-Connectors-for-Identity"})," Security Cloud/ta-p/80019)."]}),"\n",(0,s.jsxs)(i.p,{children:["For information about configuring sources for provisioning, see ",(0,s.jsx)(i.a,{href:"https://community.sailpoint.com/t5/Connectors/How-can-I-edit-the-Create-Profile-on-a-source/ta-p/74429",children:"How can I edit the Create Profile on a source?"}),"."]}),"\n",(0,s.jsx)(i.p,{children:"Provisioning events occur in these workflows:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"#access-request",children:"Access Request"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"#certification",children:"Certification"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"#role-membership",children:"Role Membership"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"#lifecycle-management",children:"Lifecycle Management"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"#password-management",children:"Password Management"})}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"access-request",children:"Access Request"}),"\n",(0,s.jsx)(i.p,{children:"When an access request approval process has completed with all positive approvals, the access request is fulfilled with provisioning to the target application with requested access."}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"Flow",src:n(342912).Z+"",width:"1058",height:"234"})}),"\n",(0,s.jsx)(i.p,{children:"Access acquired through a role request can also be revoked, and those changes can be provisioned to an account."}),"\n",(0,s.jsx)(i.p,{children:"The following steps must be completed:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["Source Connector configured for ",(0,s.jsx)(i.code,{children:"PROVISIONING"}),". Access requests in SailPoint SaaS currently do not support ",(0,s.jsx)(i.code,{children:"ACCOUNT_ONLY_REQUEST"})," or ",(0,s.jsx)(i.code,{children:"ADDITIONAL_ACCOUNT_REQUEST"}),"."]}),"\n",(0,s.jsx)(i.li,{children:"Source entitlements mapped in Account Schema."}),"\n",(0,s.jsx)(i.li,{children:"Access profile using source entitlements. Role setup is optional."}),"\n",(0,s.jsx)(i.li,{children:"Application enabled for Access Request."}),"\n"]}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"NOTE:"})," There is no indication to the approver in the Identity Security Cloud UI that the approval is for a revoke action. This must be considered for all usage of these APIs."]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"Flow",src:n(271401).Z+"",width:"834",height:"215"})}),"\n",(0,s.jsx)(i.h3,{id:"certification",children:"Certification"}),"\n",(0,s.jsx)(i.p,{children:"Provisioning removal of accounts acquired through Access Request occurs through certifications."}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"Note:"})," Certifications cannot revoke access acquired via role membership or lifecycle Changes."]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"Flow",src:n(259836).Z+"",width:"1062",height:"213"})}),"\n",(0,s.jsx)(i.h3,{id:"role-membership",children:"Role Membership"}),"\n",(0,s.jsxs)(i.p,{children:["Access defined in access profiles can be grouped into roles, and roles can be assigned to identities using ",(0,s.jsx)(i.code,{children:"COMPLEX_CRITERION"})," or ",(0,s.jsx)(i.code,{children:"IDENTITY_LIST"}),". See ",(0,s.jsx)(i.a,{href:"https://community.sailpoint.com/t5/Admin-Help/Standard-Role-Membership-Criteria-Options/ta-p/74392",children:"Admin UI"})," for information on how to set ",(0,s.jsx)(i.code,{children:"COMPLEX_CRITERION"}),"."]}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"Note:"})," ",(0,s.jsx)(i.code,{children:"CUSTOM"})," role membership through rules is no longer supported."]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"Roles can also be mapped from an authoritative source."}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"Flow",src:n(253843).Z+"",width:"1060",height:"233"})}),"\n",(0,s.jsx)(i.h3,{id:"lifecycle-management",children:"Lifecycle Management"}),"\n",(0,s.jsx)(i.p,{children:"This trigger fires when an account has been provisioned, enabled, or disabled."}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"Flow",src:n(738230).Z+"",width:"1082",height:"208"})}),"\n",(0,s.jsx)(i.p,{children:"To provision access with lifecycle states, the prerequisites must be met:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["Source connector configured for ",(0,s.jsx)(i.code,{children:"ENABLE"})," to enable/disable accounts and/or ",(0,s.jsx)(i.code,{children:"PROVISIONING"})," to create/update/delete accounts."]}),"\n",(0,s.jsx)(i.li,{children:"Source entitlements mapped from an authoritative source."}),"\n",(0,s.jsx)(i.li,{children:"Source entitlements mapped to access profiles."}),"\n",(0,s.jsx)(i.li,{children:"Identity profile using an authoritative source."}),"\n",(0,s.jsx)(i.li,{children:"Lifecycle states configured. To set them up, follow this [guide]."}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"password-management",children:"Password Management"}),"\n",(0,s.jsx)(i.p,{children:"Password changes can be provisioned to target applications through password reset or password interception. Also, unlocking of accounts can be provisioned via password change within SailPoint SaaS."}),"\n",(0,s.jsx)(i.p,{children:"For password management setup, you must configure the following:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["Source connector configured for ",(0,s.jsx)(i.code,{children:"PASSWORD"})," for password changes and/or ",(0,s.jsx)(i.code,{children:"UNLOCK"})," for unlocking changes."]}),"\n",(0,s.jsx)(i.li,{children:"Password sync group"}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"additional-information-and-links",children:"Additional Information and Links"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Trigger Type"}),": ",(0,s.jsx)(i.a,{href:"/docs/extensibility/event-triggers/trigger-types#fire-and-forget",children:"FIRE_AND_FORGET"})]}),"\n"]})]})}function p(e={}){const{wrapper:i}={...(0,t.a)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},271401:(e,i,n)=>{n.d(i,{Z:()=>s});const s=n.p+"assets/images/provisioning-access-request-2-63c142eeabf475de11931df3c4a1b3f0.png"},259836:(e,i,n)=>{n.d(i,{Z:()=>s});const s=n.p+"assets/images/provisioning-access-request-certification-800d859d967b0b82327132d5f3d18318.png"},342912:(e,i,n)=>{n.d(i,{Z:()=>s});const s=n.p+"assets/images/provisioning-access-request-378caa66780b3481447337b329fe2af5.png"},414945:(e,i,n)=>{n.d(i,{Z:()=>s});const s=n.p+"assets/images/provisioning-action-e557c26a6ce76486985701a999697b8c.png"},738230:(e,i,n)=>{n.d(i,{Z:()=>s});const s=n.p+"assets/images/provisioning-lifecycle-management-147b9d7ec1b080ae20b6b9891bef7da8.png"},253843:(e,i,n)=>{n.d(i,{Z:()=>s});const s=n.p+"assets/images/provisioning-role-membership-d6448a84dc81db9c527a8b1dffd4b0ea.png"}}]);