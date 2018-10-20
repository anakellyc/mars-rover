var rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: []
}

function turnLeft(rover){
  console.log("turnLeft was called!");
  switch (rover.direction) {
    case "N":
      rover.direction="W"
      break;
    case "S":
      rover.direction="E"
      break;
    case "W":
      rover.direction="S"
      break;
    case "E":
      rover.direction="N"
      break;
  }

  console.log("rover position is: ["+rover.x+","+rover.y+"], and the direction is: "+rover.direction);

}

function turnRight(rover){
  console.log("turnRight was called!");
  switch (rover.direction) {
    case "N":
      rover.direction="E"
      break;
    case "S":
      rover.direction="W"
      break;
    case "W":
      rover.direction="N"
      break;
    case "E":
      rover.direction="S"
      break;
  }

  console.log("rover position is: ["+rover.x+","+rover.y+"], and the direction is: "+rover.direction);

}

function moveForward(rover){
  console.log("moveForward was called"); 
  switch (rover.direction) {
    case "N":
      if (rover.y==0) {
        console.log("Out of limits")
      }
      else {
      rover.y --
      }
      break;
    case "S":
      if (rover.y==9) {
      console.log("Out of limits")
      }
      else {
      rover.y ++
      }
      break;
    case "W":
      if (rover.x==0) {
      console.log("Out of limits")
      }
      else {
      rover.x --
      }
      break;
    case "E":
      if (rover.x==9) {
      console.log("Out of limits")
      }
      else {
      rover.x ++
      }
      break;
  }

  console.log("rover position is: ["+rover.x+","+rover.y+"], and the direction is: "+rover.direction);
rover.travelLog.push([rover.x,rover.y]);
  }

function moveBackwards(rover){
    console.log("moveBackwards was called"); 
    switch (rover.direction) {
      case "N":
        if (rover.y==9) {
          console.log("Out of limits")
        }
        else {
        rover.y ++
        }
        break;
      case "S":
        if (rover.y==0) {
        console.log("Out of limits")
        }
        else {
        rover.y --
        }
        break;
      case "W":
        if (rover.x==9) {
        console.log("Out of limits")
        }
        else {
        rover.x ++
        }
        break;
      case "E":
        if (rover.x==0) {
        console.log("Out of limits")
        }
        else {
        rover.x --
        }
        break;
    }

  console.log("rover position is: ["+rover.x+","+rover.y+"], and the direction is: "+rover.direction);
    rover.travelLog.push([rover.x,rover.y]);
    }


function commands (actions) {
  function validString(input){
    return (!/[^lrfb]/.test(input));
  }
  if (validString(actions.toLowerCase())) {

  for (var i = 0; i<actions.length; i++) {
    switch (actions[i].toLowerCase()) {
      case "l":
      turnLeft(rover)
      break;
      case "r":
      turnRight(rover)
      break;
      case "f":
      moveForward(rover)
      break;
      case "b":
      moveBackwards(rover)
      break;
      default:
      console.log("Command invalid")
      break;
    }
}
  }
else {
  console.log("Command is invalid, please insert only R, F, L, B");
}
}

function validString(input){
  return (!/[^lrfb]/.test(input));
}
