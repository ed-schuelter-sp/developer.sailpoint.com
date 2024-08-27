"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[57685],{535826:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var n=r(785893),a=r(511151);const s={id:"date-compare",title:"Date Compare",pagination_label:"Date Compare",sidebar_label:"Date Compare",sidebar_class_name:"dateCompare",keywords:["transforms","operations","date","compare"],description:"Compare two dates and return a calculated value.",slug:"/extensibility/transforms/operations/date-compare",tags:["Transforms","Transform Operations"]},i=void 0,o={id:"extensibility/transforms/operations/date-compare",title:"Date Compare",description:"Compare two dates and return a calculated value.",source:"@site/docs/extensibility/transforms/operations/date-compare.md",sourceDirName:"extensibility/transforms/operations",slug:"/extensibility/transforms/operations/date-compare",permalink:"/docs/extensibility/transforms/operations/date-compare",draft:!1,unlisted:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/extensibility/transforms/operations/date-compare.md",tags:[{inline:!0,label:"Transforms",permalink:"/docs/tags/transforms"},{inline:!0,label:"Transform Operations",permalink:"/docs/tags/transform-operations"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1724791322e3,frontMatter:{id:"date-compare",title:"Date Compare",pagination_label:"Date Compare",sidebar_label:"Date Compare",sidebar_class_name:"dateCompare",keywords:["transforms","operations","date","compare"],description:"Compare two dates and return a calculated value.",slug:"/extensibility/transforms/operations/date-compare",tags:["Transforms","Transform Operations"]},sidebar:"openApiSidebar",previous:{title:"Conditional",permalink:"/docs/extensibility/transforms/operations/conditional"},next:{title:"Date Format",permalink:"/docs/extensibility/transforms/operations/date-format"}},d={},l=[{value:"Overview",id:"overview",level:2},{value:"Transform Structure",id:"transform-structure",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Examples",id:"examples",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,n.jsx)(t.p,{children:'Use the date compare transform to compare two dates and, depending on the comparison result, return one value if one date is after the other or return a different value if it is before the other. A common use case is to calculate lifecycle states (e.g., the user is "active" if the current date is greater than or equal to the user\'s hire date, etc.).'}),"\n",(0,n.jsx)(t.admonition,{title:"Other Considerations",type:"note",children:(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:'In addition to explicit date values, the transform recognizes the "now" keyword that always evaluates to the exact date and time when the transform is evaluating.'}),"\n",(0,n.jsxs)(t.li,{children:["All dates ",(0,n.jsx)(t.strong,{children:"must"})," be in ",(0,n.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/ISO_8601",children:"ISO8601 format"})," in order for the date compare transform to evaluate properly."]}),"\n"]})}),"\n",(0,n.jsx)(t.h2,{id:"transform-structure",children:"Transform Structure"}),"\n",(0,n.jsxs)(t.p,{children:["The date compare transform takes as an input the two dates to compare, denoted as ",(0,n.jsx)(t.code,{children:"firstDate"})," and ",(0,n.jsx)(t.code,{children:"secondDate"}),". The transform also requires an ",(0,n.jsx)(t.code,{children:"operator"})," designation so it knows which condition to evaluate for. Lastly, the transform requires both a ",(0,n.jsx)(t.code,{children:"positiveCondition"})," and a ",(0,n.jsx)(t.code,{children:"negativeCondition"})," -- the former returns if the comparison evaluates to ",(0,n.jsx)(t.code,{children:"true"}),"; the latter returns if the comparison evaluates to ",(0,n.jsx)(t.code,{children:"false"}),"."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'{\n  "attributes": {\n    "firstDate": {\n      "attributes": {\n        "sourceName": "HR Source",\n        "attributeName": "termination_date"\n      },\n      "type": "accountAttribute"\n    },\n    "secondDate": "now",\n    "operator": "gt",\n    "positiveCondition": "active",\n    "negativeCondition": "terminated"\n  },\n  "type": "dateCompare",\n  "name": "Date Compare Transform"\n}\n'})}),"\n",(0,n.jsx)(t.h2,{id:"attributes",children:"Attributes"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Required Attributes"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"type"})," - This must always be set to ",(0,n.jsx)(t.code,{children:"dateCompare"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"name"})," - This is a required attribute for all transforms. It represents the name of the transform as it will appear in the UI's dropdown menus."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"firstDate"})," - This is the first date to consider (i.e., the date that would be on the left hand side of the comparison operation)."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"secondDate"})," - This is the second date to consider (i.e., the date that would be on the right hand side of the comparison operation)."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"operator"})," - This is the comparison to perform. The following values are valid:","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"LT"}),": Strictly less than: firstDate < secondDate"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"LTE"}),": Less than or equal to: firstDate <= secondDate"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"GT"}),": Strictly greater than: firstDate > secondDate"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"GTE"}),": Greater than or equal to: firstDate >= secondDate"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"positiveCondition"})," - This is the value to return if the comparison is true."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"negativeCondition"})," - This is the value to return if the comparison is false."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Optional Attributes"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"requiresPeriodicRefresh"})," - This ",(0,n.jsx)(t.code,{children:"true"})," or ",(0,n.jsx)(t.code,{children:"false"})," value indicates whether the transform logic should be reevaluated every evening as part of the identity refresh process. The default value is ",(0,n.jsx)(t.code,{children:"false"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsxs)(t.p,{children:["This transform accomplishes a basic lifecycle state calculation. It compares the user's termination date with his/her HR record. If the current datetime (denoted by ",(0,n.jsx)(t.code,{children:"now"}),') is less than that date, the transform returns "active". If the current datetime is greater than that date, the transform returns "terminated".']}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Transform Request Body"}),":"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'{\n  "attributes": {\n    "firstDate": {\n      "attributes": {\n        "sourceName": "HR Source",\n        "attributeName": "termination_date"\n      },\n      "type": "accountAttribute"\n    },\n    "secondDate": "now",\n    "operator": "gt",\n    "positiveCondition": "active",\n    "negativeCondition": "terminated"\n  },\n  "type": "dateCompare",\n  "name": "Date Compare Transform"\n}\n'})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)("p",{children:"\xa0"}),"\n",(0,n.jsx)(t.p,{children:'This transform compares the user\'s hire date to a fixed date in the past. If the user was hired prior to January 1, 1996, the transform returns "legacy". If the user was hired later than January 1, 1996, it returns "regular".'}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Transform Request Body"}),":"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'{\n  "attributes": {\n    "firstDate": {\n      "attributes": {\n        "sourceName": "HR Source",\n        "attributeName": "hire_date"\n      },\n      "type": "accountAttribute"\n    },\n    "secondDate": {\n      "attributes": {\n        "input": "12/31/1995",\n        "inputFormat": "M/d/yyyy",\n        "outputFormat": "ISO8601"\n      },\n      "type": "dateFormat"\n    },\n    "operator": "lte",\n    "positiveCondition": "legacy",\n    "negativeCondition": "regular"\n  },\n  "type": "dateCompare",\n  "name": "Date Compare Transform"\n}\n'})})]})}function h(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}}}]);