let prompt = require('prompt-sync')({ sigint: true })


// Answer to Question 1

// let highest = 0;
// let lowest = 0;

// for (let i = 1; i < numbers.length; i++) {
//     if (numbers[i] > highest) {
//         highest = numbers[i];
//     }
//     if (numbers[i] < lowest) {
//         lowest = numbers[i];
//     }

//     return {
//         highest, lowest
//     };

// }

// const



// number 2 answer

function generate_passowrd(length) {
    const characters = 'weraegaeriwebfgiwebacfgy';
    let password = '';


    while (password.length < length) {
        const inter = Math.floor(Math.random() * characters.length);
        const werere = characters[inter];

        if (password.indexOf(werere) === -1) {
            password += werere;

        }
    }

    return password;

}

const passwordLength = 15;
const password = generate_passowrd(passwordLength);

console.log("Generate Password", password);
