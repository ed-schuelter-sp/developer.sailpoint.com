"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[73165],{51135:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>c,frontMatter:()=>l,metadata:()=>a,toc:()=>d});var r=t(785893),i=t(511151);const l={id:"transform-rule",title:"Transform Rule",pagination_label:"Transform Rule",sidebar_label:"Transform Rule",sidebar_class_name:"Transform Rule",keywords:["cloud","rules","transform"],description:"This rule performs transforms.",slug:"/extensibility/rules/cloud-rules/transform-rule",tags:["Rules"]},s=void 0,a={id:"extensibility/rules/cloud-rules/transform-rule",title:"Transform Rule",description:"This rule performs transforms.",source:"@site/docs/extensibility/rules/cloud-rules/transform_rule.md",sourceDirName:"extensibility/rules/cloud-rules",slug:"/extensibility/rules/cloud-rules/transform-rule",permalink:"/docs/extensibility/rules/cloud-rules/transform-rule",draft:!1,unlisted:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/extensibility/rules/cloud-rules/transform_rule.md",tags:[{inline:!0,label:"Rules",permalink:"/docs/tags/rules"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1724791322e3,frontMatter:{id:"transform-rule",title:"Transform Rule",pagination_label:"Transform Rule",sidebar_label:"Transform Rule",sidebar_class_name:"Transform Rule",keywords:["cloud","rules","transform"],description:"This rule performs transforms.",slug:"/extensibility/rules/cloud-rules/transform-rule",tags:["Rules"]},sidebar:"openApiSidebar",previous:{title:"Manager Correlation Rule",permalink:"/docs/extensibility/rules/cloud-rules/manager-correlation-rule"},next:{title:"Connector Executed Rules",permalink:"/docs/extensibility/rules/connector-rules"}},o={},d=[{value:"Overview",id:"overview",level:2},{value:"Transform",id:"transform",level:3},{value:"Rule Code",id:"rule-code",level:3},{value:"Execution",id:"execution",level:2},{value:"Input",id:"input",level:2},{value:"Output",id:"output",level:2},{value:"Template",id:"template",level:2},{value:"Example - Name Normalizer",id:"example---name-normalizer",level:2},{value:"Transform Reference",id:"transform-reference",level:2}];function u(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,r.jsx)(n.p,{children:"This rule type is used in transforms to accomplish a specific task given configurable parameters described in the transforms attributes. The rule to perform the same task as the split transform given a delimiter and index would look like this:"}),"\n",(0,r.jsx)(n.h3,{id:"transform",children:"Transform"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "name": "Split Rule",\n  "type": "rule",\n  "attributes": {\n    "name": "Split",\n    "delimiter": ",",\n    "index": 0,\n    "text": "This,is,a,test"\n  }\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"rule-code",children:"Rule Code"}),"\n",(0,r.jsxs)(n.p,{children:["The variables ",(0,r.jsx)(n.code,{children:"delimiter"}),", ",(0,r.jsx)(n.code,{children:"index"}),", and ",(0,r.jsx)(n.code,{children:"text"})," in the above transform are all available to you within the scope of the rule."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"String delimiter = delimiter;\nint index = index;\nString text = text;\n\n\nString[] result = text.split(delimiter);\nreturn result[index];\n"})}),"\n",(0,r.jsx)(n.h2,{id:"execution",children:"Execution"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Cloud Execution"})," - This rule executes in the Identity Security Cloud cloud, and it has read-only access to Identity Security Cloud data models, but it does not have access to on-premise sources or connectors."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Logging"})," - Logging statements are currently only visible to SailPoint personnel."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Rule Execution",src:t(544490).Z+"",width:"1594",height:"635"})}),"\n",(0,r.jsx)(n.h2,{id:"input",children:"Input"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Argument"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Purpose"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"log"}),(0,r.jsx)(n.td,{children:"org.apache.log4j.Logger"}),(0,r.jsxs)(n.td,{children:["Logger to log statements. ",(0,r.jsx)(n.em,{children:"Note: This executes in the cloud, and logging is currently not exposed to anyone other than SailPoint."})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"idn"}),(0,r.jsx)(n.td,{children:"sailpoint.server.IdnRuleUtil"}),(0,r.jsxs)(n.td,{children:["Provides a read-only starting point for using the SailPoint API. From this passed reference, the rule can interrogate the Identity Security Cloud data model including identities or account information via helper methods as described in ",(0,r.jsx)(n.a,{href:"/docs/extensibility/rules/rule-utility",children:"IdnRuleUtil"}),"."]})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"output",children:"Output"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Argument"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Purpose"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"value"}),(0,r.jsx)(n.td,{children:"java.lang.Object"}),(0,r.jsx)(n.td,{children:"Value returned for the account attribute, typically a string."})]})})]}),"\n",(0,r.jsx)(n.h2,{id:"template",children:"Template"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-xml",children:'<?xml version=\'1.0\' encoding=\'UTF-8\'?>\n<!DOCTYPE Rule PUBLIC "sailpoint.dtd" "sailpoint.dtd">\n<Rule name="Example Rule">\n  <Description>Describe your rule here.</Description>\n  <Source><![CDATA[\n\n  // Add your logic here.\n\n  ]]></Source>\n</Rule>\n'})}),"\n",(0,r.jsx)(n.h2,{id:"example---name-normalizer",children:"Example - Name Normalizer"}),"\n",(0,r.jsx)(n.p,{children:"This rule normalizes any names into normal names capitaliztion. For example: JOHN DOE -> John Doe."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"<?xml version='1.0' encoding='UTF-8'?>\n<!DOCTYPE Rule PUBLIC \"sailpoint.dtd\" \"sailpoint.dtd\">\n<Rule name=\"Name Normalizer\" type=\"Transform\">\n  <Description>\nThis rule normalizes any names into normal names capitaliztion.  For example:\n  JOHN DOE -> John Doe\n  tony smith -> Tony Smith\n  CORNELIUS AUGUSTINE MCGLENNON IV -> Cornelius Augustine McGlennon IV\n  NEIL MC GLENNON -> Neil McGlennon\n  mArTiN o'mAlLeY -> Martin O'Malley\n  Dr. JOHN D. O'BRIEN -> Dr. John D. O'Brien\n  john wilkes-booth -> John Wilkes-Booth\n  JOAN OF ARC -> Joan of Arc\n  MACKENNA -> MacKenna\n  OSCAR DE LA HOYA -> Oscar de la Hoya\n  CAPTAIN VON TRAPP -> Captain von Trapp\n  Dell dEl Roach -> Dell del Roach\n  Augustiner Anstruther-Gough-Calthorpe -> Augustiner Anstruther-Gough-Calthorpe\n  GEORGE HENRY LANE-FOX PITT-RIVERS ESQ. -> George Henry Lane-Fox Pitt-Rivers Esq.\n  JOS\xc9 ORTEGA Y GASSET -> Jos\xe9 Ortega y Gasset\n</Description>\n  <Source><![CDATA[\nimport java.util.Iterator;\nimport java.util.Map;\nimport java.util.regex.Matcher;\nimport java.util.regex.Pattern;\nimport org.apache.commons.lang.StringUtils;\nimport org.apache.commons.lang.WordUtils;\nimport com.google.gson.Gson;\n\n/*\n * Delimiter Constant (Step 2):  These define default word boundaries for the 'capitalizeFully' function.\n * Default is hyphenated last names, space, and anything with ' character.\n */\nchar[] delimiters = delimiters;\n\n/*\n * Patterns Constant (Step 3):  These are for special replacements for Mc and Mac surnames.\n */\nString patterns = patterns;\n\n/*\n * Replacements Constant (Step 4):  These are for special replacements for titles, suffixes, and name linkages.\n */\nString replacements = replacements;\n\n/*\n * Normalize Name Function\n * Input:  String\n * Output: String\n */\n\npublic String normalizeName ( String input ) {\n  /*\n   * Step 1: If we're null or empty, we're done.\n   */\n  input = StringUtils.trimToNull( input );\n  if ( input == null )\n    return null;\n\n  /*\n   * Step 2: Iterate through delimiters, and do a pattern match on capitalizaion.  This takes care of 99% of the simple stuff.\n   * e.g. john doe -> John Doe\n   */\n  input = WordUtils.capitalizeFully( input, delimiters );\n\n  /*\n   * Step 3: Iterate through and handle special cases.\n   * e.g. Mcglennon -> McGlennon, Mackenna -> MacKenna\n   */\n  Matcher m = Pattern.compile( patterns ).matcher( input );\n  while ( m.find() ) {\n    input = WordUtils.capitalizeFully( input.substring( 0, m.start() ), delimiters )\n        + WordUtils.capitalizeFully( input.substring( m.start(), m.end() ), delimiters )\n        +  WordUtils.capitalizeFully( input.substring( m.end(), input.length() ), delimiters );\n  }\n\n  /*\n   * Step 4: Iterate through special replacement exceptions.\n   * e.g. CAPTAIN VON TRAPP -> Captain Von Trapp -> Captain von Trapp\n   */\n  Map replaceMap = new Gson().fromJson( replacements, Map.class );\n  Iterator it = replaceMap.entrySet().iterator();\n  while (it.hasNext()) {\n    Map.Entry pair = (Map.Entry) it.next();\n    input = Pattern.compile( (String) pair.getKey() ).matcher( input ).replaceAll( (String) pair.getValue() );\n    it.remove(); // avoids a ConcurrentModificationException\n  }\n\n  /*\n   * We're done!\n   */\n  return input;\n}\n\nreturn normalizeName( input );\n\n  ]]></Source>\n</Rule>\n"})}),"\n",(0,r.jsx)(n.h2,{id:"transform-reference",children:"Transform Reference"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "name": "Normalize Name",\n  "type": "rule",\n  "attributes": {\n    "name": "Name Normalizer",\n    "delimiters": ["-", " ", "\\\\\'"],\n    "replacements": {\n      "\\\\\\\\b(?:Von)\\\\\\\\b": "von",\n      "\\\\\\\\b(?:Del)\\\\\\\\b": "del",\n      "\\\\\\\\b(?:Of)\\\\\\\\b": "of",\n      "\\\\\\\\b(?:De)\\\\\\\\b": "de",\n      "\\\\\\\\b(?:La)\\\\\\\\b": "la",\n      "\\\\\\\\b(?:Y)\\\\\\\\b": "y",\n      "\\\\\\\\b(?:Iv)\\\\\\\\b": "IV",\n      "\\\\\\\\b(?:Iii)\\\\\\\\b": "III",\n      "\\\\\\\\b(?:Ii)\\\\\\\\b": "II",\n      "\\\\\\\\b(?:Mc )\\\\\\\\b": "Mc"\n    },\n    "patterns": "\\\\b(Mc|Mac)",\n    "input": {\n      "type": "trim"\n    }\n  }\n}\n'})})]})}function c(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},544490:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/cloud_execution-7029b7fdcb50a6ea04ef055f18117067.png"}}]);