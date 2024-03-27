---
id: campaign-all-of-role-composition-campaign-info-remediator-ref
title: CampaignAllOfRoleCompositionCampaignInfoRemediatorRef
pagination_label: CampaignAllOfRoleCompositionCampaignInfoRemediatorRef
sidebar_label: CampaignAllOfRoleCompositionCampaignInfoRemediatorRef
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'CampaignAllOfRoleCompositionCampaignInfoRemediatorRef'] 
slug: /tools/sdk/powershell/v3/models/campaign-all-of-role-composition-campaign-info-remediator-ref
tags: ['SDK', 'Software Development Kit', 'CampaignAllOfRoleCompositionCampaignInfoRemediatorRef']
---


# CampaignAllOfRoleCompositionCampaignInfoRemediatorRef

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |   **Enum** [  "IDENTITY" ] | Legal Remediator Type | 
**Id** |  **String** | The ID of the remediator. | 
**Name** |  Pointer to **String** | The name of the remediator. | [optional] [readonly] 

## Examples

- Prepare the resource
```powershell
$CampaignAllOfRoleCompositionCampaignInfoRemediatorRef = Initialize-PSSailpointCampaignAllOfRoleCompositionCampaignInfoRemediatorRef  -Type IDENTITY `
 -Id 2c90ad2a70ace7d50170acf22ca90010 `
 -Name Role Admin
```

- Convert the resource to JSON
```powershell
$CampaignAllOfRoleCompositionCampaignInfoRemediatorRef | ConvertTo-JSON
```


[[Back to top]](#) 
