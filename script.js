function calculate(params) {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const operation = document.getElementById("operation").value;
  let result;
  if (isNaN(num1) || isNaN(num2)) alert("Input error!");

  switch (operation) {
    case "add":
      result = num1 + num2;
      break;
    case "subtract":
      result = num1 - num2;
      break;
    case "multiply":
      result = num1 * num2;
      break;
    case "divide":
      if (num2 === 0) {
        alert("num2 can't be 0");
        return;
      }
      result = num1 / num2;
      break;
    default:
      result = "something wrong";
      break;
  }
  document.getElementById("result").textContent = "Result: " + result;
}
