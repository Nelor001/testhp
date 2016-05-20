'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('profiles service', function() {
  it('registered the profiles service', () => {
    assert.ok(app.service('profiles'));
  });
});
