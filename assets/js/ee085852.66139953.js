"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[43517],{297231:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var i=n(785893),r=n(511151);const s={id:"transforms",title:"Transforms",pagination_label:"Transforms",sidebar_label:"Transforms",sidebar_position:1,sidebar_class_name:"transforms",keywords:["transforms"],description:"Modify attribute data without code.",slug:"/extensibility/transforms",tags:["Transforms"],customProps:{description:"Modify attribute data without code."}},o=void 0,a={id:"extensibility/transforms/transforms",title:"Transforms",description:"Modify attribute data without code.",source:"@site/docs/extensibility/transforms/index.md",sourceDirName:"extensibility/transforms",slug:"/extensibility/transforms",permalink:"/docs/extensibility/transforms",draft:!1,unlisted:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/extensibility/transforms/index.md",tags:[{inline:!0,label:"Transforms",permalink:"/docs/tags/transforms"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1724791322e3,sidebarPosition:1,frontMatter:{id:"transforms",title:"Transforms",pagination_label:"Transforms",sidebar_label:"Transforms",sidebar_position:1,sidebar_class_name:"transforms",keywords:["transforms"],description:"Modify attribute data without code.",slug:"/extensibility/transforms",tags:["Transforms"],customProps:{description:"Modify attribute data without code."}},sidebar:"openApiSidebar",previous:{title:"Extensibility",permalink:"/docs/extensibility"},next:{title:"Guides",permalink:"/docs/extensibility/transforms/guides"}},l={},d=[{value:"What Are Transforms",id:"what-are-transforms",level:2},{value:"How Transforms Work",id:"how-transforms-work",level:2},{value:"Multiple Transform Inputs",id:"multiple-transform-inputs",level:3},{value:"Complex Nested Transforms",id:"complex-nested-transforms",level:3},{value:"Configuring Transform Behavior",id:"configuring-transform-behavior",level:2},{value:"Transform Syntax",id:"transform-syntax",level:2},{value:"Template Engine",id:"template-engine",level:2},{value:"Example",id:"example",level:3},{value:"Identity Attribute Context",id:"identity-attribute-context",level:3},{value:"Account Profile Context",id:"account-profile-context",level:3},{value:"Implicit vs Explicit Input",id:"implicit-vs-explicit-input",level:2},{value:"Implicit Input",id:"implicit-input",level:3},{value:"Explicit Input",id:"explicit-input",level:3},{value:"Account Transforms",id:"account-transforms",level:3},{value:"Configuration",id:"configuration",level:4},{value:"Testing Transforms on Account Create",id:"testing-transforms-on-account-create",level:4},{value:"Applying Transforms on Account Create",id:"applying-transforms-on-account-create",level:4},{value:"Testing Transforms",id:"testing-transforms",level:2},{value:"Transform Best Practices",id:"transform-best-practices",level:2},{value:"Transforms vs. Rules",id:"transforms-vs-rules",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",mermaid:"mermaid",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"In SailPoint's cloud services, transforms allow you to manipulate attribute values while aggregating from or provisioning to a source. This guide provides a reference to help you understand the purpose, configuration, and usage of transforms."}),"\n",(0,i.jsx)(t.h2,{id:"what-are-transforms",children:"What Are Transforms"}),"\n",(0,i.jsx)(t.p,{children:"Transforms are configurable objects that define easy ways to manipulate attribute data without requiring you to write code. Transforms are configurable building blocks with sets of inputs and outputs:"}),"\n",(0,i.jsx)("div",{align:"center",children:(0,i.jsx)(t.mermaid,{value:"flowchart LR\n  id1(Input) ====> id2[Transform] ====> id3([Output])"})}),"\n",(0,i.jsxs)(t.p,{children:["Because there is no code to write, an administrator can configure these by using a JSON object structure and uploading them into Identity Security Cloud using ",(0,i.jsx)(t.a,{href:"/docs/api/v3/transforms",children:"Identity Security Cloud's Transform REST APIs"}),"."]}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsx)(t.p,{children:"Sometimes transforms are referred to as Seaspray, the codename for transforms. Identity Security Cloud Transforms and Seaspray are essentially the same."})}),"\n",(0,i.jsx)(t.h2,{id:"how-transforms-work",children:"How Transforms Work"}),"\n",(0,i.jsxs)(t.p,{children:["Transforms typically have an input(s) and output(s). The way the transformation occurs mainly depends on the type of transform. Refer to ",(0,i.jsx)(t.a,{href:"/docs/extensibility/transforms/operations",children:"Operations in Identity Security Cloud Transforms"})," for more information."]}),"\n",(0,i.jsxs)(t.p,{children:["For example, a ",(0,i.jsx)(t.a,{href:"/docs/extensibility/transforms/operations/lower",children:"Lower transform"})," transforms any input text strings into lowercase versions as output. So if the input were ",(0,i.jsx)(t.code,{children:"Foo"}),", the lowercase output of the transform would be ",(0,i.jsx)(t.code,{children:"foo"}),":"]}),"\n",(0,i.jsx)("div",{align:"center",children:(0,i.jsx)(t.mermaid,{value:"flowchart LR\n  id1(Foo) ====> id2[Lower\\nTransform] ====> id3(foo)"})}),"\n",(0,i.jsxs)(t.p,{children:["There are other types of transforms too. For example, an ",(0,i.jsx)(t.a,{href:"/docs/extensibility/transforms/operations/e164-phone",children:"E.164 Phone transform"})," transforms any input phone number strings into an E.164 formatted version as output. So if the input were ",(0,i.jsx)(t.code,{children:"(512) 346-2000"}),", the output would be ",(0,i.jsx)(t.code,{children:"+1 5123462000"}),":"]}),"\n",(0,i.jsx)("div",{align:"center",children:(0,i.jsx)(t.mermaid,{value:'flowchart LR\n  id1("(512) 346-2000") ====> id2[E.164\\nTransform] ====> id3(+1 5123462000)'})}),"\n",(0,i.jsx)(t.h3,{id:"multiple-transform-inputs",children:"Multiple Transform Inputs"}),"\n",(0,i.jsxs)(t.p,{children:["In the previous examples, each transform had a single input. Some transforms can specify more than one input. For example, the ",(0,i.jsx)(t.a,{href:"/docs/extensibility/transforms/operations/concatenation",children:"Concat transform"})," concatenates one or more strings together. If ",(0,i.jsx)(t.code,{children:"Foo"})," and ",(0,i.jsx)(t.code,{children:"Bar"})," were inputs, the transformed output would be ",(0,i.jsx)(t.code,{children:"FooBar"}),":"]}),"\n",(0,i.jsx)("div",{align:"center",children:(0,i.jsx)(t.mermaid,{value:"flowchart LR\n  id1(Foo) ====> id2[Concat\\nTransform] ====> id3(FooBar)\n  id4(Bar) ====> id2[Concat\\nTransform]"})}),"\n",(0,i.jsx)(t.h3,{id:"complex-nested-transforms",children:"Complex Nested Transforms"}),"\n",(0,i.jsx)(t.p,{children:"For more complex use cases, a single transform may not be enough. It is possible to link several transforms together. Identity Security Cloud calls these 'nested' transforms because they are transform objects within other transform objects."}),"\n",(0,i.jsxs)(t.p,{children:["An example of a nested transform would be using the previous ",(0,i.jsx)(t.a,{href:"/docs/extensibility/transforms/operations/concatenation",children:"Concat transform"})," and passing its output as an input to another ",(0,i.jsx)(t.a,{href:"/docs/extensibility/transforms/operations/lower",children:"Lower transform"}),". If the inputs ",(0,i.jsx)(t.code,{children:"Foo"})," and ",(0,i.jsx)(t.code,{children:"Bar"})," were passed into the transforms, the ultimate output would be ",(0,i.jsx)(t.code,{children:"foobar"}),", concatenated and in lowercase."]}),"\n",(0,i.jsx)("div",{align:"center",children:(0,i.jsx)(t.mermaid,{value:"flowchart LR\n  id1(Foo) ====> id2[Concat\\nTransform] ====> id3[Lower\\nTransform] ====> id4(foobar)\n  id5(Bar) ====> id2[Concat\\nTransform]"})}),"\n",(0,i.jsx)(t.p,{children:"There is no hard limit for the number of transforms that can be nested. However, the more transforms applied, the more complex the nested transform will be, which can make it difficult to understand and maintain."}),"\n",(0,i.jsx)(t.h2,{id:"configuring-transform-behavior",children:"Configuring Transform Behavior"}),"\n",(0,i.jsx)(t.p,{children:"Some transforms can specify an attributes map that configures the transform behavior. Each transform type has different configuration attributes and different uses. To better understand what is configurable per transform, refer to the Transform Types section and the associated Transform guide(s) that cover each transform."}),"\n",(0,i.jsxs)(t.p,{children:["It is possible to extend the earlier complex nested transform example. If a Replace transform, which replaces certain strings with replacement text, were added, and the transform were configured to replace ",(0,i.jsx)(t.code,{children:"Bar"})," with ",(0,i.jsx)(t.code,{children:"Baz"})," the output would be added as an input to the Concat and Lower transforms:"]}),"\n",(0,i.jsx)("div",{align:"center",children:(0,i.jsx)(t.mermaid,{value:"flowchart LR\n  id1(Foo) ====> id2[Concat\\nTransform] ====> id3[Lower\\nTransform] ====> id4(foobaz)\n  id5(Bar) ====> id6[Replace Transform\\n Bar:Baz] ====> id2[Concat\\nTransform]"})}),"\n",(0,i.jsxs)(t.p,{children:["The output of the Replace transform would be ",(0,i.jsx)(t.code,{children:"Baz"})," which is then passed as an input to the Concat transform along with ",(0,i.jsx)(t.code,{children:"Foo"})," producing an output of ",(0,i.jsx)(t.code,{children:"FooBaz"}),". This is then passed as an input into the Lower transform, producing a final output of ",(0,i.jsx)(t.code,{children:"foobaz"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"transform-syntax",children:"Transform Syntax"}),"\n",(0,i.jsx)(t.p,{children:"Transforms are JSON objects. Prior to this, the transforms have been shown as flows of building blocks to help illustrate basic transform ideas. However at the simplest level, a transform looks like this:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",children:'{\n  "name": "Lowercase Department",\n  "type": "lower",\n  "attributes": {\n    "transform-attribute-1": "attribute-1-value",\n    "transform-attribute-2": "attribute-2-value"\n  }\n}\n'})}),"\n",(0,i.jsx)(t.p,{children:"There are three main components of a transform object:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"name"})," - This specifies the name of the transform. It refers to a transform in the Identity Security Cloud API or User Interface (UI). Only provide a name on the root-level transform. Nested transforms do not have names."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"type"})," - This specifies the transform type, which ultimately determines the transform's behavior."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"attributes"})," - This specifies any attributes or configurations for controlling how the transform works. As mentioned earlier in ",(0,i.jsx)(t.a,{href:"#configuring-transform-behavior",children:"Configuring Transform Behavior"}),", each transform type has different sets of attributes available."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.admonition,{type:"caution",children:(0,i.jsx)(t.p,{children:"When uploading a transform to Identity Security Cloud it cannot exceed 400KB."})}),"\n",(0,i.jsx)(t.h2,{id:"template-engine",children:"Template Engine"}),"\n",(0,i.jsx)(t.p,{children:"Seaspray ships with the Apache Velocity template engine that allows a transform to reference, transform, and render values passed into the transform context. Every string value in a Seaspray transform can contain templated text and will run through the template engine."}),"\n",(0,i.jsx)(t.h3,{id:"example",children:"Example"}),"\n",(0,i.jsxs)(t.p,{children:["In the following string, the text ",(0,i.jsx)(t.code,{children:"$firstName"})," is replaced by the value of firstName in the template context. The same goes for ",(0,i.jsx)(t.code,{children:"$lastName"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["If $firstName=John and $lastName=Doe then the string ",(0,i.jsx)(t.code,{children:"$firstName.$lastName"}),"would render as",(0,i.jsx)(t.code,{children:"John.Doe"}),"."]}),"\n",(0,i.jsx)(t.h3,{id:"identity-attribute-context",children:"Identity Attribute Context"}),"\n",(0,i.jsx)(t.p,{children:"The following variables are available to the Apache Velocity template engine when a transform is used to source an identity attribute."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Variable"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"identity"}),(0,i.jsx)(t.td,{children:"sailpoint.object.Identity"}),(0,i.jsx)(t.td,{children:"This is the identity the attribute promotion is performed on."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"attributeDefinition"}),(0,i.jsx)(t.td,{children:"sailpoint.object.ObjectAttribute"}),(0,i.jsx)(t.td,{children:"This is the definition of the attribute being promoted."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"oldValue"}),(0,i.jsx)(t.td,{children:"Object"}),(0,i.jsx)(t.td,{children:"This is the attribute's previous value."})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"account-profile-context",children:"Account Profile Context"}),"\n",(0,i.jsx)(t.p,{children:"The following variables are available to the Apache Velocity template engine when a transform is used in an account profile."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Variable"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"field"}),(0,i.jsx)(t.td,{children:"sailpoint.object.Field"}),(0,i.jsx)(t.td,{children:"This is the field definition backing the account profile attribute."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"identity"}),(0,i.jsx)(t.td,{children:"sailpoint.object.Identity"}),(0,i.jsx)(t.td,{children:"This is the identity the account profile is generating for."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"application"}),(0,i.jsx)(t.td,{children:"sailpoint.object.Application"}),(0,i.jsx)(t.td,{children:"This is the application backing the source that owns the account profile."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"current"}),(0,i.jsx)(t.td,{children:"Object"}),(0,i.jsx)(t.td,{children:"This is the attribute's current value."})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"implicit-vs-explicit-input",children:"Implicit vs Explicit Input"}),"\n",(0,i.jsx)(t.p,{children:"A special configuration attribute available to all transforms is input. If the input attribute is not specified, this is referred to as implicit input, and the system determines the input based on what is configured. If the input attribute is specified, then this is referred to as explicit input, and the system's input is ignored in favor of whatever the transform explicitly specifies. A good way to understand this concept is to walk through an example. Imagine that Identity Security Cloud has the following:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["An account on Source 1 with department set to ",(0,i.jsx)(t.code,{children:"Services"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["An account on Source 2 with department set to ",(0,i.jsx)(t.code,{children:"Engineering"}),"."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"The following two examples explain how a transform with an implicit or explicit input would work with those sources."}),"\n",(0,i.jsx)(t.h3,{id:"implicit-input",children:"Implicit Input"}),"\n",(0,i.jsx)(t.p,{children:"An identity profile is configured the following way:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Configuring Transform Behavior 2",src:n(125568).Z+"",width:"1157",height:"162"})}),"\n",(0,i.jsx)(t.p,{children:'As an example, the "Lowercase Department" transform being used is written the following way:'}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",children:'{\n  "name": "Lowercase Department",\n  "type": "lower",\n  "attributes": {}\n}\n'})}),"\n",(0,i.jsx)(t.p,{children:"Notice that the attributes has no input. This is an implicit input example. The transform uses the input provided by the attribute you mapped on the identity profile."}),"\n",(0,i.jsxs)(t.p,{children:["In this example, the transform would produce ",(0,i.jsx)(t.code,{children:"services"})," when the source is aggregated because Source 1 is providing a department of ",(0,i.jsx)(t.code,{children:"Services"})," which the transform then lowercases."]}),"\n",(0,i.jsx)(t.h3,{id:"explicit-input",children:"Explicit Input"}),"\n",(0,i.jsxs)(t.p,{children:["As an example, the ",(0,i.jsx)(t.code,{children:"Lowercase Department"})," has been changed the following way:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",children:'{\n  "name": "Lowercase Department",\n  "type": "lower",\n  "attributes": {\n    "input": {\n      "type": "accountAttribute",\n      "attributes": {\n        "attributeName": "department",\n        "sourceName": "Source 2"\n      }\n    }\n  }\n}\n'})}),"\n",(0,i.jsxs)(t.p,{children:["Notice that there is an ",(0,i.jsx)(t.code,{children:"input"})," in the attributes. This is an explicit input example. The transform uses the value Source 2 provides for the ",(0,i.jsx)(t.code,{children:"department"})," attribute, ignoring your configuration in the identity profile."]}),"\n",(0,i.jsxs)(t.p,{children:['In this example, the transform would produce "engineering" because Source 2 is providing a department of ',(0,i.jsx)(t.code,{children:"Engineering"})," which the transform then lowercases. Though the system is still providing an implicit input of Source 1's department attribute, the transform ignores this and uses the explicit input specified as Source 2's department attribute."]}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsx)(t.p,{children:"This is also an example of a nested transform."})}),"\n",(0,i.jsx)(t.h3,{id:"account-transforms",children:"Account Transforms"}),"\n",(0,i.jsx)(t.p,{children:"Account attribute transforms are configured on the account create profiles. They determine the templates for new accounts created during provisioning events."}),"\n",(0,i.jsx)(t.admonition,{type:"caution",children:(0,i.jsx)(t.p,{children:"These transforms are configured separately from the transforms applied via the identity profile mappings tab."})}),"\n",(0,i.jsx)(t.h4,{id:"configuration",children:"Configuration"}),"\n",(0,i.jsxs)(t.p,{children:["These can be configured in Identity Security Cloud by going to ",(0,i.jsx)(t.strong,{children:"Admin"})," > ",(0,i.jsx)(t.strong,{children:"Sources"})," > (A Source) > ",(0,i.jsx)(t.strong,{children:"Accounts"})," (tab) > ",(0,i.jsx)(t.strong,{children:"Create Account"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["The available options on this page are constructed as transforms behind the scenes. For example, the identity attribute mapping choice is saved as an ",(0,i.jsx)(t.a,{href:"/docs/extensibility/transforms/operations/identity-attribute",children:"identity attribute transform"})," definition within the saved create profile."]}),"\n",(0,i.jsxs)(t.p,{children:["These can also be configured with Identity Security Cloud REST APIs. You can define any kind of transform you want for any field in the create profile policy, to calculate account attributes in ways beyond what the UI offers. See ",(0,i.jsx)(t.a,{href:"/docs/extensibility/transforms/guides/transforms-in-provisioning-policies",children:"Transforms in Provisioning Policies"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["For more information on the Identity Security Cloud REST API endpoints used to managed transform objects in APIs, refer to ",(0,i.jsx)(t.a,{href:"/docs/api/v3/transforms",children:"Identity Security Cloud Transform REST APIs"}),"."]}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsxs)(t.p,{children:["For details about authentication against REST APIs, refer to the ",(0,i.jsx)(t.a,{href:"/docs/api/authentication",children:"authentication docs"}),"."]})}),"\n",(0,i.jsx)(t.h4,{id:"testing-transforms-on-account-create",children:"Testing Transforms on Account Create"}),"\n",(0,i.jsx)(t.p,{children:"To test a transform for an account create profile, you must generate a new account creation provisioning event. This involves granting access to an identity who does not already have an account on this source; an account is created as a byproduct of the access assignment. This can be initiated with access request or even role assignment."}),"\n",(0,i.jsx)(t.h4,{id:"applying-transforms-on-account-create",children:"Applying Transforms on Account Create"}),"\n",(0,i.jsx)(t.p,{children:"Once the transforms are saved to the account profile, they are automatically applied for any subsequent provisioning events."}),"\n",(0,i.jsx)(t.h2,{id:"testing-transforms",children:"Testing Transforms"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Testing Transforms in Identity Profile Mappings"})}),"\n",(0,i.jsxs)(t.p,{children:["To test a transform for identity data, go to ",(0,i.jsx)(t.strong,{children:"Identities"})," > ",(0,i.jsx)(t.strong,{children:"Identity Profiles"})," and select ",(0,i.jsx)(t.strong,{children:"Mappings"}),". Select the transform to map one of your identity attributes, select ",(0,i.jsx)(t.strong,{children:"Save"}),", and preview your identity data."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Testing Transforms for Account Attributes"})}),"\n",(0,i.jsx)(t.p,{children:"To test a transform for account data, you must provision a new account on that source. For example, you can create an access request that would result in a new account on that source, or you can assign a new role."}),"\n",(0,i.jsx)(t.h2,{id:"transform-best-practices",children:"Transform Best Practices"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Designing Complex Transforms"})," - Start with small transform ",(0,i.jsx)(t.em,{children:"building blocks"})," and add to them. It can be helpful to diagram out the inputs and outputs if you are using many transforms."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"JSON Editor"})," - Because transforms are JSON objects, it is recommended that you use a good JSON editor. Atom, Sublime Text, and Microsoft Code work well because they have JSON formatting and plugins that can do JSON validation, completion, formatting, and folding. This is very useful for large complex JSON objects."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Leverage Examples"})," - Many implementations use similar sets of transforms, and a lot of common solutions can be found in examples. Feel free to share your own transform examples on the ",(0,i.jsx)(t.a,{href:"https://developer.sailpoint.com/discuss",children:"Developer Community forum"}),"!"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Same Problem, Multiple Solutions"})," - There can be multiple ways to solve the same problem, but use the solution that makes the most sense to your implementation and is easiest to administer and understand."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Encapsulate Repetition"})," - If you are copying and pasting the same transforms over and over, it can be useful to make a transform a standalone transform and make other transforms reference it by using the reference type."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Plan for Bad Data"})," - Data will not always be perfect, so plan for data failures and try to ensure transforms still produce workable results in case data is missing, malformed, or there are incorrect values."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"transforms-vs-rules",children:"Transforms vs. Rules"}),"\n",(0,i.jsx)(t.p,{children:"Sometimes it can be difficult to decide when to implement a transform and when to implement a rule. Both transforms and rules can calculate values for identity or account attributes."}),"\n",(0,i.jsxs)(t.p,{children:["Despite their functional similarity, transforms and rules have very different implementations. Transforms are JSON-based configurations, editable with Identity Security Cloud's transform REST APIs. Rules are implemented with code (typically ",(0,i.jsx)(t.a,{href:"https://github.com/beanshell/beanshell",children:"BeanShell"}),", a Java-like syntax), so they must follow the ",(0,i.jsx)(t.a,{href:"https://community.sailpoint.com/docs/DOC-12122",children:"Identity Security Cloud Rule Guidelines"}),", and they require SailPoint to be reviewed and installed into the tenant. Rules, however, can do things that transforms cannot in some cases."]}),"\n",(0,i.jsx)(t.p,{children:"Because transforms have easier and more accessible implementations, they are generally recommended. With transforms, any Identity Security Cloud administrator can view, create, edit, and delete transforms directly with REST API without SailPoint involvement."}),"\n",(0,i.jsx)(t.p,{children:"If something cannot be done with a transform, then consider using a rule. When you are transitioning from a transform to a rule, you must take special consideration when you decide where the rule executes."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["If you are calculating identity attributes, you can use ",(0,i.jsx)(t.a,{href:"https://community.sailpoint.com/docs/DOC-12616",children:"Identity Attribute rules"})," instead of identity transforms."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["If you are calculating account attributes (during provisioning), you can use ",(0,i.jsx)(t.a,{href:"https://community.sailpoint.com/docs/DOC-12645",children:"Attribute Generator rules"})," instead of account transforms."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["All rules you build must follow the ",(0,i.jsx)(t.a,{href:"https://community.sailpoint.com/docs/DOC-12122",children:"Identity Security Cloud Rule Guidelines"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"If you use a rule, make note of it for administrative purposes. The best practice is to check in these types of artifacts into some sort of version control (e.g., GitHub, et. Al.) for records."})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},125568:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/configuring_transform_behavior_2-573ec9d4460bb7dc496a2ba9366fa386.png"}}]);