"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[39348],{754257:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>a});var r=n(785893),o=n(511151);const i={id:"before-and-after-rule-operations",title:"Before and After Operations on Source Account Rule",pagination_label:"Before and After Operations",sidebar_label:"Before and After Rule Operations",sidebar_class_name:"beforeAndAfterRuleOperations",keywords:["cloud","rules"],description:"This rule executes PowerShell commands on the IQService component after a source account has an operation performed on it.",slug:"/extensibility/rules/connector-rules/before-and-after-rule-operations",tags:["Rules"]},s="Before and After Operations on Source Account Rule",l={id:"extensibility/rules/connector-rules/before-and-after-rule-operations",title:"Before and After Operations on Source Account Rule",description:"This rule executes PowerShell commands on the IQService component after a source account has an operation performed on it.",source:"@site/docs/extensibility/rules/connector-rules/before_after_operation_rule.md",sourceDirName:"extensibility/rules/connector-rules",slug:"/extensibility/rules/connector-rules/before-and-after-rule-operations",permalink:"/docs/extensibility/rules/connector-rules/before-and-after-rule-operations",draft:!1,unlisted:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/extensibility/rules/connector-rules/before_after_operation_rule.md",tags:[{inline:!0,label:"Rules",permalink:"/docs/tags/rules"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1724791322e3,frontMatter:{id:"before-and-after-rule-operations",title:"Before and After Operations on Source Account Rule",pagination_label:"Before and After Operations",sidebar_label:"Before and After Rule Operations",sidebar_class_name:"beforeAndAfterRuleOperations",keywords:["cloud","rules"],description:"This rule executes PowerShell commands on the IQService component after a source account has an operation performed on it.",slug:"/extensibility/rules/connector-rules/before-and-after-rule-operations",tags:["Rules"]},sidebar:"openApiSidebar",previous:{title:"Connector Executed Rules",permalink:"/docs/extensibility/rules/connector-rules"},next:{title:"JDBC BuildMap Rule",permalink:"/docs/extensibility/rules/connector-rules/jdbc-buildmap-rule"}},c={},a=[{value:"Overview",id:"overview",level:2},{value:"Execution",id:"execution",level:2},{value:"Input",id:"input",level:2},{value:"Architecture Best Practices",id:"architecture-best-practices",level:2},{value:"Rule Template",id:"rule-template",level:2},{value:"Powershell Script Template",id:"powershell-script-template",level:2},{value:"Attach to Source",id:"attach-to-source",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"before-and-after-operations-on-source-account-rule",children:"Before and After Operations on Source Account Rule"}),"\n",(0,r.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,r.jsx)(t.p,{children:"This rule executes PowerShell commands on the IQService component after a source account has an operation performed on it."}),"\n",(0,r.jsx)(t.p,{children:"The following operations can be performed on a source:"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Rule Name"}),(0,r.jsx)(t.th,{children:"Rule Type"}),(0,r.jsx)(t.th,{children:"Source Type(s)"}),(0,r.jsx)(t.th,{children:"Purpose"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Before Creation Rule"}),(0,r.jsx)(t.td,{children:"ConnectorBeforeCreate"}),(0,r.jsx)(t.td,{children:"Active Directory, Azure Active Directory"}),(0,r.jsx)(t.td,{children:"Executes PowerShell commands on the IQService component before a source account is created."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Before Modify Rule"}),(0,r.jsx)(t.td,{children:"ConnectorBeforeModify"}),(0,r.jsx)(t.td,{children:"Active Directory, Azure Active Directory"}),(0,r.jsx)(t.td,{children:"Executes PowerShell commands on the IQService component before a source account is modified."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Before Delete Rule"}),(0,r.jsx)(t.td,{children:"ConnectorBeforeDelete"}),(0,r.jsx)(t.td,{children:"Active Directory, Azure Active Directory"}),(0,r.jsx)(t.td,{children:"Executes PowerShell commands on the IQService component before a source account is deleted."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"After Creation Rule"}),(0,r.jsx)(t.td,{children:"ConnectorAfterCreate"}),(0,r.jsx)(t.td,{children:"Active Directory, Azure Active Directory"}),(0,r.jsx)(t.td,{children:"Executes PowerShell commands on the IQService component after a source account is created."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"After Modify Rule"}),(0,r.jsx)(t.td,{children:"ConnectorAfterModify"}),(0,r.jsx)(t.td,{children:"Active Directory, Azure Active Directory"}),(0,r.jsx)(t.td,{children:"Executes PowerShell commands on the IQService component after a source account is modified."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"After Delete Rule"}),(0,r.jsx)(t.td,{children:"ConnectorAfterDelete"}),(0,r.jsx)(t.td,{children:"Active Directory, Azure Active Directory"}),(0,r.jsx)(t.td,{children:"Executes PowerShell commands on the IQService component after a source account is deleted."})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"execution",children:"Execution"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Connector Execution"})," - This rule executes within the virtual appliance. It may offer special abilities to perform connector-related functions, and it may offer managed connections to sources."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Logging"})," - Logging statements are viewable within the ccg.log on the virtual appliance, and they are viewable by SailPoint personnel."]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Rule Execution",src:n(288763).Z+"",width:"1525",height:"618"})}),"\n",(0,r.jsx)(t.h2,{id:"input",children:"Input"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Argument"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Purpose"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Application"}),(0,r.jsx)(t.td,{children:"System.Collections.Hashtable"}),(0,r.jsx)(t.td,{children:"Map of the application configuration."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Request"}),(0,r.jsx)(t.td,{children:"SailPoint.Utils.objects.AccountRequest"}),(0,r.jsx)(t.td,{children:"Reference to the account request provisioning instructions."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Result"}),(0,r.jsx)(t.td,{children:"SailPoint.Utils.objects.ServiceResult"}),(0,r.jsx)(t.td,{children:"Reference to the provisioning result that can be manipulated if necessary."})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"architecture-best-practices",children:"Architecture Best Practices"}),"\n",(0,r.jsx)(t.p,{children:"For supportability, it is recommended that you write these operation rules with only the most basic logic necessary to trigger a PowerShell script and shift the bulk of the downstream events and/or modifications to the PowerShell script itself. This script would reside on the client's servers and can therefore be easily maintained or modified by the client as needed. It also allows the client to implement changes to the PowerShell scripted functionality without requiring code review by SailPoint because the code runs outside of the Identity Security Cloud platform."}),"\n",(0,r.jsx)(t.h2,{id:"rule-template",children:"Rule Template"}),"\n",(0,r.jsxs)(t.p,{children:["This example triggers on the BeforeCreate operation. If you want to use another operation, replace ",(0,r.jsx)(t.code,{children:"BeforeCreate"})," in the name and ",(0,r.jsx)(t.code,{children:"ConnectorBeforeCreate"})," in the type with one of the other operations described earlier in the ",(0,r.jsx)(t.a,{href:"#overview",children:"Overview"})," section."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-xml",children:'<?xml version=\'1.0\' encoding=\'UTF-8\'?>\n<!DOCTYPE Rule PUBLIC "sailpoint.dtd" "sailpoint.dtd">\n <Rule language="beanshell" name="SampleSource BeforeCreate" type="ConnectorBeforeCreate">\n  <Attributes>\n   <Map>\n    <entry key="ObjectOrientedScript" value="true" />\n    <entry key="disabled" value="false" />\n    <entry key="extension" value=".ps1" />\n    <entry key="program" value="powershell.exe" />\n    <entry key="timeout" value="300" />\n   </Map>\n  </Attributes>\n  <Description>\n   This is an IQService afterScript - On a successful provisioning event, this after script should be used as the starting point to\n            initiate a separate PowerShell script residing on the client\'s IQService server.\n\n            Configuration tasks include the following:\n             - Set a proper location for the $logFile variable.\n             - Set the proper script location and name for the $command variable.\n             - Set the $enableDebug flag to $true or $false to toggle debug mode.\n  </Description>\n  <Source>\n<![CDATA[\n\n$logDate = Get-Date -UFormat "%Y%m%d"\n$logFile = "c:\\SailPoint\\Scripts\\Logs\\ConnectorAfterCreate_$logDate.log"\n$command = "c:\\SailPoint\\Scripts\\SampleSource-AfterCreate.ps1"\n$enableDebug = $false\n\n#====================-------Helper functions-------====================\nfunction LogToFile([String] $info) {\n    $info | Out-File $logFile -Append\n}\n\n#====================-------Get the request object-------====================\nTry{\n    if($enableDebug) {\n        LogToFile("Entering SailPoint rule")\n    }\n\n    Add-type -path utils.dll;\n $sReader = New-Object System.IO.StringReader([System.String]$env:Request);\n $xmlReader = [System.xml.XmlTextReader]([sailpoint.utils.xml.XmlUtil]::getReader($sReader));\n $requestObject = New-Object Sailpoint.Utils.objects.AccountRequest($xmlReader);\n    $requestAsString = $env:Request\n\n    if($enableDebug) {\n        LogToFile("Request as XML object is: $requestAsString")\n    }\n\n    #Call the client script\n    $command = -join ($command, " -requestString \'$requestAsString\'")\n    Invoke-Expression $command\n\n}Catch{\n $ErrorMessage = $_.Exception.Message\n   $ErrorItem = $_.Exception.ItemName\n   LogToFile("Error: Item = $ErrorItem -> Message = $ErrorMessage")\n}\n\nif($enableDebug) {\n    LogToFile("Exiting SailPoint rule")\n}\n\n]]>\n  </Source>\n </Rule>\n'})}),"\n",(0,r.jsx)(t.h2,{id:"powershell-script-template",children:"Powershell Script Template"}),"\n",(0,r.jsxs)(t.p,{children:["You can also use the following Powershell script template for each operation in the ",(0,r.jsx)(t.a,{href:"#overview",children:"Overview"})," section. Be sure to update the ",(0,r.jsx)(t.code,{children:"$logFile"})," variable with the operation you use to ensure you are logging to a file with the correct operation name."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-powershell",children:'###############################################################################################################################\n# SETUP\n# Instructions (for each IQService host that could run the script):\n#   - Update the path to Utils.dll (can be an unqualified path like "Utils.dll" since script is copied to IQService folder for execution)\n#   - Make sure Utils.dll is in the specified folder on each IQService host\n#   - Be sure the account that runs IQService has appropriate permissions to create directories and set permissions on them\n#   - Be sure to set the "run as" account for the IQService in Windows Service to the above-specified account instead of just the "logged on" user\n#   - Set a proper location for the $logFile variable\n#   - Set the $enableDebug flag to $true or $false to toggle debug mode\n###############################################################################################################################\n\nparam (\n [Parameter(Mandatory=$true)][System.String]$requestString\n)\n\n#include SailPoint library\nAdd-Type -Path "c:\\SailPoint\\IQService\\Utils.dll";\n\n#import AD cmdlets\nImport-Module activeDirectory\n\n#log file info\n$logDate = Get-Date -UFormat "%Y%m%d"\n$logFile = "c:\\SailPoint\\Scripts\\Logs\\SampleSourceBeforeCreateScript_$logDate.log"\n$enableDebug = $false\n\n###############################################################################################################################\n# HELPER FUNCTIONS\n###############################################################################################################################\n\n#save logging files to a separate txt file\nfunction LogToFile([String] $info) {\n    $info | Out-File $logFile -Append\n}\n\n#if we have a non-null account request, get our value; otherwise return nothing\nfunction Get-AttributeValueFromAccountRequest([sailpoint.Utils.objects.AccountRequest] $request, [String] $targetAttribute) {\n    $value = $null;\n\n    if ($request) {\n        foreach ($attrib in $request.AttributeRequests) {\n            if ($attrib.Name -eq $targetAttribute) {\n                $value = $attrib.Value;\n                break;\n            }\n        }\n    } else {\n        LogToFile("Account request object was null");\n    }\n    return $value;\n}\n\n\n###############################################################################################################################\n# BODY\n###############################################################################################################################\nif($enableDebug) {\n    LogToFile("Entering beforeScript")\n}\n\ntry {\n\n    ##########################\n    # Begin SailPoint protected code -- do not modify this code block\n    #\n        $sReader = New-Object System.IO.StringReader([System.String]$requestString);\n        $xmlReader = [System.xml.XmlTextReader]([sailpoint.utils.xml.XmlUtil]::getReader($sReader));\n        $requestObject = New-Object Sailpoint.Utils.objects.AccountRequest($xmlReader);\n\n        #debug line for testing\n        if($enableDebug) {\n            LogToFile("Request object contents:")\n            LogToFile($requestObject | Out-String)\n        }\n    #\n    # End SailPoint protected code\n    ##########################\n\n\n    ##########################\n    # Begin Client-provided code\n\n    #get the necessary info we need from the accountRequest object\n    #as an example: $nativeIdentity = $requestObject.nativeIdentity\n\n    #do whatever work needs to be done here\n\n    #\n    # End Client-provided code\n}\ncatch {\n    $ErrorMessage = $_.Exception.Message\n   $ErrorItem = $_.Exception.ItemName\n   LogToFile("Error: Item = $ErrorItem -> Message = $ErrorMessage")\n}\n\nif($enableDebug) {\n    LogToFile("Exiting beforeScript")\n}\n'})}),"\n",(0,r.jsx)(t.h2,{id:"attach-to-source",children:"Attach to Source"}),"\n",(0,r.jsxs)(t.p,{children:["Refer to ",(0,r.jsx)(t.a,{href:"/docs/extensibility/rules/connector-rules#aftercreate-aftermodify-afterdelete-beforecreate-beforemodify-beforedelete-rules",children:"Attaching Connector-Related Rules to Sources"})," for details on how to attach your rule to your source."]})]})}function u(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},288763:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/connector_execution-da1c6db87e6d1b2b8d1f5398ce2f3501.png"}}]);