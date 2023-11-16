(function(){ /*  function(){...}: Esta es una función anónima autoinvocada que envuelve todo el código, lo que permite encapsular el código y evitar conflictos con otros scripts en la página.
*/
    const titleQuestions = [...document.querySelectorAll('.questions__title')];/*  const titleQuestions = [...document.querySelectorAll('.questions__title')];: Esta línea utiliza document.querySelectorAll para seleccionar todos los elementos con la clase questions__title y los almacena en la variable titleQuestions como una matriz.*/
    console.log(titleQuestions) /*  console.log(titleQuestions): Esta línea imprime la matriz titleQuestions en la consola del navegador para inspeccionar qué elementos se seleccionaron. */

    titleQuestions.forEach(question =>{ /* titleQuestions.forEach(question => {...});: Esto itera sobre cada pregunta y agrega un EventListener que se activa cuando se hace clic en el título de la pregunta.  */
        question.addEventListener('click', ()=>{ /* question.addEventListener('click', () => {...});: Establece un evento de clic en el elemento question y define la lógica que se ejecuta cuando se hace clic en el título de la pregunta.  */
            let height = 0; /*  let height = 0;: Esta línea inicializa una variable height en cero, que se utiliza para controlar la altura de la respuesta. */
            let answer = question.nextElementSibling; /*  let answer = question.nextElementSibling;: Esta línea selecciona el siguiente elemento hermano del título de la pregunta, que en este caso es el elemento de respuesta correspondiente. */
            let addPadding = question.parentElement.parentElement; /* let addPadding = question.parentElement.parentElement;: Esto selecciona el elemento contenedor de la pregunta y su respuesta para que se pueda aplicar un margen interno adicional al elemento.  */
 
            addPadding.classList.toggle('questions__padding--add'); /* addPadding.classList.toggle('questions__padding--add');: Esto cambia la clase del elemento contenedor para agregar o eliminar un margen adicional al elemento en función del estado actual.  */
            question.children[0].classList.toggle('questions__arrow--rotate'); /*  question.children[0].classList.toggle('questions__arrow--rotate');: Esto cambia la clase de la primera etiqueta secundaria del título de la pregunta para rotar una flecha hacia arriba o hacia abajo dependiendo del estado actual. */

            if(answer.clientHeight === 0){ /*  if(answer.clientHeight === 0){...}: Esto comprueba si la altura de la respuesta es cero, lo que indica si la respuesta está oculta. */ 
                height = answer.scrollHeight; /*  height = answer.scrollHeight;: Si la respuesta está oculta, se establece la altura de la respuesta en la altura real del contenido. */ 
            }

            answer.style.height = `${height}px`; /* answer.style.height = ${height}px;: Esto establece la altura de la respuesta en píxeles para mostrar u ocultar la respuesta al hacer clic en el título de la pregunta.  */
        });
    }); 
})();

/*  */