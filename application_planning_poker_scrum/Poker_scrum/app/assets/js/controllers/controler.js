let number_of_players;
let voting_type;
//fonctions utilisés------------------------------------------------------------------------
/**
 * Vérifie si tous les éléments d'un tableau sont identiques.
 * @param {Array} tableau - Le tableau à vérifier.
 * @returns {boolean} Retourne true si tous les éléments du tableau sont identiques ou si le tableau est vide, sinon false.
 */
function sontTousEgaux(tableau) {
    // Vérifie si le tableau est vide
    if (tableau.length === 0) {
        return true;
    }

    // Stocke la première valeur du tableau pour la comparer aux autres
    const premierElement = tableau[0];

    // Parcourt le tableau à partir du deuxième élément
    for (let j = 1; j < tableau.length; j++) {
        // Si un élément est différent du premier, retourne false
        if (tableau[j] !== premierElement) {
            return false;
        }
    }

    // Si tous les éléments sont égaux, retourne true
    return true;
}

/**
 * Vérifie si tous les éléments d'un tableau sont égaux à une valeur donnée.
 * @param {Array} tableau - Le tableau à vérifier.
 * @param {any} value - La valeur à laquelle tous les éléments du tableau doivent être égaux.
 * @returns {boolean} Retourne true si tous les éléments du tableau sont égaux à la valeur donnée, sinon false.
 */
function equal_value(tableau, value) {
    for (let j = 0; j < tableau.length; j++) {
        // Si un élément est différent de la valeur, retourne false
        if (tableau[j] !== value) {
            return false;
        }
    }
    // Si tous les éléments sont égaux à la valeur, retourne true
    return true;
}

/**
 * Compte le nombre d'éléments qui ne sont pas NaN dans un tableau donné.
 * @param {Array} tableau - Le tableau à vérifier.
 * @returns {number} Retourne le nombre d'éléments qui ne sont pas NaN dans le tableau.
 */
function is_not_nan(tableau) {
    var not_nan = 0;
    for (var n = 0; n < tableau.length; n++) {
        if (!isNaN(tableau[n])) {
            not_nan++;
        }
    }
    return not_nan;
}

/**
 * Calcule la moyenne des éléments numériques d'un tableau donné, en ignorant les éléments NaN.
 * @param {Array} tableau - Le tableau contenant les valeurs pour calculer la moyenne.
 * @returns {number} Retourne la moyenne des valeurs numériques du tableau.
 */
function calc_moyenne(tableau) {
    var element_number = is_not_nan(tableau);
    var sum = 0;

    for (var n = 0; n < tableau.length; n++) {
        if (!isNaN(tableau[n])) {
            sum = sum + parseInt(tableau[n]);
        }
    }

    var value = sum / element_number;
    return value;
}
/**
 * Récupère le type de vote stocké dans le localStorage.
 * @returns {string|null} Retourne le type de vote stocké dans le localStorage, ou null s'il n'est pas défini.
 */
function getVotingType() {
    return localStorage.getItem("voting_type");
}

/**
 * Récupère l'objet de jeu actuel stocké dans le localStorage.
 * @returns {any} Retourne l'objet de jeu actuel stocké dans le localStorage.
 */
function getGameObj() {
    return localStorage.getItem("current_game");
}

/**
 * Vide le fond des divs correspondant aux joueurs dans une interface utilisateur.
 * @param {number} nbr_players - Le nombre de joueurs dont les divs doivent être vidés.
 */
function vider_div(nbr_players) {
    for (var j = 1; j <= nbr_players; j++) {
        let x = "p°" + j; // Construction de l'identifiant de la div du joueur
        let divToChange = document.getElementById(x); // Récupération de l'élément div par son ID

        // Réinitialisation de l'image de fond de la div du joueur
        divToChange.style.backgroundImage = null;
    }
}
//-----------------------------------------------------------------------------------------------------------------

//############################## fontion de creation des div #######################################//
/**
 * Crée des éléments HTML pour représenter les cases des joueurs dans une interface utilisateur.
 */
