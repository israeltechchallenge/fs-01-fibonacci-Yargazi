const loader = document.getElementById('fibo_spinner');
const fiboInput = document.getElementById("fibo_Input");
const fiboText = document.getElementById("fibo_text");
const fiboBtn = document.getElementById("btn_fibo");
const errBlock = document.getElementById('error-block-id');
const errServer = document.getElementById('ifErrorInServ');
let x, y, url;

loader.hidden = true;
fiboInput.classList.remove('inputBorderColore');

const checkInput = () => fiboBtn.addEventListener("click", getLinkFibo);  
const fibonacci = url => (fiboInput.value > 50) ? fibo_value_fifty(url) : fibo_fetch(url);

const getLinkFibo = (url) => {
 
   url = `http://localhost:5050/fibonacci/${fiboInput.value}`
   fibonacci(url);
   return url;
 
}
   


const fibo_value_fifty = url => {

  loader.hidden = false;
    loader.hidden = true;
    fiboInput.classList.add('inputBorderColore'); 
    errServer.hidden = true;
    errBlock.innerHTML = 'Can’t be larger than 50';
    errBlock.classList.remove('visually-hidden');
    return fiboText.innerHTML = (' ');

}
      
const fibo_fetch = (url) => {

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
          return fiboText.innerHTML = data.result; 
        }) 
        .catch((err) => meaningOfLife(err));
  };    
      
      
    
    


function meaningOfLife(err) {

  loader.hidden = false;
  loader.hidden = true;
  errBlock.classList.add('visually-hidden');
  errServer.hidden = false;
  errServer.innerText = `Server error: ${err.message}`; 
 return fiboText.innerText = (' ') 

};


fiboInput.addEventListener('keydown', checkInput);
