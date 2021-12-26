Vue.component('lugares', {
	template:
    `
<div class="pt-4">  
  <h2>Lugares Turisticos mas visitados de Paris</h2>
  <div class="container">
    <div class="row">
      <article class="col-md-6 col-lg-4 mt-4">        
            <img class="img-fluid redondear-img" src="imagenes/SaiteChapelle.jpg" alt="Saite Chpelle" />
        <div class="shadow-lg redondear pad">
          <h3 class="text-center">Sainte Chapelle</h3>
          <p>La Sainte Chapelle es nuestra iglesia favorita que ver en París y una de las más bonitas del mundo. De estilo gótico y situada en la preciosa Île de la Cité, <strong>se construyó</strong> entre 1241 y 1248 <strong>para guardar varias reliquias</strong> como la corona de espinas, parte de la cruz, el hierro de la lanza y la esponja del martirio de Jesucristo y lo que más destaca del interior es su carencia de paredes, que realza sus impresionantes vidrieras de la capilla superior, donde te quedarás sin palabras frente a tanta belleza. La capilla inferior es más sobria y tiene un fresco de la Anunciación del XIII, considerado el mural más antiguo de la ciudad.
          Horario de visita: de abril a septiembre de 9h a 19h y el resto del año de 9h a 17h.<br>
          Entrada gratuita con el Paris Pass.</p>
        </div>
      </article>
      <article class="col-md-6 col-lg-4 mt-4">
            <img class="img-fluid redondear-img" src="imagenes/NotreDame.jpg" alt="Notre Dame"/>
          <div class="shadow-lg redondear pad">
            <h3 class="text-center">Notre Dame</h3>
            <p>La Catedral de Notre Dame, construida entre 1163 y 1345, <strong>es una de las catedrales góticas más antiguas y bonitas del mundo</strong>. Lamentablemente, en la actualidad, a consecuencia del trágico incendio del 15 de abril de 2019, el edificio sufrió graves daños, y actualmente solo se puede ver su magnífico exterior en la que destaca la fachada occidental y las dos torres. Sobre las puertas de la fachada, se encuentran 28 estatuas que representan a los reyes de Judea e Israel.
            Nosotros de momento, esperando y deseando una reconstrucción exacta de la catedral de antes del incendio, nos quedamos con el recuerdo de su luminoso interior gracias a sus amplios ventanales y la subida a sus dos torres, en la que se encuentran sus famosas y misteriosas quimeras o gárgolas.</p>
        </div>
      </article>
      
      <article class="col-md-6 col-lg-4 mt-4">
        <img class="img-fluid redondear-img" src="imagenes/ArcoDeTriunfo.jpg" alt="Arco del triunfo" />
        <div class="shadow-lg redondear pad">
          <h3 class="text-center">Arco del Triunfo</h3>
          <p>El Arco de Triunfo, <strong>construido</strong> entre 1806 y 1836 <strong>por Napoleón para recordar su gran victoria en la batalla de Austerlitz</strong>, es el más famoso del mundo y otros de los lugares turísticos que visitar en París.
          Con 50 metros de alto por 45 de ancho, e inspirado en el Arco de Tito de Roma, <strong>está situado en una de las rotondas más grandes del mundo</strong>, por lo que tendrás que acceder por un paso subterráneo, para una vez delante, ver la conmovedora Tumba al Soldado Desconocido de la Primera Guerra Mundial.
          Además de ser un símbolo de París y de toda Francia, este Arco de Triunfo es un excelente mirador con las mejores vistas a la gran avenida de los Campos Elíseos. Puedes entrar de forma gratuita con el Paris Pass.<br>
          Horario de visita: todos los días de 10h a 23h.</p>
        </div>
      </article>
      
      <article class="col-md-6 col-lg-4 mt-4">
        <img class="img-fluid redondear-img" src="imagenes/JardinLuxemburgo.jpg" alt="Jardin de Luxemburgo" />
        <div class="shadow-lg redondear pad">
          <h3 class="text-center">Jardines de Luxemburgo</h3>
          <p>Los Jardines de Luxemburgo son uno de los espacios verdes más bonitos que ver en París además de un lugar perfecto para desconectar del ajetreo de la ciudad. Situados frente al Palacio de Luxemburgo, cerca del barrio Latino, <strong>es un lugar muy popular para los parisinos</strong> donde vienen a hacer picnic, escuchar conciertos gratuitos o simplemente charlar con amigos tumbados en el césped, sobre todo cuando hace buen tiempo.
          En estos jardines con un gran estanque central también <strong>encontrarás varias esculturas</strong> a las que merece la pena dedicar unos minutos, <strong>entre todo tipo de plantas y árboles</strong>.
          Uno de sus lugares con más encanto e historia, es la Fuente Médici que se remonta a los inicios de siglo XVII cuando la reina María de Médici los mandó construir recreando el Jardín de Bóboli.</p>
        </div>
      </article>

      <article class="col-md-6 col-lg-4 mt-4">
        <img class="img-fluid redondear-img" src="imagenes/TorreEiffel.jpg" alt="TorreEiffel"/>
        <div class="shadow-lg redondear pad">
          <h3 class="text-center">Torre Eiffel</h3>
          <p>La Torre Eiffel fue creada para la Exposición Universal de París del año 1889 y aunque no gustó en un principio a los parisinos por su diseño, con el paso del tiempo <strong>se ha convertido en el símbolo de la ciudad y en el monumento más visitado del mundo</strong> con más de 7 millones de personas al año.</p>
          <p>Para subir a la zona más alta de esta estructura de hierro de 300 <abbr title="Metros">m</abbr>, construida por el famoso ingeniero Gustave Eiffel, te recomendamos utilizar el ascensor antes que la escalera de 1665 escalones din olvidar que a diferencia de la escalera, en los ascensores se forman interminables colas.<br/>
          Horario de visita: todos los días de 9h a 0:45h julio y agosto, el resto del año de 9:30 a 23:45.</p>
        </div>
      </article>
    </div>
  </div>
</div>
    `
})