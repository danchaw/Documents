/*
^https:\/\/license\.pdfexpert\.com\/api\/.*\/(documents|pdfexpert6)\/subscription\/(refresh$|check$)
*/
var obj = JSON.parse($response.body);
obj = {
  originalTransactionId: "520000468152521",
  subscriptionState: "active",
  isInGracePeriod: false,
  subscriptionExpirationDate: "13:15 03/11/2099",
  subscriptionAutoRenewStatus: "autoRenewOn",
  isEligibleForIntroPeriod: false,
  isPDFExpert6User: true,
  isDocuments6User: true,
  subscriptionReceiptId: "1572178404000"
};

$done({body: JSON.stringify(obj)});