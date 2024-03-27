---
id: account-aggregations
title: AccountAggregations
pagination_label: AccountAggregations
sidebar_label: AccountAggregations
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'AccountAggregations'] 
slug: /tools/sdk/go/beta/methods/account-aggregations
tags: ['SDK', 'Software Development Kit', 'AccountAggregations']
---


# AccountAggregations

All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GetAccountAggregationStatus**](#get-account-aggregation-status) | **Get** /account-aggregations/{id}/status | In-progress Account Aggregation status



## get-account-aggregation-status


This API returns the status of an *in-progress* account aggregation, along with the total number of **NEW**, **CHANGED** and **DELETED** accounts found since the previous aggregation, and the number of those accounts that have been processed so far.

Accounts that have not changed since the previous aggregation are not included in **totalAccounts** and **processedAccounts** counts returned by this API. This is distinct from **Accounts Scanned** shown in the Aggregation UI, which indicates total accounts scanned regardless of whether they changed or not.

Since this endpoint reports on the status of an *in-progress* account aggregation, totalAccounts and processedAccounts may change between calls to this endpoint.

*Only available up to an hour after the aggregation completes. May respond with *404 Not Found* after that.*

A token with ORG_ADMIN, SOURCE_ADMIN, SOURCE_SUBADMIN or DASHBOARD authority is required to call this API.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **string** | True  | The account aggregation id

	
### Return type

[**AccountAggregationStatus**](../models/account-aggregation-status)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | An account aggregation status object | AccountAggregationStatus
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto


### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) 
