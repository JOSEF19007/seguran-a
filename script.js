document.addEventListener('DOMContentLoaded', function() {
    const showTipsButton = document.getElementById('show-tips');
    const tipsDiv = document.getElementById('tips');

    showTipsButton.addEventListener('click', function() {
        if (tipsDiv.style.display === 'none') {
            tipsDiv.style.display = 'block';
            showTipsButton.textContent = 'Ocultar Dicas';
        } else {
            tipsDiv.style.display = 'none';
            showTipsButton.textContent = 'Mostrar Dicas Adicionais';
        }
    });
});