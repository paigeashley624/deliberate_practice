function directionReduction(directions) {
  let WEST = true 
  let EAST = true 
  let 


  
}


directionReduction(["NORTH","EAST","WEST","SOUTH","WEST","SOUTH","NORTH","WEST"])
//Should reduce to ["WEST","WEST"]
// After each reduction the loop starts back at the beginning


// ------------------

// let length = directions.length // = 8 in this case 
//   let i = 0 
//   let i2 = i1 + 1 
//   let i3 = i2 + 1 

  

//   let consolidatedDirections = []

// while(i < length){
//     if(directions[i2] == "NORTH"  && i1 == "SOUTH" || i3 == "SOUTH"){
//         consolidatedDirections.push(directions.splice(i2)) // delete the conflicting direction and the current index 
//     }
//     if(directions[i2] == "SOUTH"  && i1 == "NORTH" || i3 == "NORTH"){
//         consolidatedDirections.push(directions.splice(i2))
//     }
//     if(directions[i2] == "WEST"  && i1 == "EAST" || i3 == "EAST"){
//         consolidatedDirections.push(directions.splice(i2))
//     }
//     if(directions[i2] == "EAST"  && i1 == "WEST" || i3 == "WEST"){

//       // delete the conflicting index 

//         consolidatedDirections.push(directions.splice(i2))
//     }
// }