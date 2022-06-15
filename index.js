document.getElementById('btn-save').addEventListener('click', Save);
const msg = document.querySelector('#msg');
let user = {};

function Save() {
  const peso = parseFloat(document.querySelector('#peso').value.replace(",", ".")).toFixed(3);
  const altura = parseInt(document.querySelector('#altura').value.replace(",", "."),10);
  const dia = parseInt(document.querySelector("#dia").value,10);
  const mes = parseInt(document.querySelector("#mes").value,10);
  const ano = parseInt(document.querySelector("#ano").value,10);
  const name = document.querySelector("#name").value;
  const genero = document.querySelector("#sel-gender").value;
  msg.textContent = '';
  
  if (name==""){
    msg.textContent = 'Por favor, informe o seu nome.';  
    return false;
  }
    if (isNaN(peso)) {
    msg.textContent = 'Valor inválido para o seu peso.';
    return false;
  }
  if (peso<=0){
    msg.textContent = 'Valor inválido para o seu peso.';
    return false;
  }
  if (isNaN(altura)) {
    msg.textContent = 'Valor inválido para a sua altura.';
    return false;
  }
  if (altura<=0){
    msg.textContent = 'Valor inválido para a sua altura.';
    return false;
  }  
  if (isNaN(dia)){
    msg.textContent = 'Por favor, informe o dia do seu nascimento.';  
    return false;
  }
  if (isNaN(mes)){
    msg.textContent = 'Por favor, informe o mês do seu nascimento.';  
    return false;
  }
  if (isNaN(ano)){
    msg.textContent = 'Por favor, informe o ano do seu nascimento.';  
    return false;
  }
  if (dia<=0){
    msg.textContent = 'Por favor, informe o dia do seu nascimento.';  
    return false;
  }
  if (mes<=0){
    msg.textContent = 'Por favor, informe o mês do seu nascimento.';  
    return false;
  }
  if (ano<=0){
    msg.textContent = 'Por favor, informe o ano do seu nascimento.';  
    return false;
  }
  
  if (genero==""){
    msg.textContent = 'Por favor, informe o seu gênero.';  
    return false;
  }
  if (mes==1 || mes==3 || mes==5 || mes==7 || mes==8 || mes==10 || mes==12){
    if (dia > 31){
      msg.textContent = 'Data inválida.';  
      return false;  
    }  
  } else if (mes==4 || mes==6 || mes==9 || mes==11){
    if (dia > 30){
      msg.textContent = 'Data inválida.';  
      return false;  
    }  
  } else {
    if (dia>29){
      msg.textContent = 'Data inválida.';  
      return false;  
    } else if (dia==29 && mes%4>0){
      msg.textContent = 'Data inválida.';  
      return false;  
    }
  }

  // verificando data válida
  const now = new Date;
  const dtHoje = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const dtNasc = new Date(ano, mes-1, dia);  
  if (dtHoje.getTime()<dtNasc.getTime()){
    msg.textContent = 'Data de Nascimento maior que a data de Hoje.';  
    return false;
  }

  user = {
    name: name,
    birthDate: dtNasc.toLocaleDateString(),
    weight: peso,
    height: altura,
    gender: genero
  }
  console.log(user);
}  