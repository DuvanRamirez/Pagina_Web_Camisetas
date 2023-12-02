const btn = document.querySelector('#btn');
const formulario = document.querySelector('#formulario');
const respuesta = document.querySelector('#respuesta');

const getData = () => {
  const datos = new FormData(formulario);
  const datosProcesados = Object.fromEntries(datos.entries());
  formulario.reset();
  return datosProcesados
}
const postData = async () => {
  const newCamiseta = getData();
  console.log(newCamiseta);
  console.log((newCamiseta.tipo).length);
  if(((newCamiseta.tipo).length!=0) && ((newCamiseta.color).length!=0)&&((newCamiseta.talla).length!=0)&&((newCamiseta.marca).length!=0)&&((newCamiseta.equipo).length!=0)&&((newCamiseta.foto).length!=0)){
    respuesta.innerHTML = 
          `<h1>Se Guardo Correctamente</h1>`
          
    try{
      const response = await fetch('http://localhost:8080/camisetas', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(newCamiseta)
      });
      
      if(response.ok){
          const jsonResponse = await response.json();
          const {tipo, color, talla, marca, equipo, foto} = jsonResponse;
         
      }
      
     }
    catch(error){console.log(error);}
    }
    else{respuesta.innerHTML = `<h1>Llene todos los campos</h1>`}
}

btn.addEventListener('click', (event) => {event.preventDefault();postData();});