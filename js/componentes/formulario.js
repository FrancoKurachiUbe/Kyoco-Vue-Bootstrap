Vue.component('formulario', {
	
	template:
    `
<div class="container border shadow-lg rounded pt-4 mt-5 pb-4">	
	<h2 class=" azul">Para mas Informacion de Nuestas excurciones</h2>
	<form class="container" action="#" method="post" enctype="multipart/form-data">

		<div class="form-group mb-3">
			<label for="mail" class="form-label">Email</label>
			<input type="text" class="mb-3 form-control" id="mail" placeholder="email...">
		</div>

		<div class="form-group mb-3">
			<label for="telefono" class="form-label">Telefono</label>
			<input type="number" class="mb-3 form-control" id="telefono" placeholder="telefono...">
		</div>

		<div class="form-group mb-3">
			<label for="genero" class="form-label">Genero</label>
			<select class="form-select" id="genero" name="Genero">
				<option value="">Femenino</option>
				<option value="">Masculino</option>
			</select>
		</div>
		
		<div class="form-group mb-3">
			<label for="fecha" class="form-label">Fecha</label>
			<input type="date"  class="mb-3 form-control" name="fecha" id="fecha" min="2019-06-29" max="2021-06-29">
		</div>
		
		<div class="form-group mb-3">
			<label for="excurciones" class="form-label">Excurciones</label>
			<select class="mb-3 form-control" name="excurcion" id="excurciones">
				<option value="TorreEiffel" >Entrada a la Torre Eiffel </option>
				<option value="Bicicleta"> Paseo en Bicicleta por Versalles</option>
				<option value="ParisUnDia">Paris en un dia</option>
				<option value="Crucero">Crucero</option>
			</select>
		</div>
		<div class="form-group mb-3">
			<label for="comentario" class="form-label">Tu Comentario</label>
			<textarea class="mb-3 form-control" name="comentario" id="comentario"></textarea>
		</div>
		<button type="submit" value="Enviar"  id="enviar"  class="btn btn-success">Enviar</button>	
	</form>
</div>
    `
})