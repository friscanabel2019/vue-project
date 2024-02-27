 //Récuperation des éléments du DOM
 const firstName = document.getElementById('first-name');
 const lastName = document.getElementById('last-name');
 const message = document.getElementById('message');
 const errorMessage = document.getElementById('error-message');
 const commentList = document.getElementById('comment-list');
 const form = document.querySelector('form');

 form.addEventListener("submit", (event) => {
   //Affiche une erreur si le prénom / nom / message sont vides
   if (firstName.value === '' || lastName.value === '' || message.value === '') {
     showError();
   }

   //Sinon créer le commentaire
   else {
     createComment();
     deleteFields();
   }

   event.preventDefault();
 });

 //Affichage du message d'erreur
 function showError() {
   errorMessage.style.display = "block";
 }

 //Création du nouveau commentaire
 function createComment() {

   //Création des nouveaux éléments
   const newDiv1 = document.createElement('div');
   const newDiv2 = document.createElement('div');
   const newDiv3 = document.createElement('div');
   const newH3 = document.createElement('h3');
   const newP = document.createElement('p');

   //Récuperation des valeurs
   newTextH3 = document.createTextNode(firstName.value + ' ' + lastName.value);
   newTextP = document.createTextNode(message.value);

   //Récuperation du CSS
   newDiv1.className = 'flex space-x-4 text-sm text-gray-500';
   newDiv2.className = 'flex-1 py-10 border-t border-gray-200';
   newH3.className = 'font-medium text-gray-900';
   newDiv3.className = 'prose prose-sm mt-4 max-w-none text-gray-500';

   //Organisation des nouveaux éléments
   newDiv1.appendChild(newDiv2);
   newDiv2.appendChild(newH3);
   newDiv2.appendChild(newDiv3);
   newDiv3.appendChild(newP);
   newH3.appendChild(newTextH3);
   newP.appendChild(newTextP);

   //Publication du commentaire
   commentList.appendChild(newDiv1);
 }

 //Supression du contenu des champs
 function deleteFields() {
   firstName.value = '';
   lastName.value = '';
   message.value = '';
 }

   // Fonction pour ouvrir la page d'erreur 404
   function ouvrirPageErreur() {
    // Remplacez "votre_image_404.jpg" par le chemin vers votre propre image 404
    const urlImage404 = "votre_image_404.jpg";
    const texteErreur = "Désolé, la page que vous recherchez n'existe pas.";

    // Crée un nouvel élément d'image
    const image404 = document.createElement("img");
    
    image404.alt = "Erreur 404";

    // Crée un nouvel élément de titre
    const titreErreur = document.createElement("h1");
    titreErreur.textContent = "Erreur 404";

    // Ajoute l'image et le texte au corps de la page
    document.body.appendChild(titreErreur);
    document.body.appendChild(image404);
}

// Function to scroll to the top of the page
function scrollToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}

// Show/hide the scroll-to-top button based on scroll position
window.onscroll = function() {
  scrollFunction();
};

$(function() {
  $(window).scroll(function() {
      if ($(this).scrollTop() > 200) {
          $('#scrollUp').css('right', '10px'); // Affiche le bouton
      } else {
          $('#scrollUp').css('right', '-100px'); // Masque le bouton
      }
  });
});