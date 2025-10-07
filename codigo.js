const grid = new Muuri('.grid',{
	Layout: {
		rounding: false
	}
});

('load', () => {
		grid.refreshItems().layout();
	document.getElementById('grid').classList.add('imagenes-cargadas')

	const enlaces = document.querySelectorAll('#categorias a');
	enlaces.forEach( (elemento) => {
		elemento.addEventListener('click', (evento) => {
			evento.preventDefault();
			enlaces.forEach((enlace) => enlace.classList.remove('activo'))
			evento.target.classList.add('activo');

			const categoria = evento.target.innerHTML.toLowerCase();
			grid.filter('[data-categoria]');

		});
	});
});
