let nomeHeroi = "Igor"
let nivelHeroi = 3260
let nivel = ""

const Ferro = 1000
const Bronze = 2000
const Prata = 5000  


if (nivelHeroi >= Prata) {
    nivel = "Prata";
} else if (nivelHeroi >= Bronze) {
    nivel = "Bronze";
} else if (nivelHeroi >= Ferro) {
    nivel = "Ferro";
} else {
    nivel = "Nenhum";
}

switch (nivel) {
    case "Prata":
        console.log("O Herói de nome " + nomeHeroi + " está no nível de XP " + nivelHeroi + " Prata");
        break;
    case "Bronze":
        console.log("O Herói de nome " + nomeHeroi + " está no nível de XP " + nivelHeroi + " Bronze");
        break;
    case "Ferro":
        console.log("O Herói de nome " + nomeHeroi + " está no nível de XP " + nivelHeroi + " Ferro");
        break;
    default:
        console.log("O Herói de nome " + nomeHeroi + " ainda não alcançou nenhum nível.");
}