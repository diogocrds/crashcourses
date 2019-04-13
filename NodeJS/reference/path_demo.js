const path = require('path');

// basename = Base file name
console.log(path.basename(__filename));

// dirname = Directory name
console.log(path.dirname(__filename));

// extname = File extension
console.log(path.extname(__filename));

// parse = Create path object {root, dir, base, ext, name}
console.log(path.parse(__filename));

// join = Concatenate paths
console.log(path.join(__dirname, 'test', 'hello.html'));
