## int-parser

### Install

```
npm i int-parser --save
```

### API

#### parseInt(num: Number, symbols: String | Array)

```javascript
const parser = require('int-parser');
const base62Symbols = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

parser.parseInt(99999, base62Symbols); // => 'q0T'
```

#### toInt(str: String, symbols: String | Array)

```javascript
const parser = require('int-paser');
const base62Symbols = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

parser.toInt('q0T', base62Symbols); // 99999
```
