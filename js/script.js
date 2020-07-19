
    window.addEventListener('keydown', pushingBtn)
    window.addEventListener('keyup', backToDefault)
    window.addEventListener('keydown', playingSound)

    function pushingBtn(e) {
        const key = document.querySelector(`div[data-key="${e.keyCode}"]`)
        key.style.cssText = "transform: scale(0.98); box-shadow: none;"
    }

    function backToDefault(e) {
        const key = document.querySelector(`div[data-key="${e.keyCode}"]`)
        key.style.cssText = "transform: scale(1); box-shadow: 1px 1px 3px #99967c;"
    }

    function playingSound(e) {
        const key = document.querySelector(`div[data-key="${e.keyCode}"]`)
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        audio.currentTime = 0;
        audio.play();
    }