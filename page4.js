document.querySelector("#btn-jsonparse").addEventListener("click", JSONParse);
//document.querySelector("#mensagem").addEventListener("keyup", Validar);
function JSONParse() {
  const result = document.querySelector("#mensagem")
  const txt=document.querySelector("#txt-area").value;
  try{
    const obj=JSON.parse(txt);
    result.textContent = 'Parsable JSON string!';
    result.style.color = '#000';
    console.log(obj);
  } catch (e) {
    result.textContent = e.message;
    result.style.color = '#f00';
  } 
}

