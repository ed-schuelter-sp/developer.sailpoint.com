"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[99977],{431919:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>_,contentTitle:()=>w,default:()=>E,frontMatter:()=>b,metadata:()=>y,toc:()=>M});var t=s(785893),l=s(511151),r=s(168562),i=s.n(r),n=(s(69957),s(496463)),o=(s(318438),s(998439)),d=s.n(o),p=s(534168),m=s.n(p),c=s(603655),h=s.n(c),u=s(313503),x=s.n(u),v=s(82479),g=s.n(v),f=s(555199),j=(s(645774),s(424455));const b={id:"get-profile-upload",sidebar_label:"Retrieves the URL of an attachment attribute value from a profile",hide_title:!0,hide_table_of_contents:!0,api:"eJy9Vdtu20YQ/ZXBPDUAZcm23KYE+uCibqGiuUC2+xIIxYg7FDchd+m9KBYI/nsxS8mWI9Wtg6AvErk7yz1n5syZDm3LjoK2ZqYwxxWH986WuubbtrakMEPFvnC6lRDMcc7BaV6zh1Ax3M7/AFsCGaAQqKgaNkEenV7GwLCmOjKUzjZA0A7fxQwDrTzmH3C74nGRYUuOGg7sZKdDQw1jjloAaLm3pVAdgJn9IrcLELv8yEWAYMFtAWYQW0WBM7AOFNcc5GrHd1E7VpgHFzlDX1TcEOYdhk0rN/rgtFlhhqV1DQXMMcaEgu+paWsJOT2bfq9eL89HVJz9OJpOTi9Gr08vpiPFNJ2eT+mH85Kw77MHFg8J+etf+NxUDFrtOB1L6f9LYSG3+dYaz14uOJtM5O8p6Kv7lovACnahUgWS2mtZu4vsA2ZYWBPYBDlPbVvrIolu/NHLR7pDFkNFMROVtOyCHiBEVz9P1dUpR6TemXoz5KjvMww6JOa3rsa+l5XpMTI/k4L5gBlGEA0t68SnsJK5wCcvYWINvyuTnL/ktEMzMylNv8tREcw/xf0pUemaK+es89gvBhIXx0jMTGBnqIZrdmt2kM7ASFojOsMKrIFoKjKqZgV8X3A66V9E7vkysVx5iOwSGvaeVgzD+lKbVdL6EL8v0Wvr3Aa8bThUEvVZ+uCzs2aV6pfYy57d2pZAkJ7KcbzzlXGnVT+OycjG3X4X9pihT8kZ7CapCqsQWp+Px11gQya8pYb7E2MNN21tN8wnhW3G1GrMcE1OizYS2cfwgXFJsRYtUtFwYQ+7PIWDmAOQ93olJRGNRR9sw074LQRfEZ0OmwRwyeTYXUYh+GGxv30tFRlw7Ac9FEhI4dYl5H0Iwmz78OuucW7sJzYQ5PenjY1ueBQfQ21KK1+UdA0UTk8mJ5M9fb69mr+By/ezo46224SCDCwZoh/4UlGw90BGQWOVLjcgWbXRi5PY6Ar2oA0kMGzW2lkjZigqrXXBxqd0bz32zewmYW2tDw2ZvZ1vMbGekOoem+TbjMOhUIHvw7itSYsV7HxukPTeqMwwT14ed+M5fzJdFhlW1gc50nVL8nzr6r6X5bvITrS0eBRvUpbSXp4V5iXVnp/h+t18O3lewcsH71GS20Uym9RSdZQ3zPATb4bhL574VQD/0yT9CkxPkt0v+gwrJsUupXIIuSzET/cOH/iotO+Ddf12JcL9G5V0Rvg=",sidebar_class_name:"get api-method",info_path:"docs/api/nerm/v1/nerm-api",custom_edit_url:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Retrieves the URL of an attachment attribute value from a profile' (get-profile-upload)"},w=void 0,y={id:"api/nerm/v1/get-profile-upload",title:"get-profile-upload",description:"<Heading",source:"@site/docs/api/nerm/v1/get-profile-upload.api.mdx",sourceDirName:"api/nerm/v1",slug:"/api/nerm/v1/get-profile-upload",permalink:"/docs/api/nerm/v1/get-profile-upload",draft:!1,unlisted:!1,editUrl:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Retrieves the URL of an attachment attribute value from a profile' (get-profile-upload)",tags:[],version:"current",frontMatter:{id:"get-profile-upload",sidebar_label:"Retrieves the URL of an attachment attribute value from a profile",hide_title:!0,hide_table_of_contents:!0,api:"eJy9Vdtu20YQ/ZXBPDUAZcm23KYE+uCibqGiuUC2+xIIxYg7FDchd+m9KBYI/nsxS8mWI9Wtg6AvErk7yz1n5syZDm3LjoK2ZqYwxxWH986WuubbtrakMEPFvnC6lRDMcc7BaV6zh1Ax3M7/AFsCGaAQqKgaNkEenV7GwLCmOjKUzjZA0A7fxQwDrTzmH3C74nGRYUuOGg7sZKdDQw1jjloAaLm3pVAdgJn9IrcLELv8yEWAYMFtAWYQW0WBM7AOFNcc5GrHd1E7VpgHFzlDX1TcEOYdhk0rN/rgtFlhhqV1DQXMMcaEgu+paWsJOT2bfq9eL89HVJz9OJpOTi9Gr08vpiPFNJ2eT+mH85Kw77MHFg8J+etf+NxUDFrtOB1L6f9LYSG3+dYaz14uOJtM5O8p6Kv7lovACnahUgWS2mtZu4vsA2ZYWBPYBDlPbVvrIolu/NHLR7pDFkNFMROVtOyCHiBEVz9P1dUpR6TemXoz5KjvMww6JOa3rsa+l5XpMTI/k4L5gBlGEA0t68SnsJK5wCcvYWINvyuTnL/ktEMzMylNv8tREcw/xf0pUemaK+es89gvBhIXx0jMTGBnqIZrdmt2kM7ASFojOsMKrIFoKjKqZgV8X3A66V9E7vkysVx5iOwSGvaeVgzD+lKbVdL6EL8v0Wvr3Aa8bThUEvVZ+uCzs2aV6pfYy57d2pZAkJ7KcbzzlXGnVT+OycjG3X4X9pihT8kZ7CapCqsQWp+Px11gQya8pYb7E2MNN21tN8wnhW3G1GrMcE1OizYS2cfwgXFJsRYtUtFwYQ+7PIWDmAOQ93olJRGNRR9sw074LQRfEZ0OmwRwyeTYXUYh+GGxv30tFRlw7Ac9FEhI4dYl5H0Iwmz78OuucW7sJzYQ5PenjY1ueBQfQ21KK1+UdA0UTk8mJ5M9fb69mr+By/ezo46224SCDCwZoh/4UlGw90BGQWOVLjcgWbXRi5PY6Ar2oA0kMGzW2lkjZigqrXXBxqd0bz32zewmYW2tDw2ZvZ1vMbGekOoem+TbjMOhUIHvw7itSYsV7HxukPTeqMwwT14ed+M5fzJdFhlW1gc50nVL8nzr6r6X5bvITrS0eBRvUpbSXp4V5iXVnp/h+t18O3lewcsH71GS20Uym9RSdZQ3zPATb4bhL574VQD/0yT9CkxPkt0v+gwrJsUupXIIuSzET/cOH/iotO+Ddf12JcL9G5V0Rvg=",sidebar_class_name:"get api-method",info_path:"docs/api/nerm/v1/nerm-api",custom_edit_url:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Retrieves the URL of an attachment attribute value from a profile' (get-profile-upload)"},sidebar:"nermSideBar",previous:{title:"Delete a single profile",permalink:"/docs/api/nerm/v1/delete-profile"},next:{title:"Uploads a new attachment attribute value to a profile",permalink:"/docs/api/nerm/v1/post-profile-upload"}},_={},M=[];function Y(e){const a={p:"p",...(0,l.a)(),...e.components},{Details:s}=a;return s||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(f.default,{as:"h1",className:"openapi__heading",children:"Retrieves the URL of an attachment attribute value from a profile"}),"\n",(0,t.jsx)(n.Z,{method:"get",path:"/profiles/{id}/upload/{attribute_id}"}),"\n",(0,t.jsx)(a.p,{children:"Retrieves the URL of an attachment attribute value from a profile"}),"\n",(0,t.jsx)(f.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,t.jsxs)(s,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,t.jsx)("summary",{style:{},children:(0,t.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,t.jsx)(a.p,{children:"Path Parameters"})})}),(0,t.jsx)("div",{children:(0,t.jsxs)("ul",{children:[(0,t.jsx)(m(),{className:"paramsItem",param:{name:"id",in:"path",description:"ID of the object to retrieve, update, or delete",required:!0,schema:{type:"string",format:"uuid",example:"1246d8b3-ac29-4015-8154-dea4434a73fa"}}}),(0,t.jsx)(m(),{className:"paramsItem",param:{name:"attribute_id",in:"path",description:"The id of the attachment attribute",required:!0,schema:{type:"string",format:"uuid",example:"1246d8b3-ac29-4015-8154-dea4434a73fa"}}})]})})]}),"\n",(0,t.jsx)("div",{children:(0,t.jsx)("div",{children:(0,t.jsxs)(i(),{label:void 0,id:void 0,children:[(0,t.jsxs)(j.default,{label:"200",value:"200",children:[(0,t.jsx)("div",{children:(0,t.jsx)(a.p,{children:"Expected response to a valid request"})}),(0,t.jsx)("div",{children:(0,t.jsx)(d(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,t.jsx)(j.default,{label:"application/json",value:"application/json",children:(0,t.jsxs)(g(),{className:"openapi-tabs__schema",children:[(0,t.jsx)(j.default,{label:"Schema",value:"Schema",children:(0,t.jsxs)(s,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,t.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,t.jsx)("strong",{children:(0,t.jsx)(a.p,{children:"Schema"})})}),(0,t.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,t.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,t.jsx)(x(),{collapsible:!1,name:"url",required:!1,schemaName:"url",qualifierMessage:void 0,schema:{type:"string",format:"url",readOnly:!0}})})]})}),(0,t.jsx)(j.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,t.jsx)(h(),{responseExample:'{\n  "url": "string"\n}',language:"json"})})]})})})})]}),(0,t.jsxs)(j.default,{label:"400",value:"400",children:[(0,t.jsx)("div",{children:(0,t.jsx)(a.p,{children:"Bad Request - unable to complete."})}),(0,t.jsx)("div",{children:(0,t.jsx)(d(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,t.jsx)(j.default,{label:"application/json",value:"application/json",children:(0,t.jsxs)(g(),{className:"openapi-tabs__schema",children:[(0,t.jsx)(j.default,{label:"Schema",value:"Schema",children:(0,t.jsxs)(s,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,t.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,t.jsx)("strong",{children:(0,t.jsx)(a.p,{children:"Schema"})})}),(0,t.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,t.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,t.jsxs)("div",{children:[(0,t.jsx)("span",{className:"badge badge--info",style:{marginBottom:"1rem"},children:(0,t.jsx)(a.p,{children:"oneOf"})}),(0,t.jsxs)(g(),{children:[(0,t.jsx)(j.default,{label:"InvalidJson",value:"0-item-properties",children:(0,t.jsx)(x(),{collapsible:!1,name:"error",required:!1,schemaName:"",qualifierMessage:void 0,schema:{example:"Invalid JSON syntax. Please check your syntax and try again."}})}),(0,t.jsxs)(j.default,{label:"ValidationErrors",value:"1-item-properties",children:[(0,t.jsx)(x(),{collapsible:!1,name:"error",required:!1,schemaName:"",qualifierMessage:void 0,schema:{example:"The <object> failed to create/update"}}),(0,t.jsx)(x(),{collapsible:!1,name:"errors",required:!1,schemaName:"",qualifierMessage:void 0,schema:{example:{attribute:"can't be blank"}}})]})]})]})})]})}),(0,t.jsx)(j.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,t.jsx)(h(),{responseExample:"{}",language:"json"})})]})})})})]}),(0,t.jsxs)(j.default,{label:"500",value:"500",children:[(0,t.jsx)("div",{children:(0,t.jsx)(a.p,{children:"Internal Server Error - returned on unhandled exceptions."})}),(0,t.jsx)("div",{children:(0,t.jsx)(d(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,t.jsx)(j.default,{label:"application/json",value:"application/json",children:(0,t.jsxs)(g(),{className:"openapi-tabs__schema",children:[(0,t.jsx)(j.default,{label:"Schema",value:"Schema",children:(0,t.jsxs)(s,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,t.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,t.jsx)("strong",{children:(0,t.jsx)(a.p,{children:"Schema"})})}),(0,t.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,t.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,t.jsx)(x(),{collapsible:!1,name:"error",required:!1,schemaName:"",qualifierMessage:void 0,schema:{description:"A message describing the error",example:"Sorry something went wrong"}})})]})}),(0,t.jsx)(j.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,t.jsx)(h(),{responseExample:'{\n  "error": "Sorry something went wrong"\n}',language:"json"})})]})})})})]})]})})})]})}function E(e={}){const{wrapper:a}={...(0,l.a)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(Y,{...e})}):Y(e)}}}]);