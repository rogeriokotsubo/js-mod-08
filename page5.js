document.querySelector("#btn-console").addEventListener("click", Show);
//document.querySelector("#mensagem").addEventListener("keyup", Validar);
function Show() {
  let obj = {};
  obj = {"Um atributo com espaços": 1};

  console.log(obj["Um atributo com espaços"]);
  console.log(obj);
  console.log(Object.values(obj)[0]);

  // Alterando o valor para 2  
  Object.defineProperties(obj, 
    {'Um atributo com espaços': {
      value: 2,
      writable: true}
  });

  console.log(obj["Um atributo com espaços"]);
  console.log(obj);
  console.log(Object.values(obj)[0]);
}
  

