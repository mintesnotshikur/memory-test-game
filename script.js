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
        let count = false;
        let newNums = inputValue.split(' ');

        for (let i = 0; i < newNums.length; i++) {
            let newVal = newNums[i];
            allNums.forEach(value => {
                if (value == newVal) {
                    count = true;
                }else {
                    count = false;
                }
            });
        }
        if (count == false) {
            document.querySelector('.status').innerHTML = '<iframe src="https://giphy.com/embed/lnhOzj6RHueJq5Jgph" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/brownsugarapp-smh-old-lady-shaking-my-head-lnhOzj6RHueJq5Jgph">via GIPHY</a></p>';
            
        } else {
            document.querySelector('.status').innerHTML = '<iframe src="https://giphy.com/embed/xDpB3lRInUYla" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/shia-labeouf-xDpB3lRInUYla">via GIPHY</a></p>';
        }
    });
});

function callAlert() {
    alert('The game is a number guessing game and here\'s how to play:\n\nClick the "Generate" button. A random number between 0 and 9 will be displayed.\nRemember this number(s). You can generate as many numbers as you want.\nOnce you\'re ready, click the "Start" button. The screen will change to a new interface.\nIn the new interface, enter the numbers you remember, separating each number with a space.\nClick the "Submit" button to check your answers.\nIf the numbers you entered match the generated numbers, you win and a success message will be displayed.\nIf the numbers you entered do not match the generated numbers, you lose and a failure message will be displayed, showing the numbers you entered and the correct numbers.');
}
