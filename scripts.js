/*function plss(){
  var email = document.getElementById("email").value;
  document.getElementById("pls").style.display="block"
  document.getElementById("pls").innerHTML = (`Bem vind@ ${email}.com.br!`)
  document.getElementById("email").style.display="none"
  document.getElementById("button").style.display="none"
  event.preventDefault()
}

  function aviso(){
  var email = document.getElementById("email").value;
  alert(`O ${email} foi enviado.`);
  event.preventDefault()
}
                         Versão anterior           */

function contato() {
  alert(
    'Entre em contato!\nCaso tenha alguma dúvida ou queira saber mais sobre a Future4, mande um email para oi@future4.com.br.\nNos acompanhe nas redes sociais! @future4.br'
  );
  event.preventDefault();
}

/*FUNÇÃO QUE VALIDA O EMAIL E RETORNA A ANIMAÇÃO DE BEM VINDO*/

function help() {
  var email = document.getElementById('email').value;
  if (/(.+)@(.+){2,}\.(.+){2,}/.test(email)) {
    alert(`O email: "${email}" foi enviado.`);
    document.getElementById('pls').style = 'display: block; align-self: center';
    document.getElementById('pls').innerHTML = `Bem vind@ ${email}!`;
    document.getElementById('email').style.display = 'none';
    document.getElementById('button').style.display = 'none';
    document.getElementById('footer').style =
      'position: absolute; top: 50px; height: 103%; background-color: #CD4D00';
    document.getElementById('hbody').style =
      'opacity: 0.3; padding-bottom: 20px;';
    document.getElementById('logobemv').style = 'display: block; top:10px';
    document.getElementById('form').style = 'background-color: #CD4D00';
    document.getElementById('firstheader').style =
      'box-shadow: 0 2px 10px 0 black;';
    document.getElementById('headermobile').style =
      'box-shadow: 0 2px 10px 0 black; z-index: 1';
    document.getElementById('mobilelogo').style.display = 'none';
    document.getElementById('voltar').style.display = 'block';
    event.preventDefault();
  } else {
    alert('E-mail inválido.\nPor favor, insira um endereço de e-mail válido.');
  }
}

function onOff() {
  document.querySelector('#menumobile').classList.toggle('toggle');
}

/* Reminder: Você só conseguiu montar a função depois de entender o básico do javascript,
tenha isso em mente para os próximos desafios
O "True" e o "False ficam subtendidos por que a função pattern.test() retorna um valor booleano e aí o if-else
já lida com isso automaticamente.

procurar como isso funciona#*/
