"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[71423],{441566:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>y,contentTitle:()=>b,default:()=>q,frontMatter:()=>g,metadata:()=>v,toc:()=>N});var i=a(785893),l=a(511151),r=a(168562),t=a.n(r),n=(a(69957),a(496463)),c=(a(318438),a(998439)),o=a.n(c),p=(a(534168),a(603655)),d=a.n(p),m=a(313503),h=a.n(m),x=a(82479),u=a.n(x),j=a(555199),f=(a(645774),a(424455));const g={id:"patch-profiles",sidebar_label:"Update multiple profiles",hide_title:!0,hide_table_of_contents:!0,api:"eJztVt9vGkkM/ldGfl4CIQm9W+keaJXTUV3bKCH3EiFkZr3stLsz2/lBgtD+75VngYWSpo1093Y8wGB/47E9tr/ZgKnJoldGTzJIoUYvixtrclWSgwQyctKqmvWQwn2doSdRhdKruiRRd0CPSwfpA+xFswQsfQ3k/FuTrSHdxL/KUgapt4ESkEZ70p5VWNelktGN/mfHZ23AyYIq5JVf1wQpmMVnkh4SPqMm6xU51u5P7JBoLa4hAeWpcj+3oLIDjPNW6SUkkBtboYcUQlAZNAlorOgU2CQ7D+asmP+iMefRB/cclHSoOJNj6dWKIIGJxt3ykxZ/E8bllGylNHrKYNYkoLJ5bY3JlV7Of267Jp21khodX1+Oqox20MpCregwiIUxJaGO1ZBjKD2kOZaOGO29VYvg6dksY5YpvlIsb47yfZJAesKqLtvk0pOf783OOVtpTJaSgnXsBXo6gQzO++dX/eFgOIDuQhyVJE/NbetbfOQLTWBXzvNXbEvuSBqdiSPZtFD2WARtlUczxv7I8L0je+LMa/btvOkErSud4aZpEvDKc5J3gbjekOVN1FlytdGuvaDhYMA/x81//VST9JSJHVR4I1CssFQsi60Or+hqo+lTDunDad187yc0yY9B780CmlkbxOVzfr/FTNy27omeCBoXZXRdGq45T2f/rtMTHTPynre+5Pc/jIrHXFtrrNsHcfVcEBPtyWosxR3ZFVkR94iesOSD1ZQJo0XQBeqspEzQk6S4070quJenJPGRp56NRUXO4ZJEK18ovRS+INHiD5ob7oy1a+FMRb5g1CNpLx6t4SGwq0PWmT0TxQHlC0ihf8A1LubAxWsItoQUCu9rl/b7G08ateeSb8600VTVpVkTnUlT9bFWkMAKreISaCfRHt4Gth1vgLIiaU74bxrhgolAoHNqyZnnUgrOm4oshzFj/2Swyq+jgwtCS3YcOIqH2aH6jhPf+nEI2t8DB8XRRhjP4QiCZLv4c0cpU/OFtPD8/cfaBNsugbPJd3zbsfB1N2c71nxoCRAucvztKh9d9q7enL/pXV6Nhr3FRS57Q/n76CIfjTDHEexYsKOUE/L7VUM7luqI7jkOO6Cqjpoi/Zywz//M8d8wR3xe6Nxwkrnv2l44PxucDQ7m2cfr2w9ifDM5bZqCxE4pJGqxIBFc2zgoJTknUGeiMpnK14Lb0wTHJGOCleSE0iJWNemVskZXpD1PtVJJ0i7W8rYkP0ymsehr43yF+kDzwrv1yNdNNytffOu2/clF1a9LVDzo20G02Y6r43dwYZxn2WazQEf3tmwaFn8NZHlGzLqhFEdEAgVhRja25hdaQwrvWrd6Uz6Z4WWI79zvxzkTTrtjLJkCXsTODqbtzXj67i8eLdu3emUy3mTxEZL4nQIkYFpSiY95lm2gRL0MuGRsa5Q/3wBkMk5r",sidebar_class_name:"patch api-method",info_path:"docs/api/nerm/v1/nerm-api",custom_edit_url:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Update multiple profiles' (patch-profiles)"},b=void 0,v={id:"api/nerm/v1/patch-profiles",title:"patch-profiles",description:"<Heading",source:"@site/docs/api/nerm/v1/patch-profiles.api.mdx",sourceDirName:"api/nerm/v1",slug:"/api/nerm/v1/patch-profiles",permalink:"/docs/api/nerm/v1/patch-profiles",draft:!1,unlisted:!1,editUrl:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Update multiple profiles' (patch-profiles)",tags:[],version:"current",frontMatter:{id:"patch-profiles",sidebar_label:"Update multiple profiles",hide_title:!0,hide_table_of_contents:!0,api:"eJztVt9vGkkM/ldGfl4CIQm9W+keaJXTUV3bKCH3EiFkZr3stLsz2/lBgtD+75VngYWSpo1093Y8wGB/47E9tr/ZgKnJoldGTzJIoUYvixtrclWSgwQyctKqmvWQwn2doSdRhdKruiRRd0CPSwfpA+xFswQsfQ3k/FuTrSHdxL/KUgapt4ESkEZ70p5VWNelktGN/mfHZ23AyYIq5JVf1wQpmMVnkh4SPqMm6xU51u5P7JBoLa4hAeWpcj+3oLIDjPNW6SUkkBtboYcUQlAZNAlorOgU2CQ7D+asmP+iMefRB/cclHSoOJNj6dWKIIGJxt3ykxZ/E8bllGylNHrKYNYkoLJ5bY3JlV7Of267Jp21khodX1+Oqox20MpCregwiIUxJaGO1ZBjKD2kOZaOGO29VYvg6dksY5YpvlIsb47yfZJAesKqLtvk0pOf783OOVtpTJaSgnXsBXo6gQzO++dX/eFgOIDuQhyVJE/NbetbfOQLTWBXzvNXbEvuSBqdiSPZtFD2WARtlUczxv7I8L0je+LMa/btvOkErSud4aZpEvDKc5J3gbjekOVN1FlytdGuvaDhYMA/x81//VST9JSJHVR4I1CssFQsi60Or+hqo+lTDunDad187yc0yY9B780CmlkbxOVzfr/FTNy27omeCBoXZXRdGq45T2f/rtMTHTPynre+5Pc/jIrHXFtrrNsHcfVcEBPtyWosxR3ZFVkR94iesOSD1ZQJo0XQBeqspEzQk6S4070quJenJPGRp56NRUXO4ZJEK18ovRS+INHiD5ob7oy1a+FMRb5g1CNpLx6t4SGwq0PWmT0TxQHlC0ihf8A1LubAxWsItoQUCu9rl/b7G08ateeSb8600VTVpVkTnUlT9bFWkMAKreISaCfRHt4Gth1vgLIiaU74bxrhgolAoHNqyZnnUgrOm4oshzFj/2Swyq+jgwtCS3YcOIqH2aH6jhPf+nEI2t8DB8XRRhjP4QiCZLv4c0cpU/OFtPD8/cfaBNsugbPJd3zbsfB1N2c71nxoCRAucvztKh9d9q7enL/pXV6Nhr3FRS57Q/n76CIfjTDHEexYsKOUE/L7VUM7luqI7jkOO6Cqjpoi/Zywz//M8d8wR3xe6Nxwkrnv2l44PxucDQ7m2cfr2w9ifDM5bZqCxE4pJGqxIBFc2zgoJTknUGeiMpnK14Lb0wTHJGOCleSE0iJWNemVskZXpD1PtVJJ0i7W8rYkP0ymsehr43yF+kDzwrv1yNdNNytffOu2/clF1a9LVDzo20G02Y6r43dwYZxn2WazQEf3tmwaFn8NZHlGzLqhFEdEAgVhRja25hdaQwrvWrd6Uz6Z4WWI79zvxzkTTrtjLJkCXsTODqbtzXj67i8eLdu3emUy3mTxEZL4nQIkYFpSiY95lm2gRL0MuGRsa5Q/3wBkMk5r",sidebar_class_name:"patch api-method",info_path:"docs/api/nerm/v1/nerm-api",custom_edit_url:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Update multiple profiles' (patch-profiles)"},sidebar:"nermSideBar",previous:{title:"Create multiple profiles",permalink:"/docs/api/nerm/v1/post-profiles"},next:{title:"Delete multiple profiles",permalink:"/docs/api/nerm/v1/delete-profiles"}},y={},N=[];function _(e){const s={p:"p",...(0,l.a)(),...e.components},{Details:a}=s;return a||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(j.default,{as:"h1",className:"openapi__heading",children:"Update multiple profiles"}),"\n",(0,i.jsx)(n.Z,{method:"patch",path:"/profiles"}),"\n",(0,i.jsx)(s.p,{children:"Update multiple profiles"}),"\n",(0,i.jsx)(j.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,i.jsx)(o(),{className:"openapi-tabs__mime",children:(0,i.jsx)(f.default,{label:"application/json",value:"application/json-schema",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0,children:[(0,i.jsxs)("summary",{style:{},className:"openapi-markdown__details-summary-mime",children:[(0,i.jsx)("h3",{className:"openapi-markdown__details-summary-header-body",children:(0,i.jsx)(s.p,{children:"Body"})}),(0,i.jsx)("strong",{className:"openapi-schema__required",children:(0,i.jsx)(s.p,{children:"required"})})]}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,i.jsx)(h(),{collapsible:!0,className:"schemaItem",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsxs)("span",{className:"openapi-schema__container",children:[(0,i.jsx)("strong",{className:"openapi-schema__property",children:(0,i.jsx)(s.p,{children:"profiles"})}),(0,i.jsx)("span",{className:"openapi-schema__name",children:(0,i.jsx)(s.p,{children:"object[]"})})]})}),(0,i.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,i.jsx)("li",{children:(0,i.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"},children:(0,i.jsx)(s.p,{children:"Array ["})})}),(0,i.jsx)(h(),{collapsible:!1,name:"id",required:!1,schemaName:"uuid",qualifierMessage:void 0,schema:{type:"string",format:"uuid"}}),(0,i.jsx)(h(),{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(h(),{collapsible:!1,name:"profile_type_id",required:!1,schemaName:"uuid",qualifierMessage:void 0,schema:{type:"string",format:"uuid"}}),(0,i.jsx)(h(),{collapsible:!1,name:"status",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** [`Active`, `Inactive`, `On Leave`, `Terminated`]",schema:{type:"string",enum:["Active","Inactive","On Leave","Terminated"]}}),(0,i.jsx)(h(),{collapsible:!1,name:"id_proofing_status",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** [`pending`, `pass`, `fail`]",schema:{type:"string",enum:["pending","pass","fail"]}}),(0,i.jsx)(h(),{collapsible:!1,name:"archived",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",default:!1}}),(0,i.jsx)(h(),{collapsible:!0,className:"schemaItem",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsxs)("span",{className:"openapi-schema__container",children:[(0,i.jsx)("strong",{className:"openapi-schema__property",children:(0,i.jsx)(s.p,{children:"attributes"})}),(0,i.jsx)("span",{className:"openapi-schema__name",children:(0,i.jsx)(s.p,{children:"object"})})]})}),(0,i.jsx)("div",{style:{marginLeft:"1rem"},children:(0,i.jsx)(h(),{name:"property name*",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},collapsible:!1,discriminator:!1})})]})}),(0,i.jsx)("li",{children:(0,i.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"},children:(0,i.jsx)(s.p,{children:"]"})})})]})]})})})]})})}),"\n",(0,i.jsx)("div",{children:(0,i.jsx)("div",{children:(0,i.jsxs)(t(),{label:void 0,id:void 0,children:[(0,i.jsxs)(f.default,{label:"200",value:"200",children:[(0,i.jsx)("div",{children:(0,i.jsx)(s.p,{children:"Expected response to a valid request"})}),(0,i.jsx)("div",{children:(0,i.jsx)(o(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,i.jsx)(f.default,{label:"application/json",value:"application/json",children:(0,i.jsxs)(u(),{className:"openapi-tabs__schema",children:[(0,i.jsx)(f.default,{label:"Schema",value:"Schema",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,i.jsx)("strong",{children:(0,i.jsx)(s.p,{children:"Schema"})})}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,i.jsxs)("div",{children:[(0,i.jsx)("span",{className:"badge badge--info",style:{marginBottom:"1rem"},children:(0,i.jsx)(s.p,{children:"oneOf"})}),(0,i.jsxs)(u(),{children:[(0,i.jsx)(f.default,{label:"Profiles",value:"0-item-properties",children:(0,i.jsx)(h(),{collapsible:!0,className:"schemaItem",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsxs)("span",{className:"openapi-schema__container",children:[(0,i.jsx)("strong",{className:"openapi-schema__property",children:(0,i.jsx)(s.p,{children:"profiles"})}),(0,i.jsx)("span",{className:"openapi-schema__name",children:(0,i.jsx)(s.p,{children:"object[]"})})]})}),(0,i.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,i.jsx)("li",{children:(0,i.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"},children:(0,i.jsx)(s.p,{children:"Array ["})})}),(0,i.jsx)(h(),{collapsible:!1,name:"id",required:!1,schemaName:"uuid",qualifierMessage:void 0,schema:{type:"string",format:"uuid",readOnly:!0,description:"The objects ID",example:"33f072dd-13b4-41e1-8ea0-16f2a59b57c8"}}),(0,i.jsx)(h(),{collapsible:!1,name:"uid",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** `>= 32 characters` and `<= 32 characters`",schema:{type:"string",minLength:32,maxLength:32,readOnly:!0,description:"The objects UID",example:"profileUid"}}),(0,i.jsx)(h(),{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"This is the name of the profile.",example:"Profile Name"}}),(0,i.jsx)(h(),{collapsible:!1,name:"profile_type_id",required:!1,schemaName:"uuid",qualifierMessage:void 0,schema:{type:"string",format:"uuid",description:"This is the ID of the profile type the profile belongs to",example:"33f072dd-13b4-41e1-8ea0-16f2a59b57c8"}}),(0,i.jsx)(h(),{collapsible:!1,name:"status",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** [`Active`, `Inactive`, `On Leave`, `Terminated`]",schema:{type:"string",enum:["Active","Inactive","On Leave","Terminated"],description:"This is the status of the profile",example:"Active"}}),(0,i.jsx)(h(),{collapsible:!1,name:"id_proofing_status",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** [`pending`, `pass`, `fail`]",schema:{type:"string",enum:["pending","pass","fail"],description:"This is the ID proofing staus of the profile",example:"pending"}}),(0,i.jsx)(h(),{collapsible:!1,name:"created_at",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time",description:"The date and time the profile was created",example:"2023-11-21T14:23:54.256-05:00"}}),(0,i.jsx)(h(),{collapsible:!1,name:"updated_at",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time",description:"The date and time the profile was updated",example:"2023-11-21T14:23:54.256-05:00"}}),(0,i.jsx)(h(),{collapsible:!0,className:"schemaItem",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsxs)("span",{className:"openapi-schema__container",children:[(0,i.jsx)("strong",{className:"openapi-schema__property",children:(0,i.jsx)(s.p,{children:"attributes"})}),(0,i.jsx)("span",{className:"openapi-schema__name",children:(0,i.jsx)(s.p,{children:"object"})})]})}),(0,i.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,i.jsx)("div",{style:{marginTop:".5rem",marginBottom:".5rem"},children:(0,i.jsx)(s.p,{children:"Attributes that belong to this profile."})}),(0,i.jsx)(h(),{name:"property name*",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},collapsible:!1,discriminator:!1})]})]})}),(0,i.jsx)("li",{children:(0,i.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"},children:(0,i.jsx)(s.p,{children:"]"})})})]})]})})}),(0,i.jsxs)(f.default,{label:"Job",value:"1-item-properties",children:[(0,i.jsx)(h(),{collapsible:!1,name:"info",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"job has started"}}),(0,i.jsx)(h(),{collapsible:!0,className:"schemaItem",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsxs)("span",{className:"openapi-schema__container",children:[(0,i.jsx)("strong",{className:"openapi-schema__property",children:(0,i.jsx)(s.p,{children:"job_status"})}),(0,i.jsx)("span",{className:"openapi-schema__name",children:(0,i.jsx)(s.p,{children:"object"})})]})}),(0,i.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,i.jsx)(h(),{collapsible:!1,name:"job_id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"3ce88e47ad6dba2ddf349d21"}}),(0,i.jsx)(h(),{collapsible:!1,name:"status",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"queued"}})]})]})}),(0,i.jsx)(h(),{collapsible:!1,name:"status",required:!1,schemaName:"int",qualifierMessage:void 0,schema:{type:"int",example:200}})]})]})]})})]})}),(0,i.jsx)(f.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,i.jsx)(d(),{responseExample:"{}",language:"json"})})]})})})})]}),(0,i.jsxs)(f.default,{label:"400",value:"400",children:[(0,i.jsx)("div",{children:(0,i.jsx)(s.p,{children:"Bad Request - unable to complete."})}),(0,i.jsx)("div",{children:(0,i.jsx)(o(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,i.jsx)(f.default,{label:"application/json",value:"application/json",children:(0,i.jsxs)(u(),{className:"openapi-tabs__schema",children:[(0,i.jsx)(f.default,{label:"Schema",value:"Schema",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,i.jsx)("strong",{children:(0,i.jsx)(s.p,{children:"Schema"})})}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,i.jsxs)("div",{children:[(0,i.jsx)("span",{className:"badge badge--info",style:{marginBottom:"1rem"},children:(0,i.jsx)(s.p,{children:"oneOf"})}),(0,i.jsxs)(u(),{children:[(0,i.jsx)(f.default,{label:"InvalidJson",value:"0-item-properties",children:(0,i.jsx)(h(),{collapsible:!1,name:"error",required:!1,schemaName:"",qualifierMessage:void 0,schema:{example:"Invalid JSON syntax. Please check your syntax and try again."}})}),(0,i.jsxs)(f.default,{label:"ValidationErrors",value:"1-item-properties",children:[(0,i.jsx)(h(),{collapsible:!1,name:"error",required:!1,schemaName:"",qualifierMessage:void 0,schema:{example:"The <object> failed to create/update"}}),(0,i.jsx)(h(),{collapsible:!1,name:"errors",required:!1,schemaName:"",qualifierMessage:void 0,schema:{example:{attribute:"can't be blank"}}})]})]})]})})]})}),(0,i.jsx)(f.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,i.jsx)(d(),{responseExample:"{}",language:"json"})})]})})})})]}),(0,i.jsxs)(f.default,{label:"500",value:"500",children:[(0,i.jsx)("div",{children:(0,i.jsx)(s.p,{children:"Internal Server Error - returned on unhandled exceptions."})}),(0,i.jsx)("div",{children:(0,i.jsx)(o(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,i.jsx)(f.default,{label:"application/json",value:"application/json",children:(0,i.jsxs)(u(),{className:"openapi-tabs__schema",children:[(0,i.jsx)(f.default,{label:"Schema",value:"Schema",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,i.jsx)("strong",{children:(0,i.jsx)(s.p,{children:"Schema"})})}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,i.jsx)(h(),{collapsible:!1,name:"error",required:!1,schemaName:"",qualifierMessage:void 0,schema:{description:"A message describing the error",example:"Sorry something went wrong"}})})]})}),(0,i.jsx)(f.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,i.jsx)(d(),{responseExample:'{\n  "error": "Sorry something went wrong"\n}',language:"json"})})]})})})})]})]})})})]})}function q(e={}){const{wrapper:s}={...(0,l.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(_,{...e})}):_(e)}}}]);