async function consumeApiWithAxios(url){
    try{
        const response = await axios.get(url);
        console.log(`la petición a la api se completo correctamente con status: ${response.status}`);
        return await response.data;
    } catch(error){
        console.error(`fallo la petición a la api con error: ${error.message}`);
        mostrarVentanaEmergente();
        };
      
}
function mostrarVentanaEmergente() {
    document.getElementById('modal').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
}

function cerrarVentanaEmergente() {
    document.getElementById('modal').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}
const respuestaPeticion = consumeApiWithAxios('http://localhost:8080/camisetas');
procesarDatosRespuesta(respuestaPeticion);

async function procesarDatosRespuesta(resp){
    const respApi = await resp;
    const datos = respApi;
    const main = document.querySelector('main');
    const contenedor = document.createElement('div');
    contenedor.setAttribute('class', 'container');
    main.appendChild(contenedor);
    for(dato of datos){
             //contenedor para la camiseta
        const camiseta = document.createElement('div');
        camiseta.setAttribute('class', 'camiseta');
        contenedor.appendChild(camiseta);

         //id
         const camisetaId = document.createElement('div');
         camisetaId.setAttribute('class', 'camiseta-id');
         const Id = document.createElement('p');
         Id.innerHTML = `<strong>Id: </strong>${dato.id}`;
         camisetaId.appendChild(Id);
         camiseta.appendChild(camisetaId);

        //imagen de la camiseta
        const camisetaImg = document.createElement('div');
        camisetaImg.setAttribute('class', 'camiseta-pic');
        const img = document.createElement('img');
        img.setAttribute('src', dato.foto);
        camisetaImg.appendChild(img);
        camiseta.appendChild(camisetaImg);

        //equipo
        const camisetaEquipo = document.createElement('div');
        camisetaEquipo.setAttribute('class', 'camiseta-equipo');
        const Equipo = document.createElement('p');
        Equipo.innerHTML = `<strong>Equipo: </strong>${dato.equipo}`;
        camisetaEquipo.appendChild(Equipo);
        camiseta.appendChild(camisetaEquipo);

        //color
        const camisetaColor = document.createElement('div');
        camisetaColor.setAttribute('class', 'camiseta-color');
        const Color = document.createElement('p');
        Color.innerHTML = `<strong>Color: </strong>${dato.color}`;
        camisetaColor.appendChild(Color);
        camiseta.appendChild(camisetaColor);
       
        //talla
        const camisetaTalla = document.createElement('div');
        camisetaTalla.setAttribute('class', 'camiseta-talla');
        const Talla = document.createElement('p');
        Talla.innerHTML = `<strong>Talla: </strong>${dato.talla}`;
        camisetaTalla.appendChild(Talla);
        camiseta.appendChild(camisetaTalla);

        //marca
        const camisetaMarca = document.createElement('div');
        camisetaMarca.setAttribute('class', 'camiseta-Marca');
        const Marca = document.createElement('p');
        Marca.innerHTML = `<strong>Marca: </strong>${dato.marca}`;
        camisetaMarca.appendChild(Marca);
        camiseta.appendChild(camisetaMarca);

        //tipo
         const camisetaTipo = document.createElement('div');
         camisetaTipo.setAttribute('class', 'camiseta-Tipo');
         const Tipo = document.createElement('p');
         Tipo.innerHTML = `<strong>Tipo: </strong>${dato.tipo}`;
         camisetaTipo.appendChild(Tipo);
         camiseta.appendChild(camisetaTipo);
       
    }
}
