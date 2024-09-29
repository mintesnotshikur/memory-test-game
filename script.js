var genBtn = document.querySelector('.genBtn');
var generatedNumber = document.querySelector('.generatedNumber');
var startBtn = document.querySelector('.startBtn');
let allNums = [];

let isNumberGenerated = false;

genBtn.addEventListener('click', function() {
    isNumberGenerated = true
    var value = Math.floor(Math.random() * 10);
    generatedNumber.innerHTML = value;

    allNums.push(value);
});

startBtn.addEventListener('click', function() {

    if (!isNumberGenerated) {
        alert("You need to generate number first!");
        return
    }

    document.querySelector('.start').style.display = 'block';
    document.querySelector('.all').style.display = 'none';

    let input = document.querySelector('.input');
    let submitBtn = document.querySelector('.submitBtn');

    submitBtn.addEventListener('click', function submit() {
        let inputValue = input.value;
        let result = true;
        let newNums;
        if (inputValue.length > 1) {
            newNums = inputValue.split(',');
        }else {
            newNums = inputValue;
        }

        if (newNums.length != allNums.length) {
            result = false;
        } else {
            for (let i = 0; i < newNums.length; i++) {
                let st = true;
                for (let i = 0; i < allNums.length; i++) {
                    if (allNums[i] == newNums[i]) {
                        result = true;
                    } else {
                        result = false;
                        st = false;
                        break;
                    }
                }
                if (st == false) {
                    console.log('st is false');
                    break;
                }
            }
        }
        if (result == false) {
            document.querySelector('.status').innerHTML = '<video loop autoplay src="gif/shaking head.mp4"></video>';
            
        } else {
            document.querySelector('.status').innerHTML = '<video loop autoplay src="gif/clap.mp4"></video>';
        }
    });
});

let helpBtn = document.querySelector('.helpBtn');
let helpDescription = document.querySelector('.help');
let helpStatus = false;

helpBtn.addEventListener('click', function() {
    if (helpStatus == false) {
        helpDescription.style.display = 'flex';
        helpBtn.innerHTML = 'X';
        helpStatus = true;
    } else {
        helpDescription.style.display = 'none';
        helpBtn.innerHTML = 'Help';
        helpStatus = false;
    }
});

