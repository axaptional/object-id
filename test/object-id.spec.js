const assert = require('assert');
let id;

const data = {
  unequalObjectPairs: [
    [{}, []], [x => x, Date], [new Map(), { value: null }]
  ],
  validObjects: [{}, [1, [2]], x => x, new class {}, Promise],
  invalidObjects: [true, null, undefined, NaN, Infinity, 0, '\0', Symbol.iterator]
};

beforeEach('refresh ID store', () => {
  id = undefined;
  id = require('../dist/object-id').id;
});

describe('id', () => {
  it('returns different IDs for unequal objects', () => {
    data.unequalObjectPairs.forEach(([value1, value2]) => {
      assert.notStrictEqual(id(value1), id(value2));
    });
  });
  it('returns the same ID for equal objects', () => {
    data.validObjects.forEach(object => {
      assert.strictEqual(id(object), id(object));
    });
  });
  it('throws a TypeError if a primitive value is passed', () => {
    data.invalidObjects.forEach(object => {
      assert.throws(() => {
        id(object);
      }, TypeError);
    });
  });
  context('#id', () => {
    it('is identical to calling the object store itself', () => {
      assert.strictEqual(id, id.id);
    });
  });
  context('#has', () => {
    it('returns false for unequal objects', () => {
      data.unequalObjectPairs.forEach(([value1, value2]) => {
        assert.strictEqual(id.has(value1, id(value2)), false);
      });
    });
    it('returns true for equal objects', () => {
      data.validObjects.forEach(object => {
        assert.strictEqual(id.has(object, id(object)), true);
      });
    });
    it('throws a TypeError if a primitive value is passed', () => {
      data.invalidObjects.forEach(object => {
        assert.throws(() => {
          id.has(object, 1);
        }, TypeError);
      });
    });
    it('returns false if a non-number ID is passed', () => {
      data.validObjects.forEach(object => {
        assert.doesNotThrow(() => {
          if (typeof object !== 'number') {
            assert.strictEqual(id.has(object, object), false);
          }
        });
      });
    });
  });
  context('#clear', () => {
    it('leads to id.has() returning false for strictly equal objects', () => {
      data.validObjects.forEach(object => {
        const objectId = id(object);
        const before = id.has(object, objectId);
        id.clear();
        const after = id.has(object, objectId);
        assert.notStrictEqual(before, after);
      });
    });
    it('leads to id() returning a different ID for strictly equal objects', () => {
      data.validObjects.forEach(object => {
        const before = id(object);
        id.clear();
        const after = id(object);
        assert.notStrictEqual(before, after);
      });
    });
  });
});
