document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('startButton');
    const countdownDisplay = document.getElementById('countdown');
    const hornSound = document.getElementById('hornSound');
    const infoContainer = document.getElementById('infoContainer');
    let countdownInterval;

    startButton.addEventListener('click', () => {
        // Ocultar el infoContainer y mostrar el contador
        infoContainer.classList.add('hidden');
        countdownDisplay.classList.add('visible');
        startButton.disabled = true;
        
        let timeLeft = 10;
        countdownDisplay.textContent = timeLeft;

        countdownInterval = setInterval(() => {
            timeLeft--;
            countdownDisplay.textContent = timeLeft;

            if (timeLeft <= 0) {
                clearInterval(countdownInterval);
                hornSound.play();
                // Ocultar el contador y mostrar el infoContainer después de 1 segundo
                setTimeout(() => {
                    countdownDisplay.classList.remove('visible');
                    infoContainer.classList.remove('hidden');
                    startButton.disabled = false;
                }, 1000);
            }
        }, 1000);
    });
}); 