const fiboText = document.getElementById("fibo_text");
const fiboInput = document.getElementById("fibo_Input");
const fiboBtn = document.getElementById("btn_fibo");
let x, y;


const checkInput = () => fiboBtn.addEventListener("click", getValueFibo);  
fiboInput.addEventListener('keydown', checkInput)

const getValueFibo = x => {
  x = fiboInput.value;
  fibonacci(x);
  return x;
}

function fibonacci(x) {
  let fibo = [0, 1];
  if (x === 1) {
    y = 1;
    fiboText.innerHTML = y;
    return y;
  } else if (x === 0) {
    y = 0;
    fiboText.innerHTML = y;
    return y;
  }
  for (let i = 2; i <= x; i++) {
    fibo.push(fibo[i - 2] + fibo[i - 1]);
  }
  y = fibo.slice(-1)[0];

  fiboText.innerHTML = y;
  return y;
}
