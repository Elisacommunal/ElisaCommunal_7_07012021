const validation = document.getElementById("validate");
const idArticle = new URLSearchParams(window.location.search).get("id");
console.log(idArticle);

validation.addEventListener('click', (e)=>{
    e.preventDefault;
    formManagementComments()
})


function formManagementComments(){

    let formChecked = document.getElementById('formChecked').checkValidity();

    // Si le formulaire est faux on envoi une alerte
    if (formChecked == false) {
        alert("Merci de bien vouloir remplir tout les champs requis d'envoyer votre article");

    // sinon on crée un objet de récuperation des données de l'utilisateur
    }else{
        let comment = {
            id_article: idArticle,
            commentaire: document.getElementById('commentContent').value, 
        };
        const sendComment = fetch("http://localhost:3000/comment", {
            method: 'POST',
            body: JSON.stringify(comment),
            headers:{
                'Content-Type' : 'application/json',
            }
        })
        sendComment.then( async response =>{

            try{// traitement de la reponse, récupération de l'id de confirmation du serveur
                let confirmation = await response.json();
                console.log(confirmation);
                    window.location.href = "../article/accueil.html";

            } catch(error) {
                alert("Une erreur est survenue, veuillez retenter plus tard")
            }
        })
    }
}