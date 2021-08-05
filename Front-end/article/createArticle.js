const validation = document.getElementById("validate");

validation.addEventListener('click', (e)=>{
    e.preventDefault;
    formManagementArticle()
})


function formManagementArticle(){

    let formChecked = document.getElementById('formChecked').checkValidity();

    // Si le formulaire est faux on envoi une alerte
    if (formChecked == false) {
        alert("Merci de bien vouloir remplir tout les champs requis d'envoyer votre article");

    // sinon on crée un objet de récuperation des données de l'utilisateur
    }else{
        let article = {
            titre: document.getElementById('articleTitle').value,
            contenu: document.getElementById('articleContent').value, 
        };
        let sendData = fetch("http://localhost:3000/article", {
            method: 'POST',
            body: JSON.stringify(article),
            headers:{
                'Content-Type' : 'application/json',
                'Authorization': 'Bearer ' + sessionStorage.getItem("token")
            }
        })
        sendData.then( async response =>{

            try{// traitement de la reponse, récupération de l'id de confirmation du serveur
                let confirmation = await response.json();
                let confirmationId = confirmation.articleId;
                
                // création de variable avec contact et l'id récupéré
                let result = {
                    article: article,
                    confirmationId: confirmationId,
                }
                // si localStorage est défini on envoi result dans localStorage et on vide la selection en créant un tableau vide 
                //qu'on envoi dans localStorage et redirection page confirmation
            
                    window.location.href = "../article/accueil.html";

            } catch(error) {
                alert("Une erreur est survenue, veuillez retenter plus tard")
            }
        })
    }
}