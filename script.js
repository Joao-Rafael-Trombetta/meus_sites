document.addEventListener('DOMContentLoaded', function() {
    const fundoButton = document.querySelector('.cor_de_fundo');
    const body = document.body;
  
    fundoButton.addEventListener('click', () => {
      body.classList.toggle('fundo-claro');
    });
  });