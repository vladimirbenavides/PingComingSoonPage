let inputEmail =  document.getElementById('email');
let button = document.getElementById('button');


button.addEventListener('click',(event)=>{
   event.preventDefault();/*solve problem form*/
 validateEmail(inputEmail.value);

});

function validateEmail(email){/*validation*/
    let expReg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g; /*expresion to validation  .. regexr.com*/

    if (expReg.test(email) == true) {
      inputEmail.style.border= '1px solid hsl(223,87%,63%)';
      error.style.visibility='hidden'/*error visibility*/
      inputEmail.value= ''; /* to clear email*/
    } else {
      inputEmail.style.border= '1px solid red';
      error.style.visibility='visible'
    }


   /* console.log( expReg.test(email)); true or false */
}