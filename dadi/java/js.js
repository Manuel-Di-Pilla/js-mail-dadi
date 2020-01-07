var giocatore1;
var computer;
var gioca = document.getElementById('gioca');
gioca.addEventListener('click',
  function () {
    giocatore1 = Math.floor(Math.random() * 6 + 1);
    computer = Math.floor(Math.random() * 6 + 1);

    document.getElementById('risultato1').innerHTML = giocatore1;
    document.getElementById('risultato2').innerHTML = computer;

    if (giocatore1 > computer) {
      document.getElementById('vincitore').innerHTML = 'Vince il giocatore 1';
    }
    else if (giocatore1 < computer) {
      document.getElementById('vincitore').innerHTML = 'Vince il computer';
    }
    else {
      document.getElementById('vincitore').innerHTML = 'Pareggio';
    }
  }
)
