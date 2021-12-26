Vue.component('home', {
	template:
    `
<div>
	<article class="container pb-4">
		<h2 class="h1 mb-4 mt-4 azul">Paris la ciudad de la Luz</h2>
		<p>La ciudad de París habría sido fundada entre los años 250 <abbr title="Antes de Cristo">a. C.</abbr> y 200 a. C, tomando el nombre actual de París en el siglo IV.</p>
		
		<p><strong>La Avenida de los Campos Elíseos que ha sido llamada "la avenida más hermosa del mundo"</strong>, es una de las principales calles comerciales de París. Originalmente fue un jardín y se ha convertido en gran avenida-paseo que conecta el Arco del Triunfo con la Plaza de la Concordia. En esta plaza, a ambos lados de la Rue Royale, existen dos edificios de piedra: el oriental alberga el Hotel de la Marina y al oeste el lujoso Hotel de Crillon.</p>
		
		<p><strong>El nombre de “Ciudad de la Luz” se debe a que fue el primer lugar en brindar tanto a sus calles como a los edificios de una imponente luz eléctrica</strong>, la cual causó mucha admiración a nivel mundial.<br/>
		París también es conocida como la ciudad del amor, la capital de la modernidad y la ciudad de la moda, tres apodos que delatan la visión idealizada que se tiene de este bello lugar, en parte debido a lo que se transmite a través del cine internnacional</p>
		<p><strong>La ciudad es el destino turístico más popular del mundo</strong>, con más de 42 millones de visitantes extranjeros por año.<br/>
		Cuenta con muchos de los monumentos más famosos y admirados del orbe: <strong>la Torre Eiffel, el Arco de Triunfo, la Basílica del Sacré Coeur, la Catedral de Notre Dame</strong>.También alberga instituciones de reconocimiento mundial: el Louvre, el Museo de Orsay y el Museo Nacional de Historia Natural de Francia, así como un extenso sistema de educación superior de prestigio internacional.</p>
	</article>	
	<picture>
		<source srcset="imagenes/M_Torre.jpg" media="(max-width:430px)"/>
		<img src="imagenes/Torre.jpg" alt="torre eiffel"/>
	</picture>
	<div>
		<h2 class="h1 mb-4 mt-4">Descubre Paris</h2>
			<figure>
				<iframe width="816" height="0415" src="https://www.youtube.com/embed/_n6GHaADUOc" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
				</iframe>
			</figure>
	</div>
</div>
    `
})