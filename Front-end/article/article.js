// CONSTANTE
const urlApi = "http://localhost:3000/article/";
const searchParams = new URLSearchParams(window.location.search).get("id");
const urlApiId = urlApi + searchParams;

//fonction
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


function displayArticle(article) {
    let idArticle = document.getElementById('id-article');
    let container = document.querySelector('.container-article');

        //setGeneral( container, article.profilePic, '.article-profilePic' ) 
        setGeneral( container, article.name, '.article-userName' ) 
        setGeneral( container, article.titre, '.article-title' ) 
        setGeneral( container, article.contenu, '.article-content' ) 
        setGeneral( container, article.id, '.article-link')
        //setGeneral( container, article.image, '.article-image')
 
    // suppression du display-none
    container.classList.remove('d-none')
    container.classList.remove('container-article')
    // ajout des données au template de base
    idArticle.append(container)
}

// UTILITIES

fetch(urlApiId)
    .then((response) => 
        response.json()
    .then((data) => {
      displayArticle(data);
        // on écoute le click du bouton
    })
      .catch((err) => ("erreur :" + err)));