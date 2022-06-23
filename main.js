
const fiboText = document.getElementById("fibo_text");
const fiboInput = document.getElementById("fibo_Input");
const fiboBtn = document.getElementById("btn_fibo");
const url = `http://localhost:5050/fibonacci/${fiboInput.value}`
let x, y;


const checkInput = () => fiboBtn.addEventListener("click", getValueFibo);  

const getValueFibo = url => {
  url = `http://localhost:5050/fibonacci/${fiboInput.value}`
  fibonacci(url);
  return url;
}

function fibonacci(url) {
  try {
  fetch(url).then((response) => {
   response.json().then((data) => {
     return fiboText.innerHTML = data.result 
    })   
  })
} 
catch(err) {
  console.error(err)
};
    
} 


fiboInput.addEventListener('keydown', checkInput);
