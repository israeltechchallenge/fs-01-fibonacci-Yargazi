const loader = document.getElementById('fibo_spinner');
const fiboInput = document.getElementById("fibo_Input");
const fiboText = document.getElementById("fibo_text");
const fiboBtn = document.getElementById("btn_fibo");
const errBlock = document.getElementById('error-block-id');
const errServer = document.getElementById('ifErrorInServ');
const resultList = document.getElementById('resultList') 
const resLoader = document.getElementById('resultsLoader')
let li = document. createElement("li");
let x, y, url;

loader.hidden = true;
resLoader.hidden = true;

fiboInput.classList.remove('inputBorderColore');

const checkInput = () => fiboBtn.addEventListener("click", getLinkFibo);  

// if statement of Fibonacci

const fibonacci = url => {
  (fiboInput.value > 50) ? fiboValueFifty(url) : fiboFetch(url);
  
}

// url fibonacci and cb
const getLinkFibo = url => {
 
   url = `http://localhost:5050/fibonacci/${fiboInput.value}`
   fibonacci(url);
  return url;
 
}

// function if value > 50

const fiboValueFifty = url => {

  loader.hidden = false;
    loader.hidden = true;
    fiboInput.classList.add('inputBorderColore'); 
    errServer.hidden = true;
    errBlock.innerHTML = 'Can’t be larger than 50';
    errBlock.classList.remove('visually-hidden');
    return fiboText.innerHTML = (' ');

}

// function Fibonacci from server 

const fiboFetch = url => {

  loader.hidden = false;
  fiboInput.classList.remove('inputBorderColore')

  fetch(url)
    .then((response) => {
      if (response.ok) 
      return response.json()
      else {
        return response.text()
        .then((text) => {
          throw new Error(text);
        });
        }
      })
    .then((data) => {
        errBlock.classList.add('visually-hidden');
        errServer.hidden = true;
        loader.hidden = false;
        loader.hidden = true;
        getFiboList()  
        return fiboText.innerHTML = data.result; 
          
        }) 
        .catch((err) => meaningOfLife(err));
  };    

  // Error Fucntion

function meaningOfLife(err) {

  loader.hidden = false;
  loader.hidden = true;
  errBlock.classList.add('visually-hidden');
  errServer.hidden = false;
  errServer.innerText = `Server error: ${err.message}`; 
 return fiboText.innerText = (' ') 

};

// url of Fibonacci results and cb

const getFiboList = url => {
url = 'http://localhost:5050/getFibonacciResults ';
fetchDataFromServer(url);
resLoader.hidden = false;
return url;
};


// Milestone 6

const fetchDataFromServer = url => {
  
  fetch(url)
  .then((response) => response.json())
  .then((data) => {
    
    data.results.forEach((elements) => {
      const liResult = `<li class="fs-5-text border-bottom  border-secondary mt-4">The Fibonnaci Of <b>${elements.number}</b> is <b>${elements.result}</b>. Calculated at: ${(new Date(elements.createdDate)).toString()} <br> </li>`
      resultList.insertAdjacentHTML('beforebegin', liResult);
      
      // I tried to display only 3 elements, but something is wrong.
      if (data.results.length >= 3) {
        let array = data.results.splice(0, 2);
        return array;
      }
      resultList.insertAdjacentHTML('beforebegin', array);
    })   
    resLoader.hidden = true;
    
  })
  
}
// cb function getFiboList on loading.
window.addEventListener('load', getFiboList)

// Input listener
fiboInput.addEventListener('keydown', checkInput);
