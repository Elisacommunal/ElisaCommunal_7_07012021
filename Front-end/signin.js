const validation = document.getElementById("validate");

validation.addEventListener('click', (e)=>{
    e.preventDefault;
    formManagement()
})


function formManagement(){

    let formChecked = document.getElementById('formChecked').checkValidity();

    // Si le formulaire est faux on envoi une alerte
    if (formChecked == false) {
        alert('Merci de bien vouloir remplir tout les champs requis afin de valider votre commande');

    // sinon on crée un objet de récuperation des données de l'utilisateur
    }else{
        let contact = {
            email: document.getElementById('inputEmail').value,
            password: document.getElementById('inputPassword').value, 
            name: document.getElementById('inputName').value,
            firstName: document.getElementById('inputFirstName').value,
            profession: document.getElementById('inputProfession').value,
        };
        let sendData = fetch("http://localhost:3000/user/signup", {
            method: 'POST',
            body: JSON.stringify(contact),
            headers:{
                'Content-Type' : 'application/json',
            }
        })
        sendData.then( async response =>{

            try{// traitement de la reponse, récupération de l'id de confirmation du serveur
                let confirmation = await response.json();
                let confirmationId = confirmation.contactId;
                
                // création de variable avec contact et l'id récupéré
                let result = {
                    contact: contact,
                    confirmationId: confirmationId,
                }
                // si localStorage est défini on envoi result dans localStorage et on vide la selection en créant un tableau vide 
                //qu'on envoi dans localStorage et redirection page confirmation
            
                    window.location.href = "./index.html";

            } catch(error) {
                alert("Une erreur est survenue, veuillez retenter plus tard")
            }
        })
    }
}