
    window.addEventListener('keydown', playSound)

    function playSound(e) {
        const key = document.querySelector(`div[data-key="${e.keyCode}"]`)
    }

