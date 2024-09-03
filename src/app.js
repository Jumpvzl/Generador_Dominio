/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];

/*
thegreatjogger.com =  [0][0][0]
thegreatracoon.com =  [0][0][1]
ourgreatjogger.com =  [1][0][0]
ourgreatracoon.com =  [1][0][1]
thebigjogger.com   =  [0][1][0]
thebigracoon.com   =  [0][1][0]
ourbigjogger.com   =  [1][1][0]
ourbigracoon.com   =  [1][1][1]
*/

//Se le agrego un nombre a la funcion
window.onload = function Generador_De_Dominios() {
  //write your code here
  let cadena = " ";
  for (let i = 0; i <= pronoun.length - 1; i++) {
    for (let a = 0; a <= adj.length - 1; a++) {
      for (let b = 0; b <= noun.length - 1; b++) {
        cadena += pronoun[i] + adj[a] + noun[b] + ".com<br>";
      }
    }
  }
  const LIST = document.getElementById("list");
  LIST.innerHTML = '<li class="list-group-item">' + cadena + "</li>";
};
