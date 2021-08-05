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

            try{// traitement de la reponse, récupération de la reponse de confirmation du serveur
                let confirmation = await response.json();
                console.log(confirmation);
                    sessionStorage.setItem("token", confirmation.token)
                    window.location.href = "../article/accueil.html";
            } catch(error) {
                alert("Une erreur est survenue, veuillez retenter plus tard")
            }
        })
    }
}