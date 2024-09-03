const school = 'BCIC School and College';

console.log(school);
console.log(school.toLowerCase());
console.log(school.toUpperCase());


// uppercase: ABCD EFG
// lowercase: abcd efg


const subject = 'Chemistry';
const book = 'ChemIsTry';


if(subject.toLowerCase() === book.toLowerCase()){
    console.log('I am reading book.');
}
else {
    console.log('Not my book.');
}