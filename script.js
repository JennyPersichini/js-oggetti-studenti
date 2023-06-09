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

    console.log(key + ": " + student[key]);

};

//3. Creare un array di oggetti di studenti (ossìa oggetti con le proprietà sopra descritte).

let students = [

    {
        name: "Pinco",
        surname: "Pallino",
        age: 19,
        peso: 78
    },

    {
        name: "Sara",
        surname: "Verdi",
        age: 25,
        peso: 75
    },

    {
        name: "Michela",
        surname: "Bianchi",
        age: 30,
        peso: 81
    },

    {
        name: "Jimmy",
        surname: "Patato",
        age: 18,
        peso: 68
    },
    
    {
        name: "Sharon",
        surname: "Azzurro",
        age: 28,
        peso: 59
    },
]

console.log(students);

//4. Ciclare su tutti gli studenti e stampare per ognuno di essi: nome e cognome.

for (let i = 0; i < students.length; i++) {
    console.log("Nome: " + students[i].name);
    console.log("Cognome: " + students[i].surname);
}

//5. Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere all’array creato in precedenza, 
//un nuovo oggetto studente inserendo nell’ ordine: nome, cognome e età.

let studentUser={
    name: prompt("Inserire il nome dello studente"),
    surname: prompt("Inserire il cognome dello studente"),
    age: prompt("Inserire l'età dello studente")
}

students.push(studentUser);

//BONUS:
//Usiamo il DOM per stampare e chiedere le informazioni all'utente!

function PrintStudents(){
    students.forEach(student => {
        console.log(`Name : ${student.name}`);
        console.log(`Surname : ${student.surname}`)
    })
}

PrintStudents();