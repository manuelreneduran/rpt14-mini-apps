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
