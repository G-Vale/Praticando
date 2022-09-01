// Usando variavel para acompanhar se uma musica ja esta em uma lista de reproduçao
// ou nao para um site de streaming de musica

let song = "Don't stop me now"
let included = true;

console.log("New entry: " + song);
if (included) {
    console.log ("Already included!");
}
console.log ("Save and continue");


// CARTEIRA ADICIONA OU REMOVER 

const carteira = 42

// LISTA DE AMIGOS EM COMUM (ADD STRINGS A UMA VARIAVEL)

const amigo1 = "Jean"
const amigo2 = "Hector"
const amigo3 = "Flavio"
const amigo4 = "Ana"

// Para melhor organizaçao usamos ARRAY (''[]'')

const amigo = ["Jean", "Hector", "Flavio", "Ana"];

// Para acessar um strins dentro do ARRAY

amigo [0] = 2 ;   // Selecionou "JEAN"
amigo [3] = 0 ;   // Selecionou "ANA"

// ARRAY de Push e Popping, Adicionando e removendo valores com ARRAYS. "LISTA DE TAREFAS"

amigo.push("Renan");   // Para Add um elemento no ARRY
amigo.pop("Renan");    // Para Remover um elemento do ARRAY

// Pode remover ou adicionar qualque coisa ate TRUE/FALSE

const ordem = [false, false, true]
ordem .push ();
console.log (ordem);
ordem .pop ()
console.log (ordem)

// Como contar os elementos na ARRAY
// Como usadon para contar uma ARRAY, usando LENGTH 

const ruas = [2, 4, 7, 76,  354, 54, 3232, 278, 32, 0, 43, 231];
console.log(ruas.length);
    for (let i = 0; i < ruas.length; i++){
        console.log(ruas[i])
    }

//FUNCTION

//ENDETER MELHOR COMO FUNCIONA O RETURN NO FUNCTION 


// CONTADOR EM JAVASCRIPT

var counter = 130.32

function upVote() {
    counter = counter + 100;

    document.getElementById("votos").innerHTML = counter + " votos";
}

function downVote() {
    counter = counter - 100;

    document.getElementById("votos").innerHTML = counter + " votos";
}

// cons