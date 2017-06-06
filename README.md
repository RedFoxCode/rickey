# Rickey

**Fastest** tool to get native type of a value. 

Just see benchmark against **kind-of** (based on `Object`, `Function` and `RegExp` instance):

```
kind-of x 572,549 ops/sec +0.91% (76 runs sampled)
rickey x 712,959 ops/sec +1.49% (81 runs sampled)
Fastest is rickey
```

# Installation and usage

```sh
npm i rickey
```

```javascript
const t = require("rickey");

t(new WeakMap()); // "weakmap"
// It supports ALL types that kind-of does (except arguments)
```

# ...

**Rickey** is written only in `38` lines of code (less then kind-of and README file), has better performance. However, it has more initialization time. On initialization step **rickey** updates prototype of constructors, adding property `_trickey` with the constructor name.

```javascript
Object.keys(TYPES).forEach(function(name) {
	eval(name + ".prototype._trickey='" + TYPES[name] + "'");
});
```

And when you try to get type (on non-undefined or non-null) **rickey** just returns `_trickey` property of your object. So you can add your own constructors.

```javascript
MyConstructor.prototype._trickey = "myconstructor";
```