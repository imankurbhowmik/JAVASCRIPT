const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros);

let team1 = ["Mainak", "Hrishav", "Barnali"]
let team2 = ["Ankur", "Purni", "Tanisha"]

let total_team = team2.concat(team1)
console.log(total_team);

// let final_total_team = team1.push(team2)
// console.log(final_total_team);

// * concat doesnot change the actual array but push does

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("Ankur")) // false
console.log(Array.from("Ankur"))  //converts to an array of elements 
console.log(Array.from({name: "ankur"})) // returns an empty array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));  //[100,200,300]