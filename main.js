function calcularEdadPromedio() {
  let cantidadPersonas = parseInt(prompt("Ingrese la cantidad de personas (entre 1 y 10):"));

  if (isNaN(cantidadPersonas) || cantidadPersonas < 1 || cantidadPersonas > 10) {
    alert("Ingrese una cantidad válida entre 1 y 10.");
    return;
  }

  let totalEdades = 0;

  for (let i = 0; i < cantidadPersonas; i++) {
    let edad = parseInt(prompt(`Ingrese la edad de la persona ${i + 1}:`));

    if (isNaN(edad) || edad <= 0) {
      alert("Ingrese una edad válida mayor a 0.");
      return;
    }

    totalEdades += edad;
  }

  let edadPromedio = totalEdades / cantidadPersonas;

  alert(`La edad promedio de las ${cantidadPersonas} personas ingresadas es: ${edadPromedio}`);
}

calcularEdadPromedio();