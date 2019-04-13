const url = require('url');

const myUrl = new URL(
  'http://mywebsite.com:8000/hello.html?id=100&status=active'
);

// href = Serialized URL
console.log(myUrl.href);
console.log(myUrl.toString());

// host = Host (root domain)
console.log(myUrl.host);

// hostname = Hostname (does not get port)
console.log(myUrl.hostname);

// pathname = Pathname
console.log(myUrl.pathname);

// search = Serialized query
console.log(myUrl.search);

// searchParams = Params object
console.log(myUrl.searchParams);

// searchParams = Add params
myUrl.searchParams.append('abc', '123');
console.log(myUrl.searchParams);

// Loop through params
myUrl.searchParams.forEach((value, name) => console.log(`${name}:${value}`));
