<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/7aa57bc1-6266-4719-a497-c3ab18a28f5d.png" alt="Author avatar" class="jsx-3841407315" />

Benney Au

Access Azure Storage Account Resources from Postman
===================================================

### Benney Au

-   Oct 8, 2020
-   7 Min read
-   8,260 Views

-   Oct 8, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">7 Min</span> read
-   8,260 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Postman</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Languages, Frameworks, and Tools</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Developer Testing Tools/Frameworks</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Developer Tools</span>

Introduction

25

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-usingsharedkeystoauthorizetotablestorage" class="menu-link">Using Shared Keys to Authorize to Table Storage</a>
-   <a href="#module-usingsharedkeystoauthorizetoblobstorage" class="menu-link">Using Shared Keys to Authorize to Blob Storage</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

Azure storage accounts provide low-cost and high-availability data services. The primary way to access these data services is using REST APIs. For your business' custom REST APIs, you may already be comfortable with using Postman to test, debug and monitor them. It would be convenient if you could stay inside Postman to also interact with your Azure storage account, perhaps to make end to end testing easier or share requests with your team members.

In this guide, you will learn how to use Postman to interact with your storage account. You will set up authentication and then query storage tables and storage blobs. This guide builds on a previous guide, [Set Up Postman and Automatically Add Bearer Tokens](https://app.pluralsight.com/guides/set-up-postman-and-automatically-add-bearer-tokens).

Using Shared Keys to Authorize to Table Storage
-----------------------------------------------

Azure storage accounts offer several ways to authenticate, including managed identity for storage blobs and storage queues, Azure AD authentication, shared keys, and shared access signatures (SAS) tokens. However, the simplest solution is using shared keys. Two keys are provided for you when you create a storage account. They have permissions to do everything on the storage account, so it is important to take care to store them securely.

The below code snippet shows how you can generate the required authorization values to make a request to a storage table.

    1const storageAccount = pm.variables.get('azure_storage_account');
    2const accountKey = pm.variables.get('azure_storage_key');
    3
    4const date = new Date();
    5const UTCstring = date.toUTCString();
    6
    7const dataToEncode = UTCstring + "\n" + `/${storageAccount}${pm.request.url.getPath()}`;
    8
    9const encodedData = unescape(encodeURIComponent(dataToEncode));
    10
    11var hash = CryptoJS.HmacSHA256(encodedData, CryptoJS.enc.Base64.parse(accountKey));
    12var signature = hash.toString(CryptoJS.enc.Base64);
    13
    14var auth = "SharedKeyLite " + storageAccount + ":" + signature;
    15
    16pm.variables.set("header_authorization", auth);
    17pm.variables.set("header_date", UTCstring);

javascript

With this code snippet set as the pre-request script, you also need to set up headers to read the variables saved.

    1GET https://{{azure_storage_account}}.table.core.windows.net/MyTable()?$filter=(PartitionKey eq 'PartitionA')
    2
    3x-ms-date:{{header_date}}
    4Authorization:{{header_authorization}}
    5x-ms-version:2019-02-02
    6Accept:application/json;odata=nometadata

The header details above demonstrate how to configure he URL and headers of a table storage query. When you run this request, it will return a JSON list of rows that match the specified filter.

Using Shared Keys to Authorize to Blob Storage
----------------------------------------------

You can also use shared keys to connect to blob storage. However, the script to do this is slightly more complex. It is demonstrated below and sourced from [Kamran Ayub's azure-storage-rest-postman GitHub Repository](https://github.com/kamranayub/azure-storage-rest-postman).

    1// Set Date header value for authorization
    2// Should be UTC GMT string
    3pm.variables.set("header_date", new Date().toUTCString());
    4
    5// Get hash of all header-name:value
    6const headers = pm.request.getHeaders({ ignoreCase: true, enabled: true });
    7
    8// Construct Signature value for Authorization header
    9var signatureParts = [
    10    pm.request.method.toUpperCase(),
    11    headers["content-encoding"] || "",
    12    headers["content-language"] || "",
    13    headers["content-length"]  || "",
    14//    pm.request.body ? pm.request.body.toString().length || "" : "",
    15    headers["content-md5"] || "",
    16    headers["content-type"] || "",
    17    headers["x-ms-date"] ? "" : (pm.variables.get("header_date") || ""),
    18    headers["if-modified-since"] || "",
    19    headers["if-match"] || "",
    20    headers["if-none-match"] || "",
    21    headers["if-unmodified-since"] || "",
    22    headers["range"] || ""
    23];
    24
    25// Construct CanonicalizedHeaders
    26const canonicalHeaderNames = [];
    27Object.keys(headers).forEach(key => {
    28    if (key.startsWith("x-ms-")) {
    29        canonicalHeaderNames.push(key);
    30    }
    31});
    32// Sort headers lexographically by name
    33canonicalHeaderNames.sort();
    34
    35const canonicalHeaderParts = [];
    36canonicalHeaderNames.forEach(key => {
    37    let value = pm.request.getHeaders({ ignoreCase: true, enabled: true })[key];
    38
    39    // Populate variables
    40    value = pm.variables.replaceIn(value);
    41
    42    // Replace whitespace in value but not if its within quotes
    43    if (!value.startsWith("\"")) {
    44        value = value.replace(/\s+/, " ");
    45    }
    46
    47    canonicalHeaderParts.push(`${key}:${value}`);
    48});
    49
    50// Add headers to signature
    51signatureParts.push.apply(signatureParts, canonicalHeaderParts);
    52
    53// Construct CanonicalizedResource
    54const canonicalResourceParts = [
    55    `/${pm.variables.get("azure_storage_account")}${pm.request.url.getPath()}`
    56];
    57const canonicalQueryNames = [];
    58pm.request.url.query.each(query => {
    59    canonicalQueryNames.push(query.key.toLowerCase());
    60});
    61canonicalQueryNames.sort();
    62canonicalQueryNames.forEach(queryName => {
    63    const value = pm.request.url.query.get(queryName);
    64
    65    // NOTE: This does not properly explode multiple same query params' values
    66    // and turn them into comma-separated list
    67    canonicalResourceParts.push(`${queryName}:${value}`);
    68});
    69// Add resource to signature
    70signatureParts.push.apply(signatureParts, canonicalResourceParts);
    71
    72console.log("Signature Parts", signatureParts);
    73
    74// Now, construct signature raw string
    75const signatureRaw = signatureParts.join("\n");
    76
    77console.log("Signature String", JSON.stringify(signatureRaw));
    78
    79// Hash it using HMAC-SHA256 and then encode using base64
    80const storageKey = pm.variables.get("azure_storage_key");
    81const signatureBytes = CryptoJS.HmacSHA256(signatureRaw, CryptoJS.enc.Base64.parse(storageKey));
    82const signatureEncoded = signatureBytes.toString(CryptoJS.enc.Base64);
    83
    84console.log("Storage Account", pm.variables.get("azure_storage_account"));
    85console.log("Storage Key", storageKey);
    86
    87// Finally, make it available for headers
    88pm.variables.set("header_authorization",
    89    `SharedKey ${pm.variables.get("azure_storage_account")}:${signatureEncoded}`);

javascript

Next, you need to set the request headers, similar to the table storage example above.

    1GET https://{{azure_storage_account}}.blob.core.windows.net/?restype=service&comp=properties
    2x-ms-date:{{header_date}}
    3Authorization:{{header_authorization}}
    4x-ms-version:2018-03-28

This requests the blob metadata properties. For more details on what is optional and required in the header, read [Microsoft's documentation on authorizing with shared keys](https://docs.microsoft.com/en-us/rest/api/storageservices/authorize-with-shared-key#blob-queue-and-file-services-shared-key-authorization).

Conclusion
----------

As demonstrated, you can use shared keys from inside Postman to query Azure storage account resources such as blobs and tables. This can be helpful for performing end-to-end API testing. You can run Postman requests on your custom APIs and verify everything is working by querying the storage account.

25

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)
