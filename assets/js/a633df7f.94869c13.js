"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[17390],{522366:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var i=t(785893),s=t(511151),r=t(365332),o=t(424455);const a={id:"typescript-sdk",title:"TypeScript SDK",pagination_label:"TypeScript SDK",sidebar_label:"TypeScript",sidebar_position:4,sidebar_class_name:"typescriptsdk",keywords:["tsc","typescript","sdk"],description:"Easy ISC development in TypeScript.",slug:"/tools/sdk/typescript",tags:["SDK"]},l=void 0,c={id:"tools/sdk/typescript/typescript-sdk",title:"TypeScript SDK",description:"Easy ISC development in TypeScript.",source:"@site/docs/tools/sdk/typescript/index.mdx",sourceDirName:"tools/sdk/typescript",slug:"/tools/sdk/typescript",permalink:"/docs/tools/sdk/typescript",draft:!1,unlisted:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/tools/sdk/typescript/index.mdx",tags:[{inline:!0,label:"SDK",permalink:"/docs/tags/sdk"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1724791322e3,sidebarPosition:4,frontMatter:{id:"typescript-sdk",title:"TypeScript SDK",pagination_label:"TypeScript SDK",sidebar_label:"TypeScript",sidebar_position:4,sidebar_class_name:"typescriptsdk",keywords:["tsc","typescript","sdk"],description:"Easy ISC development in TypeScript.",slug:"/tools/sdk/typescript",tags:["SDK"]},sidebar:"openApiSidebar",previous:{title:"Error Handling",permalink:"/docs/tools/sdk/python/error-handling"},next:{title:"Getting Started",permalink:"/docs/tools/sdk/typescript/getting-started"}},d={},p=[{value:"Overview",id:"overview",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Setup",id:"setup",level:2},{value:"Configure",id:"configure",level:2},{value:"Configuration File",id:"configuration-file",level:3},{value:"Example &quot;config.json&quot;",id:"example-configjson",level:4},{value:"Example &quot;config.json&quot;",id:"example-configjson-1",level:4},{value:"Environment variable configuration",id:"environment-variable-configuration",level:3},{value:"Discuss",id:"discuss",level:2},{value:"Getting Started",id:"getting-started",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)(n.p,{children:"Learn how to install and configure the TypeScript SDK in this guide."}),"\n",(0,i.jsx)(n.h2,{id:"requirements",children:"Requirements"}),"\n",(0,i.jsx)(n.p,{children:"You need the following to use the TypeScript SDK:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Node"}),". To learn how to download it and set it up, go ",(0,i.jsx)(n.a,{href:"https://nodejs.org/en/download",children:"here"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"TypeScript"}),". You can use ",(0,i.jsx)(n.code,{children:"npm"})," to install TypeScript globally. This means that you can use the ",(0,i.jsx)(n.code,{children:"tsc"})," command anywhere in your terminal. To do so, run this command:"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"npm install -g typescript\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Your tenant name in ISC. To learn how to find it, refer to ",(0,i.jsx)(n.a,{href:"/docs/api/getting-started#find-your-tenant-name",children:"Getting Started"}),". The SDK will use this tenant name to connect to your ISC instance."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["A PAT with a client secret and ID. To learn how to create one in ISC, refer to ",(0,i.jsx)(n.a,{href:"https://documentation.sailpoint.com/saas/help/common/api_keys.html#generating-a-personal-access-token",children:"Personal Access Tokens"}),". The SDK will use this PAT to authenticate with the SailPoint APIs."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,i.jsxs)(t,{children:[(0,i.jsxs)("summary",{children:["CLI Assisted ",(0,i.jsx)("em",{children:"(Recommended)"})]}),(0,i.jsxs)(n.p,{children:["The SailPoint CLI offers a few commands that will allow you to quickly get started with the Typescript SDK. To learn how to install and use the SailPoint CLI, refer to ",(0,i.jsx)(n.a,{href:"https://developer.sailpoint.com/idn/tools/cli#get-the-cli",children:"SailPoint CLI"}),"."]}),(0,i.jsx)(n.p,{children:"Once the CLI is installed and configured, run this command to create a new Typescript project with the Typescript SDK:"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sail sdk init typescript typescript-example\n"})}),(0,i.jsx)(n.p,{children:"Running the command creates the structure for your project:"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"|-- typescript-example\n|   |-- package.json\n|   |-- src\n|   |   |-- index.ts\n|   |-- tsconfig.json\n"})}),(0,i.jsx)(n.p,{children:"Navigate into your project folder and run this command to install the required dependencies:"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"npm install\n"})}),(0,i.jsxs)(n.p,{children:["The SDK is now installed. To learn how to configure the SDK, refer to the ",(0,i.jsx)(n.a,{href:"#configure",children:"Configure section"}),"."]})]}),"\n",(0,i.jsxs)(t,{children:[(0,i.jsx)("summary",{children:"Manual Installation"}),(0,i.jsx)(n.p,{children:"To begin your typescript project, you will need to create a directory for your project. Run this command to create your project directory:"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"mkdir typescript-example\n"})}),(0,i.jsx)(n.p,{children:"Then run this command to change into your project directory:"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cd typescript-example\n"})}),(0,i.jsx)(n.p,{children:'To initialize your project directory and create the "package.json" file, run this command in your project directory.'}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"npm init\n"})}),(0,i.jsx)(n.p,{children:"You will update this file with the dependencies necessary to use the SDK."}),(0,i.jsx)(n.p,{children:'Create a source folder named "src". The SDK will include the "src/**/*" folder path when it compiles, so your SDK file must be there. Run this command to create the "src" folder:'}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"mkdir src\n"})}),(0,i.jsxs)(n.p,{children:["Go to the ",(0,i.jsx)(n.code,{children:"src"}),' folder and create a file named "index.ts". You will need to compile the "index.ts" file to run the SDK. You can leave this "index.ts" file empty for now.']}),(0,i.jsx)(n.p,{children:'Go to the project directory and create a file named "tsconfig.json". This file will contain your compiler configuration. Copy this information into your "tsconfig.json" file:'}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:'{\n    "compilerOptions": {\n      "target": "ES2020",                                  /* Set the JavaScript language version for emitted JavaScript and include compatible library declarations. */\n      "module": "commonjs",                                /* Specify what module code is generated. */\n      "moduleResolution": "node",                       /* Specify how TypeScript looks up a file from a given module specifier. */\n      "esModuleInterop": true,                             /* Omit additional JavaScript to ease support for importing CommonJS modules. This enables \'allowSyntheticDefaultImports\' for type compatibility. */\n      "forceConsistentCasingInFileNames": true,            /* Ensure that casing is correct in imports. */\n      "strict": true,                                      /* Enable all strict type-checking options. */\n      "skipLibCheck": true,\n      "outDir": "./build",\n      "rootDir": "src",\n      "sourceMap": true\n    },\n    "include": ["src/**/*"],\n    "exclude": ["node_modules"]\n  }\n'})}),(0,i.jsx)(n.p,{children:"Run this command to add the SailPoint SDK to your project's dependencies:"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"npm install sailpoint-api-client\n"})}),(0,i.jsx)(n.p,{children:"Or run this command to do the same:"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"yarn add sailpoint-api-client\n"})}),(0,i.jsxs)(n.p,{children:["The SDK is now installed. To learn how to configure the SDK, refer to the ",(0,i.jsx)(n.a,{href:"#configure",children:"Configure section"}),"."]})]}),"\n",(0,i.jsx)(n.h2,{id:"configure",children:"Configure"}),"\n",(0,i.jsx)(n.p,{children:'You must provide configuration to the SDK so that it can authenticate to your SailPoint tenant and make API calls. To do so, you can use a configuration file, "config.json", or environment variables.'}),"\n",(0,i.jsx)(n.h3,{id:"configuration-file",children:"Configuration File"}),"\n",(0,i.jsxs)(n.p,{children:['The SDK requires a configuration file to be named "config.json". Within the file, provide these key/value pairs: ',(0,i.jsx)(n.code,{children:"ClientId"}),", ",(0,i.jsx)(n.code,{children:"ClientSecret"}),", ",(0,i.jsx)(n.code,{children:"BaseURL"}),"."]}),"\n",(0,i.jsxs)(t,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsxs)("summary",{children:["CLI Assisted ",(0,i.jsx)("em",{children:"(Recommended)"})]}),"\nThe SailPoint CLI offers a command to generate the config.json file with your currently configured CLI credentials."]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sail sdk init config\n"})}),(0,i.jsx)(n.p,{children:'If you have multiple environments configured with the CLI, you can pass an additional parameter to state the environment you wish to create a "config.json" for.'}),(0,i.jsx)(n.p,{children:"To pass an additional parameter that states the environment you want to configure, run this command:"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sail sdk init config --env devrel\n"})}),(0,i.jsx)(n.h4,{id:"example-configjson",children:'Example "config.json"'}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "ClientId": "g0567b766b413b22c05c66e75d532f1b",\n  "ClientSecret": "cabd0e950a7230b63c1ff45be33fb22065b382b6251a73c61177a8bb5482fcc7",\n  "BaseURL": "https://[tenant].api.identitynow.com"\n}\n'})})]}),"\n",(0,i.jsxs)(t,{children:[(0,i.jsx)("summary",{children:"Manual Configuration"}),(0,i.jsxs)(n.p,{children:['Create a file named "config.json", and provide these key/value pairs: ',(0,i.jsx)(n.code,{children:"ClientId"}),", ",(0,i.jsx)(n.code,{children:"ClientSecret"}),", ",(0,i.jsx)(n.code,{children:"BaseURL"}),"."]}),(0,i.jsx)(n.h4,{id:"example-configjson-1",children:'Example "config.json"'}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "ClientId": "g0567b766b413b22c05c66e75d532f1b",\n  "ClientSecret": "cabd0e950a7230b63c1ff45be33fb22065b382b6251a73c61177a8bb5482fcc7",\n  "BaseURL": "https://[tenant].api.identitynow.com"\n}\n'})})]}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsx)(n.p,{children:"Please ensure this file is ignored in your version control system (ex. .gitignore for git)"})}),"\n",(0,i.jsx)(n.h3,{id:"environment-variable-configuration",children:"Environment variable configuration"}),"\n",(0,i.jsx)(n.p,{children:"You can also store your configuration in environment variables."}),"\n",(0,i.jsxs)(n.p,{children:["To get your environment variables to persist across terminal sessions, add these exports to your shell profile, something like ",(0,i.jsx)(n.code,{children:"~/.bash_profile"}),"."]}),"\n","\n",(0,i.jsxs)(r.Z,{children:[(0,i.jsx)(o.default,{value:"linux_mac",label:"Linux/Mac",default:!0,children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"export SAIL_BASE_URL=https://[tenant].api.identitynow.com\nexport SAIL_CLIENT_ID=[clientID]\nexport SAIL_CLIENT_SECRET=[clientSecret]\n"})})}),(0,i.jsxs)(o.default,{value:"windows",label:"Windows PowerShell",children:[(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"$env:SAIL_BASE_URL=https://[tenant].api.identitynow.com\n$env:SAIL_CLIENT_ID=[clientID]\n$env:SAIL_CLIENT_SECRET=[clientSecret]\n"})}),(0,i.jsx)(n.p,{children:"To get your environment variables to persist across PowerShell sessions, run these commands instead:"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-powershell",children:"[System.Environment]::SetEnvironmentVariable('SAIL_BASE_URL','https://[tenant].api.identitynow.com')\n[System.Environment]::SetEnvironmentVariable('SAIL_CLIENT_ID','[clientID]')\n[System.Environment]::SetEnvironmentVariable('SAIL_CLIENT_SECRET','[clientSecret]')\n"})})]})]}),"\n",(0,i.jsx)(n.h2,{id:"discuss",children:"Discuss"}),"\n",(0,i.jsxs)(n.p,{children:["You can use this SDK to build new tools that extend your ISC platform and improve experiences across your organization. Use this guide to get started, and if you have questions, don't hesitate to reach out on the SailPoint Developer Community forum at ",(0,i.jsx)(n.a,{href:"https://developer.sailpoint.com/discuss",children:"https://developer.sailpoint.com/discuss"}),"!"]}),"\n",(0,i.jsx)(n.h2,{id:"getting-started",children:"Getting Started"}),"\n",(0,i.jsxs)(n.p,{children:["To get started using the SDK, refer to the ",(0,i.jsx)(n.a,{href:"/docs/tools/sdk/typescript/getting-started",children:"Getting Started Guide"}),"."]})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},365332:(e,n,t)=>{t.d(n,{Z:()=>S});var i=t(667294),s=t(490512),r=t(8757),o=t(873276),a=t(254939);const l={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var c=Object.defineProperty,d=Object.defineProperties,p=Object.getOwnPropertyDescriptors,h=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,g=(e,n,t)=>n in e?c(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,j=(e,n)=>{for(var t in n||(n={}))u.call(n,t)&&g(e,t,n[t]);if(h)for(var t of h(n))m.call(n,t)&&g(e,t,n[t]);return e},x=(e,n)=>d(e,p(n));function f({className:e,block:n,selectedValue:t,selectValue:o,tabValues:a}){const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,r.o5)(),p=e=>{const n=e.currentTarget,i=c.indexOf(n),s=a[i].value;s!==t&&(d(n),o(s))},h=e=>{var n,t;let i=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;i=null!=(n=c[t])?n:c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;i=null!=(t=c[n])?t:c[c.length-1];break}}null==i||i.focus()};return i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},e)},a.map((({value:e,label:n,attributes:r})=>i.createElement("li",x(j({role:"tab",tabIndex:t===e?0:-1,"aria-selected":t===e,key:e,ref:e=>c.push(e),onKeyDown:h,onClick:p},r),{className:(0,s.Z)("tabs__item",l.tabItem,null==r?void 0:r.className,{"tabs__item--active":t===e})}),null!=n?n:e))))}function y({lazy:e,children:n,selectedValue:t}){const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(e){const e=s.find((e=>e.props.value===t));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return i.createElement("div",{className:"margin-top--md"},s.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==t}))))}function b(e){const n=(0,o.Y)(e);return i.createElement("div",{className:(0,s.Z)("tabs-container",l.tabList)},i.createElement(f,j(j({},n),e)),i.createElement(y,j(j({},n),e)))}function S(e){const n=(0,a.default)();return i.createElement(b,j({key:String(n)},e),(0,o.h)(e.children))}}}]);