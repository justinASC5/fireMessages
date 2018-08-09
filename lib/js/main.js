const database = firebase.database().ref();
database.on("child_added", displayMessage);

const usernameElement = document.getElementById("username");
const messageElement = document.getElementById("message");
const button = document.getElementById("submitButton");
button.addEventListener("click",updateDB);

//Set database object here


/**
 * Updates the database with the username and message.
 */
function updateDB(event){
    event.preventDefault();
    const username = usernameElement.value;
    const message = messageElement.value;

    usernameElement.value = "";
    messageElement.value  = "";

    const userData = {
        NAME: username,
        MESSAGE: message
    }

    database.push(userData);
    //Update database here

}

// Set database "child_added" event listener here

function displayMessage(rowData) {
    const row = rowData.val();
    const messageBox = document.querySelector(".allMessages");
    const name = row.NAME;
    const message = row.MESSAGE;

    const displayedStuff = document.createElement('p');
    displayedStuff.innerText = `${name}: ${message}`;
    messageBox.appendChild(displayedStuff);
  
}