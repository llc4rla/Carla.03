document.addEventListener('DOMContentLoaded', (event) => {
    const titulo = document.getElementById('titulo');
    const corSelect = document.getElementById('cor');
    corSelect.addEventListener('change', () => {
    titulo.style.color = corSelect.value;
    });
    });