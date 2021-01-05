function printResult(event) {
  event.preventDefault();

  numberX = parseFloat(document.getElementById("number__x").value);
  numberN = parseInt(document.getElementById("number__n").value);

  if (numberN <= 0) {
    alert("Hãy nhập giá trị n phù hợp (n > 0)");
  } else {
    document.getElementById("print__result").innerHTML =
      "Với X = " +
      numberX +
      " và N = " +
      numberN +
      " thì" +
      "<br />" +
      "S(N) = " +
      resultCal(numberX, numberN);
  }
}

function resultCal(x, n) {
  var total = 0;

  for (var count = 1; count <= n; count++) {
    total += Math.pow(x, count);
  }
  return total;
}
