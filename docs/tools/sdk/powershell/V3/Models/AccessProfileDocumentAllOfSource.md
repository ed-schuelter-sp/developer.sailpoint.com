---
id: access-profile-document-all-of-source
title: AccessProfileDocumentAllOfSource
pagination_label: AccessProfileDocumentAllOfSource
sidebar_label: AccessProfileDocumentAllOfSource
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'AccessProfileDocumentAllOfSource'] 
slug: /tools/sdk/powershell/v3/models/access-profile-document-all-of-source
tags: ['SDK', 'Software Development Kit', 'AccessProfileDocumentAllOfSource']
---


# AccessProfileDocumentAllOfSource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **String** | Source&#39;s ID. | [optional] 
**Name** |  Pointer to **String** | Source&#39;s name. | [optional] 

## Examples

- Prepare the resource
```powershell
$AccessProfileDocumentAllOfSource = Initialize-PSSailpointAccessProfileDocumentAllOfSource  -Id ff8081815757d4fb0157588f3d9d008f `
 -Name Employees
```

- Convert the resource to JSON
```powershell
$AccessProfileDocumentAllOfSource | ConvertTo-JSON
```


[[Back to top]](#) 
