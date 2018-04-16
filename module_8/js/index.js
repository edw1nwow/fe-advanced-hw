const keyboard = [['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\'], ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\''], ['z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/']];

const notes = ['do', 're', 'mi', 'fa', 'sol', 'la', 'si'];

function createLayout() {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < keyboard[i].length; j++) {
            let button = document.createElement('button');
            button.innerHTML = keyboard[i][j];
            if (i == 0) {
                if (j > 6) {
                    button.className = "toprow button";
                    button.setAttribute('data-note', notes[j % 7])
                } else {
                    button.className = "toprow button";
                    button.setAttribute('data-note', notes[j])
                }
                const up = document.querySelector(".top")
                up.appendChild(button, up.firstChild);
            } else if (i == 1) {
                if (j > 6) {
                    button.className = "toprow button";
                    button.setAttribute('data-note', notes[j % 7])
                } else {
                    button.className = "toprow button";
                    button.setAttribute('data-note', notes[j])
                }
                const up = document.querySelector(".mid")
                up.appendChild(button, up.firstChild);
                button.className = "middlerow button";
            } else if (i == 2) {
                if (j > 6) {
                    button.className = "toprow button";
                    button.setAttribute('data-note', notes[j % 7])
                } else {
                    button.className = "toprow button";
                    button.setAttribute('data-note', notes[j])
                }
                const up = document.querySelector(".bot")
                up.appendChild(button, up.firstChild);
                button.className = "bottomrow button";
            }
        }
    }
}


const playSound = note => {
    const audio = document.querySelector(`audio[data-note=${note}]`);
    audio.currentTime = 0;
    audio.play();
};


const checker = document.querySelector(".checkBox");

function recall() {
    if (checker.checked == true) {
        playSound;
        alert('on')
    } else {
        alert("Sound off")
    }
}

const buttons = Array.from(document.querySelectorAll("button"));
const temp = document.querySelector(".output")

function callback() {

    let letter = event.key;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < keyboard[i].length; j++) {
            if (letter == keyboard[i][j]) {
                temp.innerHTML += letter;
                if (i == 0) {
                    const tt = document.querySelectorAll(".toprow");
                    tt[j].className = "toprow button keyboard__btn--active";
                } else if (i == 1) {
                    const tt = document.querySelectorAll(".middlerow");
                    tt[j].className = "middlerow button keyboard__btn--active";
                } else {
                    const tt = document.querySelectorAll(".bottomrow");
                    tt[j].className = "bottomrow button keyboard__btn--active";
                }
            }
        }
    }
    window.addEventListener("keyup", callOut);
}

function callOut() {
    let tr = document.querySelector(".keyboard__btn--active");
    tr.classList.remove("keyboard__btn--active");
}



checker.addEventListener("click", recall);
window.addEventListener("keydown", callback);
createLayout();
