const students = [
    { id: 21, name: 'syful' },
    { id: 22, name: 'noman' },
    { id: 23, name: 'sabbir' }
];
/*
let name = [];
for (let i = 0; i < students.length; i++) {
    let element = students[i];
    let result = element.name;
    name.push(result);
}
console.log(name);

const names = students.map(function(s) {
    return s.name;
});
console.log(names);
*/
const names = students.map(s => s.name);
console.log(names);