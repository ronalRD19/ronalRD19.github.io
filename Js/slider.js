(function(){ /* (function(){...})();: Esta es una función anónima autoinvocada que encapsula el código y previene interferencias con otros scripts.  */
    
    const sliders = [...document.querySelectorAll('.testimony__body')]; /*  const sliders = [...document.querySelectorAll('.testimony__body')];: Aquí se seleccionan todos los elementos con la clase 'testimony__body' y se almacenan en la variable sliders como una matriz */
    const buttonNext = document.querySelector('#next'); /* const buttonNext = document.querySelector('#next');: Se selecciona un botón con un id de 'next' y se almacena en la variable buttonNext. */
    const buttonBefore = document.querySelector('#before'); /* const buttonBefore = document.querySelector('#before');: Se selecciona un botón con un id de 'before' y se almacena en la variable buttonBefore.  */
    let value;    /* let value;: Aquí se declara una variable value sin asignarle un valor específico en este momento.  */

    buttonNext.addEventListener('click', ()=>{ /*  buttonNext.addEventListener('click', ()=>{...});: Se agrega un evento de clic al botón 'Siguiente' que llama a la función changePosition con un parámetro de 1. */
        changePosition(1); /*  */
    });

    buttonBefore.addEventListener('click', ()=>{ /* buttonBefore.addEventListener('click', ()=>{...});: Se agrega un evento de clic al botón 'Anterior' que llama a la función changePosition con un parámetro de -1.  */
        changePosition(-1); 
    });

    const changePosition = (add)=>{ /* const changePosition = (add)=>{...}: Esta función cambia la posición del testimonio mostrado en la página dependiendo del valor pasado como argumento. */
        const currentTestimony = document.querySelector('.testimony__body--show').dataset.id;/* const currentTestimony = document.querySelector('.testimony__body--show').dataset.id;: Se selecciona el testimonio actualmente mostrado en la página y se obtiene su ID de dataset. */
        value = Number(currentTestimony); /*  value = Number(currentTestimony);: Se convierte el valor del ID del testimonio actual en un número. */
        value+= add; /* value+= add;: Se actualiza el valor sumándole el valor de add, que puede ser 1 o -1 dependiendo del botón presionado.  */


        sliders[Number(currentTestimony)-1].classList.remove('testimony__body--show'); /* sliders[Number(currentTestimony)-1].classList.remove('testimony__body--show');: Aquí se elimina la clase 'testimony__body--show' del testimonio actualmente mostrado.  */
        if(value === sliders.length+1 || value === 0){ /* if(value === sliders.length+1 || value === 0){...}: Se comprueba si el valor es igual a la longitud de sliders más 1 o igual a 0.  */
            value = value === 0 ? sliders.length  : 1; /*   value = value === 0 ? sliders.length : 1;: Si el valor es 0, se establece en la longitud de sliders; de lo contrario, se establece en 1.*/
        }

        sliders[value-1].classList.add('testimony__body--show'); /* sliders[value-1].classList.add('testimony__body--show');: Se agrega la clase 'testimony__body--show' al testimonio correspondiente al valor actual.  */

    }

})();
/*  */