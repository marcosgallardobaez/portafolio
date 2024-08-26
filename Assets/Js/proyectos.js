const vinculos = document.querySelectorAll('a');

vinculos.forEach(vinculo =>{
vinculo.addEventListener('mouseover', () => {
    vinculo.classList.add('backgroundlink')
})

vinculo.addEventListener('mouseout', () => {
    vinculo.classList.remove('backgroundlink')
});
})

document.getElementById('btn-github').addEventListener('click', () => {
    location.assign('https://github.com/marcosgallardobaez');
});


const botonGit = document.getElementById('btn-github');


botonGit.addEventListener('mouseover', () => {
    botonGit.classList.add('backgroundlink');
});

botonGit.addEventListener('mouseout', () => {
    botonGit.classList.remove('backgroundlink');
});


