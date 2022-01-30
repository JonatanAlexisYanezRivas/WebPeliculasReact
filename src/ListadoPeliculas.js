import { useEffect, useState } from 'react';
import './App.css';
import PageWrapper from './PageWrapper';
import Paginacion from './Paginacion';
import Pelicula from './Pelicula';
import PeliculasJson from './peliculas.json'

function ListadoPeliculas() {


/*<Pelicula titulo="obvlivion (2012)" calificacion="8.1" director="Joss Whedon" actores="Robert Downey Jr.,Chris Evans,Chris Hemsworth" fecha="1 May 2015" duracion="2h 21min" img="images/uploads/mv1.jpg">

Earth's mightiest heroes must come together and learn to fight as a team if they are to stop the mischievous Loki and his alien army from enslaving humanity...
</Pelicula>

<Pelicula titulo="into the wild" calificacion="7.8" director="Joss Whedon" actores="Robert Downey Jr.,Chris Evans,Chris Hemsworth" fecha="1 May 2015" duracion="2h 21min" img="images/uploads/mv2.jpg">

As Steve Rogers struggles to embrace his role in the modern world, he teams up with a fellow Avenger and S.H.I.E.L.D agent, Black Widow, to battle a new threat...
</Pelicula>*/
  
//si ponemos llaves en => debemos especificar le return, sino solo basta con poner el elemento a retornar

  const [paginaActual, setPaginaActual] = useState(1);
  const [peliculas, setPeliculas] = useState([]);
  const mostrarpaginas = 4;
  
  useEffect(()=>{
    buscarPeliculas();
  },[]);
  ///let peliculas = PeliculasJson;

  

  
  /*const buscarPeliculas = async () =>{
    let url = 'https://lucasmoy.dev/data/react/peliculas.json';

    let respuesta= await fetch(url, {
      "method": 'GET',

      "headers": {
        "Accept": 'application/json',
        "Content-Type": 'application/json',
        "Origin": 'https://lucasmoy.dev/data/react/peliculas.json'
      }
    });
    let json = await respuesta.json();
    setPeliculas(json);  
  }*/

  const buscarPeliculas = async () => {
    let url = 'https://lucasmoy.dev/data/react/peliculas.json';
    try {
      const response = await fetch(url);
      //console.log(response.status);
      if(response.status === 200)
        setPeliculas(await response.json());
    } catch (error) {
      console.log(error);
    }
  };

  /*const cargarPeliculas = ()=>{
    peliculas = peliculas.slice((paginaActual - 1) * mostrarpaginas, paginaActual * mostrarpaginas);
  }*/

  const getTotalPaginas = () =>{
    let cantidadTotalDePeliculas = peliculas.length;
   return Math.ceil(cantidadTotalDePeliculas / mostrarpaginas);

  }

  let peliculasPorPagina = peliculas.slice((paginaActual - 1) * mostrarpaginas, paginaActual * mostrarpaginas);

  return (

  <PageWrapper>

    

    {peliculasPorPagina.map(pelicula=>
      <Pelicula titulo={pelicula.titulo} calificacion={pelicula.calificacion} director={pelicula.director} actores={pelicula.actores} fecha={pelicula.fecha} duracion={pelicula.duracion} img={pelicula.img}>
        {pelicula.descripcion}
      </Pelicula>
    )}

      <Paginacion pagina={paginaActual} total={getTotalPaginas()} onChange={(pagina)=>{
        setPaginaActual(pagina);
      }}></Paginacion>
      
</PageWrapper>
    
  );
}

export default ListadoPeliculas;