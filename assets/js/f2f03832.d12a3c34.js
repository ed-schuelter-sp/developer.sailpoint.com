"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[71856],{2116:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>p,contentTitle:()=>n,default:()=>c,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var r=s(785893),o=s(511151);const i={id:"typescript-sdk-delete",title:"Deleting resources with The TypeScript SDK",pagination_label:"Delete a resource",sidebar_label:"Delete a resource",sidebar_position:4,sidebar_class_name:"typescriptsdk",keywords:["tsc","typescript","sdk","delete"],description:"Learn how to use the TypeScript SDK to delete resources.",slug:"/tools/sdk/typescript/delete",tags:["SDK"]},n=void 0,a={id:"tools/sdk/typescript/typescript-sdk-delete",title:"Deleting resources with The TypeScript SDK",description:"Learn how to use the TypeScript SDK to delete resources.",source:"@site/docs/tools/sdk/typescript/deleting-resources.md",sourceDirName:"tools/sdk/typescript",slug:"/tools/sdk/typescript/delete",permalink:"/docs/tools/sdk/typescript/delete",draft:!1,unlisted:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/tools/sdk/typescript/deleting-resources.md",tags:[{inline:!0,label:"SDK",permalink:"/docs/tags/sdk"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1724791322e3,sidebarPosition:4,frontMatter:{id:"typescript-sdk-delete",title:"Deleting resources with The TypeScript SDK",pagination_label:"Delete a resource",sidebar_label:"Delete a resource",sidebar_position:4,sidebar_class_name:"typescriptsdk",keywords:["tsc","typescript","sdk","delete"],description:"Learn how to use the TypeScript SDK to delete resources.",slug:"/tools/sdk/typescript/delete",tags:["SDK"]},sidebar:"openApiSidebar",previous:{title:"Update a resource",permalink:"/docs/tools/sdk/typescript/update"},next:{title:"Paginate Results",permalink:"/docs/tools/sdk/typescript/paginate"}},p={},d=[];function l(e){const t={a:"a",code:"code",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"You can use the SDK to delete resources."}),"\n",(0,r.jsxs)(t.p,{children:["Here is an example script that searches for the Workgroup created in ",(0,r.jsx)(t.a,{href:"/docs/tools/sdk/typescript/create",children:"Create a resource"})," by name and calls the delete method to remove it from your environment."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"import {\n  Configuration,\n  GovernanceGroupsBetaApi,\n  GovernanceGroupsBetaApiCreateWorkgroupRequest,\n  GovernanceGroupsBetaApiPatchWorkgroupRequest,\n  PublicIdentitiesApi,\n} from 'sailpoint-api-client';\n\nconst deleteWorkgroup = async () => {\n  let apiConfig = new Configuration();\n  let api = new GovernanceGroupsBetaApi(apiConfig);\n\n  let workgroup = (\n    await api.listWorkgroups({filters: 'name eq \"DB Access Governance Group\"'})\n  ).data[0];\n\n  if (workgroup.id !== undefined) {\n    let deletionStatus = (await api.deleteWorkgroup({id: workgroup.id})).status;\n    console.log(deletionStatus);\n  } else {\n    console.log('Workgroup was not found, id is missing for delete request.');\n  }\n};\n\ndeleteWorkgroup();\n"})}),"\n",(0,r.jsx)(t.p,{children:"Run this command to compile and run the code:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"tsc src/index.ts && node src/index.js\n"})}),"\n",(0,r.jsx)(t.p,{children:"The deletionStatus is returned by the SDK with a value of 204."})]})}function c(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}}}]);