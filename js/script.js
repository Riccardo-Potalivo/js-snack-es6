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

student.forEach((el) =>
{
    console.log(el.name.toUpperCase());
    
}
)