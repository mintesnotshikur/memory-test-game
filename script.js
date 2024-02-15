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
    document.body.innerHTML = '<p onclick="location.reload();">&larr;</p> <p class="inst"> Enter the numbers you have found, separating them with a space. </p> <div class="container"> <input type="text" class="input"> <button class="submitBtn">Submit</button> </div>';

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
            alert('    You lose! \n' + 'You entered: ' + newNums.join(' ') + '\nThe correct number(s) are: ' + allNums.join(' '));
            
        } else {
            alert('You got it correct!');
        }
    });
});

function callAlert() {
    alert('The game is a number guessing game and here\'s how to play:\n\nClick the "Generate" button. A random number between 0 and 9 will be displayed.\nRemember this number(s). You can generate as many numbers as you want.\nOnce you\'re ready, click the "Start" button. The screen will change to a new interface.\nIn the new interface, enter the numbers you remember, separating each number with a space.\nClick the "Submit" button to check your answers.\nIf the numbers you entered match the generated numbers, you win and a success message will be displayed.\nIf the numbers you entered do not match the generated numbers, you lose and a failure message will be displayed, showing the numbers you entered and the correct numbers.');
}
