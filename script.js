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

