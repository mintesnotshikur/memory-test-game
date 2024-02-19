var genBtn = document.querySelector('.genBtn');
var num = document.querySelector('.num');
var startBtn = document.querySelector('.startBtn');
let allNums = [];

genBtn.addEventListener('click', function() {
    var value = Math.floor(Math.random() * 10);
    num.innerHTML = value;

    allNums.push(value);
});

startBtn.addEventListener('click', function() {

    document.querySelector('.start').style.display = 'block';
    document.querySelector('.all').style.display = 'none';

    let input = document.querySelector('.input');
    let submitBtn = document.querySelector('.submitBtn');

    submitBtn.addEventListener('click', function submit() {
        let inputValue = input.value;
        let result = true;
        let newNums;
        if (inputValue.length > 1) {
            newNums = inputValue.split(' ');
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
            document.querySelector('.status').innerHTML = '<div style="width:100%;height:0;padding-bottom:85%;position:relative;"><iframe src="https://giphy.com/embed/WRp58hy5gmfjpMzHAZ" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div>';
            
        } else {
            document.querySelector('.status').innerHTML = '<div style="width:100%;height:0;padding-bottom:56%;position:relative;"><iframe src="https://giphy.com/embed/xDpB3lRInUYla" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div>';
        }
    });
});

let helpTitle = document.querySelector('.help');
let helpDescription = document.querySelector('#help');
let helpStatus = false;

helpTitle.addEventListener('click', function() {
    if (helpStatus == false) {
        helpDescription.style.display = 'block';
        helpTitle.innerHTML = 'X';
        helpStatus = true;
    } else {
        helpDescription.style.display = 'none';
        helpTitle.innerHTML = 'Help';
        helpStatus = false;
    }
});
