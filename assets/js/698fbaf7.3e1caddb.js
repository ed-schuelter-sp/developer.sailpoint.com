"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[64828],{147686:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>r,contentTitle:()=>a,default:()=>u,frontMatter:()=>n,metadata:()=>o,toc:()=>d});var s=i(785893),c=i(511151);const n={id:"service-accounts",title:"Service Accounts",pagination_label:"Service Accounts",sidebar_label:"Service Accounts",sidebar_position:4,sidebar_class_name:"serviceAccounts",keywords:["service account"],description:"Create and implement service accounts.",slug:"/guides/service-accounts",tags:["Service Account","Authentication"]},a=void 0,o={id:"guides/service-accounts",title:"Service Accounts",description:"Create and implement service accounts.",source:"@site/docs/guides/service-accounts.md",sourceDirName:"guides",slug:"/guides/service-accounts",permalink:"/docs/guides/service-accounts",draft:!1,unlisted:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/guides/service-accounts.md",tags:[{inline:!0,label:"Service Account",permalink:"/docs/tags/service-account"},{inline:!0,label:"Authentication",permalink:"/docs/tags/authentication"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1724791322e3,sidebarPosition:4,frontMatter:{id:"service-accounts",title:"Service Accounts",pagination_label:"Service Accounts",sidebar_label:"Service Accounts",sidebar_position:4,sidebar_class_name:"serviceAccounts",keywords:["service account"],description:"Create and implement service accounts.",slug:"/guides/service-accounts",tags:["Service Account","Authentication"]},sidebar:"openApiSidebar",previous:{title:"IP Address Allow List",permalink:"/docs/guides/ip-address-allow-list"}},r={},d=[{value:"Service Accounts",id:"service-accounts",level:2},{value:"Implementing service accounts",id:"implementing-service-accounts",level:3},{value:"Create a delimited file source",id:"create-a-delimited-file-source",level:3},{value:"Creating service accounts",id:"creating-service-accounts",level:3},{value:"Make the source authoritative",id:"make-the-source-authoritative",level:3},{value:"Permissions and access tokens",id:"permissions-and-access-tokens",level:3}];function l(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",ul:"ul",...(0,c.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"service-accounts",children:"Service Accounts"}),"\n",(0,s.jsx)(t.p,{children:"Service accounts are identities in Identity Security Cloud (ISC) that aren't real people. Their purpose is to provide credentials for automation services that can be managed and controlled separately from real identities. As a developer of integrations with ISC, there are two main advantages of creating service accounts: you can scope access to the least privilege necessary to do the job, and you can ensure that your integration's access doesn't end when you leave your organization. If you use your user account to generate credentials for integrations, they are tied to your level of access (i.e. admin) and can be revoked when you leave the organization - this could cause downtime in your integrations."}),"\n",(0,s.jsx)(t.p,{children:"Read this guide to learn how to create service accounts and implement them."}),"\n",(0,s.jsx)(t.h3,{id:"implementing-service-accounts",children:"Implementing service accounts"}),"\n",(0,s.jsx)(t.p,{children:"Any authoritative source can be used to create and manage service accounts, with Active Directory (AD) being a likely choice. Using AD to create service accounts is advantageous because doing so provisions your service accounts with unique email addresses that can be used to log in to ISC as the service account. However, if you don't want to create service accounts by using AD, you can use a flat file source to create and manage your accounts."}),"\n",(0,s.jsx)(t.h3,{id:"create-a-delimited-file-source",children:"Create a delimited file source"}),"\n",(0,s.jsx)(t.p,{children:"This section describes the process of configuring your flat file source to manage service accounts."}),"\n",(0,s.jsx)(t.p,{children:"Create a new delimited file source and name it 'Service Accounts'. Then navigate to the 'Account Schema' section and modify the schema as follows. You can add additional attributes if you want, but these four are good to start with:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"account schema",src:i(782503).Z+"",width:"1671",height:"429"})}),"\n",(0,s.jsx)(t.h3,{id:"creating-service-accounts",children:"Creating service accounts"}),"\n",(0,s.jsx)(t.p,{children:"To create a service account, you must export the account CSV file and add a new row for each account you want. Start by downloading the accounts CSV file."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"download schema",src:i(261759).Z+"",width:"1675",height:"434"})}),"\n",(0,s.jsx)(t.p,{children:"Then open the CSV and add a new service account:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Set the ",(0,s.jsx)(t.code,{children:"id"})," to a unique value that won't be duplicated anywhere in this file (ex. ",(0,s.jsx)(t.code,{children:"SA-001"}),")."]}),"\n",(0,s.jsxs)(t.li,{children:["Set the ",(0,s.jsx)(t.code,{children:"name"})," to quickly describe the account's purpose (ex. ",(0,s.jsx)(t.code,{children:"audit01"}),")."]}),"\n",(0,s.jsxs)(t.li,{children:["Set the ",(0,s.jsx)(t.code,{children:"e-mail"})," to a valid email address that you have access to. This is important - you will receive the ISC invite as an email to set the password and login as the service account. This can be your email address or any other email address you have access to (ex ",(0,s.jsx)(t.code,{children:"admin@company.com"}),"). You can also reuse this email address as many times as you want."]}),"\n",(0,s.jsxs)(t.li,{children:["Set the ",(0,s.jsx)(t.code,{children:"purpose"})," to a brief description of what this account is used for. This can help you identify accounts later on when you need to manage and delete old accounts (ex. ",(0,s.jsx)(t.code,{children:"Automate monthly audit report"}),")."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Save the CSV and upload it to your source from the 'Import Accounts' tab."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"import accounts",src:i(207542).Z+"",width:"1703",height:"805"})}),"\n",(0,s.jsx)(t.p,{children:"If it's successful, you will see one account imported."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"imported account",src:i(550999).Z+"",width:"1698",height:"316"})}),"\n",(0,s.jsx)(t.h3,{id:"make-the-source-authoritative",children:"Make the source authoritative"}),"\n",(0,s.jsx)(t.p,{children:"The service account source must be authoritative to be able to create new identities for each service account. This will allow you to log in as the service account to generate access tokens."}),"\n",(0,s.jsx)(t.p,{children:"To make the service account source authoritative, you must create a new identity profile and link it to your source."}),"\n",(0,s.jsx)(t.p,{children:'To start, create a new identity profile named "Service Accounts" that is linked to your Service Accounts source.'}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"create identity profile",src:i(641235).Z+"",width:"666",height:"309"})}),"\n",(0,s.jsx)(t.p,{children:"Configure the identity profile as you want. Once it's configured, go to the 'Mappings' tab to set up the identity attribute mappings as follows:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Set ",(0,s.jsx)(t.code,{children:"SailPoint User Name"})," to the ",(0,s.jsx)(t.code,{children:"name"})," attribute."]}),"\n",(0,s.jsxs)(t.li,{children:["Set ",(0,s.jsx)(t.code,{children:"Work Email"})," to the ",(0,s.jsx)(t.code,{children:"e-mail"})," attribute."]}),"\n",(0,s.jsxs)(t.li,{children:["Set ",(0,s.jsx)(t.code,{children:"Last Name"})," to the ",(0,s.jsx)(t.code,{children:"name"})," attribute."]}),"\n",(0,s.jsxs)(t.li,{children:["Set ",(0,s.jsx)(t.code,{children:"First Name"})," to the ",(0,s.jsx)(t.code,{children:"name"})," attribute."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"mappings",src:i(846548).Z+"",width:"1697",height:"851"})}),"\n",(0,s.jsxs)(t.p,{children:["Click 'Save' and then 'Apply Changes' to create the first identity from the service accounts source. Once the identity is created, you may need to manually send the invite. To do so, go to the identity list and search for the account's name (ex. ",(0,s.jsx)(t.code,{children:"audit01"}),")."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"invite",src:i(698328).Z+"",width:"1748",height:"710"})}),"\n",(0,s.jsx)(t.p,{children:"If you have not received the invite, check your junk folder or deleted folder because the invite may have been automatically filtered by your email provider. Once you receive the invite, follow the steps to register your service account. Once your service account user is registered, log in as the service account with the password you created for it."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"login",src:i(390497).Z+"",width:"800",height:"454"})}),"\n",(0,s.jsx)(t.h3,{id:"permissions-and-access-tokens",children:"Permissions and access tokens"}),"\n",(0,s.jsxs)(t.p,{children:['New service accounts are given the basic "user" level. Depending on what you need your service account to do, you will need to modify the user level appropriately. For more information about user levels and how to set them, refer to ',(0,s.jsx)(t.a,{href:"/docs/api/authorization#user-level-permissions",children:"user level permissions"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["Once your service account has the appropriate user level, you can generate ",(0,s.jsx)(t.a,{href:"/docs/api/authentication#personal-access-tokens",children:"personal access tokens"})," (PATs) from the service account to fulfill the needs of your integrations. You can further refine your PATs' access by applying ",(0,s.jsx)(t.a,{href:"/docs/api/authorization#scopes",children:"scopes"})," to each PAT you create."]})]})}function u(e={}){const{wrapper:t}={...(0,c.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},782503:(e,t,i)=>{i.d(t,{Z:()=>s});const s=i.p+"assets/images/account-schema-f582d846649c6807929154cc6995fb45.png"},641235:(e,t,i)=>{i.d(t,{Z:()=>s});const s=i.p+"assets/images/create-identity-profile-69c160386b3b4b17b703c111de51f916.png"},261759:(e,t,i)=>{i.d(t,{Z:()=>s});const s=i.p+"assets/images/download-schema-66228a5a949463ea708a66bb12f07872.png"},207542:(e,t,i)=>{i.d(t,{Z:()=>s});const s=i.p+"assets/images/import-accounts-a13ee29906183c0740d4649d1a774cef.png"},550999:(e,t,i)=>{i.d(t,{Z:()=>s});const s=i.p+"assets/images/imported-account-93def5b8776f4a1bffe419c723c7553f.png"},698328:(e,t,i)=>{i.d(t,{Z:()=>s});const s=i.p+"assets/images/invite-a93acef66878571bcc3de51465c2543c.png"},390497:(e,t,i)=>{i.d(t,{Z:()=>s});const s=i.p+"assets/images/login-1b84b28f55035dfa95dd041d472a2032.png"},846548:(e,t,i)=>{i.d(t,{Z:()=>s});const s=i.p+"assets/images/mappings-0b9065ee79585befdec6a74db285b210.png"}}]);