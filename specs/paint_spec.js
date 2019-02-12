// const assert = require('assert')
// const Room = require('../paint.js')
//
// describe('Paint', function(){
//
//   let paint;
//   beforeEach(function(){
//     paint = new Paint(50)
//   })

  const assert = require('assert')
  const Paint = require('../paint.js')

  describe('Paint', function(){

    let paint;
      beforeEach(function(){
        paint = new paint(50)
      })

  it('should have an amount of paint', function(){
    const actual = paint.litres
    assert.strictEqual(actual, 50)
  })


})
