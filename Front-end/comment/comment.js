// CONSTANTE
const urlComments = "http://localhost:3000/comment/";
const idArticleComment = new URLSearchParams(window.location.search).get("id");
const urlApiIdComments = urlComments + idArticleComment + "/comment";


fetch(urlApiIdComments, {
    method: 'GET',
    headers: {
        'Authorization': 'Bearer ' + sessionStorage.getItem("token")
    }
})
    .then((response) =>
        response.json()
    .then((data) => {
        console.log(data);
        // `for...of` loop
    for (const [key, value] of Object.entries(data)) {
        console.log(`${key}: ${value}`);
        templateComment(value)
}
        
        })
    )
    .catch((err) => console.log('Erreur : ' + err));
// FUNCTIONS

 
function setGeneral(container, articleElement, selector) {
    let element = container.querySelector(selector);
    // si "image" contenu dans le selector ajouter src + alt
    if( selector.includes("image") ){
        element.src = articleElement;
        element.alt = articleElement;
    // sinon si "image" contenu dans le selector ajouter href
    }else if(selector.includes("link")){
        element.href += articleElement;
    //
    }else{
    element.innerHTML = articleElement;
    }
}



function templateComment(comment) {
    let idComment = document.getElementById("comment-container");
    let baseContainer = document.querySelector('.container-comment');
    // clonage pour réutiliser un template créé dans le HTML
    let container = baseContainer.cloneNode(true);
  console.log(comment); 
        setGeneral( container, comment.commentaire, '.comment-content' ) 
        //setGeneral( container, comment.image, '.comment-image')
 
    
    // appel des fonctions avec leur bon paramètres
    
    // suppression du display-none
    container.classList.remove('d-none')
    container.classList.remove('container-comment')

    // ajout des données au template de base
    idComment.append(container)
}
