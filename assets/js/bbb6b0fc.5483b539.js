"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[4043],{344215:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var r=s(785893),n=s(511151);const o={id:"typescript-sdk-patch",title:"Updating resources with The TypeScript SDK",pagination_label:"Update a resource",sidebar_label:"Update a resource",sidebar_position:3,sidebar_class_name:"typescriptsdk",keywords:["tsc","typescript","sdk","update"],description:"Learn how to use the TypeScript SDK to update resources.",slug:"/tools/sdk/typescript/update",tags:["SDK"]},i=void 0,a={id:"tools/sdk/typescript/typescript-sdk-patch",title:"Updating resources with The TypeScript SDK",description:"Learn how to use the TypeScript SDK to update resources.",source:"@site/docs/tools/sdk/typescript/updating-resources.md",sourceDirName:"tools/sdk/typescript",slug:"/tools/sdk/typescript/update",permalink:"/docs/tools/sdk/typescript/update",draft:!1,unlisted:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/tools/sdk/typescript/updating-resources.md",tags:[{inline:!0,label:"SDK",permalink:"/docs/tags/sdk"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1724791322e3,sidebarPosition:3,frontMatter:{id:"typescript-sdk-patch",title:"Updating resources with The TypeScript SDK",pagination_label:"Update a resource",sidebar_label:"Update a resource",sidebar_position:3,sidebar_class_name:"typescriptsdk",keywords:["tsc","typescript","sdk","update"],description:"Learn how to use the TypeScript SDK to update resources.",slug:"/tools/sdk/typescript/update",tags:["SDK"]},sidebar:"openApiSidebar",previous:{title:"Create a resource",permalink:"/docs/tools/sdk/typescript/create"},next:{title:"Delete a resource",permalink:"/docs/tools/sdk/typescript/delete"}},p={},d=[];function c(e){const t={a:"a",code:"code",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"You can use the SDK to update resources."}),"\n",(0,r.jsxs)(t.p,{children:["Here is an example update WorkGroup script which will update the description for the Workgroup created in ",(0,r.jsx)(t.a,{href:"/docs/tools/sdk/typescript/create",children:"Create a Resource"}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"import {\n  Configuration,\n  GovernanceGroupsBetaApi,\n  GovernanceGroupsBetaApiCreateWorkgroupRequest,\n  GovernanceGroupsBetaApiPatchWorkgroupRequest,\n  PublicIdentitiesApi,\n} from 'sailpoint-api-client';\n\nconst updateWorkGroup = async () => {\n  let apiConfig = new Configuration();\n  let api = new GovernanceGroupsBetaApi(apiConfig);\n\n  let workgroup = (\n    await api.listWorkgroups({filters: 'name eq \"DB Access Governance Group\"'})\n  ).data[0];\n\n  if (workgroup.id !== undefined) {\n    let updatedWorkgroup: GovernanceGroupsBetaApiPatchWorkgroupRequest = {\n      id: workgroup.id,\n      jsonPatchOperationBeta: [\n        {\n          op: 'replace',\n          path: '/description',\n          value: 'This is an updated description for the workgroup.',\n        },\n      ],\n    };\n    let val = await api.patchWorkgroup(updatedWorkgroup);\n    console.log(val.data);\n  } else {\n    console.log('Workgroup was not found, id is missing for patch request.');\n  }\n};\n\nupdateWorkGroup();\n"})}),"\n",(0,r.jsx)(t.p,{children:"Run this command to compile and run the code:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"tsc src/index.ts && node src/index.js\n"})}),"\n",(0,r.jsx)(t.p,{children:"The updated WorkGroup will be returned by the SDK:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"{\n  description: 'This is an updated description for the workgroup.',\n  owner: {\n    displayName: 'Brian Mendoza',\n    emailAddress: null,\n    type: 'IDENTITY',\n    id: '0003c25c365e492381d4e557b6159f9b',\n    name: 'Brian Mendoza'\n  },\n  memberCount: 0,\n  connectionCount: 0,\n  id: '541ded73-d4b4-41d6-a10c-8085c02815bb',\n  name: 'DB Access Governance Group',\n  created: '2023-12-01T18:14:06Z',\n  modified: '2023-12-01T18:14:06Z'\n}\n"})})]})}function u(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}}}]);