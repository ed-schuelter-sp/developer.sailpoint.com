"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[91099],{332618:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var n=i(785893),o=i(511151);const a={id:"handling-rate-limits",title:"Handling Rate Limits",pagination_label:"Handling Rate Limits",sidebar_label:"Handling Rate Limits",sidebar_position:6,sidebar_class_name:"handlingRateLimits",keywords:["connectivity","connectors","rate limits"],description:"Rate limiting for SaaS Connectivity.",slug:"/connectivity/saas-connectivity/in-depth/handling-rate-limits",tags:["Connectivity"]},s=void 0,r={id:"connectivity/saas-connectivity/in-depth/handling-rate-limits",title:"Handling Rate Limits",description:"Rate limiting for SaaS Connectivity.",source:"@site/docs/connectivity/saas-connectivity/in-depth/rate-limits.md",sourceDirName:"connectivity/saas-connectivity/in-depth",slug:"/connectivity/saas-connectivity/in-depth/handling-rate-limits",permalink:"/docs/connectivity/saas-connectivity/in-depth/handling-rate-limits",draft:!1,unlisted:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/connectivity/saas-connectivity/in-depth/rate-limits.md",tags:[{inline:!0,label:"Connectivity",permalink:"/docs/tags/connectivity"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1724791322e3,sidebarPosition:6,frontMatter:{id:"handling-rate-limits",title:"Handling Rate Limits",pagination_label:"Handling Rate Limits",sidebar_label:"Handling Rate Limits",sidebar_position:6,sidebar_class_name:"handlingRateLimits",keywords:["connectivity","connectors","rate limits"],description:"Rate limiting for SaaS Connectivity.",slug:"/connectivity/saas-connectivity/in-depth/handling-rate-limits",tags:["Connectivity"]},sidebar:"openApiSidebar",previous:{title:"Logging",permalink:"/docs/connectivity/saas-connectivity/in-depth/logging"},next:{title:"Testing",permalink:"/docs/connectivity/saas-connectivity/in-depth/testing"}},c={},l=[];function d(e){const t={a:"a",code:"code",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["APIs often implement rate limits to prevent any one user from abusing the API or using an unfair amount of resources, limiting what other users of the API can do. The rate limits can manifest in many ways, but one of the most common ways is the 429 (Too Many Requests) HTTP status code. You must check the documentation of the API you are using to see whether it enforces rate limits and how it notifies you when you reach that limit. An example of rate limit documentation for Stripe\u2019s API can be found ",(0,n.jsx)(t.a,{href:"https://stripe.com/docs/rate-limits",children:"here"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["If you are using a vendor supplied client library for the API, check the documentation for that client library to see whether it handles rate limits for you. If it does, you do not need to worry about rate limits. If it does not or if you have to implement your own library for interacting with the target API, you must handle rate limiting yourself. If you are implementing your own library for the target API, the easiest way to handle rate limits is to use the ",(0,n.jsx)(t.a,{href:"https://www.npmjs.com/package/axios-retry",children:"axios-retry"})," NPM package in conjunction with the ",(0,n.jsx)(t.a,{href:"https://www.npmjs.com/package/axios",children:"axios"})," HTTP request library. Start by including both packages in the dependencies section of your ",(0,n.jsx)(t.code,{children:"package.json"})," file:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'...\n"dependencies": {\n    "@sailpoint/connector-sdk": "github:sailpoint-oss/sp-connector-sdk-js#main",\n    "axios": "^0.24.0",\n    "axios-retry": "^3.2.4"\n  }\n...\n'})}),"\n",(0,n.jsxs)(t.p,{children:["Next, run ",(0,n.jsx)(t.code,{children:"npm install"})," in your project directory to install the packages. Once they are installed, go to the section of your code that handles API calls to your source and wrap your Axios HTTP client object in an Axios retry object. In the following snippet, the code automatically retries an API call that fails with a 429 error code three times, using exponential back-off between each API call. You can configure this better to suit your API\u2019s rate limit. The following code snippet from ",(0,n.jsx)(t.a,{href:"https://github.com/sailpoint-oss/discourse-connector-2/blob/main/src/discourse-client.ts",children:"discourse-client.ts"})," shows the code necessary to set up the retry logic:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:"import { ConnectorError } from \"@sailpoint/connector-sdk\"\nimport axios, { AxiosInstance } from \"axios\"\nimport axiosRetry from \"axios-retry\"\n\n/**\n * DiscourseClient is the client that communicates with Discourse APIs.\n */\nexport class DiscourseClient {\n    private readonly apiKey?: string\n    private readonly apiUsername?: string\n    private readonly baseUrl?: string\n\n    httpClient: AxiosInstance\n\n    constructor(config: any) {\n        // Fetch necessary properties from config.\n        this.apiKey = config?.apiKey\n        if (this.apiKey == null) {\n            throw new ConnectorError('apiKey must be provided from config')\n        }\n\n        this.apiUsername = config?.apiUsername\n        if (this.apiUsername == null) {\n            throw new ConnectorError('apiUsername must be provided from config')\n        }\n\n        this.baseUrl = config?.baseUrl\n        if (this.baseUrl == null) {\n            throw new ConnectorError('baseUrl must be provided from config')\n        }\n\n        this.httpClient = axios.create({\n            baseURL: this.baseUrl,\n            headers: {\n                'Api-Key': this.apiKey,\n                'Api-Username': this.apiUsername\n            }\n        })\n\n        // Wrap our Axios HTTP client in an Axios retry object to automatically\n        // handle rate limiting.  By default, this logic will retry a given\n        // API call 3 times before failing.  Read the documentation for\n        // axios-retry on NPM to see more configuration options.\n        axiosRetry(this.httpClient, {\n            retryDelay: axiosRetry.exponentialDelay,\n            retryCondition: (error) => {\n                // Only retry if the API call recieves an error code of 429\n                // this logic can be replaced with whatever approach is necessary for your connector\n                return error.response!.status === 429\n            }\n        })\n    }\n...\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Because ",(0,n.jsx)(t.code,{children:"axios-retry"})," wraps an ",(0,n.jsx)(t.code,{children:"axios"})," object, you can make API calls like you normally would with Axios without any special options or configuration."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:"private async getUserEmailAddress(username: string): Promise<string> {\n    // Use our axios httpClient object like we normally would.  If this call\n    // fails with a 429, it will automatically wait 30 seconds before retrying\n    // the call.  It will do this three times before hard failing.  The catch\n    // function will catch any other error besides a 429.\n    const response = await this.httpClient.get<UserEmail>(`/u/${username}/emails.json`).catch(error => {\n        throw new ConnectorError(`Failed to retrieve email for user ${username}`)\n    })\n\n    return response.data.email!\n}\n"})})]})}function h(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}}}]);