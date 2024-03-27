---
id: sod-violation-context
title: SodViolationContext
pagination_label: SodViolationContext
sidebar_label: SodViolationContext
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'SodViolationContext'] 
slug: /tools/sdk/powershell/v3/models/sod-violation-context
tags: ['SDK', 'Software Development Kit', 'SodViolationContext']
---


# SodViolationContext

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Policy** |  Pointer to [**SodPolicyDto**](sod-policy-dto) |  | [optional] 
**ConflictingAccessCriteria** |  Pointer to [**SodViolationContextConflictingAccessCriteria**](sod-violation-context-conflicting-access-criteria) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$SodViolationContext = Initialize-PSSailpointSodViolationContext  -Policy null `
 -ConflictingAccessCriteria null
```

- Convert the resource to JSON
```powershell
$SodViolationContext | ConvertTo-JSON
```


[[Back to top]](#) 
