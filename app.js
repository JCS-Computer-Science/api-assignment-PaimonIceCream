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

function temporary(){
    let welcomeSign = [document.createElement("h1"), document.createTextNode("Welcome!")];
            welcomeSign[0].id = "welcome";
            
 
            let menuDiv = document.createElement('div');
            menuDiv.id = "menuDiv";
 
            let inputElem = document.createElement('input');
            inputElem.id = "fetchInput";
            inputElem.type = "text";
            inputElem.placeholder = "Enter API Here";
 
            let listAPI = document.createElement('div');
            listAPI.id = "listAPI";
 
            let paragraph = [document.createElement('p'), document.createTextNode("https://www.boredapi.com/api/activity")];
 
            let submitButton = document.createElement('button');
            submitButton.id = "submitButton";
            submitButton.onclick = () => fetchHandler();
            let submitText = document.createTextNode("Submit");
            
            let errorvar = document.createElement('div');
            errorvar.id = "errorID";
 
            let space = document.createElement('br');
            
            setTimeout(() => {
                document.body.appendChild(menuDiv);
                menuDiv.style.animation = "fadeIn 1s";
 
                menuDiv.appendChild(welcomeSign[0]);
                welcomeSign[0].appendChild(welcomeSign[1]);

                menuDiv.appendChild(inputElem);
                menuDiv.appendChild(listAPI);
 
                listAPI.appendChild(paragraph[0]);
                paragraph[0].appendChild(paragraph[1]);
                
                menuDiv.appendChild(space);
 
                menuDiv.appendChild(submitButton);
                submitButton.appendChild(submitText);

                menuDiv.appendChild(space);
 
                menuDiv.appendChild(errorvar);
            }, 1000);    
            console.log("Set up complete");
}

