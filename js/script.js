var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];
var allNames = femaleNames.concat(maleNames);
var newName = 'Marian';

if (allNames.indexOf(newName) === -1) {
  allNames.push(newName);
}

alert("Imiona znajdujące sie w tablicy to :" + allNames.join(" | "));
var userName = prompt("Podaj imię które chcesz dodać do tablicy imion");

var newAllNames = allNames.filter(function(name) {
  return (name != userName);
});

newAllNames.push(userName);

alert("Nowa imiona w tablicy to: " + newAllNames.join(" | "));
