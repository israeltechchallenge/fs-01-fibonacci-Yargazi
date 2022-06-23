const fiboText = document.getElementById("fibo_text");
const fiboInput = document
  .getElementById("fibo_Input")
  .addEventListener("input", fibonacci);
console.log(fiboInput);

let x, y;
let fibo = [0, 1];
function fibonacci(x) {
  if (x === 1) {
    y = [1];
    fiboText.innerHTML = `The Fibonacci of ${x} is ${y}`;
    return y;
  } else if (x === 0) {
    y = [0];
    fiboText.innerHTML = `The Fibonacci of ${x} is ${y}`;
    return y;
  }
  for (let i = 2; i <= x; i++) {
    fibo.push(fibo[i - 2] + fibo[i - 1]);
  }
  y = fibo.slice(-1);

  fiboText.innerHTML = `The Fibonacci of ${x} is ${y}`;
  return y;
}

// fibonacci(x);
