const loader = document.getElementById('fiboSpinner');
const fiboInput = document.getElementById("fiboInput");
const fiboText = document.getElementById("fiboText");
const fiboBtn = document.getElementById("btnFibo");
const errBlock = document.getElementById('errorBlockId');
const errServer = document.getElementById('ifErrorInServ');
const resultList = document.getElementById('resultList') 
const resLoader = document.getElementById('resultsLoader')
let url;

loader.hidden = true;
resLoader.hidden = true;

fiboInput.classList.remove('inputBorderColore');

const checkInput = () => fiboBtn.addEventListener('click', (e)=> {
  e.preventDefault();
  getLinkFibo(); 
})

checkInput();
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
        cleanList();
        getFiboList();   
        return fiboText.innerHTML = data.result; 
          
        }) 
        .catch((err) => errorHanding(err));
  };    

  // Error Fucntion

function errorHanding(err) {

  loader.hidden = false;
  loader.hidden = true;
  errBlock.classList.add('visually-hidden');
  errServer.hidden = false;
  errServer.innerText = `Server error: ${err.message}`; 
 return fiboText.innerText = (' ') 

};

// url of Fibonacci results and cb

const getFiboList = url => {
url = 'http://localhost:5050/getFibonacciResults';
fetchDataFromServer(url);
resLoader.hidden = false;
return url;
};


// Milestone 6

const fetchDataFromServer = url => {
  
  fetch(url)
  .then((response) => response.json())
  .then((data) => {

    cleanList();
    listOfResults(data)
    return data;
      // I tried to display only 3 elements, but something is wrong.
      // if (data.results.length >= 3) {
      //   let array = data.results.splice(0, 2);
      //   return array;
      // }
      // resultList.insertAdjacentHTML('beforebegin', array);
    })   
  }
  
  const listOfResults = data => {
    data.results.forEach((elements) => {
      const spanResult = `<span class="fs-5-text border-bottom  border-secondary mt-4">The Fibonnaci Of <b>${elements.number}</b> is <b>${elements.result}</b>. Calculated at: ${(new Date(elements.createdDate)).toString()} <br> </span>`
      resultList.insertAdjacentHTML('beforebegin', spanResult);
    })
    resLoader.hidden = true;
  }
// clear list of results
const cleanList = () => resultList.innerHTML = " ";  


// cb function getFiboList on loading.
window.addEventListener('load', getFiboList)


