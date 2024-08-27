"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[52391],{229661:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var n=s(785893),i=s(511151);s(365332),s(424455);const o={id:"authorization",title:"Authorization",pagination_label:"Authorization",sidebar_label:"Authorization",sidebar_position:3,sidebar_class_name:"authorization",keywords:["authorization","scope","permission"],description:"Authorize your ISC API requests.",slug:"/api/authorization",tags:["Authorization","Scopes","Permissions"]},a=void 0,r={id:"api/authorization",title:"Authorization",description:"Authorize your ISC API requests.",source:"@site/docs/api/authorization.md",sourceDirName:"api",slug:"/api/authorization",permalink:"/docs/api/authorization",draft:!1,unlisted:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/api/authorization.md",tags:[{inline:!0,label:"Authorization",permalink:"/docs/tags/authorization"},{inline:!0,label:"Scopes",permalink:"/docs/tags/scopes"},{inline:!0,label:"Permissions",permalink:"/docs/tags/permissions"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1724791322e3,sidebarPosition:3,frontMatter:{id:"authorization",title:"Authorization",pagination_label:"Authorization",sidebar_label:"Authorization",sidebar_position:3,sidebar_class_name:"authorization",keywords:["authorization","scope","permission"],description:"Authorize your ISC API requests.",slug:"/api/authorization",tags:["Authorization","Scopes","Permissions"]},sidebar:"isc_v3_sidebar",previous:{title:"Authentication",permalink:"/docs/api/authentication"},next:{title:"Standard Collection Parameters",permalink:"/docs/api/standard-collection-parameters"}},c={},l=[{value:"Overview",id:"overview",level:2},{value:"User Level Permissions",id:"user-level-permissions",level:2},{value:"Scopes",id:"scopes",level:2},{value:"Identifying Necessary Authorization for an Endpoint",id:"identifying-necessary-authorization-for-an-endpoint",level:2},{value:"Assigning Scopes with the UI",id:"assigning-scopes-with-the-ui",level:2},{value:"Assigning Scopes with the API",id:"assigning-scopes-with-the-api",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",img:"img",li:"li",mermaid:"mermaid",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,n.jsx)(t.p,{children:"Authorization and authentication are two related concepts that help secure APIs. Authentication is the act of verifying a user's identity. Authorization is the act of validating the user's permission to access a given resource. When a user sends an API request, the server authenticates the user by checking the validity of the access token sent with the request. If the token is valid, the server checks whether the user is authorized to perform the desired operation on the resource. If the user is both authenticated and authorized, the server fulfills the request."}),"\n",(0,n.jsx)("div",{align:"center",children:(0,n.jsx)(t.mermaid,{value:"sequenceDiagram\n    autonumber\n    participant H as HTTP Client\n    participant I as Identity Security Cloud\n\n    H->>I: Request to delete a source\n    I->>I: Authenticate access token\n    opt token fails authentication\n      I->>H: Return a 401 response code\n    end\n    I->>I: Authorize user to delete source\n    opt user fails authorization\n      I->>H: Return a 403 response code\n    end\n    I->>H: Delete source and return success"})}),"\n",(0,n.jsx)(t.h2,{id:"user-level-permissions",children:"User Level Permissions"}),"\n",(0,n.jsxs)(t.p,{children:["When managing a user's access to the API, you must first assign the target user an appropriate ",(0,n.jsx)(t.a,{href:"https://documentation.sailpoint.com/saas/help/common/users/user_level_matrix.html",children:"user level"}),'. It is important to choose the correct user level as it will place a boundary on which APIs a user can call, which also affects the areas and functions of the UI they have access to. For example, if a user is in charge of creating reports for auditing requirements, consider granting them the "Report Admin" user level.']}),"\n",(0,n.jsxs)(t.p,{children:["User levels are typically granted through the UI, ",(0,n.jsx)(t.a,{href:"https://documentation.sailpoint.com/saas/help/accounts/identities.html#setting-user-level-permissions",children:"following the procedures from this document"}),". You can also set user levels via API using the ",(0,n.jsx)(t.a,{href:"https://developer.sailpoint.com/docs/api/v3/patch-auth-user",children:"auth user update"})," endpoint."]}),"\n",(0,n.jsx)(t.p,{children:"User levels act as the first line of defense by applying a rigid boundary around the APIs that a user can call. The next section introduces scopes, which allow users to apply granular controls on the APIs an access token can call."}),"\n",(0,n.jsx)(t.h2,{id:"scopes",children:"Scopes"}),"\n",(0,n.jsx)(t.p,{children:"Scopes are granular permissions you can add to personal access tokens (PATs) to create tokens with the least privilege necessary to fulfill their functions. User levels place a broad border around the APIs a token has access to, while scopes can further limit the set of endpoints a token can call. Scopes allow an API user to have multiple tokens with different privileges that support unique use cases and software applications. Using scopes is beneficial to security - if a bad actor compromises any one of the tokens, the bad actor can only perform the limited set of operations defined by the token's scopes, significantly reducing the potential damage that can be done. Therefore, it is recommended that all users apply scopes to each PAT they create in order to reduce the impact of stolen credentials."}),"\n",(0,n.jsxs)(t.p,{children:["Scopes contain one or more rights, which are low level permissions that grant access to individual endpoints. This means that a single scope, like ",(0,n.jsx)(t.code,{children:"idn:access-request:manage"}),", can grant access to multiple API endpoints. To determine which scopes a PAT needs, you must first identify which endpoints the PAT needs to invoke. Each endpoint's API specification indicates which scope is necessary to call the endpoint. You can use this approach to curate a list of scopes that must be applied to the credential to call the necessary endpoints. ",(0,n.jsx)(t.a,{href:"#identifying-necessary-authorization-for-an-endpoint",children:"Learn more about how to find an API's required scopes here"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["By default, each PAT has the scope ",(0,n.jsx)(t.code,{children:"sp:scopes:default"}),", which is the least privileged scope. It only grants access to endpoints that require no authorization at all, such as ",(0,n.jsx)(t.a,{href:"https://developer.sailpoint.com/idn/api/v3/get-public-identities",children:"List Public Identities"}),". Access to the endpoint may still be determined by the user's ",(0,n.jsx)(t.a,{href:"https://documentation.sailpoint.com/saas/help/common/users/user_level_matrix.html",children:"user level"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["Alternatively, ",(0,n.jsx)(t.code,{children:"sp:scopes:all"})," grants access to all the rights appropriate for the ",(0,n.jsx)(t.a,{href:"https://documentation.sailpoint.com/saas/help/common/users/user_level_matrix.html",children:"user level"}),". For example, a user with the ",(0,n.jsx)(t.strong,{children:"Admin"})," user level has access to all APIs, so ",(0,n.jsx)(t.code,{children:"sp:scopes:all"})," grants ",(0,n.jsx)(t.strong,{children:"Admin"})," users access to all APIs. A user with the ",(0,n.jsx)(t.strong,{children:"Cert Admin"})," user level, however, has access to only a subset of APIs necessary to perform their role, most notably the certification APIs, so ",(0,n.jsx)(t.code,{children:"sp:scopes:all"})," grants ",(0,n.jsx)(t.strong,{children:"Cert Admin"})," users access to only that subset of APIs."]}),"\n",(0,n.jsxs)(t.p,{children:["Scopes are additive, which means the final right set is the intersection of all the rights granted by the scopes assigned to a PAT, excluding any rights that fall outside of the user level. Each scope added to an PAT builds up the credential's permission set, incrementally increasing access to the API. If a PAT has ",(0,n.jsx)(t.code,{children:"sp:scopes:all"})," granted, then any additional scope is ignored because ",(0,n.jsx)(t.code,{children:"sp:scopes:all"})," already contains the complete set of rights available to the user level."]}),"\n",(0,n.jsxs)(t.admonition,{type:"tip",children:[(0,n.jsx)(t.p,{children:"If the API requirements for the personal access token exceed the scopes allowed by the user's assigned user level, then the following options may be considered."}),(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Re-evaluate the user's responsibilities compared to their user level. It is possible that their user level is no longer appropriate for the functions they need to perform, and a more permissive user level may be necessary."}),"\n",(0,n.jsx)(t.li,{children:"If the required access is a one-off need for a specific use case, then consider generating a PAT with the required scopes from a different user and sharing the credentials. This could be a dedicated service account designated for one-off applications. The downside of this approach is that it becomes more difficult to attribute an API call to a specific user, as the user now has a PAT that is not tied to their user account."}),"\n"]})]}),"\n",(0,n.jsx)(t.h2,{id:"identifying-necessary-authorization-for-an-endpoint",children:"Identifying Necessary Authorization for an Endpoint"}),"\n",(0,n.jsxs)(t.p,{children:["Each endpoint document specifies how to authorize with the endpoint in the ",(0,n.jsx)(t.strong,{children:"Authorization"})," dropdown, which is located on the right side column below the endpoint path. Selecting ",(0,n.jsx)(t.strong,{children:"Authorization"})," expands the dropdown menu showing the details of how to authorize with the endpoint. The following image shows the authorization details of the ",(0,n.jsx)(t.a,{href:"https://developer.sailpoint.com/docs/api/beta/list-access-profiles",children:"List Access Profiles"})," endpoint."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Authorization Dropdown",src:s(870813).Z+"",width:"1648",height:"359"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"type"}),": The type of authorization method supported for this endpoint. SailPoint uses the ",(0,n.jsx)(t.a,{href:"/docs/api/authentication#oauth-20",children:"OAuth2 standard"})," for all the V3/Beta APIs."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"flow"}),": One or more OAuth flows supported by the endpoint. A token only needs to be generated by one flow to be valid. Refer to ",(0,n.jsx)(t.a,{href:"/docs/api/authentication#authentication-details",children:"Authentication Details"})," for more information about the available flows."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"scopes"}),": A list of scopes necessary to access the endpoint. A token only needs one of the scopes to authorize with the endpoint. When possible, choose the least privileged scope. Scopes ending in ",(0,n.jsx)(t.code,{children:"read"})," can only retrieve data. Scopes ending in ",(0,n.jsx)(t.code,{children:"manage"})," can retrieve, modify, and delete data."]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["You may also notice that many API descriptions will indicate the user level(s) required to call the API endpoint. In the screenshot above, the list access profiles endpoint requires the user to have one of the following user levels: ORG_ADMIN, ROLE_ADMIN, ROLE_SUBADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN. This means the PAT must have one of those user level ",(0,n.jsx)(t.strong,{children:"in addition to"})," the ",(0,n.jsx)(t.code,{children:"sp:scopes:all"})," or ",(0,n.jsx)(t.code,{children:"idn:access-profile:read"})," scope in order to call the endpoint."]}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsxs)(t.p,{children:["SailPoint is working to define scopes for every endpoint, but you may encounter a scenario where you need access to an endpoint that does not yet have a scope defined. Until a scope is defined for the endpoint, you can assign ",(0,n.jsx)(t.code,{children:"sp:scopes:all"})," to ensure that your credentials can access the necessary endpoints. Once all of the endpoints necessary for your use case have scopes defined, you can update or create a new PAT with the appropriate scopes in place."]})}),"\n",(0,n.jsx)(t.h2,{id:"assigning-scopes-with-the-ui",children:"Assigning Scopes with the UI"}),"\n",(0,n.jsx)(t.p,{children:"When you create a PAT in the UI, you can apply scopes to the token. More information on how to do this will be added in the near future."}),"\n",(0,n.jsx)(t.h2,{id:"assigning-scopes-with-the-api",children:"Assigning Scopes with the API"}),"\n",(0,n.jsxs)(t.p,{children:["You can ",(0,n.jsx)(t.a,{href:"https://developer.sailpoint.com/docs/api/v3/create-personal-access-token",children:"create PATs"})," programmatically with the API. The request body for the endpoint allows the caller to specify a list of scopes to be applied to the PAT. If the ",(0,n.jsx)(t.code,{children:"scope"})," property is omitted from the request body, then ",(0,n.jsx)(t.code,{children:"sp:scopes:all"})," is granted to the credentials. The following example shows how to generate a PAT with the ",(0,n.jsx)(t.code,{children:"idn:access-request:manage"})," and ",(0,n.jsx)(t.code,{children:"idn:nelm:manage"})," scopes."]}),"\n",(0,n.jsxs)(t.p,{children:["POST ",(0,n.jsx)(t.code,{children:"https://{tenant}.api.identitynow.com/v3/personal-access-tokens"})]}),"\n",(0,n.jsx)(t.p,{children:"Request Body"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'{\n  "name": "Access Request and NELM Management",\n  "scope": ["idn:access-request:manage", "idn:nelm:manage"]\n}\n'})}),"\n",(0,n.jsx)(t.p,{children:"This request produces the following response, indicating that the scopes were successfully applied to the PAT."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'{\n  "id": "86286c0c456e4b03a8ccb1f892dd456d",\n  "name": "Access Request and NELM Management",\n  "secret": "********",\n  "scope": ["idn:access-request:manage", "idn:nelm:manage"],\n  "created": "2023-01-04T18:58:17.486584Z",\n  "owner": {\n    "name": "jane.doe",\n    "id": "2c9180ab7624cbd7017642d8c8c81a73",\n    "type": "IDENTITY"\n  }\n}\n'})}),"\n",(0,n.jsx)(t.admonition,{type:"caution",children:(0,n.jsxs)(t.p,{children:["If you attempt to add a scope that is outside the permissions of the ",(0,n.jsx)(t.a,{href:"#user-level-permissions",children:"target user's level"}),", the request will still succeed and include the invalid scope in the credentials. However, any token generated with these credentials will ",(0,n.jsx)(t.strong,{children:"not"})," include the rights of the invalid scope. This is not an issue when you apply scopes with the UI - the UI only shows scopes available to the current user."]})})]})}function d(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},365332:(e,t,s)=>{s.d(t,{Z:()=>A});var n=s(667294),i=s(490512),o=s(8757),a=s(873276),r=s(254939);const c={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var l=Object.defineProperty,h=Object.defineProperties,d=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,f=(e,t,s)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,g=(e,t)=>{for(var s in t||(t={}))u.call(t,s)&&f(e,s,t[s]);if(p)for(var s of p(t))m.call(t,s)&&f(e,s,t[s]);return e},y=(e,t)=>h(e,d(t));function v({className:e,block:t,selectedValue:s,selectValue:a,tabValues:r}){const l=[],{blockElementScrollPositionUntilNextRender:h}=(0,o.o5)(),d=e=>{const t=e.currentTarget,n=l.indexOf(t),i=r[n].value;i!==s&&(h(t),a(i))},p=e=>{var t,s;let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const s=l.indexOf(e.currentTarget)+1;n=null!=(t=l[s])?t:l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=null!=(s=l[t])?s:l[l.length-1];break}}null==n||n.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":t},e)},r.map((({value:e,label:t,attributes:o})=>n.createElement("li",y(g({role:"tab",tabIndex:s===e?0:-1,"aria-selected":s===e,key:e,ref:e=>l.push(e),onKeyDown:p,onClick:d},o),{className:(0,i.Z)("tabs__item",c.tabItem,null==o?void 0:o.className,{"tabs__item--active":s===e})}),null!=t?t:e))))}function b({lazy:e,children:t,selectedValue:s}){const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){const e=i.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==s}))))}function x(e){const t=(0,a.Y)(e);return n.createElement("div",{className:(0,i.Z)("tabs-container",c.tabList)},n.createElement(v,g(g({},t),e)),n.createElement(b,g(g({},t),e)))}function A(e){const t=(0,r.default)();return n.createElement(x,g({key:String(t)},e),(0,a.h)(e.children))}},870813:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/authorization-dropdown-0610111d9fd2842fe8e4bfbe505b2477.png"}}]);