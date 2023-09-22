"use strict"; //on ne tolere aucune erreur avec ceci

//un varible est composerdu nom de la variable et de la valer nom=valeur 
/*
commentaire 
*/
//commentaire sur une ligne 
var prenom; //creation d une etiquette pour mettre une variable attention variable peut aussi etre let
prenom="rv";
console.log(prenom);
prenom="sophie";//on peut changer le nom de la valeur comme ca 
console.log(prenom)
//string
let nom="durant";//je suis une chaine de caractère (string)
console.log(typeof nom);//typeof pour savoir si la valeur est string ou number

//number
let dateNaissance=1998//je suis un nombre (number) peut etre un chiffre decimal ou en chiffre sans virgule 
let dateActu=2023;
let age=dateActu-dateNaissance;
console.log(age);
//concatenation addition de diferentes valeur 
console.log(nom+" "+prenom);
console.log("je suis "+nom+" "+prenom+" mon age :"+age);
//boolean variable qui a en valeur true ou false 
let ouvert=true;//false 

let total= 15.3; //type number
let totalbis="15.3";

const tfi =false // variable non modifiable