// Mensaje que aparece en la consola cuando se carga la página
document.addEventListener('DOMContentLoaded', () => {
  console.log('¡Bienvenido a mi blog, Luis!');
  
  // Seleccionamos el encabezado <h1>
  const titulo = document.querySelector('header h1');
  
  // Añadimos un evento al hacer clic en el título
  titulo.addEventListener('click', () => {
    alert('¡Gracias por visitar mi blog!');
  });
});