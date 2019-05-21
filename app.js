//model
  //functions to manipulate data
  var addsXorO = (target) => {
    if (target.className === "column" && target.children.length === 0) {
      target.insertAdjacentHTML('afterbegin', x);
    }
    //check if target has an x or o already
      //if so, do nothing
      //if not, check to see if it's x's turn or o's turn
        //add the right one to the element
        //update player turn

  }

  var updatesPlayerTurn = () => {
    var turn = 'x';

    return function() {
      if (turn === 'x') {
        turn = 'o';
        return turn;
      } else {
        turn = 'x';
        return turn;
      }
    }
  }


//view
  //renders the model to the index
  var x = '<p class="x-p">X</p>'




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