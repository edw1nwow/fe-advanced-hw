const keyboard = [['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\'], ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\''], ['z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/']];

function createLayout() {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < keyboard[i].length; j++) {
            let button = document.createElement('button');
            button.innerHTML = keyboard[i][j];
            if (i == 0) {
                button.className = "toprow button";
                const up = document.querySelector(".top")
                up.appendChild(button, up.firstChild);

            } else if (i == 1) {
                const up = document.querySelector(".mid")
                up.appendChild(button, up.firstChild);
                button.className = "middlerow button";
            } else if (i == 2) {
                const up = document.querySelector(".bot")
                up.appendChild(button, up.firstChild);
                button.className = "bottomrow button";
            }
        }
    }
}

function soundOn() {
    const playSound = note => {
        const audio = document.querySelector(`audio[data-note=${note}]`);
        audio.currentTime = 0;
        audio.play();
    };
}

const checker = document.querySelector(".checkBox");

function recall() {
    if (checker.checked == true) {
        soundOn();
        alert('on')
    } else {
        alert("Sound off")
    }
}

const buttons = Array.from(document.querySelectorAll(" button"));
const temp = document.querySelector(".output")

function callback() {
    let letter = event.key;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < keyboard[i].length; j++) {
            if (letter == keyboard[i][j]) {
                temp.innerHTML += letter;
                if (i == 0){
                const tt = document.querySelector(".toprow");
                tt.className = "toprow button keyboard__btn--active";
                } else if (i == 1){
                    const tt = document.querySelector(".middlerow");
                tt.className = "middlerow button keyboard__btn--active";
                }
                else {
                    const tt = document.querySelector(".bottomrow");
                tt.className = "bottomrow button keyboard__btn--active";
                }                
            }
        }
    }
}



checker.addEventListener("click", recall);
window.addEventListener("keydown", callback);
createLayout();
