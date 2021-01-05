function resultCal() {
  var total = 0;

  for (var count = 0; total <= 10000; count++) {
    total += count;
  }
  return count - 1;
}

function printResult(event) {
  event.preventDefault();

  var count = resultCal();

  document.getElementById("result__print").innerHTML =
    "Số nguyên dương N nhỏ nhất thỏa mãn phương trình trên là: " + count;
}
