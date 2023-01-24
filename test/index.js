const { describe, it } = require('mocha');
const nanoUUID = require('../');
const assert = require('assert');

function arrayEquals(arr1, arr2) {
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  }
  return false;
}

describe('nano-uuid', () => {
  const len = 25;
  it('should generate v1 nano uuid', async () => {
    const buffer = new Uint8Array(16);
    const id = nanoUUID.v1(undefined, buffer);
    const decode = nanoUUID.decode(id);
    assert.ok(id.length === len);
    assert.ok(arrayEquals(buffer, decode));
  });
  it('should generate v3 nano uuid', async () => {
    const buffer = new Uint8Array(16);
    const id = nanoUUID.v3('foo', new Uint8Array(16), buffer);
    const decode = nanoUUID.decode(id);
    assert.ok(id.length === len);
    assert.ok(arrayEquals(buffer, decode));
  });
  it('should generate v4 nano uuid', async () => {
    const buffer = new Uint8Array(16);
    const id = nanoUUID.v4(undefined, buffer);
    const decode = nanoUUID.decode(id);
    console.log(id)
    assert.ok(id.length === len);
    assert.ok(arrayEquals(buffer, decode));
  });
  it('should generate v5 nano uuid', async () => {
    const buffer = new Uint8Array(16);
    const id = nanoUUID.v5('foo', new Uint8Array(16), buffer);
    const decode = nanoUUID.decode(id);
    assert.ok(id.length === len);
    assert.ok(arrayEquals(buffer, decode));
  });
});