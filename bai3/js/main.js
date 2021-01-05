function factorialCal(n) {
  var factorial = 1;

  for (let i = 1; i <= n; i++) {
    factorial *= i;
  }
  return factorial;
}

function printResult(event) {
  event.preventDefault();

  var numberN = parseInt(document.getElementById("number__n").value);

  if (numberN <= 0) {
    alert("Hãy nhập số N hợp lệ (N > 0)");
  } else {
    document.getElementById("print__result").innerHTML =
      "Giai thừa " + numberN + "! = " + factorialCal(numberN);
  }
}
