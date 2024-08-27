"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[32280],{771261:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var i=s(785893),n=s(511151);const r={id:"plugin-java-rest-resources",title:"Java Classes - Rest Resources",pagination_label:"Java Classes - Rest Resources",sidebar_label:"Java Classes - Rest Resources",sidebar_position:7,sidebar_class_name:"plugin_developer_guide_java_rest_resources",keywords:["plugin"],description:"IdentityIQ Plugin Java Classes REST Resources",slug:"/iiq/plugin-developer-guide/java-classes-rest-resources",tags:["plugin","guide","identityiq"]},a="Java Classes - REST Resources",o={id:"iiq/plugin-developer-guide/chapter-7/plugin-java-rest-resources",title:"Java Classes - Rest Resources",description:"IdentityIQ Plugin Java Classes REST Resources",source:"@site/docs/iiq/plugin-developer-guide/chapter-7/index.md",sourceDirName:"iiq/plugin-developer-guide/chapter-7",slug:"/iiq/plugin-developer-guide/java-classes-rest-resources",permalink:"/docs/iiq/plugin-developer-guide/java-classes-rest-resources",draft:!1,unlisted:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/iiq/plugin-developer-guide/chapter-7/index.md",tags:[{inline:!0,label:"plugin",permalink:"/docs/tags/plugin"},{inline:!0,label:"guide",permalink:"/docs/tags/guide"},{inline:!0,label:"identityiq",permalink:"/docs/tags/identityiq"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1724791322e3,sidebarPosition:7,frontMatter:{id:"plugin-java-rest-resources",title:"Java Classes - Rest Resources",pagination_label:"Java Classes - Rest Resources",sidebar_label:"Java Classes - Rest Resources",sidebar_position:7,sidebar_class_name:"plugin_developer_guide_java_rest_resources",keywords:["plugin"],description:"IdentityIQ Plugin Java Classes REST Resources",slug:"/iiq/plugin-developer-guide/java-classes-rest-resources",tags:["plugin","guide","identityiq"]},sidebar:"iiqSideBar",previous:{title:"XML Artifacts",permalink:"/docs/iiq/plugin-developer-guide/xml-artifacts"},next:{title:"Java Classes - Executors",permalink:"/docs/iiq/plugin-developer-guide/java-classes-executors"}},l={},d=[{value:"Extend BasePluginResource",id:"extend-basepluginresource",level:2},{value:"Secure endpoints",id:"secure-endpoints",level:2}];function c(e){const t={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"java-classes---rest-resources",children:"Java Classes - REST Resources"}),"\n",(0,i.jsx)(t.p,{children:"The plugin framework relies heavily on REST web services integration for the majority of CRUD (create, read, update, and delete) operations. To create a custom REST resource, there are a couple requirements. This guide will cover those requirements."}),"\n",(0,i.jsx)(t.h2,{id:"extend-basepluginresource",children:"Extend BasePluginResource"}),"\n",(0,i.jsxs)(t.p,{children:["The first step to creating a custom REST resource is to use the ",(0,i.jsx)(t.code,{children:"BasePluginResource"})," class as the base class for all resources. It provides access to utility methods for accessing plugin settings, getting database connections and more."]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"getConnection"})," - Gets connection to the datasource specified in the iiq.properties file for the plugins"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"getPluginName"})," - This method should be overriden to return the plugin's correct name."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"getSettingBool"})," - Gets value of boolean plugin setting for plugin name returned by ",(0,i.jsx)(t.code,{children:"getPluginName()"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"getSettingInt"})," - Gets value of int plugin setting for plugin name returned by ",(0,i.jsx)(t.code,{children:"getPluginName()"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"getSettingString"})," - Gets value of String plugin setting for plugin name returned by ",(0,i.jsx)(t.code,{children:"getPluginName()"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"prepareStatement"})," - Convenience security method for getting Java ",(0,i.jsx)(t.code,{children:"PreparedStatement"})," object for any required database queries - signature is ",(0,i.jsx)(t.code,{children:"prepareStatement"}),"(Connection, String, Object...) where the string would be the SQL statement you wish to execute and the object would be a list of the parameters values, if any, to be used."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"authorize"})," - This should be overridden by implementers, but by default it only ensures that SystemAdministrator can see everything. Additional methods should be introduced to handle the various endpoints required by the plugin."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"secure-endpoints",children:"Secure endpoints"}),"\n",(0,i.jsx)(t.p,{children:"The next step to creating a custom REST resource is to prevent unauthorized access to your new endpoints. To do so, you should guard each with an authorization mechanism. The simplest way to do so in the plugin framework is through 'Annotations'. In Java, an annotation is a syntactic metadata that is added, often before a method signature, to describe the parameters used in that method. Here is an example from the 'Todo' plugin:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",children:'@GET\n@Path("customplugin/{param}")\n@Deferred\n\npublic CustomPluginObject getCustomPluginObject(@PathParam("param") String objectName) throws GeneralException{\n    CustomPluginObject cpo = getCustomPluginService().getCustomPluginObject(objectName);\n    authorize(new CustomPluginAuthorizer(cpo));\n    return cpo;\n}\n'})}),"\n",(0,i.jsx)(t.p,{children:"An annotation should have at least three parts"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Line 1"})," - The HTTP method (GET, POST, PUT, DELETE, etc)."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Line 2"})," - The path or endpoint - this can be parameterized, which is useful for pulling back a single record. The earlier example uses parameterization by adding the variable within ",' tags to the end of the URL and also declaring the @PathParam "appName" in the input arguments of the method signature.']}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Line 3"})," - The authorization of the method. The following values are allowed:","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"@AllowAll"})," - Allows anyone to interrogate the endpoint."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:'@RequiredRight("<SPRight/>")'})," - Allows users with the named SPRight to access the endpoint."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"@SystemAdmin"})," - System administrator access only."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"@Deferred"})," - Authorization is deferred to the method. When this option is selected, the implementer must also create an ",(0,i.jsx)(t.code,{children:"Authorizer"})," class that implements the ",(0,i.jsx)(t.code,{children:"sailpoint.authorization.Authorize"}),"r interface. The ",(0,i.jsx)(t.code,{children:"Authorizer"})," class should override the ",(0,i.jsx)(t.code,{children:"authorize(UserContext)"})," method of the base ",(0,i.jsx)(t.code,{children:"Authorizer"})," interface. Inside the REST resource method, the author would then call ",(0,i.jsx)(t.code,{children:"authorize()"}),". Here is a simple example:"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",children:'import sailpoint.authorization.Authorizer;\nimport sailpoint.authorization.UnauthorizedAccessException;\nimport sailpoint.tools.GeneralException;\nimport sailpoint.web.UserContext;\n\n/**\n* Created by adam.creaney on 2/6/17.\n*/\n\nclass CustomPluginAuthorizer implements Authorizer{\n    /**\n     * The CustomPluginObject to check.\n     */\n\n    private CustomPluginObject cpo;\n    /**\n     * Constructor.\n     *\n     * @param CustomPluginObject the custom plugin object\n     */\n    public CustomPluginAuthorizer(CustomPluginObject cpo) {\n        this.cpo = cpo\n    }\n\n    /**\n     * {@inheritDoc}\n     */\n    @Override\n    public void authorize(UserContext userContext) throws GeneralException {\n        if (!(userContext.getLoggedInUser().getCapabilityManager().hasCapability("SystemAdministrator") || userContext.getLoggedInUser().getCapabilityManager().hasCapability("CustomAdmin"))) {\n            throw new UnauthorizedAccessException("User does not have access to Custom Plugin");\n        }\n    }\n\n}\n'})})]})}function u(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}}}]);