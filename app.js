//model
  //********************************************//
  //          UPDATE BOARD FUNCTIONS            //
  //********************************************//

  var addsXorO = (target) => {
    if (target.className === "column" && target.children.length === 0) {
      target.insertAdjacentHTML('afterbegin', turn());
    }
  }

  var updatesPlayerTurn = () => {
    var turn = 'o';
    return function() {
      if (turn === 'x') {
        turn = 'o';
        return '<p class="o">O</p>';
      } else {
        turn = 'x';
        return '<p class="x">X</p>';
      }
    }
  }

  var turn = updatesPlayerTurn();

  //********************************************//
  //          DETECT MATCHES FUNCTIONS          //
  //********************************************//

  var detectHorizontalMatch = (target) => {
    //check if all divs in the row have p elements with the same classname
      //iterate through target row
        var parentRow = target.parentElement.children;
        var xCounter = 0;
        var oCounter = 0;
        for (var i = 0; i < parentRow.length; i++) {
          if (parentRow[i].innerText === 'O') {
            oCounter++;
          } else if (parentRow[i].innerText === 'X') {
            xCounter++;
          }
        }
        if (xCounter === 3) {
          console.log("X MATCH");
        } else if (oCounter === 3) {
          console.log("O MATCH");
        }
      //check each element for a p child and keep track of how many of the same classes it sees
        //if 3 of the same class, it's a match
  }

  var detectVerticalMatch = () => {

  }

  var detectDiagonalMatch = () => {

  }

  var detectAnyMatch = () => {

  }


//view
  //renders the model to the index




//controller
  //listener for clicks
  window.onload = function () {
  document.addEventListener('click', (e) => {
    if (e.target.className === "column") {
      console.log(e);
      addsXorO(e.target);
      //detects matches
      detectHorizontalMatch(e.target);
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