

var json ={'Public Key': 'pk_test_4296fd52-efba-4a38-b6ce-cf0d93639d8a'}

var xhr = new XMLHttpRequest();
xhr.open("POST", https://api.sandbox.checkout.com/payments);
xhr.setRequestHeader("Accept", "application/json");
xhr.setRequestHeader("Content-Type", "application/json");

xhr.onreadystatechange = function () {
   if (xhr.readyState === 4) {
      console.log(xhr.status);
      console.log(xhr.responseText);
   }};

xhr.send();


