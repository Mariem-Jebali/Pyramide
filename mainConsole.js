// ce code JS Pour afficher le résultat dans le console

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Salut, bienvenue dans ma super pyramide ! Combien d\'étages veux-tu ? ', (value) => {
    let etage = value;
    pyramid(etage);
});

function pyramid(n) {
    for(let i=1; i<= n; i++){
        let str = ' '.repeat(n-i);
        let str2 = '*'. repeat(i*2 -1)
        console.log(str + str2 + str);
    }
}
