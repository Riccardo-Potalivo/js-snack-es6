/*
const vipList =
[
    'Brad Pitt', 
    'Johnny Depp', 
    'Lady Gaga', 
    'Cristiano Ronaldo', 
    'Georgina Rodriguez', 
    'Chiara Ferragni', 
    'Fedez', 
    'George Clooney', 
    'Amal Clooney', 
    'Maneskin'
]

console.log(vipList);

const tableVip = [];


vipList.forEach((vip, index) =>
{
    console.log(vip);
    console.log(index);
    const guest =
    {
        tableName: "Tavolo Vip",
        guestName: vip,
        place: index + 1
    }
    tableVip.push(guest);

})

console.log(tableVip);
*/


// snack 2

/*
const student = 
[
    {
        id: 213,
        name: "Marco della Rovere",
        grades: 78
    },
    {
        id: 110,
        name: "Paola Cortellessa",
        grades: 96
    },
    {
        id: 250,
        name: "Andrea Mantegna",
        grades: 48
    },
    {
        id: 145,
        name: "Gaia Borromini",
        grades: 74
    },
    {
        id: 196,
        name: "Luigi Grimaldello",
        grades: 68
    },
    {
        id: 102,
        name: "Piero della Francesca",
        grades: 50
    },
    {
        id: 120,
        name: "Francesca da Polenta",
        grades: 84
    }
];

// lista nomi in maiuscolo
console.log("Task 1")

student.forEach((el) =>
{
    console.log(el.name.toUpperCase());
});

// voti superiori a 70
console.log("Task 2")

// nome studenti over 70
student.forEach((el) =>
{
    if(el.grades > 70)
    {
        console.log(el.name);
    }
}
);


// voti superiori a 70 e id superiore a 120
console.log("Task 3")

// nome studente con voti superiori a 70 e id superiore a 120

student.forEach((el) =>
{
    if(el.grades > 70 && el.id > 120)
    {
        console.log(el.name);
    }
});

const over70120 = student.filter((el) => el.grades > 70 && el.id > 120);
console.log(over70120);
*/


// snack 3


console.log('snack 3');

const bike =
[
    {
        name: 'Bianchi',
        peso: 9
    },
    {
        name: 'Look',
        peso: 7
    },
    {
        name: 'Willier ',
        peso: 6
    },
    {
        name: 'Pinarello',
        peso: 8
    },
    {
        name: 'Colnago',
        peso: 10
    },
    {
        name: 'Canyon',
        peso: 5
    }
];

console.log(bike)

let bikeLighter = bike[0];

bike.forEach(element => { (element.peso < bikeLighter.peso) ? bikeLighter = element : '' });


const {name, peso} = bike;

console.log(bikeLighter)



// sanck 4

console.log('snack 4');

