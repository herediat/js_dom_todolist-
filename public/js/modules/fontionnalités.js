import { monIdTodo } from "./main.js";
import { input } from "./main.js";
import { ajoutBtnIcons } from "./main.js";
import { supprBtnIcons } from "./main.js";

import { mesFiltres } from "./main.js";
import { filtre1 } from "./main.js";
import { filtre2 } from "./main.js";
import { filtre3 } from "main.js";

let supprBtnIcons = document.querySelector(".deleteBtn")




















//################### TOUT LES  EVENTS ################################
ajoutBtnIcons.addEventListener("click", function(e){
    if(input.value.trim()){

        // Mon UL
        let monUl =  document.createElement("ul")
        monUl.classList.add("container_todo_list")
        // Div Liste de tâches
        let listeTaches = document.createElement("div")
        listeTaches.classList.add("liste_taches")
        console.log(listeTaches);
        //Li
        let mesLi = document.createElement("li")
        mesLi.innerHTML = input.value
        mesLi.classList.add("contenu_liste")
        //Boutons DIV
        let divButton = document.createElement("div")
        divButton.classList.add("button")
        //Le BOUTON QUI CHECK QUE LA TACHE EST FINI
        let verifBtn = document.createElement("button")
        verifBtn.classList.add("tache_fini")
        verifBtn.innerHTML = '<i class="fas fa-check"></i>'
        //Le BOUTON QUI MODIFIE LA TACHE
        let modifBtn = document.createElement("button")
        modifBtn.classList.add("modifie_tache")
        modifBtn.innerHTML = '<i class="fas fa-edit"></i>'
        modifBtn.onclick = function(){
            modifFonctionne(mesLi)
        }
        //Le BOUTON QUI SUPPRIME LES ÉLÉMENTS 1 à 1
        let poubelBtn = document.createElement("button")
        poubelBtn.classList.add("poubelle")
        poubelBtn.innerHTML = '<i class="fas fa-trash"></i>'
        console.log(poubelBtn);

        //APPEND UN ENFANT A SON PARENT
        monUl.appendChild(listeTaches)
        listeTaches.appendChild(mesLi)
        listeTaches.appendChild(divButton)
        divButton.appendChild(verifBtn)
        divButton.appendChild(modifBtn)
        divButton.appendChild(poubelBtn)

        //APPEND TOUT LES ÉLÉMENTS DANS LA MAIN DIV
        monIdTodo.appendChild(monUl)


        // FAIRE FONCTIONNER LES BOUTONS CHECK, EDIT & POUBELLE

        listeTaches.addEventListener("click", function(e){
            let contenu = e.target;
            let arrContenu = Array.from(contenu.classList)
            if(arrContenu.includes('fa-check') || arrContenu.includes('tache_fini')){
                mesLi.classList.add("bg-blue")
                mesLi.classList.toggle("bg-white")
            } else if(arrContenu.includes('fa-edit') || arrContenu.includes('modifie_tache')){

            } else if(arrContenu.includes('fa-trash') || arrContenu.includes('poubelle')){
                mesLi.remove()
            }else{
                console.log("none");
            }
            

            
            //###########################################################


            // filtre1.addEventListener("click", function(e) {
            //     contenu = e.target;
            //     if (arrContenu != 'fa-check' || arrContenu != 'tache_fini'){
            //         listeTaches.remove()
                    
            //     }else{
            //         console.log("none");
            //     }
            // })

            filtre1.addEventListener("click", () => {
                if(mesLi.classList === "contenu_liste"){
                    mesLi.style.display = "none"
                    
                }
            })

            filtre2.addEventListener("click", () => {
                if(mesLi.classList.contains("bg-blue") == true){
                    mesLi.style.display = "none"
                    
                }
            })

            filtre3.addEventListener("click", () => {
                if(mesLi.classList.contains("bg-blue") == true){
                    mesLi.style.display = "none"
                    
                }
            })
        })

        //QUAND ON CLICK SUR Le BOUTONS "+", CELA VIDE LA VALEUR DU INPUT
        input.value = ""
    }
})


// ################## BOUTON QUI MODIFIE LA TACHE ###################
function modifFonctionne(e){
    let modifValeur = prompt("Wesh Bien ou Bien? Y'a moyen tu modifies ta Tâche steplait ??", e.firstChild.nodeValue)
    e.firstChild.nodeValue = modifValeur
}

//########################## BOUTON QUI SUPPRIME LA TACHE ################################
function supprBtnIconsElements(){
    let prendreMonUl = document.querySelectorAll(".container_todo_list")
    for( let i = 0; i < prendreMonUl.length; i++){
        prendreMonUl[i].remove();
    }
}
