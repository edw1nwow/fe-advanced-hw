const keyTrainer = {
    chars: ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'],
    checkPositiveInteger: function (inputData) {
        const convertData = parseInt(inputData);
        const revise = (convertData != isNaN && convertData > 0 && convertData < 33 && convertData % 1 === 0);
        return revise;
    },
    setCharCount: function () {
        let count = prompt('Count of letters', 2);
        let condition = this.checkPositiveInteger(count);
        while (!condition) {
            alert('Letters must be from 1 to 33');
            count = prompt('Count of letters', 2);
            condition = this.checkPositiveInteger(count);

        }
        this.charCount = parseInt(count);
    },
    task: [],
    createTask: function () {
        let tempArray = [];
        for (let i = 0; i < this.charCount; i++) {
            const randomLetter = parseInt(Math.random() * this.chars.length);
            tempArray.push(this.chars[randomLetter]);
        }
        this.task = tempArray;
    },
    userInput: '',
    startTask: function () {
        let tempStr = this.task.join('');
        this.userInput = prompt(tempStr, );

    },
    userErrors: function () {
        const convertToArray = this.userInput.split('');
        let countErrors = 0;

        for (let i = 0; i < this.task.length; i++) {
            if (this.task[i] != convertToArray[i]) {
                countErrors = countErrors + 1;
            }

        }
        if (countErrors == 0) {
            alert('well done');
        } else {
            alert('You had' + ' ' + countErrors + ' errors');
        }
    },
    run: function () {
        this.setCharCount();
        this.createTask();
        this.startTask();
        this.userErrors();
        const result = this.userInput;
        console.log('result', result)
    }
}

keyTrainer.run();