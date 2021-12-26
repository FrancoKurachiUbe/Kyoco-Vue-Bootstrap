Vue.component('restaurantes', {
	template:
    `
  <div class="pt-4">	
    <h2>Restaurantes</h2>
    <div class="container">
      <div class="row">
        <article class="col-md-6 col-lg-4 mt-4">
          <img class="img-fluid redondear-img" src="../img-kyoco/img/WagonBleu.jpg" alt="Restorante Dessance"/>
          <div class="shadow-lg redondear pad">
              <h3 class="text-center">Wagon Bleu</h3>
              <p>Este antiguo vagón del mítico Orient-Express es el ambiente perfecto para una comida típicamente corso en el 17° distrito de París. En el Wagon Bleu, tendrán una gran selección de vinos corsos que acompañarán los platos típicos como platos completos de embutidos para picar, ensaladas gourmet y hamburguesas adaptadas.
              </p>
              <ul>
                <li><span>Dirección:</span> 7, rue Boursault 75017 Paris France.</li>  
                <li><span>Horarios:</span> Todos los días (sábado y domingo incluidos).</li>
              </ul>
          </div>
        </article>
        <article class="col-md-6 col-lg-4 mt-4">
          <img class="img-fluid redondear-img" src="../img-kyoco/img/LeBarbe.jpg" alt="Restorante Dessance"/>
          <div class="shadow-lg redondear pad">
              <h3 class="text-center">Le Barbe à Papa</h3>
              <p>En este bar con decoraciones neoyorkinas, serán recibidos por barbudos simpáticos. El ambiente es relajado, ideal para almorzar entre amigos o con su familia. Los platos caseros están hechos con productos frescos. ¿Lo mejor? ¡Hay «happy hour» los jueves! El restaurante propone varios vinos.</p>
              <ul>
                <li><span>Dirección:</span> 18, rue Condorcet 75009 Paris France.</li>
                <li><span>Horarios:</span> Martes a sábado desde las 2:30 pm a 11:30pm.</li>
              </ul>
            </div>
        </article>
        <article class="col-md-6 col-lg-4 mt-4">
          <img class="img-fluid redondear-img" src="../img-kyoco/img/LeCaféDesChats.jpg" alt="Restorante Dessance"/>
          <div class="shadow-lg redondear pad">
              <h3 class="text-center">Le café des chats</h3>
              <p>En este pequeño café del distrito 11, los amantes de gatos podrán saborear chocolate caliente mientras estarán rodeados por sus animales favoritos. Aquí, los gatos están en libertad y nadie puede obligarlos a hacer lo que sea. Estos gatos vienen de refugios de animales para darles una segunda oportunidad.</p>
              <ul>
                <li><span>Dirección:</span> 9 Rue Sedaine, 75011 París.</li>
                <li><span>Horarios:</span>  Martes a domingo desde las 12:00pm a 10:30 pm.</li>
              </ul>
          </div>
        </article>
        <article class="col-md-6 col-lg-4 mt-4">        
            <img class="img-fluid redondear-img" src="../img-kyoco/img/Dessance.jpg" alt="Restorante Dessance"/>
            <div class="shadow-lg pad">
              <h3 class="text-center">Dessance</h3>
              <p>¿Siempre quisieron comer una comida completamente dulce? ¡El restaurante Dessance está hecho especialmente para ustedes! Al menú: cocina francesa original, explosión de sabores y de texturas por un precio asequible. Para quienes no quieren comer únicamente dulce, hay fórmulas saladas tan sabrosas como la fórmula dulce. ¿Probarás la experiencia?</p>
              <ul>
                <li><span>Dirección:</span> 74 rue des Archives 75003 Paris.</li>
                <li><span>Horarios:</span> Miércoles a domingo desde las 12:00pm a 11:00 pm.</li>
              </ul>
            </div>
        </article>
        <article class="col-md-6 col-lg-4 mt-4">
          <img class="img-fluid redondear-img" src="../img-kyoco/img/AutoPassionCafé.jpg" alt="Restorante Dessance"/>
          <div class="shadow-lg redondear pad">
              <h3 class="text-center">Auto Passion Café </h3>
              <p>Este café está enteramente dedicado a la pasión del automóvil y está completamente decorado con accesorios para automóviles (asiento de carros, motores…), pero también tiene señales de tráfico e incluso con coches de carreras (¡hasta hay uno en el techo!). En lo referente al menú, la selección es bastante limitada, pero los platos son de muy buena calidad</p>
              <ul>
                <li><span>Dirección:</span> 197 Boulevard Brune, 75014 Paris.</li>
                <li><span>Horarios:</span> Todos los días desde las 10:00 am a las 8:00 pm.</li>
              </ul>
          </div>
        </article>
      </div>
    </div>
  </div>
    `
})