function create_case_div() {
    /**
     * Récupère le nombre de joueurs stocké dans le localStorage.
     * @returns {string|null} Retourne le nombre de joueurs stocké dans le localStorage sous forme de chaîne de caractères, ou null s'il n'est pas défini.
     */
    function getNumberOfPlayers() {
        return localStorage.getItem('number_of_players');
    }
    number_of_players = getNumberOfPlayers();
    // Sélection de l'élément parent
    var enfants = document.querySelectorAll('.player_affichage > div');
    var parent = document.getElementById('div_c');
    var name = [];
    var game = JSON.parse(localStorage.getItem('current_game'));
    let gameTasks = game._tasks;
    gameTasks.forEach(task => {
        tache.push(task._name)
    });
    const allPlayers = game._players;
    allPlayers.forEach(player => {
        name.push(player._name);
    });
    // Créer un tableau pour stocker les div
    var divs = [];
    // Parcourir les enfants et appliquer un style à chacun
    for (var i = 0; i < number_of_players; i++) {
        //################ case player ######################################################
        enfants[i].style.width = "10%";
        enfants[i].style.height = "205px";
        enfants[i].style.position = "absolute";
        enfants[i].style.top = "5%";
        enfants[i].style.left = (8 + i * 12) + "%"; //ajouter une marge pour éviter les superpositions
        enfants[i].style.display = "inline-block";
        enfants[i].style.borderRadius = "20px";
        enfants[i].style.border = "2px solid #ff2770";
        enfants[i].style.boxShadow = "0 0 5px #ff2770";
        //################# name player #######################################################
        div_name = document.createElement("div");
        p_name = document.createElement("p");
        p_name.innerHTML = name[i];
        div_name.appendChild(p_name);
        //div_name.textContent = name[i] + " " + (i + 1);
        div_name.style.textAlign = "center";
        div_name.style.justifyContent = "center";
        div_name.style.margin = "auto";
        div_name.style.width = "7%";
        div_name.style.height = "24px";
        div_name.style.position = "absolute";
        div_name.style.top = "86%";
        div_name.style.left = (9.5 + i * 12) + "%"; //ajouter une marge pour éviter les superpositions
        div_name.style.display = "flex";
        div_name.style.borderRadius = "4px";
        div_name.style.border = "2px solid #ff2770";
        div_name.style.boxShadow = "0 0 5px #ff2770";
        //divs.push(div_name);
        parent.appendChild(div_name);
    }
}
//###################################### fonction de voting de type strict #################################################################
//cas de type de voting = strict
let dictionnaire = {};
let tache = [];
function game() {
    let i = 1; // indice pour le nbr des joueurs
    let y = 0; // indice pour le nbr des tâches
    let carte = []; // tableau dans lequels on stcke les valeurs des cartes choisis d'après les joueurs
    // ces 2 variables pour l'enregistrements dans un dictionnaire afin d'afficher les résultats des votes
    //------------
    let task;
    let value;
    //-------------
    const divTrigger1 = document.getElementById('n°1');
    const divTrigger2 = document.getElementById('n°2');
    const divTrigger3 = document.getElementById('n°3');
    const divTrigger5 = document.getElementById('n°5');
    const divTrigger8 = document.getElementById('n°8');
    const divTrigger13 = document.getElementById('n°13');
    const divTrigger20 = document.getElementById('n°20');
    const divTrigger40 = document.getElementById('n°40');
    const divTrigger100 = document.getElementById('n°100');
    const divTriggerDK = document.getElementById('n°DK');
    const divTriggerCoffee = document.getElementById('n°coffee');
    const validation = document.getElementById('validation');
    const tache_p = document.getElementById('tache');

    //########### affichage des tache dans la bare ########################################################################
    /**
     * Affiche le contenu de la tâche spécifique dans un élément HTML.
     * @param {number} index - L'index de la tâche à afficher.
     */
    function afficherTache(index) {
        tache_p.textContent = tache[index];
    }
    voting_type = getVotingType();
    //###################################################################################################################

    //############### fonction pour changer les background des div ######################################################
        /**
     * Modifie le fond d'une div spécifique en utilisant l'URL fournie.
     * @param {HTMLElement} divTrigger - Élément HTML déclencheur (généralement une <div>).
     * @param {number} index - Index numérique pour identifier la div à modifier.
     * @param {string} url - URL de l'image à utiliser comme fond pour la div.
     * @returns {void}
     */
    function change_carte_div(divTrigger, index, url) {
        let x = "p°" + index;
        let divToChange = document.getElementById(x);
        divToChange.style.backgroundImage = url;
        divToChange.style.backgroundSize = "contain";
        carte[index - 1] = divTrigger.id.slice(2,);
    }
    //#####################################################################################################################
    // Initialisation de la première tâche au chargement du jeu
    afficherTache(y);
    //########## listner sur les cartes pour remplir les div ##############################################################
    //######### CARTE 1 ################################
    /**
     * Écouteur d'événements pour le clic sur l'élément divTrigger1 afin de changer le fond d'une div.
     * @listens divTrigger1~click
     */
    divTrigger1.addEventListener('click', function () {
        change_carte_div(divTrigger1, i, "url('./assets/img/n°1.png')");
    });
    //######### CARTE 2 ################################
    /**
     * @listens divTrigger2~click
     */
    divTrigger2.addEventListener('click', function () {
        change_carte_div(divTrigger2, i, "url('./assets/img/n°2.png')");
    });
    ////######### CARTE 3 ################################
    /**
     * @listens divTrigger3~click
     */
    divTrigger3.addEventListener('click', function () {
        change_carte_div(divTrigger3, i, "url('./assets/img/n°3.png')");
    });
    ////######### CARTE 5 ################################
    /**
     * @listens divTrigger5~click
     */
    divTrigger5.addEventListener('click', function () {
        change_carte_div(divTrigger5, i, "url('./assets/img/n°5.png')");
    });
    ////######### CARTE 8 ################################
    /**
     * @listens divTrigger8~click
     */
    divTrigger8.addEventListener('click', function () {
        change_carte_div(divTrigger8, i, "url('./assets/img/n°8.png')");
    });
    ////######### CARTE 13 ################################
    /**
     * @listens divTrigger13~click
     */
    divTrigger13.addEventListener('click', function () {
        change_carte_div(divTrigger13, i, "url('./assets/img/n°13.png')");
    });
    ////######### CARTE 20 ################################
    /**
     * @listens divTrigger20~click
     */
    divTrigger20.addEventListener('click', function () {
        change_carte_div(divTrigger20, i, "url('./assets/img/n°20.png')");
    });
    ////######### CARTE 40 ################################
    /**
     * @listens divTrigger40~click
     */
    divTrigger40.addEventListener('click', function () {
        change_carte_div(divTrigger40, i, "url('./assets/img/n°40.png')");
    });
    ////######### CARTE 100 ################################
    /**
     * @listens divTrigger100~click
     */
    divTrigger100.addEventListener('click', function () {
        change_carte_div(divTrigger100, i, "url('./assets/img/n°100.png')");
    });
    ////######### CARTE DN ################################
    /**
     * @listens divTriggerDK~click
     */
    divTriggerDK.addEventListener('click', function () {
        change_carte_div(divTriggerDK, i, "url('./assets/img/DN.png')");
    });
    ////######### CARTE coffee ################################
    /**
     * @listens divTriggerCoffee~click
     */
    divTriggerCoffee.addEventListener('click', function () {
        change_carte_div(divTriggerCoffee, i, "url('./assets/img/break_coffe.png')");
    });
    //#####################################################################################################################

    validation.addEventListener('click', function () {
        //###### si le type de voting chosie = strict #####################################################################
        let x = "p°" + i;
        let divToChange = document.getElementById(x);
        alert("player " + i + " ,your turn is off");
        i++; // Increment i for the next iteration
        //#### si les taâches sont terminées#########
        if (i == parseInt(number_of_players) + 1) {
            alert("end of voting for this task");
            i = null;
            //#################################################################################################################
            if (voting_type == "strict") {
                //---------- si tous les cartes sont égaux, on passe à l'autre tâche ------------------------
                if (sontTousEgaux(carte, carte.length) == true) {
                    //--------- si tous les cartes sont des valeurx numérique -------------------------------
                    if (carte[0] != "DK" & carte[0] != "coffee") {
                        task = tache[y];
                        value = carte[0];
                        // Ajout des valeurs au dictionnaire
                        dictionnaire[task] = value;
                        alert("next task")
                        //vider tous les div pour les remplir vc les votes pour la tâche prochaine
                        vider_div(number_of_players);
                        i = 1; //réinitialise le i
                        y++;  //passer à la tâche prochaine
                        afficherTache(y);
                    } else if (carte[0] == "DK") {
                        //-------- vérifier si tous les joueurs choisissent la carte "?" ------------------------
                        alert("decide again, the card '?' isn't an answer")
                        vider_div(number_of_players);
                        i = 1;
                        afficherTache(y);
                    }
                } else {
                    alert("vots are different, repeat voting");
                    alert("remember, you choosed the strict type of voting, cartes must be equals")
                    vider_div(number_of_players);
                    i = 1;
                    afficherTache(y);
                }
            }
            if (voting_type == "moyenne") {
                //##### vérifier si tous les joueurs choisissent la carte "?" ############################
                if (equal_value(carte, "DK") == false & equal_value(carte, "coffee") == false) {
                    task = tache[y];
                    var sum = 0;
                    var not_nan = 0;
                    for (var n = 0; n < carte.length; n++) {
                        if (!isNaN(carte[n])) {
                            sum = sum + parseInt(carte[n]);
                            not_nan++;
                        }
                    }
                    if (not_nan > 0) {
                        value = parseInt(sum / not_nan);
                        dictionnaire[task] = value;
                        alert("next task");
                        vider_div(number_of_players);
                        i = 1;
                        y++;
                        afficherTache(y);
                    }
                } else if (equal_value(carte, "DK") == false) {
                    alert("decide again, the card '?' isn't an answer");
                    vider_div(number_of_players);
                    i = 1;
                    afficherTache(y);
                }
            }
            if (equal_value(carte, "coffee")) {
                vider_div(number_of_players);
                i = 1;
                afficherTache(y);
                const bord_table = document.getElementById("bord_table");
                const startTimerButton = document.getElementById('start-timer');
                const timerDisplay = document.getElementById('timer-display');
                const x = document.getElementById('timer-container');
                const coffee = document.getElementById('loader');
                bord_table.style.display = "none";
                coffee.style.display = "flex";
                x.style.display = "flex";
                startTimerButton.addEventListener('click', () => {
                    const hoursInput = document.getElementById('hours');
                    const minutesInput = document.getElementById('minutes');

                    const hours = parseInt(hoursInput.value) || 0;
                    const minutes = parseInt(minutesInput.value) || 0;

                    let totalSeconds = (hours * 60 * 60) + (minutes * 60);
                    let secondsRemaining = totalSeconds;

                    const timerInterval = setInterval(() => {
                        const hoursRemaining = Math.floor(secondsRemaining / 3600);
                        const minutesRemaining = Math.floor((secondsRemaining % 3600) / 60);
                        const seconds = secondsRemaining % 60;

                        timerDisplay.textContent = `${hoursRemaining.toString().padStart(2, '0')}:${minutesRemaining.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

                        if (secondsRemaining <= 0) {
                            clearInterval(timerInterval);
                            timerDisplay.textContent = 'Timer Finished!';
                            x.style.display = "none";
                            coffee.style.display = "none";
                            bord_table.style.display = "flex";
                            alert("continue your game")
                        } else {
                            secondsRemaining--;
                        }
                    }, 1000);
                });
            }
            if (y == tache.length) {
                const result = document.getElementById("result_button");
                alert("end of tasks, look at your results");
                validation.style.display = "none";
                result.style.display = "flex";
            }
        };
    });
}
const startVoting = document.getElementById("start_voting")
if (startVoting) {
    //############## Hide the button 'start voting' after a clic on it ####################################//
    startVoting.addEventListener("click", function () {
        this.style.display = "none";
    });
    //#####################################################################################################//
    document.getElementById("result_button").addEventListener("click", function () {
        const bord_table = document.getElementById("bord_table");
        bord_table.style.display = "none";
        const table_result = document.getElementById("table_result")

        // Sélection de l'élément où le tableau sera ajouté
        const tableauContainer = document.getElementById('tableauContainer');
        tableauContainer.style.display = "flex";
        // Création de la table
        const tableau = document.createElement('table');
        tableau.classList.add('table'); // Ajoutez des classes CSS si nécessaire

        // Création de l'en-tête du tableau
        let headerRow = tableau.insertRow();
        let tacheHeader = document.createElement('th');
        tacheHeader.textContent = 'Tâche';
        headerRow.appendChild(tacheHeader);

        let difficulteHeader = document.createElement('th');
        difficulteHeader.textContent = 'Difficulté';
        headerRow.appendChild(difficulteHeader);

        // Remplissage du tableau avec les données du dictionnaire
        for (let [task, difficulty] of Object.entries(dictionnaire)) {
            let row = tableau.insertRow();

            let cellTache = row.insertCell();
            cellTache.textContent = task;

            let cellDifficulte = row.insertCell();
            cellDifficulte.textContent = difficulty;
        }
        // Ajout du tableau au conteneur HTML
        tableauContainer.appendChild(tableau);

        const game = JSON.parse(localStorage.getItem('current_game'));
        const tasksArray = [];
        tasksArray.push({
            tasks: []
        });
        tasksArray.push({
            players: []
        });

        tasksArray.push({
            started_at: game._start_at,
            ended_at: new Date(),
        });

        game._players.forEach(player => {
            tasksArray[1].players.push({
                name: player._name,
            });
        });

        for (let [task, difficulty] of Object.entries(dictionnaire)) {
            tasksArray[0].tasks.push({
                name: task,
                difficulty: difficulty
            });
        }
        // Convert the array to JSON
        const jsonString = JSON.stringify(tasksArray, null, 2);

        // Create a Blob with the JSON content
        const jsonBlob = new Blob([jsonString], { type: 'application/json' });

        // Create a download link
        const downloadLink = document.createElement('a');
        downloadLink.href = URL.createObjectURL(jsonBlob);
        downloadLink.download = 'tasks.json';

        // Append the link to the document
        document.body.appendChild(downloadLink);

        // Trigger a click on the link to start the download
        downloadLink.click();

        // Remove the link from the document
        document.body.removeChild(downloadLink);
    });
}
/**
 * Stocke les valeurs des éléments de formulaire dans le stockage local.
 * @returns {void}
 */
function storeValue() {
    // Récupère la valeur du champ "number_of_players" et la stocke dans le localStorage
    let number_of_players = document.getElementById("number_of_players").value;
    localStorage.setItem("number_of_players", number_of_players);

    // Récupère la valeur du champ "voting_type" et la stocke dans le localStorage
    let voting_type = document.getElementById("voting_type").value;
    localStorage.setItem("voting_type", voting_type);
}

/**
 * Crée des champs de saisie pour les joueurs en fonction du nombre spécifié et les ajoute au conteneur spécifié.
 * @returns {void}
 */
function createPlayerInputs() {
    // Récupère le nombre de joueurs à créer à partir de la valeur entrée dans le champ 'number_of_players'
    var numOfPlayers = parseInt(document.getElementById('number_of_players').value);

    // Récupère le conteneur où seront ajoutés les champs de saisie des joueurs
    var playersContainer = document.getElementById('players-container');

    // Réinitialise le contenu du conteneur
    playersContainer.innerHTML = '';

    // Affiche le bouton (s'il était caché précédemment)
    var btn = document.getElementById('btn');
    btn.style.display = "flex";

    // Boucle pour créer les champs de saisie pour chaque joueur
    for (var i = 0; i < numOfPlayers; i++) {
        var playerInput = document.createElement('div');
        var label = document.createElement('label');

        // Configure l'étiquette associée au champ de saisie du joueur
        label.setAttribute('for', `player-${i + 1}`);
        label.textContent = `Joueur ${i + 1} :`;

        var input = document.createElement('input');

        // Configure le champ de saisie du joueur
        input.setAttribute('type', 'text');
        input.setAttribute('id', `player-${i + 1}`);
        input.setAttribute('name', `player-${i + 1}`);
        input.setAttribute('required', ''); // Rend le champ de saisie requis

        // Ajoute l'étiquette et le champ de saisie au conteneur du joueur
        playerInput.appendChild(label);
        playerInput.appendChild(input);

        // Ajoute le conteneur du joueur au conteneur principal
        playersContainer.appendChild(playerInput);
    }
}
/**
 * Initialise le jeu en stockant les valeurs des éléments de formulaire, en créant les joueurs,
 * en chargeant les tâches à partir d'un fichier JSON et en sauvegardant l'état actuel du jeu.
 * @function initGame
 * @returns {void}
 */
function initGame() {
    // Stocke les valeurs des éléments de formulaire dans le stockage local
    storeValue();

    // Récupère les éléments de saisie des joueurs depuis le conteneur HTML
    const playersContainer = document.querySelector('#players-container');
    const players = playersContainer.querySelectorAll('input');

    // Crée les joueurs
    const votingType = getVotingType();
    let game = Game.getInstance(votingType);

    // Ajoute chaque joueur créé au jeu
    for (let i = 0; i < players.length; i++) {
        const player = new Player(players[i].value);
        game.addPlayer(player);
    }

    // Charge les tâches à partir d'un fichier JSON si un fichier est sélectionné
    const input = document.querySelector('#jsonFile');
    const fullPath = input.value;

    if (fullPath) {
        var file = input.files[0];
        var reader = new FileReader();

        reader.onload = function (e) {
            var json = JSON.parse(e.target.result);
            json.forEach(element => {
                game.addTask(new Task(element.name));
            });

            // Sauvegarde l'état actuel du jeu dans le stockage local
            localStorage.setItem("current_game", JSON.stringify(game));
        };

        reader.readAsText(file);
    }
}/**
 * Manipule le chargement d'un fichier JSON, crée des tâches à partir de son contenu et retourne un tableau de tâches.
 * @returns {Task[]} - Tableau contenant les tâches créées à partir du fichier JSON.
 */
function handleLoadFileFromJson() {
    const input = document.querySelector('#jsonFile');
    const fullPath = input.value;
    let tasks = [];

    if (fullPath) {
        var file = input.files[0];
        var reader = new FileReader();

        reader.onload = function (e) {
            var json = JSON.parse(e.target.result);
            json.forEach(element => {
                tasks.push(new Task(element.name));
            });
        };

        reader.readAsText(file);
    }

    return tasks;
}