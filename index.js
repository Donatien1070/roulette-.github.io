console.log("Bienvenue dans le casino de Gogo le Rigolo.");

const listeCouleurs = ["noir", "rouge"];

setTimeout(function() {
    console.log("Le seul jeu à ce jour est la roulette!");

    const userBetColorYN = prompt("Si vous voulez parier sur une couleur ? si NON vous pariez sur un nombre et une couleur. oui / non :");

    if (userBetColorYN.toLowerCase() === "oui") {
        console.log("D'accord, choisissez entre noir ou rouge :");

        const userBetColor = prompt("");
        const couleurAleatoire = listeCouleurs[Math.floor(Math.random() * listeCouleurs.length)];

        setTimeout(function() {
            console.log("Couleur du joueur :", userBetColor);
            console.log("Couleur tirée au sort :", couleurAleatoire);

            if (userBetColor.toLowerCase() === couleurAleatoire) {
                console.log("Félicitations ! Vous avez gagné !");
            } else {
                console.log("Dommage, meilleure chance la prochaine fois.");
            }
        }, 5000);

    } else {
        console.log("Choisissez un nombre entre 0 et 36.");

        const userInputChiffre = prompt("Chiffre :");

        if (userInputChiffre === "0") {
            console.log("La couleur est automatiquement Vert");
            const userInputCouleur = "Vert";
        } else {
            console.log("Choisissez une couleur entre Noir et Rouge.");
            const userInputCouleur = prompt("Couleur :");

            const nombreAleatoire = Math.floor(Math.random() * 37);
            const couleurAleatoire = listeCouleurs[Math.floor(Math.random() * listeCouleurs.length)];

            setTimeout(function() {
                console.log("Couleur du joueur :", userInputCouleur);
                console.log("Nombre du joueur :", userInputChiffre);
                console.log("Couleur tirée au sort :", couleurAleatoire);
                console.log("Nombre tiré au sort :", nombreAleatoire);

                if (userInputChiffre == nombreAleatoire && userInputCouleur.toLowerCase() == couleurAleatoire) {
                    console.log("Félicitations ! Vous avez gagné !");
                } else {
                    console.log("Dommage, meilleure chance la prochaine fois.");
                }
            }, 5000);
        }
    }
}, 2000);
