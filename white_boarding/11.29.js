function directionReduction(directions) {
  var length = directions.length
  var count = 0 
  var i1 = 0 
  var i2 = i1 + 1 
  var i3 = i2 + 1 
  var directionsCopy = directions
  
  while(i2 < length){
      if(directionsCopy[i2] == "NORTH"  && i1 == "SOUTH" || i3 == "SOUTH"){
          directionsCopy.splice(i2)
      }
      if(directionsCopy[i2] == "SOUTH"  && i1 == "NORTH" || i3 == "NORTH"){
          directionsCopy.splice(i2)
      }
      if(directionsCopy[i2] == "WEST"  && i1 == "EAST" || i3 == "EAST"){
          directionsCopy.splice(i2)
      }
      if(directionsCopy[i2] == "EAST"  && i1 == "WEST" || i3 == "WEST"){
          directionsCopy.splice(i2)
      }
  }
}
