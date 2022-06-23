document.getElementById('fibo_spinner').hidden = true;
document.getElementById("fibo_Input").classList.remove('inputBorderColore');
const fiboText = document.getElementById("fibo_text");
const fiboInput = document.getElementById("fibo_Input");
const fiboBtn = document.getElementById("btn_fibo");
const loader = document.getElementById('fibo_spinner');
const errBlock = document.getElementById('error-block-id')

let x, y, url;


const checkInput = () => fiboBtn.addEventListener("click", getValueFibo);  

const getValueFibo = (url) => {
  url = `http://localhost:5050/fibonacci/${fiboInput.value}`;
  fibonacci(url);
  return url;
}

function fibonacci(url) {
  if (fiboInput.value > 50) {
    loader.hidden = false;
    loader.hidden = true;
    document.getElementById("fibo_Input").classList.add('inputBorderColore');
    document.getElementById('ifErrorInServ').hidden = true;
    errBlock.innerHTML = 'Can’t be larger than 50';
    errBlock.classList.remove('visually-hidden');
    return document.getElementById("fibo_text").innerHTML = (' ');
  } else {
    loader.hidden = false;
    document.getElementById("fibo_Input").classList.remove('inputBorderColore');
    try {
    fetch(url).then((response) => {
     response.json().then((data) => {
      errBlock.classList.add('visually-hidden')
      document.getElementById('ifErrorInServ').hidden = true;
      loader.hidden = false;
      loader.hidden = true;
      return document.getElementById("fibo_text").innerHTML = data.result; 
      })   
    })
  } 
  catch (err) {
    meaningOfLife();
  } 
}
      
}

function meaningOfLife() {
  loader.hidden = false;
  loader.hidden = true;
  document.getElementById('ifErrorInServ').hidden = false;
  document.getElementById('ifErrorInServ').innerTEXT = 'Server Error: 42 is the meaning of life' 
 return document.getElementById("fibo_text").innerText = (' ') };


fiboInput.addEventListener('keydown', checkInput);
