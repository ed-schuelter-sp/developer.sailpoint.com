"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[20058],{567147:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>l,frontMatter:()=>s,metadata:()=>a,toc:()=>p});var r=n(785893),i=n(511151);const s={id:"typescript-sdk-create",title:"Creating resources with The TypeScript SDK",pagination_label:"Create a resource",sidebar_label:"Create a resource",sidebar_position:2,sidebar_class_name:"typescriptsdk",keywords:["tsc","typescript","sdk","create"],description:"Learn how to use the TypeScript SDK to create new resources.",slug:"/tools/sdk/typescript/create",tags:["SDK"]},o=void 0,a={id:"tools/sdk/typescript/typescript-sdk-create",title:"Creating resources with The TypeScript SDK",description:"Learn how to use the TypeScript SDK to create new resources.",source:"@site/docs/tools/sdk/typescript/creating-resources.md",sourceDirName:"tools/sdk/typescript",slug:"/tools/sdk/typescript/create",permalink:"/docs/tools/sdk/typescript/create",draft:!1,unlisted:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/tools/sdk/typescript/creating-resources.md",tags:[{inline:!0,label:"SDK",permalink:"/docs/tags/sdk"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1724791322e3,sidebarPosition:2,frontMatter:{id:"typescript-sdk-create",title:"Creating resources with The TypeScript SDK",pagination_label:"Create a resource",sidebar_label:"Create a resource",sidebar_position:2,sidebar_class_name:"typescriptsdk",keywords:["tsc","typescript","sdk","create"],description:"Learn how to use the TypeScript SDK to create new resources.",slug:"/tools/sdk/typescript/create",tags:["SDK"]},sidebar:"openApiSidebar",previous:{title:"Getting Started",permalink:"/docs/tools/sdk/typescript/getting-started"},next:{title:"Update a resource",permalink:"/docs/tools/sdk/typescript/update"}},c={},p=[];function d(e){const t={code:"code",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"You can use the SDK to create new resources."}),"\n",(0,r.jsx)(t.p,{children:"Here is an example create workgroup script from the beta APIs you can copy into your typescript project to try it out:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",metastring:"showLineNumbers",children:"import {\n  Configuration,\n  GovernanceGroupsBetaApi,\n  GovernanceGroupsBetaApiCreateWorkgroupRequest,\n  PublicIdentitiesApi,\n} from 'sailpoint-api-client';\n\nconst createWorkGroup = async () => {\n  let apiConfig = new Configuration();\n  let identitiesApi = new PublicIdentitiesApi(apiConfig);\n\n  let identity = (await identitiesApi.getPublicIdentities({limit: 1})).data[0];\n\n  let api = new GovernanceGroupsBetaApi(apiConfig);\n  let workgroup: GovernanceGroupsBetaApiCreateWorkgroupRequest = {\n    workgroupDtoBeta: {\n      name: 'DB Access Governance Group',\n      description: 'Description of the Governance Group',\n      owner: {\n        id: identity.id,\n        type: 'IDENTITY',\n        name: identity.name,\n      },\n    },\n  };\n\n  let val = await api.createWorkgroup(workgroup);\n  console.log(val.data);\n};\n\ncreateWorkGroup();\n"})}),"\n",(0,r.jsx)(t.p,{children:"Run this command to compile and run the code:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"tsc src/index.ts && node src/index.js\n"})}),"\n",(0,r.jsxs)(t.p,{children:["The example uses the ",(0,r.jsx)(t.code,{children:"getPublicIdentities"})," method from the ",(0,r.jsx)(t.code,{children:"PublicIdentitiesApi"})," to pull an identity needed to be the owner of the Workgroup."]}),"\n",(0,r.jsx)(t.p,{children:"The create workgroup request is initialized on lines 10-20 using the identity's name and id in the owner object."}),"\n",(0,r.jsx)(t.p,{children:"The WorkGroup will be returned by the SDK:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"{\n  description: 'Description of the Governance Group',\n  owner: {\n    displayName: 'Brian Mendoza',\n    emailAddress: null,\n    type: 'IDENTITY',\n    id: '0003c25c365e492381d4e557b6159f9b',\n    name: 'Brian Mendoza'\n  },\n  memberCount: 0,\n  connectionCount: 0,\n  id: '541ded73-d4b4-41d6-a10c-8085c02815bb',\n  name: 'DB Access Governance Group',\n  created: null,\n  modified: null\n}\n"})})]})}function l(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}}}]);