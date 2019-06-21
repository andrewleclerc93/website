const powerball = document.getElementById('powerball');
const megaMillions = document.getElementById('megaMillions');
const game = document.getElementById('game');

function randomNum(number) {
var random = Math.floor(Math.random() * (number+1));
}


powerball.addEventListener('click', function() {    

    // Remove any numbers if present

    for (i=0; i<5; i+=1) {
    var random = Math.floor(Math.random() * (70));   
    var btn = document.createElement("BUTTON");
    btn.innerHTML = random;
    btn.setAttribute('class', 'btn btn-secondary rounded-circle');
    document.body.appendChild(btn);
    };

    var random = Math.floor(Math.random() * (27)); 
    var btn = document.createElement("BUTTON");
    btn.innerHTML = random;
    btn.setAttribute('class', ' rounded-circle btn btn-success');
    document.body.appendChild(btn);
});



megaMillions.addEventListener('click', function() {

        // Remove any numbers if present

        for (i=0; i<5; i+=1) {
            var random = Math.floor(Math.random() * (71));   
            var btn = document.createElement("BUTTON");
            btn.innerHTML = random;
            btn.setAttribute('class', 'btn btn-secondary rounded-circle');
            document.body.appendChild(btn);
            };
        
            var random = Math.floor(Math.random() * (26)); 
            var btn = document.createElement("BUTTON");
            btn.innerHTML = random;
            btn.setAttribute('class', 'rounded-circle btn btn-success');
            document.body.appendChild(btn);
        });
