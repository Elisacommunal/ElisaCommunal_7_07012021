// CONSTANTE
const urlArticles = "http://localhost:3000/article/"


fetch(urlArticles)
    .then((response) =>
        response.json()
    .then((data) => {
        console.log(data);
        // `for...of` loop
for (const [key, value] of Object.entries(data)) {
    console.log(`${key}: ${value}`);
    templateArticles(value)
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



function templateArticles(article) {
    let idArticles = document.getElementById("id-article");
    let baseContainer = document.querySelector('.container-articles');
    // clonage pour réutiliser un template créé dans le HTML
    let container = baseContainer.cloneNode(true);
  console.log(article);
        //setGeneral( container, article.profilePic, '.article-profilePic' ) 
        setGeneral( container, article.name, '.article-userName' ) 
        setGeneral( container, article.titre, '.article-title' ) 
        setGeneral( container, article.contenu, '.article-content' ) 
        setGeneral( container, article.id, '.article-link')
        //setGeneral( container, article.image, '.article-image')
 
    
    // appel des fonctions avec leur bon paramètres
    
    // suppression du display-none
    container.classList.remove('d-none')
    container.classList.remove('container-articles')

    // ajout des données au template de base
    idArticles.append(container)
    //document.body.appendChild(container);
    console.log("test");
    console.log(container);
}
