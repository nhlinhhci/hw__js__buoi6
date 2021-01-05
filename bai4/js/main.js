function printResult(event) {
  event.preventDefault();
  for (var i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
      var createDIV = document.createElement("div");
      var newDIV = document
        .getElementById("card__footer")
        .appendChild(createDIV);
      newDIV.style.background = "red";
      newDIV.style.height = "20px";
      newDIV.style.width = "100%";
    } else {
      var createDIV = document.createElement("div");
      var newDIV = document
        .getElementById("card__footer")
        .appendChild(createDIV);
      newDIV.style.background = "blue";
      newDIV.style.height = "20px";
      newDIV.style.width = "100%";
    }
  }
}
