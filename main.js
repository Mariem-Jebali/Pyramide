// ce code JS Pour afficher le résultat dans le navigateur

const SYMBOLE = "#";
const RETOUR_LIGNE = "<br>";

function lireNombre (id) {
    var Nombre = document.getElementById(id);
    var nNombre = Nombre.value;
    return nNombre;
}

function ConstruireTriangle(nbLignes) {
    //   strTriangle Chaine de caractères représentant le triangle
    var strTriangle = "";
    for(let i=1; i<= nbLignes; i++){
        let str = ' '.repeat(nbLignes-i);
        let str2 = '*'. repeat(i*2 -1);
        strTriangle += str + str2 + str+ RETOUR_LIGNE;
    }
    return strTriangle;
}

function afficherTriangle(triangle) {
    var MonTriangle = document.getElementById("triangle");
    MonTriangle.innerHTML = triangle;
}

function onClickDessineTriangle() {
    var nbLignes = lireNombre("nbLignes");
    var strTriangle = ConstruireTriangle(nbLignes);
    afficherTriangle(strTriangle);
}