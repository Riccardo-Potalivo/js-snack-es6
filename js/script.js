
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