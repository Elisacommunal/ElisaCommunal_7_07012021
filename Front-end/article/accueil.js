// CONSTANTE
const urlArticles = "http://localhost:3000/article/"


fetch(urlArticles)
    .then((response) =>
        response.json()
    .then((data) => {
        console.log(data);
        templateArticles(data)
        })
    )
    .catch((err) => console.log('Erreur : ' + err));
// FUNCTIONS

// fonction qui fait une demande pour avoir le bon URL suivant ID







// fonction pour initialiser les cards 
function setGeneral(container, articleElement, selector) {
    let element = container.querySelector(selector);
    // si "image" contenu dans le selector ajouter src + alt
    if( selector.includes("image") ){
        element.src = articleElement;
        element.alt = articleElement;
    // sinon si "image" contenu dans le selector ajouter href
    }else if(selector.includes("link")){
        element.href += articleElement;
    //sinon utiliser seulement camElement
    }else{
    element.innerHTML = articleElement;
    }
}



function templateArticles(data) {
    let containerArticles = document.getElementById("id-article");
    let baseContainer = document.querySelector('.container-articles');
    // clonage pour réutiliser un template créé dans le HTML
    let container = baseContainer.cloneNode(true);
    for (let article of data){
        //setGeneral( container, article.profilePic, '.article-profilePic' ) 
        setGeneral( container, article.name, '.article-userName' ) 
        setGeneral( container, article.titre, '.article-title' ) 
        setGeneral( container, article.contenu, '.article-content' ) 
        setGeneral( container, article.id, '.article-link')
        //setGeneral( container, article.image, '.article-image')
 
    }
    // appel des fonctions avec leur bon paramètres
    
    // suppression du display-none
    container.classList.remove('d-none')
    // ajout des données au template de base
    containerArticles.append(container)
}
