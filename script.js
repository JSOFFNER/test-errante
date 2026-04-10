// // Variable
// let maVar = "true" // Valeur qui est amené à changer
// const maConstante = "Autre Valeur" // Ne change jamais

// // Structure conditionnelle
// let autreVar = "Je suis dans le if"

// if(maVar == "true") {
//     console.log(autreVar)
// }
// switch(maVar) {
//     case "true":
//         console.log("C'est ok")
//         break
//     case "titi":
//         console.log("C'est pas ok")
//         break
//         default: 
//         console.log("On est dans le cas par défaut")
// }

// // Ternaire
// // variable = (condition) ? valeur si vrai : valeur si faux
// let age = 22
// const information = age >= 18 ? "Majeur" : "Mineur"

// if (age > 16 && age < 18) {
//     console.log("Tu es presque majeur")
// } else if (age >= 18 && age < 30) {
//     console.log("Tu es un jeune adulte") 
// }

// // Boucles While For ForEach
// // While
// // For 
//     //for (compteur; condition; incrémentation/décrémentation)
//     // for in 
//     // for of
// //ForEach

// age = 22
// const prenom = "Julien"
// const nom = "Soffner"
// // Ternaire
// console.log(`Bonjour, je m'appelle ${prenom} ${nom}, j'ai ${age} ans.`)

// //for (compteur; condition; incrémentation/décrémentation)
// for(let i; i < 100; i = i +2) {
//     console.log("Nombre pair : "+ i) 
// }

// // boucle while
// // Amorçage, la variable de boucle
// let i = 1
// while(i < 100) {
//     console.log(`Nombre impair : ${i}`)
//     // Modification de la variable de condition
//     i+=2
// }

// // DRY = Don't Repeat Yourself

// // Fonction
// function direBonjour(prenom){
//     console.log(`Bonjour ${prenom}`)

// }

// direBonjour("Julien")
// direBonjour("Sophie")

// const sayHello = (prenom) => {
//     console.log(`Hello ${prenom}`)
// }
// sayHello("Julien")
// sayHello("Sophie")
        
// //cheatsheet Emmet section>article>h1+p*3>lorem

// const h1 = document.querySelector("h1")
// h1.innerHTML = "Toto <br> Titi"

// const monPremierArticle =`
//     <article>
//             <div>
//                 <h2>Yes I</h2>
//                 <ul>
//                     <li>A</li>
//                     <li>B</li>
//                     <li>C</li>
//                     <li>D</li>
//                     <li>E</li>
//                 </ul>
//             </div>
//         </article>
// `
// //précisement placer l'élément
// // insertAdjacentHTML(position, html)
// document.querySelector("body > section > section:nth-child(2)").insertAdjacentHTML("afterbegin", monPremierArticle)

// // beforebegin
// // afterbegin
// // beforeend
// // afterend

// const h1 = document.querySelector("h1")
// let count = 0
// const title = h1.textContent
// h1.addEventListener('click', () =>{
//     count++
//     h1.textContent = `${title} ${count}`
// })


// localStorage.setItem("clé", Valeur au format string)
localStorage.setItem("prenom", "Julien")
//  localStorage.getItem("clé")
const prenom = localStorage.getItem("prenom")
console.log(prenom)

const person = {
    prenom: "Julien",
    nom: "Soffner",
    age: 22
}

const strPerson = JSON.stringify(person) // Convertit un objet en string
localStorage.setItem("person", strPerson)
const parsePerson = JSON.parse(localStorage.getItem('person'))
console.log(parsePerson)
console.log(localStorage.getItem('person'))

const fruits = ["tomate", "pomme", "banane", "orange"]
const ul = document.querySelector("ul")

fruits.forEach((fruit) => {
    ul.insertAdjacentHTML("afterbegin", `<li>${fruit}</li>`)

})


const buttons = document.querySelectorAll("button")

buttons.forEach((button) => {
    button.addEventListener("click", (el) => {
        console.log("Tu as cliqué sur le bouton")
    })
})