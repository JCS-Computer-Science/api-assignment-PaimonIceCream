/* Global variables */
var globalJSON;
var removeBoolean;

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

            const unselectedOption = document.createElement("option");
            unselectedOption.id = "unselected";
            unselectedOption.value = "unselcted";
            unselectedOption.textContent = "Please Select a Key";
            document.getElementById("keySelect").appendChild(unselectedOption);

            let result = Object.keys(response);
            
            const dropdown = document.getElementById("keySelect");
            result.forEach((key) =>  {
                let option = document.createElement("option");
                option.id = key;
                option.value = key;
                option.textContent = key;
                dropdown.appendChild(option);
            })

            globalJSON = response;
            removeBoolean = true;
        }) 
        .catch(error => {
            console.log("ERROR");
            console.error(error);
            document.getElementById("valueID").innerHTML = "Please Submit a Valid Response";
            let nodeList = document.getElementsByTagName("option").length;
    
            for (var i = 0; i < nodeList; i++){
                let select = document.getElementById("keySelect");
                select.remove(0);
            }
        });        
}

function fetchChange(){
    if(removeBoolean == true){
        let select = document.getElementById("keySelect");
        select.remove(0);
        removeBoolean = false;
    }

    var whichKey = document.getElementById("keySelect").value;
    document.getElementById("valueID").innerHTML = globalJSON[whichKey];
    globalJSON[whichKey]
    console.log(globalJSON);
}

function addAPI(){
    let listAPI = document.getElementById("listAPI");

    let storeAPI = [document.createElement("p"), document.createTextNode(document.getElementById("APIadd").value)];
    storeAPI[0].className = "stored-value";
    storeAPI[0].ondblclick = () => removeP(event);
    storeAPI[0].style.color = "rgb(75, 19, 19)";

    listAPI.appendChild(storeAPI[0]);
    storeAPI[0].appendChild(storeAPI[1]);
}

function removeP(e){
    let listAPI = document.getElementById("listAPI");
    listAPI.removeChild(e.target);
}

function readMoreToggle(){
    var b = true;

    if(document.getElementById("menuDiv").style.display == "inline" && b == true){
        document.getElementById("menuDiv").style.display = "none"
        document.getElementById("read-more").style.display = "inline"
        console.log("description screen is present");
        b = false;
    }

    if(document.getElementById("menuDiv").style.display = "none" && b == true){
        document.getElementById("menuDiv").style.display = "inline"
        document.getElementById("read-more").style.display = "none"
        console.log("main screen is present");
        b = false;
    }
}

/* Sets up the main menu */
function setItUp(){
    const buttonOne = document.getElementById("mainButton")
    buttonOne.style.transform = "translateY(-100%)";
    buttonOne.style.animation = "fadeOut 1s";

    setTimeout(() => {
        document.getElementById("mainButton").style.display = "none";

        const menudiv = document.getElementById("menuDiv");
        menudiv.style.display = "inline";
        menuDiv.style.animation = "fadeIn 1s";
    }, 900);
}

/* Changes the colour of the button */
setInterval(() => {
    var letters = "0123456789ABCDEF";
    var color = '#';
    for(let i = 0; i < 6; i++){
        color += letters[Math.floor(Math.random() * 16)];
    }
    document.getElementById("mainButton").style.backgroundColor = color;

    letters = "0123456789ABCDEF";
    color = '#';
    for(let i = 0; i < 6; i++){
        color += letters[Math.floor(Math.random() * 16)];
    }
    document.getElementById("mainButton").style.borderColor = color;
    document.getElementById("welcome").style.borderColor = color;
}, 750)