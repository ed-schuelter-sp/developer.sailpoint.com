---
id: password-management
title: PasswordManagement
pagination_label: PasswordManagement
sidebar_label: PasswordManagement
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'PasswordManagement'] 
slug: /tools/sdk/powershell/beta/methods/password-management
tags: ['SDK', 'Software Development Kit', 'PasswordManagement']
---


# PasswordManagement

All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**generateDigitToken**](#generate-digit-token) | **POST** /generate-password-reset-token/digit | Generate a digit token
[**getIdentityPasswordChangeStatus**](#get-identity-password-change-status) | **GET** /password-change-status/{id} | Get Password Change Request Status
[**queryPasswordInfo**](#query-password-info) | **POST** /query-password-info | Query Password Info
[**setIdentityPassword**](#set-identity-password) | **POST** /set-password | Set Identity&#39;s Password



## generate-digit-token


This API is used to generate a digit token for password management. Requires authorization scope of "idn:password-digit-token:create".

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | PasswordDigitTokenReset | [**PasswordDigitTokenReset**](../models/password-digit-token-reset) | True  | 

	
### Return type

[**PasswordDigitToken**](../models/password-digit-token)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The digit token for password management. | PasswordDigitToken
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto


### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) 


## get-identity-password-change-status


This API returns the status of a password change request. A token with identity owner or trusted API client application authority is required to call this API.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | 

	
### Return type

[**PasswordStatus**](../models/password-status)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Status of the password change request | PasswordStatus
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto


### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) 


## query-password-info


This API is used to query password related information. 

A token with [API authority](https://developer.sailpoint.com/idn/api/authentication#client-credentials-grant-flow) 
is required to call this API.  "API authority" refers to a token that only has the "client_credentials" 
grant type, and therefore no user context. A [personal access token](https://developer.sailpoint.com/idn/api/authentication#personal-access-tokens) 
or a token generated with the [authorization_code](https://developer.sailpoint.com/idn/api/authentication#authorization-code-grant-flow) 
grant type will **NOT** work on this endpoint, and a `403 Forbidden` response 
will be returned.


### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | PasswordInfoQueryDTO | [**PasswordInfoQueryDTO**](../models/password-info-query-dto) | True  | 

	
### Return type

[**PasswordInfo**](../models/password-info)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Reference to the password info. | PasswordInfo
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto


### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) 


## set-identity-password


This API is used to set a password for an identity. 

An identity can change their own password (as well as any of their accounts' passwords) if they use a token generated by their IDN user, such as a [personal access token](https://developer.sailpoint.com/idn/api/authentication#personal-access-tokens) or ["authorization_code" derived OAuth token](https://developer.sailpoint.com/idn/api/authentication#authorization-code-grant-flow).

A token with [API authority](https://developer.sailpoint.com/idn/api/authentication#client-credentials-grant-flow) can be used to change **any** identity's password or the password of any of the identity's accounts. 
"API authority" refers to a token that only has the "client_credentials" grant type.

You can use this endpoint to generate an `encryptedPassword` (RSA encrypted using publicKey). 
To do so, follow these steps:

1. Use [Query Password Info](https://developer.sailpoint.com/idn/api/v3/query-password-info) to get the following information: `identityId`, `sourceId`, `publicKeyId`, `publicKey`, `accounts`, and `policies`. 

2. Choose an account from the previous response that you will provide as an `accountId` in your request to set an encrypted password. 

3. Use [Set Identity's Password](https://developer.sailpoint.com/idn/api/v3/set-password) and provide the information you got from your earlier query. Then add this code to your request to get the encrypted password:

```java
import javax.crypto.Cipher;
import java.security.KeyFactory;
import java.security.PublicKey;
import java.security.spec.X509EncodedKeySpec;
import java util.Base64;

String encrypt(String publicKey, String toEncrypt) throws Exception {
  byte[] publicKeyBytes = Base64.getDecoder().decode(publicKey);
  byte[] encryptedBytes = encryptRsa(publicKeyBytes, toEncrypt.getBytes("UTF-8"));
  return Base64.getEncoder().encodeToString(encryptedBytes);
}

private byte[] encryptRsa(byte[] publicKeyBytes, byte[] toEncryptBytes) throws Exception {
  PublicKey key = KeyFactory.getInstance("RSA").generatePublic(new X509EncodedKeySpec(publicKeyBytes));
  String transformation = "RSA/ECB/PKCS1Padding";
  Cipher cipher = Cipher.getInstance(transformation);
  cipher.init(1, key);
  return cipher.doFinal(toEncryptBytes);
}
```    

In this example, `toEncrypt` refers to the plain text password you are setting and then encrypting, and the `publicKey` refers to the publicKey you got from the first request you sent. 

You can then use [Get Password Change Request Status](https://developer.sailpoint.com/idn/api/v3/get-password-change-status) to check the password change request status. To do so, you must provide the `requestId` from your earlier request to set the password. 


### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | PasswordChangeRequest | [**PasswordChangeRequest**](../models/password-change-request) | True  | 

	
### Return type

[**PasswordChangeResponse**](../models/password-change-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
202 | Reference to the password change. | PasswordChangeResponse
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto


### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) 
