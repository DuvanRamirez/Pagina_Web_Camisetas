const btn = document.querySelector('#btn');
const formulario = document.querySelector('#formulario');
const respuesta = document.querySelector('#respuesta');

const getData = () => {
  const datos = new FormData(formulario);
  const datosProcesados = Object.fromEntries(datos.entries());
  formulario.reset();
  return datosProcesados
}

async function consumeApiWithAxios(url){
    try{
        const response = await axios.get(url);
        console.log(`la petición a la api se completo correctamente con status: ${response.status}`);
        return await response.data;
    } catch(error){
        console.error(`fallo la petición a la api con error: ${error.message}`);
    }    
}

const postData = async () => {
    const newCamiseta = getData();
    if((newCamiseta.id).length!=0){
            respuesta.innerHTML =`<h1>Se Elimino Correctamente</h1>`
            try{
            const response = await fetch('http://localhost:8080/camisetas/'+newCamiseta.id, {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'},
            });
            
            if(response.ok){
                const jsonResponse = await response.json();
                const {tipo, color, talla, marca, equipo, foto} = jsonResponse;
            }
            }
        catch(error){console.log(error);}
        }
    else{ respuesta.innerHTML =`<h1>El id es obligatorio</h1>`}
       
        }

btn.addEventListener('click', (event) => {event.preventDefault();postData();});