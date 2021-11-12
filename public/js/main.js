let monIdTodo = document.getElementById("Todolist")
console.log(monIdTodo);

let input = document.querySelector(".ajout_tache")
console.log(input);

let ajoutBtnIcons = document.querySelector(".add-item")
console.log(ajoutBtnIcons);

let supprBtnIcons = document.querySelector(".deleteBtn")
console.log(supprBtnIcons);


ajoutBtnIcons.addEventListener("click", function(e){
    if(input.value.trim()){

        // Mon UL
        let monUl =  document.createElement("ul")
        monUl.classList.add("container_todo_list")
        // Div Liste de tâches
        let listeTaches = document.createElement("div")
        listeTaches.classList.add("liste_taches")
        //Li
        let mesLi = document.createElement("li")
        mesLi.innerHTML = input.value
        mesLi.classList.add("contenu_liste")
        //Bouton DIV
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
        //Le BOUTON QUI CHECK QUE LA TACHE EST FINI
        let poubelBtn = document.createElement("button")
        poubelBtn.classList.add("poubelle")
        poubelBtn.innerHTML = '<i class="fas fa-trash"></i>'

        //APPEND UN ENFANT A SON PARENT
        monUl.appendChild(listeTaches)
        listeTaches.appendChild(mesLi)
        listeTaches.appendChild(divButton)
        divButton.appendChild(verifBtn)
        divButton.appendChild(modifBtn)
        divButton.appendChild(poubelBtn)
        // console.log(monUl);
        //APPEND TOUT LES ÉLÉMENTS DANS LA MAIN DIV
        monIdTodo.appendChild(monUl)
        // console.log(monIdTodo);
        // console.log(monIdTodo);

        // FAIRE FONCTIONNER LES BOUTONS CHECK & POUBELLE
        listeTaches.addEventListener("click", function(e){
            // console.log(e.target);

            let contenu = e.target;
            if(contenu.classList[0] === "tache_fini"){
                
                let faire = contenu.parentElement;
                let faire2 = faire.parentElement;
                faire2.classList.add("line-through");
            }


        })

        //QUAND ON CLICK SUR Le BOUTONS, CELA VIDE LA VALEUR DU INPUT
        input.value = ""




    }
    

})