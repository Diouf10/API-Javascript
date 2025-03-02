/**
 * Une API (Application Programming Interface, ou Interface de Programmation d'Applications) 
 * 
 * est un ensemble de règles et de protocoles qui permet à des logiciels de communiquer entre eux. 
 * Elle définit comment des applications ou des services peuvent s’échanger des données et interagir.
 */


// Comment récupérer les données d'une API
// Il nous faut une adresse URL qui pointe vers l'API.

// On va utiliser AJAX pour faire des requêtes HTTP.

// JSON (JavaScript Object Notation) 
    // est un format de données très utilisé pour échanger des données entre un serveur et un client.

// L'URL va nous renvoyer les données au format JSON.

// extension JSON Viewer Awesome pour Chrome

// lien code pen utilisation api  : https://codepen.io/believemy/pen/RwNrQVX









//--------------------  -------------------//


// avec AJAX

//***  Requête GET  ***//

// Créer une requête
let requete = new XMLHttpRequest(); // Créer un objet
requete.open('GET', url) //premier paramètre: GET ou POST, 
                         // 2e parmètre : notre url

  // GET Permet d'obtenir une ressource
  // POST permet d'envoyer une ressource

requete.responseType = 'json'; // Nous attendons du JSON
requete.send(); // Nous envoyons notre requête



// Dès qu'on reçoit une réponse, cette onction est executée
requete.onload = function() {
  if(requete.readyState === XMLHttpRequest.DONE) {
    if(requete.status === 200) {
        let reponse = requete.response; // on stocke la réponse
        //console.log(reponse);
        let prixEnEuro = reponse.CAD.last; 
      document.querySelector("#price_label").textContent = prixEnEuro;
        //console.log(prixEnEuro);
    }
  }
  else {
    alert(" Un problème est survenu, Veuillez revenir plus tard.")
  }
}








//--------------------  -------------------//


//*** Requête POST ***//

const url ='https://lesoublisdelinfo.com/api.php'

let requete = new XMLHttpRequest();
//requete.open('GET', url);

//requete.responseType ='json';
//requete.send();

// POST
requete.open('POST', url);
requete.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

requete.responseType = 'json';

requete.send('prenom=John');


requete.onload = function() {
  if(requete.readyState === XMLHttpRequest.DONE) {
    if(requete.status === 200) {
      let reponse = requete.response;
      console.log(reponse);
    }
    else {
    alert(" Un problème est survenu, Veuillez revenir plus tard.")
  }
  }
}






/////////////////////////  /////////////////////////


// Nous verrons les apis REst et GraphQL dans la suite du cours.