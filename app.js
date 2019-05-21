//model
  //functions to manipulate data


//view
  //renders the model to the index



//controller
  //listener for clicks
  window.onload = function () {
  var theParent = document.querySelector("body");
  theParent.addEventListener('click', (e) => {
    if (e.target.className === "column") {
      console.log(e);
    }
  });
}
