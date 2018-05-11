const assert = require('assert');
const ID = require('../id.js').ID;

describe('ID', () => {
  describe('new', () => {
    it('Should create a valid ID', () => {
      let id = new ID('059e5ce8d0d3ee0225ffe982e38f3f5f6f748328')
      assert.equal(id.id, '059e5ce8d0d3ee0225ffe982e38f3f5f6f748328')
    })

    it('Should raise an error with an ID > 20 bytes', () => {
      assert.throws(() => {
        let id = new ID('059e5ce8d0d3ee0225ffe982e38f3f5f6f748328777777777777');
      }, "ID MUST BE 160 BIT STRING")
    })

    it('Should raise an error with an ID < 20 bytes', () => {
      assert.throws(() => {
        let id = new ID('abcdefg')
      }, "ID MUST BE 160 BIT STRING")
    })
  })
})