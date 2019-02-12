const Room = function(area, painted){
  this.area = area
  this.painted = false
}

  Room.prototype.checkPainted = function(){
  //     if (this.painted.length < 1){
  //     return true
  //   } else {
  //     return false
  //   }
  // };
    if (this.painted === false){
      return false
      } else {
        return true
      }
    }


  Room.prototype.paintRoom = function(){
      this.painted = true
    };



module.exports = Room
