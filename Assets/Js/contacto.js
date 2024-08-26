const vinculos = document.querySelectorAll('a');

vinculos.forEach(vinculo =>{
vinculo.addEventListener('mouseover', () => {
    vinculo.classList.add('backgroundlink')
})

vinculo.addEventListener('mouseout', () => {
    vinculo.classList.remove('backgroundlink')
});
})

const form = document.getElementById('contacto-form');

        form.addEventListener('submit', function(event) {
            event.preventDefault();

            alert('Tu mensaje ha sido enviado a Marcos. ¡Gracias, responderé a la brevedad!');
        })