function fetchHandler() {
    console.log("Fetch Start");
    const buttonVar = document.querySelector(".button");
    console.log(buttonVar);
    fetch('https://cat-fact.herokuapp.com/facts/random')
        .then(response => { 
            return response.json();
        })
        .then(response => {
            
            console.log(response.text);
        });
}

setInterval(() => {
    var letters = "0123456789ABCDEF";
    var color = '#';
    for(let i = 0; i < 6; i++){
        color += letters[Math.floor(Math.random() * 16)];
    }
    document.getElementById("button").style.backgroundColor = color;

    letters = "0123456789ABCDEF";
    color = '#';
    for(let i = 0; i < 6; i++){
        color += letters[Math.floor(Math.random() * 16)];
    }
    document.getElementById("button").style.borderColor = color;

}, 750)

