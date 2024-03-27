---
id: tagged-objects
title: TaggedObjects
pagination_label: TaggedObjects
sidebar_label: TaggedObjects
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'TaggedObjects'] 
slug: /tools/sdk/powershell/v3/methods/tagged-objects
tags: ['SDK', 'Software Development Kit', 'TaggedObjects']
---


# TaggedObjects

All URIs are relative to *https://sailpoint.api.identitynow.com/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteTaggedObject**](#delete-tagged-object) | **DELETE** /tagged-objects/{type}/{id} | Delete Tagged Object
[**deleteTagsToManyObject**](#delete-tags-to-many-object) | **POST** /tagged-objects/bulk-remove | Remove Tags from Multiple Objects
[**getTaggedObject**](#get-tagged-object) | **GET** /tagged-objects/{type}/{id} | Get Tagged Object
[**listTaggedObjects**](#list-tagged-objects) | **GET** /tagged-objects | List Tagged Objects
[**listTaggedObjectsByType**](#list-tagged-objects-by-type) | **GET** /tagged-objects/{type} | List Tagged Objects by Type
[**putTaggedObject**](#put-tagged-object) | **PUT** /tagged-objects/{type}/{id} | Update Tagged Object
[**setTagToObject**](#set-tag-to-object) | **POST** /tagged-objects | Add Tag to Object
[**setTagsToManyObjects**](#set-tags-to-many-objects) | **POST** /tagged-objects/bulk-add | Tag Multiple Objects



## delete-tagged-object


This deletes a tagged object for the specified type.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Type | **String** | True  | The type of tagged object to delete.
Path   | Id | **String** | True  | The ID of the object reference to delete.

	
### Return type

 (empty response body)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
204 | No content. | 
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto


### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) 


## delete-tags-to-many-object


This API removes tags from multiple objects.

A token with API, CERT_ADMIN, ORG_ADMIN, REPORT_ADMIN, ROLE_ADMIN, ROLE_SUBADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to call this API.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | BulkTaggedObject | [**BulkTaggedObject**](../models/bulk-tagged-object) | True  | Supported object types are ACCESS_PROFILE, APPLICATION, CAMPAIGN, ENTITLEMENT, IDENTITY, ROLE, SOD_POLICY, SOURCE.

	
### Return type

 (empty response body)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
204 | No content - indicates the request was successful but there is no content to be returned in the response. | 
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto


### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) 


## get-tagged-object


This gets a tagged object for the specified type.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Type | **String** | True  | The type of tagged object to retrieve.
Path   | Id | **String** | True  | The ID of the object reference to retrieve.

	
### Return type

[**TaggedObject**](../models/tagged-object)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Tagged object by type and ID. | TaggedObject
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto


### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) 


## list-tagged-objects


This API returns a list of all tagged objects.

Any authenticated token may be used to call this API.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **objectRef.id**: *eq, in*  **objectRef.type**: *eq, in*  **tagName**: *eq, in*

	
### Return type

[**TaggedObject[]**](../models/tagged-object)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of all tagged objects. | TaggedObject[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto


### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) 


## list-tagged-objects-by-type


This API returns a list of all tagged objects by type.

Any authenticated token may be used to call this API.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Type | **String** | True  | The type of tagged object to retrieve.
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **objectRef.id**: *eq*  **objectRef.type**: *eq*

	
### Return type

[**TaggedObject[]**](../models/tagged-object)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of all tagged objects for specified type. | TaggedObject[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto


### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) 


## put-tagged-object


This updates a tagged object for the specified type.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Type | **String** | True  | The type of tagged object to update.
Path   | Id | **String** | True  | The ID of the object reference to update.
 Body  | TaggedObject | [**TaggedObject**](../models/tagged-object) | True  | 

	
### Return type

[**TaggedObject**](../models/tagged-object)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Tagged object by type and ID. | TaggedObject
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto


### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) 


## set-tag-to-object


This adds a tag to an object.

Any authenticated token may be used to call this API.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | TaggedObject | [**TaggedObject**](../models/tagged-object) | True  | 

	
### Return type

 (empty response body)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
201 | Created. | 
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto


### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) 


## set-tags-to-many-objects


This API adds tags to multiple objects.

A token with API, CERT_ADMIN, ORG_ADMIN, REPORT_ADMIN, ROLE_ADMIN, ROLE_SUBADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to call this API.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | BulkTaggedObject | [**BulkTaggedObject**](../models/bulk-tagged-object) | True  | Supported object types are ACCESS_PROFILE, APPLICATION, CAMPAIGN, ENTITLEMENT, IDENTITY, ROLE, SOD_POLICY, SOURCE.

	
### Return type

[**BulkTaggedObject**](../models/bulk-tagged-object)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Request succeeded. | BulkTaggedObject
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto


### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) 
