function fetchHandler() {
    var url = document.getElementById("fetchInput").value;
    
    fetch(url)  
        .then(response => { 
            document.getElementById("valueID").innerHTML = " ";
            return response.json();
        })   
        .then(response => {
            let nodeList = document.getElementsByTagName("option").length;
            for (var i = 0; i < nodeList; i++){
                let select = document.getElementById("keySelect");
                select.remove(0);
            }

            
            let result = Object.keys(response);
            
            const dropdown = document.getElementById("keySelect");
            result.forEach((key) =>  {
                
                var option = document.createElement("option");

                option.value = key;
                option.textContent = key;
                dropdown.appendChild(option);
            })

            /* 
            console.log("test")
            var key = document.getElementById("dropdown").value
            document.getElementById("result").innerHTML = result[key]
            result[key]
            */
        }) 
        .catch(error => {
            console.log("ERROR");
            console.error(error);
            document.getElementById("valueID").innerHTML = "Please submit a valid response.";
        });        
}

function finalFetch(){
    console.log("final Fetch");
    var url = document.getElementById("fetchInput").value;
    fetch(url)  
        .then(response => { 
            return response.json();
        })   
        .then(response => {
            //document.getElementById("valueID").innerHTML = response.activity;

            console.log("test")
            var key = document.getElementById("keySelect").value
            document.getElementById("result").innerHTML = result[key]
            result[key]
            
        }) 
        .catch(error => {
            console.log("ERROR");
            console.error(error);
            document.getElementById("valueID").innerHTML = "Please submit a valid response.";
        });
    
}

/* Sets up the main menu */
function setItUp(){
    const buttonOne = document.getElementById("button")
    buttonOne.style.transform = "translateY(-100%)";
    buttonOne.style.animation = "fadeOut 1s";
    setTimeout(() => {
        document.getElementById("button").style.display = "none";

        const menudiv = document.getElementById("menuDiv");
        menudiv.style.display = "inline";
        menuDiv.style.animation = "fadeIn 1s";
    }, 900);
    
    
}


// Changes the colour of the button
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

