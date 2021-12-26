Vue.component('excursiones', {
	/* data:function(){
		return {
        }
    },
 */
	template:
`
<div class="pt-4 pb-4">	
	<h2>Excursiones exclusivas</h2>
	<div class="container">
		<div class="row">
			<article class="col-md-6 col-lg-4 mt-4">
				<img class="img-fluid redondear-img" src="imagenes/EntradaTorre.jpg" alt="torre Eiffel"/>
				<div class="shadow-lg redondear pad">
					<h3 class="text-center">Torre Eiffel: subida en ascensor</h3>
					<p class=""><strong>Pase la brisa a las afueras de la Torre Eiffel con este pase sin colas </strong> y un recorrido de 1,5 horas. En compañía de su guía local, obtendrá acceso prioritario al segundo nivel de la torre. Adéntrate en la historia de uno de los monumentos más... <!-- famosos del mundo y empápate de las exhibiciones y los mapas que se muestran... --></p>
					<div class="text-center">
						<router-link class="btn btn-secondary" to="/formulario">Mas Informacion</router-link>
					</div>
				</div>
			</article>

			<article class="col-md-6 col-lg-4 mt-4">
				<img class="img-fluid redondear-img" src="imagenes/bicicleta.jpg" alt="torre Eiffel"/>
				<div class="shadow-lg redondear pad">
					<h3 class="text-center">Versalles en bicicleta</h3>
					<p>Los jardines de Versalles abarcan una impresionante superficie de 1,976 <abbr title="Hectareas">ha</abbr>. En lugar de explorar los extensos terrenos a pie, <strong>pedalea con una guía informativa sobre este recorrido en bicicleta de Versalles desde París</strong>. Descubra senderos de jardín y caminos arbolados detrás del... <!-- palacio, y llegue a partes de los terrenos que los visitantes a pie no frecuentan... --></p>
					<div class="text-center">
						<router-link class="btn btn-secondary" to="/formulario">Mas Informacion</router-link>
					</div>	
				</div>
			</article>

			<article class="col-md-6 col-lg-4 mt-4">
				<img class="img-fluid redondear-img" 	src="imagenes/ParisDia.jpg" alt="torre Eiffel"/>
				<div class="shadow-lg redondear pad">
					<h3 class="text-center">París en un día</h3>
					<p><strong>Vaya a todos los puntos de interés de París</strong>, empiece con una excursión de 1,5 <abbr title="Horas">hs</abbr> en la Torre Eiffel, incluido el acceso estándar a la cúspide de la torre. Siga con un crucero narrado por el río Sena, una excursión de 1 hora por la catedral de Notre-Dame, y una visita a pie guiada por el Museo del Louvre...</p>
					<div class="text-center">
						<router-link class="btn btn-secondary" to="/formulario">Mas Informacion</router-link>
					</div>
				</div>
			</article>
		
			<article class="col-md-6 col-lg-4 mt-4">
				<img class="img-fluid redondear-img" src="imagenes/crucero.jpg" alt="torre Eiffel"/>
				<div class="shadow-lg redondear pad">
					<h3 class="text-center">Crucero turístico por el río Sena</h3>
					<p><strong>Contemple las principales atracciones de París desde el agua en una excursión en barco por el río Sena con paradas libres</strong>. Tras escoger entre un pase para 1 o 2 días, deslícese apaciblemente por el río subiendo y bajando del barco cuando lo desee para visitar las atracciones que más le interesen...</p>
					<div class="text-center">
						<router-link class="btn btn-secondary" to="/formulario">Mas Informacion</router-link>
					</div>
				</div>
			</article>
		</div>
	</div>
</div>
`
})