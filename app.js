//model
  //********************************************//
  //          UPDATE BOARD FUNCTIONS            //
  //********************************************//

  var addsXorO = (target) => {
    if (target.className === "column" && target.children.length === 0) {
      target.insertAdjacentHTML('afterbegin', turn());
    }
  }

  var resetBoard = (target) => {
    //iterate through board and remove all <p> elements
    console.log(document.body.children);
    var body = document.body.children;

    for (var i = 0; i < 3; i++) {
      var row = body[i];

      for (var q = 0; q < row.children.length; q++) {
        var column = row.children[q];

        if (column.children.length > 0) {
          column.removeChild(column.children[0]);
        }
      }
    }
    //resets turn variable to a new instance of updatesPlayerTurn()
    turn = updatesPlayerTurn();
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