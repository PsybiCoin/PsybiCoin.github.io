
//function that returns an alert
const treasure = () => {
    return alert("Here is the function!")
  }
  

//an alert that appears every time the user clicks a square (make 9 squares)
<td onclick="treasure()">?</td>


//add a parameter to the function called location and pass the location parameter to the alert.
const treasure = (location) => {
    return alert(location)
  }

//the alert will display the id of each square
<td id="0" onclick="treasure(0)">?</td>


// add a button

<button type="button" onclick="location.reload()">Restart Game</button>

