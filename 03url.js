const myUrl = new URL('https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash'); 

// console.log(myUrl.hash);  // output : #hash
// console.log(myUrl.href); // output : full url return
// console.log(myUrl.host); // output : sub.example.com:8080 (give port in host)
// console.log(myUrl.hostname);// output : sub.example.com (give only host name)
// console.log(myUrl.origin); // output : https://sub.example.com:8080
// console.log(myUrl.password);// output : pass
// console.log(myUrl.pathname);// output : /p/a/t/h
// console.log(myUrl.search);// output : ?query=string
// console.log(myUrl.username);// output : user

console.log(myUrl);