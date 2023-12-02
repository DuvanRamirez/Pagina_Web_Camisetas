const btn = document.querySelector('#btn');
const formulario = document.querySelector('#formulario');
const respuesta = document.querySelector('#respuesta');

respuesta.innerHTML = `<h1>Llene los campos a modificar</h1>`

const getData = () => {
  const datos = new FormData(formulario);
  const datosProcesados = Object.fromEntries(datos.entries());
  formulario.reset();
  return datosProcesados
}

const postData = async () => {
  const newCamiseta = getData();
  console.log(newCamiseta);
  if((newCamiseta.id).length!=0){
    if(((newCamiseta.tipo).length!=0) || ((newCamiseta.color).length!=0)||((newCamiseta.talla).length!=0)||((newCamiseta.marca).length!=0)||((newCamiseta.equipo).length!=0)||((newCamiseta.foto).length!=0)){
        if(((newCamiseta.tipo).length==0) ){
            delete newCamiseta.tipo;
        }
        if(((newCamiseta.color).length==0) ){
            delete newCamiseta.color;
        }
        if(((newCamiseta.talla).length==0) ){
            delete newCamiseta.talla;
        }
        if(((newCamiseta.marca).length==0) ){
            delete newCamiseta.marca;
        }
        if(((newCamiseta.equipo).length==0) ){
            delete newCamiseta.equipo;
        }
        if(((newCamiseta.foto).length==0) ){
            delete newCamiseta.foto;
        }
        console.log(newCamiseta);
        respuesta.innerHTML = 
              `<h1>Se Guardo Correctamente</h1>`
              
        try{
          const response = await fetch('http://localhost:8080/camisetas/'+newCamiseta.id, {
          method: 'PATCH',
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
        else{respuesta.innerHTML = `<h1>Llene al menos un campo</h1>`}
  }
  else{respuesta.innerHTML = `<h1>El id es obligatorio</h1>`}
}

btn.addEventListener('click', (event) => {event.preventDefault();postData();});