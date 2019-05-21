//model
  //functions to manipulate data


//view
  //renders the model to the index
  var togglesBoxRed = (target) => {
    if (target.style.backgroundColor === "red") {
      target.style.backgroundColor = "";
    } else {
      target.style.backgroundColor = "red";
    }
  }



//controller
  //listener for clicks
  window.onload = function () {
  document.addEventListener('click', (e) => {
    if (e.target.className === "column") {
      console.log(e);
      togglesBoxRed(e.target)
    }
  });
}


//PLAN
//1) create tic tac toe diagram on html
//2) add an event clicker that adds an X or an O to the clicked div
  // Xs and Os should alternate, starting with X
  // highlight players to show active player
//3) create functions that detects wins or ties and displays a message
//4) add a button to reset game for new round