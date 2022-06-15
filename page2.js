document.getElementById('btn-save').addEventListener('click', Save);
const msg = document.querySelector('#msg');
let user = {};
let dtNasc ;

function CheckName(name){;
  if (name=="" || name.length<5){
    throw new Error('Field “name” is invalid!');
  }
} 

function CheckDate(dia,mes,ano){;
  if (isNaN(dia)){
    throw new Error('Field “birthDate” is invalid!');
  }
  if (dia<=0){
    throw new Error('Field “birthDate” is invalid!');
  }
  if (isNaN(mes)){
    throw new Error('Field “birthDate” is invalid!');
  }
  if (mes<=0){
    throw new Error('Field “birthDate” is invalid!');
  }
  if (isNaN(ano)){
    throw new Error('Field “birthDate” is invalid!');
  }
  if (ano<=0){
    throw new Error('Field “birthDate” is invalid!');
  }
  if (mes==1 || mes==3 || mes==5 || mes==7 || mes==8 || mes==10 || mes==12){
    if (dia > 31){
      throw new Error('Field “birthDate” is invalid!');
    }  
  } else if (mes==4 || mes==6 || mes==9 || mes==11){
    if (dia > 30){
      throw new Error('Field “birthDate” is invalid!');
    }  
  } else if (mes==2) {
    if (dia>29){
      throw new Error('Field “birthDate” is invalid!');
    } else if (dia==29 && mes%4>0){
      throw new Error('Field “birthDate” is invalid!');
    }
  } else {
    throw new Error('Field “birthDate” is invalid!');
  }
   // verificando data válida
  const now = new Date;
  const dtHoje = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  dtNasc = new Date(ano, mes-1, dia);  
  if (dtHoje.getTime()<dtNasc.getTime()){
    throw new Error('Field “birthDate” is invalid!');
  }
} 

function CheckWeight(peso){;
  if (isNaN(peso)) {
    throw new Error('Field “weight” is invalid!');
  }
  if (peso<=0){
    throw new Error('Field “weight” is invalid!');
  }
} 

function CheckHeight(altura){;
  if (isNaN(altura)) {
    throw new Error('Field “height” is invalid!');
  }
  if (altura<=0){
    throw new Error('Field “height” is invalid!');
  }
  const numero = parseInt(altura,10);
  if (altura-numero!==0){
    throw new Error('Field “height” is invalid!');
  }
}

function CheckGender(genero){;
  if ((genero==='masculino' || genero==='feminino')==false){
    throw new Error('Field “gender” is invalid!');
  }
}

function Save() {
  const peso = parseFloat(document.querySelector('#peso').value.replace(",", ".")).toFixed(3);
  const altura = parseFloat(document.querySelector('#altura').value.replace(",", "."));
  const dia = parseInt(document.querySelector("#dia").value,10);
  const mes = parseInt(document.querySelector("#mes").value,10);
  const ano = parseInt(document.querySelector("#ano").value,10);
  const name = document.querySelector("#name").value;
  const genero = document.querySelector("#sel-gender").value;
  msg.textContent = '';


  try{
    CheckName(name);
  } catch (errorMsg) {
    msg.textContent=errorMsg;
    return false;
  }  

  try{
    CheckDate(dia,mes,ano);
  } catch (errorMsg) {
    msg.textContent=errorMsg;
    return false;
  } 

  try{
    CheckWeight(peso);
  } catch (errorMsg) {
    msg.textContent=errorMsg;
    return false;
  } 

  try{
    CheckHeight(altura);
  } catch (errorMsg) {
    msg.textContent=errorMsg;
    return false;
  } 

  try{
    CheckGender(genero);
  } catch (errorMsg) {
    msg.textContent=errorMsg;
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
  // msg.textContent=`{name: '`+user.name+`', birthDate: '`+user.birthDate+`', weight: '`+user.weight+`', height: '`+user.height+`', gender: '`+user.gender+`'}`;
  msg.textContent=JSON.stringify(user);
}  