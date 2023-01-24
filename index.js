const uuid = require('uuid');
const BaseX = require('base-x');

const CODEX = '0123456789abcdefghijklmnopqrstuvwxyz';
// const CODEX = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const basex = BaseX(CODEX);

const nanoUUID = {
  /**
   * encode binary to base36
   * @param {Uint8Array} buffer 
   * @returns {String} base36
   */
  encode(buffer) {
    return basex.encode(buffer);
  },
  /**
   * decode base36 to Unit8Array
   * @param {String} str base36
   * @returns {Uint8Array} buffer
   */
  decode(str) {
    return basex.decode(str);
  },
  v1(options, buffer, offset) {
    if (!buffer) {
      buffer = new Uint8Array(16);
    }
    uuid.v1(options, buffer, offset);
    return basex.encode(buffer);
  },
  v3(name, namespace, buffer, offset) {
    if (!buffer) {
      buffer = new Uint8Array(16);
    }
    uuid.v3(name, namespace, buffer, offset);
    return basex.encode(buffer);
  },
  v4(options, buffer, offset) {
    if (!buffer) {
      buffer = new Uint8Array(16);
    }
    uuid.v4(options, buffer, offset);
    return basex.encode(buffer);
  },
  v5(name, namespace, buffer, offset) {
    if (!buffer) {
      buffer = new Uint8Array(16);
    }
    uuid.v5(name, namespace, buffer, offset);
    return basex.encode(buffer);
  },
};

module.exports = nanoUUID;