const assert = require('assert')
const Room = require('../room.js')

describe('Room', function(){

  let room;
    beforeEach(function(){
      room = new Room(50)
    })

    it('should have an area in square metres', function(){
      const actual = room.area
      assert.strictEqual(actual, 50)
    })

    it('should check if room is not painted', function(){
      const actual = room.checkPainted()
      assert.strictEqual(actual, false)
    })

    it('should check if room is painted', function(){
      room.paintRoom()
      const actual = room.checkPainted()
      assert.strictEqual(actual, true)
    })



})
