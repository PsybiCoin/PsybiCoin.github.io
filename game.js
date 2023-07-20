//create a random number for the wr and the db
var wrLocation = Math.floor(Math.random() * 8)
var dbLocation = Math.floor(Math.random() * 8)


//make sure the db and the wr aren't the same number
if(wrLocation === dbLocation){
  dbLocation = Math.floor(Math.random() * 8)
}

console.log("wrLocation", wrLocation)



//set the initial counter value
var counter = 10

const wr = (location) => {


 if (counter <= 0) {
        //if the counter is less than 0, the game is over
        alert("Game over!")
        //create a pop-up window
        location.href = "game-over"
      }


//changing the counter after each click
  counter = counter - 1 
  document.getElementById("counter").innerHTML = `Turns remaining: ${counter}`


  if(wrLocation === location){
    document.getElementById(location).innerHTML = "🏆"
    // Create a pop-up window
    alert("Congratulations Champ")
        //stop the game from running
        location.href = "Congratulations Champ"
    

  }
  else if(dbLocation === location){
    document.getElementById(location).innerHTML = "✋"
    // Create a pop-up window
    alert("Your Pass Was INTERCEPTED!")
        //stop the game from running
        location.href = "Your Pass Was INTERCEPTED!"
    
    
    
  }
  else if(counter === 0){
    // Create a pop-up window
    alert("Just Give Up")
        //stop the game from running
        location.href = "Just Give Up"
    
    
    
  }
  else if(wrLocation !== location && dbLocation !== location){
    document.getElementById(location).innerHTML = "🏈"
  }
  document.getElementById(location).disabled = true
}