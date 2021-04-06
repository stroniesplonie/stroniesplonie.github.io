function fetchpost(){
    let data = new URLSearchParams();
    data.append("message", document.getElementById("msg").value);
   
    
    fetch("dummy.php", {
      method: 'post',
      body: data
    })
    .then(function (response) {
      return response.text();
    })
    .then(function (text) {
      console.log(text);
    })
    .catch(function (error) {
      console.log(error)
    });


    setTimeout(function (){
      fetch('messages.txt')
      .then(response => response.text()) 
      .then(textString => {
        document.getElementById("demo").innerText = textString;
      });
    }, 50);

    return false;

  }


function ladowanie(){
  setTimeout(function (){
    fetch('messages.txt')
    .then(response => response.text()) 
    .then(textString => {
      document.getElementById("demo").innerText = textString;
    });
  }, 50);
}

function chwila(){
  setInterval(ladowanie, 500);
}


window.onload = ladowanie();
window.onload = chwila();