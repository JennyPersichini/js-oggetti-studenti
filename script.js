//1. Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome, età e peso.

let student = {
    name: "Mario",
    surname: "Rossi",
    age: 20,
    peso: 80
};

console.log(student);

//2. Stampare in console attraverso un ciclo for-in tutte le proprietà dell'oggetto con anche i relativi valori.

for (let key in student) {

    console.log(key);
    console.log(student[key]);

};