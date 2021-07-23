// CONSTANTE
const urlApi = "http://localhost:3000/article/";
const searchParams = new URLSearchParams(window.location.search).get("id");
const urlApiId = urlApi + searchParams;
//fonction
// fonction pour faire la mise en page de la card product.html
function displayArticle(article) {
    let containerArticle = document.getElementById('container-prod');
    let container = document.querySelector('.container-product');

        //setGeneral( container, article.profilePic, '.article-profilePic' ) 
        setGeneral( container, article.name, '.article-userName' ) 
        setGeneral( container, article.titre, '.article-title' ) 
        setGeneral( container, article.contenu, '.article-content' ) 
        setGeneral( container, article.id, '.article-link')
        //setGeneral( container, article.image, '.article-image')
 
    // suppression du display-none
    container.classList.remove('d-none');
    // ajout des données au template de base
    containerArticle.append(container);
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