var mail = ['manuel@gmail.com','luca@gmail.com','mirco@gmail.com','gino@gmail.com','carlo@gmail.com','tizio@gmail.com'];

var mailUtente = prompt('inserisci la tua mail');
var verificaMail = false;
for (var i = 0; i < mail.length; i++) {
  var email = mail[i]
  if (mailUtente == email) {
     verificaMail = true;
  }
}
if (verificaMail == true) {
  alert("benvenuto");
}
else {
  alert("hai inserito un email non valida");
}
