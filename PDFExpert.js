/*
^https:\/\/license\.pdfexpert\.com\/api\/.*\/(documents|pdfexpert6)\/subscription\/(refresh$|check$)
*/
var obj = JSON.parse($response.body);

obj["isInGracePeriod"] = false;
obj["isEligibleForIntroPeriod"] = false;
obj["originalTransactionId"] = "20000000000000";
obj["subscriptionState"] = "active";
obj["subscriptionExpirationDate"] = "23:59 31/12/2099";
obj["subscriptionAutoRenewStatus"] = "autoRenewOff";
obj["subscriptionReceiptId"] = "1500000000000";

$done({body:JSON.stringify(obj)});