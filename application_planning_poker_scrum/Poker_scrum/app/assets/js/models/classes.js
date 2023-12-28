/**
 * La classe Game représente un jeu avec des joueurs et des tâches.
 */
class Game {
    /**
     * Crée une instance de Game.
     * @constructor
     */
    constructor() {
        /**
         * Date de début du jeu.
         * @type {Date}
         * @private
         */
        this._start_at = new Date();

        /**
         * Date de fin du jeu.
         * @type {Date|null}
         * @private
         */
        this._end_at = null;

        /**
         * Liste des joueurs participant au jeu.
         * @type {Array}
         * @private
         */
        this._players = [];

        /**
         * Liste des tâches pour le jeu.
         * @type {Array}
         * @private
         */
        this._tasks = [];
    }

    /**
     * Obtient la date de début du jeu.
     * @returns {Date} Date de début du jeu.
     */
    get start_at() {
        return this._start_at;
    }

    /**
     * Obtient la date de fin du jeu.
     * @returns {Date|null} Date de fin du jeu.
     */
    get end_at() {
        return this._end_at;
    }

    /**
     * Définit la date de début du jeu.
     * @param {Date} value - Date de début du jeu.
     */
    set start_at(value) {
        this._start_at = value;
    }

    /**
     * Ajoute un joueur à la liste des joueurs du jeu.
     * @param {any} player - Joueur à ajouter.
     */
    addPlayer(player) {
        this._players.push(player);
    }

    /**
     * Obtient la liste des joueurs du jeu.
     * @returns {Array} Liste des joueurs du jeu.
     */
    get players() {
        return this._players;
    }

    /**
     * Ajoute une tâche à la liste des tâches du jeu.
     * @param {any} task - Tâche à ajouter.
     */
    addTask(task) {
        this._tasks.push(task);
    }

    /**
     * Obtient la liste des tâches du jeu.
     * @returns {Array} Liste des tâches du jeu.
     */
    getTasks() {
        return this._tasks;
    }

    /**
     * Crée une instance de jeu en fonction du type spécifié.
     * @param {string} gameType - Type de jeu ("Strict", "Average", par défaut "Game").
     * @returns {Game} Instance du jeu créée.
     * @static
     */
    static createGame(gameType) {
        switch (gameType) {
            case "Strict":
                return new Strict();
            case "Average":
                return new Average();
            default:
                return new Game();
        }
    }

    /**
     * Obtient une instance unique (singleton) du jeu en fonction du type spécifié.
     * @param {string} gameType - Type de jeu ("Strict", "Average", par défaut "Game").
     * @returns {Game} Instance unique du jeu créée.
     * @static
     */
    static getInstance(gameType) {
        if (!Game.instance) {
            Game.instance = Game.createGame(gameType);
        }
        delete Game.instance;
        return Game.instance = Game.createGame(gameType);
    }
}

/**
 * La classe Strict représente un type spécifique de jeu avec des règles strictes héritant de la classe Game.
 */
class Strict extends Game {
    /**
     * Crée une instance de Strict.
     * @constructor
     */
    constructor() {
        super(); // Appelle le constructeur de la classe parente (Game).

        /**
         * Type spécifique de jeu ("Strict").
         * @type {string}
         * @private
         */
        this._type = "Strict";
    }

    /**
     * Obtient le type spécifique de jeu.
     * @returns {string} Type de jeu ("Strict").
     */
    get type() {
        return this._type;
    }
}

/**
 * La classe Average représente un type spécifique de jeu avec des règles moyennes héritant de la classe Game.
 */
class Average extends Game {
    /**
     * Crée une instance de Average.
     * @constructor
     */
    constructor() {
        super(); // Appelle le constructeur de la classe parente (Game).

        /**
         * Type spécifique de jeu ("Average").
         * @type {string}
         * @private
         */
        this._type = "Average";
    }

    /**
     * Obtient le type spécifique de jeu.
     * @returns {string} Type de jeu ("Average").
     */
    get type() {
        return this._type;
    }
}

/**
 * La classe Player représente un joueur dans un jeu.
 */
class Player {
    /**
     * Crée une instance de Player avec un nom spécifié.
     * @param {string} name - Nom du joueur.
     * @constructor
     */
    constructor(name) {
        /**
         * Nom du joueur.
         * @type {string}
         * @private
         */
        this._name = name;
    }

    /**
     * Obtient le nom du joueur.
     * @returns {string} Nom du joueur.
     */
    get name() {
        return this._name;
    }
}
/**
 * La classe Task représente une tâche dans un jeu.
 */
class Task {
    /**
     * Crée une instance de Task avec un nom spécifié.
     * @param {string} name - Nom de la tâche.
     * @constructor
     */
    constructor(name) {
        /**
         * Nom de la tâche.
         * @type {string}
         * @private
         */
        this._name = name;
    }

    /**
     * Obtient le nom de la tâche.
     * @returns {string} Nom de la tâche.
     */
    get name() {
        return this._name;
    }
}