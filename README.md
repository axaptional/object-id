# object-id
A simple utility function that creates and returns incremental object IDs

## Installation

Use `npm` to install [`@axaptional/object-id`][NPM]:

```bash
$ npm install @axaptional/object-id
```

## Usage

This package is actually just a tiny wrapper around a WeakMap.

Therefore:
- only objects may be mapped to an ID.
- attempting to retrieve the ID of a primitive value will raise a TypeError.
  - (primitives are Boolean, Null, Undefined, Number, String and Symbol)
- IDs are equal when their objects are strictly equal (`===`).

### Import

Import the `id` object from this package:

```js
// ES2015+ syntax
import { id } from '@axaptional/object-id';
// CommonJS syntax (Node)
const { id } = require('@axaptional/object-id');
```

### `id(<object>)`

To retrieve an ID for a given object, use `id(<object>)` or `id.id(<object>)`:

```js
const square = x => x * x;
const idBefore = id(square);
square.squaresNumbers = true;
const idAfter = id(square);
console.log(idBefore === idAfter); // prints "true"
```

The second variant can come in handy if you already have an "id" module
imported and do not want to add a suffix to the alias:
```js
import { id as Axaptional } from '@axaptional/object-id';
Axaptional.id({});
```

### `has(<object>, <id>)`

To check an object against an ID, use `id.has(<object>, <id>)`:

```js
let square = x => x * x;
const squareId = id(square);
square = x => Math.pow(x, 2);
console.log(id.has(square, squareId)); // prints "false"
```

### `clear()`

To clear the object ID store, use `id.clear()`:

```js
const square = x => x * x;
const squareId = id(square);
id.clear();
console.log(id.has(square, squareId)); // prints "false"
```

It is guaranteed that identifying an object both before and after a call to
`clear()` will yield different IDs as long as you do not attempt to identify
more objects than `Number.MAX_SAFE_INTEGER` in total.
In other words, calling `clear()` does not reset the ID counter.

### Sidenote

Of course, if you want to check if two objects have the same ID,
you do not need to rely on `id` at all and can instead simply compare
the two objects with `===`.
Strictly unequal objects have different IDs,
while strictly equal objects always have the same ID.

## License

This package is available under the [Unlicense][LICENSE].

<!-- References -->
[NPM]: https://www.npmjs.com/package/@axaptional/object-id
[LICENSE]: https://github.com/axaptional/object-id/blob/master/LICENSE
