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

  var detectHorizontalMatch = () => {

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
      //adds an 'x' or and 'o'
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