const vinculos = document.querySelectorAll('a');

vinculos.forEach(vinculo =>{
vinculo.addEventListener('mouseover', () => {
    vinculo.classList.add('backgroundlink')
})

vinculo.addEventListener('mouseout', () => {
    vinculo.classList.remove('backgroundlink')
});
})